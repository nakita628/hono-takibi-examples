<h1 id="cloud-private-catalog-producer">Cloud Private Catalog Producer v1beta1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Enables cloud users to manage and share enterprise catalogs intheir organizations.

Base URLs:

* <a href="https://cloudprivatecatalogproducer.googleapis.com/">https://cloudprivatecatalogproducer.googleapis.com/</a>

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

<h1 id="cloud-private-catalog-producer-operations">operations</h1>

## cloudprivatecatalogproducer.operations.list

<a id="opIdcloudprivatecatalogproducer.operations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/operations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/operations`

Lists operations that match the specified filter in the request. If the
server doesn't support this method, it returns `UNIMPLEMENTED`.

NOTE: the `name` binding allows API services to override the binding
to use different resource name schemes, such as `users/*/operations`. To
override the binding, API services can add a binding such as
`"/v1/{name=users/*}/operations"` to their service configuration.
For backwards compatibility, the default name includes the operations
collection id, however overriding users must ensure the name binding
is the parent resource, without the operations collection id.

<h3 id="cloudprivatecatalogproduceroperationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|The standard list filter.|
|name|query|string|false|The name of the operation's parent resource.|
|pageSize|query|integer|false|The standard list page size.|
|pageToken|query|string|false|The standard list page token.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproduceroperationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningListOperationsResponse](#schemagooglelongrunninglistoperationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.operations.cancel

<a id="opIdcloudprivatecatalogproducer.operations.cancel"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:cancel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:cancel`

Starts asynchronous cancellation on a long-running operation.  The server
makes a best effort to cancel the operation, but success is not
guaranteed.  If the server doesn't support this method, it returns
`google.rpc.Code.UNIMPLEMENTED`.  Clients can use
Operations.GetOperation or
other methods to check whether the cancellation succeeded or whether the
operation completed despite cancellation. On successful cancellation,
the operation is not deleted; instead, it becomes an operation with
an Operation.error value with a google.rpc.Status.code of 1,
corresponding to `Code.CANCELLED`.

> Body parameter

```json
{}
```

<h3 id="cloudprivatecatalogproduceroperationscancel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The name of the operation resource to be cancelled.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleLongrunningCancelOperationRequest](#schemagooglelongrunningcanceloperationrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproduceroperationscancel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

<h1 id="cloud-private-catalog-producer-catalogs">catalogs</h1>

## cloudprivatecatalogproducer.catalogs.list

<a id="opIdcloudprivatecatalogproducer.catalogs.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/catalogs \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/catalogs`

Lists Catalog resources that the producer has access to, within the
scope of the parent resource.

<h3 id="cloudprivatecatalogproducercatalogslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pageSize|query|integer|false|The maximum number of catalogs to return.|
|pageToken|query|string|false|A pagination token returned from a previous call to ListCatalogs<br>that indicates where this listing should continue from.<br>This field is optional.|
|parent|query|string|false|The resource name of the parent resource.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse](#schemagooglecloudprivatecatalogproducerv1beta1listcatalogsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.create

<a id="opIdcloudprivatecatalogproducer.catalogs.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/catalogs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "createTime": "string",
    "description": "string",
    "displayName": "string",
    "name": "string",
    "parent": "string",
    "updateTime": "string"
  }'
```

`POST /v1beta1/catalogs`

Creates a new Catalog resource.

> Body parameter

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "parent": "string",
  "updateTime": "string"
}
```

<h3 id="cloudprivatecatalogproducercatalogscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleCloudPrivatecatalogproducerV1beta1Catalog](#schemagooglecloudprivatecatalogproducerv1beta1catalog)|false|none|
|» createTime|body|string(google-datetime)|false|Output only. The time when the catalog was created.|
|» description|body|string|false|Required. The user-supplied description of the catalog. Maximum of 512<br>characters.|
|» displayName|body|string|false|Required. The user-supplied descriptive name of the catalog as it appears<br>in UIs. Maximum 256 characters in length.|
|» name|body|string|false|Output only. The resource name of the catalog, in the format<br>`catalogs/{catalog_id}'.<br><br>A unique identifier for the catalog, which is generated<br>by catalog service.|
|» parent|body|string|false|Required. The parent resource name of the catalog, which can't be changed<br>after a catalog is created. It can only be an organization. Values are of<br>the form `//cloudresourcemanager.googleapis.com/organizations/<id>`.<br>Maximum 256 characters in length.|
|» updateTime|body|string(google-datetime)|false|Output only. The time when the catalog was last updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.versions.get

<a id="opIdcloudprivatecatalogproducer.catalogs.products.versions.get"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{name}`

Returns the requested Version resource.

<h3 id="cloudprivatecatalogproducercatalogsproductsversionsget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the version.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductsversionsget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1Version](#schemagooglecloudprivatecatalogproducerv1beta1version)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.versions.delete

<a id="opIdcloudprivatecatalogproducer.catalogs.products.versions.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /v1beta1/{name}`

Hard deletes a Version.

<h3 id="cloudprivatecatalogproducercatalogsproductsversionsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the version.|
|force|query|boolean|false|Forces deletion of the `Catalog` and its `Association` resources.<br>If the `Catalog` is still associated with other resources and<br>force is not set to true, then the operation fails.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductsversionsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.versions.patch

<a id="opIdcloudprivatecatalogproducer.catalogs.products.versions.patch"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asset": {
      "property1": null,
      "property2": null
    },
    "createTime": "string",
    "description": "string",
    "name": "string",
    "originalAsset": {
      "property1": null,
      "property2": null
    },
    "updateTime": "string"
  }'
