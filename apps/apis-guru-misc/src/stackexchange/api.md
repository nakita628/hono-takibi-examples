<h1 id="stackexchange">StackExchange v2.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Stack Exchange is a network of 130+ Q&A communities including Stack Overflow.

Base URLs:

* <a href="https://api.stackexchange.com/2.0">https://api.stackexchange.com/2.0</a>

<a href="https://api.stackexchange.com/">External documentation</a>

# Authentication

- oAuth2 authentication. The Stack Exchange API offers user authentication via OAuth 2.0, specifically templated after Facebook's implementation. There are two flows, an explicit grant for server side applications and an implicit one for pure browser based ones.

#The explicit OAuth 2.0 flow consists of the following steps:
1. Send a user to https://stackexchange.com/oauth, with these query string parameters
- client_id
- scope
- redirect_uri - must be under an apps registered domain
- state - optional
2. The user approves your app
3. The user is redirected to redirect_uri, with these query string parameters
- code
- state - optional, only returned if provided in the first step
4. POST (application/x-www-form-urlencoded) the following parameters to https://stackexchange.com/oauth/access_token
- client_id
- client_secret
- code - from the previous step
- redirect_uri - must be the same as the provided in the first step
This request is responded to with either an error (HTTP status code 400) or an access token of the form access_token=...&expires=1234. expires will only be set if scope does not include no_expiry, the use of which is strongly advised against unless your app truly needs perpetual access.

#The implicit OAuth 2.0 flow consists of the following steps:

1. Open a new window at https://stackexchange.com/oauth/dialog, with these query string parameters
- client_id
- scope (details)
- redirect_uri - must be under an apps registered domain
- state - optional
2. The user approves your app
3. The user is redirected to redirect_uri, with these parameters in the hash
- access_token
- expires - optional, only if scope doesn't contain no_expiry
The explicit flow should be used by server-side applications, with special care taken to never leak client_secret. Client side applications should use the implicit flow.

Once you have authenticated a user once, regardless of flow, subsequent re-authorizations will occur without requiring user action. Naturally, should a user revoke an applications permissions then further action will be required to re-authorize.

Applications using the implicit flow can make use of our provided minimalistic Javascript SDK.

#Scope

With an empty scope, authentication will only allow an application to identify a user via the /me method. In order to access other information, different scope values must be sent. Multiple values may be sent in scope by comma or space delimitting them.

- read_inbox - access a user's global inbox
- no_expiry - access_token's with this scope do not expire
- write_access - perform write operations as a user 2.1
- private_info - access full history of a user's private actions on the site 2.1

#Desktop Applications

Desktop applications cannot participate directly in OAuth 2.0 flows, however the embeddable browser controls available in most frameworks make it possible to work around this limitation.

Desktop applications should use the implicit client-side flow, hosting the process within a browser control. For redirect_uri, a value of https://stackexchange.com/oauth/login_success should be used. Upon a successful authentication, access_token will be placed in the url hash as with a standard implicit authentication.

#Usage

