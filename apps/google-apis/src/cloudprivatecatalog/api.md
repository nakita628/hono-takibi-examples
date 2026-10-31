<h1 id="cloud-private-catalog">Cloud Private Catalog v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Enable cloud users to discover enterprise catalogs and products in their organizations.

Base URLs:

* <a href="https://cloudprivatecatalog.googleapis.com/">https://cloudprivatecatalog.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://cloud.google.com/private-catalog/">External documentation</a>

# Authentication

- oAuth2 authentication. Oauth 2.0 implicit authentication

    - Flow: implicit
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|View and manage your data across Google Cloud Platform services|

- oAuth2 authentication. Oauth 2.0 accessCode authentication

    - Flow: authorizationCode
    - Authorization URL = [https://accounts.google.com/o/oauth2/auth](https://accounts.google.com/o/oauth2/auth)
    - Token URL = [https://accounts.google.com/o/oauth2/token](https://accounts.google.com/o/oauth2/token)

|Scope|Scope Description|
|---|---|
|https://www.googleapis.com/auth/cloud-platform|View and manage your data across Google Cloud Platform services|

<h1 id="cloud-private-catalog-organizations">organizations</h1>

## cloudprivatecatalog.organizations.catalogs.search

<a id="opIdcloudprivatecatalog.organizations.catalogs.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/catalogs:search \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}/catalogs:search`

Search Catalog resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

<h3 id="cloudprivatecatalogorganizationscatalogssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|Required. The name of the resource context. It can be in following formats:<br><br>* `projects/{project_id}`<br>* `folders/{folder_id}`<br>* `organizations/{organization_id}`|
|pageSize|query|integer|false|The maximum number of entries that are requested.|
|pageToken|query|string|false|A pagination token returned from a previous call to SearchCatalogs that<br>indicates where this listing should continue from.<br>This field is optional.|
|query|query|string|false|The query to filter the catalogs. The supported queries are:<br><br>* Get a single catalog: `name=catalogs/{catalog_id}`|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="cloudprivatecatalogorganizationscatalogssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse](#schemagooglecloudprivatecatalogv1beta1searchcatalogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalog.organizations.products.search

<a id="opIdcloudprivatecatalog.organizations.products.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/products:search \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}/products:search`

Search Product resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

<h3 id="cloudprivatecatalogorganizationsproductssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|Required. The name of the resource context. See<br>SearchCatalogsRequest.resource for details.|
|pageSize|query|integer|false|The maximum number of entries that are requested.|
|pageToken|query|string|false|A pagination token returned from a previous call to SearchProducts that<br>indicates where this listing should continue from.<br>This field is optional.|
|query|query|string|false|The query to filter the products.<br><br>The supported queries are:<br>* List products of all catalogs: empty<br>* List products under a catalog: `parent=catalogs/{catalog_id}`<br>* Get a product by name:<br>`name=catalogs/{catalog_id}/products/{product_id}`|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="cloudprivatecatalogorganizationsproductssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogV1beta1SearchProductsResponse](#schemagooglecloudprivatecatalogv1beta1searchproductsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalog.organizations.versions.search

<a id="opIdcloudprivatecatalog.organizations.versions.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/versions:search \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}/versions:search`

Search Version resources that consumers have access to, within the
scope of the consumer cloud resource hierarchy context.

<h3 id="cloudprivatecatalogorganizationsversionssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|Required. The name of the resource context. See<br>SearchCatalogsRequest.resource for details.|
|pageSize|query|integer|false|The maximum number of entries that are requested.|
|pageToken|query|string|false|A pagination token returned from a previous call to SearchVersions<br>that indicates where this listing should continue from.<br>This field is optional.|
|query|query|string|false|The query to filter the versions. Required.<br><br>The supported queries are:<br>* List versions under a product:<br>`parent=catalogs/{catalog_id}/products/{product_id}`<br>* Get a version by name:<br>`name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

<h3 id="cloudprivatecatalogorganizationsversionssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse](#schemagooglecloudprivatecatalogv1beta1searchversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudPrivatecatalogV1beta1Catalog">GoogleCloudPrivatecatalogV1beta1Catalog</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogv1beta1catalog"></a>
<a id="schema_GoogleCloudPrivatecatalogV1beta1Catalog"></a>
<a id="tocSgooglecloudprivatecatalogv1beta1catalog"></a>
<a id="tocsgooglecloudprivatecatalogv1beta1catalog"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "updateTime": "string"
}
```

The readonly representation of a catalog computed with a given resource
context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The time when the catalog was created.|
|description|string|false|none|Output only. The description of the catalog.|
|displayName|string|false|none|Output only. The descriptive name of the catalog as it appears in UIs.|
|name|string|false|none|Output only. The resource name of the target catalog, in the format of<br>`catalogs/{catalog_id}'.|
|updateTime|string(google-datetime)|false|none|Output only. The time when the catalog was last updated.|

<h2 id="tocS_GoogleCloudPrivatecatalogV1beta1Product">GoogleCloudPrivatecatalogV1beta1Product</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogv1beta1product"></a>
<a id="schema_GoogleCloudPrivatecatalogV1beta1Product"></a>
<a id="tocSgooglecloudprivatecatalogv1beta1product"></a>
<a id="tocsgooglecloudprivatecatalogv1beta1product"></a>

```json
{
  "assetType": "string",
  "createTime": "string",
  "displayMetadata": {
    "property1": null,
    "property2": null
  },
  "iconUri": "string",
  "name": "string",
  "updateTime": "string"
}
```

The readonly representation of a product computed with a given resource
context.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetType|string|false|none|Output only. The type of the product asset. It can be one of the<br>following values:<br><br>* `google.deploymentmanager.Template`<br>* `google.cloudprivatecatalog.ListingOnly`|
|createTime|string(google-datetime)|false|none|Output only. The time when the product was created.|
|displayMetadata|object|false|none|Output only. The display metadata to describe the product.<br>The JSON schema of the metadata differs by Product.asset_type.<br>When the type is `google.deploymentmanager.Template`, the schema is as<br>follows:<br><br>```<br>"$schema": http://json-schema.org/draft-04/schema#<br>type: object<br>properties:<br>  name:<br>    type: string<br>    minLength: 1<br>    maxLength: 64<br>  description:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  tagline:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  support_info:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  creator:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  documentation:<br>    type: array<br>    items:<br>      type: object<br>      properties:<br>        url:<br>          type: string<br>          pattern:<br>          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>        title:<br>          type: string<br>          minLength: 1<br>          maxLength: 64<br>        description:<br>          type: string<br>          minLength: 1<br>          maxLength: 2048<br>required:<br>- name<br>- description<br>additionalProperties: false<br><br>```<br><br>When the asset type is `google.cloudprivatecatalog.ListingOnly`, the schema<br>is as follows:<br><br>```<br>"$schema": http://json-schema.org/draft-04/schema#<br>type: object<br>properties:<br>  name:<br>    type: string<br>    minLength: 1<br>    maxLength: 64<br>  description:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  tagline:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  support_info:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  creator:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  documentation:<br>    type: array<br>    items:<br>      type: object<br>      properties:<br>        url:<br>          type: string<br>          pattern:<br>          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>        title:<br>          type: string<br>          minLength: 1<br>          maxLength: 64<br>        description:<br>          type: string<br>          minLength: 1<br>          maxLength: 2048<br>  signup_url:<br>    type: string<br>    pattern:<br>    "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>required:<br>- name<br>- description<br>- signup_url<br>additionalProperties: false<br>```|
|iconUri|string|false|none|Output only. The icon URI of the product.|
|name|string|false|none|Output only. The resource name of the target product, in the format of<br>`products/a-z*[a-z0-9]'.<br><br>A unique identifier for the product under a catalog.|
|updateTime|string(google-datetime)|false|none|Output only. The time when the product was last updated.|

<h2 id="tocS_GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse">GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogv1beta1searchcatalogsresponse"></a>
<a id="schema_GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse"></a>
<a id="tocSgooglecloudprivatecatalogv1beta1searchcatalogsresponse"></a>
<a id="tocsgooglecloudprivatecatalogv1beta1searchcatalogsresponse"></a>

```json
{
  "catalogs": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

Response message for PrivateCatalog.SearchCatalogs.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogs|[[GoogleCloudPrivatecatalogV1beta1Catalog](#schemagooglecloudprivatecatalogv1beta1catalog)]|false|none|The `Catalog`s computed from the resource context.|
|nextPageToken|string|false|none|A pagination token returned from a previous call to SearchCatalogs that<br>indicates from where listing should continue.<br>This field is optional.|

<h2 id="tocS_GoogleCloudPrivatecatalogV1beta1SearchProductsResponse">GoogleCloudPrivatecatalogV1beta1SearchProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogv1beta1searchproductsresponse"></a>
<a id="schema_GoogleCloudPrivatecatalogV1beta1SearchProductsResponse"></a>
<a id="tocSgooglecloudprivatecatalogv1beta1searchproductsresponse"></a>
<a id="tocsgooglecloudprivatecatalogv1beta1searchproductsresponse"></a>

```json
{
  "nextPageToken": "string",
  "products": [
    {
      "assetType": "string",
      "createTime": "string",
      "displayMetadata": {
        "property1": null,
        "property2": null
      },
      "iconUri": "string",
      "name": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for PrivateCatalog.SearchProducts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token returned from a previous call to SearchProducts that<br>indicates from where listing should continue.<br>This field is optional.|
|products|[[GoogleCloudPrivatecatalogV1beta1Product](#schemagooglecloudprivatecatalogv1beta1product)]|false|none|The `Product` resources computed from the resource context.|

<h2 id="tocS_GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse">GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogv1beta1searchversionsresponse"></a>
<a id="schema_GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse"></a>
<a id="tocSgooglecloudprivatecatalogv1beta1searchversionsresponse"></a>
<a id="tocsgooglecloudprivatecatalogv1beta1searchversionsresponse"></a>

```json
{
  "nextPageToken": "string",
  "versions": [
    {
      "asset": {
        "property1": null,
        "property2": null
      },
      "createTime": "string",
      "description": "string",
      "name": "string",
      "updateTime": "string"
    }
  ]
}
```

Response message for PrivateCatalog.SearchVersions.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token returned from a previous call to SearchVersions that<br>indicates from where the listing should continue.<br>This field is optional.|
|versions|[[GoogleCloudPrivatecatalogV1beta1Version](#schemagooglecloudprivatecatalogv1beta1version)]|false|none|The `Version` resources computed from the resource context.|

<h2 id="tocS_GoogleCloudPrivatecatalogV1beta1Version">GoogleCloudPrivatecatalogV1beta1Version</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogv1beta1version"></a>
<a id="schema_GoogleCloudPrivatecatalogV1beta1Version"></a>
<a id="tocSgooglecloudprivatecatalogv1beta1version"></a>
<a id="tocsgooglecloudprivatecatalogv1beta1version"></a>

```json
{
  "asset": {
    "property1": null,
    "property2": null
  },
  "createTime": "string",
  "description": "string",
  "name": "string",
  "updateTime": "string"
}
```

The consumer representation of a version which is a child resource under a
`Product` with asset data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|object|false|none|Output only. The asset which has been validated and is ready to be<br>provisioned. See<br>google.cloud.privatecatalogproducer.v1beta.Version.asset for details.|
|createTime|string(google-datetime)|false|none|Output only. The time when the version was created.|
|description|string|false|none|Output only. The user-supplied description of the version. Maximum of 256<br>characters.|
|name|string|false|none|Output only. The resource name of the version, in the format<br>`catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.<br><br>A unique identifier for the version under a product.|
|updateTime|string(google-datetime)|false|none|Output only. The time when the version was last updated.|
