<h1 id="filerise-api">FileRise API v3.3.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://raw.githubusercontent.com/">https://raw.githubusercontent.com/</a> - Same-origin server

# Authentication

* API Key (cookieAuth)
    - Parameter Name: **PHPSESSID**, in: cookie. Session cookie used for authenticated endpoints

* API Key (CsrfHeader)
    - Parameter Name: **X-CSRF-Token**, in: header. CSRF token header required for state-changing requests

<h1 id="filerise-api-admin">Admin</h1>

Admin endpoints

## Get ACL grants for a user

<a id="opIdadminGetAclGrants"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/admin/acl/getGrants.php?user=johndoe' \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/admin/acl/getGrants.php`

Returns explicit and inherited folder grants for a user.

<h3 id="get-acl-grants-for-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|query|string|true|none|
|sourceId|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "grants": {}
}
```

<h3 id="get-acl-grants-for-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Grants map|Inline|
|400|Bad Request|Invalid user|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Server error|None|

<h3 id="get-acl-grants-for-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grants|object|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Save ACL grants

<a id="opIdadminSaveAclGrants"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/acl/saveGrants.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "user": "johndoe",
    "sourceId": "local",
    "grants": {}
  }'
```

`POST /api/admin/acl/saveGrants.php`

Saves per-folder ACL grants for one user or a batch of users.

> Body parameter

```json
{
  "user": "johndoe",
  "sourceId": "local",
  "grants": {}
}
```

<h3 id="save-acl-grants-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» user|body|string|true|none|
|» sourceId|body|string|false|none|
|» grants|body|object|true|Map of folder -> capabilities|
|» *oneOf*|body|object|false|none|
|» sourceId|body|string|false|none|
|» changes|body|[object]|true|none|
|» » user|body|string|true|none|
|» » grants|body|object|true|none|

<h3 id="save-acl-grants-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Save result (model-defined JSON)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Invalid CSRF token|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Admin reset user password

<a id="opIdadminChangeUserPassword"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/changeUserPassword.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "username": "johndoe",
    "newPassword": "newpass123"
  }'
```

`POST /api/admin/changeUserPassword.php`

Resets a user's password (admin only).

> Body parameter

```json
{
  "username": "johndoe",
  "newPassword": "newpass123"
}
```

<h3 id="admin-reset-user-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» username|body|string|true|none|
|» newPassword|body|string|true|none|

<h3 id="admin-reset-user-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Password updated|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|
|422|Unprocessable Entity|Validation error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Run ClamAV connectivity test

<a id="opIdadminClamavTest"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/clamavTest.php \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`POST /api/admin/clamavTest.php`

Runs a test scan of a temporary file and returns engine info.

> Example responses

> 200 Response

```json
{
  "success": true,
  "command": "string",
  "engine": "string",
  "details": "string",
  "error": "string"
}
```

<h3 id="run-clamav-connectivity-test-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Test result|Inline|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<h3 id="run-clamav-connectivity-test-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|command|string|false|none|none|
|engine|string \| null|false|none|none|
|details|string|false|none|none|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Delete disk usage snapshot

<a id="opIdadminDiskUsageDeleteSnapshot"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/diskUsageDeleteSnapshot.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "sourceId": "local"
  }'
```

`POST /api/admin/diskUsageDeleteSnapshot.php`

Deletes the cached disk usage snapshot file.

> Body parameter

```json
{
  "sourceId": "local"
}
```

<h3 id="delete-disk-usage-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|false|none|
|body|body|object|false|none|
|» sourceId|body|string|false|none|

<h3 id="delete-disk-usage-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snapshot deleted|None|
|400|Bad Request|CSRF mismatch|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get disk usage snapshot summary

<a id="opIdadminDiskUsageSummary"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/diskUsageSummary.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/admin/diskUsageSummary.php`

Returns snapshot summary and optional scan log tail.

<h3 id="get-disk-usage-snapshot-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topFolders|query|integer|false|none|
|topFiles|query|integer|false|none|
|sourceId|query|string|false|none|

<h3 id="get-disk-usage-snapshot-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Summary payload|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Snapshot not found|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Trigger disk usage scan

<a id="opIdadminDiskUsageTriggerScan"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/diskUsageTriggerScan.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "sourceId": "local"
  }'
```

`POST /api/admin/diskUsageTriggerScan.php`

Starts a background disk usage scan to build a new snapshot.

> Body parameter

```json
{
  "sourceId": "local"
}
```

<h3 id="trigger-disk-usage-scan-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» sourceId|body|string|false|none|

<h3 id="trigger-disk-usage-scan-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Scan started|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Download and install latest Pro bundle

<a id="opIdadminDownloadProBundle"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/downloadProBundle.php \
  -X POST \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`POST /api/admin/downloadProBundle.php`

Downloads the latest FileRise Pro bundle from filerise.net and installs it.

<h3 id="download-and-install-latest-pro-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|

<h3 id="download-and-install-latest-pro-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Install result|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|
|413|Payload Too Large|Bundle too large|None|
|500|Internal Server Error|Server error|None|
|502|Bad Gateway|Remote download failed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get UI configuration

<a id="opIdgetAdminConfig"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/getConfig.php \
  -H 'Accept: application/json'
```

`GET /api/admin/getConfig.php`

Returns a public subset for everyone; authenticated admins receive additional loginOptions fields.

> Example responses

> 200 Response

```json
{
  "header_title": "FileRise",
  "loginOptions": {
    "disableFormLogin": true,
    "disableBasicAuth": true,
    "disableOIDCLogin": true
  },
  "globalOtpauthUrl": "string",
  "enableWebDAV": true,
  "sharedMaxUploadSize": 0,
  "uploads": {
    "resumableChunkMb": 1.5,
    "resumableTtlHours": 6
  },
  "oidc": {
    "providerUrl": "https://accounts.example.com",
    "redirectUri": "https://your.filerise.app/callback"
  }
}
```

<h3 id="get-ui-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration loaded|Inline|
|500|Internal Server Error|Server error|None|

<h3 id="get-ui-configuration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AdminGetConfigPublic](#schemaadmingetconfigpublic)|false|none|none|
|*oneOf*|[AdminGetConfigAdmin](#schemaadmingetconfigadmin)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Install Pro bundle

<a id="opIdadminInstallProBundle"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/installProBundle.php \
  -X POST \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -F 'bundle=@/path/to/file'
```

`POST /api/admin/installProBundle.php`

Uploads and installs a FileRise Pro bundle zip.

> Body parameter

```yaml
bundle: string
```

<h3 id="install-pro-bundle-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» bundle|body|string(binary)|true|none|

<h3 id="install-pro-bundle-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Install result|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|
|413|Payload Too Large|Bundle too large|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get OIDC debug info

<a id="opIdadminOidcDebugInfo"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/oidcDebugInfo.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/admin/oidcDebugInfo.php`

Returns OIDC diagnostics for admins.

<h3 id="get-oidc-debug-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Debug info|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Test OIDC discovery

<a id="opIdadminOidcTest"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/oidcTest.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "providerUrl": "https://issuer.example.com"
  }'
```

`POST /api/admin/oidcTest.php`

Fetches the discovery document for a provider URL.

> Body parameter

```json
{
  "providerUrl": "https://issuer.example.com"
}
```

<h3 id="test-oidc-discovery-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» providerUrl|body|string|false|none|

<h3 id="test-oidc-discovery-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Discovery result|None|
|500|Internal Server Error|Server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Read share metadata JSON

<a id="opIdreadMetadata"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/admin/readMetadata.php?file=share_links.json' \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/admin/readMetadata.php`

Admin-only: returns the cleaned metadata for file or folder share links.

<h3 id="read-share-metadata-json-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string|true|Which metadata file to read|

#### Enumerated Values

|Parameter|Value|
|---|---|
|file|share_links.json|
|file|share_folder_links.json|

> Example responses

> 200 Response

```json
{
  "property1": {
    "folder": "root",
    "file": "invoice.pdf",
    "expires": 1735689600,
    "password": "***",
    "token": "0123456789abcdef0123456789abcdef",
    "sourceId": "local",
    "sourceName": "Local"
  },
  "property2": {
    "folder": "root",
    "file": "invoice.pdf",
    "expires": 1735689600,
    "password": "***",
    "token": "0123456789abcdef0123456789abcdef",
    "sourceId": "local",
    "sourceName": "Local"
  }
}
```

<h3 id="read-share-metadata-json-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|400|Bad Request|Missing or invalid file param|None|
|403|Forbidden|Forbidden (admin only)|None|
|500|Internal Server Error|Corrupted JSON|None|

<h3 id="read-share-metadata-json-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ShareLinksMap](#schemasharelinksmap)|false|none|none|
|*oneOf*|[ShareFolderLinksMap](#schemasharefolderlinksmap)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Run resumable upload cleanup sweep

<a id="opIdadminResumableCleanup"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/resumableCleanup.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-CSRF-Token: ${API_KEY}" \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "all": true,
    "purgeAll": true,
    "sourceId": "local"
  }'
```

`POST /api/admin/resumableCleanup.php`

Deletes expired resumable upload temp folders using the configured TTL.

> Body parameter

```json
{
  "all": true,
  "purgeAll": true,
  "sourceId": "local"
}
```

<h3 id="run-resumable-upload-cleanup-sweep-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» all|body|boolean|false|Sweep all sources when supported|
|» purgeAll|body|boolean|false|Remove all resumable temp folders, ignoring TTL|
|» sourceId|body|string|false|Optional source id to sweep|

> Example responses

> 200 Response

```json
{
  "success": true,
  "checked": 12,
  "removed": 3,
  "remaining": 2,
  "sources": 1
}
```

<h3 id="run-resumable-upload-cleanup-sweep-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Cleanup results|Inline|
|400|Bad Request|Bad request|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<h3 id="run-resumable-upload-cleanup-sweep-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|checked|integer|false|none|none|
|removed|integer|false|none|none|
|remaining|integer|false|none|none|
|sources|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth & CsrfHeader
</aside>

## Configure encryption master key

<a id="opIdadminSetEncryptionKey"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/setEncryptionKey.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "action": "generate",
    "force": false
  }'
```

`POST /api/admin/setEncryptionKey.php`

Generates or clears the encryption master key file.

> Body parameter

```json
{
  "action": "generate",
  "force": false
}
```

<h3 id="configure-encryption-master-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» action|body|string|true|none|
|» force|body|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» action|generate|
|» action|clear|

<h3 id="configure-encryption-master-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Operation result|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Set Pro license key

