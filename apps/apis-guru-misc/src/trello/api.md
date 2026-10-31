<h1 id="trello">Trello v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This document describes the REST API of Trello as published by Trello.com.
 - <a href='https://trello.com/docs/index.html' target='_blank'>Official Documentation</a>
 - <a href='https://trello.com/docs/api' target='_blank'>The HTML pages that were scraped in order to generate this specification.</a>

Base URLs:

* <a href="https://trello.com/1">https://trello.com/1</a>

<a href="https://trello.com/legal">Terms of service</a>
Web: <a href="https://trello.com/home">Trello</a> 
License: <a href="https://trello.com/legal">Trello : Terms of Service</a>

<a href="https://developers.trello.com">External documentation</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **key**, in: query.

* API Key (api_token)
    - Parameter Name: **token**, in: query.

<h1 id="trello-action">action</h1>

https://trello.com/docs/api/action/index.html

## getActionsByIdAction()

<a id="opIdgetActionsByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}`

<h3 id="getactionsbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|display|query|string|false| true or false|
|entities|query|string|false| true or false|
|fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|memberCreator|query|string|false| true or false|
|memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateActionsByIdAction()

<a id="opIdupdateActionsByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "string"
  }'
```

`PUT /actions/{idAction}`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="updateactionsbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[actions](#schemaactions)|true|Attributes of "Actions" to be updated.|
|» text|body|string|false|a string with a length from 1 to 16384|

<h3 id="updateactionsbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteActionsByIdAction()

<a id="opIddeleteActionsByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /actions/{idAction}`

<h3 id="deleteactionsbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteactionsbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsBoardByIdAction()

<a id="opIdgetActionsBoardByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/board?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/board`

<h3 id="getactionsboardbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsboardbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsBoardByIdActionByField()

<a id="opIdgetActionsBoardByIdActionByField"></a>

> Code samples

```bash
curl "https://example.com/actions/string/board/string?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/board/{field}`

<h3 id="getactionsboardbyidactionbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsboardbyidactionbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsCardByIdAction()

<a id="opIdgetActionsCardByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/card?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/card`

<h3 id="getactionscardbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionscardbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsCardByIdActionByField()

<a id="opIdgetActionsCardByIdActionByField"></a>

> Code samples

```bash
curl "https://example.com/actions/string/card/string?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/card/{field}`

<h3 id="getactionscardbyidactionbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionscardbyidactionbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsDisplayByIdAction()

<a id="opIdgetActionsDisplayByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/display?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/display`

<h3 id="getactionsdisplaybyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsdisplaybyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsEntitiesByIdAction()

<a id="opIdgetActionsEntitiesByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/entities?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/entities`

<h3 id="getactionsentitiesbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsentitiesbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsListByIdAction()

<a id="opIdgetActionsListByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/list?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/list`

<h3 id="getactionslistbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionslistbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsListByIdActionByField()

<a id="opIdgetActionsListByIdActionByField"></a>

> Code samples

```bash
curl "https://example.com/actions/string/list/string?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/list/{field}`

<h3 id="getactionslistbyidactionbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionslistbyidactionbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsMemberByIdAction()

<a id="opIdgetActionsMemberByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/member?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/member`

<h3 id="getactionsmemberbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|fields|query|string|false|all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsmemberbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsMemberByIdActionByField()

<a id="opIdgetActionsMemberByIdActionByField"></a>

> Code samples

```bash
curl "https://example.com/actions/string/member/string?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/member/{field}`

<h3 id="getactionsmemberbyidactionbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsmemberbyidactionbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsMemberCreatorByIdAction()

<a id="opIdgetActionsMemberCreatorByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/memberCreator?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/memberCreator`

<h3 id="getactionsmembercreatorbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|fields|query|string|false|all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsmembercreatorbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsMemberCreatorByIdActionByField()

<a id="opIdgetActionsMemberCreatorByIdActionByField"></a>

> Code samples

```bash
curl "https://example.com/actions/string/memberCreator/string?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/memberCreator/{field}`

<h3 id="getactionsmembercreatorbyidactionbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsmembercreatorbyidactionbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsOrganizationByIdAction()

<a id="opIdgetActionsOrganizationByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/organization?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/organization`

<h3 id="getactionsorganizationbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsorganizationbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsOrganizationByIdActionByField()

<a id="opIdgetActionsOrganizationByIdActionByField"></a>

> Code samples

```bash
curl "https://example.com/actions/string/organization/string?key=string&token=string&key=${API_KEY}"
```

`GET /actions/{idAction}/organization/{field}`

<h3 id="getactionsorganizationbyidactionbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsorganizationbyidactionbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateActionsTextByIdAction()

<a id="opIdupdateActionsTextByIdAction"></a>

> Code samples

```bash
curl "https://example.com/actions/string/text?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /actions/{idAction}/text`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateactionstextbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[actions_text](#schemaactions_text)|true|Attributes of "Actions Text" to be updated.|
|» value|body|string|false|a string with a length from 1 to 16384|

<h3 id="updateactionstextbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getActionsByIdActionByField()

<a id="opIdgetActionsByIdActionByField"></a>

> Code samples

```bash
curl 'https://example.com/actions/string/string?key=string&token=string'
```

`GET /actions/{idAction}/{field}`

<h3 id="getactionsbyidactionbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|string|true|idAction|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getactionsbyidactionbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-batch">batch</h1>

https://trello.com/docs/api/batch/index.html

## getBatch()

<a id="opIdgetBatch"></a>

> Code samples

```bash
curl 'https://example.com/batch?urls=string&key=string&token=string'
```

`GET /batch`

<h3 id="getbatch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urls|query|string|true|list of API v1 GET routes, not including the version prefix|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getbatch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-board">board</h1>

https://trello.com/docs/api/board/index.html

## addBoards()

<a id="opIdaddBoards"></a>

> Code samples

```bash
curl "https://example.com/boards?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "closed": "string",
    "desc": "string",
    "idBoardSource": "string",
    "idOrganization": "string",
    "keepFromSource": "string",
    "labelNames/blue": "string",
    "labelNames/green": "string",
    "labelNames/orange": "string",
    "labelNames/purple": "string",
    "labelNames/red": "string",
    "labelNames/yellow": "string",
    "name": "string",
    "powerUps": "string",
    "prefs/background": "string",
    "prefs/calendarFeedEnabled": "string",
    "prefs/cardAging": "string",
    "prefs/cardCovers": "string",
    "prefs/comments": "string",
    "prefs/invitations": "string",
    "prefs/permissionLevel": "string",
    "prefs/selfJoin": "string",
    "prefs/voting": "string",
    "prefs_background": "string",
    "prefs_cardAging": "string",
    "prefs_cardCovers": "string",
    "prefs_comments": "string",
    "prefs_invitations": "string",
    "prefs_permissionLevel": "string",
    "prefs_selfJoin": "string",
    "prefs_voting": "string",
    "subscribed": "string"
  }'
```

`POST /boards`

> Body parameter

```json
{
  "closed": "string",
  "desc": "string",
  "idBoardSource": "string",
  "idOrganization": "string",
  "keepFromSource": "string",
  "labelNames/blue": "string",
  "labelNames/green": "string",
  "labelNames/orange": "string",
  "labelNames/purple": "string",
  "labelNames/red": "string",
  "labelNames/yellow": "string",
  "name": "string",
  "powerUps": "string",
  "prefs/background": "string",
  "prefs/calendarFeedEnabled": "string",
  "prefs/cardAging": "string",
  "prefs/cardCovers": "string",
  "prefs/comments": "string",
  "prefs/invitations": "string",
  "prefs/permissionLevel": "string",
  "prefs/selfJoin": "string",
  "prefs/voting": "string",
  "prefs_background": "string",
  "prefs_cardAging": "string",
  "prefs_cardCovers": "string",
  "prefs_comments": "string",
  "prefs_invitations": "string",
  "prefs_permissionLevel": "string",
  "prefs_selfJoin": "string",
  "prefs_voting": "string",
  "subscribed": "string"
}
```

<h3 id="addboards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards](#schemaboards)|true|Attributes of "Boards" to be added.|
|» closed|body|string|false| true or false|
|» desc|body|string|false|a string with a length from 0 to 16384|
|» idBoardSource|body|string|false|The id of the board to copy into the new board|
|» idOrganization|body|string|false|The id or name of the organization to add the board to.|
|» keepFromSource|body|string|false|Components of the source board to copy.|
|» labelNames/blue|body|string|false|a string with a length from 0 to 16384|
|» labelNames/green|body|string|false|a string with a length from 0 to 16384|
|» labelNames/orange|body|string|false|a string with a length from 0 to 16384|
|» labelNames/purple|body|string|false|a string with a length from 0 to 16384|
|» labelNames/red|body|string|false|a string with a length from 0 to 16384|
|» labelNames/yellow|body|string|false|a string with a length from 0 to 16384|
|» name|body|string|false|a string with a length from 1 to 16384|
|» powerUps|body|string|false|all or a comma-separated list of: calendar, cardAging, recap or voting|
|» prefs/background|body|string|false|A standard background name, or the id of a custom background|
|» prefs/calendarFeedEnabled|body|string|false| true or false|
|» prefs/cardAging|body|string|false|One of: pirate or regular|
|» prefs/cardCovers|body|string|false| true or false|
|» prefs/comments|body|string|false|One of: disabled, members, observers, org or public|
|» prefs/invitations|body|string|false|One of: admins or members|
|» prefs/permissionLevel|body|string|false|One of: org, private or public|
|» prefs/selfJoin|body|string|false| true or false|
|» prefs/voting|body|string|false|One of: disabled, members, observers, org or public|
|» prefs_background|body|string|false|a string with a length from 0 to 16384|
|» prefs_cardAging|body|string|false|One of: pirate or regular|
|» prefs_cardCovers|body|string|false| true or false|
|» prefs_comments|body|string|false|One of: disabled, members, observers, org or public|
|» prefs_invitations|body|string|false|One of: admins or members|
|» prefs_permissionLevel|body|string|false|One of: org, private or public|
|» prefs_selfJoin|body|string|false| true or false|
|» prefs_voting|body|string|false|One of: disabled, members, observers, org or public|
|» subscribed|body|string|false| true or false|

<h3 id="addboards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsByIdBoard()

<a id="opIdgetBoardsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}`

<h3 id="getboardsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|actions_entities|query|string|false| true or false|
|actions_display|query|string|false| true or false|
|actions_format|query|string|false|One of: count, list or minimal|
|actions_since|query|string|false|A date, null or lastView|
|actions_limit|query|string|false|a number from 0 to 1000|
|action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|action_member|query|string|false| true or false|
|action_member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|action_memberCreator|query|string|false| true or false|
|action_memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|cards|query|string|false|One of: all, closed, none, open or visible|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|card_attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|card_attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|card_checklists|query|string|false|One of: all or none|
|card_stickers|query|string|false| true or false|
|boardStars|query|string|false|One of: mine or none|
|labels|query|string|false|One of: all or none|
|label_fields|query|string|false|all or a comma-separated list of: color, idBoard, name or uses|
|labels_limit|query|string|false|a number from 0 to 1000|
|lists|query|string|false|One of: all, closed, none or open|
|list_fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|memberships|query|string|false|all or a comma-separated list of: active, admin, deactivated, me or normal|
|memberships_member|query|string|false| true or false|
|memberships_member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|members|query|string|false|One of: admins, all, none, normal or owners|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|membersInvited|query|string|false|One of: admins, all, none, normal or owners|
|membersInvited_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checklists|query|string|false|One of: all or none|
|checklist_fields|query|string|false|all or a comma-separated list of: idBoard, idCard, name or pos|
|organization|query|string|false| true or false|
|organization_fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|organization_memberships|query|string|false|all or a comma-separated list of: active, admin, deactivated, me or normal|
|myPrefs|query|string|false| true or false|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsByIdBoard()

<a id="opIdupdateBoardsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "closed": "string",
    "desc": "string",
    "idBoardSource": "string",
    "idOrganization": "string",
    "keepFromSource": "string",
    "labelNames/blue": "string",
    "labelNames/green": "string",
    "labelNames/orange": "string",
    "labelNames/purple": "string",
    "labelNames/red": "string",
    "labelNames/yellow": "string",
    "name": "string",
    "powerUps": "string",
    "prefs/background": "string",
    "prefs/calendarFeedEnabled": "string",
    "prefs/cardAging": "string",
    "prefs/cardCovers": "string",
    "prefs/comments": "string",
    "prefs/invitations": "string",
    "prefs/permissionLevel": "string",
    "prefs/selfJoin": "string",
    "prefs/voting": "string",
    "prefs_background": "string",
    "prefs_cardAging": "string",
    "prefs_cardCovers": "string",
    "prefs_comments": "string",
    "prefs_invitations": "string",
    "prefs_permissionLevel": "string",
    "prefs_selfJoin": "string",
    "prefs_voting": "string",
    "subscribed": "string"
  }'
```

`PUT /boards/{idBoard}`

> Body parameter

```json
{
  "closed": "string",
  "desc": "string",
  "idBoardSource": "string",
  "idOrganization": "string",
  "keepFromSource": "string",
  "labelNames/blue": "string",
  "labelNames/green": "string",
  "labelNames/orange": "string",
  "labelNames/purple": "string",
  "labelNames/red": "string",
  "labelNames/yellow": "string",
  "name": "string",
  "powerUps": "string",
  "prefs/background": "string",
  "prefs/calendarFeedEnabled": "string",
  "prefs/cardAging": "string",
  "prefs/cardCovers": "string",
  "prefs/comments": "string",
  "prefs/invitations": "string",
  "prefs/permissionLevel": "string",
  "prefs/selfJoin": "string",
  "prefs/voting": "string",
  "prefs_background": "string",
  "prefs_cardAging": "string",
  "prefs_cardCovers": "string",
  "prefs_comments": "string",
  "prefs_invitations": "string",
  "prefs_permissionLevel": "string",
  "prefs_selfJoin": "string",
  "prefs_voting": "string",
  "subscribed": "string"
}
```

<h3 id="updateboardsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards](#schemaboards)|true|Attributes of "Boards" to be updated.|
|» closed|body|string|false| true or false|
|» desc|body|string|false|a string with a length from 0 to 16384|
|» idBoardSource|body|string|false|The id of the board to copy into the new board|
|» idOrganization|body|string|false|The id or name of the organization to add the board to.|
|» keepFromSource|body|string|false|Components of the source board to copy.|
|» labelNames/blue|body|string|false|a string with a length from 0 to 16384|
|» labelNames/green|body|string|false|a string with a length from 0 to 16384|
|» labelNames/orange|body|string|false|a string with a length from 0 to 16384|
|» labelNames/purple|body|string|false|a string with a length from 0 to 16384|
|» labelNames/red|body|string|false|a string with a length from 0 to 16384|
|» labelNames/yellow|body|string|false|a string with a length from 0 to 16384|
|» name|body|string|false|a string with a length from 1 to 16384|
|» powerUps|body|string|false|all or a comma-separated list of: calendar, cardAging, recap or voting|
|» prefs/background|body|string|false|A standard background name, or the id of a custom background|
|» prefs/calendarFeedEnabled|body|string|false| true or false|
|» prefs/cardAging|body|string|false|One of: pirate or regular|
|» prefs/cardCovers|body|string|false| true or false|
|» prefs/comments|body|string|false|One of: disabled, members, observers, org or public|
|» prefs/invitations|body|string|false|One of: admins or members|
|» prefs/permissionLevel|body|string|false|One of: org, private or public|
|» prefs/selfJoin|body|string|false| true or false|
|» prefs/voting|body|string|false|One of: disabled, members, observers, org or public|
|» prefs_background|body|string|false|a string with a length from 0 to 16384|
|» prefs_cardAging|body|string|false|One of: pirate or regular|
|» prefs_cardCovers|body|string|false| true or false|
|» prefs_comments|body|string|false|One of: disabled, members, observers, org or public|
|» prefs_invitations|body|string|false|One of: admins or members|
|» prefs_permissionLevel|body|string|false|One of: org, private or public|
|» prefs_selfJoin|body|string|false| true or false|
|» prefs_voting|body|string|false|One of: disabled, members, observers, org or public|
|» subscribed|body|string|false| true or false|

<h3 id="updateboardsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsActionsByIdBoard()

<a id="opIdgetBoardsActionsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/actions?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/actions`

<h3 id="getboardsactionsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|entities|query|string|false| true or false|
|display|query|string|false| true or false|
|filter|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|limit|query|string|false|a number from 0 to 1000|
|format|query|string|false|One of: count, list or minimal|
|since|query|string|false|A date, null or lastView|
|before|query|string|false|A date, or null|
|page|query|string|false|Page * limit must be less than 1000|
|idModels|query|string|false|Only return actions related to these model ids|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|memberCreator|query|string|false| true or false|
|memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsactionsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsBoardStarsByIdBoard()

<a id="opIdgetBoardsBoardStarsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/boardStars?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/boardStars`

<h3 id="getboardsboardstarsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|filter|query|string|false|One of: mine or none|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsboardstarsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addBoardsCalendarKeyGenerateByIdBoard()

<a id="opIdaddBoardsCalendarKeyGenerateByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/calendarKey/generate?key=string&token=string&key=${API_KEY}" \
  -X POST
```

`POST /boards/{idBoard}/calendarKey/generate`

<h3 id="addboardscalendarkeygeneratebyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="addboardscalendarkeygeneratebyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsCardsByIdBoard()

<a id="opIdgetBoardsCardsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/cards?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/cards`

<h3 id="getboardscardsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|stickers|query|string|false| true or false|
|members|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checkItemStates|query|string|false| true or false|
|checklists|query|string|false|One of: all or none|
|limit|query|string|false|a number from 1 to 1000|
|since|query|string|false|A date, or null|
|before|query|string|false|A date, or null|
|filter|query|string|false|One of: all, closed, none, open or visible|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardscardsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsCardsByIdBoardByFilter()

<a id="opIdgetBoardsCardsByIdBoardByFilter"></a>

> Code samples

```bash
curl 'https://example.com/boards/string/cards/string?key=string&token=string'
```

`GET /boards/{idBoard}/cards/{filter}`

<h3 id="getboardscardsbyidboardbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardscardsbyidboardbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## getBoardsCardsByIdBoardByIdCard()

<a id="opIdgetBoardsCardsByIdBoardByIdCard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/cards/string?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/cards/{idCard}`

<h3 id="getboardscardsbyidboardbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|idCard|path|string|true|idCard|
|attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|actions_entities|query|string|false| true or false|
|actions_display|query|string|false| true or false|
|actions_limit|query|string|false|a number from 0 to 1000|
|action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|action_memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|members|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checkItemStates|query|string|false| true or false|
|checkItemState_fields|query|string|false|all or a comma-separated list of: idCheckItem or state|
|labels|query|string|false| true or false|
|checklists|query|string|false|One of: all or none|
|checklist_fields|query|string|false|all or a comma-separated list of: idBoard, idCard, name or pos|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardscardsbyidboardbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsChecklistsByIdBoard()

<a id="opIdgetBoardsChecklistsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/checklists?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/checklists`

<h3 id="getboardschecklistsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|cards|query|string|false|One of: all, closed, none, open or visible|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|checkItems|query|string|false|One of: all or none|
|checkItem_fields|query|string|false|all or a comma-separated list of: name, nameData, pos, state or type|
|filter|query|string|false|One of: all or none|
|fields|query|string|false|all or a comma-separated list of: idBoard, idCard, name or pos|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardschecklistsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addBoardsChecklistsByIdBoard()

<a id="opIdaddBoardsChecklistsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/checklists?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string"
  }'
```

`POST /boards/{idBoard}/checklists`

> Body parameter

```json
{
  "name": "string"
}
```

<h3 id="addboardschecklistsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_checklists](#schemaboards_checklists)|true|Attributes of "Boards Checklists" to be added.|
|» name|body|string|false|a string with a length from 1 to 16384|

<h3 id="addboardschecklistsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsClosedByIdBoard()

<a id="opIdupdateBoardsClosedByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/closed?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/closed`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsclosedbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_closed](#schemaboards_closed)|true|Attributes of "Boards Closed" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsclosedbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsDeltasByIdBoard()

<a id="opIdgetBoardsDeltasByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/deltas?tags=string&ixLastUpdate=string&key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/deltas`

<h3 id="getboardsdeltasbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|tags|query|string|true|A valid tag for subscribing|
|ixLastUpdate|query|string|true|a number from -1 to Infinity|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsdeltasbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsDescByIdBoard()

<a id="opIdupdateBoardsDescByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/desc?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/desc`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsdescbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_desc](#schemaboards_desc)|true|Attributes of "Boards Desc" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateboardsdescbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addBoardsEmailKeyGenerateByIdBoard()

<a id="opIdaddBoardsEmailKeyGenerateByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/emailKey/generate?key=string&token=string&key=${API_KEY}" \
  -X POST
```

`POST /boards/{idBoard}/emailKey/generate`

<h3 id="addboardsemailkeygeneratebyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="addboardsemailkeygeneratebyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsIdOrganizationByIdBoard()

<a id="opIdupdateBoardsIdOrganizationByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/idOrganization?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/idOrganization`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsidorganizationbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_idOrganization](#schemaboards_idorganization)|true|Attributes of "Boards Id Organization" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateboardsidorganizationbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsLabelNamesBlueByIdBoard()

<a id="opIdupdateBoardsLabelNamesBlueByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labelNames/blue?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/labelNames/blue`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardslabelnamesbluebyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labelNames_blue](#schemalabelnames_blue)|true|Attributes of "Label Names Blue" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateboardslabelnamesbluebyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsLabelNamesGreenByIdBoard()

<a id="opIdupdateBoardsLabelNamesGreenByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labelNames/green?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/labelNames/green`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardslabelnamesgreenbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labelNames_green](#schemalabelnames_green)|true|Attributes of "Label Names Green" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateboardslabelnamesgreenbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsLabelNamesOrangeByIdBoard()

<a id="opIdupdateBoardsLabelNamesOrangeByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labelNames/orange?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/labelNames/orange`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardslabelnamesorangebyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labelNames_orange](#schemalabelnames_orange)|true|Attributes of "Label Names Orange" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateboardslabelnamesorangebyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsLabelNamesPurpleByIdBoard()

<a id="opIdupdateBoardsLabelNamesPurpleByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labelNames/purple?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/labelNames/purple`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardslabelnamespurplebyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labelNames_purple](#schemalabelnames_purple)|true|Attributes of "Label Names Purple" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateboardslabelnamespurplebyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsLabelNamesRedByIdBoard()

<a id="opIdupdateBoardsLabelNamesRedByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labelNames/red?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/labelNames/red`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardslabelnamesredbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labelNames_red](#schemalabelnames_red)|true|Attributes of "Label Names Red" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateboardslabelnamesredbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsLabelNamesYellowByIdBoard()

<a id="opIdupdateBoardsLabelNamesYellowByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labelNames/yellow?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/labelNames/yellow`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardslabelnamesyellowbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labelNames_yellow](#schemalabelnames_yellow)|true|Attributes of "Label Names Yellow" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateboardslabelnamesyellowbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsLabelsByIdBoard()

<a id="opIdgetBoardsLabelsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labels?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/labels`

<h3 id="getboardslabelsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|fields|query|string|false|all or a comma-separated list of: color, idBoard, name or uses|
|limit|query|string|false|a number from 0 to 1000|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardslabelsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addBoardsLabelsByIdBoard()

<a id="opIdaddBoardsLabelsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labels?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "color": "string",
    "name": "string"
  }'
```

`POST /boards/{idBoard}/labels`

> Body parameter

```json
{
  "color": "string",
  "name": "string"
}
```

<h3 id="addboardslabelsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_labels](#schemaboards_labels)|true|Attributes of "Boards Labels" to be added.|
|» color|body|string|false|A valid label color or null|
|» name|body|string|false|a string with a length from 0 to 16384|

<h3 id="addboardslabelsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsLabelsByIdBoardByIdLabel()

<a id="opIdgetBoardsLabelsByIdBoardByIdLabel"></a>

> Code samples

```bash
curl "https://example.com/boards/string/labels/string?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/labels/{idLabel}`

<h3 id="getboardslabelsbyidboardbyidlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|idLabel|path|string|true|idLabel|
|fields|query|string|false|all or a comma-separated list of: color, idBoard, name or uses|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardslabelsbyidboardbyidlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsListsByIdBoard()

<a id="opIdgetBoardsListsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/lists?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/lists`

<h3 id="getboardslistsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|cards|query|string|false|One of: all, closed, none, open or visible|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|filter|query|string|false|One of: all, closed, none or open|
|fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardslistsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addBoardsListsByIdBoard()

<a id="opIdaddBoardsListsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/lists?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "pos": "string"
  }'
```

`POST /boards/{idBoard}/lists`

> Body parameter

```json
{
  "name": "string",
  "pos": "string"
}
```

<h3 id="addboardslistsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_lists](#schemaboards_lists)|true|Attributes of "Boards Lists" to be added.|
|» name|body|string|false|a string with a length from 1 to 16384|
|» pos|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="addboardslistsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsListsByIdBoardByFilter()

<a id="opIdgetBoardsListsByIdBoardByFilter"></a>

> Code samples

```bash
curl 'https://example.com/boards/string/lists/string?key=string&token=string'
```

`GET /boards/{idBoard}/lists/{filter}`

<h3 id="getboardslistsbyidboardbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardslistsbyidboardbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## addBoardsMarkAsViewedByIdBoard()

<a id="opIdaddBoardsMarkAsViewedByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/markAsViewed?key=string&token=string&key=${API_KEY}" \
  -X POST
```

