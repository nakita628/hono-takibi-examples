<h1 id="authorized-partner-api-specification">Authorized Partner API Specification v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

To access files in user’s DigiLocker account from your application, you must first obtain user’s authorization.

Base URLs:

* <a href="https://betaapi.digitallocker.gov.in/public">https://betaapi.digitallocker.gov.in/public</a>

<a href="https://ndh.digitallocker.gov.in/terms.php">Terms of service</a>
Email: <a href="mailto:support@digitallocker.gov.in">support@digitallocker.gov.in</a> 

# Authentication

* API Key (Customkey2)
    - Parameter Name: **X-2**, in: header.

* API Key (Customkeys1)
    - Parameter Name: **X1123**, in: header.

- HTTP Authentication, scheme: bearer

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://betaapi.digitallocker.gov.in/public/oauth2/1/authorize](https://betaapi.digitallocker.gov.in/public/oauth2/1/authorize)
    - Token URL = [https://betaapi.digitallocker.gov.in/public/oauth2/1/token](https://betaapi.digitallocker.gov.in/public/oauth2/1/token)

- oAuth2 authentication.

    - Flow: clientCredentials
    - Token URL = [https://betaapi.digitallocker.gov.in/public/oauth2/1/token](https://betaapi.digitallocker.gov.in/public/oauth2/1/token)

|Scope|Scope Description|
|---|---|
|default|default scope|

<h1 id="authorized-partner-api-specification-authorization">Authorization</h1>

Authorization APIs For Server Side Web Applications.

## Get Authorization Code

<a id="opIdGet Authorization Code id"></a>

> Code samples

```bash
curl 'https://example.com/oauth2/1/authorize?response_type=string&redirect_uri=string&state=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/1/authorize`

Call to this API starts authorization flow using OAuth 2.0 protocol. This isn't an API call—it's a DigiLocker web page that lets the user sign in to DigiLocker and authorize your application to access user’s data. After the user decides whether or not to authorize your app, they will be redirected to the redirect link provided by your application.

<h3 id="get-authorization-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|client_id|query|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|response_type|query|string|true|Provide the grant type requested, either token or code.|
|redirect_uri|query|string|true|The URI to redirect the user after authorization has completed.|
|state|query|string|true|This is your application specific data that will be passed back to your application through redirect_uri.|
|Code_challenge|query|string|false|A unique random string called code verifier (code_verifier) is<br>created by the client application for every authorization request.<br>The code_challenge sent as this parameter is the Base64URL (with no<br>padding) encoded SHA256 hash of the code verifier.<br>        Code block:<br><br>       ```<br>       string base64_url_encode_without_padding(string arg)<br>       { <br>          string s = base64encode(arg); //Regular base64encoder with padding<br>          s = s.replace(’=’,’’); //Remove any trailing ’=’<br>          s = s.replace(’+’, ’-’); //Replace ’+’ with ’-’<br>          s = s.replace(’/’, ’_’); //Replace ’/’ with ’_’ return s;<br>        }<br>        ```<br>|
|Code_challenge_method|query|string|false|Specifies what method was used to encode a code_verifier to generate code_challenge parameter above. This parameter must be used with the code_challenge parameter. The only supported values for this parameter is S256.|
|dl_flow|query|string|false|If this parameter is provided its value will always be signup. This parameter indicates that the user does not have a DigiLocker account and will be directed to the signup flow directly. After the account is created, the user will be directed to the authorization flow. If this parameter is not sent, the user will be redirected to the sign in flow.|
|Verified_mobile|query|integer|false|Verified mobile number of the user. If this parameter is passed, DigiLocker will skip the mobile OTP verification step during sign up. DigiLocker will treat the mobile number passed in this parameter as a verified mobile number by the trusted client application. This parameter will be used only if dl_flow parameter mentioned above is set to signup and will be ignored otherwise.|

> Example responses

> 200 Response

```json
{
  "details": {
    "access_token": "string",
    "expires_in": 0,
    "scope": "string",
    "token_type": "string"
  }
}
```

<h3 id="get-authorization-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Invalid status value|None|

<h3 id="get-authorization-code-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|
|» access_token|string|true|none|none|
|» expires_in|integer|true|none|none|
|» scope|string|true|none|none|
|» token_type|string|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthAuthorizeCode
</aside>

## Get Access Token

<a id="opIdgetaccesstoken id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "Get access token using authorization code": {
      "client_id": "ABCDEFG",
      "client_secret": "a123456abcdeghijk7890",
      "code": "ca82123a5476aa2f5e4638957c0ecc55c6ec07c1",
      "code_verifier": "a123456abca",
      "grant_type": "authorization_code",
      "redirect_uri": "https://ndh.digitallocker.gov.in/oauth2-redirect.html"
    },
    "Get access token using device code and OTP": {
      "client_id": "string",
      "device_code": "string",
      "dl_otp": "string",
      "grant_type": "urn:ietf:params:oauth:grant-type:device_code"
    },
    "Get access token using refresh token": {
      "client_id": "ABCDEFG",
      "client_secret": "a123456abcdeghijk7890",
      "grant_type": "refresh_token",
      "refresh_token": "ca82123a5476aa2f5e4638957c0ecc55c6ec07c1"
    }
  }'
```

`POST /oauth2/1/token`

This endpoint only applies to apps using the authorization code flow. An app calls this endpoint to acquire a bearer token once the user has authorized the app. Calls to /oauth2/1/token need to be authenticated using the app's key and secret. These can either be passed as application/x-www-form-urlencoded POST parameters (see parameters below) or via HTTP basic authentication. If basic authentication is used, the app key should be provided as the username, and the app secret should be provided as the password.

> Body parameter

```json
{
  "Get access token using authorization code": {
    "client_id": "ABCDEFG",
    "client_secret": "a123456abcdeghijk7890",
    "code": "ca82123a5476aa2f5e4638957c0ecc55c6ec07c1",
    "code_verifier": "a123456abca",
    "grant_type": "authorization_code",
    "redirect_uri": "https://ndh.digitallocker.gov.in/oauth2-redirect.html"
  },
  "Get access token using device code and OTP": {
    "client_id": "string",
    "device_code": "string",
    "dl_otp": "string",
    "grant_type": "urn:ietf:params:oauth:grant-type:device_code"
  },
  "Get access token using refresh token": {
    "client_id": "ABCDEFG",
    "client_secret": "a123456abcdeghijk7890",
    "grant_type": "refresh_token",
    "refresh_token": "ca82123a5476aa2f5e4638957c0ecc55c6ec07c1"
  }
}
```

<h3 id="get-access-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|Details of documents being created.|
|» Get access token using authorization code|body|[AccessToken](#schemaaccesstoken)|false|none|
|» Get access token using device code and OTP|body|[DeviceAccessToken](#schemadeviceaccesstoken)|false|none|
|» Get access token using refresh token|body|[RefreshToken](#schemarefreshtoken)|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "bc125c212a4b03a9a188a858be5a163f379e878a",
  "digilocker_id": "123e4567-e89b-12d3-a456-426655440000",
  "dob": "31121970",
  "eaadhar": "Y",
  "expires_in": 3600,
  "gender": "M",
  "name": "Sunil Kumar",
  "reference_key": "1c66bec26364cd6fefaabc6cae91840a",
  "refresh_token": "a47ab18c593703e4f83a274694db7422a8cfcb8f",
  "scope": "string",
  "token_type": "Bearer"
}
```

<h3 id="get-access-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AccessResponse](#schemaaccessresponse)|
|400|Bad Request|Bad request|None|
|401|Unauthorized|If the access token is expired or has been revoked by DigiLocker user.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="authorized-partner-api-specification-authorization-api">Authorization API</h1>

Authorization APIs For Limited Input Devices.

## Get Device Code

<a id="opIdGet Device Code id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/code \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "client_id": "string",
    "dl_mobile": 0,
    "dl_username": "string",
    "response_type": "device_code"
  }'
