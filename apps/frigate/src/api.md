<h1 id="api">API v0.1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://demo.frigate.video/api">https://demo.frigate.video/api</a>

* <a href="http://localhost:5001/api">http://localhost:5001/api</a>

# Authentication

* API Key (frigateAdminAuth)
    - Parameter Name: **frigate_token**, in: cookie. Authenticated session whose resolved role is 'admin'. The session is established via the JWT cookie issued by POST /login, or via proxy auth headers (remote-user / remote-role) when Frigate runs behind an authenticating reverse proxy.

* API Key (frigateUserAuth)
    - Parameter Name: **frigate_token**, in: cookie. Any authenticated session (role 'viewer' or higher), established via the JWT cookie issued by POST /login, or via proxy auth headers when Frigate runs behind an authenticating reverse proxy.

<h1 id="api-auth">Auth</h1>

## First Time Login

<a id="opIdfirst_time_login_auth_first_time_login_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/auth/first_time_login \
  -H 'Accept: application/json'
```

`GET /auth/first_time_login`

**Access:** Public — no authentication required.

Return whether the admin first-time login help flag is set in config.

This endpoint is intentionally unauthenticated so the login page can
query it before a user is authenticated.

> Example responses

> 200 Response

```json
null
```

<h3 id="first-time-login-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Authenticate request

<a id="opIdauth_auth_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/auth \
  -H 'Accept: application/json'
```

`GET /auth`

**Access:** Public — no authentication required.

Authenticates the current request based on proxy headers or JWT token. This endpoint verifies authentication credentials and manages JWT token refresh. On success, no JSON body is returned; authentication state is communicated via response headers and cookies.

> Example responses

> 202 Response

```json
null
```

<h3 id="authenticate-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Authentication Accepted (no response body)|Inline|
|401|Unauthorized|Authentication Failed|None|
|403|Forbidden|Access Denied (proxy user resolved to a default role of 'none')|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|remote-user|string||Authenticated username or "viewer" in proxy-only mode|
|202|remote-role|string||Resolved role (e.g., admin, viewer, or custom)|
|202|Set-Cookie|string||May include refreshed JWT cookie when applicable|

<aside class="success">
This operation does not require authentication
</aside>

## Get user profile

<a id="opIdprofile_profile_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/profile \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /profile`

**Access:** Any authenticated user.

Returns the current authenticated user's profile including username, role, and allowed cameras. This endpoint requires authentication and returns information about the user's permissions.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Logout user

<a id="opIdlogout_logout_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/logout \
  -H 'Accept: application/json'
```

`GET /logout`

**Access:** Public — no authentication required.

Logs out the current user by clearing the session cookie. After logout, subsequent requests will require re-authentication.

> Example responses

> 200 Response

```json
null
```

<h3 id="logout-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Login with credentials

<a id="opIdlogin_login_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user": "string",
    "password": "string"
  }'
```

`POST /login`

**Access:** Public — no authentication required.

Authenticates a user with username and password. Returns a JWT token as a secure HTTP-only cookie that can be used for subsequent API requests. The JWT token can also be retrieved from the response and used as a Bearer token in the Authorization header.

Example using Bearer token:
```
curl -H "Authorization: Bearer <token_value>" https://frigate_ip:8971/api/profile
```

> Body parameter

```json
{
  "user": "string",
  "password": "string"
}
```

<h3 id="login-with-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppPostLoginBody](#schemaapppostloginbody)|true|none|
|» user|body|string|true|none|
|» password|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="login-with-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="success">
This operation does not require authentication
</aside>

## Get all users

<a id="opIdget_users_users_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/users \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /users`

**Access:** Admin role required.

Returns a list of all users with their usernames and roles. Requires admin role. Each user object contains the username and assigned role.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-all-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Create new user

<a id="opIdcreate_user_users_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "username": "string",
    "password": "string",
    "role": "viewer"
  }'
```

`POST /users`

**Access:** Admin role required.

Creates a new user with the specified username, password, and role. Requires admin role. Password must be at least 12 characters long.

> Body parameter

```json
{
  "username": "string",
  "password": "string",
  "role": "viewer"
}
```

<h3 id="create-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppPostUsersBody](#schemaapppostusersbody)|true|none|
|» username|body|string|true|none|
|» password|body|string|true|none|
|» role|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Delete user

<a id="opIddelete_user_users__username__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /users/{username}`

**Access:** Admin role required.

Deletes a user by username. The built-in admin user cannot be deleted. Requires admin role. Returns success message or error if user not found.

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Update user password

<a id="opIdupdate_password_users__username__password_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/users/string/password \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "password": "string",
    "old_password": "string"
  }'
```

`PUT /users/{username}/password`

**Access:** Any authenticated user.

Updates a user's password. Users can only change their own password unless they have admin role. Requires the current password to verify identity for non-admin users. Password must be at least 12 characters long. If user changes their own password, a new JWT cookie is automatically issued.

> Body parameter

```json
{
  "password": "string",
  "old_password": "string"
}
```

<h3 id="update-user-password-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|body|body|[AppPutPasswordBody](#schemaappputpasswordbody)|true|none|
|» password|body|string|true|none|
|» old_password|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="update-user-password-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Update user role

<a id="opIdupdate_role_users__username__role_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/users/string/role \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "role": "string"
  }'
```

`PUT /users/{username}/role`

**Access:** Admin role required.

Updates a user's role. The built-in admin user's role cannot be modified. Requires admin role. Valid roles are defined in the configuration.

> Body parameter

```json
{
  "role": "string"
}
```

<h3 id="update-user-role-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|none|
|body|body|[AppPutRoleBody](#schemaappputrolebody)|true|none|
|» role|body|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="update-user-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-camera">Camera</h1>

## Go2Rtc Streams

<a id="opIdgo2rtc_streams_go2rtc_streams_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/go2rtc/streams \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /go2rtc/streams`

**Access:** Any authenticated user.

> Example responses

> 200 Response

```json
null
```

<h3 id="go2rtc-streams-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Go2Rtc Camera Stream

<a id="opIdgo2rtc_camera_stream_go2rtc_streams__stream_name__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/go2rtc/streams/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /go2rtc/streams/{stream_name}`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="go2rtc-camera-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stream_name|path|string \| null|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="go2rtc-camera-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Go2Rtc Add Stream

<a id="opIdgo2rtc_add_stream_go2rtc_streams__stream_name__put"></a>

> Code samples

```bash
curl http://localhost:5000/api/go2rtc/streams/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`PUT /go2rtc/streams/{stream_name}`

**Access:** Admin role required.

Add or update a go2rtc stream configuration.

<h3 id="go2rtc-add-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stream_name|path|string|true|none|
|src|query|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="go2rtc-add-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Go2Rtc Delete Stream

<a id="opIdgo2rtc_delete_stream_go2rtc_streams__stream_name__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/go2rtc/streams/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /go2rtc/streams/{stream_name}`

**Access:** Admin role required.

Delete a go2rtc stream.

<h3 id="go2rtc-delete-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stream_name|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="go2rtc-delete-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Go2Rtc Stream Bitrate

<a id="opIdgo2rtc_stream_bitrate_go2rtc_streams__stream_name__bitrate_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/go2rtc/streams/string/bitrate \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /go2rtc/streams/{stream_name}/bitrate`

**Access:** Admin role required.

Measure a go2rtc stream's bitrate over a few seconds.

<h3 id="go2rtc-stream-bitrate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|stream_name|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="go2rtc-stream-bitrate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Ffprobe

<a id="opIdffprobe_ffprobe_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/ffprobe \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /ffprobe`

**Access:** Admin role required.

<h3 id="ffprobe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|paths|query|string|false|none|
|detailed|query|boolean|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="ffprobe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Keyframe Analysis

<a id="opIdkeyframe_analysis_keyframe_analysis_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/keyframe_analysis \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /keyframe_analysis`

**Access:** Admin role required.

Probe a camera's record stream and classify its keyframe spacing.

Detects smart/+ codecs and long/variable GOPs that degrade recording.

<h3 id="keyframe-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera|query|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="keyframe-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Ffprobe Snapshot

<a id="opIdffprobe_snapshot_ffprobe_snapshot_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/ffprobe/snapshot \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /ffprobe/snapshot`

**Access:** Admin role required.

Get a snapshot from a stream URL using ffmpeg.

<h3 id="ffprobe-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|
|timeout|query|integer|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="ffprobe-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Reolink Detect

<a id="opIdreolink_detect_reolink_detect_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/reolink/detect \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /reolink/detect`

**Access:** Admin role required.

Detect Reolink camera capabilities and recommend optimal protocol.

Queries the Reolink camera API to determine the camera's resolution
and recommends either http-flv (for 5MP and below) or rtsp (for higher resolutions).

<h3 id="reolink-detect-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|query|string|false|none|
|username|query|string|false|none|
|password|query|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="reolink-detect-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Probe ONVIF device

<a id="opIdonvif_probe_onvif_probe_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/onvif/probe \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /onvif/probe`

**Access:** Admin role required.

Probe an ONVIF device to determine capabilities and optionally test available stream URIs. Query params: host (required), port (default 80), username, password, test (boolean), auth_type (basic or digest, default basic).

<h3 id="probe-onvif-device-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|host|query|string|false|none|
|port|query|integer|false|none|
|username|query|string|false|none|
|password|query|string|false|none|
|test|query|boolean|false|none|
|auth_type|query|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="probe-onvif-device-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Delete Camera

<a id="opIddelete_camera_cameras__camera_name__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/cameras/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /cameras/{camera_name}`

**Access:** Admin role required.

Delete a camera and all its associated data.

Removes the camera from config, stops processes, and cleans up
all database entries and media files.

Args:
    camera_name: Name of the camera to delete
    delete_exports: Whether to also delete exports for this camera

<h3 id="delete-camera-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|
|delete_exports|query|boolean|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-camera-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Camera Set

<a id="opIdcamera_set_camera__camera_name__set__feature___sub_command__put"></a>

> Code samples

```bash
curl http://localhost:5000/api/camera/string/set/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "value": "string"
  }'
```

`PUT /camera/{camera_name}/set/{feature}/{sub_command}`

**Access:** Admin role required.

Set a camera feature state. Use camera_name='*' to target all cameras.

The value to set is sent in the request body as `{"value": "<value>"}`.

| Feature | Accepted values |
| --- | --- |
| `enabled` | `ON`, `OFF` |
| `detect` | `ON`, `OFF` |
| `motion` | `ON`, `OFF` |
| `recordings` | `ON`, `OFF` |
| `snapshots` | `ON`, `OFF` |
| `audio` | `ON`, `OFF` |
| `audio_transcription` | `ON`, `OFF` |
| `notifications` | `ON`, `OFF` |
| `review_alerts` | `ON`, `OFF` |
| `review_detections` | `ON`, `OFF` |
| `object_descriptions` | `ON`, `OFF` |
| `review_descriptions` | `ON`, `OFF` |
| `improve_contrast` | `ON`, `OFF` |
| `ptz_autotracker` | `ON`, `OFF` |
| `birdseye` | `ON`, `OFF` |
| `birdseye_modes` | `CONTINUOUS`, `MOTION`, `ALL_OBJECTS`, `ALERTS`, `DETECTIONS`, `NONE`, or a comma-separated combination |
| `motion_contour_area` | integer |
| `motion_threshold` | integer |
| `motion_mask` | `ON`, `OFF` |
| `object_mask` | `ON`, `OFF` |
| `zone` | `ON`, `OFF` |
| `profile` | a profile name, or `none` to deactivate |

`motion_mask`, `object_mask`, and `zone` require the `sub_command` path
parameter to be set to the name of the mask or zone. All other features
reject a sub-command.

`profile` applies globally rather than per camera, so it requires
`camera_name` to be `*`.

These features map to the equivalent MQTT topics, which document the
behavior of each value in more detail.

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="camera-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|
|feature|path|string|true|none|
|sub_command|path|string \| null|true|none|
|body|body|[CameraSetBody](#schemacamerasetbody)|true|none|
|» value|body|string|true|The value to set for the feature|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="camera-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Camera Set

<a id="opIdcamera_set_camera__camera_name__set__feature__put"></a>

> Code samples

```bash
curl http://localhost:5000/api/camera/string/set/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "value": "string"
  }'
```

`PUT /camera/{camera_name}/set/{feature}`

**Access:** Admin role required.

Set a camera feature state. Use camera_name='*' to target all cameras.

The value to set is sent in the request body as `{"value": "<value>"}`.

| Feature | Accepted values |
| --- | --- |
| `enabled` | `ON`, `OFF` |
| `detect` | `ON`, `OFF` |
| `motion` | `ON`, `OFF` |
| `recordings` | `ON`, `OFF` |
| `snapshots` | `ON`, `OFF` |
| `audio` | `ON`, `OFF` |
| `audio_transcription` | `ON`, `OFF` |
| `notifications` | `ON`, `OFF` |
| `review_alerts` | `ON`, `OFF` |
| `review_detections` | `ON`, `OFF` |
| `object_descriptions` | `ON`, `OFF` |
| `review_descriptions` | `ON`, `OFF` |
| `improve_contrast` | `ON`, `OFF` |
| `ptz_autotracker` | `ON`, `OFF` |
| `birdseye` | `ON`, `OFF` |
| `birdseye_modes` | `CONTINUOUS`, `MOTION`, `ALL_OBJECTS`, `ALERTS`, `DETECTIONS`, `NONE`, or a comma-separated combination |
| `motion_contour_area` | integer |
| `motion_threshold` | integer |
| `motion_mask` | `ON`, `OFF` |
| `object_mask` | `ON`, `OFF` |
| `zone` | `ON`, `OFF` |
| `profile` | a profile name, or `none` to deactivate |

`motion_mask`, `object_mask`, and `zone` require the `sub_command` path
parameter to be set to the name of the mask or zone. All other features
reject a sub-command.

`profile` applies globally rather than per camera, so it requires
`camera_name` to be `*`.

These features map to the equivalent MQTT topics, which document the
behavior of each value in more detail.

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="camera-set-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|
|feature|path|string|true|none|
|sub_command|query|string \| null|false|none|
|body|body|[CameraSetBody](#schemacamerasetbody)|true|none|
|» value|body|string|true|The value to set for the feature|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="camera-set-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-chat">Chat</h1>

## Get available tools

<a id="opIdget_tools_chat_tools_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/chat/tools \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /chat/tools`

**Access:** Admin role required.

Returns OpenAI-compatible tool definitions for function calling.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-available-tools-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Execute a tool

<a id="opIdexecute_tool_chat_execute_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/chat/execute \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "tool_name": "string",
    "arguments": {}
  }'
```

`POST /chat/execute`

**Access:** Admin role required.

Execute a tool function call from an LLM.

> Body parameter

```json
{
  "tool_name": "string",
  "arguments": {}
}
```

<h3 id="execute-a-tool-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ToolExecuteRequest](#schematoolexecuterequest)|true|none|
|» tool_name|body|string|true|none|
|» arguments|body|object|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="execute-a-tool-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Chat completion with tool calling

<a id="opIdchat_completion_chat_completion_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/chat/completion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "messages": [
      {
        "role": "string",
        "content": null,
        "tool_call_id": "string",
        "name": "string",
        "tool_calls": [
          {}
        ]
      }
    ],
    "max_tool_iterations": 5,
    "stream": false,
    "enable_thinking": true,
    "tool_decisions": {
      "property1": "approve",
      "property2": "approve"
    }
  }'
```

`POST /chat/completion`

**Access:** Admin role required.

Send a chat message to the configured GenAI provider with tool calling support. The LLM can call Frigate tools to answer questions about your cameras and events.

> Body parameter

```json
{
  "messages": [
    {
      "role": "string",
      "content": null,
      "tool_call_id": "string",
      "name": "string",
      "tool_calls": [
        {}
      ]
    }
  ],
  "max_tool_iterations": 5,
  "stream": false,
  "enable_thinking": true,
  "tool_decisions": {
    "property1": "approve",
    "property2": "approve"
  }
}
```

<h3 id="chat-completion-with-tool-calling-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ChatCompletionRequest](#schemachatcompletionrequest)|true|none|
|» messages|body|[[ChatMessage](#schemachatmessage)]|true|List of messages in the conversation|
|» max_tool_iterations|body|integer|false|Maximum number of tool call iterations (default: 5)|
|» stream|body|boolean|false|If true, stream the final assistant response in the body as newline-delimited JSON.|
|» enable_thinking|body|boolean \| null|false|Per-request thinking toggle. None means use the provider default. Ignored by providers that do not expose a per-request thinking switch.|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» tool_decisions|body|object|false|Decisions for tool calls that paused for approval, keyed by tool call ID. Send these with the conversation chain returned alongside an approval request; rejected calls are reported to the model as declined instead of being executed.|
|» » **additionalProperties**|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » **additionalProperties**|approve|
|» » **additionalProperties**|reject|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="chat-completion-with-tool-calling-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get current VLM watch job

<a id="opIdget_vlm_monitor_vlm_monitor_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/vlm/monitor \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /vlm/monitor`

**Access:** Admin role required.

Returns the current (or most recently completed) VLM watch job.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-current-vlm-watch-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Start a VLM watch job

<a id="opIdstart_vlm_monitor_vlm_monitor_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/vlm/monitor \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "camera": "string",
    "condition": "string",
    "max_duration_minutes": 60,
    "labels": [],
    "zones": []
  }'
```

`POST /vlm/monitor`

**Access:** Admin role required.

Start monitoring a camera with the vision provider. The VLM analyzes live frames until the specified condition is met, then sends a notification. Only one watch job can run at a time.

> Body parameter

```json
{
  "camera": "string",
  "condition": "string",
  "max_duration_minutes": 60,
  "labels": [],
  "zones": []
}
```

<h3 id="start-a-vlm-watch-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VLMMonitorRequest](#schemavlmmonitorrequest)|true|none|
|» camera|body|string|true|none|
|» condition|body|string|true|none|
|» max_duration_minutes|body|integer|false|none|
|» labels|body|[string]|false|none|
|» zones|body|[string]|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="start-a-vlm-watch-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Cancel the current VLM watch job

<a id="opIdcancel_vlm_monitor_vlm_monitor_delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/vlm/monitor \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /vlm/monitor`

**Access:** Admin role required.

Cancels the running watch job if one exists.

> Example responses

> 200 Response

```json
null
```

<h3 id="cancel-the-current-vlm-watch-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-classification">Classification</h1>

## Get all registered faces

<a id="opIdget_faces_faces_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /faces`

**Access:** Admin role required.

Returns a dictionary mapping face names to lists of image filenames.
    Each key represents a registered face name, and the value is a list of image
    files associated with that face. Supported image formats include .webp, .png,
    .jpg, and .jpeg.

> Example responses

> 200 Response

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

<h3 id="get-all-registered-faces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[FacesResponse](#schemafacesresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Reprocess a face training image

<a id="opIdreclassify_face_faces_reprocess_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces/reprocess \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`POST /faces/reprocess`

**Access:** Admin role required.

Reprocesses a face training image to update the prediction.
    Requires face recognition to be enabled in the configuration. The training file
    must exist in the faces/train directory. Returns a success response or an error
    message if face recognition is not enabled or the training file is invalid.

> Body parameter

```json
{}
```

<h3 id="reprocess-a-face-training-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="reprocess-a-face-training-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Classify and save a face training image

<a id="opIdtrain_face_faces_train__name__classify_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces/train/string/classify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`POST /faces/train/{name}/classify`

**Access:** Admin role required.

Adds a training image to a specific face name for face recognition.
    Accepts either a training file from the train directory or an event_id to extract
    the face from. The image is saved to the face's directory and the face classifier
    is cleared to incorporate the new training data. Returns a success message with
    the new filename or an error if face recognition is not enabled, the file/event
    is invalid, or the face cannot be extracted.

> Body parameter

```json
{}
```

<h3 id="classify-and-save-a-face-training-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="classify-and-save-a-face-training-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Create a new face name

<a id="opIdcreate_face_faces__name__create_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces/string/create \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /faces/{name}/create`

**Access:** Admin role required.

Creates a new folder for a face name in the faces directory.
    This is used to organize face training images. The face name is sanitized and
    spaces are replaced with underscores. Returns a success message or an error if
    face recognition is not enabled.

<h3 id="create-a-new-face-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-a-new-face-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Register a face image

<a id="opIdregister_face_faces__name__register_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces/string/register \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -F 'file=string'
```

`POST /faces/{name}/register`

**Access:** Admin role required.

Registers a face image for a specific face name by uploading an image file.
    The uploaded image is processed and added to the face recognition system. Returns a
    success response with details about the registration, or an error if face recognition
    is not enabled or the image cannot be processed.

> Body parameter

```yaml
file: string
```

<h3 id="register-a-face-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[Body_register_face_faces__name__register_post](#schemabody_register_face_faces__name__register_post)|true|none|
|» file|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="register-a-face-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Recognize a face from an uploaded image

<a id="opIdrecognize_face_faces_recognize_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces/recognize \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -F 'file=string'
```

`POST /faces/recognize`

**Access:** Admin role required.

Recognizes a face from an uploaded image file by comparing it against
    registered faces in the system. Returns the recognized face name and confidence score,
    or an error if face recognition is not enabled or the image cannot be processed.

> Body parameter

```yaml
file: string
```

<h3 id="recognize-a-face-from-an-uploaded-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Body_recognize_face_faces_recognize_post](#schemabody_recognize_face_faces_recognize_post)|true|none|
|» file|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "score": 0,
  "face_name": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="recognize-a-face-from-an-uploaded-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[FaceRecognitionResponse](#schemafacerecognitionresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Reclassify a face image to a different name

<a id="opIdreclassify_face_image_faces__name__reclassify_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces/string/reclassify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`POST /faces/{name}/reclassify`

**Access:** Admin role required.

Moves a single face image from one person's folder to another.
    The image is moved and renamed, and the face classifier is cleared to
    incorporate the change. Returns a success message or an error if the
    image or target name is invalid.

> Body parameter

```json
{}
```

<h3 id="reclassify-a-face-image-to-a-different-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="reclassify-a-face-image-to-a-different-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Delete face images

<a id="opIdderegister_faces_faces__name__delete_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces/string/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`POST /faces/{name}/delete`

**Access:** Admin role required.

Deletes specific face images for a given face name. The image IDs must belong
    to the specified face folder. To delete an entire face folder, all image IDs in that
    folder must be sent. Returns a success message or an error if face recognition is not enabled.

> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="delete-face-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|[DeleteFaceImagesBody](#schemadeletefaceimagesbody)|true|none|
|» ids|body|[string]|true|List of image filenames to delete from the face folder|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-face-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Rename a face name

<a id="opIdrename_face_faces__old_name__rename_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/faces/string/rename \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "new_name": "string"
  }'
```

`PUT /faces/{old_name}/rename`

**Access:** Admin role required.

Renames a face name in the system. The old name must exist and the new
    name must be valid. Returns a success message or an error if face recognition is not enabled.

> Body parameter

```json
{
  "new_name": "string"
}
```

<h3 id="rename-a-face-name-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|old_name|path|string|true|none|
|body|body|[RenameFaceBody](#schemarenamefacebody)|true|none|
|» new_name|body|string|true|New name for the face|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="rename-a-face-name-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Reprocess a license plate

<a id="opIdreprocess_license_plate_lpr_reprocess_put"></a>

> Code samples

```bash
curl 'http://localhost:5000/api/lpr/reprocess?event_id=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`PUT /lpr/reprocess`

**Access:** Admin role required.

Reprocesses a license plate image to update the plate.
    Requires license plate recognition to be enabled in the configuration. The event_id
    must exist in the database. Returns a success message or an error if license plate
    recognition is not enabled or the event_id is invalid.

<h3 id="reprocess-a-license-plate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|query|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="reprocess-a-license-plate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Reindex embeddings

<a id="opIdreindex_embeddings_reindex_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/reindex \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`PUT /reindex`

**Access:** Admin role required.

Reindexes the embeddings for all tracked objects.
    Requires semantic search to be enabled in the configuration. Returns a success message or an error if semantic search is not enabled.

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

<h3 id="reindex-embeddings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Transcribe audio

<a id="opIdtranscribe_audio_audio_transcribe_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/audio/transcribe \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "event_id": "string"
  }'
```

`PUT /audio/transcribe`

**Access:** Admin role required.

Transcribes audio from a specific event.
    Requires audio transcription to be enabled in the configuration. The event_id
    must exist in the database. Returns a success message or an error if audio transcription is not enabled or the event_id is invalid.

> Body parameter

```json
{
  "event_id": "string"
}
```

<h3 id="transcribe-audio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AudioTranscriptionBody](#schemaaudiotranscriptionbody)|true|none|
|» event_id|body|string|true|ID of the event to transcribe audio for|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="transcribe-audio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get classification dataset

<a id="opIdget_classification_dataset_classification__name__dataset_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/dataset \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /classification/{name}/dataset`

**Access:** Admin role required.

Gets the dataset for a specific classification model.
    The name must exist in the classification models. Returns a success message or an error if the name is invalid.

<h3 id="get-classification-dataset-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-classification-dataset-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get custom classification attributes

<a id="opIdget_custom_attributes_classification_attributes_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/attributes \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /classification/attributes`

**Access:** Authenticated user with access to all cameras.

Returns custom classification attributes for a given object type.
    Only includes models with classification_type set to 'attribute'.
    By default returns a flat sorted list of all attribute labels.
    If group_by_model is true, returns attributes grouped by model name.

<h3 id="get-custom-classification-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_type|query|string|false|none|
|group_by_model|query|boolean|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-custom-classification-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get classification train images

<a id="opIdget_classification_images_classification__name__train_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/train \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /classification/{name}/train`

**Access:** Admin role required.

Gets the train images for a specific classification model.
    The name must exist in the classification models. Returns a success message or an error if the name is invalid.

<h3 id="get-classification-train-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-classification-train-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Train a classification model

<a id="opIdtrain_configured_model_classification__name__train_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/train \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /classification/{name}/train`

**Access:** Admin role required.

Trains a specific classification model.
    The name must exist in the classification models. Returns a success message or an error if the name is invalid.

<h3 id="train-a-classification-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="train-a-classification-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Delete classification dataset images

<a id="opIddelete_classification_dataset_images_classification__name__dataset__category__delete_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/dataset/string/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`POST /classification/{name}/dataset/{category}/delete`

**Access:** Admin role required.

Deletes specific dataset images for a given classification model and category.
    The image IDs must belong to the specified category. Returns a success message or an error if the name or category is invalid.

> Body parameter

```json
{}
```

<h3 id="delete-classification-dataset-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|category|path|string|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-classification-dataset-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Reclassify a dataset image to a different category

<a id="opIdreclassify_classification_image_classification__name__dataset__category__reclassify_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/dataset/string/reclassify \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`POST /classification/{name}/dataset/{category}/reclassify`

**Access:** Admin role required.

Moves a single dataset image from one category to another.
    The image is re-saved as PNG in the target category and removed from the source.

> Body parameter

```json
{}
```

<h3 id="reclassify-a-dataset-image-to-a-different-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|category|path|string|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="reclassify-a-dataset-image-to-a-different-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Rename a classification category

<a id="opIdrename_classification_category_classification__name__dataset__old_category__rename_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/dataset/string/rename \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`PUT /classification/{name}/dataset/{old_category}/rename`

**Access:** Admin role required.

Renames a classification category for a given classification model.
    The old category must exist and the new name must be valid. Returns a success message or an error if the name is invalid.

> Body parameter

```json
{}
```

<h3 id="rename-a-classification-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|old_category|path|string|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="rename-a-classification-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Categorize a classification image

<a id="opIdcategorize_classification_image_classification__name__dataset_categorize_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/dataset/categorize \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`POST /classification/{name}/dataset/categorize`

**Access:** Admin role required.

Categorizes a specific classification image for a given classification model and category.
    The image must exist in the specified category. Returns a success message or an error if the name or category is invalid.

> Body parameter

```json
{}
```

<h3 id="categorize-a-classification-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="categorize-a-classification-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Create an empty classification category folder

<a id="opIdcreate_classification_category_classification__name__dataset__category__create_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/dataset/string/create \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /classification/{name}/dataset/{category}/create`

**Access:** Admin role required.

Creates an empty folder for a classification category.
    This is used to create folders for categories that don't have images yet.
    Returns a success message or an error if the name is invalid.

<h3 id="create-an-empty-classification-category-folder-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|category|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-an-empty-classification-category-folder-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Delete classification train images

<a id="opIddelete_classification_train_images_classification__name__train_delete_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string/train/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`POST /classification/{name}/train/delete`

**Access:** Admin role required.

Deletes specific train images for a given classification model.
    The image IDs must belong to the specified train folder. Returns a success message or an error if the name is invalid.

> Body parameter

```json
{}
```

<h3 id="delete-classification-train-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-classification-train-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Generate state classification examples

<a id="opIdgenerate_state_examples_classification_generate_examples_state_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/generate_examples/state \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "model_name": "string",
    "cameras": {
      "property1": [
        0,
        0,
        0,
        0
      ],
      "property2": [
        0,
        0,
        0,
        0
      ]
    }
  }'
