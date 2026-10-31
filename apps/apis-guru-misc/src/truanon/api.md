<h1 id="truanon-private-api">TruAnon Private API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Welcome to TruAnon!
Thank you for helping make the Internet a safer place to be.

Adopting TruAnon is simple. There is no setup or dependencies, nothing to store or process. Making identity part of your service is fun, and you’ll be up and running in a matter of minutes.

TruAnon Private Token is used anytime you request information from TruAnon and you must edit this into the Variables section for this collection.

This API contains two endpoints and both require these same two arguments, also found in the Variables section of this collection.

These two arguments are:

TruAnon Service Identifier

and

Your Member Name

Your TruAnon Service Identifier was provided by TruAnon and is likely the root domain of your site or service. Your Member Name is the unique member ID on your system that you would like to query.

Information is continuously updated for display purposes and aside from performance considerations, there should be no need to capture or save anything from TruAnon.

Base URLs:

* <a href="https://staging.truanon.com">https://staging.truanon.com</a>

<h1 id="truanon-private-api-default">Default</h1>

## Get Profile

<a id="opIdgetProfile"></a>

> Code samples

```bash
curl https://example.com/api/get_profile
```

`GET /api/get_profile`

get_profile Private API: Request confirmed profile data for your unique member ID

<h3 id="get-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|This is your unique username or member ID|
|service|query|string|false|The service name given to you by TruAnon|

<h3 id="get-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Token

<a id="opIdgetToken"></a>

> Code samples

```bash
curl https://example.com/api/request_token
```

`GET /api/request_token`

request_token Private API: Request a Proof token to let the member confirm in a popup interface

        {"id":"qjgblv72bzzio","type":"Proof","active":true,"name":"New Proof"}

Step 2. Create a verifyProfile Public Web link: Use the Proof token id as the token argument in your public URL used to open a new target popup. This activity is where members may confirm immediately.
    
        https://staging.truanon.com/verifyProfile?id=john_doe&service=securecannabisalliance&token=qjgblv72bzzio

<h3 id="get-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|string|false|This is your unique username or member ID|
|service|query|string|false|The service name given to you by TruAnon|

<h3 id="get-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