`POST /boards/{idBoard}/markAsViewed`

<h3 id="addboardsmarkasviewedbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="addboardsmarkasviewedbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsMembersByIdBoard()

<a id="opIdgetBoardsMembersByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/members?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/members`

<h3 id="getboardsmembersbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|filter|query|string|false|One of: admins, all, none, normal or owners|
|fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|activity|query|string|false|true or false ; works for premium organizations only.|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsmembersbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMembersByIdBoard()

<a id="opIdupdateBoardsMembersByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/members?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "fullName": "string",
    "type": "string"
  }'
```

`PUT /boards/{idBoard}/members`

> Body parameter

```json
{
  "email": "string",
  "fullName": "string",
  "type": "string"
}
```

<h3 id="updateboardsmembersbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_members](#schemaboards_members)|true|Attributes of "Boards Members" to be updated.|
|» email|body|string|false|An email address|
|» fullName|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|
|» type|body|string|false|One of: admin, normal or observer|

<h3 id="updateboardsmembersbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsMembersByIdBoardByFilter()

<a id="opIdgetBoardsMembersByIdBoardByFilter"></a>

> Code samples

```bash
curl 'https://example.com/boards/string/members/string?key=string&token=string'
```

`GET /boards/{idBoard}/members/{filter}`

<h3 id="getboardsmembersbyidboardbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsmembersbyidboardbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateBoardsMembersByIdBoardByIdMember()

<a id="opIdupdateBoardsMembersByIdBoardByIdMember"></a>

> Code samples

```bash
curl "https://example.com/boards/string/members/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "fullName": "string",
    "type": "string"
  }'
```

`PUT /boards/{idBoard}/members/{idMember}`

> Body parameter

```json
{
  "email": "string",
  "fullName": "string",
  "type": "string"
}
```

<h3 id="updateboardsmembersbyidboardbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|idMember|path|string|true|idMember|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_members](#schemaboards_members)|true|Attributes of "Boards Members" to be updated.|
|» email|body|string|false|An email address|
|» fullName|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|
|» type|body|string|false|One of: admin, normal or observer|

<h3 id="updateboardsmembersbyidboardbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteBoardsMembersByIdBoardByIdMember()

<a id="opIddeleteBoardsMembersByIdBoardByIdMember"></a>

> Code samples

```bash
curl "https://example.com/boards/string/members/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /boards/{idBoard}/members/{idMember}`

<h3 id="deleteboardsmembersbyidboardbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|idMember|path|string|true|idMember|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteboardsmembersbyidboardbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsMembersCardsByIdBoardByIdMember()

<a id="opIdgetBoardsMembersCardsByIdBoardByIdMember"></a>

> Code samples

```bash
curl "https://example.com/boards/string/members/string/cards?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/members/{idMember}/cards`

<h3 id="getboardsmemberscardsbyidboardbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|idMember|path|string|true|idMember|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|members|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checkItemStates|query|string|false| true or false|
|checklists|query|string|false|One of: all or none|
|board|query|string|false| true or false|
|board_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|list|query|string|false| true or false|
|list_fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|filter|query|string|false|One of: all, closed, none, open or visible|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsmemberscardsbyidboardbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsMembersInvitedByIdBoard()

<a id="opIdgetBoardsMembersInvitedByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/membersInvited?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/membersInvited`

<h3 id="getboardsmembersinvitedbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|fields|query|string|false|all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsmembersinvitedbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsMembersInvitedByIdBoardByField()

<a id="opIdgetBoardsMembersInvitedByIdBoardByField"></a>

> Code samples

```bash
curl "https://example.com/boards/string/membersInvited/string?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/membersInvited/{field}`

<h3 id="getboardsmembersinvitedbyidboardbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsmembersinvitedbyidboardbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsMembershipsByIdBoard()

<a id="opIdgetBoardsMembershipsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/memberships?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/memberships`

<h3 id="getboardsmembershipsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|filter|query|string|false|all or a comma-separated list of: active, admin, deactivated, me or normal|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsmembershipsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsMembershipsByIdBoardByIdMembership()

<a id="opIdgetBoardsMembershipsByIdBoardByIdMembership"></a>

> Code samples

```bash
curl "https://example.com/boards/string/memberships/string?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/memberships/{idMembership}`

<h3 id="getboardsmembershipsbyidboardbyidmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|idMembership|path|string|true|idMembership|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsmembershipsbyidboardbyidmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMembershipsByIdBoardByIdMembership()

<a id="opIdupdateBoardsMembershipsByIdBoardByIdMembership"></a>

> Code samples

```bash
curl "https://example.com/boards/string/memberships/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "member_fields": "string",
    "type": "string"
  }'
```

`PUT /boards/{idBoard}/memberships/{idMembership}`

> Body parameter

```json
{
  "member_fields": "string",
  "type": "string"
}
```

<h3 id="updateboardsmembershipsbyidboardbyidmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|idMembership|path|string|true|idMembership|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_memberships](#schemaboards_memberships)|true|Attributes of "Boards Memberships" to be updated.|
|» member_fields|body|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|» type|body|string|false|One of: admin, normal or observer|

<h3 id="updateboardsmembershipsbyidboardbyidmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsMyPrefsByIdBoard()

<a id="opIdgetBoardsMyPrefsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/myPrefs?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/myPrefs`

<h3 id="getboardsmyprefsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsmyprefsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMyPrefsEmailPositionByIdBoard()

<a id="opIdupdateBoardsMyPrefsEmailPositionByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/myPrefs/emailPosition?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/myPrefs/emailPosition`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsmyprefsemailpositionbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[myPrefs_emailPosition](#schemamyprefs_emailposition)|true|Attributes of "My Prefs Email Position" to be updated.|
|» value|body|string|false|One of: bottom or top|

<h3 id="updateboardsmyprefsemailpositionbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMyPrefsIdEmailListByIdBoard()

<a id="opIdupdateBoardsMyPrefsIdEmailListByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/myPrefs/idEmailList?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/myPrefs/idEmailList`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsmyprefsidemaillistbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[myPrefs_idEmailList](#schemamyprefs_idemaillist)|true|Attributes of "My Prefs Id Email List" to be updated.|
|» value|body|string|false|An id|

<h3 id="updateboardsmyprefsidemaillistbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMyPrefsShowListGuideByIdBoard()

<a id="opIdupdateBoardsMyPrefsShowListGuideByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/myPrefs/showListGuide?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/myPrefs/showListGuide`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsmyprefsshowlistguidebyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[myPrefs_showListGuide](#schemamyprefs_showlistguide)|true|Attributes of "My Prefs Show List Guide" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsmyprefsshowlistguidebyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMyPrefsShowSidebarByIdBoard()

<a id="opIdupdateBoardsMyPrefsShowSidebarByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/myPrefs/showSidebar?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/myPrefs/showSidebar`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsmyprefsshowsidebarbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[myPrefs_showSidebar](#schemamyprefs_showsidebar)|true|Attributes of "My Prefs Show Sidebar" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsmyprefsshowsidebarbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMyPrefsShowSidebarActivityByIdBoard()

<a id="opIdupdateBoardsMyPrefsShowSidebarActivityByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/myPrefs/showSidebarActivity?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/myPrefs/showSidebarActivity`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsmyprefsshowsidebaractivitybyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[myPrefs_showSidebarActivity](#schemamyprefs_showsidebaractivity)|true|Attributes of "My Prefs Show Sidebar Activity" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsmyprefsshowsidebaractivitybyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()

<a id="opIdupdateBoardsMyPrefsShowSidebarBoardActionsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/myPrefs/showSidebarBoardActions?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/myPrefs/showSidebarBoardActions`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsmyprefsshowsidebarboardactionsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[myPrefs_showSidebarBoardActions](#schemamyprefs_showsidebarboardactions)|true|Attributes of "My Prefs Show Sidebar Board Actions" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsmyprefsshowsidebarboardactionsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsMyPrefsShowSidebarMembersByIdBoard()

<a id="opIdupdateBoardsMyPrefsShowSidebarMembersByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/myPrefs/showSidebarMembers?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/myPrefs/showSidebarMembers`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsmyprefsshowsidebarmembersbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[myPrefs_showSidebarMembers](#schemamyprefs_showsidebarmembers)|true|Attributes of "My Prefs Show Sidebar Members" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsmyprefsshowsidebarmembersbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsNameByIdBoard()

<a id="opIdupdateBoardsNameByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/name?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsnamebyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_name](#schemaboards_name)|true|Attributes of "Boards Name" to be updated.|
|» value|body|string|false|a string with a length from 1 to 16384|

<h3 id="updateboardsnamebyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsOrganizationByIdBoard()

<a id="opIdgetBoardsOrganizationByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/organization?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/organization`

<h3 id="getboardsorganizationbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsorganizationbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsOrganizationByIdBoardByField()

<a id="opIdgetBoardsOrganizationByIdBoardByField"></a>

> Code samples

```bash
curl "https://example.com/boards/string/organization/string?key=string&token=string&key=${API_KEY}"
```

`GET /boards/{idBoard}/organization/{field}`

<h3 id="getboardsorganizationbyidboardbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsorganizationbyidboardbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addBoardsPowerUpsByIdBoard()

<a id="opIdaddBoardsPowerUpsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/powerUps?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`POST /boards/{idBoard}/powerUps`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="addboardspowerupsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_powerUps](#schemaboards_powerups)|true|Attributes of "Boards Power Ups" to be added.|
|» value|body|string|false|One of: calendar, cardAging, recap or voting|

<h3 id="addboardspowerupsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteBoardsPowerUpsByIdBoardByPowerUp()

<a id="opIddeleteBoardsPowerUpsByIdBoardByPowerUp"></a>

> Code samples

```bash
curl "https://example.com/boards/string/powerUps/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /boards/{idBoard}/powerUps/{powerUp}`

<h3 id="deleteboardspowerupsbyidboardbypowerup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|powerUp|path|string|true|powerUp|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteboardspowerupsbyidboardbypowerup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsBackgroundByIdBoard()

<a id="opIdupdateBoardsPrefsBackgroundByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/background?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/background`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefsbackgroundbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_background](#schemaprefs_background)|true|Attributes of "Prefs Background" to be updated.|
|» value|body|string|false|A standard background name, or the id of a custom background|

<h3 id="updateboardsprefsbackgroundbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsCalendarFeedEnabledByIdBoard()

<a id="opIdupdateBoardsPrefsCalendarFeedEnabledByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/calendarFeedEnabled?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/calendarFeedEnabled`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefscalendarfeedenabledbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_calendarFeedEnabled](#schemaprefs_calendarfeedenabled)|true|Attributes of "Prefs Calendar Feed Enabled" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsprefscalendarfeedenabledbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsCardAgingByIdBoard()

<a id="opIdupdateBoardsPrefsCardAgingByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/cardAging?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/cardAging`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefscardagingbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_cardAging](#schemaprefs_cardaging)|true|Attributes of "Prefs Card Aging" to be updated.|
|» value|body|string|false|One of: pirate or regular|

<h3 id="updateboardsprefscardagingbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsCardCoversByIdBoard()

<a id="opIdupdateBoardsPrefsCardCoversByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/cardCovers?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/cardCovers`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefscardcoversbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_cardCovers](#schemaprefs_cardcovers)|true|Attributes of "Prefs Card Covers" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsprefscardcoversbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsCommentsByIdBoard()

<a id="opIdupdateBoardsPrefsCommentsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/comments?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/comments`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefscommentsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_comments](#schemaprefs_comments)|true|Attributes of "Prefs Comments" to be updated.|
|» value|body|string|false|One of: disabled, members, observers, org or public|

<h3 id="updateboardsprefscommentsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsInvitationsByIdBoard()

<a id="opIdupdateBoardsPrefsInvitationsByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/invitations?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/invitations`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefsinvitationsbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_invitations](#schemaprefs_invitations)|true|Attributes of "Prefs Invitations" to be updated.|
|» value|body|string|false|One of: admins or members|

<h3 id="updateboardsprefsinvitationsbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsPermissionLevelByIdBoard()

<a id="opIdupdateBoardsPrefsPermissionLevelByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/permissionLevel?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/permissionLevel`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefspermissionlevelbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_permissionLevel](#schemaprefs_permissionlevel)|true|Attributes of "Prefs Permission Level" to be updated.|
|» value|body|string|false|One of: private or public|

<h3 id="updateboardsprefspermissionlevelbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsSelfJoinByIdBoard()

<a id="opIdupdateBoardsPrefsSelfJoinByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/selfJoin?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/selfJoin`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefsselfjoinbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_selfJoin](#schemaprefs_selfjoin)|true|Attributes of "Prefs Self Join" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardsprefsselfjoinbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsPrefsVotingByIdBoard()

<a id="opIdupdateBoardsPrefsVotingByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/prefs/voting?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/prefs/voting`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardsprefsvotingbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_voting](#schemaprefs_voting)|true|Attributes of "Prefs Voting" to be updated.|
|» value|body|string|false|One of: disabled, members, observers, org or public|

<h3 id="updateboardsprefsvotingbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateBoardsSubscribedByIdBoard()

<a id="opIdupdateBoardsSubscribedByIdBoard"></a>

> Code samples

```bash
curl "https://example.com/boards/string/subscribed?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /boards/{idBoard}/subscribed`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateboardssubscribedbyidboard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[boards_subscribed](#schemaboards_subscribed)|true|Attributes of "Boards Subscribed" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateboardssubscribedbyidboard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getBoardsByIdBoardByField()

<a id="opIdgetBoardsByIdBoardByField"></a>

> Code samples

```bash
curl 'https://example.com/boards/string/string?key=string&token=string'
```

`GET /boards/{idBoard}/{field}`

<h3 id="getboardsbyidboardbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idBoard|path|string|true|board_id|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getboardsbyidboardbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-card">card</h1>

https://trello.com/docs/api/card/index.html

## addCards()

<a id="opIdaddCards"></a>

> Code samples

```bash
curl "https://example.com/cards?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "closed": "string",
    "desc": "string",
    "due": "string",
    "fileSource": "string",
    "idAttachmentCover": "string",
    "idBoard": "string",
    "idCardSource": "string",
    "idLabels": "string",
    "idList": "string",
    "idMembers": "string",
    "keepFromSource": "string",
    "labels": "string",
    "name": "string",
    "pos": "string",
    "subscribed": "string",
    "urlSource": "string"
  }'
```

`POST /cards`

> Body parameter

```json
{
  "closed": "string",
  "desc": "string",
  "due": "string",
  "fileSource": "string",
  "idAttachmentCover": "string",
  "idBoard": "string",
  "idCardSource": "string",
  "idLabels": "string",
  "idList": "string",
  "idMembers": "string",
  "keepFromSource": "string",
  "labels": "string",
  "name": "string",
  "pos": "string",
  "subscribed": "string",
  "urlSource": "string"
}
```

<h3 id="addcards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards](#schemacards)|true|Attributes of "Cards" to be added.|
|» closed|body|string|false| true or false|
|» desc|body|string|false|a string with a length from 0 to 16384|
|» due|body|string|false|A date, or null|
|» fileSource|body|string|false|A file|
|» idAttachmentCover|body|string|false|Id of the image attachment of this card to use as its cover, or null for no cover|
|» idBoard|body|string|false|id of the board the card should be moved to|
|» idCardSource|body|string|false|The id of the card to copy into a new card.|
|» idLabels|body|string|false|A comma-separated list of objectIds, 24-character hex strings|
|» idList|body|string|false|id of the list that the card should be added to|
|» idMembers|body|string|false|A comma-separated list of objectIds, 24-character hex strings|
|» keepFromSource|body|string|false|Properties of the card to copy over from the source.|
|» labels|body|string|false|all or a comma-separated list of: blue, green, orange, purple, red or yellow|
|» name|body|string|false|The name of the new card.  It isn&#39;t required if the name is being copied from provided by a URL, file or card that is being copied.|
|» pos|body|string|false|A position. top , bottom , or a positive number.|
|» subscribed|body|string|false| true or false|
|» urlSource|body|string|false|A URL starting with http:// or https:// or null|

<h3 id="addcards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsByIdCard()

<a id="opIdgetCardsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}`

<h3 id="getcardsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|actions_entities|query|string|false| true or false|
|actions_display|query|string|false| true or false|
|actions_limit|query|string|false|a number from 0 to 1000|
|action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|action_memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|members|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|membersVoted|query|string|false| true or false|
|memberVoted_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checkItemStates|query|string|false| true or false|
|checkItemState_fields|query|string|false|all or a comma-separated list of: idCheckItem or state|
|checklists|query|string|false|One of: all or none|
|checklist_fields|query|string|false|all or a comma-separated list of: idBoard, idCard, name or pos|
|board|query|string|false| true or false|
|board_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|list|query|string|false| true or false|
|list_fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|stickers|query|string|false| true or false|
|sticker_fields|query|string|false|all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsByIdCard()

<a id="opIdupdateCardsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "closed": "string",
    "desc": "string",
    "due": "string",
    "fileSource": "string",
    "idAttachmentCover": "string",
    "idBoard": "string",
    "idCardSource": "string",
    "idLabels": "string",
    "idList": "string",
    "idMembers": "string",
    "keepFromSource": "string",
    "labels": "string",
    "name": "string",
    "pos": "string",
    "subscribed": "string",
    "urlSource": "string"
  }'
```

`PUT /cards/{idCard}`

> Body parameter

```json
{
  "closed": "string",
  "desc": "string",
  "due": "string",
  "fileSource": "string",
  "idAttachmentCover": "string",
  "idBoard": "string",
  "idCardSource": "string",
  "idLabels": "string",
  "idList": "string",
  "idMembers": "string",
  "keepFromSource": "string",
  "labels": "string",
  "name": "string",
  "pos": "string",
  "subscribed": "string",
  "urlSource": "string"
}
```

<h3 id="updatecardsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards](#schemacards)|true|Attributes of "Cards" to be updated.|
|» closed|body|string|false| true or false|
|» desc|body|string|false|a string with a length from 0 to 16384|
|» due|body|string|false|A date, or null|
|» fileSource|body|string|false|A file|
|» idAttachmentCover|body|string|false|Id of the image attachment of this card to use as its cover, or null for no cover|
|» idBoard|body|string|false|id of the board the card should be moved to|
|» idCardSource|body|string|false|The id of the card to copy into a new card.|
|» idLabels|body|string|false|A comma-separated list of objectIds, 24-character hex strings|
|» idList|body|string|false|id of the list that the card should be added to|
|» idMembers|body|string|false|A comma-separated list of objectIds, 24-character hex strings|
|» keepFromSource|body|string|false|Properties of the card to copy over from the source.|
|» labels|body|string|false|all or a comma-separated list of: blue, green, orange, purple, red or yellow|
|» name|body|string|false|The name of the new card.  It isn&#39;t required if the name is being copied from provided by a URL, file or card that is being copied.|
|» pos|body|string|false|A position. top , bottom , or a positive number.|
|» subscribed|body|string|false| true or false|
|» urlSource|body|string|false|A URL starting with http:// or https:// or null|

<h3 id="updatecardsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsByIdCard()

<a id="opIddeleteCardsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}`

<h3 id="deletecardsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsActionsByIdCard()

<a id="opIdgetCardsActionsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/actions?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/actions`

<h3 id="getcardsactionsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|entities|query|string|false| true or false|
|display|query|string|false| true or false|
|filter|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|limit|query|string|false|a number from 0 to 1000|
|format|query|string|false|One of: count, list or minimal|
|since|query|string|false|A date, null or lastView|
|before|query|string|false|A date, or null|
|page|query|string|false|Page * limit must be less than 1000|
|idModels|query|string|false|Only return actions related to these model ids|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|memberCreator|query|string|false| true or false|
|memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsactionsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsActionsCommentsByIdCard()

<a id="opIdaddCardsActionsCommentsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/actions/comments?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "string"
  }'
```

`POST /cards/{idCard}/actions/comments`

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="addcardsactionscommentsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[actions_comments](#schemaactions_comments)|true|Attributes of "Actions Comments" to be added.|
|» text|body|string|false|a string with a length from 1 to 16384|

<h3 id="addcardsactionscommentsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsActionsCommentsByIdCardByIdAction()

<a id="opIdupdateCardsActionsCommentsByIdCardByIdAction"></a>

> Code samples

```bash
curl "https://example.com/cards/string/actions/string/comments?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "string"
  }'
```

`PUT /cards/{idCard}/actions/{idAction}/comments`

This can only be done by the original author of the comment.

> Body parameter

```json
{
  "text": "string"
}
```

<h3 id="updatecardsactionscommentsbyidcardbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idAction|path|string|true|idAction|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_actions_comments](#schemacards_actions_comments)|true|Attributes of "Cards Actions Comments" to be updated.|
|» text|body|string|false|a string with a length from 1 to 16384|

<h3 id="updatecardsactionscommentsbyidcardbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsActionsCommentsByIdCardByIdAction()

<a id="opIddeleteCardsActionsCommentsByIdCardByIdAction"></a>

> Code samples

```bash
curl "https://example.com/cards/string/actions/string/comments?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/actions/{idAction}/comments`

This can only be done by the original author of the comment, or someone with higher permissions than the original author.

<h3 id="deletecardsactionscommentsbyidcardbyidaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idAction|path|string|true|idAction|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardsactionscommentsbyidcardbyidaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsAttachmentsByIdCard()

<a id="opIdgetCardsAttachmentsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/attachments?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/attachments`

<h3 id="getcardsattachmentsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|filter|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsattachmentsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsAttachmentsByIdCard()

<a id="opIdaddCardsAttachmentsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/attachments?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "file": "string",
    "mimeType": "string",
    "name": "string",
    "url": "string"
  }'
```

`POST /cards/{idCard}/attachments`

> Body parameter

```json
{
  "file": "string",
  "mimeType": "string",
  "name": "string",
  "url": "string"
}
```

<h3 id="addcardsattachmentsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_attachments](#schemacards_attachments)|true|Attributes of "Cards Attachments" to be added.|
|» file|body|string|false|A file|
|» mimeType|body|string|false|a string with a length from 0 to 256|
|» name|body|string|false|a string with a length from 0 to 256|
|» url|body|string|false|A URL starting with http:// or https:// or null|

<h3 id="addcardsattachmentsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsAttachmentsByIdCardByIdAttachment()

<a id="opIdgetCardsAttachmentsByIdCardByIdAttachment"></a>

> Code samples

```bash
curl "https://example.com/cards/string/attachments/string?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/attachments/{idAttachment}`

<h3 id="getcardsattachmentsbyidcardbyidattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idAttachment|path|string|true|idAttachment|
|fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsattachmentsbyidcardbyidattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsAttachmentsByIdCardByIdAttachment()

<a id="opIddeleteCardsAttachmentsByIdCardByIdAttachment"></a>

> Code samples

```bash
curl "https://example.com/cards/string/attachments/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/attachments/{idAttachment}`

<h3 id="deletecardsattachmentsbyidcardbyidattachment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idAttachment|path|string|true|idAttachment|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardsattachmentsbyidcardbyidattachment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsBoardByIdCard()

<a id="opIdgetCardsBoardByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/board?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/board`

<h3 id="getcardsboardbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsboardbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsBoardByIdCardByField()

<a id="opIdgetCardsBoardByIdCardByField"></a>

> Code samples

```bash
curl "https://example.com/cards/string/board/string?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/board/{field}`

<h3 id="getcardsboardbyidcardbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsboardbyidcardbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsCheckItemStatesByIdCard()

<a id="opIdgetCardsCheckItemStatesByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checkItemStates?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/checkItemStates`

<h3 id="getcardscheckitemstatesbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|fields|query|string|false|all or a comma-separated list of: idCheckItem or state|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardscheckitemstatesbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()

<a id="opIdupdateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklist/string/checkItem/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "idChecklist": "string",
    "name": "string",
    "pos": "string",
    "state": "string"
  }'
```

`PUT /cards/{idCard}/checklist/{idChecklistCurrent}/checkItem/{idCheckItem}`

> Body parameter

```json
{
  "idChecklist": "string",
  "name": "string",
  "pos": "string",
  "state": "string"
}
```

<h3 id="updatecardschecklistcheckitembyidcardbyidchecklistcurrentbyidcheckitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idChecklistCurrent|path|string|true|idChecklistCurrent|
|idCheckItem|path|string|true|idCheckItem|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_checklist_idChecklistCurrent_checkItem](#schemacards_checklist_idchecklistcurrent_checkitem)|true|Attributes of "Cards Checklist Id Checklist Current Check Item" to be updated.|
|» idChecklist|body|string|false|An id, or null|
|» name|body|string|false|a string with a length from 1 to 16384|
|» pos|body|string|false|A position. top , bottom , or a positive number.|
|» state|body|string|false|One of: complete, false, incomplete or true|

<h3 id="updatecardschecklistcheckitembyidcardbyidchecklistcurrentbyidcheckitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsChecklistCheckItemByIdCardByIdChecklist()

<a id="opIdaddCardsChecklistCheckItemByIdCardByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklist/string/checkItem?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "pos": "string"
  }'
```

`POST /cards/{idCard}/checklist/{idChecklist}/checkItem`

> Body parameter

```json
{
  "name": "string",
  "pos": "string"
}
```