Access tokens can be passed (as access_token) to any method to grant applications an increased throttle quota. When passing an access token an app must pass its request key as well, if you don't have a request key you can obtain one by registering your application on Stack Apps (http://stackapps.com/users/login?returnurl=/apps/oauth/register).

    - Flow: implicit
    - Authorization URL = [https://stackexchange.com/oauth](https://stackexchange.com/oauth)

<h1 id="stackexchange-default">Default</h1>

## get/access-tokens/{accessTokens}

> Code samples

```bash
curl https://example.com/access-tokens/string
```

`GET /access-tokens/{accessTokens}`

Reads the properties for a set of access tokens.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


<h3 id="getaccess-tokensaccesstokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessTokens|path|string|true|String list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getaccess-tokensaccesstokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[access_tokens](#schemaaccess_tokens)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/access-tokens/{accessTokens}/invalidate

> Code samples

```bash
curl https://example.com/access-tokens/string/invalidate
```

`GET /access-tokens/{accessTokens}/invalidate`

Immediately expires the access tokens passed. This method is meant to allow an application to discard any active access tokens it no longer needs.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


<h3 id="getaccess-tokensaccesstokensinvalidate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessTokens|path|string|true|String list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getaccess-tokensaccesstokensinvalidate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[access_tokens](#schemaaccess_tokens)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/answers

> Code samples

```bash
curl 'https://example.com/answers?site=string'
```

`GET /answers`

Returns all the undeleted answers in the system.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


<h3 id="getanswers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getanswers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[answers](#schemaanswers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/answers/{ids}

> Code samples

```bash
curl 'https://example.com/answers/string?site=string'
```

`GET /answers/{ids}`

Gets the set of answers identified by ids.
 
This is meant for batch fetcing of questions. A useful trick to poll for updates is to sort by activity, with a minimum date of the last time you polled.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


<h3 id="getanswersids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getanswersids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[answers](#schemaanswers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/answers/{ids}/comments

> Code samples

```bash
curl 'https://example.com/answers/string/comments?site=string'
```

`GET /answers/{ids}/comments`

Gets the comments on a set of answers.
 
If you know that you have an answer id and need the comments, use this method. If you know you have a question id, use /questions/{id}/comments. If you are unsure, use /posts/{id}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for answer_id on answer objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


<h3 id="getanswersidscomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getanswersidscomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/apps/{accessTokens}/de-authenticate

> Code samples

```bash
curl https://example.com/apps/string/de-authenticate
```

`GET /apps/{accessTokens}/de-authenticate`

Passing valid access_tokens to this method causes the application that created them to be de-authorized by the user associated with each access_token. This will remove the application from their apps tab, and cause all other existing access_tokens to be destroyed.
 
This method is meant for uninstalling applications, recovering from access_token leaks, or simply as a stronger form of /access-tokens/{accessTokens}/invalidate.
 
Nothing prevents a user from re-authenticate to an application that has de-authenticated itself, the user will be prompted to approve the application again however.
 
{accessTokens} can contain up to 20 access tokens. These are obtained by authenticating a user using OAuth 2.0.
 
This method returns a list of access_tokens.


<h3 id="getappsaccesstokensde-authenticate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accessTokens|path|string|true|String list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getappsaccesstokensde-authenticate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[access_tokens](#schemaaccess_tokens)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/badges

> Code samples

```bash
curl 'https://example.com/badges?site=string'
```

`GET /badges`

Returns all the badges in the system.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


<h3 id="getbadges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inname|query|string|false|none|
|order|query|string|false|none|
|max|query|string|false|sort = rank => string<br>sort = name => string<br>sort = type => string<br>|
|min|query|string|false|sort = rank => string<br>sort = name => string<br>sort = type => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|rank|
|sort|name|
|sort|type|

<h3 id="getbadges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[badges](#schemabadges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/badges/name

> Code samples

```bash
curl 'https://example.com/badges/name?site=string'
```

`GET /badges/name`

Gets all explicitly named badges in the system.
 
A named badged stands in opposition to a tag-based badge. These are referred to as general badges on the sites themselves.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


<h3 id="getbadgesname-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inname|query|string|false|none|
|order|query|string|false|none|
|max|query|string|false|sort = rank => string<br>sort = name => string<br>|
|min|query|string|false|sort = rank => string<br>sort = name => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|rank|
|sort|name|

<h3 id="getbadgesname-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[badges](#schemabadges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/badges/recipients

> Code samples

```bash
curl 'https://example.com/badges/recipients?site=string'
```

`GET /badges/recipients`

Returns recently awarded badges in the system.
 
As these badges have been awarded, they will have the badge.user property set.
 
This method returns a list of badges.


<h3 id="getbadgesrecipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getbadgesrecipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[badges](#schemabadges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/badges/tags

> Code samples

```bash
curl 'https://example.com/badges/tags?site=string'
```

`GET /badges/tags`

Returns the badges that are awarded for participation in specific tags.
 
For the rank sort, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
This method returns a list of badges.


<h3 id="getbadgestags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inname|query|string|false|none|
|order|query|string|false|none|
|max|query|string|false|sort = rank => string<br>sort = name => string<br>|
|min|query|string|false|sort = rank => string<br>sort = name => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|rank|
|sort|name|

<h3 id="getbadgestags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[badges](#schemabadges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/badges/{ids}

> Code samples

```bash
curl 'https://example.com/badges/string?site=string'
```

`GET /badges/{ids}`

Gets the badges identified in id.
 
Note that badge ids are not constant across sites, and thus should be looked up via the /badges method. A badge id on a single site is, however, guaranteed to be stable.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


<h3 id="getbadgesids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = rank => string<br>sort = name => string<br>sort = type => string<br>|
|min|query|string|false|sort = rank => string<br>sort = name => string<br>sort = type => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|rank|
|sort|name|
|sort|type|

<h3 id="getbadgesids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[badges](#schemabadges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/badges/{ids}/recipients

> Code samples

```bash
curl 'https://example.com/badges/string/recipients?site=string'
```

`GET /badges/{ids}/recipients`

Returns recently awarded badges in the system, constrained to a certain set of badges.
 
As these badges have been awarded, they will have the badge.user property set.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for badge_id on badge objects.
 
This method returns a list of badges.


<h3 id="getbadgesidsrecipients-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getbadgesidsrecipients-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[badges](#schemabadges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/comments

> Code samples

```bash
curl 'https://example.com/comments?site=string'
```

`GET /comments`

Gets all the comments on the site.
 
If you're filtering for interesting comments (by score, creation date, etc.) make use of the sort paramter with appropriate min and max values.
 
If you're looking to query conversations between users, instead use the /users/{ids}/mentioned and /users/{ids}/comments/{toid} methods.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


<h3 id="getcomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getcomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/comments/{ids}

> Code samples

```bash
curl 'https://example.com/comments/string?site=string'
```

`GET /comments/{ids}`

Gets the comments identified in id.
 
This method is most useful if you have a cache of comment ids obtained through other means (such as /questions/{id}/comments) but suspect the data may be stale.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for comment_id on comment objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


<h3 id="getcommentsids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getcommentsids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/comments/{id}/delete

> Code samples

```bash
curl 'https://example.com/comments/0/delete?site=string' \
  -X POST
```

`POST /comments/{id}/delete`

Deletes a comment.
 
Use an access_token with write_access to delete a comment.
 
In practice, this method will never return an object.


<h3 id="postcommentsiddelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|preview|query|boolean|false|none|

<h3 id="postcommentsiddelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/comments/{id}/edit

> Code samples

```bash
curl 'https://example.com/comments/0/edit?site=string' \
  -X POST
```

`POST /comments/{id}/edit`

Edit an existing comment.
 
Use an access_token with write_access to edit an existing comment.
 
This method return the created comment.


<h3 id="postcommentsidedit-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|body|query|string|false|none|
|preview|query|boolean|false|none|

<h3 id="postcommentsidedit-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[created_comment](#schemacreated_comment)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/errors

> Code samples

```bash
curl https://example.com/errors
```

`GET /errors`

Returns the various error codes that can be produced by the API.
 
This method is provided for discovery, documentation, and testing purposes, it is not expected many applications will consume it during normal operation.
 
For testing purposes, look into the /errors/{id} method which simulates errors given a code.
 
This method returns a list of errors.


<h3 id="geterrors-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="geterrors-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[errors](#schemaerrors)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/errors/{id}

> Code samples

```bash
curl https://example.com/errors/0
```

`GET /errors/{id}`

This method allows you to generate an error.
 
This method is only intended for use when testing an application or library. Unlike other methods in the API, its contract is not frozen, and new error codes may be added at any time.
 
This method results in an error, which will be expressed with a 400 HTTP status code and setting the error* properties on the wrapper object.


<h3 id="geterrorsid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|

<h3 id="geterrorsid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[error](#schemaerror)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/events

> Code samples

```bash
curl 'https://example.com/events?site=string'
```

`GET /events`

Returns a stream of events that have occurred on the site.
 
The API considers the following "events":
 - posting a question
 - posting an answer
 - posting a comment
 - editing a post
 - creating a user

  

 
Events are only accessible for 15 minutes after they occurred, and by default only events in the last 5 minutes are returned. You can specify the age of the oldest event returned by setting the since parameter.
 
It is advised that developers batch events by ids and make as few subsequent requests to other methods as possible.
 
This method returns a list of events.


<h3 id="getevents-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|since|query|integer|false|Unix date.|

<h3 id="getevents-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[events](#schemaevents)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/filters/create

> Code samples

```bash
curl https://example.com/filters/create
```

`GET /filters/create`

Creates a new filter given a list of includes, excludes, a base filter, and whether or not this filter should be "unsafe".
 
Filter "safety" is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.
 
If no base filter is specified, the default filter is assumed. When building a filter from scratch, the none built-in filter is useful.
 
When the size of the parameters being sent to this method grows to large, problems can occur. This method will accept POST requests to mitigate this.
 
It is not expected that many applications will call this method at runtime, filters should be pre-calculated and "baked in" in the common cases. Furthermore, there are a number of built-in filters which cover common use cases.
 
This method returns a single filter.


<h3 id="getfilterscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|base|query|string|false|none|
|exclude|query|string|false|String list (semicolon delimited).|
|include|query|string|false|String list (semicolon delimited).|
|unsafe|query|boolean|false|none|

<h3 id="getfilterscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[single_filter](#schemasingle_filter)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/filters/{filters}

> Code samples

```bash
curl https://example.com/filters/string
```

`GET /filters/{filters}`

Returns the fields included by the given filters, and the "safeness" of those filters.
 
It is not expected that this method will be consumed by many applications at runtime, it is provided to aid in debugging.
 
{filters} can contain up to 20 semicolon delimited filters. Filters are obtained via calls to /filters/create, or by using a built-in filter.
 
This method returns a list of filters.


<h3 id="getfiltersfilters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filters|path|string|true|String list (semicolon delimited).|

<h3 id="getfiltersfilters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[filters](#schemafilters)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/inbox

> Code samples

```bash
curl https://example.com/inbox
```

`GET /inbox`

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


<h3 id="getinbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getinbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[inbox_items](#schemainbox_items)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/inbox/unread

> Code samples

```bash
curl https://example.com/inbox/unread
```

`GET /inbox/unread`

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


<h3 id="getinboxunread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|since|query|integer|false|Unix date.|

<h3 id="getinboxunread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[inbox_items](#schemainbox_items)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/info

> Code samples

```bash
curl 'https://example.com/info?site=string'
```

`GET /info`

Returns a collection of statistics about the site.
 
Data to facilitate per-site customization, discover related sites, and aggregate statistics is all returned by this method.
 
This data is cached very aggressively, by design. Query sparingly, ideally no more than once an hour.
 
This method returns an info object.


<h3 id="getinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[info_object](#schemainfo_object)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me

> Code samples

```bash
curl 'https://example.com/me?site=string'
```

`GET /me`

Returns the user associated with the passed access_token.
 
This method returns a user.


<h3 id="getme-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|min|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|reputation|
|sort|creation|
|sort|name|
|sort|modified|

<h3 id="getme-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user](#schemauser)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/answers

> Code samples

```bash
curl 'https://example.com/me/answers?site=string'
```

`GET /me/answers`

Returns the answers owned by the user associated with the given access_token.
 
This method returns a list of answers.


<h3 id="getmeanswers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getmeanswers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[answers](#schemaanswers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/associated

> Code samples

```bash
curl https://example.com/me/associated
```

`GET /me/associated`

Returns all of a user's associated accounts, given an access_token for them.
 
This method returns a list of network users.


<h3 id="getmeassociated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getmeassociated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[network_users](#schemanetwork_users)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/badges

> Code samples

```bash
curl 'https://example.com/me/badges?site=string'
```

`GET /me/badges`

Returns the badges earned by the user associated with the given access_token.
 
This method returns a list of badges.


<h3 id="getmebadges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = rank => string<br>sort = name => string<br>sort = type => string<br>|
|min|query|string|false|sort = rank => string<br>sort = name => string<br>sort = type => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|rank|
|sort|name|
|sort|type|

<h3 id="getmebadges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[badges](#schemabadges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/comments

> Code samples

```bash
curl 'https://example.com/me/comments?site=string'
```

`GET /me/comments`

Returns the comments owned by the user associated with the given access_token.
 
This method returns a list of comments.


<h3 id="getmecomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getmecomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/comments/{toId}

> Code samples

```bash
curl 'https://example.com/me/comments/0?site=string'
```

`GET /me/comments/{toId}`

Returns the comments owned by the user associated with the given access_token that are in reply to the user identified by {toId}.
 
This method returns a list of comments.


<h3 id="getmecommentstoid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|toId|path|integer|true|none|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getmecommentstoid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/favorites

> Code samples

```bash
curl 'https://example.com/me/favorites?site=string'
```

`GET /me/favorites`

Returns the questions favorites by the user associated with the given access_token.
 
This method returns a list of questions.


<h3 id="getmefavorites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = added => date<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = added => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|added|

<h3 id="getmefavorites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/inbox

> Code samples

```bash
curl 'https://example.com/me/inbox?site=string'
```

`GET /me/inbox`

Returns the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


<h3 id="getmeinbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmeinbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[inbox_items](#schemainbox_items)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/inbox/unread

> Code samples

```bash
curl 'https://example.com/me/inbox/unread?site=string'
```

`GET /me/inbox/unread`

Returns the unread items in the user identified by access_token's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of inbox items.


<h3 id="getmeinboxunread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|since|query|integer|false|Unix date.|

<h3 id="getmeinboxunread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[inbox_items](#schemainbox_items)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/mentioned

> Code samples

```bash
curl 'https://example.com/me/mentioned?site=string'
```

`GET /me/mentioned`

Returns the comments mentioning the user associated with the given access_token.
 
This method returns a list of comments.


<h3 id="getmementioned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getmementioned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/merges

> Code samples

```bash
curl https://example.com/me/merges
```

`GET /me/merges`

Returns a record of merges that have occurred involving a user identified by an access_token.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


<h3 id="getmemerges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getmemerges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[account_merge](#schemaaccount_merge)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/notifications

> Code samples

```bash
curl 'https://example.com/me/notifications?site=string'
```

`GET /me/notifications`

Returns a user's notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


<h3 id="getmenotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmenotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[notifications](#schemanotifications)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/notifications/unread

> Code samples

```bash
curl 'https://example.com/me/notifications/unread?site=string'
```

`GET /me/notifications/unread`

Returns a user's unread notifications, given an access_token.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


<h3 id="getmenotificationsunread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmenotificationsunread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[notifications](#schemanotifications)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/privileges

> Code samples

```bash
curl 'https://example.com/me/privileges?site=string'
```

`GET /me/privileges`

Returns the privileges the user identified by access_token has.
 
This method returns a list of privileges.


<h3 id="getmeprivileges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmeprivileges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[privileges](#schemaprivileges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/questions

> Code samples

```bash
curl 'https://example.com/me/questions?site=string'
```

`GET /me/questions`

Returns the questions owned by the user associated with the given access_token.
 
This method returns a list of questions.


<h3 id="getmequestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getmequestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/questions/featured

> Code samples

```bash
curl 'https://example.com/me/questions/featured?site=string'
```

`GET /me/questions/featured`

Returns the questions that have active bounties offered by the user associated with the given access_token.
 
This method returns a list of questions.


<h3 id="getmequestionsfeatured-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getmequestionsfeatured-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/questions/no-answers

> Code samples

```bash
curl 'https://example.com/me/questions/no-answers?site=string'
```

`GET /me/questions/no-answers`

Returns the questions owned by the user associated with the given access_token that have no answers.
 
This method returns a list of questions.


<h3 id="getmequestionsno-answers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getmequestionsno-answers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/questions/unaccepted

> Code samples

```bash
curl 'https://example.com/me/questions/unaccepted?site=string'
```

`GET /me/questions/unaccepted`

Returns the questions owned by the user associated with the given access_token that have no accepted answer.
 
This method returns a list of questions.


<h3 id="getmequestionsunaccepted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getmequestionsunaccepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/questions/unanswered

> Code samples

```bash
curl 'https://example.com/me/questions/unanswered?site=string'
```

`GET /me/questions/unanswered`

Returns the questions owned by the user associated with the given access_token that are not considered answered.
 
This method returns a list of questions.


<h3 id="getmequestionsunanswered-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getmequestionsunanswered-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/reputation

> Code samples

```bash
curl 'https://example.com/me/reputation?site=string'
```

`GET /me/reputation`

Returns the reputation changed for the user associated with the given access_token.
 
This method returns a list of reputation changes.


<h3 id="getmereputation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmereputation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[reputation_changes](#schemareputation_changes)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/reputation-history

> Code samples

```bash
curl 'https://example.com/me/reputation-history?site=string'
```

`GET /me/reputation-history`

Returns user's public reputation history.
 
This method returns a list of reputation_history.


<h3 id="getmereputation-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmereputation-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[reputation_history](#schemareputation_history)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/reputation-history/full

> Code samples

```bash
curl 'https://example.com/me/reputation-history/full?site=string'
```

`GET /me/reputation-history/full`

Returns user's full reputation history, including private events.
 
 This method requires an access_token, with a scope containing "private_info".

 
This method returns a list of reputation_history.


<h3 id="getmereputation-historyfull-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmereputation-historyfull-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[reputation_history](#schemareputation_history)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/suggested-edits

> Code samples

```bash
curl 'https://example.com/me/suggested-edits?site=string'
```

`GET /me/suggested-edits`

Returns the suggested edits the user identified by access_token has submitted.
 
This method returns a list of suggested-edits.


<h3 id="getmesuggested-edits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|min|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|approval|
|sort|rejection|

<h3 id="getmesuggested-edits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[suggested-edits](#schemasuggested-edits)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/tags

> Code samples

```bash
curl 'https://example.com/me/tags?site=string'
```

`GET /me/tags`

Returns the tags the user identified by the access_token passed is active in.
 
This method returns a list of tags.


<h3 id="getmetags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|min|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|popular|
|sort|activity|
|sort|name|

<h3 id="getmetags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tags](#schematags)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/tags/{tags}/top-answers

> Code samples

```bash
curl 'https://example.com/me/tags/string/top-answers?site=string'
```

`GET /me/tags/{tags}/top-answers`

Returns the top 30 answers the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of answers.


<h3 id="getmetagstagstop-answers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|path|string|true|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getmetagstagstop-answers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[answers](#schemaanswers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/tags/{tags}/top-questions

> Code samples

```bash
curl 'https://example.com/me/tags/string/top-questions?site=string'
```

`GET /me/tags/{tags}/top-questions`

Returns the top 30 questions the user associated with the given access_token has posted in response to questions with the given tags.
 
This method returns a list of questions.


<h3 id="getmetagstagstop-questions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|path|string|true|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = hot => none<br>sort = week => none<br>sort = month => none<br>sort = relevance => none<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = hot => none<br>sort = week => none<br>sort = month => none<br>sort = relevance => none<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|hot|
|sort|week|
|sort|month|
|sort|relevance|

<h3 id="getmetagstagstop-questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/timeline

> Code samples

```bash
curl 'https://example.com/me/timeline?site=string'
```

`GET /me/timeline`

Returns a subset of the actions the user identified by the passed access_token has taken on the site.
 
This method returns a list of user timeline objects.


<h3 id="getmetimeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmetimeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user_timeline_objects](#schemauser_timeline_objects)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/top-answer-tags

> Code samples

```bash
curl 'https://example.com/me/top-answer-tags?site=string'
```

`GET /me/top-answer-tags`

Returns the user identified by access_token's top 30 tags by answer score.
 
This method returns a list of top tag objects.


<h3 id="getmetop-answer-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmetop-answer-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[top_tag_objects](#schematop_tag_objects)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/top-question-tags

> Code samples

```bash
curl 'https://example.com/me/top-question-tags?site=string'
```

`GET /me/top-question-tags`

Returns the user identified by access_token's top 30 tags by question score.
 
This method returns a list of top tag objects.


<h3 id="getmetop-question-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmetop-question-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[top_tag_objects](#schematop_tag_objects)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/me/write-permissions

> Code samples

```bash
curl 'https://example.com/me/write-permissions?site=string'
```

`GET /me/write-permissions`

Returns the write permissions a user has via the api, given an access token.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


<h3 id="getmewrite-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getmewrite-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[write_permissions](#schemawrite_permissions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/notifications

> Code samples

```bash
curl https://example.com/notifications
```

`GET /notifications`

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


<h3 id="getnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[notifications](#schemanotifications)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/notifications/unread

> Code samples

```bash
curl https://example.com/notifications/unread
```

`GET /notifications/unread`

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


<h3 id="getnotificationsunread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getnotificationsunread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[notifications](#schemanotifications)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/posts

> Code samples

```bash
curl 'https://example.com/posts?site=string'
```

`GET /posts`

Fetches all posts (questions and answers) on the site.
 
In many ways this method is the union of /questions and /answers, returning both sets of data albeit only the common fields.
 
Most applications should use the question or answer specific methods, but /posts is available for those rare cases where any activity is of intereset. Examples of such queries would be: "all posts on Jan. 1st 2011" or "top 10 posts by score of all time".
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of posts.


<h3 id="getposts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getposts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[posts](#schemaposts)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/posts/{ids}

> Code samples

```bash
curl 'https://example.com/posts/string?site=string'
```

`GET /posts/{ids}`

Fetches a set of posts by ids.
 
This method is meant for grabbing an object when unsure whether an id identifies a question or an answer. This is most common with user entered data.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the post object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of posts.


<h3 id="getpostsids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getpostsids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[posts](#schemaposts)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/posts/{ids}/comments

> Code samples

```bash
curl 'https://example.com/posts/string/comments?site=string'
```

`GET /posts/{ids}/comments`

Gets the comments on the posts identified in ids, regardless of the type of the posts.
 
This method is meant for cases when you are unsure of the type of the post id provided. Generally, this would be due to obtaining the post id directly from a user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


<h3 id="getpostsidscomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getpostsidscomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/posts/{ids}/revisions

> Code samples

```bash
curl 'https://example.com/posts/string/revisions?site=string'
```

`GET /posts/{ids}/revisions`

Returns edit revisions for the posts identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.
 
This method returns a list of revisions.


<h3 id="getpostsidsrevisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getpostsidsrevisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[revisions](#schemarevisions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/posts/{ids}/suggested-edits

> Code samples

```bash
curl 'https://example.com/posts/string/suggested-edits?site=string'
```

`GET /posts/{ids}/suggested-edits`

Returns suggsted edits on the posts identified in ids.
 
 - creation - creation_date
 - approval - approval_date
 - rejection - rejection_date
  creation is the default sort.
 
 {ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for post_id, answer_id, or question_id on post, answer, and question objects respectively.

 
This method returns a list of suggested-edits.


<h3 id="getpostsidssuggested-edits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|min|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|approval|
|sort|rejection|

<h3 id="getpostsidssuggested-edits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[suggested-edits](#schemasuggested-edits)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## post/posts/{id}/comments/add

> Code samples

```bash
curl 'https://example.com/posts/0/comments/add?site=string' \
  -X POST
```

`POST /posts/{id}/comments/add`

Create a new comment.
 
Use an access_token with write_access to create a new comment on a post.
 
This method returns the created comment.


<h3 id="postpostsidcommentsadd-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|body|query|string|false|none|
|preview|query|boolean|false|none|

<h3 id="postpostsidcommentsadd-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[created_comment](#schemacreated_comment)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/privileges

> Code samples

```bash
curl 'https://example.com/privileges?site=string'
```

`GET /privileges`

Returns the earnable privileges on a site.
 
Privileges define abilities a user can earn (via reputation) on any Stack Exchange site.
 
While fairly stable, over time they do change. New ones are introduced with new features, and the reputation requirements change as a site matures.
 
This method returns a list of privileges.


<h3 id="getprivileges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getprivileges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[privileges](#schemaprivileges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions

> Code samples

```bash
curl 'https://example.com/questions?site=string'
```

`GET /questions`

Gets all the questions on the site.
 
This method allows you make fairly flexible queries across the entire corpus of questions on a site. For example, getting all questions asked in the the week of Jan 1st 2011 with scores of 10 or more is a single query with parameters sort=votes&min=10&fromdate=1293840000&todate=1294444800.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - hot - by the formula ordering the hot tab Does not accept min or max
 - week - by the formula ordering the week tab Does not accept min or max
 - month - by the formula ordering the month tab Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getquestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagged|query|string|false|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = hot => none<br>sort = week => none<br>sort = month => none<br>sort = relevance => none<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = hot => none<br>sort = week => none<br>sort = month => none<br>sort = relevance => none<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|hot|
|sort|week|
|sort|month|
|sort|relevance|

<h3 id="getquestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/featured

> Code samples

```bash
curl 'https://example.com/questions/featured?site=string'
```

`GET /questions/featured`

Returns all the questions with active bounties in the system.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getquestionsfeatured-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagged|query|string|false|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getquestionsfeatured-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/no-answers

> Code samples

```bash
curl 'https://example.com/questions/no-answers?site=string'
```

`GET /questions/no-answers`

Returns questions which have received no answers.
 
Compare with /questions/unanswered which mearly returns questions that the sites consider insufficiently well answered.
 
This method corresponds roughly with the this site tab.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getquestionsno-answers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagged|query|string|false|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getquestionsno-answers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/unanswered

> Code samples

```bash
curl 'https://example.com/questions/unanswered?site=string'
```

`GET /questions/unanswered`

Returns questions the site considers to be unanswered.
 
Note that just because a question has an answer, that does not mean it is considered answered. While the rules are subject to change, at this time a question must have at least one upvoted answer to be considered answered.
 
To constrain questions returned to those with a set of tags, use the tagged parameter with a semi-colon delimited list of tags. This is an and contraint, passing tagged=c;java will return only those questions with both tags. As such, passing more than 5 tags will always return zero results.
 
Compare with /questions/no-answers.
 
This method corresponds roughly with the unanswered tab.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getquestionsunanswered-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagged|query|string|false|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getquestionsunanswered-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/{ids}

> Code samples

```bash
curl 'https://example.com/questions/string?site=string'
```

`GET /questions/{ids}`

Returns the questions identified in {ids}.
 
This is most useful for fetching fresh data when maintaining a cache of question ids, or polling for changes.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getquestionsids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getquestionsids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/{ids}/answers

> Code samples

```bash
curl 'https://example.com/questions/string/answers?site=string'
```

`GET /questions/{ids}/answers`

Gets the answers to a set of questions identified in id.
 
This method is most useful if you have a set of interesting questions, and you wish to obtain all of their answers at once or if you are polling for new or updates answers (in conjunction with sort=activity).
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


<h3 id="getquestionsidsanswers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getquestionsidsanswers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[answers](#schemaanswers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/{ids}/comments

> Code samples

```bash
curl 'https://example.com/questions/string/comments?site=string'
```

`GET /questions/{ids}/comments`

Gets the comments on a question.
 
If you know that you have an question id and need the comments, use this method. If you know you have a answer id, use /answers/{ids}/comments. If you are unsure, use /posts/{ids}/comments.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


<h3 id="getquestionsidscomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getquestionsidscomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/{ids}/linked

> Code samples

```bash
curl 'https://example.com/questions/string/linked?site=string'
```

`GET /questions/{ids}/linked`

Gets questions which link to those questions identified in {ids}.
 
This method only considers questions that are linked within a site, and will never return questions from another Stack Exchange site.
 
A question is considered "linked" when it explicitly includes a hyperlink to another question, there are no other heuristics.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getquestionsidslinked-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = rank => none<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = rank => none<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|rank|

<h3 id="getquestionsidslinked-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/{ids}/related

> Code samples

```bash
curl 'https://example.com/questions/string/related?site=string'
```

`GET /questions/{ids}/related`

Returns questions that the site considers related to those identified in {ids}.
 
The algorithm for determining if questions are related is not documented, and subject to change at any time. Futhermore, these values are very heavily cached, and may not update immediately after a question has been editted. It is also not guaranteed that a question will be considered related to any number (even non-zero) of questions, and a consumer should be able to handle a variable number of returned questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - rank - a priority sort by site applies, subject to change at any time Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getquestionsidsrelated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = rank => none<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = rank => none<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|rank|

<h3 id="getquestionsidsrelated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/questions/{ids}/timeline

> Code samples

```bash
curl 'https://example.com/questions/string/timeline?site=string'
```

`GET /questions/{ids}/timeline`

Returns a subset of the events that have happened to the questions identified in id.
 
This provides data similar to that found on a question's timeline page.
 
Voting data is scrubbed to deter inferencing of voter identity.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for question_id on question objects.
 
This method returns a list of question timeline events.


<h3 id="getquestionsidstimeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getquestionsidstimeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[question_timeline_events](#schemaquestion_timeline_events)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/revisions/{ids}

> Code samples

```bash
curl 'https://example.com/revisions/string?site=string'
```

`GET /revisions/{ids}`

Returns edit revisions identified by ids in {ids}.
 
{ids} can contain up to 20 semicolon delimited ids, to find ids programatically look for revision_guid on revision objects. Note that unlike most other id types in the API, revision_guid is a string.
 
This method returns a list of revisions.


<h3 id="getrevisionsids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Guid list (semicolon delimited).|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getrevisionsids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[revisions](#schemarevisions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/search

> Code samples

```bash
curl 'https://example.com/search?site=string'
```

`GET /search`

Searches a site for any questions which fit the given criteria.
 
This method is intentionally quite limited. For more general searching, you should use a proper internet search engine restricted to the domain of the site in question.
 
At least one of tagged or intitle must be set on this method. nottagged is only used if tagged is also set, for performance reasons.
 
tagged and nottagged are semi-colon delimited list of tags. At least 1 tag in tagged will be on each returned question if it is passed, making it the OR equivalent of the AND version of tagged on /questions.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagged|query|string|false|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = relevance => none<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = relevance => none<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|intitle|query|string|false|none|
|nottagged|query|string|false|String list (semicolon delimited).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|relevance|

<h3 id="getsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/search/advanced

> Code samples

```bash
curl 'https://example.com/search/advanced?site=string'
```

`GET /search/advanced`

Searches a site for any questions which fit the given criteria.
 
Search criteria are expressed using the following parameters:
  - q - a free form text parameter, will match all question properties based on an undocumented algorithm.
 - accepted - true to return only questions with accepted answers, false to return only those without. Omit to elide constraint.
 - answers - the minimum number of answers returned questions must have.
 - body - text which must appear in returned questions' bodies.
 - closed - true to return only closed questions, false to return only open ones. Omit to elide constraint.
 - migrated - true to return only questions migrated away from a site, false to return only those not. Omit to elide constraint.
 - notice - true to return only questions with post notices, false to return only those without. Omit to elide constraint.
 - nottagged - a semicolon delimited list of tags, none of which will be present on returned questions.
 - tagged - a semicolon delimited list of tags, of which at least one will be present on all returned questions.
 - title - text which must appear in returned questions' titles.
 - user - the id of the user who must own the questions returned.
 - url - a url which must be contained in a post, may include a wildcard.
 - views - the minimum number of views returned questions must have.
 - wiki - true to return only community wiki questions, false to return only non-community wiki ones. Omit to elide constraint.

  
At least one additional parameter must be set if nottagged is set, for performance reasons.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - matches the relevance tab on the site itself Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getsearchadvanced-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagged|query|string|false|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = relevance => none<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = relevance => none<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|accepted|query|string|false|none|
|answers|query|integer|false|none|
|body|query|string|false|none|
|closed|query|string|false|none|
|migrated|query|string|false|none|
|notice|query|string|false|none|
|nottagged|query|string|false|String list (semicolon delimited).|
|q|query|string|false|none|
|title|query|string|false|none|
|url|query|string|false|none|
|user|query|integer|false|none|
|views|query|integer|false|none|
|wiki|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|relevance|
|accepted|true|
|accepted|false|
|closed|true|
|closed|false|
|migrated|true|
|migrated|false|
|notice|true|
|notice|false|
|wiki|true|
|wiki|false|

<h3 id="getsearchadvanced-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/similar

> Code samples

```bash
curl 'https://example.com/similar?site=string'
```

`GET /similar`

Returns questions which are similar to a hypothetical one based on a title and tag combination.
 
This method is roughly equivalent to a site's related questions suggestion on the ask page.
 
This method is useful for correlating data outside of a Stack Exchange site with similar content within one.
 
Note that title must always be passed as a parameter. tagged and nottagged are optional, semi-colon delimited lists of tags.
 
If tagged is passed it is treated as a preference, there is no guarantee that questions returned will have any of those tags. nottagged is treated as a requirement, no questions will be returned with those tags.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - relevance - order by "how similar" the questions are, most likely candidate first with a descending order Does not accept min or max
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getsimilar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tagged|query|string|false|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = relevance => none<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = relevance => none<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|nottagged|query|string|false|String list (semicolon delimited).|
|title|query|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|relevance|

<h3 id="getsimilar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/sites

> Code samples

```bash
curl https://example.com/sites
```

`GET /sites`

Returns all sites in the network.
 
This method allows for discovery of new sites, and changes to existing ones. Be aware that unlike normal API methods, this method should be fetched very infrequently, it is very unusual for these values to change more than once on any given day. It is suggested that you cache its return for at least one day, unless your app encounters evidence that it has changed (such as from the /info method).
 
The pagesize parameter for this method is unbounded, in acknowledgement that for many applications repeatedly fetching from /sites would complicate start-up tasks needlessly.
 
This method returns a list of sites.


<h3 id="getsites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getsites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[sites](#schemasites)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/suggested-edits

> Code samples

```bash
curl 'https://example.com/suggested-edits?site=string'
```

`GET /suggested-edits`

Returns all the suggested edits in the systems.
 
This method returns a list of suggested-edits.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


<h3 id="getsuggested-edits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|min|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|approval|
|sort|rejection|

<h3 id="getsuggested-edits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[suggested-edits](#schemasuggested-edits)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/suggested-edits/{ids}

> Code samples

```bash
curl 'https://example.com/suggested-edits/string?site=string'
```

`GET /suggested-edits/{ids}`

Returns suggested edits identified in ids.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for suggested_edit_id on suggested_edit objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of suggested-edits.


<h3 id="getsuggested-editsids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|min|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|approval|
|sort|rejection|

<h3 id="getsuggested-editsids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[suggested-edits](#schemasuggested-edits)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags

> Code samples

```bash
curl 'https://example.com/tags?site=string'
```

`GET /tags`

Returns the tags found on a site.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


<h3 id="gettags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inname|query|string|false|none|
|order|query|string|false|none|
|max|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|min|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|popular|
|sort|activity|
|sort|name|

<h3 id="gettags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tags](#schematags)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/moderator-only

> Code samples

```bash
curl 'https://example.com/tags/moderator-only?site=string'
```

`GET /tags/moderator-only`

Returns the tags found on a site that only moderators can use.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


<h3 id="gettagsmoderator-only-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inname|query|string|false|none|
|order|query|string|false|none|
|max|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|min|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|popular|
|sort|activity|
|sort|name|

<h3 id="gettagsmoderator-only-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tags](#schematags)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/required

> Code samples

```bash
curl 'https://example.com/tags/required?site=string'
```

`GET /tags/required`

Returns the tags found on a site that fulfill required tag constraints on questions.
 
The inname parameter lets a consumer filter down to tags that contain a certain substring. For example, inname=own would return both "download" and "owner" amongst others.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


<h3 id="gettagsrequired-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inname|query|string|false|none|
|order|query|string|false|none|
|max|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|min|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|popular|
|sort|activity|
|sort|name|

<h3 id="gettagsrequired-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tags](#schematags)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/synonyms

> Code samples

```bash
curl 'https://example.com/tags/synonyms?site=string'
```

`GET /tags/synonyms`

Returns all tag synonyms found a site.
 
When searching for synonyms of specific tags, it is better to use /tags/{tags}/synonyms over this method.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tag_synonyms.


<h3 id="gettagssynonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = applied => number<br>sort = activity => date<br>|
|min|query|string|false|sort = creation => date<br>sort = applied => number<br>sort = activity => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|applied|
|sort|activity|

<h3 id="gettagssynonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tag_synonyms](#schematag_synonyms)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/{tags}/faq

> Code samples

```bash
curl 'https://example.com/tags/string/faq?site=string'
```

`GET /tags/{tags}/faq`

Returns the frequently asked questions for the given set of tags in {tags}.
 
For a question to be returned, it must have all the tags in {tags} and be considered "frequently asked". The exact algorithm for determining whether a question is considered a FAQ is subject to change at any time.
 
{tags} can contain up to 5 individual tags per request.
 
This method returns a list of questions.


<h3 id="gettagstagsfaq-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|path|string|true|String list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="gettagstagsfaq-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/{tags}/info

> Code samples

```bash
curl 'https://example.com/tags/string/info?site=string'
```

`GET /tags/{tags}/info`

Returns tag objects representing the tags in {tags} found on the site.
 
This method diverges from the standard naming patterns to avoid to conflicting with existing methods, due to the free form nature of tag names.
 
This method returns a list of tags.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.


<h3 id="gettagstagsinfo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|path|string|true|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|min|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|popular|
|sort|activity|
|sort|name|

<h3 id="gettagstagsinfo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tags](#schematags)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/{tags}/related

> Code samples

```bash
curl 'https://example.com/tags/string/related?site=string'
```

`GET /tags/{tags}/related`

Returns the tags that are most related to those in {tags}.
 
Including multiple tags in {tags} is equivalent to asking for "tags related to tag #1 and tag #2" not "tags related to tag #1 or tag #2".
 
count on tag objects returned is the number of question with that tag that also share all those in {tags}.
 
{tags} can contain up to 4 individual tags per request.
 
This method returns a list of tags.


<h3 id="gettagstagsrelated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|path|string|true|String list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="gettagstagsrelated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tags](#schematags)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/{tags}/synonyms

> Code samples

```bash
curl 'https://example.com/tags/string/synonyms?site=string'
```

`GET /tags/{tags}/synonyms`

Gets all the synonyms that point to the tags identified in {tags}. If you're looking to discover all the tag synonyms on a site, use the /tags/synonyms methods instead of call this method on all tags.
 
{tags} can contain up to 20 individual tags per request.
 
The sorts accepted by this method operate on the follow fields of the tag_synonym object:
 - creation - creation_date
 - applied - applied_count
 - activity - last_applied_date
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tag synonyms.


<h3 id="gettagstagssynonyms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|path|string|true|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = applied => number<br>sort = activity => date<br>|
|min|query|string|false|sort = creation => date<br>sort = applied => number<br>sort = activity => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|applied|
|sort|activity|

<h3 id="gettagstagssynonyms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tag_synonyms](#schematag_synonyms)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/{tags}/wikis

> Code samples

```bash
curl 'https://example.com/tags/string/wikis?site=string'
```

`GET /tags/{tags}/wikis`

Returns the wikis that go with the given set of tags in {tags}.
 
Be aware that not all tags have wikis.
 
{tags} can contain up to 20 individual tags per request.
 
This method returns a list of tag wikis.


<h3 id="gettagstagswikis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tags|path|string|true|String list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="gettagstagswikis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tag_wikis](#schematag_wikis)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/{tag}/top-answerers/{period}

> Code samples

```bash
curl 'https://example.com/tags/string/top-answerers/all_time?site=string'
```

`GET /tags/{tag}/top-answerers/{period}`

Returns the top 30 answerers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


<h3 id="gettagstagtop-answerersperiod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|path|string|true|none|
|period|path|string|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|all_time|
|period|month|

<h3 id="gettagstagtop-answerersperiod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tag_score_objects](#schematag_score_objects)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/tags/{tag}/top-askers/{period}

> Code samples

```bash
curl 'https://example.com/tags/string/top-askers/all_time?site=string'
```

`GET /tags/{tag}/top-askers/{period}`

Returns the top 30 askers active in a single tag, of either all-time or the last 30 days.
 
This is a view onto the data presented on the tag info page on the sites.
 
This method returns a list of tag score objects.


<h3 id="gettagstagtop-askersperiod-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tag|path|string|true|none|
|period|path|string|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|all_time|
|period|month|

<h3 id="gettagstagtop-askersperiod-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tag_score_objects](#schematag_score_objects)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users

> Code samples

```bash
curl 'https://example.com/users?site=string'
```

`GET /users`

Returns all users on a site.
 
This method returns a list of users.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
The inname parameter lets consumers filter the results down to just those users with a certain substring in their display name. For example, inname=kevin will return all users with both users named simply "Kevin" or those with Kevin as one of (or part of) their names; such as "Kevin Montrose".


<h3 id="getusers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|inname|query|string|false|none|
|order|query|string|false|none|
|max|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|min|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|reputation|
|sort|creation|
|sort|name|
|sort|modified|

<h3 id="getusers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[users](#schemausers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/moderators

> Code samples

```bash
curl 'https://example.com/users/moderators?site=string'
```

`GET /users/moderators`

Gets those users on a site who can exercise moderation powers.
 
Note, employees of Stack Exchange Inc. will be returned if they have been granted moderation powers on a site even if they have never been appointed or elected explicitly. This method checks abilities, not the manner in which they were obtained.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.


<h3 id="getusersmoderators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|min|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|reputation|
|sort|creation|
|sort|name|
|sort|modified|

<h3 id="getusersmoderators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[users](#schemausers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/moderators/elected

> Code samples

```bash
curl 'https://example.com/users/moderators/elected?site=string'
```

`GET /users/moderators/elected`

Returns those users on a site who both have moderator powers, and were actually elected.
 
This method excludes Stack Exchange Inc. employees, unless they were actually elected moderators on a site (which can only have happened prior to their employment).
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.


<h3 id="getusersmoderatorselected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|order|query|string|false|none|
|max|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|min|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|reputation|
|sort|creation|
|sort|name|
|sort|modified|

<h3 id="getusersmoderatorselected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[users](#schemausers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}

> Code samples

```bash
curl 'https://example.com/users/string?site=string'
```

`GET /users/{ids}`

Gets the users identified in ids in {ids}.
 
Typically this method will be called to fetch user profiles when you have obtained user ids from some other source, such as /questions.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the user object:
 - reputation - reputation
 - creation - creation_date
 - name - display_name
 - modified - last_modified_date
  reputation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of users.


<h3 id="getusersids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|min|query|string|false|sort = reputation => number<br>sort = creation => date<br>sort = name => string<br>sort = modified => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|reputation|
|sort|creation|
|sort|name|
|sort|modified|

<h3 id="getusersids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[users](#schemausers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/answers

> Code samples

```bash
curl 'https://example.com/users/string/answers?site=string'
```

`GET /users/{ids}/answers`

Returns the answers the users in {ids} have posted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


<h3 id="getusersidsanswers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getusersidsanswers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[answers](#schemaanswers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/associated

> Code samples

```bash
curl https://example.com/users/string/associated
```

`GET /users/{ids}/associated`

Returns all of a user's associated accounts, given their account_ids in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for account_id on user objects.
 
This method returns a list of network_users.


<h3 id="getusersidsassociated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getusersidsassociated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[network_users](#schemanetwork_users)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/badges

> Code samples

```bash
curl 'https://example.com/users/string/badges?site=string'
```

`GET /users/{ids}/badges`

Get the badges the users in {ids} have earned.
 
Badge sorts are a tad complicated. For the purposes of sorting (and min/max) tag_based is considered to be greater than named.
 
This means that you can get a list of all tag based badges a user has by passing min=tag_based, and conversely all the named badges by passing max=named, with sort=type.
 
For ranks, bronze is greater than silver which is greater than gold. Along with sort=rank, set max=gold for just gold badges, max=silver&min=silver for just silver, and min=bronze for just bronze.
 
rank is the default sort.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of badges.


<h3 id="getusersidsbadges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = rank => string<br>sort = name => string<br>sort = type => string<br>sort = awarded => date<br>|
|min|query|string|false|sort = rank => string<br>sort = name => string<br>sort = type => string<br>sort = awarded => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|rank|
|sort|name|
|sort|type|
|sort|awarded|

<h3 id="getusersidsbadges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[badges](#schemabadges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/comments

> Code samples

```bash
curl 'https://example.com/users/string/comments?site=string'
```

`GET /users/{ids}/comments`

Get the comments posted by users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


<h3 id="getusersidscomments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getusersidscomments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/comments/{toid}

> Code samples

```bash
curl 'https://example.com/users/string/comments/0?site=string'
```

`GET /users/{ids}/comments/{toid}`

Get the comments that the users in {ids} have posted in reply to the single user identified in {toid}.
 
This method is useful for extracting conversations, especially over time or across multiple posts.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects. {toid} can contain only 1 id, found in the same manner as those in {ids}.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


<h3 id="getusersidscommentstoid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|toid|path|integer|true|none|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getusersidscommentstoid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/favorites

> Code samples

```bash
curl 'https://example.com/users/string/favorites?site=string'
```

`GET /users/{ids}/favorites`

Get the questions that users in {ids} have favorited.
 
This method is effectively a view onto a user's favorites tab.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
 - added - when the user favorited the question
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getusersidsfavorites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = added => date<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>sort = added => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|
|sort|added|

<h3 id="getusersidsfavorites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/mentioned

> Code samples

```bash
curl 'https://example.com/users/string/mentioned?site=string'
```

`GET /users/{ids}/mentioned`

Gets all the comments that the users in {ids} were mentioned in.
 
Note, to count as a mention the comment must be considered to be "in reply to" a user. Most importantly, this means that a comment can only be in reply to a single user.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the comment object:
 - creation - creation_date
 - votes - score
  It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of comments.


<h3 id="getusersidsmentioned-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|votes|

<h3 id="getusersidsmentioned-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[comments](#schemacomments)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/merges

> Code samples

```bash
curl https://example.com/users/string/merges
```

`GET /users/{ids}/merges`

Returns a record of merges that have occurred involving the passed account ids.
 
This method allows you to take now invalid account ids and find what account they've become, or take currently valid account ids and find which ids were equivalent in the past.
 
This is most useful when confirming that an account_id is in fact "new" to an application.
 
Account merges can happen for a wide range of reasons, applications should not make assumptions that merges have particular causes.
 
Note that accounts are managed at a network level, users on a site may be merged due to an account level merge but there is no guarantee that a merge has an effect on any particular site.
 
This method returns a list of account_merge.


<h3 id="getusersidsmerges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|

<h3 id="getusersidsmerges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[account_merge](#schemaaccount_merge)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/questions

> Code samples

```bash
curl 'https://example.com/users/string/questions?site=string'
```

`GET /users/{ids}/questions`

Gets the questions asked by the users in {ids}.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getusersidsquestions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getusersidsquestions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/questions/featured

> Code samples

```bash
curl 'https://example.com/users/string/questions/featured?site=string'
```

`GET /users/{ids}/questions/featured`

Gets the questions on which the users in {ids} have active bounties.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getusersidsquestionsfeatured-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getusersidsquestionsfeatured-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/questions/no-answers

> Code samples

```bash
curl 'https://example.com/users/string/questions/no-answers?site=string'
```

`GET /users/{ids}/questions/no-answers`

Gets the questions asked by the users in {ids} which have no answers.
 
Questions returns by this method actually have zero undeleted answers. It is completely disjoint /users/{ids}/questions/unanswered and /users/{ids}/questions/unaccepted, which only return questions with at least one answer, subject to other contraints.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getusersidsquestionsno-answers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getusersidsquestionsno-answers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/questions/unaccepted

> Code samples

```bash
curl 'https://example.com/users/string/questions/unaccepted?site=string'
```

`GET /users/{ids}/questions/unaccepted`

Gets the questions asked by the users in {ids} which have at least one answer, but no accepted answer.
 
Questions returned by this method have answers, but the owner has not opted to accept any of them.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getusersidsquestionsunaccepted-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getusersidsquestionsunaccepted-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/questions/unanswered

> Code samples

```bash
curl 'https://example.com/users/string/questions/unanswered?site=string'
```

`GET /users/{ids}/questions/unanswered`

Gets the questions asked by the users in {ids} which the site consideres unanswered, while still having at least one answer posted.
 
These rules are subject to change, but currently any question without at least one upvoted or accepted answer is considered unanswered.
 
To get the set of questions that a user probably considers unanswered, the returned questions should be unioned with those returned by /users/{id}/questions/no-answers. These methods are distinct so that truly unanswered (that is, zero posted answers) questions can be easily separated from mearly poorly or inadequately answered ones.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getusersidsquestionsunanswered-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getusersidsquestionsunanswered-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/reputation

> Code samples

```bash
curl 'https://example.com/users/string/reputation?site=string'
```

`GET /users/{ids}/reputation`

Gets a subset of the reputation changes for users in {ids}.
 
Reputation changes are intentionally scrubbed of some data to make it difficult to correlate votes on particular posts with user reputation changes. That being said, this method returns enough data for reasonable display of reputation trends.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of reputation objects.


<h3 id="getusersidsreputation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidsreputation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[reputation_changes](#schemareputation_changes)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/reputation-history

> Code samples

```bash
curl 'https://example.com/users/string/reputation-history?site=string'
```

`GET /users/{ids}/reputation-history`

Returns users' public reputation history.
 
This method returns a list of reputation_history.


<h3 id="getusersidsreputation-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidsreputation-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[reputation_history](#schemareputation_history)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/suggested-edits

> Code samples

```bash
curl 'https://example.com/users/string/suggested-edits?site=string'
```

`GET /users/{ids}/suggested-edits`

Returns the suggested edits a users in {ids} have submitted.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the suggested_edit object:
 - creation - creation_date
 - approval - approval_date Does not return unapproved suggested_edits
 - rejection - rejection_date Does not return unrejected suggested_edits
  creation is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of suggested-edits.


<h3 id="getusersidssuggested-edits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|min|query|string|false|sort = creation => date<br>sort = approval => date<br>sort = rejection => date<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|creation|
|sort|approval|
|sort|rejection|

<h3 id="getusersidssuggested-edits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[suggested-edits](#schemasuggested-edits)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/tags

> Code samples

```bash
curl 'https://example.com/users/string/tags?site=string'
```

`GET /users/{ids}/tags`

Returns the tags the users identified in {ids} have been active in.
 
This route corresponds roughly to user's stats tab, but does not include tag scores. A subset of tag scores are available (on a single user basis) in /users/{id}/top-answer-tags and /users/{id}/top-question-tags.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
The sorts accepted by this method operate on the follow fields of the tag object:
 - popular - count
 - activity - the creation_date of the last question asked with the tag
 - name - name
  popular is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of tags.


<h3 id="getusersidstags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|min|query|string|false|sort = popular => number<br>sort = activity => date<br>sort = name => string<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|popular|
|sort|activity|
|sort|name|

<h3 id="getusersidstags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[tags](#schematags)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{ids}/timeline

> Code samples

```bash
curl 'https://example.com/users/string/timeline?site=string'
```

`GET /users/{ids}/timeline`

Returns a subset of the actions the users in {ids} have taken on the site.
 
This method returns users' posts, edits, and earned badges in the order they were accomplished. It is possible to filter to just a window of activity using the fromdate and todate parameters.
 
{ids} can contain up to 100 semicolon delimited ids, to find ids programatically look for user_id on user or shallow_user objects.
 
This method returns a list of user timeline objects.


<h3 id="getusersidstimeline-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|path|string|true|Number list (semicolon delimited).|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidstimeline-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[user_timeline_objects](#schemauser_timeline_objects)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/inbox

> Code samples

```bash
curl 'https://example.com/users/0/inbox?site=string'
```

`GET /users/{id}/inbox`

Returns a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


<h3 id="getusersidinbox-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidinbox-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[inbox_items](#schemainbox_items)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/inbox/unread

> Code samples

```bash
curl 'https://example.com/users/0/inbox/unread?site=string'
```

`GET /users/{id}/inbox/unread`

Returns the unread items in a user's inbox.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method is effectively an alias for /inbox/unread. It is provided for consumers who make strong assumptions about operating within the context of a single site rather than the Stack Exchange network as a whole.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of inbox items.


<h3 id="getusersidinboxunread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|
|since|query|integer|false|Unix date.|

<h3 id="getusersidinboxunread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[inbox_items](#schemainbox_items)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/notifications

> Code samples

```bash
curl 'https://example.com/users/0/notifications?site=string'
```

`GET /users/{id}/notifications`

Returns a user's notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


<h3 id="getusersidnotifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidnotifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[notifications](#schemanotifications)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/notifications/unread

> Code samples

```bash
curl 'https://example.com/users/0/notifications/unread?site=string'
```

`GET /users/{id}/notifications/unread`

Returns a user's unread notifications.
 
This method requires an access_token, with a scope containing "read_inbox".
 
This method returns a list of notifications.


<h3 id="getusersidnotificationsunread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidnotificationsunread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[notifications](#schemanotifications)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/privileges

> Code samples

```bash
curl 'https://example.com/users/0/privileges?site=string'
```

`GET /users/{id}/privileges`

Returns the privileges a user has.
 
Applications are encouraged to calculate privileges themselves, without repeated queries to this method. A simple check against the results returned by /privileges and user.user_type would be sufficient.
 
{id} can contain only a single, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of privileges.


<h3 id="getusersidprivileges-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidprivileges-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[privileges](#schemaprivileges)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/reputation-history/full

> Code samples

```bash
curl 'https://example.com/users/0/reputation-history/full?site=string'
```

`GET /users/{id}/reputation-history/full`

Returns a user's full reputation history, including private events.
 
This method requires an access_token, with a scope containing "private_info".
 
This method returns a list of reputation_history.


<h3 id="getusersidreputation-historyfull-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidreputation-historyfull-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[reputation_history](#schemareputation_history)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/tags/{tags}/top-answers

> Code samples

```bash
curl 'https://example.com/users/0/tags/string/top-answers?site=string'
```

`GET /users/{id}/tags/{tags}/top-answers`

Returns the top 30 answers a user has posted in response to questions with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the answer object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of answers.


<h3 id="getusersidtagstagstop-answers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|tags|path|string|true|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getusersidtagstagstop-answers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[answers](#schemaanswers)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/tags/{tags}/top-questions

> Code samples

```bash
curl 'https://example.com/users/0/tags/string/top-questions?site=string'
```

`GET /users/{id}/tags/{tags}/top-questions`

Returns the top 30 questions a user has asked with the given tags.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects. {tags} is limited to 5 tags, passing more will result in an error.
 
The sorts accepted by this method operate on the follow fields of the question object:
 - activity - last_activity_date
 - creation - creation_date
 - votes - score
  activity is the default sort.
 
 It is possible to create moderately complex queries using sort, min, max, fromdate, and todate.

 
This method returns a list of questions.


<h3 id="getusersidtagstagstop-questions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|tags|path|string|true|String list (semicolon delimited).|
|order|query|string|false|none|
|max|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|min|query|string|false|sort = activity => date<br>sort = creation => date<br>sort = votes => number<br>|
|sort|query|string|false|none|
|fromdate|query|integer|false|Unix date.|
|todate|query|integer|false|Unix date.|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|order|desc|
|order|asc|
|sort|activity|
|sort|creation|
|sort|votes|

<h3 id="getusersidtagstagstop-questions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[questions](#schemaquestions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/top-answer-tags

> Code samples

```bash
curl 'https://example.com/users/0/top-answer-tags?site=string'
```

`GET /users/{id}/top-answer-tags`

Returns a single user's top tags by answer score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


<h3 id="getusersidtop-answer-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidtop-answer-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[top_tag_objects](#schematop_tag_objects)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/top-question-tags

> Code samples

```bash
curl 'https://example.com/users/0/top-question-tags?site=string'
```

`GET /users/{id}/top-question-tags`

Returns a single user's top tags by question score.
 
This a subset of the data returned on a user's tags tab.
 
{id} can contain a single id, to find it programatically look for user_id on user or shallow_user objects.
 
This method returns a list of top_tag objects.


<h3 id="getusersidtop-question-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidtop-question-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[top_tag_objects](#schematop_tag_objects)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

## get/users/{id}/write-permissions

> Code samples

```bash
curl 'https://example.com/users/0/write-permissions?site=string'
```

`GET /users/{id}/write-permissions`

Returns the write permissions a user has via the api.
 
The Stack Exchange API gives users the ability to create, edit, and delete certain types. This method returns whether the passed user is capable of performing those actions at all, as well as how many times a day they can.
 
This method does not consider the user's current quota (ie. if they've already exhausted it for today) nor any additional restrictions on write access, such as editing deleted comments.
 
This method returns a list of write_permissions.


<h3 id="getusersidwrite-permissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|none|
|pagesize|query|integer|false|none|
|page|query|integer|false|none|
|filter|query|string|false|#Discussion<br><br>The Stack Exchange API allows applications to exclude almost every field returned. For example, if an application did not care about a user's badge counts it could exclude user.badge_counts whenever it calls a method that returns users.<br><br>An application excludes fields by creating a filter (via /filter/create) and passing it to a method in the filter parameter.<br><br>Filters are immutable and non-expiring. An application can safely "bake in" any filters that are created, it is not necessary (or advisable) to create filters at runtime.<br><br>The motivation for filters are several fold. Filters allow applications to reduce API responses to just the fields they are concerned with, saving bandwidth. With the list of fields an application is actually concerned with, the API can avoid unneccessary queries thereby decreasing response time (and reducing load on our infrastructure). Finally, filters allow us to be more conservative in what the API returns by default without a proliferation of parameters (as was seen with body, answers, and comments in the 1.x API family).<br><br>#Safety<br><br>Filters also carry a notion of safety, which is defined as follows. Any string returned as a result of an API call with a safe filter will be inline-able into HTML without script-injection concerns. That is to say, no additional sanitizing (encoding, HTML tag stripping, etc.) will be necessary on returned strings. Applications that wish to handle sanitizing themselves should create an unsafe filter. All filters are safe by default, under the assumption that double-encoding bugs are more desirable than script injections.<br><br>Note that this does not mean that "safe" filter is mearly an "unsafe" one with all fields passed though UrlEncode(...). Many fields can and will contain HTML in all filter types (most notably, the *.body fields).<br><br>When using unsafe filters, the API returns the highest fidelity data it can reasonably access for the given request. This means that in cases where the "safe" data is the only accessible data it will be returned even in "unsafe" filters. Notably the *.body fields are unchanged, as they are stored in that form. Fields that are unchanged between safe and unsafe filters are denoted in their types documentation.<br><br>#Built In Filters<br><br>The following filters are built in:<br><br>default, each type documents which fields are returned under the default filter (for example, answers).<br>withbody, which is default plus the *.body fields<br>none, which is empty<br>total, which includes just .total<br><br>#Compatibility with V1.x<br><br>For ease of transition from earlier API versions, the filters _b, _ba, _bc, _bca, _a, _ac, and _c are also built in. These are unsafe, and exclude a combination of question and answer body, comments, and answers so as to mimic the body, answers, and comments parameters that have been removed in V2.0. New applications should not use these filters.<br>|
|callback|query|string|false|All API responses are JSON, we do support JSONP with the callback query parameter.<br>|
|site|query|string|true|Each of these methods operates on a single site at a time, identified by the site parameter. This parameter can be the full domain name (ie. "stackoverflow.com"), or a short form identified by api_site_parameter on the site object.<br>|

<h3 id="getusersidwrite-permissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|[write_permissions](#schemawrite_permissions)|
|400|Bad Request|bad_parameter Ã¢â‚¬â€œ 400 An invalid parameter was passed, this includes even "high level" parameters like key or site.<br>|None|
|401|Unauthorized|access_token_required Ã¢â‚¬â€œ 401 A method that requires an access token (obtained via authentication) was called without one.<br>|None|
|402|Payment Required|invalid_access_token Ã¢â‚¬â€œ 402 An invalid access token was passed to a method.<br>|None|
|403|Forbidden|access_denied Ã¢â‚¬â€œ 403 A method which requires certain permissions was called with an access token that lacks those permissions.<br>|None|
|404|Not Found|no_method Ã¢â‚¬â€œ 404 An attempt was made to call a method that does not exist. Note, calling methods that expect numeric ids (like /users/{ids}) with non-numeric ids can also result in this error.<br>|None|
|405|Method Not Allowed|key_required Ã¢â‚¬â€œ 405 A method was called in a manner that requires an application key (generally, with an access token), but no key was passed.<br>|None|
|406|Not Acceptable|access_token_compromised Ã¢â‚¬â€œ 406 An access token is no longer believed to be secure, normally because it was used on a non-HTTPS call. The access token will be invalidated if this error is returned.<br>|None|
|500|Internal Server Error|internal_error Ã¢â‚¬â€œ 500 An unexpected error occurred in the API. It has been logged, and Stack Exchange developers have been notified. You should report these errors on Stack Apps if you want to be notified when they're fixed.<br>|None|
|502|Bad Gateway|throttle_violation Ã¢â‚¬â€œ 502 An application has violated part of the rate limiting contract, so the request was terminated.<br>|None|
|503|Service Unavailable|temporarily_unavailable Ã¢â‚¬â€œ 503 Some or all of the API is unavailable. Applications should backoff on requests to the method invoked.<br>|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_access_tokens">access_tokens</h2>
<!-- backwards compatibility -->
<a id="schemaaccess_tokens"></a>
<a id="schema_access_tokens"></a>
<a id="tocSaccess_tokens"></a>
<a id="tocsaccess_tokens"></a>

```json
[
  {
    "access_token": "string",
    "account_id": 0,
    "expires_on_date": 0,
    "scope": [
      null
    ]
  }
]
```

<h2 id="tocS_account_merge">account_merge</h2>
<!-- backwards compatibility -->
<a id="schemaaccount_merge"></a>
<a id="schema_account_merge"></a>
<a id="tocSaccount_merge"></a>
<a id="tocsaccount_merge"></a>

```json
[
  {
    "merge_date": 0,
    "new_account_id": 0,
    "old_account_id": 0
  }
]
```

<h2 id="tocS_answers">answers</h2>
<!-- backwards compatibility -->
<a id="schemaanswers"></a>
<a id="schema_answers"></a>
<a id="tocSanswers"></a>
<a id="tocsanswers"></a>

```json
[
  {
    "accepted": true,
    "answer_id": 0,
    "awarded_bounty_amount": 0,
    "awarded_bounty_users": [
      null
    ],
    "body": "string",
    "body_markdown": "string",
    "can_flag": true,
    "comment_count": 0,
    "comments": [
      null
    ],
    "community_owned_date": 0,
    "creation_date": 0,
    "down_vote_count": 0,
    "downvoted": true,
    "is_accepted": true,
    "last_activity_date": 0,
    "last_edit_date": 0,
    "last_editor": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "link": "string",
    "locked_date": 0,
    "owner": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "question_id": 0,
    "score": 0,
    "share_link": "string",
    "tags": [
      null
    ],
    "title": "string",
    "up_vote_count": 0,
    "upvoted": true
  }
]
```

<h2 id="tocS_badges">badges</h2>
<!-- backwards compatibility -->
<a id="schemabadges"></a>
<a id="schema_badges"></a>
<a id="tocSbadges"></a>
<a id="tocsbadges"></a>

```json
[
  {
    "award_count": 0,
    "badge_id": 0,
    "badge_type": "string",
    "description": "string",
    "link": "string",
    "name": "string",
    "rank": "string",
    "user": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    }
  }
]
```

<h2 id="tocS_comments">comments</h2>
<!-- backwards compatibility -->
<a id="schemacomments"></a>
<a id="schema_comments"></a>
<a id="tocScomments"></a>
<a id="tocscomments"></a>

```json
[
  {
    "body": "string",
    "body_markdown": "string",
    "can_flag": true,
    "comment_id": 0,
    "creation_date": 0,
    "edited": true,
    "link": "string",
    "owner": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "post_id": 0,
    "post_type": "string",
    "reply_to_user": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "score": 0,
    "upvoted": true
  }
]
```

<h2 id="tocS_created_comment">created_comment</h2>
<!-- backwards compatibility -->
<a id="schemacreated_comment"></a>
<a id="schema_created_comment"></a>
<a id="tocScreated_comment"></a>
<a id="tocscreated_comment"></a>

```json
{
  "body": "string",
  "body_markdown": "string",
  "can_flag": true,
  "comment_id": 0,
  "creation_date": 0,
  "edited": true,
  "link": "string",
  "owner": {
    "accept_rate": 0,
    "badge_counts": {
      "bronze": 0,
      "gold": 0,
      "silver": 0
    },
    "display_name": "string",
    "link": "string",
    "profile_image": "string",
    "reputation": 0,
    "user_id": 0,
    "user_type": "string"
  },
  "post_id": 0,
  "post_type": "string",
  "reply_to_user": {
    "accept_rate": 0,
    "badge_counts": {
      "bronze": 0,
      "gold": 0,
      "silver": 0
    },
    "display_name": "string",
    "link": "string",
    "profile_image": "string",
    "reputation": 0,
    "user_id": 0,
    "user_type": "string"
  },
  "score": 0,
  "upvoted": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|body|string|false|none|none|
|body_markdown|string|false|none|none|
|can_flag|boolean|false|none|none|
|comment_id|integer|false|none|none|
|creation_date|integer|false|none|none|
|edited|boolean|false|none|none|
|link|string|false|none|none|
|owner|object|false|none|none|
|post_id|integer|false|none|none|
|post_type|string|false|none|none|
|reply_to_user|object|false|none|none|
|score|integer|false|none|none|
|upvoted|boolean|false|none|none|

<h2 id="tocS_error">error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "error_id": 0,
  "error_message": "string",
  "error_name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|error_id|number|false|none|none|
|error_message|string|false|none|none|
|error_name|string|false|none|none|

<h2 id="tocS_errors">errors</h2>
<!-- backwards compatibility -->
<a id="schemaerrors"></a>
<a id="schema_errors"></a>
<a id="tocSerrors"></a>
<a id="tocserrors"></a>

```json
[
  {
    "description": "string",
    "error_id": 0,
    "error_name": "string"
  }
]
```

<h2 id="tocS_events">events</h2>
<!-- backwards compatibility -->
<a id="schemaevents"></a>
<a id="schema_events"></a>
<a id="tocSevents"></a>
<a id="tocsevents"></a>

```json
[
  {
    "creation_date": 0,
    "event_type": "string",
    "excerpt": "string",
    "link": "string",
    "the id of the object (answer, comment, question, or user) the event describes": 0
  }
]
```

<h2 id="tocS_filters">filters</h2>
<!-- backwards compatibility -->
<a id="schemafilters"></a>
<a id="schema_filters"></a>
<a id="tocSfilters"></a>
<a id="tocsfilters"></a>

```json
[
  {
    "filter": "string",
    "filter_type": "string",
    "included_fields": [
      null
    ]
  }
]
```

<h2 id="tocS_inbox_items">inbox_items</h2>
<!-- backwards compatibility -->
<a id="schemainbox_items"></a>
<a id="schema_inbox_items"></a>
<a id="tocSinbox_items"></a>
<a id="tocsinbox_items"></a>

```json
[
  {
    "answer_id": 0,
    "body": "string",
    "comment_id": 0,
    "creation_date": 0,
    "is_unread": true,
    "item_type": "string",
    "link": "string",
    "question_id": 0,
    "site": {
      "aliases": [
        null
      ],
      "api_site_parameter": "string",
      "audience": "string",
      "closed_beta_date": 0,
      "favicon_url": "string",
      "high_resolution_icon_url": "string",
      "icon_url": "string",
      "launch_date": 0,
      "logo_url": "string",
      "markdown_extensions": [
        null
      ],
      "name": "string",
      "open_beta_date": 0,
      "related_sites": [
        null
      ],
      "site_state": "string",
      "site_type": "string",
      "site_url": "string",
      "styling": {
        "link_color": "string",
        "tag_background_color": "string",
        "tag_foreground_color": "string"
      },
      "twitter_account": "string"
    },
    "title": "string"
  }
]
```

<h2 id="tocS_info_object">info_object</h2>
<!-- backwards compatibility -->
<a id="schemainfo_object"></a>
<a id="schema_info_object"></a>
<a id="tocSinfo_object"></a>
<a id="tocsinfo_object"></a>

```json
{
  "answers_per_minute": 0,
  "api_revision": "string",
  "badges_per_minute": 0,
  "new_active_users": 0,
  "questions_per_minute": 0,
  "site": {
    "aliases": [
      null
    ],
    "api_site_parameter": "string",
    "audience": "string",
    "closed_beta_date": 0,
    "favicon_url": "string",
    "high_resolution_icon_url": "string",
    "icon_url": "string",
    "launch_date": 0,
    "logo_url": "string",
    "markdown_extensions": [
      null
    ],
    "name": "string",
    "open_beta_date": 0,
    "related_sites": [
      null
    ],
    "site_state": "string",
    "site_type": "string",
    "site_url": "string",
    "styling": {
      "link_color": "string",
      "tag_background_color": "string",
      "tag_foreground_color": "string"
    },
    "twitter_account": "string"
  },
  "total_accepted": 0,
  "total_answers": 0,
  "total_badges": 0,
  "total_comments": 0,
  "total_questions": 0,
  "total_unanswered": 0,
  "total_users": 0,
  "total_votes": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|answers_per_minute|number|false|none|none|
|api_revision|string|false|none|none|
|badges_per_minute|number|false|none|none|
|new_active_users|integer|false|none|none|
|questions_per_minute|number|false|none|none|
|site|object|false|none|none|
|total_accepted|integer|false|none|none|
|total_answers|integer|false|none|none|
|total_badges|integer|false|none|none|
|total_comments|integer|false|none|none|
|total_questions|integer|false|none|none|
|total_unanswered|integer|false|none|none|
|total_users|integer|false|none|none|
|total_votes|integer|false|none|none|

<h2 id="tocS_network_users">network_users</h2>
<!-- backwards compatibility -->
<a id="schemanetwork_users"></a>
<a id="schema_network_users"></a>
<a id="tocSnetwork_users"></a>
<a id="tocsnetwork_users"></a>

```json
[
  {
    "account_id": 0,
    "answer_count": 0,
    "badge_counts": {
      "bronze": 0,
      "gold": 0,
      "silver": 0
    },
    "creation_date": 0,
    "last_access_date": 0,
    "question_count": 0,
    "reputation": 0,
    "site_name": "string",
    "site_url": "string",
    "top_answers": [
      null
    ],
    "top_questions": [
      null
    ],
    "user_id": 0,
    "user_type": "string"
  }
]
```

<h2 id="tocS_notifications">notifications</h2>
<!-- backwards compatibility -->
<a id="schemanotifications"></a>
<a id="schema_notifications"></a>
<a id="tocSnotifications"></a>
<a id="tocsnotifications"></a>

```json
[
  {
    "body": "string",
    "creation_date": 0,
    "is_unread": true,
    "notification_type": "string",
    "post_id": 0,
    "site": {
      "aliases": [
        null
      ],
      "api_site_parameter": "string",
      "audience": "string",
      "closed_beta_date": 0,
      "favicon_url": "string",
      "high_resolution_icon_url": "string",
      "icon_url": "string",
      "launch_date": 0,
      "logo_url": "string",
      "markdown_extensions": [
        null
      ],
      "name": "string",
      "open_beta_date": 0,
      "related_sites": [
        null
      ],
      "site_state": "string",
      "site_type": "string",
      "site_url": "string",
      "styling": {
        "link_color": "string",
        "tag_background_color": "string",
        "tag_foreground_color": "string"
      },
      "twitter_account": "string"
    }
  }
]
```

<h2 id="tocS_posts">posts</h2>
<!-- backwards compatibility -->
<a id="schemaposts"></a>
<a id="schema_posts"></a>
<a id="tocSposts"></a>
<a id="tocsposts"></a>

```json
[
  {
    "body": "string",
    "body_markdown": "string",
    "comment_count": 0,
    "comments": [
      null
    ],
    "creation_date": 0,
    "down_vote_count": 0,
    "downvoted": true,
    "last_activity_date": 0,
    "last_edit_date": 0,
    "last_editor": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "link": "string",
    "owner": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "post_id": 0,
    "post_type": "string",
    "score": 0,
    "share_link": "string",
    "title": "string",
    "up_vote_count": 0,
    "upvoted": true
  }
]
```

<h2 id="tocS_privileges">privileges</h2>
<!-- backwards compatibility -->
<a id="schemaprivileges"></a>
<a id="schema_privileges"></a>
<a id="tocSprivileges"></a>
<a id="tocsprivileges"></a>

```json
[
  {
    "description": "string",
    "reputation": 0,
    "short_description": "string"
  }
]
```

<h2 id="tocS_question_timeline_events">question_timeline_events</h2>
<!-- backwards compatibility -->
<a id="schemaquestion_timeline_events"></a>
<a id="schema_question_timeline_events"></a>
<a id="tocSquestion_timeline_events"></a>
<a id="tocsquestion_timeline_events"></a>

```json
[
  {
    "comment_id": 0,
    "creation_date": 0,
    "down_vote_count": 0,
    "owner": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "post_id": 0,
    "question_id": 0,
    "revision_guid": "string",
    "timeline_type": "string",
    "up_vote_count": 0,
    "user": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    }
  }
]
```

<h2 id="tocS_questions">questions</h2>
<!-- backwards compatibility -->
<a id="schemaquestions"></a>
<a id="schema_questions"></a>
<a id="tocSquestions"></a>
<a id="tocsquestions"></a>

```json
[
  {
    "accepted_answer_id": 0,
    "answer_count": 0,
    "answers": [
      null
    ],
    "body": "string",
    "body_markdown": "string",
    "bounty_amount": 0,
    "bounty_closes_date": 0,
    "bounty_user": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "can_close": true,
    "can_flag": true,
    "close_vote_count": 0,
    "closed_date": 0,
    "closed_details": {
      "by_users": [
        null
      ],
      "description": "string",
      "on_hold": true,
      "original_questions": [
        null
      ],
      "reason": "string"
    },
    "closed_reason": "string",
    "comment_count": 0,
    "comments": [
      null
    ],
    "community_owned_date": 0,
    "creation_date": 0,
    "delete_vote_count": 0,
    "down_vote_count": 0,
    "downvoted": true,
    "favorite_count": 0,
    "favorited": true,
    "is_answered": true,
    "last_activity_date": 0,
    "last_edit_date": 0,
    "last_editor": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "link": "string",
    "locked_date": 0,
    "migrated_from": {
      "on_date": 0,
      "other_site": {
        "aliases": [
          null
        ],
        "api_site_parameter": "string",
        "audience": "string",
        "closed_beta_date": 0,
        "favicon_url": "string",
        "high_resolution_icon_url": "string",
        "icon_url": "string",
        "launch_date": 0,
        "logo_url": "string",
        "markdown_extensions": [
          null
        ],
        "name": "string",
        "open_beta_date": 0,
        "related_sites": [
          null
        ],
        "site_state": "string",
        "site_type": "string",
        "site_url": "string",
        "styling": {
          "link_color": "string",
          "tag_background_color": "string",
          "tag_foreground_color": "string"
        },
        "twitter_account": "string"
      },
      "question_id": 0
    },
    "migrated_to": {
      "on_date": 0,
      "other_site": {
        "aliases": [
          null
        ],
        "api_site_parameter": "string",
        "audience": "string",
        "closed_beta_date": 0,
        "favicon_url": "string",
        "high_resolution_icon_url": "string",
        "icon_url": "string",
        "launch_date": 0,
        "logo_url": "string",
        "markdown_extensions": [
          null
        ],
        "name": "string",
        "open_beta_date": 0,
        "related_sites": [
          null
        ],
        "site_state": "string",
        "site_type": "string",
        "site_url": "string",
        "styling": {
          "link_color": "string",
          "tag_background_color": "string",
          "tag_foreground_color": "string"
        },
        "twitter_account": "string"
      },
      "question_id": 0
    },
    "notice": {
      "body": "string",
      "creation_date": 0,
      "owner_user_id": 0
    },
    "owner": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "protected_date": 0,
    "question_id": 0,
    "reopen_vote_count": 0,
    "score": 0,
    "share_link": "string",
    "tags": [
      null
    ],
    "title": "string",
    "up_vote_count": 0,
    "upvoted": true,
    "view_count": 0
  }
]
```

<h2 id="tocS_reputation_changes">reputation_changes</h2>
<!-- backwards compatibility -->
<a id="schemareputation_changes"></a>
<a id="schema_reputation_changes"></a>
<a id="tocSreputation_changes"></a>
<a id="tocsreputation_changes"></a>

```json
[
  {
    "link": "string",
    "on_date": 0,
    "post_id": 0,
    "post_type": "string",
    "reputation_change": 0,
    "title": "string",
    "user_id": 0,
    "vote_type": "string"
  }
]
```

<h2 id="tocS_reputation_history">reputation_history</h2>
<!-- backwards compatibility -->
<a id="schemareputation_history"></a>
<a id="schema_reputation_history"></a>
<a id="tocSreputation_history"></a>
<a id="tocsreputation_history"></a>

```json
[
  {
    "creation_date": 0,
    "post_id": 0,
    "reputation_change": 0,
    "reputation_history_type": "string",
    "user_id": 0
  }
]
```

<h2 id="tocS_reputation_objects">reputation_objects</h2>
<!-- backwards compatibility -->
<a id="schemareputation_objects"></a>
<a id="schema_reputation_objects"></a>
<a id="tocSreputation_objects"></a>
<a id="tocsreputation_objects"></a>

```json
[
  {
    "link": "string",
    "on_date": 0,
    "post_id": 0,
    "post_type": "string",
    "reputation_change": 0,
    "title": "string",
    "user_id": 0,
    "vote_type": "string"
  }
]
```

<h2 id="tocS_revisions">revisions</h2>
<!-- backwards compatibility -->
<a id="schemarevisions"></a>
<a id="schema_revisions"></a>
<a id="tocSrevisions"></a>
<a id="tocsrevisions"></a>

```json
[
  {
    "body": "string",
    "comment": "string",
    "creation_date": 0,
    "is_rollback": true,
    "last_body": "string",
    "last_tags": [
      null
    ],
    "last_title": "string",
    "post_id": 0,
    "post_type": "string",
    "revision_guid": "string",
    "revision_number": 0,
    "revision_type": "string",
    "set_community_wiki": true,
    "tags": [
      null
    ],
    "title": "string",
    "user": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    }
  }
]
```

<h2 id="tocS_single_filter">single_filter</h2>
<!-- backwards compatibility -->
<a id="schemasingle_filter"></a>
<a id="schema_single_filter"></a>
<a id="tocSsingle_filter"></a>
<a id="tocssingle_filter"></a>

```json
{
  "filter": "string",
  "filter_type": "string",
  "included_fields": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|filter|string|false|none|none|
|filter_type|string|false|none|none|
|included_fields|[object]|false|none|none|

<h2 id="tocS_sites">sites</h2>
<!-- backwards compatibility -->
<a id="schemasites"></a>
<a id="schema_sites"></a>
<a id="tocSsites"></a>
<a id="tocssites"></a>

```json
[
  {
    "aliases": [
      null
    ],
    "api_site_parameter": "string",
    "audience": "string",
    "closed_beta_date": 0,
    "favicon_url": "string",
    "high_resolution_icon_url": "string",
    "icon_url": "string",
    "launch_date": 0,
    "logo_url": "string",
    "markdown_extensions": [
      null
    ],
    "name": "string",
    "open_beta_date": 0,
    "related_sites": [
      null
    ],
    "site_state": "string",
    "site_type": "string",
    "site_url": "string",
    "styling": {
      "link_color": "string",
      "tag_background_color": "string",
      "tag_foreground_color": "string"
    },
    "twitter_account": "string"
  }
]
```

<h2 id="tocS_suggested-edits">suggested-edits</h2>
<!-- backwards compatibility -->
<a id="schemasuggested-edits"></a>
<a id="schema_suggested-edits"></a>
<a id="tocSsuggested-edits"></a>
<a id="tocssuggested-edits"></a>

```json
[
  {
    "approval_date": 0,
    "body": "string",
    "comment": "string",
    "creation_date": 0,
    "post_id": 0,
    "post_type": "string",
    "proposing_user": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "rejection_date": 0,
    "suggested_edit_id": 0,
    "tags": [
      null
    ],
    "title": "string"
  }
]
```

<h2 id="tocS_tag_score_objects">tag_score_objects</h2>
<!-- backwards compatibility -->
<a id="schematag_score_objects"></a>
<a id="schema_tag_score_objects"></a>
<a id="tocStag_score_objects"></a>
<a id="tocstag_score_objects"></a>

```json
[
  {
    "post_count": 0,
    "score": 0,
    "user": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    }
  }
]
```

<h2 id="tocS_tag_synonyms">tag_synonyms</h2>
<!-- backwards compatibility -->
<a id="schematag_synonyms"></a>
<a id="schema_tag_synonyms"></a>
<a id="tocStag_synonyms"></a>
<a id="tocstag_synonyms"></a>

```json
[
  {
    "applied_count": 0,
    "creation_date": 0,
    "from_tag": "string",
    "last_applied_date": 0,
    "to_tag": "string"
  }
]
```

<h2 id="tocS_tag_wikis">tag_wikis</h2>
<!-- backwards compatibility -->
<a id="schematag_wikis"></a>
<a id="schema_tag_wikis"></a>
<a id="tocStag_wikis"></a>
<a id="tocstag_wikis"></a>

```json
[
  {
    "body": "string",
    "body_last_edit_date": 0,
    "excerpt": "string",
    "excerpt_last_edit_date": 0,
    "last_body_editor": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "last_excerpt_editor": {
      "accept_rate": 0,
      "badge_counts": {
        "bronze": 0,
        "gold": 0,
        "silver": 0
      },
      "display_name": "string",
      "link": "string",
      "profile_image": "string",
      "reputation": 0,
      "user_id": 0,
      "user_type": "string"
    },
    "tag_name": "string"
  }
]
```

<h2 id="tocS_tags">tags</h2>
<!-- backwards compatibility -->
<a id="schematags"></a>
<a id="schema_tags"></a>
<a id="tocStags"></a>
<a id="tocstags"></a>

```json
[
  {
    "count": 0,
    "has_synonyms": true,
    "is_moderator_only": true,
    "is_required": true,
    "last_activity_date": 0,
    "name": "string",
    "synonyms": [
      null
    ],
    "user_id": 0
  }
]
```

<h2 id="tocS_top_tag_objects">top_tag_objects</h2>
<!-- backwards compatibility -->
<a id="schematop_tag_objects"></a>
<a id="schema_top_tag_objects"></a>
<a id="tocStop_tag_objects"></a>
<a id="tocstop_tag_objects"></a>

```json
[
  {
    "answer_count": 0,
    "answer_score": 0,
    "question_count": 0,
    "question_score": 0,
    "tag_name": "string",
    "user_id": 0
  }
]
```

<h2 id="tocS_user">user</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_user"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "about_me": "string",
  "accept_rate": 0,
  "account_id": 0,
  "age": 0,
  "answer_count": 0,
  "badge_counts": {
    "bronze": 0,
    "gold": 0,
    "silver": 0
  },
  "creation_date": 0,
  "display_name": "string",
  "down_vote_count": 0,
  "is_employee": true,
  "last_access_date": 0,
  "last_modified_date": 0,
  "link": "string",
  "location": "string",
  "profile_image": "string",
  "question_count": 0,
  "reputation": 0,
  "reputation_change_day": 0,
  "reputation_change_month": 0,
  "reputation_change_quarter": 0,
  "reputation_change_week": 0,
  "reputation_change_year": 0,
  "timed_penalty_date": 0,
  "up_vote_count": 0,
  "user_id": 0,
  "user_type": "string",
  "view_count": 0,
  "website_url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about_me|string|false|none|none|
|accept_rate|integer|false|none|none|
|account_id|integer|false|none|none|
|age|integer|false|none|none|
|answer_count|integer|false|none|none|
|badge_counts|object|false|none|none|
|creation_date|integer|false|none|none|
|display_name|string|false|none|none|
|down_vote_count|integer|false|none|none|
|is_employee|boolean|false|none|none|
|last_access_date|integer|false|none|none|
|last_modified_date|integer|false|none|none|
|link|string|false|none|none|
|location|string|false|none|none|
|profile_image|string|false|none|none|
|question_count|integer|false|none|none|
|reputation|integer|false|none|none|
|reputation_change_day|integer|false|none|none|
|reputation_change_month|integer|false|none|none|
|reputation_change_quarter|integer|false|none|none|
|reputation_change_week|integer|false|none|none|
|reputation_change_year|integer|false|none|none|
|timed_penalty_date|integer|false|none|none|
|up_vote_count|integer|false|none|none|
|user_id|integer|false|none|none|
|user_type|string|false|none|none|
|view_count|integer|false|none|none|
|website_url|string|false|none|none|

<h2 id="tocS_user_timeline_objects">user_timeline_objects</h2>
<!-- backwards compatibility -->
<a id="schemauser_timeline_objects"></a>
<a id="schema_user_timeline_objects"></a>
<a id="tocSuser_timeline_objects"></a>
<a id="tocsuser_timeline_objects"></a>

```json
[
  {
    "badge_id": 0,
    "comment_id": 0,
    "creation_date": 0,
    "detail": "string",
    "link": "string",
    "post_id": 0,
    "post_type": "string",
    "suggested_edit_id": 0,
    "timeline_type": "string",
    "title": "string",
    "user_id": 0
  }
]
```

<h2 id="tocS_users">users</h2>
<!-- backwards compatibility -->
<a id="schemausers"></a>
<a id="schema_users"></a>
<a id="tocSusers"></a>
<a id="tocsusers"></a>

```json
[
  {
    "about_me": "string",
    "accept_rate": 0,
    "account_id": 0,
    "age": 0,
    "answer_count": 0,
    "badge_counts": {
      "bronze": 0,
      "gold": 0,
      "silver": 0
    },
    "creation_date": 0,
    "display_name": "string",
    "down_vote_count": 0,
    "is_employee": true,
    "last_access_date": 0,
    "last_modified_date": 0,
    "link": "string",
    "location": "string",
    "profile_image": "string",
    "question_count": 0,
    "reputation": 0,
    "reputation_change_day": 0,
    "reputation_change_month": 0,
    "reputation_change_quarter": 0,
    "reputation_change_week": 0,
    "reputation_change_year": 0,
    "timed_penalty_date": 0,
    "up_vote_count": 0,
    "user_id": 0,
    "user_type": "string",
    "view_count": 0,
    "website_url": "string"
  }
]
```

<h2 id="tocS_write_permissions">write_permissions</h2>
<!-- backwards compatibility -->
<a id="schemawrite_permissions"></a>
<a id="schema_write_permissions"></a>
<a id="tocSwrite_permissions"></a>
<a id="tocswrite_permissions"></a>

```json
[
  {
    "can_add": true,
    "can_delete": true,
    "can_edit": true,
    "max_daily_actions": 0,
    "min_seconds_between_actions": 0,
    "object_type": "string",
    "user_id": 0
  }
]
```
