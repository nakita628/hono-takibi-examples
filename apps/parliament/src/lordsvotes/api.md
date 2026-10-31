<h1 id="lords-votes-api">Lords Votes API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

An API that allows querying of Lords Votes data.

Email: <a href="mailto:softwareengineering@parliament.uk">UK Parliament</a> 
Web: <a href="https://www.parliament.uk/">UK Parliament</a> 

<h1 id="lords-votes-api-divisions">Divisions</h1>

## Return Divisions results grouped by party

> Code samples

```bash
curl https://example.com/data/Divisions/groupedbyparty \
  -H 'Accept: application/json'
```

`GET /data/Divisions/groupedbyparty`

Get a list of Divisions which contain grouped by party

<h3 id="return-divisions-results-grouped-by-party-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SearchTerm|query|string \| null|false|Divisions containing search term within title or number|
|MemberId|query|integer(int32) \| null|false|Divisions returning Member with Member ID voting records|
|IncludeWhenMemberWasTeller|query|boolean \| null|false|Divisions where member was a teller as well as if they actually voted|
|StartDate|query|string(date-time) \| null|false|Divisions where division date in one or after date provided. Date format is yyyy-MM-dd|
|EndDate|query|string(date-time) \| null|false|Divisions where division date in one or before date provided. Date format is yyyy-MM-dd|
|DivisionNumber|query|integer(int32) \| null|false|Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint|
|TotalVotesCast.Comparator|query|[Comparators](#schemacomparators)|false|comparison operator to use|
|TotalVotesCast.ValueToCompare|query|integer(int32)|false|value to compare to with the operator provided|
|Majority.Comparator|query|[Comparators](#schemacomparators)|false|comparison operator to use|
|Majority.ValueToCompare|query|integer(int32)|false|value to compare to with the operator provided|

#### Enumerated Values

|Parameter|Value|
|---|---|
|TotalVotesCast.Comparator|LessThan|
|TotalVotesCast.Comparator|LessThanOrEqualTo|
|TotalVotesCast.Comparator|EqualTo|
|TotalVotesCast.Comparator|GreaterThanOrEqualTo|
|TotalVotesCast.Comparator|GreaterThan|
|Majority.Comparator|LessThan|
|Majority.Comparator|LessThanOrEqualTo|
|Majority.Comparator|EqualTo|
|Majority.Comparator|GreaterThanOrEqualTo|
|Majority.Comparator|GreaterThan|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "partyName": "string",
      "voteCount": 0
    }
  ],
  "contentCount": 0,
  "date": "1970-01-01T00:00:00Z",
  "divisionId": 0,
  "notContent": [
    {
      "partyName": "string",
      "voteCount": 0
    }
  ],
  "notContentCount": 0,
  "number": 0,
  "title": "string"
}
```

<h3 id="return-divisions-results-grouped-by-party-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of divisions with votes grouped by party|[DivisionGroupByPartyViewModel](#schemadivisiongroupbypartyviewmodel)|
|400|Bad Request|A parameter was not valid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return voting records for a Member

> Code samples

```bash
curl 'https://example.com/data/Divisions/membervoting?MemberId=1' \
  -H 'Accept: application/json'
