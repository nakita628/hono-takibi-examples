<h1 id="pi-hole-api">Pi-hole API v6.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Pi-hole API is organized around [REST](http://en.wikipedia.org/wiki/Representational_State_Transfer). Our API has predictable resource-oriented URLs, accepts and returns reliable UTF-8 [JavaScript Object Notation (JSON)-encoded](http://www.json.org/) data for all API responses, and uses standard HTTP response codes and verbs.
Most (but not all) endpoints require authentication. API endpoints requiring authentication will fail with code `401 Unauthorized` when used outside a valid session.

Base URLs:

* <a href="https://pi.hole:443/api">https://pi.hole:443/api</a>

* <a href="http://pi.hole:80/api">http://pi.hole:80/api</a>

Web: <a href="https://discourse.pi-hole.net">Pi-hole API Support</a> 
License: <a href="https://joinup.ec.europa.eu/community/eupl/og_page/eupl">European Union Public Licence (EUPL)</a>

# Authentication

* API Key (query_sid)
    - Parameter Name: **sid**, in: query.

* API Key (cookie_sid)
    - Parameter Name: **sid**, in: cookie.

* API Key (header_sid)
    - Parameter Name: **sid**, in: header.

* API Key (x_header_sid)
    - Parameter Name: **X-FTL-SID**, in: header.

* API Key (query_password)
    - Parameter Name: **password**, in: query.

<h1 id="pi-hole-api-authentication">Authentication</h1>

Methods used to authenticate with the API

## Check if authentication is required

<a id="opIdget_auth"></a>

> Code samples

```bash
curl http://pi.hole/api/auth \
  -H 'Accept: application/json'
```

`GET /auth`

The API may chose to reply with a valid session if no authentication is needed for this server.


> Example responses

> 200 Response

```json
{
  "session": {
    "valid": true,
    "totp": false,
    "sid": null,
    "csrf": null,
    "validity": 300,
    "message": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "session": {
    "valid": false,
    "totp": false,
    "sid": null,
    "csrf": null,
    "validity": -1,
    "message": "password incorrect"
  },
  "took": 0.003
}
```

<h3 id="check-if-authentication-is-required-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="check-if-authentication-is-required-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|object|true|none|Session object|
|» valid|boolean|true|none|Valid session indicator (client is authenticated)|
|» totp|boolean|true|none|Whether 2FA (TOTP) is enabled on this Pi-hole|
|» sid|string \| null|true|none|Session ID|
|» csrf|string \| null|false|none|CSRF token|
|» validity|integer|true|none|Remaining lifetime of this session unless refreshed (seconds)|
|» message|string \| null|true|none|Human-readable message describing the session status|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|object|true|none|Session object|
|» valid|boolean|true|none|Valid session indicator (client is authenticated)|
|» totp|boolean|true|none|Whether 2FA (TOTP) is enabled on this Pi-hole|
|» sid|string \| null|true|none|Session ID|
|» csrf|string \| null|false|none|CSRF token|
|» validity|integer|true|none|Remaining lifetime of this session unless refreshed (seconds)|
|» message|string \| null|true|none|Human-readable message describing the session status|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
Authentication is optional for this operation. To authenticate, use one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Submit password for login

<a id="opIdadd_auth"></a>

> Code samples

```bash
curl http://pi.hole/api/auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "abcdef",
    "totp": 123456
  }'
```

`POST /auth`

Authenticate using a password. The password isn't stored in the session nor used to create the session token. Instead, the session token is produced using a cryptographically secure random number generator. A CSRF token is utilized to guard against CSRF attacks and is necessary when using Cookie-based authentication. However, it's not needed with other authentication methods.

Both the Session ID (SID) and CSRF token remain valid for the session's duration. The session can be extended before its expiration by performing any authenticated action. By default, the session lasts for 30 minutes. It can be invalidated by either logging out or deleting the session. Additionally, the session becomes invalid when the password is altered or a new application password is created.

If two-factor authentication (2FA) is activated, the Time-based One-Time Password (TOTP) token must be included in the request body. Be aware that the TOTP token, generated by your authenticator app, is only valid for 30 seconds. If the TOTP token is missing, invalid, or has been used previously, the login attempt will be unsuccessful.


> Body parameter

```json
{
  "password": "abcdef",
  "totp": 123456
}
```

<h3 id="submit-password-for-login-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Callback payload|
|» password|body|string|false|Password to be used for login|
|» totp|body|integer|false|Time-based one-time password (TOTP) token, required when 2FA is enabled|

> Example responses

> 200 Response

```json
{
  "session": {
    "valid": true,
    "totp": false,
    "sid": "vFA+EP4MQ5JJvJg+3Q2Jnw=",
    "csrf": "Ux87YTIiMOf/GKCefVIOMw=",
    "validity": 300,
    "message": "correct password"
  },
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "No valid JSON payload found",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "session": {
    "valid": false,
    "totp": false,
    "sid": null,
    "csrf": null,
    "validity": -1,
    "message": "password incorrect"
  },
  "took": 0.003
}
```

> 429 Response

```json
{
  "error": {
    "key": "rate_limiting",
    "message": "Rate-limiting login attempts",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="submit-password-for-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized. A wrong password is answered with the session object (`valid` is `false`), only a rejected 2FA token is answered with an error object.<br>|Inline|
|429|Too Many Requests|Too Many Requests|Inline|

<h3 id="submit-password-for-login-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|object|true|none|Session object|
|» valid|boolean|true|none|Valid session indicator (client is authenticated)|
|» totp|boolean|true|none|Whether 2FA (TOTP) is enabled on this Pi-hole|
|» sid|string \| null|true|none|Session ID|
|» csrf|string \| null|false|none|CSRF token|
|» validity|integer|true|none|Remaining lifetime of this session unless refreshed (seconds)|
|» message|string \| null|true|none|Human-readable message describing the session status|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Additional data (if available)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|object|false|none|none|
|session|object|true|none|Session object|
|» valid|boolean|true|none|Valid session indicator (client is authenticated)|
|» totp|boolean|true|none|Whether 2FA (TOTP) is enabled on this Pi-hole|
|» sid|string \| null|true|none|Session ID|
|» csrf|string \| null|false|none|CSRF token|
|» validity|integer|true|none|Remaining lifetime of this session unless refreshed (seconds)|
|» message|string \| null|true|none|Human-readable message describing the session status|
|*anyOf*|object|false|none|Authentication required|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="success">
This operation does not require authentication
</aside>

## Delete session

<a id="opIddelete_groups"></a>

> Code samples

```bash
curl "http://pi.hole/api/auth?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /auth`

This endpoint can be used to delete the current session. It will
invalidate the session token and the CSRF token. The session can be
extended before its expiration by performing any authenticated action.
By default, the session lasts for 30 minutes. It can be invalidated by
either logging out or deleting the session. Additionally, the session
becomes invalid when the password is altered or a new application
password is created.

You can also delete a session by its ID using the `DELETE /auth/session/{id}` endpoint.

Note that you cannot delete the current session if you have not
authenticated (e.g., no password has been set on your Pi-hole).


> Example responses

> 401 Response

```json
{
  "session": {
    "valid": false,
    "totp": false,
    "sid": null,
    "csrf": null,
    "validity": -1,
    "message": "no SID provided"
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-session-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content (deleted)|None|
|401|Unauthorized|Unauthorized (not authenticated, the session object is returned)|Inline|
|404|Not Found|Not Found (no session active)|Inline|

<h3 id="delete-session-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|session|object|true|none|Session object|
|» valid|boolean|true|none|Valid session indicator (client is authenticated)|
|» totp|boolean|true|none|Whether 2FA (TOTP) is enabled on this Pi-hole|
|» sid|string \| null|true|none|Session ID|
|» csrf|string \| null|false|none|CSRF token|
|» validity|integer|true|none|Remaining lifetime of this session unless refreshed (seconds)|
|» message|string \| null|true|none|Human-readable message describing the session status|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete session by ID

<a id="opIddelete_auth_session"></a>

> Code samples

```bash
curl "http://pi.hole/api/auth/session/0?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /auth/session/{id}`

Using this endpoint, a session can be deleted by its ID.


<h3 id="delete-session-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Session ID|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Missing or invalid session ID",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-session-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content (deleted)|None|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not Found (session not found)|Inline|

<h3 id="delete-session-by-id-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Additional data (if available)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## List of all current sessions

<a id="opIdget_auth_sessions"></a>

> Code samples

```bash
curl "http://pi.hole/api/auth/sessions?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /auth/sessions`

List of all current sessions including their validity and further information about the client such as the IP address and user agent.

> Example responses

> 200 Response

```json
{
  "sessions": [
    {
      "id": 1,
      "current_session": true,
      "valid": true,
      "tls": {
        "login": true,
        "mixed": false
      },
      "app": false,
      "cli": false,
      "login_at": 1580000000,
      "last_active": 1580000000,
      "valid_until": 1580000300,
      "remote_addr": "192.168.0.34",
      "user_agent": "Mozilla/5.0 (X11; Linux x86_64; rv:107.0) Gecko/20100101 Firefox/107.0",
      "x_forwarded_for": null
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="list-of-all-current-sessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-of-all-current-sessions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sessions|[object]|false|none|none|
|» id|number|false|none|Session ID|
|» current_session|boolean|false|none|Indicator if this is the current session|
|» valid|boolean|false|none|Valid session indicator (existing sessions may be invalid due to timeout)|
|» tls|object|false|none|TLS (end-to-end encryption) information|
|» » login|boolean|false|none|Indicator if TLS (end-to-end encryption) has been used during login for this session|
|» » mixed|boolean|false|none|Indicator if TLS (end-to-end encryption) is used only partially for this session|
|» app|boolean|false|none|Indicator if this session was initiated using an application password|
|» cli|boolean|false|none|Indicator if this session was initiated using the command-line interface (CLI)|
|» login_at|integer|false|none|Timestamp of login (seconds since epoch)|
|» last_active|integer|false|none|Timestamp of last activity (seconds since epoch)|
|» valid_until|integer|false|none|Timestamp of session expiration (seconds since epoch)|
|» remote_addr|string|false|none|IP address of the client|
|» user_agent|string \| null|false|none|User agent of the client (optional)|
|» x_forwarded_for|string \| null|false|none|IP address of the client (if behind a proxy, optional)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Suggest new TOTP credentials

<a id="opIdget_auth_totp"></a>

> Code samples

```bash
curl "http://pi.hole/api/auth/totp?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /auth/totp`

Suggest new TOTP credentials for two-factor authentication (2FA)

> Example responses

> 200 Response

```json
{
  "totp": {
    "type": "string",
    "account": "string",
    "issuer": "string",
    "algorithm": "string",
    "digits": 0,
    "period": 0,
    "offset": 0,
    "secret": "string",
    "codes": [
      0
    ]
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="suggest-new-totp-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="suggest-new-totp-credentials-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|totp|object|false|none|none|
|» type|string|false|none|none|
|» account|string|false|none|none|
|» issuer|string|false|none|none|
|» algorithm|string|false|none|none|
|» digits|integer|false|none|none|
|» period|integer|false|none|none|
|» offset|integer|false|none|none|
|» secret|string|false|none|none|
|» codes|[integer]|false|none|none|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Create new application password

<a id="opIdadd_app"></a>

> Code samples

```bash
curl "http://pi.hole/api/auth/app?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /auth/app`

Create a new application password. The generated password is shown only once and cannot be retrieved later - make sure to store it in a safe place. The application password can be used to authenticate against the API instead of the regular password.
It does not require 2FA verification. Generating a new application password will invalidate all currently active sessions.

Note that this endpoint only generates an application password accompanied by its hash. To make this new password effective, the returned `hash` has to be set as `webserver.api.app_password` in the Pi-hole configuration in a follow-up step. This can be done in various ways, e.g. via the API (`PATCH /api/config/webserver/api/app_pwhash`), the graphical web interface (Settings -> All Settings) or by editing the configuration file directly.


> Example responses

> 200 Response

```json
{
  "app": {
    "password": "7ua0rHPZixX6B3bTa5o4Dv08iyEIm/2q9qgLrF9MNVw=",
    "hash": "$BALLOON-SHA256$v=1$s=1024,t=32$4ERwJD4XucRP4PcDHNLiAg==$kSy0Eou8RUVtK2UTbc5MCpItV8YC3VRuoGhoENxSQ2I="
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="create-new-application-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="create-new-application-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|object|false|none|none|
|» password|string|false|none|none|
|» hash|string|false|none|none|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-metrics">Metrics</h1>

Methods used to get usage data from your Pi-hole

## Get overview of Pi-hole activity

<a id="opIdget_metrics_summary"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/summary?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/summary`

Request various query, system, and FTL properties


> Example responses

> 200 Response

```json
{
  "queries": {
    "total": 7497,
    "blocked": 3465,
    "percent_blocked": 34.5,
    "unique_domains": 445,
    "forwarded": 4574,
    "cached": 9765,
    "frequency": 1.1,
    "types": {
      "A": 3643,
      "AAAA": 123,
      "ANY": 3423,
      "SRV": 345,
      "SOA": 7567,
      "PTR": 456,
      "TXT": 85,
      "NAPTR": 346,
      "MX": 457,
      "DS": 456,
      "RRSIG": 345,
      "DNSKEY": 55,
      "NS": 868,
      "SVCB": 645,
      "HTTPS": 4,
      "OTHER": 845
    },
    "status": {
      "UNKNOWN": 3,
      "GRAVITY": 72,
      "FORWARDED": 533,
      "CACHE": 32,
      "REGEX": 84,
      "DENYLIST": 31,
      "EXTERNAL_BLOCKED_IP": 0,
      "EXTERNAL_BLOCKED_NULL": 0,
      "EXTERNAL_BLOCKED_NXRA": 0,
      "GRAVITY_CNAME": 0,
      "REGEX_CNAME": 0,
      "DENYLIST_CNAME": 0,
      "RETRIED": 0,
      "RETRIED_DNSSEC": 0,
      "IN_PROGRESS": 0,
      "DBBUSY": 0,
      "SPECIAL_DOMAIN": 0,
      "CACHE_STALE": 0,
      "EXTERNAL_BLOCKED_EDE15": 0
    },
    "replies": {
      "UNKNOWN": 3,
      "NODATA": 72,
      "NXDOMAIN": 533,
      "CNAME": 32,
      "IP": 84,
      "DOMAIN": 31,
      "RRNAME": 0,
      "SERVFAIL": 0,
      "REFUSED": 0,
      "NOTIMP": 0,
      "OTHER": 0,
      "DNSSEC": 31,
      "NONE": 0,
      "BLOB": 0
    }
  },
  "clients": {
    "active": 10,
    "total": 22
  },
  "gravity": {
    "domains_being_blocked": 104756,
    "last_update": 1725194639
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-overview-of-pi-hole-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-overview-of-pi-hole-activity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queries|object|false|none|none|
|» total|integer|false|none|Total number of queries|
|» blocked|integer|false|none|Number of blocked queries|
|» percent_blocked|number|false|none|Percent of blocked queries|
|» unique_domains|integer|false|none|Number of unique domains FTL knows|
|» forwarded|integer|false|none|Number of queries that have been forwarded upstream|
|» cached|integer|false|none|Number of queries replied to from cache or local configuration|
|» frequency|number|false|none|Average number of queries per second|
|» types|object|false|none|Number of individual queries|
|» » A|integer|false|none|Type A queries|
|» » AAAA|integer|false|none|Type AAAA queries|
|» » ANY|integer|false|none|Type ANY queries|
|» » SRV|integer|false|none|Type SRV queries|
|» » SOA|integer|false|none|Type SOA queries|
|» » PTR|integer|false|none|Type PTR queries|
|» » TXT|integer|false|none|Type TXT queries|
|» » NAPTR|integer|false|none|Type NAPTR queries|
|» » MX|integer|false|none|Type MX queries|
|» » DS|integer|false|none|Type DS queries|
|» » RRSIG|integer|false|none|Type RRSIG queries|
|» » DNSKEY|integer|false|none|Type DNSKEY queries|
|» » NS|integer|false|none|Type NS queries|
|» » SVCB|integer|false|none|Type SVCB queries|
|» » HTTPS|integer|false|none|Type HTTPS queries|
|» » OTHER|integer|false|none|Queries of remaining types|
|» status|object|false|none|Number of individual queries (by status)|
|» » UNKNOWN|integer|false|none|Type UNKNOWN queries|
|» » GRAVITY|integer|false|none|Type GRAVITY queries|
|» » FORWARDED|integer|false|none|Type FORWARDED queries|
|» » CACHE|integer|false|none|Type CACHE queries|
|» » REGEX|integer|false|none|Type REGEX queries|
|» » DENYLIST|integer|false|none|Type DENYLIST queries|
|» » EXTERNAL_BLOCKED_IP|integer|false|none|Type EXTERNAL_BLOCKED_IP queries|
|» » EXTERNAL_BLOCKED_NULL|integer|false|none|Type EXTERNAL_BLOCKED_NULL queries|
|» » EXTERNAL_BLOCKED_NXRA|integer|false|none|Type EXTERNAL_BLOCKED_NXRA queries|
|» » GRAVITY_CNAME|integer|false|none|Type GRAVITY_CNAME queries|
|» » REGEX_CNAME|integer|false|none|Type REGEX_CNAME queries|
|» » DENYLIST_CNAME|integer|false|none|Type DENYLIST_CNAME queries|
|» » RETRIED|integer|false|none|Type RETRIED queries|
|» » RETRIED_DNSSEC|integer|false|none|Type RETRIED_DNSSEC queries|
|» » IN_PROGRESS|integer|false|none|Type IN_PROGRESS queries|
|» » DBBUSY|integer|false|none|Type DBBUSY queries|
|» » SPECIAL_DOMAIN|integer|false|none|Type SPECIAL_DOMAIN queries|
|» » CACHE_STALE|integer|false|none|Type CACHE_STALE queries|
|» » EXTERNAL_BLOCKED_EDE15|integer|false|none|Type EXTERNAL_BLOCKED_EDE15 queries|
|» replies|object|false|none|Number of individual replies|
|» » UNKNOWN|integer|false|none|Type UNKNOWN replies|
|» » NODATA|integer|false|none|Type NODATA replies|
|» » NXDOMAIN|integer|false|none|Type NXDOMAIN replies|
|» » CNAME|integer|false|none|Type CNAME replies|
|» » IP|integer|false|none|Type IP replies|
|» » DOMAIN|integer|false|none|Type DOMAIN replies|
|» » RRNAME|integer|false|none|Type RRNAME replies|
|» » SERVFAIL|integer|false|none|Type SERVFAIL replies|
|» » REFUSED|integer|false|none|Type REFUSED replies|
|» » NOTIMP|integer|false|none|Type NOTIMP replies|
|» » OTHER|integer|false|none|Type OTHER replies|
|» » DNSSEC|integer|false|none|Type DNSSEC replies|
|» » NONE|integer|false|none|Type NONE replies|
|» » BLOB|integer|false|none|Type BLOB replies|
|clients|object|false|none|none|
|» active|integer|false|none|Number of active clients (seen in the last 24 hours)|
|» total|integer|false|none|Total number of clients seen by FTL|
|gravity|object|false|none|none|
|» domains_being_blocked|integer|false|none|Number of domain on your Pi-hole's gravity list|
|» last_update|integer|false|none|Unix timestamp of last gravity update (may be `0` if unknown)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get database content details

<a id="opIdget_metrics_database_summary"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/database/summary?from=1672580025&until=1672666425&sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/database/summary`

Request various database content details


<h3 id="get-database-content-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer|true|Unix timestamp from when the data should be requested|
|until|query|integer|true|Unix timestamp from when the data should be requested|

> Example responses

> 200 Response

```json
{
  "sum_queries": 29160,
  "sum_blocked": 6379,
  "percent_blocked": 21.9,
  "total_clients": 10,
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-database-content-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-database-content-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sum_queries|integer|false|none|Total number of queries|
|sum_blocked|integer|false|none|Total number of blocked queries|
|percent_blocked|number|false|none|Percentage of blocked queries|
|total_clients|integer|false|none|Total number of clients|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get metrics about Pi-hole's upstream destinations

<a id="opIdget_metrics_upstreams"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/upstreams?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/upstreams`

Request upstream metrics


> Example responses

> 200 Response

```json
{
  "upstreams": [
    {
      "ip": "127.0.0.1",
      "name": "localhost",
      "port": 53,
      "count": 65445,
      "statistics": {
        "response": 0.0254856,
        "variance": 0.02058
      }
    }
  ],
  "forwarded_queries": 6379,
  "total_queries": 29160,
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-metrics-about-pi-holes-upstream-destinations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-metrics-about-pi-holes-upstream-destinations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upstreams|[object]|false|none|Array of upstream destinations|
|» ip|string \| null|false|none|Upstream destination's IP address (can be either IPv4 or IPv6)|
|» name|string \| null|false|none|Upstream destination's hostname (if available)|
|» port|integer|false|none|Upstream destination's destination port (-1 if not applicable, e.g., for the local cache)|
|» count|integer|false|none|Number of queries this upstream destination has been used for|
|» statistics|object|false|none|none|
|» » response|number|false|none|Average response time of this upstream destination in seconds (0 if not applicable)|
|» » variance|number|false|none|Standard deviation of the average response time (0 if not applicable)|
|forwarded_queries|integer|false|none|Number of forwarded queries|
|total_queries|integer|false|none|Total number of queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get metrics about Pi-hole's upstream destinations (long-term database)

<a id="opIdget_metrics_upstreams_database"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/database/upstreams?from=1672580025&until=1672666425&sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/database/upstreams`

Request upstream metrics (long-term database)


<h3 id="get-metrics-about-pi-holes-upstream-destinations-long-term-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer|true|Unix timestamp from when the data should be requested|
|until|query|integer|true|Unix timestamp from when the data should be requested|

> Example responses

> 200 Response

```json
{
  "upstreams": [
    {
      "ip": "127.0.0.1",
      "name": "localhost",
      "port": 53,
      "count": 65445,
      "statistics": {
        "response": 0.0254856,
        "variance": 0.02058
      }
    }
  ],
  "forwarded_queries": 6379,
  "total_queries": 29160,
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-metrics-about-pi-holes-upstream-destinations-long-term-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-metrics-about-pi-holes-upstream-destinations-long-term-database-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|upstreams|[object]|false|none|Array of upstream destinations|
|» ip|string \| null|false|none|Upstream destination's IP address (can be either IPv4 or IPv6)|
|» name|string \| null|false|none|Upstream destination's hostname (if available)|
|» port|integer|false|none|Upstream destination's destination port (-1 if not applicable, e.g., for the local cache)|
|» count|integer|false|none|Number of queries this upstream destination has been used for|
|» statistics|object|false|none|none|
|» » response|number|false|none|Average response time of this upstream destination in seconds (0 if not applicable)|
|» » variance|number|false|none|Standard deviation of the average response time (0 if not applicable)|
|forwarded_queries|integer|false|none|Number of forwarded queries|
|total_queries|integer|false|none|Total number of queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get top domains

<a id="opIdget_metrics_top_domains"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/top_domains?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/top_domains`

Request top domains


<h3 id="get-top-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blocked|query|boolean|false|Return information about permitted or blocked queries|
|count|query|integer|false|Number of requested items|

> Example responses

> 200 Response

```json
{
  "domains": [
    {
      "domain": "pi-hole.net",
      "count": 8516
    }
  ],
  "total_queries": 29160,
  "blocked_queries": 6379,
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-top-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-top-domains-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[object]|false|none|Array of domains|
|» domain|string|false|none|Requested domain|
|» count|integer|false|none|Number of times this domain has been requested|
|total_queries|integer|false|none|Total number of queries|
|blocked_queries|integer|false|none|Number of blocked queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get top domains (long-term database)

<a id="opIdget_metrics_database_top_domains"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/database/top_domains?from=1672580025&until=1672666425&sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/database/top_domains`

Request top domains


<h3 id="get-top-domains-long-term-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer|true|Unix timestamp from when the data should be requested|
|until|query|integer|true|Unix timestamp from when the data should be requested|
|blocked|query|boolean|false|Return information about permitted or blocked queries|
|count|query|integer|false|Number of requested items|

> Example responses

> 200 Response

```json
{
  "domains": [
    {
      "domain": "pi-hole.net",
      "count": 8516
    }
  ],
  "total_queries": 29160,
  "blocked_queries": 6379,
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-top-domains-long-term-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-top-domains-long-term-database-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[object]|false|none|Array of domains|
|» domain|string|false|none|Requested domain|
|» count|integer|false|none|Number of times this domain has been requested|
|total_queries|integer|false|none|Total number of queries|
|blocked_queries|integer|false|none|Number of blocked queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get top clients

<a id="opIdget_metrics_top_clients"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/top_clients?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/top_clients`

Request top clients


<h3 id="get-top-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|blocked|query|boolean|false|Return information about permitted or blocked queries|
|count|query|integer|false|Number of requested items|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "ip": "192.168.0.44",
      "name": "raspberrypi.lan",
      "count": 5896
    }
  ],
  "total_queries": 29160,
  "blocked_queries": 6379,
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-top-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-top-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[object]|false|none|Array of clients|
|» ip|string|false|none|Client IP address (can be either IPv4 or IPv6)|
|» name|string|false|none|Client hostname (if available)|
|» count|integer|false|none|Number of queries this client has made|
|total_queries|integer|false|none|Total number of queries|
|blocked_queries|integer|false|none|Number of blocked queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get top clients (long-term database)

<a id="opIdget_metrics_database_top_clients"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/database/top_clients?from=1672580025&until=1672666425&sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/database/top_clients`

Request top clients


<h3 id="get-top-clients-long-term-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer|true|Unix timestamp from when the data should be requested|
|until|query|integer|true|Unix timestamp from when the data should be requested|
|blocked|query|boolean|false|Return information about permitted or blocked queries|
|count|query|integer|false|Number of requested items|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "ip": "192.168.0.44",
      "name": "raspberrypi.lan",
      "count": 5896
    }
  ],
  "total_queries": 29160,
  "blocked_queries": 6379,
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-top-clients-long-term-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-top-clients-long-term-database-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[object]|false|none|Array of clients|
|» ip|string|false|none|Client IP address (can be either IPv4 or IPv6)|
|» name|string|false|none|Client hostname (if available)|
|» count|integer|false|none|Number of queries this client has made|
|total_queries|integer|false|none|Total number of queries|
|blocked_queries|integer|false|none|Number of blocked queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get query types

<a id="opIdget_metrics_query_types"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/query_types?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/query_types`

Request query types


> Example responses

> 200 Response

