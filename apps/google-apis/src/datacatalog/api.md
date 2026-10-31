<h1 id="google-cloud-data-catalog-api">Google Cloud Data Catalog API v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

A fully managed and highly scalable data discovery and metadata management service.

Base URLs:

* <a href="https://datacatalog.googleapis.com/">https://datacatalog.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/data-catalog/docs/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

- oAuth2 authentication. Oauth 2.0 authorizationCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.|

<h1 id="google-cloud-data-catalog-api-catalog">catalog</h1>

## datacatalog.catalog.search

<a id="opIddatacatalog.catalog.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/catalog:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "orderBy": "string",
    "pageSize": 0,
    "pageToken": "string",
    "query": "string",
    "scope": {
      "includeGcpPublicDatasets": true,
      "includeOrgIds": [
        "string"
      ],
      "includeProjectIds": [
        "string"
      ],
      "restrictedLocations": [
        "string"
      ]
    }
  }'
```

`POST /v1beta1/catalog:search`

Searches Data Catalog for multiple resources like entries, tags that match a query. This is a custom method (https://cloud.google.com/apis/design/custom_methods) and does not return the complete resource, only the resource identifier and high level fields. Clients can subsequently call `Get` methods. Note that Data Catalog search queries do not guarantee full recall. Query results that match your query may not be returned, even in subsequent result pages. Also note that results returned (and not returned) can vary across repeated search queries. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.

> Body parameter

```json
{
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string",
  "query": "string",
  "scope": {
    "includeGcpPublicDatasets": true,
    "includeOrgIds": [
      "string"
    ],
    "includeProjectIds": [
      "string"
    ],
    "restrictedLocations": [
      "string"
    ]
  }
}
```

<h3 id="datacatalogcatalogsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1SearchCatalogRequest](#schemagoogleclouddatacatalogv1beta1searchcatalogrequest)|false|none|
|» orderBy|body|string|false|Specifies the ordering of results, currently supported case-sensitive choices are: * `relevance`, only supports descending * `last_modified_timestamp [asc\|desc]`, defaults to descending if not specified * `default` that can only be descending If not specified, defaults to `relevance` descending.|
|» pageSize|body|integer(int32)|false|Number of results in the search page. If <=0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000.|
|» pageToken|body|string|false|Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned.|
|» query|body|string|false|Optional. The query string in search query syntax. An empty query string will result in all data assets (in the specified scope) that the user has access to. Query strings can be simple as "x" or more qualified as: * name:x * column:x * description:y Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.|
|» scope|body|[GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope](#schemagoogleclouddatacatalogv1beta1searchcatalogrequestscope)|false|Required. The scope of this search request. A `scope` that has empty `include_org_ids`, `include_project_ids` AND false `include_gcp_public_datasets` is considered invalid. Data Catalog will return an error in such a case.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "linkedResource": "string",
      "modifyTime": "string",
      "relativeResourceName": "string",
      "searchResultSubtype": "string",
      "searchResultType": "SEARCH_RESULT_TYPE_UNSPECIFIED"
    }
  ],
  "totalSize": 0,
  "unreachable": [
    "string"
  ]
}
```

<h3 id="datacatalogcatalogsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1SearchCatalogResponse](#schemagoogleclouddatacatalogv1beta1searchcatalogresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="google-cloud-data-catalog-api-entries">entries</h1>

## datacatalog.entries.lookup

<a id="opIddatacatalog.entries.lookup"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/entries:lookup \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/entries:lookup`

Get an entry by target resource name. This method allows clients to use the resource name from the source Google Cloud Platform service to get the Data Catalog Entry.

<h3 id="datacatalogentrieslookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|linkedResource|query|string|false|The full name of the Google Cloud Platform resource the Data Catalog entry represents. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Full names are case-sensitive. Examples: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId * //pubsub.googleapis.com/projects/projectId/topics/topicId|
|sqlResource|query|string|false|The SQL name of the entry. SQL names are case-sensitive. Examples: * `pubsub.project_id.topic_id` * ``pubsub.project_id.`topic.id.with.dots` `` * `bigquery.table.project_id.dataset_id.table_id` * `bigquery.dataset.project_id.dataset_id` * `datacatalog.entry.project_id.location_id.entry_group_id.entry_id` `*_id`s should satisfy the standard SQL rules for identifiers. https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "bigqueryDateShardedSpec": {
    "dataset": "string",
    "shardCount": "string",
    "tablePrefix": "string"
  },
  "bigqueryTableSpec": {
    "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
    "tableSpec": {
      "groupedEntry": "string"
    },
    "viewSpec": {
      "viewQuery": "string"
    }
  },
  "description": "string",
  "displayName": "string",
  "gcsFilesetSpec": {
    "filePatterns": [
      "string"
    ],
    "sampleGcsFileSpecs": [
      {
        "filePath": "string",
        "gcsTimestamps": {
          "createTime": "string",
          "expireTime": "string",
          "updateTime": "string"
        },
        "sizeBytes": "string"
      }
    ]
  },
  "integratedSystem": "INTEGRATED_SYSTEM_UNSPECIFIED",
  "linkedResource": "string",
  "name": "string",
  "schema": {
    "columns": [
      {
        "column": "string",
        "description": "string",
        "mode": "string",
        "subcolumns": [
          {}
        ],
        "type": "string"
      }
    ]
  },
  "sourceSystemTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  },
  "type": "ENTRY_TYPE_UNSPECIFIED",
  "usageSignal": {
    "updateTime": "string",
    "usageWithinTimeRange": {
      "property1": {
        "totalCancellations": 0,
        "totalCompletions": 0,
        "totalExecutionTimeForCompletionsMillis": 0,
        "totalFailures": 0
      },
      "property2": {
        "totalCancellations": 0,
        "totalCompletions": 0,
        "totalExecutionTimeForCompletionsMillis": 0,
        "totalFailures": 0
      }
    }
  },
  "userSpecifiedSystem": "string",
  "userSpecifiedType": "string"
}
```

<h3 id="datacatalogentrieslookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1Entry](#schemagoogleclouddatacatalogv1beta1entry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="google-cloud-data-catalog-api-projects">projects</h1>

## datacatalog.projects.locations.taxonomies.policyTags.get

<a id="opIddatacatalog.projects.locations.taxonomies.policyTags.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Gets a policy tag.

<h3 id="datacatalogprojectslocationstaxonomiespolicytagsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the requested policy tag.|
|readMask|query|string|false|The fields to return. If not set or empty, all fields are returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "childPolicyTags": [
    "string"
  ],
  "description": "string",
  "displayName": "string",
  "name": "string",
  "parentPolicyTag": "string"
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1PolicyTag](#schemagoogleclouddatacatalogv1beta1policytag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.policyTags.delete

<a id="opIddatacatalog.projects.locations.taxonomies.policyTags.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Deletes a policy tag. Also deletes all of its descendant policy tags.

<h3 id="datacatalogprojectslocationstaxonomiespolicytagsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Resource name of the policy tag to be deleted. All of its descendant policy tags will also be deleted.|
|force|query|boolean|false|Required. Currently, this field must always be set to `true`. This confirms the deletion of this field from any tags using this field. `force = false` will be supported in the future.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.policyTags.patch

<a id="opIddatacatalog.projects.locations.taxonomies.policyTags.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "parentPolicyTag": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates a policy tag.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "parentPolicyTag": "string"
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".|
|updateMask|query|string|false|The update mask applies to the resource. Only display_name, description and parent_policy_tag can be updated and thus can be listed in the mask. If update_mask is not provided, all allowed fields (i.e. display_name, description and parent) will be updated. For more information including the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1PolicyTag](#schemagoogleclouddatacatalogv1beta1policytag)|false|none|
|» description|body|string|false|Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description.|
|» displayName|body|string|false|Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.|
|» parentPolicyTag|body|string|false|Resource name of this policy tag's parent policy tag (e.g. for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the "Geolocation" policy tag in the example above). If not set, defaults to an empty string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "childPolicyTags": [
    "string"
  ],
  "description": "string",
  "displayName": "string",
  "name": "string",
  "parentPolicyTag": "string"
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1PolicyTag](#schemagoogleclouddatacatalogv1beta1policytag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.tagTemplates.fields.enumValues.rename

<a id="opIddatacatalog.projects.locations.tagTemplates.fields.enumValues.rename"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:rename \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "newEnumValueDisplayName": "string"
  }'
```

`POST /v1beta1/{name}:rename`

Renames an enum value in a tag template. The enum values have to be unique within one enum field. Thus, an enum value cannot be renamed with a name used in any other enum value within the same enum field.

> Body parameter

```json
{
  "newEnumValueDisplayName": "string"
}
```

<h3 id="datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the enum field value. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id}/fields/{tag_template_field_id}/enumValues/{enum_value_display_name}|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest](#schemagoogleclouddatacatalogv1beta1renametagtemplatefieldenumvaluerequest)|false|none|
|» newEnumValueDisplayName|body|string|false|Required. The new display name of the enum value. For example, `my_new_enum_value`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "displayName": "string",
  "isRequired": true,
  "name": "string",
  "order": 0,
  "type": {
    "enumType": {
      "allowedValues": [
        {
          "displayName": "string"
        }
      ]
    },
    "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="datacatalogprojectslocationstagtemplatesfieldsenumvaluesrename-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1TagTemplateField](#schemagoogleclouddatacatalogv1beta1tagtemplatefield)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.entryGroups.entries.list

<a id="opIddatacatalog.projects.locations.entryGroups.entries.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/entries \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/entries`

Lists entries.

<h3 id="datacatalogprojectslocationsentrygroupsentrieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the entry group that contains the entries, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}|
|pageSize|query|integer|false|The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.|
|pageToken|query|string|false|Token that specifies which page is requested. If empty, the first page is returned.|
|readMask|query|string|false|The fields to return for each Entry. If not set or empty, all fields are returned. For example, setting read_mask to contain only one path "name" will cause ListEntries to return a list of Entries with only "name" field.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "entries": [
    {
      "bigqueryDateShardedSpec": {
        "dataset": "string",
        "shardCount": "string",
        "tablePrefix": "string"
      },
      "bigqueryTableSpec": {
        "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
        "tableSpec": {
          "groupedEntry": "string"
        },
        "viewSpec": {
          "viewQuery": "string"
        }
      },
      "description": "string",
      "displayName": "string",
      "gcsFilesetSpec": {
        "filePatterns": [
          "string"
        ],
        "sampleGcsFileSpecs": [
          {
            "filePath": "string",
            "gcsTimestamps": {
              "createTime": "string",
              "expireTime": "string",
              "updateTime": "string"
            },
            "sizeBytes": "string"
          }
        ]
      },
      "integratedSystem": "INTEGRATED_SYSTEM_UNSPECIFIED",
      "linkedResource": "string",
      "name": "string",
      "schema": {
        "columns": [
          {
            "column": "string",
            "description": "string",
            "mode": "string",
            "subcolumns": [
              {}
            ],
            "type": "string"
          }
        ]
      },
      "sourceSystemTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      },
      "type": "ENTRY_TYPE_UNSPECIFIED",
      "usageSignal": {
        "updateTime": "string",
        "usageWithinTimeRange": {
          "property1": {
            "totalCancellations": 0,
            "totalCompletions": 0,
            "totalExecutionTimeForCompletionsMillis": 0,
            "totalFailures": 0
          },
          "property2": {
            "totalCancellations": 0,
            "totalCompletions": 0,
            "totalExecutionTimeForCompletionsMillis": 0,
            "totalFailures": 0
          }
        }
      },
      "userSpecifiedSystem": "string",
      "userSpecifiedType": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datacatalogprojectslocationsentrygroupsentrieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1ListEntriesResponse](#schemagoogleclouddatacatalogv1beta1listentriesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.entryGroups.entries.create

<a id="opIddatacatalog.projects.locations.entryGroups.entries.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/entries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "bigqueryDateShardedSpec": {},
    "bigqueryTableSpec": {
      "tableSpec": {},
      "viewSpec": {}
    },
    "description": "string",
    "displayName": "string",
    "gcsFilesetSpec": {
      "filePatterns": [
        "string"
      ]
    },
    "linkedResource": "string",
    "schema": {
      "columns": [
        {
          "column": "string",
          "description": "string",
          "mode": "string",
          "subcolumns": [
            {}
          ],
          "type": "string"
        }
      ]
    },
    "type": "ENTRY_TYPE_UNSPECIFIED",
    "userSpecifiedSystem": "string",
    "userSpecifiedType": "string"
  }'
```

`POST /v1beta1/{parent}/entries`

Creates an entry. Only entries of 'FILESET' type or user-specified type can be created. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information). A maximum of 100,000 entries may be created per entry group.

> Body parameter

```json
{
  "bigqueryDateShardedSpec": {},
  "bigqueryTableSpec": {
    "tableSpec": {},
    "viewSpec": {}
  },
  "description": "string",
  "displayName": "string",
  "gcsFilesetSpec": {
    "filePatterns": [
      "string"
    ]
  },
  "linkedResource": "string",
  "schema": {
    "columns": [
      {
        "column": "string",
        "description": "string",
        "mode": "string",
        "subcolumns": [
          {}
        ],
        "type": "string"
      }
    ]
  },
  "type": "ENTRY_TYPE_UNSPECIFIED",
  "userSpecifiedSystem": "string",
  "userSpecifiedType": "string"
}
```

<h3 id="datacatalogprojectslocationsentrygroupsentriescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the entry group this entry is in. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this Entry and its child resources may not actually be stored in the location in this name.|
|entryId|query|string|false|Required. The id of the entry to create.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1Entry](#schemagoogleclouddatacatalogv1beta1entry)|false|none|
|» bigqueryDateShardedSpec|body|[GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec](#schemagoogleclouddatacatalogv1beta1bigquerydateshardedspec)|false|Specification for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding.|
|» bigqueryTableSpec|body|[GoogleCloudDatacatalogV1beta1BigQueryTableSpec](#schemagoogleclouddatacatalogv1beta1bigquerytablespec)|false|Specification that applies to a BigQuery table. This is only valid on entries of type `TABLE`.|
|» description|body|string|false|Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string.|
|» displayName|body|string|false|Display information such as title and description. A short name to identify the entry, for example, "Analytics Data - Jan 2011". Default value is an empty string.|
|» gcsFilesetSpec|body|[GoogleCloudDatacatalogV1beta1GcsFilesetSpec](#schemagoogleclouddatacatalogv1beta1gcsfilesetspec)|false|Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.|
|» linkedResource|body|string|false|The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string.|
|» schema|body|[GoogleCloudDatacatalogV1beta1Schema](#schemagoogleclouddatacatalogv1beta1schema)|false|Schema of the entry. An entry might not have any schema attached to it.|
|» type|body|string|false|The type of the entry. Only used for Entries with types in the EntryType enum.|
|» userSpecifiedSystem|body|string|false|This field indicates the entry's source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.|
|» userSpecifiedType|body|string|false|Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example "my_special_type". `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» type|ENTRY_TYPE_UNSPECIFIED|
|» type|TABLE|
|» type|MODEL|
|» type|DATA_STREAM|
|» type|FILESET|

> Example responses

> 200 Response

```json
{
  "bigqueryDateShardedSpec": {
    "dataset": "string",
    "shardCount": "string",
    "tablePrefix": "string"
  },
  "bigqueryTableSpec": {
    "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
    "tableSpec": {
      "groupedEntry": "string"
    },
    "viewSpec": {
      "viewQuery": "string"
    }
  },
  "description": "string",
  "displayName": "string",
  "gcsFilesetSpec": {
    "filePatterns": [
      "string"
    ],
    "sampleGcsFileSpecs": [
      {
        "filePath": "string",
        "gcsTimestamps": {
          "createTime": "string",
          "expireTime": "string",
          "updateTime": "string"
        },
        "sizeBytes": "string"
      }
    ]
  },
  "integratedSystem": "INTEGRATED_SYSTEM_UNSPECIFIED",
  "linkedResource": "string",
  "name": "string",
  "schema": {
    "columns": [
      {
        "column": "string",
        "description": "string",
        "mode": "string",
        "subcolumns": [
          {}
        ],
        "type": "string"
      }
    ]
  },
  "sourceSystemTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  },
  "type": "ENTRY_TYPE_UNSPECIFIED",
  "usageSignal": {
    "updateTime": "string",
    "usageWithinTimeRange": {
      "property1": {
        "totalCancellations": 0,
        "totalCompletions": 0,
        "totalExecutionTimeForCompletionsMillis": 0,
        "totalFailures": 0
      },
      "property2": {
        "totalCancellations": 0,
        "totalCompletions": 0,
        "totalExecutionTimeForCompletionsMillis": 0,
        "totalFailures": 0
      }
    }
  },
  "userSpecifiedSystem": "string",
  "userSpecifiedType": "string"
}
```

<h3 id="datacatalogprojectslocationsentrygroupsentriescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1Entry](#schemagoogleclouddatacatalogv1beta1entry)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.entryGroups.list

<a id="opIddatacatalog.projects.locations.entryGroups.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/entryGroups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/entryGroups`

Lists entry groups.

<h3 id="datacatalogprojectslocationsentrygroupslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the location that contains the entry groups, which can be provided in URL format. Example: * projects/{project_id}/locations/{location}|
|pageSize|query|integer|false|Optional. The maximum number of items to return. Default is 10. Max limit is 1000. Throws an invalid argument for `page_size > 1000`.|
|pageToken|query|string|false|Optional. Token that specifies which page is requested. If empty, the first page is returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "entryGroups": [
    {
      "dataCatalogTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      },
      "description": "string",
      "displayName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="datacatalogprojectslocationsentrygroupslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse](#schemagoogleclouddatacatalogv1beta1listentrygroupsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.entryGroups.create

<a id="opIddatacatalog.projects.locations.entryGroups.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/entryGroups \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "name": "string"
  }'
```

`POST /v1beta1/{parent}/entryGroups`

A maximum of 10,000 entry groups may be created per organization across all locations. Users should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project] (https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

<h3 id="datacatalogprojectslocationsentrygroupscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project this entry group is in. Example: * projects/{project_id}/locations/{location} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.|
|entryGroupId|query|string|false|Required. The id of the entry group to create. The id must begin with a letter or underscore, contain only English letters, numbers and underscores, and be at most 64 characters.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1EntryGroup](#schemagoogleclouddatacatalogv1beta1entrygroup)|false|none|
|» description|body|string|false|Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string.|
|» displayName|body|string|false|A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.|
|» name|body|string|false|The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "dataCatalogTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  },
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

<h3 id="datacatalogprojectslocationsentrygroupscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1EntryGroup](#schemagoogleclouddatacatalogv1beta1entrygroup)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.tagTemplates.fields.create

<a id="opIddatacatalog.projects.locations.tagTemplates.fields.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/fields \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "isRequired": true,
    "order": 0,
    "type": {
      "enumType": {
        "allowedValues": [
          {
            "displayName": "string"
          }
        ]
      },
      "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
    }
  }'
```

`POST /v1beta1/{parent}/fields`

Creates a field in a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "isRequired": true,
  "order": 0,
  "type": {
    "enumType": {
      "allowedValues": [
        {
          "displayName": "string"
        }
      ]
    },
    "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="datacatalogprojectslocationstagtemplatesfieldscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions). Example: * projects/{project_id}/locations/us-central1/tagTemplates/{tag_template_id}|
|tagTemplateFieldId|query|string|false|Required. The ID of the tag template field to create. Field ids can contain letters (both uppercase and lowercase), numbers (0-9), underscores (_) and dashes (-). Field IDs must be at least 1 character long and at most 128 characters long. Field IDs must also be unique within their template.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1TagTemplateField](#schemagoogleclouddatacatalogv1beta1tagtemplatefield)|false|none|
|» description|body|string|false|The description for this field. Defaults to an empty string.|
|» displayName|body|string|false|The display name for this field. Defaults to an empty string.|
|» isRequired|body|boolean|false|Whether this is a required field. Defaults to false.|
|» order|body|integer(int32)|false|The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.|
|» type|body|[GoogleCloudDatacatalogV1beta1FieldType](#schemagoogleclouddatacatalogv1beta1fieldtype)|false|Required. The type of value this tag field can contain.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "description": "string",
  "displayName": "string",
  "isRequired": true,
  "name": "string",
  "order": 0,
  "type": {
    "enumType": {
      "allowedValues": [
        {
          "displayName": "string"
        }
      ]
    },
    "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
  }
}
```

<h3 id="datacatalogprojectslocationstagtemplatesfieldscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1TagTemplateField](#schemagoogleclouddatacatalogv1beta1tagtemplatefield)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.policyTags.list

<a id="opIddatacatalog.projects.locations.taxonomies.policyTags.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/policyTags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/policyTags`

Lists all policy tags in a taxonomy.

<h3 id="datacatalogprojectslocationstaxonomiespolicytagslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the taxonomy to list the policy tags of.|
|pageSize|query|integer|false|The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.|
|pageToken|query|string|false|The next_page_token value returned from a previous List request, if any. If not set, defaults to an empty string.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "policyTags": [
    {
      "childPolicyTags": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string",
      "parentPolicyTag": "string"
    }
  ]
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse](#schemagoogleclouddatacatalogv1beta1listpolicytagsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.policyTags.create

<a id="opIddatacatalog.projects.locations.taxonomies.policyTags.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/policyTags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "displayName": "string",
    "parentPolicyTag": "string"
  }'
```

`POST /v1beta1/{parent}/policyTags`

Creates a policy tag in the specified taxonomy.

> Body parameter

```json
{
  "description": "string",
  "displayName": "string",
  "parentPolicyTag": "string"
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the taxonomy that the policy tag will belong to.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1PolicyTag](#schemagoogleclouddatacatalogv1beta1policytag)|false|none|
|» description|body|string|false|Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description.|
|» displayName|body|string|false|Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.|
|» parentPolicyTag|body|string|false|Resource name of this policy tag's parent policy tag (e.g. for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the "Geolocation" policy tag in the example above). If not set, defaults to an empty string.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "childPolicyTags": [
    "string"
  ],
  "description": "string",
  "displayName": "string",
  "name": "string",
  "parentPolicyTag": "string"
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1PolicyTag](#schemagoogleclouddatacatalogv1beta1policytag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.tagTemplates.create

<a id="opIddatacatalog.projects.locations.tagTemplates.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tagTemplates \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "fields": {
      "property1": {
        "description": "string",
        "displayName": "string",
        "isRequired": true,
        "order": 0,
        "type": {
          "enumType": {
            "allowedValues": [
              {
                "displayName": "string"
              }
            ]
          },
          "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
        }
      },
      "property2": {
        "description": "string",
        "displayName": "string",
        "isRequired": true,
        "order": 0,
        "type": {
          "enumType": {
            "allowedValues": [
              {
                "displayName": "string"
              }
            ]
          },
          "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
        }
      }
    },
    "name": "string"
  }'