<a id="opIdadminSetLicense"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/setLicense.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "license": "FRPRO-XXXX-XXXX"
  }'
```

`POST /api/admin/setLicense.php`

Stores the FileRise Pro license key.

> Body parameter

```json
{
  "license": "FRPRO-XXXX-XXXX"
}
```

<h3 id="set-pro-license-key-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» license|body|string|true|none|

<h3 id="set-pro-license-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|License stored|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Update admin configuration

<a id="opIdupdateAdminConfig"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/updateConfig.php \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-CSRF-Token: ${API_KEY}" \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "header_title": "FileRise",
    "loginOptions": {
      "disableFormLogin": false,
      "disableBasicAuth": false,
      "disableOIDCLogin": true,
      "authBypass": false,
      "authHeaderName": "X-Remote-User"
    },
    "globalOtpauthUrl": "otpauth://totp/{label}?secret={secret}&issuer=FileRise",
    "enableWebDAV": false,
    "sharedMaxUploadSize": 52428800,
    "uploads": {
      "resumableChunkMb": 1.5,
      "resumableTtlHours": 6
    },
    "oidc": {
      "providerUrl": "https://issuer.example.com",
      "clientId": "my-client-id",
      "clientSecret": "***",
      "redirectUri": "https://app.example.com/auth/callback",
      "groupClaim": "groups",
      "extraScopes": "groups"
    }
  }'
```

`PUT /api/admin/updateConfig.php`

Merges the provided settings into the on-disk configuration and persists them. Requires an authenticated admin session and a valid CSRF token. When OIDC is enabled (disableOIDCLogin=false), `providerUrl`, `redirectUri`, and `clientId` are required and must be HTTPS (HTTP allowed only for localhost).

> Body parameter

```json
{
  "header_title": "FileRise",
  "loginOptions": {
    "disableFormLogin": false,
    "disableBasicAuth": false,
    "disableOIDCLogin": true,
    "authBypass": false,
    "authHeaderName": "X-Remote-User"
  },
  "globalOtpauthUrl": "otpauth://totp/{label}?secret={secret}&issuer=FileRise",
  "enableWebDAV": false,
  "sharedMaxUploadSize": 52428800,
  "uploads": {
    "resumableChunkMb": 1.5,
    "resumableTtlHours": 6
  },
  "oidc": {
    "providerUrl": "https://issuer.example.com",
    "clientId": "my-client-id",
    "clientSecret": "***",
    "redirectUri": "https://app.example.com/auth/callback",
    "groupClaim": "groups",
    "extraScopes": "groups"
  }
}
```

<h3 id="update-admin-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AdminUpdateConfigRequest](#schemaadminupdateconfigrequest)|true|none|
|» header_title|body|string|false|none|
|» loginOptions|body|object|false|none|
|» » disableFormLogin|body|boolean|false|none|
|» » disableBasicAuth|body|boolean|false|none|
|» » disableOIDCLogin|body|boolean|false|false = OIDC enabled|
|» » authBypass|body|boolean|false|none|
|» » authHeaderName|body|string|false|Letters/numbers/dashes only|
|» globalOtpauthUrl|body|string|false|none|
|» enableWebDAV|body|boolean|false|none|
|» sharedMaxUploadSize|body|integer(int64)|false|none|
|» uploads|body|object|false|none|
|» » resumableChunkMb|body|number(float)|false|none|
|» » resumableTtlHours|body|number(float)|false|none|
|» oidc|body|object|false|When disableOIDCLogin=false (OIDC enabled), providerUrl, redirectUri, and clientId are required.|
|» » providerUrl|body|string(uri)|false|none|
|» » clientId|body|string|false|none|
|» » clientSecret|body|string|false|none|
|» » redirectUri|body|string(uri)|false|none|
|» » groupClaim|body|string \| null|false|none|
|» » extraScopes|body|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

> 400 Response

```json
{
  "error": "Something went wrong"
}
```

> 403 Response

```json
{
  "error": "Something went wrong"
}
```

> 500 Response

```json
{
  "error": "Something went wrong"
}
```

<h3 id="update-admin-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Configuration updated|[SimpleSuccess](#schemasimplesuccess)|
|400|Bad Request|Validation error (e.g., bad authHeaderName, missing OIDC fields when enabled, or negative upload limit)|[SimpleError](#schemasimpleerror)|
|403|Forbidden|Unauthorized access or invalid CSRF token|[SimpleError](#schemasimpleerror)|
|500|Internal Server Error|Server error while loading or saving configuration|[SimpleError](#schemasimpleerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth & CsrfHeader
</aside>

## Fetch virus detections log

<a id="opIdadminVirusLog"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/virusLog.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/admin/virusLog.php`

Returns virus detections as JSON or CSV (Pro only).

<h3 id="fetch-virus-detections-log-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|csv|

<h3 id="fetch-virus-detections-log-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Log entries or CSV|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden or Pro required|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-users">Users</h1>

Users

## Add a new user

<a id="opIdaddUser"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/addUser.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "username": "johndoe",
    "password": "securepassword",
    "isAdmin": true
  }'
```

`POST /api/admin/addUser.php`

Adds a new user to the system. In setup mode (setup=1 with no users), auth/CSRF is not required and the new user is automatically made admin.

> Body parameter

```json
{
  "username": "johndoe",
  "password": "securepassword",
  "isAdmin": true
}
```

<h3 id="add-a-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|setup|query|string|false|Use setup=1 to enable first-run bootstrap|
|X-CSRF-Token|header|string|false|Required outside setup mode|
|body|body|object|true|none|
|» username|body|string|true|none|
|» password|body|string|true|none|
|» isAdmin|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "success": "User added successfully"
}
```

<h3 id="add-a-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User added successfully|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|405|Method Not Allowed|Method not allowed|None|

<h3 id="add-a-new-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Retrieve a list of users

<a id="opIdgetUsers"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/getUsers.php \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/admin/getUsers.php`

Returns a JSON array of users. Only available to authenticated admin users.

> Example responses

> 200 Response

```json
[
  {
    "username": "johndoe",
    "role": "admin"
  }
]
```

<h3 id="retrieve-a-list-of-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with an array of users|Inline|
|401|Unauthorized|Unauthorized: the user is not authenticated or is not an admin|None|

<h3 id="retrieve-a-list-of-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» username|string|false|none|none|
|» role|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Remove a user

<a id="opIdremoveUser"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/removeUser.php \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "username": "johndoe"
  }'
```

`DELETE /api/admin/removeUser.php`

Removes the specified user from the system. Cannot remove the currently logged-in user. Accepts DELETE or POST.

> Body parameter

```json
{
  "username": "johndoe"
}
```

<h3 id="remove-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» username|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": "User removed successfully"
}
```

<h3 id="remove-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User removed successfully|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Invalid CSRF token|None|
|405|Method Not Allowed|Method not allowed|None|

<h3 id="remove-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Update user permissions

<a id="opIdupdateUserPermissions"></a>

> Code samples

```bash
curl http://localhost:8080/api/admin/updateUserPermissions.php \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "permissions": [
      {
        "username": "johndoe",
        "folderOnly": true,
        "readOnly": false,
        "disableUpload": false
      }
    ]
  }'
```

`PUT /api/admin/updateUserPermissions.php`

Updates permissions for users. Only available to authenticated admin users. Accepts PUT or POST.

> Body parameter

```json
{
  "permissions": [
    {
      "username": "johndoe",
      "folderOnly": true,
      "readOnly": false,
      "disableUpload": false
    }
  ]
}
```

<h3 id="update-user-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» permissions|body|[object]|true|none|
|» » username|body|string|false|none|
|» » folderOnly|body|boolean|false|none|
|» » readOnly|body|boolean|false|none|
|» » disableUpload|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "success": "User permissions updated successfully."
}
```

<h3 id="update-user-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User permissions updated successfully|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Invalid CSRF token|None|
|405|Method Not Allowed|Method not allowed|None|

<h3 id="update-user-permissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Change user password

<a id="opIdchangePassword"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/changePassword.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "oldPassword": "oldpass123",
    "newPassword": "newpass456",
    "confirmPassword": "newpass456"
  }'
```

`POST /api/profile/changePassword.php`

Allows an authenticated user to change their password by verifying the old password and updating to a new one.

> Body parameter

```json
{
  "oldPassword": "oldpass123",
  "newPassword": "newpass456",
  "confirmPassword": "newpass456"
}
```

<h3 id="change-user-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» oldPassword|body|string|true|none|
|» newPassword|body|string|true|none|
|» confirmPassword|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": "Password updated successfully."
}
```

<h3 id="change-user-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Password updated successfully|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Invalid CSRF token|None|
|405|Method Not Allowed|Method not allowed|None|

<h3 id="change-user-password-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## getCurrentUser

<a id="opIdgetCurrentUser"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/getCurrentUser.php \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/profile/getCurrentUser.php`

> Example responses

> 200 Response

```json
{
  "username": "ryan",
  "isAdmin": true,
  "totp_enabled": true,
  "profile_picture": "/api/public/profilePic.php?file=ryan.png"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

<h3 id="getcurrentuser-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current user|Inline|
|401|Unauthorized|Unauthorized (no session)|Inline|

<h3 id="getcurrentuser-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|isAdmin|boolean|true|none|none|
|totp_enabled|boolean|true|none|none|
|profile_picture|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Retrieve user permissions

<a id="opIdgetUserPermissions"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/getUserPermissions.php \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/profile/getUserPermissions.php`

Returns the permissions for the current user, or all permissions if the user is an admin.

> Example responses

> 200 Response

```json
{}
```

<h3 id="retrieve-user-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response with user permissions|Inline|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Update user panel settings

<a id="opIdupdateUserPanel"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/updateUserPanel.php \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "totp_enabled": false
  }'
```

`PUT /api/profile/updateUserPanel.php`

Updates user panel settings. Accessible to authenticated users. Accepts PUT or POST.

> Body parameter

```json
{
  "totp_enabled": false
}
```

<h3 id="update-user-panel-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» totp_enabled|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "success": "User panel updated: TOTP disabled"
}
```

<h3 id="update-user-panel-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User panel updated successfully|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Invalid CSRF token|None|
|405|Method Not Allowed|Method not allowed|None|

<h3 id="update-user-panel-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Upload or replace the current user's profile picture