<h3 id="addcardschecklistcheckitembyidcardbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idChecklist|path|string|true|idChecklist|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_checklist_checkItem](#schemacards_checklist_checkitem)|true|Attributes of "Cards Checklist Check Item" to be added.|
|» name|body|string|false|a string with a length from 1 to 16384|
|» pos|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="addcardschecklistcheckitembyidcardbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()

<a id="opIddeleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklist/string/checkItem/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}`

<h3 id="deletecardschecklistcheckitembyidcardbyidchecklistbyidcheckitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idChecklist|path|string|true|idChecklist|
|idCheckItem|path|string|true|idCheckItem|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardschecklistcheckitembyidcardbyidchecklistbyidcheckitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()

<a id="opIdaddCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklist/string/checkItem/string/convertToCard?key=string&token=string&key=${API_KEY}" \
  -X POST
```

`POST /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/convertToCard`

<h3 id="addcardschecklistcheckitemconverttocardbyidcardbyidchecklistbyidcheckitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idChecklist|path|string|true|idChecklist|
|idCheckItem|path|string|true|idCheckItem|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="addcardschecklistcheckitemconverttocardbyidcardbyidchecklistbyidcheckitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()

<a id="opIdupdateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklist/string/checkItem/string/name?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardschecklistcheckitemnamebyidcardbyidchecklistbyidcheckitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idChecklist|path|string|true|idChecklist|
|idCheckItem|path|string|true|idCheckItem|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_checklist_checkItem_name](#schemacards_checklist_checkitem_name)|true|Attributes of "Cards Checklist Check Item Name" to be updated.|
|» value|body|string|false|a string with a length from 1 to 16384|

<h3 id="updatecardschecklistcheckitemnamebyidcardbyidchecklistbyidcheckitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()

<a id="opIdupdateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklist/string/checkItem/string/pos?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/pos`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardschecklistcheckitemposbyidcardbyidchecklistbyidcheckitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idChecklist|path|string|true|idChecklist|
|idCheckItem|path|string|true|idCheckItem|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_checklist_checkItem_pos](#schemacards_checklist_checkitem_pos)|true|Attributes of "Cards Checklist Check Item Pos" to be updated.|
|» value|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="updatecardschecklistcheckitemposbyidcardbyidchecklistbyidcheckitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()

<a id="opIdupdateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklist/string/checkItem/string/state?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/state`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardschecklistcheckitemstatebyidcardbyidchecklistbyidcheckitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idChecklist|path|string|true|idChecklist|
|idCheckItem|path|string|true|idCheckItem|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_checklist_checkItem_state](#schemacards_checklist_checkitem_state)|true|Attributes of "Cards Checklist Check Item State" to be updated.|
|» value|body|string|false|One of: complete, false, incomplete or true|

<h3 id="updatecardschecklistcheckitemstatebyidcardbyidchecklistbyidcheckitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsChecklistsByIdCard()

<a id="opIdgetCardsChecklistsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklists?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/checklists`

<h3 id="getcardschecklistsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|cards|query|string|false|One of: all, closed, none, open or visible|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|checkItems|query|string|false|One of: all or none|
|checkItem_fields|query|string|false|all or a comma-separated list of: name, nameData, pos, state or type|
|filter|query|string|false|One of: all or none|
|fields|query|string|false|all or a comma-separated list of: idBoard, idCard, name or pos|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardschecklistsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsChecklistsByIdCard()

<a id="opIdaddCardsChecklistsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklists?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "idChecklistSource": "string",
    "name": "string",
    "value": "string"
  }'
```

`POST /cards/{idCard}/checklists`

> Body parameter

```json
{
  "idChecklistSource": "string",
  "name": "string",
  "value": "string"
}
```

<h3 id="addcardschecklistsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_checklists](#schemacards_checklists)|true|Attributes of "Cards Checklists" to be added.|
|» idChecklistSource|body|string|false|The id of the source checklist to copy into a new checklist.|
|» name|body|string|false|a string with a length from 0 to 16384|
|» value|body|string|false|The id of the checklist to add to the card, or null to create a new one.|

<h3 id="addcardschecklistsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsChecklistsByIdCardByIdChecklist()

<a id="opIddeleteCardsChecklistsByIdCardByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/cards/string/checklists/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/checklists/{idChecklist}`

<h3 id="deletecardschecklistsbyidcardbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idChecklist|path|string|true|idChecklist|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardschecklistsbyidcardbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsClosedByIdCard()

<a id="opIdupdateCardsClosedByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/closed?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/closed`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardsclosedbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_closed](#schemacards_closed)|true|Attributes of "Cards Closed" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updatecardsclosedbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsDescByIdCard()

<a id="opIdupdateCardsDescByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/desc?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/desc`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardsdescbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_desc](#schemacards_desc)|true|Attributes of "Cards Desc" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updatecardsdescbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsDueByIdCard()

<a id="opIdupdateCardsDueByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/due?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/due`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardsduebyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_due](#schemacards_due)|true|Attributes of "Cards Due" to be updated.|
|» value|body|string|false|A date, or null|

<h3 id="updatecardsduebyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsIdAttachmentCoverByIdCard()

<a id="opIdupdateCardsIdAttachmentCoverByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/idAttachmentCover?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/idAttachmentCover`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardsidattachmentcoverbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_idAttachmentCover](#schemacards_idattachmentcover)|true|Attributes of "Cards Id Attachment Cover" to be updated.|
|» value|body|string|false|Id of the image attachment of this card to use as its cover, or null for no cover|

<h3 id="updatecardsidattachmentcoverbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsIdBoardByIdCard()

<a id="opIdupdateCardsIdBoardByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/idBoard?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "idList": "string",
    "value": "string"
  }'
```

`PUT /cards/{idCard}/idBoard`

> Body parameter

```json
{
  "idList": "string",
  "value": "string"
}
```

<h3 id="updatecardsidboardbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_idBoard](#schemacards_idboard)|true|Attributes of "Cards Id Board" to be updated.|
|» idList|body|string|false|id of the list that the card should be moved to on the new board|
|» value|body|string|false|id of the board the card should be moved to|

<h3 id="updatecardsidboardbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsIdLabelsByIdCard()

<a id="opIdaddCardsIdLabelsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/idLabels?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`POST /cards/{idCard}/idLabels`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="addcardsidlabelsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_idLabels](#schemacards_idlabels)|true|Attributes of "Cards Id Labels" to be added.|
|» value|body|string|false|The id of the label to add|

<h3 id="addcardsidlabelsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsIdLabelsByIdCardByIdLabel()

<a id="opIddeleteCardsIdLabelsByIdCardByIdLabel"></a>

> Code samples

```bash
curl "https://example.com/cards/string/idLabels/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/idLabels/{idLabel}`

<h3 id="deletecardsidlabelsbyidcardbyidlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idLabel|path|string|true|idLabel|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardsidlabelsbyidcardbyidlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsIdListByIdCard()

<a id="opIdupdateCardsIdListByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/idList?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/idList`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardsidlistbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_idList](#schemacards_idlist)|true|Attributes of "Cards Id List" to be updated.|
|» value|body|string|false|id of the list the card should be moved to|

<h3 id="updatecardsidlistbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsIdMembersByIdCard()

<a id="opIdupdateCardsIdMembersByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/idMembers?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/idMembers`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardsidmembersbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_idMembers](#schemacards_idmembers)|true|Attributes of "Cards Id Members" to be updated.|
|» value|body|string|false|The id of the member to add to the card|

<h3 id="updatecardsidmembersbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsIdMembersByIdCard()

<a id="opIdaddCardsIdMembersByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/idMembers?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`POST /cards/{idCard}/idMembers`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="addcardsidmembersbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_idMembers](#schemacards_idmembers)|true|Attributes of "Cards Id Members" to be added.|
|» value|body|string|false|The id of the member to add to the card|

<h3 id="addcardsidmembersbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsIdMembersByIdCardByIdMember()

<a id="opIddeleteCardsIdMembersByIdCardByIdMember"></a>

> Code samples

```bash
curl "https://example.com/cards/string/idMembers/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/idMembers/{idMember}`

<h3 id="deletecardsidmembersbyidcardbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idMember|path|string|true|idMember|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardsidmembersbyidcardbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsLabelsByIdCard()

<a id="opIdupdateCardsLabelsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/labels?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "color": "string",
    "name": "string",
    "value": "string"
  }'
```

`PUT /cards/{idCard}/labels`

> Body parameter

```json
{
  "color": "string",
  "name": "string",
  "value": "string"
}
```

<h3 id="updatecardslabelsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_labels](#schemacards_labels)|true|Attributes of "Cards Labels" to be updated.|
|» color|body|string|false|A valid label color or null|
|» name|body|string|false|a string with a length from 0 to 16384|
|» value|body|string|false|all or a comma-separated list of: blue, green, orange, purple, red or yellow|

<h3 id="updatecardslabelsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsLabelsByIdCard()

<a id="opIdaddCardsLabelsByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/labels?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "color": "string",
    "name": "string",
    "value": "string"
  }'
```

`POST /cards/{idCard}/labels`

> Body parameter

```json
{
  "color": "string",
  "name": "string",
  "value": "string"
}
```

<h3 id="addcardslabelsbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_labels](#schemacards_labels)|true|Attributes of "Cards Labels" to be added.|
|» color|body|string|false|A valid label color or null|
|» name|body|string|false|a string with a length from 0 to 16384|
|» value|body|string|false|all or a comma-separated list of: blue, green, orange, purple, red or yellow|

<h3 id="addcardslabelsbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsLabelsByIdCardByColor()

<a id="opIddeleteCardsLabelsByIdCardByColor"></a>

> Code samples

```bash
curl "https://example.com/cards/string/labels/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/labels/{color}`

<h3 id="deletecardslabelsbyidcardbycolor-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|color|path|string|true|color|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardslabelsbyidcardbycolor-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsListByIdCard()

<a id="opIdgetCardsListByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/list?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/list`

<h3 id="getcardslistbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardslistbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsListByIdCardByField()

<a id="opIdgetCardsListByIdCardByField"></a>

> Code samples

```bash
curl "https://example.com/cards/string/list/string?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/list/{field}`

<h3 id="getcardslistbyidcardbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardslistbyidcardbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsMarkAssociatedNotificationsReadByIdCard()

<a id="opIdaddCardsMarkAssociatedNotificationsReadByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/markAssociatedNotificationsRead?key=string&token=string&key=${API_KEY}" \
  -X POST
```

`POST /cards/{idCard}/markAssociatedNotificationsRead`

<h3 id="addcardsmarkassociatednotificationsreadbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="addcardsmarkassociatednotificationsreadbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsMembersByIdCard()

<a id="opIdgetCardsMembersByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/members?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/members`

<h3 id="getcardsmembersbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsmembersbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsMembersVotedByIdCard()

<a id="opIdgetCardsMembersVotedByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/membersVoted?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/membersVoted`

<h3 id="getcardsmembersvotedbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsmembersvotedbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsMembersVotedByIdCard()

<a id="opIdaddCardsMembersVotedByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/membersVoted?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`POST /cards/{idCard}/membersVoted`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="addcardsmembersvotedbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_membersVoted](#schemacards_membersvoted)|true|Attributes of "Cards Members Voted" to be added.|
|» value|body|string|false|The id of the member to vote &#39;yes&#39; on the card|

<h3 id="addcardsmembersvotedbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsMembersVotedByIdCardByIdMember()

<a id="opIddeleteCardsMembersVotedByIdCardByIdMember"></a>

> Code samples

```bash
curl "https://example.com/cards/string/membersVoted/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/membersVoted/{idMember}`

<h3 id="deletecardsmembersvotedbyidcardbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idMember|path|string|true|idMember|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardsmembersvotedbyidcardbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsNameByIdCard()

<a id="opIdupdateCardsNameByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/name?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardsnamebyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_name](#schemacards_name)|true|Attributes of "Cards Name" to be updated.|
|» value|body|string|false|a string with a length from 1 to 16384|

<h3 id="updatecardsnamebyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsPosByIdCard()

<a id="opIdupdateCardsPosByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/pos?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/pos`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardsposbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_pos](#schemacards_pos)|true|Attributes of "Cards Pos" to be updated.|
|» value|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="updatecardsposbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsStickersByIdCard()

<a id="opIdgetCardsStickersByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/stickers?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/stickers`

<h3 id="getcardsstickersbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|fields|query|string|false|all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsstickersbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addCardsStickersByIdCard()

<a id="opIdaddCardsStickersByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/stickers?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "image": "string",
    "left": "string",
    "rotate": "string",
    "top": "string",
    "zIndex": "string"
  }'
```

`POST /cards/{idCard}/stickers`

> Body parameter

```json
{
  "image": "string",
  "left": "string",
  "rotate": "string",
  "top": "string",
  "zIndex": "string"
}
```

<h3 id="addcardsstickersbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_stickers](#schemacards_stickers)|true|Attributes of "Cards Stickers" to be added.|
|» image|body|string|false|a string with a length from 0 to 16384|
|» left|body|string|false|undefined|
|» rotate|body|string|false|undefined|
|» top|body|string|false|undefined|
|» zIndex|body|string|false|Valid Z values for stickers, must be an integer|

<h3 id="addcardsstickersbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsStickersByIdCardByIdSticker()

<a id="opIdgetCardsStickersByIdCardByIdSticker"></a>

> Code samples

```bash
curl "https://example.com/cards/string/stickers/string?key=string&token=string&key=${API_KEY}"
```

`GET /cards/{idCard}/stickers/{idSticker}`

<h3 id="getcardsstickersbyidcardbyidsticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idSticker|path|string|true|idSticker|
|fields|query|string|false|all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsstickersbyidcardbyidsticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsStickersByIdCardByIdSticker()

<a id="opIdupdateCardsStickersByIdCardByIdSticker"></a>

> Code samples

```bash
curl "https://example.com/cards/string/stickers/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "image": "string",
    "left": "string",
    "rotate": "string",
    "top": "string",
    "zIndex": "string"
  }'
```

`PUT /cards/{idCard}/stickers/{idSticker}`

> Body parameter

```json
{
  "image": "string",
  "left": "string",
  "rotate": "string",
  "top": "string",
  "zIndex": "string"
}
```

<h3 id="updatecardsstickersbyidcardbyidsticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idSticker|path|string|true|idSticker|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_stickers](#schemacards_stickers)|true|Attributes of "Cards Stickers" to be updated.|
|» image|body|string|false|a string with a length from 0 to 16384|
|» left|body|string|false|undefined|
|» rotate|body|string|false|undefined|
|» top|body|string|false|undefined|
|» zIndex|body|string|false|Valid Z values for stickers, must be an integer|

<h3 id="updatecardsstickersbyidcardbyidsticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteCardsStickersByIdCardByIdSticker()

<a id="opIddeleteCardsStickersByIdCardByIdSticker"></a>

> Code samples

```bash
curl "https://example.com/cards/string/stickers/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /cards/{idCard}/stickers/{idSticker}`

<h3 id="deletecardsstickersbyidcardbyidsticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|idSticker|path|string|true|idSticker|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletecardsstickersbyidcardbyidsticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateCardsSubscribedByIdCard()

<a id="opIdupdateCardsSubscribedByIdCard"></a>

> Code samples

```bash
curl "https://example.com/cards/string/subscribed?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /cards/{idCard}/subscribed`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatecardssubscribedbyidcard-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[cards_subscribed](#schemacards_subscribed)|true|Attributes of "Cards Subscribed" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updatecardssubscribedbyidcard-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getCardsByIdCardByField()

<a id="opIdgetCardsByIdCardByField"></a>

> Code samples

```bash
curl 'https://example.com/cards/string/string?key=string&token=string'
```

`GET /cards/{idCard}/{field}`

<h3 id="getcardsbyidcardbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|string|true|card id or shortlink|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getcardsbyidcardbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-checklist">checklist</h1>

https://trello.com/docs/api/checklist/index.html

## addChecklists()

<a id="opIdaddChecklists"></a>

> Code samples

```bash
curl "https://example.com/checklists?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "idBoard": "string",
    "idCard": "string",
    "idChecklistSource": "string",
    "name": "string",
    "pos": "string"
  }'
```

`POST /checklists`

> Body parameter

```json
{
  "idBoard": "string",
  "idCard": "string",
  "idChecklistSource": "string",
  "name": "string",
  "pos": "string"
}
```

<h3 id="addchecklists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[checklists](#schemachecklists)|true|Attributes of "Checklists" to be added.|
|» idBoard|body|string|false|id of the board that the checklist should be added to|
|» idCard|body|string|false|id of the card that the checklist should be added to|
|» idChecklistSource|body|string|false|The id of the source checklist to copy into a new checklist.|
|» name|body|string|false|a string with a length from 0 to 16384|
|» pos|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="addchecklists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getChecklistsByIdChecklist()

<a id="opIdgetChecklistsByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string?key=string&token=string&key=${API_KEY}"
```

`GET /checklists/{idChecklist}`

<h3 id="getchecklistsbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|cards|query|string|false|One of: all, closed, none, open or visible|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|checkItems|query|string|false|One of: all or none|
|checkItem_fields|query|string|false|all or a comma-separated list of: name, nameData, pos, state or type|
|fields|query|string|false|all or a comma-separated list of: idBoard, idCard, name or pos|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getchecklistsbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateChecklistsByIdChecklist()

<a id="opIdupdateChecklistsByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "idBoard": "string",
    "idCard": "string",
    "idChecklistSource": "string",
    "name": "string",
    "pos": "string"
  }'
```

`PUT /checklists/{idChecklist}`

> Body parameter

```json
{
  "idBoard": "string",
  "idCard": "string",
  "idChecklistSource": "string",
  "name": "string",
  "pos": "string"
}
```

<h3 id="updatechecklistsbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[checklists](#schemachecklists)|true|Attributes of "Checklists" to be updated.|
|» idBoard|body|string|false|id of the board that the checklist should be added to|
|» idCard|body|string|false|id of the card that the checklist should be added to|
|» idChecklistSource|body|string|false|The id of the source checklist to copy into a new checklist.|
|» name|body|string|false|a string with a length from 0 to 16384|
|» pos|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="updatechecklistsbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteChecklistsByIdChecklist()

<a id="opIddeleteChecklistsByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /checklists/{idChecklist}`

<h3 id="deletechecklistsbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletechecklistsbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getChecklistsBoardByIdChecklist()

<a id="opIdgetChecklistsBoardByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/board?key=string&token=string&key=${API_KEY}"
```

`GET /checklists/{idChecklist}/board`

<h3 id="getchecklistsboardbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getchecklistsboardbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getChecklistsBoardByIdChecklistByField()

<a id="opIdgetChecklistsBoardByIdChecklistByField"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/board/string?key=string&token=string&key=${API_KEY}"
```

`GET /checklists/{idChecklist}/board/{field}`

<h3 id="getchecklistsboardbyidchecklistbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getchecklistsboardbyidchecklistbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getChecklistsCardsByIdChecklist()

<a id="opIdgetChecklistsCardsByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/cards?key=string&token=string&key=${API_KEY}"
```

`GET /checklists/{idChecklist}/cards`

<h3 id="getchecklistscardsbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|stickers|query|string|false| true or false|
|members|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checkItemStates|query|string|false| true or false|
|checklists|query|string|false|One of: all or none|
|limit|query|string|false|a number from 1 to 1000|
|since|query|string|false|A date, or null|
|before|query|string|false|A date, or null|
|filter|query|string|false|One of: all, closed, none or open|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getchecklistscardsbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getChecklistsCardsByIdChecklistByFilter()

<a id="opIdgetChecklistsCardsByIdChecklistByFilter"></a>

> Code samples

```bash
curl 'https://example.com/checklists/string/cards/string?key=string&token=string'
```

`GET /checklists/{idChecklist}/cards/{filter}`

<h3 id="getchecklistscardsbyidchecklistbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getchecklistscardsbyidchecklistbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## getChecklistsCheckItemsByIdChecklist()

<a id="opIdgetChecklistsCheckItemsByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/checkItems?key=string&token=string&key=${API_KEY}"
```

`GET /checklists/{idChecklist}/checkItems`

<h3 id="getchecklistscheckitemsbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|filter|query|string|false|One of: all or none|
|fields|query|string|false|all or a comma-separated list of: name, nameData, pos, state or type|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getchecklistscheckitemsbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addChecklistsCheckItemsByIdChecklist()

<a id="opIdaddChecklistsCheckItemsByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/checkItems?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "checked": "string",
    "name": "string",
    "pos": "string"
  }'
```

`POST /checklists/{idChecklist}/checkItems`

> Body parameter

```json
{
  "checked": "string",
  "name": "string",
  "pos": "string"
}
```

<h3 id="addchecklistscheckitemsbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[checklists_checkItems](#schemachecklists_checkitems)|true|Attributes of "Checklists Check Items" to be added.|
|» checked|body|string|false| true or false|
|» name|body|string|false|a string with a length from 1 to 16384|
|» pos|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="addchecklistscheckitemsbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getChecklistsCheckItemsByIdChecklistByIdCheckItem()

<a id="opIdgetChecklistsCheckItemsByIdChecklistByIdCheckItem"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/checkItems/string?key=string&token=string&key=${API_KEY}"
```

`GET /checklists/{idChecklist}/checkItems/{idCheckItem}`

<h3 id="getchecklistscheckitemsbyidchecklistbyidcheckitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|idCheckItem|path|string|true|idCheckItem|
|fields|query|string|false|all or a comma-separated list of: name, nameData, pos, state or type|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getchecklistscheckitemsbyidchecklistbyidcheckitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()

<a id="opIddeleteChecklistsCheckItemsByIdChecklistByIdCheckItem"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/checkItems/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /checklists/{idChecklist}/checkItems/{idCheckItem}`

<h3 id="deletechecklistscheckitemsbyidchecklistbyidcheckitem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|idCheckItem|path|string|true|idCheckItem|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletechecklistscheckitemsbyidchecklistbyidcheckitem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateChecklistsIdCardByIdChecklist()

<a id="opIdupdateChecklistsIdCardByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/idCard?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /checklists/{idChecklist}/idCard`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatechecklistsidcardbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[checklists_idCard](#schemachecklists_idcard)|true|Attributes of "Checklists Id Card" to be updated.|
|» value|body|string|false|The id of the card that the checklist is on|

<h3 id="updatechecklistsidcardbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateChecklistsNameByIdChecklist()

<a id="opIdupdateChecklistsNameByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/name?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /checklists/{idChecklist}/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatechecklistsnamebyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[checklists_name](#schemachecklists_name)|true|Attributes of "Checklists Name" to be updated.|
|» value|body|string|false|a string with a length from 1 to 16384|

<h3 id="updatechecklistsnamebyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateChecklistsPosByIdChecklist()

<a id="opIdupdateChecklistsPosByIdChecklist"></a>

> Code samples

```bash
curl "https://example.com/checklists/string/pos?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /checklists/{idChecklist}/pos`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatechecklistsposbyidchecklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[checklists_pos](#schemachecklists_pos)|true|Attributes of "Checklists Pos" to be updated.|
|» value|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="updatechecklistsposbyidchecklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getChecklistsByIdChecklistByField()

<a id="opIdgetChecklistsByIdChecklistByField"></a>

> Code samples

```bash
curl 'https://example.com/checklists/string/string?key=string&token=string'
```

`GET /checklists/{idChecklist}/{field}`

<h3 id="getchecklistsbyidchecklistbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idChecklist|path|string|true|idChecklist|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getchecklistsbyidchecklistbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-label">label</h1>

https://trello.com/docs/api/label/index.html

## addLabels()

<a id="opIdaddLabels"></a>

> Code samples

```bash
curl "https://example.com/labels?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "color": "string",
    "idBoard": "string",
    "name": "string"
  }'
```

`POST /labels`

> Body parameter

```json
{
  "color": "string",
  "idBoard": "string",
  "name": "string"
}
```

<h3 id="addlabels-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labels](#schemalabels)|true|Attributes of "Labels" to be added.|
|» color|body|string|false|A valid label color or null|
|» idBoard|body|string|false|An id|
|» name|body|string|false|a string with a length from 0 to 16384|

<h3 id="addlabels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getLabelsByIdLabel()

<a id="opIdgetLabelsByIdLabel"></a>

> Code samples

```bash
curl "https://example.com/labels/string?key=string&token=string&key=${API_KEY}"
```

`GET /labels/{idLabel}`

<h3 id="getlabelsbyidlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idLabel|path|string|true|idLabel|
|fields|query|string|false|all or a comma-separated list of: color, idBoard, name or uses|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlabelsbyidlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateLabelsByIdLabel()

<a id="opIdupdateLabelsByIdLabel"></a>

> Code samples

```bash
curl "https://example.com/labels/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "color": "string",
    "idBoard": "string",
    "name": "string"
  }'
```

`PUT /labels/{idLabel}`

> Body parameter

```json
{
  "color": "string",
  "idBoard": "string",
  "name": "string"
}
```

<h3 id="updatelabelsbyidlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idLabel|path|string|true|idLabel|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labels](#schemalabels)|true|Attributes of "Labels" to be updated.|
|» color|body|string|false|A valid label color or null|
|» idBoard|body|string|false|An id|
|» name|body|string|false|a string with a length from 0 to 16384|

<h3 id="updatelabelsbyidlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteLabelsByIdLabel()

<a id="opIddeleteLabelsByIdLabel"></a>

> Code samples

```bash
curl "https://example.com/labels/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /labels/{idLabel}`

<h3 id="deletelabelsbyidlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idLabel|path|string|true|idLabel|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletelabelsbyidlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getLabelsBoardByIdLabel()

<a id="opIdgetLabelsBoardByIdLabel"></a>

> Code samples

```bash
curl "https://example.com/labels/string/board?key=string&token=string&key=${API_KEY}"
```

`GET /labels/{idLabel}/board`

<h3 id="getlabelsboardbyidlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idLabel|path|string|true|idLabel|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlabelsboardbyidlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getLabelsBoardByIdLabelByField()

<a id="opIdgetLabelsBoardByIdLabelByField"></a>

> Code samples

```bash
curl "https://example.com/labels/string/board/string?key=string&token=string&key=${API_KEY}"
```

`GET /labels/{idLabel}/board/{field}`

<h3 id="getlabelsboardbyidlabelbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idLabel|path|string|true|idLabel|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlabelsboardbyidlabelbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateLabelsColorByIdLabel()

<a id="opIdupdateLabelsColorByIdLabel"></a>

> Code samples

```bash
curl "https://example.com/labels/string/color?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /labels/{idLabel}/color`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatelabelscolorbyidlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idLabel|path|string|true|idLabel|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labels_color](#schemalabels_color)|true|Attributes of "Labels Color" to be updated.|
|» value|body|string|false|A valid label color or null|

<h3 id="updatelabelscolorbyidlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateLabelsNameByIdLabel()

<a id="opIdupdateLabelsNameByIdLabel"></a>

> Code samples

```bash
curl "https://example.com/labels/string/name?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /labels/{idLabel}/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatelabelsnamebyidlabel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idLabel|path|string|true|idLabel|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[labels_name](#schemalabels_name)|true|Attributes of "Labels Name" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updatelabelsnamebyidlabel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

<h1 id="trello-list">list</h1>

https://trello.com/docs/api/list/index.html

## addLists()

<a id="opIdaddLists"></a>

> Code samples

```bash
curl "https://example.com/lists?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "closed": "string",
    "idBoard": "string",
    "idListSource": "string",
    "name": "string",
    "pos": "string",
    "subscribed": "string"
  }'
```

`POST /lists`

> Body parameter

```json
{
  "closed": "string",
  "idBoard": "string",
  "idListSource": "string",
  "name": "string",
  "pos": "string",
  "subscribed": "string"
}
```

<h3 id="addlists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists](#schemalists)|true|Attributes of "Lists" to be added.|
|» closed|body|string|false| true or false|
|» idBoard|body|string|false|id of the board that the list should be added to|
|» idListSource|body|string|false|The id of the list to copy into a new list.|
|» name|body|string|false|a string with a length from 1 to 16384|
|» pos|body|string|false|A position. top , bottom , or a positive number.|
|» subscribed|body|string|false| true or false|

<h3 id="addlists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getListsByIdList()

<a id="opIdgetListsByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string?key=string&token=string&key=${API_KEY}"
```

`GET /lists/{idList}`

<h3 id="getlistsbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|cards|query|string|false|One of: all, closed, none or open|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|board|query|string|false| true or false|
|board_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlistsbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateListsByIdList()

<a id="opIdupdateListsByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "closed": "string",
    "idBoard": "string",
    "idListSource": "string",
    "name": "string",
    "pos": "string",
    "subscribed": "string"
  }'