```

`POST /v1beta1/{parent}/tagTemplates`

Creates a tag template. The user should enable the Data Catalog API in the project identified by the `parent` parameter (see [Data Catalog Resource Project](https://cloud.google.com/data-catalog/docs/concepts/resource-project) for more information).

> Body parameter

```json
{
  "displayName": "string",
  "fields": {
    "property1": {
      "description": "string",
      "displayName": "string",
      "isRequired": true,
      "order": 0,
      "type": {
        "enumType": {
          "allowedValues": [
            {
              "displayName": "string"
            }
          ]
        },
        "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
      }
    },
    "property2": {
      "description": "string",
      "displayName": "string",
      "isRequired": true,
      "order": 0,
      "type": {
        "enumType": {
          "allowedValues": [
            {
              "displayName": "string"
            }
          ]
        },
        "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
      }
    }
  },
  "name": "string"
}
```

<h3 id="datacatalogprojectslocationstagtemplatescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the project and the template location [region](https://cloud.google.com/data-catalog/docs/concepts/regions. Example: * projects/{project_id}/locations/us-central1|
|tagTemplateId|query|string|false|Required. The id of the tag template to create.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1TagTemplate](#schemagoogleclouddatacatalogv1beta1tagtemplate)|false|none|
|» displayName|body|string|false|The display name for this template. Defaults to an empty string.|
|» fields|body|object|false|Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. This map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9) and underscores (_). Field IDs must be at least 1 character long and at most 64 characters long. Field IDs must start with a letter or underscore.|
|» » **additionalProperties**|body|[GoogleCloudDatacatalogV1beta1TagTemplateField](#schemagoogleclouddatacatalogv1beta1tagtemplatefield)|false|The template for an individual field within a tag template.|
|» name|body|string|false|The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "displayName": "string",
  "fields": {
    "property1": {
      "description": "string",
      "displayName": "string",
      "isRequired": true,
      "name": "string",
      "order": 0,
      "type": {
        "enumType": {
          "allowedValues": [
            {
              "displayName": "string"
            }
          ]
        },
        "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
      }
    },
    "property2": {
      "description": "string",
      "displayName": "string",
      "isRequired": true,
      "name": "string",
      "order": 0,
      "type": {
        "enumType": {
          "allowedValues": [
            {
              "displayName": "string"
            }
          ]
        },
        "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
      }
    }
  },
  "name": "string"
}
```

<h3 id="datacatalogprojectslocationstagtemplatescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1TagTemplate](#schemagoogleclouddatacatalogv1beta1tagtemplate)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.entryGroups.tags.list

<a id="opIddatacatalog.projects.locations.entryGroups.tags.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/tags`

Lists tags assigned to an Entry. The columns in the response are lowercased.

<h3 id="datacatalogprojectslocationsentrygroupstagslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the Data Catalog resource to list the tags of. The resource could be an Entry or an EntryGroup. Examples: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id}|
|pageSize|query|integer|false|The maximum number of tags to return. Default is 10. Max limit is 1000.|
|pageToken|query|string|false|Token that specifies which page is requested. If empty, the first page is returned.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "tags": [
    {
      "column": "string",
      "fields": {
        "property1": {
          "boolValue": true,
          "displayName": "string",
          "doubleValue": 0,
          "enumValue": {
            "displayName": "string"
          },
          "order": 0,
          "stringValue": "string",
          "timestampValue": "string"
        },
        "property2": {
          "boolValue": true,
          "displayName": "string",
          "doubleValue": 0,
          "enumValue": {
            "displayName": "string"
          },
          "order": 0,
          "stringValue": "string",
          "timestampValue": "string"
        }
      },
      "name": "string",
      "template": "string",
      "templateDisplayName": "string"
    }
  ]
}
```

<h3 id="datacatalogprojectslocationsentrygroupstagslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1ListTagsResponse](#schemagoogleclouddatacatalogv1beta1listtagsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.entryGroups.tags.create

<a id="opIddatacatalog.projects.locations.entryGroups.tags.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/tags \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "column": "string",
    "fields": {
      "property1": {
        "boolValue": true,
        "doubleValue": 0,
        "enumValue": {
          "displayName": "string"
        },
        "stringValue": "string",
        "timestampValue": "string"
      },
      "property2": {
        "boolValue": true,
        "doubleValue": 0,
        "enumValue": {
          "displayName": "string"
        },
        "stringValue": "string",
        "timestampValue": "string"
      }
    },
    "name": "string",
    "template": "string"
  }'
```

`POST /v1beta1/{parent}/tags`

Creates a tag on an Entry. Note: The project identified by the `parent` parameter for the [tag](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.entryGroups.entries.tags/create#path-parameters) and the [tag template](https://cloud.google.com/data-catalog/docs/reference/rest/v1beta1/projects.locations.tagTemplates/create#path-parameters) used to create the tag must be from the same organization.

> Body parameter

```json
{
  "column": "string",
  "fields": {
    "property1": {
      "boolValue": true,
      "doubleValue": 0,
      "enumValue": {
        "displayName": "string"
      },
      "stringValue": "string",
      "timestampValue": "string"
    },
    "property2": {
      "boolValue": true,
      "doubleValue": 0,
      "enumValue": {
        "displayName": "string"
      },
      "stringValue": "string",
      "timestampValue": "string"
    }
  },
  "name": "string",
  "template": "string"
}
```

<h3 id="datacatalogprojectslocationsentrygroupstagscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the resource to attach this tag to. Tags can be attached to Entries. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Tag and its child resources may not actually be stored in the location in this name.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1Tag](#schemagoogleclouddatacatalogv1beta1tag)|false|none|
|» column|body|string|false|Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use `.` to separate the column names. Example: * `outer_column.inner_column`|
|» fields|body|object|false|Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.|
|» » **additionalProperties**|body|[GoogleCloudDatacatalogV1beta1TagField](#schemagoogleclouddatacatalogv1beta1tagfield)|false|Contains the value and supporting information for a field within a Tag.|
|» name|body|string|false|The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.|
|» template|body|string|false|Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "column": "string",
  "fields": {
    "property1": {
      "boolValue": true,
      "displayName": "string",
      "doubleValue": 0,
      "enumValue": {
        "displayName": "string"
      },
      "order": 0,
      "stringValue": "string",
      "timestampValue": "string"
    },
    "property2": {
      "boolValue": true,
      "displayName": "string",
      "doubleValue": 0,
      "enumValue": {
        "displayName": "string"
      },
      "order": 0,
      "stringValue": "string",
      "timestampValue": "string"
    }
  },
  "name": "string",
  "template": "string",
  "templateDisplayName": "string"
}
```

<h3 id="datacatalogprojectslocationsentrygroupstagscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1Tag](#schemagoogleclouddatacatalogv1beta1tag)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.list

<a id="opIddatacatalog.projects.locations.taxonomies.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/taxonomies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/taxonomies`

Lists all taxonomies in a project in a particular location that the caller has permission to view.

<h3 id="datacatalogprojectslocationstaxonomieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the project to list the taxonomies of.|
|filter|query|string|false|Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex.|
|pageSize|query|integer|false|The maximum number of items to return. Must be a value between 1 and 1000. If not set, defaults to 50.|
|pageToken|query|string|false|The next_page_token value returned from a previous list request, if any. If not set, defaults to an empty string.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "nextPageToken": "string",
  "taxonomies": [
    {
      "activatedPolicyTypes": [
        "POLICY_TYPE_UNSPECIFIED"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string",
      "policyTagCount": 0,
      "service": {
        "identity": "string",
        "name": "MANAGING_SYSTEM_UNSPECIFIED"
      },
      "taxonomyTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      }
    }
  ]
}
```

<h3 id="datacatalogprojectslocationstaxonomieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse](#schemagoogleclouddatacatalogv1beta1listtaxonomiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.create

<a id="opIddatacatalog.projects.locations.taxonomies.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/taxonomies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "activatedPolicyTypes": [
      "POLICY_TYPE_UNSPECIFIED"
    ],
    "description": "string",
    "displayName": "string"
  }'
```

`POST /v1beta1/{parent}/taxonomies`

Creates a taxonomy in the specified project.

> Body parameter

```json
{
  "activatedPolicyTypes": [
    "POLICY_TYPE_UNSPECIFIED"
  ],
  "description": "string",
  "displayName": "string"
}
```

<h3 id="datacatalogprojectslocationstaxonomiescreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the project that the taxonomy will belong to.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1Taxonomy](#schemagoogleclouddatacatalogv1beta1taxonomy)|false|none|
|» activatedPolicyTypes|body|[string]|false|Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.|
|» description|body|string|false|Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description.|
|» displayName|body|string|false|Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» activatedPolicyTypes|POLICY_TYPE_UNSPECIFIED|
|» activatedPolicyTypes|FINE_GRAINED_ACCESS_CONTROL|

> Example responses

> 200 Response

```json
{
  "activatedPolicyTypes": [
    "POLICY_TYPE_UNSPECIFIED"
  ],
  "description": "string",
  "displayName": "string",
  "name": "string",
  "policyTagCount": 0,
  "service": {
    "identity": "string",
    "name": "MANAGING_SYSTEM_UNSPECIFIED"
  },
  "taxonomyTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  }
}
```

<h3 id="datacatalogprojectslocationstaxonomiescreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1Taxonomy](#schemagoogleclouddatacatalogv1beta1taxonomy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.export

<a id="opIddatacatalog.projects.locations.taxonomies.export"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/taxonomies:export \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/taxonomies:export`

Exports all taxonomies and their policy tags in a project. This method generates SerializedTaxonomy protos with nested policy tags that can be used as an input for future ImportTaxonomies calls.

<h3 id="datacatalogprojectslocationstaxonomiesexport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of the project that taxonomies to be exported will share.|
|serializedTaxonomies|query|boolean|false|Export taxonomies as serialized taxonomies.|
|taxonomies|query|[string]|false|Required. Resource names of the taxonomies to be exported.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "taxonomies": [
    {
      "activatedPolicyTypes": [
        "POLICY_TYPE_UNSPECIFIED"
      ],
      "description": "string",
      "displayName": "string",
      "policyTags": [
        {
          "childPolicyTags": [
            {}
          ],
          "description": "string",
          "displayName": "string",
          "policyTag": "string"
        }
      ]
    }
  ]
}
```

<h3 id="datacatalogprojectslocationstaxonomiesexport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse](#schemagoogleclouddatacatalogv1beta1exporttaxonomiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.import

<a id="opIddatacatalog.projects.locations.taxonomies.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/taxonomies:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inlineSource": {
      "taxonomies": [
        {
          "activatedPolicyTypes": [
            "POLICY_TYPE_UNSPECIFIED"
          ],
          "description": "string",
          "displayName": "string",
          "policyTags": [
            {
              "childPolicyTags": [
                {}
              ],
              "description": "string",
              "displayName": "string",
              "policyTag": "string"
            }
          ]
        }
      ]
    }
  }'
```

`POST /v1beta1/{parent}/taxonomies:import`

Imports all taxonomies and their policy tags to a project as new taxonomies. This method provides a bulk taxonomy / policy tag creation using nested proto structure.

> Body parameter

```json
{
  "inlineSource": {
    "taxonomies": [
      {
        "activatedPolicyTypes": [
          "POLICY_TYPE_UNSPECIFIED"
        ],
        "description": "string",
        "displayName": "string",
        "policyTags": [
          {
            "childPolicyTags": [
              {}
            ],
            "description": "string",
            "displayName": "string",
            "policyTag": "string"
          }
        ]
      }
    ]
  }
}
```

<h3 id="datacatalogprojectslocationstaxonomiesimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Resource name of project that the imported taxonomies will belong to.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest](#schemagoogleclouddatacatalogv1beta1importtaxonomiesrequest)|false|none|
|» inlineSource|body|[GoogleCloudDatacatalogV1beta1InlineSource](#schemagoogleclouddatacatalogv1beta1inlinesource)|false|Inline source used for taxonomies to be imported.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "taxonomies": [
    {
      "activatedPolicyTypes": [
        "POLICY_TYPE_UNSPECIFIED"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string",
      "policyTagCount": 0,
      "service": {
        "identity": "string",
        "name": "MANAGING_SYSTEM_UNSPECIFIED"
      },
      "taxonomyTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      }
    }
  ]
}
```

<h3 id="datacatalogprojectslocationstaxonomiesimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse](#schemagoogleclouddatacatalogv1beta1importtaxonomiesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.policyTags.getIamPolicy

<a id="opIddatacatalog.projects.locations.taxonomies.policyTags.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "options": {
      "requestedPolicyVersion": 0
    }
  }'
```

`POST /v1beta1/{resource}:getIamPolicy`

Gets the IAM policy for a taxonomy or a policy tag.

> Body parameter

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[GetIamPolicyRequest](#schemagetiampolicyrequest)|false|none|
|» options|body|[GetPolicyOptions](#schemagetpolicyoptions)|false|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.policyTags.setIamPolicy

<a id="opIddatacatalog.projects.locations.taxonomies.policyTags.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "bindings": [
        {
          "condition": {
            "description": "string",
            "expression": "string",
            "location": "string",
            "title": "string"
          },
          "members": [
            "string"
          ],
          "role": "string"
        }
      ],
      "etag": "string",
      "version": 0
    }
  }'
```

`POST /v1beta1/{resource}:setIamPolicy`

Sets the IAM policy for a taxonomy or a policy tag.

> Body parameter

```json
{
  "policy": {
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SetIamPolicyRequest](#schemasetiampolicyrequest)|false|none|
|» policy|body|[Policy](#schemapolicy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Policy](#schemapolicy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## datacatalog.projects.locations.taxonomies.policyTags.testIamPermissions

<a id="opIddatacatalog.projects.locations.taxonomies.policyTags.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v1beta1/{resource}:testIamPermissions`