<a id="opIduploadProfilePicture"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/uploadPicture.php \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -F 'profile_picture=@/path/to/file'
```

`POST /api/profile/uploadPicture.php`

Accepts a single image file (JPEG, PNG, or GIF) up to 2&nbsp;MB. Requires a valid session cookie and CSRF token.

> Body parameter

```yaml
profile_picture: string
```

<h3 id="upload-or-replace-the-current-users-profile-picture-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|Anti-CSRF token associated with the current session.|
|body|body|object|true|none|
|» profile_picture|body|string(binary)|true|JPEG, PNG, or GIF image. Max size: 2 MB.|

> Example responses

> 200 Response

```json
{
  "success": true,
  "url": "/api/public/profilePic.php?file=alice_9f3c2e1a8bcd.png"
}
```

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Invalid CSRF token."
}
```

<h3 id="upload-or-replace-the-current-users-profile-picture-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Profile picture updated.|Inline|
|400|Bad Request|No file uploaded, invalid file type, or file too large.|None|
|401|Unauthorized|Unauthorized (no session)|Inline|
|403|Forbidden|Forbidden (not enough privileges)|Inline|
|500|Internal Server Error|Server error while saving the picture.|None|

<h3 id="upload-or-replace-the-current-users-profile-picture-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|url|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-auth">Auth</h1>

Auth

## Authenticate user

<a id="opIdauthUser"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/auth.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "johndoe",
    "password": "secretpassword",
    "remember_me": true,
    "totp_code": "123456"
  }'
```

`POST /api/auth/auth.php`

Handles user authentication via OIDC or form-based credentials. For OIDC flows, processes callbacks; otherwise, performs standard authentication with optional TOTP verification.

> Body parameter

```json
{
  "username": "johndoe",
  "password": "secretpassword",
  "remember_me": true,
  "totp_code": "123456"
}
```

<h3 id="authenticate-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» username|body|string|true|none|
|» password|body|string|true|none|
|» remember_me|body|boolean|false|none|
|» totp_code|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "ok",
  "success": "Login successful",
  "username": "johndoe",
  "isAdmin": true
}
```

<h3 id="authenticate-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Login successful; returns user info and status|Inline|
|400|Bad Request|Bad Request (e.g., missing credentials)|None|
|401|Unauthorized|Unauthorized (e.g., invalid credentials, too many attempts)|None|
|429|Too Many Requests|Too many failed login attempts|None|

<h3 id="authenticate-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|success|string|false|none|none|
|username|string|false|none|none|
|isAdmin|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check authentication status

<a id="opIdcheckAuth"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/checkAuth.php \
  -H 'Accept: application/json'
```

`GET /api/auth/checkAuth.php`

> Example responses

> 200 Response

```json
{
  "authenticated": true,
  "isAdmin": true,
  "totp_enabled": false,
  "username": "johndoe",
  "folderOnly": false
}
```

<h3 id="check-authentication-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Authenticated status or setup flag|Inline|

<h3 id="check-authentication-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|authenticated|boolean|false|none|none|
|isAdmin|boolean|false|none|none|
|totp_enabled|boolean|false|none|none|
|username|string|false|none|none|
|folderOnly|boolean|false|none|none|
|*oneOf*|object|false|none|none|
|setup|boolean|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Authenticate using HTTP Basic Authentication

<a id="opIdloginBasic"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/login_basic.php \
  -H 'Accept: application/json'
```

`GET /api/auth/login_basic.php`

Performs HTTP Basic authentication. If credentials are missing, sends a 401 response prompting for Basic auth. On valid credentials, optionally handles TOTP verification and finalizes session login.

> Example responses

> 200 Response

```json
{
  "success": "Login successful"
}
```

<h3 id="authenticate-using-http-basic-authentication-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Login successful; redirects to index.html|Inline|
|401|Unauthorized|Unauthorized due to missing credentials or invalid credentials.|None|
|429|Too Many Requests|Too many failed login attempts.|None|

<h3 id="authenticate-using-http-basic-authentication-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Logout user

<a id="opIdlogoutUser"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/logout.php \
  -X POST \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`POST /api/auth/logout.php`

Clears the session, removes persistent login tokens, and redirects the user to the login page.

<h3 id="logout-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|false|none|

<h3 id="logout-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirects to the login page with a logout flag.|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Retrieve CSRF token and share URL

<a id="opIdgetToken"></a>

> Code samples

```bash
curl http://localhost:8080/api/auth/token.php \
  -H 'Accept: application/json'
```

`GET /api/auth/token.php`

Returns the current CSRF token along with the configured share URL.

> Example responses

> 200 Response

```json
{
  "csrf_token": "0123456789abcdef...",
  "share_url": "https://yourdomain.com/share.php"
}
```

<h3 id="retrieve-csrf-token-and-share-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CSRF token and share URL|Inline|

<h3 id="retrieve-csrf-token-and-share-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|csrf_token|string|false|none|none|
|share_url|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filerise-api-files">Files</h1>

Files

## Copy files between folders

<a id="opIdcopyFiles"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/copyFiles.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "source": "root",
    "destination": "userA/projects",
    "files": [
      "report.pdf",
      "notes.txt"
    ]
  }'
```

`POST /api/file/copyFiles.php`

Requires read access on source and write access on destination. Enforces folder scope and ownership.

> Body parameter

```json
{
  "source": "root",
  "destination": "userA/projects",
  "files": [
    "report.pdf",
    "notes.txt"
  ]
}
```

<h3 id="copy-files-between-folders-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|CSRF token from the current session|
|body|body|object|true|none|
|» source|body|string|true|none|
|» destination|body|string|true|none|
|» files|body|[string]|true|none|

<h3 id="copy-files-between-folders-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Copy result (model-defined)|None|
|400|Bad Request|Invalid request or folder name|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Create an empty file

<a id="opIdcreateFile"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/createFile.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "name": "new.txt"
  }'
```

`POST /api/file/createFile.php`

Requires write access on the target folder. Enforces folder-only scope.

> Body parameter

```json
{
  "folder": "root",
  "name": "new.txt"
}
```

<h3 id="create-an-empty-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» name|body|string|true|none|

<h3 id="create-an-empty-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Creation result (model-defined)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Delete files to Trash

<a id="opIddeleteFiles"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/deleteFiles.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "files": [
      "old.docx",
      "draft.md"
    ]
  }'
```

`POST /api/file/deleteFiles.php`

Requires write access on the folder and (for non-admins) ownership of the files.

> Body parameter

```json
{
  "folder": "root",
  "files": [
    "old.docx",
    "draft.md"
  ]
}
```

<h3 id="delete-files-to-trash-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» files|body|[string]|true|none|

<h3 id="delete-files-to-trash-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete result (model-defined)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Download a file

<a id="opIddownloadFile"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/file/download.php?folder=root&file=photo.jpg' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/file/download.php`

Requires view access (or own-only with ownership). Streams the file with appropriate Content-Type.

<h3 id="download-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|true|none|
|file|query|string|true|none|

<h3 id="download-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Binary file|Inline|
|400|Bad Request|Invalid folder/file|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Queue an archive download

<a id="opIddownloadZip"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/downloadZip.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "files": [
      "a.jpg",
      "b.png"
    ],
    "format": "zip"
  }'
```

`POST /api/file/downloadZip.php`

Queues a background archive build. Requires view access (or own-only with ownership). May be gated by account flag.

> Body parameter

```json
{
  "folder": "root",
  "files": [
    "a.jpg",
    "b.png"
  ],
  "format": "zip"
}
```

<h3 id="queue-an-archive-download-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» files|body|[string]|true|none|
|» format|body|string|false|Archive format|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» format|zip|
|» format|7z|

> Example responses

> 200 Response

```json
{
  "ok": true,
  "token": "string",
  "statusUrl": "string",
  "downloadUrl": "string"
}
```

<h3 id="queue-an-archive-download-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive job queued|Inline|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<h3 id="queue-an-archive-download-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ok|boolean|false|none|none|
|token|string|false|none|none|
|statusUrl|string|false|none|none|
|downloadUrl|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Download a finished archive by token

<a id="opIddownloadZipFile"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/file/downloadZipFile.php?k=string' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/file/downloadZipFile.php`

Streams the archive once; token is one-shot.

<h3 id="download-a-finished-archive-by-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|k|query|string|true|Job token|
|name|query|string|false|Suggested filename|

<h3 id="download-a-finished-archive-by-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive stream|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Extract archive file(s) into a folder

<a id="opIdextractZip"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/extractZip.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "files": [
      "archive.zip",
      "archive.7z"
    ]
  }'
```

`POST /api/file/extractZip.php`

Supports ZIP/7Z and RAR extraction via server tools. Requires write access on the target folder.

> Body parameter

```json
{
  "folder": "root",
  "files": [
    "archive.zip",
    "archive.7z"
  ]
}
```

<h3 id="extract-archive-files-into-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» files|body|[string]|true|none|

<h3 id="extract-archive-files-into-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Extraction result (model-defined)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## List files in a folder

<a id="opIdgetFileList"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/file/getFileList.php?folder=root' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/file/getFileList.php`

Requires view access (full) or read_own (own-only results).

<h3 id="list-files-in-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|true|none|
|sourceId|query|string|false|none|

<h3 id="list-files-in-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing result (model-defined JSON)|None|
|400|Bad Request|Invalid folder|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## moveFiles

<a id="opIdmoveFiles"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/moveFiles.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "source": "inbox",
    "destination": "archive",
    "files": [
      "string"
    ]
  }'
```

`POST /api/file/moveFiles.php`

> Body parameter

```json
{
  "source": "inbox",
  "destination": "archive",
  "files": [
    "string"
  ]
}
```

<h3 id="movefiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» source|body|string|true|none|
|» destination|body|string|true|none|
|» files|body|[string]|true|none|

> Example responses

> 401 Response

```json
{
  "error": "Unauthorized"
}
```

> 403 Response

```json
{
  "error": "Invalid CSRF token."
}
```

<h3 id="movefiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Moved|None|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized (no session)|Inline|
|403|Forbidden|Forbidden (not enough privileges)|Inline|

<h3 id="movefiles-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Rename a file

<a id="opIdrenameFile"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/renameFile.php \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "oldName": "old.pdf",
    "newName": "new.pdf"
  }'
```

`PUT /api/file/renameFile.php`

Requires write access; non-admins must own the file.

> Body parameter

```json
{
  "folder": "root",
  "oldName": "old.pdf",
  "newName": "new.pdf"
}
```

<h3 id="rename-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» oldName|body|string|true|none|
|» newName|body|string|true|none|

<h3 id="rename-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rename result (model-defined)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Create or overwrite a file’s content

<a id="opIdsaveFile"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/saveFile.php \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "fileName": "readme.txt",
    "content": "Hello world"
  }'