```

`PATCH /v1beta1/{name}`

Updates a specific Version resource.

> Body parameter

```json
{
  "asset": {
    "property1": null,
    "property2": null
  },
  "createTime": "string",
  "description": "string",
  "name": "string",
  "originalAsset": {
    "property1": null,
    "property2": null
  },
  "updateTime": "string"
}
```

<h3 id="cloudprivatecatalogproducercatalogsproductsversionspatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the version, in the format<br>`catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.<br><br>A unique identifier for the version under a product, which can't<br>be changed after the version is created. The final segment of the name must<br>between 1 and 63 characters in length.|
|updateMask|query|string|false|Field mask that controls which fields of the version should be updated.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleCloudPrivatecatalogproducerV1beta1Version](#schemagooglecloudprivatecatalogproducerv1beta1version)|false|none|
|» asset|body|object|false|Output only. The asset which has been validated and is ready to be<br>provisioned. See Version.original_asset for the schema.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» createTime|body|string(google-datetime)|false|Output only. The time when the version was created.|
|» description|body|string|false|The user-supplied description of the version. Maximum of 256 characters.|
|» name|body|string|false|Required. The resource name of the version, in the format<br>`catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.<br><br>A unique identifier for the version under a product, which can't<br>be changed after the version is created. The final segment of the name must<br>between 1 and 63 characters in length.|
|» originalAsset|body|object|false|The user-supplied asset payload. The maximum size of the payload is 2MB.<br>The JSON schema of the payload is defined as:<br><br>```<br>type: object<br>properties:<br>  mainTemplate:<br>    type: string<br>    description: The file name of the main template and name prefix of<br>    schema file. The content of the main template should be set in the<br>    imports list. The schema file name is expected to be<br>    <mainTemplate>.schema in the imports list. required: true<br>  imports:<br>    type: array<br>    description: Import template and schema file contents. Required to have<br>    both <mainTemplate> and <mainTemplate>.schema files. required: true<br>    minItems: 2<br>    items:<br>      type: object<br>      properties:<br>        name:<br>          type: string<br>        content:<br>          type: string<br>```|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» updateTime|body|string(google-datetime)|false|Output only. The time when the version was last updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductsversionspatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1Version](#schemagooglecloudprivatecatalogproducerv1beta1version)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.copy

<a id="opIdcloudprivatecatalogproducer.catalogs.products.copy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "destinationProductName": "string"
  }'
```

`POST /v1beta1/{name}:copy`

Copies a Product under another Catalog.

> Body parameter

```json
{
  "destinationProductName": "string"
}
```

<h3 id="cloudprivatecatalogproducercatalogsproductscopy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the current product that is copied from.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest](#schemagooglecloudprivatecatalogproducerv1beta1copyproductrequest)|false|none|
|» destinationProductName|body|string|false|The resource name of the destination product that is copied to.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductscopy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.undelete

<a id="opIdcloudprivatecatalogproducer.catalogs.undelete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:undelete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{}'
```

`POST /v1beta1/{name}:undelete`

Undeletes a deleted Catalog and all resources under it.

> Body parameter

```json
{}
```

<h3 id="cloudprivatecatalogproducercatalogsundelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|The resource name of the catalog.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest](#schemagooglecloudprivatecatalogproducerv1beta1undeletecatalogrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsundelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1Catalog](#schemagooglecloudprivatecatalogproducerv1beta1catalog)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.associations.list

<a id="opIdcloudprivatecatalogproducer.catalogs.associations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/associations \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/associations`

Lists all Association resources under a catalog.

<h3 id="cloudprivatecatalogproducercatalogsassociationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the `Catalog` whose `Associations` are<br>being retrieved. In the format `catalogs/<catalog>`.|
|pageSize|query|integer|false|The maximum number of catalog associations to return.|
|pageToken|query|string|false|A pagination token returned from the previous call to<br>`ListAssociations`.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsassociationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse](#schemagooglecloudprivatecatalogproducerv1beta1listassociationsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.associations.create

<a id="opIdcloudprivatecatalogproducer.catalogs.associations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/associations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "association": {
      "createTime": "string",
      "name": "string",
      "resource": "string"
    }
  }'
```

`POST /v1beta1/{parent}/associations`

Creates an Association instance under a given Catalog.

> Body parameter

```json
{
  "association": {
    "createTime": "string",
    "name": "string",
    "resource": "string"
  }
}
```

<h3 id="cloudprivatecatalogproducercatalogsassociationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The `Catalog` resource's name.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest](#schemagooglecloudprivatecatalogproducerv1beta1createassociationrequest)|false|none|
|» association|body|[GoogleCloudPrivatecatalogproducerV1beta1Association](#schemagooglecloudprivatecatalogproducerv1beta1association)|false|The user-supplied `Association` that is going to be created.<br><br>If the `resource` field is set, the<br>`privatecatalogproducer.catalogTargets.associate` permission is checked on<br>the target resource.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsassociationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1Association](#schemagooglecloudprivatecatalogproducerv1beta1association)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.list

<a id="opIdcloudprivatecatalogproducer.catalogs.products.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/products \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/products`

Lists Product resources that the producer has access to, within the
scope of the parent catalog.

<h3 id="cloudprivatecatalogproducercatalogsproductslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent resource.|
|filter|query|string|false|A filter expression used to restrict the returned results based<br>upon properties of the product.|
|pageSize|query|integer|false|The maximum number of products to return.|
|pageToken|query|string|false|A pagination token returned from a previous call to ListProducts<br>that indicates where this listing should continue from.<br>This field is optional.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse](#schemagooglecloudprivatecatalogproducerv1beta1listproductsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.create

<a id="opIdcloudprivatecatalogproducer.catalogs.products.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/products \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "assetType": "string",
    "createTime": "string",
    "displayMetadata": {
      "property1": null,
      "property2": null
    },
    "iconUri": "string",
    "name": "string",
    "updateTime": "string"
  }'