```

`PUT /lists/{idList}`

> Body parameter

```json
{
  "closed": "string",
  "idBoard": "string",
  "idListSource": "string",
  "name": "string",
  "pos": "string",
  "subscribed": "string"
}
```

<h3 id="updatelistsbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists](#schemalists)|true|Attributes of "Lists" to be updated.|
|» closed|body|string|false| true or false|
|» idBoard|body|string|false|id of the board that the list should be added to|
|» idListSource|body|string|false|The id of the list to copy into a new list.|
|» name|body|string|false|a string with a length from 1 to 16384|
|» pos|body|string|false|A position. top , bottom , or a positive number.|
|» subscribed|body|string|false| true or false|

<h3 id="updatelistsbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getListsActionsByIdList()

<a id="opIdgetListsActionsByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/actions?key=string&token=string&key=${API_KEY}"
```

`GET /lists/{idList}/actions`

<h3 id="getlistsactionsbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|entities|query|string|false| true or false|
|display|query|string|false| true or false|
|filter|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|limit|query|string|false|a number from 0 to 1000|
|format|query|string|false|One of: count, list or minimal|
|since|query|string|false|A date, null or lastView|
|before|query|string|false|A date, or null|
|page|query|string|false|Page * limit must be less than 1000|
|idModels|query|string|false|Only return actions related to these model ids|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|memberCreator|query|string|false| true or false|
|memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlistsactionsbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addListsArchiveAllCardsByIdList()

<a id="opIdaddListsArchiveAllCardsByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/archiveAllCards?key=string&token=string&key=${API_KEY}" \
  -X POST
```

`POST /lists/{idList}/archiveAllCards`

<h3 id="addlistsarchiveallcardsbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="addlistsarchiveallcardsbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getListsBoardByIdList()

<a id="opIdgetListsBoardByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/board?key=string&token=string&key=${API_KEY}"
```

`GET /lists/{idList}/board`

<h3 id="getlistsboardbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlistsboardbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getListsBoardByIdListByField()

<a id="opIdgetListsBoardByIdListByField"></a>

> Code samples

```bash
curl "https://example.com/lists/string/board/string?key=string&token=string&key=${API_KEY}"
```

`GET /lists/{idList}/board/{field}`

<h3 id="getlistsboardbyidlistbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlistsboardbyidlistbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getListsCardsByIdList()

<a id="opIdgetListsCardsByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/cards?key=string&token=string&key=${API_KEY}"
```

`GET /lists/{idList}/cards`

<h3 id="getlistscardsbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|stickers|query|string|false| true or false|
|members|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checkItemStates|query|string|false| true or false|
|checklists|query|string|false|One of: all or none|
|limit|query|string|false|a number from 1 to 1000|
|since|query|string|false|A date, or null|
|before|query|string|false|A date, or null|
|filter|query|string|false|One of: all, closed, none or open|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlistscardsbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addListsCardsByIdList()

<a id="opIdaddListsCardsByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/cards?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "desc": "string",
    "due": "string",
    "idMembers": "string",
    "labels": "string",
    "name": "string"
  }'
```

`POST /lists/{idList}/cards`

> Body parameter

```json
{
  "desc": "string",
  "due": "string",
  "idMembers": "string",
  "labels": "string",
  "name": "string"
}
```

<h3 id="addlistscardsbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists_cards](#schemalists_cards)|true|Attributes of "Lists Cards" to be added.|
|» desc|body|string|false|a string with a length from 0 to 16384|
|» due|body|string|false|A date, or null|
|» idMembers|body|string|false|A comma-separated list of objectIds, 24-character hex strings|
|» labels|body|string|false|all or a comma-separated list of: blue, green, orange, purple, red or yellow|
|» name|body|string|false|a string with a length from 1 to 16384|

<h3 id="addlistscardsbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getListsCardsByIdListByFilter()

<a id="opIdgetListsCardsByIdListByFilter"></a>

> Code samples

```bash
curl 'https://example.com/lists/string/cards/string?key=string&token=string'
```

`GET /lists/{idList}/cards/{filter}`

<h3 id="getlistscardsbyidlistbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlistscardsbyidlistbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateListsClosedByIdList()

<a id="opIdupdateListsClosedByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/closed?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /lists/{idList}/closed`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatelistsclosedbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists_closed](#schemalists_closed)|true|Attributes of "Lists Closed" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updatelistsclosedbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateListsIdBoardByIdList()

<a id="opIdupdateListsIdBoardByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/idBoard?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "pos": "string",
    "value": "string"
  }'
```

`PUT /lists/{idList}/idBoard`

> Body parameter

```json
{
  "pos": "string",
  "value": "string"
}
```

<h3 id="updatelistsidboardbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists_idBoard](#schemalists_idboard)|true|Attributes of "Lists Id Board" to be updated.|
|» pos|body|string|false|position of the list on the new board|
|» value|body|string|false|id of the board the list should be moved to|

<h3 id="updatelistsidboardbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addListsMoveAllCardsByIdList()

<a id="opIdaddListsMoveAllCardsByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/moveAllCards?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "idBoard": "string"
  }'
```

`POST /lists/{idList}/moveAllCards`

> Body parameter

```json
{
  "idBoard": "string"
}
```

<h3 id="addlistsmoveallcardsbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists_moveAllCards](#schemalists_moveallcards)|true|Attributes of "Lists Move All Cards" to be added.|
|» idBoard|body|string|false|id of the board that the cards should be moved to|

<h3 id="addlistsmoveallcardsbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateListsNameByIdList()

<a id="opIdupdateListsNameByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/name?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /lists/{idList}/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatelistsnamebyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists_name](#schemalists_name)|true|Attributes of "Lists Name" to be updated.|
|» value|body|string|false|a string with a length from 1 to 16384|

<h3 id="updatelistsnamebyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateListsPosByIdList()

<a id="opIdupdateListsPosByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/pos?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /lists/{idList}/pos`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatelistsposbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists_pos](#schemalists_pos)|true|Attributes of "Lists Pos" to be updated.|
|» value|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="updatelistsposbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateListsSubscribedByIdList()

<a id="opIdupdateListsSubscribedByIdList"></a>

> Code samples

```bash
curl "https://example.com/lists/string/subscribed?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /lists/{idList}/subscribed`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatelistssubscribedbyidlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[lists_subscribed](#schemalists_subscribed)|true|Attributes of "Lists Subscribed" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updatelistssubscribedbyidlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getListsByIdListByField()

<a id="opIdgetListsByIdListByField"></a>

> Code samples

```bash
curl 'https://example.com/lists/string/string?key=string&token=string'
```

`GET /lists/{idList}/{field}`

<h3 id="getlistsbyidlistbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idList|path|string|true|idList|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getlistsbyidlistbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-member">member</h1>

https://trello.com/docs/api/member/index.html

## getMembersByIdMember()

<a id="opIdgetMembersByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}`

If you specify 'me' as the username, this call will respond as if you had supplied the username associated with the supplied token

<h3 id="getmembersbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|actions_entities|query|string|false| true or false|
|actions_display|query|string|false| true or false|
|actions_limit|query|string|false|a number from 0 to 1000|
|action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|action_since|query|string|false|A date, null or lastView|
|action_before|query|string|false|A date, or null|
|cards|query|string|false|One of: all, closed, none, open or visible|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|card_members|query|string|false| true or false|
|card_member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|card_attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|card_attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|card_stickers|query|string|false| true or false|
|boards|query|string|false|all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned|
|board_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|board_actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|board_actions_entities|query|string|false| true or false|
|board_actions_display|query|string|false| true or false|
|board_actions_format|query|string|false|One of: count, list or minimal|
|board_actions_since|query|string|false|A date, null or lastView|
|board_actions_limit|query|string|false|a number from 0 to 1000|
|board_action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|board_lists|query|string|false|One of: all, closed, none or open|
|board_memberships|query|string|false|all or a comma-separated list of: active, admin, deactivated, me or normal|
|board_organization|query|string|false| true or false|
|board_organization_fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|boardsInvited|query|string|false|all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned|
|boardsInvited_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|boardStars|query|string|false| true or false|
|savedSearches|query|string|false| true or false|
|organizations|query|string|false|One of: all, members, none or public|
|organization_fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|organization_paid_account|query|string|false| true or false|
|organizationsInvited|query|string|false|One of: all, members, none or public|
|organizationsInvited_fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|notifications|query|string|false|all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard|
|notifications_entities|query|string|false| true or false|
|notifications_display|query|string|false| true or false|
|notifications_limit|query|string|false|a number from 1 to 1000|
|notification_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator, type or unread|
|notification_memberCreator|query|string|false| true or false|
|notification_memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|notification_before|query|string|false|An id, or null|
|notification_since|query|string|false|An id, or null|
|tokens|query|string|false|One of: all or none|
|paid_account|query|string|false| true or false|
|boardBackgrounds|query|string|false|One of: all, custom, default, none or premium|
|customBoardBackgrounds|query|string|false|One of: all or none|
|customStickers|query|string|false|One of: all or none|
|customEmoji|query|string|false|One of: all or none|
|fields|query|string|false|all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersByIdMember()

<a id="opIdupdateMembersByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "avatarSource": "string",
    "bio": "string",
    "fullName": "string",
    "initials": "string",
    "prefs/colorBlind": "string",
    "prefs/locale": "string",
    "prefs/minutesBetweenSummaries": "string",
    "username": "string"
  }'
```

`PUT /members/{idMember}`

> Body parameter

```json
{
  "avatarSource": "string",
  "bio": "string",
  "fullName": "string",
  "initials": "string",
  "prefs/colorBlind": "string",
  "prefs/locale": "string",
  "prefs/minutesBetweenSummaries": "string",
  "username": "string"
}
```

<h3 id="updatemembersbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members](#schemamembers)|true|Attributes of "Members" to be updated.|
|» avatarSource|body|string|false|One of: gravatar, none or upload|
|» bio|body|string|false|a string with a length from 0 to 16384|
|» fullName|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|
|» initials|body|string|false|A string with a length from 1 to 4.  Cannot begin or end with a space|
|» prefs/colorBlind|body|string|false| true or false|
|» prefs/locale|body|string|false|a string with a length from 0 to 255|
|» prefs/minutesBetweenSummaries|body|string|false|-1 (disabled), 1 or 60|
|» username|body|string|false|A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.|

<h3 id="updatemembersbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersActionsByIdMember()

<a id="opIdgetMembersActionsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/actions?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/actions`

<h3 id="getmembersactionsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|entities|query|string|false| true or false|
|display|query|string|false| true or false|
|filter|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|limit|query|string|false|a number from 0 to 1000|
|format|query|string|false|One of: count, list or minimal|
|since|query|string|false|A date, null or lastView|
|before|query|string|false|A date, or null|
|page|query|string|false|Page * limit must be less than 1000|
|idModels|query|string|false|Only return actions related to these model ids|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|memberCreator|query|string|false| true or false|
|memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersactionsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addMembersAvatarByIdMember()

<a id="opIdaddMembersAvatarByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/avatar?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "file": "string"
  }'
```

`POST /members/{idMember}/avatar`

> Body parameter

```json
{
  "file": "string"
}
```

<h3 id="addmembersavatarbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_avatar](#schemamembers_avatar)|true|Attributes of "Members Avatar" to be added.|
|» file|body|string|false|A file|

<h3 id="addmembersavatarbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersAvatarSourceByIdMember()

<a id="opIdupdateMembersAvatarSourceByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/avatarSource?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/avatarSource`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersavatarsourcebyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_avatarSource](#schemamembers_avatarsource)|true|Attributes of "Members Avatar Source" to be updated.|
|» value|body|string|false|One of: gravatar, none or upload|

<h3 id="updatemembersavatarsourcebyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersBioByIdMember()

<a id="opIdupdateMembersBioByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/bio?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/bio`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersbiobyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_bio](#schemamembers_bio)|true|Attributes of "Members Bio" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updatemembersbiobyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersBoardBackgroundsByIdMember()

<a id="opIdgetMembersBoardBackgroundsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardBackgrounds?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/boardBackgrounds`

<h3 id="getmembersboardbackgroundsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|query|string|false|One of: all, custom, default, none or premium|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersboardbackgroundsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addMembersBoardBackgroundsByIdMember()

<a id="opIdaddMembersBoardBackgroundsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardBackgrounds?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "brightness": "string",
    "file": "string",
    "tile": "string"
  }'
```

`POST /members/{idMember}/boardBackgrounds`

> Body parameter

```json
{
  "brightness": "string",
  "file": "string",
  "tile": "string"
}
```

<h3 id="addmembersboardbackgroundsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_boardBackgrounds](#schemamembers_boardbackgrounds)|true|Attributes of "Members Board Backgrounds" to be added.|
|» brightness|body|string|false|One of: dark, light or unknown|
|» file|body|string|false|A file|
|» tile|body|string|false| true or false|

<h3 id="addmembersboardbackgroundsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersBoardBackgroundsByIdMemberByIdBoardBackground()

<a id="opIdgetMembersBoardBackgroundsByIdMemberByIdBoardBackground"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardBackgrounds/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/boardBackgrounds/{idBoardBackground}`

<h3 id="getmembersboardbackgroundsbyidmemberbyidboardbackground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardBackground|path|string|true|idBoardBackground|
|fields|query|string|false|all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersboardbackgroundsbyidmemberbyidboardbackground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()

<a id="opIdupdateMembersBoardBackgroundsByIdMemberByIdBoardBackground"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardBackgrounds/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "brightness": "string",
    "file": "string",
    "tile": "string"
  }'
```

`PUT /members/{idMember}/boardBackgrounds/{idBoardBackground}`

> Body parameter

```json
{
  "brightness": "string",
  "file": "string",
  "tile": "string"
}
```

<h3 id="updatemembersboardbackgroundsbyidmemberbyidboardbackground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardBackground|path|string|true|idBoardBackground|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_boardBackgrounds](#schemamembers_boardbackgrounds)|true|Attributes of "Members Board Backgrounds" to be updated.|
|» brightness|body|string|false|One of: dark, light or unknown|
|» file|body|string|false|A file|
|» tile|body|string|false| true or false|

<h3 id="updatemembersboardbackgroundsbyidmemberbyidboardbackground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()

<a id="opIddeleteMembersBoardBackgroundsByIdMemberByIdBoardBackground"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardBackgrounds/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /members/{idMember}/boardBackgrounds/{idBoardBackground}`

<h3 id="deletemembersboardbackgroundsbyidmemberbyidboardbackground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardBackground|path|string|true|idBoardBackground|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletemembersboardbackgroundsbyidmemberbyidboardbackground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersBoardStarsByIdMember()

<a id="opIdgetMembersBoardStarsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardStars?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/boardStars`

<h3 id="getmembersboardstarsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersboardstarsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addMembersBoardStarsByIdMember()

<a id="opIdaddMembersBoardStarsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardStars?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "idBoard": "string",
    "pos": "string"
  }'
```

`POST /members/{idMember}/boardStars`

> Body parameter

```json
{
  "idBoard": "string",
  "pos": "string"
}
```

<h3 id="addmembersboardstarsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_boardStars](#schemamembers_boardstars)|true|Attributes of "Members Board Stars" to be added.|
|» idBoard|body|string|false|The id of the board to star|
|» pos|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="addmembersboardstarsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersBoardStarsByIdMemberByIdBoardStar()

<a id="opIdgetMembersBoardStarsByIdMemberByIdBoardStar"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardStars/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/boardStars/{idBoardStar}`

<h3 id="getmembersboardstarsbyidmemberbyidboardstar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardStar|path|string|true|idBoardStar|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersboardstarsbyidmemberbyidboardstar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersBoardStarsByIdMemberByIdBoardStar()

<a id="opIdupdateMembersBoardStarsByIdMemberByIdBoardStar"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardStars/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "idBoard": "string",
    "pos": "string"
  }'
```

`PUT /members/{idMember}/boardStars/{idBoardStar}`

> Body parameter

```json
{
  "idBoard": "string",
  "pos": "string"
}
```

<h3 id="updatemembersboardstarsbyidmemberbyidboardstar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardStar|path|string|true|idBoardStar|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_boardStars](#schemamembers_boardstars)|true|Attributes of "Members Board Stars" to be updated.|
|» idBoard|body|string|false|The id of the board to star|
|» pos|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="updatemembersboardstarsbyidmemberbyidboardstar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteMembersBoardStarsByIdMemberByIdBoardStar()

<a id="opIddeleteMembersBoardStarsByIdMemberByIdBoardStar"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardStars/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /members/{idMember}/boardStars/{idBoardStar}`

<h3 id="deletemembersboardstarsbyidmemberbyidboardstar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardStar|path|string|true|idBoardStar|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletemembersboardstarsbyidmemberbyidboardstar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()

<a id="opIdupdateMembersBoardStarsIdBoardByIdMemberByIdBoardStar"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardStars/string/idBoard?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/boardStars/{idBoardStar}/idBoard`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersboardstarsidboardbyidmemberbyidboardstar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardStar|path|string|true|idBoardStar|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_boardStars_idBoard](#schemamembers_boardstars_idboard)|true|Attributes of "Members Board Stars Id Board" to be updated.|
|» value|body|string|false|An id|

<h3 id="updatemembersboardstarsidboardbyidmemberbyidboardstar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersBoardStarsPosByIdMemberByIdBoardStar()

<a id="opIdupdateMembersBoardStarsPosByIdMemberByIdBoardStar"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardStars/string/pos?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/boardStars/{idBoardStar}/pos`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersboardstarsposbyidmemberbyidboardstar-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardStar|path|string|true|idBoardStar|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_boardStars_pos](#schemamembers_boardstars_pos)|true|Attributes of "Members Board Stars Pos" to be updated.|
|» value|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="updatemembersboardstarsposbyidmemberbyidboardstar-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersBoardsByIdMember()

<a id="opIdgetMembersBoardsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/boards?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/boards`

<h3 id="getmembersboardsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|query|string|false|all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|actions_entities|query|string|false| true or false|
|actions_limit|query|string|false|a number from 0 to 1000|
|actions_format|query|string|false|One of: count, list or minimal|
|actions_since|query|string|false|A date, null or lastView|
|action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|memberships|query|string|false|all or a comma-separated list of: active, admin, deactivated, me or normal|
|organization|query|string|false| true or false|
|organization_fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|lists|query|string|false|One of: all, closed, none or open|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersboardsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersBoardsByIdMemberByFilter()

<a id="opIdgetMembersBoardsByIdMemberByFilter"></a>

> Code samples

```bash
curl 'https://example.com/members/string/boards/string?key=string&token=string'
```

`GET /members/{idMember}/boards/{filter}`

<h3 id="getmembersboardsbyidmemberbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersboardsbyidmemberbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMembersBoardsInvitedByIdMember()

<a id="opIdgetMembersBoardsInvitedByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardsInvited?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/boardsInvited`

<h3 id="getmembersboardsinvitedbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersboardsinvitedbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersBoardsInvitedByIdMemberByField()

<a id="opIdgetMembersBoardsInvitedByIdMemberByField"></a>

> Code samples

```bash
curl "https://example.com/members/string/boardsInvited/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/boardsInvited/{field}`

<h3 id="getmembersboardsinvitedbyidmemberbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersboardsinvitedbyidmemberbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersCardsByIdMember()

<a id="opIdgetMembersCardsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/cards?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/cards`

<h3 id="getmemberscardsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|stickers|query|string|false| true or false|
|members|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checkItemStates|query|string|false| true or false|
|checklists|query|string|false|One of: all or none|
|limit|query|string|false|a number from 1 to 1000|
|since|query|string|false|A date, or null|
|before|query|string|false|A date, or null|
|filter|query|string|false|One of: all, closed, none, open or visible|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberscardsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersCardsByIdMemberByFilter()

<a id="opIdgetMembersCardsByIdMemberByFilter"></a>

> Code samples

```bash
curl 'https://example.com/members/string/cards/string?key=string&token=string'
```

`GET /members/{idMember}/cards/{filter}`

<h3 id="getmemberscardsbyidmemberbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberscardsbyidmemberbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMembersCustomBoardBackgroundsByIdMember()

<a id="opIdgetMembersCustomBoardBackgroundsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/customBoardBackgrounds?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/customBoardBackgrounds`

<h3 id="getmemberscustomboardbackgroundsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|query|string|false|One of: all or none|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberscustomboardbackgroundsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addMembersCustomBoardBackgroundsByIdMember()

<a id="opIdaddMembersCustomBoardBackgroundsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/customBoardBackgrounds?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "brightness": "string",
    "file": "string",
    "tile": "string"
  }'
```

`POST /members/{idMember}/customBoardBackgrounds`

> Body parameter

```json
{
  "brightness": "string",
  "file": "string",
  "tile": "string"
}
```

<h3 id="addmemberscustomboardbackgroundsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_customBoardBackgrounds](#schemamembers_customboardbackgrounds)|true|Attributes of "Members Custom Board Backgrounds" to be added.|
|» brightness|body|string|false|One of: dark, light or unknown|
|» file|body|string|false|A file|
|» tile|body|string|false| true or false|

<h3 id="addmemberscustomboardbackgroundsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

<a id="opIdgetMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground"></a>

> Code samples

```bash
curl "https://example.com/members/string/customBoardBackgrounds/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/customBoardBackgrounds/{idBoardBackground}`

<h3 id="getmemberscustomboardbackgroundsbyidmemberbyidboardbackground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardBackground|path|string|true|idBoardBackground|
|fields|query|string|false|all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberscustomboardbackgroundsbyidmemberbyidboardbackground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

<a id="opIdupdateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground"></a>

> Code samples

```bash
curl "https://example.com/members/string/customBoardBackgrounds/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "brightness": "string",
    "file": "string",
    "tile": "string"
  }'
```

`PUT /members/{idMember}/customBoardBackgrounds/{idBoardBackground}`

> Body parameter

```json
{
  "brightness": "string",
  "file": "string",
  "tile": "string"
}
```