```

`PUT /api/file/saveFile.php`

Requires write access. Overwrite enforces ownership for non-admins. Certain executable extensions are denied.

> Body parameter

```json
{
  "folder": "root",
  "fileName": "readme.txt",
  "content": "Hello world"
}
```

<h3 id="create-or-overwrite-a-files-content-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» fileName|body|string|true|none|
|» content|body|string|true|none|

<h3 id="create-or-overwrite-a-files-content-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Save result (model-defined)|None|
|400|Bad Request|Invalid input or disallowed extension|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get a small text snippet from a file for hover previews

<a id="opIdgetFileSnippet"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/file/snippet.php?file=string' \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/file/snippet.php`

Returns a short UTF-8 text snippet from supported file types (txt, md, csv, code, DOCX, XLSX, PPTX, etc.) for use in quick previews.

<h3 id="get-a-small-text-snippet-from-a-file-for-hover-previews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|Logical folder path (e.g. root, clients/acme)|
|file|query|string|true|File name|

> Example responses

> 200 Response

```json
{
  "snippet": "string",
  "truncated": true
}
```

<h3 id="get-a-small-text-snippet-from-a-file-for-hover-previews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snippet JSON|Inline|
|400|Bad Request|Missing/invalid input|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|File not found|None|
|500|Internal Server Error|Internal error|None|

<h3 id="get-a-small-text-snippet-from-a-file-for-hover-previews-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|snippet|string|false|none|none|
|truncated|boolean|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get a video thumbnail image

<a id="opIdgetVideoThumbnail"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/file/thumbnail.php?folder=root&file=clip.mp4' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/file/thumbnail.php`

Returns a cached JPEG thumbnail for supported video files.

<h3 id="get-a-video-thumbnail-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|true|none|
|file|query|string|true|none|

<h3 id="get-a-video-thumbnail-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Thumbnail image|Inline|
|400|Bad Request|Invalid folder/file|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Check status of a background archive build

<a id="opIdzipStatus"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/file/zipStatus.php?k=string' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/file/zipStatus.php`

Returns status for the authenticated user's token.

<h3 id="check-status-of-a-background-archive-build-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|k|query|string|true|Job token|

<h3 id="check-status-of-a-background-archive-build-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status payload|None|
|401|Unauthorized|Unauthorized|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-shares">Shares</h1>

Shares

## Create a share link for a file

<a id="opIdcreateShareLink"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/createShareLink.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "file": "invoice.pdf",
    "expirationValue": 60,
    "expirationUnit": "minutes",
    "password": ""
  }'
```

`POST /api/file/createShareLink.php`

Requires share permission on the folder. Non-admins must own the file unless bypassOwnership.

> Body parameter

```json
{
  "folder": "root",
  "file": "invoice.pdf",
  "expirationValue": 60,
  "expirationUnit": "minutes",
  "password": ""
}
```

<h3 id="create-a-share-link-for-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» file|body|string|true|none|
|» expirationValue|body|integer|false|none|
|» expirationUnit|body|string|false|none|
|» password|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» expirationUnit|seconds|
|» expirationUnit|minutes|
|» expirationUnit|hours|
|» expirationUnit|days|

> Example responses

> 200 Response

```json
{
  "token": "abc123",
  "url": "/api/file/share.php?token=abc123",
  "expires": 1700000000
}
```

<h3 id="create-a-share-link-for-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share link created|Inline|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<h3 id="create-a-share-link-for-a-file-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
|url|string|false|none|none|
|expires|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Delete a share link by token

<a id="opIddeleteShareLink"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/deleteShareLink.php \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d 'token=abc123'
```

`POST /api/file/deleteShareLink.php`

Deletes a share token. Requires an authenticated admin session and a valid CSRF token.

> Body parameter

```yaml
token: abc123
```

<h3 id="delete-a-share-link-by-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|true|none|

<h3 id="delete-a-share-link-by-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deletion result (success or not found)|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get (raw) share links file

<a id="opIdgetShareLinks"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/getShareLinks.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/file/getShareLinks.php`

Returns the full share links JSON. Requires an authenticated admin session.

<h3 id="get-raw-share-links-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share links (model-defined JSON)|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Download a shared file

<a id="opIdshareFileDownload"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/file/share.php?token=string'
```

`GET /api/file/share.php`

Returns a shared file stream. If a password is required, an HTML prompt is returned.

<h3 id="download-a-shared-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|Share token|
|pass|query|string|false|Share password|
|view|query|integer|false|Render share landing page when set to 1|
|inline|query|integer|false|Allow inline rendering for safe types|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|0|
|view|1|
|inline|0|
|inline|1|

<h3 id="download-a-shared-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File stream or password prompt|None|
|400|Bad Request|Missing/invalid token|None|
|403|Forbidden|Forbidden or expired|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filerise-api-trash">Trash</h1>

Trash

## Permanently delete Trash items (admin only)

<a id="opIddeleteTrashFiles"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/deleteTrashFiles.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "deleteAll": true
  }'
```

`POST /api/file/deleteTrashFiles.php`

> Body parameter

```json
{
  "deleteAll": true
}
```

<h3 id="permanently-delete-trash-items-admin-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» deleteAll|body|boolean|true|none|
|» *oneOf*|body|object|false|none|
|» files|body|[string]|true|none|

<h3 id="permanently-delete-trash-items-admin-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deletion result (model-defined)|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Admin only|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## List items in Trash (admin only)

<a id="opIdgetTrashItems"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/getTrashItems.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/file/getTrashItems.php`

<h3 id="list-items-in-trash-admin-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Trash contents (model-defined JSON)|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Admin only|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Restore files from Trash (admin only)

<a id="opIdrestoreFiles"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/restoreFiles.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "files": [
      "trash/12345.json"
    ]
  }'
```

`POST /api/file/restoreFiles.php`

> Body parameter

```json
{
  "files": [
    "trash/12345.json"
  ]
}
```

<h3 id="restore-files-from-trash-admin-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» files|body|[string]|true|none|

<h3 id="restore-files-from-trash-admin-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Restore result (model-defined)|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Admin only|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-tags">Tags</h1>

Tags

## Get global file tags

<a id="opIdgetFileTag"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/getFileTag.php
```

`GET /api/file/getFileTag.php`

Returns tag metadata for the authenticated session.

<h3 id="get-global-file-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceId|query|string|false|Optional source id (Pro sources).|

<h3 id="get-global-file-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tags map (model-defined JSON)|None|

<aside class="success">
This operation does not require authentication
</aside>

## Save tags for a file (or delete one)

<a id="opIdsaveFileTag"></a>

> Code samples

```bash
curl http://localhost:8080/api/file/saveFileTag.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "file": "doc.md",
    "sourceId": "local",
    "tags": [
      {
        "name": "work",
        "color": "#ff0000"
      },
      {
        "name": "urgent",
        "color": "#00ff00"
      }
    ],
    "deleteGlobal": false,
    "tagToDelete": null
  }'
```

`POST /api/file/saveFileTag.php`

Requires write access and (for non-admins) ownership when modifying.

> Body parameter

```json
{
  "folder": "root",
  "file": "doc.md",
  "sourceId": "local",
  "tags": [
    {
      "name": "work",
      "color": "#ff0000"
    },
    {
      "name": "urgent",
      "color": "#00ff00"
    }
  ],
  "deleteGlobal": false,
  "tagToDelete": null
}
```

<h3 id="save-tags-for-a-file-or-delete-one-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» file|body|string|true|none|
|» sourceId|body|string|false|none|
|» tags|body|[object]|false|none|
|» » name|body|string|false|none|
|» » color|body|string|false|none|
|» deleteGlobal|body|boolean|false|none|
|» tagToDelete|body|string \| null|false|none|

<h3 id="save-tags-for-a-file-or-delete-one-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Save result (model-defined)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Internal error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-folders">Folders</h1>

Folders

## Get folder capabilities

<a id="opIdgetFolderCapabilities"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/capabilities.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/capabilities.php`

Returns effective permissions and capability flags for a folder.

<h3 id="get-folder-capabilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|sourceId|query|string|false|none|

<h3 id="get-folder-capabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Capabilities payload|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Create a new folder

<a id="opIdcreateFolder"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/createFolder.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folderName": "reports",
    "parent": "root"
  }'
```

`POST /api/folder/createFolder.php`

Requires authentication, CSRF token, and write access to the parent folder. Seeds ACL owner.

> Body parameter

```json
{
  "folderName": "reports",
  "parent": "root"
}
```

<h3 id="create-a-new-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|CSRF token from the current session|
|body|body|object|true|none|
|» folderName|body|string|true|none|
|» parent|body|string \| null|false|Parent folder (default root)|

<h3 id="create-a-new-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Creation result (model-defined JSON)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Delete a folder

<a id="opIddeleteFolder"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/deleteFolder.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "userA/reports",
    "sourceId": "local"
  }'
```

`POST /api/folder/deleteFolder.php`

Requires authentication, CSRF token, write scope, and (for non-admins) folder ownership.

> Body parameter

```json
{
  "folder": "userA/reports",
  "sourceId": "local"
}
```

<h3 id="delete-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» sourceId|body|string|false|none|

<h3 id="delete-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deletion result (model-defined JSON)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Start folder encryption/decryption job

<a id="opIdstartFolderEncryptionJob"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/encryptionJobStart.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "team/reports",
    "mode": "encrypt",
    "totalFiles": 0,
    "totalBytes": 0
  }'
```

`POST /api/folder/encryptionJobStart.php`

Queues an encryption or decryption job for a folder.

> Body parameter

```json
{
  "folder": "team/reports",
  "mode": "encrypt",
  "totalFiles": 0,
  "totalBytes": 0
}
```

<h3 id="start-folder-encryptiondecryption-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» mode|body|string|true|none|
|» totalFiles|body|integer|false|none|
|» totalBytes|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» mode|encrypt|
|» mode|decrypt|

<h3 id="start-folder-encryptiondecryption-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job started|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get folder encryption job status

<a id="opIdgetFolderEncryptionJobStatus"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/folder/encryptionJobStatus.php?jobId=string' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/encryptionJobStatus.php`

<h3 id="get-folder-encryption-job-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|jobId|query|string|true|Job id|

<h3 id="get-folder-encryption-job-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Job status|None|
|400|Bad Request|Invalid job id|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Job not found|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Process encryption job tick

<a id="opIdtickFolderEncryptionJob"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/encryptionJobTick.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "jobId": "a1b2c3d4e5f6",
    "maxFiles": 2
  }'