```

`POST /v1beta1/{parent}/products`

Creates a Product instance under a given Catalog.

> Body parameter

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

<h3 id="cloudprivatecatalogproducercatalogsproductscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The catalog name of the new product's parent.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleCloudPrivatecatalogproducerV1beta1Product](#schemagooglecloudprivatecatalogproducerv1beta1product)|false|none|
|» assetType|body|string|false|Required. The type of the product asset, which cannot be changed after the<br>product is created. It supports the values<br>`google.deploymentmanager.Template` and<br>`google.cloudprivatecatalog.ListingOnly`. Other values will be<br>rejected by the server. Read only after creation.<br><br>The following fields or resource types have different validation rules<br>under each `asset_type` values:<br><br>* Product.display_metadata has different validation schema for each<br>asset type value. See its comment for details.<br>* Version resource isn't allowed to be added under the<br>`google.cloudprivatecatalog.ListingOnly` type.|
|» createTime|body|string(google-datetime)|false|Output only. The time when the product was created.|
|» displayMetadata|body|object|false|The user-supplied display metadata to describe the product.<br>The JSON schema of the metadata differs by Product.asset_type.<br>When the type is `google.deploymentmanager.Template`, the schema is as<br>follows:<br><br>```<br>"$schema": http://json-schema.org/draft-04/schema#<br>type: object<br>properties:<br>  name:<br>    type: string<br>    minLength: 1<br>    maxLength: 64<br>  description:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  tagline:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  support_info:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  creator:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  documentation:<br>    type: array<br>    items:<br>      type: object<br>      properties:<br>        url:<br>          type: string<br>          pattern:<br>          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>        title:<br>          type: string<br>          minLength: 1<br>          maxLength: 64<br>        description:<br>          type: string<br>          minLength: 1<br>          maxLength: 2048<br>required:<br>- name<br>- description<br>additionalProperties: false<br><br>```<br><br>When the asset type is `google.cloudprivatecatalog.ListingOnly`, the schema<br>is as follows:<br><br>```<br>"$schema": http://json-schema.org/draft-04/schema#<br>type: object<br>properties:<br>  name:<br>    type: string<br>    minLength: 1<br>    maxLength: 64<br>  description:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  tagline:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  support_info:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  creator:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  documentation:<br>    type: array<br>    items:<br>      type: object<br>      properties:<br>        url:<br>          type: string<br>          pattern:<br>          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>        title:<br>          type: string<br>          minLength: 1<br>          maxLength: 64<br>        description:<br>          type: string<br>          minLength: 1<br>          maxLength: 2048<br>  signup_url:<br>    type: string<br>    pattern:<br>    "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>required:<br>- name<br>- description<br>- signup_url<br>additionalProperties: false<br>```|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» iconUri|body|string|false|Output only. The public accessible URI of the icon uploaded by<br>PrivateCatalogProducer.UploadIcon.<br><br>If no icon is uploaded, it will be the default icon's URI.|
|» name|body|string|false|Required. The resource name of the product in the format<br>`catalogs/{catalog_id}/products/a-z*[a-z0-9]'.<br><br>A unique identifier for the product under a catalog, which cannot<br>be changed after the product is created. The final<br>segment of the name must between 1 and 256 characters in length.|
|» updateTime|body|string(google-datetime)|false|Output only. The time when the product was last updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1Product](#schemagooglecloudprivatecatalogproducerv1beta1product)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.versions.list

<a id="opIdcloudprivatecatalogproducer.catalogs.products.versions.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/versions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{parent}/versions`

Lists Version resources that the producer has access to, within the
scope of the parent Product.

<h3 id="cloudprivatecatalogproducercatalogsproductsversionslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The resource name of the parent resource.|
|pageSize|query|integer|false|The maximum number of versions to return.|
|pageToken|query|string|false|A pagination token returned from a previous call to ListVersions<br>that indicates where this listing should continue from.<br>This field is optional.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductsversionslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse](#schemagooglecloudprivatecatalogproducerv1beta1listversionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.versions.create

<a id="opIdcloudprivatecatalogproducer.catalogs.products.versions.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/versions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "asset": {
      "property1": null,
      "property2": null
    },
    "createTime": "string",
    "description": "string",
    "name": "string",
    "originalAsset": {
      "property1": null,
      "property2": null
    },
    "updateTime": "string"
  }'
```

`POST /v1beta1/{parent}/versions`

Creates a Version instance under a given Product.

> Body parameter

```json
{
  "asset": {
    "property1": null,
    "property2": null
  },
  "createTime": "string",
  "description": "string",
  "name": "string",
  "originalAsset": {
    "property1": null,
    "property2": null
  },
  "updateTime": "string"
}
```

<h3 id="cloudprivatecatalogproducercatalogsproductsversionscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|The product name of the new version's parent.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleCloudPrivatecatalogproducerV1beta1Version](#schemagooglecloudprivatecatalogproducerv1beta1version)|false|none|
|» asset|body|object|false|Output only. The asset which has been validated and is ready to be<br>provisioned. See Version.original_asset for the schema.|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» createTime|body|string(google-datetime)|false|Output only. The time when the version was created.|
|» description|body|string|false|The user-supplied description of the version. Maximum of 256 characters.|
|» name|body|string|false|Required. The resource name of the version, in the format<br>`catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.<br><br>A unique identifier for the version under a product, which can't<br>be changed after the version is created. The final segment of the name must<br>between 1 and 63 characters in length.|
|» originalAsset|body|object|false|The user-supplied asset payload. The maximum size of the payload is 2MB.<br>The JSON schema of the payload is defined as:<br><br>```<br>type: object<br>properties:<br>  mainTemplate:<br>    type: string<br>    description: The file name of the main template and name prefix of<br>    schema file. The content of the main template should be set in the<br>    imports list. The schema file name is expected to be<br>    <mainTemplate>.schema in the imports list. required: true<br>  imports:<br>    type: array<br>    description: Import template and schema file contents. Required to have<br>    both <mainTemplate> and <mainTemplate>.schema files. required: true<br>    minItems: 2<br>    items:<br>      type: object<br>      properties:<br>        name:<br>          type: string<br>        content:<br>          type: string<br>```|
|» » **additionalProperties**|body|object|false|Properties of the object.|
|» updateTime|body|string(google-datetime)|false|Output only. The time when the version was last updated.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductsversionscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleLongrunningOperation](#schemagooglelongrunningoperation)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.products.icons.upload

<a id="opIdcloudprivatecatalogproducer.catalogs.products.icons.upload"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string/icons:upload \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "icon": "string"
  }'
```

`POST /v1beta1/{product}/icons:upload`

Creates an Icon instance under a given Product.
If Product only has a default icon, a new Icon
instance is created and associated with the given Product.
If Product already has a non-default icon, the action creates
a new Icon instance, associates the newly created
Icon with the given Product and deletes the old icon.

> Body parameter

```json
{
  "icon": "string"
}
```

<h3 id="cloudprivatecatalogproducercatalogsproductsiconsupload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|product|path|string|true|The resource name of the product.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest](#schemagooglecloudprivatecatalogproducerv1beta1uploadiconrequest)|false|none|
|» icon|body|string(byte)|false|The raw icon bytes user-supplied to be uploaded to the product. The format<br>of the icon can only be PNG or JPEG. The minimum allowed dimensions are<br>130x130 pixels and the maximum dimensions are 10000x10000 pixels.<br>Required.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsproductsiconsupload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleProtobufEmpty](#schemagoogleprotobufempty)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.getIamPolicy

<a id="opIdcloudprivatecatalogproducer.catalogs.getIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:getIamPolicy \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /v1beta1/{resource}:getIamPolicy`

Gets IAM policy for the specified Catalog.

