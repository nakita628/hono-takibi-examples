<h1 id="security-token-service-api">Security Token Service API v1beta</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Security Token Service exchanges Google or third-party credentials for a short-lived access token to Google Cloud resources.

Base URLs:

* <a href="https://sts.googleapis.com/">https://sts.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="http://cloud.google.com/iam/docs/workload-identity-federation">External documentation</a>

<h1 id="security-token-service-api-v1beta">v1beta</h1>

## sts.token

<a id="opIdsts.token"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1beta/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "audience": "string",
    "grantType": "string",
    "options": "string",
    "requestedTokenType": "string",
    "scope": "string",
    "subjectToken": "string",
    "subjectTokenType": "string"
  }'
```

`POST /v1beta/token`

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

> Body parameter

```json
{
  "audience": "string",
  "grantType": "string",
  "options": "string",
  "requestedTokenType": "string",
  "scope": "string",
  "subjectToken": "string",
  "subjectTokenType": "string"
}
```

<h3 id="ststoken-parameters">Parameters</h3>

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
|body|body|[GoogleIdentityStsV1betaExchangeTokenRequest](#schemagoogleidentitystsv1betaexchangetokenrequest)|false|none|
|» audience|body|string|false|The full resource name of the identity provider. For example, `//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/`. Required when exchanging an external credential for a Google access token.|
|» grantType|body|string|false|Required. The grant type. Must be `urn:ietf:params:oauth:grant-type:token-exchange`, which indicates a token exchange.|
|» options|body|string|false|A set of features that Security Token Service supports, in addition to the standard OAuth 2.0 token exchange, formatted as a serialized JSON object of Options. The size of the parameter value must not exceed 4096 characters.|
|» requestedTokenType|body|string|false|Required. The type of security token. Must be `urn:ietf:params:oauth:token-type:access_token`, which indicates an OAuth 2.0 access token.|
|» scope|body|string|false|The OAuth 2.0 scopes to include on the resulting access token, formatted as a list of space-delimited, case-sensitive strings. Required when exchanging an external credential for a Google access token.|
|» subjectToken|body|string|false|Required. The input token. This token is either an external credential issued by a workload identity pool provider, or a short-lived access token issued by Google. If the token is an OIDC JWT, it must use the JWT format defined in [RFC 7523](https://tools.ietf.org/html/rfc7523), and the `subject_token_type` must be either `urn:ietf:params:oauth:token-type:jwt` or `urn:ietf:params:oauth:token-type:id_token`. The following headers are required: - `kid`: The identifier of the signing key securing the JWT. - `alg`: The cryptographic algorithm securing the JWT. Must be `RS256` or `ES256`. The following payload fields are required. For more information, see [RFC 7523, Section 3](https://tools.ietf.org/html/rfc7523#section-3): - `iss`: The issuer of the token. The issuer must provide a discovery document at the URL `/.well-known/openid-configuration`, where `` is the value of this field. The document must be formatted according to section 4.2 of the [OIDC 1.0 Discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). - `iat`: The issue time, in seconds, since the Unix epoch. Must be in the past. - `exp`: The expiration time, in seconds, since the Unix epoch. Must be less than 48 hours after `iat`. Shorter expiration times are more secure. If possible, we recommend setting an expiration time less than 6 hours. - `sub`: The identity asserted in the JWT. - `aud`: For workload identity pools, this must be a value specified in the allowed audiences for the workload identity pool provider, or one of the audiences allowed by default if no audiences were specified. See https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.providers#oidc Example header: ``` { "alg": "RS256", "kid": "us-east-11" } ``` Example payload: ``` { "iss": "https://accounts.google.com", "iat": 1517963104, "exp": 1517966704, "aud": "//iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/my-pool/providers/my-provider", "sub": "113475438248934895348", "my_claims": { "additional_claim": "value" } } ``` If `subject_token` is for AWS, it must be a serialized `GetCallerIdentity` token. This token contains the same information as a request to the AWS [`GetCallerIdentity()`](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity) method, as well as the AWS [signature](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) for the request information. Use Signature Version 4. Format the request as URL-encoded JSON, and set the `subject_token_type` parameter to `urn:ietf:params:aws:token-type:aws4_request`. The following parameters are required: - `url`: The URL of the AWS STS endpoint for `GetCallerIdentity()`, such as `https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15`. Regional endpoints are also supported. - `method`: The HTTP request method: `POST`. - `headers`: The HTTP request headers, which must include: - `Authorization`: The request signature. - `x-amz-date`: The time you will send the request, formatted as an [ISO8601 Basic](https://docs.aws.amazon.com/general/latest/gr/sigv4_elements.html#sigv4_elements_date) string. This value is typically set to the current time and is used to help prevent replay attacks. - `host`: The hostname of the `url` field; for example, `sts.amazonaws.com`. - `x-goog-cloud-target-resource`: The full, canonical resource name of the workload identity pool provider, with or without an `https:` prefix. To help ensure data integrity, we recommend including this header in the `SignedHeaders` field of the signed request. For example: //iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ If you are using temporary security credentials provided by AWS, you must also include the header `x-amz-security-token`, with the value set to the session token. The following example shows a `GetCallerIdentity` token: ``` { "headers": [ {"key": "x-amz-date", "value": "20200815T015049Z"}, {"key": "Authorization", "value": "AWS4-HMAC-SHA256+Credential=$credential,+SignedHeaders=host;x-amz-date;x-goog-cloud-target-resource,+Signature=$signature"}, {"key": "x-goog-cloud-target-resource", "value": "//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/"}, {"key": "host", "value": "sts.amazonaws.com"} . ], "method": "POST", "url": "https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" } ``` You can also use a Google-issued OAuth 2.0 access token with this field to obtain an access token with new security attributes applied, such as a Credential Access Boundary. In this case, set `subject_token_type` to `urn:ietf:params:oauth:token-type:access_token`. If an access token already contains security attributes, you cannot apply additional security attributes.|
|» subjectTokenType|body|string|false|Required. An identifier that indicates the type of the security token in the `subject_token` parameter. Supported values are `urn:ietf:params:oauth:token-type:jwt`, `urn:ietf:params:oauth:token-type:id_token`, `urn:ietf:params:aws:token-type:aws4_request`, and `urn:ietf:params:oauth:token-type:access_token`.|

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
  "access_token": "string",
  "expires_in": 0,
  "issued_token_type": "string",
  "token_type": "string"
}
```

<h3 id="ststoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[GoogleIdentityStsV1betaExchangeTokenResponse](#schemagoogleidentitystsv1betaexchangetokenresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

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

Associates `members`, or principals, with a `role`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|condition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).|
|members|[string]|false|none|Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid}.svc.id.goog[{namespace}/{kubernetes-sa}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid}?uid={uniqueid}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid}` and the recovered group retains the role in the binding.|
|role|string|false|none|Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.|

