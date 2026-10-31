<h1 id="annunciator-content-api">Annunciator content API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Get data from the annunciator system.

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">UK Parliament</a> 

<h1 id="annunciator-content-api-message">Message</h1>

## Return the current message by annunciator type

> Code samples

```bash
curl https://example.com/api/Message/message/CommonsMain/current \
  -H 'Accept: application/json'
```

`GET /api/Message/message/{annunciator}/current`

<h3 id="return-the-current-message-by-annunciator-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|annunciator|path|[AnnunciatorMessageType](#schemaannunciatormessagetype)|true|Current message by annunciator|

#### Enumerated Values

|Parameter|Value|
|---|---|
|annunciator|CommonsMain|
|annunciator|LordsMain|

> Example responses

> 200 Response

```json
{
  "annunciatorDisabled": true,
  "annunciatorType": "CommonsMain",
  "id": 0,
  "isSecurityOverride": true,
  "publishTime": "1970-01-01T00:00:00Z",
  "scrollingMessages": [
    {
      "alertType": "Standard",
      "content": "string",
      "displayFrom": "1970-01-01T00:00:00Z",
      "displayTo": "1970-01-01T00:00:00Z",
      "id": 0,
      "verticalAlignment": "Top"
    }
  ],
  "showCommonsBell": true,
  "showLordsBell": true,
  "slides": [
    {
      "carouselDisplaySeconds": 0,
      "carouselOrder": 0,
      "id": 0,
      "lines": [
        {
          "content": "string",
          "contentAdditionalJson": "string",
          "contentType": "Generic",
          "contentUrl": "string",
          "displayOrder": 0,
          "forceCapitalisation": true,
          "horizontalAlignment": "Left",
          "member": {
            "id": 0,
            "latestHouseMembership": {
              "membershipFrom": "string"
            },
            "latestParty": {
              "backgroundColour": "string",
              "id": 0,
              "name": "string"
            },
            "nameAddressAs": "string",
            "nameDisplayAs": "string",
            "nameFullTitle": "string",
            "nameListAs": "string",
            "thumbnailUrl": "string"
          },
          "style": "DividerSolid",
          "verticalAlignment": "Top"
        }
      ],
      "slideTime": "1970-01-01T00:00:00Z",
      "soundToPlay": "NewSlide",
      "speakerTime": "1970-01-01T00:00:00Z",
      "type": "Debate"
    }
  ]
}
```

<h3 id="return-the-current-message-by-annunciator-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[MessageViewModel](#schemamessageviewmodel)|
|404|Not Found|Not Found|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return the most recent message by annunciator after date time specified

> Code samples

```bash
curl https://example.com/api/Message/message/CommonsMain/1970-01-01T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /api/Message/message/{annunciator}/{date}`

<h3 id="return-the-most-recent-message-by-annunciator-after-date-time-specified-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|annunciator|path|[AnnunciatorMessageType](#schemaannunciatormessagetype)|true|Message by annunciator type|
|date|path|string(date-time)|true|First message after date time specified|

#### Enumerated Values

|Parameter|Value|
|---|---|
|annunciator|CommonsMain|
|annunciator|LordsMain|

> Example responses

> 200 Response

```json
{
  "annunciatorDisabled": true,
  "annunciatorType": "CommonsMain",
  "id": 0,
  "isSecurityOverride": true,
  "publishTime": "1970-01-01T00:00:00Z",
  "scrollingMessages": [
    {
      "alertType": "Standard",
      "content": "string",
      "displayFrom": "1970-01-01T00:00:00Z",
      "displayTo": "1970-01-01T00:00:00Z",
      "id": 0,
      "verticalAlignment": "Top"
    }
  ],
  "showCommonsBell": true,
  "showLordsBell": true,
  "slides": [
    {
      "carouselDisplaySeconds": 0,
      "carouselOrder": 0,
      "id": 0,
      "lines": [
        {
          "content": "string",
          "contentAdditionalJson": "string",
          "contentType": "Generic",
          "contentUrl": "string",
          "displayOrder": 0,
          "forceCapitalisation": true,
          "horizontalAlignment": "Left",
          "member": {
            "id": 0,
            "latestHouseMembership": {
              "membershipFrom": "string"
            },
            "latestParty": {
              "backgroundColour": "string",
              "id": 0,
              "name": "string"
            },
            "nameAddressAs": "string",
            "nameDisplayAs": "string",
            "nameFullTitle": "string",
            "nameListAs": "string",
            "thumbnailUrl": "string"
          },
          "style": "DividerSolid",
          "verticalAlignment": "Top"
        }
      ],
      "slideTime": "1970-01-01T00:00:00Z",
      "soundToPlay": "NewSlide",
      "speakerTime": "1970-01-01T00:00:00Z",
      "type": "Debate"
    }
  ]
}
```

