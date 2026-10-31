<h1 id="retail-api">Retail API v2alpha</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Cloud Retail service enables customers to build end-to-end personalized recommendation systems without requiring a high level of expertise in machine learning, recommendation system, or Google Cloud.

Base URLs:

* <a href="https://retail.googleapis.com/">https://retail.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/recommendations">External documentation</a>

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

<h1 id="retail-api-projects">projects</h1>

## retail.projects.locations.catalogs.attributesConfig.addCatalogAttribute

<a id="opIdretail.projects.locations.catalogs.attributesConfig.addCatalogAttribute"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:addCatalogAttribute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "catalogAttribute": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED"
    }
  }'
```

`POST /v2alpha/{attributesConfig}:addCatalogAttribute`

Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.

> Body parameter

```json
{
  "catalogAttribute": {
    "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
    "key": "string",
    "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
    "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED"
  }
}
```

<h3 id="retailprojectslocationscatalogsattributesconfigaddcatalogattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributesConfig|path|string|true|Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`|
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
|body|body|[GoogleCloudRetailV2alphaAddCatalogAttributeRequest](#schemagooglecloudretailv2alphaaddcatalogattributerequest)|false|none|
|» catalogAttribute|body|[GoogleCloudRetailV2alphaCatalogAttribute](#schemagooglecloudretailv2alphacatalogattribute)|false|Required. The CatalogAttribute to add.|

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
  "attributeConfigLevel": "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
  "catalogAttributes": {
    "property1": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "inUse": true,
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
      "type": "UNKNOWN"
    },
    "property2": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "inUse": true,
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
      "type": "UNKNOWN"
    }
  },
  "name": "string"
}
```

<h3 id="retailprojectslocationscatalogsattributesconfigaddcatalogattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaAttributesConfig](#schemagooglecloudretailv2alphaattributesconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.attributesConfig.batchRemoveCatalogAttributes

<a id="opIdretail.projects.locations.catalogs.attributesConfig.batchRemoveCatalogAttributes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:batchRemoveCatalogAttributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributeKeys": [
      "string"
    ]
  }'
```

`POST /v2alpha/{attributesConfig}:batchRemoveCatalogAttributes`

Removes all specified CatalogAttributes from the AttributesConfig.

> Body parameter

```json
{
  "attributeKeys": [
    "string"
  ]
}
```

<h3 id="retailprojectslocationscatalogsattributesconfigbatchremovecatalogattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributesConfig|path|string|true|Required. The attributes config resource shared by all catalog attributes being deleted. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`|
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
|body|body|[GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest](#schemagooglecloudretailv2alphabatchremovecatalogattributesrequest)|false|none|
|» attributeKeys|body|[string]|false|Required. The attribute name keys of the CatalogAttributes to delete. A maximum of 1000 catalog attributes can be deleted in a batch.|

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
  "deletedCatalogAttributes": [
    "string"
  ],
  "resetCatalogAttributes": [
    "string"
  ]
}
```

<h3 id="retailprojectslocationscatalogsattributesconfigbatchremovecatalogattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse](#schemagooglecloudretailv2alphabatchremovecatalogattributesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.attributesConfig.removeCatalogAttribute

<a id="opIdretail.projects.locations.catalogs.attributesConfig.removeCatalogAttribute"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:removeCatalogAttribute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "key": "string"
  }'
```

`POST /v2alpha/{attributesConfig}:removeCatalogAttribute`

Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.

> Body parameter

```json
{
  "key": "string"
}
```

<h3 id="retailprojectslocationscatalogsattributesconfigremovecatalogattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributesConfig|path|string|true|Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`|
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
|body|body|[GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest](#schemagooglecloudretailv2alpharemovecatalogattributerequest)|false|none|
|» key|body|string|false|Required. The attribute name key of the CatalogAttribute to remove.|

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
  "attributeConfigLevel": "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
  "catalogAttributes": {
    "property1": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "inUse": true,
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
      "type": "UNKNOWN"
    },
    "property2": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "inUse": true,
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
      "type": "UNKNOWN"
    }
  },
  "name": "string"
}
```

<h3 id="retailprojectslocationscatalogsattributesconfigremovecatalogattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaAttributesConfig](#schemagooglecloudretailv2alphaattributesconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.attributesConfig.replaceCatalogAttribute

<a id="opIdretail.projects.locations.catalogs.attributesConfig.replaceCatalogAttribute"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:replaceCatalogAttribute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "catalogAttribute": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED"
    },
    "updateMask": "string"
  }'
```

`POST /v2alpha/{attributesConfig}:replaceCatalogAttribute`

Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.

> Body parameter

```json
{
  "catalogAttribute": {
    "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
    "key": "string",
    "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
    "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED"
  },
  "updateMask": "string"
}
```

<h3 id="retailprojectslocationscatalogsattributesconfigreplacecatalogattribute-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attributesConfig|path|string|true|Required. Full AttributesConfig resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/attributesConfig`|
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
|body|body|[GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest](#schemagooglecloudretailv2alphareplacecatalogattributerequest)|false|none|
|» catalogAttribute|body|[GoogleCloudRetailV2alphaCatalogAttribute](#schemagooglecloudretailv2alphacatalogattribute)|false|Required. The updated CatalogAttribute.|
|» updateMask|body|string(google-fieldmask)|false|Indicates which fields in the provided CatalogAttribute to update. The following are NOT supported: * CatalogAttribute.key If not set, all supported fields are updated.|

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
  "attributeConfigLevel": "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
  "catalogAttributes": {
    "property1": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "inUse": true,
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
      "type": "UNKNOWN"
    },
    "property2": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "inUse": true,
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
      "type": "UNKNOWN"
    }
  },
  "name": "string"
}
```

<h3 id="retailprojectslocationscatalogsattributesconfigreplacecatalogattribute-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaAttributesConfig](#schemagooglecloudretailv2alphaattributesconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.completeQuery

<a id="opIdretail.projects.locations.catalogs.completeQuery"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:completeQuery \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{catalog}:completeQuery`

Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

<h3 id="retailprojectslocationscatalogscompletequery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog|path|string|true|Required. Catalog for which the completion is performed. Full resource name of catalog, such as `projects/*/locations/global/catalogs/default_catalog`.|
|dataset|query|string|false|Determines which dataset to use for fetching completion. "user-data" will use the imported dataset through CompletionService.ImportCompletionData. "cloud-retail" will use the dataset generated by cloud retail based on user events. If leave empty, it will use the "user-data". Current supported values: * user-data * cloud-retail: This option requires enabling auto-learning function first. See [guidelines](https://cloud.google.com/retail/docs/completion-overview#generated-completion-dataset).|
|deviceType|query|string|false|The device type context for completion suggestions. We recommend that you leave this field empty. It can apply different suggestions on different device types, e.g. `DESKTOP`, `MOBILE`. If it is empty, the suggestions are across all device types. Supported formats: * `UNKNOWN_DEVICE_TYPE` * `DESKTOP` * `MOBILE` * A customized string starts with `OTHER_`, e.g. `OTHER_IPHONE`.|
|enableAttributeSuggestions|query|boolean|false|If true, attribute suggestions are enabled and provided in response. This field is only available for "cloud-retail" dataset.|
|entity|query|string|false|The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it should be exactly matched with UserEvent.entity to get per-entity autocomplete results.|
|languageCodes|query|[string]|false|Note that this field applies for `user-data` dataset only. For requests with `cloud-retail` dataset, setting this field has no effect. The language filters applied to the output suggestions. If set, it should contain the language of the query. If not set, suggestions are returned without considering language restrictions. This is the BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see [Tags for Identifying Languages](https://tools.ietf.org/html/bcp47). The maximum number of language codes is 3.|
|maxSuggestions|query|integer|false|Completion max suggestions. If left unset or set to 0, then will fallback to the configured value CompletionConfig.max_suggestions. The maximum allowed max suggestions is 20. If it is set higher, it will be capped by 20.|
|query|query|string|false|Required. The query used to generate suggestions. The maximum number of allowed characters is 255.|
|visitorId|query|string|false|Required field. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
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
  "attributeResults": {
    "property1": {
      "suggestions": [
        "string"
      ]
    },
    "property2": {
      "suggestions": [
        "string"
      ]
    }
  },
  "attributionToken": "string",
  "completionResults": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "facets": [
        {
          "dynamicFacet": true,
          "key": "string",
          "values": [
            {
              "count": "string",
              "interval": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              },
              "maxValue": 0,
              "minValue": 0,
              "value": "string"
            }
          ]
        }
      ],
      "suggestion": "string",
      "totalProductCount": 0
    }
  ],
  "recentSearchResults": [
    {
      "recentSearch": "string"
    }
  ]
}
```

<h3 id="retailprojectslocationscatalogscompletequery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaCompleteQueryResponse](#schemagooglecloudretailv2alphacompletequeryresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.getDefaultBranch

<a id="opIdretail.projects.locations.catalogs.getDefaultBranch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:getDefaultBranch \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{catalog}:getDefaultBranch`

Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.

<h3 id="retailprojectslocationscatalogsgetdefaultbranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog|path|string|true|The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`.|
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
  "branch": "string",
  "note": "string",
  "setTime": "string"
}
```

<h3 id="retailprojectslocationscatalogsgetdefaultbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaGetDefaultBranchResponse](#schemagooglecloudretailv2alphagetdefaultbranchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.setDefaultBranch

<a id="opIdretail.projects.locations.catalogs.setDefaultBranch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:setDefaultBranch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branchId": "string",
    "force": true,
    "note": "string"
  }'
```

`POST /v2alpha/{catalog}:setDefaultBranch`

Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.

> Body parameter

```json
{
  "branchId": "string",
  "force": true,
  "note": "string"
}
```

<h3 id="retailprojectslocationscatalogssetdefaultbranch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|catalog|path|string|true|Full resource name of the catalog, such as `projects/*/locations/global/catalogs/default_catalog`.|
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
|body|body|[GoogleCloudRetailV2alphaSetDefaultBranchRequest](#schemagooglecloudretailv2alphasetdefaultbranchrequest)|false|none|
|» branchId|body|string|false|The final component of the resource name of a branch. This field must be one of "0", "1" or "2". Otherwise, an INVALID_ARGUMENT error is returned. If there are no sufficient active products in the targeted branch and force is not set, a FAILED_PRECONDITION error is returned.|
|» force|body|boolean|false|If set to true, it permits switching to a branch with branch_id even if it has no sufficient active products.|
|» note|body|string|false|Some note on this request, this can be retrieved by CatalogService.GetDefaultBranch before next valid default branch set occurs. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.|

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

<h3 id="retailprojectslocationscatalogssetdefaultbranch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.operations.get

<a id="opIdretail.projects.operations.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{name}`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<h3 id="retailprojectsoperationsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource.|
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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectsoperationsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.merchantCenterAccountLinks.createMerchantCenterAccountLink

<a id="opIdretail.projects.locations.catalogs.merchantCenterAccountLinks.createMerchantCenterAccountLink"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "branchId": "string",
    "feedFilters": [
      {
        "primaryFeedId": "string",
        "primaryFeedName": "string"
      }
    ],
    "feedLabel": "string",
    "languageCode": "string",
    "merchantCenterAccountId": "string"
  }'
```

`POST /v2alpha/{name}`

Creates a MerchantCenterAccountLink. MerchantCenterAccountLink cannot be set to a different oneof field, if so an INVALID_ARGUMENT is returned.

> Body parameter

```json
{
  "branchId": "string",
  "feedFilters": [
    {
      "primaryFeedId": "string",
      "primaryFeedName": "string"
    }
  ],
  "feedLabel": "string",
  "languageCode": "string",
  "merchantCenterAccountId": "string"
}
```

<h3 id="retailprojectslocationscatalogsmerchantcenteraccountlinkscreatemerchantcenteraccountlink-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.|
|parent|query|string|false|Required. The branch resource where this MerchantCenterAccountLink will be created. Format: projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}}|
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
|body|body|[GoogleCloudRetailV2alphaMerchantCenterAccountLink](#schemagooglecloudretailv2alphamerchantcenteraccountlink)|false|none|
|» branchId|body|string|false|Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch id can only have one linked merchant center account id.|
|» feedFilters|body|[[GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter](#schemagooglecloudretailv2alphamerchantcenteraccountlinkmerchantcenterfeedfilter)]|false|Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.|
|» feedLabel|body|string|false|The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`.|
|» languageCode|body|string|false|Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`.|
|» merchantCenterAccountId|body|string(int64)|false|Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsmerchantcenteraccountlinkscreatemerchantcenteraccountlink-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.servingConfigs.delete

<a id="opIdretail.projects.locations.catalogs.servingConfigs.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v2alpha/{name}`

Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

<h3 id="retailprojectslocationscatalogsservingconfigsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the ServingConfig to delete. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`|
|force|query|boolean|false|This value only applies to the case when the target product is of type PRIMARY. When deleting a product of VARIANT/COLLECTION type, this value will be ignored. When set to true, the subsequent variant products will be deleted. When set to false, if the primary product has active variant products, an error will be returned.|
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

<h3 id="retailprojectslocationscatalogsservingconfigsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.servingConfigs.patch

<a id="opIdretail.projects.locations.catalogs.servingConfigs.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "boostControlIds": [
      "string"
    ],
    "displayName": "string",
    "diversityLevel": "string",
    "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
    "doNotAssociateControlIds": [
      "string"
    ],
    "dynamicFacetSpec": {
      "mode": "MODE_UNSPECIFIED"
    },
    "enableCategoryFilterLevel": "string",
    "facetControlIds": [
      "string"
    ],
    "filterControlIds": [
      "string"
    ],
    "ignoreControlIds": [
      "string"
    ],
    "modelId": "string",
    "name": "string",
    "onewaySynonymsControlIds": [
      "string"
    ],
    "personalizationSpec": {
      "mode": "MODE_UNSPECIFIED"
    },
    "priceRerankingLevel": "string",
    "redirectControlIds": [
      "string"
    ],
    "replacementControlIds": [
      "string"
    ],
    "solutionTypes": [
      "SOLUTION_TYPE_UNSPECIFIED"
    ],
    "twowaySynonymsControlIds": [
      "string"
    ]
  }'
```

`PATCH /v2alpha/{name}`

Updates a ServingConfig.

> Body parameter

```json
{
  "boostControlIds": [
    "string"
  ],
  "displayName": "string",
  "diversityLevel": "string",
  "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
  "doNotAssociateControlIds": [
    "string"
  ],
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "enableCategoryFilterLevel": "string",
  "facetControlIds": [
    "string"
  ],
  "filterControlIds": [
    "string"
  ],
  "ignoreControlIds": [
    "string"
  ],
  "modelId": "string",
  "name": "string",
  "onewaySynonymsControlIds": [
    "string"
  ],
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "priceRerankingLevel": "string",
  "redirectControlIds": [
    "string"
  ],
  "replacementControlIds": [
    "string"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ],
  "twowaySynonymsControlIds": [
    "string"
  ]
}
```

<h3 id="retailprojectslocationscatalogsservingconfigspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`|
|updateMask|query|string|false|Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.|
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
|body|body|[GoogleCloudRetailV2alphaServingConfig](#schemagooglecloudretailv2alphaservingconfig)|false|none|
|» boostControlIds|body|[string]|false|Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» displayName|body|string|false|Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
|» diversityLevel|body|string|false|How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|» diversityType|body|string|false|What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.|
|» doNotAssociateControlIds|body|[string]|false|Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» dynamicFacetSpec|body|[GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec](#schemagooglecloudretailv2alphasearchrequestdynamicfacetspec)|false|The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» enableCategoryFilterLevel|body|string|false|Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|» facetControlIds|body|[string]|false|Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» filterControlIds|body|[string]|false|Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» ignoreControlIds|body|[string]|false|Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» modelId|body|string|false|The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|» name|body|string|false|Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`|
|» onewaySynonymsControlIds|body|[string]|false|Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» personalizationSpec|body|[GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec](#schemagooglecloudretailv2alphasearchrequestpersonalizationspec)|false|The specification for personalization spec. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec.|
|» priceRerankingLevel|body|string|false|How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|» redirectControlIds|body|[string]|false|Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» replacementControlIds|body|[string]|false|Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» solutionTypes|body|[string]|false|Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.|
|» twowaySynonymsControlIds|body|[string]|false|Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» diversityType|DIVERSITY_TYPE_UNSPECIFIED|
|» diversityType|RULE_BASED_DIVERSITY|
|» diversityType|DATA_DRIVEN_DIVERSITY|
|» solutionTypes|SOLUTION_TYPE_UNSPECIFIED|
|» solutionTypes|SOLUTION_TYPE_RECOMMENDATION|
|» solutionTypes|SOLUTION_TYPE_SEARCH|

> Example responses

> 200 Response

```json
{
  "boostControlIds": [
    "string"
  ],
  "displayName": "string",
  "diversityLevel": "string",
  "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
  "doNotAssociateControlIds": [
    "string"
  ],
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "enableCategoryFilterLevel": "string",
  "facetControlIds": [
    "string"
  ],
  "filterControlIds": [
    "string"
  ],
  "ignoreControlIds": [
    "string"
  ],
  "modelId": "string",
  "name": "string",
  "onewaySynonymsControlIds": [
    "string"
  ],
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "priceRerankingLevel": "string",
  "redirectControlIds": [
    "string"
  ],
  "replacementControlIds": [
    "string"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ],
  "twowaySynonymsControlIds": [
    "string"
  ]
}
```

<h3 id="retailprojectslocationscatalogsservingconfigspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaServingConfig](#schemagooglecloudretailv2alphaservingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.operations.list

<a id="opIdretail.projects.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/operations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{name}/operations`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

<h3 id="retailprojectsoperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation's parent resource.|
|filter|query|string|false|The standard list filter.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
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
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

<h3 id="retailprojectsoperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.models.pause

<a id="opIdretail.projects.locations.catalogs.models.pause"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2alpha/{name}:pause`

Pauses the training of an existing model.

> Body parameter

```json
{}
```

<h3 id="retailprojectslocationscatalogsmodelspause-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the model to pause. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|
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
|body|body|[GoogleCloudRetailV2alphaPauseModelRequest](#schemagooglecloudretailv2alphapausemodelrequest)|false|none|

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
  "createTime": "string",
  "dataState": "DATA_STATE_UNSPECIFIED",
  "displayName": "string",
  "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
  "lastTuneTime": "string",
  "name": "string",
  "optimizationObjective": "string",
  "pageOptimizationConfig": {
    "pageOptimizationEventType": "string",
    "panels": [
      {
        "candidates": [
          {
            "servingConfigId": "string"
          }
        ],
        "defaultCandidate": {
          "servingConfigId": "string"
        },
        "displayName": "string"
      }
    ],
    "restriction": "RESTRICTION_UNSPECIFIED"
  },
  "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
  "servingConfigLists": [
    {
      "servingConfigIds": [
        "string"
      ]
    }
  ],
  "servingState": "SERVING_STATE_UNSPECIFIED",
  "trainingState": "TRAINING_STATE_UNSPECIFIED",
  "tuningOperation": "string",
  "type": "string",
  "updateTime": "string"
}
```

<h3 id="retailprojectslocationscatalogsmodelspause-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaModel](#schemagooglecloudretailv2alphamodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.models.resume

<a id="opIdretail.projects.locations.catalogs.models.resume"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:resume \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2alpha/{name}:resume`

Resumes the training of an existing model.

> Body parameter

```json
{}
```

<h3 id="retailprojectslocationscatalogsmodelsresume-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the model to resume. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|
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
|body|body|[GoogleCloudRetailV2alphaResumeModelRequest](#schemagooglecloudretailv2alpharesumemodelrequest)|false|none|

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
  "createTime": "string",
  "dataState": "DATA_STATE_UNSPECIFIED",
  "displayName": "string",
  "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
  "lastTuneTime": "string",
  "name": "string",
  "optimizationObjective": "string",
  "pageOptimizationConfig": {
    "pageOptimizationEventType": "string",
    "panels": [
      {
        "candidates": [
          {
            "servingConfigId": "string"
          }
        ],
        "defaultCandidate": {
          "servingConfigId": "string"
        },
        "displayName": "string"
      }
    ],
    "restriction": "RESTRICTION_UNSPECIFIED"
  },
  "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
  "servingConfigLists": [
    {
      "servingConfigIds": [
        "string"
      ]
    }
  ],
  "servingState": "SERVING_STATE_UNSPECIFIED",
  "trainingState": "TRAINING_STATE_UNSPECIFIED",
  "tuningOperation": "string",
  "type": "string",
  "updateTime": "string"
}
```

<h3 id="retailprojectslocationscatalogsmodelsresume-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaModel](#schemagooglecloudretailv2alphamodel)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.setInventory

<a id="opIdretail.projects.locations.catalogs.branches.products.setInventory"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:setInventory \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowMissing": true,
    "inventory": {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "audience": {
        "ageGroups": [
          "string"
        ],
        "genders": [
          "string"
        ]
      },
      "availability": "AVAILABILITY_UNSPECIFIED",
      "availableQuantity": 0,
      "availableTime": "string",
      "brands": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "collectionMemberIds": [
        "string"
      ],
      "colorInfo": {
        "colorFamilies": [
          "string"
        ],
        "colors": [
          "string"
        ]
      },
      "conditions": [
        "string"
      ],
      "description": "string",
      "expireTime": "string",
      "fulfillmentInfo": [
        {
          "placeIds": [
            "string"
          ],
          "type": "string"
        }
      ],
      "gtin": "string",
      "id": "string",
      "images": [
        {
          "height": 0,
          "uri": "string",
          "width": 0
        }
      ],
      "languageCode": "string",
      "materials": [
        "string"
      ],
      "name": "string",
      "patterns": [
        "string"
      ],
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string"
      },
      "primaryProductId": "string",
      "promotions": [
        {
          "promotionId": "string"
        }
      ],
      "publishTime": "string",
      "rating": {
        "averageRating": 0,
        "ratingCount": 0,
        "ratingHistogram": [
          0
        ]
      },
      "retrievableFields": "string",
      "sizes": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "title": "string",
      "ttl": "string",
      "type": "TYPE_UNSPECIFIED",
      "uri": "string"
    },
    "setMask": "string",
    "setTime": "string"
  }'
```

`POST /v2alpha/{name}:setInventory`

Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete.

> Body parameter

```json
{
  "allowMissing": true,
  "inventory": {
    "attributes": {
      "property1": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      },
      "property2": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      }
    },
    "audience": {
      "ageGroups": [
        "string"
      ],
      "genders": [
        "string"
      ]
    },
    "availability": "AVAILABILITY_UNSPECIFIED",
    "availableQuantity": 0,
    "availableTime": "string",
    "brands": [
      "string"
    ],
    "categories": [
      "string"
    ],
    "collectionMemberIds": [
      "string"
    ],
    "colorInfo": {
      "colorFamilies": [
        "string"
      ],
      "colors": [
        "string"
      ]
    },
    "conditions": [
      "string"
    ],
    "description": "string",
    "expireTime": "string",
    "fulfillmentInfo": [
      {
        "placeIds": [
          "string"
        ],
        "type": "string"
      }
    ],
    "gtin": "string",
    "id": "string",
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "languageCode": "string",
    "materials": [
      "string"
    ],
    "name": "string",
    "patterns": [
      "string"
    ],
    "priceInfo": {
      "cost": 0,
      "currencyCode": "string",
      "originalPrice": 0,
      "price": 0,
      "priceEffectiveTime": "string",
      "priceExpireTime": "string"
    },
    "primaryProductId": "string",
    "promotions": [
      {
        "promotionId": "string"
      }
    ],
    "publishTime": "string",
    "rating": {
      "averageRating": 0,
      "ratingCount": 0,
      "ratingHistogram": [
        0
      ]
    },
    "retrievableFields": "string",
    "sizes": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "title": "string",
    "ttl": "string",
    "type": "TYPE_UNSPECIFIED",
    "uri": "string"
  },
  "setMask": "string",
  "setTime": "string"
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductssetinventory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Immutable. Full resource name of the product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.|
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
|body|body|[GoogleCloudRetailV2alphaSetInventoryRequest](#schemagooglecloudretailv2alphasetinventoryrequest)|false|none|
|» allowMissing|body|boolean|false|If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|» inventory|body|[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)|false|Required. The inventory information to update. The allowable fields to update are: * Product.price_info * Product.availability * Product.available_quantity * Product.fulfillment_info The updated inventory fields must be specified in SetInventoryRequest.set_mask. If SetInventoryRequest.inventory.name is empty or invalid, an INVALID_ARGUMENT error is returned. If the caller does not have permission to update the Product named in Product.name, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Product to update does not have existing inventory information, the provided inventory information will be inserted. If the Product to update has existing inventory information, the provided inventory information will be merged while respecting the last update time for each inventory field, using the provided or default value for SetInventoryRequest.set_time. The caller can replace place IDs for a subset of fulfillment types in the following ways: * Adds "fulfillment_info" in SetInventoryRequest.set_mask * Specifies only the desired fulfillment types and corresponding place IDs to update in SetInventoryRequest.inventory.fulfillment_info The caller can clear all place IDs from a subset of fulfillment types in the following ways: * Adds "fulfillment_info" in SetInventoryRequest.set_mask * Specifies only the desired fulfillment types to clear in SetInventoryRequest.inventory.fulfillment_info * Checks that only the desired fulfillment info types have empty SetInventoryRequest.inventory.fulfillment_info.place_ids The last update time is recorded for the following inventory fields: * Product.price_info * Product.availability * Product.available_quantity * Product.fulfillment_info If a full overwrite of inventory information while ignoring timestamps is needed, ProductService.UpdateProduct should be invoked instead.|
|» setMask|body|string(google-fieldmask)|false|Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.|
|» setTime|body|string(google-datetime)|false|The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductssetinventory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.models.tune

<a id="opIdretail.projects.locations.catalogs.models.tune"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:tune \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v2alpha/{name}:tune`

Tunes an existing model.

> Body parameter

```json
{}
```

<h3 id="retailprojectslocationscatalogsmodelstune-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the model to tune. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|
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
|body|body|[GoogleCloudRetailV2alphaTuneModelRequest](#schemagooglecloudretailv2alphatunemodelrequest)|false|none|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsmodelstune-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.list

<a id="opIdretail.projects.locations.catalogs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/catalogs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{parent}/catalogs`

Lists all the Catalogs associated with the project.

<h3 id="retailprojectslocationscatalogslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The account resource name with an associated location. If the caller does not have permission to list Catalogs under this location, regardless of whether or not this location exists, a PERMISSION_DENIED error is returned.|
|pageSize|query|integer|false|Maximum number of Catalogs to return. If unspecified, defaults to 50. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT is returned.|
|pageToken|query|string|false|A page token ListCatalogsResponse.next_page_token, received from a previous CatalogService.ListCatalogs call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CatalogService.ListCatalogs must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.|
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
  "catalogs": [
    {
      "displayName": "string",
      "merchantCenterLinkingConfig": {
        "links": [
          {
            "branchId": "string",
            "destinations": [
              "string"
            ],
            "feeds": [
              {
                "primaryFeedId": "string",
                "primaryFeedName": "string"
              }
            ],
            "languageCode": "string",
            "merchantCenterAccountId": "string",
            "regionCode": "string"
          }
        ]
      },
      "name": "string",
      "productLevelConfig": {
        "ingestionProductType": "string",
        "merchantCenterProductIdField": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="retailprojectslocationscatalogslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaListCatalogsResponse](#schemagooglecloudretailv2alphalistcatalogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.completionData.import

<a id="opIdretail.projects.locations.catalogs.completionData.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/completionData:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "inputConfig": {
      "bigQuerySource": {
        "dataSchema": "string",
        "datasetId": "string",
        "gcsStagingDir": "string",
        "partitionDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "projectId": "string",
        "tableId": "string"
      }
    },
    "notificationPubsubTopic": "string"
  }'
```

`POST /v2alpha/{parent}/completionData:import`

Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

> Body parameter

```json
{
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    }
  },
  "notificationPubsubTopic": "string"
}
```

<h3 id="retailprojectslocationscatalogscompletiondataimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The catalog which the suggestions dataset belongs to. Format: `projects/1234/locations/global/catalogs/default_catalog`.|
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
|body|body|[GoogleCloudRetailV2alphaImportCompletionDataRequest](#schemagooglecloudretailv2alphaimportcompletiondatarequest)|false|none|
|» inputConfig|body|[GoogleCloudRetailV2alphaCompletionDataInputConfig](#schemagooglecloudretailv2alphacompletiondatainputconfig)|false|Required. The desired input location of the data.|
|» notificationPubsubTopic|body|string|false|Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogscompletiondataimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.controls.list

<a id="opIdretail.projects.locations.catalogs.controls.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/controls \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{parent}/controls`

Lists all Controls by their parent Catalog.

<h3 id="retailprojectslocationscatalogscontrolslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`|
|filter|query|string|false|Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List controls that are used in a single ServingConfig: 'serving_config = "boosted_home_page_cvr"'|
|pageSize|query|integer|false|Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page.|
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
  "controls": [
    {
      "associatedServingConfigIds": [
        "string"
      ],
      "displayName": "string",
      "facetSpec": {
        "enableDynamicPosition": true,
        "excludedFilterKeys": [
          "string"
        ],
        "facetKey": {
          "caseInsensitive": true,
          "contains": [
            "string"
          ],
          "intervals": [
            {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          ],
          "key": "string",
          "orderBy": "string",
          "prefixes": [
            "string"
          ],
          "query": "string",
          "restrictedValues": [
            "string"
          ],
          "returnMinMax": true
        },
        "limit": 0
      },
      "name": "string",
      "rule": {
        "boostAction": {
          "boost": 0,
          "productsFilter": "string"
        },
        "condition": {
          "activeTimeRange": [
            {
              "endTime": "string",
              "startTime": "string"
            }
          ],
          "queryTerms": [
            {
              "fullMatch": true,
              "value": "string"
            }
          ]
        },
        "doNotAssociateAction": {
          "doNotAssociateTerms": [
            "string"
          ],
          "queryTerms": [
            "string"
          ],
          "terms": [
            "string"
          ]
        },
        "filterAction": {
          "filter": "string"
        },
        "ignoreAction": {
          "ignoreTerms": [
            "string"
          ]
        },
        "onewaySynonymsAction": {
          "onewayTerms": [
            "string"
          ],
          "queryTerms": [
            "string"
          ],
          "synonyms": [
            "string"
          ]
        },
        "redirectAction": {
          "redirectUri": "string"
        },
        "replacementAction": {
          "queryTerms": [
            "string"
          ],
          "replacementTerm": "string",
          "term": "string"
        },
        "twowaySynonymsAction": {
          "synonyms": [
            "string"
          ]
        }
      },
      "searchSolutionUseCase": [
        "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
      ],
      "solutionTypes": [
        "SOLUTION_TYPE_UNSPECIFIED"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="retailprojectslocationscatalogscontrolslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaListControlsResponse](#schemagooglecloudretailv2alphalistcontrolsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.controls.create

<a id="opIdretail.projects.locations.catalogs.controls.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/controls \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "facetSpec": {
      "enableDynamicPosition": true,
      "excludedFilterKeys": [
        "string"
      ],
      "facetKey": {
        "caseInsensitive": true,
        "contains": [
          "string"
        ],
        "intervals": [
          {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        ],
        "key": "string",
        "orderBy": "string",
        "prefixes": [
          "string"
        ],
        "query": "string",
        "restrictedValues": [
          "string"
        ],
        "returnMinMax": true
      },
      "limit": 0
    },
    "name": "string",
    "rule": {
      "boostAction": {
        "boost": 0,
        "productsFilter": "string"
      },
      "condition": {
        "activeTimeRange": [
          {
            "endTime": "string",
            "startTime": "string"
          }
        ],
        "queryTerms": [
          {
            "fullMatch": true,
            "value": "string"
          }
        ]
      },
      "doNotAssociateAction": {
        "doNotAssociateTerms": [
          "string"
        ],
        "queryTerms": [
          "string"
        ],
        "terms": [
          "string"
        ]
      },
      "filterAction": {
        "filter": "string"
      },
      "ignoreAction": {
        "ignoreTerms": [
          "string"
        ]
      },
      "onewaySynonymsAction": {
        "onewayTerms": [
          "string"
        ],
        "queryTerms": [
          "string"
        ],
        "synonyms": [
          "string"
        ]
      },
      "redirectAction": {
        "redirectUri": "string"
      },
      "replacementAction": {
        "queryTerms": [
          "string"
        ],
        "replacementTerm": "string",
        "term": "string"
      },
      "twowaySynonymsAction": {
        "synonyms": [
          "string"
        ]
      }
    },
    "searchSolutionUseCase": [
      "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
    ],
    "solutionTypes": [
      "SOLUTION_TYPE_UNSPECIFIED"
    ]
  }'
```

`POST /v2alpha/{parent}/controls`

Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.

> Body parameter

```json
{
  "displayName": "string",
  "facetSpec": {
    "enableDynamicPosition": true,
    "excludedFilterKeys": [
      "string"
    ],
    "facetKey": {
      "caseInsensitive": true,
      "contains": [
        "string"
      ],
      "intervals": [
        {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        }
      ],
      "key": "string",
      "orderBy": "string",
      "prefixes": [
        "string"
      ],
      "query": "string",
      "restrictedValues": [
        "string"
      ],
      "returnMinMax": true
    },
    "limit": 0
  },
  "name": "string",
  "rule": {
    "boostAction": {
      "boost": 0,
      "productsFilter": "string"
    },
    "condition": {
      "activeTimeRange": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "queryTerms": [
        {
          "fullMatch": true,
          "value": "string"
        }
      ]
    },
    "doNotAssociateAction": {
      "doNotAssociateTerms": [
        "string"
      ],
      "queryTerms": [
        "string"
      ],
      "terms": [
        "string"
      ]
    },
    "filterAction": {
      "filter": "string"
    },
    "ignoreAction": {
      "ignoreTerms": [
        "string"
      ]
    },
    "onewaySynonymsAction": {
      "onewayTerms": [
        "string"
      ],
      "queryTerms": [
        "string"
      ],
      "synonyms": [
        "string"
      ]
    },
    "redirectAction": {
      "redirectUri": "string"
    },
    "replacementAction": {
      "queryTerms": [
        "string"
      ],
      "replacementTerm": "string",
      "term": "string"
    },
    "twowaySynonymsAction": {
      "synonyms": [
        "string"
      ]
    }
  },
  "searchSolutionUseCase": [
    "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ]
}
```

<h3 id="retailprojectslocationscatalogscontrolscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Full resource name of parent catalog. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`|
|controlId|query|string|false|Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/.|
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
|body|body|[GoogleCloudRetailV2alphaControl](#schemagooglecloudretailv2alphacontrol)|false|none|
|» displayName|body|string|false|Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown.|
|» facetSpec|body|[GoogleCloudRetailV2alphaSearchRequestFacetSpec](#schemagooglecloudretailv2alphasearchrequestfacetspec)|false|A facet specification to perform faceted search. Note that this field is deprecated and will throw NOT_IMPLEMENTED if used for creating a control.|
|» name|body|string|false|Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/controls/*`|
|» rule|body|[GoogleCloudRetailV2alphaRule](#schemagooglecloudretailv2alpharule)|false|A rule control - a condition-action pair. Enacts a set action when the condition is triggered. For example: Boost "gShoe" when query full matches "Running Shoes".|
|» searchSolutionUseCase|body|[string]|false|Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control.|
|» solutionTypes|body|[string]|false|Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» searchSolutionUseCase|SEARCH_SOLUTION_USE_CASE_UNSPECIFIED|
|» searchSolutionUseCase|SEARCH_SOLUTION_USE_CASE_SEARCH|
|» searchSolutionUseCase|SEARCH_SOLUTION_USE_CASE_BROWSE|
|» solutionTypes|SOLUTION_TYPE_UNSPECIFIED|
|» solutionTypes|SOLUTION_TYPE_RECOMMENDATION|
|» solutionTypes|SOLUTION_TYPE_SEARCH|

> Example responses

> 200 Response

```json
{
  "associatedServingConfigIds": [
    "string"
  ],
  "displayName": "string",
  "facetSpec": {
    "enableDynamicPosition": true,
    "excludedFilterKeys": [
      "string"
    ],
    "facetKey": {
      "caseInsensitive": true,
      "contains": [
        "string"
      ],
      "intervals": [
        {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        }
      ],
      "key": "string",
      "orderBy": "string",
      "prefixes": [
        "string"
      ],
      "query": "string",
      "restrictedValues": [
        "string"
      ],
      "returnMinMax": true
    },
    "limit": 0
  },
  "name": "string",
  "rule": {
    "boostAction": {
      "boost": 0,
      "productsFilter": "string"
    },
    "condition": {
      "activeTimeRange": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "queryTerms": [
        {
          "fullMatch": true,
          "value": "string"
        }
      ]
    },
    "doNotAssociateAction": {
      "doNotAssociateTerms": [
        "string"
      ],
      "queryTerms": [
        "string"
      ],
      "terms": [
        "string"
      ]
    },
    "filterAction": {
      "filter": "string"
    },
    "ignoreAction": {
      "ignoreTerms": [
        "string"
      ]
    },
    "onewaySynonymsAction": {
      "onewayTerms": [
        "string"
      ],
      "queryTerms": [
        "string"
      ],
      "synonyms": [
        "string"
      ]
    },
    "redirectAction": {
      "redirectUri": "string"
    },
    "replacementAction": {
      "queryTerms": [
        "string"
      ],
      "replacementTerm": "string",
      "term": "string"
    },
    "twowaySynonymsAction": {
      "synonyms": [
        "string"
      ]
    }
  },
  "searchSolutionUseCase": [
    "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ]
}
```

<h3 id="retailprojectslocationscatalogscontrolscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaControl](#schemagooglecloudretailv2alphacontrol)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.merchantCenterAccountLinks.list

<a id="opIdretail.projects.locations.catalogs.merchantCenterAccountLinks.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/merchantCenterAccountLinks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{parent}/merchantCenterAccountLinks`

Lists all MerchantCenterAccountLinks under the specified parent Catalog.

<h3 id="retailprojectslocationscatalogsmerchantcenteraccountlinkslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent Catalog of the resource. It must match this format: projects/{PROJECT_NUMBER}/locations/global/catalogs/{CATALOG_ID}|
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
  "merchantCenterAccountLinks": [
    {
      "branchId": "string",
      "feedFilters": [
        {
          "primaryFeedId": "string",
          "primaryFeedName": "string"
        }
      ],
      "feedLabel": "string",
      "id": "string",
      "languageCode": "string",
      "merchantCenterAccountId": "string",
      "name": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

<h3 id="retailprojectslocationscatalogsmerchantcenteraccountlinkslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse](#schemagooglecloudretailv2alphalistmerchantcenteraccountlinksresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.models.list

<a id="opIdretail.projects.locations.catalogs.models.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/models \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{parent}/models`

Lists all the models linked to this event store.

<h3 id="retailprojectslocationscatalogsmodelslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent for which to list models. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`|
|pageSize|query|integer|false|Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListModels` call. Provide this to retrieve the subsequent page.|
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
  "models": [
    {
      "createTime": "string",
      "dataState": "DATA_STATE_UNSPECIFIED",
      "displayName": "string",
      "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "lastTuneTime": "string",
      "name": "string",
      "optimizationObjective": "string",
      "pageOptimizationConfig": {
        "pageOptimizationEventType": "string",
        "panels": [
          {
            "candidates": [
              {
                "servingConfigId": "string"
              }
            ],
            "defaultCandidate": {
              "servingConfigId": "string"
            },
            "displayName": "string"
          }
        ],
        "restriction": "RESTRICTION_UNSPECIFIED"
      },
      "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
      "servingConfigLists": [
        {
          "servingConfigIds": [
            "string"
          ]
        }
      ],
      "servingState": "SERVING_STATE_UNSPECIFIED",
      "trainingState": "TRAINING_STATE_UNSPECIFIED",
      "tuningOperation": "string",
      "type": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="retailprojectslocationscatalogsmodelslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaListModelsResponse](#schemagooglecloudretailv2alphalistmodelsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.models.create

<a id="opIdretail.projects.locations.catalogs.models.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/models \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "displayName": "string",
    "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    "name": "string",
    "optimizationObjective": "string",
    "pageOptimizationConfig": {
      "pageOptimizationEventType": "string",
      "panels": [
        {
          "candidates": [
            {
              "servingConfigId": "string"
            }
          ],
          "defaultCandidate": {
            "servingConfigId": "string"
          },
          "displayName": "string"
        }
      ],
      "restriction": "RESTRICTION_UNSPECIFIED"
    },
    "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
    "trainingState": "TRAINING_STATE_UNSPECIFIED",
    "type": "string"
  }'
```

`POST /v2alpha/{parent}/models`

Creates a new model.

> Body parameter

```json
{
  "displayName": "string",
  "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
  "name": "string",
  "optimizationObjective": "string",
  "pageOptimizationConfig": {
    "pageOptimizationEventType": "string",
    "panels": [
      {
        "candidates": [
          {
            "servingConfigId": "string"
          }
        ],
        "defaultCandidate": {
          "servingConfigId": "string"
        },
        "displayName": "string"
      }
    ],
    "restriction": "RESTRICTION_UNSPECIFIED"
  },
  "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
  "trainingState": "TRAINING_STATE_UNSPECIFIED",
  "type": "string"
}
```

<h3 id="retailprojectslocationscatalogsmodelscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent resource under which to create the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`|
|dryRun|query|boolean|false|Optional. Whether to run a dry run to validate the request (without actually creating the model).|
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
|body|body|[GoogleCloudRetailV2alphaModel](#schemagooglecloudretailv2alphamodel)|false|none|
|» displayName|body|string|false|Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.|
|» filteringOption|body|string|false|Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.|
|» name|body|string|false|Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.|
|» optimizationObjective|body|string|false|Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.|
|» pageOptimizationConfig|body|[GoogleCloudRetailV2alphaModelPageOptimizationConfig](#schemagooglecloudretailv2alphamodelpageoptimizationconfig)|false|Optional. The page optimization config.|
|» periodicTuningState|body|string|false|Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.|
|» trainingState|body|string|false|Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.|
|» type|body|string|false|Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» filteringOption|RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED|
|» filteringOption|RECOMMENDATIONS_FILTERING_DISABLED|
|» filteringOption|RECOMMENDATIONS_FILTERING_ENABLED|
|» periodicTuningState|PERIODIC_TUNING_STATE_UNSPECIFIED|
|» periodicTuningState|PERIODIC_TUNING_DISABLED|
|» periodicTuningState|ALL_TUNING_DISABLED|
|» periodicTuningState|PERIODIC_TUNING_ENABLED|
|» trainingState|TRAINING_STATE_UNSPECIFIED|
|» trainingState|PAUSED|
|» trainingState|TRAINING|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsmodelscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.list

<a id="opIdretail.projects.locations.catalogs.branches.products.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/products \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{parent}/products`

Gets a list of Products.

<h3 id="retailprojectslocationscatalogsbranchesproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch. If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.|
|filter|query|string|false|A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. * List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = "some_product_id"` * List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = "some_product_id"` * List Products with a partibular type. For example: `type = "PRIMARY"` `type = "VARIANT"` `type = "COLLECTION"` If the field is unrecognizable, an INVALID_ARGUMENT error is returned. If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT_FOUND error is returned.|
|pageSize|query|integer|false|Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.|
|pageToken|query|string|false|A page token ListProductsResponse.next_page_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.|
|readMask|query|string|false|The fields of Product to return in the responses. If not set or empty, the following fields are returned: * Product.name * Product.id * Product.title * Product.uri * Product.images * Product.price_info * Product.brands If "*" is provided, all fields are returned. Product.name is always returned no matter what mask is set. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.|
|requireTotalSize|query|boolean|false|If true and page_token is empty, ListProductsResponse.total_size is set to the total count of matched items irrespective of pagination. Notice that setting this field to true affects the performance.|
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
  "products": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "audience": {
        "ageGroups": [
          "string"
        ],
        "genders": [
          "string"
        ]
      },
      "availability": "AVAILABILITY_UNSPECIFIED",
      "availableQuantity": 0,
      "availableTime": "string",
      "brands": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "collectionMemberIds": [
        "string"
      ],
      "colorInfo": {
        "colorFamilies": [
          "string"
        ],
        "colors": [
          "string"
        ]
      },
      "conditions": [
        "string"
      ],
      "description": "string",
      "expireTime": "string",
      "fulfillmentInfo": [
        {
          "placeIds": [
            "string"
          ],
          "type": "string"
        }
      ],
      "gtin": "string",
      "id": "string",
      "images": [
        {
          "height": 0,
          "uri": "string",
          "width": 0
        }
      ],
      "languageCode": "string",
      "localInventories": [
        {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "fulfillmentTypes": [
            "string"
          ],
          "placeId": "string",
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string",
            "priceRange": {
              "originalPrice": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              },
              "price": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              }
            }
          }
        }
      ],
      "materials": [
        "string"
      ],
      "name": "string",
      "patterns": [
        "string"
      ],
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string",
        "priceRange": {
          "originalPrice": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "price": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        }
      },
      "primaryProductId": "string",
      "promotions": [
        {
          "promotionId": "string"
        }
      ],
      "publishTime": "string",
      "rating": {
        "averageRating": 0,
        "ratingCount": 0,
        "ratingHistogram": [
          0
        ]
      },
      "retrievableFields": "string",
      "sizes": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "title": "string",
      "ttl": "string",
      "type": "TYPE_UNSPECIFIED",
      "uri": "string",
      "variants": [
        {}
      ]
    }
  ],
  "totalSize": 0
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaListProductsResponse](#schemagooglecloudretailv2alphalistproductsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.create

<a id="opIdretail.projects.locations.catalogs.branches.products.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {
      "property1": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      },
      "property2": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      }
    },
    "audience": {
      "ageGroups": [
        "string"
      ],
      "genders": [
        "string"
      ]
    },
    "availability": "AVAILABILITY_UNSPECIFIED",
    "availableQuantity": 0,
    "availableTime": "string",
    "brands": [
      "string"
    ],
    "categories": [
      "string"
    ],
    "collectionMemberIds": [
      "string"
    ],
    "colorInfo": {
      "colorFamilies": [
        "string"
      ],
      "colors": [
        "string"
      ]
    },
    "conditions": [
      "string"
    ],
    "description": "string",
    "expireTime": "string",
    "fulfillmentInfo": [
      {
        "placeIds": [
          "string"
        ],
        "type": "string"
      }
    ],
    "gtin": "string",
    "id": "string",
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "languageCode": "string",
    "materials": [
      "string"
    ],
    "name": "string",
    "patterns": [
      "string"
    ],
    "priceInfo": {
      "cost": 0,
      "currencyCode": "string",
      "originalPrice": 0,
      "price": 0,
      "priceEffectiveTime": "string",
      "priceExpireTime": "string"
    },
    "primaryProductId": "string",
    "promotions": [
      {
        "promotionId": "string"
      }
    ],
    "publishTime": "string",
    "rating": {
      "averageRating": 0,
      "ratingCount": 0,
      "ratingHistogram": [
        0
      ]
    },
    "retrievableFields": "string",
    "sizes": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "title": "string",
    "ttl": "string",
    "type": "TYPE_UNSPECIFIED",
    "uri": "string"
  }'
```

`POST /v2alpha/{parent}/products`

Creates a Product.

> Body parameter

```json
{
  "attributes": {
    "property1": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    },
    "property2": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    }
  },
  "audience": {
    "ageGroups": [
      "string"
    ],
    "genders": [
      "string"
    ]
  },
  "availability": "AVAILABILITY_UNSPECIFIED",
  "availableQuantity": 0,
  "availableTime": "string",
  "brands": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "collectionMemberIds": [
    "string"
  ],
  "colorInfo": {
    "colorFamilies": [
      "string"
    ],
    "colors": [
      "string"
    ]
  },
  "conditions": [
    "string"
  ],
  "description": "string",
  "expireTime": "string",
  "fulfillmentInfo": [
    {
      "placeIds": [
        "string"
      ],
      "type": "string"
    }
  ],
  "gtin": "string",
  "id": "string",
  "images": [
    {
      "height": 0,
      "uri": "string",
      "width": 0
    }
  ],
  "languageCode": "string",
  "materials": [
    "string"
  ],
  "name": "string",
  "patterns": [
    "string"
  ],
  "priceInfo": {
    "cost": 0,
    "currencyCode": "string",
    "originalPrice": 0,
    "price": 0,
    "priceEffectiveTime": "string",
    "priceExpireTime": "string"
  },
  "primaryProductId": "string",
  "promotions": [
    {
      "promotionId": "string"
    }
  ],
  "publishTime": "string",
  "rating": {
    "averageRating": 0,
    "ratingCount": 0,
    "ratingHistogram": [
      0
    ]
  },
  "retrievableFields": "string",
  "sizes": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "title": "string",
  "ttl": "string",
  "type": "TYPE_UNSPECIFIED",
  "uri": "string"
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch`.|
|productId|query|string|false|Required. The ID to use for the Product, which will become the final component of the Product.name. If the caller does not have permission to create the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. This field must be unique among all Products with the same parent. Otherwise, an ALREADY_EXISTS error is returned. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
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
|body|body|[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)|false|none|
|» attributes|body|object|false|Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `{ "vendor": {"text": ["vendor123", "vendor456"]}, "lengths_cm": {"numbers":[2.3, 15.4]}, "heights_cm": {"numbers":[8.1, 6.4]} }`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 200. * The key must be a UTF-8 encoded string with a length limit of 128 characters. * For indexable attribute, the key must match the pattern: `a-zA-Z0-9*`. For example, `key0LikeThis` or `KEY_1_LIKE_THIS`. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a non-empty UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed.|
|» » **additionalProperties**|body|[GoogleCloudRetailV2alphaCustomAttribute](#schemagooglecloudretailv2alphacustomattribute)|false|A custom attribute that is not explicitly modeled in Product.|
|» audience|body|[GoogleCloudRetailV2alphaAudience](#schemagooglecloudretailv2alphaaudience)|false|The target group associated with a given audience (e.g. male, veterans, car owners, musicians, etc.) of the product.|
|» availability|body|string|false|The online availability of the Product. Default to Availability.IN_STOCK. Corresponding properties: Google Merchant Center property [availability](https://support.google.com/merchants/answer/6324448). Schema.org property [Offer.availability](https://schema.org/availability).|
|» availableQuantity|body|integer(int32)|false|The available quantity of the item.|
|» availableTime|body|string(google-datetime)|false|The timestamp when this Product becomes available for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT.|
|» brands|body|[string]|false|The brands of the product. A maximum of 30 brands are allowed. Each brand must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [brand](https://support.google.com/merchants/answer/6324351). Schema.org property [Product.brand](https://schema.org/brand).|
|» categories|body|[string]|false|Product categories. This field is repeated for supporting one product belonging to several parallel categories. Strongly recommended using the full path for better search / recommendation quality. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categories": [ "Shoes & Accessories > Shoes", "Sports & Fitness > Athletic Clothing > Shoes" ] Must be set for Type.PRIMARY Product otherwise an INVALID_ARGUMENT error is returned. At most 250 values are allowed per Product. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property google_product_category. Schema.org property [Product.category] (https://schema.org/category). [mc_google_product_category]: https://support.google.com/merchants/answer/6324436|
|» collectionMemberIds|body|[string]|false|The id of the collection members when type is Type.COLLECTION. Non-existent product ids are allowed. The type of the members must be either Type.PRIMARY or Type.VARIANT otherwise an INVALID_ARGUMENT error is thrown. Should not set it for other types. A maximum of 1000 values are allowed. Otherwise, an INVALID_ARGUMENT error is return.|
|» colorInfo|body|[GoogleCloudRetailV2alphaColorInfo](#schemagooglecloudretailv2alphacolorinfo)|false|The color of the product. Corresponding properties: Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).|
|» conditions|body|[string]|false|The condition of the product. Strongly encouraged to use the standard values: "new", "refurbished", "used". A maximum of 1 value is allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [condition](https://support.google.com/merchants/answer/6324469). Schema.org property [Offer.itemCondition](https://schema.org/itemCondition).|
|» description|body|string|false|Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). Schema.org property [Product.description](https://schema.org/description).|
|» expireTime|body|string(google-datetime)|false|The timestamp when this product becomes unavailable for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, the Product is not available for SearchService.Search after expire_time. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts. expire_time must be later than available_time and publish_time, otherwise an INVALID_ARGUMENT error is thrown. Corresponding properties: Google Merchant Center property [expiration_date](https://support.google.com/merchants/answer/6324499).|
|» fulfillmentInfo|body|[[GoogleCloudRetailV2alphaFulfillmentInfo](#schemagooglecloudretailv2alphafulfillmentinfo)]|false|Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. All the elements must have distinct FulfillmentInfo.type. Otherwise, an INVALID_ARGUMENT error is returned.|
|» gtin|body|string|false|The Global Trade Item Number (GTIN) of the product. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. This field must be a Unigram. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [gtin](https://support.google.com/merchants/answer/6324461). Schema.org property [Product.isbn](https://schema.org/isbn), [Product.gtin8](https://schema.org/gtin8), [Product.gtin12](https://schema.org/gtin12), [Product.gtin13](https://schema.org/gtin13), or [Product.gtin14](https://schema.org/gtin14). If the value is not a valid GTIN, an INVALID_ARGUMENT error is returned.|
|» id|body|string|false|Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org property [Product.sku](https://schema.org/sku).|
|» images|body|[[GoogleCloudRetailV2alphaImage](#schemagooglecloudretailv2alphaimage)]|false|Product images for the product. We highly recommend putting the main image first. A maximum of 300 images are allowed. Corresponding properties: Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).|
|» languageCode|body|string|false|Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). For product prediction, this field is ignored and the model automatically detects the text language. The Product can include text in different languages, but duplicating Products to provide text in multiple languages can result in degraded model performance. For product search this field is in use. It defaults to "en-US" if unset.|
|» materials|body|[string]|false|The material of the product. For example, "leather", "wooden". A maximum of 20 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 200 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [material](https://support.google.com/merchants/answer/6324410). Schema.org property [Product.material](https://schema.org/material).|
|» name|body|string|false|Immutable. Full resource name of the product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.|
|» patterns|body|[string]|false|The pattern or graphic print of the product. For example, "striped", "polka dot", "paisley". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [pattern](https://support.google.com/merchants/answer/6324483). Schema.org property [Product.pattern](https://schema.org/pattern).|
|» priceInfo|body|[GoogleCloudRetailV2alphaPriceInfo](#schemagooglecloudretailv2alphapriceinfo)|false|Product price and cost information. Corresponding properties: Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371).|
|» primaryProductId|body|string|false|Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID).|
|» promotions|body|[[GoogleCloudRetailV2alphaPromotion](#schemagooglecloudretailv2alphapromotion)]|false|The promotions applied to the product. A maximum of 10 values are allowed per Product. Only Promotion.promotion_id will be used, other fields will be ignored if set.|
|» publishTime|body|string(google-datetime)|false|The timestamp when the product is published by the retailer for the first time, which indicates the freshness of the products. Note that this field is different from available_time, given it purely describes product freshness regardless of when it is available on search and recommendation.|
|» rating|body|[GoogleCloudRetailV2alphaRating](#schemagooglecloudretailv2alpharating)|false|The rating of this product.|
|» retrievableFields|body|string(google-fieldmask)|false|Indicates which fields in the Products are returned in SearchResponse. Supported fields for all types: * audience * availability * brands * color_info * conditions * gtin * materials * name * patterns * price_info * rating * sizes * title * uri Supported fields only for Type.PRIMARY and Type.COLLECTION: * categories * description * images Supported fields only for Type.VARIANT: * Only the first image in images To mark attributes as retrievable, include paths of the form "attributes.key" where "key" is the key of a custom attribute, as specified in attributes. For Type.PRIMARY and Type.COLLECTION, the following fields are always returned in SearchResponse by default: * name For Type.VARIANT, the following fields are always returned in by default: * name * color_info The maximum number of paths is 30. Otherwise, an INVALID_ARGUMENT error is returned. Note: Returning more fields in SearchResponse can increase response payload size and serving latency. This field is deprecated. Use the retrievable site-wide control instead.|
|» sizes|body|[string]|false|The size of the product. To represent different size systems or size types, consider using this format: [[[size_system:]size_type:]size_value]. For example, in "US:MENS:M", "US" represents size system; "MENS" represents size type; "M" represents size value. In "GIRLS:27", size system is empty; "GIRLS" represents size type; "27" represents size value. In "32 inches", both size system and size type are empty, while size value is "32 inches". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [size](https://support.google.com/merchants/answer/6324492), [size_type](https://support.google.com/merchants/answer/6324497), and [size_system](https://support.google.com/merchants/answer/6324502). Schema.org property [Product.size](https://schema.org/size).|
|» tags|body|[string]|false|Custom tags associated with the product. At most 250 values are allowed per Product. This value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This tag can be used for filtering recommendation results by passing the tag as part of the PredictRequest.filter. Corresponding properties: Google Merchant Center property [custom_label_0–4](https://support.google.com/merchants/answer/6324473).|
|» title|body|string|false|Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name).|
|» ttl|body|string(google-duration)|false|Input only. The TTL (time to live) of the product. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, it must be a non-negative value, and expire_time is set as current timestamp plus ttl. The derived expire_time is returned in the output and ttl is left blank when retrieving the Product. If it is set, the product is not available for SearchService.Search after current timestamp plus ttl. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts.|
|» type|body|string|false|Immutable. The type of the product. Default to Catalog.product_level_config.ingestion_product_type if unset.|
|» uri|body|string|false|Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» availability|AVAILABILITY_UNSPECIFIED|
|» availability|IN_STOCK|
|» availability|OUT_OF_STOCK|
|» availability|PREORDER|
|» availability|BACKORDER|
|» type|TYPE_UNSPECIFIED|
|» type|PRIMARY|
|» type|VARIANT|
|» type|COLLECTION|

> Example responses

> 200 Response

```json
{
  "attributes": {
    "property1": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    },
    "property2": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    }
  },
  "audience": {
    "ageGroups": [
      "string"
    ],
    "genders": [
      "string"
    ]
  },
  "availability": "AVAILABILITY_UNSPECIFIED",
  "availableQuantity": 0,
  "availableTime": "string",
  "brands": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "collectionMemberIds": [
    "string"
  ],
  "colorInfo": {
    "colorFamilies": [
      "string"
    ],
    "colors": [
      "string"
    ]
  },
  "conditions": [
    "string"
  ],
  "description": "string",
  "expireTime": "string",
  "fulfillmentInfo": [
    {
      "placeIds": [
        "string"
      ],
      "type": "string"
    }
  ],
  "gtin": "string",
  "id": "string",
  "images": [
    {
      "height": 0,
      "uri": "string",
      "width": 0
    }
  ],
  "languageCode": "string",
  "localInventories": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "fulfillmentTypes": [
        "string"
      ],
      "placeId": "string",
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string",
        "priceRange": {
          "originalPrice": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "price": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        }
      }
    }
  ],
  "materials": [
    "string"
  ],
  "name": "string",
  "patterns": [
    "string"
  ],
  "priceInfo": {
    "cost": 0,
    "currencyCode": "string",
    "originalPrice": 0,
    "price": 0,
    "priceEffectiveTime": "string",
    "priceExpireTime": "string",
    "priceRange": {
      "originalPrice": {
        "exclusiveMaximum": 0,
        "exclusiveMinimum": 0,
        "maximum": 0,
        "minimum": 0
      },
      "price": {
        "exclusiveMaximum": 0,
        "exclusiveMinimum": 0,
        "maximum": 0,
        "minimum": 0
      }
    }
  },
  "primaryProductId": "string",
  "promotions": [
    {
      "promotionId": "string"
    }
  ],
  "publishTime": "string",
  "rating": {
    "averageRating": 0,
    "ratingCount": 0,
    "ratingHistogram": [
      0
    ]
  },
  "retrievableFields": "string",
  "sizes": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "title": "string",
  "ttl": "string",
  "type": "TYPE_UNSPECIFIED",
  "uri": "string",
  "variants": [
    {}
  ]
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.import

<a id="opIdretail.projects.locations.catalogs.branches.products.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/products:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "errorsConfig": {
      "gcsPrefix": "string"
    },
    "inputConfig": {
      "bigQuerySource": {
        "dataSchema": "string",
        "datasetId": "string",
        "gcsStagingDir": "string",
        "partitionDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "projectId": "string",
        "tableId": "string"
      },
      "gcsSource": {
        "dataSchema": "string",
        "inputUris": [
          "string"
        ]
      },
      "productInlineSource": {
        "products": [
          {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "audience": {
              "ageGroups": [
                "string"
              ],
              "genders": [
                "string"
              ]
            },
            "availability": "AVAILABILITY_UNSPECIFIED",
            "availableQuantity": 0,
            "availableTime": "string",
            "brands": [
              "string"
            ],
            "categories": [
              "string"
            ],
            "collectionMemberIds": [
              "string"
            ],
            "colorInfo": {
              "colorFamilies": [
                "string"
              ],
              "colors": [
                "string"
              ]
            },
            "conditions": [
              "string"
            ],
            "description": "string",
            "expireTime": "string",
            "fulfillmentInfo": [
              {
                "placeIds": [
                  "string"
                ],
                "type": "string"
              }
            ],
            "gtin": "string",
            "id": "string",
            "images": [
              {
                "height": 0,
                "uri": "string",
                "width": 0
              }
            ],
            "languageCode": "string",
            "materials": [
              "string"
            ],
            "name": "string",
            "patterns": [
              "string"
            ],
            "priceInfo": {
              "cost": 0,
              "currencyCode": "string",
              "originalPrice": 0,
              "price": 0,
              "priceEffectiveTime": "string",
              "priceExpireTime": "string"
            },
            "primaryProductId": "string",
            "promotions": [
              {
                "promotionId": "string"
              }
            ],
            "publishTime": "string",
            "rating": {
              "averageRating": 0,
              "ratingCount": 0,
              "ratingHistogram": [
                0
              ]
            },
            "retrievableFields": "string",
            "sizes": [
              "string"
            ],
            "tags": [
              "string"
            ],
            "title": "string",
            "ttl": "string",
            "type": "TYPE_UNSPECIFIED",
            "uri": "string"
          }
        ]
      }
    },
    "notificationPubsubTopic": "string",
    "reconciliationMode": "RECONCILIATION_MODE_UNSPECIFIED",
    "requestId": "string",
    "skipDefaultBranchProtection": true,
    "updateMask": "string"
  }'
```

`POST /v2alpha/{parent}/products:import`

Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.

> Body parameter

```json
{
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    },
    "gcsSource": {
      "dataSchema": "string",
      "inputUris": [
        "string"
      ]
    },
    "productInlineSource": {
      "products": [
        {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "audience": {
            "ageGroups": [
              "string"
            ],
            "genders": [
              "string"
            ]
          },
          "availability": "AVAILABILITY_UNSPECIFIED",
          "availableQuantity": 0,
          "availableTime": "string",
          "brands": [
            "string"
          ],
          "categories": [
            "string"
          ],
          "collectionMemberIds": [
            "string"
          ],
          "colorInfo": {
            "colorFamilies": [
              "string"
            ],
            "colors": [
              "string"
            ]
          },
          "conditions": [
            "string"
          ],
          "description": "string",
          "expireTime": "string",
          "fulfillmentInfo": [
            {
              "placeIds": [
                "string"
              ],
              "type": "string"
            }
          ],
          "gtin": "string",
          "id": "string",
          "images": [
            {
              "height": 0,
              "uri": "string",
              "width": 0
            }
          ],
          "languageCode": "string",
          "materials": [
            "string"
          ],
          "name": "string",
          "patterns": [
            "string"
          ],
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string"
          },
          "primaryProductId": "string",
          "promotions": [
            {
              "promotionId": "string"
            }
          ],
          "publishTime": "string",
          "rating": {
            "averageRating": 0,
            "ratingCount": 0,
            "ratingHistogram": [
              0
            ]
          },
          "retrievableFields": "string",
          "sizes": [
            "string"
          ],
          "tags": [
            "string"
          ],
          "title": "string",
          "ttl": "string",
          "type": "TYPE_UNSPECIFIED",
          "uri": "string"
        }
      ]
    }
  },
  "notificationPubsubTopic": "string",
  "reconciliationMode": "RECONCILIATION_MODE_UNSPECIFIED",
  "requestId": "string",
  "skipDefaultBranchProtection": true,
  "updateMask": "string"
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. `projects/1234/locations/global/catalogs/default_catalog/branches/default_branch` If no updateMask is specified, requires products.create permission. If updateMask is specified, requires products.update permission.|
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
|body|body|[GoogleCloudRetailV2alphaImportProductsRequest](#schemagooglecloudretailv2alphaimportproductsrequest)|false|none|
|» errorsConfig|body|[GoogleCloudRetailV2alphaImportErrorsConfig](#schemagooglecloudretailv2alphaimporterrorsconfig)|false|The desired location of errors incurred during the Import.|
|» inputConfig|body|[GoogleCloudRetailV2alphaProductInputConfig](#schemagooglecloudretailv2alphaproductinputconfig)|false|Required. The desired input location of the data.|
|» notificationPubsubTopic|body|string|false|Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. It has to be within the same project as ImportProductsRequest.parent. Make sure that `service-@gcp-sa-retail.iam.gserviceaccount.com` has the `pubsub.topics.publish` IAM permission on the topic.|
|» reconciliationMode|body|string|false|The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.|
|» requestId|body|string|false|Deprecated. This field has no effect.|
|» skipDefaultBranchProtection|body|boolean|false|If true, this performs the FULL import even if it would delete a large proportion of the products in the default branch, which could potentially cause outages if you have live predict/search traffic. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`.|
|» updateMask|body|string(google-fieldmask)|false|Indicates which fields in the provided imported `products` to update. If not set, all fields are updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» reconciliationMode|RECONCILIATION_MODE_UNSPECIFIED|
|» reconciliationMode|INCREMENTAL|
|» reconciliationMode|FULL|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.purge

<a id="opIdretail.projects.locations.catalogs.branches.products.purge"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/products:purge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": "string",
    "force": true
  }'
```

`POST /v2alpha/{parent}/products:purge`

Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.

> Body parameter

```json
{
  "filter": "string",
  "force": true
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductspurge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the branch under which the products are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/branches/${branchId}`|
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
|body|body|[GoogleCloudRetailV2alphaPurgeProductsRequest](#schemagooglecloudretailv2alphapurgeproductsrequest)|false|none|
|» filter|body|string|false|Required. The filter string to specify the products to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. "*" implies delete all items in a branch. The eligible fields for filtering are: * `availability`: Double quoted Product.availability string. * `create_time` : in ISO 8601 "zulu" format. Supported syntax: * Comparators (">", "<", ">=", "<=", "="). Examples: * create_time <= "2015-02-13T17:05:46Z" * availability = "IN_STOCK" * Conjunctions ("AND") Examples: * create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER" * Disjunctions ("OR") Examples: * create_time <= "2015-02-13T17:05:46Z" OR availability = "IN_STOCK" * Can support nested queries. Examples: * (create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER") OR (create_time >= "2015-02-14T13:03:32Z" AND availability = "IN_STOCK") * Filter Limits: * Filter should not contain more than 6 conditions. * Max nesting depth should not exceed 2 levels. Examples queries: * Delete back order products created before a timestamp. create_time <= "2015-02-13T17:05:46Z" OR availability = "BACKORDER"|
|» force|body|boolean|false|Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any products.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductspurge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.servingConfigs.list

<a id="opIdretail.projects.locations.catalogs.servingConfigs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/servingConfigs \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{parent}/servingConfigs`

Lists all ServingConfigs linked to this catalog.

<h3 id="retailprojectslocationscatalogsservingconfigslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The catalog resource name. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`|
|pageSize|query|integer|false|Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.|
|pageToken|query|string|false|Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.|
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
  "servingConfigs": [
    {
      "boostControlIds": [
        "string"
      ],
      "displayName": "string",
      "diversityLevel": "string",
      "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
      "doNotAssociateControlIds": [
        "string"
      ],
      "dynamicFacetSpec": {
        "mode": "MODE_UNSPECIFIED"
      },
      "enableCategoryFilterLevel": "string",
      "facetControlIds": [
        "string"
      ],
      "filterControlIds": [
        "string"
      ],
      "ignoreControlIds": [
        "string"
      ],
      "modelId": "string",
      "name": "string",
      "onewaySynonymsControlIds": [
        "string"
      ],
      "personalizationSpec": {
        "mode": "MODE_UNSPECIFIED"
      },
      "priceRerankingLevel": "string",
      "redirectControlIds": [
        "string"
      ],
      "replacementControlIds": [
        "string"
      ],
      "solutionTypes": [
        "SOLUTION_TYPE_UNSPECIFIED"
      ],
      "twowaySynonymsControlIds": [
        "string"
      ]
    }
  ]
}
```

<h3 id="retailprojectslocationscatalogsservingconfigslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaListServingConfigsResponse](#schemagooglecloudretailv2alphalistservingconfigsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.servingConfigs.create

<a id="opIdretail.projects.locations.catalogs.servingConfigs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/servingConfigs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "boostControlIds": [
      "string"
    ],
    "displayName": "string",
    "diversityLevel": "string",
    "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
    "doNotAssociateControlIds": [
      "string"
    ],
    "dynamicFacetSpec": {
      "mode": "MODE_UNSPECIFIED"
    },
    "enableCategoryFilterLevel": "string",
    "facetControlIds": [
      "string"
    ],
    "filterControlIds": [
      "string"
    ],
    "ignoreControlIds": [
      "string"
    ],
    "modelId": "string",
    "name": "string",
    "onewaySynonymsControlIds": [
      "string"
    ],
    "personalizationSpec": {
      "mode": "MODE_UNSPECIFIED"
    },
    "priceRerankingLevel": "string",
    "redirectControlIds": [
      "string"
    ],
    "replacementControlIds": [
      "string"
    ],
    "solutionTypes": [
      "SOLUTION_TYPE_UNSPECIFIED"
    ],
    "twowaySynonymsControlIds": [
      "string"
    ]
  }'
```

`POST /v2alpha/{parent}/servingConfigs`

Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.

> Body parameter

```json
{
  "boostControlIds": [
    "string"
  ],
  "displayName": "string",
  "diversityLevel": "string",
  "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
  "doNotAssociateControlIds": [
    "string"
  ],
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "enableCategoryFilterLevel": "string",
  "facetControlIds": [
    "string"
  ],
  "filterControlIds": [
    "string"
  ],
  "ignoreControlIds": [
    "string"
  ],
  "modelId": "string",
  "name": "string",
  "onewaySynonymsControlIds": [
    "string"
  ],
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "priceRerankingLevel": "string",
  "redirectControlIds": [
    "string"
  ],
  "replacementControlIds": [
    "string"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ],
  "twowaySynonymsControlIds": [
    "string"
  ]
}
```

<h3 id="retailprojectslocationscatalogsservingconfigscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. Full resource name of parent. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}`|
|servingConfigId|query|string|false|Required. The ID to use for the ServingConfig, which will become the final component of the ServingConfig's resource name. This value should be 4-63 characters, and valid characters are /a-z-_/.|
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
|body|body|[GoogleCloudRetailV2alphaServingConfig](#schemagooglecloudretailv2alphaservingconfig)|false|none|
|» boostControlIds|body|[string]|false|Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» displayName|body|string|false|Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
|» diversityLevel|body|string|false|How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|» diversityType|body|string|false|What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.|
|» doNotAssociateControlIds|body|[string]|false|Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» dynamicFacetSpec|body|[GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec](#schemagooglecloudretailv2alphasearchrequestdynamicfacetspec)|false|The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» enableCategoryFilterLevel|body|string|false|Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|» facetControlIds|body|[string]|false|Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» filterControlIds|body|[string]|false|Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» ignoreControlIds|body|[string]|false|Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» modelId|body|string|false|The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|» name|body|string|false|Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`|
|» onewaySynonymsControlIds|body|[string]|false|Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» personalizationSpec|body|[GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec](#schemagooglecloudretailv2alphasearchrequestpersonalizationspec)|false|The specification for personalization spec. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec.|
|» priceRerankingLevel|body|string|false|How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|» redirectControlIds|body|[string]|false|Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» replacementControlIds|body|[string]|false|Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|» solutionTypes|body|[string]|false|Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.|
|» twowaySynonymsControlIds|body|[string]|false|Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» diversityType|DIVERSITY_TYPE_UNSPECIFIED|
|» diversityType|RULE_BASED_DIVERSITY|
|» diversityType|DATA_DRIVEN_DIVERSITY|
|» solutionTypes|SOLUTION_TYPE_UNSPECIFIED|
|» solutionTypes|SOLUTION_TYPE_RECOMMENDATION|
|» solutionTypes|SOLUTION_TYPE_SEARCH|

> Example responses

> 200 Response

```json
{
  "boostControlIds": [
    "string"
  ],
  "displayName": "string",
  "diversityLevel": "string",
  "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
  "doNotAssociateControlIds": [
    "string"
  ],
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "enableCategoryFilterLevel": "string",
  "facetControlIds": [
    "string"
  ],
  "filterControlIds": [
    "string"
  ],
  "ignoreControlIds": [
    "string"
  ],
  "modelId": "string",
  "name": "string",
  "onewaySynonymsControlIds": [
    "string"
  ],
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "priceRerankingLevel": "string",
  "redirectControlIds": [
    "string"
  ],
  "replacementControlIds": [
    "string"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ],
  "twowaySynonymsControlIds": [
    "string"
  ]
}
```

<h3 id="retailprojectslocationscatalogsservingconfigscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaServingConfig](#schemagooglecloudretailv2alphaservingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.userEvents.collect

<a id="opIdretail.projects.locations.catalogs.userEvents.collect"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/userEvents:collect \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v2alpha/{parent}/userEvents:collect`

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

<h3 id="retailprojectslocationscatalogsusereventscollect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent catalog name, such as `projects/1234/locations/global/catalogs/default_catalog`.|
|ets|query|string|false|The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.|
|prebuiltRule|query|string|false|The prebuilt rule name that can convert a specific type of raw_json. For example: "ga4_bq" rule for the GA4 user event schema.|
|rawJson|query|string|false|An arbitrary serialized JSON string that contains necessary information that can comprise a user event. When this field is specified, the user_event field will be ignored. Note: line-delimited JSON is not supported, a single JSON only.|
|uri|query|string|false|The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for 3rd party requests.|
|userEvent|query|string|false|Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.|
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
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

<h3 id="retailprojectslocationscatalogsusereventscollect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleApiHttpBody](#schemagoogleapihttpbody)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.userEvents.import

<a id="opIdretail.projects.locations.catalogs.userEvents.import"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/userEvents:import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "errorsConfig": {
      "gcsPrefix": "string"
    },
    "inputConfig": {
      "bigQuerySource": {
        "dataSchema": "string",
        "datasetId": "string",
        "gcsStagingDir": "string",
        "partitionDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "projectId": "string",
        "tableId": "string"
      },
      "gcsSource": {
        "dataSchema": "string",
        "inputUris": [
          "string"
        ]
      },
      "userEventInlineSource": {
        "userEvents": [
          {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "attributionToken": "string",
            "cartId": "string",
            "completionDetail": {
              "completionAttributionToken": "string",
              "selectedPosition": 0,
              "selectedSuggestion": "string"
            },
            "entity": "string",
            "eventTime": "string",
            "eventType": "string",
            "experimentIds": [
              "string"
            ],
            "filter": "string",
            "offset": 0,
            "orderBy": "string",
            "pageCategories": [
              "string"
            ],
            "pageViewId": "string",
            "productDetails": [
              {
                "product": {
                  "attributes": {
                    "property1": {
                      "indexable": true,
                      "numbers": [
                        0
                      ],
                      "searchable": true,
                      "text": [
                        "string"
                      ]
                    },
                    "property2": {
                      "indexable": true,
                      "numbers": [
                        0
                      ],
                      "searchable": true,
                      "text": [
                        "string"
                      ]
                    }
                  },
                  "audience": {
                    "ageGroups": [
                      "string"
                    ],
                    "genders": [
                      "string"
                    ]
                  },
                  "availability": "AVAILABILITY_UNSPECIFIED",
                  "availableQuantity": 0,
                  "availableTime": "string",
                  "brands": [
                    "string"
                  ],
                  "categories": [
                    "string"
                  ],
                  "collectionMemberIds": [
                    "string"
                  ],
                  "colorInfo": {
                    "colorFamilies": [
                      "string"
                    ],
                    "colors": [
                      "string"
                    ]
                  },
                  "conditions": [
                    "string"
                  ],
                  "description": "string",
                  "expireTime": "string",
                  "fulfillmentInfo": [
                    {
                      "placeIds": [
                        "string"
                      ],
                      "type": "string"
                    }
                  ],
                  "gtin": "string",
                  "id": "string",
                  "images": [
                    {
                      "height": 0,
                      "uri": "string",
                      "width": 0
                    }
                  ],
                  "languageCode": "string",
                  "materials": [
                    "string"
                  ],
                  "name": "string",
                  "patterns": [
                    "string"
                  ],
                  "priceInfo": {
                    "cost": 0,
                    "currencyCode": "string",
                    "originalPrice": 0,
                    "price": 0,
                    "priceEffectiveTime": "string",
                    "priceExpireTime": "string"
                  },
                  "primaryProductId": "string",
                  "promotions": [
                    {
                      "promotionId": "string"
                    }
                  ],
                  "publishTime": "string",
                  "rating": {
                    "averageRating": 0,
                    "ratingCount": 0,
                    "ratingHistogram": [
                      0
                    ]
                  },
                  "retrievableFields": "string",
                  "sizes": [
                    "string"
                  ],
                  "tags": [
                    "string"
                  ],
                  "title": "string",
                  "ttl": "string",
                  "type": "TYPE_UNSPECIFIED",
                  "uri": "string"
                },
                "quantity": 0
              }
            ],
            "purchaseTransaction": {
              "cost": 0,
              "currencyCode": "string",
              "id": "string",
              "revenue": 0,
              "tax": 0
            },
            "referrerUri": "string",
            "searchQuery": "string",
            "sessionId": "string",
            "uri": "string",
            "userInfo": {
              "directUserRequest": true,
              "ipAddress": "string",
              "userAgent": "string",
              "userId": "string"
            },
            "visitorId": "string"
          }
        ]
      }
    }
  }'
```

`POST /v2alpha/{parent}/userEvents:import`

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.

> Body parameter

```json
{
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    },
    "gcsSource": {
      "dataSchema": "string",
      "inputUris": [
        "string"
      ]
    },
    "userEventInlineSource": {
      "userEvents": [
        {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "attributionToken": "string",
          "cartId": "string",
          "completionDetail": {
            "completionAttributionToken": "string",
            "selectedPosition": 0,
            "selectedSuggestion": "string"
          },
          "entity": "string",
          "eventTime": "string",
          "eventType": "string",
          "experimentIds": [
            "string"
          ],
          "filter": "string",
          "offset": 0,
          "orderBy": "string",
          "pageCategories": [
            "string"
          ],
          "pageViewId": "string",
          "productDetails": [
            {
              "product": {
                "attributes": {
                  "property1": {
                    "indexable": true,
                    "numbers": [
                      0
                    ],
                    "searchable": true,
                    "text": [
                      "string"
                    ]
                  },
                  "property2": {
                    "indexable": true,
                    "numbers": [
                      0
                    ],
                    "searchable": true,
                    "text": [
                      "string"
                    ]
                  }
                },
                "audience": {
                  "ageGroups": [
                    "string"
                  ],
                  "genders": [
                    "string"
                  ]
                },
                "availability": "AVAILABILITY_UNSPECIFIED",
                "availableQuantity": 0,
                "availableTime": "string",
                "brands": [
                  "string"
                ],
                "categories": [
                  "string"
                ],
                "collectionMemberIds": [
                  "string"
                ],
                "colorInfo": {
                  "colorFamilies": [
                    "string"
                  ],
                  "colors": [
                    "string"
                  ]
                },
                "conditions": [
                  "string"
                ],
                "description": "string",
                "expireTime": "string",
                "fulfillmentInfo": [
                  {
                    "placeIds": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "gtin": "string",
                "id": "string",
                "images": [
                  {
                    "height": 0,
                    "uri": "string",
                    "width": 0
                  }
                ],
                "languageCode": "string",
                "materials": [
                  "string"
                ],
                "name": "string",
                "patterns": [
                  "string"
                ],
                "priceInfo": {
                  "cost": 0,
                  "currencyCode": "string",
                  "originalPrice": 0,
                  "price": 0,
                  "priceEffectiveTime": "string",
                  "priceExpireTime": "string"
                },
                "primaryProductId": "string",
                "promotions": [
                  {
                    "promotionId": "string"
                  }
                ],
                "publishTime": "string",
                "rating": {
                  "averageRating": 0,
                  "ratingCount": 0,
                  "ratingHistogram": [
                    0
                  ]
                },
                "retrievableFields": "string",
                "sizes": [
                  "string"
                ],
                "tags": [
                  "string"
                ],
                "title": "string",
                "ttl": "string",
                "type": "TYPE_UNSPECIFIED",
                "uri": "string"
              },
              "quantity": 0
            }
          ],
          "purchaseTransaction": {
            "cost": 0,
            "currencyCode": "string",
            "id": "string",
            "revenue": 0,
            "tax": 0
          },
          "referrerUri": "string",
          "searchQuery": "string",
          "sessionId": "string",
          "uri": "string",
          "userInfo": {
            "directUserRequest": true,
            "ipAddress": "string",
            "userAgent": "string",
            "userId": "string"
          },
          "visitorId": "string"
        }
      ]
    }
  }
}
```

<h3 id="retailprojectslocationscatalogsusereventsimport-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. `projects/1234/locations/global/catalogs/default_catalog`|
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
|body|body|[GoogleCloudRetailV2alphaImportUserEventsRequest](#schemagooglecloudretailv2alphaimportusereventsrequest)|false|none|
|» errorsConfig|body|[GoogleCloudRetailV2alphaImportErrorsConfig](#schemagooglecloudretailv2alphaimporterrorsconfig)|false|The desired location of errors incurred during the Import. Cannot be set for inline user event imports.|
|» inputConfig|body|[GoogleCloudRetailV2alphaUserEventInputConfig](#schemagooglecloudretailv2alphausereventinputconfig)|false|Required. The desired input location of the data.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsusereventsimport-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.userEvents.purge

<a id="opIdretail.projects.locations.catalogs.userEvents.purge"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/userEvents:purge \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": "string",
    "force": true
  }'
```

`POST /v2alpha/{parent}/userEvents:purge`

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

> Body parameter

```json
{
  "filter": "string",
  "force": true
}
```

<h3 id="retailprojectslocationscatalogsusereventspurge-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The resource name of the catalog under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}`|
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
|body|body|[GoogleCloudRetailV2alphaPurgeUserEventsRequest](#schemagooglecloudretailv2alphapurgeusereventsrequest)|false|none|
|» filter|body|string|false|Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: Double quoted UserEvent.event_type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: Double quoted string. Specifying this will delete all events associated with a visitor. * `userId`: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.|
|» force|body|boolean|false|Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any user events.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsusereventspurge-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.userEvents.rejoin

<a id="opIdretail.projects.locations.catalogs.userEvents.rejoin"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/userEvents:rejoin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "userEventRejoinScope": "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
  }'
```

`POST /v2alpha/{parent}/userEvents:rejoin`

Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.

> Body parameter

```json
{
  "userEventRejoinScope": "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
}
```

<h3 id="retailprojectslocationscatalogsusereventsrejoin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.|
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
|body|body|[GoogleCloudRetailV2alphaRejoinUserEventsRequest](#schemagooglecloudretailv2alpharejoinusereventsrequest)|false|none|
|» userEventRejoinScope|body|string|false|The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED` if this field is not set, or set to an invalid integer value.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» userEventRejoinScope|USER_EVENT_REJOIN_SCOPE_UNSPECIFIED|
|» userEventRejoinScope|JOINED_EVENTS|
|» userEventRejoinScope|UNJOINED_EVENTS|

> Example responses

> 200 Response

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsusereventsrejoin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.userEvents.write

<a id="opIdretail.projects.locations.catalogs.userEvents.write"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string/userEvents:write \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attributes": {
      "property1": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      },
      "property2": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      }
    },
    "attributionToken": "string",
    "cartId": "string",
    "completionDetail": {
      "completionAttributionToken": "string",
      "selectedPosition": 0,
      "selectedSuggestion": "string"
    },
    "entity": "string",
    "eventTime": "string",
    "eventType": "string",
    "experimentIds": [
      "string"
    ],
    "filter": "string",
    "offset": 0,
    "orderBy": "string",
    "pageCategories": [
      "string"
    ],
    "pageViewId": "string",
    "productDetails": [
      {
        "product": {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "audience": {
            "ageGroups": [
              "string"
            ],
            "genders": [
              "string"
            ]
          },
          "availability": "AVAILABILITY_UNSPECIFIED",
          "availableQuantity": 0,
          "availableTime": "string",
          "brands": [
            "string"
          ],
          "categories": [
            "string"
          ],
          "collectionMemberIds": [
            "string"
          ],
          "colorInfo": {
            "colorFamilies": [
              "string"
            ],
            "colors": [
              "string"
            ]
          },
          "conditions": [
            "string"
          ],
          "description": "string",
          "expireTime": "string",
          "fulfillmentInfo": [
            {
              "placeIds": [
                "string"
              ],
              "type": "string"
            }
          ],
          "gtin": "string",
          "id": "string",
          "images": [
            {
              "height": 0,
              "uri": "string",
              "width": 0
            }
          ],
          "languageCode": "string",
          "materials": [
            "string"
          ],
          "name": "string",
          "patterns": [
            "string"
          ],
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string"
          },
          "primaryProductId": "string",
          "promotions": [
            {
              "promotionId": "string"
            }
          ],
          "publishTime": "string",
          "rating": {
            "averageRating": 0,
            "ratingCount": 0,
            "ratingHistogram": [
              0
            ]
          },
          "retrievableFields": "string",
          "sizes": [
            "string"
          ],
          "tags": [
            "string"
          ],
          "title": "string",
          "ttl": "string",
          "type": "TYPE_UNSPECIFIED",
          "uri": "string"
        },
        "quantity": 0
      }
    ],
    "purchaseTransaction": {
      "cost": 0,
      "currencyCode": "string",
      "id": "string",
      "revenue": 0,
      "tax": 0
    },
    "referrerUri": "string",
    "searchQuery": "string",
    "sessionId": "string",
    "uri": "string",
    "userInfo": {
      "directUserRequest": true,
      "ipAddress": "string",
      "userAgent": "string",
      "userId": "string"
    },
    "visitorId": "string"
  }'
```

`POST /v2alpha/{parent}/userEvents:write`

Writes a single user event.

> Body parameter

```json
{
  "attributes": {
    "property1": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    },
    "property2": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    }
  },
  "attributionToken": "string",
  "cartId": "string",
  "completionDetail": {
    "completionAttributionToken": "string",
    "selectedPosition": 0,
    "selectedSuggestion": "string"
  },
  "entity": "string",
  "eventTime": "string",
  "eventType": "string",
  "experimentIds": [
    "string"
  ],
  "filter": "string",
  "offset": 0,
  "orderBy": "string",
  "pageCategories": [
    "string"
  ],
  "pageViewId": "string",
  "productDetails": [
    {
      "product": {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "audience": {
          "ageGroups": [
            "string"
          ],
          "genders": [
            "string"
          ]
        },
        "availability": "AVAILABILITY_UNSPECIFIED",
        "availableQuantity": 0,
        "availableTime": "string",
        "brands": [
          "string"
        ],
        "categories": [
          "string"
        ],
        "collectionMemberIds": [
          "string"
        ],
        "colorInfo": {
          "colorFamilies": [
            "string"
          ],
          "colors": [
            "string"
          ]
        },
        "conditions": [
          "string"
        ],
        "description": "string",
        "expireTime": "string",
        "fulfillmentInfo": [
          {
            "placeIds": [
              "string"
            ],
            "type": "string"
          }
        ],
        "gtin": "string",
        "id": "string",
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "languageCode": "string",
        "materials": [
          "string"
        ],
        "name": "string",
        "patterns": [
          "string"
        ],
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string"
        },
        "primaryProductId": "string",
        "promotions": [
          {
            "promotionId": "string"
          }
        ],
        "publishTime": "string",
        "rating": {
          "averageRating": 0,
          "ratingCount": 0,
          "ratingHistogram": [
            0
          ]
        },
        "retrievableFields": "string",
        "sizes": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "title": "string",
        "ttl": "string",
        "type": "TYPE_UNSPECIFIED",
        "uri": "string"
      },
      "quantity": 0
    }
  ],
  "purchaseTransaction": {
    "cost": 0,
    "currencyCode": "string",
    "id": "string",
    "revenue": 0,
    "tax": 0
  },
  "referrerUri": "string",
  "searchQuery": "string",
  "sessionId": "string",
  "uri": "string",
  "userInfo": {
    "directUserRequest": true,
    "ipAddress": "string",
    "userAgent": "string",
    "userId": "string"
  },
  "visitorId": "string"
}
```

<h3 id="retailprojectslocationscatalogsusereventswrite-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The parent catalog resource name, such as `projects/1234/locations/global/catalogs/default_catalog`.|
|writeAsync|query|boolean|false|If set to true, the user event will be written asynchronously after validation, and the API will respond without waiting for the write. Therefore, silent failures can occur even if the API returns success. In case of silent failures, error messages can be found in Stackdriver logs.|
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
|body|body|[GoogleCloudRetailV2alphaUserEvent](#schemagooglecloudretailv2alphauserevent)|false|none|
|» attributes|body|object|false|Extra user event features to include in the recommendation model. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.|
|» » **additionalProperties**|body|[GoogleCloudRetailV2alphaCustomAttribute](#schemagooglecloudretailv2alphacustomattribute)|false|A custom attribute that is not explicitly modeled in Product.|
|» attributionToken|body|string|false|Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be a valid PredictResponse.attribution_token for user events that are the result of PredictionService.Predict. The value must be a valid SearchResponse.attribution_token for user events that are the result of SearchService.Search. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.|
|» cartId|body|string|false|The ID or name of the associated shopping cart. This ID is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events.|
|» completionDetail|body|[GoogleCloudRetailV2alphaCompletionDetail](#schemagooglecloudretailv2alphacompletiondetail)|false|The main auto-completion details related to the event. This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.|
|» entity|body|string|false|The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. It is recommended to set this field to get better per-entity search, completion and prediction results.|
|» eventTime|body|string(google-datetime)|false|Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.|
|» eventType|body|string|false|Required. User event type. Allowed values are: * `add-to-cart`: Products being added to cart. * `category-page-view`: Special pages such as sale or promotion pages viewed. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed. * `promotion-offered`: Promotion is offered to a user. * `promotion-not-offered`: Promotion is not offered to a user. * `purchase-complete`: User finishing a purchase. * `search`: Product search. * `shopping-cart-page-view`: User viewing a shopping cart.|
|» experimentIds|body|[string]|false|A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).|
|» filter|body|string|false|The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. See SearchRequest.filter for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
|» offset|body|integer(int32)|false|An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an INVALID_ARGUMENT is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|» orderBy|body|string|false|The order in which products are returned. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|» pageCategories|body|[string]|false|The categories associated with a category page. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"]. Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|» pageViewId|body|string|false|A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.|
|» productDetails|body|[[GoogleCloudRetailV2alphaProductDetail](#schemagooglecloudretailv2alphaproductdetail)]|false|The main product details related to the event. This field is optional except for the following event types: * `add-to-cart` * `detail-page-view` * `purchase-complete` In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product_details is desired. The end user may have not finished browsing the whole page yet.|
|» purchaseTransaction|body|[GoogleCloudRetailV2alphaPurchaseTransaction](#schemagooglecloudretailv2alphapurchasetransaction)|false|A transaction represents the entire purchase transaction. Required for `purchase-complete` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|» referrerUri|body|string|false|The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.|
|» searchQuery|body|string|false|The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|» sessionId|body|string|false|A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the sesion_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add visitor_id as prefix.|
|» uri|body|string|false|Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.|
|» userInfo|body|[GoogleCloudRetailV2alphaUserInfo](#schemagooglecloudretailv2alphauserinfo)|false|User information.|
|» visitorId|body|string|false|Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.|

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
  "attributes": {
    "property1": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    },
    "property2": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    }
  },
  "attributionToken": "string",
  "cartId": "string",
  "completionDetail": {
    "completionAttributionToken": "string",
    "selectedPosition": 0,
    "selectedSuggestion": "string"
  },
  "entity": "string",
  "eventTime": "string",
  "eventType": "string",
  "experimentIds": [
    "string"
  ],
  "filter": "string",
  "offset": 0,
  "orderBy": "string",
  "pageCategories": [
    "string"
  ],
  "pageViewId": "string",
  "productDetails": [
    {
      "product": {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "audience": {
          "ageGroups": [
            "string"
          ],
          "genders": [
            "string"
          ]
        },
        "availability": "AVAILABILITY_UNSPECIFIED",
        "availableQuantity": 0,
        "availableTime": "string",
        "brands": [
          "string"
        ],
        "categories": [
          "string"
        ],
        "collectionMemberIds": [
          "string"
        ],
        "colorInfo": {
          "colorFamilies": [
            "string"
          ],
          "colors": [
            "string"
          ]
        },
        "conditions": [
          "string"
        ],
        "description": "string",
        "expireTime": "string",
        "fulfillmentInfo": [
          {
            "placeIds": [
              "string"
            ],
            "type": "string"
          }
        ],
        "gtin": "string",
        "id": "string",
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "languageCode": "string",
        "localInventories": [
          {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "fulfillmentTypes": [
              "string"
            ],
            "placeId": "string",
            "priceInfo": {
              "cost": 0,
              "currencyCode": "string",
              "originalPrice": 0,
              "price": 0,
              "priceEffectiveTime": "string",
              "priceExpireTime": "string",
              "priceRange": {
                "originalPrice": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                },
                "price": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                }
              }
            }
          }
        ],
        "materials": [
          "string"
        ],
        "name": "string",
        "patterns": [
          "string"
        ],
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string",
          "priceRange": {
            "originalPrice": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            },
            "price": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          }
        },
        "primaryProductId": "string",
        "promotions": [
          {
            "promotionId": "string"
          }
        ],
        "publishTime": "string",
        "rating": {
          "averageRating": 0,
          "ratingCount": 0,
          "ratingHistogram": [
            0
          ]
        },
        "retrievableFields": "string",
        "sizes": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "title": "string",
        "ttl": "string",
        "type": "TYPE_UNSPECIFIED",
        "uri": "string",
        "variants": [
          {}
        ]
      },
      "quantity": 0
    }
  ],
  "purchaseTransaction": {
    "cost": 0,
    "currencyCode": "string",
    "id": "string",
    "revenue": 0,
    "tax": 0
  },
  "referrerUri": "string",
  "searchQuery": "string",
  "sessionId": "string",
  "uri": "string",
  "userInfo": {
    "directUserRequest": true,
    "ipAddress": "string",
    "userAgent": "string",
    "userId": "string"
  },
  "visitorId": "string"
}
```

<h3 id="retailprojectslocationscatalogsusereventswrite-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaUserEvent](#schemagooglecloudretailv2alphauserevent)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.servingConfigs.predict

<a id="opIdretail.projects.locations.catalogs.servingConfigs.predict"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:predict \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "filter": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "pageSize": 0,
    "pageToken": "string",
    "params": {
      "property1": null,
      "property2": null
    },
    "userEvent": {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "attributionToken": "string",
      "cartId": "string",
      "completionDetail": {
        "completionAttributionToken": "string",
        "selectedPosition": 0,
        "selectedSuggestion": "string"
      },
      "entity": "string",
      "eventTime": "string",
      "eventType": "string",
      "experimentIds": [
        "string"
      ],
      "filter": "string",
      "offset": 0,
      "orderBy": "string",
      "pageCategories": [
        "string"
      ],
      "pageViewId": "string",
      "productDetails": [
        {
          "product": {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "audience": {
              "ageGroups": [
                "string"
              ],
              "genders": [
                "string"
              ]
            },
            "availability": "AVAILABILITY_UNSPECIFIED",
            "availableQuantity": 0,
            "availableTime": "string",
            "brands": [
              "string"
            ],
            "categories": [
              "string"
            ],
            "collectionMemberIds": [
              "string"
            ],
            "colorInfo": {
              "colorFamilies": [
                "string"
              ],
              "colors": [
                "string"
              ]
            },
            "conditions": [
              "string"
            ],
            "description": "string",
            "expireTime": "string",
            "fulfillmentInfo": [
              {
                "placeIds": [
                  "string"
                ],
                "type": "string"
              }
            ],
            "gtin": "string",
            "id": "string",
            "images": [
              {
                "height": 0,
                "uri": "string",
                "width": 0
              }
            ],
            "languageCode": "string",
            "materials": [
              "string"
            ],
            "name": "string",
            "patterns": [
              "string"
            ],
            "priceInfo": {
              "cost": 0,
              "currencyCode": "string",
              "originalPrice": 0,
              "price": 0,
              "priceEffectiveTime": "string",
              "priceExpireTime": "string"
            },
            "primaryProductId": "string",
            "promotions": [
              {
                "promotionId": "string"
              }
            ],
            "publishTime": "string",
            "rating": {
              "averageRating": 0,
              "ratingCount": 0,
              "ratingHistogram": [
                0
              ]
            },
            "retrievableFields": "string",
            "sizes": [
              "string"
            ],
            "tags": [
              "string"
            ],
            "title": "string",
            "ttl": "string",
            "type": "TYPE_UNSPECIFIED",
            "uri": "string"
          },
          "quantity": 0
        }
      ],
      "purchaseTransaction": {
        "cost": 0,
        "currencyCode": "string",
        "id": "string",
        "revenue": 0,
        "tax": 0
      },
      "referrerUri": "string",
      "searchQuery": "string",
      "sessionId": "string",
      "uri": "string",
      "userInfo": {
        "directUserRequest": true,
        "ipAddress": "string",
        "userAgent": "string",
        "userId": "string"
      },
      "visitorId": "string"
    },
    "validateOnly": true
  }'
```

`POST /v2alpha/{placement}:predict`

Makes a recommendation prediction.

> Body parameter

```json
{
  "filter": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pageSize": 0,
  "pageToken": "string",
  "params": {
    "property1": null,
    "property2": null
  },
  "userEvent": {
    "attributes": {
      "property1": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      },
      "property2": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      }
    },
    "attributionToken": "string",
    "cartId": "string",
    "completionDetail": {
      "completionAttributionToken": "string",
      "selectedPosition": 0,
      "selectedSuggestion": "string"
    },
    "entity": "string",
    "eventTime": "string",
    "eventType": "string",
    "experimentIds": [
      "string"
    ],
    "filter": "string",
    "offset": 0,
    "orderBy": "string",
    "pageCategories": [
      "string"
    ],
    "pageViewId": "string",
    "productDetails": [
      {
        "product": {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "audience": {
            "ageGroups": [
              "string"
            ],
            "genders": [
              "string"
            ]
          },
          "availability": "AVAILABILITY_UNSPECIFIED",
          "availableQuantity": 0,
          "availableTime": "string",
          "brands": [
            "string"
          ],
          "categories": [
            "string"
          ],
          "collectionMemberIds": [
            "string"
          ],
          "colorInfo": {
            "colorFamilies": [
              "string"
            ],
            "colors": [
              "string"
            ]
          },
          "conditions": [
            "string"
          ],
          "description": "string",
          "expireTime": "string",
          "fulfillmentInfo": [
            {
              "placeIds": [
                "string"
              ],
              "type": "string"
            }
          ],
          "gtin": "string",
          "id": "string",
          "images": [
            {
              "height": 0,
              "uri": "string",
              "width": 0
            }
          ],
          "languageCode": "string",
          "materials": [
            "string"
          ],
          "name": "string",
          "patterns": [
            "string"
          ],
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string"
          },
          "primaryProductId": "string",
          "promotions": [
            {
              "promotionId": "string"
            }
          ],
          "publishTime": "string",
          "rating": {
            "averageRating": 0,
            "ratingCount": 0,
            "ratingHistogram": [
              0
            ]
          },
          "retrievableFields": "string",
          "sizes": [
            "string"
          ],
          "tags": [
            "string"
          ],
          "title": "string",
          "ttl": "string",
          "type": "TYPE_UNSPECIFIED",
          "uri": "string"
        },
        "quantity": 0
      }
    ],
    "purchaseTransaction": {
      "cost": 0,
      "currencyCode": "string",
      "id": "string",
      "revenue": 0,
      "tax": 0
    },
    "referrerUri": "string",
    "searchQuery": "string",
    "sessionId": "string",
    "uri": "string",
    "userInfo": {
      "directUserRequest": true,
      "ipAddress": "string",
      "userAgent": "string",
      "userId": "string"
    },
    "visitorId": "string"
  },
  "validateOnly": true
}
```

<h3 id="retailprojectslocationscatalogsservingconfigspredict-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|placement|path|string|true|Required. Full resource name of the format: `{placement=projects/*/locations/global/catalogs/default_catalog/servingConfigs/*}` or `{placement=projects/*/locations/global/catalogs/default_catalog/placements/*}`. We recommend using the `servingConfigs` resource. `placements` is a legacy resource. The ID of the Recommendations AI serving config or placement. Before you can request predictions from your model, you must create at least one serving config or placement for it. For more information, see [Manage serving configs] (https://cloud.google.com/retail/docs/manage-configs). The full list of available serving configs can be seen at https://console.cloud.google.com/ai/retail/catalogs/default_catalog/configs|
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
|body|body|[GoogleCloudRetailV2alphaPredictRequest](#schemagooglecloudretailv2alphapredictrequest)|false|none|
|» filter|body|string|false|Filter for restricting prediction results with a length limit of 5,000 characters. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to products that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1,000 characters. Note: "Recently viewed" models don't support tag filtering at the moment. * filterOutOfStockItems. Restricts predictions to products that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, the API will return *no* results. If instead you want empty result sets to return generic (unfiltered) popular products, set `strictFiltering` to False in `PredictRequest.params`. Note that the API will never return items with storageStatus of "EXPIRED" or "DELETED" regardless of filter choices. If `filterSyntaxV2` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (colors: ANY("Red", "Blue")) AND NOT (categories: ANY("Phones")) * (availability: ANY("IN_STOCK")) AND (colors: ANY("Red") OR categories: ANY("Phones")) For more information, see [Filter recommendations](https://cloud.google.com/retail/docs/filter-recs).|
|» labels|body|object|false|The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.|
|» » **additionalProperties**|body|string|false|none|
|» pageSize|body|integer(int32)|false|Maximum number of results to return. Set this property to the number of prediction results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.|
|» pageToken|body|string|false|This field is not used; leave it unset.|
|» params|body|object|false|Additional domain specific parameters for the predictions. Allowed values: * `returnProduct`: Boolean. If set to true, the associated product object will be returned in the `results.metadata` field in the prediction response. * `returnScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned product will be set in the `results.metadata` field in the prediction response. The given 'score' indicates the probability of a product being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular products instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request-level control and adjusts prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request-level control and adjusts prediction results based on product category. * `filterSyntaxV2`: Boolean. False by default. If set to true, the `filter` field is interpreteted according to the new, attribute-based syntax.|
|» » **additionalProperties**|body|object|false|none|
|» userEvent|body|[GoogleCloudRetailV2alphaUserEvent](#schemagooglecloudretailv2alphauserevent)|false|Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserEvent.visitor_id or UserInfo.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserEvent.visitor_id to a random unique ID and leave UserInfo.user_id unset.|
|» validateOnly|body|boolean|false|Use validate only mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary products. Note that the validate only mode should only be used for testing the API, or if the model is not ready.|

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
  "attributionToken": "string",
  "missingIds": [
    "string"
  ],
  "results": [
    {
      "id": "string",
      "metadata": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "validateOnly": true
}
```

<h3 id="retailprojectslocationscatalogsservingconfigspredict-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaPredictResponse](#schemagooglecloudretailv2alphapredictresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.servingConfigs.search

<a id="opIdretail.projects.locations.catalogs.servingConfigs.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "boostSpec": {
      "conditionBoostSpecs": [
        {
          "boost": 0,
          "condition": "string"
        }
      ],
      "skipBoostSpecValidation": true
    },
    "branch": "string",
    "canonicalFilter": "string",
    "dynamicFacetSpec": {
      "mode": "MODE_UNSPECIFIED"
    },
    "entity": "string",
    "facetSpecs": [
      {
        "enableDynamicPosition": true,
        "excludedFilterKeys": [
          "string"
        ],
        "facetKey": {
          "caseInsensitive": true,
          "contains": [
            "string"
          ],
          "intervals": [
            {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          ],
          "key": "string",
          "orderBy": "string",
          "prefixes": [
            "string"
          ],
          "query": "string",
          "restrictedValues": [
            "string"
          ],
          "returnMinMax": true
        },
        "limit": 0
      }
    ],
    "filter": "string",
    "labels": {
      "property1": "string",
      "property2": "string"
    },
    "offset": 0,
    "orderBy": "string",
    "pageCategories": [
      "string"
    ],
    "pageSize": 0,
    "pageToken": "string",
    "personalizationSpec": {
      "mode": "MODE_UNSPECIFIED"
    },
    "query": "string",
    "queryExpansionSpec": {
      "condition": "CONDITION_UNSPECIFIED",
      "pinUnexpandedResults": true
    },
    "relevanceThreshold": "RELEVANCE_THRESHOLD_UNSPECIFIED",
    "searchMode": "SEARCH_MODE_UNSPECIFIED",
    "spellCorrectionSpec": {
      "mode": "MODE_UNSPECIFIED"
    },
    "userInfo": {
      "directUserRequest": true,
      "ipAddress": "string",
      "userAgent": "string",
      "userId": "string"
    },
    "variantRollupKeys": [
      "string"
    ],
    "visitorId": "string"
  }'
```

`POST /v2alpha/{placement}:search`

Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.

> Body parameter

```json
{
  "boostSpec": {
    "conditionBoostSpecs": [
      {
        "boost": 0,
        "condition": "string"
      }
    ],
    "skipBoostSpecValidation": true
  },
  "branch": "string",
  "canonicalFilter": "string",
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "entity": "string",
  "facetSpecs": [
    {
      "enableDynamicPosition": true,
      "excludedFilterKeys": [
        "string"
      ],
      "facetKey": {
        "caseInsensitive": true,
        "contains": [
          "string"
        ],
        "intervals": [
          {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        ],
        "key": "string",
        "orderBy": "string",
        "prefixes": [
          "string"
        ],
        "query": "string",
        "restrictedValues": [
          "string"
        ],
        "returnMinMax": true
      },
      "limit": 0
    }
  ],
  "filter": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "offset": 0,
  "orderBy": "string",
  "pageCategories": [
    "string"
  ],
  "pageSize": 0,
  "pageToken": "string",
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "query": "string",
  "queryExpansionSpec": {
    "condition": "CONDITION_UNSPECIFIED",
    "pinUnexpandedResults": true
  },
  "relevanceThreshold": "RELEVANCE_THRESHOLD_UNSPECIFIED",
  "searchMode": "SEARCH_MODE_UNSPECIFIED",
  "spellCorrectionSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "userInfo": {
    "directUserRequest": true,
    "ipAddress": "string",
    "userAgent": "string",
    "userId": "string"
  },
  "variantRollupKeys": [
    "string"
  ],
  "visitorId": "string"
}
```

<h3 id="retailprojectslocationscatalogsservingconfigssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|placement|path|string|true|Required. The resource name of the Retail Search serving config, such as `projects/*/locations/global/catalogs/default_catalog/servingConfigs/default_serving_config` or the name of the legacy placement resource, such as `projects/*/locations/global/catalogs/default_catalog/placements/default_search`. This field is used to identify the serving config name and the set of models that will be used to make the search.|
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
|body|body|[GoogleCloudRetailV2alphaSearchRequest](#schemagooglecloudretailv2alphasearchrequest)|false|none|
|» boostSpec|body|[GoogleCloudRetailV2alphaSearchRequestBoostSpec](#schemagooglecloudretailv2alphasearchrequestboostspec)|false|Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.|
|» branch|body|string|false|The branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use "default_branch" as the branch ID or leave this field empty, to search products under the default branch.|
|» canonicalFilter|body|string|false|The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.|
|» dynamicFacetSpec|body|[GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec](#schemagooglecloudretailv2alphasearchrequestdynamicfacetspec)|false|Deprecated. Refer to https://cloud.google.com/retail/docs/configs#dynamic to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.|
|» entity|body|string|false|The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it should be exactly matched with UserEvent.entity to get search results boosted by entity.|
|» facetSpecs|body|[[GoogleCloudRetailV2alphaSearchRequestFacetSpec](#schemagooglecloudretailv2alphasearchrequestfacetspec)]|false|Facet specifications for faceted search. If empty, no facets are returned. A maximum of 200 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.|
|» filter|body|string|false|The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID_ARGUMENT is returned.|
|» labels|body|object|false|The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.|
|» » **additionalProperties**|body|string|false|none|
|» offset|body|integer(int32)|false|A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an INVALID_ARGUMENT is returned.|
|» orderBy|body|string|false|The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID_ARGUMENT is returned.|
|» pageCategories|body|[string]|false|The categories associated with a category page. Must be set for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"].|
|» pageSize|body|integer(int32)|false|Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID_ARGUMENT is returned.|
|» pageToken|body|string|false|A page token SearchResponse.next_page_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.|
|» personalizationSpec|body|[GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec](#schemagooglecloudretailv2alphasearchrequestpersonalizationspec)|false|The specification for personalization. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec.|
|» query|body|string|false|Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page_categories.|
|» queryExpansionSpec|body|[GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec](#schemagooglecloudretailv2alphasearchrequestqueryexpansionspec)|false|The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).|
|» relevanceThreshold|body|string|false|The relevance threshold of the search results. Defaults to RelevanceThreshold.HIGH, which means only the most relevant results are shown, and the least number of results are returned. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#relevance_thresholding).|
|» searchMode|body|string|false|The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.|
|» spellCorrectionSpec|body|[GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec](#schemagooglecloudretailv2alphasearchrequestspellcorrectionspec)|false|The spell correction specification that specifies the mode under which spell correction will take effect.|
|» userInfo|body|[GoogleCloudRetailV2alphaUserInfo](#schemagooglecloudretailv2alphauserinfo)|false|User information.|
|» variantRollupKeys|body|[string]|false|The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are: * colorFamilies * price * originalPrice * discount * variantId * inventory(place_id,price) * inventory(place_id,original_price) * inventory(place_id,attributes.key), where key is any key in the Product.local_inventories.attributes map. * attributes.key, where key is any key in the Product.attributes map. * pickupInStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "pickup-in-store". * shipToStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "ship-to-store". * sameDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "same-day-delivery". * nextDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "next-day-delivery". * customFulfillment1.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-1". * customFulfillment2.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-2". * customFulfillment3.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-3". * customFulfillment4.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-4". * customFulfillment5.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned.|
|» visitorId|body|string|false|Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|
|» relevanceThreshold|RELEVANCE_THRESHOLD_UNSPECIFIED|
|» relevanceThreshold|HIGH|
|» relevanceThreshold|MEDIUM|
|» relevanceThreshold|LOW|
|» relevanceThreshold|LOWEST|
|» searchMode|SEARCH_MODE_UNSPECIFIED|
|» searchMode|PRODUCT_SEARCH_ONLY|
|» searchMode|FACETED_SEARCH_ONLY|

> Example responses

> 200 Response

```json
{
  "appliedControls": [
    "string"
  ],
  "attributionToken": "string",
  "correctedQuery": "string",
  "experimentInfo": [
    {
      "experiment": "string",
      "servingConfigExperiment": {
        "experimentServingConfig": "string",
        "originalServingConfig": "string"
      }
    }
  ],
  "facets": [
    {
      "dynamicFacet": true,
      "key": "string",
      "values": [
        {
          "count": "string",
          "interval": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "maxValue": 0,
          "minValue": 0,
          "value": "string"
        }
      ]
    }
  ],
  "invalidConditionBoostSpecs": [
    {
      "boost": 0,
      "condition": "string"
    }
  ],
  "nextPageToken": "string",
  "queryExpansionInfo": {
    "expandedQuery": true,
    "pinnedResultCount": "string"
  },
  "redirectUri": "string",
  "results": [
    {
      "id": "string",
      "matchingVariantCount": 0,
      "matchingVariantFields": {
        "property1": "string",
        "property2": "string"
      },
      "personalLabels": [
        "string"
      ],
      "product": {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "audience": {
          "ageGroups": [
            "string"
          ],
          "genders": [
            "string"
          ]
        },
        "availability": "AVAILABILITY_UNSPECIFIED",
        "availableQuantity": 0,
        "availableTime": "string",
        "brands": [
          "string"
        ],
        "categories": [
          "string"
        ],
        "collectionMemberIds": [
          "string"
        ],
        "colorInfo": {
          "colorFamilies": [
            "string"
          ],
          "colors": [
            "string"
          ]
        },
        "conditions": [
          "string"
        ],
        "description": "string",
        "expireTime": "string",
        "fulfillmentInfo": [
          {
            "placeIds": [
              "string"
            ],
            "type": "string"
          }
        ],
        "gtin": "string",
        "id": "string",
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "languageCode": "string",
        "localInventories": [
          {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "fulfillmentTypes": [
              "string"
            ],
            "placeId": "string",
            "priceInfo": {
              "cost": 0,
              "currencyCode": "string",
              "originalPrice": 0,
              "price": 0,
              "priceEffectiveTime": "string",
              "priceExpireTime": "string",
              "priceRange": {
                "originalPrice": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                },
                "price": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                }
              }
            }
          }
        ],
        "materials": [
          "string"
        ],
        "name": "string",
        "patterns": [
          "string"
        ],
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string",
          "priceRange": {
            "originalPrice": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            },
            "price": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          }
        },
        "primaryProductId": "string",
        "promotions": [
          {
            "promotionId": "string"
          }
        ],
        "publishTime": "string",
        "rating": {
          "averageRating": 0,
          "ratingCount": 0,
          "ratingHistogram": [
            0
          ]
        },
        "retrievableFields": "string",
        "sizes": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "title": "string",
        "ttl": "string",
        "type": "TYPE_UNSPECIFIED",
        "uri": "string",
        "variants": [
          {}
        ]
      },
      "variantRollupValues": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "totalSize": 0
}
```

<h3 id="retailprojectslocationscatalogsservingconfigssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaSearchResponse](#schemagooglecloudretailv2alphasearchresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.addFulfillmentPlaces

<a id="opIdretail.projects.locations.catalogs.branches.products.addFulfillmentPlaces"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:addFulfillmentPlaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addTime": "string",
    "allowMissing": true,
    "placeIds": [
      "string"
    ],
    "type": "string"
  }'
```

`POST /v2alpha/{product}:addFulfillmentPlaces`

It is recommended to use the ProductService.AddLocalInventories method instead of ProductService.AddFulfillmentPlaces. ProductService.AddLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

> Body parameter

```json
{
  "addTime": "string",
  "allowMissing": true,
  "placeIds": [
    "string"
  ],
  "type": "string"
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsaddfulfillmentplaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product|path|string|true|Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.|
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
|body|body|[GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest](#schemagooglecloudretailv2alphaaddfulfillmentplacesrequest)|false|none|
|» addTime|body|string(google-datetime)|false|The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.|
|» allowMissing|body|boolean|false|If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|» placeIds|body|[string]|false|Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery" to be added for this type. Duplicate IDs will be automatically ignored. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned. If the total number of place IDs exceeds 2000 for this type after adding, then the update will be rejected.|
|» type|body|string|false|Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsaddfulfillmentplaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.addLocalInventories

<a id="opIdretail.projects.locations.catalogs.branches.products.addLocalInventories"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:addLocalInventories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "addMask": "string",
    "addTime": "string",
    "allowMissing": true,
    "localInventories": [
      {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "fulfillmentTypes": [
          "string"
        ],
        "placeId": "string",
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string"
        }
      }
    ]
  }'
```

`POST /v2alpha/{product}:addLocalInventories`

Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

> Body parameter

```json
{
  "addMask": "string",
  "addTime": "string",
  "allowMissing": true,
  "localInventories": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "fulfillmentTypes": [
        "string"
      ],
      "placeId": "string",
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string"
      }
    }
  ]
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsaddlocalinventories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product|path|string|true|Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.|
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
|body|body|[GoogleCloudRetailV2alphaAddLocalInventoriesRequest](#schemagooglecloudretailv2alphaaddlocalinventoriesrequest)|false|none|
|» addMask|body|string(google-fieldmask)|false|Indicates which inventory fields in the provided list of LocalInventory to update. The field is updated to the provided value. If a field is set while the place does not have a previous local inventory, the local inventory at that store is created. If a field is set while the value of that field is not provided, the original field value, if it exists, is deleted. If the mask is not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.|
|» addTime|body|string(google-datetime)|false|The time when the inventory updates are issued. Used to prevent out-of-order updates on local inventory fields. If not provided, the internal system time will be used.|
|» allowMissing|body|boolean|false|If set to true, and the Product is not found, the local inventory will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|» localInventories|body|[[GoogleCloudRetailV2alphaLocalInventory](#schemagooglecloudretailv2alphalocalinventory)]|false|Required. A list of inventory information at difference places. Each place is identified by its place ID. At most 3000 inventories are allowed per request.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsaddlocalinventories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.removeFulfillmentPlaces

<a id="opIdretail.projects.locations.catalogs.branches.products.removeFulfillmentPlaces"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:removeFulfillmentPlaces \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowMissing": true,
    "placeIds": [
      "string"
    ],
    "removeTime": "string",
    "type": "string"
  }'
```

`POST /v2alpha/{product}:removeFulfillmentPlaces`

It is recommended to use the ProductService.RemoveLocalInventories method instead of ProductService.RemoveFulfillmentPlaces. ProductService.RemoveLocalInventories achieves the same results but provides more fine-grained control over ingesting local inventory data. Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

> Body parameter

```json
{
  "allowMissing": true,
  "placeIds": [
    "string"
  ],
  "removeTime": "string",
  "type": "string"
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsremovefulfillmentplaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product|path|string|true|Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.|
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
|body|body|[GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest](#schemagooglecloudretailv2alpharemovefulfillmentplacesrequest)|false|none|
|» allowMissing|body|boolean|false|If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|» placeIds|body|[string]|false|Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned.|
|» removeTime|body|string(google-datetime)|false|The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.|
|» type|body|string|false|Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsremovefulfillmentplaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.branches.products.removeLocalInventories

<a id="opIdretail.projects.locations.catalogs.branches.products.removeLocalInventories"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:removeLocalInventories \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allowMissing": true,
    "placeIds": [
      "string"
    ],
    "removeTime": "string"
  }'
```

`POST /v2alpha/{product}:removeLocalInventories`

Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete.

> Body parameter

```json
{
  "allowMissing": true,
  "placeIds": [
    "string"
  ],
  "removeTime": "string"
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsremovelocalinventories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product|path|string|true|Required. Full resource name of Product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/some_product_id`. If the caller does not have permission to access the Product, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.|
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
|body|body|[GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest](#schemagooglecloudretailv2alpharemovelocalinventoriesrequest)|false|none|
|» allowMissing|body|boolean|false|If set to true, and the Product is not found, the local inventory removal request will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|» placeIds|body|[string]|false|Required. A list of place IDs to have their inventory deleted. At most 3000 place IDs are allowed per request.|
|» removeTime|body|string(google-datetime)|false|The time when the inventory deletions are issued. Used to prevent out-of-order updates and deletions on local inventory fields. If not provided, the internal system time will be used.|

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
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

<h3 id="retailprojectslocationscatalogsbranchesproductsremovelocalinventories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.servingConfigs.addControl

<a id="opIdretail.projects.locations.catalogs.servingConfigs.addControl"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:addControl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "controlId": "string"
  }'
```

`POST /v2alpha/{servingConfig}:addControl`

Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.

> Body parameter

```json
{
  "controlId": "string"
}
```

<h3 id="retailprojectslocationscatalogsservingconfigsaddcontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servingConfig|path|string|true|Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`|
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
|body|body|[GoogleCloudRetailV2alphaAddControlRequest](#schemagooglecloudretailv2alphaaddcontrolrequest)|false|none|
|» controlId|body|string|false|Required. The id of the control to apply. Assumed to be in the same catalog as the serving config - if id is not found a NOT_FOUND error is returned.|

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
  "boostControlIds": [
    "string"
  ],
  "displayName": "string",
  "diversityLevel": "string",
  "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
  "doNotAssociateControlIds": [
    "string"
  ],
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "enableCategoryFilterLevel": "string",
  "facetControlIds": [
    "string"
  ],
  "filterControlIds": [
    "string"
  ],
  "ignoreControlIds": [
    "string"
  ],
  "modelId": "string",
  "name": "string",
  "onewaySynonymsControlIds": [
    "string"
  ],
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "priceRerankingLevel": "string",
  "redirectControlIds": [
    "string"
  ],
  "replacementControlIds": [
    "string"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ],
  "twowaySynonymsControlIds": [
    "string"
  ]
}
```

<h3 id="retailprojectslocationscatalogsservingconfigsaddcontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaServingConfig](#schemagooglecloudretailv2alphaservingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## retail.projects.locations.catalogs.servingConfigs.removeControl

<a id="opIdretail.projects.locations.catalogs.servingConfigs.removeControl"></a>

> Code samples

```bash
curl https://www.googleapis.com/v2alpha/string:removeControl \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "controlId": "string"
  }'
```

`POST /v2alpha/{servingConfig}:removeControl`

Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.

> Body parameter

```json
{
  "controlId": "string"
}
```

<h3 id="retailprojectslocationscatalogsservingconfigsremovecontrol-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servingConfig|path|string|true|Required. The source ServingConfig resource name . Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/servingConfigs/{serving_config_id}`|
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
|body|body|[GoogleCloudRetailV2alphaRemoveControlRequest](#schemagooglecloudretailv2alpharemovecontrolrequest)|false|none|
|» controlId|body|string|false|Required. The id of the control to apply. Assumed to be in the same catalog as the serving config.|

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
  "boostControlIds": [
    "string"
  ],
  "displayName": "string",
  "diversityLevel": "string",
  "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
  "doNotAssociateControlIds": [
    "string"
  ],
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "enableCategoryFilterLevel": "string",
  "facetControlIds": [
    "string"
  ],
  "filterControlIds": [
    "string"
  ],
  "ignoreControlIds": [
    "string"
  ],
  "modelId": "string",
  "name": "string",
  "onewaySynonymsControlIds": [
    "string"
  ],
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "priceRerankingLevel": "string",
  "redirectControlIds": [
    "string"
  ],
  "replacementControlIds": [
    "string"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ],
  "twowaySynonymsControlIds": [
    "string"
  ]
}
```

<h3 id="retailprojectslocationscatalogsservingconfigsremovecontrol-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudRetailV2alphaServingConfig](#schemagooglecloudretailv2alphaservingconfig)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleApiHttpBody">GoogleApiHttpBody</h2>
<!-- backwards compatibility -->
<a id="schemagoogleapihttpbody"></a>
<a id="schema_GoogleApiHttpBody"></a>
<a id="tocSgoogleapihttpbody"></a>
<a id="tocsgoogleapihttpbody"></a>

```json
{
  "contentType": "string",
  "data": "string",
  "extensions": [
    {
      "property1": null,
      "property2": null
    }
  ]
}
```

Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentType|string|false|none|The HTTP Content-Type header value specifying the content type of the body.|
|data|string(byte)|false|none|The HTTP request/response body as raw binary.|
|extensions|[object]|false|none|Application specific response metadata. Must be set in the first response for streaming APIs.|

<h2 id="tocS_GoogleCloudRetailLoggingErrorContext">GoogleCloudRetailLoggingErrorContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailloggingerrorcontext"></a>
<a id="schema_GoogleCloudRetailLoggingErrorContext"></a>
<a id="tocSgooglecloudretailloggingerrorcontext"></a>
<a id="tocsgooglecloudretailloggingerrorcontext"></a>

```json
{
  "httpRequest": {
    "responseStatusCode": 0
  },
  "reportLocation": {
    "functionName": "string"
  }
}
```

A description of the context in which an error occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|httpRequest|[GoogleCloudRetailLoggingHttpRequestContext](#schemagooglecloudretaillogginghttprequestcontext)|false|none|The HTTP request which was processed when the error was triggered.|
|reportLocation|[GoogleCloudRetailLoggingSourceLocation](#schemagooglecloudretailloggingsourcelocation)|false|none|The location in the source code where the decision was made to report the error, usually the place where it was logged.|

<h2 id="tocS_GoogleCloudRetailLoggingErrorLog">GoogleCloudRetailLoggingErrorLog</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailloggingerrorlog"></a>
<a id="schema_GoogleCloudRetailLoggingErrorLog"></a>
<a id="tocSgooglecloudretailloggingerrorlog"></a>
<a id="tocsgooglecloudretailloggingerrorlog"></a>

```json
{
  "context": {
    "httpRequest": {
      "responseStatusCode": 0
    },
    "reportLocation": {
      "functionName": "string"
    }
  },
  "importPayload": {
    "catalogItem": "string",
    "gcsPath": "string",
    "lineNumber": "string",
    "operationName": "string",
    "product": "string",
    "userEvent": "string"
  },
  "message": "string",
  "requestPayload": {
    "property1": null,
    "property2": null
  },
  "responsePayload": {
    "property1": null,
    "property2": null
  },
  "serviceContext": {
    "service": "string"
  },
  "status": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  }
}
```

An error log which is reported to the Error Reporting system. This proto a superset of google.devtools.clouderrorreporting.v1beta1.ReportedErrorEvent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|context|[GoogleCloudRetailLoggingErrorContext](#schemagooglecloudretailloggingerrorcontext)|false|none|A description of the context in which the error occurred.|
|importPayload|[GoogleCloudRetailLoggingImportErrorContext](#schemagooglecloudretailloggingimporterrorcontext)|false|none|The error payload that is populated on LRO import APIs.|
|message|string|false|none|A message describing the error.|
|requestPayload|object|false|none|The API request payload, represented as a protocol buffer. Most API request types are supported. For example: "type.googleapis.com/google.cloud.retail.v2.ProductService.CreateProductRequest" "type.googleapis.com/google.cloud.retail.v2.UserEventService.WriteUserEventRequest"|
|responsePayload|object|false|none|The API response payload, represented as a protocol buffer. This is used to log some "soft errors", where the response is valid but we consider there are some quality issues like unjoined events. The following API responses are supported and no PII is included: "google.cloud.retail.v2.PredictionService.Predict" "google.cloud.retail.v2.UserEventService.WriteUserEvent" "google.cloud.retail.v2.UserEventService.CollectUserEvent"|
|serviceContext|[GoogleCloudRetailLoggingServiceContext](#schemagooglecloudretailloggingservicecontext)|false|none|The service context in which this error has occurred.|
|status|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The RPC status associated with the error log.|

<h2 id="tocS_GoogleCloudRetailLoggingHttpRequestContext">GoogleCloudRetailLoggingHttpRequestContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretaillogginghttprequestcontext"></a>
<a id="schema_GoogleCloudRetailLoggingHttpRequestContext"></a>
<a id="tocSgooglecloudretaillogginghttprequestcontext"></a>
<a id="tocsgooglecloudretaillogginghttprequestcontext"></a>

```json
{
  "responseStatusCode": 0
}
```

HTTP request data that is related to a reported error.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|responseStatusCode|integer(int32)|false|none|The HTTP response status code for the request.|

<h2 id="tocS_GoogleCloudRetailLoggingImportErrorContext">GoogleCloudRetailLoggingImportErrorContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailloggingimporterrorcontext"></a>
<a id="schema_GoogleCloudRetailLoggingImportErrorContext"></a>
<a id="tocSgooglecloudretailloggingimporterrorcontext"></a>
<a id="tocsgooglecloudretailloggingimporterrorcontext"></a>

```json
{
  "catalogItem": "string",
  "gcsPath": "string",
  "lineNumber": "string",
  "operationName": "string",
  "product": "string",
  "userEvent": "string"
}
```

The error payload that is populated on LRO import APIs, including "google.cloud.retail.v2.ProductService.ImportProducts" and "google.cloud.retail.v2.EventService.ImportUserEvents".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogItem|string|false|none|The detailed content which caused the error on importing a catalog item.|
|gcsPath|string|false|none|Cloud Storage file path of the import source. Can be set for batch operation error.|
|lineNumber|string|false|none|Line number of the content in file. Should be empty for permission or batch operation error.|
|operationName|string|false|none|The operation resource name of the LRO.|
|product|string|false|none|The detailed content which caused the error on importing a product.|
|userEvent|string|false|none|The detailed content which caused the error on importing a user event.|

<h2 id="tocS_GoogleCloudRetailLoggingServiceContext">GoogleCloudRetailLoggingServiceContext</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailloggingservicecontext"></a>
<a id="schema_GoogleCloudRetailLoggingServiceContext"></a>
<a id="tocSgooglecloudretailloggingservicecontext"></a>
<a id="tocsgooglecloudretailloggingservicecontext"></a>

```json
{
  "service": "string"
}
```

Describes a running service that sends errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service|string|false|none|An identifier of the service. For example, "retail.googleapis.com".|

<h2 id="tocS_GoogleCloudRetailLoggingSourceLocation">GoogleCloudRetailLoggingSourceLocation</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailloggingsourcelocation"></a>
<a id="schema_GoogleCloudRetailLoggingSourceLocation"></a>
<a id="tocSgooglecloudretailloggingsourcelocation"></a>
<a id="tocsgooglecloudretailloggingsourcelocation"></a>

```json
{
  "functionName": "string"
}
```

Indicates a location in the source code of the service for which errors are reported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|functionName|string|false|none|Human-readable name of a function or method. For example, "google.cloud.retail.v2.UserEventService.ImportUserEvents".|

<h2 id="tocS_GoogleCloudRetailV2AddFulfillmentPlacesMetadata">GoogleCloudRetailV2AddFulfillmentPlacesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2addfulfillmentplacesmetadata"></a>
<a id="schema_GoogleCloudRetailV2AddFulfillmentPlacesMetadata"></a>
<a id="tocSgooglecloudretailv2addfulfillmentplacesmetadata"></a>
<a id="tocsgooglecloudretailv2addfulfillmentplacesmetadata"></a>

```json
{}
```

Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2AddFulfillmentPlacesResponse">GoogleCloudRetailV2AddFulfillmentPlacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2addfulfillmentplacesresponse"></a>
<a id="schema_GoogleCloudRetailV2AddFulfillmentPlacesResponse"></a>
<a id="tocSgooglecloudretailv2addfulfillmentplacesresponse"></a>
<a id="tocsgooglecloudretailv2addfulfillmentplacesresponse"></a>

```json
{}
```

Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2AddLocalInventoriesMetadata">GoogleCloudRetailV2AddLocalInventoriesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2addlocalinventoriesmetadata"></a>
<a id="schema_GoogleCloudRetailV2AddLocalInventoriesMetadata"></a>
<a id="tocSgooglecloudretailv2addlocalinventoriesmetadata"></a>
<a id="tocsgooglecloudretailv2addlocalinventoriesmetadata"></a>

```json
{}
```

Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2AddLocalInventoriesResponse">GoogleCloudRetailV2AddLocalInventoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2addlocalinventoriesresponse"></a>
<a id="schema_GoogleCloudRetailV2AddLocalInventoriesResponse"></a>
<a id="tocSgooglecloudretailv2addlocalinventoriesresponse"></a>
<a id="tocsgooglecloudretailv2addlocalinventoriesresponse"></a>

```json
{}
```

Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2CreateModelMetadata">GoogleCloudRetailV2CreateModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2createmodelmetadata"></a>
<a id="schema_GoogleCloudRetailV2CreateModelMetadata"></a>
<a id="tocSgooglecloudretailv2createmodelmetadata"></a>
<a id="tocsgooglecloudretailv2createmodelmetadata"></a>

```json
{
  "model": "string"
}
```

Metadata associated with a create operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|

<h2 id="tocS_GoogleCloudRetailV2ImportCompletionDataResponse">GoogleCloudRetailV2ImportCompletionDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2importcompletiondataresponse"></a>
<a id="schema_GoogleCloudRetailV2ImportCompletionDataResponse"></a>
<a id="tocSgooglecloudretailv2importcompletiondataresponse"></a>
<a id="tocsgooglecloudretailv2importcompletiondataresponse"></a>

```json
{
  "errorSamples": [
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
  ]
}
```

Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|

<h2 id="tocS_GoogleCloudRetailV2ImportErrorsConfig">GoogleCloudRetailV2ImportErrorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2importerrorsconfig"></a>
<a id="schema_GoogleCloudRetailV2ImportErrorsConfig"></a>
<a id="tocSgooglecloudretailv2importerrorsconfig"></a>
<a id="tocsgooglecloudretailv2importerrorsconfig"></a>

```json
{
  "gcsPrefix": "string"
}
```

Configuration of destination for Import related errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPrefix|string|false|none|Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.|

<h2 id="tocS_GoogleCloudRetailV2ImportMetadata">GoogleCloudRetailV2ImportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2importmetadata"></a>
<a id="schema_GoogleCloudRetailV2ImportMetadata"></a>
<a id="tocSgooglecloudretailv2importmetadata"></a>
<a id="tocsgooglecloudretailv2importmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
  "notificationPubsubTopic": "string",
  "requestId": "string",
  "successCount": "string",
  "updateTime": "string"
}
```

Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|failureCount|string(int64)|false|none|Count of entries that encountered errors while processing.|
|notificationPubsubTopic|string|false|none|Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.|
|requestId|string|false|none|Deprecated. This field is never set.|
|successCount|string(int64)|false|none|Count of entries that were processed successfully.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRetailV2ImportProductsResponse">GoogleCloudRetailV2ImportProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2importproductsresponse"></a>
<a id="schema_GoogleCloudRetailV2ImportProductsResponse"></a>
<a id="tocSgooglecloudretailv2importproductsresponse"></a>
<a id="tocsgooglecloudretailv2importproductsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  }
}
```

Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2ImportErrorsConfig](#schemagooglecloudretailv2importerrorsconfig)|false|none|Echoes the destination for the complete errors in the request if set.|

<h2 id="tocS_GoogleCloudRetailV2ImportUserEventsResponse">GoogleCloudRetailV2ImportUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2importusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2ImportUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2importusereventsresponse"></a>
<a id="tocsgooglecloudretailv2importusereventsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "importSummary": {
    "joinedEventsCount": "string",
    "unjoinedEventsCount": "string"
  }
}
```

Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2ImportErrorsConfig](#schemagooglecloudretailv2importerrorsconfig)|false|none|Echoes the destination for the complete errors if this field was set in the request.|
|importSummary|[GoogleCloudRetailV2UserEventImportSummary](#schemagooglecloudretailv2usereventimportsummary)|false|none|Aggregated statistics of user event import status.|

<h2 id="tocS_GoogleCloudRetailV2Model">GoogleCloudRetailV2Model</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2model"></a>
<a id="schema_GoogleCloudRetailV2Model"></a>
<a id="tocSgooglecloudretailv2model"></a>
<a id="tocsgooglecloudretailv2model"></a>

```json
{
  "createTime": "string",
  "dataState": "DATA_STATE_UNSPECIFIED",
  "displayName": "string",
  "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
  "lastTuneTime": "string",
  "name": "string",
  "optimizationObjective": "string",
  "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
  "servingConfigLists": [
    {
      "servingConfigIds": [
        "string"
      ]
    }
  ],
  "servingState": "SERVING_STATE_UNSPECIFIED",
  "trainingState": "TRAINING_STATE_UNSPECIFIED",
  "tuningOperation": "string",
  "type": "string",
  "updateTime": "string"
}
```

Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp the Recommendation Model was created at.|
|dataState|string|false|read-only|Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.|
|displayName|string|false|none|Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.|
|filteringOption|string|false|none|Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.|
|lastTuneTime|string(google-datetime)|false|read-only|Output only. The timestamp when the latest successful tune finished.|
|name|string|false|none|Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.|
|optimizationObjective|string|false|none|Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.|
|periodicTuningState|string|false|none|Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.|
|servingConfigLists|[[GoogleCloudRetailV2ModelServingConfigList](#schemagooglecloudretailv2modelservingconfiglist)]|false|read-only|Output only. The list of valid serving configs associated with the PageOptimizationConfig.|
|servingState|string|false|read-only|Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.|
|trainingState|string|false|none|Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.|
|tuningOperation|string|false|read-only|Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.|
|type|string|false|none|Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataState|DATA_STATE_UNSPECIFIED|
|dataState|DATA_OK|
|dataState|DATA_ERROR|
|filteringOption|RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED|
|filteringOption|RECOMMENDATIONS_FILTERING_DISABLED|
|filteringOption|RECOMMENDATIONS_FILTERING_ENABLED|
|periodicTuningState|PERIODIC_TUNING_STATE_UNSPECIFIED|
|periodicTuningState|PERIODIC_TUNING_DISABLED|
|periodicTuningState|ALL_TUNING_DISABLED|
|periodicTuningState|PERIODIC_TUNING_ENABLED|
|servingState|SERVING_STATE_UNSPECIFIED|
|servingState|INACTIVE|
|servingState|ACTIVE|
|servingState|TUNED|
|trainingState|TRAINING_STATE_UNSPECIFIED|
|trainingState|PAUSED|
|trainingState|TRAINING|

<h2 id="tocS_GoogleCloudRetailV2ModelServingConfigList">GoogleCloudRetailV2ModelServingConfigList</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2modelservingconfiglist"></a>
<a id="schema_GoogleCloudRetailV2ModelServingConfigList"></a>
<a id="tocSgooglecloudretailv2modelservingconfiglist"></a>
<a id="tocsgooglecloudretailv2modelservingconfiglist"></a>

```json
{
  "servingConfigIds": [
    "string"
  ]
}
```

Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servingConfigIds|[string]|false|none|Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`.|

<h2 id="tocS_GoogleCloudRetailV2PurgeMetadata">GoogleCloudRetailV2PurgeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2purgemetadata"></a>
<a id="schema_GoogleCloudRetailV2PurgeMetadata"></a>
<a id="tocSgooglecloudretailv2purgemetadata"></a>
<a id="tocsgooglecloudretailv2purgemetadata"></a>

```json
{}
```

Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.

<h2 id="tocS_GoogleCloudRetailV2PurgeUserEventsResponse">GoogleCloudRetailV2PurgeUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2purgeusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2PurgeUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2purgeusereventsresponse"></a>
<a id="tocsgooglecloudretailv2purgeusereventsresponse"></a>

```json
{
  "purgedEventsCount": "string"
}
```

Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purgedEventsCount|string(int64)|false|none|The total count of events purged as a result of the operation.|

<h2 id="tocS_GoogleCloudRetailV2RejoinUserEventsMetadata">GoogleCloudRetailV2RejoinUserEventsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2rejoinusereventsmetadata"></a>
<a id="schema_GoogleCloudRetailV2RejoinUserEventsMetadata"></a>
<a id="tocSgooglecloudretailv2rejoinusereventsmetadata"></a>
<a id="tocsgooglecloudretailv2rejoinusereventsmetadata"></a>

```json
{}
```

Metadata for `RejoinUserEvents` method.

<h2 id="tocS_GoogleCloudRetailV2RejoinUserEventsResponse">GoogleCloudRetailV2RejoinUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2rejoinusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2RejoinUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2rejoinusereventsresponse"></a>
<a id="tocsgooglecloudretailv2rejoinusereventsresponse"></a>

```json
{
  "rejoinedUserEventsCount": "string"
}
```

Response message for `RejoinUserEvents` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rejoinedUserEventsCount|string(int64)|false|none|Number of user events that were joined with latest product catalog.|

<h2 id="tocS_GoogleCloudRetailV2RemoveFulfillmentPlacesMetadata">GoogleCloudRetailV2RemoveFulfillmentPlacesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2removefulfillmentplacesmetadata"></a>
<a id="schema_GoogleCloudRetailV2RemoveFulfillmentPlacesMetadata"></a>
<a id="tocSgooglecloudretailv2removefulfillmentplacesmetadata"></a>
<a id="tocsgooglecloudretailv2removefulfillmentplacesmetadata"></a>

```json
{}
```

Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2RemoveFulfillmentPlacesResponse">GoogleCloudRetailV2RemoveFulfillmentPlacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2removefulfillmentplacesresponse"></a>
<a id="schema_GoogleCloudRetailV2RemoveFulfillmentPlacesResponse"></a>
<a id="tocSgooglecloudretailv2removefulfillmentplacesresponse"></a>
<a id="tocsgooglecloudretailv2removefulfillmentplacesresponse"></a>

```json
{}
```

Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2RemoveLocalInventoriesMetadata">GoogleCloudRetailV2RemoveLocalInventoriesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2removelocalinventoriesmetadata"></a>
<a id="schema_GoogleCloudRetailV2RemoveLocalInventoriesMetadata"></a>
<a id="tocSgooglecloudretailv2removelocalinventoriesmetadata"></a>
<a id="tocsgooglecloudretailv2removelocalinventoriesmetadata"></a>

```json
{}
```

Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2RemoveLocalInventoriesResponse">GoogleCloudRetailV2RemoveLocalInventoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2removelocalinventoriesresponse"></a>
<a id="schema_GoogleCloudRetailV2RemoveLocalInventoriesResponse"></a>
<a id="tocSgooglecloudretailv2removelocalinventoriesresponse"></a>
<a id="tocsgooglecloudretailv2removelocalinventoriesresponse"></a>

```json
{}
```

Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2SetInventoryMetadata">GoogleCloudRetailV2SetInventoryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2setinventorymetadata"></a>
<a id="schema_GoogleCloudRetailV2SetInventoryMetadata"></a>
<a id="tocSgooglecloudretailv2setinventorymetadata"></a>
<a id="tocsgooglecloudretailv2setinventorymetadata"></a>

```json
{}
```

Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method.

<h2 id="tocS_GoogleCloudRetailV2SetInventoryResponse">GoogleCloudRetailV2SetInventoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2setinventoryresponse"></a>
<a id="schema_GoogleCloudRetailV2SetInventoryResponse"></a>
<a id="tocSgooglecloudretailv2setinventoryresponse"></a>
<a id="tocsgooglecloudretailv2setinventoryresponse"></a>

```json
{}
```

Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method.

<h2 id="tocS_GoogleCloudRetailV2TuneModelMetadata">GoogleCloudRetailV2TuneModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2tunemodelmetadata"></a>
<a id="schema_GoogleCloudRetailV2TuneModelMetadata"></a>
<a id="tocSgooglecloudretailv2tunemodelmetadata"></a>
<a id="tocsgooglecloudretailv2tunemodelmetadata"></a>

```json
{
  "model": "string"
}
```

Metadata associated with a tune operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|

<h2 id="tocS_GoogleCloudRetailV2TuneModelResponse">GoogleCloudRetailV2TuneModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2tunemodelresponse"></a>
<a id="schema_GoogleCloudRetailV2TuneModelResponse"></a>
<a id="tocSgooglecloudretailv2tunemodelresponse"></a>
<a id="tocsgooglecloudretailv2tunemodelresponse"></a>

```json
{}
```

Response associated with a tune operation.

<h2 id="tocS_GoogleCloudRetailV2UserEventImportSummary">GoogleCloudRetailV2UserEventImportSummary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2usereventimportsummary"></a>
<a id="schema_GoogleCloudRetailV2UserEventImportSummary"></a>
<a id="tocSgooglecloudretailv2usereventimportsummary"></a>
<a id="tocsgooglecloudretailv2usereventimportsummary"></a>

```json
{
  "joinedEventsCount": "string",
  "unjoinedEventsCount": "string"
}
```

A summary of import result. The UserEventImportSummary summarizes the import status for user events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|joinedEventsCount|string(int64)|false|none|Count of user events imported with complete existing catalog information.|
|unjoinedEventsCount|string(int64)|false|none|Count of user events imported, but with catalog information not found in the imported catalog.|

<h2 id="tocS_GoogleCloudRetailV2alphaAddCatalogAttributeRequest">GoogleCloudRetailV2alphaAddCatalogAttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaddcatalogattributerequest"></a>
<a id="schema_GoogleCloudRetailV2alphaAddCatalogAttributeRequest"></a>
<a id="tocSgooglecloudretailv2alphaaddcatalogattributerequest"></a>
<a id="tocsgooglecloudretailv2alphaaddcatalogattributerequest"></a>

```json
{
  "catalogAttribute": {
    "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    "inUse": true,
    "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
    "key": "string",
    "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
    "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
    "type": "UNKNOWN"
  }
}
```

Request for CatalogService.AddCatalogAttribute method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogAttribute|[GoogleCloudRetailV2alphaCatalogAttribute](#schemagooglecloudretailv2alphacatalogattribute)|false|none|Required. The CatalogAttribute to add.|

<h2 id="tocS_GoogleCloudRetailV2alphaAddControlRequest">GoogleCloudRetailV2alphaAddControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaddcontrolrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaAddControlRequest"></a>
<a id="tocSgooglecloudretailv2alphaaddcontrolrequest"></a>
<a id="tocsgooglecloudretailv2alphaaddcontrolrequest"></a>

```json
{
  "controlId": "string"
}
```

Request for AddControl method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlId|string|false|none|Required. The id of the control to apply. Assumed to be in the same catalog as the serving config - if id is not found a NOT_FOUND error is returned.|

<h2 id="tocS_GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadata">GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaddfulfillmentplacesmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaAddFulfillmentPlacesMetadata"></a>
<a id="tocSgooglecloudretailv2alphaaddfulfillmentplacesmetadata"></a>
<a id="tocsgooglecloudretailv2alphaaddfulfillmentplacesmetadata"></a>

```json
{}
```

Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest">GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaddfulfillmentplacesrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest"></a>
<a id="tocSgooglecloudretailv2alphaaddfulfillmentplacesrequest"></a>
<a id="tocsgooglecloudretailv2alphaaddfulfillmentplacesrequest"></a>

```json
{
  "addTime": "string",
  "allowMissing": true,
  "placeIds": [
    "string"
  ],
  "type": "string"
}
```

Request message for ProductService.AddFulfillmentPlaces method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addTime|string(google-datetime)|false|none|The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.|
|allowMissing|boolean|false|none|If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|placeIds|[string]|false|none|Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery" to be added for this type. Duplicate IDs will be automatically ignored. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned. If the total number of place IDs exceeds 2000 for this type after adding, then the update will be rejected.|
|type|string|false|none|Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type.|

<h2 id="tocS_GoogleCloudRetailV2alphaAddFulfillmentPlacesResponse">GoogleCloudRetailV2alphaAddFulfillmentPlacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaddfulfillmentplacesresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaAddFulfillmentPlacesResponse"></a>
<a id="tocSgooglecloudretailv2alphaaddfulfillmentplacesresponse"></a>
<a id="tocsgooglecloudretailv2alphaaddfulfillmentplacesresponse"></a>

```json
{}
```

Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2alphaAddLocalInventoriesMetadata">GoogleCloudRetailV2alphaAddLocalInventoriesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaddlocalinventoriesmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaAddLocalInventoriesMetadata"></a>
<a id="tocSgooglecloudretailv2alphaaddlocalinventoriesmetadata"></a>
<a id="tocsgooglecloudretailv2alphaaddlocalinventoriesmetadata"></a>

```json
{}
```

Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2alphaAddLocalInventoriesRequest">GoogleCloudRetailV2alphaAddLocalInventoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaddlocalinventoriesrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaAddLocalInventoriesRequest"></a>
<a id="tocSgooglecloudretailv2alphaaddlocalinventoriesrequest"></a>
<a id="tocsgooglecloudretailv2alphaaddlocalinventoriesrequest"></a>

```json
{
  "addMask": "string",
  "addTime": "string",
  "allowMissing": true,
  "localInventories": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "fulfillmentTypes": [
        "string"
      ],
      "placeId": "string",
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string",
        "priceRange": {
          "originalPrice": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "price": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        }
      }
    }
  ]
}
```

Request message for ProductService.AddLocalInventories method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addMask|string(google-fieldmask)|false|none|Indicates which inventory fields in the provided list of LocalInventory to update. The field is updated to the provided value. If a field is set while the place does not have a previous local inventory, the local inventory at that store is created. If a field is set while the value of that field is not provided, the original field value, if it exists, is deleted. If the mask is not set or set with empty paths, all inventory fields will be updated. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.|
|addTime|string(google-datetime)|false|none|The time when the inventory updates are issued. Used to prevent out-of-order updates on local inventory fields. If not provided, the internal system time will be used.|
|allowMissing|boolean|false|none|If set to true, and the Product is not found, the local inventory will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|localInventories|[[GoogleCloudRetailV2alphaLocalInventory](#schemagooglecloudretailv2alphalocalinventory)]|false|none|Required. A list of inventory information at difference places. Each place is identified by its place ID. At most 3000 inventories are allowed per request.|

<h2 id="tocS_GoogleCloudRetailV2alphaAddLocalInventoriesResponse">GoogleCloudRetailV2alphaAddLocalInventoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaddlocalinventoriesresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaAddLocalInventoriesResponse"></a>
<a id="tocSgooglecloudretailv2alphaaddlocalinventoriesresponse"></a>
<a id="tocsgooglecloudretailv2alphaaddlocalinventoriesresponse"></a>

```json
{}
```

Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2alphaAttributesConfig">GoogleCloudRetailV2alphaAttributesConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaattributesconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaAttributesConfig"></a>
<a id="tocSgooglecloudretailv2alphaattributesconfig"></a>
<a id="tocsgooglecloudretailv2alphaattributesconfig"></a>

```json
{
  "attributeConfigLevel": "ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED",
  "catalogAttributes": {
    "property1": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "inUse": true,
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
      "type": "UNKNOWN"
    },
    "property2": {
      "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
      "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
      "inUse": true,
      "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
      "key": "string",
      "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
      "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
      "type": "UNKNOWN"
    }
  },
  "name": "string"
}
```

Catalog level attribute config.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeConfigLevel|string|false|read-only|Output only. The AttributeConfigLevel used for this catalog.|
|catalogAttributes|object|false|none|Enable attribute(s) config at catalog level. For example, indexable, dynamic_facetable, or searchable for each attribute. The key is catalog attribute's name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. The maximum number of catalog attributes allowed in a request is 1000.|
|name|string|false|none|Required. Immutable. The fully qualified resource name of the attribute config. Format: `projects/*/locations/*/catalogs/*/attributesConfig`|

#### Enumerated Values

|Property|Value|
|---|---|
|attributeConfigLevel|ATTRIBUTE_CONFIG_LEVEL_UNSPECIFIED|
|attributeConfigLevel|PRODUCT_LEVEL_ATTRIBUTE_CONFIG|
|attributeConfigLevel|CATALOG_LEVEL_ATTRIBUTE_CONFIG|

<h2 id="tocS_GoogleCloudRetailV2alphaAudience">GoogleCloudRetailV2alphaAudience</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaaudience"></a>
<a id="schema_GoogleCloudRetailV2alphaAudience"></a>
<a id="tocSgooglecloudretailv2alphaaudience"></a>
<a id="tocsgooglecloudretailv2alphaaudience"></a>

```json
{
  "ageGroups": [
    "string"
  ],
  "genders": [
    "string"
  ]
}
```

An intended audience of the Product for whom it's sold.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ageGroups|[string]|false|none|The age groups of the audience. Strongly encouraged to use the standard values: "newborn" (up to 3 months old), "infant" (3–12 months old), "toddler" (1–5 years old), "kids" (5–13 years old), "adult" (typically teens or older). At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [age_group](https://support.google.com/merchants/answer/6324463). Schema.org property [Product.audience.suggestedMinAge](https://schema.org/suggestedMinAge) and [Product.audience.suggestedMaxAge](https://schema.org/suggestedMaxAge).|
|genders|[string]|false|none|The genders of the audience. Strongly encouraged to use the standard values: "male", "female", "unisex". At most 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [gender](https://support.google.com/merchants/answer/6324479). Schema.org property [Product.audience.suggestedGender](https://schema.org/suggestedGender).|

<h2 id="tocS_GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest">GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphabatchremovecatalogattributesrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesRequest"></a>
<a id="tocSgooglecloudretailv2alphabatchremovecatalogattributesrequest"></a>
<a id="tocsgooglecloudretailv2alphabatchremovecatalogattributesrequest"></a>

```json
{
  "attributeKeys": [
    "string"
  ]
}
```

Request for CatalogService.BatchRemoveCatalogAttributes method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeKeys|[string]|false|none|Required. The attribute name keys of the CatalogAttributes to delete. A maximum of 1000 catalog attributes can be deleted in a batch.|

<h2 id="tocS_GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse">GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphabatchremovecatalogattributesresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse"></a>
<a id="tocSgooglecloudretailv2alphabatchremovecatalogattributesresponse"></a>
<a id="tocsgooglecloudretailv2alphabatchremovecatalogattributesresponse"></a>

```json
{
  "deletedCatalogAttributes": [
    "string"
  ],
  "resetCatalogAttributes": [
    "string"
  ]
}
```

Response of the CatalogService.BatchRemoveCatalogAttributes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deletedCatalogAttributes|[string]|false|none|Catalog attributes that were deleted. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted.|
|resetCatalogAttributes|[string]|false|none|Catalog attributes that were reset. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request.|

<h2 id="tocS_GoogleCloudRetailV2alphaBigQueryOutputResult">GoogleCloudRetailV2alphaBigQueryOutputResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphabigqueryoutputresult"></a>
<a id="schema_GoogleCloudRetailV2alphaBigQueryOutputResult"></a>
<a id="tocSgooglecloudretailv2alphabigqueryoutputresult"></a>
<a id="tocsgooglecloudretailv2alphabigqueryoutputresult"></a>

```json
{
  "datasetId": "string",
  "tableId": "string"
}
```

A BigQuery output result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string|false|none|The ID of a BigQuery Dataset.|
|tableId|string|false|none|The ID of a BigQuery Table.|

<h2 id="tocS_GoogleCloudRetailV2alphaBigQuerySource">GoogleCloudRetailV2alphaBigQuerySource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphabigquerysource"></a>
<a id="schema_GoogleCloudRetailV2alphaBigQuerySource"></a>
<a id="tocSgooglecloudretailv2alphabigquerysource"></a>
<a id="tocsgooglecloudretailv2alphabigquerysource"></a>

```json
{
  "dataSchema": "string",
  "datasetId": "string",
  "gcsStagingDir": "string",
  "partitionDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "projectId": "string",
  "tableId": "string"
}
```

BigQuery source import data from.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSchema|string|false|none|The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: The schema is available here: https://support.google.com/analytics/answer/3437719. * `user_event_ga4`: The schema is available here: https://support.google.com/analytics/answer/7029846. Supported values for autocomplete imports: * `suggestions` (default): One JSON completion suggestion per line. * `denylist`: One JSON deny suggestion per line. * `allowlist`: One JSON allow suggestion per line.|
|datasetId|string|false|none|Required. The BigQuery data set to copy the data from with a length limit of 1,024 characters.|
|gcsStagingDir|string|false|none|Intermediate Cloud Storage directory used for the import with a length limit of 2,000 characters. Can be specified if one wants to have the BigQuery export to a specific Cloud Storage directory.|
|partitionDate|[GoogleTypeDate](#schemagoogletypedate)|false|none|BigQuery time partitioned table's _PARTITIONDATE in YYYY-MM-DD format. Only supported in ImportProductsRequest.|
|projectId|string|false|none|The project ID (can be project # or ID) that the BigQuery source is in with a length limit of 128 characters. If not specified, inherits the project ID from the parent request.|
|tableId|string|false|none|Required. The BigQuery table to copy the data from with a length limit of 1,024 characters.|

<h2 id="tocS_GoogleCloudRetailV2alphaCatalog">GoogleCloudRetailV2alphaCatalog</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacatalog"></a>
<a id="schema_GoogleCloudRetailV2alphaCatalog"></a>
<a id="tocSgooglecloudretailv2alphacatalog"></a>
<a id="tocsgooglecloudretailv2alphacatalog"></a>

```json
{
  "displayName": "string",
  "merchantCenterLinkingConfig": {
    "links": [
      {
        "branchId": "string",
        "destinations": [
          "string"
        ],
        "feeds": [
          {
            "primaryFeedId": "string",
            "primaryFeedName": "string"
          }
        ],
        "languageCode": "string",
        "merchantCenterAccountId": "string",
        "regionCode": "string"
      }
    ]
  },
  "name": "string",
  "productLevelConfig": {
    "ingestionProductType": "string",
    "merchantCenterProductIdField": "string"
  }
}
```

The catalog configuration.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|Required. Immutable. The catalog display name. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
|merchantCenterLinkingConfig|[GoogleCloudRetailV2alphaMerchantCenterLinkingConfig](#schemagooglecloudretailv2alphamerchantcenterlinkingconfig)|false|none|The Merchant Center linking configuration. Once a link is added, the data stream from Merchant Center to Cloud Retail will be enabled automatically. The requester must have access to the merchant center account in order to make changes to this field.|
|name|string|false|none|Required. Immutable. The fully qualified resource name of the catalog.|
|productLevelConfig|[GoogleCloudRetailV2alphaProductLevelConfig](#schemagooglecloudretailv2alphaproductlevelconfig)|false|none|Required. The product level configuration.|

<h2 id="tocS_GoogleCloudRetailV2alphaCatalogAttribute">GoogleCloudRetailV2alphaCatalogAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacatalogattribute"></a>
<a id="schema_GoogleCloudRetailV2alphaCatalogAttribute"></a>
<a id="tocSgooglecloudretailv2alphacatalogattribute"></a>
<a id="tocsgooglecloudretailv2alphacatalogattribute"></a>

```json
{
  "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
  "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
  "inUse": true,
  "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
  "key": "string",
  "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
  "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
  "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
  "type": "UNKNOWN"
}
```

Catalog level attribute config for an attribute. For example, if customers want to enable/disable facet for a specific attribute.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicFacetableOption|string|false|none|If DYNAMIC_FACETABLE_ENABLED, attribute values are available for dynamic facet. Could only be DYNAMIC_FACETABLE_DISABLED if CatalogAttribute.indexable_option is INDEXABLE_DISABLED. Otherwise, an INVALID_ARGUMENT error is returned. Must be specified, otherwise throws INVALID_FORMAT error.|
|exactSearchableOption|string|false|none|If EXACT_SEARCHABLE_ENABLED, attribute values will be exact searchable. This property only applies to textual custom attributes and requires indexable set to enabled to enable exact-searchable. If unset, the server behavior defaults to EXACT_SEARCHABLE_DISABLED.|
|inUse|boolean|false|read-only|Output only. Indicates whether this attribute has been used by any products. `True` if at least one Product is using this attribute in Product.attributes. Otherwise, this field is `False`. CatalogAttribute can be pre-loaded by using CatalogService.AddCatalogAttribute, CatalogService.ImportCatalogAttributes, or CatalogService.UpdateAttributesConfig APIs. This field is `False` for pre-loaded CatalogAttributes. Only pre-loaded catalog attributes that are neither in use by products nor predefined can be deleted. Catalog attributes that are either in use by products or are predefined attributes cannot be deleted; however, their configuration properties will reset to default values upon removal request. After catalog changes, it takes about 10 minutes for this field to update.|
|indexableOption|string|false|none|When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if INDEXABLE_ENABLED attribute values are indexed so that it can be filtered, faceted, or boosted in SearchService.Search. Must be specified, otherwise throws INVALID_FORMAT error.|
|key|string|false|none|Required. Attribute name. For example: `color`, `brands`, `attributes.custom_attribute`, such as `attributes.xyz`. To be indexable, the attribute name can contain only alpha-numeric characters and underscores. For example, an attribute named `attributes.abc_xyz` can be indexed, but an attribute named `attributes.abc-xyz` cannot be indexed. If the attribute key starts with `attributes.`, then the attribute is a custom attribute. Attributes such as `brands`, `patterns`, and `title` are built-in and called system attributes.|
|recommendationsFilteringOption|string|false|none|When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if RECOMMENDATIONS_FILTERING_ENABLED, attribute values are filterable for recommendations. This option works for categorical features only, does not work for numerical features, inventory filtering.|
|retrievableOption|string|false|none|If RETRIEVABLE_ENABLED, attribute values are retrievable in the search results. If unset, the server behavior defaults to RETRIEVABLE_DISABLED.|
|searchableOption|string|false|none|When AttributesConfig.attribute_config_level is CATALOG_LEVEL_ATTRIBUTE_CONFIG, if SEARCHABLE_ENABLED, attribute values are searchable by text queries in SearchService.Search. If SEARCHABLE_ENABLED but attribute type is numerical, attribute values will not be searchable by text queries in SearchService.Search, as there are no text values associated to numerical attributes. Must be specified, otherwise throws INVALID_FORMAT error.|
|type|string|false|read-only|Output only. The type of this attribute. This is derived from the attribute in Product.attributes.|

#### Enumerated Values

|Property|Value|
|---|---|
|dynamicFacetableOption|DYNAMIC_FACETABLE_OPTION_UNSPECIFIED|
|dynamicFacetableOption|DYNAMIC_FACETABLE_ENABLED|
|dynamicFacetableOption|DYNAMIC_FACETABLE_DISABLED|
|exactSearchableOption|EXACT_SEARCHABLE_OPTION_UNSPECIFIED|
|exactSearchableOption|EXACT_SEARCHABLE_ENABLED|
|exactSearchableOption|EXACT_SEARCHABLE_DISABLED|
|indexableOption|INDEXABLE_OPTION_UNSPECIFIED|
|indexableOption|INDEXABLE_ENABLED|
|indexableOption|INDEXABLE_DISABLED|
|recommendationsFilteringOption|RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED|
|recommendationsFilteringOption|RECOMMENDATIONS_FILTERING_DISABLED|
|recommendationsFilteringOption|RECOMMENDATIONS_FILTERING_ENABLED|
|retrievableOption|RETRIEVABLE_OPTION_UNSPECIFIED|
|retrievableOption|RETRIEVABLE_ENABLED|
|retrievableOption|RETRIEVABLE_DISABLED|
|searchableOption|SEARCHABLE_OPTION_UNSPECIFIED|
|searchableOption|SEARCHABLE_ENABLED|
|searchableOption|SEARCHABLE_DISABLED|
|type|UNKNOWN|
|type|TEXTUAL|
|type|NUMERICAL|

<h2 id="tocS_GoogleCloudRetailV2alphaColorInfo">GoogleCloudRetailV2alphaColorInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacolorinfo"></a>
<a id="schema_GoogleCloudRetailV2alphaColorInfo"></a>
<a id="tocSgooglecloudretailv2alphacolorinfo"></a>
<a id="tocsgooglecloudretailv2alphacolorinfo"></a>

```json
{
  "colorFamilies": [
    "string"
  ],
  "colors": [
    "string"
  ]
}
```

The color information of a Product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|colorFamilies|[string]|false|none|The standard color families. Strongly recommended to use the following standard color groups: "Red", "Pink", "Orange", "Yellow", "Purple", "Green", "Cyan", "Blue", "Brown", "White", "Gray", "Black" and "Mixed". Normally it is expected to have only 1 color family. May consider using single "Mixed" instead of multiple values. A maximum of 5 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).|
|colors|[string]|false|none|The color display names, which may be different from standard color family names, such as the color aliases used in the website frontend. Normally it is expected to have only 1 color. May consider using single "Mixed" instead of multiple values. A maximum of 75 colors are allowed. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).|

<h2 id="tocS_GoogleCloudRetailV2alphaCompleteQueryResponse">GoogleCloudRetailV2alphaCompleteQueryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacompletequeryresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaCompleteQueryResponse"></a>
<a id="tocSgooglecloudretailv2alphacompletequeryresponse"></a>
<a id="tocsgooglecloudretailv2alphacompletequeryresponse"></a>

```json
{
  "attributeResults": {
    "property1": {
      "suggestions": [
        "string"
      ]
    },
    "property2": {
      "suggestions": [
        "string"
      ]
    }
  },
  "attributionToken": "string",
  "completionResults": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "facets": [
        {
          "dynamicFacet": true,
          "key": "string",
          "values": [
            {
              "count": "string",
              "interval": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              },
              "maxValue": 0,
              "minValue": 0,
              "value": "string"
            }
          ]
        }
      ],
      "suggestion": "string",
      "totalProductCount": 0
    }
  ],
  "recentSearchResults": [
    {
      "recentSearch": "string"
    }
  ]
}
```

Response of the autocomplete query.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeResults|object|false|none|A map of matched attribute suggestions. This field is only available for "cloud-retail" dataset. Current supported keys: * `brands` * `categories`|
|attributionToken|string|false|none|A unique complete token. This should be included in the UserEvent.completion_detail for search events resulting from this completion, which enables accurate attribution of complete model performance.|
|completionResults|[[GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult](#schemagooglecloudretailv2alphacompletequeryresponsecompletionresult)]|false|none|Results of the matching suggestions. The result list is ordered and the first result is top suggestion.|
|recentSearchResults|[[GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult](#schemagooglecloudretailv2alphacompletequeryresponserecentsearchresult)]|false|none|Matched recent searches of this user. The maximum number of recent searches is 10. This field is a restricted feature. Contact Retail Search support team if you are interested in enabling it. This feature is only available when CompleteQueryRequest.visitor_id field is set and UserEvent is imported. The recent searches satisfy the follow rules: * They are ordered from latest to oldest. * They are matched with CompleteQueryRequest.query case insensitively. * They are transformed to lower case. * They are UTF-8 safe. Recent searches are deduplicated. More recent searches will be reserved when duplication happens.|

<h2 id="tocS_GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult">GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacompletequeryresponseattributeresult"></a>
<a id="schema_GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult"></a>
<a id="tocSgooglecloudretailv2alphacompletequeryresponseattributeresult"></a>
<a id="tocsgooglecloudretailv2alphacompletequeryresponseattributeresult"></a>

```json
{
  "suggestions": [
    "string"
  ]
}
```

Resource that represents attribute results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suggestions|[string]|false|none|The list of suggestions for the attribute.|

<h2 id="tocS_GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult">GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacompletequeryresponsecompletionresult"></a>
<a id="schema_GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult"></a>
<a id="tocSgooglecloudretailv2alphacompletequeryresponsecompletionresult"></a>
<a id="tocsgooglecloudretailv2alphacompletequeryresponsecompletionresult"></a>

```json
{
  "attributes": {
    "property1": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    },
    "property2": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    }
  },
  "facets": [
    {
      "dynamicFacet": true,
      "key": "string",
      "values": [
        {
          "count": "string",
          "interval": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "maxValue": 0,
          "minValue": 0,
          "value": "string"
        }
      ]
    }
  ],
  "suggestion": "string",
  "totalProductCount": 0
}
```

Resource that represents completion results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Custom attributes for the suggestion term. * For "user-data", the attributes are additional custom attributes ingested through BigQuery. * For "cloud-retail", the attributes are product attributes generated by Cloud Retail. It requires UserEvent.product_details is imported properly.|
|facets|[[GoogleCloudRetailV2alphaSearchResponseFacet](#schemagooglecloudretailv2alphasearchresponsefacet)]|false|none|Facet information for the suggestion term. Gives the number of items resulting from a search with this suggestion term for each facet. This is an experimental feature for limited customers. If you want to receive this facet information, reach out to the Retail support team.|
|suggestion|string|false|none|The suggestion for the query.|
|totalProductCount|integer(int32)|false|none|Total number of products associated with a search with this suggestion. This is an experimental feature for limited customers. If you want to receive this product count information, reach out to the Retail support team.|

<h2 id="tocS_GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult">GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacompletequeryresponserecentsearchresult"></a>
<a id="schema_GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult"></a>
<a id="tocSgooglecloudretailv2alphacompletequeryresponserecentsearchresult"></a>
<a id="tocsgooglecloudretailv2alphacompletequeryresponserecentsearchresult"></a>

```json
{
  "recentSearch": "string"
}
```

Recent search of this user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recentSearch|string|false|none|The recent search query.|

<h2 id="tocS_GoogleCloudRetailV2alphaCompletionConfig">GoogleCloudRetailV2alphaCompletionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacompletionconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaCompletionConfig"></a>
<a id="tocSgooglecloudretailv2alphacompletionconfig"></a>
<a id="tocsgooglecloudretailv2alphacompletionconfig"></a>

```json
{
  "allowlistInputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    }
  },
  "autoLearning": true,
  "denylistInputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    }
  },
  "lastAllowlistImportOperation": "string",
  "lastDenylistImportOperation": "string",
  "lastSuggestionsImportOperation": "string",
  "matchingOrder": "string",
  "maxSuggestions": 0,
  "minPrefixLength": 0,
  "name": "string",
  "suggestionsInputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    }
  }
}
```

Catalog level autocomplete config for customers to customize autocomplete feature's settings.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowlistInputConfig|[GoogleCloudRetailV2alphaCompletionDataInputConfig](#schemagooglecloudretailv2alphacompletiondatainputconfig)|false|none|Output only. The source data for the latest import of the autocomplete allowlist phrases.|
|autoLearning|boolean|false|none|If set to true, the auto learning function is enabled. Auto learning uses user data to generate suggestions using ML techniques. Default value is false. Only after enabling auto learning can users use `cloud-retail` data in CompleteQueryRequest.|
|denylistInputConfig|[GoogleCloudRetailV2alphaCompletionDataInputConfig](#schemagooglecloudretailv2alphacompletiondatainputconfig)|false|none|Output only. The source data for the latest import of the autocomplete denylist phrases.|
|lastAllowlistImportOperation|string|false|read-only|Output only. Name of the LRO corresponding to the latest allowlist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation.|
|lastDenylistImportOperation|string|false|read-only|Output only. Name of the LRO corresponding to the latest denylist import. Can use GetOperation API to retrieve the latest state of the Long Running Operation.|
|lastSuggestionsImportOperation|string|false|read-only|Output only. Name of the LRO corresponding to the latest suggestion terms list import. Can use GetOperation API to retrieve the latest state of the Long Running Operation.|
|matchingOrder|string|false|none|Specifies the matching order for autocomplete suggestions, e.g., a query consisting of 'sh' with 'out-of-order' specified would suggest "women's shoes", whereas a query of 'red s' with 'exact-prefix' specified would suggest "red shoes". Currently supported values: * 'out-of-order' * 'exact-prefix' Default value: 'exact-prefix'.|
|maxSuggestions|integer(int32)|false|none|The maximum number of autocomplete suggestions returned per term. Default value is 20. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20.|
|minPrefixLength|integer(int32)|false|none|The minimum number of characters needed to be typed in order to get suggestions. Default value is 2. If left unset or set to 0, then will fallback to default value. Value range is 1 to 20.|
|name|string|false|none|Required. Immutable. Fully qualified name `projects/*/locations/*/catalogs/*/completionConfig`|
|suggestionsInputConfig|[GoogleCloudRetailV2alphaCompletionDataInputConfig](#schemagooglecloudretailv2alphacompletiondatainputconfig)|false|none|Output only. The source data for the latest import of the autocomplete suggestion phrases.|

<h2 id="tocS_GoogleCloudRetailV2alphaCompletionDataInputConfig">GoogleCloudRetailV2alphaCompletionDataInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacompletiondatainputconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaCompletionDataInputConfig"></a>
<a id="tocSgooglecloudretailv2alphacompletiondatainputconfig"></a>
<a id="tocsgooglecloudretailv2alphacompletiondatainputconfig"></a>

```json
{
  "bigQuerySource": {
    "dataSchema": "string",
    "datasetId": "string",
    "gcsStagingDir": "string",
    "partitionDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "projectId": "string",
    "tableId": "string"
  }
}
```

The input config source for completion data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigQuerySource|[GoogleCloudRetailV2alphaBigQuerySource](#schemagooglecloudretailv2alphabigquerysource)|false|none|Required. BigQuery input source. Add the IAM permission "BigQuery Data Viewer" for cloud-retail-customer-data-access@system.gserviceaccount.com before using this feature otherwise an error is thrown.|

<h2 id="tocS_GoogleCloudRetailV2alphaCompletionDetail">GoogleCloudRetailV2alphaCompletionDetail</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacompletiondetail"></a>
<a id="schema_GoogleCloudRetailV2alphaCompletionDetail"></a>
<a id="tocSgooglecloudretailv2alphacompletiondetail"></a>
<a id="tocsgooglecloudretailv2alphacompletiondetail"></a>

```json
{
  "completionAttributionToken": "string",
  "selectedPosition": 0,
  "selectedSuggestion": "string"
}
```

Detailed completion information including completion attribution token and clicked completion info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|completionAttributionToken|string|false|none|Completion attribution token in CompleteQueryResponse.attribution_token.|
|selectedPosition|integer(int32)|false|none|End user selected CompleteQueryResponse.CompletionResult.suggestion position, starting from 0.|
|selectedSuggestion|string|false|none|End user selected CompleteQueryResponse.CompletionResult.suggestion.|

<h2 id="tocS_GoogleCloudRetailV2alphaCondition">GoogleCloudRetailV2alphaCondition</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacondition"></a>
<a id="schema_GoogleCloudRetailV2alphaCondition"></a>
<a id="tocSgooglecloudretailv2alphacondition"></a>
<a id="tocsgooglecloudretailv2alphacondition"></a>

```json
{
  "activeTimeRange": [
    {
      "endTime": "string",
      "startTime": "string"
    }
  ],
  "queryTerms": [
    {
      "fullMatch": true,
      "value": "string"
    }
  ]
}
```

Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|activeTimeRange|[[GoogleCloudRetailV2alphaConditionTimeRange](#schemagooglecloudretailv2alphaconditiontimerange)]|false|none|Range of time(s) specifying when Condition is active. Condition true if any time range matches.|
|queryTerms|[[GoogleCloudRetailV2alphaConditionQueryTerm](#schemagooglecloudretailv2alphaconditionqueryterm)]|false|none|A list (up to 10 entries) of terms to match the query on. If not specified, match all queries. If many query terms are specified, the condition is matched if any of the terms is a match (i.e. using the OR operator).|

<h2 id="tocS_GoogleCloudRetailV2alphaConditionQueryTerm">GoogleCloudRetailV2alphaConditionQueryTerm</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaconditionqueryterm"></a>
<a id="schema_GoogleCloudRetailV2alphaConditionQueryTerm"></a>
<a id="tocSgooglecloudretailv2alphaconditionqueryterm"></a>
<a id="tocsgooglecloudretailv2alphaconditionqueryterm"></a>

```json
{
  "fullMatch": true,
  "value": "string"
}
```

Query terms that we want to match on.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullMatch|boolean|false|none|Whether this is supposed to be a full or partial match.|
|value|string|false|none|The value of the term to match on. Value cannot be empty. Value can have at most 3 terms if specified as a partial match. Each space separated string is considered as one term. For example, "a b c" is 3 terms and allowed, but " a b c d" is 4 terms and not allowed for a partial match.|

<h2 id="tocS_GoogleCloudRetailV2alphaConditionTimeRange">GoogleCloudRetailV2alphaConditionTimeRange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaconditiontimerange"></a>
<a id="schema_GoogleCloudRetailV2alphaConditionTimeRange"></a>
<a id="tocSgooglecloudretailv2alphaconditiontimerange"></a>
<a id="tocsgooglecloudretailv2alphaconditiontimerange"></a>

```json
{
  "endTime": "string",
  "startTime": "string"
}
```

Used for time-dependent conditions. Example: Want to have rule applied for week long sale.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endTime|string(google-datetime)|false|none|End of time range. Range is inclusive.|
|startTime|string(google-datetime)|false|none|Start of time range. Range is inclusive.|

<h2 id="tocS_GoogleCloudRetailV2alphaControl">GoogleCloudRetailV2alphaControl</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacontrol"></a>
<a id="schema_GoogleCloudRetailV2alphaControl"></a>
<a id="tocSgooglecloudretailv2alphacontrol"></a>
<a id="tocsgooglecloudretailv2alphacontrol"></a>

```json
{
  "associatedServingConfigIds": [
    "string"
  ],
  "displayName": "string",
  "facetSpec": {
    "enableDynamicPosition": true,
    "excludedFilterKeys": [
      "string"
    ],
    "facetKey": {
      "caseInsensitive": true,
      "contains": [
        "string"
      ],
      "intervals": [
        {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        }
      ],
      "key": "string",
      "orderBy": "string",
      "prefixes": [
        "string"
      ],
      "query": "string",
      "restrictedValues": [
        "string"
      ],
      "returnMinMax": true
    },
    "limit": 0
  },
  "name": "string",
  "rule": {
    "boostAction": {
      "boost": 0,
      "productsFilter": "string"
    },
    "condition": {
      "activeTimeRange": [
        {
          "endTime": "string",
          "startTime": "string"
        }
      ],
      "queryTerms": [
        {
          "fullMatch": true,
          "value": "string"
        }
      ]
    },
    "doNotAssociateAction": {
      "doNotAssociateTerms": [
        "string"
      ],
      "queryTerms": [
        "string"
      ],
      "terms": [
        "string"
      ]
    },
    "filterAction": {
      "filter": "string"
    },
    "ignoreAction": {
      "ignoreTerms": [
        "string"
      ]
    },
    "onewaySynonymsAction": {
      "onewayTerms": [
        "string"
      ],
      "queryTerms": [
        "string"
      ],
      "synonyms": [
        "string"
      ]
    },
    "redirectAction": {
      "redirectUri": "string"
    },
    "replacementAction": {
      "queryTerms": [
        "string"
      ],
      "replacementTerm": "string",
      "term": "string"
    },
    "twowaySynonymsAction": {
      "synonyms": [
        "string"
      ]
    }
  },
  "searchSolutionUseCase": [
    "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ]
}
```

Configures dynamic metadata that can be linked to a ServingConfig and affect search or recommendation results at serving time.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associatedServingConfigIds|[string]|false|read-only|Output only. List of serving config ids that are associated with this control in the same Catalog. Note the association is managed via the ServingConfig, this is an output only denormalized view.|
|displayName|string|false|none|Required. The human readable control display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is thrown.|
|facetSpec|[GoogleCloudRetailV2alphaSearchRequestFacetSpec](#schemagooglecloudretailv2alphasearchrequestfacetspec)|false|none|A facet specification to perform faceted search. Note that this field is deprecated and will throw NOT_IMPLEMENTED if used for creating a control.|
|name|string|false|none|Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/controls/*`|
|rule|[GoogleCloudRetailV2alphaRule](#schemagooglecloudretailv2alpharule)|false|none|A rule control - a condition-action pair. Enacts a set action when the condition is triggered. For example: Boost "gShoe" when query full matches "Running Shoes".|
|searchSolutionUseCase|[string]|false|none|Specifies the use case for the control. Affects what condition fields can be set. Only settable by search controls. Will default to SEARCH_SOLUTION_USE_CASE_SEARCH if not specified. Currently only allow one search_solution_use_case per control.|
|solutionTypes|[string]|false|none|Required. Immutable. The solution types that the control is used for. Currently we support setting only one type of solution at creation time. Only `SOLUTION_TYPE_SEARCH` value is supported at the moment. If no solution type is provided at creation time, will default to SOLUTION_TYPE_SEARCH.|

#### Enumerated Values

|Property|Value|
|---|---|
|searchSolutionUseCase|SEARCH_SOLUTION_USE_CASE_UNSPECIFIED|
|searchSolutionUseCase|SEARCH_SOLUTION_USE_CASE_SEARCH|
|searchSolutionUseCase|SEARCH_SOLUTION_USE_CASE_BROWSE|
|solutionTypes|SOLUTION_TYPE_UNSPECIFIED|
|solutionTypes|SOLUTION_TYPE_RECOMMENDATION|
|solutionTypes|SOLUTION_TYPE_SEARCH|

<h2 id="tocS_GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata">GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacreatemerchantcenteraccountlinkmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaCreateMerchantCenterAccountLinkMetadata"></a>
<a id="tocSgooglecloudretailv2alphacreatemerchantcenteraccountlinkmetadata"></a>
<a id="tocsgooglecloudretailv2alphacreatemerchantcenteraccountlinkmetadata"></a>

```json
{
  "createTime": "string",
  "updateTime": "string"
}
```

Common metadata related to the progress of the operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRetailV2alphaCreateModelMetadata">GoogleCloudRetailV2alphaCreateModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacreatemodelmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaCreateModelMetadata"></a>
<a id="tocSgooglecloudretailv2alphacreatemodelmetadata"></a>
<a id="tocsgooglecloudretailv2alphacreatemodelmetadata"></a>

```json
{
  "model": "string"
}
```

Metadata associated with a create operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|

<h2 id="tocS_GoogleCloudRetailV2alphaCustomAttribute">GoogleCloudRetailV2alphaCustomAttribute</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphacustomattribute"></a>
<a id="schema_GoogleCloudRetailV2alphaCustomAttribute"></a>
<a id="tocSgooglecloudretailv2alphacustomattribute"></a>
<a id="tocsgooglecloudretailv2alphacustomattribute"></a>

```json
{
  "indexable": true,
  "numbers": [
    0
  ],
  "searchable": true,
  "text": [
    "string"
  ]
}
```

A custom attribute that is not explicitly modeled in Product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|indexable|boolean|false|none|This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG' mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are indexed, so that they can be filtered, faceted or boosted in SearchService.Search. This field is ignored in a UserEvent. See SearchRequest.filter, SearchRequest.facet_specs and SearchRequest.boost_spec for more details.|
|numbers|[number(double)]|false|none|The numerical values of this custom attribute. For example, `[2.3, 15.4]` when the key is "lengths_cm". Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.|
|searchable|boolean|false|none|This field is normally ignored unless AttributesConfig.attribute_config_level of the Catalog is set to the deprecated 'PRODUCT_LEVEL_ATTRIBUTE_CONFIG' mode. For information about product-level attribute configuration, see [Configuration modes](https://cloud.google.com/retail/docs/attribute-config#config-modes). If true, custom attribute values are searchable by text queries in SearchService.Search. This field is ignored in a UserEvent. Only set if type text is set. Otherwise, a INVALID_ARGUMENT error is returned.|
|text|[string]|false|none|The textual values of this custom attribute. For example, `["yellow", "green"]` when the key is "color". Empty string is not allowed. Otherwise, an INVALID_ARGUMENT error is returned. Exactly one of text or numbers should be set. Otherwise, an INVALID_ARGUMENT error is returned.|

<h2 id="tocS_GoogleCloudRetailV2alphaExperimentInfo">GoogleCloudRetailV2alphaExperimentInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaexperimentinfo"></a>
<a id="schema_GoogleCloudRetailV2alphaExperimentInfo"></a>
<a id="tocSgooglecloudretailv2alphaexperimentinfo"></a>
<a id="tocsgooglecloudretailv2alphaexperimentinfo"></a>

```json
{
  "experiment": "string",
  "servingConfigExperiment": {
    "experimentServingConfig": "string",
    "originalServingConfig": "string"
  }
}
```

Metadata for active A/B testing Experiments.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experiment|string|false|none|The fully qualified resource name of the experiment that provides the serving config under test, should an active experiment exist. For example: `projects/*/locations/global/catalogs/default_catalog/experiments/experiment_id`|
|servingConfigExperiment|[GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment](#schemagooglecloudretailv2alphaexperimentinfoservingconfigexperiment)|false|none|A/B test between existing Cloud Retail Search ServingConfigs.|

<h2 id="tocS_GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment">GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaexperimentinfoservingconfigexperiment"></a>
<a id="schema_GoogleCloudRetailV2alphaExperimentInfoServingConfigExperiment"></a>
<a id="tocSgooglecloudretailv2alphaexperimentinfoservingconfigexperiment"></a>
<a id="tocsgooglecloudretailv2alphaexperimentinfoservingconfigexperiment"></a>

```json
{
  "experimentServingConfig": "string",
  "originalServingConfig": "string"
}
```

Metadata for active serving config A/B tests.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|experimentServingConfig|string|false|none|The fully qualified resource name of the serving config VariantArm.serving_config_id responsible for generating the search response. For example: `projects/*/locations/*/catalogs/*/servingConfigs/*`.|
|originalServingConfig|string|false|none|The fully qualified resource name of the original SearchRequest.placement in the search request prior to reassignment by experiment API. For example: `projects/*/locations/*/catalogs/*/servingConfigs/*`.|

<h2 id="tocS_GoogleCloudRetailV2alphaExportErrorsConfig">GoogleCloudRetailV2alphaExportErrorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaexporterrorsconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaExportErrorsConfig"></a>
<a id="tocSgooglecloudretailv2alphaexporterrorsconfig"></a>
<a id="tocsgooglecloudretailv2alphaexporterrorsconfig"></a>

```json
{
  "gcsPrefix": "string"
}
```

Configuration of destination for Export related errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPrefix|string|false|none|Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.|

<h2 id="tocS_GoogleCloudRetailV2alphaExportMetadata">GoogleCloudRetailV2alphaExportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaexportmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaExportMetadata"></a>
<a id="tocSgooglecloudretailv2alphaexportmetadata"></a>
<a id="tocsgooglecloudretailv2alphaexportmetadata"></a>

```json
{
  "createTime": "string",
  "updateTime": "string"
}
```

Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRetailV2alphaExportProductsResponse">GoogleCloudRetailV2alphaExportProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaexportproductsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaExportProductsResponse"></a>
<a id="tocSgooglecloudretailv2alphaexportproductsresponse"></a>
<a id="tocsgooglecloudretailv2alphaexportproductsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "outputResult": {
    "bigqueryResult": [
      {
        "datasetId": "string",
        "tableId": "string"
      }
    ],
    "gcsResult": [
      {
        "outputUri": "string"
      }
    ]
  }
}
```

Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2alphaExportErrorsConfig](#schemagooglecloudretailv2alphaexporterrorsconfig)|false|none|This field is never set.|
|outputResult|[GoogleCloudRetailV2alphaOutputResult](#schemagooglecloudretailv2alphaoutputresult)|false|none|Output result indicating where the data were exported to.|

<h2 id="tocS_GoogleCloudRetailV2alphaExportUserEventsResponse">GoogleCloudRetailV2alphaExportUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaexportusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaExportUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2alphaexportusereventsresponse"></a>
<a id="tocsgooglecloudretailv2alphaexportusereventsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "outputResult": {
    "bigqueryResult": [
      {
        "datasetId": "string",
        "tableId": "string"
      }
    ],
    "gcsResult": [
      {
        "outputUri": "string"
      }
    ]
  }
}
```

Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2alphaExportErrorsConfig](#schemagooglecloudretailv2alphaexporterrorsconfig)|false|none|This field is never set.|
|outputResult|[GoogleCloudRetailV2alphaOutputResult](#schemagooglecloudretailv2alphaoutputresult)|false|none|Output result indicating where the data were exported to.|

<h2 id="tocS_GoogleCloudRetailV2alphaFulfillmentInfo">GoogleCloudRetailV2alphaFulfillmentInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphafulfillmentinfo"></a>
<a id="schema_GoogleCloudRetailV2alphaFulfillmentInfo"></a>
<a id="tocSgooglecloudretailv2alphafulfillmentinfo"></a>
<a id="tocsgooglecloudretailv2alphafulfillmentinfo"></a>

```json
{
  "placeIds": [
    "string"
  ],
  "type": "string"
}
```

Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeIds|[string]|false|none|The IDs for this type, such as the store IDs for FulfillmentInfo.type.pickup-in-store or the region IDs for FulfillmentInfo.type.same-day-delivery. A maximum of 3000 values are allowed. Each value must be a string with a length limit of 30 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned.|
|type|string|false|none|The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned.|

<h2 id="tocS_GoogleCloudRetailV2alphaGcsOutputResult">GoogleCloudRetailV2alphaGcsOutputResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphagcsoutputresult"></a>
<a id="schema_GoogleCloudRetailV2alphaGcsOutputResult"></a>
<a id="tocSgooglecloudretailv2alphagcsoutputresult"></a>
<a id="tocsgooglecloudretailv2alphagcsoutputresult"></a>

```json
{
  "outputUri": "string"
}
```

A Gcs output result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUri|string|false|none|The uri of Gcs output|

<h2 id="tocS_GoogleCloudRetailV2alphaGcsSource">GoogleCloudRetailV2alphaGcsSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphagcssource"></a>
<a id="schema_GoogleCloudRetailV2alphaGcsSource"></a>
<a id="tocSgooglecloudretailv2alphagcssource"></a>
<a id="tocsgooglecloudretailv2alphagcssource"></a>

```json
{
  "dataSchema": "string",
  "inputUris": [
    "string"
  ]
}
```

Google Cloud Storage location for input content.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dataSchema|string|false|none|The schema to use when parsing the data from the source. Supported values for product imports: * `product` (default): One JSON Product per line. Each product must have a valid Product.id. * `product_merchant_center`: See [Importing catalog data from Merchant Center](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog#mc). Supported values for user events imports: * `user_event` (default): One JSON UserEvent per line. * `user_event_ga360`: Using https://support.google.com/analytics/answer/3437719. Supported values for control imports: * `control` (default): One JSON Control per line. Supported values for catalog attribute imports: * `catalog_attribute` (default): One CSV CatalogAttribute per line.|
|inputUris|[string]|false|none|Required. Google Cloud Storage URIs to input files. URI can be up to 2000 characters long. URIs can match the full object path (for example, `gs://bucket/directory/object.json`) or a pattern matching one or more files, such as `gs://bucket/directory/*.json`. A request can contain at most 100 files, and each file can be up to 2 GB. See [Importing product information](https://cloud.google.com/retail/recommendations-ai/docs/upload-catalog) for the expected file format and setup instructions.|

<h2 id="tocS_GoogleCloudRetailV2alphaGetDefaultBranchResponse">GoogleCloudRetailV2alphaGetDefaultBranchResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphagetdefaultbranchresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaGetDefaultBranchResponse"></a>
<a id="tocSgooglecloudretailv2alphagetdefaultbranchresponse"></a>
<a id="tocsgooglecloudretailv2alphagetdefaultbranchresponse"></a>

```json
{
  "branch": "string",
  "note": "string",
  "setTime": "string"
}
```

Response message of CatalogService.GetDefaultBranch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branch|string|false|none|Full resource name of the branch id currently set as default branch.|
|note|string|false|none|This corresponds to SetDefaultBranchRequest.note field, when this branch was set as default.|
|setTime|string(google-datetime)|false|none|The time when this branch is set to default.|

<h2 id="tocS_GoogleCloudRetailV2alphaImage">GoogleCloudRetailV2alphaImage</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimage"></a>
<a id="schema_GoogleCloudRetailV2alphaImage"></a>
<a id="tocSgooglecloudretailv2alphaimage"></a>
<a id="tocsgooglecloudretailv2alphaimage"></a>

```json
{
  "height": 0,
  "uri": "string",
  "width": 0
}
```

Product image. Recommendations AI and Retail Search do not use product images to improve prediction and search results. However, product images can be returned in results, and are shown in prediction or search previews in the console.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|integer(int32)|false|none|Height of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.|
|uri|string|false|none|Required. URI of the image. This field must be a valid UTF-8 encoded URI with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).|
|width|integer(int32)|false|none|Width of the image in number of pixels. This field must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.|

<h2 id="tocS_GoogleCloudRetailV2alphaImportCompletionDataRequest">GoogleCloudRetailV2alphaImportCompletionDataRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimportcompletiondatarequest"></a>
<a id="schema_GoogleCloudRetailV2alphaImportCompletionDataRequest"></a>
<a id="tocSgooglecloudretailv2alphaimportcompletiondatarequest"></a>
<a id="tocsgooglecloudretailv2alphaimportcompletiondatarequest"></a>

```json
{
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    }
  },
  "notificationPubsubTopic": "string"
}
```

Request message for ImportCompletionData methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|inputConfig|[GoogleCloudRetailV2alphaCompletionDataInputConfig](#schemagooglecloudretailv2alphacompletiondatainputconfig)|false|none|Required. The desired input location of the data.|
|notificationPubsubTopic|string|false|none|Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.|

<h2 id="tocS_GoogleCloudRetailV2alphaImportCompletionDataResponse">GoogleCloudRetailV2alphaImportCompletionDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimportcompletiondataresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaImportCompletionDataResponse"></a>
<a id="tocSgooglecloudretailv2alphaimportcompletiondataresponse"></a>
<a id="tocsgooglecloudretailv2alphaimportcompletiondataresponse"></a>

```json
{
  "errorSamples": [
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
  ]
}
```

Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|

<h2 id="tocS_GoogleCloudRetailV2alphaImportErrorsConfig">GoogleCloudRetailV2alphaImportErrorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimporterrorsconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaImportErrorsConfig"></a>
<a id="tocSgooglecloudretailv2alphaimporterrorsconfig"></a>
<a id="tocsgooglecloudretailv2alphaimporterrorsconfig"></a>

```json
{
  "gcsPrefix": "string"
}
```

Configuration of destination for Import related errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPrefix|string|false|none|Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.|

<h2 id="tocS_GoogleCloudRetailV2alphaImportMetadata">GoogleCloudRetailV2alphaImportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimportmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaImportMetadata"></a>
<a id="tocSgooglecloudretailv2alphaimportmetadata"></a>
<a id="tocsgooglecloudretailv2alphaimportmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
  "notificationPubsubTopic": "string",
  "requestId": "string",
  "successCount": "string",
  "transformedUserEventsMetadata": {
    "sourceEventsCount": "string",
    "transformedEventsCount": "string"
  },
  "updateTime": "string"
}
```

Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|failureCount|string(int64)|false|none|Count of entries that encountered errors while processing.|
|notificationPubsubTopic|string|false|none|Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.|
|requestId|string|false|none|Deprecated. This field is never set.|
|successCount|string(int64)|false|none|Count of entries that were processed successfully.|
|transformedUserEventsMetadata|[GoogleCloudRetailV2alphaTransformedUserEventsMetadata](#schemagooglecloudretailv2alphatransformedusereventsmetadata)|false|none|Metadata related to transform user events.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRetailV2alphaImportProductsRequest">GoogleCloudRetailV2alphaImportProductsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimportproductsrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaImportProductsRequest"></a>
<a id="tocSgooglecloudretailv2alphaimportproductsrequest"></a>
<a id="tocsgooglecloudretailv2alphaimportproductsrequest"></a>

```json
{
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    },
    "gcsSource": {
      "dataSchema": "string",
      "inputUris": [
        "string"
      ]
    },
    "productInlineSource": {
      "products": [
        {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "audience": {
            "ageGroups": [
              "string"
            ],
            "genders": [
              "string"
            ]
          },
          "availability": "AVAILABILITY_UNSPECIFIED",
          "availableQuantity": 0,
          "availableTime": "string",
          "brands": [
            "string"
          ],
          "categories": [
            "string"
          ],
          "collectionMemberIds": [
            "string"
          ],
          "colorInfo": {
            "colorFamilies": [
              "string"
            ],
            "colors": [
              "string"
            ]
          },
          "conditions": [
            "string"
          ],
          "description": "string",
          "expireTime": "string",
          "fulfillmentInfo": [
            {
              "placeIds": [
                "string"
              ],
              "type": "string"
            }
          ],
          "gtin": "string",
          "id": "string",
          "images": [
            {
              "height": 0,
              "uri": "string",
              "width": 0
            }
          ],
          "languageCode": "string",
          "localInventories": [
            {
              "attributes": {
                "property1": {
                  "indexable": true,
                  "numbers": [
                    0
                  ],
                  "searchable": true,
                  "text": [
                    "string"
                  ]
                },
                "property2": {
                  "indexable": true,
                  "numbers": [
                    0
                  ],
                  "searchable": true,
                  "text": [
                    "string"
                  ]
                }
              },
              "fulfillmentTypes": [
                "string"
              ],
              "placeId": "string",
              "priceInfo": {
                "cost": 0,
                "currencyCode": "string",
                "originalPrice": 0,
                "price": 0,
                "priceEffectiveTime": "string",
                "priceExpireTime": "string",
                "priceRange": {
                  "originalPrice": {
                    "exclusiveMaximum": 0,
                    "exclusiveMinimum": 0,
                    "maximum": 0,
                    "minimum": 0
                  },
                  "price": {
                    "exclusiveMaximum": 0,
                    "exclusiveMinimum": 0,
                    "maximum": 0,
                    "minimum": 0
                  }
                }
              }
            }
          ],
          "materials": [
            "string"
          ],
          "name": "string",
          "patterns": [
            "string"
          ],
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string",
            "priceRange": {
              "originalPrice": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              },
              "price": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              }
            }
          },
          "primaryProductId": "string",
          "promotions": [
            {
              "promotionId": "string"
            }
          ],
          "publishTime": "string",
          "rating": {
            "averageRating": 0,
            "ratingCount": 0,
            "ratingHistogram": [
              0
            ]
          },
          "retrievableFields": "string",
          "sizes": [
            "string"
          ],
          "tags": [
            "string"
          ],
          "title": "string",
          "ttl": "string",
          "type": "TYPE_UNSPECIFIED",
          "uri": "string",
          "variants": [
            {}
          ]
        }
      ]
    }
  },
  "notificationPubsubTopic": "string",
  "reconciliationMode": "RECONCILIATION_MODE_UNSPECIFIED",
  "requestId": "string",
  "skipDefaultBranchProtection": true,
  "updateMask": "string"
}
```

Request message for Import methods.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorsConfig|[GoogleCloudRetailV2alphaImportErrorsConfig](#schemagooglecloudretailv2alphaimporterrorsconfig)|false|none|The desired location of errors incurred during the Import.|
|inputConfig|[GoogleCloudRetailV2alphaProductInputConfig](#schemagooglecloudretailv2alphaproductinputconfig)|false|none|Required. The desired input location of the data.|
|notificationPubsubTopic|string|false|none|Full Pub/Sub topic name for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`. It has to be within the same project as ImportProductsRequest.parent. Make sure that `service-@gcp-sa-retail.iam.gserviceaccount.com` has the `pubsub.topics.publish` IAM permission on the topic.|
|reconciliationMode|string|false|none|The mode of reconciliation between existing products and the products to be imported. Defaults to ReconciliationMode.INCREMENTAL.|
|requestId|string|false|none|Deprecated. This field has no effect.|
|skipDefaultBranchProtection|boolean|false|none|If true, this performs the FULL import even if it would delete a large proportion of the products in the default branch, which could potentially cause outages if you have live predict/search traffic. Only supported when ImportProductsRequest.reconciliation_mode is set to `FULL`.|
|updateMask|string(google-fieldmask)|false|none|Indicates which fields in the provided imported `products` to update. If not set, all fields are updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|reconciliationMode|RECONCILIATION_MODE_UNSPECIFIED|
|reconciliationMode|INCREMENTAL|
|reconciliationMode|FULL|

<h2 id="tocS_GoogleCloudRetailV2alphaImportProductsResponse">GoogleCloudRetailV2alphaImportProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimportproductsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaImportProductsResponse"></a>
<a id="tocSgooglecloudretailv2alphaimportproductsresponse"></a>
<a id="tocsgooglecloudretailv2alphaimportproductsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  }
}
```

Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2alphaImportErrorsConfig](#schemagooglecloudretailv2alphaimporterrorsconfig)|false|none|Echoes the destination for the complete errors in the request if set.|

<h2 id="tocS_GoogleCloudRetailV2alphaImportUserEventsRequest">GoogleCloudRetailV2alphaImportUserEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimportusereventsrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaImportUserEventsRequest"></a>
<a id="tocSgooglecloudretailv2alphaimportusereventsrequest"></a>
<a id="tocsgooglecloudretailv2alphaimportusereventsrequest"></a>

```json
{
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "inputConfig": {
    "bigQuerySource": {
      "dataSchema": "string",
      "datasetId": "string",
      "gcsStagingDir": "string",
      "partitionDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "projectId": "string",
      "tableId": "string"
    },
    "gcsSource": {
      "dataSchema": "string",
      "inputUris": [
        "string"
      ]
    },
    "userEventInlineSource": {
      "userEvents": [
        {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "attributionToken": "string",
          "cartId": "string",
          "completionDetail": {
            "completionAttributionToken": "string",
            "selectedPosition": 0,
            "selectedSuggestion": "string"
          },
          "entity": "string",
          "eventTime": "string",
          "eventType": "string",
          "experimentIds": [
            "string"
          ],
          "filter": "string",
          "offset": 0,
          "orderBy": "string",
          "pageCategories": [
            "string"
          ],
          "pageViewId": "string",
          "productDetails": [
            {
              "product": {
                "attributes": {
                  "property1": {
                    "indexable": true,
                    "numbers": [
                      0
                    ],
                    "searchable": true,
                    "text": [
                      "string"
                    ]
                  },
                  "property2": {
                    "indexable": true,
                    "numbers": [
                      0
                    ],
                    "searchable": true,
                    "text": [
                      "string"
                    ]
                  }
                },
                "audience": {
                  "ageGroups": [
                    "string"
                  ],
                  "genders": [
                    "string"
                  ]
                },
                "availability": "AVAILABILITY_UNSPECIFIED",
                "availableQuantity": 0,
                "availableTime": "string",
                "brands": [
                  "string"
                ],
                "categories": [
                  "string"
                ],
                "collectionMemberIds": [
                  "string"
                ],
                "colorInfo": {
                  "colorFamilies": [
                    "string"
                  ],
                  "colors": [
                    "string"
                  ]
                },
                "conditions": [
                  "string"
                ],
                "description": "string",
                "expireTime": "string",
                "fulfillmentInfo": [
                  {
                    "placeIds": [
                      "string"
                    ],
                    "type": "string"
                  }
                ],
                "gtin": "string",
                "id": "string",
                "images": [
                  {
                    "height": 0,
                    "uri": "string",
                    "width": 0
                  }
                ],
                "languageCode": "string",
                "localInventories": [
                  {
                    "attributes": {
                      "property1": {
                        "indexable": true,
                        "numbers": [
                          0
                        ],
                        "searchable": true,
                        "text": [
                          "string"
                        ]
                      },
                      "property2": {
                        "indexable": true,
                        "numbers": [
                          0
                        ],
                        "searchable": true,
                        "text": [
                          "string"
                        ]
                      }
                    },
                    "fulfillmentTypes": [
                      "string"
                    ],
                    "placeId": "string",
                    "priceInfo": {
                      "cost": 0,
                      "currencyCode": "string",
                      "originalPrice": 0,
                      "price": 0,
                      "priceEffectiveTime": "string",
                      "priceExpireTime": "string",
                      "priceRange": {
                        "originalPrice": {
                          "exclusiveMaximum": 0,
                          "exclusiveMinimum": 0,
                          "maximum": 0,
                          "minimum": 0
                        },
                        "price": {
                          "exclusiveMaximum": 0,
                          "exclusiveMinimum": 0,
                          "maximum": 0,
                          "minimum": 0
                        }
                      }
                    }
                  }
                ],
                "materials": [
                  "string"
                ],
                "name": "string",
                "patterns": [
                  "string"
                ],
                "priceInfo": {
                  "cost": 0,
                  "currencyCode": "string",
                  "originalPrice": 0,
                  "price": 0,
                  "priceEffectiveTime": "string",
                  "priceExpireTime": "string",
                  "priceRange": {
                    "originalPrice": {
                      "exclusiveMaximum": 0,
                      "exclusiveMinimum": 0,
                      "maximum": 0,
                      "minimum": 0
                    },
                    "price": {
                      "exclusiveMaximum": 0,
                      "exclusiveMinimum": 0,
                      "maximum": 0,
                      "minimum": 0
                    }
                  }
                },
                "primaryProductId": "string",
                "promotions": [
                  {
                    "promotionId": "string"
                  }
                ],
                "publishTime": "string",
                "rating": {
                  "averageRating": 0,
                  "ratingCount": 0,
                  "ratingHistogram": [
                    0
                  ]
                },
                "retrievableFields": "string",
                "sizes": [
                  "string"
                ],
                "tags": [
                  "string"
                ],
                "title": "string",
                "ttl": "string",
                "type": "TYPE_UNSPECIFIED",
                "uri": "string",
                "variants": [
                  {}
                ]
              },
              "quantity": 0
            }
          ],
          "purchaseTransaction": {
            "cost": 0,
            "currencyCode": "string",
            "id": "string",
            "revenue": 0,
            "tax": 0
          },
          "referrerUri": "string",
          "searchQuery": "string",
          "sessionId": "string",
          "uri": "string",
          "userInfo": {
            "directUserRequest": true,
            "ipAddress": "string",
            "userAgent": "string",
            "userId": "string"
          },
          "visitorId": "string"
        }
      ]
    }
  }
}
```

Request message for the ImportUserEvents request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorsConfig|[GoogleCloudRetailV2alphaImportErrorsConfig](#schemagooglecloudretailv2alphaimporterrorsconfig)|false|none|The desired location of errors incurred during the Import. Cannot be set for inline user event imports.|
|inputConfig|[GoogleCloudRetailV2alphaUserEventInputConfig](#schemagooglecloudretailv2alphausereventinputconfig)|false|none|Required. The desired input location of the data.|

<h2 id="tocS_GoogleCloudRetailV2alphaImportUserEventsResponse">GoogleCloudRetailV2alphaImportUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaimportusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaImportUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2alphaimportusereventsresponse"></a>
<a id="tocsgooglecloudretailv2alphaimportusereventsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "importSummary": {
    "joinedEventsCount": "string",
    "unjoinedEventsCount": "string"
  }
}
```

Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2alphaImportErrorsConfig](#schemagooglecloudretailv2alphaimporterrorsconfig)|false|none|Echoes the destination for the complete errors if this field was set in the request.|
|importSummary|[GoogleCloudRetailV2alphaUserEventImportSummary](#schemagooglecloudretailv2alphausereventimportsummary)|false|none|Aggregated statistics of user event import status.|

<h2 id="tocS_GoogleCloudRetailV2alphaInterval">GoogleCloudRetailV2alphaInterval</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphainterval"></a>
<a id="schema_GoogleCloudRetailV2alphaInterval"></a>
<a id="tocSgooglecloudretailv2alphainterval"></a>
<a id="tocsgooglecloudretailv2alphainterval"></a>

```json
{
  "exclusiveMaximum": 0,
  "exclusiveMinimum": 0,
  "maximum": 0,
  "minimum": 0
}
```

A floating point interval.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exclusiveMaximum|number(double)|false|none|Exclusive upper bound.|
|exclusiveMinimum|number(double)|false|none|Exclusive lower bound.|
|maximum|number(double)|false|none|Inclusive upper bound.|
|minimum|number(double)|false|none|Inclusive lower bound.|

<h2 id="tocS_GoogleCloudRetailV2alphaListCatalogsResponse">GoogleCloudRetailV2alphaListCatalogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphalistcatalogsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaListCatalogsResponse"></a>
<a id="tocSgooglecloudretailv2alphalistcatalogsresponse"></a>
<a id="tocsgooglecloudretailv2alphalistcatalogsresponse"></a>

```json
{
  "catalogs": [
    {
      "displayName": "string",
      "merchantCenterLinkingConfig": {
        "links": [
          {
            "branchId": "string",
            "destinations": [
              "string"
            ],
            "feeds": [
              {
                "primaryFeedId": "string",
                "primaryFeedName": "string"
              }
            ],
            "languageCode": "string",
            "merchantCenterAccountId": "string",
            "regionCode": "string"
          }
        ]
      },
      "name": "string",
      "productLevelConfig": {
        "ingestionProductType": "string",
        "merchantCenterProductIdField": "string"
      }
    }
  ],
  "nextPageToken": "string"
}
```

Response for CatalogService.ListCatalogs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogs|[[GoogleCloudRetailV2alphaCatalog](#schemagooglecloudretailv2alphacatalog)]|false|none|All the customer's Catalogs.|
|nextPageToken|string|false|none|A token that can be sent as ListCatalogsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|

<h2 id="tocS_GoogleCloudRetailV2alphaListControlsResponse">GoogleCloudRetailV2alphaListControlsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphalistcontrolsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaListControlsResponse"></a>
<a id="tocSgooglecloudretailv2alphalistcontrolsresponse"></a>
<a id="tocsgooglecloudretailv2alphalistcontrolsresponse"></a>

```json
{
  "controls": [
    {
      "associatedServingConfigIds": [
        "string"
      ],
      "displayName": "string",
      "facetSpec": {
        "enableDynamicPosition": true,
        "excludedFilterKeys": [
          "string"
        ],
        "facetKey": {
          "caseInsensitive": true,
          "contains": [
            "string"
          ],
          "intervals": [
            {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          ],
          "key": "string",
          "orderBy": "string",
          "prefixes": [
            "string"
          ],
          "query": "string",
          "restrictedValues": [
            "string"
          ],
          "returnMinMax": true
        },
        "limit": 0
      },
      "name": "string",
      "rule": {
        "boostAction": {
          "boost": 0,
          "productsFilter": "string"
        },
        "condition": {
          "activeTimeRange": [
            {
              "endTime": "string",
              "startTime": "string"
            }
          ],
          "queryTerms": [
            {
              "fullMatch": true,
              "value": "string"
            }
          ]
        },
        "doNotAssociateAction": {
          "doNotAssociateTerms": [
            "string"
          ],
          "queryTerms": [
            "string"
          ],
          "terms": [
            "string"
          ]
        },
        "filterAction": {
          "filter": "string"
        },
        "ignoreAction": {
          "ignoreTerms": [
            "string"
          ]
        },
        "onewaySynonymsAction": {
          "onewayTerms": [
            "string"
          ],
          "queryTerms": [
            "string"
          ],
          "synonyms": [
            "string"
          ]
        },
        "redirectAction": {
          "redirectUri": "string"
        },
        "replacementAction": {
          "queryTerms": [
            "string"
          ],
          "replacementTerm": "string",
          "term": "string"
        },
        "twowaySynonymsAction": {
          "synonyms": [
            "string"
          ]
        }
      },
      "searchSolutionUseCase": [
        "SEARCH_SOLUTION_USE_CASE_UNSPECIFIED"
      ],
      "solutionTypes": [
        "SOLUTION_TYPE_UNSPECIFIED"
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response for ListControls method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controls|[[GoogleCloudRetailV2alphaControl](#schemagooglecloudretailv2alphacontrol)]|false|none|All the Controls for a given catalog.|
|nextPageToken|string|false|none|Pagination token, if not returned indicates the last page.|

<h2 id="tocS_GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse">GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphalistmerchantcenteraccountlinksresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse"></a>
<a id="tocSgooglecloudretailv2alphalistmerchantcenteraccountlinksresponse"></a>
<a id="tocsgooglecloudretailv2alphalistmerchantcenteraccountlinksresponse"></a>

```json
{
  "merchantCenterAccountLinks": [
    {
      "branchId": "string",
      "feedFilters": [
        {
          "primaryFeedId": "string",
          "primaryFeedName": "string"
        }
      ],
      "feedLabel": "string",
      "id": "string",
      "languageCode": "string",
      "merchantCenterAccountId": "string",
      "name": "string",
      "projectId": "string",
      "state": "STATE_UNSPECIFIED"
    }
  ]
}
```

Response for MerchantCenterAccountLinkService.ListMerchantCenterAccountLinks method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|merchantCenterAccountLinks|[[GoogleCloudRetailV2alphaMerchantCenterAccountLink](#schemagooglecloudretailv2alphamerchantcenteraccountlink)]|false|none|The links.|

<h2 id="tocS_GoogleCloudRetailV2alphaListModelsResponse">GoogleCloudRetailV2alphaListModelsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphalistmodelsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaListModelsResponse"></a>
<a id="tocSgooglecloudretailv2alphalistmodelsresponse"></a>
<a id="tocsgooglecloudretailv2alphalistmodelsresponse"></a>

```json
{
  "models": [
    {
      "createTime": "string",
      "dataState": "DATA_STATE_UNSPECIFIED",
      "displayName": "string",
      "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
      "lastTuneTime": "string",
      "name": "string",
      "optimizationObjective": "string",
      "pageOptimizationConfig": {
        "pageOptimizationEventType": "string",
        "panels": [
          {
            "candidates": [
              {
                "servingConfigId": "string"
              }
            ],
            "defaultCandidate": {
              "servingConfigId": "string"
            },
            "displayName": "string"
          }
        ],
        "restriction": "RESTRICTION_UNSPECIFIED"
      },
      "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
      "servingConfigLists": [
        {
          "servingConfigIds": [
            "string"
          ]
        }
      ],
      "servingState": "SERVING_STATE_UNSPECIFIED",
      "trainingState": "TRAINING_STATE_UNSPECIFIED",
      "tuningOperation": "string",
      "type": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response to a ListModelRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|models|[[GoogleCloudRetailV2alphaModel](#schemagooglecloudretailv2alphamodel)]|false|none|List of Models.|
|nextPageToken|string|false|none|Pagination token, if not returned indicates the last page.|

<h2 id="tocS_GoogleCloudRetailV2alphaListProductsResponse">GoogleCloudRetailV2alphaListProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphalistproductsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaListProductsResponse"></a>
<a id="tocSgooglecloudretailv2alphalistproductsresponse"></a>
<a id="tocsgooglecloudretailv2alphalistproductsresponse"></a>

```json
{
  "nextPageToken": "string",
  "products": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "audience": {
        "ageGroups": [
          "string"
        ],
        "genders": [
          "string"
        ]
      },
      "availability": "AVAILABILITY_UNSPECIFIED",
      "availableQuantity": 0,
      "availableTime": "string",
      "brands": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "collectionMemberIds": [
        "string"
      ],
      "colorInfo": {
        "colorFamilies": [
          "string"
        ],
        "colors": [
          "string"
        ]
      },
      "conditions": [
        "string"
      ],
      "description": "string",
      "expireTime": "string",
      "fulfillmentInfo": [
        {
          "placeIds": [
            "string"
          ],
          "type": "string"
        }
      ],
      "gtin": "string",
      "id": "string",
      "images": [
        {
          "height": 0,
          "uri": "string",
          "width": 0
        }
      ],
      "languageCode": "string",
      "localInventories": [
        {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "fulfillmentTypes": [
            "string"
          ],
          "placeId": "string",
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string",
            "priceRange": {
              "originalPrice": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              },
              "price": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              }
            }
          }
        }
      ],
      "materials": [
        "string"
      ],
      "name": "string",
      "patterns": [
        "string"
      ],
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string",
        "priceRange": {
          "originalPrice": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "price": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        }
      },
      "primaryProductId": "string",
      "promotions": [
        {
          "promotionId": "string"
        }
      ],
      "publishTime": "string",
      "rating": {
        "averageRating": 0,
        "ratingCount": 0,
        "ratingHistogram": [
          0
        ]
      },
      "retrievableFields": "string",
      "sizes": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "title": "string",
      "ttl": "string",
      "type": "TYPE_UNSPECIFIED",
      "uri": "string",
      "variants": [
        {}
      ]
    }
  ],
  "totalSize": 0
}
```

Response message for ProductService.ListProducts method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A token that can be sent as ListProductsRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|products|[[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)]|false|none|The Products.|
|totalSize|integer(int32)|false|none|The total count of matched Products irrespective of pagination. The total number of Products returned by pagination may be less than the total_size that matches. This field is ignored if ListProductsRequest.require_total_size is not set or ListProductsRequest.page_token is not empty.|

<h2 id="tocS_GoogleCloudRetailV2alphaListServingConfigsResponse">GoogleCloudRetailV2alphaListServingConfigsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphalistservingconfigsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaListServingConfigsResponse"></a>
<a id="tocSgooglecloudretailv2alphalistservingconfigsresponse"></a>
<a id="tocsgooglecloudretailv2alphalistservingconfigsresponse"></a>

```json
{
  "nextPageToken": "string",
  "servingConfigs": [
    {
      "boostControlIds": [
        "string"
      ],
      "displayName": "string",
      "diversityLevel": "string",
      "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
      "doNotAssociateControlIds": [
        "string"
      ],
      "dynamicFacetSpec": {
        "mode": "MODE_UNSPECIFIED"
      },
      "enableCategoryFilterLevel": "string",
      "facetControlIds": [
        "string"
      ],
      "filterControlIds": [
        "string"
      ],
      "ignoreControlIds": [
        "string"
      ],
      "modelId": "string",
      "name": "string",
      "onewaySynonymsControlIds": [
        "string"
      ],
      "personalizationSpec": {
        "mode": "MODE_UNSPECIFIED"
      },
      "priceRerankingLevel": "string",
      "redirectControlIds": [
        "string"
      ],
      "replacementControlIds": [
        "string"
      ],
      "solutionTypes": [
        "SOLUTION_TYPE_UNSPECIFIED"
      ],
      "twowaySynonymsControlIds": [
        "string"
      ]
    }
  ]
}
```

Response for ListServingConfigs method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|Pagination token, if not returned indicates the last page.|
|servingConfigs|[[GoogleCloudRetailV2alphaServingConfig](#schemagooglecloudretailv2alphaservingconfig)]|false|none|All the ServingConfigs for a given catalog.|

<h2 id="tocS_GoogleCloudRetailV2alphaLocalInventory">GoogleCloudRetailV2alphaLocalInventory</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphalocalinventory"></a>
<a id="schema_GoogleCloudRetailV2alphaLocalInventory"></a>
<a id="tocSgooglecloudretailv2alphalocalinventory"></a>
<a id="tocsgooglecloudretailv2alphalocalinventory"></a>

```json
{
  "attributes": {
    "property1": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    },
    "property2": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    }
  },
  "fulfillmentTypes": [
    "string"
  ],
  "placeId": "string",
  "priceInfo": {
    "cost": 0,
    "currencyCode": "string",
    "originalPrice": 0,
    "price": 0,
    "priceEffectiveTime": "string",
    "priceExpireTime": "string",
    "priceRange": {
      "originalPrice": {
        "exclusiveMaximum": 0,
        "exclusiveMinimum": 0,
        "maximum": 0,
        "minimum": 0
      },
      "price": {
        "exclusiveMaximum": 0,
        "exclusiveMinimum": 0,
        "maximum": 0,
        "minimum": 0
      }
    }
  }
}
```

The inventory information at a place (e.g. a store) identified by a place ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Additional local inventory attributes, for example, store name, promotion tags, etc. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * At most 30 attributes are allowed. * The key must be a UTF-8 encoded string with a length limit of 32 characters. * The key must match the pattern: `a-zA-Z0-9*`. For example, key0LikeThis or KEY_1_LIKE_THIS. * The attribute values must be of the same type (text or number). * Only 1 value is allowed for each attribute. * For text values, the length limit is 256 UTF-8 characters. * The attribute does not support search. The `searchable` field should be unset or set to false. * The max summed total bytes of custom attribute keys and values per product is 5MiB.|
|fulfillmentTypes|[string]|false|none|Input only. Supported fulfillment types. Valid fulfillment type values include commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. All the elements must be distinct. Otherwise, an INVALID_ARGUMENT error is returned.|
|placeId|string|false|none|The place ID for the current set of inventory information.|
|priceInfo|[GoogleCloudRetailV2alphaPriceInfo](#schemagooglecloudretailv2alphapriceinfo)|false|none|Product price and cost information. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371).|

<h2 id="tocS_GoogleCloudRetailV2alphaMerchantCenterAccountLink">GoogleCloudRetailV2alphaMerchantCenterAccountLink</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamerchantcenteraccountlink"></a>
<a id="schema_GoogleCloudRetailV2alphaMerchantCenterAccountLink"></a>
<a id="tocSgooglecloudretailv2alphamerchantcenteraccountlink"></a>
<a id="tocsgooglecloudretailv2alphamerchantcenteraccountlink"></a>

```json
{
  "branchId": "string",
  "feedFilters": [
    {
      "primaryFeedId": "string",
      "primaryFeedName": "string"
    }
  ],
  "feedLabel": "string",
  "id": "string",
  "languageCode": "string",
  "merchantCenterAccountId": "string",
  "name": "string",
  "projectId": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchId|string|false|none|Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch id can only have one linked merchant center account id.|
|feedFilters|[[GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter](#schemagooglecloudretailv2alphamerchantcenteraccountlinkmerchantcenterfeedfilter)]|false|none|Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.|
|feedLabel|string|false|none|The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`.|
|id|string|false|read-only|Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`.|
|languageCode|string|false|none|Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`.|
|merchantCenterAccountId|string(int64)|false|none|Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.|
|name|string|false|read-only|Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.|
|projectId|string|false|read-only|Output only. Google Cloud project ID.|
|state|string|false|read-only|Output only. Represents the state of the link.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|ACTIVE|
|state|FAILED|

<h2 id="tocS_GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter">GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamerchantcenteraccountlinkmerchantcenterfeedfilter"></a>
<a id="schema_GoogleCloudRetailV2alphaMerchantCenterAccountLinkMerchantCenterFeedFilter"></a>
<a id="tocSgooglecloudretailv2alphamerchantcenteraccountlinkmerchantcenterfeedfilter"></a>
<a id="tocsgooglecloudretailv2alphamerchantcenteraccountlinkmerchantcenterfeedfilter"></a>

```json
{
  "primaryFeedId": "string",
  "primaryFeedName": "string"
}
```

Merchant Center Feed filter criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryFeedId|string(int64)|false|none|Merchant Center primary feed ID.|
|primaryFeedName|string|false|none|Merchant Center primary feed name. The name is used for the display purposes only.|

<h2 id="tocS_GoogleCloudRetailV2alphaMerchantCenterFeedFilter">GoogleCloudRetailV2alphaMerchantCenterFeedFilter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamerchantcenterfeedfilter"></a>
<a id="schema_GoogleCloudRetailV2alphaMerchantCenterFeedFilter"></a>
<a id="tocSgooglecloudretailv2alphamerchantcenterfeedfilter"></a>
<a id="tocsgooglecloudretailv2alphamerchantcenterfeedfilter"></a>

```json
{
  "primaryFeedId": "string",
  "primaryFeedName": "string"
}
```

Merchant Center Feed filter criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryFeedId|string(int64)|false|none|Merchant Center primary feed ID.|
|primaryFeedName|string|false|none|Merchant Center primary feed name. The name is used for the display purposes only.|

<h2 id="tocS_GoogleCloudRetailV2alphaMerchantCenterLink">GoogleCloudRetailV2alphaMerchantCenterLink</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamerchantcenterlink"></a>
<a id="schema_GoogleCloudRetailV2alphaMerchantCenterLink"></a>
<a id="tocSgooglecloudretailv2alphamerchantcenterlink"></a>
<a id="tocsgooglecloudretailv2alphamerchantcenterlink"></a>

```json
{
  "branchId": "string",
  "destinations": [
    "string"
  ],
  "feeds": [
    {
      "primaryFeedId": "string",
      "primaryFeedName": "string"
    }
  ],
  "languageCode": "string",
  "merchantCenterAccountId": "string",
  "regionCode": "string"
}
```

Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchId|string|false|none|The branch ID (e.g. 0/1/2) within this catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch ID can only have one linked merchant center account ID.|
|destinations|[string]|false|none|String representing the destination to import for, all if left empty. List of possible values is given in [Included destination](https://support.google.com/merchants/answer/7501026). List of allowed string values: "Shopping_ads", "Buy_on_google_listings", "Display_ads", "Local_inventory _ads", "Free_listings", "Free_local_listings" NOTE: The string values are case sensitive.|
|feeds|[[GoogleCloudRetailV2alphaMerchantCenterFeedFilter](#schemagooglecloudretailv2alphamerchantcenterfeedfilter)]|false|none|Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.|
|languageCode|string|false|none|Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty no language filtering will be performed. Example value: `en`.|
|merchantCenterAccountId|string(int64)|false|none|Required. The linked [Merchant center account ID](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.|
|regionCode|string|false|none|Region code of offers to accept. 2-letter Uppercase ISO 3166-1 alpha-2 code. List of values can be found [here](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) under the `region` tag. If left blank no region filtering will be performed. Example value: `US`.|

<h2 id="tocS_GoogleCloudRetailV2alphaMerchantCenterLinkingConfig">GoogleCloudRetailV2alphaMerchantCenterLinkingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamerchantcenterlinkingconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaMerchantCenterLinkingConfig"></a>
<a id="tocSgooglecloudretailv2alphamerchantcenterlinkingconfig"></a>
<a id="tocsgooglecloudretailv2alphamerchantcenterlinkingconfig"></a>

```json
{
  "links": [
    {
      "branchId": "string",
      "destinations": [
        "string"
      ],
      "feeds": [
        {
          "primaryFeedId": "string",
          "primaryFeedName": "string"
        }
      ],
      "languageCode": "string",
      "merchantCenterAccountId": "string",
      "regionCode": "string"
    }
  ]
}
```

Configures Merchant Center linking. Links contained in the config will be used to sync data from a Merchant Center account to a Cloud Retail branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|links|[[GoogleCloudRetailV2alphaMerchantCenterLink](#schemagooglecloudretailv2alphamerchantcenterlink)]|false|none|Links between Merchant Center accounts and branches.|

<h2 id="tocS_GoogleCloudRetailV2alphaModel">GoogleCloudRetailV2alphaModel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamodel"></a>
<a id="schema_GoogleCloudRetailV2alphaModel"></a>
<a id="tocSgooglecloudretailv2alphamodel"></a>
<a id="tocsgooglecloudretailv2alphamodel"></a>

```json
{
  "createTime": "string",
  "dataState": "DATA_STATE_UNSPECIFIED",
  "displayName": "string",
  "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
  "lastTuneTime": "string",
  "name": "string",
  "optimizationObjective": "string",
  "pageOptimizationConfig": {
    "pageOptimizationEventType": "string",
    "panels": [
      {
        "candidates": [
          {
            "servingConfigId": "string"
          }
        ],
        "defaultCandidate": {
          "servingConfigId": "string"
        },
        "displayName": "string"
      }
    ],
    "restriction": "RESTRICTION_UNSPECIFIED"
  },
  "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
  "servingConfigLists": [
    {
      "servingConfigIds": [
        "string"
      ]
    }
  ],
  "servingState": "SERVING_STATE_UNSPECIFIED",
  "trainingState": "TRAINING_STATE_UNSPECIFIED",
  "tuningOperation": "string",
  "type": "string",
  "updateTime": "string"
}
```

Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp the Recommendation Model was created at.|
|dataState|string|false|read-only|Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.|
|displayName|string|false|none|Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.|
|filteringOption|string|false|none|Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.|
|lastTuneTime|string(google-datetime)|false|read-only|Output only. The timestamp when the latest successful tune finished.|
|name|string|false|none|Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.|
|optimizationObjective|string|false|none|Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.|
|pageOptimizationConfig|[GoogleCloudRetailV2alphaModelPageOptimizationConfig](#schemagooglecloudretailv2alphamodelpageoptimizationconfig)|false|none|Optional. The page optimization config.|
|periodicTuningState|string|false|none|Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.|
|servingConfigLists|[[GoogleCloudRetailV2alphaModelServingConfigList](#schemagooglecloudretailv2alphamodelservingconfiglist)]|false|read-only|Output only. The list of valid serving configs associated with the PageOptimizationConfig.|
|servingState|string|false|read-only|Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.|
|trainingState|string|false|none|Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.|
|tuningOperation|string|false|read-only|Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.|
|type|string|false|none|Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataState|DATA_STATE_UNSPECIFIED|
|dataState|DATA_OK|
|dataState|DATA_ERROR|
|filteringOption|RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED|
|filteringOption|RECOMMENDATIONS_FILTERING_DISABLED|
|filteringOption|RECOMMENDATIONS_FILTERING_ENABLED|
|periodicTuningState|PERIODIC_TUNING_STATE_UNSPECIFIED|
|periodicTuningState|PERIODIC_TUNING_DISABLED|
|periodicTuningState|ALL_TUNING_DISABLED|
|periodicTuningState|PERIODIC_TUNING_ENABLED|
|servingState|SERVING_STATE_UNSPECIFIED|
|servingState|INACTIVE|
|servingState|ACTIVE|
|servingState|TUNED|
|trainingState|TRAINING_STATE_UNSPECIFIED|
|trainingState|PAUSED|
|trainingState|TRAINING|

<h2 id="tocS_GoogleCloudRetailV2alphaModelPageOptimizationConfig">GoogleCloudRetailV2alphaModelPageOptimizationConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamodelpageoptimizationconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaModelPageOptimizationConfig"></a>
<a id="tocSgooglecloudretailv2alphamodelpageoptimizationconfig"></a>
<a id="tocsgooglecloudretailv2alphamodelpageoptimizationconfig"></a>

```json
{
  "pageOptimizationEventType": "string",
  "panels": [
    {
      "candidates": [
        {
          "servingConfigId": "string"
        }
      ],
      "defaultCandidate": {
        "servingConfigId": "string"
      },
      "displayName": "string"
    }
  ],
  "restriction": "RESTRICTION_UNSPECIFIED"
}
```

The PageOptimizationConfig for model training. This determines how many panels to optimize for, and which serving configs to consider for each panel. The purpose of this model is to optimize which ServingConfig to show on which panels in way that optimizes the visitors shopping journey.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pageOptimizationEventType|string|false|none|Required. The type of UserEvent this page optimization is shown for. Each page has an associated event type - this will be the corresponding event type for the page that the page optimization model is used on. Supported types: * `add-to-cart`: Products being added to cart. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed * `category-page-view`: Homepage viewed * `shopping-cart-page-view`: User viewing a shopping cart. `home-page-view` only allows models with type `recommended-for-you`. All other page_optimization_event_type allow all Model.types.|
|panels|[[GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel](#schemagooglecloudretailv2alphamodelpageoptimizationconfigpanel)]|false|none|Required. A list of panel configurations. Limit = 5.|
|restriction|string|false|none|Optional. How to restrict results across panels e.g. can the same ServingConfig be shown on multiple panels at once. If unspecified, default to `UNIQUE_MODEL_RESTRICTION`.|

#### Enumerated Values

|Property|Value|
|---|---|
|restriction|RESTRICTION_UNSPECIFIED|
|restriction|NO_RESTRICTION|
|restriction|UNIQUE_SERVING_CONFIG_RESTRICTION|
|restriction|UNIQUE_MODEL_RESTRICTION|
|restriction|UNIQUE_MODEL_TYPE_RESTRICTION|

<h2 id="tocS_GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate">GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamodelpageoptimizationconfigcandidate"></a>
<a id="schema_GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate"></a>
<a id="tocSgooglecloudretailv2alphamodelpageoptimizationconfigcandidate"></a>
<a id="tocsgooglecloudretailv2alphamodelpageoptimizationconfigcandidate"></a>

```json
{
  "servingConfigId": "string"
}
```

A candidate to consider for a given panel. Currently only ServingConfig are valid candidates.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servingConfigId|string|false|none|This has to be a valid ServingConfig identifier. For example, for a ServingConfig with full name: `projects/*/locations/global/catalogs/default_catalog/servingConfigs/my_candidate_config`, this would be `my_candidate_config`.|

<h2 id="tocS_GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel">GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamodelpageoptimizationconfigpanel"></a>
<a id="schema_GoogleCloudRetailV2alphaModelPageOptimizationConfigPanel"></a>
<a id="tocSgooglecloudretailv2alphamodelpageoptimizationconfigpanel"></a>
<a id="tocsgooglecloudretailv2alphamodelpageoptimizationconfigpanel"></a>

```json
{
  "candidates": [
    {
      "servingConfigId": "string"
    }
  ],
  "defaultCandidate": {
    "servingConfigId": "string"
  },
  "displayName": "string"
}
```

An individual panel with a list of ServingConfigs to consider for it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|candidates|[[GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate](#schemagooglecloudretailv2alphamodelpageoptimizationconfigcandidate)]|false|none|Required. The candidates to consider on the panel.|
|defaultCandidate|[GoogleCloudRetailV2alphaModelPageOptimizationConfigCandidate](#schemagooglecloudretailv2alphamodelpageoptimizationconfigcandidate)|false|none|Required. The default candidate. If the model fails at serving time, we fall back to the default.|
|displayName|string|false|none|Optional. The name to display for the panel.|

<h2 id="tocS_GoogleCloudRetailV2alphaModelServingConfigList">GoogleCloudRetailV2alphaModelServingConfigList</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphamodelservingconfiglist"></a>
<a id="schema_GoogleCloudRetailV2alphaModelServingConfigList"></a>
<a id="tocSgooglecloudretailv2alphamodelservingconfiglist"></a>
<a id="tocsgooglecloudretailv2alphamodelservingconfiglist"></a>

```json
{
  "servingConfigIds": [
    "string"
  ]
}
```

Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servingConfigIds|[string]|false|none|Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`.|

<h2 id="tocS_GoogleCloudRetailV2alphaOutputResult">GoogleCloudRetailV2alphaOutputResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaoutputresult"></a>
<a id="schema_GoogleCloudRetailV2alphaOutputResult"></a>
<a id="tocSgooglecloudretailv2alphaoutputresult"></a>
<a id="tocsgooglecloudretailv2alphaoutputresult"></a>

```json
{
  "bigqueryResult": [
    {
      "datasetId": "string",
      "tableId": "string"
    }
  ],
  "gcsResult": [
    {
      "outputUri": "string"
    }
  ]
}
```

Output result that stores the information about where the exported data is stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryResult|[[GoogleCloudRetailV2alphaBigQueryOutputResult](#schemagooglecloudretailv2alphabigqueryoutputresult)]|false|none|The BigQuery location where the result is stored.|
|gcsResult|[[GoogleCloudRetailV2alphaGcsOutputResult](#schemagooglecloudretailv2alphagcsoutputresult)]|false|none|The Google Cloud Storage location where the result is stored.|

<h2 id="tocS_GoogleCloudRetailV2alphaPauseModelRequest">GoogleCloudRetailV2alphaPauseModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapausemodelrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaPauseModelRequest"></a>
<a id="tocSgooglecloudretailv2alphapausemodelrequest"></a>
<a id="tocsgooglecloudretailv2alphapausemodelrequest"></a>

```json
{}
```

Request for pausing training of a model.

<h2 id="tocS_GoogleCloudRetailV2alphaPredictRequest">GoogleCloudRetailV2alphaPredictRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapredictrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaPredictRequest"></a>
<a id="tocSgooglecloudretailv2alphapredictrequest"></a>
<a id="tocsgooglecloudretailv2alphapredictrequest"></a>

```json
{
  "filter": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "pageSize": 0,
  "pageToken": "string",
  "params": {
    "property1": null,
    "property2": null
  },
  "userEvent": {
    "attributes": {
      "property1": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      },
      "property2": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      }
    },
    "attributionToken": "string",
    "cartId": "string",
    "completionDetail": {
      "completionAttributionToken": "string",
      "selectedPosition": 0,
      "selectedSuggestion": "string"
    },
    "entity": "string",
    "eventTime": "string",
    "eventType": "string",
    "experimentIds": [
      "string"
    ],
    "filter": "string",
    "offset": 0,
    "orderBy": "string",
    "pageCategories": [
      "string"
    ],
    "pageViewId": "string",
    "productDetails": [
      {
        "product": {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "audience": {
            "ageGroups": [
              "string"
            ],
            "genders": [
              "string"
            ]
          },
          "availability": "AVAILABILITY_UNSPECIFIED",
          "availableQuantity": 0,
          "availableTime": "string",
          "brands": [
            "string"
          ],
          "categories": [
            "string"
          ],
          "collectionMemberIds": [
            "string"
          ],
          "colorInfo": {
            "colorFamilies": [
              "string"
            ],
            "colors": [
              "string"
            ]
          },
          "conditions": [
            "string"
          ],
          "description": "string",
          "expireTime": "string",
          "fulfillmentInfo": [
            {
              "placeIds": [
                "string"
              ],
              "type": "string"
            }
          ],
          "gtin": "string",
          "id": "string",
          "images": [
            {
              "height": 0,
              "uri": "string",
              "width": 0
            }
          ],
          "languageCode": "string",
          "localInventories": [
            {
              "attributes": {
                "property1": {
                  "indexable": true,
                  "numbers": [
                    0
                  ],
                  "searchable": true,
                  "text": [
                    "string"
                  ]
                },
                "property2": {
                  "indexable": true,
                  "numbers": [
                    0
                  ],
                  "searchable": true,
                  "text": [
                    "string"
                  ]
                }
              },
              "fulfillmentTypes": [
                "string"
              ],
              "placeId": "string",
              "priceInfo": {
                "cost": 0,
                "currencyCode": "string",
                "originalPrice": 0,
                "price": 0,
                "priceEffectiveTime": "string",
                "priceExpireTime": "string",
                "priceRange": {
                  "originalPrice": {
                    "exclusiveMaximum": 0,
                    "exclusiveMinimum": 0,
                    "maximum": 0,
                    "minimum": 0
                  },
                  "price": {
                    "exclusiveMaximum": 0,
                    "exclusiveMinimum": 0,
                    "maximum": 0,
                    "minimum": 0
                  }
                }
              }
            }
          ],
          "materials": [
            "string"
          ],
          "name": "string",
          "patterns": [
            "string"
          ],
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string",
            "priceRange": {
              "originalPrice": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              },
              "price": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              }
            }
          },
          "primaryProductId": "string",
          "promotions": [
            {
              "promotionId": "string"
            }
          ],
          "publishTime": "string",
          "rating": {
            "averageRating": 0,
            "ratingCount": 0,
            "ratingHistogram": [
              0
            ]
          },
          "retrievableFields": "string",
          "sizes": [
            "string"
          ],
          "tags": [
            "string"
          ],
          "title": "string",
          "ttl": "string",
          "type": "TYPE_UNSPECIFIED",
          "uri": "string",
          "variants": [
            {}
          ]
        },
        "quantity": 0
      }
    ],
    "purchaseTransaction": {
      "cost": 0,
      "currencyCode": "string",
      "id": "string",
      "revenue": 0,
      "tax": 0
    },
    "referrerUri": "string",
    "searchQuery": "string",
    "sessionId": "string",
    "uri": "string",
    "userInfo": {
      "directUserRequest": true,
      "ipAddress": "string",
      "userAgent": "string",
      "userId": "string"
    },
    "visitorId": "string"
  },
  "validateOnly": true
}
```

Request message for Predict method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Filter for restricting prediction results with a length limit of 5,000 characters. Accepts values for tags and the `filterOutOfStockItems` flag. * Tag expressions. Restricts predictions to products that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1,000 characters. Note: "Recently viewed" models don't support tag filtering at the moment. * filterOutOfStockItems. Restricts predictions to products that do not have a stockState value of OUT_OF_STOCK. Examples: * tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional") * filterOutOfStockItems tag=(-"promotional") * filterOutOfStockItems If your filter blocks all prediction results, the API will return *no* results. If instead you want empty result sets to return generic (unfiltered) popular products, set `strictFiltering` to False in `PredictRequest.params`. Note that the API will never return items with storageStatus of "EXPIRED" or "DELETED" regardless of filter choices. If `filterSyntaxV2` is set to true under the `params` field, then attribute-based expressions are expected instead of the above described tag-based syntax. Examples: * (colors: ANY("Red", "Blue")) AND NOT (categories: ANY("Phones")) * (availability: ANY("IN_STOCK")) AND (colors: ANY("Red") OR categories: ANY("Phones")) For more information, see [Filter recommendations](https://cloud.google.com/retail/docs/filter-recs).|
|labels|object|false|none|The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.|
|pageSize|integer(int32)|false|none|Maximum number of results to return. Set this property to the number of prediction results needed. If zero, the service will choose a reasonable default. The maximum allowed value is 100. Values above 100 will be coerced to 100.|
|pageToken|string|false|none|This field is not used; leave it unset.|
|params|object|false|none|Additional domain specific parameters for the predictions. Allowed values: * `returnProduct`: Boolean. If set to true, the associated product object will be returned in the `results.metadata` field in the prediction response. * `returnScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned product will be set in the `results.metadata` field in the prediction response. The given 'score' indicates the probability of a product being clicked/purchased given the user's context and history. * `strictFiltering`: Boolean. True by default. If set to false, the service will return generic (unfiltered) popular products instead of empty if your filter blocks all prediction results. * `priceRerankLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-price-reranking', 'low-price-reranking', 'medium-price-reranking', 'high-price-reranking'}. This gives request-level control and adjusts prediction results based on product price. * `diversityLevel`: String. Default empty. If set to be non-empty, then it needs to be one of {'no-diversity', 'low-diversity', 'medium-diversity', 'high-diversity', 'auto-diversity'}. This gives request-level control and adjusts prediction results based on product category. * `filterSyntaxV2`: Boolean. False by default. If set to true, the `filter` field is interpreteted according to the new, attribute-based syntax.|
|userEvent|[GoogleCloudRetailV2alphaUserEvent](#schemagooglecloudretailv2alphauserevent)|false|none|Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging. Don't set UserEvent.visitor_id or UserInfo.user_id to the same fixed ID for different users. If you are trying to receive non-personalized recommendations (not recommended; this can negatively impact model performance), instead set UserEvent.visitor_id to a random unique ID and leave UserInfo.user_id unset.|
|validateOnly|boolean|false|none|Use validate only mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary products. Note that the validate only mode should only be used for testing the API, or if the model is not ready.|

<h2 id="tocS_GoogleCloudRetailV2alphaPredictResponse">GoogleCloudRetailV2alphaPredictResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapredictresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaPredictResponse"></a>
<a id="tocSgooglecloudretailv2alphapredictresponse"></a>
<a id="tocsgooglecloudretailv2alphapredictresponse"></a>

```json
{
  "attributionToken": "string",
  "missingIds": [
    "string"
  ],
  "results": [
    {
      "id": "string",
      "metadata": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "validateOnly": true
}
```

Response message for predict method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributionToken|string|false|none|A unique attribution token. This should be included in the UserEvent logs resulting from this recommendation, which enables accurate attribution of recommendation model performance.|
|missingIds|[string]|false|none|IDs of products in the request that were missing from the inventory.|
|results|[[GoogleCloudRetailV2alphaPredictResponsePredictionResult](#schemagooglecloudretailv2alphapredictresponsepredictionresult)]|false|none|A list of recommended products. The order represents the ranking (from the most relevant product to the least).|
|validateOnly|boolean|false|none|True if the validateOnly property was set in the request.|

<h2 id="tocS_GoogleCloudRetailV2alphaPredictResponsePredictionResult">GoogleCloudRetailV2alphaPredictResponsePredictionResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapredictresponsepredictionresult"></a>
<a id="schema_GoogleCloudRetailV2alphaPredictResponsePredictionResult"></a>
<a id="tocSgooglecloudretailv2alphapredictresponsepredictionresult"></a>
<a id="tocsgooglecloudretailv2alphapredictresponsepredictionresult"></a>

```json
{
  "id": "string",
  "metadata": {
    "property1": null,
    "property2": null
  }
}
```

PredictionResult represents the recommendation prediction results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the recommended product|
|metadata|object|false|none|Additional product metadata / annotations. Possible values: * `product`: JSON representation of the product. Is set if `returnProduct` is set to true in `PredictRequest.params`. * `score`: Prediction score in double value. Is set if `returnScore` is set to true in `PredictRequest.params`.|

<h2 id="tocS_GoogleCloudRetailV2alphaPriceInfo">GoogleCloudRetailV2alphaPriceInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapriceinfo"></a>
<a id="schema_GoogleCloudRetailV2alphaPriceInfo"></a>
<a id="tocSgooglecloudretailv2alphapriceinfo"></a>
<a id="tocsgooglecloudretailv2alphapriceinfo"></a>

```json
{
  "cost": 0,
  "currencyCode": "string",
  "originalPrice": 0,
  "price": 0,
  "priceEffectiveTime": "string",
  "priceExpireTime": "string",
  "priceRange": {
    "originalPrice": {
      "exclusiveMaximum": 0,
      "exclusiveMinimum": 0,
      "maximum": 0,
      "minimum": 0
    },
    "price": {
      "exclusiveMaximum": 0,
      "exclusiveMinimum": 0,
      "maximum": 0,
      "minimum": 0
    }
  }
}
```

The price information of a Product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|number(float)|false|none|The costs associated with the sale of a particular product. Used for gross profit reporting. * Profit = price - cost Google Merchant Center property [cost_of_goods_sold](https://support.google.com/merchants/answer/9017895).|
|currencyCode|string|false|none|The 3-letter currency code defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). If this field is an unrecognizable currency code, an INVALID_ARGUMENT error is returned. The Product.Type.VARIANT Products with the same Product.primary_product_id must share the same currency_code. Otherwise, a FAILED_PRECONDITION error is returned.|
|originalPrice|number(float)|false|none|Price of the product without any discount. If zero, by default set to be the price. If set, original_price should be greater than or equal to price, otherwise an INVALID_ARGUMENT error is thrown.|
|price|number(float)|false|none|Price of the product. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371). Schema.org property [Offer.price](https://schema.org/price).|
|priceEffectiveTime|string(google-datetime)|false|none|The timestamp when the price starts to be effective. This can be set as a future timestamp, and the price is only used for search after price_effective_time. If so, the original_price must be set and original_price is used before price_effective_time. Do not set if price is always effective because it will cause additional latency during search.|
|priceExpireTime|string(google-datetime)|false|none|The timestamp when the price stops to be effective. The price is used for search before price_expire_time. If this field is set, the original_price must be set and original_price is used after price_expire_time. Do not set if price is always effective because it will cause additional latency during search.|
|priceRange|[GoogleCloudRetailV2alphaPriceInfoPriceRange](#schemagooglecloudretailv2alphapriceinfopricerange)|false|none|Output only. The price range of all the child Product.Type.VARIANT Products grouped together on the Product.Type.PRIMARY Product. Only populated for Product.Type.PRIMARY Products. Note: This field is OUTPUT_ONLY for ProductService.GetProduct. Do not set this field in API requests.|

<h2 id="tocS_GoogleCloudRetailV2alphaPriceInfoPriceRange">GoogleCloudRetailV2alphaPriceInfoPriceRange</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapriceinfopricerange"></a>
<a id="schema_GoogleCloudRetailV2alphaPriceInfoPriceRange"></a>
<a id="tocSgooglecloudretailv2alphapriceinfopricerange"></a>
<a id="tocsgooglecloudretailv2alphapriceinfopricerange"></a>

```json
{
  "originalPrice": {
    "exclusiveMaximum": 0,
    "exclusiveMinimum": 0,
    "maximum": 0,
    "minimum": 0
  },
  "price": {
    "exclusiveMaximum": 0,
    "exclusiveMinimum": 0,
    "maximum": 0,
    "minimum": 0
  }
}
```

The price range of all variant Product having the same Product.primary_product_id.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|originalPrice|[GoogleCloudRetailV2alphaInterval](#schemagooglecloudretailv2alphainterval)|false|none|The inclusive Product.pricing_info.original_price internal of all variant Product having the same Product.primary_product_id.|
|price|[GoogleCloudRetailV2alphaInterval](#schemagooglecloudretailv2alphainterval)|false|none|The inclusive Product.pricing_info.price interval of all variant Product having the same Product.primary_product_id.|

<h2 id="tocS_GoogleCloudRetailV2alphaProduct">GoogleCloudRetailV2alphaProduct</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaproduct"></a>
<a id="schema_GoogleCloudRetailV2alphaProduct"></a>
<a id="tocSgooglecloudretailv2alphaproduct"></a>
<a id="tocsgooglecloudretailv2alphaproduct"></a>

```json
{
  "attributes": {
    "property1": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    },
    "property2": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    }
  },
  "audience": {
    "ageGroups": [
      "string"
    ],
    "genders": [
      "string"
    ]
  },
  "availability": "AVAILABILITY_UNSPECIFIED",
  "availableQuantity": 0,
  "availableTime": "string",
  "brands": [
    "string"
  ],
  "categories": [
    "string"
  ],
  "collectionMemberIds": [
    "string"
  ],
  "colorInfo": {
    "colorFamilies": [
      "string"
    ],
    "colors": [
      "string"
    ]
  },
  "conditions": [
    "string"
  ],
  "description": "string",
  "expireTime": "string",
  "fulfillmentInfo": [
    {
      "placeIds": [
        "string"
      ],
      "type": "string"
    }
  ],
  "gtin": "string",
  "id": "string",
  "images": [
    {
      "height": 0,
      "uri": "string",
      "width": 0
    }
  ],
  "languageCode": "string",
  "localInventories": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "fulfillmentTypes": [
        "string"
      ],
      "placeId": "string",
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string",
        "priceRange": {
          "originalPrice": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "price": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        }
      }
    }
  ],
  "materials": [
    "string"
  ],
  "name": "string",
  "patterns": [
    "string"
  ],
  "priceInfo": {
    "cost": 0,
    "currencyCode": "string",
    "originalPrice": 0,
    "price": 0,
    "priceEffectiveTime": "string",
    "priceExpireTime": "string",
    "priceRange": {
      "originalPrice": {
        "exclusiveMaximum": 0,
        "exclusiveMinimum": 0,
        "maximum": 0,
        "minimum": 0
      },
      "price": {
        "exclusiveMaximum": 0,
        "exclusiveMinimum": 0,
        "maximum": 0,
        "minimum": 0
      }
    }
  },
  "primaryProductId": "string",
  "promotions": [
    {
      "promotionId": "string"
    }
  ],
  "publishTime": "string",
  "rating": {
    "averageRating": 0,
    "ratingCount": 0,
    "ratingHistogram": [
      0
    ]
  },
  "retrievableFields": "string",
  "sizes": [
    "string"
  ],
  "tags": [
    "string"
  ],
  "title": "string",
  "ttl": "string",
  "type": "TYPE_UNSPECIFIED",
  "uri": "string",
  "variants": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "audience": {
        "ageGroups": [
          "string"
        ],
        "genders": [
          "string"
        ]
      },
      "availability": "AVAILABILITY_UNSPECIFIED",
      "availableQuantity": 0,
      "availableTime": "string",
      "brands": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "collectionMemberIds": [
        "string"
      ],
      "colorInfo": {
        "colorFamilies": [
          "string"
        ],
        "colors": [
          "string"
        ]
      },
      "conditions": [
        "string"
      ],
      "description": "string",
      "expireTime": "string",
      "fulfillmentInfo": [
        {
          "placeIds": [
            "string"
          ],
          "type": "string"
        }
      ],
      "gtin": "string",
      "id": "string",
      "images": [
        {
          "height": 0,
          "uri": "string",
          "width": 0
        }
      ],
      "languageCode": "string",
      "localInventories": [
        {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "fulfillmentTypes": [
            "string"
          ],
          "placeId": "string",
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string",
            "priceRange": {
              "originalPrice": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              },
              "price": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              }
            }
          }
        }
      ],
      "materials": [
        "string"
      ],
      "name": "string",
      "patterns": [
        "string"
      ],
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string",
        "priceRange": {
          "originalPrice": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "price": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        }
      },
      "primaryProductId": "string",
      "promotions": [
        {
          "promotionId": "string"
        }
      ],
      "publishTime": "string",
      "rating": {
        "averageRating": 0,
        "ratingCount": 0,
        "ratingHistogram": [
          0
        ]
      },
      "retrievableFields": "string",
      "sizes": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "title": "string",
      "ttl": "string",
      "type": "TYPE_UNSPECIFIED",
      "uri": "string",
      "variants": [
        {}
      ]
    }
  ]
}
```

Product captures all metadata information of items to be recommended or searched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Highly encouraged. Extra product attributes to be included. For example, for products, this could include the store name, vendor, style, color, etc. These are very strong signals for recommendation model, thus we highly recommend providing the attributes here. Features that can take on one of a limited number of possible values. Two types of features can be set are: Textual features. some examples would be the brand/maker of a product, or country of a customer. Numerical features. Some examples would be the height/weight of a product, or age of a customer. For example: `{ "vendor": {"text": ["vendor123", "vendor456"]}, "lengths_cm": {"numbers":[2.3, 15.4]}, "heights_cm": {"numbers":[8.1, 6.4]} }`. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * Max entries count: 200. * The key must be a UTF-8 encoded string with a length limit of 128 characters. * For indexable attribute, the key must match the pattern: `a-zA-Z0-9*`. For example, `key0LikeThis` or `KEY_1_LIKE_THIS`. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a non-empty UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed.|
|audience|[GoogleCloudRetailV2alphaAudience](#schemagooglecloudretailv2alphaaudience)|false|none|The target group associated with a given audience (e.g. male, veterans, car owners, musicians, etc.) of the product.|
|availability|string|false|none|The online availability of the Product. Default to Availability.IN_STOCK. Corresponding properties: Google Merchant Center property [availability](https://support.google.com/merchants/answer/6324448). Schema.org property [Offer.availability](https://schema.org/availability).|
|availableQuantity|integer(int32)|false|none|The available quantity of the item.|
|availableTime|string(google-datetime)|false|none|The timestamp when this Product becomes available for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT.|
|brands|[string]|false|none|The brands of the product. A maximum of 30 brands are allowed. Each brand must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [brand](https://support.google.com/merchants/answer/6324351). Schema.org property [Product.brand](https://schema.org/brand).|
|categories|[string]|false|none|Product categories. This field is repeated for supporting one product belonging to several parallel categories. Strongly recommended using the full path for better search / recommendation quality. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). For example, if a shoes product belongs to both ["Shoes & Accessories" -> "Shoes"] and ["Sports & Fitness" -> "Athletic Clothing" -> "Shoes"], it could be represented as: "categories": [ "Shoes & Accessories > Shoes", "Sports & Fitness > Athletic Clothing > Shoes" ] Must be set for Type.PRIMARY Product otherwise an INVALID_ARGUMENT error is returned. At most 250 values are allowed per Product. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property google_product_category. Schema.org property [Product.category] (https://schema.org/category). [mc_google_product_category]: https://support.google.com/merchants/answer/6324436|
|collectionMemberIds|[string]|false|none|The id of the collection members when type is Type.COLLECTION. Non-existent product ids are allowed. The type of the members must be either Type.PRIMARY or Type.VARIANT otherwise an INVALID_ARGUMENT error is thrown. Should not set it for other types. A maximum of 1000 values are allowed. Otherwise, an INVALID_ARGUMENT error is return.|
|colorInfo|[GoogleCloudRetailV2alphaColorInfo](#schemagooglecloudretailv2alphacolorinfo)|false|none|The color of the product. Corresponding properties: Google Merchant Center property [color](https://support.google.com/merchants/answer/6324487). Schema.org property [Product.color](https://schema.org/color).|
|conditions|[string]|false|none|The condition of the product. Strongly encouraged to use the standard values: "new", "refurbished", "used". A maximum of 1 value is allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [condition](https://support.google.com/merchants/answer/6324469). Schema.org property [Offer.itemCondition](https://schema.org/itemCondition).|
|description|string|false|none|Product description. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [description](https://support.google.com/merchants/answer/6324468). Schema.org property [Product.description](https://schema.org/description).|
|expireTime|string(google-datetime)|false|none|The timestamp when this product becomes unavailable for SearchService.Search. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, the Product is not available for SearchService.Search after expire_time. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts. expire_time must be later than available_time and publish_time, otherwise an INVALID_ARGUMENT error is thrown. Corresponding properties: Google Merchant Center property [expiration_date](https://support.google.com/merchants/answer/6324499).|
|fulfillmentInfo|[[GoogleCloudRetailV2alphaFulfillmentInfo](#schemagooglecloudretailv2alphafulfillmentinfo)]|false|none|Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods. All the elements must have distinct FulfillmentInfo.type. Otherwise, an INVALID_ARGUMENT error is returned.|
|gtin|string|false|none|The Global Trade Item Number (GTIN) of the product. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. This field must be a Unigram. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [gtin](https://support.google.com/merchants/answer/6324461). Schema.org property [Product.isbn](https://schema.org/isbn), [Product.gtin8](https://schema.org/gtin8), [Product.gtin12](https://schema.org/gtin12), [Product.gtin13](https://schema.org/gtin13), or [Product.gtin14](https://schema.org/gtin14). If the value is not a valid GTIN, an INVALID_ARGUMENT error is returned.|
|id|string|false|none|Immutable. Product identifier, which is the final component of name. For example, this field is "id_1", if name is `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/id_1`. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [id](https://support.google.com/merchants/answer/6324405). Schema.org property [Product.sku](https://schema.org/sku).|
|images|[[GoogleCloudRetailV2alphaImage](#schemagooglecloudretailv2alphaimage)]|false|none|Product images for the product. We highly recommend putting the main image first. A maximum of 300 images are allowed. Corresponding properties: Google Merchant Center property [image_link](https://support.google.com/merchants/answer/6324350). Schema.org property [Product.image](https://schema.org/image).|
|languageCode|string|false|none|Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). For product prediction, this field is ignored and the model automatically detects the text language. The Product can include text in different languages, but duplicating Products to provide text in multiple languages can result in degraded model performance. For product search this field is in use. It defaults to "en-US" if unset.|
|localInventories|[[GoogleCloudRetailV2alphaLocalInventory](#schemagooglecloudretailv2alphalocalinventory)]|false|read-only|Output only. A list of local inventories specific to different places. This field can be managed by ProductService.AddLocalInventories and ProductService.RemoveLocalInventories APIs if fine-grained, high-volume updates are necessary.|
|materials|[string]|false|none|The material of the product. For example, "leather", "wooden". A maximum of 20 values are allowed. Each value must be a UTF-8 encoded string with a length limit of 200 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [material](https://support.google.com/merchants/answer/6324410). Schema.org property [Product.material](https://schema.org/material).|
|name|string|false|none|Immutable. Full resource name of the product, such as `projects/*/locations/global/catalogs/default_catalog/branches/default_branch/products/product_id`.|
|patterns|[string]|false|none|The pattern or graphic print of the product. For example, "striped", "polka dot", "paisley". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [pattern](https://support.google.com/merchants/answer/6324483). Schema.org property [Product.pattern](https://schema.org/pattern).|
|priceInfo|[GoogleCloudRetailV2alphaPriceInfo](#schemagooglecloudretailv2alphapriceinfo)|false|none|Product price and cost information. Corresponding properties: Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371).|
|primaryProductId|string|false|none|Variant group identifier. Must be an id, with the same parent branch with this product. Otherwise, an error is thrown. For Type.PRIMARY Products, this field can only be empty or set to the same value as id. For VARIANT Products, this field cannot be empty. A maximum of 2,000 products are allowed to share the same Type.PRIMARY Product. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [item_group_id](https://support.google.com/merchants/answer/6324507). Schema.org property [Product.inProductGroupWithID](https://schema.org/inProductGroupWithID).|
|promotions|[[GoogleCloudRetailV2alphaPromotion](#schemagooglecloudretailv2alphapromotion)]|false|none|The promotions applied to the product. A maximum of 10 values are allowed per Product. Only Promotion.promotion_id will be used, other fields will be ignored if set.|
|publishTime|string(google-datetime)|false|none|The timestamp when the product is published by the retailer for the first time, which indicates the freshness of the products. Note that this field is different from available_time, given it purely describes product freshness regardless of when it is available on search and recommendation.|
|rating|[GoogleCloudRetailV2alphaRating](#schemagooglecloudretailv2alpharating)|false|none|The rating of this product.|
|retrievableFields|string(google-fieldmask)|false|none|Indicates which fields in the Products are returned in SearchResponse. Supported fields for all types: * audience * availability * brands * color_info * conditions * gtin * materials * name * patterns * price_info * rating * sizes * title * uri Supported fields only for Type.PRIMARY and Type.COLLECTION: * categories * description * images Supported fields only for Type.VARIANT: * Only the first image in images To mark attributes as retrievable, include paths of the form "attributes.key" where "key" is the key of a custom attribute, as specified in attributes. For Type.PRIMARY and Type.COLLECTION, the following fields are always returned in SearchResponse by default: * name For Type.VARIANT, the following fields are always returned in by default: * name * color_info The maximum number of paths is 30. Otherwise, an INVALID_ARGUMENT error is returned. Note: Returning more fields in SearchResponse can increase response payload size and serving latency. This field is deprecated. Use the retrievable site-wide control instead.|
|sizes|[string]|false|none|The size of the product. To represent different size systems or size types, consider using this format: [[[size_system:]size_type:]size_value]. For example, in "US:MENS:M", "US" represents size system; "MENS" represents size type; "M" represents size value. In "GIRLS:27", size system is empty; "GIRLS" represents size type; "27" represents size value. In "32 inches", both size system and size type are empty, while size value is "32 inches". A maximum of 20 values are allowed per Product. Each value must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [size](https://support.google.com/merchants/answer/6324492), [size_type](https://support.google.com/merchants/answer/6324497), and [size_system](https://support.google.com/merchants/answer/6324502). Schema.org property [Product.size](https://schema.org/size).|
|tags|[string]|false|none|Custom tags associated with the product. At most 250 values are allowed per Product. This value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This tag can be used for filtering recommendation results by passing the tag as part of the PredictRequest.filter. Corresponding properties: Google Merchant Center property [custom_label_0–4](https://support.google.com/merchants/answer/6324473).|
|title|string|false|none|Required. Product title. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [title](https://support.google.com/merchants/answer/6324415). Schema.org property [Product.name](https://schema.org/name).|
|ttl|string(google-duration)|false|none|Input only. The TTL (time to live) of the product. Note that this is only applicable to Type.PRIMARY and Type.COLLECTION, and ignored for Type.VARIANT. In general, we suggest the users to delete the stale products explicitly, instead of using this field to determine staleness. If it is set, it must be a non-negative value, and expire_time is set as current timestamp plus ttl. The derived expire_time is returned in the output and ttl is left blank when retrieving the Product. If it is set, the product is not available for SearchService.Search after current timestamp plus ttl. However, the product can still be retrieved by ProductService.GetProduct and ProductService.ListProducts.|
|type|string|false|none|Immutable. The type of the product. Default to Catalog.product_level_config.ingestion_product_type if unset.|
|uri|string|false|none|Canonical URL directly linking to the product detail page. It is strongly recommended to provide a valid uri for the product, otherwise the service performance could be significantly degraded. This field must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. Corresponding properties: Google Merchant Center property [link](https://support.google.com/merchants/answer/6324416). Schema.org property [Offer.url](https://schema.org/url).|
|variants|[[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)]|false|read-only|Output only. Product variants grouped together on primary product which share similar product attributes. It's automatically grouped by primary_product_id for all the product variants. Only populated for Type.PRIMARY Products. Note: This field is OUTPUT_ONLY for ProductService.GetProduct. Do not set this field in API requests.|

#### Enumerated Values

|Property|Value|
|---|---|
|availability|AVAILABILITY_UNSPECIFIED|
|availability|IN_STOCK|
|availability|OUT_OF_STOCK|
|availability|PREORDER|
|availability|BACKORDER|
|type|TYPE_UNSPECIFIED|
|type|PRIMARY|
|type|VARIANT|
|type|COLLECTION|

<h2 id="tocS_GoogleCloudRetailV2alphaProductDetail">GoogleCloudRetailV2alphaProductDetail</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaproductdetail"></a>
<a id="schema_GoogleCloudRetailV2alphaProductDetail"></a>
<a id="tocSgooglecloudretailv2alphaproductdetail"></a>
<a id="tocsgooglecloudretailv2alphaproductdetail"></a>

```json
{
  "product": {
    "attributes": {
      "property1": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      },
      "property2": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      }
    },
    "audience": {
      "ageGroups": [
        "string"
      ],
      "genders": [
        "string"
      ]
    },
    "availability": "AVAILABILITY_UNSPECIFIED",
    "availableQuantity": 0,
    "availableTime": "string",
    "brands": [
      "string"
    ],
    "categories": [
      "string"
    ],
    "collectionMemberIds": [
      "string"
    ],
    "colorInfo": {
      "colorFamilies": [
        "string"
      ],
      "colors": [
        "string"
      ]
    },
    "conditions": [
      "string"
    ],
    "description": "string",
    "expireTime": "string",
    "fulfillmentInfo": [
      {
        "placeIds": [
          "string"
        ],
        "type": "string"
      }
    ],
    "gtin": "string",
    "id": "string",
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "languageCode": "string",
    "localInventories": [
      {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "fulfillmentTypes": [
          "string"
        ],
        "placeId": "string",
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string",
          "priceRange": {
            "originalPrice": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            },
            "price": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          }
        }
      }
    ],
    "materials": [
      "string"
    ],
    "name": "string",
    "patterns": [
      "string"
    ],
    "priceInfo": {
      "cost": 0,
      "currencyCode": "string",
      "originalPrice": 0,
      "price": 0,
      "priceEffectiveTime": "string",
      "priceExpireTime": "string",
      "priceRange": {
        "originalPrice": {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        },
        "price": {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        }
      }
    },
    "primaryProductId": "string",
    "promotions": [
      {
        "promotionId": "string"
      }
    ],
    "publishTime": "string",
    "rating": {
      "averageRating": 0,
      "ratingCount": 0,
      "ratingHistogram": [
        0
      ]
    },
    "retrievableFields": "string",
    "sizes": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "title": "string",
    "ttl": "string",
    "type": "TYPE_UNSPECIFIED",
    "uri": "string",
    "variants": [
      {}
    ]
  },
  "quantity": 0
}
```

Detailed product information associated with a user event.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|product|[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)|false|none|Required. Product information. Required field(s): * Product.id Optional override field(s): * Product.price_info If any supported optional fields are provided, we will treat them as a full override when looking up product information from the catalog. Thus, it is important to ensure that the overriding fields are accurate and complete. All other product fields are ignored and instead populated via catalog lookup after event ingestion.|
|quantity|integer(int32)|false|none|Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `purchase-complete` event. Required for `add-to-cart` and `purchase-complete` event types.|

<h2 id="tocS_GoogleCloudRetailV2alphaProductInlineSource">GoogleCloudRetailV2alphaProductInlineSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaproductinlinesource"></a>
<a id="schema_GoogleCloudRetailV2alphaProductInlineSource"></a>
<a id="tocSgooglecloudretailv2alphaproductinlinesource"></a>
<a id="tocsgooglecloudretailv2alphaproductinlinesource"></a>

```json
{
  "products": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "audience": {
        "ageGroups": [
          "string"
        ],
        "genders": [
          "string"
        ]
      },
      "availability": "AVAILABILITY_UNSPECIFIED",
      "availableQuantity": 0,
      "availableTime": "string",
      "brands": [
        "string"
      ],
      "categories": [
        "string"
      ],
      "collectionMemberIds": [
        "string"
      ],
      "colorInfo": {
        "colorFamilies": [
          "string"
        ],
        "colors": [
          "string"
        ]
      },
      "conditions": [
        "string"
      ],
      "description": "string",
      "expireTime": "string",
      "fulfillmentInfo": [
        {
          "placeIds": [
            "string"
          ],
          "type": "string"
        }
      ],
      "gtin": "string",
      "id": "string",
      "images": [
        {
          "height": 0,
          "uri": "string",
          "width": 0
        }
      ],
      "languageCode": "string",
      "localInventories": [
        {
          "attributes": {
            "property1": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            },
            "property2": {
              "indexable": true,
              "numbers": [
                0
              ],
              "searchable": true,
              "text": [
                "string"
              ]
            }
          },
          "fulfillmentTypes": [
            "string"
          ],
          "placeId": "string",
          "priceInfo": {
            "cost": 0,
            "currencyCode": "string",
            "originalPrice": 0,
            "price": 0,
            "priceEffectiveTime": "string",
            "priceExpireTime": "string",
            "priceRange": {
              "originalPrice": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              },
              "price": {
                "exclusiveMaximum": 0,
                "exclusiveMinimum": 0,
                "maximum": 0,
                "minimum": 0
              }
            }
          }
        }
      ],
      "materials": [
        "string"
      ],
      "name": "string",
      "patterns": [
        "string"
      ],
      "priceInfo": {
        "cost": 0,
        "currencyCode": "string",
        "originalPrice": 0,
        "price": 0,
        "priceEffectiveTime": "string",
        "priceExpireTime": "string",
        "priceRange": {
          "originalPrice": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "price": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        }
      },
      "primaryProductId": "string",
      "promotions": [
        {
          "promotionId": "string"
        }
      ],
      "publishTime": "string",
      "rating": {
        "averageRating": 0,
        "ratingCount": 0,
        "ratingHistogram": [
          0
        ]
      },
      "retrievableFields": "string",
      "sizes": [
        "string"
      ],
      "tags": [
        "string"
      ],
      "title": "string",
      "ttl": "string",
      "type": "TYPE_UNSPECIFIED",
      "uri": "string",
      "variants": [
        {}
      ]
    }
  ]
}
```

The inline source for the input config for ImportProducts method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|products|[[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)]|false|none|Required. A list of products to update/create. Each product must have a valid Product.id. Recommended max of 100 items.|

<h2 id="tocS_GoogleCloudRetailV2alphaProductInputConfig">GoogleCloudRetailV2alphaProductInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaproductinputconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaProductInputConfig"></a>
<a id="tocSgooglecloudretailv2alphaproductinputconfig"></a>
<a id="tocsgooglecloudretailv2alphaproductinputconfig"></a>

```json
{
  "bigQuerySource": {
    "dataSchema": "string",
    "datasetId": "string",
    "gcsStagingDir": "string",
    "partitionDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "projectId": "string",
    "tableId": "string"
  },
  "gcsSource": {
    "dataSchema": "string",
    "inputUris": [
      "string"
    ]
  },
  "productInlineSource": {
    "products": [
      {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "audience": {
          "ageGroups": [
            "string"
          ],
          "genders": [
            "string"
          ]
        },
        "availability": "AVAILABILITY_UNSPECIFIED",
        "availableQuantity": 0,
        "availableTime": "string",
        "brands": [
          "string"
        ],
        "categories": [
          "string"
        ],
        "collectionMemberIds": [
          "string"
        ],
        "colorInfo": {
          "colorFamilies": [
            "string"
          ],
          "colors": [
            "string"
          ]
        },
        "conditions": [
          "string"
        ],
        "description": "string",
        "expireTime": "string",
        "fulfillmentInfo": [
          {
            "placeIds": [
              "string"
            ],
            "type": "string"
          }
        ],
        "gtin": "string",
        "id": "string",
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "languageCode": "string",
        "localInventories": [
          {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "fulfillmentTypes": [
              "string"
            ],
            "placeId": "string",
            "priceInfo": {
              "cost": 0,
              "currencyCode": "string",
              "originalPrice": 0,
              "price": 0,
              "priceEffectiveTime": "string",
              "priceExpireTime": "string",
              "priceRange": {
                "originalPrice": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                },
                "price": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                }
              }
            }
          }
        ],
        "materials": [
          "string"
        ],
        "name": "string",
        "patterns": [
          "string"
        ],
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string",
          "priceRange": {
            "originalPrice": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            },
            "price": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          }
        },
        "primaryProductId": "string",
        "promotions": [
          {
            "promotionId": "string"
          }
        ],
        "publishTime": "string",
        "rating": {
          "averageRating": 0,
          "ratingCount": 0,
          "ratingHistogram": [
            0
          ]
        },
        "retrievableFields": "string",
        "sizes": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "title": "string",
        "ttl": "string",
        "type": "TYPE_UNSPECIFIED",
        "uri": "string",
        "variants": [
          {}
        ]
      }
    ]
  }
}
```

The input config source for products.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigQuerySource|[GoogleCloudRetailV2alphaBigQuerySource](#schemagooglecloudretailv2alphabigquerysource)|false|none|BigQuery input source.|
|gcsSource|[GoogleCloudRetailV2alphaGcsSource](#schemagooglecloudretailv2alphagcssource)|false|none|Google Cloud Storage location for the input content.|
|productInlineSource|[GoogleCloudRetailV2alphaProductInlineSource](#schemagooglecloudretailv2alphaproductinlinesource)|false|none|The Inline source for the input content for products.|

<h2 id="tocS_GoogleCloudRetailV2alphaProductLevelConfig">GoogleCloudRetailV2alphaProductLevelConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaproductlevelconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaProductLevelConfig"></a>
<a id="tocSgooglecloudretailv2alphaproductlevelconfig"></a>
<a id="tocsgooglecloudretailv2alphaproductlevelconfig"></a>

```json
{
  "ingestionProductType": "string",
  "merchantCenterProductIdField": "string"
}
```

Configures what level the product should be uploaded with regards to how users will be send events and how predictions will be made.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ingestionProductType|string|false|none|The type of Products allowed to be ingested into the catalog. Acceptable values are: * `primary` (default): You can ingest Products of all types. When ingesting a Product, its type will default to Product.Type.PRIMARY if unset. * `variant` (incompatible with Retail Search): You can only ingest Product.Type.VARIANT Products. This means Product.primary_product_id cannot be empty. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `variant` and merchant_center_product_id_field is `itemGroupId`, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details.|
|merchantCenterProductIdField|string|false|none|Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are: * `offerId` (default): Import `offerId` as the product ID. * `itemGroupId`: Import `itemGroupId` as the product ID. Notice that Retail API will choose one item from the ones with the same `itemGroupId`, and use it to represent the item group. If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. If this field is `itemGroupId` and ingestion_product_type is `variant`, an INVALID_ARGUMENT error is returned. See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details.|

<h2 id="tocS_GoogleCloudRetailV2alphaPromotion">GoogleCloudRetailV2alphaPromotion</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapromotion"></a>
<a id="schema_GoogleCloudRetailV2alphaPromotion"></a>
<a id="tocSgooglecloudretailv2alphapromotion"></a>
<a id="tocsgooglecloudretailv2alphapromotion"></a>

```json
{
  "promotionId": "string"
}
```

Promotion specification.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|promotionId|string|false|none|Promotion identifier, which is the final component of name. For example, this field is "free_gift", if name is `projects/*/locations/global/catalogs/default_catalog/promotions/free_gift`. The value must be a UTF-8 encoded string with a length limit of 128 characters, and match the pattern: `a-zA-Z*`. For example, id0LikeThis or ID_1_LIKE_THIS. Otherwise, an INVALID_ARGUMENT error is returned. Corresponds to Google Merchant Center property [promotion_id](https://support.google.com/merchants/answer/7050148).|

<h2 id="tocS_GoogleCloudRetailV2alphaPurchaseTransaction">GoogleCloudRetailV2alphaPurchaseTransaction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapurchasetransaction"></a>
<a id="schema_GoogleCloudRetailV2alphaPurchaseTransaction"></a>
<a id="tocSgooglecloudretailv2alphapurchasetransaction"></a>
<a id="tocsgooglecloudretailv2alphapurchasetransaction"></a>

```json
{
  "cost": 0,
  "currencyCode": "string",
  "id": "string",
  "revenue": 0,
  "tax": 0
}
```

A transaction represents the entire purchase transaction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cost|number(float)|false|none|All the costs associated with the products. These can be manufacturing costs, shipping expenses not borne by the end user, or any other costs, such that: * Profit = revenue - tax - cost|
|currencyCode|string|false|none|Required. Currency code. Use three-character ISO-4217 code.|
|id|string|false|none|The transaction ID with a length limit of 128 characters.|
|revenue|number(float)|false|none|Required. Total non-zero revenue or grand total associated with the transaction. This value include shipping, tax, or other adjustments to total revenue that you want to include as part of your revenue calculations.|
|tax|number(float)|false|none|All the taxes associated with the transaction.|

<h2 id="tocS_GoogleCloudRetailV2alphaPurgeMetadata">GoogleCloudRetailV2alphaPurgeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapurgemetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaPurgeMetadata"></a>
<a id="tocSgooglecloudretailv2alphapurgemetadata"></a>
<a id="tocsgooglecloudretailv2alphapurgemetadata"></a>

```json
{}
```

Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.

<h2 id="tocS_GoogleCloudRetailV2alphaPurgeProductsMetadata">GoogleCloudRetailV2alphaPurgeProductsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapurgeproductsmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaPurgeProductsMetadata"></a>
<a id="tocSgooglecloudretailv2alphapurgeproductsmetadata"></a>
<a id="tocsgooglecloudretailv2alphapurgeproductsmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
  "successCount": "string",
  "updateTime": "string"
}
```

Metadata related to the progress of the PurgeProducts operation. This will be returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|failureCount|string(int64)|false|none|Count of entries that encountered errors while processing.|
|successCount|string(int64)|false|none|Count of entries that were deleted successfully.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRetailV2alphaPurgeProductsRequest">GoogleCloudRetailV2alphaPurgeProductsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapurgeproductsrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaPurgeProductsRequest"></a>
<a id="tocSgooglecloudretailv2alphapurgeproductsrequest"></a>
<a id="tocsgooglecloudretailv2alphapurgeproductsrequest"></a>

```json
{
  "filter": "string",
  "force": true
}
```

Request message for PurgeProducts method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Required. The filter string to specify the products to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. "*" implies delete all items in a branch. The eligible fields for filtering are: * `availability`: Double quoted Product.availability string. * `create_time` : in ISO 8601 "zulu" format. Supported syntax: * Comparators (">", "<", ">=", "<=", "="). Examples: * create_time <= "2015-02-13T17:05:46Z" * availability = "IN_STOCK" * Conjunctions ("AND") Examples: * create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER" * Disjunctions ("OR") Examples: * create_time <= "2015-02-13T17:05:46Z" OR availability = "IN_STOCK" * Can support nested queries. Examples: * (create_time <= "2015-02-13T17:05:46Z" AND availability = "PREORDER") OR (create_time >= "2015-02-14T13:03:32Z" AND availability = "IN_STOCK") * Filter Limits: * Filter should not contain more than 6 conditions. * Max nesting depth should not exceed 2 levels. Examples queries: * Delete back order products created before a timestamp. create_time <= "2015-02-13T17:05:46Z" OR availability = "BACKORDER"|
|force|boolean|false|none|Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any products.|

<h2 id="tocS_GoogleCloudRetailV2alphaPurgeProductsResponse">GoogleCloudRetailV2alphaPurgeProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapurgeproductsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaPurgeProductsResponse"></a>
<a id="tocSgooglecloudretailv2alphapurgeproductsresponse"></a>
<a id="tocsgooglecloudretailv2alphapurgeproductsresponse"></a>

```json
{
  "purgeCount": "string",
  "purgeSample": [
    "string"
  ]
}
```

Response of the PurgeProductsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purgeCount|string(int64)|false|none|The total count of products purged as a result of the operation.|
|purgeSample|[string]|false|none|A sample of the product names that will be deleted. Only populated if `force` is set to false. A max of 100 names will be returned and the names are chosen at random.|

<h2 id="tocS_GoogleCloudRetailV2alphaPurgeUserEventsRequest">GoogleCloudRetailV2alphaPurgeUserEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapurgeusereventsrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaPurgeUserEventsRequest"></a>
<a id="tocSgooglecloudretailv2alphapurgeusereventsrequest"></a>
<a id="tocsgooglecloudretailv2alphapurgeusereventsrequest"></a>

```json
{
  "filter": "string",
  "force": true
}
```

Request message for PurgeUserEvents method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|Required. The filter string to specify the events to be deleted with a length limit of 5,000 characters. Empty string filter is not allowed. The eligible fields for filtering are: * `eventType`: Double quoted UserEvent.event_type string. * `eventTime`: in ISO 8601 "zulu" format. * `visitorId`: Double quoted string. Specifying this will delete all events associated with a visitor. * `userId`: Double quoted string. Specifying this will delete all events associated with a user. Examples: * Deleting all events in a time range: `eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z"` * Deleting specific eventType in time range: `eventTime > "2012-04-23T18:25:43.511Z" eventType = "detail-page-view"` * Deleting all events for a specific visitor: `visitorId = "visitor1024"` The filtering fields are assumed to have an implicit AND.|
|force|boolean|false|none|Actually perform the purge. If `force` is set to false, the method will return the expected purge count without deleting any user events.|

<h2 id="tocS_GoogleCloudRetailV2alphaPurgeUserEventsResponse">GoogleCloudRetailV2alphaPurgeUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphapurgeusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaPurgeUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2alphapurgeusereventsresponse"></a>
<a id="tocsgooglecloudretailv2alphapurgeusereventsresponse"></a>

```json
{
  "purgedEventsCount": "string"
}
```

Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purgedEventsCount|string(int64)|false|none|The total count of events purged as a result of the operation.|

<h2 id="tocS_GoogleCloudRetailV2alphaRating">GoogleCloudRetailV2alphaRating</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharating"></a>
<a id="schema_GoogleCloudRetailV2alphaRating"></a>
<a id="tocSgooglecloudretailv2alpharating"></a>
<a id="tocsgooglecloudretailv2alpharating"></a>

```json
{
  "averageRating": 0,
  "ratingCount": 0,
  "ratingHistogram": [
    0
  ]
}
```

The rating of a Product.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|averageRating|number(float)|false|none|The average rating of the Product. The rating is scaled at 1-5. Otherwise, an INVALID_ARGUMENT error is returned.|
|ratingCount|integer(int32)|false|none|The total number of ratings. This value is independent of the value of rating_histogram. This value must be nonnegative. Otherwise, an INVALID_ARGUMENT error is returned.|
|ratingHistogram|[integer(int32)]|false|none|List of rating counts per rating value (index = rating - 1). The list is empty if there is no rating. If the list is non-empty, its size is always 5. Otherwise, an INVALID_ARGUMENT error is returned. For example, [41, 14, 13, 47, 303]. It means that the Product got 41 ratings with 1 star, 14 ratings with 2 star, and so on.|

<h2 id="tocS_GoogleCloudRetailV2alphaRejoinUserEventsMetadata">GoogleCloudRetailV2alphaRejoinUserEventsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharejoinusereventsmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaRejoinUserEventsMetadata"></a>
<a id="tocSgooglecloudretailv2alpharejoinusereventsmetadata"></a>
<a id="tocsgooglecloudretailv2alpharejoinusereventsmetadata"></a>

```json
{}
```

Metadata for `RejoinUserEvents` method.

<h2 id="tocS_GoogleCloudRetailV2alphaRejoinUserEventsRequest">GoogleCloudRetailV2alphaRejoinUserEventsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharejoinusereventsrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaRejoinUserEventsRequest"></a>
<a id="tocSgooglecloudretailv2alpharejoinusereventsrequest"></a>
<a id="tocsgooglecloudretailv2alpharejoinusereventsrequest"></a>

```json
{
  "userEventRejoinScope": "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
}
```

Request message for RejoinUserEvents method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userEventRejoinScope|string|false|none|The type of the user event rejoin to define the scope and range of the user events to be rejoined with the latest product catalog. Defaults to `USER_EVENT_REJOIN_SCOPE_UNSPECIFIED` if this field is not set, or set to an invalid integer value.|

#### Enumerated Values

|Property|Value|
|---|---|
|userEventRejoinScope|USER_EVENT_REJOIN_SCOPE_UNSPECIFIED|
|userEventRejoinScope|JOINED_EVENTS|
|userEventRejoinScope|UNJOINED_EVENTS|

<h2 id="tocS_GoogleCloudRetailV2alphaRejoinUserEventsResponse">GoogleCloudRetailV2alphaRejoinUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharejoinusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaRejoinUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2alpharejoinusereventsresponse"></a>
<a id="tocsgooglecloudretailv2alpharejoinusereventsresponse"></a>

```json
{
  "rejoinedUserEventsCount": "string"
}
```

Response message for `RejoinUserEvents` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rejoinedUserEventsCount|string(int64)|false|none|Number of user events that were joined with latest product catalog.|

<h2 id="tocS_GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest">GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharemovecatalogattributerequest"></a>
<a id="schema_GoogleCloudRetailV2alphaRemoveCatalogAttributeRequest"></a>
<a id="tocSgooglecloudretailv2alpharemovecatalogattributerequest"></a>
<a id="tocsgooglecloudretailv2alpharemovecatalogattributerequest"></a>

```json
{
  "key": "string"
}
```

Request for CatalogService.RemoveCatalogAttribute method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|Required. The attribute name key of the CatalogAttribute to remove.|

<h2 id="tocS_GoogleCloudRetailV2alphaRemoveControlRequest">GoogleCloudRetailV2alphaRemoveControlRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharemovecontrolrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaRemoveControlRequest"></a>
<a id="tocSgooglecloudretailv2alpharemovecontrolrequest"></a>
<a id="tocsgooglecloudretailv2alpharemovecontrolrequest"></a>

```json
{
  "controlId": "string"
}
```

Request for RemoveControl method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|controlId|string|false|none|Required. The id of the control to apply. Assumed to be in the same catalog as the serving config.|

<h2 id="tocS_GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadata">GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharemovefulfillmentplacesmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaRemoveFulfillmentPlacesMetadata"></a>
<a id="tocSgooglecloudretailv2alpharemovefulfillmentplacesmetadata"></a>
<a id="tocsgooglecloudretailv2alpharemovefulfillmentplacesmetadata"></a>

```json
{}
```

Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest">GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharemovefulfillmentplacesrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest"></a>
<a id="tocSgooglecloudretailv2alpharemovefulfillmentplacesrequest"></a>
<a id="tocsgooglecloudretailv2alpharemovefulfillmentplacesrequest"></a>

```json
{
  "allowMissing": true,
  "placeIds": [
    "string"
  ],
  "removeTime": "string",
  "type": "string"
}
```

Request message for ProductService.RemoveFulfillmentPlaces method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMissing|boolean|false|none|If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|placeIds|[string]|false|none|Required. The IDs for this type, such as the store IDs for "pickup-in-store" or the region IDs for "same-day-delivery", to be removed for this type. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern `[a-zA-Z0-9_-]+`, such as "store1" or "REGION-2". Otherwise, an INVALID_ARGUMENT error is returned.|
|removeTime|string(google-datetime)|false|none|The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used.|
|type|string|false|none|Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * "pickup-in-store" * "ship-to-store" * "same-day-delivery" * "next-day-delivery" * "custom-type-1" * "custom-type-2" * "custom-type-3" * "custom-type-4" * "custom-type-5" If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type.|

<h2 id="tocS_GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponse">GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharemovefulfillmentplacesresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaRemoveFulfillmentPlacesResponse"></a>
<a id="tocSgooglecloudretailv2alpharemovefulfillmentplacesresponse"></a>
<a id="tocsgooglecloudretailv2alpharemovefulfillmentplacesresponse"></a>

```json
{}
```

Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2alphaRemoveLocalInventoriesMetadata">GoogleCloudRetailV2alphaRemoveLocalInventoriesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharemovelocalinventoriesmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaRemoveLocalInventoriesMetadata"></a>
<a id="tocSgooglecloudretailv2alpharemovelocalinventoriesmetadata"></a>
<a id="tocsgooglecloudretailv2alpharemovelocalinventoriesmetadata"></a>

```json
{}
```

Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest">GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharemovelocalinventoriesrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest"></a>
<a id="tocSgooglecloudretailv2alpharemovelocalinventoriesrequest"></a>
<a id="tocsgooglecloudretailv2alpharemovelocalinventoriesrequest"></a>

```json
{
  "allowMissing": true,
  "placeIds": [
    "string"
  ],
  "removeTime": "string"
}
```

Request message for ProductService.RemoveLocalInventories method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMissing|boolean|false|none|If set to true, and the Product is not found, the local inventory removal request will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|placeIds|[string]|false|none|Required. A list of place IDs to have their inventory deleted. At most 3000 place IDs are allowed per request.|
|removeTime|string(google-datetime)|false|none|The time when the inventory deletions are issued. Used to prevent out-of-order updates and deletions on local inventory fields. If not provided, the internal system time will be used.|

<h2 id="tocS_GoogleCloudRetailV2alphaRemoveLocalInventoriesResponse">GoogleCloudRetailV2alphaRemoveLocalInventoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharemovelocalinventoriesresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaRemoveLocalInventoriesResponse"></a>
<a id="tocSgooglecloudretailv2alpharemovelocalinventoriesresponse"></a>
<a id="tocsgooglecloudretailv2alpharemovelocalinventoriesresponse"></a>

```json
{}
```

Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest">GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphareplacecatalogattributerequest"></a>
<a id="schema_GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest"></a>
<a id="tocSgooglecloudretailv2alphareplacecatalogattributerequest"></a>
<a id="tocsgooglecloudretailv2alphareplacecatalogattributerequest"></a>

```json
{
  "catalogAttribute": {
    "dynamicFacetableOption": "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
    "exactSearchableOption": "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
    "inUse": true,
    "indexableOption": "INDEXABLE_OPTION_UNSPECIFIED",
    "key": "string",
    "recommendationsFilteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
    "retrievableOption": "RETRIEVABLE_OPTION_UNSPECIFIED",
    "searchableOption": "SEARCHABLE_OPTION_UNSPECIFIED",
    "type": "UNKNOWN"
  },
  "updateMask": "string"
}
```

Request for CatalogService.ReplaceCatalogAttribute method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogAttribute|[GoogleCloudRetailV2alphaCatalogAttribute](#schemagooglecloudretailv2alphacatalogattribute)|false|none|Required. The updated CatalogAttribute.|
|updateMask|string(google-fieldmask)|false|none|Indicates which fields in the provided CatalogAttribute to update. The following are NOT supported: * CatalogAttribute.key If not set, all supported fields are updated.|

<h2 id="tocS_GoogleCloudRetailV2alphaResumeModelRequest">GoogleCloudRetailV2alphaResumeModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharesumemodelrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaResumeModelRequest"></a>
<a id="tocSgooglecloudretailv2alpharesumemodelrequest"></a>
<a id="tocsgooglecloudretailv2alpharesumemodelrequest"></a>

```json
{}
```

Request for resuming training of a model.

<h2 id="tocS_GoogleCloudRetailV2alphaRule">GoogleCloudRetailV2alphaRule</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharule"></a>
<a id="schema_GoogleCloudRetailV2alphaRule"></a>
<a id="tocSgooglecloudretailv2alpharule"></a>
<a id="tocsgooglecloudretailv2alpharule"></a>

```json
{
  "boostAction": {
    "boost": 0,
    "productsFilter": "string"
  },
  "condition": {
    "activeTimeRange": [
      {
        "endTime": "string",
        "startTime": "string"
      }
    ],
    "queryTerms": [
      {
        "fullMatch": true,
        "value": "string"
      }
    ]
  },
  "doNotAssociateAction": {
    "doNotAssociateTerms": [
      "string"
    ],
    "queryTerms": [
      "string"
    ],
    "terms": [
      "string"
    ]
  },
  "filterAction": {
    "filter": "string"
  },
  "ignoreAction": {
    "ignoreTerms": [
      "string"
    ]
  },
  "onewaySynonymsAction": {
    "onewayTerms": [
      "string"
    ],
    "queryTerms": [
      "string"
    ],
    "synonyms": [
      "string"
    ]
  },
  "redirectAction": {
    "redirectUri": "string"
  },
  "replacementAction": {
    "queryTerms": [
      "string"
    ],
    "replacementTerm": "string",
    "term": "string"
  },
  "twowaySynonymsAction": {
    "synonyms": [
      "string"
    ]
  }
}
```

A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boostAction|[GoogleCloudRetailV2alphaRuleBoostAction](#schemagooglecloudretailv2alpharuleboostaction)|false|none|A boost action.|
|condition|[GoogleCloudRetailV2alphaCondition](#schemagooglecloudretailv2alphacondition)|false|none|Required. The condition that triggers the rule. If the condition is empty, the rule will always apply.|
|doNotAssociateAction|[GoogleCloudRetailV2alphaRuleDoNotAssociateAction](#schemagooglecloudretailv2alpharuledonotassociateaction)|false|none|Prevents term from being associated with other terms.|
|filterAction|[GoogleCloudRetailV2alphaRuleFilterAction](#schemagooglecloudretailv2alpharulefilteraction)|false|none|Filters results.|
|ignoreAction|[GoogleCloudRetailV2alphaRuleIgnoreAction](#schemagooglecloudretailv2alpharuleignoreaction)|false|none|Ignores specific terms from query during search.|
|onewaySynonymsAction|[GoogleCloudRetailV2alphaRuleOnewaySynonymsAction](#schemagooglecloudretailv2alpharuleonewaysynonymsaction)|false|none|Treats specific term as a synonym with a group of terms. Group of terms will not be treated as synonyms with the specific term.|
|redirectAction|[GoogleCloudRetailV2alphaRuleRedirectAction](#schemagooglecloudretailv2alpharuleredirectaction)|false|none|Redirects a shopper to a specific page.|
|replacementAction|[GoogleCloudRetailV2alphaRuleReplacementAction](#schemagooglecloudretailv2alpharulereplacementaction)|false|none|Replaces specific terms in the query.|
|twowaySynonymsAction|[GoogleCloudRetailV2alphaRuleTwowaySynonymsAction](#schemagooglecloudretailv2alpharuletwowaysynonymsaction)|false|none|Treats a set of terms as synonyms of one another.|

<h2 id="tocS_GoogleCloudRetailV2alphaRuleBoostAction">GoogleCloudRetailV2alphaRuleBoostAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharuleboostaction"></a>
<a id="schema_GoogleCloudRetailV2alphaRuleBoostAction"></a>
<a id="tocSgooglecloudretailv2alpharuleboostaction"></a>
<a id="tocsgooglecloudretailv2alpharuleboostaction"></a>

```json
{
  "boost": 0,
  "productsFilter": "string"
}
```

A boost action to apply to results matching condition specified above.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boost|number(float)|false|none|Strength of the condition boost, which must be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.|
|productsFilter|string|false|none|The filter can have a max size of 5000 characters. An expression which specifies which products to apply an action to. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": *(id: ANY("product_1", "product_2")) * *AND * *(colorFamilies: ANY("Red", "Blue")) *|

<h2 id="tocS_GoogleCloudRetailV2alphaRuleDoNotAssociateAction">GoogleCloudRetailV2alphaRuleDoNotAssociateAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharuledonotassociateaction"></a>
<a id="schema_GoogleCloudRetailV2alphaRuleDoNotAssociateAction"></a>
<a id="tocSgooglecloudretailv2alpharuledonotassociateaction"></a>
<a id="tocsgooglecloudretailv2alpharuledonotassociateaction"></a>

```json
{
  "doNotAssociateTerms": [
    "string"
  ],
  "queryTerms": [
    "string"
  ],
  "terms": [
    "string"
  ]
}
```

Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|doNotAssociateTerms|[string]|false|none|Cannot contain duplicates or the query term. Can specify up to 100 terms.|
|queryTerms|[string]|false|none|Terms from the search query. Will not consider do_not_associate_terms for search if in search query. Can specify up to 100 terms.|
|terms|[string]|false|none|Will be [deprecated = true] post migration;|

<h2 id="tocS_GoogleCloudRetailV2alphaRuleFilterAction">GoogleCloudRetailV2alphaRuleFilterAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharulefilteraction"></a>
<a id="schema_GoogleCloudRetailV2alphaRuleFilterAction"></a>
<a id="tocSgooglecloudretailv2alpharulefilteraction"></a>
<a id="tocsgooglecloudretailv2alpharulefilteraction"></a>

```json
{
  "filter": "string"
}
```

* Rule Condition: - No Condition.query_terms provided is a global match. - 1 or more Condition.query_terms provided are combined with OR operator. * Action Input: The request query and filter that are applied to the retrieved products, in addition to any filters already provided with the SearchRequest. The AND operator is used to combine the query's existing filters with the filter rule(s). NOTE: May result in 0 results when filters conflict. * Action Result: Filters the returned objects to be ONLY those that passed the filter.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|A filter to apply on the matching condition results. Supported features: * filter must be set. * Filter syntax is identical to SearchRequest.filter. See more details at the Retail Search [user guide](/retail/search/docs/filter-and-order#filter). * To filter products with product ID "product_1" or "product_2", and color "Red" or "Blue": *(id: ANY("product_1", "product_2")) * *AND * *(colorFamilies: ANY("Red", "Blue")) *|

<h2 id="tocS_GoogleCloudRetailV2alphaRuleIgnoreAction">GoogleCloudRetailV2alphaRuleIgnoreAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharuleignoreaction"></a>
<a id="schema_GoogleCloudRetailV2alphaRuleIgnoreAction"></a>
<a id="tocSgooglecloudretailv2alpharuleignoreaction"></a>
<a id="tocsgooglecloudretailv2alpharuleignoreaction"></a>

```json
{
  "ignoreTerms": [
    "string"
  ]
}
```

Prevents a term in the query from being used in search. Example: Don't search for "shoddy".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ignoreTerms|[string]|false|none|Terms to ignore in the search query.|

<h2 id="tocS_GoogleCloudRetailV2alphaRuleOnewaySynonymsAction">GoogleCloudRetailV2alphaRuleOnewaySynonymsAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharuleonewaysynonymsaction"></a>
<a id="schema_GoogleCloudRetailV2alphaRuleOnewaySynonymsAction"></a>
<a id="tocSgooglecloudretailv2alpharuleonewaysynonymsaction"></a>
<a id="tocsgooglecloudretailv2alpharuleonewaysynonymsaction"></a>

```json
{
  "onewayTerms": [
    "string"
  ],
  "queryTerms": [
    "string"
  ],
  "synonyms": [
    "string"
  ]
}
```

Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|onewayTerms|[string]|false|none|Will be [deprecated = true] post migration;|
|queryTerms|[string]|false|none|Terms from the search query. Will treat synonyms as their synonyms. Not themselves synonyms of the synonyms. Can specify up to 100 terms.|
|synonyms|[string]|false|none|Defines a set of synonyms. Cannot contain duplicates. Can specify up to 100 synonyms.|

<h2 id="tocS_GoogleCloudRetailV2alphaRuleRedirectAction">GoogleCloudRetailV2alphaRuleRedirectAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharuleredirectaction"></a>
<a id="schema_GoogleCloudRetailV2alphaRuleRedirectAction"></a>
<a id="tocSgooglecloudretailv2alpharuleredirectaction"></a>
<a id="tocsgooglecloudretailv2alpharuleredirectaction"></a>

```json
{
  "redirectUri": "string"
}
```

Redirects a shopper to a specific page. * Rule Condition: - Must specify Condition.query_terms. * Action Input: Request Query * Action Result: Redirects shopper to provided uri.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|redirectUri|string|false|none|URL must have length equal or less than 2000 characters.|

<h2 id="tocS_GoogleCloudRetailV2alphaRuleReplacementAction">GoogleCloudRetailV2alphaRuleReplacementAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharulereplacementaction"></a>
<a id="schema_GoogleCloudRetailV2alphaRuleReplacementAction"></a>
<a id="tocSgooglecloudretailv2alpharulereplacementaction"></a>
<a id="tocsgooglecloudretailv2alpharulereplacementaction"></a>

```json
{
  "queryTerms": [
    "string"
  ],
  "replacementTerm": "string",
  "term": "string"
}
```

Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queryTerms|[string]|false|none|Terms from the search query. Will be replaced by replacement term. Can specify up to 100 terms.|
|replacementTerm|string|false|none|Term that will be used for replacement.|
|term|string|false|none|Will be [deprecated = true] post migration;|

<h2 id="tocS_GoogleCloudRetailV2alphaRuleTwowaySynonymsAction">GoogleCloudRetailV2alphaRuleTwowaySynonymsAction</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alpharuletwowaysynonymsaction"></a>
<a id="schema_GoogleCloudRetailV2alphaRuleTwowaySynonymsAction"></a>
<a id="tocSgooglecloudretailv2alpharuletwowaysynonymsaction"></a>
<a id="tocsgooglecloudretailv2alpharuletwowaysynonymsaction"></a>

```json
{
  "synonyms": [
    "string"
  ]
}
```

Creates a set of terms that will be treated as synonyms of each other. Example: synonyms of "sneakers" and "shoes": * "sneakers" will use a synonym of "shoes". * "shoes" will use a synonym of "sneakers".

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|synonyms|[string]|false|none|Defines a set of synonyms. Can specify up to 100 synonyms. Must specify at least 2 synonyms.|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequest">GoogleCloudRetailV2alphaSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequest"></a>
<a id="tocSgooglecloudretailv2alphasearchrequest"></a>
<a id="tocsgooglecloudretailv2alphasearchrequest"></a>

```json
{
  "boostSpec": {
    "conditionBoostSpecs": [
      {
        "boost": 0,
        "condition": "string"
      }
    ],
    "skipBoostSpecValidation": true
  },
  "branch": "string",
  "canonicalFilter": "string",
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "entity": "string",
  "facetSpecs": [
    {
      "enableDynamicPosition": true,
      "excludedFilterKeys": [
        "string"
      ],
      "facetKey": {
        "caseInsensitive": true,
        "contains": [
          "string"
        ],
        "intervals": [
          {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          }
        ],
        "key": "string",
        "orderBy": "string",
        "prefixes": [
          "string"
        ],
        "query": "string",
        "restrictedValues": [
          "string"
        ],
        "returnMinMax": true
      },
      "limit": 0
    }
  ],
  "filter": "string",
  "labels": {
    "property1": "string",
    "property2": "string"
  },
  "offset": 0,
  "orderBy": "string",
  "pageCategories": [
    "string"
  ],
  "pageSize": 0,
  "pageToken": "string",
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "query": "string",
  "queryExpansionSpec": {
    "condition": "CONDITION_UNSPECIFIED",
    "pinUnexpandedResults": true
  },
  "relevanceThreshold": "RELEVANCE_THRESHOLD_UNSPECIFIED",
  "searchMode": "SEARCH_MODE_UNSPECIFIED",
  "spellCorrectionSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "userInfo": {
    "directUserRequest": true,
    "ipAddress": "string",
    "userAgent": "string",
    "userId": "string"
  },
  "variantRollupKeys": [
    "string"
  ],
  "visitorId": "string"
}
```

Request message for SearchService.Search method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boostSpec|[GoogleCloudRetailV2alphaSearchRequestBoostSpec](#schemagooglecloudretailv2alphasearchrequestboostspec)|false|none|Boost specification to boost certain products. See more details at this [user guide](https://cloud.google.com/retail/docs/boosting). Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions.|
|branch|string|false|none|The branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use "default_branch" as the branch ID or leave this field empty, to search products under the default branch.|
|canonicalFilter|string|false|none|The default filter that is applied when a user performs a search without checking any filters on the search page. The filter applied to every search request when quality improvement such as query expansion is needed. For example, if a query does not have enough results, an expanded query with SearchRequest.canonical_filter will be returned as a supplement of the original query. This field is strongly recommended to achieve high search quality. See SearchRequest.filter for more details about filter syntax.|
|dynamicFacetSpec|[GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec](#schemagooglecloudretailv2alphasearchrequestdynamicfacetspec)|false|none|Deprecated. Refer to https://cloud.google.com/retail/docs/configs#dynamic to enable dynamic facets. Do not set this field. The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated.|
|entity|string|false|none|The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. If this is set, it should be exactly matched with UserEvent.entity to get search results boosted by entity.|
|facetSpecs|[[GoogleCloudRetailV2alphaSearchRequestFacetSpec](#schemagooglecloudretailv2alphasearchrequestfacetspec)]|false|none|Facet specifications for faceted search. If empty, no facets are returned. A maximum of 200 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.|
|filter|string|false|none|The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. Filter expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#filter). If this field is unrecognizable, an INVALID_ARGUMENT is returned.|
|labels|object|false|none|The labels applied to a resource must meet the following requirements: * Each resource can have multiple labels, up to a maximum of 64. * Each label must be a key-value pair. * Keys have a minimum length of 1 character and a maximum length of 63 characters and cannot be empty. Values can be empty and have a maximum length of 63 characters. * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. All characters must use UTF-8 encoding, and international characters are allowed. * The key portion of a label must be unique. However, you can use the same key with multiple resources. * Keys must start with a lowercase letter or international character. See [Google Cloud Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements) for more details.|
|offset|integer(int32)|false|none|A 0-indexed integer that specifies the current offset (that is, starting result location, amongst the Products deemed by the API as relevant) in search results. This field is only considered if page_token is unset. If this field is negative, an INVALID_ARGUMENT is returned.|
|orderBy|string|false|none|The order in which products are returned. Products can be ordered by a field in an Product object. Leave it unset if ordered by relevance. OrderBy expression is case-sensitive. See more details at this [user guide](https://cloud.google.com/retail/docs/filter-and-order#order). If this field is unrecognizable, an INVALID_ARGUMENT is returned.|
|pageCategories|[string]|false|none|The categories associated with a category page. Must be set for category navigation queries to achieve good search quality. The format should be the same as UserEvent.page_categories; To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"].|
|pageSize|integer(int32)|false|none|Maximum number of Products to return. If unspecified, defaults to a reasonable value. The maximum allowed value is 120. Values above 120 will be coerced to 120. If this field is negative, an INVALID_ARGUMENT is returned.|
|pageToken|string|false|none|A page token SearchResponse.next_page_token, received from a previous SearchService.Search call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SearchService.Search must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.|
|personalizationSpec|[GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec](#schemagooglecloudretailv2alphasearchrequestpersonalizationspec)|false|none|The specification for personalization. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec.|
|query|string|false|none|Raw search query. If this field is empty, the request is considered a category browsing request and returned results are based on filter and page_categories.|
|queryExpansionSpec|[GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec](#schemagooglecloudretailv2alphasearchrequestqueryexpansionspec)|false|none|The query expansion specification that specifies the conditions under which query expansion will occur. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#query_expansion).|
|relevanceThreshold|string|false|none|The relevance threshold of the search results. Defaults to RelevanceThreshold.HIGH, which means only the most relevant results are shown, and the least number of results are returned. See more details at this [user guide](https://cloud.google.com/retail/docs/result-size#relevance_thresholding).|
|searchMode|string|false|none|The search mode of the search request. If not specified, a single search request triggers both product search and faceted search.|
|spellCorrectionSpec|[GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec](#schemagooglecloudretailv2alphasearchrequestspellcorrectionspec)|false|none|The spell correction specification that specifies the mode under which spell correction will take effect.|
|userInfo|[GoogleCloudRetailV2alphaUserInfo](#schemagooglecloudretailv2alphauserinfo)|false|none|User information.|
|variantRollupKeys|[string]|false|none|The keys to fetch and rollup the matching variant Products attributes, FulfillmentInfo or LocalInventorys attributes. The attributes from all the matching variant Products or LocalInventorys are merged and de-duplicated. Notice that rollup attributes will lead to extra query latency. Maximum number of keys is 30. For FulfillmentInfo, a fulfillment type and a fulfillment ID must be provided in the format of "fulfillmentType.fulfillmentId". E.g., in "pickupInStore.store123", "pickupInStore" is fulfillment type and "store123" is the store ID. Supported keys are: * colorFamilies * price * originalPrice * discount * variantId * inventory(place_id,price) * inventory(place_id,original_price) * inventory(place_id,attributes.key), where key is any key in the Product.local_inventories.attributes map. * attributes.key, where key is any key in the Product.attributes map. * pickupInStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "pickup-in-store". * shipToStore.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "ship-to-store". * sameDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "same-day-delivery". * nextDayDelivery.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "next-day-delivery". * customFulfillment1.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-1". * customFulfillment2.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-2". * customFulfillment3.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-3". * customFulfillment4.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-4". * customFulfillment5.id, where id is any FulfillmentInfo.place_ids for FulfillmentInfo.type "custom-type-5". If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned.|
|visitorId|string|false|none|Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This should be the same identifier as UserEvent.visitor_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|

#### Enumerated Values

|Property|Value|
|---|---|
|relevanceThreshold|RELEVANCE_THRESHOLD_UNSPECIFIED|
|relevanceThreshold|HIGH|
|relevanceThreshold|MEDIUM|
|relevanceThreshold|LOW|
|relevanceThreshold|LOWEST|
|searchMode|SEARCH_MODE_UNSPECIFIED|
|searchMode|PRODUCT_SEARCH_ONLY|
|searchMode|FACETED_SEARCH_ONLY|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequestBoostSpec">GoogleCloudRetailV2alphaSearchRequestBoostSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequestboostspec"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequestBoostSpec"></a>
<a id="tocSgooglecloudretailv2alphasearchrequestboostspec"></a>
<a id="tocsgooglecloudretailv2alphasearchrequestboostspec"></a>

```json
{
  "conditionBoostSpecs": [
    {
      "boost": 0,
      "condition": "string"
    }
  ],
  "skipBoostSpecValidation": true
}
```

Boost specification to boost certain items.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditionBoostSpecs|[[GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec](#schemagooglecloudretailv2alphasearchrequestboostspecconditionboostspec)]|false|none|Condition boost specifications. If a product matches multiple conditions in the specifictions, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 20.|
|skipBoostSpecValidation|boolean|false|none|Whether to skip boostspec validation. If this field is set to true, invalid BoostSpec.condition_boost_specs will be ignored and valid BoostSpec.condition_boost_specs will still be applied.|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec">GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequestboostspecconditionboostspec"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec"></a>
<a id="tocSgooglecloudretailv2alphasearchrequestboostspecconditionboostspec"></a>
<a id="tocsgooglecloudretailv2alphasearchrequestboostspecconditionboostspec"></a>

```json
{
  "boost": 0,
  "condition": "string"
}
```

Boost applies to products which match a condition.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boost|number(float)|false|none|Strength of the condition boost, which should be in [-1, 1]. Negative boost means demotion. Default is 0.0. Setting to 1.0 gives the item a big promotion. However, it does not necessarily mean that the boosted item will be the top result at all times, nor that other items will be excluded. Results could still be shown even when none of them matches the condition. And results that are significantly more relevant to the search query can still trump your heavily favored but irrelevant items. Setting to -1.0 gives the item a big demotion. However, results that are deeply relevant might still be shown. The item will have an upstream battle to get a fairly high ranking, but it is not blocked out completely. Setting to 0.0 means no boost applied. The boosting condition is ignored.|
|condition|string|false|none|An expression which specifies a boost condition. The syntax and supported fields are the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Examples: * To boost products with product ID "product_1" or "product_2", and color "Red" or "Blue": * (id: ANY("product_1", "product_2")) AND (colorFamilies: ANY("Red","Blue"))|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec">GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequestdynamicfacetspec"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec"></a>
<a id="tocSgooglecloudretailv2alphasearchrequestdynamicfacetspec"></a>
<a id="tocsgooglecloudretailv2alphasearchrequestdynamicfacetspec"></a>

```json
{
  "mode": "MODE_UNSPECIFIED"
}
```

The specifications of dynamically generated facets.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|Mode of the DynamicFacet feature. Defaults to Mode.DISABLED if it's unset.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|DISABLED|
|mode|ENABLED|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequestFacetSpec">GoogleCloudRetailV2alphaSearchRequestFacetSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequestfacetspec"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequestFacetSpec"></a>
<a id="tocSgooglecloudretailv2alphasearchrequestfacetspec"></a>
<a id="tocsgooglecloudretailv2alphasearchrequestfacetspec"></a>

```json
{
  "enableDynamicPosition": true,
  "excludedFilterKeys": [
    "string"
  ],
  "facetKey": {
    "caseInsensitive": true,
    "contains": [
      "string"
    ],
    "intervals": [
      {
        "exclusiveMaximum": 0,
        "exclusiveMinimum": 0,
        "maximum": 0,
        "minimum": 0
      }
    ],
    "key": "string",
    "orderBy": "string",
    "prefixes": [
      "string"
    ],
    "query": "string",
    "restrictedValues": [
      "string"
    ],
    "returnMinMax": true
  },
  "limit": 0
}
```

A facet specification to perform faceted search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enableDynamicPosition|boolean|false|none|Enables dynamic position for this facet. If set to true, the position of this facet among all facets in the response is determined by Google Retail Search. It will be ordered together with dynamic facets if dynamic facets is enabled. If set to false, the position of this facet in the response will be the same as in the request, and it will be ranked before the facets with dynamic position enable and all dynamic facets. For example, you may always want to have rating facet returned in the response, but it's not necessarily to always display the rating facet at the top. In that case, you can set enable_dynamic_position to true so that the position of rating facet in response will be determined by Google Retail Search. Another example, assuming you have the following facets in the request: * "rating", enable_dynamic_position = true * "price", enable_dynamic_position = false * "brands", enable_dynamic_position = false And also you have a dynamic facets enable, which will generate a facet 'gender'. Then the final order of the facets in the response can be ("price", "brands", "rating", "gender") or ("price", "brands", "gender", "rating") depends on how Google Retail Search orders "gender" and "rating" facets. However, notice that "price" and "brands" will always be ranked at 1st and 2nd position since their enable_dynamic_position are false.|
|excludedFilterKeys|[string]|false|none|List of keys to exclude when faceting. By default, FacetKey.key is not excluded from the filter unless it is listed in this field. Listing a facet key in this field allows its values to appear as facet results, even when they are filtered out of search results. Using this field does not affect what search results are returned. For example, suppose there are 100 products with the color facet "Red" and 200 products with the color facet "Blue". A query containing the filter "colorFamilies:ANY("Red")" and having "colorFamilies" as FacetKey.key would by default return only "Red" products in the search results, and also return "Red" with count 100 as the only color facet. Although there are also blue products available, "Blue" would not be shown as an available facet value. If "colorFamilies" is listed in "excludedFilterKeys", then the query returns the facet values "Red" with count 100 and "Blue" with count 200, because the "colorFamilies" key is now excluded from the filter. Because this field doesn't affect search results, the search results are still correctly filtered to return only "Red" products. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned.|
|facetKey|[GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey](#schemagooglecloudretailv2alphasearchrequestfacetspecfacetkey)|false|none|Required. The facet key specification.|
|limit|integer(int32)|false|none|Maximum of facet values that should be returned for this facet. If unspecified, defaults to 50. The maximum allowed value is 300. Values above 300 will be coerced to 300. If this field is negative, an INVALID_ARGUMENT is returned.|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey">GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequestfacetspecfacetkey"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey"></a>
<a id="tocSgooglecloudretailv2alphasearchrequestfacetspecfacetkey"></a>
<a id="tocsgooglecloudretailv2alphasearchrequestfacetspecfacetkey"></a>

```json
{
  "caseInsensitive": true,
  "contains": [
    "string"
  ],
  "intervals": [
    {
      "exclusiveMaximum": 0,
      "exclusiveMinimum": 0,
      "maximum": 0,
      "minimum": 0
    }
  ],
  "key": "string",
  "orderBy": "string",
  "prefixes": [
    "string"
  ],
  "query": "string",
  "restrictedValues": [
    "string"
  ],
  "returnMinMax": true
}
```

Specifies how a facet is computed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caseInsensitive|boolean|false|none|True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise.|
|contains|[string]|false|none|Only get facet values that contains the given strings. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "contains" to "Shoe", the "categories" facet will give only "Women > Shoe" and "Men > Shoe". Only supported on textual fields. Maximum is 10.|
|intervals|[[GoogleCloudRetailV2alphaInterval](#schemagooglecloudretailv2alphainterval)]|false|none|Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40. For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90 and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles will become the bounds for its intervals and will be returned in the response. If the facet key intervals are specified in the request, then the specified intervals will be returned instead.|
|key|string|false|none|Required. Supported textual and numerical facet keys in Product object, over which the facet values are computed. Facet key is case-sensitive. Allowed facet keys when FacetKey.query is not specified: * textual_field = * "brands" * "categories" * "genders" * "ageGroups" * "availability" * "colorFamilies" * "colors" * "sizes" * "materials" * "patterns" * "conditions" * "attributes.key" * "pickupInStore" * "shipToStore" * "sameDayDelivery" * "nextDayDelivery" * "customFulfillment1" * "customFulfillment2" * "customFulfillment3" * "customFulfillment4" * "customFulfillment5" * "inventory(place_id,attributes.key)" * numerical_field = * "price" * "discount" * "rating" * "ratingCount" * "attributes.key" * "inventory(place_id,price)" * "inventory(place_id,original_price)" * "inventory(place_id,attributes.key)"|
|orderBy|string|false|none|The order in which SearchResponse.Facet.values are returned. Allowed values are: * "count desc", which means order by SearchResponse.Facet.values.count descending. * "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets. If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals; FulfillmentInfo.place_ids are sorted in the order given by FacetSpec.FacetKey.restricted_values.|
|prefixes|[string]|false|none|Only get facet values that start with the given string prefix. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "prefixes" to "Women", the "categories" facet will give only "Women > Shoe" and "Women > Dress". Only supported on textual fields. Maximum is 10.|
|query|string|false|none|The query that is used to compute facet for the given facet key. When provided, it will override the default behavior of facet computation. The query syntax is the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Notice that there is no limitation on FacetKey.key when query is specified. In the response, SearchResponse.Facet.values.value will be always "1" and SearchResponse.Facet.values.count will be the number of results that match the query. For example, you can set a customized facet for "shipToStore", where FacetKey.key is "customizedShipToStore", and FacetKey.query is "availability: ANY(\"IN_STOCK\") AND shipToStore: ANY(\"123\")". Then the facet will count the products that are both in stock and ship to store "123".|
|restrictedValues|[string]|false|none|Only get facet for the given restricted values. For example, when using "pickupInStore" as key and set restricted values to ["store123", "store456"], only facets for "store123" and "store456" are returned. Only supported on predefined textual fields, custom textual attributes and fulfillments. Maximum is 20. Must be set for the fulfillment facet keys: * pickupInStore * shipToStore * sameDayDelivery * nextDayDelivery * customFulfillment1 * customFulfillment2 * customFulfillment3 * customFulfillment4 * customFulfillment5|
|returnMinMax|boolean|false|none|Returns the min and max value for each numerical facet intervals. Ignored for textual facets.|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec">GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequestpersonalizationspec"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec"></a>
<a id="tocSgooglecloudretailv2alphasearchrequestpersonalizationspec"></a>
<a id="tocsgooglecloudretailv2alphasearchrequestpersonalizationspec"></a>

```json
{
  "mode": "MODE_UNSPECIFIED"
}
```

The specification for personalization.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|Defaults to Mode.AUTO.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|AUTO|
|mode|DISABLED|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec">GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequestqueryexpansionspec"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec"></a>
<a id="tocSgooglecloudretailv2alphasearchrequestqueryexpansionspec"></a>
<a id="tocsgooglecloudretailv2alphasearchrequestqueryexpansionspec"></a>

```json
{
  "condition": "CONDITION_UNSPECIFIED",
  "pinUnexpandedResults": true
}
```

Specification to determine under which conditions query expansion should occur.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|string|false|none|The condition under which query expansion should occur. Default to Condition.DISABLED.|
|pinUnexpandedResults|boolean|false|none|Whether to pin unexpanded results. If this field is set to true, unexpanded products are always at the top of the search results, followed by the expanded results.|

#### Enumerated Values

|Property|Value|
|---|---|
|condition|CONDITION_UNSPECIFIED|
|condition|DISABLED|
|condition|AUTO|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec">GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchrequestspellcorrectionspec"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchRequestSpellCorrectionSpec"></a>
<a id="tocSgooglecloudretailv2alphasearchrequestspellcorrectionspec"></a>
<a id="tocsgooglecloudretailv2alphasearchrequestspellcorrectionspec"></a>

```json
{
  "mode": "MODE_UNSPECIFIED"
}
```

The specification for query spell correction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mode|string|false|none|The mode under which spell correction should take effect to replace the original search query. Default to Mode.AUTO.|

#### Enumerated Values

|Property|Value|
|---|---|
|mode|MODE_UNSPECIFIED|
|mode|SUGGESTION_ONLY|
|mode|AUTO|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchResponse">GoogleCloudRetailV2alphaSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchResponse"></a>
<a id="tocSgooglecloudretailv2alphasearchresponse"></a>
<a id="tocsgooglecloudretailv2alphasearchresponse"></a>

```json
{
  "appliedControls": [
    "string"
  ],
  "attributionToken": "string",
  "correctedQuery": "string",
  "experimentInfo": [
    {
      "experiment": "string",
      "servingConfigExperiment": {
        "experimentServingConfig": "string",
        "originalServingConfig": "string"
      }
    }
  ],
  "facets": [
    {
      "dynamicFacet": true,
      "key": "string",
      "values": [
        {
          "count": "string",
          "interval": {
            "exclusiveMaximum": 0,
            "exclusiveMinimum": 0,
            "maximum": 0,
            "minimum": 0
          },
          "maxValue": 0,
          "minValue": 0,
          "value": "string"
        }
      ]
    }
  ],
  "invalidConditionBoostSpecs": [
    {
      "boost": 0,
      "condition": "string"
    }
  ],
  "nextPageToken": "string",
  "queryExpansionInfo": {
    "expandedQuery": true,
    "pinnedResultCount": "string"
  },
  "redirectUri": "string",
  "results": [
    {
      "id": "string",
      "matchingVariantCount": 0,
      "matchingVariantFields": {
        "property1": "string",
        "property2": "string"
      },
      "personalLabels": [
        "string"
      ],
      "product": {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "audience": {
          "ageGroups": [
            "string"
          ],
          "genders": [
            "string"
          ]
        },
        "availability": "AVAILABILITY_UNSPECIFIED",
        "availableQuantity": 0,
        "availableTime": "string",
        "brands": [
          "string"
        ],
        "categories": [
          "string"
        ],
        "collectionMemberIds": [
          "string"
        ],
        "colorInfo": {
          "colorFamilies": [
            "string"
          ],
          "colors": [
            "string"
          ]
        },
        "conditions": [
          "string"
        ],
        "description": "string",
        "expireTime": "string",
        "fulfillmentInfo": [
          {
            "placeIds": [
              "string"
            ],
            "type": "string"
          }
        ],
        "gtin": "string",
        "id": "string",
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "languageCode": "string",
        "localInventories": [
          {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "fulfillmentTypes": [
              "string"
            ],
            "placeId": "string",
            "priceInfo": {
              "cost": 0,
              "currencyCode": "string",
              "originalPrice": 0,
              "price": 0,
              "priceEffectiveTime": "string",
              "priceExpireTime": "string",
              "priceRange": {
                "originalPrice": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                },
                "price": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                }
              }
            }
          }
        ],
        "materials": [
          "string"
        ],
        "name": "string",
        "patterns": [
          "string"
        ],
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string",
          "priceRange": {
            "originalPrice": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            },
            "price": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          }
        },
        "primaryProductId": "string",
        "promotions": [
          {
            "promotionId": "string"
          }
        ],
        "publishTime": "string",
        "rating": {
          "averageRating": 0,
          "ratingCount": 0,
          "ratingHistogram": [
            0
          ]
        },
        "retrievableFields": "string",
        "sizes": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "title": "string",
        "ttl": "string",
        "type": "TYPE_UNSPECIFIED",
        "uri": "string",
        "variants": [
          {}
        ]
      },
      "variantRollupValues": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "totalSize": 0
}
```

Response message for SearchService.Search method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|appliedControls|[string]|false|none|The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).|
|attributionToken|string|false|none|A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.|
|correctedQuery|string|false|none|Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected_query. Otherwise the original query is used for search.|
|experimentInfo|[[GoogleCloudRetailV2alphaExperimentInfo](#schemagooglecloudretailv2alphaexperimentinfo)]|false|none|Metadata related to A/B testing Experiment associated with this response. Only exists when an experiment is triggered.|
|facets|[[GoogleCloudRetailV2alphaSearchResponseFacet](#schemagooglecloudretailv2alphasearchresponsefacet)]|false|none|Results of facets requested by user.|
|invalidConditionBoostSpecs|[[GoogleCloudRetailV2alphaSearchRequestBoostSpecConditionBoostSpec](#schemagooglecloudretailv2alphasearchrequestboostspecconditionboostspec)]|false|none|The invalid SearchRequest.BoostSpec.condition_boost_specs that are not applied during serving.|
|nextPageToken|string|false|none|A token that can be sent as SearchRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.|
|queryExpansionInfo|[GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo](#schemagooglecloudretailv2alphasearchresponsequeryexpansioninfo)|false|none|Query expansion information for the returned results.|
|redirectUri|string|false|none|The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect_uri and attribution_token are set in the response.|
|results|[[GoogleCloudRetailV2alphaSearchResponseSearchResult](#schemagooglecloudretailv2alphasearchresponsesearchresult)]|false|none|A list of matched items. The order represents the ranking.|
|totalSize|integer(int32)|false|none|The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total_size that matches.|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchResponseFacet">GoogleCloudRetailV2alphaSearchResponseFacet</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchresponsefacet"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchResponseFacet"></a>
<a id="tocSgooglecloudretailv2alphasearchresponsefacet"></a>
<a id="tocsgooglecloudretailv2alphasearchresponsefacet"></a>

```json
{
  "dynamicFacet": true,
  "key": "string",
  "values": [
    {
      "count": "string",
      "interval": {
        "exclusiveMaximum": 0,
        "exclusiveMinimum": 0,
        "maximum": 0,
        "minimum": 0
      },
      "maxValue": 0,
      "minValue": 0,
      "value": "string"
    }
  ]
}
```

A facet result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dynamicFacet|boolean|false|none|Whether the facet is dynamically generated.|
|key|string|false|none|The key for this facet. E.g., "colorFamilies" or "price" or "attributes.attr1".|
|values|[[GoogleCloudRetailV2alphaSearchResponseFacetFacetValue](#schemagooglecloudretailv2alphasearchresponsefacetfacetvalue)]|false|none|The facet values for this field.|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchResponseFacetFacetValue">GoogleCloudRetailV2alphaSearchResponseFacetFacetValue</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchresponsefacetfacetvalue"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchResponseFacetFacetValue"></a>
<a id="tocSgooglecloudretailv2alphasearchresponsefacetfacetvalue"></a>
<a id="tocsgooglecloudretailv2alphasearchresponsefacetfacetvalue"></a>

```json
{
  "count": "string",
  "interval": {
    "exclusiveMaximum": 0,
    "exclusiveMinimum": 0,
    "maximum": 0,
    "minimum": 0
  },
  "maxValue": 0,
  "minValue": 0,
  "value": "string"
}
```

A facet value which contains value names and their count.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|string(int64)|false|none|Number of items that have this facet value.|
|interval|[GoogleCloudRetailV2alphaInterval](#schemagooglecloudretailv2alphainterval)|false|none|Interval value for a facet, such as [10, 20) for facet "price".|
|maxValue|number(double)|false|none|The maximum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true.|
|minValue|number(double)|false|none|The minimum value in the FacetValue.interval. Only supported on numerical facets and returned if SearchRequest.FacetSpec.FacetKey.return_min_max is true.|
|value|string|false|none|Text value of a facet, such as "Black" for facet "colorFamilies".|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo">GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchresponsequeryexpansioninfo"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchResponseQueryExpansionInfo"></a>
<a id="tocSgooglecloudretailv2alphasearchresponsequeryexpansioninfo"></a>
<a id="tocsgooglecloudretailv2alphasearchresponsequeryexpansioninfo"></a>

```json
{
  "expandedQuery": true,
  "pinnedResultCount": "string"
}
```

Information describing query expansion including whether expansion has occurred.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expandedQuery|boolean|false|none|Bool describing whether query expansion has occurred.|
|pinnedResultCount|string(int64)|false|none|Number of pinned results. This field will only be set when expansion happens and SearchRequest.QueryExpansionSpec.pin_unexpanded_results is set to true.|

<h2 id="tocS_GoogleCloudRetailV2alphaSearchResponseSearchResult">GoogleCloudRetailV2alphaSearchResponseSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasearchresponsesearchresult"></a>
<a id="schema_GoogleCloudRetailV2alphaSearchResponseSearchResult"></a>
<a id="tocSgooglecloudretailv2alphasearchresponsesearchresult"></a>
<a id="tocsgooglecloudretailv2alphasearchresponsesearchresult"></a>

```json
{
  "id": "string",
  "matchingVariantCount": 0,
  "matchingVariantFields": {
    "property1": "string",
    "property2": "string"
  },
  "personalLabels": [
    "string"
  ],
  "product": {
    "attributes": {
      "property1": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      },
      "property2": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      }
    },
    "audience": {
      "ageGroups": [
        "string"
      ],
      "genders": [
        "string"
      ]
    },
    "availability": "AVAILABILITY_UNSPECIFIED",
    "availableQuantity": 0,
    "availableTime": "string",
    "brands": [
      "string"
    ],
    "categories": [
      "string"
    ],
    "collectionMemberIds": [
      "string"
    ],
    "colorInfo": {
      "colorFamilies": [
        "string"
      ],
      "colors": [
        "string"
      ]
    },
    "conditions": [
      "string"
    ],
    "description": "string",
    "expireTime": "string",
    "fulfillmentInfo": [
      {
        "placeIds": [
          "string"
        ],
        "type": "string"
      }
    ],
    "gtin": "string",
    "id": "string",
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "languageCode": "string",
    "localInventories": [
      {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "fulfillmentTypes": [
          "string"
        ],
        "placeId": "string",
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string",
          "priceRange": {
            "originalPrice": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            },
            "price": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          }
        }
      }
    ],
    "materials": [
      "string"
    ],
    "name": "string",
    "patterns": [
      "string"
    ],
    "priceInfo": {
      "cost": 0,
      "currencyCode": "string",
      "originalPrice": 0,
      "price": 0,
      "priceEffectiveTime": "string",
      "priceExpireTime": "string",
      "priceRange": {
        "originalPrice": {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        },
        "price": {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        }
      }
    },
    "primaryProductId": "string",
    "promotions": [
      {
        "promotionId": "string"
      }
    ],
    "publishTime": "string",
    "rating": {
      "averageRating": 0,
      "ratingCount": 0,
      "ratingHistogram": [
        0
      ]
    },
    "retrievableFields": "string",
    "sizes": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "title": "string",
    "ttl": "string",
    "type": "TYPE_UNSPECIFIED",
    "uri": "string",
    "variants": [
      {}
    ]
  },
  "variantRollupValues": {
    "property1": null,
    "property2": null
  }
}
```

Represents the search results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Product.id of the searched Product.|
|matchingVariantCount|integer(int32)|false|none|The count of matched variant Products.|
|matchingVariantFields|object|false|none|If a variant Product matches the search query, this map indicates which Product fields are matched. The key is the Product.name, the value is a field mask of the matched Product fields. If matched attributes cannot be determined, this map will be empty. For example, a key "sku1" with field mask "products.color_info" indicates there is a match between "sku1" ColorInfo and the query.|
|personalLabels|[string]|false|none|Specifies previous events related to this product for this user based on UserEvent with same SearchRequest.visitor_id or UserInfo.user_id. This is set only when SearchRequest.PersonalizationSpec.mode is SearchRequest.PersonalizationSpec.Mode.AUTO. Possible values: * `purchased`: Indicates that this product has been purchased before.|
|product|[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)|false|none|The product data snippet in the search response. Only Product.name is guaranteed to be populated. Product.variants contains the product variants that match the search query. If there are multiple product variants matching the query, top 5 most relevant product variants are returned and ordered by relevancy. If relevancy can be deternmined, use matching_variant_fields to look up matched product variants fields. If relevancy cannot be determined, e.g. when searching "shoe" all products in a shoe product can be a match, 5 product variants are returned but order is meaningless.|
|variantRollupValues|object|false|none|The rollup matching variant Product attributes. The key is one of the SearchRequest.variant_rollup_keys. The values are the merged and de-duplicated Product attributes. Notice that the rollup values are respect filter. For example, when filtering by "colorFamilies:ANY(\"red\")" and rollup "colorFamilies", only "red" is returned. For textual and numerical attributes, the rollup values is a list of string or double values with type google.protobuf.ListValue. For example, if there are two variants with colors "red" and "blue", the rollup values are { key: "colorFamilies" value { list_value { values { string_value: "red" } values { string_value: "blue" } } } } For FulfillmentInfo, the rollup values is a double value with type google.protobuf.Value. For example, `{key: "pickupInStore.store1" value { number_value: 10 }}` means a there are 10 variants in this product are available in the store "store1".|

<h2 id="tocS_GoogleCloudRetailV2alphaServingConfig">GoogleCloudRetailV2alphaServingConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphaservingconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaServingConfig"></a>
<a id="tocSgooglecloudretailv2alphaservingconfig"></a>
<a id="tocsgooglecloudretailv2alphaservingconfig"></a>

```json
{
  "boostControlIds": [
    "string"
  ],
  "displayName": "string",
  "diversityLevel": "string",
  "diversityType": "DIVERSITY_TYPE_UNSPECIFIED",
  "doNotAssociateControlIds": [
    "string"
  ],
  "dynamicFacetSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "enableCategoryFilterLevel": "string",
  "facetControlIds": [
    "string"
  ],
  "filterControlIds": [
    "string"
  ],
  "ignoreControlIds": [
    "string"
  ],
  "modelId": "string",
  "name": "string",
  "onewaySynonymsControlIds": [
    "string"
  ],
  "personalizationSpec": {
    "mode": "MODE_UNSPECIFIED"
  },
  "priceRerankingLevel": "string",
  "redirectControlIds": [
    "string"
  ],
  "replacementControlIds": [
    "string"
  ],
  "solutionTypes": [
    "SOLUTION_TYPE_UNSPECIFIED"
  ],
  "twowaySynonymsControlIds": [
    "string"
  ]
}
```

Configures metadata that is used to generate serving time results (e.g. search results or recommendation predictions).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boostControlIds|[string]|false|none|Condition boost specifications. If a product matches multiple conditions in the specifications, boost scores from these specifications are all applied and combined in a non-linear way. Maximum number of specifications is 100. Notice that if both ServingConfig.boost_control_ids and SearchRequest.boost_spec are set, the boost conditions from both places are evaluated. If a search request matches multiple boost conditions, the final boost score is equal to the sum of the boost scores from all matched boost conditions. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|displayName|string|false|none|Required. The human readable serving config display name. Used in Retail UI. This field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
|diversityLevel|string|false|none|How much diversity to use in recommendation model results e.g. `medium-diversity` or `high-diversity`. Currently supported values: * `no-diversity` * `low-diversity` * `medium-diversity` * `high-diversity` * `auto-diversity` If not specified, we choose default based on recommendation model type. Default value: `no-diversity`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|diversityType|string|false|none|What kind of diversity to use - data driven or rule based. If unset, the server behavior defaults to RULE_BASED_DIVERSITY.|
|doNotAssociateControlIds|[string]|false|none|Condition do not associate specifications. If multiple do not associate conditions match, all matching do not associate controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|dynamicFacetSpec|[GoogleCloudRetailV2alphaSearchRequestDynamicFacetSpec](#schemagooglecloudretailv2alphasearchrequestdynamicfacetspec)|false|none|The specification for dynamically generated facets. Notice that only textual facets can be dynamically generated. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|enableCategoryFilterLevel|string|false|none|Whether to add additional category filters on the `similar-items` model. If not specified, we enable it by default. Allowed values are: * `no-category-match`: No additional filtering of original results from the model and the customer's filters. * `relaxed-category-match`: Only keep results with categories that match at least one item categories in the PredictRequests's context item. * If customer also sends filters in the PredictRequest, then the results will satisfy both conditions (user given and category match). Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|facetControlIds|[string]|false|none|Facet specifications for faceted search. If empty, no facets are returned. The ids refer to the ids of Control resources with only the Facet control set. These controls are assumed to be in the same Catalog as the ServingConfig. A maximum of 100 values are allowed. Otherwise, an INVALID_ARGUMENT error is returned. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|filterControlIds|[string]|false|none|Condition filter specifications. If a product matches multiple conditions in the specifications, filters from these specifications are all applied and combined via the AND operator. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|ignoreControlIds|[string]|false|none|Condition ignore specifications. If multiple ignore conditions match, all matching ignore controls in the list will execute. - Order does not matter. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|modelId|string|false|none|The id of the model in the same Catalog to use at serving time. Currently only RecommendationModels are supported: https://cloud.google.com/retail/recommendations-ai/docs/create-models Can be changed but only to a compatible model (e.g. others-you-may-like CTR to others-you-may-like CVR). Required when solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|name|string|false|none|Immutable. Fully qualified name `projects/*/locations/global/catalogs/*/servingConfig/*`|
|onewaySynonymsControlIds|[string]|false|none|Condition oneway synonyms specifications. If multiple oneway synonyms conditions match, all matching oneway synonyms controls in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|personalizationSpec|[GoogleCloudRetailV2alphaSearchRequestPersonalizationSpec](#schemagooglecloudretailv2alphasearchrequestpersonalizationspec)|false|none|The specification for personalization spec. Can only be set if solution_types is SOLUTION_TYPE_SEARCH. Notice that if both ServingConfig.personalization_spec and SearchRequest.personalization_spec are set. SearchRequest.personalization_spec will override ServingConfig.personalization_spec.|
|priceRerankingLevel|string|false|none|How much price ranking we want in serving results. Price reranking causes product items with a similar recommendation probability to be ordered by price, with the highest-priced items first. This setting could result in a decrease in click-through and conversion rates. Allowed values are: * `no-price-reranking` * `low-price-reranking` * `medium-price-reranking` * `high-price-reranking` If not specified, we choose default based on model type. Default value: `no-price-reranking`. Can only be set if solution_types is SOLUTION_TYPE_RECOMMENDATION.|
|redirectControlIds|[string]|false|none|Condition redirect specifications. Only the first triggered redirect action is applied, even if multiple apply. Maximum number of specifications is 1000. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|replacementControlIds|[string]|false|none|Condition replacement specifications. - Applied according to the order in the list. - A previously replaced term can not be re-replaced. - Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|
|solutionTypes|[string]|false|none|Required. Immutable. Specifies the solution types that a serving config can be associated with. Currently we support setting only one type of solution.|
|twowaySynonymsControlIds|[string]|false|none|Condition synonyms specifications. If multiple syonyms conditions match, all matching synonyms control in the list will execute. Order of controls in the list will not matter. Maximum number of specifications is 100. Can only be set if solution_types is SOLUTION_TYPE_SEARCH.|

#### Enumerated Values

|Property|Value|
|---|---|
|diversityType|DIVERSITY_TYPE_UNSPECIFIED|
|diversityType|RULE_BASED_DIVERSITY|
|diversityType|DATA_DRIVEN_DIVERSITY|
|solutionTypes|SOLUTION_TYPE_UNSPECIFIED|
|solutionTypes|SOLUTION_TYPE_RECOMMENDATION|
|solutionTypes|SOLUTION_TYPE_SEARCH|

<h2 id="tocS_GoogleCloudRetailV2alphaSetDefaultBranchRequest">GoogleCloudRetailV2alphaSetDefaultBranchRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasetdefaultbranchrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaSetDefaultBranchRequest"></a>
<a id="tocSgooglecloudretailv2alphasetdefaultbranchrequest"></a>
<a id="tocsgooglecloudretailv2alphasetdefaultbranchrequest"></a>

```json
{
  "branchId": "string",
  "force": true,
  "note": "string"
}
```

Request message to set a specified branch as new default_branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchId|string|false|none|The final component of the resource name of a branch. This field must be one of "0", "1" or "2". Otherwise, an INVALID_ARGUMENT error is returned. If there are no sufficient active products in the targeted branch and force is not set, a FAILED_PRECONDITION error is returned.|
|force|boolean|false|none|If set to true, it permits switching to a branch with branch_id even if it has no sufficient active products.|
|note|string|false|none|Some note on this request, this can be retrieved by CatalogService.GetDefaultBranch before next valid default branch set occurs. This field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.|

<h2 id="tocS_GoogleCloudRetailV2alphaSetInventoryMetadata">GoogleCloudRetailV2alphaSetInventoryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasetinventorymetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaSetInventoryMetadata"></a>
<a id="tocSgooglecloudretailv2alphasetinventorymetadata"></a>
<a id="tocsgooglecloudretailv2alphasetinventorymetadata"></a>

```json
{}
```

Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method.

<h2 id="tocS_GoogleCloudRetailV2alphaSetInventoryRequest">GoogleCloudRetailV2alphaSetInventoryRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasetinventoryrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaSetInventoryRequest"></a>
<a id="tocSgooglecloudretailv2alphasetinventoryrequest"></a>
<a id="tocsgooglecloudretailv2alphasetinventoryrequest"></a>

```json
{
  "allowMissing": true,
  "inventory": {
    "attributes": {
      "property1": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      },
      "property2": {
        "indexable": true,
        "numbers": [
          0
        ],
        "searchable": true,
        "text": [
          "string"
        ]
      }
    },
    "audience": {
      "ageGroups": [
        "string"
      ],
      "genders": [
        "string"
      ]
    },
    "availability": "AVAILABILITY_UNSPECIFIED",
    "availableQuantity": 0,
    "availableTime": "string",
    "brands": [
      "string"
    ],
    "categories": [
      "string"
    ],
    "collectionMemberIds": [
      "string"
    ],
    "colorInfo": {
      "colorFamilies": [
        "string"
      ],
      "colors": [
        "string"
      ]
    },
    "conditions": [
      "string"
    ],
    "description": "string",
    "expireTime": "string",
    "fulfillmentInfo": [
      {
        "placeIds": [
          "string"
        ],
        "type": "string"
      }
    ],
    "gtin": "string",
    "id": "string",
    "images": [
      {
        "height": 0,
        "uri": "string",
        "width": 0
      }
    ],
    "languageCode": "string",
    "localInventories": [
      {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "fulfillmentTypes": [
          "string"
        ],
        "placeId": "string",
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string",
          "priceRange": {
            "originalPrice": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            },
            "price": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          }
        }
      }
    ],
    "materials": [
      "string"
    ],
    "name": "string",
    "patterns": [
      "string"
    ],
    "priceInfo": {
      "cost": 0,
      "currencyCode": "string",
      "originalPrice": 0,
      "price": 0,
      "priceEffectiveTime": "string",
      "priceExpireTime": "string",
      "priceRange": {
        "originalPrice": {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        },
        "price": {
          "exclusiveMaximum": 0,
          "exclusiveMinimum": 0,
          "maximum": 0,
          "minimum": 0
        }
      }
    },
    "primaryProductId": "string",
    "promotions": [
      {
        "promotionId": "string"
      }
    ],
    "publishTime": "string",
    "rating": {
      "averageRating": 0,
      "ratingCount": 0,
      "ratingHistogram": [
        0
      ]
    },
    "retrievableFields": "string",
    "sizes": [
      "string"
    ],
    "tags": [
      "string"
    ],
    "title": "string",
    "ttl": "string",
    "type": "TYPE_UNSPECIFIED",
    "uri": "string",
    "variants": [
      {}
    ]
  },
  "setMask": "string",
  "setTime": "string"
}
```

Request message for ProductService.SetInventory method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowMissing|boolean|false|none|If set to true, and the Product with name Product.name is not found, the inventory update will still be processed and retained for at most 1 day until the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found.|
|inventory|[GoogleCloudRetailV2alphaProduct](#schemagooglecloudretailv2alphaproduct)|false|none|Required. The inventory information to update. The allowable fields to update are: * Product.price_info * Product.availability * Product.available_quantity * Product.fulfillment_info The updated inventory fields must be specified in SetInventoryRequest.set_mask. If SetInventoryRequest.inventory.name is empty or invalid, an INVALID_ARGUMENT error is returned. If the caller does not have permission to update the Product named in Product.name, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Product to update does not have existing inventory information, the provided inventory information will be inserted. If the Product to update has existing inventory information, the provided inventory information will be merged while respecting the last update time for each inventory field, using the provided or default value for SetInventoryRequest.set_time. The caller can replace place IDs for a subset of fulfillment types in the following ways: * Adds "fulfillment_info" in SetInventoryRequest.set_mask * Specifies only the desired fulfillment types and corresponding place IDs to update in SetInventoryRequest.inventory.fulfillment_info The caller can clear all place IDs from a subset of fulfillment types in the following ways: * Adds "fulfillment_info" in SetInventoryRequest.set_mask * Specifies only the desired fulfillment types to clear in SetInventoryRequest.inventory.fulfillment_info * Checks that only the desired fulfillment info types have empty SetInventoryRequest.inventory.fulfillment_info.place_ids The last update time is recorded for the following inventory fields: * Product.price_info * Product.availability * Product.available_quantity * Product.fulfillment_info If a full overwrite of inventory information while ignoring timestamps is needed, ProductService.UpdateProduct should be invoked instead.|
|setMask|string(google-fieldmask)|false|none|Indicates which inventory fields in the provided Product to update. At least one field must be provided. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned and the entire update will be ignored.|
|setTime|string(google-datetime)|false|none|The time when the request is issued, used to prevent out-of-order updates on inventory fields with the last update time recorded. If not provided, the internal system time will be used.|

<h2 id="tocS_GoogleCloudRetailV2alphaSetInventoryResponse">GoogleCloudRetailV2alphaSetInventoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphasetinventoryresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaSetInventoryResponse"></a>
<a id="tocSgooglecloudretailv2alphasetinventoryresponse"></a>
<a id="tocsgooglecloudretailv2alphasetinventoryresponse"></a>

```json
{}
```

Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method.

<h2 id="tocS_GoogleCloudRetailV2alphaTransformedUserEventsMetadata">GoogleCloudRetailV2alphaTransformedUserEventsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphatransformedusereventsmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaTransformedUserEventsMetadata"></a>
<a id="tocSgooglecloudretailv2alphatransformedusereventsmetadata"></a>
<a id="tocsgooglecloudretailv2alphatransformedusereventsmetadata"></a>

```json
{
  "sourceEventsCount": "string",
  "transformedEventsCount": "string"
}
```

Metadata related to transform user events operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sourceEventsCount|string(int64)|false|none|Count of entries in the source user events BigQuery table.|
|transformedEventsCount|string(int64)|false|none|Count of entries in the transformed user events BigQuery table, which could be different from the actually imported number of user events.|

<h2 id="tocS_GoogleCloudRetailV2alphaTuneModelMetadata">GoogleCloudRetailV2alphaTuneModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphatunemodelmetadata"></a>
<a id="schema_GoogleCloudRetailV2alphaTuneModelMetadata"></a>
<a id="tocSgooglecloudretailv2alphatunemodelmetadata"></a>
<a id="tocsgooglecloudretailv2alphatunemodelmetadata"></a>

```json
{
  "model": "string"
}
```

Metadata associated with a tune operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|

<h2 id="tocS_GoogleCloudRetailV2alphaTuneModelRequest">GoogleCloudRetailV2alphaTuneModelRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphatunemodelrequest"></a>
<a id="schema_GoogleCloudRetailV2alphaTuneModelRequest"></a>
<a id="tocSgooglecloudretailv2alphatunemodelrequest"></a>
<a id="tocsgooglecloudretailv2alphatunemodelrequest"></a>

```json
{}
```

Request to manually start a tuning process now (instead of waiting for the periodically scheduled tuning to happen).

<h2 id="tocS_GoogleCloudRetailV2alphaTuneModelResponse">GoogleCloudRetailV2alphaTuneModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphatunemodelresponse"></a>
<a id="schema_GoogleCloudRetailV2alphaTuneModelResponse"></a>
<a id="tocSgooglecloudretailv2alphatunemodelresponse"></a>
<a id="tocsgooglecloudretailv2alphatunemodelresponse"></a>

```json
{}
```

Response associated with a tune operation.

<h2 id="tocS_GoogleCloudRetailV2alphaUserEvent">GoogleCloudRetailV2alphaUserEvent</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphauserevent"></a>
<a id="schema_GoogleCloudRetailV2alphaUserEvent"></a>
<a id="tocSgooglecloudretailv2alphauserevent"></a>
<a id="tocsgooglecloudretailv2alphauserevent"></a>

```json
{
  "attributes": {
    "property1": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    },
    "property2": {
      "indexable": true,
      "numbers": [
        0
      ],
      "searchable": true,
      "text": [
        "string"
      ]
    }
  },
  "attributionToken": "string",
  "cartId": "string",
  "completionDetail": {
    "completionAttributionToken": "string",
    "selectedPosition": 0,
    "selectedSuggestion": "string"
  },
  "entity": "string",
  "eventTime": "string",
  "eventType": "string",
  "experimentIds": [
    "string"
  ],
  "filter": "string",
  "offset": 0,
  "orderBy": "string",
  "pageCategories": [
    "string"
  ],
  "pageViewId": "string",
  "productDetails": [
    {
      "product": {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "audience": {
          "ageGroups": [
            "string"
          ],
          "genders": [
            "string"
          ]
        },
        "availability": "AVAILABILITY_UNSPECIFIED",
        "availableQuantity": 0,
        "availableTime": "string",
        "brands": [
          "string"
        ],
        "categories": [
          "string"
        ],
        "collectionMemberIds": [
          "string"
        ],
        "colorInfo": {
          "colorFamilies": [
            "string"
          ],
          "colors": [
            "string"
          ]
        },
        "conditions": [
          "string"
        ],
        "description": "string",
        "expireTime": "string",
        "fulfillmentInfo": [
          {
            "placeIds": [
              "string"
            ],
            "type": "string"
          }
        ],
        "gtin": "string",
        "id": "string",
        "images": [
          {
            "height": 0,
            "uri": "string",
            "width": 0
          }
        ],
        "languageCode": "string",
        "localInventories": [
          {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "fulfillmentTypes": [
              "string"
            ],
            "placeId": "string",
            "priceInfo": {
              "cost": 0,
              "currencyCode": "string",
              "originalPrice": 0,
              "price": 0,
              "priceEffectiveTime": "string",
              "priceExpireTime": "string",
              "priceRange": {
                "originalPrice": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                },
                "price": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                }
              }
            }
          }
        ],
        "materials": [
          "string"
        ],
        "name": "string",
        "patterns": [
          "string"
        ],
        "priceInfo": {
          "cost": 0,
          "currencyCode": "string",
          "originalPrice": 0,
          "price": 0,
          "priceEffectiveTime": "string",
          "priceExpireTime": "string",
          "priceRange": {
            "originalPrice": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            },
            "price": {
              "exclusiveMaximum": 0,
              "exclusiveMinimum": 0,
              "maximum": 0,
              "minimum": 0
            }
          }
        },
        "primaryProductId": "string",
        "promotions": [
          {
            "promotionId": "string"
          }
        ],
        "publishTime": "string",
        "rating": {
          "averageRating": 0,
          "ratingCount": 0,
          "ratingHistogram": [
            0
          ]
        },
        "retrievableFields": "string",
        "sizes": [
          "string"
        ],
        "tags": [
          "string"
        ],
        "title": "string",
        "ttl": "string",
        "type": "TYPE_UNSPECIFIED",
        "uri": "string",
        "variants": [
          {}
        ]
      },
      "quantity": 0
    }
  ],
  "purchaseTransaction": {
    "cost": 0,
    "currencyCode": "string",
    "id": "string",
    "revenue": 0,
    "tax": 0
  },
  "referrerUri": "string",
  "searchQuery": "string",
  "sessionId": "string",
  "uri": "string",
  "userInfo": {
    "directUserRequest": true,
    "ipAddress": "string",
    "userAgent": "string",
    "userId": "string"
  },
  "visitorId": "string"
}
```

UserEvent captures all metadata information Retail API needs to know about how end users interact with customers' website.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|object|false|none|Extra user event features to include in the recommendation model. If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality. This field needs to pass all below criteria, otherwise an INVALID_ARGUMENT error is returned: * The key must be a UTF-8 encoded string with a length limit of 5,000 characters. * For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters. * For number attributes, at most 400 values are allowed. For product recommendations, an example of extra user information is traffic_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.|
|attributionToken|string|false|none|Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance. The value must be a valid PredictResponse.attribution_token for user events that are the result of PredictionService.Predict. The value must be a valid SearchResponse.attribution_token for user events that are the result of SearchService.Search. This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution_token to this field.|
|cartId|string|false|none|The ID or name of the associated shopping cart. This ID is used to associate multiple items added or present in the cart before purchase. This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events.|
|completionDetail|[GoogleCloudRetailV2alphaCompletionDetail](#schemagooglecloudretailv2alphacompletiondetail)|false|none|The main auto-completion details related to the event. This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.|
|entity|string|false|none|The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. It is recommended to set this field to get better per-entity search, completion and prediction results.|
|eventTime|string(google-datetime)|false|none|Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.|
|eventType|string|false|none|Required. User event type. Allowed values are: * `add-to-cart`: Products being added to cart. * `category-page-view`: Special pages such as sale or promotion pages viewed. * `detail-page-view`: Products detail page viewed. * `home-page-view`: Homepage viewed. * `promotion-offered`: Promotion is offered to a user. * `promotion-not-offered`: Promotion is not offered to a user. * `purchase-complete`: User finishing a purchase. * `search`: Product search. * `shopping-cart-page-view`: User viewing a shopping cart.|
|experimentIds|[string]|false|none|A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).|
|filter|string|false|none|The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered. See SearchRequest.filter for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned.|
|offset|integer(int32)|false|none|An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant). See SearchRequest.offset for definition. If this field is negative, an INVALID_ARGUMENT is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|orderBy|string|false|none|The order in which products are returned. See SearchRequest.order_by for definition and syntax. The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|pageCategories|[string]|false|none|The categories associated with a category page. To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s). Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : ["Sales > 2017 Black Friday Deals"]. Required for `category-page-view` events. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|pageViewId|string|false|none|A unique ID of a web page view. This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.|
|productDetails|[[GoogleCloudRetailV2alphaProductDetail](#schemagooglecloudretailv2alphaproductdetail)]|false|none|The main product details related to the event. This field is optional except for the following event types: * `add-to-cart` * `detail-page-view` * `purchase-complete` In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product_details is desired. The end user may have not finished browsing the whole page yet.|
|purchaseTransaction|[GoogleCloudRetailV2alphaPurchaseTransaction](#schemagooglecloudretailv2alphapurchasetransaction)|false|none|A transaction represents the entire purchase transaction. Required for `purchase-complete` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|referrerUri|string|false|none|The referrer URL of the current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.|
|searchQuery|string|false|none|The user's search query. See SearchRequest.query for definition. The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. At least one of search_query or page_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID_ARGUMENT error is returned.|
|sessionId|string|false|none|A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span. A general guideline to populate the sesion_id: 1. If user has no activity for 30 min, a new session_id should be assigned. 2. The session_id should be unique across users, suggest use uuid or add visitor_id as prefix.|
|uri|string|false|none|Complete URL (window.location.href) of the user's current page. When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.|
|userInfo|[GoogleCloudRetailV2alphaUserInfo](#schemagooglecloudretailv2alphauserinfo)|false|none|User information.|
|visitorId|string|false|none|Required. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned. The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.|

<h2 id="tocS_GoogleCloudRetailV2alphaUserEventImportSummary">GoogleCloudRetailV2alphaUserEventImportSummary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphausereventimportsummary"></a>
<a id="schema_GoogleCloudRetailV2alphaUserEventImportSummary"></a>
<a id="tocSgooglecloudretailv2alphausereventimportsummary"></a>
<a id="tocsgooglecloudretailv2alphausereventimportsummary"></a>

```json
{
  "joinedEventsCount": "string",
  "unjoinedEventsCount": "string"
}
```

A summary of import result. The UserEventImportSummary summarizes the import status for user events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|joinedEventsCount|string(int64)|false|none|Count of user events imported with complete existing catalog information.|
|unjoinedEventsCount|string(int64)|false|none|Count of user events imported, but with catalog information not found in the imported catalog.|

<h2 id="tocS_GoogleCloudRetailV2alphaUserEventInlineSource">GoogleCloudRetailV2alphaUserEventInlineSource</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphausereventinlinesource"></a>
<a id="schema_GoogleCloudRetailV2alphaUserEventInlineSource"></a>
<a id="tocSgooglecloudretailv2alphausereventinlinesource"></a>
<a id="tocsgooglecloudretailv2alphausereventinlinesource"></a>

```json
{
  "userEvents": [
    {
      "attributes": {
        "property1": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        },
        "property2": {
          "indexable": true,
          "numbers": [
            0
          ],
          "searchable": true,
          "text": [
            "string"
          ]
        }
      },
      "attributionToken": "string",
      "cartId": "string",
      "completionDetail": {
        "completionAttributionToken": "string",
        "selectedPosition": 0,
        "selectedSuggestion": "string"
      },
      "entity": "string",
      "eventTime": "string",
      "eventType": "string",
      "experimentIds": [
        "string"
      ],
      "filter": "string",
      "offset": 0,
      "orderBy": "string",
      "pageCategories": [
        "string"
      ],
      "pageViewId": "string",
      "productDetails": [
        {
          "product": {
            "attributes": {
              "property1": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              },
              "property2": {
                "indexable": true,
                "numbers": [
                  0
                ],
                "searchable": true,
                "text": [
                  "string"
                ]
              }
            },
            "audience": {
              "ageGroups": [
                "string"
              ],
              "genders": [
                "string"
              ]
            },
            "availability": "AVAILABILITY_UNSPECIFIED",
            "availableQuantity": 0,
            "availableTime": "string",
            "brands": [
              "string"
            ],
            "categories": [
              "string"
            ],
            "collectionMemberIds": [
              "string"
            ],
            "colorInfo": {
              "colorFamilies": [
                "string"
              ],
              "colors": [
                "string"
              ]
            },
            "conditions": [
              "string"
            ],
            "description": "string",
            "expireTime": "string",
            "fulfillmentInfo": [
              {
                "placeIds": [
                  "string"
                ],
                "type": "string"
              }
            ],
            "gtin": "string",
            "id": "string",
            "images": [
              {
                "height": 0,
                "uri": "string",
                "width": 0
              }
            ],
            "languageCode": "string",
            "localInventories": [
              {
                "attributes": {
                  "property1": {
                    "indexable": true,
                    "numbers": [
                      0
                    ],
                    "searchable": true,
                    "text": [
                      "string"
                    ]
                  },
                  "property2": {
                    "indexable": true,
                    "numbers": [
                      0
                    ],
                    "searchable": true,
                    "text": [
                      "string"
                    ]
                  }
                },
                "fulfillmentTypes": [
                  "string"
                ],
                "placeId": "string",
                "priceInfo": {
                  "cost": 0,
                  "currencyCode": "string",
                  "originalPrice": 0,
                  "price": 0,
                  "priceEffectiveTime": "string",
                  "priceExpireTime": "string",
                  "priceRange": {
                    "originalPrice": {
                      "exclusiveMaximum": 0,
                      "exclusiveMinimum": 0,
                      "maximum": 0,
                      "minimum": 0
                    },
                    "price": {
                      "exclusiveMaximum": 0,
                      "exclusiveMinimum": 0,
                      "maximum": 0,
                      "minimum": 0
                    }
                  }
                }
              }
            ],
            "materials": [
              "string"
            ],
            "name": "string",
            "patterns": [
              "string"
            ],
            "priceInfo": {
              "cost": 0,
              "currencyCode": "string",
              "originalPrice": 0,
              "price": 0,
              "priceEffectiveTime": "string",
              "priceExpireTime": "string",
              "priceRange": {
                "originalPrice": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                },
                "price": {
                  "exclusiveMaximum": 0,
                  "exclusiveMinimum": 0,
                  "maximum": 0,
                  "minimum": 0
                }
              }
            },
            "primaryProductId": "string",
            "promotions": [
              {
                "promotionId": "string"
              }
            ],
            "publishTime": "string",
            "rating": {
              "averageRating": 0,
              "ratingCount": 0,
              "ratingHistogram": [
                0
              ]
            },
            "retrievableFields": "string",
            "sizes": [
              "string"
            ],
            "tags": [
              "string"
            ],
            "title": "string",
            "ttl": "string",
            "type": "TYPE_UNSPECIFIED",
            "uri": "string",
            "variants": [
              {}
            ]
          },
          "quantity": 0
        }
      ],
      "purchaseTransaction": {
        "cost": 0,
        "currencyCode": "string",
        "id": "string",
        "revenue": 0,
        "tax": 0
      },
      "referrerUri": "string",
      "searchQuery": "string",
      "sessionId": "string",
      "uri": "string",
      "userInfo": {
        "directUserRequest": true,
        "ipAddress": "string",
        "userAgent": "string",
        "userId": "string"
      },
      "visitorId": "string"
    }
  ]
}
```

The inline source for the input config for ImportUserEvents method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userEvents|[[GoogleCloudRetailV2alphaUserEvent](#schemagooglecloudretailv2alphauserevent)]|false|none|Required. A list of user events to import. Recommended max of 10k items.|

<h2 id="tocS_GoogleCloudRetailV2alphaUserEventInputConfig">GoogleCloudRetailV2alphaUserEventInputConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphausereventinputconfig"></a>
<a id="schema_GoogleCloudRetailV2alphaUserEventInputConfig"></a>
<a id="tocSgooglecloudretailv2alphausereventinputconfig"></a>
<a id="tocsgooglecloudretailv2alphausereventinputconfig"></a>

```json
{
  "bigQuerySource": {
    "dataSchema": "string",
    "datasetId": "string",
    "gcsStagingDir": "string",
    "partitionDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "projectId": "string",
    "tableId": "string"
  },
  "gcsSource": {
    "dataSchema": "string",
    "inputUris": [
      "string"
    ]
  },
  "userEventInlineSource": {
    "userEvents": [
      {
        "attributes": {
          "property1": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          },
          "property2": {
            "indexable": true,
            "numbers": [
              0
            ],
            "searchable": true,
            "text": [
              "string"
            ]
          }
        },
        "attributionToken": "string",
        "cartId": "string",
        "completionDetail": {
          "completionAttributionToken": "string",
          "selectedPosition": 0,
          "selectedSuggestion": "string"
        },
        "entity": "string",
        "eventTime": "string",
        "eventType": "string",
        "experimentIds": [
          "string"
        ],
        "filter": "string",
        "offset": 0,
        "orderBy": "string",
        "pageCategories": [
          "string"
        ],
        "pageViewId": "string",
        "productDetails": [
          {
            "product": {
              "attributes": {
                "property1": {
                  "indexable": true,
                  "numbers": [
                    0
                  ],
                  "searchable": true,
                  "text": [
                    "string"
                  ]
                },
                "property2": {
                  "indexable": true,
                  "numbers": [
                    0
                  ],
                  "searchable": true,
                  "text": [
                    "string"
                  ]
                }
              },
              "audience": {
                "ageGroups": [
                  "string"
                ],
                "genders": [
                  "string"
                ]
              },
              "availability": "AVAILABILITY_UNSPECIFIED",
              "availableQuantity": 0,
              "availableTime": "string",
              "brands": [
                "string"
              ],
              "categories": [
                "string"
              ],
              "collectionMemberIds": [
                "string"
              ],
              "colorInfo": {
                "colorFamilies": [
                  "string"
                ],
                "colors": [
                  "string"
                ]
              },
              "conditions": [
                "string"
              ],
              "description": "string",
              "expireTime": "string",
              "fulfillmentInfo": [
                {
                  "placeIds": [
                    "string"
                  ],
                  "type": "string"
                }
              ],
              "gtin": "string",
              "id": "string",
              "images": [
                {
                  "height": 0,
                  "uri": "string",
                  "width": 0
                }
              ],
              "languageCode": "string",
              "localInventories": [
                {
                  "attributes": {
                    "property1": {
                      "indexable": true,
                      "numbers": [
                        0
                      ],
                      "searchable": true,
                      "text": [
                        "string"
                      ]
                    },
                    "property2": {
                      "indexable": true,
                      "numbers": [
                        0
                      ],
                      "searchable": true,
                      "text": [
                        "string"
                      ]
                    }
                  },
                  "fulfillmentTypes": [
                    "string"
                  ],
                  "placeId": "string",
                  "priceInfo": {
                    "cost": 0,
                    "currencyCode": "string",
                    "originalPrice": 0,
                    "price": 0,
                    "priceEffectiveTime": "string",
                    "priceExpireTime": "string",
                    "priceRange": {
                      "originalPrice": {
                        "exclusiveMaximum": 0,
                        "exclusiveMinimum": 0,
                        "maximum": 0,
                        "minimum": 0
                      },
                      "price": {
                        "exclusiveMaximum": 0,
                        "exclusiveMinimum": 0,
                        "maximum": 0,
                        "minimum": 0
                      }
                    }
                  }
                }
              ],
              "materials": [
                "string"
              ],
              "name": "string",
              "patterns": [
                "string"
              ],
              "priceInfo": {
                "cost": 0,
                "currencyCode": "string",
                "originalPrice": 0,
                "price": 0,
                "priceEffectiveTime": "string",
                "priceExpireTime": "string",
                "priceRange": {
                  "originalPrice": {
                    "exclusiveMaximum": 0,
                    "exclusiveMinimum": 0,
                    "maximum": 0,
                    "minimum": 0
                  },
                  "price": {
                    "exclusiveMaximum": 0,
                    "exclusiveMinimum": 0,
                    "maximum": 0,
                    "minimum": 0
                  }
                }
              },
              "primaryProductId": "string",
              "promotions": [
                {
                  "promotionId": "string"
                }
              ],
              "publishTime": "string",
              "rating": {
                "averageRating": 0,
                "ratingCount": 0,
                "ratingHistogram": [
                  0
                ]
              },
              "retrievableFields": "string",
              "sizes": [
                "string"
              ],
              "tags": [
                "string"
              ],
              "title": "string",
              "ttl": "string",
              "type": "TYPE_UNSPECIFIED",
              "uri": "string",
              "variants": [
                {}
              ]
            },
            "quantity": 0
          }
        ],
        "purchaseTransaction": {
          "cost": 0,
          "currencyCode": "string",
          "id": "string",
          "revenue": 0,
          "tax": 0
        },
        "referrerUri": "string",
        "searchQuery": "string",
        "sessionId": "string",
        "uri": "string",
        "userInfo": {
          "directUserRequest": true,
          "ipAddress": "string",
          "userAgent": "string",
          "userId": "string"
        },
        "visitorId": "string"
      }
    ]
  }
}
```

The input config source for user events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigQuerySource|[GoogleCloudRetailV2alphaBigQuerySource](#schemagooglecloudretailv2alphabigquerysource)|false|none|Required. BigQuery input source.|
|gcsSource|[GoogleCloudRetailV2alphaGcsSource](#schemagooglecloudretailv2alphagcssource)|false|none|Required. Google Cloud Storage location for the input content.|
|userEventInlineSource|[GoogleCloudRetailV2alphaUserEventInlineSource](#schemagooglecloudretailv2alphausereventinlinesource)|false|none|Required. The Inline source for the input content for UserEvents.|

<h2 id="tocS_GoogleCloudRetailV2alphaUserInfo">GoogleCloudRetailV2alphaUserInfo</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2alphauserinfo"></a>
<a id="schema_GoogleCloudRetailV2alphaUserInfo"></a>
<a id="tocSgooglecloudretailv2alphauserinfo"></a>
<a id="tocsgooglecloudretailv2alphauserinfo"></a>

```json
{
  "directUserRequest": true,
  "ipAddress": "string",
  "userAgent": "string",
  "userId": "string"
}
```

Information of an end user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directUserRequest|boolean|false|none|True if the request is made directly from the end user, in which case the ip_address and user_agent can be populated from the HTTP request. This flag should be set only if the API request is made directly from the end user such as a mobile app (and not if a gateway or a server is processing and pushing the user events). This should not be set when using the JavaScript tag in UserEventService.CollectUserEvent.|
|ipAddress|string|false|none|The end user's IP address. This field is used to extract location information for personalization. This field must be either an IPv4 address (e.g. "104.133.9.80") or an IPv6 address (e.g. "2001:0db8:85a3:0000:0000:8a2e:0370:7334"). Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when: * setting SearchRequest.user_info. * using the JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.|
|userAgent|string|false|none|User agent as included in the HTTP header. Required for getting SearchResponse.sponsored_results. The field must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID_ARGUMENT error is returned. This should not be set when using the client side event reporting with GTM or JavaScript tag in UserEventService.CollectUserEvent or if direct_user_request is set.|
|userId|string|false|none|Highly recommended for logged-in users. Unique identifier for logged-in user, such as a user name. Don't set for anonymous users. Always use a hashed value for this ID. Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID_ARGUMENT error is returned.|

<h2 id="tocS_GoogleCloudRetailV2betaAddFulfillmentPlacesMetadata">GoogleCloudRetailV2betaAddFulfillmentPlacesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaaddfulfillmentplacesmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaAddFulfillmentPlacesMetadata"></a>
<a id="tocSgooglecloudretailv2betaaddfulfillmentplacesmetadata"></a>
<a id="tocsgooglecloudretailv2betaaddfulfillmentplacesmetadata"></a>

```json
{}
```

Metadata related to the progress of the AddFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2betaAddFulfillmentPlacesResponse">GoogleCloudRetailV2betaAddFulfillmentPlacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaaddfulfillmentplacesresponse"></a>
<a id="schema_GoogleCloudRetailV2betaAddFulfillmentPlacesResponse"></a>
<a id="tocSgooglecloudretailv2betaaddfulfillmentplacesresponse"></a>
<a id="tocsgooglecloudretailv2betaaddfulfillmentplacesresponse"></a>

```json
{}
```

Response of the AddFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.AddFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2betaAddLocalInventoriesMetadata">GoogleCloudRetailV2betaAddLocalInventoriesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaaddlocalinventoriesmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaAddLocalInventoriesMetadata"></a>
<a id="tocSgooglecloudretailv2betaaddlocalinventoriesmetadata"></a>
<a id="tocsgooglecloudretailv2betaaddlocalinventoriesmetadata"></a>

```json
{}
```

Metadata related to the progress of the AddLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.AddLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2betaAddLocalInventoriesResponse">GoogleCloudRetailV2betaAddLocalInventoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaaddlocalinventoriesresponse"></a>
<a id="schema_GoogleCloudRetailV2betaAddLocalInventoriesResponse"></a>
<a id="tocSgooglecloudretailv2betaaddlocalinventoriesresponse"></a>
<a id="tocsgooglecloudretailv2betaaddlocalinventoriesresponse"></a>

```json
{}
```

Response of the ProductService.AddLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.AddLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2betaBigQueryOutputResult">GoogleCloudRetailV2betaBigQueryOutputResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betabigqueryoutputresult"></a>
<a id="schema_GoogleCloudRetailV2betaBigQueryOutputResult"></a>
<a id="tocSgooglecloudretailv2betabigqueryoutputresult"></a>
<a id="tocsgooglecloudretailv2betabigqueryoutputresult"></a>

```json
{
  "datasetId": "string",
  "tableId": "string"
}
```

A BigQuery output result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|datasetId|string|false|none|The ID of a BigQuery Dataset.|
|tableId|string|false|none|The ID of a BigQuery Table.|

<h2 id="tocS_GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata">GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betacreatemerchantcenteraccountlinkmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaCreateMerchantCenterAccountLinkMetadata"></a>
<a id="tocSgooglecloudretailv2betacreatemerchantcenteraccountlinkmetadata"></a>
<a id="tocsgooglecloudretailv2betacreatemerchantcenteraccountlinkmetadata"></a>

```json
{
  "createTime": "string",
  "updateTime": "string"
}
```

Common metadata related to the progress of the operations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRetailV2betaCreateModelMetadata">GoogleCloudRetailV2betaCreateModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betacreatemodelmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaCreateModelMetadata"></a>
<a id="tocSgooglecloudretailv2betacreatemodelmetadata"></a>
<a id="tocsgooglecloudretailv2betacreatemodelmetadata"></a>

```json
{
  "model": "string"
}
```

Metadata associated with a create operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The resource name of the model that this create applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|

<h2 id="tocS_GoogleCloudRetailV2betaExportErrorsConfig">GoogleCloudRetailV2betaExportErrorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaexporterrorsconfig"></a>
<a id="schema_GoogleCloudRetailV2betaExportErrorsConfig"></a>
<a id="tocSgooglecloudretailv2betaexporterrorsconfig"></a>
<a id="tocsgooglecloudretailv2betaexporterrorsconfig"></a>

```json
{
  "gcsPrefix": "string"
}
```

Configuration of destination for Export related errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPrefix|string|false|none|Google Cloud Storage path for import errors. This must be an empty, existing Cloud Storage bucket. Export errors will be written to a file in this bucket, one per line, as a JSON-encoded `google.rpc.Status` message.|

<h2 id="tocS_GoogleCloudRetailV2betaExportMetadata">GoogleCloudRetailV2betaExportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaexportmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaExportMetadata"></a>
<a id="tocSgooglecloudretailv2betaexportmetadata"></a>
<a id="tocsgooglecloudretailv2betaexportmetadata"></a>

```json
{
  "createTime": "string",
  "updateTime": "string"
}
```

Metadata related to the progress of the Export operation. This is returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRetailV2betaExportProductsResponse">GoogleCloudRetailV2betaExportProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaexportproductsresponse"></a>
<a id="schema_GoogleCloudRetailV2betaExportProductsResponse"></a>
<a id="tocSgooglecloudretailv2betaexportproductsresponse"></a>
<a id="tocsgooglecloudretailv2betaexportproductsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "outputResult": {
    "bigqueryResult": [
      {
        "datasetId": "string",
        "tableId": "string"
      }
    ],
    "gcsResult": [
      {
        "outputUri": "string"
      }
    ]
  }
}
```

Response of the ExportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2betaExportErrorsConfig](#schemagooglecloudretailv2betaexporterrorsconfig)|false|none|This field is never set.|
|outputResult|[GoogleCloudRetailV2betaOutputResult](#schemagooglecloudretailv2betaoutputresult)|false|none|Output result indicating where the data were exported to.|

<h2 id="tocS_GoogleCloudRetailV2betaExportUserEventsResponse">GoogleCloudRetailV2betaExportUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaexportusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2betaExportUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2betaexportusereventsresponse"></a>
<a id="tocsgooglecloudretailv2betaexportusereventsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "outputResult": {
    "bigqueryResult": [
      {
        "datasetId": "string",
        "tableId": "string"
      }
    ],
    "gcsResult": [
      {
        "outputUri": "string"
      }
    ]
  }
}
```

Response of the ExportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2betaExportErrorsConfig](#schemagooglecloudretailv2betaexporterrorsconfig)|false|none|This field is never set.|
|outputResult|[GoogleCloudRetailV2betaOutputResult](#schemagooglecloudretailv2betaoutputresult)|false|none|Output result indicating where the data were exported to.|

<h2 id="tocS_GoogleCloudRetailV2betaGcsOutputResult">GoogleCloudRetailV2betaGcsOutputResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betagcsoutputresult"></a>
<a id="schema_GoogleCloudRetailV2betaGcsOutputResult"></a>
<a id="tocSgooglecloudretailv2betagcsoutputresult"></a>
<a id="tocsgooglecloudretailv2betagcsoutputresult"></a>

```json
{
  "outputUri": "string"
}
```

A Gcs output result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|outputUri|string|false|none|The uri of Gcs output|

<h2 id="tocS_GoogleCloudRetailV2betaImportCompletionDataResponse">GoogleCloudRetailV2betaImportCompletionDataResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaimportcompletiondataresponse"></a>
<a id="schema_GoogleCloudRetailV2betaImportCompletionDataResponse"></a>
<a id="tocSgooglecloudretailv2betaimportcompletiondataresponse"></a>
<a id="tocsgooglecloudretailv2betaimportcompletiondataresponse"></a>

```json
{
  "errorSamples": [
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
  ]
}
```

Response of the ImportCompletionDataRequest. If the long running operation is done, this message is returned by the google.longrunning.Operations.response field if the operation is successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|

<h2 id="tocS_GoogleCloudRetailV2betaImportErrorsConfig">GoogleCloudRetailV2betaImportErrorsConfig</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaimporterrorsconfig"></a>
<a id="schema_GoogleCloudRetailV2betaImportErrorsConfig"></a>
<a id="tocSgooglecloudretailv2betaimporterrorsconfig"></a>
<a id="tocsgooglecloudretailv2betaimporterrorsconfig"></a>

```json
{
  "gcsPrefix": "string"
}
```

Configuration of destination for Import related errors.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gcsPrefix|string|false|none|Google Cloud Storage prefix for import errors. This must be an empty, existing Cloud Storage directory. Import errors are written to sharded files in this directory, one per line, as a JSON-encoded `google.rpc.Status` message.|

<h2 id="tocS_GoogleCloudRetailV2betaImportMetadata">GoogleCloudRetailV2betaImportMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaimportmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaImportMetadata"></a>
<a id="tocSgooglecloudretailv2betaimportmetadata"></a>
<a id="tocsgooglecloudretailv2betaimportmetadata"></a>

```json
{
  "createTime": "string",
  "failureCount": "string",
  "notificationPubsubTopic": "string",
  "requestId": "string",
  "successCount": "string",
  "updateTime": "string"
}
```

Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Operation create time.|
|failureCount|string(int64)|false|none|Count of entries that encountered errors while processing.|
|notificationPubsubTopic|string|false|none|Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is `projects/{project}/topics/{topic}`.|
|requestId|string|false|none|Deprecated. This field is never set.|
|successCount|string(int64)|false|none|Count of entries that were processed successfully.|
|updateTime|string(google-datetime)|false|none|Operation last update time. If the operation is done, this is also the finish time.|

<h2 id="tocS_GoogleCloudRetailV2betaImportProductsResponse">GoogleCloudRetailV2betaImportProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaimportproductsresponse"></a>
<a id="schema_GoogleCloudRetailV2betaImportProductsResponse"></a>
<a id="tocSgooglecloudretailv2betaimportproductsresponse"></a>
<a id="tocsgooglecloudretailv2betaimportproductsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  }
}
```

Response of the ImportProductsRequest. If the long running operation is done, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2betaImportErrorsConfig](#schemagooglecloudretailv2betaimporterrorsconfig)|false|none|Echoes the destination for the complete errors in the request if set.|

<h2 id="tocS_GoogleCloudRetailV2betaImportUserEventsResponse">GoogleCloudRetailV2betaImportUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaimportusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2betaImportUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2betaimportusereventsresponse"></a>
<a id="tocsgooglecloudretailv2betaimportusereventsresponse"></a>

```json
{
  "errorSamples": [
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
  "errorsConfig": {
    "gcsPrefix": "string"
  },
  "importSummary": {
    "joinedEventsCount": "string",
    "unjoinedEventsCount": "string"
  }
}
```

Response of the ImportUserEventsRequest. If the long running operation was successful, then this message is returned by the google.longrunning.Operations.response field if the operation was successful.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errorSamples|[[GoogleRpcStatus](#schemagooglerpcstatus)]|false|none|A sample of errors encountered while processing the request.|
|errorsConfig|[GoogleCloudRetailV2betaImportErrorsConfig](#schemagooglecloudretailv2betaimporterrorsconfig)|false|none|Echoes the destination for the complete errors if this field was set in the request.|
|importSummary|[GoogleCloudRetailV2betaUserEventImportSummary](#schemagooglecloudretailv2betausereventimportsummary)|false|none|Aggregated statistics of user event import status.|

<h2 id="tocS_GoogleCloudRetailV2betaMerchantCenterAccountLink">GoogleCloudRetailV2betaMerchantCenterAccountLink</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betamerchantcenteraccountlink"></a>
<a id="schema_GoogleCloudRetailV2betaMerchantCenterAccountLink"></a>
<a id="tocSgooglecloudretailv2betamerchantcenteraccountlink"></a>
<a id="tocsgooglecloudretailv2betamerchantcenteraccountlink"></a>

```json
{
  "branchId": "string",
  "feedFilters": [
    {
      "primaryFeedId": "string",
      "primaryFeedName": "string"
    }
  ],
  "feedLabel": "string",
  "id": "string",
  "languageCode": "string",
  "merchantCenterAccountId": "string",
  "name": "string",
  "projectId": "string",
  "state": "STATE_UNSPECIFIED"
}
```

Represents a link between a Merchant Center account and a branch. Once a link is established, products from the linked merchant center account will be streamed to the linked branch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|branchId|string|false|none|Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here. A single branch id can only have one linked merchant center account id.|
|feedFilters|[[GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilter](#schemagooglecloudretailv2betamerchantcenteraccountlinkmerchantcenterfeedfilter)]|false|none|Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.|
|feedLabel|string|false|none|The FeedLabel used to perform filtering. Note: this replaces [region_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label). Example value: `US`. Example value: `FeedLabel1`.|
|id|string|false|read-only|Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`.|
|languageCode|string|false|none|Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed. Example value: `en`.|
|merchantCenterAccountId|string(int64)|false|none|Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.|
|name|string|false|read-only|Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.|
|projectId|string|false|read-only|Output only. Google Cloud project ID.|
|state|string|false|read-only|Output only. Represents the state of the link.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|STATE_UNSPECIFIED|
|state|PENDING|
|state|ACTIVE|
|state|FAILED|

<h2 id="tocS_GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilter">GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilter</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betamerchantcenteraccountlinkmerchantcenterfeedfilter"></a>
<a id="schema_GoogleCloudRetailV2betaMerchantCenterAccountLinkMerchantCenterFeedFilter"></a>
<a id="tocSgooglecloudretailv2betamerchantcenteraccountlinkmerchantcenterfeedfilter"></a>
<a id="tocsgooglecloudretailv2betamerchantcenteraccountlinkmerchantcenterfeedfilter"></a>

```json
{
  "primaryFeedId": "string",
  "primaryFeedName": "string"
}
```

Merchant Center Feed filter criterion.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|primaryFeedId|string(int64)|false|none|Merchant Center primary feed ID.|
|primaryFeedName|string|false|none|Merchant Center primary feed name. The name is used for the display purposes only.|

<h2 id="tocS_GoogleCloudRetailV2betaModel">GoogleCloudRetailV2betaModel</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betamodel"></a>
<a id="schema_GoogleCloudRetailV2betaModel"></a>
<a id="tocSgooglecloudretailv2betamodel"></a>
<a id="tocsgooglecloudretailv2betamodel"></a>

```json
{
  "createTime": "string",
  "dataState": "DATA_STATE_UNSPECIFIED",
  "displayName": "string",
  "filteringOption": "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
  "lastTuneTime": "string",
  "name": "string",
  "optimizationObjective": "string",
  "periodicTuningState": "PERIODIC_TUNING_STATE_UNSPECIFIED",
  "servingConfigLists": [
    {
      "servingConfigIds": [
        "string"
      ]
    }
  ],
  "servingState": "SERVING_STATE_UNSPECIFIED",
  "trainingState": "TRAINING_STATE_UNSPECIFIED",
  "tuningOperation": "string",
  "type": "string",
  "updateTime": "string"
}
```

Metadata that describes the training and serving parameters of a Model. A Model can be associated with a ServingConfig and then queried through the Predict API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|read-only|Output only. Timestamp the Recommendation Model was created at.|
|dataState|string|false|read-only|Output only. The state of data requirements for this model: `DATA_OK` and `DATA_ERROR`. Recommendation model cannot be trained if the data is in `DATA_ERROR` state. Recommendation model can have `DATA_ERROR` state even if serving state is `ACTIVE`: models were trained successfully before, but cannot be refreshed because model no longer has sufficient data for training.|
|displayName|string|false|none|Required. The display name of the model. Should be human readable, used to display Recommendation Models in the Retail Cloud Console Dashboard. UTF-8 encoded string with limit of 1024 characters.|
|filteringOption|string|false|none|Optional. If `RECOMMENDATIONS_FILTERING_ENABLED`, recommendation filtering by attributes is enabled for the model.|
|lastTuneTime|string(google-datetime)|false|read-only|Output only. The timestamp when the latest successful tune finished.|
|name|string|false|none|Required. The fully qualified resource name of the model. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}` catalog_id has char limit of 50. recommendation_model_id has char limit of 40.|
|optimizationObjective|string|false|none|Optional. The optimization objective e.g. `cvr`. Currently supported values: `ctr`, `cvr`, `revenue-per-order`. If not specified, we choose default based on model type. Default depends on type of recommendation: `recommended-for-you` => `ctr` `others-you-may-like` => `ctr` `frequently-bought-together` => `revenue_per_order` This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.|
|periodicTuningState|string|false|none|Optional. The state of periodic tuning. The period we use is 3 months - to do a one-off tune earlier use the `TuneModel` method. Default value is `PERIODIC_TUNING_ENABLED`.|
|servingConfigLists|[[GoogleCloudRetailV2betaModelServingConfigList](#schemagooglecloudretailv2betamodelservingconfiglist)]|false|read-only|Output only. The list of valid serving configs associated with the PageOptimizationConfig.|
|servingState|string|false|read-only|Output only. The serving state of the model: `ACTIVE`, `NOT_ACTIVE`.|
|trainingState|string|false|none|Optional. The training state that the model is in (e.g. `TRAINING` or `PAUSED`). Since part of the cost of running the service is frequency of training - this can be used to determine when to train model in order to control cost. If not specified: the default value for `CreateModel` method is `TRAINING`. The default value for `UpdateModel` method is to keep the state the same as before.|
|tuningOperation|string|false|read-only|Output only. The tune operation associated with the model. Can be used to determine if there is an ongoing tune for this recommendation. Empty field implies no tune is goig on.|
|type|string|false|none|Required. The type of model e.g. `home-page`. Currently supported values: `recommended-for-you`, `others-you-may-like`, `frequently-bought-together`, `page-optimization`, `similar-items`, `buy-it-again`, `on-sale-items`, and `recently-viewed`(readonly value). This field together with optimization_objective describe model metadata to use to control model training and serving. See https://cloud.google.com/retail/docs/models for more details on what the model metadata control and which combination of parameters are valid. For invalid combinations of parameters (e.g. type = `frequently-bought-together` and optimization_objective = `ctr`), you receive an error 400 if you try to create/update a recommendation with this set of knobs.|
|updateTime|string(google-datetime)|false|read-only|Output only. Timestamp the Recommendation Model was last updated. E.g. if a Recommendation Model was paused - this would be the time the pause was initiated.|

#### Enumerated Values

|Property|Value|
|---|---|
|dataState|DATA_STATE_UNSPECIFIED|
|dataState|DATA_OK|
|dataState|DATA_ERROR|
|filteringOption|RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED|
|filteringOption|RECOMMENDATIONS_FILTERING_DISABLED|
|filteringOption|RECOMMENDATIONS_FILTERING_ENABLED|
|periodicTuningState|PERIODIC_TUNING_STATE_UNSPECIFIED|
|periodicTuningState|PERIODIC_TUNING_DISABLED|
|periodicTuningState|ALL_TUNING_DISABLED|
|periodicTuningState|PERIODIC_TUNING_ENABLED|
|servingState|SERVING_STATE_UNSPECIFIED|
|servingState|INACTIVE|
|servingState|ACTIVE|
|servingState|TUNED|
|trainingState|TRAINING_STATE_UNSPECIFIED|
|trainingState|PAUSED|
|trainingState|TRAINING|

<h2 id="tocS_GoogleCloudRetailV2betaModelServingConfigList">GoogleCloudRetailV2betaModelServingConfigList</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betamodelservingconfiglist"></a>
<a id="schema_GoogleCloudRetailV2betaModelServingConfigList"></a>
<a id="tocSgooglecloudretailv2betamodelservingconfiglist"></a>
<a id="tocsgooglecloudretailv2betamodelservingconfiglist"></a>

```json
{
  "servingConfigIds": [
    "string"
  ]
}
```

Represents an ordered combination of valid serving configs, which can be used for `PAGE_OPTIMIZATION` recommendations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|servingConfigIds|[string]|false|none|Optional. A set of valid serving configs that may be used for `PAGE_OPTIMIZATION`.|

<h2 id="tocS_GoogleCloudRetailV2betaOutputResult">GoogleCloudRetailV2betaOutputResult</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaoutputresult"></a>
<a id="schema_GoogleCloudRetailV2betaOutputResult"></a>
<a id="tocSgooglecloudretailv2betaoutputresult"></a>
<a id="tocsgooglecloudretailv2betaoutputresult"></a>

```json
{
  "bigqueryResult": [
    {
      "datasetId": "string",
      "tableId": "string"
    }
  ],
  "gcsResult": [
    {
      "outputUri": "string"
    }
  ]
}
```

Output result that stores the information about where the exported data is stored.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bigqueryResult|[[GoogleCloudRetailV2betaBigQueryOutputResult](#schemagooglecloudretailv2betabigqueryoutputresult)]|false|none|The BigQuery location where the result is stored.|
|gcsResult|[[GoogleCloudRetailV2betaGcsOutputResult](#schemagooglecloudretailv2betagcsoutputresult)]|false|none|The Google Cloud Storage location where the result is stored.|

<h2 id="tocS_GoogleCloudRetailV2betaPurgeMetadata">GoogleCloudRetailV2betaPurgeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betapurgemetadata"></a>
<a id="schema_GoogleCloudRetailV2betaPurgeMetadata"></a>
<a id="tocSgooglecloudretailv2betapurgemetadata"></a>
<a id="tocsgooglecloudretailv2betapurgemetadata"></a>

```json
{}
```

Metadata related to the progress of the Purge operation. This will be returned by the google.longrunning.Operation.metadata field.

<h2 id="tocS_GoogleCloudRetailV2betaPurgeUserEventsResponse">GoogleCloudRetailV2betaPurgeUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betapurgeusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2betaPurgeUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2betapurgeusereventsresponse"></a>
<a id="tocsgooglecloudretailv2betapurgeusereventsresponse"></a>

```json
{
  "purgedEventsCount": "string"
}
```

Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|purgedEventsCount|string(int64)|false|none|The total count of events purged as a result of the operation.|

<h2 id="tocS_GoogleCloudRetailV2betaRejoinUserEventsMetadata">GoogleCloudRetailV2betaRejoinUserEventsMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betarejoinusereventsmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaRejoinUserEventsMetadata"></a>
<a id="tocSgooglecloudretailv2betarejoinusereventsmetadata"></a>
<a id="tocsgooglecloudretailv2betarejoinusereventsmetadata"></a>

```json
{}
```

Metadata for `RejoinUserEvents` method.

<h2 id="tocS_GoogleCloudRetailV2betaRejoinUserEventsResponse">GoogleCloudRetailV2betaRejoinUserEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betarejoinusereventsresponse"></a>
<a id="schema_GoogleCloudRetailV2betaRejoinUserEventsResponse"></a>
<a id="tocSgooglecloudretailv2betarejoinusereventsresponse"></a>
<a id="tocsgooglecloudretailv2betarejoinusereventsresponse"></a>

```json
{
  "rejoinedUserEventsCount": "string"
}
```

Response message for `RejoinUserEvents` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|rejoinedUserEventsCount|string(int64)|false|none|Number of user events that were joined with latest product catalog.|

<h2 id="tocS_GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadata">GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaremovefulfillmentplacesmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaRemoveFulfillmentPlacesMetadata"></a>
<a id="tocSgooglecloudretailv2betaremovefulfillmentplacesmetadata"></a>
<a id="tocsgooglecloudretailv2betaremovefulfillmentplacesmetadata"></a>

```json
{}
```

Metadata related to the progress of the RemoveFulfillmentPlaces operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponse">GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaremovefulfillmentplacesresponse"></a>
<a id="schema_GoogleCloudRetailV2betaRemoveFulfillmentPlacesResponse"></a>
<a id="tocSgooglecloudretailv2betaremovefulfillmentplacesresponse"></a>
<a id="tocsgooglecloudretailv2betaremovefulfillmentplacesresponse"></a>

```json
{}
```

Response of the RemoveFulfillmentPlacesRequest. Currently empty because there is no meaningful response populated from the ProductService.RemoveFulfillmentPlaces method.

<h2 id="tocS_GoogleCloudRetailV2betaRemoveLocalInventoriesMetadata">GoogleCloudRetailV2betaRemoveLocalInventoriesMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaremovelocalinventoriesmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaRemoveLocalInventoriesMetadata"></a>
<a id="tocSgooglecloudretailv2betaremovelocalinventoriesmetadata"></a>
<a id="tocsgooglecloudretailv2betaremovelocalinventoriesmetadata"></a>

```json
{}
```

Metadata related to the progress of the RemoveLocalInventories operation. Currently empty because there is no meaningful metadata populated from the ProductService.RemoveLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2betaRemoveLocalInventoriesResponse">GoogleCloudRetailV2betaRemoveLocalInventoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betaremovelocalinventoriesresponse"></a>
<a id="schema_GoogleCloudRetailV2betaRemoveLocalInventoriesResponse"></a>
<a id="tocSgooglecloudretailv2betaremovelocalinventoriesresponse"></a>
<a id="tocsgooglecloudretailv2betaremovelocalinventoriesresponse"></a>

```json
{}
```

Response of the ProductService.RemoveLocalInventories API. Currently empty because there is no meaningful response populated from the ProductService.RemoveLocalInventories method.

<h2 id="tocS_GoogleCloudRetailV2betaSetInventoryMetadata">GoogleCloudRetailV2betaSetInventoryMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betasetinventorymetadata"></a>
<a id="schema_GoogleCloudRetailV2betaSetInventoryMetadata"></a>
<a id="tocSgooglecloudretailv2betasetinventorymetadata"></a>
<a id="tocsgooglecloudretailv2betasetinventorymetadata"></a>

```json
{}
```

Metadata related to the progress of the SetInventory operation. Currently empty because there is no meaningful metadata populated from the ProductService.SetInventory method.

<h2 id="tocS_GoogleCloudRetailV2betaSetInventoryResponse">GoogleCloudRetailV2betaSetInventoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betasetinventoryresponse"></a>
<a id="schema_GoogleCloudRetailV2betaSetInventoryResponse"></a>
<a id="tocSgooglecloudretailv2betasetinventoryresponse"></a>
<a id="tocsgooglecloudretailv2betasetinventoryresponse"></a>

```json
{}
```

Response of the SetInventoryRequest. Currently empty because there is no meaningful response populated from the ProductService.SetInventory method.

<h2 id="tocS_GoogleCloudRetailV2betaTuneModelMetadata">GoogleCloudRetailV2betaTuneModelMetadata</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betatunemodelmetadata"></a>
<a id="schema_GoogleCloudRetailV2betaTuneModelMetadata"></a>
<a id="tocSgooglecloudretailv2betatunemodelmetadata"></a>
<a id="tocsgooglecloudretailv2betatunemodelmetadata"></a>

```json
{
  "model": "string"
}
```

Metadata associated with a tune operation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model|string|false|none|The resource name of the model that this tune applies to. Format: `projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}`|

<h2 id="tocS_GoogleCloudRetailV2betaTuneModelResponse">GoogleCloudRetailV2betaTuneModelResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betatunemodelresponse"></a>
<a id="schema_GoogleCloudRetailV2betaTuneModelResponse"></a>
<a id="tocSgooglecloudretailv2betatunemodelresponse"></a>
<a id="tocsgooglecloudretailv2betatunemodelresponse"></a>

```json
{}
```

Response associated with a tune operation.

<h2 id="tocS_GoogleCloudRetailV2betaUserEventImportSummary">GoogleCloudRetailV2betaUserEventImportSummary</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudretailv2betausereventimportsummary"></a>
<a id="schema_GoogleCloudRetailV2betaUserEventImportSummary"></a>
<a id="tocSgooglecloudretailv2betausereventimportsummary"></a>
<a id="tocsgooglecloudretailv2betausereventimportsummary"></a>

```json
{
  "joinedEventsCount": "string",
  "unjoinedEventsCount": "string"
}
```

A summary of import result. The UserEventImportSummary summarizes the import status for user events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|joinedEventsCount|string(int64)|false|none|Count of user events imported with complete existing catalog information.|
|unjoinedEventsCount|string(int64)|false|none|Count of user events imported, but with catalog information not found in the imported catalog.|

<h2 id="tocS_GoogleLongrunningListOperationsResponse">GoogleLongrunningListOperationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunninglistoperationsresponse"></a>
<a id="schema_GoogleLongrunningListOperationsResponse"></a>
<a id="tocSgooglelongrunninglistoperationsresponse"></a>
<a id="tocsgooglelongrunninglistoperationsresponse"></a>

```json
{
  "nextPageToken": "string",
  "operations": [
    {
      "done": true,
      "error": {
        "code": 0,
        "details": [
          {
            "property1": null,
            "property2": null
          }
        ],
        "message": "string"
      },
      "metadata": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "response": {
        "property1": null,
        "property2": null
      }
    }
  ]
}
```

The response message for Operations.ListOperations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|The standard List next-page token.|
|operations|[[GoogleLongrunningOperation](#schemagooglelongrunningoperation)]|false|none|A list of operations that matches the specified filter in the request.|

<h2 id="tocS_GoogleLongrunningOperation">GoogleLongrunningOperation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningoperation"></a>
<a id="schema_GoogleLongrunningOperation"></a>
<a id="tocSgooglelongrunningoperation"></a>
<a id="tocsgooglelongrunningoperation"></a>

```json
{
  "done": true,
  "error": {
    "code": 0,
    "details": [
      {
        "property1": null,
        "property2": null
      }
    ],
    "message": "string"
  },
  "metadata": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "response": {
    "property1": null,
    "property2": null
  }
}
```

This resource represents a long-running operation that is the result of a network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_GoogleRpcStatus">GoogleRpcStatus</h2>
<!-- backwards compatibility -->
<a id="schemagooglerpcstatus"></a>
<a id="schema_GoogleRpcStatus"></a>
<a id="tocSgooglerpcstatus"></a>
<a id="tocsgooglerpcstatus"></a>

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

<h2 id="tocS_GoogleTypeDate">GoogleTypeDate</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypedate"></a>
<a id="schema_GoogleTypeDate"></a>
<a id="tocSgoogletypedate"></a>
<a id="tocsgoogletypedate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|