<h3 id="updatememberscustomboardbackgroundsbyidmemberbyidboardbackground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardBackground|path|string|true|idBoardBackground|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_customBoardBackgrounds](#schemamembers_customboardbackgrounds)|true|Attributes of "Members Custom Board Backgrounds" to be updated.|
|» brightness|body|string|false|One of: dark, light or unknown|
|» file|body|string|false|A file|
|» tile|body|string|false| true or false|

<h3 id="updatememberscustomboardbackgroundsbyidmemberbyidboardbackground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()

<a id="opIddeleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground"></a>

> Code samples

```bash
curl "https://example.com/members/string/customBoardBackgrounds/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /members/{idMember}/customBoardBackgrounds/{idBoardBackground}`

<h3 id="deletememberscustomboardbackgroundsbyidmemberbyidboardbackground-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idBoardBackground|path|string|true|idBoardBackground|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletememberscustomboardbackgroundsbyidmemberbyidboardbackground-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersCustomEmojiByIdMember()

<a id="opIdgetMembersCustomEmojiByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/customEmoji?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/customEmoji`

This gets the list of all of the user’s uploaded emoji

<h3 id="getmemberscustomemojibyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|query|string|false|One of: all or none|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberscustomemojibyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addMembersCustomEmojiByIdMember()

<a id="opIdaddMembersCustomEmojiByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/customEmoji?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "file": "string",
    "name": "string"
  }'
```

`POST /members/{idMember}/customEmoji`

> Body parameter

```json
{
  "file": "string",
  "name": "string"
}
```

<h3 id="addmemberscustomemojibyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_customEmoji](#schemamembers_customemoji)|true|Attributes of "Members Custom Emoji" to be added.|
|» file|body|string|false|A file|
|» name|body|string|false|a string with a length from 2 to 64|

<h3 id="addmemberscustomemojibyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersCustomEmojiByIdMemberByIdCustomEmoji()

<a id="opIdgetMembersCustomEmojiByIdMemberByIdCustomEmoji"></a>

> Code samples

```bash
curl "https://example.com/members/string/customEmoji/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/customEmoji/{idCustomEmoji}`

<h3 id="getmemberscustomemojibyidmemberbyidcustomemoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idCustomEmoji|path|string|true|idCustomEmoji|
|fields|query|string|false|all or a comma-separated list of: name or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberscustomemojibyidmemberbyidcustomemoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersCustomStickersByIdMember()

<a id="opIdgetMembersCustomStickersByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/customStickers?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/customStickers`

This gets a list of all of the user’s uploaded stickers

<h3 id="getmemberscustomstickersbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|query|string|false|One of: all or none|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberscustomstickersbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addMembersCustomStickersByIdMember()

<a id="opIdaddMembersCustomStickersByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/customStickers?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "file": "string"
  }'
```

`POST /members/{idMember}/customStickers`

> Body parameter

```json
{
  "file": "string"
}
```

<h3 id="addmemberscustomstickersbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_customStickers](#schemamembers_customstickers)|true|Attributes of "Members Custom Stickers" to be added.|
|» file|body|string|false|A file|

<h3 id="addmemberscustomstickersbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersCustomStickersByIdMemberByIdCustomSticker()

<a id="opIdgetMembersCustomStickersByIdMemberByIdCustomSticker"></a>

> Code samples

```bash
curl "https://example.com/members/string/customStickers/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/customStickers/{idCustomSticker}`

<h3 id="getmemberscustomstickersbyidmemberbyidcustomsticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idCustomSticker|path|string|true|idCustomSticker|
|fields|query|string|false|all or a comma-separated list of: scaled or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberscustomstickersbyidmemberbyidcustomsticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteMembersCustomStickersByIdMemberByIdCustomSticker()

<a id="opIddeleteMembersCustomStickersByIdMemberByIdCustomSticker"></a>

> Code samples

```bash
curl "https://example.com/members/string/customStickers/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /members/{idMember}/customStickers/{idCustomSticker}`

<h3 id="deletememberscustomstickersbyidmemberbyidcustomsticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idCustomSticker|path|string|true|idCustomSticker|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletememberscustomstickersbyidmemberbyidcustomsticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersDeltasByIdMember()

<a id="opIdgetMembersDeltasByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/deltas?tags=string&ixLastUpdate=string&key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/deltas`

<h3 id="getmembersdeltasbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|tags|query|string|true|A valid tag for subscribing|
|ixLastUpdate|query|string|true|a number from -1 to Infinity|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersdeltasbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersFullNameByIdMember()

<a id="opIdupdateMembersFullNameByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/fullName?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/fullName`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersfullnamebyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_fullName](#schemamembers_fullname)|true|Attributes of "Members Full Name" to be updated.|
|» value|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|

<h3 id="updatemembersfullnamebyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersInitialsByIdMember()

<a id="opIdupdateMembersInitialsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/initials?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/initials`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersinitialsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_initials](#schemamembers_initials)|true|Attributes of "Members Initials" to be updated.|
|» value|body|string|false|A string with a length from 1 to 4.  Cannot begin or end with a space|

<h3 id="updatemembersinitialsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersNotificationsByIdMember()

<a id="opIdgetMembersNotificationsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/notifications?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/notifications`

You can only read the notifications for the member associated with the supplied token

<h3 id="getmembersnotificationsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|entities|query|string|false| true or false|
|display|query|string|false| true or false|
|filter|query|string|false|all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard|
|read_filter|query|string|false|One of: all, read or unread|
|fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator, type or unread|
|limit|query|string|false|a number from 1 to 1000|
|page|query|string|false|a number from 0 to 100|
|before|query|string|false|An id, or null|
|since|query|string|false|An id, or null|
|memberCreator|query|string|false| true or false|
|memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersnotificationsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersNotificationsByIdMemberByFilter()

<a id="opIdgetMembersNotificationsByIdMemberByFilter"></a>

> Code samples

```bash
curl 'https://example.com/members/string/notifications/string?key=string&token=string'
```

`GET /members/{idMember}/notifications/{filter}`

<h3 id="getmembersnotificationsbyidmemberbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersnotificationsbyidmemberbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## addMembersOneTimeMessagesDismissedByIdMember()

<a id="opIdaddMembersOneTimeMessagesDismissedByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/oneTimeMessagesDismissed?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`POST /members/{idMember}/oneTimeMessagesDismissed`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="addmembersonetimemessagesdismissedbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_oneTimeMessagesDismissed](#schemamembers_onetimemessagesdismissed)|true|Attributes of "Members One Time Messages Dismissed" to be added.|
|» value|body|string|false|Type of message dismissed|

<h3 id="addmembersonetimemessagesdismissedbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersOrganizationsByIdMember()

<a id="opIdgetMembersOrganizationsByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/organizations?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/organizations`

<h3 id="getmembersorganizationsbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|query|string|false|One of: all, members, none or public|
|fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|paid_account|query|string|false| true or false|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersorganizationsbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersOrganizationsByIdMemberByFilter()

<a id="opIdgetMembersOrganizationsByIdMemberByFilter"></a>

> Code samples

```bash
curl 'https://example.com/members/string/organizations/string?key=string&token=string'
```

`GET /members/{idMember}/organizations/{filter}`

<h3 id="getmembersorganizationsbyidmemberbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersorganizationsbyidmemberbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## getMembersOrganizationsInvitedByIdMember()

<a id="opIdgetMembersOrganizationsInvitedByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/organizationsInvited?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/organizationsInvited`

<h3 id="getmembersorganizationsinvitedbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersorganizationsinvitedbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersOrganizationsInvitedByIdMemberByField()

<a id="opIdgetMembersOrganizationsInvitedByIdMemberByField"></a>

> Code samples

```bash
curl "https://example.com/members/string/organizationsInvited/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/organizationsInvited/{field}`

<h3 id="getmembersorganizationsinvitedbyidmemberbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersorganizationsinvitedbyidmemberbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersPrefsColorBlindByIdMember()

<a id="opIdupdateMembersPrefsColorBlindByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/prefs/colorBlind?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/prefs/colorBlind`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersprefscolorblindbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_colorBlind](#schemaprefs_colorblind)|true|Attributes of "Prefs Color Blind" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updatemembersprefscolorblindbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersPrefsLocaleByIdMember()

<a id="opIdupdateMembersPrefsLocaleByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/prefs/locale?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/prefs/locale`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersprefslocalebyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_locale](#schemaprefs_locale)|true|Attributes of "Prefs Locale" to be updated.|
|» value|body|string|false|a string with a length from 0 to 255|

<h3 id="updatemembersprefslocalebyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersPrefsMinutesBetweenSummariesByIdMember()

<a id="opIdupdateMembersPrefsMinutesBetweenSummariesByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/prefs/minutesBetweenSummaries?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/prefs/minutesBetweenSummaries`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersprefsminutesbetweensummariesbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_minutesBetweenSummaries](#schemaprefs_minutesbetweensummaries)|true|Attributes of "Prefs Minutes Between Summaries" to be updated.|
|» value|body|string|false|-1 (disabled), 1 or 60|

<h3 id="updatemembersprefsminutesbetweensummariesbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersSavedSearchesByIdMember()

<a id="opIdgetMembersSavedSearchesByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/savedSearches?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/savedSearches`

<h3 id="getmemberssavedsearchesbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberssavedsearchesbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addMembersSavedSearchesByIdMember()

<a id="opIdaddMembersSavedSearchesByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/savedSearches?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "pos": "string",
    "query": "string"
  }'
```

`POST /members/{idMember}/savedSearches`

> Body parameter

```json
{
  "name": "string",
  "pos": "string",
  "query": "string"
}
```

<h3 id="addmemberssavedsearchesbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_savedSearches](#schemamembers_savedsearches)|true|Attributes of "Members Saved Searches" to be added.|
|» name|body|string|false|A non-empty string with at least one non-space character|
|» pos|body|string|false|A position. top , bottom , or a positive number.|
|» query|body|string|false|a string with a length from 1 to 16384|

<h3 id="addmemberssavedsearchesbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersSavedSearchesByIdMemberByIdSavedSearch()

<a id="opIdgetMembersSavedSearchesByIdMemberByIdSavedSearch"></a>

> Code samples

```bash
curl "https://example.com/members/string/savedSearches/string?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/savedSearches/{idSavedSearch}`

<h3 id="getmemberssavedsearchesbyidmemberbyidsavedsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idSavedSearch|path|string|true|idSavedSearch|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberssavedsearchesbyidmemberbyidsavedsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersSavedSearchesByIdMemberByIdSavedSearch()

<a id="opIdupdateMembersSavedSearchesByIdMemberByIdSavedSearch"></a>

> Code samples

```bash
curl "https://example.com/members/string/savedSearches/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "string",
    "pos": "string",
    "query": "string"
  }'
```

`PUT /members/{idMember}/savedSearches/{idSavedSearch}`

> Body parameter

```json
{
  "name": "string",
  "pos": "string",
  "query": "string"
}
```

<h3 id="updatememberssavedsearchesbyidmemberbyidsavedsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idSavedSearch|path|string|true|idSavedSearch|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_savedSearches](#schemamembers_savedsearches)|true|Attributes of "Members Saved Searches" to be updated.|
|» name|body|string|false|A non-empty string with at least one non-space character|
|» pos|body|string|false|A position. top , bottom , or a positive number.|
|» query|body|string|false|a string with a length from 1 to 16384|

<h3 id="updatememberssavedsearchesbyidmemberbyidsavedsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteMembersSavedSearchesByIdMemberByIdSavedSearch()

<a id="opIddeleteMembersSavedSearchesByIdMemberByIdSavedSearch"></a>

> Code samples

```bash
curl "https://example.com/members/string/savedSearches/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /members/{idMember}/savedSearches/{idSavedSearch}`

<h3 id="deletememberssavedsearchesbyidmemberbyidsavedsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idSavedSearch|path|string|true|idSavedSearch|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletememberssavedsearchesbyidmemberbyidsavedsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()

<a id="opIdupdateMembersSavedSearchesNameByIdMemberByIdSavedSearch"></a>

> Code samples

```bash
curl "https://example.com/members/string/savedSearches/string/name?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/savedSearches/{idSavedSearch}/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatememberssavedsearchesnamebyidmemberbyidsavedsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idSavedSearch|path|string|true|idSavedSearch|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_savedSearches_name](#schemamembers_savedsearches_name)|true|Attributes of "Members Saved Searches Name" to be updated.|
|» value|body|string|false|A non-empty string with at least one non-space character|

<h3 id="updatememberssavedsearchesnamebyidmemberbyidsavedsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()

<a id="opIdupdateMembersSavedSearchesPosByIdMemberByIdSavedSearch"></a>

> Code samples

```bash
curl "https://example.com/members/string/savedSearches/string/pos?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/savedSearches/{idSavedSearch}/pos`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatememberssavedsearchesposbyidmemberbyidsavedsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idSavedSearch|path|string|true|idSavedSearch|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_savedSearches_pos](#schemamembers_savedsearches_pos)|true|Attributes of "Members Saved Searches Pos" to be updated.|
|» value|body|string|false|A position. top , bottom , or a positive number.|

<h3 id="updatememberssavedsearchesposbyidmemberbyidsavedsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()

<a id="opIdupdateMembersSavedSearchesQueryByIdMemberByIdSavedSearch"></a>

> Code samples

```bash
curl "https://example.com/members/string/savedSearches/string/query?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/savedSearches/{idSavedSearch}/query`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatememberssavedsearchesquerybyidmemberbyidsavedsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|idSavedSearch|path|string|true|idSavedSearch|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_savedSearches_query](#schemamembers_savedsearches_query)|true|Attributes of "Members Saved Searches Query" to be updated.|
|» value|body|string|false|a string with a length from 1 to 16384|

<h3 id="updatememberssavedsearchesquerybyidmemberbyidsavedsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersTokensByIdMember()

<a id="opIdgetMembersTokensByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/tokens?key=string&token=string&key=${API_KEY}"
```

`GET /members/{idMember}/tokens`

<h3 id="getmemberstokensbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|filter|query|string|false|One of: all or none|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmemberstokensbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateMembersUsernameByIdMember()

<a id="opIdupdateMembersUsernameByIdMember"></a>

> Code samples

```bash
curl "https://example.com/members/string/username?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /members/{idMember}/username`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatemembersusernamebyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[members_username](#schemamembers_username)|true|Attributes of "Members Username" to be updated.|
|» value|body|string|false|A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.|

<h3 id="updatemembersusernamebyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getMembersByIdMemberByField()

<a id="opIdgetMembersByIdMemberByField"></a>

> Code samples

```bash
curl 'https://example.com/members/string/string?key=string&token=string'
```

`GET /members/{idMember}/{field}`

<h3 id="getmembersbyidmemberbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idMember|path|string|true|idMember or username|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getmembersbyidmemberbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-notification">notification</h1>

https://trello.com/docs/api/notification/index.html

## addNotificationsAllRead()

<a id="opIdaddNotificationsAllRead"></a>

> Code samples

```bash
curl "https://example.com/notifications/all/read?key=string&token=string&key=${API_KEY}" \
  -X POST
```

`POST /notifications/all/read`

<h3 id="addnotificationsallread-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="addnotificationsallread-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsByIdNotification()

<a id="opIdgetNotificationsByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}`

<h3 id="getnotificationsbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|display|query|string|false| true or false|
|entities|query|string|false| true or false|
|fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator, type or unread|
|memberCreator|query|string|false| true or false|
|memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|board|query|string|false| true or false|
|board_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|list|query|string|false| true or false|
|card|query|string|false| true or false|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|organization|query|string|false| true or false|
|organization_fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateNotificationsByIdNotification()

<a id="opIdupdateNotificationsByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "unread": "string"
  }'
```

`PUT /notifications/{idNotification}`

> Body parameter

```json
{
  "unread": "string"
}
```

<h3 id="updatenotificationsbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[notifications](#schemanotifications)|true|Attributes of "Notifications" to be updated.|
|» unread|body|string|false| true or false|

<h3 id="updatenotificationsbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsBoardByIdNotification()

<a id="opIdgetNotificationsBoardByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/board?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/board`

<h3 id="getnotificationsboardbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsboardbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsBoardByIdNotificationByField()

<a id="opIdgetNotificationsBoardByIdNotificationByField"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/board/string?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/board/{field}`

<h3 id="getnotificationsboardbyidnotificationbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsboardbyidnotificationbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsCardByIdNotification()

<a id="opIdgetNotificationsCardByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/card?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/card`

<h3 id="getnotificationscardbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationscardbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsCardByIdNotificationByField()

<a id="opIdgetNotificationsCardByIdNotificationByField"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/card/string?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/card/{field}`

<h3 id="getnotificationscardbyidnotificationbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationscardbyidnotificationbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsDisplayByIdNotification()

<a id="opIdgetNotificationsDisplayByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/display?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/display`

<h3 id="getnotificationsdisplaybyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsdisplaybyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsEntitiesByIdNotification()

<a id="opIdgetNotificationsEntitiesByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/entities?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/entities`

<h3 id="getnotificationsentitiesbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsentitiesbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsListByIdNotification()

<a id="opIdgetNotificationsListByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/list?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/list`

<h3 id="getnotificationslistbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationslistbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsListByIdNotificationByField()

<a id="opIdgetNotificationsListByIdNotificationByField"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/list/string?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/list/{field}`

<h3 id="getnotificationslistbyidnotificationbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationslistbyidnotificationbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsMemberByIdNotification()

<a id="opIdgetNotificationsMemberByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/member?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/member`

<h3 id="getnotificationsmemberbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|fields|query|string|false|all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsmemberbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsMemberByIdNotificationByField()

<a id="opIdgetNotificationsMemberByIdNotificationByField"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/member/string?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/member/{field}`

<h3 id="getnotificationsmemberbyidnotificationbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsmemberbyidnotificationbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsMemberCreatorByIdNotification()

<a id="opIdgetNotificationsMemberCreatorByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/memberCreator?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/memberCreator`

<h3 id="getnotificationsmembercreatorbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|fields|query|string|false|all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsmembercreatorbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsMemberCreatorByIdNotificationByField()

<a id="opIdgetNotificationsMemberCreatorByIdNotificationByField"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/memberCreator/string?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/memberCreator/{field}`

<h3 id="getnotificationsmembercreatorbyidnotificationbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsmembercreatorbyidnotificationbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsOrganizationByIdNotification()

<a id="opIdgetNotificationsOrganizationByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/organization?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/organization`

<h3 id="getnotificationsorganizationbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsorganizationbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsOrganizationByIdNotificationByField()

<a id="opIdgetNotificationsOrganizationByIdNotificationByField"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/organization/string?key=string&token=string&key=${API_KEY}"
```

`GET /notifications/{idNotification}/organization/{field}`

<h3 id="getnotificationsorganizationbyidnotificationbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsorganizationbyidnotificationbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateNotificationsUnreadByIdNotification()

<a id="opIdupdateNotificationsUnreadByIdNotification"></a>

> Code samples

```bash
curl "https://example.com/notifications/string/unread?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /notifications/{idNotification}/unread`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatenotificationsunreadbyidnotification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[notifications_unread](#schemanotifications_unread)|true|Attributes of "Notifications Unread" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updatenotificationsunreadbyidnotification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getNotificationsByIdNotificationByField()

<a id="opIdgetNotificationsByIdNotificationByField"></a>

> Code samples

```bash
curl 'https://example.com/notifications/string/string?key=string&token=string'
```

`GET /notifications/{idNotification}/{field}`

<h3 id="getnotificationsbyidnotificationbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idNotification|path|string|true|idNotification|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getnotificationsbyidnotificationbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-organization">organization</h1>

https://trello.com/docs/api/organization/index.html

## addOrganizations()

<a id="opIdaddOrganizations"></a>

> Code samples

```bash
curl "https://example.com/organizations?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "desc": "string",
    "displayName": "string",
    "name": "string",
    "prefs/associatedDomain": "string",
    "prefs/boardVisibilityRestrict/org": "string",
    "prefs/boardVisibilityRestrict/private": "string",
    "prefs/boardVisibilityRestrict/public": "string",
    "prefs/externalMembersDisabled": "string",
    "prefs/googleAppsVersion": "string",
    "prefs/orgInviteRestrict": "string",
    "prefs/permissionLevel": "string",
    "website": "string"
  }'
```

`POST /organizations`

> Body parameter

```json
{
  "desc": "string",
  "displayName": "string",
  "name": "string",
  "prefs/associatedDomain": "string",
  "prefs/boardVisibilityRestrict/org": "string",
  "prefs/boardVisibilityRestrict/private": "string",
  "prefs/boardVisibilityRestrict/public": "string",
  "prefs/externalMembersDisabled": "string",
  "prefs/googleAppsVersion": "string",
  "prefs/orgInviteRestrict": "string",
  "prefs/permissionLevel": "string",
  "website": "string"
}
```

<h3 id="addorganizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations](#schemaorganizations)|true|Attributes of "Organizations" to be added.|
|» desc|body|string|false|a string with a length from 0 to 16384|
|» displayName|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|
|» name|body|string|false|a string with a length from 0 to 16384|
|» prefs/associatedDomain|body|string|false|The google apps domain to link this org to.|
|» prefs/boardVisibilityRestrict/org|body|string|false|One of: admin, none or org|
|» prefs/boardVisibilityRestrict/private|body|string|false|One of: admin, none or org|
|» prefs/boardVisibilityRestrict/public|body|string|false|One of: admin, none or org|
|» prefs/externalMembersDisabled|body|string|false| true or false|
|» prefs/googleAppsVersion|body|string|false|a number from 1 to 2|
|» prefs/orgInviteRestrict|body|string|false|An email address with optional expansion tokens|
|» prefs/permissionLevel|body|string|false|One of: private or public|
|» website|body|string|false|A URL starting with http:// or https:// or null|

<h3 id="addorganizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsByIdOrg()

<a id="opIdgetOrganizationsByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}`

<h3 id="getorganizationsbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|actions_entities|query|string|false| true or false|
|actions_display|query|string|false| true or false|
|actions_limit|query|string|false|a number from 0 to 1000|
|action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|memberships|query|string|false|all or a comma-separated list of: active, admin, deactivated, me or normal|
|memberships_member|query|string|false| true or false|
|memberships_member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|members|query|string|false|One of: admins, all, none, normal or owners|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|member_activity|query|string|false|true or false ; works for premium organizations only.|
|membersInvited|query|string|false|One of: admins, all, none, normal or owners|
|membersInvited_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|boards|query|string|false|all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned|
|board_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|board_actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|board_actions_entities|query|string|false| true or false|
|board_actions_display|query|string|false| true or false|
|board_actions_format|query|string|false|One of: count, list or minimal|
|board_actions_since|query|string|false|A date, null or lastView|
|board_actions_limit|query|string|false|a number from 0 to 1000|
|board_action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|board_lists|query|string|false|One of: all, closed, none or open|
|paid_account|query|string|false| true or false|
|fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsByIdOrg()

<a id="opIdupdateOrganizationsByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "desc": "string",
    "displayName": "string",
    "name": "string",
    "prefs/associatedDomain": "string",
    "prefs/boardVisibilityRestrict/org": "string",
    "prefs/boardVisibilityRestrict/private": "string",
    "prefs/boardVisibilityRestrict/public": "string",
    "prefs/externalMembersDisabled": "string",
    "prefs/googleAppsVersion": "string",
    "prefs/orgInviteRestrict": "string",
    "prefs/permissionLevel": "string",
    "website": "string"
  }'
```

`PUT /organizations/{idOrg}`

> Body parameter

```json
{
  "desc": "string",
  "displayName": "string",
  "name": "string",
  "prefs/associatedDomain": "string",
  "prefs/boardVisibilityRestrict/org": "string",
  "prefs/boardVisibilityRestrict/private": "string",
  "prefs/boardVisibilityRestrict/public": "string",
  "prefs/externalMembersDisabled": "string",
  "prefs/googleAppsVersion": "string",
  "prefs/orgInviteRestrict": "string",
  "prefs/permissionLevel": "string",
  "website": "string"
}
```

<h3 id="updateorganizationsbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations](#schemaorganizations)|true|Attributes of "Organizations" to be updated.|
|» desc|body|string|false|a string with a length from 0 to 16384|
|» displayName|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|
|» name|body|string|false|a string with a length from 0 to 16384|
|» prefs/associatedDomain|body|string|false|The google apps domain to link this org to.|
|» prefs/boardVisibilityRestrict/org|body|string|false|One of: admin, none or org|
|» prefs/boardVisibilityRestrict/private|body|string|false|One of: admin, none or org|
|» prefs/boardVisibilityRestrict/public|body|string|false|One of: admin, none or org|
|» prefs/externalMembersDisabled|body|string|false| true or false|
|» prefs/googleAppsVersion|body|string|false|a number from 1 to 2|
|» prefs/orgInviteRestrict|body|string|false|An email address with optional expansion tokens|
|» prefs/permissionLevel|body|string|false|One of: private or public|
|» website|body|string|false|A URL starting with http:// or https:// or null|

<h3 id="updateorganizationsbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteOrganizationsByIdOrg()

<a id="opIddeleteOrganizationsByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /organizations/{idOrg}`

<h3 id="deleteorganizationsbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteorganizationsbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsActionsByIdOrg()

<a id="opIdgetOrganizationsActionsByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/actions?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/actions`

<h3 id="getorganizationsactionsbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|entities|query|string|false| true or false|
|display|query|string|false| true or false|
|filter|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|limit|query|string|false|a number from 0 to 1000|
|format|query|string|false|One of: count, list or minimal|
|since|query|string|false|A date, null or lastView|
|before|query|string|false|A date, or null|
|page|query|string|false|Page * limit must be less than 1000|
|idModels|query|string|false|Only return actions related to these model ids|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|memberCreator|query|string|false| true or false|
|memberCreator_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsactionsbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsBoardsByIdOrg()

<a id="opIdgetOrganizationsBoardsByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/boards?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/boards`

<h3 id="getorganizationsboardsbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|filter|query|string|false|all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned|
|fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|actions_entities|query|string|false| true or false|
|actions_limit|query|string|false|a number from 0 to 1000|
|actions_format|query|string|false|One of: count, list or minimal|
|actions_since|query|string|false|A date, null or lastView|
|action_fields|query|string|false|all or a comma-separated list of: data, date, idMemberCreator or type|
|memberships|query|string|false|all or a comma-separated list of: active, admin, deactivated, me or normal|
|organization|query|string|false| true or false|
|organization_fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|lists|query|string|false|One of: all, closed, none or open|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsboardsbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsBoardsByIdOrgByFilter()

<a id="opIdgetOrganizationsBoardsByIdOrgByFilter"></a>

> Code samples

```bash
curl 'https://example.com/organizations/string/boards/string?key=string&token=string'
```

`GET /organizations/{idOrg}/boards/{filter}`

<h3 id="getorganizationsboardsbyidorgbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsboardsbyidorgbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## getOrganizationsDeltasByIdOrg()

<a id="opIdgetOrganizationsDeltasByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/deltas?tags=string&ixLastUpdate=string&key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/deltas`

<h3 id="getorganizationsdeltasbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|tags|query|string|true|A valid tag for subscribing|
|ixLastUpdate|query|string|true|a number from -1 to Infinity|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsdeltasbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsDescByIdOrg()

<a id="opIdupdateOrganizationsDescByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/desc?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/desc`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsdescbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_desc](#schemaorganizations_desc)|true|Attributes of "Organizations Desc" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updateorganizationsdescbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsDisplayNameByIdOrg()

<a id="opIdupdateOrganizationsDisplayNameByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/displayName?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/displayName`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsdisplaynamebyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_displayName](#schemaorganizations_displayname)|true|Attributes of "Organizations Display Name" to be updated.|
|» value|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|

<h3 id="updateorganizationsdisplaynamebyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addOrganizationsLogoByIdOrg()

<a id="opIdaddOrganizationsLogoByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/logo?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "file": "string"
  }'
```

`POST /organizations/{idOrg}/logo`

> Body parameter

```json
{
  "file": "string"
}
```

<h3 id="addorganizationslogobyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_logo](#schemaorganizations_logo)|true|Attributes of "Organizations Logo" to be added.|
|» file|body|string|false|A file|

<h3 id="addorganizationslogobyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteOrganizationsLogoByIdOrg()

<a id="opIddeleteOrganizationsLogoByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/logo?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /organizations/{idOrg}/logo`

<h3 id="deleteorganizationslogobyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteorganizationslogobyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsMembersByIdOrg()

<a id="opIdgetOrganizationsMembersByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/members?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/members`

<h3 id="getorganizationsmembersbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|filter|query|string|false|One of: admins, all, none, normal or owners|
|fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|activity|query|string|false|true or false ; works for premium organizations only.|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsmembersbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsMembersByIdOrg()

<a id="opIdupdateOrganizationsMembersByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/members?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "fullName": "string",
    "type": "string"
  }'
```

`PUT /organizations/{idOrg}/members`

> Body parameter

```json
{
  "email": "string",
  "fullName": "string",
  "type": "string"
}
```

<h3 id="updateorganizationsmembersbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_members](#schemaorganizations_members)|true|Attributes of "Organizations Members" to be updated.|
|» email|body|string|false|An email address|
|» fullName|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|
|» type|body|string|false|One of: admin, normal or observer|

<h3 id="updateorganizationsmembersbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsMembersByIdOrgByFilter()

<a id="opIdgetOrganizationsMembersByIdOrgByFilter"></a>

> Code samples

```bash
curl 'https://example.com/organizations/string/members/string?key=string&token=string'
```

`GET /organizations/{idOrg}/members/{filter}`

<h3 id="getorganizationsmembersbyidorgbyfilter-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|filter|path|string|true|filter|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsmembersbyidorgbyfilter-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## updateOrganizationsMembersByIdOrgByIdMember()

<a id="opIdupdateOrganizationsMembersByIdOrgByIdMember"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/members/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "fullName": "string",
    "type": "string"
  }'
```

`PUT /organizations/{idOrg}/members/{idMember}`

> Body parameter

```json
{
  "email": "string",
  "fullName": "string",
  "type": "string"
}
```

<h3 id="updateorganizationsmembersbyidorgbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|idMember|path|string|true|idMember|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_members](#schemaorganizations_members)|true|Attributes of "Organizations Members" to be updated.|
|» email|body|string|false|An email address|
|» fullName|body|string|false|A string with a length of at least 1.  Cannot begin or end with a space.|
|» type|body|string|false|One of: admin, normal or observer|

<h3 id="updateorganizationsmembersbyidorgbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteOrganizationsMembersByIdOrgByIdMember()

<a id="opIddeleteOrganizationsMembersByIdOrgByIdMember"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/members/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /organizations/{idOrg}/members/{idMember}`

<h3 id="deleteorganizationsmembersbyidorgbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|idMember|path|string|true|idMember|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteorganizationsmembersbyidorgbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteOrganizationsMembersAllByIdOrgByIdMember()

<a id="opIddeleteOrganizationsMembersAllByIdOrgByIdMember"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/members/string/all?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /organizations/{idOrg}/members/{idMember}/all`

<h3 id="deleteorganizationsmembersallbyidorgbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|idMember|path|string|true|idMember|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteorganizationsmembersallbyidorgbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsMembersCardsByIdOrgByIdMember()

<a id="opIdgetOrganizationsMembersCardsByIdOrgByIdMember"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/members/string/cards?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/members/{idMember}/cards`

<h3 id="getorganizationsmemberscardsbyidorgbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|idMember|path|string|true|idMember|
|actions|query|string|false|all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization|
|attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|attachment_fields|query|string|false|all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url|
|members|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|checkItemStates|query|string|false| true or false|
|checklists|query|string|false|One of: all or none|
|board|query|string|false| true or false|
|board_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|list|query|string|false| true or false|
|list_fields|query|string|false|all or a comma-separated list of: closed, idBoard, name, pos or subscribed|
|filter|query|string|false|One of: all, closed, none, open or visible|
|fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsmemberscardsbyidorgbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsMembersDeactivatedByIdOrgByIdMember()

<a id="opIdupdateOrganizationsMembersDeactivatedByIdOrgByIdMember"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/members/string/deactivated?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/members/{idMember}/deactivated`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsmembersdeactivatedbyidorgbyidmember-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|idMember|path|string|true|idMember|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_members_deactivated](#schemaorganizations_members_deactivated)|true|Attributes of "Organizations Members Deactivated" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateorganizationsmembersdeactivatedbyidorgbyidmember-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsMembersInvitedByIdOrg()

<a id="opIdgetOrganizationsMembersInvitedByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/membersInvited?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/membersInvited`

<h3 id="getorganizationsmembersinvitedbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|fields|query|string|false|all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsmembersinvitedbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsMembersInvitedByIdOrgByField()

<a id="opIdgetOrganizationsMembersInvitedByIdOrgByField"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/membersInvited/string?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/membersInvited/{field}`

<h3 id="getorganizationsmembersinvitedbyidorgbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsmembersinvitedbyidorgbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsMembershipsByIdOrg()

<a id="opIdgetOrganizationsMembershipsByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/memberships?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/memberships`

<h3 id="getorganizationsmembershipsbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|filter|query|string|false|all or a comma-separated list of: active, admin, deactivated, me or normal|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsmembershipsbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsMembershipsByIdOrgByIdMembership()

<a id="opIdgetOrganizationsMembershipsByIdOrgByIdMembership"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/memberships/string?key=string&token=string&key=${API_KEY}"
```

`GET /organizations/{idOrg}/memberships/{idMembership}`

<h3 id="getorganizationsmembershipsbyidorgbyidmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|idMembership|path|string|true|idMembership|
|member|query|string|false| true or false|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsmembershipsbyidorgbyidmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsMembershipsByIdOrgByIdMembership()

<a id="opIdupdateOrganizationsMembershipsByIdOrgByIdMembership"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/memberships/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "member_fields": "string",
    "type": "string"
  }'
```

`PUT /organizations/{idOrg}/memberships/{idMembership}`

> Body parameter

```json
{
  "member_fields": "string",
  "type": "string"
}
```

<h3 id="updateorganizationsmembershipsbyidorgbyidmembership-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|idMembership|path|string|true|idMembership|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_memberships](#schemaorganizations_memberships)|true|Attributes of "Organizations Memberships" to be updated.|
|» member_fields|body|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|» type|body|string|false|One of: admin, normal or observer|

<h3 id="updateorganizationsmembershipsbyidorgbyidmembership-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsNameByIdOrg()

<a id="opIdupdateOrganizationsNameByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/name?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/name`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsnamebyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_name](#schemaorganizations_name)|true|Attributes of "Organizations Name" to be updated.|
|» value|body|string|false|A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.|

<h3 id="updateorganizationsnamebyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsPrefsAssociatedDomainByIdOrg()

<a id="opIdupdateOrganizationsPrefsAssociatedDomainByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/associatedDomain?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/prefs/associatedDomain`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsprefsassociateddomainbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_associatedDomain](#schemaprefs_associateddomain)|true|Attributes of "Prefs Associated Domain" to be updated.|
|» value|body|string|false|The google apps domain to link this org to.|

<h3 id="updateorganizationsprefsassociateddomainbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteOrganizationsPrefsAssociatedDomainByIdOrg()

<a id="opIddeleteOrganizationsPrefsAssociatedDomainByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/associatedDomain?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /organizations/{idOrg}/prefs/associatedDomain`

<h3 id="deleteorganizationsprefsassociateddomainbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteorganizationsprefsassociateddomainbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()

<a id="opIdupdateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/boardVisibilityRestrict/org?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/prefs/boardVisibilityRestrict/org`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsprefsboardvisibilityrestrictorgbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_boardVisibilityRestrict](#schemaprefs_boardvisibilityrestrict)|true|Attributes of "Prefs Board Visibility Restrict" to be updated.|
|» value|body|string|false|One of: admin, none or org|

<h3 id="updateorganizationsprefsboardvisibilityrestrictorgbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()

<a id="opIdupdateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/boardVisibilityRestrict/private?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/prefs/boardVisibilityRestrict/private`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsprefsboardvisibilityrestrictprivatebyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_boardVisibilityRestrict](#schemaprefs_boardvisibilityrestrict)|true|Attributes of "Prefs Board Visibility Restrict" to be updated.|
|» value|body|string|false|One of: admin, none or org|

<h3 id="updateorganizationsprefsboardvisibilityrestrictprivatebyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()

<a id="opIdupdateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/boardVisibilityRestrict/public?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/prefs/boardVisibilityRestrict/public`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsprefsboardvisibilityrestrictpublicbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_boardVisibilityRestrict](#schemaprefs_boardvisibilityrestrict)|true|Attributes of "Prefs Board Visibility Restrict" to be updated.|
|» value|body|string|false|One of: admin, none or org|

<h3 id="updateorganizationsprefsboardvisibilityrestrictpublicbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsPrefsExternalMembersDisabledByIdOrg()

<a id="opIdupdateOrganizationsPrefsExternalMembersDisabledByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/externalMembersDisabled?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/prefs/externalMembersDisabled`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsprefsexternalmembersdisabledbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_externalMembersDisabled](#schemaprefs_externalmembersdisabled)|true|Attributes of "Prefs External Members Disabled" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updateorganizationsprefsexternalmembersdisabledbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsPrefsGoogleAppsVersionByIdOrg()

<a id="opIdupdateOrganizationsPrefsGoogleAppsVersionByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/googleAppsVersion?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/prefs/googleAppsVersion`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsprefsgoogleappsversionbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_googleAppsVersion](#schemaprefs_googleappsversion)|true|Attributes of "Prefs Google Apps Version" to be updated.|
|» value|body|string|false|a number from 1 to 2|

<h3 id="updateorganizationsprefsgoogleappsversionbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsPrefsOrgInviteRestrictByIdOrg()

<a id="opIdupdateOrganizationsPrefsOrgInviteRestrictByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/orgInviteRestrict?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/prefs/orgInviteRestrict`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsprefsorginviterestrictbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_orgInviteRestrict](#schemaprefs_orginviterestrict)|true|Attributes of "Prefs Org Invite Restrict" to be updated.|
|» value|body|string|false|An email address with optional expansion tokens|

<h3 id="updateorganizationsprefsorginviterestrictbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()

<a id="opIddeleteOrganizationsPrefsOrgInviteRestrictByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/orgInviteRestrict?value=string&key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /organizations/{idOrg}/prefs/orgInviteRestrict`

<h3 id="deleteorganizationsprefsorginviterestrictbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|value|query|string|true|An email address with optional expansion tokens|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deleteorganizationsprefsorginviterestrictbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsPrefsPermissionLevelByIdOrg()

<a id="opIdupdateOrganizationsPrefsPermissionLevelByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/prefs/permissionLevel?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/prefs/permissionLevel`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationsprefspermissionlevelbyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[prefs_permissionLevel](#schemaprefs_permissionlevel)|true|Attributes of "Prefs Permission Level" to be updated.|
|» value|body|string|false|One of: private or public|

<h3 id="updateorganizationsprefspermissionlevelbyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateOrganizationsWebsiteByIdOrg()

<a id="opIdupdateOrganizationsWebsiteByIdOrg"></a>

> Code samples

```bash
curl "https://example.com/organizations/string/website?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /organizations/{idOrg}/website`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updateorganizationswebsitebyidorg-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[organizations_website](#schemaorganizations_website)|true|Attributes of "Organizations Website" to be updated.|
|» value|body|string|false|A URL starting with http:// or https:// or null|

<h3 id="updateorganizationswebsitebyidorg-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getOrganizationsByIdOrgByField()

<a id="opIdgetOrganizationsByIdOrgByField"></a>

> Code samples

```bash
curl 'https://example.com/organizations/string/string?key=string&token=string'
```

`GET /organizations/{idOrg}/{field}`

<h3 id="getorganizationsbyidorgbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idOrg|path|string|true|idOrg or name|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getorganizationsbyidorgbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-search">search</h1>

https://trello.com/docs/api/search/index.html

## getSearch()

<a id="opIdgetSearch"></a>

> Code samples

```bash
curl 'https://example.com/search?query=string&idOrganizations=string&key=string&token=string'
```

`GET /search`

<h3 id="getsearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|a string with a length from 1 to 16384|
|idBoards|query|string|false|A comma-separated list of objectIds, 24-character hex strings|
|idOrganizations|query|string|true|A comma-separated list of objectIds, 24-character hex strings|
|idCards|query|string|false|A comma-separated list of objectIds, 24-character hex strings|
|modelTypes|query|string|false|all or a comma-separated list of: actions, boards, cards, members or organizations|
|board_fields|query|string|false|all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url|
|boards_limit|query|string|false|a number from 1 to 1000|
|card_fields|query|string|false|all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url|
|cards_limit|query|string|false|a number from 1 to 1000|
|cards_page|query|string|false|a number from 0 to 100|
|card_board|query|string|false| true or false|
|card_list|query|string|false| true or false|
|card_members|query|string|false| true or false|
|card_stickers|query|string|false| true or false|
|card_attachments|query|string|false|A boolean value or &quot;cover&quot; for only card cover attachments|
|organization_fields|query|string|false|all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website|
|organizations_limit|query|string|false|a number from 1 to 1000|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|members_limit|query|string|false|a number from 1 to 1000|
|partial|query|string|false| true or false|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getsearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

## getSearchMembers()

<a id="opIdgetSearchMembers"></a>

> Code samples

```bash
curl 'https://example.com/search/members?query=string&key=string&token=string'
```

`GET /search/members`

<h3 id="getsearchmembers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|a string with a length from 1 to 16384|
|limit|query|string|false|a number from 1 to 20|
|idBoard|query|string|false|An id, or null|
|idOrganization|query|string|false|An id, or null|
|onlyOrgMembers|query|string|false|A boolean|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getsearchmembers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-session">session</h1>

https://trello.com/docs/api/session/index.html

## addSessions()

<a id="opIdaddSessions"></a>

> Code samples

```bash
curl "https://example.com/sessions?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "idBoard": "string",
    "status": "string"
  }'
```

`POST /sessions`

> Body parameter

```json
{
  "idBoard": "string",
  "status": "string"
}
```

<h3 id="addsessions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[sessions](#schemasessions)|true|Attributes of "Sessions" to be added.|
|» idBoard|body|string|false|The id of the board you&#39;re viewing.  Boards with no viewers will not get updates about members&#39; statuses.|
|» status|body|string|false|One of: active, disconnected or idle|

<h3 id="addsessions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getSessionsSocket()

<a id="opIdgetSessionsSocket"></a>

> Code samples

```bash
curl "https://example.com/sessions/socket?key=string&token=string&key=${API_KEY}"
```

`GET /sessions/socket`

This is the route for WebSocket requests.  See the socket API reference for a description of WebSocket usage.

<h3 id="getsessionssocket-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getsessionssocket-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateSessionsByIdSession()

<a id="opIdupdateSessionsByIdSession"></a>

> Code samples

```bash
curl "https://example.com/sessions/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "idBoard": "string",
    "status": "string"
  }'
```

`PUT /sessions/{idSession}`

> Body parameter

```json
{
  "idBoard": "string",
  "status": "string"
}
```

<h3 id="updatesessionsbyidsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idSession|path|string|true|idSession|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[sessions](#schemasessions)|true|Attributes of "Sessions" to be updated.|
|» idBoard|body|string|false|The id of the board you&#39;re viewing.  Boards with no viewers will not get updates about members&#39; statuses.|
|» status|body|string|false|One of: active, disconnected or idle|

<h3 id="updatesessionsbyidsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateSessionsStatusByIdSession()

<a id="opIdupdateSessionsStatusByIdSession"></a>

> Code samples

```bash
curl "https://example.com/sessions/string/status?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /sessions/{idSession}/status`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatesessionsstatusbyidsession-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idSession|path|string|true|idSession|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[sessions_status](#schemasessions_status)|true|Attributes of "Sessions Status" to be updated.|
|» value|body|string|false|One of: active, disconnected or idle|

<h3 id="updatesessionsstatusbyidsession-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

<h1 id="trello-token">token</h1>

https://trello.com/docs/api/token/index.html

## getTokensByToken()

<a id="opIdgetTokensByToken"></a>

> Code samples

```bash
curl "https://example.com/tokens/string?key=string&token=string&key=${API_KEY}"
```

`GET /tokens/{token}`

<h3 id="gettokensbytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|fields|query|string|false|all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions|
|webhooks|query|string|false| true or false|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="gettokensbytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteTokensByToken()

<a id="opIddeleteTokensByToken"></a>

> Code samples

```bash
curl "https://example.com/tokens/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /tokens/{token}`

<h3 id="deletetokensbytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletetokensbytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getTokensMemberByToken()

<a id="opIdgetTokensMemberByToken"></a>

> Code samples

```bash
curl "https://example.com/tokens/string/member?key=string&token=string&key=${API_KEY}"
```

`GET /tokens/{token}/member`

<h3 id="gettokensmemberbytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|fields|query|string|false|all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="gettokensmemberbytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getTokensMemberByTokenByField()

<a id="opIdgetTokensMemberByTokenByField"></a>

> Code samples

```bash
curl "https://example.com/tokens/string/member/string?key=string&token=string&key=${API_KEY}"
```

`GET /tokens/{token}/member/{field}`

<h3 id="gettokensmemberbytokenbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="gettokensmemberbytokenbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getTokensWebhooksByToken()

<a id="opIdgetTokensWebhooksByToken"></a>

> Code samples

```bash
curl "https://example.com/tokens/string/webhooks?key=string&token=string&key=${API_KEY}"
```

`GET /tokens/{token}/webhooks`

<h3 id="gettokenswebhooksbytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="gettokenswebhooksbytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateTokensWebhooksByToken()

<a id="opIdupdateTokensWebhooksByToken"></a>

> Code samples

```bash
curl "https://example.com/tokens/string/webhooks?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "callbackURL": "string",
    "description": "string",
    "idModel": "string"
  }'
```

`PUT /tokens/{token}/webhooks`

> Body parameter

```json
{
  "callbackURL": "string",
  "description": "string",
  "idModel": "string"
}
```

<h3 id="updatetokenswebhooksbytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[tokens_webhooks](#schematokens_webhooks)|true|Attributes of "Tokens Webhooks" to be updated.|
|» callbackURL|body|string|false|A valid URL that is reachable with a HEAD request|
|» description|body|string|false|a string with a length from 0 to 16384|
|» idModel|body|string|false|id of the model to be monitored|

<h3 id="updatetokenswebhooksbytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## addTokensWebhooksByToken()

<a id="opIdaddTokensWebhooksByToken"></a>

> Code samples

```bash
curl "https://example.com/tokens/string/webhooks?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "callbackURL": "string",
    "description": "string",
    "idModel": "string"
  }'
```

`POST /tokens/{token}/webhooks`

> Body parameter

```json
{
  "callbackURL": "string",
  "description": "string",
  "idModel": "string"
}
```

<h3 id="addtokenswebhooksbytoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[tokens_webhooks](#schematokens_webhooks)|true|Attributes of "Tokens Webhooks" to be added.|
|» callbackURL|body|string|false|A valid URL that is reachable with a HEAD request|
|» description|body|string|false|a string with a length from 0 to 16384|
|» idModel|body|string|false|id of the model to be monitored|

<h3 id="addtokenswebhooksbytoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getTokensWebhooksByTokenByIdWebhook()

<a id="opIdgetTokensWebhooksByTokenByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/tokens/string/webhooks/string?key=string&token=string&key=${API_KEY}"
```

`GET /tokens/{token}/webhooks/{idWebhook}`

<h3 id="gettokenswebhooksbytokenbyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="gettokenswebhooksbytokenbyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteTokensWebhooksByTokenByIdWebhook()

<a id="opIddeleteTokensWebhooksByTokenByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/tokens/string/webhooks/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /tokens/{token}/webhooks/{idWebhook}`

<h3 id="deletetokenswebhooksbytokenbyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletetokenswebhooksbytokenbyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getTokensByTokenByField()

<a id="opIdgetTokensByTokenByField"></a>

> Code samples

```bash
curl 'https://example.com/tokens/string/string?key=string&token=string'
```

`GET /tokens/{token}/{field}`

<h3 id="gettokensbytokenbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|token|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="gettokensbytokenbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trello-type">type</h1>

https://trello.com/docs/api/type/index.html

## getTypesById()

<a id="opIdgetTypesById"></a>

> Code samples

```bash
curl "https://example.com/types/string?key=string&token=string&key=${API_KEY}"
```

`GET /types/{id}`

<h3 id="gettypesbyid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|id|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="gettypesbyid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

<h1 id="trello-webhook">webhook</h1>

https://trello.com/docs/api/webhook/index.html

## addWebhooks()

<a id="opIdaddWebhooks"></a>

> Code samples

```bash
curl "https://example.com/webhooks?key=string&token=string&key=${API_KEY}" \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "active": "string",
    "callbackURL": "string",
    "description": "string",
    "idModel": "string"
  }'
```

`POST /webhooks`

> Body parameter

```json
{
  "active": "string",
  "callbackURL": "string",
  "description": "string",
  "idModel": "string"
}
```

<h3 id="addwebhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[webhooks](#schemawebhooks)|true|Attributes of "Webhooks" to be added.|
|» active|body|string|false| true or false|
|» callbackURL|body|string|false|A valid URL that is reachable with a HEAD request|
|» description|body|string|false|a string with a length from 0 to 16384|
|» idModel|body|string|false|id of the model that should be hooked|

<h3 id="addwebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateWebhooks()

<a id="opIdupdateWebhooks"></a>

> Code samples

```bash
curl "https://example.com/webhooks/?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "active": "string",
    "callbackURL": "string",
    "description": "string",
    "idModel": "string"
  }'
```

`PUT /webhooks/`

> Body parameter

```json
{
  "active": "string",
  "callbackURL": "string",
  "description": "string",
  "idModel": "string"
}
```

<h3 id="updatewebhooks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[webhooks](#schemawebhooks)|true|Attributes of "Webhooks" to be updated.|
|» active|body|string|false| true or false|
|» callbackURL|body|string|false|A valid URL that is reachable with a HEAD request|
|» description|body|string|false|a string with a length from 0 to 16384|
|» idModel|body|string|false|id of the model that should be hooked|

<h3 id="updatewebhooks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getWebhooksByIdWebhook()

<a id="opIdgetWebhooksByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/webhooks/string?key=string&token=string&key=${API_KEY}"
```

`GET /webhooks/{idWebhook}`

<h3 id="getwebhooksbyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getwebhooksbyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateWebhooksByIdWebhook()

<a id="opIdupdateWebhooksByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/webhooks/string?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "active": "string",
    "callbackURL": "string",
    "description": "string",
    "idModel": "string"
  }'
```

`PUT /webhooks/{idWebhook}`

> Body parameter

```json
{
  "active": "string",
  "callbackURL": "string",
  "description": "string",
  "idModel": "string"
}
```

<h3 id="updatewebhooksbyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[webhooks](#schemawebhooks)|true|Attributes of "Webhooks" to be updated.|
|» active|body|string|false| true or false|
|» callbackURL|body|string|false|A valid URL that is reachable with a HEAD request|
|» description|body|string|false|a string with a length from 0 to 16384|
|» idModel|body|string|false|id of the model that should be hooked|

<h3 id="updatewebhooksbyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## deleteWebhooksByIdWebhook()

<a id="opIddeleteWebhooksByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/webhooks/string?key=string&token=string&key=${API_KEY}" \
  -X DELETE
```

`DELETE /webhooks/{idWebhook}`

<h3 id="deletewebhooksbyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="deletewebhooksbyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateWebhooksActiveByIdWebhook()

<a id="opIdupdateWebhooksActiveByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/webhooks/string/active?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /webhooks/{idWebhook}/active`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatewebhooksactivebyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[webhooks_active](#schemawebhooks_active)|true|Attributes of "Webhooks Active" to be updated.|
|» value|body|string|false| true or false|

<h3 id="updatewebhooksactivebyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateWebhooksCallbackURLByIdWebhook()

<a id="opIdupdateWebhooksCallbackURLByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/webhooks/string/callbackURL?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /webhooks/{idWebhook}/callbackURL`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatewebhookscallbackurlbyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[webhooks_callbackURL](#schemawebhooks_callbackurl)|true|Attributes of "Webhooks Callback Url" to be updated.|
|» value|body|string|false|A valid URL that is reachable with a HEAD request|

<h3 id="updatewebhookscallbackurlbyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateWebhooksDescriptionByIdWebhook()

<a id="opIdupdateWebhooksDescriptionByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/webhooks/string/description?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /webhooks/{idWebhook}/description`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatewebhooksdescriptionbyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[webhooks_description](#schemawebhooks_description)|true|Attributes of "Webhooks Description" to be updated.|
|» value|body|string|false|a string with a length from 0 to 16384|

<h3 id="updatewebhooksdescriptionbyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## updateWebhooksIdModelByIdWebhook()

<a id="opIdupdateWebhooksIdModelByIdWebhook"></a>

> Code samples

```bash
curl "https://example.com/webhooks/string/idModel?key=string&token=string&key=${API_KEY}" \
  -X PUT \
  -H 'Content-Type: application/json' \
  -d '{
    "value": "string"
  }'
```

`PUT /webhooks/{idWebhook}/idModel`

> Body parameter

```json
{
  "value": "string"
}
```

<h3 id="updatewebhooksidmodelbyidwebhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idWebhook|path|string|true|idWebhook|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|
|body|body|[webhooks_idModel](#schemawebhooks_idmodel)|true|Attributes of "Webhooks Id Model" to be updated.|
|» value|body|string|false|id of the model to be monitored|

<h3 id="updatewebhooksidmodelbyidwebhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api_key, api_token
</aside>

## getWebhooksByIdWebhookByField()

<a id="opIdgetWebhooksByIdWebhookByField"></a>

> Code samples

```bash
curl 'https://example.com/webhooks/string/string?key=string&token=string'
```

`GET /webhooks/{idWebhook}/{field}`

<h3 id="getwebhooksbyidwebhookbyfield-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idWebhook|path|string|true|idWebhook|
|field|path|string|true|field|
|key|query|string|true|<a href="https://trello.com/1/appKey/generate"  target="_blank">Generate your application key</a>|
|token|query|string|true|<a href="https://trello.com/docs/gettingstarted/index.html#getting-a-token-from-a-user"  target="_blank">Getting a token from a user</a>|

<h3 id="getwebhooksbyidwebhookbyfield-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|400|Bad Request|Server rejection|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_actions">actions</h2>
<!-- backwards compatibility -->
<a id="schemaactions"></a>
<a id="schema_actions"></a>
<a id="tocSactions"></a>
<a id="tocsactions"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_actions_comments">actions_comments</h2>
<!-- backwards compatibility -->
<a id="schemaactions_comments"></a>
<a id="schema_actions_comments"></a>
<a id="tocSactions_comments"></a>
<a id="tocsactions_comments"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_actions_text">actions_text</h2>
<!-- backwards compatibility -->
<a id="schemaactions_text"></a>
<a id="schema_actions_text"></a>
<a id="tocSactions_text"></a>
<a id="tocsactions_text"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_boards">boards</h2>
<!-- backwards compatibility -->
<a id="schemaboards"></a>
<a id="schema_boards"></a>
<a id="tocSboards"></a>
<a id="tocsboards"></a>

```json
{
  "closed": "string",
  "desc": "string",
  "idBoardSource": "string",
  "idOrganization": "string",
  "keepFromSource": "string",
  "labelNames/blue": "string",
  "labelNames/green": "string",
  "labelNames/orange": "string",
  "labelNames/purple": "string",
  "labelNames/red": "string",
  "labelNames/yellow": "string",
  "name": "string",
  "powerUps": "string",
  "prefs/background": "string",
  "prefs/calendarFeedEnabled": "string",
  "prefs/cardAging": "string",
  "prefs/cardCovers": "string",
  "prefs/comments": "string",
  "prefs/invitations": "string",
  "prefs/permissionLevel": "string",
  "prefs/selfJoin": "string",
  "prefs/voting": "string",
  "prefs_background": "string",
  "prefs_cardAging": "string",
  "prefs_cardCovers": "string",
  "prefs_comments": "string",
  "prefs_invitations": "string",
  "prefs_permissionLevel": "string",
  "prefs_selfJoin": "string",
  "prefs_voting": "string",
  "subscribed": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed|string|false|none| true or false|
|desc|string|false|none|a string with a length from 0 to 16384|
|idBoardSource|string|false|none|The id of the board to copy into the new board|
|idOrganization|string|false|none|The id or name of the organization to add the board to.|
|keepFromSource|string|false|none|Components of the source board to copy.|
|labelNames/blue|string|false|none|a string with a length from 0 to 16384|
|labelNames/green|string|false|none|a string with a length from 0 to 16384|
|labelNames/orange|string|false|none|a string with a length from 0 to 16384|
|labelNames/purple|string|false|none|a string with a length from 0 to 16384|
|labelNames/red|string|false|none|a string with a length from 0 to 16384|
|labelNames/yellow|string|false|none|a string with a length from 0 to 16384|
|name|string|false|none|a string with a length from 1 to 16384|
|powerUps|string|false|none|all or a comma-separated list of: calendar, cardAging, recap or voting|
|prefs/background|string|false|none|A standard background name, or the id of a custom background|
|prefs/calendarFeedEnabled|string|false|none| true or false|
|prefs/cardAging|string|false|none|One of: pirate or regular|
|prefs/cardCovers|string|false|none| true or false|
|prefs/comments|string|false|none|One of: disabled, members, observers, org or public|
|prefs/invitations|string|false|none|One of: admins or members|
|prefs/permissionLevel|string|false|none|One of: org, private or public|
|prefs/selfJoin|string|false|none| true or false|
|prefs/voting|string|false|none|One of: disabled, members, observers, org or public|
|prefs_background|string|false|none|a string with a length from 0 to 16384|
|prefs_cardAging|string|false|none|One of: pirate or regular|
|prefs_cardCovers|string|false|none| true or false|
|prefs_comments|string|false|none|One of: disabled, members, observers, org or public|
|prefs_invitations|string|false|none|One of: admins or members|
|prefs_permissionLevel|string|false|none|One of: org, private or public|
|prefs_selfJoin|string|false|none| true or false|
|prefs_voting|string|false|none|One of: disabled, members, observers, org or public|
|subscribed|string|false|none| true or false|

<h2 id="tocS_boards_checklists">boards_checklists</h2>
<!-- backwards compatibility -->
<a id="schemaboards_checklists"></a>
<a id="schema_boards_checklists"></a>
<a id="tocSboards_checklists"></a>
<a id="tocsboards_checklists"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_boards_closed">boards_closed</h2>
<!-- backwards compatibility -->
<a id="schemaboards_closed"></a>
<a id="schema_boards_closed"></a>
<a id="tocSboards_closed"></a>
<a id="tocsboards_closed"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_boards_desc">boards_desc</h2>
<!-- backwards compatibility -->
<a id="schemaboards_desc"></a>
<a id="schema_boards_desc"></a>
<a id="tocSboards_desc"></a>
<a id="tocsboards_desc"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_boards_idOrganization">boards_idOrganization</h2>
<!-- backwards compatibility -->
<a id="schemaboards_idorganization"></a>
<a id="schema_boards_idOrganization"></a>
<a id="tocSboards_idorganization"></a>
<a id="tocsboards_idorganization"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_boards_labels">boards_labels</h2>
<!-- backwards compatibility -->
<a id="schemaboards_labels"></a>
<a id="schema_boards_labels"></a>
<a id="tocSboards_labels"></a>
<a id="tocsboards_labels"></a>

```json
{
  "color": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|A valid label color or null|
|name|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_boards_lists">boards_lists</h2>
<!-- backwards compatibility -->
<a id="schemaboards_lists"></a>
<a id="schema_boards_lists"></a>
<a id="tocSboards_lists"></a>
<a id="tocsboards_lists"></a>

```json
{
  "name": "string",
  "pos": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|a string with a length from 1 to 16384|
|pos|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_boards_members">boards_members</h2>
<!-- backwards compatibility -->
<a id="schemaboards_members"></a>
<a id="schema_boards_members"></a>
<a id="tocSboards_members"></a>
<a id="tocsboards_members"></a>

```json
{
  "email": "string",
  "fullName": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|An email address|
|fullName|string|false|none|A string with a length of at least 1.  Cannot begin or end with a space.|
|type|string|false|none|One of: admin, normal or observer|

<h2 id="tocS_boards_memberships">boards_memberships</h2>
<!-- backwards compatibility -->
<a id="schemaboards_memberships"></a>
<a id="schema_boards_memberships"></a>
<a id="tocSboards_memberships"></a>
<a id="tocsboards_memberships"></a>

```json
{
  "member_fields": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member_fields|string|false|none|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|type|string|false|none|One of: admin, normal or observer|

<h2 id="tocS_boards_name">boards_name</h2>
<!-- backwards compatibility -->
<a id="schemaboards_name"></a>
<a id="schema_boards_name"></a>
<a id="tocSboards_name"></a>
<a id="tocsboards_name"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_boards_powerUps">boards_powerUps</h2>
<!-- backwards compatibility -->
<a id="schemaboards_powerups"></a>
<a id="schema_boards_powerUps"></a>
<a id="tocSboards_powerups"></a>
<a id="tocsboards_powerups"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: calendar, cardAging, recap or voting|

<h2 id="tocS_boards_subscribed">boards_subscribed</h2>
<!-- backwards compatibility -->
<a id="schemaboards_subscribed"></a>
<a id="schema_boards_subscribed"></a>
<a id="tocSboards_subscribed"></a>
<a id="tocsboards_subscribed"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_cards">cards</h2>
<!-- backwards compatibility -->
<a id="schemacards"></a>
<a id="schema_cards"></a>
<a id="tocScards"></a>
<a id="tocscards"></a>

```json
{
  "closed": "string",
  "desc": "string",
  "due": "string",
  "fileSource": "string",
  "idAttachmentCover": "string",
  "idBoard": "string",
  "idCardSource": "string",
  "idLabels": "string",
  "idList": "string",
  "idMembers": "string",
  "keepFromSource": "string",
  "labels": "string",
  "name": "string",
  "pos": "string",
  "subscribed": "string",
  "urlSource": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed|string|false|none| true or false|
|desc|string|false|none|a string with a length from 0 to 16384|
|due|string|false|none|A date, or null|
|fileSource|string|false|none|A file|
|idAttachmentCover|string|false|none|Id of the image attachment of this card to use as its cover, or null for no cover|
|idBoard|string|false|none|id of the board the card should be moved to|
|idCardSource|string|false|none|The id of the card to copy into a new card.|
|idLabels|string|false|none|A comma-separated list of objectIds, 24-character hex strings|
|idList|string|false|none|id of the list that the card should be added to|
|idMembers|string|false|none|A comma-separated list of objectIds, 24-character hex strings|
|keepFromSource|string|false|none|Properties of the card to copy over from the source.|
|labels|string|false|none|all or a comma-separated list of: blue, green, orange, purple, red or yellow|
|name|string|false|none|The name of the new card.  It isn&#39;t required if the name is being copied from provided by a URL, file or card that is being copied.|
|pos|string|false|none|A position. top , bottom , or a positive number.|
|subscribed|string|false|none| true or false|
|urlSource|string|false|none|A URL starting with http:// or https:// or null|

<h2 id="tocS_cards_actions_comments">cards_actions_comments</h2>
<!-- backwards compatibility -->
<a id="schemacards_actions_comments"></a>
<a id="schema_cards_actions_comments"></a>
<a id="tocScards_actions_comments"></a>
<a id="tocscards_actions_comments"></a>

```json
{
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|text|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_cards_attachments">cards_attachments</h2>
<!-- backwards compatibility -->
<a id="schemacards_attachments"></a>
<a id="schema_cards_attachments"></a>
<a id="tocScards_attachments"></a>
<a id="tocscards_attachments"></a>

```json
{
  "file": "string",
  "mimeType": "string",
  "name": "string",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|A file|
|mimeType|string|false|none|a string with a length from 0 to 256|
|name|string|false|none|a string with a length from 0 to 256|
|url|string|false|none|A URL starting with http:// or https:// or null|

<h2 id="tocS_cards_checklist_checkItem">cards_checklist_checkItem</h2>
<!-- backwards compatibility -->
<a id="schemacards_checklist_checkitem"></a>
<a id="schema_cards_checklist_checkItem"></a>
<a id="tocScards_checklist_checkitem"></a>
<a id="tocscards_checklist_checkitem"></a>

```json
{
  "name": "string",
  "pos": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|a string with a length from 1 to 16384|
|pos|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_cards_checklist_checkItem_name">cards_checklist_checkItem_name</h2>
<!-- backwards compatibility -->
<a id="schemacards_checklist_checkitem_name"></a>
<a id="schema_cards_checklist_checkItem_name"></a>
<a id="tocScards_checklist_checkitem_name"></a>
<a id="tocscards_checklist_checkitem_name"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_cards_checklist_checkItem_pos">cards_checklist_checkItem_pos</h2>
<!-- backwards compatibility -->
<a id="schemacards_checklist_checkitem_pos"></a>
<a id="schema_cards_checklist_checkItem_pos"></a>
<a id="tocScards_checklist_checkitem_pos"></a>
<a id="tocscards_checklist_checkitem_pos"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_cards_checklist_checkItem_state">cards_checklist_checkItem_state</h2>
<!-- backwards compatibility -->
<a id="schemacards_checklist_checkitem_state"></a>
<a id="schema_cards_checklist_checkItem_state"></a>
<a id="tocScards_checklist_checkitem_state"></a>
<a id="tocscards_checklist_checkitem_state"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: complete, false, incomplete or true|

<h2 id="tocS_cards_checklist_idChecklistCurrent_checkItem">cards_checklist_idChecklistCurrent_checkItem</h2>
<!-- backwards compatibility -->
<a id="schemacards_checklist_idchecklistcurrent_checkitem"></a>
<a id="schema_cards_checklist_idChecklistCurrent_checkItem"></a>
<a id="tocScards_checklist_idchecklistcurrent_checkitem"></a>
<a id="tocscards_checklist_idchecklistcurrent_checkitem"></a>

```json
{
  "idChecklist": "string",
  "name": "string",
  "pos": "string",
  "state": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idChecklist|string|false|none|An id, or null|
|name|string|false|none|a string with a length from 1 to 16384|
|pos|string|false|none|A position. top , bottom , or a positive number.|
|state|string|false|none|One of: complete, false, incomplete or true|

<h2 id="tocS_cards_checklists">cards_checklists</h2>
<!-- backwards compatibility -->
<a id="schemacards_checklists"></a>
<a id="schema_cards_checklists"></a>
<a id="tocScards_checklists"></a>
<a id="tocscards_checklists"></a>

```json
{
  "idChecklistSource": "string",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idChecklistSource|string|false|none|The id of the source checklist to copy into a new checklist.|
|name|string|false|none|a string with a length from 0 to 16384|
|value|string|false|none|The id of the checklist to add to the card, or null to create a new one.|

<h2 id="tocS_cards_closed">cards_closed</h2>
<!-- backwards compatibility -->
<a id="schemacards_closed"></a>
<a id="schema_cards_closed"></a>
<a id="tocScards_closed"></a>
<a id="tocscards_closed"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_cards_desc">cards_desc</h2>
<!-- backwards compatibility -->
<a id="schemacards_desc"></a>
<a id="schema_cards_desc"></a>
<a id="tocScards_desc"></a>
<a id="tocscards_desc"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_cards_due">cards_due</h2>
<!-- backwards compatibility -->
<a id="schemacards_due"></a>
<a id="schema_cards_due"></a>
<a id="tocScards_due"></a>
<a id="tocscards_due"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A date, or null|

<h2 id="tocS_cards_idAttachmentCover">cards_idAttachmentCover</h2>
<!-- backwards compatibility -->
<a id="schemacards_idattachmentcover"></a>
<a id="schema_cards_idAttachmentCover"></a>
<a id="tocScards_idattachmentcover"></a>
<a id="tocscards_idattachmentcover"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|Id of the image attachment of this card to use as its cover, or null for no cover|

<h2 id="tocS_cards_idBoard">cards_idBoard</h2>
<!-- backwards compatibility -->
<a id="schemacards_idboard"></a>
<a id="schema_cards_idBoard"></a>
<a id="tocScards_idboard"></a>
<a id="tocscards_idboard"></a>

```json
{
  "idList": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idList|string|false|none|id of the list that the card should be moved to on the new board|
|value|string|false|none|id of the board the card should be moved to|

<h2 id="tocS_cards_idLabels">cards_idLabels</h2>
<!-- backwards compatibility -->
<a id="schemacards_idlabels"></a>
<a id="schema_cards_idLabels"></a>
<a id="tocScards_idlabels"></a>
<a id="tocscards_idlabels"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The id of the label to add|

<h2 id="tocS_cards_idList">cards_idList</h2>
<!-- backwards compatibility -->
<a id="schemacards_idlist"></a>
<a id="schema_cards_idList"></a>
<a id="tocScards_idlist"></a>
<a id="tocscards_idlist"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|id of the list the card should be moved to|

<h2 id="tocS_cards_idMembers">cards_idMembers</h2>
<!-- backwards compatibility -->
<a id="schemacards_idmembers"></a>
<a id="schema_cards_idMembers"></a>
<a id="tocScards_idmembers"></a>
<a id="tocscards_idmembers"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The id of the member to add to the card|

<h2 id="tocS_cards_labels">cards_labels</h2>
<!-- backwards compatibility -->
<a id="schemacards_labels"></a>
<a id="schema_cards_labels"></a>
<a id="tocScards_labels"></a>
<a id="tocscards_labels"></a>

```json
{
  "color": "string",
  "name": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|A valid label color or null|
|name|string|false|none|a string with a length from 0 to 16384|
|value|string|false|none|all or a comma-separated list of: blue, green, orange, purple, red or yellow|

<h2 id="tocS_cards_membersVoted">cards_membersVoted</h2>
<!-- backwards compatibility -->
<a id="schemacards_membersvoted"></a>
<a id="schema_cards_membersVoted"></a>
<a id="tocScards_membersvoted"></a>
<a id="tocscards_membersvoted"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The id of the member to vote &#39;yes&#39; on the card|

<h2 id="tocS_cards_name">cards_name</h2>
<!-- backwards compatibility -->
<a id="schemacards_name"></a>
<a id="schema_cards_name"></a>
<a id="tocScards_name"></a>
<a id="tocscards_name"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_cards_pos">cards_pos</h2>
<!-- backwards compatibility -->
<a id="schemacards_pos"></a>
<a id="schema_cards_pos"></a>
<a id="tocScards_pos"></a>
<a id="tocscards_pos"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_cards_stickers">cards_stickers</h2>
<!-- backwards compatibility -->
<a id="schemacards_stickers"></a>
<a id="schema_cards_stickers"></a>
<a id="tocScards_stickers"></a>
<a id="tocscards_stickers"></a>

```json
{
  "image": "string",
  "left": "string",
  "rotate": "string",
  "top": "string",
  "zIndex": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|string|false|none|a string with a length from 0 to 16384|
|left|string|false|none|undefined|
|rotate|string|false|none|undefined|
|top|string|false|none|undefined|
|zIndex|string|false|none|Valid Z values for stickers, must be an integer|

<h2 id="tocS_cards_subscribed">cards_subscribed</h2>
<!-- backwards compatibility -->
<a id="schemacards_subscribed"></a>
<a id="schema_cards_subscribed"></a>
<a id="tocScards_subscribed"></a>
<a id="tocscards_subscribed"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_checklists">checklists</h2>
<!-- backwards compatibility -->
<a id="schemachecklists"></a>
<a id="schema_checklists"></a>
<a id="tocSchecklists"></a>
<a id="tocschecklists"></a>

```json
{
  "idBoard": "string",
  "idCard": "string",
  "idChecklistSource": "string",
  "name": "string",
  "pos": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idBoard|string|false|none|id of the board that the checklist should be added to|
|idCard|string|false|none|id of the card that the checklist should be added to|
|idChecklistSource|string|false|none|The id of the source checklist to copy into a new checklist.|
|name|string|false|none|a string with a length from 0 to 16384|
|pos|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_checklists_checkItems">checklists_checkItems</h2>
<!-- backwards compatibility -->
<a id="schemachecklists_checkitems"></a>
<a id="schema_checklists_checkItems"></a>
<a id="tocSchecklists_checkitems"></a>
<a id="tocschecklists_checkitems"></a>

```json
{
  "checked": "string",
  "name": "string",
  "pos": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|checked|string|false|none| true or false|
|name|string|false|none|a string with a length from 1 to 16384|
|pos|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_checklists_idCard">checklists_idCard</h2>
<!-- backwards compatibility -->
<a id="schemachecklists_idcard"></a>
<a id="schema_checklists_idCard"></a>
<a id="tocSchecklists_idcard"></a>
<a id="tocschecklists_idcard"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The id of the card that the checklist is on|

<h2 id="tocS_checklists_name">checklists_name</h2>
<!-- backwards compatibility -->
<a id="schemachecklists_name"></a>
<a id="schema_checklists_name"></a>
<a id="tocSchecklists_name"></a>
<a id="tocschecklists_name"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_checklists_pos">checklists_pos</h2>
<!-- backwards compatibility -->
<a id="schemachecklists_pos"></a>
<a id="schema_checklists_pos"></a>
<a id="tocSchecklists_pos"></a>
<a id="tocschecklists_pos"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_labelNames_blue">labelNames_blue</h2>
<!-- backwards compatibility -->
<a id="schemalabelnames_blue"></a>
<a id="schema_labelNames_blue"></a>
<a id="tocSlabelnames_blue"></a>
<a id="tocslabelnames_blue"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_labelNames_green">labelNames_green</h2>
<!-- backwards compatibility -->
<a id="schemalabelnames_green"></a>
<a id="schema_labelNames_green"></a>
<a id="tocSlabelnames_green"></a>
<a id="tocslabelnames_green"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_labelNames_orange">labelNames_orange</h2>
<!-- backwards compatibility -->
<a id="schemalabelnames_orange"></a>
<a id="schema_labelNames_orange"></a>
<a id="tocSlabelnames_orange"></a>
<a id="tocslabelnames_orange"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_labelNames_purple">labelNames_purple</h2>
<!-- backwards compatibility -->
<a id="schemalabelnames_purple"></a>
<a id="schema_labelNames_purple"></a>
<a id="tocSlabelnames_purple"></a>
<a id="tocslabelnames_purple"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_labelNames_red">labelNames_red</h2>
<!-- backwards compatibility -->
<a id="schemalabelnames_red"></a>
<a id="schema_labelNames_red"></a>
<a id="tocSlabelnames_red"></a>
<a id="tocslabelnames_red"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_labelNames_yellow">labelNames_yellow</h2>
<!-- backwards compatibility -->
<a id="schemalabelnames_yellow"></a>
<a id="schema_labelNames_yellow"></a>
<a id="tocSlabelnames_yellow"></a>
<a id="tocslabelnames_yellow"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_labels">labels</h2>
<!-- backwards compatibility -->
<a id="schemalabels"></a>
<a id="schema_labels"></a>
<a id="tocSlabels"></a>
<a id="tocslabels"></a>

```json
{
  "color": "string",
  "idBoard": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|color|string|false|none|A valid label color or null|
|idBoard|string|false|none|An id|
|name|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_labels_color">labels_color</h2>
<!-- backwards compatibility -->
<a id="schemalabels_color"></a>
<a id="schema_labels_color"></a>
<a id="tocSlabels_color"></a>
<a id="tocslabels_color"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A valid label color or null|

<h2 id="tocS_labels_name">labels_name</h2>
<!-- backwards compatibility -->
<a id="schemalabels_name"></a>
<a id="schema_labels_name"></a>
<a id="tocSlabels_name"></a>
<a id="tocslabels_name"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_lists">lists</h2>
<!-- backwards compatibility -->
<a id="schemalists"></a>
<a id="schema_lists"></a>
<a id="tocSlists"></a>
<a id="tocslists"></a>

```json
{
  "closed": "string",
  "idBoard": "string",
  "idListSource": "string",
  "name": "string",
  "pos": "string",
  "subscribed": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closed|string|false|none| true or false|
|idBoard|string|false|none|id of the board that the list should be added to|
|idListSource|string|false|none|The id of the list to copy into a new list.|
|name|string|false|none|a string with a length from 1 to 16384|
|pos|string|false|none|A position. top , bottom , or a positive number.|
|subscribed|string|false|none| true or false|

<h2 id="tocS_lists_cards">lists_cards</h2>
<!-- backwards compatibility -->
<a id="schemalists_cards"></a>
<a id="schema_lists_cards"></a>
<a id="tocSlists_cards"></a>
<a id="tocslists_cards"></a>

```json
{
  "desc": "string",
  "due": "string",
  "idMembers": "string",
  "labels": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desc|string|false|none|a string with a length from 0 to 16384|
|due|string|false|none|A date, or null|
|idMembers|string|false|none|A comma-separated list of objectIds, 24-character hex strings|
|labels|string|false|none|all or a comma-separated list of: blue, green, orange, purple, red or yellow|
|name|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_lists_closed">lists_closed</h2>
<!-- backwards compatibility -->
<a id="schemalists_closed"></a>
<a id="schema_lists_closed"></a>
<a id="tocSlists_closed"></a>
<a id="tocslists_closed"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_lists_idBoard">lists_idBoard</h2>
<!-- backwards compatibility -->
<a id="schemalists_idboard"></a>
<a id="schema_lists_idBoard"></a>
<a id="tocSlists_idboard"></a>
<a id="tocslists_idboard"></a>

```json
{
  "pos": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|pos|string|false|none|position of the list on the new board|
|value|string|false|none|id of the board the list should be moved to|

<h2 id="tocS_lists_moveAllCards">lists_moveAllCards</h2>
<!-- backwards compatibility -->
<a id="schemalists_moveallcards"></a>
<a id="schema_lists_moveAllCards"></a>
<a id="tocSlists_moveallcards"></a>
<a id="tocslists_moveallcards"></a>

```json
{
  "idBoard": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idBoard|string|false|none|id of the board that the cards should be moved to|

<h2 id="tocS_lists_name">lists_name</h2>
<!-- backwards compatibility -->
<a id="schemalists_name"></a>
<a id="schema_lists_name"></a>
<a id="tocSlists_name"></a>
<a id="tocslists_name"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_lists_pos">lists_pos</h2>
<!-- backwards compatibility -->
<a id="schemalists_pos"></a>
<a id="schema_lists_pos"></a>
<a id="tocSlists_pos"></a>
<a id="tocslists_pos"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_lists_subscribed">lists_subscribed</h2>
<!-- backwards compatibility -->
<a id="schemalists_subscribed"></a>
<a id="schema_lists_subscribed"></a>
<a id="tocSlists_subscribed"></a>
<a id="tocslists_subscribed"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_members">members</h2>
<!-- backwards compatibility -->
<a id="schemamembers"></a>
<a id="schema_members"></a>
<a id="tocSmembers"></a>
<a id="tocsmembers"></a>

```json
{
  "avatarSource": "string",
  "bio": "string",
  "fullName": "string",
  "initials": "string",
  "prefs/colorBlind": "string",
  "prefs/locale": "string",
  "prefs/minutesBetweenSummaries": "string",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avatarSource|string|false|none|One of: gravatar, none or upload|
|bio|string|false|none|a string with a length from 0 to 16384|
|fullName|string|false|none|A string with a length of at least 1.  Cannot begin or end with a space.|
|initials|string|false|none|A string with a length from 1 to 4.  Cannot begin or end with a space|
|prefs/colorBlind|string|false|none| true or false|
|prefs/locale|string|false|none|a string with a length from 0 to 255|
|prefs/minutesBetweenSummaries|string|false|none|-1 (disabled), 1 or 60|
|username|string|false|none|A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.|

<h2 id="tocS_members_avatar">members_avatar</h2>
<!-- backwards compatibility -->
<a id="schemamembers_avatar"></a>
<a id="schema_members_avatar"></a>
<a id="tocSmembers_avatar"></a>
<a id="tocsmembers_avatar"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|A file|

<h2 id="tocS_members_avatarSource">members_avatarSource</h2>
<!-- backwards compatibility -->
<a id="schemamembers_avatarsource"></a>
<a id="schema_members_avatarSource"></a>
<a id="tocSmembers_avatarsource"></a>
<a id="tocsmembers_avatarsource"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: gravatar, none or upload|

<h2 id="tocS_members_bio">members_bio</h2>
<!-- backwards compatibility -->
<a id="schemamembers_bio"></a>
<a id="schema_members_bio"></a>
<a id="tocSmembers_bio"></a>
<a id="tocsmembers_bio"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_members_boardBackgrounds">members_boardBackgrounds</h2>
<!-- backwards compatibility -->
<a id="schemamembers_boardbackgrounds"></a>
<a id="schema_members_boardBackgrounds"></a>
<a id="tocSmembers_boardbackgrounds"></a>
<a id="tocsmembers_boardbackgrounds"></a>

```json
{
  "brightness": "string",
  "file": "string",
  "tile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brightness|string|false|none|One of: dark, light or unknown|
|file|string|false|none|A file|
|tile|string|false|none| true or false|

<h2 id="tocS_members_boardStars">members_boardStars</h2>
<!-- backwards compatibility -->
<a id="schemamembers_boardstars"></a>
<a id="schema_members_boardStars"></a>
<a id="tocSmembers_boardstars"></a>
<a id="tocsmembers_boardstars"></a>

```json
{
  "idBoard": "string",
  "pos": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idBoard|string|false|none|The id of the board to star|
|pos|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_members_boardStars_idBoard">members_boardStars_idBoard</h2>
<!-- backwards compatibility -->
<a id="schemamembers_boardstars_idboard"></a>
<a id="schema_members_boardStars_idBoard"></a>
<a id="tocSmembers_boardstars_idboard"></a>
<a id="tocsmembers_boardstars_idboard"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|An id|

<h2 id="tocS_members_boardStars_pos">members_boardStars_pos</h2>
<!-- backwards compatibility -->
<a id="schemamembers_boardstars_pos"></a>
<a id="schema_members_boardStars_pos"></a>
<a id="tocSmembers_boardstars_pos"></a>
<a id="tocsmembers_boardstars_pos"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_members_customBoardBackgrounds">members_customBoardBackgrounds</h2>
<!-- backwards compatibility -->
<a id="schemamembers_customboardbackgrounds"></a>
<a id="schema_members_customBoardBackgrounds"></a>
<a id="tocSmembers_customboardbackgrounds"></a>
<a id="tocsmembers_customboardbackgrounds"></a>

```json
{
  "brightness": "string",
  "file": "string",
  "tile": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|brightness|string|false|none|One of: dark, light or unknown|
|file|string|false|none|A file|
|tile|string|false|none| true or false|

<h2 id="tocS_members_customEmoji">members_customEmoji</h2>
<!-- backwards compatibility -->
<a id="schemamembers_customemoji"></a>
<a id="schema_members_customEmoji"></a>
<a id="tocSmembers_customemoji"></a>
<a id="tocsmembers_customemoji"></a>

```json
{
  "file": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|A file|
|name|string|false|none|a string with a length from 2 to 64|

<h2 id="tocS_members_customStickers">members_customStickers</h2>
<!-- backwards compatibility -->
<a id="schemamembers_customstickers"></a>
<a id="schema_members_customStickers"></a>
<a id="tocSmembers_customstickers"></a>
<a id="tocsmembers_customstickers"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|A file|

<h2 id="tocS_members_fullName">members_fullName</h2>
<!-- backwards compatibility -->
<a id="schemamembers_fullname"></a>
<a id="schema_members_fullName"></a>
<a id="tocSmembers_fullname"></a>
<a id="tocsmembers_fullname"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A string with a length of at least 1.  Cannot begin or end with a space.|

<h2 id="tocS_members_initials">members_initials</h2>
<!-- backwards compatibility -->
<a id="schemamembers_initials"></a>
<a id="schema_members_initials"></a>
<a id="tocSmembers_initials"></a>
<a id="tocsmembers_initials"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A string with a length from 1 to 4.  Cannot begin or end with a space|

<h2 id="tocS_members_oneTimeMessagesDismissed">members_oneTimeMessagesDismissed</h2>
<!-- backwards compatibility -->
<a id="schemamembers_onetimemessagesdismissed"></a>
<a id="schema_members_oneTimeMessagesDismissed"></a>
<a id="tocSmembers_onetimemessagesdismissed"></a>
<a id="tocsmembers_onetimemessagesdismissed"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|Type of message dismissed|

<h2 id="tocS_members_savedSearches">members_savedSearches</h2>
<!-- backwards compatibility -->
<a id="schemamembers_savedsearches"></a>
<a id="schema_members_savedSearches"></a>
<a id="tocSmembers_savedsearches"></a>
<a id="tocsmembers_savedsearches"></a>

```json
{
  "name": "string",
  "pos": "string",
  "query": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|A non-empty string with at least one non-space character|
|pos|string|false|none|A position. top , bottom , or a positive number.|
|query|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_members_savedSearches_name">members_savedSearches_name</h2>
<!-- backwards compatibility -->
<a id="schemamembers_savedsearches_name"></a>
<a id="schema_members_savedSearches_name"></a>
<a id="tocSmembers_savedsearches_name"></a>
<a id="tocsmembers_savedsearches_name"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A non-empty string with at least one non-space character|

<h2 id="tocS_members_savedSearches_pos">members_savedSearches_pos</h2>
<!-- backwards compatibility -->
<a id="schemamembers_savedsearches_pos"></a>
<a id="schema_members_savedSearches_pos"></a>
<a id="tocSmembers_savedsearches_pos"></a>
<a id="tocsmembers_savedsearches_pos"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A position. top , bottom , or a positive number.|

<h2 id="tocS_members_savedSearches_query">members_savedSearches_query</h2>
<!-- backwards compatibility -->
<a id="schemamembers_savedsearches_query"></a>
<a id="schema_members_savedSearches_query"></a>
<a id="tocSmembers_savedsearches_query"></a>
<a id="tocsmembers_savedsearches_query"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 1 to 16384|

<h2 id="tocS_members_username">members_username</h2>
<!-- backwards compatibility -->
<a id="schemamembers_username"></a>
<a id="schema_members_username"></a>
<a id="tocSmembers_username"></a>
<a id="tocsmembers_username"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.|

<h2 id="tocS_myPrefs_emailPosition">myPrefs_emailPosition</h2>
<!-- backwards compatibility -->
<a id="schemamyprefs_emailposition"></a>
<a id="schema_myPrefs_emailPosition"></a>
<a id="tocSmyprefs_emailposition"></a>
<a id="tocsmyprefs_emailposition"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: bottom or top|

<h2 id="tocS_myPrefs_idEmailList">myPrefs_idEmailList</h2>
<!-- backwards compatibility -->
<a id="schemamyprefs_idemaillist"></a>
<a id="schema_myPrefs_idEmailList"></a>
<a id="tocSmyprefs_idemaillist"></a>
<a id="tocsmyprefs_idemaillist"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|An id|

<h2 id="tocS_myPrefs_showListGuide">myPrefs_showListGuide</h2>
<!-- backwards compatibility -->
<a id="schemamyprefs_showlistguide"></a>
<a id="schema_myPrefs_showListGuide"></a>
<a id="tocSmyprefs_showlistguide"></a>
<a id="tocsmyprefs_showlistguide"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_myPrefs_showSidebar">myPrefs_showSidebar</h2>
<!-- backwards compatibility -->
<a id="schemamyprefs_showsidebar"></a>
<a id="schema_myPrefs_showSidebar"></a>
<a id="tocSmyprefs_showsidebar"></a>
<a id="tocsmyprefs_showsidebar"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_myPrefs_showSidebarActivity">myPrefs_showSidebarActivity</h2>
<!-- backwards compatibility -->
<a id="schemamyprefs_showsidebaractivity"></a>
<a id="schema_myPrefs_showSidebarActivity"></a>
<a id="tocSmyprefs_showsidebaractivity"></a>
<a id="tocsmyprefs_showsidebaractivity"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_myPrefs_showSidebarBoardActions">myPrefs_showSidebarBoardActions</h2>
<!-- backwards compatibility -->
<a id="schemamyprefs_showsidebarboardactions"></a>
<a id="schema_myPrefs_showSidebarBoardActions"></a>
<a id="tocSmyprefs_showsidebarboardactions"></a>
<a id="tocsmyprefs_showsidebarboardactions"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_myPrefs_showSidebarMembers">myPrefs_showSidebarMembers</h2>
<!-- backwards compatibility -->
<a id="schemamyprefs_showsidebarmembers"></a>
<a id="schema_myPrefs_showSidebarMembers"></a>
<a id="tocSmyprefs_showsidebarmembers"></a>
<a id="tocsmyprefs_showsidebarmembers"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_notifications">notifications</h2>
<!-- backwards compatibility -->
<a id="schemanotifications"></a>
<a id="schema_notifications"></a>
<a id="tocSnotifications"></a>
<a id="tocsnotifications"></a>

```json
{
  "unread": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|unread|string|false|none| true or false|

<h2 id="tocS_notifications_unread">notifications_unread</h2>
<!-- backwards compatibility -->
<a id="schemanotifications_unread"></a>
<a id="schema_notifications_unread"></a>
<a id="tocSnotifications_unread"></a>
<a id="tocsnotifications_unread"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_organizations">organizations</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations"></a>
<a id="schema_organizations"></a>
<a id="tocSorganizations"></a>
<a id="tocsorganizations"></a>

```json
{
  "desc": "string",
  "displayName": "string",
  "name": "string",
  "prefs/associatedDomain": "string",
  "prefs/boardVisibilityRestrict/org": "string",
  "prefs/boardVisibilityRestrict/private": "string",
  "prefs/boardVisibilityRestrict/public": "string",
  "prefs/externalMembersDisabled": "string",
  "prefs/googleAppsVersion": "string",
  "prefs/orgInviteRestrict": "string",
  "prefs/permissionLevel": "string",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|desc|string|false|none|a string with a length from 0 to 16384|
|displayName|string|false|none|A string with a length of at least 1.  Cannot begin or end with a space.|
|name|string|false|none|a string with a length from 0 to 16384|
|prefs/associatedDomain|string|false|none|The google apps domain to link this org to.|
|prefs/boardVisibilityRestrict/org|string|false|none|One of: admin, none or org|
|prefs/boardVisibilityRestrict/private|string|false|none|One of: admin, none or org|
|prefs/boardVisibilityRestrict/public|string|false|none|One of: admin, none or org|
|prefs/externalMembersDisabled|string|false|none| true or false|
|prefs/googleAppsVersion|string|false|none|a number from 1 to 2|
|prefs/orgInviteRestrict|string|false|none|An email address with optional expansion tokens|
|prefs/permissionLevel|string|false|none|One of: private or public|
|website|string|false|none|A URL starting with http:// or https:// or null|

<h2 id="tocS_organizations_desc">organizations_desc</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_desc"></a>
<a id="schema_organizations_desc"></a>
<a id="tocSorganizations_desc"></a>
<a id="tocsorganizations_desc"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_organizations_displayName">organizations_displayName</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_displayname"></a>
<a id="schema_organizations_displayName"></a>
<a id="tocSorganizations_displayname"></a>
<a id="tocsorganizations_displayname"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A string with a length of at least 1.  Cannot begin or end with a space.|

<h2 id="tocS_organizations_logo">organizations_logo</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_logo"></a>
<a id="schema_organizations_logo"></a>
<a id="tocSorganizations_logo"></a>
<a id="tocsorganizations_logo"></a>

```json
{
  "file": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|file|string|false|none|A file|

<h2 id="tocS_organizations_members">organizations_members</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_members"></a>
<a id="schema_organizations_members"></a>
<a id="tocSorganizations_members"></a>
<a id="tocsorganizations_members"></a>

```json
{
  "email": "string",
  "fullName": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|An email address|
|fullName|string|false|none|A string with a length of at least 1.  Cannot begin or end with a space.|
|type|string|false|none|One of: admin, normal or observer|

<h2 id="tocS_organizations_members_deactivated">organizations_members_deactivated</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_members_deactivated"></a>
<a id="schema_organizations_members_deactivated"></a>
<a id="tocSorganizations_members_deactivated"></a>
<a id="tocsorganizations_members_deactivated"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_organizations_memberships">organizations_memberships</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_memberships"></a>
<a id="schema_organizations_memberships"></a>
<a id="tocSorganizations_memberships"></a>
<a id="tocsorganizations_memberships"></a>

```json
{
  "member_fields": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|member_fields|string|false|none|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username|
|type|string|false|none|One of: admin, normal or observer|

<h2 id="tocS_organizations_name">organizations_name</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_name"></a>
<a id="schema_organizations_name"></a>
<a id="tocSorganizations_name"></a>
<a id="tocsorganizations_name"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A string with a length of at least 3.  Only lowercase letters, underscores, and numbers are allowed.  Must be unique.|

<h2 id="tocS_organizations_website">organizations_website</h2>
<!-- backwards compatibility -->
<a id="schemaorganizations_website"></a>
<a id="schema_organizations_website"></a>
<a id="tocSorganizations_website"></a>
<a id="tocsorganizations_website"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A URL starting with http:// or https:// or null|

<h2 id="tocS_prefs_associatedDomain">prefs_associatedDomain</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_associateddomain"></a>
<a id="schema_prefs_associatedDomain"></a>
<a id="tocSprefs_associateddomain"></a>
<a id="tocsprefs_associateddomain"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|The google apps domain to link this org to.|

<h2 id="tocS_prefs_background">prefs_background</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_background"></a>
<a id="schema_prefs_background"></a>
<a id="tocSprefs_background"></a>
<a id="tocsprefs_background"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A standard background name, or the id of a custom background|

<h2 id="tocS_prefs_boardVisibilityRestrict">prefs_boardVisibilityRestrict</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_boardvisibilityrestrict"></a>
<a id="schema_prefs_boardVisibilityRestrict"></a>
<a id="tocSprefs_boardvisibilityrestrict"></a>
<a id="tocsprefs_boardvisibilityrestrict"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: admin, none or org|

<h2 id="tocS_prefs_calendarFeedEnabled">prefs_calendarFeedEnabled</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_calendarfeedenabled"></a>
<a id="schema_prefs_calendarFeedEnabled"></a>
<a id="tocSprefs_calendarfeedenabled"></a>
<a id="tocsprefs_calendarfeedenabled"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_prefs_cardAging">prefs_cardAging</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_cardaging"></a>
<a id="schema_prefs_cardAging"></a>
<a id="tocSprefs_cardaging"></a>
<a id="tocsprefs_cardaging"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: pirate or regular|

<h2 id="tocS_prefs_cardCovers">prefs_cardCovers</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_cardcovers"></a>
<a id="schema_prefs_cardCovers"></a>
<a id="tocSprefs_cardcovers"></a>
<a id="tocsprefs_cardcovers"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_prefs_colorBlind">prefs_colorBlind</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_colorblind"></a>
<a id="schema_prefs_colorBlind"></a>
<a id="tocSprefs_colorblind"></a>
<a id="tocsprefs_colorblind"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_prefs_comments">prefs_comments</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_comments"></a>
<a id="schema_prefs_comments"></a>
<a id="tocSprefs_comments"></a>
<a id="tocsprefs_comments"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: disabled, members, observers, org or public|

<h2 id="tocS_prefs_externalMembersDisabled">prefs_externalMembersDisabled</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_externalmembersdisabled"></a>
<a id="schema_prefs_externalMembersDisabled"></a>
<a id="tocSprefs_externalmembersdisabled"></a>
<a id="tocsprefs_externalmembersdisabled"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_prefs_googleAppsVersion">prefs_googleAppsVersion</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_googleappsversion"></a>
<a id="schema_prefs_googleAppsVersion"></a>
<a id="tocSprefs_googleappsversion"></a>
<a id="tocsprefs_googleappsversion"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a number from 1 to 2|

<h2 id="tocS_prefs_invitations">prefs_invitations</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_invitations"></a>
<a id="schema_prefs_invitations"></a>
<a id="tocSprefs_invitations"></a>
<a id="tocsprefs_invitations"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: admins or members|

<h2 id="tocS_prefs_locale">prefs_locale</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_locale"></a>
<a id="schema_prefs_locale"></a>
<a id="tocSprefs_locale"></a>
<a id="tocsprefs_locale"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 255|

<h2 id="tocS_prefs_minutesBetweenSummaries">prefs_minutesBetweenSummaries</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_minutesbetweensummaries"></a>
<a id="schema_prefs_minutesBetweenSummaries"></a>
<a id="tocSprefs_minutesbetweensummaries"></a>
<a id="tocsprefs_minutesbetweensummaries"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|-1 (disabled), 1 or 60|

<h2 id="tocS_prefs_orgInviteRestrict">prefs_orgInviteRestrict</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_orginviterestrict"></a>
<a id="schema_prefs_orgInviteRestrict"></a>
<a id="tocSprefs_orginviterestrict"></a>
<a id="tocsprefs_orginviterestrict"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|An email address with optional expansion tokens|

<h2 id="tocS_prefs_permissionLevel">prefs_permissionLevel</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_permissionlevel"></a>
<a id="schema_prefs_permissionLevel"></a>
<a id="tocSprefs_permissionlevel"></a>
<a id="tocsprefs_permissionlevel"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: private or public|

<h2 id="tocS_prefs_selfJoin">prefs_selfJoin</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_selfjoin"></a>
<a id="schema_prefs_selfJoin"></a>
<a id="tocSprefs_selfjoin"></a>
<a id="tocsprefs_selfjoin"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_prefs_voting">prefs_voting</h2>
<!-- backwards compatibility -->
<a id="schemaprefs_voting"></a>
<a id="schema_prefs_voting"></a>
<a id="tocSprefs_voting"></a>
<a id="tocsprefs_voting"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: disabled, members, observers, org or public|

<h2 id="tocS_sessions">sessions</h2>
<!-- backwards compatibility -->
<a id="schemasessions"></a>
<a id="schema_sessions"></a>
<a id="tocSsessions"></a>
<a id="tocssessions"></a>

```json
{
  "idBoard": "string",
  "status": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idBoard|string|false|none|The id of the board you&#39;re viewing.  Boards with no viewers will not get updates about members&#39; statuses.|
|status|string|false|none|One of: active, disconnected or idle|

<h2 id="tocS_sessions_status">sessions_status</h2>
<!-- backwards compatibility -->
<a id="schemasessions_status"></a>
<a id="schema_sessions_status"></a>
<a id="tocSsessions_status"></a>
<a id="tocssessions_status"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|One of: active, disconnected or idle|

<h2 id="tocS_tokens_webhooks">tokens_webhooks</h2>
<!-- backwards compatibility -->
<a id="schematokens_webhooks"></a>
<a id="schema_tokens_webhooks"></a>
<a id="tocStokens_webhooks"></a>
<a id="tocstokens_webhooks"></a>

```json
{
  "callbackURL": "string",
  "description": "string",
  "idModel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|callbackURL|string|false|none|A valid URL that is reachable with a HEAD request|
|description|string|false|none|a string with a length from 0 to 16384|
|idModel|string|false|none|id of the model to be monitored|

<h2 id="tocS_webhooks">webhooks</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks"></a>
<a id="schema_webhooks"></a>
<a id="tocSwebhooks"></a>
<a id="tocswebhooks"></a>

```json
{
  "active": "string",
  "callbackURL": "string",
  "description": "string",
  "idModel": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|string|false|none| true or false|
|callbackURL|string|false|none|A valid URL that is reachable with a HEAD request|
|description|string|false|none|a string with a length from 0 to 16384|
|idModel|string|false|none|id of the model that should be hooked|

<h2 id="tocS_webhooks_active">webhooks_active</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks_active"></a>
<a id="schema_webhooks_active"></a>
<a id="tocSwebhooks_active"></a>
<a id="tocswebhooks_active"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none| true or false|

<h2 id="tocS_webhooks_callbackURL">webhooks_callbackURL</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks_callbackurl"></a>
<a id="schema_webhooks_callbackURL"></a>
<a id="tocSwebhooks_callbackurl"></a>
<a id="tocswebhooks_callbackurl"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|A valid URL that is reachable with a HEAD request|

<h2 id="tocS_webhooks_description">webhooks_description</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks_description"></a>
<a id="schema_webhooks_description"></a>
<a id="tocSwebhooks_description"></a>
<a id="tocswebhooks_description"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|a string with a length from 0 to 16384|

<h2 id="tocS_webhooks_idModel">webhooks_idModel</h2>
<!-- backwards compatibility -->
<a id="schemawebhooks_idmodel"></a>
<a id="schema_webhooks_idModel"></a>
<a id="tocSwebhooks_idmodel"></a>
<a id="tocswebhooks_idmodel"></a>

```json
{
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|string|false|none|id of the model to be monitored|