```

`POST /classification/generate_examples/state`

**Access:** Admin role required.

Generate examples for state classification.

> Body parameter

```json
{
  "model_name": "string",
  "cameras": {
    "property1": [
      0,
      0,
      0,
      0
    ],
    "property2": [
      0,
      0,
      0,
      0
    ]
  }
}
```

<h3 id="generate-state-classification-examples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateStateExamplesBody](#schemageneratestateexamplesbody)|true|none|
|» model_name|body|string|true|Name of the classification model|
|» cameras|body|object|true|Dictionary mapping camera names to normalized crop coordinates in [x1, y1, x2, y2] format (values 0-1)|
|» » **additionalProperties**|body|[number, number, number, number]|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="generate-state-classification-examples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Generate object classification examples

<a id="opIdgenerate_object_examples_classification_generate_examples_object_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/generate_examples/object \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "model_name": "string",
    "label": "string"
  }'
```

`POST /classification/generate_examples/object`

**Access:** Admin role required.

Generate examples for object classification.

> Body parameter

```json
{
  "model_name": "string",
  "label": "string"
}
```

<h3 id="generate-object-classification-examples-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenerateObjectExamplesBody](#schemagenerateobjectexamplesbody)|true|none|
|» model_name|body|string|true|Name of the classification model|
|» label|body|string|true|Object label to collect examples for (e.g., 'person', 'car')|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="generate-object-classification-examples-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Delete a classification model

<a id="opIddelete_classification_model_classification__name__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/classification/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /classification/{name}`

**Access:** Admin role required.

Deletes a specific classification model and all its associated data.
    Works even if the model is not in the config (e.g., partially created during wizard).
    Returns a success message.

<h3 id="delete-a-classification-model-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-a-classification-model-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-review">Review</h1>

## Review

<a id="opIdreview_review_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/review \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /review`

**Access:** Any authenticated user.

<h3 id="review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cameras|query|string|false|none|
|labels|query|string|false|none|
|zones|query|string|false|none|
|reviewed|query|integer|false|none|
|limit|query|integer|false|none|
|severity|query|[SeverityEnum](#schemaseverityenum)|false|none|
|before|query|number|false|none|
|after|query|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|severity|alert|
|severity|detection|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "camera": "string",
    "start_time": "1970-01-01T00:00:00Z",
    "end_time": "1970-01-01T00:00:00Z",
    "has_been_reviewed": true,
    "severity": "alert",
    "thumb_path": "string",
    "data": null
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="review-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReviewSegmentResponse](#schemareviewsegmentresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Review Ids

<a id="opIdreview_ids_review_ids_get"></a>

> Code samples

```bash
curl 'http://localhost:5000/api/review_ids?ids=string' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /review_ids`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="review-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "camera": "string",
    "start_time": "1970-01-01T00:00:00Z",
    "end_time": "1970-01-01T00:00:00Z",
    "has_been_reviewed": true,
    "severity": "alert",
    "thumb_path": "string",
    "data": null
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="review-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="review-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReviewSegmentResponse](#schemareviewsegmentresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Review Summary

<a id="opIdreview_summary_review_summary_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/summary \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /review/summary`

**Access:** Any authenticated user.

<h3 id="review-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cameras|query|string|false|none|
|labels|query|string|false|none|
|zones|query|string|false|none|
|timezone|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "last24Hours": {
    "reviewed_alert": 0,
    "reviewed_detection": 0,
    "total_alert": 0,
    "total_detection": 0
  },
  "root": {
    "property1": {
      "day": "1970-01-01T00:00:00Z",
      "reviewed_alert": 0,
      "reviewed_detection": 0,
      "total_alert": 0,
      "total_detection": 0
    },
    "property2": {
      "day": "1970-01-01T00:00:00Z",
      "reviewed_alert": 0,
      "reviewed_detection": 0,
      "total_alert": 0,
      "total_detection": 0
    }
  }
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="review-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ReviewSummaryResponse](#schemareviewsummaryresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Set Multiple Reviewed

<a id="opIdset_multiple_reviewed_reviews_viewed_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/reviews/viewed \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "ids": [
      "string"
    ],
    "reviewed": true
  }'
```

`POST /reviews/viewed`

**Access:** Authenticated user with access to the referenced camera.

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "reviewed": true
}
```

<h3 id="set-multiple-reviewed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReviewModifyMultipleBody](#schemareviewmodifymultiplebody)|true|none|
|» ids|body|[string]|true|none|
|» reviewed|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="set-multiple-reviewed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Delete Reviews

<a id="opIddelete_reviews_reviews_delete_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/reviews/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "ids": [
      "string"
    ],
    "reviewed": true
  }'
```

`POST /reviews/delete`

**Access:** Admin role required.

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "reviewed": true
}
```

<h3 id="delete-reviews-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ReviewModifyMultipleBody](#schemareviewmodifymultiplebody)|true|none|
|» ids|body|[string]|true|none|
|» reviewed|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-reviews-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Motion Activity

<a id="opIdmotion_activity_review_activity_motion_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/activity/motion \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /review/activity/motion`

**Access:** Any authenticated user.

Get motion and audio activity.

<h3 id="motion-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cameras|query|string|false|none|
|before|query|number|false|none|
|after|query|number|false|none|
|scale|query|integer|false|none|

> Example responses

> 200 Response

```json
[
  {
    "start_time": 0,
    "motion": 0,
    "camera": "string"
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="motion-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="motion-activity-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ReviewActivityMotionResponse](#schemareviewactivitymotionresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get Review From Event

<a id="opIdget_review_from_event_review_event__event_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/event/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /review/event/{event_id}`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="get-review-from-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "camera": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "has_been_reviewed": true,
  "severity": "alert",
  "thumb_path": "string",
  "data": null
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-review-from-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ReviewSegmentResponse](#schemareviewsegmentresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get Review

<a id="opIdget_review_review__review_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /review/{review_id}`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="get-review-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|review_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "camera": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "has_been_reviewed": true,
  "severity": "alert",
  "thumb_path": "string",
  "data": null
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-review-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ReviewSegmentResponse](#schemareviewsegmentresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Generate a review item description

<a id="opIdregenerate_review_description_review__review_id__regenerate_description_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/string/regenerate_description \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`PUT /review/{review_id}/regenerate_description`

**Access:** Admin role required.

Re-runs a review item through the GenAI descriptions process.
    Frames are always taken from recordings, and both alerts and detections are
    accepted regardless of the camera's GenAI alerts/detections toggles.

<h3 id="generate-a-review-item-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|review_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="generate-a-review-item-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Set Not Reviewed

<a id="opIdset_not_reviewed_review__review_id__viewed_delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/string/viewed \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /review/{review_id}/viewed`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="set-not-reviewed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|review_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="set-not-reviewed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Generate Review Summary

<a id="opIdgenerate_review_summary_review_summarize_start__start_ts__end__end_ts__post"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/summarize/start/0/end/0 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /review/summarize/start/{start_ts}/end/{end_ts}`

**Access:** Authenticated user with access to all cameras.

Use GenAI to summarize review items over a period of time.

<h3 id="generate-review-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="generate-review-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

<h1 id="api-app">App</h1>

## Is Healthy

<a id="opIdis_healthy__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/
```

`GET /`

**Access:** Public — no authentication required.

<h3 id="is-healthy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Config Schema

<a id="opIdconfig_schema_config_schema_json_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/config/schema.json \
  -H 'Accept: application/json'
```

`GET /config/schema.json`

**Access:** Public — no authentication required.

> Example responses

> 200 Response

```json
null
```

<h3 id="config-schema-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Version

<a id="opIdversion_version_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/version
```

`GET /version`

**Access:** Public — no authentication required.

<h3 id="version-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Stats

<a id="opIdstats_stats_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/stats \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /stats`

**Access:** Any authenticated user.

> Example responses

> 200 Response

```json
null
```

<h3 id="stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Stats History

<a id="opIdstats_history_stats_history_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/stats/history \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /stats/history`

**Access:** Admin role required.

<h3 id="stats-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|keys|query|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="stats-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Metrics

<a id="opIdmetrics_metrics_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/metrics \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /metrics`

**Access:** Any authenticated user.

Expose Prometheus metrics endpoint and update metrics with latest stats

> Example responses

> 200 Response

```json
null
```

<h3 id="metrics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## List available GenAI models

<a id="opIdgenai_models_genai_models_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/genai/models \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /genai/models`

**Access:** Admin role required.

Returns available models for each configured GenAI provider.

> Example responses

> 200 Response

```json
null
```

<h3 id="list-available-genai-models-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get the model assigned to each GenAI role

<a id="opIdgenai_roles_genai_roles_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/genai/roles \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /genai/roles`

**Access:** Admin role required.

Returns the selected model and its context size for each configured GenAI role. Reads only what the client saved when it initialized, so the provider is not queried for its model list.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-the-model-assigned-to-each-genai-role-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Probe a GenAI provider without saving config

<a id="opIdgenai_probe_genai_probe_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/genai/probe \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "provider": "openai",
    "name": "string",
    "api_key": "string",
    "base_url": "string",
    "provider_options": {}
  }'