```

`POST /api/folder/encryptionJobTick.php`

Processes a small batch for an active encryption/decryption job.

> Body parameter

```json
{
  "jobId": "a1b2c3d4e5f6",
  "maxFiles": 2
}
```

<h3 id="process-encryption-job-tick-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» jobId|body|string|true|none|
|» maxFiles|body|integer|false|none|

<h3 id="process-encryption-job-tick-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Tick result|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Job not found|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Plan folder encryption/decryption

<a id="opIdplanFolderEncryption"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/encryptionPlan.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/encryptionPlan.php`

Scans a folder to estimate file/byte counts for encryption jobs.

<h3 id="plan-folder-encryptiondecryption-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|mode|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|mode|encrypt|
|mode|decrypt|

<h3 id="plan-folder-encryptiondecryption-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Plan result|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get folder color map

<a id="opIdgetFolderColors"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/getFolderColors.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/getFolderColors.php`

<h3 id="get-folder-color-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Folder color map|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get folder encryption capabilities

<a id="opIdgetFolderEncryption"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/getFolderEncryption.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/getFolderEncryption.php`

<h3 id="get-folder-encryption-capabilities-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|

<h3 id="get-folder-encryption-capabilities-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Encryption capability payload|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## List folders (optionally under a parent)

<a id="opIdgetFolderList"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/getFolderList.php \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/getFolderList.php`

Requires authentication. Non-admins see folders for which they have full view or own-only access.

<h3 id="list-folders-optionally-under-a-parent-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|Parent folder to include and descend (default all); use 'root' for top-level|
|sourceId|query|string|false|Optional source id (admin can target disabled sources)|

> Example responses

> 200 Response

```json
[
  {
    "folder": "team/reports",
    "fileCount": 12,
    "metadataFile": "/path/to/meta.json"
  }
]
```

<h3 id="list-folders-optionally-under-a-parent-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of folders|Inline|
|400|Bad Request|Invalid folder|None|
|401|Unauthorized|Unauthorized|None|

<h3 id="list-folders-optionally-under-a-parent-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» folder|string|false|none|none|
|» fileCount|integer|false|none|none|
|» metadataFile|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Check if folder is empty

<a id="opIdfolderIsEmpty"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/isEmpty.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/isEmpty.php`

ACL-aware check used for folder tree icons.

<h3 id="check-if-folder-is-empty-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|sourceId|query|string|false|none|
|deep|query|integer|false|When 1, return recursive totals.|
|depth|query|integer|false|Max recursive depth when deep=1 (0 = unlimited).|

<h3 id="check-if-folder-is-empty-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Stats payload|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## List folder children

<a id="opIdlistFolderChildren"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/listChildren.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/listChildren.php`

Returns a paged list of child folders for tree navigation.

<h3 id="list-folder-children-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|limit|query|integer|false|none|
|cursor|query|string|false|none|

<h3 id="list-folder-children-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Child list payload|None|
|401|Unauthorized|Unauthorized|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Move or copy a folder

<a id="opIdmoveFolder"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/moveFolder.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "source": "team/q1",
    "destination": "archive",
    "mode": "move",
    "sourceId": "local",
    "destSourceId": "s3-main"
  }'
```

`POST /api/folder/moveFolder.php`

Moves (default) or copies a folder into a destination folder.

> Body parameter

```json
{
  "source": "team/q1",
  "destination": "archive",
  "mode": "move",
  "sourceId": "local",
  "destSourceId": "s3-main"
}
```

<h3 id="move-or-copy-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» source|body|string|true|none|
|» destination|body|string|true|none|
|» mode|body|string|false|none|
|» sourceId|body|string|false|none|
|» destSourceId|body|string|false|none|

<h3 id="move-or-copy-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Move result (model-defined JSON)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Rename or move a folder

<a id="opIdrenameFolder"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/renameFolder.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "oldFolder": "team/q1",
    "newFolder": "team/quarter-1"
  }'
```

`POST /api/folder/renameFolder.php`

Requires authentication, CSRF token, scope checks on old and new paths, and (for non-admins) ownership of the source folder.

> Body parameter

```json
{
  "oldFolder": "team/q1",
  "newFolder": "team/quarter-1"
}
```

<h3 id="rename-or-move-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» oldFolder|body|string|true|none|
|» newFolder|body|string|true|none|

<h3 id="rename-or-move-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Rename result (model-defined JSON)|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Save folder color

<a id="opIdsaveFolderColor"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/saveFolderColor.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "team/reports",
    "color": "#ff9900"
  }'
```

`POST /api/folder/saveFolderColor.php`

Sets or clears a custom folder color.

> Body parameter

```json
{
  "folder": "team/reports",
  "color": "#ff9900"
}
```

<h3 id="save-folder-color-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» color|body|string \| null|false|Empty string clears|

<h3 id="save-folder-color-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Save result|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Set folder encryption state

<a id="opIdsetFolderEncryption"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/setFolderEncryption.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "team/reports",
    "encrypted": true
  }'
```

`POST /api/folder/setFolderEncryption.php`

Enables or disables folder encryption (v1 compatibility).

> Body parameter

```json
{
  "folder": "team/reports",
  "encrypted": true
}
```

<h3 id="set-folder-encryption-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» encrypted|body|boolean|true|none|

<h3 id="set-folder-encryption-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update result|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Folder not found|None|
|409|Conflict|Conflict|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-shared-folders">Shared Folders</h1>

Shared Folders

## Create a share link for a folder

<a id="opIdcreateShareFolderLink"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/createShareFolderLink.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "team/reports",
    "expirationValue": 60,
    "expirationUnit": "minutes",
    "password": "",
    "allowUpload": 0,
    "allowSubfolders": 0
  }'
```

`POST /api/folder/createShareFolderLink.php`

Requires authentication, CSRF token, and share permission. Non-admins must own the folder (unless bypass) and cannot share root.

> Body parameter

```json
{
  "folder": "team/reports",
  "expirationValue": 60,
  "expirationUnit": "minutes",
  "password": "",
  "allowUpload": 0,
  "allowSubfolders": 0
}
```

<h3 id="create-a-share-link-for-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» expirationValue|body|integer|false|none|
|» expirationUnit|body|string|false|none|
|» password|body|string|false|none|
|» allowUpload|body|integer|false|none|
|» allowSubfolders|body|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» expirationUnit|seconds|
|» expirationUnit|minutes|
|» expirationUnit|hours|
|» expirationUnit|days|
|» allowUpload|0|
|» allowUpload|1|
|» allowSubfolders|0|
|» allowSubfolders|1|

> Example responses

> 200 Response

```json
{
  "token": "sf_abc123",
  "link": "/api/folder/shareFolder.php?token=sf_abc123",
  "expires": 1700000000
}
```

<h3 id="create-a-share-link-for-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Share folder link created|Inline|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|

<h3 id="create-a-share-link-for-a-folder-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|false|none|none|
|link|string|false|none|none|
|expires|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Delete a shared-folder link by token (admin only)

<a id="opIddeleteShareFolderLink"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/deleteShareFolderLink.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "token": "sf_abc123"
  }'
```

`POST /api/folder/deleteShareFolderLink.php`

Requires authentication, CSRF token, and admin privileges.

> Body parameter

```json
{
  "token": "sf_abc123"
}
```

<h3 id="delete-a-shared-folder-link-by-token-admin-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» token|body|string|true|none|

<h3 id="delete-a-shared-folder-link-by-token-admin-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Deleted|None|
|400|Bad Request|No token provided|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Admin only|None|
|404|Not Found|Not found|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Download a file from a shared folder (by token)

<a id="opIddownloadSharedFile"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/folder/downloadSharedFile.php?token=string'
```

`GET /api/folder/downloadSharedFile.php`

Public endpoint; validates token and file name, then streams the file.

<h3 id="download-a-file-from-a-shared-folder-by-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|
|pass|query|string|false|none|
|file|query|string|false|none|
|path|query|string|false|none|
|inline|query|integer|false|Allow inline rendering for safe types|

#### Enumerated Values

|Parameter|Value|
|---|---|
|inline|0|
|inline|1|

<h3 id="download-a-file-from-a-shared-folder-by-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Binary file|Inline|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Password required|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Download a shared folder as a ZIP

<a id="opIddownloadSharedFolder"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/folder/downloadSharedFolder.php?token=string'
```

`GET /api/folder/downloadSharedFolder.php`

Public endpoint; validates token/path and streams a ZIP archive.

<h3 id="download-a-shared-folder-as-a-zip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|
|pass|query|string|false|none|
|path|query|string|false|Subfolder path within the shared folder|

<h3 id="download-a-shared-folder-as-a-zip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ZIP archive|Inline|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Password required|None|
|404|Not Found|Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List active shared-folder links (admin only)

<a id="opIdgetShareFolderLinks"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/getShareFolderLinks.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/folder/getShareFolderLinks.php`

Returns all non-expired shared-folder links. Admin-only.

<h3 id="list-active-shared-folder-links-admin-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Active share-folder links (model-defined JSON)|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Admin only|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Open a shared folder by token (HTML UI)

<a id="opIdshareFolder"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/folder/shareFolder.php?token=string'
```

`GET /api/folder/shareFolder.php`

If the share is password-protected and no password is supplied, an HTML password form is returned. Otherwise renders an HTML listing with optional upload form.

<h3 id="open-a-shared-folder-by-token-html-ui-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|query|string|true|none|
|pass|query|string|false|none|
|path|query|string|false|Subfolder path within the shared folder|
|page|query|integer|false|none|

<h3 id="open-a-shared-folder-by-token-html-ui-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|HTML page (password form or folder listing)|None|
|400|Bad Request|Missing/invalid token|None|
|403|Forbidden|Forbidden or wrong password|None|

<aside class="success">
This operation does not require authentication
</aside>

## Upload a file into a shared folder (by token)

<a id="opIduploadToSharedFolder"></a>

> Code samples

```bash
curl http://localhost:8080/api/folder/uploadToSharedFolder.php \
  -X POST \
  -F 'token=string' \
  -F 'pass=string' \
  -F 'path=string' \
  -F 'fileToUpload=@/path/to/file'