```json
{
  "types": {
    "A": 18268,
    "AAAA": 2332,
    "ANY": 0,
    "SRV": 6,
    "SOA": 44,
    "PTR": 389,
    "TXT": 0,
    "NAPTR": 1,
    "MX": 109,
    "DS": 596,
    "RRSIG": 25,
    "DNSKEY": 240,
    "NS": 18,
    "SVCB": 0,
    "HTTPS": 11,
    "OTHER": 0
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-query-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-query-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|types|object|false|none|Number of individual query types|
|» A|integer|false|none|Type A queries|
|» AAAA|integer|false|none|Type AAAA queries|
|» ANY|integer|false|none|Type ANY queries|
|» SRV|integer|false|none|Type SRV queries|
|» SOA|integer|false|none|Type SOA queries|
|» PTR|integer|false|none|Type PTR queries|
|» TXT|integer|false|none|Type TXT queries|
|» NAPTR|integer|false|none|Type NAPTR queries|
|» MX|integer|false|none|Type MX queries|
|» DS|integer|false|none|Type DS queries|
|» RRSIG|integer|false|none|Type RRSIG queries|
|» DNSKEY|integer|false|none|Type DNSKEY queries|
|» NS|integer|false|none|Type NS queries|
|» SVCB|integer|false|none|Type SVCB queries|
|» HTTPS|integer|false|none|Type HTTPS queries|
|» OTHER|integer|false|none|Type OTHER queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get query types (long-term database)

<a id="opIdget_metrics_database_query_types"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/database/query_types?from=1672580025&until=1672666425&sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/database/query_types`

Request query types


<h3 id="get-query-types-long-term-database-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer|true|Unix timestamp from when the data should be requested|
|until|query|integer|true|Unix timestamp from when the data should be requested|

> Example responses

> 200 Response

```json
{
  "types": {
    "A": 18268,
    "AAAA": 2332,
    "ANY": 0,
    "SRV": 6,
    "SOA": 44,
    "PTR": 389,
    "TXT": 0,
    "NAPTR": 1,
    "MX": 109,
    "DS": 596,
    "RRSIG": 25,
    "DNSKEY": 240,
    "NS": 18,
    "SVCB": 0,
    "HTTPS": 11,
    "OTHER": 0
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-query-types-long-term-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-query-types-long-term-database-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|types|object|false|none|Number of individual query types|
|» A|integer|false|none|Type A queries|
|» AAAA|integer|false|none|Type AAAA queries|
|» ANY|integer|false|none|Type ANY queries|
|» SRV|integer|false|none|Type SRV queries|
|» SOA|integer|false|none|Type SOA queries|
|» PTR|integer|false|none|Type PTR queries|
|» TXT|integer|false|none|Type TXT queries|
|» NAPTR|integer|false|none|Type NAPTR queries|
|» MX|integer|false|none|Type MX queries|
|» DS|integer|false|none|Type DS queries|
|» RRSIG|integer|false|none|Type RRSIG queries|
|» DNSKEY|integer|false|none|Type DNSKEY queries|
|» NS|integer|false|none|Type NS queries|
|» SVCB|integer|false|none|Type SVCB queries|
|» HTTPS|integer|false|none|Type HTTPS queries|
|» OTHER|integer|false|none|Type OTHER queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get most recently blocked domain

<a id="opIdget_metrics_recent_blocked"></a>

> Code samples

```bash
curl "http://pi.hole/api/stats/recent_blocked?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /stats/recent_blocked`

Request most recently blocked domain


<h3 id="get-most-recently-blocked-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|Number of requested blocked domains|

> Example responses

> 200 Response

```json
{
  "blocked": [
    "doubleclick.net"
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-most-recently-blocked-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-most-recently-blocked-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocked|[string]|false|none|List of blocked domains|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get activity graph data

<a id="opIdget_activity_metrics"></a>

> Code samples

```bash
curl "http://pi.hole/api/history?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /history`

Request data needed to generate the total queries over time graph. The sum of the values in the individual data arrays may be smaller than the total number of queries for the corresponding timestamp. The remaining queries are queries that do not fit into the shown categories (e.g. database busy, unknown status queries, etc.).


> Example responses

> 200 Response

```json
{
  "history": [
    {
      "timestamp": 1511819900.539157,
      "total": 2134,
      "cached": 525,
      "blocked": 413,
      "forwarded": 1196
    },
    {
      "timestamp": 1511820500.583821,
      "total": 2014,
      "cached": 52,
      "blocked": 43,
      "forwarded": 1910
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-activity-graph-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-activity-graph-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[object]|false|none|Data array|
|» timestamp|number|false|none|Timestamp|
|» total|integer|false|none|Total number of queries|
|» cached|integer|false|none|Number of cached queries|
|» blocked|integer|false|none|Number of blocked queries|
|» forwarded|integer|false|none|Number of forwarded queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get per-client activity graph data

<a id="opIdget_client_metrics"></a>

> Code samples

```bash
curl "http://pi.hole/api/history/clients?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /history/clients`

Request data needed to generate the \"Client activity over last 24 hours\" graph.
This endpoint returns the top N clients, sorted by total number of queries within 24 hours. If N is set to 0, all clients will be returned.
The client name is only available if the client's IP address can be resolved to a hostname.

The last client returned is a special client that contains the total number of queries that were not sent by any of the other shown clients , i.e. queries that were sent by clients that are not in the top N. This client is always present, even if it has 0 queries and can be identified by the special name "other clients" (mind the space in the hostname) and the IP address "0.0.0.0".

Note that, due to privacy settings, the returned data may also be empty.


<h3 id="get-per-client-activity-graph-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|N|query|integer|false|Maximum number of clients to return, setting this to 0 will return all clients|

> Example responses

> 200 Response

```json
{
  "clients": {
    "127.0.0.1": {
      "name": "localhost",
      "total": 13428
    },
    "::1": {
      "name": "ip6-localnet",
      "total": 2100
    },
    "192.168.1.1": {
      "name": null,
      "total": 254
    },
    "::": {
      "name": "pi.hole",
      "total": 29
    },
    "0.0.0.0": {
      "name": "other clients",
      "total": 14
    }
  },
  "history": [
    {
      "timestamp": 1511819900.539157,
      "data": {
        "127.0.0.1": 35,
        "::1": 63,
        "192.168.1.1": 20,
        "::": 9,
        "0.0.0.0": 0
      }
    },
    {
      "timestamp": 1511820500.583821,
      "data": {
        "127.0.0.1": 10,
        "::1": 44,
        "192.168.1.1": 56,
        "::": 52
      }
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-per-client-activity-graph-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-per-client-activity-graph-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|object|false|none|Data corresponding to the individual clients|
|» **additionalProperties**|object|false|none|none|
|» » name|string \| null|false|none|Client name|
|» » total|integer|false|none|Total number of queries|
|history|[object]|false|none|Data array|
|» timestamp|number|false|none|Timestamp|
|» data|object|false|none|Data corresponding to the individual clients|
|» » **additionalProperties**|integer|false|none|Number of queries for the corresponding client|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get activity graph data (long-term data)

<a id="opIdget_activity_metrics_database"></a>

> Code samples

```bash
curl "http://pi.hole/api/history/database?from=1672580025&until=1672666425&sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /history/database`

Request long-term data needed to generate the activity graph


<h3 id="get-activity-graph-data-long-term-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer|true|Unix timestamp from when the data should be requested|
|until|query|integer|true|Unix timestamp from when the data should be requested|

> Example responses

> 200 Response

```json
{
  "history": [
    {
      "timestamp": 1511819900.539157,
      "total": 2134,
      "cached": 525,
      "blocked": 413,
      "forwarded": 1196
    },
    {
      "timestamp": 1511820500.583821,
      "total": 2014,
      "cached": 52,
      "blocked": 43,
      "forwarded": 1910
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-activity-graph-data-long-term-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-activity-graph-data-long-term-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|history|[object]|false|none|Data array|
|» timestamp|number|false|none|Timestamp|
|» total|integer|false|none|Total number of queries|
|» cached|integer|false|none|Number of cached queries|
|» blocked|integer|false|none|Number of blocked queries|
|» forwarded|integer|false|none|Number of forwarded queries|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get per-client activity graph data (long-term data)

<a id="opIdget_client_metrics_database"></a>

> Code samples

```bash
curl "http://pi.hole/api/history/database/clients?from=1672580025&until=1672666425&sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /history/database/clients`

Request long-term data needed to generate the client activity graph


<h3 id="get-per-client-activity-graph-data-long-term-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|integer|true|Unix timestamp from when the data should be requested|
|until|query|integer|true|Unix timestamp from when the data should be requested|

> Example responses

> 200 Response

```json
{
  "clients": {
    "127.0.0.1": {
      "name": "localhost",
      "total": 13428
    },
    "::1": {
      "name": "ip6-localnet",
      "total": 2100
    },
    "192.168.1.1": {
      "name": null,
      "total": 254
    },
    "::": {
      "name": "pi.hole",
      "total": 29
    },
    "0.0.0.0": {
      "name": "other clients",
      "total": 14
    }
  },
  "history": [
    {
      "timestamp": 1511819900.539157,
      "data": {
        "127.0.0.1": 35,
        "::1": 63,
        "192.168.1.1": 20,
        "::": 9,
        "0.0.0.0": 0
      }
    },
    {
      "timestamp": 1511820500.583821,
      "data": {
        "127.0.0.1": 10,
        "::1": 44,
        "192.168.1.1": 56,
        "::": 52
      }
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-per-client-activity-graph-data-long-term-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-per-client-activity-graph-data-long-term-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|object|false|none|Data corresponding to the individual clients|
|» **additionalProperties**|object|false|none|none|
|» » name|string \| null|false|none|Client name|
|» » total|integer|false|none|Total number of queries|
|history|[object]|false|none|Data array|
|» timestamp|number|false|none|Timestamp|
|» data|object|false|none|Data corresponding to the individual clients|
|» » **additionalProperties**|integer|false|none|Number of queries for the corresponding client|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get queries

<a id="opIdget_queries"></a>

> Code samples

```bash
curl "http://pi.hole/api/queries?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /queries`

Request query details.
Query parameters may be used to limit the number of results.

By default, this API callback returns the most recent 100 queries.
This can be changed using the parameter `length`.

This callback allows for fine-grained filtering by various parameters.
All query parameters are all optional and can be combined in any way:

- Only show queries *from* a given timestamp on: Use parameter `from`
- Only show queries *until* a given timestamp: Use parameter `until`
- Only show queries sent to a specific upstream destination (may also be `cache`, `blocklist`, or `permitted`): Use parameter `upstream`
- Only show queries for specific domains: Use parameter `domain`
- Only show queries for specific clients: Use parameter `client`

By default, the returned queries always start at the most recent query.
This can be changed by supplying the parameter `cursor`.
Each result of this API callback contains a `cursor` pointing the beginning of the next `length` queries chunk.
This provides a very fast and lightweight server-side pagination implementation.

If wildcards are supported for a parameter, you may specify `*` at any position in the parameter to match any number of characters.


<h3 id="get-queries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|from|query|number|false|Get queries from...|
|until|query|number|false|Get queries until...|
|length|query|integer|false|Number of results to return|
|start|query|integer|false|Offset from first record|
|cursor|query|integer|false|Database ID of the most recent query to be shown<br>|
|domain|query|string|false|Filter by specific domain (wildcards supported)|
|client_ip|query|string|false|Filter by specific client IP address (wildcards supported)|
|client_name|query|string|false|Filter by specific client hostname (wildcards supported)|
|upstream|query|string|false|Filter by specific upstream (wildcards supported)|
|type|query|string|false|Filter by specific query type (A, AAAA, ..., OTHER for all types without a name of their own, or TYPEnnn for one of them)|
|status|query|string|false|Filter by specific query status (GRAVITY, FORWARDED, ...)|
|reply|query|string|false|Filter by specific reply type (NODATA, NXDOMAIN, ...)|
|dnssec|query|string|false|Filter by specific DNSSEC status (SECURE, INSECURE, ...)|
|disk|query|boolean|false|Load queries from on-disk database rather than from in-memory|

> Example responses

> 200 Response

```json
{
  "queries": [
    {
      "time": 1581907991.539157,
      "type": "A",
      "domain": "community.stoplight.io",
      "cname": null,
      "status": "FORWARDED",
      "client": {
        "ip": "192.168.0.14",
        "name": "desktop.lan"
      },
      "dnssec": "INSECURE",
      "reply": {
        "type": "IP",
        "time": 0.019
      },
      "list_id": null,
      "upstream": "localhost#5353",
      "id": 112421354,
      "ede": {
        "code": 0,
        "text": null
      }
    },
    {
      "time": 1581907871.583821,
      "type": "AAAA",
      "domain": "api.github.com",
      "cname": null,
      "status": "FORWARDED",
      "client": {
        "ip": "127.0.0.1",
        "name": "localhost"
      },
      "dnssec": "UNKNOWN",
      "reply": {
        "type": "IP",
        "time": 0.0123
      },
      "list_id": null,
      "upstream": "localhost#5353",
      "id": 112421355,
      "ede": {
        "code": 0,
        "text": null
      }
    }
  ],
  "cursor": 175881,
  "recordsTotal": 1234,
  "recordsFiltered": 1234,
  "draw": 1,
  "earliest_timestamp": 1581900000,
  "earliest_timestamp_disk": 1580000000,
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-queries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-queries-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|queries|[object]|false|none|Data array|
|» id|integer|false|none|Query ID in the long-term database|
|» time|number|false|none|Timestamp|
|» type|string|false|none|Query type|
|» domain|string|false|none|Queried domain|
|» cname|string \| null|false|none|Domain blocked during deep CNAME inspection|
|» status|string \| null|false|none|Query status|
|» client|object|false|none|none|
|» » ip|string|false|none|Requesting client's IP address|
|» » name|string \| null|false|none|Requesting client's hostname (if available)|
|» dnssec|string \| null|false|none|DNSSEC status|
|» reply|object|false|none|none|
|» » type|string \| null|false|none|Reply type|
|» » time|number|false|none|Time until the response was received (seconds, 0 if not available)|
|» list_id|integer \| null|false|none|ID of corresponding database table (adlist for anti-/gravity, else domainlist) (`NULL` if N/A)|
|» upstream|string \| null|false|none|IP or name + port of upstream server|
|» ede|object|false|none|Extended DNS Error (EDE) information|
|» » code|integer|false|none|EDE code|
|» » text|string \| null|false|none|EDE message (if available)|
|cursor|integer \| null|false|none|Database ID of most recent query to show (null when there are no queries to show, e.g., at privacy level 3)|
|recordsTotal|integer|false|none|Total number of available queries|
|recordsFiltered|integer|false|none|Number of available queries after filtering|
|draw|integer|false|none|DataTables-specific integer (echos input value)|
|earliest_timestamp|number|false|none|Earliest timestamp of queries in in-memory database (Unix time)|
|earliest_timestamp_disk|number|false|none|Earliest timestamp of queries in on-disk database (Unix time)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get query filter suggestions

<a id="opIdget_suggestions"></a>

> Code samples

```bash
curl "http://pi.hole/api/queries/suggestions?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /queries/suggestions`

This endpoint provides suggestions for filters suitable to be used with /queries


> Example responses

> 200 Response

```json
{
  "suggestions": {
    "domain": [
      "pi-hole.net",
      "amazon.com"
    ],
    "client_ip": [
      "string"
    ],
    "client_name": [
      "string"
    ],
    "upstream": [
      "string"
    ],
    "type": [
      "string"
    ],
    "status": [
      "string"
    ],
    "reply": [
      "string"
    ],
    "dnssec": [
      "string"
    ]
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-query-filter-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-query-filter-suggestions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|suggestions|object|false|none|none|
|» domain|[string]|false|none|Array of suggested domains|
|» client_ip|[string]|false|none|Array of suggested client IP addresses|
|» client_name|[string]|false|none|Array of suggested client names|
|» upstream|[string]|false|none|Array of suggested upstreams|
|» type|[string]|false|none|Array of suggested query types|
|» status|[string]|false|none|Array of suggested query statuses|
|» reply|[string]|false|none|Array of suggested query replies|
|» dnssec|[string]|false|none|Array of suggested DNSSEC statuses|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-dns-control">DNS control</h1>

Methods used to control the behavior of your Pi-hole

## Get current blocking status

<a id="opIdget_blocking"></a>

> Code samples

```bash
curl "http://pi.hole/api/dns/blocking?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /dns/blocking`

The property `timer` may contain additional details concerning a temporary en-/disabling.
It is `null` when no timer is active (the current status is permanent).


> Example responses

> 200 Response

```json
{
  "blocking": "enabled",
  "timer": 15,
  "took": 0.003
}
```

<h3 id="get-current-blocking-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-current-blocking-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocking|string|false|none|Blocking status|
|timer|number \| null|false|none|Remaining seconds until blocking mode is automatically changed|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|blocking|enabled|
|blocking|disabled|
|blocking|failed|
|blocking|unknown|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Change current blocking status

<a id="opIdset_blocking"></a>

> Code samples

```bash
curl "http://pi.hole/api/dns/blocking?sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "blocking": true,
    "timer": 15
  }'
```

`POST /dns/blocking`

Change the current blocking mode by setting `blocking` to the desired value.
The optional `timer` object may used to set a timer. Once this timer elapsed, the opposite blocking mode is automatically set.
For instance, you can request `{blocking: false, timer: 60}` to disable Pi-hole for one minute.
Blocking will be automatically resumed afterwards.

You can terminate a possibly running timer by setting `timer` to `null` (the set mode becomes permanent).


> Body parameter

```json
{
  "blocking": true,
  "timer": 15
}
```

<h3 id="change-current-blocking-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Callback payload|
|» blocking|body|boolean|false|Blocking status|
|» timer|body|number \| null|false|Remaining seconds until blocking mode is automatically changed|

> Example responses

> 200 Response

```json
{
  "blocking": "enabled",
  "timer": 15,
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid request body data (no valid JSON)",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="change-current-blocking-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="change-current-blocking-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blocking|string|false|none|Blocking status|
|timer|number \| null|false|none|Remaining seconds until blocking mode is automatically changed|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|blocking|enabled|
|blocking|disabled|
|blocking|failed|
|blocking|unknown|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|No JSON payload found|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Additional data (if available)|
|*oneOf*|object|false|none|Item to be modified is missing|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Additional data (if available)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-group-management">Group management</h1>

Methods used to manage groups on your Pi-hole

## Get groups

<a id="opIdget_groups"></a>

> Code samples

```bash
curl "http://pi.hole/api/groups/test_group?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /groups/{name}`

`{name}` is optional. Specifying it will result in only the requested group being returned.

Valid combinations are:
- `/api/groups` (all groups)
- `/api/groups/my_group` (group identical to `my_group`)


<h3 id="get-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Group name|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "name": "Default",
      "comment": "The default group",
      "enabled": true,
      "id": 0,
      "date_added": 1594670974,
      "date_modified": 1611157897
    },
    {
      "name": "a",
      "comment": null,
      "enabled": true,
      "id": 5,
      "date_added": 1604871899,
      "date_modified": 1604871899
    }
  ],
  "took": 0.003,
  "processed": null
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[object]|false|none|none|
|» name|string|false|none|Group name|
|» comment|string \| null|false|none|User-provided free-text comment for this group|
|» enabled|boolean|false|none|Status of item|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Replace group

<a id="opIdreplace_group"></a>

> Code samples

```bash
curl "http://pi.hole/api/groups/test_group?sid=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "test_group",
    "comment": "Some comment for this group",
    "enabled": true
  }'
```

`PUT /groups/{name}`

Items may be updated by replacing them. `{name}` is required.

Ensure to send all the required parameters (such as `comment`) to ensure these properties are retained.
By specifying a different `name`, the group with the former name as specified in the URI will be renamed.
The read-only fields `id` and `date_added` are preserved, `date_modified` is automatically updated on success.


> Body parameter

```json
{
  "name": "test_group",
  "comment": "Some comment for this group",
  "enabled": true
}
```

<h3 id="replace-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Group name|
|body|body|object|false|Callback payload|
|» name|body|string|false|Group name|
|» comment|body|string \| null|false|User-provided free-text comment for this group|
|» enabled|body|boolean|false|Status of item|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "name": "test_group",
      "comment": "Some comment for this group",
      "enabled": true,
      "id": 1,
      "date_added": 1611239095,
      "date_modified": 1611239099
    }
  ],
  "processed": {
    "success": [
      {
        "item": "Home-Automation"
      },
      {
        "item": "Children"
      }
    ],
    "errors": [
      {
        "item": "Garden",
        "error": "The item is already present"
      }
    ]
  },
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify item in URI",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="replace-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created or Updated Item|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="replace-group-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[object]|false|none|none|
|» name|string|false|none|Group name|
|» comment|string \| null|false|none|User-provided free-text comment for this group|
|» enabled|boolean|false|none|Status of item|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|processed|object \| null|false|none|Object containing the number of groups that were successfully<br>added to the database and the number of groups that could not be<br>added to the database.<br>|
|» success|[object]|false|none|Array of groups that were successfully added to the database.<br>|
|» » item|string|false|none|Group that was added to the database|
|» errors|[object]|false|none|Array of errors that occurred during processing.<br>|
|» » item|string|false|none|Group that could not be added to the database|
|» » error|string|false|none|Error message|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|Location|string||Location of created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete group

<a id="opIddelete_group"></a>

> Code samples

```bash
curl "http://pi.hole/api/groups/test_group?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /groups/{name}`

*Note:* There will be no content on success.


<h3 id="delete-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Group name|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify item in URI",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Item deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-group-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## List all groups

<a id="opIdlist_groups"></a>

> Code samples

```bash
curl "http://pi.hole/api/groups?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /groups`

Returns the full list of groups configured on your Pi-hole.

This is the collection form of `GET /api/groups/{name}` (see `get_groups`)
and returns the same array schema without requiring a `{name}` path parameter.


> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "name": "Default",
      "comment": "The default group",
      "enabled": true,
      "id": 0,
      "date_added": 1594670974,
      "date_modified": 1611157897
    },
    {
      "name": "a",
      "comment": null,
      "enabled": true,
      "id": 5,
      "date_added": 1604871899,
      "date_modified": 1604871899
    }
  ],
  "took": 0.003,
  "processed": null
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="list-all-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-all-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[object]|false|none|none|
|» name|string|false|none|Group name|
|» comment|string \| null|false|none|User-provided free-text comment for this group|
|» enabled|boolean|false|none|Status of item|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Add new group

<a id="opIdadd_group"></a>

> Code samples

```bash
curl "http://pi.hole/api/groups?sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "name": "test_group",
    "comment": "Some comment for this group",
    "enabled": true
  }'
```

`POST /groups`

Creates a new group in the `groups` object. The `{group}` itself is specified in the request body (POST JSON).

On success, a new resource is created at `/groups/{name}`.

The `database_error` with message `The item is already present` error indicates that a group with the same name already exists.


> Body parameter

```json
{
  "name": "test_group",
  "comment": "Some comment for this group",
  "enabled": true
}
```

<h3 id="add-new-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Callback payload|
|» name|body|string \| [string]|false|none|
|» » *oneOf*|body|string|false|Group name|
|» » *oneOf*|body|[string]|false|array of group names|
|» comment|body|string \| null|false|User-provided free-text comment for this group|
|» enabled|body|boolean|false|Status of item|

> Example responses

> 201 Response

```json
{
  "groups": [
    {
      "name": "test_group",
      "comment": "Some comment for this group",
      "enabled": true,
      "id": 1,
      "date_added": 1611239095,
      "date_modified": 1611239099
    }
  ],
  "processed": {
    "success": [
      {
        "item": "Home-Automation"
      },
      {
        "item": "Children"
      }
    ],
    "errors": [
      {
        "item": "Garden",
        "error": "The item is already present"
      }
    ]
  },
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid request body data (no valid JSON)",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="add-new-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created item|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-new-group-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[object]|false|none|none|
|» name|string|false|none|Group name|
|» comment|string \| null|false|none|User-provided free-text comment for this group|
|» enabled|boolean|false|none|Status of item|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|processed|object \| null|false|none|Object containing the number of groups that were successfully<br>added to the database and the number of groups that could not be<br>added to the database.<br>|
|» success|[object]|false|none|Array of groups that were successfully added to the database.<br>|
|» » item|string|false|none|Group that was added to the database|
|» errors|[object]|false|none|Array of errors that occurred during processing.<br>|
|» » item|string|false|none|Group that could not be added to the database|
|» » error|string|false|none|Error message|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Location of created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete multiple groups

<a id="opIdbatchDelete_groups"></a>

> Code samples

```bash
curl "http://pi.hole/api/groups:batchDelete?sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": "test1"
    },
    {
      "item": "test2"
    }
  ]'
```

`POST /groups:batchDelete`

Deletes multiple groups in the `groups` object. The `{groups}` themselves are specified in the request body (POST JSON).


> Body parameter

```json
[
  {
    "item": "test1"
  },
  {
    "item": "test2"
  }
]
```

<h3 id="delete-multiple-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|true|Callback payload|
|» item|body|string|true|group name|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid request body data (no valid JSON)",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-multiple-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Items deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-multiple-groups-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-domain-management">Domain management</h1>

Methods used to manage domains on your Pi-hole

## Replace domain

<a id="opIdreplace_domain"></a>

> Code samples

```bash
curl "http://pi.hole/api/domains/allow/exact/testdomain.com?sid=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "type": "allow",
    "kind": "exact",
    "comment": "Some comment describing this domain",
    "groups": [
      0
    ],
    "enabled": true,
    "took": 0.003
  }'
```

`PUT /domains/{type}/{kind}/{domain}`

Items may be updated by replacing them. `{type}`, `{kind}`, and `{domain}` are required.

Ensure to send all the required parameters (such as `comment`) to ensure these properties are retained.
The read-only fields `id` and `date_added` are preserved, `date_modified` is automatically updated on success.

You can move existing domains to another list type/kind by `PUT`ting the domain to the new destination by specifying the optional fields `type` and `kind`.
Example:
Use `PUT allow/exact/abc.com` with `type="deny", kind="exact"` to change `abc.com` from exact denied to exact allowed. Make sure to always specify *both* values.

When adding/replacing a regular expression, ensure that `{domain}` is properly URI-escaped.


> Body parameter

```json
{
  "type": "allow",
  "kind": "exact",
  "comment": "Some comment describing this domain",
  "groups": [
    0
  ],
  "enabled": true,
  "took": 0.003
}
```

<h3 id="replace-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type (allowed or denied domain)|
|kind|path|string|true|Kind (exact domain or regular expression)|
|domain|path|string|true|Domain|
|body|body|object|false|Callback payload|
|» type|body|string|false|String specifying domain type|
|» kind|body|string|false|String specifying domain kind|
|» comment|body|string \| null|false|User-provided free-text comment for this domain|
|» groups|body|[integer]|false|Array of group IDs|
|» enabled|body|boolean|false|Status of domain|
|» took|body|number|false|Time in seconds it took to process the request|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|deny|
|kind|exact|
|kind|regex|
|» type|allow|
|» type|deny|
|» kind|exact|
|» kind|regex|

> Example responses

> 200 Response

```json
{
  "domains": [
    {
      "domain": "allowed.com",
      "unicode": "allowed.com",
      "type": "allow",
      "kind": "exact",
      "comment": null,
      "groups": [
        0
      ],
      "enabled": true,
      "id": 299,
      "date_added": 1611239095,
      "date_modified": 1612163756
    },
    {
      "domain": "xn--4ca.com",
      "unicode": "ä.com",
      "type": "allow",
      "kind": "regex",
      "comment": "Some text",
      "groups": [
        0
      ],
      "enabled": true,
      "id": 305,
      "date_added": 1611240635,
      "date_modified": 1611241276
    }
  ],
  "took": 0.012,
  "processed": null
}
```

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify list to modify more precisely",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="replace-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created or Updated domain|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="replace-domain-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[object]|false|none|Array of domains|
|» domain|string|false|none|Domain|
|» unicode|string|false|none|Unicode domain (may be different from `domain` if punycode-encoding is used)|
|» type|string|false|none|String specifying domain type|
|» kind|string|false|none|String specifying domain kind|
|» comment|string \| null|false|none|User-provided free-text comment for this domain|
|» groups|[integer]|false|none|Array of group IDs|
|» enabled|boolean|false|none|Status of domain|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of domain addition|
|» date_modified|integer|false|read-only|Unix timestamp of last domain modification|
|processed|object \| null|false|none|Object containing the number of domains that were successfully<br>added to the database and the number of domains that could not be<br>added to the database.<br>|
|» success|[object]|false|none|Array of domains that were successfully added to the database.<br>|
|» » item|string|false|none|Domain that was added to the database|
|» errors|[object]|false|none|Array of errors that occurred during processing.<br>|
|» » item|string|false|none|Domain that could not be added to the database|
|» » error|string|false|none|Error message|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|allow|
|» type|deny|
|» kind|exact|
|» kind|regex|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete domain

<a id="opIddelete_domain"></a>

> Code samples

```bash
curl "http://pi.hole/api/domains/allow/exact/testdomain.com?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /domains/{type}/{kind}/{domain}`