<h2 id="tocS_GoogleIdentityStsV1AccessBoundary">GoogleIdentityStsV1AccessBoundary</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentitystsv1accessboundary"></a>
<a id="schema_GoogleIdentityStsV1AccessBoundary"></a>
<a id="tocSgoogleidentitystsv1accessboundary"></a>
<a id="tocsgoogleidentitystsv1accessboundary"></a>

```json
{
  "accessBoundaryRules": [
    {
      "availabilityCondition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "availablePermissions": [
        "string"
      ],
      "availableResource": "string"
    }
  ]
}
```

An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessBoundaryRules|[[GoogleIdentityStsV1AccessBoundaryRule](#schemagoogleidentitystsv1accessboundaryrule)]|false|none|A list of access boundary rules which defines the upper bound of the permission a principal may carry. If multiple rules are specified, the effective access boundary is the union of all the access boundary rules attached. One access boundary can contain at most 10 rules.|

<h2 id="tocS_GoogleIdentityStsV1AccessBoundaryRule">GoogleIdentityStsV1AccessBoundaryRule</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentitystsv1accessboundaryrule"></a>
<a id="schema_GoogleIdentityStsV1AccessBoundaryRule"></a>
<a id="tocSgoogleidentitystsv1accessboundaryrule"></a>
<a id="tocsgoogleidentitystsv1accessboundaryrule"></a>

```json
{
  "availabilityCondition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "availablePermissions": [
    "string"
  ],
  "availableResource": "string"
}
```

An access boundary rule defines an upper bound of IAM permissions on a single resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availabilityCondition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The availability condition further constrains the access allowed by the access boundary rule. If the condition evaluates to `true`, then this access boundary rule will provide access to the specified resource, assuming the principal has the required permissions for the resource. If the condition does not evaluate to `true`, then access to the specified resource will not be available. Note that all access boundary rules in an access boundary are evaluated together as a union. As such, another access boundary rule may allow access to the resource, even if this access boundary rule does not allow access. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). The maximum length of the `expression` field is 2048 characters.|
|availablePermissions|[string]|false|none|A list of permissions that may be allowed for use on the specified resource. The only supported values in the list are IAM roles, following the format of google.iam.v1.Binding.role. Example value: `inRole:roles/logging.viewer` for predefined roles and `inRole:organizations/{ORGANIZATION_ID}/roles/logging.viewer` for custom roles.|
|availableResource|string|false|none|The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: `//cloudresourcemanager.googleapis.com/projects/my-project`.|

<h2 id="tocS_GoogleIdentityStsV1Options">GoogleIdentityStsV1Options</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentitystsv1options"></a>
<a id="schema_GoogleIdentityStsV1Options"></a>
<a id="tocSgoogleidentitystsv1options"></a>
<a id="tocsgoogleidentitystsv1options"></a>

```json
{
  "accessBoundary": {
    "accessBoundaryRules": [
      {
        "availabilityCondition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "availablePermissions": [
          "string"
        ],
        "availableResource": "string"
      }
    ]
  },
  "audiences": [
    "string"
  ],
  "userProject": "string"
}
```

An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessBoundary|[GoogleIdentityStsV1AccessBoundary](#schemagoogleidentitystsv1accessboundary)|false|none|An access boundary that defines the upper bound of permissions the credential may have. The value should be a JSON object of AccessBoundary. The access boundary can include up to 10 rules. The size of the parameter value should not exceed 2048 characters.|
|audiences|[string]|false|none|The intended audience(s) of the credential. The audience value(s) should be the name(s) of services intended to receive the credential. Example: `["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]`. A maximum of 5 audiences can be included. For each provided audience, the maximum length is 262 characters.|
|userProject|string|false|none|A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: `my-sample-project-191923`. The maximum length is 32 characters.|

<h2 id="tocS_GoogleIdentityStsV1betaAccessBoundary">GoogleIdentityStsV1betaAccessBoundary</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentitystsv1betaaccessboundary"></a>
<a id="schema_GoogleIdentityStsV1betaAccessBoundary"></a>
<a id="tocSgoogleidentitystsv1betaaccessboundary"></a>
<a id="tocsgoogleidentitystsv1betaaccessboundary"></a>

```json
{
  "accessBoundaryRules": [
    {
      "availabilityCondition": {
        "description": "string",
        "expression": "string",
        "location": "string",
        "title": "string"
      },
      "availablePermissions": [
        "string"
      ],
      "availableResource": "string"
    }
  ]
}
```

An access boundary defines the upper bound of what a principal may access. It includes a list of access boundary rules that each defines the resource that may be allowed as well as permissions that may be used on those resources.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessBoundaryRules|[[GoogleIdentityStsV1betaAccessBoundaryRule](#schemagoogleidentitystsv1betaaccessboundaryrule)]|false|none|A list of access boundary rules which defines the upper bound of the permission a principal may carry. If multiple rules are specified, the effective access boundary is the union of all the access boundary rules attached. One access boundary can contain at most 10 rules.|

<h2 id="tocS_GoogleIdentityStsV1betaAccessBoundaryRule">GoogleIdentityStsV1betaAccessBoundaryRule</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentitystsv1betaaccessboundaryrule"></a>
<a id="schema_GoogleIdentityStsV1betaAccessBoundaryRule"></a>
<a id="tocSgoogleidentitystsv1betaaccessboundaryrule"></a>
<a id="tocsgoogleidentitystsv1betaaccessboundaryrule"></a>

```json
{
  "availabilityCondition": {
    "description": "string",
    "expression": "string",
    "location": "string",
    "title": "string"
  },
  "availablePermissions": [
    "string"
  ],
  "availableResource": "string"
}
```

An access boundary rule defines an upper bound of IAM permissions on a single resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|availabilityCondition|[GoogleTypeExpr](#schemagoogletypeexpr)|false|none|The availability condition further constrains the access allowed by the access boundary rule. If the condition evaluates to `true`, then this access boundary rule will provide access to the specified resource, assuming the principal has the required permissions for the resource. If the condition does not evaluate to `true`, then access to the specified resource will not be available. Note that all access boundary rules in an access boundary are evaluated together as a union. As such, another access boundary rule may allow access to the resource, even if this access boundary rule does not allow access. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). The maximum length of the `expression` field is 2048 characters.|
|availablePermissions|[string]|false|none|A list of permissions that may be allowed for use on the specified resource. The only supported values in the list are IAM roles, following the format of google.iam.v1.Binding.role. Example value: `inRole:roles/logging.viewer` for predefined roles and `inRole:organizations/{ORGANIZATION_ID}/roles/logging.viewer` for custom roles.|
|availableResource|string|false|none|The full resource name of a Google Cloud resource entity. The format definition is at https://cloud.google.com/apis/design/resource_names. Example value: `//cloudresourcemanager.googleapis.com/projects/my-project`.|

<h2 id="tocS_GoogleIdentityStsV1betaExchangeTokenRequest">GoogleIdentityStsV1betaExchangeTokenRequest</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentitystsv1betaexchangetokenrequest"></a>
<a id="schema_GoogleIdentityStsV1betaExchangeTokenRequest"></a>
<a id="tocSgoogleidentitystsv1betaexchangetokenrequest"></a>
<a id="tocsgoogleidentitystsv1betaexchangetokenrequest"></a>

```json
{
  "audience": "string",
  "grantType": "string",
  "options": "string",
  "requestedTokenType": "string",
  "scope": "string",
  "subjectToken": "string",
  "subjectTokenType": "string"
}
```

Request message for ExchangeToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|audience|string|false|none|The full resource name of the identity provider. For example, `//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/`. Required when exchanging an external credential for a Google access token.|
|grantType|string|false|none|Required. The grant type. Must be `urn:ietf:params:oauth:grant-type:token-exchange`, which indicates a token exchange.|
|options|string|false|none|A set of features that Security Token Service supports, in addition to the standard OAuth 2.0 token exchange, formatted as a serialized JSON object of Options. The size of the parameter value must not exceed 4096 characters.|
|requestedTokenType|string|false|none|Required. The type of security token. Must be `urn:ietf:params:oauth:token-type:access_token`, which indicates an OAuth 2.0 access token.|
|scope|string|false|none|The OAuth 2.0 scopes to include on the resulting access token, formatted as a list of space-delimited, case-sensitive strings. Required when exchanging an external credential for a Google access token.|
|subjectToken|string|false|none|Required. The input token. This token is either an external credential issued by a workload identity pool provider, or a short-lived access token issued by Google. If the token is an OIDC JWT, it must use the JWT format defined in [RFC 7523](https://tools.ietf.org/html/rfc7523), and the `subject_token_type` must be either `urn:ietf:params:oauth:token-type:jwt` or `urn:ietf:params:oauth:token-type:id_token`. The following headers are required: - `kid`: The identifier of the signing key securing the JWT. - `alg`: The cryptographic algorithm securing the JWT. Must be `RS256` or `ES256`. The following payload fields are required. For more information, see [RFC 7523, Section 3](https://tools.ietf.org/html/rfc7523#section-3): - `iss`: The issuer of the token. The issuer must provide a discovery document at the URL `/.well-known/openid-configuration`, where `` is the value of this field. The document must be formatted according to section 4.2 of the [OIDC 1.0 Discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). - `iat`: The issue time, in seconds, since the Unix epoch. Must be in the past. - `exp`: The expiration time, in seconds, since the Unix epoch. Must be less than 48 hours after `iat`. Shorter expiration times are more secure. If possible, we recommend setting an expiration time less than 6 hours. - `sub`: The identity asserted in the JWT. - `aud`: For workload identity pools, this must be a value specified in the allowed audiences for the workload identity pool provider, or one of the audiences allowed by default if no audiences were specified. See https://cloud.google.com/iam/docs/reference/rest/v1/projects.locations.workloadIdentityPools.providers#oidc Example header: ``` { "alg": "RS256", "kid": "us-east-11" } ``` Example payload: ``` { "iss": "https://accounts.google.com", "iat": 1517963104, "exp": 1517966704, "aud": "//iam.googleapis.com/projects/1234567890123/locations/global/workloadIdentityPools/my-pool/providers/my-provider", "sub": "113475438248934895348", "my_claims": { "additional_claim": "value" } } ``` If `subject_token` is for AWS, it must be a serialized `GetCallerIdentity` token. This token contains the same information as a request to the AWS [`GetCallerIdentity()`](https://docs.aws.amazon.com/STS/latest/APIReference/API_GetCallerIdentity) method, as well as the AWS [signature](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html) for the request information. Use Signature Version 4. Format the request as URL-encoded JSON, and set the `subject_token_type` parameter to `urn:ietf:params:aws:token-type:aws4_request`. The following parameters are required: - `url`: The URL of the AWS STS endpoint for `GetCallerIdentity()`, such as `https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15`. Regional endpoints are also supported. - `method`: The HTTP request method: `POST`. - `headers`: The HTTP request headers, which must include: - `Authorization`: The request signature. - `x-amz-date`: The time you will send the request, formatted as an [ISO8601 Basic](https://docs.aws.amazon.com/general/latest/gr/sigv4_elements.html#sigv4_elements_date) string. This value is typically set to the current time and is used to help prevent replay attacks. - `host`: The hostname of the `url` field; for example, `sts.amazonaws.com`. - `x-goog-cloud-target-resource`: The full, canonical resource name of the workload identity pool provider, with or without an `https:` prefix. To help ensure data integrity, we recommend including this header in the `SignedHeaders` field of the signed request. For example: //iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ https://iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/ If you are using temporary security credentials provided by AWS, you must also include the header `x-amz-security-token`, with the value set to the session token. The following example shows a `GetCallerIdentity` token: ``` { "headers": [ {"key": "x-amz-date", "value": "20200815T015049Z"}, {"key": "Authorization", "value": "AWS4-HMAC-SHA256+Credential=$credential,+SignedHeaders=host;x-amz-date;x-goog-cloud-target-resource,+Signature=$signature"}, {"key": "x-goog-cloud-target-resource", "value": "//iam.googleapis.com/projects//locations/global/workloadIdentityPools//providers/"}, {"key": "host", "value": "sts.amazonaws.com"} . ], "method": "POST", "url": "https://sts.amazonaws.com?Action=GetCallerIdentity&Version=2011-06-15" } ``` You can also use a Google-issued OAuth 2.0 access token with this field to obtain an access token with new security attributes applied, such as a Credential Access Boundary. In this case, set `subject_token_type` to `urn:ietf:params:oauth:token-type:access_token`. If an access token already contains security attributes, you cannot apply additional security attributes.|
|subjectTokenType|string|false|none|Required. An identifier that indicates the type of the security token in the `subject_token` parameter. Supported values are `urn:ietf:params:oauth:token-type:jwt`, `urn:ietf:params:oauth:token-type:id_token`, `urn:ietf:params:aws:token-type:aws4_request`, and `urn:ietf:params:oauth:token-type:access_token`.|

<h2 id="tocS_GoogleIdentityStsV1betaExchangeTokenResponse">GoogleIdentityStsV1betaExchangeTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentitystsv1betaexchangetokenresponse"></a>
<a id="schema_GoogleIdentityStsV1betaExchangeTokenResponse"></a>
<a id="tocSgoogleidentitystsv1betaexchangetokenresponse"></a>
<a id="tocsgoogleidentitystsv1betaexchangetokenresponse"></a>

```json
{
  "access_token": "string",
  "expires_in": 0,
  "issued_token_type": "string",
  "token_type": "string"
}
```

Response message for ExchangeToken.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|false|none|An OAuth 2.0 security token, issued by Google, in response to the token exchange request. Tokens can vary in size, depending in part on the size of mapped claims, up to a maximum of 12288 bytes (12 KB). Google reserves the right to change the token size and the maximum length at any time.|
|expires_in|integer(int32)|false|none|The amount of time, in seconds, between the time when the access token was issued and the time when the access token will expire. This field is absent when the `subject_token` in the request is a Google-issued, short-lived access token. In this case, the access token has the same expiration time as the `subject_token`.|
|issued_token_type|string|false|none|The token type. Always matches the value of `requested_token_type` from the request.|
|token_type|string|false|none|The type of access token. Always has the value `Bearer`.|

<h2 id="tocS_GoogleIdentityStsV1betaOptions">GoogleIdentityStsV1betaOptions</h2>
<!-- backwards compatibility -->
<a id="schemagoogleidentitystsv1betaoptions"></a>
<a id="schema_GoogleIdentityStsV1betaOptions"></a>
<a id="tocSgoogleidentitystsv1betaoptions"></a>
<a id="tocsgoogleidentitystsv1betaoptions"></a>

```json
{
  "accessBoundary": {
    "accessBoundaryRules": [
      {
        "availabilityCondition": {
          "description": "string",
          "expression": "string",
          "location": "string",
          "title": "string"
        },
        "availablePermissions": [
          "string"
        ],
        "availableResource": "string"
      }
    ]
  },
  "audiences": [
    "string"
  ],
  "userProject": "string"
}
```

An `Options` object configures features that the Security Token Service supports, but that are not supported by standard OAuth 2.0 token exchange endpoints, as defined in https://tools.ietf.org/html/rfc8693.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessBoundary|[GoogleIdentityStsV1betaAccessBoundary](#schemagoogleidentitystsv1betaaccessboundary)|false|none|An access boundary that defines the upper bound of permissions the credential may have. The value should be a JSON object of AccessBoundary. The access boundary can include up to 10 rules. The size of the parameter value should not exceed 2048 characters.|
|audiences|[string]|false|none|The intended audience(s) of the credential. The audience value(s) should be the name(s) of services intended to receive the credential. Example: `["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]`. A maximum of 5 audiences can be included. For each provided audience, the maximum length is 262 characters.|
|userProject|string|false|none|A Google project used for quota and billing purposes when the credential is used to access Google APIs. The provided project overrides the project bound to the credential. The value must be a project number or a project ID. Example: `my-sample-project-191923`. The maximum length is 32 characters.|

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

Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.|
|expression|string|false|none|Textual representation of an expression in Common Expression Language syntax.|
|location|string|false|none|Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.|
|title|string|false|none|Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.|