```

`GET /data/Divisions/membervoting`

Get a list of voting records for a Member.

<h3 id="return-voting-records-for-a-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|MemberId|query|integer(int32)|true|Id number of a Member whose voting records are to be returned|
|SearchTerm|query|string \| null|false|Divisions containing search term within title or number|
|IncludeWhenMemberWasTeller|query|boolean \| null|false|Divisions where member was a teller as well as if they actually voted|
|StartDate|query|string(date-time) \| null|false|Divisions where division date in one or after date provided. Date format is yyyy-MM-dd|
|EndDate|query|string(date-time) \| null|false|Divisions where division date in one or before date provided. Date format is yyyy-MM-dd|
|DivisionNumber|query|integer(int32) \| null|false|Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint|
|TotalVotesCast.Comparator|query|[Comparators](#schemacomparators)|false|comparison operator to use|
|TotalVotesCast.ValueToCompare|query|integer(int32)|false|value to compare to with the operator provided|
|Majority.Comparator|query|[Comparators](#schemacomparators)|false|comparison operator to use|
|Majority.ValueToCompare|query|integer(int32)|false|value to compare to with the operator provided|
|skip|query|integer(int32)|false|The number of records to skip. Must be a positive integer. Default is 0|
|take|query|integer(int32)|false|The number of records to return per page. Must be more than 0. Default is 25|

#### Enumerated Values

|Parameter|Value|
|---|---|
|TotalVotesCast.Comparator|LessThan|
|TotalVotesCast.Comparator|LessThanOrEqualTo|
|TotalVotesCast.Comparator|EqualTo|
|TotalVotesCast.Comparator|GreaterThanOrEqualTo|
|TotalVotesCast.Comparator|GreaterThan|
|Majority.Comparator|LessThan|
|Majority.Comparator|LessThanOrEqualTo|
|Majority.Comparator|EqualTo|
|Majority.Comparator|GreaterThanOrEqualTo|
|Majority.Comparator|GreaterThan|

> Example responses

> 200 Response

```json
{
  "memberId": 0,
  "memberWasContent": true,
  "memberWasTeller": true,
  "publishedDivision": {
    "amendmentMotionNotes": "string",
    "authoritativeContentCount": 0,
    "authoritativeNotContentCount": 0,
    "contentTellers": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "contents": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "date": "1970-01-01T00:00:00Z",
    "divisionHadTellers": true,
    "divisionId": 0,
    "divisionWasExclusivelyRemote": true,
    "isGovernmentContent": true,
    "isGovernmentWin": true,
    "isHouse": true,
    "isWhipped": true,
    "memberContentCount": 0,
    "memberNotContentCount": 0,
    "notContentTellers": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "notContents": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "notes": "string",
    "number": 0,
    "remoteVotingEnd": "1970-01-01T00:00:00Z",
    "remoteVotingStart": "1970-01-01T00:00:00Z",
    "sponsoringMemberId": 0,
    "tellerContentCount": 0,
    "tellerNotContentCount": 0,
    "title": "string"
  }
}
```

<h3 id="return-voting-records-for-a-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of voting records for a member|[MemberVotingRecordViewModel](#schemamembervotingrecordviewmodel)|
|400|Bad Request|A parameter was not valid|None|
|503|Service Unavailable|Temporary error occured when trying to get division|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of Divisions

> Code samples

```bash
curl https://example.com/data/Divisions/search \
  -H 'Accept: application/json'
```

`GET /data/Divisions/search`

Get a list of Divisions which meet the specified criteria.

<h3 id="return-a-list-of-divisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SearchTerm|query|string \| null|false|Divisions containing search term within title or number|
|MemberId|query|integer(int32) \| null|false|Divisions returning Member with Member ID voting records|
|IncludeWhenMemberWasTeller|query|boolean \| null|false|Divisions where member was a teller as well as if they actually voted|
|StartDate|query|string(date-time) \| null|false|Divisions where division date in one or after date provided. Date format is yyyy-MM-dd|
|EndDate|query|string(date-time) \| null|false|Divisions where division date in one or before date provided. Date format is yyyy-MM-dd|
|DivisionNumber|query|integer(int32) \| null|false|Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint|
|TotalVotesCast.Comparator|query|[Comparators](#schemacomparators)|false|comparison operator to use|
|TotalVotesCast.ValueToCompare|query|integer(int32)|false|value to compare to with the operator provided|
|Majority.Comparator|query|[Comparators](#schemacomparators)|false|comparison operator to use|
|Majority.ValueToCompare|query|integer(int32)|false|value to compare to with the operator provided|
|skip|query|integer(int32)|false|The number of records to skip. Must be a positive integer. Default is 0|
|take|query|integer(int32)|false|The number of records to return per page. Must be more than 0. Default is 25|

#### Enumerated Values

|Parameter|Value|
|---|---|
|TotalVotesCast.Comparator|LessThan|
|TotalVotesCast.Comparator|LessThanOrEqualTo|
|TotalVotesCast.Comparator|EqualTo|
|TotalVotesCast.Comparator|GreaterThanOrEqualTo|
|TotalVotesCast.Comparator|GreaterThan|
|Majority.Comparator|LessThan|
|Majority.Comparator|LessThanOrEqualTo|
|Majority.Comparator|EqualTo|
|Majority.Comparator|GreaterThanOrEqualTo|
|Majority.Comparator|GreaterThan|

> Example responses

> 200 Response

```json
[
  {
    "amendmentMotionNotes": "string",
    "authoritativeContentCount": 0,
    "authoritativeNotContentCount": 0,
    "contentTellers": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "contents": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "date": "1970-01-01T00:00:00Z",
    "divisionHadTellers": true,
    "divisionId": 0,
    "divisionWasExclusivelyRemote": true,
    "isGovernmentContent": true,
    "isGovernmentWin": true,
    "isHouse": true,
    "isWhipped": true,
    "memberContentCount": 0,
    "memberNotContentCount": 0,
    "notContentTellers": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "notContents": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "notes": "string",
    "number": 0,
    "remoteVotingEnd": "1970-01-01T00:00:00Z",
    "remoteVotingStart": "1970-01-01T00:00:00Z",
    "sponsoringMemberId": 0,
    "tellerContentCount": 0,
    "tellerNotContentCount": 0,
    "title": "string"
  }
]
```

<h3 id="return-a-list-of-divisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of divisions matching specified parameters|Inline|
|400|Bad Request|A parameter was not valid|None|
|503|Service Unavailable|Temporary error occured when trying to get division|None|

<h3 id="return-a-list-of-divisions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[DivisionViewModel](#schemadivisionviewmodel)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Return total results count

> Code samples

```bash
curl https://example.com/data/Divisions/searchTotalResults \
  -H 'Accept: application/json'