*Note:* There will be no content on success.


<h3 id="delete-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type (allowed or denied domain)|
|kind|path|string|true|Kind (exact domain or regular expression)|
|domain|path|string|true|Domain|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|deny|
|kind|exact|
|kind|regex|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify list to modify more precisely",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Item deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-domain-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Add new domain

<a id="opIdadd_domain"></a>

> Code samples

```bash
curl "http://pi.hole/api/domains/allow/exact?sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "domain": "testdomain.com",
    "comment": "Some comment describing this domain",
    "groups": [
      0
    ],
    "enabled": true
  }'
```

`POST /domains/{type}/{kind}`

Creates a new domain in the `domains` object. This may be either an exact domain or a regex, depending on `{kind}`.
Both `{type}` and `{kind}` are mandatory for this endpoint.
The `{domain}` itself is specified in the request body (POST JSON).

On success, a new resource is created at `/domains/{type}/{kind}/{domain}`.

The `database_error` with message `The item is already present` error indicates that the same entry (`domain`, `type`, `kind`) already exists.

When adding a regular expression, ensure the request body is properly JSON-escaped.


> Body parameter

```json
{
  "domain": "testdomain.com",
  "comment": "Some comment describing this domain",
  "groups": [
    0
  ],
  "enabled": true
}
```

<h3 id="add-new-domain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type (allowed or denied domain)|
|kind|path|string|true|Kind (exact domain or regular expression)|
|body|body|object|false|Callback payload|
|» domain|body|string \| [string]|false|none|
|» » *oneOf*|body|string|false|Domain|
|» » *oneOf*|body|[string]|false|array of domains|
|» comment|body|string \| null|false|User-provided free-text comment for this domain|
|» groups|body|[integer]|false|Array of group IDs|
|» enabled|body|boolean|false|Status of domain|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|deny|
|kind|exact|
|kind|regex|

> Example responses

> 201 Response

```json
{
  "domains": [
    {
      "domain": "testdomain.com",
      "unicode": "äbc.com",
      "type": "allow",
      "kind": "exact",
      "comment": "Some comment describing this domain",
      "groups": [
        0
      ],
      "enabled": true,
      "id": 0,
      "date_added": 0,
      "date_modified": 0
    }
  ],
  "processed": {
    "success": [
      {
        "item": "example.com"
      },
      {
        "item": "example3.com"
      }
    ],
    "errors": [
      {
        "item": "example2.com",
        "error": "The item is already present"
      }
    ]
  },
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify list to modify more precisely",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="add-new-domain-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created domain|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-new-domain-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domains|[object]|false|none|Array of domains|
|» domain|string|false|none|Domain|
|» unicode|string|false|none|Unicode domain (may be different from `domain` if punycode-encoding is used)|
|» type|string|false|none|String specifying domain type|
|» kind|string|false|none|String specifying domain kind|
|» comment|string \| null|false|none|User-provided free-text comment for this domain|
|» groups|[integer]|false|none|Array of group IDs|
|» enabled|boolean|false|none|Status of domain|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of domain addition|
|» date_modified|integer|false|read-only|Unix timestamp of last domain modification|
|processed|object \| null|false|none|Object containing the number of domains that were successfully<br>added to the database and the number of domains that could not be<br>added to the database.<br>|
|» success|[object]|false|none|Array of domains that were successfully added to the database.<br>|
|» » item|string|false|none|Domain that was added to the database|
|» errors|[object]|false|none|Array of errors that occurred during processing.<br>|
|» » item|string|false|none|Domain that could not be added to the database|
|» » error|string|false|none|Error message|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|allow|
|» type|deny|
|» kind|exact|
|» kind|regex|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Location of created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete multiple domains

<a id="opIdbatchDelete_domains"></a>

> Code samples

```bash
curl "http://pi.hole/api/domains:batchDelete?sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": "example.com",
      "type": "allow",
      "kind": "exact"
    }
  ]'
```

`POST /domains:batchDelete`

*Note:* There will be no content on success.


> Body parameter

```json
[
  {
    "item": "example.com",
    "type": "allow",
    "kind": "exact"
  }
]
```

<h3 id="delete-multiple-domains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|true|Callback payload|
|» item|body|string|true|Domain to delete|
|» type|body|string|true|Type of domain to delete|
|» kind|body|string|true|Kind of domain to delete|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|allow|
|» type|deny|
|» kind|exact|
|» kind|regex|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid request body data (no valid JSON)",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-multiple-domains-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Items deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-multiple-domains-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-client-management">Client management</h1>

Methods used to manage clients on your Pi-hole

## Get clients

<a id="opIdget_clients"></a>

> Code samples

```bash
curl "http://pi.hole/api/clients/127.0.0.1?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /clients/{client}`

`{client}` is optional. If it is specified, it will result in only the requested client being returned. This parameter needs to be URI-encoded.

Valid combinations are:
- `/api/clients` (all clients)
- `/api/clients/my_client` (client identical to `my_client`)


<h3 id="get-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client|path|string|true|client IP / MAC / hostname / interface|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "client": "127.0.0.1",
      "name": "localhost",
      "comment": "comment",
      "id": 1,
      "date_added": 1604871899,
      "date_modified": 1604871899
    },
    {
      "client": "::1",
      "name": "ip6-localhost",
      "comment": null,
      "id": 2,
      "date_added": 1611322675,
      "date_modified": 1611325497
    }
  ],
  "took": 0.012,
  "processed": {
    "success": [
      {
        "item": "127.0.0.1"
      }
    ],
    "failed": [
      {
        "item": "127.0.0.2",
        "error": "The item is already present"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[object]|false|none|Array of clients|
|» client|string|false|none|client IP / MAC / hostname / interface|
|» comment|string \| null|false|none|User-provided free-text comment for this client|
|» groups|[integer]|false|none|Array of group IDs|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|» name|string \| null|false|read-only|hostname (only if available)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Replace client

<a id="opIdreplace_client"></a>

> Code samples

```bash
curl "http://pi.hole/api/clients/127.0.0.1?sid=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comment": "Some comment for this client",
    "groups": [
      0
    ],
    "took": 0.003
  }'
```

`PUT /clients/{client}`

Items may be updated by replacing them. `{client}` is required and needs to be URI-encoded.

Ensure to send all the required parameters (such as `comment` or `groups`) to ensure these properties are retained.
The read-only fields `id` and `date_added` are preserved, `date_modified` is automatically updated on success.


> Body parameter

```json
{
  "comment": "Some comment for this client",
  "groups": [
    0
  ],
  "took": 0.003
}
```

<h3 id="replace-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client|path|string|true|client IP / MAC / hostname / interface|
|body|body|object|false|Callback payload|
|» comment|body|string \| null|false|User-provided free-text comment for this client|
|» groups|body|[integer]|false|Array of group IDs|
|» took|body|number|false|Time in seconds it took to process the request|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "client": "127.0.0.1",
      "comment": "Some comment for this client",
      "groups": [
        0
      ],
      "id": 1,
      "date_added": 1611239095,
      "date_modified": 1611239099,
      "name": "localhost"
    }
  ],
  "processed": {
    "success": [
      {
        "item": "127.0.0.1"
      },
      {
        "item": "::1"
      }
    ],
    "errors": [
      {
        "item": "192.168.2.5",
        "error": "The item is already present"
      }
    ]
  },
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify item in URI",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="replace-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created or Updated Item|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="replace-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[object]|false|none|Array of clients|
|» client|string|false|none|client IP / MAC / hostname / interface|
|» comment|string \| null|false|none|User-provided free-text comment for this client|
|» groups|[integer]|false|none|Array of group IDs|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|» name|string \| null|false|read-only|hostname (only if available)|
|processed|object \| null|false|none|Object containing the number of clients that were successfully<br>added to the database and the number of clients that could not be<br>added to the database.<br>|
|» success|[object]|false|none|Array of clients that were successfully added to the database.<br>|
|» » item|string|false|none|Client that was added to the database|
|» errors|[object]|false|none|Array of errors that occurred during processing.<br>|
|» » item|string|false|none|Client that could not be added to the database|
|» » error|string|false|none|Error message|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete client

<a id="opIddelete_client"></a>

> Code samples

```bash
curl "http://pi.hole/api/clients/127.0.0.1?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /clients/{client}`

*Note:* There will be no content on success. `{client}` is required and needs to be URI-encoded.


<h3 id="delete-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client|path|string|true|client IP / MAC / hostname / interface|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify item in URI",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Item deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-client-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## List all clients

<a id="opIdlist_clients"></a>

> Code samples

```bash
curl "http://pi.hole/api/clients?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /clients`

Returns the full list of clients configured on your Pi-hole.

This is the collection form of `GET /api/clients/{client}` (see `get_clients`)
and returns the same array schema without requiring a `{client}` path parameter.


> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "client": "127.0.0.1",
      "name": "localhost",
      "comment": "comment",
      "id": 1,
      "date_added": 1604871899,
      "date_modified": 1604871899
    },
    {
      "client": "::1",
      "name": "ip6-localhost",
      "comment": null,
      "id": 2,
      "date_added": 1611322675,
      "date_modified": 1611325497
    }
  ],
  "took": 0.012,
  "processed": {
    "success": [
      {
        "item": "127.0.0.1"
      }
    ],
    "failed": [
      {
        "item": "127.0.0.2",
        "error": "The item is already present"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="list-all-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-all-clients-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[object]|false|none|Array of clients|
|» client|string|false|none|client IP / MAC / hostname / interface|
|» comment|string \| null|false|none|User-provided free-text comment for this client|
|» groups|[integer]|false|none|Array of group IDs|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|» name|string \| null|false|read-only|hostname (only if available)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Add new client

<a id="opIdadd_client"></a>

> Code samples

```bash
curl "http://pi.hole/api/clients?sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client": "127.0.0.1",
    "comment": "Some comment for this client",
    "groups": [
      0
    ],
    "took": 0.003
  }'
```

`POST /clients`

Creates a new client in the `clients` object. The `{client}` itself is specified in the request body (POST JSON).

Clients may be described either by their IP addresses (IPv4 and IPv6 are supported),
IP subnets (CIDR notation, like `192.168.2.0/24`), their MAC addresses (like `12:34:56:78:9A:BC`), by their hostnames (like `localhost`), or by the interface they are connected to (prefaced with a colon, like `:eth0`).

Note that client recognition by IP addresses (incl. subnet ranges) is preferred over MAC address, host name or interface recognition as the two latter will only be available after some time.
Furthermore, MAC address recognition only works for devices at most one networking hop away from your Pi-hole.

On success, a new resource is created at `/clients/{client}`.

The `database_error` with message `The item is already present` error indicates that this client already exists.


> Body parameter

```json
{
  "client": "127.0.0.1",
  "comment": "Some comment for this client",
  "groups": [
    0
  ],
  "took": 0.003
}
```

<h3 id="add-new-client-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|Callback payload|
|» client|body|string \| [string]|false|none|
|» » *oneOf*|body|string|false|client IP / MAC / hostname / interface|
|» » *oneOf*|body|[string]|false|array of client IPs / MACs / hostnames / interfaces|
|» comment|body|string \| null|false|User-provided free-text comment for this client|
|» groups|body|[integer]|false|Array of group IDs|
|» took|body|number|false|Time in seconds it took to process the request|

> Example responses

> 201 Response

```json
{
  "clients": [
    {
      "client": "127.0.0.1",
      "comment": "Some comment for this client",
      "groups": [
        0
      ],
      "id": 1,
      "date_added": 1611239095,
      "date_modified": 1611239099,
      "name": "localhost"
    }
  ],
  "processed": {
    "success": [
      {
        "item": "127.0.0.1"
      },
      {
        "item": "::1"
      }
    ],
    "errors": [
      {
        "item": "192.168.2.5",
        "error": "The item is already present"
      }
    ]
  },
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid request body data (no valid JSON)",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "took": 0.003,
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  }
}
```

<h3 id="add-new-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created item|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-new-client-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[object]|false|none|Array of clients|
|» client|string|false|none|client IP / MAC / hostname / interface|
|» comment|string \| null|false|none|User-provided free-text comment for this client|
|» groups|[integer]|false|none|Array of group IDs|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|» name|string \| null|false|read-only|hostname (only if available)|
|processed|object \| null|false|none|Object containing the number of clients that were successfully<br>added to the database and the number of clients that could not be<br>added to the database.<br>|
|» success|[object]|false|none|Array of clients that were successfully added to the database.<br>|
|» » item|string|false|none|Client that was added to the database|
|» errors|[object]|false|none|Array of errors that occurred during processing.<br>|
|» » item|string|false|none|Client that could not be added to the database|
|» » error|string|false|none|Error message|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Location of created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete multiple clients

<a id="opIdbatchDelete_clients"></a>

> Code samples

```bash
curl "http://pi.hole/api/clients:batchDelete?sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": "192.168.2.5"
    },
    {
      "item": "::1"
    },
    {
      "item": "12:34:56:78:9A:BC"
    },
    {
      "item": "localhost"
    },
    {
      "item": ":eth0"
    }
  ]'
```

`POST /clients:batchDelete`

Deletes multiple clients in the `clients` object. The `{client}`s themselves are specified in the request body (POST JSON).

Clients may be described either by their IP addresses (IPv4 and IPv6 are supported),
IP subnets (CIDR notation, like `192.168.2.0/24`), their MAC addresses (like `12:34:56:78:9A:BC`), by their hostnames (like `localhost`), or by the interface they are connected to (prefaced with a colon, like `:eth0`).</p>

*Note:* There will be no content on success.


> Body parameter

```json
[
  {
    "item": "192.168.2.5"
  },
  {
    "item": "::1"
  },
  {
    "item": "12:34:56:78:9A:BC"
  },
  {
    "item": "localhost"
  },
  {
    "item": ":eth0"
  }
]
```

<h3 id="delete-multiple-clients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|true|Callback payload|
|» item|body|string|true|client IP / MAC / hostname / interface|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid request body data (no valid JSON)",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-multiple-clients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Items deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-multiple-clients-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get client suggestions

<a id="opIdget_client_suggestions"></a>

> Code samples

```bash
curl "http://pi.hole/api/clients/_suggestions?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /clients/_suggestions`

Returns a list of unconfigured clients that have been seen by Pi-hole. By default, this list is limited to 50 clients. Clients are ordered by when your Pi-hole has received the last query from this client (most recent first)


<h3 id="get-client-suggestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|count|query|integer|false|(Optional) Maximum number of clients to show|

> Example responses

> 200 Response

```json
{
  "clients": [
    {
      "hwaddr": "12:34:56:78:9A:BC",
      "macVendor": "Espressif Inc.",
      "lastQuery": 1683305917,
      "addresses": "127.0.0.1,::1",
      "names": "localhost,ip6-localhost"
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-client-suggestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-client-suggestions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clients|[object]|false|none|none|
|» hwaddr|string \| null|false|none|none|
|» macVendor|string \| null|false|none|none|
|» lastQuery|integer|false|none|none|
|» addresses|string \| null|false|none|Comma-separated list of IP addresses|
|» names|string \| null|false|none|Comma-separated list of hostnames (if available)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-list-management">List management</h1>

Methods used to manage lists on your Pi-hole

## Get lists

<a id="opIdget_lists"></a>

> Code samples

```bash
curl "http://pi.hole/api/lists/https%3A%2F%2Fhosts-file.net%2Fad_servers.txt?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lists/{list}`

`{list}` is optional. Specifying it will result in only the requested list being returned.

Valid combinations are:
- `/api/lists` (all lists)
- `/api/lists/my_list` (list identical to `my_list`)


<h3 id="get-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list|path|string|true|Address of the list|
|type|query|string|false|Type of list, optional|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|block|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "address": "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
      "comment": "Migrated from /etc/pihole/adlists.list",
      "groups": [
        0
      ],
      "enabled": true,
      "id": 1,
      "date_added": 1594670974,
      "date_modified": 1595279300
    },
    {
      "address": "https://mirror1.malwaredomains.com/files/justdomains",
      "comment": "Migrated from /etc/pihole/adlists.list",
      "groups": [
        0
      ],
      "enabled": true,
      "id": 2,
      "date_added": 1594670974,
      "date_modified": 1594670974
    }
  ],
  "took": 0.012,
  "processed": null
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[object]|false|none|Array of lists|
|» address|string|false|none|Address of the list|
|» type|string|false|none|Type of list|
|» comment|string \| null|false|none|User-provided free-text comment for this list|
|» groups|[integer]|false|none|Array of group IDs|
|» enabled|boolean|false|none|Status of domain|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|» date_updated|integer|false|read-only|Unix timestamp of last update of list content|
|» number|integer|false|read-only|Number of VALID domains on this list|
|» invalid_domains|integer|false|read-only|Number of INVALID domains on this list|
|» abp_entries|integer|false|read-only|Number of ABP entries on this list|
|» status|integer|false|read-only|List status|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|allow|
|» type|block|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Replace list

<a id="opIdreplace_lists"></a>

> Code samples

```bash
curl "http://pi.hole/api/lists/https%3A%2F%2Fhosts-file.net%2Fad_servers.txt?type=block&sid=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "comment": "Some comment for this list",
    "type": "block",
    "groups": [
      0
    ],
    "enabled": true
  }'
```

`PUT /lists/{list}`

Items may be updated by replacing them. `{list}` and `{listtype}` are required.

Ensure to send all the required parameters (such as `comment`) to ensure these properties are retained.
The read-only fields `id` and `date_added` are preserved, `date_modified` is automatically updated on success.


> Body parameter

```json
{
  "comment": "Some comment for this list",
  "type": "block",
  "groups": [
    0
  ],
  "enabled": true
}
```

<h3 id="replace-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list|path|string|true|Address of the list|
|type|query|string|true|Type of list|
|body|body|object|false|Callback payload|
|» comment|body|string \| null|false|User-provided free-text comment for this list|
|» type|body|string|false|Type of list|
|» groups|body|[integer]|false|Array of group IDs|
|» enabled|body|boolean|false|Status of domain|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|block|
|» type|allow|
|» type|block|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "address": "https://hosts-file.net/ad_servers.txt",
      "type": "block",
      "comment": "Some comment for this list",
      "groups": [
        0
      ],
      "enabled": true,
      "id": 1,
      "date_added": 1611239095,
      "date_modified": 1611239099,
      "date_updated": 1608435667,
      "number": 20566,
      "invalid_domains": 0,
      "abp_entries": 0,
      "status": 2
    }
  ],
  "processed": {
    "success": [
      {
        "item": "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts"
      },
      {
        "item": "https://mirror1.malwaredomains.com/files/justdomains"
      }
    ],
    "errors": [
      {
        "item": "https://raw.githubusercontent.com/abc/def/master/hosts",
        "error": "The item is already present"
      }
    ]
  },
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify item in URI",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="replace-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created or Updated Item|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="replace-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[object]|false|none|Array of lists|
|» address|string|false|none|Address of the list|
|» type|string|false|none|Type of list|
|» comment|string \| null|false|none|User-provided free-text comment for this list|
|» groups|[integer]|false|none|Array of group IDs|
|» enabled|boolean|false|none|Status of domain|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|» date_updated|integer|false|read-only|Unix timestamp of last update of list content|
|» number|integer|false|read-only|Number of VALID domains on this list|
|» invalid_domains|integer|false|read-only|Number of INVALID domains on this list|
|» abp_entries|integer|false|read-only|Number of ABP entries on this list|
|» status|integer|false|read-only|List status|
|processed|object \| null|false|none|Object containing the number of lists that were successfully<br>added to the database and the number of lists that could not be<br>added to the database.<br>|
|» success|[object]|false|none|Array of lists that were successfully added to the database.<br>|
|» » item|string|false|none|List that was added to the database|
|» errors|[object]|false|none|Array of errors that occurred during processing.<br>|
|» » item|string|false|none|List that could not be added to the database|
|» » error|string|false|none|Error message|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|allow|
|» type|block|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete list

<a id="opIddelete_lists"></a>

> Code samples

```bash
curl "http://pi.hole/api/lists/https%3A%2F%2Fhosts-file.net%2Fad_servers.txt?type=block&sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /lists/{list}`

`{list}` and `{listtype}` are required.
*Note:* There will be no content on success.


<h3 id="delete-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|list|path|string|true|Address of the list|
|type|query|string|true|Type of list|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|block|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Invalid request: Specify item in URI",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Item deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-list-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## List all lists

<a id="opIdlist_lists"></a>

> Code samples

```bash
curl "http://pi.hole/api/lists?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /lists`

Returns the full list of subscribed lists configured on your Pi-hole.

This is the collection form of `GET /api/lists/{list}` (see `get_lists`)
and returns the same array schema without requiring a `{list}` path parameter.


<h3 id="list-all-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Type of list, optional|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|block|

> Example responses

> 200 Response

```json
{
  "lists": [
    {
      "address": "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
      "comment": "Migrated from /etc/pihole/adlists.list",
      "groups": [
        0
      ],
      "enabled": true,
      "id": 1,
      "date_added": 1594670974,
      "date_modified": 1595279300
    },
    {
      "address": "https://mirror1.malwaredomains.com/files/justdomains",
      "comment": "Migrated from /etc/pihole/adlists.list",
      "groups": [
        0
      ],
      "enabled": true,
      "id": 2,
      "date_added": 1594670974,
      "date_modified": 1594670974
    }
  ],
  "took": 0.012,
  "processed": null
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="list-all-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="list-all-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[object]|false|none|Array of lists|
|» address|string|false|none|Address of the list|
|» type|string|false|none|Type of list|
|» comment|string \| null|false|none|User-provided free-text comment for this list|
|» groups|[integer]|false|none|Array of group IDs|
|» enabled|boolean|false|none|Status of domain|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|» date_updated|integer|false|read-only|Unix timestamp of last update of list content|
|» number|integer|false|read-only|Number of VALID domains on this list|
|» invalid_domains|integer|false|read-only|Number of INVALID domains on this list|
|» abp_entries|integer|false|read-only|Number of ABP entries on this list|
|» status|integer|false|read-only|List status|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|allow|
|» type|block|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Add new list

<a id="opIdadd_list"></a>

> Code samples

```bash
curl "http://pi.hole/api/lists?type=block&sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "address": "https://hosts-file.net/ad_servers.txt",
    "comment": "Some comment for this list",
    "groups": [
      0
    ],
    "enabled": true
  }'