<h3 id="cloudprivatecatalogproducercatalogsgetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being requested.<br>See the operation documentation for the appropriate value for this field.|
|options.requestedPolicyVersion|query|integer|false|Optional. The policy format version to be returned.<br><br>Valid values are 0, 1, and 3. Requests specifying an invalid value will be<br>rejected.<br><br>Requests for policies with any conditional bindings must specify version 3.<br>Policies without any conditional bindings may specify any valid value or<br>leave the field unset.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogsgetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.setIamPolicy

<a id="opIdcloudprivatecatalogproducer.catalogs.setIamPolicy"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:setIamPolicy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "policy": {
      "auditConfigs": [
        {
          "auditLogConfigs": [
            {
              "exemptedMembers": [
                "string"
              ],
              "logType": "LOG_TYPE_UNSPECIFIED"
            }
          ],
          "service": "string"
        }
      ],
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
    },
    "updateMask": "string"
  }'
```

`POST /v1beta1/{resource}:setIamPolicy`

Sets the IAM policy for the specified Catalog.

> Body parameter

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

<h3 id="cloudprivatecatalogproducercatalogssetiampolicy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy is being specified.<br>See the operation documentation for the appropriate value for this field.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleIamV1SetIamPolicyRequest](#schemagoogleiamv1setiampolicyrequest)|false|none|
|» policy|body|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|REQUIRED: The complete policy to be applied to the `resource`. The size of<br>the policy is limited to a few 10s of KB. An empty policy is a<br>valid policy but certain Cloud Platform services (such as Projects)<br>might reject them.|
|» updateMask|body|string(google-fieldmask)|false|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only<br>the fields in the mask will be modified. If no mask is provided, the<br>following default mask is used:<br>paths: "bindings, etag"<br>This field is only used by Cloud IAM.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogssetiampolicy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1Policy](#schemagoogleiamv1policy)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

## cloudprivatecatalogproducer.catalogs.testIamPermissions

<a id="opIdcloudprivatecatalogproducer.catalogs.testIamPermissions"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta1/string:testIamPermissions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "permissions": [
      "string"
    ]
  }'
```

`POST /v1beta1/{resource}:testIamPermissions`

Tests the IAM permissions for the specified Catalog.

> Body parameter

```json
{
  "permissions": [
    "string"
  ]
}
```