```

`POST /oauth2/1/code`

The client device calls the DigiLocker API to get the device code by providing the client_id issued to the device OEM and either the username or the mobile number of the user. DigiLocker responds with a device code and then sends an OTP on the mobile number and email address associated with the user’s account. The masked mobile number and email address is also sent in response. The device should use these values to notify the users about the mobile and email address on which the OTP has been sent.

> Body parameter

```json
{
  "client_id": "string",
  "dl_mobile": 0,
  "dl_username": "string",
  "response_type": "device_code"
}
```

<h3 id="get-device-code-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DeviceAuthorizationCode](#schemadeviceauthorizationcode)|false|none|
|» client_id|body|string|false|none|
|» dl_mobile|body|integer|false|Mobile number associated with DigiLocker account of the<br>  user. The client device accepts the mobile number on the device from user and sends it in this parameter. Either the username or the mobile number must be provided.|
|» dl_username|body|string|false|DigiLocker username of the user. The client device accepts the username on the device from user and sends the username in this parameter. Either the username or the mobile number must be provided.   |
|» response_type|body|string|false|The parameter must be set to device_code.|

> Example responses

> 200 Response

```json
{
  "device_code": "74tq5miHKB",
  "dl_masked_email": "xxxxxx@gmail.com",
  "dl_masked_mobile": "XXXXXX1234",
  "expires_in": 600
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 401 Response

```json
{
  "error": "invalid_client_id",
  "error_description": "The client_id parameter is invalid"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="get-device-code-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DeviceAuthorizationCodeResponse](#schemadeviceauthorizationcoderesponse)|
|400|Bad Request|Bad Request|Inline|
|401|Unauthorized|The client_id parameter is invalid.|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="get-device-code-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ResponseOne](#schemaresponseone)|false|none|none|
|*oneOf*|[ResponseTwo](#schemaresponsetwo)|false|none|none|
|*oneOf*|[ResponseThree](#schemaresponsethree)|false|none|none|
|*oneOf*|[ResponseFour](#schemaresponsefour)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ResponseFive](#schemaresponsefive)|false|none|none|
|*oneOf*|[ResponseSix](#schemaresponsesix)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

<h1 id="authorized-partner-api-specification-token-revocation-api">Token Revocation API</h1>

To revoke a previously obtained Token.

## Revoke Token.

<a id="opIdget token revocation id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/revoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "token": "string",
    "token_type_hint": "refresh_token"
  }'
```

`POST /oauth2/1/revoke`

Client applications can revoke a previously obtained refresh or access token when it is no longer needed. This is done by making a request to the token revocation endpoint. DigiLocker will invalidate the specified token and, if applicable, other tokens based on the same authorisation grant. This API may be used to sign out a user from DigiLocker. This API will work for server based web applications, mobile application and limited input devices.

> Body parameter

```json
{
  "token": "string",
  "token_type_hint": "refresh_token"
}
```

<h3 id="revoke-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» token|body|string|true|The token that needs to be revoked.|
|» token_type_hint|body|string|false|The type of the above token. The value will be one of access_token or refresh_token. If this parameter is not sent, DigiLocker will look for this token in both access and refresh tokens and then revoke it.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» token_type_hint|refresh_token|
|» token_type_hint|access_token|

<h3 id="revoke-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|None|
|400|Bad Request|The token is invalid|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

<h1 id="authorized-partner-api-specification-account-detail-api">Account Detail API</h1>

Get User Details

## Get User Details

<a id="opIdAccount Detail API id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/user \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/1/user`

Client applications can call this API to get the DigiLocker Id, name, date of birth and gender of the account holder. An access token is required to call this API. The API will return the user details of the account with which the access token is linked. It is strongly recommended that the API can be called by client application only once after acquiring the access token. Since the user details do not change, the client application may store the values and use them when necessary than calling this API repeatedly.

> Example responses

> 200 Response

```json
{
  "details": {
    "digilockerid": "123e4567-e89b-12d3-a456-426655440000",
    "dob": "31121970",
    "eaadhar": "Y",
    "gender": "M",
    "name": "Sunil Kumar"
  }
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 500 Response

```json
{
  "error": "unexpected_error",
  "error_description": "Internal server error"
}
```

<h3 id="get-user-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal server error|Inline|

<h3 id="get-user-details-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|
|» digilockerid|string|true|none|A unique 36 character DigiLocker Id of the user account.|
|» dob|string(dd-mm-yyy)|true|none|This is date of birth of the user as registered with DigiLocker in DDMMYYYY format.|
|» eaadhar|string|false|none|This indicates whether eAadhaar data is available for this account. Possible values are Y and N.|
|» gender|string|true|none|This is gender of the user as registered with DigiLocker. The possible values are M, F, T for male, female and transgender respectively.|
|» name|string|true|none|The name of the user as registered with DigiLocker.|

#### Enumerated Values

|Property|Value|
|---|---|
|» eaadhar|Y|
|» eaadhar|N|
|» gender|M|
|» gender|F|
|» gender|T|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="authorized-partner-api-specification-file-apis">File APIs</h1>

File APIs allow your application to get the meta-data about issued and uploaded documents in user’s DigiLocker.

## Upload file to locker

<a id="opIdUpload File to Locker id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/file/upload \
  -X POST \
  -H 'Content-Type: application/octet-stream' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{"Content-Type":"string"}'
```

`POST /oauth2/1/file/upload`

This API can be used to save/upload a file to uploaded documents in DigiLocker. The allowed file types are JPG, JPEG, PNG and PDF. The file size must not exceed 10MB.

> Body parameter

```json
{
  "Content-Type": "string"
}
```

<h3 id="upload-file-to-locker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|path|header|string|false|The destination path of the file in DigiLocker including filename.|
|hmac|header|string|false|This is used to verify the integrity of the file data. The client app calculates the hash message authentication code (HMAC) of the file content using SHA256 hashing algorithm and the client secret as the hashing key. The resulting HMAC is converted to Base64 format and sent in this parameter. Upon upload of file, DigiLocker calculates the HMAC of the file data and compares it with this HMAC..|
|body|body|[FileUpload](#schemafileupload)|false|none|
|» Content-Type|body|string|false|The mime type of the file e.g. image/jpg, image/jpeg, image/png, application/pdf.|

> Example responses

> 200 Response

```json
{
  "details": {
    "Path": "string",
    "size": "string"
  }
}
```

> 400 Response

```json
{
  "error": "path_missing",
  "error_description": "Path parameter is missing"
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="upload-file-to-locker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[FileUploadResponse](#schemafileuploadresponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="upload-file-to-locker-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|path_missing|
|error|contenttype_missing|
|error|hmac_missing|
|error|filename_missing|
|error|hmac_mismatch|
|error|invalid_filename|
|error|invalid_filesize|
|error|invalid_filetype|
|error|invalid_path|
|error|file_data_missing|
|error|mimetype_mismatch|
|error_description|Path parameter is missing|
|error_description|Content-Type parameter is missing|
|error_description|HMAC parameter is missing|
|error_description|Filename is missing in path parameter|
|error_description|HMAC does not match|
|error_description|Restricted characters are not allowed in file name|
|error_description|The file size exceeds maximum allowed file size of 10MB|
|error_description|The file type is not allowed|
|error_description|The destination folder does not exist|
|error_description|Missing file content in the request|
|error_description|The mimetype provided in Content-Type parameter does not match with the mimetype of the file|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|unexpected_error|
|error_description|string|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get File from URI

<a id="opIdGet File from URI id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/file/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/1/file/{uri}`

Returns a file from URI. This API can be used to fetch both issued document and uploaded document.

<h3 id="get-file-from-uri-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uri|path|string|true|This is the unique identifier of the document.|

> Example responses

> 400 Response

```json
{
  "error": "uri_missing",
  "error_description": "URI parameter missing"
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 404 Response

```json
{
  "error": "invalid_uri",
  "error_description": "No file found for given URI"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 503 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="get-file-from-uri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal Error|Inline|
|503|Service Unavailable|Gateway timeout|Inline|

<h3 id="get-file-from-uri-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response3](#schemaresponse3)|false|none|none|
|*oneOf*|[Response4](#schemaresponse4)|false|none|none|
|*oneOf*|[Response5](#schemaresponse5)|false|none|none|
|*oneOf*|[Response6](#schemaresponse6)|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response1](#schemaresponse1)|false|none|none|
|*oneOf*|[Response2](#schemaresponse2)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get List of Self Uploaded Documents

<a id="opIdGet List of Self Uploaded Documents"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/files/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/1/files/`

Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.

> Example responses

> 200 Response

```json
{
  "directory": "string",
  "items": [
    {
      "date": "string",
      "description": "string",
      "id": 189079894,
      "issuer": "string",
      "mime": "string",
      "name": "string",
      "parent": "string",
      "size": "string",
      "type": "string",
      "uri": "string"
    }
  ]
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 404 Response

```json
{
  "error": "invalid_id",
  "error_description": "The folder does not exist"
}
```

> 500 Response

```json
{
  "error": "unexpected_error",
  "error_description": "Internal server error"
}
```

<h3 id="get-list-of-self-uploaded-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="get-list-of-self-uploaded-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|directory|string|true|none|none|
|items|[object]|true|none|none|
|» date|string|true|none|none|
|» description|string|true|none|none|
|» id|string|true|none|none|
|» issuer|string|true|none|none|
|» mime|string|true|none|none|
|» name|string|true|none|none|
|» parent|string|true|none|none|
|» size|string|true|none|none|
|» type|string|true|none|none|
|» uri|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Issued Documents

<a id="opIdGet List of issued Documents Version1 id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/files/issued \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/1/files/issued`

Returns the list of meta-data about issued documents in user’s DigiLocker.

> Example responses

> 200 Response

```json
{
  "details": {
    "date": "2015-05-12T15:50:38Z",
    "description": "Class XII Marksheet",
    "doctype": "HSCER",
    "issuer": "CBSE",
    "issuerid": "in.gov.cbse",
    "mime": "application/pdf",
    "name": "Class XII Marksheet",
    "parent": " ",
    "size": " ",
    "type": "file",
    "uri": "in.gov.cbse-HSCER-201412345678"
  }
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="issued-documents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="issued-documents-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|
|» date|string|true|none|This contains the date on which the certificate was last modified in DigiLocker.|
|» description|string|true|none|This is the descriptive document type stored in DigiLocker such as ‘Income Certificate’ or ‘Driving License’.|
|» doctype|string|true|none|A 5 character unique document type provided by DigiLocker.|
|» issuer|string|true|none|The name of the issuer.|
|» issuerid|string|true|none|Unique DigiLocker issuer id as mentioned in the URI.|
|» mime|string|true|none|The list of mime types for the certificate data. This field will contain “application/PDF” or “application/xml”.|
|» name|string|true|none|The name of the certificate.|
|» parent|string|true|none|This will be blank.|
|» size|string|true|none|This will be blank.|
|» type|string|true|none|String file.|
|» uri|string|true|none|This is the unique identifier of the document shared by the user in DigiLocker. You will use this identifier to get the actual file from DigiLocker using the API.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ResponseSix](#schemaresponsesix)|false|none|none|
|*oneOf*|[ResponseSeven](#schemaresponseseven)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get List of Self Uploaded Documents

<a id="opIdGet List of Self Uploaded Documents id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/files/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/1/files/{id}`

Returns the list of meta-data about documents or folders in user’s DigiLocker in a specific location.

<h3 id="get-list-of-self-uploaded-documents-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the folder to list. To list the files of root folder of a user’s locker, do not send this parameter. This is sent as a part of the URL.|

> Example responses

> 200 Response

```json
{
  "details": {
    "date": "2015-05-12T15:50:38Z",
    "description": "",
    "id": "5678",
    "issuer": "",
    "mime": "",
    "name": "My Documents",
    "parent": "1234",
    "size": "366481",
    "type": "dir",
    "uri": ""
  }
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 404 Response

```json
{
  "error": "invalid_id",
  "error_description": "The folder does not exist"
}
```

> 500 Response

```json
{
  "error": "unexpected_error",
  "error_description": "Internal server error"
}
```

<h3 id="get-list-of-self-uploaded-documents-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="get-list-of-self-uploaded-documents-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|
|» date|string|true|none|This contains the date of file upload in case of self uploaded documents|
|» description|string|true|none|This is the descriptive document type stored in DigiLocker such as ‘Income Certificate’ or ‘Driving License’.|
|» id|integer|true|none|The id if this item is a folder.|
|» issuer|string|true|none|The name of the issuer. This is blank in case of uploaded documents and folders.|
|» mime|string|true|none|The mime type of the file. This field will contain “application/PDF” for PDF files; “image/png” for PNG files and “image/jpg” or “image/jpeg” for JPG/JPEG files. This will be blank in case of folder.|
|» name|string|true|none|The name of the file or folder.|
|» parent|string|true|none|The id of the parent folder.|
|» size|string|true|none|Size of file or folder.|
|» type|string|true|none|String dir for folder and string file for file.|
|» uri|string|true|none|This is the unique identifier of the document shared by the user in DigiLocker. You will use this identifier to get the actual file from DigiLocker using the API. URI will be blank in case of folder.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Pull Document

<a id="opIdPull Document id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/pull/pulldocument \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'chasis_no=string&consent=string&doctype=string&orgid=string&reg_no=string'
```

`POST /oauth2/1/pull/pulldocument`

This API allows a client application to search a document/certificate from issuer’s repository using the parameters provided by a user. The searched document is saved in user’s issued document section of DigiLocker if the search is successful.

> Body parameter

```yaml
chasis_no: string
consent: string
doctype: string
orgid: string
reg_no: string
```

<h3 id="pull-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PullDocumentSchema](#schemapulldocumentschema)|false|none|
|» chasis_no|body|string|false|Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API.|
|» consent|body|string|false|The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’.|
|» doctype|body|string|false|A 5 character unique document type provided by DigiLocker.|
|» orgid|body|string|false|The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned above.|
|» reg_no|body|string|false|Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API.|

> Example responses

> 200 Response

```json
{
  "details": {
    "uri": "string"
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 404 Response

```json
{
  "error": null,
  "error_description": null
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="pull-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="pull-document-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|
|» uri|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response13](#schemaresponse13)|false|none|none|
|*oneOf*|[ResponseSix](#schemaresponsesix)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|record_not_found|
|error_description|object|false|none|No record found in issuer database for given criteria. Please check the details and try again. If problem persists, see the FAQ section for possible causes.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response14](#schemaresponse14)|false|none|none|
|*oneOf*|[Response15](#schemaresponse15)|false|none|none|
|*oneOf*|[Response16](#schemaresponse16)|false|none|none|
|*oneOf*|[Response17](#schemaresponse17)|false|none|none|
|*oneOf*|[Response18](#schemaresponse18)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Get Certificate Data in XML Format from URI

<a id="opIdGet Certificate Data in XML Format from URI id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/xml/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/1/xml/{uri}`

Returns the certificate data in machine readable XML format for a URI. This API can be used to only for issued documents. The XML data may not be available for all documents. If the XML data is available for a particular document, the mime parameter in Get List of Issued Documents API will contain application/xml. Please refer to Digital Locker XML Certificate Formats for more details of XML formats of various documents.

<h3 id="get-certificate-data-in-xml-format-from-uri-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|uri|path|string|true|none|

> Example responses

> 400 Response

```json
{
  "error": "uri_missing",
  "error_description": "URI parameter missing"
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 404 Response

```json
{
  "error": "invalid_uri",
  "error_description": "No file found for given URI"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 503 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="get-certificate-data-in-xml-format-from-uri-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[XMLFormatSchema](#schemaxmlformatschema)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal Error|Inline|
|503|Service Unavailable|Gateway timeout|Inline|

<h3 id="get-certificate-data-in-xml-format-from-uri-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response3](#schemaresponse3)|false|none|none|
|*oneOf*|[Response4](#schemaresponse4)|false|none|none|
|*oneOf*|[Response5](#schemaresponse5)|false|none|none|
|*oneOf*|[Response6](#schemaresponse6)|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response1](#schemaresponse1)|false|none|none|
|*oneOf*|[Response2](#schemaresponse2)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

## Issued Documents

<a id="opIdGet List of issued Documents id"></a>

> Code samples

```bash
curl https://example.com/oauth2/2/files/issued \
  -H 'Accept: application/json'
```

`GET /oauth2/2/files/issued`

Returns the list of meta-data about issued documents in user’s DigiLocker.

> Example responses

> 200 Response

```json
{
  "items": [
    {
      "date": "string",
      "description": "string",
      "doctype": "string",
      "issuer": "string",
      "issuerid": "string",
      "mime": [
        {}
      ],
      "name": "string",
      "parent": "string",
      "size": "string",
      "type": "string",
      "uri": "string"
    }
  ],
  "resource": "string"
}
```

> 401 Response

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="issued-documents-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="issued-documents-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[object]|true|none|none|
|» date|string|true|none|none|
|» description|string|true|none|none|
|» doctype|string|true|none|none|
|» issuer|string|true|none|none|
|» issuerid|string|true|none|none|
|» mime|[object]|false|none|none|
|» name|string|true|none|none|
|» parent|string|true|none|none|
|» size|string|true|none|none|
|» type|string|true|none|none|
|» uri|string|true|none|none|
|resource|string|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[ResponseSix](#schemaresponsesix)|false|none|none|
|*oneOf*|[ResponseSeven](#schemaresponseseven)|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get e-Aadhaar Data in XML Format

<a id="opIdGet e-Aadhaar Data in XML Format id"></a>

> Code samples

```bash
curl https://example.com/oauth2/2/xml/eaadhaar \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /oauth2/2/xml/eaadhaar`

Returns e-Aadhaar data in XML format for the account.

> Example responses

> 401 Response

```json
{
  "error": "invalid token",
  "error_description": "The access token is invalid"
}
```

> 404 Response

```json
{
  "error": "aadhaar_not_linked",
  "error_description": "Aadhaar is not linked to the account"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 503 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="get-e-aadhaar-data-in-xml-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[EaadharXamlSchema](#schemaeaadharxamlschema)|
|401|Unauthorized|Unauthorized error|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal Error|Inline|
|503|Service Unavailable|Gateway timeout|Inline|

<h3 id="get-e-aadhaar-data-in-xml-format-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|error|aadhaar_not_linked|
|error|aadhaar_not_available|
|error_description|Aadhaar is not linked to the account|
|error_description|Aadhaar data is not available for this user. Please perform Aadhaar eKYC again.|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response3](#schemaresponse3)|false|none|none|
|*oneOf*|[Response4](#schemaresponse4)|false|none|none|
|*oneOf*|[Response5](#schemaresponse5)|false|none|none|
|*oneOf*|[Response6](#schemaresponse6)|false|none|none|

Status Code **503**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response1](#schemaresponse1)|false|none|none|
|*oneOf*|[Response2](#schemaresponse2)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearerAuth
</aside>

<h1 id="authorized-partner-api-specification-digilocker-sign-up-apis">DigiLocker Sign up APIs</h1>

This API can be used to sign up a user for DigiLocker.

## Verify OTP

<a id="opIdVerify OTP id"></a>

> Code samples

```bash
curl https://example.com/signup/1/demoauthverify \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'clientid=string' \
  -F 'hmac=@/path/to/file' \
  -F 'mobile=0' \
  -F 'otp=0' \
  -F 'ts=string'
```

`POST /signup/1/demoauthverify`

This API is used to verify the OTP sent by DigiLocker during the sign up API call above.

> Body parameter

```yaml
clientid: string
hmac: string
mobile: 0
otp: 0
ts: string
```

<h3 id="verify-otp-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DemoAuthVerify](#schemademoauthverify)|false|none|
|» clientid|body|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|» hmac|body|string(binary)|false|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|» mobile|body|integer|false|This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.|
|» otp|body|integer|false|The OTP provided by the user.|
|» ts|body|string|false|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

> Example responses

> 200 Response

```json
{
  "details": {
    "access_token": "bc125c212a4b03a9a188a858be5a163f379e878a",
    "expires_in": 3600,
    "refresh_token": "a47ab18c593703e4f83a274694db7422a8cfcb8f",
    "scope": "",
    "token_type": "Bearer"
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 401 Response

```json
{
  "error": "invalid_client_id",
  "error_description": "The client_id parameter is invalid"
}
```

> 500 Response

```json
{
  "error": null,
  "error_description": null
}
```

<h3 id="verify-otp-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DemoAuthVerifyResponse](#schemademoauthverifyresponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="verify-otp-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response7](#schemaresponse7)|false|none|none|
|*oneOf*|[Response8](#schemaresponse8)|false|none|none|
|*oneOf*|[Response9](#schemaresponse9)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|unexpected_error|
|error_description|object|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

## SIGN UP

<a id="opIdSIGN UP id"></a>

> Code samples

```bash
curl https://example.com/signup/2/demoauth \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'clientid=string' \
  -F 'consent=string' \
  -F 'demoauth=string' \
  -F 'dob=0' \
  -F 'gender=M' \
  -F 'hmac=@/path/to/file' \
  -F 'mobile=0' \
  -F 'name=string' \
  -F 'ts=string' \
  -F 'uid=0' \
  -F 'verification=string'
```

`POST /signup/2/demoauth`

This API is used to validate Aadhaar details and verify the mobile number by generating an OTP. This API call, if successful, will be followed by verify OTP call by the partner application if the user is online or available to perform OTP validation as indicated in verification parameter

> Body parameter

```yaml
clientid: string
consent: string
demoauth: string
dob: 0
gender: M
hmac: string
mobile: 0
name: string
ts: string
uid: 0
verification: string
```

<h3 id="sign-up-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DemoAuth](#schemademoauth)|false|none|
|» clientid|body|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|» consent|body|string|false|The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’.|
|» demoauth|body|string|false|The parameter indicates whether Aadhaar demographic authentication must be successful for creating DigiLocker account. The possible values are ‘Y’ and ‘N’. The value of ‘Y’ will perform Aadhaar demographic authentication and will return errors if any in response. The value of ‘N’ will also perform Aadhaar demographic authentication but will return any error in case of authentication failure. It will create a basic mobile based account for the user. Value ‘N’ should be used when the user account needs to be created in the absence of the user.|
|» dob|body|integer|false|This is date of birth of the user as mentioned in Aadhaar in DDMMYYYY format.|
|» gender|body|string|false|This is gender of the user as mentioned in Aadhaar. The possible values are M, F, T for male, female and transgender respectively.|
|» hmac|body|string(binary)|false|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|» mobile|body|integer|false|This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.|
|» name|body|string|false|This is name of the user as mentioned in Aadhaar.|
|» ts|body|string|false|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|
|» uid|body|integer|false|This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.|
|» verification|body|string|false|The parameter indicates whether the mobile number provided above should be validated by DigiLocker. If this parameter is ‘Y’, the DigiLocker sends an OTP to verify the mobile number. In this case the client application will call the second API to validate the OTP. The user will be signed on only after successful OTP validation. This flow should be used when the user account is created by user himself/herself or the user is present to provide the OTP. If this parameter is ‘N’, the user account will be created without OTP validation. The OTP validation will be performed when the user signs in for the first time in DigiLocker. This flow should be used when the user account needs to be created in the absence of the user.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» gender|M|
|» gender|F|
|» gender|T|

> Example responses

> 200 Response

```json
{
  "details": {
    "access_token": "bc125c212a4b03a9a188a858be5a163f379e878a",
    "expires_in": 3600,
    "mobile": "******3712",
    "refresh_token": "a47ab18c593703e4f83a274694db7422a8cfcb8f",
    "scope": "",
    "token_type": "Bearer"
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 401 Response

```json
{
  "error": "invalid_client_id",
  "error_description": "The client_id parameter is invalid"
}
```

> 500 Response

```json
{
  "error": null,
  "error_description": null
}
```

<h3 id="sign-up-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DemoAuthResponse](#schemademoauthresponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="sign-up-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Response10](#schemaresponse10)|false|none|none|
|*oneOf*|[Response11](#schemaresponse11)|false|none|none|
|*oneOf*|[Response12](#schemaresponse12)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|unexpected_error|
|error_description|object|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

<h1 id="authorized-partner-api-specification-digilocker-meta-apis">DigiLocker Meta APIs</h1>

DigiLocker Meta APIs provide information about a user account, issuers, document types and parameters required to pull a document.

## Push URI to Account

<a id="opIdPush URI to Account id"></a>

> Code samples

```bash
curl https://example.com/account/1/pushuri \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'action=string' \
  -F 'clientid=string' \
  -F 'digilockerid=0' \
  -F 'docid=string' \
  -F 'hmac=@/path/to/file' \
  -F 'issuedate=string' \
  -F 'ts=string' \
  -F 'uri=string' \
  -F 'validfrom=0' \
  -F 'validto=string'
```

`POST /account/1/pushuri`

The API can use to push or delete a single URI into Digital Locker using DigiLocker Id acquired using Get User Details API. This API can be used to push the certificate details to Digital Locker as and when a certificate is generated in the issuer system. The issuing departments must register on DigiLocker as a registered Issuer and implement the requisite Issuer APIs as mentioned in Digital Locker Issuer API Specification document prior to pushing certificates using this API.

> Body parameter

```yaml
action: string
clientid: string
digilockerid: 0
docid: string
hmac: string
issuedate: string
ts: string
uri: string
validfrom: 0
validto: string
```

<h3 id="push-uri-to-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[PushUri](#schemapushuri)|false|none|
|» action|body|string|false|Action that needs to be taken for the Aadhaar number and URI combination. Possible values are A for adding a new URI, U for updating an already added URI details or D for deleting the URI.|
|» clientid|body|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|» digilockerid|body|integer|false|This is the DigiLocker Id of the user that was acquired using Get User Details API.|
|» docid|body|string|false|A unique number of the document. This id will be unique within the document type issued by the issuer.|
|» hmac|body|string(binary)|false|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|» issuedate|body|string|false|The issue date of the document in DDMMYYYY format.|
|» ts|body|string|false|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|
|» uri|body|string|false|This is the unique identifier of the document.|
|» validfrom|body|integer|false|The date from which the document is valid in DDMMYYYY format. This may be same as the issue date.|
|» validto|body|string|false|The expiry date of the document in DDMMYYYY format.|

> Example responses

> 200 Response

```json
null
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 404 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="push-uri-to-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|Inline|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|404|Not Found|Not found|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="push-uri-to-account-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_parameter|
|error_description|string|false|none|One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:\|-  URI parameter is missing or invalid  Doctype parameter is missing or invalid  Description parameter is missing or invalid  Docid parameter is missing or invalid  Issuedate parameter is missing orinvalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid   URI already exists in this account   URI already exists in another account|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_client_id|
|error_description|string|false|none|The client_id parameter is invalid|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_digilocker_id|
|error_description|string|false|none|The digilockerid parameter is invalid|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|unexpected_error|
|error_description|string|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

## Verify Account

<a id="opIdVerify Account id"></a>

> Code samples

```bash
curl https://example.com/account/2/verify \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'clientid=string' \
  -F 'hmac=@/path/to/file' \
  -F 'mobile=0' \
  -F 'ts=string' \
  -F 'uid=0'
```

`POST /account/2/verify`

This API can be used to verify whether a mobile number or Aadhaar number is already registered with DigiLocker.

> Body parameter

```yaml
clientid: string
hmac: string
mobile: 0
ts: string
uid: 0
```

<h3 id="verify-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[VerifyAccount](#schemaverifyaccount)|false|none|
|» clientid|body|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|» hmac|body|string(binary)|false|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|» mobile|body|integer|false|This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.|
|» ts|body|string|false|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|
|» uid|body|integer|false|This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.|

> Example responses

> 200 Response

```json
{
  "digilockerid": "123e4567-e89b-12d3-a456-426655440000",
  "registered": "true"
}
```

> 400 Response

```json
{
  "error": null,
  "error_description": null
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 500 Response

```json
{
  "error": null,
  "error_description": null
}
```

<h3 id="verify-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[VerifyAccountResponse](#schemaverifyaccountresponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="verify-account-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|invalid_parameter|
|error_description|object|false|none|One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:\|-  Either one of uid or mobile number is mandatory  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_client_id|
|error_description|string|false|none|The client_id parameter is invalid|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|unexpected_error|
|error_description|object|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

## Get List of Documents Provided by an Issuer

<a id="opIdGet List of Documents Provided by an Issuer id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/pull/doctype \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'clientid=string&hmac=string&orgid=string&ts=string'
```

`POST /oauth2/1/pull/doctype`

Returns a list of documents/certificates issued by an issuer organization registered with DigiLocker.

> Body parameter

```yaml
clientid: string
hmac: string
orgid: string
ts: string
```

<h3 id="get-list-of-documents-provided-by-an-issuer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[DocType](#schemadoctype)|false|none|
|» clientid|body|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|» hmac|body|string(binary)|false|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|» orgid|body|string|false|The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier.|
|» ts|body|string|false|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

> Example responses

> 200 Response

```json
{
  "documents": [
    {
      "description": "string",
      "doctype": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "error": null,
  "error_description": null
}
```

> 401 Response

```json
{
  "error": "invalid_client_id",
  "error_description": "The client_id parameter is invalid"
}
```

> 500 Response

```json
{
  "error": null,
  "error_description": null
}
```

<h3 id="get-list-of-documents-provided-by-an-issuer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DocTypeResponse](#schemadoctyperesponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="get-list-of-documents-provided-by-an-issuer-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|invalid_parameter|
|error_description|object|false|none|One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:\|-  The orgid parameter is missing or invalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|unexpected_error|
|error_description|object|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

## Get List of Issuers

<a id="opIdGet List of Issuers id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/pull/issuers \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'clientid=string&hmac=string&ts=string'
```

`POST /oauth2/1/pull/issuers`

Returns the list of issuers registered with DigiLocker.

> Body parameter

```yaml
clientid: string
hmac: string
ts: string
```

<h3 id="get-list-of-issuers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Issuer](#schemaissuer)|false|none|
|» clientid|body|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|» hmac|body|string(binary)|false|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|» ts|body|string|false|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

> Example responses

> 200 Response

```json
{
  "issuers": [
    {
      "categories": "string",
      "description": "string",
      "issuerid": "string",
      "name": "string",
      "orgid": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "error": "invalid_parameter",
  "error_description": "One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:|-  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid"
}
```

> 401 Response

```json
{
  "error": "invalid_client_id",
  "error_description": "The client_id parameter is invalid"
}
```

> 500 Response

```json
{
  "error": null,
  "error_description": null
}
```

<h3 id="get-list-of-issuers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IssuerResponse](#schemaissuerresponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="get-list-of-issuers-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|unexpected_error|
|error_description|object|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

## Get Search Parameters for a Document

<a id="opIdGet Search Parameters for a Document id"></a>

> Code samples

```bash
curl https://example.com/oauth2/1/pull/parameters \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d 'clientid=string&doctype=string&hmac=string&orgid=string&ts=string'
```

`POST /oauth2/1/pull/parameters`

Returns a list of parameters required to search a document/certificate of an issuer organization registered with DigiLocker. These parameters are used to pull a document from issuer’s repository using Pull Document API mentioned in subsequent section.

> Body parameter

```yaml
clientid: string
doctype: string
hmac: string
orgid: string
ts: string
```

<h3 id="get-search-parameters-for-a-document-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[SearchParameters](#schemasearchparameters)|false|none|
|» clientid|body|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|» doctype|body|string|false|A 5 character unique document type provided by DigiLocker.|
|» hmac|body|string(binary)|false|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|» orgid|body|string|false|The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier.|
|» ts|body|string|false|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

> Example responses

> 200 Response

```json
[
  {
    "example": "string",
    "label": "string",
    "paramname": "string",
    "valuelist": null
  }
]
```

> 400 Response

```json
{
  "error": null,
  "error_description": null
}
```

> 401 Response

```json
{
  "error": "invalid_client_id",
  "error_description": "The client_id parameter is invalid"
}
```

> 500 Response

```json
{
  "error": null,
  "error_description": null
}
```

<h3 id="get-search-parameters-for-a-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[SearchParametersResponse](#schemasearchparametersresponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="get-search-parameters-for-a-document-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|invalid_parameter|
|error_description|object|false|none|One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:\|-  The orgid parameter is missing or invalid  The doctype parameter is missing or invalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|none|
|error_description|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|object|false|none|unexpected_error|
|error_description|object|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

## Get Statistics

<a id="opIdGet Statistics id"></a>

> Code samples

```bash
curl https://example.com/statistics/1/counts \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'clientid=string' \
  -F 'hmac=@/path/to/file' \
  -F 'ts=string'
```

`POST /statistics/1/counts`

Returns DigiLocker statistics such as the count of users, authentic documents, issuers and requesters as on a specific date.

> Body parameter

```yaml
clientid: string
hmac: string
ts: string
```

<h3 id="get-statistics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[GetStatistics](#schemagetstatistics)|false|none|
|» clientid|body|string|false|Provide the client id that was created during the application registration process on Partners Portal.|
|» hmac|body|string(binary)|false|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|» ts|body|string|false|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

> Example responses

> 200 Response

```json
{
  "authentic_documents": "3520475277",
  "count_as_on": "31072019",
  "issuers": "134",
  "monthwise_registations": {
    "count": "124794",
    "details2": {
      "count": "124794",
      "id": "18496",
      "month": "5",
      "year": "2018"
    },
    "id": "18496",
    "month": "5",
    "year": "2018"
  },
  "requestors": "45",
  "users": "25873490",
  "yearwise_authentic_documents": {
    "count": "10134567",
    "details": {
      "count": "1000548093",
      "id": "18350",
      "year": "2017"
    },
    "details1": {
      "count": "2410543684",
      "id": "18354",
      "year": "2018"
    },
    "details2": {
      "count": "3520475277",
      "id": "18567",
      "year": "2019"
    },
    "id": "18347",
    "year": "2016"
  }
}
```

> 400 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 401 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

> 500 Response

```json
{
  "error": "string",
  "error_description": "string"
}
```

<h3 id="get-statistics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[GetStatisticsResponse](#schemagetstatisticsresponse)|
|400|Bad Request|Bad request|Inline|
|401|Unauthorized|Unauthorized error|Inline|
|500|Internal Server Error|Internal Error|Inline|

<h3 id="get-statistics-responseschema">Response Schema</h3>

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_parameter|
|error_description|string|false|none|One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:\|-  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_client_id|
|error_description|string|false|none|The client_id parameter is invalid|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|unexpected_error|
|error_description|string|false|none|Internal server error|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauthsecurity
</aside>

# Schemas

<h2 id="tocS_AccessResponse">AccessResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaccessresponse"></a>
<a id="schema_AccessResponse"></a>
<a id="tocSaccessresponse"></a>
<a id="tocsaccessresponse"></a>

```json
{
  "access_token": "bc125c212a4b03a9a188a858be5a163f379e878a",
  "digilocker_id": "123e4567-e89b-12d3-a456-426655440000",
  "dob": "31121970",
  "eaadhar": "Y",
  "expires_in": 3600,
  "gender": "M",
  "name": "Sunil Kumar",
  "reference_key": "1c66bec26364cd6fefaabc6cae91840a",
  "refresh_token": "a47ab18c593703e4f83a274694db7422a8cfcb8f",
  "scope": "string",
  "token_type": "Bearer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The access token that can be used to call the DigiLocker APIs.|
|digilocker_id|string|true|none|A unique 36 character DigiLocker Id of the user account.|
|dob|integer(dd-mm-yyy)|true|none|This is date of birth of the user as registered with DigiLocker in DDMMYYYY format.|
|eaadhar|string|true|none|This indicates whether eAadhaar data is available for this account. Possible values are Y and N.|
|expires_in|integer(int64)|true|none|The duration in seconds for which the access token is valid|
|gender|string|true|none|This is gender of the user as registered with DigiLocker. The possible values are M, F, T for male, female and transgender respectively.|
|name|string|true|none|The name of the user as registered with DigiLocker.|
|reference_key|string|true|none|A unique reference of the user account.|
|refresh_token|string|true|none|The refresh token used to refresh the above access token when it expires. Please refer to Refresh Access Token API for more details.|
|scope|string|true|none|Scope of the token.|
|token_type|string|true|none|The type of token which will always be Bearer.|

#### Enumerated Values

|Property|Value|
|---|---|
|eaadhar|Y|
|eaadhar|N|
|gender|M|
|gender|F|
|gender|T|

<h2 id="tocS_AccessToken">AccessToken</h2>
<!-- backwards compatibility -->
<a id="schemaaccesstoken"></a>
<a id="schema_AccessToken"></a>
<a id="tocSaccesstoken"></a>
<a id="tocsaccesstoken"></a>

```json
{
  "client_id": "ABCDEFG",
  "client_secret": "a123456abcdeghijk7890",
  "code": "ca82123a5476aa2f5e4638957c0ecc55c6ec07c1",
  "code_verifier": "a123456abca",
  "grant_type": "authorization_code",
  "redirect_uri": "https://ndh.digitallocker.gov.in/oauth2-redirect.html"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|code|string|false|none|none|
|code_verifier|string|false|none|none|
|grant_type|string|true|none|none|
|redirect_uri|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|authorization_code|

<h2 id="tocS_AuthTokenResponse">AuthTokenResponse</h2>
<!-- backwards compatibility -->
<a id="schemaauthtokenresponse"></a>
<a id="schema_AuthTokenResponse"></a>
<a id="tocSauthtokenresponse"></a>
<a id="tocsauthtokenresponse"></a>

```json
{
  "access_token": "bc125c212a4b03a9a188a858be5a163f379e878a",
  "expires_in": 3600,
  "refresh_token": "ad6f4004cc3e53f56bda391fe485fc4d32928061",
  "scope": "string",
  "token_type": "Bearer"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|The access token that can be used to call the<br>    DigiLocker APIs.|
|expires_in|integer(int64)|true|none|The duration in seconds for which the access token is<br>            valid.|
|refresh_token|string|true|none|The refresh token used to refresh the above access<br>  token when it expires. This will value will be<br>  returned only in case of web applications and not be<br>  returned for limited input devices.|
|scope|string|true|none|Scope of the token.|
|token_type|string|true|none|The type of token which will always be Bearer.|

<h2 id="tocS_DemoAuth">DemoAuth</h2>
<!-- backwards compatibility -->
<a id="schemademoauth"></a>
<a id="schema_DemoAuth"></a>
<a id="tocSdemoauth"></a>
<a id="tocsdemoauth"></a>

```json
{
  "clientid": "string",
  "consent": "string",
  "demoauth": "string",
  "dob": 0,
  "gender": "M",
  "hmac": "string",
  "mobile": 0,
  "name": "string",
  "ts": "string",
  "uid": 0,
  "verification": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientid|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|consent|string|false|none|The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’.|
|demoauth|string|false|none|The parameter indicates whether Aadhaar demographic authentication must be successful for creating DigiLocker account. The possible values are ‘Y’ and ‘N’. The value of ‘Y’ will perform Aadhaar demographic authentication and will return errors if any in response. The value of ‘N’ will also perform Aadhaar demographic authentication but will return any error in case of authentication failure. It will create a basic mobile based account for the user. Value ‘N’ should be used when the user account needs to be created in the absence of the user.|
|dob|integer|false|none|This is date of birth of the user as mentioned in Aadhaar in DDMMYYYY format.|
|gender|string|false|none|This is gender of the user as mentioned in Aadhaar. The possible values are M, F, T for male, female and transgender respectively.|
|hmac|string(binary)|false|none|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|mobile|integer|false|none|This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.|
|name|string|false|none|This is name of the user as mentioned in Aadhaar.|
|ts|string|false|none|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|
|uid|integer|false|none|This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.|
|verification|string|false|none|The parameter indicates whether the mobile number provided above should be validated by DigiLocker. If this parameter is ‘Y’, the DigiLocker sends an OTP to verify the mobile number. In this case the client application will call the second API to validate the OTP. The user will be signed on only after successful OTP validation. This flow should be used when the user account is created by user himself/herself or the user is present to provide the OTP. If this parameter is ‘N’, the user account will be created without OTP validation. The OTP validation will be performed when the user signs in for the first time in DigiLocker. This flow should be used when the user account needs to be created in the absence of the user.|

#### Enumerated Values

|Property|Value|
|---|---|
|gender|M|
|gender|F|
|gender|T|

<h2 id="tocS_DemoAuthResponse">DemoAuthResponse</h2>
<!-- backwards compatibility -->
<a id="schemademoauthresponse"></a>
<a id="schema_DemoAuthResponse"></a>
<a id="tocSdemoauthresponse"></a>
<a id="tocsdemoauthresponse"></a>

```json
{
  "details": {
    "access_token": "bc125c212a4b03a9a188a858be5a163f379e878a",
    "expires_in": 3600,
    "mobile": "******3712",
    "refresh_token": "a47ab18c593703e4f83a274694db7422a8cfcb8f",
    "scope": "",
    "token_type": "Bearer"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|

<h2 id="tocS_DemoAuthVerify">DemoAuthVerify</h2>
<!-- backwards compatibility -->
<a id="schemademoauthverify"></a>
<a id="schema_DemoAuthVerify"></a>
<a id="tocSdemoauthverify"></a>
<a id="tocsdemoauthverify"></a>

```json
{
  "clientid": "string",
  "hmac": "string",
  "mobile": 0,
  "otp": 0,
  "ts": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientid|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|hmac|string(binary)|false|none|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|mobile|integer|false|none|This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.|
|otp|integer|false|none|The OTP provided by the user.|
|ts|string|false|none|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

<h2 id="tocS_DemoAuthVerifyResponse">DemoAuthVerifyResponse</h2>
<!-- backwards compatibility -->
<a id="schemademoauthverifyresponse"></a>
<a id="schema_DemoAuthVerifyResponse"></a>
<a id="tocSdemoauthverifyresponse"></a>
<a id="tocsdemoauthverifyresponse"></a>

```json
{
  "details": {
    "access_token": "bc125c212a4b03a9a188a858be5a163f379e878a",
    "expires_in": 3600,
    "refresh_token": "a47ab18c593703e4f83a274694db7422a8cfcb8f",
    "scope": "",
    "token_type": "Bearer"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|

<h2 id="tocS_DeviceAccessToken">DeviceAccessToken</h2>
<!-- backwards compatibility -->
<a id="schemadeviceaccesstoken"></a>
<a id="schema_DeviceAccessToken"></a>
<a id="tocSdeviceaccesstoken"></a>
<a id="tocsdeviceaccesstoken"></a>

```json
{
  "client_id": "string",
  "device_code": "string",
  "dl_otp": "string",
  "grant_type": "urn:ietf:params:oauth:grant-type:device_code"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|device_code|string|false|none|The device verification code. The device_code field from Get Device Code Response.|
|dl_otp|string|false|none|The OTP collected from the user|
|grant_type|string|false|none|The grant type, which must be “urn:ietf:params:oauth:grant-type:device_code”.|

<h2 id="tocS_DeviceAuthorizationCode">DeviceAuthorizationCode</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthorizationcode"></a>
<a id="schema_DeviceAuthorizationCode"></a>
<a id="tocSdeviceauthorizationcode"></a>
<a id="tocsdeviceauthorizationcode"></a>

```json
{
  "client_id": "string",
  "dl_mobile": 0,
  "dl_username": "string",
  "response_type": "device_code"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|none|
|dl_mobile|integer|false|none|Mobile number associated with DigiLocker account of the<br>  user. The client device accepts the mobile number on the device from user and sends it in this parameter. Either the username or the mobile number must be provided.|
|dl_username|string|false|none|DigiLocker username of the user. The client device accepts the username on the device from user and sends the username in this parameter. Either the username or the mobile number must be provided.   |
|response_type|string|false|none|The parameter must be set to device_code.|

<h2 id="tocS_DeviceAuthorizationCodeResponse">DeviceAuthorizationCodeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeviceauthorizationcoderesponse"></a>
<a id="schema_DeviceAuthorizationCodeResponse"></a>
<a id="tocSdeviceauthorizationcoderesponse"></a>
<a id="tocsdeviceauthorizationcoderesponse"></a>

```json
{
  "device_code": "74tq5miHKB",
  "dl_masked_email": "xxxxxx@gmail.com",
  "dl_masked_mobile": "XXXXXX1234",
  "expires_in": 600
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|device_code|string|true|none|The device verification code.|
|dl_masked_email|string|true|none|The masked email on which the OTP is sent.|
|dl_masked_mobile|integer|true|none|The masked mobile number on which the OTP is sent.|
|expires_in|integer|true|none|The duration in seconds for which the code is valid.|

<h2 id="tocS_DocType">DocType</h2>
<!-- backwards compatibility -->
<a id="schemadoctype"></a>
<a id="schema_DocType"></a>
<a id="tocSdoctype"></a>
<a id="tocsdoctype"></a>

```json
{
  "clientid": "string",
  "hmac": "string",
  "orgid": "string",
  "ts": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientid|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|hmac|string(binary)|false|none|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|orgid|string|false|none|The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier.|
|ts|string|false|none|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

<h2 id="tocS_DocTypeResponse">DocTypeResponse</h2>
<!-- backwards compatibility -->
<a id="schemadoctyperesponse"></a>
<a id="schema_DocTypeResponse"></a>
<a id="tocSdoctyperesponse"></a>
<a id="tocsdoctyperesponse"></a>

```json
{
  "documents": [
    {
      "description": "string",
      "doctype": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|documents|[object]|true|none|none|

<h2 id="tocS_EaadharXamlSchema">EaadharXamlSchema</h2>
<!-- backwards compatibility -->
<a id="schemaeaadharxamlschema"></a>
<a id="schema_EaadharXamlSchema"></a>
<a id="tocSeaadharxamlschema"></a>
<a id="tocseaadharxamlschema"></a>

```json
{
  "KycRes": {
    "Rar": "string",
    "Signature": {
      "KeyInfo": {
        "X509Data": {
          "X509Certificate": "string",
          "X509SubjectName": "string"
        }
      },
      "SignatureValue": "string",
      "SignedInfo": {
        "CanonicalizationMethod": {
          "Algorithm": "string"
        },
        "Reference": {
          "DigestMethod": {
            "Algorithm": "string"
          },
          "DigestValue": "string",
          "Transforms": {
            "Transform": {
              "Algorithm": "string"
            }
          },
          "URI": "string"
        },
        "SignatureMethod": {
          "Algorithm": "string"
        }
      },
      "xmlns": "string"
    },
    "UidData": {
      "LData": {
        "co": "string",
        "country": "string",
        "dist": "string",
        "lang": "string",
        "lm": "string",
        "loc": "string",
        "name": "string",
        "pc": "string",
        "state": "string",
        "vtc": "string"
      },
      "Pht": "string",
      "Poa": {
        "co": "string",
        "country": "string",
        "dist": "string",
        "lm": "string",
        "loc": "string",
        "pc": "string",
        "state": "string",
        "vtc": "string"
      },
      "Poi": {
        "dob": "string",
        "gender": "string",
        "name": "string"
      },
      "Prn": {
        "text": "string",
        "type": "string"
      },
      "tkn": "string",
      "uid": "string"
    },
    "code": "string",
    "ret": "string",
    "ts": "string",
    "ttl": "string",
    "txn": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|KycRes|object|true|none|none|

<h2 id="tocS_FileUpload">FileUpload</h2>
<!-- backwards compatibility -->
<a id="schemafileupload"></a>
<a id="schema_FileUpload"></a>
<a id="tocSfileupload"></a>
<a id="tocsfileupload"></a>

```json
{
  "Content-Type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Content-Type|string|false|none|The mime type of the file e.g. image/jpg, image/jpeg, image/png, application/pdf.|

<h2 id="tocS_FileUploadResponse">FileUploadResponse</h2>
<!-- backwards compatibility -->
<a id="schemafileuploadresponse"></a>
<a id="schema_FileUploadResponse"></a>
<a id="tocSfileuploadresponse"></a>
<a id="tocsfileuploadresponse"></a>

```json
{
  "details": {
    "Path": "string",
    "size": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|details|object|false|none|none|

<h2 id="tocS_GetStatistics">GetStatistics</h2>
<!-- backwards compatibility -->
<a id="schemagetstatistics"></a>
<a id="schema_GetStatistics"></a>
<a id="tocSgetstatistics"></a>
<a id="tocsgetstatistics"></a>

```json
{
  "clientid": "string",
  "hmac": "string",
  "ts": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientid|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|hmac|string(binary)|false|none|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|ts|string|false|none|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

<h2 id="tocS_GetStatisticsResponse">GetStatisticsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetstatisticsresponse"></a>
<a id="schema_GetStatisticsResponse"></a>
<a id="tocSgetstatisticsresponse"></a>
<a id="tocsgetstatisticsresponse"></a>

```json
{
  "authentic_documents": "3520475277",
  "count_as_on": "31072019",
  "issuers": "134",
  "monthwise_registations": {
    "count": "124794",
    "details2": {
      "count": "124794",
      "id": "18496",
      "month": "5",
      "year": "2018"
    },
    "id": "18496",
    "month": "5",
    "year": "2018"
  },
  "requestors": "45",
  "users": "25873490",
  "yearwise_authentic_documents": {
    "count": "10134567",
    "details": {
      "count": "1000548093",
      "id": "18350",
      "year": "2017"
    },
    "details1": {
      "count": "2410543684",
      "id": "18354",
      "year": "2018"
    },
    "details2": {
      "count": "3520475277",
      "id": "18567",
      "year": "2019"
    },
    "id": "18347",
    "year": "2016"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentic_documents|string|true|none|Count of authentic documents available through DigiLocker.|
|count_as_on|string|true|none|The date on which this statistics is generated.|
|issuers|string|true|none|Count of issuer organizations registered on DigiLocker.|
|monthwise_registations|object|true|none|List of last 12 months cumulative user registrations|
|requestors|string|true|none|Count of requester organizations registered on DigiLocker.|
|users|string|true|none|Count of registered users on DigiLocker.|
|yearwise_authentic_documents|object|true|none|List of cumulative year-wise counts of authentic documents in DigiLocker.|

<h2 id="tocS_Issuer">Issuer</h2>
<!-- backwards compatibility -->
<a id="schemaissuer"></a>
<a id="schema_Issuer"></a>
<a id="tocSissuer"></a>
<a id="tocsissuer"></a>

```json
{
  "clientid": "string",
  "hmac": "string",
  "ts": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientid|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|hmac|string(binary)|false|none|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|ts|string|false|none|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

<h2 id="tocS_IssuerResponse">IssuerResponse</h2>
<!-- backwards compatibility -->
<a id="schemaissuerresponse"></a>
<a id="schema_IssuerResponse"></a>
<a id="tocSissuerresponse"></a>
<a id="tocsissuerresponse"></a>

```json
{
  "issuers": [
    {
      "categories": "string",
      "description": "string",
      "issuerid": "string",
      "name": "string",
      "orgid": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|issuers|[object]|true|none|none|

<h2 id="tocS_PullDocumentSchema">PullDocumentSchema</h2>
<!-- backwards compatibility -->
<a id="schemapulldocumentschema"></a>
<a id="schema_PullDocumentSchema"></a>
<a id="tocSpulldocumentschema"></a>
<a id="tocspulldocumentschema"></a>

```json
{
  "chasis_no": "string",
  "consent": "string",
  "doctype": "string",
  "orgid": "string",
  "reg_no": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chasis_no|string|false|none|Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API.|
|consent|string|false|none|The consent indicator from the user for performing demographic authentication using Aadhaar details. This Partner Application must capture the user consent for performing the Aadhaar demographic authentication. The possible values are ‘Y’ and ‘N’. The sign up request will be processed only when this indicator is ‘Y’.|
|doctype|string|false|none|A 5 character unique document type provided by DigiLocker.|
|orgid|string|false|none|The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned above.|
|reg_no|string|false|none|Other parameters required for fetching a document as listed in paramname field of Get Search Parameters API.|

<h2 id="tocS_PushUri">PushUri</h2>
<!-- backwards compatibility -->
<a id="schemapushuri"></a>
<a id="schema_PushUri"></a>
<a id="tocSpushuri"></a>
<a id="tocspushuri"></a>

```json
{
  "action": "string",
  "clientid": "string",
  "digilockerid": 0,
  "docid": "string",
  "hmac": "string",
  "issuedate": "string",
  "ts": "string",
  "uri": "string",
  "validfrom": 0,
  "validto": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action that needs to be taken for the Aadhaar number and URI combination. Possible values are A for adding a new URI, U for updating an already added URI details or D for deleting the URI.|
|clientid|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|digilockerid|integer|false|none|This is the DigiLocker Id of the user that was acquired using Get User Details API.|
|docid|string|false|none|A unique number of the document. This id will be unique within the document type issued by the issuer.|
|hmac|string(binary)|false|none|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|issuedate|string|false|none|The issue date of the document in DDMMYYYY format.|
|ts|string|false|none|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|
|uri|string|false|none|This is the unique identifier of the document.|
|validfrom|integer|false|none|The date from which the document is valid in DDMMYYYY format. This may be same as the issue date.|
|validto|string|false|none|The expiry date of the document in DDMMYYYY format.|

<h2 id="tocS_RefreshAccessToken">RefreshAccessToken</h2>
<!-- backwards compatibility -->
<a id="schemarefreshaccesstoken"></a>
<a id="schema_RefreshAccessToken"></a>
<a id="tocSrefreshaccesstoken"></a>
<a id="tocsrefreshaccesstoken"></a>

```json
{
  "grant_type": "refresh_token",
  "refresh_Token": "a47ab18c593703e4f83a274694db7422a8cfcb8f"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|grant_type|string|true|none|none|
|refresh_Token|string|true|none|none|

<h2 id="tocS_RefreshToken">RefreshToken</h2>
<!-- backwards compatibility -->
<a id="schemarefreshtoken"></a>
<a id="schema_RefreshToken"></a>
<a id="tocSrefreshtoken"></a>
<a id="tocsrefreshtoken"></a>

```json
{
  "client_id": "ABCDEFG",
  "client_secret": "a123456abcdeghijk7890",
  "grant_type": "refresh_token",
  "refresh_token": "ca82123a5476aa2f5e4638957c0ecc55c6ec07c1"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|true|none|none|
|client_secret|string|true|none|none|
|grant_type|string|true|none|none|
|refresh_token|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|grant_type|refresh_token|

<h2 id="tocS_Response1">Response1</h2>
<!-- backwards compatibility -->
<a id="schemaresponse1"></a>
<a id="schema_Response1"></a>
<a id="tocSresponse1"></a>
<a id="tocsresponse1"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|repository_service_inactive|
|error_description|string|false|none|Internal server error|

<h2 id="tocS_Response10">Response10</h2>
<!-- backwards compatibility -->
<a id="schemaresponse10"></a>
<a id="schema_Response10"></a>
<a id="tocSresponse10"></a>
<a id="tocsresponse10"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|mobile_exists|
|error_description|string|false|none|A DigiLocker account already exists with this mobile number.|

<h2 id="tocS_Response11">Response11</h2>
<!-- backwards compatibility -->
<a id="schemaresponse11"></a>
<a id="schema_Response11"></a>
<a id="tocSresponse11"></a>
<a id="tocsresponse11"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|auth_failure|
|error_description|string|false|none|The data on Aadhaar does not match with one or more of Aadhaar, Name, DOB and Gender data provided. Aadhaar demographic authentication failure.|

<h2 id="tocS_Response12">Response12</h2>
<!-- backwards compatibility -->
<a id="schemaresponse12"></a>
<a id="schema_Response12"></a>
<a id="tocSresponse12"></a>
<a id="tocsresponse12"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_parameter|
|error_description|string|false|none|One or more of the mandatory parameters is missing or invalid. The error description text will contain one or more of the following error texts:\|-  uid parameter is missing or invalid  Name parameter is missing or invalid  Dob parameter is missing or invalid  Gender parameter is missing or invalid  Mobile parameter is missing or invalid  Verification parameter is missing or invalid  Consent parameter is missing or invalid  Timestamp parameter is missing or invalid  HMAC parameter is missing or invalid|

<h2 id="tocS_Response13">Response13</h2>
<!-- backwards compatibility -->
<a id="schemaresponse13"></a>
<a id="schema_Response13"></a>
<a id="tocSresponse13"></a>
<a id="tocsresponse13"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|repository_service_configerror|
|error_description|string|false|none|The issuer service is not available. Please contact DigiLocker support.|

<h2 id="tocS_Response14">Response14</h2>
<!-- backwards compatibility -->
<a id="schemaresponse14"></a>
<a id="schema_Response14"></a>
<a id="tocSresponse14"></a>
<a id="tocsresponse14"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_orgid|
|error_description|string|false|none|The orgid parameter is missing or invalid.|

<h2 id="tocS_Response15">Response15</h2>
<!-- backwards compatibility -->
<a id="schemaresponse15"></a>
<a id="schema_Response15"></a>
<a id="tocSresponse15"></a>
<a id="tocsresponse15"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_doctype|
|error_description|string|false|none|The doctype parameter is missing or invalid.|

<h2 id="tocS_Response16">Response16</h2>
<!-- backwards compatibility -->
<a id="schemaresponse16"></a>
<a id="schema_Response16"></a>
<a id="tocSresponse16"></a>
<a id="tocsresponse16"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|pull_response_pending|
|error_description|string|false|none|The details provided above do not exactly match with the details on the certificate. Your request has been forwarded to the Issuer department. The Issuer department will verify the details provided above. If the verification is successful, your certificate will be made available in the Issued Documents section of your DigiLocker.|

<h2 id="tocS_Response17">Response17</h2>
<!-- backwards compatibility -->
<a id="schemaresponse17"></a>
<a id="schema_Response17"></a>
<a id="tocSresponse17"></a>
<a id="tocsresponse17"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|uri_exists|
|error_description|string|false|none|This document already exists in your Issued Documents.|

<h2 id="tocS_Response18">Response18</h2>
<!-- backwards compatibility -->
<a id="schemaresponse18"></a>
<a id="schema_Response18"></a>
<a id="tocSresponse18"></a>
<a id="tocsresponse18"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|aadhaar_not_linked|
|error_description|string|false|none|To access issued documents, please link your Aadhaar number to your DigiLocker account.|

<h2 id="tocS_Response2">Response2</h2>
<!-- backwards compatibility -->
<a id="schemaresponse2"></a>
<a id="schema_Response2"></a>
<a id="tocSresponse2"></a>
<a id="tocsresponse2"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|repository_service_unpublished|
|error_description|string|false|none|Internal server error|

<h2 id="tocS_Response3">Response3</h2>
<!-- backwards compatibility -->
<a id="schemaresponse3"></a>
<a id="schema_Response3"></a>
<a id="tocSresponse3"></a>
<a id="tocsresponse3"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|repository_service_unresponsive|
|error_description|string|false|none|Internal server error|

<h2 id="tocS_Response4">Response4</h2>
<!-- backwards compatibility -->
<a id="schemaresponse4"></a>
<a id="schema_Response4"></a>
<a id="tocSresponse4"></a>
<a id="tocsresponse4"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|repository_service_configerror|
|error_description|string|false|none|Internal server error|

<h2 id="tocS_Response5">Response5</h2>
<!-- backwards compatibility -->
<a id="schemaresponse5"></a>
<a id="schema_Response5"></a>
<a id="tocSresponse5"></a>
<a id="tocsresponse5"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|repository_service_resperror|
|error_description|string|false|none|Internal server error|

<h2 id="tocS_Response6">Response6</h2>
<!-- backwards compatibility -->
<a id="schemaresponse6"></a>
<a id="schema_Response6"></a>
<a id="tocSresponse6"></a>
<a id="tocsresponse6"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|repository_service_exception|
|error_description|string|false|none|Internal server error|

<h2 id="tocS_Response7">Response7</h2>
<!-- backwards compatibility -->
<a id="schemaresponse7"></a>
<a id="schema_Response7"></a>
<a id="tocSresponse7"></a>
<a id="tocsresponse7"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|parameter_missing|
|error_description|string|false|none|One or more of the mandatory parameters is missing|

<h2 id="tocS_Response8">Response8</h2>
<!-- backwards compatibility -->
<a id="schemaresponse8"></a>
<a id="schema_Response8"></a>
<a id="tocSresponse8"></a>
<a id="tocsresponse8"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_ts|
|error_description|string|false|none|Timestamp parameter is invalid|

<h2 id="tocS_Response9">Response9</h2>
<!-- backwards compatibility -->
<a id="schemaresponse9"></a>
<a id="schema_Response9"></a>
<a id="tocSresponse9"></a>
<a id="tocsresponse9"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|hmac_mismatch|
|error_description|string|false|none|HMAC does not match|

<h2 id="tocS_ResponseFive">ResponseFive</h2>
<!-- backwards compatibility -->
<a id="schemaresponsefive"></a>
<a id="schema_ResponseFive"></a>
<a id="tocSresponsefive"></a>
<a id="tocsresponsefive"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|otp_error|
|error_description|string|false|none|OTP could not be sent as the account may not have a valid mobile or a valid email.|

<h2 id="tocS_ResponseFour">ResponseFour</h2>
<!-- backwards compatibility -->
<a id="schemaresponsefour"></a>
<a id="schema_ResponseFour"></a>
<a id="tocSresponsefour"></a>
<a id="tocsresponsefour"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|multiple_mobile_accounts|
|error_description|string|false|none|The mobile number provided is associated with more than one DigiLocker accounts. Please login using username.|

<h2 id="tocS_ResponseOne">ResponseOne</h2>
<!-- backwards compatibility -->
<a id="schemaresponseone"></a>
<a id="schema_ResponseOne"></a>
<a id="tocSresponseone"></a>
<a id="tocsresponseone"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_response_type|
|error_description|string|false|none|The response_type parameter is invalid|

<h2 id="tocS_ResponseSeven">ResponseSeven</h2>
<!-- backwards compatibility -->
<a id="schemaresponseseven"></a>
<a id="schema_ResponseSeven"></a>
<a id="tocSresponseseven"></a>
<a id="tocsresponseseven"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|partner_service_unresponsive|
|error_description|string|false|none|Internal server error|

<h2 id="tocS_ResponseSix">ResponseSix</h2>
<!-- backwards compatibility -->
<a id="schemaresponsesix"></a>
<a id="schema_ResponseSix"></a>
<a id="tocSresponsesix"></a>
<a id="tocsresponsesix"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|unexpected_error|
|error_description|string|false|none|Internal server error|

<h2 id="tocS_ResponseThree">ResponseThree</h2>
<!-- backwards compatibility -->
<a id="schemaresponsethree"></a>
<a id="schema_ResponseThree"></a>
<a id="tocSresponsethree"></a>
<a id="tocsresponsethree"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_mobile|
|error_description|string|false|none|The dl_mobile parameter is invalid|

<h2 id="tocS_ResponseTwo">ResponseTwo</h2>
<!-- backwards compatibility -->
<a id="schemaresponsetwo"></a>
<a id="schema_ResponseTwo"></a>
<a id="tocSresponsetwo"></a>
<a id="tocsresponsetwo"></a>

```json
{
  "error": "string",
  "error_description": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error|string|false|none|invalid_username|
|error_description|string|false|none|The dl_username parameter is invalid|

<h2 id="tocS_SearchParameters">SearchParameters</h2>
<!-- backwards compatibility -->
<a id="schemasearchparameters"></a>
<a id="schema_SearchParameters"></a>
<a id="tocSsearchparameters"></a>
<a id="tocssearchparameters"></a>

```json
{
  "clientid": "string",
  "doctype": "string",
  "hmac": "string",
  "orgid": "string",
  "ts": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientid|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|doctype|string|false|none|A 5 character unique document type provided by DigiLocker.|
|hmac|string(binary)|false|none|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|orgid|string|false|none|The organization id for the issuer in DigiLocker. This organization id is returned in Get List of Issuers API mentioned earlier.|
|ts|string|false|none|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|

<h2 id="tocS_SearchParametersResponse">SearchParametersResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchparametersresponse"></a>
<a id="schema_SearchParametersResponse"></a>
<a id="tocSsearchparametersresponse"></a>
<a id="tocssearchparametersresponse"></a>

```json
[
  {
    "example": "string",
    "label": "string",
    "paramname": "string",
    "valuelist": null
  }
]
```

<h2 id="tocS_VerifyAccount">VerifyAccount</h2>
<!-- backwards compatibility -->
<a id="schemaverifyaccount"></a>
<a id="schema_VerifyAccount"></a>
<a id="tocSverifyaccount"></a>
<a id="tocsverifyaccount"></a>

```json
{
  "clientid": "string",
  "hmac": "string",
  "mobile": 0,
  "ts": "string",
  "uid": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|clientid|string|false|none|Provide the client id that was created during the application registration process on Partners Portal.|
|hmac|string(binary)|false|none|Provide SHA-256 encrypted value of the client secret, clientid and ts parameters above concatenated in this sequence (client secret, clientid, ts). The hmac parameter is used by DigiLocker to ensure the data integrity and authentication of the request. Use the Client Secret Key generated during the application registration process on Partners Portal as the client secret.|
|mobile|integer|false|none|This is the mobile number of the user. DigiLocker will check whether an account exists for this mobile number. Either uid or mobile is required to verify whether an account exists.|
|ts|string|false|none|Provide a timestamp value in UNIX (or POSIX) format in IST time zone in seconds. This timestamp value must not be older than 30 minutes.|
|uid|integer|false|none|This is the Aadhaar number of the user. DigiLocker will check whether an account exists for this Aadhaar number. Either uid or mobile is required to verify whether an account exists.|

<h2 id="tocS_VerifyAccountResponse">VerifyAccountResponse</h2>
<!-- backwards compatibility -->
<a id="schemaverifyaccountresponse"></a>
<a id="schema_VerifyAccountResponse"></a>
<a id="tocSverifyaccountresponse"></a>
<a id="tocsverifyaccountresponse"></a>

```json
{
  "digilockerid": "123e4567-e89b-12d3-a456-426655440000",
  "registered": "true"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digilockerid|string|true|none|A unique 36 character DigiLocker Id of the user account.|
|registered|string|true|none|true indicates that the provided Aadhaar/mobile number is already registered and false indicates otherwise.|

<h2 id="tocS_XMLFormatSchema">XMLFormatSchema</h2>
<!-- backwards compatibility -->
<a id="schemaxmlformatschema"></a>
<a id="schema_XMLFormatSchema"></a>
<a id="tocSxmlformatschema"></a>
<a id="tocsxmlformatschema"></a>

```json
{
  "CertificateData": [
    {}
  ],
  "Signature": {
    "KeyInfo": {
      "X509Data": null
    },
    "SignatureValue": null,
    "SignedInfo": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|CertificateData|[object]|true|none|none|
|Signature|object|true|none|none|
