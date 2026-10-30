<h1 id="trello-rest-api">Trello REST API v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.trello.com/1">https://api.trello.com/1</a>

# Authentication

* API Key (APIKey)
    - Parameter Name: **key**, in: query.

* API Key (APIToken)
    - Parameter Name: **token**, in: query.

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://auth.atlassian.com/authorize](https://auth.atlassian.com/authorize)
    - Token URL = [https://auth.atlassian.com/authorize/oauth/token](https://auth.atlassian.com/authorize/oauth/token)

|Scope|Scope Description|
|---|---|
|read:board:trello|Read cards, lists, and comments in boards.|
|write:board:trello|Create and update cards, lists, and comments in boards.|
|write:board:membership:trello|Add, remove, or modify memberships on boards.|
|read:organization:trello|Read workspaces.|
|write:organization:trello|Update workspaces.|
|write:organization:membership:trello|Add, remove, or modify memberships on workspaces.|
|read:member:trello|Read email address, public name, public avatar, and memberships of boards, workspaces, and enterprises.|
|write:member:trello|Upload custom emojis and stickers, star boards, and save searches.|
|read:enterprise:trello|Read enterprises.|
|write:enterprise:trello|Update and manage enterprises.|

<h1 id="trello-rest-api-default">Default</h1>

## Get an Action

<a id="opIdget-actions-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{id}`

Get an Action

*Note: An action can live on a board or a workspace, so accessing it needs `read:board:trello` or `read:organization:trello`.*


<h3 id="get-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|display|query|boolean|false|none|
|entities|query|boolean|false|none|
|fields|query|string|false|`all` or a comma-separated list of action [fields](/cloud/trello/guides/rest-api/object-definitions/#action-object)|
|member|query|boolean|false|none|
|member_fields|query|string|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|memberCreator|query|boolean|false|Whether to include the member object for the creator of the action|
|memberCreator_fields|query|string|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Action|

<h3 id="get-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello read:organization:trello )
</aside>

## Update an Action

<a id="opIdput-actions-id"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414?text=string' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /actions/{id}`

Update a specific Action. Only comment actions can be updated. Used to edit the content of a comment.


<h3 id="update-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|The new text for the comment|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Action|

<h3 id="update-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Delete an Action

<a id="opIddelete-actions-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /actions/{id}`

Delete a specific action. Only comment actions can be deleted.


<h3 id="delete-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Action|

<h3 id="delete-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Get a specific field on an Action

<a id="opIdget-actions-id-field"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/id \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{id}/{field}`

Get a specific property of an action

*Note: An action can live on a board or a workspace, so accessing it needs `read:board:trello` or `read:organization:trello`.*


<h3 id="get-a-specific-field-on-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Action|
|field|path|[ActionFields](#schemaactionfields)|true|An action field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|id|
|field|idMemberCreator|
|field|data|
|field|type|
|field|date|
|field|limits|
|field|display|
|field|memberCreator|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "idMemberCreator": "5abbe4b7ddc1b351ef961414",
  "data": {
    "text": "Can never go wrong with bowie",
    "card": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Bowie",
      "idShort": 7,
      "shortLink": "3CsPkqOF"
    },
    "board": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Mullets",
      "shortLink": "3CsPkqOF"
    },
    "list": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Amazing"
    }
  },
  "type": "commentCard",
  "date": "2020-03-09T19:41:51.396Z",
  "limits": {
    "reactions": {
      "perAction": {
        "status": "ok",
        "disableAt": 1000,
        "warnAt": 900
      },
      "uniquePerAction": {
        "status": "ok",
        "disableAt": 1000,
        "warnAt": 900
      }
    }
  },
  "display": {
    "translationKey": "action_comment_on_card",
    "entities": {
      "contextOn": {
        "type": "translatable",
        "translationKey": "action_on",
        "hideIfContext": true,
        "idContext": "5abbe4b7ddc1b351ef961414"
      },
      "card": {
        "type": "card",
        "hideIfContext": true,
        "id": "5abbe4b7ddc1b351ef961414",
        "shortLink": "3CsPkqOF",
        "text": "Bowie"
      },
      "comment": {
        "type": "comment",
        "text": "Can never go wrong with bowie"
      },
      "memberCreator": {
        "type": "member",
        "id": "5abbe4b7ddc1b351ef961414",
        "username": "bobloblaw",
        "text": "Bob Loblaw (World)"
      }
    }
  },
  "memberCreator": {
    "id": "5b02e7f4e1facdc393169f9d",
    "activityBlocked": false,
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "fullName": "Bob Loblaw (Trello)",
    "idMemberReferrer": null,
    "initials": "BL",
    "username": "bobloblaw"
  }
}
```

<h3 id="get-a-specific-field-on-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Action](#schemaaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello read:organization:trello )
</aside>

## Get the Board for an Action

<a id="opIdget-actions-id-board"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/board \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{id}/board`

Get the Board for an Action

<h3 id="get-the-board-for-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the action|
|fields|query|[BoardFields](#schemaboardfields)|false|`all` or a comma-separated list of board fields|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|name|
|fields|desc|
|fields|descData|
|fields|closed|
|fields|idMemberCreator|
|fields|idOrganization|
|fields|pinned|
|fields|url|
|fields|shortUrl|
|fields|prefs|
|fields|labelNames|
|fields|starred|
|fields|limits|
|fields|memberships|
|fields|enterpriseOwned|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "Trello Platform Changes",
  "desc": "Track changes to Trello's Platform on this board.",
  "descData": "string",
  "closed": false,
  "idMemberCreator": "5abbe4b7ddc1b351ef961414",
  "idOrganization": "5abbe4b7ddc1b351ef961414",
  "pinned": false,
  "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
  "shortUrl": "https://trello.com/b/dQHqCohZ",
  "prefs": {
    "permissionLevel": "org",
    "hideVotes": true,
    "voting": "disabled",
    "comments": "string",
    "invitations": "admins",
    "selfJoin": true,
    "cardCovers": true,
    "isTemplate": true,
    "cardAging": "pirate",
    "calendarFeedEnabled": true,
    "background": "5abbe4b7ddc1b351ef961414",
    "backgroundImage": "http://example.com",
    "backgroundImageScaled": [
      {
        "width": 100,
        "height": 64,
        "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
      }
    ],
    "backgroundTile": true,
    "backgroundBrightness": "dark",
    "backgroundBottomColor": "#1e2e00",
    "backgroundTopColor": "#ffffff",
    "canBePublic": true,
    "canBeEnterprise": true,
    "canBeOrg": true,
    "canBePrivate": true,
    "canInvite": true
  },
  "labelNames": {
    "green": "Addition",
    "yellow": "Update",
    "orange": "Deprecation",
    "red": "Deletion",
    "purple": "Power-Ups",
    "blue": "News",
    "sky": "Announcement",
    "lime": "Delight",
    "pink": "REST API",
    "black": "Capabilties"
  },
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "starred": true,
  "memberships": "string",
  "shortLink": "string",
  "subscribed": true,
  "powerUps": "string",
  "dateLastActivity": "1970-01-01",
  "dateLastView": "1970-01-01",
  "idTags": "string",
  "datePluginDisable": "1970-01-01",
  "creationMethod": "string",
  "ixUpdate": 0,
  "templateGallery": "string",
  "enterpriseOwned": true
}
```

<h3 id="get-the-board-for-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Board](#schemaboard)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get the Card for an Action

<a id="opIdget-actions-id-card"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/card \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{id}/card`

Get the card for an action

<h3 id="get-the-card-for-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the action|
|fields|query|[CardFields](#schemacardfields)|false|`all` or a comma-separated list of card fields|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|address|
|fields|badges|
|fields|checkItemStates|
|fields|closed|
|fields|coordinates|
|fields|creationMethod|
|fields|dueComplete|
|fields|dateLastActivity|
|fields|desc|
|fields|descData|
|fields|due|
|fields|dueReminder|
|fields|idBoard|
|fields|idChecklists|
|fields|idLabels|
|fields|idList|
|fields|idMembers|
|fields|idMembersVoted|
|fields|idShort|
|fields|idAttachmentCover|
|fields|labels|
|fields|limits|
|fields|locationName|
|fields|manualCoverAttachment|
|fields|name|
|fields|pos|
|fields|shortLink|
|fields|shortUrl|
|fields|subscribed|
|fields|url|
|fields|cover|
|fields|isTemplate|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "address": "string",
  "badges": {
    "attachmentsByType": {
      "trello": {
        "board": 0,
        "card": 0
      }
    },
    "location": true,
    "votes": 0,
    "viewingMemberVoted": false,
    "subscribed": false,
    "fogbugz": "string",
    "checkItems": 0,
    "checkItemsChecked": 0,
    "comments": 0,
    "attachments": 0,
    "description": true,
    "due": "1970-01-01",
    "start": "1970-01-01",
    "dueComplete": true
  },
  "cardRole": "mirror",
  "checkItemStates": [
    "string"
  ],
  "closed": true,
  "coordinates": "string",
  "creationMethod": "string",
  "dateLastActivity": "2019-09-16T16:19:17.156Z",
  "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
  "descData": {
    "emoji": {}
  },
  "due": "1970-01-01",
  "dueReminder": "string",
  "idBoard": "5abbe4b7ddc1b351ef961414",
  "idChecklists": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ],
  "idLabels": [
    {
      "id": "5abbe4b7ddc1b351ef961414",
      "idBoard": "5abbe4b7ddc1b351ef961414",
      "name": "Overdue",
      "color": "yellow"
    }
  ],
  "idList": "5abbe4b7ddc1b351ef961415",
  "idMembers": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idMembersVoted": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idShort": 0,
  "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
  "labels": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "locationName": "string",
  "manualCoverAttachment": false,
  "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
  "name": "👋 What? Why? How?",
  "pos": 65535,
  "shortLink": "H0TZyzbK",
  "shortUrl": "https://trello.com/c/H0TZyzbK",
  "subscribed": false,
  "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
  "cover": {
    "idAttachment": "5abbe4b7ddc1b351ef961414",
    "color": "yellow",
    "idUploadedBackground": true,
    "size": "normal",
    "brightness": "light",
    "isTemplate": false
  }
}
```

<h3 id="get-the-card-for-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Card](#schemacard)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get the List for an Action

<a id="opIdget-actions-id-list"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{id}/list`

Get the List for an Action

<h3 id="get-the-list-for-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the action|
|fields|query|[ListFields](#schemalistfields)|false|`all` or a comma-separated list of list fields|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "Things to buy today",
  "closed": true,
  "pos": 0,
  "softLimit": "string",
  "idBoard": "string",
  "subscribed": true,
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  }
}
```

<h3 id="get-the-list-for-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TrelloList](#schematrellolist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get the Member of an Action

<a id="opIdget-actions-id-member"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/member \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{id}/member`

Gets the member of an action (not the creator)

*Note: An action can live on a board or a workspace, so accessing it needs `read:board:trello` or `read:organization:trello`.*


<h3 id="get-the-member-of-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Action|
|fields|query|[MemberFields](#schemamemberfields)|false|`all` or a comma-separated list of member fields|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="get-the-member-of-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Member](#schemamember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello read:organization:trello )
</aside>

## Get the Member Creator of an Action

<a id="opIdget-actions-id-membercreator"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/memberCreator \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{id}/memberCreator`

Get the Member who created the Action

*Note: An action can live on a board or a workspace, so accessing it needs `read:board:trello` or `read:organization:trello`.*


<h3 id="get-the-member-creator-of-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Action|
|fields|query|[MemberFields](#schemamemberfields)|false|`all` or a comma-separated list of member fields|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="get-the-member-creator-of-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Member](#schemamember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello read:organization:trello )
</aside>

## Get the Organization of an Action

<a id="opIdget-actions-id-organization"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/organization \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{id}/organization`

Get the Organization of an Action

<h3 id="get-the-organization-of-an-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the action|
|fields|query|[OrganizationFields](#schemaorganizationfields)|false|`all` or a comma-separated list of organization fields|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|name|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "string",
  "displayName": "Organization Name",
  "dateLastActivity": "2018-10-17T19:10:14.808Z",
  "prefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "offering": "trello.enterprise",
  "url": "https://trello.com/w/<name>",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "memberships": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "premiumFeatures": [
    "string"
  ]
}
```

<h3 id="get-the-organization-of-an-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Organization](#schemaorganization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Update a Comment Action

<a id="opIdput-actions-id-text"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/text?value=string' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /actions/{id}/text`

Update a comment action


<h3 id="update-a-comment-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the action to update|
|value|query|string|true|The new text for the comment|

<h3 id="update-a-comment-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Get Action's Reactions

<a id="opIdget-actions-idaction-reactions"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/reactions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{idAction}/reactions`

List reactions for an action

<h3 id="get-actions-reactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|member|query|boolean|false|Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)|
|emoji|query|boolean|false|Whether to load the emoji as a nested resource.|
|idAction|path|[TrelloID](#schematrelloid)|true|The ID of the action|

<h3 id="get-actions-reactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Create Reaction for Action

<a id="opIdpost-actions-idaction-reactions"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/reactions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "shortName": "string",
    "skinVariation": "string",
    "native": "string",
    "unified": "string"
  }'
```

`POST /actions/{idAction}/reactions`

Adds a new reaction to an action


> Body parameter

```json
{
  "shortName": "string",
  "skinVariation": "string",
  "native": "string",
  "unified": "string"
}
```

<h3 id="create-reaction-for-action-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|[TrelloID](#schematrelloid)|true|The ID of the action|
|body|body|object|false|none|
|» shortName|body|string|false|The primary `shortName` of the emoji to add. See [/emoji](#emoji)|
|» skinVariation|body|string|false|The `skinVariation` of the emoji to add. See [/emoji](#emoji)|
|» native|body|string|false|The emoji to add as a native unicode emoji. See [/emoji](#emoji)|
|» unified|body|string|false|The `unified` value of the emoji to add. See [/emoji](#emoji)|

<h3 id="create-reaction-for-action-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Get Action's Reaction

<a id="opIdget-actions-idaction-reactions-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/reactions/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{idAction}/reactions/{id}`

Get information for a reaction

<h3 id="get-actions-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|member|query|boolean|false|Whether to load the member as a nested resource. See [Members Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#members-nested-resource)|
|emoji|query|boolean|false|Whether to load the emoji as a nested resource.|
|idAction|path|[TrelloID](#schematrelloid)|true|The ID of the Action|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the reaction|

<h3 id="get-actions-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Delete Action's Reaction

<a id="opIddelete-actions-idaction-reactions-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/reactions/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /actions/{idAction}/reactions/{id}`

Deletes a reaction


<h3 id="delete-actions-reaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|[TrelloID](#schematrelloid)|true|The ID of the Action|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the reaction|

<h3 id="delete-actions-reaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## List Action's summary of Reactions

<a id="opIdget-actions-idaction-reactionsummary"></a>

> Code samples

```bash
curl https://api.trello.com/1/actions/5abbe4b7ddc1b351ef961414/reactionsSummary \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /actions/{idAction}/reactionsSummary`

List a summary of all reactions for an action

<h3 id="list-actions-summary-of-reactions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idAction|path|[TrelloID](#schematrelloid)|true|The ID of the action|

<h3 id="list-actions-summary-of-reactions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Application's compliance data

<a id="opIdapplications-key-compliance"></a>

> Code samples

```bash
curl "https://api.trello.com/1/applications/string/compliance?key=${API_KEY}&token=${API_KEY}"
```

`GET /applications/{key}/compliance`

<h3 id="get-applications-compliance-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|key|path|string|true|none|

<h3 id="get-applications-compliance-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey & APIToken
</aside>

## Batch Requests

<a id="opIdget-batch"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/batch?urls=string' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /batch`

Make up to 10 GET requests in a single, batched API call.

<h3 id="batch-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|urls|query|string|true|A list of API routes. Maximum of 10 routes allowed. The routes should begin with a forward slash and should not include the API version number - e.g. "urls=/members/trello,/cards/[cardId]"|

<h3 id="batch-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Memberships of a Board

<a id="opIdget-boards-id-memberships"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/memberships`

Get information about the memberships users have to the board.

<h3 id="get-memberships-of-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|
|filter|query|string|false|One of `admins`, `all`, `none`, `normal`|
|activity|query|boolean|false|Works for premium organizations only.|
|orgMemberType|query|boolean|false|Shows the type of member to the org the user is. For instance, an org admin will have a `orgMemberType` of `admin`.|
|member|query|boolean|false|Determines whether to include a [nested member object](/cloud/trello/guides/rest-api/nested-resources/).|
|member_fields|query|[MemberFields](#schemamemberfields)|false|Fields to show if `member=true`. Valid values: [nested member resource fields](/cloud/trello/guides/rest-api/nested-resources/).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|admins|
|filter|all|
|filter|none|
|filter|normal|
|member_fields|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="get-memberships-of-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Memberships](#schemamemberships)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get a Board

<a id="opIdget-boards-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}`

Request a single board.

<h3 id="get-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|actions|query|string|false|This is a nested resource. Read more about actions as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).|
|boardStars|query|string|false|Valid values are one of: `mine` or `none`.|
|cards|query|string|false|This is a nested resource. Read more about cards as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).|
|card_pluginData|query|boolean|false|Use with the `cards` param to include card pluginData with the response|
|checklists|query|string|false|This is a nested resource. Read more about checklists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).|
|customFields|query|boolean|false|This is a nested resource. Read more about custom fields as nested resources [here](#custom-fields-nested-resource).|
|fields|query|string|false|The fields of the board to be included in the response. Valid values: all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url|
|labels|query|string|false|This is a nested resource. Read more about labels as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).|
|lists|query|string|false|This is a nested resource. Read more about lists as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).|
|members|query|string|false|This is a nested resource. Read more about members as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).|
|memberships|query|string|false|This is a nested resource. Read more about memberships as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).|
|pluginData|query|boolean|false|Determines whether the pluginData for this board should be returned. Valid values: true or false.|
|organization|query|boolean|false|This is a nested resource. Read more about organizations as nested resources [here](/cloud/trello/guides/rest-api/nested-resources/).|
|organization_pluginData|query|boolean|false|Use with the `organization` param to include organization pluginData with the response|
|myPrefs|query|boolean|false|none|
|tags|query|boolean|false|Also known as collections, tags, refer to the collection(s) that a Board belongs to.|
|id|path|[TrelloID](#schematrelloid)|true|none|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "Trello Platform Changes",
  "desc": "Track changes to Trello's Platform on this board.",
  "descData": "string",
  "closed": false,
  "idMemberCreator": "5abbe4b7ddc1b351ef961414",
  "idOrganization": "5abbe4b7ddc1b351ef961414",
  "pinned": false,
  "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
  "shortUrl": "https://trello.com/b/dQHqCohZ",
  "prefs": {
    "permissionLevel": "org",
    "hideVotes": true,
    "voting": "disabled",
    "comments": "string",
    "invitations": "admins",
    "selfJoin": true,
    "cardCovers": true,
    "isTemplate": true,
    "cardAging": "pirate",
    "calendarFeedEnabled": true,
    "background": "5abbe4b7ddc1b351ef961414",
    "backgroundImage": "http://example.com",
    "backgroundImageScaled": [
      {
        "width": 100,
        "height": 64,
        "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
      }
    ],
    "backgroundTile": true,
    "backgroundBrightness": "dark",
    "backgroundBottomColor": "#1e2e00",
    "backgroundTopColor": "#ffffff",
    "canBePublic": true,
    "canBeEnterprise": true,
    "canBeOrg": true,
    "canBePrivate": true,
    "canInvite": true
  },
  "labelNames": {
    "green": "Addition",
    "yellow": "Update",
    "orange": "Deprecation",
    "red": "Deletion",
    "purple": "Power-Ups",
    "blue": "News",
    "sky": "Announcement",
    "lime": "Delight",
    "pink": "REST API",
    "black": "Capabilties"
  },
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "starred": true,
  "memberships": "string",
  "shortLink": "string",
  "subscribed": true,
  "powerUps": "string",
  "dateLastActivity": "1970-01-01",
  "dateLastView": "1970-01-01",
  "idTags": "string",
  "datePluginDisable": "1970-01-01",
  "creationMethod": "string",
  "ixUpdate": 0,
  "templateGallery": "string",
  "enterpriseOwned": true
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Board](#schemaboard)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update a Board

<a id="opIdput-boards-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}`

Update an existing board by id

<h3 id="update-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The new name for the board. 1 to 16384 characters long.|
|desc|query|string|false|A new description for the board, 0 to 16384 characters long|
|closed|query|boolean|false|Whether the board is closed|
|subscribed|query|[TrelloID](#schematrelloid)|false|Whether the acting user is subscribed to the board|
|idOrganization|query|string|false|The id of the Workspace the board should be moved to|
|prefs/permissionLevel|query|string|false|One of: org, private, public|
|prefs/selfJoin|query|boolean|false|Whether Workspace members can join the board themselves|
|prefs/cardCovers|query|boolean|false|Whether card covers should be displayed on this board|
|prefs/hideVotes|query|boolean|false|Determines whether the Voting Power-Up should hide who voted on cards or not.|
|prefs/invitations|query|string|false|Who can invite people to this board. One of: admins, members|
|prefs/voting|query|string|false|Who can vote on this board. One of disabled, members, observers, org, public|
|prefs/comments|query|string|false|Who can comment on cards on this board. One of: disabled, members, observers, org, public|
|prefs/background|query|string|false|The id of a custom background or one of: blue, orange, green, red, purple, pink, lime, sky, grey|
|prefs/cardAging|query|string|false|One of: pirate, regular|
|prefs/calendarFeedEnabled|query|boolean|false|Determines whether the calendar feed is enabled or not.|
|id|path|[TrelloID](#schematrelloid)|true|none|

<h3 id="update-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Delete a Board

<a id="opIddelete-boards-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /boards/{id}`

Delete a board.

<h3 id="delete-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the board to delete|

<h3 id="delete-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:board:trello )
</aside>

## Get a field on a Board

<a id="opIdget-boards-id-field"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/string/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/{field}`

Get a single, specific field on a board

<h3 id="get-a-field-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the board.|
|field|path|string|true|The field you'd like to receive. Valid values: closed, dateLastActivity, dateLastView, desc, descData, idMemberCreator, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed, url.|

<h3 id="get-a-field-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Actions of a Board

<a id="opIdget-boards-id-actions"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/string/actions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{boardId}/actions`

Get all of the actions of a Board. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.

<h3 id="get-actions-of-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|boardId|path|string|true|none|
|fields|query|[Action](#schemaaction)|false|The fields to be returned for the Actions. [See Action fields here](/cloud/trello/guides/rest-api/object-definitions/#action-object).|
|filter|query|string|false|A comma-separated list of [action types](/cloud/trello/guides/rest-api/action-types/).|
|format|query|string|false|The format of the returned Actions. Either list or count.|
|idModels|query|string|false|A comma-separated list of idModels. Only actions related to these models will be returned.|
|limit|query|number|false|The limit of the number of responses, between 0 and 1000.|
|member|query|boolean|false|Whether to return the member object for each action.|
|member_fields|query|string|false|The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) to return.|
|memberCreator|query|boolean|false|Whether to return the memberCreator object for each action.|
|memberCreator_fields|query|string|false|The fields of the [member](/cloud/trello/guides/rest-api/object-definitions/#member-object) creator to return|
|page|query|number|false|The page of results for actions.|
|reactions|query|boolean|false|Whether to show reactions on comments or not.|
|before|query|string|false|A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created before this date will be returned.|
|since|query|string|false|A date string in the form of YYYY-MM-DDThh:mm:ssZ or a mongo object ID. Only objects created since this date will be returned.|

<h3 id="get-actions-of-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get boardStars on a Board

<a id="opIdget-boards-id-boardstars"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/string/boardStars \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{boardId}/boardStars`

<h3 id="get-boardstars-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|boardId|path|string|true|none|
|filter|query|string|false|Valid values: mine, none|

> Example responses

> 200 Response

```json
[
  {
    "id": "585063850027165010be15a8",
    "idBoard": "57f7df684f1ca8c2877162e0",
    "pos": 32768
  }
]
```

<h3 id="get-boardstars-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-boardstars-on-a-board-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BoardStars](#schemaboardstars)]|false|none|none|
|» *oneOf*|[BoardStars](#schemaboardstars)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Checklists on a Board

<a id="opIdboards-id-checklists"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/string/checklists \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/checklists`

Get all of the checklists on a Board.

<h3 id="get-checklists-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the board|

<h3 id="get-checklists-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Cards on a Board

<a id="opIdget-boards-id-cards"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/string/cards \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/cards`

Get all of the open Cards on a Board. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.

<h3 id="get-cards-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="get-cards-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get filtered Cards on a Board

<a id="opIdget-boards-id-cards-filter"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/string/cards/all \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/cards/{filter}`

Get the Cards on a Board that match a given filter. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.

<h3 id="get-filtered-cards-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the Board|
|filter|path|string|true|One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|closed|
|filter|complete|
|filter|incomplete|
|filter|none|
|filter|open|
|filter|visible|

<h3 id="get-filtered-cards-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Custom Fields for Board

<a id="opIdget-boards-id-customfields"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/customFields \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/customFields`

Get the Custom Field Definitions that exist on a board.

<h3 id="get-custom-fields-for-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|

> Example responses

> 200 Response

```json
[
  {
    "id": "5ab10be237846c43015f108e",
    "idModel": "586e8f681d4fe9b06a928307",
    "modelType": "board",
    "fieldGroup": "f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955",
    "display": {
      "cardFront": true,
      "name": "Priority 🏔",
      "pos": "98304,",
      "options": [
        {
          "id": "5ab10be237846c43015f1091",
          "idCustomField": "5ab10be237846c43015f108e",
          "value": {
            "text": "High"
          },
          "color": "red",
          "pos": 16384
        }
      ]
    },
    "type": "list"
  }
]
```

<h3 id="get-custom-fields-for-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-custom-fields-for-board-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomField](#schemacustomfield)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Labels on a Board

<a id="opIdget-boards-id-labels"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/labels \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/labels`

Get all of the Labels on a Board.

<h3 id="get-labels-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Board.|
|fields|query|[Label](#schemalabel)|false|The fields to be returned for the Labels.|
|limit|query|integer(int32)|false|The number of Labels to be returned.|

<h3 id="get-labels-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Create a Label on a Board

<a id="opIdpost-boards-id-labels"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/string/labels?name=string&color=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/{id}/labels`

Create a new Label on a Board.

<h3 id="create-a-label-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the board to update|
|name|query|string|true|The name of the label to be created. 1 to 16384 characters long.|
|color|query|string|true|Sets the color of the new label. Valid values are a label color or `null`.|

<h3 id="create-a-label-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get Lists on a Board

<a id="opIdget-boards-id-lists"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/lists`

Get the Lists on a Board

<h3 id="get-lists-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cards|query|[ViewFilter](#schemaviewfilter)|false|Filter to apply to Cards.|
|card_fields|query|string|false|`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/#card-object)|
|filter|query|[ViewFilter](#schemaviewfilter)|false|Filter to apply to Lists|
|fields|query|string|false|`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cards|all|
|cards|closed|
|cards|none|
|cards|open|
|filter|all|
|filter|closed|
|filter|none|
|filter|open|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Things to buy today",
    "closed": true,
    "pos": 0,
    "softLimit": "string",
    "idBoard": "string",
    "subscribed": true,
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    }
  }
]
```

<h3 id="get-lists-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-lists-on-a-board-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TrelloList](#schematrellolist)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Create a List on a Board

<a id="opIdpost-boards-id-lists"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/lists?name=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/{id}/lists`

Create a new List on a Board.

<h3 id="create-a-list-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name of the list to be created. 1 to 16384 characters long.|
|pos|query|string|false|Determines the position of the list. Valid values: `top`, `bottom`, or a positive number.|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "Things to buy today",
  "closed": true,
  "pos": 0,
  "softLimit": "string",
  "idBoard": "string",
  "subscribed": true,
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  }
}
```

<h3 id="create-a-list-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TrelloList](#schematrellolist)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get filtered Lists on a Board

<a id="opIdget-boards-id-lists-filter"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/lists/all \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/lists/{filter}`

<h3 id="get-filtered-lists-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|
|filter|path|[ViewFilter](#schemaviewfilter)|true|One of `all`, `closed`, `none`, `open`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|closed|
|filter|none|
|filter|open|

<h3 id="get-filtered-lists-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get the Members of a Board

<a id="opIdget-boards-id-members"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/members \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/members`

Get the Members for a board

<h3 id="get-the-members-of-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|

<h3 id="get-the-members-of-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Invite Member to Board via email

<a id="opIdput-boards-id-members"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/members?email=user%40example.com' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "fullName": "string"
  }'
```

`PUT /boards/{id}/members`

Invite a Member to a Board via their email address.

> Body parameter

```json
{
  "fullName": "string"
}
```

<h3 id="invite-member-to-board-via-email-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string(email)|true|The email address of a user to add as a member of the board.|
|type|query|string|false|Valid values: admin, normal, observer. Determines what type of member the user being added should be of the board.|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|
|body|body|object|false|none|
|» fullName|body|string|false|The full name of the user to as a member of the board. Must have a length of at least 1 and cannot begin nor end with a space.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|admin|
|type|normal|
|type|observer|

<h3 id="invite-member-to-board-via-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:membership:trello )
</aside>

## Add a Member to a Board

<a id="opIdput-boards-id-members-idmember"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/members/5abbe4b7ddc1b351ef961414?type=admin' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}/members/{idMember}`

Add a member to the board.

<h3 id="add-a-member-to-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|One of: admin, normal, observer. Determines the type of member this user will be on the board.|
|allowBillableGuest|query|boolean|false|Optional param that allows organization admins to add multi-board guests onto a board.|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|idMember|path|[TrelloID](#schematrelloid)|true|The id of the member to add to the board.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|admin|
|type|normal|
|type|observer|

<h3 id="add-a-member-to-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:membership:trello )
</aside>

## Remove Member from Board

<a id="opIdboardsidmembersidmember"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/members/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /boards/{id}/members/{idMember}`

<h3 id="remove-member-from-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|idMember|path|[TrelloID](#schematrelloid)|true|The id of the member to add to the board.|

<h3 id="remove-member-from-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:membership:trello )
</aside>

## Update Membership of Member on a Board

<a id="opIdput-boards-id-memberships-idmembership"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/memberships/5abbe4b7ddc1b351ef961414?type=admin' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}/memberships/{idMembership}`

Update an existing board by id

<h3 id="update-membership-of-member-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|idMembership|path|[TrelloID](#schematrelloid)|true|The id of a membership that should be added to this board.|
|type|query|string|true|One of: admin, normal, observer. Determines the type of member that this membership will be to this board.|
|member_fields|query|string|false|Valid values: all, avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|admin|
|type|normal|
|type|observer|
|member_fields|all|
|member_fields|avatarHash|
|member_fields|bio|
|member_fields|bioData|
|member_fields|confirmed|
|member_fields|fullName|
|member_fields|idPremOrgsAdmin|
|member_fields|initials|
|member_fields|memberType|
|member_fields|products|
|member_fields|status|
|member_fields|url|
|member_fields|username|

<h3 id="update-membership-of-member-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:membership:trello )
</aside>

## Update emailPosition Pref on a Board

<a id="opIdput-boards-id-myprefs-emailposition"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/myPrefs/emailPosition?value=bottom' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}/myPrefs/emailPosition`

Update emailPosition Pref on a Board

<h3 id="update-emailposition-pref-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|value|query|string|true|Valid values: bottom, top. Determines the position of the email address.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|value|bottom|
|value|top|

<h3 id="update-emailposition-pref-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Update idEmailList Pref on a Board

<a id="opIdput-boards-id-myprefs-idemaillist"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/myPrefs/idEmailList?value=5abbe4b7ddc1b351ef961414' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}/myPrefs/idEmailList`

Change the default list that email-to-board cards are created in.

<h3 id="update-idemaillist-pref-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|value|query|[TrelloID](#schematrelloid)|true|The id of an email list.|

<h3 id="update-idemaillist-pref-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Update showSidebar Pref on a Board

<a id="opIdput-boards-id-myPrefs-showsidebar"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/myPrefs/showSidebar?value=true' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}/myPrefs/showSidebar`

<h3 id="update-showsidebar-pref-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|value|query|boolean|true|Determines whether to show the side bar.|

<h3 id="update-showsidebar-pref-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update showSidebarActivity Pref on a Board

<a id="opIdput-boards-id-myPrefs-showsidebaractivity"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/myPrefs/showSidebarActivity?value=true' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}/myPrefs/showSidebarActivity`

<h3 id="update-showsidebaractivity-pref-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|value|query|boolean|true|Determines whether to show sidebar activity.|

<h3 id="update-showsidebaractivity-pref-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update showSidebarBoardActions Pref on a Board

<a id="opIdput-boards-id-myPrefs-showsidebarboardactions"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/myPrefs/showSidebarBoardActions?value=true' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}/myPrefs/showSidebarBoardActions`

<h3 id="update-showsidebarboardactions-pref-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|value|query|boolean|true|Determines whether to show the sidebar board actions.|

<h3 id="update-showsidebarboardactions-pref-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update showSidebarMembers Pref on a Board

<a id="opIdput-boards-id-myPrefs-showsidebarmembers"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/myPrefs/showSidebarMembers?value=true' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /boards/{id}/myPrefs/showSidebarMembers`

<h3 id="update-showsidebarmembers-pref-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|value|query|boolean|true|Determines whether to show members of the board in the sidebar.|

<h3 id="update-showsidebarmembers-pref-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Create a Board

<a id="opIdpost-boards"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/?name=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/`

Create a new board.

<h3 id="create-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The new name for the board. 1 to 16384 characters long.|
|defaultLabels|query|boolean|false|Determines whether to use the default set of labels.|
|defaultLists|query|boolean|false|Determines whether to add the default set of lists to a board (To Do, Doing, Done). It is ignored if `idBoardSource` is provided.|
|desc|query|string|false|A new description for the board, 0 to 16384 characters long|
|idOrganization|query|[TrelloID](#schematrelloid)|false|The id or name of the Workspace the board should belong to.|
|idBoardSource|query|[TrelloID](#schematrelloid)|false|The id of a board to copy into the new board.|
|keepFromSource|query|string|false|To keep cards from the original board pass in the value `cards`|
|powerUps|query|string|false|The Power-Ups that should be enabled on the new board. One of: `all`, `calendar`, `cardAging`, `recap`, `voting`.|
|prefs_permissionLevel|query|string|false|The permissions level of the board. One of: `org`, `private`, `public`.|
|prefs_voting|query|string|false|Who can vote on this board. One of `disabled`, `members`, `observers`, `org`, `public`.|
|prefs_comments|query|string|false|Who can comment on cards on this board. One of: `disabled`, `members`, `observers`, `org`, `public`.|
|prefs_invitations|query|string|false|Determines what types of members can invite users to join. One of: `admins`, `members`.|
|prefs_selfJoin|query|boolean|false|Determines whether users can join the boards themselves or whether they have to be invited.|
|prefs_cardCovers|query|boolean|false|Determines whether card covers are enabled.|
|prefs_background|query|string|false|The id of a custom background or one of: `blue`, `orange`, `green`, `red`, `purple`, `pink`, `lime`, `sky`, `grey`.|
|prefs_cardAging|query|string|false|Determines the type of card aging that should take place on the board if card aging is enabled. One of: `pirate`, `regular`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|keepFromSource|cards|
|keepFromSource|none|
|powerUps|all|
|powerUps|calendar|
|powerUps|cardAging|
|powerUps|recap|
|powerUps|voting|
|prefs_permissionLevel|org|
|prefs_permissionLevel|private|
|prefs_permissionLevel|public|
|prefs_voting|disabled|
|prefs_voting|members|
|prefs_voting|observers|
|prefs_voting|org|
|prefs_voting|public|
|prefs_comments|disabled|
|prefs_comments|members|
|prefs_comments|observers|
|prefs_comments|org|
|prefs_comments|public|
|prefs_invitations|members|
|prefs_invitations|admins|
|prefs_background|blue|
|prefs_background|orange|
|prefs_background|green|
|prefs_background|red|
|prefs_background|purple|
|prefs_background|pink|
|prefs_background|lime|
|prefs_background|sky|
|prefs_background|grey|
|prefs_cardAging|pirate|
|prefs_cardAging|regular|

<h3 id="create-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Create a calendarKey for a Board

<a id="opIdpost-boards-id-calendarkey-generate"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/calendarKey/generate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/{id}/calendarKey/generate`

Create a new board.

<h3 id="create-a-calendarkey-for-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|

<h3 id="create-a-calendarkey-for-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Create a emailKey for a Board

<a id="opIdpost-boards-id-emailkey-generate"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/emailKey/generate \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/{id}/emailKey/generate`

<h3 id="create-a-emailkey-for-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|

<h3 id="create-a-emailkey-for-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Create a Tag for a Board

<a id="opIdpost-boards-id-idtags"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/idTags?value=5abbe4b7ddc1b351ef961414' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/{id}/idTags`

<h3 id="create-a-tag-for-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|
|value|query|[TrelloID](#schematrelloid)|true|The id of a tag from the organization to which this board belongs.|

<h3 id="create-a-tag-for-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Mark Board as viewed

<a id="opIdpost-boards-id-markedasviewed"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/markAsViewed \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/{id}/markAsViewed`

<h3 id="mark-board-as-viewed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The id of the board to update|

<h3 id="mark-board-as-viewed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Enabled Power-Ups on Board

<a id="opIdget-boards-id-boardplugins"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/boardPlugins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/boardPlugins`

Get the enabled Power-Ups on a board

<h3 id="get-enabled-power-ups-on-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Board|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414"
  }
]
```

<h3 id="get-enabled-power-ups-on-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-enabled-power-ups-on-board-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Plugin](#schemaplugin)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Enable a Power-Up on a Board

<a id="opIdpost-boards-id-boardplugins"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/boardPlugins \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/{id}/boardPlugins`

<aside class="warning">
This operation is deprecated
</aside>

Enable a Power-Up on a Board

<h3 id="enable-a-power-up-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idPlugin|query|[TrelloID](#schematrelloid)|false|The ID of the Power-Up to enable|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Board|

<h3 id="enable-a-power-up-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Disable a Power-Up on a Board

<a id="opIddelete-boards-id-boardplugins"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/boardPlugins/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /boards/{id}/boardPlugins/{idPlugin}`

<aside class="warning">
This operation is deprecated
</aside>

Disable a Power-Up on a board

<h3 id="disable-a-power-up-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|
|idPlugin|path|[TrelloID](#schematrelloid)|true|The ID of the Power-Up to disable|

<h3 id="disable-a-power-up-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get Power-Ups on a Board

<a id="opIdget-board-id-plugins"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/plugins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/plugins`

List the Power-Ups on a board

<h3 id="get-power-ups-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|
|filter|query|string|false|One of: `enabled` or `available`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|enabled|
|filter|available|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="get-power-ups-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Plugin](#schemaplugin)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Create an Export for a Board

<a id="opIdpost-boards-id-exports"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/exports \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /boards/{id}/exports`

Kick off an export of a board. Only one export may be in progress for a board at a time.

<h3 id="create-an-export-for-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachments|query|boolean|false|Whether the export should include attachments|
|attachment_age|query|number|false|Only include attachments created within this many days. `0` means no limit.|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|

> Example responses

> 200 Response

```json
{
  "id": "5dced8665015383ed5ca248c",
  "status": {
    "attempts": 0,
    "finished": false,
    "stage": "Export_queued"
  },
  "startedAt": "2019-11-15T16:55:02.000Z",
  "size": null,
  "exportUrl": null
}
```

<h3 id="create-an-export-for-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get an Export for a Board

<a id="opIdget-boards-id-exports-idexport"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/exports/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/exports/{idExport}`

Get the status of a board export

<h3 id="get-an-export-for-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|
|idExport|path|[TrelloID](#schematrelloid)|true|The ID of the export|

> Example responses

> 200 Response

```json
{
  "id": "5dced8665015383ed5ca248c",
  "status": {
    "attempts": 0,
    "finished": false,
    "stage": "Export_queued"
  },
  "startedAt": "2019-11-15T16:55:02.000Z",
  "size": null,
  "exportUrl": null
}
```

<h3 id="get-an-export-for-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Delete an Export for a Board

<a id="opIddelete-boards-id-exports-idexport"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/exports/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /boards/{id}/exports/{idExport}`

Soft-delete a board export

<h3 id="delete-an-export-for-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|
|idExport|path|[TrelloID](#schematrelloid)|true|The ID of the export|

<h3 id="delete-an-export-for-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Download an Export for a Board

<a id="opIdget-boards-id-exports-idexport-download"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/exports/5abbe4b7ddc1b351ef961414/download \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/exports/{idExport}/download`

Download the exported file. Redirects to the file location if the export is ready, or errors if it is not.

<h3 id="download-an-export-for-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|
|idExport|path|[TrelloID](#schematrelloid)|true|The ID of the export|

<h3 id="download-an-export-for-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|Redirects to the export file's download location|None|
|400|Bad Request|Export is not ready for download|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get a Board's Most Recent Export

<a id="opIdget-boards-id-exports-mostrecent"></a>

> Code samples

```bash
curl https://api.trello.com/1/boards/5abbe4b7ddc1b351ef961414/exports/mostRecent \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /boards/{id}/exports/mostRecent`

Get the most recent successful export for a board

<h3 id="get-a-boards-most-recent-export-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the board|

> Example responses

> 200 Response

```json
{
  "id": "5dced8665015383ed5ca248c",
  "status": {
    "attempts": 0,
    "finished": false,
    "stage": "Export_queued"
  },
  "startedAt": "2019-11-15T16:55:02.000Z",
  "size": null,
  "exportUrl": null
}
```

<h3 id="get-a-boards-most-recent-export-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|
|404|Not Found|Board has no export, or is not in a Workspace|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Create a new Card

<a id="opIdpost-cards"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/cards?idList=5abbe4b7ddc1b351ef961414' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards`

Create a new card. Query parameters may also be replaced with a JSON request body instead.

<h3 id="create-a-new-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name for the card|
|desc|query|string|false|The description for the card|
|pos|query|string \| number(float)|false|The position of the new card. `top`, `bottom`, or a positive float|
|due|query|string(date)|false|A due date for the card|
|start|query|string(date) \| null|false|The start date of a card, or `null`|
|dueComplete|query|boolean|false|Whether the status of the card is complete|
|idList|query|[TrelloID](#schematrelloid)|true|The ID of the list the card should be created in|
|idMembers|query|[[TrelloID](#schematrelloid)]|false|Comma-separated list of member IDs to add to the card|
|idLabels|query|[[TrelloID](#schematrelloid)]|false|Comma-separated list of label IDs to add to the card|
|urlSource|query|string(url)|false|A URL starting with `http://` or `https://`. The URL will be attached to the card upon creation.|
|fileSource|query|string(binary)|false|none|
|mimeType|query|string|false|The mimeType of the attachment. Max length 256|
|idCardSource|query|[TrelloID](#schematrelloid)|false|The ID of a card to copy into the new card|
|keepFromSource|query|string|false|If using `idCardSource` you can specify which properties to copy over. `all` or comma-separated list of: `attachments,checklists,customFields,comments,due,start,labels,members,start,stickers`|
|address|query|string|false|For use with/by the Map View|
|locationName|query|string|false|For use with/by the Map View|
|coordinates|query|string|false|For use with/by the Map View. Should take the form latitude,longitude|
|cardRole|query|string \| null|false|For displaying cards in different ways based on the card name. Board cards must have a name that is a link to a Trello board. Mirror cards must have a name that is a link to a Trello card.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|keepFromSource|all|
|keepFromSource|attachments|
|keepFromSource|checklists|
|keepFromSource|comments|
|keepFromSource|customFields|
|keepFromSource|due|
|keepFromSource|start|
|keepFromSource|labels|
|keepFromSource|members|
|keepFromSource|start|
|keepFromSource|stickers|
|cardRole|separator|
|cardRole|board|
|cardRole|mirror|
|cardRole|link|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "address": "string",
  "badges": {
    "attachmentsByType": {
      "trello": {
        "board": 0,
        "card": 0
      }
    },
    "location": true,
    "votes": 0,
    "viewingMemberVoted": false,
    "subscribed": false,
    "fogbugz": "string",
    "checkItems": 0,
    "checkItemsChecked": 0,
    "comments": 0,
    "attachments": 0,
    "description": true,
    "due": "1970-01-01",
    "start": "1970-01-01",
    "dueComplete": true
  },
  "cardRole": "mirror",
  "checkItemStates": [
    "string"
  ],
  "closed": true,
  "coordinates": "string",
  "creationMethod": "string",
  "dateLastActivity": "2019-09-16T16:19:17.156Z",
  "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
  "descData": {
    "emoji": {}
  },
  "due": "1970-01-01",
  "dueReminder": "string",
  "idBoard": "5abbe4b7ddc1b351ef961414",
  "idChecklists": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ],
  "idLabels": [
    {
      "id": "5abbe4b7ddc1b351ef961414",
      "idBoard": "5abbe4b7ddc1b351ef961414",
      "name": "Overdue",
      "color": "yellow"
    }
  ],
  "idList": "5abbe4b7ddc1b351ef961415",
  "idMembers": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idMembersVoted": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idShort": 0,
  "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
  "labels": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "locationName": "string",
  "manualCoverAttachment": false,
  "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
  "name": "👋 What? Why? How?",
  "pos": 65535,
  "shortLink": "H0TZyzbK",
  "shortUrl": "https://trello.com/c/H0TZyzbK",
  "subscribed": false,
  "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
  "cover": {
    "idAttachment": "5abbe4b7ddc1b351ef961414",
    "color": "yellow",
    "idUploadedBackground": true,
    "size": "normal",
    "brightness": "light",
    "isTemplate": false
  }
}
```

<h3 id="create-a-new-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Card](#schemacard)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get a Card

<a id="opIdget-cards-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}`

Get a card by its ID

<h3 id="get-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|`all` or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `badges, checkItemStates, closed, dateLastActivity, desc, descData, due, start, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl, url`|
|actions|query|string|false|See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)|
|attachments|query|string|false|`true`, `false`, or `cover`|
|attachment_fields|query|string|false|`all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|members|query|boolean|false|Whether to return member objects for members on the card|
|member_fields|query|string|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`|
|membersVoted|query|boolean|false|Whether to return member objects for members who voted on the card|
|memberVoted_fields|query|string|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/). **Defaults**: `avatarHash, fullName, initials, username`|
|checkItemStates|query|boolean|false|none|
|checklists|query|string|false|Whether to return the checklists on the card. `all` or `none`|
|checklist_fields|query|string|false|`all` or a comma-separated list of `idBoard,idCard,name,pos`|
|board|query|boolean|false|Whether to return the board object the card is on|
|board_fields|query|string|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object). **Defaults**: `name, desc, descData, closed, idOrganization, pinned, url, prefs`|
|list|query|boolean|false|See the [Lists Nested Resource](/cloud/trello/guides/rest-api/nested-resources/)|
|pluginData|query|boolean|false|Whether to include pluginData on the card with the response|
|stickers|query|boolean|false|Whether to include sticker models with the response|
|sticker_fields|query|string|false|`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|customFieldItems|query|boolean|false|Whether to include the customFieldItems|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "address": "string",
  "badges": {
    "attachmentsByType": {
      "trello": {
        "board": 0,
        "card": 0
      }
    },
    "location": true,
    "votes": 0,
    "viewingMemberVoted": false,
    "subscribed": false,
    "fogbugz": "string",
    "checkItems": 0,
    "checkItemsChecked": 0,
    "comments": 0,
    "attachments": 0,
    "description": true,
    "due": "1970-01-01",
    "start": "1970-01-01",
    "dueComplete": true
  },
  "cardRole": "mirror",
  "checkItemStates": [
    "string"
  ],
  "closed": true,
  "coordinates": "string",
  "creationMethod": "string",
  "dateLastActivity": "2019-09-16T16:19:17.156Z",
  "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
  "descData": {
    "emoji": {}
  },
  "due": "1970-01-01",
  "dueReminder": "string",
  "idBoard": "5abbe4b7ddc1b351ef961414",
  "idChecklists": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ],
  "idLabels": [
    {
      "id": "5abbe4b7ddc1b351ef961414",
      "idBoard": "5abbe4b7ddc1b351ef961414",
      "name": "Overdue",
      "color": "yellow"
    }
  ],
  "idList": "5abbe4b7ddc1b351ef961415",
  "idMembers": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idMembersVoted": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idShort": 0,
  "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
  "labels": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "locationName": "string",
  "manualCoverAttachment": false,
  "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
  "name": "👋 What? Why? How?",
  "pos": 65535,
  "shortLink": "H0TZyzbK",
  "shortUrl": "https://trello.com/c/H0TZyzbK",
  "subscribed": false,
  "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
  "cover": {
    "idAttachment": "5abbe4b7ddc1b351ef961414",
    "color": "yellow",
    "idUploadedBackground": true,
    "size": "normal",
    "brightness": "light",
    "isTemplate": false
  }
}
```

<h3 id="get-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Card](#schemacard)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update a Card

<a id="opIdput-cards-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cards/{id}`

Update a card. Query parameters may also be replaced with a JSON request body instead.

<h3 id="update-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The new name for the card|
|desc|query|string|false|The new description for the card|
|closed|query|boolean|false|Whether the card should be archived (closed: true)|
|idMembers|query|[TrelloID](#schematrelloid)|false|Comma-separated list of member IDs|
|idAttachmentCover|query|[TrelloID](#schematrelloid)|false|The ID of the image attachment the card should use as its cover, or null for none|
|idList|query|[TrelloID](#schematrelloid)|false|The ID of the list the card should be in|
|idLabels|query|[TrelloID](#schematrelloid)|false|Comma-separated list of label IDs|
|idBoard|query|[TrelloID](#schematrelloid)|false|The ID of the board the card should be on|
|pos|query|string \| number(float)|false|The position of the card in its list. `top`, `bottom`, or a positive float|
|due|query|string(date) \| null|false|When the card is due, or `null`|
|start|query|string(date) \| null|false|The start date of a card, or `null`|
|dueComplete|query|boolean|false|Whether the status of the card is complete|
|subscribed|query|boolean|false|Whether the member is should be subscribed to the card|
|address|query|string|false|For use with/by the Map View|
|locationName|query|string|false|For use with/by the Map View|
|coordinates|query|string|false|For use with/by the Map View. Should be latitude,longitude|
|cover|query|object|false|Updates the card's cover<br> \| Option \| Values \| About \|<br> \|--------\|--------\|-------\|<br> \| color \| `pink`, `yellow`, `lime`, `blue`, `black`, `orange`, `red`, `purple`, `sky`, `green` \| Makes the cover a solid color . \|<br> \| brightness \| `dark`, `light` \| Determines whether the text on the cover should be dark or light.<br> \| url \| An unsplash URL: https://images.unsplash.com \| Used if making an image the cover. Only Unsplash URLs work.<br> \| idAttachment \| ID of an attachment on the card \| Used if setting an attached image as the cover. \|<br> \| size \| `normal`, `full` \| Determines whether to show the card name on the cover, or below it. \|<br> <br> `brightness` can be sent alongside any of the other parameters, but all of the other parameters are mutually exclusive; you can not have the cover be a `color` and an `idAttachment` at the same time. <br> <br> On the brightness options, setting it to light will make the text on the card cover dark:<br> ![](/cloud/trello/images/rest/cards/cover-brightness-dark.png)<br> <br> And vice versa, setting it to dark will make the text on the card cover light: <br> ![](/cloud/trello/images/rest/cards/cover-brightness-light.png) |
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "address": "string",
  "badges": {
    "attachmentsByType": {
      "trello": {
        "board": 0,
        "card": 0
      }
    },
    "location": true,
    "votes": 0,
    "viewingMemberVoted": false,
    "subscribed": false,
    "fogbugz": "string",
    "checkItems": 0,
    "checkItemsChecked": 0,
    "comments": 0,
    "attachments": 0,
    "description": true,
    "due": "1970-01-01",
    "start": "1970-01-01",
    "dueComplete": true
  },
  "cardRole": "mirror",
  "checkItemStates": [
    "string"
  ],
  "closed": true,
  "coordinates": "string",
  "creationMethod": "string",
  "dateLastActivity": "2019-09-16T16:19:17.156Z",
  "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
  "descData": {
    "emoji": {}
  },
  "due": "1970-01-01",
  "dueReminder": "string",
  "idBoard": "5abbe4b7ddc1b351ef961414",
  "idChecklists": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ],
  "idLabels": [
    {
      "id": "5abbe4b7ddc1b351ef961414",
      "idBoard": "5abbe4b7ddc1b351ef961414",
      "name": "Overdue",
      "color": "yellow"
    }
  ],
  "idList": "5abbe4b7ddc1b351ef961415",
  "idMembers": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idMembersVoted": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idShort": 0,
  "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
  "labels": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "locationName": "string",
  "manualCoverAttachment": false,
  "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
  "name": "👋 What? Why? How?",
  "pos": 65535,
  "shortLink": "H0TZyzbK",
  "shortUrl": "https://trello.com/c/H0TZyzbK",
  "subscribed": false,
  "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
  "cover": {
    "idAttachment": "5abbe4b7ddc1b351ef961414",
    "color": "yellow",
    "idUploadedBackground": true,
    "size": "normal",
    "brightness": "light",
    "isTemplate": false
  }
}
```

<h3 id="update-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Card](#schemacard)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Delete a Card

<a id="opIddelete-cards-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}`

Delete a Card

<h3 id="delete-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

<h3 id="delete-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get a field on a Card

<a id="opIdget-cards-id-field"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/id \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/{field}`

Get a specific property of a card

<h3 id="get-a-field-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|field|path|[CardFields](#schemacardfields)|true|The desired field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|id|
|field|address|
|field|badges|
|field|checkItemStates|
|field|closed|
|field|coordinates|
|field|creationMethod|
|field|dueComplete|
|field|dateLastActivity|
|field|desc|
|field|descData|
|field|due|
|field|dueReminder|
|field|idBoard|
|field|idChecklists|
|field|idLabels|
|field|idList|
|field|idMembers|
|field|idMembersVoted|
|field|idShort|
|field|idAttachmentCover|
|field|labels|
|field|limits|
|field|locationName|
|field|manualCoverAttachment|
|field|name|
|field|pos|
|field|shortLink|
|field|shortUrl|
|field|subscribed|
|field|url|
|field|cover|
|field|isTemplate|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "address": "string",
  "badges": {
    "attachmentsByType": {
      "trello": {
        "board": 0,
        "card": 0
      }
    },
    "location": true,
    "votes": 0,
    "viewingMemberVoted": false,
    "subscribed": false,
    "fogbugz": "string",
    "checkItems": 0,
    "checkItemsChecked": 0,
    "comments": 0,
    "attachments": 0,
    "description": true,
    "due": "1970-01-01",
    "start": "1970-01-01",
    "dueComplete": true
  },
  "cardRole": "mirror",
  "checkItemStates": [
    "string"
  ],
  "closed": true,
  "coordinates": "string",
  "creationMethod": "string",
  "dateLastActivity": "2019-09-16T16:19:17.156Z",
  "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
  "descData": {
    "emoji": {}
  },
  "due": "1970-01-01",
  "dueReminder": "string",
  "idBoard": "5abbe4b7ddc1b351ef961414",
  "idChecklists": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ],
  "idLabels": [
    {
      "id": "5abbe4b7ddc1b351ef961414",
      "idBoard": "5abbe4b7ddc1b351ef961414",
      "name": "Overdue",
      "color": "yellow"
    }
  ],
  "idList": "5abbe4b7ddc1b351ef961415",
  "idMembers": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idMembersVoted": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idShort": 0,
  "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
  "labels": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "locationName": "string",
  "manualCoverAttachment": false,
  "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
  "name": "👋 What? Why? How?",
  "pos": 65535,
  "shortLink": "H0TZyzbK",
  "shortUrl": "https://trello.com/c/H0TZyzbK",
  "subscribed": false,
  "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
  "cover": {
    "idAttachment": "5abbe4b7ddc1b351ef961414",
    "color": "yellow",
    "idUploadedBackground": true,
    "size": "normal",
    "brightness": "light",
    "isTemplate": false
  }
}
```

<h3 id="get-a-field-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Card](#schemacard)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Actions on a Card

<a id="opIdget-cards-id-actions"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/actions`

List the Actions on a Card. See [Nested Resources](/cloud/trello/guides/rest-api/nested-resources/) for more information.

<h3 id="get-actions-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|filter|query|string|false|A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).|
|page|query|number|false|The page of results for actions. Each page of results has 50 actions.|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "data": {
      "text": "Can never go wrong with bowie",
      "card": {
        "id": "5abbe4b7ddc1b351ef961414",
        "name": "Bowie",
        "idShort": 7,
        "shortLink": "3CsPkqOF"
      },
      "board": {
        "id": "5abbe4b7ddc1b351ef961414",
        "name": "Mullets",
        "shortLink": "3CsPkqOF"
      },
      "list": {
        "id": "5abbe4b7ddc1b351ef961414",
        "name": "Amazing"
      }
    },
    "type": "commentCard",
    "date": "2020-03-09T19:41:51.396Z",
    "limits": {
      "reactions": {
        "perAction": {
          "status": "ok",
          "disableAt": 1000,
          "warnAt": 900
        },
        "uniquePerAction": {
          "status": "ok",
          "disableAt": 1000,
          "warnAt": 900
        }
      }
    },
    "display": {
      "translationKey": "action_comment_on_card",
      "entities": {
        "contextOn": {
          "type": "translatable",
          "translationKey": "action_on",
          "hideIfContext": true,
          "idContext": "5abbe4b7ddc1b351ef961414"
        },
        "card": {
          "type": "card",
          "hideIfContext": true,
          "id": "5abbe4b7ddc1b351ef961414",
          "shortLink": "3CsPkqOF",
          "text": "Bowie"
        },
        "comment": {
          "type": "comment",
          "text": "Can never go wrong with bowie"
        },
        "memberCreator": {
          "type": "member",
          "id": "5abbe4b7ddc1b351ef961414",
          "username": "bobloblaw",
          "text": "Bob Loblaw (World)"
        }
      }
    },
    "memberCreator": {
      "id": "5b02e7f4e1facdc393169f9d",
      "activityBlocked": false,
      "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45",
      "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
      "fullName": "Bob Loblaw (Trello)",
      "idMemberReferrer": null,
      "initials": "BL",
      "username": "bobloblaw"
    }
  }
]
```

<h3 id="get-actions-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-actions-on-a-card-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Action](#schemaaction)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Attachments on a Card

<a id="opIdget-cards-id-attachments"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/attachments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/attachments`

List the attachments on a card

<h3 id="get-attachments-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|`all` or a comma-separated list of attachment [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|filter|query|string|false|Use `cover` to restrict to just the cover attachment|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

> Example responses

> 200 Response

```json
[
  {
    "id": "5bc79d4206526d2279c1e6ea",
    "bytes": null,
    "date": "2018-10-17T19:10:14.808Z",
    "edgeColor": null,
    "idMember": "5bc79d4206526d2279c1e6eb",
    "isUpload": false,
    "mimeType": "",
    "name": "Deprecation Extension Notice",
    "previews": [],
    "url": "https://admin.typeform.com/form/RzExEM/share#/link",
    "pos": 1638
  }
]
```

<h3 id="get-attachments-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-attachments-on-a-card-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Attachment](#schemaattachment)]|false|none|none|
|» *oneOf*|[Attachment](#schemaattachment)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Create Attachment On Card

<a id="opIdpost-cards-id-attachments"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/attachments \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/attachments`

Create an Attachment to a Card. See https://glitch.com/~trello-attachments-api for code examples. You may need to remix the project in order to view it.

<h3 id="create-attachment-on-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The name of the attachment. Max length 256.|
|file|query|string(binary)|false|The file to attach, as multipart/form-data|
|mimeType|query|string|false|The mimeType of the attachment. Max length 256|
|url|query|string|false|A URL to attach. Must start with `http://` or `https://`|
|setCover|query|boolean|false|Determines whether to use the new attachment as a cover for the Card.|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

> Example responses

> 200 Response

```json
[
  {
    "id": "5bc79d4206526d2279c1e6ea",
    "bytes": null,
    "date": "2018-10-17T19:10:14.808Z",
    "edgeColor": null,
    "idMember": "5bc79d4206526d2279c1e6eb",
    "isUpload": false,
    "mimeType": "",
    "name": "Deprecation Extension Notice",
    "previews": [],
    "url": "https://admin.typeform.com/form/RzExEM/share#/link",
    "pos": 1638
  }
]
```

<h3 id="create-attachment-on-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="create-attachment-on-card-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Attachment](#schemaattachment)]|false|none|none|
|» *oneOf*|[Attachment](#schemaattachment)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get an Attachment on a Card

<a id="opIdget-cards-id-attachments-idattachment"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/attachments/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/attachments/{idAttachment}`

Get a specific Attachment on a Card.

<h3 id="get-an-attachment-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|[[AttachmentFields](#schemaattachmentfields)]|false|The Attachment fields to be included in the response.|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idAttachment|path|[TrelloID](#schematrelloid)|true|The ID of the Attachment|

> Example responses

> 200 Response

```json
[
  {
    "id": "5bc79d4206526d2279c1e6ea",
    "bytes": null,
    "date": "2018-10-17T19:10:14.808Z",
    "edgeColor": null,
    "idMember": "5bc79d4206526d2279c1e6eb",
    "isUpload": false,
    "mimeType": "",
    "name": "Deprecation Extension Notice",
    "previews": [],
    "url": "https://admin.typeform.com/form/RzExEM/share#/link",
    "pos": 1638
  }
]
```

<h3 id="get-an-attachment-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-an-attachment-on-a-card-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Attachment](#schemaattachment)]|false|none|none|
|» *oneOf*|[Attachment](#schemaattachment)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Delete an Attachment on a Card

<a id="opIddeleted-cards-id-attachments-idattachment"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/attachments/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}/attachments/{idAttachment}`

Delete an Attachment

<h3 id="delete-an-attachment-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idAttachment|path|[TrelloID](#schematrelloid)|true|The ID of the attachment to delete|

<h3 id="delete-an-attachment-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get the Board the Card is on

<a id="opIdget-cards-id-board"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/board \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/board`

Get the board a card is on

<h3 id="get-the-board-the-card-is-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|fields|query|string|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)|

<h3 id="get-the-board-the-card-is-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get checkItems on a Card

<a id="opIdget-cards-id-checkitemstates"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/checkItemStates \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/checkItemStates`

Get the completed checklist items on a card

<h3 id="get-checkitems-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|fields|query|string|false|`all` or a comma-separated list of: `idCheckItem`, `state`|

<h3 id="get-checkitems-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Checklists on a Card

<a id="opIdget-cards-id-checklists"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/checklists \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/checklists`

Get the checklists on a card

<h3 id="get-checklists-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|checkItems|query|string|false|`all` or `none`|
|checkItem_fields|query|string|false|`all` or a comma-separated list of: `name,nameData,pos,state,type,due,dueReminder,idMember`|
|filter|query|string|false|`all` or `none`|
|fields|query|string|false|`all` or a comma-separated list of: `idBoard,idCard,name,pos`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|checkItems|all|
|checkItems|none|
|checkItem_fields|name|
|checkItem_fields|nameData|
|checkItem_fields|pos|
|checkItem_fields|state|
|checkItem_fields|type|
|checkItem_fields|due|
|checkItem_fields|dueReminder|
|checkItem_fields|idMember|
|filter|all|
|filter|none|
|fields|all|
|fields|name|
|fields|nameData|
|fields|pos|
|fields|state|
|fields|type|

<h3 id="get-checklists-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Create Checklist on a Card

<a id="opIdpost-cards-id-checklists"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/checklists \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/checklists`

Create a new checklist on a card

<h3 id="create-checklist-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|name|query|string|false|The name of the checklist|
|idChecklistSource|query|[TrelloID](#schematrelloid)|false|The ID of a source checklist to copy into the new one|
|pos|query|string|false|The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.|

<h3 id="create-checklist-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get checkItem on a Card

<a id="opIdget-cards-id-checkitem-idcheckitem"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/checkItem/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/checkItem/{idCheckItem}`

Get a specific checkItem on a card

<h3 id="get-checkitem-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|`all` or a comma-separated list of `name,nameData,pos,state,type,due,dueReminder,idMember`|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idCheckItem|path|[TrelloID](#schematrelloid)|true|The ID of the checkitem|

<h3 id="get-checkitem-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update a checkItem on a Card

<a id="opIdput-cards-id-checkitem-idcheckitem"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/checkItem/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cards/{id}/checkItem/{idCheckItem}`

Update an item in a checklist on a card.

<h3 id="update-a-checkitem-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The new name for the checklist item|
|state|query|string|false|One of: `complete`, `incomplete`|
|idChecklist|query|[TrelloID](#schematrelloid)|false|The ID of the checklist this item is in|
|pos|query|[posStringOrNumber](#schemaposstringornumber)|false|`top`, `bottom`, or a positive float|
|due|query|string(date)|false|A due date for the checkitem|
|dueReminder|query|number \| null|false|A dueReminder for the due date on the checkitem|
|idMember|query|[TrelloID](#schematrelloid)|false|The ID of the member to remove from the card|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idCheckItem|path|[TrelloID](#schematrelloid)|true|The ID of the checkitem|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|complete|
|state|incomplete|

<h3 id="update-a-checkitem-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Delete checkItem on a Card

<a id="opIddelete-cards-id-checkitem-idcheckitem"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/checkItem/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}/checkItem/{idCheckItem}`

Delete a checklist item

<h3 id="delete-checkitem-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idCheckItem|path|[TrelloID](#schematrelloid)|true|The ID of the checkitem|

<h3 id="delete-checkitem-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get the List of a Card

<a id="opIdget-cards-id-list"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/list \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/list`

Get the list a card is in

<h3 id="get-the-list-of-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|fields|query|string|false|`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)|

<h3 id="get-the-list-of-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get the Members of a Card

<a id="opIdget-cards-id-members"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/members \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/members`

Get the members on a card

<h3 id="get-the-members-of-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|fields|query|string|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|

<h3 id="get-the-members-of-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Members who have voted on a Card

<a id="opIdget-cards-id-membersvoted"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/membersVoted \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/membersVoted`

Get the members who have voted on a card

<h3 id="get-members-who-have-voted-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

<h3 id="get-members-who-have-voted-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Add Member vote to Card

<a id="opIdcardsidmembersvoted-1"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/membersVoted?value=5abbe4b7ddc1b351ef961414' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/membersVoted`

Vote on the card for a given member.

<h3 id="add-member-vote-to-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|query|[TrelloID](#schematrelloid)|true|The ID of the member to vote 'yes' on the card|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

<h3 id="add-member-vote-to-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get pluginData on a Card

<a id="opIdget-cards-id-plugindata"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/pluginData \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/pluginData`

Get any shared pluginData on a card.

<h3 id="get-plugindata-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

<h3 id="get-plugindata-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Stickers on a Card

<a id="opIdget-cards-id-stickers"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/stickers \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/stickers`

Get the stickers on a card

<h3 id="get-stickers-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|fields|query|string|false|`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)|

<h3 id="get-stickers-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Add a Sticker to a Card

<a id="opIdpost-cards-id-stickers"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/stickers?image=string&top=-60&left=-60&zIndex=0' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/stickers`

Add a sticker to a card

<h3 id="add-a-sticker-to-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|image|query|string|true|For custom stickers, the id of the sticker. For default stickers, the string identifier (like 'taco-cool', see below)|
|top|query|number(float)|true|The top position of the sticker, from -60 to 100|
|left|query|number(float)|true|The left position of the sticker, from -60 to 100|
|zIndex|query|integer|true|The z-index of the sticker|
|rotate|query|number(float)|false|The rotation of the sticker|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

<h3 id="add-a-sticker-to-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get a Sticker on a Card

<a id="opIdget-cards-id-stickers-idsticker"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/stickers/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/stickers/{idSticker}`

Get a specific sticker on a card

<h3 id="get-a-sticker-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|`all` or a comma-separated list of sticker [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idSticker|path|[TrelloID](#schematrelloid)|true|The ID of the sticker|

<h3 id="get-a-sticker-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update a Sticker on a Card

<a id="opIdput-cards-id-stickers-idsticker"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/stickers/5abbe4b7ddc1b351ef961414?top=-60&left=-60&zIndex=0' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cards/{id}/stickers/{idSticker}`

Update a sticker on a card

<h3 id="update-a-sticker-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|top|query|number(float)|true|The top position of the sticker, from -60 to 100|
|left|query|number(float)|true|The left position of the sticker, from -60 to 100|
|zIndex|query|integer|true|The z-index of the sticker|
|rotate|query|number(float)|false|The rotation of the sticker|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idSticker|path|[TrelloID](#schematrelloid)|true|The ID of the sticker|

<h3 id="update-a-sticker-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Delete a Sticker on a Card

<a id="opIddelete-cards-id-stickers-idsticker"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/stickers/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}/stickers/{idSticker}`

Remove a sticker from the card

<h3 id="delete-a-sticker-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idSticker|path|[TrelloID](#schematrelloid)|true|The ID of the sticker|

<h3 id="delete-a-sticker-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Update Comment Action on a Card

<a id="opIdput-cards-id-actions-idaction-comments"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/actions/5abbe4b7ddc1b351ef961414/comments?text=string' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cards/{id}/actions/{idAction}/comments`

Update an existing comment

<h3 id="update-comment-action-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|text|query|string|true|The new text for the comment|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idAction|path|[TrelloID](#schematrelloid)|true|The ID of the comment action to update|

<h3 id="update-comment-action-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Delete a comment on a Card

<a id="opIddelete-cards-id-actions-id-comments"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/actions/5abbe4b7ddc1b351ef961414/comments \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}/actions/{idAction}/comments`

Delete a comment

<h3 id="delete-a-comment-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idAction|path|[TrelloID](#schematrelloid)|true|The ID of the comment action to update|

<h3 id="delete-a-comment-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Update Custom Field item on Card

<a id="opIdput-cards-idcard-customfield-idcustomfield-item"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/customField/5abbe4b7ddc1b351ef961414/item \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "value": {
      "text": "string",
      "checked": true,
      "date": "2018-03-13T16:00:00.000Z",
      "number": "2154"
    }
  }'
```

`PUT /cards/{idCard}/customField/{idCustomField}/item`

Setting, updating, and removing the value for a Custom Field on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)

> Body parameter

```json
{
  "value": {
    "text": "string",
    "checked": true,
    "date": "2018-03-13T16:00:00.000Z",
    "number": "2154"
  }
}
```

<h3 id="update-custom-field-item-on-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|[TrelloID](#schematrelloid)|true|ID of the card that the Custom Field value should be set/updated for|
|idCustomField|path|[TrelloID](#schematrelloid)|true|ID of the Custom Field on the card.|
|body|body|object|false|none|
|» *oneOf*|body|object|false|none|
|» value|body|object|false|An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined.|
|» » text|body|string|false|none|
|» » checked|body|boolean|false|none|
|» » date|body|string(date-time)|false|none|
|» » number|body|string|false|none|
|» *oneOf*|body|object|false|none|
|» idValue|body|[TrelloID](#schematrelloid)|false|The ID of the option for the list type Custom Field|

<h3 id="update-custom-field-item-on-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Update Multiple Custom Field items on Card

<a id="opIdput-cards-idcard-customfields"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/cards/{idCard}/customFields' \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "customFieldItems": [
      {
        "idCustomField": "5abbe4b7ddc1b351ef961414",
        "value": {
          "text": "string",
          "checked": true,
          "date": "2018-03-13T16:00:00.000Z",
          "number": "2154"
        },
        "idValue": "5abbe4b7ddc1b351ef961414"
      }
    ]
  }'
```

`PUT /cards/{idCard}/customFields`

Setting, updating, and removing the values for multiple Custom Fields on a card. For more details on updating custom fields check out the [Getting Started With Custom Fields](/cloud/trello/guides/rest-api/getting-started-with-custom-fields/)

> Body parameter

```json
{
  "customFieldItems": [
    {
      "idCustomField": "5abbe4b7ddc1b351ef961414",
      "value": {
        "text": "string",
        "checked": true,
        "date": "2018-03-13T16:00:00.000Z",
        "number": "2154"
      },
      "idValue": "5abbe4b7ddc1b351ef961414"
    }
  ]
}
```

<h3 id="update-multiple-custom-field-items-on-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» customFieldItems|body|[object]|false|An array of objects containing the custom field ID, key and value, and ID of list type option.|
|» » idCustomField|body|object|false|The ID of the Custom Field|
|» » value|body|object|false|An object containing the key and value to set for the card's Custom Field value. The key used to set the value should match the type of Custom Field defined. This is optional if Custom Field is list type.|
|» » » text|body|string|false|none|
|» » » checked|body|boolean|false|none|
|» » » date|body|string(date-time)|false|none|
|» » » number|body|string|false|none|
|» » idValue|body|object|false|The ID of the option for the list type Custom Field. This is optional if Custom Field is not list type.|

<h3 id="update-multiple-custom-field-items-on-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get Custom Field Items for a Card

<a id="opIdget-cards-id-customfielditems"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/customFieldItems \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /cards/{id}/customFieldItems`

Get the custom field items for a card.

<h3 id="get-custom-field-items-for-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "value": {
      "checked": "true"
    },
    "idCustomField": "5b080fd8017bd1653b5480fa",
    "idModel": "5b080ff194611b41aaaa9570",
    "modelType": "card"
  }
]
```

<h3 id="get-custom-field-items-for-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-custom-field-items-for-a-card-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomFieldItems](#schemacustomfielditems)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Add a new comment to a Card

<a id="opIdpost-cards-id-actions-comments"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/actions/comments?text=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/actions/comments`

Add a new comment to a card

<h3 id="add-a-new-comment-to-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|text|query|string|true|The comment|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "idMemberCreator": "5abbe4b7ddc1b351ef961414",
  "data": {
    "text": "Can never go wrong with bowie",
    "card": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Bowie",
      "idShort": 7,
      "shortLink": "3CsPkqOF"
    },
    "board": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Mullets",
      "shortLink": "3CsPkqOF"
    },
    "list": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Amazing"
    }
  },
  "type": "commentCard",
  "date": "2020-03-09T19:41:51.396Z",
  "limits": {
    "reactions": {
      "perAction": {
        "status": "ok",
        "disableAt": 1000,
        "warnAt": 900
      },
      "uniquePerAction": {
        "status": "ok",
        "disableAt": 1000,
        "warnAt": 900
      }
    }
  },
  "display": {
    "translationKey": "action_comment_on_card",
    "entities": {
      "contextOn": {
        "type": "translatable",
        "translationKey": "action_on",
        "hideIfContext": true,
        "idContext": "5abbe4b7ddc1b351ef961414"
      },
      "card": {
        "type": "card",
        "hideIfContext": true,
        "id": "5abbe4b7ddc1b351ef961414",
        "shortLink": "3CsPkqOF",
        "text": "Bowie"
      },
      "comment": {
        "type": "comment",
        "text": "Can never go wrong with bowie"
      },
      "memberCreator": {
        "type": "member",
        "id": "5abbe4b7ddc1b351ef961414",
        "username": "bobloblaw",
        "text": "Bob Loblaw (World)"
      }
    }
  },
  "memberCreator": {
    "id": "5b02e7f4e1facdc393169f9d",
    "activityBlocked": false,
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "fullName": "Bob Loblaw (Trello)",
    "idMemberReferrer": null,
    "initials": "BL",
    "username": "bobloblaw"
  }
}
```

<h3 id="add-a-new-comment-to-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Action](#schemaaction)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Add a Label to a Card

<a id="opIdpost-cards-id-idlabels"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/idLabels \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/idLabels`

Add a label to a card

<h3 id="add-a-label-to-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|value|query|[TrelloID](#schematrelloid)|false|The ID of the label to add|

<h3 id="add-a-label-to-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Add a Member to a Card

<a id="opIdpost-cards-id-idmembers"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/idMembers \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/idMembers`

Add a member to a card

<h3 id="add-a-member-to-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|value|query|[TrelloID](#schematrelloid)|false|The ID of the Member to add to the card|

<h3 id="add-a-member-to-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Create a new Label on a Card

<a id="opIdpost-cards-id-labels"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/labels?color=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/labels`

Create a new label for the board and add it to the given card.

<h3 id="create-a-new-label-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|color|query|string|true|A valid label color or `null`. See [labels](/cloud/trello/guides/rest-api/object-definitions/)|
|name|query|string|false|A name for the label|

<h3 id="create-a-new-label-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Mark a Card's Notifications as read

<a id="opIdpost-cards-id-markassociatednotificationsread"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/markAssociatedNotificationsRead \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /cards/{id}/markAssociatedNotificationsRead`

Mark notifications about this card as read

<h3 id="mark-a-cards-notifications-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|

<h3 id="mark-a-cards-notifications-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Remove a Label from a Card

<a id="opIddelete-cards-id-idlabels-idlabel"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/idLabels/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}/idLabels/{idLabel}`

Remove a label from a card

<h3 id="remove-a-label-from-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idLabel|path|[TrelloID](#schematrelloid)|true|The ID of the label to remove|

<h3 id="remove-a-label-from-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Remove a Member from a Card

<a id="opIddelete-id-idmembers-idmember"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/idMembers/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}/idMembers/{idMember}`

Remove a member from a card

<h3 id="remove-a-member-from-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idMember|path|[TrelloID](#schematrelloid)|true|The ID of the member to remove from the card|

<h3 id="remove-a-member-from-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Remove a Member's Vote on a Card

<a id="opIddelete-cards-id-membersvoted-idmember"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/membersVoted/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}/membersVoted/{idMember}`

Remove a member's vote from a card

<h3 id="remove-a-members-vote-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idMember|path|[TrelloID](#schematrelloid)|true|The ID of the member whose vote to remove|

<h3 id="remove-a-members-vote-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Update Checkitem on Checklist on Card

<a id="opIdput-cards-idcard-checklist-idchecklist-checkitem-idcheckitem"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/checklist/5abbe4b7ddc1b351ef961414/checkItem/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}`

Update an item in a checklist on a card.

<h3 id="update-checkitem-on-checklist-on-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idCheckItem|path|[TrelloID](#schematrelloid)|true|The ID of the checklist item to update|
|pos|query|[posStringOrNumber](#schemaposstringornumber)|false|`top`, `bottom`, or a positive float|
|idChecklist|path|[TrelloID](#schematrelloid)|true|The ID of the item to update.|

> Example responses

> 200 Response

```json
{
  "idChecklist": "5dc9b507756e182c76007621",
  "state": "incomplete",
  "id": "5dc9b509f02f4314edc4303a",
  "name": "string",
  "nameData": null,
  "pos": 1673
}
```

<h3 id="update-checkitem-on-checklist-on-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CheckItem](#schemacheckitem)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Delete a Checklist on a Card

<a id="opIddelete-cards-id-checklists-idchecklist"></a>

> Code samples

```bash
curl https://api.trello.com/1/cards/5abbe4b7ddc1b351ef961414/checklists/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /cards/{id}/checklists/{idChecklist}`

Delete a checklist from a card

<h3 id="delete-a-checklist-on-a-card-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Card|
|idChecklist|path|[TrelloID](#schematrelloid)|true|The ID of the checklist to delete|

<h3 id="delete-a-checklist-on-a-card-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Create a Checklist

<a id="opIdpost-checklists"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/checklists?idCard=5abbe4b7ddc1b351ef961414' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /checklists`

<h3 id="create-a-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idCard|query|[TrelloID](#schematrelloid)|true|The ID of the Card that the checklist should be added to.|
|name|query|string|false|The name of the checklist. Should be a string of length 1 to 16384.|
|pos|query|[posStringOrNumber](#schemaposstringornumber)|false|The position of the checklist on the card. One of: `top`, `bottom`, or a positive number.|
|idChecklistSource|query|[TrelloID](#schematrelloid)|false|The ID of a checklist to copy into the new checklist.|

<h3 id="create-a-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get a Checklist

<a id="opIdget-checklists-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /checklists/{id}`

<h3 id="get-a-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|cards|query|string|false|Valid values: `all`, `closed`, `none`, `open`, `visible`. Cards is a nested resource. The additional query params available are documented at [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource).|
|checkItems|query|string|false|The check items on the list to return. One of: `all`, `none`.|
|checkItem_fields|query|string|false|The fields on the checkItem to return if checkItems are being returned. `all` or a comma-separated list of: `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`|
|fields|query|string|false|`all` or a comma-separated list of checklist [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|cards|all|
|cards|closed|
|cards|none|
|cards|open|
|cards|visible|
|checkItems|all|
|checkItems|none|
|checkItem_fields|all|
|checkItem_fields|name|
|checkItem_fields|nameData|
|checkItem_fields|pos|
|checkItem_fields|state|
|checkItem_fields|type|
|checkItem_fields|due|
|checkItem_fields|dueReminder|
|checkItem_fields|idMember|

<h3 id="get-a-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update a Checklist

<a id="opIdput-checlists-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /checklists/{id}`

Update an existing checklist.

<h3 id="update-a-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Name of the new checklist being created. Should be length of 1 to 16384.|
|pos|query|[posStringOrNumber](#schemaposstringornumber)|false|Determines the position of the checklist on the card. One of: `top`, `bottom`, or a positive number.|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|

<h3 id="update-a-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Delete a Checklist

<a id="opIddelete-checklists-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /checklists/{id}`

Delete a checklist

<h3 id="delete-a-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|

<h3 id="delete-a-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get field on a Checklist

<a id="opIdget-checklists-id-field"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414/name \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /checklists/{id}/{field}`

<h3 id="get-field-on-a-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|
|field|path|string|true|Field to update.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|name|
|field|pos|

<h3 id="get-field-on-a-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update field on a Checklist

<a id="opIdput-checklists-id-field"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414/name?value=top' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /checklists/{id}/{field}`

<h3 id="update-field-on-a-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|value|query|[posStringOrNumber](#schemaposstringornumber) \| [TrelloID](#schematrelloid)|true|The value to change the checklist name to. Should be a string of length 1 to 16384.|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|
|field|path|string|true|Field to update.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|name|
|field|pos|

<h3 id="update-field-on-a-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Get the Board the Checklist is on

<a id="opIdget-checklists-id-board"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414/board \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /checklists/{id}/board`

<h3 id="get-the-board-the-checklist-is-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|
|fields|query|string|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|all|
|fields|name|

<h3 id="get-the-board-the-checklist-is-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get the Card a Checklist is on

<a id="opIdget-checklists-id-cards"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414/cards \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /checklists/{id}/cards`

<h3 id="get-the-card-a-checklist-is-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|

<h3 id="get-the-card-a-checklist-is-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Checkitems on a Checklist

<a id="opIdget-checklists-id-checkitems"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414/checkItems \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /checklists/{id}/checkItems`

<h3 id="get-checkitems-on-a-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|One of: `all`, `none`.|
|fields|query|string|false|One of: `all`, `name`, `nameData`, `pos`, `state`,`type`, `due`, `dueReminder`, `idMember`.|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|none|
|fields|all|
|fields|name|
|fields|nameData|
|fields|pos|
|fields|state|
|fields|type|
|fields|due|
|fields|dueReminder|
|fields|idMember|

<h3 id="get-checkitems-on-a-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Create Checkitem on Checklist

<a id="opIdpost-checklists-id-checkitems"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414/checkItems?name=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /checklists/{id}/checkItems`

<h3 id="create-checkitem-on-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name of the new check item on the checklist. Should be a string of length 1 to 16384.|
|pos|query|[posStringOrNumber](#schemaposstringornumber)|false|The position of the check item in the checklist. One of: `top`, `bottom`, or a positive number.|
|checked|query|boolean|false|Determines whether the check item is already checked when created.|
|due|query|string(date)|false|A due date for the checkitem|
|dueReminder|query|number \| null|false|A dueReminder for the due date on the checkitem|
|idMember|query|[TrelloID](#schematrelloid)|false|An ID of a member resource.|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|

<h3 id="create-checkitem-on-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get a Checkitem on a Checklist

<a id="opIdget-checklists-id-checkitems-idcheckitem"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414/checkItems/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /checklists/{id}/checkItems/{idCheckItem}`

<h3 id="get-a-checkitem-on-a-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|One of: `all`, `name`, `nameData`, `pos`, `state`, `type`, `due`, `dueReminder`, `idMember`,.|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|
|idCheckItem|path|[TrelloID](#schematrelloid)|true|ID of the check item to retrieve.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|all|
|fields|name|
|fields|nameData|
|fields|pos|
|fields|state|
|fields|type|
|fields|due|
|fields|dueReminder|
|fields|idMember|

<h3 id="get-a-checkitem-on-a-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Delete Checkitem from Checklist

<a id="opIddelete-checklists-id-checkitems-idcheckitem"></a>

> Code samples

```bash
curl https://api.trello.com/1/checklists/5abbe4b7ddc1b351ef961414/checkItems/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /checklists/{id}/checkItems/{idCheckItem}`

Remove an item from a checklist

<h3 id="delete-checkitem-from-checklist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of a checklist.|
|idCheckItem|path|[TrelloID](#schematrelloid)|true|ID of the check item to retrieve.|

<h3 id="delete-checkitem-from-checklist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Create a new Custom Field on a Board

<a id="opIdpost-customfields"></a>

> Code samples

```bash
curl https://api.trello.com/1/customFields \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "idModel": "5abbe4b7ddc1b351ef961414",
    "modelType": "board",
    "name": "string",
    "type": "checkbox",
    "options": "string",
    "pos": "top",
    "display_cardFront": true
  }'
```

`POST /customFields`

Create a new Custom Field on a board.

> Body parameter

```json
{
  "idModel": "5abbe4b7ddc1b351ef961414",
  "modelType": "board",
  "name": "string",
  "type": "checkbox",
  "options": "string",
  "pos": "top",
  "display_cardFront": true
}
```

<h3 id="create-a-new-custom-field-on-a-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» idModel|body|[TrelloID](#schematrelloid)|true|The ID of the model for which the Custom Field is being defined. This should always be the ID of a board.|
|» modelType|body|string|true|The type of model that the Custom Field is being defined on. This should always be `board`.|
|» name|body|string|true|The name of the Custom Field|
|» type|body|string|true|The type of Custom Field to create.|
|» options|body|string|false|If the type is `checkbox` |
|» pos|body|[posStringOrNumber](#schemaposstringornumber)|true|none|
|» display_cardFront|body|boolean|false|Whether this Custom Field should be shown on the front of Cards|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» modelType|board|
|» type|checkbox|
|» type|list|
|» type|number|
|» type|text|
|» type|date|

> Example responses

> 200 Response

```json
{
  "id": "5ab10be237846c43015f108e",
  "idModel": "586e8f681d4fe9b06a928307",
  "modelType": "board",
  "fieldGroup": "f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955",
  "display": {
    "cardFront": true,
    "name": "Priority 🏔",
    "pos": "98304,",
    "options": [
      {
        "id": "5ab10be237846c43015f1091",
        "idCustomField": "5ab10be237846c43015f108e",
        "value": {
          "text": "High"
        },
        "color": "red",
        "pos": 16384
      }
    ]
  },
  "type": "list"
}
```

<h3 id="create-a-new-custom-field-on-a-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomField](#schemacustomfield)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get a Custom Field

<a id="opIdget-customfields-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/customFields/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /customFields/{id}`

<h3 id="get-a-custom-field-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Custom Field.|

> Example responses

> 200 Response

```json
{
  "id": "5ab10be237846c43015f108e",
  "idModel": "586e8f681d4fe9b06a928307",
  "modelType": "board",
  "fieldGroup": "f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955",
  "display": {
    "cardFront": true,
    "name": "Priority 🏔",
    "pos": "98304,",
    "options": [
      {
        "id": "5ab10be237846c43015f1091",
        "idCustomField": "5ab10be237846c43015f108e",
        "value": {
          "text": "High"
        },
        "color": "red",
        "pos": 16384
      }
    ]
  },
  "type": "list"
}
```

<h3 id="get-a-custom-field-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomField](#schemacustomfield)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update a Custom Field definition

<a id="opIdput-customfields-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/customFields/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "string",
    "pos": "top",
    "display/cardFront": true
  }'
```

`PUT /customFields/{id}`

Update a Custom Field definition.

> Body parameter

```json
{
  "name": "string",
  "pos": "top",
  "display/cardFront": true
}
```

<h3 id="update-a-custom-field-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Custom Field.|
|body|body|object|false|none|
|» name|body|string|false|The name of the Custom Field|
|» pos|body|[posStringOrNumber](#schemaposstringornumber)|false|none|
|» display/cardFront|body|boolean|false|Whether to display this custom field on the front of cards|

> Example responses

> 200 Response

```json
{
  "id": "5ab10be237846c43015f108e",
  "idModel": "586e8f681d4fe9b06a928307",
  "modelType": "board",
  "fieldGroup": "f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955",
  "display": {
    "cardFront": true,
    "name": "Priority 🏔",
    "pos": "98304,",
    "options": [
      {
        "id": "5ab10be237846c43015f1091",
        "idCustomField": "5ab10be237846c43015f108e",
        "value": {
          "text": "High"
        },
        "color": "red",
        "pos": 16384
      }
    ]
  },
  "type": "list"
}
```

<h3 id="update-a-custom-field-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomField](#schemacustomfield)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Delete a Custom Field definition

<a id="opIddelete-customfields-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/customFields/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /customFields/{id}`

Delete a Custom Field from a board.

<h3 id="delete-a-custom-field-definition-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Custom Field.|

<h3 id="delete-a-custom-field-definition-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get Options of Custom Field drop down

<a id="opIdpost-customfields-id-options"></a>

> Code samples

```bash
curl https://api.trello.com/1/customFields/5abbe4b7ddc1b351ef961414/options \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /customFields/{id}/options`

Get the options of a drop down Custom Field

<h3 id="get-options-of-custom-field-drop-down-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the customfield.|

<h3 id="get-options-of-custom-field-drop-down-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Add Option to Custom Field dropdown

<a id="opIdget-customfields-id-options"></a>

> Code samples

```bash
curl https://api.trello.com/1/customFields/5abbe4b7ddc1b351ef961414/options \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /customFields/{id}/options`

Add an option to a dropdown Custom Field

<h3 id="add-option-to-custom-field-dropdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the customfield.|

<h3 id="add-option-to-custom-field-dropdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get Option of Custom Field dropdown

<a id="opIdget-customfields-options-idcustomfieldoption"></a>

> Code samples

```bash
curl https://api.trello.com/1/customFields/5abbe4b7ddc1b351ef961414/options/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /customFields/{id}/options/{idCustomFieldOption}`

Retrieve a specific, existing Option on a given dropdown-type Custom Field

<h3 id="get-option-of-custom-field-dropdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the customfielditem.|
|idCustomFieldOption|path|[TrelloID](#schematrelloid)|true|ID of the customfieldoption to retrieve.|

<h3 id="get-option-of-custom-field-dropdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Delete Option of Custom Field dropdown

<a id="opIddelete-customfields-options-idcustomfieldoption"></a>

> Code samples

```bash
curl https://api.trello.com/1/customFields/5abbe4b7ddc1b351ef961414/options/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /customFields/{id}/options/{idCustomFieldOption}`

Delete an option from a Custom Field dropdown.

<h3 id="delete-option-of-custom-field-dropdown-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the customfielditem.|
|idCustomFieldOption|path|[TrelloID](#schematrelloid)|true|ID of the customfieldoption to retrieve.|

<h3 id="delete-option-of-custom-field-dropdown-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## List available Emoji

<a id="opIdemoji"></a>

> Code samples

```bash
curl https://api.trello.com/1/emoji \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /emoji`

List available Emoji

<h3 id="list-available-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|locale|query|string|false|The locale to return emoji descriptions and names in. Defaults to the logged in member's locale.|
|spritesheets|query|boolean|false|`true` to return spritesheet URLs in the response|

> Example responses

> 200 Response

```json
{
  "trello": [
    {
      "unified": "1F600",
      "name": "GRINNING FACE",
      "native": "😀",
      "shortName": "grinning",
      "shortNames": [
        "grinning\""
      ],
      "text": ":)",
      "texts": null,
      "category": "Smileys & People",
      "sheetX": 30,
      "sheetY": 24,
      "tts": "grinning face",
      "keywords": [
        "face"
      ]
    }
  ]
}
```

<h3 id="list-available-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Emoji](#schemaemoji)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get an Enterprise

<a id="opIdget-enterprises-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}`

Get an enterprise by its ID.

<h3 id="get-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|fields|query|string|false|Comma-separated list of: `id`, `name`, `displayName`, `prefs`, `ssoActivationFailed`, `idAdmins`, `idMembers` (Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.), `idOrganizations`, `products`, `userTypes`, `idMembers`, `idOrganizations`|
|members|query|string|false|One of: `none`, `normal`, `admins`, `owners`, `all`|
|member_fields|query|string|false|One of: `avatarHash`, `fullName`, `initials`, `username`|
|member_filter|query|string|false|Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the member_* args are set, the member array will be paginated.|
|member_sort|query|string|false|This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.|
|member_sortBy|query|string|false|Deprecated: Please use member_sort. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is `normal` or `admins`. Pagination can be controlled with `member_startIndex`, etc, and the API response's header will contain the total count and pagination state.|
|member_sortOrder|query|string|false|Deprecated: Please use member_sort. One of: `ascending`, `descending`, `asc`, `desc`|
|member_startIndex|query|integer(int32)|false|Any integer between 0 and 100.|
|member_count|query|integer(int32)|false|0 to 100|
|organizations|query|string|false|One of: `none`, `members`, `public`, `all`|
|organization_fields|query|string|false|Any valid value that the [nested organization field resource]() accepts.|
|organization_paid_accounts|query|boolean|false|Whether or not to include paid account information in the returned workspace objects|
|organization_memberships|query|string|false|Comma-seperated list of: `me`, `normal`, `admin`, `active`, `deactivated`|

> Example responses

> 200 Response

```json
{
  "id": "59c15d19566e197b23665901",
  "name": "bentley_test",
  "displayName": "Bentley's Test Enterprise!",
  "logoHash": null,
  "logoUrl": null,
  "prefs": {
    "ssoOnly": false,
    "signup": {
      "banner": "string",
      "bannerHtml": "<p>Hello</p>\n"
    },
    "mandatoryTransferDate": null,
    "brandingColor": "string",
    "autoJoinOrganizations": false,
    "notifications": {},
    "maxMembers": null
  },
  "organizationPrefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "ssoActivationFailed": true,
  "idAdmins": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "enterpriseDomains": [
    "http://example.com"
  ],
  "isRealEnterprise": true,
  "pluginWhitelistingEnabled": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "products": [
    0
  ],
  "licenses": {
    "maxMembers": null,
    "totalMembers": 5,
    "relatedEnterprises": [
      {
        "name": "enterprise_name",
        "displayName": "My Test Enterprise!",
        "count": 5
      }
    ]
  },
  "domains": [
    "http://example.com"
  ],
  "dateOrganizationPrefsLastUpdated": "2019-08-22T18:15:53.546Z",
  "idp": {
    "requestSigned": false,
    "certificate": null,
    "loginUrl": null
  }
}
```

<h3 id="get-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Enterprise](#schemaenterprise)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:enterprise:trello )
</aside>

## Get auditlog data for an Enterprise

<a id="opIdget-enterprises-id-auditlog"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/auditlog \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/auditlog`

Returns an array of Actions related to the Enterprise object. Used for populating data sent to Google Sheets from an Enterprise's audit log page: https://trello.com/e/{enterprise_name}/admin/auditlog. An Enterprise admin token is required for this route. 

 NOTE: For enterprises that have opted in to user management via AdminHub, the auditlog will will contain actions taken in AdminHub, but may not contain the source for those actions.

<h3 id="get-auditlog-data-for-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|

> Example responses

> 200 Response

```json
[
  {
    "idAction": "5dced8665015383ed5ca248c",
    "type": "addOrganizationToEnterprise",
    "date": "2018-04-26T17:03:25.155Z",
    "memberCreator": {
      "id": "5bc79d4206526d2279c1e6ea",
      "username": "bobloblaw",
      "fullName": "Bob Loblaw (Trello)"
    },
    "organization": {
      "enterpriseJoinRequest": {
        "idEnterprise": "617ac9070293e6612650e0ca",
        "idMember": "5bc79d4206526d2279c1e6ea",
        "date": "2018-04-26T17:03:25.155Z"
      },
      "id": "617ac9070293e6612650e0ca",
      "name": "organization name"
    },
    "member": {
      "id": "5bc79d4206526d2279c1e6ea",
      "username": "bentleycook",
      "fullName": "Bentley Cook"
    }
  }
]
```

<h3 id="get-auditlog-data-for-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-auditlog-data-for-an-enterprise-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[EnterpriseAuditLog](#schemaenterpriseauditlog)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:enterprise:trello )
</aside>

## Get Enterprise admin Members

<a id="opIdget-enterprises-id-admins"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/admins \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/admins`

Get an enterprise's admin members.

<h3 id="get-enterprise-admin-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|fields|query|string|false|Any valid value that the [nested member field resource]() accepts.|

> Example responses

> 200 Response

```json
{
  "id": "5dced8665015383ed5ca248c",
  "fullName": "Bob Loblaw",
  "username": "bobloblaw"
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-enterprise-admin-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[EnterpriseAdmin](#schemaenterpriseadmin)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:enterprise:trello )
</aside>

## Get signupUrl for Enterprise

<a id="opIdget-enterprises-id-signupurl"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/signupUrl \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/signupUrl`

Get the signup URL for an enterprise.

<h3 id="get-signupurl-for-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|authenticate|query|boolean|false|none|
|confirmationAccepted|query|boolean|false|none|
|returnUrl|query|string(url) \| null|false|Any valid URL.|
|tosAccepted|query|boolean|false|Designates whether the user has seen/consented to the Trello ToS prior to being redirected to the enterprise signup page/their IdP.|

> Example responses

> 200 Response

```json
{
  "signupUrl": "string"
}
```

<h3 id="get-signupurl-for-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-signupurl-for-enterprise-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|signupUrl|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Users of an Enterprise

<a id="opIdget-users-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/members/query \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/members/query`

Get an enterprise's users. You can choose to retrieve licensed members, board guests, etc. The response is paginated and will return 100 users at a time.

<h3 id="get-users-of-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|licensed|query|boolean|false|When true, returns members who possess a license for the corresponding Trello Enterprise; when false, returns members who do not. If unspecified, both licensed and unlicensed members will be returned.|
|deactivated|query|boolean|false|When true, returns members who have been deactivated for the corresponding Trello Enterprise; when false, returns members who have not. If unspecified, both active and deactivated members will be returned.|
|collaborator|query|boolean|false|When true, returns members who are guests on one or more boards in the corresponding Trello Enterprise (but do not possess a license); when false, returns members who are not. If unspecified, both guests and non-guests will be returned.|
|managed|query|boolean|false|When true, returns members who are managed by the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both managed and unmanaged members will be returned.|
|admin|query|boolean|false|When true, returns members who are administrators of the corresponding Trello Enterprise; when false, returns members who are not. If unspecified, both admin and non-admin members will be returned.|
|activeSince|query|string|false|Returns only Trello users active since this date (inclusive).|
|inactiveSince|query|string|false|Returns only Trello users active since this date (inclusive).|
|search|query|string|false|Returns members with email address or full name that start with the search value.|
|cursor|query|string|false|Cursor to return next set of results, use cursor returned in the response to query the next batch.|

> Example responses

> 200 Response

```json
[
  {
    "managed": true,
    "licensed": true,
    "admin": true,
    "deactivated": true,
    "collaborator": true,
    "member": {
      "id": "646e92a0a016198d3cf81e8a",
      "fullname": "Lex Math",
      "username": "amath",
      "dateLastImpression": "2023-05-24T22:41:36.406Z",
      "email": "amath@trello.com",
      "initials": "AM",
      "avatarURL": "trello.com/avatarURL",
      "memberType": "Admin",
      "confirmed": true
    }
  }
]
```

<h3 id="get-users-of-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-users-of-an-enterprise-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Membership](#schemamembership)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Members of Enterprise

<a id="opIdget-enterprises-id-members"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/members`

Get the members of an enterprise.

<h3 id="get-members-of-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Enterprise to retrieve.|
|fields|query|string|false|A comma-seperated list of valid [member fields](/cloud/trello/guides/rest-api/object-definitions/#member-object).|
|filter|query|string \| null|false|Pass a SCIM-style query to filter members. This takes precedence over the all/normal/admins value of members. If any of the below member_* args are set, the member array will be paginated.|
|sort|query|string|false|This parameter expects a SCIM-style sorting value prefixed by a `-` to sort descending. If no `-` is prefixed, it will be sorted ascending. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.|
|sortBy|query|string|false|Deprecated: Please use `sort` instead. This parameter expects a SCIM-style sorting value. Note that the members array returned will be paginated if `members` is 'normal' or 'admins'. Pagination can be controlled with member_startIndex, etc, but the API response will not contain the total available result count or pagination status data.|
|sortOrder|query|string \| null|false|Deprecated: Please use `sort` instead. One of: `ascending`, `descending`, `asc`, `desc`.|
|startIndex|query|integer(int32)|false|Any integer between 0 and 9999.|
|count|query|string|false|SCIM-style filter.|
|organization_fields|query|string|false|Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.|
|board_fields|query|string|false|Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sortOrder|ascending|
|sortOrder|descending|
|sortOrder|asc|
|sortOrder|desc|
|sortOrder|null|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "activityBlocked": false,
    "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
    "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
    "bio": "👋 I'm a developer advocate at Trello!",
    "bioData": {
      "emoji": {}
    },
    "confirmed": true,
    "fullName": "Bentley Cook",
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "idEnterprisesDeactivated": [
      "string"
    ],
    "idMemberReferrer": null,
    "idPremOrgsAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "initials": "BC",
    "memberType": "normal",
    "nonPublic": {
      "fullName": "Bentley Cook",
      "initials": "BC",
      "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
      "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
    },
    "nonPublicAvailable": false,
    "products": [
      0
    ],
    "url": "https://trello.com/bentleycook",
    "username": "bentleycook",
    "status": "disconnected",
    "aaEmail": null,
    "aaEnrolledDate": null,
    "aaId": null,
    "avatarSource": "gravatar",
    "email": "bcook@atlassian.com",
    "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idOrganizations": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idEnterprisesAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "status": "ok",
      "disableAt": 36000,
      "warnAt": 32400
    },
    "loginTypes": [
      "password"
    ],
    "marketingOptIn": {
      "optedIn": false,
      "date": "2018-04-26T17:03:25.155Z"
    },
    "messagesDismissed": {
      "name": "ad-security-features",
      "count": 4,
      "lastDismissed": "2019-03-11T20:19:46.809Z",
      "_id": "5995d44573d197eada632a32"
    },
    "oneTimeMessagesDismissed": [
      "string"
    ],
    "prefs": {
      "timezoneInfo": {
        "offsetCurrent": 360,
        "timezoneCurrent": "CST",
        "offsetNext": 300,
        "dateNext": "2020-03-08T08:00:00.000Z",
        "timezoneNext": "CDT"
      },
      "privacy": {
        "fullName": "public",
        "avatar": "public"
      },
      "sendSummaries": true,
      "minutesBetweenSummaries": 60,
      "minutesBeforeDeadlineToNotify": 1440,
      "colorBlind": true,
      "locale": "en-AU",
      "timezone": "America/Chicago",
      "twoFactor": {
        "enabled": true,
        "needsNewBackups": false
      }
    },
    "trophies": [
      "string"
    ],
    "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
    "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
    "premiumFeatures": [
      "string"
    ],
    "isAaMastered": false,
    "ixUpdate": "48427",
    "idBoardsPinned": [
      "5abbe4b7ddc1b351ef961414"
    ]
  }
]
```

<h3 id="get-members-of-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-members-of-enterprise-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Member](#schemamember)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:enterprise:trello )
</aside>

## Get a Member of Enterprise

<a id="opIdget-enterprises-id-members-idmember"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/members/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/members/{idMember}`

Get a specific member of an enterprise by ID.

<h3 id="get-a-member-of-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|idMember|path|[TrelloID](#schematrelloid)|true|An ID of a member resource.|
|fields|query|string|false|A comma separated list of any valid values that the [nested member field resource]() accepts.|
|organization_fields|query|string|false|Any valid value that the [nested organization field resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.|
|board_fields|query|string|false|Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-member-of-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Member](#schemamember)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:enterprise:trello )
</aside>

## Get whether an organization can be transferred to an enterprise.

<a id="opIdget-enterprises-id-transferrable-organization-idOrganization"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/transferrable/organization/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/transferrable/organization/{idOrganization}`

Get whether an organization can be transferred to an enterprise.

<h3 id="get-whether-an-organization-can-be-transferred-to-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Enterprise to retrieve.|
|idOrganization|path|[TrelloID](#schematrelloid)|true|An ID of an Organization resource.|

> Example responses

> 200 Response

```json
{
  "transferrable": true,
  "newBillableMembers": [
    {
      "id": "5ab10be237846c43015f1091",
      "fullName": "Bob Loblaw",
      "username": "bobloblaw",
      "initials": "BL",
      "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
    }
  ],
  "restrictedMembers": [
    {
      "id": "5ab10be237846c43015f1091",
      "fullName": "Bob Loblaw",
      "username": "bobloblaw",
      "initials": "BL",
      "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
    }
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-whether-an-organization-can-be-transferred-to-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[TransferrableOrganization](#schematransferrableorganization)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:enterprise:trello )
</aside>

## Get a bulk list of organizations that can be transferred to an enterprise.

<a id="opIdget-enterprises-id-transferrable-bulk-idOrganizations"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/transferrable/bulk/%7B%22id%22%3A%225abbe4b7ddc1b351ef961414%22%2C%22name%22%3A%22string%22%2C%22displayName%22%3A%22Organization%20Name%22%2C%22dateLastActivity%22%3A%222018-10-17T19%3A10%3A14.808Z%22%2C%22prefs%22%3A%7B%22boardVisibilityRestrict%22%3A%7B%7D%2C%22boardDeleteRestrict%22%3A%7B%7D%2C%22attachmentRestrictions%22%3A%5B%22computer%22%5D%2C%22permissionLevel%22%3A%22private%22%7D%2C%22idEnterprise%22%3A%225abbe4b7ddc1b351ef961414%22%2C%22offering%22%3A%22trello.enterprise%22%2C%22url%22%3A%22https%3A%2F%2Ftrello.com%2Fw%2F%3Cname%3E%22%2C%22idBoards%22%3A%5B%225abbe4b7ddc1b351ef961414%22%5D%2C%22memberships%22%3A%5B%225abbe4b7ddc1b351ef961414%22%5D%2C%22premiumFeatures%22%3A%5B%22string%22%5D%7D \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/transferrable/bulk/{idOrganizations}`

Get a list of organizations that can be transferred to an enterprise when given a bulk list of organizations.

<h3 id="get-a-bulk-list-of-organizations-that-can-be-transferred-to-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Enterprise to retrieve.|
|idOrganizations|path|[[Organization](#schemaorganization)]|true|An array of IDs of an Organization resource.|

> Example responses

> 200 Response

```json
[
  {
    "transferrable": true,
    "newBillableMembers": [
      {
        "id": "5ab10be237846c43015f1091",
        "fullName": "Bob Loblaw",
        "username": "bobloblaw",
        "initials": "BL",
        "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
      }
    ],
    "restrictedMembers": [
      {
        "id": "5ab10be237846c43015f1091",
        "fullName": "Bob Loblaw",
        "username": "bobloblaw",
        "initials": "BL",
        "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
      }
    ]
  }
]
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-a-bulk-list-of-organizations-that-can-be-transferred-to-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="get-a-bulk-list-of-organizations-that-can-be-transferred-to-an-enterprise-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[TransferrableOrganization](#schematransferrableorganization)]|false|none|none|
|» *anyOf*|[TransferrableOrganization](#schematransferrableorganization)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:enterprise:trello )
</aside>

## Decline enterpriseJoinRequests from one organization or a bulk list of organizations.

<a id="opIdput-enterprises-id-enterpriseJoinRequest-bulk"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/enterprises/$5abbe4b7ddc1b351ef961414/enterpriseJoinRequest/bulk?idOrganizations=%7B%22id%22%3A%225abbe4b7ddc1b351ef961414%22%2C%22name%22%3A%22string%22%2C%22displayName%22%3A%22Organization%20Name%22%2C%22dateLastActivity%22%3A%222018-10-17T19%3A10%3A14.808Z%22%2C%22prefs%22%3A%7B%22boardVisibilityRestrict%22%3A%7B%7D%2C%22boardDeleteRestrict%22%3A%7B%7D%2C%22attachmentRestrictions%22%3A%5B%22computer%22%5D%2C%22permissionLevel%22%3A%22private%22%7D%2C%22idEnterprise%22%3A%225abbe4b7ddc1b351ef961414%22%2C%22offering%22%3A%22trello.enterprise%22%2C%22url%22%3A%22https%3A%2F%2Ftrello.com%2Fw%2F%3Cname%3E%22%2C%22idBoards%22%3A%5B%225abbe4b7ddc1b351ef961414%22%5D%2C%22memberships%22%3A%5B%225abbe4b7ddc1b351ef961414%22%5D%2C%22premiumFeatures%22%3A%5B%22string%22%5D%7D' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /enterprises/${id}/enterpriseJoinRequest/bulk`

Decline enterpriseJoinRequests from one organization or bulk amount of organizations

<h3 id="decline-enterprisejoinrequests-from-one-organization-or-a-bulk-list-of-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Enterprise to retrieve.|
|idOrganizations|query|[[Organization](#schemaorganization)]|true|An array of IDs of an Organization resource.|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="decline-enterprisejoinrequests-from-one-organization-or-a-bulk-list-of-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:enterprise:trello )
</aside>

## Get ClaimableOrganizations of an Enterprise

<a id="opIdget-enterprises-id-claimableOrganizations"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/claimableOrganizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/claimableOrganizations`

Get the Workspaces that are claimable by the enterprise by ID. Can optionally query for workspaces based on activeness/ inactiveness.

<h3 id="get-claimableorganizations-of-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve|
|limit|query|integer|false|Limits the number of workspaces to be sorted|
|cursor|query|string|false|Specifies the sort order to return matching documents|
|name|query|string|false|Name of the enterprise to retrieve workspaces for|
|activeSince|query|string|false|Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace|
|inactiveSince|query|string|false|Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace|

> Example responses

> 200 Response

```json
{
  "organizations": [
    {
      "name": "organization_name",
      "displayName": "Organization Name",
      "activeMembershipCount": 5,
      "idActiveAdmins": [
        "5abbe4b7ddc1b351ef961414"
      ],
      "products": [
        0
      ],
      "id": "617abd5995eae45169a11059",
      "logoUrl": null,
      "dateLastActive": "2019-08-22T18:15:53.546Z"
    }
  ],
  "claimableCount": 2
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-claimableorganizations-of-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[ClaimableOrganizations](#schemaclaimableorganizations)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected erorr|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:enterprise:trello )
</aside>

## Get PendingOrganizations of an Enterprise

<a id="opIdget-enterprises-id-pendingOrganizations"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/pendingOrganizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/pendingOrganizations`

Get the Workspaces that are pending for the enterprise by ID.

<h3 id="get-pendingorganizations-of-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve|
|activeSince|query|string|false|Date in YYYY-MM-DD format indicating the date to search up to for activeness of workspace|
|inactiveSince|query|string|false|Date in YYYY-MM-DD format indicating the date to search up to for inactiveness of workspace|

> Example responses

> 200 Response

```json
[
  {
    "id": "617ac9070293e6612650e0ca",
    "idMember": "5589c3ea49b40cedc28cf70e",
    "memberRequestor": {
      "id": "59cd149051aa57a706962996",
      "fullName": "Bob Loblaw (Trello)"
    },
    "date": "2018-10-17T19:10:14.808Z",
    "displayName": "Organization Name",
    "membershipCount": 2,
    "logoUrl": null,
    "transferability": {
      "transferrable": true,
      "newBillableMembers": [
        {
          "id": "5ab10be237846c43015f1091",
          "fullName": "Bob Loblaw",
          "username": "bobloblaw",
          "initials": "BL",
          "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
        }
      ],
      "restrictedMembers": [
        {
          "id": "5ab10be237846c43015f1091",
          "fullName": "Bob Loblaw",
          "username": "bobloblaw",
          "initials": "BL",
          "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
        }
      ]
    }
  }
]
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-pendingorganizations-of-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected erorr|[Error](#schemaerror)|

<h3 id="get-pendingorganizations-of-an-enterprise-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PendingOrganizations](#schemapendingorganizations)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:enterprise:trello )
</aside>

## Create an auth Token for an Enterprise.

<a id="opIdpost-enterprises-id-tokens"></a>

> Code samples

```bash
curl "https://api.trello.com/1/enterprises/string/tokens?key=${API_KEY}&token=${API_KEY}" \
  -X POST
```

`POST /enterprises/{id}/tokens`

Create an auth Token for an Enterprise.

<h3 id="create-an-auth-token-for-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the enterprise to retrieve.|
|expiration|query|string|false|One of: `1hour`, `1day`, `30days`, `never`|

<h3 id="create-an-auth-token-for-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey & APIToken
</aside>

## Get Organizations of an Enterprise

<a id="opIdget-enterprises-id-organizations"></a>

> Code samples

```bash
curl https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /enterprises/{id}/organizations`

Get the organizations of an enterprise.

<h3 id="get-organizations-of-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Enterprise to retrieve.|
|fields|query|[OrganizationFields](#schemaorganizationfields)|false|comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|filter|query|string|false|none|
|startIndex|query|integer(int32)|false|Any integer greater than and equal to 1.|
|count|query|integer(int32)|false|Any integer between 0 and 100.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|name|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "string",
    "displayName": "Organization Name",
    "dateLastActivity": "2018-10-17T19:10:14.808Z",
    "prefs": {
      "boardVisibilityRestrict": {},
      "boardDeleteRestrict": {},
      "attachmentRestrictions": [
        "computer"
      ],
      "permissionLevel": "private"
    },
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "offering": "trello.enterprise",
    "url": "https://trello.com/w/<name>",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "memberships": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "premiumFeatures": [
      "string"
    ]
  }
]
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="get-organizations-of-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="get-organizations-of-an-enterprise-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Organization](#schemaorganization)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:enterprise:trello )
</aside>

## Transfer an Organization to an Enterprise.

<a id="opIdput-enterprises-id-organizations"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/organizations?idOrganization=string' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /enterprises/{id}/organizations`

Transfer an organization to an enterprise.

 NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in the organization being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.

<h3 id="transfer-an-organization-to-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Enterprise to retrieve.|
|idOrganization|query|string|true|ID of Organization to be transferred to Enterprise.|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "string",
    "displayName": "Organization Name",
    "dateLastActivity": "2018-10-17T19:10:14.808Z",
    "prefs": {
      "boardVisibilityRestrict": {},
      "boardDeleteRestrict": {},
      "attachmentRestrictions": [
        "computer"
      ],
      "permissionLevel": "private"
    },
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "offering": "trello.enterprise",
    "url": "https://trello.com/w/<name>",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "memberships": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "premiumFeatures": [
      "string"
    ]
  }
]
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="transfer-an-organization-to-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<h3 id="transfer-an-organization-to-an-enterprise-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Organization](#schemaorganization)]|false|none|none|
|» *anyOf*|[Organization](#schemaorganization)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:enterprise:trello )
</aside>

## Update a Member's licensed status

<a id="opIdput-enterprises-id-members-idmember-licensed"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/members/5abbe4b7ddc1b351ef961414/licensed?value=true' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /enterprises/{id}/members/{idMember}/licensed`

This endpoint is used to update whether the provided Member should use one of the Enterprise's available licenses or not. Revoking a license will deactivate a Member of an Enterprise. 

 NOTE: Revoking of licenses is not possible for enterprises that have opted in to user management via AdminHub.

<h3 id="update-a-members-licensed-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Enterprise.|
|idMember|path|[TrelloID](#schematrelloid)|true|The ID of the Member|
|value|query|boolean|true|Boolean value to determine whether the user should be given an Enterprise license (true) or not (false).|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="update-a-members-licensed-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Member](#schemamember)|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:enterprise:trello )
</aside>

## Deactivate a Member of an Enterprise.

<a id="opIdenterprises-id-members-idMember-deactivated"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/members/5abbe4b7ddc1b351ef961414/deactivated?value=true' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /enterprises/{id}/members/{idMember}/deactivated`

Deactivate a Member of an Enterprise.

 NOTE: Deactivation is not possible for enterprises that have opted in to user management via AdminHub.

<h3 id="deactivate-a-member-of-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|idMember|path|[TrelloID](#schematrelloid)|true|ID of the Member to deactive.|
|value|query|boolean|true|Determines whether the user is deactivated or not.|
|fields|query|[MemberFields](#schemamemberfields)|false|A comma separated list of any valid values that the [nested member field resource]() accepts.|
|organization_fields|query|[OrganizationFields](#schemaorganizationfields)|false|Any valid value that the [nested organization resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.|
|board_fields|query|[BoardFields](#schemaboardfields)|false|Any valid value that the [nested board resource](/cloud/trello/guides/rest-api/nested-resources/) accepts.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|organization_fields|id|
|organization_fields|name|
|board_fields|id|
|board_fields|name|
|board_fields|desc|
|board_fields|descData|
|board_fields|closed|
|board_fields|idMemberCreator|
|board_fields|idOrganization|
|board_fields|pinned|
|board_fields|url|
|board_fields|shortUrl|
|board_fields|prefs|
|board_fields|labelNames|
|board_fields|starred|
|board_fields|limits|
|board_fields|memberships|
|board_fields|enterpriseOwned|

<h3 id="deactivate-a-member-of-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:enterprise:trello )
</aside>

## Update Member to be admin of Enterprise

<a id="opIdput-enterprises-id-admins-idmember"></a>

> Code samples

```bash
curl "https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/admins/5abbe4b7ddc1b351ef961414?key=${API_KEY}&token=${API_KEY}" \
  -X PUT
```

`PUT /enterprises/{id}/admins/{idMember}`

Make Member an admin of Enterprise.

 NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.

<h3 id="update-member-to-be-admin-of-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|idMember|path|[TrelloID](#schematrelloid)|true|ID of member to be made an admin of enterprise.|

<h3 id="update-member-to-be-admin-of-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey & APIToken
</aside>

## Remove a Member as admin from Enterprise.

<a id="opIdenterprises-id-organizations-idmember"></a>

> Code samples

```bash
curl "https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/admins/5abbe4b7ddc1b351ef961414?key=${API_KEY}&token=${API_KEY}" \
  -X DELETE
```

`DELETE /enterprises/{id}/admins/{idMember}`

Remove a member as admin from an enterprise.

 NOTE: This endpoint is not available to enterprises that have opted in to user management via AdminHub.

<h3 id="remove-a-member-as-admin-from-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the Enterprise to retrieve.|
|idMember|path|[TrelloID](#schematrelloid)|true|ID of the member to be removed as an admin from enterprise.|

<h3 id="remove-a-member-as-admin-from-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey & APIToken
</aside>

## Delete an Organization from an Enterprise.

<a id="opIddelete-enterprises-id-organizations-idorg"></a>

> Code samples

```bash
curl "https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/organizations/5abbe4b7ddc1b351ef961414?key=${API_KEY}&token=${API_KEY}" \
  -X DELETE
```

`DELETE /enterprises/{id}/organizations/{idOrg}`

Remove an organization from an enterprise.

<h3 id="delete-an-organization-from-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|idOrg|path|[TrelloID](#schematrelloid)|true|ID of the organization to be removed from the enterprise.|

<h3 id="delete-an-organization-from-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey & APIToken
</aside>

## Bulk accept a set of organizations to an Enterprise.

<a id="opIdget-enterprises-id-organizations-bulk-idOrganizations"></a>

> Code samples

```bash
curl "https://api.trello.com/1/enterprises/5abbe4b7ddc1b351ef961414/organizations/bulk/%7B%22id%22%3A%225abbe4b7ddc1b351ef961414%22%2C%22name%22%3A%22string%22%2C%22displayName%22%3A%22Organization%20Name%22%2C%22dateLastActivity%22%3A%222018-10-17T19%3A10%3A14.808Z%22%2C%22prefs%22%3A%7B%22boardVisibilityRestrict%22%3A%7B%7D%2C%22boardDeleteRestrict%22%3A%7B%7D%2C%22attachmentRestrictions%22%3A%5B%22computer%22%5D%2C%22permissionLevel%22%3A%22private%22%7D%2C%22idEnterprise%22%3A%225abbe4b7ddc1b351ef961414%22%2C%22offering%22%3A%22trello.enterprise%22%2C%22url%22%3A%22https%3A%2F%2Ftrello.com%2Fw%2F%3Cname%3E%22%2C%22idBoards%22%3A%5B%225abbe4b7ddc1b351ef961414%22%5D%2C%22memberships%22%3A%5B%225abbe4b7ddc1b351ef961414%22%5D%2C%22premiumFeatures%22%3A%5B%22string%22%5D%7D?key=${API_KEY}&token=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /enterprises/{id}/organizations/bulk/{idOrganizations}`

Accept an array of organizations to an enterprise.

 NOTE: For enterprises that have opted in to user management via AdminHub, this endpoint will result in organizations being added to the enterprise asynchronously. A 200 response only indicates receipt of the request, it does not indicate successful addition to the enterprise.

<h3 id="bulk-accept-a-set-of-organizations-to-an-enterprise-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the enterprise to retrieve.|
|idOrganizations|path|[[Organization](#schemaorganization)]|true|An array of IDs of the organizations to be removed from the enterprise.|

> Example responses

> 401 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> 404 Response

```json
{
  "code": "string",
  "message": "string"
}
```

> default Response

```json
{
  "code": "string",
  "message": "string"
}
```

<h3 id="bulk-accept-a-set-of-organizations-to-an-enterprise-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|
|401|Unauthorized|Unauthorized|[Error](#schemaerror)|
|404|Not Found|The specified resource was not found|[Error](#schemaerror)|
|default|Default|Unexpected Error|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey & APIToken
</aside>

## Get a Label

<a id="opIdget-labels-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/labels/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /labels/{id}`

Get information about a single Label.

<h3 id="get-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|all or a comma-separated list of [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Label|

<h3 id="get-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update a Label

<a id="opIdput-labels-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/labels/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /labels/{id}`

Update a label by ID.

<h3 id="update-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The new name for the label|
|color|query|[Color](#schemacolor)|false|The new color for the label. See: [fields](/cloud/trello/guides/rest-api/object-definitions/) for color options|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Label|

#### Enumerated Values

|Parameter|Value|
|---|---|
|color|yellow|
|color|purple|
|color|blue|
|color|red|
|color|green|
|color|orange|
|color|black|
|color|sky|
|color|pink|
|color|lime|

<h3 id="update-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Delete a Label

<a id="opIddelete-labels-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/labels/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /labels/{id}`

Delete a label by ID.

<h3 id="delete-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Label|

<h3 id="delete-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Update a field on a label

<a id="opIdput-labels-id-field"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/labels/string/color?value=5abbe4b7ddc1b351ef961414' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /labels/{id}/{field}`

Update a field on a label.

<h3 id="update-a-field-on-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the label|
|field|path|string|true|The field on the Label to update.|
|value|query|[TrelloID](#schematrelloid)|true|The new value for the field.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|color|
|field|name|

<h3 id="update-a-field-on-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Create a Label

<a id="opIdpost-labels"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/labels?name=string&color=yellow&idBoard=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /labels`

Create a new Label on a Board.

<h3 id="create-a-label-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name for the label|
|color|query|[Color](#schemacolor)|true|The color for the label.|
|idBoard|query|string|true|The ID of the Board to create the Label on.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|color|yellow|
|color|purple|
|color|blue|
|color|red|
|color|green|
|color|orange|
|color|black|
|color|sky|
|color|pink|
|color|lime|

<h3 id="create-a-label-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Get a List

<a id="opIdget-lists-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/lists/string \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lists/{id}`

Get information about a List

<h3 id="get-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|`all` or a comma separated list of List field names.|
|id|path|string|true|The ID of the list|

<h3 id="get-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Update a List

<a id="opIdput-lists-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/lists/string \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /lists/{id}`

Update the properties of a List

<h3 id="update-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|New name for the list|
|closed|query|boolean|false|Whether the list should be closed (archived)|
|idBoard|query|[TrelloID](#schematrelloid)|false|ID of a board the list should be moved to|
|pos|query|number(float) \| string|false|New position for the list: `top`, `bottom`, or a positive floating point number|
|subscribed|query|boolean|false|Whether the active member is subscribed to this list|
|id|path|string|true|The ID of the list|

<h3 id="update-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Create a new List

<a id="opIdpost-lists"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/lists?name=string&idBoard=5abbe4b7ddc1b351ef961414' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /lists`

Create a new List on a Board

<h3 id="create-a-new-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name for the list|
|idBoard|query|[TrelloID](#schematrelloid)|true|The long ID of the board the list should be created on|
|idListSource|query|[TrelloID](#schematrelloid)|false|ID of the List to copy into the new List|
|pos|query|number(float) \| string|false|Position of the list. `top`, `bottom`, or a positive floating point number|

<h3 id="create-a-new-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Archive all Cards in List

<a id="opIdpost-lists-id-archiveallcards"></a>

> Code samples

```bash
curl https://api.trello.com/1/lists/5abbe4b7ddc1b351ef961414/archiveAllCards \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /lists/{id}/archiveAllCards`

Archive all cards in a list

<h3 id="archive-all-cards-in-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the list|

<h3 id="archive-all-cards-in-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Move all Cards in List

<a id="opIdpost-lists-id-moveallcards"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/lists/5abbe4b7ddc1b351ef961414/moveAllCards?idBoard=5abbe4b7ddc1b351ef961414&idList=5abbe4b7ddc1b351ef961414' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /lists/{id}/moveAllCards`

Move all Cards in a List

<h3 id="move-all-cards-in-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the list|
|idBoard|query|[TrelloID](#schematrelloid)|true|The ID of the board the cards should be moved to|
|idList|query|[TrelloID](#schematrelloid)|true|The ID of the list that the cards should be moved to|

<h3 id="move-all-cards-in-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Archive or unarchive a list

<a id="opIdput-lists-id-closed"></a>

> Code samples

```bash
curl https://api.trello.com/1/lists/5abbe4b7ddc1b351ef961414/closed \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /lists/{id}/closed`

Archive or unarchive a list

<h3 id="archive-or-unarchive-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the list|
|value|query|[TrelloID](#schematrelloid)|false|Set to true to close (archive) the list|

<h3 id="archive-or-unarchive-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Move List to Board

<a id="opIdput-id-idboard"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/lists/5abbe4b7ddc1b351ef961414/idBoard?value=5abbe4b7ddc1b351ef961414' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /lists/{id}/idBoard`

Move a List to a different Board

<h3 id="move-list-to-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the list|
|value|query|[TrelloID](#schematrelloid)|true|The ID of the board to move the list to|

<h3 id="move-list-to-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:board:trello )
</aside>

## Update a field on a List

<a id="opIdput-lists-id-field"></a>

> Code samples

```bash
curl https://api.trello.com/1/lists/5abbe4b7ddc1b351ef961414/name \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /lists/{id}/{field}`

Rename a list

<h3 id="update-a-field-on-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the list|
|field|path|string|true|The field on the List to be updated|
|value|query|string \| number(float) \| boolean|false|The new value for the field|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|name|
|field|pos|
|field|subscribed|

<h3 id="update-a-field-on-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello write:board:trello )
</aside>

## Get Actions for a List

<a id="opIdget-lists-id-actions"></a>

> Code samples

```bash
curl https://api.trello.com/1/lists/string/actions \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lists/{id}/actions`

Get the Actions on a List

<h3 id="get-actions-for-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the list|
|filter|query|string|false|A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).|

<h3 id="get-actions-for-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get the Board a List is on

<a id="opIdget-lists-id-board"></a>

> Code samples

```bash
curl https://api.trello.com/1/lists/string/board \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lists/{id}/board`

Get the board a list is on

<h3 id="get-the-board-a-list-is-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the list|
|fields|query|string|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/#board-object)|

<h3 id="get-the-board-a-list-is-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Cards in a List

<a id="opIdget-lists-id-cards"></a>

> Code samples

```bash
curl https://api.trello.com/1/lists/5abbe4b7ddc1b351ef961414/cards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /lists/{id}/cards`

List the cards in a list

<h3 id="get-cards-in-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the list|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "address": "string",
    "badges": {
      "attachmentsByType": {
        "trello": {
          "board": 0,
          "card": 0
        }
      },
      "location": true,
      "votes": 0,
      "viewingMemberVoted": false,
      "subscribed": false,
      "fogbugz": "string",
      "checkItems": 0,
      "checkItemsChecked": 0,
      "comments": 0,
      "attachments": 0,
      "description": true,
      "due": "1970-01-01",
      "start": "1970-01-01",
      "dueComplete": true
    },
    "cardRole": "mirror",
    "checkItemStates": [
      "string"
    ],
    "closed": true,
    "coordinates": "string",
    "creationMethod": "string",
    "dateLastActivity": "2019-09-16T16:19:17.156Z",
    "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
    "descData": {
      "emoji": {}
    },
    "due": "1970-01-01",
    "dueReminder": "string",
    "idBoard": "5abbe4b7ddc1b351ef961414",
    "idChecklists": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ],
    "idLabels": [
      {
        "id": "5abbe4b7ddc1b351ef961414",
        "idBoard": "5abbe4b7ddc1b351ef961414",
        "name": "Overdue",
        "color": "yellow"
      }
    ],
    "idList": "5abbe4b7ddc1b351ef961415",
    "idMembers": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idMembersVoted": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idShort": 0,
    "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
    "labels": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "locationName": "string",
    "manualCoverAttachment": false,
    "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
    "name": "👋 What? Why? How?",
    "pos": 65535,
    "shortLink": "H0TZyzbK",
    "shortUrl": "https://trello.com/c/H0TZyzbK",
    "subscribed": false,
    "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
    "cover": {
      "idAttachment": "5abbe4b7ddc1b351ef961414",
      "color": "yellow",
      "idUploadedBackground": true,
      "size": "normal",
      "brightness": "light",
      "isTemplate": false
    }
  }
]
```

<h3 id="get-cards-in-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-cards-in-a-list-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Card](#schemacard)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get a Member

<a id="opIdget-members=id"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}`

Get a member

<h3 id="get-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|actions|query|string|false|See the [Actions Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#actions-nested-resource)|
|boards|query|string|false|See the [Boards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#boards-nested-resource)|
|boardBackgrounds|query|string|false|One of: `all`, `custom`, `default`, `none`, `premium`|
|boardsInvited|query|string|false|`all` or a comma-separated list of: closed, members, open, organization, pinned, public, starred, unpinned|
|boardsInvited_fields|query|[BoardFields](#schemaboardfields)|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|boardStars|query|boolean|false|Whether to return the boardStars or not|
|cards|query|string|false|See the [Cards Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#cards-nested-resource) for additional options|
|customBoardBackgrounds|query|string|false|`all` or `none`|
|customEmoji|query|string|false|`all` or `none`|
|customStickers|query|string|false|`all` or `none`|
|fields|query|[MemberFields](#schemamemberfields)|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|notifications|query|string|false|See the [Notifications Nested Resource](/cloud/trello/guides/rest-api/nested-resources/#notifications-nested-resource)|
|organizations|query|string|false|One of: `all`, `members`, `none`, `public`|
|organization_fields|query|[OrganizationFields](#schemaorganizationfields)|false|`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|organization_paid_account|query|boolean|false|Whether or not to include paid account information in the returned workspace object|
|organizationsInvited|query|string|false|One of: `all`, `members`, `none`, `public`|
|organizationsInvited_fields|query|[OrganizationFields](#schemaorganizationfields)|false|`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|paid_account|query|boolean|false|**Deprecated.** Whether or not to include paid account information in the returned member object|
|savedSearches|query|boolean|false|none|
|tokens|query|string|false|`all` or `none`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|boardBackgrounds|all|
|boardBackgrounds|custom|
|boardBackgrounds|default|
|boardBackgrounds|none|
|boardBackgrounds|premium|
|boardsInvited|closed|
|boardsInvited|members|
|boardsInvited|open|
|boardsInvited|organization|
|boardsInvited|pinned|
|boardsInvited|public|
|boardsInvited|starred|
|boardsInvited|unpinned|
|boardsInvited_fields|id|
|boardsInvited_fields|name|
|boardsInvited_fields|desc|
|boardsInvited_fields|descData|
|boardsInvited_fields|closed|
|boardsInvited_fields|idMemberCreator|
|boardsInvited_fields|idOrganization|
|boardsInvited_fields|pinned|
|boardsInvited_fields|url|
|boardsInvited_fields|shortUrl|
|boardsInvited_fields|prefs|
|boardsInvited_fields|labelNames|
|boardsInvited_fields|starred|
|boardsInvited_fields|limits|
|boardsInvited_fields|memberships|
|boardsInvited_fields|enterpriseOwned|
|customBoardBackgrounds|all|
|customBoardBackgrounds|none|
|customEmoji|all|
|customEmoji|none|
|customStickers|all|
|customStickers|none|
|fields|id|
|organizations|all|
|organizations|members|
|organizations|none|
|organizations|public|
|organization_fields|id|
|organization_fields|name|
|organizationsInvited|all|
|organizationsInvited|members|
|organizationsInvited|none|
|organizationsInvited|public|
|organizationsInvited_fields|id|
|organizationsInvited_fields|name|
|tokens|all|
|tokens|none|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="get-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Member](#schemamember)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update a Member

<a id="opIdput-members-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /members/{id}`

Update a Member

<h3 id="update-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|fullName|query|string|false|New name for the member. Cannot begin or end with a space.|
|initials|query|string|false|New initials for the member. 1-4 characters long.|
|username|query|string|false|New username for the member. At least 3 characters long, only lowercase letters, underscores, and numbers. Must be unique.|
|bio|query|string|false|none|
|avatarSource|query|string|false|One of: `gravatar`, `none`, `upload`|
|prefs/colorBlind|query|boolean|false|none|
|prefs/locale|query|string|false|none|
|prefs/minutesBetweenSummaries|query|integer(int32)|false|`-1` for disabled, `1`, or `60`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|avatarSource|gravatar|
|avatarSource|none|
|avatarSource|upload|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="update-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="update-a-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Member](#schemamember)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a field on a Member

<a id="opIdget-members-id-field"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/id \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/{field}`

Get a particular property of a member

<h3 id="get-a-field-on-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|field|path|[MemberFields](#schemamemberfields)|true|One of the member [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="get-a-field-on-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-field-on-a-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Member](#schemamember)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a Member's Actions

<a id="opIdget-members-id-actions"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/actions`

List the actions for a member

<h3 id="get-a-members-actions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|filter|query|string|false|A comma-separated list of [action types](https://developer.atlassian.com/cloud/trello/guides/rest-api/action-types/).|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "activityBlocked": false,
    "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
    "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
    "bio": "👋 I'm a developer advocate at Trello!",
    "bioData": {
      "emoji": {}
    },
    "confirmed": true,
    "fullName": "Bentley Cook",
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "idEnterprisesDeactivated": [
      "string"
    ],
    "idMemberReferrer": null,
    "idPremOrgsAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "initials": "BC",
    "memberType": "normal",
    "nonPublic": {
      "fullName": "Bentley Cook",
      "initials": "BC",
      "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
      "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
    },
    "nonPublicAvailable": false,
    "products": [
      0
    ],
    "url": "https://trello.com/bentleycook",
    "username": "bentleycook",
    "status": "disconnected",
    "aaEmail": null,
    "aaEnrolledDate": null,
    "aaId": null,
    "avatarSource": "gravatar",
    "email": "bcook@atlassian.com",
    "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idOrganizations": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idEnterprisesAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "status": "ok",
      "disableAt": 36000,
      "warnAt": 32400
    },
    "loginTypes": [
      "password"
    ],
    "marketingOptIn": {
      "optedIn": false,
      "date": "2018-04-26T17:03:25.155Z"
    },
    "messagesDismissed": {
      "name": "ad-security-features",
      "count": 4,
      "lastDismissed": "2019-03-11T20:19:46.809Z",
      "_id": "5995d44573d197eada632a32"
    },
    "oneTimeMessagesDismissed": [
      "string"
    ],
    "prefs": {
      "timezoneInfo": {
        "offsetCurrent": 360,
        "timezoneCurrent": "CST",
        "offsetNext": 300,
        "dateNext": "2020-03-08T08:00:00.000Z",
        "timezoneNext": "CDT"
      },
      "privacy": {
        "fullName": "public",
        "avatar": "public"
      },
      "sendSummaries": true,
      "minutesBetweenSummaries": 60,
      "minutesBeforeDeadlineToNotify": 1440,
      "colorBlind": true,
      "locale": "en-AU",
      "timezone": "America/Chicago",
      "twoFactor": {
        "enabled": true,
        "needsNewBackups": false
      }
    },
    "trophies": [
      "string"
    ],
    "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
    "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
    "premiumFeatures": [
      "string"
    ],
    "isAaMastered": false,
    "ixUpdate": "48427",
    "idBoardsPinned": [
      "5abbe4b7ddc1b351ef961414"
    ]
  }
]
```

<h3 id="get-a-members-actions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-members-actions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Member](#schemamember)]|false|none|none|
|» *oneOf*|[Member](#schemamember)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Member's custom Board backgrounds

<a id="opIdget-members-id-boardbackgrounds"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardBackgrounds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/boardBackgrounds`

Get a member's custom board backgrounds

<h3 id="get-members-custom-board-backgrounds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|filter|query|string|false|One of: `all`, `custom`, `default`, `none`, `premium`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|custom|
|filter|default|
|filter|none|
|filter|premium|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414"
  }
]
```

<h3 id="get-members-custom-board-backgrounds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-members-custom-board-backgrounds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BoardBackground](#schemaboardbackground)]|false|none|none|
|» *oneOf*|[BoardBackground](#schemaboardbackground)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Upload new boardBackground for Member

<a id="opIdpost-members-id-boardbackgrounds-1"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardBackgrounds?file=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /members/{id}/boardBackgrounds`

Upload a new boardBackground

<h3 id="upload-new-boardbackground-for-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|file|query|string(binary)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414"
  }
]
```

<h3 id="upload-new-boardbackground-for-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="upload-new-boardbackground-for-member-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BoardBackground](#schemaboardbackground)]|false|none|none|
|» *oneOf*|[BoardBackground](#schemaboardbackground)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a boardBackground of a Member

<a id="opIdget-members-id-boardbackgrounds-idbackground"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardBackgrounds/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/boardBackgrounds/{idBackground}`

Get a member's board background

<h3 id="get-a-boardbackground-of-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|`all` or a comma-separated list of: `brightness`, `fullSizeUrl`, `scaled`, `tile`|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idBackground|path|[TrelloID](#schematrelloid)|true|The ID of the board background|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|all|
|fields|brightness|
|fields|fullSizeUrl|
|fields|scaled|
|fields|tile|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="get-a-boardbackground-of-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BoardBackground](#schemaboardbackground)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Update a Member's custom Board background

<a id="opIdput-members-id-boardbackgrounds-idbackground"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardBackgrounds/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /members/{id}/boardBackgrounds/{idBackground}`

Update a board background

<h3 id="update-a-members-custom-board-background-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|brightness|query|string|false|One of: `dark`, `light`, `unknown`|
|tile|query|boolean|false|Whether the background should be tiled|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idBackground|path|[TrelloID](#schematrelloid)|true|The ID of the board background|

#### Enumerated Values

|Parameter|Value|
|---|---|
|brightness|dark|
|brightness|light|
|brightness|unknown|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="update-a-members-custom-board-background-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BoardBackground](#schemaboardbackground)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Delete a Member's custom Board background

<a id="opIddelete-members-id-boardbackgrounds-idbackground"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardBackgrounds/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /members/{id}/boardBackgrounds/{idBackground}`

Delete a board background

<h3 id="delete-a-members-custom-board-background-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idBackground|path|[TrelloID](#schematrelloid)|true|The ID of the board background|

<h3 id="delete-a-members-custom-board-background-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a Member's boardStars

<a id="opIdget-members-id-boardstars"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardStars \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/boardStars`

List a member's board stars

<h3 id="get-a-members-boardstars-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

<h3 id="get-a-members-boardstars-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Create Star for Board

<a id="opIdpost-members-id-boardstars"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardStars?idBoard=5abbe4b7ddc1b351ef961414&pos=top' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /members/{id}/boardStars`

Star a new board on behalf of a Member

<h3 id="create-star-for-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|idBoard|query|[TrelloID](#schematrelloid)|true|The ID of the board to star|
|pos|query|[posStringOrNumber](#schemaposstringornumber)|true|The position of the newly starred board. `top`, `bottom`, or a positive float.|

> Example responses

> 200 Response

```json
[
  {
    "id": "585063850027165010be15a8",
    "idBoard": "57f7df684f1ca8c2877162e0",
    "pos": 32768
  }
]
```

<h3 id="create-star-for-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="create-star-for-board-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BoardStars](#schemaboardstars)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a boardStar of Member

<a id="opIdget-members-id-boardstars-idstar"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardStars/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/boardStars/{idStar}`

Get a specific boardStar

<h3 id="get-a-boardstar-of-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idStar|path|[TrelloID](#schematrelloid)|true|The ID of the board star|

> Example responses

> 200 Response

```json
{
  "id": "585063850027165010be15a8",
  "idBoard": "57f7df684f1ca8c2877162e0",
  "pos": 32768
}
```

<h3 id="get-a-boardstar-of-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BoardStars](#schemaboardstars)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Update the position of a boardStar of Member

<a id="opIdput-members-id-boardstars-idstar"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardStars/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /members/{id}/boardStars/{idStar}`

Update the position of a starred board

<h3 id="update-the-position-of-a-boardstar-of-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|pos|query|[posStringOrNumber](#schemaposstringornumber)|false|New position for the starred board. `top`, `bottom`, or a positive float.|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idStar|path|[TrelloID](#schematrelloid)|true|The ID of the board star|

<h3 id="update-the-position-of-a-boardstar-of-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Delete Star for Board

<a id="opIddelete-members-id-boardstars-idstar"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardStars/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /members/{id}/boardStars/{idStar}`

Unstar a board

<h3 id="delete-star-for-board-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idStar|path|[TrelloID](#schematrelloid)|true|The ID of the board star|

<h3 id="delete-star-for-board-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get Boards that Member belongs to

<a id="opIdget-members-id-boards"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/boards`

Lists the boards that the user is a member of.

<h3 id="get-boards-that-member-belongs-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|filter|query|string|false|`all` or a comma-separated list of: `closed`, `members`, `open`, `organization`, `public`, `starred`|
|fields|query|[BoardFields](#schemaboardfields)|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|lists|query|string|false|Which lists to include with the boards. One of: `all`, `closed`, `none`, `open`|
|organization|query|boolean|false|Whether to include the Organization object with the Boards|
|organization_fields|query|[OrganizationFields](#schemaorganizationfields)|false|`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|closed|
|filter|members|
|filter|open|
|filter|organization|
|filter|public|
|filter|starred|
|fields|id|
|fields|name|
|fields|desc|
|fields|descData|
|fields|closed|
|fields|idMemberCreator|
|fields|idOrganization|
|fields|pinned|
|fields|url|
|fields|shortUrl|
|fields|prefs|
|fields|labelNames|
|fields|starred|
|fields|limits|
|fields|memberships|
|fields|enterpriseOwned|
|lists|all|
|lists|closed|
|lists|none|
|lists|open|
|organization_fields|id|
|organization_fields|name|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  }
]
```

<h3 id="get-boards-that-member-belongs-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-boards-that-member-belongs-to-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Board](#schemaboard)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Boards the Member has been invited to

<a id="opIdget-members-id-boardsinvited"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/boardsInvited \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/boardsInvited`

Get the boards the member has been invited to

<h3 id="get-boards-the-member-has-been-invited-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|fields|query|[BoardFields](#schemaboardfields)|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|name|
|fields|desc|
|fields|descData|
|fields|closed|
|fields|idMemberCreator|
|fields|idOrganization|
|fields|pinned|
|fields|url|
|fields|shortUrl|
|fields|prefs|
|fields|labelNames|
|fields|starred|
|fields|limits|
|fields|memberships|
|fields|enterpriseOwned|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  }
]
```

<h3 id="get-boards-the-member-has-been-invited-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-boards-the-member-has-been-invited-to-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Board](#schemaboard)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get Cards the Member is on

<a id="opIdget-members-id-cards"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/cards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/cards`

Gets the cards a member is on

<h3 id="get-cards-the-member-is-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|filter|query|string|false|One of: `all`, `closed`, `complete`, `incomplete`, `none`, `open`, `visible`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|closed|
|filter|complete|
|filter|incomplete|
|filter|none|
|filter|open|
|filter|visible|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "address": "string",
    "badges": {
      "attachmentsByType": {
        "trello": {
          "board": 0,
          "card": 0
        }
      },
      "location": true,
      "votes": 0,
      "viewingMemberVoted": false,
      "subscribed": false,
      "fogbugz": "string",
      "checkItems": 0,
      "checkItemsChecked": 0,
      "comments": 0,
      "attachments": 0,
      "description": true,
      "due": "1970-01-01",
      "start": "1970-01-01",
      "dueComplete": true
    },
    "cardRole": "mirror",
    "checkItemStates": [
      "string"
    ],
    "closed": true,
    "coordinates": "string",
    "creationMethod": "string",
    "dateLastActivity": "2019-09-16T16:19:17.156Z",
    "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
    "descData": {
      "emoji": {}
    },
    "due": "1970-01-01",
    "dueReminder": "string",
    "idBoard": "5abbe4b7ddc1b351ef961414",
    "idChecklists": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ],
    "idLabels": [
      {
        "id": "5abbe4b7ddc1b351ef961414",
        "idBoard": "5abbe4b7ddc1b351ef961414",
        "name": "Overdue",
        "color": "yellow"
      }
    ],
    "idList": "5abbe4b7ddc1b351ef961415",
    "idMembers": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idMembersVoted": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idShort": 0,
    "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
    "labels": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "locationName": "string",
    "manualCoverAttachment": false,
    "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
    "name": "👋 What? Why? How?",
    "pos": 65535,
    "shortLink": "H0TZyzbK",
    "shortUrl": "https://trello.com/c/H0TZyzbK",
    "subscribed": false,
    "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
    "cover": {
      "idAttachment": "5abbe4b7ddc1b351ef961414",
      "color": "yellow",
      "idUploadedBackground": true,
      "size": "normal",
      "brightness": "light",
      "isTemplate": false
    }
  }
]
```

<h3 id="get-cards-the-member-is-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-cards-the-member-is-on-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Card](#schemacard)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Get a Member's custom Board Backgrounds

<a id="opIdget-members-id-customboardbackgrounds"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customBoardBackgrounds \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/customBoardBackgrounds`

Get a member's custom board backgrounds

<h3 id="get-a-members-custom-board-backgrounds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414"
  }
]
```

<h3 id="get-a-members-custom-board-backgrounds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-members-custom-board-backgrounds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[BoardBackground](#schemaboardbackground)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Create a new custom Board Background

<a id="opIdmembersidcustomboardbackgrounds-1"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customBoardBackgrounds?file=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /members/{id}/customBoardBackgrounds`

Upload a new custom board background

<h3 id="create-a-new-custom-board-background-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string(binary)|true|none|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="create-a-new-custom-board-background-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BoardBackground](#schemaboardbackground)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get custom Board Background of Member

<a id="opIdget-members-id-customboardbackgrounds-idbackground"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customBoardBackgrounds/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/customBoardBackgrounds/{idBackground}`

Get a specific custom board background

<h3 id="get-custom-board-background-of-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|idBackground|path|[TrelloID](#schematrelloid)|true|The ID of the custom background|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="get-custom-board-background-of-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BoardBackground](#schemaboardbackground)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update custom Board Background of Member

<a id="opIdput-members-id-customboardbackgrounds-idbackground"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customBoardBackgrounds/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /members/{id}/customBoardBackgrounds/{idBackground}`

Update a specific custom board background

<h3 id="update-custom-board-background-of-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|brightness|query|string|false|One of: `dark`, `light`, `unknown`|
|tile|query|boolean|false|Whether to tile the background|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|idBackground|path|[TrelloID](#schematrelloid)|true|The ID of the custom background|

#### Enumerated Values

|Parameter|Value|
|---|---|
|brightness|dark|
|brightness|light|
|brightness|unknown|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="update-custom-board-background-of-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[BoardBackground](#schemaboardbackground)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete custom Board Background of Member

<a id="opIddelete-members-id-customboardbackgrounds-idbackground"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customBoardBackgrounds/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /members/{id}/customBoardBackgrounds/{idBackground}`

Delete a specific custom board background

<h3 id="delete-custom-board-background-of-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|idBackground|path|[TrelloID](#schematrelloid)|true|The ID of the custom background|

<h3 id="delete-custom-board-background-of-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a Member's customEmojis

<a id="opIdget-members-id-customemoji"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customEmoji \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/customEmoji`

Get a Member's uploaded custom Emojis

<h3 id="get-a-members-customemojis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

> Example responses

> 200 Response

```json
[
  {
    "id": "5900ac11ed55d6d2c355c5d6",
    "url": "https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png",
    "name": "chorizo"
  }
]
```

<h3 id="get-a-members-customemojis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-members-customemojis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomEmoji](#schemacustomemoji)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Create custom Emoji for Member

<a id="opIdpost-members-id-customemoji"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customEmoji?file=string&name=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /members/{id}/customEmoji`

Create a new custom Emoji

<h3 id="create-custom-emoji-for-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string(binary)|true|none|
|name|query|string|true|Name for the emoji. 2 - 64 characters|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

> Example responses

> 200 Response

```json
{
  "id": "5900ac11ed55d6d2c355c5d6",
  "url": "https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png",
  "name": "chorizo"
}
```

<h3 id="create-custom-emoji-for-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomEmoji](#schemacustomemoji)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a Member's custom Emoji

<a id="opIdmembersidcustomemojiidemoji"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customEmoji/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/customEmoji/{idEmoji}`

Get a Member's custom Emoji

<h3 id="get-a-members-custom-emoji-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idEmoji|path|[TrelloID](#schematrelloid)|true|The ID of the custom emoji|
|fields|query|string|false|`all` or a comma-separated list of `name`, `url`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|name|
|fields|url|
|fields|all|

> Example responses

> 200 Response

```json
{
  "id": "5900ac11ed55d6d2c355c5d6",
  "url": "https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png",
  "name": "chorizo"
}
```

<h3 id="get-a-members-custom-emoji-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomEmoji](#schemacustomemoji)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Get Member's custom Stickers

<a id="opIdget-members-id-customstickers"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customStickers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/customStickers`

Get a Member's uploaded stickers

<h3 id="get-members-custom-stickers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "url": "http://example.com",
    "scaled": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ]
  }
]
```

<h3 id="get-members-custom-stickers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-members-custom-stickers-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CustomSticker](#schemacustomsticker)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Create custom Sticker for Member

<a id="opIdpost-members-id-customstickers"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customStickers?file=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /members/{id}/customStickers`

Upload a new custom sticker

<h3 id="create-custom-sticker-for-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|file|query|string(binary)|true|none|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "url": "http://example.com",
  "scaled": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ]
}
```

<h3 id="create-custom-sticker-for-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomSticker](#schemacustomsticker)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a Member's custom Sticker

<a id="opIdget-members-id-customstickers-idsticker"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customStickers/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/customStickers/{idSticker}`

Get a Member's custom Sticker

<h3 id="get-a-members-custom-sticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|fields|query|string|false|`all` or a comma-separated list of `scaled`, `url`|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idSticker|path|[TrelloID](#schematrelloid)|true|The ID of the uploaded sticker|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|scaled|
|fields|url|
|fields|all|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "url": "http://example.com",
  "scaled": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ]
}
```

<h3 id="get-a-members-custom-sticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[CustomSticker](#schemacustomsticker)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Delete a Member's custom Sticker

<a id="opIddelete-members-id-customstickers-idsticker"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/customStickers/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /members/{id}/customStickers/{idSticker}`

Delete a Member's custom Sticker

<h3 id="delete-a-members-custom-sticker-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|idSticker|path|[TrelloID](#schematrelloid)|true|The ID of the uploaded sticker|

<h3 id="delete-a-members-custom-sticker-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get Member's Notifications

<a id="opIdget-members-id-notifications"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/notifications \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/notifications`

Get a member's notifications

<h3 id="get-members-notifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|entities|query|boolean|false|none|
|display|query|boolean|false|none|
|filter|query|string|false|none|
|read_filter|query|string|false|One of: `all`, `read`, `unread`|
|fields|query|string|false|`all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|limit|query|integer(int32)|false|Max 1000|
|page|query|integer(int32)|false|Max 100|
|before|query|string|false|A notification ID|
|since|query|string|false|A notification ID|
|memberCreator|query|boolean|false|none|
|memberCreator_fields|query|string|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|

> Example responses

> 200 Response

```json
[
  {
    "id": "5dc591ac425f2a223aba0a8e",
    "unread": true,
    "type": "cardDueSoon",
    "date": "2019-11-08T16:02:52.763Z",
    "dateRead": null,
    "data": null,
    "card": {
      "id": "5abbe4b7ddc1b351ef961414",
      "address": "string",
      "badges": {
        "attachmentsByType": {
          "trello": {
            "board": 0,
            "card": 0
          }
        },
        "location": true,
        "votes": 0,
        "viewingMemberVoted": false,
        "subscribed": false,
        "fogbugz": "string",
        "checkItems": 0,
        "checkItemsChecked": 0,
        "comments": 0,
        "attachments": 0,
        "description": true,
        "due": "1970-01-01",
        "start": "1970-01-01",
        "dueComplete": true
      },
      "cardRole": "mirror",
      "checkItemStates": [
        "string"
      ],
      "closed": true,
      "coordinates": "string",
      "creationMethod": "string",
      "dateLastActivity": "2019-09-16T16:19:17.156Z",
      "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
      "descData": {
        "emoji": {}
      },
      "due": "1970-01-01",
      "dueReminder": "string",
      "idBoard": "5abbe4b7ddc1b351ef961414",
      "idChecklists": [
        {
          "id": "5abbe4b7ddc1b351ef961414"
        }
      ],
      "idLabels": [
        {
          "id": "5abbe4b7ddc1b351ef961414",
          "idBoard": "5abbe4b7ddc1b351ef961414",
          "name": "Overdue",
          "color": "yellow"
        }
      ],
      "idList": "5abbe4b7ddc1b351ef961415",
      "idMembers": [
        "5abbe4b7ddc1b351ef961414"
      ],
      "idMembersVoted": [
        "5abbe4b7ddc1b351ef961414"
      ],
      "idShort": 0,
      "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
      "labels": [
        "5abbe4b7ddc1b351ef961414"
      ],
      "limits": {
        "attachments": {
          "perBoard": {
            "status": "ok",
            "disableAt": 36000,
            "warnAt": 32400
          }
        }
      },
      "locationName": "string",
      "manualCoverAttachment": false,
      "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
      "name": "👋 What? Why? How?",
      "pos": 65535,
      "shortLink": "H0TZyzbK",
      "shortUrl": "https://trello.com/c/H0TZyzbK",
      "subscribed": false,
      "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
      "cover": {
        "idAttachment": "5abbe4b7ddc1b351ef961414",
        "color": "yellow",
        "idUploadedBackground": true,
        "size": "normal",
        "brightness": "light",
        "isTemplate": false
      }
    },
    "board": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Trello Platform Changes",
      "desc": "Track changes to Trello's Platform on this board.",
      "descData": "string",
      "closed": false,
      "idMemberCreator": "5abbe4b7ddc1b351ef961414",
      "idOrganization": "5abbe4b7ddc1b351ef961414",
      "pinned": false,
      "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
      "shortUrl": "https://trello.com/b/dQHqCohZ",
      "prefs": {
        "permissionLevel": "org",
        "hideVotes": true,
        "voting": "disabled",
        "comments": "string",
        "invitations": "admins",
        "selfJoin": true,
        "cardCovers": true,
        "isTemplate": true,
        "cardAging": "pirate",
        "calendarFeedEnabled": true,
        "background": "5abbe4b7ddc1b351ef961414",
        "backgroundImage": "http://example.com",
        "backgroundImageScaled": [
          {
            "width": 100,
            "height": 64,
            "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
          }
        ],
        "backgroundTile": true,
        "backgroundBrightness": "dark",
        "backgroundBottomColor": "#1e2e00",
        "backgroundTopColor": "#ffffff",
        "canBePublic": true,
        "canBeEnterprise": true,
        "canBeOrg": true,
        "canBePrivate": true,
        "canInvite": true
      },
      "labelNames": {
        "green": "Addition",
        "yellow": "Update",
        "orange": "Deprecation",
        "red": "Deletion",
        "purple": "Power-Ups",
        "blue": "News",
        "sky": "Announcement",
        "lime": "Delight",
        "pink": "REST API",
        "black": "Capabilties"
      },
      "limits": {
        "attachments": {
          "perBoard": {
            "status": "ok",
            "disableAt": 36000,
            "warnAt": 32400
          }
        }
      },
      "starred": true,
      "memberships": "string",
      "shortLink": "string",
      "subscribed": true,
      "powerUps": "string",
      "dateLastActivity": "1970-01-01",
      "dateLastView": "1970-01-01",
      "idTags": "string",
      "datePluginDisable": "1970-01-01",
      "creationMethod": "string",
      "ixUpdate": 0,
      "templateGallery": "string",
      "enterpriseOwned": true
    },
    "idMemberCreator": null,
    "idAction": null,
    "reactions": []
  }
]
```

<h3 id="get-members-notifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-members-notifications-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Notification](#schemanotification)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Get Member's Organizations

<a id="opIdget-members-id-organizations"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/organizations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/organizations`

Get a member's Workspaces

<h3 id="get-members-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|filter|query|string|false|One of: `all`, `members`, `none`, `public` (Note: `members` filters to only private Workspaces)|
|fields|query|[OrganizationFields](#schemaorganizationfields)|false|`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|paid_account|query|boolean|false|Whether or not to include paid account information in the returned workspace object|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|members|
|filter|none|
|filter|public|
|fields|id|
|fields|name|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "string",
    "displayName": "Organization Name",
    "dateLastActivity": "2018-10-17T19:10:14.808Z",
    "prefs": {
      "boardVisibilityRestrict": {},
      "boardDeleteRestrict": {},
      "attachmentRestrictions": [
        "computer"
      ],
      "permissionLevel": "private"
    },
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "offering": "trello.enterprise",
    "url": "https://trello.com/w/<name>",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "memberships": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "premiumFeatures": [
      "string"
    ]
  }
]
```

<h3 id="get-members-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-members-organizations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Organization](#schemaorganization)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Get Organizations a Member has been invited to

<a id="opIdget-members-id-organizationsinvited"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/organizationsInvited \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/organizationsInvited`

Get a member's Workspaces they have been invited to

<h3 id="get-organizations-a-member-has-been-invited-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|fields|query|[OrganizationFields](#schemaorganizationfields)|false|`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|name|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "string",
    "displayName": "Organization Name",
    "dateLastActivity": "2018-10-17T19:10:14.808Z",
    "prefs": {
      "boardVisibilityRestrict": {},
      "boardDeleteRestrict": {},
      "attachmentRestrictions": [
        "computer"
      ],
      "permissionLevel": "private"
    },
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "offering": "trello.enterprise",
    "url": "https://trello.com/w/<name>",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "memberships": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "premiumFeatures": [
      "string"
    ]
  }
]
```

<h3 id="get-organizations-a-member-has-been-invited-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-organizations-a-member-has-been-invited-to-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Organization](#schemaorganization)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Get Member's saved searched

<a id="opIdget-members-id-savedsearches"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/savedSearches \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/savedSearches`

List the saved searches of a Member

<h3 id="get-members-saved-searched-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

> Example responses

> 200 Response

```json
[
  {
    "id": "5589b47349b40cedc28ceae2",
    "name": "My Cards",
    "query": "@me",
    "pos": 1638
  }
]
```

<h3 id="get-members-saved-searched-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-members-saved-searched-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[SavedSearch](#schemasavedsearch)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Create saved Search for Member

<a id="opIdpost-members-id-savedsearches"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/savedSearches?name=string&query=string&pos=top' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /members/{id}/savedSearches`

Create a saved search

<h3 id="create-saved-search-for-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|The name for the saved search|
|query|query|string|true|The search query|
|pos|query|[posStringOrNumber](#schemaposstringornumber)|true|The position of the saved search. `top`, `bottom`, or a positive float.|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|

> Example responses

> 200 Response

```json
{
  "id": "5589b47349b40cedc28ceae2",
  "name": "My Cards",
  "query": "@me",
  "pos": 1638
}
```

<h3 id="create-saved-search-for-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SavedSearch](#schemasavedsearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a saved search

<a id="opIdget-members-id-savedsearches-idsearch"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/string/savedSearches/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/savedSearches/{idSearch}`

Get a saved search

<h3 id="get-a-saved-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID or username of the member|
|idSearch|path|string|true|The ID of the saved search to delete|

> Example responses

> 200 Response

```json
{
  "id": "5589b47349b40cedc28ceae2",
  "name": "My Cards",
  "query": "@me",
  "pos": 1638
}
```

<h3 id="get-a-saved-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SavedSearch](#schemasavedsearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Update a saved search

<a id="opIdput-members-id-savedsearches-idsearch"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/string/savedSearches/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /members/{id}/savedSearches/{idSearch}`

Update a saved search

<h3 id="update-a-saved-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|The new name for the saved search|
|query|query|string|false|The new search query|
|pos|query|string|false|New position for saves search. `top`, `bottom`, or a positive float.|
|id|path|string|true|The ID or username of the member|
|idSearch|path|string|true|The ID of the saved search to delete|

> Example responses

> 200 Response

```json
{
  "id": "5589b47349b40cedc28ceae2",
  "name": "My Cards",
  "query": "@me",
  "pos": 1638
}
```

<h3 id="update-a-saved-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[SavedSearch](#schemasavedsearch)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Delete a saved search

<a id="opIddelete-members-id-savedsearches-idsearch"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/string/savedSearches/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /members/{id}/savedSearches/{idSearch}`

Delete a saved search

<h3 id="delete-a-saved-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID or username of the member|
|idSearch|path|string|true|The ID of the saved search to delete|

<h3 id="delete-a-saved-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get Member's Tokens

<a id="opIdget-members-id-tokens"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/tokens \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/tokens`

List a members app tokens

<h3 id="get-members-tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|webhooks|query|boolean|false|Whether to include webhooks|

> Example responses

> 200 Response

```json
[
  {
    "id": "5da728c55235b443c5b97181",
    "identifier": "App Name",
    "idMember": "5589c3ea49b40cedc28cf70e",
    "dateCreated": "2019-10-16T14:27:17.304Z",
    "dateExpires": null,
    "permissions": [
      {
        "idModel": "5abbe4b7ddc1b351ef961414",
        "modelType": "board",
        "read": true,
        "write": true
      }
    ]
  }
]
```

<h3 id="get-members-tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-members-tokens-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Token](#schematoken)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello write:member:trello )
</aside>

## Create Avatar for Member

<a id="opIdmembersidavatar"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/members/string/avatar?file=string' \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /members/{id}/avatar`

Create a new avatar for a member

<h3 id="create-avatar-for-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID or username of the member|
|file|query|string(binary)|true|none|

<h3 id="create-avatar-for-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Dismiss a message for Member

<a id="opIdpost-members-id-onetimemessagesdismissed"></a>

> Code samples

```bash
curl "https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/oneTimeMessagesDismissed?value=5abbe4b7ddc1b351ef961414&key=${API_KEY}&token=${API_KEY}" \
  -X POST
```

`POST /members/{id}/oneTimeMessagesDismissed`

Dismiss a message

<h3 id="dismiss-a-message-for-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or username of the member|
|value|query|[TrelloID](#schematrelloid)|true|The message to dismiss|

<h3 id="dismiss-a-message-for-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey & APIToken
</aside>

## Get a Member's notification channel settings

<a id="opIdget-members-id-notificationChannelSettings"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/notificationChannelSettings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/notificationChannelSettings`

Get a member's notification channel settings

<h3 id="get-a-members-notification-channel-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|

> Example responses

> 200 Response

```json
[
  {
    "id": "5dc591ac425f2a223aba0a8e",
    "idMember": "5589c3ea49b40cedc28cf70e",
    "blockedKeys": [
      "notification_comment_card"
    ],
    "channel": "email"
  }
]
```

<h3 id="get-a-members-notification-channel-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-members-notification-channel-settings-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[NotificationChannelSettings](#schemanotificationchannelsettings)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Update blocked notification keys of Member on a channel

<a id="opIdput-members-id-notificationChannelSettings"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/notificationChannelSettings \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "channel": "email",
    "blockedKeys": "notification_comment_card"
  }'
```

`PUT /members/{id}/notificationChannelSettings`

Update blocked notification keys of Member on a specific channel

> Body parameter

```json
{
  "channel": "email",
  "blockedKeys": "notification_comment_card"
}
```

<h3 id="update-blocked-notification-keys-of-member-on-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|body|body|object|true|none|
|» channel|body|[Channel](#schemachannel)|true|none|
|» blockedKeys|body|[BlockedKey](#schemablockedkey) \| [[BlockedKey](#schemablockedkey)]|true|Blocked key or array of blocked keys.|
|» » *oneOf*|body|[BlockedKey](#schemablockedkey)|false|none|
|» » *oneOf*|body|[[BlockedKey](#schemablockedkey)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» channel|email|
|» » *oneOf*|notification_comment_card|
|» » *oneOf*|notification_added_a_due_date|
|» » *oneOf*|notification_changed_due_date|
|» » *oneOf*|notification_card_due_soon|
|» » *oneOf*|notification_removed_from_card|
|» » *oneOf*|notification_added_attachment_to_card|
|» » *oneOf*|notification_created_card|
|» » *oneOf*|notification_moved_card|
|» » *oneOf*|notification_archived_card|
|» » *oneOf*|notification_unarchived_card|
|» » *oneOf*|notification_comment_card|
|» » *oneOf*|notification_added_a_due_date|
|» » *oneOf*|notification_changed_due_date|
|» » *oneOf*|notification_card_due_soon|
|» » *oneOf*|notification_removed_from_card|
|» » *oneOf*|notification_added_attachment_to_card|
|» » *oneOf*|notification_created_card|
|» » *oneOf*|notification_moved_card|
|» » *oneOf*|notification_archived_card|
|» » *oneOf*|notification_unarchived_card|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "idMember": "5589c3ea49b40cedc28cf70e",
  "blockedKeys": [
    "notification_comment_card"
  ],
  "channel": "email"
}
```

<h3 id="update-blocked-notification-keys-of-member-on-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotificationChannelSettings](#schemanotificationchannelsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get blocked notification keys of Member on this channel

<a id="opIdget-members-id-notificationChannelSettings-channel"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/notificationChannelSettings/email \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /members/{id}/notificationChannelSettings/{channel}`

Get blocked notification keys of Member on a specific channel

<h3 id="get-blocked-notification-keys-of-member-on-this-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|channel|path|[Channel](#schemachannel)|true|Channel to block notifications on|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|email|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "idMember": "5589c3ea49b40cedc28cf70e",
  "blockedKeys": [
    "notification_comment_card"
  ],
  "channel": "email"
}
```

<h3 id="get-blocked-notification-keys-of-member-on-this-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotificationChannelSettings](#schemanotificationchannelsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:member:trello )
</aside>

## Update blocked notification keys of Member on a channel

<a id="opIdput-members-id-notificationChannelSettings-channel"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/notificationChannelSettings/email \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "blockedKeys": "notification_comment_card"
  }'
```

`PUT /members/{id}/notificationChannelSettings/{channel}`

Update blocked notification keys of Member on a specific channel

> Body parameter

```json
{
  "blockedKeys": "notification_comment_card"
}
```

<h3 id="update-blocked-notification-keys-of-member-on-a-channel-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|channel|path|[Channel](#schemachannel)|true|Channel to block notifications on|
|body|body|object|true|none|
|» blockedKeys|body|[BlockedKey](#schemablockedkey) \| [[BlockedKey](#schemablockedkey)]|true|Singular key or array of notification keys|
|» » *oneOf*|body|[BlockedKey](#schemablockedkey)|false|none|
|» » *oneOf*|body|[[BlockedKey](#schemablockedkey)]|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|email|
|» » *oneOf*|notification_comment_card|
|» » *oneOf*|notification_added_a_due_date|
|» » *oneOf*|notification_changed_due_date|
|» » *oneOf*|notification_card_due_soon|
|» » *oneOf*|notification_removed_from_card|
|» » *oneOf*|notification_added_attachment_to_card|
|» » *oneOf*|notification_created_card|
|» » *oneOf*|notification_moved_card|
|» » *oneOf*|notification_archived_card|
|» » *oneOf*|notification_unarchived_card|
|» » *oneOf*|notification_comment_card|
|» » *oneOf*|notification_added_a_due_date|
|» » *oneOf*|notification_changed_due_date|
|» » *oneOf*|notification_card_due_soon|
|» » *oneOf*|notification_removed_from_card|
|» » *oneOf*|notification_added_attachment_to_card|
|» » *oneOf*|notification_created_card|
|» » *oneOf*|notification_moved_card|
|» » *oneOf*|notification_archived_card|
|» » *oneOf*|notification_unarchived_card|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "idMember": "5589c3ea49b40cedc28cf70e",
  "blockedKeys": [
    "notification_comment_card"
  ],
  "channel": "email"
}
```

<h3 id="update-blocked-notification-keys-of-member-on-a-channel-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotificationChannelSettings](#schemanotificationchannelsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Update blocked notification keys of Member on a channel

<a id="opIdput-members-id-notificationChannelSettings-channel-blockedKeys"></a>

> Code samples

```bash
curl https://api.trello.com/1/members/5abbe4b7ddc1b351ef961414/notificationChannelSettings/email/notification_comment_card \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /members/{id}/notificationChannelSettings/{channel}/{blockedKeys}`

Update blocked notification keys of Member on a specific channel

<h3 id="update-blocked-notification-keys-of-member-on-a-channel-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member|
|channel|path|[Channel](#schemachannel)|true|Channel to block notifications on|
|blockedKeys|path|[BlockedKey](#schemablockedkey)|true|Singular key or comma-separated list of notification keys|

#### Enumerated Values

|Parameter|Value|
|---|---|
|channel|email|
|blockedKeys|notification_comment_card|
|blockedKeys|notification_added_a_due_date|
|blockedKeys|notification_changed_due_date|
|blockedKeys|notification_card_due_soon|
|blockedKeys|notification_removed_from_card|
|blockedKeys|notification_added_attachment_to_card|
|blockedKeys|notification_created_card|
|blockedKeys|notification_moved_card|
|blockedKeys|notification_archived_card|
|blockedKeys|notification_unarchived_card|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "idMember": "5589c3ea49b40cedc28cf70e",
  "blockedKeys": [
    "notification_comment_card"
  ],
  "channel": "email"
}
```

<h3 id="update-blocked-notification-keys-of-member-on-a-channel-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[NotificationChannelSettings](#schemanotificationchannelsettings)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a Notification

<a id="opIdget-notifications-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notifications/{id}`

<h3 id="get-a-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|board|query|boolean|false|Whether to include the board object|
|board_fields|query|[BoardFields](#schemaboardfields)|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|card|query|boolean|false|Whether to include the card object|
|card_fields|query|[CardFields](#schemacardfields)|false|`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|display|query|boolean|false|Whether to include the display object with the results|
|entities|query|boolean|false|Whether to include the entities object with the results|
|fields|query|[NotificationFields](#schemanotificationfields)|false|`all` or a comma-separated list of notification [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|list|query|boolean|false|Whether to include the list object|
|member|query|boolean|false|Whether to include the member object|
|member_fields|query|[MemberFields](#schemamemberfields)|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|memberCreator|query|boolean|false|Whether to include the member object of the creator|
|memberCreator_fields|query|[MemberFields](#schemamemberfields)|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|
|organization|query|boolean|false|Whether to include the organization object|
|organization_fields|query|[OrganizationFields](#schemaorganizationfields)|false|`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|board_fields|id|
|board_fields|name|
|board_fields|desc|
|board_fields|descData|
|board_fields|closed|
|board_fields|idMemberCreator|
|board_fields|idOrganization|
|board_fields|pinned|
|board_fields|url|
|board_fields|shortUrl|
|board_fields|prefs|
|board_fields|labelNames|
|board_fields|starred|
|board_fields|limits|
|board_fields|memberships|
|board_fields|enterpriseOwned|
|card_fields|id|
|card_fields|address|
|card_fields|badges|
|card_fields|checkItemStates|
|card_fields|closed|
|card_fields|coordinates|
|card_fields|creationMethod|
|card_fields|dueComplete|
|card_fields|dateLastActivity|
|card_fields|desc|
|card_fields|descData|
|card_fields|due|
|card_fields|dueReminder|
|card_fields|idBoard|
|card_fields|idChecklists|
|card_fields|idLabels|
|card_fields|idList|
|card_fields|idMembers|
|card_fields|idMembersVoted|
|card_fields|idShort|
|card_fields|idAttachmentCover|
|card_fields|labels|
|card_fields|limits|
|card_fields|locationName|
|card_fields|manualCoverAttachment|
|card_fields|name|
|card_fields|pos|
|card_fields|shortLink|
|card_fields|shortUrl|
|card_fields|subscribed|
|card_fields|url|
|card_fields|cover|
|card_fields|isTemplate|
|fields|id|
|fields|unread|
|fields|type|
|fields|date|
|fields|dateRead|
|fields|data|
|fields|card|
|fields|board|
|fields|idMemberCreator|
|fields|idAction|
|fields|reactions|
|member_fields|id|
|memberCreator_fields|id|
|organization_fields|id|
|organization_fields|name|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "unread": true,
  "type": "cardDueSoon",
  "date": "2019-11-08T16:02:52.763Z",
  "dateRead": null,
  "data": null,
  "card": {
    "id": "5abbe4b7ddc1b351ef961414",
    "address": "string",
    "badges": {
      "attachmentsByType": {
        "trello": {
          "board": 0,
          "card": 0
        }
      },
      "location": true,
      "votes": 0,
      "viewingMemberVoted": false,
      "subscribed": false,
      "fogbugz": "string",
      "checkItems": 0,
      "checkItemsChecked": 0,
      "comments": 0,
      "attachments": 0,
      "description": true,
      "due": "1970-01-01",
      "start": "1970-01-01",
      "dueComplete": true
    },
    "cardRole": "mirror",
    "checkItemStates": [
      "string"
    ],
    "closed": true,
    "coordinates": "string",
    "creationMethod": "string",
    "dateLastActivity": "2019-09-16T16:19:17.156Z",
    "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
    "descData": {
      "emoji": {}
    },
    "due": "1970-01-01",
    "dueReminder": "string",
    "idBoard": "5abbe4b7ddc1b351ef961414",
    "idChecklists": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ],
    "idLabels": [
      {
        "id": "5abbe4b7ddc1b351ef961414",
        "idBoard": "5abbe4b7ddc1b351ef961414",
        "name": "Overdue",
        "color": "yellow"
      }
    ],
    "idList": "5abbe4b7ddc1b351ef961415",
    "idMembers": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idMembersVoted": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idShort": 0,
    "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
    "labels": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "locationName": "string",
    "manualCoverAttachment": false,
    "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
    "name": "👋 What? Why? How?",
    "pos": 65535,
    "shortLink": "H0TZyzbK",
    "shortUrl": "https://trello.com/c/H0TZyzbK",
    "subscribed": false,
    "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
    "cover": {
      "idAttachment": "5abbe4b7ddc1b351ef961414",
      "color": "yellow",
      "idUploadedBackground": true,
      "size": "normal",
      "brightness": "light",
      "isTemplate": false
    }
  },
  "board": {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  },
  "idMemberCreator": null,
  "idAction": null,
  "reactions": []
}
```

<h3 id="get-a-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Notification](#schemanotification)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update a Notification's read status

<a id="opIdput-notifications-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /notifications/{id}`

Update the read status of a notification

<h3 id="update-a-notifications-read-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|unread|query|boolean|false|Whether the notification should be marked as read or not|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "unread": true,
  "type": "cardDueSoon",
  "date": "2019-11-08T16:02:52.763Z",
  "dateRead": null,
  "data": null,
  "card": {
    "id": "5abbe4b7ddc1b351ef961414",
    "address": "string",
    "badges": {
      "attachmentsByType": {
        "trello": {
          "board": 0,
          "card": 0
        }
      },
      "location": true,
      "votes": 0,
      "viewingMemberVoted": false,
      "subscribed": false,
      "fogbugz": "string",
      "checkItems": 0,
      "checkItemsChecked": 0,
      "comments": 0,
      "attachments": 0,
      "description": true,
      "due": "1970-01-01",
      "start": "1970-01-01",
      "dueComplete": true
    },
    "cardRole": "mirror",
    "checkItemStates": [
      "string"
    ],
    "closed": true,
    "coordinates": "string",
    "creationMethod": "string",
    "dateLastActivity": "2019-09-16T16:19:17.156Z",
    "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
    "descData": {
      "emoji": {}
    },
    "due": "1970-01-01",
    "dueReminder": "string",
    "idBoard": "5abbe4b7ddc1b351ef961414",
    "idChecklists": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ],
    "idLabels": [
      {
        "id": "5abbe4b7ddc1b351ef961414",
        "idBoard": "5abbe4b7ddc1b351ef961414",
        "name": "Overdue",
        "color": "yellow"
      }
    ],
    "idList": "5abbe4b7ddc1b351ef961415",
    "idMembers": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idMembersVoted": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idShort": 0,
    "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
    "labels": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "locationName": "string",
    "manualCoverAttachment": false,
    "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
    "name": "👋 What? Why? How?",
    "pos": 65535,
    "shortLink": "H0TZyzbK",
    "shortUrl": "https://trello.com/c/H0TZyzbK",
    "subscribed": false,
    "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
    "cover": {
      "idAttachment": "5abbe4b7ddc1b351ef961414",
      "color": "yellow",
      "idUploadedBackground": true,
      "size": "normal",
      "brightness": "light",
      "isTemplate": false
    }
  },
  "board": {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  },
  "idMemberCreator": null,
  "idAction": null,
  "reactions": []
}
```

<h3 id="update-a-notifications-read-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="update-a-notifications-read-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Notification](#schemanotification)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get a field of a Notification

<a id="opIdget-notifications-id-field"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414/id \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notifications/{id}/{field}`

Get a specific property of a notification

<h3 id="get-a-field-of-a-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|field|path|[NotificationFields](#schemanotificationfields)|true|A notification [field](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|id|
|field|unread|
|field|type|
|field|date|
|field|dateRead|
|field|data|
|field|card|
|field|board|
|field|idMemberCreator|
|field|idAction|
|field|reactions|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "unread": true,
  "type": "cardDueSoon",
  "date": "2019-11-08T16:02:52.763Z",
  "dateRead": null,
  "data": null,
  "card": {
    "id": "5abbe4b7ddc1b351ef961414",
    "address": "string",
    "badges": {
      "attachmentsByType": {
        "trello": {
          "board": 0,
          "card": 0
        }
      },
      "location": true,
      "votes": 0,
      "viewingMemberVoted": false,
      "subscribed": false,
      "fogbugz": "string",
      "checkItems": 0,
      "checkItemsChecked": 0,
      "comments": 0,
      "attachments": 0,
      "description": true,
      "due": "1970-01-01",
      "start": "1970-01-01",
      "dueComplete": true
    },
    "cardRole": "mirror",
    "checkItemStates": [
      "string"
    ],
    "closed": true,
    "coordinates": "string",
    "creationMethod": "string",
    "dateLastActivity": "2019-09-16T16:19:17.156Z",
    "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
    "descData": {
      "emoji": {}
    },
    "due": "1970-01-01",
    "dueReminder": "string",
    "idBoard": "5abbe4b7ddc1b351ef961414",
    "idChecklists": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ],
    "idLabels": [
      {
        "id": "5abbe4b7ddc1b351ef961414",
        "idBoard": "5abbe4b7ddc1b351ef961414",
        "name": "Overdue",
        "color": "yellow"
      }
    ],
    "idList": "5abbe4b7ddc1b351ef961415",
    "idMembers": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idMembersVoted": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idShort": 0,
    "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
    "labels": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "locationName": "string",
    "manualCoverAttachment": false,
    "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
    "name": "👋 What? Why? How?",
    "pos": 65535,
    "shortLink": "H0TZyzbK",
    "shortUrl": "https://trello.com/c/H0TZyzbK",
    "subscribed": false,
    "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
    "cover": {
      "idAttachment": "5abbe4b7ddc1b351ef961414",
      "color": "yellow",
      "idUploadedBackground": true,
      "size": "normal",
      "brightness": "light",
      "isTemplate": false
    }
  },
  "board": {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  },
  "idMemberCreator": null,
  "idAction": null,
  "reactions": []
}
```

<h3 id="get-a-field-of-a-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-field-of-a-notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Notification](#schemanotification)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Mark all Notifications as read

<a id="opIdpost-notifications-all-read"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/all/read \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /notifications/all/read`

Mark all notifications as read

<h3 id="mark-all-notifications-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|read|query|boolean|false|Boolean to specify whether to mark as read or unread (defaults to `true`, marking as read)|
|ids|query|[[TrelloID](#schematrelloid)]|false|A comma-seperated list of IDs. Allows specifying an array of notification IDs to change the read state for. This will become useful as we add grouping of notifications to the UI, with a single button to mark all notifications in the group as read/unread.|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "unread": true,
  "type": "cardDueSoon",
  "date": "2019-11-08T16:02:52.763Z",
  "dateRead": null,
  "data": null,
  "card": {
    "id": "5abbe4b7ddc1b351ef961414",
    "address": "string",
    "badges": {
      "attachmentsByType": {
        "trello": {
          "board": 0,
          "card": 0
        }
      },
      "location": true,
      "votes": 0,
      "viewingMemberVoted": false,
      "subscribed": false,
      "fogbugz": "string",
      "checkItems": 0,
      "checkItemsChecked": 0,
      "comments": 0,
      "attachments": 0,
      "description": true,
      "due": "1970-01-01",
      "start": "1970-01-01",
      "dueComplete": true
    },
    "cardRole": "mirror",
    "checkItemStates": [
      "string"
    ],
    "closed": true,
    "coordinates": "string",
    "creationMethod": "string",
    "dateLastActivity": "2019-09-16T16:19:17.156Z",
    "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
    "descData": {
      "emoji": {}
    },
    "due": "1970-01-01",
    "dueReminder": "string",
    "idBoard": "5abbe4b7ddc1b351ef961414",
    "idChecklists": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ],
    "idLabels": [
      {
        "id": "5abbe4b7ddc1b351ef961414",
        "idBoard": "5abbe4b7ddc1b351ef961414",
        "name": "Overdue",
        "color": "yellow"
      }
    ],
    "idList": "5abbe4b7ddc1b351ef961415",
    "idMembers": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idMembersVoted": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idShort": 0,
    "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
    "labels": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "locationName": "string",
    "manualCoverAttachment": false,
    "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
    "name": "👋 What? Why? How?",
    "pos": 65535,
    "shortLink": "H0TZyzbK",
    "shortUrl": "https://trello.com/c/H0TZyzbK",
    "subscribed": false,
    "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
    "cover": {
      "idAttachment": "5abbe4b7ddc1b351ef961414",
      "color": "yellow",
      "idUploadedBackground": true,
      "size": "normal",
      "brightness": "light",
      "isTemplate": false
    }
  },
  "board": {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  },
  "idMemberCreator": null,
  "idAction": null,
  "reactions": []
}
```

<h3 id="mark-all-notifications-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="mark-all-notifications-as-read-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Notification](#schemanotification)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Update Notification's read status

<a id="opIdput-notifications-id-unread"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414/unread \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /notifications/{id}/unread`

Update Notification's read status

<h3 id="update-notifications-read-status-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|value|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "unread": true,
  "type": "cardDueSoon",
  "date": "2019-11-08T16:02:52.763Z",
  "dateRead": null,
  "data": null,
  "card": {
    "id": "5abbe4b7ddc1b351ef961414",
    "address": "string",
    "badges": {
      "attachmentsByType": {
        "trello": {
          "board": 0,
          "card": 0
        }
      },
      "location": true,
      "votes": 0,
      "viewingMemberVoted": false,
      "subscribed": false,
      "fogbugz": "string",
      "checkItems": 0,
      "checkItemsChecked": 0,
      "comments": 0,
      "attachments": 0,
      "description": true,
      "due": "1970-01-01",
      "start": "1970-01-01",
      "dueComplete": true
    },
    "cardRole": "mirror",
    "checkItemStates": [
      "string"
    ],
    "closed": true,
    "coordinates": "string",
    "creationMethod": "string",
    "dateLastActivity": "2019-09-16T16:19:17.156Z",
    "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
    "descData": {
      "emoji": {}
    },
    "due": "1970-01-01",
    "dueReminder": "string",
    "idBoard": "5abbe4b7ddc1b351ef961414",
    "idChecklists": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ],
    "idLabels": [
      {
        "id": "5abbe4b7ddc1b351ef961414",
        "idBoard": "5abbe4b7ddc1b351ef961414",
        "name": "Overdue",
        "color": "yellow"
      }
    ],
    "idList": "5abbe4b7ddc1b351ef961415",
    "idMembers": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idMembersVoted": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idShort": 0,
    "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
    "labels": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "locationName": "string",
    "manualCoverAttachment": false,
    "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
    "name": "👋 What? Why? How?",
    "pos": 65535,
    "shortLink": "H0TZyzbK",
    "shortUrl": "https://trello.com/c/H0TZyzbK",
    "subscribed": false,
    "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
    "cover": {
      "idAttachment": "5abbe4b7ddc1b351ef961414",
      "color": "yellow",
      "idUploadedBackground": true,
      "size": "normal",
      "brightness": "light",
      "isTemplate": false
    }
  },
  "board": {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  },
  "idMemberCreator": null,
  "idAction": null,
  "reactions": []
}
```

<h3 id="update-notifications-read-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="update-notifications-read-status-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Notification](#schemanotification)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:member:trello )
</aside>

## Get the Board a Notification is on

<a id="opIdget-notifications-id-board"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414/board \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notifications/{id}/board`

Get the board a notification is associated with

<h3 id="get-the-board-a-notification-is-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|fields|query|[BoardFields](#schemaboardfields)|false|`all` or a comma-separated list of board[fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|name|
|fields|desc|
|fields|descData|
|fields|closed|
|fields|idMemberCreator|
|fields|idOrganization|
|fields|pinned|
|fields|url|
|fields|shortUrl|
|fields|prefs|
|fields|labelNames|
|fields|starred|
|fields|limits|
|fields|memberships|
|fields|enterpriseOwned|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "Trello Platform Changes",
  "desc": "Track changes to Trello's Platform on this board.",
  "descData": "string",
  "closed": false,
  "idMemberCreator": "5abbe4b7ddc1b351ef961414",
  "idOrganization": "5abbe4b7ddc1b351ef961414",
  "pinned": false,
  "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
  "shortUrl": "https://trello.com/b/dQHqCohZ",
  "prefs": {
    "permissionLevel": "org",
    "hideVotes": true,
    "voting": "disabled",
    "comments": "string",
    "invitations": "admins",
    "selfJoin": true,
    "cardCovers": true,
    "isTemplate": true,
    "cardAging": "pirate",
    "calendarFeedEnabled": true,
    "background": "5abbe4b7ddc1b351ef961414",
    "backgroundImage": "http://example.com",
    "backgroundImageScaled": [
      {
        "width": 100,
        "height": 64,
        "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
      }
    ],
    "backgroundTile": true,
    "backgroundBrightness": "dark",
    "backgroundBottomColor": "#1e2e00",
    "backgroundTopColor": "#ffffff",
    "canBePublic": true,
    "canBeEnterprise": true,
    "canBeOrg": true,
    "canBePrivate": true,
    "canInvite": true
  },
  "labelNames": {
    "green": "Addition",
    "yellow": "Update",
    "orange": "Deprecation",
    "red": "Deletion",
    "purple": "Power-Ups",
    "blue": "News",
    "sky": "Announcement",
    "lime": "Delight",
    "pink": "REST API",
    "black": "Capabilties"
  },
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "starred": true,
  "memberships": "string",
  "shortLink": "string",
  "subscribed": true,
  "powerUps": "string",
  "dateLastActivity": "1970-01-01",
  "dateLastView": "1970-01-01",
  "idTags": "string",
  "datePluginDisable": "1970-01-01",
  "creationMethod": "string",
  "ixUpdate": 0,
  "templateGallery": "string",
  "enterpriseOwned": true
}
```

<h3 id="get-the-board-a-notification-is-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-board-a-notification-is-on-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Board](#schemaboard)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get the Card a Notification is on

<a id="opIdget-notifications-id-card"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414/card \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notifications/{id}/card`

Get the card a notification is associated with

<h3 id="get-the-card-a-notification-is-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|fields|query|[CardFields](#schemacardfields)|false|`all` or a comma-separated list of card [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|address|
|fields|badges|
|fields|checkItemStates|
|fields|closed|
|fields|coordinates|
|fields|creationMethod|
|fields|dueComplete|
|fields|dateLastActivity|
|fields|desc|
|fields|descData|
|fields|due|
|fields|dueReminder|
|fields|idBoard|
|fields|idChecklists|
|fields|idLabels|
|fields|idList|
|fields|idMembers|
|fields|idMembersVoted|
|fields|idShort|
|fields|idAttachmentCover|
|fields|labels|
|fields|limits|
|fields|locationName|
|fields|manualCoverAttachment|
|fields|name|
|fields|pos|
|fields|shortLink|
|fields|shortUrl|
|fields|subscribed|
|fields|url|
|fields|cover|
|fields|isTemplate|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "address": "string",
  "badges": {
    "attachmentsByType": {
      "trello": {
        "board": 0,
        "card": 0
      }
    },
    "location": true,
    "votes": 0,
    "viewingMemberVoted": false,
    "subscribed": false,
    "fogbugz": "string",
    "checkItems": 0,
    "checkItemsChecked": 0,
    "comments": 0,
    "attachments": 0,
    "description": true,
    "due": "1970-01-01",
    "start": "1970-01-01",
    "dueComplete": true
  },
  "cardRole": "mirror",
  "checkItemStates": [
    "string"
  ],
  "closed": true,
  "coordinates": "string",
  "creationMethod": "string",
  "dateLastActivity": "2019-09-16T16:19:17.156Z",
  "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
  "descData": {
    "emoji": {}
  },
  "due": "1970-01-01",
  "dueReminder": "string",
  "idBoard": "5abbe4b7ddc1b351ef961414",
  "idChecklists": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ],
  "idLabels": [
    {
      "id": "5abbe4b7ddc1b351ef961414",
      "idBoard": "5abbe4b7ddc1b351ef961414",
      "name": "Overdue",
      "color": "yellow"
    }
  ],
  "idList": "5abbe4b7ddc1b351ef961415",
  "idMembers": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idMembersVoted": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idShort": 0,
  "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
  "labels": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "locationName": "string",
  "manualCoverAttachment": false,
  "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
  "name": "👋 What? Why? How?",
  "pos": 65535,
  "shortLink": "H0TZyzbK",
  "shortUrl": "https://trello.com/c/H0TZyzbK",
  "subscribed": false,
  "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
  "cover": {
    "idAttachment": "5abbe4b7ddc1b351ef961414",
    "color": "yellow",
    "idUploadedBackground": true,
    "size": "normal",
    "brightness": "light",
    "isTemplate": false
  }
}
```

<h3 id="get-the-card-a-notification-is-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-card-a-notification-is-on-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Card](#schemacard)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get the List a Notification is on

<a id="opIdget-notifications-id-list"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414/list \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notifications/{id}/list`

Get the list a notification is associated with

<h3 id="get-the-list-a-notification-is-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|fields|query|[ListFields](#schemalistfields)|false|`all` or a comma-separated list of list [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "Things to buy today",
  "closed": true,
  "pos": 0,
  "softLimit": "string",
  "idBoard": "string",
  "subscribed": true,
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  }
}
```

<h3 id="get-the-list-a-notification-is-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-list-a-notification-is-on-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TrelloList](#schematrellolist)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get the Member a Notification is about (not the creator)

<a id="opIdnotificationsidmember"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414/member \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notifications/{id}/member`

Get the member (not the creator) a notification is about

<h3 id="get-the-member-a-notification-is-about-not-the-creator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|fields|query|[MemberFields](#schemamemberfields)|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="get-the-member-a-notification-is-about-not-the-creator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-member-a-notification-is-about-not-the-creator-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Member](#schemamember)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get the Member who created the Notification

<a id="opIdget-notifications-id-membercreator"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414/memberCreator \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notifications/{id}/memberCreator`

Get the member who created the notification

<h3 id="get-the-member-who-created-the-notification-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|fields|query|[MemberFields](#schemamemberfields)|false|`all` or a comma-separated list of member [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="get-the-member-who-created-the-notification-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-member-who-created-the-notification-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Member](#schemamember)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a Notification's associated Organization

<a id="opIdget-notifications-id-organization"></a>

> Code samples

```bash
curl https://api.trello.com/1/notifications/5abbe4b7ddc1b351ef961414/organization \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /notifications/{id}/organization`

Get the organization a notification is associated with

<h3 id="get-a-notifications-associated-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the notification|
|fields|query|[OrganizationFields](#schemaorganizationfields)|false|`all` or a comma-separated list of organization [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|
|fields|name|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "string",
  "displayName": "Organization Name",
  "dateLastActivity": "2018-10-17T19:10:14.808Z",
  "prefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "offering": "trello.enterprise",
  "url": "https://trello.com/w/<name>",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "memberships": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "premiumFeatures": [
    "string"
  ]
}
```

<h3 id="get-a-notifications-associated-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-notifications-associated-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Organization](#schemaorganization)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create a new Organization

<a id="opIdpost-organizations"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/organizations?displayName=string' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations`

Create a new Workspace

<h3 id="create-a-new-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|displayName|query|string|true|The name to display for the Organization|
|desc|query|string|false|The description for the organizations|
|name|query|string|false|A string with a length of at least 3. Only lowercase letters, underscores, and numbers are allowed. If the name contains invalid characters, they will be removed. If the name conflicts with an existing name, a new name will be substituted.|
|website|query|string(url)|false|A URL starting with `http://` or `https://`|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "string",
  "displayName": "Organization Name",
  "dateLastActivity": "2018-10-17T19:10:14.808Z",
  "prefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "offering": "trello.enterprise",
  "url": "https://trello.com/w/<name>",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "memberships": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "premiumFeatures": [
    "string"
  ]
}
```

<h3 id="create-a-new-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="create-a-new-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Organization](#schemaorganization)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:organization:trello )
</aside>

## Get an Organization

<a id="opIdget-organizations-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}`

<h3 id="get-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the Organization|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "string",
  "displayName": "Organization Name",
  "dateLastActivity": "2018-10-17T19:10:14.808Z",
  "prefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "offering": "trello.enterprise",
  "url": "https://trello.com/w/<name>",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "memberships": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "premiumFeatures": [
    "string"
  ]
}
```

<h3 id="get-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Organization](#schemaorganization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Update an Organization

<a id="opIdput-organizations-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /organizations/{id}`

Update an organization

<h3 id="update-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|A new name for the organization. At least 3 lowercase letters, underscores, and numbers. Must be unique|
|displayName|query|string|false|A new displayName for the organization. Must be at least 1 character long and not begin or end with a space.|
|desc|query|string|false|A new description for the organization|
|website|query|string|false|A URL starting with `http://`, `https://`, or `null`|
|prefs/associatedDomain|query|string|false|The Google Apps domain to link this org to.|
|prefs/externalMembersDisabled|query|boolean|false|Whether non-workspace members can be added to boards inside the Workspace|
|prefs/googleAppsVersion|query|integer(int32)|false|`1` or `2`|
|prefs/boardVisibilityRestrict/org|query|string|false|Who on the Workspace can make Workspace visible boards. One of `admin`, `none`, `org`|
|prefs/boardVisibilityRestrict/private|query|string|false|Who can make private boards. One of: `admin`, `none`, `org`|
|prefs/boardVisibilityRestrict/public|query|string|false|Who on the Workspace can make public boards. One of: `admin`, `none`, `org`|
|prefs/orgInviteRestrict|query|string|false|An email address with optional wildcard characters. (E.g. `subdomain.*.trello.com`)|
|prefs/permissionLevel|query|string|false|Whether the Workspace page is publicly visible. One of: `private`, `public`|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the Organization|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "string",
  "displayName": "Organization Name",
  "dateLastActivity": "2018-10-17T19:10:14.808Z",
  "prefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "offering": "trello.enterprise",
  "url": "https://trello.com/w/<name>",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "memberships": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "premiumFeatures": [
    "string"
  ]
}
```

<h3 id="update-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Organization](#schemaorganization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:trello )
</aside>

## Delete an Organization

<a id="opIddelete-organizations-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{id}`

Delete an Organization

<h3 id="delete-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the Organization|

<h3 id="delete-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:trello )
</aside>

## Get field on Organization

<a id="opIdget-organizations-id-field"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/id \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/{field}`

<h3 id="get-field-on-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|field|path|[OrganizationFields](#schemaorganizationfields)|true|An organization [field](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|id|
|field|name|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "string",
  "displayName": "Organization Name",
  "dateLastActivity": "2018-10-17T19:10:14.808Z",
  "prefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "offering": "trello.enterprise",
  "url": "https://trello.com/w/<name>",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "memberships": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "premiumFeatures": [
    "string"
  ]
}
```

<h3 id="get-field-on-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Organization](#schemaorganization)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Get Actions for Organization

<a id="opIdget-organizations-id-actions"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/actions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/actions`

List the actions on a Workspace

<h3 id="get-actions-for-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "data": {
      "text": "Can never go wrong with bowie",
      "card": {
        "id": "5abbe4b7ddc1b351ef961414",
        "name": "Bowie",
        "idShort": 7,
        "shortLink": "3CsPkqOF"
      },
      "board": {
        "id": "5abbe4b7ddc1b351ef961414",
        "name": "Mullets",
        "shortLink": "3CsPkqOF"
      },
      "list": {
        "id": "5abbe4b7ddc1b351ef961414",
        "name": "Amazing"
      }
    },
    "type": "commentCard",
    "date": "2020-03-09T19:41:51.396Z",
    "limits": {
      "reactions": {
        "perAction": {
          "status": "ok",
          "disableAt": 1000,
          "warnAt": 900
        },
        "uniquePerAction": {
          "status": "ok",
          "disableAt": 1000,
          "warnAt": 900
        }
      }
    },
    "display": {
      "translationKey": "action_comment_on_card",
      "entities": {
        "contextOn": {
          "type": "translatable",
          "translationKey": "action_on",
          "hideIfContext": true,
          "idContext": "5abbe4b7ddc1b351ef961414"
        },
        "card": {
          "type": "card",
          "hideIfContext": true,
          "id": "5abbe4b7ddc1b351ef961414",
          "shortLink": "3CsPkqOF",
          "text": "Bowie"
        },
        "comment": {
          "type": "comment",
          "text": "Can never go wrong with bowie"
        },
        "memberCreator": {
          "type": "member",
          "id": "5abbe4b7ddc1b351ef961414",
          "username": "bobloblaw",
          "text": "Bob Loblaw (World)"
        }
      }
    },
    "memberCreator": {
      "id": "5b02e7f4e1facdc393169f9d",
      "activityBlocked": false,
      "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45",
      "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
      "fullName": "Bob Loblaw (Trello)",
      "idMemberReferrer": null,
      "initials": "BL",
      "username": "bobloblaw"
    }
  }
]
```

<h3 id="get-actions-for-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-actions-for-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Action](#schemaaction)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Get Boards in an Organization

<a id="opIdget-organizations-id-boards"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/boards \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/boards`

List the boards in a Workspace

<h3 id="get-boards-in-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|filter|query|string|false|`all` or a comma-separated list of: `open`, `closed`, `members`, `organization`, `public`|
|fields|query|[BoardFields](#schemaboardfields)|false|`all` or a comma-separated list of board [fields](/cloud/trello/guides/rest-api/object-definitions/)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|open|
|filter|closed|
|filter|members|
|filter|organization|
|filter|public|
|fields|id|
|fields|name|
|fields|desc|
|fields|descData|
|fields|closed|
|fields|idMemberCreator|
|fields|idOrganization|
|fields|pinned|
|fields|url|
|fields|shortUrl|
|fields|prefs|
|fields|labelNames|
|fields|starred|
|fields|limits|
|fields|memberships|
|fields|enterpriseOwned|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  }
]
```

<h3 id="get-boards-in-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-boards-in-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Board](#schemaboard)]|false|none|none|
|» *oneOf*|[Board](#schemaboard)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello )
</aside>

## Retrieve Organization's Exports

<a id="opIdget-organizations-id-exports"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/exports \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/exports`

Retrieve the exports that exist for the given organization

<h3 id="retrieve-organizations-exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the Workspace|

> Example responses

> 200 Response

```json
[
  {
    "id": "5dced8665015383ed5ca248c",
    "status": {
      "attempts": 0,
      "finished": false,
      "stage": "Export_queued"
    },
    "startedAt": "2019-11-15T16:55:02.000Z",
    "size": null,
    "exportUrl": null
  }
]
```

<h3 id="retrieve-organizations-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="retrieve-organizations-exports-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Export](#schemaexport)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Create Export for Organizations

<a id="opIdpost-organizations-id-exports"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/exports \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations/{id}/exports`

Kick off CSV export for an organization

<h3 id="create-export-for-organizations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|attachments|query|boolean|false|Whether the CSV should include attachments or not.|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the Workspace|

> Example responses

> 200 Response

```json
{
  "id": "5dced8665015383ed5ca248c",
  "status": {
    "attempts": 0,
    "finished": false,
    "stage": "Export_queued"
  },
  "startedAt": "2019-11-15T16:55:02.000Z",
  "size": null,
  "exportUrl": null
}
```

<h3 id="create-export-for-organizations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Export](#schemaexport)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:trello )
</aside>

## Get the Members of an Organization

<a id="opIdget-organizations-id-members"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/members`

List the members in a Workspace

<h3 id="get-the-members-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the Organization|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "activityBlocked": false,
    "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
    "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
    "bio": "👋 I'm a developer advocate at Trello!",
    "bioData": {
      "emoji": {}
    },
    "confirmed": true,
    "fullName": "Bentley Cook",
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "idEnterprisesDeactivated": [
      "string"
    ],
    "idMemberReferrer": null,
    "idPremOrgsAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "initials": "BC",
    "memberType": "normal",
    "nonPublic": {
      "fullName": "Bentley Cook",
      "initials": "BC",
      "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
      "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
    },
    "nonPublicAvailable": false,
    "products": [
      0
    ],
    "url": "https://trello.com/bentleycook",
    "username": "bentleycook",
    "status": "disconnected",
    "aaEmail": null,
    "aaEnrolledDate": null,
    "aaId": null,
    "avatarSource": "gravatar",
    "email": "bcook@atlassian.com",
    "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idOrganizations": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idEnterprisesAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "status": "ok",
      "disableAt": 36000,
      "warnAt": 32400
    },
    "loginTypes": [
      "password"
    ],
    "marketingOptIn": {
      "optedIn": false,
      "date": "2018-04-26T17:03:25.155Z"
    },
    "messagesDismissed": {
      "name": "ad-security-features",
      "count": 4,
      "lastDismissed": "2019-03-11T20:19:46.809Z",
      "_id": "5995d44573d197eada632a32"
    },
    "oneTimeMessagesDismissed": [
      "string"
    ],
    "prefs": {
      "timezoneInfo": {
        "offsetCurrent": 360,
        "timezoneCurrent": "CST",
        "offsetNext": 300,
        "dateNext": "2020-03-08T08:00:00.000Z",
        "timezoneNext": "CDT"
      },
      "privacy": {
        "fullName": "public",
        "avatar": "public"
      },
      "sendSummaries": true,
      "minutesBetweenSummaries": 60,
      "minutesBeforeDeadlineToNotify": 1440,
      "colorBlind": true,
      "locale": "en-AU",
      "timezone": "America/Chicago",
      "twoFactor": {
        "enabled": true,
        "needsNewBackups": false
      }
    },
    "trophies": [
      "string"
    ],
    "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
    "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
    "premiumFeatures": [
      "string"
    ],
    "isAaMastered": false,
    "ixUpdate": "48427",
    "idBoardsPinned": [
      "5abbe4b7ddc1b351ef961414"
    ]
  }
]
```

<h3 id="get-the-members-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-members-of-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Member](#schemamember)]|false|none|none|
|» *oneOf*|[Member](#schemamember)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Update an Organization's Members

<a id="opIdput-organizations-id-members"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/members?email=user%40example.com&fullName=string' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /organizations/{id}/members`

<h3 id="update-an-organizations-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|email|query|string(email)|true|An email address|
|fullName|query|string|true|Name for the member, at least 1 character not beginning or ending with a space|
|type|query|string|false|One of: `admin`, `normal`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|admin|
|type|normal|

<h3 id="update-an-organizations-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:organization:membership:trello )
</aside>

## Get Memberships of an Organization

<a id="opIdget-organizations-id-memberships"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/memberships`

List the memberships of a Workspace

<h3 id="get-memberships-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|filter|query|string|false|`all` or a comma-separated list of: `active`, `admin`, `deactivated`, `me`, `normal`|
|member|query|boolean|false|Whether to include the Member objects with the Memberships|

#### Enumerated Values

|Parameter|Value|
|---|---|
|filter|all|
|filter|active|
|filter|admin|
|filter|deactivated|
|filter|me|
|filter|normal|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414"
  }
]
```

<h3 id="get-memberships-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-memberships-of-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Memberships](#schemamemberships)]|false|none|none|
|» *oneOf*|[Memberships](#schemamemberships)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Get a Membership of an Organization

<a id="opIdget-organizations-id-memberships-idmembership"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/memberships/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/memberships/{idMembership}`

Get a single Membership for an Organization

<h3 id="get-a-membership-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|idMembership|path|[TrelloID](#schematrelloid)|true|The ID of the membership to load|
|member|query|boolean|false|Whether to include the Member object in the response|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="get-a-membership-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-a-membership-of-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Memberships](#schemamemberships)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Get the pluginData Scoped to Organization

<a id="opIdget-organizations-id-plugindata"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/pluginData \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/pluginData`

Get organization scoped pluginData on this Workspace

<h3 id="get-the-plugindata-scoped-to-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|

> Example responses

> 200 Response

```json
[
  {
    "id": "5c487f39294cab6ac1d6b305",
    "idPlugin": "55a5d915446f517774210003",
    "scope": "organization",
    "idModel": "586e8d7b1af892b26d5b76b1",
    "value": "{\"token\":\"S=s458:U=bda7cda:E=16fd2e21f55:C=1687b30f2c0:P=185:A=it-team-0604:V=2:H=3b0f3bac9c2a2af766202ebb9530a4a5\"}",
    "access": "private"
  }
]
```

<h3 id="get-the-plugindata-scoped-to-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-the-plugindata-scoped-to-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PluginData](#schemaplugindata)]|false|none|none|
|» *oneOf*|[PluginData](#schemaplugindata)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Get Tags of an Organization

<a id="opIdget-organizations-id-tags"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/string/tags \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/tags`

List the organization's collections

<h3 id="get-tags-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| [TrelloID](#schematrelloid)|true|The ID or name of the Organization|

> Example responses

> 200 Response

```json
[
  {
    "id": "58dd6dcaf8b86744d3cb4cde",
    "name": "My Collection"
  }
]
```

<h3 id="get-tags-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-tags-of-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tag](#schematag)]|false|none|none|
|» *oneOf*|[Tag](#schematag)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Create a Tag in Organization

<a id="opIdpost-organizations-id-tags"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/string/tags \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations/{id}/tags`

Create a Tag in an Organization

<h3 id="create-a-tag-in-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string \| [TrelloID](#schematrelloid)|true|The ID or name of the Organization|

> Example responses

> 200 Response

```json
{
  "id": "58dd6dcaf8b86744d3cb4cde",
  "name": "My Collection"
}
```

<h3 id="create-a-tag-in-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="create-a-tag-in-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Tag](#schematag)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:organization:trello )
</aside>

## Update a Member of an Organization

<a id="opIdput-organizations-id-members-idmember"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/members/string?type=admin' \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /organizations/{id}/members/{idMember}`

Add a member to a Workspace or update their member type.

<h3 id="update-a-member-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|idMember|path|string \| [TrelloID](#schematrelloid)|true|The ID or username of the member to update|
|type|query|string|true|One of: `admin`, `normal`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|admin|
|type|normal|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="update-a-member-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="update-a-member-of-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Member](#schemamember)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:membership:trello )
</aside>

## Remove a Member from an Organization

<a id="opIddelete-organizations-id-members"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/members/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{id}/members/{idMember}`

Remove a member from a Workspace

<h3 id="remove-a-member-from-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid) \| string|true|The ID or name of the organization|
|idMember|path|[TrelloID](#schematrelloid)|true|The ID of the Member to remove from the Workspace|

<h3 id="remove-a-member-from-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:organization:membership:trello )
</aside>

## Deactivate or reactivate a member of an Organization

<a id="opIdput-organizations-id-members-idmember-deactivated"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/members/5abbe4b7ddc1b351ef961414/deactivated?value=true' \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /organizations/{id}/members/{idMember}/deactivated`

Deactivate or reactivate a member of a Workspace

<h3 id="deactivate-or-reactivate-a-member-of-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|idMember|path|[TrelloID](#schematrelloid) \| string|true|The ID or username of the member to update|
|value|query|boolean|true|none|

<h3 id="deactivate-or-reactivate-a-member-of-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:membership:trello )
</aside>

## Update logo for an Organization

<a id="opIdpost-organizations-id-logo"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/logo \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /organizations/{id}/logo`

Set the logo image for a Workspace

<h3 id="update-logo-for-an-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the Workspace|
|file|query|string(binary)|false|Image file for the logo|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "string",
  "displayName": "Organization Name",
  "dateLastActivity": "2018-10-17T19:10:14.808Z",
  "prefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "offering": "trello.enterprise",
  "url": "https://trello.com/w/<name>",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "memberships": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "premiumFeatures": [
    "string"
  ]
}
```

<h3 id="update-logo-for-an-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="update-logo-for-an-organization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[Organization](#schemaorganization)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:trello )
</aside>

## Delete Logo for Organization

<a id="opIddelete-organizations-id-logo"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/logo \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{id}/logo`

Delete a the logo from a Workspace

<h3 id="delete-logo-for-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|

<h3 id="delete-logo-for-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:trello )
</aside>

## Remove a Member from an Organization and all Organization Boards

<a id="opIdorganizations-id-members-idmember-all"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/members/5abbe4b7ddc1b351ef961414/all \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{id}/members/{idMember}/all`

Remove a member from a Workspace and from all Workspace boards

<h3 id="remove-a-member-from-an-organization-and-all-organization-boards-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|idMember|path|[TrelloID](#schematrelloid)|true|The ID of the member to remove from the Workspace|

<h3 id="remove-a-member-from-an-organization-and-all-organization-boards-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:membership:trello )
</aside>

## Remove the associated Google Apps domain from a Workspace

<a id="opIddelete-organizations-id-prefs-associateddomain"></a>

> Code samples

```bash
curl "https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/prefs/associatedDomain?key=${API_KEY}&token=${API_KEY}" \
  -X DELETE
```

`DELETE /organizations/{id}/prefs/associatedDomain`

Remove the associated Google Apps domain from a Workspace

<h3 id="remove-the-associated-google-apps-domain-from-a-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|

<h3 id="remove-the-associated-google-apps-domain-from-a-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
APIKey & APIToken
</aside>

## Delete the email domain restriction on who can be invited to the Workspace

<a id="opIddelete-organizations-id-prefs-orginviterestrict"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/prefs/orgInviteRestrict \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{id}/prefs/orgInviteRestrict`

Remove the email domain restriction on who can be invited to the Workspace

<h3 id="delete-the-email-domain-restriction-on-who-can-be-invited-to-the-workspace-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|

<h3 id="delete-the-email-domain-restriction-on-who-can-be-invited-to-the-workspace-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:trello )
</aside>

## Delete an Organization's Tag

<a id="opIddelete-organizations-id-tags-idtag"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/string/tags/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/{id}/tags/{idTag}`

Delete an organization's tag

<h3 id="delete-an-organizations-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID or name of the organization|
|idTag|path|string|true|The ID of the tag to delete|

<h3 id="delete-an-organizations-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:organization:trello )
</aside>

## Get Organizations new billable guests

<a id="opIdget-organizations-id-newbillableguests-idboard"></a>

> Code samples

```bash
curl https://api.trello.com/1/organizations/5abbe4b7ddc1b351ef961414/newBillableGuests/5abbe4b7ddc1b351ef961414 \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/{id}/newBillableGuests/{idBoard}`

Used to check whether the given board has new billable guests on it.

<h3 id="get-organizations-new-billable-guests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|
|idBoard|path|[TrelloID](#schematrelloid)|true|The ID of the board to check for new billable guests.|

<h3 id="get-organizations-new-billable-guests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:board:trello read:organization:trello )
</aside>

## Get a Plugin

<a id="opIdget-plugins-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/plugins/5abbe4b7ddc1b351ef961414/ \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /plugins/{id}/`

Get plugins

<h3 id="get-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="get-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Plugin](#schemaplugin)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello )
</aside>

## Update a Plugin

<a id="opIdput-plugins-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/plugins/5abbe4b7ddc1b351ef961414/ \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /plugins/{id}/`

Update a Plugin

<h3 id="update-a-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID or name of the organization|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

<h3 id="update-a-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Plugin](#schemaplugin)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: read:organization:trello write:organization:trello )
</aside>

## Create a Listing for Plugin

<a id="opIdpost-plugins-idplugin-listing"></a>

> Code samples

```bash
curl https://api.trello.com/1/plugins/5abbe4b7ddc1b351ef961414/listings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "locale": "string",
    "overview": "string",
    "name": "string"
  }'
```

`POST /plugins/{idPlugin}/listings`

Create a new listing for a given locale for your Power-Up

> Body parameter

```json
{
  "description": "string",
  "locale": "string",
  "overview": "string",
  "name": "string"
}
```

<h3 id="create-a-listing-for-plugin-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idPlugin|path|[TrelloID](#schematrelloid)|true|The ID of the Power-Up for which you are creating a new listing.|
|body|body|object|false|none|
|» description|body|string|false|The description to show for the given locale|
|» locale|body|string|false|The locale that this listing should be displayed for.|
|» overview|body|string|false|The overview to show for the given locale.|
|» name|body|string|false|The name to use for the given locale.|

> Example responses

> 200 Response

```json
{
  "id": "5a7cd2f8f99c517f58da1579",
  "name": "Attachment Section Example",
  "locale": "en-US",
  "description": "The [Glitch](https://glitch.com) Power-Up allows you to...",
  "overview": ""
}
```

<h3 id="create-a-listing-for-plugin-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PluginListing](#schemapluginlisting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:organization:trello )
</aside>

## Get Plugin's Member privacy compliance

<a id="opIdget-plugins-id-compliance-memberprivacy"></a>

> Code samples

```bash
curl https://api.trello.com/1/plugins/5abbe4b7ddc1b351ef961414/compliance/memberPrivacy \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /plugins/{id}/compliance/memberPrivacy`

<h3 id="get-plugins-member-privacy-compliance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|The ID of the Power-Up|

<h3 id="get-plugins-member-privacy-compliance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Updating Plugin's Listing

<a id="opIdput-plugins-idplugin-listings-idlisting"></a>

> Code samples

```bash
curl https://api.trello.com/1/plugins/5abbe4b7ddc1b351ef961414/listings/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "locale": "string",
    "overview": "string",
    "name": "string"
  }'
```

`PUT /plugins/{idPlugin}/listings/{idListing}`

Update an existing listing for your Power-Up

> Body parameter

```json
{
  "description": "string",
  "locale": "string",
  "overview": "string",
  "name": "string"
}
```

<h3 id="updating-plugins-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|idPlugin|path|[TrelloID](#schematrelloid)|true|The ID of the Power-Up whose listing is being updated.|
|idListing|path|[TrelloID](#schematrelloid)|true|The ID of the existing listing for the Power-Up that is being updated.|
|body|body|object|false|none|
|» description|body|string|false|The description to show for the given locale|
|» locale|body|string|false|The locale that this listing should be displayed for.|
|» overview|body|string|false|The overview to show for the given locale.|
|» name|body|string|false|The name to use for the given locale.|

> Example responses

> 200 Response

```json
{
  "id": "5a7cd2f8f99c517f58da1579",
  "name": "Attachment Section Example",
  "locale": "en-US",
  "description": "The [Glitch](https://glitch.com) Power-Up allows you to...",
  "overview": ""
}
```

<h3 id="updating-plugins-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[PluginListing](#schemapluginlisting)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: write:organization:trello )
</aside>

## Search Trello

<a id="opIdget-search"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/search?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search`

Find what you're looking for in Trello

<h3 id="search-trello-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search query with a length of 1 to 16384 characters|
|idBoards|query|string \| [TrelloID](#schematrelloid)|false|`mine` or a comma-separated list of Board IDs|
|idOrganizations|query|string|false|A comma-separated list of Organization IDs|
|idCards|query|string|false|A comma-separated list of Card IDs|
|modelTypes|query|string|false|What type or types of Trello objects you want to search. all or a comma-separated list of: `actions`, `boards`, `cards`, `members`, `organizations`|
|board_fields|query|string|false|all or a comma-separated list of: `closed`, `dateLastActivity`, `dateLastView`, `desc`, `descData`, `idOrganization`, `invitations`, `invited`, `labelNames`, `memberships`, `name`, `pinned`, `powerUps`, `prefs`, `shortLink`, `shortUrl`, `starred`, `subscribed`, `url`|
|boards_limit|query|integer|false|The maximum number of boards returned. Maximum: 1000|
|board_organization|query|boolean|false|Whether to include the parent organization with board results|
|card_fields|query|string|false|all or a comma-separated list of: `badges`, `checkItemStates`, `closed`, `dateLastActivity`, `desc`, `descData`, `due`, `idAttachmentCover`, `idBoard`, `idChecklists`, `idLabels`, `idList`, `idMembers`, `idMembersVoted`, `idShort`, `labels`, `manualCoverAttachment`, `name`, `pos`, `shortLink`, `shortUrl`, `subscribed`, `url`|
|cards_limit|query|integer|false|The maximum number of cards to return. Maximum: 1000|
|cards_page|query|number|false|The page of results for cards. Maximum: 100|
|card_board|query|boolean|false|Whether to include the parent board with card results|
|card_list|query|boolean|false|Whether to include the parent list with card results|
|card_members|query|boolean|false|Whether to include member objects with card results|
|card_stickers|query|boolean|false|Whether to include sticker objects with card results|
|card_attachments|query|string|false|Whether to include attachment objects with card results. A boolean value (true or false) or cover for only card cover attachments.|
|organization_fields|query|string|false|all or a comma-separated list of billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url, website|
|organizations_limit|query|integer(int32)|false|The maximum number of Workspaces to return. Maximum 1000|
|member_fields|query|string|false|all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url, username|
|members_limit|query|integer(int32)|false|The maximum number of members to return. Maximum 1000|
|partial|query|boolean|false|By default, Trello searches for each word in your query against exactly matching words within Member content. Specifying partial to be true means that we will look for content that starts with any of the words in your query.  If you are looking for a Card titled "My Development Status Report", by default you would need to search for "Development". If you have partial enabled, you will be able to search for "dev" but not "velopment".|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "activityBlocked": false,
    "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
    "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
    "bio": "👋 I'm a developer advocate at Trello!",
    "bioData": {
      "emoji": {}
    },
    "confirmed": true,
    "fullName": "Bentley Cook",
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "idEnterprisesDeactivated": [
      "string"
    ],
    "idMemberReferrer": null,
    "idPremOrgsAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "initials": "BC",
    "memberType": "normal",
    "nonPublic": {
      "fullName": "Bentley Cook",
      "initials": "BC",
      "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
      "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
    },
    "nonPublicAvailable": false,
    "products": [
      0
    ],
    "url": "https://trello.com/bentleycook",
    "username": "bentleycook",
    "status": "disconnected",
    "aaEmail": null,
    "aaEnrolledDate": null,
    "aaId": null,
    "avatarSource": "gravatar",
    "email": "bcook@atlassian.com",
    "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idOrganizations": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idEnterprisesAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "status": "ok",
      "disableAt": 36000,
      "warnAt": 32400
    },
    "loginTypes": [
      "password"
    ],
    "marketingOptIn": {
      "optedIn": false,
      "date": "2018-04-26T17:03:25.155Z"
    },
    "messagesDismissed": {
      "name": "ad-security-features",
      "count": 4,
      "lastDismissed": "2019-03-11T20:19:46.809Z",
      "_id": "5995d44573d197eada632a32"
    },
    "oneTimeMessagesDismissed": [
      "string"
    ],
    "prefs": {
      "timezoneInfo": {
        "offsetCurrent": 360,
        "timezoneCurrent": "CST",
        "offsetNext": 300,
        "dateNext": "2020-03-08T08:00:00.000Z",
        "timezoneNext": "CDT"
      },
      "privacy": {
        "fullName": "public",
        "avatar": "public"
      },
      "sendSummaries": true,
      "minutesBetweenSummaries": 60,
      "minutesBeforeDeadlineToNotify": 1440,
      "colorBlind": true,
      "locale": "en-AU",
      "timezone": "America/Chicago",
      "twoFactor": {
        "enabled": true,
        "needsNewBackups": false
      }
    },
    "trophies": [
      "string"
    ],
    "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
    "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
    "premiumFeatures": [
      "string"
    ],
    "isAaMastered": false,
    "ixUpdate": "48427",
    "idBoardsPinned": [
      "5abbe4b7ddc1b351ef961414"
    ]
  }
]
```

<h3 id="search-trello-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="search-trello-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Member](#schemamember) \| [Card](#schemacard) \| [Board](#schemaboard) \| [Organization](#schemaorganization)]|false|none|none|
|» *oneOf*|[Member](#schemamember)|false|none|none|
|» *oneOf*|[Card](#schemacard)|false|none|none|
|» *oneOf*|[Board](#schemaboard)|false|none|none|
|» *oneOf*|[Organization](#schemaorganization)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Search for Members

<a id="opIdget-search-members"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/search/members/?query=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /search/members/`

Search for Trello members.

<h3 id="search-for-members-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|Search query 1 to 16384 characters long|
|limit|query|integer(int32)|false|The maximum number of results to return. Maximum of 20.|
|idBoard|query|[TrelloID](#schematrelloid)|false|none|
|idOrganization|query|[TrelloID](#schematrelloid)|false|none|
|onlyOrgMembers|query|boolean|false|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "5abbe4b7ddc1b351ef961414",
    "activityBlocked": false,
    "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
    "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
    "bio": "👋 I'm a developer advocate at Trello!",
    "bioData": {
      "emoji": {}
    },
    "confirmed": true,
    "fullName": "Bentley Cook",
    "idEnterprise": "5abbe4b7ddc1b351ef961414",
    "idEnterprisesDeactivated": [
      "string"
    ],
    "idMemberReferrer": null,
    "idPremOrgsAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "initials": "BC",
    "memberType": "normal",
    "nonPublic": {
      "fullName": "Bentley Cook",
      "initials": "BC",
      "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
      "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
    },
    "nonPublicAvailable": false,
    "products": [
      0
    ],
    "url": "https://trello.com/bentleycook",
    "username": "bentleycook",
    "status": "disconnected",
    "aaEmail": null,
    "aaEnrolledDate": null,
    "aaId": null,
    "avatarSource": "gravatar",
    "email": "bcook@atlassian.com",
    "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
    "idBoards": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idOrganizations": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idEnterprisesAdmin": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "status": "ok",
      "disableAt": 36000,
      "warnAt": 32400
    },
    "loginTypes": [
      "password"
    ],
    "marketingOptIn": {
      "optedIn": false,
      "date": "2018-04-26T17:03:25.155Z"
    },
    "messagesDismissed": {
      "name": "ad-security-features",
      "count": 4,
      "lastDismissed": "2019-03-11T20:19:46.809Z",
      "_id": "5995d44573d197eada632a32"
    },
    "oneTimeMessagesDismissed": [
      "string"
    ],
    "prefs": {
      "timezoneInfo": {
        "offsetCurrent": 360,
        "timezoneCurrent": "CST",
        "offsetNext": 300,
        "dateNext": "2020-03-08T08:00:00.000Z",
        "timezoneNext": "CDT"
      },
      "privacy": {
        "fullName": "public",
        "avatar": "public"
      },
      "sendSummaries": true,
      "minutesBetweenSummaries": 60,
      "minutesBeforeDeadlineToNotify": 1440,
      "colorBlind": true,
      "locale": "en-AU",
      "timezone": "America/Chicago",
      "twoFactor": {
        "enabled": true,
        "needsNewBackups": false
      }
    },
    "trophies": [
      "string"
    ],
    "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
    "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
    "premiumFeatures": [
      "string"
    ],
    "isAaMastered": false,
    "ixUpdate": "48427",
    "idBoardsPinned": [
      "5abbe4b7ddc1b351ef961414"
    ]
  }
]
```

<h3 id="search-for-members-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="search-for-members-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Member](#schemamember)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a Token

<a id="opIdget-tokens-token"></a>

> Code samples

```bash
curl https://api.trello.com/1/tokens/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tokens/{token}`

Retrieve information about a token.

<h3 id="get-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|
|fields|query|[TokenFields](#schematokenfields)|false|`all` or a comma-separated list of `dateCreated`, `dateExpires`, `idMember`, `identifier`, `permissions`|
|webhooks|query|boolean|false|Determines whether to include webhooks.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|identifier|
|fields|idMember|
|fields|dateCreated|
|fields|dateExpires|
|fields|permissions|

> Example responses

> 200 Response

```json
{
  "id": "5da728c55235b443c5b97181",
  "identifier": "App Name",
  "idMember": "5589c3ea49b40cedc28cf70e",
  "dateCreated": "2019-10-16T14:27:17.304Z",
  "dateExpires": null,
  "permissions": [
    {
      "idModel": "5abbe4b7ddc1b351ef961414",
      "modelType": "board",
      "read": true,
      "write": true
    }
  ]
}
```

<h3 id="get-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Token](#schematoken)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Token's Member

<a id="opIdget-tokens-token-member"></a>

> Code samples

```bash
curl https://api.trello.com/1/tokens/string/member \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tokens/{token}/member`

Retrieve information about a token's owner by token.

<h3 id="get-tokens-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|
|fields|query|[MemberFields](#schemamemberfields)|false|`all` or a comma-separated list of valid fields for [Member Object](/cloud/trello/guides/rest-api/object-definitions/).|

#### Enumerated Values

|Parameter|Value|
|---|---|
|fields|id|

> Example responses

> 200 Response

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

<h3 id="get-tokens-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Member](#schemamember)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get Webhooks for Token

<a id="opIdget-tokens-token-webhooks"></a>

> Code samples

```bash
curl https://api.trello.com/1/tokens/string/webhooks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tokens/{token}/webhooks`

Retrieve all webhooks created with a Token.

<h3 id="get-webhooks-for-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "id": "58dd6dcaf8b86744d3cb4cde",
    "description": "Board Webhook",
    "idModel": "59cd149051aa57a706962996",
    "callbackURL": "https://mywebhookurl.com/?type=board",
    "active": true,
    "consecutiveFailures": 0,
    "firstConsecutiveFailDate": null
  }
]
```

<h3 id="get-webhooks-for-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="get-webhooks-for-token-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Webhook](#schemawebhook)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create Webhooks for Token

<a id="opIdpost-tokens-token-webhooks"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/tokens/string/webhooks?callbackURL=http%3A%2F%2Fexample.com&idModel=5abbe4b7ddc1b351ef961414' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /tokens/{token}/webhooks`

Create a new webhook for a Token.

<h3 id="create-webhooks-for-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|description|query|string|false|A description to be displayed when retrieving information about the webhook.|
|callbackURL|query|string(url)|true|The URL that the webhook should POST information to.|
|idModel|query|[TrelloID](#schematrelloid)|true|ID of the object to create a webhook on.|
|token|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "id": "58dd6dcaf8b86744d3cb4cde",
  "description": "Board Webhook",
  "idModel": "59cd149051aa57a706962996",
  "callbackURL": "https://mywebhookurl.com/?type=board",
  "active": true,
  "consecutiveFailures": 0,
  "firstConsecutiveFailDate": null
}
```

<h3 id="create-webhooks-for-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a Webhook belonging to a Token

<a id="opIdget-tokens-token-webhooks-idwebhook"></a>

> Code samples

```bash
curl https://api.trello.com/1/tokens/string/webhooks/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /tokens/{token}/webhooks/{idWebhook}`

Retrieve a webhook created with a Token.

<h3 id="get-a-webhook-belonging-to-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|
|idWebhook|path|[TrelloID](#schematrelloid)|true|ID of the [Webhooks](ref:webhooks) to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "58dd6dcaf8b86744d3cb4cde",
  "description": "Board Webhook",
  "idModel": "59cd149051aa57a706962996",
  "callbackURL": "https://mywebhookurl.com/?type=board",
  "active": true,
  "consecutiveFailures": 0,
  "firstConsecutiveFailDate": null
}
```

<h3 id="get-a-webhook-belonging-to-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update a Webhook created by Token

<a id="opIdtokenstokenwebhooks-1"></a>

> Code samples

```bash
curl https://api.trello.com/1/tokens/string/webhooks/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /tokens/{token}/webhooks/{idWebhook}`

Update a Webhook created by Token

<h3 id="update-a-webhook-created-by-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|description|query|string|false|A description to be displayed when retrieving information about the webhook.|
|callbackURL|query|string(url)|false|The URL that the webhook should `POST` information to.|
|idModel|query|[TrelloID](#schematrelloid)|false|ID of the object that the webhook is on.|
|token|path|string|true|none|
|idWebhook|path|[TrelloID](#schematrelloid)|true|ID of the [Webhooks](ref:webhooks) to retrieve.|

<h3 id="update-a-webhook-created-by-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a Webhook created by Token

<a id="opIddelete-tokens-token-webhooks-idwebhook"></a>

> Code samples

```bash
curl https://api.trello.com/1/tokens/string/webhooks/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tokens/{token}/webhooks/{idWebhook}`

Delete a webhook created with given token.

<h3 id="delete-a-webhook-created-by-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|
|idWebhook|path|[TrelloID](#schematrelloid)|true|ID of the [Webhooks](ref:webhooks) to retrieve.|

<h3 id="delete-a-webhook-created-by-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a Token

<a id="opIddelete-token"></a>

> Code samples

```bash
curl https://api.trello.com/1/tokens/string/ \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /tokens/{token}/`

Delete a token.

<h3 id="delete-a-token-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token|path|string|true|none|

<h3 id="delete-a-token-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Create a Webhook

<a id="opIdpost-webhooks"></a>

> Code samples

```bash
curl 'https://api.trello.com/1/webhooks/?callbackURL=http%3A%2F%2Fexample.com&idModel=5abbe4b7ddc1b351ef961414' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /webhooks/`

Create a new webhook.

<h3 id="create-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|description|query|string|false|A string with a length from `0` to `16384`.|
|callbackURL|query|string(url)|true|A valid URL that is reachable with a `HEAD` and `POST` request.|
|idModel|query|[TrelloID](#schematrelloid)|true|ID of the model to be monitored|
|active|query|boolean|false|Determines whether the webhook is active and sending `POST` requests.|

> Example responses

> 200 Response

```json
{
  "id": "58dd6dcaf8b86744d3cb4cde",
  "description": "Board Webhook",
  "idModel": "59cd149051aa57a706962996",
  "callbackURL": "https://mywebhookurl.com/?type=board",
  "active": true,
  "consecutiveFailures": 0,
  "firstConsecutiveFailDate": null
}
```

<h3 id="create-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a Webhook

<a id="opIdget-webhooks-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/webhooks/5abbe4b7ddc1b351ef961414 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{id}`

Get a webhook by ID. You must use the token query parameter and pass in the token the webhook was created under, or else you will encounter a 'webhook does not belong to token' error.

<h3 id="get-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the webhook to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "58dd6dcaf8b86744d3cb4cde",
  "description": "Board Webhook",
  "idModel": "59cd149051aa57a706962996",
  "callbackURL": "https://mywebhookurl.com/?type=board",
  "active": true,
  "consecutiveFailures": 0,
  "firstConsecutiveFailDate": null
}
```

<h3 id="get-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Update a Webhook

<a id="opIdput-webhooks-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/webhooks/5abbe4b7ddc1b351ef961414 \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /webhooks/{id}`

Update a webhook by ID.

<h3 id="update-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|description|query|string|false|A string with a length from `0` to `16384`.|
|callbackURL|query|string(url)|false|A valid URL that is reachable with a `HEAD` and `POST` request.|
|idModel|query|[TrelloID](#schematrelloid)|false|ID of the model to be monitored|
|active|query|boolean|false|Determines whether the webhook is active and sending `POST` requests.|
|id|path|[TrelloID](#schematrelloid)|true|ID of the webhook to retrieve.|

> Example responses

> 200 Response

```json
{
  "id": "58dd6dcaf8b86744d3cb4cde",
  "description": "Board Webhook",
  "idModel": "59cd149051aa57a706962996",
  "callbackURL": "https://mywebhookurl.com/?type=board",
  "active": true,
  "consecutiveFailures": 0,
  "firstConsecutiveFailDate": null
}
```

<h3 id="update-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[Webhook](#schemawebhook)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Delete a Webhook

<a id="opIddelete-webhooks-id"></a>

> Code samples

```bash
curl https://api.trello.com/1/webhooks/5abbe4b7ddc1b351ef961414 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /webhooks/{id}`

Delete a webhook by ID.

<h3 id="delete-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the webhook to retrieve.|

<h3 id="delete-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

## Get a field on a Webhook

<a id="opIdwebhooksidfield"></a>

> Code samples

```bash
curl https://api.trello.com/1/webhooks/5abbe4b7ddc1b351ef961414/active \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /webhooks/{id}/{field}`

Get a field on a Webhook

<h3 id="get-a-field-on-a-webhook-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TrelloID](#schematrelloid)|true|ID of the webhook.|
|field|path|string|true|Field to retrieve. One of: `active`, `callbackURL`, `description`, `idModel`|

#### Enumerated Values

|Parameter|Value|
|---|---|
|field|active|
|field|callbackURL|
|field|description|
|field|idModel|
|field|consecutiveFailures|
|field|firstConsecutiveFailDate|

<h3 id="get-a-field-on-a-webhook-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2
</aside>

# Schemas

<h2 id="tocS_posStringOrNumber">posStringOrNumber</h2>
<!-- backwards compatibility -->
<a id="schemaposstringornumber"></a>
<a id="schema_posStringOrNumber"></a>
<a id="tocSposstringornumber"></a>
<a id="tocsposstringornumber"></a>

```json
"top"
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|string|false|none|none|
|*oneOf*|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|*oneOf*|top|
|*oneOf*|bottom|

<h2 id="tocS_APIKey">APIKey</h2>
<!-- backwards compatibility -->
<a id="schemaapikey"></a>
<a id="schema_APIKey"></a>
<a id="tocSapikey"></a>
<a id="tocsapikey"></a>

```json
"0471642aefef5fa1fa76530ce1ba4c85"
```

<h2 id="tocS_APIToken">APIToken</h2>
<!-- backwards compatibility -->
<a id="schemaapitoken"></a>
<a id="schema_APIToken"></a>
<a id="tocSapitoken"></a>
<a id="tocsapitoken"></a>

```json
"9eb76d9a9d02b8dd40c2f3e5df18556c831d4d1fadbe2c45f8310e6c93b5c548"
```

<h2 id="tocS_ActionFields">ActionFields</h2>
<!-- backwards compatibility -->
<a id="schemaactionfields"></a>
<a id="schema_ActionFields"></a>
<a id="tocSactionfields"></a>
<a id="tocsactionfields"></a>

```json
"id"
```

<h2 id="tocS_Action">Action</h2>
<!-- backwards compatibility -->
<a id="schemaaction"></a>
<a id="schema_Action"></a>
<a id="tocSaction"></a>
<a id="tocsaction"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "idMemberCreator": "5abbe4b7ddc1b351ef961414",
  "data": {
    "text": "Can never go wrong with bowie",
    "card": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Bowie",
      "idShort": 7,
      "shortLink": "3CsPkqOF"
    },
    "board": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Mullets",
      "shortLink": "3CsPkqOF"
    },
    "list": {
      "id": "5abbe4b7ddc1b351ef961414",
      "name": "Amazing"
    }
  },
  "type": "commentCard",
  "date": "2020-03-09T19:41:51.396Z",
  "limits": {
    "reactions": {
      "perAction": {
        "status": "ok",
        "disableAt": 1000,
        "warnAt": 900
      },
      "uniquePerAction": {
        "status": "ok",
        "disableAt": 1000,
        "warnAt": 900
      }
    }
  },
  "display": {
    "translationKey": "action_comment_on_card",
    "entities": {
      "contextOn": {
        "type": "translatable",
        "translationKey": "action_on",
        "hideIfContext": true,
        "idContext": "5abbe4b7ddc1b351ef961414"
      },
      "card": {
        "type": "card",
        "hideIfContext": true,
        "id": "5abbe4b7ddc1b351ef961414",
        "shortLink": "3CsPkqOF",
        "text": "Bowie"
      },
      "comment": {
        "type": "comment",
        "text": "Can never go wrong with bowie"
      },
      "memberCreator": {
        "type": "member",
        "id": "5abbe4b7ddc1b351ef961414",
        "username": "bobloblaw",
        "text": "Bob Loblaw (World)"
      }
    }
  },
  "memberCreator": {
    "id": "5b02e7f4e1facdc393169f9d",
    "activityBlocked": false,
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "fullName": "Bob Loblaw (Trello)",
    "idMemberReferrer": null,
    "initials": "BL",
    "username": "bobloblaw"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|idMemberCreator|[TrelloID](#schematrelloid)|false|none|none|
|data|object|false|none|none|
|type|string|false|none|none|
|date|string(date-time)|false|none|none|
|limits|object|false|none|none|
|display|object|false|none|none|
|memberCreator|object|false|none|none|

<h2 id="tocS_AttachmentFields">AttachmentFields</h2>
<!-- backwards compatibility -->
<a id="schemaattachmentfields"></a>
<a id="schema_AttachmentFields"></a>
<a id="tocSattachmentfields"></a>
<a id="tocsattachmentfields"></a>

```json
"id"
```

<h2 id="tocS_Attachment">Attachment</h2>
<!-- backwards compatibility -->
<a id="schemaattachment"></a>
<a id="schema_Attachment"></a>
<a id="tocSattachment"></a>
<a id="tocsattachment"></a>

```json
{
  "id": "5bc79d4206526d2279c1e6ea",
  "bytes": null,
  "date": "2018-10-17T19:10:14.808Z",
  "edgeColor": null,
  "idMember": "5bc79d4206526d2279c1e6eb",
  "isUpload": false,
  "mimeType": "",
  "name": "Deprecation Extension Notice",
  "previews": [],
  "url": "https://admin.typeform.com/form/RzExEM/share#/link",
  "pos": 1638
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|bytes|string \| null|false|none|none|
|date|string(date)|false|none|none|
|edgeColor|[Color](#schemacolor)|false|none|none|
|idMember|[TrelloID](#schematrelloid)|false|none|none|
|isUpload|boolean|false|none|none|
|mimeType|string|false|none|none|
|name|string|false|none|none|
|previews|[string]|false|none|none|
|url|string(url)|false|none|none|
|pos|number(float)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|edgeColor|yellow|
|edgeColor|purple|
|edgeColor|blue|
|edgeColor|red|
|edgeColor|green|
|edgeColor|orange|
|edgeColor|black|
|edgeColor|sky|
|edgeColor|pink|
|edgeColor|lime|

<h2 id="tocS_BlockedKey">BlockedKey</h2>
<!-- backwards compatibility -->
<a id="schemablockedkey"></a>
<a id="schema_BlockedKey"></a>
<a id="tocSblockedkey"></a>
<a id="tocsblockedkey"></a>

```json
"notification_comment_card"
```

<h2 id="tocS_BoardFields">BoardFields</h2>
<!-- backwards compatibility -->
<a id="schemaboardfields"></a>
<a id="schema_BoardFields"></a>
<a id="tocSboardfields"></a>
<a id="tocsboardfields"></a>

```json
"id"
```

<h2 id="tocS_Board">Board</h2>
<!-- backwards compatibility -->
<a id="schemaboard"></a>
<a id="schema_Board"></a>
<a id="tocSboard"></a>
<a id="tocsboard"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "Trello Platform Changes",
  "desc": "Track changes to Trello's Platform on this board.",
  "descData": "string",
  "closed": false,
  "idMemberCreator": "5abbe4b7ddc1b351ef961414",
  "idOrganization": "5abbe4b7ddc1b351ef961414",
  "pinned": false,
  "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
  "shortUrl": "https://trello.com/b/dQHqCohZ",
  "prefs": {
    "permissionLevel": "org",
    "hideVotes": true,
    "voting": "disabled",
    "comments": "string",
    "invitations": "admins",
    "selfJoin": true,
    "cardCovers": true,
    "isTemplate": true,
    "cardAging": "pirate",
    "calendarFeedEnabled": true,
    "background": "5abbe4b7ddc1b351ef961414",
    "backgroundImage": "http://example.com",
    "backgroundImageScaled": [
      {
        "width": 100,
        "height": 64,
        "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
      }
    ],
    "backgroundTile": true,
    "backgroundBrightness": "dark",
    "backgroundBottomColor": "#1e2e00",
    "backgroundTopColor": "#ffffff",
    "canBePublic": true,
    "canBeEnterprise": true,
    "canBeOrg": true,
    "canBePrivate": true,
    "canInvite": true
  },
  "labelNames": {
    "green": "Addition",
    "yellow": "Update",
    "orange": "Deprecation",
    "red": "Deletion",
    "purple": "Power-Ups",
    "blue": "News",
    "sky": "Announcement",
    "lime": "Delight",
    "pink": "REST API",
    "black": "Capabilties"
  },
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "starred": true,
  "memberships": "string",
  "shortLink": "string",
  "subscribed": true,
  "powerUps": "string",
  "dateLastActivity": "1970-01-01",
  "dateLastView": "1970-01-01",
  "idTags": "string",
  "datePluginDisable": "1970-01-01",
  "creationMethod": "string",
  "ixUpdate": 0,
  "templateGallery": "string",
  "enterpriseOwned": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|true|none|none|
|name|string|false|none|The name of the board.|
|desc|string|false|none|none|
|descData|string|false|none|none|
|closed|boolean|false|none|none|
|idMemberCreator|[TrelloID](#schematrelloid)|false|none|none|
|idOrganization|[TrelloID](#schematrelloid)|false|none|none|
|pinned|boolean|false|none|none|
|url|string(url)|false|none|none|
|shortUrl|string(url)|false|none|none|
|prefs|[Prefs](#schemaprefs)|false|none|none|
|labelNames|object|false|none|none|
|limits|[Limits](#schemalimits)|false|none|none|
|starred|boolean|false|none|none|
|memberships|string|false|none|none|
|shortLink|string|false|none|none|
|subscribed|boolean|false|none|none|
|powerUps|string|false|none|none|
|dateLastActivity|string(date)|false|none|none|
|dateLastView|string(date)|false|none|none|
|idTags|string|false|none|none|
|datePluginDisable|string(date) \| null|false|none|none|
|creationMethod|string \| null|false|none|none|
|ixUpdate|integer|false|none|none|
|templateGallery|string \| null|false|none|none|
|enterpriseOwned|boolean|false|none|none|

<h2 id="tocS_BoardBackground">BoardBackground</h2>
<!-- backwards compatibility -->
<a id="schemaboardbackground"></a>
<a id="schema_BoardBackground"></a>
<a id="tocSboardbackground"></a>
<a id="tocsboardbackground"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|

<h2 id="tocS_BoardStars">BoardStars</h2>
<!-- backwards compatibility -->
<a id="schemaboardstars"></a>
<a id="schema_BoardStars"></a>
<a id="tocSboardstars"></a>
<a id="tocsboardstars"></a>

```json
{
  "id": "585063850027165010be15a8",
  "idBoard": "57f7df684f1ca8c2877162e0",
  "pos": 32768
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|idBoard|[TrelloID](#schematrelloid)|false|none|none|
|pos|integer|false|none|none|

<h2 id="tocS_Channel">Channel</h2>
<!-- backwards compatibility -->
<a id="schemachannel"></a>
<a id="schema_Channel"></a>
<a id="tocSchannel"></a>
<a id="tocschannel"></a>

```json
"email"
```

<h2 id="tocS_CheckItem">CheckItem</h2>
<!-- backwards compatibility -->
<a id="schemacheckitem"></a>
<a id="schema_CheckItem"></a>
<a id="tocScheckitem"></a>
<a id="tocscheckitem"></a>

```json
{
  "idChecklist": "5dc9b507756e182c76007621",
  "state": "incomplete",
  "id": "5dc9b509f02f4314edc4303a",
  "name": "string",
  "nameData": null,
  "pos": 1673
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idChecklist|[TrelloID](#schematrelloid)|false|none|none|
|state|string|false|none|none|
|id|[TrelloID](#schematrelloid)|false|none|none|
|name|string|false|none|none|
|nameData|string \| null|false|none|none|
|pos|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|state|complete|
|state|incomplete|

<h2 id="tocS_Checklist">Checklist</h2>
<!-- backwards compatibility -->
<a id="schemachecklist"></a>
<a id="schema_Checklist"></a>
<a id="tocSchecklist"></a>
<a id="tocschecklist"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|

<h2 id="tocS_Card">Card</h2>
<!-- backwards compatibility -->
<a id="schemacard"></a>
<a id="schema_Card"></a>
<a id="tocScard"></a>
<a id="tocscard"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "address": "string",
  "badges": {
    "attachmentsByType": {
      "trello": {
        "board": 0,
        "card": 0
      }
    },
    "location": true,
    "votes": 0,
    "viewingMemberVoted": false,
    "subscribed": false,
    "fogbugz": "string",
    "checkItems": 0,
    "checkItemsChecked": 0,
    "comments": 0,
    "attachments": 0,
    "description": true,
    "due": "1970-01-01",
    "start": "1970-01-01",
    "dueComplete": true
  },
  "cardRole": "mirror",
  "checkItemStates": [
    "string"
  ],
  "closed": true,
  "coordinates": "string",
  "creationMethod": "string",
  "dateLastActivity": "2019-09-16T16:19:17.156Z",
  "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
  "descData": {
    "emoji": {}
  },
  "due": "1970-01-01",
  "dueReminder": "string",
  "idBoard": "5abbe4b7ddc1b351ef961414",
  "idChecklists": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ],
  "idLabels": [
    {
      "id": "5abbe4b7ddc1b351ef961414",
      "idBoard": "5abbe4b7ddc1b351ef961414",
      "name": "Overdue",
      "color": "yellow"
    }
  ],
  "idList": "5abbe4b7ddc1b351ef961415",
  "idMembers": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idMembersVoted": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idShort": 0,
  "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
  "labels": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  },
  "locationName": "string",
  "manualCoverAttachment": false,
  "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
  "name": "👋 What? Why? How?",
  "pos": 65535,
  "shortLink": "H0TZyzbK",
  "shortUrl": "https://trello.com/c/H0TZyzbK",
  "subscribed": false,
  "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
  "cover": {
    "idAttachment": "5abbe4b7ddc1b351ef961414",
    "color": "yellow",
    "idUploadedBackground": true,
    "size": "normal",
    "brightness": "light",
    "isTemplate": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|address|string \| null|false|none|none|
|badges|object|false|none|none|
|cardRole|string \| null|false|none|none|
|checkItemStates|[string]|false|none|none|
|closed|boolean|false|none|none|
|coordinates|string \| null|false|none|none|
|creationMethod|string \| null|false|none|none|
|dateLastActivity|string(date-time)|false|none|none|
|desc|string|false|none|none|
|descData|object|false|none|none|
|due|string(date) \| null|false|none|none|
|dueReminder|string \| null|false|none|none|
|idBoard|[TrelloID](#schematrelloid)|false|none|none|
|idChecklists|[[Checklist](#schemachecklist) \| [TrelloID](#schematrelloid)]|false|none|none|
|idLabels|[[Label](#schemalabel) \| [TrelloID](#schematrelloid)]|false|none|none|
|idList|[TrelloID](#schematrelloid)|false|none|none|
|idMembers|[[TrelloID](#schematrelloid)]|false|none|none|
|idMembersVoted|[[TrelloID](#schematrelloid)]|false|none|none|
|idShort|integer|false|none|none|
|idAttachmentCover|[TrelloID](#schematrelloid)|false|none|none|
|labels|[[TrelloID](#schematrelloid)]|false|none|none|
|limits|[Limits](#schemalimits)|false|none|none|
|locationName|string \| null|false|none|none|
|manualCoverAttachment|boolean|false|none|none|
|mirrorSourceId|[TrelloID](#schematrelloid)|false|none|none|
|name|string|false|none|none|
|pos|number(float)|false|none|none|
|shortLink|string|false|none|none|
|shortUrl|string(url)|false|none|none|
|subscribed|boolean|false|none|none|
|url|string(url)|false|none|none|
|cover|object|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|cardRole|separator|
|cardRole|board|
|cardRole|mirror|
|cardRole|link|

<h2 id="tocS_CardFields">CardFields</h2>
<!-- backwards compatibility -->
<a id="schemacardfields"></a>
<a id="schema_CardFields"></a>
<a id="tocScardfields"></a>
<a id="tocscardfields"></a>

```json
"id"
```

The fields on a Card.

<h2 id="tocS_ClaimableOrganizations">ClaimableOrganizations</h2>
<!-- backwards compatibility -->
<a id="schemaclaimableorganizations"></a>
<a id="schema_ClaimableOrganizations"></a>
<a id="tocSclaimableorganizations"></a>
<a id="tocsclaimableorganizations"></a>

```json
{
  "organizations": [
    {
      "name": "organization_name",
      "displayName": "Organization Name",
      "activeMembershipCount": 5,
      "idActiveAdmins": [
        "5abbe4b7ddc1b351ef961414"
      ],
      "products": [
        0
      ],
      "id": "617abd5995eae45169a11059",
      "logoUrl": null,
      "dateLastActive": "2019-08-22T18:15:53.546Z"
    }
  ],
  "claimableCount": 2
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|organizations|[object]|false|none|none|
|claimableCount|number|false|none|none|

<h2 id="tocS_CustomEmoji">CustomEmoji</h2>
<!-- backwards compatibility -->
<a id="schemacustomemoji"></a>
<a id="schema_CustomEmoji"></a>
<a id="tocScustomemoji"></a>
<a id="tocscustomemoji"></a>

```json
{
  "id": "5900ac11ed55d6d2c355c5d6",
  "url": "https://trello-emoji.s3.amazonaws.com/5589c3ea49b40cedc28cf70e/b40d9925f4e75495104b5e560881d8e4/chorizo.png",
  "name": "chorizo"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|url|string(url)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_CustomField">CustomField</h2>
<!-- backwards compatibility -->
<a id="schemacustomfield"></a>
<a id="schema_CustomField"></a>
<a id="tocScustomfield"></a>
<a id="tocscustomfield"></a>

```json
{
  "id": "5ab10be237846c43015f108e",
  "idModel": "586e8f681d4fe9b06a928307",
  "modelType": "board",
  "fieldGroup": "f6177ba6839d6fff0f73922c1cea105e793fda8a1433d466104dacc0b7c56955",
  "display": {
    "cardFront": true,
    "name": "Priority 🏔",
    "pos": "98304,",
    "options": [
      {
        "id": "5ab10be237846c43015f1091",
        "idCustomField": "5ab10be237846c43015f108e",
        "value": {
          "text": "High"
        },
        "color": "red",
        "pos": 16384
      }
    ]
  },
  "type": "list"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|idModel|string|false|none|none|
|modelType|string|false|none|none|
|fieldGroup|string|false|none|none|
|display|object|false|none|none|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|modelType|card|
|modelType|board|
|modelType|member|

<h2 id="tocS_CustomFieldItems">CustomFieldItems</h2>
<!-- backwards compatibility -->
<a id="schemacustomfielditems"></a>
<a id="schema_CustomFieldItems"></a>
<a id="tocScustomfielditems"></a>
<a id="tocscustomfielditems"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "value": {
    "checked": "true"
  },
  "idCustomField": "5b080fd8017bd1653b5480fa",
  "idModel": "5b080ff194611b41aaaa9570",
  "modelType": "card"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|value|object|false|none|none|
|idCustomField|[TrelloID](#schematrelloid)|false|none|none|
|idModel|[TrelloID](#schematrelloid)|false|none|none|
|modelType|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|modelType|card|
|modelType|board|
|modelType|member|

<h2 id="tocS_CustomSticker">CustomSticker</h2>
<!-- backwards compatibility -->
<a id="schemacustomsticker"></a>
<a id="schema_CustomSticker"></a>
<a id="tocScustomsticker"></a>
<a id="tocscustomsticker"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "url": "http://example.com",
  "scaled": [
    {
      "id": "5abbe4b7ddc1b351ef961414"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|url|string(url)|false|none|none|
|scaled|[object]|false|none|none|

<h2 id="tocS_Emoji">Emoji</h2>
<!-- backwards compatibility -->
<a id="schemaemoji"></a>
<a id="schema_Emoji"></a>
<a id="tocSemoji"></a>
<a id="tocsemoji"></a>

```json
{
  "trello": [
    {
      "unified": "1F600",
      "name": "GRINNING FACE",
      "native": "😀",
      "shortName": "grinning",
      "shortNames": [
        "grinning\""
      ],
      "text": ":)",
      "texts": null,
      "category": "Smileys & People",
      "sheetX": 30,
      "sheetY": 24,
      "tts": "grinning face",
      "keywords": [
        "face"
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|trello|[object]|false|none|none|

<h2 id="tocS_Enterprise">Enterprise</h2>
<!-- backwards compatibility -->
<a id="schemaenterprise"></a>
<a id="schema_Enterprise"></a>
<a id="tocSenterprise"></a>
<a id="tocsenterprise"></a>

```json
{
  "id": "59c15d19566e197b23665901",
  "name": "bentley_test",
  "displayName": "Bentley's Test Enterprise!",
  "logoHash": null,
  "logoUrl": null,
  "prefs": {
    "ssoOnly": false,
    "signup": {
      "banner": "string",
      "bannerHtml": "<p>Hello</p>\n"
    },
    "mandatoryTransferDate": null,
    "brandingColor": "string",
    "autoJoinOrganizations": false,
    "notifications": {},
    "maxMembers": null
  },
  "organizationPrefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "ssoActivationFailed": true,
  "idAdmins": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "enterpriseDomains": [
    "http://example.com"
  ],
  "isRealEnterprise": true,
  "pluginWhitelistingEnabled": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "products": [
    0
  ],
  "licenses": {
    "maxMembers": null,
    "totalMembers": 5,
    "relatedEnterprises": [
      {
        "name": "enterprise_name",
        "displayName": "My Test Enterprise!",
        "count": 5
      }
    ]
  },
  "domains": [
    "http://example.com"
  ],
  "dateOrganizationPrefsLastUpdated": "2019-08-22T18:15:53.546Z",
  "idp": {
    "requestSigned": false,
    "certificate": null,
    "loginUrl": null
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|name|string|false|none|none|
|displayName|string|false|none|none|
|logoHash|string \| null|false|none|none|
|logoUrl|string \| null|false|none|none|
|prefs|object|false|none|none|
|organizationPrefs|[OrganizationPrefs](#schemaorganizationprefs)|false|none|none|
|ssoActivationFailed|boolean|false|none|none|
|idAdmins|[[TrelloID](#schematrelloid)]|false|none|none|
|enterpriseDomains|[string(url)]|false|none|none|
|isRealEnterprise|boolean|false|none|none|
|pluginWhitelistingEnabled|[[TrelloID](#schematrelloid)]|false|none|none|
|idOrganizations|[[TrelloID](#schematrelloid)]|false|none|none|
|products|[number(integer)]|false|none|none|
|licenses|object|false|none|none|
|domains|[string(url)]|false|none|none|
|dateOrganizationPrefsLastUpdated|string(date)|false|none|none|
|idp|object|false|none|none|

<h2 id="tocS_EnterpriseAdmin">EnterpriseAdmin</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseadmin"></a>
<a id="schema_EnterpriseAdmin"></a>
<a id="tocSenterpriseadmin"></a>
<a id="tocsenterpriseadmin"></a>

```json
{
  "id": "5dced8665015383ed5ca248c",
  "fullName": "Bob Loblaw",
  "username": "bobloblaw"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|fullName|string|false|none|none|
|username|string|false|none|none|

<h2 id="tocS_EnterpriseAuditLog">EnterpriseAuditLog</h2>
<!-- backwards compatibility -->
<a id="schemaenterpriseauditlog"></a>
<a id="schema_EnterpriseAuditLog"></a>
<a id="tocSenterpriseauditlog"></a>
<a id="tocsenterpriseauditlog"></a>

```json
{
  "idAction": "5dced8665015383ed5ca248c",
  "type": "addOrganizationToEnterprise",
  "date": "2018-04-26T17:03:25.155Z",
  "memberCreator": {
    "id": "5bc79d4206526d2279c1e6ea",
    "username": "bobloblaw",
    "fullName": "Bob Loblaw (Trello)"
  },
  "organization": {
    "enterpriseJoinRequest": {
      "idEnterprise": "617ac9070293e6612650e0ca",
      "idMember": "5bc79d4206526d2279c1e6ea",
      "date": "2018-04-26T17:03:25.155Z"
    },
    "id": "617ac9070293e6612650e0ca",
    "name": "organization name"
  },
  "member": {
    "id": "5bc79d4206526d2279c1e6ea",
    "username": "bentleycook",
    "fullName": "Bentley Cook"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idAction|[TrelloID](#schematrelloid)|false|none|none|
|type|string|false|none|none|
|date|string(date)|false|none|none|
|memberCreator|object|false|none|none|
|organization|object|false|none|none|
|member|object|false|none|none|

<h2 id="tocS_Export">Export</h2>
<!-- backwards compatibility -->
<a id="schemaexport"></a>
<a id="schema_Export"></a>
<a id="tocSexport"></a>
<a id="tocsexport"></a>

```json
{
  "id": "5dced8665015383ed5ca248c",
  "status": {
    "attempts": 0,
    "finished": false,
    "stage": "Export_queued"
  },
  "startedAt": "2019-11-15T16:55:02.000Z",
  "size": null,
  "exportUrl": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|status|object|false|none|none|
|startedAt|string(date-time)|false|none|none|
|size|string \| null|false|none|none|
|exportUrl|string \| null|false|none|none|

<h2 id="tocS_TrelloID">TrelloID</h2>
<!-- backwards compatibility -->
<a id="schematrelloid"></a>
<a id="schema_TrelloID"></a>
<a id="tocStrelloid"></a>
<a id="tocstrelloid"></a>

```json
"5abbe4b7ddc1b351ef961414"
```

<h2 id="tocS_ViewFilter">ViewFilter</h2>
<!-- backwards compatibility -->
<a id="schemaviewfilter"></a>
<a id="schema_ViewFilter"></a>
<a id="tocSviewfilter"></a>
<a id="tocsviewfilter"></a>

```json
"all"
```

<h2 id="tocS_Color">Color</h2>
<!-- backwards compatibility -->
<a id="schemacolor"></a>
<a id="schema_Color"></a>
<a id="tocScolor"></a>
<a id="tocscolor"></a>

```json
"yellow"
```

<h2 id="tocS_CardAging">CardAging</h2>
<!-- backwards compatibility -->
<a id="schemacardaging"></a>
<a id="schema_CardAging"></a>
<a id="tocScardaging"></a>
<a id="tocscardaging"></a>

```json
"pirate"
```

<h2 id="tocS_ImageDescriptor">ImageDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemaimagedescriptor"></a>
<a id="schema_ImageDescriptor"></a>
<a id="tocSimagedescriptor"></a>
<a id="tocsimagedescriptor"></a>

```json
{
  "width": 100,
  "height": 64,
  "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|width|integer|false|none|The width of the image.|
|height|integer|false|none|The height of the image.|
|url|string(url)|false|none|The URL of the image.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "idBoard": "5abbe4b7ddc1b351ef961414",
  "name": "Overdue",
  "color": "yellow"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|The ID of the label.|
|idBoard|[TrelloID](#schematrelloid)|false|none|The ID of the board the label is on.|
|name|string \| null|false|none|The name displayed for the label.|
|color|[Color](#schemacolor)|false|none|The color of the label. Null means no color and the label will not be shown on the front of Cards.|

#### Enumerated Values

|Property|Value|
|---|---|
|color|yellow|
|color|purple|
|color|blue|
|color|red|
|color|green|
|color|orange|
|color|black|
|color|sky|
|color|pink|
|color|lime|

<h2 id="tocS_ListFields">ListFields</h2>
<!-- backwards compatibility -->
<a id="schemalistfields"></a>
<a id="schema_ListFields"></a>
<a id="tocSlistfields"></a>
<a id="tocslistfields"></a>

```json
"id"
```

<h2 id="tocS_TrelloList">TrelloList</h2>
<!-- backwards compatibility -->
<a id="schematrellolist"></a>
<a id="schema_TrelloList"></a>
<a id="tocStrellolist"></a>
<a id="tocstrellolist"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "Things to buy today",
  "closed": true,
  "pos": 0,
  "softLimit": "string",
  "idBoard": "string",
  "subscribed": true,
  "limits": {
    "attachments": {
      "perBoard": {
        "status": "ok",
        "disableAt": 36000,
        "warnAt": 32400
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|name|string|false|none|The name of the list|
|closed|boolean|false|none|none|
|pos|number|false|none|none|
|softLimit|string|false|none|none|
|idBoard|string|false|none|none|
|subscribed|boolean|false|none|none|
|limits|[Limits](#schemalimits)|false|none|none|

<h2 id="tocS_LimitsObject">LimitsObject</h2>
<!-- backwards compatibility -->
<a id="schemalimitsobject"></a>
<a id="schema_LimitsObject"></a>
<a id="tocSlimitsobject"></a>
<a id="tocslimitsobject"></a>

```json
{
  "status": "ok",
  "disableAt": 36000,
  "warnAt": 32400
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|none|
|disableAt|number|false|none|none|
|warnAt|number|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ok|
|status|warning|

<h2 id="tocS_Limits">Limits</h2>
<!-- backwards compatibility -->
<a id="schemalimits"></a>
<a id="schema_Limits"></a>
<a id="tocSlimits"></a>
<a id="tocslimits"></a>

```json
{
  "attachments": {
    "perBoard": {
      "status": "ok",
      "disableAt": 36000,
      "warnAt": 32400
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|object|false|none|none|

<h2 id="tocS_MemberFields">MemberFields</h2>
<!-- backwards compatibility -->
<a id="schemamemberfields"></a>
<a id="schema_MemberFields"></a>
<a id="tocSmemberfields"></a>
<a id="tocsmemberfields"></a>

```json
"id"
```

<h2 id="tocS_Membership">Membership</h2>
<!-- backwards compatibility -->
<a id="schemamembership"></a>
<a id="schema_Membership"></a>
<a id="tocSmembership"></a>
<a id="tocsmembership"></a>

```json
{
  "managed": true,
  "licensed": true,
  "admin": true,
  "deactivated": true,
  "collaborator": true,
  "member": {
    "id": "646e92a0a016198d3cf81e8a",
    "fullname": "Lex Math",
    "username": "amath",
    "dateLastImpression": "2023-05-24T22:41:36.406Z",
    "email": "amath@trello.com",
    "initials": "AM",
    "avatarURL": "trello.com/avatarURL",
    "memberType": "Admin",
    "confirmed": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|managed|boolean|false|none|none|
|licensed|boolean|false|none|none|
|admin|boolean|false|none|none|
|deactivated|boolean|false|none|none|
|collaborator|boolean|false|none|none|
|member|object|false|none|none|

<h2 id="tocS_Member">Member</h2>
<!-- backwards compatibility -->
<a id="schemamember"></a>
<a id="schema_Member"></a>
<a id="tocSmember"></a>
<a id="tocsmember"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "activityBlocked": false,
  "avatarHash": "fc8faaaee46666a4eb8b626c08933e16",
  "avatarUrl": "https://trello-avatars.s3.amazonaws.com/fc8faaaee46666a4eb8b626c08933e16",
  "bio": "👋 I'm a developer advocate at Trello!",
  "bioData": {
    "emoji": {}
  },
  "confirmed": true,
  "fullName": "Bentley Cook",
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "idEnterprisesDeactivated": [
    "string"
  ],
  "idMemberReferrer": null,
  "idPremOrgsAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "initials": "BC",
  "memberType": "normal",
  "nonPublic": {
    "fullName": "Bentley Cook",
    "initials": "BC",
    "avatarUrl": "https://trello-members.s3.amazonaws.com/5b02e7f4e1facdc393169f9d/db2adf80c2e6c26b76e1f10400eb4c45",
    "avatarHash": "db2adf80c2e6c26b76e1f10400eb4c45"
  },
  "nonPublicAvailable": false,
  "products": [
    0
  ],
  "url": "https://trello.com/bentleycook",
  "username": "bentleycook",
  "status": "disconnected",
  "aaEmail": null,
  "aaEnrolledDate": null,
  "aaId": null,
  "avatarSource": "gravatar",
  "email": "bcook@atlassian.com",
  "gravatarHash": "0a1e804f6e35a65ae5e1f7ef4c92471c",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idOrganizations": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "idEnterprisesAdmin": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "limits": {
    "status": "ok",
    "disableAt": 36000,
    "warnAt": 32400
  },
  "loginTypes": [
    "password"
  ],
  "marketingOptIn": {
    "optedIn": false,
    "date": "2018-04-26T17:03:25.155Z"
  },
  "messagesDismissed": {
    "name": "ad-security-features",
    "count": 4,
    "lastDismissed": "2019-03-11T20:19:46.809Z",
    "_id": "5995d44573d197eada632a32"
  },
  "oneTimeMessagesDismissed": [
    "string"
  ],
  "prefs": {
    "timezoneInfo": {
      "offsetCurrent": 360,
      "timezoneCurrent": "CST",
      "offsetNext": 300,
      "dateNext": "2020-03-08T08:00:00.000Z",
      "timezoneNext": "CDT"
    },
    "privacy": {
      "fullName": "public",
      "avatar": "public"
    },
    "sendSummaries": true,
    "minutesBetweenSummaries": 60,
    "minutesBeforeDeadlineToNotify": 1440,
    "colorBlind": true,
    "locale": "en-AU",
    "timezone": "America/Chicago",
    "twoFactor": {
      "enabled": true,
      "needsNewBackups": false
    }
  },
  "trophies": [
    "string"
  ],
  "uploadedAvatarHash": "dac3ad49ff117829dd63a79bb2ea3426",
  "uploadedAvatarUrl": "https://trello-avatars.s3.amazonaws.com/dac3ad49ff117829dd63a79bb2ea3426",
  "premiumFeatures": [
    "string"
  ],
  "isAaMastered": false,
  "ixUpdate": "48427",
  "idBoardsPinned": [
    "5abbe4b7ddc1b351ef961414"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|activityBlocked|boolean|false|none|none|
|avatarHash|string|false|none|none|
|avatarUrl|string(url)|false|none|none|
|bio|string|false|none|none|
|bioData|object|false|none|none|
|confirmed|boolean|false|none|none|
|fullName|string|false|none|none|
|idEnterprise|[TrelloID](#schematrelloid)|false|none|none|
|idEnterprisesDeactivated|[string]|false|none|none|
|idMemberReferrer|[TrelloID](#schematrelloid)|false|none|none|
|idPremOrgsAdmin|[[TrelloID](#schematrelloid)]|false|none|none|
|initials|string|false|none|none|
|memberType|string|false|none|none|
|nonPublic|object|false|none|Profile data with restricted visibility. These fields are visible only to members of the<br>same organization. The values here (full name, for example) may differ from the values<br>at the top level of the response.<br>|
|nonPublicAvailable|boolean|false|none|Whether the response contains non-public profile data for the member|
|products|[integer]|false|none|none|
|url|string(url)|false|none|none|
|username|string|false|none|none|
|status|string|false|none|none|
|aaEmail|string(email) \| null|false|none|none|
|aaEnrolledDate|string \| null|false|none|none|
|aaId|string \| null|false|none|none|
|avatarSource|string|false|none|none|
|email|string|false|none|none|
|gravatarHash|string|false|none|none|
|idBoards|[[TrelloID](#schematrelloid)]|false|none|none|
|idOrganizations|[[TrelloID](#schematrelloid)]|false|none|none|
|idEnterprisesAdmin|[[TrelloID](#schematrelloid)]|false|none|none|
|limits|[LimitsObject](#schemalimitsobject)|false|none|none|
|loginTypes|[string]|false|none|none|
|marketingOptIn|object|false|none|none|
|messagesDismissed|object|false|none|none|
|oneTimeMessagesDismissed|[string]|false|none|none|
|prefs|[MemberPrefs](#schemamemberprefs)|false|none|none|
|trophies|[string]|false|none|none|
|uploadedAvatarHash|string|false|none|none|
|uploadedAvatarUrl|string(url)|false|none|none|
|premiumFeatures|[string]|false|none|none|
|isAaMastered|boolean|false|none|none|
|ixUpdate|number|false|none|none|
|idBoardsPinned|[[TrelloID](#schematrelloid)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|memberType|normal|
|memberType|ghost|
|status|disconnected|
|avatarSource|gravatar|
|avatarSource|upload|
|loginTypes|password|
|loginTypes|saml|

<h2 id="tocS_MemberPrefs">MemberPrefs</h2>
<!-- backwards compatibility -->
<a id="schemamemberprefs"></a>
<a id="schema_MemberPrefs"></a>
<a id="tocSmemberprefs"></a>
<a id="tocsmemberprefs"></a>

```json
{
  "timezoneInfo": {
    "offsetCurrent": 360,
    "timezoneCurrent": "CST",
    "offsetNext": 300,
    "dateNext": "2020-03-08T08:00:00.000Z",
    "timezoneNext": "CDT"
  },
  "privacy": {
    "fullName": "public",
    "avatar": "public"
  },
  "sendSummaries": true,
  "minutesBetweenSummaries": 60,
  "minutesBeforeDeadlineToNotify": 1440,
  "colorBlind": true,
  "locale": "en-AU",
  "timezone": "America/Chicago",
  "twoFactor": {
    "enabled": true,
    "needsNewBackups": false
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|timezoneInfo|object|false|none|none|
|privacy|object|false|none|none|
|sendSummaries|boolean|false|none|none|
|minutesBetweenSummaries|integer|false|none|none|
|minutesBeforeDeadlineToNotify|integer|false|none|none|
|colorBlind|boolean|false|none|none|
|locale|string|false|none|none|
|timezone|string|false|none|none|
|twoFactor|object|false|none|none|

<h2 id="tocS_Memberships">Memberships</h2>
<!-- backwards compatibility -->
<a id="schemamemberships"></a>
<a id="schema_Memberships"></a>
<a id="tocSmemberships"></a>
<a id="tocsmemberships"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|

<h2 id="tocS_NotificationFields">NotificationFields</h2>
<!-- backwards compatibility -->
<a id="schemanotificationfields"></a>
<a id="schema_NotificationFields"></a>
<a id="tocSnotificationfields"></a>
<a id="tocsnotificationfields"></a>

```json
"id"
```

<h2 id="tocS_Notification">Notification</h2>
<!-- backwards compatibility -->
<a id="schemanotification"></a>
<a id="schema_Notification"></a>
<a id="tocSnotification"></a>
<a id="tocsnotification"></a>

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "unread": true,
  "type": "cardDueSoon",
  "date": "2019-11-08T16:02:52.763Z",
  "dateRead": null,
  "data": null,
  "card": {
    "id": "5abbe4b7ddc1b351ef961414",
    "address": "string",
    "badges": {
      "attachmentsByType": {
        "trello": {
          "board": 0,
          "card": 0
        }
      },
      "location": true,
      "votes": 0,
      "viewingMemberVoted": false,
      "subscribed": false,
      "fogbugz": "string",
      "checkItems": 0,
      "checkItemsChecked": 0,
      "comments": 0,
      "attachments": 0,
      "description": true,
      "due": "1970-01-01",
      "start": "1970-01-01",
      "dueComplete": true
    },
    "cardRole": "mirror",
    "checkItemStates": [
      "string"
    ],
    "closed": true,
    "coordinates": "string",
    "creationMethod": "string",
    "dateLastActivity": "2019-09-16T16:19:17.156Z",
    "desc": "👋Hey there,\n\nTrello's Platform team uses this board to keep developers up-to-date.",
    "descData": {
      "emoji": {}
    },
    "due": "1970-01-01",
    "dueReminder": "string",
    "idBoard": "5abbe4b7ddc1b351ef961414",
    "idChecklists": [
      {
        "id": "5abbe4b7ddc1b351ef961414"
      }
    ],
    "idLabels": [
      {
        "id": "5abbe4b7ddc1b351ef961414",
        "idBoard": "5abbe4b7ddc1b351ef961414",
        "name": "Overdue",
        "color": "yellow"
      }
    ],
    "idList": "5abbe4b7ddc1b351ef961415",
    "idMembers": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idMembersVoted": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "idShort": 0,
    "idAttachmentCover": "5abbe4b7ddc1b351ef961415",
    "labels": [
      "5abbe4b7ddc1b351ef961414"
    ],
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "locationName": "string",
    "manualCoverAttachment": false,
    "mirrorSourceId": "5abbe4b7ddc1b351ef961414",
    "name": "👋 What? Why? How?",
    "pos": 65535,
    "shortLink": "H0TZyzbK",
    "shortUrl": "https://trello.com/c/H0TZyzbK",
    "subscribed": false,
    "url": "https://trello.com/c/H0TZyzbK/4-%F0%9F%91%8B-what-why-how",
    "cover": {
      "idAttachment": "5abbe4b7ddc1b351ef961414",
      "color": "yellow",
      "idUploadedBackground": true,
      "size": "normal",
      "brightness": "light",
      "isTemplate": false
    }
  },
  "board": {
    "id": "5abbe4b7ddc1b351ef961414",
    "name": "Trello Platform Changes",
    "desc": "Track changes to Trello's Platform on this board.",
    "descData": "string",
    "closed": false,
    "idMemberCreator": "5abbe4b7ddc1b351ef961414",
    "idOrganization": "5abbe4b7ddc1b351ef961414",
    "pinned": false,
    "url": "https://trello.com/b/dQHqCohZ/trello-platform-changelog",
    "shortUrl": "https://trello.com/b/dQHqCohZ",
    "prefs": {
      "permissionLevel": "org",
      "hideVotes": true,
      "voting": "disabled",
      "comments": "string",
      "invitations": "admins",
      "selfJoin": true,
      "cardCovers": true,
      "isTemplate": true,
      "cardAging": "pirate",
      "calendarFeedEnabled": true,
      "background": "5abbe4b7ddc1b351ef961414",
      "backgroundImage": "http://example.com",
      "backgroundImageScaled": [
        {
          "width": 100,
          "height": 64,
          "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
        }
      ],
      "backgroundTile": true,
      "backgroundBrightness": "dark",
      "backgroundBottomColor": "#1e2e00",
      "backgroundTopColor": "#ffffff",
      "canBePublic": true,
      "canBeEnterprise": true,
      "canBeOrg": true,
      "canBePrivate": true,
      "canInvite": true
    },
    "labelNames": {
      "green": "Addition",
      "yellow": "Update",
      "orange": "Deprecation",
      "red": "Deletion",
      "purple": "Power-Ups",
      "blue": "News",
      "sky": "Announcement",
      "lime": "Delight",
      "pink": "REST API",
      "black": "Capabilties"
    },
    "limits": {
      "attachments": {
        "perBoard": {
          "status": "ok",
          "disableAt": 36000,
          "warnAt": 32400
        }
      }
    },
    "starred": true,
    "memberships": "string",
    "shortLink": "string",
    "subscribed": true,
    "powerUps": "string",
    "dateLastActivity": "1970-01-01",
    "dateLastView": "1970-01-01",
    "idTags": "string",
    "datePluginDisable": "1970-01-01",
    "creationMethod": "string",
    "ixUpdate": 0,
    "templateGallery": "string",
    "enterpriseOwned": true
  },
  "idMemberCreator": null,
  "idAction": null,
  "reactions": []
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|unread|boolean|false|none|none|
|type|string|false|none|none|
|date|string|false|none|none|
|dateRead|string|false|none|none|
|data|string|false|none|none|
|card|[Card](#schemacard)|false|none|none|
|board|[Board](#schemaboard)|false|none|none|
|idMemberCreator|[TrelloID](#schematrelloid)|false|none|none|
|idAction|[TrelloID](#schematrelloid)|false|none|none|
|reactions|array|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|cardDueSoon|

<h2 id="tocS_NotificationChannelSettings">NotificationChannelSettings</h2>
<!-- backwards compatibility -->
<a id="schemanotificationchannelsettings"></a>
<a id="schema_NotificationChannelSettings"></a>
<a id="tocSnotificationchannelsettings"></a>
<a id="tocsnotificationchannelsettings"></a>

```json
{
  "id": "5dc591ac425f2a223aba0a8e",
  "idMember": "5589c3ea49b40cedc28cf70e",
  "blockedKeys": [
    "notification_comment_card"
  ],
  "channel": "email"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|idMember|[TrelloID](#schematrelloid)|false|none|none|
|blockedKeys|[[BlockedKey](#schemablockedkey)]|false|none|none|
|channel|[Channel](#schemachannel)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|blockedKeys|notification_comment_card|
|blockedKeys|notification_added_a_due_date|
|blockedKeys|notification_changed_due_date|
|blockedKeys|notification_card_due_soon|
|blockedKeys|notification_removed_from_card|
|blockedKeys|notification_added_attachment_to_card|
|blockedKeys|notification_created_card|
|blockedKeys|notification_moved_card|
|blockedKeys|notification_archived_card|
|blockedKeys|notification_unarchived_card|
|channel|email|

<h2 id="tocS_OrganizationFields">OrganizationFields</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationfields"></a>
<a id="schema_OrganizationFields"></a>
<a id="tocSorganizationfields"></a>
<a id="tocsorganizationfields"></a>

```json
"id"
```

<h2 id="tocS_Organization">Organization</h2>
<!-- backwards compatibility -->
<a id="schemaorganization"></a>
<a id="schema_Organization"></a>
<a id="tocSorganization"></a>
<a id="tocsorganization"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414",
  "name": "string",
  "displayName": "Organization Name",
  "dateLastActivity": "2018-10-17T19:10:14.808Z",
  "prefs": {
    "boardVisibilityRestrict": {},
    "boardDeleteRestrict": {},
    "attachmentRestrictions": [
      "computer"
    ],
    "permissionLevel": "private"
  },
  "idEnterprise": "5abbe4b7ddc1b351ef961414",
  "offering": "trello.enterprise",
  "url": "https://trello.com/w/<name>",
  "idBoards": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "memberships": [
    "5abbe4b7ddc1b351ef961414"
  ],
  "premiumFeatures": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|name|string|false|none|none|
|displayName|string|false|none|none|
|dateLastActivity|string(date)|false|none|none|
|prefs|[OrganizationPrefs](#schemaorganizationprefs)|false|none|none|
|idEnterprise|[TrelloID](#schematrelloid)|false|none|none|
|offering|string|false|none|none|
|url|string(url)|false|none|none|
|idBoards|[[TrelloID](#schematrelloid)]|false|none|none|
|memberships|[[TrelloID](#schematrelloid)]|false|none|none|
|premiumFeatures|[string]|false|none|none|

<h2 id="tocS_OrganizationPrefs">OrganizationPrefs</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationprefs"></a>
<a id="schema_OrganizationPrefs"></a>
<a id="tocSorganizationprefs"></a>
<a id="tocsorganizationprefs"></a>

```json
{
  "boardVisibilityRestrict": {},
  "boardDeleteRestrict": {},
  "attachmentRestrictions": [
    "computer"
  ],
  "permissionLevel": "private"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|boardVisibilityRestrict|object|false|none|none|
|boardDeleteRestrict|object|false|none|none|
|attachmentRestrictions|[string]|false|none|none|
|permissionLevel|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|attachmentRestrictions|computer|
|attachmentRestrictions|trello|
|attachmentRestrictions|google-drive|
|attachmentRestrictions|box|
|attachmentRestrictions|onedrive|
|attachmentRestrictions|link|
|permissionLevel|org|
|permissionLevel|private|
|permissionLevel|public|
|permissionLevel|enterprise|
|permissionLevel|domain|

<h2 id="tocS_PendingOrganizations">PendingOrganizations</h2>
<!-- backwards compatibility -->
<a id="schemapendingorganizations"></a>
<a id="schema_PendingOrganizations"></a>
<a id="tocSpendingorganizations"></a>
<a id="tocspendingorganizations"></a>

```json
{
  "id": "617ac9070293e6612650e0ca",
  "idMember": "5589c3ea49b40cedc28cf70e",
  "memberRequestor": {
    "id": "59cd149051aa57a706962996",
    "fullName": "Bob Loblaw (Trello)"
  },
  "date": "2018-10-17T19:10:14.808Z",
  "displayName": "Organization Name",
  "membershipCount": 2,
  "logoUrl": null,
  "transferability": {
    "transferrable": true,
    "newBillableMembers": [
      {
        "id": "5ab10be237846c43015f1091",
        "fullName": "Bob Loblaw",
        "username": "bobloblaw",
        "initials": "BL",
        "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
      }
    ],
    "restrictedMembers": [
      {
        "id": "5ab10be237846c43015f1091",
        "fullName": "Bob Loblaw",
        "username": "bobloblaw",
        "initials": "BL",
        "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|idMember|[TrelloID](#schematrelloid)|false|none|none|
|memberRequestor|object|false|none|none|
|date|string(date)|false|none|none|
|displayName|string|false|none|none|
|membershipCount|number|false|none|none|
|logoUrl|string \| null|false|none|none|
|transferability|object|false|none|none|

<h2 id="tocS_Plugin">Plugin</h2>
<!-- backwards compatibility -->
<a id="schemaplugin"></a>
<a id="schema_Plugin"></a>
<a id="tocSplugin"></a>
<a id="tocsplugin"></a>

```json
{
  "id": "5abbe4b7ddc1b351ef961414"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|

<h2 id="tocS_PluginData">PluginData</h2>
<!-- backwards compatibility -->
<a id="schemaplugindata"></a>
<a id="schema_PluginData"></a>
<a id="tocSplugindata"></a>
<a id="tocsplugindata"></a>

```json
{
  "id": "5c487f39294cab6ac1d6b305",
  "idPlugin": "55a5d915446f517774210003",
  "scope": "organization",
  "idModel": "586e8d7b1af892b26d5b76b1",
  "value": "{\"token\":\"S=s458:U=bda7cda:E=16fd2e21f55:C=1687b30f2c0:P=185:A=it-team-0604:V=2:H=3b0f3bac9c2a2af766202ebb9530a4a5\"}",
  "access": "private"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|idPlugin|[TrelloID](#schematrelloid)|false|none|none|
|scope|string|false|none|none|
|idModel|[TrelloID](#schematrelloid)|false|none|none|
|value|string|false|none|none|
|access|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|member|
|scope|board|
|scope|organization|
|scope|card|
|access|private|
|access|shared|

<h2 id="tocS_PluginListing">PluginListing</h2>
<!-- backwards compatibility -->
<a id="schemapluginlisting"></a>
<a id="schema_PluginListing"></a>
<a id="tocSpluginlisting"></a>
<a id="tocspluginlisting"></a>

```json
{
  "id": "5a7cd2f8f99c517f58da1579",
  "name": "Attachment Section Example",
  "locale": "en-US",
  "description": "The [Glitch](https://glitch.com) Power-Up allows you to...",
  "overview": ""
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|name|string|false|none|none|
|locale|string|false|none|none|
|description|string|false|none|none|
|overview|string|false|none|none|

<h2 id="tocS_Prefs">Prefs</h2>
<!-- backwards compatibility -->
<a id="schemaprefs"></a>
<a id="schema_Prefs"></a>
<a id="tocSprefs"></a>
<a id="tocsprefs"></a>

```json
{
  "permissionLevel": "org",
  "hideVotes": true,
  "voting": "disabled",
  "comments": "string",
  "invitations": "admins",
  "selfJoin": true,
  "cardCovers": true,
  "isTemplate": true,
  "cardAging": "pirate",
  "calendarFeedEnabled": true,
  "background": "5abbe4b7ddc1b351ef961414",
  "backgroundImage": "http://example.com",
  "backgroundImageScaled": [
    {
      "width": 100,
      "height": 64,
      "url": "https://trello-backgrounds.s3.amazonaws.com/SharedBackground/100x64/abc/photo-123.jpg"
    }
  ],
  "backgroundTile": true,
  "backgroundBrightness": "dark",
  "backgroundBottomColor": "#1e2e00",
  "backgroundTopColor": "#ffffff",
  "canBePublic": true,
  "canBeEnterprise": true,
  "canBeOrg": true,
  "canBePrivate": true,
  "canInvite": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|permissionLevel|string|false|none|none|
|hideVotes|boolean|false|none|none|
|voting|string|false|none|none|
|comments|string|false|none|none|
|invitations|string|false|none|none|
|selfJoin|boolean|false|none|none|
|cardCovers|boolean|false|none|none|
|isTemplate|boolean|false|none|none|
|cardAging|[CardAging](#schemacardaging)|false|none|none|
|calendarFeedEnabled|boolean|false|none|none|
|background|[TrelloID](#schematrelloid)|false|none|none|
|backgroundImage|string(uri)|false|none|none|
|backgroundImageScaled|[[ImageDescriptor](#schemaimagedescriptor)]|false|none|none|
|backgroundTile|boolean|false|none|none|
|backgroundBrightness|string|false|none|none|
|backgroundBottomColor|string|false|none|none|
|backgroundTopColor|string|false|none|none|
|canBePublic|boolean|false|none|none|
|canBeEnterprise|boolean|false|none|none|
|canBeOrg|boolean|false|none|none|
|canBePrivate|boolean|false|none|none|
|canInvite|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|permissionLevel|org|
|permissionLevel|board|
|voting|disabled|
|voting|enabled|
|invitations|admins|
|invitations|members|
|cardAging|pirate|
|cardAging|regular|

<h2 id="tocS_SavedSearch">SavedSearch</h2>
<!-- backwards compatibility -->
<a id="schemasavedsearch"></a>
<a id="schema_SavedSearch"></a>
<a id="tocSsavedsearch"></a>
<a id="tocssavedsearch"></a>

```json
{
  "id": "5589b47349b40cedc28ceae2",
  "name": "My Cards",
  "query": "@me",
  "pos": 1638
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|name|string|false|none|none|
|query|string|false|none|none|
|pos|[posStringOrNumber](#schemaposstringornumber)|false|none|none|

<h2 id="tocS_Tag">Tag</h2>
<!-- backwards compatibility -->
<a id="schematag"></a>
<a id="schema_Tag"></a>
<a id="tocStag"></a>
<a id="tocstag"></a>

```json
{
  "id": "58dd6dcaf8b86744d3cb4cde",
  "name": "My Collection"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_TokenPermission">TokenPermission</h2>
<!-- backwards compatibility -->
<a id="schematokenpermission"></a>
<a id="schema_TokenPermission"></a>
<a id="tocStokenpermission"></a>
<a id="tocstokenpermission"></a>

```json
{
  "idModel": "5abbe4b7ddc1b351ef961414",
  "modelType": "board",
  "read": true,
  "write": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idModel|[TrelloID](#schematrelloid) \| string|false|none|none|
|modelType|string|false|none|none|
|read|boolean|false|none|none|
|write|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|modelType|board|
|modelType|member|
|modelType|organization|
|modelType|enterprise|

<h2 id="tocS_TokenFields">TokenFields</h2>
<!-- backwards compatibility -->
<a id="schematokenfields"></a>
<a id="schema_TokenFields"></a>
<a id="tocStokenfields"></a>
<a id="tocstokenfields"></a>

```json
"identifier"
```

<h2 id="tocS_Token">Token</h2>
<!-- backwards compatibility -->
<a id="schematoken"></a>
<a id="schema_Token"></a>
<a id="tocStoken"></a>
<a id="tocstoken"></a>

```json
{
  "id": "5da728c55235b443c5b97181",
  "identifier": "App Name",
  "idMember": "5589c3ea49b40cedc28cf70e",
  "dateCreated": "2019-10-16T14:27:17.304Z",
  "dateExpires": null,
  "permissions": [
    {
      "idModel": "5abbe4b7ddc1b351ef961414",
      "modelType": "board",
      "read": true,
      "write": true
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|identifier|string|false|none|none|
|idMember|[TrelloID](#schematrelloid)|false|none|none|
|dateCreated|string(date-time)|false|none|none|
|dateExpires|string(date-time) \| null|false|none|none|
|permissions|[[TokenPermission](#schematokenpermission)]|false|none|none|

<h2 id="tocS_TransferrableOrganization">TransferrableOrganization</h2>
<!-- backwards compatibility -->
<a id="schematransferrableorganization"></a>
<a id="schema_TransferrableOrganization"></a>
<a id="tocStransferrableorganization"></a>
<a id="tocstransferrableorganization"></a>

```json
{
  "transferrable": true,
  "newBillableMembers": [
    {
      "id": "5ab10be237846c43015f1091",
      "fullName": "Bob Loblaw",
      "username": "bobloblaw",
      "initials": "BL",
      "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
    }
  ],
  "restrictedMembers": [
    {
      "id": "5ab10be237846c43015f1091",
      "fullName": "Bob Loblaw",
      "username": "bobloblaw",
      "initials": "BL",
      "avatarHash": "fc8faaaee46666a4eb8b626c08933e16"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|transferrable|boolean|false|none|none|
|newBillableMembers|[object]|false|none|none|
|restrictedMembers|[object]|false|none|none|

<h2 id="tocS_Webhook">Webhook</h2>
<!-- backwards compatibility -->
<a id="schemawebhook"></a>
<a id="schema_Webhook"></a>
<a id="tocSwebhook"></a>
<a id="tocswebhook"></a>

```json
{
  "id": "58dd6dcaf8b86744d3cb4cde",
  "description": "Board Webhook",
  "idModel": "59cd149051aa57a706962996",
  "callbackURL": "https://mywebhookurl.com/?type=board",
  "active": true,
  "consecutiveFailures": 0,
  "firstConsecutiveFailDate": null
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[TrelloID](#schematrelloid)|false|none|none|
|description|string|false|none|none|
|idModel|[TrelloID](#schematrelloid)|false|none|none|
|callbackURL|string(url)|false|none|none|
|active|boolean|false|none|none|
|consecutiveFailures|number|false|none|none|
|firstConsecutiveFailDate|string(date) \| null|false|none|none|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": "string",
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_CFValue">CFValue</h2>
<!-- backwards compatibility -->
<a id="schemacfvalue"></a>
<a id="schema_CFValue"></a>
<a id="tocScfvalue"></a>
<a id="tocscfvalue"></a>

```json
{
  "number": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|number|string|false|none|none|

<h2 id="tocS_customFieldItemValue">customFieldItemValue</h2>
<!-- backwards compatibility -->
<a id="schemacustomfielditemvalue"></a>
<a id="schema_customFieldItemValue"></a>
<a id="tocScustomfielditemvalue"></a>
<a id="tocscustomfielditemvalue"></a>

```json
{
  "value": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|value|object|false|none|none|