```

`POST /api/folder/uploadToSharedFolder.php`

Public form-upload endpoint. Only allowed when the share link has uploads enabled. On success responds with a redirect to the share page.

> Body parameter

```yaml
token: string
pass: string
path: string
fileToUpload: string
```

<h3 id="upload-a-file-into-a-shared-folder-by-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» token|body|string|true|Share token|
|» pass|body|string|false|Share password (if required)|
|» path|body|string|false|Optional subfolder path within the shared folder|
|» fileToUpload|body|string(binary)|true|File to upload|

<h3 id="upload-a-file-into-a-shared-folder-by-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirect to /api/folder/shareFolder.php?token=...|None|
|400|Bad Request|Upload error or invalid input|None|
|405|Method Not Allowed|Method not allowed|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filerise-api-media">Media</h1>

Media

## Get media playback progress

<a id="opIdgetMediaProgress"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/media/getProgress.php?folder=root&file=video.mp4' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/media/getProgress.php`

<h3 id="get-media-playback-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|true|none|
|file|query|string|true|none|

<h3 id="get-media-playback-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Progress state|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get viewed media map

<a id="opIdgetViewedMediaMap"></a>

> Code samples

```bash
curl http://localhost:8080/api/media/getViewedMap.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/media/getViewedMap.php`

<h3 id="get-viewed-media-map-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|

<h3 id="get-viewed-media-map-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Viewed map|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Update media playback progress

<a id="opIdupdateMediaProgress"></a>

> Code samples

```bash
curl http://localhost:8080/api/media/updateProgress.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "file": "video.mp4",
    "seconds": 42.5,
    "duration": 3600,
    "completed": true,
    "clear": false
  }'
```

`POST /api/media/updateProgress.php`

> Body parameter

```json
{
  "folder": "root",
  "file": "video.mp4",
  "seconds": 42.5,
  "duration": 3600,
  "completed": true,
  "clear": false
}
```

<h3 id="update-media-playback-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» file|body|string|true|none|
|» seconds|body|number(float)|false|none|
|» duration|body|number(float) \| null|false|none|
|» completed|body|boolean \| null|false|none|
|» clear|body|boolean|false|none|

<h3 id="update-media-playback-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Update result|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-onlyoffice">ONLYOFFICE</h1>

ONLYOFFICE

## ONLYOFFICE save callback

> Code samples

```bash
curl http://localhost:8080/api/onlyoffice/callback.php \
  -X POST
```

`POST /api/onlyoffice/callback.php`

<h3 id="onlyoffice-save-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sourceId|query|string|false|none|

<h3 id="onlyoffice-save-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK / error JSON|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get editor config for a file (signed URLs, callback)

> Code samples

```bash
curl http://localhost:8080/api/onlyoffice/config.php
```

`GET /api/onlyoffice/config.php`

<h3 id="get-editor-config-for-a-file-signed-urls-callback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|file|query|string|false|none|
|sourceId|query|string|false|none|

<h3 id="get-editor-config-for-a-file-signed-urls-callback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Editor config|None|
|403|Forbidden|Forbidden|None|
|404|Not Found|Disabled / Not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Serve a signed file blob to ONLYOFFICE

> Code samples

```bash
curl 'http://localhost:8080/api/onlyoffice/signed-download.php?tok=string'
```

`GET /api/onlyoffice/signed-download.php`

<h3 id="serve-a-signed-file-blob-to-onlyoffice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tok|query|string|true|none|

<h3 id="serve-a-signed-file-blob-to-onlyoffice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|File stream|None|
|403|Forbidden|Signature/expiry invalid|None|

<aside class="success">
This operation does not require authentication
</aside>

## ONLYOFFICE availability &amp; supported extensions

> Code samples

```bash
curl http://localhost:8080/api/onlyoffice/status.php
```

`GET /api/onlyoffice/status.php`

<h3 id="onlyoffice-availability-supported-extensions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status JSON|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filerise-api-pro">Pro</h1>

Pro

## Export audit log as CSV

<a id="opIdproAuditExportCsv"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/audit/exportCsv.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/pro/audit/exportCsv.php`

Exports audit log entries as CSV.

<h3 id="export-audit-log-as-csv-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|user|query|string|false|none|
|action|query|string|false|none|
|source|query|string|false|none|
|storage|query|string|false|none|
|from|query|string|false|ISO timestamp or epoch|
|to|query|string|false|none|
|limit|query|integer|false|none|

<h3 id="export-audit-log-as-csv-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|CSV stream|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden or Pro required|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## List audit log entries

<a id="opIdproAuditList"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/audit/list.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/pro/audit/list.php`

Returns audit log entries for admins, or for a specific folder when non-admin.

<h3 id="list-audit-log-entries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|user|query|string|false|none|
|action|query|string|false|none|
|source|query|string|false|none|
|storage|query|string|false|none|
|from|query|string|false|ISO timestamp or epoch|
|to|query|string|false|none|
|limit|query|integer|false|none|

<h3 id="list-audit-log-entries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Audit list payload|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden or Pro required|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get disk usage children

<a id="opIdproDiskUsageChildren"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/diskUsageChildren.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/pro/diskUsageChildren.php`

Returns per-folder usage children for the storage explorer (Pro).

<h3 id="get-disk-usage-children-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|folder|query|string|false|none|
|sourceId|query|string|false|none|

<h3 id="get-disk-usage-children-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Children payload|None|
|403|Forbidden|Forbidden or Pro required|None|
|404|Not Found|Snapshot not found|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Permanently delete a file

<a id="opIdproDiskUsageDeleteFilePermanent"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/diskUsageDeleteFilePermanent.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "name": "large.zip",
    "sourceId": "local"
  }'
```

`POST /api/pro/diskUsageDeleteFilePermanent.php`

Deletes a single file from storage explorer (Pro, admin).

> Body parameter

```json
{
  "folder": "root",
  "name": "large.zip",
  "sourceId": "local"
}
```

<h3 id="permanently-delete-a-file-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|false|none|
|» name|body|string|true|none|
|» sourceId|body|string|false|none|

<h3 id="permanently-delete-a-file-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete result|None|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Forbidden or Pro required|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Permanently delete a folder

<a id="opIdproDiskUsageDeleteFolderRecursive"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/diskUsageDeleteFolderRecursive.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "team/archive",
    "sourceId": "local"
  }'
```

`POST /api/pro/diskUsageDeleteFolderRecursive.php`

Recursively deletes a folder from storage explorer (Pro, admin).

> Body parameter

```json
{
  "folder": "team/archive",
  "sourceId": "local"
}
```

<h3 id="permanently-delete-a-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» sourceId|body|string|false|none|

<h3 id="permanently-delete-a-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete result|None|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Forbidden or Pro required|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get top files by size

<a id="opIdproDiskUsageTopFiles"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/diskUsageTopFiles.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/pro/diskUsageTopFiles.php`

Returns the largest files across the instance (Pro).

<h3 id="get-top-files-by-size-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|
|sourceId|query|string|false|none|

<h3 id="get-top-files-by-size-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Top files payload|None|
|403|Forbidden|Forbidden or Pro required|None|
|404|Not Found|Snapshot not found|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## List Pro groups

<a id="opIdproGroupsList"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/groups/list.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/pro/groups/list.php`

Returns user groups defined in FileRise Pro.

<h3 id="list-pro-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Groups payload|None|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Forbidden or Pro required|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Save Pro groups

<a id="opIdproGroupsSave"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/groups/save.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "groups": {}
  }'
```

`POST /api/pro/groups/save.php`

Saves group definitions in FileRise Pro.

> Body parameter

```json
{
  "groups": {}
}
```

<h3 id="save-pro-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» groups|body|object|true|none|

<h3 id="save-pro-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Save result|None|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Forbidden or Pro required|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get portal by slug

<a id="opIdproPortalsGet"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/pro/portals/get.php?slug=client-portal'
```

`GET /api/pro/portals/get.php`

Returns portal metadata (public).

<h3 id="get-portal-by-slug-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|query|string|true|none|

<h3 id="get-portal-by-slug-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Portal payload|None|
|404|Not Found|Portal not found|None|

<aside class="success">
This operation does not require authentication
</aside>

## List portals

<a id="opIdproPortalsList"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/portals/list.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/pro/portals/list.php`

Returns all portals (admin only, Pro).

<h3 id="list-portals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Portals payload|None|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Forbidden or Pro required|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Get public portal metadata

<a id="opIdproPortalsPublicMeta"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/pro/portals/publicMeta.php?slug=client-portal'
```

`GET /api/pro/portals/publicMeta.php`

Returns the public metadata needed for the portal login page.

<h3 id="get-public-portal-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|query|string|true|none|

<h3 id="get-public-portal-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Public portal payload|None|
|400|Bad Request|Missing slug|None|
|404|Not Found|Portal not found or Pro inactive|None|
|410|Gone|Portal expired|None|
|500|Internal Server Error|Server error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Save portals

<a id="opIdproPortalsSave"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/portals/save.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "portals": {}
  }'
```

`POST /api/pro/portals/save.php`

Saves portal definitions (admin only, Pro).

> Body parameter

```json
{
  "portals": {}
}
```

<h3 id="save-portals-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» portals|body|object|true|none|

<h3 id="save-portals-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Save result|None|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Forbidden or Pro required|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## List portal submissions

<a id="opIdproPortalsSubmissions"></a>

> Code samples

```bash
curl 'http://localhost:8080/api/pro/portals/submissions.php?slug=client-portal' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/pro/portals/submissions.php`

Returns submissions for a portal (admin only, Pro).

<h3 id="list-portal-submissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|slug|query|string|true|none|

<h3 id="list-portal-submissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Submissions payload|None|
|400|Bad Request|Missing slug|None|
|403|Forbidden|Forbidden or Pro required|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Submit portal form

<a id="opIdproPortalsSubmitForm"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/portals/submitForm.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "slug": "client-portal",
    "form": {
      "name": "Jane Doe",
      "email": "jane@example.com",
      "reference": "PO-123",
      "notes": "Please review"
    }
  }'
```

`POST /api/pro/portals/submitForm.php`

Submits a portal form payload (requires auth, Pro).

> Body parameter

```json
{
  "slug": "client-portal",
  "form": {
    "name": "Jane Doe",
    "email": "jane@example.com",
    "reference": "PO-123",
    "notes": "Please review"
  }
}
```

<h3 id="submit-portal-form-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» slug|body|string|true|none|
|» form|body|object|true|none|
|» » name|body|string|false|none|
|» » email|body|string|false|none|
|» » reference|body|string|false|none|
|» » notes|body|string|false|none|

<h3 id="submit-portal-form-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Submission saved|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden or Pro required|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Upload portal logo

<a id="opIdproPortalsUploadLogo"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/portals/uploadLogo.php \
  -X POST \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -F 'portal_logo=@/path/to/file' \
  -F 'slug=client-portal'
```

`POST /api/pro/portals/uploadLogo.php`

Uploads a portal logo image (admin only, Pro).