```

`POST /lists`

Creates a new list in the `lists` object. The `{list}` itself is specified in the request body (POST JSON).

lists may be described either by their IP addresses (IPv4 and IPv6 are supported),
IP subnets (CIDR notation, like `192.168.2.0/24`), their MAC addresses (like `12:34:56:78:9A:BC`), by their hostnames (like `localhost`), or by the interface they are connected to (prefaced with a colon, like `:eth0`).</p>

Note that list recognition by IP addresses (incl. subnet ranges) is preferred over MAC address, host name or interface recognition as the two latter will only be available after some time.
Furthermore, MAC address recognition only works for devices at most one networking hop away from your Pi-hole.

On success, a new resource is created at `/lists/{list}`.

The `database_error` with message `The item is already present` error indicates that this list already exists.


> Body parameter

```json
{
  "address": "https://hosts-file.net/ad_servers.txt",
  "comment": "Some comment for this list",
  "groups": [
    0
  ],
  "enabled": true
}
```

<h3 id="add-new-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Type of list|
|body|body|object|false|Callback payload|
|» address|body|string \| [string]|false|none|
|» » *oneOf*|body|string|false|Address of the list|
|» » *oneOf*|body|[string]|false|array of list addresses|
|» comment|body|string \| null|false|User-provided free-text comment for this list|
|» groups|body|[integer]|false|Array of group IDs|
|» enabled|body|boolean|false|Status of domain|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|block|

> Example responses

> 201 Response

```json
{
  "lists": [
    {
      "address": "https://hosts-file.net/ad_servers.txt",
      "type": "block",
      "comment": "Some comment for this list",
      "groups": [
        0
      ],
      "enabled": true,
      "id": 1,
      "date_added": 1611239095,
      "date_modified": 1611239099,
      "date_updated": 1608435667,
      "number": 20566,
      "invalid_domains": 0,
      "abp_entries": 0,
      "status": 2
    }
  ],
  "processed": {
    "success": [
      {
        "item": "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts"
      },
      {
        "item": "https://mirror1.malwaredomains.com/files/justdomains"
      }
    ],
    "errors": [
      {
        "item": "https://raw.githubusercontent.com/abc/def/master/hosts",
        "error": "The item is already present"
      }
    ]
  },
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid request body data (no valid JSON)",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="add-new-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created item|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-new-list-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lists|[object]|false|none|Array of lists|
|» address|string|false|none|Address of the list|
|» type|string|false|none|Type of list|
|» comment|string \| null|false|none|User-provided free-text comment for this list|
|» groups|[integer]|false|none|Array of group IDs|
|» enabled|boolean|false|none|Status of domain|
|» id|integer|false|read-only|Database ID|
|» date_added|integer|false|read-only|Unix timestamp of item addition|
|» date_modified|integer|false|read-only|Unix timestamp of last item modification|
|» date_updated|integer|false|read-only|Unix timestamp of last update of list content|
|» number|integer|false|read-only|Number of VALID domains on this list|
|» invalid_domains|integer|false|read-only|Number of INVALID domains on this list|
|» abp_entries|integer|false|read-only|Number of ABP entries on this list|
|» status|integer|false|read-only|List status|
|processed|object \| null|false|none|Object containing the number of lists that were successfully<br>added to the database and the number of lists that could not be<br>added to the database.<br>|
|» success|[object]|false|none|Array of lists that were successfully added to the database.<br>|
|» » item|string|false|none|List that was added to the database|
|» errors|[object]|false|none|Array of errors that occurred during processing.<br>|
|» » item|string|false|none|List that could not be added to the database|
|» » error|string|false|none|Error message|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» type|allow|
|» type|block|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|Location|string||Location of created resource|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete lists

<a id="opIdbatchDelete_lists"></a>

> Code samples

```bash
curl "http://pi.hole/api/lists:batchDelete?sid=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    {
      "item": "https://hosts-file.net/ad_servers.txt",
      "type": "block"
    },
    {
      "item": "https://hosts-file.net/ad_servers2.txt",
      "type": "block"
    }
  ]'
```

`POST /lists:batchDelete`

Deletes multiple lists in the `lists` object. The `{list}`s themselves are specified in the request body (POST JSON).


> Body parameter

```json
[
  {
    "item": "https://hosts-file.net/ad_servers.txt",
    "type": "block"
  },
  {
    "item": "https://hosts-file.net/ad_servers2.txt",
    "type": "block"
  }
]
```

<h3 id="delete-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[object]|true|Callback payload|
|» item|body|string|false|group name|
|» type|body|string|false|Type of list|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|allow|
|» type|block|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid request body data (no valid JSON)",
    "hint": null
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Items deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-lists-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Search domains in Pi-hole's lists

<a id="opIdget_search"></a>

> Code samples

```bash
curl "http://pi.hole/api/search/doubleclick.net?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /search/{domain}`

Search for domains in Pi-hole's list. The specified domain is automatically converted to lowercase.
The optional parameters `N` and `partial` limit the maximum number of returned records and whether partial matches should be returned, respectively.
There is a hard upper limit of `N` defined in FTL (currently set to 10,000) to ensure that the response is not too large.
ABP matches are not returned when partial matching is requested.
International domains names (IDNs) are internally converted to punycode before matching.


<h3 id="search-domains-in-pi-holes-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|partial|query|boolean|false|Is partial matching requested?|
|N|query|integer|false|Maximum number of results to be returned|
|debug|query|boolean|false|Add debug information to the response|
|domain|path|string|true|(Part of) domain to be searched for|

> Example responses

> 200 Response

```json
{
  "search": {
    "domains": [
      {
        "domain": "blockeddomain.com",
        "comment": "I needed to block this because of XYZ",
        "enabled": true,
        "type": "allow",
        "kind": "exact",
        "id": 7,
        "date_added": 1664624500,
        "date_modified": 1664624500,
        "groups": [
          0,
          1,
          2
        ]
      }
    ],
    "gravity": [
      {
        "domain": "doubleclick.net",
        "address": "https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts",
        "comment": "I needed to block this because of XYZ",
        "enabled": true,
        "id": 0,
        "type": "allow",
        "date_added": 1664624500,
        "date_modified": 1664624500,
        "date_updated": 1664624500,
        "number": 7,
        "invalid_domains": 0,
        "abp_entries": 0,
        "status": 1,
        "groups": [
          0,
          1,
          2
        ]
      }
    ],
    "parameters": {
      "partial": false,
      "N": 20,
      "domain": "doubleclick.net",
      "debug": false
    },
    "results": {
      "domains": {
        "exact": 1,
        "regex": 2
      },
      "gravity": {
        "allow": 0,
        "block": 1
      },
      "total": 4
    }
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="search-domains-in-pi-holes-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="search-domains-in-pi-holes-lists-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|search|object|false|none|none|
|» domains|[object]|false|none|none|
|» » domain|string|false|none|none|
|» » comment|string \| null|false|none|Optional comment|
|» » enabled|boolean|false|none|Whether this entry is enabled|
|» » type|string|false|none|String specifying domain type|
|» » kind|string|false|none|String specifying domain kind|
|» » id|integer|false|none|Database ID|
|» » date_added|integer|false|none|Unix timestamp of addition|
|» » date_modified|integer|false|none|Unix timestamp of last modification|
|» » groups|[integer]|false|none|Array of IDs corresponding to associated groups|
|» gravity|[object]|false|none|none|
|» » domain|string|false|none|none|
|» » address|string|false|none|Address of the list this domain was found on|
|» » comment|string \| null|false|none|Optional comment of the list|
|» » enabled|boolean|false|none|Whether this list is enabled|
|» » id|integer|false|none|Database ID of the associated list|
|» » type|string|false|none|String specifying list type|
|» » date_added|integer|false|none|Unix timestamp of list addition|
|» » date_modified|integer|false|none|Unix timestamp of last list modification|
|» » date_updated|integer|false|none|Unix timestamp of last local update of this list|
|» » number|integer|false|none|Number of entries in the list|
|» » invalid_domains|integer|false|none|Number of invalid domains in the list|
|» » abp_entries|integer|false|none|Number of ABP entries in the list|
|» » status|integer|false|none|Status of the list|
|» » groups|[integer]|false|none|Array of IDs corresponding to associated groups|
|» parameters|object|false|none|none|
|» » partial|boolean|false|none|Whether partial matching was requested. Note that partial matching may not find complex regex entries.|
|» » N|integer|false|none|Maximum number of results to be returned (per type)|
|» » domain|string|false|none|(Part of) domain to be searched for|
|» » debug|boolean|false|none|Whether debug information was requested|
|» results|object|false|none|none|
|» » domains|object|false|none|none|
|» » » exact|integer|false|none|Number of exactly matching domains|
|» » » regex|integer|false|none|Number of regex matching domains|
|» » gravity|object|false|none|none|
|» » » allow|integer|false|none|Number of allow matches (antigravity)|
|» » » block|integer|false|none|Number of block matches (gravity)|
|» » total|integer|false|none|Total number of matches|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» » type|allow|
|» » type|deny|
|» » kind|exact|
|» » kind|regex|
|» » type|allow|
|» » type|block|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-ftl-information">FTL information</h1>

Methods used to gather advanced data from your Pi-hole

## Get information about requesting client

<a id="opIdget_client"></a>

> Code samples

```bash
curl http://pi.hole/api/info/client \
  -H 'Accept: application/json'
```

`GET /info/client`

The property `timer` may contain additional details concerning a temporary en-/disabling.
It is `null` when no timer is active (the current status is permanent).


> Example responses

> 200 Response

```json
{
  "remote_addr": "127.0.0.1",
  "http_version": "1.1",
  "method": "GET",
  "headers": [
    {
      "name": "Accept",
      "value": "application/json"
    },
    {
      "name": "Connection",
      "value": "keep-alive"
    },
    {
      "name": "Pragma",
      "value": "no-cache"
    }
  ],
  "took": 0.003
}
```

<h3 id="get-information-about-requesting-client-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-information-about-requesting-client-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|remote_addr|string|false|none|Address of requesting client|
|http_version|string|false|none|HTTP version of request|
|method|string|false|none|Request method|
|headers|[object]|false|none|Request headers|
|» name|string|false|none|Header name|
|» value|string|false|none|Header value|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="success">
This operation does not require authentication
</aside>

## Get info about various system parameters

<a id="opIdget_systeminfo"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/system?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/system`

This API hook returns a collection of various system infos.


> Example responses

> 200 Response

```json
{
  "system": {
    "uptime": 67906,
    "memory": {
      "ram": {
        "total": 10317877,
        "free": 308736,
        "used": 8920416,
        "available": 972304,
        "%used": 26.854
      },
      "swap": {
        "total": 10317877,
        "used": 8920416,
        "free": 308736,
        "%used": 1.67
      }
    },
    "procs": 1452,
    "cpu": {
      "nprocs": 8,
      "%cpu": 0,
      "load": {
        "raw": [
          0.58837890625,
          0.64990234375,
          0.66748046875
        ],
        "percent": [
          4.903157711029053,
          5.415853023529053,
          5.562337398529053
        ]
      }
    },
    "ftl": {
      "%mem": 0.1,
      "%cpu": 1.2
    }
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-info-about-various-system-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-info-about-various-system-parameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|system|object|false|none|none|
|» uptime|integer|false|none|How long the system has been running (seconds)|
|» memory|object|false|none|Memory info given in kilobytes|
|» » ram|object|false|none|RAM|
|» » » total|integer|false|none|Total RAM|
|» » » free|integer|false|none|Total free RAM|
|» » » used|integer|false|none|Used RAM|
|» » » available|integer|false|none|Total available RAM|
|» » » %used|number|false|none|Used RAM in percent|
|» » swap|object|false|none|swap memory|
|» » » total|integer|false|none|Total swap|
|» » » used|integer|false|none|Used swap|
|» » » free|integer|false|none|Total free swap memory|
|» » » %used|number|false|none|Used swap in percent|
|» procs|integer|false|none|Number of current processes|
|» cpu|object|false|none|CPU info|
|» » nprocs|integer|false|none|Number of available processors|
|» » %cpu|number|false|none|Total CPU usage in percent (may be higher than 100% on multi-core systems and negative if the value cannot be computed)|
|» » load|object|false|none|1, 5, and 15 minute load averages|
|» » » raw|[number]|false|none|raw values|
|» » » percent|[number]|false|none|raw values|
|» ftl|object|false|none|FTL process info|
|» » %mem|number|false|none|Percentage of total RAM memory used by FTL|
|» » %cpu|number|false|none|Percentage of total CPU used by FTL|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get info about long-term database

<a id="opIdget_dbinfo"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/database?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/database`

This API hook returns a collection of various long-term database properties infos.


> Example responses

> 200 Response

```json
{
  "size": 3690496,
  "type": "Regular file",
  "mode": "rw-r--r--",
  "atime": 1611742120,
  "mtime": 1611742120,
  "ctime": 1611742120,
  "owner": {
    "user": {
      "uid": 998,
      "name": "pihole",
      "info": ""
    },
    "group": {
      "gid": 998,
      "name": "pihole"
    }
  },
  "queries": 536956,
  "earliest_timestamp": 1611742120.5,
  "queries_disk": 1234567,
  "earliest_timestamp_disk": 1608450520.3,
  "sqlite_version": "3.34.0",
  "took": 0.003
}
```

<h3 id="get-info-about-long-term-database-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-info-about-long-term-database-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|size|integer|false|none|Database size in bytes|
|type|string|false|none|Database file type|
|mode|string|false|none|Database file mode|
|atime|integer|false|none|Timestamp of last access|
|mtime|integer|false|none|Timestamp of last modification|
|ctime|integer|false|none|Timestamp of last status change|
|owner|object|false|none|none|
|» user|object|false|none|none|
|» » uid|integer|false|none|UID of database owner|
|» » name|string|false|none|Name of database owner (user)|
|» » info|string|false|none|User info|
|» group|object|false|none|none|
|» » gid|integer|false|none|GID of database owner|
|» » name|string|false|none|Name of database owner (group)|
|queries|integer|false|none|Number of queries in in-memory database|
|earliest_timestamp|number|false|none|Unix timestamp of the earliest query in the in-memory database (Defaults to 0.0 if no queries are stored in memory)|
|queries_disk|integer|false|none|Number of queries in on-disk database|
|earliest_timestamp_disk|number|false|none|Unix timestamp of the earliest query in the on-disk database (Defaults to 0.0 if no queries are stored on disk)|
|sqlite_version|string|false|none|Version of embedded SQLite3 engine|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get info about various ftl parameters

<a id="opIdget_ftlinfo"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/ftl?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/ftl`

This API hook returns a collection of various ftl infos.


> Example responses

> 200 Response

```json
{
  "ftl": {
    "database": {
      "gravity": 67906,
      "antigravity": 0,
      "groups": 6,
      "lists": 1,
      "clients": 5,
      "domains": {
        "allowed": {
          "total": 67906,
          "enabled": 4
        },
        "denied": {
          "total": 4,
          "enabled": 2
        }
      },
      "regex": {
        "allowed": {
          "total": 67906,
          "enabled": 4
        },
        "denied": {
          "total": 10,
          "enabled": 2
        }
      }
    },
    "privacy_level": 0,
    "query_frequency": 1.1,
    "clients": {
      "total": 10,
      "active": 8
    },
    "pid": 1234,
    "uptime": 123456789,
    "%mem": 0.1,
    "%cpu": 1.2,
    "allow_destructive": true,
    "dnsmasq": {
      "dns_cache_inserted": 8,
      "dns_cache_live_freed": 0,
      "dns_queries_forwarded": 2,
      "dns_auth_answered": 0,
      "dns_local_answered": 74,
      "dns_stale_answered": 0,
      "dns_unanswered": 0,
      "bootp": 0,
      "pxe": 0,
      "dhcp_ack": 0,
      "dhcp_decline": 0,
      "dhcp_discover": 0,
      "dhcp_inform": 0,
      "dhcp_nak": 0,
      "dhcp_offer": 0,
      "dhcp_release": 0,
      "dhcp_request": 0,
      "noanswer": 0,
      "leases_allocated_4": 0,
      "leases_pruned_4": 0,
      "leases_allocated_6": 0,
      "leases_pruned_6": 0,
      "tcp_connections": 0,
      "dhcp_leasequery": 0,
      "dhcp_lease_unassigned": 0,
      "dhcp_lease_actve": 0,
      "dhcp_lease_unknown": 0,
      "dnssec_max_crypto_use": 0,
      "dnssec_max_sig_fail": 0,
      "dnssec_max_work": 0
    }
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-info-about-various-ftl-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-info-about-various-ftl-parameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ftl|object|false|none|none|
|» database|object|false|none|none|
|» » gravity|integer|false|none|Number of collected exact domains on blocking lists|
|» » antigravity|integer|false|none|Number of collected exact domains on allowing lists|
|» » groups|integer|false|none|Number of groups|
|» » lists|integer|false|none|Number of lists|
|» » clients|integer|false|none|Number of configured clients|
|» » domains|object|false|none|none|
|» » » allowed|object|false|none|none|
|» » » » total|integer|false|none|Number of allowed domains (total)|
|» » » » enabled|integer|false|none|Number of allowed domains (enabled)|
|» » » denied|object|false|none|none|
|» » » » total|integer|false|none|Number of denied domains (total)|
|» » » » enabled|integer|false|none|Number of denied domains (enabled)|
|» » regex|object|false|none|none|
|» » » allowed|object|false|none|none|
|» » » » total|integer|false|none|Number of allowed regex filters (total)|
|» » » » enabled|integer|false|none|Number of allowed regex filters (enabled)|
|» » » denied|object|false|none|none|
|» » » » total|integer|false|none|Number of denied regex filters (total)|
|» » » » enabled|integer|false|none|Number of denied regex filters (enabled)|
|» privacy_level|integer|false|none|Currently used privacy level|
|» query_frequency|number|false|none|Average number of queries per second|
|» clients|object|false|none|none|
|» » total|integer|false|none|Number of clients FTL has seen in its lfetime|
|» » active|integer|false|none|Number of clients actively using FTL|
|» pid|integer|false|none|PID of FTL process|
|» uptime|number|false|none|Uptime of FTL in milliseconds|
|» %mem|number|false|none|Percentage of total RAM memory used by FTL|
|» %cpu|number|false|none|Percentage of total CPU used by FTL (ten seconds average)|
|» allow_destructive|boolean|false|none|Whether or not FTL is allowed to perform destructive actions|
|» dnsmasq|object|false|none|Metrics from the embedded dnsmasq resolver|
|» » dns_cache_inserted|integer|false|none|Number of inserted entries in DNS cache|
|» » dns_cache_live_freed|integer|false|none|Number of freed live entries in DNS cache|
|» » dns_queries_forwarded|integer|false|none|Number of forwarded DNS queries|
|» » dns_auth_answered|integer|false|none|Number of DNS queries for authoritative zones|
|» » dns_local_answered|integer|false|none|Number of DNS queries answered from local cache|
|» » dns_stale_answered|integer|false|none|Number of DNS queries answered from local cache (stale entries)|
|» » dns_unanswered|integer|false|none|Number of unanswered DNS queries|
|» » bootp|integer|false|none|Number of BOOTP requests|
|» » pxe|integer|false|none|Number of PXE requests|
|» » dhcp_ack|integer|false|none|Number of DHCP ACK|
|» » dhcp_decline|integer|false|none|Number of DHCP DECLINE|
|» » dhcp_discover|integer|false|none|Number of DHCP DISCOVER|
|» » dhcp_inform|integer|false|none|Number of DHCP INFORM|
|» » dhcp_nak|integer|false|none|Number of DHCP NAK|
|» » dhcp_offer|integer|false|none|Number of DHCP OFFER|
|» » dhcp_release|integer|false|none|Number of DHCP RELEASE|
|» » dhcp_request|integer|false|none|Number of DHCP REQUEST|
|» » noanswer|integer|false|none|Number of DHCP requests without answer (rapid commit)|
|» » leases_allocated_4|integer|false|none|Number of allocated IPv4 leases|
|» » leases_pruned_4|integer|false|none|Number of pruned IPv4 leases|
|» » leases_allocated_6|integer|false|none|Number of allocated IPv6 leases|
|» » leases_pruned_6|integer|false|none|Number of pruned IPv6 leases|
|» » tcp_connections|integer|false|none|Number of dedicated TCP workers|
|» » dhcp_leasequery|integer|false|none|Number of DHCP lease queries|
|» » dhcp_lease_unassigned|integer|false|none|Number of DHCP lease unassigned|
|» » dhcp_lease_actve|integer|false|none|Number of DHCP lease active|
|» » dhcp_lease_unknown|integer|false|none|Number of DHCP lease unknown|
|» » dnssec_max_crypto_use|integer|false|none|DNSSEC per-query crypto work HWM|
|» » dnssec_max_sig_fail|integer|false|none|DNSSEC per-RRSet signature fails HWM|
|» » dnssec_max_work|integer|false|none|DNSSEC per-query subqueries HWM|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get info about various host parameters

<a id="opIdget_hostinfo"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/host?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/host`

This API hook returns a collection of host infos.


> Example responses

> 200 Response

```json
{
  "host": {
    "uname": {
      "domainname": "(none)",
      "machine": "x86_64",
      "nodename": "raspberrypi",
      "release": "5.15.0-52-generic",
      "sysname": "Linux",
      "version": "#58-Ubuntu SMP Thu Oct 13 08:03:55 UTC 2022"
    },
    "model": "Raspberry Pi Model 4B",
    "dmi": {
      "bios": {
        "vendor": "American Megatrends Inc."
      },
      "board": {
        "name": "Raspberry Pi 4 Model B Rev 1.4",
        "vendor": "Raspberry Pi Foundation",
        "version": "0x14"
      },
      "product": {
        "name": "Raspberry Pi 4 Model B Rev 1.4",
        "version": "0x14",
        "family": "Raspberry Pi 4 Model B Rev 1.4"
      },
      "sys": {
        "vendor": "Raspberry Pi Foundation"
      }
    }
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-info-about-various-host-parameters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-info-about-various-host-parameters-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|host|object|false|none|none|
|» uname|object|false|none|none|
|» » domainname|string|false|none|none|
|» » machine|string|false|none|none|
|» » nodename|string|false|none|none|
|» » release|string|false|none|none|
|» » sysname|string|false|none|none|
|» » version|string|false|none|none|
|» model|string \| null|false|none|Device model (if available, `null` otherwise)|
|» dmi|object|false|none|none|
|» » bios|object|false|none|none|
|» » » vendor|string \| null|false|none|BIOS vendor (if available, `null` otherwise)|
|» » board|object|false|none|none|
|» » » name|string \| null|false|none|Board name (if available, `null` otherwise)|
|» » » vendor|string \| null|false|none|Board vendor (if available, `null` otherwise)|
|» » » version|string \| null|false|none|Board version (if available, `null` otherwise)|
|» » product|object|false|none|none|
|» » » name|string \| null|false|none|Product name (if available, `null` otherwise)|
|» » » version|string \| null|false|none|Product version (if available, `null` otherwise)|
|» » » family|string \| null|false|none|Product family (if available, `null` otherwise)|
|» » sys|object|false|none|none|
|» » » vendor|string \| null|false|none|System vendor (if available, `null` otherwise)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get info about various sensors

<a id="opIdget_sensors"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/sensors?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/sensors`

This API hook returns a collection of various sensors.


> Example responses

> 200 Response

```json
{
  "sensors": {
    "list": [
      {
        "name": "amdgpu",
        "path": "hwmon1",
        "source": "devices/pci0000:00/0000:00:08.1/0000:05:00.0",
        "temps": [
          {
            "name": "edge",
            "value": 40,
            "max": null,
            "crit": null,
            "sensor": "temp1"
          }
        ]
      },
      {
        "name": "nct6793",
        "path": "hwmon2",
        "source": "devices/platform/nct6775.656",
        "temps": [
          {
            "name": "SMBUSMASTER 0",
            "value": 59.5,
            "max": null,
            "crit": null,
            "sensor": "temp1"
          },
          {
            "name": "CPUTIN",
            "value": 40,
            "max": null,
            "crit": null,
            "sensor": "temp2"
          }
        ]
      },
      {
        "name": "k10temp",
        "path": "hwmon3",
        "source": "devices/pci0000:00/0000:00:18.3",
        "temps": [
          {
            "name": "Tdie",
            "value": 58.875,
            "max": 70,
            "crit": null,
            "sensor": "temp1"
          },
          {
            "name": "Tctl",
            "value": 58.875,
            "max": null,
            "crit": null,
            "sensor": "temp2"
          }
        ]
      },
      {
        "name": "coretemp",
        "path": "hwmon4",
        "source": "devices/platform/coretemp.0",
        "temps": [
          {
            "name": "Package id 0",
            "value": 48,
            "max": 100,
            "crit": 100,
            "sensor": "temp1"
          },
          {
            "name": "Core 0",
            "value": 48,
            "max": 100,
            "crit": 100,
            "sensor": "temp2"
          },
          {
            "name": "Core 1",
            "value": 47,
            "max": 100,
            "crit": 100,
            "sensor": "temp3"
          }
        ]
      }
    ],
    "cpu_temp": 48,
    "hot_limit": 60,
    "unit": "C"
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-info-about-various-sensors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-info-about-various-sensors-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sensors|object|false|none|none|
|» list|[object]|false|none|Sensor information (temperature)|
|» » name|string \| null|false|none|Description of temperature sensor (if available, `null` otherwise)|
|» » path|string|false|none|Short path of temperature sensor|
|» » source|string|false|none|Path-like device description|
|» » temps|[object]|false|none|none|
|» » » name|string \| null|false|none|Description of temperature sensor (if available, `null` otherwise)|
|» » » value|number|false|none|Sensor value|
|» » » max|number \| null|false|none|Maximum sensor value (if available, `null` otherwise)|
|» » » crit|number \| null|false|none|Critical sensor value (if available, `null` otherwise)|
|» » » sensor|string|false|none|Short path of temperature sensor|
|» cpu_temp|number \| null|false|none|CPU temperature (best guess, may be *null* if no sensor can be reliably identified, please report if you encounter this)|
|» hot_limit|number|false|none|Limit defined in FTL's config beyond which the CPU should be considered hot|
|» unit|string|false|none|Sensor value unit|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get Pi-hole version

<a id="opIdget_version"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/version?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/version`

Request versions of the individual Pi-hole components


> Example responses

> 200 Response

```json
{
  "version": {
    "core": {
      "local": {
        "branch": "development",
        "version": "v6.1",
        "hash": "955e36a9"
      },
      "remote": {
        "version": "v6.1",
        "hash": "955e36a9"
      }
    },
    "web": {
      "local": {
        "branch": "devel",
        "version": "v6.1",
        "hash": "f69f7e88"
      },
      "remote": {
        "version": "v6.1",
        "hash": "f69f7e88"
      }
    },
    "ftl": {
      "local": {
        "branch": "development",
        "version": "v6.1",
        "hash": "64441ed6-dirty",
        "date": "2023-01-09 20:25:24 +0100"
      },
      "remote": {
        "version": "v6.1",
        "hash": "64441ed6"
      }
    },
    "docker": {
      "local": "v6.1",
      "remote": "v6.1"
    }
  },
  "took": 0.003
}
```

<h3 id="get-pi-hole-version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-pi-hole-version-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|object|false|none|none|
|» core|object|false|none|none|
|» » local|object|false|none|none|
|» » » branch|string \| null|false|none|Local Pi-hole Core branch|
|» » » version|string \| null|false|none|Local Pi-hole Core version|
|» » » hash|string \| null|false|none|Local Pi-hole Core hash|
|» » remote|object|false|none|none|
|» » » version|string \| null|false|none|Remote (Github) Pi-hole Core version (null if on custom branch)|
|» » » hash|string \| null|false|none|Remote (Github) Pi-hole Core hash|
|» web|object|false|none|none|
|» » local|object|false|none|none|
|» » » branch|string \| null|false|none|Local Pi-hole Web branch|
|» » » version|string \| null|false|none|Local Pi-hole Web version|
|» » » hash|string \| null|false|none|Local Pi-hole Web hash|
|» » remote|object|false|none|none|
|» » » version|string \| null|false|none|Remote (Github) Pi-hole Web version (null if on custom branch)|
|» » » hash|string \| null|false|none|Remote (Github) Pi-hole Web hash|
|» ftl|object|false|none|none|
|» » local|object|false|none|none|
|» » » branch|string \| null|false|none|Local Pi-hole FTL branch|
|» » » version|string \| null|false|none|Local Pi-hole FTL version|
|» » » hash|string \| null|false|none|Local Pi-hole FTL hash|
|» » » date|string \| null|false|none|Build time of your local Pi-hole FTL|
|» » remote|object|false|none|none|
|» » » version|string \| null|false|none|Remote (Github) Pi-hole FTL version (null if on custom branch)|
|» » » hash|string \| null|false|none|Remote (Github) Pi-hole FTL hash|
|» docker|object|false|none|none|
|» » local|string \| null|false|none|Local Pi-hole Docker image version (`null` if not running in Docker)|
|» » remote|string \| null|false|none|Remote (Docker Hub) Pi-hole Docker image version (`null` if not running in Docker)|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get Pi-hole diagnosis messages

<a id="opIdget_messages"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/messages?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/messages`

Request Pi-hole diagnosis messages


> Example responses

> 200 Response

```json
{
  "messages": [
    {
      "id": 3,
      "timestamp": 123456789.123,
      "type": "SUBNET",
      "plain": "Rate-limiting 192.168.2.42 for at least 5 seconds",
      "html": "Client <code>192.168.2.42</code> has been rate-limited for at least 5 seconds (current limit: 1000 queries per 60 seconds)"
    }
  ],
  "took": 0.003
}
```

<h3 id="get-pi-hole-diagnosis-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-pi-hole-diagnosis-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[object]|false|none|none|
|» id|integer|false|none|ID of message|
|» timestamp|number|false|none|Unix timestamp of message|
|» type|string|false|none|Message type|
|» plain|string|false|none|Plain message|
|» html|string|false|none|HTML-formatted message|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete Pi-hole diagnosis message

<a id="opIddelete_message"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/messages/512?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /info/messages/{message_id}`

You may specify multiple IDs to delete multiple messages at once (comma-separated in the path like `1,2,3`)


<h3 id="delete-pi-hole-diagnosis-message-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|message_id|path|integer|true|ID of the message to be deleted|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "uri_error",
    "message": "Specify ID of message to delete in path",
    "hint": "/api/info/messages"
  },
  "tooK": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-pi-hole-diagnosis-message-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Item deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="delete-pi-hole-diagnosis-message-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get count of Pi-hole diagnosis messages

<a id="opIdget_messages_count"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/messages/count?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/messages/count`

Request number of Pi-hole diagnosis messages


> Example responses

> 200 Response

```json
{
  "count": 42,
  "took": 0.003
}
```

<h3 id="get-count-of-pi-hole-diagnosis-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="get-count-of-pi-hole-diagnosis-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|Number of items|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get metrics info

<a id="opIdget_metricsinfo"></a>

> Code samples

```bash
curl "http://pi.hole/api/info/metrics?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /info/metrics`

This API hook returns live information about the DNS and DHCP metrics.


> Example responses

> 200 Response

```json
{
  "metrics": {
    "dns": {
      "cache": {
        "size": 10000,
        "inserted": 4060,
        "evicted": 0,
        "expired": 0,
        "immortal": 0,
        "content": [
          {
            "type": 0,
            "name": "OTHER",
            "count": {
              "valid": 0,
              "stale": 0
            }
          },
          {
            "type": 1,
            "name": "A",
            "count": {
              "valid": 14,
              "stale": 3
            }
          },
          {
            "type": 28,
            "name": "AAAA",
            "count": {
              "valid": 12,
              "stale": 1
            }
          },
          {
            "type": 5,
            "name": "CNAME",
            "count": {
              "valid": 5,
              "stale": 3
            }
          },
          {
            "type": 43,
            "name": "DS",
            "count": {
              "valid": 34,
              "stale": 21
            }
          },
          {
            "type": 48,
            "name": "DNSKEY",
            "count": {
              "valid": 1,
              "stale": 0
            }
          }
        ]
      },
      "replies": {
        "optimized": 1,
        "local": 84,
        "auth": 0,
        "forwarded": 46,
        "unanswered": 0,
        "sum": 131
      }
    },
    "dhcp": {
      "ack": 0,
      "nak": 0,
      "decline": 0,
      "offer": 0,
      "discover": 0,
      "inform": 0,
      "request": 0,
      "release": 0,
      "noanswer": 0,
      "bootp": 0,
      "pxe": 0,
      "leases": {
        "allocated_4": 0,
        "pruned_4": 0,
        "allocated_6": 0,
        "pruned_6": 0
      }
    }
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-metrics-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-metrics-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|metrics|object|false|none|none|
|» dns|object|false|none|DNS metrics|
|» » cache|object|false|none|Cache information|
|» » » size|integer|false|none|Cache size|
|» » » inserted|integer|false|none|Number of inserted entries|
|» » » evicted|integer|false|none|Number of evicted entries|
|» » » expired|integer|false|none|Number of expired entries|
|» » » immortal|integer|false|none|Number of immortal entries|
|» » » content|[object]|false|none|Array of valid DNS cache entries|
|» » » » type|integer|false|none|RR type of cache entry|
|» » » » name|string|false|none|RR name of cache entry|
|» » » » count|object|false|none|Number of cache entries for this RR type|
|» » » » » valid|integer|false|none|Number of valid cache entries|
|» » » » » stale|integer|false|none|Number of stale cache entries|
|» » replies|object|false|none|none|
|» » » forwarded|integer|false|none|Number of forwarded queries|
|» » » unanswered|integer|false|none|Number of unanswered queries|
|» » » local|integer|false|none|Number of queries answered from local cache|
|» » » optimized|integer|false|none|Number of queries answered from local cache (stale entries)|
|» » » auth|integer|false|none|Number of queries for authoritative zones|
|» » » sum|integer|false|none|Total number of queries|
|» dhcp|object|false|none|DHCP metrics|
|» » ack|integer|false|none|Number of DHCP ACKs|
|» » nak|integer|false|none|Number of DHCP NAKs|
|» » decline|integer|false|none|Number of DHCP declines|
|» » offer|integer|false|none|Number of DHCP offers|
|» » discover|integer|false|none|Number of DHCP discovers|
|» » inform|integer|false|none|Number of DHCP informs|
|» » request|integer|false|none|Number of DHCP requests|
|» » release|integer|false|none|Number of DHCP releases|
|» » noanswer|integer|false|none|Number of DHCP requests without answer|
|» » bootp|integer|false|none|Number of BOOTP requests|
|» » pxe|integer|false|none|Number of PXE requests|
|» » leases|object|false|none|DHCP leases|
|» » » allocated_4|integer|false|none|Number of allocated IPv4 leases|
|» » » pruned_4|integer|false|none|Number of pruned IPv4 leases|
|» » » allocated_6|integer|false|none|Number of allocated IPv6 leases|
|» » » pruned_6|integer|false|none|Number of pruned IPv6 leases|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Login page related information

<a id="opIdget_logininfo"></a>

> Code samples

```bash
curl http://pi.hole/api/info/login \
  -H 'Accept: application/json'
```

`GET /info/login`

This API hook returns information used on the login page to possibly display messages/warnings.


> Example responses

> 200 Response

```json
{
  "https_port": 0,
  "dns": true,
  "took": 0.003
}
```

<h3 id="login-page-related-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="login-page-related-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|https_port|integer|false|none|HTTPS port of the Pi-hole webserver (0 if disabled)|
|dns|boolean|false|none|Whether the DNS server is up and running. False only in failed state|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="success">
This operation does not require authentication
</aside>

## Get DNS log content

<a id="opIdget_dns_log"></a>

> Code samples

```bash
curl "http://pi.hole/api/logs/dnsmasq?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /logs/dnsmasq`

This API hook returns content from the log of the embedded DNS resolver `dnsmasq`.

Every successful request will return a `nextID`.
This ID can be used on the next request to only get lines which were added *after* the last request.
This makes periodic polling for new log lines easy as no check for duplicated log lines is necessary.
The expected behavior for an immediate re-request of a log line with the same ID is an empty response.
As soon as the next message arrived, this will be included in your request and `nextID` is incremented by one.


<h3 id="get-dns-log-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextID|query|integer|false|(Optional) ID of next line to return|

> Example responses

> 200 Response

```json
{
  "log": [
    {
      "timestamp": 1611729969,
      "message": "started, version pi-hole-2.84 cachesize 10000"
    },
    {
      "timestamp": 1611729969,
      "message": "reading /etc/resolv.conf"
    },
    {
      "timestamp": 1611729969,
      "message": "read /etc/hosts - 7 addresses"
    },
    {
      "timestamp": 1611729969,
      "message": "query[A] connectivity-check.ubuntu.com from 127.0.0.1"
    }
  ],
  "nextID": 229,
  "pid": 2258,
  "file": "/var/log/pihole/pihole.log",
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-dns-log-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-dns-log-content-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log|[object]|false|none|Request headers|
|» timestamp|number|false|none|Unix timestamp of log line creation (server time)|
|» message|string|false|none|Log line content|
|» prio|string \| null|false|none|Log line priority (if available)|
|nextID|integer|false|none|Next ID to query if checking for new log lines|
|pid|integer|false|none|Process ID of FTL. When this changes, FTL was restarted and nextID should be reset to 0.|
|file|string|false|none|Path to respective log file on disk|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get DNS log content

<a id="opIdget_ftl_log"></a>

> Code samples

```bash
curl "http://pi.hole/api/logs/ftl?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /logs/ftl`

This API hook returns content from the log of FTL.

Every successful request will return a `nextID`.
This ID can be used on the next request to only get lines which were added *after* the last request.
This makes periodic polling for new log lines easy as no check for duplicated log lines is necessary.
The expected behavior for an immediate re-request of a log line with the same ID is an empty response.
As soon as the next message arrived, this will be included in your request and `nextID` is incremented by one.


<h3 id="get-dns-log-content-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextID|query|integer|false|(Optional) ID of next line to return|

> Example responses

> 200 Response

```json
{
  "log": [
    {
      "timestamp": 1611729969,
      "message": "started, version pi-hole-2.84 cachesize 10000"
    },
    {
      "timestamp": 1611729969,
      "message": "reading /etc/resolv.conf"
    },
    {
      "timestamp": 1611729969,
      "message": "read /etc/hosts - 7 addresses"
    },
    {
      "timestamp": 1611729969,
      "message": "query[A] connectivity-check.ubuntu.com from 127.0.0.1"
    }
  ],
  "nextID": 229,
  "pid": 2258,
  "file": "/var/log/pihole/pihole.log",
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-dns-log-content-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-dns-log-content-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log|[object]|false|none|Request headers|
|» timestamp|number|false|none|Unix timestamp of log line creation (server time)|
|» message|string|false|none|Log line content|
|» prio|string \| null|false|none|Log line priority (if available)|
|nextID|integer|false|none|Next ID to query if checking for new log lines|
|pid|integer|false|none|Process ID of FTL. When this changes, FTL was restarted and nextID should be reset to 0.|
|file|string|false|none|Path to respective log file on disk|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get DNS log content

<a id="opIdget_webserver_log"></a>

> Code samples

```bash
curl "http://pi.hole/api/logs/webserver?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /logs/webserver`

This API hook returns content from the log of the embedded CivetWeb HTTP server.

Every successful request will return a `nextID`.
This ID can be used on the next request to only get lines which were added *after* the last request.
This makes periodic polling for new log lines easy as no check for duplicated log lines is necessary.
The expected behavior for an immediate re-request of a log line with the same ID is an empty response.
As soon as the next message arrived, this will be included in your request and `nextID` is incremented by one.


<h3 id="get-dns-log-content-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|nextID|query|integer|false|(Optional) ID of next line to return|

> Example responses

> 200 Response

```json
{
  "log": [
    {
      "timestamp": 1611729969,
      "message": "started, version pi-hole-2.84 cachesize 10000"
    },
    {
      "timestamp": 1611729969,
      "message": "reading /etc/resolv.conf"
    },
    {
      "timestamp": 1611729969,
      "message": "read /etc/hosts - 7 addresses"
    },
    {
      "timestamp": 1611729969,
      "message": "query[A] connectivity-check.ubuntu.com from 127.0.0.1"
    }
  ],
  "nextID": 229,
  "pid": 2258,
  "file": "/var/log/pihole/pihole.log",
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-dns-log-content-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-dns-log-content-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|log|[object]|false|none|Request headers|
|» timestamp|number|false|none|Unix timestamp of log line creation (server time)|
|» message|string|false|none|Log line content|
|» prio|string \| null|false|none|Log line priority (if available)|
|nextID|integer|false|none|Next ID to query if checking for new log lines|
|pid|integer|false|none|Process ID of FTL. When this changes, FTL was restarted and nextID should be reset to 0.|
|file|string|false|none|Path to respective log file on disk|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get list of available API endpoints

<a id="opIdget_endpoints"></a>

> Code samples

```bash
curl "http://pi.hole/api/endpoints?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /endpoints`

This API hook returns the list of all available API endpoints.


> Example responses

> 200 Response

```json
{
  "endpoints": {
    "get": [
      {
        "uri": "/api/dns/blocking",
        "parameters": ""
      },
      {
        "uri": "/api/dns/cache",
        "parameters": ""
      },
      {
        "uri": "/api/dns/port",
        "parameters": ""
      },
      {
        "uri": "/api/domains",
        "parameters": ""
      },
      {
        "uri": "/api/groups",
        "parameters": ""
      },
      {
        "uri": "/api/lists",
        "parameters": ""
      }
    ],
    "post": [
      {
        "uri": "/api/dns/blocking",
        "parameters": ""
      },
      {
        "uri": "/api/dns/cache",
        "parameters": ""
      },
      {
        "uri": "/api/dns/port",
        "parameters": ""
      },
      {
        "uri": "/api/domains",
        "parameters": ""
      },
      {
        "uri": "/api/groups",
        "parameters": ""
      },
      {
        "uri": "/api/lists",
        "parameters": ""
      }
    ],
    "put": [
      {
        "uri": "/api/dns/blocking",
        "parameters": ""
      },
      {
        "uri": "/api/dns/cache",
        "parameters": ""
      },
      {
        "uri": "/api/dns/port",
        "parameters": ""
      },
      {
        "uri": "/api/domains",
        "parameters": ""
      },
      {
        "uri": "/api/groups",
        "parameters": ""
      },
      {
        "uri": "/api/lists",
        "parameters": ""
      }
    ],
    "patch": [
      {
        "uri": "/api/dns/blocking",
        "parameters": ""
      },
      {
        "uri": "/api/dns/cache",
        "parameters": ""
      },
      {
        "uri": "/api/dns/port",
        "parameters": ""
      },
      {
        "uri": "/api/domains",
        "parameters": ""
      },
      {
        "uri": "/api/groups",
        "parameters": ""
      },
      {
        "uri": "/api/lists",
        "parameters": ""
      }
    ],
    "delete": [
      {
        "uri": "/api/dns/blocking",
        "parameters": ""
      },
      {
        "uri": "/api/dns/cache",
        "parameters": ""
      },
      {
        "uri": "/api/dns/port",
        "parameters": ""
      },
      {
        "uri": "/api/domains",
        "parameters": ""
      },
      {
        "uri": "/api/groups",
        "parameters": ""
      },
      {
        "uri": "/api/lists",
        "parameters": ""
      }
    ]
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-list-of-available-api-endpoints-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-list-of-available-api-endpoints-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endpoints|object|false|none|Endpoints|
|» get|[object]|false|none|none|
|» » uri|string|false|none|URI|
|» » parameters|string|false|none|Parameters|
|» post|[object]|false|none|none|
|» » uri|string|false|none|URI|
|» » parameters|string|false|none|Parameters|
|» put|[object]|false|none|none|
|» » uri|string|false|none|URI|
|» » parameters|string|false|none|Parameters|
|» patch|[object]|false|none|none|
|» » uri|string|false|none|URI|
|» » parameters|string|false|none|Parameters|
|» delete|[object]|false|none|none|
|» » uri|string|false|none|URI|
|» » parameters|string|false|none|Parameters|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-pi-hole-configuration">Pi-hole configuration</h1>

Methods used to configure your Pi-hole

## Get current configuration of your Pi-hole

<a id="opIdget_config"></a>

> Code samples

```bash
curl "http://pi.hole/api/config?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /config`

This API hook returns infos about the config of your Pi-hole.


<h3 id="get-current-configuration-of-your-pi-hole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detailed|query|boolean|false|Return detailed information about the configuration|

> Example responses

> 200 Response

```json
{
  "config": {
    "dns": {
      "upstreams": [
        "127.0.0.1#5353",
        "8.8.8.8"
      ],
      "CNAMEdeepInspect": true,
      "blockESNI": true,
      "EDNS0ECS": true,
      "ignoreLocalhost": false,
      "showDNSSEC": true,
      "analyzeOnlyAandAAAA": false,
      "piholePTR": "PI.HOLE",
      "replyWhenBusy": "ALLOW",
      "blockTTL": 2,
      "hosts": [
        "192.168.2.123 mymusicbox"
      ],
      "domainNeeded": true,
      "expandHosts": true,
      "domain": {
        "name": "lan",
        "local": true
      },
      "bogusPriv": true,
      "dnssec": true,
      "interface": "eth0",
      "hostRecord": "",
      "listeningMode": "local",
      "queryLogging": true,
      "cnameRecords": [
        "*.example.com,default.example.com",
        "hourly.yetanother.com,yetanother.com,3600"
      ],
      "port": 53,
      "localise": true,
      "cache": {
        "size": 10000,
        "optimizer": 3600,
        "upstreamBlockedTTL": 86400,
        "rrtype": "ANY"
      },
      "revServers": [
        "true,192.168.0.0/24,192.168.0.1,lan"
      ],
      "blocking": {
        "active": true,
        "mode": "NULL",
        "edns": "NONE"
      },
      "specialDomains": {
        "mozillaCanary": true,
        "iCloudPrivateRelay": true,
        "designatedResolver": true
      },
      "reply": {
        "host": {
          "force4": false,
          "force6": false,
          "IPv4": "0.0.0.0",
          "IPv6": "::"
        },
        "blocking": {
          "force4": false,
          "force6": false,
          "IPv4": "0.0.0.0",
          "IPv6": "::"
        }
      },
      "rateLimit": {
        "count": 0,
        "interval": 0
      }
    },
    "dhcp": {
      "active": false,
      "start": "192.168.0.10",
      "end": "192.168.0.250",
      "router": "192.168.0.1",
      "netmask": "0.0.0.0",
      "leaseTime": "24h",
      "ipv6": false,
      "rapidCommit": false,
      "multiDNS": false,
      "logging": false,
      "ignoreUnknownClients": false,
      "hosts": [
        "11:22:33:44:55:66,192.168.1.123",
        "11:22:33:44:55:67,192.168.1.124,hostname"
      ]
    },
    "ntp": {
      "ipv4": {
        "active": true,
        "address": ""
      },
      "ipv6": {
        "active": true,
        "address": ""
      },
      "sync": {
        "active": true,
        "server": "pool.ntp.org",
        "interval": 3600,
        "count": 8,
        "rtc": {
          "set": true,
          "device": "",
          "utc": true
        }
      }
    },
    "resolver": {
      "resolveIPv4": true,
      "resolveIPv6": true,
      "macNames": true,
      "networkNames": true,
      "refreshNames": "IPV4_ONLY"
    },
    "database": {
      "DBimport": true,
      "maxDBdays": 365,
      "DBinterval": 60,
      "useWAL": true,
      "forceDisk": false,
      "network": {
        "parseARPcache": true,
        "expire": 365
      }
    },
    "webserver": {
      "domain": "pi.hole",
      "acl": "+0.0.0.0/0,::/0",
      "port": "80,[::]:80",
      "threads": 0,
      "headers": [
        "X-DNS-Prefetch-Control: off",
        "Content-Security-Policy: default-src 'none'; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; img-src 'self'; manifest-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; form-action 'self'",
        "X-Frame-Options: DENY",
        "X-XSS-Protection: 0",
        "X-Content-Type-Options: nosniff",
        "Referrer-Policy: strict-origin-when-cross-origin"
      ],
      "serve_all": false,
      "advancedOpts": [
        "ssl_protocol_version=4"
      ],
      "session": {
        "timeout": 300,
        "restore": true
      },
      "tls": {
        "cert": "/etc/pihole/tls.pem",
        "validity": 47
      },
      "paths": {
        "webroot": "/var/www/html",
        "webhome": "/admin/",
        "prefix": ""
      },
      "interface": {
        "boxed": true,
        "theme": "default-darker"
      },
      "api": {
        "max_sessions": 16,
        "prettyJSON": false,
        "password": "********",
        "pwhash": "",
        "totp_secret": "",
        "app_pwhash": "",
        "app_sudo": false,
        "cli_pw": true,
        "excludeClients": [
          "1\\.2\\.3\\.4",
          "localhost",
          "fe80::345"
        ],
        "excludeDomains": [
          "google\\\\.de",
          "pi-hole\\.net"
        ],
        "maxHistory": 86400,
        "maxClients": 10,
        "client_history_global_max": true,
        "allow_destructive": true,
        "temp": {
          "limit": 60,
          "unit": "C"
        }
      }
    },
    "files": {
      "pid": "/run/pihole-FTL.pid",
      "database": "/etc/pihole/pihole-FTL.db",
      "tmp_db": "/etc/pihole/pihole-tmp.db",
      "gravity": "/etc/pihole/gravity.db",
      "gravity_tmp": "/tmp",
      "macvendor": "/etc/pihole/macvendor.db",
      "pcap": "",
      "log": {
        "ftl": "/var/log/pihole/FTL.log",
        "dnsmasq": "/var/log/pihole/pihole.log",
        "webserver": "/var/log/pihole/webserver.log"
      }
    },
    "misc": {
      "nice": -10,
      "delay_startup": 10,
      "addr2line": true,
      "privacylevel": 0,
      "etc_dnsmasq_d": false,
      "dnsmasq_lines": [],
      "extraLogging": false,
      "readOnly": false,
      "normalizeCPU": false,
      "hide_dnsmasq_warn": false,
      "hide_connection_error": false,
      "check": {
        "load": true,
        "shmem": 90,
        "disk": 90
      }
    },
    "debug": {
      "database": false,
      "networking": false,
      "locks": false,
      "queries": false,
      "flags": false,
      "shmem": false,
      "gc": false,
      "arp": false,
      "regex": false,
      "api": false,
      "tls": false,
      "overtime": false,
      "status": false,
      "caps": false,
      "dnssec": false,
      "vectors": false,
      "resolver": false,
      "edns0": false,
      "clients": false,
      "aliasclients": false,
      "events": false,
      "helper": false,
      "config": false,
      "inotify": false,
      "webserver": false,
      "extra": false,
      "reserved": false,
      "ntp": false,
      "netlink": false,
      "timing": false,
      "performance": false,
      "all": false
    },
    "took": 0.003
  }
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-current-configuration-of-your-pi-hole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-current-configuration-of-your-pi-hole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|» dns|object|false|none|none|
|» » upstreams|[string]|false|none|none|
|» » CNAMEdeepInspect|boolean|false|none|none|
|» » blockESNI|boolean|false|none|none|
|» » EDNS0ECS|boolean|false|none|none|
|» » ignoreLocalhost|boolean|false|none|none|
|» » showDNSSEC|boolean|false|none|none|
|» » analyzeOnlyAandAAAA|boolean|false|none|none|
|» » piholePTR|string|false|none|none|
|» » replyWhenBusy|string|false|none|none|
|» » blockTTL|integer|false|none|none|
|» » hosts|[string]|false|none|none|
|» » domainNeeded|boolean|false|none|none|
|» » expandHosts|boolean|false|none|none|
|» » domain|object|false|none|none|
|» » » name|string|false|none|none|
|» » » local|boolean|false|none|none|
|» » bogusPriv|boolean|false|none|none|
|» » dnssec|boolean|false|none|none|
|» » interface|string|false|none|none|
|» » hostRecord|string|false|none|none|
|» » listeningMode|string|false|none|none|
|» » queryLogging|boolean|false|none|none|
|» » cnameRecords|[string]|false|none|none|
|» » port|integer|false|none|none|
|» » localise|boolean|false|none|none|
|» » cache|object|false|none|none|
|» » » size|integer|false|none|none|
|» » » optimizer|integer|false|none|none|
|» » » upstreamBlockedTTL|integer|false|none|none|
|» » » rrtype|string|false|none|none|
|» » revServers|[string]|false|none|none|
|» » blocking|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » mode|string|false|none|none|
|» » » edns|string|false|none|none|
|» » specialDomains|object|false|none|none|
|» » » mozillaCanary|boolean|false|none|none|
|» » » iCloudPrivateRelay|boolean|false|none|none|
|» » » designatedResolver|boolean|false|none|none|
|» » reply|object|false|none|none|
|» » » host|object|false|none|none|
|» » » » force4|boolean|false|none|none|
|» » » » force6|boolean|false|none|none|
|» » » » IPv4|string|false|none|none|
|» » » » IPv6|string|false|none|none|
|» » » blocking|object|false|none|none|
|» » » » force4|boolean|false|none|none|
|» » » » force6|boolean|false|none|none|
|» » » » IPv4|string|false|none|none|
|» » » » IPv6|string|false|none|none|
|» » rateLimit|object|false|none|none|
|» » » count|integer|false|none|none|
|» » » interval|integer|false|none|none|
|» dhcp|object|false|none|none|
|» » active|boolean|false|none|none|
|» » start|string|false|none|none|
|» » end|string|false|none|none|
|» » router|string|false|none|none|
|» » netmask|string|false|none|none|
|» » leaseTime|string|false|none|none|
|» » ipv6|boolean|false|none|none|
|» » rapidCommit|boolean|false|none|none|
|» » multiDNS|boolean|false|none|none|
|» » logging|boolean|false|none|none|
|» » ignoreUnknownClients|boolean|false|none|none|
|» » hosts|[string]|false|none|none|
|» ntp|object|false|none|none|
|» » ipv4|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » address|string|false|none|none|
|» » ipv6|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » address|string|false|none|none|
|» » sync|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » server|string|false|none|none|
|» » » interval|integer|false|none|none|
|» » » count|integer|false|none|none|
|» » » rtc|object|false|none|none|
|» » » » set|boolean|false|none|none|
|» » » » device|string|false|none|none|
|» » » » utc|boolean|false|none|none|
|» resolver|object|false|none|none|
|» » resolveIPv4|boolean|false|none|none|
|» » resolveIPv6|boolean|false|none|none|
|» » macNames|boolean|false|none|none|
|» » networkNames|boolean|false|none|none|
|» » refreshNames|string|false|none|none|
|» database|object|false|none|none|
|» » DBimport|boolean|false|none|none|
|» » maxDBdays|integer|false|none|none|
|» » DBinterval|integer|false|none|none|
|» » useWAL|boolean|false|none|none|
|» » forceDisk|boolean|false|none|none|
|» » network|object|false|none|none|
|» » » parseARPcache|boolean|false|none|none|
|» » » expire|integer|false|none|none|
|» webserver|object|false|none|none|
|» » domain|string|false|none|none|
|» » acl|string|false|none|none|
|» » port|string|false|none|none|
|» » threads|integer|false|none|none|
|» » headers|[string]|false|none|none|
|» » serve_all|boolean|false|none|none|
|» » advancedOpts|[string]|false|none|none|
|» » session|object|false|none|none|
|» » » timeout|integer|false|none|none|
|» » » restore|boolean|false|none|none|
|» » tls|object|false|none|none|
|» » » cert|string|false|none|none|
|» » » validity|integer|false|none|none|
|» » paths|object|false|none|none|
|» » » webroot|string|false|none|none|
|» » » webhome|string|false|none|none|
|» » » prefix|string|false|none|none|
|» » interface|object|false|none|none|
|» » » boxed|boolean|false|none|none|
|» » » theme|string|false|none|none|
|» » api|object|false|none|none|
|» » » max_sessions|integer|false|none|none|
|» » » prettyJSON|boolean|false|none|none|
|» » » password|string|false|none|*Note:* Special write-only property used to change the password via the API.<br>|
|» » » pwhash|string|false|none|none|
|» » » totp_secret|string|false|none|none|
|» » » app_pwhash|string|false|none|none|
|» » » app_sudo|boolean|false|none|none|
|» » » cli_pw|boolean|false|none|none|
|» » » excludeClients|[string]|false|none|none|
|» » » excludeDomains|[string]|false|none|none|
|» » » maxHistory|integer|false|none|none|
|» » » maxClients|integer|false|none|none|
|» » » client_history_global_max|boolean|false|none|none|
|» » » allow_destructive|boolean|false|none|none|
|» » » temp|object|false|none|none|
|» » » » limit|number|false|none|none|
|» » » » unit|string|false|none|none|
|» files|object|false|none|none|
|» » pid|string|false|none|none|
|» » database|string|false|none|none|
|» » tmp_db|string|false|none|none|
|» » gravity|string|false|none|none|
|» » gravity_tmp|string|false|none|none|
|» » macvendor|string|false|none|none|
|» » pcap|string|false|none|none|
|» » log|object|false|none|none|
|» » » ftl|string|false|none|none|
|» » » dnsmasq|string|false|none|none|
|» » » webserver|string|false|none|none|
|» misc|object|false|none|none|
|» » nice|integer|false|none|none|
|» » delay_startup|integer|false|none|none|
|» » addr2line|boolean|false|none|none|
|» » etc_dnsmasq_d|boolean|false|none|none|
|» » privacylevel|integer|false|none|none|
|» » dnsmasq_lines|[string]|false|none|none|
|» » extraLogging|boolean|false|none|none|
|» » readOnly|boolean|false|none|none|
|» » normalizeCPU|boolean|false|none|none|
|» » hide_dnsmasq_warn|boolean|false|none|none|
|» » hide_connection_error|boolean|false|none|none|
|» » check|object|false|none|none|
|» » » load|boolean|false|none|none|
|» » » shmem|integer|false|none|none|
|» » » disk|integer|false|none|none|
|» debug|object|false|none|none|
|» » database|boolean|false|none|none|
|» » networking|boolean|false|none|none|
|» » locks|boolean|false|none|none|
|» » queries|boolean|false|none|none|
|» » flags|boolean|false|none|none|
|» » shmem|boolean|false|none|none|
|» » gc|boolean|false|none|none|
|» » arp|boolean|false|none|none|
|» » regex|boolean|false|none|none|
|» » api|boolean|false|none|none|
|» » tls|boolean|false|none|none|
|» » overtime|boolean|false|none|none|
|» » status|boolean|false|none|none|
|» » caps|boolean|false|none|none|
|» » dnssec|boolean|false|none|none|
|» » vectors|boolean|false|none|none|
|» » resolver|boolean|false|none|none|
|» » edns0|boolean|false|none|none|
|» » clients|boolean|false|none|none|
|» » aliasclients|boolean|false|none|none|
|» » events|boolean|false|none|none|
|» » helper|boolean|false|none|none|
|» » config|boolean|false|none|none|
|» » inotify|boolean|false|none|none|
|» » webserver|boolean|false|none|none|
|» » extra|boolean|false|none|none|
|» » reserved|boolean|false|none|none|
|» » ntp|boolean|false|none|none|
|» » netlink|boolean|false|none|none|
|» » timing|boolean|false|none|none|
|» » performance|boolean|false|none|none|
|» » all|boolean|false|none|none|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Change configuration of your Pi-hole

<a id="opIdpatch_config"></a>

> Code samples

```bash
curl "http://pi.hole/api/config?sid=${API_KEY}" \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "config": {
      "dns": {
        "CNAMEdeepInspect": true
      }
    }
  }'
```

`PATCH /config`

This API hook allows to modify the config of your Pi-hole. This endpoint supports changing multiple properties at once when you specify several in the payload. See examples below.


> Body parameter

```json
{
  "config": {
    "dns": {
      "CNAMEdeepInspect": true
    }
  }
}
```

<h3 id="change-configuration-of-your-pi-hole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|restart|query|boolean|false|Restart FTL after a change would require this. This option can be used if you want to avoid a restart, e.g., when adding multiple items independently instead of all together at once. Note that you will have to restart FTL manually later to apply the changes.|
|body|body|object|false|Callback payload|
|» config|body|object|false|none|
|» » dns|body|object|false|none|
|» » » upstreams|body|[string]|false|none|
|» » » CNAMEdeepInspect|body|boolean|false|none|
|» » » blockESNI|body|boolean|false|none|
|» » » EDNS0ECS|body|boolean|false|none|
|» » » ignoreLocalhost|body|boolean|false|none|
|» » » showDNSSEC|body|boolean|false|none|
|» » » analyzeOnlyAandAAAA|body|boolean|false|none|
|» » » piholePTR|body|string|false|none|
|» » » replyWhenBusy|body|string|false|none|
|» » » blockTTL|body|integer|false|none|
|» » » hosts|body|[string]|false|none|
|» » » domainNeeded|body|boolean|false|none|
|» » » expandHosts|body|boolean|false|none|
|» » » domain|body|object|false|none|
|» » » » name|body|string|false|none|
|» » » » local|body|boolean|false|none|
|» » » bogusPriv|body|boolean|false|none|
|» » » dnssec|body|boolean|false|none|
|» » » interface|body|string|false|none|
|» » » hostRecord|body|string|false|none|
|» » » listeningMode|body|string|false|none|
|» » » queryLogging|body|boolean|false|none|
|» » » cnameRecords|body|[string]|false|none|
|» » » port|body|integer|false|none|
|» » » localise|body|boolean|false|none|
|» » » cache|body|object|false|none|
|» » » » size|body|integer|false|none|
|» » » » optimizer|body|integer|false|none|
|» » » » upstreamBlockedTTL|body|integer|false|none|
|» » » » rrtype|body|string|false|none|
|» » » revServers|body|[string]|false|none|
|» » » blocking|body|object|false|none|
|» » » » active|body|boolean|false|none|
|» » » » mode|body|string|false|none|
|» » » » edns|body|string|false|none|
|» » » specialDomains|body|object|false|none|
|» » » » mozillaCanary|body|boolean|false|none|
|» » » » iCloudPrivateRelay|body|boolean|false|none|
|» » » » designatedResolver|body|boolean|false|none|
|» » » reply|body|object|false|none|
|» » » » host|body|object|false|none|
|» » » » » force4|body|boolean|false|none|
|» » » » » force6|body|boolean|false|none|
|» » » » » IPv4|body|string|false|none|
|» » » » » IPv6|body|string|false|none|
|» » » » blocking|body|object|false|none|
|» » » » » force4|body|boolean|false|none|
|» » » » » force6|body|boolean|false|none|
|» » » » » IPv4|body|string|false|none|
|» » » » » IPv6|body|string|false|none|
|» » » rateLimit|body|object|false|none|
|» » » » count|body|integer|false|none|
|» » » » interval|body|integer|false|none|
|» » dhcp|body|object|false|none|
|» » » active|body|boolean|false|none|
|» » » start|body|string|false|none|
|» » » end|body|string|false|none|
|» » » router|body|string|false|none|
|» » » netmask|body|string|false|none|
|» » » leaseTime|body|string|false|none|
|» » » ipv6|body|boolean|false|none|
|» » » rapidCommit|body|boolean|false|none|
|» » » multiDNS|body|boolean|false|none|
|» » » logging|body|boolean|false|none|
|» » » ignoreUnknownClients|body|boolean|false|none|
|» » » hosts|body|[string]|false|none|
|» » ntp|body|object|false|none|
|» » » ipv4|body|object|false|none|
|» » » » active|body|boolean|false|none|
|» » » » address|body|string|false|none|
|» » » ipv6|body|object|false|none|
|» » » » active|body|boolean|false|none|
|» » » » address|body|string|false|none|
|» » » sync|body|object|false|none|
|» » » » active|body|boolean|false|none|
|» » » » server|body|string|false|none|
|» » » » interval|body|integer|false|none|
|» » » » count|body|integer|false|none|
|» » » » rtc|body|object|false|none|
|» » » » » set|body|boolean|false|none|
|» » » » » device|body|string|false|none|
|» » » » » utc|body|boolean|false|none|
|» » resolver|body|object|false|none|
|» » » resolveIPv4|body|boolean|false|none|
|» » » resolveIPv6|body|boolean|false|none|
|» » » macNames|body|boolean|false|none|
|» » » networkNames|body|boolean|false|none|
|» » » refreshNames|body|string|false|none|
|» » database|body|object|false|none|
|» » » DBimport|body|boolean|false|none|
|» » » maxDBdays|body|integer|false|none|
|» » » DBinterval|body|integer|false|none|
|» » » useWAL|body|boolean|false|none|
|» » » forceDisk|body|boolean|false|none|
|» » » network|body|object|false|none|
|» » » » parseARPcache|body|boolean|false|none|
|» » » » expire|body|integer|false|none|
|» » webserver|body|object|false|none|
|» » » domain|body|string|false|none|
|» » » acl|body|string|false|none|
|» » » port|body|string|false|none|
|» » » threads|body|integer|false|none|
|» » » headers|body|[string]|false|none|
|» » » serve_all|body|boolean|false|none|
|» » » advancedOpts|body|[string]|false|none|
|» » » session|body|object|false|none|
|» » » » timeout|body|integer|false|none|
|» » » » restore|body|boolean|false|none|
|» » » tls|body|object|false|none|
|» » » » cert|body|string|false|none|
|» » » » validity|body|integer|false|none|
|» » » paths|body|object|false|none|
|» » » » webroot|body|string|false|none|
|» » » » webhome|body|string|false|none|
|» » » » prefix|body|string|false|none|
|» » » interface|body|object|false|none|
|» » » » boxed|body|boolean|false|none|
|» » » » theme|body|string|false|none|
|» » » api|body|object|false|none|
|» » » » max_sessions|body|integer|false|none|
|» » » » prettyJSON|body|boolean|false|none|
|» » » » password|body|string|false|*Note:* Special write-only property used to change the password via the API.<br>|
|» » » » pwhash|body|string|false|none|
|» » » » totp_secret|body|string|false|none|
|» » » » app_pwhash|body|string|false|none|
|» » » » app_sudo|body|boolean|false|none|
|» » » » cli_pw|body|boolean|false|none|
|» » » » excludeClients|body|[string]|false|none|
|» » » » excludeDomains|body|[string]|false|none|
|» » » » maxHistory|body|integer|false|none|
|» » » » maxClients|body|integer|false|none|
|» » » » client_history_global_max|body|boolean|false|none|
|» » » » allow_destructive|body|boolean|false|none|
|» » » » temp|body|object|false|none|
|» » » » » limit|body|number|false|none|
|» » » » » unit|body|string|false|none|
|» » files|body|object|false|none|
|» » » pid|body|string|false|none|
|» » » database|body|string|false|none|
|» » » tmp_db|body|string|false|none|
|» » » gravity|body|string|false|none|
|» » » gravity_tmp|body|string|false|none|
|» » » macvendor|body|string|false|none|
|» » » pcap|body|string|false|none|
|» » » log|body|object|false|none|
|» » » » ftl|body|string|false|none|
|» » » » dnsmasq|body|string|false|none|
|» » » » webserver|body|string|false|none|
|» » misc|body|object|false|none|
|» » » nice|body|integer|false|none|
|» » » delay_startup|body|integer|false|none|
|» » » addr2line|body|boolean|false|none|
|» » » etc_dnsmasq_d|body|boolean|false|none|
|» » » privacylevel|body|integer|false|none|
|» » » dnsmasq_lines|body|[string]|false|none|
|» » » extraLogging|body|boolean|false|none|
|» » » readOnly|body|boolean|false|none|
|» » » normalizeCPU|body|boolean|false|none|
|» » » hide_dnsmasq_warn|body|boolean|false|none|
|» » » hide_connection_error|body|boolean|false|none|
|» » » check|body|object|false|none|
|» » » » load|body|boolean|false|none|
|» » » » shmem|body|integer|false|none|
|» » » » disk|body|integer|false|none|
|» » debug|body|object|false|none|
|» » » database|body|boolean|false|none|
|» » » networking|body|boolean|false|none|
|» » » locks|body|boolean|false|none|
|» » » queries|body|boolean|false|none|
|» » » flags|body|boolean|false|none|
|» » » shmem|body|boolean|false|none|
|» » » gc|body|boolean|false|none|
|» » » arp|body|boolean|false|none|
|» » » regex|body|boolean|false|none|
|» » » api|body|boolean|false|none|
|» » » tls|body|boolean|false|none|
|» » » overtime|body|boolean|false|none|
|» » » status|body|boolean|false|none|
|» » » caps|body|boolean|false|none|
|» » » dnssec|body|boolean|false|none|
|» » » vectors|body|boolean|false|none|
|» » » resolver|body|boolean|false|none|
|» » » edns0|body|boolean|false|none|
|» » » clients|body|boolean|false|none|
|» » » aliasclients|body|boolean|false|none|
|» » » events|body|boolean|false|none|
|» » » helper|body|boolean|false|none|
|» » » config|body|boolean|false|none|
|» » » inotify|body|boolean|false|none|
|» » » webserver|body|boolean|false|none|
|» » » extra|body|boolean|false|none|
|» » » reserved|body|boolean|false|none|
|» » » ntp|body|boolean|false|none|
|» » » netlink|body|boolean|false|none|
|» » » timing|body|boolean|false|none|
|» » » performance|body|boolean|false|none|
|» » » all|body|boolean|false|none|
|» took|body|number|false|Time in seconds it took to process the request|

> Example responses

> 200 Response

```json
{
  "config": {
    "dns": {
      "upstreams": [
        "127.0.0.1#5353",
        "8.8.8.8"
      ],
      "CNAMEdeepInspect": true,
      "blockESNI": true,
      "EDNS0ECS": true,
      "ignoreLocalhost": false,
      "showDNSSEC": true,
      "analyzeOnlyAandAAAA": false,
      "piholePTR": "PI.HOLE",
      "replyWhenBusy": "ALLOW",
      "blockTTL": 2,
      "hosts": [
        "192.168.2.123 mymusicbox"
      ],
      "domainNeeded": true,
      "expandHosts": true,
      "domain": {
        "name": "lan",
        "local": true
      },
      "bogusPriv": true,
      "dnssec": true,
      "interface": "eth0",
      "hostRecord": "",
      "listeningMode": "local",
      "queryLogging": true,
      "cnameRecords": [
        "*.example.com,default.example.com",
        "hourly.yetanother.com,yetanother.com,3600"
      ],
      "port": 53,
      "localise": true,
      "cache": {
        "size": 10000,
        "optimizer": 3600,
        "upstreamBlockedTTL": 86400,
        "rrtype": "ANY"
      },
      "revServers": [
        "true,192.168.0.0/24,192.168.0.1,lan"
      ],
      "blocking": {
        "active": true,
        "mode": "NULL",
        "edns": "NONE"
      },
      "specialDomains": {
        "mozillaCanary": true,
        "iCloudPrivateRelay": true,
        "designatedResolver": true
      },
      "reply": {
        "host": {
          "force4": false,
          "force6": false,
          "IPv4": "0.0.0.0",
          "IPv6": "::"
        },
        "blocking": {
          "force4": false,
          "force6": false,
          "IPv4": "0.0.0.0",
          "IPv6": "::"
        }
      },
      "rateLimit": {
        "count": 0,
        "interval": 0
      }
    },
    "dhcp": {
      "active": false,
      "start": "192.168.0.10",
      "end": "192.168.0.250",
      "router": "192.168.0.1",
      "netmask": "0.0.0.0",
      "leaseTime": "24h",
      "ipv6": false,
      "rapidCommit": false,
      "multiDNS": false,
      "logging": false,
      "ignoreUnknownClients": false,
      "hosts": [
        "11:22:33:44:55:66,192.168.1.123",
        "11:22:33:44:55:67,192.168.1.124,hostname"
      ]
    },
    "ntp": {
      "ipv4": {
        "active": true,
        "address": ""
      },
      "ipv6": {
        "active": true,
        "address": ""
      },
      "sync": {
        "active": true,
        "server": "pool.ntp.org",
        "interval": 3600,
        "count": 8,
        "rtc": {
          "set": true,
          "device": "",
          "utc": true
        }
      }
    },
    "resolver": {
      "resolveIPv4": true,
      "resolveIPv6": true,
      "macNames": true,
      "networkNames": true,
      "refreshNames": "IPV4_ONLY"
    },
    "database": {
      "DBimport": true,
      "maxDBdays": 365,
      "DBinterval": 60,
      "useWAL": true,
      "forceDisk": false,
      "network": {
        "parseARPcache": true,
        "expire": 365
      }
    },
    "webserver": {
      "domain": "pi.hole",
      "acl": "+0.0.0.0/0,::/0",
      "port": "80,[::]:80",
      "threads": 0,
      "headers": [
        "X-DNS-Prefetch-Control: off",
        "Content-Security-Policy: default-src 'none'; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; img-src 'self'; manifest-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; form-action 'self'",
        "X-Frame-Options: DENY",
        "X-XSS-Protection: 0",
        "X-Content-Type-Options: nosniff",
        "Referrer-Policy: strict-origin-when-cross-origin"
      ],
      "serve_all": false,
      "advancedOpts": [
        "ssl_protocol_version=4"
      ],
      "session": {
        "timeout": 300,
        "restore": true
      },
      "tls": {
        "cert": "/etc/pihole/tls.pem",
        "validity": 47
      },
      "paths": {
        "webroot": "/var/www/html",
        "webhome": "/admin/",
        "prefix": ""
      },
      "interface": {
        "boxed": true,
        "theme": "default-darker"
      },
      "api": {
        "max_sessions": 16,
        "prettyJSON": false,
        "password": "********",
        "pwhash": "",
        "totp_secret": "",
        "app_pwhash": "",
        "app_sudo": false,
        "cli_pw": true,
        "excludeClients": [
          "1\\.2\\.3\\.4",
          "localhost",
          "fe80::345"
        ],
        "excludeDomains": [
          "google\\\\.de",
          "pi-hole\\.net"
        ],
        "maxHistory": 86400,
        "maxClients": 10,
        "client_history_global_max": true,
        "allow_destructive": true,
        "temp": {
          "limit": 60,
          "unit": "C"
        }
      }
    },
    "files": {
      "pid": "/run/pihole-FTL.pid",
      "database": "/etc/pihole/pihole-FTL.db",
      "tmp_db": "/etc/pihole/pihole-tmp.db",
      "gravity": "/etc/pihole/gravity.db",
      "gravity_tmp": "/tmp",
      "macvendor": "/etc/pihole/macvendor.db",
      "pcap": "",
      "log": {
        "ftl": "/var/log/pihole/FTL.log",
        "dnsmasq": "/var/log/pihole/pihole.log",
        "webserver": "/var/log/pihole/webserver.log"
      }
    },
    "misc": {
      "nice": -10,
      "delay_startup": 10,
      "addr2line": true,
      "privacylevel": 0,
      "etc_dnsmasq_d": false,
      "dnsmasq_lines": [],
      "extraLogging": false,
      "readOnly": false,
      "normalizeCPU": false,
      "hide_dnsmasq_warn": false,
      "hide_connection_error": false,
      "check": {
        "load": true,
        "shmem": 90,
        "disk": 90
      }
    },
    "debug": {
      "database": false,
      "networking": false,
      "locks": false,
      "queries": false,
      "flags": false,
      "shmem": false,
      "gc": false,
      "arp": false,
      "regex": false,
      "api": false,
      "tls": false,
      "overtime": false,
      "status": false,
      "caps": false,
      "dnssec": false,
      "vectors": false,
      "resolver": false,
      "edns0": false,
      "clients": false,
      "aliasclients": false,
      "events": false,
      "helper": false,
      "config": false,
      "inotify": false,
      "webserver": false,
      "extra": false,
      "reserved": false,
      "ntp": false,
      "netlink": false,
      "timing": false,
      "performance": false,
      "all": false
    },
    "took": 0.003
  }
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="change-configuration-of-your-pi-hole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="change-configuration-of-your-pi-hole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|» dns|object|false|none|none|
|» » upstreams|[string]|false|none|none|
|» » CNAMEdeepInspect|boolean|false|none|none|
|» » blockESNI|boolean|false|none|none|
|» » EDNS0ECS|boolean|false|none|none|
|» » ignoreLocalhost|boolean|false|none|none|
|» » showDNSSEC|boolean|false|none|none|
|» » analyzeOnlyAandAAAA|boolean|false|none|none|
|» » piholePTR|string|false|none|none|
|» » replyWhenBusy|string|false|none|none|
|» » blockTTL|integer|false|none|none|
|» » hosts|[string]|false|none|none|
|» » domainNeeded|boolean|false|none|none|
|» » expandHosts|boolean|false|none|none|
|» » domain|object|false|none|none|
|» » » name|string|false|none|none|
|» » » local|boolean|false|none|none|
|» » bogusPriv|boolean|false|none|none|
|» » dnssec|boolean|false|none|none|
|» » interface|string|false|none|none|
|» » hostRecord|string|false|none|none|
|» » listeningMode|string|false|none|none|
|» » queryLogging|boolean|false|none|none|
|» » cnameRecords|[string]|false|none|none|
|» » port|integer|false|none|none|
|» » localise|boolean|false|none|none|
|» » cache|object|false|none|none|
|» » » size|integer|false|none|none|
|» » » optimizer|integer|false|none|none|
|» » » upstreamBlockedTTL|integer|false|none|none|
|» » » rrtype|string|false|none|none|
|» » revServers|[string]|false|none|none|
|» » blocking|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » mode|string|false|none|none|
|» » » edns|string|false|none|none|
|» » specialDomains|object|false|none|none|
|» » » mozillaCanary|boolean|false|none|none|
|» » » iCloudPrivateRelay|boolean|false|none|none|
|» » » designatedResolver|boolean|false|none|none|
|» » reply|object|false|none|none|
|» » » host|object|false|none|none|
|» » » » force4|boolean|false|none|none|
|» » » » force6|boolean|false|none|none|
|» » » » IPv4|string|false|none|none|
|» » » » IPv6|string|false|none|none|
|» » » blocking|object|false|none|none|
|» » » » force4|boolean|false|none|none|
|» » » » force6|boolean|false|none|none|
|» » » » IPv4|string|false|none|none|
|» » » » IPv6|string|false|none|none|
|» » rateLimit|object|false|none|none|
|» » » count|integer|false|none|none|
|» » » interval|integer|false|none|none|
|» dhcp|object|false|none|none|
|» » active|boolean|false|none|none|
|» » start|string|false|none|none|
|» » end|string|false|none|none|
|» » router|string|false|none|none|
|» » netmask|string|false|none|none|
|» » leaseTime|string|false|none|none|
|» » ipv6|boolean|false|none|none|
|» » rapidCommit|boolean|false|none|none|
|» » multiDNS|boolean|false|none|none|
|» » logging|boolean|false|none|none|
|» » ignoreUnknownClients|boolean|false|none|none|
|» » hosts|[string]|false|none|none|
|» ntp|object|false|none|none|
|» » ipv4|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » address|string|false|none|none|
|» » ipv6|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » address|string|false|none|none|
|» » sync|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » server|string|false|none|none|
|» » » interval|integer|false|none|none|
|» » » count|integer|false|none|none|
|» » » rtc|object|false|none|none|
|» » » » set|boolean|false|none|none|
|» » » » device|string|false|none|none|
|» » » » utc|boolean|false|none|none|
|» resolver|object|false|none|none|
|» » resolveIPv4|boolean|false|none|none|
|» » resolveIPv6|boolean|false|none|none|
|» » macNames|boolean|false|none|none|
|» » networkNames|boolean|false|none|none|
|» » refreshNames|string|false|none|none|
|» database|object|false|none|none|
|» » DBimport|boolean|false|none|none|
|» » maxDBdays|integer|false|none|none|
|» » DBinterval|integer|false|none|none|
|» » useWAL|boolean|false|none|none|
|» » forceDisk|boolean|false|none|none|
|» » network|object|false|none|none|
|» » » parseARPcache|boolean|false|none|none|
|» » » expire|integer|false|none|none|
|» webserver|object|false|none|none|
|» » domain|string|false|none|none|
|» » acl|string|false|none|none|
|» » port|string|false|none|none|
|» » threads|integer|false|none|none|
|» » headers|[string]|false|none|none|
|» » serve_all|boolean|false|none|none|
|» » advancedOpts|[string]|false|none|none|
|» » session|object|false|none|none|
|» » » timeout|integer|false|none|none|
|» » » restore|boolean|false|none|none|
|» » tls|object|false|none|none|
|» » » cert|string|false|none|none|
|» » » validity|integer|false|none|none|
|» » paths|object|false|none|none|
|» » » webroot|string|false|none|none|
|» » » webhome|string|false|none|none|
|» » » prefix|string|false|none|none|
|» » interface|object|false|none|none|
|» » » boxed|boolean|false|none|none|
|» » » theme|string|false|none|none|
|» » api|object|false|none|none|
|» » » max_sessions|integer|false|none|none|
|» » » prettyJSON|boolean|false|none|none|
|» » » password|string|false|none|*Note:* Special write-only property used to change the password via the API.<br>|
|» » » pwhash|string|false|none|none|
|» » » totp_secret|string|false|none|none|
|» » » app_pwhash|string|false|none|none|
|» » » app_sudo|boolean|false|none|none|
|» » » cli_pw|boolean|false|none|none|
|» » » excludeClients|[string]|false|none|none|
|» » » excludeDomains|[string]|false|none|none|
|» » » maxHistory|integer|false|none|none|
|» » » maxClients|integer|false|none|none|
|» » » client_history_global_max|boolean|false|none|none|
|» » » allow_destructive|boolean|false|none|none|
|» » » temp|object|false|none|none|
|» » » » limit|number|false|none|none|
|» » » » unit|string|false|none|none|
|» files|object|false|none|none|
|» » pid|string|false|none|none|
|» » database|string|false|none|none|
|» » tmp_db|string|false|none|none|
|» » gravity|string|false|none|none|
|» » gravity_tmp|string|false|none|none|
|» » macvendor|string|false|none|none|
|» » pcap|string|false|none|none|
|» » log|object|false|none|none|
|» » » ftl|string|false|none|none|
|» » » dnsmasq|string|false|none|none|
|» » » webserver|string|false|none|none|
|» misc|object|false|none|none|
|» » nice|integer|false|none|none|
|» » delay_startup|integer|false|none|none|
|» » addr2line|boolean|false|none|none|
|» » etc_dnsmasq_d|boolean|false|none|none|
|» » privacylevel|integer|false|none|none|
|» » dnsmasq_lines|[string]|false|none|none|
|» » extraLogging|boolean|false|none|none|
|» » readOnly|boolean|false|none|none|
|» » normalizeCPU|boolean|false|none|none|
|» » hide_dnsmasq_warn|boolean|false|none|none|
|» » hide_connection_error|boolean|false|none|none|
|» » check|object|false|none|none|
|» » » load|boolean|false|none|none|
|» » » shmem|integer|false|none|none|
|» » » disk|integer|false|none|none|
|» debug|object|false|none|none|
|» » database|boolean|false|none|none|
|» » networking|boolean|false|none|none|
|» » locks|boolean|false|none|none|
|» » queries|boolean|false|none|none|
|» » flags|boolean|false|none|none|
|» » shmem|boolean|false|none|none|
|» » gc|boolean|false|none|none|
|» » arp|boolean|false|none|none|
|» » regex|boolean|false|none|none|
|» » api|boolean|false|none|none|
|» » tls|boolean|false|none|none|
|» » overtime|boolean|false|none|none|
|» » status|boolean|false|none|none|
|» » caps|boolean|false|none|none|
|» » dnssec|boolean|false|none|none|
|» » vectors|boolean|false|none|none|
|» » resolver|boolean|false|none|none|
|» » edns0|boolean|false|none|none|
|» » clients|boolean|false|none|none|
|» » aliasclients|boolean|false|none|none|
|» » events|boolean|false|none|none|
|» » helper|boolean|false|none|none|
|» » config|boolean|false|none|none|
|» » inotify|boolean|false|none|none|
|» » webserver|boolean|false|none|none|
|» » extra|boolean|false|none|none|
|» » reserved|boolean|false|none|none|
|» » ntp|boolean|false|none|none|
|» » netlink|boolean|false|none|none|
|» » timing|boolean|false|none|none|
|» » performance|boolean|false|none|none|
|» » all|boolean|false|none|none|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get special properties of your Pi-hole configuration

<a id="opIdget_config_props"></a>

> Code samples

```bash
curl "http://pi.hole/api/config/_properties?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /config/_properties`

This API hook returns a list of special properties in your Pi-hole configuration.


> Example responses

> 200 Response

```json
{
  "config": {
    "read_only": [
      {
        "key": "misc.readOnly",
        "reason": "read_only",
        "description": "Variable can only be set in pihole.toml, not via API"
      },
      {
        "key": "webserver.api.pwhash",
        "reason": "env_var",
        "description": "Set via environment variable"
      }
    ]
  }
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-special-properties-of-your-pi-hole-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-special-properties-of-your-pi-hole-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|» read_only|[object]|false|none|none|
|» » key|string|false|none|The name of the read-only property|
|» » reason|string|false|none|The reason why this property is read-only (machine-readable)|
|» » description|string|false|none|A human-readable description of the read-only reason|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get specific part of current configuration of your Pi-hole

<a id="opIdget_config_elem"></a>

> Code samples

```bash
curl "http://pi.hole/api/config/dns%2Fupstreams?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /config/{element}`

This API hook returns infos about the requested subset of your Pi-hole's configuration.
The response will be a filtered JSON object and a subset of the full `GET /config` response.


<h3 id="get-specific-part-of-current-configuration-of-your-pi-hole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detailed|query|boolean|false|Return detailed information about the configuration|
|element|path|string|true|config element|

> Example responses

> 200 Response

```json
{
  "config": {
    "dns": {
      "upstreams": [
        "127.0.0.1#5353",
        "8.8.8.8"
      ],
      "CNAMEdeepInspect": true,
      "blockESNI": true,
      "EDNS0ECS": true,
      "ignoreLocalhost": false,
      "showDNSSEC": true,
      "analyzeOnlyAandAAAA": false,
      "piholePTR": "PI.HOLE",
      "replyWhenBusy": "ALLOW",
      "blockTTL": 2,
      "hosts": [
        "192.168.2.123 mymusicbox"
      ],
      "domainNeeded": true,
      "expandHosts": true,
      "domain": {
        "name": "lan",
        "local": true
      },
      "bogusPriv": true,
      "dnssec": true,
      "interface": "eth0",
      "hostRecord": "",
      "listeningMode": "local",
      "queryLogging": true,
      "cnameRecords": [
        "*.example.com,default.example.com",
        "hourly.yetanother.com,yetanother.com,3600"
      ],
      "port": 53,
      "localise": true,
      "cache": {
        "size": 10000,
        "optimizer": 3600,
        "upstreamBlockedTTL": 86400,
        "rrtype": "ANY"
      },
      "revServers": [
        "true,192.168.0.0/24,192.168.0.1,lan"
      ],
      "blocking": {
        "active": true,
        "mode": "NULL",
        "edns": "NONE"
      },
      "specialDomains": {
        "mozillaCanary": true,
        "iCloudPrivateRelay": true,
        "designatedResolver": true
      },
      "reply": {
        "host": {
          "force4": false,
          "force6": false,
          "IPv4": "0.0.0.0",
          "IPv6": "::"
        },
        "blocking": {
          "force4": false,
          "force6": false,
          "IPv4": "0.0.0.0",
          "IPv6": "::"
        }
      },
      "rateLimit": {
        "count": 0,
        "interval": 0
      }
    },
    "dhcp": {
      "active": false,
      "start": "192.168.0.10",
      "end": "192.168.0.250",
      "router": "192.168.0.1",
      "netmask": "0.0.0.0",
      "leaseTime": "24h",
      "ipv6": false,
      "rapidCommit": false,
      "multiDNS": false,
      "logging": false,
      "ignoreUnknownClients": false,
      "hosts": [
        "11:22:33:44:55:66,192.168.1.123",
        "11:22:33:44:55:67,192.168.1.124,hostname"
      ]
    },
    "ntp": {
      "ipv4": {
        "active": true,
        "address": ""
      },
      "ipv6": {
        "active": true,
        "address": ""
      },
      "sync": {
        "active": true,
        "server": "pool.ntp.org",
        "interval": 3600,
        "count": 8,
        "rtc": {
          "set": true,
          "device": "",
          "utc": true
        }
      }
    },
    "resolver": {
      "resolveIPv4": true,
      "resolveIPv6": true,
      "macNames": true,
      "networkNames": true,
      "refreshNames": "IPV4_ONLY"
    },
    "database": {
      "DBimport": true,
      "maxDBdays": 365,
      "DBinterval": 60,
      "useWAL": true,
      "forceDisk": false,
      "network": {
        "parseARPcache": true,
        "expire": 365
      }
    },
    "webserver": {
      "domain": "pi.hole",
      "acl": "+0.0.0.0/0,::/0",
      "port": "80,[::]:80",
      "threads": 0,
      "headers": [
        "X-DNS-Prefetch-Control: off",
        "Content-Security-Policy: default-src 'none'; connect-src 'self'; font-src 'self'; frame-ancestors 'none'; img-src 'self'; manifest-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; form-action 'self'",
        "X-Frame-Options: DENY",
        "X-XSS-Protection: 0",
        "X-Content-Type-Options: nosniff",
        "Referrer-Policy: strict-origin-when-cross-origin"
      ],
      "serve_all": false,
      "advancedOpts": [
        "ssl_protocol_version=4"
      ],
      "session": {
        "timeout": 300,
        "restore": true
      },
      "tls": {
        "cert": "/etc/pihole/tls.pem",
        "validity": 47
      },
      "paths": {
        "webroot": "/var/www/html",
        "webhome": "/admin/",
        "prefix": ""
      },
      "interface": {
        "boxed": true,
        "theme": "default-darker"
      },
      "api": {
        "max_sessions": 16,
        "prettyJSON": false,
        "password": "********",
        "pwhash": "",
        "totp_secret": "",
        "app_pwhash": "",
        "app_sudo": false,
        "cli_pw": true,
        "excludeClients": [
          "1\\.2\\.3\\.4",
          "localhost",
          "fe80::345"
        ],
        "excludeDomains": [
          "google\\\\.de",
          "pi-hole\\.net"
        ],
        "maxHistory": 86400,
        "maxClients": 10,
        "client_history_global_max": true,
        "allow_destructive": true,
        "temp": {
          "limit": 60,
          "unit": "C"
        }
      }
    },
    "files": {
      "pid": "/run/pihole-FTL.pid",
      "database": "/etc/pihole/pihole-FTL.db",
      "tmp_db": "/etc/pihole/pihole-tmp.db",
      "gravity": "/etc/pihole/gravity.db",
      "gravity_tmp": "/tmp",
      "macvendor": "/etc/pihole/macvendor.db",
      "pcap": "",
      "log": {
        "ftl": "/var/log/pihole/FTL.log",
        "dnsmasq": "/var/log/pihole/pihole.log",
        "webserver": "/var/log/pihole/webserver.log"
      }
    },
    "misc": {
      "nice": -10,
      "delay_startup": 10,
      "addr2line": true,
      "privacylevel": 0,
      "etc_dnsmasq_d": false,
      "dnsmasq_lines": [],
      "extraLogging": false,
      "readOnly": false,
      "normalizeCPU": false,
      "hide_dnsmasq_warn": false,
      "hide_connection_error": false,
      "check": {
        "load": true,
        "shmem": 90,
        "disk": 90
      }
    },
    "debug": {
      "database": false,
      "networking": false,
      "locks": false,
      "queries": false,
      "flags": false,
      "shmem": false,
      "gc": false,
      "arp": false,
      "regex": false,
      "api": false,
      "tls": false,
      "overtime": false,
      "status": false,
      "caps": false,
      "dnssec": false,
      "vectors": false,
      "resolver": false,
      "edns0": false,
      "clients": false,
      "aliasclients": false,
      "events": false,
      "helper": false,
      "config": false,
      "inotify": false,
      "webserver": false,
      "extra": false,
      "reserved": false,
      "ntp": false,
      "netlink": false,
      "timing": false,
      "performance": false,
      "all": false
    },
    "took": 0.003
  }
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-specific-part-of-current-configuration-of-your-pi-hole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-specific-part-of-current-configuration-of-your-pi-hole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|object|false|none|none|
|» dns|object|false|none|none|
|» » upstreams|[string]|false|none|none|
|» » CNAMEdeepInspect|boolean|false|none|none|
|» » blockESNI|boolean|false|none|none|
|» » EDNS0ECS|boolean|false|none|none|
|» » ignoreLocalhost|boolean|false|none|none|
|» » showDNSSEC|boolean|false|none|none|
|» » analyzeOnlyAandAAAA|boolean|false|none|none|
|» » piholePTR|string|false|none|none|
|» » replyWhenBusy|string|false|none|none|
|» » blockTTL|integer|false|none|none|
|» » hosts|[string]|false|none|none|
|» » domainNeeded|boolean|false|none|none|
|» » expandHosts|boolean|false|none|none|
|» » domain|object|false|none|none|
|» » » name|string|false|none|none|
|» » » local|boolean|false|none|none|
|» » bogusPriv|boolean|false|none|none|
|» » dnssec|boolean|false|none|none|
|» » interface|string|false|none|none|
|» » hostRecord|string|false|none|none|
|» » listeningMode|string|false|none|none|
|» » queryLogging|boolean|false|none|none|
|» » cnameRecords|[string]|false|none|none|
|» » port|integer|false|none|none|
|» » localise|boolean|false|none|none|
|» » cache|object|false|none|none|
|» » » size|integer|false|none|none|
|» » » optimizer|integer|false|none|none|
|» » » upstreamBlockedTTL|integer|false|none|none|
|» » » rrtype|string|false|none|none|
|» » revServers|[string]|false|none|none|
|» » blocking|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » mode|string|false|none|none|
|» » » edns|string|false|none|none|
|» » specialDomains|object|false|none|none|
|» » » mozillaCanary|boolean|false|none|none|
|» » » iCloudPrivateRelay|boolean|false|none|none|
|» » » designatedResolver|boolean|false|none|none|
|» » reply|object|false|none|none|
|» » » host|object|false|none|none|
|» » » » force4|boolean|false|none|none|
|» » » » force6|boolean|false|none|none|
|» » » » IPv4|string|false|none|none|
|» » » » IPv6|string|false|none|none|
|» » » blocking|object|false|none|none|
|» » » » force4|boolean|false|none|none|
|» » » » force6|boolean|false|none|none|
|» » » » IPv4|string|false|none|none|
|» » » » IPv6|string|false|none|none|
|» » rateLimit|object|false|none|none|
|» » » count|integer|false|none|none|
|» » » interval|integer|false|none|none|
|» dhcp|object|false|none|none|
|» » active|boolean|false|none|none|
|» » start|string|false|none|none|
|» » end|string|false|none|none|
|» » router|string|false|none|none|
|» » netmask|string|false|none|none|
|» » leaseTime|string|false|none|none|
|» » ipv6|boolean|false|none|none|
|» » rapidCommit|boolean|false|none|none|
|» » multiDNS|boolean|false|none|none|
|» » logging|boolean|false|none|none|
|» » ignoreUnknownClients|boolean|false|none|none|
|» » hosts|[string]|false|none|none|
|» ntp|object|false|none|none|
|» » ipv4|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » address|string|false|none|none|
|» » ipv6|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » address|string|false|none|none|
|» » sync|object|false|none|none|
|» » » active|boolean|false|none|none|
|» » » server|string|false|none|none|
|» » » interval|integer|false|none|none|
|» » » count|integer|false|none|none|
|» » » rtc|object|false|none|none|
|» » » » set|boolean|false|none|none|
|» » » » device|string|false|none|none|
|» » » » utc|boolean|false|none|none|
|» resolver|object|false|none|none|
|» » resolveIPv4|boolean|false|none|none|
|» » resolveIPv6|boolean|false|none|none|
|» » macNames|boolean|false|none|none|
|» » networkNames|boolean|false|none|none|
|» » refreshNames|string|false|none|none|
|» database|object|false|none|none|
|» » DBimport|boolean|false|none|none|
|» » maxDBdays|integer|false|none|none|
|» » DBinterval|integer|false|none|none|
|» » useWAL|boolean|false|none|none|
|» » forceDisk|boolean|false|none|none|
|» » network|object|false|none|none|
|» » » parseARPcache|boolean|false|none|none|
|» » » expire|integer|false|none|none|
|» webserver|object|false|none|none|
|» » domain|string|false|none|none|
|» » acl|string|false|none|none|
|» » port|string|false|none|none|
|» » threads|integer|false|none|none|
|» » headers|[string]|false|none|none|
|» » serve_all|boolean|false|none|none|
|» » advancedOpts|[string]|false|none|none|
|» » session|object|false|none|none|
|» » » timeout|integer|false|none|none|
|» » » restore|boolean|false|none|none|
|» » tls|object|false|none|none|
|» » » cert|string|false|none|none|
|» » » validity|integer|false|none|none|
|» » paths|object|false|none|none|
|» » » webroot|string|false|none|none|
|» » » webhome|string|false|none|none|
|» » » prefix|string|false|none|none|
|» » interface|object|false|none|none|
|» » » boxed|boolean|false|none|none|
|» » » theme|string|false|none|none|
|» » api|object|false|none|none|
|» » » max_sessions|integer|false|none|none|
|» » » prettyJSON|boolean|false|none|none|
|» » » password|string|false|none|*Note:* Special write-only property used to change the password via the API.<br>|
|» » » pwhash|string|false|none|none|
|» » » totp_secret|string|false|none|none|
|» » » app_pwhash|string|false|none|none|
|» » » app_sudo|boolean|false|none|none|
|» » » cli_pw|boolean|false|none|none|
|» » » excludeClients|[string]|false|none|none|
|» » » excludeDomains|[string]|false|none|none|
|» » » maxHistory|integer|false|none|none|
|» » » maxClients|integer|false|none|none|
|» » » client_history_global_max|boolean|false|none|none|
|» » » allow_destructive|boolean|false|none|none|
|» » » temp|object|false|none|none|
|» » » » limit|number|false|none|none|
|» » » » unit|string|false|none|none|
|» files|object|false|none|none|
|» » pid|string|false|none|none|
|» » database|string|false|none|none|
|» » tmp_db|string|false|none|none|
|» » gravity|string|false|none|none|
|» » gravity_tmp|string|false|none|none|
|» » macvendor|string|false|none|none|
|» » pcap|string|false|none|none|
|» » log|object|false|none|none|
|» » » ftl|string|false|none|none|
|» » » dnsmasq|string|false|none|none|
|» » » webserver|string|false|none|none|
|» misc|object|false|none|none|
|» » nice|integer|false|none|none|
|» » delay_startup|integer|false|none|none|
|» » addr2line|boolean|false|none|none|
|» » etc_dnsmasq_d|boolean|false|none|none|
|» » privacylevel|integer|false|none|none|
|» » dnsmasq_lines|[string]|false|none|none|
|» » extraLogging|boolean|false|none|none|
|» » readOnly|boolean|false|none|none|
|» » normalizeCPU|boolean|false|none|none|
|» » hide_dnsmasq_warn|boolean|false|none|none|
|» » hide_connection_error|boolean|false|none|none|
|» » check|object|false|none|none|
|» » » load|boolean|false|none|none|
|» » » shmem|integer|false|none|none|
|» » » disk|integer|false|none|none|
|» debug|object|false|none|none|
|» » database|boolean|false|none|none|
|» » networking|boolean|false|none|none|
|» » locks|boolean|false|none|none|
|» » queries|boolean|false|none|none|
|» » flags|boolean|false|none|none|
|» » shmem|boolean|false|none|none|
|» » gc|boolean|false|none|none|
|» » arp|boolean|false|none|none|
|» » regex|boolean|false|none|none|
|» » api|boolean|false|none|none|
|» » tls|boolean|false|none|none|
|» » overtime|boolean|false|none|none|
|» » status|boolean|false|none|none|
|» » caps|boolean|false|none|none|
|» » dnssec|boolean|false|none|none|
|» » vectors|boolean|false|none|none|
|» » resolver|boolean|false|none|none|
|» » edns0|boolean|false|none|none|
|» » clients|boolean|false|none|none|
|» » aliasclients|boolean|false|none|none|
|» » events|boolean|false|none|none|
|» » helper|boolean|false|none|none|
|» » config|boolean|false|none|none|
|» » inotify|boolean|false|none|none|
|» » webserver|boolean|false|none|none|
|» » extra|boolean|false|none|none|
|» » reserved|boolean|false|none|none|
|» » ntp|boolean|false|none|none|
|» » netlink|boolean|false|none|none|
|» » timing|boolean|false|none|none|
|» » performance|boolean|false|none|none|
|» » all|boolean|false|none|none|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Add config array item

<a id="opIdadd_array_item"></a>

> Code samples

```bash
curl "http://pi.hole/api/config/dns%2Fupstreams/8.8.8.8?sid=${API_KEY}" \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /config/{element}/{value}`

*Note:* There will be no content on success.


<h3 id="add-config-array-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|element|path|string|true|config element|
|value|path|string|true|config value|
|restart|query|boolean|false|Restart FTL after a change would require this. This option can be used if you want to avoid a restart, e.g., when adding multiple items independently instead of all together at once. Note that you will have to restart FTL manually later to apply the changes.|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid path depth",
    "hint": "Use, e.g., DELETE /config/dns/upstreams/127.0.0.1 to remove \"127.0.0.1\" from config.dns.upstreams"
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="add-config-array-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Item created|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="add-config-array-item-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete config array item

<a id="opIddelete_array_item"></a>

> Code samples

```bash
curl "http://pi.hole/api/config/dns%2Fupstreams/8.8.8.8?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /config/{element}/{value}`

*Note:* There will be no content on success.


<h3 id="delete-config-array-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|element|path|string|true|config element|
|value|path|string|true|config value|
|restart|query|boolean|false|Restart FTL after a change would require this. This option can be used if you want to avoid a restart, e.g., when adding multiple items independently instead of all together at once. Note that you will have to restart FTL manually later to apply the changes.|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid path depth",
    "hint": "Use, e.g., DELETE /config/dns/upstreams/127.0.0.1 to remove \"127.0.0.1\" from config.dns.upstreams"
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-config-array-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Item deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="delete-config-array-item-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Export Pi-hole settings

<a id="opIdget_teleporter"></a>

> Code samples

```bash
curl "http://pi.hole/api/teleporter?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /teleporter`

Request an archived copy of your Pi-hole's current configuration.
Authentication via header or cookie is required for the endpoint.
The archive contains the password hashes and the TOTP secret, so application sessions without `webserver.api.app_sudo` cannot export it.


> Example responses

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 403 Response

```json
{
  "error": {
    "key": "forbidden",
    "message": "Unable to export configuration",
    "hint": "The current app session is not allowed to export Pi-hole config settings (webserver.api.app_sudo is false)"
  },
  "took": 0.003
}
```

<h3 id="export-pi-hole-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="export-pi-hole-settings-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Import Pi-hole settings

<a id="opIdpost_teleporter"></a>

> Code samples

```bash
curl "http://pi.hole/api/teleporter?sid=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json' \
  -F 'file=@/path/to/file' \
  -F 'import={"config":true,"dhcp_leases":true,"gravity":{"group":true,"adlist":true,"adlist_by_group":true,"domainlist":true,"domainlist_by_group":true,"client":true,"client_by_group":true}}'
```

`POST /teleporter`

Upload a Pi-hole Teleporter archive to (partially) restore from it. Note that this will overwrite your current configuration.
Authentication via header or cookie is required for the endpoint.


> Body parameter

```yaml
file: string
import:
  config: true
  dhcp_leases: true
  gravity:
    group: true
    adlist: true
    adlist_by_group: true
    domainlist: true
    domainlist_by_group: true
    client: true
    client_by_group: true
```

<h3 id="import-pi-hole-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» file|body|string(binary)|false|none|
|» import|body|object \| null|false|A JSON object of files to import. If omitted, all files will be imported.|
|» » config|body|boolean|false|Import Pi-hole configuration|
|» » dhcp_leases|body|boolean|false|Import Pi-hole DHCP leases|
|» » gravity|body|object|false|none|
|» » » group|body|boolean|false|Import Pi-hole's groups table|
|» » » adlist|body|boolean|false|Import Pi-hole's adlist table|
|» » » adlist_by_group|body|boolean|false|Import Pi-hole's table relating adlist entries to groups|
|» » » domainlist|body|boolean|false|Import Pi-hole's domainlist table|
|» » » domainlist_by_group|body|boolean|false|Import Pi-hole's table relating domainlist entries to groups|
|» » » client|body|boolean|false|Import Pi-hole's client table|
|» » » client_by_group|body|boolean|false|Import Pi-hole's table relating client entries to groups|

> Example responses

> 200 Response

```json
{
  "files": [
    "etc/pihole/pihole.toml",
    "etc/pihole/gravity.db->group",
    "etc/pihole/gravity.db->adlist",
    "etc/pihole/gravity.db->adlist_by_group"
  ],
  "took": 0.003
}
```

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "Invalid file",
    "hint": "The uploaded file does not appear to be a valid Pi-hole Teleporter archive"
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 403 Response

```json
{
  "error": {
    "key": "forbidden",
    "message": "Unable to change configuration (read-only)",
    "hint": "The current app session is not allowed to modify Pi-hole config settings (webserver.api.app_sudo is false)"
  },
  "took": 0.003
}
```

<h3 id="import-pi-hole-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="import-pi-hole-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|files|[string]|false|none|Files (and gravity tables) imported from the archive|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-network-information">Network information</h1>

Methods used to gather advanced information about your network

## Get info about the devices in your local network as seen by your Pi-hole

<a id="opIdget_network"></a>

> Code samples

```bash
curl "http://pi.hole/api/network/devices?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /network/devices`

This API hook returns infos about the devices in your local network as seen by your Pi-hole. By default, this number of shown devices is limited to 10. Devices are ordered by when your Pi-hole has received the last query from this device (most recent first)


<h3 id="get-info-about-the-devices-in-your-local-network-as-seen-by-your-pi-hole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_devices|query|integer|false|(Optional) Maximum number of devices to show|
|max_addresses|query|integer|false|(Optional) Maximum number of addresses to show per device|

> Example responses

> 200 Response

```json
{
  "devices": [
    {
      "id": 1,
      "hwaddr": "00:11:22:33:44:55",
      "interface": "enp2s0",
      "firstSeen": 1664623620,
      "lastQuery": 1664688620,
      "numQueries": 585462,
      "macVendor": "Digital Data Communications Asia Co.,Ltd",
      "ips": [
        {
          "ip": "192.168.1.51",
          "name": "ubuntu-server",
          "lastSeen": 1664688620,
          "nameUpdated": 1664688620
        }
      ]
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-info-about-the-devices-in-your-local-network-as-seen-by-your-pi-hole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-info-about-the-devices-in-your-local-network-as-seen-by-your-pi-hole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|devices|[object]|false|none|Array of devices|
|» id|integer|false|none|Device network table ID|
|» hwaddr|string|false|none|MAC address of this device|
|» interface|string|false|none|Interface this device is connected to|
|» firstSeen|integer|false|none|Unix timestamp when this device was first seen by your Pi-hole|
|» lastQuery|integer|false|none|Unix timestamp when your Pi-hole received the last query from this device|
|» numQueries|integer|false|none|Total number of queries your Pi-hole has received from this device|
|» macVendor|string \| null|false|none|Vendor name associated with the device's MAC address (if available)|
|» ips|[object]|false|none|none|
|» » ip|string|false|none|Associated IP address (can be IPv4 or IPv6)|
|» » name|string \| null|false|none|Associated hostname (can be null)|
|» » lastSeen|integer|false|none|Unix timestamp when your Pi-hole has seen this address the last time|
|» » nameUpdated|integer|false|none|Unix timestamp when device updated its hostname the last time|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Delete a device from the network table

<a id="opIddelete_device"></a>

> Code samples

```bash
curl "http://pi.hole/api/network/devices/1?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /network/devices/{device_id}`

This API hook deletes a device from the network table. This will also remove all associated IP addresses and hostnames.


<h3 id="delete-a-device-from-the-network-table-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|device_id|path|integer|true|Device ID|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "string",
    "message": "string",
    "hint": "string"
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="delete-a-device-from-the-network-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content (deleted)|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Not found|Inline|

<h3 id="delete-a-device-from-the-network-table-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get info about the gateway of your Pi-hole

<a id="opIdget_gateway"></a>

> Code samples

```bash
curl "http://pi.hole/api/network/gateway?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /network/gateway`

This API hook returns infos about the gateway of your Pi-hole.

If the optional parameter `detailed` is set to `true`, the response will include detailed information about the individual interfaces and routes. Note that the available information is dependent on the interface type and state.


<h3 id="get-info-about-the-gateway-of-your-pi-hole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detailed|query|boolean|false|(Optional) Detailed interface/routing information|

> Example responses

> 200 Response

```json
{
  "gateway": [
    {
      "family": "inet",
      "interface": "eth0",
      "address": "192.168.0.1",
      "local": [
        "192.168.0.22"
      ]
    },
    {
      "family": "inet6",
      "interface": "eth0",
      "address": "fe80::3587:2fff:f11a:1",
      "local": [
        "fe80::3587:2fff:f11a:4321"
      ]
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-info-about-the-gateway-of-your-pi-hole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-info-about-the-gateway-of-your-pi-hole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|gateway|[object]|false|none|none|
|» family|string|false|none|Address family|
|» interface|string \| null|false|none|Interface name (`null` for a multipath default route without a single outgoing interface)|
|» address|string \| null|false|none|Gateway address (`null` if the default route has no gateway address, e.g. a route via a point-to-point interface)|
|» local|[string]|false|none|Local interface addresses|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get info about the routes of your Pi-hole

<a id="opIdget_routes"></a>

> Code samples

```bash
curl "http://pi.hole/api/network/routes?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /network/routes`

This API hook returns infos about the networking routes of your Pi-hole. Note that not all described fields are applicable to any routing type. Users must not rely on the presence of any field without checking the route type first.

If the optional parameter `detailed` is set to `true`, the response will include more detailed information about the individual routes where the available information is dependent on the route type and state.


<h3 id="get-info-about-the-routes-of-your-pi-hole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detailed|query|boolean|false|(Optional) Detailed interface/routing information|

> Example responses

> 200 Response

```json
{
  "routes": [
    {
      "family": "inet",
      "table": 254,
      "protocol": "static",
      "scope": "universe",
      "type": "unicast",
      "flags": [],
      "gateway": "192.168.0.1",
      "oif": "eth0"
    },
    {
      "family": "inet",
      "table": 254,
      "protocol": "boot",
      "scope": "link",
      "type": "unicast",
      "flags": [],
      "dst": "10.1.0.0",
      "oif": "wg0"
    },
    {
      "family": "inet",
      "table": 255,
      "protocol": "kernel",
      "scope": "host",
      "type": "local",
      "flags": [],
      "dst": "127.0.0.1",
      "prefsrc": "127.0.0.1",
      "oif": "lo"
    },
    {
      "family": "inet6",
      "table": 255,
      "protocol": "kernel",
      "scope": "universe",
      "type": "local",
      "flags": [],
      "dst": "::1",
      "priority": 0,
      "oif": "eth0"
    },
    {
      "family": "inet6",
      "table": 254,
      "protocol": "static",
      "scope": "universe",
      "type": "unicast",
      "flags": [],
      "gateway": "fe80::3587:2fff:f11a:4321",
      "oif": "eth0"
    },
    {
      "family": "inet6",
      "table": 255,
      "protocol": "kernel",
      "scope": "universe",
      "type": "multicast",
      "flags": [],
      "dst": "fd00:4711::",
      "priority": 5,
      "oif": "wg0"
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-info-about-the-routes-of-your-pi-hole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-info-about-the-routes-of-your-pi-hole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|routes|[object]|false|none|Array of routes|
|» gateway|string|false|none|Gateway address|
|» family|string|false|none|Address family|
|» table|integer|false|none|Routing table ID (0 = unspecified, 253 = default, 254 = local, 255 = local, other = user-defined)|
|» protocol|string|false|none|Routing protocol|
|» scope|string|false|none|Routing scope|
|» type|string|false|none|Routing type|
|» flags|[string]|false|none|Array of route flags|
|» oif|string|false|none|Outgoing interface|
|» iif|string|false|none|Incoming interface|
|» dst|string|false|none|Destination address (or "default" for the default route)|
|» src|string|false|none|Source address|
|» prefsrc|string|false|none|Preferred source address|
|» priority|integer|false|none|Route priority|
|» pref|integer|false|none|Route preference|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» family|inet|
|» family|inet6|
|» family|link|
|» family|mpls|
|» family|bridge|
|» family|???|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Get info about the interfaces of your Pi-hole

<a id="opIdget_interfaces"></a>

> Code samples

```bash
curl "http://pi.hole/api/network/interfaces?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /network/interfaces`

This API hook returns infos about the networking interfaces of your Pi-hole. Note that not all described fields are applicable to any routing type. Users must not rely on the presence of any field without checking the route type first.

If the optional parameter `detailed` is set to `true`, the response will include more detailed information about the individual interfaces where the available information is dependent on the interface type and state.


<h3 id="get-info-about-the-interfaces-of-your-pi-hole-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detailed|query|boolean|false|(Optional) Detailed interface/routing information|

> Example responses

> 200 Response

```json
{
  "interfaces": [
    {
      "name": "lo",
      "speed": null,
      "type": "loopback",
      "flags": [
        "up",
        "loopback",
        "running",
        "lower_up"
      ],
      "state": "unknown",
      "carrier": true,
      "address": "00:00:00:00:00:00",
      "broadcast": "00:00:00:00:00:00",
      "stats": {
        "rx_bytes": {
          "value": 81.6571641,
          "unit": "MB"
        },
        "tx_bytes": {
          "value": 648.818,
          "unit": "MB"
        }
      },
      "addresses": [
        {
          "address": "127.0.0.1",
          "address_type": "loopback",
          "local": "127.0.0.1",
          "local_type": "loopback",
          "family": "inet",
          "scope": "host",
          "flags": [
            "permanent"
          ],
          "prefixlen": 8,
          "label": "lo",
          "prefered": 4294967295,
          "valid": 4294967295,
          "cstamp": 1720989931,
          "tstamp": 1720989931
        },
        {
          "address": "::1",
          "address_type": "loopback",
          "local": "::1",
          "local_type": "loopback",
          "family": "inet6",
          "scope": "host",
          "flags": [
            "permanent"
          ],
          "prefixlen": 128,
          "label": "lo",
          "prefered": 4294967295,
          "valid": 4294967295,
          "cstamp": 1720989931.1,
          "tstamp": 1720989931.1
        }
      ]
    },
    {
      "name": "eth0",
      "speed": 1000,
      "type": "ether",
      "flags": [
        "up",
        "broadcast",
        "running",
        "multicast",
        "lower_up"
      ],
      "state": "up",
      "carrier": true,
      "address": "00:11:22:33:44:55",
      "broadcast": "ff:ff:ff:ff:ff:ff",
      "perm_address": "00:11:22:33:44:55",
      "stats": {
        "rx_bytes": {
          "value": 15.5585,
          "unit": "GB"
        },
        "tx_bytes": {
          "value": 1.55858,
          "unit": "GB"
        }
      },
      "addresses": [
        {
          "address": "192.168.0.123",
          "address_type": "private",
          "local": "192.168.0.123",
          "local_type": "private",
          "family": "inet",
          "scope": "universe",
          "flags": [
            "permanent"
          ],
          "prefixlen": 24,
          "label": "eth0",
          "prefered": 4294967295,
          "valid": 4294967295,
          "cstamp": 1720989931.1,
          "tstamp": 1720989931.1
        },
        {
          "address": "2001:db8::1234:5678:9abc:def0",
          "address_type": "global (GUA)",
          "family": "inet6",
          "scope": "universe",
          "flags": [],
          "prefixlen": 64,
          "label": "eth0",
          "prefered": 3461,
          "valid": 7061,
          "cstamp": 2789057.25,
          "tstamp": 2789057.25
        },
        {
          "address": "fd29:db8::1234:5678:9abc:def0",
          "address_type": "site-local (ULA)",
          "family": "inet6",
          "scope": "universe",
          "flags": [],
          "prefixlen": 64,
          "label": "eth0",
          "prefered": 3461,
          "valid": 7061,
          "cstamp": 1720989931.1,
          "tstamp": 1720989931.1
        },
        {
          "address": "fe80::1234:5678:9abc:def0",
          "address_type": "link-local (LL)",
          "family": "inet6",
          "scope": "link",
          "flags": [
            "permanent"
          ],
          "prefixlen": 64,
          "label": "eth0",
          "prefered": 4294967295,
          "valid": 4294967295,
          "cstamp": 1720989931.1,
          "tstamp": 1720989931.1
        }
      ]
    },
    {
      "name": "wg0",
      "speed": null,
      "type": "none",
      "flags": [
        "up",
        "pointopoint",
        "running",
        "noarp",
        "lower_up"
      ],
      "state": "unknown",
      "carrier": true,
      "stats": {
        "rx_bytes": {
          "value": 458.44598,
          "unit": "MB"
        },
        "tx_bytes": {
          "value": 5.5895,
          "unit": "MB"
        }
      },
      "addresses": [
        {
          "address": "10.1.0.1",
          "address_type": "private",
          "local": "10.1.0.1",
          "local_type": "private",
          "family": "inet",
          "scope": "universe",
          "flags": [
            "permanent"
          ],
          "prefixlen": 24,
          "label": "wg0",
          "prefered": 4294967295,
          "valid": 4294967295,
          "cstamp": 1720989931.1,
          "tstamp": 1720989931.1
        },
        {
          "address": "fd00:4711::1",
          "address_type": "site-local (ULA)",
          "family": "inet6",
          "scope": "global",
          "flags": [
            "permanent"
          ],
          "prefixlen": 64,
          "label": "wg0",
          "prefered": 4294967295,
          "valid": 4294967295,
          "cstamp": 1720989931.1,
          "tstamp": 1720989931.1
        }
      ]
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-info-about-the-interfaces-of-your-pi-hole-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-info-about-the-interfaces-of-your-pi-hole-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|interfaces|[object]|false|none|Interface information|
|» name|string|false|none|Interface name|
|» speed|integer \| null|false|none|Speed of the interface in Mbit/s (`null` if not applicable)|
|» carrier|boolean|false|none|Whether the interface is connected|
|» type|string|false|none|Type of the interface|
|» flags|[string]|false|none|Array of address flags|
|» state|string|false|none|State of the interface|
|» proto_down|boolean|false|none|Whether the interface is administratively down|
|» address|string|false|none|Interface hardware address|
|» broadcast|string|false|none|Interface broadcast address|
|» perm_address|string|false|none|Interface permanent hardware address|
|» stats|object|false|none|none|
|» » rx_bytes|object|false|none|Interface received bytes|
|» » » value|number|false|none|Number of received bytes|
|» » » unit|string|false|none|Unit of the received bytes|
|» » tx_bytes|object|false|none|Interface transmitted bytes|
|» » » value|number|false|none|Number of transmitted bytes|
|» » » unit|string|false|none|Unit of the transmitted bytes|
|» addresses|[object]|false|none|Array of associated IPv addresses|
|» » address|string|false|none|Interface address|
|» » address_type|string|false|none|Type of the interface address|
|» » broadcast|string|false|none|Interface broadcast address|
|» » broadcast_type|string|false|none|Type of the broadcast address|
|» » local|string|false|none|Local address|
|» » local_type|string|false|none|Type of the local address|
|» » label|string|false|none|Interface label|
|» » family|string|false|none|Address family|
|» » flags|[string]|false|none|Array of address flags|
|» » prefixlen|integer|false|none|Prefix length of the interface address|
|» » scope|string|false|none|Address scope|
|» » prefered|integer|false|none|Preferred lifetime of the address (`4294967295` = forever)|
|» » valid|integer|false|none|Valid lifetime of the address (`4294967295` = forever)|
|» » cstamp|number|false|none|Creation timestamp of the address|
|» » tstamp|number|false|none|Updated timestamp of the address|
|took|number|false|none|Time in seconds it took to process the request|

#### Enumerated Values

|Property|Value|
|---|---|
|» » family|inet|
|» » family|inet6|
|» » family|link|
|» » family|mpls|
|» » family|bridge|
|» » family|???|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-actions">Actions</h1>

Methods used to trigger certain actions on your Pi-hole

## Run gravity

<a id="opIdaction_gravity"></a>

> Code samples

```bash
curl "http://pi.hole/api/action/gravity?sid=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /action/gravity`

Update Pi-hole's adlists by running `pihole -g`. The output of the process is streamed with chunked encoding. Use the optional `color` query parameter to include ANSI color escape codes in the output. Only one run can be in progress at a time, a request while one is running is refused with 409.


<h3 id="run-gravity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|color|query|boolean|false|Include ANSI color escape codes in the streamed output. Defaults to false to prevent colored output for API consumers that don't need formatting.|

> Example responses

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 409 Response

```json
{
  "error": {
    "key": "gravity_running",
    "message": "Gravity is already running",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="run-gravity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|409|Conflict|Conflict|Inline|

<h3 id="run-gravity-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **409**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Restart pihole-FTL

<a id="opIdaction_restartdns"></a>

> Code samples

```bash
curl "http://pi.hole/api/action/restartdns?sid=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /action/restartdns`

Restarts the pihole-FTL service


> Example responses

> 200 Response

```json
{
  "status": "success",
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="restart-pihole-ftl-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="restart-pihole-ftl-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Key indicating the status of the request|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Flush the DNS logs

<a id="opIdaction_flushlogs"></a>

> Code samples

```bash
curl "http://pi.hole/api/action/flush/logs?sid=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /action/flush/logs`

Flushes the DNS logs. This includes emptying the DNS log file and purging the most recent 24 hours from both the database and FTL's internal memory.


> Example responses

> 200 Response

```json
{
  "status": "success",
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="flush-the-dns-logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="flush-the-dns-logs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Key indicating the status of the request|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Flush the network table

<a id="opIdaction_flusharp"></a>

> Code samples

```bash
curl "http://pi.hole/api/action/flush/arp?sid=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /action/flush/arp`

<aside class="warning">
This operation is deprecated
</aside>

Deprecated! Use '/action/flush/network' instead.
Flushes the network table. This includes removing both all known devices and their associated addresses.


> Example responses

> 200 Response

```json
{
  "status": "success",
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 403 Response

```json
{
  "error": {
    "key": "forbidden",
    "message": "<Action name> is not allowed",
    "hint": "Check setting webserver.api.allow_destructive"
  }
}
```

<h3 id="flush-the-network-table-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="flush-the-network-table-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Key indicating the status of the request|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Flush the network table

<a id="opIdaction_flushnetwork"></a>

> Code samples

```bash
curl "http://pi.hole/api/action/flush/network?sid=${API_KEY}" \
  -X POST \
  -H 'Accept: application/json'
```

`POST /action/flush/network`

Flushes the network table. This includes removing both all known devices and their associated addresses.


> Example responses

> 200 Response

```json
{
  "status": "success",
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 403 Response

```json
{
  "error": {
    "key": "forbidden",
    "message": "<Action name> is not allowed",
    "hint": "Check setting webserver.api.allow_destructive"
  },
  "took": 0.003
}
```

<h3 id="flush-the-network-table-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|
|403|Forbidden|Forbidden|Inline|

<h3 id="flush-the-network-table-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Key indicating the status of the request|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-padd">PADD</h1>

Methods used to query Pi-hole from PADD

## Get summarized data for PADD

<a id="opIdget_padd"></a>

> Code samples

```bash
curl "http://pi.hole/api/padd?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /padd`

<h3 id="get-summarized-data-for-padd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|full|query|boolean|false|(Optional) Return full data|

> Example responses

> 200 Response

```json
{
  "recent_blocked": "bad.example.com",
  "top_domain": "good.example.com",
  "top_blocked": "bad.example.com",
  "top_client": "localhost",
  "active_clients": 22,
  "gravity_size": 225382,
  "blocking": "enabled",
  "queries": {
    "total": 92258,
    "blocked": 4784,
    "percent_blocked": 5.18,
    "query_frequency": 1.1
  },
  "cache": {
    "size": 10000,
    "inserted": 233,
    "evicted": 0
  },
  "iface": {
    "v4": {
      "addr": "192.168.2.11",
      "rx_bytes": {
        "value": 76.46,
        "unit": "G"
      },
      "tx_bytes": {
        "value": 68.58,
        "unit": "G"
      },
      "num_addrs": 1,
      "name": "eth0",
      "gw_addr": "192.168.2.1"
    },
    "v6": {
      "addr": "fe80::b0e4:1b1e:7b7d:5855",
      "num_addrs": 3,
      "name": "eth0",
      "gw_addr": "fe80::b0e4:1b1e:7b7d:1b1e"
    }
  },
  "node_name": "pihole",
  "host_model": "Raspberry Pi 3 Model B Plus Rev 1.3",
  "config": {
    "dhcp_active": true,
    "dhcp_start": "192.168.0.1",
    "dhcp_end": "192.168.0.254",
    "dhcp_ipv6": false,
    "dns_domain": "lan",
    "dns_port": 53,
    "dns_num_upstreams": 1,
    "dns_dnssec": true,
    "dns_revServer_active": false,
    "privacy_level": 0
  },
  "%cpu": 0,
  "%mem": 1.5,
  "pid": 1639,
  "sensors": {
    "cpu_temp": 45,
    "hot_limit": 80,
    "unit": "C"
  },
  "system": {
    "uptime": 67906,
    "memory": {
      "ram": {
        "total": 10317877,
        "free": 308736,
        "used": 8920416,
        "available": 972304,
        "%used": 26.854
      },
      "swap": {
        "total": 10317877,
        "used": 8920416,
        "free": 308736,
        "%used": 1.67
      }
    },
    "procs": 1452,
    "cpu": {
      "nprocs": 8,
      "%cpu": 0,
      "load": {
        "raw": [
          0.58837890625,
          0.64990234375,
          0.66748046875
        ],
        "percent": [
          4.903157711029053,
          5.415853023529053,
          5.562337398529053
        ]
      }
    },
    "ftl": {
      "%mem": 0.1,
      "%cpu": 1.2
    }
  },
  "version": {
    "core": {
      "local": {
        "branch": "development",
        "version": "v6.1",
        "hash": "955e36a9"
      },
      "remote": {
        "version": "v6.1",
        "hash": "955e36a9"
      }
    },
    "web": {
      "local": {
        "branch": "devel",
        "version": "v6.1",
        "hash": "f69f7e88"
      },
      "remote": {
        "version": "v6.1",
        "hash": "f69f7e88"
      }
    },
    "ftl": {
      "local": {
        "branch": "development",
        "version": "v6.1",
        "hash": "64441ed6-dirty",
        "date": "2023-01-09 20:25:24 +0100"
      },
      "remote": {
        "version": "v6.1",
        "hash": "64441ed6"
      }
    },
    "docker": {
      "local": "v6.1",
      "remote": "v6.1"
    }
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-summarized-data-for-padd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-summarized-data-for-padd-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recent_blocked|string \| null|false|none|Most recent blocked domain|
|top_domain|string \| null|false|none|Most requested domain|
|top_blocked|string \| null|false|none|Most blocked domain|
|top_client|string \| null|false|none|Most active client|
|active_clients|integer|false|none|Number of active clients|
|gravity_size|integer|false|none|Gravity list size|
|blocking|string|false|none|Blocking status|
|queries|object|false|none|none|
|» total|integer|false|none|Total number of queries within the last 24 hours|
|» blocked|integer|false|none|Number of blocked queries|
|» percent_blocked|number|false|none|Percentage of blocked queries|
|» query_frequency|number|false|none|Average number of queries per second|
|cache|object|false|none|none|
|» size|integer|false|none|Total cache size|
|» inserted|integer|false|none|Number of inserted cache entries|
|» evicted|integer|false|none|Number of evicted cache entries|
|iface|object|false|none|Default interfaces|
|» v4|object|false|none|IPv4 interface|
|» » addr|string \| null|false|none|Primary address|
|» » rx_bytes|object|false|none|Received bytes|
|» » » value|number|false|none|none|
|» » » unit|string|false|none|none|
|» » tx_bytes|object|false|none|Transmitted bytes|
|» » » value|number|false|none|none|
|» » » unit|string|false|none|none|
|» » num_addrs|integer|false|none|Number of addresses on the interface|
|» » name|string|false|none|Interface name|
|» » gw_addr|string \| null|false|none|Gateway address|
|» v6|object|false|none|IPv6 interface|
|» » addr|string \| null|false|none|Primary address|
|» » num_addrs|integer|false|none|Number of addresses on the interface|
|» » name|string|false|none|Interface name|
|» » gw_addr|string \| null|false|none|Gateway address|
|node_name|string|false|none|Pi-hole host's name|
|host_model|string \| null|false|none|Host model|
|config|object|false|none|Pi-hole configuration (excerpt)|
|» dhcp_active|boolean|false|none|DHCP server status|
|» dhcp_start|string|false|none|DHCP start address|
|» dhcp_end|string|false|none|DHCP end address|
|» dhcp_ipv6|boolean|false|none|DHCPv6 server status|
|» dns_domain|string|false|none|DNS domain|
|» dns_port|integer|false|none|DNS port|
|» dns_num_upstreams|integer|false|none|Number of upstream DNS servers|
|» dns_dnssec|boolean|false|none|DNSSEC status|
|» dns_revServer_active|boolean|false|none|Reverse DNS server status|
|» privacy_level|integer|false|none|Privacy level|
|%cpu|number|false|none|CPU usage|
|%mem|number|false|none|Memory usage|
|pid|integer|false|none|FTL's process ID|
|sensors|object|false|none|none|
|» cpu_temp|number \| null|false|none|CPU temperature|
|» hot_limit|number|false|none|Temperature limit|
|» unit|string|false|none|Temperature unit|
|system|object|false|none|none|
|» uptime|integer|false|none|How long the system has been running (seconds)|
|» memory|object|false|none|Memory info given in kilobytes|
|» » ram|object|false|none|RAM|
|» » » total|integer|false|none|Total RAM|
|» » » free|integer|false|none|Total free RAM|
|» » » used|integer|false|none|Used RAM|
|» » » available|integer|false|none|Total available RAM|
|» » » %used|number|false|none|Used RAM in percent|
|» » swap|object|false|none|swap memory|
|» » » total|integer|false|none|Total swap|
|» » » used|integer|false|none|Used swap|
|» » » free|integer|false|none|Total free swap memory|
|» » » %used|number|false|none|Used swap in percent|
|» procs|integer|false|none|Number of current processes|
|» cpu|object|false|none|CPU info|
|» » nprocs|integer|false|none|Number of available processors|
|» » %cpu|number|false|none|Total CPU usage in percent (may be higher than 100% on multi-core systems and negative if the value cannot be computed)|
|» » load|object|false|none|1, 5, and 15 minute load averages|
|» » » raw|[number]|false|none|raw values|
|» » » percent|[number]|false|none|raw values|
|» ftl|object|false|none|FTL process info|
|» » %mem|number|false|none|Percentage of total RAM memory used by FTL|
|» » %cpu|number|false|none|Percentage of total CPU used by FTL|
|version|object|false|none|none|
|» core|object|false|none|none|
|» » local|object|false|none|none|
|» » » branch|string \| null|false|none|Local Pi-hole Core branch|
|» » » version|string \| null|false|none|Local Pi-hole Core version|
|» » » hash|string \| null|false|none|Local Pi-hole Core hash|
|» » remote|object|false|none|none|
|» » » version|string \| null|false|none|Remote (Github) Pi-hole Core version (null if on custom branch)|
|» » » hash|string \| null|false|none|Remote (Github) Pi-hole Core hash|
|» web|object|false|none|none|
|» » local|object|false|none|none|
|» » » branch|string \| null|false|none|Local Pi-hole Web branch|
|» » » version|string \| null|false|none|Local Pi-hole Web version|
|» » » hash|string \| null|false|none|Local Pi-hole Web hash|
|» » remote|object|false|none|none|
|» » » version|string \| null|false|none|Remote (Github) Pi-hole Web version (null if on custom branch)|
|» » » hash|string \| null|false|none|Remote (Github) Pi-hole Web hash|
|» ftl|object|false|none|none|
|» » local|object|false|none|none|
|» » » branch|string \| null|false|none|Local Pi-hole FTL branch|
|» » » version|string \| null|false|none|Local Pi-hole FTL version|
|» » » hash|string \| null|false|none|Local Pi-hole FTL hash|
|» » » date|string \| null|false|none|Build time of your local Pi-hole FTL|
|» » remote|object|false|none|none|
|» » » version|string \| null|false|none|Remote (Github) Pi-hole FTL version (null if on custom branch)|
|» » » hash|string \| null|false|none|Remote (Github) Pi-hole FTL hash|
|» docker|object|false|none|none|
|» » local|string \| null|false|none|Local Pi-hole Docker image version (`null` if not running in Docker)|
|» » remote|string \| null|false|none|Remote (Docker Hub) Pi-hole Docker image version (`null` if not running in Docker)|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-default">Default</h1>

## get_domain

<a id="opIdget_domain"></a>

> Code samples

```bash
curl "http://pi.hole/api/domains/allow/exact/testdomain.com?sid=${API_KEY}"
```

`GET /domains/{type}/{kind}/{domain}`

<h3 id="getdomain-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type (allowed or denied domain)|
|kind|path|string|true|Kind (exact domain or regular expression)|
|domain|path|string|true|Domain|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|deny|
|kind|exact|
|kind|regex|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## get_type_kind_domains

<a id="opIdget_type_kind_domains"></a>

> Code samples

```bash
curl "http://pi.hole/api/domains/allow/exact?sid=${API_KEY}"
```

`GET /domains/{type}/{kind}`

<h3 id="gettypekinddomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type (allowed or denied domain)|
|kind|path|string|true|Kind (exact domain or regular expression)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|deny|
|kind|exact|
|kind|regex|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## get_type_domains

<a id="opIdget_type_domains"></a>

> Code samples

```bash
curl "http://pi.hole/api/domains/allow?sid=${API_KEY}"
```

`GET /domains/{type}`

<h3 id="gettypedomains-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Type (allowed or denied domain)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|allow|
|type|deny|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## get_domains

<a id="opIdget_domains"></a>

> Code samples

```bash
curl "http://pi.hole/api/domains?sid=${API_KEY}"
```

`GET /domains`

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-dhcp">DHCP</h1>

## Get currently active DHCP leases

<a id="opIdget_dhcp"></a>

> Code samples

```bash
curl "http://pi.hole/api/dhcp/leases?sid=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /dhcp/leases`

This API hook returns the currently active DHCP leases.


> Example responses

> 200 Response

```json
{
  "leases": [
    {
      "expires": 1675671991,
      "name": "raspberrypi",
      "hwaddr": "00:00:00:00:00:00",
      "ip": "192.168.2.111",
      "clientid": "00:00:00:00:00:00"
    }
  ],
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

<h3 id="get-currently-active-dhcp-leases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|401|Unauthorized|Unauthorized|Inline|

<h3 id="get-currently-active-dhcp-leases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|leases|[object]|false|none|DHCP leases|
|» expires|integer|false|none|Expiration time (0 = infinite lease, never expires)|
|» name|string|false|none|Hostname|
|» hwaddr|string|false|none|Hardware (MAC) address|
|» ip|string|false|none|IP address|
|» clientid|string|false|none|Client ID|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

## Remove DHCP lease

<a id="opIddelete_dhcp"></a>

> Code samples

```bash
curl "http://pi.hole/api/dhcp/leases/192.168.2.222?sid=${API_KEY}" \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /dhcp/leases/{ip}`

This API hook removes a currently active DHCP lease.
Managing DHCP leases is only possible when the DHCP server is enabled.
*Note:* There will be no content on success.


<h3 id="remove-dhcp-lease-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ip|path|string|true|IP address of lease to be modified|

> Example responses

> 400 Response

```json
{
  "error": {
    "key": "bad_request",
    "message": "The provided IP address is invalid",
    "hint": "192.168.2"
  },
  "took": 0.003
}
```

> 401 Response

```json
{
  "error": {
    "key": "unauthorized",
    "message": "Unauthorized",
    "hint": null
  },
  "took": 0.003
}
```

> 404 Response

```json
{
  "took": 0.003
}
```

<h3 id="remove-dhcp-lease-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Item deleted|None|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized|Inline|
|404|Not Found|Item not found|Inline|

<h3 id="remove-dhcp-lease-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|Further details|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|none|
|» key|string|false|none|Machine-readable error type|
|» message|string|false|none|Human-readable error message|
|» hint|string \| null|false|none|No additional data available|
|took|number|false|none|Time in seconds it took to process the request|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|took|number|false|none|Time in seconds it took to process the request|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
query_sid, cookie_sid, header_sid, x_header_sid
</aside>

<h1 id="pi-hole-api-documentation">Documentation</h1>

## Get the embedded API documentation rendered as HTML

<a id="opIdget_docs"></a>

> Code samples

```bash
curl http://pi.hole/api/docs
```

`GET /docs`

This API hook returns the embedded API documentation rendered as HTML. Note that this endpoint is supposed to be accessed from web browsers only. The automatically generated `curl` example will *not* create a *full* (as in: self-contained) clone of the documentation.


<h3 id="get-the-embedded-api-documentation-rendered-as-html-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<aside class="success">
This operation does not require authentication
</aside>
