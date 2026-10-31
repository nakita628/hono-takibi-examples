<h1 id="tyk-gateway-api">Tyk Gateway API v5.15</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

<img src="https://tyk.io/docs/img/swagger_gateway_image.png" width="963" height="250">
<img src="https://tyk.io/docs/img/swagger_gateway_direction_image.png" width="946" height="392">

The Tyk Gateway API is the primary means for integrating your application with the Tyk API Gateway system. This API is very small, and has no granular permissions system. It is intended to be used purely for internal automation and integration.

**Warning: Under no circumstances should outside parties be granted access to this API.**

The Tyk Gateway API is capable of:

* Managing session objects (key generation).
* Managing and listing policies.
* Managing and listing API Definitions (only when not using the Tyk Dashboard).
* Hot reloads / reloading a cluster configuration.
* OAuth client creation (only when not using the Tyk Dashboard).

In order to use the Gateway API, you'll need to set the **secret** parameter in your tyk.conf file.

The shared secret you set should then be sent along as a header with each Gateway API Request in order for it to be successful:

**x-tyk-authorization: <your-secret>***
<br/>

<b>The Tyk Gateway API is subsumed by the Tyk Dashboard API in Pro installations.</b>

Base URLs:

* <a href="https://localhost:8080">https://localhost:8080</a>

Email: <a href="mailto:support@tyk.io">Tyk Technologies</a> 
Web: <a href="https://tyk.io/contact">Tyk Technologies</a> 
License: <a href="https://github.com/TykTechnologies/tyk/blob/master/LICENSE.md">Mozilla Public License Version 2.0</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **X-Tyk-Authorization**, in: header. Api key

<h1 id="tyk-gateway-api-apis">APIs</h1>

**Note: Applies only to Tyk Gateway Community Edition** <br/>

API management is very simple using the Tyk Rest API: each update only affects the underlying file, and this endpoint will only work with disk based installations, not database-backed ones.<br/>

APIs that are added this way are flushed to to disk into the app_path folder using the format: *{api-id}.json*. Updating existing APIs that use a different naming convention will cause those APIs to be added, which could subsequently lead to a loading error and crash if they use the same listen_path. <br/>

These methods only work on a single API node. If updating a cluster, it is important to ensure that all nodes are updated before initiating a reload.<br/>


## Get list of apis

<a id="opIdlistApis"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/apis`

List APIs from Tyk Gateway

> Example responses

> 200 Response

```json
[
  {
    "api_id": "b84fe1a04e5648927971c0557971565c",
    "auth": {
      "auth_header_name": "authorization"
    },
    "definition": {
      "key": "version",
      "location": "header"
    },
    "name": "Tyk Test API",
    "org_id": "664a14650619d40001f1f00f",
    "proxy": {
      "listen_path": "/tyk-api-test/",
      "strip_listen_path": true,
      "target_url": "https://httpbin.org"
    },
    "use_oauth2": true,
    "version_data": {
      "not_versioned": true,
      "versions": {
        "Default": {
          "name": "Default"
        }
      }
    }
  }
]
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="get-list-of-apis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of API definitions.|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="get-list-of-apis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[APIDefinition](#schemaapidefinition)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create an API

<a id="opIdcreateApi"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "api_id": "b84fe1a04e5648927971c0557971565c",
    "auth": {
      "auth_header_name": "authorization"
    },
    "definition": {
      "key": "version",
      "location": "header"
    },
    "name": "Tyk Test API",
    "org_id": "664a14650619d40001f1f00f",
    "proxy": {
      "listen_path": "/tyk-api-test/",
      "strip_listen_path": true,
      "target_url": "https://httpbin.org"
    },
    "use_oauth2": true,
    "version_data": {
      "not_versioned": true,
      "versions": {
        "Default": {
          "name": "Default"
        }
      }
    }
  }'
```

`POST /tyk/apis`

Create API. A single Tyk node can have its API Definitions queried, deleted and updated remotely. This functionality enables you to remotely update your Tyk definitions without having to manage the files manually.

> Body parameter

```json
{
  "api_id": "b84fe1a04e5648927971c0557971565c",
  "auth": {
    "auth_header_name": "authorization"
  },
  "definition": {
    "key": "version",
    "location": "header"
  },
  "name": "Tyk Test API",
  "org_id": "664a14650619d40001f1f00f",
  "proxy": {
    "listen_path": "/tyk-api-test/",
    "strip_listen_path": true,
    "target_url": "https://httpbin.org"
  },
  "use_oauth2": true,
  "version_data": {
    "not_versioned": true,
    "versions": {
      "Default": {
        "name": "Default"
      }
    }
  }
}
```

<h3 id="create-an-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|base_api_id|query|string|false|The base API which the new version will be linked to.|
|base_api_version_name|query|string|false|The version name of the base API while creating the first version. This doesn't have to be sent for the next versions but if it is set, it will override base API version name.|
|new_version_name|query|string|false|The version name of the created version.|
|set_default|query|boolean|false|If true, the new version is set as default version.|
|body|body|[APIDefinition](#schemaapidefinition)|false|none|
|» CORS|body|[CORSConfig](#schemacorsconfig)|false|none|
|» active|body|boolean|false|none|
|» allowed_ips|body|[string]|false|none|
|» analytics_plugin|body|[AnalyticsPluginConfig](#schemaanalyticspluginconfig)|false|none|
|» api_id|body|string|false|none|
|» auth|body|[AuthConfig](#schemaauthconfig)|false|none|
|» auth_configs|body|object \| null|false|none|
|» » **additionalProperties**|body|[AuthConfig](#schemaauthconfig)|false|none|
|» auth_provider|body|[AuthProviderMeta](#schemaauthprovidermeta)|false|none|
|» base_identity_provided_by|body|string|false|none|
|» basic_auth|body|object|false|none|
|» » body_password_regexp|body|string|false|none|
|» » body_user_regexp|body|string|false|none|
|» » cache_ttl|body|integer|false|none|
|» » disable_caching|body|boolean|false|none|
|» » extract_from_body|body|boolean|false|none|
|» blacklisted_ips|body|[string]|false|none|
|» cache_options|body|[CacheOptions](#schemacacheoptions)|false|none|
|» certificate_pinning_disabled|body|boolean|false|none|
|» certificates|body|[string]|false|none|
|» client_certificates|body|[string]|false|none|
|» config_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» config_data_disabled|body|boolean|false|none|
|» custom_middleware|body|[MiddlewareSection](#schemamiddlewaresection)|false|none|
|» custom_middleware_bundle|body|string|false|none|
|» custom_middleware_bundle_disabled|body|boolean|false|none|
|» custom_plugin_auth_enabled|body|boolean|false|none|
|» definition|body|[VersionDefinition](#schemaversiondefinition)|false|none|
|» detailed_tracing|body|boolean|false|none|
|» disable_quota|body|boolean|false|none|
|» disable_rate_limit|body|boolean|false|none|
|» do_not_track|body|boolean|false|none|
|» domain|body|string|false|none|
|» domain_disabled|body|boolean|false|none|
|» dont_set_quota_on_create|body|boolean|false|none|
|» enable_batch_request_support|body|boolean|false|none|
|» enable_context_vars|body|boolean|false|none|
|» enable_coprocess_auth|body|boolean|false|none|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_ip_blacklisting|body|boolean|false|none|
|» enable_ip_whitelisting|body|boolean|false|none|
|» enable_jwt|body|boolean|false|none|
|» enable_proxy_protocol|body|boolean|false|none|
|» enable_signature_checking|body|boolean|false|none|
|» event_handlers|body|[EventHandlerMetaConfig](#schemaeventhandlermetaconfig)|false|none|
|» expiration|body|string|false|none|
|» expire_analytics_after|body|integer|false|none|
|» external_oauth|body|[ExternalOAuth](#schemaexternaloauth)|false|none|
|» global_rate_limit|body|[GlobalRateLimit](#schemaglobalratelimit)|false|none|
|» graphql|body|[GraphQLConfig](#schemagraphqlconfig)|false|none|
|» hmac_allowed_algorithms|body|[string]|false|none|
|» hmac_allowed_clock_skew|body|number|false|none|
|» id|body|string|false|none|
|» idp_client_id_mapping_disabled|body|boolean|false|none|
|» internal|body|boolean|false|none|
|» is_oas|body|boolean|false|none|
|» jwt_client_base_field|body|string|false|none|
|» jwt_default_policies|body|[string]|false|none|
|» jwt_expires_at_validation_skew|body|integer|false|none|
|» jwt_identity_base_field|body|string|false|none|
|» jwt_issued_at_validation_skew|body|integer|false|none|
|» jwt_not_before_validation_skew|body|integer|false|none|
|» jwt_policy_field_name|body|string|false|none|
|» jwt_scope_claim_name|body|string|false|none|
|» jwt_scope_to_policy_mapping|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» jwt_signing_method|body|string|false|none|
|» jwt_skip_kid|body|boolean|false|none|
|» jwt_source|body|string|false|none|
|» listen_port|body|integer|false|none|
|» name|body|string|false|none|
|» notifications|body|[NotificationsManager](#schemanotificationsmanager)|false|none|
|» oauth_meta|body|object|false|none|
|» » allowed_access_types|body|[string]|false|none|
|» » allowed_authorize_types|body|[string]|false|none|
|» » auth_login_redirect|body|string|false|none|
|» openid_options|body|[OpenIDOptions](#schemaopenidoptions)|false|none|
|» org_id|body|string|false|none|
|» pinned_public_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» protocol|body|string|false|none|
|» proxy|body|[ProxyConfig](#schemaproxyconfig)|false|none|
|» request_signing|body|[RequestSigningMeta](#schemarequestsigningmeta)|false|none|
|» response_processors|body|[[ResponseProcessor](#schemaresponseprocessor)]|false|none|
|» scopes|body|[Scopes](#schemascopes)|false|none|
|» session_lifetime|body|integer|false|none|
|» session_lifetime_respects_key_expiration|body|boolean|false|none|
|» session_provider|body|[SessionProviderMeta](#schemasessionprovidermeta)|false|none|
|» slug|body|string|false|none|
|» strip_auth_data|body|boolean|false|none|
|» tag_headers|body|[string]|false|none|
|» tags|body|[string]|false|none|
|» tags_disabled|body|boolean|false|none|
|» upstream_certificates|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» upstream_certificates_disabled|body|boolean|false|none|
|» uptime_tests|body|[UptimeTests](#schemauptimetests)|false|none|
|» use_basic_auth|body|boolean|false|none|
|» use_go_plugin_auth|body|boolean|false|none|
|» use_keyless|body|boolean|false|none|
|» use_mutual_tls_auth|body|boolean|false|none|
|» use_oauth2|body|boolean|false|none|
|» use_openid|body|boolean|false|none|
|» use_standard_auth|body|boolean|false|none|
|» version_data|body|[VersionData](#schemaversiondata)|false|none|
|» error_overrides|body|object \| null|false|none|
|» » **additionalProperties**|body|[[ErrorOverride](#schemaerroroverride)]|false|none|
|» error_overrides_disabled|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "b84fe1a04e5648927971c0557971565c",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "file object creation failed, write error",
  "status": "error"
}
```

<h3 id="create-an-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API created.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get API definition with it's ID.

<a id="opIdgetApi"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/keyless \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/apis/{apiID}`

Get API definition from Tyk Gateway.

<h3 id="get-api-definition-with-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API ID.|

> Example responses

> 200 Response

```json
{
  "api_id": "b84fe1a04e5648927971c0557971565c",
  "auth": {
    "auth_header_name": "authorization"
  },
  "definition": {
    "key": "version",
    "location": "header"
  },
  "name": "Tyk Test API",
  "org_id": "664a14650619d40001f1f00f",
  "proxy": {
    "listen_path": "/tyk-api-test/",
    "strip_listen_path": true,
    "target_url": "https://httpbin.org"
  },
  "use_oauth2": true,
  "version_data": {
    "not_versioned": true,
    "versions": {
      "Default": {
        "name": "Default"
      }
    }
  }
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found.",
  "status": "error"
}
```

<h3 id="get-api-definition-with-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API definition.|[APIDefinition](#schemaapidefinition)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found.|[ApiStatusMessage](#schemaapistatusmessage)|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-tyk-base-api-id|string||ID of the base API if the requested API is a version.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Updating an API definition with its ID.

<a id="opIdupdateApi"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/1bd5c61b0e694082902cf15ddcc9e6a7 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "api_id": "b84fe1a04e5648927971c0557971565c",
    "auth": {
      "auth_header_name": "authorization"
    },
    "definition": {
      "key": "version",
      "location": "header"
    },
    "name": "Update the API name sample",
    "org_id": "664a14650619d40001f1f00f",
    "proxy": {
      "listen_path": "/update-listen-path",
      "strip_listen_path": true,
      "target_url": "https://tyk.io/api"
    },
    "use_oauth2": true,
    "version_data": {
      "not_versioned": true,
      "versions": {
        "Default": {
          "name": "Default"
        }
      }
    }
  }'
```

`PUT /tyk/apis/{apiID}`

Updating an API definition uses the same signature and object as a `POST`, however it will first ensure that the API ID that is being updated is the same as the one in the object being `PUT`.

Updating will completely replace the file descriptor and will not change an API Definition that has already been loaded, the hot-reload endpoint will need to be called to push the new definition to live.

> Body parameter

```json
{
  "api_id": "b84fe1a04e5648927971c0557971565c",
  "auth": {
    "auth_header_name": "authorization"
  },
  "definition": {
    "key": "version",
    "location": "header"
  },
  "name": "Update the API name sample",
  "org_id": "664a14650619d40001f1f00f",
  "proxy": {
    "listen_path": "/update-listen-path",
    "strip_listen_path": true,
    "target_url": "https://tyk.io/api"
  },
  "use_oauth2": true,
  "version_data": {
    "not_versioned": true,
    "versions": {
      "Default": {
        "name": "Default"
      }
    }
  }
}
```

<h3 id="updating-an-api-definition-with-its-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API ID.|
|body|body|[APIDefinition](#schemaapidefinition)|false|none|
|» CORS|body|[CORSConfig](#schemacorsconfig)|false|none|
|» active|body|boolean|false|none|
|» allowed_ips|body|[string]|false|none|
|» analytics_plugin|body|[AnalyticsPluginConfig](#schemaanalyticspluginconfig)|false|none|
|» api_id|body|string|false|none|
|» auth|body|[AuthConfig](#schemaauthconfig)|false|none|
|» auth_configs|body|object \| null|false|none|
|» » **additionalProperties**|body|[AuthConfig](#schemaauthconfig)|false|none|
|» auth_provider|body|[AuthProviderMeta](#schemaauthprovidermeta)|false|none|
|» base_identity_provided_by|body|string|false|none|
|» basic_auth|body|object|false|none|
|» » body_password_regexp|body|string|false|none|
|» » body_user_regexp|body|string|false|none|
|» » cache_ttl|body|integer|false|none|
|» » disable_caching|body|boolean|false|none|
|» » extract_from_body|body|boolean|false|none|
|» blacklisted_ips|body|[string]|false|none|
|» cache_options|body|[CacheOptions](#schemacacheoptions)|false|none|
|» certificate_pinning_disabled|body|boolean|false|none|
|» certificates|body|[string]|false|none|
|» client_certificates|body|[string]|false|none|
|» config_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» config_data_disabled|body|boolean|false|none|
|» custom_middleware|body|[MiddlewareSection](#schemamiddlewaresection)|false|none|
|» custom_middleware_bundle|body|string|false|none|
|» custom_middleware_bundle_disabled|body|boolean|false|none|
|» custom_plugin_auth_enabled|body|boolean|false|none|
|» definition|body|[VersionDefinition](#schemaversiondefinition)|false|none|
|» detailed_tracing|body|boolean|false|none|
|» disable_quota|body|boolean|false|none|
|» disable_rate_limit|body|boolean|false|none|
|» do_not_track|body|boolean|false|none|
|» domain|body|string|false|none|
|» domain_disabled|body|boolean|false|none|
|» dont_set_quota_on_create|body|boolean|false|none|
|» enable_batch_request_support|body|boolean|false|none|
|» enable_context_vars|body|boolean|false|none|
|» enable_coprocess_auth|body|boolean|false|none|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_ip_blacklisting|body|boolean|false|none|
|» enable_ip_whitelisting|body|boolean|false|none|
|» enable_jwt|body|boolean|false|none|
|» enable_proxy_protocol|body|boolean|false|none|
|» enable_signature_checking|body|boolean|false|none|
|» event_handlers|body|[EventHandlerMetaConfig](#schemaeventhandlermetaconfig)|false|none|
|» expiration|body|string|false|none|
|» expire_analytics_after|body|integer|false|none|
|» external_oauth|body|[ExternalOAuth](#schemaexternaloauth)|false|none|
|» global_rate_limit|body|[GlobalRateLimit](#schemaglobalratelimit)|false|none|
|» graphql|body|[GraphQLConfig](#schemagraphqlconfig)|false|none|
|» hmac_allowed_algorithms|body|[string]|false|none|
|» hmac_allowed_clock_skew|body|number|false|none|
|» id|body|string|false|none|
|» idp_client_id_mapping_disabled|body|boolean|false|none|
|» internal|body|boolean|false|none|
|» is_oas|body|boolean|false|none|
|» jwt_client_base_field|body|string|false|none|
|» jwt_default_policies|body|[string]|false|none|
|» jwt_expires_at_validation_skew|body|integer|false|none|
|» jwt_identity_base_field|body|string|false|none|
|» jwt_issued_at_validation_skew|body|integer|false|none|
|» jwt_not_before_validation_skew|body|integer|false|none|
|» jwt_policy_field_name|body|string|false|none|
|» jwt_scope_claim_name|body|string|false|none|
|» jwt_scope_to_policy_mapping|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» jwt_signing_method|body|string|false|none|
|» jwt_skip_kid|body|boolean|false|none|
|» jwt_source|body|string|false|none|
|» listen_port|body|integer|false|none|
|» name|body|string|false|none|
|» notifications|body|[NotificationsManager](#schemanotificationsmanager)|false|none|
|» oauth_meta|body|object|false|none|
|» » allowed_access_types|body|[string]|false|none|
|» » allowed_authorize_types|body|[string]|false|none|
|» » auth_login_redirect|body|string|false|none|
|» openid_options|body|[OpenIDOptions](#schemaopenidoptions)|false|none|
|» org_id|body|string|false|none|
|» pinned_public_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» protocol|body|string|false|none|
|» proxy|body|[ProxyConfig](#schemaproxyconfig)|false|none|
|» request_signing|body|[RequestSigningMeta](#schemarequestsigningmeta)|false|none|
|» response_processors|body|[[ResponseProcessor](#schemaresponseprocessor)]|false|none|
|» scopes|body|[Scopes](#schemascopes)|false|none|
|» session_lifetime|body|integer|false|none|
|» session_lifetime_respects_key_expiration|body|boolean|false|none|
|» session_provider|body|[SessionProviderMeta](#schemasessionprovidermeta)|false|none|
|» slug|body|string|false|none|
|» strip_auth_data|body|boolean|false|none|
|» tag_headers|body|[string]|false|none|
|» tags|body|[string]|false|none|
|» tags_disabled|body|boolean|false|none|
|» upstream_certificates|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» upstream_certificates_disabled|body|boolean|false|none|
|» uptime_tests|body|[UptimeTests](#schemauptimetests)|false|none|
|» use_basic_auth|body|boolean|false|none|
|» use_go_plugin_auth|body|boolean|false|none|
|» use_keyless|body|boolean|false|none|
|» use_mutual_tls_auth|body|boolean|false|none|
|» use_oauth2|body|boolean|false|none|
|» use_openid|body|boolean|false|none|
|» use_standard_auth|body|boolean|false|none|
|» version_data|body|[VersionData](#schemaversiondata)|false|none|
|» error_overrides|body|object \| null|false|none|
|» » **additionalProperties**|body|[[ErrorOverride](#schemaerroroverride)]|false|none|
|» error_overrides_disabled|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "action": "modified",
  "key": "1bd5c61b0e694082902cf15ddcc9e6a7",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "File object creation failed, write error.",
  "status": "error"
}
```

<h3 id="updating-an-api-definition-with-its-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API updated.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found.|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Deleting an API definition with ID.

<a id="opIddeleteApi"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/1bd5c61b0e694082902cf15ddcc9e6a7 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/apis/{apiID}`

Deleting an API definition will remove the file from the file store, the API definition will NOT be unloaded, a separate reload request will need to be made to disable the API endpoint.

<h3 id="deleting-an-api-definition-with-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API ID.|

> Example responses

> 200 Response

```json
{
  "action": "deleted",
  "key": "1bd5c61b0e694082902cf15ddcc9e6a7",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Delete failed",
  "status": "error"
}
```

<h3 id="deleting-an-api-definition-with-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API deleted.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found.|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Listing versions of an API.

<a id="opIdlistApiVersions"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/keyless/versions \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/apis/{apiID}/versions`

Listing versions of an API.

<h3 id="listing-versions-of-an-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API ID.|
|searchText|query|string|false|Search for API version name|
|accessType|query|string|false|Filter for internal or external API versions|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accessType|internal|
|accessType|external|

> Example responses

> 200 Response

```json
{
  "apis": [
    {
      "expirationDate": "",
      "id": "keyless",
      "internal": false,
      "isDefaultVersion": false,
      "name": "Tyk Test Keyless API",
      "versionName": ""
    },
    {
      "expirationDate": "",
      "id": "1f20d5d2731d47ac9c79fddf826eda00",
      "internal": false,
      "isDefaultVersion": true,
      "name": "Version three Api",
      "versionName": "v2"
    }
  ],
  "status": "success"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found",
  "status": "error"
}
```

<h3 id="listing-versions-of-an-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API version metas.|[VersionMetas](#schemaversionmetas)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-tyk-oas-apis">Tyk OAS APIs</h1>

**Note: Applies only to Tyk Gateway Community Edition** <br/>



## List all APIs in Tyk OAS API format.

<a id="opIdlistApisOAS"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/apis/oas`

List all APIs in Tyk OAS API format, from Tyk Gateway.

<h3 id="list-all-apis-in-tyk-oas-api-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|query|string|false|By default mode is empty which means it will return the Tyk API OAS spec including the x-tyk-api-gateway part. <br> When mode=public, the Tyk OAS API spec will exclude the x-tyk-api-gateway part in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|public|

> Example responses

> 200 Response

```json
[
  {
    "components": {
      "securitySchemes": {
        "bearerAuth": {
          "description": "The API Access Credentials",
          "scheme": "bearer",
          "type": "http"
        }
      }
    },
    "info": {
      "description": "This is a sample OAS.",
      "title": "OAS Sample",
      "version": "1.0.0"
    },
    "openapi": "3.0.3",
    "paths": {
      "/api/sample/users": {
        "get": {
          "operationId": "getUsers",
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "properties": {
                        "name": {
                          "type": "string"
                        }
                      },
                      "type": "object"
                    },
                    "type": "array"
                  }
                }
              },
              "description": "fetched users"
            }
          },
          "summary": "Get users",
          "tags": [
            "users"
          ]
        }
      }
    },
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "servers": [
      {
        "url": "https://localhost:8080"
      }
    ],
    "x-tyk-api-gateway": {
      "info": {
        "name": "user",
        "state": {
          "active": true
        }
      },
      "server": {
        "listenPath": {
          "strip": true,
          "value": "/user-test/"
        }
      },
      "upstream": {
        "url": "https://localhost:8080"
      }
    }
  }
]
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="list-all-apis-in-tyk-oas-api-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of API definitions in Tyk OAS format.|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="list-all-apis-in-tyk-oas-api-format-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» openapi|string|true|none|none|
|» info|object|true|none|none|
|» externalDocs|object|false|none|none|
|» servers|[object]|false|none|none|
|» security|[object]|false|none|none|
|» tags|[object]|false|none|none|
|» paths|object|true|none|none|
|» components|object|false|none|none|
|» x-tyk-api-gateway|[XTykAPIGateway](#schemaxtykapigateway)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create an API with Tyk OAS format.

<a id="opIdcreateApiOAS"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "components": {
      "securitySchemes": {
        "bearerAuth": {
          "description": "The API Access Credentials",
          "scheme": "bearer",
          "type": "http"
        }
      }
    },
    "info": {
      "description": "This is a sample OAS.",
      "title": "OAS Sample",
      "version": "1.0.0"
    },
    "openapi": "3.0.3",
    "paths": {
      "/api/sample/users": {
        "get": {
          "operationId": "getUsers",
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "properties": {
                        "name": {
                          "type": "string"
                        }
                      },
                      "type": "object"
                    },
                    "type": "array"
                  }
                }
              },
              "description": "fetched users"
            }
          },
          "summary": "Get users",
          "tags": [
            "users"
          ]
        }
      }
    },
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "servers": [
      {
        "url": "https://localhost:8080"
      }
    ],
    "x-tyk-api-gateway": {
      "info": {
        "name": "user",
        "state": {
          "active": true
        }
      },
      "server": {
        "listenPath": {
          "strip": true,
          "value": "/user-test/"
        }
      },
      "upstream": {
        "url": "https://localhost:8080"
      }
    }
  }'
```

`POST /tyk/apis/oas`

Create an API with Tyk OAS API format on the Tyk Gateway.

> Body parameter

```json
{
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "description": "The API Access Credentials",
        "scheme": "bearer",
        "type": "http"
      }
    }
  },
  "info": {
    "description": "This is a sample OAS.",
    "title": "OAS Sample",
    "version": "1.0.0"
  },
  "openapi": "3.0.3",
  "paths": {
    "/api/sample/users": {
      "get": {
        "operationId": "getUsers",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "type": "array"
                }
              }
            },
            "description": "fetched users"
          }
        },
        "summary": "Get users",
        "tags": [
          "users"
        ]
      }
    }
  },
  "security": [
    {
      "bearerAuth": []
    }
  ],
  "servers": [
    {
      "url": "https://localhost:8080"
    }
  ],
  "x-tyk-api-gateway": {
    "info": {
      "name": "user",
      "state": {
        "active": true
      }
    },
    "server": {
      "listenPath": {
        "strip": true,
        "value": "/user-test/"
      }
    },
    "upstream": {
      "url": "https://localhost:8080"
    }
  }
}
```

<h3 id="create-an-api-with-tyk-oas-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|base_api_id|query|string|false|The base API which the new version will be linked to.|
|base_api_version_name|query|string|false|The version name of the base API while creating the first version. This doesn't have to be sent for the next versions but if it is set, it will override base API version name.|
|new_version_name|query|string|false|The version name of the created version.|
|set_default|query|boolean|false|If true, the new version is set as default version.|
|body|body|object|false|none|
|» openapi|body|string|true|none|
|» info|body|object|true|none|
|» externalDocs|body|object|false|none|
|» servers|body|[object]|false|none|
|» security|body|[object]|false|none|
|» tags|body|[object]|false|none|
|» paths|body|object|true|none|
|» components|body|object|false|none|
|» x-tyk-api-gateway|body|[XTykAPIGateway](#schemaxtykapigateway)|false|none|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "e30bee13ad4248c3b529a4c58bb7be4e",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "the payload should contain x-tyk-api-gateway",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "file object creation failed, write error",
  "status": "error"
}
```

<h3 id="create-an-api-with-tyk-oas-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API created.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get a Tyk OAS API definition.

<a id="opIdgetOASApi"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas/4c1c0d8fc885401053ddac4e39ef676b \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/apis/oas/{apiID}`

Get Tyk OAS API definition using an API ID.

<h3 id="get-a-tyk-oas-api-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|query|string|false|By default mode is empty which means it will return the Tyk API OAS spec including the x-tyk-api-gateway part. <br> When mode=public, the Tyk OAS API spec will exclude the x-tyk-api-gateway part in the response.|
|apiID|path|string|true|ID of the API you want to fetch|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|public|

> Example responses

> 200 Response

```json
{
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "description": "The API Access Credentials",
        "scheme": "bearer",
        "type": "http"
      }
    }
  },
  "info": {
    "description": "This is a sample OAS.",
    "title": "OAS Sample",
    "version": "1.0.0"
  },
  "openapi": "3.0.3",
  "paths": {
    "/api/sample/users": {
      "get": {
        "operationId": "getUsers",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "type": "array"
                }
              }
            },
            "description": "fetched users"
          }
        },
        "summary": "Get users",
        "tags": [
          "users"
        ]
      }
    }
  },
  "security": [
    {
      "bearerAuth": []
    }
  ],
  "servers": [
    {
      "url": "https://localhost:8080"
    }
  ],
  "x-tyk-api-gateway": {
    "info": {
      "name": "user",
      "state": {
        "active": true
      }
    },
    "server": {
      "listenPath": {
        "strip": true,
        "value": "/user-test/"
      }
    },
    "upstream": {
      "url": "https://localhost:8080"
    }
  }
}
```

> 400 Response

```json
{
  "message": "the requested API definition is in Tyk classic format, please use old API endpoint",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found",
  "status": "error"
}
```

<h3 id="get-a-tyk-oas-api-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found.|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="get-a-tyk-oas-api-definition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openapi|string|true|none|none|
|info|object|true|none|none|
|externalDocs|object|false|none|none|
|servers|[object]|false|none|none|
|security|[object]|false|none|none|
|tags|[object]|false|none|none|
|paths|object|true|none|none|
|components|object|false|none|none|
|x-tyk-api-gateway|[XTykAPIGateway](#schemaxtykapigateway)|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|x-tyk-base-api-id|string||ID of the base API if the requested API is a version.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a Tyk OAS API definition.

<a id="opIdupdateApiOAS"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas/4c1c0d8fc885401053ddac4e39ef676b \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "components": {
      "securitySchemes": {
        "bearerAuth": {
          "description": "The API Access Credentials",
          "scheme": "bearer",
          "type": "http"
        }
      }
    },
    "info": {
      "description": "This is a sample OAS.",
      "title": "OAS Sample",
      "version": "1.0.0"
    },
    "openapi": "3.0.3",
    "paths": {
      "/api/sample/users": {
        "get": {
          "operationId": "getUsers",
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "properties": {
                        "name": {
                          "type": "string"
                        }
                      },
                      "type": "object"
                    },
                    "type": "array"
                  }
                }
              },
              "description": "fetched users"
            }
          },
          "summary": "Get users",
          "tags": [
            "users"
          ]
        }
      }
    },
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "servers": [
      {
        "url": "https://localhost:8080"
      }
    ],
    "x-tyk-api-gateway": {
      "info": {
        "name": "user",
        "state": {
          "active": true
        }
      },
      "server": {
        "listenPath": {
          "strip": true,
          "value": "/user-test/"
        }
      },
      "upstream": {
        "url": "https://localhost:8080"
      }
    }
  }'
```

`PUT /tyk/apis/oas/{apiID}`

Updating an API definition uses the same signature an object as a `POST`, however it will first ensure that the API ID that is being updated is the same as the one in the object being `PUT`.


      Updating will completely replace the file descriptor and will not change an API Definition that has already been loaded, the hot-reload endpoint will need to be called to push the new definition to live.

> Body parameter

```json
{
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "description": "The API Access Credentials",
        "scheme": "bearer",
        "type": "http"
      }
    }
  },
  "info": {
    "description": "This is a sample OAS.",
    "title": "OAS Sample",
    "version": "1.0.0"
  },
  "openapi": "3.0.3",
  "paths": {
    "/api/sample/users": {
      "get": {
        "operationId": "getUsers",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "type": "array"
                }
              }
            },
            "description": "fetched users"
          }
        },
        "summary": "Get users",
        "tags": [
          "users"
        ]
      }
    }
  },
  "security": [
    {
      "bearerAuth": []
    }
  ],
  "servers": [
    {
      "url": "https://localhost:8080"
    }
  ],
  "x-tyk-api-gateway": {
    "info": {
      "name": "user",
      "state": {
        "active": true
      }
    },
    "server": {
      "listenPath": {
        "strip": true,
        "value": "/user-test/"
      }
    },
    "upstream": {
      "url": "https://localhost:8080"
    }
  }
}
```

<h3 id="update-a-tyk-oas-api-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|ID of the API you want to fetch|
|body|body|object|false|none|
|» openapi|body|string|true|none|
|» info|body|object|true|none|
|» externalDocs|body|object|false|none|
|» servers|body|[object]|false|none|
|» security|body|[object]|false|none|
|» tags|body|[object]|false|none|
|» paths|body|object|true|none|
|» components|body|object|false|none|
|» x-tyk-api-gateway|body|[XTykAPIGateway](#schemaxtykapigateway)|false|none|

> Example responses

> 200 Response

```json
{
  "action": "modified",
  "key": "e30bee13ad4248c3b529a4c58bb7be4e",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request APIID does not match that in Definition! For Update operations these must match.",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "file object creation failed, write error",
  "status": "error"
}
```

<h3 id="update-a-tyk-oas-api-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API updated|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Deleting a Tyk OAS API.

<a id="opIddeleteOASApi"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas/1bd5c61b0e694082902cf15ddcc9e6a7 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/apis/oas/{apiID}`

Deleting an API definition will remove the file from the file store, the API definition will not be unloaded, a separate reload request will need to be made to disable the API endpoint.

<h3 id="deleting-a-tyk-oas-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API ID.|

> Example responses

> 200 Response

```json
{
  "action": "deleted",
  "key": "1bd5c61b0e694082902cf15ddcc9e6a7",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Must specify an apiID to delete",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Delete failed",
  "status": "error"
}
```

<h3 id="deleting-a-tyk-oas-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API deleted|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found.|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Patch API in Tyk OAS format.

<a id="opIdpatchApiOAS"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas/4c1c0d8fc885401053ddac4e39ef676b \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "components": {
      "securitySchemes": {
        "bearerAuth": {
          "description": "The API Access Credentials",
          "scheme": "bearer",
          "type": "http"
        }
      }
    },
    "info": {
      "description": "This is a sample OAS.",
      "title": "OAS Sample",
      "version": "1.0.0"
    },
    "openapi": "3.0.3",
    "paths": {
      "/api/sample/users": {
        "get": {
          "operationId": "getUsers",
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "properties": {
                        "name": {
                          "type": "string"
                        }
                      },
                      "type": "object"
                    },
                    "type": "array"
                  }
                }
              },
              "description": "fetched users"
            }
          },
          "summary": "Get users",
          "tags": [
            "users"
          ]
        }
      }
    },
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "servers": [
      {
        "url": "https://localhost:8080"
      }
    ],
    "x-tyk-api-gateway": {
      "info": {
        "name": "user",
        "state": {
          "active": true
        }
      },
      "server": {
        "listenPath": {
          "strip": true,
          "value": "/user-test/"
        }
      },
      "upstream": {
        "url": "https://localhost:8080"
      }
    }
  }'
```

`PATCH /tyk/apis/oas/{apiID}`

You can use this endpoint to update Tyk OAS part of the Tyk API definition.
This endpoint allows you to configure Tyk OAS extension based on query params provided(similar to import).

> Body parameter

```json
{
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "description": "The API Access Credentials",
        "scheme": "bearer",
        "type": "http"
      }
    }
  },
  "info": {
    "description": "This is a sample OAS.",
    "title": "OAS Sample",
    "version": "1.0.0"
  },
  "openapi": "3.0.3",
  "paths": {
    "/api/sample/users": {
      "get": {
        "operationId": "getUsers",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "type": "array"
                }
              }
            },
            "description": "fetched users"
          }
        },
        "summary": "Get users",
        "tags": [
          "users"
        ]
      }
    }
  },
  "security": [
    {
      "bearerAuth": []
    }
  ],
  "servers": [
    {
      "url": "https://localhost:8080"
    }
  ],
  "x-tyk-api-gateway": {
    "info": {
      "name": "user",
      "state": {
        "active": true
      }
    },
    "server": {
      "listenPath": {
        "strip": true,
        "value": "/user-test/"
      }
    },
    "upstream": {
      "url": "https://localhost:8080"
    }
  }
}
```

<h3 id="patch-api-in-tyk-oas-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|ID of the API you want to fetch.|
|upstreamURL|query|string|false|Upstream URL for the API|
|listenPath|query|string|false|Listen path for the API|
|customDomain|query|string|false|Custom domain for the API|
|allowList|query|[BooleanQueryParam](#schemabooleanqueryparam)|false|Enable allowList middleware for all endpoints|
|validateRequest|query|[BooleanQueryParam](#schemabooleanqueryparam)|false|Enable validateRequest middleware for all endpoints having a request body with media type application/json|
|mockResponse|query|[BooleanQueryParam](#schemabooleanqueryparam)|false|Enable mockResponse middleware for all endpoints having responses configured.|
|authentication|query|[BooleanQueryParam](#schemabooleanqueryparam)|false|Enable/disable the authentication mechanism in your Tyk Gateway for your OAS API|
|body|body|object|false|none|
|» openapi|body|string|true|none|
|» info|body|object|true|none|
|» externalDocs|body|object|false|none|
|» servers|body|[object]|false|none|
|» security|body|[object]|false|none|
|» tags|body|[object]|false|none|
|» paths|body|object|true|none|
|» components|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "action": "modified",
  "key": "b13d928b9972bd18",
  "key_hash": "string",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Must specify an apiID to patch",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "file object creation failed, write error",
  "status": "error"
}
```

<h3 id="patch-api-in-tyk-oas-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API patched.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found.|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Download a Tyk OAS format API.

<a id="opIddownloadApiOASPublic"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas/4c1c0d8fc885401053ddac4e39ef676b/export \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/apis/oas/{apiID}/export`

Use the mode query parameter to specify if you want the x-tyk-api-gateway stripped out.

<h3 id="download-a-tyk-oas-format-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|ID of the API you want to fetch.|
|mode|query|string|false|By default mode is empty which means it will return the Tyk API OAS spec including the x-tyk-api-gateway part. <br> When mode=public, the Tyk OAS API spec will exclude the x-tyk-api-gateway part in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|public|

> Example responses

> 400 Response

```json
{
  "message": "requesting API definition that is in Tyk classic format",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Unexpected error",
  "status": "error"
}
```

<h3 id="download-a-tyk-oas-format-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Exported API definition file|Inline|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Not Found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Listing versions of a Tyk OAS API.

<a id="opIdlistOASApiVersions"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas/4c1c0d8fc885401053ddac4e39ef676b/versions \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/apis/oas/{apiID}/versions`

Listing versions of a Tyk OAS API.

<h3 id="listing-versions-of-a-tyk-oas-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|ID of the API you want to fetch.|
|searchText|query|string|false|Search for API version name|
|accessType|query|string|false|Filter for internal or external API versions|

#### Enumerated Values

|Parameter|Value|
|---|---|
|accessType|internal|
|accessType|external|

> Example responses

> 200 Response

```json
{
  "apis": [
    {
      "expirationDate": "",
      "id": "keyless",
      "internal": false,
      "isDefaultVersion": false,
      "name": "Tyk Test Keyless API",
      "versionName": ""
    },
    {
      "expirationDate": "",
      "id": "1f20d5d2731d47ac9c79fddf826eda00",
      "internal": false,
      "isDefaultVersion": true,
      "name": "Version three Api",
      "versionName": "v2"
    }
  ],
  "status": "success"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API not found.",
  "status": "error"
}
```

<h3 id="listing-versions-of-a-tyk-oas-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API version metas.|[VersionMetas](#schemaversionmetas)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|API not found|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Download all Tyk OAS format APIs.

<a id="opIddownloadApisOASPublic"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas/export \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/apis/oas/export`

Download all Tyk OAS format APIs, from the Gateway.

<h3 id="download-all-tyk-oas-format-apis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|mode|query|string|false|By default mode is empty which means it will return the Tyk API OAS spec including the x-tyk-api-gateway part. <br> When mode=public, the Tyk OAS API spec will exclude the x-tyk-api-gateway part in the response.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|public|

> Example responses

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Unexpected error",
  "status": "error"
}
```

<h3 id="download-all-tyk-oas-format-apis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get a list of Tyk OAS APIs definitions.|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Import an API in Tyk OAS format.

<a id="opIdimportOAS"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/apis/oas/import \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "components": {
      "securitySchemes": {
        "bearerAuth": {
          "description": "The API Access Credentials",
          "scheme": "bearer",
          "type": "http"
        }
      }
    },
    "info": {
      "description": "This is a sample OAS.",
      "title": "OAS Sample",
      "version": "1.0.0"
    },
    "openapi": "3.0.3",
    "paths": {
      "/api/sample/users": {
        "get": {
          "operationId": "getUsers",
          "responses": {
            "200": {
              "content": {
                "application/json": {
                  "schema": {
                    "items": {
                      "properties": {
                        "name": {
                          "type": "string"
                        }
                      },
                      "type": "object"
                    },
                    "type": "array"
                  }
                }
              },
              "description": "fetched users"
            }
          },
          "summary": "Get users",
          "tags": [
            "users"
          ]
        }
      }
    },
    "security": [
      {
        "bearerAuth": []
      }
    ],
    "servers": [
      {
        "url": "https://localhost:8080"
      }
    ]
  }'
```

`POST /tyk/apis/oas/import`

Import an Tyk OAS format API without x-tyk-gateway.
 For use with an existing Tyk OAS API that you want to expose via your Tyk Gateway.

> Body parameter

```json
{
  "components": {
    "securitySchemes": {
      "bearerAuth": {
        "description": "The API Access Credentials",
        "scheme": "bearer",
        "type": "http"
      }
    }
  },
  "info": {
    "description": "This is a sample OAS.",
    "title": "OAS Sample",
    "version": "1.0.0"
  },
  "openapi": "3.0.3",
  "paths": {
    "/api/sample/users": {
      "get": {
        "operationId": "getUsers",
        "responses": {
          "200": {
            "content": {
              "application/json": {
                "schema": {
                  "items": {
                    "properties": {
                      "name": {
                        "type": "string"
                      }
                    },
                    "type": "object"
                  },
                  "type": "array"
                }
              }
            },
            "description": "fetched users"
          }
        },
        "summary": "Get users",
        "tags": [
          "users"
        ]
      }
    }
  },
  "security": [
    {
      "bearerAuth": []
    }
  ],
  "servers": [
    {
      "url": "https://localhost:8080"
    }
  ]
}
```

<h3 id="import-an-api-in-tyk-oas-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|upstreamURL|query|string|false|Upstream URL for the API|
|listenPath|query|string|false|Listen path for the API|
|customDomain|query|string|false|Custom domain for the API|
|allowList|query|[BooleanQueryParam](#schemabooleanqueryparam)|false|Enable allowList middleware for all endpoints|
|validateRequest|query|[BooleanQueryParam](#schemabooleanqueryparam)|false|Enable validateRequest middleware for all endpoints having a request body with media type application/json|
|mockResponse|query|[BooleanQueryParam](#schemabooleanqueryparam)|false|Enable mockResponse middleware for all endpoints having responses configured.|
|authentication|query|[BooleanQueryParam](#schemabooleanqueryparam)|false|Enable/disable the authentication mechanism in your Tyk Gateway for your OAS API|
|base_api_id|query|string|false|The base API which the new version will be linked to.|
|base_api_version_name|query|string|false|The version name of the base API while creating the first version. This doesn't have to be sent for the next versions but if it is set, it will override base API version name.|
|new_version_name|query|string|false|The version name of the created version.|
|set_default|query|boolean|false|If true, the new version is set as default version.|
|body|body|object|false|none|
|» openapi|body|string|true|none|
|» info|body|object|true|none|
|» externalDocs|body|object|false|none|
|» servers|body|[object]|false|none|
|» security|body|[object]|false|none|
|» tags|body|[object]|false|none|
|» paths|body|object|true|none|
|» components|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "e30bee13ad4248c3b529a4c58bb7be4e",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "the import payload should not contain x-tyk-api-gateway",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "file object creation failed, write error",
  "status": "error"
}
```

<h3 id="import-an-api-in-tyk-oas-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|API imported.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-mcp-proxies">MCP Proxies</h1>

Manage MCP (Model Context Protocol) Proxies on Tyk Gateway. MCP Proxies are
defined as Tyk OAS documents that include MCP-specific configuration in the
Tyk Vendor Extension (`x-tyk-api-gateway`). All create/update requests are validated against
the MCP JSON schema; a Gateway reload is required for changes to take effect.


## List MCP Proxy definitions.

<a id="opIdlistMCPs"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/mcps \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/mcps`

List all MCP Proxy definitions on this Tyk Gateway. Each entry is a Tyk OAS document whose Tyk Vendor Extension extension marks it as an MCP Proxy definition.

> Example responses

> 200 Response

```json
[
  {
    "openapi": "string",
    "info": {},
    "externalDocs": {},
    "servers": [
      {}
    ],
    "security": [
      {}
    ],
    "tags": [
      {}
    ],
    "paths": {},
    "components": {},
    "x-tyk-api-gateway": {
      "info": {
        "dbId": "string",
        "expiration": "string",
        "id": "string",
        "name": "string",
        "orgId": "string",
        "state": {
          "active": true,
          "internal": true
        },
        "versioning": {
          "default": "string",
          "enabled": true,
          "fallbackToDefault": true,
          "key": "string",
          "location": "string",
          "name": "string",
          "stripVersioningData": true,
          "urlVersioningPattern": "string",
          "versions": [
            {
              "id": "string",
              "name": "string"
            }
          ]
        }
      },
      "middleware": {
        "global": {
          "cache": {
            "cacheAllSafeRequests": true,
            "cacheByHeaders": [
              "string"
            ],
            "cacheResponseCodes": [
              0
            ],
            "controlTTLHeaderName": "string",
            "enableUpstreamCacheControl": true,
            "enabled": true,
            "timeout": 0
          },
          "contextVariables": {
            "enabled": true
          },
          "cors": {
            "allowCredentials": true,
            "allowedHeaders": [
              "string"
            ],
            "allowedMethods": [
              "string"
            ],
            "allowedOrigins": [
              "string"
            ],
            "debug": true,
            "enabled": true,
            "exposedHeaders": [
              "string"
            ],
            "maxAge": 0,
            "optionsPassthrough": true
          },
          "pluginConfig": {
            "bundle": {
              "enabled": true,
              "path": "string"
            },
            "data": {
              "enabled": true,
              "value": {
                "property1": null,
                "property2": null
              }
            },
            "driver": "string"
          },
          "postAuthenticationPlugin": {
            "plugins": [
              {
                "enabled": true,
                "functionName": "string",
                "path": "string",
                "rawBodyOnly": true,
                "requireSession": true
              }
            ]
          },
          "postAuthenticationPlugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ],
          "postPlugin": {
            "plugins": [
              {
                "enabled": true,
                "functionName": "string",
                "path": "string",
                "rawBodyOnly": true,
                "requireSession": true
              }
            ]
          },
          "postPlugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ],
          "prePlugin": {
            "plugins": [
              {
                "enabled": true,
                "functionName": "string",
                "path": "string",
                "rawBodyOnly": true,
                "requireSession": true
              }
            ]
          },
          "prePlugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ],
          "responsePlugin": {
            "plugins": [
              {
                "enabled": true,
                "functionName": "string",
                "path": "string",
                "rawBodyOnly": true,
                "requireSession": true
              }
            ]
          },
          "responsePlugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ],
          "trafficLogs": {
            "enabled": true
          },
          "transformRequestHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "transformResponseHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          }
        },
        "operations": {
          "property1": {
            "allow": {
              "enabled": true,
              "ignoreCase": true
            },
            "block": {
              "enabled": true,
              "ignoreCase": true
            },
            "cache": {
              "cacheByRegex": "string",
              "cacheResponseCodes": [
                0
              ],
              "enabled": true,
              "timeout": 0
            },
            "circuitBreaker": {
              "coolDownPeriod": 0,
              "enabled": true,
              "halfOpenStateEnabled": true,
              "sampleSize": 0,
              "threshold": 0
            },
            "doNotTrackEndpoint": {
              "enabled": true
            },
            "enforceTimeout": {
              "enabled": true,
              "value": 0
            },
            "ignoreAuthentication": {
              "enabled": true,
              "ignoreCase": true
            },
            "internal": {
              "enabled": true
            },
            "mockResponse": {
              "body": "string",
              "code": 0,
              "enabled": true,
              "fromOASExamples": {
                "code": 0,
                "contentType": "string",
                "enabled": true,
                "exampleName": "string"
              },
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ]
            },
            "postPlugins": [
              {
                "enabled": true,
                "functionName": "string",
                "name": "string",
                "path": "string"
              }
            ],
            "rateLimit": {
              "enabled": true,
              "per": 0,
              "rate": 0
            },
            "requestSizeLimit": {
              "enabled": true,
              "value": 0
            },
            "trackEndpoint": {
              "enabled": true
            },
            "transformRequestBody": {
              "body": "string",
              "enabled": true,
              "format": "string",
              "path": "string"
            },
            "transformRequestHeaders": {
              "add": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "enabled": true,
              "remove": [
                "string"
              ]
            },
            "transformRequestMethod": {
              "enabled": true,
              "toMethod": "string"
            },
            "transformResponseBody": {
              "body": "string",
              "enabled": true,
              "format": "string",
              "path": "string"
            },
            "transformResponseHeaders": {
              "add": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "enabled": true,
              "remove": [
                "string"
              ]
            },
            "urlRewrite": {
              "enabled": true,
              "pattern": "string",
              "rewriteTo": "string",
              "triggers": [
                {
                  "condition": "string",
                  "rewriteTo": "string",
                  "rules": [
                    {
                      "in": "string",
                      "name": "string",
                      "negate": true,
                      "pattern": "string"
                    }
                  ]
                }
              ]
            },
            "validateRequest": {
              "enabled": true,
              "errorResponseCode": 0
            },
            "virtualEndpoint": {
              "body": "string",
              "enabled": true,
              "functionName": "string",
              "name": "string",
              "path": "string",
              "proxyOnError": true,
              "requireSession": true
            }
          },
          "property2": {
            "allow": {
              "enabled": true,
              "ignoreCase": true
            },
            "block": {
              "enabled": true,
              "ignoreCase": true
            },
            "cache": {
              "cacheByRegex": "string",
              "cacheResponseCodes": [
                0
              ],
              "enabled": true,
              "timeout": 0
            },
            "circuitBreaker": {
              "coolDownPeriod": 0,
              "enabled": true,
              "halfOpenStateEnabled": true,
              "sampleSize": 0,
              "threshold": 0
            },
            "doNotTrackEndpoint": {
              "enabled": true
            },
            "enforceTimeout": {
              "enabled": true,
              "value": 0
            },
            "ignoreAuthentication": {
              "enabled": true,
              "ignoreCase": true
            },
            "internal": {
              "enabled": true
            },
            "mockResponse": {
              "body": "string",
              "code": 0,
              "enabled": true,
              "fromOASExamples": {
                "code": 0,
                "contentType": "string",
                "enabled": true,
                "exampleName": "string"
              },
              "headers": [
                {
                  "name": "string",
                  "value": "string"
                }
              ]
            },
            "postPlugins": [
              {
                "enabled": true,
                "functionName": "string",
                "name": "string",
                "path": "string"
              }
            ],
            "rateLimit": {
              "enabled": true,
              "per": 0,
              "rate": 0
            },
            "requestSizeLimit": {
              "enabled": true,
              "value": 0
            },
            "trackEndpoint": {
              "enabled": true
            },
            "transformRequestBody": {
              "body": "string",
              "enabled": true,
              "format": "string",
              "path": "string"
            },
            "transformRequestHeaders": {
              "add": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "enabled": true,
              "remove": [
                "string"
              ]
            },
            "transformRequestMethod": {
              "enabled": true,
              "toMethod": "string"
            },
            "transformResponseBody": {
              "body": "string",
              "enabled": true,
              "format": "string",
              "path": "string"
            },
            "transformResponseHeaders": {
              "add": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "enabled": true,
              "remove": [
                "string"
              ]
            },
            "urlRewrite": {
              "enabled": true,
              "pattern": "string",
              "rewriteTo": "string",
              "triggers": [
                {
                  "condition": "string",
                  "rewriteTo": "string",
                  "rules": [
                    {
                      "in": "string",
                      "name": "string",
                      "negate": true,
                      "pattern": "string"
                    }
                  ]
                }
              ]
            },
            "validateRequest": {
              "enabled": true,
              "errorResponseCode": 0
            },
            "virtualEndpoint": {
              "body": "string",
              "enabled": true,
              "functionName": "string",
              "name": "string",
              "path": "string",
              "proxyOnError": true,
              "requireSession": true
            }
          }
        }
      },
      "server": {
        "authentication": {
          "baseIdentityProvider": "string",
          "custom": {
            "AuthSources": {
              "cookie": {
                "enabled": true,
                "name": "string"
              },
              "header": {
                "enabled": true,
                "name": "string"
              },
              "query": {
                "enabled": true,
                "name": "string"
              }
            },
            "config": {
              "enabled": true,
              "functionName": "string",
              "idExtractor": {
                "config": {
                  "formParamName": "string",
                  "headerName": "string",
                  "regexp": "string",
                  "regexpMatchIndex": 0,
                  "xPathExp": "string"
                },
                "enabled": true,
                "source": "string",
                "with": "string"
              },
              "path": "string",
              "rawBodyOnly": true
            },
            "enabled": true
          },
          "enabled": true,
          "hmac": {
            "AuthSources": {
              "cookie": {
                "enabled": true,
                "name": "string"
              },
              "header": {
                "enabled": true,
                "name": "string"
              },
              "query": {
                "enabled": true,
                "name": "string"
              }
            },
            "allowedAlgorithms": [
              "string"
            ],
            "allowedClockSkew": 0,
            "enabled": true
          },
          "oidc": {
            "AuthSources": {
              "cookie": {
                "enabled": true,
                "name": "string"
              },
              "header": {
                "enabled": true,
                "name": "string"
              },
              "query": {
                "enabled": true,
                "name": "string"
              }
            },
            "enabled": true,
            "providers": [
              {
                "clientToPolicyMapping": [
                  {
                    "clientId": "string",
                    "policyId": "string"
                  }
                ],
                "issuer": "string"
              }
            ],
            "scopes": {
              "claimName": "string",
              "scopeToPolicyMapping": [
                {
                  "policyId": "string",
                  "scope": "string"
                }
              ]
            },
            "segregateByClientId": true
          },
          "securitySchemes": {
            "property1": null,
            "property2": null
          },
          "stripAuthorizationData": true
        },
        "clientCertificates": {
          "allowlist": [
            "string"
          ],
          "enabled": true
        },
        "customDomain": {
          "certificates": [
            "string"
          ],
          "enabled": true,
          "name": "string"
        },
        "detailedActivityLogs": {
          "enabled": true
        },
        "detailedTracing": {
          "enabled": true
        },
        "eventHandlers": [
          {
            "enabled": true,
            "id": "string",
            "name": "string",
            "trigger": "string",
            "type": "string"
          }
        ],
        "gatewayTags": {
          "enabled": true,
          "tags": [
            "string"
          ]
        },
        "listenPath": {
          "strip": true,
          "value": "string"
        }
      },
      "upstream": {
        "certificatePinning": {
          "domainToPublicKeysMapping": [
            {
              "domain": "string",
              "publicKeys": [
                "string"
              ]
            }
          ],
          "enabled": true
        },
        "mutualTLS": {
          "domainToCertificateMapping": [
            {
              "certificate": "string",
              "domain": "string"
            }
          ],
          "enabled": true
        },
        "rateLimit": {
          "enabled": true,
          "per": 0,
          "rate": 0
        },
        "serviceDiscovery": {
          "cache": {
            "enabled": true,
            "timeout": 0
          },
          "cacheTimeout": 0,
          "dataPath": "string",
          "enabled": true,
          "endpointReturnsList": true,
          "parentDataPath": "string",
          "portDataPath": "string",
          "queryEndpoint": "string",
          "targetPath": "string",
          "useNestedQuery": true,
          "useTargetList": true
        },
        "test": {
          "serviceDiscovery": {
            "cache": {
              "enabled": true,
              "timeout": 0
            },
            "cacheTimeout": 0,
            "dataPath": "string",
            "enabled": true,
            "endpointReturnsList": true,
            "parentDataPath": "string",
            "portDataPath": "string",
            "queryEndpoint": "string",
            "targetPath": "string",
            "useNestedQuery": true,
            "useTargetList": true
          }
        },
        "url": "string"
      }
    }
  }
]
```

> 403 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="list-mcp-proxy-definitions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of MCP Proxy definitions.|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="list-mcp-proxy-definitions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» openapi|string|true|none|none|
|» info|object|true|none|none|
|» externalDocs|object|false|none|none|
|» servers|[object]|false|none|none|
|» security|[object]|false|none|none|
|» tags|[object]|false|none|none|
|» paths|object|true|none|none|
|» components|object|false|none|none|
|» x-tyk-api-gateway|[XTykAPIGateway](#schemaxtykapigateway)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create an MCP Proxy definition.

<a id="opIdcreateMCP"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/mcps \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "openapi": "3.0.3",
    "info": {
      "title": "MCP Proxy Sample",
      "version": "1.0.0"
    },
    "paths": {},
    "components": {},
    "servers": [
      {
        "url": "/mcp-sample/"
      }
    ],
    "x-tyk-api-gateway": {
      "info": {
        "name": "mcp-sample",
        "state": {
          "active": true
        }
      },
      "server": {
        "listenPath": {
          "strip": true,
          "value": "/mcp-sample/"
        },
        "authentication": {
          "enabled": true,
          "securitySchemes": {
            "authToken": {
              "enabled": true
            }
          }
        }
      },
      "upstream": {
        "url": "http://localhost:7878/mcp"
      },
      "middleware": {
        "global": {
          "contextVariables": {
            "enabled": true
          },
          "trafficLogs": {
            "enabled": true
          }
        },
        "mcpTools": {},
        "operations": {}
      }
    }
  }'
```

`POST /tyk/mcps`

Create an MCP Proxy definition from a Tyk OAS document. The payload must
contain the Tyk Vendor Extension (`x-tyk-api-gateway`) extension with MCP configuration and is
validated against the MCP JSON schema (`/tyk/schema?type=mcp`) before being
stored. The Gateway must be reloaded (`POST /tyk/reload`) for the new MCP
Proxy definition to take effect.

When `dryRun=true`, the definition is validated and returned without being
persisted, written to disk, versioned, or reloaded. When `expand=true` is
also supplied for an internal REST-as-MCP proxy target such as
`tyk://orders-rest/mcp`, the response includes the full derived
`x-tyk-mcp-server.primitives` catalogue with selected tools marked
`allow: true` and unselected tools marked `allow: false`. `expand=true`
has no effect for remote MCP proxy upstreams.


> Body parameter

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MCP Proxy Sample",
    "version": "1.0.0"
  },
  "paths": {},
  "components": {},
  "servers": [
    {
      "url": "/mcp-sample/"
    }
  ],
  "x-tyk-api-gateway": {
    "info": {
      "name": "mcp-sample",
      "state": {
        "active": true
      }
    },
    "server": {
      "listenPath": {
        "strip": true,
        "value": "/mcp-sample/"
      },
      "authentication": {
        "enabled": true,
        "securitySchemes": {
          "authToken": {
            "enabled": true
          }
        }
      }
    },
    "upstream": {
      "url": "http://localhost:7878/mcp"
    },
    "middleware": {
      "global": {
        "contextVariables": {
          "enabled": true
        },
        "trafficLogs": {
          "enabled": true
        }
      },
      "mcpTools": {},
      "operations": {}
    }
  }
}
```

<h3 id="create-an-mcp-proxy-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dryRun|query|boolean|false|Validate and render the MCP Proxy definition without persisting it.|
|expand|query|boolean|false|Expand an internal REST-as-MCP proxy response with the full configurable tool catalogue.|
|body|body|object|false|none|
|» openapi|body|string|true|none|
|» info|body|object|true|none|
|» externalDocs|body|object|false|none|
|» servers|body|[object]|false|none|
|» security|body|[object]|false|none|
|» tags|body|[object]|false|none|
|» paths|body|object|true|none|
|» components|body|object|false|none|
|» x-tyk-api-gateway|body|[XTykAPIGateway](#schemaxtykapigateway)|false|none|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "e30bee13ad4248c3b529a4c58bb7be4e",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "the payload should contain x-tyk-api-gateway",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="create-an-mcp-proxy-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MCP Proxy definition created, or validated dry-run OAS returned.|Inline|
|400|Bad Request|Validation failed (invalid OAS, missing `x-tyk-api-gateway`, or schema violation).|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="create-an-mcp-proxy-definition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|false|none|none|
|*oneOf*|object|false|none|none|
|openapi|string|true|none|none|
|info|object|true|none|none|
|externalDocs|object|false|none|none|
|servers|[object]|false|none|none|
|security|[object]|false|none|none|
|tags|[object]|false|none|none|
|paths|object|true|none|none|
|components|object|false|none|none|
|x-tyk-api-gateway|[XTykAPIGateway](#schemaxtykapigateway)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get an MCP Proxy definition.

<a id="opIdgetMCP"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/mcps/string \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/mcps/{apiID}`

Retrieve a single MCP Proxy definition by its ID. When `expand=true` is supplied for an internal REST-as-MCP proxy target, the response includes the full derived `x-tyk-mcp-server.primitives` catalogue with selected and unselected tools marked by `allow`. Normal reads return the stored definition exactly. `expand=true` has no effect for remote MCP proxy upstreams.

<h3 id="get-an-mcp-proxy-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|expand|query|boolean|false|Expand an internal REST-as-MCP proxy response with the full configurable tool catalogue.|
|apiID|path|string|true|The MCP Proxy definition ID.|

> Example responses

> 200 Response

```json
{
  "openapi": "string",
  "info": {},
  "externalDocs": {},
  "servers": [
    {}
  ],
  "security": [
    {}
  ],
  "tags": [
    {}
  ],
  "paths": {},
  "components": {},
  "x-tyk-api-gateway": {
    "info": {
      "dbId": "string",
      "expiration": "string",
      "id": "string",
      "name": "string",
      "orgId": "string",
      "state": {
        "active": true,
        "internal": true
      },
      "versioning": {
        "default": "string",
        "enabled": true,
        "fallbackToDefault": true,
        "key": "string",
        "location": "string",
        "name": "string",
        "stripVersioningData": true,
        "urlVersioningPattern": "string",
        "versions": [
          {
            "id": "string",
            "name": "string"
          }
        ]
      }
    },
    "middleware": {
      "global": {
        "cache": {
          "cacheAllSafeRequests": true,
          "cacheByHeaders": [
            "string"
          ],
          "cacheResponseCodes": [
            0
          ],
          "controlTTLHeaderName": "string",
          "enableUpstreamCacheControl": true,
          "enabled": true,
          "timeout": 0
        },
        "contextVariables": {
          "enabled": true
        },
        "cors": {
          "allowCredentials": true,
          "allowedHeaders": [
            "string"
          ],
          "allowedMethods": [
            "string"
          ],
          "allowedOrigins": [
            "string"
          ],
          "debug": true,
          "enabled": true,
          "exposedHeaders": [
            "string"
          ],
          "maxAge": 0,
          "optionsPassthrough": true
        },
        "pluginConfig": {
          "bundle": {
            "enabled": true,
            "path": "string"
          },
          "data": {
            "enabled": true,
            "value": {
              "property1": null,
              "property2": null
            }
          },
          "driver": "string"
        },
        "postAuthenticationPlugin": {
          "plugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ]
        },
        "postAuthenticationPlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ],
        "postPlugin": {
          "plugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ]
        },
        "postPlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ],
        "prePlugin": {
          "plugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ]
        },
        "prePlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ],
        "responsePlugin": {
          "plugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ]
        },
        "responsePlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ],
        "trafficLogs": {
          "enabled": true
        },
        "transformRequestHeaders": {
          "add": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "enabled": true,
          "remove": [
            "string"
          ]
        },
        "transformResponseHeaders": {
          "add": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "enabled": true,
          "remove": [
            "string"
          ]
        }
      },
      "operations": {
        "property1": {
          "allow": {
            "enabled": true,
            "ignoreCase": true
          },
          "block": {
            "enabled": true,
            "ignoreCase": true
          },
          "cache": {
            "cacheByRegex": "string",
            "cacheResponseCodes": [
              0
            ],
            "enabled": true,
            "timeout": 0
          },
          "circuitBreaker": {
            "coolDownPeriod": 0,
            "enabled": true,
            "halfOpenStateEnabled": true,
            "sampleSize": 0,
            "threshold": 0
          },
          "doNotTrackEndpoint": {
            "enabled": true
          },
          "enforceTimeout": {
            "enabled": true,
            "value": 0
          },
          "ignoreAuthentication": {
            "enabled": true,
            "ignoreCase": true
          },
          "internal": {
            "enabled": true
          },
          "mockResponse": {
            "body": "string",
            "code": 0,
            "enabled": true,
            "fromOASExamples": {
              "code": 0,
              "contentType": "string",
              "enabled": true,
              "exampleName": "string"
            },
            "headers": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "postPlugins": [
            {
              "enabled": true,
              "functionName": "string",
              "name": "string",
              "path": "string"
            }
          ],
          "rateLimit": {
            "enabled": true,
            "per": 0,
            "rate": 0
          },
          "requestSizeLimit": {
            "enabled": true,
            "value": 0
          },
          "trackEndpoint": {
            "enabled": true
          },
          "transformRequestBody": {
            "body": "string",
            "enabled": true,
            "format": "string",
            "path": "string"
          },
          "transformRequestHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "transformRequestMethod": {
            "enabled": true,
            "toMethod": "string"
          },
          "transformResponseBody": {
            "body": "string",
            "enabled": true,
            "format": "string",
            "path": "string"
          },
          "transformResponseHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "urlRewrite": {
            "enabled": true,
            "pattern": "string",
            "rewriteTo": "string",
            "triggers": [
              {
                "condition": "string",
                "rewriteTo": "string",
                "rules": [
                  {
                    "in": "string",
                    "name": "string",
                    "negate": true,
                    "pattern": "string"
                  }
                ]
              }
            ]
          },
          "validateRequest": {
            "enabled": true,
            "errorResponseCode": 0
          },
          "virtualEndpoint": {
            "body": "string",
            "enabled": true,
            "functionName": "string",
            "name": "string",
            "path": "string",
            "proxyOnError": true,
            "requireSession": true
          }
        },
        "property2": {
          "allow": {
            "enabled": true,
            "ignoreCase": true
          },
          "block": {
            "enabled": true,
            "ignoreCase": true
          },
          "cache": {
            "cacheByRegex": "string",
            "cacheResponseCodes": [
              0
            ],
            "enabled": true,
            "timeout": 0
          },
          "circuitBreaker": {
            "coolDownPeriod": 0,
            "enabled": true,
            "halfOpenStateEnabled": true,
            "sampleSize": 0,
            "threshold": 0
          },
          "doNotTrackEndpoint": {
            "enabled": true
          },
          "enforceTimeout": {
            "enabled": true,
            "value": 0
          },
          "ignoreAuthentication": {
            "enabled": true,
            "ignoreCase": true
          },
          "internal": {
            "enabled": true
          },
          "mockResponse": {
            "body": "string",
            "code": 0,
            "enabled": true,
            "fromOASExamples": {
              "code": 0,
              "contentType": "string",
              "enabled": true,
              "exampleName": "string"
            },
            "headers": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "postPlugins": [
            {
              "enabled": true,
              "functionName": "string",
              "name": "string",
              "path": "string"
            }
          ],
          "rateLimit": {
            "enabled": true,
            "per": 0,
            "rate": 0
          },
          "requestSizeLimit": {
            "enabled": true,
            "value": 0
          },
          "trackEndpoint": {
            "enabled": true
          },
          "transformRequestBody": {
            "body": "string",
            "enabled": true,
            "format": "string",
            "path": "string"
          },
          "transformRequestHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "transformRequestMethod": {
            "enabled": true,
            "toMethod": "string"
          },
          "transformResponseBody": {
            "body": "string",
            "enabled": true,
            "format": "string",
            "path": "string"
          },
          "transformResponseHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "urlRewrite": {
            "enabled": true,
            "pattern": "string",
            "rewriteTo": "string",
            "triggers": [
              {
                "condition": "string",
                "rewriteTo": "string",
                "rules": [
                  {
                    "in": "string",
                    "name": "string",
                    "negate": true,
                    "pattern": "string"
                  }
                ]
              }
            ]
          },
          "validateRequest": {
            "enabled": true,
            "errorResponseCode": 0
          },
          "virtualEndpoint": {
            "body": "string",
            "enabled": true,
            "functionName": "string",
            "name": "string",
            "path": "string",
            "proxyOnError": true,
            "requireSession": true
          }
        }
      }
    },
    "server": {
      "authentication": {
        "baseIdentityProvider": "string",
        "custom": {
          "AuthSources": {
            "cookie": {
              "enabled": true,
              "name": "string"
            },
            "header": {
              "enabled": true,
              "name": "string"
            },
            "query": {
              "enabled": true,
              "name": "string"
            }
          },
          "config": {
            "enabled": true,
            "functionName": "string",
            "idExtractor": {
              "config": {
                "formParamName": "string",
                "headerName": "string",
                "regexp": "string",
                "regexpMatchIndex": 0,
                "xPathExp": "string"
              },
              "enabled": true,
              "source": "string",
              "with": "string"
            },
            "path": "string",
            "rawBodyOnly": true
          },
          "enabled": true
        },
        "enabled": true,
        "hmac": {
          "AuthSources": {
            "cookie": {
              "enabled": true,
              "name": "string"
            },
            "header": {
              "enabled": true,
              "name": "string"
            },
            "query": {
              "enabled": true,
              "name": "string"
            }
          },
          "allowedAlgorithms": [
            "string"
          ],
          "allowedClockSkew": 0,
          "enabled": true
        },
        "oidc": {
          "AuthSources": {
            "cookie": {
              "enabled": true,
              "name": "string"
            },
            "header": {
              "enabled": true,
              "name": "string"
            },
            "query": {
              "enabled": true,
              "name": "string"
            }
          },
          "enabled": true,
          "providers": [
            {
              "clientToPolicyMapping": [
                {
                  "clientId": "string",
                  "policyId": "string"
                }
              ],
              "issuer": "string"
            }
          ],
          "scopes": {
            "claimName": "string",
            "scopeToPolicyMapping": [
              {
                "policyId": "string",
                "scope": "string"
              }
            ]
          },
          "segregateByClientId": true
        },
        "securitySchemes": {
          "property1": null,
          "property2": null
        },
        "stripAuthorizationData": true
      },
      "clientCertificates": {
        "allowlist": [
          "string"
        ],
        "enabled": true
      },
      "customDomain": {
        "certificates": [
          "string"
        ],
        "enabled": true,
        "name": "string"
      },
      "detailedActivityLogs": {
        "enabled": true
      },
      "detailedTracing": {
        "enabled": true
      },
      "eventHandlers": [
        {
          "enabled": true,
          "id": "string",
          "name": "string",
          "trigger": "string",
          "type": "string"
        }
      ],
      "gatewayTags": {
        "enabled": true,
        "tags": [
          "string"
        ]
      },
      "listenPath": {
        "strip": true,
        "value": "string"
      }
    },
    "upstream": {
      "certificatePinning": {
        "domainToPublicKeysMapping": [
          {
            "domain": "string",
            "publicKeys": [
              "string"
            ]
          }
        ],
        "enabled": true
      },
      "mutualTLS": {
        "domainToCertificateMapping": [
          {
            "certificate": "string",
            "domain": "string"
          }
        ],
        "enabled": true
      },
      "rateLimit": {
        "enabled": true,
        "per": 0,
        "rate": 0
      },
      "serviceDiscovery": {
        "cache": {
          "enabled": true,
          "timeout": 0
        },
        "cacheTimeout": 0,
        "dataPath": "string",
        "enabled": true,
        "endpointReturnsList": true,
        "parentDataPath": "string",
        "portDataPath": "string",
        "queryEndpoint": "string",
        "targetPath": "string",
        "useNestedQuery": true,
        "useTargetList": true
      },
      "test": {
        "serviceDiscovery": {
          "cache": {
            "enabled": true,
            "timeout": 0
          },
          "cacheTimeout": 0,
          "dataPath": "string",
          "enabled": true,
          "endpointReturnsList": true,
          "parentDataPath": "string",
          "portDataPath": "string",
          "queryEndpoint": "string",
          "targetPath": "string",
          "useNestedQuery": true,
          "useTargetList": true
        }
      },
      "url": "string"
    }
  }
}
```

> 404 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="get-an-mcp-proxy-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The MCP Proxy definition.|Inline|
|404|Not Found|MCP Proxy definition not found.|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="get-an-mcp-proxy-definition-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|openapi|string|true|none|none|
|info|object|true|none|none|
|externalDocs|object|false|none|none|
|servers|[object]|false|none|none|
|security|[object]|false|none|none|
|tags|[object]|false|none|none|
|paths|object|true|none|none|
|components|object|false|none|none|
|x-tyk-api-gateway|[XTykAPIGateway](#schemaxtykapigateway)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update an MCP Proxy definition.

<a id="opIdupdateMCP"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/mcps/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "openapi": "3.0.3",
    "info": {
      "title": "MCP Proxy Sample",
      "version": "1.0.0"
    },
    "paths": {},
    "components": {},
    "servers": [
      {
        "url": "/mcp-sample/"
      }
    ],
    "x-tyk-api-gateway": {
      "info": {
        "name": "mcp-sample",
        "state": {
          "active": true
        }
      },
      "server": {
        "listenPath": {
          "strip": true,
          "value": "/mcp-sample/"
        },
        "authentication": {
          "enabled": true,
          "securitySchemes": {
            "authToken": {
              "enabled": true
            }
          }
        }
      },
      "upstream": {
        "url": "http://localhost:7878/mcp"
      },
      "middleware": {
        "global": {
          "contextVariables": {
            "enabled": true
          },
          "trafficLogs": {
            "enabled": true
          }
        },
        "mcpTools": {},
        "operations": {}
      }
    }
  }'
```

`PUT /tyk/mcps/{apiID}`

Update an existing MCP Proxy definition. Body is validated against the MCP JSON schema. A Gateway reload is required for changes to take effect.

> Body parameter

```json
{
  "openapi": "3.0.3",
  "info": {
    "title": "MCP Proxy Sample",
    "version": "1.0.0"
  },
  "paths": {},
  "components": {},
  "servers": [
    {
      "url": "/mcp-sample/"
    }
  ],
  "x-tyk-api-gateway": {
    "info": {
      "name": "mcp-sample",
      "state": {
        "active": true
      }
    },
    "server": {
      "listenPath": {
        "strip": true,
        "value": "/mcp-sample/"
      },
      "authentication": {
        "enabled": true,
        "securitySchemes": {
          "authToken": {
            "enabled": true
          }
        }
      }
    },
    "upstream": {
      "url": "http://localhost:7878/mcp"
    },
    "middleware": {
      "global": {
        "contextVariables": {
          "enabled": true
        },
        "trafficLogs": {
          "enabled": true
        }
      },
      "mcpTools": {},
      "operations": {}
    }
  }
}
```

<h3 id="update-an-mcp-proxy-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The MCP Proxy definition ID.|
|body|body|object|false|none|
|» openapi|body|string|true|none|
|» info|body|object|true|none|
|» externalDocs|body|object|false|none|
|» servers|body|[object]|false|none|
|» security|body|[object]|false|none|
|» tags|body|[object]|false|none|
|» paths|body|object|true|none|
|» components|body|object|false|none|
|» x-tyk-api-gateway|body|[XTykAPIGateway](#schemaxtykapigateway)|false|none|

> Example responses

> 200 Response

```json
{
  "action": "modified",
  "key": "e30bee13ad4248c3b529a4c58bb7be4e",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "string",
  "status": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="update-an-mcp-proxy-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MCP Proxy definition updated.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Validation failed.|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|MCP Proxy definition not found.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete an MCP Proxy definition.

<a id="opIddeleteMCP"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/mcps/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/mcps/{apiID}`

Delete an MCP Proxy definition. A Gateway reload is required to unload the proxy from the running Gateway.

<h3 id="delete-an-mcp-proxy-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The MCP Proxy definition ID.|

> Example responses

> 200 Response

```json
{
  "action": "deleted",
  "key": "e30bee13ad4248c3b529a4c58bb7be4e",
  "status": "ok"
}
```

> 404 Response

```json
{
  "message": "string",
  "status": "string"
}
```

> 500 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="delete-an-mcp-proxy-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|MCP Proxy definition deleted.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|404|Not Found|MCP Proxy definition not found.|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Delete failed.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-keys">Keys</h1>

All keys that are used to access services via Tyk correspond to a session object that informs Tyk about the context of this particular token, like access rules and rate/quota allowance.


## List keys.

<a id="opIdlistKeys"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/keys`

List all the API keys.

> Example responses

> 200 Response

```json
{
  "keys": [
    "string"
  ]
}
```

> 403 Response

```json
{
  "message": "string",
  "status": "string"
}
```

> 404 Response

```json
{
  "message": "string",
  "status": "string"
}
```

<h3 id="list-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all API keys.|[ApiAllKeys](#schemaapiallkeys)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Disabled hashed key listing.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a key.

<a id="opIdaddKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "itachi-api": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "limit": {
          "per": 60,
          "quota_max": 10000,
          "quota_remaining": 10000,
          "quota_renewal_rate": 3600,
          "rate": 1000,
          "throttle_interval": 10,
          "throttle_retry_limit": 10
        },
        "versions": [
          "Default"
        ]
      }
    },
    "alias": "portal-key",
    "allowance": 1000,
    "apply_policies": [
      "5ead7120575961000181867e"
    ],
    "date_created": "2024-08-09T14:40:34.87614+03:00",
    "enable_detailed_recording": true,
    "last_updated": "1723203634",
    "meta_data": {
      "new-update-key-sample": "update-key-sample",
      "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "org_id": "5e9d9544a1dcd60001d0ed20",
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "quota_renews": 1723207234,
    "rate": 1000,
    "tags": [
      "security",
      "edge",
      "edge-eu"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`POST /tyk/keys`

Tyk will generate the access token based on the OrgID specified in the API Definition and a random UUID. This ensures that keys can be owned by different API Owners should segmentation be needed at an organisational level.
 <br/><br/>
  API keys without access_rights data will be written to all APIs on the system (this also means that they will be created across all SessionHandlers and StorageHandlers, it is recommended to always embed access_rights data in a key to ensure that only targeted APIs and their back-ends are written to.

> Body parameter

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="create-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hashed|query|boolean|false|When set to true the key_hash returned will be similar to the un-hashed key name.|
|body|body|[SessionState](#schemasessionstate)|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» alias|body|string|false|none|
|» allowance|body|number(double)|false|none|
|» apply_policies|body|[string]|false|none|
|» apply_policy_id|body|string|false|**Deprecated.** deprecated use apply_policies going forward instead to send a list of policies ids|
|» basic_auth_data|body|[BasicAuthData](#schemabasicauthdata)|false|none|
|» certificate|body|string|false|none|
|» data_expires|body|integer(int64)|false|none|
|» date_created|body|string(date-time)|false|none|
|» enable_detail_recording|body|boolean|false|**Deprecated.** deprecated use enable_detailed_recording going forward instead|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» expires|body|integer(int64)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» hmac_string|body|string|false|none|
|» id_extractor_deadline|body|integer(int64)|false|none|
|» is_inactive|body|boolean|false|none|
|» jwt_data|body|[JWTData](#schemajwtdata)|false|none|
|» last_check|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» monitor|body|[Monitor](#schemamonitor)|false|none|
|» oauth_client_id|body|string|false|none|
|» oauth_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» org_id|body|string|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_remaining|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» quota_renews|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» rsa_certificate_id|body|string|false|none|
|» session_lifetime|body|integer(int64)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "5e9d9544a1dcd60001d0ed20a2290376f89846b798b7e5197584ef6d",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Failed to create key, ensure security settings are correct.",
  "status": "error"
}
```

<h3 id="create-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New key added.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get a key with ID.

<a id="opIdgetKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys/5e9d9544a1dcd60001d0ed20e7f75f9e03534825b7aef9df749582e5 \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/keys/{keyID}`

Get session info about the specified key. Should return up to date rate limit and quota usage numbers.

<h3 id="get-a-key-with-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hashed|query|boolean|false|Use the hash of the key as input instead of the full key.|
|keyID|path|string|true|The key ID.|

> Example responses

> 200 Response

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

> 400 Response

```json
{
  "message": "Key requested by hash but key hashing is not enabled.",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "Key not found",
  "status": "error"
}
```

<h3 id="get-a-key-with-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key fetched.|[SessionState](#schemasessionstate)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Key not found.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update key.

<a id="opIdupdateKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys/5e9d9544a1dcd60001d0ed20766d9a6ec6b4403b93a554feefef4708 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "itachi-api": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "limit": {
          "per": 60,
          "quota_max": 10000,
          "quota_remaining": 10000,
          "quota_renewal_rate": 3600,
          "rate": 1000,
          "throttle_interval": 10,
          "throttle_retry_limit": 10
        },
        "versions": [
          "Default"
        ]
      }
    },
    "alias": "portal-key",
    "allowance": 1000,
    "apply_policies": [
      "5ead7120575961000181867e"
    ],
    "date_created": "2024-08-09T14:40:34.87614+03:00",
    "enable_detailed_recording": true,
    "last_updated": "1723203634",
    "meta_data": {
      "new-update-key-sample": "update-key-sample",
      "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "org_id": "5e9d9544a1dcd60001d0ed20",
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "quota_renews": 1723207234,
    "rate": 1000,
    "tags": [
      "security",
      "edge",
      "edge-eu",
      "update-sample-tag"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`PUT /tyk/keys/{keyID}`

 You can also manually add keys to Tyk using your own key-generation algorithm. It is recommended that when using this approach to ensure that the OrgID being used in the API Definition and the key data is blank so that Tyk does not try to prepend or manage the key in any way.

> Body parameter

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu",
    "update-sample-tag"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="update-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suppress_reset|query|string|false|Adding the suppress_reset parameter and setting it to 1 will cause Tyk not to reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when adding a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour.|
|hashed|query|boolean|false|When set to true the key_hash returned will be similar to the un-hashed key name.|
|keyID|path|string|true|ID of the key you want to update.|
|body|body|[SessionState](#schemasessionstate)|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» alias|body|string|false|none|
|» allowance|body|number(double)|false|none|
|» apply_policies|body|[string]|false|none|
|» apply_policy_id|body|string|false|**Deprecated.** deprecated use apply_policies going forward instead to send a list of policies ids|
|» basic_auth_data|body|[BasicAuthData](#schemabasicauthdata)|false|none|
|» certificate|body|string|false|none|
|» data_expires|body|integer(int64)|false|none|
|» date_created|body|string(date-time)|false|none|
|» enable_detail_recording|body|boolean|false|**Deprecated.** deprecated use enable_detailed_recording going forward instead|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» expires|body|integer(int64)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» hmac_string|body|string|false|none|
|» id_extractor_deadline|body|integer(int64)|false|none|
|» is_inactive|body|boolean|false|none|
|» jwt_data|body|[JWTData](#schemajwtdata)|false|none|
|» last_check|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» monitor|body|[Monitor](#schemamonitor)|false|none|
|» oauth_client_id|body|string|false|none|
|» oauth_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» org_id|body|string|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_remaining|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» quota_renews|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» rsa_certificate_id|body|string|false|none|
|» session_lifetime|body|integer(int64)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|suppress_reset|1|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "action": "modified",
  "key": "5e9d9544a1dcd60001d0ed20766d9a6ec6b4403b93a554feefef4708",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "Key is not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Failed to create key, ensure security settings are correct.",
  "status": "error"
}
```

<h3 id="update-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key updated.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Key not found.|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create custom key / Import key

<a id="opIdcreateCustomKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys/customKey \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "itachi-api": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "limit": {
          "per": 60,
          "quota_max": 10000,
          "quota_remaining": 10000,
          "quota_renewal_rate": 3600,
          "rate": 1000,
          "throttle_interval": 10,
          "throttle_retry_limit": 10
        },
        "versions": [
          "Default"
        ]
      }
    },
    "alias": "portal-key",
    "allowance": 1000,
    "apply_policies": [
      "5ead7120575961000181867e"
    ],
    "date_created": "2024-08-09T14:40:34.87614+03:00",
    "enable_detailed_recording": true,
    "last_updated": "1723203634",
    "meta_data": {
      "new-update-key-sample": "update-key-sample",
      "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "org_id": "5e9d9544a1dcd60001d0ed20",
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "quota_renews": 1723207234,
    "rate": 1000,
    "tags": [
      "security",
      "edge",
      "edge-eu"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`POST /tyk/keys/{keyID}`

You can use this endpoint to import existing keys into Tyk or to create a new custom key.

> Body parameter

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="create-custom-key-import-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|suppress_reset|query|string|false|Adding the suppress_reset parameter and setting it to 1, will cause Tyk not to reset the quota limit that is in the current live quota manager. By default Tyk will reset the quota in the live quota manager (initialising it) when adding a key. Adding the `suppress_reset` flag to the URL parameters will avoid this behaviour.|
|hashed|query|boolean|false|When set to true the key_hash returned will be similar to the un-hashed key name.|
|keyID|path|string|true|Name to give the custom key.|
|body|body|[SessionState](#schemasessionstate)|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» alias|body|string|false|none|
|» allowance|body|number(double)|false|none|
|» apply_policies|body|[string]|false|none|
|» apply_policy_id|body|string|false|**Deprecated.** deprecated use apply_policies going forward instead to send a list of policies ids|
|» basic_auth_data|body|[BasicAuthData](#schemabasicauthdata)|false|none|
|» certificate|body|string|false|none|
|» data_expires|body|integer(int64)|false|none|
|» date_created|body|string(date-time)|false|none|
|» enable_detail_recording|body|boolean|false|**Deprecated.** deprecated use enable_detailed_recording going forward instead|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» expires|body|integer(int64)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» hmac_string|body|string|false|none|
|» id_extractor_deadline|body|integer(int64)|false|none|
|» is_inactive|body|boolean|false|none|
|» jwt_data|body|[JWTData](#schemajwtdata)|false|none|
|» last_check|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» monitor|body|[Monitor](#schemamonitor)|false|none|
|» oauth_client_id|body|string|false|none|
|» oauth_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» org_id|body|string|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_remaining|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» quota_renews|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» rsa_certificate_id|body|string|false|none|
|» session_lifetime|body|integer(int64)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|suppress_reset|1|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "5e9d9544a1dcd60001d0ed20customKey",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Failed to create key, ensure security settings are correct.",
  "status": "error"
}
```

<h3 id="create-custom-key-import-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New custom key added.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a key.

<a id="opIddeleteKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys/5e9d9544a1dcd60001d0ed20e7f75f9e03534825b7aef9df749582e5 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/keys/{keyID}`

Deleting a key will remove it permanently from the system, however analytics relating to that key will still be available.

<h3 id="delete-a-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|hashed|query|boolean|false|Use the hash of the key as input instead of the full key.|
|keyID|path|string|true|The key ID.|

> Example responses

> 200 Response

```json
{
  "action": "deleted",
  "key": "5e9d9544a1dcd60001d0ed20e7f75f9e03534825b7aef9df749582e5",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Failed to remove the key",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "There is no such key found",
  "status": "error"
}
```

<h3 id="delete-a-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key deleted.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Key not found.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a key.

<a id="opIdcreateKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "itachi-api": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "limit": {
          "per": 60,
          "quota_max": 10000,
          "quota_remaining": 10000,
          "quota_renewal_rate": 3600,
          "rate": 1000,
          "throttle_interval": 10,
          "throttle_retry_limit": 10
        },
        "versions": [
          "Default"
        ]
      }
    },
    "alias": "portal-key",
    "allowance": 1000,
    "apply_policies": [
      "5ead7120575961000181867e"
    ],
    "date_created": "2024-08-09T14:40:34.87614+03:00",
    "enable_detailed_recording": true,
    "last_updated": "1723203634",
    "meta_data": {
      "new-update-key-sample": "update-key-sample",
      "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "org_id": "5e9d9544a1dcd60001d0ed20",
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "quota_renews": 1723207234,
    "rate": 1000,
    "tags": [
      "security",
      "edge",
      "edge-eu"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`POST /tyk/keys/create`

Create a key.

> Body parameter

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="create-a-key-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SessionState](#schemasessionstate)|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» alias|body|string|false|none|
|» allowance|body|number(double)|false|none|
|» apply_policies|body|[string]|false|none|
|» apply_policy_id|body|string|false|**Deprecated.** deprecated use apply_policies going forward instead to send a list of policies ids|
|» basic_auth_data|body|[BasicAuthData](#schemabasicauthdata)|false|none|
|» certificate|body|string|false|none|
|» data_expires|body|integer(int64)|false|none|
|» date_created|body|string(date-time)|false|none|
|» enable_detail_recording|body|boolean|false|**Deprecated.** deprecated use enable_detailed_recording going forward instead|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» expires|body|integer(int64)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» hmac_string|body|string|false|none|
|» id_extractor_deadline|body|integer(int64)|false|none|
|» is_inactive|body|boolean|false|none|
|» jwt_data|body|[JWTData](#schemajwtdata)|false|none|
|» last_check|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» monitor|body|[Monitor](#schemamonitor)|false|none|
|» oauth_client_id|body|string|false|none|
|» oauth_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» org_id|body|string|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_remaining|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» quota_renews|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» rsa_certificate_id|body|string|false|none|
|» session_lifetime|body|integer(int64)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "5e9d9544a1dcd60001d0ed207eb558517c3c48fb826c62cc6f6161eb",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Failed to create key, keys must have at least one Access Rights record set.",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Unmarshalling failed",
  "status": "error"
}
```

<h3 id="create-a-key-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key created.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|No access right.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Malformed body.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Set policies for a hashed key.

<a id="opIdsetPoliciesToHashedKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys/policy/5e9d9544a1dcd60001d0ed207eb558517c3c48fb826c62cc6f6161eb \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "apply_policies": [
      "5ead7120575961000181867e"
    ],
    "policy": ""
  }'
```

`POST /tyk/keys/policy/{keyID}`

This will set policies to a hashed key.

> Body parameter

```json
{
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "policy": ""
}
```

<h3 id="set-policies-for-a-hashed-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyID|path|string|true|Name to give the custom key.|
|body|body|[PolicyUpdateObj](#schemapolicyupdateobj)|false|none|
|» apply_policies|body|[string]|false|none|
|» policy|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "action": "updated",
  "key": "5e9d9544a1dcd60001d0ed207eb558517c3c48fb826c62cc6f6161eb",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Couldn't decode instruction",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "Key not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Could not write key data.",
  "status": "error"
}
```

<h3 id="set-policies-for-a-hashed-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated hashed key.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Malformed request body.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Key not found.|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## This will validate a key definition.

<a id="opIdvalidateAKeyDefinition"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/keys/preview \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "itachi-api": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "limit": {
          "per": 60,
          "quota_max": 10000,
          "quota_remaining": 10000,
          "quota_renewal_rate": 3600,
          "rate": 1000,
          "throttle_interval": 10,
          "throttle_retry_limit": 10
        },
        "versions": [
          "Default"
        ]
      }
    },
    "alias": "portal-key",
    "allowance": 1000,
    "apply_policies": [
      "5ead7120575961000181867e"
    ],
    "date_created": "2024-08-09T14:40:34.87614+03:00",
    "enable_detailed_recording": true,
    "last_updated": "1723203634",
    "meta_data": {
      "new-update-key-sample": "update-key-sample",
      "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "org_id": "5e9d9544a1dcd60001d0ed20",
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "quota_renews": 1723207234,
    "rate": 1000,
    "tags": [
      "security",
      "edge",
      "edge-eu"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`POST /tyk/keys/preview`

This will check if the body of a key definition is valid. And return a response with how the key would look like if you were to create it.

> Body parameter

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="this-will-validate-a-key-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SessionState](#schemasessionstate)|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» alias|body|string|false|none|
|» allowance|body|number(double)|false|none|
|» apply_policies|body|[string]|false|none|
|» apply_policy_id|body|string|false|**Deprecated.** deprecated use apply_policies going forward instead to send a list of policies ids|
|» basic_auth_data|body|[BasicAuthData](#schemabasicauthdata)|false|none|
|» certificate|body|string|false|none|
|» data_expires|body|integer(int64)|false|none|
|» date_created|body|string(date-time)|false|none|
|» enable_detail_recording|body|boolean|false|**Deprecated.** deprecated use enable_detailed_recording going forward instead|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» expires|body|integer(int64)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» hmac_string|body|string|false|none|
|» id_extractor_deadline|body|integer(int64)|false|none|
|» is_inactive|body|boolean|false|none|
|» jwt_data|body|[JWTData](#schemajwtdata)|false|none|
|» last_check|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» monitor|body|[Monitor](#schemamonitor)|false|none|
|» oauth_client_id|body|string|false|none|
|» oauth_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» org_id|body|string|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_remaining|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» quota_renews|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» rsa_certificate_id|body|string|false|none|
|» session_lifetime|body|integer(int64)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Unmarshalling failed",
  "status": "error"
}
```

<h3 id="this-will-validate-a-key-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key definition is valid.|[SessionState](#schemasessionstate)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-organisation-quotas">Organisation Quotas</h1>

It is possible to force API quota and rate limit across all keys that belong to a specific organisation ID. Rate limiting at an organisation level is useful for creating tiered access levels and trial accounts.<br />

The Organisation rate limiting middleware works with both Quotas and Rate Limiters. In order to manage this functionality, a simple API has been put in place to manage these sessions. <br />

Although the Organisation session-limiter uses the same session object, all other security keys are optional as they are not used. <br />

<h3>Managing active status</h3> <br />

To disallow access to an entire group of keys without rate limiting the organisation, create a session object with the "is_inactive" key set to true. This will block access before any other middleware is executed. It is useful when managing subscriptions for an organisation group and access needs to be blocked because of non-payment. <br />


## List Organisation Keys

<a id="opIdlistOrgKeys"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/org/keys \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/org/keys`

You can now set rate limits at the organisation level by using the following fields - allowance and rate. These are the number of allowed requests for the specified per value, and need to be set to the same value. If you don't want to have organisation level rate limiting, set 'rate' or 'per' to zero, or don't add them to your request.

<h3 id="list-organisation-keys-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Retrieves all keys starting with the specified filter(filter is a prefix - e.g. default* or default will return all keys starting with default  like defaultbd,defaulttwo etc).We don't use filter for hashed keys|

> Example responses

> 200 Response

```json
{
  "keys": [
    "5e9d9544a1dcd60001d0ed2008500e44fa644f939b640a4b8b4ea58c"
  ]
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "ORG not found",
  "status": "error"
}
```

<h3 id="list-organisation-keys-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all org keys|[ApiAllKeys](#schemaapiallkeys)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|ORG not found|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get an Organisation Key

<a id="opIdgetOrgKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/org/keys/e389ae00a2b145feaf28d6cc11f0f86d \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/org/keys/{keyID}`

Get session info about specified organisation key. Should return up to date rate limit and quota usage numbers.

<h3 id="get-an-organisation-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|orgID|query|string|false|The Org ID|
|keyID|path|string|true|The Key ID|

> Example responses

> 200 Response

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "Org not found",
  "status": "error"
}
```

<h3 id="get-an-organisation-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Org not found|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="get-an-organisation-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_rights|object \| null|false|none|none|
|» **additionalProperties**|object|false|none|none|
|» » allowed_urls|[object]|false|none|none|
|» » » methods|[string]|false|none|none|
|» » » url|string|false|none|none|
|» » api_id|string|false|none|none|
|» » api_name|string|false|none|none|
|» » limit|object|false|none|none|
|» » » per|integer|false|none|none|
|» » » quota_max|integer|false|none|none|
|» » » quota_remaining|integer|false|none|none|
|» » » quota_renewal_rate|integer|false|none|none|
|» » » rate|integer|false|none|none|
|» » » throttle_interval|integer|false|none|none|
|» » » throttle_retry_limit|integer|false|none|none|
|» » versions|[string]|false|none|none|
|alias|string|false|none|none|
|allowance|integer|false|none|none|
|apply_policies|[string]|false|none|none|
|date_created|string(date-time)|false|none|none|
|enable_detailed_recording|boolean|false|none|none|
|last_updated|string|false|none|none|
|meta_data|object \| null|false|none|none|
|» **additionalProperties**|string|false|none|none|
|org_id|string|false|none|none|
|per|integer|false|none|none|
|quota_max|integer|false|none|none|
|quota_renewal_rate|integer|false|none|none|
|quota_renews|integer|false|none|none|
|rate|integer|false|none|none|
|tags|[string]|false|none|none|
|throttle_interval|integer|false|none|none|
|throttle_retry_limit|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update Organisation Key

<a id="opIdupdateOrgKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/org/keys/e389ae00a2b145feaf28d6cc11f0f86d \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "itachi-api": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "limit": {
          "per": 60,
          "quota_max": 10000,
          "quota_remaining": 10000,
          "quota_renewal_rate": 3600,
          "rate": 1000,
          "throttle_interval": 10,
          "throttle_retry_limit": 10
        },
        "versions": [
          "Default"
        ]
      }
    },
    "alias": "portal-key",
    "allowance": 1000,
    "apply_policies": [
      "5ead7120575961000181867e"
    ],
    "date_created": "2024-08-09T14:40:34.87614+03:00",
    "enable_detailed_recording": true,
    "last_updated": "1723203634",
    "meta_data": {
      "new-update-key-sample": "update-key-sample",
      "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "org_id": "5e9d9544a1dcd60001d0ed20",
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "quota_renews": 1723207234,
    "rate": 1000,
    "tags": [
      "security",
      "edge",
      "edge-eu",
      "update-sample-tag"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`PUT /tyk/org/keys/{keyID}`

This work similar to Keys API except that Key ID is always equals Organisation ID

For Gateway v2.6.0 onwards, you can now set rate limits at the organisation level by using the following fields - allowance and rate. These are the number of allowed requests for the specified per value, and need to be set to the same value. If you don't want to have organisation level rate limiting, set `rate` or `per` to zero, or don't add them to your request.

> Body parameter

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu",
    "update-sample-tag"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="update-organisation-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|reset_quota|query|string|false|Adding the reset_quota parameter and setting it to 1, will cause Tyk reset the organisations quota in the live quota manager, it is recommended to use this mechanism to reset organisation-level access if a monthly subscription is in place.|
|keyID|path|string|true|The Key ID|
|body|body|[SessionState](#schemasessionstate)|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» alias|body|string|false|none|
|» allowance|body|number(double)|false|none|
|» apply_policies|body|[string]|false|none|
|» apply_policy_id|body|string|false|**Deprecated.** deprecated use apply_policies going forward instead to send a list of policies ids|
|» basic_auth_data|body|[BasicAuthData](#schemabasicauthdata)|false|none|
|» certificate|body|string|false|none|
|» data_expires|body|integer(int64)|false|none|
|» date_created|body|string(date-time)|false|none|
|» enable_detail_recording|body|boolean|false|**Deprecated.** deprecated use enable_detailed_recording going forward instead|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» expires|body|integer(int64)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» hmac_string|body|string|false|none|
|» id_extractor_deadline|body|integer(int64)|false|none|
|» is_inactive|body|boolean|false|none|
|» jwt_data|body|[JWTData](#schemajwtdata)|false|none|
|» last_check|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» monitor|body|[Monitor](#schemamonitor)|false|none|
|» oauth_client_id|body|string|false|none|
|» oauth_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» org_id|body|string|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_remaining|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» quota_renews|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» rsa_certificate_id|body|string|false|none|
|» session_lifetime|body|integer(int64)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reset_quota|1|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "action": "modified",
  "key": "b13d928b9972bd18",
  "key_hash": "string",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "No such organisation found in Active API list",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Error writing to key store ",
  "status": "error"
}
```

<h3 id="update-organisation-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Not Found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create an organisation key

<a id="opIdaddOrgKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/org/keys/e389ae00a2b145feaf28d6cc11f0f86d \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "itachi-api": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "limit": {
          "per": 60,
          "quota_max": 10000,
          "quota_remaining": 10000,
          "quota_renewal_rate": 3600,
          "rate": 1000,
          "throttle_interval": 10,
          "throttle_retry_limit": 10
        },
        "versions": [
          "Default"
        ]
      }
    },
    "alias": "portal-key",
    "allowance": 1000,
    "apply_policies": [
      "5ead7120575961000181867e"
    ],
    "date_created": "2024-08-09T14:40:34.87614+03:00",
    "enable_detailed_recording": true,
    "last_updated": "1723203634",
    "meta_data": {
      "new-update-key-sample": "update-key-sample",
      "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "org_id": "5e9d9544a1dcd60001d0ed20",
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "quota_renews": 1723207234,
    "rate": 1000,
    "tags": [
      "security",
      "edge",
      "edge-eu"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`POST /tyk/org/keys/{keyID}`

This work similar to Keys API except that Key ID is always equals Organisation ID

> Body parameter

```json
{
  "access_rights": {
    "itachi-api": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "limit": {
        "per": 60,
        "quota_max": 10000,
        "quota_remaining": 10000,
        "quota_renewal_rate": 3600,
        "rate": 1000,
        "throttle_interval": 10,
        "throttle_retry_limit": 10
      },
      "versions": [
        "Default"
      ]
    }
  },
  "alias": "portal-key",
  "allowance": 1000,
  "apply_policies": [
    "5ead7120575961000181867e"
  ],
  "date_created": "2024-08-09T14:40:34.87614+03:00",
  "enable_detailed_recording": true,
  "last_updated": "1723203634",
  "meta_data": {
    "new-update-key-sample": "update-key-sample",
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5",
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "quota_renews": 1723207234,
  "rate": 1000,
  "tags": [
    "security",
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="create-an-organisation-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyID|path|string|true|The Key ID|
|reset_quota|query|string|false|Adding the reset_quota parameter and setting it to 1, will cause Tyk reset the organisations quota in the live quota manager, it is recommended to use this mechanism to reset organisation-level access if a monthly subscription is in place.|
|body|body|[SessionState](#schemasessionstate)|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» alias|body|string|false|none|
|» allowance|body|number(double)|false|none|
|» apply_policies|body|[string]|false|none|
|» apply_policy_id|body|string|false|**Deprecated.** deprecated use apply_policies going forward instead to send a list of policies ids|
|» basic_auth_data|body|[BasicAuthData](#schemabasicauthdata)|false|none|
|» certificate|body|string|false|none|
|» data_expires|body|integer(int64)|false|none|
|» date_created|body|string(date-time)|false|none|
|» enable_detail_recording|body|boolean|false|**Deprecated.** deprecated use enable_detailed_recording going forward instead|
|» enable_detailed_recording|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» expires|body|integer(int64)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» hmac_string|body|string|false|none|
|» id_extractor_deadline|body|integer(int64)|false|none|
|» is_inactive|body|boolean|false|none|
|» jwt_data|body|[JWTData](#schemajwtdata)|false|none|
|» last_check|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» monitor|body|[Monitor](#schemamonitor)|false|none|
|» oauth_client_id|body|string|false|none|
|» oauth_keys|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» org_id|body|string|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_remaining|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» quota_renews|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» rsa_certificate_id|body|string|false|none|
|» session_lifetime|body|integer(int64)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|reset_quota|1|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "e389ae00a2b145feaf28d6cc11f0f86d",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "No such organisation found in Active API list",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Error writing to key store ",
  "status": "error"
}
```

<h3 id="create-an-organisation-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Not Found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete Key

<a id="opIddeleteOrgKey"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/org/keys/e389ae00a2b145feaf28d6cc11f0f86d \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/org/keys/{keyID}`

Deleting a key will remove all limits from organisation. It does not affects regular keys created within organisation.

<h3 id="delete-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyID|path|string|true|The Key ID|

> Example responses

> 200 Response

```json
{
  "action": "deleted",
  "key": "e389ae00a2b145feaf28d6cc11f0f86d",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Failed to remove the key",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "Org not found",
  "status": "error"
}
```

<h3 id="delete-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Org not found|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-cache-invalidation">Cache Invalidation</h1>

Sometimes a cache might contain stale data, or it may just need to be cleared because of an invalid configuration. This call will purge all keys associated with a cache on an API-by-API basis.


## Invalidate cache.

<a id="opIdinvalidateCache"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/cache/ae67bb862a3241a49117508e0f9ee839 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/cache/{apiID}`

Invalidate cache for the given API.

<h3 id="invalidate-cache-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API ID.|

> Example responses

> 200 Response

```json
{
  "message": "cache invalidated",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Cache invalidation failed.",
  "status": "error"
}
```

<h3 id="invalidate-cache-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cache invalidated.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-certs">Certs</h1>

Use the endpoints under this tag to manage your certificates. You can add, delete and list certificates using these endpoints.

## List certificates.

<a id="opIdlistCerts"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/certs \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/certs`

List all certificates in the Tyk Gateway.

<h3 id="list-certificates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|query|string|false|Organisation ID to list the certificates.|
|mode|query|string|false|Mode to list the certificate details.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|detailed|

> Example responses

> 200 Response

```json
{
  "certs": [
    "5e9d9544a1dcd60001d0ed20a6ab77653d5da938f452bb8cc9b55b0630a6743dabd8dc92bfb025abb09ce035",
    "5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90"
  ]
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="list-certificates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="list-certificates-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[APIAllCertificateBasics](#schemaapiallcertificatebasics)|false|none|none|
|*oneOf*|[APIAllCertificates](#schemaapiallcertificates)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Add a certificate.

<a id="opIdaddCert"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/certs \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d 'string'
```

`POST /tyk/certs`

Add a certificate to the Tyk Gateway.

> Body parameter

```text
string
```

<h3 id="add-a-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|org_id|query|string|false|Organisation ID to add the certificate to.|
|body|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90",
  "message": "Certificate added",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Certificate with  ID already exists.",
  "status": "error"
}
```

> 405 Response

```json
{
  "message": "Malformed request body",
  "status": "error"
}
```

<h3 id="add-a-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New certificate added.|[APICertificateStatusMessage](#schemaapicertificatestatusmessage)|
|403|Forbidden|When certificates you send already exist in the gateway.|[ApiStatusMessage](#schemaapistatusmessage)|
|405|Method Not Allowed|Malformed request body.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Return one certificate or list multiple certificates in the Tyk Gateway given a comma separated list of cert IDs.

<a id="opIdlistCertsWithIDs"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/certs/e6ce2b49-3e31-44de-95a7-12f054724283%2C5e9d9544a1dcd60001d0ed20a6ab77653d5da938f452bb8cc9b55b0630a6743dabd8dc92bfb025abb09ce035 \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/certs/{certID}`

Note that the certID path parameter can take a list of certIDs separated with commas (e.g /tyk/certs/certIDOne,certIDTwo).
 If you send a single certID it will return a single CertificateMeta object otherwise if you send more than two certIDs is will return an array of certificateMeta objects.

<h3 id="return-one-certificate-or-list-multiple-certificates-in-the-tyk-gateway-given-a-comma-separated-list-of-cert-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certID|path|string|true|Comma separated list of certificates to list.|

> Example responses

> 200 Response

```json
{
  "dns_names": [
    ".*tyk.io"
  ],
  "fingerprint": "7c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90",
  "has_private": false,
  "id": "5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90",
  "is_ca": false,
  "issuer": {
    "CommonName": "tyk.io",
    "Country": [
      "Peachtree"
    ],
    "ExtraNames": null,
    "Locality": null,
    "Names": [
      {
        "Type": [
          2,
          5,
          4,
          6
        ],
        "Value": "Peachtree"
      },
      {
        "Type": [
          2,
          5,
          4,
          10
        ],
        "Value": "tyk"
      },
      {
        "Type": [
          2,
          5,
          4,
          11
        ],
        "Value": "tyk"
      },
      {
        "Type": [
          2,
          5,
          4,
          3
        ],
        "Value": "tyk.io"
      },
      {
        "Type": [
          1,
          2,
          840,
          113549,
          1,
          9,
          1
        ],
        "Value": "support@tyk.io"
      }
    ],
    "Organization": [
      "tyk"
    ],
    "OrganizationalUnit": [
      "tyk"
    ],
    "PostalCode": null,
    "Province": null,
    "SerialNumber": "",
    "StreetAddress": null
  },
  "not_after": "2034-03-26T08:46:37Z",
  "not_before": "2024-03-25T08:46:37Z",
  "subject": {
    "CommonName": "tyk.io",
    "Country": [
      "Peachtree"
    ],
    "ExtraNames": null,
    "Locality": null,
    "Names": [
      {
        "Type": [
          2,
          5,
          4,
          6
        ],
        "Value": "Peachtree"
      },
      {
        "Type": [
          2,
          5,
          4,
          10
        ],
        "Value": "tyk"
      },
      {
        "Type": [
          2,
          5,
          4,
          11
        ],
        "Value": "tyk"
      },
      {
        "Type": [
          2,
          5,
          4,
          3
        ],
        "Value": "tyk.io"
      },
      {
        "Type": [
          1,
          2,
          840,
          113549,
          1,
          9,
          1
        ],
        "Value": "support@tyk.io"
      }
    ],
    "Organization": [
      "tyk"
    ],
    "OrganizationalUnit": [
      "tyk"
    ],
    "PostalCode": null,
    "Province": null,
    "SerialNumber": "",
    "StreetAddress": null
  }
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "Certificate with given SHA256 fingerprint not found.",
  "status": "error"
}
```

<h3 id="return-one-certificate-or-list-multiple-certificates-in-the-tyk-gateway-given-a-comma-separated-list-of-cert-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Not Found|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="return-one-certificate-or-list-multiple-certificates-in-the-tyk-gateway-given-a-comma-separated-list-of-cert-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[CertsCertificateMeta](#schemacertscertificatemeta)|false|none|none|
|*oneOf*|[[CertsCertificateMeta](#schemacertscertificatemeta)]|false|none|none|
|*anonymous*|[[CertsCertificateMeta](#schemacertscertificatemeta)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete certificate.

<a id="opIddeleteCerts"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/certs/5e9d9544a1dcd60001d0ed20a6ab77653d5da938f452bb8cc9b55b0630a6743dabd8dc92bfb025abb09ce035 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/certs/{certID}`

Delete certificate by ID.

<h3 id="delete-certificate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|certID|path|string|true|Certificate ID to be deleted.|
|org_id|query|string|false|Organisation ID to delete the certificates from.|

> Example responses

> 200 Response

```json
{
  "message": "removed",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="delete-certificate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted certificate.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-hot-reload">Hot Reload</h1>

Force restart of the Gateway or whole cluster.


## Hot-reload a single node.

<a id="opIdhotReload"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/reload \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/reload`

Tyk is capable of reloading configurations without having to stop serving requests. This means that API configurations can be added at runtime, or even modified at runtime and those rules applied immediately without any downtime.

<h3 id="hot-reload-a-single-node-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|block|query|boolean|false|Block a response until the reload is performed. This can be useful in scripting environments like CI/CD workflows.|

> Example responses

> 200 Response

```json
{
  "message": "",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="hot-reload-a-single-node-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reload gateway.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Hot-reload a group of Tyk nodes.

<a id="opIdhotReloadGroup"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/reload/group \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/reload/group`

To reload a whole group of Tyk nodes (without using the Dashboard or host manager). You can send an API request to a single node, this node will then send a notification through the pub/sub infrastructure to all other listening nodes (including the host manager if it is being used to manage Nginx) which will then trigger a global reload.

> Example responses

> 200 Response

```json
{
  "message": "",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="hot-reload-a-group-of-tyk-nodes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Reload the Tyk Gateway.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-health-checking">Health Checking</h1>

Check health status of the Tyk Gateway and loaded APIs.


## Check the health of the Tyk Gateway.

<a id="opIdhello"></a>

> Code samples

```bash
curl http://localhost:8080/hello \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /hello`

From v2.7.5 you can now rename the `/hello`  endpoint by using the `health_check_endpoint_name` option.

> Example responses

> 200 Response

```json
{
  "description": "Tyk GW",
  "details": {
    "redis": {
      "componentType": "datastore",
      "status": "pass",
      "time": "2020-05-19T03:42:55+01:00"
    }
  },
  "status": "pass",
  "version": "v5.5.0-dev"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 405 Response

```json
{
  "message": "Method Not Allowed",
  "status": "error"
}
```

<h3 id="check-the-health-of-the-tyk-gateway-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[HealthCheckResponse](#schemahealthcheckresponse)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|405|Method Not Allowed|Method Not Allowed|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Check if the Tyk Gateway is ready to serve requests.

<a id="opIdready"></a>

> Code samples

```bash
curl http://localhost:8080/ready \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /ready`

The `/ready` endpoint is used for readiness checks and can be renamed using the `readiness_check_endpoint_name` configuration option.

> Example responses

> 200 Response

```json
{
  "description": "Tyk GW Ready",
  "details": {
    "redis": {
      "componentType": "datastore",
      "status": "pass",
      "time": "2020-05-19T03:42:55+01:00"
    }
  },
  "status": "pass",
  "version": "v5.5.0-dev"
}
```

> 405 Response

```json
{
  "message": "Method Not Allowed",
  "status": "error"
}
```

> 503 Response

```json
{
  "message": "Redis connection not available",
  "status": "error"
}
```

<h3 id="check-if-the-tyk-gateway-is-ready-to-serve-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|[HealthCheckResponse](#schemahealthcheckresponse)|
|405|Method Not Allowed|Method Not Allowed|[ApiStatusMessage](#schemaapistatusmessage)|
|503|Service Unavailable|Service Unavailable|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-policies">Policies</h1>

A Tyk security policy incorporates several security options that can be applied to an API key. It acts as a template that can override individual sections of an API key (or identity) in Tyk.


## List policies.

<a id="opIdlistPolicies"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/policies \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/policies`

Retrieve all the policies in your Tyk instance. Returns an array policies.

> Example responses

> 200 Response

```json
[
  {
    "_id": "",
    "access_rights": {
      "8ddd91f3cda9453442c477b06c4e2da4": {
        "allowance_scope": "",
        "allowed_types": [],
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "disable_introspection": false,
        "field_access_rights": [],
        "limit": {
          "max_query_depth": 0,
          "per": 0,
          "quota_max": 0,
          "quota_remaining": 0,
          "quota_renewal_rate": 0,
          "quota_renews": 0,
          "rate": 0,
          "smoothing": {
            "delay": 30,
            "enabled": false,
            "step": 100,
            "threshold": 500,
            "trigger": 0.8
          },
          "throttle_interval": 0,
          "throttle_retry_limit": 0
        },
        "restricted_types": [],
        "versions": [
          "Default"
        ]
      }
    },
    "active": true,
    "enable_http_signature_validation": false,
    "graphql_access_rights": null,
    "hmac_enabled": false,
    "id": "5ead7120575961000181867e",
    "is_inactive": false,
    "key_expires_in": 2592000,
    "last_updated": "1716980105",
    "max_query_depth": -1,
    "meta_data": {
      "user_type": "mobile_user"
    },
    "name": "Sample policy",
    "org_id": "664a14650619d40001f1f00f",
    "partitions": {
      "acl": true,
      "complexity": false,
      "per_api": false,
      "quota": true,
      "rate_limit": true
    },
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "rate": 1000,
    "smoothing": {
      "delay": 30,
      "enabled": false,
      "step": 100,
      "threshold": 500,
      "trigger": 0.8
    },
    "tags": [
      "security"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }
]
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="list-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of all policies.|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="list-policies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Policy](#schemapolicy)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create a policy.

<a id="opIdaddPolicy"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/policies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "8ddd91f3cda9453442c477b06c4e2da4": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "disable_introspection": false,
        "versions": [
          "Default"
        ]
      }
    },
    "active": true,
    "hmac_enabled": false,
    "id": "5ead7120575961000181867e",
    "is_inactive": false,
    "key_expires_in": 2592000,
    "max_query_depth": -1,
    "meta_data": {
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "name": "Sample policy",
    "partitions": {
      "acl": true,
      "complexity": false,
      "per_api": false,
      "quota": true,
      "rate_limit": true
    },
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "rate": 1000,
    "tags": [
      "security"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`POST /tyk/policies`

Create a policy in your Tyk Instance.

> Body parameter

```json
{
  "access_rights": {
    "8ddd91f3cda9453442c477b06c4e2da4": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "disable_introspection": false,
      "versions": [
        "Default"
      ]
    }
  },
  "active": true,
  "hmac_enabled": false,
  "id": "5ead7120575961000181867e",
  "is_inactive": false,
  "key_expires_in": 2592000,
  "max_query_depth": -1,
  "meta_data": {
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "name": "Sample policy",
  "partitions": {
    "acl": true,
    "complexity": false,
    "per_api": false,
    "quota": true,
    "rate_limit": true
  },
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "rate": 1000,
  "tags": [
    "security"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="create-a-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Policy](#schemapolicy)|false|none|
|» _id|body|string|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» active|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» graphql_access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[GraphAccessDefinition](#schemagraphaccessdefinition)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» id|body|string|false|none|
|» is_inactive|body|boolean|false|none|
|» key_expires_in|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» name|body|string|false|none|
|» org_id|body|string|false|none|
|» partitions|body|[PolicyPartitions](#schemapolicypartitions)|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "action": "added",
  "key": "5ead7120575961000181867e",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Due to enabled service policy source, please use the Dashboard API.",
  "status": "error"
}
```

<h3 id="create-a-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy created.|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Malformed request.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get a policy.

<a id="opIdgetPolicy"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/policies/5ead7120575961000181867e \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/policies/{polID}`

You can retrieve details of a single policy by ID in your Tyk instance.

<h3 id="get-a-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|polID|path|string|true|You can retrieve details of a single policy by ID in your Tyk instance.|

> Example responses

> 200 Response

```json
{
  "access_rights": {
    "8ddd91f3cda9453442c477b06c4e2da4": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "disable_introspection": false,
      "versions": [
        "Default"
      ]
    }
  },
  "active": true,
  "hmac_enabled": false,
  "id": "5ead7120575961000181867e",
  "is_inactive": false,
  "key_expires_in": 2592000,
  "max_query_depth": -1,
  "meta_data": {
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "name": "Sample policy",
  "partitions": {
    "acl": true,
    "complexity": false,
    "per_api": false,
    "quota": true,
    "rate_limit": true
  },
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "rate": 1000,
  "tags": [
    "security"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "Policy not found",
  "status": "error"
}
```

<h3 id="get-a-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get details of a single policy.|[Policy](#schemapolicy)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Policy not found|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update a policy.

<a id="opIdupdatePolicy"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/policies/5ead7120575961000181867e \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "access_rights": {
      "8ddd91f3cda9453442c477b06c4e2da4": {
        "allowed_urls": [
          {
            "methods": [
              "GET"
            ],
            "url": "/users"
          }
        ],
        "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
        "api_name": "Itachi api",
        "disable_introspection": false,
        "versions": [
          "Default"
        ]
      }
    },
    "active": true,
    "hmac_enabled": false,
    "id": "5ead7120575961000181867e",
    "is_inactive": false,
    "key_expires_in": 2592000,
    "max_query_depth": -1,
    "meta_data": {
      "update": "sample policy update",
      "user_type": "mobile_user"
    },
    "name": "update policy sample",
    "partitions": {
      "acl": true,
      "complexity": false,
      "per_api": false,
      "quota": true,
      "rate_limit": true
    },
    "per": 60,
    "quota_max": 10000,
    "quota_renewal_rate": 3600,
    "rate": 1000,
    "tags": [
      "security"
    ],
    "throttle_interval": 10,
    "throttle_retry_limit": 10
  }'
```

`PUT /tyk/policies/{polID}`

You can update a Policy in your Tyk Instance by ID.

> Body parameter

```json
{
  "access_rights": {
    "8ddd91f3cda9453442c477b06c4e2da4": {
      "allowed_urls": [
        {
          "methods": [
            "GET"
          ],
          "url": "/users"
        }
      ],
      "api_id": "8ddd91f3cda9453442c477b06c4e2da4",
      "api_name": "Itachi api",
      "disable_introspection": false,
      "versions": [
        "Default"
      ]
    }
  },
  "active": true,
  "hmac_enabled": false,
  "id": "5ead7120575961000181867e",
  "is_inactive": false,
  "key_expires_in": 2592000,
  "max_query_depth": -1,
  "meta_data": {
    "update": "sample policy update",
    "user_type": "mobile_user"
  },
  "name": "update policy sample",
  "partitions": {
    "acl": true,
    "complexity": false,
    "per_api": false,
    "quota": true,
    "rate_limit": true
  },
  "per": 60,
  "quota_max": 10000,
  "quota_renewal_rate": 3600,
  "rate": 1000,
  "tags": [
    "security"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 10
}
```

<h3 id="update-a-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|polID|path|string|true|You can retrieve details of a single policy by ID in your Tyk instance.|
|body|body|[Policy](#schemapolicy)|false|none|
|» _id|body|string|false|none|
|» access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[AccessDefinition](#schemaaccessdefinition)|false|none|
|» active|body|boolean|false|none|
|» enable_http_signature_validation|body|boolean|false|none|
|» graphql_access_rights|body|object \| null|false|none|
|» » **additionalProperties**|body|[GraphAccessDefinition](#schemagraphaccessdefinition)|false|none|
|» hmac_enabled|body|boolean|false|none|
|» id|body|string|false|none|
|» is_inactive|body|boolean|false|none|
|» key_expires_in|body|integer(int64)|false|none|
|» last_updated|body|string|false|none|
|» max_query_depth|body|integer|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|object|false|none|
|» name|body|string|false|none|
|» org_id|body|string|false|none|
|» partitions|body|[PolicyPartitions](#schemapolicypartitions)|false|none|
|» per|body|number(double)|false|none|
|» post_expiry_action|body|string|false|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|» post_expiry_grace_period|body|integer(int64)|false|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|» quota_max|body|integer(int64)|false|none|
|» quota_renewal_rate|body|integer(int64)|false|none|
|» rate|body|number(double)|false|none|
|» smoothing|body|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|
|» tags|body|[string]|false|none|
|» throttle_interval|body|number(double)|false|none|
|» throttle_retry_limit|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» post_expiry_action|retain|
|» post_expiry_action|delete|

> Example responses

> 200 Response

```json
{
  "action": "modified",
  "key": "5ead7120575961000181867e",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Failed to create file!",
  "status": "error"
}
```

<h3 id="update-a-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy updated|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|malformed request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete a policy.

<a id="opIddeletePolicy"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/policies/5ead7120575961000181867e \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/policies/{polID}`

Delete a policy by ID in your Tyk instance.

<h3 id="delete-a-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|polID|path|string|true|You can retrieve details of a single policy by ID in your Tyk instance.|

> Example responses

> 200 Response

```json
{
  "action": "deleted",
  "key": "5ead7120575961000181867e",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Must specify an apiID to update",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Delete failed",
  "status": "error"
}
```

<h3 id="delete-a-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted policy by ID|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|Policy Id not provided|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-oauth">OAuth</h1>

Manage OAuth clients, and manage their tokens


## List oAuth clients

<a id="opIdlistOAuthClients"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/clients/1bd5c61b0e694082902cf15ddcc9e6a7 \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/oauth/clients/{apiID}`

OAuth Clients are organised by API ID, and therefore are queried as such.

<h3 id="list-oauth-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API ID|

> Example responses

> 200 Response

```json
[
  {
    "api_id": "b84fe1a04e5648927971c0557971565c",
    "client_id": "2a06b398c17f46908de3dffcb71ef87df",
    "description": "google client",
    "meta_data": {
      "user_id": "362b3fb9a1d5e4f00017226f5"
    },
    "redirect_uri": "https://httpbin.org/ip",
    "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
  }
]
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="list-oauth-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get OAuth client details or a list of OAuth clients|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Api no found|None|

<h3 id="list-oauth-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NewClientRequest](#schemanewclientrequest)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get OAuth client

<a id="opIdgetOAuthClient"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/clients/b84fe1a04e5648927971c0557971565c/2a06b398c17f46908de3dffcb71ef87df \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/oauth/clients/{apiID}/{keyName}`

Get OAuth client details tied to an api

<h3 id="get-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API id|
|keyName|path|string|true|The Client ID|

> Example responses

> 200 Response

```json
{
  "client_id": "2a06b398c17f46908de3dffcb71ef87df",
  "description": "changed description sample",
  "meta_data": {
    "user_id": "362b3fb9a1d5e4f00017226f5"
  },
  "redirect_uri": "https://httpbin.org/ip",
  "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "OAuth Client ID not found",
  "status": "error"
}
```

<h3 id="get-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth client details|[NewClientRequest](#schemanewclientrequest)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|OAuth Client not found|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Update OAuth metadata,redirecturi,description and Policy ID

<a id="opIdupdateOAuthClient"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/clients/b84fe1a04e5648927971c0557971565c/2a06b398c17f46908de3dffcb71ef87df \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "api_id": "b84fe1a04e5648927971c0557971565c",
    "client_id": "2a06b398c17f46908de3dffcb71ef87df",
    "description": "changed description sample",
    "meta_data": {
      "user_id": "362b3fb9a1d5e4f00017226f5"
    },
    "redirect_uri": "https://httpbin.org/ip",
    "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
  }'
```

`PUT /tyk/oauth/clients/{apiID}/{keyName}`

Allows you to update the metadata,redirecturi,description and Policy ID for an OAuth client.

> Body parameter

```json
{
  "api_id": "b84fe1a04e5648927971c0557971565c",
  "client_id": "2a06b398c17f46908de3dffcb71ef87df",
  "description": "changed description sample",
  "meta_data": {
    "user_id": "362b3fb9a1d5e4f00017226f5"
  },
  "redirect_uri": "https://httpbin.org/ip",
  "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
}
```

<h3 id="update-oauth-metadataredirecturidescription-and-policy-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API id|
|keyName|path|string|true|The Client ID|
|body|body|[NewClientRequest](#schemanewclientrequest)|false|none|
|» api_id|body|string|false|none|
|» client_id|body|string|false|none|
|» description|body|string|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» policy_id|body|string|false|none|
|» redirect_uri|body|string|false|none|
|» secret|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "client_id": "2a06b398c17f46908de3dffcb71ef87df",
  "description": "changed description sample",
  "meta_data": {
    "user_id": "362b3fb9a1d5e4f00017226f5"
  },
  "redirect_uri": "https://httpbin.org/ip",
  "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
}
```

> 400 Response

```json
{
  "message": "Policy access rights doesn't contain API this OAuth client belongs to",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API doesn't exist",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Unmarshalling failed",
  "status": "error"
}
```

<h3 id="update-oauth-metadataredirecturidescription-and-policy-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth client updated|[NewClientRequest](#schemanewclientrequest)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Not Found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|malformed request body|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Delete OAuth client

<a id="opIddeleteOAuthClient"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/clients/b84fe1a04e5648927971c0557971565c/2a06b398c17f46908de3dffcb71ef87df \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/oauth/clients/{apiID}/{keyName}`

Please note that tokens issued with the client ID will still be valid until they expire.

<h3 id="delete-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API id|
|keyName|path|string|true|The Client ID|

> Example responses

> 200 Response

```json
{
  "action": "deleted",
  "key": "2a06b398c17f46908de3dffcb71ef87df",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "OAuth Client ID not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Delete failed",
  "status": "error"
}
```

<h3 id="delete-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAuth client deleted|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Not found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Rotate the oath client secret

<a id="opIdrotateOauthClient"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/clients/b84fe1a04e5648927971c0557971565c/2a06b398c17f46908de3dffcb71ef87df/rotate \
  -X PUT \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`PUT /tyk/oauth/clients/{apiID}/{keyName}/rotate`

Generate a new secret

<h3 id="rotate-the-oath-client-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API id|
|keyName|path|string|true|The Client ID|

> Example responses

> 200 Response

```json
{
  "client_id": "2a06b398c17f46908de3dffcb71ef87df",
  "description": "google client",
  "meta_data": {
    "user_id": "362b3fb9a1d5e4f00017226f5"
  },
  "redirect_uri": "https://httpbin.org/ip",
  "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API doesn't exist",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Failure in storing client data",
  "status": "error"
}
```

<h3 id="rotate-the-oath-client-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New secret has been created|[NewClientRequest](#schemanewclientrequest)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Not Found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## List tokens for a provided API ID and OAuth-client ID

<a id="opIdgetOAuthClientTokens"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/clients/b84fe1a04e5648927971c0557971565c/2a06b398c17f46908de3dffcb71ef87df/tokens \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/oauth/clients/{apiID}/{keyName}/tokens`

This endpoint allows you to retrieve a list of all current tokens and their expiry date for a provided API ID and OAuth-client ID .If page query parameter is sent the tokens will be paginated. This endpoint will work only for newly created tokens.
        <br/>
        <br/>
        You can control how long you want to store expired tokens in this list using `oauth_token_expired_retain_period` gateway option, which specifies retain period for expired tokens stored in Redis. By default expired token not get removed. See <a href="https://tyk.io/docs/configure/tyk-gateway-configuration-options/#a-name-oauth-token-expired-retain-period-a-oauth-token-expired-retain-period" target="_blank">here</a> for more details.

<h3 id="list-tokens-for-a-provided-api-id-and-oauth-client-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API id|
|keyName|path|string|true|The Client ID|
|page|query|integer|false|Use page query parameter to say which page number you want returned.|

> Example responses

> 200 Response

```json
{
  "Pagination": {
    "page_num": 1,
    "page_size": 100,
    "page_total": 0
  },
  "Tokens": [
    {
      "code": "5a7d110be6355b0c071cc339327563cb45174ae387f52f87a80d2496",
      "expires": 1518158407
    },
    {
      "code": "5a7d110be6355b0c071cc33988884222b0cf436eba7979c6c51d6dbd",
      "expires": 1518158594
    },
    {
      "code": "5a7d110be6355b0c071cc33990bac8b5261041c5a7d585bff291fec4",
      "expires": 1518158638
    },
    {
      "code": "5a7d110be6355b0c071cc339a66afe75521f49388065a106ef45af54",
      "expires": 1518159792
    }
  ]
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "OAuth Client ID not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Get client tokens failed",
  "status": "error"
}
```

<h3 id="list-tokens-for-a-provided-api-id-and-oauth-client-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tokens returned successfully.|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|OAuth Client ID not found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="list-tokens-for-a-provided-api-id-and-oauth-client-id-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[PaginatedOAuthClientTokens](#schemapaginatedoauthclienttokens)|false|none|none|
|*oneOf*|[[OAuthClientToken](#schemaoauthclienttoken)]|false|none|none|
|*anonymous*|[[OAuthClientToken](#schemaoauthclienttoken)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Get API IDs for APIS that use the specified client_id(appID) for OAuth

<a id="opIdgetApisForOauthApp"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/clients/apis/2a06b398c17f46908de3dffcb71ef87df \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/oauth/clients/apis/{appID}`

Get all API IDs for APIs that have use_oauth2 enabled and use the client_id (appID) specified in the path parameter for OAuth2. You can use the org_id query parameter to specify from which organization you want the API IDs to be returned. To return APIs from all organizations, send org_id as an empty string.

<h3 id="get-api-ids-for-apis-that-use-the-specified-clientidappid-for-oauth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|appID|path|string|true|The Client ID|
|orgID|query|string|false|The Org Id|

> Example responses

> 200 Response

```json
[
  "b84fe1a04e5648927971c0557971565c"
]
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="get-api-ids-for-apis-that-use-the-specified-clientidappid-for-oauth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Return an array of apis ids|Inline|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="get-api-ids-for-apis-that-use-the-specified-clientidappid-for-oauth-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Create new OAuth client

<a id="opIdcreateOAuthClient"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/clients/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "api_id": "b84fe1a04e5648927971c0557971565c",
    "client_id": "2a06b398c17f46908de3dffcb71ef87df",
    "description": "google client",
    "meta_data": {
      "user_id": "362b3fb9a1d5e4f00017226f5"
    },
    "redirect_uri": "https://httpbin.org/ip",
    "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
  }'
```

`POST /tyk/oauth/clients/create`

Any OAuth keys must be generated with the help of a client ID. These need to be pre-registered with Tyk before they can be used (in a similar vein to how you would register your app with Twitter before attempting to ask user permissions using their API).
        <br/><br/>
        <h3>Creating OAuth clients with Access to Multiple APIs</h3>
        New from Tyk Gateway 2.6.0 is the ability to create OAuth clients with access to more than one API. If you provide the api_id it works the same as in previous releases. If you don't provide the api_id the request uses policy access rights and enumerates APIs from their setting in the newly created OAuth-client.


> Body parameter

```json
{
  "api_id": "b84fe1a04e5648927971c0557971565c",
  "client_id": "2a06b398c17f46908de3dffcb71ef87df",
  "description": "google client",
  "meta_data": {
    "user_id": "362b3fb9a1d5e4f00017226f5"
  },
  "redirect_uri": "https://httpbin.org/ip",
  "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
}
```

<h3 id="create-new-oauth-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[NewClientRequest](#schemanewclientrequest)|false|none|
|» api_id|body|string|false|none|
|» client_id|body|string|false|none|
|» description|body|string|false|none|
|» meta_data|body|object \| null|false|none|
|» » **additionalProperties**|body|string|false|none|
|» policy_id|body|string|false|none|
|» redirect_uri|body|string|false|none|
|» secret|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "client_id": "2a06b398c17f46908de3dffcb71ef87df",
  "description": "google client",
  "meta_data": {
    "user_id": "362b3fb9a1d5e4f00017226f5"
  },
  "redirect_uri": "https://httpbin.org/ip",
  "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
}
```

> 400 Response

```json
{
  "message": "API doesn't exist",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Unmarshalling failed",
  "status": "error"
}
```

<h3 id="create-new-oauth-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Client created|[NewClientRequest](#schemanewclientrequest)|
|400|Bad Request|Api Not found|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Unmarshalling failed|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Invalidate OAuth refresh token

<a id="opIdinvalidateOAuthRefresh"></a>

> Code samples

```bash
curl 'http://localhost:8080/tyk/oauth/refresh/2a06b398c17f46908de3dffcb71ef87df?api_id=b84fe1a04e5648927971c0557971565c' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/oauth/refresh/{keyName}`

It is possible to invalidate refresh tokens in order to manage OAuth client access more robustly.

<h3 id="invalidate-oauth-refresh-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keyName|path|string|true|The Client ID|
|api_id|query|string|true|The API id|

> Example responses

> 200 Response

```json
{
  "action": "deleted",
  "key": "2a06b398c17f46908de3dffcb71ef87df",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "Missing parameter api_id",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "API for this refresh token not found",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Failed to invalidate refresh token",
  "status": "error"
}
```

<h3 id="invalidate-oauth-refresh-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted|[ApiModifyKeySuccess](#schemaapimodifykeysuccess)|
|400|Bad Request|missing api_Id query parameter|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Not Found|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## revoke token

<a id="opIdrevokeSingleToken"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/revoke \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d 'client_id=2a06b398c17f46908de3dffcb71ef87df&org_id=6492f66e6ebbc56c6a6bf022&token=eyJvcmciOiI1ZTIwOTFjNGQ0YWVmY2U2MGMwNGZiOTIiLCJpZCI6IjIyODQ1NmFjNmJlMjRiMzI5MTIyOTdlODQ5NTc4NjJhIiwiaCI6Im11cm11cjY0In0%3D&token_type_hint=access_token'
```

`POST /tyk/oauth/revoke`

revoke a single token

> Body parameter

```yaml
client_id: "2a06b398c17f46908de3dffcb71ef87df"
org_id: "6492f66e6ebbc56c6a6bf022"
token: "eyJvcmciOiI1ZTIwOTFjNGQ0YWVmY2U2MGMwNGZiOTIiLCJpZCI6IjIyODQ1NmFjNmJlMjRiMzI5MTIyOTdlODQ5NTc4NjJhIiwiaCI6Im11cm11cjY0In0="
token_type_hint: access_token
```

<h3 id="revoke-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|token revoked successfully|
|» client_id|body|string|true|id of oauth client|
|» org_id|body|string|false|none|
|» token|body|string|true|token to be revoked|
|» token_type_hint|body|string|false|type of token to be revoked, if sent then the accepted values are access_token and refresh_token. String value and optional, of not provided then it will attempt to remove access and refresh tokens that matches|

> Example responses

> 200 Response

```json
{
  "message": "token revoked successfully",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "cannot parse form. Form malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="revoke-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|token revoked|[ApiStatusMessage](#schemaapistatusmessage)|
|400|Bad Request|malformed form data|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Revoke all client's tokens

<a id="opIdrevokeAllTokens"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/oauth/revoke_all \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d 'client_id=2a06b398c17f46908de3dffcb71ef87df&client_secret=MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0&org_id=6492f66e6ebbc56c6a6bf022'
```

`POST /tyk/oauth/revoke_all`

Revoke all the tokens for a given oauth client

> Body parameter

```yaml
client_id: "2a06b398c17f46908de3dffcb71ef87df"
client_secret: MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0
org_id: "6492f66e6ebbc56c6a6bf022"
```

<h3 id="revoke-all-clients-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|true|id of oauth client|
|» client_secret|body|string|true|OAuth client secret to ensure that its a valid operation|
|» org_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "message": "tokens revoked successfully",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "cannot parse form. Form malformed",
  "status": "error"
}
```

> 401 Response

```json
{
  "message": "client_id is required",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "oauth client doesn't exist",
  "status": "error"
}
```

<h3 id="revoke-all-clients-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|tokens revoked|[ApiStatusMessage](#schemaapistatusmessage)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|401|Unauthorized|missing client id|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|not found|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Purge lapsed OAuth tokens

<a id="opIdpurgeLapsedOAuthTokens"></a>

> Code samples

```bash
curl 'http://localhost:8080/tyk/oauth/tokens?scope=lapsed' \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/oauth/tokens`

Purge all lapsed OAuth token

<h3 id="purge-lapsed-oauth-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|scope|query|string|true|purge lapsed tokens|

#### Enumerated Values

|Parameter|Value|
|---|---|
|scope|lapsed|

> Example responses

> 200 Response

```json
{
  "message": "lapsed tokens purged",
  "status": "ok"
}
```

> 400 Response

```json
{
  "message": "unknown scope",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 422 Response

```json
{
  "message": "scope parameter is required",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "error purging lapsed tokens",
  "status": "error"
}
```

<h3 id="purge-lapsed-oauth-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|lapsed tokens purged successfully|[ApiStatusMessage](#schemaapistatusmessage)|
|400|Bad Request|Sending a value other than lapsed in scope query|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|422|Unprocessable Entity|Missing lapsed query parameter|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-batch-requests">Batch requests</h1>

Tyk supports batch requests, so a client makes a single request to the API but gets a compound response object back.

This is especially handy if clients have complex requests that have multiple synchronous dependencies and do not wish to have the entire request / response cycle running for each event.

To enable batch request support, set the `enable_batch_request_support` value to `true`

Batch requests that come into Tyk are *run through the whole Tyk machinery* and *use a relative path to prevent spamming*. This means that a batch request to Tyk for three resources with the same API key will have three requests applied to their session quota and request limiting could become active if they are being throttled.

Tyk reconstructs the API request based on the data in the batch request. This is to ensure that Tyk is not being used to proxy requests to other hosts outside of the upstream API being accessed.

Batch requests are created by POSTING to the `/{listen_path}/tyk/batch/` endpoint. These requests **do not require a valid key**, but their request list does.

<h3>Sample Request</h3>

    ```{json}
    {
      "requests": [
        {
          "method": "GET",
          "headers": {
            "x-tyk-test": "1",
            "x-tyk-version": "1.2",
            "authorization": "1dbc83b9c431649d7698faa9797e2900f"
          },
          "body": "",
          "relative_url": "get"
      },
      {
        "method": "GET",
        "headers": {
          "x-tyk-test": "2",
          "x-tyk-version": "1.2",
          "authorization": "1dbc83b9c431649d7698faa9797e2900f"
        },
        "body": "",
        "relative_url": "get"
        }
      ],
      "suppress_parallel_execution": false
    }
    ```

The response will be a structured reply that encapsulates the responses for each of the outbound requests. If `suppress_parallel_execution` is set to `true`, requests will be made synchronously. If set to `false` then they will run in parallel and the response order is not guaranteed.

<h3>Sample Response</h3>

  ```
  [
    {
      "relative_url": "get",
      "code": 200,
      "headers": {
        "Access-Control-Allow-Credentials": [
          "true"
        ],
        "Access-Control-Allow-Origin": [
          "*"
        ],
        "Content-Length": [
          "497"
        ],
        "Content-Type": [
          "application/json"
        ],
        "Date": [
          "Wed, 12 Nov 2014 15:32:43 GMT"
        ],
        "Server": [
          "gunicorn/18.0"
        ],
        "Via": [
          "1.1 vegur"
        ]
      },
      "body": "{
    "args": {},
    "headers": {
      "Accept-Encoding": "gzip",
      "Authorization": "1dbc83b9c431649d7698faa9797e2900f",
      "Connect-Time": "2",
      "Connection": "close",
      "Host": "httpbin.org",
      "Total-Route-Time": "0",
      "User-Agent": "Go 1.1 package http",
      "Via": "1.1 vegur",
      "X-Request-Id": "6a22499a-2776-4aa1-80c0-686581a8be4d",
      "X-Tyk-Test": "2",
      "X-Tyk-Version": "1.2"
    },
    "origin": "127.0.0.1, 62.232.114.250",
    "url": "http://httpbin.org/get"
  }"
      },
      {
        "relative_url": "get",
        "code": 200,
        "headers": {
          "Access-Control-Allow-Credentials": [
            "true"
          ],
          "Access-Control-Allow-Origin": [
            "*"
          ],
          "Content-Length": [
            "497"
          ],
          "Content-Type": [
            "application/json"
          ],
          "Date": [
            "Wed, 12 Nov 2014 15:32:43 GMT"
          ],
          "Server": [
            "gunicorn/18.0"
          ],
          "Via": [
            "1.1 vegur"
          ]
        },
        "body": "{
    "args": {},
    "headers": {
      "Accept-Encoding": "gzip",
      "Authorization": "1dbc83b9c431649d7698faa9797e2900f",
      "Connect-Time": "7",
      "Connection": "close",
      "Host": "httpbin.org",
      "Total-Route-Time": "0",
      "User-Agent": "Go 1.1 package http",
      "Via": "1.1 vegur",
      "X-Request-Id": "1ab61f50-51ff-4828-a7e2-17240385a6d2",
      "X-Tyk-Test": "1",
      "X-Tyk-Version": "1.2"
    },
    "origin": "127.0.0.1, 62.232.114.250",
    "url": "http://httpbin.org/get"
  }"
      }
  ]
  ```
With the body for each request string encoded in the `body` field.

* `expire_analytics_after`: If you are running a busy API, you may want to ensure that your MongoDB database does not overflow with old data. Set the `expire_analytics_after` value to the number of seconds you would like the data to last for. Setting this flag to anything above `0` will set an `expireAt` field for each record that is written to the database.

**Important:** Tyk will not create the expiry index for you. In order to implement data expiry for your analytics data, ensure that the index is created This is easily achieved using the [MongoDB command line interface](https://docs.mongodb.com/getting-started/shell/client/).

* `dont_set_quota_on_create`: This setting defaults to `false`, but if set to `true`, when the API is used to edit, create or add keys, the quota cache in Redis will not be re-set. By default, all updates or creates to Keys that have Quotas set will re-set the quota (This has been the default behaviour since 1.0).

  This behaviour can be bypassed on a case-by-case basis by using the `suppress_reset` parameter when making a REST API request. This is the advised mode of operation as it allows for manual, granular control over key quotas and reset timings.

* `cache_options`: This section enables you to configure the caching behaviour of Tyk and to enable or disable the caching middleware for your API.

* `cache_options.enable_cache`: Set this value to `true` if the cache should be enabled for this endpoint, setting it to false will stop all caching behaviour.

* `cache_options.cache_timeout`: The amount of time, in seconds, to keep cached objects, defaults to `60` seconds.

* `cache_options.cache_all_safe_requests`: Set this to `true` if you want all *safe* requests (GET, HEAD, OPTIONS) to be cached. This is a blanket setting for APIs where caching is required but you don't want to set individual paths up in the definition.

* `cache_options.enable_upstream_cache_control`: Set this to `true` if you want your application to control the cache options for Tyk (TTL and whether to cache or not). See [Caching](/docs/basic-config-and-security/reduce-latency/caching/) for more details.

* `response_processors`: Response processors need to be specifically defined so they are loaded on API creation, otherwise the middleware will not fire. In order to have the two main response middleware components fire, the following configuration object should be supplied.

```{json}
  "response_processors": [
    {
        "name": "header_injector",
        "options": {
            "add_headers": {"name": "value"},
            "remove_headers": ["name"]
        }
    },
    {
      "name": "response_body_transform",
      "options": {}
    }
  ]
```

The options for the `header_injector` are global, and will apply to all outbound requests.


## Run batch request.

<a id="opIdbatch"></a>

> Code samples

```bash
curl http://localhost:8080/get/tyk/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "requests": [
      {
        "body": "",
        "headers": {
          "authorization": "1dbc83b9c431649d7698faa9797e2900f",
          "x-tyk-test": "1",
          "x-tyk-version": "1.2"
        },
        "method": "GET",
        "relative_url": "get"
      },
      {
        "body": "",
        "headers": {
          "authorization": "1dbc83b9c431649d7698faa9797e2900f",
          "x-tyk-test": "2",
          "x-tyk-version": "1.2"
        },
        "method": "GET",
        "relative_url": "get"
      }
    ],
    "suppress_parallel_execution": false
  }'
```

`POST /{listen_path}/tyk/batch`

Endpoint to run batch request.

> Body parameter

```json
{
  "requests": [
    {
      "body": "",
      "headers": {
        "authorization": "1dbc83b9c431649d7698faa9797e2900f",
        "x-tyk-test": "1",
        "x-tyk-version": "1.2"
      },
      "method": "GET",
      "relative_url": "get"
    },
    {
      "body": "",
      "headers": {
        "authorization": "1dbc83b9c431649d7698faa9797e2900f",
        "x-tyk-test": "2",
        "x-tyk-version": "1.2"
      },
      "method": "GET",
      "relative_url": "get"
    }
  ],
  "suppress_parallel_execution": false
}
```

<h3 id="run-batch-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|listen_path|path|string|true|API listen path|
|body|body|[BatchRequestStructure](#schemabatchrequeststructure)|false|none|
|» requests|body|[[RequestDefinition](#schemarequestdefinition)]|false|none|
|» suppress_parallel_execution|body|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "body": "{\"message\": \"success\"}",
    "code": 200,
    "headers": {
      "Access-Control-Allow-Credentials": [
        "true"
      ],
      "Content-Type": [
        "application/json"
      ]
    },
    "relative_url": "get"
  }
]
```

> 400 Response

```json
{
  "message": "Batch request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="run-batch-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success.|Inline|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<h3 id="run-batch-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BatchReplyUnit](#schemabatchreplyunit)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-jwk-cache-invalidation">JWK cache invalidation</h1>

## Invalidate cache for given API ID.

<a id="opIdinvalidateJWKCache"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/cache/jwks/ae67bb862a3241a49117508e0f9ee839 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/cache/jwks/{apiID}`

Invalidate JWK cache for the given API.

<h3 id="invalidate-cache-for-given-api-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|apiID|path|string|true|The API ID.|

> Example responses

> 200 Response

```json
{
  "message": "cache invalidated",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="invalidate-cache-for-given-api-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cache invalidated.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

## Invalidate JWK cache for all APIs

<a id="opIdinvalidateJWKCacheForAllAPIs"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/cache/jwks \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`DELETE /tyk/cache/jwks`

Invalidate JWK cache for all APIs.

> Example responses

> 200 Response

```json
{
  "message": "cache invalidated",
  "status": "ok"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

<h3 id="invalidate-jwk-cache-for-all-apis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cache invalidated.|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-debug">Debug</h1>

## Test a Tyk Classic or Tyk OAS API definition.

<a id="opIddebugApiDefinition"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/debug \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}" \
  -d '{
    "request": {
      "method": "GET",
      "path": "/update-listen-path"
    },
    "spec": {
      "api_id": "b84fe1a04e5648927971c0557971565c",
      "auth": {
        "auth_header_name": "authorization"
      },
      "definition": {
        "key": "version",
        "location": "header"
      },
      "name": "Tyk Test API",
      "org_id": "664a14650619d40001f1f00f",
      "proxy": {
        "listen_path": "/tyk-api-test/",
        "strip_listen_path": true,
        "target_url": "https://httpbin.org"
      },
      "use_oauth2": true,
      "version_data": {
        "not_versioned": true,
        "versions": {
          "Default": {
            "name": "Default"
          }
        }
      }
    }
  }'
```

`POST /tyk/debug`

Used to test API definition by sending sample request and analysing output of both response and logs.

> Body parameter

```json
{
  "request": {
    "method": "GET",
    "path": "/update-listen-path"
  },
  "spec": {
    "api_id": "b84fe1a04e5648927971c0557971565c",
    "auth": {
      "auth_header_name": "authorization"
    },
    "definition": {
      "key": "version",
      "location": "header"
    },
    "name": "Tyk Test API",
    "org_id": "664a14650619d40001f1f00f",
    "proxy": {
      "listen_path": "/tyk-api-test/",
      "strip_listen_path": true,
      "target_url": "https://httpbin.org"
    },
    "use_oauth2": true,
    "version_data": {
      "not_versioned": true,
      "versions": {
        "Default": {
          "name": "Default"
        }
      }
    }
  }
}
```

<h3 id="test-a-tyk-classic-or-tyk-oas-api-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TraceRequest](#schematracerequest)|false|none|
|» request|body|[TraceHttpRequest](#schematracehttprequest)|false|none|
|» spec|body|[APIDefinition](#schemaapidefinition)|false|none|
|» oas|body|object \| [TykVendorExtension](#schematykvendorextension)|false|none|
|» » *oneOf*|body|object|false|The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3|
|» » openapi|body|string|true|none|
|» » info|body|object|true|none|
|» » externalDocs|body|object|false|none|
|» » servers|body|[object]|false|none|
|» » security|body|[object]|false|none|
|» » tags|body|[object]|false|none|
|» » paths|body|object|true|none|
|» » components|body|object|false|none|
|» » *oneOf*|body|[TykVendorExtension](#schematykvendorextension)|false|none|
|» *oneOf*|body|object|false|none|
|» *oneOf*|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "logs": "{\"level\":\"warning\",\"msg\":\"Legacy path detected! Upgrade to extended....",
  "message": "ok",
  "response": "====== Request ======\nGET / HTTP/1.1\r\nHost: httpbin.org\r\n\r\n\n====== Response..."
}
```

> 400 Response

```json
{
  "message": "Request malformed",
  "status": "error"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 500 Response

```json
{
  "message": "Unexpected failure:",
  "status": "error"
}
```

<h3 id="test-a-tyk-classic-or-tyk-oas-api-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success tracing request.|[TraceResponse](#schematraceresponse)|
|400|Bad Request|Bad Request|[ApiStatusMessage](#schemaapistatusmessage)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|500|Internal Server Error|Internal server error.|[ApiStatusMessage](#schemaapistatusmessage)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

<h1 id="tyk-gateway-api-schema">Schema</h1>

## Get OAS schema.

<a id="opIdgetSchema"></a>

> Code samples

```bash
curl http://localhost:8080/tyk/schema \
  -H 'Accept: application/json' \
  -H "X-Tyk-Authorization: ${API_KEY}"
```

`GET /tyk/schema`

Get OAS schema definition using a version.

<h3 id="get-oas-schema-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|oasVersion|query|string|false|The OAS version to fetch.|

> Example responses

> 200 Response

```json
{
  "message": "",
  "status": "Success"
}
```

> 403 Response

```json
{
  "message": "Attempted administrative access with invalid or missing key!",
  "status": "error"
}
```

> 404 Response

```json
{
  "message": "Schema not found for version \"4\"",
  "status": "Failed"
}
```

<h3 id="get-oas-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OAS schema response.|[OASSchemaResponse](#schemaoasschemaresponse)|
|403|Forbidden|Forbidden|[ApiStatusMessage](#schemaapistatusmessage)|
|404|Not Found|Version not found|[OASSchemaResponse](#schemaoasschemaresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key
</aside>

# Schemas

<h2 id="tocS_APIAllCertificateBasics">APIAllCertificateBasics</h2>
<!-- backwards compatibility -->
<a id="schemaapiallcertificatebasics"></a>
<a id="schema_APIAllCertificateBasics"></a>
<a id="tocSapiallcertificatebasics"></a>
<a id="tocsapiallcertificatebasics"></a>

```json
{
  "certs": [
    {
      "dns_names": [
        "string"
      ],
      "has_private": true,
      "id": "string",
      "is_ca": true,
      "issuer_cn": "string",
      "not_after": "1970-01-01T00:00:00Z",
      "not_before": "1970-01-01T00:00:00Z",
      "subject_cn": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certs|[[CertsCertificateBasics](#schemacertscertificatebasics)]|false|none|none|

<h2 id="tocS_APIAllCertificates">APIAllCertificates</h2>
<!-- backwards compatibility -->
<a id="schemaapiallcertificates"></a>
<a id="schema_APIAllCertificates"></a>
<a id="tocSapiallcertificates"></a>
<a id="tocsapiallcertificates"></a>

```json
{
  "certs": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certs|[string]|false|none|none|

<h2 id="tocS_APICertificateStatusMessage">APICertificateStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapicertificatestatusmessage"></a>
<a id="schema_APICertificateStatusMessage"></a>
<a id="tocSapicertificatestatusmessage"></a>
<a id="tocsapicertificatestatusmessage"></a>

```json
{
  "id": "5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90",
  "message": "Certificate added",
  "status": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|message|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_APIDefinition">APIDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaapidefinition"></a>
<a id="schema_APIDefinition"></a>
<a id="tocSapidefinition"></a>
<a id="tocsapidefinition"></a>

```json
{
  "CORS": {
    "allow_credentials": false,
    "allowed_headers": [
      "Origin",
      "Accept",
      "Content-Type",
      "Authorization"
    ],
    "allowed_methods": [
      "GET",
      "HEAD",
      "POST"
    ],
    "allowed_origins": [
      "https://*.foo.com"
    ],
    "debug": true,
    "enable": false,
    "exposed_headers": [
      "Accept",
      "Content-Type"
    ],
    "max_age": 24,
    "options_passthrough": false
  },
  "active": true,
  "allowed_ips": [
    "string"
  ],
  "analytics_plugin": {
    "enable": true,
    "func_name": "string",
    "plugin_path": "string"
  },
  "api_id": "string",
  "auth": {
    "auth_header_name": "Authorization",
    "cookie_name": "string",
    "disable_header": true,
    "name": "string",
    "param_name": "string",
    "signature": {
      "algorithm": "string",
      "allowed_clock_skew": 0,
      "error_code": 0,
      "error_message": "string",
      "header": "string",
      "param_name": "string",
      "secret": "string",
      "use_param": true
    },
    "use_certificate": true,
    "use_cookie": true,
    "use_param": true,
    "validate_signature": true
  },
  "auth_configs": {
    "property1": {
      "auth_header_name": "Authorization",
      "cookie_name": "string",
      "disable_header": true,
      "name": "string",
      "param_name": "string",
      "signature": {
        "algorithm": "string",
        "allowed_clock_skew": 0,
        "error_code": 0,
        "error_message": "string",
        "header": "string",
        "param_name": "string",
        "secret": "string",
        "use_param": true
      },
      "use_certificate": true,
      "use_cookie": true,
      "use_param": true,
      "validate_signature": true
    },
    "property2": {
      "auth_header_name": "Authorization",
      "cookie_name": "string",
      "disable_header": true,
      "name": "string",
      "param_name": "string",
      "signature": {
        "algorithm": "string",
        "allowed_clock_skew": 0,
        "error_code": 0,
        "error_message": "string",
        "header": "string",
        "param_name": "string",
        "secret": "string",
        "use_param": true
      },
      "use_certificate": true,
      "use_cookie": true,
      "use_param": true,
      "validate_signature": true
    }
  },
  "auth_provider": {
    "meta": {
      "property1": null,
      "property2": null
    },
    "name": "string",
    "storage_engine": "string"
  },
  "base_identity_provided_by": "string",
  "basic_auth": {
    "body_password_regexp": "string",
    "body_user_regexp": "string",
    "cache_ttl": 0,
    "disable_caching": true,
    "extract_from_body": true
  },
  "blacklisted_ips": [
    "string"
  ],
  "cache_options": {
    "cache_all_safe_requests": false,
    "cache_by_headers": [
      "string"
    ],
    "cache_control_ttl_header": "string",
    "cache_response_codes": [
      0
    ],
    "cache_timeout": 60,
    "enable_cache": true,
    "enable_upstream_cache_control": false
  },
  "certificate_pinning_disabled": true,
  "certificates": [
    "string"
  ],
  "client_certificates": [
    "string"
  ],
  "config_data": {
    "property1": null,
    "property2": null
  },
  "config_data_disabled": true,
  "custom_middleware": {
    "auth_check": {
      "disabled": true,
      "name": "PreMiddlewareFunction",
      "path": "string",
      "raw_body_only": false,
      "require_session": false
    },
    "driver": "string",
    "id_extractor": {
      "disabled": true,
      "extract_from": "string",
      "extract_with": "string",
      "extractor_config": {
        "property1": null,
        "property2": null
      }
    },
    "post": [
      {
        "disabled": true,
        "name": "PreMiddlewareFunction",
        "path": "string",
        "raw_body_only": false,
        "require_session": false
      }
    ],
    "post_key_auth": [
      {
        "disabled": true,
        "name": "PreMiddlewareFunction",
        "path": "string",
        "raw_body_only": false,
        "require_session": false
      }
    ],
    "pre": [
      {
        "disabled": true,
        "name": "PreMiddlewareFunction",
        "path": "string",
        "raw_body_only": false,
        "require_session": false
      }
    ],
    "response": [
      {
        "disabled": true,
        "name": "PreMiddlewareFunction",
        "path": "string",
        "raw_body_only": false,
        "require_session": false
      }
    ]
  },
  "custom_middleware_bundle": "string",
  "custom_middleware_bundle_disabled": true,
  "custom_plugin_auth_enabled": true,
  "definition": {
    "default": "string",
    "enabled": true,
    "fallback_to_default": true,
    "key": "x-api-version",
    "location": "header",
    "name": "string",
    "strip_path": true,
    "strip_versioning_data": true,
    "url_versioning_pattern": "string",
    "versions": {
      "property1": "string",
      "property2": "string"
    }
  },
  "detailed_tracing": true,
  "disable_quota": true,
  "disable_rate_limit": true,
  "do_not_track": true,
  "domain": "string",
  "domain_disabled": true,
  "dont_set_quota_on_create": true,
  "enable_batch_request_support": true,
  "enable_context_vars": true,
  "enable_coprocess_auth": true,
  "enable_detailed_recording": true,
  "enable_ip_blacklisting": true,
  "enable_ip_whitelisting": true,
  "enable_jwt": true,
  "enable_proxy_protocol": true,
  "enable_signature_checking": true,
  "event_handlers": {
    "events": {
      "property1": [
        {
          "handler_meta": {
            "property1": null,
            "property2": null
          },
          "handler_name": "string"
        }
      ],
      "property2": [
        {
          "handler_meta": {
            "property1": null,
            "property2": null
          },
          "handler_name": "string"
        }
      ]
    }
  },
  "expiration": "string",
  "expire_analytics_after": 0,
  "external_oauth": {
    "enabled": true,
    "providers": [
      {
        "introspection": {
          "cache": {
            "enabled": true,
            "timeout": 0
          },
          "client_id": "string",
          "client_secret": "string",
          "enabled": true,
          "identity_base_field": "string",
          "url": "string"
        },
        "jwt": {
          "enabled": true,
          "expires_at_validation_skew": 0,
          "identity_base_field": "string",
          "issued_at_validation_skew": 0,
          "not_before_validation_skew": 0,
          "signing_method": "string",
          "source": "string"
        }
      }
    ]
  },
  "global_rate_limit": {
    "disabled": true,
    "per": 0,
    "rate": 0
  },
  "graphql": {
    "enabled": true,
    "engine": {
      "data_sources": [
        {
          "config": null,
          "internal": true,
          "kind": "string",
          "name": "string",
          "root_fields": [
            {
              "fields": [
                "string"
              ],
              "type": "string"
            }
          ]
        }
      ],
      "field_configs": [
        {
          "disable_default_mapping": true,
          "field_name": "string",
          "path": [
            "string"
          ],
          "type_name": "string"
        }
      ],
      "global_headers": [
        {
          "key": "string",
          "value": "string"
        }
      ]
    },
    "execution_mode": "proxyOnly",
    "introspection": {
      "disabled": true
    },
    "last_schema_update": "1970-01-01T00:00:00Z",
    "playground": {
      "enabled": true,
      "path": "string"
    },
    "proxy": {
      "auth_headers": {
        "property1": "string",
        "property2": "string"
      },
      "features": {
        "use_immutable_headers": true
      },
      "request_headers": {
        "property1": "string",
        "property2": "string"
      },
      "request_headers_rewrite": {
        "property1": {
          "remove": true,
          "value": "string"
        },
        "property2": {
          "remove": true,
          "value": "string"
        }
      },
      "subscription_type": "string",
      "use_response_extensions": {
        "on_error_forwarding": true
      }
    },
    "schema": "string",
    "subgraph": {
      "sdl": "string"
    },
    "supergraph": {
      "disable_query_batching": true,
      "global_headers": {
        "property1": "string",
        "property2": "string"
      },
      "merged_sdl": "string",
      "subgraphs": [
        {
          "api_id": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "name": "string",
          "sdl": "string",
          "subscription_type": "string",
          "url": "string"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z"
    },
    "type_field_configurations": [
      {
        "data_source": {
          "data_source_config": null,
          "kind": "string"
        },
        "field_name": "string",
        "mapping": {
          "disabled": true,
          "path": "string"
        },
        "type_name": "string"
      }
    ],
    "version": "1"
  },
  "hmac_allowed_algorithms": [
    "string"
  ],
  "hmac_allowed_clock_skew": 0,
  "id": "string",
  "idp_client_id_mapping_disabled": true,
  "internal": true,
  "is_oas": true,
  "jwt_client_base_field": "string",
  "jwt_default_policies": [
    "string"
  ],
  "jwt_expires_at_validation_skew": 0,
  "jwt_identity_base_field": "string",
  "jwt_issued_at_validation_skew": 0,
  "jwt_not_before_validation_skew": 0,
  "jwt_policy_field_name": "string",
  "jwt_scope_claim_name": "string",
  "jwt_scope_to_policy_mapping": {
    "property1": "string",
    "property2": "string"
  },
  "jwt_signing_method": "string",
  "jwt_skip_kid": true,
  "jwt_source": "string",
  "listen_port": 0,
  "name": "string",
  "notifications": {
    "oauth_on_keychange_url": "string",
    "shared_secret": "string"
  },
  "oauth_meta": {
    "allowed_access_types": [
      "string"
    ],
    "allowed_authorize_types": [
      "string"
    ],
    "auth_login_redirect": "string"
  },
  "openid_options": {
    "providers": [
      {
        "client_ids": {
          "property1": "string",
          "property2": "string"
        },
        "issuer": "string"
      }
    ],
    "segregate_by_client": true
  },
  "org_id": "string",
  "pinned_public_keys": {
    "property1": "string",
    "property2": "string"
  },
  "protocol": "string",
  "proxy": {
    "check_host_against_uptime_tests": true,
    "disable_strip_slash": true,
    "enable_load_balancing": true,
    "listen_path": "/relative-path-examples/",
    "preserve_host_header": true,
    "service_discovery": {
      "cache_disabled": true,
      "cache_timeout": 0,
      "data_path": "string",
      "endpoint_returns_list": true,
      "parent_data_path": "string",
      "port_data_path": "string",
      "query_endpoint": "string",
      "target_path": "string",
      "use_discovery_service": true,
      "use_nested_query": true,
      "use_target_list": true
    },
    "strip_listen_path": true,
    "target_list": [
      "string"
    ],
    "target_url": "https://httpbin.org/",
    "transport": {
      "proxy_url": "string",
      "ssl_ciphers": [
        "string"
      ],
      "ssl_force_common_name_check": true,
      "ssl_insecure_skip_verify": true,
      "ssl_max_version": 0,
      "ssl_min_version": 0
    }
  },
  "request_signing": {
    "algorithm": "string",
    "certificate_id": "string",
    "header_list": [
      "string"
    ],
    "is_enabled": true,
    "key_id": "string",
    "secret": "string",
    "signature_header": "string"
  },
  "response_processors": [
    {
      "name": "string",
      "options": null
    }
  ],
  "scopes": {
    "jwt": {
      "scope_claim_name": "string",
      "scope_to_policy": {
        "property1": "string",
        "property2": "string"
      }
    },
    "oidc": {
      "scope_claim_name": "string",
      "scope_to_policy": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "session_lifetime": 0,
  "session_lifetime_respects_key_expiration": true,
  "session_provider": {
    "meta": {
      "property1": null,
      "property2": null
    },
    "name": "string",
    "storage_engine": "string"
  },
  "slug": "string",
  "strip_auth_data": true,
  "tag_headers": [
    "string"
  ],
  "tags": [
    "Default",
    "v1"
  ],
  "tags_disabled": true,
  "upstream_certificates": {
    "property1": "string",
    "property2": "string"
  },
  "upstream_certificates_disabled": true,
  "uptime_tests": {
    "check_list": [
      {
        "body": "string",
        "commands": [
          {
            "message": "string",
            "name": "string"
          }
        ],
        "enable_proxy_protocol": true,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "method": "string",
        "protocol": "string",
        "timeout": 0,
        "url": "string"
      }
    ],
    "config": {
      "expire_utime_after": 0,
      "recheck_wait": 0,
      "service_discovery": {
        "cache_disabled": true,
        "cache_timeout": 0,
        "data_path": "string",
        "endpoint_returns_list": true,
        "parent_data_path": "string",
        "port_data_path": "string",
        "query_endpoint": "string",
        "target_path": "string",
        "use_discovery_service": true,
        "use_nested_query": true,
        "use_target_list": true
      }
    }
  },
  "use_basic_auth": true,
  "use_go_plugin_auth": true,
  "use_keyless": true,
  "use_mutual_tls_auth": true,
  "use_oauth2": true,
  "use_openid": true,
  "use_standard_auth": true,
  "version_data": {
    "default_version": "string",
    "not_versioned": true,
    "versions": {
      "property1": {
        "expires": "string",
        "extended_paths": {
          "advance_cache_config": [
            {
              "cache_key_regex": "string",
              "cache_response_codes": [
                0
              ],
              "disabled": true,
              "method": "string",
              "path": "string",
              "timeout": 0
            }
          ],
          "black_list": [
            {
              "disabled": true,
              "ignore_case": true,
              "method": "string",
              "method_actions": {
                "property1": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              },
              "path": "string"
            }
          ],
          "cache": [
            "string"
          ],
          "circuit_breakers": [
            {
              "disable_half_open_state": true,
              "disabled": true,
              "method": "string",
              "path": "string",
              "return_to_service_after": 0,
              "samples": 0,
              "threshold_percent": 0
            }
          ],
          "do_not_track_endpoints": [
            {
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "go_plugin": [
            {
              "disabled": true,
              "func_name": "string",
              "method": "string",
              "path": "string",
              "plugin_path": "string"
            }
          ],
          "hard_timeouts": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "timeout": 0
            }
          ],
          "ignored": [
            {
              "disabled": true,
              "ignore_case": true,
              "method": "string",
              "method_actions": {
                "property1": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              },
              "path": "string"
            }
          ],
          "internal": [
            {
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "method_transforms": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "to_method": "string"
            }
          ],
          "mock_response": [
            {
              "body": "string",
              "code": 0,
              "disabled": true,
              "headers": {
                "property1": "string",
                "property2": "string"
              },
              "ignore_case": true,
              "method": "string",
              "path": "string"
            }
          ],
          "persist_graphql": [
            {
              "method": "string",
              "operation": "string",
              "path": "string",
              "variables": {
                "property1": null,
                "property2": null
              }
            }
          ],
          "rate_limit": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "per": 0,
              "rate": 0
            }
          ],
          "size_limits": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "size_limit": 0
            }
          ],
          "track_endpoints": [
            {
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "transform": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "template_data": {
                "enable_session": true,
                "input_type": "json",
                "template_mode": "blob",
                "template_source": "string"
              }
            }
          ],
          "transform_headers": [
            {
              "act_on": true,
              "add_headers": {
                "property1": "string",
                "property2": "string"
              },
              "delete_headers": [
                "string"
              ],
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "transform_jq": [
            {
              "filter": "string",
              "method": "string",
              "path": "string"
            }
          ],
          "transform_jq_response": [
            {
              "filter": "string",
              "method": "string",
              "path": "string"
            }
          ],
          "transform_response": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "template_data": {
                "enable_session": true,
                "input_type": "json",
                "template_mode": "blob",
                "template_source": "string"
              }
            }
          ],
          "transform_response_headers": [
            {
              "act_on": true,
              "add_headers": {
                "property1": "string",
                "property2": "string"
              },
              "delete_headers": [
                "string"
              ],
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "url_rewrites": [
            {
              "disabled": true,
              "match_pattern": "string",
              "method": "string",
              "path": "string",
              "rewrite_to": "string",
              "triggers": [
                {
                  "on": "all",
                  "options": {
                    "header_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    },
                    "path_part_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    },
                    "payload_matches": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "query_val_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    },
                    "request_context_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    },
                    "session_meta_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    }
                  },
                  "rewrite_to": "string"
                }
              ]
            }
          ],
          "validate_json": [
            {
              "disabled": true,
              "error_response_code": 0,
              "method": "string",
              "path": "string",
              "schema": {
                "property1": null,
                "property2": null
              },
              "schema_b64": "string"
            }
          ],
          "validate_request": [
            {
              "enabled": true,
              "error_response_code": 0,
              "method": "string",
              "path": "string"
            }
          ],
          "virtual": [
            {
              "disabled": true,
              "function_source_type": "blob",
              "function_source_uri": "string",
              "method": "string",
              "path": "string",
              "proxy_on_error": true,
              "response_function_name": "string",
              "use_session": true
            }
          ],
          "white_list": [
            {
              "disabled": true,
              "ignore_case": true,
              "method": "string",
              "method_actions": {
                "property1": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              },
              "path": "string"
            }
          ]
        },
        "global_headers": {
          "property1": "string",
          "property2": "string"
        },
        "global_headers_disabled": true,
        "global_headers_remove": [
          "string"
        ],
        "global_response_headers": {
          "property1": "string",
          "property2": "string"
        },
        "global_response_headers_disabled": true,
        "global_response_headers_remove": [
          "string"
        ],
        "global_size_limit": 0,
        "ignore_endpoint_case": true,
        "name": "string",
        "override_target": "string",
        "paths": {
          "black_list": [
            "string"
          ],
          "ignored": [
            "string"
          ],
          "white_list": [
            "string"
          ]
        },
        "use_extended_paths": true
      },
      "property2": {
        "expires": "string",
        "extended_paths": {
          "advance_cache_config": [
            {
              "cache_key_regex": "string",
              "cache_response_codes": [
                0
              ],
              "disabled": true,
              "method": "string",
              "path": "string",
              "timeout": 0
            }
          ],
          "black_list": [
            {
              "disabled": true,
              "ignore_case": true,
              "method": "string",
              "method_actions": {
                "property1": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              },
              "path": "string"
            }
          ],
          "cache": [
            "string"
          ],
          "circuit_breakers": [
            {
              "disable_half_open_state": true,
              "disabled": true,
              "method": "string",
              "path": "string",
              "return_to_service_after": 0,
              "samples": 0,
              "threshold_percent": 0
            }
          ],
          "do_not_track_endpoints": [
            {
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "go_plugin": [
            {
              "disabled": true,
              "func_name": "string",
              "method": "string",
              "path": "string",
              "plugin_path": "string"
            }
          ],
          "hard_timeouts": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "timeout": 0
            }
          ],
          "ignored": [
            {
              "disabled": true,
              "ignore_case": true,
              "method": "string",
              "method_actions": {
                "property1": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              },
              "path": "string"
            }
          ],
          "internal": [
            {
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "method_transforms": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "to_method": "string"
            }
          ],
          "mock_response": [
            {
              "body": "string",
              "code": 0,
              "disabled": true,
              "headers": {
                "property1": "string",
                "property2": "string"
              },
              "ignore_case": true,
              "method": "string",
              "path": "string"
            }
          ],
          "persist_graphql": [
            {
              "method": "string",
              "operation": "string",
              "path": "string",
              "variables": {
                "property1": null,
                "property2": null
              }
            }
          ],
          "rate_limit": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "per": 0,
              "rate": 0
            }
          ],
          "size_limits": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "size_limit": 0
            }
          ],
          "track_endpoints": [
            {
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "transform": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "template_data": {
                "enable_session": true,
                "input_type": "json",
                "template_mode": "blob",
                "template_source": "string"
              }
            }
          ],
          "transform_headers": [
            {
              "act_on": true,
              "add_headers": {
                "property1": "string",
                "property2": "string"
              },
              "delete_headers": [
                "string"
              ],
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "transform_jq": [
            {
              "filter": "string",
              "method": "string",
              "path": "string"
            }
          ],
          "transform_jq_response": [
            {
              "filter": "string",
              "method": "string",
              "path": "string"
            }
          ],
          "transform_response": [
            {
              "disabled": true,
              "method": "string",
              "path": "string",
              "template_data": {
                "enable_session": true,
                "input_type": "json",
                "template_mode": "blob",
                "template_source": "string"
              }
            }
          ],
          "transform_response_headers": [
            {
              "act_on": true,
              "add_headers": {
                "property1": "string",
                "property2": "string"
              },
              "delete_headers": [
                "string"
              ],
              "disabled": true,
              "method": "string",
              "path": "string"
            }
          ],
          "url_rewrites": [
            {
              "disabled": true,
              "match_pattern": "string",
              "method": "string",
              "path": "string",
              "rewrite_to": "string",
              "triggers": [
                {
                  "on": "all",
                  "options": {
                    "header_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    },
                    "path_part_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    },
                    "payload_matches": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "query_val_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    },
                    "request_context_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    },
                    "session_meta_matches": {
                      "property1": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "property2": {
                        "match_rx": "string",
                        "reverse": true
                      }
                    }
                  },
                  "rewrite_to": "string"
                }
              ]
            }
          ],
          "validate_json": [
            {
              "disabled": true,
              "error_response_code": 0,
              "method": "string",
              "path": "string",
              "schema": {
                "property1": null,
                "property2": null
              },
              "schema_b64": "string"
            }
          ],
          "validate_request": [
            {
              "enabled": true,
              "error_response_code": 0,
              "method": "string",
              "path": "string"
            }
          ],
          "virtual": [
            {
              "disabled": true,
              "function_source_type": "blob",
              "function_source_uri": "string",
              "method": "string",
              "path": "string",
              "proxy_on_error": true,
              "response_function_name": "string",
              "use_session": true
            }
          ],
          "white_list": [
            {
              "disabled": true,
              "ignore_case": true,
              "method": "string",
              "method_actions": {
                "property1": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                },
                "property2": {
                  "action": "no_action",
                  "code": 0,
                  "data": "string",
                  "headers": {
                    "property1": "string",
                    "property2": "string"
                  }
                }
              },
              "path": "string"
            }
          ]
        },
        "global_headers": {
          "property1": "string",
          "property2": "string"
        },
        "global_headers_disabled": true,
        "global_headers_remove": [
          "string"
        ],
        "global_response_headers": {
          "property1": "string",
          "property2": "string"
        },
        "global_response_headers_disabled": true,
        "global_response_headers_remove": [
          "string"
        ],
        "global_size_limit": 0,
        "ignore_endpoint_case": true,
        "name": "string",
        "override_target": "string",
        "paths": {
          "black_list": [
            "string"
          ],
          "ignored": [
            "string"
          ],
          "white_list": [
            "string"
          ]
        },
        "use_extended_paths": true
      }
    }
  },
  "error_overrides": {
    "property1": [
      {
        "match": {
          "body_field": "string",
          "body_value": "string",
          "flag": "string",
          "message_pattern": "string"
        },
        "response": {
          "body": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "status_code": 0,
          "template": "string"
        }
      }
    ],
    "property2": [
      {
        "match": {
          "body_field": "string",
          "body_value": "string",
          "flag": "string",
          "message_pattern": "string"
        },
        "response": {
          "body": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "message": "string",
          "status_code": 0,
          "template": "string"
        }
      }
    ]
  },
  "error_overrides_disabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CORS|[CORSConfig](#schemacorsconfig)|false|none|none|
|active|boolean|false|none|none|
|allowed_ips|[string]|false|none|none|
|analytics_plugin|[AnalyticsPluginConfig](#schemaanalyticspluginconfig)|false|none|none|
|api_id|string|false|none|none|
|auth|[AuthConfig](#schemaauthconfig)|false|none|none|
|auth_configs|object \| null|false|none|none|
|auth_provider|[AuthProviderMeta](#schemaauthprovidermeta)|false|none|none|
|base_identity_provided_by|string|false|none|none|
|basic_auth|object|false|none|none|
|blacklisted_ips|[string]|false|none|none|
|cache_options|[CacheOptions](#schemacacheoptions)|false|none|none|
|certificate_pinning_disabled|boolean|false|none|none|
|certificates|[string]|false|none|none|
|client_certificates|[string]|false|none|none|
|config_data|object \| null|false|none|none|
|config_data_disabled|boolean|false|none|none|
|custom_middleware|[MiddlewareSection](#schemamiddlewaresection)|false|none|none|
|custom_middleware_bundle|string|false|none|none|
|custom_middleware_bundle_disabled|boolean|false|none|none|
|custom_plugin_auth_enabled|boolean|false|none|none|
|definition|[VersionDefinition](#schemaversiondefinition)|false|none|none|
|detailed_tracing|boolean|false|none|none|
|disable_quota|boolean|false|none|none|
|disable_rate_limit|boolean|false|none|none|
|do_not_track|boolean|false|none|none|
|domain|string|false|none|none|
|domain_disabled|boolean|false|none|none|
|dont_set_quota_on_create|boolean|false|none|none|
|enable_batch_request_support|boolean|false|none|none|
|enable_context_vars|boolean|false|none|none|
|enable_coprocess_auth|boolean|false|none|none|
|enable_detailed_recording|boolean|false|none|none|
|enable_ip_blacklisting|boolean|false|none|none|
|enable_ip_whitelisting|boolean|false|none|none|
|enable_jwt|boolean|false|none|none|
|enable_proxy_protocol|boolean|false|none|none|
|enable_signature_checking|boolean|false|none|none|
|event_handlers|[EventHandlerMetaConfig](#schemaeventhandlermetaconfig)|false|none|none|
|expiration|string|false|none|none|
|expire_analytics_after|integer|false|none|none|
|external_oauth|[ExternalOAuth](#schemaexternaloauth)|false|none|none|
|global_rate_limit|[GlobalRateLimit](#schemaglobalratelimit)|false|none|none|
|graphql|[GraphQLConfig](#schemagraphqlconfig)|false|none|none|
|hmac_allowed_algorithms|[string]|false|none|none|
|hmac_allowed_clock_skew|number|false|none|none|
|id|string|false|none|none|
|idp_client_id_mapping_disabled|boolean|false|none|none|
|internal|boolean|false|none|none|
|is_oas|boolean|false|none|none|
|jwt_client_base_field|string|false|none|none|
|jwt_default_policies|[string]|false|none|none|
|jwt_expires_at_validation_skew|integer|false|none|none|
|jwt_identity_base_field|string|false|none|none|
|jwt_issued_at_validation_skew|integer|false|none|none|
|jwt_not_before_validation_skew|integer|false|none|none|
|jwt_policy_field_name|string|false|none|none|
|jwt_scope_claim_name|string|false|none|none|
|jwt_scope_to_policy_mapping|object \| null|false|none|none|
|jwt_signing_method|string|false|none|none|
|jwt_skip_kid|boolean|false|none|none|
|jwt_source|string|false|none|none|
|listen_port|integer|false|none|none|
|name|string|false|none|none|
|notifications|[NotificationsManager](#schemanotificationsmanager)|false|none|none|
|oauth_meta|object|false|none|none|
|openid_options|[OpenIDOptions](#schemaopenidoptions)|false|none|none|
|org_id|string|false|none|none|
|pinned_public_keys|object \| null|false|none|none|
|protocol|string|false|none|none|
|proxy|[ProxyConfig](#schemaproxyconfig)|false|none|none|
|request_signing|[RequestSigningMeta](#schemarequestsigningmeta)|false|none|none|
|response_processors|[[ResponseProcessor](#schemaresponseprocessor)]|false|none|none|
|scopes|[Scopes](#schemascopes)|false|none|none|
|session_lifetime|integer|false|none|none|
|session_lifetime_respects_key_expiration|boolean|false|none|none|
|session_provider|[SessionProviderMeta](#schemasessionprovidermeta)|false|none|none|
|slug|string|false|none|none|
|strip_auth_data|boolean|false|none|none|
|tag_headers|[string]|false|none|none|
|tags|[string]|false|none|none|
|tags_disabled|boolean|false|none|none|
|upstream_certificates|object \| null|false|none|none|
|upstream_certificates_disabled|boolean|false|none|none|
|uptime_tests|[UptimeTests](#schemauptimetests)|false|none|none|
|use_basic_auth|boolean|false|none|none|
|use_go_plugin_auth|boolean|false|none|none|
|use_keyless|boolean|false|none|none|
|use_mutual_tls_auth|boolean|false|none|none|
|use_oauth2|boolean|false|none|none|
|use_openid|boolean|false|none|none|
|use_standard_auth|boolean|false|none|none|
|version_data|[VersionData](#schemaversiondata)|false|none|none|
|error_overrides|object \| null|false|none|none|
|error_overrides_disabled|boolean|false|none|none|

<h2 id="tocS_APILimit">APILimit</h2>
<!-- backwards compatibility -->
<a id="schemaapilimit"></a>
<a id="schema_APILimit"></a>
<a id="tocSapilimit"></a>
<a id="tocsapilimit"></a>

```json
{
  "max_query_depth": 0,
  "per": 0,
  "quota_max": 0,
  "quota_remaining": 0,
  "quota_renewal_rate": 0,
  "quota_renews": 0,
  "rate": 0,
  "smoothing": {
    "delay": 0,
    "enabled": true,
    "step": 0,
    "threshold": 0,
    "trigger": 0
  },
  "throttle_interval": 0,
  "throttle_retry_limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_query_depth|integer|false|none|none|
|per|number|false|none|none|
|quota_max|integer|false|none|none|
|quota_remaining|integer|false|none|none|
|quota_renewal_rate|integer|false|none|none|
|quota_renews|integer|false|none|none|
|rate|number|false|none|none|
|smoothing|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|none|
|throttle_interval|number|false|none|none|
|throttle_retry_limit|integer|false|none|none|

<h2 id="tocS_AccessDefinition">AccessDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdefinition"></a>
<a id="schema_AccessDefinition"></a>
<a id="tocSaccessdefinition"></a>
<a id="tocsaccessdefinition"></a>

```json
{
  "allowance_scope": "d371b83b249845a2497ab9a947fd6210",
  "allowed_types": [
    {
      "fields": [
        "string"
      ],
      "name": "string"
    }
  ],
  "allowed_urls": [
    {
      "conditions": [
        {
          "on": "all",
          "options": {
            "body_field_matches": [
              {
                "match_rx": "^[0-9]+$",
                "path": "customer.id"
              }
            ],
            "header_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            },
            "path_part_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            },
            "payload_matches": {
              "match_rx": "string",
              "reverse": true
            },
            "query_val_matches": {
              "persnbr": {
                "match_rx": "",
                "reverse": true
              }
            },
            "request_context_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            },
            "session_meta_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            }
          }
        }
      ],
      "methods": [
        "GET",
        "POST",
        "DELETE",
        "PUT"
      ],
      "url": "anything/rate-limit-1-per-5"
    }
  ],
  "api_id": "d1dfc6a927a046c54c0ed470f19757cc",
  "api_name": "Rate Limit Proxy API",
  "disable_introspection": false,
  "endpoints": [
    {
      "methods": [
        {
          "limit": {
            "per": 0,
            "rate": 0,
            "smoothing": {
              "delay": 0,
              "enabled": true,
              "step": 0,
              "threshold": 0,
              "trigger": 0
            }
          },
          "name": "string"
        }
      ],
      "path": "string"
    }
  ],
  "field_access_rights": [
    {
      "field_name": "string",
      "limits": {
        "max_query_depth": 0
      },
      "type_name": "string"
    }
  ],
  "limit": {
    "max_query_depth": 0,
    "per": 0,
    "quota_max": 0,
    "quota_remaining": 0,
    "quota_renewal_rate": 0,
    "quota_renews": 0,
    "rate": 0,
    "smoothing": {
      "delay": 0,
      "enabled": true,
      "step": 0,
      "threshold": 0,
      "trigger": 0
    },
    "throttle_interval": 0,
    "throttle_retry_limit": 0
  },
  "restricted_types": [
    {
      "fields": [
        "string"
      ],
      "name": "string"
    }
  ],
  "versions": [
    "Default",
    "v2"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowance_scope|string|false|none|none|
|allowed_types|[[GraphqlType](#schemagraphqltype)]|false|none|none|
|allowed_urls|[[AccessSpec](#schemaaccessspec)]|false|none|none|
|api_id|string|false|none|none|
|api_name|string|false|none|none|
|disable_introspection|boolean|false|none|none|
|endpoints|[Endpoints](#schemaendpoints)|false|none|none|
|field_access_rights|[[FieldAccessDefinition](#schemafieldaccessdefinition)]|false|none|none|
|limit|[APILimit](#schemaapilimit)|false|none|none|
|restricted_types|[[GraphqlType](#schemagraphqltype)]|false|none|none|
|versions|[string]|false|none|none|

<h2 id="tocS_AccessCondition">AccessCondition</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscondition"></a>
<a id="schema_AccessCondition"></a>
<a id="tocSaccesscondition"></a>
<a id="tocsaccesscondition"></a>

```json
{
  "on": "all",
  "options": {
    "body_field_matches": [
      {
        "match_rx": "^[0-9]+$",
        "path": "customer.id"
      }
    ],
    "header_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    },
    "path_part_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    },
    "payload_matches": {
      "match_rx": "string",
      "reverse": true
    },
    "query_val_matches": {
      "persnbr": {
        "match_rx": "",
        "reverse": true
      }
    },
    "request_context_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    },
    "session_meta_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    }
  }
}
```

An additional constraint that a request has to satisfy before the enclosing access spec grants access.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|on|string|false|none|How the options combine. "all" requires every configured option to match, "any" requires just one. Empty means "all".|
|options|[AccessConditionOptions](#schemaaccessconditionoptions)|false|none|The matches an access condition evaluates. A match with an empty match_rx and reverse set to true requires the name to be absent.|

#### Enumerated Values

|Property|Value|
|---|---|
|on|all|
|on|any|
|on|""|

<h2 id="tocS_AccessConditionOptions">AccessConditionOptions</h2>
<!-- backwards compatibility -->
<a id="schemaaccessconditionoptions"></a>
<a id="schema_AccessConditionOptions"></a>
<a id="tocSaccessconditionoptions"></a>
<a id="tocsaccessconditionoptions"></a>

```json
{
  "body_field_matches": [
    {
      "match_rx": "^[0-9]+$",
      "path": "customer.id"
    }
  ],
  "header_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  },
  "path_part_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  },
  "payload_matches": {
    "match_rx": "string",
    "reverse": true
  },
  "query_val_matches": {
    "persnbr": {
      "match_rx": "",
      "reverse": true
    }
  },
  "request_context_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  },
  "session_meta_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  }
}
```

The matches an access condition evaluates. A match with an empty match_rx and reverse set to true requires the name to be absent.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body_field_matches|[[BodyFieldMatch](#schemabodyfieldmatch)]|false|none|Matches on fields of a JSON request body. Each names its field by path in gjson syntax, e.g. "customer.id", and one path can carry several rules. Paths are case sensitive. A body that is not valid JSON, or that repeats a key within an object (in any case), fails the match. Every element of an array field has to match; a path through an array such as "items.#.sku" skips elements that do not have the field.|
|header_matches|object \| null|false|none|Matches on request headers, keyed by header name.|
|path_part_matches|object \| null|false|none|Matches on segments of the request path, keyed by rule name.|
|payload_matches|[StringRegexMap](#schemastringregexmap)|false|none|none|
|query_val_matches|object \| null|false|none|Matches on query string parameters, keyed by parameter name.|
|request_context_matches|object \| null|false|none|Matches on values set on the request by earlier middleware, keyed by name.|
|session_meta_matches|object \| null|false|none|Matches on the session's metadata, keyed by metadata key.|

<h2 id="tocS_BodyFieldMatch">BodyFieldMatch</h2>
<!-- backwards compatibility -->
<a id="schemabodyfieldmatch"></a>
<a id="schema_BodyFieldMatch"></a>
<a id="tocSbodyfieldmatch"></a>
<a id="tocsbodyfieldmatch"></a>

```json
{
  "match_rx": "string",
  "path": "string",
  "reverse": true
}
```

A rule applied to one field of a JSON request body.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_rx|string|false|none|The regular expression the field's values are matched against. Empty places no constraint on the value.|
|path|string|false|none|The field's path in gjson syntax, e.g. "customer.id".|
|reverse|boolean|false|none|Inverts the rule. With an empty match_rx, the field must be absent.|

<h2 id="tocS_AccessSpec">AccessSpec</h2>
<!-- backwards compatibility -->
<a id="schemaaccessspec"></a>
<a id="schema_AccessSpec"></a>
<a id="tocSaccessspec"></a>
<a id="tocsaccessspec"></a>

```json
{
  "conditions": [
    {
      "on": "all",
      "options": {
        "body_field_matches": [
          {
            "match_rx": "^[0-9]+$",
            "path": "customer.id"
          }
        ],
        "header_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        },
        "path_part_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        },
        "payload_matches": {
          "match_rx": "string",
          "reverse": true
        },
        "query_val_matches": {
          "persnbr": {
            "match_rx": "",
            "reverse": true
          }
        },
        "request_context_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        },
        "session_meta_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        }
      }
    }
  ],
  "methods": [
    "GET",
    "POST",
    "DELETE",
    "PUT"
  ],
  "url": "anything/rate-limit-1-per-5"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conditions|[[AccessCondition](#schemaaccesscondition)]|false|none|Further restrict the matched URL. Every condition has to be satisfied for access to be granted.|
|methods|[string]|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_Allowance">Allowance</h2>
<!-- backwards compatibility -->
<a id="schemaallowance"></a>
<a id="schema_Allowance"></a>
<a id="tocSallowance"></a>
<a id="tocsallowance"></a>

```json
{
  "enabled": true,
  "ignoreCase": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|ignoreCase|boolean|false|none|none|

<h2 id="tocS_AnalyticsPluginConfig">AnalyticsPluginConfig</h2>
<!-- backwards compatibility -->
<a id="schemaanalyticspluginconfig"></a>
<a id="schema_AnalyticsPluginConfig"></a>
<a id="tocSanalyticspluginconfig"></a>
<a id="tocsanalyticspluginconfig"></a>

```json
{
  "enable": true,
  "func_name": "string",
  "plugin_path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable|boolean|false|none|none|
|func_name|string|false|none|none|
|plugin_path|string|false|none|none|

<h2 id="tocS_ApiAllKeys">ApiAllKeys</h2>
<!-- backwards compatibility -->
<a id="schemaapiallkeys"></a>
<a id="schema_ApiAllKeys"></a>
<a id="tocSapiallkeys"></a>
<a id="tocsapiallkeys"></a>

```json
{
  "keys": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[string]|false|none|none|

<h2 id="tocS_ApiModifyKeySuccess">ApiModifyKeySuccess</h2>
<!-- backwards compatibility -->
<a id="schemaapimodifykeysuccess"></a>
<a id="schema_ApiModifyKeySuccess"></a>
<a id="tocSapimodifykeysuccess"></a>
<a id="tocsapimodifykeysuccess"></a>

```json
{
  "action": "modified",
  "key": "b13d928b9972bd18",
  "key_hash": "string",
  "status": "ok"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|key|string|false|none|none|
|key_hash|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_ApiStatusMessage">ApiStatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemaapistatusmessage"></a>
<a id="schema_ApiStatusMessage"></a>
<a id="tocSapistatusmessage"></a>
<a id="tocsapistatusmessage"></a>

```json
{
  "message": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_AuthConfig">AuthConfig</h2>
<!-- backwards compatibility -->
<a id="schemaauthconfig"></a>
<a id="schema_AuthConfig"></a>
<a id="tocSauthconfig"></a>
<a id="tocsauthconfig"></a>

```json
{
  "auth_header_name": "Authorization",
  "cookie_name": "string",
  "disable_header": true,
  "name": "string",
  "param_name": "string",
  "signature": {
    "algorithm": "string",
    "allowed_clock_skew": 0,
    "error_code": 0,
    "error_message": "string",
    "header": "string",
    "param_name": "string",
    "secret": "string",
    "use_param": true
  },
  "use_certificate": true,
  "use_cookie": true,
  "use_param": true,
  "validate_signature": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_header_name|string|false|none|none|
|cookie_name|string|false|none|none|
|disable_header|boolean|false|none|none|
|name|string|false|none|none|
|param_name|string|false|none|none|
|signature|[SignatureConfig](#schemasignatureconfig)|false|none|none|
|use_certificate|boolean|false|none|none|
|use_cookie|boolean|false|none|none|
|use_param|boolean|false|none|none|
|validate_signature|boolean|false|none|none|

<h2 id="tocS_AuthProviderMeta">AuthProviderMeta</h2>
<!-- backwards compatibility -->
<a id="schemaauthprovidermeta"></a>
<a id="schema_AuthProviderMeta"></a>
<a id="tocSauthprovidermeta"></a>
<a id="tocsauthprovidermeta"></a>

```json
{
  "meta": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "storage_engine": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object \| null|false|none|none|
|name|string|false|none|none|
|storage_engine|string|false|none|none|

<h2 id="tocS_AuthSource">AuthSource</h2>
<!-- backwards compatibility -->
<a id="schemaauthsource"></a>
<a id="schema_AuthSource"></a>
<a id="tocSauthsource"></a>
<a id="tocsauthsource"></a>

```json
{
  "enabled": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_AuthSources">AuthSources</h2>
<!-- backwards compatibility -->
<a id="schemaauthsources"></a>
<a id="schema_AuthSources"></a>
<a id="tocSauthsources"></a>
<a id="tocsauthsources"></a>

```json
{
  "cookie": {
    "enabled": true,
    "name": "string"
  },
  "header": {
    "enabled": true,
    "name": "string"
  },
  "query": {
    "enabled": true,
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cookie|[AuthSource](#schemaauthsource)|false|none|none|
|header|[AuthSource](#schemaauthsource)|false|none|none|
|query|[AuthSource](#schemaauthsource)|false|none|none|

<h2 id="tocS_Authentication">Authentication</h2>
<!-- backwards compatibility -->
<a id="schemaauthentication"></a>
<a id="schema_Authentication"></a>
<a id="tocSauthentication"></a>
<a id="tocsauthentication"></a>

```json
{
  "baseIdentityProvider": "string",
  "custom": {
    "AuthSources": {
      "cookie": {
        "enabled": true,
        "name": "string"
      },
      "header": {
        "enabled": true,
        "name": "string"
      },
      "query": {
        "enabled": true,
        "name": "string"
      }
    },
    "config": {
      "enabled": true,
      "functionName": "string",
      "idExtractor": {
        "config": {
          "formParamName": "string",
          "headerName": "string",
          "regexp": "string",
          "regexpMatchIndex": 0,
          "xPathExp": "string"
        },
        "enabled": true,
        "source": "string",
        "with": "string"
      },
      "path": "string",
      "rawBodyOnly": true
    },
    "enabled": true
  },
  "enabled": true,
  "hmac": {
    "AuthSources": {
      "cookie": {
        "enabled": true,
        "name": "string"
      },
      "header": {
        "enabled": true,
        "name": "string"
      },
      "query": {
        "enabled": true,
        "name": "string"
      }
    },
    "allowedAlgorithms": [
      "string"
    ],
    "allowedClockSkew": 0,
    "enabled": true
  },
  "oidc": {
    "AuthSources": {
      "cookie": {
        "enabled": true,
        "name": "string"
      },
      "header": {
        "enabled": true,
        "name": "string"
      },
      "query": {
        "enabled": true,
        "name": "string"
      }
    },
    "enabled": true,
    "providers": [
      {
        "clientToPolicyMapping": [
          {
            "clientId": "string",
            "policyId": "string"
          }
        ],
        "issuer": "string"
      }
    ],
    "scopes": {
      "claimName": "string",
      "scopeToPolicyMapping": [
        {
          "policyId": "string",
          "scope": "string"
        }
      ]
    },
    "segregateByClientId": true
  },
  "securitySchemes": {
    "property1": null,
    "property2": null
  },
  "stripAuthorizationData": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|baseIdentityProvider|string|false|none|none|
|custom|[CustomPluginAuthentication](#schemacustompluginauthentication)|false|none|none|
|enabled|boolean|false|none|none|
|hmac|[HMAC](#schemahmac)|false|none|none|
|oidc|[OIDC](#schemaoidc)|false|none|none|
|securitySchemes|[SecuritySchemes](#schemasecurityschemes)|false|none|none|
|stripAuthorizationData|boolean|false|none|none|

<h2 id="tocS_AuthenticationPlugin">AuthenticationPlugin</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationplugin"></a>
<a id="schema_AuthenticationPlugin"></a>
<a id="tocSauthenticationplugin"></a>
<a id="tocsauthenticationplugin"></a>

```json
{
  "enabled": true,
  "functionName": "string",
  "idExtractor": {
    "config": {
      "formParamName": "string",
      "headerName": "string",
      "regexp": "string",
      "regexpMatchIndex": 0,
      "xPathExp": "string"
    },
    "enabled": true,
    "source": "string",
    "with": "string"
  },
  "path": "string",
  "rawBodyOnly": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|functionName|string|false|none|none|
|idExtractor|[IDExtractor](#schemaidextractor)|false|none|none|
|path|string|false|none|none|
|rawBodyOnly|boolean|false|none|none|

<h2 id="tocS_BasicAuthData">BasicAuthData</h2>
<!-- backwards compatibility -->
<a id="schemabasicauthdata"></a>
<a id="schema_BasicAuthData"></a>
<a id="tocSbasicauthdata"></a>
<a id="tocsbasicauthdata"></a>

```json
{
  "hash_type": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hash_type|string|false|none|none|
|password|string|false|none|none|

<h2 id="tocS_BatchReplyUnit">BatchReplyUnit</h2>
<!-- backwards compatibility -->
<a id="schemabatchreplyunit"></a>
<a id="schema_BatchReplyUnit"></a>
<a id="tocSbatchreplyunit"></a>
<a id="tocsbatchreplyunit"></a>

```json
{
  "body": "string",
  "code": 0,
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "relative_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|code|integer|false|none|none|
|headers|[HttpHeader](#schemahttpheader)|false|none|none|
|relative_url|string|false|none|none|

<h2 id="tocS_BatchRequestStructure">BatchRequestStructure</h2>
<!-- backwards compatibility -->
<a id="schemabatchrequeststructure"></a>
<a id="schema_BatchRequestStructure"></a>
<a id="tocSbatchrequeststructure"></a>
<a id="tocsbatchrequeststructure"></a>

```json
{
  "requests": [
    {
      "body": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "method": "string",
      "relative_url": "string"
    }
  ],
  "suppress_parallel_execution": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requests|[[RequestDefinition](#schemarequestdefinition)]|false|none|none|
|suppress_parallel_execution|boolean|false|none|none|

<h2 id="tocS_RequestDefinition">RequestDefinition</h2>
<!-- backwards compatibility -->
<a id="schemarequestdefinition"></a>
<a id="schema_RequestDefinition"></a>
<a id="tocSrequestdefinition"></a>
<a id="tocsrequestdefinition"></a>

```json
{
  "body": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "method": "string",
  "relative_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|headers|object \| null|false|none|none|
|method|string|false|none|none|
|relative_url|string|false|none|none|

<h2 id="tocS_BooleanQueryParam">BooleanQueryParam</h2>
<!-- backwards compatibility -->
<a id="schemabooleanqueryparam"></a>
<a id="schema_BooleanQueryParam"></a>
<a id="tocSbooleanqueryparam"></a>
<a id="tocsbooleanqueryparam"></a>

```json
true
```

<h2 id="tocS_CORS">CORS</h2>
<!-- backwards compatibility -->
<a id="schemacors"></a>
<a id="schema_CORS"></a>
<a id="tocScors"></a>
<a id="tocscors"></a>

```json
{
  "allowCredentials": true,
  "allowedHeaders": [
    "string"
  ],
  "allowedMethods": [
    "string"
  ],
  "allowedOrigins": [
    "string"
  ],
  "debug": true,
  "enabled": true,
  "exposedHeaders": [
    "string"
  ],
  "maxAge": 0,
  "optionsPassthrough": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowCredentials|boolean|false|none|none|
|allowedHeaders|[string]|false|none|none|
|allowedMethods|[string]|false|none|none|
|allowedOrigins|[string]|false|none|none|
|debug|boolean|false|none|none|
|enabled|boolean|false|none|none|
|exposedHeaders|[string]|false|none|none|
|maxAge|integer|false|none|none|
|optionsPassthrough|boolean|false|none|none|

<h2 id="tocS_CORSConfig">CORSConfig</h2>
<!-- backwards compatibility -->
<a id="schemacorsconfig"></a>
<a id="schema_CORSConfig"></a>
<a id="tocScorsconfig"></a>
<a id="tocscorsconfig"></a>

```json
{
  "allow_credentials": false,
  "allowed_headers": [
    "Origin",
    "Accept",
    "Content-Type",
    "Authorization"
  ],
  "allowed_methods": [
    "GET",
    "HEAD",
    "POST"
  ],
  "allowed_origins": [
    "https://*.foo.com"
  ],
  "debug": true,
  "enable": false,
  "exposed_headers": [
    "Accept",
    "Content-Type"
  ],
  "max_age": 24,
  "options_passthrough": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow_credentials|boolean|false|none|none|
|allowed_headers|[string]|false|none|none|
|allowed_methods|[string]|false|none|none|
|allowed_origins|[string]|false|none|none|
|debug|boolean|false|none|none|
|enable|boolean|false|none|none|
|exposed_headers|[string]|false|none|none|
|max_age|integer|false|none|none|
|options_passthrough|boolean|false|none|none|

<h2 id="tocS_Cache">Cache</h2>
<!-- backwards compatibility -->
<a id="schemacache"></a>
<a id="schema_Cache"></a>
<a id="tocScache"></a>
<a id="tocscache"></a>

```json
{
  "cacheAllSafeRequests": true,
  "cacheByHeaders": [
    "string"
  ],
  "cacheResponseCodes": [
    0
  ],
  "controlTTLHeaderName": "string",
  "enableUpstreamCacheControl": true,
  "enabled": true,
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheAllSafeRequests|boolean|false|none|none|
|cacheByHeaders|[string]|false|none|none|
|cacheResponseCodes|[integer]|false|none|none|
|controlTTLHeaderName|string|false|none|none|
|enableUpstreamCacheControl|boolean|false|none|none|
|enabled|boolean|false|none|none|
|timeout|integer|false|none|none|

<h2 id="tocS_CacheMeta">CacheMeta</h2>
<!-- backwards compatibility -->
<a id="schemacachemeta"></a>
<a id="schema_CacheMeta"></a>
<a id="tocScachemeta"></a>
<a id="tocscachemeta"></a>

```json
{
  "cache_key_regex": "string",
  "cache_response_codes": [
    0
  ],
  "disabled": true,
  "method": "string",
  "path": "string",
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_key_regex|string|false|none|none|
|cache_response_codes|[integer]|false|none|none|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|timeout|integer(int64)|false|none|none|

<h2 id="tocS_CacheOptions">CacheOptions</h2>
<!-- backwards compatibility -->
<a id="schemacacheoptions"></a>
<a id="schema_CacheOptions"></a>
<a id="tocScacheoptions"></a>
<a id="tocscacheoptions"></a>

```json
{
  "cache_all_safe_requests": false,
  "cache_by_headers": [
    "string"
  ],
  "cache_control_ttl_header": "string",
  "cache_response_codes": [
    0
  ],
  "cache_timeout": 60,
  "enable_cache": true,
  "enable_upstream_cache_control": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_all_safe_requests|boolean|false|none|none|
|cache_by_headers|[string]|false|none|none|
|cache_control_ttl_header|string|false|none|none|
|cache_response_codes|[integer]|false|none|none|
|cache_timeout|integer(int64)|false|none|none|
|enable_cache|boolean|false|none|none|
|enable_upstream_cache_control|boolean|false|none|none|

<h2 id="tocS_CachePlugin">CachePlugin</h2>
<!-- backwards compatibility -->
<a id="schemacacheplugin"></a>
<a id="schema_CachePlugin"></a>
<a id="tocScacheplugin"></a>
<a id="tocscacheplugin"></a>

```json
{
  "cacheByRegex": "string",
  "cacheResponseCodes": [
    0
  ],
  "enabled": true,
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cacheByRegex|string|false|none|none|
|cacheResponseCodes|[integer]|false|none|none|
|enabled|boolean|false|none|none|
|timeout|integer|false|none|none|

<h2 id="tocS_CertificatePinning">CertificatePinning</h2>
<!-- backwards compatibility -->
<a id="schemacertificatepinning"></a>
<a id="schema_CertificatePinning"></a>
<a id="tocScertificatepinning"></a>
<a id="tocscertificatepinning"></a>

```json
{
  "domainToPublicKeysMapping": [
    {
      "domain": "string",
      "publicKeys": [
        "string"
      ]
    }
  ],
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainToPublicKeysMapping|[PinnedPublicKeys](#schemapinnedpublickeys)|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_CertsCertificateBasics">CertsCertificateBasics</h2>
<!-- backwards compatibility -->
<a id="schemacertscertificatebasics"></a>
<a id="schema_CertsCertificateBasics"></a>
<a id="tocScertscertificatebasics"></a>
<a id="tocscertscertificatebasics"></a>

```json
{
  "dns_names": [
    "string"
  ],
  "has_private": true,
  "id": "string",
  "is_ca": true,
  "issuer_cn": "string",
  "not_after": "1970-01-01T00:00:00Z",
  "not_before": "1970-01-01T00:00:00Z",
  "subject_cn": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dns_names|[string]|false|none|none|
|has_private|boolean|false|none|none|
|id|string|false|none|none|
|is_ca|boolean|false|none|none|
|issuer_cn|string|false|none|none|
|not_after|string(date-time)|false|none|none|
|not_before|string(date-time)|false|none|none|
|subject_cn|string|false|none|none|

<h2 id="tocS_CertsCertificateMeta">CertsCertificateMeta</h2>
<!-- backwards compatibility -->
<a id="schemacertscertificatemeta"></a>
<a id="schema_CertsCertificateMeta"></a>
<a id="tocScertscertificatemeta"></a>
<a id="tocscertscertificatemeta"></a>

```json
{
  "dns_names": [
    ".*tyk.io"
  ],
  "fingerprint": "7c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90",
  "has_private": false,
  "id": "5e9d9544a1dcd60001d0ed207c440d66ebb0a4629d21329808dce9091acf5f2fde328067a6e60e5347271d90",
  "is_ca": true,
  "issuer": {},
  "not_after": "2034-03-26T08:46:37Z",
  "not_before": "2024-03-25T08:46:37Z",
  "subject": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dns_names|[string]|false|none|none|
|fingerprint|string|false|none|none|
|has_private|boolean|false|none|none|
|id|string|false|none|none|
|is_ca|boolean|false|none|none|
|issuer|[PkixName](#schemapkixname)|false|none|none|
|not_after|string(date-time)|false|none|none|
|not_before|string(date-time)|false|none|none|
|subject|[PkixName](#schemapkixname)|false|none|none|

<h2 id="tocS_CheckCommand">CheckCommand</h2>
<!-- backwards compatibility -->
<a id="schemacheckcommand"></a>
<a id="schema_CheckCommand"></a>
<a id="tocScheckcommand"></a>
<a id="tocscheckcommand"></a>

```json
{
  "message": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_CircuitBreaker">CircuitBreaker</h2>
<!-- backwards compatibility -->
<a id="schemacircuitbreaker"></a>
<a id="schema_CircuitBreaker"></a>
<a id="tocScircuitbreaker"></a>
<a id="tocscircuitbreaker"></a>

```json
{
  "coolDownPeriod": 0,
  "enabled": true,
  "halfOpenStateEnabled": true,
  "sampleSize": 0,
  "threshold": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coolDownPeriod|integer|false|none|none|
|enabled|boolean|false|none|none|
|halfOpenStateEnabled|boolean|false|none|none|
|sampleSize|integer|false|none|none|
|threshold|number|false|none|none|

<h2 id="tocS_CircuitBreakerMeta">CircuitBreakerMeta</h2>
<!-- backwards compatibility -->
<a id="schemacircuitbreakermeta"></a>
<a id="schema_CircuitBreakerMeta"></a>
<a id="tocScircuitbreakermeta"></a>
<a id="tocscircuitbreakermeta"></a>

```json
{
  "disable_half_open_state": true,
  "disabled": true,
  "method": "string",
  "path": "string",
  "return_to_service_after": 0,
  "samples": 0,
  "threshold_percent": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disable_half_open_state|boolean|false|none|none|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|return_to_service_after|integer|false|none|none|
|samples|integer(int64)|false|none|none|
|threshold_percent|number|false|none|none|

<h2 id="tocS_ClientCertificates">ClientCertificates</h2>
<!-- backwards compatibility -->
<a id="schemaclientcertificates"></a>
<a id="schema_ClientCertificates"></a>
<a id="tocSclientcertificates"></a>
<a id="tocsclientcertificates"></a>

```json
{
  "allowlist": [
    "string"
  ],
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowlist|[string]|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_ClientToPolicy">ClientToPolicy</h2>
<!-- backwards compatibility -->
<a id="schemaclienttopolicy"></a>
<a id="schema_ClientToPolicy"></a>
<a id="tocSclienttopolicy"></a>
<a id="tocsclienttopolicy"></a>

```json
{
  "clientId": "string",
  "policyId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientId|string|false|none|none|
|policyId|string|false|none|none|

<h2 id="tocS_ContextVariables">ContextVariables</h2>
<!-- backwards compatibility -->
<a id="schemacontextvariables"></a>
<a id="schema_ContextVariables"></a>
<a id="tocScontextvariables"></a>
<a id="tocscontextvariables"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_CustomPlugin">CustomPlugin</h2>
<!-- backwards compatibility -->
<a id="schemacustomplugin"></a>
<a id="schema_CustomPlugin"></a>
<a id="tocScustomplugin"></a>
<a id="tocscustomplugin"></a>

```json
{
  "enabled": true,
  "functionName": "string",
  "path": "string",
  "rawBodyOnly": true,
  "requireSession": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|functionName|string|false|none|none|
|path|string|false|none|none|
|rawBodyOnly|boolean|false|none|none|
|requireSession|boolean|false|none|none|

<h2 id="tocS_CustomPluginAuthentication">CustomPluginAuthentication</h2>
<!-- backwards compatibility -->
<a id="schemacustompluginauthentication"></a>
<a id="schema_CustomPluginAuthentication"></a>
<a id="tocScustompluginauthentication"></a>
<a id="tocscustompluginauthentication"></a>

```json
{
  "AuthSources": {
    "cookie": {
      "enabled": true,
      "name": "string"
    },
    "header": {
      "enabled": true,
      "name": "string"
    },
    "query": {
      "enabled": true,
      "name": "string"
    }
  },
  "config": {
    "enabled": true,
    "functionName": "string",
    "idExtractor": {
      "config": {
        "formParamName": "string",
        "headerName": "string",
        "regexp": "string",
        "regexpMatchIndex": 0,
        "xPathExp": "string"
      },
      "enabled": true,
      "source": "string",
      "with": "string"
    },
    "path": "string",
    "rawBodyOnly": true
  },
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthSources|[AuthSources](#schemaauthsources)|false|none|none|
|config|[AuthenticationPlugin](#schemaauthenticationplugin)|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_CustomPlugins">CustomPlugins</h2>
<!-- backwards compatibility -->
<a id="schemacustomplugins"></a>
<a id="schema_CustomPlugins"></a>
<a id="tocScustomplugins"></a>
<a id="tocscustomplugins"></a>

```json
[
  {
    "enabled": true,
    "functionName": "string",
    "path": "string",
    "rawBodyOnly": true,
    "requireSession": true
  }
]
```

<h2 id="tocS_DatasourceMappingConfiguration">DatasourceMappingConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcemappingconfiguration"></a>
<a id="schema_DatasourceMappingConfiguration"></a>
<a id="tocSdatasourcemappingconfiguration"></a>
<a id="tocsdatasourcemappingconfiguration"></a>

```json
{
  "disabled": true,
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_DatasourceSourceConfig">DatasourceSourceConfig</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcesourceconfig"></a>
<a id="schema_DatasourceSourceConfig"></a>
<a id="tocSdatasourcesourceconfig"></a>
<a id="tocsdatasourcesourceconfig"></a>

```json
{
  "data_source_config": null,
  "kind": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_source_config|object|false|none|none|
|kind|string|false|none|none|

<h2 id="tocS_DatasourceTypeFieldConfiguration">DatasourceTypeFieldConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemadatasourcetypefieldconfiguration"></a>
<a id="schema_DatasourceTypeFieldConfiguration"></a>
<a id="tocSdatasourcetypefieldconfiguration"></a>
<a id="tocsdatasourcetypefieldconfiguration"></a>

```json
{
  "data_source": {
    "data_source_config": null,
    "kind": "string"
  },
  "field_name": "string",
  "mapping": {
    "disabled": true,
    "path": "string"
  },
  "type_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_source|[DatasourceSourceConfig](#schemadatasourcesourceconfig)|false|none|none|
|field_name|string|false|none|none|
|mapping|[DatasourceMappingConfiguration](#schemadatasourcemappingconfiguration)|false|none|none|
|type_name|string|false|none|none|

<h2 id="tocS_DetailedActivityLogs">DetailedActivityLogs</h2>
<!-- backwards compatibility -->
<a id="schemadetailedactivitylogs"></a>
<a id="schema_DetailedActivityLogs"></a>
<a id="tocSdetailedactivitylogs"></a>
<a id="tocsdetailedactivitylogs"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_DetailedTracing">DetailedTracing</h2>
<!-- backwards compatibility -->
<a id="schemadetailedtracing"></a>
<a id="schema_DetailedTracing"></a>
<a id="tocSdetailedtracing"></a>
<a id="tocsdetailedtracing"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_Domain">Domain</h2>
<!-- backwards compatibility -->
<a id="schemadomain"></a>
<a id="schema_Domain"></a>
<a id="tocSdomain"></a>
<a id="tocsdomain"></a>

```json
{
  "certificates": [
    "string"
  ],
  "enabled": true,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificates|[string]|false|none|none|
|enabled|boolean|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_DomainToCertificate">DomainToCertificate</h2>
<!-- backwards compatibility -->
<a id="schemadomaintocertificate"></a>
<a id="schema_DomainToCertificate"></a>
<a id="tocSdomaintocertificate"></a>
<a id="tocsdomaintocertificate"></a>

```json
{
  "certificate": "string",
  "domain": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|false|none|none|
|domain|string|false|none|none|

<h2 id="tocS_ErrorMatcher">ErrorMatcher</h2>
<!-- backwards compatibility -->
<a id="schemaerrormatcher"></a>
<a id="schema_ErrorMatcher"></a>
<a id="tocSerrormatcher"></a>
<a id="tocserrormatcher"></a>

```json
{
  "body_field": "string",
  "body_value": "string",
  "flag": "string",
  "message_pattern": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body_field|string|false|none|none|
|body_value|string|false|none|none|
|flag|string|false|none|none|
|message_pattern|string|false|none|none|

<h2 id="tocS_ErrorOverride">ErrorOverride</h2>
<!-- backwards compatibility -->
<a id="schemaerroroverride"></a>
<a id="schema_ErrorOverride"></a>
<a id="tocSerroroverride"></a>
<a id="tocserroroverride"></a>

```json
{
  "match": {
    "body_field": "string",
    "body_value": "string",
    "flag": "string",
    "message_pattern": "string"
  },
  "response": {
    "body": "string",
    "headers": {
      "property1": "string",
      "property2": "string"
    },
    "message": "string",
    "status_code": 0,
    "template": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match|[ErrorMatcher](#schemaerrormatcher)|false|none|none|
|response|[ErrorResponse](#schemaerrorresponse)|false|none|none|

<h2 id="tocS_ErrorResponse">ErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaerrorresponse"></a>
<a id="schema_ErrorResponse"></a>
<a id="tocSerrorresponse"></a>
<a id="tocserrorresponse"></a>

```json
{
  "body": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "message": "string",
  "status_code": 0,
  "template": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|headers|object \| null|false|none|none|
|message|string|false|none|none|
|status_code|integer|false|none|none|
|template|string|false|none|none|

<h2 id="tocS_EndPointMeta">EndPointMeta</h2>
<!-- backwards compatibility -->
<a id="schemaendpointmeta"></a>
<a id="schema_EndPointMeta"></a>
<a id="tocSendpointmeta"></a>
<a id="tocsendpointmeta"></a>

```json
{
  "disabled": true,
  "ignore_case": true,
  "method": "string",
  "method_actions": {
    "property1": {
      "action": "no_action",
      "code": 0,
      "data": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      }
    },
    "property2": {
      "action": "no_action",
      "code": 0,
      "data": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      }
    }
  },
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|ignore_case|boolean|false|none|none|
|method|string|false|none|none|
|method_actions|object|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_Endpoint">Endpoint</h2>
<!-- backwards compatibility -->
<a id="schemaendpoint"></a>
<a id="schema_Endpoint"></a>
<a id="tocSendpoint"></a>
<a id="tocsendpoint"></a>

```json
{
  "methods": [
    {
      "limit": {
        "per": 0,
        "rate": 0,
        "smoothing": {
          "delay": 0,
          "enabled": true,
          "step": 0,
          "threshold": 0,
          "trigger": 0
        }
      },
      "name": "string"
    }
  ],
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methods|[EndpointMethods](#schemaendpointmethods)|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_EndpointMethod">EndpointMethod</h2>
<!-- backwards compatibility -->
<a id="schemaendpointmethod"></a>
<a id="schema_EndpointMethod"></a>
<a id="tocSendpointmethod"></a>
<a id="tocsendpointmethod"></a>

```json
{
  "limit": {
    "per": 0,
    "rate": 0,
    "smoothing": {
      "delay": 0,
      "enabled": true,
      "step": 0,
      "threshold": 0,
      "trigger": 0
    }
  },
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|[RateLimitType2](#schemaratelimittype2)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_EndpointMethodMeta">EndpointMethodMeta</h2>
<!-- backwards compatibility -->
<a id="schemaendpointmethodmeta"></a>
<a id="schema_EndpointMethodMeta"></a>
<a id="tocSendpointmethodmeta"></a>
<a id="tocsendpointmethodmeta"></a>

```json
{
  "action": "no_action",
  "code": 0,
  "data": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|none|
|code|integer|false|none|none|
|data|string|false|none|none|
|headers|object \| null|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|no_action|
|action|reply|

<h2 id="tocS_EndpointMethods">EndpointMethods</h2>
<!-- backwards compatibility -->
<a id="schemaendpointmethods"></a>
<a id="schema_EndpointMethods"></a>
<a id="tocSendpointmethods"></a>
<a id="tocsendpointmethods"></a>

```json
[
  {
    "limit": {
      "per": 0,
      "rate": 0,
      "smoothing": {
        "delay": 0,
        "enabled": true,
        "step": 0,
        "threshold": 0,
        "trigger": 0
      }
    },
    "name": "string"
  }
]
```

<h2 id="tocS_EndpointPostPlugin">EndpointPostPlugin</h2>
<!-- backwards compatibility -->
<a id="schemaendpointpostplugin"></a>
<a id="schema_EndpointPostPlugin"></a>
<a id="tocSendpointpostplugin"></a>
<a id="tocsendpointpostplugin"></a>

```json
{
  "enabled": true,
  "functionName": "string",
  "name": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|functionName|string|false|none|none|
|name|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_EndpointPostPlugins">EndpointPostPlugins</h2>
<!-- backwards compatibility -->
<a id="schemaendpointpostplugins"></a>
<a id="schema_EndpointPostPlugins"></a>
<a id="tocSendpointpostplugins"></a>
<a id="tocsendpointpostplugins"></a>

```json
[
  {
    "enabled": true,
    "functionName": "string",
    "name": "string",
    "path": "string"
  }
]
```

<h2 id="tocS_Endpoints">Endpoints</h2>
<!-- backwards compatibility -->
<a id="schemaendpoints"></a>
<a id="schema_Endpoints"></a>
<a id="tocSendpoints"></a>
<a id="tocsendpoints"></a>

```json
[
  {
    "methods": [
      {
        "limit": {
          "per": 0,
          "rate": 0,
          "smoothing": {
            "delay": 0,
            "enabled": true,
            "step": 0,
            "threshold": 0,
            "trigger": 0
          }
        },
        "name": "string"
      }
    ],
    "path": "string"
  }
]
```

<h2 id="tocS_EnforceTimeout">EnforceTimeout</h2>
<!-- backwards compatibility -->
<a id="schemaenforcetimeout"></a>
<a id="schema_EnforceTimeout"></a>
<a id="tocSenforcetimeout"></a>
<a id="tocsenforcetimeout"></a>

```json
{
  "enabled": true,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|value|integer|false|none|none|

<h2 id="tocS_EventHandler">EventHandler</h2>
<!-- backwards compatibility -->
<a id="schemaeventhandler"></a>
<a id="schema_EventHandler"></a>
<a id="tocSeventhandler"></a>
<a id="tocseventhandler"></a>

```json
{
  "enabled": true,
  "id": "string",
  "name": "string",
  "trigger": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|trigger|string|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_EventHandlerMetaConfig">EventHandlerMetaConfig</h2>
<!-- backwards compatibility -->
<a id="schemaeventhandlermetaconfig"></a>
<a id="schema_EventHandlerMetaConfig"></a>
<a id="tocSeventhandlermetaconfig"></a>
<a id="tocseventhandlermetaconfig"></a>

```json
{
  "events": {
    "property1": [
      {
        "handler_meta": {
          "property1": null,
          "property2": null
        },
        "handler_name": "string"
      }
    ],
    "property2": [
      {
        "handler_meta": {
          "property1": null,
          "property2": null
        },
        "handler_name": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|events|object \| null|false|none|none|

<h2 id="tocS_EventHandlerTriggerConfig">EventHandlerTriggerConfig</h2>
<!-- backwards compatibility -->
<a id="schemaeventhandlertriggerconfig"></a>
<a id="schema_EventHandlerTriggerConfig"></a>
<a id="tocSeventhandlertriggerconfig"></a>
<a id="tocseventhandlertriggerconfig"></a>

```json
{
  "handler_meta": {
    "property1": null,
    "property2": null
  },
  "handler_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handler_meta|object \| null|false|none|none|
|handler_name|string|false|none|none|

<h2 id="tocS_EventHandlers">EventHandlers</h2>
<!-- backwards compatibility -->
<a id="schemaeventhandlers"></a>
<a id="schema_EventHandlers"></a>
<a id="tocSeventhandlers"></a>
<a id="tocseventhandlers"></a>

```json
[
  {
    "enabled": true,
    "id": "string",
    "name": "string",
    "trigger": "string",
    "type": "string"
  }
]
```

<h2 id="tocS_ExtendedPathsSet">ExtendedPathsSet</h2>
<!-- backwards compatibility -->
<a id="schemaextendedpathsset"></a>
<a id="schema_ExtendedPathsSet"></a>
<a id="tocSextendedpathsset"></a>
<a id="tocsextendedpathsset"></a>

```json
{
  "advance_cache_config": [
    {
      "cache_key_regex": "string",
      "cache_response_codes": [
        0
      ],
      "disabled": true,
      "method": "string",
      "path": "string",
      "timeout": 0
    }
  ],
  "black_list": [
    {
      "disabled": true,
      "ignore_case": true,
      "method": "string",
      "method_actions": {
        "property1": {
          "action": "no_action",
          "code": 0,
          "data": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "action": "no_action",
          "code": 0,
          "data": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "path": "string"
    }
  ],
  "cache": [
    "string"
  ],
  "circuit_breakers": [
    {
      "disable_half_open_state": true,
      "disabled": true,
      "method": "string",
      "path": "string",
      "return_to_service_after": 0,
      "samples": 0,
      "threshold_percent": 0
    }
  ],
  "do_not_track_endpoints": [
    {
      "disabled": true,
      "method": "string",
      "path": "string"
    }
  ],
  "go_plugin": [
    {
      "disabled": true,
      "func_name": "string",
      "method": "string",
      "path": "string",
      "plugin_path": "string"
    }
  ],
  "hard_timeouts": [
    {
      "disabled": true,
      "method": "string",
      "path": "string",
      "timeout": 0
    }
  ],
  "ignored": [
    {
      "disabled": true,
      "ignore_case": true,
      "method": "string",
      "method_actions": {
        "property1": {
          "action": "no_action",
          "code": 0,
          "data": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "action": "no_action",
          "code": 0,
          "data": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "path": "string"
    }
  ],
  "internal": [
    {
      "disabled": true,
      "method": "string",
      "path": "string"
    }
  ],
  "method_transforms": [
    {
      "disabled": true,
      "method": "string",
      "path": "string",
      "to_method": "string"
    }
  ],
  "mock_response": [
    {
      "body": "string",
      "code": 0,
      "disabled": true,
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "ignore_case": true,
      "method": "string",
      "path": "string"
    }
  ],
  "persist_graphql": [
    {
      "method": "string",
      "operation": "string",
      "path": "string",
      "variables": {
        "property1": null,
        "property2": null
      }
    }
  ],
  "rate_limit": [
    {
      "disabled": true,
      "method": "string",
      "path": "string",
      "per": 0,
      "rate": 0
    }
  ],
  "size_limits": [
    {
      "disabled": true,
      "method": "string",
      "path": "string",
      "size_limit": 0
    }
  ],
  "track_endpoints": [
    {
      "disabled": true,
      "method": "string",
      "path": "string"
    }
  ],
  "transform": [
    {
      "disabled": true,
      "method": "string",
      "path": "string",
      "template_data": {
        "enable_session": true,
        "input_type": "json",
        "template_mode": "blob",
        "template_source": "string"
      }
    }
  ],
  "transform_headers": [
    {
      "act_on": true,
      "add_headers": {
        "property1": "string",
        "property2": "string"
      },
      "delete_headers": [
        "string"
      ],
      "disabled": true,
      "method": "string",
      "path": "string"
    }
  ],
  "transform_jq": [
    {
      "filter": "string",
      "method": "string",
      "path": "string"
    }
  ],
  "transform_jq_response": [
    {
      "filter": "string",
      "method": "string",
      "path": "string"
    }
  ],
  "transform_response": [
    {
      "disabled": true,
      "method": "string",
      "path": "string",
      "template_data": {
        "enable_session": true,
        "input_type": "json",
        "template_mode": "blob",
        "template_source": "string"
      }
    }
  ],
  "transform_response_headers": [
    {
      "act_on": true,
      "add_headers": {
        "property1": "string",
        "property2": "string"
      },
      "delete_headers": [
        "string"
      ],
      "disabled": true,
      "method": "string",
      "path": "string"
    }
  ],
  "url_rewrites": [
    {
      "disabled": true,
      "match_pattern": "string",
      "method": "string",
      "path": "string",
      "rewrite_to": "string",
      "triggers": [
        {
          "on": "all",
          "options": {
            "header_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            },
            "path_part_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            },
            "payload_matches": {
              "match_rx": "string",
              "reverse": true
            },
            "query_val_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            },
            "request_context_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            },
            "session_meta_matches": {
              "property1": {
                "match_rx": "string",
                "reverse": true
              },
              "property2": {
                "match_rx": "string",
                "reverse": true
              }
            }
          },
          "rewrite_to": "string"
        }
      ]
    }
  ],
  "validate_json": [
    {
      "disabled": true,
      "error_response_code": 0,
      "method": "string",
      "path": "string",
      "schema": {
        "property1": null,
        "property2": null
      },
      "schema_b64": "string"
    }
  ],
  "validate_request": [
    {
      "enabled": true,
      "error_response_code": 0,
      "method": "string",
      "path": "string"
    }
  ],
  "virtual": [
    {
      "disabled": true,
      "function_source_type": "blob",
      "function_source_uri": "string",
      "method": "string",
      "path": "string",
      "proxy_on_error": true,
      "response_function_name": "string",
      "use_session": true
    }
  ],
  "white_list": [
    {
      "disabled": true,
      "ignore_case": true,
      "method": "string",
      "method_actions": {
        "property1": {
          "action": "no_action",
          "code": 0,
          "data": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        },
        "property2": {
          "action": "no_action",
          "code": 0,
          "data": "string",
          "headers": {
            "property1": "string",
            "property2": "string"
          }
        }
      },
      "path": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|advance_cache_config|[[CacheMeta](#schemacachemeta)]|false|none|none|
|black_list|[[EndPointMeta](#schemaendpointmeta)]|false|none|none|
|cache|[string]|false|none|none|
|circuit_breakers|[[CircuitBreakerMeta](#schemacircuitbreakermeta)]|false|none|none|
|do_not_track_endpoints|[[TrackEndpointMeta](#schematrackendpointmeta)]|false|none|none|
|go_plugin|[[GoPluginMeta](#schemagopluginmeta)]|false|none|none|
|hard_timeouts|[[HardTimeoutMeta](#schemahardtimeoutmeta)]|false|none|none|
|ignored|[[EndPointMeta](#schemaendpointmeta)]|false|none|none|
|internal|[[InternalMeta](#schemainternalmeta)]|false|none|none|
|method_transforms|[[MethodTransformMeta](#schemamethodtransformmeta)]|false|none|none|
|mock_response|[[MockResponseMeta](#schemamockresponsemeta)]|false|none|none|
|persist_graphql|[[PersistGraphQLMeta](#schemapersistgraphqlmeta)]|false|none|none|
|rate_limit|[[RateLimitMeta](#schemaratelimitmeta)]|false|none|none|
|size_limits|[[RequestSizeMeta](#schemarequestsizemeta)]|false|none|none|
|track_endpoints|[[TrackEndpointMeta](#schematrackendpointmeta)]|false|none|none|
|transform|[[TemplateMeta](#schematemplatemeta)]|false|none|none|
|transform_headers|[[HeaderInjectionMeta](#schemaheaderinjectionmeta)]|false|none|none|
|transform_jq|[[TransformJQMeta](#schematransformjqmeta)]|false|none|none|
|transform_jq_response|[[TransformJQMeta](#schematransformjqmeta)]|false|none|none|
|transform_response|[[TemplateMeta](#schematemplatemeta)]|false|none|none|
|transform_response_headers|[[HeaderInjectionMeta](#schemaheaderinjectionmeta)]|false|none|none|
|url_rewrites|[[URLRewriteMeta](#schemaurlrewritemeta)]|false|none|none|
|validate_json|[[ValidatePathMeta](#schemavalidatepathmeta)]|false|none|none|
|validate_request|[[ValidateRequestMeta](#schemavalidaterequestmeta)]|false|none|none|
|virtual|[[VirtualMeta](#schemavirtualmeta)]|false|none|none|
|white_list|[[EndPointMeta](#schemaendpointmeta)]|false|none|none|

<h2 id="tocS_ExternalOAuth">ExternalOAuth</h2>
<!-- backwards compatibility -->
<a id="schemaexternaloauth"></a>
<a id="schema_ExternalOAuth"></a>
<a id="tocSexternaloauth"></a>
<a id="tocsexternaloauth"></a>

```json
{
  "enabled": true,
  "providers": [
    {
      "introspection": {
        "cache": {
          "enabled": true,
          "timeout": 0
        },
        "client_id": "string",
        "client_secret": "string",
        "enabled": true,
        "identity_base_field": "string",
        "url": "string"
      },
      "jwt": {
        "enabled": true,
        "expires_at_validation_skew": 0,
        "identity_base_field": "string",
        "issued_at_validation_skew": 0,
        "not_before_validation_skew": 0,
        "signing_method": "string",
        "source": "string"
      }
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|providers|[[Provider](#schemaprovider)]|false|none|none|

<h2 id="tocS_FieldAccessDefinition">FieldAccessDefinition</h2>
<!-- backwards compatibility -->
<a id="schemafieldaccessdefinition"></a>
<a id="schema_FieldAccessDefinition"></a>
<a id="tocSfieldaccessdefinition"></a>
<a id="tocsfieldaccessdefinition"></a>

```json
{
  "field_name": "string",
  "limits": {
    "max_query_depth": 0
  },
  "type_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|field_name|string|false|none|none|
|limits|[FieldLimits](#schemafieldlimits)|false|none|none|
|type_name|string|false|none|none|

<h2 id="tocS_FieldLimits">FieldLimits</h2>
<!-- backwards compatibility -->
<a id="schemafieldlimits"></a>
<a id="schema_FieldLimits"></a>
<a id="tocSfieldlimits"></a>
<a id="tocsfieldlimits"></a>

```json
{
  "max_query_depth": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|max_query_depth|integer|false|none|none|

<h2 id="tocS_FromOASExamples">FromOASExamples</h2>
<!-- backwards compatibility -->
<a id="schemafromoasexamples"></a>
<a id="schema_FromOASExamples"></a>
<a id="tocSfromoasexamples"></a>
<a id="tocsfromoasexamples"></a>

```json
{
  "code": 0,
  "contentType": "string",
  "enabled": true,
  "exampleName": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer|false|none|none|
|contentType|string|false|none|none|
|enabled|boolean|false|none|none|
|exampleName|string|false|none|none|

<h2 id="tocS_GatewayTags">GatewayTags</h2>
<!-- backwards compatibility -->
<a id="schemagatewaytags"></a>
<a id="schema_GatewayTags"></a>
<a id="tocSgatewaytags"></a>
<a id="tocsgatewaytags"></a>

```json
{
  "enabled": true,
  "tags": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|tags|[string]|false|none|none|

<h2 id="tocS_Global">Global</h2>
<!-- backwards compatibility -->
<a id="schemaglobal"></a>
<a id="schema_Global"></a>
<a id="tocSglobal"></a>
<a id="tocsglobal"></a>

```json
{
  "cache": {
    "cacheAllSafeRequests": true,
    "cacheByHeaders": [
      "string"
    ],
    "cacheResponseCodes": [
      0
    ],
    "controlTTLHeaderName": "string",
    "enableUpstreamCacheControl": true,
    "enabled": true,
    "timeout": 0
  },
  "contextVariables": {
    "enabled": true
  },
  "cors": {
    "allowCredentials": true,
    "allowedHeaders": [
      "string"
    ],
    "allowedMethods": [
      "string"
    ],
    "allowedOrigins": [
      "string"
    ],
    "debug": true,
    "enabled": true,
    "exposedHeaders": [
      "string"
    ],
    "maxAge": 0,
    "optionsPassthrough": true
  },
  "pluginConfig": {
    "bundle": {
      "enabled": true,
      "path": "string"
    },
    "data": {
      "enabled": true,
      "value": {
        "property1": null,
        "property2": null
      }
    },
    "driver": "string"
  },
  "postAuthenticationPlugin": {
    "plugins": [
      {
        "enabled": true,
        "functionName": "string",
        "path": "string",
        "rawBodyOnly": true,
        "requireSession": true
      }
    ]
  },
  "postAuthenticationPlugins": [
    {
      "enabled": true,
      "functionName": "string",
      "path": "string",
      "rawBodyOnly": true,
      "requireSession": true
    }
  ],
  "postPlugin": {
    "plugins": [
      {
        "enabled": true,
        "functionName": "string",
        "path": "string",
        "rawBodyOnly": true,
        "requireSession": true
      }
    ]
  },
  "postPlugins": [
    {
      "enabled": true,
      "functionName": "string",
      "path": "string",
      "rawBodyOnly": true,
      "requireSession": true
    }
  ],
  "prePlugin": {
    "plugins": [
      {
        "enabled": true,
        "functionName": "string",
        "path": "string",
        "rawBodyOnly": true,
        "requireSession": true
      }
    ]
  },
  "prePlugins": [
    {
      "enabled": true,
      "functionName": "string",
      "path": "string",
      "rawBodyOnly": true,
      "requireSession": true
    }
  ],
  "responsePlugin": {
    "plugins": [
      {
        "enabled": true,
        "functionName": "string",
        "path": "string",
        "rawBodyOnly": true,
        "requireSession": true
      }
    ]
  },
  "responsePlugins": [
    {
      "enabled": true,
      "functionName": "string",
      "path": "string",
      "rawBodyOnly": true,
      "requireSession": true
    }
  ],
  "trafficLogs": {
    "enabled": true
  },
  "transformRequestHeaders": {
    "add": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "enabled": true,
    "remove": [
      "string"
    ]
  },
  "transformResponseHeaders": {
    "add": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "enabled": true,
    "remove": [
      "string"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache|[Cache](#schemacache)|false|none|none|
|contextVariables|[ContextVariables](#schemacontextvariables)|false|none|none|
|cors|[CORS](#schemacors)|false|none|none|
|pluginConfig|[PluginConfig](#schemapluginconfig)|false|none|none|
|postAuthenticationPlugin|[PostAuthenticationPlugin](#schemapostauthenticationplugin)|false|none|none|
|postAuthenticationPlugins|[CustomPlugins](#schemacustomplugins)|false|none|none|
|postPlugin|[PostPlugin](#schemapostplugin)|false|none|none|
|postPlugins|[CustomPlugins](#schemacustomplugins)|false|none|none|
|prePlugin|[PrePlugin](#schemapreplugin)|false|none|none|
|prePlugins|[CustomPlugins](#schemacustomplugins)|false|none|none|
|responsePlugin|[ResponsePlugin](#schemaresponseplugin)|false|none|none|
|responsePlugins|[CustomPlugins](#schemacustomplugins)|false|none|none|
|trafficLogs|[TrafficLogs](#schematrafficlogs)|false|none|none|
|transformRequestHeaders|[TransformHeaders](#schematransformheaders)|false|none|none|
|transformResponseHeaders|[TransformHeaders](#schematransformheaders)|false|none|none|

<h2 id="tocS_GlobalRateLimit">GlobalRateLimit</h2>
<!-- backwards compatibility -->
<a id="schemaglobalratelimit"></a>
<a id="schema_GlobalRateLimit"></a>
<a id="tocSglobalratelimit"></a>
<a id="tocsglobalratelimit"></a>

```json
{
  "disabled": true,
  "per": 0,
  "rate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|per|number|false|none|none|
|rate|number|false|none|none|

<h2 id="tocS_GoPluginMeta">GoPluginMeta</h2>
<!-- backwards compatibility -->
<a id="schemagopluginmeta"></a>
<a id="schema_GoPluginMeta"></a>
<a id="tocSgopluginmeta"></a>
<a id="tocsgopluginmeta"></a>

```json
{
  "disabled": true,
  "func_name": "string",
  "method": "string",
  "path": "string",
  "plugin_path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|func_name|string|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|plugin_path|string|false|none|none|

<h2 id="tocS_GraphAccessDefinition">GraphAccessDefinition</h2>
<!-- backwards compatibility -->
<a id="schemagraphaccessdefinition"></a>
<a id="schema_GraphAccessDefinition"></a>
<a id="tocSgraphaccessdefinition"></a>
<a id="tocsgraphaccessdefinition"></a>

```json
{}
```

<h2 id="tocS_GraphQLConfig">GraphQLConfig</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlconfig"></a>
<a id="schema_GraphQLConfig"></a>
<a id="tocSgraphqlconfig"></a>
<a id="tocsgraphqlconfig"></a>

```json
{
  "enabled": true,
  "engine": {
    "data_sources": [
      {
        "config": null,
        "internal": true,
        "kind": "string",
        "name": "string",
        "root_fields": [
          {
            "fields": [
              "string"
            ],
            "type": "string"
          }
        ]
      }
    ],
    "field_configs": [
      {
        "disable_default_mapping": true,
        "field_name": "string",
        "path": [
          "string"
        ],
        "type_name": "string"
      }
    ],
    "global_headers": [
      {
        "key": "string",
        "value": "string"
      }
    ]
  },
  "execution_mode": "proxyOnly",
  "introspection": {
    "disabled": true
  },
  "last_schema_update": "1970-01-01T00:00:00Z",
  "playground": {
    "enabled": true,
    "path": "string"
  },
  "proxy": {
    "auth_headers": {
      "property1": "string",
      "property2": "string"
    },
    "features": {
      "use_immutable_headers": true
    },
    "request_headers": {
      "property1": "string",
      "property2": "string"
    },
    "request_headers_rewrite": {
      "property1": {
        "remove": true,
        "value": "string"
      },
      "property2": {
        "remove": true,
        "value": "string"
      }
    },
    "subscription_type": "string",
    "use_response_extensions": {
      "on_error_forwarding": true
    }
  },
  "schema": "string",
  "subgraph": {
    "sdl": "string"
  },
  "supergraph": {
    "disable_query_batching": true,
    "global_headers": {
      "property1": "string",
      "property2": "string"
    },
    "merged_sdl": "string",
    "subgraphs": [
      {
        "api_id": "string",
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "name": "string",
        "sdl": "string",
        "subscription_type": "string",
        "url": "string"
      }
    ],
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "type_field_configurations": [
    {
      "data_source": {
        "data_source_config": null,
        "kind": "string"
      },
      "field_name": "string",
      "mapping": {
        "disabled": true,
        "path": "string"
      },
      "type_name": "string"
    }
  ],
  "version": "1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|engine|[GraphQLEngineConfig](#schemagraphqlengineconfig)|false|none|none|
|execution_mode|string|false|none|none|
|introspection|[GraphQLIntrospectionConfig](#schemagraphqlintrospectionconfig)|false|none|none|
|last_schema_update|string(date-time) \| null|false|none|none|
|playground|[GraphQLPlayground](#schemagraphqlplayground)|false|none|none|
|proxy|[GraphQLProxyConfig](#schemagraphqlproxyconfig)|false|none|none|
|schema|string|false|none|none|
|subgraph|[GraphQLSubgraphConfig](#schemagraphqlsubgraphconfig)|false|none|none|
|supergraph|[GraphQLSupergraphConfig](#schemagraphqlsupergraphconfig)|false|none|none|
|type_field_configurations|[[DatasourceTypeFieldConfiguration](#schemadatasourcetypefieldconfiguration)]|false|none|none|
|version|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|execution_mode|proxyOnly|
|execution_mode|executionEngine|
|execution_mode|subgraph|
|execution_mode|supergraph|
|execution_mode|""|
|version|1|
|version|2|
|version|""|

<h2 id="tocS_GraphQLEngineConfig">GraphQLEngineConfig</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlengineconfig"></a>
<a id="schema_GraphQLEngineConfig"></a>
<a id="tocSgraphqlengineconfig"></a>
<a id="tocsgraphqlengineconfig"></a>

```json
{
  "data_sources": [
    {
      "config": null,
      "internal": true,
      "kind": "string",
      "name": "string",
      "root_fields": [
        {
          "fields": [
            "string"
          ],
          "type": "string"
        }
      ]
    }
  ],
  "field_configs": [
    {
      "disable_default_mapping": true,
      "field_name": "string",
      "path": [
        "string"
      ],
      "type_name": "string"
    }
  ],
  "global_headers": [
    {
      "key": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data_sources|[[GraphQLEngineDataSource](#schemagraphqlenginedatasource)]|false|none|none|
|field_configs|[[GraphQLFieldConfig](#schemagraphqlfieldconfig)]|false|none|none|
|global_headers|[[UDGGlobalHeader](#schemaudgglobalheader)]|false|none|none|

<h2 id="tocS_GraphQLEngineDataSource">GraphQLEngineDataSource</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlenginedatasource"></a>
<a id="schema_GraphQLEngineDataSource"></a>
<a id="tocSgraphqlenginedatasource"></a>
<a id="tocsgraphqlenginedatasource"></a>

```json
{
  "config": null,
  "internal": true,
  "kind": "string",
  "name": "string",
  "root_fields": [
    {
      "fields": [
        "string"
      ],
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|internal|boolean|false|none|none|
|kind|string|false|none|none|
|name|string|false|none|none|
|root_fields|[[GraphQLTypeFields](#schemagraphqltypefields)]|false|none|none|

<h2 id="tocS_GraphQLFieldConfig">GraphQLFieldConfig</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlfieldconfig"></a>
<a id="schema_GraphQLFieldConfig"></a>
<a id="tocSgraphqlfieldconfig"></a>
<a id="tocsgraphqlfieldconfig"></a>

```json
{
  "disable_default_mapping": true,
  "field_name": "string",
  "path": [
    "string"
  ],
  "type_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disable_default_mapping|boolean|false|none|none|
|field_name|string|false|none|none|
|path|[string]|false|none|none|
|type_name|string|false|none|none|

<h2 id="tocS_GraphQLIntrospectionConfig">GraphQLIntrospectionConfig</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlintrospectionconfig"></a>
<a id="schema_GraphQLIntrospectionConfig"></a>
<a id="tocSgraphqlintrospectionconfig"></a>
<a id="tocsgraphqlintrospectionconfig"></a>

```json
{
  "disabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|

<h2 id="tocS_GraphQLPlayground">GraphQLPlayground</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlplayground"></a>
<a id="schema_GraphQLPlayground"></a>
<a id="tocSgraphqlplayground"></a>
<a id="tocsgraphqlplayground"></a>

```json
{
  "enabled": true,
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_GraphQLProxyConfig">GraphQLProxyConfig</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlproxyconfig"></a>
<a id="schema_GraphQLProxyConfig"></a>
<a id="tocSgraphqlproxyconfig"></a>
<a id="tocsgraphqlproxyconfig"></a>

```json
{
  "auth_headers": {
    "property1": "string",
    "property2": "string"
  },
  "features": {
    "use_immutable_headers": true
  },
  "request_headers": {
    "property1": "string",
    "property2": "string"
  },
  "request_headers_rewrite": {
    "property1": {
      "remove": true,
      "value": "string"
    },
    "property2": {
      "remove": true,
      "value": "string"
    }
  },
  "subscription_type": "string",
  "use_response_extensions": {
    "on_error_forwarding": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_headers|object \| null|false|none|none|
|features|[GraphQLProxyFeaturesConfig](#schemagraphqlproxyfeaturesconfig)|false|none|none|
|request_headers|object \| null|false|none|none|
|request_headers_rewrite|object \| null|false|none|none|
|subscription_type|string|false|none|none|
|use_response_extensions|[GraphQLResponseExtensions](#schemagraphqlresponseextensions)|false|none|none|

<h2 id="tocS_GraphQLProxyFeaturesConfig">GraphQLProxyFeaturesConfig</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlproxyfeaturesconfig"></a>
<a id="schema_GraphQLProxyFeaturesConfig"></a>
<a id="tocSgraphqlproxyfeaturesconfig"></a>
<a id="tocsgraphqlproxyfeaturesconfig"></a>

```json
{
  "use_immutable_headers": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|use_immutable_headers|boolean|false|none|none|

<h2 id="tocS_GraphQLResponseExtensions">GraphQLResponseExtensions</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlresponseextensions"></a>
<a id="schema_GraphQLResponseExtensions"></a>
<a id="tocSgraphqlresponseextensions"></a>
<a id="tocsgraphqlresponseextensions"></a>

```json
{
  "on_error_forwarding": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|on_error_forwarding|boolean|false|none|none|

<h2 id="tocS_GraphQLSubgraphConfig">GraphQLSubgraphConfig</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlsubgraphconfig"></a>
<a id="schema_GraphQLSubgraphConfig"></a>
<a id="tocSgraphqlsubgraphconfig"></a>
<a id="tocsgraphqlsubgraphconfig"></a>

```json
{
  "sdl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sdl|string|false|none|none|

<h2 id="tocS_GraphQLSubgraphEntity">GraphQLSubgraphEntity</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlsubgraphentity"></a>
<a id="schema_GraphQLSubgraphEntity"></a>
<a id="tocSgraphqlsubgraphentity"></a>
<a id="tocsgraphqlsubgraphentity"></a>

```json
{
  "api_id": "string",
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "sdl": "string",
  "subscription_type": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|none|
|headers|object \| null|false|none|none|
|name|string|false|none|none|
|sdl|string|false|none|none|
|subscription_type|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_GraphQLSupergraphConfig">GraphQLSupergraphConfig</h2>
<!-- backwards compatibility -->
<a id="schemagraphqlsupergraphconfig"></a>
<a id="schema_GraphQLSupergraphConfig"></a>
<a id="tocSgraphqlsupergraphconfig"></a>
<a id="tocsgraphqlsupergraphconfig"></a>

```json
{
  "disable_query_batching": true,
  "global_headers": {
    "property1": "string",
    "property2": "string"
  },
  "merged_sdl": "string",
  "subgraphs": [
    {
      "api_id": "string",
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "name": "string",
      "sdl": "string",
      "subscription_type": "string",
      "url": "string"
    }
  ],
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disable_query_batching|boolean|false|none|none|
|global_headers|object \| null|false|none|none|
|merged_sdl|string|false|none|none|
|subgraphs|[[GraphQLSubgraphEntity](#schemagraphqlsubgraphentity)]|false|none|none|
|updated_at|string(date-time) \| null|false|none|none|

<h2 id="tocS_GraphQLTypeFields">GraphQLTypeFields</h2>
<!-- backwards compatibility -->
<a id="schemagraphqltypefields"></a>
<a id="schema_GraphQLTypeFields"></a>
<a id="tocSgraphqltypefields"></a>
<a id="tocsgraphqltypefields"></a>

```json
{
  "fields": [
    "string"
  ],
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[string]|false|none|none|
|type|string|false|none|none|

<h2 id="tocS_GraphqlType">GraphqlType</h2>
<!-- backwards compatibility -->
<a id="schemagraphqltype"></a>
<a id="schema_GraphqlType"></a>
<a id="tocSgraphqltype"></a>
<a id="tocsgraphqltype"></a>

```json
{
  "fields": [
    "string"
  ],
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[string]|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_HMAC">HMAC</h2>
<!-- backwards compatibility -->
<a id="schemahmac"></a>
<a id="schema_HMAC"></a>
<a id="tocShmac"></a>
<a id="tocshmac"></a>

```json
{
  "AuthSources": {
    "cookie": {
      "enabled": true,
      "name": "string"
    },
    "header": {
      "enabled": true,
      "name": "string"
    },
    "query": {
      "enabled": true,
      "name": "string"
    }
  },
  "allowedAlgorithms": [
    "string"
  ],
  "allowedClockSkew": 0,
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthSources|[AuthSources](#schemaauthsources)|false|none|none|
|allowedAlgorithms|[string]|false|none|none|
|allowedClockSkew|number|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_HardTimeoutMeta">HardTimeoutMeta</h2>
<!-- backwards compatibility -->
<a id="schemahardtimeoutmeta"></a>
<a id="schema_HardTimeoutMeta"></a>
<a id="tocShardtimeoutmeta"></a>
<a id="tocshardtimeoutmeta"></a>

```json
{
  "disabled": true,
  "method": "string",
  "path": "string",
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|timeout|integer|false|none|none|

<h2 id="tocS_Header">Header</h2>
<!-- backwards compatibility -->
<a id="schemaheader"></a>
<a id="schema_Header"></a>
<a id="tocSheader"></a>
<a id="tocsheader"></a>

```json
{
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_HeaderInjectionMeta">HeaderInjectionMeta</h2>
<!-- backwards compatibility -->
<a id="schemaheaderinjectionmeta"></a>
<a id="schema_HeaderInjectionMeta"></a>
<a id="tocSheaderinjectionmeta"></a>
<a id="tocsheaderinjectionmeta"></a>

```json
{
  "act_on": true,
  "add_headers": {
    "property1": "string",
    "property2": "string"
  },
  "delete_headers": [
    "string"
  ],
  "disabled": true,
  "method": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|act_on|boolean|false|none|none|
|add_headers|object \| null|false|none|none|
|delete_headers|[string]|false|none|none|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_Headers">Headers</h2>
<!-- backwards compatibility -->
<a id="schemaheaders"></a>
<a id="schema_Headers"></a>
<a id="tocSheaders"></a>
<a id="tocsheaders"></a>

```json
[
  {
    "name": "string",
    "value": "string"
  }
]
```

<h2 id="tocS_HealthCheckItem">HealthCheckItem</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckitem"></a>
<a id="schema_HealthCheckItem"></a>
<a id="tocShealthcheckitem"></a>
<a id="tocshealthcheckitem"></a>

```json
{
  "componentId": "string",
  "componentType": "string",
  "output": "string",
  "status": "pass",
  "time": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|componentId|string|false|none|none|
|componentType|string|false|none|none|
|output|string|false|none|none|
|status|string|false|none|none|
|time|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pass|
|status|fail|
|status|warn|

<h2 id="tocS_HealthCheckResponse">HealthCheckResponse</h2>
<!-- backwards compatibility -->
<a id="schemahealthcheckresponse"></a>
<a id="schema_HealthCheckResponse"></a>
<a id="tocShealthcheckresponse"></a>
<a id="tocshealthcheckresponse"></a>

```json
{
  "description": "string",
  "details": {
    "property1": {
      "componentId": "string",
      "componentType": "string",
      "output": "string",
      "status": "pass",
      "time": "string"
    },
    "property2": {
      "componentId": "string",
      "componentType": "string",
      "output": "string",
      "status": "pass",
      "time": "string"
    }
  },
  "output": "string",
  "status": "pass",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|details|object|false|none|none|
|output|string|false|none|none|
|status|string|false|none|none|
|version|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pass|
|status|fail|
|status|warn|

<h2 id="tocS_HostCheckObject">HostCheckObject</h2>
<!-- backwards compatibility -->
<a id="schemahostcheckobject"></a>
<a id="schema_HostCheckObject"></a>
<a id="tocShostcheckobject"></a>
<a id="tocshostcheckobject"></a>

```json
{
  "body": "string",
  "commands": [
    {
      "message": "string",
      "name": "string"
    }
  ],
  "enable_proxy_protocol": true,
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "method": "string",
  "protocol": "string",
  "timeout": 0,
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|commands|[[CheckCommand](#schemacheckcommand)]|false|none|none|
|enable_proxy_protocol|boolean|false|none|none|
|headers|object \| null|false|none|none|
|method|string|false|none|none|
|protocol|string|false|none|none|
|timeout|integer|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_HttpHeader">HttpHeader</h2>
<!-- backwards compatibility -->
<a id="schemahttpheader"></a>
<a id="schema_HttpHeader"></a>
<a id="tocShttpheader"></a>
<a id="tocshttpheader"></a>

```json
{
  "property1": [
    "string"
  ],
  "property2": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string]|false|none|none|

<h2 id="tocS_IDExtractor">IDExtractor</h2>
<!-- backwards compatibility -->
<a id="schemaidextractor"></a>
<a id="schema_IDExtractor"></a>
<a id="tocSidextractor"></a>
<a id="tocsidextractor"></a>

```json
{
  "config": {
    "formParamName": "string",
    "headerName": "string",
    "regexp": "string",
    "regexpMatchIndex": 0,
    "xPathExp": "string"
  },
  "enabled": true,
  "source": "string",
  "with": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|[IDExtractorConfig](#schemaidextractorconfig)|false|none|none|
|enabled|boolean|false|none|none|
|source|string|false|none|none|
|with|string|false|none|none|

<h2 id="tocS_IDExtractorConfig">IDExtractorConfig</h2>
<!-- backwards compatibility -->
<a id="schemaidextractorconfig"></a>
<a id="schema_IDExtractorConfig"></a>
<a id="tocSidextractorconfig"></a>
<a id="tocsidextractorconfig"></a>

```json
{
  "formParamName": "string",
  "headerName": "string",
  "regexp": "string",
  "regexpMatchIndex": 0,
  "xPathExp": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|formParamName|string|false|none|none|
|headerName|string|false|none|none|
|regexp|string|false|none|none|
|regexpMatchIndex|integer|false|none|none|
|xPathExp|string|false|none|none|

<h2 id="tocS_Info">Info</h2>
<!-- backwards compatibility -->
<a id="schemainfo"></a>
<a id="schema_Info"></a>
<a id="tocSinfo"></a>
<a id="tocsinfo"></a>

```json
{
  "dbId": "string",
  "expiration": "string",
  "id": "string",
  "name": "string",
  "orgId": "string",
  "state": {
    "active": true,
    "internal": true
  },
  "versioning": {
    "default": "string",
    "enabled": true,
    "fallbackToDefault": true,
    "key": "string",
    "location": "string",
    "name": "string",
    "stripVersioningData": true,
    "urlVersioningPattern": "string",
    "versions": [
      {
        "id": "string",
        "name": "string"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dbId|string|false|none|none|
|expiration|string|false|none|none|
|id|string|false|none|none|
|name|string|false|none|none|
|orgId|string|false|none|none|
|state|[State](#schemastate)|false|none|none|
|versioning|[Versioning](#schemaversioning)|false|none|none|

<h2 id="tocS_Internal">Internal</h2>
<!-- backwards compatibility -->
<a id="schemainternal"></a>
<a id="schema_Internal"></a>
<a id="tocSinternal"></a>
<a id="tocsinternal"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_InternalMeta">InternalMeta</h2>
<!-- backwards compatibility -->
<a id="schemainternalmeta"></a>
<a id="schema_InternalMeta"></a>
<a id="tocSinternalmeta"></a>
<a id="tocsinternalmeta"></a>

```json
{
  "disabled": true,
  "method": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_Introspection">Introspection</h2>
<!-- backwards compatibility -->
<a id="schemaintrospection"></a>
<a id="schema_Introspection"></a>
<a id="tocSintrospection"></a>
<a id="tocsintrospection"></a>

```json
{
  "cache": {
    "enabled": true,
    "timeout": 0
  },
  "client_id": "string",
  "client_secret": "string",
  "enabled": true,
  "identity_base_field": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache|[IntrospectionCache](#schemaintrospectioncache)|false|none|none|
|client_id|string|false|none|none|
|client_secret|string|false|none|none|
|enabled|boolean|false|none|none|
|identity_base_field|string|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_IntrospectionCache">IntrospectionCache</h2>
<!-- backwards compatibility -->
<a id="schemaintrospectioncache"></a>
<a id="schema_IntrospectionCache"></a>
<a id="tocSintrospectioncache"></a>
<a id="tocsintrospectioncache"></a>

```json
{
  "enabled": true,
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|timeout|integer(int64)|false|none|none|

<h2 id="tocS_JWTData">JWTData</h2>
<!-- backwards compatibility -->
<a id="schemajwtdata"></a>
<a id="schema_JWTData"></a>
<a id="tocSjwtdata"></a>
<a id="tocsjwtdata"></a>

```json
{
  "secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|secret|string|false|none|none|

<h2 id="tocS_JWTValidation">JWTValidation</h2>
<!-- backwards compatibility -->
<a id="schemajwtvalidation"></a>
<a id="schema_JWTValidation"></a>
<a id="tocSjwtvalidation"></a>
<a id="tocsjwtvalidation"></a>

```json
{
  "enabled": true,
  "expires_at_validation_skew": 0,
  "identity_base_field": "string",
  "issued_at_validation_skew": 0,
  "not_before_validation_skew": 0,
  "signing_method": "string",
  "source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|expires_at_validation_skew|integer|false|none|none|
|identity_base_field|string|false|none|none|
|issued_at_validation_skew|integer|false|none|none|
|not_before_validation_skew|integer|false|none|none|
|signing_method|string|false|none|none|
|source|string|false|none|none|

<h2 id="tocS_ListenPath">ListenPath</h2>
<!-- backwards compatibility -->
<a id="schemalistenpath"></a>
<a id="schema_ListenPath"></a>
<a id="tocSlistenpath"></a>
<a id="tocslistenpath"></a>

```json
{
  "strip": true,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|strip|boolean|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_MethodTransformMeta">MethodTransformMeta</h2>
<!-- backwards compatibility -->
<a id="schemamethodtransformmeta"></a>
<a id="schema_MethodTransformMeta"></a>
<a id="tocSmethodtransformmeta"></a>
<a id="tocsmethodtransformmeta"></a>

```json
{
  "disabled": true,
  "method": "string",
  "path": "string",
  "to_method": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|to_method|string|false|none|none|

<h2 id="tocS_Middleware">Middleware</h2>
<!-- backwards compatibility -->
<a id="schemamiddleware"></a>
<a id="schema_Middleware"></a>
<a id="tocSmiddleware"></a>
<a id="tocsmiddleware"></a>

```json
{
  "global": {
    "cache": {
      "cacheAllSafeRequests": true,
      "cacheByHeaders": [
        "string"
      ],
      "cacheResponseCodes": [
        0
      ],
      "controlTTLHeaderName": "string",
      "enableUpstreamCacheControl": true,
      "enabled": true,
      "timeout": 0
    },
    "contextVariables": {
      "enabled": true
    },
    "cors": {
      "allowCredentials": true,
      "allowedHeaders": [
        "string"
      ],
      "allowedMethods": [
        "string"
      ],
      "allowedOrigins": [
        "string"
      ],
      "debug": true,
      "enabled": true,
      "exposedHeaders": [
        "string"
      ],
      "maxAge": 0,
      "optionsPassthrough": true
    },
    "pluginConfig": {
      "bundle": {
        "enabled": true,
        "path": "string"
      },
      "data": {
        "enabled": true,
        "value": {
          "property1": null,
          "property2": null
        }
      },
      "driver": "string"
    },
    "postAuthenticationPlugin": {
      "plugins": [
        {
          "enabled": true,
          "functionName": "string",
          "path": "string",
          "rawBodyOnly": true,
          "requireSession": true
        }
      ]
    },
    "postAuthenticationPlugins": [
      {
        "enabled": true,
        "functionName": "string",
        "path": "string",
        "rawBodyOnly": true,
        "requireSession": true
      }
    ],
    "postPlugin": {
      "plugins": [
        {
          "enabled": true,
          "functionName": "string",
          "path": "string",
          "rawBodyOnly": true,
          "requireSession": true
        }
      ]
    },
    "postPlugins": [
      {
        "enabled": true,
        "functionName": "string",
        "path": "string",
        "rawBodyOnly": true,
        "requireSession": true
      }
    ],
    "prePlugin": {
      "plugins": [
        {
          "enabled": true,
          "functionName": "string",
          "path": "string",
          "rawBodyOnly": true,
          "requireSession": true
        }
      ]
    },
    "prePlugins": [
      {
        "enabled": true,
        "functionName": "string",
        "path": "string",
        "rawBodyOnly": true,
        "requireSession": true
      }
    ],
    "responsePlugin": {
      "plugins": [
        {
          "enabled": true,
          "functionName": "string",
          "path": "string",
          "rawBodyOnly": true,
          "requireSession": true
        }
      ]
    },
    "responsePlugins": [
      {
        "enabled": true,
        "functionName": "string",
        "path": "string",
        "rawBodyOnly": true,
        "requireSession": true
      }
    ],
    "trafficLogs": {
      "enabled": true
    },
    "transformRequestHeaders": {
      "add": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "enabled": true,
      "remove": [
        "string"
      ]
    },
    "transformResponseHeaders": {
      "add": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "enabled": true,
      "remove": [
        "string"
      ]
    }
  },
  "operations": {
    "property1": {
      "allow": {
        "enabled": true,
        "ignoreCase": true
      },
      "block": {
        "enabled": true,
        "ignoreCase": true
      },
      "cache": {
        "cacheByRegex": "string",
        "cacheResponseCodes": [
          0
        ],
        "enabled": true,
        "timeout": 0
      },
      "circuitBreaker": {
        "coolDownPeriod": 0,
        "enabled": true,
        "halfOpenStateEnabled": true,
        "sampleSize": 0,
        "threshold": 0
      },
      "doNotTrackEndpoint": {
        "enabled": true
      },
      "enforceTimeout": {
        "enabled": true,
        "value": 0
      },
      "ignoreAuthentication": {
        "enabled": true,
        "ignoreCase": true
      },
      "internal": {
        "enabled": true
      },
      "mockResponse": {
        "body": "string",
        "code": 0,
        "enabled": true,
        "fromOASExamples": {
          "code": 0,
          "contentType": "string",
          "enabled": true,
          "exampleName": "string"
        },
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      },
      "postPlugins": [
        {
          "enabled": true,
          "functionName": "string",
          "name": "string",
          "path": "string"
        }
      ],
      "rateLimit": {
        "enabled": true,
        "per": 0,
        "rate": 0
      },
      "requestSizeLimit": {
        "enabled": true,
        "value": 0
      },
      "trackEndpoint": {
        "enabled": true
      },
      "transformRequestBody": {
        "body": "string",
        "enabled": true,
        "format": "string",
        "path": "string"
      },
      "transformRequestHeaders": {
        "add": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "enabled": true,
        "remove": [
          "string"
        ]
      },
      "transformRequestMethod": {
        "enabled": true,
        "toMethod": "string"
      },
      "transformResponseBody": {
        "body": "string",
        "enabled": true,
        "format": "string",
        "path": "string"
      },
      "transformResponseHeaders": {
        "add": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "enabled": true,
        "remove": [
          "string"
        ]
      },
      "urlRewrite": {
        "enabled": true,
        "pattern": "string",
        "rewriteTo": "string",
        "triggers": [
          {
            "condition": "string",
            "rewriteTo": "string",
            "rules": [
              {
                "in": "string",
                "name": "string",
                "negate": true,
                "pattern": "string"
              }
            ]
          }
        ]
      },
      "validateRequest": {
        "enabled": true,
        "errorResponseCode": 0
      },
      "virtualEndpoint": {
        "body": "string",
        "enabled": true,
        "functionName": "string",
        "name": "string",
        "path": "string",
        "proxyOnError": true,
        "requireSession": true
      }
    },
    "property2": {
      "allow": {
        "enabled": true,
        "ignoreCase": true
      },
      "block": {
        "enabled": true,
        "ignoreCase": true
      },
      "cache": {
        "cacheByRegex": "string",
        "cacheResponseCodes": [
          0
        ],
        "enabled": true,
        "timeout": 0
      },
      "circuitBreaker": {
        "coolDownPeriod": 0,
        "enabled": true,
        "halfOpenStateEnabled": true,
        "sampleSize": 0,
        "threshold": 0
      },
      "doNotTrackEndpoint": {
        "enabled": true
      },
      "enforceTimeout": {
        "enabled": true,
        "value": 0
      },
      "ignoreAuthentication": {
        "enabled": true,
        "ignoreCase": true
      },
      "internal": {
        "enabled": true
      },
      "mockResponse": {
        "body": "string",
        "code": 0,
        "enabled": true,
        "fromOASExamples": {
          "code": 0,
          "contentType": "string",
          "enabled": true,
          "exampleName": "string"
        },
        "headers": [
          {
            "name": "string",
            "value": "string"
          }
        ]
      },
      "postPlugins": [
        {
          "enabled": true,
          "functionName": "string",
          "name": "string",
          "path": "string"
        }
      ],
      "rateLimit": {
        "enabled": true,
        "per": 0,
        "rate": 0
      },
      "requestSizeLimit": {
        "enabled": true,
        "value": 0
      },
      "trackEndpoint": {
        "enabled": true
      },
      "transformRequestBody": {
        "body": "string",
        "enabled": true,
        "format": "string",
        "path": "string"
      },
      "transformRequestHeaders": {
        "add": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "enabled": true,
        "remove": [
          "string"
        ]
      },
      "transformRequestMethod": {
        "enabled": true,
        "toMethod": "string"
      },
      "transformResponseBody": {
        "body": "string",
        "enabled": true,
        "format": "string",
        "path": "string"
      },
      "transformResponseHeaders": {
        "add": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "enabled": true,
        "remove": [
          "string"
        ]
      },
      "urlRewrite": {
        "enabled": true,
        "pattern": "string",
        "rewriteTo": "string",
        "triggers": [
          {
            "condition": "string",
            "rewriteTo": "string",
            "rules": [
              {
                "in": "string",
                "name": "string",
                "negate": true,
                "pattern": "string"
              }
            ]
          }
        ]
      },
      "validateRequest": {
        "enabled": true,
        "errorResponseCode": 0
      },
      "virtualEndpoint": {
        "body": "string",
        "enabled": true,
        "functionName": "string",
        "name": "string",
        "path": "string",
        "proxyOnError": true,
        "requireSession": true
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|global|[Global](#schemaglobal)|false|none|none|
|operations|[Operations](#schemaoperations)|false|none|none|

<h2 id="tocS_MiddlewareDefinition">MiddlewareDefinition</h2>
<!-- backwards compatibility -->
<a id="schemamiddlewaredefinition"></a>
<a id="schema_MiddlewareDefinition"></a>
<a id="tocSmiddlewaredefinition"></a>
<a id="tocsmiddlewaredefinition"></a>

```json
{
  "disabled": true,
  "name": "PreMiddlewareFunction",
  "path": "string",
  "raw_body_only": false,
  "require_session": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|name|string|false|none|none|
|path|string|false|none|none|
|raw_body_only|boolean|false|none|none|
|require_session|boolean|false|none|none|

<h2 id="tocS_MiddlewareIdExtractor">MiddlewareIdExtractor</h2>
<!-- backwards compatibility -->
<a id="schemamiddlewareidextractor"></a>
<a id="schema_MiddlewareIdExtractor"></a>
<a id="tocSmiddlewareidextractor"></a>
<a id="tocsmiddlewareidextractor"></a>

```json
{
  "disabled": true,
  "extract_from": "string",
  "extract_with": "string",
  "extractor_config": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|extract_from|string|false|none|none|
|extract_with|string|false|none|none|
|extractor_config|object \| null|false|none|none|

<h2 id="tocS_MiddlewareSection">MiddlewareSection</h2>
<!-- backwards compatibility -->
<a id="schemamiddlewaresection"></a>
<a id="schema_MiddlewareSection"></a>
<a id="tocSmiddlewaresection"></a>
<a id="tocsmiddlewaresection"></a>

```json
{
  "auth_check": {
    "disabled": true,
    "name": "PreMiddlewareFunction",
    "path": "string",
    "raw_body_only": false,
    "require_session": false
  },
  "driver": "string",
  "id_extractor": {
    "disabled": true,
    "extract_from": "string",
    "extract_with": "string",
    "extractor_config": {
      "property1": null,
      "property2": null
    }
  },
  "post": [
    {
      "disabled": true,
      "name": "PreMiddlewareFunction",
      "path": "string",
      "raw_body_only": false,
      "require_session": false
    }
  ],
  "post_key_auth": [
    {
      "disabled": true,
      "name": "PreMiddlewareFunction",
      "path": "string",
      "raw_body_only": false,
      "require_session": false
    }
  ],
  "pre": [
    {
      "disabled": true,
      "name": "PreMiddlewareFunction",
      "path": "string",
      "raw_body_only": false,
      "require_session": false
    }
  ],
  "response": [
    {
      "disabled": true,
      "name": "PreMiddlewareFunction",
      "path": "string",
      "raw_body_only": false,
      "require_session": false
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|auth_check|[MiddlewareDefinition](#schemamiddlewaredefinition)|false|none|none|
|driver|string|false|none|none|
|id_extractor|[MiddlewareIdExtractor](#schemamiddlewareidextractor)|false|none|none|
|post|[[MiddlewareDefinition](#schemamiddlewaredefinition)]|false|none|none|
|post_key_auth|[[MiddlewareDefinition](#schemamiddlewaredefinition)]|false|none|none|
|pre|[[MiddlewareDefinition](#schemamiddlewaredefinition)]|false|none|none|
|response|[[MiddlewareDefinition](#schemamiddlewaredefinition)]|false|none|none|

<h2 id="tocS_MockResponse">MockResponse</h2>
<!-- backwards compatibility -->
<a id="schemamockresponse"></a>
<a id="schema_MockResponse"></a>
<a id="tocSmockresponse"></a>
<a id="tocsmockresponse"></a>

```json
{
  "body": "string",
  "code": 0,
  "enabled": true,
  "fromOASExamples": {
    "code": 0,
    "contentType": "string",
    "enabled": true,
    "exampleName": "string"
  },
  "headers": [
    {
      "name": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|code|integer|false|none|none|
|enabled|boolean|false|none|none|
|fromOASExamples|[FromOASExamples](#schemafromoasexamples)|false|none|none|
|headers|[Headers](#schemaheaders)|false|none|none|

<h2 id="tocS_MockResponseMeta">MockResponseMeta</h2>
<!-- backwards compatibility -->
<a id="schemamockresponsemeta"></a>
<a id="schema_MockResponseMeta"></a>
<a id="tocSmockresponsemeta"></a>
<a id="tocsmockresponsemeta"></a>

```json
{
  "body": "string",
  "code": 0,
  "disabled": true,
  "headers": {
    "property1": "string",
    "property2": "string"
  },
  "ignore_case": true,
  "method": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|code|integer|false|none|none|
|disabled|boolean|false|none|none|
|headers|object \| null|false|none|none|
|ignore_case|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_Monitor">Monitor</h2>
<!-- backwards compatibility -->
<a id="schemamonitor"></a>
<a id="schema_Monitor"></a>
<a id="tocSmonitor"></a>
<a id="tocsmonitor"></a>

```json
{
  "trigger_limits": [
    80,
    60,
    50
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trigger_limits|[number]|false|none|none|

<h2 id="tocS_MutualTLS">MutualTLS</h2>
<!-- backwards compatibility -->
<a id="schemamutualtls"></a>
<a id="schema_MutualTLS"></a>
<a id="tocSmutualtls"></a>
<a id="tocsmutualtls"></a>

```json
{
  "domainToCertificateMapping": [
    {
      "certificate": "string",
      "domain": "string"
    }
  ],
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domainToCertificateMapping|[[DomainToCertificate](#schemadomaintocertificate)]|false|none|none|
|enabled|boolean|false|none|none|

<h2 id="tocS_NewClientRequest">NewClientRequest</h2>
<!-- backwards compatibility -->
<a id="schemanewclientrequest"></a>
<a id="schema_NewClientRequest"></a>
<a id="tocSnewclientrequest"></a>
<a id="tocsnewclientrequest"></a>

```json
{
  "api_id": "keyless",
  "client_id": "2a06b398c17f46908de3dffcb71ef87b",
  "description": "google client login",
  "meta_data": {
    "property1": "string",
    "property2": "string"
  },
  "policy_id": "string",
  "redirect_uri": "https://httpbin.org/ip",
  "secret": "MmQwNTI5NGQtYjU0YS00NjMyLWIwZjktNTZjY2M1ZjhjYWY0"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api_id|string|false|none|none|
|client_id|string|false|none|none|
|description|string|false|none|none|
|meta_data|object \| null|false|none|none|
|policy_id|string|false|none|none|
|redirect_uri|string|false|none|none|
|secret|string|false|none|none|

<h2 id="tocS_NotificationsManager">NotificationsManager</h2>
<!-- backwards compatibility -->
<a id="schemanotificationsmanager"></a>
<a id="schema_NotificationsManager"></a>
<a id="tocSnotificationsmanager"></a>
<a id="tocsnotificationsmanager"></a>

```json
{
  "oauth_on_keychange_url": "string",
  "shared_secret": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|oauth_on_keychange_url|string|false|none|none|
|shared_secret|string|false|none|none|

<h2 id="tocS_OASSchemaResponse">OASSchemaResponse</h2>
<!-- backwards compatibility -->
<a id="schemaoasschemaresponse"></a>
<a id="schema_OASSchemaResponse"></a>
<a id="tocSoasschemaresponse"></a>
<a id="tocsoasschemaresponse"></a>

```json
{
  "message": "string",
  "schema": null,
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|none|
|schema|object|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_OAuthClientToken">OAuthClientToken</h2>
<!-- backwards compatibility -->
<a id="schemaoauthclienttoken"></a>
<a id="schema_OAuthClientToken"></a>
<a id="tocSoauthclienttoken"></a>
<a id="tocsoauthclienttoken"></a>

```json
{
  "code": "string",
  "expires": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|none|
|expires|integer|false|none|none|

<h2 id="tocS_OIDC">OIDC</h2>
<!-- backwards compatibility -->
<a id="schemaoidc"></a>
<a id="schema_OIDC"></a>
<a id="tocSoidc"></a>
<a id="tocsoidc"></a>

```json
{
  "AuthSources": {
    "cookie": {
      "enabled": true,
      "name": "string"
    },
    "header": {
      "enabled": true,
      "name": "string"
    },
    "query": {
      "enabled": true,
      "name": "string"
    }
  },
  "enabled": true,
  "providers": [
    {
      "clientToPolicyMapping": [
        {
          "clientId": "string",
          "policyId": "string"
        }
      ],
      "issuer": "string"
    }
  ],
  "scopes": {
    "claimName": "string",
    "scopeToPolicyMapping": [
      {
        "policyId": "string",
        "scope": "string"
      }
    ]
  },
  "segregateByClientId": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|AuthSources|[AuthSources](#schemaauthsources)|false|none|none|
|enabled|boolean|false|none|none|
|providers|[[ProviderType2](#schemaprovidertype2)]|false|none|none|
|scopes|[ScopesType2](#schemascopestype2)|false|none|none|
|segregateByClientId|boolean|false|none|none|

<h2 id="tocS_OIDProviderConfig">OIDProviderConfig</h2>
<!-- backwards compatibility -->
<a id="schemaoidproviderconfig"></a>
<a id="schema_OIDProviderConfig"></a>
<a id="tocSoidproviderconfig"></a>
<a id="tocsoidproviderconfig"></a>

```json
{
  "client_ids": {
    "property1": "string",
    "property2": "string"
  },
  "issuer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_ids|object \| null|false|none|none|
|issuer|string|false|none|none|

<h2 id="tocS_OpenIDOptions">OpenIDOptions</h2>
<!-- backwards compatibility -->
<a id="schemaopenidoptions"></a>
<a id="schema_OpenIDOptions"></a>
<a id="tocSopenidoptions"></a>
<a id="tocsopenidoptions"></a>

```json
{
  "providers": [
    {
      "client_ids": {
        "property1": "string",
        "property2": "string"
      },
      "issuer": "string"
    }
  ],
  "segregate_by_client": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providers|[[OIDProviderConfig](#schemaoidproviderconfig)]|false|none|none|
|segregate_by_client|boolean|false|none|none|

<h2 id="tocS_Operation">Operation</h2>
<!-- backwards compatibility -->
<a id="schemaoperation"></a>
<a id="schema_Operation"></a>
<a id="tocSoperation"></a>
<a id="tocsoperation"></a>

```json
{
  "allow": {
    "enabled": true,
    "ignoreCase": true
  },
  "block": {
    "enabled": true,
    "ignoreCase": true
  },
  "cache": {
    "cacheByRegex": "string",
    "cacheResponseCodes": [
      0
    ],
    "enabled": true,
    "timeout": 0
  },
  "circuitBreaker": {
    "coolDownPeriod": 0,
    "enabled": true,
    "halfOpenStateEnabled": true,
    "sampleSize": 0,
    "threshold": 0
  },
  "doNotTrackEndpoint": {
    "enabled": true
  },
  "enforceTimeout": {
    "enabled": true,
    "value": 0
  },
  "ignoreAuthentication": {
    "enabled": true,
    "ignoreCase": true
  },
  "internal": {
    "enabled": true
  },
  "mockResponse": {
    "body": "string",
    "code": 0,
    "enabled": true,
    "fromOASExamples": {
      "code": 0,
      "contentType": "string",
      "enabled": true,
      "exampleName": "string"
    },
    "headers": [
      {
        "name": "string",
        "value": "string"
      }
    ]
  },
  "postPlugins": [
    {
      "enabled": true,
      "functionName": "string",
      "name": "string",
      "path": "string"
    }
  ],
  "rateLimit": {
    "enabled": true,
    "per": 0,
    "rate": 0
  },
  "requestSizeLimit": {
    "enabled": true,
    "value": 0
  },
  "trackEndpoint": {
    "enabled": true
  },
  "transformRequestBody": {
    "body": "string",
    "enabled": true,
    "format": "string",
    "path": "string"
  },
  "transformRequestHeaders": {
    "add": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "enabled": true,
    "remove": [
      "string"
    ]
  },
  "transformRequestMethod": {
    "enabled": true,
    "toMethod": "string"
  },
  "transformResponseBody": {
    "body": "string",
    "enabled": true,
    "format": "string",
    "path": "string"
  },
  "transformResponseHeaders": {
    "add": [
      {
        "name": "string",
        "value": "string"
      }
    ],
    "enabled": true,
    "remove": [
      "string"
    ]
  },
  "urlRewrite": {
    "enabled": true,
    "pattern": "string",
    "rewriteTo": "string",
    "triggers": [
      {
        "condition": "string",
        "rewriteTo": "string",
        "rules": [
          {
            "in": "string",
            "name": "string",
            "negate": true,
            "pattern": "string"
          }
        ]
      }
    ]
  },
  "validateRequest": {
    "enabled": true,
    "errorResponseCode": 0
  },
  "virtualEndpoint": {
    "body": "string",
    "enabled": true,
    "functionName": "string",
    "name": "string",
    "path": "string",
    "proxyOnError": true,
    "requireSession": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allow|[Allowance](#schemaallowance)|false|none|none|
|block|[Allowance](#schemaallowance)|false|none|none|
|cache|[CachePlugin](#schemacacheplugin)|false|none|none|
|circuitBreaker|[CircuitBreaker](#schemacircuitbreaker)|false|none|none|
|doNotTrackEndpoint|[TrackEndpoint](#schematrackendpoint)|false|none|none|
|enforceTimeout|[EnforceTimeout](#schemaenforcetimeout)|false|none|none|
|ignoreAuthentication|[Allowance](#schemaallowance)|false|none|none|
|internal|[Internal](#schemainternal)|false|none|none|
|mockResponse|[MockResponse](#schemamockresponse)|false|none|none|
|postPlugins|[EndpointPostPlugins](#schemaendpointpostplugins)|false|none|none|
|rateLimit|[RateLimitEndpoint](#schemaratelimitendpoint)|false|none|none|
|requestSizeLimit|[RequestSizeLimit](#schemarequestsizelimit)|false|none|none|
|trackEndpoint|[TrackEndpoint](#schematrackendpoint)|false|none|none|
|transformRequestBody|[TransformBody](#schematransformbody)|false|none|none|
|transformRequestHeaders|[TransformHeaders](#schematransformheaders)|false|none|none|
|transformRequestMethod|[TransformRequestMethod](#schematransformrequestmethod)|false|none|none|
|transformResponseBody|[TransformBody](#schematransformbody)|false|none|none|
|transformResponseHeaders|[TransformHeaders](#schematransformheaders)|false|none|none|
|urlRewrite|[URLRewrite](#schemaurlrewrite)|false|none|none|
|validateRequest|[ValidateRequest](#schemavalidaterequest)|false|none|none|
|virtualEndpoint|[VirtualEndpoint](#schemavirtualendpoint)|false|none|none|

<h2 id="tocS_Operations">Operations</h2>
<!-- backwards compatibility -->
<a id="schemaoperations"></a>
<a id="schema_Operations"></a>
<a id="tocSoperations"></a>
<a id="tocsoperations"></a>

```json
{
  "property1": {
    "allow": {
      "enabled": true,
      "ignoreCase": true
    },
    "block": {
      "enabled": true,
      "ignoreCase": true
    },
    "cache": {
      "cacheByRegex": "string",
      "cacheResponseCodes": [
        0
      ],
      "enabled": true,
      "timeout": 0
    },
    "circuitBreaker": {
      "coolDownPeriod": 0,
      "enabled": true,
      "halfOpenStateEnabled": true,
      "sampleSize": 0,
      "threshold": 0
    },
    "doNotTrackEndpoint": {
      "enabled": true
    },
    "enforceTimeout": {
      "enabled": true,
      "value": 0
    },
    "ignoreAuthentication": {
      "enabled": true,
      "ignoreCase": true
    },
    "internal": {
      "enabled": true
    },
    "mockResponse": {
      "body": "string",
      "code": 0,
      "enabled": true,
      "fromOASExamples": {
        "code": 0,
        "contentType": "string",
        "enabled": true,
        "exampleName": "string"
      },
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    },
    "postPlugins": [
      {
        "enabled": true,
        "functionName": "string",
        "name": "string",
        "path": "string"
      }
    ],
    "rateLimit": {
      "enabled": true,
      "per": 0,
      "rate": 0
    },
    "requestSizeLimit": {
      "enabled": true,
      "value": 0
    },
    "trackEndpoint": {
      "enabled": true
    },
    "transformRequestBody": {
      "body": "string",
      "enabled": true,
      "format": "string",
      "path": "string"
    },
    "transformRequestHeaders": {
      "add": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "enabled": true,
      "remove": [
        "string"
      ]
    },
    "transformRequestMethod": {
      "enabled": true,
      "toMethod": "string"
    },
    "transformResponseBody": {
      "body": "string",
      "enabled": true,
      "format": "string",
      "path": "string"
    },
    "transformResponseHeaders": {
      "add": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "enabled": true,
      "remove": [
        "string"
      ]
    },
    "urlRewrite": {
      "enabled": true,
      "pattern": "string",
      "rewriteTo": "string",
      "triggers": [
        {
          "condition": "string",
          "rewriteTo": "string",
          "rules": [
            {
              "in": "string",
              "name": "string",
              "negate": true,
              "pattern": "string"
            }
          ]
        }
      ]
    },
    "validateRequest": {
      "enabled": true,
      "errorResponseCode": 0
    },
    "virtualEndpoint": {
      "body": "string",
      "enabled": true,
      "functionName": "string",
      "name": "string",
      "path": "string",
      "proxyOnError": true,
      "requireSession": true
    }
  },
  "property2": {
    "allow": {
      "enabled": true,
      "ignoreCase": true
    },
    "block": {
      "enabled": true,
      "ignoreCase": true
    },
    "cache": {
      "cacheByRegex": "string",
      "cacheResponseCodes": [
        0
      ],
      "enabled": true,
      "timeout": 0
    },
    "circuitBreaker": {
      "coolDownPeriod": 0,
      "enabled": true,
      "halfOpenStateEnabled": true,
      "sampleSize": 0,
      "threshold": 0
    },
    "doNotTrackEndpoint": {
      "enabled": true
    },
    "enforceTimeout": {
      "enabled": true,
      "value": 0
    },
    "ignoreAuthentication": {
      "enabled": true,
      "ignoreCase": true
    },
    "internal": {
      "enabled": true
    },
    "mockResponse": {
      "body": "string",
      "code": 0,
      "enabled": true,
      "fromOASExamples": {
        "code": 0,
        "contentType": "string",
        "enabled": true,
        "exampleName": "string"
      },
      "headers": [
        {
          "name": "string",
          "value": "string"
        }
      ]
    },
    "postPlugins": [
      {
        "enabled": true,
        "functionName": "string",
        "name": "string",
        "path": "string"
      }
    ],
    "rateLimit": {
      "enabled": true,
      "per": 0,
      "rate": 0
    },
    "requestSizeLimit": {
      "enabled": true,
      "value": 0
    },
    "trackEndpoint": {
      "enabled": true
    },
    "transformRequestBody": {
      "body": "string",
      "enabled": true,
      "format": "string",
      "path": "string"
    },
    "transformRequestHeaders": {
      "add": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "enabled": true,
      "remove": [
        "string"
      ]
    },
    "transformRequestMethod": {
      "enabled": true,
      "toMethod": "string"
    },
    "transformResponseBody": {
      "body": "string",
      "enabled": true,
      "format": "string",
      "path": "string"
    },
    "transformResponseHeaders": {
      "add": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "enabled": true,
      "remove": [
        "string"
      ]
    },
    "urlRewrite": {
      "enabled": true,
      "pattern": "string",
      "rewriteTo": "string",
      "triggers": [
        {
          "condition": "string",
          "rewriteTo": "string",
          "rules": [
            {
              "in": "string",
              "name": "string",
              "negate": true,
              "pattern": "string"
            }
          ]
        }
      ]
    },
    "validateRequest": {
      "enabled": true,
      "errorResponseCode": 0
    },
    "virtualEndpoint": {
      "body": "string",
      "enabled": true,
      "functionName": "string",
      "name": "string",
      "path": "string",
      "proxyOnError": true,
      "requireSession": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[Operation](#schemaoperation)|false|none|none|

<h2 id="tocS_PaginatedOAuthClientTokens">PaginatedOAuthClientTokens</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedoauthclienttokens"></a>
<a id="schema_PaginatedOAuthClientTokens"></a>
<a id="tocSpaginatedoauthclienttokens"></a>
<a id="tocspaginatedoauthclienttokens"></a>

```json
{
  "Pagination": {
    "page_num": 0,
    "page_size": 0,
    "page_total": 0
  },
  "Tokens": [
    {
      "code": "string",
      "expires": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Pagination|[PaginationStatus](#schemapaginationstatus)|false|none|none|
|Tokens|[[OAuthClientToken](#schemaoauthclienttoken)]|false|none|none|

<h2 id="tocS_PaginationStatus">PaginationStatus</h2>
<!-- backwards compatibility -->
<a id="schemapaginationstatus"></a>
<a id="schema_PaginationStatus"></a>
<a id="tocSpaginationstatus"></a>
<a id="tocspaginationstatus"></a>

```json
{
  "page_num": 0,
  "page_size": 0,
  "page_total": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|page_num|integer|false|none|none|
|page_size|integer|false|none|none|
|page_total|integer|false|none|none|

<h2 id="tocS_PersistGraphQLMeta">PersistGraphQLMeta</h2>
<!-- backwards compatibility -->
<a id="schemapersistgraphqlmeta"></a>
<a id="schema_PersistGraphQLMeta"></a>
<a id="tocSpersistgraphqlmeta"></a>
<a id="tocspersistgraphqlmeta"></a>

```json
{
  "method": "string",
  "operation": "string",
  "path": "string",
  "variables": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|method|string|false|none|none|
|operation|string|false|none|none|
|path|string|false|none|none|
|variables|object \| null|false|none|none|

<h2 id="tocS_PinnedPublicKey">PinnedPublicKey</h2>
<!-- backwards compatibility -->
<a id="schemapinnedpublickey"></a>
<a id="schema_PinnedPublicKey"></a>
<a id="tocSpinnedpublickey"></a>
<a id="tocspinnedpublickey"></a>

```json
{
  "domain": "string",
  "publicKeys": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|string|false|none|none|
|publicKeys|[string]|false|none|none|

<h2 id="tocS_PinnedPublicKeys">PinnedPublicKeys</h2>
<!-- backwards compatibility -->
<a id="schemapinnedpublickeys"></a>
<a id="schema_PinnedPublicKeys"></a>
<a id="tocSpinnedpublickeys"></a>
<a id="tocspinnedpublickeys"></a>

```json
[
  {
    "domain": "string",
    "publicKeys": [
      "string"
    ]
  }
]
```

<h2 id="tocS_PkixName">PkixName</h2>
<!-- backwards compatibility -->
<a id="schemapkixname"></a>
<a id="schema_PkixName"></a>
<a id="tocSpkixname"></a>
<a id="tocspkixname"></a>

```json
{}
```

<h2 id="tocS_PluginBundle">PluginBundle</h2>
<!-- backwards compatibility -->
<a id="schemapluginbundle"></a>
<a id="schema_PluginBundle"></a>
<a id="tocSpluginbundle"></a>
<a id="tocspluginbundle"></a>

```json
{
  "enabled": true,
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_PluginConfig">PluginConfig</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfig"></a>
<a id="schema_PluginConfig"></a>
<a id="tocSpluginconfig"></a>
<a id="tocspluginconfig"></a>

```json
{
  "bundle": {
    "enabled": true,
    "path": "string"
  },
  "data": {
    "enabled": true,
    "value": {
      "property1": null,
      "property2": null
    }
  },
  "driver": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bundle|[PluginBundle](#schemapluginbundle)|false|none|none|
|data|[PluginConfigData](#schemapluginconfigdata)|false|none|none|
|driver|string|false|none|none|

<h2 id="tocS_PluginConfigData">PluginConfigData</h2>
<!-- backwards compatibility -->
<a id="schemapluginconfigdata"></a>
<a id="schema_PluginConfigData"></a>
<a id="tocSpluginconfigdata"></a>
<a id="tocspluginconfigdata"></a>

```json
{
  "enabled": true,
  "value": {
    "property1": null,
    "property2": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|value|object \| null|false|none|none|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "_id": "5ead7120575961000181867e",
  "access_rights": {
    "property1": {
      "allowance_scope": "d371b83b249845a2497ab9a947fd6210",
      "allowed_types": [
        {
          "fields": [
            "string"
          ],
          "name": "string"
        }
      ],
      "allowed_urls": [
        {
          "conditions": [
            {
              "on": "all",
              "options": {
                "body_field_matches": [
                  {
                    "match_rx": "^[0-9]+$",
                    "path": "customer.id"
                  }
                ],
                "header_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "path_part_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "payload_matches": {
                  "match_rx": "string",
                  "reverse": true
                },
                "query_val_matches": {
                  "persnbr": {
                    "match_rx": "",
                    "reverse": true
                  }
                },
                "request_context_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "session_meta_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                }
              }
            }
          ],
          "methods": [
            "GET",
            "POST",
            "DELETE",
            "PUT"
          ],
          "url": "anything/rate-limit-1-per-5"
        }
      ],
      "api_id": "d1dfc6a927a046c54c0ed470f19757cc",
      "api_name": "Rate Limit Proxy API",
      "disable_introspection": false,
      "endpoints": [
        {
          "methods": [
            {
              "limit": {
                "per": 0,
                "rate": 0,
                "smoothing": {
                  "delay": 0,
                  "enabled": true,
                  "step": 0,
                  "threshold": 0,
                  "trigger": 0
                }
              },
              "name": "string"
            }
          ],
          "path": "string"
        }
      ],
      "field_access_rights": [
        {
          "field_name": "string",
          "limits": {
            "max_query_depth": 0
          },
          "type_name": "string"
        }
      ],
      "limit": {
        "max_query_depth": 0,
        "per": 0,
        "quota_max": 0,
        "quota_remaining": 0,
        "quota_renewal_rate": 0,
        "quota_renews": 0,
        "rate": 0,
        "smoothing": {
          "delay": 0,
          "enabled": true,
          "step": 0,
          "threshold": 0,
          "trigger": 0
        },
        "throttle_interval": 0,
        "throttle_retry_limit": 0
      },
      "restricted_types": [
        {
          "fields": [
            "string"
          ],
          "name": "string"
        }
      ],
      "versions": [
        "Default",
        "v2"
      ]
    },
    "property2": {
      "allowance_scope": "d371b83b249845a2497ab9a947fd6210",
      "allowed_types": [
        {
          "fields": [
            "string"
          ],
          "name": "string"
        }
      ],
      "allowed_urls": [
        {
          "conditions": [
            {
              "on": "all",
              "options": {
                "body_field_matches": [
                  {
                    "match_rx": "^[0-9]+$",
                    "path": "customer.id"
                  }
                ],
                "header_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "path_part_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "payload_matches": {
                  "match_rx": "string",
                  "reverse": true
                },
                "query_val_matches": {
                  "persnbr": {
                    "match_rx": "",
                    "reverse": true
                  }
                },
                "request_context_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "session_meta_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                }
              }
            }
          ],
          "methods": [
            "GET",
            "POST",
            "DELETE",
            "PUT"
          ],
          "url": "anything/rate-limit-1-per-5"
        }
      ],
      "api_id": "d1dfc6a927a046c54c0ed470f19757cc",
      "api_name": "Rate Limit Proxy API",
      "disable_introspection": false,
      "endpoints": [
        {
          "methods": [
            {
              "limit": {
                "per": 0,
                "rate": 0,
                "smoothing": {
                  "delay": 0,
                  "enabled": true,
                  "step": 0,
                  "threshold": 0,
                  "trigger": 0
                }
              },
              "name": "string"
            }
          ],
          "path": "string"
        }
      ],
      "field_access_rights": [
        {
          "field_name": "string",
          "limits": {
            "max_query_depth": 0
          },
          "type_name": "string"
        }
      ],
      "limit": {
        "max_query_depth": 0,
        "per": 0,
        "quota_max": 0,
        "quota_remaining": 0,
        "quota_renewal_rate": 0,
        "quota_renews": 0,
        "rate": 0,
        "smoothing": {
          "delay": 0,
          "enabled": true,
          "step": 0,
          "threshold": 0,
          "trigger": 0
        },
        "throttle_interval": 0,
        "throttle_retry_limit": 0
      },
      "restricted_types": [
        {
          "fields": [
            "string"
          ],
          "name": "string"
        }
      ],
      "versions": [
        "Default",
        "v2"
      ]
    }
  },
  "active": true,
  "enable_http_signature_validation": false,
  "graphql_access_rights": {
    "property1": {},
    "property2": {}
  },
  "hmac_enabled": false,
  "id": "5ead7120575961000181867e",
  "is_inactive": false,
  "key_expires_in": 0,
  "last_updated": "1655965189",
  "max_query_depth": -1,
  "meta_data": {
    "property1": null,
    "property2": null
  },
  "name": "Swagger Petstore Policy",
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "partitions": {
    "acl": true,
    "complexity": false,
    "per_api": false,
    "quota": true,
    "rate_limit": true
  },
  "per": 60,
  "post_expiry_action": "delete",
  "post_expiry_grace_period": 0,
  "quota_max": -1,
  "quota_renewal_rate": 3600,
  "rate": 1000,
  "smoothing": {
    "delay": 0,
    "enabled": true,
    "step": 0,
    "threshold": 0,
    "trigger": 0
  },
  "tags": [
    "string"
  ],
  "throttle_interval": -1,
  "throttle_retry_limit": -1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|access_rights|object \| null|false|none|none|
|active|boolean|false|none|none|
|enable_http_signature_validation|boolean|false|none|none|
|graphql_access_rights|object \| null|false|none|none|
|hmac_enabled|boolean|false|none|none|
|id|string|false|none|none|
|is_inactive|boolean|false|none|none|
|key_expires_in|integer(int64)|false|none|none|
|last_updated|string|false|none|none|
|max_query_depth|integer|false|none|none|
|meta_data|object \| null|false|none|none|
|name|string|false|none|none|
|org_id|string|false|none|none|
|partitions|[PolicyPartitions](#schemapolicypartitions)|false|none|none|
|per|number(double)|false|none|none|
|post_expiry_action|string|false|none|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|post_expiry_grace_period|integer(int64)|false|none|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|quota_max|integer(int64)|false|none|none|
|quota_renewal_rate|integer(int64)|false|none|none|
|rate|number(double)|false|none|none|
|smoothing|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|none|
|tags|[string]|false|none|none|
|throttle_interval|number(double)|false|none|none|
|throttle_retry_limit|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|post_expiry_action|retain|
|post_expiry_action|delete|

<h2 id="tocS_PolicyPartitions">PolicyPartitions</h2>
<!-- backwards compatibility -->
<a id="schemapolicypartitions"></a>
<a id="schema_PolicyPartitions"></a>
<a id="tocSpolicypartitions"></a>
<a id="tocspolicypartitions"></a>

```json
{
  "acl": true,
  "complexity": false,
  "per_api": false,
  "quota": true,
  "rate_limit": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acl|boolean|false|none|none|
|complexity|boolean|false|none|none|
|per_api|boolean|false|none|none|
|quota|boolean|false|none|none|
|rate_limit|boolean|false|none|none|

<h2 id="tocS_PolicyUpdateObj">PolicyUpdateObj</h2>
<!-- backwards compatibility -->
<a id="schemapolicyupdateobj"></a>
<a id="schema_PolicyUpdateObj"></a>
<a id="tocSpolicyupdateobj"></a>
<a id="tocspolicyupdateobj"></a>

```json
{
  "apply_policies": [
    "string"
  ],
  "policy": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apply_policies|[string]|false|none|none|
|policy|string|false|none|none|

<h2 id="tocS_PostAuthenticationPlugin">PostAuthenticationPlugin</h2>
<!-- backwards compatibility -->
<a id="schemapostauthenticationplugin"></a>
<a id="schema_PostAuthenticationPlugin"></a>
<a id="tocSpostauthenticationplugin"></a>
<a id="tocspostauthenticationplugin"></a>

```json
{
  "plugins": [
    {
      "enabled": true,
      "functionName": "string",
      "path": "string",
      "rawBodyOnly": true,
      "requireSession": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plugins|[CustomPlugins](#schemacustomplugins)|false|none|none|

<h2 id="tocS_PostPlugin">PostPlugin</h2>
<!-- backwards compatibility -->
<a id="schemapostplugin"></a>
<a id="schema_PostPlugin"></a>
<a id="tocSpostplugin"></a>
<a id="tocspostplugin"></a>

```json
{
  "plugins": [
    {
      "enabled": true,
      "functionName": "string",
      "path": "string",
      "rawBodyOnly": true,
      "requireSession": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plugins|[CustomPlugins](#schemacustomplugins)|false|none|none|

<h2 id="tocS_PrePlugin">PrePlugin</h2>
<!-- backwards compatibility -->
<a id="schemapreplugin"></a>
<a id="schema_PrePlugin"></a>
<a id="tocSpreplugin"></a>
<a id="tocspreplugin"></a>

```json
{
  "plugins": [
    {
      "enabled": true,
      "functionName": "string",
      "path": "string",
      "rawBodyOnly": true,
      "requireSession": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plugins|[CustomPlugins](#schemacustomplugins)|false|none|none|

<h2 id="tocS_Provider">Provider</h2>
<!-- backwards compatibility -->
<a id="schemaprovider"></a>
<a id="schema_Provider"></a>
<a id="tocSprovider"></a>
<a id="tocsprovider"></a>

```json
{
  "introspection": {
    "cache": {
      "enabled": true,
      "timeout": 0
    },
    "client_id": "string",
    "client_secret": "string",
    "enabled": true,
    "identity_base_field": "string",
    "url": "string"
  },
  "jwt": {
    "enabled": true,
    "expires_at_validation_skew": 0,
    "identity_base_field": "string",
    "issued_at_validation_skew": 0,
    "not_before_validation_skew": 0,
    "signing_method": "string",
    "source": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|introspection|[Introspection](#schemaintrospection)|false|none|none|
|jwt|[JWTValidation](#schemajwtvalidation)|false|none|none|

<h2 id="tocS_ProviderType2">ProviderType2</h2>
<!-- backwards compatibility -->
<a id="schemaprovidertype2"></a>
<a id="schema_ProviderType2"></a>
<a id="tocSprovidertype2"></a>
<a id="tocsprovidertype2"></a>

```json
{
  "clientToPolicyMapping": [
    {
      "clientId": "string",
      "policyId": "string"
    }
  ],
  "issuer": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientToPolicyMapping|[[ClientToPolicy](#schemaclienttopolicy)]|false|none|none|
|issuer|string|false|none|none|

<h2 id="tocS_ProxyConfig">ProxyConfig</h2>
<!-- backwards compatibility -->
<a id="schemaproxyconfig"></a>
<a id="schema_ProxyConfig"></a>
<a id="tocSproxyconfig"></a>
<a id="tocsproxyconfig"></a>

```json
{
  "check_host_against_uptime_tests": true,
  "disable_strip_slash": true,
  "enable_load_balancing": true,
  "listen_path": "/relative-path-examples/",
  "preserve_host_header": true,
  "service_discovery": {
    "cache_disabled": true,
    "cache_timeout": 0,
    "data_path": "string",
    "endpoint_returns_list": true,
    "parent_data_path": "string",
    "port_data_path": "string",
    "query_endpoint": "string",
    "target_path": "string",
    "use_discovery_service": true,
    "use_nested_query": true,
    "use_target_list": true
  },
  "strip_listen_path": true,
  "target_list": [
    "string"
  ],
  "target_url": "https://httpbin.org/",
  "transport": {
    "proxy_url": "string",
    "ssl_ciphers": [
      "string"
    ],
    "ssl_force_common_name_check": true,
    "ssl_insecure_skip_verify": true,
    "ssl_max_version": 0,
    "ssl_min_version": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check_host_against_uptime_tests|boolean|false|none|none|
|disable_strip_slash|boolean|false|none|none|
|enable_load_balancing|boolean|false|none|none|
|listen_path|string|false|none|none|
|preserve_host_header|boolean|false|none|none|
|service_discovery|[ServiceDiscoveryConfiguration](#schemaservicediscoveryconfiguration)|false|none|none|
|strip_listen_path|boolean|false|none|none|
|target_list|[string]|false|none|none|
|target_url|string|false|none|none|
|transport|object|false|none|none|

<h2 id="tocS_RateLimit">RateLimit</h2>
<!-- backwards compatibility -->
<a id="schemaratelimit"></a>
<a id="schema_RateLimit"></a>
<a id="tocSratelimit"></a>
<a id="tocsratelimit"></a>

```json
{
  "enabled": true,
  "per": 0,
  "rate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|per|integer|false|none|none|
|rate|integer|false|none|none|

<h2 id="tocS_RateLimitEndpoint">RateLimitEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitendpoint"></a>
<a id="schema_RateLimitEndpoint"></a>
<a id="tocSratelimitendpoint"></a>
<a id="tocsratelimitendpoint"></a>

```json
{
  "enabled": true,
  "per": 0,
  "rate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|per|integer|false|none|none|
|rate|integer|false|none|none|

<h2 id="tocS_RateLimitMeta">RateLimitMeta</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitmeta"></a>
<a id="schema_RateLimitMeta"></a>
<a id="tocSratelimitmeta"></a>
<a id="tocsratelimitmeta"></a>

```json
{
  "disabled": true,
  "method": "string",
  "path": "string",
  "per": 0,
  "rate": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|per|number|false|none|none|
|rate|number|false|none|none|

<h2 id="tocS_RateLimitSmoothing">RateLimitSmoothing</h2>
<!-- backwards compatibility -->
<a id="schemaratelimitsmoothing"></a>
<a id="schema_RateLimitSmoothing"></a>
<a id="tocSratelimitsmoothing"></a>
<a id="tocsratelimitsmoothing"></a>

```json
{
  "delay": 0,
  "enabled": true,
  "step": 0,
  "threshold": 0,
  "trigger": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delay|integer|false|none|none|
|enabled|boolean|false|none|none|
|step|integer|false|none|none|
|threshold|integer|false|none|none|
|trigger|number|false|none|none|

<h2 id="tocS_RateLimitType2">RateLimitType2</h2>
<!-- backwards compatibility -->
<a id="schemaratelimittype2"></a>
<a id="schema_RateLimitType2"></a>
<a id="tocSratelimittype2"></a>
<a id="tocsratelimittype2"></a>

```json
{
  "per": 0,
  "rate": 0,
  "smoothing": {
    "delay": 0,
    "enabled": true,
    "step": 0,
    "threshold": 0,
    "trigger": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|per|number|false|none|none|
|rate|number|false|none|none|
|smoothing|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|none|

<h2 id="tocS_RequestHeadersRewriteConfig">RequestHeadersRewriteConfig</h2>
<!-- backwards compatibility -->
<a id="schemarequestheadersrewriteconfig"></a>
<a id="schema_RequestHeadersRewriteConfig"></a>
<a id="tocSrequestheadersrewriteconfig"></a>
<a id="tocsrequestheadersrewriteconfig"></a>

```json
{
  "remove": true,
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remove|boolean|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_RequestSigningMeta">RequestSigningMeta</h2>
<!-- backwards compatibility -->
<a id="schemarequestsigningmeta"></a>
<a id="schema_RequestSigningMeta"></a>
<a id="tocSrequestsigningmeta"></a>
<a id="tocsrequestsigningmeta"></a>

```json
{
  "algorithm": "string",
  "certificate_id": "string",
  "header_list": [
    "string"
  ],
  "is_enabled": true,
  "key_id": "string",
  "secret": "string",
  "signature_header": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|none|
|certificate_id|string|false|none|none|
|header_list|[string]|false|none|none|
|is_enabled|boolean|false|none|none|
|key_id|string|false|none|none|
|secret|string|false|none|none|
|signature_header|string|false|none|none|

<h2 id="tocS_RequestSizeLimit">RequestSizeLimit</h2>
<!-- backwards compatibility -->
<a id="schemarequestsizelimit"></a>
<a id="schema_RequestSizeLimit"></a>
<a id="tocSrequestsizelimit"></a>
<a id="tocsrequestsizelimit"></a>

```json
{
  "enabled": true,
  "value": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|value|integer|false|none|none|

<h2 id="tocS_RequestSizeMeta">RequestSizeMeta</h2>
<!-- backwards compatibility -->
<a id="schemarequestsizemeta"></a>
<a id="schema_RequestSizeMeta"></a>
<a id="tocSrequestsizemeta"></a>
<a id="tocsrequestsizemeta"></a>

```json
{
  "disabled": true,
  "method": "string",
  "path": "string",
  "size_limit": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|size_limit|integer(int64)|false|none|none|

<h2 id="tocS_ResponsePlugin">ResponsePlugin</h2>
<!-- backwards compatibility -->
<a id="schemaresponseplugin"></a>
<a id="schema_ResponsePlugin"></a>
<a id="tocSresponseplugin"></a>
<a id="tocsresponseplugin"></a>

```json
{
  "plugins": [
    {
      "enabled": true,
      "functionName": "string",
      "path": "string",
      "rawBodyOnly": true,
      "requireSession": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|plugins|[CustomPlugins](#schemacustomplugins)|false|none|none|

<h2 id="tocS_ResponseProcessor">ResponseProcessor</h2>
<!-- backwards compatibility -->
<a id="schemaresponseprocessor"></a>
<a id="schema_ResponseProcessor"></a>
<a id="tocSresponseprocessor"></a>
<a id="tocsresponseprocessor"></a>

```json
{
  "name": "string",
  "options": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|options|object|false|none|none|

<h2 id="tocS_RoutingTrigger">RoutingTrigger</h2>
<!-- backwards compatibility -->
<a id="schemaroutingtrigger"></a>
<a id="schema_RoutingTrigger"></a>
<a id="tocSroutingtrigger"></a>
<a id="tocsroutingtrigger"></a>

```json
{
  "on": "all",
  "options": {
    "header_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    },
    "path_part_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    },
    "payload_matches": {
      "match_rx": "string",
      "reverse": true
    },
    "query_val_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    },
    "request_context_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    },
    "session_meta_matches": {
      "property1": {
        "match_rx": "string",
        "reverse": true
      },
      "property2": {
        "match_rx": "string",
        "reverse": true
      }
    }
  },
  "rewrite_to": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|on|string|false|none|none|
|options|[RoutingTriggerOptions](#schemaroutingtriggeroptions)|false|none|none|
|rewrite_to|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|on|all|
|on|any|

<h2 id="tocS_RoutingTriggerOptions">RoutingTriggerOptions</h2>
<!-- backwards compatibility -->
<a id="schemaroutingtriggeroptions"></a>
<a id="schema_RoutingTriggerOptions"></a>
<a id="tocSroutingtriggeroptions"></a>
<a id="tocsroutingtriggeroptions"></a>

```json
{
  "header_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  },
  "path_part_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  },
  "payload_matches": {
    "match_rx": "string",
    "reverse": true
  },
  "query_val_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  },
  "request_context_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  },
  "session_meta_matches": {
    "property1": {
      "match_rx": "string",
      "reverse": true
    },
    "property2": {
      "match_rx": "string",
      "reverse": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header_matches|object \| null|false|none|none|
|path_part_matches|object \| null|false|none|none|
|payload_matches|[StringRegexMap](#schemastringregexmap)|false|none|none|
|query_val_matches|object \| null|false|none|none|
|request_context_matches|object \| null|false|none|none|
|session_meta_matches|object \| null|false|none|none|

<h2 id="tocS_ScopeClaim">ScopeClaim</h2>
<!-- backwards compatibility -->
<a id="schemascopeclaim"></a>
<a id="schema_ScopeClaim"></a>
<a id="tocSscopeclaim"></a>
<a id="tocsscopeclaim"></a>

```json
{
  "scope_claim_name": "string",
  "scope_to_policy": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope_claim_name|string|false|none|none|
|scope_to_policy|object|false|none|none|

<h2 id="tocS_ScopeToPolicy">ScopeToPolicy</h2>
<!-- backwards compatibility -->
<a id="schemascopetopolicy"></a>
<a id="schema_ScopeToPolicy"></a>
<a id="tocSscopetopolicy"></a>
<a id="tocsscopetopolicy"></a>

```json
{
  "policyId": "string",
  "scope": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|policyId|string|false|none|none|
|scope|string|false|none|none|

<h2 id="tocS_Scopes">Scopes</h2>
<!-- backwards compatibility -->
<a id="schemascopes"></a>
<a id="schema_Scopes"></a>
<a id="tocSscopes"></a>
<a id="tocsscopes"></a>

```json
{
  "jwt": {
    "scope_claim_name": "string",
    "scope_to_policy": {
      "property1": "string",
      "property2": "string"
    }
  },
  "oidc": {
    "scope_claim_name": "string",
    "scope_to_policy": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|jwt|[ScopeClaim](#schemascopeclaim)|false|none|none|
|oidc|[ScopeClaim](#schemascopeclaim)|false|none|none|

<h2 id="tocS_ScopesType2">ScopesType2</h2>
<!-- backwards compatibility -->
<a id="schemascopestype2"></a>
<a id="schema_ScopesType2"></a>
<a id="tocSscopestype2"></a>
<a id="tocsscopestype2"></a>

```json
{
  "claimName": "string",
  "scopeToPolicyMapping": [
    {
      "policyId": "string",
      "scope": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|claimName|string|false|none|none|
|scopeToPolicyMapping|[[ScopeToPolicy](#schemascopetopolicy)]|false|none|none|

<h2 id="tocS_SecuritySchemes">SecuritySchemes</h2>
<!-- backwards compatibility -->
<a id="schemasecurityschemes"></a>
<a id="schema_SecuritySchemes"></a>
<a id="tocSsecurityschemes"></a>
<a id="tocssecurityschemes"></a>

```json
{
  "property1": null,
  "property2": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|object|false|none|none|

<h2 id="tocS_Server">Server</h2>
<!-- backwards compatibility -->
<a id="schemaserver"></a>
<a id="schema_Server"></a>
<a id="tocSserver"></a>
<a id="tocsserver"></a>

```json
{
  "authentication": {
    "baseIdentityProvider": "string",
    "custom": {
      "AuthSources": {
        "cookie": {
          "enabled": true,
          "name": "string"
        },
        "header": {
          "enabled": true,
          "name": "string"
        },
        "query": {
          "enabled": true,
          "name": "string"
        }
      },
      "config": {
        "enabled": true,
        "functionName": "string",
        "idExtractor": {
          "config": {
            "formParamName": "string",
            "headerName": "string",
            "regexp": "string",
            "regexpMatchIndex": 0,
            "xPathExp": "string"
          },
          "enabled": true,
          "source": "string",
          "with": "string"
        },
        "path": "string",
        "rawBodyOnly": true
      },
      "enabled": true
    },
    "enabled": true,
    "hmac": {
      "AuthSources": {
        "cookie": {
          "enabled": true,
          "name": "string"
        },
        "header": {
          "enabled": true,
          "name": "string"
        },
        "query": {
          "enabled": true,
          "name": "string"
        }
      },
      "allowedAlgorithms": [
        "string"
      ],
      "allowedClockSkew": 0,
      "enabled": true
    },
    "oidc": {
      "AuthSources": {
        "cookie": {
          "enabled": true,
          "name": "string"
        },
        "header": {
          "enabled": true,
          "name": "string"
        },
        "query": {
          "enabled": true,
          "name": "string"
        }
      },
      "enabled": true,
      "providers": [
        {
          "clientToPolicyMapping": [
            {
              "clientId": "string",
              "policyId": "string"
            }
          ],
          "issuer": "string"
        }
      ],
      "scopes": {
        "claimName": "string",
        "scopeToPolicyMapping": [
          {
            "policyId": "string",
            "scope": "string"
          }
        ]
      },
      "segregateByClientId": true
    },
    "securitySchemes": {
      "property1": null,
      "property2": null
    },
    "stripAuthorizationData": true
  },
  "clientCertificates": {
    "allowlist": [
      "string"
    ],
    "enabled": true
  },
  "customDomain": {
    "certificates": [
      "string"
    ],
    "enabled": true,
    "name": "string"
  },
  "detailedActivityLogs": {
    "enabled": true
  },
  "detailedTracing": {
    "enabled": true
  },
  "eventHandlers": [
    {
      "enabled": true,
      "id": "string",
      "name": "string",
      "trigger": "string",
      "type": "string"
    }
  ],
  "gatewayTags": {
    "enabled": true,
    "tags": [
      "string"
    ]
  },
  "listenPath": {
    "strip": true,
    "value": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[Authentication](#schemaauthentication)|false|none|none|
|clientCertificates|[ClientCertificates](#schemaclientcertificates)|false|none|none|
|customDomain|[Domain](#schemadomain)|false|none|none|
|detailedActivityLogs|[DetailedActivityLogs](#schemadetailedactivitylogs)|false|none|none|
|detailedTracing|[DetailedTracing](#schemadetailedtracing)|false|none|none|
|eventHandlers|[EventHandlers](#schemaeventhandlers)|false|none|none|
|gatewayTags|[GatewayTags](#schemagatewaytags)|false|none|none|
|listenPath|[ListenPath](#schemalistenpath)|false|none|none|

<h2 id="tocS_ServiceDiscovery">ServiceDiscovery</h2>
<!-- backwards compatibility -->
<a id="schemaservicediscovery"></a>
<a id="schema_ServiceDiscovery"></a>
<a id="tocSservicediscovery"></a>
<a id="tocsservicediscovery"></a>

```json
{
  "cache": {
    "enabled": true,
    "timeout": 0
  },
  "cacheTimeout": 0,
  "dataPath": "string",
  "enabled": true,
  "endpointReturnsList": true,
  "parentDataPath": "string",
  "portDataPath": "string",
  "queryEndpoint": "string",
  "targetPath": "string",
  "useNestedQuery": true,
  "useTargetList": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache|[ServiceDiscoveryCache](#schemaservicediscoverycache)|false|none|none|
|cacheTimeout|integer|false|none|none|
|dataPath|string|false|none|none|
|enabled|boolean|false|none|none|
|endpointReturnsList|boolean|false|none|none|
|parentDataPath|string|false|none|none|
|portDataPath|string|false|none|none|
|queryEndpoint|string|false|none|none|
|targetPath|string|false|none|none|
|useNestedQuery|boolean|false|none|none|
|useTargetList|boolean|false|none|none|

<h2 id="tocS_ServiceDiscoveryCache">ServiceDiscoveryCache</h2>
<!-- backwards compatibility -->
<a id="schemaservicediscoverycache"></a>
<a id="schema_ServiceDiscoveryCache"></a>
<a id="tocSservicediscoverycache"></a>
<a id="tocsservicediscoverycache"></a>

```json
{
  "enabled": true,
  "timeout": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|timeout|integer|false|none|none|

<h2 id="tocS_ServiceDiscoveryConfiguration">ServiceDiscoveryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaservicediscoveryconfiguration"></a>
<a id="schema_ServiceDiscoveryConfiguration"></a>
<a id="tocSservicediscoveryconfiguration"></a>
<a id="tocsservicediscoveryconfiguration"></a>

```json
{
  "cache_disabled": true,
  "cache_timeout": 0,
  "data_path": "string",
  "endpoint_returns_list": true,
  "parent_data_path": "string",
  "port_data_path": "string",
  "query_endpoint": "string",
  "target_path": "string",
  "use_discovery_service": true,
  "use_nested_query": true,
  "use_target_list": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cache_disabled|boolean|false|none|none|
|cache_timeout|integer|false|none|none|
|data_path|string|false|none|none|
|endpoint_returns_list|boolean|false|none|none|
|parent_data_path|string|false|none|none|
|port_data_path|string|false|none|none|
|query_endpoint|string|false|none|none|
|target_path|string|false|none|none|
|use_discovery_service|boolean|false|none|none|
|use_nested_query|boolean|false|none|none|
|use_target_list|boolean|false|none|none|

<h2 id="tocS_SessionProviderMeta">SessionProviderMeta</h2>
<!-- backwards compatibility -->
<a id="schemasessionprovidermeta"></a>
<a id="schema_SessionProviderMeta"></a>
<a id="tocSsessionprovidermeta"></a>
<a id="tocssessionprovidermeta"></a>

```json
{
  "meta": {
    "property1": null,
    "property2": null
  },
  "name": "string",
  "storage_engine": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object \| null|false|none|none|
|name|string|false|none|none|
|storage_engine|string|false|none|none|

<h2 id="tocS_SessionState">SessionState</h2>
<!-- backwards compatibility -->
<a id="schemasessionstate"></a>
<a id="schema_SessionState"></a>
<a id="tocSsessionstate"></a>
<a id="tocssessionstate"></a>

```json
{
  "access_rights": {
    "property1": {
      "allowance_scope": "d371b83b249845a2497ab9a947fd6210",
      "allowed_types": [
        {
          "fields": [
            "string"
          ],
          "name": "string"
        }
      ],
      "allowed_urls": [
        {
          "conditions": [
            {
              "on": "all",
              "options": {
                "body_field_matches": [
                  {
                    "match_rx": "^[0-9]+$",
                    "path": "customer.id"
                  }
                ],
                "header_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "path_part_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "payload_matches": {
                  "match_rx": "string",
                  "reverse": true
                },
                "query_val_matches": {
                  "persnbr": {
                    "match_rx": "",
                    "reverse": true
                  }
                },
                "request_context_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "session_meta_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                }
              }
            }
          ],
          "methods": [
            "GET",
            "POST",
            "DELETE",
            "PUT"
          ],
          "url": "anything/rate-limit-1-per-5"
        }
      ],
      "api_id": "d1dfc6a927a046c54c0ed470f19757cc",
      "api_name": "Rate Limit Proxy API",
      "disable_introspection": false,
      "endpoints": [
        {
          "methods": [
            {
              "limit": {
                "per": 0,
                "rate": 0,
                "smoothing": {
                  "delay": 0,
                  "enabled": true,
                  "step": 0,
                  "threshold": 0,
                  "trigger": 0
                }
              },
              "name": "string"
            }
          ],
          "path": "string"
        }
      ],
      "field_access_rights": [
        {
          "field_name": "string",
          "limits": {
            "max_query_depth": 0
          },
          "type_name": "string"
        }
      ],
      "limit": {
        "max_query_depth": 0,
        "per": 0,
        "quota_max": 0,
        "quota_remaining": 0,
        "quota_renewal_rate": 0,
        "quota_renews": 0,
        "rate": 0,
        "smoothing": {
          "delay": 0,
          "enabled": true,
          "step": 0,
          "threshold": 0,
          "trigger": 0
        },
        "throttle_interval": 0,
        "throttle_retry_limit": 0
      },
      "restricted_types": [
        {
          "fields": [
            "string"
          ],
          "name": "string"
        }
      ],
      "versions": [
        "Default",
        "v2"
      ]
    },
    "property2": {
      "allowance_scope": "d371b83b249845a2497ab9a947fd6210",
      "allowed_types": [
        {
          "fields": [
            "string"
          ],
          "name": "string"
        }
      ],
      "allowed_urls": [
        {
          "conditions": [
            {
              "on": "all",
              "options": {
                "body_field_matches": [
                  {
                    "match_rx": "^[0-9]+$",
                    "path": "customer.id"
                  }
                ],
                "header_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "path_part_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "payload_matches": {
                  "match_rx": "string",
                  "reverse": true
                },
                "query_val_matches": {
                  "persnbr": {
                    "match_rx": "",
                    "reverse": true
                  }
                },
                "request_context_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                },
                "session_meta_matches": {
                  "property1": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "property2": {
                    "match_rx": "string",
                    "reverse": true
                  }
                }
              }
            }
          ],
          "methods": [
            "GET",
            "POST",
            "DELETE",
            "PUT"
          ],
          "url": "anything/rate-limit-1-per-5"
        }
      ],
      "api_id": "d1dfc6a927a046c54c0ed470f19757cc",
      "api_name": "Rate Limit Proxy API",
      "disable_introspection": false,
      "endpoints": [
        {
          "methods": [
            {
              "limit": {
                "per": 0,
                "rate": 0,
                "smoothing": {
                  "delay": 0,
                  "enabled": true,
                  "step": 0,
                  "threshold": 0,
                  "trigger": 0
                }
              },
              "name": "string"
            }
          ],
          "path": "string"
        }
      ],
      "field_access_rights": [
        {
          "field_name": "string",
          "limits": {
            "max_query_depth": 0
          },
          "type_name": "string"
        }
      ],
      "limit": {
        "max_query_depth": 0,
        "per": 0,
        "quota_max": 0,
        "quota_remaining": 0,
        "quota_renewal_rate": 0,
        "quota_renews": 0,
        "rate": 0,
        "smoothing": {
          "delay": 0,
          "enabled": true,
          "step": 0,
          "threshold": 0,
          "trigger": 0
        },
        "throttle_interval": 0,
        "throttle_retry_limit": 0
      },
      "restricted_types": [
        {
          "fields": [
            "string"
          ],
          "name": "string"
        }
      ],
      "versions": [
        "Default",
        "v2"
      ]
    }
  },
  "alias": "portal-developer@example.org",
  "allowance": 1000,
  "apply_policies": [
    "641c15dd0fffb800010197bf"
  ],
  "apply_policy_id": "641c15dd0fffb800010197bf",
  "basic_auth_data": {
    "hash_type": "string",
    "password": "string"
  },
  "certificate": "string",
  "data_expires": 0,
  "date_created": "2024-03-13T03:56:46.568042549Z",
  "enable_detail_recording": false,
  "enable_detailed_recording": true,
  "enable_http_signature_validation": false,
  "expires": 1712895619,
  "hmac_enabled": false,
  "hmac_string": "string",
  "id_extractor_deadline": 0,
  "is_inactive": false,
  "jwt_data": {
    "secret": "string"
  },
  "last_check": 0,
  "last_updated": "1710302206",
  "max_query_depth": -1,
  "meta_data": {
    "tyk_developer_id": "62b3fb9a1d5e4f00017226f5"
  },
  "monitor": {
    "trigger_limits": [
      80,
      60,
      50
    ]
  },
  "oauth_client_id": "string",
  "oauth_keys": {
    "property1": "string",
    "property2": "string"
  },
  "org_id": "5e9d9544a1dcd60001d0ed20",
  "per": 5,
  "post_expiry_action": "delete",
  "post_expiry_grace_period": 0,
  "quota_max": 20000,
  "quota_remaining": 20000,
  "quota_renewal_rate": 31556952,
  "quota_renews": 1710302205,
  "rate": 1,
  "rsa_certificate_id": "string",
  "session_lifetime": 0,
  "smoothing": {
    "delay": 0,
    "enabled": true,
    "step": 0,
    "threshold": 0,
    "trigger": 0
  },
  "tags": [
    "edge",
    "edge-eu"
  ],
  "throttle_interval": 10,
  "throttle_retry_limit": 1000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_rights|object \| null|false|none|none|
|alias|string|false|none|none|
|allowance|number(double)|false|none|none|
|apply_policies|[string]|false|none|none|
|apply_policy_id|string|false|none|**Deprecated.** deprecated use apply_policies going forward instead to send a list of policies ids|
|basic_auth_data|[BasicAuthData](#schemabasicauthdata)|false|none|none|
|certificate|string|false|none|none|
|data_expires|integer(int64)|false|none|none|
|date_created|string(date-time)|false|none|none|
|enable_detail_recording|boolean|false|none|**Deprecated.** deprecated use enable_detailed_recording going forward instead|
|enable_detailed_recording|boolean|false|none|none|
|enable_http_signature_validation|boolean|false|none|none|
|expires|integer(int64)|false|none|none|
|hmac_enabled|boolean|false|none|none|
|hmac_string|string|false|none|none|
|id_extractor_deadline|integer(int64)|false|none|none|
|is_inactive|boolean|false|none|none|
|jwt_data|[JWTData](#schemajwtdata)|false|none|none|
|last_check|integer(int64)|false|none|none|
|last_updated|string|false|none|none|
|max_query_depth|integer|false|none|none|
|meta_data|object \| null|false|none|none|
|monitor|[Monitor](#schemamonitor)|false|none|none|
|oauth_client_id|string|false|none|none|
|oauth_keys|object \| null|false|none|none|
|org_id|string|false|none|none|
|per|number(double)|false|none|none|
|post_expiry_action|string|false|none|Defines the action to take on a Session in Redis after it expires. Valid values are "retain" and "delete".|
|post_expiry_grace_period|integer(int64)|false|none|Duration in seconds to retain a Session in Redis after it expires. Used with post_expiry_action "retain". Set to -1 to retain indefinitely.|
|quota_max|integer(int64)|false|none|none|
|quota_remaining|integer(int64)|false|none|none|
|quota_renewal_rate|integer(int64)|false|none|none|
|quota_renews|integer(int64)|false|none|none|
|rate|number(double)|false|none|none|
|rsa_certificate_id|string|false|none|none|
|session_lifetime|integer(int64)|false|none|none|
|smoothing|[RateLimitSmoothing](#schemaratelimitsmoothing)|false|none|none|
|tags|[string]|false|none|none|
|throttle_interval|number(double)|false|none|none|
|throttle_retry_limit|integer|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|post_expiry_action|retain|
|post_expiry_action|delete|

<h2 id="tocS_SignatureConfig">SignatureConfig</h2>
<!-- backwards compatibility -->
<a id="schemasignatureconfig"></a>
<a id="schema_SignatureConfig"></a>
<a id="tocSsignatureconfig"></a>
<a id="tocssignatureconfig"></a>

```json
{
  "algorithm": "string",
  "allowed_clock_skew": 0,
  "error_code": 0,
  "error_message": "string",
  "header": "string",
  "param_name": "string",
  "secret": "string",
  "use_param": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|algorithm|string|false|none|none|
|allowed_clock_skew|integer|false|none|none|
|error_code|integer|false|none|none|
|error_message|string|false|none|none|
|header|string|false|none|none|
|param_name|string|false|none|none|
|secret|string|false|none|none|
|use_param|boolean|false|none|none|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
{
  "active": true,
  "internal": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|internal|boolean|false|none|none|

<h2 id="tocS_StringRegexMap">StringRegexMap</h2>
<!-- backwards compatibility -->
<a id="schemastringregexmap"></a>
<a id="schema_StringRegexMap"></a>
<a id="tocSstringregexmap"></a>
<a id="tocsstringregexmap"></a>

```json
{
  "match_rx": "string",
  "reverse": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|match_rx|string|false|none|none|
|reverse|boolean|false|none|none|

<h2 id="tocS_TemplateData">TemplateData</h2>
<!-- backwards compatibility -->
<a id="schematemplatedata"></a>
<a id="schema_TemplateData"></a>
<a id="tocStemplatedata"></a>
<a id="tocstemplatedata"></a>

```json
{
  "enable_session": true,
  "input_type": "json",
  "template_mode": "blob",
  "template_source": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enable_session|boolean|false|none|none|
|input_type|string|false|none|none|
|template_mode|string|false|none|none|
|template_source|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|input_type|json|
|input_type|xml|
|template_mode|blob|
|template_mode|file|

<h2 id="tocS_TemplateMeta">TemplateMeta</h2>
<!-- backwards compatibility -->
<a id="schematemplatemeta"></a>
<a id="schema_TemplateMeta"></a>
<a id="tocStemplatemeta"></a>
<a id="tocstemplatemeta"></a>

```json
{
  "disabled": true,
  "method": "string",
  "path": "string",
  "template_data": {
    "enable_session": true,
    "input_type": "json",
    "template_mode": "blob",
    "template_source": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|template_data|[TemplateData](#schematemplatedata)|false|none|none|

<h2 id="tocS_Test">Test</h2>
<!-- backwards compatibility -->
<a id="schematest"></a>
<a id="schema_Test"></a>
<a id="tocStest"></a>
<a id="tocstest"></a>

```json
{
  "serviceDiscovery": {
    "cache": {
      "enabled": true,
      "timeout": 0
    },
    "cacheTimeout": 0,
    "dataPath": "string",
    "enabled": true,
    "endpointReturnsList": true,
    "parentDataPath": "string",
    "portDataPath": "string",
    "queryEndpoint": "string",
    "targetPath": "string",
    "useNestedQuery": true,
    "useTargetList": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|serviceDiscovery|[ServiceDiscovery](#schemaservicediscovery)|false|none|none|

<h2 id="tocS_TraceHttpRequest">TraceHttpRequest</h2>
<!-- backwards compatibility -->
<a id="schematracehttprequest"></a>
<a id="schema_TraceHttpRequest"></a>
<a id="tocStracehttprequest"></a>
<a id="tocstracehttprequest"></a>

```json
{
  "body": "string",
  "headers": {
    "property1": [
      "string"
    ],
    "property2": [
      "string"
    ]
  },
  "method": "GET",
  "path": "/keyless-test/"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|headers|[HttpHeader](#schemahttpheader)|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_TraceRequest">TraceRequest</h2>
<!-- backwards compatibility -->
<a id="schematracerequest"></a>
<a id="schema_TraceRequest"></a>
<a id="tocStracerequest"></a>
<a id="tocstracerequest"></a>

```json
{
  "request": {
    "body": "string",
    "headers": {
      "property1": [
        "string"
      ],
      "property2": [
        "string"
      ]
    },
    "method": "GET",
    "path": "/keyless-test/"
  },
  "spec": {
    "CORS": {
      "allow_credentials": false,
      "allowed_headers": [
        "Origin",
        "Accept",
        "Content-Type",
        "Authorization"
      ],
      "allowed_methods": [
        "GET",
        "HEAD",
        "POST"
      ],
      "allowed_origins": [
        "https://*.foo.com"
      ],
      "debug": true,
      "enable": false,
      "exposed_headers": [
        "Accept",
        "Content-Type"
      ],
      "max_age": 24,
      "options_passthrough": false
    },
    "active": true,
    "allowed_ips": [
      "string"
    ],
    "analytics_plugin": {
      "enable": true,
      "func_name": "string",
      "plugin_path": "string"
    },
    "api_id": "string",
    "auth": {
      "auth_header_name": "Authorization",
      "cookie_name": "string",
      "disable_header": true,
      "name": "string",
      "param_name": "string",
      "signature": {
        "algorithm": "string",
        "allowed_clock_skew": 0,
        "error_code": 0,
        "error_message": "string",
        "header": "string",
        "param_name": "string",
        "secret": "string",
        "use_param": true
      },
      "use_certificate": true,
      "use_cookie": true,
      "use_param": true,
      "validate_signature": true
    },
    "auth_configs": {
      "property1": {
        "auth_header_name": "Authorization",
        "cookie_name": "string",
        "disable_header": true,
        "name": "string",
        "param_name": "string",
        "signature": {
          "algorithm": "string",
          "allowed_clock_skew": 0,
          "error_code": 0,
          "error_message": "string",
          "header": "string",
          "param_name": "string",
          "secret": "string",
          "use_param": true
        },
        "use_certificate": true,
        "use_cookie": true,
        "use_param": true,
        "validate_signature": true
      },
      "property2": {
        "auth_header_name": "Authorization",
        "cookie_name": "string",
        "disable_header": true,
        "name": "string",
        "param_name": "string",
        "signature": {
          "algorithm": "string",
          "allowed_clock_skew": 0,
          "error_code": 0,
          "error_message": "string",
          "header": "string",
          "param_name": "string",
          "secret": "string",
          "use_param": true
        },
        "use_certificate": true,
        "use_cookie": true,
        "use_param": true,
        "validate_signature": true
      }
    },
    "auth_provider": {
      "meta": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "storage_engine": "string"
    },
    "base_identity_provided_by": "string",
    "basic_auth": {
      "body_password_regexp": "string",
      "body_user_regexp": "string",
      "cache_ttl": 0,
      "disable_caching": true,
      "extract_from_body": true
    },
    "blacklisted_ips": [
      "string"
    ],
    "cache_options": {
      "cache_all_safe_requests": false,
      "cache_by_headers": [
        "string"
      ],
      "cache_control_ttl_header": "string",
      "cache_response_codes": [
        0
      ],
      "cache_timeout": 60,
      "enable_cache": true,
      "enable_upstream_cache_control": false
    },
    "certificate_pinning_disabled": true,
    "certificates": [
      "string"
    ],
    "client_certificates": [
      "string"
    ],
    "config_data": {
      "property1": null,
      "property2": null
    },
    "config_data_disabled": true,
    "custom_middleware": {
      "auth_check": {
        "disabled": true,
        "name": "PreMiddlewareFunction",
        "path": "string",
        "raw_body_only": false,
        "require_session": false
      },
      "driver": "string",
      "id_extractor": {
        "disabled": true,
        "extract_from": "string",
        "extract_with": "string",
        "extractor_config": {
          "property1": null,
          "property2": null
        }
      },
      "post": [
        {
          "disabled": true,
          "name": "PreMiddlewareFunction",
          "path": "string",
          "raw_body_only": false,
          "require_session": false
        }
      ],
      "post_key_auth": [
        {
          "disabled": true,
          "name": "PreMiddlewareFunction",
          "path": "string",
          "raw_body_only": false,
          "require_session": false
        }
      ],
      "pre": [
        {
          "disabled": true,
          "name": "PreMiddlewareFunction",
          "path": "string",
          "raw_body_only": false,
          "require_session": false
        }
      ],
      "response": [
        {
          "disabled": true,
          "name": "PreMiddlewareFunction",
          "path": "string",
          "raw_body_only": false,
          "require_session": false
        }
      ]
    },
    "custom_middleware_bundle": "string",
    "custom_middleware_bundle_disabled": true,
    "custom_plugin_auth_enabled": true,
    "definition": {
      "default": "string",
      "enabled": true,
      "fallback_to_default": true,
      "key": "x-api-version",
      "location": "header",
      "name": "string",
      "strip_path": true,
      "strip_versioning_data": true,
      "url_versioning_pattern": "string",
      "versions": {
        "property1": "string",
        "property2": "string"
      }
    },
    "detailed_tracing": true,
    "disable_quota": true,
    "disable_rate_limit": true,
    "do_not_track": true,
    "domain": "string",
    "domain_disabled": true,
    "dont_set_quota_on_create": true,
    "enable_batch_request_support": true,
    "enable_context_vars": true,
    "enable_coprocess_auth": true,
    "enable_detailed_recording": true,
    "enable_ip_blacklisting": true,
    "enable_ip_whitelisting": true,
    "enable_jwt": true,
    "enable_proxy_protocol": true,
    "enable_signature_checking": true,
    "event_handlers": {
      "events": {
        "property1": [
          {
            "handler_meta": {
              "property1": null,
              "property2": null
            },
            "handler_name": "string"
          }
        ],
        "property2": [
          {
            "handler_meta": {
              "property1": null,
              "property2": null
            },
            "handler_name": "string"
          }
        ]
      }
    },
    "expiration": "string",
    "expire_analytics_after": 0,
    "external_oauth": {
      "enabled": true,
      "providers": [
        {
          "introspection": {
            "cache": {
              "enabled": true,
              "timeout": 0
            },
            "client_id": "string",
            "client_secret": "string",
            "enabled": true,
            "identity_base_field": "string",
            "url": "string"
          },
          "jwt": {
            "enabled": true,
            "expires_at_validation_skew": 0,
            "identity_base_field": "string",
            "issued_at_validation_skew": 0,
            "not_before_validation_skew": 0,
            "signing_method": "string",
            "source": "string"
          }
        }
      ]
    },
    "global_rate_limit": {
      "disabled": true,
      "per": 0,
      "rate": 0
    },
    "graphql": {
      "enabled": true,
      "engine": {
        "data_sources": [
          {
            "config": null,
            "internal": true,
            "kind": "string",
            "name": "string",
            "root_fields": [
              {
                "fields": [
                  "string"
                ],
                "type": "string"
              }
            ]
          }
        ],
        "field_configs": [
          {
            "disable_default_mapping": true,
            "field_name": "string",
            "path": [
              "string"
            ],
            "type_name": "string"
          }
        ],
        "global_headers": [
          {
            "key": "string",
            "value": "string"
          }
        ]
      },
      "execution_mode": "proxyOnly",
      "introspection": {
        "disabled": true
      },
      "last_schema_update": "1970-01-01T00:00:00Z",
      "playground": {
        "enabled": true,
        "path": "string"
      },
      "proxy": {
        "auth_headers": {
          "property1": "string",
          "property2": "string"
        },
        "features": {
          "use_immutable_headers": true
        },
        "request_headers": {
          "property1": "string",
          "property2": "string"
        },
        "request_headers_rewrite": {
          "property1": {
            "remove": true,
            "value": "string"
          },
          "property2": {
            "remove": true,
            "value": "string"
          }
        },
        "subscription_type": "string",
        "use_response_extensions": {
          "on_error_forwarding": true
        }
      },
      "schema": "string",
      "subgraph": {
        "sdl": "string"
      },
      "supergraph": {
        "disable_query_batching": true,
        "global_headers": {
          "property1": "string",
          "property2": "string"
        },
        "merged_sdl": "string",
        "subgraphs": [
          {
            "api_id": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "name": "string",
            "sdl": "string",
            "subscription_type": "string",
            "url": "string"
          }
        ],
        "updated_at": "1970-01-01T00:00:00Z"
      },
      "type_field_configurations": [
        {
          "data_source": {
            "data_source_config": null,
            "kind": "string"
          },
          "field_name": "string",
          "mapping": {
            "disabled": true,
            "path": "string"
          },
          "type_name": "string"
        }
      ],
      "version": "1"
    },
    "hmac_allowed_algorithms": [
      "string"
    ],
    "hmac_allowed_clock_skew": 0,
    "id": "string",
    "idp_client_id_mapping_disabled": true,
    "internal": true,
    "is_oas": true,
    "jwt_client_base_field": "string",
    "jwt_default_policies": [
      "string"
    ],
    "jwt_expires_at_validation_skew": 0,
    "jwt_identity_base_field": "string",
    "jwt_issued_at_validation_skew": 0,
    "jwt_not_before_validation_skew": 0,
    "jwt_policy_field_name": "string",
    "jwt_scope_claim_name": "string",
    "jwt_scope_to_policy_mapping": {
      "property1": "string",
      "property2": "string"
    },
    "jwt_signing_method": "string",
    "jwt_skip_kid": true,
    "jwt_source": "string",
    "listen_port": 0,
    "name": "string",
    "notifications": {
      "oauth_on_keychange_url": "string",
      "shared_secret": "string"
    },
    "oauth_meta": {
      "allowed_access_types": [
        "string"
      ],
      "allowed_authorize_types": [
        "string"
      ],
      "auth_login_redirect": "string"
    },
    "openid_options": {
      "providers": [
        {
          "client_ids": {
            "property1": "string",
            "property2": "string"
          },
          "issuer": "string"
        }
      ],
      "segregate_by_client": true
    },
    "org_id": "string",
    "pinned_public_keys": {
      "property1": "string",
      "property2": "string"
    },
    "protocol": "string",
    "proxy": {
      "check_host_against_uptime_tests": true,
      "disable_strip_slash": true,
      "enable_load_balancing": true,
      "listen_path": "/relative-path-examples/",
      "preserve_host_header": true,
      "service_discovery": {
        "cache_disabled": true,
        "cache_timeout": 0,
        "data_path": "string",
        "endpoint_returns_list": true,
        "parent_data_path": "string",
        "port_data_path": "string",
        "query_endpoint": "string",
        "target_path": "string",
        "use_discovery_service": true,
        "use_nested_query": true,
        "use_target_list": true
      },
      "strip_listen_path": true,
      "target_list": [
        "string"
      ],
      "target_url": "https://httpbin.org/",
      "transport": {
        "proxy_url": "string",
        "ssl_ciphers": [
          "string"
        ],
        "ssl_force_common_name_check": true,
        "ssl_insecure_skip_verify": true,
        "ssl_max_version": 0,
        "ssl_min_version": 0
      }
    },
    "request_signing": {
      "algorithm": "string",
      "certificate_id": "string",
      "header_list": [
        "string"
      ],
      "is_enabled": true,
      "key_id": "string",
      "secret": "string",
      "signature_header": "string"
    },
    "response_processors": [
      {
        "name": "string",
        "options": null
      }
    ],
    "scopes": {
      "jwt": {
        "scope_claim_name": "string",
        "scope_to_policy": {
          "property1": "string",
          "property2": "string"
        }
      },
      "oidc": {
        "scope_claim_name": "string",
        "scope_to_policy": {
          "property1": "string",
          "property2": "string"
        }
      }
    },
    "session_lifetime": 0,
    "session_lifetime_respects_key_expiration": true,
    "session_provider": {
      "meta": {
        "property1": null,
        "property2": null
      },
      "name": "string",
      "storage_engine": "string"
    },
    "slug": "string",
    "strip_auth_data": true,
    "tag_headers": [
      "string"
    ],
    "tags": [
      "Default",
      "v1"
    ],
    "tags_disabled": true,
    "upstream_certificates": {
      "property1": "string",
      "property2": "string"
    },
    "upstream_certificates_disabled": true,
    "uptime_tests": {
      "check_list": [
        {
          "body": "string",
          "commands": [
            {
              "message": "string",
              "name": "string"
            }
          ],
          "enable_proxy_protocol": true,
          "headers": {
            "property1": "string",
            "property2": "string"
          },
          "method": "string",
          "protocol": "string",
          "timeout": 0,
          "url": "string"
        }
      ],
      "config": {
        "expire_utime_after": 0,
        "recheck_wait": 0,
        "service_discovery": {
          "cache_disabled": true,
          "cache_timeout": 0,
          "data_path": "string",
          "endpoint_returns_list": true,
          "parent_data_path": "string",
          "port_data_path": "string",
          "query_endpoint": "string",
          "target_path": "string",
          "use_discovery_service": true,
          "use_nested_query": true,
          "use_target_list": true
        }
      }
    },
    "use_basic_auth": true,
    "use_go_plugin_auth": true,
    "use_keyless": true,
    "use_mutual_tls_auth": true,
    "use_oauth2": true,
    "use_openid": true,
    "use_standard_auth": true,
    "version_data": {
      "default_version": "string",
      "not_versioned": true,
      "versions": {
        "property1": {
          "expires": "string",
          "extended_paths": {
            "advance_cache_config": [
              {
                "cache_key_regex": "string",
                "cache_response_codes": [
                  0
                ],
                "disabled": true,
                "method": "string",
                "path": "string",
                "timeout": 0
              }
            ],
            "black_list": [
              {
                "disabled": true,
                "ignore_case": true,
                "method": "string",
                "method_actions": {
                  "property1": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  },
                  "property2": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  }
                },
                "path": "string"
              }
            ],
            "cache": [
              "string"
            ],
            "circuit_breakers": [
              {
                "disable_half_open_state": true,
                "disabled": true,
                "method": "string",
                "path": "string",
                "return_to_service_after": 0,
                "samples": 0,
                "threshold_percent": 0
              }
            ],
            "do_not_track_endpoints": [
              {
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "go_plugin": [
              {
                "disabled": true,
                "func_name": "string",
                "method": "string",
                "path": "string",
                "plugin_path": "string"
              }
            ],
            "hard_timeouts": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "timeout": 0
              }
            ],
            "ignored": [
              {
                "disabled": true,
                "ignore_case": true,
                "method": "string",
                "method_actions": {
                  "property1": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  },
                  "property2": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  }
                },
                "path": "string"
              }
            ],
            "internal": [
              {
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "method_transforms": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "to_method": "string"
              }
            ],
            "mock_response": [
              {
                "body": "string",
                "code": 0,
                "disabled": true,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                },
                "ignore_case": true,
                "method": "string",
                "path": "string"
              }
            ],
            "persist_graphql": [
              {
                "method": "string",
                "operation": "string",
                "path": "string",
                "variables": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "rate_limit": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "per": 0,
                "rate": 0
              }
            ],
            "size_limits": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "size_limit": 0
              }
            ],
            "track_endpoints": [
              {
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "transform": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "template_data": {
                  "enable_session": true,
                  "input_type": "json",
                  "template_mode": "blob",
                  "template_source": "string"
                }
              }
            ],
            "transform_headers": [
              {
                "act_on": true,
                "add_headers": {
                  "property1": "string",
                  "property2": "string"
                },
                "delete_headers": [
                  "string"
                ],
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "transform_jq": [
              {
                "filter": "string",
                "method": "string",
                "path": "string"
              }
            ],
            "transform_jq_response": [
              {
                "filter": "string",
                "method": "string",
                "path": "string"
              }
            ],
            "transform_response": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "template_data": {
                  "enable_session": true,
                  "input_type": "json",
                  "template_mode": "blob",
                  "template_source": "string"
                }
              }
            ],
            "transform_response_headers": [
              {
                "act_on": true,
                "add_headers": {
                  "property1": "string",
                  "property2": "string"
                },
                "delete_headers": [
                  "string"
                ],
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "url_rewrites": [
              {
                "disabled": true,
                "match_pattern": "string",
                "method": "string",
                "path": "string",
                "rewrite_to": "string",
                "triggers": [
                  {
                    "on": "all",
                    "options": {
                      "header_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      },
                      "path_part_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      },
                      "payload_matches": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "query_val_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      },
                      "request_context_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      },
                      "session_meta_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      }
                    },
                    "rewrite_to": "string"
                  }
                ]
              }
            ],
            "validate_json": [
              {
                "disabled": true,
                "error_response_code": 0,
                "method": "string",
                "path": "string",
                "schema": {
                  "property1": null,
                  "property2": null
                },
                "schema_b64": "string"
              }
            ],
            "validate_request": [
              {
                "enabled": true,
                "error_response_code": 0,
                "method": "string",
                "path": "string"
              }
            ],
            "virtual": [
              {
                "disabled": true,
                "function_source_type": "blob",
                "function_source_uri": "string",
                "method": "string",
                "path": "string",
                "proxy_on_error": true,
                "response_function_name": "string",
                "use_session": true
              }
            ],
            "white_list": [
              {
                "disabled": true,
                "ignore_case": true,
                "method": "string",
                "method_actions": {
                  "property1": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  },
                  "property2": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  }
                },
                "path": "string"
              }
            ]
          },
          "global_headers": {
            "property1": "string",
            "property2": "string"
          },
          "global_headers_disabled": true,
          "global_headers_remove": [
            "string"
          ],
          "global_response_headers": {
            "property1": "string",
            "property2": "string"
          },
          "global_response_headers_disabled": true,
          "global_response_headers_remove": [
            "string"
          ],
          "global_size_limit": 0,
          "ignore_endpoint_case": true,
          "name": "string",
          "override_target": "string",
          "paths": {
            "black_list": [
              "string"
            ],
            "ignored": [
              "string"
            ],
            "white_list": [
              "string"
            ]
          },
          "use_extended_paths": true
        },
        "property2": {
          "expires": "string",
          "extended_paths": {
            "advance_cache_config": [
              {
                "cache_key_regex": "string",
                "cache_response_codes": [
                  0
                ],
                "disabled": true,
                "method": "string",
                "path": "string",
                "timeout": 0
              }
            ],
            "black_list": [
              {
                "disabled": true,
                "ignore_case": true,
                "method": "string",
                "method_actions": {
                  "property1": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  },
                  "property2": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  }
                },
                "path": "string"
              }
            ],
            "cache": [
              "string"
            ],
            "circuit_breakers": [
              {
                "disable_half_open_state": true,
                "disabled": true,
                "method": "string",
                "path": "string",
                "return_to_service_after": 0,
                "samples": 0,
                "threshold_percent": 0
              }
            ],
            "do_not_track_endpoints": [
              {
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "go_plugin": [
              {
                "disabled": true,
                "func_name": "string",
                "method": "string",
                "path": "string",
                "plugin_path": "string"
              }
            ],
            "hard_timeouts": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "timeout": 0
              }
            ],
            "ignored": [
              {
                "disabled": true,
                "ignore_case": true,
                "method": "string",
                "method_actions": {
                  "property1": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  },
                  "property2": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  }
                },
                "path": "string"
              }
            ],
            "internal": [
              {
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "method_transforms": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "to_method": "string"
              }
            ],
            "mock_response": [
              {
                "body": "string",
                "code": 0,
                "disabled": true,
                "headers": {
                  "property1": "string",
                  "property2": "string"
                },
                "ignore_case": true,
                "method": "string",
                "path": "string"
              }
            ],
            "persist_graphql": [
              {
                "method": "string",
                "operation": "string",
                "path": "string",
                "variables": {
                  "property1": null,
                  "property2": null
                }
              }
            ],
            "rate_limit": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "per": 0,
                "rate": 0
              }
            ],
            "size_limits": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "size_limit": 0
              }
            ],
            "track_endpoints": [
              {
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "transform": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "template_data": {
                  "enable_session": true,
                  "input_type": "json",
                  "template_mode": "blob",
                  "template_source": "string"
                }
              }
            ],
            "transform_headers": [
              {
                "act_on": true,
                "add_headers": {
                  "property1": "string",
                  "property2": "string"
                },
                "delete_headers": [
                  "string"
                ],
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "transform_jq": [
              {
                "filter": "string",
                "method": "string",
                "path": "string"
              }
            ],
            "transform_jq_response": [
              {
                "filter": "string",
                "method": "string",
                "path": "string"
              }
            ],
            "transform_response": [
              {
                "disabled": true,
                "method": "string",
                "path": "string",
                "template_data": {
                  "enable_session": true,
                  "input_type": "json",
                  "template_mode": "blob",
                  "template_source": "string"
                }
              }
            ],
            "transform_response_headers": [
              {
                "act_on": true,
                "add_headers": {
                  "property1": "string",
                  "property2": "string"
                },
                "delete_headers": [
                  "string"
                ],
                "disabled": true,
                "method": "string",
                "path": "string"
              }
            ],
            "url_rewrites": [
              {
                "disabled": true,
                "match_pattern": "string",
                "method": "string",
                "path": "string",
                "rewrite_to": "string",
                "triggers": [
                  {
                    "on": "all",
                    "options": {
                      "header_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      },
                      "path_part_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      },
                      "payload_matches": {
                        "match_rx": "string",
                        "reverse": true
                      },
                      "query_val_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      },
                      "request_context_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      },
                      "session_meta_matches": {
                        "property1": {
                          "match_rx": "string",
                          "reverse": true
                        },
                        "property2": {
                          "match_rx": "string",
                          "reverse": true
                        }
                      }
                    },
                    "rewrite_to": "string"
                  }
                ]
              }
            ],
            "validate_json": [
              {
                "disabled": true,
                "error_response_code": 0,
                "method": "string",
                "path": "string",
                "schema": {
                  "property1": null,
                  "property2": null
                },
                "schema_b64": "string"
              }
            ],
            "validate_request": [
              {
                "enabled": true,
                "error_response_code": 0,
                "method": "string",
                "path": "string"
              }
            ],
            "virtual": [
              {
                "disabled": true,
                "function_source_type": "blob",
                "function_source_uri": "string",
                "method": "string",
                "path": "string",
                "proxy_on_error": true,
                "response_function_name": "string",
                "use_session": true
              }
            ],
            "white_list": [
              {
                "disabled": true,
                "ignore_case": true,
                "method": "string",
                "method_actions": {
                  "property1": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  },
                  "property2": {
                    "action": "no_action",
                    "code": 0,
                    "data": "string",
                    "headers": {
                      "property1": "string",
                      "property2": "string"
                    }
                  }
                },
                "path": "string"
              }
            ]
          },
          "global_headers": {
            "property1": "string",
            "property2": "string"
          },
          "global_headers_disabled": true,
          "global_headers_remove": [
            "string"
          ],
          "global_response_headers": {
            "property1": "string",
            "property2": "string"
          },
          "global_response_headers_disabled": true,
          "global_response_headers_remove": [
            "string"
          ],
          "global_size_limit": 0,
          "ignore_endpoint_case": true,
          "name": "string",
          "override_target": "string",
          "paths": {
            "black_list": [
              "string"
            ],
            "ignored": [
              "string"
            ],
            "white_list": [
              "string"
            ]
          },
          "use_extended_paths": true
        }
      }
    },
    "error_overrides": {
      "property1": [
        {
          "match": {
            "body_field": "string",
            "body_value": "string",
            "flag": "string",
            "message_pattern": "string"
          },
          "response": {
            "body": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "status_code": 0,
            "template": "string"
          }
        }
      ],
      "property2": [
        {
          "match": {
            "body_field": "string",
            "body_value": "string",
            "flag": "string",
            "message_pattern": "string"
          },
          "response": {
            "body": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "message": "string",
            "status_code": 0,
            "template": "string"
          }
        }
      ]
    },
    "error_overrides_disabled": true
  },
  "oas": {
    "openapi": "string",
    "info": {},
    "externalDocs": {},
    "servers": [
      {}
    ],
    "security": [
      {}
    ],
    "tags": [
      {}
    ],
    "paths": {},
    "components": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|request|[TraceHttpRequest](#schematracehttprequest)|false|none|none|
|spec|[APIDefinition](#schemaapidefinition)|false|none|none|
|oas|object \| [TykVendorExtension](#schematykvendorextension)|false|none|none|
|*oneOf*|object|false|none|none|
|*oneOf*|object|false|none|none|

<h2 id="tocS_TraceResponse">TraceResponse</h2>
<!-- backwards compatibility -->
<a id="schematraceresponse"></a>
<a id="schema_TraceResponse"></a>
<a id="tocStraceresponse"></a>
<a id="tocstraceresponse"></a>

```json
{
  "logs": "{\"level\":\"warning\",\"msg\":\"Legacy path detected! Upgrade to extended....",
  "message": "ok",
  "response": "====== Request ======\nGET / HTTP/1.1\r\nHost: httpbin.org\r\n\r\n\n====== Response..."
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|logs|string|false|none|none|
|message|string|false|none|none|
|response|string|false|none|none|

<h2 id="tocS_TrackEndpoint">TrackEndpoint</h2>
<!-- backwards compatibility -->
<a id="schematrackendpoint"></a>
<a id="schema_TrackEndpoint"></a>
<a id="tocStrackendpoint"></a>
<a id="tocstrackendpoint"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_TrackEndpointMeta">TrackEndpointMeta</h2>
<!-- backwards compatibility -->
<a id="schematrackendpointmeta"></a>
<a id="schema_TrackEndpointMeta"></a>
<a id="tocStrackendpointmeta"></a>
<a id="tocstrackendpointmeta"></a>

```json
{
  "disabled": true,
  "method": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_TrafficLogs">TrafficLogs</h2>
<!-- backwards compatibility -->
<a id="schematrafficlogs"></a>
<a id="schema_TrafficLogs"></a>
<a id="tocStrafficlogs"></a>
<a id="tocstrafficlogs"></a>

```json
{
  "enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|

<h2 id="tocS_TransformBody">TransformBody</h2>
<!-- backwards compatibility -->
<a id="schematransformbody"></a>
<a id="schema_TransformBody"></a>
<a id="tocStransformbody"></a>
<a id="tocstransformbody"></a>

```json
{
  "body": "string",
  "enabled": true,
  "format": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|enabled|boolean|false|none|none|
|format|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_TransformHeaders">TransformHeaders</h2>
<!-- backwards compatibility -->
<a id="schematransformheaders"></a>
<a id="schema_TransformHeaders"></a>
<a id="tocStransformheaders"></a>
<a id="tocstransformheaders"></a>

```json
{
  "add": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "enabled": true,
  "remove": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add|[Headers](#schemaheaders)|false|none|none|
|enabled|boolean|false|none|none|
|remove|[string]|false|none|none|

<h2 id="tocS_TransformJQMeta">TransformJQMeta</h2>
<!-- backwards compatibility -->
<a id="schematransformjqmeta"></a>
<a id="schema_TransformJQMeta"></a>
<a id="tocStransformjqmeta"></a>
<a id="tocstransformjqmeta"></a>

```json
{
  "filter": "string",
  "method": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_TransformRequestMethod">TransformRequestMethod</h2>
<!-- backwards compatibility -->
<a id="schematransformrequestmethod"></a>
<a id="schema_TransformRequestMethod"></a>
<a id="tocStransformrequestmethod"></a>
<a id="tocstransformrequestmethod"></a>

```json
{
  "enabled": true,
  "toMethod": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|toMethod|string|false|none|none|

<h2 id="tocS_UDGGlobalHeader">UDGGlobalHeader</h2>
<!-- backwards compatibility -->
<a id="schemaudgglobalheader"></a>
<a id="schema_UDGGlobalHeader"></a>
<a id="tocSudgglobalheader"></a>
<a id="tocsudgglobalheader"></a>

```json
{
  "key": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_URLRewrite">URLRewrite</h2>
<!-- backwards compatibility -->
<a id="schemaurlrewrite"></a>
<a id="schema_URLRewrite"></a>
<a id="tocSurlrewrite"></a>
<a id="tocsurlrewrite"></a>

```json
{
  "enabled": true,
  "pattern": "string",
  "rewriteTo": "string",
  "triggers": [
    {
      "condition": "string",
      "rewriteTo": "string",
      "rules": [
        {
          "in": "string",
          "name": "string",
          "negate": true,
          "pattern": "string"
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|pattern|string|false|none|none|
|rewriteTo|string|false|none|none|
|triggers|[[URLRewriteTrigger](#schemaurlrewritetrigger)]|false|none|none|

<h2 id="tocS_URLRewriteMeta">URLRewriteMeta</h2>
<!-- backwards compatibility -->
<a id="schemaurlrewritemeta"></a>
<a id="schema_URLRewriteMeta"></a>
<a id="tocSurlrewritemeta"></a>
<a id="tocsurlrewritemeta"></a>

```json
{
  "disabled": true,
  "match_pattern": "string",
  "method": "string",
  "path": "string",
  "rewrite_to": "string",
  "triggers": [
    {
      "on": "all",
      "options": {
        "header_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        },
        "path_part_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        },
        "payload_matches": {
          "match_rx": "string",
          "reverse": true
        },
        "query_val_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        },
        "request_context_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        },
        "session_meta_matches": {
          "property1": {
            "match_rx": "string",
            "reverse": true
          },
          "property2": {
            "match_rx": "string",
            "reverse": true
          }
        }
      },
      "rewrite_to": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|match_pattern|string|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|rewrite_to|string|false|none|none|
|triggers|[[RoutingTrigger](#schemaroutingtrigger)]|false|none|none|

<h2 id="tocS_URLRewriteRule">URLRewriteRule</h2>
<!-- backwards compatibility -->
<a id="schemaurlrewriterule"></a>
<a id="schema_URLRewriteRule"></a>
<a id="tocSurlrewriterule"></a>
<a id="tocsurlrewriterule"></a>

```json
{
  "in": "string",
  "name": "string",
  "negate": true,
  "pattern": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|in|string|false|none|none|
|name|string|false|none|none|
|negate|boolean|false|none|none|
|pattern|string|false|none|none|

<h2 id="tocS_URLRewriteTrigger">URLRewriteTrigger</h2>
<!-- backwards compatibility -->
<a id="schemaurlrewritetrigger"></a>
<a id="schema_URLRewriteTrigger"></a>
<a id="tocSurlrewritetrigger"></a>
<a id="tocsurlrewritetrigger"></a>

```json
{
  "condition": "string",
  "rewriteTo": "string",
  "rules": [
    {
      "in": "string",
      "name": "string",
      "negate": true,
      "pattern": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|string|false|none|none|
|rewriteTo|string|false|none|none|
|rules|[[URLRewriteRule](#schemaurlrewriterule)]|false|none|none|

<h2 id="tocS_Upstream">Upstream</h2>
<!-- backwards compatibility -->
<a id="schemaupstream"></a>
<a id="schema_Upstream"></a>
<a id="tocSupstream"></a>
<a id="tocsupstream"></a>

```json
{
  "certificatePinning": {
    "domainToPublicKeysMapping": [
      {
        "domain": "string",
        "publicKeys": [
          "string"
        ]
      }
    ],
    "enabled": true
  },
  "mutualTLS": {
    "domainToCertificateMapping": [
      {
        "certificate": "string",
        "domain": "string"
      }
    ],
    "enabled": true
  },
  "rateLimit": {
    "enabled": true,
    "per": 0,
    "rate": 0
  },
  "serviceDiscovery": {
    "cache": {
      "enabled": true,
      "timeout": 0
    },
    "cacheTimeout": 0,
    "dataPath": "string",
    "enabled": true,
    "endpointReturnsList": true,
    "parentDataPath": "string",
    "portDataPath": "string",
    "queryEndpoint": "string",
    "targetPath": "string",
    "useNestedQuery": true,
    "useTargetList": true
  },
  "test": {
    "serviceDiscovery": {
      "cache": {
        "enabled": true,
        "timeout": 0
      },
      "cacheTimeout": 0,
      "dataPath": "string",
      "enabled": true,
      "endpointReturnsList": true,
      "parentDataPath": "string",
      "portDataPath": "string",
      "queryEndpoint": "string",
      "targetPath": "string",
      "useNestedQuery": true,
      "useTargetList": true
    }
  },
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificatePinning|[CertificatePinning](#schemacertificatepinning)|false|none|none|
|mutualTLS|[MutualTLS](#schemamutualtls)|false|none|none|
|rateLimit|[RateLimit](#schemaratelimit)|false|none|none|
|serviceDiscovery|[ServiceDiscovery](#schemaservicediscovery)|false|none|none|
|test|[Test](#schematest)|false|none|none|
|url|string|false|none|none|

<h2 id="tocS_UptimeTests">UptimeTests</h2>
<!-- backwards compatibility -->
<a id="schemauptimetests"></a>
<a id="schema_UptimeTests"></a>
<a id="tocSuptimetests"></a>
<a id="tocsuptimetests"></a>

```json
{
  "check_list": [
    {
      "body": "string",
      "commands": [
        {
          "message": "string",
          "name": "string"
        }
      ],
      "enable_proxy_protocol": true,
      "headers": {
        "property1": "string",
        "property2": "string"
      },
      "method": "string",
      "protocol": "string",
      "timeout": 0,
      "url": "string"
    }
  ],
  "config": {
    "expire_utime_after": 0,
    "recheck_wait": 0,
    "service_discovery": {
      "cache_disabled": true,
      "cache_timeout": 0,
      "data_path": "string",
      "endpoint_returns_list": true,
      "parent_data_path": "string",
      "port_data_path": "string",
      "query_endpoint": "string",
      "target_path": "string",
      "use_discovery_service": true,
      "use_nested_query": true,
      "use_target_list": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|check_list|[[HostCheckObject](#schemahostcheckobject)]|false|none|none|
|config|[UptimeTestsConfig](#schemauptimetestsconfig)|false|none|none|

<h2 id="tocS_UptimeTestsConfig">UptimeTestsConfig</h2>
<!-- backwards compatibility -->
<a id="schemauptimetestsconfig"></a>
<a id="schema_UptimeTestsConfig"></a>
<a id="tocSuptimetestsconfig"></a>
<a id="tocsuptimetestsconfig"></a>

```json
{
  "expire_utime_after": 0,
  "recheck_wait": 0,
  "service_discovery": {
    "cache_disabled": true,
    "cache_timeout": 0,
    "data_path": "string",
    "endpoint_returns_list": true,
    "parent_data_path": "string",
    "port_data_path": "string",
    "query_endpoint": "string",
    "target_path": "string",
    "use_discovery_service": true,
    "use_nested_query": true,
    "use_target_list": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expire_utime_after|integer|false|none|none|
|recheck_wait|integer|false|none|none|
|service_discovery|[ServiceDiscoveryConfiguration](#schemaservicediscoveryconfiguration)|false|none|none|

<h2 id="tocS_ValidatePathMeta">ValidatePathMeta</h2>
<!-- backwards compatibility -->
<a id="schemavalidatepathmeta"></a>
<a id="schema_ValidatePathMeta"></a>
<a id="tocSvalidatepathmeta"></a>
<a id="tocsvalidatepathmeta"></a>

```json
{
  "disabled": true,
  "error_response_code": 0,
  "method": "string",
  "path": "string",
  "schema": {
    "property1": null,
    "property2": null
  },
  "schema_b64": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|error_response_code|integer|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|schema|object \| null|false|none|none|
|schema_b64|string|false|none|none|

<h2 id="tocS_ValidateRequest">ValidateRequest</h2>
<!-- backwards compatibility -->
<a id="schemavalidaterequest"></a>
<a id="schema_ValidateRequest"></a>
<a id="tocSvalidaterequest"></a>
<a id="tocsvalidaterequest"></a>

```json
{
  "enabled": true,
  "errorResponseCode": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|errorResponseCode|integer|false|none|none|

<h2 id="tocS_ValidateRequestMeta">ValidateRequestMeta</h2>
<!-- backwards compatibility -->
<a id="schemavalidaterequestmeta"></a>
<a id="schema_ValidateRequestMeta"></a>
<a id="tocSvalidaterequestmeta"></a>
<a id="tocsvalidaterequestmeta"></a>

```json
{
  "enabled": true,
  "error_response_code": 0,
  "method": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|none|
|error_response_code|integer|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_VersionData">VersionData</h2>
<!-- backwards compatibility -->
<a id="schemaversiondata"></a>
<a id="schema_VersionData"></a>
<a id="tocSversiondata"></a>
<a id="tocsversiondata"></a>

```json
{
  "default_version": "string",
  "not_versioned": true,
  "versions": {
    "property1": {
      "expires": "string",
      "extended_paths": {
        "advance_cache_config": [
          {
            "cache_key_regex": "string",
            "cache_response_codes": [
              0
            ],
            "disabled": true,
            "method": "string",
            "path": "string",
            "timeout": 0
          }
        ],
        "black_list": [
          {
            "disabled": true,
            "ignore_case": true,
            "method": "string",
            "method_actions": {
              "property1": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            },
            "path": "string"
          }
        ],
        "cache": [
          "string"
        ],
        "circuit_breakers": [
          {
            "disable_half_open_state": true,
            "disabled": true,
            "method": "string",
            "path": "string",
            "return_to_service_after": 0,
            "samples": 0,
            "threshold_percent": 0
          }
        ],
        "do_not_track_endpoints": [
          {
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "go_plugin": [
          {
            "disabled": true,
            "func_name": "string",
            "method": "string",
            "path": "string",
            "plugin_path": "string"
          }
        ],
        "hard_timeouts": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "timeout": 0
          }
        ],
        "ignored": [
          {
            "disabled": true,
            "ignore_case": true,
            "method": "string",
            "method_actions": {
              "property1": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            },
            "path": "string"
          }
        ],
        "internal": [
          {
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "method_transforms": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "to_method": "string"
          }
        ],
        "mock_response": [
          {
            "body": "string",
            "code": 0,
            "disabled": true,
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "ignore_case": true,
            "method": "string",
            "path": "string"
          }
        ],
        "persist_graphql": [
          {
            "method": "string",
            "operation": "string",
            "path": "string",
            "variables": {
              "property1": null,
              "property2": null
            }
          }
        ],
        "rate_limit": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "per": 0,
            "rate": 0
          }
        ],
        "size_limits": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "size_limit": 0
          }
        ],
        "track_endpoints": [
          {
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "transform": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "template_data": {
              "enable_session": true,
              "input_type": "json",
              "template_mode": "blob",
              "template_source": "string"
            }
          }
        ],
        "transform_headers": [
          {
            "act_on": true,
            "add_headers": {
              "property1": "string",
              "property2": "string"
            },
            "delete_headers": [
              "string"
            ],
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "transform_jq": [
          {
            "filter": "string",
            "method": "string",
            "path": "string"
          }
        ],
        "transform_jq_response": [
          {
            "filter": "string",
            "method": "string",
            "path": "string"
          }
        ],
        "transform_response": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "template_data": {
              "enable_session": true,
              "input_type": "json",
              "template_mode": "blob",
              "template_source": "string"
            }
          }
        ],
        "transform_response_headers": [
          {
            "act_on": true,
            "add_headers": {
              "property1": "string",
              "property2": "string"
            },
            "delete_headers": [
              "string"
            ],
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "url_rewrites": [
          {
            "disabled": true,
            "match_pattern": "string",
            "method": "string",
            "path": "string",
            "rewrite_to": "string",
            "triggers": [
              {
                "on": "all",
                "options": {
                  "header_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  },
                  "path_part_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  },
                  "payload_matches": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "query_val_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  },
                  "request_context_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  },
                  "session_meta_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  }
                },
                "rewrite_to": "string"
              }
            ]
          }
        ],
        "validate_json": [
          {
            "disabled": true,
            "error_response_code": 0,
            "method": "string",
            "path": "string",
            "schema": {
              "property1": null,
              "property2": null
            },
            "schema_b64": "string"
          }
        ],
        "validate_request": [
          {
            "enabled": true,
            "error_response_code": 0,
            "method": "string",
            "path": "string"
          }
        ],
        "virtual": [
          {
            "disabled": true,
            "function_source_type": "blob",
            "function_source_uri": "string",
            "method": "string",
            "path": "string",
            "proxy_on_error": true,
            "response_function_name": "string",
            "use_session": true
          }
        ],
        "white_list": [
          {
            "disabled": true,
            "ignore_case": true,
            "method": "string",
            "method_actions": {
              "property1": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            },
            "path": "string"
          }
        ]
      },
      "global_headers": {
        "property1": "string",
        "property2": "string"
      },
      "global_headers_disabled": true,
      "global_headers_remove": [
        "string"
      ],
      "global_response_headers": {
        "property1": "string",
        "property2": "string"
      },
      "global_response_headers_disabled": true,
      "global_response_headers_remove": [
        "string"
      ],
      "global_size_limit": 0,
      "ignore_endpoint_case": true,
      "name": "string",
      "override_target": "string",
      "paths": {
        "black_list": [
          "string"
        ],
        "ignored": [
          "string"
        ],
        "white_list": [
          "string"
        ]
      },
      "use_extended_paths": true
    },
    "property2": {
      "expires": "string",
      "extended_paths": {
        "advance_cache_config": [
          {
            "cache_key_regex": "string",
            "cache_response_codes": [
              0
            ],
            "disabled": true,
            "method": "string",
            "path": "string",
            "timeout": 0
          }
        ],
        "black_list": [
          {
            "disabled": true,
            "ignore_case": true,
            "method": "string",
            "method_actions": {
              "property1": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            },
            "path": "string"
          }
        ],
        "cache": [
          "string"
        ],
        "circuit_breakers": [
          {
            "disable_half_open_state": true,
            "disabled": true,
            "method": "string",
            "path": "string",
            "return_to_service_after": 0,
            "samples": 0,
            "threshold_percent": 0
          }
        ],
        "do_not_track_endpoints": [
          {
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "go_plugin": [
          {
            "disabled": true,
            "func_name": "string",
            "method": "string",
            "path": "string",
            "plugin_path": "string"
          }
        ],
        "hard_timeouts": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "timeout": 0
          }
        ],
        "ignored": [
          {
            "disabled": true,
            "ignore_case": true,
            "method": "string",
            "method_actions": {
              "property1": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            },
            "path": "string"
          }
        ],
        "internal": [
          {
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "method_transforms": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "to_method": "string"
          }
        ],
        "mock_response": [
          {
            "body": "string",
            "code": 0,
            "disabled": true,
            "headers": {
              "property1": "string",
              "property2": "string"
            },
            "ignore_case": true,
            "method": "string",
            "path": "string"
          }
        ],
        "persist_graphql": [
          {
            "method": "string",
            "operation": "string",
            "path": "string",
            "variables": {
              "property1": null,
              "property2": null
            }
          }
        ],
        "rate_limit": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "per": 0,
            "rate": 0
          }
        ],
        "size_limits": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "size_limit": 0
          }
        ],
        "track_endpoints": [
          {
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "transform": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "template_data": {
              "enable_session": true,
              "input_type": "json",
              "template_mode": "blob",
              "template_source": "string"
            }
          }
        ],
        "transform_headers": [
          {
            "act_on": true,
            "add_headers": {
              "property1": "string",
              "property2": "string"
            },
            "delete_headers": [
              "string"
            ],
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "transform_jq": [
          {
            "filter": "string",
            "method": "string",
            "path": "string"
          }
        ],
        "transform_jq_response": [
          {
            "filter": "string",
            "method": "string",
            "path": "string"
          }
        ],
        "transform_response": [
          {
            "disabled": true,
            "method": "string",
            "path": "string",
            "template_data": {
              "enable_session": true,
              "input_type": "json",
              "template_mode": "blob",
              "template_source": "string"
            }
          }
        ],
        "transform_response_headers": [
          {
            "act_on": true,
            "add_headers": {
              "property1": "string",
              "property2": "string"
            },
            "delete_headers": [
              "string"
            ],
            "disabled": true,
            "method": "string",
            "path": "string"
          }
        ],
        "url_rewrites": [
          {
            "disabled": true,
            "match_pattern": "string",
            "method": "string",
            "path": "string",
            "rewrite_to": "string",
            "triggers": [
              {
                "on": "all",
                "options": {
                  "header_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  },
                  "path_part_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  },
                  "payload_matches": {
                    "match_rx": "string",
                    "reverse": true
                  },
                  "query_val_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  },
                  "request_context_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  },
                  "session_meta_matches": {
                    "property1": {
                      "match_rx": "string",
                      "reverse": true
                    },
                    "property2": {
                      "match_rx": "string",
                      "reverse": true
                    }
                  }
                },
                "rewrite_to": "string"
              }
            ]
          }
        ],
        "validate_json": [
          {
            "disabled": true,
            "error_response_code": 0,
            "method": "string",
            "path": "string",
            "schema": {
              "property1": null,
              "property2": null
            },
            "schema_b64": "string"
          }
        ],
        "validate_request": [
          {
            "enabled": true,
            "error_response_code": 0,
            "method": "string",
            "path": "string"
          }
        ],
        "virtual": [
          {
            "disabled": true,
            "function_source_type": "blob",
            "function_source_uri": "string",
            "method": "string",
            "path": "string",
            "proxy_on_error": true,
            "response_function_name": "string",
            "use_session": true
          }
        ],
        "white_list": [
          {
            "disabled": true,
            "ignore_case": true,
            "method": "string",
            "method_actions": {
              "property1": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              },
              "property2": {
                "action": "no_action",
                "code": 0,
                "data": "string",
                "headers": {
                  "property1": "string",
                  "property2": "string"
                }
              }
            },
            "path": "string"
          }
        ]
      },
      "global_headers": {
        "property1": "string",
        "property2": "string"
      },
      "global_headers_disabled": true,
      "global_headers_remove": [
        "string"
      ],
      "global_response_headers": {
        "property1": "string",
        "property2": "string"
      },
      "global_response_headers_disabled": true,
      "global_response_headers_remove": [
        "string"
      ],
      "global_size_limit": 0,
      "ignore_endpoint_case": true,
      "name": "string",
      "override_target": "string",
      "paths": {
        "black_list": [
          "string"
        ],
        "ignored": [
          "string"
        ],
        "white_list": [
          "string"
        ]
      },
      "use_extended_paths": true
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default_version|string|false|none|none|
|not_versioned|boolean|false|none|none|
|versions|object \| null|false|none|none|

<h2 id="tocS_VersionDefinition">VersionDefinition</h2>
<!-- backwards compatibility -->
<a id="schemaversiondefinition"></a>
<a id="schema_VersionDefinition"></a>
<a id="tocSversiondefinition"></a>
<a id="tocsversiondefinition"></a>

```json
{
  "default": "string",
  "enabled": true,
  "fallback_to_default": true,
  "key": "x-api-version",
  "location": "header",
  "name": "string",
  "strip_path": true,
  "strip_versioning_data": true,
  "url_versioning_pattern": "string",
  "versions": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|string|false|none|none|
|enabled|boolean|false|none|none|
|fallback_to_default|boolean|false|none|none|
|key|string|false|none|none|
|location|string|false|none|none|
|name|string|false|none|none|
|strip_path|boolean|false|none|none|
|strip_versioning_data|boolean|false|none|none|
|url_versioning_pattern|string|false|none|none|
|versions|object \| null|false|none|none|

<h2 id="tocS_VersionInfo">VersionInfo</h2>
<!-- backwards compatibility -->
<a id="schemaversioninfo"></a>
<a id="schema_VersionInfo"></a>
<a id="tocSversioninfo"></a>
<a id="tocsversioninfo"></a>

```json
{
  "expires": "string",
  "extended_paths": {
    "advance_cache_config": [
      {
        "cache_key_regex": "string",
        "cache_response_codes": [
          0
        ],
        "disabled": true,
        "method": "string",
        "path": "string",
        "timeout": 0
      }
    ],
    "black_list": [
      {
        "disabled": true,
        "ignore_case": true,
        "method": "string",
        "method_actions": {
          "property1": {
            "action": "no_action",
            "code": 0,
            "data": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "action": "no_action",
            "code": 0,
            "data": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "path": "string"
      }
    ],
    "cache": [
      "string"
    ],
    "circuit_breakers": [
      {
        "disable_half_open_state": true,
        "disabled": true,
        "method": "string",
        "path": "string",
        "return_to_service_after": 0,
        "samples": 0,
        "threshold_percent": 0
      }
    ],
    "do_not_track_endpoints": [
      {
        "disabled": true,
        "method": "string",
        "path": "string"
      }
    ],
    "go_plugin": [
      {
        "disabled": true,
        "func_name": "string",
        "method": "string",
        "path": "string",
        "plugin_path": "string"
      }
    ],
    "hard_timeouts": [
      {
        "disabled": true,
        "method": "string",
        "path": "string",
        "timeout": 0
      }
    ],
    "ignored": [
      {
        "disabled": true,
        "ignore_case": true,
        "method": "string",
        "method_actions": {
          "property1": {
            "action": "no_action",
            "code": 0,
            "data": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "action": "no_action",
            "code": 0,
            "data": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "path": "string"
      }
    ],
    "internal": [
      {
        "disabled": true,
        "method": "string",
        "path": "string"
      }
    ],
    "method_transforms": [
      {
        "disabled": true,
        "method": "string",
        "path": "string",
        "to_method": "string"
      }
    ],
    "mock_response": [
      {
        "body": "string",
        "code": 0,
        "disabled": true,
        "headers": {
          "property1": "string",
          "property2": "string"
        },
        "ignore_case": true,
        "method": "string",
        "path": "string"
      }
    ],
    "persist_graphql": [
      {
        "method": "string",
        "operation": "string",
        "path": "string",
        "variables": {
          "property1": null,
          "property2": null
        }
      }
    ],
    "rate_limit": [
      {
        "disabled": true,
        "method": "string",
        "path": "string",
        "per": 0,
        "rate": 0
      }
    ],
    "size_limits": [
      {
        "disabled": true,
        "method": "string",
        "path": "string",
        "size_limit": 0
      }
    ],
    "track_endpoints": [
      {
        "disabled": true,
        "method": "string",
        "path": "string"
      }
    ],
    "transform": [
      {
        "disabled": true,
        "method": "string",
        "path": "string",
        "template_data": {
          "enable_session": true,
          "input_type": "json",
          "template_mode": "blob",
          "template_source": "string"
        }
      }
    ],
    "transform_headers": [
      {
        "act_on": true,
        "add_headers": {
          "property1": "string",
          "property2": "string"
        },
        "delete_headers": [
          "string"
        ],
        "disabled": true,
        "method": "string",
        "path": "string"
      }
    ],
    "transform_jq": [
      {
        "filter": "string",
        "method": "string",
        "path": "string"
      }
    ],
    "transform_jq_response": [
      {
        "filter": "string",
        "method": "string",
        "path": "string"
      }
    ],
    "transform_response": [
      {
        "disabled": true,
        "method": "string",
        "path": "string",
        "template_data": {
          "enable_session": true,
          "input_type": "json",
          "template_mode": "blob",
          "template_source": "string"
        }
      }
    ],
    "transform_response_headers": [
      {
        "act_on": true,
        "add_headers": {
          "property1": "string",
          "property2": "string"
        },
        "delete_headers": [
          "string"
        ],
        "disabled": true,
        "method": "string",
        "path": "string"
      }
    ],
    "url_rewrites": [
      {
        "disabled": true,
        "match_pattern": "string",
        "method": "string",
        "path": "string",
        "rewrite_to": "string",
        "triggers": [
          {
            "on": "all",
            "options": {
              "header_matches": {
                "property1": {
                  "match_rx": "string",
                  "reverse": true
                },
                "property2": {
                  "match_rx": "string",
                  "reverse": true
                }
              },
              "path_part_matches": {
                "property1": {
                  "match_rx": "string",
                  "reverse": true
                },
                "property2": {
                  "match_rx": "string",
                  "reverse": true
                }
              },
              "payload_matches": {
                "match_rx": "string",
                "reverse": true
              },
              "query_val_matches": {
                "property1": {
                  "match_rx": "string",
                  "reverse": true
                },
                "property2": {
                  "match_rx": "string",
                  "reverse": true
                }
              },
              "request_context_matches": {
                "property1": {
                  "match_rx": "string",
                  "reverse": true
                },
                "property2": {
                  "match_rx": "string",
                  "reverse": true
                }
              },
              "session_meta_matches": {
                "property1": {
                  "match_rx": "string",
                  "reverse": true
                },
                "property2": {
                  "match_rx": "string",
                  "reverse": true
                }
              }
            },
            "rewrite_to": "string"
          }
        ]
      }
    ],
    "validate_json": [
      {
        "disabled": true,
        "error_response_code": 0,
        "method": "string",
        "path": "string",
        "schema": {
          "property1": null,
          "property2": null
        },
        "schema_b64": "string"
      }
    ],
    "validate_request": [
      {
        "enabled": true,
        "error_response_code": 0,
        "method": "string",
        "path": "string"
      }
    ],
    "virtual": [
      {
        "disabled": true,
        "function_source_type": "blob",
        "function_source_uri": "string",
        "method": "string",
        "path": "string",
        "proxy_on_error": true,
        "response_function_name": "string",
        "use_session": true
      }
    ],
    "white_list": [
      {
        "disabled": true,
        "ignore_case": true,
        "method": "string",
        "method_actions": {
          "property1": {
            "action": "no_action",
            "code": 0,
            "data": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          },
          "property2": {
            "action": "no_action",
            "code": 0,
            "data": "string",
            "headers": {
              "property1": "string",
              "property2": "string"
            }
          }
        },
        "path": "string"
      }
    ]
  },
  "global_headers": {
    "property1": "string",
    "property2": "string"
  },
  "global_headers_disabled": true,
  "global_headers_remove": [
    "string"
  ],
  "global_response_headers": {
    "property1": "string",
    "property2": "string"
  },
  "global_response_headers_disabled": true,
  "global_response_headers_remove": [
    "string"
  ],
  "global_size_limit": 0,
  "ignore_endpoint_case": true,
  "name": "string",
  "override_target": "string",
  "paths": {
    "black_list": [
      "string"
    ],
    "ignored": [
      "string"
    ],
    "white_list": [
      "string"
    ]
  },
  "use_extended_paths": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires|string|false|none|none|
|extended_paths|[ExtendedPathsSet](#schemaextendedpathsset)|false|none|none|
|global_headers|object \| null|false|none|none|
|global_headers_disabled|boolean|false|none|none|
|global_headers_remove|[string]|false|none|none|
|global_response_headers|object \| null|false|none|none|
|global_response_headers_disabled|boolean|false|none|none|
|global_response_headers_remove|[string]|false|none|none|
|global_size_limit|integer(int64)|false|none|none|
|ignore_endpoint_case|boolean|false|none|none|
|name|string|false|none|none|
|override_target|string|false|none|none|
|paths|object|false|none|none|
|use_extended_paths|boolean|false|none|none|

<h2 id="tocS_VersionMeta">VersionMeta</h2>
<!-- backwards compatibility -->
<a id="schemaversionmeta"></a>
<a id="schema_VersionMeta"></a>
<a id="tocSversionmeta"></a>
<a id="tocsversionmeta"></a>

```json
{
  "expirationDate": "2026-03-26 09:00",
  "id": "keyless",
  "internal": false,
  "isDefaultVersion": true,
  "name": "Tyk Test Keyless API",
  "versionName": "v2"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expirationDate|string|false|none|none|
|id|string|false|none|none|
|internal|boolean|false|none|none|
|isDefaultVersion|boolean|false|none|none|
|name|string|false|none|none|
|versionName|string|false|none|none|

<h2 id="tocS_VersionMetas">VersionMetas</h2>
<!-- backwards compatibility -->
<a id="schemaversionmetas"></a>
<a id="schema_VersionMetas"></a>
<a id="tocSversionmetas"></a>
<a id="tocsversionmetas"></a>

```json
{
  "apis": [
    {
      "expirationDate": "2026-03-26 09:00",
      "id": "keyless",
      "internal": false,
      "isDefaultVersion": true,
      "name": "Tyk Test Keyless API",
      "versionName": "v2"
    }
  ],
  "status": "success"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|apis|[[VersionMeta](#schemaversionmeta)]|false|none|none|
|status|string|false|none|none|

<h2 id="tocS_VersionToID">VersionToID</h2>
<!-- backwards compatibility -->
<a id="schemaversiontoid"></a>
<a id="schema_VersionToID"></a>
<a id="tocSversiontoid"></a>
<a id="tocsversiontoid"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_Versioning">Versioning</h2>
<!-- backwards compatibility -->
<a id="schemaversioning"></a>
<a id="schema_Versioning"></a>
<a id="tocSversioning"></a>
<a id="tocsversioning"></a>

```json
{
  "default": "string",
  "enabled": true,
  "fallbackToDefault": true,
  "key": "string",
  "location": "string",
  "name": "string",
  "stripVersioningData": true,
  "urlVersioningPattern": "string",
  "versions": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|string|false|none|none|
|enabled|boolean|false|none|none|
|fallbackToDefault|boolean|false|none|none|
|key|string|false|none|none|
|location|string|false|none|none|
|name|string|false|none|none|
|stripVersioningData|boolean|false|none|none|
|urlVersioningPattern|string|false|none|none|
|versions|[[VersionToID](#schemaversiontoid)]|false|none|none|

<h2 id="tocS_VirtualEndpoint">VirtualEndpoint</h2>
<!-- backwards compatibility -->
<a id="schemavirtualendpoint"></a>
<a id="schema_VirtualEndpoint"></a>
<a id="tocSvirtualendpoint"></a>
<a id="tocsvirtualendpoint"></a>

```json
{
  "body": "string",
  "enabled": true,
  "functionName": "string",
  "name": "string",
  "path": "string",
  "proxyOnError": true,
  "requireSession": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|enabled|boolean|false|none|none|
|functionName|string|false|none|none|
|name|string|false|none|none|
|path|string|false|none|none|
|proxyOnError|boolean|false|none|none|
|requireSession|boolean|false|none|none|

<h2 id="tocS_VirtualMeta">VirtualMeta</h2>
<!-- backwards compatibility -->
<a id="schemavirtualmeta"></a>
<a id="schema_VirtualMeta"></a>
<a id="tocSvirtualmeta"></a>
<a id="tocsvirtualmeta"></a>

```json
{
  "disabled": true,
  "function_source_type": "blob",
  "function_source_uri": "string",
  "method": "string",
  "path": "string",
  "proxy_on_error": true,
  "response_function_name": "string",
  "use_session": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disabled|boolean|false|none|none|
|function_source_type|string|false|none|none|
|function_source_uri|string|false|none|none|
|method|string|false|none|none|
|path|string|false|none|none|
|proxy_on_error|boolean|false|none|none|
|response_function_name|string|false|none|none|
|use_session|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|function_source_type|blob|
|function_source_type|file|

<h2 id="tocS_XTykAPIGateway">XTykAPIGateway</h2>
<!-- backwards compatibility -->
<a id="schemaxtykapigateway"></a>
<a id="schema_XTykAPIGateway"></a>
<a id="tocSxtykapigateway"></a>
<a id="tocsxtykapigateway"></a>

```json
{
  "info": {
    "dbId": "string",
    "expiration": "string",
    "id": "string",
    "name": "string",
    "orgId": "string",
    "state": {
      "active": true,
      "internal": true
    },
    "versioning": {
      "default": "string",
      "enabled": true,
      "fallbackToDefault": true,
      "key": "string",
      "location": "string",
      "name": "string",
      "stripVersioningData": true,
      "urlVersioningPattern": "string",
      "versions": [
        {
          "id": "string",
          "name": "string"
        }
      ]
    }
  },
  "middleware": {
    "global": {
      "cache": {
        "cacheAllSafeRequests": true,
        "cacheByHeaders": [
          "string"
        ],
        "cacheResponseCodes": [
          0
        ],
        "controlTTLHeaderName": "string",
        "enableUpstreamCacheControl": true,
        "enabled": true,
        "timeout": 0
      },
      "contextVariables": {
        "enabled": true
      },
      "cors": {
        "allowCredentials": true,
        "allowedHeaders": [
          "string"
        ],
        "allowedMethods": [
          "string"
        ],
        "allowedOrigins": [
          "string"
        ],
        "debug": true,
        "enabled": true,
        "exposedHeaders": [
          "string"
        ],
        "maxAge": 0,
        "optionsPassthrough": true
      },
      "pluginConfig": {
        "bundle": {
          "enabled": true,
          "path": "string"
        },
        "data": {
          "enabled": true,
          "value": {
            "property1": null,
            "property2": null
          }
        },
        "driver": "string"
      },
      "postAuthenticationPlugin": {
        "plugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ]
      },
      "postAuthenticationPlugins": [
        {
          "enabled": true,
          "functionName": "string",
          "path": "string",
          "rawBodyOnly": true,
          "requireSession": true
        }
      ],
      "postPlugin": {
        "plugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ]
      },
      "postPlugins": [
        {
          "enabled": true,
          "functionName": "string",
          "path": "string",
          "rawBodyOnly": true,
          "requireSession": true
        }
      ],
      "prePlugin": {
        "plugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ]
      },
      "prePlugins": [
        {
          "enabled": true,
          "functionName": "string",
          "path": "string",
          "rawBodyOnly": true,
          "requireSession": true
        }
      ],
      "responsePlugin": {
        "plugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ]
      },
      "responsePlugins": [
        {
          "enabled": true,
          "functionName": "string",
          "path": "string",
          "rawBodyOnly": true,
          "requireSession": true
        }
      ],
      "trafficLogs": {
        "enabled": true
      },
      "transformRequestHeaders": {
        "add": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "enabled": true,
        "remove": [
          "string"
        ]
      },
      "transformResponseHeaders": {
        "add": [
          {
            "name": "string",
            "value": "string"
          }
        ],
        "enabled": true,
        "remove": [
          "string"
        ]
      }
    },
    "operations": {
      "property1": {
        "allow": {
          "enabled": true,
          "ignoreCase": true
        },
        "block": {
          "enabled": true,
          "ignoreCase": true
        },
        "cache": {
          "cacheByRegex": "string",
          "cacheResponseCodes": [
            0
          ],
          "enabled": true,
          "timeout": 0
        },
        "circuitBreaker": {
          "coolDownPeriod": 0,
          "enabled": true,
          "halfOpenStateEnabled": true,
          "sampleSize": 0,
          "threshold": 0
        },
        "doNotTrackEndpoint": {
          "enabled": true
        },
        "enforceTimeout": {
          "enabled": true,
          "value": 0
        },
        "ignoreAuthentication": {
          "enabled": true,
          "ignoreCase": true
        },
        "internal": {
          "enabled": true
        },
        "mockResponse": {
          "body": "string",
          "code": 0,
          "enabled": true,
          "fromOASExamples": {
            "code": 0,
            "contentType": "string",
            "enabled": true,
            "exampleName": "string"
          },
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        },
        "postPlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "name": "string",
            "path": "string"
          }
        ],
        "rateLimit": {
          "enabled": true,
          "per": 0,
          "rate": 0
        },
        "requestSizeLimit": {
          "enabled": true,
          "value": 0
        },
        "trackEndpoint": {
          "enabled": true
        },
        "transformRequestBody": {
          "body": "string",
          "enabled": true,
          "format": "string",
          "path": "string"
        },
        "transformRequestHeaders": {
          "add": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "enabled": true,
          "remove": [
            "string"
          ]
        },
        "transformRequestMethod": {
          "enabled": true,
          "toMethod": "string"
        },
        "transformResponseBody": {
          "body": "string",
          "enabled": true,
          "format": "string",
          "path": "string"
        },
        "transformResponseHeaders": {
          "add": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "enabled": true,
          "remove": [
            "string"
          ]
        },
        "urlRewrite": {
          "enabled": true,
          "pattern": "string",
          "rewriteTo": "string",
          "triggers": [
            {
              "condition": "string",
              "rewriteTo": "string",
              "rules": [
                {
                  "in": "string",
                  "name": "string",
                  "negate": true,
                  "pattern": "string"
                }
              ]
            }
          ]
        },
        "validateRequest": {
          "enabled": true,
          "errorResponseCode": 0
        },
        "virtualEndpoint": {
          "body": "string",
          "enabled": true,
          "functionName": "string",
          "name": "string",
          "path": "string",
          "proxyOnError": true,
          "requireSession": true
        }
      },
      "property2": {
        "allow": {
          "enabled": true,
          "ignoreCase": true
        },
        "block": {
          "enabled": true,
          "ignoreCase": true
        },
        "cache": {
          "cacheByRegex": "string",
          "cacheResponseCodes": [
            0
          ],
          "enabled": true,
          "timeout": 0
        },
        "circuitBreaker": {
          "coolDownPeriod": 0,
          "enabled": true,
          "halfOpenStateEnabled": true,
          "sampleSize": 0,
          "threshold": 0
        },
        "doNotTrackEndpoint": {
          "enabled": true
        },
        "enforceTimeout": {
          "enabled": true,
          "value": 0
        },
        "ignoreAuthentication": {
          "enabled": true,
          "ignoreCase": true
        },
        "internal": {
          "enabled": true
        },
        "mockResponse": {
          "body": "string",
          "code": 0,
          "enabled": true,
          "fromOASExamples": {
            "code": 0,
            "contentType": "string",
            "enabled": true,
            "exampleName": "string"
          },
          "headers": [
            {
              "name": "string",
              "value": "string"
            }
          ]
        },
        "postPlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "name": "string",
            "path": "string"
          }
        ],
        "rateLimit": {
          "enabled": true,
          "per": 0,
          "rate": 0
        },
        "requestSizeLimit": {
          "enabled": true,
          "value": 0
        },
        "trackEndpoint": {
          "enabled": true
        },
        "transformRequestBody": {
          "body": "string",
          "enabled": true,
          "format": "string",
          "path": "string"
        },
        "transformRequestHeaders": {
          "add": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "enabled": true,
          "remove": [
            "string"
          ]
        },
        "transformRequestMethod": {
          "enabled": true,
          "toMethod": "string"
        },
        "transformResponseBody": {
          "body": "string",
          "enabled": true,
          "format": "string",
          "path": "string"
        },
        "transformResponseHeaders": {
          "add": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "enabled": true,
          "remove": [
            "string"
          ]
        },
        "urlRewrite": {
          "enabled": true,
          "pattern": "string",
          "rewriteTo": "string",
          "triggers": [
            {
              "condition": "string",
              "rewriteTo": "string",
              "rules": [
                {
                  "in": "string",
                  "name": "string",
                  "negate": true,
                  "pattern": "string"
                }
              ]
            }
          ]
        },
        "validateRequest": {
          "enabled": true,
          "errorResponseCode": 0
        },
        "virtualEndpoint": {
          "body": "string",
          "enabled": true,
          "functionName": "string",
          "name": "string",
          "path": "string",
          "proxyOnError": true,
          "requireSession": true
        }
      }
    }
  },
  "server": {
    "authentication": {
      "baseIdentityProvider": "string",
      "custom": {
        "AuthSources": {
          "cookie": {
            "enabled": true,
            "name": "string"
          },
          "header": {
            "enabled": true,
            "name": "string"
          },
          "query": {
            "enabled": true,
            "name": "string"
          }
        },
        "config": {
          "enabled": true,
          "functionName": "string",
          "idExtractor": {
            "config": {
              "formParamName": "string",
              "headerName": "string",
              "regexp": "string",
              "regexpMatchIndex": 0,
              "xPathExp": "string"
            },
            "enabled": true,
            "source": "string",
            "with": "string"
          },
          "path": "string",
          "rawBodyOnly": true
        },
        "enabled": true
      },
      "enabled": true,
      "hmac": {
        "AuthSources": {
          "cookie": {
            "enabled": true,
            "name": "string"
          },
          "header": {
            "enabled": true,
            "name": "string"
          },
          "query": {
            "enabled": true,
            "name": "string"
          }
        },
        "allowedAlgorithms": [
          "string"
        ],
        "allowedClockSkew": 0,
        "enabled": true
      },
      "oidc": {
        "AuthSources": {
          "cookie": {
            "enabled": true,
            "name": "string"
          },
          "header": {
            "enabled": true,
            "name": "string"
          },
          "query": {
            "enabled": true,
            "name": "string"
          }
        },
        "enabled": true,
        "providers": [
          {
            "clientToPolicyMapping": [
              {
                "clientId": "string",
                "policyId": "string"
              }
            ],
            "issuer": "string"
          }
        ],
        "scopes": {
          "claimName": "string",
          "scopeToPolicyMapping": [
            {
              "policyId": "string",
              "scope": "string"
            }
          ]
        },
        "segregateByClientId": true
      },
      "securitySchemes": {
        "property1": null,
        "property2": null
      },
      "stripAuthorizationData": true
    },
    "clientCertificates": {
      "allowlist": [
        "string"
      ],
      "enabled": true
    },
    "customDomain": {
      "certificates": [
        "string"
      ],
      "enabled": true,
      "name": "string"
    },
    "detailedActivityLogs": {
      "enabled": true
    },
    "detailedTracing": {
      "enabled": true
    },
    "eventHandlers": [
      {
        "enabled": true,
        "id": "string",
        "name": "string",
        "trigger": "string",
        "type": "string"
      }
    ],
    "gatewayTags": {
      "enabled": true,
      "tags": [
        "string"
      ]
    },
    "listenPath": {
      "strip": true,
      "value": "string"
    }
  },
  "upstream": {
    "certificatePinning": {
      "domainToPublicKeysMapping": [
        {
          "domain": "string",
          "publicKeys": [
            "string"
          ]
        }
      ],
      "enabled": true
    },
    "mutualTLS": {
      "domainToCertificateMapping": [
        {
          "certificate": "string",
          "domain": "string"
        }
      ],
      "enabled": true
    },
    "rateLimit": {
      "enabled": true,
      "per": 0,
      "rate": 0
    },
    "serviceDiscovery": {
      "cache": {
        "enabled": true,
        "timeout": 0
      },
      "cacheTimeout": 0,
      "dataPath": "string",
      "enabled": true,
      "endpointReturnsList": true,
      "parentDataPath": "string",
      "portDataPath": "string",
      "queryEndpoint": "string",
      "targetPath": "string",
      "useNestedQuery": true,
      "useTargetList": true
    },
    "test": {
      "serviceDiscovery": {
        "cache": {
          "enabled": true,
          "timeout": 0
        },
        "cacheTimeout": 0,
        "dataPath": "string",
        "enabled": true,
        "endpointReturnsList": true,
        "parentDataPath": "string",
        "portDataPath": "string",
        "queryEndpoint": "string",
        "targetPath": "string",
        "useNestedQuery": true,
        "useTargetList": true
      }
    },
    "url": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|info|[Info](#schemainfo)|false|none|none|
|middleware|[Middleware](#schemamiddleware)|false|none|none|
|server|[Server](#schemaserver)|false|none|none|
|upstream|[Upstream](#schemaupstream)|false|none|none|

<h2 id="tocS_TykVendorExtension">TykVendorExtension</h2>
<!-- backwards compatibility -->
<a id="schematykvendorextension"></a>
<a id="schema_TykVendorExtension"></a>
<a id="tocStykvendorextension"></a>
<a id="tocstykvendorextension"></a>

```json
{
  "x-tyk-api-gateway": {
    "info": {
      "dbId": "string",
      "expiration": "string",
      "id": "string",
      "name": "string",
      "orgId": "string",
      "state": {
        "active": true,
        "internal": true
      },
      "versioning": {
        "default": "string",
        "enabled": true,
        "fallbackToDefault": true,
        "key": "string",
        "location": "string",
        "name": "string",
        "stripVersioningData": true,
        "urlVersioningPattern": "string",
        "versions": [
          {
            "id": "string",
            "name": "string"
          }
        ]
      }
    },
    "middleware": {
      "global": {
        "cache": {
          "cacheAllSafeRequests": true,
          "cacheByHeaders": [
            "string"
          ],
          "cacheResponseCodes": [
            0
          ],
          "controlTTLHeaderName": "string",
          "enableUpstreamCacheControl": true,
          "enabled": true,
          "timeout": 0
        },
        "contextVariables": {
          "enabled": true
        },
        "cors": {
          "allowCredentials": true,
          "allowedHeaders": [
            "string"
          ],
          "allowedMethods": [
            "string"
          ],
          "allowedOrigins": [
            "string"
          ],
          "debug": true,
          "enabled": true,
          "exposedHeaders": [
            "string"
          ],
          "maxAge": 0,
          "optionsPassthrough": true
        },
        "pluginConfig": {
          "bundle": {
            "enabled": true,
            "path": "string"
          },
          "data": {
            "enabled": true,
            "value": {
              "property1": null,
              "property2": null
            }
          },
          "driver": "string"
        },
        "postAuthenticationPlugin": {
          "plugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ]
        },
        "postAuthenticationPlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ],
        "postPlugin": {
          "plugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ]
        },
        "postPlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ],
        "prePlugin": {
          "plugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ]
        },
        "prePlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ],
        "responsePlugin": {
          "plugins": [
            {
              "enabled": true,
              "functionName": "string",
              "path": "string",
              "rawBodyOnly": true,
              "requireSession": true
            }
          ]
        },
        "responsePlugins": [
          {
            "enabled": true,
            "functionName": "string",
            "path": "string",
            "rawBodyOnly": true,
            "requireSession": true
          }
        ],
        "trafficLogs": {
          "enabled": true
        },
        "transformRequestHeaders": {
          "add": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "enabled": true,
          "remove": [
            "string"
          ]
        },
        "transformResponseHeaders": {
          "add": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "enabled": true,
          "remove": [
            "string"
          ]
        }
      },
      "operations": {
        "property1": {
          "allow": {
            "enabled": true,
            "ignoreCase": true
          },
          "block": {
            "enabled": true,
            "ignoreCase": true
          },
          "cache": {
            "cacheByRegex": "string",
            "cacheResponseCodes": [
              0
            ],
            "enabled": true,
            "timeout": 0
          },
          "circuitBreaker": {
            "coolDownPeriod": 0,
            "enabled": true,
            "halfOpenStateEnabled": true,
            "sampleSize": 0,
            "threshold": 0
          },
          "doNotTrackEndpoint": {
            "enabled": true
          },
          "enforceTimeout": {
            "enabled": true,
            "value": 0
          },
          "ignoreAuthentication": {
            "enabled": true,
            "ignoreCase": true
          },
          "internal": {
            "enabled": true
          },
          "mockResponse": {
            "body": "string",
            "code": 0,
            "enabled": true,
            "fromOASExamples": {
              "code": 0,
              "contentType": "string",
              "enabled": true,
              "exampleName": "string"
            },
            "headers": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "postPlugins": [
            {
              "enabled": true,
              "functionName": "string",
              "name": "string",
              "path": "string"
            }
          ],
          "rateLimit": {
            "enabled": true,
            "per": 0,
            "rate": 0
          },
          "requestSizeLimit": {
            "enabled": true,
            "value": 0
          },
          "trackEndpoint": {
            "enabled": true
          },
          "transformRequestBody": {
            "body": "string",
            "enabled": true,
            "format": "string",
            "path": "string"
          },
          "transformRequestHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "transformRequestMethod": {
            "enabled": true,
            "toMethod": "string"
          },
          "transformResponseBody": {
            "body": "string",
            "enabled": true,
            "format": "string",
            "path": "string"
          },
          "transformResponseHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "urlRewrite": {
            "enabled": true,
            "pattern": "string",
            "rewriteTo": "string",
            "triggers": [
              {
                "condition": "string",
                "rewriteTo": "string",
                "rules": [
                  {
                    "in": "string",
                    "name": "string",
                    "negate": true,
                    "pattern": "string"
                  }
                ]
              }
            ]
          },
          "validateRequest": {
            "enabled": true,
            "errorResponseCode": 0
          },
          "virtualEndpoint": {
            "body": "string",
            "enabled": true,
            "functionName": "string",
            "name": "string",
            "path": "string",
            "proxyOnError": true,
            "requireSession": true
          }
        },
        "property2": {
          "allow": {
            "enabled": true,
            "ignoreCase": true
          },
          "block": {
            "enabled": true,
            "ignoreCase": true
          },
          "cache": {
            "cacheByRegex": "string",
            "cacheResponseCodes": [
              0
            ],
            "enabled": true,
            "timeout": 0
          },
          "circuitBreaker": {
            "coolDownPeriod": 0,
            "enabled": true,
            "halfOpenStateEnabled": true,
            "sampleSize": 0,
            "threshold": 0
          },
          "doNotTrackEndpoint": {
            "enabled": true
          },
          "enforceTimeout": {
            "enabled": true,
            "value": 0
          },
          "ignoreAuthentication": {
            "enabled": true,
            "ignoreCase": true
          },
          "internal": {
            "enabled": true
          },
          "mockResponse": {
            "body": "string",
            "code": 0,
            "enabled": true,
            "fromOASExamples": {
              "code": 0,
              "contentType": "string",
              "enabled": true,
              "exampleName": "string"
            },
            "headers": [
              {
                "name": "string",
                "value": "string"
              }
            ]
          },
          "postPlugins": [
            {
              "enabled": true,
              "functionName": "string",
              "name": "string",
              "path": "string"
            }
          ],
          "rateLimit": {
            "enabled": true,
            "per": 0,
            "rate": 0
          },
          "requestSizeLimit": {
            "enabled": true,
            "value": 0
          },
          "trackEndpoint": {
            "enabled": true
          },
          "transformRequestBody": {
            "body": "string",
            "enabled": true,
            "format": "string",
            "path": "string"
          },
          "transformRequestHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "transformRequestMethod": {
            "enabled": true,
            "toMethod": "string"
          },
          "transformResponseBody": {
            "body": "string",
            "enabled": true,
            "format": "string",
            "path": "string"
          },
          "transformResponseHeaders": {
            "add": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "enabled": true,
            "remove": [
              "string"
            ]
          },
          "urlRewrite": {
            "enabled": true,
            "pattern": "string",
            "rewriteTo": "string",
            "triggers": [
              {
                "condition": "string",
                "rewriteTo": "string",
                "rules": [
                  {
                    "in": "string",
                    "name": "string",
                    "negate": true,
                    "pattern": "string"
                  }
                ]
              }
            ]
          },
          "validateRequest": {
            "enabled": true,
            "errorResponseCode": 0
          },
          "virtualEndpoint": {
            "body": "string",
            "enabled": true,
            "functionName": "string",
            "name": "string",
            "path": "string",
            "proxyOnError": true,
            "requireSession": true
          }
        }
      }
    },
    "server": {
      "authentication": {
        "baseIdentityProvider": "string",
        "custom": {
          "AuthSources": {
            "cookie": {
              "enabled": true,
              "name": "string"
            },
            "header": {
              "enabled": true,
              "name": "string"
            },
            "query": {
              "enabled": true,
              "name": "string"
            }
          },
          "config": {
            "enabled": true,
            "functionName": "string",
            "idExtractor": {
              "config": {
                "formParamName": "string",
                "headerName": "string",
                "regexp": "string",
                "regexpMatchIndex": 0,
                "xPathExp": "string"
              },
              "enabled": true,
              "source": "string",
              "with": "string"
            },
            "path": "string",
            "rawBodyOnly": true
          },
          "enabled": true
        },
        "enabled": true,
        "hmac": {
          "AuthSources": {
            "cookie": {
              "enabled": true,
              "name": "string"
            },
            "header": {
              "enabled": true,
              "name": "string"
            },
            "query": {
              "enabled": true,
              "name": "string"
            }
          },
          "allowedAlgorithms": [
            "string"
          ],
          "allowedClockSkew": 0,
          "enabled": true
        },
        "oidc": {
          "AuthSources": {
            "cookie": {
              "enabled": true,
              "name": "string"
            },
            "header": {
              "enabled": true,
              "name": "string"
            },
            "query": {
              "enabled": true,
              "name": "string"
            }
          },
          "enabled": true,
          "providers": [
            {
              "clientToPolicyMapping": [
                {
                  "clientId": "string",
                  "policyId": "string"
                }
              ],
              "issuer": "string"
            }
          ],
          "scopes": {
            "claimName": "string",
            "scopeToPolicyMapping": [
              {
                "policyId": "string",
                "scope": "string"
              }
            ]
          },
          "segregateByClientId": true
        },
        "securitySchemes": {
          "property1": null,
          "property2": null
        },
        "stripAuthorizationData": true
      },
      "clientCertificates": {
        "allowlist": [
          "string"
        ],
        "enabled": true
      },
      "customDomain": {
        "certificates": [
          "string"
        ],
        "enabled": true,
        "name": "string"
      },
      "detailedActivityLogs": {
        "enabled": true
      },
      "detailedTracing": {
        "enabled": true
      },
      "eventHandlers": [
        {
          "enabled": true,
          "id": "string",
          "name": "string",
          "trigger": "string",
          "type": "string"
        }
      ],
      "gatewayTags": {
        "enabled": true,
        "tags": [
          "string"
        ]
      },
      "listenPath": {
        "strip": true,
        "value": "string"
      }
    },
    "upstream": {
      "certificatePinning": {
        "domainToPublicKeysMapping": [
          {
            "domain": "string",
            "publicKeys": [
              "string"
            ]
          }
        ],
        "enabled": true
      },
      "mutualTLS": {
        "domainToCertificateMapping": [
          {
            "certificate": "string",
            "domain": "string"
          }
        ],
        "enabled": true
      },
      "rateLimit": {
        "enabled": true,
        "per": 0,
        "rate": 0
      },
      "serviceDiscovery": {
        "cache": {
          "enabled": true,
          "timeout": 0
        },
        "cacheTimeout": 0,
        "dataPath": "string",
        "enabled": true,
        "endpointReturnsList": true,
        "parentDataPath": "string",
        "portDataPath": "string",
        "queryEndpoint": "string",
        "targetPath": "string",
        "useNestedQuery": true,
        "useTargetList": true
      },
      "test": {
        "serviceDiscovery": {
          "cache": {
            "enabled": true,
            "timeout": 0
          },
          "cacheTimeout": 0,
          "dataPath": "string",
          "enabled": true,
          "endpointReturnsList": true,
          "parentDataPath": "string",
          "portDataPath": "string",
          "queryEndpoint": "string",
          "targetPath": "string",
          "useNestedQuery": true,
          "useTargetList": true
        }
      },
      "url": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|x-tyk-api-gateway|[XTykAPIGateway](#schemaxtykapigateway)|false|none|none|