> Body parameter

```yaml
portal_logo: string
slug: client-portal
```

<h3 id="upload-portal-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» portal_logo|body|string(binary)|true|none|
|» slug|body|string|false|none|

<h3 id="upload-portal-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload result|None|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Forbidden or Pro required|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Search files (Pro)

<a id="opIdproSearchQuery"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/search/query.php \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/pro/search/query.php`

Searches across folders using the Pro search index.

<h3 id="search-files-pro-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|q|query|string|false|Search query|
|limit|query|integer|false|none|
|sourceId|query|string|false|Source id or 'all'|
|force|query|boolean|false|Admins only: force refresh|

<h3 id="search-files-pro-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Search results|None|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Forbidden or Pro required|None|
|503|Service Unavailable|Search disabled|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Upload branding logo

<a id="opIdproUploadBrandLogo"></a>

> Code samples

```bash
curl http://localhost:8080/api/pro/uploadBrandLogo.php \
  -X POST \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -F 'brand_logo=@/path/to/file'
```

`POST /api/pro/uploadBrandLogo.php`

Uploads a branding logo image (admin only, Pro).

> Body parameter

```yaml
brand_logo: string
```

<h3 id="upload-branding-logo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» brand_logo|body|string(binary)|true|none|

<h3 id="upload-branding-logo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Upload result|None|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Forbidden or Pro required|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-totp">TOTP</h1>

TOTP

## Disable TOTP for the authenticated user

<a id="opIddisableTOTP"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/totp_disable.php \
  -X PUT \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`PUT /api/profile/totp_disable.php`

Clears the TOTP secret from the users file for the current user. Accepts PUT or POST.

<h3 id="disable-totp-for-the-authenticated-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "TOTP disabled successfully."
}
```

<h3 id="disable-totp-for-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TOTP disabled successfully|Inline|
|400|Bad Request|Missing username|None|
|403|Forbidden|Not authenticated or invalid CSRF token|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Failed to disable TOTP|None|

<h3 id="disable-totp-for-the-authenticated-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Recover TOTP

<a id="opIdrecoverTOTP"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/totp_recover.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "recovery_code": "ABC123DEF456"
  }'
```

`POST /api/profile/totp_recover.php`

Verifies a recovery code to disable TOTP and finalize login.

> Body parameter

```json
{
  "recovery_code": "ABC123DEF456"
}
```

<h3 id="recover-totp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» recovery_code|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "ok"
}
```

<h3 id="recover-totp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recovery successful|Inline|
|400|Bad Request|Invalid input or recovery code|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Invalid CSRF token|None|
|405|Method Not Allowed|Method not allowed|None|
|429|Too Many Requests|Too many attempts|None|

<h3 id="recover-totp-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Generate and save a new TOTP recovery code

<a id="opIdtotpSaveCode"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/totp_saveCode.php \
  -X POST \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`POST /api/profile/totp_saveCode.php`

Generates a new TOTP recovery code for the authenticated user, stores its hash, and returns the plain text recovery code.

<h3 id="generate-and-save-a-new-totp-recovery-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "ok",
  "recoveryCode": "ABC123DEF456"
}
```

<h3 id="generate-and-save-a-new-totp-recovery-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Recovery code generated successfully|Inline|
|400|Bad Request|Bad Request|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Invalid CSRF token or unauthorized|None|
|405|Method Not Allowed|Method not allowed|None|
|500|Internal Server Error|Server error|None|

<h3 id="generate-and-save-a-new-totp-recovery-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|recoveryCode|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Set up TOTP and generate a QR code

<a id="opIdsetupTOTP"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/totp_setup.php \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}"
```

`GET /api/profile/totp_setup.php`

Generates (or retrieves) the TOTP secret for the user and builds a QR code image for scanning.

<h3 id="set-up-totp-and-generate-a-qr-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|

<h3 id="set-up-totp-and-generate-a-qr-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|QR code image for TOTP setup|None|
|400|Bad Request|Missing username|None|
|403|Forbidden|Not authorized or invalid CSRF token|None|
|500|Internal Server Error|Server error|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Verify TOTP code

<a id="opIdverifyTOTP"></a>

> Code samples

```bash
curl http://localhost:8080/api/profile/totp_verify.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'X-CSRF-Token: string' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "totp_code": "123456"
  }'
```

`POST /api/profile/totp_verify.php`

Verifies a TOTP code and completes login for pending users or validates TOTP for setup verification.

> Body parameter

```json
{
  "totp_code": "123456"
}
```

<h3 id="verify-totp-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|true|none|
|body|body|object|true|none|
|» totp_code|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "status": "ok",
  "message": "Login successful"
}
```

<h3 id="verify-totp-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|TOTP successfully verified|Inline|
|400|Bad Request|Bad Request (e.g., invalid input)|None|
|403|Forbidden|Not authenticated or invalid CSRF token|None|
|429|Too Many Requests|Too many attempts. Try again later.|None|

<h3 id="verify-totp-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

<h1 id="filerise-api-config">Config</h1>

Config

## Get public site configuration

<a id="opIdgetSiteConfig"></a>

> Code samples

```bash
curl http://localhost:8080/api/public/siteConfig.php
```

`GET /api/public/siteConfig.php`

Returns the public site configuration used by the frontend.

<h3 id="get-public-site-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Site config payload|None|
|500|Internal Server Error|Server error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="filerise-api-uploads">Uploads</h1>

Uploads

## Check for existing files before upload

<a id="opIdcheckUploadExisting"></a>

> Code samples

```bash
curl http://localhost:8080/api/upload/checkExisting.php \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d '{
    "folder": "root",
    "sourceId": "local",
    "files": [
      {
        "path": "team/reports/report.pdf",
        "size": 123456
      }
    ]
  }'
```

`POST /api/upload/checkExisting.php`

Checks whether the provided relative paths already exist in the target folder.

> Body parameter

```json
{
  "folder": "root",
  "sourceId": "local",
  "files": [
    {
      "path": "team/reports/report.pdf",
      "size": 123456
    }
  ]
}
```

<h3 id="check-for-existing-files-before-upload-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» sourceId|body|string|false|none|
|» files|body|[object]|true|none|
|» » path|body|string|true|none|
|» » size|body|integer(int64)|false|none|

> Example responses

> 200 Response

```json
{
  "existing": [
    {
      "path": "string",
      "size": 0,
      "sameSize": true
    }
  ]
}
```

<h3 id="check-for-existing-files-before-upload-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Existing files|Inline|
|400|Bad Request|Invalid input|None|
|401|Unauthorized|Unauthorized|None|
|403|Forbidden|Invalid CSRF token|None|

<h3 id="check-for-existing-files-before-upload-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|existing|[object]|false|none|none|
|» path|string|false|none|none|
|» size|integer(int64) \| null|false|none|none|
|» sameSize|boolean \| null|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Remove temporary chunk directory

<a id="opIdremoveChunks"></a>

> Code samples

```bash
curl http://localhost:8080/api/upload/removeChunks.php \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -d 'folder=resumable_myupload123&csrf_token=string'
```

`POST /api/upload/removeChunks.php`

Deletes the temporary directory used for a chunked upload. Requires a valid CSRF token in the form field.

> Body parameter

```yaml
folder: resumable_myupload123
csrf_token: string
```

<h3 id="remove-temporary-chunk-directory-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» folder|body|string|true|none|
|» csrf_token|body|string|true|CSRF token for this session|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "Temporary folder removed."
}
```

<h3 id="remove-temporary-chunk-directory-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Removal result|Inline|
|400|Bad Request|Invalid input|None|
|403|Forbidden|Invalid CSRF token|None|

<h3 id="remove-temporary-chunk-directory-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|
|message|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

## Upload a file (supports chunked + full uploads)

<a id="opIdhandleUpload"></a>

> Code samples

```bash
curl http://localhost:8080/api/upload/upload.php \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: PHPSESSID=${API_KEY}" \
  -F 'fileToUpload=@/path/to/file' \
  -F 'folder=root' \
  -F 'csrf_token=string' \
  -F 'upload_token=string' \
  -F 'resumableChunkNumber=0' \
  -F 'resumableTotalChunks=0' \
  -F 'resumableChunkSize=0' \
  -F 'resumableCurrentChunkSize=0' \
  -F 'resumableTotalSize=0' \
  -F 'resumableType=string' \
  -F 'resumableIdentifier=string' \
  -F 'resumableFilename=string' \
  -F 'resumableRelativePath=string'
```

`POST /api/upload/upload.php`

Requires a session (cookie) and a CSRF token (header preferred; falls back to form field). Checks user/account flags and folder-level WRITE ACL, then delegates to the model. Returns JSON for chunked uploads; full uploads may redirect after success.

> Body parameter

```yaml
fileToUpload: string
folder: root
csrf_token: string
upload_token: string
resumableChunkNumber: 0
resumableTotalChunks: 0
resumableChunkSize: 0
resumableCurrentChunkSize: 0
resumableTotalSize: 0
resumableType: string
resumableIdentifier: string
resumableFilename: string
resumableRelativePath: string
```