<h3 id="return-the-most-recent-message-by-annunciator-after-date-time-specified-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Latest message for given annunciator was issued before specified date|[MessageViewModel](#schemamessageviewmodel)|
|400|Bad Request|Date provided wasn't in a valid format|None|
|404|Not Found|No message for given annunciator was issued before specified date|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AnnunciatorMessageType">AnnunciatorMessageType</h2>
<!-- backwards compatibility -->
<a id="schemaannunciatormessagetype"></a>
<a id="schema_AnnunciatorMessageType"></a>
<a id="tocSannunciatormessagetype"></a>
<a id="tocsannunciatormessagetype"></a>

```json
"CommonsMain"
```

<h2 id="tocS_ContentStyle">ContentStyle</h2>
<!-- backwards compatibility -->
<a id="schemacontentstyle"></a>
<a id="schema_ContentStyle"></a>
<a id="tocScontentstyle"></a>
<a id="tocscontentstyle"></a>

```json
"DividerSolid"
```

<h2 id="tocS_ContentType">ContentType</h2>
<!-- backwards compatibility -->
<a id="schemacontenttype"></a>
<a id="schema_ContentType"></a>
<a id="tocScontenttype"></a>
<a id="tocscontenttype"></a>

```json
"Generic"
```

<h2 id="tocS_HorizontalAlignment">HorizontalAlignment</h2>
<!-- backwards compatibility -->
<a id="schemahorizontalalignment"></a>
<a id="schema_HorizontalAlignment"></a>
<a id="tocShorizontalalignment"></a>
<a id="tocshorizontalalignment"></a>

```json
"Left"
```

<h2 id="tocS_HouseMembershipViewModel">HouseMembershipViewModel</h2>
<!-- backwards compatibility -->
<a id="schemahousemembershipviewmodel"></a>
<a id="schema_HouseMembershipViewModel"></a>
<a id="tocShousemembershipviewmodel"></a>
<a id="tocshousemembershipviewmodel"></a>