```

`POST /genai/probe`

**Access:** Admin role required.

Builds a transient client from the request body and returns its available models. Used to validate provider credentials in the UI before saving the configuration.

> Body parameter

```json
{
  "provider": "openai",
  "name": "string",
  "api_key": "string",
  "base_url": "string",
  "provider_options": {}
}
```

<h3 id="probe-a-genai-provider-without-saving-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GenAIProbeBody](#schemagenaiprobebody)|true|none|
|» provider|body|[GenAIProviderEnum](#schemagenaiproviderenum)|true|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» api_key|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» base_url|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» provider_options|body|object|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» provider|openai|
|» provider|azure_openai|
|» provider|gemini|
|» provider|ollama|
|» provider|llamacpp|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="probe-a-genai-provider-without-saving-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Config

<a id="opIdconfig_config_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/config \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /config`

**Access:** Any authenticated user.

> Example responses

> 200 Response

```json
null
```

<h3 id="config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get Profiles

<a id="opIdget_profiles_profiles_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/profiles \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /profiles`

**Access:** Any authenticated user.

List all available profiles and the currently active profile.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-profiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get Active Profile

<a id="opIdget_active_profile_profile_active_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/profile/active \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /profile/active`

**Access:** Admin role required.

Get the currently active profile.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-active-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Ffmpeg Presets

<a id="opIdffmpeg_presets_ffmpeg_presets_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/ffmpeg/presets \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /ffmpeg/presets`

**Access:** Admin role required.

Return available ffmpeg preset keys for config UI usage.

> Example responses

> 200 Response

```json
null
```

<h3 id="ffmpeg-presets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Config Raw Paths

<a id="opIdconfig_raw_paths_config_raw_paths_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/config/raw_paths \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /config/raw_paths`

**Access:** Admin role required.

Admin-only endpoint that returns camera paths and go2rtc streams without credential masking.

> Example responses

> 200 Response

```json
null
```

<h3 id="config-raw-paths-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Config Raw

<a id="opIdconfig_raw_config_raw_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/config/raw \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /config/raw`

**Access:** Admin role required.

> Example responses

> 200 Response

```json
null
```

<h3 id="config-raw-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Config Save

<a id="opIdconfig_save_config_save_post"></a>

> Code samples

```bash
curl 'http://localhost:5000/api/config/save?save_option=string' \
  -X POST \
  -H 'Content-Type: text/plain' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /config/save`

**Access:** Admin role required.

> Body parameter

```json
null
```

<h3 id="config-save-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|save_option|query|string|true|none|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="config-save-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Config Set

<a id="opIdconfig_set_config_set_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/config/set \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "requires_restart": 1,
    "update_topic": "string",
    "config_data": {},
    "skip_save": false,
    "replace_paths": [
      "string"
    ]
  }'
```

`PUT /config/set`

**Access:** Admin role required.

> Body parameter

```json
{
  "requires_restart": 1,
  "update_topic": "string",
  "config_data": {},
  "skip_save": false,
  "replace_paths": [
    "string"
  ]
}
```

<h3 id="config-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AppConfigSetBody](#schemaappconfigsetbody)|true|none|
|» requires_restart|body|integer|false|none|
|» update_topic|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» config_data|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» skip_save|body|boolean|false|none|
|» replace_paths|body|[string]|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="config-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Vainfo

<a id="opIdvainfo_vainfo_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/vainfo \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /vainfo`

**Access:** Any authenticated user.

> Example responses

> 200 Response

```json
null
```

<h3 id="vainfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Nvinfo

<a id="opIdnvinfo_nvinfo_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/nvinfo \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /nvinfo`

**Access:** Any authenticated user.

> Example responses

> 200 Response

```json
null
```

<h3 id="nvinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Logs

<a id="opIdlogs_logs__service__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/logs/frigate \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /logs/{service}`

**Access:** Admin role required.

Get logs for the requested service (frigate/nginx/go2rtc)

<h3 id="logs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|service|path|string|true|none|
|download|query|string \| null|false|none|
|stream|query|boolean \| null|false|none|
|start|query|integer \| null|false|none|
|end|query|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|service|frigate|
|service|nginx|
|service|go2rtc|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="logs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Restart

<a id="opIdrestart_restart_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/restart \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /restart`

**Access:** Admin role required.

> Example responses

> 200 Response

```json
null
```

<h3 id="restart-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Start media sync job

<a id="opIdsync_media_media_sync_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/media/sync \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "dry_run": true,
    "media_types": [
      "all"
    ],
    "force": false,
    "verbose": false
  }'
```

`POST /media/sync`

**Access:** Admin role required.

Start an asynchronous media sync job to find and (optionally) remove orphaned media files.
    Returns 202 with job details when queued, or 409 if a job is already running.

> Body parameter

```json
{
  "dry_run": true,
  "media_types": [
    "all"
  ],
  "force": false,
  "verbose": false
}
```

<h3 id="start-media-sync-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[MediaSyncBody](#schemamediasyncbody)|true|none|
|» dry_run|body|boolean|false|If True, only report orphans without deleting them|
|» media_types|body|[string]|false|Types of media to sync: 'all', 'event_snapshots', 'event_thumbnails', 'review_thumbnails', 'previews', 'exports', 'recordings'|
|» force|body|boolean|false|If True, bypass safety threshold checks|
|» verbose|body|boolean|false|If True, write full orphan file list to disk|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="start-media-sync-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get current media sync job

<a id="opIdget_media_sync_current_media_sync_current_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/media/sync/current \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /media/sync/current`

**Access:** Admin role required.

Retrieve the current running media sync job, if any. Returns the job details
    or null when no job is active.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-current-media-sync-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get media sync job status

<a id="opIdget_media_sync_status_media_sync_status__job_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/media/sync/status/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /media/sync/status/{job_id}`

**Access:** Admin role required.

Get status and results for the specified media sync job id. Returns 200 with
    job details including results, or 404 if the job is not found.

<h3 id="get-media-sync-job-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|job_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-media-sync-job-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get Labels

<a id="opIdget_labels_labels_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/labels \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /labels`

**Access:** Any authenticated user.

<h3 id="get-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera|query|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get Sub Labels

<a id="opIdget_sub_labels_sub_labels_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/sub_labels \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /sub_labels`

**Access:** Any authenticated user.

<h3 id="get-sub-labels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|split_joined|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-sub-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get known object names by object type

<a id="opIdcategorized_object_names_categorized_object_names_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/categorized_object_names \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /categorized_object_names`

**Access:** Any authenticated user.

Returns the sub labels and attributes this install can attach,
    grouped by object type. Unlike /sub_labels, which reflects what has already been
    detected, this reads the config and model files, so it covers recognized face
    names, named license plates, custom object classification categories, and the
    detector attributes of tracked objects.

<h3 id="get-known-object-names-by-object-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|object_type|query|string \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-known-object-names-by-object-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get Audio Labels

<a id="opIdget_audio_labels_audio_labels_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/audio_labels \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /audio_labels`

**Access:** Admin role required.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-audio-labels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Plusmodels

<a id="opIdplusModels_plus_models_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/plus/models \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /plus/models`

**Access:** Any authenticated user.

<h3 id="plusmodels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filterByCurrentModelDetector|query|boolean|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="plusmodels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get Recognized License Plates

<a id="opIdget_recognized_license_plates_recognized_license_plates_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/recognized_license_plates \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /recognized_license_plates`

**Access:** Any authenticated user.

<h3 id="get-recognized-license-plates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|split_joined|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-recognized-license-plates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Timeline

<a id="opIdtimeline_timeline_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/timeline \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /timeline`

**Access:** Any authenticated user.

<h3 id="timeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera|query|string|false|none|
|limit|query|integer|false|none|
|source_id|query|string \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="timeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Hourly Timeline

<a id="opIdhourly_timeline_timeline_hourly_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/timeline/hourly \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /timeline/hourly`

**Access:** Any authenticated user.

Get hourly summary for timeline.

<h3 id="hourly-timeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cameras|query|string \| null|false|none|
|labels|query|string \| null|false|none|
|after|query|number \| null|false|none|
|before|query|number \| null|false|none|
|limit|query|integer \| null|false|none|
|timezone|query|string \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="hourly-timeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Start debug replay

<a id="opIdstart_debug_replay_debug_replay_start_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/debug_replay/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "camera": "string",
    "start_time": 0,
    "end_time": 0
  }'
```

`POST /debug_replay/start`

**Access:** Admin role required.

Start a debug replay session from camera recordings. Returns immediately while clip generation runs as a background job; subscribe to the 'debug_replay' job_state WS topic to track progress.

> Body parameter

```json
{
  "camera": "string",
  "start_time": 0,
  "end_time": 0
}
```

<h3 id="start-debug-replay-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DebugReplayStartBody](#schemadebugreplaystartbody)|true|none|
|» camera|body|string|true|none|
|» start_time|body|number|true|none|
|» end_time|body|number|true|none|

> Example responses

> 202 Response

```json
{
  "success": true,
  "replay_camera": "string",
  "job_id": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="start-debug-replay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[DebugReplayStartResponse](#schemadebugreplaystartresponse)|
|400|Bad Request|Invalid camera or time range|None|
|404|Not Found|No recordings in the requested time range|None|
|409|Conflict|A replay session is already active|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Start debug replay from an export

<a id="opIdstart_debug_replay_from_export_debug_replay_start_from_export_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/debug_replay/start_from_export \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "export_id": "string"
  }'
```

`POST /debug_replay/start_from_export`

**Access:** Admin role required.

Start a debug replay session covering an existing export's time range. The end time is derived from the export's video duration.

> Body parameter

```json
{
  "export_id": "string"
}
```

<h3 id="start-debug-replay-from-an-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DebugReplayStartFromExportBody](#schemadebugreplaystartfromexportbody)|true|none|
|» export_id|body|string|true|none|

> Example responses

> 202 Response

```json
{
  "success": true,
  "replay_camera": "string",
  "job_id": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="start-debug-replay-from-an-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Successful Response|[DebugReplayStartResponse](#schemadebugreplaystartresponse)|
|400|Bad Request|Invalid export, time range, or no recordings|None|
|404|Not Found|Export not found|None|
|409|Conflict|A replay session is already active|None|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get debug replay status

<a id="opIdget_debug_replay_status_debug_replay_status_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/debug_replay/status \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /debug_replay/status`

**Access:** Admin role required.

Get the status of the current debug replay session.

> Example responses

> 200 Response

```json
{
  "active": true,
  "replay_camera": "string",
  "source_camera": "string",
  "start_time": 0,
  "end_time": 0,
  "live_ready": false
}
```

<h3 id="get-debug-replay-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DebugReplayStatusResponse](#schemadebugreplaystatusresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Stop debug replay

<a id="opIdstop_debug_replay_debug_replay_stop_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/debug_replay/stop \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /debug_replay/stop`

**Access:** Admin role required.

Stop the active debug replay session and clean up all artifacts.

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="stop-debug-replay-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[DebugReplayStopResponse](#schemadebugreplaystopresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-preview">Preview</h1>

## Get preview clips for time range

<a id="opIdpreview_ts_preview__camera_name__start__start_ts__end__end_ts__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/preview/string/start/0/end/0 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /preview/{camera_name}/start/{start_ts}/end/{end_ts}`

**Access:** Any authenticated user.

Gets all preview clips for a specified camera and time range.
    Returns a list of preview video clips that overlap with the requested time period,
    ordered by start time. Use camera_name='all' to get previews from all cameras.
    Returns an error if no previews are found.

<h3 id="get-preview-clips-for-time-range-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|

> Example responses

> 200 Response

```json
[
  {
    "camera": "string",
    "src": "string",
    "type": "string",
    "start": 0,
    "end": 0
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-preview-clips-for-time-range-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-preview-clips-for-time-range-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PreviewModel](#schemapreviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get preview clips for specific hour

<a id="opIdpreview_hour_preview__year_month___day___hour___camera_name___tz_name__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/preview/string/0/0/string/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /preview/{year_month}/{day}/{hour}/{camera_name}/{tz_name}`

**Access:** Any authenticated user.

Gets all preview clips for a specific hour in a given timezone.
    Converts the provided date/time from the specified timezone to UTC and retrieves
    all preview clips for that hour. Use camera_name='all' to get previews from all cameras.
    The tz_name should be a timezone like 'America/New_York' (use commas instead of slashes).

<h3 id="get-preview-clips-for-specific-hour-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year_month|path|string|true|none|
|day|path|integer|true|none|
|hour|path|integer|true|none|
|camera_name|path|string|true|none|
|tz_name|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "camera": "string",
    "src": "string",
    "type": "string",
    "start": 0,
    "end": 0
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-preview-clips-for-specific-hour-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-preview-clips-for-specific-hour-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PreviewModel](#schemapreviewmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get cached preview frame filenames

<a id="opIdget_preview_frames_from_cache_preview__camera_name__start__start_ts__end__end_ts__frames_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/preview/string/start/0/end/0/frames \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /preview/{camera_name}/start/{start_ts}/end/{end_ts}/frames`

**Access:** Authenticated user with access to the referenced camera.

Gets a list of cached preview frame filenames for a specific camera and time range.
    Returns an array of filenames for preview frames that fall within the specified time period,
    sorted in chronological order. These are individual frame images cached for quick preview display.

<h3 id="get-cached-preview-frame-filenames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-cached-preview-frame-filenames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-cached-preview-frame-filenames-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

<h1 id="api-notifications">Notifications</h1>

## Get VAPID public key

<a id="opIdget_vapid_pub_key_notifications_pubkey_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/notifications/pubkey \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /notifications/pubkey`

**Access:** Any authenticated user.

Gets the VAPID public key for the notifications.
    Returns the public key or an error if notifications are not enabled.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-vapid-public-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Register notifications

<a id="opIdregister_notifications_notifications_register_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/notifications/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{}'
```

`POST /notifications/register`

**Access:** Any authenticated user.

Registers a notifications subscription.
    Returns a success message or an error if the subscription is not provided.

> Body parameter

```json
{}
```

<h3 id="register-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="register-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

<h1 id="api-export">Export</h1>

## Get exports

<a id="opIdget_exports_exports_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/exports \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /exports`

**Access:** Any authenticated user.

Gets all exports from the database for cameras the user has access to.
    Returns a list of exports ordered by date (most recent first).

<h3 id="get-exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|export_case_id|query|string \| null|false|none|
|cameras|query|string \| null|false|none|
|start_date|query|number \| null|false|none|
|end_date|query|number \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "camera": "string",
    "name": "string",
    "date": 0,
    "video_path": "string",
    "thumb_path": "string",
    "in_progress": true,
    "export_case_id": "string"
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-exports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExportModel](#schemaexportmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get export cases

<a id="opIdget_export_cases_cases_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/cases \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /cases`

**Access:** Any authenticated user.

Gets all export cases from the database.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "name": "string",
    "description": "string",
    "created_at": 0,
    "updated_at": 0
  }
]
```

<h3 id="get-export-cases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<h3 id="get-export-cases-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExportCaseModel](#schemaexportcasemodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Create export case

<a id="opIdcreate_export_case_cases_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/cases \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`POST /cases`

**Access:** Admin role required.

Creates a new export case.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="create-export-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportCaseCreateBody](#schemaexportcasecreatebody)|true|none|
|» name|body|string|true|Friendly name of the export case|
|» description|body|string \| null|false|Optional description of the export case|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "created_at": 0,
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-export-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ExportCaseModel](#schemaexportcasemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get a single export case

<a id="opIdget_export_case_cases__case_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/cases/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /cases/{case_id}`

**Access:** Any authenticated user.

Gets a specific export case by ID.

<h3 id="get-a-single-export-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|case_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "created_at": 0,
  "updated_at": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-a-single-export-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ExportCaseModel](#schemaexportcasemodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Delete export case

<a id="opIddelete_export_case_cases__case_id__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/cases/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /cases/{case_id}`

**Access:** Admin role required.

Deletes an export case.
    Exports that reference this case will have their export_case set to null.

<h3 id="delete-export-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|case_id|path|string|true|none|
|delete_exports|query|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-export-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Update export case

<a id="opIdupdate_export_case_cases__case_id__patch"></a>

> Code samples

```bash
curl http://localhost:5000/api/cases/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "name": "string",
    "description": "string"
  }'
```

`PATCH /cases/{case_id}`

**Access:** Admin role required.

Updates an existing export case.

> Body parameter

```json
{
  "name": "string",
  "description": "string"
}
```

<h3 id="update-export-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|case_id|path|string|true|none|
|body|body|[ExportCaseUpdateBody](#schemaexportcaseupdatebody)|true|none|
|» name|body|string \| null|false|Updated friendly name of the export case|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» description|body|string \| null|false|Updated description of the export case|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="update-export-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Download export case as zip

<a id="opIddownload_export_case_cases__case_id__download_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/cases/string/download \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /cases/{case_id}/download`

**Access:** Any authenticated user.

Streams a zip archive containing every completed export's mp4 for the given case.

<h3 id="download-export-case-as-zip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|case_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="download-export-case-as-zip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get active export jobs

<a id="opIdget_active_export_jobs_jobs_export_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/jobs/export \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /jobs/export`

**Access:** Any authenticated user.

Gets queued and running export jobs.

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "job_type": "string",
    "status": "string",
    "camera": "string",
    "name": "string",
    "export_case_id": "string",
    "request_start_time": 0,
    "request_end_time": 0,
    "start_time": 0,
    "end_time": 0,
    "error_message": "string",
    "results": {},
    "current_step": "queued",
    "progress_percent": 0
  }
]
```

<h3 id="get-active-export-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<h3 id="get-active-export-jobs-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ExportJobModel](#schemaexportjobmodel)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get export job status

<a id="opIdget_export_job_status_jobs_export__export_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/jobs/export/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /jobs/export/{export_id}`

**Access:** Authenticated user with access to the referenced camera.

Gets queued, running, or completed status for a specific export job.

<h3 id="get-export-job-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|export_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "job_type": "string",
  "status": "string",
  "camera": "string",
  "name": "string",
  "export_case_id": "string",
  "request_start_time": 0,
  "request_end_time": 0,
  "start_time": 0,
  "end_time": 0,
  "error_message": "string",
  "results": {},
  "current_step": "queued",
  "progress_percent": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-export-job-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ExportJobModel](#schemaexportjobmodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Start recording export batch

<a id="opIdexport_recordings_batch_exports_batch_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/exports/batch \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "items": [
      {
        "camera": "string",
        "start_time": 0,
        "end_time": 0,
        "image_path": "string",
        "friendly_name": "string",
        "client_item_id": "string"
      }
    ],
    "export_case_id": "string",
    "new_case_name": "string",
    "new_case_description": "string",
    "stream": "auto"
  }'