```

`GET /data/Divisions/searchTotalResults`

Get total count of Divisions meeting the specified query, useful for paging lists etc...

<h3 id="return-total-results-count-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|SearchTerm|query|string \| null|false|Divisions containing search term within title or number|
|MemberId|query|integer(int32) \| null|false|Divisions returning Member with Member ID voting records|
|IncludeWhenMemberWasTeller|query|boolean \| null|false|Divisions where member was a teller as well as if they actually voted|
|StartDate|query|string(date-time) \| null|false|Divisions where division date in one or after date provided. Date format is yyyy-MM-dd|
|EndDate|query|string(date-time) \| null|false|Divisions where division date in one or before date provided. Date format is yyyy-MM-dd|
|DivisionNumber|query|integer(int32) \| null|false|Division Number - as specified by the House, unique within a session. This is different to the division id which uniquely identifies a division in this system and is passed to the GET division endpoint|
|TotalVotesCast.Comparator|query|[Comparators](#schemacomparators)|false|comparison operator to use|
|TotalVotesCast.ValueToCompare|query|integer(int32)|false|value to compare to with the operator provided|
|Majority.Comparator|query|[Comparators](#schemacomparators)|false|comparison operator to use|
|Majority.ValueToCompare|query|integer(int32)|false|value to compare to with the operator provided|

#### Enumerated Values

|Parameter|Value|
|---|---|
|TotalVotesCast.Comparator|LessThan|
|TotalVotesCast.Comparator|LessThanOrEqualTo|
|TotalVotesCast.Comparator|EqualTo|
|TotalVotesCast.Comparator|GreaterThanOrEqualTo|
|TotalVotesCast.Comparator|GreaterThan|
|Majority.Comparator|LessThan|
|Majority.Comparator|LessThanOrEqualTo|
|Majority.Comparator|EqualTo|
|Majority.Comparator|GreaterThanOrEqualTo|
|Majority.Comparator|GreaterThan|

> Example responses

> 200 Response

```json
0
```

<h3 id="return-total-results-count-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Division with id matching given divisionId|Inline|
|400|Bad Request|divisionId was not valid|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a Division

> Code samples

```bash
curl https://example.com/data/Divisions/0 \
  -H 'Accept: application/json'
