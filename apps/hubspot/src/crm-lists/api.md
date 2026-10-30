<h1 id="crm-lists">CRM Lists v2026-09</h1>

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
|cms.membership.access_groups.write||
|crm.lists.read||
|crm.lists.write||
|crm.segments.read||
|crm.segments.write||

* API Key (private_apps)
    - Parameter Name: **private-app**, in: header.

* API Key (private_apps_legacy)
    - Parameter Name: **private-app-legacy**, in: header.

<h1 id="crm-lists-basic">Basic</h1>

## List

<a id="opIdget-/crm/lists/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09`

Retrieve a list of CRM lists in your HubSpot account. This endpoint allows you to filter the lists by their IDs and optionally include filters applied to the lists. It is useful for managing and organizing your CRM data by accessing specific lists.

<h3 id="list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|includeFilters|query|boolean|false|A boolean indicating whether to include filters applied to the lists in the response. Defaults to false.|
|listIds|query|[string]|false|An array of list IDs to filter the lists returned. Each ID should be a string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListsByIdResponse](#schemalistsbyidresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Create List

<a id="opIdpost-/crm/lists/2026-09"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/lists/2026-09`

Create a new list in your HubSpot account using the specified parameters. This endpoint allows you to define the properties and criteria for the list, which can be used for organizing and managing contacts or other CRM objects.

> Body parameter

```json
null
```

<h3 id="create-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListCreateRequest](#schemalistcreaterequest)|true|none|
|» customProperties|body|object|false|An object containing custom properties for the list. These properties allow for additional customization of the list.|
|» » **additionalProperties**|body|string|false|none|
|» filterBranch|body|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|An object that defines the filter criteria for the list. It determines which records are included in the list based on specified conditions.|
|» » *oneOf*|body|[PublicOrFilterBranch](#schemapublicorfilterbranch)|false|none|
|» » *oneOf*|body|[PublicAndFilterBranch](#schemapublicandfilterbranch)|false|none|
|» » *oneOf*|body|[PublicNotAllFilterBranch](#schemapublicnotallfilterbranch)|false|none|
|» » *oneOf*|body|[PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch)|false|none|
|» » *oneOf*|body|[PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch)|false|none|
|» » *oneOf*|body|[PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch)|false|none|
|» » *oneOf*|body|[PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|none|
|» listFolderId|body|integer(int32)|false|A string representing the ID of the folder where the list will be stored. This helps in organizing lists into folders.|
|» listPermissions|body|[PublicListPermissions](#schemapubliclistpermissions)|false|none|
|» membershipSettings|body|[PublicMembershipSettings](#schemapublicmembershipsettings)|false|none|
|» name|body|string|true|A string representing the name of the list. This is used to identify the list within the system.|
|» objectTypeId|body|string|true|A string indicating the type of objects that the list will contain. This helps in categorizing the list based on the object type.|
|» processingType|body|string|true|A string that specifies the processing type of the list. It defines how the list is processed within the system.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="create-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListCreateResponse](#schemalistcreateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write ), oauth2 ( Scopes: crm.segments.write )
</aside>

## List all

<a id="opIdpost-/crm/lists/2026-09/all_/crm/lists/2026-09-beta/all"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09/all \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/lists/2026-09/all`

Retrieve all lists in the CRM system. This endpoint allows you to fetch a comprehensive list of all available lists, which can be useful for managing and organizing your CRM data effectively.

> Body parameter

```json
null
```

<h3 id="list-all-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListAllRequest](#schemalistallrequest)|true|none|
|» additionalProperties|body|[string]|true|An array of strings representing additional properties to include in the list retrieval.|
|» after|body|string|false|A string used as a paging cursor token to retrieve the next set of results.|
|» count|body|integer(int32)|false|An integer specifying the number of results to retrieve.|
|» objectTypeId|body|string|false|A string representing the unique identifier for the object type of the lists.|
|» processingTypes|body|[string]|true|An array of strings specifying the types of processing to apply to the request.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-all-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiCollectionResponsePublicObjectListSearchResult](#schemaapicollectionresponsepublicobjectlistsearchresult)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## List folders

<a id="opIdget-/crm/lists/2026-09/folders"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09/folders \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/folders`

Retrieve a list of folders within the CRM lists. This endpoint can be used to navigate through the folder structure by specifying a folder ID. It is useful for organizing and managing lists within folders.

<h3 id="list-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|query|string|false|The unique identifier of the folder to retrieve. Defaults to '0' if not specified.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListFolderFetchResponse](#schemalistfolderfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Create Folder

<a id="opIdpost-/crm/lists/2026-09/folders"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09/folders \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/lists/2026-09/folders`

Create a new folder within the CRM lists in your HubSpot account. This operation allows you to organize your lists into folders for better management and accessibility.

> Body parameter

```json
null
```

<h3 id="create-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListFolderCreateRequest](#schemalistfoldercreaterequest)|true|none|
|» name|body|string|true|A string representing the name of the folder to be created.|
|» parentFolderId|body|string|false|A string representing the unique identifier of the parent folder under which the new folder will be created.|

> Example responses

> 200 Response

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
|200|OK|successful operation|[ListFolderCreateResponse](#schemalistfoldercreateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Move List

<a id="opIdput-/crm/lists/2026-09/folders/move-list"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09/folders/move-list \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/lists/2026-09/folders/move-list`

Move a list to a different folder within your HubSpot account. This operation requires specifying the list and the target folder. It is useful for organizing lists into different categories or structures.

> Body parameter

```json
null
```

<h3 id="move-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListMoveRequest](#schemalistmoverequest)|true|none|
|» listId|body|string|true|The unique identifier of the list to be moved. It is a string.|
|» newFolderId|body|string|true|The unique identifier of the folder where the list will be moved to. It is a string.|

> Example responses

> default Response

```json
null
```

<h3 id="move-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Delete folder

<a id="opIddelete-/crm/lists/2026-09/folders/{folderId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/folders/{folderId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/lists/2026-09/folders/{folderId}`

Delete a specific folder within the CRM lists by providing the folder's unique identifier. This operation is useful for removing folders that are no longer needed or to clean up the folder structure within your CRM lists.

<h3 id="delete-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The unique identifier of the folder to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Move Folder

<a id="opIdput-/crm/lists/2026-09/folders/{folderId}/move/{newParentFolderId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/folders/{folderId}/move/{newParentFolderId}' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /crm/lists/2026-09/folders/{folderId}/move/{newParentFolderId}`

Move a folder to a new parent folder within the CRM lists. This operation is useful for reorganizing your folder structure by changing the parent folder of a specified folder.

<h3 id="move-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The unique identifier of the folder to be moved.|
|newParentFolderId|path|string|true|The unique identifier of the new parent folder where the folder will be moved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="move-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListFolderFetchResponse](#schemalistfolderfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Rename folder

<a id="opIdput-/crm/lists/2026-09/folders/{folderId}/rename"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/folders/{folderId}/rename' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /crm/lists/2026-09/folders/{folderId}/rename`

Rename an existing folder in the CRM lists by specifying the folder's ID and the new desired name. This can be useful for organizing and updating folder structures within your account.

<h3 id="rename-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folderId|path|string|true|The unique identifier of the folder to be renamed.|
|newFolderName|query|string|false|The new name for the folder. It should be a string representing the desired folder name.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="rename-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListFolderFetchResponse](#schemalistfolderfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Retrieve ID Mapping

<a id="opIdget-/crm/lists/2026-09/idmapping"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09/idmapping \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/idmapping`

Retrieve the mapping of legacy list IDs to their current IDs in the HubSpot system. This endpoint is useful for migrating or updating systems that rely on legacy list identifiers.

<h3 id="retrieve-id-mapping-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|legacyListId|query|string|false|The legacy list ID for which you want to retrieve the current ID mapping.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-id-mapping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicMigrationMapping](#schemapublicmigrationmapping)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Map IDs

<a id="opIdpost-/crm/lists/2026-09/idmapping"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09/idmapping \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/lists/2026-09/idmapping`

Map legacy list IDs to their corresponding new IDs in the HubSpot system. This endpoint is useful for migrating data from older systems to the current HubSpot structure, ensuring that all list references are updated correctly.

> Body parameter

```json
null
```

<h3 id="map-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="map-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicBatchMigrationMapping](#schemapublicbatchmigrationmapping)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Retrieve List

<a id="opIdget-/crm/lists/2026-09/object-type-id/{objectTypeId}/name/{listName}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/object-type-id/{objectTypeId}/name/{listName}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/object-type-id/{objectTypeId}/name/{listName}`

Retrieve a specific list by its name and object type ID in your HubSpot account. This endpoint allows you to access the details of a list, which can be useful for managing and analyzing your CRM data. You can also choose to include filters in the response.

<h3 id="retrieve-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listName|path|string|true|The name of the list to retrieve.|
|objectTypeId|path|string|true|The unique identifier of the object type associated with the list.|
|includeFilters|query|boolean|false|A boolean indicating whether to include filters in the response. Defaults to false.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListFetchResponse](#schemalistfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Retrieve memberships

<a id="opIdget-/crm/lists/2026-09/records/{objectTypeId}/{recordId}/memberships"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/records/{objectTypeId}/{recordId}/memberships' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/records/{objectTypeId}/{recordId}/memberships`

Retrieve the list memberships for a specific record within a specified object type. This endpoint is useful for understanding which lists a particular record is a member of, based on the object type and record ID provided.

<h3 id="retrieve-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|objectTypeId|path|string|true|The unique identifier of the object type to which the record belongs.|
|recordId|path|string|true|The unique identifier of the record for which memberships are being retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiCollectionResponseRecordListMembership](#schemaapicollectionresponserecordlistmembership)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Retrieve list

<a id="opIdget-/crm/lists/2026-09/{listId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/{listId}`

Retrieve details of a specific list in your HubSpot account using the list's unique identifier. This endpoint allows you to optionally include filters associated with the list in the response.

<h3 id="retrieve-list-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list to retrieve.|
|includeFilters|query|boolean|false|A boolean indicating whether to include the list's filters in the response. Defaults to false.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-list-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListFetchResponse](#schemalistfetchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Delete

<a id="opIddelete-/crm/lists/2026-09/{listId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/lists/2026-09/{listId}`

Delete a specific list in your HubSpot account using its unique identifier. This operation will permanently remove the list and its associated data, ensuring it is no longer accessible.

<h3 id="delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list to delete.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## List memberships

<a id="opIdget-/crm/lists/2026-09/{listId}/memberships"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/memberships' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/{listId}/memberships`

Retrieve the memberships of a specific list in your HubSpot account. This endpoint allows you to paginate through the list memberships using cursor-based pagination. It is useful for obtaining detailed membership information for a given list.

<h3 id="list-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list whose memberships are to be retrieved.|
|after|query|string|false|A cursor token for pagination. Use the value from the previous response's paging.next.after field to retrieve the next set of results.|
|before|query|string|false|A cursor token for pagination. Use this to retrieve the previous set of results.|
|limit|query|integer(int32)|false|The maximum number of results to display per page. Defaults to 100.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="list-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiCollectionResponseJoinTimeAndRecordId](#schemaapicollectionresponsejointimeandrecordid)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Delete memberships

<a id="opIddelete-/crm/lists/2026-09/{listId}/memberships"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/memberships' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/lists/2026-09/{listId}/memberships`

Delete all memberships associated with a specific list in your HubSpot account. This operation is useful when you need to remove all members from a list, effectively clearing its membership data.

<h3 id="delete-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list whose memberships are to be deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Add memberships

<a id="opIdput-/crm/lists/2026-09/{listId}/memberships/add"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/memberships/add' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/lists/2026-09/{listId}/memberships/add`

Add memberships to a specified list in your HubSpot account. This endpoint allows you to add multiple memberships to a list identified by the listId. It is useful for managing list memberships in bulk, ensuring that the specified records are included in the list.

> Body parameter

```json
null
```

<h3 id="add-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list to which memberships will be added.|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="add-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MembershipsUpdateResponse](#schemamembershipsupdateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Update memberships

<a id="opIdput-/crm/lists/2026-09/{listId}/memberships/add-and-remove"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/memberships/add-and-remove' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/lists/2026-09/{listId}/memberships/add-and-remove`

Update the memberships of a list by adding and removing members in a single operation. This endpoint allows you to efficiently manage list memberships by specifying which members to add and which to remove in one request.

> Body parameter

```json
null
```

<h3 id="update-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list whose memberships are to be updated.|
|body|body|[MembershipChangeRequest](#schemamembershipchangerequest)|true|none|
|» recordIdsToAdd|body|[string]|true|An array of strings representing the unique identifiers of records to be added to the list.|
|» recordIdsToRemove|body|[string]|true|An array of strings representing the unique identifiers of records to be removed from the list.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MembershipsUpdateResponse](#schemamembershipsupdateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Add memberships

<a id="opIdput-/crm/lists/2026-09/{listId}/memberships/add-from/{sourceListId}"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/memberships/add-from/{sourceListId}' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /crm/lists/2026-09/{listId}/memberships/add-from/{sourceListId}`

Add memberships to a specified list from another source list. This operation is useful for consolidating list memberships by transferring members from one list to another. The endpoint does not return any content upon successful execution.

<h3 id="add-memberships-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the target list to which memberships will be added.|
|sourceListId|path|string|true|The unique identifier of the source list from which memberships will be transferred.|

> Example responses

> default Response

```json
null
```

<h3 id="add-memberships-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Retrieve join order

<a id="opIdget-/crm/lists/2026-09/{listId}/memberships/join-order"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/memberships/join-order' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/{listId}/memberships/join-order`

Retrieve the join order of memberships for a specific list in your HubSpot account. This endpoint allows you to view the order in which records joined the list, which can be useful for tracking membership changes over time.

<h3 id="retrieve-join-order-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list whose membership join order is being retrieved.|
|after|query|string|false|The paging cursor token of the last successfully read resource will be returned as the `paging.next.after` JSON property of a paged response containing more results.|
|before|query|string|false|A cursor token to retrieve results before a specific point in the list.|
|limit|query|integer(int32)|false|The maximum number of results to display per page. Defaults to 100.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-join-order-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ApiCollectionResponseJoinTimeAndRecordId](#schemaapicollectionresponsejointimeandrecordid)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Remove memberships

<a id="opIdput-/crm/lists/2026-09/{listId}/memberships/remove"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/memberships/remove' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/lists/2026-09/{listId}/memberships/remove`

Remove memberships from a specific list in your HubSpot account. This operation is useful for managing list memberships by removing specified records from the list. The request requires a list of record IDs to be removed from the specified list.

> Body parameter

```json
null
```

<h3 id="remove-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list from which memberships will be removed.|
|body|body|[string]|true|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="remove-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[MembershipsUpdateResponse](#schemamembershipsupdateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Restore

<a id="opIdput-/crm/lists/2026-09/{listId}/restore"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/restore' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /crm/lists/2026-09/{listId}/restore`

Restore a previously deleted list in your HubSpot account. This operation allows you to recover lists that have been removed, ensuring that any associated data or configurations are reinstated. This can be useful for retrieving lists that were mistakenly deleted or are needed again for ongoing operations.

<h3 id="restore-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list to restore.|

> Example responses

> default Response

```json
null
```

<h3 id="restore-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Retrieve

<a id="opIdget-/crm/lists/2026-09/{listId}/schedule-conversion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/schedule-conversion' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/{listId}/schedule-conversion`

Retrieve the scheduled conversion details for a specific list in your HubSpot account. This endpoint provides information about any scheduled conversions for the specified list, allowing you to manage and track list conversions effectively.

<h3 id="retrieve-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list for which the scheduled conversion details are to be retrieved.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicListConversionResponse](#schemapubliclistconversionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Schedule Conversion

<a id="opIdput-/crm/lists/2026-09/{listId}/schedule-conversion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/schedule-conversion' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/lists/2026-09/{listId}/schedule-conversion`

Schedule a conversion for a specific list in your HubSpot account. This operation allows you to set a conversion time for the list identified by the listId. Use this endpoint to manage the conversion schedule of your lists effectively.

> Body parameter

```json
null
```

<h3 id="schedule-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list for which the conversion schedule is to be set.|
|body|body|[PublicListConversionTime](#schemapubliclistconversiontime)|true|none|
|» *oneOf*|body|[PublicListConversionDate](#schemapubliclistconversiondate)|false|none|
|» *oneOf*|body|[PublicListConversionInactivity](#schemapubliclistconversioninactivity)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="schedule-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[PublicListConversionResponse](#schemapubliclistconversionresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Delete schedule conversion

<a id="opIddelete-/crm/lists/2026-09/{listId}/schedule-conversion"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/schedule-conversion' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /crm/lists/2026-09/{listId}/schedule-conversion`

Delete a scheduled conversion for a specific list in your HubSpot account. This operation is useful when you need to cancel a previously scheduled conversion for a list identified by its listId.

<h3 id="delete-schedule-conversion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list for which the scheduled conversion is to be deleted.|

> Example responses

> default Response

```json
null
```

<h3 id="delete-schedule-conversion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|None|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Retrieve history

<a id="opIdget-/crm/lists/2026-09/{listId}/size-and-edits-history/between"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/size-and-edits-history/between' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /crm/lists/2026-09/{listId}/size-and-edits-history/between`

Retrieve the size and edits history of a specific list within a defined date range. This endpoint is useful for tracking changes and understanding the evolution of list size over time.

<h3 id="retrieve-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list for which the size and edits history is being retrieved.|
|endDate|query|string(date-time)|false|The end date for the history retrieval, formatted as a date-time string.|
|startDate|query|string(date-time)|false|The start date for the history retrieval, formatted as a date-time string.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="retrieve-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListSizeAndEditHistoryResponse](#schemalistsizeandedithistoryresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

## Update list filters

<a id="opIdput-/crm/lists/2026-09/{listId}/update-list-filters"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/update-list-filters' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`PUT /crm/lists/2026-09/{listId}/update-list-filters`

Update the filters for a specific list in your HubSpot account. This operation allows you to modify the criteria used to include objects in the list. You can also specify whether objects should be enrolled in workflows based on the updated filters.

> Body parameter

```json
null
```

<h3 id="update-list-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list whose filters are to be updated.|
|enrollObjectsInWorkflows|query|boolean|false|A boolean indicating whether to enroll objects in workflows based on the updated filters. Defaults to false.|
|body|body|[ListFilterUpdateRequest](#schemalistfilterupdaterequest)|true|none|
|» filterBranch|body|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|true|A complex object that defines the structure and logic of the filters to be applied to the list. It can include various types of filter branches and filters, allowing for detailed and specific filtering criteria.|
|» » *oneOf*|body|[PublicOrFilterBranch](#schemapublicorfilterbranch)|false|none|
|» » *oneOf*|body|[PublicAndFilterBranch](#schemapublicandfilterbranch)|false|none|
|» » *oneOf*|body|[PublicNotAllFilterBranch](#schemapublicnotallfilterbranch)|false|none|
|» » *oneOf*|body|[PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch)|false|none|
|» » *oneOf*|body|[PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch)|false|none|
|» » *oneOf*|body|[PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch)|false|none|
|» » *oneOf*|body|[PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|none|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-list-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListUpdateResponse](#schemalistupdateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

## Update list name

<a id="opIdput-/crm/lists/2026-09/{listId}/update-list-name"></a>

> Code samples

```bash
curl 'https://api.hubapi.com/crm/lists/2026-09/{listId}/update-list-name' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /crm/lists/2026-09/{listId}/update-list-name`

Update the name of a specific list in your HubSpot account. This endpoint allows you to change the list's name by specifying the new name as a query parameter. It is useful for keeping your lists organized and up-to-date with relevant titles.

<h3 id="update-list-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listId|path|string|true|The unique identifier of the list whose name is to be updated.|
|includeFilters|query|boolean|false|A boolean indicating whether to include filters in the response. Defaults to false.|
|listName|query|string|false|The new name for the list. It should be a string representing the desired name.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="update-list-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListUpdateResponse](#schemalistupdateresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.lists.write crm.segments.read ), oauth2 ( Scopes: cms.membership.access_groups.write crm.lists.read ), oauth2 ( Scopes: crm.segments.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.segments.write ), oauth2 ( Scopes: crm.lists.read crm.lists.write ), oauth2 ( Scopes: cms.membership.access_groups.write crm.segments.read )
</aside>

<h1 id="crm-lists-batch">Batch</h1>

## Batch read memberships

<a id="opIdpost-/crm/lists/2026-09/records/memberships/batch/read"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09/records/memberships/batch/read \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/lists/2026-09/records/memberships/batch/read`

Retrieve batch membership information for records within specified lists. This endpoint is useful for obtaining membership details in bulk, allowing for efficient data retrieval when dealing with multiple records.

> Body parameter

```json
null
```

<h3 id="batch-read-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchInputRecordIdInput](#schemabatchinputrecordidinput)|true|none|
|» inputs|body|[[RecordIdInput](#schemarecordidinput)]|true|An array of record ID inputs. Each element is a string representing a unique record ID to be processed in the batch operation.|

> Example responses

> 200 Response

```json
null
```

> 207 Response

```json
null
```

> default Response

```json
null
```

<h3 id="batch-read-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[BatchResponseRecordIdWithMemberships](#schemabatchresponserecordidwithmemberships)|
|207|Multi-Status|multiple statuses|[BatchResponseRecordIdWithMembershipsWithErrors](#schemabatchresponserecordidwithmembershipswitherrors)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

<h1 id="crm-lists-search">Search</h1>

## Search Lists

<a id="opIdpost-/crm/lists/2026-09/search"></a>

> Code samples

```bash
curl https://api.hubapi.com/crm/lists/2026-09/search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'null'
```

`POST /crm/lists/2026-09/search`

Search for lists within your HubSpot account using various criteria. This endpoint allows you to filter and retrieve lists based on specific search parameters, making it easier to manage and organize your lists effectively.

> Body parameter

```json
null
```

<h3 id="search-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListSearchRequest](#schemalistsearchrequest)|true|none|
|» additionalProperties|body|[string]|true|An array of strings representing additional properties to include in the search.|
|» count|body|integer(int32)|false|An integer specifying the number of results to return.|
|» listIds|body|[string]|true|An array of strings specifying the IDs of the lists to search.|
|» objectTypeId|body|string|false|A string representing the object type ID to filter the lists.|
|» offset|body|integer(int32)|true|An integer used for pagination, indicating the starting point for the search results.|
|» processingTypes|body|[string]|true|An array of strings indicating the types of processing to apply to the search results.|
|» query|body|string|false|A string representing the search query to filter the lists.|
|» sort|body|string|false|A string specifying the sorting criteria for the search results.|

> Example responses

> 200 Response

```json
null
```

> default Response

```json
null
```

<h3 id="search-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[ListSearchResponse](#schemalistsearchresponse)|
|default|Default|An error occurred.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2 ( Scopes: crm.segments.read ), oauth2 ( Scopes: crm.lists.read )
</aside>

# Schemas

<h2 id="tocS_ApiCollectionResponseJoinTimeAndRecordId">ApiCollectionResponseJoinTimeAndRecordId</h2>
<!-- backwards compatibility -->
<a id="schemaapicollectionresponsejointimeandrecordid"></a>
<a id="schema_ApiCollectionResponseJoinTimeAndRecordId"></a>
<a id="tocSapicollectionresponsejointimeandrecordid"></a>
<a id="tocsapicollectionresponsejointimeandrecordid"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[JoinTimeAndRecordId](#schemajointimeandrecordid)]|true|none|An array of objects, each containing join time and record ID information.|
|total|integer(int64)|false|none|An integer representing the total number of results available.|

<h2 id="tocS_ApiCollectionResponsePublicObjectListSearchResult">ApiCollectionResponsePublicObjectListSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemaapicollectionresponsepublicobjectlistsearchresult"></a>
<a id="schema_ApiCollectionResponsePublicObjectListSearchResult"></a>
<a id="tocSapicollectionresponsepublicobjectlistsearchresult"></a>
<a id="tocsapicollectionresponsepublicobjectlistsearchresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[PublicObjectListSearchResult](#schemapublicobjectlistsearchresult)]|true|none|An array of PublicObjectListSearchResult objects representing the individual search results.|
|total|integer(int64)|false|none|An integer representing the total number of results available in the search, formatted as a 64-bit integer.|

<h2 id="tocS_ApiCollectionResponseRecordListMembership">ApiCollectionResponseRecordListMembership</h2>
<!-- backwards compatibility -->
<a id="schemaapicollectionresponserecordlistmembership"></a>
<a id="schema_ApiCollectionResponseRecordListMembership"></a>
<a id="tocSapicollectionresponserecordlistmembership"></a>
<a id="tocsapicollectionresponserecordlistmembership"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|paging|[Paging](#schemapaging)|false|none|Represents the pagination information for navigating through a list of results in the API. It provides details on how to access the previous or next set of results.|
|results|[[RecordListMembership](#schemarecordlistmembership)]|true|none|An array of record list memberships, each detailing the membership of a record in a list.|
|total|integer(int64)|false|none|An integer representing the total number of record list memberships available.|

<h2 id="tocS_BatchInputRecordIdInput">BatchInputRecordIdInput</h2>
<!-- backwards compatibility -->
<a id="schemabatchinputrecordidinput"></a>
<a id="schema_BatchInputRecordIdInput"></a>
<a id="tocSbatchinputrecordidinput"></a>
<a id="tocsbatchinputrecordidinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputs|[[RecordIdInput](#schemarecordidinput)]|true|none|An array of record ID inputs. Each element is a string representing a unique record ID to be processed in the batch operation.|

<h2 id="tocS_BatchResponseRecordIdWithMemberships">BatchResponseRecordIdWithMemberships</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponserecordidwithmemberships"></a>
<a id="schema_BatchResponseRecordIdWithMemberships"></a>
<a id="tocSbatchresponserecordidwithmemberships"></a>
<a id="tocsbatchresponserecordidwithmemberships"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch operation was completed, in ISO 8601 format.|
|links|object|false|none|An object containing additional links related to the batch operation.|
|requestedAt|string(date-time)|false|none|The date and time when the batch operation was requested, in ISO 8601 format.|
|results|[[RecordIdWithMemberships](#schemarecordidwithmemberships)]|true|none|An array of results from the batch operation, each containing record IDs and their associated memberships.|
|startedAt|string(date-time)|true|none|The date and time when the batch operation started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch operation. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

<h2 id="tocS_BatchResponseRecordIdWithMembershipsWithErrors">BatchResponseRecordIdWithMembershipsWithErrors</h2>
<!-- backwards compatibility -->
<a id="schemabatchresponserecordidwithmembershipswitherrors"></a>
<a id="schema_BatchResponseRecordIdWithMembershipsWithErrors"></a>
<a id="tocSbatchresponserecordidwithmembershipswitherrors"></a>
<a id="tocsbatchresponserecordidwithmembershipswitherrors"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completedAt|string(date-time)|true|none|The date and time when the batch process was completed, in ISO 8601 format.|
|errors|[[StandardError](#schemastandarderror)]|false|none|An array of errors that occurred during the batch process. Each item in the array is a reference to a StandardError schema.|
|links|object|false|none|An object containing additional links related to the batch process. Each key-value pair represents a link name and its URL.|
|numErrors|integer(int32)|false|none|The total number of errors encountered during the batch process.|
|requestedAt|string(date-time)|false|none|The date and time when the batch process was requested, in ISO 8601 format.|
|results|[[RecordIdWithMemberships](#schemarecordidwithmemberships)]|true|none|An array of results containing record IDs with their memberships. Each item in the array is a reference to a RecordIdWithMemberships schema.|
|startedAt|string(date-time)|true|none|The date and time when the batch process started, in ISO 8601 format.|
|status|string|true|none|The current status of the batch process. Valid values include 'PENDING', 'PROCESSING', 'CANCELED', and 'COMPLETE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|CANCELED|
|status|COMPLETE|
|status|PENDING|
|status|PROCESSING|

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
|category|string|true|none|A string indicating the category of the error.|
|context|object|false|none|An object containing additional context about the error, represented as a map of key-value pairs.|
|correlationId|string(uuid)|true|none|A unique identifier for the error instance, used for tracking and debugging purposes.|
|errors|[[ErrorDetail](#schemaerrordetail)]|false|none|An array of ErrorDetail objects, each providing additional information about specific errors that occurred.|
|links|object|false|none|An object containing related links, represented as a map of link names to URLs.|
|message|string|true|none|A string that provides a human-readable description of the error.|
|subCategory|string|false|none|An object representing a more specific classification of the error within its category.|

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
|code|string|false|none|A string representing a specific error code that identifies the type of error.|
|context|object|false|none|An object containing additional context about the error, represented as a map of strings to arrays of strings, which can include specific parameters or values related to the error.|
|in|string|false|none|A string indicating the location where the error occurred, such as 'query', 'header', or 'body'.|
|message|string|true|none|A string containing a human-readable description of the error.|
|subCategory|string|false|none|An object providing additional categorization of the error, which may contain further details.|

<h2 id="tocS_JoinTimeAndRecordId">JoinTimeAndRecordId</h2>
<!-- backwards compatibility -->
<a id="schemajointimeandrecordid"></a>
<a id="schema_JoinTimeAndRecordId"></a>
<a id="tocSjointimeandrecordid"></a>
<a id="tocsjointimeandrecordid"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membershipTimestamp|string(date-time)|true|none|The timestamp indicating when the record was added to the list. It is represented as a string in date-time format.|
|recordId|string|true|none|The unique identifier for the record within the list. It is represented as a string.|

<h2 id="tocS_ListAllRequest">ListAllRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistallrequest"></a>
<a id="schema_ListAllRequest"></a>
<a id="tocSlistallrequest"></a>
<a id="tocslistallrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalProperties|[string]|true|none|An array of strings representing additional properties to include in the list retrieval.|
|after|string|false|none|A string used as a paging cursor token to retrieve the next set of results.|
|count|integer(int32)|false|none|An integer specifying the number of results to retrieve.|
|objectTypeId|string|false|none|A string representing the unique identifier for the object type of the lists.|
|processingTypes|[string]|true|none|An array of strings specifying the types of processing to apply to the request.|

<h2 id="tocS_ListCreateRequest">ListCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcreaterequest"></a>
<a id="schema_ListCreateRequest"></a>
<a id="tocSlistcreaterequest"></a>
<a id="tocslistcreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customProperties|object|false|none|An object containing custom properties for the list. These properties allow for additional customization of the list.|
|filterBranch|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|none|An object that defines the filter criteria for the list. It determines which records are included in the list based on specified conditions.|
|listFolderId|integer(int32)|false|none|A string representing the ID of the folder where the list will be stored. This helps in organizing lists into folders.|
|listPermissions|[PublicListPermissions](#schemapubliclistpermissions)|false|none|none|
|membershipSettings|[PublicMembershipSettings](#schemapublicmembershipsettings)|false|none|none|
|name|string|true|none|A string representing the name of the list. This is used to identify the list within the system.|
|objectTypeId|string|true|none|A string indicating the type of objects that the list will contain. This helps in categorizing the list based on the object type.|
|processingType|string|true|none|A string that specifies the processing type of the list. It defines how the list is processed within the system.|

<h2 id="tocS_ListCreateResponse">ListCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcreateresponse"></a>
<a id="schema_ListCreateResponse"></a>
<a id="tocSlistcreateresponse"></a>
<a id="tocslistcreateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[PublicObjectList](#schemapublicobjectlist)|true|none|none|

<h2 id="tocS_ListFetchResponse">ListFetchResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfetchresponse"></a>
<a id="schema_ListFetchResponse"></a>
<a id="tocSlistfetchresponse"></a>
<a id="tocslistfetchresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list|[PublicObjectList](#schemapublicobjectlist)|true|none|none|

<h2 id="tocS_ListFilterUpdateRequest">ListFilterUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfilterupdaterequest"></a>
<a id="schema_ListFilterUpdateRequest"></a>
<a id="tocSlistfilterupdaterequest"></a>
<a id="tocslistfilterupdaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranch|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|true|none|A complex object that defines the structure and logic of the filters to be applied to the list. It can include various types of filter branches and filters, allowing for detailed and specific filtering criteria.|

<h2 id="tocS_ListFolderCreateRequest">ListFolderCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfoldercreaterequest"></a>
<a id="schema_ListFolderCreateRequest"></a>
<a id="tocSlistfoldercreaterequest"></a>
<a id="tocslistfoldercreaterequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|A string representing the name of the folder to be created.|
|parentFolderId|string|false|none|A string representing the unique identifier of the parent folder under which the new folder will be created.|

<h2 id="tocS_ListFolderCreateResponse">ListFolderCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfoldercreateresponse"></a>
<a id="schema_ListFolderCreateResponse"></a>
<a id="tocSlistfoldercreateresponse"></a>
<a id="tocslistfoldercreateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|[PublicListFolder](#schemapubliclistfolder)|true|none|none|

<h2 id="tocS_ListFolderFetchResponse">ListFolderFetchResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfolderfetchresponse"></a>
<a id="schema_ListFolderFetchResponse"></a>
<a id="tocSlistfolderfetchresponse"></a>
<a id="tocslistfolderfetchresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|[PublicListFolder](#schemapubliclistfolder)|true|none|none|

<h2 id="tocS_ListMoveRequest">ListMoveRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistmoverequest"></a>
<a id="schema_ListMoveRequest"></a>
<a id="tocSlistmoverequest"></a>
<a id="tocslistmoverequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listId|string|true|none|The unique identifier of the list to be moved. It is a string.|
|newFolderId|string|true|none|The unique identifier of the folder where the list will be moved to. It is a string.|

<h2 id="tocS_ListSearchRequest">ListSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistsearchrequest"></a>
<a id="schema_ListSearchRequest"></a>
<a id="tocSlistsearchrequest"></a>
<a id="tocslistsearchrequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalProperties|[string]|true|none|An array of strings representing additional properties to include in the search.|
|count|integer(int32)|false|none|An integer specifying the number of results to return.|
|listIds|[string]|true|none|An array of strings specifying the IDs of the lists to search.|
|objectTypeId|string|false|none|A string representing the object type ID to filter the lists.|
|offset|integer(int32)|true|none|An integer used for pagination, indicating the starting point for the search results.|
|processingTypes|[string]|true|none|An array of strings indicating the types of processing to apply to the search results.|
|query|string|false|none|A string representing the search query to filter the lists.|
|sort|string|false|none|A string specifying the sorting criteria for the search results.|

<h2 id="tocS_ListSearchResponse">ListSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsearchresponse"></a>
<a id="schema_ListSearchResponse"></a>
<a id="tocSlistsearchresponse"></a>
<a id="tocslistsearchresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hasMore|boolean|true|none|A boolean indicating whether there are more results available beyond the current page.|
|lists|[[PublicObjectListSearchResult](#schemapublicobjectlistsearchresult)]|true|none|An array of objects representing the lists found in the search, each conforming to the PublicObjectListSearchResult schema.|
|offset|integer(int32)|true|none|An integer indicating the position in the list of results where the current page starts.|
|total|integer(int32)|true|none|An integer indicating the total number of lists found by the search.|

<h2 id="tocS_ListSizeAndEditHistoryResponse">ListSizeAndEditHistoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsizeandedithistoryresponse"></a>
<a id="schema_ListSizeAndEditHistoryResponse"></a>
<a id="tocSlistsizeandedithistoryresponse"></a>
<a id="tocslistsizeandedithistoryresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|editHistory|[string(date-time)]|true|none|An array of date-time strings indicating the timestamps of edits made to the list.|
|sizeHistory|[[ListSizeDataPoint](#schemalistsizedatapoint)]|true|none|An array of ListSizeDataPoint objects representing the historical size data of the list.|

<h2 id="tocS_ListSizeDataPoint">ListSizeDataPoint</h2>
<!-- backwards compatibility -->
<a id="schemalistsizedatapoint"></a>
<a id="schema_ListSizeDataPoint"></a>
<a id="tocSlistsizedatapoint"></a>
<a id="tocslistsizedatapoint"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer(int64)|true|none|An integer representing the size of the list at the given timestamp.|
|timestamp|string(date-time)|true|none|A Unix timestamp in milliseconds indicating the specific point in time when the list size was recorded.|

<h2 id="tocS_ListUpdateResponse">ListUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistupdateresponse"></a>
<a id="schema_ListUpdateResponse"></a>
<a id="tocSlistupdateresponse"></a>
<a id="tocslistupdateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updatedList|[PublicObjectList](#schemapublicobjectlist)|false|none|none|

<h2 id="tocS_ListsByIdResponse">ListsByIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistsbyidresponse"></a>
<a id="schema_ListsByIdResponse"></a>
<a id="tocSlistsbyidresponse"></a>
<a id="tocslistsbyidresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[[PublicObjectList](#schemapublicobjectlist)]|true|none|An array of PublicObjectList objects, each representing a list retrieved by its ID. This property is required.|

<h2 id="tocS_MembershipChangeRequest">MembershipChangeRequest</h2>
<!-- backwards compatibility -->
<a id="schemamembershipchangerequest"></a>
<a id="schema_MembershipChangeRequest"></a>
<a id="tocSmembershipchangerequest"></a>
<a id="tocsmembershipchangerequest"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recordIdsToAdd|[string]|true|none|An array of strings representing the unique identifiers of records to be added to the list.|
|recordIdsToRemove|[string]|true|none|An array of strings representing the unique identifiers of records to be removed from the list.|

<h2 id="tocS_MembershipsUpdateResponse">MembershipsUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemamembershipsupdateresponse"></a>
<a id="schema_MembershipsUpdateResponse"></a>
<a id="tocSmembershipsupdateresponse"></a>
<a id="tocsmembershipsupdateresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recordIdsMissing|[string]|true|none|An array of strings representing the IDs of records that were not found or could not be processed during the update.|
|recordIdsRemoved|[string]|true|none|An array of strings representing the IDs of records that were successfully removed from the list.|
|recordsIdsAdded|[string]|true|none|An array of strings representing the IDs of records that were successfully added to the list.|

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
|after|string|true|none|A string token used as a cursor to retrieve the next page of results. It is returned as the `paging.next.after` JSON property in a paged response.|
|link|string|false|none|A URL string that provides a direct link to the next page of results.|

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
|before|string|true|none|A string token used to identify the position in the list before the current page, enabling navigation to the previous page.|
|link|string|false|none|A URL string that provides a direct link to the previous page of results.|

<h2 id="tocS_PublicAbsoluteComparativeTimestampRefineBy">PublicAbsoluteComparativeTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicabsolutecomparativetimestamprefineby"></a>
<a id="schema_PublicAbsoluteComparativeTimestampRefineBy"></a>
<a id="tocSpublicabsolutecomparativetimestamprefineby"></a>
<a id="tocspublicabsolutecomparativetimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparison|string|true|none|A string representing the comparison operation to be performed with the timestamp.|
|timestamp|integer(int64)|true|none|An integer representing the specific timestamp to be used in the comparison, typically expressed as a Unix timestamp in milliseconds.|
|type|string|true|none|A string representing the type of refinement, which is 'ABSOLUTE_COMPARATIVE' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ABSOLUTE_COMPARATIVE|

<h2 id="tocS_PublicAbsoluteRangedTimestampRefineBy">PublicAbsoluteRangedTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicabsoluterangedtimestamprefineby"></a>
<a id="schema_PublicAbsoluteRangedTimestampRefineBy"></a>
<a id="tocSpublicabsoluterangedtimestamprefineby"></a>
<a id="tocspublicabsoluterangedtimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerTimestamp|integer(int64)|true|none|An integer representing the lower bound of the timestamp range, in Unix time format (milliseconds).|
|rangeType|string|true|none|A string that specifies the type of range being used in the filter.|
|type|string|true|none|A string that indicates the type of refine by operation, which is 'ABSOLUTE_RANGED'.|
|upperTimestamp|integer(int64)|true|none|An integer representing the upper bound of the timestamp range, in Unix time format (milliseconds).|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ABSOLUTE_RANGED|

<h2 id="tocS_PublicAdsSearchFilter">PublicAdsSearchFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicadssearchfilter"></a>
<a id="schema_PublicAdsSearchFilter"></a>
<a id="tocSpublicadssearchfilter"></a>
<a id="tocspublicadssearchfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adNetwork|string|true|none|The advertising network being targeted by the filter. This is a string value indicating the ad network.|
|entityType|string|true|none|The type of entity to which the filter is applied. This is a string value representing the entity type.|
|filterType|string|true|none|The type of filter being applied. This is a string value that defines the category or nature of the filter.|
|operator|string|true|none|The operator used to apply the filter. This is a string value that specifies the logical operation for the filter.|
|searchTermType|string|true|none|The type of search term used in the filter. This is a string value that specifies how the search term is interpreted.|
|searchTerms|[string]|true|none|An array of strings representing the search terms used in the filter.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|ADS_SEARCH|

<h2 id="tocS_PublicAdsTimeFilter">PublicAdsTimeFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicadstimefilter"></a>
<a id="schema_PublicAdsTimeFilter"></a>
<a id="tocSpublicadstimefilter"></a>
<a id="tocspublicadstimefilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string representing the type of filter being applied. The default value is 'ADS_TIME'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|true|none|An optional property that allows further refinement of the filter criteria based on time. It can be one of several types, such as relative or absolute time comparisons.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|ADS_TIME|

<h2 id="tocS_PublicAllHistoryRefineBy">PublicAllHistoryRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicallhistoryrefineby"></a>
<a id="schema_PublicAllHistoryRefineBy"></a>
<a id="tocSpublicallhistoryrefineby"></a>
<a id="tocspublicallhistoryrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|A string that specifies the type of refinement, with a default value of 'ALL_HISTORY'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|ALL_HISTORY|

<h2 id="tocS_PublicAllPropertyTypesOperation">PublicAllPropertyTypesOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicallpropertytypesoperation"></a>
<a id="schema_PublicAllPropertyTypesOperation"></a>
<a id="tocSpublicallpropertytypesoperation"></a>
<a id="tocspublicallpropertytypesoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set for the property should be included in the operation. This property is required.|
|operationType|string|true|none|A string indicating the type of operation being performed. This property is required.|
|operator|string|true|none|A string representing the operator used in the filter operation. This property is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ALL_PROPERTY|

<h2 id="tocS_PublicAndFilterBranch">PublicAndFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicandfilterbranch"></a>
<a id="schema_PublicAndFilterBranch"></a>
<a id="tocSpublicandfilterbranch"></a>
<a id="tocspublicandfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used within this filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch. Defaults to 'AND'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches. Each item can be a branch of various types, such as 'OR', 'AND', 'NOT_ALL', etc.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that apply to this branch. Each filter can be of various types, such as property filters, event filters, or subscription filters.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|AND|

<h2 id="tocS_PublicAssociationFilterBranch">PublicAssociationFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicassociationfilterbranch"></a>
<a id="schema_PublicAssociationFilterBranch"></a>
<a id="tocSpublicassociationfilterbranch"></a>
<a id="tocspublicassociationfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationCategory|string|true|none|A string that categorizes the type of association being filtered.|
|associationTypeId|integer(int32)|true|none|An integer representing the type ID of the association.|
|filterBranchOperator|string|true|none|A string that defines the logical operator for combining filters within this branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch, which is 'ASSOCIATION' for this component.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, allowing for complex logical groupings of filters.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters applied within this branch, each defining specific criteria for filtering associations.|
|objectTypeId|string|true|none|A string representing the type ID of the object involved in the association.|
|operator|string|true|none|A string that specifies the operator used in the filter logic.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|ASSOCIATION|

<h2 id="tocS_PublicAssociationInListFilter">PublicAssociationInListFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicassociationinlistfilter"></a>
<a id="schema_PublicAssociationInListFilter"></a>
<a id="tocSpublicassociationinlistfilter"></a>
<a id="tocspublicassociationinlistfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associationCategory|string|true|none|A string that categorizes the type of association, providing additional context for the filter.|
|associationTypeId|integer(int32)|true|none|An integer that identifies the specific type of association that is being filtered.|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|true|none|An optional refinement criterion that can be applied to the filter. It can be one of several types, such as PublicNumOccurrencesRefineBy or PublicRelativeComparativeTimestampRefineBy.|
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'IN_LIST'.|
|listId|string|true|none|A string representing the unique identifier of the list to which the filter is applied.|
|operator|string|true|none|A string that defines the operator used in the filter. This determines how the filter criteria are applied.|
|toObjectType|string|false|none|A string that describes the type of object to which the association is related.|
|toObjectTypeId|string|false|none|A string that specifies the type ID of the object to which the association is related.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|ASSOCIATION|

<h2 id="tocS_PublicBatchMigrationMapping">PublicBatchMigrationMapping</h2>
<!-- backwards compatibility -->
<a id="schemapublicbatchmigrationmapping"></a>
<a id="schema_PublicBatchMigrationMapping"></a>
<a id="tocSpublicbatchmigrationmapping"></a>
<a id="tocspublicbatchmigrationmapping"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacyListIdsToIdsMapping|[[PublicMigrationMapping](#schemapublicmigrationmapping)]|true|none|An array of PublicMigrationMapping objects that map legacy list IDs to their corresponding new IDs.|
|missingLegacyListIds|[string]|true|none|An array of strings representing legacy list IDs that could not be found or migrated.|

<h2 id="tocS_PublicBoolPropertyOperation">PublicBoolPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicboolpropertyoperation"></a>
<a id="schema_PublicBoolPropertyOperation"></a>
<a id="tocSpublicboolpropertyoperation"></a>
<a id="tocspublicboolpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'BOOLEAN'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|value|boolean|true|none|A boolean representing the value to be used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|BOOL|

<h2 id="tocS_PublicCalendarDatePropertyOperation">PublicCalendarDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccalendardatepropertyoperation"></a>
<a id="schema_PublicCalendarDatePropertyOperation"></a>
<a id="tocSpubliccalendardatepropertyoperation"></a>
<a id="tocspubliccalendardatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fiscalYearStart|string|false|none|A string indicating the start of the fiscal year, used if the operation involves fiscal year calculations.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the calendar date property.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'CALENDAR_DATE'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|timeUnit|string|true|none|A string representing the unit of time used in the operation, such as 'DAY', 'WEEK', 'MONTH', or 'YEAR'.|
|timeUnitCount|integer(int32)|false|none|An integer representing the count of the time units involved in the operation.|
|useFiscalYear|boolean|false|none|A boolean indicating whether to use the fiscal year in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|fiscalYearStart|APRIL|
|fiscalYearStart|AUGUST|
|fiscalYearStart|DECEMBER|
|fiscalYearStart|FEBRUARY|
|fiscalYearStart|JANUARY|
|fiscalYearStart|JULY|
|fiscalYearStart|JUNE|
|fiscalYearStart|MARCH|
|fiscalYearStart|MAY|
|fiscalYearStart|NOVEMBER|
|fiscalYearStart|OCTOBER|
|fiscalYearStart|SEPTEMBER|
|operationType|CALENDAR_DATE|

<h2 id="tocS_PublicCommunicationSubscriptionFilter">PublicCommunicationSubscriptionFilter</h2>
<!-- backwards compatibility -->
<a id="schemapubliccommunicationsubscriptionfilter"></a>
<a id="schema_PublicCommunicationSubscriptionFilter"></a>
<a id="tocSpubliccommunicationsubscriptionfilter"></a>
<a id="tocspubliccommunicationsubscriptionfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedOptStates|[string]|true|none|An array of strings representing the opt-in states that are accepted for the subscription.|
|businessUnitId|string|false|none|A string representing the ID of the business unit associated with the subscription.|
|channel|string|true|none|A string indicating the communication channel for the subscription.|
|filterType|string|true|none|A string representing the type of filter. Defaults to 'COMMUNICATION_SUBSCRIPTION'.|
|subscriptionIds|[string]|true|none|An array of strings representing the IDs of the subscriptions to be filtered.|
|subscriptionType|string|true|none|A string indicating the type of subscription being filtered.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|COMMUNICATION_SUBSCRIPTION|

<h2 id="tocS_PublicComparativeDatePropertyOperation">PublicComparativeDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomparativedatepropertyoperation"></a>
<a id="schema_PublicComparativeDatePropertyOperation"></a>
<a id="tocSpubliccomparativedatepropertyoperation"></a>
<a id="tocspubliccomparativedatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string specifying the name of the property to be used for comparison.|
|defaultComparisonValue|string|false|none|A string representing the default value to be used in the comparison if no specific value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the property being compared.|
|operationType|string|true|none|A string indicating the type of operation, with a default value of 'COMPARATIVE_DATE'.|
|operator|string|true|none|A string representing the operator used in the comparison.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|COMPARATIVE_DATE|

<h2 id="tocS_PublicComparativeNumberPropertyOperation">PublicComparativeNumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomparativenumberpropertyoperation"></a>
<a id="schema_PublicComparativeNumberPropertyOperation"></a>
<a id="tocSpubliccomparativenumberpropertyoperation"></a>
<a id="tocspubliccomparativenumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|none|
|defaultComparisonValue|string|false|none|none|
|includeObjectsWithNoValueSet|boolean|true|none|none|
|operationType|string|true|none|none|
|operator|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|COMPARATIVE_NUMBER|

<h2 id="tocS_PublicComparativePropertyUpdatedOperation">PublicComparativePropertyUpdatedOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomparativepropertyupdatedoperation"></a>
<a id="schema_PublicComparativePropertyUpdatedOperation"></a>
<a id="tocSpubliccomparativepropertyupdatedoperation"></a>
<a id="tocspubliccomparativepropertyupdatedoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string specifying the name of the property to be compared.|
|defaultComparisonValue|string|false|none|A string representing the default value to use in the comparison if no other value is set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation. Defaults to 'COMPARATIVE_STRING'.|
|operator|string|true|none|A string representing the operator used in the comparison.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|COMPARATIVE_PROPERTY_UPDATED|

<h2 id="tocS_PublicComparativeStringPropertyOperation">PublicComparativeStringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapubliccomparativestringpropertyoperation"></a>
<a id="schema_PublicComparativeStringPropertyOperation"></a>
<a id="tocSpubliccomparativestringpropertyoperation"></a>
<a id="tocspubliccomparativestringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparisonPropertyName|string|true|none|A string specifying the name of the property to be compared.|
|defaultComparisonValue|string|false|none|A string representing the default value to use in the comparison if the property value is not set.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property being compared.|
|operationType|string|true|none|A string indicating the type of operation. Defaults to 'COMPARATIVE_STRING'.|
|operator|string|true|none|A string representing the operator used in the comparison.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|COMPARATIVE_STRING|

<h2 id="tocS_PublicConstantFilter">PublicConstantFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicconstantfilter"></a>
<a id="schema_PublicConstantFilter"></a>
<a id="tocSpublicconstantfilter"></a>
<a id="tocspublicconstantfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string that specifies the type of filter. For this component, it is a constant value indicating the filter's nature.|
|shouldAccept|boolean|true|none|A boolean indicating whether the filter condition should be accepted or not.|
|source|string|false|none|A string that represents the origin or context of the filter, providing additional information about where or how the filter is applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|CONSTANT|

<h2 id="tocS_PublicCtaAnalyticsFilter">PublicCtaAnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicctaanalyticsfilter"></a>
<a id="schema_PublicCtaAnalyticsFilter"></a>
<a id="tocSpublicctaanalyticsfilter"></a>
<a id="tocspublicctaanalyticsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be one of several types, such as number of occurrences or time-based refinements.|
|ctaName|string|true|none|The name of the Call-To-Action being filtered for in the analytics data.|
|filterType|string|true|none|A string indicating the type of filter being applied. Defaults to 'CTA'.|
|operator|string|true|none|A string representing the operation to be performed by the filter.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion used to further narrow down the filter results, similar to coalescingRefineBy.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|CTA|

<h2 id="tocS_PublicDatePoint">PublicDatePoint</h2>
<!-- backwards compatibility -->
<a id="schemapublicdatepoint"></a>
<a id="schema_PublicDatePoint"></a>
<a id="tocSpublicdatepoint"></a>
<a id="tocspublicdatepoint"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day component of the date.|
|hour|integer(int32)|false|none|An integer representing the hour component of the time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond component of the time.|
|minute|integer(int32)|false|none|An integer representing the minute component of the time.|
|month|integer(int32)|true|none|An integer representing the month component of the date.|
|second|integer(int32)|false|none|An integer representing the second component of the time.|
|timeType|string|true|none|A string indicating the type of time reference, typically set to 'DATE'.|
|timezoneSource|string|false|none|A string representing the source of the timezone information.|
|year|integer(int32)|true|none|An integer representing the year component of the date.|
|zoneId|string|true|none|A string specifying the identifier for the timezone.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeType|DATE|

<h2 id="tocS_PublicDatePropertyOperation">PublicDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicdatepropertyoperation"></a>
<a id="schema_PublicDatePropertyOperation"></a>
<a id="tocSpublicdatepropertyoperation"></a>
<a id="tocspublicdatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day component of the date.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the date property.|
|month|string|true|none|An integer representing the month component of the date.|
|operationType|string|true|none|A string indicating the type of operation, specifically for date properties.|
|operator|string|true|none|A string representing the operator used in the date operation.|
|year|integer(int32)|true|none|An integer representing the year component of the date.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|DATE|

<h2 id="tocS_PublicDateTimePropertyOperation">PublicDateTimePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicdatetimepropertyoperation"></a>
<a id="schema_PublicDateTimePropertyOperation"></a>
<a id="tocSpublicdatetimepropertyoperation"></a>
<a id="tocspublicdatetimepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set for the property should be included in the operation.|
|operationType|string|true|none|A string representing the type of operation being performed. The default value is 'DATE_TIME'.|
|operator|string|true|none|A string specifying the operator used in the operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires conversion based on time zones.|
|timestamp|integer(int64)|true|none|An integer representing a Unix timestamp in milliseconds, used as a reference point for the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|DATETIME|

<h2 id="tocS_PublicEmailEventFilter">PublicEmailEventFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicemaileventfilter"></a>
<a id="schema_PublicEmailEventFilter"></a>
<a id="tocSpublicemaileventfilter"></a>
<a id="tocspublicemaileventfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appId|string|true|none|A string representing the application ID associated with the email event.|
|clickUrl|string|false|none|A string representing the URL that is clicked in the email event.|
|emailId|string|true|none|A string representing the unique identifier of the email associated with the event.|
|filterType|string|true|none|A string representing the type of filter being applied. This property is required.|
|level|string|true|none|A string indicating the level of the email event filter.|
|operator|string|true|none|A string that specifies the operator used in the filter condition.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An object that provides additional criteria for refining the filter. It can be one of several types such as PublicNumOccurrencesRefineBy, PublicSetOccurrencesRefineBy, etc.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|EMAIL_EVENT|
|operator|BOUNCED|
|operator|LINK_CLICKED|
|operator|MARKED_SPAM|
|operator|OPENED|
|operator|OPENED_BUT_LINK_NOT_CLICKED|
|operator|OPENED_BUT_NOT_REPLIED|
|operator|RECEIVED|
|operator|RECEIVED_BUT_NOT_OPENED|
|operator|REPLIED|
|operator|SENT|
|operator|SENT_BUT_LINK_NOT_CLICKED|
|operator|SENT_BUT_NOT_RECEIVED|
|operator|UNSUBSCRIBED|

<h2 id="tocS_PublicEmailSubscriptionFilter">PublicEmailSubscriptionFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicemailsubscriptionfilter"></a>
<a id="schema_PublicEmailSubscriptionFilter"></a>
<a id="tocSpublicemailsubscriptionfilter"></a>
<a id="tocspublicemailsubscriptionfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedStatuses|[string]|true|none|An array of strings indicating the statuses that are accepted for the filter.|
|filterType|string|true|none|A string indicating the type of filter. The default value is 'EMAIL_SUBSCRIPTION'.|
|subscriptionIds|[string]|true|none|An array of strings representing the IDs of the subscriptions to filter by.|
|subscriptionType|string|false|none|A string representing the type of subscription to filter by.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|EMAIL_SUBSCRIPTION|

<h2 id="tocS_PublicEnumerationPropertyOperation">PublicEnumerationPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicenumerationpropertyoperation"></a>
<a id="schema_PublicEnumerationPropertyOperation"></a>
<a id="tocSpublicenumerationpropertyoperation"></a>
<a id="tocspublicenumerationpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation, with a default value of 'ENUMERATION'.|
|operator|string|true|none|A string representing the operator used in the enumeration operation.|
|values|[string]|true|none|An array of strings representing the enumeration values involved in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ENUMERATION|

<h2 id="tocS_PublicEventAnalyticsFilter">PublicEventAnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapubliceventanalyticsfilter"></a>
<a id="schema_PublicEventAnalyticsFilter"></a>
<a id="tocSpubliceventanalyticsfilter"></a>
<a id="tocspubliceventanalyticsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional property that allows for additional refinement of the filter criteria using a coalescing method. It can be one of several predefined refinement types.|
|eventId|string|true|none|A string representing the unique identifier of the event to be filtered. This property is required.|
|filterType|string|true|none|A string representing the type of filter being applied. This property is required.|
|operator|string|true|none|A string that specifies the operator used in the filter. This property is required.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional property that allows for additional refinement of the filter criteria using a pruning method. It can be one of several predefined refinement types.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|EVENT|

<h2 id="tocS_PublicEventFilterMetadata">PublicEventFilterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapubliceventfiltermetadata"></a>
<a id="schema_PublicEventFilterMetadata"></a>
<a id="tocSpubliceventfiltermetadata"></a>
<a id="tocspubliceventfiltermetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|operation|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|Defines the operation to be applied to the property for filtering. It is a string value.|
|property|string|true|none|Represents the specific property of the event that the filter is targeting. It is a string value.|

<h2 id="tocS_PublicFiscalQuarterReference">PublicFiscalQuarterReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicfiscalquarterreference"></a>
<a id="schema_PublicFiscalQuarterReference"></a>
<a id="tocSpublicfiscalquarterreference"></a>
<a id="tocspublicfiscalquarterreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the year.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'FISCAL_QUARTER'.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|FISCAL_QUARTER|

<h2 id="tocS_PublicFiscalYearReference">PublicFiscalYearReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicfiscalyearreference"></a>
<a id="schema_PublicFiscalYearReference"></a>
<a id="tocSpublicfiscalyearreference"></a>
<a id="tocspublicfiscalyearreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the fiscal year.|
|referenceType|string|true|none|A string that indicates the type of reference, which is 'FISCAL_YEAR'.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|FISCAL_YEAR|

<h2 id="tocS_PublicFormSubmissionFilter">PublicFormSubmissionFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicformsubmissionfilter"></a>
<a id="schema_PublicFormSubmissionFilter"></a>
<a id="tocSpublicformsubmissionfilter"></a>
<a id="tocspublicformsubmissionfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion used to coalesce form submissions based on specific conditions. It can be one of several types, similar to pruningRefineBy.|
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'FORM_SUBMISSION'.|
|formId|string|false|none|A string representing the unique identifier of the form to which the filter applies.|
|operator|string|true|none|A string that defines the operation to be performed by the filter. Valid values include 'FILLED_OUT' and 'NOT_FILLED_OUT'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that further specifies the conditions for pruning form submissions. It can be one of several types, such as number of occurrences or timestamp comparisons.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|FORM_SUBMISSION|
|operator|FILLED_OUT|
|operator|NOT_FILLED_OUT|

<h2 id="tocS_PublicFormSubmissionOnPageFilter">PublicFormSubmissionOnPageFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicformsubmissiononpagefilter"></a>
<a id="schema_PublicFormSubmissionOnPageFilter"></a>
<a id="tocSpublicformsubmissiononpagefilter"></a>
<a id="tocspublicformsubmissiononpagefilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion used to coalesce results based on specific conditions, similar to pruningRefineBy.|
|filterType|string|true|none|The type of filter applied, which is fixed as 'FORM_SUBMISSION'.|
|formId|string|false|none|A string representing the unique identifier of the form to be filtered.|
|operator|string|true|none|The operation to be performed by the filter. It is a string and can have values such as 'FILLED_OUT' or 'NOT_FILLED_OUT'.|
|pageId|string|true|none|A string representing the unique identifier of the page where the form submission occurred.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional property that allows further refinement of the filter using various criteria such as occurrences or time ranges.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|FORM_SUBMISSION_ON_PAGE|
|operator|FILLED_OUT|
|operator|NOT_FILLED_OUT|

<h2 id="tocS_PublicInListFilter">PublicInListFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicinlistfilter"></a>
<a id="schema_PublicInListFilter"></a>
<a id="tocSpublicinlistfilter"></a>
<a id="tocspublicinlistfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string indicating the type of filter. Defaults to 'IN_LIST'.|
|listId|string|true|none|The unique identifier of the list to check for membership, represented as a string.|
|metadata|[PublicInListFilterMetadata](#schemapublicinlistfiltermetadata)|false|none|none|
|operator|string|true|none|A string representing the operator used in the filter.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|IN_LIST|

<h2 id="tocS_PublicInListFilterMetadata">PublicInListFilterMetadata</h2>
<!-- backwards compatibility -->
<a id="schemapublicinlistfiltermetadata"></a>
<a id="schema_PublicInListFilterMetadata"></a>
<a id="tocSpublicinlistfiltermetadata"></a>
<a id="tocspublicinlistfiltermetadata"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|A string representing the unique identifier for the filter metadata.|
|inListType|string|true|none|A string indicating the type of list that the filter applies to.|

<h2 id="tocS_PublicIndexOffset">PublicIndexOffset</h2>
<!-- backwards compatibility -->
<a id="schemapublicindexoffset"></a>
<a id="schema_PublicIndexOffset"></a>
<a id="tocSpublicindexoffset"></a>
<a id="tocspublicindexoffset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|days|integer(int32)|false|none|An integer representing the number of days to offset.|
|hours|integer(int32)|false|none|An integer representing the number of hours to offset.|
|milliseconds|integer(int32)|false|none|An integer representing the number of milliseconds to offset.|
|minutes|integer(int32)|false|none|An integer representing the number of minutes to offset.|
|months|integer(int32)|false|none|An integer representing the number of months to offset.|
|quarters|integer(int32)|false|none|An integer representing the number of quarters to offset.|
|seconds|integer(int32)|false|none|An integer representing the number of seconds to offset.|
|weeks|integer(int32)|false|none|An integer representing the number of weeks to offset.|
|years|integer(int32)|false|none|An integer representing the number of years to offset.|

<h2 id="tocS_PublicIndexedTimePoint">PublicIndexedTimePoint</h2>
<!-- backwards compatibility -->
<a id="schemapublicindexedtimepoint"></a>
<a id="schema_PublicIndexedTimePoint"></a>
<a id="tocSpublicindexedtimepoint"></a>
<a id="tocspublicindexedtimepoint"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexReference|[PublicNowReference](#schemapublicnowreference) \| [PublicTodayReference](#schemapublictodayreference) \| [PublicWeekReference](#schemapublicweekreference) \| [PublicFiscalQuarterReference](#schemapublicfiscalquarterreference) \| [PublicFiscalYearReference](#schemapublicfiscalyearreference) \| [PublicYearReference](#schemapublicyearreference) \| [PublicQuarterReference](#schemapublicquarterreference) \| [PublicMonthReference](#schemapublicmonthreference)|true|none|An object that defines the reference point for the indexed time, which can be one of several predefined references like 'now', 'today', or a specific fiscal period.|
|offset|[PublicIndexOffset](#schemapublicindexoffset)|false|none|none|
|timeType|string|true|none|A string indicating the type of time point, with a default value of 'INDEXED'.|
|timezoneSource|string|false|none|A string representing the source of the timezone information.|
|zoneId|string|true|none|A string specifying the ID of the timezone.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeType|INDEXED|

<h2 id="tocS_PublicIntegrationEventFilter">PublicIntegrationEventFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicintegrationeventfilter"></a>
<a id="schema_PublicIntegrationEventFilter"></a>
<a id="tocSpublicintegrationeventfilter"></a>
<a id="tocspublicintegrationeventfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|eventTypeId|integer(int32)|true|none|A string that uniquely identifies the type of event to be filtered. This property is required.|
|filterLines|[[PublicEventFilterMetadata](#schemapubliceventfiltermetadata)]|true|none|An array of filter lines that define additional filtering criteria. Each filter line is an object that specifies conditions for filtering events.|
|filterType|string|true|none|A string representing the type of filter being applied. This property is required.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|INTEGRATION_EVENT|

<h2 id="tocS_PublicListConversionDate">PublicListConversionDate</h2>
<!-- backwards compatibility -->
<a id="schemapubliclistconversiondate"></a>
<a id="schema_PublicListConversionDate"></a>
<a id="tocSpubliclistconversiondate"></a>
<a id="tocspubliclistconversiondate"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionType|string|true|none|A string that indicates the type of conversion event. It specifies what kind of conversion has taken place.|
|day|integer(int32)|true|none|An integer representing the day of the month when the conversion event occurred.|
|month|integer(int32)|true|none|An integer representing the month of the year when the conversion event occurred.|
|year|integer(int32)|true|none|An integer representing the year when the conversion event occurred.|

#### Enumerated Values

|Property|Value|
|---|---|
|conversionType|CONVERSION_DATE|

<h2 id="tocS_PublicListConversionInactivity">PublicListConversionInactivity</h2>
<!-- backwards compatibility -->
<a id="schemapubliclistconversioninactivity"></a>
<a id="schema_PublicListConversionInactivity"></a>
<a id="tocSpubliclistconversioninactivity"></a>
<a id="tocspubliclistconversioninactivity"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversionType|string|true|none|A string that specifies the type of conversion, with a default value of 'INACTIVITY'.|
|offset|integer(int32)|true|none|An integer indicating the offset value used in conjunction with the time unit to determine inactivity.|
|timeUnit|string|true|none|A string representing the unit of time for measuring inactivity. Valid values include 'DAY', 'WEEK', and 'MONTH'.|

#### Enumerated Values

|Property|Value|
|---|---|
|conversionType|INACTIVITY|
|timeUnit|DAY|
|timeUnit|MONTH|
|timeUnit|WEEK|

<h2 id="tocS_PublicListConversionResponse">PublicListConversionResponse</h2>
<!-- backwards compatibility -->
<a id="schemapubliclistconversionresponse"></a>
<a id="schema_PublicListConversionResponse"></a>
<a id="tocSpubliclistconversionresponse"></a>
<a id="tocspubliclistconversionresponse"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|convertedAt|string(date-time)|false|none|A string in date-time format indicating when the conversion was completed.|
|listId|string|true|none|A string representing the unique identifier of the list that is being converted.|
|requestedConversionTime|[PublicListConversionDate](#schemapubliclistconversiondate) \| [PublicListConversionInactivity](#schemapubliclistconversioninactivity)|false|none|A string in date-time format indicating when the conversion was requested.|

<h2 id="tocS_PublicListConversionTime">PublicListConversionTime</h2>
<!-- backwards compatibility -->
<a id="schemapubliclistconversiontime"></a>
<a id="schema_PublicListConversionTime"></a>
<a id="tocSpubliclistconversiontime"></a>
<a id="tocspubliclistconversiontime"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PublicListConversionDate](#schemapubliclistconversiondate)|false|none|none|
|*oneOf*|[PublicListConversionInactivity](#schemapubliclistconversioninactivity)|false|none|none|

<h2 id="tocS_PublicListFolder">PublicListFolder</h2>
<!-- backwards compatibility -->
<a id="schemapubliclistfolder"></a>
<a id="schema_PublicListFolder"></a>
<a id="tocSpubliclistfolder"></a>
<a id="tocspubliclistfolder"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childLists|[integer(int32)]|true|none|An array of strings, each representing the unique identifier of a list that is a direct child of this folder.|
|childNodes|[[PublicListFolder](#schemapubliclistfolder)]|true|none|An array of strings, each representing the unique identifier of a child node, which could be either a folder or a list.|
|createdAt|string(date-time)|false|none|The date and time when the folder was created, in ISO 8601 format.|
|id|string|true|none|The unique identifier for the folder, represented as a string.|
|name|string|false|none|The name of the folder, represented as a string.|
|parentFolderId|string|true|none|The unique identifier of the parent folder, represented as a string. This indicates the hierarchical structure of folders.|
|updatedAt|string(date-time)|false|none|The date and time when the folder was last updated, in ISO 8601 format.|
|updatedContentsAt|string(date-time)|false|none|The date and time when the contents of the folder were last updated, in ISO 8601 format.|
|userId|integer(int32)|false|none|The unique identifier of the user who created or last updated the folder, represented as a string.|

<h2 id="tocS_PublicListPermissions">PublicListPermissions</h2>
<!-- backwards compatibility -->
<a id="schemapubliclistpermissions"></a>
<a id="schema_PublicListPermissions"></a>
<a id="tocSpubliclistpermissions"></a>
<a id="tocspubliclistpermissions"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|teamsWithEditAccess|[integer(int32)]|true|none|An array of integers representing the IDs of teams that have edit access to the list.|
|usersWithEditAccess|[integer(int32)]|true|none|An array of integers representing the IDs of users that have edit access to the list.|

<h2 id="tocS_PublicMembershipSettings">PublicMembershipSettings</h2>
<!-- backwards compatibility -->
<a id="schemapublicmembershipsettings"></a>
<a id="schema_PublicMembershipSettings"></a>
<a id="tocSpublicmembershipsettings"></a>
<a id="tocspublicmembershipsettings"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeUnassigned|boolean|false|none|A boolean indicating whether to include unassigned records in the membership settings.|
|membershipTeamId|integer(int32)|false|none|A string representing the unique identifier of the team associated with the membership settings.|

<h2 id="tocS_PublicMigrationMapping">PublicMigrationMapping</h2>
<!-- backwards compatibility -->
<a id="schemapublicmigrationmapping"></a>
<a id="schema_PublicMigrationMapping"></a>
<a id="tocSpublicmigrationmapping"></a>
<a id="tocspublicmigrationmapping"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|legacyListId|string|true|none|The legacy list ID from the previous system. This is a string that represents the list ID in the legacy system.|
|listId|string|true|none|The new list ID in the HubSpot system. This is a string that uniquely identifies the list in the current system.|

<h2 id="tocS_PublicMonthReference">PublicMonthReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicmonthreference"></a>
<a id="schema_PublicMonthReference"></a>
<a id="tocSpublicmonthreference"></a>
<a id="tocspublicmonthreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|referenceType|string|true|none|A string indicating the type of reference, with a default value of 'MONTH'.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|MONTH|

<h2 id="tocS_PublicMultiStringPropertyOperation">PublicMultiStringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicmultistringpropertyoperation"></a>
<a id="schema_PublicMultiStringPropertyOperation"></a>
<a id="tocSpublicmultistringpropertyoperation"></a>
<a id="tocspublicmultistringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'MULTI_STRING'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|values|[string]|true|none|An array of strings representing the values involved in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|MULTISTRING|

<h2 id="tocS_PublicNotAllFilterBranch">PublicNotAllFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicnotallfilterbranch"></a>
<a id="schema_PublicNotAllFilterBranch"></a>
<a id="tocSpublicnotallfilterbranch"></a>
<a id="tocspublicnotallfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used within the filter branch.|
|filterBranchType|string|true|none|A string that specifies the type of filter branch. The default value is 'NOT_ALL'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of filter branches that can include various types such as PublicOrFilterBranch, PublicAndFilterBranch, and others, allowing for nested filtering logic.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include various types such as PublicPropertyFilter, PublicAssociationInListFilter, and others, used to apply specific conditions to the data.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|NOT_ALL|

<h2 id="tocS_PublicNotAnyFilterBranch">PublicNotAnyFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicnotanyfilterbranch"></a>
<a id="schema_PublicNotAnyFilterBranch"></a>
<a id="tocSpublicnotanyfilterbranch"></a>
<a id="tocspublicnotanyfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used in the filter branch.|
|filterBranchType|string|true|none|A string that specifies the type of filter branch. Default value is 'NOT_ANY'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of filter branches that can include various types such as 'PublicOrFilterBranch', 'PublicAndFilterBranch', 'PublicNotAllFilterBranch', 'PublicNotAnyFilterBranch', 'PublicRestrictedFilterBranch', 'PublicUnifiedEventsFilterBranch', and 'PublicAssociationFilterBranch'.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters that can include types like 'PublicPropertyFilter', 'PublicAssociationInListFilter', 'PublicPageViewAnalyticsFilter', 'PublicCtaAnalyticsFilter', 'PublicEventAnalyticsFilter', 'PublicFormSubmissionFilter', 'PublicFormSubmissionOnPageFilter', 'PublicIntegrationEventFilter', 'PublicEmailSubscriptionFilter', 'PublicCommunicationSubscriptionFilter', 'PublicSurveyMonkeyFilter', 'PublicSurveyMonkeyValueFilter', 'PublicWebinarFilter', 'PublicEmailEventFilter', 'PublicPrivacyAnalyticsFilter', 'PublicAdsSearchFilter', 'PublicAdsTimeFilter', 'PublicInListFilter', 'PublicUnifiedEventsFilter', and 'PublicConstantFilter'.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|NOT_ANY|

<h2 id="tocS_PublicNowReference">PublicNowReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicnowreference"></a>
<a id="schema_PublicNowReference"></a>
<a id="tocSpublicnowreference"></a>
<a id="tocspublicnowreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|integer(int32)|false|none|An integer representing the hour part of the current time.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond part of the current time.|
|minute|integer(int32)|false|none|An integer representing the minute part of the current time.|
|referenceType|string|true|none|A string that indicates the type of reference. The default value is 'NOW', and it is used to specify that the reference is to the current time.|
|second|integer(int32)|false|none|An integer representing the second part of the current time.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|NOW|

<h2 id="tocS_PublicNumOccurrencesRefineBy">PublicNumOccurrencesRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicnumoccurrencesrefineby"></a>
<a id="schema_PublicNumOccurrencesRefineBy"></a>
<a id="tocSpublicnumoccurrencesrefineby"></a>
<a id="tocspublicnumoccurrencesrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|maxOccurrences|integer(int32)|false|none|An integer specifying the maximum number of occurrences allowed.|
|minOccurrences|integer(int32)|false|none|An integer specifying the minimum number of occurrences required.|
|type|string|true|none|A string indicating the type of refinement, which is 'NUM_OCCURRENCES' by default.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|NUM_OCCURRENCES|

<h2 id="tocS_PublicNumberPropertyOperation">PublicNumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicnumberpropertyoperation"></a>
<a id="schema_PublicNumberPropertyOperation"></a>
<a id="tocSpublicnumberpropertyoperation"></a>
<a id="tocspublicnumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the property.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'NUMBER'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|value|number|true|none|A number representing the value involved in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|NUMBER|

<h2 id="tocS_PublicObjectList">PublicObjectList</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectlist"></a>
<a id="schema_PublicObjectList"></a>
<a id="tocSpublicobjectlist"></a>
<a id="tocspublicobjectlist"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdAt|string(date-time)|false|none|The date and time when the list was created, in ISO 8601 format.|
|createdById|string|false|none|The unique identifier of the user who created the list, represented as a string.|
|deletedAt|string(date-time)|false|none|The date and time when the list was deleted, in ISO 8601 format.|
|filterBranch|[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)|false|none|An object representing the filter branch applied to the list, which can be one of several types of filter branches.|
|filtersUpdatedAt|string(date-time)|false|none|The date and time when the list's filters were last updated, in ISO 8601 format.|
|listId|string|true|none|The unique identifier for the list, represented as a string.|
|listPermissions|[PublicListPermissions](#schemapubliclistpermissions)|false|none|none|
|listVersion|integer(int32)|true|none|An integer indicating the version of the list.|
|membershipSettings|[PublicMembershipSettings](#schemapublicmembershipsettings)|false|none|none|
|name|string|true|none|The name of the list, represented as a string.|
|objectTypeId|string|true|none|The unique identifier for the type of object associated with the list, represented as a string.|
|processingStatus|string|true|none|A string representing the current processing status of the list.|
|processingType|string|true|none|A string indicating the type of processing applied to the list.|
|size|integer(int64)|false|none|An integer representing the size of the list.|
|updatedAt|string(date-time)|false|none|The date and time when the list was last updated, in ISO 8601 format.|
|updatedById|string|false|none|The unique identifier of the user who last updated the list, represented as a string.|

<h2 id="tocS_PublicObjectListSearchResult">PublicObjectListSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemapublicobjectlistsearchresult"></a>
<a id="schema_PublicObjectListSearchResult"></a>
<a id="tocSpublicobjectlistsearchresult"></a>
<a id="tocspublicobjectlistsearchresult"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalProperties|object|true|none|An object containing additional properties of the list, with each property represented as a string.|
|createdAt|string(date-time)|false|none|The date and time when the list was created, in ISO 8601 format.|
|createdById|string|false|none|The unique identifier of the user who created the list, represented as a string.|
|deletedAt|string(date-time)|false|none|The date and time when the list was deleted, in ISO 8601 format.|
|filtersUpdatedAt|string(date-time)|false|none|The date and time when the list's filters were last updated, in ISO 8601 format.|
|listId|string|true|none|The unique identifier for the list, represented as a string.|
|listVersion|integer(int32)|true|none|An integer indicating the version of the list.|
|name|string|true|none|The name of the list, represented as a string.|
|objectTypeId|string|true|none|The unique identifier for the type of object associated with the list, represented as a string.|
|processingStatus|string|true|none|A string representing the current processing status of the list.|
|processingType|string|true|none|A string indicating the type of processing applied to the list.|
|updatedAt|string(date-time)|false|none|The date and time when the list was last updated, in ISO 8601 format.|
|updatedById|string|false|none|The unique identifier of the user who last updated the list, represented as a string.|

<h2 id="tocS_PublicOrFilterBranch">PublicOrFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicorfilterbranch"></a>
<a id="schema_PublicOrFilterBranch"></a>
<a id="tocSpublicorfilterbranch"></a>
<a id="tocspublicorfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used to combine the filters within the branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch, which is 'OR' for this component.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, allowing for the combination of multiple logical conditions within the 'OR' branch.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of individual filters that are part of the 'OR' branch. Each filter represents a specific condition that can be evaluated.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|OR|

<h2 id="tocS_PublicPageViewAnalyticsFilter">PublicPageViewAnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicpageviewanalyticsfilter"></a>
<a id="schema_PublicPageViewAnalyticsFilter"></a>
<a id="tocSpublicpageviewanalyticsfilter"></a>
<a id="tocspublicpageviewanalyticsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional property that defines the method for refining the filter by coalescing multiple conditions. It can be one of several predefined refine types.|
|enableTracking|boolean|false|none|A boolean value that indicates whether tracking is enabled for the page view analytics filter.|
|filterType|string|true|none|A string representing the type of filter being applied. This property determines the category of the filter used in the analytics.|
|operator|string|true|none|A string indicating the operator used in the filter, which defines how the filter criteria are applied.|
|pageUrl|string|true|none|A string representing the specific URL of the page to be tracked or analyzed. This property is used to filter analytics data based on page URL.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional property that specifies the method for refining the filter by pruning conditions. It can be one of several predefined refine types.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|PAGE_VIEW|

<h2 id="tocS_PublicPrivacyAnalyticsFilter">PublicPrivacyAnalyticsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicprivacyanalyticsfilter"></a>
<a id="schema_PublicPrivacyAnalyticsFilter"></a>
<a id="tocSpublicprivacyanalyticsfilter"></a>
<a id="tocspublicprivacyanalyticsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string representing the type of filter. The default value is 'PRIVACY_ANALYTICS'.|
|operator|string|true|none|A string that defines the operator used in the filter condition.|
|privacyName|string|true|none|A string that specifies the name of the privacy setting being filtered.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|PRIVACY|

<h2 id="tocS_PublicPropertyFilter">PublicPropertyFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicpropertyfilter"></a>
<a id="schema_PublicPropertyFilter"></a>
<a id="tocSpublicpropertyfilter"></a>
<a id="tocspublicpropertyfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|The type of filter being applied. This is a string value that specifies the kind of filter operation.|
|operation|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|The specific operation or condition used in the filter. This is a string value that defines how the filter should be applied to the property.|
|property|string|true|none|The name of the property to which the filter is applied. This is a string value representing the property name.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|PROPERTY|

<h2 id="tocS_PublicPropertyReferencedTime">PublicPropertyReferencedTime</h2>
<!-- backwards compatibility -->
<a id="schemapublicpropertyreferencedtime"></a>
<a id="schema_PublicPropertyReferencedTime"></a>
<a id="tocSpublicpropertyreferencedtime"></a>
<a id="tocspublicpropertyreferencedtime"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|property|string|true|none|A string representing the property that is used to reference the time.|
|referenceType|string|true|none|A string indicating the type of reference, with a default value of 'PROPERTY_REFERENCE'.|
|timeType|string|true|none|A string indicating the type of time reference. It defaults to 'PROPERTY_REFERENCE'.|
|timezoneSource|string|false|none|A string representing the source of the timezone information.|
|zoneId|string|true|none|A string specifying the ID of the timezone.|

#### Enumerated Values

|Property|Value|
|---|---|
|timeType|PROPERTY_REFERENCED|

<h2 id="tocS_PublicQuarterReference">PublicQuarterReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicquarterreference"></a>
<a id="schema_PublicQuarterReference"></a>
<a id="tocSpublicquarterreference"></a>
<a id="tocspublicquarterreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the year.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'QUARTER' for this component.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|QUARTER|

<h2 id="tocS_PublicRangedDatePropertyOperation">PublicRangedDatePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrangeddatepropertyoperation"></a>
<a id="schema_PublicRangedDatePropertyOperation"></a>
<a id="tocSpublicrangeddatepropertyoperation"></a>
<a id="tocspublicrangeddatepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the property.|
|lowerBound|integer(int64)|true|none|An integer representing the lower bound of the date range, formatted as an int64.|
|operationType|string|true|none|A string that indicates the type of operation, which is 'RANGED_DATE' by default.|
|operator|string|true|none|A string representing the operator used in the operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires time zone conversion.|
|upperBound|integer(int64)|true|none|An integer representing the upper bound of the date range, formatted as an int64.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|RANGED_DATE|

<h2 id="tocS_PublicRangedNumberPropertyOperation">PublicRangedNumberPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrangednumberpropertyoperation"></a>
<a id="schema_PublicRangedNumberPropertyOperation"></a>
<a id="tocSpublicrangednumberpropertyoperation"></a>
<a id="tocspublicrangednumberpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|lowerBound|integer(int64)|true|none|An integer specifying the lower bound of the range.|
|operationType|string|true|none|A string indicating the type of operation, which is 'RANGED_NUMBER' by default.|
|operator|string|true|none|A string representing the operator used in the operation.|
|upperBound|integer(int64)|true|none|An integer specifying the upper bound of the range.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|NUMBER_RANGED|

<h2 id="tocS_PublicRangedTimeOperation">PublicRangedTimeOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrangedtimeoperation"></a>
<a id="schema_PublicRangedTimeOperation"></a>
<a id="tocSpublicrangedtimeoperation"></a>
<a id="tocspublicrangedtimeoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|lowerBoundEndpointBehavior|string|false|none|A string specifying the behavior of the lower bound endpoint in the time range.|
|lowerBoundTimePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|An object representing the lower bound time point of the range, which can be a date point, indexed time point, or property-referenced time.|
|operationType|string|true|none|A string indicating the operation type, which is related to time range operations.|
|operator|string|true|none|A string representing the operator used in the time range operation.|
|propertyParser|string|false|none|A string that defines the property parser used in the operation.|
|type|string|true|none|A string indicating the type of operation, which is 'TIME_RANGED'.|
|upperBoundEndpointBehavior|string|false|none|A string specifying the behavior of the upper bound endpoint in the time range.|
|upperBoundTimePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|An object representing the upper bound time point of the range, which can be a date point, indexed time point, or property-referenced time.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TIME_RANGED|

<h2 id="tocS_PublicRelativeComparativeTimestampRefineBy">PublicRelativeComparativeTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicrelativecomparativetimestamprefineby"></a>
<a id="schema_PublicRelativeComparativeTimestampRefineBy"></a>
<a id="tocSpublicrelativecomparativetimestamprefineby"></a>
<a id="tocspublicrelativecomparativetimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comparison|string|true|none|A string that defines the comparison operation to be used in the refinement.|
|timeOffset|[PublicTimeOffset](#schemapublictimeoffset)|true|none|none|
|type|string|true|none|A string that specifies the type of refinement, with the default value 'RELATIVE_COMPARATIVE'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|RELATIVE_COMPARATIVE|

<h2 id="tocS_PublicRelativeRangedTimestampRefineBy">PublicRelativeRangedTimestampRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicrelativerangedtimestamprefineby"></a>
<a id="schema_PublicRelativeRangedTimestampRefineBy"></a>
<a id="tocSpublicrelativerangedtimestamprefineby"></a>
<a id="tocspublicrelativerangedtimestamprefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lowerBoundOffset|[PublicTimeOffset](#schemapublictimeoffset)|true|none|none|
|rangeType|string|true|none|A string that specifies the type of range being applied.|
|type|string|true|none|A string indicating the type of refinement, with a default value of 'RELATIVE_RANGED'.|
|upperBoundOffset|[PublicTimeOffset](#schemapublictimeoffset)|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|RELATIVE_RANGED|

<h2 id="tocS_PublicRestrictedFilterBranch">PublicRestrictedFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicrestrictedfilterbranch"></a>
<a id="schema_PublicRestrictedFilterBranch"></a>
<a id="tocSpublicrestrictedfilterbranch"></a>
<a id="tocspublicrestrictedfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterBranchOperator|string|true|none|A string representing the operator used within the filter branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch. The default value is 'RESTRICTED'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, which can include various types such as 'PublicOrFilterBranch', 'PublicAndFilterBranch', and others.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters applied within the branch, which can include different filter types like 'PublicPropertyFilter', 'PublicAssociationInListFilter', and more.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|RESTRICTED|

<h2 id="tocS_PublicRollingDateRangePropertyOperation">PublicRollingDateRangePropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrollingdaterangepropertyoperation"></a>
<a id="schema_PublicRollingDateRangePropertyOperation"></a>
<a id="tocSpublicrollingdaterangepropertyoperation"></a>
<a id="tocspublicrollingdaterangepropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that do not have a value set for the property being filtered.|
|numberOfDays|integer(int32)|true|none|An integer specifying the number of days for the rolling date range.|
|operationType|string|true|none|A string indicating the type of operation, which is 'ROLLING_DATE_RANGE' by default.|
|operator|string|true|none|A string representing the operator used in the filter operation.|
|requiresTimeZoneConversion|boolean|true|none|A boolean indicating whether the operation requires time zone conversion.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ROLLING_DATE_RANGE|

<h2 id="tocS_PublicRollingPropertyUpdatedOperation">PublicRollingPropertyUpdatedOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicrollingpropertyupdatedoperation"></a>
<a id="schema_PublicRollingPropertyUpdatedOperation"></a>
<a id="tocSpublicrollingpropertyupdatedoperation"></a>
<a id="tocspublicrollingpropertyupdatedoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether objects with no value set should be included in the operation.|
|numberOfDays|integer(int32)|true|none|An integer specifying the number of days over which the rolling operation is applied.|
|operationType|string|true|none|A string indicating the type of operation, defaulting to 'ROLLING_PROPERTY_UPDATED'.|
|operator|string|true|none|A string representing the operator used in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|ROLLING_PROPERTY_UPDATED|

<h2 id="tocS_PublicSetOccurrencesRefineBy">PublicSetOccurrencesRefineBy</h2>
<!-- backwards compatibility -->
<a id="schemapublicsetoccurrencesrefineby"></a>
<a id="schema_PublicSetOccurrencesRefineBy"></a>
<a id="tocSpublicsetoccurrencesrefineby"></a>
<a id="tocspublicsetoccurrencesrefineby"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setType|string|true|none|A string specifying the set type used for the refinement.|
|type|string|true|none|A string indicating the type of refinement, which is 'SET_OCCURRENCES'.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SET_OCCURRENCES|

<h2 id="tocS_PublicStringPropertyOperation">PublicStringPropertyOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublicstringpropertyoperation"></a>
<a id="schema_PublicStringPropertyOperation"></a>
<a id="tocSpublicstringpropertyoperation"></a>
<a id="tocspublicstringpropertyoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the property.|
|operationType|string|true|none|A string indicating the type of operation. The default value is 'STRING'.|
|operator|string|true|none|A string representing the operator used in the operation.|
|value|string|true|none|A string representing the value involved in the operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|STRING|

<h2 id="tocS_PublicSurveyMonkeyFilter">PublicSurveyMonkeyFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicsurveymonkeyfilter"></a>
<a id="schema_PublicSurveyMonkeyFilter"></a>
<a id="tocSpublicsurveymonkeyfilter"></a>
<a id="tocspublicsurveymonkeyfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string representing the type of filter. The default value is 'SURVEY_MONKEY_VALUE'.|
|operator|string|true|none|A string that specifies the operation to be performed for the filter.|
|surveyId|string|true|none|A string that uniquely identifies the survey from which the data is being filtered.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|SURVEY_MONKEY|

<h2 id="tocS_PublicSurveyMonkeyValueFilter">PublicSurveyMonkeyValueFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicsurveymonkeyvaluefilter"></a>
<a id="schema_PublicSurveyMonkeyValueFilter"></a>
<a id="tocSpublicsurveymonkeyvaluefilter"></a>
<a id="tocspublicsurveymonkeyvaluefilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string that specifies the type of filter being applied. Default value is 'SURVEY_MONKEY_VALUE'.|
|operator|string|true|none|A string that specifies the operator used in the filter, determining how the survey data should be evaluated against the specified criteria.|
|surveyAnswerColId|string|false|none|A string representing the column identifier for the survey answer being filtered.|
|surveyAnswerRowId|string|false|none|A string representing the row identifier for the survey answer being filtered.|
|surveyId|string|true|none|A string representing the unique identifier of the SurveyMonkey survey.|
|surveyQuestion|string|true|none|A string indicating the specific question within the survey that the filter is targeting.|
|valueComparison|[PublicBoolPropertyOperation](#schemapublicboolpropertyoperation) \| [PublicNumberPropertyOperation](#schemapublicnumberpropertyoperation) \| [PublicStringPropertyOperation](#schemapublicstringpropertyoperation) \| [PublicDateTimePropertyOperation](#schemapublicdatetimepropertyoperation) \| [PublicRangedDatePropertyOperation](#schemapublicrangeddatepropertyoperation) \| [PublicComparativePropertyUpdatedOperation](#schemapubliccomparativepropertyupdatedoperation) \| [PublicComparativeDatePropertyOperation](#schemapubliccomparativedatepropertyoperation) \| [PublicRollingDateRangePropertyOperation](#schemapublicrollingdaterangepropertyoperation) \| [PublicRollingPropertyUpdatedOperation](#schemapublicrollingpropertyupdatedoperation) \| [PublicEnumerationPropertyOperation](#schemapublicenumerationpropertyoperation) \| [PublicAllPropertyTypesOperation](#schemapublicallpropertytypesoperation) \| [PublicRangedNumberPropertyOperation](#schemapublicrangednumberpropertyoperation) \| [PublicMultiStringPropertyOperation](#schemapublicmultistringpropertyoperation) \| [PublicDatePropertyOperation](#schemapublicdatepropertyoperation) \| [PublicCalendarDatePropertyOperation](#schemapubliccalendardatepropertyoperation) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation) \| [PublicComparativeStringPropertyOperation](#schemapubliccomparativestringpropertyoperation) \| [PublicComparativeNumberPropertyOperation](#schemapubliccomparativenumberpropertyoperation)|true|none|An object that defines the operation for comparing values, which can be one of several types such as boolean, number, string, date, or enumeration operations.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|SURVEY_MONKEY_VALUE|

<h2 id="tocS_PublicTimeOffset">PublicTimeOffset</h2>
<!-- backwards compatibility -->
<a id="schemapublictimeoffset"></a>
<a id="schema_PublicTimeOffset"></a>
<a id="tocSpublictimeoffset"></a>
<a id="tocspublictimeoffset"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amount|integer(int64)|true|none|An integer specifying the amount of time units to offset.|
|offsetDirection|string|true|none|A string indicating the direction of the time offset. Valid values are 'BEFORE' and 'AFTER'.|
|timeUnit|string|true|none|A string representing the unit of time for the offset. Valid values include 'MINUTE', 'HOUR', 'DAY', 'WEEK', 'MONTH', 'QUARTER', and 'YEAR'.|

<h2 id="tocS_PublicTimePointOperation">PublicTimePointOperation</h2>
<!-- backwards compatibility -->
<a id="schemapublictimepointoperation"></a>
<a id="schema_PublicTimePointOperation"></a>
<a id="tocSpublictimepointoperation"></a>
<a id="tocspublictimepointoperation"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpointBehavior|string|false|none|A string describing the behavior of the endpoint in the context of the time point operation.|
|includeObjectsWithNoValueSet|boolean|true|none|A boolean indicating whether to include objects that have no value set for the time point.|
|operationType|string|true|none|A string indicating the type of operation, which is 'TIME_POINT' by default.|
|operator|string|true|none|A string representing the operator used in the time point operation.|
|propertyParser|string|false|none|A string representing the parser used for the property in the time point operation.|
|timePoint|[PublicDatePoint](#schemapublicdatepoint) \| [PublicIndexedTimePoint](#schemapublicindexedtimepoint) \| [PublicPropertyReferencedTime](#schemapublicpropertyreferencedtime)|true|none|An object representing the specific time point used in the operation. It can be one of several types, such as a date point, indexed time point, or property-referenced time.|
|type|string|true|none|A string indicating the specific type of the time point operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|operationType|TIME_POINT|

<h2 id="tocS_PublicTodayReference">PublicTodayReference</h2>
<!-- backwards compatibility -->
<a id="schemapublictodayreference"></a>
<a id="schema_PublicTodayReference"></a>
<a id="tocSpublictodayreference"></a>
<a id="tocspublictodayreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'TODAY' by default.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|TODAY|

<h2 id="tocS_PublicUnifiedEventsFilter">PublicUnifiedEventsFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicunifiedeventsfilter"></a>
<a id="schema_PublicUnifiedEventsFilter"></a>
<a id="tocSpublicunifiedeventsfilter"></a>
<a id="tocspublicunifiedeventsfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement condition used to coalesce events based on specific criteria, such as number of occurrences or time range.|
|eventTypeId|string|false|none|A string representing the unique identifier for the event type being filtered.|
|filterLines|[[PublicEventFilterMetadata](#schemapubliceventfiltermetadata)]|true|none|An array of filters that are applied to the events. Each filter specifies additional criteria for refining the event data.|
|filterType|string|true|none|A string that specifies the type of filter, defaulting to 'UNIFIED_EVENTS'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement condition used to prune the events based on specific criteria, such as number of occurrences or time range.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|UNIFIED_EVENTS|

<h2 id="tocS_PublicUnifiedEventsFilterBranch">PublicUnifiedEventsFilterBranch</h2>
<!-- backwards compatibility -->
<a id="schemapublicunifiedeventsfilterbranch"></a>
<a id="schema_PublicUnifiedEventsFilterBranch"></a>
<a id="tocSpublicunifiedeventsfilterbranch"></a>
<a id="tocspublicunifiedeventsfilterbranch"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coalescingRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion that can be applied to coalesce event data. It can be one of several predefined refinement types.|
|eventTypeId|string|true|none|A string that specifies the ID of the event type being filtered.|
|filterBranchOperator|string|true|none|A string that specifies the logical operator used to combine the filters and filter branches within this branch.|
|filterBranchType|string|true|none|A string indicating the type of filter branch. Default value is 'UNIFIED_EVENTS'.|
|filterBranches|[[PublicOrFilterBranch](#schemapublicorfilterbranch) \| [PublicAndFilterBranch](#schemapublicandfilterbranch) \| [PublicNotAllFilterBranch](#schemapublicnotallfilterbranch) \| [PublicNotAnyFilterBranch](#schemapublicnotanyfilterbranch) \| [PublicRestrictedFilterBranch](#schemapublicrestrictedfilterbranch) \| [PublicUnifiedEventsFilterBranch](#schemapublicunifiedeventsfilterbranch) \| [PublicAssociationFilterBranch](#schemapublicassociationfilterbranch)]|true|none|An array of nested filter branches, allowing for complex filter logic. Each item can be one of several filter branch types.|
|filters|[[PublicPropertyFilter](#schemapublicpropertyfilter) \| [PublicAssociationInListFilter](#schemapublicassociationinlistfilter) \| [PublicPageViewAnalyticsFilter](#schemapublicpageviewanalyticsfilter) \| [PublicCtaAnalyticsFilter](#schemapublicctaanalyticsfilter) \| [PublicEventAnalyticsFilter](#schemapubliceventanalyticsfilter) \| [PublicFormSubmissionFilter](#schemapublicformsubmissionfilter) \| [PublicFormSubmissionOnPageFilter](#schemapublicformsubmissiononpagefilter) \| [PublicIntegrationEventFilter](#schemapublicintegrationeventfilter) \| [PublicEmailSubscriptionFilter](#schemapublicemailsubscriptionfilter) \| [PublicCommunicationSubscriptionFilter](#schemapubliccommunicationsubscriptionfilter) \| [PublicSurveyMonkeyFilter](#schemapublicsurveymonkeyfilter) \| [PublicSurveyMonkeyValueFilter](#schemapublicsurveymonkeyvaluefilter) \| [PublicWebinarFilter](#schemapublicwebinarfilter) \| [PublicEmailEventFilter](#schemapublicemaileventfilter) \| [PublicPrivacyAnalyticsFilter](#schemapublicprivacyanalyticsfilter) \| [PublicAdsSearchFilter](#schemapublicadssearchfilter) \| [PublicAdsTimeFilter](#schemapublicadstimefilter) \| [PublicInListFilter](#schemapublicinlistfilter) \| [PublicUnifiedEventsFilter](#schemapublicunifiedeventsfilter) \| [PublicConstantFilter](#schemapublicconstantfilter)]|true|none|An array of filters applied to the events. Each filter can be one of several predefined filter types.|
|operator|string|true|none|A string representing the operation to be performed on the events. Valid values are 'HAS_COMPLETED' and 'HAS_NOT_COMPLETED'.|
|pruningRefineBy|[PublicNumOccurrencesRefineBy](#schemapublicnumoccurrencesrefineby) \| [PublicSetOccurrencesRefineBy](#schemapublicsetoccurrencesrefineby) \| [PublicRelativeComparativeTimestampRefineBy](#schemapublicrelativecomparativetimestamprefineby) \| [PublicRelativeRangedTimestampRefineBy](#schemapublicrelativerangedtimestamprefineby) \| [PublicAbsoluteComparativeTimestampRefineBy](#schemapublicabsolutecomparativetimestamprefineby) \| [PublicAbsoluteRangedTimestampRefineBy](#schemapublicabsoluterangedtimestamprefineby) \| [PublicAllHistoryRefineBy](#schemapublicallhistoryrefineby) \| [PublicTimePointOperation](#schemapublictimepointoperation) \| [PublicRangedTimeOperation](#schemapublicrangedtimeoperation)|false|none|An optional refinement criterion used to prune event data. It can be one of several predefined refinement types.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterBranchType|UNIFIED_EVENTS|
|operator|HAS_COMPLETED|
|operator|HAS_NOT_COMPLETED|

<h2 id="tocS_PublicWebinarFilter">PublicWebinarFilter</h2>
<!-- backwards compatibility -->
<a id="schemapublicwebinarfilter"></a>
<a id="schema_PublicWebinarFilter"></a>
<a id="tocSpublicwebinarfilter"></a>
<a id="tocspublicwebinarfilter"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filterType|string|true|none|A string that specifies the type of filter being applied. The default value is 'WEBINAR'.|
|operator|string|true|none|A string that defines the operation or condition applied by the filter.|
|webinarId|string|false|none|A string representing the unique identifier of the webinar to which the filter is applied.|

#### Enumerated Values

|Property|Value|
|---|---|
|filterType|WEBINAR|

<h2 id="tocS_PublicWeekReference">PublicWeekReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicweekreference"></a>
<a id="schema_PublicWeekReference"></a>
<a id="tocSpublicweekreference"></a>
<a id="tocspublicweekreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dayOfWeek|string|true|none|An integer representing the day of the week.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond of the second.|
|minute|integer(int32)|false|none|An integer representing the minute of the hour.|
|referenceType|string|true|none|A string indicating the type of reference, which is 'WEEK' for this component.|
|second|integer(int32)|false|none|An integer representing the second of the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|dayOfWeek|FRIDAY|
|dayOfWeek|MONDAY|
|dayOfWeek|SATURDAY|
|dayOfWeek|SUNDAY|
|dayOfWeek|THURSDAY|
|dayOfWeek|TUESDAY|
|dayOfWeek|WEDNESDAY|
|referenceType|WEEK|

<h2 id="tocS_PublicYearReference">PublicYearReference</h2>
<!-- backwards compatibility -->
<a id="schemapublicyearreference"></a>
<a id="schema_PublicYearReference"></a>
<a id="tocSpublicyearreference"></a>
<a id="tocspublicyearreference"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|true|none|An integer representing the day of the month.|
|hour|integer(int32)|false|none|An integer representing the hour of the day.|
|millisecond|integer(int32)|false|none|An integer representing the millisecond within the second.|
|minute|integer(int32)|false|none|An integer representing the minute within the hour.|
|month|integer(int32)|true|none|An integer representing the month of the year.|
|referenceType|string|true|none|A string that specifies the type of reference, which is 'YEAR' by default.|
|second|integer(int32)|false|none|An integer representing the second within the minute.|

#### Enumerated Values

|Property|Value|
|---|---|
|referenceType|YEAR|

<h2 id="tocS_RecordIdInput">RecordIdInput</h2>
<!-- backwards compatibility -->
<a id="schemarecordidinput"></a>
<a id="schema_RecordIdInput"></a>
<a id="tocSrecordidinput"></a>
<a id="tocsrecordidinput"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectTypeId|string|true|none|A string representing the unique identifier of the object type associated with the record.|
|recordId|string|true|none|A string representing the unique identifier of the record.|

<h2 id="tocS_RecordIdWithMemberships">RecordIdWithMemberships</h2>
<!-- backwards compatibility -->
<a id="schemarecordidwithmemberships"></a>
<a id="schema_RecordIdWithMemberships"></a>
<a id="tocSrecordidwithmemberships"></a>
<a id="tocsrecordidwithmemberships"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|objectTypeId|string|true|none|The identifier for the type of object the record belongs to, represented as a string.|
|recordId|string|true|none|The unique identifier for the record, represented as a string.|
|recordListMemberships|[[RecordListMembership](#schemarecordlistmembership)]|true|none|An array of memberships indicating the lists the record is part of, each containing details like list ID, version, and timestamps of when the record was added.|

<h2 id="tocS_RecordListMembership">RecordListMembership</h2>
<!-- backwards compatibility -->
<a id="schemarecordlistmembership"></a>
<a id="schema_RecordListMembership"></a>
<a id="tocSrecordlistmembership"></a>
<a id="tocsrecordlistmembership"></a>

```json
null
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstAddedTimestamp|string(date-time)|true|none|The date and time when the record was first added to the list, in ISO 8601 format.|
|isPublicList|boolean|false|none|A boolean indicating whether the list is public.|
|lastAddedTimestamp|string(date-time)|true|none|The date and time when the record was last added to the list, in ISO 8601 format.|
|listId|string|true|none|The unique identifier of the list. It is a string value.|
|listVersion|integer(int32)|true|none|The version number of the list, represented as an integer.|

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
|category|string|true|none|A string indicating the general category of the error.|
|context|object|true|none|An object containing additional context about the error, represented as a map of strings to arrays of strings.|
|errors|[[ErrorDetail](#schemaerrordetail)]|true|none|An array of ErrorDetail objects that provide more specific details about individual errors.|
|id|string|false|none|A string that uniquely identifies the error instance.|
|links|object|true|none|An object containing related links, represented as a map of strings to strings.|
|message|string|true|none|A string containing a human-readable explanation of the error.|
|status|string|true|none|A string representing the HTTP status code associated with the error.|
|subCategory|object|false|none|An object providing additional categorization of the error.|