<h3 id="cloudprivatecatalogproducercatalogstestiampermissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|resource|path|string|true|REQUIRED: The resource for which the policy detail is being requested.<br>See the operation documentation for the appropriate value for this field.|
|alt|query|string|false|Data format for response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|access_token|query|string|false|OAuth access token.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|$.xgafv|query|string|false|V1 error format.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|callback|query|string|false|JSONP|
|body|body|[GoogleIamV1TestIamPermissionsRequest](#schemagoogleiamv1testiampermissionsrequest)|false|none|
|» permissions|body|[string]|false|The set of permissions to check for the `resource`. Permissions with<br>wildcards (such as '*' or 'storage.*') are not allowed. For more<br>information see<br>[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|alt|json|
|alt|media|
|alt|proto|
|$.xgafv|1|
|$.xgafv|2|

<h3 id="cloudprivatecatalogproducercatalogstestiampermissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIamV1TestIamPermissionsResponse](#schemagoogleiamv1testiampermissionsresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
Oauth2 ( Scopes: https://www.googleapis.com/auth/cloud-platform ) & Oauth2c ( Scopes: https://www.googleapis.com/auth/cloud-platform )
</aside>

# Schemas

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1Association">GoogleCloudPrivatecatalogproducerV1beta1Association</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1association"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1Association"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1association"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1association"></a>

```json
{
  "createTime": "string",
  "name": "string",
  "resource": "string"
}
```

An association tuple that pairs a `Catalog` to a resource
that can use the `Catalog`. After association, a
google.cloud.privatecatalog.v1beta1.Catalog becomes available to
consumers under specified Association.resource and all of its child
nodes.
Users who have the `cloudprivatecatalog.targets.get` permission on any of
the resource nodes can access the catalog and child products under the node.

For example, suppose the cloud resource hierarchy is as follows:

* organizations/example.com
  * folders/team
    * projects/test

After creating an association with `organizations/example.com`, the catalog
`catalogs/1`  is accessible from the following paths:

* organizations/example.com
* folders/team
* projects/test

Users can access them by
google.cloud.v1beta1.PrivateCatalog.SearchCatalogs action.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|The creation time of the association.|
|name|string|false|none|Output only. The resource name of the catalog association, in the format<br>`catalogs/{catalog_id}/associations/{association_id}'.<br><br>A unique identifier for the catalog association, which is<br>generated by catalog service.|
|resource|string|false|none|Required. The user-supplied fully qualified name of the `Resource`<br>associated to the `Catalog`. It supports `Organization`, `Folder`,<br>and `Project`. Values are of the form<br><br>* `//cloudresourcemanager.googleapis.com/projects/{product_number}`<br>* `//cloudresourcemanager.googleapis.com/folders/{folder_id}`<br>* `//cloudresourcemanager.googleapis.com/organizations/{organization_id}`|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1Catalog">GoogleCloudPrivatecatalogproducerV1beta1Catalog</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1catalog"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1Catalog"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1catalog"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1catalog"></a>

```json
{
  "createTime": "string",
  "description": "string",
  "displayName": "string",
  "name": "string",
  "parent": "string",
  "updateTime": "string"
}
```

The producer representation of a catalog which is a curated collection of
solutions that can be managed, controlled, and shared by cloud admins.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|createTime|string(google-datetime)|false|none|Output only. The time when the catalog was created.|
|description|string|false|none|Required. The user-supplied description of the catalog. Maximum of 512<br>characters.|
|displayName|string|false|none|Required. The user-supplied descriptive name of the catalog as it appears<br>in UIs. Maximum 256 characters in length.|
|name|string|false|none|Output only. The resource name of the catalog, in the format<br>`catalogs/{catalog_id}'.<br><br>A unique identifier for the catalog, which is generated<br>by catalog service.|
|parent|string|false|none|Required. The parent resource name of the catalog, which can't be changed<br>after a catalog is created. It can only be an organization. Values are of<br>the form `//cloudresourcemanager.googleapis.com/organizations/<id>`.<br>Maximum 256 characters in length.|
|updateTime|string(google-datetime)|false|none|Output only. The time when the catalog was last updated.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest">GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1copyproductrequest"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1CopyProductRequest"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1copyproductrequest"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1copyproductrequest"></a>

```json
{
  "destinationProductName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|destinationProductName|string|false|none|The resource name of the destination product that is copied to.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest">GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1createassociationrequest"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1CreateAssociationRequest"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1createassociationrequest"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1createassociationrequest"></a>

```json
{
  "association": {
    "createTime": "string",
    "name": "string",
    "resource": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|association|[GoogleCloudPrivatecatalogproducerV1beta1Association](#schemagooglecloudprivatecatalogproducerv1beta1association)|false|none|The user-supplied `Association` that is going to be created.<br><br>If the `resource` field is set, the<br>`privatecatalogproducer.catalogTargets.associate` permission is checked on<br>the target resource.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse">GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1listassociationsresponse"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1ListAssociationsResponse"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1listassociationsresponse"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1listassociationsresponse"></a>

```json
{
  "associations": [
    {
      "createTime": "string",
      "name": "string",
      "resource": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|associations|[[GoogleCloudPrivatecatalogproducerV1beta1Association](#schemagooglecloudprivatecatalogproducerv1beta1association)]|false|none|The returned `Association` resources from the list call.|
|nextPageToken|string|false|none|A pagination token returned from a previous call to<br>`ListAssociations` that indicates where the listing should continue from.<br>This field is optional.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse">GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1listcatalogsresponse"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1ListCatalogsResponse"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1listcatalogsresponse"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1listcatalogsresponse"></a>

```json
{
  "catalogs": [
    {
      "createTime": "string",
      "description": "string",
      "displayName": "string",
      "name": "string",
      "parent": "string",
      "updateTime": "string"
    }
  ],
  "nextPageToken": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|catalogs|[[GoogleCloudPrivatecatalogproducerV1beta1Catalog](#schemagooglecloudprivatecatalogproducerv1beta1catalog)]|false|none|The `Catalogs` returned from the list call.|
|nextPageToken|string|false|none|A pagination token returned from a previous call to ListCatalogs<br>that indicates where the listing should continue from.<br>This field is optional.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse">GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1listproductsresponse"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1ListProductsResponse"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1listproductsresponse"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1listproductsresponse"></a>

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

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token returned from a previous call to ListProducts<br>that indicates where the listing should continue from.<br>This field is optional.|
|products|[[GoogleCloudPrivatecatalogproducerV1beta1Product](#schemagooglecloudprivatecatalogproducerv1beta1product)]|false|none|The `Product` returned from the list call.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse">GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1listversionsresponse"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1ListVersionsResponse"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1listversionsresponse"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1listversionsresponse"></a>

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
      "originalAsset": {
        "property1": null,
        "property2": null
      },
      "updateTime": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|nextPageToken|string|false|none|A pagination token returned from a previous call to ListProducts<br>that indicates where the listing should continue from.<br>This field is optional.|
|versions|[[GoogleCloudPrivatecatalogproducerV1beta1Version](#schemagooglecloudprivatecatalogproducerv1beta1version)]|false|none|The `VersiVersionon` returned from the list call.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1Product">GoogleCloudPrivatecatalogproducerV1beta1Product</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1product"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1Product"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1product"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1product"></a>

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

The producer representation of a product which is a child resource of
`Catalog` with display metadata and a list of `Version` resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetType|string|false|none|Required. The type of the product asset, which cannot be changed after the<br>product is created. It supports the values<br>`google.deploymentmanager.Template` and<br>`google.cloudprivatecatalog.ListingOnly`. Other values will be<br>rejected by the server. Read only after creation.<br><br>The following fields or resource types have different validation rules<br>under each `asset_type` values:<br><br>* Product.display_metadata has different validation schema for each<br>asset type value. See its comment for details.<br>* Version resource isn't allowed to be added under the<br>`google.cloudprivatecatalog.ListingOnly` type.|
|createTime|string(google-datetime)|false|none|Output only. The time when the product was created.|
|displayMetadata|object|false|none|The user-supplied display metadata to describe the product.<br>The JSON schema of the metadata differs by Product.asset_type.<br>When the type is `google.deploymentmanager.Template`, the schema is as<br>follows:<br><br>```<br>"$schema": http://json-schema.org/draft-04/schema#<br>type: object<br>properties:<br>  name:<br>    type: string<br>    minLength: 1<br>    maxLength: 64<br>  description:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  tagline:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  support_info:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  creator:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  documentation:<br>    type: array<br>    items:<br>      type: object<br>      properties:<br>        url:<br>          type: string<br>          pattern:<br>          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>        title:<br>          type: string<br>          minLength: 1<br>          maxLength: 64<br>        description:<br>          type: string<br>          minLength: 1<br>          maxLength: 2048<br>required:<br>- name<br>- description<br>additionalProperties: false<br><br>```<br><br>When the asset type is `google.cloudprivatecatalog.ListingOnly`, the schema<br>is as follows:<br><br>```<br>"$schema": http://json-schema.org/draft-04/schema#<br>type: object<br>properties:<br>  name:<br>    type: string<br>    minLength: 1<br>    maxLength: 64<br>  description:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  tagline:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  support_info:<br>    type: string<br>    minLength: 1<br>    maxLength: 2048<br>  creator:<br>    type: string<br>    minLength: 1<br>    maxLength: 100<br>  documentation:<br>    type: array<br>    items:<br>      type: object<br>      properties:<br>        url:<br>          type: string<br>          pattern:<br>          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>        title:<br>          type: string<br>          minLength: 1<br>          maxLength: 64<br>        description:<br>          type: string<br>          minLength: 1<br>          maxLength: 2048<br>  signup_url:<br>    type: string<br>    pattern:<br>    "^(https?)://[-a-zA-Z0-9+&@#/%?=~_\|!:,.;]*[-a-zA-Z0-9+&@#/%=~_\|]"<br>required:<br>- name<br>- description<br>- signup_url<br>additionalProperties: false<br>```|
|iconUri|string|false|none|Output only. The public accessible URI of the icon uploaded by<br>PrivateCatalogProducer.UploadIcon.<br><br>If no icon is uploaded, it will be the default icon's URI.|
|name|string|false|none|Required. The resource name of the product in the format<br>`catalogs/{catalog_id}/products/a-z*[a-z0-9]'.<br><br>A unique identifier for the product under a catalog, which cannot<br>be changed after the product is created. The final<br>segment of the name must between 1 and 256 characters in length.|
|updateTime|string(google-datetime)|false|none|Output only. The time when the product was last updated.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest">GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1undeletecatalogrequest"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1UndeleteCatalogRequest"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1undeletecatalogrequest"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1undeletecatalogrequest"></a>

```json
{}
```

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest">GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1uploadiconrequest"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1UploadIconRequest"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1uploadiconrequest"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1uploadiconrequest"></a>

```json
{
  "icon": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|icon|string(byte)|false|none|The raw icon bytes user-supplied to be uploaded to the product. The format<br>of the icon can only be PNG or JPEG. The minimum allowed dimensions are<br>130x130 pixels and the maximum dimensions are 10000x10000 pixels.<br>Required.|

<h2 id="tocS_GoogleCloudPrivatecatalogproducerV1beta1Version">GoogleCloudPrivatecatalogproducerV1beta1Version</h2>
<!-- backwards compatibility -->
<a id="schemagooglecloudprivatecatalogproducerv1beta1version"></a>
<a id="schema_GoogleCloudPrivatecatalogproducerV1beta1Version"></a>
<a id="tocSgooglecloudprivatecatalogproducerv1beta1version"></a>
<a id="tocsgooglecloudprivatecatalogproducerv1beta1version"></a>

```json
{
  "asset": {
    "property1": null,
    "property2": null
  },
  "createTime": "string",
  "description": "string",
  "name": "string",
  "originalAsset": {
    "property1": null,
    "property2": null
  },
  "updateTime": "string"
}
```

The producer representation of a version, which is a child resource under a
`Product` with asset data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|asset|object|false|none|Output only. The asset which has been validated and is ready to be<br>provisioned. See Version.original_asset for the schema.|
|createTime|string(google-datetime)|false|none|Output only. The time when the version was created.|
|description|string|false|none|The user-supplied description of the version. Maximum of 256 characters.|
|name|string|false|none|Required. The resource name of the version, in the format<br>`catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.<br><br>A unique identifier for the version under a product, which can't<br>be changed after the version is created. The final segment of the name must<br>between 1 and 63 characters in length.|
|originalAsset|object|false|none|The user-supplied asset payload. The maximum size of the payload is 2MB.<br>The JSON schema of the payload is defined as:<br><br>```<br>type: object<br>properties:<br>  mainTemplate:<br>    type: string<br>    description: The file name of the main template and name prefix of<br>    schema file. The content of the main template should be set in the<br>    imports list. The schema file name is expected to be<br>    <mainTemplate>.schema in the imports list. required: true<br>  imports:<br>    type: array<br>    description: Import template and schema file contents. Required to have<br>    both <mainTemplate> and <mainTemplate>.schema files. required: true<br>    minItems: 2<br>    items:<br>      type: object<br>      properties:<br>        name:<br>          type: string<br>        content:<br>          type: string<br>```|
|updateTime|string(google-datetime)|false|none|Output only. The time when the version was last updated.|

<h2 id="tocS_GoogleIamV1AuditConfig">GoogleIamV1AuditConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditconfig"></a>
<a id="schema_GoogleIamV1AuditConfig"></a>
<a id="tocSgoogleiamv1auditconfig"></a>
<a id="tocsgoogleiamv1auditconfig"></a>

```json
{
  "auditLogConfigs": [
    {
      "exemptedMembers": [
        "string"
      ],
      "logType": "LOG_TYPE_UNSPECIFIED"
    }
  ],
  "service": "string"
}
```

Specifies the audit configuration for a service.
The configuration determines which permission types are logged, and what
identities, if any, are exempted from logging.
An AuditConfig must have one or more AuditLogConfigs.

If there are AuditConfigs for both `allServices` and a specific service,
the union of the two AuditConfigs is used for that service: the log_types
specified in each AuditConfig are enabled, and the exempted_members in each
AuditLogConfig are exempted.

Example Policy with multiple AuditConfigs:

    {
      "audit_configs": [
        {
          "service": "allServices"
          "audit_log_configs": [
            {
              "log_type": "DATA_READ",
              "exempted_members": [
                "user:jose@example.com"
              ]
            },
            {
              "log_type": "DATA_WRITE",
            },
            {
              "log_type": "ADMIN_READ",
            }
          ]
        },
        {
          "service": "sampleservice.googleapis.com"
          "audit_log_configs": [
            {
              "log_type": "DATA_READ",
            },
            {
              "log_type": "DATA_WRITE",
              "exempted_members": [
                "user:aliya@example.com"
              ]
            }
          ]
        }
      ]
    }

For sampleservice, this policy enables DATA_READ, DATA_WRITE and ADMIN_READ
logging. It also exempts jose@example.com from DATA_READ logging, and
aliya@example.com from DATA_WRITE logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditLogConfigs|[[GoogleIamV1AuditLogConfig](#schemagoogleiamv1auditlogconfig)]|false|none|The configuration for logging of each type of permission.|
|service|string|false|none|Specifies a service that will be enabled for audit logging.<br>For example, `storage.googleapis.com`, `cloudsql.googleapis.com`.<br>`allServices` is a special value that covers all services.|

<h2 id="tocS_GoogleIamV1AuditLogConfig">GoogleIamV1AuditLogConfig</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1auditlogconfig"></a>
<a id="schema_GoogleIamV1AuditLogConfig"></a>
<a id="tocSgoogleiamv1auditlogconfig"></a>
<a id="tocsgoogleiamv1auditlogconfig"></a>

```json
{
  "exemptedMembers": [
    "string"
  ],
  "logType": "LOG_TYPE_UNSPECIFIED"
}
```

Provides the configuration for logging a type of permissions.
Example:

    {
      "audit_log_configs": [
        {
          "log_type": "DATA_READ",
          "exempted_members": [
            "user:jose@example.com"
          ]
        },
        {
          "log_type": "DATA_WRITE",
        }
      ]
    }

This enables 'DATA_READ' and 'DATA_WRITE' logging, while exempting
jose@example.com from DATA_READ logging.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|exemptedMembers|[string]|false|none|Specifies the identities that do not cause logging for this type of<br>permission.<br>Follows the same format of Binding.members.|
|logType|string|false|none|The log type that this config enables.|

#### Enumerated Values

|Property|Value|
|---|---|
|logType|LOG_TYPE_UNSPECIFIED|
|logType|ADMIN_READ|
|logType|DATA_WRITE|
|logType|DATA_READ|

<h2 id="tocS_GoogleIamV1Binding">GoogleIamV1Binding</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1binding"></a>
<a id="schema_GoogleIamV1Binding"></a>
<a id="tocSgoogleiamv1binding"></a>
<a id="tocsgoogleiamv1binding"></a>

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

Associates `members` with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The condition that is associated with this binding.<br>NOTE: An unsatisfied condition will not allow user access via current<br>binding. Different bindings, including their conditions, are examined<br>independently.|
|members|[string]|false|none|Specifies the identities requesting access for a Cloud Platform resource.<br>`members` can have the following values:<br><br>* `allUsers`: A special identifier that represents anyone who is<br>   on the internet; with or without a Google account.<br><br>* `allAuthenticatedUsers`: A special identifier that represents anyone<br>   who is authenticated with a Google account or a service account.<br><br>* `user:{emailid}`: An email address that represents a specific Google<br>   account. For example, `alice@example.com` .<br><br><br>* `serviceAccount:{emailid}`: An email address that represents a service<br>   account. For example, `my-other-app@appspot.gserviceaccount.com`.<br><br>* `group:{emailid}`: An email address that represents a Google group.<br>   For example, `admins@example.com`.<br><br>* `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique<br>   identifier) representing a user that has been recently deleted. For<br>   example, `alice@example.com?uid=123456789012345678901`. If the user is<br>   recovered, this value reverts to `user:{emailid}` and the recovered user<br>   retains the role in the binding.<br><br>* `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus<br>   unique identifier) representing a service account that has been recently<br>   deleted. For example,<br>   `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`.<br>   If the service account is undeleted, this value reverts to<br>   `serviceAccount:{emailid}` and the undeleted service account retains the<br>   role in the binding.<br><br>* `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique<br>   identifier) representing a Google group that has been recently<br>   deleted. For example, `admins@example.com?uid=123456789012345678901`. If<br>   the group is recovered, this value reverts to `group:{emailid}` and the<br>   recovered group retains the role in the binding.<br><br><br>* `domain:{domain}`: The G Suite domain (primary) that represents all the    users of that domain. For example, `google.com` or `example.com`.<br><br>|
|role|string|false|none|Role that is assigned to `members`.<br>For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_GoogleIamV1Policy">GoogleIamV1Policy</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1policy"></a>
<a id="schema_GoogleIamV1Policy"></a>
<a id="tocSgoogleiamv1policy"></a>
<a id="tocsgoogleiamv1policy"></a>

```json
{
  "auditConfigs": [
    {
      "auditLogConfigs": [
        {
          "exemptedMembers": [
            "string"
          ],
          "logType": "LOG_TYPE_UNSPECIFIED"
        }
      ],
      "service": "string"
    }
  ],
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

An Identity and Access Management (IAM) policy, which specifies access
controls for Google Cloud resources.


A `Policy` is a collection of `bindings`. A `binding` binds one or more
`members` to a single `role`. Members can be user accounts, service accounts,
Google groups, and domains (such as G Suite). A `role` is a named list of
permissions; each `role` can be an IAM predefined role or a user-created
custom role.

Optionally, a `binding` can specify a `condition`, which is a logical
expression that allows access to a resource only if the expression evaluates
to `true`. A condition can add constraints based on attributes of the
request, the resource, or both.

**JSON example:**

    {
      "bindings": [
        {
          "role": "roles/resourcemanager.organizationAdmin",
          "members": [
            "user:mike@example.com",
            "group:admins@example.com",
            "domain:google.com",
            "serviceAccount:my-project-id@appspot.gserviceaccount.com"
          ]
        },
        {
          "role": "roles/resourcemanager.organizationViewer",
          "members": ["user:eve@example.com"],
          "condition": {
            "title": "expirable access",
            "description": "Does not grant access after Sep 2020",
            "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')",
          }
        }
      ],
      "etag": "BwWWja0YfJA=",
      "version": 3
    }

**YAML example:**

    bindings:
    - members:
      - user:mike@example.com
      - group:admins@example.com
      - domain:google.com
      - serviceAccount:my-project-id@appspot.gserviceaccount.com
      role: roles/resourcemanager.organizationAdmin
    - members:
      - user:eve@example.com
      role: roles/resourcemanager.organizationViewer
      condition:
        title: expirable access
        description: Does not grant access after Sep 2020
        expression: request.time < timestamp('2020-10-01T00:00:00.000Z')
    - etag: BwWWja0YfJA=
    - version: 3

For a description of IAM and its features, see the
[IAM documentation](https://cloud.google.com/iam/docs/).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auditConfigs|[[GoogleIamV1AuditConfig](#schemagoogleiamv1auditconfig)]|false|none|Specifies cloud audit logging configuration for this policy.|
|bindings|[[GoogleIamV1Binding](#schemagoogleiamv1binding)]|false|none|Associates a list of `members` to a `role`. Optionally, may specify a<br>`condition` that determines how and when the `bindings` are applied. Each<br>of the `bindings` must contain at least one member.|
|etag|string(byte)|false|none|`etag` is used for optimistic concurrency control as a way to help<br>prevent simultaneous updates of a policy from overwriting each other.<br>It is strongly suggested that systems make use of the `etag` in the<br>read-modify-write cycle to perform policy updates in order to avoid race<br>conditions: An `etag` is returned in the response to `getIamPolicy`, and<br>systems are expected to put that etag in the request to `setIamPolicy` to<br>ensure that their change will be applied to the same version of the policy.<br><br>**Important:** If you use IAM Conditions, you must include the `etag` field<br>whenever you call `setIamPolicy`. If you omit this field, then IAM allows<br>you to overwrite a version `3` policy with a version `1` policy, and all of<br>the conditions in the version `3` policy are lost.|
|version|integer(int32)|false|none|Specifies the format of the policy.<br><br>Valid values are `0`, `1`, and `3`. Requests that specify an invalid value<br>are rejected.<br><br>Any operation that affects conditional role bindings must specify version<br>`3`. This requirement applies to the following operations:<br><br>* Getting a policy that includes a conditional role binding<br>* Adding a conditional role binding to a policy<br>* Changing a conditional role binding in a policy<br>* Removing any role binding, with or without a condition, from a policy<br>  that includes conditions<br><br>**Important:** If you use IAM Conditions, you must include the `etag` field<br>whenever you call `setIamPolicy`. If you omit this field, then IAM allows<br>you to overwrite a version `3` policy with a version `1` policy, and all of<br>the conditions in the version `3` policy are lost.<br><br>If a policy does not include any conditions, operations on that policy may<br>specify any valid version or leave the field unset.|

<h2 id="tocS_GoogleIamV1SetIamPolicyRequest">GoogleIamV1SetIamPolicyRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1setiampolicyrequest"></a>
<a id="schema_GoogleIamV1SetIamPolicyRequest"></a>
<a id="tocSgoogleiamv1setiampolicyrequest"></a>
<a id="tocsgoogleiamv1setiampolicyrequest"></a>

```json
{
  "policy": {
    "auditConfigs": [
      {
        "auditLogConfigs": [
          {
            "exemptedMembers": [
              "string"
            ],
            "logType": "LOG_TYPE_UNSPECIFIED"
          }
        ],
        "service": "string"
      }
    ],
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
  },
  "updateMask": "string"
}
```

Request message for `SetIamPolicy` method.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policy|[GoogleIamV1Policy](#schemagoogleiamv1policy)|false|none|REQUIRED: The complete policy to be applied to the `resource`. The size of<br>the policy is limited to a few 10s of KB. An empty policy is a<br>valid policy but certain Cloud Platform services (such as Projects)<br>might reject them.|
|updateMask|string(google-fieldmask)|false|none|OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only<br>the fields in the mask will be modified. If no mask is provided, the<br>following default mask is used:<br>paths: "bindings, etag"<br>This field is only used by Cloud IAM.|

<h2 id="tocS_GoogleIamV1TestIamPermissionsRequest">GoogleIamV1TestIamPermissionsRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsrequest"></a>
<a id="schema_GoogleIamV1TestIamPermissionsRequest"></a>
<a id="tocSgoogleiamv1testiampermissionsrequest"></a>
<a id="tocsgoogleiamv1testiampermissionsrequest"></a>

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
|permissions|[string]|false|none|The set of permissions to check for the `resource`. Permissions with<br>wildcards (such as '*' or 'storage.*') are not allowed. For more<br>information see<br>[IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).|

<h2 id="tocS_GoogleIamV1TestIamPermissionsResponse">GoogleIamV1TestIamPermissionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleiamv1testiampermissionsresponse"></a>
<a id="schema_GoogleIamV1TestIamPermissionsResponse"></a>
<a id="tocSgoogleiamv1testiampermissionsresponse"></a>
<a id="tocsgoogleiamv1testiampermissionsresponse"></a>

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
|permissions|[string]|false|none|A subset of `TestPermissionsRequest.permissions` that the caller is<br>allowed.|

<h2 id="tocS_GoogleLongrunningCancelOperationRequest">GoogleLongrunningCancelOperationRequest</h2>
<!-- backwards compatibility -->
<a id="schemagooglelongrunningcanceloperationrequest"></a>
<a id="schema_GoogleLongrunningCancelOperationRequest"></a>
<a id="tocSgooglelongrunningcanceloperationrequest"></a>
<a id="tocsgooglelongrunningcanceloperationrequest"></a>

```json
{}
```

The request message for Operations.CancelOperation.

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

This resource represents a long-running operation that is the result of a
network API call.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|done|boolean|false|none|If the value is `false`, it means the operation is still in progress.<br>If `true`, the operation is completed, and either `error` or `response` is<br>available.|
|error|[GoogleRpcStatus](#schemagooglerpcstatus)|false|none|The error result of the operation in case of failure or cancellation.|
|metadata|object|false|none|Service-specific metadata associated with the operation.  It typically<br>contains progress information and common metadata such as create time.<br>Some services might not provide such metadata.  Any method that returns a<br>long-running operation should document the metadata type, if any.|
|name|string|false|none|The server-assigned name, which is only unique within the same service that<br>originally returns it. If you use the default HTTP mapping, the<br>`name` should be a resource name ending with `operations/{unique_id}`.|
|response|object|false|none|The normal response of the operation in case of success.  If the original<br>method returns no data on success, such as `Delete`, the response is<br>`google.protobuf.Empty`.  If the original method is standard<br>`Get`/`Create`/`Update`, the response should be the resource.  For other<br>methods, the response should have the type `XxxResponse`, where `Xxx`<br>is the original method name.  For example, if the original method name<br>is `TakeSnapshot()`, the inferred response type is<br>`TakeSnapshotResponse`.|

<h2 id="tocS_GoogleProtobufEmpty">GoogleProtobufEmpty</h2>
<!-- backwards compatibility -->
<a id="schemagoogleprotobufempty"></a>
<a id="schema_GoogleProtobufEmpty"></a>
<a id="tocSgoogleprotobufempty"></a>
<a id="tocsgoogleprotobufempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated
empty messages in your APIs. A typical example is to use it as the request
or the response type of an API method. For instance:

    service Foo {
      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
    }

The JSON representation for `Empty` is empty JSON object `{}`.

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

The `Status` type defines a logical error model that is suitable for
different programming environments, including REST APIs and RPC APIs. It is
used by [gRPC](https://github.com/grpc). Each `Status` message contains
three pieces of data: error code, error message, and error details.

You can find out more about this error model and how to work with it in the
[API Design Guide](https://cloud.google.com/apis/design/errors).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|The status code, which should be an enum value of google.rpc.Code.|
|details|[object]|false|none|A list of messages that carry the error details.  There is a common set of<br>message types for APIs to use.|
|message|string|false|none|A developer-facing error message, which should be in English. Any<br>user-facing error message should be localized and sent in the<br>google.rpc.Status.details field, or localized by the client.|

<h2 id="tocS_GoogleTypeExpr">GoogleTypeExpr</h2>
<!-- backwards compatibility -->
<a id="schemagoogletypeexpr"></a>
<a id="schema_GoogleTypeExpr"></a>
<a id="tocSgoogletypeexpr"></a>
<a id="tocsgoogletypeexpr"></a>

```json
{
  "description": "string",
  "expression": "string",
  "location": "string",
  "title": "string"
}
```

Represents an expression text. Example:

    title: "User account presence"
    description: "Determines whether the request has a user account"
    expression: "size(request.user) > 0"

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|An optional description of the expression. This is a longer text which<br>describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in<br>Common Expression Language syntax.<br><br>The application context of the containing message determines which<br>well-known feature set of CEL is supported.|
|location|string|false|none|An optional string indicating the location of the expression for error<br>reporting, e.g. a file name and a position in the file.|
|title|string|false|none|An optional title for the expression, i.e. a short string describing<br>its purpose. This can be used e.g. in UIs which allow to enter the<br>expression.|