<h3 id="upload-a-file-supports-chunked-full-uploads-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|X-CSRF-Token|header|string|false|CSRF token for this session (preferred). If omitted, send as form field `csrf_token`.|
|body|body|object|true|none|
|» fileToUpload|body|string(binary)|true|File or chunk payload.|
|» folder|body|string|false|Target folder (defaults to 'root' if omitted).|
|» csrf_token|body|string|false|CSRF token (form fallback).|
|» upload_token|body|string|false|Legacy alias for CSRF token (accepted by server).|
|» resumableChunkNumber|body|integer|false|none|
|» resumableTotalChunks|body|integer|false|none|
|» resumableChunkSize|body|integer|false|none|
|» resumableCurrentChunkSize|body|integer|false|none|
|» resumableTotalSize|body|integer|false|none|
|» resumableType|body|string|false|none|
|» resumableIdentifier|body|string|false|none|
|» resumableFilename|body|string|false|none|
|» resumableRelativePath|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "success": "File uploaded successfully",
  "newFilename": "5f2d7c123a_example.png"
}
```

<h3 id="upload-a-file-supports-chunked-full-uploads-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|JSON result (success, chunk status, or CSRF refresh).|Inline|
|302|Found|Redirect after a successful full upload.|None|
|400|Bad Request|Bad request (missing/invalid fields, model error)|None|
|401|Unauthorized|Unauthorized (no session)|None|
|403|Forbidden|Forbidden (upload disabled or no WRITE to folder)|None|
|500|Internal Server Error|Server error while processing upload|None|

<h3 id="upload-a-file-supports-chunked-full-uploads-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|none|
|success|string|false|none|none|
|newFilename|string|false|none|none|
|*oneOf*|object|false|none|none|
|status|string|false|none|none|
|*oneOf*|object|false|none|none|
|csrf_expired|boolean|false|none|none|
|csrf_token|string|false|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|302|Location|string||Where the client is redirected|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
cookieAuth
</aside>

# Schemas

<h2 id="tocS_SimpleSuccess">SimpleSuccess</h2>
<!-- backwards compatibility -->
<a id="schemasimplesuccess"></a>
<a id="schema_SimpleSuccess"></a>
<a id="tocSsimplesuccess"></a>
<a id="tocssimplesuccess"></a>

```json
{
  "success": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|false|none|none|

<h2 id="tocS_SimpleError">SimpleError</h2>
<!-- backwards compatibility -->
<a id="schemasimpleerror"></a>
<a id="schema_SimpleError"></a>
<a id="tocSsimpleerror"></a>
<a id="tocssimpleerror"></a>

```json
{
  "error": "Something went wrong"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|

<h2 id="tocS_ShareLinkEntry">ShareLinkEntry</h2>
<!-- backwards compatibility -->
<a id="schemasharelinkentry"></a>
<a id="schema_ShareLinkEntry"></a>
<a id="tocSsharelinkentry"></a>
<a id="tocssharelinkentry"></a>

```json
{
  "folder": "root",
  "file": "invoice.pdf",
  "expires": 1735689600,
  "password": "***",
  "token": "0123456789abcdef0123456789abcdef",
  "sourceId": "local",
  "sourceName": "Local"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|string|false|none|none|
|file|string|false|none|none|
|expires|integer(int64)|false|none|none|
|password|string \| null|false|none|none|
|token|string|false|none|none|
|sourceId|string|false|none|none|
|sourceName|string|false|none|none|

<h2 id="tocS_ShareLinksMap">ShareLinksMap</h2>
<!-- backwards compatibility -->
<a id="schemasharelinksmap"></a>
<a id="schema_ShareLinksMap"></a>
<a id="tocSsharelinksmap"></a>
<a id="tocssharelinksmap"></a>

```json
{
  "property1": {
    "folder": "root",
    "file": "invoice.pdf",
    "expires": 1735689600,
    "password": "***",
    "token": "0123456789abcdef0123456789abcdef",
    "sourceId": "local",
    "sourceName": "Local"
  },
  "property2": {
    "folder": "root",
    "file": "invoice.pdf",
    "expires": 1735689600,
    "password": "***",
    "token": "0123456789abcdef0123456789abcdef",
    "sourceId": "local",
    "sourceName": "Local"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ShareLinkEntry](#schemasharelinkentry)|false|none|none|

<h2 id="tocS_ShareFolderLinkEntry">ShareFolderLinkEntry</h2>
<!-- backwards compatibility -->
<a id="schemasharefolderlinkentry"></a>
<a id="schema_ShareFolderLinkEntry"></a>
<a id="tocSsharefolderlinkentry"></a>
<a id="tocssharefolderlinkentry"></a>

```json
{
  "folder": "shared/reports",
  "expires": 1735689600,
  "password": "***",
  "allowUpload": 1,
  "token": "0123456789abcdef0123456789abcdef",
  "sourceId": "local",
  "sourceName": "Local"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|folder|string|false|none|none|
|expires|integer(int64)|false|none|none|
|password|string \| null|false|none|none|
|allowUpload|integer|false|none|none|
|token|string|false|none|none|
|sourceId|string|false|none|none|
|sourceName|string|false|none|none|

<h2 id="tocS_ShareFolderLinksMap">ShareFolderLinksMap</h2>
<!-- backwards compatibility -->
<a id="schemasharefolderlinksmap"></a>
<a id="schema_ShareFolderLinksMap"></a>
<a id="tocSsharefolderlinksmap"></a>
<a id="tocssharefolderlinksmap"></a>

```json
{
  "property1": {
    "folder": "shared/reports",
    "expires": 1735689600,
    "password": "***",
    "allowUpload": 1,
    "token": "0123456789abcdef0123456789abcdef",
    "sourceId": "local",
    "sourceName": "Local"
  },
  "property2": {
    "folder": "shared/reports",
    "expires": 1735689600,
    "password": "***",
    "allowUpload": 1,
    "token": "0123456789abcdef0123456789abcdef",
    "sourceId": "local",
    "sourceName": "Local"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[ShareFolderLinkEntry](#schemasharefolderlinkentry)|false|none|none|

<h2 id="tocS_LoginOptionsPublic">LoginOptionsPublic</h2>
<!-- backwards compatibility -->
<a id="schemaloginoptionspublic"></a>
<a id="schema_LoginOptionsPublic"></a>
<a id="tocSloginoptionspublic"></a>
<a id="tocsloginoptionspublic"></a>

```json
{
  "disableFormLogin": true,
  "disableBasicAuth": true,
  "disableOIDCLogin": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|disableFormLogin|boolean|false|none|none|
|disableBasicAuth|boolean|false|none|none|
|disableOIDCLogin|boolean|false|none|none|

<h2 id="tocS_LoginOptionsAdminExtra">LoginOptionsAdminExtra</h2>
<!-- backwards compatibility -->
<a id="schemaloginoptionsadminextra"></a>
<a id="schema_LoginOptionsAdminExtra"></a>
<a id="tocSloginoptionsadminextra"></a>
<a id="tocsloginoptionsadminextra"></a>

```json
{
  "authBypass": true,
  "authHeaderName": "X-Remote-User"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authBypass|boolean \| null|false|none|none|
|authHeaderName|string \| null|false|none|none|

<h2 id="tocS_OIDCConfigPublic">OIDCConfigPublic</h2>
<!-- backwards compatibility -->
<a id="schemaoidcconfigpublic"></a>
<a id="schema_OIDCConfigPublic"></a>
<a id="tocSoidcconfigpublic"></a>
<a id="tocsoidcconfigpublic"></a>

```json
{
  "providerUrl": "https://accounts.example.com",
  "redirectUri": "https://your.filerise.app/callback"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|providerUrl|string|false|none|none|
|redirectUri|string|false|none|none|

<h2 id="tocS_AdminGetConfigPublic">AdminGetConfigPublic</h2>
<!-- backwards compatibility -->
<a id="schemaadmingetconfigpublic"></a>
<a id="schema_AdminGetConfigPublic"></a>
<a id="tocSadmingetconfigpublic"></a>
<a id="tocsadmingetconfigpublic"></a>

```json
{
  "header_title": "FileRise",
  "loginOptions": {
    "disableFormLogin": true,
    "disableBasicAuth": true,
    "disableOIDCLogin": true
  },
  "globalOtpauthUrl": "string",
  "enableWebDAV": true,
  "sharedMaxUploadSize": 0,
  "uploads": {
    "resumableChunkMb": 1.5,
    "resumableTtlHours": 6
  },
  "oidc": {
    "providerUrl": "https://accounts.example.com",
    "redirectUri": "https://your.filerise.app/callback"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header_title|string|true|none|none|
|loginOptions|[LoginOptionsPublic](#schemaloginoptionspublic)|true|none|none|
|globalOtpauthUrl|string|true|none|none|
|enableWebDAV|boolean|true|none|none|
|sharedMaxUploadSize|integer(int64)|true|none|none|
|uploads|object|true|none|none|
|oidc|[OIDCConfigPublic](#schemaoidcconfigpublic)|true|none|none|

<h2 id="tocS_AdminGetConfigAdmin">AdminGetConfigAdmin</h2>
<!-- backwards compatibility -->
<a id="schemaadmingetconfigadmin"></a>
<a id="schema_AdminGetConfigAdmin"></a>
<a id="tocSadmingetconfigadmin"></a>
<a id="tocsadmingetconfigadmin"></a>

```json
{
  "header_title": "FileRise",
  "loginOptions": {
    "disableFormLogin": true,
    "disableBasicAuth": true,
    "disableOIDCLogin": true,
    "authBypass": true,
    "authHeaderName": "X-Remote-User"
  },
  "globalOtpauthUrl": "string",
  "enableWebDAV": true,
  "sharedMaxUploadSize": 0,
  "uploads": {
    "resumableChunkMb": 1.5,
    "resumableTtlHours": 6
  },
  "oidc": {
    "providerUrl": "https://accounts.example.com",
    "redirectUri": "https://your.filerise.app/callback"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header_title|string|true|none|none|
|loginOptions|[LoginOptionsPublic](#schemaloginoptionspublic)|true|none|none|
|globalOtpauthUrl|string|true|none|none|
|enableWebDAV|boolean|true|none|none|
|sharedMaxUploadSize|integer(int64)|true|none|none|
|uploads|object|true|none|none|
|oidc|[OIDCConfigPublic](#schemaoidcconfigpublic)|true|none|none|
|loginOptions|object|true|none|none|

<h2 id="tocS_AdminUpdateConfigRequest">AdminUpdateConfigRequest</h2>
<!-- backwards compatibility -->
<a id="schemaadminupdateconfigrequest"></a>
<a id="schema_AdminUpdateConfigRequest"></a>
<a id="tocSadminupdateconfigrequest"></a>
<a id="tocsadminupdateconfigrequest"></a>

```json
{
  "header_title": "FileRise",
  "loginOptions": {
    "disableFormLogin": false,
    "disableBasicAuth": false,
    "disableOIDCLogin": true,
    "authBypass": false,
    "authHeaderName": "X-Remote-User"
  },
  "globalOtpauthUrl": "otpauth://totp/{label}?secret={secret}&issuer=FileRise",
  "enableWebDAV": false,
  "sharedMaxUploadSize": 52428800,
  "uploads": {
    "resumableChunkMb": 1.5,
    "resumableTtlHours": 6
  },
  "oidc": {
    "providerUrl": "https://issuer.example.com",
    "clientId": "my-client-id",
    "clientSecret": "***",
    "redirectUri": "https://app.example.com/auth/callback",
    "groupClaim": "groups",
    "extraScopes": "groups"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|header_title|string|false|none|none|
|loginOptions|object|false|none|none|
|globalOtpauthUrl|string|false|none|none|
|enableWebDAV|boolean|false|none|none|
|sharedMaxUploadSize|integer(int64)|false|none|none|
|uploads|object|false|none|none|
|oidc|object|false|none|When disableOIDCLogin=false (OIDC enabled), providerUrl, redirectUri, and clientId are required.|