```json
{
  "membershipFrom": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|membershipFrom|string \| null|false|none|none|

<h2 id="tocS_LineViewModel">LineViewModel</h2>
<!-- backwards compatibility -->
<a id="schemalineviewmodel"></a>
<a id="schema_LineViewModel"></a>
<a id="tocSlineviewmodel"></a>
<a id="tocslineviewmodel"></a>

```json
{
  "content": "string",
  "contentAdditionalJson": "string",
  "contentType": "Generic",
  "contentUrl": "string",
  "displayOrder": 0,
  "forceCapitalisation": true,
  "horizontalAlignment": "Left",
  "member": {
    "id": 0,
    "latestHouseMembership": {
      "membershipFrom": "string"
    },
    "latestParty": {
      "backgroundColour": "string",
      "id": 0,
      "name": "string"
    },
    "nameAddressAs": "string",
    "nameDisplayAs": "string",
    "nameFullTitle": "string",
    "nameListAs": "string",
    "thumbnailUrl": "string"
  },
  "style": "DividerSolid",
  "verticalAlignment": "Top"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string \| null|false|none|none|
|contentAdditionalJson|string \| null|false|none|none|
|contentType|[ContentType](#schemacontenttype)|false|none|none|
|contentUrl|string \| null|false|none|none|
|displayOrder|integer(int32)|false|none|none|
|forceCapitalisation|boolean|false|none|none|
|horizontalAlignment|[HorizontalAlignment](#schemahorizontalalignment)|false|none|none|
|member|[MemberViewModel](#schemamemberviewmodel)|false|none|none|
|style|[ContentStyle](#schemacontentstyle)|false|none|none|
|verticalAlignment|[VerticalAlignment](#schemaverticalalignment)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|contentType|Generic|
|contentType|Member|
|contentType|OralQuestionTime|
|contentType|AnsweringBody|
|contentType|Bill|
|horizontalAlignment|Left|
|horizontalAlignment|Right|
|horizontalAlignment|Centre|
|style|DividerSolid|
|style|EmptyLine|
|style|Member|
|style|Footer|
|style|AnsweringBody|
|style|WestminsterHallInfo|
|style|GrandCommitteeInfo|
|style|DividerDotted|
|style|DividerDashed|
|style|Division|
|style|Text150|
|style|Text140|
|style|Text130|
|style|Text120|
|style|Text110|
|style|Text100|
|style|Text90|
|style|Text80|
|style|Text70|
|verticalAlignment|Top|
|verticalAlignment|Middle|
|verticalAlignment|Bottom|

<h2 id="tocS_MemberViewModel">MemberViewModel</h2>
<!-- backwards compatibility -->
<a id="schemamemberviewmodel"></a>
<a id="schema_MemberViewModel"></a>
<a id="tocSmemberviewmodel"></a>
<a id="tocsmemberviewmodel"></a>

```json
{
  "id": 0,
  "latestHouseMembership": {
    "membershipFrom": "string"
  },
  "latestParty": {
    "backgroundColour": "string",
    "id": 0,
    "name": "string"
  },
  "nameAddressAs": "string",
  "nameDisplayAs": "string",
  "nameFullTitle": "string",
  "nameListAs": "string",
  "thumbnailUrl": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|none|
|latestHouseMembership|[HouseMembershipViewModel](#schemahousemembershipviewmodel)|false|none|none|
|latestParty|[PartyViewModel](#schemapartyviewmodel)|false|none|none|
|nameAddressAs|string \| null|false|none|none|
|nameDisplayAs|string \| null|false|none|none|
|nameFullTitle|string \| null|false|none|none|
|nameListAs|string \| null|false|none|none|
|thumbnailUrl|string \| null|false|none|none|

<h2 id="tocS_MessageViewModel">MessageViewModel</h2>
<!-- backwards compatibility -->
<a id="schemamessageviewmodel"></a>
<a id="schema_MessageViewModel"></a>
<a id="tocSmessageviewmodel"></a>
<a id="tocsmessageviewmodel"></a>

```json
{
  "annunciatorDisabled": true,
  "annunciatorType": "CommonsMain",
  "id": 0,
  "isSecurityOverride": true,
  "publishTime": "1970-01-01T00:00:00Z",
  "scrollingMessages": [
    {
      "alertType": "Standard",
      "content": "string",
      "displayFrom": "1970-01-01T00:00:00Z",
      "displayTo": "1970-01-01T00:00:00Z",
      "id": 0,
      "verticalAlignment": "Top"
    }
  ],
  "showCommonsBell": true,
  "showLordsBell": true,
  "slides": [
    {
      "carouselDisplaySeconds": 0,
      "carouselOrder": 0,
      "id": 0,
      "lines": [
        {
          "content": "string",
          "contentAdditionalJson": "string",
          "contentType": "Generic",
          "contentUrl": "string",
          "displayOrder": 0,
          "forceCapitalisation": true,
          "horizontalAlignment": "Left",
          "member": {
            "id": 0,
            "latestHouseMembership": {
              "membershipFrom": "string"
            },
            "latestParty": {
              "backgroundColour": "string",
              "id": 0,
              "name": "string"
            },
            "nameAddressAs": "string",
            "nameDisplayAs": "string",
            "nameFullTitle": "string",
            "nameListAs": "string",
            "thumbnailUrl": "string"
          },
          "style": "DividerSolid",
          "verticalAlignment": "Top"
        }
      ],
      "slideTime": "1970-01-01T00:00:00Z",
      "soundToPlay": "NewSlide",
      "speakerTime": "1970-01-01T00:00:00Z",
      "type": "Debate"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annunciatorDisabled|boolean|false|none|none|
|annunciatorType|[AnnunciatorMessageType](#schemaannunciatormessagetype)|false|none|none|
|id|integer(int32)|false|none|none|
|isSecurityOverride|boolean|false|none|none|
|publishTime|string(date-time)|false|none|none|
|scrollingMessages|[[ScrollingMessageViewModel](#schemascrollingmessageviewmodel)]|false|none|none|
|showCommonsBell|boolean|false|none|none|
|showLordsBell|boolean|false|none|none|
|slides|[[SlideViewModel](#schemaslideviewmodel)]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|annunciatorType|CommonsMain|
|annunciatorType|LordsMain|

<h2 id="tocS_PartyViewModel">PartyViewModel</h2>
<!-- backwards compatibility -->
<a id="schemapartyviewmodel"></a>
<a id="schema_PartyViewModel"></a>
<a id="tocSpartyviewmodel"></a>
<a id="tocspartyviewmodel"></a>

```json
{
  "backgroundColour": "string",
  "id": 0,
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|backgroundColour|string \| null|false|none|none|
|id|integer(int32)|false|none|none|
|name|string \| null|false|none|none|

<h2 id="tocS_ScrollingMessageAlertType">ScrollingMessageAlertType</h2>
<!-- backwards compatibility -->
<a id="schemascrollingmessagealerttype"></a>
<a id="schema_ScrollingMessageAlertType"></a>
<a id="tocSscrollingmessagealerttype"></a>
<a id="tocsscrollingmessagealerttype"></a>

```json
"Standard"
```

<h2 id="tocS_ScrollingMessageViewModel">ScrollingMessageViewModel</h2>
<!-- backwards compatibility -->
<a id="schemascrollingmessageviewmodel"></a>
<a id="schema_ScrollingMessageViewModel"></a>
<a id="tocSscrollingmessageviewmodel"></a>
<a id="tocsscrollingmessageviewmodel"></a>

```json
{
  "alertType": "Standard",
  "content": "string",
  "displayFrom": "1970-01-01T00:00:00Z",
  "displayTo": "1970-01-01T00:00:00Z",
  "id": 0,
  "verticalAlignment": "Top"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alertType|[ScrollingMessageAlertType](#schemascrollingmessagealerttype)|false|none|none|
|content|string \| null|false|none|none|
|displayFrom|string(date-time)|false|none|none|
|displayTo|string(date-time) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|verticalAlignment|[VerticalAlignment](#schemaverticalalignment)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|alertType|Standard|
|alertType|SecondaryChamber|
|alertType|Alert|
|alertType|SecurityNormal|
|alertType|SecurityHigh|
|verticalAlignment|Top|
|verticalAlignment|Middle|
|verticalAlignment|Bottom|

<h2 id="tocS_SlideType">SlideType</h2>
<!-- backwards compatibility -->
<a id="schemaslidetype"></a>
<a id="schema_SlideType"></a>
<a id="tocSslidetype"></a>
<a id="tocsslidetype"></a>

```json
"Debate"
```

<h2 id="tocS_SlideViewModel">SlideViewModel</h2>
<!-- backwards compatibility -->
<a id="schemaslideviewmodel"></a>
<a id="schema_SlideViewModel"></a>
<a id="tocSslideviewmodel"></a>
<a id="tocsslideviewmodel"></a>

```json
{
  "carouselDisplaySeconds": 0,
  "carouselOrder": 0,
  "id": 0,
  "lines": [
    {
      "content": "string",
      "contentAdditionalJson": "string",
      "contentType": "Generic",
      "contentUrl": "string",
      "displayOrder": 0,
      "forceCapitalisation": true,
      "horizontalAlignment": "Left",
      "member": {
        "id": 0,
        "latestHouseMembership": {
          "membershipFrom": "string"
        },
        "latestParty": {
          "backgroundColour": "string",
          "id": 0,
          "name": "string"
        },
        "nameAddressAs": "string",
        "nameDisplayAs": "string",
        "nameFullTitle": "string",
        "nameListAs": "string",
        "thumbnailUrl": "string"
      },
      "style": "DividerSolid",
      "verticalAlignment": "Top"
    }
  ],
  "slideTime": "1970-01-01T00:00:00Z",
  "soundToPlay": "NewSlide",
  "speakerTime": "1970-01-01T00:00:00Z",
  "type": "Debate"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|carouselDisplaySeconds|integer(int32) \| null|false|none|none|
|carouselOrder|integer(int32) \| null|false|none|none|
|id|integer(int32)|false|none|none|
|lines|[[LineViewModel](#schemalineviewmodel)]|false|none|none|
|slideTime|string(date-time) \| null|false|none|none|
|soundToPlay|[Sounds](#schemasounds)|false|none|none|
|speakerTime|string(date-time) \| null|false|none|none|
|type|[SlideType](#schemaslidetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|soundToPlay|NewSlide|
|soundToPlay|DivisionBell|
|soundToPlay|Alert|
|soundToPlay|GenericBeep|
|type|Debate|
|type|Division|
|type|OralQuestionTime|
|type|UrgentQuestion|
|type|Statement|
|type|Prayers|
|type|HouseRisen|
|type|Generic|
|type|NotSitting|
|type|PrimeMinistersQuestions|
|type|PointsOfOrder|
|type|BlankSlide|

<h2 id="tocS_Sounds">Sounds</h2>
<!-- backwards compatibility -->
<a id="schemasounds"></a>
<a id="schema_Sounds"></a>
<a id="tocSsounds"></a>
<a id="tocssounds"></a>

```json
"NewSlide"
```

<h2 id="tocS_VerticalAlignment">VerticalAlignment</h2>
<!-- backwards compatibility -->
<a id="schemaverticalalignment"></a>
<a id="schema_VerticalAlignment"></a>
<a id="tocSverticalalignment"></a>
<a id="tocsverticalalignment"></a>

```json
"Top"
```