```

`POST /exports/batch`

**Access:** Any authenticated user.

Starts recording exports for a batch of items, each with its own camera and time range, and assigns them to a single export case. Attaching to an existing case is temporarily admin-only until case-level ACLs exist.

> Body parameter

```json
{
  "items": [
    {
      "camera": "string",
      "start_time": 0,
      "end_time": 0,
      "image_path": "string",
      "friendly_name": "string",
      "client_item_id": "string"
    }
  ],
  "export_case_id": "string",
  "new_case_name": "string",
  "new_case_description": "string",
  "stream": "auto"
}
```

<h3 id="start-recording-export-batch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[BatchExportBody](#schemabatchexportbody)|true|none|
|» items|body|[[BatchExportItem](#schemabatchexportitem)]|true|List of export items. Each item has its own camera and time range.|
|» export_case_id|body|string \| null|false|Existing export case ID to assign all exports to. Attaching to an existing case is temporarily admin-only until case-level ACLs exist.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» new_case_name|body|string \| null|false|Name of a new export case to create when export_case_id is omitted|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» new_case_description|body|string \| null|false|Optional description for a newly created export case|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|[ExportStreamEnum](#schemaexportstreamenum)|false|Which recorded stream every item in the batch is exported from. 'auto' uses the merged timeline, preferring the main stream and falling back to the sub stream where main has aged out. 'main' or 'sub' pins the exports to that stream.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» stream|auto|
|» stream|main|
|» stream|sub|

> Example responses

> 200 Response

```json
{
  "export_case_id": "string",
  "export_ids": [
    "string"
  ],
  "results": [
    {
      "camera": "string",
      "export_id": "string",
      "success": true,
      "status": "string",
      "error": "string",
      "item_index": 0,
      "client_item_id": "string"
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="start-recording-export-batch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[BatchExportResponse](#schemabatchexportresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Start recording export

<a id="opIdexport_recording_export__camera_name__start__start_time__end__end_time__post"></a>

> Code samples

```bash
curl http://localhost:5000/api/export/string/start/0/end/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "source": "recordings",
    "name": "string",
    "image_path": "string",
    "export_case_id": "string",
    "chapters": "none",
    "stream": "auto"
  }'
```

`POST /export/{camera_name}/start/{start_time}/end/{end_time}`

**Access:** Authenticated user with access to the referenced camera.

Starts an export of a recording for the specified time range.
    The export can be from recordings or preview footage. Returns the export ID if
    successful, or an error message if the camera is invalid or no recordings/previews
    are found for the time range.

> Body parameter

```json
{
  "source": "recordings",
  "name": "string",
  "image_path": "string",
  "export_case_id": "string",
  "chapters": "none",
  "stream": "auto"
}
```

<h3 id="start-recording-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|start_time|path|number|true|none|
|end_time|path|number|true|none|
|body|body|[ExportRecordingsBody](#schemaexportrecordingsbody)|true|none|
|» source|body|[PlaybackSourceEnum](#schemaplaybacksourceenum)|false|none|
|» name|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» image_path|body|string|false|none|
|» export_case_id|body|string \| null|false|ID of the export case to assign this export to|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» chapters|body|[ChaptersEnum](#schemachaptersenum) \| null|false|Optional chapter metadata to embed in the export. When omitted, the camera's configured export chapter mode is used.|
|» » *anyOf*|body|[ChaptersEnum](#schemachaptersenum)|false|none|
|» » *anyOf*|body|null|false|none|
|» stream|body|[ExportStreamEnum](#schemaexportstreamenum)|false|Which recorded stream to export. 'auto' uses the merged timeline, preferring the main stream and falling back to the sub stream where main has aged out. 'main' or 'sub' pins the export to that stream alone.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|recordings|
|» source|preview|
|» » *anyOf*|none|
|» » *anyOf*|recording_segments|
|» » *anyOf*|review_items|
|» stream|auto|
|» stream|main|
|» stream|sub|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "export_id": "string",
  "status": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="start-recording-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[StartExportResponse](#schemastartexportresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Rename export

<a id="opIdexport_rename_export__event_id__rename_patch"></a>

> Code samples

```bash
curl http://localhost:5000/api/export/string/rename \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "name": "string"
  }'
```

`PATCH /export/{event_id}/rename`

**Access:** Admin role required.

Renames an export.
    NOTE: This changes the friendly name of the export, not the filename.

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="rename-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|body|body|[ExportRenameBody](#schemaexportrenamebody)|true|none|
|» name|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="rename-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Start custom recording export

<a id="opIdexport_recording_custom_export_custom__camera_name__start__start_time__end__end_time__post"></a>

> Code samples

```bash
curl http://localhost:5000/api/export/custom/string/start/0/end/0 \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "source": "recordings",
    "name": "string",
    "image_path": "string",
    "export_case_id": "string",
    "ffmpeg_input_args": "string",
    "ffmpeg_output_args": "string",
    "cpu_fallback": false
  }'
```

`POST /export/custom/{camera_name}/start/{start_time}/end/{end_time}`

**Access:** Authenticated user with access to the referenced camera.

Starts an export of a recording for the specified time range using custom FFmpeg arguments.
    The export can be from recordings or preview footage. Returns the export ID if
    successful, or an error message if the camera is invalid or no recordings/previews
    are found for the time range. If ffmpeg_input_args and ffmpeg_output_args are not provided,
    defaults to timelapse export settings.

> Body parameter

```json
{
  "source": "recordings",
  "name": "string",
  "image_path": "string",
  "export_case_id": "string",
  "ffmpeg_input_args": "string",
  "ffmpeg_output_args": "string",
  "cpu_fallback": false
}
```

<h3 id="start-custom-recording-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|start_time|path|number|true|none|
|end_time|path|number|true|none|
|body|body|[ExportRecordingsCustomBody](#schemaexportrecordingscustombody)|true|none|
|» source|body|[PlaybackSourceEnum](#schemaplaybacksourceenum)|false|none|
|» name|body|string|false|none|
|» image_path|body|string|false|none|
|» export_case_id|body|string \| null|false|ID of the export case to assign this export to|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» ffmpeg_input_args|body|string \| null|false|Custom FFmpeg input arguments. If not provided, defaults to timelapse input args.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» ffmpeg_output_args|body|string \| null|false|Custom FFmpeg output arguments. If not provided, defaults to timelapse output args.|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» cpu_fallback|body|boolean|false|If true, retry export without hardware acceleration if the initial export fails.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» source|recordings|
|» source|preview|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "export_id": "string",
  "status": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="start-custom-recording-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[StartExportResponse](#schemastartexportresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get a single export

<a id="opIdget_export_exports__export_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/exports/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /exports/{export_id}`

**Access:** Authenticated user with access to the referenced camera.

Gets a specific export by ID. The user must have access to the camera
    associated with the export.

<h3 id="get-a-single-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|export_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "camera": "string",
  "name": "string",
  "date": 0,
  "video_path": "string",
  "thumb_path": "string",
  "in_progress": true,
  "export_case_id": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-a-single-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[ExportModel](#schemaexportmodel)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Bulk delete exports

<a id="opIdbulk_delete_exports_exports_delete_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/exports/delete \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "ids": [
      "string"
    ]
  }'
```

`POST /exports/delete`

**Access:** Admin role required.

Deletes one or more exports by ID. All IDs must exist and none can be in-progress.

> Body parameter

```json
{
  "ids": [
    "string"
  ]
}
```

<h3 id="bulk-delete-exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportBulkDeleteBody](#schemaexportbulkdeletebody)|true|none|
|» ids|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="bulk-delete-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Bulk reassign exports to a case

<a id="opIdbulk_reassign_exports_exports_reassign_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/exports/reassign \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "ids": [
      "string"
    ],
    "export_case_id": "string"
  }'
```

`POST /exports/reassign`

**Access:** Admin role required.

Assigns or unassigns one or more exports to/from a case. All IDs must exist.

> Body parameter

```json
{
  "ids": [
    "string"
  ],
  "export_case_id": "string"
}
```

<h3 id="bulk-reassign-exports-to-a-case-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ExportBulkReassignBody](#schemaexportbulkreassignbody)|true|none|
|» ids|body|[string]|true|none|
|» export_case_id|body|string \| null|false|Case ID to assign to, or null to unassign from current case|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="bulk-reassign-exports-to-a-case-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-hardware">Hardware</h1>

## Probe Hardware

<a id="opIdprobe_hardware_hardware_probe_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/hardware/probe \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /hardware/probe`

**Access:** Admin role required.

Get the object detection hardware attached to this system.

Args:
    refresh: Probe again instead of returning the cached result

Returns:
    Every kind of detection hardware that was found

<h3 id="probe-hardware-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|refresh|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "key": "string",
    "detector": "string",
    "name": "string",
    "units": [
      {
        "device": "string",
        "label": "string"
      }
    ],
    "count": 0,
    "unlimited": true
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="probe-hardware-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="probe-hardware-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DetectionHardware](#schemadetectionhardware)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Hwaccel Recommendation

<a id="opIdhwaccel_recommendation_hardware_hwaccel_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/hardware/hwaccel \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /hardware/hwaccel`

**Access:** Admin role required.

Get the hardware decoding this system can do.

Args:
    detector: Hardware key of the detection hardware in use, which biases
        the recommendation toward that hardware's GPU
    codecs: Comma separated codecs of the streams that will be decoded,
        used to drop families that cannot decode one of them

Returns:
    The recommended family (empty when none fits) and every usable family

<h3 id="hwaccel-recommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detector|query|string \| null|false|none|
|codecs|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "recommended": "string",
  "available": [
    {
      "key": "string",
      "presets": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="hwaccel-recommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[HwaccelRecommendation](#schemahwaccelrecommendation)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-notices">Notices</h1>

## Get Notices

<a id="opIdget_notices_notices_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/notices \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /notices`

**Access:** Admin role required.

Get notices, most severe first.

Args:
    include_hidden: Also return acknowledged and muted notices, for the
        hidden list

Returns:
    The notices

<h3 id="get-notices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|include_hidden|query|boolean|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-notices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get Notice Stats

<a id="opIdget_notice_stats_notices_stats_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/notices/stats \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /notices/stats`

**Access:** Admin role required.

Get lifetime occurrence counts per notice kind.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-notice-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get Muted Checks

<a id="opIdget_muted_checks_notices_muted_checks_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/notices/muted_checks \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /notices/muted_checks`

**Access:** Admin role required.

Get the muted config and stream check rows, newest first.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-muted-checks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Unhide All Notices

<a id="opIdunhide_all_notices_notices_hidden_delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/notices/hidden \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /notices/hidden`

**Access:** Admin role required.

Show every acknowledged and muted notice and check row again.

> Example responses

> 200 Response

```json
null
```

<h3 id="unhide-all-notices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Acknowledge Notice

<a id="opIdacknowledge_notice_notices__notice_id__acknowledge_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/notices/string/acknowledge \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /notices/{notice_id}/acknowledge`

**Access:** Admin role required.

Hide a notice until it happens again.

Config and stream check rows and the update notice never repeat, so they
can only be muted.

<h3 id="acknowledge-notice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notice_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="acknowledge-notice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Mute Notice

<a id="opIdmute_notice_notices__notice_id__mute_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/notices/string/mute \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /notices/{notice_id}/mute`

**Access:** Admin role required.

Hide a notice or a config or stream check row for good.

<h3 id="mute-notice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notice_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="mute-notice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Unhide Notice

<a id="opIdunhide_notice_notices__notice_id__hidden_delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/notices/string/hidden \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /notices/{notice_id}/hidden`

**Access:** Admin role required.

Show an acknowledged or muted notice or check row again.

<h3 id="unhide-notice-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|notice_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="unhide-notice-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-events">Events</h1>

## Get events

<a id="opIdevents_events_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events`

**Access:** Any authenticated user.

Returns a list of events.

<h3 id="get-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera|query|string \| null|false|none|
|cameras|query|string \| null|false|none|
|label|query|string \| null|false|none|
|labels|query|string \| null|false|none|
|sub_label|query|string \| null|false|none|
|sub_labels|query|string \| null|false|none|
|attributes|query|string \| null|false|none|
|zone|query|string \| null|false|none|
|zones|query|string \| null|false|none|
|limit|query|integer \| null|false|none|
|offset|query|integer \| null|false|none|
|after|query|number \| null|false|none|
|before|query|number \| null|false|none|
|time_range|query|string \| null|false|none|
|has_clip|query|integer \| null|false|none|
|has_snapshot|query|integer \| null|false|none|
|in_progress|query|integer \| null|false|none|
|include_thumbnails|query|integer \| null|false|none|
|favorites|query|integer \| null|false|none|
|min_score|query|number \| null|false|none|
|max_score|query|number \| null|false|none|
|min_speed|query|number \| null|false|none|
|max_speed|query|number \| null|false|none|
|recognized_license_plate|query|string \| null|false|none|
|is_submitted|query|integer \| null|false|none|
|min_length|query|number \| null|false|none|
|max_length|query|number \| null|false|none|
|event_id|query|string \| null|false|none|
|sort|query|string \| null|false|none|
|timezone|query|string \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "label": "string",
    "sub_label": "string",
    "camera": "string",
    "start_time": 0,
    "end_time": 0,
    "false_positive": true,
    "zones": [
      "string"
    ],
    "thumbnail": "string",
    "has_clip": true,
    "has_snapshot": true,
    "retain_indefinitely": true,
    "plus_id": "string",
    "model_hash": "string",
    "detector_type": "string",
    "model_type": "string",
    "data": {}
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EventResponse](#schemaeventresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get summary of objects

<a id="opIdevents_explore_events_explore_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/explore \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/explore`

**Access:** Any authenticated user.

Gets a summary of objects from the database.
    Returns a list of objects with a max of `limit` objects for each label.

<h3 id="get-summary-of-objects-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "label": "string",
    "sub_label": "string",
    "camera": "string",
    "start_time": 0,
    "end_time": 0,
    "false_positive": true,
    "zones": [
      "string"
    ],
    "thumbnail": "string",
    "has_clip": true,
    "has_snapshot": true,
    "retain_indefinitely": true,
    "plus_id": "string",
    "model_hash": "string",
    "detector_type": "string",
    "model_type": "string",
    "data": {}
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-summary-of-objects-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-summary-of-objects-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EventResponse](#schemaeventresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get events by ids

<a id="opIdevent_ids_event_ids_get"></a>

> Code samples

```bash
curl 'http://localhost:5000/api/event_ids?ids=string' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /event_ids`

**Access:** Authenticated user with access to the referenced camera.

Gets events by a list of ids.
    Returns a list of events.

<h3 id="get-events-by-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "string",
    "label": "string",
    "sub_label": "string",
    "camera": "string",
    "start_time": 0,
    "end_time": 0,
    "false_positive": true,
    "zones": [
      "string"
    ],
    "thumbnail": "string",
    "has_clip": true,
    "has_snapshot": true,
    "retain_indefinitely": true,
    "plus_id": "string",
    "model_hash": "string",
    "detector_type": "string",
    "model_type": "string",
    "data": {}
  }
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-events-by-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="get-events-by-ids-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EventResponse](#schemaeventresponse)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Search events

<a id="opIdevents_search_events_search_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/search \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/search`

**Access:** Any authenticated user.

Searches for events in the database.
    Returns a list of events.

<h3 id="search-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string \| null|false|none|
|event_id|query|string \| null|false|none|
|search_type|query|string \| null|false|none|
|include_thumbnails|query|integer \| null|false|none|
|limit|query|integer \| null|false|none|
|offset|query|integer \| null|false|none|
|cameras|query|string \| null|false|none|
|labels|query|string \| null|false|none|
|sub_labels|query|string \| null|false|none|
|attributes|query|string \| null|false|none|
|zones|query|string \| null|false|none|
|after|query|number \| null|false|none|
|before|query|number \| null|false|none|
|time_range|query|string \| null|false|none|
|has_clip|query|boolean \| null|false|none|
|has_snapshot|query|boolean \| null|false|none|
|is_submitted|query|boolean \| null|false|none|
|timezone|query|string \| null|false|none|
|min_score|query|number \| null|false|none|
|max_score|query|number \| null|false|none|
|min_speed|query|number \| null|false|none|
|max_speed|query|number \| null|false|none|
|recognized_license_plate|query|string \| null|false|none|
|sort|query|string \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="search-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Events Summary

<a id="opIdevents_summary_events_summary_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/summary \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/summary`

**Access:** Any authenticated user.

<h3 id="events-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timezone|query|string \| null|false|none|
|has_clip|query|integer \| null|false|none|
|has_snapshot|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="events-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get event by id

<a id="opIdevent_events__event_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/{event_id}`

**Access:** Authenticated user with access to the referenced camera.

Gets an event by its id.

<h3 id="get-event-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "label": "string",
  "sub_label": "string",
  "camera": "string",
  "start_time": 0,
  "end_time": 0,
  "false_positive": true,
  "zones": [
    "string"
  ],
  "thumbnail": "string",
  "has_clip": true,
  "has_snapshot": true,
  "retain_indefinitely": true,
  "plus_id": "string",
  "model_hash": "string",
  "detector_type": "string",
  "model_type": "string",
  "data": {}
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-event-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EventResponse](#schemaeventresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Delete event

<a id="opIddelete_event_events__event_id__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /events/{event_id}`

**Access:** Admin role required.

Deletes an event from the database.
    Returns a success message or an error if the event is not found.

<h3 id="delete-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Set event retain indefinitely.

<a id="opIdset_retain_events__event_id__retain_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/retain \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /events/{event_id}/retain`

**Access:** Admin role required.

Sets an event to retain indefinitely.
    Returns a success message or an error if the event is not found.
    NOTE: This is a legacy endpoint and is not supported in the frontend.

<h3 id="set-event-retain-indefinitely-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="set-event-retain-indefinitely-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Stop event from being retained indefinitely

<a id="opIddelete_retain_events__event_id__retain_delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/retain \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /events/{event_id}/retain`

**Access:** Admin role required.

Stops an event from being retained indefinitely.
    Returns a success message or an error if the event is not found.
    NOTE: This is a legacy endpoint and is not supported in the frontend.

<h3 id="stop-event-from-being-retained-indefinitely-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="stop-event-from-being-retained-indefinitely-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Send event to Frigate+

<a id="opIdsend_to_plus_events__event_id__plus_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/plus \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "include_annotation": 1
  }'
```

`POST /events/{event_id}/plus`

**Access:** Admin role required.

Sends an event to Frigate+.
    Returns a success message or an error if the event is not found.

> Body parameter

```json
{
  "include_annotation": 1
}
```

<h3 id="send-event-to-frigate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|body|body|[SubmitPlusBody](#schemasubmitplusbody)|false|none|
|» include_annotation|body|integer|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "plus_id": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="send-event-to-frigate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EventUploadPlusResponse](#schemaeventuploadplusresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Submit false positive to Frigate+

<a id="opIdfalse_positive_events__event_id__false_positive_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/false_positive \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`PUT /events/{event_id}/false_positive`

**Access:** Admin role required.

Submit an event as a false positive to Frigate+.
    This endpoint is the same as the standard Frigate+ submission endpoint,
    but is specifically for marking an event as a false positive.

<h3 id="submit-false-positive-to-frigate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "plus_id": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="submit-false-positive-to-frigate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EventUploadPlusResponse](#schemaeventuploadplusresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Set event sub label

<a id="opIdset_sub_label_events__event_id__sub_label_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/sub_label \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "subLabel": "string",
    "subLabelScore": 0.1,
    "camera": "string"
  }'
```

`POST /events/{event_id}/sub_label`

**Access:** Admin role required.

Sets an event's sub label.
    Returns a success message or an error if the event is not found.

> Body parameter

```json
{
  "subLabel": "string",
  "subLabelScore": 0.1,
  "camera": "string"
}
```

<h3 id="set-event-sub-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|body|body|[EventsSubLabelBody](#schemaeventssublabelbody)|true|none|
|» subLabel|body|string|true|none|
|» subLabelScore|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» camera|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="set-event-sub-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Set event license plate

<a id="opIdset_plate_events__event_id__recognized_license_plate_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/recognized_license_plate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "recognizedLicensePlate": "string",
    "recognizedLicensePlateScore": 0.1
  }'
```

`POST /events/{event_id}/recognized_license_plate`

**Access:** Admin role required.

Sets an event's license plate.
    Returns a success message or an error if the event is not found.

> Body parameter

```json
{
  "recognizedLicensePlate": "string",
  "recognizedLicensePlateScore": 0.1
}
```

<h3 id="set-event-license-plate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|body|body|[EventsLPRBody](#schemaeventslprbody)|true|none|
|» recognizedLicensePlate|body|string|true|none|
|» recognizedLicensePlateScore|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="set-event-license-plate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Set custom classification attributes

<a id="opIdset_attributes_events__event_id__attributes_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/attributes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "attributes": [
      "string"
    ]
  }'
```

`POST /events/{event_id}/attributes`

**Access:** Admin role required.

Sets an event's custom classification attributes for all attribute-type models that apply to the event's object type.

> Body parameter

```json
{
  "attributes": [
    "string"
  ]
}
```

<h3 id="set-custom-classification-attributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|body|body|[EventsAttributesBody](#schemaeventsattributesbody)|true|none|
|» attributes|body|[string]|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="set-custom-classification-attributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Set event description

<a id="opIdset_description_events__event_id__description_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/description \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "description": "string"
  }'
```

`POST /events/{event_id}/description`

**Access:** Admin role required.

Sets an event's description.
    Returns a success message or an error if the event is not found.

> Body parameter

```json
{
  "description": "string"
}
```

<h3 id="set-event-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|body|body|[EventsDescriptionBody](#schemaeventsdescriptionbody)|true|none|
|» description|body|string \| null|true|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="set-event-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Regenerate event description

<a id="opIdregenerate_description_events__event_id__description_regenerate_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/description/regenerate \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`PUT /events/{event_id}/description/regenerate`

**Access:** Admin role required.

Regenerates an event's description.
    Returns a success message or an error if the event is not found.

<h3 id="regenerate-event-description-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|source|query|[RegenerateDescriptionEnum](#schemaregeneratedescriptionenum) \| null|false|none|
|force|query|boolean \| null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="regenerate-event-description-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Generate description embedding

<a id="opIdgenerate_description_embedding_description_generate_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/description/generate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "description": "string"
  }'
```

`POST /description/generate`

**Access:** Admin role required.

Generates an embedding for an event's description.
    Returns a success message or an error if the event is not found.

> Body parameter

```json
{
  "description": "string"
}
```

<h3 id="generate-description-embedding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EventsDescriptionBody](#schemaeventsdescriptionbody)|true|none|
|» description|body|string \| null|true|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="generate-description-embedding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Delete events

<a id="opIddelete_events_events__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/ \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "event_ids": [
      "string"
    ]
  }'
```

`DELETE /events/`

**Access:** Admin role required.

Deletes a list of events from the database.
    Returns a success message or an error if the events are not found.

> Body parameter

```json
{
  "event_ids": [
    "string"
  ]
}
```

<h3 id="delete-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[EventsDeleteBody](#schemaeventsdeletebody)|true|none|
|» event_ids|body|[string]|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "deleted_events": [
    "string"
  ],
  "not_found_events": [
    "string"
  ]
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EventMultiDeleteResponse](#schemaeventmultideleteresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Create manual event

<a id="opIdcreate_event_events__camera_name___label__create_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/string/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "sub_label": "string",
    "score": 0,
    "duration": 30,
    "include_recording": true,
    "draw": {},
    "pre_capture": 0
  }'
```

`POST /events/{camera_name}/{label}/create`

**Access:** Admin role required.

Creates a manual event in the database.
    Returns a success message or an error if the event is not found.
    NOTES:
    - Creating a manual event does not trigger an update to /events MQTT topic.
    - If a duration is set to null, the event will need to be ended manually by calling /events/{event_id}/end.
    - The review item is an alert unless the label is listed in the camera's review -> detections -> labels config.

> Body parameter

```json
{
  "sub_label": "string",
  "score": 0,
  "duration": 30,
  "include_recording": true,
  "draw": {},
  "pre_capture": 0
}
```

<h3 id="create-manual-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|
|label|path|string|true|none|
|body|body|[EventsCreateBody](#schemaeventscreatebody)|false|none|
|» sub_label|body|string \| null|false|none|
|» » *anyOf*|body|string|false|none|
|» » *anyOf*|body|null|false|none|
|» score|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|
|» duration|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|
|» include_recording|body|boolean \| null|false|none|
|» » *anyOf*|body|boolean|false|none|
|» » *anyOf*|body|null|false|none|
|» draw|body|object \| null|false|none|
|» » *anyOf*|body|object|false|none|
|» » *anyOf*|body|null|false|none|
|» pre_capture|body|integer \| null|false|none|
|» » *anyOf*|body|integer|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "event_id": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-manual-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[EventCreateResponse](#schemaeventcreateresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## End manual event

<a id="opIdend_event_events__event_id__end_put"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/end \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "end_time": 0
  }'
```

`PUT /events/{event_id}/end`

**Access:** Admin role required.

Ends a manual event.
    Returns a success message or an error if the event is not found.
    NOTE: This should only be used for manual events.

> Body parameter

```json
{
  "end_time": 0
}
```

<h3 id="end-manual-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|body|body|[EventsEndBody](#schemaeventsendbody)|true|none|
|» end_time|body|number \| null|false|none|
|» » *anyOf*|body|number|false|none|
|» » *anyOf*|body|null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="end-manual-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Create trigger embedding

<a id="opIdcreate_trigger_embedding_trigger_embedding_post"></a>

> Code samples

```bash
curl 'http://localhost:5000/api/trigger/embedding?camera_name=string&name=string' \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "type": "thumbnail",
    "data": "string",
    "threshold": 0.5
  }'
```

`POST /trigger/embedding`

**Access:** Admin role required.

Creates a trigger embedding for a specific trigger.
    Returns a success message or an error if the trigger is not found.

> Body parameter

```json
{
  "type": "thumbnail",
  "data": "string",
  "threshold": 0.5
}
```

<h3 id="create-trigger-embedding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|query|string|true|none|
|name|query|string|true|none|
|body|body|[TriggerEmbeddingBody](#schematriggerembeddingbody)|true|none|
|» type|body|[TriggerType](#schematriggertype)|true|none|
|» data|body|string|true|none|
|» threshold|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|thumbnail|
|» type|description|

> Example responses

> 200 Response

```json
{}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="create-trigger-embedding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Update trigger embedding

<a id="opIdupdate_trigger_embedding_trigger_embedding__camera_name___name__put"></a>

> Code samples

```bash
curl http://localhost:5000/api/trigger/embedding/string/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "type": "thumbnail",
    "data": "string",
    "threshold": 0.5
  }'
```

`PUT /trigger/embedding/{camera_name}/{name}`

**Access:** Admin role required.

Updates a trigger embedding for a specific trigger.
    Returns a success message or an error if the trigger is not found.

> Body parameter

```json
{
  "type": "thumbnail",
  "data": "string",
  "threshold": 0.5
}
```

<h3 id="update-trigger-embedding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|
|name|path|string|true|none|
|body|body|[TriggerEmbeddingBody](#schematriggerembeddingbody)|true|none|
|» type|body|[TriggerType](#schematriggertype)|true|none|
|» data|body|string|true|none|
|» threshold|body|number|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|thumbnail|
|» type|description|

> Example responses

> 200 Response

```json
{}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="update-trigger-embedding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Delete trigger embedding

<a id="opIddelete_trigger_embedding_trigger_embedding__camera_name___name__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/trigger/embedding/string/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /trigger/embedding/{camera_name}/{name}`

**Access:** Admin role required.

Deletes a trigger embedding for a specific trigger.
    Returns a success message or an error if the trigger is not found.

<h3 id="delete-trigger-embedding-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|
|name|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-trigger-embedding-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Get triggers status

<a id="opIdget_triggers_status_triggers_status__camera_name__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/triggers/status/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /triggers/status/{camera_name}`

**Access:** Admin role required.

Gets the status of all triggers for a specific camera.
    Returns a success message or an error if the camera is not found.

<h3 id="get-triggers-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|

> Example responses

> 200 Response

```json
{}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-triggers-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

<h1 id="api-media">Media</h1>

## Mjpeg Feed

<a id="opIdmjpeg_feed__camera_name__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="mjpeg-feed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|fps|query|integer|false|none|
|height|query|integer|false|none|
|bbox|query|integer \| null|false|none|
|timestamp|query|integer \| null|false|none|
|zones|query|integer \| null|false|none|
|mask|query|integer \| null|false|none|
|motion|query|integer \| null|false|none|
|regions|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="mjpeg-feed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Camera Ptz Info

<a id="opIdcamera_ptz_info__camera_name__ptz_info_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/ptz/info \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/ptz/info`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="camera-ptz-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="camera-ptz-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Latest Frame

<a id="opIdlatest_frame__camera_name__latest__extension__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/latest.webp \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/latest.{extension}`

**Access:** Authenticated user with access to the referenced camera.

Returns the latest frame from the specified camera in the requested format (jpg, png, webp). Falls back to preview frames if the camera is offline.

<h3 id="latest-frame-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|extension|path|[Extension](#schemaextension)|true|none|
|bbox|query|integer \| null|false|none|
|timestamp|query|integer \| null|false|none|
|zones|query|integer \| null|false|none|
|mask|query|integer \| null|false|none|
|motion|query|integer \| null|false|none|
|paths|query|integer \| null|false|none|
|regions|query|integer \| null|false|none|
|quality|query|integer \| null|false|none|
|height|query|integer \| null|false|none|
|store|query|integer \| null|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|extension|webp|
|extension|png|
|extension|jpg|
|extension|jpeg|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="latest-frame-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get Snapshot From Recording

<a id="opIdget_snapshot_from_recording__camera_name__recordings__frame_time__snapshot__format__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/recordings/0/snapshot.png \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/recordings/{frame_time}/snapshot.{format}`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="get-snapshot-from-recording-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|frame_time|path|number|true|none|
|format|path|string|true|none|
|height|query|integer|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|png|
|format|jpg|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-snapshot-from-recording-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Submit Recording Snapshot To Plus

<a id="opIdsubmit_recording_snapshot_to_plus__camera_name__plus__frame_time__post"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/plus/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /{camera_name}/plus/{frame_time}`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="submit-recording-snapshot-to-plus-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|frame_time|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="submit-recording-snapshot-to-plus-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Recording Clip

<a id="opIdrecording_clip__camera_name__start__start_ts__end__end_ts__clip_mp4_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/start/0/end/0/clip.mp4 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/start/{start_ts}/end/{end_ts}/clip.mp4`

**Access:** Authenticated user with access to the referenced camera.

For iOS devices, use the master.m3u8 HLS link instead of clip.mp4. Safari does not reliably process progressive mp4 files.

<h3 id="recording-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="recording-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Vod Ts

<a id="opIdvod_ts_vod__camera_name__start__start_ts__end__end_ts__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/vod/string/start/0/end/0 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /vod/{camera_name}/start/{start_ts}/end/{end_ts}`

**Access:** Authenticated user with access to the referenced camera.

Returns an HLS playlist for the specified timestamp-range on the specified camera. Append /master.m3u8 or /index.m3u8 for HLS playback.

<h3 id="vod-ts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|
|force_discontinuity|query|boolean|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="vod-ts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Vod Hour No Timezone

<a id="opIdvod_hour_no_timezone_vod__year_month___day___hour___camera_name__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/vod/string/0/0/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /vod/{year_month}/{day}/{hour}/{camera_name}`

**Access:** Authenticated user with access to the referenced camera.

Returns an HLS playlist for the specified date-time on the specified camera. Append /master.m3u8 or /index.m3u8 for HLS playback.

<h3 id="vod-hour-no-timezone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year_month|path|string|true|none|
|day|path|integer|true|none|
|hour|path|integer|true|none|
|camera_name|path|string \| null|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="vod-hour-no-timezone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Vod Hour

<a id="opIdvod_hour_vod__year_month___day___hour___camera_name___tz_name__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/vod/string/0/0/string/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /vod/{year_month}/{day}/{hour}/{camera_name}/{tz_name}`

**Access:** Authenticated user with access to the referenced camera.

Returns an HLS playlist for the specified date-time (with timezone) on the specified camera. Append /master.m3u8 or /index.m3u8 for HLS playback.

<h3 id="vod-hour-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|year_month|path|string|true|none|
|day|path|integer|true|none|
|hour|path|integer|true|none|
|camera_name|path|string \| null|true|none|
|tz_name|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="vod-hour-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Vod Event

<a id="opIdvod_event_vod_event__event_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/vod/event/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /vod/event/{event_id}`

**Access:** Authenticated user with access to the referenced camera.

Returns an HLS playlist for the specified object. Append /master.m3u8 or /index.m3u8 for HLS playback.

<h3 id="vod-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|padding|query|integer|false|Padding to apply to the vod.|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="vod-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Vod Clip

<a id="opIdvod_clip_vod_clip__camera_name__start__start_ts__end__end_ts__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/vod/clip/string/start/0/end/0 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /vod/clip/{camera_name}/start/{start_ts}/end/{end_ts}`

**Access:** Authenticated user with access to the referenced camera.

Returns an HLS playlist for a timestamp range with HLS discontinuity enabled. Append /master.m3u8 or /index.m3u8 for HLS playback.

<h3 id="vod-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="vod-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Vod Ts Stream

<a id="opIdvod_ts_stream_vod__camera_name___stream__start__start_ts__end__end_ts__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/vod/string/main/start/0/end/0 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /vod/{camera_name}/{stream}/start/{start_ts}/end/{end_ts}`

**Access:** Authenticated user with access to the referenced camera.

Returns an HLS playlist pinned to one stream type (main or sub) for the specified timestamp-range on the specified camera. Append /master.m3u8 or /index.m3u8 for HLS playback.

<h3 id="vod-ts-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|stream|path|[VodStreamPreference](#schemavodstreampreference)|true|none|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|
|force_discontinuity|query|boolean|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|stream|main|
|stream|sub|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="vod-ts-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Event Snapshot

<a id="opIdevent_snapshot_events__event_id__snapshot_jpg_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/snapshot.jpg \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/{event_id}/snapshot.jpg`

**Access:** Authenticated user with access to the referenced camera.

Returns a snapshot image for the specified object id.

<h3 id="event-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|download|query|boolean \| null|false|none|
|timestamp|query|integer \| null|false|none|
|bbox|query|integer \| null|false|none|
|crop|query|integer \| null|false|none|
|height|query|integer \| null|false|none|
|quality|query|integer \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="event-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Event Thumbnail

<a id="opIdevent_thumbnail_events__event_id__thumbnail__extension__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/thumbnail.webp \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/{event_id}/thumbnail.{extension}`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="event-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|extension|path|[Extension](#schemaextension)|true|none|
|max_cache_age|query|integer|false|Max cache age in seconds. Default 30 days in seconds.|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|extension|webp|
|extension|png|
|extension|jpg|
|extension|jpeg|
|format|ios|
|format|android|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="event-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Grid Snapshot

<a id="opIdgrid_snapshot__camera_name__grid_jpg_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/grid.jpg \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/grid.jpg`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="grid-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|color|query|string|false|none|
|font_scale|query|number|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="grid-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Clear Region Grid

<a id="opIdclear_region_grid__camera_name__region_grid_delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/region_grid \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /{camera_name}/region_grid`

**Access:** Admin role required.

Clear the region grid for a camera.

<h3 id="clear-region-grid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="clear-region-grid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## Event Snapshot Clean

<a id="opIdevent_snapshot_clean_events__event_id__snapshot_clean_webp_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/snapshot-clean.webp \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/{event_id}/snapshot-clean.webp`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="event-snapshot-clean-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|download|query|boolean|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="event-snapshot-clean-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Event Clip

<a id="opIdevent_clip_events__event_id__clip_mp4_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/clip.mp4 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/{event_id}/clip.mp4`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="event-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|padding|query|integer|false|Padding to apply to clip.|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="event-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Review Clip

<a id="opIdreview_clip_review__review_id__clip_mp4_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/string/clip.mp4 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /review/{review_id}/clip.mp4`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="review-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|review_id|path|string|true|none|
|padding|query|integer|false|Padding to apply to clip.|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="review-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Event Preview

<a id="opIdevent_preview_events__event_id__preview_gif_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/events/string/preview.gif \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /events/{event_id}/preview.gif`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="event-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="event-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Preview Gif

<a id="opIdpreview_gif__camera_name__start__start_ts__end__end_ts__preview_gif_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/start/0/end/0/preview.gif \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/start/{start_ts}/end/{end_ts}/preview.gif`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="preview-gif-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|
|max_cache_age|query|integer|false|Max cache age in seconds. Default 30 days in seconds.|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="preview-gif-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Preview Mp4

<a id="opIdpreview_mp4__camera_name__start__start_ts__end__end_ts__preview_mp4_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/start/0/end/0/preview.mp4 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/start/{start_ts}/end/{end_ts}/preview.mp4`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="preview-mp4-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|start_ts|path|number|true|none|
|end_ts|path|number|true|none|
|max_cache_age|query|integer|false|Max cache age in seconds. Default 7 days in seconds.|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="preview-mp4-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Review Preview

<a id="opIdreview_preview_review__event_id__preview_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/review/string/preview \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /review/{event_id}/preview`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="review-preview-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event_id|path|string|true|none|
|format|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|gif|
|format|mp4|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="review-preview-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Preview Thumbnail

<a id="opIdpreview_thumbnail_preview__file_name__thumbnail_webp_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/preview/string/thumbnail.webp \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /preview/{file_name}/thumbnail.webp`

**Access:** Authenticated user with access to the referenced camera.

Get a thumbnail from the cached preview frames.

<h3 id="preview-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_name|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="preview-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Preview Thumbnail

<a id="opIdpreview_thumbnail_preview__file_name__thumbnail_jpg_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/preview/string/thumbnail.jpg \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /preview/{file_name}/thumbnail.jpg`

**Access:** Authenticated user with access to the referenced camera.

Get a thumbnail from the cached preview frames.

<h3 id="preview-thumbnail-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file_name|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="preview-thumbnail-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Label Thumbnail

<a id="opIdlabel_thumbnail__camera_name___label__thumbnail_jpg_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/string/thumbnail.jpg \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/{label}/thumbnail.jpg`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="label-thumbnail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|label|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="label-thumbnail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Label Thumbnail

<a id="opIdlabel_thumbnail__camera_name___label__best_jpg_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/string/best.jpg \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/{label}/best.jpg`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="label-thumbnail-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|label|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="label-thumbnail-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Label Clip

<a id="opIdlabel_clip__camera_name___label__clip_mp4_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/string/clip.mp4 \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/{label}/clip.mp4`

**Access:** Authenticated user with access to the referenced camera.

<h3 id="label-clip-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|label|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="label-clip-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Label Snapshot

<a id="opIdlabel_snapshot__camera_name___label__snapshot_jpg_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/string/snapshot.jpg \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/{label}/snapshot.jpg`

**Access:** Authenticated user with access to the referenced camera.

Returns the snapshot image from the latest event for the given camera and label combo

<h3 id="label-snapshot-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|label|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="label-snapshot-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

<h1 id="api-motion-search">Motion Search</h1>

## Start motion search job

<a id="opIdstart_motion_search__camera_name__search_motion_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/search/motion \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}" \
  -d '{
    "start_time": 0,
    "end_time": 0,
    "polygon_points": [
      [
        0
      ]
    ],
    "threshold": 30,
    "min_area": 5,
    "parallel": false,
    "max_results": 25
  }'
```

`POST /{camera_name}/search/motion`

**Access:** Authenticated user with access to the referenced camera.

Starts an asynchronous search for significant motion changes within
    a user-defined Region of Interest (ROI) over a specified time range. Returns a job_id
    that can be used to poll for results.

> Body parameter

```json
{
  "start_time": 0,
  "end_time": 0,
  "polygon_points": [
    [
      0
    ]
  ],
  "threshold": 30,
  "min_area": 5,
  "parallel": false,
  "max_results": 25
}
```

<h3 id="start-motion-search-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|body|body|[MotionSearchRequest](#schemamotionsearchrequest)|true|none|
|» start_time|body|number|true|Start timestamp for the search range|
|» end_time|body|number|true|End timestamp for the search range|
|» polygon_points|body|[[number]]|true|List of [x, y] normalized coordinates (0-1) defining the ROI polygon|
|» threshold|body|integer|false|Pixel difference threshold (1-255)|
|» min_area|body|number|false|Minimum change area as a percentage of the ROI|
|» parallel|body|boolean|false|Enable parallel scanning across segments|
|» max_results|body|integer|false|Maximum number of search results to return|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "job_id": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="start-motion-search-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MotionSearchStartResponse](#schemamotionsearchstartresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Get motion search job status

<a id="opIdget_motion_search_status_endpoint__camera_name__search_motion__job_id__get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/search/motion/string \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/search/motion/{job_id}`

**Access:** Authenticated user with access to the referenced camera.

Returns the status and results (if complete) of a motion search job.

<h3 id="get-motion-search-job-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|job_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string",
  "status": "string",
  "results": [
    {
      "timestamp": 0,
      "change_percentage": 0
    }
  ],
  "total_frames_processed": 0,
  "error_message": "string",
  "metrics": {
    "segments_scanned": 0,
    "segments_processed": 0,
    "metadata_inactive_segments": 0,
    "heatmap_roi_skip_segments": 0,
    "fallback_full_range_segments": 0,
    "frames_decoded": 0,
    "wall_time_seconds": 0,
    "segments_with_errors": 0
  },
  "scanning_timestamp": 0,
  "progress": 0
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="get-motion-search-job-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[MotionSearchStatusResponse](#schemamotionsearchstatusresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Cancel motion search job

<a id="opIdcancel_motion_search_endpoint__camera_name__search_motion__job_id__cancel_post"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/search/motion/string/cancel \
  -X POST \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`POST /{camera_name}/search/motion/{job_id}/cancel`

**Access:** Authenticated user with access to the referenced camera.

Cancels an active motion search job if it is still processing.

<h3 id="cancel-motion-search-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|job_id|path|string|true|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="cancel-motion-search-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

<h1 id="api-recordings">Recordings</h1>

## Get Recordings Storage Usage

<a id="opIdget_recordings_storage_usage_recordings_storage_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/recordings/storage \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /recordings/storage`

**Access:** Admin role required.

> Example responses

> 200 Response

```json
null
```

<h3 id="get-recordings-storage-usage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

## All Recordings Summary

<a id="opIdall_recordings_summary_recordings_summary_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/recordings/summary \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /recordings/summary`

**Access:** Any authenticated user.

Returns true/false by day indicating if recordings exist

<h3 id="all-recordings-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|timezone|query|string|false|none|
|cameras|query|string \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="all-recordings-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Recordings Summary

<a id="opIdrecordings_summary__camera_name__recordings_summary_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/recordings/summary \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/recordings/summary`

**Access:** Authenticated user with access to the referenced camera.

Returns hourly summary for recordings of given camera

<h3 id="recordings-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|timezone|query|string|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="recordings-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Recordings Coverage

<a id="opIdrecordings_coverage__camera_name__recordings_coverage_get"></a>

> Code samples

```bash
curl 'http://localhost:5000/api/string/recordings/coverage?after=0&before=0' \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/recordings/coverage`

**Access:** Authenticated user with access to the referenced camera.

Returns merged recording coverage spans plus codec compatibility.

codecs_compatible is false only when more than one known video codec
appears across the range's rows, the case where the merged vod route
degrades to a single-stream manifest.

<h3 id="recordings-coverage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|after|query|number|true|none|
|before|query|number|true|none|
|timelines|query|boolean|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="recordings-coverage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Recordings

<a id="opIdrecordings__camera_name__recordings_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/string/recordings \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /{camera_name}/recordings`

**Access:** Authenticated user with access to the referenced camera.

Return specific camera recordings between the given 'after'/'end' times. If not provided the last hour will be used

<h3 id="recordings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|camera_name|path|string \| null|true|none|
|after|query|number \| null|false|none|
|before|query|number \| null|false|none|

> Example responses

> 200 Response

```json
null
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="recordings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## No Recordings

<a id="opIdno_recordings_recordings_unavailable_get"></a>

> Code samples

```bash
curl http://localhost:5000/api/recordings/unavailable \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`GET /recordings/unavailable`

**Access:** Any authenticated user.

Get time ranges with no recordings.

<h3 id="no-recordings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cameras|query|string|false|none|
|before|query|number|false|none|
|after|query|number|false|none|
|scale|query|integer|false|none|

> Example responses

> 200 Response

```json
[
  {}
]
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="no-recordings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|Inline|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<h3 id="no-recordings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateUserAuth
</aside>

## Delete recordings

<a id="opIddelete_recordings_recordings_start__start__end__end__delete"></a>

> Code samples

```bash
curl http://localhost:5000/api/recordings/start/0/end/0 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Cookie: frigate_token=${API_KEY}"
```

`DELETE /recordings/start/{start}/end/{end}`

**Access:** Admin role required.

Deletes recordings within the specified time range.
    Recordings can be filtered by cameras and kept based on motion, objects, or audio attributes.

<h3 id="delete-recordings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start|path|number|true|Start timestamp (unix)|
|end|path|number|true|End timestamp (unix)|
|keep|query|string \| null|false|none|
|cameras|query|string \| null|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "message": "string"
}
```

> 422 Response

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

<h3 id="delete-recordings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful Response|[GenericResponse](#schemagenericresponse)|
|422|Unprocessable Entity|Validation Error|[HTTPValidationError](#schemahttpvalidationerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
frigateAdminAuth
</aside>

# Schemas

<h2 id="tocS_AppConfigSetBody">AppConfigSetBody</h2>
<!-- backwards compatibility -->
<a id="schemaappconfigsetbody"></a>
<a id="schema_AppConfigSetBody"></a>
<a id="tocSappconfigsetbody"></a>
<a id="tocsappconfigsetbody"></a>

```json
{
  "requires_restart": 1,
  "update_topic": "string",
  "config_data": {},
  "skip_save": false,
  "replace_paths": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|requires_restart|integer|false|none|none|
|update_topic|string \| null|false|none|none|
|config_data|object \| null|false|none|none|
|skip_save|boolean|false|none|none|
|replace_paths|[string]|false|none|none|

<h2 id="tocS_AppPostLoginBody">AppPostLoginBody</h2>
<!-- backwards compatibility -->
<a id="schemaapppostloginbody"></a>
<a id="schema_AppPostLoginBody"></a>
<a id="tocSapppostloginbody"></a>
<a id="tocsapppostloginbody"></a>

```json
{
  "user": "string",
  "password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|string|true|none|none|
|password|string|true|none|none|

<h2 id="tocS_AppPostUsersBody">AppPostUsersBody</h2>
<!-- backwards compatibility -->
<a id="schemaapppostusersbody"></a>
<a id="schema_AppPostUsersBody"></a>
<a id="tocSapppostusersbody"></a>
<a id="tocsapppostusersbody"></a>

```json
{
  "username": "string",
  "password": "string",
  "role": "viewer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|username|string|true|none|none|
|password|string|true|none|none|
|role|string \| null|false|none|none|

<h2 id="tocS_AppPutPasswordBody">AppPutPasswordBody</h2>
<!-- backwards compatibility -->
<a id="schemaappputpasswordbody"></a>
<a id="schema_AppPutPasswordBody"></a>
<a id="tocSappputpasswordbody"></a>
<a id="tocsappputpasswordbody"></a>

```json
{
  "password": "string",
  "old_password": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|none|
|old_password|string \| null|false|none|none|

<h2 id="tocS_AppPutRoleBody">AppPutRoleBody</h2>
<!-- backwards compatibility -->
<a id="schemaappputrolebody"></a>
<a id="schema_AppPutRoleBody"></a>
<a id="tocSappputrolebody"></a>
<a id="tocsappputrolebody"></a>

```json
{
  "role": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|none|

<h2 id="tocS_AudioTranscriptionBody">AudioTranscriptionBody</h2>
<!-- backwards compatibility -->
<a id="schemaaudiotranscriptionbody"></a>
<a id="schema_AudioTranscriptionBody"></a>
<a id="tocSaudiotranscriptionbody"></a>
<a id="tocsaudiotranscriptionbody"></a>

```json
{
  "event_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_id|string|true|none|ID of the event to transcribe audio for|

<h2 id="tocS_BatchExportBody">BatchExportBody</h2>
<!-- backwards compatibility -->
<a id="schemabatchexportbody"></a>
<a id="schema_BatchExportBody"></a>
<a id="tocSbatchexportbody"></a>
<a id="tocsbatchexportbody"></a>

```json
{
  "items": [
    {
      "camera": "string",
      "start_time": 0,
      "end_time": 0,
      "image_path": "string",
      "friendly_name": "string",
      "client_item_id": "string"
    }
  ],
  "export_case_id": "string",
  "new_case_name": "string",
  "new_case_description": "string",
  "stream": "auto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[BatchExportItem](#schemabatchexportitem)]|true|none|List of export items. Each item has its own camera and time range.|
|export_case_id|string \| null|false|none|Existing export case ID to assign all exports to. Attaching to an existing case is temporarily admin-only until case-level ACLs exist.|
|new_case_name|string \| null|false|none|Name of a new export case to create when export_case_id is omitted|
|new_case_description|string \| null|false|none|Optional description for a newly created export case|
|stream|[ExportStreamEnum](#schemaexportstreamenum)|false|none|Which recorded stream every item in the batch is exported from. 'auto' uses the merged timeline, preferring the main stream and falling back to the sub stream where main has aged out. 'main' or 'sub' pins the exports to that stream.|

#### Enumerated Values

|Property|Value|
|---|---|
|stream|auto|
|stream|main|
|stream|sub|

<h2 id="tocS_BatchExportItem">BatchExportItem</h2>
<!-- backwards compatibility -->
<a id="schemabatchexportitem"></a>
<a id="schema_BatchExportItem"></a>
<a id="tocSbatchexportitem"></a>
<a id="tocsbatchexportitem"></a>

```json
{
  "camera": "string",
  "start_time": 0,
  "end_time": 0,
  "image_path": "string",
  "friendly_name": "string",
  "client_item_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|camera|string|true|none|none|
|start_time|number|true|none|none|
|end_time|number|true|none|none|
|image_path|string \| null|false|none|Optional existing image to use as the export thumbnail|
|friendly_name|string \| null|false|none|Optional friendly name for this specific export item|
|client_item_id|string \| null|false|none|Optional opaque client identifier echoed back in results|

<h2 id="tocS_BatchExportResponse">BatchExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchexportresponse"></a>
<a id="schema_BatchExportResponse"></a>
<a id="tocSbatchexportresponse"></a>
<a id="tocsbatchexportresponse"></a>

```json
{
  "export_case_id": "string",
  "export_ids": [
    "string"
  ],
  "results": [
    {
      "camera": "string",
      "export_id": "string",
      "success": true,
      "status": "string",
      "error": "string",
      "item_index": 0,
      "client_item_id": "string"
    }
  ]
}
```

Response model for starting an export batch.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|export_case_id|string \| null|false|none|Export case ID associated with the batch|
|export_ids|[string]|true|none|Export IDs successfully queued|
|results|[[BatchExportResultModel](#schemabatchexportresultmodel)]|true|none|Per-item batch export results|

<h2 id="tocS_BatchExportResultModel">BatchExportResultModel</h2>
<!-- backwards compatibility -->
<a id="schemabatchexportresultmodel"></a>
<a id="schema_BatchExportResultModel"></a>
<a id="tocSbatchexportresultmodel"></a>
<a id="tocsbatchexportresultmodel"></a>

```json
{
  "camera": "string",
  "export_id": "string",
  "success": true,
  "status": "string",
  "error": "string",
  "item_index": 0,
  "client_item_id": "string"
}
```

Per-item result for a batch export request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|camera|string|true|none|Camera name for this export attempt|
|export_id|string \| null|false|none|The export ID when the export was successfully queued|
|success|boolean|true|none|Whether the export was successfully queued|
|status|string \| null|false|none|Queue status for this camera export|
|error|string \| null|false|none|Validation or queueing error for this item, if any|
|item_index|integer \| null|false|none|Zero-based index of this result within the request items list|
|client_item_id|string \| null|false|none|Opaque client-supplied item identifier echoed from the request|

<h2 id="tocS_Body_recognize_face_faces_recognize_post">Body_recognize_face_faces_recognize_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_recognize_face_faces_recognize_post"></a>
<a id="schema_Body_recognize_face_faces_recognize_post"></a>
<a id="tocSbody_recognize_face_faces_recognize_post"></a>
<a id="tocsbody_recognize_face_faces_recognize_post"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|true|none|none|

<h2 id="tocS_Body_register_face_faces__name__register_post">Body_register_face_faces__name__register_post</h2>
<!-- backwards compatibility -->
<a id="schemabody_register_face_faces__name__register_post"></a>
<a id="schema_Body_register_face_faces__name__register_post"></a>
<a id="tocSbody_register_face_faces__name__register_post"></a>
<a id="tocsbody_register_face_faces__name__register_post"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|true|none|none|

<h2 id="tocS_CameraSetBody">CameraSetBody</h2>
<!-- backwards compatibility -->
<a id="schemacamerasetbody"></a>
<a id="schema_CameraSetBody"></a>
<a id="tocScamerasetbody"></a>
<a id="tocscamerasetbody"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|true|none|The value to set for the feature|

<h2 id="tocS_ChaptersEnum">ChaptersEnum</h2>
<!-- backwards compatibility -->
<a id="schemachaptersenum"></a>
<a id="schema_ChaptersEnum"></a>
<a id="tocSchaptersenum"></a>
<a id="tocschaptersenum"></a>

```json
"none"
```

<h2 id="tocS_ChatCompletionRequest">ChatCompletionRequest</h2>
<!-- backwards compatibility -->
<a id="schemachatcompletionrequest"></a>
<a id="schema_ChatCompletionRequest"></a>
<a id="tocSchatcompletionrequest"></a>
<a id="tocschatcompletionrequest"></a>

```json
{
  "messages": [
    {
      "role": "string",
      "content": null,
      "tool_call_id": "string",
      "name": "string",
      "tool_calls": [
        {}
      ]
    }
  ],
  "max_tool_iterations": 5,
  "stream": false,
  "enable_thinking": true,
  "tool_decisions": {
    "property1": "approve",
    "property2": "approve"
  }
}
```

Request for chat completion with tool calling.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|messages|[[ChatMessage](#schemachatmessage)]|true|none|List of messages in the conversation|
|max_tool_iterations|integer|false|none|Maximum number of tool call iterations (default: 5)|
|stream|boolean|false|none|If true, stream the final assistant response in the body as newline-delimited JSON.|
|enable_thinking|boolean \| null|false|none|Per-request thinking toggle. None means use the provider default. Ignored by providers that do not expose a per-request thinking switch.|
|tool_decisions|object|false|none|Decisions for tool calls that paused for approval, keyed by tool call ID. Send these with the conversation chain returned alongside an approval request; rejected calls are reported to the model as declined instead of being executed.|

<h2 id="tocS_ChatMessage">ChatMessage</h2>
<!-- backwards compatibility -->
<a id="schemachatmessage"></a>
<a id="schema_ChatMessage"></a>
<a id="tocSchatmessage"></a>
<a id="tocschatmessage"></a>

```json
{
  "role": "string",
  "content": null,
  "tool_call_id": "string",
  "name": "string",
  "tool_calls": [
    {}
  ]
}
```

A single message in a chat conversation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|role|string|true|none|Message role: 'user', 'assistant', 'system', or 'tool'|
|content|object \| null|false|none|Message content. Usually a string, but may be a multimodal content list (e.g. text + image_url) or null for assistant turns that only request tool calls.|
|tool_call_id|string \| null|false|none|For tool messages, the ID of the tool call|
|name|string \| null|false|none|For tool messages, the tool name|
|tool_calls|[object] \| null|false|none|For assistant messages replayed from prior turns, the OpenAI-format tool calls the model previously requested. Replaying these verbatim keeps the conversation prefix byte-for-byte identical so the model server's prompt cache hits on follow-up turns.|

<h2 id="tocS_DayReview">DayReview</h2>
<!-- backwards compatibility -->
<a id="schemadayreview"></a>
<a id="schema_DayReview"></a>
<a id="tocSdayreview"></a>
<a id="tocsdayreview"></a>

```json
{
  "day": "1970-01-01T00:00:00Z",
  "reviewed_alert": 0,
  "reviewed_detection": 0,
  "total_alert": 0,
  "total_detection": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|string(date-time)|true|none|none|
|reviewed_alert|integer|true|none|none|
|reviewed_detection|integer|true|none|none|
|total_alert|integer|true|none|none|
|total_detection|integer|true|none|none|

<h2 id="tocS_DebugReplayStartBody">DebugReplayStartBody</h2>
<!-- backwards compatibility -->
<a id="schemadebugreplaystartbody"></a>
<a id="schema_DebugReplayStartBody"></a>
<a id="tocSdebugreplaystartbody"></a>
<a id="tocsdebugreplaystartbody"></a>

```json
{
  "camera": "string",
  "start_time": 0,
  "end_time": 0
}
```

Request body for starting a debug replay session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|camera|string|true|none|none|
|start_time|number|true|none|none|
|end_time|number|true|none|none|

<h2 id="tocS_DebugReplayStartFromExportBody">DebugReplayStartFromExportBody</h2>
<!-- backwards compatibility -->
<a id="schemadebugreplaystartfromexportbody"></a>
<a id="schema_DebugReplayStartFromExportBody"></a>
<a id="tocSdebugreplaystartfromexportbody"></a>
<a id="tocsdebugreplaystartfromexportbody"></a>

```json
{
  "export_id": "string"
}
```

Request body for starting a debug replay session from an export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|export_id|string|true|none|none|

<h2 id="tocS_DebugReplayStartResponse">DebugReplayStartResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebugreplaystartresponse"></a>
<a id="schema_DebugReplayStartResponse"></a>
<a id="tocSdebugreplaystartresponse"></a>
<a id="tocsdebugreplaystartresponse"></a>

```json
{
  "success": true,
  "replay_camera": "string",
  "job_id": "string"
}
```

Response for starting a debug replay session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|replay_camera|string|true|none|none|
|job_id|string|true|none|none|

<h2 id="tocS_DebugReplayStatusResponse">DebugReplayStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebugreplaystatusresponse"></a>
<a id="schema_DebugReplayStatusResponse"></a>
<a id="tocSdebugreplaystatusresponse"></a>
<a id="tocsdebugreplaystatusresponse"></a>

```json
{
  "active": true,
  "replay_camera": "string",
  "source_camera": "string",
  "start_time": 0,
  "end_time": 0,
  "live_ready": false
}
```

Response for debug replay status.

Returns only session-presence fields. Startup progress and error
details flow through the job_state WebSocket topic via the
debug_replay job (see frigate.jobs.debug_replay); the
Replay page subscribes there with useJobStatus("debug_replay").

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|true|none|none|
|replay_camera|string \| null|false|none|none|
|source_camera|string \| null|false|none|none|
|start_time|number \| null|false|none|none|
|end_time|number \| null|false|none|none|
|live_ready|boolean|false|none|none|

<h2 id="tocS_DebugReplayStopResponse">DebugReplayStopResponse</h2>
<!-- backwards compatibility -->
<a id="schemadebugreplaystopresponse"></a>
<a id="schema_DebugReplayStopResponse"></a>
<a id="tocSdebugreplaystopresponse"></a>
<a id="tocsdebugreplaystopresponse"></a>

```json
{
  "success": true
}
```

Response for stopping a debug replay session.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|

<h2 id="tocS_DeleteFaceImagesBody">DeleteFaceImagesBody</h2>
<!-- backwards compatibility -->
<a id="schemadeletefaceimagesbody"></a>
<a id="schema_DeleteFaceImagesBody"></a>
<a id="tocSdeletefaceimagesbody"></a>
<a id="tocsdeletefaceimagesbody"></a>

```json
{
  "ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|List of image filenames to delete from the face folder|

<h2 id="tocS_DetectionHardware">DetectionHardware</h2>
<!-- backwards compatibility -->
<a id="schemadetectionhardware"></a>
<a id="schema_DetectionHardware"></a>
<a id="tocSdetectionhardware"></a>
<a id="tocsdetectionhardware"></a>

```json
{
  "key": "string",
  "detector": "string",
  "name": "string",
  "units": [
    {
      "device": "string",
      "label": "string"
    }
  ],
  "count": 0,
  "unlimited": true
}
```

A kind of detection hardware, and every unit of it that was found.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Stable identifier for this kind of hardware.|
|detector|string|true|none|The detector that drives this hardware.|
|name|string|true|none|Human readable name for this kind of hardware.|
|units|[[HardwareUnit](#schemahardwareunit)]|true|none|Each physical piece of this hardware that was found.|
|count|integer|true|none|How many units were found.|
|unlimited|boolean|true|none|Whether this hardware can run more inference processes than there are units.|

<h2 id="tocS_EventCreateResponse">EventCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventcreateresponse"></a>
<a id="schema_EventCreateResponse"></a>
<a id="tocSeventcreateresponse"></a>
<a id="tocseventcreateresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "event_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|message|string|true|none|none|
|event_id|string|true|none|none|

<h2 id="tocS_EventMultiDeleteResponse">EventMultiDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventmultideleteresponse"></a>
<a id="schema_EventMultiDeleteResponse"></a>
<a id="tocSeventmultideleteresponse"></a>
<a id="tocseventmultideleteresponse"></a>

```json
{
  "success": true,
  "deleted_events": [
    "string"
  ],
  "not_found_events": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|deleted_events|[string]|true|none|none|
|not_found_events|[string]|true|none|none|

<h2 id="tocS_EventResponse">EventResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventresponse"></a>
<a id="schema_EventResponse"></a>
<a id="tocSeventresponse"></a>
<a id="tocseventresponse"></a>

```json
{
  "id": "string",
  "label": "string",
  "sub_label": "string",
  "camera": "string",
  "start_time": 0,
  "end_time": 0,
  "false_positive": true,
  "zones": [
    "string"
  ],
  "thumbnail": "string",
  "has_clip": true,
  "has_snapshot": true,
  "retain_indefinitely": true,
  "plus_id": "string",
  "model_hash": "string",
  "detector_type": "string",
  "model_type": "string",
  "data": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|label|string|true|none|none|
|sub_label|string \| null|true|none|none|
|camera|string|true|none|none|
|start_time|number|true|none|none|
|end_time|number \| null|true|none|none|
|false_positive|boolean \| null|true|none|none|
|zones|[string]|true|none|none|
|thumbnail|string \| null|true|none|none|
|has_clip|boolean|true|none|none|
|has_snapshot|boolean|true|none|none|
|retain_indefinitely|boolean|true|none|none|
|plus_id|string \| null|true|none|none|
|model_hash|string \| null|true|none|none|
|detector_type|string \| null|true|none|none|
|model_type|string \| null|true|none|none|
|data|object|true|none|none|

<h2 id="tocS_EventUploadPlusResponse">EventUploadPlusResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventuploadplusresponse"></a>
<a id="schema_EventUploadPlusResponse"></a>
<a id="tocSeventuploadplusresponse"></a>
<a id="tocseventuploadplusresponse"></a>

```json
{
  "success": true,
  "plus_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|plus_id|string|true|none|none|

<h2 id="tocS_EventsAttributesBody">EventsAttributesBody</h2>
<!-- backwards compatibility -->
<a id="schemaeventsattributesbody"></a>
<a id="schema_EventsAttributesBody"></a>
<a id="tocSeventsattributesbody"></a>
<a id="tocseventsattributesbody"></a>

```json
{
  "attributes": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[string]|false|none|none|

<h2 id="tocS_EventsCreateBody">EventsCreateBody</h2>
<!-- backwards compatibility -->
<a id="schemaeventscreatebody"></a>
<a id="schema_EventsCreateBody"></a>
<a id="tocSeventscreatebody"></a>
<a id="tocseventscreatebody"></a>

```json
{
  "sub_label": "string",
  "score": 0,
  "duration": 30,
  "include_recording": true,
  "draw": {},
  "pre_capture": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|sub_label|string \| null|false|none|none|
|score|number \| null|false|none|none|
|duration|integer \| null|false|none|none|
|include_recording|boolean \| null|false|none|none|
|draw|object \| null|false|none|none|
|pre_capture|integer \| null|false|none|none|

<h2 id="tocS_EventsDeleteBody">EventsDeleteBody</h2>
<!-- backwards compatibility -->
<a id="schemaeventsdeletebody"></a>
<a id="schema_EventsDeleteBody"></a>
<a id="tocSeventsdeletebody"></a>
<a id="tocseventsdeletebody"></a>

```json
{
  "event_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_ids|[string]|true|none|none|

<h2 id="tocS_EventsDescriptionBody">EventsDescriptionBody</h2>
<!-- backwards compatibility -->
<a id="schemaeventsdescriptionbody"></a>
<a id="schema_EventsDescriptionBody"></a>
<a id="tocSeventsdescriptionbody"></a>
<a id="tocseventsdescriptionbody"></a>

```json
{
  "description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string \| null|true|none|none|

<h2 id="tocS_EventsEndBody">EventsEndBody</h2>
<!-- backwards compatibility -->
<a id="schemaeventsendbody"></a>
<a id="schema_EventsEndBody"></a>
<a id="tocSeventsendbody"></a>
<a id="tocseventsendbody"></a>

```json
{
  "end_time": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_time|number \| null|false|none|none|

<h2 id="tocS_EventsLPRBody">EventsLPRBody</h2>
<!-- backwards compatibility -->
<a id="schemaeventslprbody"></a>
<a id="schema_EventsLPRBody"></a>
<a id="tocSeventslprbody"></a>
<a id="tocseventslprbody"></a>

```json
{
  "recognizedLicensePlate": "string",
  "recognizedLicensePlateScore": 0.1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recognizedLicensePlate|string|true|none|none|
|recognizedLicensePlateScore|number \| null|false|none|none|

<h2 id="tocS_EventsSubLabelBody">EventsSubLabelBody</h2>
<!-- backwards compatibility -->
<a id="schemaeventssublabelbody"></a>
<a id="schema_EventsSubLabelBody"></a>
<a id="tocSeventssublabelbody"></a>
<a id="tocseventssublabelbody"></a>

```json
{
  "subLabel": "string",
  "subLabelScore": 0.1,
  "camera": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subLabel|string|true|none|none|
|subLabelScore|number \| null|false|none|none|
|camera|string \| null|false|none|none|

<h2 id="tocS_ExportBulkDeleteBody">ExportBulkDeleteBody</h2>
<!-- backwards compatibility -->
<a id="schemaexportbulkdeletebody"></a>
<a id="schema_ExportBulkDeleteBody"></a>
<a id="tocSexportbulkdeletebody"></a>
<a id="tocsexportbulkdeletebody"></a>

```json
{
  "ids": [
    "string"
  ]
}
```

Request body for bulk deleting exports.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|none|

<h2 id="tocS_ExportBulkReassignBody">ExportBulkReassignBody</h2>
<!-- backwards compatibility -->
<a id="schemaexportbulkreassignbody"></a>
<a id="schema_ExportBulkReassignBody"></a>
<a id="tocSexportbulkreassignbody"></a>
<a id="tocsexportbulkreassignbody"></a>

```json
{
  "ids": [
    "string"
  ],
  "export_case_id": "string"
}
```

Request body for bulk reassigning exports to a case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|none|
|export_case_id|string \| null|false|none|Case ID to assign to, or null to unassign from current case|

<h2 id="tocS_ExportCaseCreateBody">ExportCaseCreateBody</h2>
<!-- backwards compatibility -->
<a id="schemaexportcasecreatebody"></a>
<a id="schema_ExportCaseCreateBody"></a>
<a id="tocSexportcasecreatebody"></a>
<a id="tocsexportcasecreatebody"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

Request body for creating a new export case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|Friendly name of the export case|
|description|string \| null|false|none|Optional description of the export case|

<h2 id="tocS_ExportCaseModel">ExportCaseModel</h2>
<!-- backwards compatibility -->
<a id="schemaexportcasemodel"></a>
<a id="schema_ExportCaseModel"></a>
<a id="tocSexportcasemodel"></a>
<a id="tocsexportcasemodel"></a>

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "created_at": 0,
  "updated_at": 0
}
```

Model representing a single export case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the export case|
|name|string|true|none|Friendly name of the export case|
|description|string \| null|false|none|Optional description of the export case|
|created_at|number|true|none|Unix timestamp when the export case was created|
|updated_at|number|true|none|Unix timestamp when the export case was last updated|

<h2 id="tocS_ExportCaseUpdateBody">ExportCaseUpdateBody</h2>
<!-- backwards compatibility -->
<a id="schemaexportcaseupdatebody"></a>
<a id="schema_ExportCaseUpdateBody"></a>
<a id="tocSexportcaseupdatebody"></a>
<a id="tocsexportcaseupdatebody"></a>

```json
{
  "name": "string",
  "description": "string"
}
```

Request body for updating an existing export case.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string \| null|false|none|Updated friendly name of the export case|
|description|string \| null|false|none|Updated description of the export case|

<h2 id="tocS_ExportJobModel">ExportJobModel</h2>
<!-- backwards compatibility -->
<a id="schemaexportjobmodel"></a>
<a id="schema_ExportJobModel"></a>
<a id="tocSexportjobmodel"></a>
<a id="tocsexportjobmodel"></a>

```json
{
  "id": "string",
  "job_type": "string",
  "status": "string",
  "camera": "string",
  "name": "string",
  "export_case_id": "string",
  "request_start_time": 0,
  "request_end_time": 0,
  "start_time": 0,
  "end_time": 0,
  "error_message": "string",
  "results": {},
  "current_step": "queued",
  "progress_percent": 0
}
```

Model representing a queued or running export job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the export job|
|job_type|string|true|none|Job type|
|status|string|true|none|Current job status|
|camera|string|true|none|Camera associated with this export job|
|name|string \| null|false|none|Friendly name for the export|
|export_case_id|string \| null|false|none|ID of the export case this export belongs to|
|request_start_time|number|true|none|Requested export start time|
|request_end_time|number|true|none|Requested export end time|
|start_time|number \| null|false|none|Unix timestamp when execution started|
|end_time|number \| null|false|none|Unix timestamp when execution completed|
|error_message|string \| null|false|none|Error message for failed jobs|
|results|object \| null|false|none|Result metadata for completed jobs|
|current_step|string|false|none|Current execution step (queued, preparing, encoding, encoding_retry, finalizing)|
|progress_percent|number|false|none|Progress percentage of the current step (0.0 - 100.0)|

<h2 id="tocS_ExportModel">ExportModel</h2>
<!-- backwards compatibility -->
<a id="schemaexportmodel"></a>
<a id="schema_ExportModel"></a>
<a id="tocSexportmodel"></a>
<a id="tocsexportmodel"></a>

```json
{
  "id": "string",
  "camera": "string",
  "name": "string",
  "date": 0,
  "video_path": "string",
  "thumb_path": "string",
  "in_progress": true,
  "export_case_id": "string"
}
```

Model representing a single export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Unique identifier for the export|
|camera|string|true|none|Camera name associated with this export|
|name|string|true|none|Friendly name of the export|
|date|number|true|none|Unix timestamp when the export was created|
|video_path|string|true|none|File path to the exported video|
|thumb_path|string|true|none|File path to the export thumbnail|
|in_progress|boolean|true|none|Whether the export is currently being processed|
|export_case_id|string \| null|false|none|ID of the export case this export belongs to|

<h2 id="tocS_ExportRecordingsBody">ExportRecordingsBody</h2>
<!-- backwards compatibility -->
<a id="schemaexportrecordingsbody"></a>
<a id="schema_ExportRecordingsBody"></a>
<a id="tocSexportrecordingsbody"></a>
<a id="tocsexportrecordingsbody"></a>

```json
{
  "source": "recordings",
  "name": "string",
  "image_path": "string",
  "export_case_id": "string",
  "chapters": "none",
  "stream": "auto"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[PlaybackSourceEnum](#schemaplaybacksourceenum)|false|none|none|
|name|string \| null|false|none|none|
|image_path|string|false|none|none|
|export_case_id|string \| null|false|none|ID of the export case to assign this export to|
|chapters|[ChaptersEnum](#schemachaptersenum) \| null|false|none|Optional chapter metadata to embed in the export. When omitted, the camera's configured export chapter mode is used.|
|stream|[ExportStreamEnum](#schemaexportstreamenum)|false|none|Which recorded stream to export. 'auto' uses the merged timeline, preferring the main stream and falling back to the sub stream where main has aged out. 'main' or 'sub' pins the export to that stream alone.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|recordings|
|source|preview|
|stream|auto|
|stream|main|
|stream|sub|

<h2 id="tocS_ExportRecordingsCustomBody">ExportRecordingsCustomBody</h2>
<!-- backwards compatibility -->
<a id="schemaexportrecordingscustombody"></a>
<a id="schema_ExportRecordingsCustomBody"></a>
<a id="tocSexportrecordingscustombody"></a>
<a id="tocsexportrecordingscustombody"></a>

```json
{
  "source": "recordings",
  "name": "string",
  "image_path": "string",
  "export_case_id": "string",
  "ffmpeg_input_args": "string",
  "ffmpeg_output_args": "string",
  "cpu_fallback": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|[PlaybackSourceEnum](#schemaplaybacksourceenum)|false|none|none|
|name|string|false|none|none|
|image_path|string|false|none|none|
|export_case_id|string \| null|false|none|ID of the export case to assign this export to|
|ffmpeg_input_args|string \| null|false|none|Custom FFmpeg input arguments. If not provided, defaults to timelapse input args.|
|ffmpeg_output_args|string \| null|false|none|Custom FFmpeg output arguments. If not provided, defaults to timelapse output args.|
|cpu_fallback|boolean|false|none|If true, retry export without hardware acceleration if the initial export fails.|

#### Enumerated Values

|Property|Value|
|---|---|
|source|recordings|
|source|preview|

<h2 id="tocS_ExportRenameBody">ExportRenameBody</h2>
<!-- backwards compatibility -->
<a id="schemaexportrenamebody"></a>
<a id="schema_ExportRenameBody"></a>
<a id="tocSexportrenamebody"></a>
<a id="tocsexportrenamebody"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|

<h2 id="tocS_ExportStreamEnum">ExportStreamEnum</h2>
<!-- backwards compatibility -->
<a id="schemaexportstreamenum"></a>
<a id="schema_ExportStreamEnum"></a>
<a id="tocSexportstreamenum"></a>
<a id="tocsexportstreamenum"></a>

```json
"auto"
```

Which recorded stream an export should be built from.

``auto`` keeps the merged timeline: main where it exists, sub filling
the gaps main has already aged out of. Pinning to one stream trades
that coverage for a uniform source, which is always a plain stream
copy since nothing hands off mid-export.

<h2 id="tocS_Extension">Extension</h2>
<!-- backwards compatibility -->
<a id="schemaextension"></a>
<a id="schema_Extension"></a>
<a id="tocSextension"></a>
<a id="tocsextension"></a>

```json
"webp"
```

<h2 id="tocS_FaceRecognitionResponse">FaceRecognitionResponse</h2>
<!-- backwards compatibility -->
<a id="schemafacerecognitionresponse"></a>
<a id="schema_FaceRecognitionResponse"></a>
<a id="tocSfacerecognitionresponse"></a>
<a id="tocsfacerecognitionresponse"></a>

```json
{
  "success": true,
  "score": 0,
  "face_name": "string"
}
```

Response model for face recognition endpoint.

Returns the result of attempting to recognize a face from an uploaded image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Whether the face recognition was successful|
|score|number \| null|false|none|Confidence score of the recognition (0-1)|
|face_name|string \| null|false|none|The recognized face name if successful|

<h2 id="tocS_FacesResponse">FacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemafacesresponse"></a>
<a id="schema_FacesResponse"></a>
<a id="tocSfacesresponse"></a>
<a id="tocsfacesresponse"></a>

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

Response model for the get_faces endpoint.

Returns a mapping of face names to lists of image filenames.
Each face name corresponds to a directory in the faces folder,
and the list contains the names of image files for that face.

Example:
    {
        "john_doe": ["face1.webp", "face2.jpg"],
        "jane_smith": ["face3.png"]
    }

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|**additionalProperties**|[string]|false|none|none|

<h2 id="tocS_GenAIProbeBody">GenAIProbeBody</h2>
<!-- backwards compatibility -->
<a id="schemagenaiprobebody"></a>
<a id="schema_GenAIProbeBody"></a>
<a id="tocSgenaiprobebody"></a>
<a id="tocsgenaiprobebody"></a>

```json
{
  "provider": "openai",
  "name": "string",
  "api_key": "string",
  "base_url": "string",
  "provider_options": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|provider|[GenAIProviderEnum](#schemagenaiproviderenum)|true|none|none|
|name|string \| null|false|none|none|
|api_key|string \| null|false|none|none|
|base_url|string \| null|false|none|none|
|provider_options|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|provider|openai|
|provider|azure_openai|
|provider|gemini|
|provider|ollama|
|provider|llamacpp|

<h2 id="tocS_GenAIProviderEnum">GenAIProviderEnum</h2>
<!-- backwards compatibility -->
<a id="schemagenaiproviderenum"></a>
<a id="schema_GenAIProviderEnum"></a>
<a id="tocSgenaiproviderenum"></a>
<a id="tocsgenaiproviderenum"></a>

```json
"openai"
```

<h2 id="tocS_GenerateObjectExamplesBody">GenerateObjectExamplesBody</h2>
<!-- backwards compatibility -->
<a id="schemagenerateobjectexamplesbody"></a>
<a id="schema_GenerateObjectExamplesBody"></a>
<a id="tocSgenerateobjectexamplesbody"></a>
<a id="tocsgenerateobjectexamplesbody"></a>

```json
{
  "model_name": "string",
  "label": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|true|none|Name of the classification model|
|label|string|true|none|Object label to collect examples for (e.g., 'person', 'car')|

<h2 id="tocS_GenerateStateExamplesBody">GenerateStateExamplesBody</h2>
<!-- backwards compatibility -->
<a id="schemageneratestateexamplesbody"></a>
<a id="schema_GenerateStateExamplesBody"></a>
<a id="tocSgeneratestateexamplesbody"></a>
<a id="tocsgeneratestateexamplesbody"></a>

```json
{
  "model_name": "string",
  "cameras": {
    "property1": [
      0,
      0,
      0,
      0
    ],
    "property2": [
      0,
      0,
      0,
      0
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|model_name|string|true|none|Name of the classification model|
|cameras|object|true|none|Dictionary mapping camera names to normalized crop coordinates in [x1, y1, x2, y2] format (values 0-1)|

<h2 id="tocS_GenericResponse">GenericResponse</h2>
<!-- backwards compatibility -->
<a id="schemagenericresponse"></a>
<a id="schema_GenericResponse"></a>
<a id="tocSgenericresponse"></a>
<a id="tocsgenericresponse"></a>

```json
{
  "success": true,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_HTTPValidationError">HTTPValidationError</h2>
<!-- backwards compatibility -->
<a id="schemahttpvalidationerror"></a>
<a id="schema_HTTPValidationError"></a>
<a id="tocShttpvalidationerror"></a>
<a id="tocshttpvalidationerror"></a>

```json
{
  "detail": [
    {
      "loc": [
        "string"
      ],
      "msg": "string",
      "type": "string",
      "input": null,
      "ctx": {}
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|[[ValidationError](#schemavalidationerror)]|false|none|none|

<h2 id="tocS_HardwareUnit">HardwareUnit</h2>
<!-- backwards compatibility -->
<a id="schemahardwareunit"></a>
<a id="schema_HardwareUnit"></a>
<a id="tocShardwareunit"></a>
<a id="tocshardwareunit"></a>

```json
{
  "device": "string",
  "label": "string"
}
```

One physical piece of hardware.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device|string|true|none|The value to put in a model's devices list, for example 'edgetpu:pci:1'.|
|label|string|true|none|How to identify this unit among others of the same kind, for example 'PCIe 1'.|

<h2 id="tocS_HwaccelFamily">HwaccelFamily</h2>
<!-- backwards compatibility -->
<a id="schemahwaccelfamily"></a>
<a id="schema_HwaccelFamily"></a>
<a id="tocShwaccelfamily"></a>
<a id="tocshwaccelfamily"></a>

```json
{
  "key": "string",
  "presets": {
    "property1": "string",
    "property2": "string"
  }
}
```

A kind of hardware decoding, and the presets that drive it.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|Stable identifier for this kind of hardware decoding.|
|presets|object|true|none|The ffmpeg preset for each codec this family decodes, or a single 'any' preset when it decodes every codec.|

<h2 id="tocS_HwaccelRecommendation">HwaccelRecommendation</h2>
<!-- backwards compatibility -->
<a id="schemahwaccelrecommendation"></a>
<a id="schema_HwaccelRecommendation"></a>
<a id="tocShwaccelrecommendation"></a>
<a id="tocshwaccelrecommendation"></a>

```json
{
  "recommended": "string",
  "available": [
    {
      "key": "string",
      "presets": {
        "property1": "string",
        "property2": "string"
      }
    }
  ]
}
```

The hardware decoding this system can do.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|recommended|string|true|none|Key of the family that fits this system best, or an empty string when none does.|
|available|[[HwaccelFamily](#schemahwaccelfamily)]|false|none|Every family this system's hardware can use, best first.|

<h2 id="tocS_Last24HoursReview">Last24HoursReview</h2>
<!-- backwards compatibility -->
<a id="schemalast24hoursreview"></a>
<a id="schema_Last24HoursReview"></a>
<a id="tocSlast24hoursreview"></a>
<a id="tocslast24hoursreview"></a>

```json
{
  "reviewed_alert": 0,
  "reviewed_detection": 0,
  "total_alert": 0,
  "total_detection": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|reviewed_alert|integer|true|none|none|
|reviewed_detection|integer|true|none|none|
|total_alert|integer|true|none|none|
|total_detection|integer|true|none|none|

<h2 id="tocS_MediaSyncBody">MediaSyncBody</h2>
<!-- backwards compatibility -->
<a id="schemamediasyncbody"></a>
<a id="schema_MediaSyncBody"></a>
<a id="tocSmediasyncbody"></a>
<a id="tocsmediasyncbody"></a>

```json
{
  "dry_run": true,
  "media_types": [
    "all"
  ],
  "force": false,
  "verbose": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dry_run|boolean|false|none|If True, only report orphans without deleting them|
|media_types|[string]|false|none|Types of media to sync: 'all', 'event_snapshots', 'event_thumbnails', 'review_thumbnails', 'previews', 'exports', 'recordings'|
|force|boolean|false|none|If True, bypass safety threshold checks|
|verbose|boolean|false|none|If True, write full orphan file list to disk|

<h2 id="tocS_MotionSearchMetricsResponse">MotionSearchMetricsResponse</h2>
<!-- backwards compatibility -->
<a id="schemamotionsearchmetricsresponse"></a>
<a id="schema_MotionSearchMetricsResponse"></a>
<a id="tocSmotionsearchmetricsresponse"></a>
<a id="tocsmotionsearchmetricsresponse"></a>

```json
{
  "segments_scanned": 0,
  "segments_processed": 0,
  "metadata_inactive_segments": 0,
  "heatmap_roi_skip_segments": 0,
  "fallback_full_range_segments": 0,
  "frames_decoded": 0,
  "wall_time_seconds": 0,
  "segments_with_errors": 0
}
```

Metrics collected during motion search execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|segments_scanned|integer|false|none|none|
|segments_processed|integer|false|none|none|
|metadata_inactive_segments|integer|false|none|none|
|heatmap_roi_skip_segments|integer|false|none|none|
|fallback_full_range_segments|integer|false|none|none|
|frames_decoded|integer|false|none|none|
|wall_time_seconds|number|false|none|none|
|segments_with_errors|integer|false|none|none|

<h2 id="tocS_MotionSearchRequest">MotionSearchRequest</h2>
<!-- backwards compatibility -->
<a id="schemamotionsearchrequest"></a>
<a id="schema_MotionSearchRequest"></a>
<a id="tocSmotionsearchrequest"></a>
<a id="tocsmotionsearchrequest"></a>

```json
{
  "start_time": 0,
  "end_time": 0,
  "polygon_points": [
    [
      0
    ]
  ],
  "threshold": 30,
  "min_area": 5,
  "parallel": false,
  "max_results": 25
}
```

Request body for motion search.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_time|number|true|none|Start timestamp for the search range|
|end_time|number|true|none|End timestamp for the search range|
|polygon_points|[[number]]|true|none|List of [x, y] normalized coordinates (0-1) defining the ROI polygon|
|threshold|integer|false|none|Pixel difference threshold (1-255)|
|min_area|number|false|none|Minimum change area as a percentage of the ROI|
|parallel|boolean|false|none|Enable parallel scanning across segments|
|max_results|integer|false|none|Maximum number of search results to return|

<h2 id="tocS_MotionSearchResult">MotionSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemamotionsearchresult"></a>
<a id="schema_MotionSearchResult"></a>
<a id="tocSmotionsearchresult"></a>
<a id="tocsmotionsearchresult"></a>

```json
{
  "timestamp": 0,
  "change_percentage": 0
}
```

A single search result with timestamp and change info.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timestamp|number|true|none|Timestamp where change was detected|
|change_percentage|number|true|none|Percentage of ROI area that changed|

<h2 id="tocS_MotionSearchStartResponse">MotionSearchStartResponse</h2>
<!-- backwards compatibility -->
<a id="schemamotionsearchstartresponse"></a>
<a id="schema_MotionSearchStartResponse"></a>
<a id="tocSmotionsearchstartresponse"></a>
<a id="tocsmotionsearchstartresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "job_id": "string"
}
```

Response when motion search job starts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|message|string|true|none|none|
|job_id|string|true|none|none|

<h2 id="tocS_MotionSearchStatusResponse">MotionSearchStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemamotionsearchstatusresponse"></a>
<a id="schema_MotionSearchStatusResponse"></a>
<a id="tocSmotionsearchstatusresponse"></a>
<a id="tocsmotionsearchstatusresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "status": "string",
  "results": [
    {
      "timestamp": 0,
      "change_percentage": 0
    }
  ],
  "total_frames_processed": 0,
  "error_message": "string",
  "metrics": {
    "segments_scanned": 0,
    "segments_processed": 0,
    "metadata_inactive_segments": 0,
    "heatmap_roi_skip_segments": 0,
    "fallback_full_range_segments": 0,
    "frames_decoded": 0,
    "wall_time_seconds": 0,
    "segments_with_errors": 0
  },
  "scanning_timestamp": 0,
  "progress": 0
}
```

Response containing job status and results.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|none|
|message|string|true|none|none|
|status|string|true|none|none|
|results|[[MotionSearchResult](#schemamotionsearchresult)] \| null|false|none|none|
|total_frames_processed|integer \| null|false|none|none|
|error_message|string \| null|false|none|none|
|metrics|[MotionSearchMetricsResponse](#schemamotionsearchmetricsresponse) \| null|false|none|none|
|scanning_timestamp|number \| null|false|none|none|
|progress|number \| null|false|none|none|

<h2 id="tocS_PlaybackSourceEnum">PlaybackSourceEnum</h2>
<!-- backwards compatibility -->
<a id="schemaplaybacksourceenum"></a>
<a id="schema_PlaybackSourceEnum"></a>
<a id="tocSplaybacksourceenum"></a>
<a id="tocsplaybacksourceenum"></a>

```json
"recordings"
```

<h2 id="tocS_PreviewModel">PreviewModel</h2>
<!-- backwards compatibility -->
<a id="schemapreviewmodel"></a>
<a id="schema_PreviewModel"></a>
<a id="tocSpreviewmodel"></a>
<a id="tocspreviewmodel"></a>

```json
{
  "camera": "string",
  "src": "string",
  "type": "string",
  "start": 0,
  "end": 0
}
```

Model representing a single preview clip.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|camera|string|true|none|Camera name for this preview|
|src|string|true|none|Path to the preview video file|
|type|string|true|none|MIME type of the preview video (video/mp4)|
|start|number|true|none|Unix timestamp when the preview starts|
|end|number|true|none|Unix timestamp when the preview ends|

<h2 id="tocS_RegenerateDescriptionEnum">RegenerateDescriptionEnum</h2>
<!-- backwards compatibility -->
<a id="schemaregeneratedescriptionenum"></a>
<a id="schema_RegenerateDescriptionEnum"></a>
<a id="tocSregeneratedescriptionenum"></a>
<a id="tocsregeneratedescriptionenum"></a>

```json
"thumbnails"
```

<h2 id="tocS_RenameFaceBody">RenameFaceBody</h2>
<!-- backwards compatibility -->
<a id="schemarenamefacebody"></a>
<a id="schema_RenameFaceBody"></a>
<a id="tocSrenamefacebody"></a>
<a id="tocsrenamefacebody"></a>

```json
{
  "new_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|new_name|string|true|none|New name for the face|

<h2 id="tocS_ReviewActivityMotionResponse">ReviewActivityMotionResponse</h2>
<!-- backwards compatibility -->
<a id="schemareviewactivitymotionresponse"></a>
<a id="schema_ReviewActivityMotionResponse"></a>
<a id="tocSreviewactivitymotionresponse"></a>
<a id="tocsreviewactivitymotionresponse"></a>

```json
{
  "start_time": 0,
  "motion": 0,
  "camera": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|start_time|integer|true|none|none|
|motion|number|true|none|none|
|camera|string|true|none|none|

<h2 id="tocS_ReviewModifyMultipleBody">ReviewModifyMultipleBody</h2>
<!-- backwards compatibility -->
<a id="schemareviewmodifymultiplebody"></a>
<a id="schema_ReviewModifyMultipleBody"></a>
<a id="tocSreviewmodifymultiplebody"></a>
<a id="tocsreviewmodifymultiplebody"></a>

```json
{
  "ids": [
    "string"
  ],
  "reviewed": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ids|[string]|true|none|none|
|reviewed|boolean|false|none|none|

<h2 id="tocS_ReviewSegmentResponse">ReviewSegmentResponse</h2>
<!-- backwards compatibility -->
<a id="schemareviewsegmentresponse"></a>
<a id="schema_ReviewSegmentResponse"></a>
<a id="tocSreviewsegmentresponse"></a>
<a id="tocsreviewsegmentresponse"></a>

```json
{
  "id": "string",
  "camera": "string",
  "start_time": "1970-01-01T00:00:00Z",
  "end_time": "1970-01-01T00:00:00Z",
  "has_been_reviewed": true,
  "severity": "alert",
  "thumb_path": "string",
  "data": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|camera|string|true|none|none|
|start_time|string(date-time)|true|none|none|
|end_time|string(date-time)|true|none|none|
|has_been_reviewed|boolean|true|none|none|
|severity|[SeverityEnum](#schemaseverityenum)|true|none|none|
|thumb_path|string|true|none|none|
|data|object|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|alert|
|severity|detection|

<h2 id="tocS_ReviewSummaryResponse">ReviewSummaryResponse</h2>
<!-- backwards compatibility -->
<a id="schemareviewsummaryresponse"></a>
<a id="schema_ReviewSummaryResponse"></a>
<a id="tocSreviewsummaryresponse"></a>
<a id="tocsreviewsummaryresponse"></a>

```json
{
  "last24Hours": {
    "reviewed_alert": 0,
    "reviewed_detection": 0,
    "total_alert": 0,
    "total_detection": 0
  },
  "root": {
    "property1": {
      "day": "1970-01-01T00:00:00Z",
      "reviewed_alert": 0,
      "reviewed_detection": 0,
      "total_alert": 0,
      "total_detection": 0
    },
    "property2": {
      "day": "1970-01-01T00:00:00Z",
      "reviewed_alert": 0,
      "reviewed_detection": 0,
      "total_alert": 0,
      "total_detection": 0
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last24Hours|[Last24HoursReview](#schemalast24hoursreview)|true|none|none|
|root|object|true|none|none|

<h2 id="tocS_SeverityEnum">SeverityEnum</h2>
<!-- backwards compatibility -->
<a id="schemaseverityenum"></a>
<a id="schema_SeverityEnum"></a>
<a id="tocSseverityenum"></a>
<a id="tocsseverityenum"></a>

```json
"alert"
```

<h2 id="tocS_StartExportResponse">StartExportResponse</h2>
<!-- backwards compatibility -->
<a id="schemastartexportresponse"></a>
<a id="schema_StartExportResponse"></a>
<a id="tocSstartexportresponse"></a>
<a id="tocsstartexportresponse"></a>

```json
{
  "success": true,
  "message": "string",
  "export_id": "string",
  "status": "string"
}
```

Response model for starting an export.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|success|boolean|true|none|Whether the export was started successfully|
|message|string|true|none|Status or error message|
|export_id|string \| null|false|none|The export ID if successfully started|
|status|string \| null|false|none|Queue status for the export job|

<h2 id="tocS_SubmitPlusBody">SubmitPlusBody</h2>
<!-- backwards compatibility -->
<a id="schemasubmitplusbody"></a>
<a id="schema_SubmitPlusBody"></a>
<a id="tocSsubmitplusbody"></a>
<a id="tocssubmitplusbody"></a>

```json
{
  "include_annotation": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|include_annotation|integer|false|none|none|

<h2 id="tocS_ToolExecuteRequest">ToolExecuteRequest</h2>
<!-- backwards compatibility -->
<a id="schematoolexecuterequest"></a>
<a id="schema_ToolExecuteRequest"></a>
<a id="tocStoolexecuterequest"></a>
<a id="tocstoolexecuterequest"></a>

```json
{
  "tool_name": "string",
  "arguments": {}
}
```

Request model for tool execution.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tool_name|string|true|none|none|
|arguments|object|true|none|none|

<h2 id="tocS_TriggerEmbeddingBody">TriggerEmbeddingBody</h2>
<!-- backwards compatibility -->
<a id="schematriggerembeddingbody"></a>
<a id="schema_TriggerEmbeddingBody"></a>
<a id="tocStriggerembeddingbody"></a>
<a id="tocstriggerembeddingbody"></a>

```json
{
  "type": "thumbnail",
  "data": "string",
  "threshold": 0.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|[TriggerType](#schematriggertype)|true|none|none|
|data|string|true|none|none|
|threshold|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|thumbnail|
|type|description|

<h2 id="tocS_TriggerType">TriggerType</h2>
<!-- backwards compatibility -->
<a id="schematriggertype"></a>
<a id="schema_TriggerType"></a>
<a id="tocStriggertype"></a>
<a id="tocstriggertype"></a>

```json
"thumbnail"
```

<h2 id="tocS_VLMMonitorRequest">VLMMonitorRequest</h2>
<!-- backwards compatibility -->
<a id="schemavlmmonitorrequest"></a>
<a id="schema_VLMMonitorRequest"></a>
<a id="tocSvlmmonitorrequest"></a>
<a id="tocsvlmmonitorrequest"></a>

```json
{
  "camera": "string",
  "condition": "string",
  "max_duration_minutes": 60,
  "labels": [],
  "zones": []
}
```

Request model for starting a VLM watch job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|camera|string|true|none|none|
|condition|string|true|none|none|
|max_duration_minutes|integer|false|none|none|
|labels|[string]|false|none|none|
|zones|[string]|false|none|none|

<h2 id="tocS_ValidationError">ValidationError</h2>
<!-- backwards compatibility -->
<a id="schemavalidationerror"></a>
<a id="schema_ValidationError"></a>
<a id="tocSvalidationerror"></a>
<a id="tocsvalidationerror"></a>

```json
{
  "loc": [
    "string"
  ],
  "msg": "string",
  "type": "string",
  "input": null,
  "ctx": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|loc|[string \| integer]|true|none|none|
|msg|string|true|none|none|
|type|string|true|none|none|
|input|object|false|none|none|
|ctx|object|false|none|none|

<h2 id="tocS_VodStreamPreference">VodStreamPreference</h2>
<!-- backwards compatibility -->
<a id="schemavodstreampreference"></a>
<a id="schema_VodStreamPreference"></a>
<a id="tocSvodstreampreference"></a>
<a id="tocsvodstreampreference"></a>

```json
"main"
```

Stream pin for the path-segment VOD route.

nginx-vod derives its mapping fetch URI from the playlist URL path
(query params are dropped), so the preference must be a path segment.
