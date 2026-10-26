<h1 id="line-messaging-api">LINE Messaging API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes LINE Messaging API.

Base URLs:

* <a href="https://manager.line.biz">https://manager.line.biz</a>

# Authentication

- HTTP Authentication, scheme: basic

<h1 id="line-messaging-api-line-module-attach">line-module-attach</h1>

## attachModule

<a id="opIdattachModule"></a>

> Code samples

```bash
curl https://manager.line.biz/module/auth/v1/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -H "Authorization: Basic ${CREDENTIALS}" \
  -d 'grant_type=authorization_code&code=string&redirect_uri=string&code_verifier=string&client_id=string&client_secret=string&region=string&basic_search_id=string&scope=string&brand_type=string'
```

`POST /module/auth/v1/token`

Attach by operation of the module channel provider

<a href="https://developers.line.biz/en/reference/partner-docs/#link-attach-by-operation-module-channel-provider">External documentation</a>

> Body parameter

```yaml
grant_type: authorization_code
code: string
redirect_uri: string
code_verifier: string
client_id: string
client_secret: string
region: string
basic_search_id: string
scope: string
brand_type: string
```

<h3 id="attachmodule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» grant_type|body|string|true|authorization_code|
|» code|body|string|true|Authorization code received from the LINE Platform.|
|» redirect_uri|body|string|true|Specify the redirect_uri specified in the URL for authentication and authorization.|
|» code_verifier|body|string|false|Specify when using PKCE (Proof Key for Code Exchange) defined in the OAuth 2.0 extension specification as a countermeasure against authorization code interception attacks.|
|» client_id|body|string|false|Instead of using Authorization header, you can use this parameter to specify the channel ID of the module channel.<br>You can find the channel ID of the module channel in the LINE Developers Console.<br>|
|» client_secret|body|string|false|Instead of using Authorization header, you can use this parameter to specify the channel secret of the module channel.<br>You can find the channel secret of the module channel in the LINE Developers Console.<br>|
|» region|body|string|false|If you specified a value for region in the URL for authentication and authorization, specify the same value.<br>|
|» basic_search_id|body|string|false|If you specified a value for basic_search_id in the URL for authentication and authorization, specify the same value.|
|» scope|body|string|false|If you specified a value for scope in the URL for authentication and authorization, specify the same value.|
|» brand_type|body|string|false|If you specified a value for brand_type in the URL for authentication and authorization, specify the same value.|

> Example responses

> 200 Response

```json
{
  "bot_id": "U45c5c51f0050ef0f0ee7261d57fd3c56",
  "scopes": [
    "message:send",
    "message:receive"
  ]
}
```

<h3 id="attachmodule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[AttachModuleResponse](#schemaattachmoduleresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
basicAuth
</aside>

# Schemas

<h2 id="tocS_AttachModuleResponse">AttachModuleResponse</h2>
<!-- backwards compatibility -->
<a id="schemaattachmoduleresponse"></a>
<a id="schema_AttachModuleResponse"></a>
<a id="tocSattachmoduleresponse"></a>
<a id="tocsattachmoduleresponse"></a>

```json
{
  "bot_id": "string",
  "scopes": [
    "string"
  ]
}
```

Attach by operation of the module channel provider

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bot_id|string|true|none|User ID of the bot on the LINE Official Account.|
|scopes|[string]|true|none|Permissions (scope) granted by the LINE Official Account admin.|