```

`GET /data/Divisions/{divisionId}`

Get a single Division which has the Id specified.

<h3 id="return-a-division-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|divisionId|path|integer(int32)|true|Division with ID specified|

> Example responses

> 200 Response

```json
{
  "amendmentMotionNotes": "string",
  "authoritativeContentCount": 0,
  "authoritativeNotContentCount": 0,
  "contentTellers": [
    {
      "listAs": "string",
      "memberFrom": "string",
      "memberId": 0,
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "partyIsMainParty": true
    }
  ],
  "contents": [
    {
      "listAs": "string",
      "memberFrom": "string",
      "memberId": 0,
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "partyIsMainParty": true
    }
  ],
  "date": "1970-01-01T00:00:00Z",
  "divisionHadTellers": true,
  "divisionId": 0,
  "divisionWasExclusivelyRemote": true,
  "isGovernmentContent": true,
  "isGovernmentWin": true,
  "isHouse": true,
  "isWhipped": true,
  "memberContentCount": 0,
  "memberNotContentCount": 0,
  "notContentTellers": [
    {
      "listAs": "string",
      "memberFrom": "string",
      "memberId": 0,
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "partyIsMainParty": true
    }
  ],
  "notContents": [
    {
      "listAs": "string",
      "memberFrom": "string",
      "memberId": 0,
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "partyIsMainParty": true
    }
  ],
  "notes": "string",
  "number": 0,
  "remoteVotingEnd": "1970-01-01T00:00:00Z",
  "remoteVotingStart": "1970-01-01T00:00:00Z",
  "sponsoringMemberId": 0,
  "tellerContentCount": 0,
  "tellerNotContentCount": 0,
  "title": "string"
}
```

<h3 id="return-a-division-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Division with id matching given divisionId|[DivisionViewModel](#schemadivisionviewmodel)|
|400|Bad Request|divisionId was not valid|None|
|404|Not Found|Division with given divisionId was not found|None|
|503|Service Unavailable|Temporary error occured when trying to get division|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Comparators">Comparators</h2>
<!-- backwards compatibility -->
<a id="schemacomparators"></a>
<a id="schema_Comparators"></a>
<a id="tocScomparators"></a>
<a id="tocscomparators"></a>

```json
"LessThan"
```

<h2 id="tocS_DivisionGroupByPartyViewModel">DivisionGroupByPartyViewModel</h2>
<!-- backwards compatibility -->
<a id="schemadivisiongroupbypartyviewmodel"></a>
<a id="schema_DivisionGroupByPartyViewModel"></a>
<a id="tocSdivisiongroupbypartyviewmodel"></a>
<a id="tocsdivisiongroupbypartyviewmodel"></a>

```json
{
  "content": [
    {
      "partyName": "string",
      "voteCount": 0
    }
  ],
  "contentCount": 0,
  "date": "1970-01-01T00:00:00Z",
  "divisionId": 0,
  "notContent": [
    {
      "partyName": "string",
      "voteCount": 0
    }
  ],
  "notContentCount": 0,
  "number": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[PartyVoteResultViewModel](#schemapartyvoteresultviewmodel)]|false|none|none|
|contentCount|integer(int32)|false|read-only|none|
|date|string(date-time)|false|none|none|
|divisionId|integer(int32)|false|none|none|
|notContent|[[PartyVoteResultViewModel](#schemapartyvoteresultviewmodel)]|false|none|none|
|notContentCount|integer(int32)|false|read-only|none|
|number|integer(int32)|false|none|none|
|title|string \| null|false|none|none|

<h2 id="tocS_DivisionViewModel">DivisionViewModel</h2>
<!-- backwards compatibility -->
<a id="schemadivisionviewmodel"></a>
<a id="schema_DivisionViewModel"></a>
<a id="tocSdivisionviewmodel"></a>
<a id="tocsdivisionviewmodel"></a>

```json
{
  "amendmentMotionNotes": "string",
  "authoritativeContentCount": 0,
  "authoritativeNotContentCount": 0,
  "contentTellers": [
    {
      "listAs": "string",
      "memberFrom": "string",
      "memberId": 0,
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "partyIsMainParty": true
    }
  ],
  "contents": [
    {
      "listAs": "string",
      "memberFrom": "string",
      "memberId": 0,
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "partyIsMainParty": true
    }
  ],
  "date": "1970-01-01T00:00:00Z",
  "divisionHadTellers": true,
  "divisionId": 0,
  "divisionWasExclusivelyRemote": true,
  "isGovernmentContent": true,
  "isGovernmentWin": true,
  "isHouse": true,
  "isWhipped": true,
  "memberContentCount": 0,
  "memberNotContentCount": 0,
  "notContentTellers": [
    {
      "listAs": "string",
      "memberFrom": "string",
      "memberId": 0,
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "partyIsMainParty": true
    }
  ],
  "notContents": [
    {
      "listAs": "string",
      "memberFrom": "string",
      "memberId": 0,
      "name": "string",
      "party": "string",
      "partyAbbreviation": "string",
      "partyColour": "string",
      "partyIsMainParty": true
    }
  ],
  "notes": "string",
  "number": 0,
  "remoteVotingEnd": "1970-01-01T00:00:00Z",
  "remoteVotingStart": "1970-01-01T00:00:00Z",
  "sponsoringMemberId": 0,
  "tellerContentCount": 0,
  "tellerNotContentCount": 0,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|amendmentMotionNotes|string \| null|false|none|none|
|authoritativeContentCount|integer(int32)|false|none|Authoritative content count is the official count. This is the teller content count when tellers are present, but member content count when there are no tellers.|
|authoritativeNotContentCount|integer(int32)|false|none|Authoritative not content count is the official count. This is the teller not content count when tellers are present, but member not content count when there are no tellers.|
|contentTellers|[[MemberViewModel](#schemamemberviewmodel)]|false|none|none|
|contents|[[MemberViewModel](#schemamemberviewmodel)]|false|none|none|
|date|string(date-time)|false|none|none|
|divisionHadTellers|boolean|false|none|Whether the division had tellers or not|
|divisionId|integer(int32)|false|none|none|
|divisionWasExclusivelyRemote|boolean|false|none|none|
|isGovernmentContent|boolean|false|none|none|
|isGovernmentWin|boolean \| null|false|none|none|
|isHouse|boolean \| null|false|none|none|
|isWhipped|boolean|false|none|none|
|memberContentCount|integer(int32)|false|none|Member content count is the total tally of all members that voted content|
|memberNotContentCount|integer(int32)|false|none|Member not content count is the total tally of all members that voted not content|
|notContentTellers|[[MemberViewModel](#schemamemberviewmodel)]|false|none|none|
|notContents|[[MemberViewModel](#schemamemberviewmodel)]|false|none|none|
|notes|string \| null|false|none|none|
|number|integer(int32)|false|none|none|
|remoteVotingEnd|string(date-time) \| null|false|none|none|
|remoteVotingStart|string(date-time) \| null|false|none|none|
|sponsoringMemberId|integer(int32) \| null|false|none|none|
|tellerContentCount|integer(int32)|false|none|Content count is count recorded by the tellers|
|tellerNotContentCount|integer(int32)|false|none|Not Content count recorded by the tellers|
|title|string \| null|false|none|none|

<h2 id="tocS_MemberViewModel">MemberViewModel</h2>
<!-- backwards compatibility -->
<a id="schemamemberviewmodel"></a>
<a id="schema_MemberViewModel"></a>
<a id="tocSmemberviewmodel"></a>
<a id="tocsmemberviewmodel"></a>

```json
{
  "listAs": "string",
  "memberFrom": "string",
  "memberId": 0,
  "name": "string",
  "party": "string",
  "partyAbbreviation": "string",
  "partyColour": "string",
  "partyIsMainParty": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|listAs|string \| null|false|none|none|
|memberFrom|string \| null|false|none|none|
|memberId|integer(int32)|false|none|none|
|name|string \| null|false|none|none|
|party|string \| null|false|none|none|
|partyAbbreviation|string \| null|false|none|none|
|partyColour|string \| null|false|none|none|
|partyIsMainParty|boolean|false|none|none|

<h2 id="tocS_MemberVotingRecordViewModel">MemberVotingRecordViewModel</h2>
<!-- backwards compatibility -->
<a id="schemamembervotingrecordviewmodel"></a>
<a id="schema_MemberVotingRecordViewModel"></a>
<a id="tocSmembervotingrecordviewmodel"></a>
<a id="tocsmembervotingrecordviewmodel"></a>

```json
{
  "memberId": 0,
  "memberWasContent": true,
  "memberWasTeller": true,
  "publishedDivision": {
    "amendmentMotionNotes": "string",
    "authoritativeContentCount": 0,
    "authoritativeNotContentCount": 0,
    "contentTellers": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "contents": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "date": "1970-01-01T00:00:00Z",
    "divisionHadTellers": true,
    "divisionId": 0,
    "divisionWasExclusivelyRemote": true,
    "isGovernmentContent": true,
    "isGovernmentWin": true,
    "isHouse": true,
    "isWhipped": true,
    "memberContentCount": 0,
    "memberNotContentCount": 0,
    "notContentTellers": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "notContents": [
      {
        "listAs": "string",
        "memberFrom": "string",
        "memberId": 0,
        "name": "string",
        "party": "string",
        "partyAbbreviation": "string",
        "partyColour": "string",
        "partyIsMainParty": true
      }
    ],
    "notes": "string",
    "number": 0,
    "remoteVotingEnd": "1970-01-01T00:00:00Z",
    "remoteVotingStart": "1970-01-01T00:00:00Z",
    "sponsoringMemberId": 0,
    "tellerContentCount": 0,
    "tellerNotContentCount": 0,
    "title": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|memberId|integer(int32)|false|none|none|
|memberWasContent|boolean|false|none|none|
|memberWasTeller|boolean|false|none|none|
|publishedDivision|[DivisionViewModel](#schemadivisionviewmodel)|false|none|none|

<h2 id="tocS_PartyVoteResultViewModel">PartyVoteResultViewModel</h2>
<!-- backwards compatibility -->
<a id="schemapartyvoteresultviewmodel"></a>
<a id="schema_PartyVoteResultViewModel"></a>
<a id="tocSpartyvoteresultviewmodel"></a>
<a id="tocspartyvoteresultviewmodel"></a>

```json
{
  "partyName": "string",
  "voteCount": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|partyName|string \| null|false|none|none|
|voteCount|integer(int32)|false|none|none|
