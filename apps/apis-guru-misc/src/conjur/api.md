<h1 id="conjur">Conjur v5.3.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is an API definition for CyberArk Conjur Open Source. You can find out more at [Conjur.org](https://www.conjur.org/).

Base URLs:

* <a href="http://conjur.local">http://conjur.local</a>

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

Email: <a href="mailto:conj_maintainers@cyberark.com">conj_maintainers@cyberark.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://conjur.org">Find out more about Conjur</a>

# Authentication

- HTTP Authentication, scheme: basic Basic authentication with Conjur username and password (users only)
or API key (hosts and users).

* API Key (conjurAuth)
    - Parameter Name: **Authorization**, in: header. Conjur access token in `Token token=<base64_encoded_token>` format.

- HTTP Authentication, scheme: mutual Conjur Kubernetes authenticator mutual TLS authentication.
To authenticate using this method, you must provide a trusted client
certificate

<h1 id="conjur-authentication">authentication</h1>

Authentication

## Gets a short-lived access token for applications running in Azure.

<a id="opIdgetAccessTokenViaAzure"></a>

> Code samples

```bash
curl https://example.com/authn-azure/prod%252fgke/default/admin/authenticate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'jwt=eyJhbGciOiJSUzI1NiIs......uTonCA'
```

`POST /authn-azure/{service_id}/{account}/{login}/authenticate`

The access token is used to communicate to the REST API that
the bearer of the token has been authorized to access the API and perform
specific actions specified by the scope that was granted during authorization.

For API usage, the base64-encoded access token is ordinarily passed as an HTTP
Authorization header as `Authorization: Token token=<base64-encoded token>`.

The `login` must be URL encoded and the host ID must have the prefix
`host/`. For example, the host webserver would login as `host/webserver`,
and would be encoded as `host%2Fwebserver`.

The `service_id`, if given, must be URL encoded. For example,
`prod/gke` must be encoded as `prod%2Fgke`.

To authenticate to Conjur using this endpoint, reference the detailed
documentation: [Azure Authenticator](https://docs.conjur.org/Latest/en/Content/Operations/Services/azure_authn.htm) (`authn-azure`).


> Body parameter

```yaml
jwt: eyJhbGciOiJSUzI1NiIs......uTonCA
```

<h3 id="gets-a-short-lived-access-token-for-applications-running-in-azure-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|login|path|string|true|URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`|
|Accept-Encoding|header|string|false|Setting the Accept-Encoding header to base64 will return a pre-encoded access token|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|Azure identity token|
|» jwt|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept-Encoding|application/json|
|Accept-Encoding|base64|

<h3 id="gets-a-short-lived-access-token-for-applications-running-in-azure-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response is an access token for conjur|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a short-lived access token for applications running in Google Cloud Platform.

<a id="opIdgetAccessTokenViaGCP"></a>

> Code samples

```bash
curl https://example.com/authn-gcp/dev/authenticate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'jwt=eyJhbGciOiJSUzI1NiIs......uTonCA'
```

`POST /authn-gcp/{account}/authenticate`

Use the GCP Authenticator API to send an authentication
request from a Google Cloud service to Conjur.

For more information, see [the documentation](https://docs.conjur.org/Latest/en/Content/Operations/Services/cjr-gcp-authn.htm).


> Body parameter

```yaml
jwt: eyJhbGciOiJSUzI1NiIs......uTonCA
```

<h3 id="gets-a-short-lived-access-token-for-applications-running-in-google-cloud-platform-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|Organization account name|
|Accept-Encoding|header|string|false|Setting the Accept-Encoding header to base64 will return a pre-encoded access token|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|Google JWT identity token for the Google Cloud service|
|» jwt|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept-Encoding|base64|

<h3 id="gets-a-short-lived-access-token-for-applications-running-in-google-cloud-platform-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body is the API key|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get a short-lived access token for applications running in AWS.

<a id="opIdgetAccessTokenViaAWS"></a>

> Code samples

```bash
curl https://example.com/authn-iam/prod%252fgke/default/admin/authenticate \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d 'string'
```

`POST /authn-iam/{service_id}/{account}/{login}/authenticate`

The access token is used to communicate to the REST API that
the bearer of the token has been authorized to access the API and perform
specific actions specified by the scope that was granted during authorization.

For API usage, the base64-encoded access token is ordinarily passed as an HTTP
Authorization header as `Authorization: Token token=<base64-encoded token>`.

The `login` must be URL encoded and the host ID must have the prefix
`host/`. For example, the host webserver would login as `host/webserver`,
and would be encoded as `host%2Fwebserver`.

The `service_id`, if given, must be URL encoded. For example,
`prod/gke` must be encoded as `prod%2Fgke`.

For detailed instructions on authenticating to Conjur using this endpoint,
reference the documentation:
[AWS IAM Authenticator](https://docs.conjur.org/Latest/en/Content/Operations/Services/AWS_IAM_Authenticator.htm) (`authn-iam`).


> Body parameter

```text
string
```

<h3 id="get-a-short-lived-access-token-for-applications-running-in-aws-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|login|path|string|true|URL-encoded login name. For hosts, the login name is `host/<host-id>`|
|Accept-Encoding|header|string|false|Setting the Accept-Encoding header to base64 will return a pre-encoded access token|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string|true|AWS Signature header|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept-Encoding|application/json|
|Accept-Encoding|base64|

<h3 id="get-a-short-lived-access-token-for-applications-running-in-aws-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response is an access token for conjur|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a short-lived access token for applications using JSON Web Token (JWT) to access the Conjur API.

<a id="opIdgetAccessTokenViaJWT"></a>

> Code samples

```bash
curl https://example.com/authn-jwt/prod%252fgke/default/authenticate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'jwt=eyJhbGciOiJSUzI1NiIs......uTonCA'
```

`POST /authn-jwt/{service_id}/{account}/authenticate`

Use the JWT Authenticator to leverage the identity layer
provided by JWT to authenticate with Conjur.


> Body parameter

```yaml
jwt: eyJhbGciOiJSUzI1NiIs......uTonCA
```

<h3 id="gets-a-short-lived-access-token-for-applications-using-json-web-token-jwt-to-access-the-conjur-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|ID token|
|» jwt|body|string|false|none|

<h3 id="gets-a-short-lived-access-token-for-applications-using-json-web-token-jwt-to-access-the-conjur-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response is an access token for conjur|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a short-lived access token for applications using JSON Web Token (JWT) to access the Conjur API. Covers the case of use of optional URL parameter &quot;ID&quot;

<a id="opIdgetAccessTokenViaJWTWithId"></a>

> Code samples

```bash
curl https://example.com/authn-jwt/prod%252fgke/default/SomeUserID/authenticate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'jwt=eyJhbGciOiJSUzI1NiIs......uTonCA'
```

`POST /authn-jwt/{service_id}/{account}/{id}/authenticate`

Use the JWT Authenticator to leverage the identity layer
provided by JWT to authenticate with Conjur.


> Body parameter

```yaml
jwt: eyJhbGciOiJSUzI1NiIs......uTonCA
```

<h3 id="gets-a-short-lived-access-token-for-applications-using-json-web-token-jwt-to-access-the-conjur-api-covers-the-case-of-use-of-optional-url-parameter-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|id|path|string|true|Organization user id|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|ID token|
|» jwt|body|string|false|none|

<h3 id="gets-a-short-lived-access-token-for-applications-using-json-web-token-jwt-to-access-the-conjur-api-covers-the-case-of-use-of-optional-url-parameter-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response is an access token for conjur|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="success">
This operation does not require authentication
</aside>

## For applications running in Kubernetes; sends Conjur a certificate signing request (CSR) and requests a client certificate injected into the application's Kubernetes pod.

<a id="opIdk8sInjectClientCert"></a>

> Code samples

```bash
curl https://example.com/authn-k8s/prod%252fgke/inject_client_cert \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'string'
```

`POST /authn-k8s/{service_id}/inject_client_cert`

This request sends a Certificate Signing Request to Conjur,
which uses the Kubernetes API to inject a client certificate into the
application pod.

This endpoint requires a properly configured Conjur Certificate Authority
service alongside a properly configured and enabled Kubernetes authenticator.
For detailed instructions,
see [the documentation](https://docs.conjur.org/Latest/en/Content/Integrations/kubernetes.htm).


> Body parameter

```text
string
```

<h3 id="for-applications-running-in-kubernetes-sends-conjur-a-certificate-signing-request-csr-and-requests-a-client-certificate-injected-into-the-applications-kubernetes-pod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|Host-Id-Prefix|header|string|false|Dot-separated policy tree, prefixed by `host.`, where the application identity is defined|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string|true|Valid certificate signing request that includes the host<br>identity suffix as the CSR common name<br>|

<h3 id="for-applications-running-in-kubernetes-sends-conjur-a-certificate-signing-request-csr-and-requests-a-client-certificate-injected-into-the-applications-kubernetes-pod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|The injected certificate was accepted.|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, conjurAuth, conjurKubernetesMutualTls
</aside>

## Gets a short-lived access token for applications running in Kubernetes.

<a id="opIdgetAccessTokenViaKubernetes"></a>

> Code samples

```bash
curl https://example.com/authn-k8s/prod%252fgke/default/admin/authenticate \
  -X POST
```

`POST /authn-k8s/{service_id}/{account}/{login}/authenticate`

The access token is used to communicate to the REST API that
the bearer of the token has been authorized to access the API and perform
specific actions specified by the scope that was granted during authorization.

For API usage, the base64-encoded access token is ordinarily passed as an HTTP
Authorization header as `Authorization: Token token=<base64-encoded token>`.

The `login` must be URL encoded and the host ID must have the prefix
`host/`. For example, the host webserver would login as `host/webserver`,
and would be encoded as `host%2Fwebserver`.

The `service_id`, if given, must be URL encoded. For example,
`prod/gke` must be encoded as `prod%2Fgke`.

To authenticate to Conjur using this endpoint, reference the detailed
documentation: [Kubernetes Authenticator](https://docs.conjur.org/Latest/en/Content/Operations/Services/k8s_auth.htm) (`authn-k8s`).


<h3 id="gets-a-short-lived-access-token-for-applications-running-in-kubernetes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|login|path|string|true|URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`|
|Accept-Encoding|header|string|false|Setting the Accept-Encoding header to base64 will return a pre-encoded access token|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept-Encoding|application/json|
|Accept-Encoding|base64|

<h3 id="gets-a-short-lived-access-token-for-applications-running-in-kubernetes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response is an access token for conjur|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurKubernetesMutualTls
</aside>

## Gets the Conjur API key of a user given the LDAP username and password via HTTP Basic Authentication.

<a id="opIdgetAPIKeyViaLDAP"></a>

> Code samples

```bash
curl https://example.com/authn-ldap/prod%252fgke/default/login \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /authn-ldap/{service_id}/{account}/login`

Exchange your LDAP credentials for a Conjur API key. Once the
API key is obtained, it may be used to inexpensively obtain access
tokens by calling the Authenticate method. An access token
is required to use most other parts of the Conjur API.

The Basic authentication-compliant header is formed by:
1. Concatenating the LDAP username, a literal colon character ':',
   and the password to create the authentication string.
2. Base64-encoding the authentication string.
3. Prefixing the authentication string with the scheme: `Basic `
   (note the required space).
4. Providing the result as the value of the `Authorization` HTTP header:
   `Authorization: Basic <authentication string>`.

Your HTTP/REST client probably provides HTTP basic authentication support.


<h3 id="gets-the-conjur-api-key-of-a-user-given-the-ldap-username-and-password-via-http-basic-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

<h3 id="gets-the-conjur-api-key-of-a-user-given-the-ldap-username-and-password-via-http-basic-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body is the API key|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Gets a short-lived access token for users and hosts using their LDAP identity to access the Conjur API.

<a id="opIdgetAccessTokenViaLDAP"></a>

> Code samples

```bash
curl https://example.com/authn-ldap/prod%252fgke/default/admin/authenticate \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d '14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc'
```

`POST /authn-ldap/{service_id}/{account}/{login}/authenticate`

The access token is used to communicate to the REST API that
the bearer of the token has been authorized to access the API and perform
specific actions specified by the scope that was granted during authorization.

For API usage, the base64-encoded access token is ordinarily passed as an HTTP
Authorization header as `Authorization: Token token=<base64-encoded token>`.

The `login` must be URL encoded. For example, `alice@devops` must be
encoded as `alice%40devops`.

The `service_id`, if given, must be URL encoded. For example,
`prod/gke` must be encoded as `prod%2Fgke`.

For host authentication, the `login` is the host ID with the prefix
`host/`. For example, the host webserver would login as `host/webserver`,
and would be encoded as `host%2Fwebserver`.

To authenticate to Conjur using a LDAP, reference the detailed documentation:
[LDAP Authenticator](https://docs.conjur.org/Latest/en/Content/Integrations/ldap/ldap_authenticator.html) (`authn-ldap`).


> Body parameter

```text
14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc
```

<h3 id="gets-a-short-lived-access-token-for-users-and-hosts-using-their-ldap-identity-to-access-the-conjur-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|login|path|string|true|URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`|
|Accept-Encoding|header|string|false|Setting the Accept-Encoding header to base64 will return a pre-encoded access token|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string|false|API key|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept-Encoding|application/json|
|Accept-Encoding|base64|

<h3 id="gets-a-short-lived-access-token-for-users-and-hosts-using-their-ldap-identity-to-access-the-conjur-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response is an access token for conjur|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="success">
This operation does not require authentication
</aside>

## Gets a short-lived access token for applications using OpenID Connect (OIDC) to access the Conjur API.

<a id="opIdgetAccessTokenViaOIDC"></a>

> Code samples

```bash
curl https://example.com/authn-oidc/prod%252fgke/default/authenticate \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d 'id_token=eyJhbGciOiJSUzI1NiIs......uTonCA'
```

`POST /authn-oidc/{service_id}/{account}/authenticate`

Use the OIDC Authenticator to leverage the identity layer
provided by OIDC to authenticate with Conjur.

For more information see [the documentation](https://docs.conjur.org/Latest/en/Content/OIDC/OIDC.htm).


> Body parameter

```yaml
id_token: eyJhbGciOiJSUzI1NiIs......uTonCA
```

<h3 id="gets-a-short-lived-access-token-for-applications-using-openid-connect-oidc-to-access-the-conjur-api-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|ID token|
|» id_token|body|string|false|none|

<h3 id="gets-a-short-lived-access-token-for-applications-using-openid-connect-oidc-to-access-the-conjur-api-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response is an access token for conjur|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|

<aside class="success">
This operation does not require authentication
</aside>

## Rotates a role's API key.

<a id="opIdrotateApiKey"></a>

> Code samples

```bash
curl https://example.com/authn/default/api_key \
  -X PUT \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -H "Authorization: ${API_KEY}"
```

`PUT /authn/{account}/api_key`

Any role can rotate its own API key. The name and password
(for users) or current API key (for hosts and users) of the role must
be provided via HTTP Basic Authorization.

To rotate another role's API key, you may provide your name and password
(for users) or current API key (for hosts and users) via HTTP Basic
Authorization with the request. Alternatively, you may provide your
Conjur access token via the standard Conjur `Authorization` header.

The Basic authentication-compliant header is formed by:
1. Concatenating the role's name, a literal colon character ':',
   and the password or API key to create the authentication string.
2. Base64-encoding the authentication string.
3. Prefixing the authentication string with the scheme: `Basic `
   (note the required space).
4. Providing the result as the value of the `Authorization` HTTP header:
   `Authorization: Basic <authentication string>`.

Your HTTP/REST client probably provides HTTP basic authentication support.
For example, `curl` and all of the Conjur client libraries provide this.

If using the Conjur `Authorization` header, its value should be set to
`Token token=<base64-encoded access token>`.

Note that the body of the request must be the empty string.


<h3 id="rotates-a-roles-api-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|role|query|[RoleType](#schemaroletype)|false|(**Optional**) role specifier in `{kind}:{identifier}` format<br><br>##### Permissions required<br><br>`update` privilege on the role whose API key is being rotated.<br>|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

<h3 id="rotates-a-roles-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body is the API key|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth & conjurAuth
</aside>

## Gets the API key of a user given the username and password via HTTP Basic Authentication.

<a id="opIdgetAPIKey"></a>

> Code samples

```bash
curl https://example.com/authn/default/login \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /authn/{account}/login`

Passwords are stored in the Conjur database using `bcrypt`
with a work factor of 12. Therefore, login is a fairly expensive operation.
However, once the API key is obtained, it may be used to inexpensively
obtain access tokens by calling the Authenticate method. An access token
is required to use most other parts of the Conjur API.

The Basic authentication-compliant header is formed by:
1. Concatenating the role's name, a literal colon character ':',
   and the password or API key to create the authentication string.
2. Base64-encoding the authentication string.
3. Prefixing the authentication string with the scheme: `Basic `
   (note the required space).
4. Providing the result as the value of the `Authorization` HTTP header:
   `Authorization: Basic <authentication string>`.

Your HTTP/REST client probably provides HTTP basic authentication support.
For example, `curl` and all of the Conjur client libraries provide this.

Note that machine roles (Hosts) do not have passwords and do not need to
use this endpoint.


<h3 id="gets-the-api-key-of-a-user-given-the-username-and-password-via-http-basic-authentication-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

<h3 id="gets-the-api-key-of-a-user-given-the-username-and-password-via-http-basic-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body is the API key|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Changes a user’s password.

<a id="opIdchangePassword"></a>

> Code samples

```bash
curl https://example.com/authn/default/password \
  -X PUT \
  -H 'Content-Type: text/plain' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'password'
```

`PUT /authn/{account}/password`

You must provide the login name and current password or
API key of the user whose password is to be updated in an HTTP Basic
Authentication header. Also replaces the user’s API key with a new
securely generated random value. You can fetch the new API key using
the Login method.

The Basic authentication-compliant header is formed by:
1. Concatenating the role's name, a literal colon character ':',
   and the password or API key to create the authentication string.
2. Base64-encoding the authentication string.
3. Prefixing the authentication string with the scheme: `Basic `
   (note the required space).
4. Providing the result as the value of the `Authorization` HTTP header:
   `Authorization: Basic <authentication string>`.

Your HTTP/REST client probably provides HTTP basic authentication
support. For example, `curl` and all of the Conjur client libraries
provide this.

Note that machine roles (Hosts) do not have passwords. They authenticate
using their API keys, while passwords are only used by human users.


> Body parameter

```text
password
```

<h3 id="changes-a-users-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string(password)|true|New password|

<h3 id="changes-a-users-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The password has been changed|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

## Gets a short-lived access token, which is required in the header of most subsequent API requests.

<a id="opIdgetAccessToken"></a>

> Code samples

```bash
curl https://example.com/authn/default/admin/authenticate \
  -X POST \
  -H 'Content-Type: text/plain' \
  -d '14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc'
```

`POST /authn/{account}/{login}/authenticate`

A client can obtain an access token by presenting a valid
login name and API key.

The access token is used to communicate to the REST API that the bearer
of the token has been authorized to access the API and perform specific
actions specified by the scope that was granted during authorization.

The `login` must be URL encoded. For example, `alice@devops` must be
encoded as `alice%40devops`.

The `service_id`, if given, must be URL encoded. For example,
`prod/gke` must be encoded as `prod%2Fgke`.

For host authentication, the `login` is the host ID with the prefix
`host/`. For example, the host webserver would login as `host/webserver`,
and would be encoded as `host%2Fwebserver`.

For API usage, the base64-encoded access token is ordinarily passed as an HTTP
Authorization header as `Authorization: Token token=<base64-encoded token>`.

This is the default authentication endpoint only. See other endpoints for
details on authenticating to Conjur using another method, e.g. for
applications running in Azure or Kubernetes.


> Body parameter

```text
14m9cf91wfsesv1kkhevg12cdywm2wvqy6s8sk53z1ngtazp1t9tykc
```

<h3 id="gets-a-short-lived-access-token-which-is-required-in-the-header-of-most-subsequent-api-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|login|path|string|true|URL-encoded login name. For users, it’s the user ID. For hosts, the login name is `host/<host-id>`|
|Accept-Encoding|header|string|false|Setting the Accept-Encoding header to base64 will return a pre-encoded access token|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string|true|API Key|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept-Encoding|application/json|
|Accept-Encoding|base64|

<h3 id="gets-a-short-lived-access-token-which-is-required-in-the-header-of-most-subsequent-api-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response is an access token for conjur|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="success">
This operation does not require authentication
</aside>

## Enables or disables authenticator defined without service_id.

<a id="opIdenableAuthenticator"></a>

> Code samples

```bash
curl https://example.com/authn-gcp/dev \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'enabled=true'
```

`PATCH /{authenticator}/{account}`

Allows you to either enable or disable a given authenticator that does not have service_id (For example: authn-gcp).

When you enable or disable an authenticator via this
endpoint, the status of the authenticator is stored
in the Conjur database. The enablement status of the authenticator
service may be overridden by setting the `CONJUR_AUTHENTICATORS`
environment variable on the Conjur server; in the case where this
environment variable is set, the database record of whether the
authenticator service is enabled will be ignored.

**This endpoint is part of an early implementation of support for enabling Conjur
authenticators via the API, and is currently available at the Community
(or early alpha) level. This endpoint is still subject to breaking
changes in the future.**


> Body parameter

```yaml
enabled: true
```

<h3 id="enables-or-disables-authenticator-defined-without-serviceid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authenticator|path|string|true|The authenticator to update|
|account|path|string|true|Organization account name|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|Contains either `enabled=true` or `enabled=false` to<br>enable or disable an authenticator<br>|
|» enabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|authenticator|authn-iam|
|authenticator|authn-oidc|
|authenticator|authn-ldap|
|authenticator|authn-k8s|
|authenticator|authn-gcp|
|authenticator|authn-azure|
|authenticator|authn-jwt|

<h3 id="enables-or-disables-authenticator-defined-without-serviceid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The config was updated properly|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, conjurAuth, conjurKubernetesMutualTls
</aside>

## Enables or disables authenticator service instances.

<a id="opIdenableAuthenticatorInstance"></a>

> Code samples

```bash
curl https://example.com/authn-oidc/prod%252fgke/dev \
  -X PATCH \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Authorization: ${API_KEY}" \
  -d 'enabled=true'
```

`PATCH /{authenticator}/{service_id}/{account}`

Allows you to either enable or disable a given authenticator
service instance.

When you enable or disable an authenticator service instance via this
endpoint, the status of the authenticator service instance is stored
in the Conjur database. The enablement status of the authenticator
service instance may be overridden by setting the `CONJUR_AUTHENTICATORS`
environment variable on the Conjur server; in the case where this
environment variable is set, the database record of whether the
authenticator service instance is enabled will be ignored.

**This endpoint is part of an early implementation of support for enabling Conjur
authenticators via the API, and is currently available at the Community
(or early alpha) level. This endpoint is still subject to breaking
changes in the future.**


> Body parameter

```yaml
enabled: true
```

<h3 id="enables-or-disables-authenticator-service-instances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authenticator|path|string|true|The authenticator to update|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|account|path|string|true|Organization account name|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|Contains either `enabled=true` or `enabled=false` to<br>enable or disable an authenticator<br>|
|» enabled|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|authenticator|authn-iam|
|authenticator|authn-oidc|
|authenticator|authn-ldap|
|authenticator|authn-k8s|
|authenticator|authn-gcp|
|authenticator|authn-azure|
|authenticator|authn-jwt|

<h3 id="enables-or-disables-authenticator-service-instances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The config was updated properly|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

<h1 id="conjur-secrets">secrets</h1>

Secrets

## Fetch multiple secrets

<a id="opIdgetSecrets"></a>

> Code samples

```bash
curl 'https://example.com/secrets?variable_ids=myorg%3Avariable%3Asecret1%2Cmyorg%3Avariable%3Asecret1' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /secrets`

Fetches multiple secret values in one invocation. It’s faster to fetch secrets in batches than to fetch them one at a time.

<h3 id="fetch-multiple-secrets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|variable_ids|query|string|true|Comma-delimited, URL-encoded resource IDs of the variables.|
|Accept-Encoding|header|string|false|Set the encoding of the response object|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|Accept-Encoding|base64|

> Example responses

> 200 Response

```json
{
  "myorg:variable:secret1": "secret1Value",
  "myorg:variable:secret2": "secret2Value"
}
```

> 406 Response

```json
{}
```

<h3 id="fetch-multiple-secrets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The batch secret values|Inline|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|At least one resource was unable to be found|None|
|406|Not Acceptable|Issue encoding secret into JSON format|Inline|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Fetches the value of a secret from the specified Secret.

<a id="opIdgetSecret"></a>

> Code samples

```bash
curl https://example.com/secrets/default/variable/prod%252Faws%252Fdb-password \
  -H "Authorization: ${API_KEY}"
```

`GET /secrets/{account}/{kind}/{identifier}`

Fetches the value of a secret from the specified Secret. The latest version
will be retrieved unless the version parameter is specified. The twenty most recent secret versions are retained.

The secret data is returned in the response body.

Note: Conjur will allow you to add a secret to any resource, but the best practice is to store
and retrieve secret data only using Secret resources.


<h3 id="fetches-the-value-of-a-secret-from-the-specified-secret-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|path|[Kind](#schemakind)|true|Type of resource - in almost all cases this should be `variable`|
|identifier|path|[ResourceID](#schemaresourceid)|true|URL-encoded variable ID|
|version|query|[ResourceVersion](#schemaresourceversion)|false|(**Optional**) Version you want to retrieve (Conjur keeps the last 20 versions of a secret)|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

<h3 id="fetches-the-value-of-a-secret-from-the-specified-secret-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The secret value was added successfully|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Creates a secret value within the specified variable.

<a id="opIdcreateSecret"></a>

> Code samples

```bash
curl https://example.com/secrets/default/variable/prod%252Faws%252Fdb-password \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H "Authorization: ${API_KEY}" \
  -d 'string'
```

`POST /secrets/{account}/{kind}/{identifier}`

Creates a secret value within the specified Secret.


Note: Conjur will allow you to add a secret to any resource, but the
best practice is to store and retrieve secret data only using Secret resources.


> Body parameter

```text
string
```

<h3 id="creates-a-secret-value-within-the-specified-variable-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|path|[Kind](#schemakind)|true|Type of resource - in almost all cases this should be `variable`|
|identifier|path|[ResourceID](#schemaresourceid)|true|URL-encoded variable ID|
|expirations|query|string|false|Tells the server to reset the variables expiration date|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string|false|Secret data|

<h3 id="creates-a-secret-value-within-the-specified-variable-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The secret value was added successfully|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

<h1 id="conjur-policies">policies</h1>

Policies

## Loads or replaces a Conjur policy document.

<a id="opIdreplacePolicy"></a>

> Code samples

```bash
curl https://example.com/policies/default/policy/root \
  -X PUT \
  -H 'Content-Type: application/x-yaml' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '- !policy
  id: database
  body:
  - !host
    id: db-host
  - !variable
    id: db-password
    owner: !host db-host
'
```

`PUT /policies/{account}/policy/{identifier}`

Loads or replaces a Conjur policy document.

**Any policy data which already exists on the server but is not
explicitly specified in the new policy file will be deleted!**.


> Body parameter

```text
- !policy
  id: database
  body:
  - !host
    id: db-host
  - !variable
    id: db-password
    owner: !host db-host

```

<h3 id="loads-or-replaces-a-conjur-policy-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|identifier|path|[ResourceID](#schemaresourceid)|true|ID of the policy to load (root if no root policy has been loaded yet)|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string|true|Policy|

> Example responses

> 201 Response

```json
{
  "created_roles": {
    "myorg:host:database/db-host": {
      "api_key": "309yzpa1n5kp932waxw6d37x4hew2x8ve8w11m8xn92acfy672m929en",
      "id": "myorg:host:database/db-host"
    }
  },
  "version": 1
}
```

<h3 id="loads-or-replaces-a-conjur-policy-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Decsribes new data created by a successful policy load|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|409|Conflict|Similar operation already in progress, retry after a delay|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="loads-or-replaces-a-conjur-policy-document-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_roles|object|false|none|none|
|version|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Adds data to the existing Conjur policy.

<a id="opIdloadPolicy"></a>

> Code samples

```bash
curl https://example.com/policies/default/policy/root \
  -X POST \
  -H 'Content-Type: application/x-yaml' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '- !policy
  id: database
  body:
  - !host
    id: db-host
  - !variable
    id: db-password
    owner: !host db-host
'
```

`POST /policies/{account}/policy/{identifier}`

Adds data to the existing Conjur policy. Deletions are not allowed.
Any policy objects that exist on the server but are omitted from the
policy file will not be deleted and any explicit deletions in the policy file will result in an error.

##### Permissions required

`create` privilege on the policy."


> Body parameter

```text
- !policy
  id: database
  body:
  - !host
    id: db-host
  - !variable
    id: db-password
    owner: !host db-host

```

<h3 id="adds-data-to-the-existing-conjur-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|identifier|path|[ResourceID](#schemaresourceid)|true|ID of the policy to update|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string|true|Policy|

> Example responses

> 201 Response

```json
{
  "created_roles": {
    "myorg:host:database/db-host": {
      "api_key": "309yzpa1n5kp932waxw6d37x4hew2x8ve8w11m8xn92acfy672m929en",
      "id": "myorg:host:database/db-host"
    }
  },
  "version": 1
}
```

<h3 id="adds-data-to-the-existing-conjur-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Decsribes new data created by a successful policy load|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|409|Conflict|Similar operation already in progress, retry after a delay|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="adds-data-to-the-existing-conjur-policy-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_roles|object|false|none|none|
|version|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Modifies an existing Conjur policy.

<a id="opIdupdatePolicy"></a>

> Code samples

```bash
curl https://example.com/policies/default/policy/root \
  -X PATCH \
  -H 'Content-Type: application/x-yaml' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d '- !policy
  id: database
  body:
  - !host
    id: db-host
  - !variable
    id: db-password
    owner: !host db-host
'
```

`PATCH /policies/{account}/policy/{identifier}`

Modifies an existing Conjur policy. Data may be explicitly deleted using
the `!delete`, `!revoke`, and `!deny` statements. Unlike `replace` mode,
no data is ever implicitly deleted.

##### Permissions required


> Body parameter

```text
- !policy
  id: database
  body:
  - !host
    id: db-host
  - !variable
    id: db-password
    owner: !host db-host

```

<h3 id="modifies-an-existing-conjur-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|identifier|path|[ResourceID](#schemaresourceid)|true|ID of the policy to update|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|string|true|Policy|

> Example responses

> 201 Response

```json
{
  "created_roles": {
    "myorg:host:database/db-host": {
      "api_key": "309yzpa1n5kp932waxw6d37x4hew2x8ve8w11m8xn92acfy672m929en",
      "id": "myorg:host:database/db-host"
    }
  },
  "version": 1
}
```

<h3 id="modifies-an-existing-conjur-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Decsribes new data created by a successful policy load|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|409|Conflict|Similar operation already in progress, retry after a delay|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="modifies-an-existing-conjur-policy-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_roles|object|false|none|none|
|version|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

<h1 id="conjur-roles">roles</h1>

RBAC

## Get role information

<a id="opIdshowRole"></a>

> Code samples

```bash
curl https://example.com/roles/default/user/admin \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /roles/{account}/{kind}/{identifier}`

Gets detailed information about a specific role, including the role members.

If a role A is granted to a role B, then role A is said to have role B as a member.
These relationships are described in the “members” portion of the returned JSON.

##### Listing members

If `members` is provided, you will get the members of a role.

If a `kind` query parameter is given, narrows results to only resources of that kind.

If a `limit` is given, returns no more than that number of results. Providing an `offset`
skips a number of resources before returning the rest. In addition, providing an `offset`
will give limit a default value of 10 if none other is provided. These two parameters
can be combined to page through results.

If the parameter `count` is true, returns only the number of items in the list.

##### Text search

If the search parameter is provided, narrows results to those pertaining to the search query.
Search works across resource IDs and the values of annotations. It weights results so that
those with matching id or a matching value of an annotation called name appear first, then
those with another matching annotation value, and finally those with a matching kind.

##### Parameter Priority

If Conjur is given any combination of optional parameters, it responds with ONLY results
for the parameter of the highest priority.

1. `graph`
2. `all`
3. `memberships`
4. `members`


<h3 id="get-role-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|path|[Kind](#schemakind)|true|Type of resource|
|identifier|path|[ResourceID](#schemaresourceid)|true|ID of the role for which to get the information about|
|all|query|string|false|Returns an array of Role IDs representing all role memberships, expanded recursively.|
|memberships|query|string|false|Returns all direct role memberships (members not expanded recursively).|
|members|query|string|false|Returns a list of the Role's members.|
|offset|query|[Offset](#schemaoffset)|false|When listing members, start at this item number.|
|limit|query|[Limit](#schemalimit)|false|When listing members, return up to this many results.|
|count|query|[Count](#schemacount)|false|When listing members, if `true`, return only the count of members.|
|search|query|string|false|When listing members, the results will be narrowed to only those matching the provided string|
|graph|query|string|false|If included in the query returns a graph view of the role|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
{
  "created_at": "2020-12-31:12:34:56.789+00:00",
  "id": "myorg:user:admin",
  "members": []
}
```

<h3 id="get-role-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body contains the requested role(s)/member(s)|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Update or modify an existing role membership

<a id="opIdaddMemberToRole"></a>

> Code samples

```bash
curl 'https://example.com/roles/default/user/admin?members=string&member=string' \
  -X POST \
  -H "Authorization: ${API_KEY}"
```

`POST /roles/{account}/{kind}/{identifier}`

Updates or modifies an existing role membership.

If a role A is granted to a role B, then role A is said to have role B as a member.
These relationships are described in the “members” portion of the returned JSON.

When the `members` query parameter is provided, you will get the members of a role.

When the `members` and `member` query parameters are provided, the role specfified by
`member` will be added as a member of the role specified in the endpoint URI.


<h3 id="update-or-modify-an-existing-role-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|path|[Kind](#schemakind)|true|Type of resource|
|identifier|path|[ResourceID](#schemaresourceid)|true|ID of the role for which to get the information about|
|members|query|string|true|Returns a list of the Role's members.|
|member|query|[RoleType](#schemaroletype)|true|The identifier of the Role to be added as a member.|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

<h3 id="update-or-modify-an-existing-role-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Member was added to role successfully|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Deletes an existing role membership

<a id="opIdremoveMemberFromRole"></a>

> Code samples

```bash
curl 'https://example.com/roles/default/user/admin?members=string&member=string' \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /roles/{account}/{kind}/{identifier}`

Deletes an existing role membership.

If a role A is granted to a role B, then role A is said to have role B as a member.
These relationships are described in the “members” portion of the returned JSON.

When the `members` query parameter is provided, you will get the members of a role.

When the `members` and `member` query parameters are provided, the role specfified by
`member` will be removed as a member of the role specified in the endpoint URI.


<h3 id="deletes-an-existing-role-membership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|path|[Kind](#schemakind)|true|Type of resource|
|identifier|path|[ResourceID](#schemaresourceid)|true|ID of the role for which to get the information about|
|members|query|string|true|Returns a list of the Role's members.|
|member|query|[RoleType](#schemaroletype)|true|The identifier of the Role to be added as a member.|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

<h3 id="deletes-an-existing-role-membership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Member was deleted from role successfully|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

<h1 id="conjur-host-factory">host factory</h1>

Host factories

## Creates a Host using the Host Factory.

<a id="opIdcreateHost"></a>

> Code samples

```bash
curl https://example.com/host_factories/hosts \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d 'id=new-host'
```

`POST /host_factories/hosts`

Creates a Host using the Host Factory and returns a JSON description of it.

Requires a host factory token, which can be created using the create tokens API.
In practice, this token is usually provided automatically as part of Conjur integration with your
host provisioning infrastructure.

Note: If the token was created with a CIDR restriction, you must make this API request from a whitelisted address.


> Body parameter

```yaml
id: new-host
```

<h3 id="creates-a-host-using-the-host-factory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|Parameters|
|» annotations|body|object|false|Annotations to apply to the new host|
|» id|body|string|true|Identifier of the host to be created. It will be created within the account of the host factory.|

> Example responses

> 201 Response

```json
{
  "annotations": [],
  "api_key": "rq5bk73nwjnm52zdj87993ezmvx3m75k3whwxszekvmnwdqek0r",
  "created_at": "2017-08-07T22:30:00.145+00:00",
  "id": "myorg:host:brand-new-host",
  "owner": "myorg:host_factory:hf-db",
  "permissions": []
}
```

<h3 id="creates-a-host-using-the-host-factory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The response body contains the newly-created host|Inline|
|401|Unauthorized|Authentication information is missing or invalid|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="creates-a-host-using-the-host-factory-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[string]|true|none|none|
|api_key|string|true|none|none|
|created_at|string|true|none|none|
|id|string|true|none|none|
|owner|string|true|none|none|
|permissions|[string]|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Creates one or more host identity tokens.

<a id="opIdcreateToken"></a>

> Code samples

```bash
curl https://example.com/host_factory_tokens \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d 'expiration=2017-08-04T22%3A27%3A20%2B00%3A00&host_factory=myorg%3Ahosty_factory%3Ahf-db'
```

`POST /host_factory_tokens`

Creates one or more tokens which can be used to bootstrap host identity. Responds with a JSON document containing the tokens and their restrictions.

If the tokens are created with a CIDR restriction, Conjur will only accept them from the whitelisted IP ranges.

##### Permissions required
#
`execute` privilege on the Host Factory."


> Body parameter

```yaml
expiration: "2017-08-04T22:27:20+00:00"
host_factory: "myorg:hosty_factory:hf-db"
```

<h3 id="creates-one-or-more-host-identity-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|Parameters|
|» cidr|body|[string]|false|Number of host tokens to create|
|» count|body|integer|false|Number of host tokens to create|
|» expiration|body|string|true|`ISO 8601 datetime` denoting a requested expiration time.|
|» host_factory|body|string|true|Fully qualified host factory ID|

> Example responses

> 200 Response

```json
[
  {
    "cidr": [
      "127.0.0.1/32",
      "127.0.0.2/32"
    ],
    "expiration": "2017-08-04T22:27:20+00:00",
    "token": "281s2ag1g8s7gd2ezf6td3d619b52t9gaak3w8rj0p38124n384sq7x"
  },
  {
    "cidr": [
      "127.0.0.1/32",
      "127.0.0.2/32"
    ],
    "expiration": "2017-08-04T22:27:20+00:00",
    "token": "2c0vfj61pmah3efbgpcz2x9vzcy1ycskfkyqy0kgk1fv014880f4"
  }
]
```

<h3 id="creates-one-or-more-host-identity-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Zero or more tokens were created and delivered in the response body|Inline|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="creates-one-or-more-host-identity-tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» cidr|[string]|true|none|none|
|» expiration|string|true|none|none|
|» token|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Revokes a token, immediately disabling it.

<a id="opIdrevokeToken"></a>

> Code samples

```bash
curl https://example.com/host_factory_tokens/2c0vfj61pmah3efbgpcz2x9vzcy1ycskfkyqy0kgk1fv014880f4 \
  -X DELETE \
  -H "Authorization: ${API_KEY}"
```

`DELETE /host_factory_tokens/{token}`

Revokes a token, immediately disabling it.

##### Permissions required

`update` privilege on the host factory."


<h3 id="revokes-a-token-immediately-disabling-it-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|The host factory token to revoke|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

<h3 id="revokes-a-token-immediately-disabling-it-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Token was successfully revoked|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

<h1 id="conjur-public-keys">public keys</h1>

SSH keys

## Shows all public keys for a resource.

<a id="opIdshowPublicKeys"></a>

> Code samples

```bash
curl https://example.com/public_keys/default/user/admin \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /public_keys/{account}/{kind}/{identifier}`

Shows all public keys for a resource as newline delimited string for compatibility with the authorized_keys SSH format.
Returns an empty string if the resource does not exist, to prevent attackers from determining whether a resource exists.


<h3 id="shows-all-public-keys-for-a-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|path|[Kind](#schemakind)|true|Type of resource|
|identifier|path|[ResourceID](#schemaresourceid)|true|ID of the resource for which to get the information about|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```text
ssh-rsa AAAAB3Nzabc2 admin@alice.com

ssh-rsa AAAAB3Nza3nx alice@example.com

```

<h3 id="shows-all-public-keys-for-a-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Public keys for a resource as newline delimited string for compatibility with the authorized_keys SSH format. Empty string if the resource does not exist|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|
|500|Internal Server Error|Malfromed request, rejected by the server|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, conjurAuth, conjurKubernetesMutualTls
</aside>

<h1 id="conjur-resources">resources</h1>

Resources

## Lists resources within an organization account.

<a id="opIdshowResourcesForAllAccounts"></a>

> Code samples

```bash
curl https://example.com/resources \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resources`

Lists resources within an organization account.

In the absence of an `account` query parameter, shows results for the account of the authorization token user.

If an `account` query parameter is given, shows results for the specified account.

If a `kind` query parameter is given, narrows results to only resources of that kind.

If a `limit` is given, returns no more than that number of results. Providing an `offset`
skips a number of resources before returning the rest. In addition, providing an `offset`
will give `limit` a default value of 10 if none other is provided. These two parameters can
be combined to page through results.

If the parameter `count` is `true`, returns only the number of items in the list.

##### Text search

If the `search` parameter is provided, narrows results to those pertaining to the search query.
Search works across resource IDs and the values of annotations. It weighs results so that those
with matching id or a matching value of an annotation called `name` appear first, then those with
another matching annotation value, and finally those with a matching  `kind`."


<h3 id="lists-resources-within-an-organization-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|[AccountName](#schemaaccountname)|false|Organization account name|
|kind|query|[Kind](#schemakind)|false|Type of resource|
|search|query|string|false|Filter resources based on this value by name|
|offset|query|[Offset](#schemaoffset)|false|When listing resources, start at this item number.|
|limit|query|[Limit](#schemalimit)|false|When listing resources, return up to this many results.|
|count|query|[Count](#schemacount)|false|When listing resources, if `true`, return only the count of the results.|
|role|query|[RoleType](#schemaroletype)|false|Retrieves the resources list for a different role if the authenticated role has access|
|acting_as|query|[RoleType](#schemaroletype)|false|Retrieves the resources list for a different role if the authenticated role has access|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
[
  {
    "annotations": [],
    "created_at": "2021-03-23T16:37:14.455+00:00",
    "id": "dev:policy:conjur/authn-ldap/test",
    "owner": "dev:user:admin",
    "permissions": [],
    "policy": "dev:policy:root",
    "policy_versions": []
  }
]
```

<h3 id="lists-resources-within-an-organization-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body contains a list of resources|Inline|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="lists-resources-within-an-organization-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» annotations|[string]|false|none|none|
|» created_at|string|false|none|none|
|» id|string|false|none|none|
|» owner|string|false|none|none|
|» permissions|[object]|false|none|none|
|» » policy|string|false|none|none|
|» » privilege|string|false|none|none|
|» » role|string|false|none|none|
|» policy|string|false|none|none|
|» policy_versions|[object]|false|none|none|
|» » client_ip|string|false|none|none|
|» » created_at|string|false|none|none|
|» » finished_at|string|false|none|none|
|» » id|string|false|none|none|
|» » policy_sha256|string|false|none|none|
|» » policy_text|string|false|none|none|
|» » role|string|false|none|none|
|» » version|number|false|none|none|
|» restricted_to|[string]|false|none|none|
|» secrets|[object]|false|none|none|
|» » expires_at|string|false|none|none|
|» » version|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Lists resources within an organization account.

<a id="opIdshowResourcesForAccount"></a>

> Code samples

```bash
curl https://example.com/resources/default \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resources/{account}`

Lists resources within an organization account.

If a `kind` query parameter is given, narrows results to only resources of that kind.

If a `limit` is given, returns no more than that number of results. Providing an `offset`
skips a number of resources before returning the rest. In addition, providing an `offset`
will give `limit` a default value of 10 if none other is provided. These two parameters
can be combined to page through results.

If the parameter `count` is `true`, returns only the number of items in the list.

##### Text search

If the `search` parameter is provided, narrows results to those pertaining to the search query.
Search works across resource IDs and the values of annotations. It weighs results so that those
with matching id or a matching value of an annotation called `name` appear first, then those with
another matching annotation value, and finally those with a matching  `kind`.


<h3 id="lists-resources-within-an-organization-account-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|query|[Kind](#schemakind)|false|Type of resource|
|search|query|string|false|Filter resources based on this value by name|
|offset|query|[Offset](#schemaoffset)|false|When listing resources, start at this item number.|
|limit|query|[Limit](#schemalimit)|false|When listing resources, return up to this many results.|
|count|query|[Count](#schemacount)|false|When listing resources, if `true`, return only the count of the results.|
|role|query|[RoleType](#schemaroletype)|false|Retrieves the resources list for a different role if the authenticated role has access|
|acting_as|query|[RoleType](#schemaroletype)|false|Retrieves the resources list for a different role if the authenticated role has access|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
[
  {
    "annotations": [],
    "created_at": "2021-03-23T16:37:14.455+00:00",
    "id": "dev:policy:conjur/authn-ldap/test",
    "owner": "dev:user:admin",
    "permissions": [],
    "policy": "dev:policy:root",
    "policy_versions": []
  }
]
```

<h3 id="lists-resources-within-an-organization-account-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body contains a list of resources|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="lists-resources-within-an-organization-account-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» annotations|[string]|false|none|none|
|» created_at|string|false|none|none|
|» id|string|false|none|none|
|» owner|string|false|none|none|
|» permissions|[object]|false|none|none|
|» » policy|string|false|none|none|
|» » privilege|string|false|none|none|
|» » role|string|false|none|none|
|» policy|string|false|none|none|
|» policy_versions|[object]|false|none|none|
|» » client_ip|string|false|none|none|
|» » created_at|string|false|none|none|
|» » finished_at|string|false|none|none|
|» » id|string|false|none|none|
|» » policy_sha256|string|false|none|none|
|» » policy_text|string|false|none|none|
|» » role|string|false|none|none|
|» » version|number|false|none|none|
|» restricted_to|[string]|false|none|none|
|» secrets|[object]|false|none|none|
|» » expires_at|string|false|none|none|
|» » version|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Lists resources of the same kind within an organization account.

<a id="opIdshowResourcesForKind"></a>

> Code samples

```bash
curl https://example.com/resources/default/user \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resources/{account}/{kind}`

Lists resources of the same kind within an organization account.

Kinds of resources include: policy, user, host, group, layer, or variable

If a `limit` is given, returns no more than that number of results.
Providing an `offset` skips a number of resources before returning the rest.
In addition, providing an `offset` will give `limit` a default value of 10 if
none other is provided. These two parameters can be combined to page through results.

If the parameter `count` is `true`, returns only the number of items in the list.

##### Text search

If the `search` parameter is provided, narrows results to those pertaining to the search query.
Search works across resource IDs and the values of annotations. It weighs results so that those
with matching id or a matching value of an annotation called `name` appear first, then those with
another matching annotation value, and finally those with a matching  `kind`.


<h3 id="lists-resources-of-the-same-kind-within-an-organization-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|path|[Kind](#schemakind)|true|Type of resource|
|search|query|string|false|Filter resources based on this value by name|
|offset|query|[Offset](#schemaoffset)|false|When listing resources, start at this item number.|
|limit|query|[Limit](#schemalimit)|false|When listing resources, return up to this many results.|
|count|query|[Count](#schemacount)|false|When listing resources, if `true`, return only the count of the results.|
|role|query|[RoleType](#schemaroletype)|false|Retrieves the resources list for a different role if the authenticated role has access|
|acting_as|query|[RoleType](#schemaroletype)|false|Retrieves the resources list for a different role if the authenticated role has access|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
[
  {
    "annotations": [],
    "created_at": "2021-03-23T16:37:14.455+00:00",
    "id": "dev:policy:conjur/authn-ldap/test",
    "owner": "dev:user:admin",
    "permissions": [],
    "policy": "dev:policy:root",
    "policy_versions": []
  }
]
```

<h3 id="lists-resources-of-the-same-kind-within-an-organization-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body contains a list of resources|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="lists-resources-of-the-same-kind-within-an-organization-account-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» annotations|[string]|false|none|none|
|» created_at|string|false|none|none|
|» id|string|false|none|none|
|» owner|string|false|none|none|
|» permissions|[object]|false|none|none|
|» » policy|string|false|none|none|
|» » privilege|string|false|none|none|
|» » role|string|false|none|none|
|» policy|string|false|none|none|
|» policy_versions|[object]|false|none|none|
|» » client_ip|string|false|none|none|
|» » created_at|string|false|none|none|
|» » finished_at|string|false|none|none|
|» » id|string|false|none|none|
|» » policy_sha256|string|false|none|none|
|» » policy_text|string|false|none|none|
|» » role|string|false|none|none|
|» » version|number|false|none|none|
|» restricted_to|[string]|false|none|none|
|» secrets|[object]|false|none|none|
|» » expires_at|string|false|none|none|
|» » version|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Shows a description of a single resource.

<a id="opIdshowResource"></a>

> Code samples

```bash
curl https://example.com/resources/default/user/conjur%2Fauthn-iam%2Ftest \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /resources/{account}/{kind}/{identifier}`

Details about a single resource.

If `permitted_roles` and `privilege` are given, Conjur lists the
roles with the specified privilege on the resource.

If `check`, `privilege` and `role` are given, Conjur checks if the
specified role has the privilege on the resource.

If `permitted_roles` and `check` are both given, Conjur responds to the `check` call ONLY.

##### Permissions Required


<h3 id="shows-a-description-of-a-single-resource-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|kind|path|[Kind](#schemakind)|true|Type of resource|
|identifier|path|[ResourceID](#schemaresourceid)|true|ID of the resource for which to get the information about|
|permitted_roles|query|boolean|false|Lists the roles which have the named privilege on a resource.|
|privilege|query|string|false|Level of privilege to filter on. Can only be used in combination with `permitted_roles` or `check` parameter.|
|check|query|boolean|false|Check whether a role has a privilege on a resource.|
|role|query|[RoleType](#schemaroletype)|false|Role to check privilege on. Can only be used in combination with `check` parameter.|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
{
  "annotations": [],
  "created_at": "2021-03-23T16:37:14.455+00:00",
  "id": "dev:policy:conjur/authn-ldap/test",
  "owner": "dev:user:admin",
  "permissions": [],
  "policy": "dev:policy:root",
  "policy_versions": []
}
```

<h3 id="shows-a-description-of-a-single-resource-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response body contains the list of role memberships or permitted roles|Inline|
|204|No Content|Permissions check was successful|None|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The requested resource does not exist, the authenticated user lacks the required privileges to enumerate this resource, or its value has not been set|None|
|422|Unprocessable Entity|A request parameter was either missing or invalid.|None|

<h3 id="shows-a-description-of-a-single-resource-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[string]|false|none|none|
|created_at|string|false|none|none|
|id|string|false|none|none|
|owner|string|false|none|none|
|permissions|[object]|false|none|none|
|» policy|string|false|none|none|
|» privilege|string|false|none|none|
|» role|string|false|none|none|
|policy|string|false|none|none|
|policy_versions|[object]|false|none|none|
|» client_ip|string|false|none|none|
|» created_at|string|false|none|none|
|» finished_at|string|false|none|none|
|» id|string|false|none|none|
|» policy_sha256|string|false|none|none|
|» policy_text|string|false|none|none|
|» role|string|false|none|none|
|» version|number|false|none|none|
|restricted_to|[string]|false|none|none|
|secrets|[object]|false|none|none|
|» expires_at|string|false|none|none|
|» version|number|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

<h1 id="conjur-status">status</h1>

Server status

## Details about which authenticators are on the Conjur Server

<a id="opIdgetAuthenticators"></a>

> Code samples

```bash
curl https://example.com/authenticators \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /authenticators`

Response contains three members: installed, configured, and enabled.

installed: The authenticator is implemented in Conjur and is available for configuration
configured: The authenticator has a webservice in the DB that was loaded by policy
enabled: The authenticator is enabled (in the DB or in the ENV) and is ready for authentication


<h3 id="details-about-which-authenticators-are-on-the-conjur-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
{
  "configured": [
    "authn"
  ],
  "enabled": [
    "authn"
  ],
  "installed": [
    "authn"
  ]
}
```

<h3 id="details-about-which-authenticators-are-on-the-conjur-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details about authenticators for this Conjur server|Inline|

<h3 id="details-about-which-authenticators-are-on-the-conjur-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|configured|[string]|false|none|The authenticators configured on the Conjur server|
|enabled|[string]|false|none|The authenticators enabled on the Conjur server|
|installed|[string]|false|none|The authenticators installed on the Conjur server|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, conjurAuth, conjurKubernetesMutualTls
</aside>

## Details whether an authentication service has been configured properly

<a id="opIdgetGCPAuthenticatorStatus"></a>

> Code samples

```bash
curl https://example.com/authn-gcp/dev/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /authn-gcp/{account}/status`

Once the status webservice has been properly configured and the relevant user
groups have been given permissions to access the status webservice, the
users in those groups can check the status of the authenticator.

This operation only supports the GCP authenticator

See [Conjur Documentation](https://docs.conjur.org/Latest/en/Content/Integrations/Authn-status.htm)
for details on setting up the authenticator status webservice.


<h3 id="details-whether-an-authentication-service-has-been-configured-properly-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|string|true|The organization account name|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
{
  "error": "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
  "status": "error"
}
```

> 500 Response

```json
{
  "error": "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
  "status": "error"
}
```

> 501 Response

```json
{
  "error": "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
  "status": "error"
}
```

<h3 id="details-whether-an-authentication-service-has-been-configured-properly-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response contains info about the result|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The service was not found|None|
|500|Internal Server Error|The response contains info about the result|Inline|
|501|Not Implemented|The response contains info about the result|Inline|

<h3 id="details-whether-an-authentication-service-has-been-configured-properly-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error message if there was an error|
|status|string|true|none|The status of the endpoint, 'error' if there was an error|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error message if there was an error|
|status|string|true|none|The status of the endpoint, 'error' if there was an error|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error message if there was an error|
|status|string|true|none|The status of the endpoint, 'error' if there was an error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Health info about conjur

<a id="opIdhealth"></a>

> Code samples

```bash
curl https://example.com/health \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /health`

You can request health checks against any cluster node using the Conjur API.
These routes do not require authentication.

The health check attempts an internal HTTP or TCP connection to
each Conjur Enterprise service. It also attempts a simple transaction against all internal databases.


> Example responses

> 200 Response

```json
{}
```

<h3 id="health-info-about-conjur-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The tests were successful|Inline|
|502|Bad Gateway|The tests failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, conjurAuth, conjurKubernetesMutualTls
</aside>

## Basic information about the Conjur Enterprise server

<a id="opIdinfo"></a>

> Code samples

```bash
curl https://example.com/info \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /info`

Information about the Conjur Enterprise node which was queried against.

Includes authenticator info, release/version info, configuration details,
internal services, and role information.


> Example responses

> 200 Response

```json
{
  "authenticators": {
    "configured": [
      "string"
    ],
    "enabled": [
      "string"
    ],
    "installed": [
      "string"
    ]
  },
  "configuration": {},
  "container": "string",
  "release": "string",
  "role": "string",
  "services": {},
  "version": "string"
}
```

<h3 id="basic-information-about-the-conjur-enterprise-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|info|Inline|

<h3 id="basic-information-about-the-conjur-enterprise-server-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticators|object|false|none|none|
|» configured|[string]|false|none|none|
|» enabled|[string]|false|none|none|
|» installed|[string]|false|none|none|
|configuration|object|false|none|none|
|container|string|false|none|none|
|release|string|false|none|none|
|role|string|false|none|none|
|services|object|false|none|none|
|version|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, conjurAuth, conjurKubernetesMutualTls
</aside>

## Health info about a given Conjur Enterprise server

<a id="opIdremoteHealth"></a>

> Code samples

```bash
curl https://example.com/remote_health/conjur.myorg.com \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}"
```

`GET /remote_health/{remote}`

Use the remote_health route to check the health of any Conjur Enterprise Server from any other Conjur Enterprise Server.
With this route, you can check master health relative to a follower, or follower health relative
to a standby, and so on.


<h3 id="health-info-about-a-given-conjur-enterprise-server-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|remote|path|string|true|The hostname of the remote to check|

> Example responses

> 200 Response

```json
{}
```

<h3 id="health-info-about-a-given-conjur-enterprise-server-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The tests were successful|Inline|
|502|Bad Gateway|The tests failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth, conjurAuth, conjurKubernetesMutualTls
</aside>

## Provides information about the client making an API request.

<a id="opIdwhoAmI"></a>

> Code samples

```bash
curl https://example.com/whoami \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /whoami`

WhoAmI provides information about the client making an API request.
It can be used to help troubleshoot configuration by verifying authentication
and the client IP address for audit and network access restrictions.
For more information, see Host Attributes.


<h3 id="provides-information-about-the-client-making-an-api-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
{
  "account": "dev",
  "client_ip": "127.0.0.1",
  "token_issued_at": "2017-08-04T22:27:20+00:00",
  "user_agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
  "username": "admin"
}
```

<h3 id="provides-information-about-the-client-making-an-api-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Details about the client making the request|Inline|
|401|Unauthorized|Authentication information is missing or invalid|None|

<h3 id="provides-information-about-the-client-making-an-api-request-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|account|string|false|none|The account attribute of the client provided access token.|
|client_ip|string|false|none|The request client IP address as determined by Conjur. This same IP address appears in application logs and audit logs.|
|token_issued_at|string|false|none|The issued timestamp, that is, when the provided access token was created (iat field in the JWT)|
|user_agent|string|false|none|The incoming request HTTP user agent header.|
|username|string|false|none|The username attribute of the provided access token.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

## Details whether an authentication service has been configured properly

<a id="opIdgetServiceAuthenticatorStatus"></a>

> Code samples

```bash
curl https://example.com/authn-oidc/prod%252fgke/dev/status \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}"
```

`GET /{authenticator}/{service_id}/{account}/status`

Once the status webservice has been properly configured and the relevant user
groups have been given permissions to access the status webservice, the
users in those groups can check the status of the authenticator.

Supported Authenticators:
  - Azure
  - OIDC

Not Supported:
  - AWS IAM
  - Kubernetes
  - LDAP

See [Conjur Documentation](https://docs.conjur.org/Latest/en/Content/Integrations/Authn-status.htm)
for details on setting up the authenticator status webservice.


<h3 id="details-whether-an-authentication-service-has-been-configured-properly-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|authenticator|path|string|true|The type of authenticator|
|service_id|path|string|true|URL-Encoded authenticator service ID|
|account|path|string|true|The organization account name|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|

> Example responses

> 200 Response

```json
{
  "error": "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
  "status": "error"
}
```

> 500 Response

```json
{
  "error": "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
  "status": "error"
}
```

> 501 Response

```json
{
  "error": "#<Errors::Authentication::AuthenticatorNotFound: CONJ00001E Authenticator 'authn-oidc' is not implemented in Conjur>",
  "status": "error"
}
```

<h3 id="details-whether-an-authentication-service-has-been-configured-properly-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The response contains info about the result|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|The authenticated user lacks the necessary privileges|None|
|404|Not Found|The service was not found|None|
|500|Internal Server Error|The response contains info about the result|Inline|
|501|Not Implemented|The response contains info about the result|Inline|

<h3 id="details-whether-an-authentication-service-has-been-configured-properly-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error message if there was an error|
|status|string|true|none|The status of the endpoint, 'error' if there was an error|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error message if there was an error|
|status|string|true|none|The status of the endpoint, 'error' if there was an error|

Status Code **501**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|The error message if there was an error|
|status|string|true|none|The status of the endpoint, 'error' if there was an error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

<h1 id="conjur-certificate-authority">certificate authority</h1>

Certificate authority

## Gets a signed certificate from the configured Certificate Authority service.

<a id="opIdsign"></a>

> Code samples

```bash
curl https://example.com/ca/default/ca-service/sign \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: ${API_KEY}" \
  -d 'csr=string&ttl=string'
```

`POST /ca/{account}/{service_id}/sign`

Gets a signed certificate from the configured Certificate Authority service.

The request must include a valid Certificate Signing Request, and a desired TTL in ISO 8601 format.

*** IMPORTANT ***
This endpoint is part of an early implementation of support for using Conjur as a certificate
authority, and is currently available at the Community (or early alpha) level.
This endpoint is still subject to breaking changes in the future.


> Body parameter

```yaml
csr: string
ttl: string
```

<h3 id="gets-a-signed-certificate-from-the-configured-certificate-authority-service-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|path|[AccountName](#schemaaccountname)|true|Organization account name|
|service_id|path|string|true|Name of the Certificate Authority service|
|Accept|header|string|false|Setting the Accept header to `application/x-pem-file` allows Conjur to respond with a formatted certificate|
|X-Request-Id|header|string|false|Add an ID to the request being made so it can be tracked in Conjur.<br>If not provided the server will automatically generate one.<br>|
|body|body|object|true|Client Certificate Signing Request|
|» csr|body|string|true|none|
|» ttl|body|string|true|none|

> Example responses

> 201 Response

```json
{
  "certificate": "string"
}
```

<h3 id="gets-a-signed-certificate-from-the-configured-certificate-authority-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The response body is the newly signed certificate|Inline|
|400|Bad Request|The server cannot process the request due to malformed request syntax|None|
|401|Unauthorized|Authentication information is missing or invalid|None|
|403|Forbidden|Either          <br>- The authenticated role is not a Host role,<br>- The authenticated Host does not have `sign` privilege for the CA service, or<br>- The authenticated Host ID does not match the of the CSR Common Name (CN).<br>|None|
|404|Not Found|CA Service with the given ID does not exist|None|

<h3 id="gets-a-signed-certificate-from-the-configured-certificate-authority-service-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|certificate|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
conjurAuth
</aside>

# Schemas

<h2 id="tocS_AccountName">AccountName</h2>
<!-- backwards compatibility -->
<a id="schemaaccountname"></a>
<a id="schema_AccountName"></a>
<a id="tocSaccountname"></a>
<a id="tocsaccountname"></a>

```json
"default"
```

Conjur account name

<h2 id="tocS_Count">Count</h2>
<!-- backwards compatibility -->
<a id="schemacount"></a>
<a id="schema_Count"></a>
<a id="tocScount"></a>
<a id="tocscount"></a>

```json
true
```

Return only the count of results

<h2 id="tocS_Kind">Kind</h2>
<!-- backwards compatibility -->
<a id="schemakind"></a>
<a id="schema_Kind"></a>
<a id="tocSkind"></a>
<a id="tocskind"></a>

```json
"variable"
```

<h2 id="tocS_Limit">Limit</h2>
<!-- backwards compatibility -->
<a id="schemalimit"></a>
<a id="schema_Limit"></a>
<a id="tocSlimit"></a>
<a id="tocslimit"></a>

```json
10
```

Return no more than this number of results

<h2 id="tocS_Offset">Offset</h2>
<!-- backwards compatibility -->
<a id="schemaoffset"></a>
<a id="schema_Offset"></a>
<a id="tocSoffset"></a>
<a id="tocsoffset"></a>

```json
20
```

Skips this many items before returning the rest

<h2 id="tocS_ResourceID">ResourceID</h2>
<!-- backwards compatibility -->
<a id="schemaresourceid"></a>
<a id="schema_ResourceID"></a>
<a id="tocSresourceid"></a>
<a id="tocsresourceid"></a>

```json
"prod%2Faws%2Fdb-password"
```

Resource identifier. Requires to be encoded when in path.

##### Examples:

- `myapp-01` -> `myapp-01` (unchanged)
- `alice@devops` -> `alice%40devops`
- `prod/aws/db-password` -> `prod%2Faws%2Fdb-password`
- `research+development` -> `research%2Bdevelopment`
- `sales&marketing` -> `sales%26marketing`

<h2 id="tocS_ResourceVersion">ResourceVersion</h2>
<!-- backwards compatibility -->
<a id="schemaresourceversion"></a>
<a id="schema_ResourceVersion"></a>
<a id="tocSresourceversion"></a>
<a id="tocsresourceversion"></a>

```json
1
```

Version of the resource (Conjur keeps the last 20 versions of a secret)

<h2 id="tocS_RoleType">RoleType</h2>
<!-- backwards compatibility -->
<a id="schemaroletype"></a>
<a id="schema_RoleType"></a>
<a id="tocSroletype"></a>
<a id="tocsroletype"></a>

```json
"string"
```

##### Kinds of roles:

- User: one unique wonderful human
- Host: a single logical machine (in the broad sense, not just physical)
- Layer: a collection of hosts that have the same privileges
- Group: a collection of users and groups that have the same privileges
- Policy: a role which owns of a set of related object

Any identifier included in the URL must be URL-encoded to be recognized by the Conjur API.

##### Resource Identifiers:

- `myapp-01` -> `myapp-01` (unchanged)
- `alice@devops` -> `alice%40devops`
- `prod/aws/db-password` -> `prod%2Faws%2Fdb-password`
- `research+development` -> `research%2Bdevelopment`
- `sales&marketing` -> `sales%26marketing`