Returns the permissions that a caller has on the specified taxonomy or policy tag.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[TestIamPermissionsRequest](#schematestiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="datacatalogprojectslocationstaxonomiespolicytagstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[TestIamPermissionsResponse](#schematestiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_Binding">Binding</h2>
<!-- backwards compatibility -->
<a id="schemabinding"></a>
<a id="schema_Binding"></a>
<a id="tocSbinding"></a>
<a id="tocsbinding"></a>

```json
{
  "condition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "members": [
    "string"
  ],
  "role": "string"
}
```

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[Expr](#schemaexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_Expr">Expr</h2>
<!-- backwards compatibility -->
<a id="schemaexpr"></a>
<a id="schema_Expr"></a>
<a id="tocSexpr"></a>
<a id="tocsexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|

<h2 id="tocS_GetIamPolicyRequest">GetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagetiampolicyrequest"></a>
<a id="schema_GetIamPolicyRequest"></a>
<a id="tocSgetiampolicyrequest"></a>
<a id="tocsgetiampolicyrequest"></a>

```json
{
  "options": {
    "requestedPolicyVersion": 0
  }
}
```

Request message for `GetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|options|[GetPolicyOptions](#schemagetpolicyoptions)|false|none|OPTIONAL: A `GetPolicyOptions` object for specifying options to `GetIamPolicy`.|

<h2 id="tocS_GetPolicyOptions">GetPolicyOptions</h2>
<!-- backwards compatibility -->
<a id="schemagetpolicyoptions"></a>
<a id="schema_GetPolicyOptions"></a>
<a id="tocSgetpolicyoptions"></a>
<a id="tocsgetpolicyoptions"></a>

```json
{
  "requestedPolicyVersion": 0
}
```

Encapsulates settings provided to GetIamPolicy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requestedPolicyVersion|integer(int32)|false|none|Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_GoogleCloudDatacatalogV1BigQueryConnectionSpec">GoogleCloudDatacatalogV1BigQueryConnectionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1bigqueryconnectionspec"></a>
<a id="schema_GoogleCloudDatacatalogV1BigQueryConnectionSpec"></a>
<a id="tocSgoogleclouddatacatalogv1bigqueryconnectionspec"></a>
<a id="tocsgoogleclouddatacatalogv1bigqueryconnectionspec"></a>

```json
{
  "cloudSql": {
    "database": "string",
    "instanceId": "string",
    "type": "DATABASE_TYPE_UNSPECIFIED"
  },
  "connectionType": "CONNECTION_TYPE_UNSPECIFIED",
  "hasCredential": true
}
```

Specification for the BigQuery connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudSql|[GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec](#schemagoogleclouddatacatalogv1cloudsqlbigqueryconnectionspec)|false|none|Specification for the BigQuery connection to a Cloud SQL instance.|
|connectionType|string|false|none|The type of the BigQuery connection.|
|hasCredential|boolean|false|none|True if there are credentials attached to the BigQuery connection; false otherwise.|

#### Enumerated Values

|Property|Value|
|---|---|
|connectionType|CONNECTION_TYPE_UNSPECIFIED|
|connectionType|CLOUD_SQL|

<h2 id="tocS_GoogleCloudDatacatalogV1BigQueryDateShardedSpec">GoogleCloudDatacatalogV1BigQueryDateShardedSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1bigquerydateshardedspec"></a>
<a id="schema_GoogleCloudDatacatalogV1BigQueryDateShardedSpec"></a>
<a id="tocSgoogleclouddatacatalogv1bigquerydateshardedspec"></a>
<a id="tocsgoogleclouddatacatalogv1bigquerydateshardedspec"></a>

```json
{
  "dataset": "string",
  "latestShardResource": "string",
  "shardCount": "string",
  "tablePrefix": "string"
}
```

Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|read-only|Output only. The Data Catalog resource name of the dataset entry the current table belongs to. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`.|
|latestShardResource|string|false|read-only|Output only. BigQuery resource name of the latest shard.|
|shardCount|string(int64)|false|read-only|Output only. Total number of shards.|
|tablePrefix|string|false|read-only|Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`. For example, for the `MyTable20180101` shard, the `table_prefix` is `MyTable`.|

<h2 id="tocS_GoogleCloudDatacatalogV1BigQueryRoutineSpec">GoogleCloudDatacatalogV1BigQueryRoutineSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1bigqueryroutinespec"></a>
<a id="schema_GoogleCloudDatacatalogV1BigQueryRoutineSpec"></a>
<a id="tocSgoogleclouddatacatalogv1bigqueryroutinespec"></a>
<a id="tocsgoogleclouddatacatalogv1bigqueryroutinespec"></a>

```json
{
  "importedLibraries": [
    "string"
  ]
}
```

Fields specific for BigQuery routines.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|importedLibraries|[string]|false|none|Paths of the imported libraries.|

<h2 id="tocS_GoogleCloudDatacatalogV1BigQueryTableSpec">GoogleCloudDatacatalogV1BigQueryTableSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1bigquerytablespec"></a>
<a id="schema_GoogleCloudDatacatalogV1BigQueryTableSpec"></a>
<a id="tocSgoogleclouddatacatalogv1bigquerytablespec"></a>
<a id="tocsgoogleclouddatacatalogv1bigquerytablespec"></a>

```json
{
  "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
  "tableSpec": {
    "groupedEntry": "string"
  },
  "viewSpec": {
    "viewQuery": "string"
  }
}
```

Describes a BigQuery table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableSourceType|string|false|read-only|Output only. The table source type.|
|tableSpec|[GoogleCloudDatacatalogV1TableSpec](#schemagoogleclouddatacatalogv1tablespec)|false|none|Specification of a BigQuery table. Populated only if the `table_source_type` is `BIGQUERY_TABLE`.|
|viewSpec|[GoogleCloudDatacatalogV1ViewSpec](#schemagoogleclouddatacatalogv1viewspec)|false|none|Table view specification. Populated only if the `table_source_type` is `BIGQUERY_VIEW`.|

#### Enumerated Values

|Property|Value|
|---|---|
|tableSourceType|TABLE_SOURCE_TYPE_UNSPECIFIED|
|tableSourceType|BIGQUERY_VIEW|
|tableSourceType|BIGQUERY_TABLE|
|tableSourceType|BIGQUERY_MATERIALIZED_VIEW|

<h2 id="tocS_GoogleCloudDatacatalogV1BusinessContext">GoogleCloudDatacatalogV1BusinessContext</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1businesscontext"></a>
<a id="schema_GoogleCloudDatacatalogV1BusinessContext"></a>
<a id="tocSgoogleclouddatacatalogv1businesscontext"></a>
<a id="tocsgoogleclouddatacatalogv1businesscontext"></a>

```json
{
  "contacts": {
    "people": [
      {
        "designation": "string",
        "email": "string"
      }
    ]
  },
  "entryOverview": {
    "overview": "string"
  }
}
```

Business Context of the entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contacts|[GoogleCloudDatacatalogV1Contacts](#schemagoogleclouddatacatalogv1contacts)|false|none|Contact people for the entry.|
|entryOverview|[GoogleCloudDatacatalogV1EntryOverview](#schemagoogleclouddatacatalogv1entryoverview)|false|none|Entry overview fields for rich text descriptions of entries.|

<h2 id="tocS_GoogleCloudDatacatalogV1CloudBigtableInstanceSpec">GoogleCloudDatacatalogV1CloudBigtableInstanceSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1cloudbigtableinstancespec"></a>
<a id="schema_GoogleCloudDatacatalogV1CloudBigtableInstanceSpec"></a>
<a id="tocSgoogleclouddatacatalogv1cloudbigtableinstancespec"></a>
<a id="tocsgoogleclouddatacatalogv1cloudbigtableinstancespec"></a>

```json
{
  "cloudBigtableClusterSpecs": [
    {
      "displayName": "string",
      "linkedResource": "string",
      "location": "string",
      "type": "string"
    }
  ]
}
```

Specification that applies to Instance entries that are part of `CLOUD_BIGTABLE` system. (user_specified_type)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudBigtableClusterSpecs|[[GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec](#schemagoogleclouddatacatalogv1cloudbigtableinstancespeccloudbigtableclusterspec)]|false|none|The list of clusters for the Instance.|

<h2 id="tocS_GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec">GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1cloudbigtableinstancespeccloudbigtableclusterspec"></a>
<a id="schema_GoogleCloudDatacatalogV1CloudBigtableInstanceSpecCloudBigtableClusterSpec"></a>
<a id="tocSgoogleclouddatacatalogv1cloudbigtableinstancespeccloudbigtableclusterspec"></a>
<a id="tocsgoogleclouddatacatalogv1cloudbigtableinstancespeccloudbigtableclusterspec"></a>

```json
{
  "displayName": "string",
  "linkedResource": "string",
  "location": "string",
  "type": "string"
}
```

Spec that applies to clusters of an Instance of Cloud Bigtable.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Name of the cluster.|
|linkedResource|string|false|none|A link back to the parent resource, in this case Instance.|
|location|string|false|none|Location of the cluster, typically a Cloud zone.|
|type|string|false|none|Type of the resource. For a cluster this would be "CLUSTER".|

<h2 id="tocS_GoogleCloudDatacatalogV1CloudBigtableSystemSpec">GoogleCloudDatacatalogV1CloudBigtableSystemSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1cloudbigtablesystemspec"></a>
<a id="schema_GoogleCloudDatacatalogV1CloudBigtableSystemSpec"></a>
<a id="tocSgoogleclouddatacatalogv1cloudbigtablesystemspec"></a>
<a id="tocsgoogleclouddatacatalogv1cloudbigtablesystemspec"></a>

```json
{
  "instanceDisplayName": "string"
}
```

Specification that applies to all entries that are part of `CLOUD_BIGTABLE` system (user_specified_type)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|instanceDisplayName|string|false|none|Display name of the Instance. This is user specified and different from the resource name.|

<h2 id="tocS_GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec">GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1cloudsqlbigqueryconnectionspec"></a>
<a id="schema_GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec"></a>
<a id="tocSgoogleclouddatacatalogv1cloudsqlbigqueryconnectionspec"></a>
<a id="tocsgoogleclouddatacatalogv1cloudsqlbigqueryconnectionspec"></a>

```json
{
  "database": "string",
  "instanceId": "string",
  "type": "DATABASE_TYPE_UNSPECIFIED"
}
```

Specification for the BigQuery connection to a Cloud SQL instance.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|database|string|false|none|Database name.|
|instanceId|string|false|none|Cloud SQL instance ID in the format of `project:location:instance`.|
|type|string|false|none|Type of the Cloud SQL database.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|DATABASE_TYPE_UNSPECIFIED|
|type|POSTGRES|
|type|MYSQL|

<h2 id="tocS_GoogleCloudDatacatalogV1ColumnSchema">GoogleCloudDatacatalogV1ColumnSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1columnschema"></a>
<a id="schema_GoogleCloudDatacatalogV1ColumnSchema"></a>
<a id="tocSgoogleclouddatacatalogv1columnschema"></a>
<a id="tocsgoogleclouddatacatalogv1columnschema"></a>

```json
{
  "column": "string",
  "defaultValue": "string",
  "description": "string",
  "gcRule": "string",
  "highestIndexingType": "INDEXING_TYPE_UNSPECIFIED",
  "lookerColumnSpec": {
    "type": "LOOKER_COLUMN_TYPE_UNSPECIFIED"
  },
  "mode": "string",
  "ordinalPosition": 0,
  "subcolumns": [
    {
      "column": "string",
      "defaultValue": "string",
      "description": "string",
      "gcRule": "string",
      "highestIndexingType": "INDEXING_TYPE_UNSPECIFIED",
      "lookerColumnSpec": {
        "type": "LOOKER_COLUMN_TYPE_UNSPECIFIED"
      },
      "mode": "string",
      "ordinalPosition": 0,
      "subcolumns": [
        {}
      ],
      "type": "string"
    }
  ],
  "type": "string"
}
```

A column within a schema. Columns can be nested inside other columns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|false|none|Required. Name of the column. Must be a UTF-8 string without dots (.). The maximum size is 64 bytes.|
|defaultValue|string|false|none|Optional. Default value for the column.|
|description|string|false|none|Optional. Description of the column. Default value is an empty string. The description must be a UTF-8 string with the maximum size of 2000 bytes.|
|gcRule|string|false|none|Optional. Garbage collection policy for the column or column family. Applies to systems like Cloud Bigtable.|
|highestIndexingType|string|false|none|Optional. Most important inclusion of this column.|
|lookerColumnSpec|[GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec](#schemagoogleclouddatacatalogv1columnschemalookercolumnspec)|false|none|Looker specific column info of this column.|
|mode|string|false|none|Optional. A column's mode indicates whether values in this column are required, nullable, or repeated. Only `NULLABLE`, `REQUIRED`, and `REPEATED` values are supported. Default mode is `NULLABLE`.|
|ordinalPosition|integer(int32)|false|none|Optional. Ordinal position|
|subcolumns|[[GoogleCloudDatacatalogV1ColumnSchema](#schemagoogleclouddatacatalogv1columnschema)]|false|none|Optional. Schema of sub-columns. A column can have zero or more sub-columns.|
|type|string|false|none|Required. Type of the column. Must be a UTF-8 string with the maximum size of 128 bytes.|

#### Enumerated Values

|Property|Value|
|---|---|
|highestIndexingType|INDEXING_TYPE_UNSPECIFIED|
|highestIndexingType|INDEXING_TYPE_NONE|
|highestIndexingType|INDEXING_TYPE_NON_UNIQUE|
|highestIndexingType|INDEXING_TYPE_UNIQUE|
|highestIndexingType|INDEXING_TYPE_PRIMARY_KEY|

<h2 id="tocS_GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec">GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1columnschemalookercolumnspec"></a>
<a id="schema_GoogleCloudDatacatalogV1ColumnSchemaLookerColumnSpec"></a>
<a id="tocSgoogleclouddatacatalogv1columnschemalookercolumnspec"></a>
<a id="tocsgoogleclouddatacatalogv1columnschemalookercolumnspec"></a>

```json
{
  "type": "LOOKER_COLUMN_TYPE_UNSPECIFIED"
}
```

Column info specific to Looker System.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|Looker specific column type of this column.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LOOKER_COLUMN_TYPE_UNSPECIFIED|
|type|DIMENSION|
|type|DIMENSION_GROUP|
|type|FILTER|
|type|MEASURE|
|type|PARAMETER|

<h2 id="tocS_GoogleCloudDatacatalogV1CommonUsageStats">GoogleCloudDatacatalogV1CommonUsageStats</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1commonusagestats"></a>
<a id="schema_GoogleCloudDatacatalogV1CommonUsageStats"></a>
<a id="tocSgoogleclouddatacatalogv1commonusagestats"></a>
<a id="tocsgoogleclouddatacatalogv1commonusagestats"></a>

```json
{
  "viewCount": "string"
}
```

Common statistics on the entry's usage. They can be set on any system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|viewCount|string(int64)|false|none|View count in source system.|

<h2 id="tocS_GoogleCloudDatacatalogV1Contacts">GoogleCloudDatacatalogV1Contacts</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1contacts"></a>
<a id="schema_GoogleCloudDatacatalogV1Contacts"></a>
<a id="tocSgoogleclouddatacatalogv1contacts"></a>
<a id="tocsgoogleclouddatacatalogv1contacts"></a>

```json
{
  "people": [
    {
      "designation": "string",
      "email": "string"
    }
  ]
}
```

Contact people for the entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|people|[[GoogleCloudDatacatalogV1ContactsPerson](#schemagoogleclouddatacatalogv1contactsperson)]|false|none|The list of contact people for the entry.|

<h2 id="tocS_GoogleCloudDatacatalogV1ContactsPerson">GoogleCloudDatacatalogV1ContactsPerson</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1contactsperson"></a>
<a id="schema_GoogleCloudDatacatalogV1ContactsPerson"></a>
<a id="tocSgoogleclouddatacatalogv1contactsperson"></a>
<a id="tocsgoogleclouddatacatalogv1contactsperson"></a>

```json
{
  "designation": "string",
  "email": "string"
}
```

A contact person for the entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|designation|string|false|none|Designation of the person, for example, Data Steward.|
|email|string|false|none|Email of the person in the format of `john.doe@xyz`, ``, or `John Doe`.|

<h2 id="tocS_GoogleCloudDatacatalogV1DataSource">GoogleCloudDatacatalogV1DataSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1datasource"></a>
<a id="schema_GoogleCloudDatacatalogV1DataSource"></a>
<a id="tocSgoogleclouddatacatalogv1datasource"></a>
<a id="tocsgoogleclouddatacatalogv1datasource"></a>

```json
{
  "resource": "string",
  "service": "SERVICE_UNSPECIFIED",
  "sourceEntry": "string",
  "storageProperties": {
    "filePattern": [
      "string"
    ],
    "fileType": "string"
  }
}
```

Physical location of an entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|resource|string|false|none|Full name of a resource as defined by the service. For example: `//bigquery.googleapis.com/projects/{PROJECT_ID}/locations/{LOCATION}/datasets/{DATASET_ID}/tables/{TABLE_ID}`|
|service|string|false|none|Service that physically stores the data.|
|sourceEntry|string|false|read-only|Output only. Data Catalog entry name, if applicable.|
|storageProperties|[GoogleCloudDatacatalogV1StorageProperties](#schemagoogleclouddatacatalogv1storageproperties)|false|none|Detailed properties of the underlying storage.|

#### Enumerated Values

|Property|Value|
|---|---|
|service|SERVICE_UNSPECIFIED|
|service|CLOUD_STORAGE|
|service|BIGQUERY|

<h2 id="tocS_GoogleCloudDatacatalogV1DataSourceConnectionSpec">GoogleCloudDatacatalogV1DataSourceConnectionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1datasourceconnectionspec"></a>
<a id="schema_GoogleCloudDatacatalogV1DataSourceConnectionSpec"></a>
<a id="tocSgoogleclouddatacatalogv1datasourceconnectionspec"></a>
<a id="tocsgoogleclouddatacatalogv1datasourceconnectionspec"></a>

```json
{
  "bigqueryConnectionSpec": {
    "cloudSql": {
      "database": "string",
      "instanceId": "string",
      "type": "DATABASE_TYPE_UNSPECIFIED"
    },
    "connectionType": "CONNECTION_TYPE_UNSPECIFIED",
    "hasCredential": true
  }
}
```

Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryConnectionSpec|[GoogleCloudDatacatalogV1BigQueryConnectionSpec](#schemagoogleclouddatacatalogv1bigqueryconnectionspec)|false|none|Output only. Fields specific to BigQuery connections.|

<h2 id="tocS_GoogleCloudDatacatalogV1DatabaseTableSpec">GoogleCloudDatacatalogV1DatabaseTableSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1databasetablespec"></a>
<a id="schema_GoogleCloudDatacatalogV1DatabaseTableSpec"></a>
<a id="tocSgoogleclouddatacatalogv1databasetablespec"></a>
<a id="tocsgoogleclouddatacatalogv1databasetablespec"></a>

```json
{
  "databaseViewSpec": {
    "baseTable": "string",
    "sqlQuery": "string",
    "viewType": "VIEW_TYPE_UNSPECIFIED"
  },
  "dataplexTable": {
    "dataplexSpec": {
      "asset": "string",
      "compressionFormat": "string",
      "dataFormat": {
        "avro": {
          "text": "string"
        },
        "csv": {},
        "orc": {},
        "parquet": {},
        "protobuf": {
          "text": "string"
        },
        "thrift": {
          "text": "string"
        }
      },
      "projectId": "string"
    },
    "externalTables": [
      {
        "dataCatalogEntry": "string",
        "fullyQualifiedName": "string",
        "googleCloudResource": "string",
        "system": "INTEGRATED_SYSTEM_UNSPECIFIED"
      }
    ],
    "userManaged": true
  },
  "type": "TABLE_TYPE_UNSPECIFIED"
}
```

Specification that applies to a table resource. Valid only for entries with the `TABLE` type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseViewSpec|[GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec](#schemagoogleclouddatacatalogv1databasetablespecdatabaseviewspec)|false|none|Spec what aplies to tables that are actually views. Not set for "real" tables.|
|dataplexTable|[GoogleCloudDatacatalogV1DataplexTableSpec](#schemagoogleclouddatacatalogv1dataplextablespec)|false|none|Output only. Fields specific to a Dataplex table and present only in the Dataplex table entries.|
|type|string|false|none|Type of this table.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|TABLE_TYPE_UNSPECIFIED|
|type|NATIVE|
|type|EXTERNAL|

<h2 id="tocS_GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec">GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1databasetablespecdatabaseviewspec"></a>
<a id="schema_GoogleCloudDatacatalogV1DatabaseTableSpecDatabaseViewSpec"></a>
<a id="tocSgoogleclouddatacatalogv1databasetablespecdatabaseviewspec"></a>
<a id="tocsgoogleclouddatacatalogv1databasetablespecdatabaseviewspec"></a>

```json
{
  "baseTable": "string",
  "sqlQuery": "string",
  "viewType": "VIEW_TYPE_UNSPECIFIED"
}
```

Specification that applies to database view.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseTable|string|false|none|Name of a singular table this view reflects one to one.|
|sqlQuery|string|false|none|SQL query used to generate this view.|
|viewType|string|false|none|Type of this view.|

#### Enumerated Values

|Property|Value|
|---|---|
|viewType|VIEW_TYPE_UNSPECIFIED|
|viewType|STANDARD_VIEW|
|viewType|MATERIALIZED_VIEW|

<h2 id="tocS_GoogleCloudDatacatalogV1DataplexExternalTable">GoogleCloudDatacatalogV1DataplexExternalTable</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1dataplexexternaltable"></a>
<a id="schema_GoogleCloudDatacatalogV1DataplexExternalTable"></a>
<a id="tocSgoogleclouddatacatalogv1dataplexexternaltable"></a>
<a id="tocsgoogleclouddatacatalogv1dataplexexternaltable"></a>

```json
{
  "dataCatalogEntry": "string",
  "fullyQualifiedName": "string",
  "googleCloudResource": "string",
  "system": "INTEGRATED_SYSTEM_UNSPECIFIED"
}
```

External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataCatalogEntry|string|false|none|Name of the Data Catalog entry representing the external table.|
|fullyQualifiedName|string|false|none|Fully qualified name (FQN) of the external table.|
|googleCloudResource|string|false|none|Google Cloud resource name of the external table.|
|system|string|false|none|Service in which the external table is registered.|

#### Enumerated Values

|Property|Value|
|---|---|
|system|INTEGRATED_SYSTEM_UNSPECIFIED|
|system|BIGQUERY|
|system|CLOUD_PUBSUB|
|system|DATAPROC_METASTORE|
|system|DATAPLEX|
|system|CLOUD_SPANNER|
|system|CLOUD_BIGTABLE|
|system|CLOUD_SQL|
|system|LOOKER|

<h2 id="tocS_GoogleCloudDatacatalogV1DataplexFilesetSpec">GoogleCloudDatacatalogV1DataplexFilesetSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1dataplexfilesetspec"></a>
<a id="schema_GoogleCloudDatacatalogV1DataplexFilesetSpec"></a>
<a id="tocSgoogleclouddatacatalogv1dataplexfilesetspec"></a>
<a id="tocsgoogleclouddatacatalogv1dataplexfilesetspec"></a>

```json
{
  "dataplexSpec": {
    "asset": "string",
    "compressionFormat": "string",
    "dataFormat": {
      "avro": {
        "text": "string"
      },
      "csv": {},
      "orc": {},
      "parquet": {},
      "protobuf": {
        "text": "string"
      },
      "thrift": {
        "text": "string"
      }
    },
    "projectId": "string"
  }
}
```

Entry specyfication for a Dataplex fileset.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataplexSpec|[GoogleCloudDatacatalogV1DataplexSpec](#schemagoogleclouddatacatalogv1dataplexspec)|false|none|Common Dataplex fields.|

<h2 id="tocS_GoogleCloudDatacatalogV1DataplexSpec">GoogleCloudDatacatalogV1DataplexSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1dataplexspec"></a>
<a id="schema_GoogleCloudDatacatalogV1DataplexSpec"></a>
<a id="tocSgoogleclouddatacatalogv1dataplexspec"></a>
<a id="tocsgoogleclouddatacatalogv1dataplexspec"></a>

```json
{
  "asset": "string",
  "compressionFormat": "string",
  "dataFormat": {
    "avro": {
      "text": "string"
    },
    "csv": {},
    "orc": {},
    "parquet": {},
    "protobuf": {
      "text": "string"
    },
    "thrift": {
      "text": "string"
    }
  },
  "projectId": "string"
}
```

Common Dataplex fields.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|string|false|none|Fully qualified resource name of an asset in Dataplex, to which the underlying data source (Cloud Storage bucket or BigQuery dataset) of the entity is attached.|
|compressionFormat|string|false|none|Compression format of the data, e.g., zip, gzip etc.|
|dataFormat|[GoogleCloudDatacatalogV1PhysicalSchema](#schemagoogleclouddatacatalogv1physicalschema)|false|none|Format of the data.|
|projectId|string|false|none|Project ID of the underlying Cloud Storage or BigQuery data. Note that this may not be the same project as the correspondingly Dataplex lake / zone / asset.|

<h2 id="tocS_GoogleCloudDatacatalogV1DataplexTableSpec">GoogleCloudDatacatalogV1DataplexTableSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1dataplextablespec"></a>
<a id="schema_GoogleCloudDatacatalogV1DataplexTableSpec"></a>
<a id="tocSgoogleclouddatacatalogv1dataplextablespec"></a>
<a id="tocsgoogleclouddatacatalogv1dataplextablespec"></a>

```json
{
  "dataplexSpec": {
    "asset": "string",
    "compressionFormat": "string",
    "dataFormat": {
      "avro": {
        "text": "string"
      },
      "csv": {},
      "orc": {},
      "parquet": {},
      "protobuf": {
        "text": "string"
      },
      "thrift": {
        "text": "string"
      }
    },
    "projectId": "string"
  },
  "externalTables": [
    {
      "dataCatalogEntry": "string",
      "fullyQualifiedName": "string",
      "googleCloudResource": "string",
      "system": "INTEGRATED_SYSTEM_UNSPECIFIED"
    }
  ],
  "userManaged": true
}
```

Entry specification for a Dataplex table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataplexSpec|[GoogleCloudDatacatalogV1DataplexSpec](#schemagoogleclouddatacatalogv1dataplexspec)|false|none|Common Dataplex fields.|
|externalTables|[[GoogleCloudDatacatalogV1DataplexExternalTable](#schemagoogleclouddatacatalogv1dataplexexternaltable)]|false|none|List of external tables registered by Dataplex in other systems based on the same underlying data. External tables allow to query this data in those systems.|
|userManaged|boolean|false|none|Indicates if the table schema is managed by the user or not.|

<h2 id="tocS_GoogleCloudDatacatalogV1DumpItem">GoogleCloudDatacatalogV1DumpItem</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1dumpitem"></a>
<a id="schema_GoogleCloudDatacatalogV1DumpItem"></a>
<a id="tocSgoogleclouddatacatalogv1dumpitem"></a>
<a id="tocsgoogleclouddatacatalogv1dumpitem"></a>

```json
{
  "taggedEntry": {
    "absentTags": [
      {
        "column": "string",
        "fields": {
          "property1": {
            "boolValue": true,
            "displayName": "string",
            "doubleValue": 0,
            "enumValue": {
              "displayName": "string"
            },
            "order": 0,
            "richtextValue": "string",
            "stringValue": "string",
            "timestampValue": "string"
          },
          "property2": {
            "boolValue": true,
            "displayName": "string",
            "doubleValue": 0,
            "enumValue": {
              "displayName": "string"
            },
            "order": 0,
            "richtextValue": "string",
            "stringValue": "string",
            "timestampValue": "string"
          }
        },
        "name": "string",
        "template": "string",
        "templateDisplayName": "string"
      }
    ],
    "presentTags": [
      {
        "column": "string",
        "fields": {
          "property1": {
            "boolValue": true,
            "displayName": "string",
            "doubleValue": 0,
            "enumValue": {
              "displayName": "string"
            },
            "order": 0,
            "richtextValue": "string",
            "stringValue": "string",
            "timestampValue": "string"
          },
          "property2": {
            "boolValue": true,
            "displayName": "string",
            "doubleValue": 0,
            "enumValue": {
              "displayName": "string"
            },
            "order": 0,
            "richtextValue": "string",
            "stringValue": "string",
            "timestampValue": "string"
          }
        },
        "name": "string",
        "template": "string",
        "templateDisplayName": "string"
      }
    ],
    "v1Entry": {
      "bigqueryDateShardedSpec": {
        "dataset": "string",
        "latestShardResource": "string",
        "shardCount": "string",
        "tablePrefix": "string"
      },
      "bigqueryTableSpec": {
        "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
        "tableSpec": {
          "groupedEntry": "string"
        },
        "viewSpec": {
          "viewQuery": "string"
        }
      },
      "businessContext": {
        "contacts": {
          "people": [
            {
              "designation": "string",
              "email": "string"
            }
          ]
        },
        "entryOverview": {
          "overview": "string"
        }
      },
      "cloudBigtableSystemSpec": {
        "instanceDisplayName": "string"
      },
      "dataSource": {
        "resource": "string",
        "service": "SERVICE_UNSPECIFIED",
        "sourceEntry": "string",
        "storageProperties": {
          "filePattern": [
            "string"
          ],
          "fileType": "string"
        }
      },
      "dataSourceConnectionSpec": {
        "bigqueryConnectionSpec": {
          "cloudSql": {
            "database": "string",
            "instanceId": "string",
            "type": "DATABASE_TYPE_UNSPECIFIED"
          },
          "connectionType": "CONNECTION_TYPE_UNSPECIFIED",
          "hasCredential": true
        }
      },
      "databaseTableSpec": {
        "databaseViewSpec": {
          "baseTable": "string",
          "sqlQuery": "string",
          "viewType": "VIEW_TYPE_UNSPECIFIED"
        },
        "dataplexTable": {
          "dataplexSpec": {
            "asset": "string",
            "compressionFormat": "string",
            "dataFormat": {
              "avro": {
                "text": "string"
              },
              "csv": {},
              "orc": {},
              "parquet": {},
              "protobuf": {
                "text": "string"
              },
              "thrift": {
                "text": "string"
              }
            },
            "projectId": "string"
          },
          "externalTables": [
            {
              "dataCatalogEntry": "string",
              "fullyQualifiedName": "string",
              "googleCloudResource": "string",
              "system": "INTEGRATED_SYSTEM_UNSPECIFIED"
            }
          ],
          "userManaged": true
        },
        "type": "TABLE_TYPE_UNSPECIFIED"
      },
      "description": "string",
      "displayName": "string",
      "filesetSpec": {
        "dataplexFileset": {
          "dataplexSpec": {
            "asset": "string",
            "compressionFormat": "string",
            "dataFormat": {
              "avro": {
                "text": "string"
              },
              "csv": {},
              "orc": {},
              "parquet": {},
              "protobuf": {
                "text": "string"
              },
              "thrift": {
                "text": "string"
              }
            },
            "projectId": "string"
          }
        }
      },
      "fullyQualifiedName": "string",
      "gcsFilesetSpec": {
        "filePatterns": [
          "string"
        ],
        "sampleGcsFileSpecs": [
          {
            "filePath": "string",
            "gcsTimestamps": {
              "createTime": "string",
              "expireTime": "string",
              "updateTime": "string"
            },
            "sizeBytes": "string"
          }
        ]
      },
      "integratedSystem": "INTEGRATED_SYSTEM_UNSPECIFIED",
      "labels": {
        "property1": "string",
        "property2": "string"
      },
      "linkedResource": "string",
      "lookerSystemSpec": {
        "parentInstanceDisplayName": "string",
        "parentInstanceId": "string",
        "parentModelDisplayName": "string",
        "parentModelId": "string",
        "parentViewDisplayName": "string",
        "parentViewId": "string"
      },
      "name": "string",
      "personalDetails": {
        "starTime": "string",
        "starred": true
      },
      "routineSpec": {
        "bigqueryRoutineSpec": {
          "importedLibraries": [
            "string"
          ]
        },
        "definitionBody": "string",
        "language": "string",
        "returnType": "string",
        "routineArguments": [
          {
            "mode": "MODE_UNSPECIFIED",
            "name": "string",
            "type": "string"
          }
        ],
        "routineType": "ROUTINE_TYPE_UNSPECIFIED"
      },
      "schema": {
        "columns": [
          {
            "column": "string",
            "defaultValue": "string",
            "description": "string",
            "gcRule": "string",
            "highestIndexingType": "INDEXING_TYPE_UNSPECIFIED",
            "lookerColumnSpec": {
              "type": "LOOKER_COLUMN_TYPE_UNSPECIFIED"
            },
            "mode": "string",
            "ordinalPosition": 0,
            "subcolumns": [
              {}
            ],
            "type": "string"
          }
        ]
      },
      "serviceSpec": {
        "cloudBigtableInstanceSpec": {
          "cloudBigtableClusterSpecs": [
            {
              "displayName": "string",
              "linkedResource": "string",
              "location": "string",
              "type": "string"
            }
          ]
        }
      },
      "sourceSystemTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      },
      "sqlDatabaseSystemSpec": {
        "databaseVersion": "string",
        "instanceHost": "string",
        "sqlEngine": "string"
      },
      "type": "ENTRY_TYPE_UNSPECIFIED",
      "usageSignal": {
        "commonUsageWithinTimeRange": {
          "property1": {
            "viewCount": "string"
          },
          "property2": {
            "viewCount": "string"
          }
        },
        "favoriteCount": "string",
        "updateTime": "string",
        "usageWithinTimeRange": {
          "property1": {
            "totalCancellations": 0,
            "totalCompletions": 0,
            "totalExecutionTimeForCompletionsMillis": 0,
            "totalFailures": 0
          },
          "property2": {
            "totalCancellations": 0,
            "totalCompletions": 0,
            "totalExecutionTimeForCompletionsMillis": 0,
            "totalFailures": 0
          }
        }
      },
      "userSpecifiedSystem": "string",
      "userSpecifiedType": "string"
    }
  }
}
```

Wrapper for any item that can be contained in the dump.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taggedEntry|[GoogleCloudDatacatalogV1TaggedEntry](#schemagoogleclouddatacatalogv1taggedentry)|false|none|Entry and its tags.|

<h2 id="tocS_GoogleCloudDatacatalogV1Entry">GoogleCloudDatacatalogV1Entry</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1entry"></a>
<a id="schema_GoogleCloudDatacatalogV1Entry"></a>
<a id="tocSgoogleclouddatacatalogv1entry"></a>
<a id="tocsgoogleclouddatacatalogv1entry"></a>

```json
{
  "bigqueryDateShardedSpec": {
    "dataset": "string",
    "latestShardResource": "string",
    "shardCount": "string",
    "tablePrefix": "string"
  },
  "bigqueryTableSpec": {
    "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
    "tableSpec": {
      "groupedEntry": "string"
    },
    "viewSpec": {
      "viewQuery": "string"
    }
  },
  "businessContext": {
    "contacts": {
      "people": [
        {
          "designation": "string",
          "email": "string"
        }
      ]
    },
    "entryOverview": {
      "overview": "string"
    }
  },
  "cloudBigtableSystemSpec": {
    "instanceDisplayName": "string"
  },
  "dataSource": {
    "resource": "string",
    "service": "SERVICE_UNSPECIFIED",
    "sourceEntry": "string",
    "storageProperties": {
      "filePattern": [
        "string"
      ],
      "fileType": "string"
    }
  },
  "dataSourceConnectionSpec": {
    "bigqueryConnectionSpec": {
      "cloudSql": {
        "database": "string",
        "instanceId": "string",
        "type": "DATABASE_TYPE_UNSPECIFIED"
      },
      "connectionType": "CONNECTION_TYPE_UNSPECIFIED",
      "hasCredential": true
    }
  },
  "databaseTableSpec": {
    "databaseViewSpec": {
      "baseTable": "string",
      "sqlQuery": "string",
      "viewType": "VIEW_TYPE_UNSPECIFIED"
    },
    "dataplexTable": {
      "dataplexSpec": {
        "asset": "string",
        "compressionFormat": "string",
        "dataFormat": {
          "avro": {
            "text": "string"
          },
          "csv": {},
          "orc": {},
          "parquet": {},
          "protobuf": {
            "text": "string"
          },
          "thrift": {
            "text": "string"
          }
        },
        "projectId": "string"
      },
      "externalTables": [
        {
          "dataCatalogEntry": "string",
          "fullyQualifiedName": "string",
          "googleCloudResource": "string",
          "system": "INTEGRATED_SYSTEM_UNSPECIFIED"
        }
      ],
      "userManaged": true
    },
    "type": "TABLE_TYPE_UNSPECIFIED"
  },
  "description": "string",
  "displayName": "string",
  "filesetSpec": {
    "dataplexFileset": {
      "dataplexSpec": {
        "asset": "string",
        "compressionFormat": "string",
        "dataFormat": {
          "avro": {
            "text": "string"
          },
          "csv": {},
          "orc": {},
          "parquet": {},
          "protobuf": {
            "text": "string"
          },
          "thrift": {
            "text": "string"
          }
        },
        "projectId": "string"
      }
    }
  },
  "fullyQualifiedName": "string",
  "gcsFilesetSpec": {
    "filePatterns": [
      "string"
    ],
    "sampleGcsFileSpecs": [
      {
        "filePath": "string",
        "gcsTimestamps": {
          "createTime": "string",
          "expireTime": "string",
          "updateTime": "string"
        },
        "sizeBytes": "string"
      }
    ]
  },
  "integratedSystem": "INTEGRATED_SYSTEM_UNSPECIFIED",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "linkedResource": "string",
  "lookerSystemSpec": {
    "parentInstanceDisplayName": "string",
    "parentInstanceId": "string",
    "parentModelDisplayName": "string",
    "parentModelId": "string",
    "parentViewDisplayName": "string",
    "parentViewId": "string"
  },
  "name": "string",
  "personalDetails": {
    "starTime": "string",
    "starred": true
  },
  "routineSpec": {
    "bigqueryRoutineSpec": {
      "importedLibraries": [
        "string"
      ]
    },
    "definitionBody": "string",
    "language": "string",
    "returnType": "string",
    "routineArguments": [
      {
        "mode": "MODE_UNSPECIFIED",
        "name": "string",
        "type": "string"
      }
    ],
    "routineType": "ROUTINE_TYPE_UNSPECIFIED"
  },
  "schema": {
    "columns": [
      {
        "column": "string",
        "defaultValue": "string",
        "description": "string",
        "gcRule": "string",
        "highestIndexingType": "INDEXING_TYPE_UNSPECIFIED",
        "lookerColumnSpec": {
          "type": "LOOKER_COLUMN_TYPE_UNSPECIFIED"
        },
        "mode": "string",
        "ordinalPosition": 0,
        "subcolumns": [
          {}
        ],
        "type": "string"
      }
    ]
  },
  "serviceSpec": {
    "cloudBigtableInstanceSpec": {
      "cloudBigtableClusterSpecs": [
        {
          "displayName": "string",
          "linkedResource": "string",
          "location": "string",
          "type": "string"
        }
      ]
    }
  },
  "sourceSystemTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  },
  "sqlDatabaseSystemSpec": {
    "databaseVersion": "string",
    "instanceHost": "string",
    "sqlEngine": "string"
  },
  "type": "ENTRY_TYPE_UNSPECIFIED",
  "usageSignal": {
    "commonUsageWithinTimeRange": {
      "property1": {
        "viewCount": "string"
      },
      "property2": {
        "viewCount": "string"
      }
    },
    "favoriteCount": "string",
    "updateTime": "string",
    "usageWithinTimeRange": {
      "property1": {
        "totalCancellations": 0,
        "totalCompletions": 0,
        "totalExecutionTimeForCompletionsMillis": 0,
        "totalFailures": 0
      },
      "property2": {
        "totalCancellations": 0,
        "totalCompletions": 0,
        "totalExecutionTimeForCompletionsMillis": 0,
        "totalFailures": 0
      }
    }
  },
  "userSpecifiedSystem": "string",
  "userSpecifiedType": "string"
}
```

Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDateShardedSpec|[GoogleCloudDatacatalogV1BigQueryDateShardedSpec](#schemagoogleclouddatacatalogv1bigquerydateshardedspec)|false|none|Output only. Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).|
|bigqueryTableSpec|[GoogleCloudDatacatalogV1BigQueryTableSpec](#schemagoogleclouddatacatalogv1bigquerytablespec)|false|none|Output only. Specification that applies to a BigQuery table. Valid only for entries with the `TABLE` type.|
|businessContext|[GoogleCloudDatacatalogV1BusinessContext](#schemagoogleclouddatacatalogv1businesscontext)|false|none|Business Context of the entry. Not supported for BigQuery datasets|
|cloudBigtableSystemSpec|[GoogleCloudDatacatalogV1CloudBigtableSystemSpec](#schemagoogleclouddatacatalogv1cloudbigtablesystemspec)|false|none|Specification that applies to Cloud Bigtable system. Only settable when `integrated_system` is equal to `CLOUD_BIGTABLE`|
|dataSource|[GoogleCloudDatacatalogV1DataSource](#schemagoogleclouddatacatalogv1datasource)|false|none|Output only. Physical location of the entry.|
|dataSourceConnectionSpec|[GoogleCloudDatacatalogV1DataSourceConnectionSpec](#schemagoogleclouddatacatalogv1datasourceconnectionspec)|false|none|Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type.|
|databaseTableSpec|[GoogleCloudDatacatalogV1DatabaseTableSpec](#schemagoogleclouddatacatalogv1databasetablespec)|false|none|Specification that applies to a table resource. Valid only for entries with the `TABLE` or `EXPLORE` type.|
|description|string|false|none|Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string.|
|displayName|string|false|none|Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string.|
|filesetSpec|[GoogleCloudDatacatalogV1FilesetSpec](#schemagoogleclouddatacatalogv1filesetspec)|false|none|Specification that applies to a fileset resource. Valid only for entries with the `FILESET` type.|
|fullyQualifiedName|string|false|none|[Fully Qualified Name (FQN)](https://cloud.google.com//data-catalog/docs/fully-qualified-names) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation, and read-only later. Can be used for search and lookup of the entries. |
|gcsFilesetSpec|[GoogleCloudDatacatalogV1GcsFilesetSpec](#schemagoogleclouddatacatalogv1gcsfilesetspec)|false|none|Specification that applies to a Cloud Storage fileset. Valid only for entries with the `FILESET` type.|
|integratedSystem|string|false|read-only|Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore.|
|labels|object|false|none|Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system.|
|linkedResource|string|false|none|The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8.|
|lookerSystemSpec|[GoogleCloudDatacatalogV1LookerSystemSpec](#schemagoogleclouddatacatalogv1lookersystemspec)|false|none|Specification that applies to Looker sysstem. Only settable when `user_specified_system` is equal to `LOOKER`|
|name|string|false|read-only|Output only. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name.|
|personalDetails|[GoogleCloudDatacatalogV1PersonalDetails](#schemagoogleclouddatacatalogv1personaldetails)|false|none|Output only. Additional information related to the entry. Private to the current user.|
|routineSpec|[GoogleCloudDatacatalogV1RoutineSpec](#schemagoogleclouddatacatalogv1routinespec)|false|none|Specification that applies to a user-defined function or procedure. Valid only for entries with the `ROUTINE` type.|
|schema|[GoogleCloudDatacatalogV1Schema](#schemagoogleclouddatacatalogv1schema)|false|none|Schema of the entry. An entry might not have any schema attached to it.|
|serviceSpec|[GoogleCloudDatacatalogV1ServiceSpec](#schemagoogleclouddatacatalogv1servicespec)|false|none|Specification that applies to a Service resource.|
|sourceSystemTimestamps|[GoogleCloudDatacatalogV1SystemTimestamps](#schemagoogleclouddatacatalogv1systemtimestamps)|false|none|Timestamps from the underlying resource, not from the Data Catalog entry. Output only when the entry has a system listed in the `IntegratedSystem` enum. For entries with `user_specified_system`, this field is optional and defaults to an empty timestamp.|
|sqlDatabaseSystemSpec|[GoogleCloudDatacatalogV1SqlDatabaseSystemSpec](#schemagoogleclouddatacatalogv1sqldatabasesystemspec)|false|none|Specification that applies to a relational database system. Only settable when `user_specified_system` is equal to `SQL_DATABASE`|
|type|string|false|none|The type of the entry. Only used for entries with types listed in the `EntryType` enum. Currently, only `FILESET` enum value is allowed. All other entries created in Data Catalog must use the `user_specified_type`.|
|usageSignal|[GoogleCloudDatacatalogV1UsageSignal](#schemagoogleclouddatacatalogv1usagesignal)|false|none|Resource usage statistics.|
|userSpecifiedSystem|string|false|none|Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.|
|userSpecifiedType|string|false|none|Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.|

#### Enumerated Values

|Property|Value|
|---|---|
|integratedSystem|INTEGRATED_SYSTEM_UNSPECIFIED|
|integratedSystem|BIGQUERY|
|integratedSystem|CLOUD_PUBSUB|
|integratedSystem|DATAPROC_METASTORE|
|integratedSystem|DATAPLEX|
|integratedSystem|CLOUD_SPANNER|
|integratedSystem|CLOUD_BIGTABLE|
|integratedSystem|CLOUD_SQL|
|integratedSystem|LOOKER|
|type|ENTRY_TYPE_UNSPECIFIED|
|type|TABLE|
|type|MODEL|
|type|DATA_STREAM|
|type|FILESET|
|type|CLUSTER|
|type|DATABASE|
|type|DATA_SOURCE_CONNECTION|
|type|ROUTINE|
|type|LAKE|
|type|ZONE|
|type|SERVICE|
|type|DATABASE_SCHEMA|
|type|DASHBOARD|
|type|EXPLORE|
|type|LOOK|

<h2 id="tocS_GoogleCloudDatacatalogV1EntryOverview">GoogleCloudDatacatalogV1EntryOverview</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1entryoverview"></a>
<a id="schema_GoogleCloudDatacatalogV1EntryOverview"></a>
<a id="tocSgoogleclouddatacatalogv1entryoverview"></a>
<a id="tocsgoogleclouddatacatalogv1entryoverview"></a>

```json
{
  "overview": "string"
}
```

Entry overview fields for rich text descriptions of entries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|overview|string|false|none|Entry overview with support for rich text. The overview must only contain Unicode characters, and should be formatted using HTML. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB.|

<h2 id="tocS_GoogleCloudDatacatalogV1FilesetSpec">GoogleCloudDatacatalogV1FilesetSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1filesetspec"></a>
<a id="schema_GoogleCloudDatacatalogV1FilesetSpec"></a>
<a id="tocSgoogleclouddatacatalogv1filesetspec"></a>
<a id="tocsgoogleclouddatacatalogv1filesetspec"></a>

```json
{
  "dataplexFileset": {
    "dataplexSpec": {
      "asset": "string",
      "compressionFormat": "string",
      "dataFormat": {
        "avro": {
          "text": "string"
        },
        "csv": {},
        "orc": {},
        "parquet": {},
        "protobuf": {
          "text": "string"
        },
        "thrift": {
          "text": "string"
        }
      },
      "projectId": "string"
    }
  }
}
```

Specification that applies to a fileset. Valid only for entries with the 'FILESET' type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataplexFileset|[GoogleCloudDatacatalogV1DataplexFilesetSpec](#schemagoogleclouddatacatalogv1dataplexfilesetspec)|false|none|Fields specific to a Dataplex fileset and present only in the Dataplex fileset entries.|

<h2 id="tocS_GoogleCloudDatacatalogV1GcsFileSpec">GoogleCloudDatacatalogV1GcsFileSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1gcsfilespec"></a>
<a id="schema_GoogleCloudDatacatalogV1GcsFileSpec"></a>
<a id="tocSgoogleclouddatacatalogv1gcsfilespec"></a>
<a id="tocsgoogleclouddatacatalogv1gcsfilespec"></a>

```json
{
  "filePath": "string",
  "gcsTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  },
  "sizeBytes": "string"
}
```

Specification of a single file in Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|string|false|none|Required. Full file path. Example: `gs://bucket_name/a/b.txt`.|
|gcsTimestamps|[GoogleCloudDatacatalogV1SystemTimestamps](#schemagoogleclouddatacatalogv1systemtimestamps)|false|none|Output only. Creation, modification, and expiration timestamps of a Cloud Storage file.|
|sizeBytes|string(int64)|false|read-only|Output only. File size in bytes.|

<h2 id="tocS_GoogleCloudDatacatalogV1GcsFilesetSpec">GoogleCloudDatacatalogV1GcsFilesetSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1gcsfilesetspec"></a>
<a id="schema_GoogleCloudDatacatalogV1GcsFilesetSpec"></a>
<a id="tocSgoogleclouddatacatalogv1gcsfilesetspec"></a>
<a id="tocsgoogleclouddatacatalogv1gcsfilesetspec"></a>

```json
{
  "filePatterns": [
    "string"
  ],
  "sampleGcsFileSpecs": [
    {
      "filePath": "string",
      "gcsTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      },
      "sizeBytes": "string"
    }
  ]
}
```

Describes a Cloud Storage fileset entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePatterns|[string]|false|none|Required. Patterns to identify a set of files in Google Cloud Storage. For more information, see [Wildcard Names] (https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames). Note: Currently, bucket wildcards are not supported. Examples of valid `file_patterns`: * `gs://bucket_name/dir/*`: matches all files in `bucket_name/dir` directory * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir` and all subdirectories * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/*/b`: matches all files in `bucket_name` that match the `a/*/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` You can combine wildcards to match complex sets of files, for example: `gs://bucket_name/[a-m]??.j*g`|
|sampleGcsFileSpecs|[[GoogleCloudDatacatalogV1GcsFileSpec](#schemagoogleclouddatacatalogv1gcsfilespec)]|false|read-only|Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here.|

<h2 id="tocS_GoogleCloudDatacatalogV1ImportEntriesMetadata">GoogleCloudDatacatalogV1ImportEntriesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1importentriesmetadata"></a>
<a id="schema_GoogleCloudDatacatalogV1ImportEntriesMetadata"></a>
<a id="tocSgoogleclouddatacatalogv1importentriesmetadata"></a>
<a id="tocsgoogleclouddatacatalogv1importentriesmetadata"></a>

```json
{
  "errors": [
    {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  ],
  "state": "IMPORT_STATE_UNSPECIFIED"
}
```

Metadata message for long-running operation returned by the ImportEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|[[Status](#schemastatus)]|false|none|Partial errors that are encountered during the ImportEntries operation. There is no guarantee that all the encountered errors are reported. However, if no errors are reported, it means that no errors were encountered.|
|state|string|false|none|State of the import operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|IMPORT_STATE_UNSPECIFIED|
|state|IMPORT_QUEUED|
|state|IMPORT_IN_PROGRESS|
|state|IMPORT_DONE|
|state|IMPORT_OBSOLETE|

<h2 id="tocS_GoogleCloudDatacatalogV1ImportEntriesResponse">GoogleCloudDatacatalogV1ImportEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1importentriesresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1ImportEntriesResponse"></a>
<a id="tocSgoogleclouddatacatalogv1importentriesresponse"></a>
<a id="tocsgoogleclouddatacatalogv1importentriesresponse"></a>

```json
{
  "deletedEntriesCount": "string",
  "upsertedEntriesCount": "string"
}
```

Response message for long-running operation returned by the ImportEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedEntriesCount|string(int64)|false|none|Number of entries deleted as a result of import operation.|
|upsertedEntriesCount|string(int64)|false|none|Cumulative number of entries created and entries updated as a result of import operation.|

<h2 id="tocS_GoogleCloudDatacatalogV1LookerSystemSpec">GoogleCloudDatacatalogV1LookerSystemSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1lookersystemspec"></a>
<a id="schema_GoogleCloudDatacatalogV1LookerSystemSpec"></a>
<a id="tocSgoogleclouddatacatalogv1lookersystemspec"></a>
<a id="tocsgoogleclouddatacatalogv1lookersystemspec"></a>

```json
{
  "parentInstanceDisplayName": "string",
  "parentInstanceId": "string",
  "parentModelDisplayName": "string",
  "parentModelId": "string",
  "parentViewDisplayName": "string",
  "parentViewId": "string"
}
```

Specification that applies to entries that are part `LOOKER` system (user_specified_type)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|parentInstanceDisplayName|string|false|none|Name of the parent Looker Instance. Empty if it does not exist.|
|parentInstanceId|string|false|none|ID of the parent Looker Instance. Empty if it does not exist. Example value: `someinstance.looker.com`|
|parentModelDisplayName|string|false|none|Name of the parent Model. Empty if it does not exist.|
|parentModelId|string|false|none|ID of the parent Model. Empty if it does not exist.|
|parentViewDisplayName|string|false|none|Name of the parent View. Empty if it does not exist.|
|parentViewId|string|false|none|ID of the parent View. Empty if it does not exist.|

<h2 id="tocS_GoogleCloudDatacatalogV1PersonalDetails">GoogleCloudDatacatalogV1PersonalDetails</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1personaldetails"></a>
<a id="schema_GoogleCloudDatacatalogV1PersonalDetails"></a>
<a id="tocSgoogleclouddatacatalogv1personaldetails"></a>
<a id="tocsgoogleclouddatacatalogv1personaldetails"></a>

```json
{
  "starTime": "string",
  "starred": true
}
```

Entry metadata relevant only to the user and private to them.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|starTime|string(google-datetime)|false|none|Set if the entry is starred; unset otherwise.|
|starred|boolean|false|none|True if the entry is starred by the user; false otherwise.|

<h2 id="tocS_GoogleCloudDatacatalogV1PhysicalSchema">GoogleCloudDatacatalogV1PhysicalSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1physicalschema"></a>
<a id="schema_GoogleCloudDatacatalogV1PhysicalSchema"></a>
<a id="tocSgoogleclouddatacatalogv1physicalschema"></a>
<a id="tocsgoogleclouddatacatalogv1physicalschema"></a>

```json
{
  "avro": {
    "text": "string"
  },
  "csv": {},
  "orc": {},
  "parquet": {},
  "protobuf": {
    "text": "string"
  },
  "thrift": {
    "text": "string"
  }
}
```

Native schema used by a resource represented as an entry. Used by query engines for deserializing and parsing source data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avro|[GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema](#schemagoogleclouddatacatalogv1physicalschemaavroschema)|false|none|Schema in Avro JSON format.|
|csv|[GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema](#schemagoogleclouddatacatalogv1physicalschemacsvschema)|false|none|Marks a CSV-encoded data source.|
|orc|[GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema](#schemagoogleclouddatacatalogv1physicalschemaorcschema)|false|none|Marks an ORC-encoded data source.|
|parquet|[GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema](#schemagoogleclouddatacatalogv1physicalschemaparquetschema)|false|none|Marks a Parquet-encoded data source.|
|protobuf|[GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema](#schemagoogleclouddatacatalogv1physicalschemaprotobufschema)|false|none|Schema in protocol buffer format.|
|thrift|[GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema](#schemagoogleclouddatacatalogv1physicalschemathriftschema)|false|none|Schema in Thrift format.|

<h2 id="tocS_GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema">GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1physicalschemaavroschema"></a>
<a id="schema_GoogleCloudDatacatalogV1PhysicalSchemaAvroSchema"></a>
<a id="tocSgoogleclouddatacatalogv1physicalschemaavroschema"></a>
<a id="tocsgoogleclouddatacatalogv1physicalschemaavroschema"></a>

```json
{
  "text": "string"
}
```

Schema in Avro JSON format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|JSON source of the Avro schema.|

<h2 id="tocS_GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema">GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1physicalschemacsvschema"></a>
<a id="schema_GoogleCloudDatacatalogV1PhysicalSchemaCsvSchema"></a>
<a id="tocSgoogleclouddatacatalogv1physicalschemacsvschema"></a>
<a id="tocsgoogleclouddatacatalogv1physicalschemacsvschema"></a>

```json
{}
```

Marks a CSV-encoded data source.

<h2 id="tocS_GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema">GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1physicalschemaorcschema"></a>
<a id="schema_GoogleCloudDatacatalogV1PhysicalSchemaOrcSchema"></a>
<a id="tocSgoogleclouddatacatalogv1physicalschemaorcschema"></a>
<a id="tocsgoogleclouddatacatalogv1physicalschemaorcschema"></a>

```json
{}
```

Marks an ORC-encoded data source.

<h2 id="tocS_GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema">GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1physicalschemaparquetschema"></a>
<a id="schema_GoogleCloudDatacatalogV1PhysicalSchemaParquetSchema"></a>
<a id="tocSgoogleclouddatacatalogv1physicalschemaparquetschema"></a>
<a id="tocsgoogleclouddatacatalogv1physicalschemaparquetschema"></a>

```json
{}
```

Marks a Parquet-encoded data source.

<h2 id="tocS_GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema">GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1physicalschemaprotobufschema"></a>
<a id="schema_GoogleCloudDatacatalogV1PhysicalSchemaProtobufSchema"></a>
<a id="tocSgoogleclouddatacatalogv1physicalschemaprotobufschema"></a>
<a id="tocsgoogleclouddatacatalogv1physicalschemaprotobufschema"></a>

```json
{
  "text": "string"
}
```

Schema in protocol buffer format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|Protocol buffer source of the schema.|

<h2 id="tocS_GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema">GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1physicalschemathriftschema"></a>
<a id="schema_GoogleCloudDatacatalogV1PhysicalSchemaThriftSchema"></a>
<a id="tocSgoogleclouddatacatalogv1physicalschemathriftschema"></a>
<a id="tocsgoogleclouddatacatalogv1physicalschemathriftschema"></a>

```json
{
  "text": "string"
}
```

Schema in Thrift format.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|Thrift IDL source of the schema.|

<h2 id="tocS_GoogleCloudDatacatalogV1ReconcileTagsMetadata">GoogleCloudDatacatalogV1ReconcileTagsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1reconciletagsmetadata"></a>
<a id="schema_GoogleCloudDatacatalogV1ReconcileTagsMetadata"></a>
<a id="tocSgoogleclouddatacatalogv1reconciletagsmetadata"></a>
<a id="tocsgoogleclouddatacatalogv1reconciletagsmetadata"></a>

```json
{
  "errors": {
    "property1": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    },
    "property2": {
      "code": 0,
      "details": [
        {
          "property1": null,
          "property2": null
        }
      ],
      "message": "string"
    }
  },
  "state": "RECONCILIATION_STATE_UNSPECIFIED"
}
```

Long-running operation metadata message returned by the ReconcileTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|Maps the name of each tagged column (or empty string for a sole entry) to tagging operation status.|
|state|string|false|none|State of the reconciliation operation.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|RECONCILIATION_STATE_UNSPECIFIED|
|state|RECONCILIATION_QUEUED|
|state|RECONCILIATION_IN_PROGRESS|
|state|RECONCILIATION_DONE|

<h2 id="tocS_GoogleCloudDatacatalogV1ReconcileTagsResponse">GoogleCloudDatacatalogV1ReconcileTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1reconciletagsresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1ReconcileTagsResponse"></a>
<a id="tocSgoogleclouddatacatalogv1reconciletagsresponse"></a>
<a id="tocsgoogleclouddatacatalogv1reconciletagsresponse"></a>

```json
{
  "createdTagsCount": "string",
  "deletedTagsCount": "string",
  "updatedTagsCount": "string"
}
```

Long-running operation response message returned by ReconcileTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createdTagsCount|string(int64)|false|none|Number of tags created in the request.|
|deletedTagsCount|string(int64)|false|none|Number of tags deleted in the request.|
|updatedTagsCount|string(int64)|false|none|Number of tags updated in the request.|

<h2 id="tocS_GoogleCloudDatacatalogV1RoutineSpec">GoogleCloudDatacatalogV1RoutineSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1routinespec"></a>
<a id="schema_GoogleCloudDatacatalogV1RoutineSpec"></a>
<a id="tocSgoogleclouddatacatalogv1routinespec"></a>
<a id="tocsgoogleclouddatacatalogv1routinespec"></a>

```json
{
  "bigqueryRoutineSpec": {
    "importedLibraries": [
      "string"
    ]
  },
  "definitionBody": "string",
  "language": "string",
  "returnType": "string",
  "routineArguments": [
    {
      "mode": "MODE_UNSPECIFIED",
      "name": "string",
      "type": "string"
    }
  ],
  "routineType": "ROUTINE_TYPE_UNSPECIFIED"
}
```

Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryRoutineSpec|[GoogleCloudDatacatalogV1BigQueryRoutineSpec](#schemagoogleclouddatacatalogv1bigqueryroutinespec)|false|none|Fields specific for BigQuery routines.|
|definitionBody|string|false|none|The body of the routine.|
|language|string|false|none|The language the routine is written in. The exact value depends on the source system. For BigQuery routines, possible values are: * `SQL` * `JAVASCRIPT`|
|returnType|string|false|none|Return type of the argument. The exact value depends on the source system and the language.|
|routineArguments|[[GoogleCloudDatacatalogV1RoutineSpecArgument](#schemagoogleclouddatacatalogv1routinespecargument)]|false|none|Arguments of the routine.|
|routineType|string|false|none|The type of the routine.|

#### Enumerated Values

|Property|Value|
|---|---|
|routineType|ROUTINE_TYPE_UNSPECIFIED|
|routineType|SCALAR_FUNCTION|
|routineType|PROCEDURE|

<h2 id="tocS_GoogleCloudDatacatalogV1RoutineSpecArgument">GoogleCloudDatacatalogV1RoutineSpecArgument</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1routinespecargument"></a>
<a id="schema_GoogleCloudDatacatalogV1RoutineSpecArgument"></a>
<a id="tocSgoogleclouddatacatalogv1routinespecargument"></a>
<a id="tocsgoogleclouddatacatalogv1routinespecargument"></a>

```json
{
  "mode": "MODE_UNSPECIFIED",
  "name": "string",
  "type": "string"
}
```

Input or output argument of a function or stored procedure.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|Specifies whether the argument is input or output.|
|name|string|false|none|The name of the argument. A return argument of a function might not have a name.|
|type|string|false|none|Type of the argument. The exact value depends on the source system and the language.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|IN|
|mode|OUT|
|mode|INOUT|

<h2 id="tocS_GoogleCloudDatacatalogV1Schema">GoogleCloudDatacatalogV1Schema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1schema"></a>
<a id="schema_GoogleCloudDatacatalogV1Schema"></a>
<a id="tocSgoogleclouddatacatalogv1schema"></a>
<a id="tocsgoogleclouddatacatalogv1schema"></a>

```json
{
  "columns": [
    {
      "column": "string",
      "defaultValue": "string",
      "description": "string",
      "gcRule": "string",
      "highestIndexingType": "INDEXING_TYPE_UNSPECIFIED",
      "lookerColumnSpec": {
        "type": "LOOKER_COLUMN_TYPE_UNSPECIFIED"
      },
      "mode": "string",
      "ordinalPosition": 0,
      "subcolumns": [
        {}
      ],
      "type": "string"
    }
  ]
}
```

Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[GoogleCloudDatacatalogV1ColumnSchema](#schemagoogleclouddatacatalogv1columnschema)]|false|none|The unified GoogleSQL-like schema of columns. The overall maximum number of columns and nested columns is 10,000. The maximum nested depth is 15 levels.|

<h2 id="tocS_GoogleCloudDatacatalogV1ServiceSpec">GoogleCloudDatacatalogV1ServiceSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1servicespec"></a>
<a id="schema_GoogleCloudDatacatalogV1ServiceSpec"></a>
<a id="tocSgoogleclouddatacatalogv1servicespec"></a>
<a id="tocsgoogleclouddatacatalogv1servicespec"></a>

```json
{
  "cloudBigtableInstanceSpec": {
    "cloudBigtableClusterSpecs": [
      {
        "displayName": "string",
        "linkedResource": "string",
        "location": "string",
        "type": "string"
      }
    ]
  }
}
```

Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cloudBigtableInstanceSpec|[GoogleCloudDatacatalogV1CloudBigtableInstanceSpec](#schemagoogleclouddatacatalogv1cloudbigtableinstancespec)|false|none|Specification that applies to Instance entries of `CLOUD_BIGTABLE` system.|

<h2 id="tocS_GoogleCloudDatacatalogV1SqlDatabaseSystemSpec">GoogleCloudDatacatalogV1SqlDatabaseSystemSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1sqldatabasesystemspec"></a>
<a id="schema_GoogleCloudDatacatalogV1SqlDatabaseSystemSpec"></a>
<a id="tocSgoogleclouddatacatalogv1sqldatabasesystemspec"></a>
<a id="tocsgoogleclouddatacatalogv1sqldatabasesystemspec"></a>

```json
{
  "databaseVersion": "string",
  "instanceHost": "string",
  "sqlEngine": "string"
}
```

Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|databaseVersion|string|false|none|Version of the database engine.|
|instanceHost|string|false|none|Host of the SQL database enum InstanceHost { UNDEFINED = 0; SELF_HOSTED = 1; CLOUD_SQL = 2; AMAZON_RDS = 3; AZURE_SQL = 4; } Host of the enclousing database instance.|
|sqlEngine|string|false|none|SQL Database Engine. enum SqlEngine { UNDEFINED = 0; MY_SQL = 1; POSTGRE_SQL = 2; SQL_SERVER = 3; } Engine of the enclosing database instance.|

<h2 id="tocS_GoogleCloudDatacatalogV1StorageProperties">GoogleCloudDatacatalogV1StorageProperties</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1storageproperties"></a>
<a id="schema_GoogleCloudDatacatalogV1StorageProperties"></a>
<a id="tocSgoogleclouddatacatalogv1storageproperties"></a>
<a id="tocsgoogleclouddatacatalogv1storageproperties"></a>

```json
{
  "filePattern": [
    "string"
  ],
  "fileType": "string"
}
```

Details the properties of the underlying storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePattern|[string]|false|none|Patterns to identify a set of files for this fileset. Examples of a valid `file_pattern`: * `gs://bucket_name/dir/*`: matches all files in the `bucket_name/dir` directory * `gs://bucket_name/dir/**`: matches all files in the `bucket_name/dir` and all subdirectories recursively * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/*/b`: matches all files in `bucket_name` that match the `a/*/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt`|
|fileType|string|false|none|File type in MIME format, for example, `text/plain`.|

<h2 id="tocS_GoogleCloudDatacatalogV1SystemTimestamps">GoogleCloudDatacatalogV1SystemTimestamps</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1systemtimestamps"></a>
<a id="schema_GoogleCloudDatacatalogV1SystemTimestamps"></a>
<a id="tocSgoogleclouddatacatalogv1systemtimestamps"></a>
<a id="tocsgoogleclouddatacatalogv1systemtimestamps"></a>

```json
{
  "createTime": "string",
  "expireTime": "string",
  "updateTime": "string"
}
```

Timestamps associated with this resource in a particular system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Creation timestamp of the resource within the given system.|
|expireTime|string(google-datetime)|false|read-only|Output only. Expiration timestamp of the resource within the given system. Currently only applicable to BigQuery resources.|
|updateTime|string(google-datetime)|false|none|Timestamp of the last modification of the resource or its metadata within a given system. Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes.|

<h2 id="tocS_GoogleCloudDatacatalogV1TableSpec">GoogleCloudDatacatalogV1TableSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1tablespec"></a>
<a id="schema_GoogleCloudDatacatalogV1TableSpec"></a>
<a id="tocSgoogleclouddatacatalogv1tablespec"></a>
<a id="tocsgoogleclouddatacatalogv1tablespec"></a>

```json
{
  "groupedEntry": "string"
}
```

Normal BigQuery table specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupedEntry|string|false|read-only|Output only. If the table is date-sharded, that is, it matches the `[prefix]YYYYMMDD` name pattern, this field is the Data Catalog resource name of the date-sharded grouped entry. For example: `projects/{PROJECT_ID}/locations/{LOCATION}/entrygroups/{ENTRY_GROUP_ID}/entries/{ENTRY_ID}`. Otherwise, `grouped_entry` is empty.|

<h2 id="tocS_GoogleCloudDatacatalogV1Tag">GoogleCloudDatacatalogV1Tag</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1tag"></a>
<a id="schema_GoogleCloudDatacatalogV1Tag"></a>
<a id="tocSgoogleclouddatacatalogv1tag"></a>
<a id="tocsgoogleclouddatacatalogv1tag"></a>

```json
{
  "column": "string",
  "fields": {
    "property1": {
      "boolValue": true,
      "displayName": "string",
      "doubleValue": 0,
      "enumValue": {
        "displayName": "string"
      },
      "order": 0,
      "richtextValue": "string",
      "stringValue": "string",
      "timestampValue": "string"
    },
    "property2": {
      "boolValue": true,
      "displayName": "string",
      "doubleValue": 0,
      "enumValue": {
        "displayName": "string"
      },
      "order": 0,
      "richtextValue": "string",
      "stringValue": "string",
      "timestampValue": "string"
    }
  },
  "name": "string",
  "template": "string",
  "templateDisplayName": "string"
}
```

Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|false|none|Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (`.`). Example: `column.nested_column`.|
|fields|object|false|none|Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields.|
|name|string|false|none|The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name.|
|template|string|false|none|Required. The resource name of the tag template this tag uses. Example: `projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}` This field cannot be modified after creation.|
|templateDisplayName|string|false|read-only|Output only. The display name of the tag template.|

<h2 id="tocS_GoogleCloudDatacatalogV1TagField">GoogleCloudDatacatalogV1TagField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1tagfield"></a>
<a id="schema_GoogleCloudDatacatalogV1TagField"></a>
<a id="tocSgoogleclouddatacatalogv1tagfield"></a>
<a id="tocsgoogleclouddatacatalogv1tagfield"></a>

```json
{
  "boolValue": true,
  "displayName": "string",
  "doubleValue": 0,
  "enumValue": {
    "displayName": "string"
  },
  "order": 0,
  "richtextValue": "string",
  "stringValue": "string",
  "timestampValue": "string"
}
```

Contains the value and additional information on a field within a Tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|false|none|The value of a tag field with a boolean type.|
|displayName|string|false|read-only|Output only. The display name of this field.|
|doubleValue|number(double)|false|none|The value of a tag field with a double type.|
|enumValue|[GoogleCloudDatacatalogV1TagFieldEnumValue](#schemagoogleclouddatacatalogv1tagfieldenumvalue)|false|none|The value of a tag field with an enum type. This value must be one of the allowed values listed in this enum.|
|order|integer(int32)|false|read-only|Output only. The order of this field with respect to other fields in this tag. Can be set by Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag don't have to be sequential.|
|richtextValue|string|false|none|The value of a tag field with a rich text type. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB.|
|stringValue|string|false|none|The value of a tag field with a string type. The maximum length is 2000 UTF-8 characters.|
|timestampValue|string(google-datetime)|false|none|The value of a tag field with a timestamp type.|

<h2 id="tocS_GoogleCloudDatacatalogV1TagFieldEnumValue">GoogleCloudDatacatalogV1TagFieldEnumValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1tagfieldenumvalue"></a>
<a id="schema_GoogleCloudDatacatalogV1TagFieldEnumValue"></a>
<a id="tocSgoogleclouddatacatalogv1tagfieldenumvalue"></a>
<a id="tocsgoogleclouddatacatalogv1tagfieldenumvalue"></a>

```json
{
  "displayName": "string"
}
```

An enum value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the enum value.|

<h2 id="tocS_GoogleCloudDatacatalogV1TaggedEntry">GoogleCloudDatacatalogV1TaggedEntry</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1taggedentry"></a>
<a id="schema_GoogleCloudDatacatalogV1TaggedEntry"></a>
<a id="tocSgoogleclouddatacatalogv1taggedentry"></a>
<a id="tocsgoogleclouddatacatalogv1taggedentry"></a>

```json
{
  "absentTags": [
    {
      "column": "string",
      "fields": {
        "property1": {
          "boolValue": true,
          "displayName": "string",
          "doubleValue": 0,
          "enumValue": {
            "displayName": "string"
          },
          "order": 0,
          "richtextValue": "string",
          "stringValue": "string",
          "timestampValue": "string"
        },
        "property2": {
          "boolValue": true,
          "displayName": "string",
          "doubleValue": 0,
          "enumValue": {
            "displayName": "string"
          },
          "order": 0,
          "richtextValue": "string",
          "stringValue": "string",
          "timestampValue": "string"
        }
      },
      "name": "string",
      "template": "string",
      "templateDisplayName": "string"
    }
  ],
  "presentTags": [
    {
      "column": "string",
      "fields": {
        "property1": {
          "boolValue": true,
          "displayName": "string",
          "doubleValue": 0,
          "enumValue": {
            "displayName": "string"
          },
          "order": 0,
          "richtextValue": "string",
          "stringValue": "string",
          "timestampValue": "string"
        },
        "property2": {
          "boolValue": true,
          "displayName": "string",
          "doubleValue": 0,
          "enumValue": {
            "displayName": "string"
          },
          "order": 0,
          "richtextValue": "string",
          "stringValue": "string",
          "timestampValue": "string"
        }
      },
      "name": "string",
      "template": "string",
      "templateDisplayName": "string"
    }
  ],
  "v1Entry": {
    "bigqueryDateShardedSpec": {
      "dataset": "string",
      "latestShardResource": "string",
      "shardCount": "string",
      "tablePrefix": "string"
    },
    "bigqueryTableSpec": {
      "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
      "tableSpec": {
        "groupedEntry": "string"
      },
      "viewSpec": {
        "viewQuery": "string"
      }
    },
    "businessContext": {
      "contacts": {
        "people": [
          {
            "designation": "string",
            "email": "string"
          }
        ]
      },
      "entryOverview": {
        "overview": "string"
      }
    },
    "cloudBigtableSystemSpec": {
      "instanceDisplayName": "string"
    },
    "dataSource": {
      "resource": "string",
      "service": "SERVICE_UNSPECIFIED",
      "sourceEntry": "string",
      "storageProperties": {
        "filePattern": [
          "string"
        ],
        "fileType": "string"
      }
    },
    "dataSourceConnectionSpec": {
      "bigqueryConnectionSpec": {
        "cloudSql": {
          "database": "string",
          "instanceId": "string",
          "type": "DATABASE_TYPE_UNSPECIFIED"
        },
        "connectionType": "CONNECTION_TYPE_UNSPECIFIED",
        "hasCredential": true
      }
    },
    "databaseTableSpec": {
      "databaseViewSpec": {
        "baseTable": "string",
        "sqlQuery": "string",
        "viewType": "VIEW_TYPE_UNSPECIFIED"
      },
      "dataplexTable": {
        "dataplexSpec": {
          "asset": "string",
          "compressionFormat": "string",
          "dataFormat": {
            "avro": {
              "text": "string"
            },
            "csv": {},
            "orc": {},
            "parquet": {},
            "protobuf": {
              "text": "string"
            },
            "thrift": {
              "text": "string"
            }
          },
          "projectId": "string"
        },
        "externalTables": [
          {
            "dataCatalogEntry": "string",
            "fullyQualifiedName": "string",
            "googleCloudResource": "string",
            "system": "INTEGRATED_SYSTEM_UNSPECIFIED"
          }
        ],
        "userManaged": true
      },
      "type": "TABLE_TYPE_UNSPECIFIED"
    },
    "description": "string",
    "displayName": "string",
    "filesetSpec": {
      "dataplexFileset": {
        "dataplexSpec": {
          "asset": "string",
          "compressionFormat": "string",
          "dataFormat": {
            "avro": {
              "text": "string"
            },
            "csv": {},
            "orc": {},
            "parquet": {},
            "protobuf": {
              "text": "string"
            },
            "thrift": {
              "text": "string"
            }
          },
          "projectId": "string"
        }
      }
    },
    "fullyQualifiedName": "string",
    "gcsFilesetSpec": {
      "filePatterns": [
        "string"
      ],
      "sampleGcsFileSpecs": [
        {
          "filePath": "string",
          "gcsTimestamps": {
            "createTime": "string",
            "expireTime": "string",
            "updateTime": "string"
          },
          "sizeBytes": "string"
        }
      ]
    },
    "integratedSystem": "INTEGRATED_SYSTEM_UNSPECIFIED",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "linkedResource": "string",
    "lookerSystemSpec": {
      "parentInstanceDisplayName": "string",
      "parentInstanceId": "string",
      "parentModelDisplayName": "string",
      "parentModelId": "string",
      "parentViewDisplayName": "string",
      "parentViewId": "string"
    },
    "name": "string",
    "personalDetails": {
      "starTime": "string",
      "starred": true
    },
    "routineSpec": {
      "bigqueryRoutineSpec": {
        "importedLibraries": [
          "string"
        ]
      },
      "definitionBody": "string",
      "language": "string",
      "returnType": "string",
      "routineArguments": [
        {
          "mode": "MODE_UNSPECIFIED",
          "name": "string",
          "type": "string"
        }
      ],
      "routineType": "ROUTINE_TYPE_UNSPECIFIED"
    },
    "schema": {
      "columns": [
        {
          "column": "string",
          "defaultValue": "string",
          "description": "string",
          "gcRule": "string",
          "highestIndexingType": "INDEXING_TYPE_UNSPECIFIED",
          "lookerColumnSpec": {
            "type": "LOOKER_COLUMN_TYPE_UNSPECIFIED"
          },
          "mode": "string",
          "ordinalPosition": 0,
          "subcolumns": [
            {}
          ],
          "type": "string"
        }
      ]
    },
    "serviceSpec": {
      "cloudBigtableInstanceSpec": {
        "cloudBigtableClusterSpecs": [
          {
            "displayName": "string",
            "linkedResource": "string",
            "location": "string",
            "type": "string"
          }
        ]
      }
    },
    "sourceSystemTimestamps": {
      "createTime": "string",
      "expireTime": "string",
      "updateTime": "string"
    },
    "sqlDatabaseSystemSpec": {
      "databaseVersion": "string",
      "instanceHost": "string",
      "sqlEngine": "string"
    },
    "type": "ENTRY_TYPE_UNSPECIFIED",
    "usageSignal": {
      "commonUsageWithinTimeRange": {
        "property1": {
          "viewCount": "string"
        },
        "property2": {
          "viewCount": "string"
        }
      },
      "favoriteCount": "string",
      "updateTime": "string",
      "usageWithinTimeRange": {
        "property1": {
          "totalCancellations": 0,
          "totalCompletions": 0,
          "totalExecutionTimeForCompletionsMillis": 0,
          "totalFailures": 0
        },
        "property2": {
          "totalCancellations": 0,
          "totalCompletions": 0,
          "totalExecutionTimeForCompletionsMillis": 0,
          "totalFailures": 0
        }
      }
    },
    "userSpecifiedSystem": "string",
    "userSpecifiedType": "string"
  }
}
```

Wrapper containing Entry and information about Tags that should and should not be attached to it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|absentTags|[[GoogleCloudDatacatalogV1Tag](#schemagoogleclouddatacatalogv1tag)]|false|none|Optional. Tags that should be deleted from the Data Catalog. Caller should populate template name and column only.|
|presentTags|[[GoogleCloudDatacatalogV1Tag](#schemagoogleclouddatacatalogv1tag)]|false|none|Optional. Tags that should be ingested into the Data Catalog. Caller should populate template name, column and fields.|
|v1Entry|[GoogleCloudDatacatalogV1Entry](#schemagoogleclouddatacatalogv1entry)|false|none|Non-encrypted Data Catalog v1 Entry.|

<h2 id="tocS_GoogleCloudDatacatalogV1UsageSignal">GoogleCloudDatacatalogV1UsageSignal</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1usagesignal"></a>
<a id="schema_GoogleCloudDatacatalogV1UsageSignal"></a>
<a id="tocSgoogleclouddatacatalogv1usagesignal"></a>
<a id="tocsgoogleclouddatacatalogv1usagesignal"></a>

```json
{
  "commonUsageWithinTimeRange": {
    "property1": {
      "viewCount": "string"
    },
    "property2": {
      "viewCount": "string"
    }
  },
  "favoriteCount": "string",
  "updateTime": "string",
  "usageWithinTimeRange": {
    "property1": {
      "totalCancellations": 0,
      "totalCompletions": 0,
      "totalExecutionTimeForCompletionsMillis": 0,
      "totalFailures": 0
    },
    "property2": {
      "totalCancellations": 0,
      "totalCompletions": 0,
      "totalExecutionTimeForCompletionsMillis": 0,
      "totalFailures": 0
    }
  }
}
```

The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|commonUsageWithinTimeRange|object|false|none|Common usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D", "Lifetime"}`.|
|favoriteCount|string(int64)|false|none|Favorite count in the source system.|
|updateTime|string(google-datetime)|false|none|The end timestamp of the duration of usage statistics.|
|usageWithinTimeRange|object|false|read-only|Output only. BigQuery usage statistics over each of the predefined time ranges. Supported time ranges are `{"24H", "7D", "30D"}`.|

<h2 id="tocS_GoogleCloudDatacatalogV1UsageStats">GoogleCloudDatacatalogV1UsageStats</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1usagestats"></a>
<a id="schema_GoogleCloudDatacatalogV1UsageStats"></a>
<a id="tocSgoogleclouddatacatalogv1usagestats"></a>
<a id="tocsgoogleclouddatacatalogv1usagestats"></a>

```json
{
  "totalCancellations": 0,
  "totalCompletions": 0,
  "totalExecutionTimeForCompletionsMillis": 0,
  "totalFailures": 0
}
```

Detailed statistics on the entry's usage. Usage statistics have the following limitations: - Only BigQuery tables have them. - They only include BigQuery query jobs. - They might be underestimated because wildcard table references are not yet counted. For more information, see [Querying multiple tables using a wildcard table] (https://cloud.google.com/bigquery/docs/querying-wildcard-tables)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalCancellations|number(float)|false|none|The number of cancelled attempts to use the underlying entry.|
|totalCompletions|number(float)|false|none|The number of successful uses of the underlying entry.|
|totalExecutionTimeForCompletionsMillis|number(float)|false|none|Total time spent only on successful uses, in milliseconds.|
|totalFailures|number(float)|false|none|The number of failed attempts to use the underlying entry.|

<h2 id="tocS_GoogleCloudDatacatalogV1ViewSpec">GoogleCloudDatacatalogV1ViewSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1viewspec"></a>
<a id="schema_GoogleCloudDatacatalogV1ViewSpec"></a>
<a id="tocSgoogleclouddatacatalogv1viewspec"></a>
<a id="tocsgoogleclouddatacatalogv1viewspec"></a>

```json
{
  "viewQuery": "string"
}
```

Table view specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|viewQuery|string|false|read-only|Output only. The query that defines the table view.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec">GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1bigquerydateshardedspec"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec"></a>
<a id="tocSgoogleclouddatacatalogv1beta1bigquerydateshardedspec"></a>
<a id="tocsgoogleclouddatacatalogv1beta1bigquerydateshardedspec"></a>

```json
{
  "dataset": "string",
  "shardCount": "string",
  "tablePrefix": "string"
}
```

Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataset|string|false|read-only|Output only. The Data Catalog resource name of the dataset entry the current table belongs to, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`.|
|shardCount|string(int64)|false|read-only|Output only. Total number of shards.|
|tablePrefix|string|false|read-only|Output only. The table name prefix of the shards. The name of any given shard is `[table_prefix]YYYYMMDD`, for example, for shard `MyTable20180101`, the `table_prefix` is `MyTable`.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1BigQueryTableSpec">GoogleCloudDatacatalogV1beta1BigQueryTableSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1bigquerytablespec"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1BigQueryTableSpec"></a>
<a id="tocSgoogleclouddatacatalogv1beta1bigquerytablespec"></a>
<a id="tocsgoogleclouddatacatalogv1beta1bigquerytablespec"></a>

```json
{
  "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
  "tableSpec": {
    "groupedEntry": "string"
  },
  "viewSpec": {
    "viewQuery": "string"
  }
}
```

Describes a BigQuery table.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tableSourceType|string|false|read-only|Output only. The table source type.|
|tableSpec|[GoogleCloudDatacatalogV1beta1TableSpec](#schemagoogleclouddatacatalogv1beta1tablespec)|false|none|Spec of a BigQuery table. This field should only be populated if `table_source_type` is `BIGQUERY_TABLE`.|
|viewSpec|[GoogleCloudDatacatalogV1beta1ViewSpec](#schemagoogleclouddatacatalogv1beta1viewspec)|false|none|Table view specification. This field should only be populated if `table_source_type` is `BIGQUERY_VIEW`.|

#### Enumerated Values

|Property|Value|
|---|---|
|tableSourceType|TABLE_SOURCE_TYPE_UNSPECIFIED|
|tableSourceType|BIGQUERY_VIEW|
|tableSourceType|BIGQUERY_TABLE|
|tableSourceType|BIGQUERY_MATERIALIZED_VIEW|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ColumnSchema">GoogleCloudDatacatalogV1beta1ColumnSchema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1columnschema"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ColumnSchema"></a>
<a id="tocSgoogleclouddatacatalogv1beta1columnschema"></a>
<a id="tocsgoogleclouddatacatalogv1beta1columnschema"></a>

```json
{
  "column": "string",
  "description": "string",
  "mode": "string",
  "subcolumns": [
    {
      "column": "string",
      "description": "string",
      "mode": "string",
      "subcolumns": [
        {}
      ],
      "type": "string"
    }
  ],
  "type": "string"
}
```

Representation of a column within a schema. Columns could be nested inside other columns.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|false|none|Required. Name of the column.|
|description|string|false|none|Optional. Description of the column. Default value is an empty string.|
|mode|string|false|none|Optional. A column's mode indicates whether the values in this column are required, nullable, etc. Only `NULLABLE`, `REQUIRED` and `REPEATED` are supported. Default mode is `NULLABLE`.|
|subcolumns|[[GoogleCloudDatacatalogV1beta1ColumnSchema](#schemagoogleclouddatacatalogv1beta1columnschema)]|false|none|Optional. Schema of sub-columns. A column can have zero or more sub-columns.|
|type|string|false|none|Required. Type of the column.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1Entry">GoogleCloudDatacatalogV1beta1Entry</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1entry"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1Entry"></a>
<a id="tocSgoogleclouddatacatalogv1beta1entry"></a>
<a id="tocsgoogleclouddatacatalogv1beta1entry"></a>

```json
{
  "bigqueryDateShardedSpec": {
    "dataset": "string",
    "shardCount": "string",
    "tablePrefix": "string"
  },
  "bigqueryTableSpec": {
    "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
    "tableSpec": {
      "groupedEntry": "string"
    },
    "viewSpec": {
      "viewQuery": "string"
    }
  },
  "description": "string",
  "displayName": "string",
  "gcsFilesetSpec": {
    "filePatterns": [
      "string"
    ],
    "sampleGcsFileSpecs": [
      {
        "filePath": "string",
        "gcsTimestamps": {
          "createTime": "string",
          "expireTime": "string",
          "updateTime": "string"
        },
        "sizeBytes": "string"
      }
    ]
  },
  "integratedSystem": "INTEGRATED_SYSTEM_UNSPECIFIED",
  "linkedResource": "string",
  "name": "string",
  "schema": {
    "columns": [
      {
        "column": "string",
        "description": "string",
        "mode": "string",
        "subcolumns": [
          {}
        ],
        "type": "string"
      }
    ]
  },
  "sourceSystemTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  },
  "type": "ENTRY_TYPE_UNSPECIFIED",
  "usageSignal": {
    "updateTime": "string",
    "usageWithinTimeRange": {
      "property1": {
        "totalCancellations": 0,
        "totalCompletions": 0,
        "totalExecutionTimeForCompletionsMillis": 0,
        "totalFailures": 0
      },
      "property2": {
        "totalCancellations": 0,
        "totalCompletions": 0,
        "totalExecutionTimeForCompletionsMillis": 0,
        "totalFailures": 0
      }
    }
  },
  "userSpecifiedSystem": "string",
  "userSpecifiedType": "string"
}
```

Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryDateShardedSpec|[GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec](#schemagoogleclouddatacatalogv1beta1bigquerydateshardedspec)|false|none|Specification for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding.|
|bigqueryTableSpec|[GoogleCloudDatacatalogV1beta1BigQueryTableSpec](#schemagoogleclouddatacatalogv1beta1bigquerytablespec)|false|none|Specification that applies to a BigQuery table. This is only valid on entries of type `TABLE`.|
|description|string|false|none|Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string.|
|displayName|string|false|none|Display information such as title and description. A short name to identify the entry, for example, "Analytics Data - Jan 2011". Default value is an empty string.|
|gcsFilesetSpec|[GoogleCloudDatacatalogV1beta1GcsFilesetSpec](#schemagoogleclouddatacatalogv1beta1gcsfilesetspec)|false|none|Specification that applies to a Cloud Storage fileset. This is only valid on entries of type FILESET.|
|integratedSystem|string|false|read-only|Output only. This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub.|
|linkedResource|string|false|none|The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string.|
|name|string|false|read-only|Output only. The Data Catalog resource name of the entry in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Entry and its child resources may not actually be stored in the location in this name.|
|schema|[GoogleCloudDatacatalogV1beta1Schema](#schemagoogleclouddatacatalogv1beta1schema)|false|none|Schema of the entry. An entry might not have any schema attached to it.|
|sourceSystemTimestamps|[GoogleCloudDatacatalogV1beta1SystemTimestamps](#schemagoogleclouddatacatalogv1beta1systemtimestamps)|false|none|Output only. Timestamps about the underlying resource, not about this Data Catalog entry. Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty timestamp.|
|type|string|false|none|The type of the entry. Only used for Entries with types in the EntryType enum.|
|usageSignal|[GoogleCloudDatacatalogV1beta1UsageSignal](#schemagoogleclouddatacatalogv1beta1usagesignal)|false|none|Output only. Statistics on the usage level of the resource.|
|userSpecifiedSystem|string|false|none|This field indicates the entry's source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.|
|userSpecifiedType|string|false|none|Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example "my_special_type". `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`.|

#### Enumerated Values

|Property|Value|
|---|---|
|integratedSystem|INTEGRATED_SYSTEM_UNSPECIFIED|
|integratedSystem|BIGQUERY|
|integratedSystem|CLOUD_PUBSUB|
|type|ENTRY_TYPE_UNSPECIFIED|
|type|TABLE|
|type|MODEL|
|type|DATA_STREAM|
|type|FILESET|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1EntryGroup">GoogleCloudDatacatalogV1beta1EntryGroup</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1entrygroup"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1EntryGroup"></a>
<a id="tocSgoogleclouddatacatalogv1beta1entrygroup"></a>
<a id="tocsgoogleclouddatacatalogv1beta1entrygroup"></a>

```json
{
  "dataCatalogTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  },
  "description": "string",
  "displayName": "string",
  "name": "string"
}
```

EntryGroup Metadata. An EntryGroup resource represents a logical grouping of zero or more Data Catalog Entry resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataCatalogTimestamps|[GoogleCloudDatacatalogV1beta1SystemTimestamps](#schemagoogleclouddatacatalogv1beta1systemtimestamps)|false|none|Output only. Timestamps about this EntryGroup. Default value is empty timestamps.|
|description|string|false|none|Entry group description, which can consist of several sentences or paragraphs that describe entry group contents. Default value is an empty string.|
|displayName|string|false|none|A short name to identify the entry group, for example, "analytics data - jan 2011". Default value is an empty string.|
|name|string|false|none|The resource name of the entry group in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id} Note that this EntryGroup and its child resources may not actually be stored in the location in this name.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse">GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1exporttaxonomiesresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ExportTaxonomiesResponse"></a>
<a id="tocSgoogleclouddatacatalogv1beta1exporttaxonomiesresponse"></a>
<a id="tocsgoogleclouddatacatalogv1beta1exporttaxonomiesresponse"></a>

```json
{
  "taxonomies": [
    {
      "activatedPolicyTypes": [
        "POLICY_TYPE_UNSPECIFIED"
      ],
      "description": "string",
      "displayName": "string",
      "policyTags": [
        {
          "childPolicyTags": [
            {}
          ],
          "description": "string",
          "displayName": "string",
          "policyTag": "string"
        }
      ]
    }
  ]
}
```

Response message for ExportTaxonomies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxonomies|[[GoogleCloudDatacatalogV1beta1SerializedTaxonomy](#schemagoogleclouddatacatalogv1beta1serializedtaxonomy)]|false|none|List of taxonomies and policy tags in a tree structure.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1FieldType">GoogleCloudDatacatalogV1beta1FieldType</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1fieldtype"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1FieldType"></a>
<a id="tocSgoogleclouddatacatalogv1beta1fieldtype"></a>
<a id="tocsgoogleclouddatacatalogv1beta1fieldtype"></a>

```json
{
  "enumType": {
    "allowedValues": [
      {
        "displayName": "string"
      }
    ]
  },
  "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enumType|[GoogleCloudDatacatalogV1beta1FieldTypeEnumType](#schemagoogleclouddatacatalogv1beta1fieldtypeenumtype)|false|none|Represents an enum type.|
|primitiveType|string|false|none|Represents primitive types - string, bool etc.|

#### Enumerated Values

|Property|Value|
|---|---|
|primitiveType|PRIMITIVE_TYPE_UNSPECIFIED|
|primitiveType|DOUBLE|
|primitiveType|STRING|
|primitiveType|BOOL|
|primitiveType|TIMESTAMP|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1FieldTypeEnumType">GoogleCloudDatacatalogV1beta1FieldTypeEnumType</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1fieldtypeenumtype"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1FieldTypeEnumType"></a>
<a id="tocSgoogleclouddatacatalogv1beta1fieldtypeenumtype"></a>
<a id="tocsgoogleclouddatacatalogv1beta1fieldtypeenumtype"></a>

```json
{
  "allowedValues": [
    {
      "displayName": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowedValues|[[GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue](#schemagoogleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue)]|false|none|none|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue">GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1FieldTypeEnumTypeEnumValue"></a>
<a id="tocSgoogleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue"></a>
<a id="tocsgoogleclouddatacatalogv1beta1fieldtypeenumtypeenumvalue"></a>

```json
{
  "displayName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. The display name of the enum value. Must not be an empty string.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1GcsFileSpec">GoogleCloudDatacatalogV1beta1GcsFileSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1gcsfilespec"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1GcsFileSpec"></a>
<a id="tocSgoogleclouddatacatalogv1beta1gcsfilespec"></a>
<a id="tocsgoogleclouddatacatalogv1beta1gcsfilespec"></a>

```json
{
  "filePath": "string",
  "gcsTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  },
  "sizeBytes": "string"
}
```

Specifications of a single file in Cloud Storage.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePath|string|false|none|Required. The full file path. Example: `gs://bucket_name/a/b.txt`.|
|gcsTimestamps|[GoogleCloudDatacatalogV1beta1SystemTimestamps](#schemagoogleclouddatacatalogv1beta1systemtimestamps)|false|none|Output only. Timestamps about the Cloud Storage file.|
|sizeBytes|string(int64)|false|read-only|Output only. The size of the file, in bytes.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1GcsFilesetSpec">GoogleCloudDatacatalogV1beta1GcsFilesetSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1gcsfilesetspec"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1GcsFilesetSpec"></a>
<a id="tocSgoogleclouddatacatalogv1beta1gcsfilesetspec"></a>
<a id="tocsgoogleclouddatacatalogv1beta1gcsfilesetspec"></a>

```json
{
  "filePatterns": [
    "string"
  ],
  "sampleGcsFileSpecs": [
    {
      "filePath": "string",
      "gcsTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      },
      "sizeBytes": "string"
    }
  ]
}
```

Describes a Cloud Storage fileset entry.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filePatterns|[string]|false|none|Required. Patterns to identify a set of files in Google Cloud Storage. See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames) for more information. Note that bucket wildcards are currently not supported. Examples of valid file_patterns: * `gs://bucket_name/dir/*`: matches all files within `bucket_name/dir` directory. * `gs://bucket_name/dir/**`: matches all files in `bucket_name/dir` spanning all subdirectories. * `gs://bucket_name/file*`: matches files prefixed by `file` in `bucket_name` * `gs://bucket_name/??.txt`: matches files with two characters followed by `.txt` in `bucket_name` * `gs://bucket_name/[aeiou].txt`: matches files that contain a single vowel character followed by `.txt` in `bucket_name` * `gs://bucket_name/[a-m].txt`: matches files that contain `a`, `b`, ... or `m` followed by `.txt` in `bucket_name` * `gs://bucket_name/a/*/b`: matches all files in `bucket_name` that match `a/*/b` pattern, such as `a/c/b`, `a/d/b` * `gs://another_bucket/a.txt`: matches `gs://another_bucket/a.txt` You can combine wildcards to provide more powerful matches, for example: * `gs://bucket_name/[a-m]??.j*g`|
|sampleGcsFileSpecs|[[GoogleCloudDatacatalogV1beta1GcsFileSpec](#schemagoogleclouddatacatalogv1beta1gcsfilespec)]|false|read-only|Output only. Sample files contained in this fileset, not all files contained in this fileset are represented here.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest">GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1importtaxonomiesrequest"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ImportTaxonomiesRequest"></a>
<a id="tocSgoogleclouddatacatalogv1beta1importtaxonomiesrequest"></a>
<a id="tocsgoogleclouddatacatalogv1beta1importtaxonomiesrequest"></a>

```json
{
  "inlineSource": {
    "taxonomies": [
      {
        "activatedPolicyTypes": [
          "POLICY_TYPE_UNSPECIFIED"
        ],
        "description": "string",
        "displayName": "string",
        "policyTags": [
          {
            "childPolicyTags": [
              {}
            ],
            "description": "string",
            "displayName": "string",
            "policyTag": "string"
          }
        ]
      }
    ]
  }
}
```

Request message for ImportTaxonomies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inlineSource|[GoogleCloudDatacatalogV1beta1InlineSource](#schemagoogleclouddatacatalogv1beta1inlinesource)|false|none|Inline source used for taxonomies to be imported.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse">GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1importtaxonomiesresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ImportTaxonomiesResponse"></a>
<a id="tocSgoogleclouddatacatalogv1beta1importtaxonomiesresponse"></a>
<a id="tocsgoogleclouddatacatalogv1beta1importtaxonomiesresponse"></a>

```json
{
  "taxonomies": [
    {
      "activatedPolicyTypes": [
        "POLICY_TYPE_UNSPECIFIED"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string",
      "policyTagCount": 0,
      "service": {
        "identity": "string",
        "name": "MANAGING_SYSTEM_UNSPECIFIED"
      },
      "taxonomyTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      }
    }
  ]
}
```

Response message for ImportTaxonomies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxonomies|[[GoogleCloudDatacatalogV1beta1Taxonomy](#schemagoogleclouddatacatalogv1beta1taxonomy)]|false|none|Taxonomies that were imported.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1InlineSource">GoogleCloudDatacatalogV1beta1InlineSource</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1inlinesource"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1InlineSource"></a>
<a id="tocSgoogleclouddatacatalogv1beta1inlinesource"></a>
<a id="tocsgoogleclouddatacatalogv1beta1inlinesource"></a>

```json
{
  "taxonomies": [
    {
      "activatedPolicyTypes": [
        "POLICY_TYPE_UNSPECIFIED"
      ],
      "description": "string",
      "displayName": "string",
      "policyTags": [
        {
          "childPolicyTags": [
            {}
          ],
          "description": "string",
          "displayName": "string",
          "policyTag": "string"
        }
      ]
    }
  ]
}
```

Inline source used for taxonomies import.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|taxonomies|[[GoogleCloudDatacatalogV1beta1SerializedTaxonomy](#schemagoogleclouddatacatalogv1beta1serializedtaxonomy)]|false|none|Required. Taxonomies to be imported.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ListEntriesResponse">GoogleCloudDatacatalogV1beta1ListEntriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1listentriesresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ListEntriesResponse"></a>
<a id="tocSgoogleclouddatacatalogv1beta1listentriesresponse"></a>
<a id="tocsgoogleclouddatacatalogv1beta1listentriesresponse"></a>

```json
{
  "entries": [
    {
      "bigqueryDateShardedSpec": {
        "dataset": "string",
        "shardCount": "string",
        "tablePrefix": "string"
      },
      "bigqueryTableSpec": {
        "tableSourceType": "TABLE_SOURCE_TYPE_UNSPECIFIED",
        "tableSpec": {
          "groupedEntry": "string"
        },
        "viewSpec": {
          "viewQuery": "string"
        }
      },
      "description": "string",
      "displayName": "string",
      "gcsFilesetSpec": {
        "filePatterns": [
          "string"
        ],
        "sampleGcsFileSpecs": [
          {
            "filePath": "string",
            "gcsTimestamps": {
              "createTime": "string",
              "expireTime": "string",
              "updateTime": "string"
            },
            "sizeBytes": "string"
          }
        ]
      },
      "integratedSystem": "INTEGRATED_SYSTEM_UNSPECIFIED",
      "linkedResource": "string",
      "name": "string",
      "schema": {
        "columns": [
          {
            "column": "string",
            "description": "string",
            "mode": "string",
            "subcolumns": [
              {}
            ],
            "type": "string"
          }
        ]
      },
      "sourceSystemTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      },
      "type": "ENTRY_TYPE_UNSPECIFIED",
      "usageSignal": {
        "updateTime": "string",
        "usageWithinTimeRange": {
          "property1": {
            "totalCancellations": 0,
            "totalCompletions": 0,
            "totalExecutionTimeForCompletionsMillis": 0,
            "totalFailures": 0
          },
          "property2": {
            "totalCancellations": 0,
            "totalCompletions": 0,
            "totalExecutionTimeForCompletionsMillis": 0,
            "totalFailures": 0
          }
        }
      },
      "userSpecifiedSystem": "string",
      "userSpecifiedType": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListEntries.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entries|[[GoogleCloudDatacatalogV1beta1Entry](#schemagoogleclouddatacatalogv1beta1entry)]|false|none|Entry details.|
|nextPageToken|string|false|none|Token to retrieve the next page of results. It is set to empty if no items remain in results.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse">GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1listentrygroupsresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ListEntryGroupsResponse"></a>
<a id="tocSgoogleclouddatacatalogv1beta1listentrygroupsresponse"></a>
<a id="tocsgoogleclouddatacatalogv1beta1listentrygroupsresponse"></a>

```json
{
  "entryGroups": [
    {
      "dataCatalogTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      },
      "description": "string",
      "displayName": "string",
      "name": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for ListEntryGroups.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|entryGroups|[[GoogleCloudDatacatalogV1beta1EntryGroup](#schemagoogleclouddatacatalogv1beta1entrygroup)]|false|none|EntryGroup details.|
|nextPageToken|string|false|none|Token to retrieve the next page of results. It is set to empty if no items remain in results.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse">GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1listpolicytagsresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ListPolicyTagsResponse"></a>
<a id="tocSgoogleclouddatacatalogv1beta1listpolicytagsresponse"></a>
<a id="tocsgoogleclouddatacatalogv1beta1listpolicytagsresponse"></a>

```json
{
  "nextPageToken": "string",
  "policyTags": [
    {
      "childPolicyTags": [
        "string"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string",
      "parentPolicyTag": "string"
    }
  ]
}
```

Response message for ListPolicyTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token used to retrieve the next page of results, or empty if there are no more results in the list.|
|policyTags|[[GoogleCloudDatacatalogV1beta1PolicyTag](#schemagoogleclouddatacatalogv1beta1policytag)]|false|none|The policy tags that are in the requested taxonomy.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ListTagsResponse">GoogleCloudDatacatalogV1beta1ListTagsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1listtagsresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ListTagsResponse"></a>
<a id="tocSgoogleclouddatacatalogv1beta1listtagsresponse"></a>
<a id="tocsgoogleclouddatacatalogv1beta1listtagsresponse"></a>

```json
{
  "nextPageToken": "string",
  "tags": [
    {
      "column": "string",
      "fields": {
        "property1": {
          "boolValue": true,
          "displayName": "string",
          "doubleValue": 0,
          "enumValue": {
            "displayName": "string"
          },
          "order": 0,
          "stringValue": "string",
          "timestampValue": "string"
        },
        "property2": {
          "boolValue": true,
          "displayName": "string",
          "doubleValue": 0,
          "enumValue": {
            "displayName": "string"
          },
          "order": 0,
          "stringValue": "string",
          "timestampValue": "string"
        }
      },
      "name": "string",
      "template": "string",
      "templateDisplayName": "string"
    }
  ]
}
```

Response message for ListTags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token to retrieve the next page of results. It is set to empty if no items remain in results.|
|tags|[[GoogleCloudDatacatalogV1beta1Tag](#schemagoogleclouddatacatalogv1beta1tag)]|false|none|Tag details.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse">GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1listtaxonomiesresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ListTaxonomiesResponse"></a>
<a id="tocSgoogleclouddatacatalogv1beta1listtaxonomiesresponse"></a>
<a id="tocsgoogleclouddatacatalogv1beta1listtaxonomiesresponse"></a>

```json
{
  "nextPageToken": "string",
  "taxonomies": [
    {
      "activatedPolicyTypes": [
        "POLICY_TYPE_UNSPECIFIED"
      ],
      "description": "string",
      "displayName": "string",
      "name": "string",
      "policyTagCount": 0,
      "service": {
        "identity": "string",
        "name": "MANAGING_SYSTEM_UNSPECIFIED"
      },
      "taxonomyTimestamps": {
        "createTime": "string",
        "expireTime": "string",
        "updateTime": "string"
      }
    }
  ]
}
```

Response message for ListTaxonomies.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Token used to retrieve the next page of results, or empty if there are no more results in the list.|
|taxonomies|[[GoogleCloudDatacatalogV1beta1Taxonomy](#schemagoogleclouddatacatalogv1beta1taxonomy)]|false|none|Taxonomies that the project contains.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1PolicyTag">GoogleCloudDatacatalogV1beta1PolicyTag</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1policytag"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1PolicyTag"></a>
<a id="tocSgoogleclouddatacatalogv1beta1policytag"></a>
<a id="tocsgoogleclouddatacatalogv1beta1policytag"></a>

```json
{
  "childPolicyTags": [
    "string"
  ],
  "description": "string",
  "displayName": "string",
  "name": "string",
  "parentPolicyTag": "string"
}
```

Denotes one policy tag in a taxonomy (e.g. ssn). Policy Tags can be defined in a hierarchy. For example, consider the following hierarchy: Geolocation -> (LatLong, City, ZipCode). PolicyTag "Geolocation" contains three child policy tags: "LatLong", "City", and "ZipCode".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childPolicyTags|[string]|false|read-only|Output only. Resource names of child policy tags of this policy tag.|
|description|string|false|none|Description of this policy tag. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description. If not set, defaults to an empty description.|
|displayName|string|false|none|Required. User defined name of this policy tag. It must: be unique within the parent taxonomy; contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8.|
|name|string|false|read-only|Output only. Resource name of this policy tag, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{id}".|
|parentPolicyTag|string|false|none|Resource name of this policy tag's parent policy tag (e.g. for the "LatLong" policy tag in the example above, this field contains the resource name of the "Geolocation" policy tag). If empty, it means this policy tag is a top level policy tag (e.g. this field is empty for the "Geolocation" policy tag in the example above). If not set, defaults to an empty string.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest">GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1renametagtemplatefieldenumvaluerequest"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldEnumValueRequest"></a>
<a id="tocSgoogleclouddatacatalogv1beta1renametagtemplatefieldenumvaluerequest"></a>
<a id="tocsgoogleclouddatacatalogv1beta1renametagtemplatefieldenumvaluerequest"></a>

```json
{
  "newEnumValueDisplayName": "string"
}
```

Request message for RenameTagTemplateFieldEnumValue.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newEnumValueDisplayName|string|false|none|Required. The new display name of the enum value. For example, `my_new_enum_value`.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest">GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1renametagtemplatefieldrequest"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest"></a>
<a id="tocSgoogleclouddatacatalogv1beta1renametagtemplatefieldrequest"></a>
<a id="tocsgoogleclouddatacatalogv1beta1renametagtemplatefieldrequest"></a>

```json
{
  "newTagTemplateFieldId": "string"
}
```

Request message for RenameTagTemplateField.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|newTagTemplateFieldId|string|false|none|Required. The new ID of this tag template field. For example, `my_new_field`.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1Schema">GoogleCloudDatacatalogV1beta1Schema</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1schema"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1Schema"></a>
<a id="tocSgoogleclouddatacatalogv1beta1schema"></a>
<a id="tocsgoogleclouddatacatalogv1beta1schema"></a>

```json
{
  "columns": [
    {
      "column": "string",
      "description": "string",
      "mode": "string",
      "subcolumns": [
        {}
      ],
      "type": "string"
    }
  ]
}
```

Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|columns|[[GoogleCloudDatacatalogV1beta1ColumnSchema](#schemagoogleclouddatacatalogv1beta1columnschema)]|false|none|Required. Schema of columns. A maximum of 10,000 columns and sub-columns can be specified.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1SearchCatalogRequest">GoogleCloudDatacatalogV1beta1SearchCatalogRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1searchcatalogrequest"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1SearchCatalogRequest"></a>
<a id="tocSgoogleclouddatacatalogv1beta1searchcatalogrequest"></a>
<a id="tocsgoogleclouddatacatalogv1beta1searchcatalogrequest"></a>

```json
{
  "orderBy": "string",
  "pageSize": 0,
  "pageToken": "string",
  "query": "string",
  "scope": {
    "includeGcpPublicDatasets": true,
    "includeOrgIds": [
      "string"
    ],
    "includeProjectIds": [
      "string"
    ],
    "restrictedLocations": [
      "string"
    ]
  }
}
```

Request message for SearchCatalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|orderBy|string|false|none|Specifies the ordering of results, currently supported case-sensitive choices are: * `relevance`, only supports descending * `last_modified_timestamp [asc\|desc]`, defaults to descending if not specified * `default` that can only be descending If not specified, defaults to `relevance` descending.|
|pageSize|integer(int32)|false|none|Number of results in the search page. If <=0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000.|
|pageToken|string|false|none|Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned.|
|query|string|false|none|Optional. The query string in search query syntax. An empty query string will result in all data assets (in the specified scope) that the user has access to. Query strings can be simple as "x" or more qualified as: * name:x * column:x * description:y Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.|
|scope|[GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope](#schemagoogleclouddatacatalogv1beta1searchcatalogrequestscope)|false|none|Required. The scope of this search request. A `scope` that has empty `include_org_ids`, `include_project_ids` AND false `include_gcp_public_datasets` is considered invalid. Data Catalog will return an error in such a case.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope">GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1searchcatalogrequestscope"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope"></a>
<a id="tocSgoogleclouddatacatalogv1beta1searchcatalogrequestscope"></a>
<a id="tocsgoogleclouddatacatalogv1beta1searchcatalogrequestscope"></a>

```json
{
  "includeGcpPublicDatasets": true,
  "includeOrgIds": [
    "string"
  ],
  "includeProjectIds": [
    "string"
  ],
  "restrictedLocations": [
    "string"
  ]
}
```

The criteria that select the subspace used for query matching.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|includeGcpPublicDatasets|boolean|false|none|If `true`, include Google Cloud public datasets in the search results. Info on Google Cloud public datasets is available at https://cloud.google.com/public-datasets/. By default, Google Cloud public datasets are excluded.|
|includeOrgIds|[string]|false|none|The list of organization IDs to search within. To find your organization ID, follow instructions in https://cloud.google.com/resource-manager/docs/creating-managing-organization.|
|includeProjectIds|[string]|false|none|The list of project IDs to search within. To learn more about the distinction between project names/IDs/numbers, go to https://cloud.google.com/docs/overview/#projects.|
|restrictedLocations|[string]|false|none|Optional. The list of locations to search within. 1. If empty, search will be performed in all locations; 2. If any of the locations are NOT in the valid locations list, error will be returned; 3. Otherwise, search only the given locations for matching results. Typical usage is to leave this field empty. When a location is unreachable as returned in the `SearchCatalogResponse.unreachable` field, users can repeat the search request with this parameter set to get additional information on the error. Valid locations: * asia-east1 * asia-east2 * asia-northeast1 * asia-northeast2 * asia-northeast3 * asia-south1 * asia-southeast1 * australia-southeast1 * eu * europe-north1 * europe-west1 * europe-west2 * europe-west3 * europe-west4 * europe-west6 * global * northamerica-northeast1 * southamerica-east1 * us * us-central1 * us-east1 * us-east4 * us-west1 * us-west2|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1SearchCatalogResponse">GoogleCloudDatacatalogV1beta1SearchCatalogResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1searchcatalogresponse"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1SearchCatalogResponse"></a>
<a id="tocSgoogleclouddatacatalogv1beta1searchcatalogresponse"></a>
<a id="tocsgoogleclouddatacatalogv1beta1searchcatalogresponse"></a>

```json
{
  "nextPageToken": "string",
  "results": [
    {
      "linkedResource": "string",
      "modifyTime": "string",
      "relativeResourceName": "string",
      "searchResultSubtype": "string",
      "searchResultType": "SEARCH_RESULT_TYPE_UNSPECIFIED"
    }
  ],
  "totalSize": 0,
  "unreachable": [
    "string"
  ]
}
```

Response message for SearchCatalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The token that can be used to retrieve the next page of results.|
|results|[[GoogleCloudDatacatalogV1beta1SearchCatalogResult](#schemagoogleclouddatacatalogv1beta1searchcatalogresult)]|false|none|Search results.|
|totalSize|integer(int32)|false|none|The approximate total number of entries matched by the query.|
|unreachable|[string]|false|none|Unreachable locations. Search result does not include data from those locations. Users can get additional information on the error by repeating the search request with a more restrictive parameter -- setting the value for `SearchDataCatalogRequest.scope.restricted_locations`.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1SearchCatalogResult">GoogleCloudDatacatalogV1beta1SearchCatalogResult</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1searchcatalogresult"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1SearchCatalogResult"></a>
<a id="tocSgoogleclouddatacatalogv1beta1searchcatalogresult"></a>
<a id="tocsgoogleclouddatacatalogv1beta1searchcatalogresult"></a>

```json
{
  "linkedResource": "string",
  "modifyTime": "string",
  "relativeResourceName": "string",
  "searchResultSubtype": "string",
  "searchResultType": "SEARCH_RESULT_TYPE_UNSPECIFIED"
}
```

A result that appears in the response of a search request. Each result captures details of one entry that matches the search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|linkedResource|string|false|none|The full name of the cloud resource the entry belongs to. See: https://cloud.google.com/apis/design/resource_names#full_resource_name. Example: * `//bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId`|
|modifyTime|string(google-datetime)|false|none|Last-modified timestamp of the entry from the managing system.|
|relativeResourceName|string|false|none|The relative resource name of the resource in URL format. Examples: * `projects/{project_id}/locations/{location_id}/entryGroups/{entry_group_id}/entries/{entry_id}` * `projects/{project_id}/tagTemplates/{tag_template_id}`|
|searchResultSubtype|string|false|none|Sub-type of the search result. This is a dot-delimited description of the resource's full type, and is the same as the value callers would provide in the "type" search facet. Examples: `entry.table`, `entry.dataStream`, `tagTemplate`.|
|searchResultType|string|false|none|Type of the search result. This field can be used to determine which Get method to call to fetch the full resource.|

#### Enumerated Values

|Property|Value|
|---|---|
|searchResultType|SEARCH_RESULT_TYPE_UNSPECIFIED|
|searchResultType|ENTRY|
|searchResultType|TAG_TEMPLATE|
|searchResultType|ENTRY_GROUP|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1SerializedPolicyTag">GoogleCloudDatacatalogV1beta1SerializedPolicyTag</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1serializedpolicytag"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1SerializedPolicyTag"></a>
<a id="tocSgoogleclouddatacatalogv1beta1serializedpolicytag"></a>
<a id="tocsgoogleclouddatacatalogv1beta1serializedpolicytag"></a>

```json
{
  "childPolicyTags": [
    {
      "childPolicyTags": [
        {}
      ],
      "description": "string",
      "displayName": "string",
      "policyTag": "string"
    }
  ],
  "description": "string",
  "displayName": "string",
  "policyTag": "string"
}
```

Message representing one policy tag when exported as a nested proto.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childPolicyTags|[[GoogleCloudDatacatalogV1beta1SerializedPolicyTag](#schemagoogleclouddatacatalogv1beta1serializedpolicytag)]|false|none|Children of the policy tag if any.|
|description|string|false|none|Description of the serialized policy tag. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.|
|displayName|string|false|none|Required. Display name of the policy tag. Max 200 bytes when encoded in UTF-8.|
|policyTag|string|false|none|Resource name of the policy tag. This field will be ignored when calling ImportTaxonomies.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1SerializedTaxonomy">GoogleCloudDatacatalogV1beta1SerializedTaxonomy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1serializedtaxonomy"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1SerializedTaxonomy"></a>
<a id="tocSgoogleclouddatacatalogv1beta1serializedtaxonomy"></a>
<a id="tocsgoogleclouddatacatalogv1beta1serializedtaxonomy"></a>

```json
{
  "activatedPolicyTypes": [
    "POLICY_TYPE_UNSPECIFIED"
  ],
  "description": "string",
  "displayName": "string",
  "policyTags": [
    {
      "childPolicyTags": [
        {}
      ],
      "description": "string",
      "displayName": "string",
      "policyTag": "string"
    }
  ]
}
```

Message capturing a taxonomy and its policy tag hierarchy as a nested proto. Used for taxonomy import/export and mutation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activatedPolicyTypes|[string]|false|none|A list of policy types that are activated for a taxonomy.|
|description|string|false|none|Description of the serialized taxonomy. The length of the description is limited to 2000 bytes when encoded in UTF-8. If not set, defaults to an empty description.|
|displayName|string|false|none|Required. Display name of the taxonomy. Max 200 bytes when encoded in UTF-8.|
|policyTags|[[GoogleCloudDatacatalogV1beta1SerializedPolicyTag](#schemagoogleclouddatacatalogv1beta1serializedpolicytag)]|false|none|Top level policy tags associated with the taxonomy if any.|

#### Enumerated Values

|Property|Value|
|---|---|
|activatedPolicyTypes|POLICY_TYPE_UNSPECIFIED|
|activatedPolicyTypes|FINE_GRAINED_ACCESS_CONTROL|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1SystemTimestamps">GoogleCloudDatacatalogV1beta1SystemTimestamps</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1systemtimestamps"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1SystemTimestamps"></a>
<a id="tocSgoogleclouddatacatalogv1beta1systemtimestamps"></a>
<a id="tocsgoogleclouddatacatalogv1beta1systemtimestamps"></a>

```json
{
  "createTime": "string",
  "expireTime": "string",
  "updateTime": "string"
}
```

Timestamps about this resource according to a particular system.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the resource within the given system.|
|expireTime|string(google-datetime)|false|read-only|Output only. The expiration time of the resource within the given system. Currently only apllicable to BigQuery resources.|
|updateTime|string(google-datetime)|false|none|The last-modified time of the resource within the given system.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1TableSpec">GoogleCloudDatacatalogV1beta1TableSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1tablespec"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1TableSpec"></a>
<a id="tocSgoogleclouddatacatalogv1beta1tablespec"></a>
<a id="tocsgoogleclouddatacatalogv1beta1tablespec"></a>

```json
{
  "groupedEntry": "string"
}
```

Normal BigQuery table spec.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groupedEntry|string|false|read-only|Output only. If the table is a dated shard, i.e., with name pattern `[prefix]YYYYMMDD`, `grouped_entry` is the Data Catalog resource name of the date sharded grouped entry, for example, `projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}`. Otherwise, `grouped_entry` is empty.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1Tag">GoogleCloudDatacatalogV1beta1Tag</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1tag"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1Tag"></a>
<a id="tocSgoogleclouddatacatalogv1beta1tag"></a>
<a id="tocsgoogleclouddatacatalogv1beta1tag"></a>

```json
{
  "column": "string",
  "fields": {
    "property1": {
      "boolValue": true,
      "displayName": "string",
      "doubleValue": 0,
      "enumValue": {
        "displayName": "string"
      },
      "order": 0,
      "stringValue": "string",
      "timestampValue": "string"
    },
    "property2": {
      "boolValue": true,
      "displayName": "string",
      "doubleValue": 0,
      "enumValue": {
        "displayName": "string"
      },
      "order": 0,
      "stringValue": "string",
      "timestampValue": "string"
    }
  },
  "name": "string",
  "template": "string",
  "templateDisplayName": "string"
}
```

Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|column|string|false|none|Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use `.` to separate the column names. Example: * `outer_column.inner_column`|
|fields|object|false|none|Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag's template. A tag must have at least 1 field and at most 500 fields.|
|name|string|false|none|The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where `tag_id` is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name.|
|template|string|false|none|Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation.|
|templateDisplayName|string|false|read-only|Output only. The display name of the tag template.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1TagField">GoogleCloudDatacatalogV1beta1TagField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1tagfield"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1TagField"></a>
<a id="tocSgoogleclouddatacatalogv1beta1tagfield"></a>
<a id="tocsgoogleclouddatacatalogv1beta1tagfield"></a>

```json
{
  "boolValue": true,
  "displayName": "string",
  "doubleValue": 0,
  "enumValue": {
    "displayName": "string"
  },
  "order": 0,
  "stringValue": "string",
  "timestampValue": "string"
}
```

Contains the value and supporting information for a field within a Tag.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boolValue|boolean|false|none|Holds the value for a tag field with boolean type.|
|displayName|string|false|read-only|Output only. The display name of this field.|
|doubleValue|number(double)|false|none|Holds the value for a tag field with double type.|
|enumValue|[GoogleCloudDatacatalogV1beta1TagFieldEnumValue](#schemagoogleclouddatacatalogv1beta1tagfieldenumvalue)|false|none|Holds the value for a tag field with enum type. This value must be one of the allowed values in the definition of this enum.|
|order|integer(int32)|false|read-only|Output only. The order of this field with respect to other fields in this tag. It can be set in Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.|
|stringValue|string|false|none|Holds the value for a tag field with string type.|
|timestampValue|string(google-datetime)|false|none|Holds the value for a tag field with timestamp type.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1TagFieldEnumValue">GoogleCloudDatacatalogV1beta1TagFieldEnumValue</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1tagfieldenumvalue"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1TagFieldEnumValue"></a>
<a id="tocSgoogleclouddatacatalogv1beta1tagfieldenumvalue"></a>
<a id="tocsgoogleclouddatacatalogv1beta1tagfieldenumvalue"></a>

```json
{
  "displayName": "string"
}
```

Holds an enum value.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name of the enum value.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1TagTemplate">GoogleCloudDatacatalogV1beta1TagTemplate</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1tagtemplate"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1TagTemplate"></a>
<a id="tocSgoogleclouddatacatalogv1beta1tagtemplate"></a>
<a id="tocsgoogleclouddatacatalogv1beta1tagtemplate"></a>

```json
{
  "displayName": "string",
  "fields": {
    "property1": {
      "description": "string",
      "displayName": "string",
      "isRequired": true,
      "name": "string",
      "order": 0,
      "type": {
        "enumType": {
          "allowedValues": [
            {
              "displayName": "string"
            }
          ]
        },
        "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
      }
    },
    "property2": {
      "description": "string",
      "displayName": "string",
      "isRequired": true,
      "name": "string",
      "order": 0,
      "type": {
        "enumType": {
          "allowedValues": [
            {
              "displayName": "string"
            }
          ]
        },
        "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
      }
    }
  },
  "name": "string"
}
```

A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to Google Cloud resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name for this template. Defaults to an empty string.|
|fields|object|false|none|Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. This map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9) and underscores (_). Field IDs must be at least 1 character long and at most 64 characters long. Field IDs must start with a letter or underscore.|
|name|string|false|none|The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1TagTemplateField">GoogleCloudDatacatalogV1beta1TagTemplateField</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1tagtemplatefield"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1TagTemplateField"></a>
<a id="tocSgoogleclouddatacatalogv1beta1tagtemplatefield"></a>
<a id="tocsgoogleclouddatacatalogv1beta1tagtemplatefield"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "isRequired": true,
  "name": "string",
  "order": 0,
  "type": {
    "enumType": {
      "allowedValues": [
        {
          "displayName": "string"
        }
      ]
    },
    "primitiveType": "PRIMITIVE_TYPE_UNSPECIFIED"
  }
}
```

The template for an individual field within a tag template.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description for this field. Defaults to an empty string.|
|displayName|string|false|none|The display name for this field. Defaults to an empty string.|
|isRequired|boolean|false|none|Whether this is a required field. Defaults to false.|
|name|string|false|read-only|Output only. The resource name of the tag template field in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template}/fields/{field} Note that this TagTemplateField may not actually be stored in the location in this name.|
|order|integer(int32)|false|none|The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential.|
|type|[GoogleCloudDatacatalogV1beta1FieldType](#schemagoogleclouddatacatalogv1beta1fieldtype)|false|none|Required. The type of value this tag field can contain.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1Taxonomy">GoogleCloudDatacatalogV1beta1Taxonomy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1taxonomy"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1Taxonomy"></a>
<a id="tocSgoogleclouddatacatalogv1beta1taxonomy"></a>
<a id="tocsgoogleclouddatacatalogv1beta1taxonomy"></a>

```json
{
  "activatedPolicyTypes": [
    "POLICY_TYPE_UNSPECIFIED"
  ],
  "description": "string",
  "displayName": "string",
  "name": "string",
  "policyTagCount": 0,
  "service": {
    "identity": "string",
    "name": "MANAGING_SYSTEM_UNSPECIFIED"
  },
  "taxonomyTimestamps": {
    "createTime": "string",
    "expireTime": "string",
    "updateTime": "string"
  }
}
```

A taxonomy is a collection of policy tags that classify data along a common axis. For instance a data *sensitivity* taxonomy could contain policy tags denoting PII such as age, zipcode, and SSN. A data *origin* taxonomy could contain policy tags to distinguish user data, employee data, partner data, public data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activatedPolicyTypes|[string]|false|none|Optional. A list of policy types that are activated for this taxonomy. If not set, defaults to an empty list.|
|description|string|false|none|Optional. Description of this taxonomy. It must: contain only unicode characters, tabs, newlines, carriage returns and page breaks; and be at most 2000 bytes long when encoded in UTF-8. If not set, defaults to an empty description.|
|displayName|string|false|none|Required. User defined name of this taxonomy. It must: contain only unicode letters, numbers, underscores, dashes and spaces; not start or end with spaces; and be at most 200 bytes long when encoded in UTF-8. The taxonomy display name must be unique within an organization.|
|name|string|false|read-only|Output only. Resource name of this taxonomy, whose format is: "projects/{project_number}/locations/{location_id}/taxonomies/{id}".|
|policyTagCount|integer(int32)|false|read-only|Output only. Number of policy tags contained in this taxonomy.|
|service|[GoogleCloudDatacatalogV1beta1TaxonomyService](#schemagoogleclouddatacatalogv1beta1taxonomyservice)|false|none|Output only. Identity of the service which owns the Taxonomy. This field is only populated when the taxonomy is created by a Google Cloud service. Currently only 'DATAPLEX' is supported.|
|taxonomyTimestamps|[GoogleCloudDatacatalogV1beta1SystemTimestamps](#schemagoogleclouddatacatalogv1beta1systemtimestamps)|false|none|Output only. Timestamps about this taxonomy. Only create_time and update_time are used.|

#### Enumerated Values

|Property|Value|
|---|---|
|activatedPolicyTypes|POLICY_TYPE_UNSPECIFIED|
|activatedPolicyTypes|FINE_GRAINED_ACCESS_CONTROL|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1TaxonomyService">GoogleCloudDatacatalogV1beta1TaxonomyService</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1taxonomyservice"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1TaxonomyService"></a>
<a id="tocSgoogleclouddatacatalogv1beta1taxonomyservice"></a>
<a id="tocsgoogleclouddatacatalogv1beta1taxonomyservice"></a>

```json
{
  "identity": "string",
  "name": "MANAGING_SYSTEM_UNSPECIFIED"
}
```

The source system of the Taxonomy.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identity|string|false|none|P4SA Identity of the service.|
|name|string|false|none|The Google Cloud service name.|

#### Enumerated Values

|Property|Value|
|---|---|
|name|MANAGING_SYSTEM_UNSPECIFIED|
|name|MANAGING_SYSTEM_DATAPLEX|
|name|MANAGING_SYSTEM_OTHER|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1UsageSignal">GoogleCloudDatacatalogV1beta1UsageSignal</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1usagesignal"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1UsageSignal"></a>
<a id="tocSgoogleclouddatacatalogv1beta1usagesignal"></a>
<a id="tocsgoogleclouddatacatalogv1beta1usagesignal"></a>

```json
{
  "updateTime": "string",
  "usageWithinTimeRange": {
    "property1": {
      "totalCancellations": 0,
      "totalCompletions": 0,
      "totalExecutionTimeForCompletionsMillis": 0,
      "totalFailures": 0
    },
    "property2": {
      "totalCancellations": 0,
      "totalCompletions": 0,
      "totalExecutionTimeForCompletionsMillis": 0,
      "totalFailures": 0
    }
  }
}
```

The set of all usage signals that we store in Data Catalog.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|updateTime|string(google-datetime)|false|none|The timestamp of the end of the usage statistics duration.|
|usageWithinTimeRange|object|false|none|Usage statistics over each of the pre-defined time ranges, supported strings for time ranges are {"24H", "7D", "30D"}.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1UsageStats">GoogleCloudDatacatalogV1beta1UsageStats</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1usagestats"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1UsageStats"></a>
<a id="tocSgoogleclouddatacatalogv1beta1usagestats"></a>
<a id="tocsgoogleclouddatacatalogv1beta1usagestats"></a>

```json
{
  "totalCancellations": 0,
  "totalCompletions": 0,
  "totalExecutionTimeForCompletionsMillis": 0,
  "totalFailures": 0
}
```

Detailed counts on the entry's usage. Caveats: - Only BigQuery tables have usage stats - The usage stats only include BigQuery query jobs - The usage stats might be underestimated, e.g. wildcard table references are not yet counted in usage computation https://cloud.google.com/bigquery/docs/querying-wildcard-tables

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totalCancellations|number(float)|false|none|The number of times that the underlying entry was attempted to be used but was cancelled by the user.|
|totalCompletions|number(float)|false|none|The number of times that the underlying entry was successfully used.|
|totalExecutionTimeForCompletionsMillis|number(float)|false|none|Total time spent (in milliseconds) during uses the resulted in completions.|
|totalFailures|number(float)|false|none|The number of times that the underlying entry was attempted to be used but failed.|

<h2 id="tocS_GoogleCloudDatacatalogV1beta1ViewSpec">GoogleCloudDatacatalogV1beta1ViewSpec</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclouddatacatalogv1beta1viewspec"></a>
<a id="schema_GoogleCloudDatacatalogV1beta1ViewSpec"></a>
<a id="tocSgoogleclouddatacatalogv1beta1viewspec"></a>
<a id="tocsgoogleclouddatacatalogv1beta1viewspec"></a>

```json
{
  "viewQuery": "string"
}
```

Table view specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|viewQuery|string|false|read-only|Output only. The query that defines the table view.|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "bindings": [
    {
      "condition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "members": [
        "string"
      ],
      "role": "string"
    }
  ],
  "etag": "string",
  "version": 0
}
```

An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] }, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", } } ], "etag": "BwWWja0YfJA=", "version": 3 } **YAML example:** bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bindings|[[Binding](#schemabinding)]|false|none|Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|

<h2 id="tocS_SetIamPolicyRequest">SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemasetiampolicyrequest"></a>
<a id="schema_SetIamPolicyRequest"></a>
<a id="tocSsetiampolicyrequest"></a>
<a id="tocssetiampolicyrequest"></a>

```json
{
  "policy": {
    "bindings": [
      {
        "condition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "members": [
          "string"
        ],
        "role": "string"
      }
    ],
    "etag": "string",
    "version": 0
  }
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[Policy](#schemapolicy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.|

<h2 id="tocS_Status">Status</h2>
<!-- backwards compatibility -->
<a id="schemastatus"></a>
<a id="schema_Status"></a>
<a id="tocSstatus"></a>
<a id="tocsstatus"></a>

```json
{
  "code": 0,
  "details": [
    {
      "property1": null,
      "property2": null
    }
  ],
  "message": "string"
}
```

The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details. There is a common set of message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_TestIamPermissionsRequest">TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsrequest"></a>
<a id="schema_TestIamPermissionsRequest"></a>
<a id="tocStestiampermissionsrequest"></a>
<a id="tocstestiampermissionsrequest"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Request message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_TestIamPermissionsResponse">TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schematestiampermissionsresponse"></a>
<a id="schema_TestIamPermissionsResponse"></a>
<a id="tocStestiampermissionsresponse"></a>
<a id="tocstestiampermissionsresponse"></a>

```json
{
  "permissions": [
    "string"
  ]
}
```

Response message for `TestIamPermissions` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is allowed.|
