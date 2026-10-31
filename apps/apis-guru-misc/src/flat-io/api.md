<h1 id="flat-api">Flat API v2.13.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The Flat API allows you to easily extend the abilities of the [Flat Platform](https://flat.io), with a wide range of use cases including the following:

* Creating and importing new music scores using MusicXML, MIDI, Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar and MuseScore files
* Browsing, updating, copying, exporting the user's scores (for example in MP3, WAV or MIDI)
* Managing educational resources with Flat for Education: creating & updating the organization accounts, the classes, rosters and assignments.

The Flat API is built on HTTP. Our API is RESTful It has predictable resource URLs. It returns HTTP response codes to indicate errors. It also accepts and returns JSON in the HTTP body.
The [schema](/swagger.yaml) of this API follows the [OpenAPI Initiative (OAI) specification](https://www.openapis.org/), you can use and work with [compatible Swagger tools](http://swagger.io/open-source-integrations/).
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with [W3C spec](https://www.w3.org/TR/cors/).

You can use your favorite HTTP/REST library for your programming language to use Flat's API. This specification and reference is [available on Github](https://github.com/FlatIO/api-reference).

Getting Started and learn more:

* [API Overview and introduction](https://flat.io/developers/docs/api/)
* [Authentication (Personal Access Tokens or OAuth2)](https://flat.io/developers/docs/api/authentication.html)
* [SDKs](https://flat.io/developers/docs/api/sdks.html)
* [Rate Limits](https://flat.io/developers/docs/api/rate-limits.html)
* [Changelog](https://flat.io/developers/docs/api/changelog.html)

Base URLs:

* <a href="https://api.flat.io/v2">https://api.flat.io/v2</a>

<a href="https://flat.io/legal">Terms of service</a>
Email: <a href="mailto:developers@flat.io">Flat</a> 
Web: <a href="https://flat.io/developers/docs/api/">Flat</a> 

# Authentication

- oAuth2 authentication. OAuth 2.0 authentication for your app or. Please only request the most restrictive and needed scopes. Using some of the scopes may require an additional review from our team. The Flat API supports **authorization code** and **implicit** flows.

    - Flow: authorizationCode
    - Authorization URL = [https://flat.io/auth/oauth](https://flat.io/auth/oauth)
    - Token URL = [https://api.flat.io/oauth/access_token](https://api.flat.io/oauth/access_token)

|Scope|Scope Description|
|---|---|
|account.education_profile|Provides access to the basic person's education profile and public organization information.<br>|
|account.email|Provices access to the person's email.<br>|
|account.public_profile|Provides access to the basic person's public profile. Education profiles may be anonymized with this scope, you can request the scope `education_profile` to access to the a basic education account profile.<br>|
|collections|Full, permissive scope to access all of a user's collections.|
|collections.add_scores|Allow to add scores to a user's collections.|
|collections.readonly|Allow read-only access to a user's collections.|
|edu.admin|Full, permissive scope to manage all the admin of an organization.|
|edu.admin.lti|Access and manage the LTI Credentials for an organization.|
|edu.admin.lti.readonly|Read-only access to the LTI Credentials of an organization.|
|edu.admin.users|Access and manage the users and invitations of the organization.|
|edu.admin.users.readonly|Read-only access to the users and invitations of the organization.|
|edu.assignments|Read-write access to the assignments and submissions.|
|edu.assignments.readonly|Read-only access to the assignments and submissions.|
|edu.classes|Full, permissive scope to manage the classes.|
|edu.classes.readonly|Read-only access to the classes.|
|scores|Full, permissive scope to access all of a user's scores.<br>|
|scores.readonly|Allows read-only access to all a user's scores. You won't need this scope to read public scores.<br>|
|scores.social|Allow to post comments and like scores<br>|

<h1 id="flat-api-account">Account</h1>

These API endpoints are related to the Flat account you are currently using. When using an OAuth2 access token, you can use [`GET /me`](#operation/getAuthenticatedUser) to get information about the account.


## Get current user profile

<a id="opIdgetAuthenticatedUser"></a>

> Code samples

```bash
curl https://example.com/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /me`

Get details about the current authenticated User.


<h3 id="get-current-user-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|onlyId|query|boolean|false|Only return the user id|

> Example responses

> 200 Response

```json
{
  "id": "string",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat",
  "classRole": "teacher",
  "htmlUrl": "string",
  "organization": "string",
  "organizationRole": "admin",
  "bio": "string",
  "coverPicture": "string",
  "followersCount": 0,
  "followingCount": 0,
  "instruments": [
    "string"
  ],
  "likedScoresCount": 0,
  "ownedPublicScoresCount": 0,
  "profileTheme": "string",
  "registrationDate": "1970-01-01T00:00:00Z",
  "coverPictureFile": "string",
  "locale": "en",
  "pictureFile": "string",
  "privateProfile": true,
  "type": "user"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-current-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Current user details|[UserDetails](#schemauserdetails)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: account.public_profile account.education_profile )
</aside>

<h1 id="flat-api-score">Score</h1>

Sheet music is the main API object type available for all Flat account.
Here is a typical lifecycle for a music score document on Flat:
  - An end user can **create a music score** or **import a document** using our [web interface](https://flat.io) or a third-party website/app (e.g. Google Drive) using this API (see [`POST /v2/scores`](#operation/createScore). The creation and import of music scores can be done with this single API endpoint. This one currently supports the [MusicXML](http://www.musicxml.com/) (compressed or not) and [MIDI](https://www.midi.org/specifications).
  - **List scores**:
    - The **owned scores** can be listed using the [collections API methods](#tag/Collection), especially [`GET /collections/{collection}/scores`](#operation/listCollectionScores).
    - The scores from a public account can be listed with [`GET /users/{user}/scores`](#operation/getUserScores).
    - Scores shared with a specific group can be listed with [`GET /groups/{group}/scores`](#operation/getGroupScores).
  - The metadata of a single score can be retrieved with [`GET /scores/{score}`](#operation/getScore).
  - Scores on Flat have **one or multiple revisions**: creating a new score will create a first revision. These **revisions can be listed** using [`GET /scores/{score}/revisions`](#operation/getScoreRevisions) and a specific **revision data can be downloaded** with [`GET /scores/{score}/revisions/{revision}/{format}`](#operation/getScoreRevisionData). New revisions can be created using our [sheet music editor](https://flat.io) or using [`POST /scores/{score}/revisions`](#operation/createScoreRevision) (this endpoint has similar parameters than during the score creation). The last revision of a document may not directly reflect the really last version of a music score: recent modifications can be made offline or not yet consolidated into a new revision. In average, a new revision is created every 100 modifications made with our editor.
  - Scores can be **shared publicly** by changing the privacy option with [`POST /scores/{score}`](#operation/editScore), or **individually shared** using the different collaborators API endpoints (see [`POST /scores/{score}/collaborators`](#operation/addScoreCollaborator)).


## Create a new score

<a id="opIdcreateScore"></a>

> Code samples

```bash
curl https://example.com/scores \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "data": "<score-partwise version=\"3.0\"></score-partwise>",
    "googleDriveFolder": "0B-0000000000000000",
    "privacy": "private",
    "title": "My new score"
  }'
```

`POST /scores`

Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI (`audio/midi`), Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar, or MuseScore file to create the new Flat document.

This API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).

The currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).

If no `collection` is specified, the API will create the score in the most appropriate collection. This can be the `root` collection or a different collection based on the user's settings or API authentication method.
If a `collection` is specified and this one has more public privacy settings than the score (e.g. `public` vs `private` for the score), the privacy settings of the created score will be adjusted to the collection ones.
You can check the adjusted privacy settings in the returned score `privacy`, and optionally adjust these settings if needed using `PUT /scores/{score}`.


> Body parameter

```json
{
  "data": "<score-partwise version=\"3.0\"></score-partwise>",
  "googleDriveFolder": "0B-0000000000000000",
  "privacy": "private",
  "title": "My new score"
}
```

<h3 id="create-a-new-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ScoreCreation](#schemascorecreation)|true|none|
|» collection|body|string|false|Unique identifier of a collection where the score will be created.<br>If no collection identifier is provided, the score will be stored in the `root` directory.<br>|
|» data|body|string|false|The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.<br>Binary payloads (`vnd.recordare.musicxml` and `audio/midi`) can be encoded in Base64, in this case the `dataEncoding` property must match the encoding used for the API request.<br>|
|» dataEncoding|body|string|false|The optional encoding of the score data. This property must match the encoding used for the `data` property.|
|» filename|body|string|false|If this is an imported file, its filename|
|» googleDriveFolder|body|string|false|If the user uses Google Drive and this properties is specified, the file will be created in this directory. The currently user creating the file must be granted to write in this directory.<br>|
|» privacy|body|[ScorePrivacy](#schemascoreprivacy)|true|The score main privacy mode.<br><br>- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.<br>- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.<br>- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.<br>- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.<br><br>The score can also be individually shared to a set of users or groups using the different collaborators API methods.<br><br>When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.<br><br>When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).<br>|
|» source|body|[ScoreSource](#schemascoresource)|false|none|
|» title|body|string|false|The title of the new score. If the title is too long, the API may trim this one.<br><br>If this title is not specified, the API will try to (in this order):<br>  - Use the title contained in the file (e.g. [`movement-title`](https://usermanuals.musicxml.com/MusicXML/Content/EL-MusicXML-movement-title.htm) or [`credit-words`](https://usermanuals.musicxml.com/MusicXML/Content/EL-MusicXML-credit-words.htm) for [MusicXML](http://www.musicxml.com/) files).<br>  - Use the name of the file for files from a specified `source` (e.g. Google Drive) or the one in the `filename` property<br>  - Set a default title (e.g. "New Music Score")<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataEncoding|base64|
|» privacy|public|
|» privacy|private|
|» privacy|organizationPublic|
|» privacy|privateLink|

> Example responses

> 200 Response

```json
{
  "htmlUrl": "https://flat.io/score/000000000000000000000000",
  "id": "000000000000000000000000",
  "privacy": "private",
  "title": "My score",
  "user": {
    "id": "000000000000000000000001",
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat"
  },
  "arranger": "string",
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "comments": {
    "monthly": 30,
    "total": 42,
    "unique": 35,
    "weekly": 10
  },
  "composer": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "creationType": "original",
  "description": "string",
  "durationTime": 0,
  "googleDriveFileId": "string",
  "instruments": [
    "string"
  ],
  "license": "copyright",
  "licenseText": "string",
  "likes": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "lyricist": "string",
  "mainTempoQpm": 0,
  "modificationDate": "1970-01-01T00:00:00Z",
  "numberMeasures": 0,
  "organization": "string",
  "parentScore": "string",
  "plays": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "publicationDate": "1970-01-01T00:00:00Z",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "samples": [
    "string"
  ],
  "subtitle": "string",
  "tags": [
    "string"
  ],
  "views": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  }
}
```

> 400 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="create-a-new-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Score created|[ScoreDetails](#schemascoredetails)|
|400|Bad Request|Bad score creation request|[FlatErrorResponse](#schemaflaterrorresponse)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## Get a score's metadata

<a id="opIdgetScore"></a>

> Code samples

```bash
curl https://example.com/scores/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}`

Get the details of a score identified by the `score` parameter in the URL.
The currently authenticated user must have at least a read access to the document to use this API call.


<h3 id="get-a-scores-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|

> Example responses

> 200 Response

```json
{
  "htmlUrl": "https://flat.io/score/000000000000000000000000",
  "id": "000000000000000000000000",
  "privacy": "private",
  "title": "My score",
  "user": {
    "id": "000000000000000000000001",
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat"
  },
  "arranger": "string",
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "comments": {
    "monthly": 30,
    "total": 42,
    "unique": 35,
    "weekly": 10
  },
  "composer": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "creationType": "original",
  "description": "string",
  "durationTime": 0,
  "googleDriveFileId": "string",
  "instruments": [
    "string"
  ],
  "license": "copyright",
  "licenseText": "string",
  "likes": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "lyricist": "string",
  "mainTempoQpm": 0,
  "modificationDate": "1970-01-01T00:00:00Z",
  "numberMeasures": 0,
  "organization": "string",
  "parentScore": "string",
  "plays": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "publicationDate": "1970-01-01T00:00:00Z",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "samples": [
    "string"
  ],
  "subtitle": "string",
  "tags": [
    "string"
  ],
  "views": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  }
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-a-scores-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Score details|[ScoreDetails](#schemascoredetails)|
|402|Payment Required|Account overquota and this document is out of the granted quota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

## Edit a score's metadata

<a id="opIdeditScore"></a>

> Code samples

```bash
curl https://example.com/scores/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "privacy": "private"
  }'
```

`PUT /scores/{score}`

This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.

To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).

When editing the `title`, `subtitle`, `composer`, `lyricist`, `arranger` or `licenseText`, the metadatas will be instantly be updated, and a real-time action will be pushed to update the document lazily.
This pending document modification will be automatically be saved as a new version by either a connected client or our internal versioning service.


> Body parameter

```json
{
  "privacy": "private"
}
```

<h3 id="edit-a-scores-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|body|body|[ScoreModification](#schemascoremodification)|false|none|
|» arranger|body|string|false|The arranger of the score|
|» composer|body|string|false|The composer of the score|
|» creationType|body|[ScoreCreationType](#schemascorecreationtype)|false|The type of creation (an orginal, an arrangement)|
|» description|body|string|false|Description of the creation|
|» license|body|[ScoreLicense](#schemascorelicense)|false|License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/<br>|
|» licenseText|body|string|false|The rights info written on the score|
|» lyricist|body|string|false|The lyricist of the score|
|» privacy|body|[ScorePrivacy](#schemascoreprivacy)|false|The score main privacy mode.<br><br>- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.<br>- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.<br>- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.<br>- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.<br><br>The score can also be individually shared to a set of users or groups using the different collaborators API methods.<br><br>When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.<br><br>When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).<br>|
|» sharingKey|body|string|false|When using the `privacy` mode `privateLink`, this property can be used to set a custom sharing key, otherwise a new key will be generated.|
|» subtitle|body|string|false|The subtitle of the score|
|» tags|body|[string]|false|Tags describing the score|
|» title|body|string|false|The title of the score|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» creationType|original|
|» creationType|arrangement|
|» creationType|other|
|» license|copyright|
|» license|cc0|
|» license|cc-by|
|» license|cc-by-sa|
|» license|cc-by-nd|
|» license|cc-by-nc|
|» license|cc-by-nc-sa|
|» license|cc-by-nc-nd|
|» privacy|public|
|» privacy|private|
|» privacy|organizationPublic|
|» privacy|privateLink|

> Example responses

> 200 Response

```json
{
  "htmlUrl": "https://flat.io/score/000000000000000000000000",
  "id": "000000000000000000000000",
  "privacy": "private",
  "title": "My score",
  "user": {
    "id": "000000000000000000000001",
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat"
  },
  "arranger": "string",
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "comments": {
    "monthly": 30,
    "total": 42,
    "unique": 35,
    "weekly": 10
  },
  "composer": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "creationType": "original",
  "description": "string",
  "durationTime": 0,
  "googleDriveFileId": "string",
  "instruments": [
    "string"
  ],
  "license": "copyright",
  "licenseText": "string",
  "likes": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "lyricist": "string",
  "mainTempoQpm": 0,
  "modificationDate": "1970-01-01T00:00:00Z",
  "numberMeasures": 0,
  "organization": "string",
  "parentScore": "string",
  "plays": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "publicationDate": "1970-01-01T00:00:00Z",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "samples": [
    "string"
  ],
  "subtitle": "string",
  "tags": [
    "string"
  ],
  "views": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  }
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="edit-a-scores-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Score details|[ScoreDetails](#schemascoredetails)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## Delete a score

<a id="opIddeleteScore"></a>

> Code samples

```bash
curl https://example.com/scores/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /scores/{score}`

This method can be used by the owner/admin (`aclAdmin` rights) of a score as well as regular collaborators.

When called by an owner/admin, it will schedule the deletion of the score, its revisions, and complete history.
The score won't be accessible anymore after calling this method and the user's quota will directly be updated.

When called by a regular collaborator (`aclRead` / `aclWrite`), the score will be unshared (i.e. removed from the account & own collections).


<h3 id="delete-a-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|now|query|boolean|false|If `true`, the score deletion will be scheduled to be done ASAP|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="delete-a-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The score has been removed|None|
|403|Forbidden|Not granted to manage this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## List the collaborators

<a id="opIdgetScoreCollaborators"></a>

> Code samples

```bash
curl https://example.com/scores/string/collaborators \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/collaborators`

This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.

Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).


<h3 id="list-the-collaborators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|

> Example responses

> 200 Response

```json
[
  {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true,
    "collection": "string",
    "group": {
      "creationDate": "2015-01-19T00:22:02.387000Z",
      "id": "0000000000000000000000043",
      "name": "5th grade",
      "organization": "0000000000000000000000042",
      "readOnly": true,
      "type": "classTeachers",
      "userCount": 24
    },
    "id": "string",
    "invited": true,
    "score": "string",
    "user": {
      "id": "000000000000000000000001",
      "isFlatTeam": true,
      "isPowerUser": true,
      "name": "Flat Team",
      "picture": "https://flat.io/img/logo_flat.svg",
      "printableName": "Flat Team",
      "username": "flat",
      "classRole": "teacher",
      "htmlUrl": "string",
      "organization": "string",
      "organizationRole": "admin",
      "bio": "string",
      "coverPicture": "string",
      "followersCount": 0,
      "followingCount": 0,
      "instruments": [
        "string"
      ],
      "likedScoresCount": 0,
      "ownedPublicScoresCount": 0,
      "profileTheme": "string",
      "registrationDate": "1970-01-01T00:00:00Z"
    },
    "userEmail": "string"
  }
]
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-collaborators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of collaborators|Inline|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-collaborators-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ResourceCollaborator](#schemaresourcecollaborator)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores.readonly scores )
</aside>

## Add a new collaborator

<a id="opIdaddScoreCollaborator"></a>

> Code samples

```bash
curl https://example.com/scores/string/collaborators \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "aclAdmin": false,
    "aclRead": true,
    "aclWrite": true,
    "userEmail": "jdoe@flat.io"
  }'
```

`POST /scores/{score}/collaborators`

Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a resource.
- To add an existing Flat user to the resource, specify its unique identifier in the `user` property.
- To invite an external user to the resource, specify its email in the `userEmail` property.
- To add a Flat group to the resource, specify its unique identifier in the `group` property.
- To update an existing collaborator, process the same request with different rights.


> Body parameter

```json
{
  "aclAdmin": false,
  "aclRead": true,
  "aclWrite": true,
  "userEmail": "jdoe@flat.io"
}
```

<h3 id="add-a-new-collaborator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|body|body|[ResourceCollaboratorCreation](#schemaresourcecollaboratorcreation)|true|none|
|» aclAdmin|body|boolean|false|`True` if the related user can can manage the current document, i.e. changing the document permissions and deleting the document<br>|
|» aclRead|body|boolean|false|`True` if the related user can read the score. (probably true if the user has a permission on the document).<br>|
|» aclWrite|body|boolean|false|`True` if the related user can modify the score.<br>|
|» group|body|string|false|The unique identifier of a Flat group|
|» user|body|string|false|The unique identifier of a Flat user|
|» userEmail|body|string|false|Fill this field to invite an individual user by email.<br>|
|» userToken|body|string|false|Token received in an invitation to join the score.<br>|

> Example responses

> 200 Response

```json
{
  "aclAdmin": true,
  "aclRead": true,
  "aclWrite": true,
  "isCollaborator": true,
  "collection": "string",
  "group": {
    "creationDate": "2015-01-19T00:22:02.387000Z",
    "id": "0000000000000000000000043",
    "name": "5th grade",
    "organization": "0000000000000000000000042",
    "readOnly": true,
    "type": "classTeachers",
    "userCount": 24
  },
  "id": "string",
  "invited": true,
  "score": "string",
  "user": {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin",
    "bio": "string",
    "coverPicture": "string",
    "followersCount": 0,
    "followingCount": 0,
    "instruments": [
      "string"
    ],
    "likedScoresCount": 0,
    "ownedPublicScoresCount": 0,
    "profileTheme": "string",
    "registrationDate": "1970-01-01T00:00:00Z"
  },
  "userEmail": "string"
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="add-a-new-collaborator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The newly added collaborator metadata|[ResourceCollaborator](#schemaresourcecollaborator)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to manage this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## Get a collaborator

<a id="opIdgetScoreCollaborator"></a>

> Code samples

```bash
curl https://example.com/scores/string/collaborators/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/collaborators/{collaborator}`

Get the information about a collaborator (User or Group).


<h3 id="get-a-collaborator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|collaborator|path|string|true|Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**<br>|

> Example responses

> 200 Response

```json
{
  "aclAdmin": true,
  "aclRead": true,
  "aclWrite": true,
  "isCollaborator": true,
  "collection": "string",
  "group": {
    "creationDate": "2015-01-19T00:22:02.387000Z",
    "id": "0000000000000000000000043",
    "name": "5th grade",
    "organization": "0000000000000000000000042",
    "readOnly": true,
    "type": "classTeachers",
    "userCount": 24
  },
  "id": "string",
  "invited": true,
  "score": "string",
  "user": {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin",
    "bio": "string",
    "coverPicture": "string",
    "followersCount": 0,
    "followingCount": 0,
    "instruments": [
      "string"
    ],
    "likedScoresCount": 0,
    "ownedPublicScoresCount": 0,
    "profileTheme": "string",
    "registrationDate": "1970-01-01T00:00:00Z"
  },
  "userEmail": "string"
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-a-collaborator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collaborator information|[ResourceCollaborator](#schemaresourcecollaborator)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or collaborator not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores.readonly )
</aside>

## Delete a collaborator

<a id="opIdremoveScoreCollaborator"></a>

> Code samples

```bash
curl https://example.com/scores/string/collaborators/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /scores/{score}/collaborators/{collaborator}`

Remove the specified collaborator from the score


<h3 id="delete-a-collaborator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|collaborator|path|string|true|Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="delete-a-collaborator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The collaborator has been removed|None|
|403|Forbidden|Not granted to manage this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or collaborator not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## List comments

<a id="opIdgetScoreComments"></a>

> Code samples

```bash
curl https://example.com/scores/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/comments`

This method lists the different comments added on a music score (documents and inline) sorted by their post dates.

<h3 id="list-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|false|Filter the comments by type|
|sort|query|string|false|Sort|
|direction|query|string|false|Sort direction|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|document|
|type|inline|
|sort|date|
|direction|asc|
|direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "comment": "@[000000000000000000000000:flat] Great work!",
    "context": {
      "measureUuids": [
        "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
        "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
        "056ec5eb-9213-df56-6ae8-d9b99673dc48"
      ],
      "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
      "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
      "startDpq": 1,
      "startTimePos": 2,
      "stopDpq": 1,
      "stopTimePos": 3
    },
    "date": "2017-01-26T20:29:10.622000Z",
    "id": "000000000000000000000010",
    "mentions": [
      "000000000000000000000000"
    ],
    "modificationDate": "2017-01-26T21:29:10.622000Z",
    "rawComment": "@flat: Great work!",
    "replyTo": "000000000000000000000000",
    "resolved": true,
    "resolvedBy": "000000000000000000000000",
    "revision": "000000000000000000000011",
    "score": "000000000000000000000042",
    "spam": false,
    "type": "inline",
    "user": "000000000000000000000001"
  }
]
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The comments of the score|Inline|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScoreComment](#schemascorecomment)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores.readonly scores.social scores )
</aside>

## Post a new comment

<a id="opIdpostScoreComment"></a>

> Code samples

```bash
curl https://example.com/scores/string/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "@[000000000000000000000000:flat] Great work!",
    "context": {
      "measureUuids": [
        "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
        "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
        "056ec5eb-9213-df56-6ae8-d9b99673dc48"
      ],
      "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
      "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
      "startDpq": 1,
      "startTimePos": 2,
      "stopDpq": 1,
      "stopTimePos": 3
    },
    "mentions": [
      "000000000000000000000000"
    ],
    "rawComment": "@flat: Great work!",
    "replyTo": "000000000000000000000000",
    "revision": "000000000000000000000010"
  }'
```

`POST /scores/{score}/comments`

Post a document or a contextualized comment on a document.

Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.


> Body parameter

```json
{
  "comment": "@[000000000000000000000000:flat] Great work!",
  "context": {
    "measureUuids": [
      "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
      "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
      "056ec5eb-9213-df56-6ae8-d9b99673dc48"
    ],
    "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
    "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
    "startDpq": 1,
    "startTimePos": 2,
    "stopDpq": 1,
    "stopTimePos": 3
  },
  "mentions": [
    "000000000000000000000000"
  ],
  "rawComment": "@flat: Great work!",
  "replyTo": "000000000000000000000000",
  "revision": "000000000000000000000010"
}
```

<h3 id="post-a-new-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|body|body|[ScoreCommentCreation](#schemascorecommentcreation)|true|none|
|» comment|body|string|true|The comment text that can includes mentions using the following format: `@[id:username]`.<br>|
|» context|body|[ScoreCommentContext](#schemascorecommentcontext)|false|The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).<br>|
|» mentions|body|[string]|false|The list of user identifiers mentioned in this comment|
|» rawComment|body|string|false|A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.<br>|
|» replyTo|body|string|false|When the comment is a reply to another comment, the unique identifier of the parent comment<br>|
|» revision|body|string|false|The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.<br>|

> Example responses

> 200 Response

```json
{
  "comment": "@[000000000000000000000000:flat] Great work!",
  "context": {
    "measureUuids": [
      "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
      "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
      "056ec5eb-9213-df56-6ae8-d9b99673dc48"
    ],
    "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
    "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
    "startDpq": 1,
    "startTimePos": 2,
    "stopDpq": 1,
    "stopTimePos": 3
  },
  "date": "2017-01-26T20:29:10.622000Z",
  "id": "000000000000000000000010",
  "mentions": [
    "000000000000000000000000"
  ],
  "modificationDate": "2017-01-26T21:29:10.622000Z",
  "rawComment": "@flat: Great work!",
  "replyTo": "000000000000000000000000",
  "resolved": true,
  "resolvedBy": "000000000000000000000000",
  "revision": "000000000000000000000011",
  "score": "000000000000000000000042",
  "spam": false,
  "type": "inline",
  "user": "000000000000000000000001"
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="post-a-new-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new comment|[ScoreComment](#schemascorecomment)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score, to post a comment, or your API call triggered our spam filter.|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores.social scores )
</aside>

## Update an existing comment

<a id="opIdupdateScoreComment"></a>

> Code samples

```bash
curl https://example.com/scores/string/comments/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "@[000000000000000000000000:flat] Great work!",
    "context": {
      "measureUuids": [
        "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
        "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
        "056ec5eb-9213-df56-6ae8-d9b99673dc48"
      ],
      "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
      "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
      "startDpq": 1,
      "startTimePos": 2,
      "stopDpq": 1,
      "stopTimePos": 3
    },
    "mentions": [
      "000000000000000000000000"
    ],
    "rawComment": "@flat: Great work!",
    "replyTo": "000000000000000000000000",
    "revision": "000000000000000000000011"
  }'
```

`PUT /scores/{score}/comments/{comment}`

> Body parameter

```json
{
  "comment": "@[000000000000000000000000:flat] Great work!",
  "context": {
    "measureUuids": [
      "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
      "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
      "056ec5eb-9213-df56-6ae8-d9b99673dc48"
    ],
    "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
    "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
    "startDpq": 1,
    "startTimePos": 2,
    "stopDpq": 1,
    "stopTimePos": 3
  },
  "mentions": [
    "000000000000000000000000"
  ],
  "rawComment": "@flat: Great work!",
  "replyTo": "000000000000000000000000",
  "revision": "000000000000000000000011"
}
```

<h3 id="update-an-existing-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|comment|path|string|true|Unique identifier of a sheet music comment<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|body|body|[ScoreCommentUpdate](#schemascorecommentupdate)|true|none|
|» comment|body|string|false|The comment text that can includes mentions using the following format: `@[id:username]`.<br>|
|» context|body|[ScoreCommentContext](#schemascorecommentcontext)|false|The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).<br>|
|» rawComment|body|string|false|A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.<br>|
|» revision|body|string|false|The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.<br>|

> Example responses

> 200 Response

```json
{
  "comment": "@[000000000000000000000000:flat] Great work!",
  "context": {
    "measureUuids": [
      "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
      "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
      "056ec5eb-9213-df56-6ae8-d9b99673dc48"
    ],
    "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
    "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
    "startDpq": 1,
    "startTimePos": 2,
    "stopDpq": 1,
    "stopTimePos": 3
  },
  "date": "2017-01-26T20:29:10.622000Z",
  "id": "000000000000000000000010",
  "mentions": [
    "000000000000000000000000"
  ],
  "modificationDate": "2017-01-26T21:29:10.622000Z",
  "rawComment": "@flat: Great work!",
  "replyTo": "000000000000000000000000",
  "resolved": true,
  "resolvedBy": "000000000000000000000000",
  "revision": "000000000000000000000011",
  "score": "000000000000000000000042",
  "spam": false,
  "type": "inline",
  "user": "000000000000000000000001"
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="update-an-existing-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The edited comment|[ScoreComment](#schemascorecomment)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score or not the original comment creator|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores.social scores )
</aside>

## Delete a comment

<a id="opIddeleteScoreComment"></a>

> Code samples

```bash
curl https://example.com/scores/string/comments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /scores/{score}/comments/{comment}`

<h3 id="delete-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|comment|path|string|true|Unique identifier of a sheet music comment<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="delete-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The comment has been deleted|None|
|403|Forbidden|Not granted to access to this score or not the original comment creator|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or comment not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores.social scores )
</aside>

## Mark the comment as resolved

<a id="opIdmarkScoreCommentResolved"></a>

> Code samples

```bash
curl https://example.com/scores/string/comments/string/resolved \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /scores/{score}/comments/{comment}/resolved`

<h3 id="mark-the-comment-as-resolved-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|comment|path|string|true|Unique identifier of a sheet music comment<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="mark-the-comment-as-resolved-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The comment has been marked as resolved|None|
|403|Forbidden|Not granted to mark this comment as resolved|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or comment not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores.social scores )
</aside>

## Mark the comment as unresolved

<a id="opIdmarkScoreCommentUnresolved"></a>

> Code samples

```bash
curl https://example.com/scores/string/comments/string/resolved \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /scores/{score}/comments/{comment}/resolved`

<h3 id="mark-the-comment-as-unresolved-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|comment|path|string|true|Unique identifier of a sheet music comment<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="mark-the-comment-as-unresolved-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The comment has been unmarked as resolved|None|
|403|Forbidden|Not granted to unmark this comment as resolved|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or comment not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores.social scores )
</aside>

## Fork a score

<a id="opIdforkScore"></a>

> Code samples

```bash
curl https://example.com/scores/string/fork \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "collection": "root"
  }'
```

`POST /scores/{score}/fork`

This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.


> Body parameter

```json
{
  "collection": "root"
}
```

<h3 id="fork-a-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|body|body|[ScoreFork](#schemascorefork)|true|none|
|» collection|body|string|false|Unique identifier of a collection where the score will be copied.<br>If no collection identifier is provided, the score will be stored in the `root` directory.<br>|

> Example responses

> 200 Response

```json
{
  "htmlUrl": "https://flat.io/score/000000000000000000000000",
  "id": "000000000000000000000000",
  "privacy": "private",
  "title": "My score",
  "user": {
    "id": "000000000000000000000001",
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat"
  },
  "arranger": "string",
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "comments": {
    "monthly": 30,
    "total": 42,
    "unique": 35,
    "weekly": 10
  },
  "composer": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "creationType": "original",
  "description": "string",
  "durationTime": 0,
  "googleDriveFileId": "string",
  "instruments": [
    "string"
  ],
  "license": "copyright",
  "licenseText": "string",
  "likes": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "lyricist": "string",
  "mainTempoQpm": 0,
  "modificationDate": "1970-01-01T00:00:00Z",
  "numberMeasures": 0,
  "organization": "string",
  "parentScore": "string",
  "plays": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "publicationDate": "1970-01-01T00:00:00Z",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "samples": [
    "string"
  ],
  "subtitle": "string",
  "tags": [
    "string"
  ],
  "views": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  }
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="fork-a-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Score details|[ScoreDetails](#schemascoredetails)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## List the revisions

<a id="opIdgetScoreRevisions"></a>

> Code samples

```bash
curl https://example.com/scores/string/revisions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/revisions`

When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.

Depending the plan of the account, this list can be trunked to the few last revisions.


<h3 id="list-the-revisions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|

> Example responses

> 200 Response

```json
[
  {
    "autosave": true,
    "collaborators": [
      "000000000000000000000010",
      "000000000000000000000020"
    ],
    "creationDate": "2017-01-26T20:29:10.622000Z",
    "description": "New revision",
    "user": "000000000000000000000020"
  }
]
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-revisions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of revisions|Inline|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-revisions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScoreRevision](#schemascorerevision)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

## Create a new revision

<a id="opIdcreateScoreRevision"></a>

> Code samples

```bash
curl https://example.com/scores/string/revisions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "autosave": true,
    "data": "<score-partwise version=\"3.0\"></score-partwise>",
    "description": "New revision",
    "history": [
      {
        "args": {
          "measureUuid": "0be9f739-3213-f312-bb0a-00ad0c787ef7",
          "previousUuid": "888cb742-2110-a050-ba71-28300ba6d61f"
        },
        "fnc": "action.AddMeasure",
        "id": "b278ad43-2e99-4e60-a782-ac119b294ab8",
        "userId": "000000000000000000000010"
      }
    ]
  }'
```

`POST /scores/{score}/revisions`

Update a score by uploading a new revision for this one.


> Body parameter

```json
{
  "autosave": true,
  "data": "<score-partwise version=\"3.0\"></score-partwise>",
  "description": "New revision",
  "history": [
    {
      "args": {
        "measureUuid": "0be9f739-3213-f312-bb0a-00ad0c787ef7",
        "previousUuid": "888cb742-2110-a050-ba71-28300ba6d61f"
      },
      "fnc": "action.AddMeasure",
      "id": "b278ad43-2e99-4e60-a782-ac119b294ab8",
      "userId": "000000000000000000000010"
    }
  ]
}
```

<h3 id="create-a-new-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|body|body|[ScoreRevisionCreation](#schemascorerevisioncreation)|true|none|
|» autosave|body|boolean|false|Must be set to `true` if the revision was created automatically.<br>|
|» data|body|string|true|The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.<br>Binary payloads (`vnd.recordare.musicxml` and `audio/midi`) can be encoded in Base64, in this case the `dataEncoding` property must match the encoding used for the API request.<br>|
|» dataEncoding|body|string|false|The optional encoding of the score data. This property must match the encoding used for the `data` property.|
|» description|body|string|false|A description associated to the revision|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» dataEncoding|base64|

> Example responses

> 200 Response

```json
{
  "autosave": true,
  "collaborators": [
    "000000000000000000000010",
    "000000000000000000000020"
  ],
  "creationDate": "2017-01-26T20:29:10.622000Z",
  "description": "New revision",
  "user": "000000000000000000000020"
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="create-a-new-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new created revision metadata|[ScoreRevision](#schemascorerevision)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to modify this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## Get a score revision

<a id="opIdgetScoreRevision"></a>

> Code samples

```bash
curl https://example.com/scores/string/revisions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/revisions/{revision}`

When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
revision metadata.


<h3 id="get-a-score-revision-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|revision|path|string|true|Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|

> Example responses

> 200 Response

```json
{
  "autosave": true,
  "collaborators": [
    "000000000000000000000010",
    "000000000000000000000020"
  ],
  "creationDate": "2017-01-26T20:29:10.622000Z",
  "description": "New revision",
  "user": "000000000000000000000020"
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-a-score-revision-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Revision metadata|[ScoreRevision](#schemascorerevision)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

## Get a score revision data

<a id="opIdgetScoreRevisionData"></a>

> Code samples

```bash
curl https://example.com/scores/string/revisions/string/json \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/revisions/{revision}/{format}`

Retrieve the file corresponding to a score revision (the following formats are available): Flat JSON/Adagio JSON `json`, MusicXML
`mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, a tumbnail of the first page `thumbnail.png` or auto sync points `synchronizationPoints`.


<h3 id="get-a-score-revision-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|parts|query|string|false|An optional a set of parts uuid to be exported. This parameter must be composed of parts uuids<br>separated by commas. For example "59df645f-bb1c-f1b4-b573-d2afc4491f94,34ef645f-1aef-f3bc-1564-34cca4492b87".<br>|
|onlyCached|query|boolean|false|Only return files already generated and cached in Flat's production<br>cache. If the file is not availabe, a 404 will be returned<br>|
|url|query|boolean|false|Returns a json with the `url` in it instead of redirecting<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|revision|path|string|true|Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.<br>|
|format|path|string|true|The format of the file you will retrieve|

#### Enumerated Values

|Parameter|Value|
|---|---|
|format|json|
|format|mxl|
|format|xml|
|format|mp3|
|format|wav|
|format|midi|
|format|thumbnail.png|
|format|synchronizationPoints|

> Example responses

> 200 Response

```json
"string"
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-a-score-revision-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Revision data|Inline|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or associated file not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

## List submissions related to the score

<a id="opIdgetScoreSubmissions"></a>

> Code samples

```bash
curl https://example.com/scores/string/submissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/submissions`

This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.


<h3 id="list-submissions-related-to-the-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|

> Example responses

> 200 Response

```json
[
  {
    "assignment": "58c49068524c03ec576ca43c",
    "attachments": [
      {
        "score": "58c4955a226ffff257211a8d",
        "title": "Hello - Student",
        "type": "flat"
      }
    ],
    "classroom": "58c4725345cd836264f0b29e",
    "creationDate": "2020-08-12T00:25:00.748000Z",
    "creator": "559eb5c7f0d4d5e46d03781d",
    "draftGrade": 82,
    "googleClassroom": {
      "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
      "id": "CgsI-00000000000",
      "state": "turned_in"
    },
    "grade": 80,
    "id": "58c4955c226ffff257211a90",
    "returnCreator": "559eb5c7f0d4d5e46d000000",
    "returnDate": "2020-08-15T00:25:00.748000Z",
    "submissionDate": "2020-08-12T00:45:22.748000Z"
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-submissions-related-to-the-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of submissions|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-submissions-related-to-the-score-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssignmentSubmission](#schemaassignmentsubmission)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

## List the audio or video tracks linked to a score

<a id="opIdlistScoreTracks"></a>

> Code samples

```bash
curl https://example.com/scores/string/tracks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/tracks`

<h3 id="list-the-audio-or-video-tracks-linked-to-a-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|assignment|query|string|false|An assignment id with which all the tracks returned will be related to<br>|
|listAutoTrack|query|boolean|false|If true, and if available, return last automatically synchronized Flat's mp3 export as an additional track<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|

> Example responses

> 200 Response

```json
[
  {
    "creationDate": "2017-10-22T14:58:22.753000Z",
    "creator": "5815d4b53269d90d2c80b71c",
    "default": true,
    "id": "59ecb20e563736b1e1f75dce",
    "mediaId": "dQw4w9WgXcQ",
    "modificationDate": "2017-10-22T14:58:33.424000Z",
    "score": "59a29d96f35a6411d7508bdd",
    "state": "completed",
    "synchronizationPoints": [
      {
        "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
        "time": 0,
        "type": "measure"
      },
      {
        "time": 213,
        "type": "end"
      }
    ],
    "title": "Rick Astley - Never Gonna Give You Up",
    "type": "youtube",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
]
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-audio-or-video-tracks-linked-to-a-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of tracks|Inline|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-audio-or-video-tracks-linked-to-a-score-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScoreTrack](#schemascoretrack)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

## Add a new video or audio track to the score

<a id="opIdaddScoreTrack"></a>

> Code samples

```bash
curl https://example.com/scores/string/tracks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "default": true,
    "state": "draft",
    "synchronizationPoints": [
      {
        "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
        "time": 0,
        "type": "measure"
      },
      {
        "time": 213,
        "type": "end"
      }
    ],
    "title": "Rick Astley - Never Gonna Give You Up",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }'
```

`POST /scores/{score}/tracks`

Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
This API method support medias hosted on SoundCloud, YouTube and Vimeo.


> Body parameter

```json
{
  "default": true,
  "state": "draft",
  "synchronizationPoints": [
    {
      "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
      "time": 0,
      "type": "measure"
    },
    {
      "time": 213,
      "type": "end"
    }
  ],
  "title": "Rick Astley - Never Gonna Give You Up",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

<h3 id="add-a-new-video-or-audio-track-to-the-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|body|body|[ScoreTrackCreation](#schemascoretrackcreation)|true|none|
|» default|body|boolean|false|True if the track should be used as default audio source|
|» state|body|[ScoreTrackState](#schemascoretrackstate)|false|State of the track|
|» synchronizationPoints|body|[[ScoreTrackPoint](#schemascoretrackpoint)]|false|none|
|» title|body|string|false|Title of the track|
|» url|body|string|false|The URL of the track|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|draft|
|» state|completed|
|» state|deleted|

> Example responses

> 200 Response

```json
{
  "creationDate": "2017-10-22T14:58:22.753000Z",
  "creator": "5815d4b53269d90d2c80b71c",
  "default": true,
  "id": "59ecb20e563736b1e1f75dce",
  "mediaId": "dQw4w9WgXcQ",
  "modificationDate": "2017-10-22T14:58:33.424000Z",
  "score": "59a29d96f35a6411d7508bdd",
  "state": "completed",
  "synchronizationPoints": [
    {
      "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
      "time": 0,
      "type": "measure"
    },
    {
      "time": 213,
      "type": "end"
    }
  ],
  "title": "Rick Astley - Never Gonna Give You Up",
  "type": "youtube",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="add-a-new-video-or-audio-track-to-the-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Created track|[ScoreTrack](#schemascoretrack)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## Retrieve the details of an audio or video track linked to a score

<a id="opIdgetScoreTrack"></a>

> Code samples

```bash
curl https://example.com/scores/string/tracks/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /scores/{score}/tracks/{track}`

<h3 id="retrieve-the-details-of-an-audio-or-video-track-linked-to-a-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|track|path|string|true|Unique identifier of a score audio track<br>|

> Example responses

> 200 Response

```json
{
  "creationDate": "2017-10-22T14:58:22.753000Z",
  "creator": "5815d4b53269d90d2c80b71c",
  "default": true,
  "id": "59ecb20e563736b1e1f75dce",
  "mediaId": "dQw4w9WgXcQ",
  "modificationDate": "2017-10-22T14:58:33.424000Z",
  "score": "59a29d96f35a6411d7508bdd",
  "state": "completed",
  "synchronizationPoints": [
    {
      "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
      "time": 0,
      "type": "measure"
    },
    {
      "time": 213,
      "type": "end"
    }
  ],
  "title": "Rick Astley - Never Gonna Give You Up",
  "type": "youtube",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="retrieve-the-details-of-an-audio-or-video-track-linked-to-a-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Track details|[ScoreTrack](#schemascoretrack)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or Track not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

## Update an audio or video track linked to a score

<a id="opIdupdateScoreTrack"></a>

> Code samples

```bash
curl https://example.com/scores/string/tracks/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "default": true,
    "state": "draft",
    "synchronizationPoints": [
      {
        "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
        "time": 0,
        "type": "measure"
      },
      {
        "time": 213,
        "type": "end"
      }
    ],
    "title": "Rick Astley - Never Gonna Give You Up",
    "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }'
```

`PUT /scores/{score}/tracks/{track}`

> Body parameter

```json
{
  "default": true,
  "state": "draft",
  "synchronizationPoints": [
    {
      "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
      "time": 0,
      "type": "measure"
    },
    {
      "time": 213,
      "type": "end"
    }
  ],
  "title": "Rick Astley - Never Gonna Give You Up",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

<h3 id="update-an-audio-or-video-track-linked-to-a-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|track|path|string|true|Unique identifier of a score audio track<br>|
|body|body|[ScoreTrackUpdate](#schemascoretrackupdate)|true|none|
|» default|body|boolean|false|True if the track should be used as default audio source|
|» state|body|[ScoreTrackState](#schemascoretrackstate)|false|State of the track|
|» synchronizationPoints|body|[[ScoreTrackPoint](#schemascoretrackpoint)]|false|none|
|» title|body|string|false|Title of the track|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|draft|
|» state|completed|
|» state|deleted|

> Example responses

> 200 Response

```json
{
  "creationDate": "2017-10-22T14:58:22.753000Z",
  "creator": "5815d4b53269d90d2c80b71c",
  "default": true,
  "id": "59ecb20e563736b1e1f75dce",
  "mediaId": "dQw4w9WgXcQ",
  "modificationDate": "2017-10-22T14:58:33.424000Z",
  "score": "59a29d96f35a6411d7508bdd",
  "state": "completed",
  "synchronizationPoints": [
    {
      "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
      "time": 0,
      "type": "measure"
    },
    {
      "time": 213,
      "type": "end"
    }
  ],
  "title": "Rick Astley - Never Gonna Give You Up",
  "type": "youtube",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="update-an-audio-or-video-track-linked-to-a-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated track|[ScoreTrack](#schemascoretrack)|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or Track not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## Remove an audio or video track linked to the score

<a id="opIddeleteScoreTrack"></a>

> Code samples

```bash
curl https://example.com/scores/string/tracks/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /scores/{score}/tracks/{track}`

<h3 id="remove-an-audio-or-video-track-linked-to-the-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|track|path|string|true|Unique identifier of a score audio track<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="remove-an-audio-or-video-track-linked-to-the-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Track removed|None|
|403|Forbidden|Not granted to access to this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score or Track not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

## Untrash a score

<a id="opIduntrashScore"></a>

> Code samples

```bash
curl https://example.com/scores/string/untrash \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /scores/{score}/untrash`

This method will remove the score from the `trash` collection and from the deletion queue, and add it back to the original collections.


<h3 id="untrash-a-score-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="untrash-a-score-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The score has been untrashed|None|
|403|Forbidden|Not granted to manage this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores )
</aside>

<h1 id="flat-api-collection">Collection</h1>

Collections let you organize your content in a Flat account. They work like a regular _folder_ with some specificities:
  - Our design goal here is to create a system similar to a _book_ or a _playlist of songs_.
  - Collections can't have children collections (except the `trash` and `sharedWithMe` that are special collections).
  - Any score can be added to one or multiple collections. For example, you can have a single private score in two or more collections, or add any public or shared scores to one of your collections.

All the collections don't have the same capabilities. Capabilities depend on the `type` of collection and the `rights` you have on a collection. They are available when [listing the collection](#operation/listCollections) or [retrieving the collection details](#operation/getCollection).

At this time, only `private` privacy mode is widely available. Privacy modes `public`, `organizationPublic` and `privateLink`, and 1:1 sharing will be available in an upcoming update later this year.


## List the collections

<a id="opIdlistCollections"></a>

> Code samples

```bash
curl https://example.com/collections \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /collections`

Use this method to list the user's collections contained in `parent` (by default in the `root` collection).
If no sort option is provided, the collections are sorted by `creationDate` `desc`.

Note that this method will not include the `parent` collection in the listing.
For example, if you need the details of the `root` collection, you can use `GET /v2/collections/root`.


<h3 id="list-the-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|query|string|false|List the collection contained in this `parent` collection.<br><br>This option doesn't provide a complete multi-level collection support.<br>When sharing a collection with someone, this one will have as `parent` `sharedWithMe`.<br>|
|sort|query|string|false|Sort|
|direction|query|string|false|Sort direction|
|limit|query|integer|false|This is the maximum number of objects that may be returned|
|next|query|string|false|An opaque string cursor to fetch the next page of data.<br>The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.<br>|
|previous|query|string|false|An opaque string cursor to fetch the previous page of data.<br>The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|creationDate|
|sort|title|
|direction|asc|
|direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "app": "string",
    "capabilities": {
      "canAddScores": true,
      "canDelete": true,
      "canDeleteScores": true,
      "canEdit": true,
      "canShare": true
    },
    "collaborators": [
      {
        "aclAdmin": true,
        "aclRead": true,
        "aclWrite": true,
        "isCollaborator": true,
        "collection": "string",
        "group": {
          "creationDate": "2015-01-19T00:22:02.387000Z",
          "id": "0000000000000000000000043",
          "name": "5th grade",
          "organization": "0000000000000000000000042",
          "readOnly": true,
          "type": "classTeachers",
          "userCount": 24
        },
        "id": "string",
        "invited": true,
        "score": "string",
        "user": {
          "id": "000000000000000000000001",
          "isFlatTeam": true,
          "isPowerUser": true,
          "name": "Flat Team",
          "picture": "https://flat.io/img/logo_flat.svg",
          "printableName": "Flat Team",
          "username": "flat",
          "classRole": "teacher",
          "htmlUrl": "string",
          "organization": "string",
          "organizationRole": "admin",
          "bio": "string",
          "coverPicture": "string",
          "followersCount": 0,
          "followingCount": 0,
          "instruments": [
            "string"
          ],
          "likedScoresCount": 0,
          "ownedPublicScoresCount": 0,
          "profileTheme": "string",
          "registrationDate": "1970-01-01T00:00:00Z"
        },
        "userEmail": "string"
      }
    ],
    "collections": [
      "string"
    ],
    "creationDate": "1970-01-01T00:00:00Z",
    "htmlUrl": "http://example.com",
    "id": "string",
    "privacy": "private",
    "rights": {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true
    },
    "sharingKey": "string",
    "title": "string",
    "type": "root",
    "user": {
      "id": "000000000000000000000001",
      "isFlatTeam": true,
      "isPowerUser": true,
      "name": "Flat Team",
      "picture": "https://flat.io/img/logo_flat.svg",
      "printableName": "Flat Team",
      "username": "flat",
      "classRole": "teacher",
      "htmlUrl": "string",
      "organization": "string",
      "organizationRole": "admin"
    }
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of collections|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-collections-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Collection](#schemacollection)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections collections.readonly )
</aside>

## Create a new collection

<a id="opIdcreateCollection"></a>

> Code samples

```bash
curl https://example.com/collections \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "privacy": "private",
    "title": "Jazz scores"
  }'
```

`POST /collections`

This method will create a new collection and add it to your `root` collection.


> Body parameter

```json
{
  "privacy": "private",
  "title": "Jazz scores"
}
```

<h3 id="create-a-new-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CollectionCreation](#schemacollectioncreation)|true|none|
|» privacy|body|[CollectionPrivacy](#schemacollectionprivacy)|true|The collection main privacy mode.<br>- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.<br>|
|» title|body|string|true|The title of the collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|private|

> Example responses

> 200 Response

```json
{
  "app": "string",
  "capabilities": {
    "canAddScores": true,
    "canDelete": true,
    "canDeleteScores": true,
    "canEdit": true,
    "canShare": true
  },
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "creationDate": "1970-01-01T00:00:00Z",
  "htmlUrl": "http://example.com",
  "id": "string",
  "privacy": "private",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "sharingKey": "string",
  "title": "string",
  "type": "root",
  "user": {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin"
  }
}
```

> 400 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="create-a-new-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection created|[Collection](#schemacollection)|
|400|Bad Request|Bad collection creation request|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections )
</aside>

## Get collection details

<a id="opIdgetCollection"></a>

> Code samples

```bash
curl https://example.com/collections/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /collections/{collection}`

<h3 id="get-collection-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|
|collection|path|string|true|Unique identifier of the collection.<br>The following aliases are supported:<br>- `root`: The root collection of the account<br>- `sharedWithMe`: Automatically contains new resources that have been shared individually<br>- `trash`: Automatically contains resources that have been deleted<br>|

> Example responses

> 200 Response

```json
{
  "app": "string",
  "capabilities": {
    "canAddScores": true,
    "canDelete": true,
    "canDeleteScores": true,
    "canEdit": true,
    "canShare": true
  },
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "creationDate": "1970-01-01T00:00:00Z",
  "htmlUrl": "http://example.com",
  "id": "string",
  "privacy": "private",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "sharingKey": "string",
  "title": "string",
  "type": "root",
  "user": {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin"
  }
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-collection-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection details|[Collection](#schemacollection)|
|403|Forbidden|Not granted to access to this collection|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Collection not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections collections.readonly )
</aside>

## Update a collection's metadata

<a id="opIdeditCollection"></a>

> Code samples

```bash
curl https://example.com/collections/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "privacy": "private",
    "title": "string"
  }'
```

`PUT /collections/{collection}`

> Body parameter

```json
{
  "privacy": "private",
  "title": "string"
}
```

<h3 id="update-a-collections-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection.<br>The following aliases are supported:<br>- `root`: The root collection of the account<br>- `sharedWithMe`: Automatically contains new resources that have been shared individually<br>- `trash`: Automatically contains resources that have been deleted<br>|
|body|body|[CollectionModification](#schemacollectionmodification)|false|none|
|» privacy|body|[CollectionPrivacy](#schemacollectionprivacy)|false|The collection main privacy mode.<br>- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.<br>|
|» title|body|string|false|The title of the collection|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» privacy|private|

> Example responses

> 200 Response

```json
{
  "app": "string",
  "capabilities": {
    "canAddScores": true,
    "canDelete": true,
    "canDeleteScores": true,
    "canEdit": true,
    "canShare": true
  },
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "creationDate": "1970-01-01T00:00:00Z",
  "htmlUrl": "http://example.com",
  "id": "string",
  "privacy": "private",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "sharingKey": "string",
  "title": "string",
  "type": "root",
  "user": {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin"
  }
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="update-a-collections-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection details|[Collection](#schemacollection)|
|403|Forbidden|Not granted to access to this collection|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Collection not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections )
</aside>

## Delete the collection

<a id="opIddeleteCollection"></a>

> Code samples

```bash
curl https://example.com/collections/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /collections/{collection}`

This method will schedule the deletion of the collection. Until deleted, the collection will be available in the `trash`.


<h3 id="delete-the-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection.<br>The following aliases are supported:<br>- `root`: The root collection of the account<br>- `sharedWithMe`: Automatically contains new resources that have been shared individually<br>- `trash`: Automatically contains resources that have been deleted<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="delete-the-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Collection deleted|None|
|403|Forbidden|Not granted to access to this collection|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Collection not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections )
</aside>

## List the scores contained in a collection

<a id="opIdlistCollectionScores"></a>

> Code samples

```bash
curl https://example.com/collections/string/scores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /collections/{collection}/scores`

Use this method to list the scores contained in a collection.
If no sort option is provided, the scores are sorted by `modificationDate` `desc`.


<h3 id="list-the-scores-contained-in-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|Sort|
|direction|query|string|false|Sort direction|
|limit|query|integer|false|This is the maximum number of objects that may be returned|
|next|query|string|false|An opaque string cursor to fetch the next page of data.<br>The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.<br>|
|previous|query|string|false|An opaque string cursor to fetch the previous page of data.<br>The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.<br>|
|collection|path|string|true|Unique identifier of the collection.<br>The following aliases are supported:<br>- `root`: The root collection of the account<br>- `sharedWithMe`: Automatically contains new resources that have been shared individually<br>- `trash`: Automatically contains resources that have been deleted<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|creationDate|
|sort|modificationDate|
|sort|title|
|direction|asc|
|direction|desc|

> Example responses

> 200 Response

```json
[
  {
    "htmlUrl": "https://flat.io/score/000000000000000000000000",
    "id": "000000000000000000000000",
    "privacy": "private",
    "title": "My score",
    "user": {
      "id": "000000000000000000000001",
      "name": "Flat Team",
      "picture": "https://flat.io/img/logo_flat.svg",
      "printableName": "Flat Team",
      "username": "flat"
    },
    "arranger": "string",
    "collaborators": [
      {
        "aclAdmin": true,
        "aclRead": true,
        "aclWrite": true,
        "isCollaborator": true,
        "collection": "string",
        "group": {
          "creationDate": "2015-01-19T00:22:02.387000Z",
          "id": "0000000000000000000000043",
          "name": "5th grade",
          "organization": "0000000000000000000000042",
          "readOnly": true,
          "type": "classTeachers",
          "userCount": 24
        },
        "id": "string",
        "invited": true,
        "score": "string",
        "user": {
          "id": "000000000000000000000001",
          "isFlatTeam": true,
          "isPowerUser": true,
          "name": "Flat Team",
          "picture": "https://flat.io/img/logo_flat.svg",
          "printableName": "Flat Team",
          "username": "flat",
          "classRole": "teacher",
          "htmlUrl": "string",
          "organization": "string",
          "organizationRole": "admin",
          "bio": "string",
          "coverPicture": "string",
          "followersCount": 0,
          "followingCount": 0,
          "instruments": [
            "string"
          ],
          "likedScoresCount": 0,
          "ownedPublicScoresCount": 0,
          "profileTheme": "string",
          "registrationDate": "1970-01-01T00:00:00Z"
        },
        "userEmail": "string"
      }
    ],
    "collections": [
      "string"
    ],
    "comments": {
      "monthly": 30,
      "total": 42,
      "unique": 35,
      "weekly": 10
    },
    "composer": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "creationType": "original",
    "description": "string",
    "durationTime": 0,
    "googleDriveFileId": "string",
    "instruments": [
      "string"
    ],
    "license": "copyright",
    "licenseText": "string",
    "likes": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    },
    "lyricist": "string",
    "mainTempoQpm": 0,
    "modificationDate": "1970-01-01T00:00:00Z",
    "numberMeasures": 0,
    "organization": "string",
    "parentScore": "string",
    "plays": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    },
    "publicationDate": "1970-01-01T00:00:00Z",
    "rights": {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true
    },
    "samples": [
      "string"
    ],
    "subtitle": "string",
    "tags": [
      "string"
    ],
    "views": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    }
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-scores-contained-in-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of scores|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-scores-contained-in-a-collection-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScoreDetails](#schemascoredetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections )
</aside>

## Add a score to the collection

<a id="opIdaddScoreToCollection"></a>

> Code samples

```bash
curl https://example.com/collections/string/scores/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /collections/{collection}/scores/{score}`

This operation will add a score to a collection. The default behavior will make the score available across multiple collections.
You must have the capability `canAddScores` on the provided `collection` to perform the action.


<h3 id="add-a-score-to-the-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection.<br>The following aliases are supported:<br>- `root`: The root collection of the account<br>- `sharedWithMe`: Automatically contains new resources that have been shared individually<br>- `trash`: Automatically contains resources that have been deleted<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|

> Example responses

> 200 Response

```json
{
  "htmlUrl": "https://flat.io/score/000000000000000000000000",
  "id": "000000000000000000000000",
  "privacy": "private",
  "title": "My score",
  "user": {
    "id": "000000000000000000000001",
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat"
  },
  "arranger": "string",
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "comments": {
    "monthly": 30,
    "total": 42,
    "unique": 35,
    "weekly": 10
  },
  "composer": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "creationType": "original",
  "description": "string",
  "durationTime": 0,
  "googleDriveFileId": "string",
  "instruments": [
    "string"
  ],
  "license": "copyright",
  "licenseText": "string",
  "likes": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "lyricist": "string",
  "mainTempoQpm": 0,
  "modificationDate": "1970-01-01T00:00:00Z",
  "numberMeasures": 0,
  "organization": "string",
  "parentScore": "string",
  "plays": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "publicationDate": "1970-01-01T00:00:00Z",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "samples": [
    "string"
  ],
  "subtitle": "string",
  "tags": [
    "string"
  ],
  "views": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  }
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="add-a-score-to-the-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Score details|[ScoreDetails](#schemascoredetails)|
|403|Forbidden|Not granted to access to this collection or score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Collection or score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections collections.add_scores )
</aside>

## Delete a score from the collection

<a id="opIddeleteScoreFromCollection"></a>

> Code samples

```bash
curl https://example.com/collections/string/scores/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /collections/{collection}/scores/{score}`

This method will delete a score from the collection. Unlike [`DELETE /scores/{score}`](#operation/deleteScore), this score will not remove the score from your account, but only from the collection.
This can be used to *move* a score from one collection to another, or simply remove a score from one collection when this one is contained in multiple collections.


<h3 id="delete-a-score-from-the-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection.<br>The following aliases are supported:<br>- `root`: The root collection of the account<br>- `sharedWithMe`: Automatically contains new resources that have been shared individually<br>- `trash`: Automatically contains resources that have been deleted<br>|
|score|path|string|true|Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).<br>|
|sharingKey|query|string|false|This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="delete-a-score-from-the-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Score removed from the collection|None|
|403|Forbidden|Not granted to access to this collection|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Collection not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections )
</aside>

## Untrash a collection

<a id="opIduntrashCollection"></a>

> Code samples

```bash
curl https://example.com/collections/string/untrash \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /collections/{collection}/untrash`

This method will restore the collection by removing it from the `trash` and add it back to the `root` collection.


<h3 id="untrash-a-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|collection|path|string|true|Unique identifier of the collection.<br>The following aliases are supported:<br>- `root`: The root collection of the account<br>- `sharedWithMe`: Automatically contains new resources that have been shared individually<br>- `trash`: Automatically contains resources that have been deleted<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="untrash-a-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The score has been untrashed|None|
|403|Forbidden|Not granted to manage this score|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Score not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: collections )
</aside>

<h1 id="flat-api-user">User</h1>

Flat users

## Get a public user profile

<a id="opIdgetUser"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user}`

Get a public profile of a Flat User.


<h3 id="get-a-public-user-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|This route parameter is the unique identifier of the user. You can specify an email instead of an unique identifier. If you are executing this request authenticated, you can use `me` as a value instead of the current User unique identifier to work on the current authenticated user.<br>|

> Example responses

> 200 Response

```json
{
  "id": "000000000000000000000001",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat",
  "classRole": "teacher",
  "htmlUrl": "string",
  "organization": "string",
  "organizationRole": "admin",
  "bio": "string",
  "coverPicture": "string",
  "followersCount": 0,
  "followingCount": 0,
  "instruments": [
    "string"
  ],
  "likedScoresCount": 0,
  "ownedPublicScoresCount": 0,
  "profileTheme": "string",
  "registrationDate": "1970-01-01T00:00:00Z"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-a-public-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user public details|[UserPublic](#schemauserpublic)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: account.public_profile account.education_profile )
</aside>

## List liked scores

<a id="opIdgerUserLikes"></a>

> Code samples

```bash
curl https://example.com/users/string/likes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user}/likes`

<h3 id="list-liked-scores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|boolean|false|Return only the identifiers of the scores|
|user|path|string|true|Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.<br>|

> Example responses

> 200 Response

```json
[
  {
    "htmlUrl": "https://flat.io/score/000000000000000000000000",
    "id": "000000000000000000000000",
    "privacy": "private",
    "title": "My score",
    "user": {
      "id": "000000000000000000000001",
      "name": "Flat Team",
      "picture": "https://flat.io/img/logo_flat.svg",
      "printableName": "Flat Team",
      "username": "flat"
    },
    "arranger": "string",
    "collaborators": [
      {
        "aclAdmin": true,
        "aclRead": true,
        "aclWrite": true,
        "isCollaborator": true,
        "collection": "string",
        "group": {
          "creationDate": "2015-01-19T00:22:02.387000Z",
          "id": "0000000000000000000000043",
          "name": "5th grade",
          "organization": "0000000000000000000000042",
          "readOnly": true,
          "type": "classTeachers",
          "userCount": 24
        },
        "id": "string",
        "invited": true,
        "score": "string",
        "user": {
          "id": "000000000000000000000001",
          "isFlatTeam": true,
          "isPowerUser": true,
          "name": "Flat Team",
          "picture": "https://flat.io/img/logo_flat.svg",
          "printableName": "Flat Team",
          "username": "flat",
          "classRole": "teacher",
          "htmlUrl": "string",
          "organization": "string",
          "organizationRole": "admin",
          "bio": "string",
          "coverPicture": "string",
          "followersCount": 0,
          "followingCount": 0,
          "instruments": [
            "string"
          ],
          "likedScoresCount": 0,
          "ownedPublicScoresCount": 0,
          "profileTheme": "string",
          "registrationDate": "1970-01-01T00:00:00Z"
        },
        "userEmail": "string"
      }
    ],
    "collections": [
      "string"
    ],
    "comments": {
      "monthly": 30,
      "total": 42,
      "unique": 35,
      "weekly": 10
    },
    "composer": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "creationType": "original",
    "description": "string",
    "durationTime": 0,
    "googleDriveFileId": "string",
    "instruments": [
      "string"
    ],
    "license": "copyright",
    "licenseText": "string",
    "likes": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    },
    "lyricist": "string",
    "mainTempoQpm": 0,
    "modificationDate": "1970-01-01T00:00:00Z",
    "numberMeasures": 0,
    "organization": "string",
    "parentScore": "string",
    "plays": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    },
    "publicationDate": "1970-01-01T00:00:00Z",
    "rights": {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true
    },
    "samples": [
      "string"
    ],
    "subtitle": "string",
    "tags": [
      "string"
    ],
    "views": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    }
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-liked-scores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of liked scores|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-liked-scores-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScoreDetails](#schemascoredetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: account.public_profile )
</aside>

## List user's scores

<a id="opIdgetUserScores"></a>

> Code samples

```bash
curl https://example.com/users/string/scores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user}/scores`

Get the list of public scores owned by a User.

**DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
This method will no longer list private and shared scores, but only public scores of a Flat account.
If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.


<h3 id="list-users-scores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|query|string|false|Filter the score forked from the score id `parent`|
|user|path|string|true|Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.<br>|

> Example responses

> 200 Response

```json
[
  {
    "htmlUrl": "https://flat.io/score/000000000000000000000000",
    "id": "000000000000000000000000",
    "privacy": "private",
    "title": "My score",
    "user": {
      "id": "000000000000000000000001",
      "name": "Flat Team",
      "picture": "https://flat.io/img/logo_flat.svg",
      "printableName": "Flat Team",
      "username": "flat"
    },
    "arranger": "string",
    "collaborators": [
      {
        "aclAdmin": true,
        "aclRead": true,
        "aclWrite": true,
        "isCollaborator": true,
        "collection": "string",
        "group": {
          "creationDate": "2015-01-19T00:22:02.387000Z",
          "id": "0000000000000000000000043",
          "name": "5th grade",
          "organization": "0000000000000000000000042",
          "readOnly": true,
          "type": "classTeachers",
          "userCount": 24
        },
        "id": "string",
        "invited": true,
        "score": "string",
        "user": {
          "id": "000000000000000000000001",
          "isFlatTeam": true,
          "isPowerUser": true,
          "name": "Flat Team",
          "picture": "https://flat.io/img/logo_flat.svg",
          "printableName": "Flat Team",
          "username": "flat",
          "classRole": "teacher",
          "htmlUrl": "string",
          "organization": "string",
          "organizationRole": "admin",
          "bio": "string",
          "coverPicture": "string",
          "followersCount": 0,
          "followingCount": 0,
          "instruments": [
            "string"
          ],
          "likedScoresCount": 0,
          "ownedPublicScoresCount": 0,
          "profileTheme": "string",
          "registrationDate": "1970-01-01T00:00:00Z"
        },
        "userEmail": "string"
      }
    ],
    "collections": [
      "string"
    ],
    "comments": {
      "monthly": 30,
      "total": 42,
      "unique": 35,
      "weekly": 10
    },
    "composer": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "creationType": "original",
    "description": "string",
    "durationTime": 0,
    "googleDriveFileId": "string",
    "instruments": [
      "string"
    ],
    "license": "copyright",
    "licenseText": "string",
    "likes": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    },
    "lyricist": "string",
    "mainTempoQpm": 0,
    "modificationDate": "1970-01-01T00:00:00Z",
    "numberMeasures": 0,
    "organization": "string",
    "parentScore": "string",
    "plays": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    },
    "publicationDate": "1970-01-01T00:00:00Z",
    "rights": {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true
    },
    "samples": [
      "string"
    ],
    "subtitle": "string",
    "tags": [
      "string"
    ],
    "views": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    }
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-users-scores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user scores|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-users-scores-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScoreDetails](#schemascoredetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

<h1 id="flat-api-organization">Organization</h1>

Flat for Education organizations

## List the organization invitations

<a id="opIdlistOrganizationInvitations"></a>

> Code samples

```bash
curl https://example.com/organizations/invitations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/invitations`

<h3 id="list-the-organization-invitations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|query|string|false|Filter users by role|
|limit|query|integer|false|This is the maximum number of objects that may be returned|
|next|query|string|false|An opaque string cursor to fetch the next page of data.<br>The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.<br>|
|previous|query|string|false|An opaque string cursor to fetch the previous page of data.<br>The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|user|
|role|teacher|
|role|admin|

> Example responses

> 200 Response

```json
[
  {
    "creationDate": "2017-07-02T15:05:15.576000Z",
    "customCode": "u5raQ7pZ",
    "email": "edu@flat.io",
    "id": "59590bab53b1af260610000",
    "invitedBy": "55b8d8f395c8db031ed00000",
    "organization": "55df29a6694e4a3953100000",
    "organizationRole": "teacher"
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-organization-invitations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of invitations|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-organization-invitations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[OrganizationInvitation](#schemaorganizationinvitation)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users edu.admin.users.readonly )
</aside>

## Create a new invitation to join the organization

<a id="opIdcreateOrganizationInvitation"></a>

> Code samples

```bash
curl https://example.com/organizations/invitations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "edu@flat.io",
    "organizationRole": "teacher"
  }'
```

`POST /organizations/invitations`

This method creates and sends invitation for teachers and admins.

Invitations can only be used by new Flat users or users who are not part of the organization yet.

If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.


> Body parameter

```json
{
  "email": "edu@flat.io",
  "organizationRole": "teacher"
}
```

<h3 id="create-a-new-invitation-to-join-the-organization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[OrganizationInvitationCreation](#schemaorganizationinvitationcreation)|false|none|
|» email|body|string|false|The email address you want to send the invitation to|
|» organizationRole|body|[OrganizationRoles](#schemaorganizationroles)|false|User's Organization Role (for Edu users only)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» organizationRole|admin|
|» organizationRole|billing|
|» organizationRole|teacher|
|» organizationRole|user|

> Example responses

> 200 Response

```json
{
  "creationDate": "2017-07-02T15:05:15.576000Z",
  "customCode": "u5raQ7pZ",
  "email": "edu@flat.io",
  "id": "59590bab53b1af260610000",
  "invitedBy": "55b8d8f395c8db031ed00000",
  "organization": "55df29a6694e4a3953100000",
  "organizationRole": "teacher"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="create-a-new-invitation-to-join-the-organization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New invitation created|[OrganizationInvitation](#schemaorganizationinvitation)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users )
</aside>

## Remove an organization invitation

<a id="opIdremoveOrganizationInvitation"></a>

> Code samples

```bash
curl https://example.com/organizations/invitations/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/invitations/{invitation}`

<h3 id="remove-an-organization-invitation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|invitation|path|string|true|Unique identifier of the invitation|

> Example responses

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="remove-an-organization-invitation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The invitation has been removed|None|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users )
</aside>

## List LTI 1.x credentials

<a id="opIdlistLtiCredentials"></a>

> Code samples

```bash
curl https://example.com/organizations/lti/credentials \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/lti/credentials`

> Example responses

> 200 Response

```json
[
  {
    "consumerKey": "200082F5-FAFD-4C6E-BB19-7DAB5D6264D4",
    "consumerSecret": "168b6181c05eae14298176a274273e4ebef0d15555fe3e80c6a98ccd57d0c3b6",
    "creationDate": "2017-06-06T11:03:01.955000Z",
    "creator": "5832bf149995c4024bd6de7d",
    "id": "59368be5c66caf895ee02387",
    "lastUsage": "2017-06-13T16:02:34.324000Z",
    "lms": "canvas",
    "name": "My couple of credentials for Canvas",
    "organization": "5832c801a4bedc05f4fb4993"
  }
]
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-lti-1x-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of LTI Credentials|Inline|
|403|Forbidden|Not admin of an organization|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-lti-1x-credentials-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[LtiCredentials](#schemalticredentials)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.lti edu.admin.lti.readonly )
</aside>

## Create a new couple of LTI 1.x credentials

<a id="opIdcreateLtiCredentials"></a>

> Code samples

```bash
curl https://example.com/organizations/lti/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "lms": "canvas",
    "name": "My couple of credentials for Canvas"
  }'
```

`POST /organizations/lti/credentials`

Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).


> Body parameter

```json
{
  "lms": "canvas",
  "name": "My couple of credentials for Canvas"
}
```

<h3 id="create-a-new-couple-of-lti-1x-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LtiCredentialsCreation](#schemalticredentialscreation)|true|none|
|» lms|body|[LmsName](#schemalmsname)|true|LMS name|
|» name|body|string|true|Name of the couple of credentials|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» lms|canvas|
|» lms|moodle|
|» lms|schoology|
|» lms|blackboard|
|» lms|desire2learn|
|» lms|sakai|
|» lms|schoolbox|
|» lms|other|

> Example responses

> 200 Response

```json
{
  "consumerKey": "200082F5-FAFD-4C6E-BB19-7DAB5D6264D4",
  "consumerSecret": "168b6181c05eae14298176a274273e4ebef0d15555fe3e80c6a98ccd57d0c3b6",
  "creationDate": "2017-06-06T11:03:01.955000Z",
  "creator": "5832bf149995c4024bd6de7d",
  "id": "59368be5c66caf895ee02387",
  "lastUsage": "2017-06-13T16:02:34.324000Z",
  "lms": "canvas",
  "name": "My couple of credentials for Canvas",
  "organization": "5832c801a4bedc05f4fb4993"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="create-a-new-couple-of-lti-1x-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The LTI Credentials|[LtiCredentials](#schemalticredentials)|
|403|Forbidden|Not admin of an organization|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.lti )
</aside>

## Revoke LTI 1.x credentials

<a id="opIdrevokeLtiCredentials"></a>

> Code samples

```bash
curl https://example.com/organizations/lti/credentials/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/lti/credentials/{credentials}`

<h3 id="revoke-lti-1x-credentials-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|credentials|path|string|true|Credentials unique identifier<br>|

> Example responses

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="revoke-lti-1x-credentials-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Credentials revoked|None|
|403|Forbidden|Not admin of an organization|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Credentials not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.lti )
</aside>

## List the organization users

<a id="opIdlistOrganizationUsers"></a>

> Code samples

```bash
curl https://example.com/organizations/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/users`

<h3 id="list-the-organization-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort|query|string|false|The order to sort the user list|
|direction|query|string|false|Sort direction|
|next|query|string|false|An opaque string cursor to fetch the next page of data.<br>The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.<br>|
|previous|query|string|false|An opaque string cursor to fetch the previous page of data.<br>The paginated API URLs are returned in the `Link` header when requesting the API. These URLs will contain a `next` and `previous` cursor based on the available data.<br>|
|role|query|[string]|false|Filter users by role|
|q|query|string|false|The query to search|
|group|query|[string]|false|Filter users by group|
|noActiveLicense|query|boolean|false|Filter users who don't have an active license|
|licenseExpirationDate|query|[string]|false|Filter users by license expiration date or `active` / `notActive`|
|onlyIds|query|boolean|false|Return only user ids|
|limit|query|integer|false|This is the maximum number of objects that may be returned|

#### Enumerated Values

|Parameter|Value|
|---|---|
|direction|asc|
|direction|desc|
|role|user|
|role|teacher|
|role|admin|

> Example responses

> 200 Response

```json
[
  {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin",
    "email": "user@example.com",
    "lastActivityDate": "1970-01-01T00:00:00Z",
    "license": {
      "active": true,
      "expirationDate": "1970-01-01T00:00:00Z",
      "id": "string",
      "mode": "credit",
      "source": "order"
    }
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-organization-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of users|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-organization-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserDetailsAdmin](#schemauserdetailsadmin)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users edu.admin.users.readonly )
</aside>

## Create a new user account

<a id="opIdcreateOrganizationUser"></a>

> Code samples

```bash
curl https://example.com/organizations/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "user@example.com",
    "firstname": "string",
    "lastname": "string",
    "locale": "en",
    "password": "password",
    "username": "string"
  }'
```

`POST /organizations/users`

> Body parameter

```json
{
  "email": "user@example.com",
  "firstname": "string",
  "lastname": "string",
  "locale": "en",
  "password": "password",
  "username": "string"
}
```

<h3 id="create-a-new-user-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[UserCreation](#schemausercreation)|false|none|
|» email|body|string(email)|false|Email of the new account|
|» firstname|body|string|false|First name of the user|
|» lastname|body|string|false|Last name of the user|
|» locale|body|[FlatLocales](#schemaflatlocales)|false|The user language|
|» password|body|string(password)|true|Password of the new account|
|» username|body|string|true|Username of the new account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» locale|en|
|» locale|en-GB|
|» locale|es|
|» locale|fr|
|» locale|de|
|» locale|it|
|» locale|ja|
|» locale|ko|
|» locale|nl|
|» locale|pl|
|» locale|pt|
|» locale|pt-BR|
|» locale|ro|
|» locale|ru|
|» locale|sv|
|» locale|tr|
|» locale|zh-Hans|

> Example responses

> 200 Response

```json
{
  "id": "000000000000000000000001",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat",
  "classRole": "teacher",
  "htmlUrl": "string",
  "organization": "string",
  "organizationRole": "admin",
  "email": "user@example.com",
  "lastActivityDate": "1970-01-01T00:00:00Z",
  "license": {
    "active": true,
    "expirationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "mode": "credit",
    "source": "order"
  }
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="create-a-new-user-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|New user created|[UserDetailsAdmin](#schemauserdetailsadmin)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users )
</aside>

## Count the organization users using the provided filters

<a id="opIdcountOrgaUsers"></a>

> Code samples

```bash
curl https://example.com/organizations/users/count \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /organizations/users/count`

<h3 id="count-the-organization-users-using-the-provided-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|role|query|[string]|false|Filter users by role|
|q|query|string|false|The query to search|
|group|query|[string]|false|Filter users by group|
|noActiveLicense|query|boolean|false|Filter users who don't have an active license|

#### Enumerated Values

|Parameter|Value|
|---|---|
|role|user|
|role|teacher|
|role|admin|

> Example responses

> 200 Response

```json
0
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="count-the-organization-users-using-the-provided-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Number of users|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users edu.admin.users.readonly )
</aside>

## Update account information

<a id="opIdupdateOrganizationUser"></a>

> Code samples

```bash
curl https://example.com/organizations/users/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "email": "user@example.com",
    "firstname": "string",
    "lastname": "string",
    "organizationRole": "admin",
    "password": "password",
    "username": "string"
  }'
```

`PUT /organizations/users/{user}`

> Body parameter

```json
{
  "email": "user@example.com",
  "firstname": "string",
  "lastname": "string",
  "organizationRole": "admin",
  "password": "password",
  "username": "string"
}
```

<h3 id="update-account-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user|path|string|true|Unique identifier of the Flat account<br>|
|body|body|[UserAdminUpdate](#schemauseradminupdate)|true|none|
|» email|body|string(email)|false|Email of the account|
|» firstname|body|string|false|First name of the user|
|» lastname|body|string|false|Last name of the user|
|» organizationRole|body|[OrganizationRoles](#schemaorganizationroles)|false|User's Organization Role (for Edu users only)|
|» password|body|string(password)|false|Password of the account|
|» username|body|string|false|Username of the account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» organizationRole|admin|
|» organizationRole|billing|
|» organizationRole|teacher|
|» organizationRole|user|

> Example responses

> 200 Response

```json
{
  "id": "000000000000000000000001",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat",
  "classRole": "teacher",
  "htmlUrl": "string",
  "organization": "string",
  "organizationRole": "admin",
  "email": "user@example.com",
  "lastActivityDate": "1970-01-01T00:00:00Z",
  "license": {
    "active": true,
    "expirationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "mode": "credit",
    "source": "order"
  }
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="update-account-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User updated|[UserDetailsAdmin](#schemauserdetailsadmin)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users )
</aside>

## Remove an account from Flat

<a id="opIdremoveOrganizationUser"></a>

> Code samples

```bash
curl https://example.com/organizations/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /organizations/users/{user}`

This operation removes an account from Flat and its data, including:
* The music scores created by this user (documents, history, comments, collaboration information)
* Education related data (assignments and classroom information)


<h3 id="remove-an-account-from-flat-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|convertToIndividual|query|boolean|false|If `true`, the account will be only removed from the organization and converted into an individual account on our public website, https://flat.io.<br>This operation will remove the education-related data from the account.<br>Before realizing this operation, you need to be sure that the user is at least 13 years old and that this one has read and agreed to the Individual Terms of Services of Flat available on https://flat.io/legal.<br>|
|user|path|string|true|Unique identifier of the Flat account<br>|

> Example responses

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="remove-an-account-from-flat-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|User deleted|None|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users )
</aside>

<h1 id="flat-api-class">Class</h1>

Flat for Education classes

## List the classes available for the current user

<a id="opIdlistClasses"></a>

> Code samples

```bash
curl https://example.com/classes \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes`

<h3 id="list-the-classes-available-for-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|false|Filter the classes by state|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|active|
|state|inactive|
|state|archived|

> Example responses

> 200 Response

```json
[
  {
    "assignmentsCount": 10,
    "canvas": {
      "id": "000000000"
    },
    "creationTime": "2017-01-25T09:47:34.544000Z",
    "enrollmentCode": "jm447ear",
    "googleClassroom": {
      "alternateLink": "http://classroom.google.com/c/music-theory",
      "id": "00000000"
    },
    "googleDrive": {
      "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
      "teacherFolderId": "0B-0000000000000000"
    },
    "id": "100000000000000000000001",
    "lti": {
      "contextId": "042",
      "contextLabel": "MUSIC",
      "contextTitle": "Music Theory 101"
    },
    "microsoftGraph": {
      "id": "00000000-0000-0000-0000-000000000000"
    },
    "name": "Music Theory 101",
    "organization": "100000000000000000000002",
    "owner": "100000000000000000000003",
    "section": "Music Theory 101",
    "state": "active",
    "theme": "blue-8"
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-classes-available-for-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of classes|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-classes-available-for-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ClassDetails](#schemaclassdetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.classes.readonly )
</aside>

## Create a new class

<a id="opIdcreateClass"></a>

> Code samples

```bash
curl https://example.com/classes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Music Theory Course",
    "section": "Music Theory 101"
  }'
```

`POST /classes`

Classrooms on Flat allow you to create activities with assignments and post content to a specific group.

When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.

If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.

You can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.


> Body parameter

```json
{
  "name": "Music Theory Course",
  "section": "Music Theory 101"
}
```

<h3 id="create-a-new-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ClassCreation](#schemaclasscreation)|true|none|
|» name|body|string|true|The name of the new class|
|» section|body|string|false|The section of the new class|

> Example responses

> 200 Response

```json
{
  "assignmentsCount": 10,
  "canvas": {
    "id": "000000000"
  },
  "creationTime": "2017-01-25T09:47:34.544000Z",
  "enrollmentCode": "jm447ear",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory",
    "id": "00000000"
  },
  "googleDrive": {
    "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
    "teacherFolderId": "0B-0000000000000000"
  },
  "id": "100000000000000000000001",
  "lti": {
    "contextId": "042",
    "contextLabel": "MUSIC",
    "contextTitle": "Music Theory 101"
  },
  "microsoftGraph": {
    "id": "00000000-0000-0000-0000-000000000000"
  },
  "name": "Music Theory 101",
  "organization": "100000000000000000000002",
  "owner": "100000000000000000000003",
  "section": "Music Theory 101",
  "state": "active",
  "theme": "blue-8"
}
```

> 402 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="create-a-new-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new class details|[ClassDetails](#schemaclassdetails)|
|402|Payment Required|Account overquota|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes )
</aside>

## Join a class

<a id="opIdenrollClass"></a>

> Code samples

```bash
curl https://example.com/classes/enroll/string \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /classes/enroll/{enrollmentCode}`

Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.

Flat will automatically add the user to the corresponding class group based on this role in the organization.


<h3 id="join-a-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|enrollmentCode|path|string|true|The enrollment code, available to the teacher in `ClassDetails`<br>|

> Example responses

> 200 Response

```json
{
  "assignmentsCount": 10,
  "canvas": {
    "id": "000000000"
  },
  "creationTime": "2017-01-25T09:47:34.544000Z",
  "enrollmentCode": "jm447ear",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory",
    "id": "00000000"
  },
  "googleDrive": {
    "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
    "teacherFolderId": "0B-0000000000000000"
  },
  "id": "100000000000000000000001",
  "lti": {
    "contextId": "042",
    "contextLabel": "MUSIC",
    "contextTitle": "Music Theory 101"
  },
  "microsoftGraph": {
    "id": "00000000-0000-0000-0000-000000000000"
  },
  "name": "Music Theory 101",
  "organization": "100000000000000000000002",
  "owner": "100000000000000000000003",
  "section": "Music Theory 101",
  "state": "active",
  "theme": "blue-8"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="join-a-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new class details|[ClassDetails](#schemaclassdetails)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes )
</aside>

## Get the details of a single class

<a id="opIdgetClass"></a>

> Code samples

```bash
curl https://example.com/classes/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}`

<h3 id="get-the-details-of-a-single-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|

> Example responses

> 200 Response

```json
{
  "assignmentsCount": 10,
  "canvas": {
    "id": "000000000"
  },
  "creationTime": "2017-01-25T09:47:34.544000Z",
  "enrollmentCode": "jm447ear",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory",
    "id": "00000000"
  },
  "googleDrive": {
    "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
    "teacherFolderId": "0B-0000000000000000"
  },
  "id": "100000000000000000000001",
  "lti": {
    "contextId": "042",
    "contextLabel": "MUSIC",
    "contextTitle": "Music Theory 101"
  },
  "microsoftGraph": {
    "id": "00000000-0000-0000-0000-000000000000"
  },
  "name": "Music Theory 101",
  "organization": "100000000000000000000002",
  "owner": "100000000000000000000003",
  "section": "Music Theory 101",
  "state": "active",
  "theme": "blue-8"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-the-details-of-a-single-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new class details|[ClassDetails](#schemaclassdetails)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.classes.readonly )
</aside>

## Update the class

<a id="opIdupdateClass"></a>

> Code samples

```bash
curl https://example.com/classes/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "Music Theory Course",
    "section": "Music Theory 101"
  }'
```

`PUT /classes/{class}`

Update the meta information of the class


> Body parameter

```json
{
  "name": "Music Theory Course",
  "section": "Music Theory 101"
}
```

<h3 id="update-the-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|body|body|[ClassUpdate](#schemaclassupdate)|false|Details of the Class|
|» name|body|string|false|The name of the class|
|» section|body|string|false|The section of the class|

> Example responses

> 200 Response

```json
{
  "assignmentsCount": 10,
  "canvas": {
    "id": "000000000"
  },
  "creationTime": "2017-01-25T09:47:34.544000Z",
  "enrollmentCode": "jm447ear",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory",
    "id": "00000000"
  },
  "googleDrive": {
    "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
    "teacherFolderId": "0B-0000000000000000"
  },
  "id": "100000000000000000000001",
  "lti": {
    "contextId": "042",
    "contextLabel": "MUSIC",
    "contextTitle": "Music Theory 101"
  },
  "microsoftGraph": {
    "id": "00000000-0000-0000-0000-000000000000"
  },
  "name": "Music Theory 101",
  "organization": "100000000000000000000002",
  "owner": "100000000000000000000003",
  "section": "Music Theory 101",
  "state": "active",
  "theme": "blue-8"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="update-the-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new class details|[ClassDetails](#schemaclassdetails)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes )
</aside>

## Activate the class

<a id="opIdactivateClass"></a>

> Code samples

```bash
curl https://example.com/classes/string/activate \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /classes/{class}/activate`

Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.


<h3 id="activate-the-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|

> Example responses

> 200 Response

```json
{
  "assignmentsCount": 10,
  "canvas": {
    "id": "000000000"
  },
  "creationTime": "2017-01-25T09:47:34.544000Z",
  "enrollmentCode": "jm447ear",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory",
    "id": "00000000"
  },
  "googleDrive": {
    "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
    "teacherFolderId": "0B-0000000000000000"
  },
  "id": "100000000000000000000001",
  "lti": {
    "contextId": "042",
    "contextLabel": "MUSIC",
    "contextTitle": "Music Theory 101"
  },
  "microsoftGraph": {
    "id": "00000000-0000-0000-0000-000000000000"
  },
  "name": "Music Theory 101",
  "organization": "100000000000000000000002",
  "owner": "100000000000000000000003",
  "section": "Music Theory 101",
  "state": "active",
  "theme": "blue-8"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="activate-the-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The class details|[ClassDetails](#schemaclassdetails)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes )
</aside>

## Archive the class

<a id="opIdarchiveClass"></a>

> Code samples

```bash
curl https://example.com/classes/string/archive \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /classes/{class}/archive`

Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.


<h3 id="archive-the-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|

> Example responses

> 200 Response

```json
{
  "assignmentsCount": 10,
  "canvas": {
    "id": "000000000"
  },
  "creationTime": "2017-01-25T09:47:34.544000Z",
  "enrollmentCode": "jm447ear",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory",
    "id": "00000000"
  },
  "googleDrive": {
    "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
    "teacherFolderId": "0B-0000000000000000"
  },
  "id": "100000000000000000000001",
  "lti": {
    "contextId": "042",
    "contextLabel": "MUSIC",
    "contextTitle": "Music Theory 101"
  },
  "microsoftGraph": {
    "id": "00000000-0000-0000-0000-000000000000"
  },
  "name": "Music Theory 101",
  "organization": "100000000000000000000002",
  "owner": "100000000000000000000003",
  "section": "Music Theory 101",
  "state": "active",
  "theme": "blue-8"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="archive-the-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The class details|[ClassDetails](#schemaclassdetails)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes )
</aside>

## Unarchive the class

<a id="opIdunarchiveClass"></a>

> Code samples

```bash
curl https://example.com/classes/string/archive \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /classes/{class}/archive`

Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.


<h3 id="unarchive-the-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|

> Example responses

> 200 Response

```json
{
  "assignmentsCount": 10,
  "canvas": {
    "id": "000000000"
  },
  "creationTime": "2017-01-25T09:47:34.544000Z",
  "enrollmentCode": "jm447ear",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory",
    "id": "00000000"
  },
  "googleDrive": {
    "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
    "teacherFolderId": "0B-0000000000000000"
  },
  "id": "100000000000000000000001",
  "lti": {
    "contextId": "042",
    "contextLabel": "MUSIC",
    "contextTitle": "Music Theory 101"
  },
  "microsoftGraph": {
    "id": "00000000-0000-0000-0000-000000000000"
  },
  "name": "Music Theory 101",
  "organization": "100000000000000000000002",
  "owner": "100000000000000000000003",
  "section": "Music Theory 101",
  "state": "active",
  "theme": "blue-8"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="unarchive-the-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The class details|[ClassDetails](#schemaclassdetails)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes )
</aside>

## Assignments listing

<a id="opIdlistAssignments"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}/assignments`

<h3 id="assignments-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|

> Example responses

> 200 Response

```json
[
  {
    "attachments": [
      {
        "score": "0000000000000000",
        "type": "flat"
      },
      {
        "type": "link",
        "url": "https://flat.io/developers"
      },
      {
        "authorName": "Flat",
        "authorUrl": "https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw",
        "description": "Discover Flat on https://flat.io",
        "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SNbRUiBZ4Uw\" frameborder=\"0\" allowfullscreen></iframe>",
        "thumbnailHeight": 1052,
        "thumbnailUrl": "https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg",
        "thumbnailWidth": 1868,
        "title": "Flat - The online collaborative music notation software",
        "type": "video",
        "url": "https://www.youtube.com/watch?v=SNbRUiBZ4Uw"
      }
    ],
    "canvas": {
      "alternateLink": "https://canvas.instructure.com/courses/00000/assignments/12345",
      "id": "12345"
    },
    "classroom": "58c4725345cd836264f0b29e",
    "creationDate": "2017-06-12T13:56:19.613000Z",
    "creator": "5832bf149995c4024bd6de7d",
    "description": "Get started with Flat",
    "dueDate": "2017-07-12T13:56:19.613000Z",
    "googleClassroom": {
      "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/detail",
      "id": "1235665432"
    },
    "lti": {
      "id": "12345"
    },
    "maxPoints": 100,
    "scheduledDate": "2017-06-18T13:56:19.613000Z",
    "state": "active",
    "submissions": [
      {
        "assignment": "58c49068524c03ec576ca43c",
        "attachments": [
          {
            "score": "58c4955a226ffff257211a8d",
            "title": "Hello - Student",
            "type": "flat"
          }
        ],
        "classroom": "58c4725345cd836264f0b29e",
        "creationDate": "2017-03-12T00:25:00.748000Z",
        "creator": "559eb5c7f0d4d5e46d03781d",
        "googleClassroom": {
          "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
          "id": "CgsI-00000000000",
          "state": "turned_in"
        },
        "id": "58c4955c226ffff257211a90",
        "submissionDate": "2017-03-12T00:25:22.748000Z"
      }
    ],
    "title": "My first assignment"
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="assignments-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of assignments for the class|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="assignments-listing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Assignment](#schemaassignment)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.classes.readonly edu.assignments edu.assignments.readonly )
</aside>

## Assignment creation

<a id="opIdcreateAssignment"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachments": [
      {
        "score": "0000000000000000",
        "type": "flat"
      },
      {
        "type": "link",
        "url": "https://flat.io/developers"
      }
    ],
    "description": "Get started with Flat",
    "dueDate": "2017-07-12T13:56:19.613000Z",
    "maxPoints": 100,
    "scheduledDate": "2017-06-20T13:56:19.613000Z",
    "title": "First assignment"
  }'
```

`POST /classes/{class}/assignments`

Use this method as a teacher to create and post a new assignment to a class.

If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.


> Body parameter

```json
{
  "attachments": [
    {
      "score": "0000000000000000",
      "type": "flat"
    },
    {
      "type": "link",
      "url": "https://flat.io/developers"
    }
  ],
  "description": "Get started with Flat",
  "dueDate": "2017-07-12T13:56:19.613000Z",
  "maxPoints": 100,
  "scheduledDate": "2017-06-20T13:56:19.613000Z",
  "title": "First assignment"
}
```

<h3 id="assignment-creation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|body|body|[AssignmentCreation](#schemaassignmentcreation)|false|none|
|» assignedStudents|body|[string]|false|Identifiers for the students that have access to the assignment|
|» assigneeMode|body|string|false|Possible modes of assigning assignments|
|» attachments|body|[[ClassAttachmentCreation](#schemaclassattachmentcreation)]|false|none|
|» cover|body|string \| null|false|The URL of the cover to display|
|» coverFile|body|string \| null|false|The id of the cover to display|
|» description|body|string|false|Description and content of the assignment|
|» dueDate|body|string(date-time) \| null|false|The due date of this assignment, late submissions will be marked as paste due. If not set, the assignment won't have a due date.<br>|
|» googleClassroom|body|object|false|Google Classroom options for this assignment|
|» » topicId|body|string \| null|false|Identifier of the topic where the assignment is created|
|» maxPoints|body|number \| null|false|If set, the grading will be enabled for the assignement with this value as the maximum of points<br>|
|» microsoftGraph|body|object|false|Microsoft Graph options for this assignment|
|» » categories|body|[string]|false|List of categories this assignment belongs to|
|» nbPlaybackAuthorized|body|number \| null|false|The number of playback authorized on the scores of the assignment.|
|» scheduledDate|body|string(date-time) \| null|false|The publication (scheduled) date of the assignment.<br>If this one is specified, the assignment will only be listed to the teachers of the class.<br>|
|» state|body|string|false|State of the assignment|
|» title|body|string|false|Title of the assignment|
|» toolset|body|string \| null|false|The id of the associated toolset|
|» type|body|[AssignmentType](#schemaassignmenttype)|false|Type of the assignment|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» assigneeMode|everyone|
|» assigneeMode|selected|
|» state|draft|
|» state|active|
|» type|none|
|» type|newScore|
|» type|scoreTemplate|
|» type|sharedWriting|
|» type|worksheet|
|» type|performance|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "score": "0000000000000000",
      "type": "flat"
    },
    {
      "type": "link",
      "url": "https://flat.io/developers"
    },
    {
      "authorName": "Flat",
      "authorUrl": "https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw",
      "description": "Discover Flat on https://flat.io",
      "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SNbRUiBZ4Uw\" frameborder=\"0\" allowfullscreen></iframe>",
      "thumbnailHeight": 1052,
      "thumbnailUrl": "https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg",
      "thumbnailWidth": 1868,
      "title": "Flat - The online collaborative music notation software",
      "type": "video",
      "url": "https://www.youtube.com/watch?v=SNbRUiBZ4Uw"
    }
  ],
  "canvas": {
    "alternateLink": "https://canvas.instructure.com/courses/00000/assignments/12345",
    "id": "12345"
  },
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2017-06-12T13:56:19.613000Z",
  "creator": "5832bf149995c4024bd6de7d",
  "description": "Get started with Flat",
  "dueDate": "2017-07-12T13:56:19.613000Z",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/detail",
    "id": "1235665432"
  },
  "lti": {
    "id": "12345"
  },
  "maxPoints": 100,
  "scheduledDate": "2017-06-18T13:56:19.613000Z",
  "state": "active",
  "submissions": [
    {
      "assignment": "58c49068524c03ec576ca43c",
      "attachments": [
        {
          "score": "58c4955a226ffff257211a8d",
          "title": "Hello - Student",
          "type": "flat"
        }
      ],
      "classroom": "58c4725345cd836264f0b29e",
      "creationDate": "2017-03-12T00:25:00.748000Z",
      "creator": "559eb5c7f0d4d5e46d03781d",
      "googleClassroom": {
        "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
        "id": "CgsI-00000000000",
        "state": "turned_in"
      },
      "id": "58c4955c226ffff257211a90",
      "submissionDate": "2017-03-12T00:25:22.748000Z"
    }
  ],
  "title": "My first assignment"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="assignment-creation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The assignment has been created|[Assignment](#schemaassignment)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.assignments )
</aside>

## Archive the assignment

<a id="opIdarchiveAssignment"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/archive \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /classes/{class}/assignments/{assignment}/archive`

Archive the assignment


<h3 id="archive-the-assignment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "score": "0000000000000000",
      "type": "flat"
    },
    {
      "type": "link",
      "url": "https://flat.io/developers"
    },
    {
      "authorName": "Flat",
      "authorUrl": "https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw",
      "description": "Discover Flat on https://flat.io",
      "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SNbRUiBZ4Uw\" frameborder=\"0\" allowfullscreen></iframe>",
      "thumbnailHeight": 1052,
      "thumbnailUrl": "https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg",
      "thumbnailWidth": 1868,
      "title": "Flat - The online collaborative music notation software",
      "type": "video",
      "url": "https://www.youtube.com/watch?v=SNbRUiBZ4Uw"
    }
  ],
  "canvas": {
    "alternateLink": "https://canvas.instructure.com/courses/00000/assignments/12345",
    "id": "12345"
  },
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2017-06-12T13:56:19.613000Z",
  "creator": "5832bf149995c4024bd6de7d",
  "description": "Get started with Flat",
  "dueDate": "2017-07-12T13:56:19.613000Z",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/detail",
    "id": "1235665432"
  },
  "lti": {
    "id": "12345"
  },
  "maxPoints": 100,
  "scheduledDate": "2017-06-18T13:56:19.613000Z",
  "state": "active",
  "submissions": [
    {
      "assignment": "58c49068524c03ec576ca43c",
      "attachments": [
        {
          "score": "58c4955a226ffff257211a8d",
          "title": "Hello - Student",
          "type": "flat"
        }
      ],
      "classroom": "58c4725345cd836264f0b29e",
      "creationDate": "2017-03-12T00:25:00.748000Z",
      "creator": "559eb5c7f0d4d5e46d03781d",
      "googleClassroom": {
        "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
        "id": "CgsI-00000000000",
        "state": "turned_in"
      },
      "id": "58c4955c226ffff257211a90",
      "submissionDate": "2017-03-12T00:25:22.748000Z"
    }
  ],
  "title": "My first assignment"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="archive-the-assignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The assignment details|[Assignment](#schemaassignment)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.assignments )
</aside>

## Unarchive the assignment.

<a id="opIdunarchiveAssignment"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/archive \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /classes/{class}/assignments/{assignment}/archive`

Mark the assignment as `active`.


<h3 id="unarchive-the-assignment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "score": "0000000000000000",
      "type": "flat"
    },
    {
      "type": "link",
      "url": "https://flat.io/developers"
    },
    {
      "authorName": "Flat",
      "authorUrl": "https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw",
      "description": "Discover Flat on https://flat.io",
      "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SNbRUiBZ4Uw\" frameborder=\"0\" allowfullscreen></iframe>",
      "thumbnailHeight": 1052,
      "thumbnailUrl": "https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg",
      "thumbnailWidth": 1868,
      "title": "Flat - The online collaborative music notation software",
      "type": "video",
      "url": "https://www.youtube.com/watch?v=SNbRUiBZ4Uw"
    }
  ],
  "canvas": {
    "alternateLink": "https://canvas.instructure.com/courses/00000/assignments/12345",
    "id": "12345"
  },
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2017-06-12T13:56:19.613000Z",
  "creator": "5832bf149995c4024bd6de7d",
  "description": "Get started with Flat",
  "dueDate": "2017-07-12T13:56:19.613000Z",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/detail",
    "id": "1235665432"
  },
  "lti": {
    "id": "12345"
  },
  "maxPoints": 100,
  "scheduledDate": "2017-06-18T13:56:19.613000Z",
  "state": "active",
  "submissions": [
    {
      "assignment": "58c49068524c03ec576ca43c",
      "attachments": [
        {
          "score": "58c4955a226ffff257211a8d",
          "title": "Hello - Student",
          "type": "flat"
        }
      ],
      "classroom": "58c4725345cd836264f0b29e",
      "creationDate": "2017-03-12T00:25:00.748000Z",
      "creator": "559eb5c7f0d4d5e46d03781d",
      "googleClassroom": {
        "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
        "id": "CgsI-00000000000",
        "state": "turned_in"
      },
      "id": "58c4955c226ffff257211a90",
      "submissionDate": "2017-03-12T00:25:22.748000Z"
    }
  ],
  "title": "My first assignment"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="unarchive-the-assignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The assignment details|[Assignment](#schemaassignment)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.assignments )
</aside>

## Copy an assignment

<a id="opIdcopyAssignment"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/copy \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "classroom": "0000000000000000"
  }'
```

`POST /classes/{class}/assignments/{assignment}/copy`

Copy an assignment to a specified class.

If the original assignment has a due date in the past, this new assingment will be created without a due date.

If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.


> Body parameter

```json
{
  "classroom": "0000000000000000"
}
```

<h3 id="copy-an-assignment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|body|body|[AssignmentCopy](#schemaassignmentcopy)|true|none|
|» assignment|body|string|false|An optional destination assignment where the original assignement will be copied. Must be a draft.|
|» classroom|body|string|false|The destination classroom where the assignment will be copied|
|» scheduledDate|body|string(date-time)|false|The publication (scheduled) date of the assignment.<br>If this one is specified, the assignment will only be listed to the teachers of the class.<br>Alternatively the existing `scheduledDate` from the copied assignment will be used.<br>|

> Example responses

> 200 Response

```json
{
  "attachments": [
    {
      "score": "0000000000000000",
      "type": "flat"
    },
    {
      "type": "link",
      "url": "https://flat.io/developers"
    },
    {
      "authorName": "Flat",
      "authorUrl": "https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw",
      "description": "Discover Flat on https://flat.io",
      "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SNbRUiBZ4Uw\" frameborder=\"0\" allowfullscreen></iframe>",
      "thumbnailHeight": 1052,
      "thumbnailUrl": "https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg",
      "thumbnailWidth": 1868,
      "title": "Flat - The online collaborative music notation software",
      "type": "video",
      "url": "https://www.youtube.com/watch?v=SNbRUiBZ4Uw"
    }
  ],
  "canvas": {
    "alternateLink": "https://canvas.instructure.com/courses/00000/assignments/12345",
    "id": "12345"
  },
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2017-06-12T13:56:19.613000Z",
  "creator": "5832bf149995c4024bd6de7d",
  "description": "Get started with Flat",
  "dueDate": "2017-07-12T13:56:19.613000Z",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/detail",
    "id": "1235665432"
  },
  "lti": {
    "id": "12345"
  },
  "maxPoints": 100,
  "scheduledDate": "2017-06-18T13:56:19.613000Z",
  "state": "active",
  "submissions": [
    {
      "assignment": "58c49068524c03ec576ca43c",
      "attachments": [
        {
          "score": "58c4955a226ffff257211a8d",
          "title": "Hello - Student",
          "type": "flat"
        }
      ],
      "classroom": "58c4725345cd836264f0b29e",
      "creationDate": "2017-03-12T00:25:00.748000Z",
      "creator": "559eb5c7f0d4d5e46d03781d",
      "googleClassroom": {
        "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
        "id": "CgsI-00000000000",
        "state": "turned_in"
      },
      "id": "58c4955c226ffff257211a90",
      "submissionDate": "2017-03-12T00:25:22.748000Z"
    }
  ],
  "title": "My first assignment"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="copy-an-assignment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new created assingment|[Assignment](#schemaassignment)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.assignments )
</aside>

## List the students' submissions

<a id="opIdgetSubmissions"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}/assignments/{assignment}/submissions`

<h3 id="list-the-students-submissions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|

> Example responses

> 200 Response

```json
[
  {
    "assignment": "58c49068524c03ec576ca43c",
    "attachments": [
      {
        "score": "58c4955a226ffff257211a8d",
        "title": "Hello - Student",
        "type": "flat"
      }
    ],
    "classroom": "58c4725345cd836264f0b29e",
    "creationDate": "2020-08-12T00:25:00.748000Z",
    "creator": "559eb5c7f0d4d5e46d03781d",
    "draftGrade": 82,
    "googleClassroom": {
      "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
      "id": "CgsI-00000000000",
      "state": "turned_in"
    },
    "grade": 80,
    "id": "58c4955c226ffff257211a90",
    "returnCreator": "559eb5c7f0d4d5e46d000000",
    "returnDate": "2020-08-15T00:25:00.748000Z",
    "submissionDate": "2020-08-12T00:45:22.748000Z"
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-students-submissions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The submissions|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-students-submissions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssignmentSubmission](#schemaassignmentsubmission)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.classes.readonly edu.assignments edu.assignments.readonly )
</aside>

## Create or edit a submission

<a id="opIdcreateSubmission"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachments": [
      {
        "score": "58c4955a226ffff257211a8d",
        "title": "Hello - Student",
        "type": "flat"
      }
    ],
    "submit": true
  }'
```

`PUT /classes/{class}/assignments/{assignment}/submissions`

Use this method as a student to create, update and submit a submission related to an assignment.
Students can only set `attachments` and `submit`.
Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.


> Body parameter

```json
{
  "attachments": [
    {
      "score": "58c4955a226ffff257211a8d",
      "title": "Hello - Student",
      "type": "flat"
    }
  ],
  "submit": true
}
```

<h3 id="create-or-edit-a-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|body|body|[AssignmentSubmissionUpdate](#schemaassignmentsubmissionupdate)|true|none|
|» attachments|body|[[ClassAttachmentCreation](#schemaclassattachmentcreation)]|false|none|
|» comments|body|object|false|none|
|» » total|body|number|false|The total number of comments added to the submission|
|» » unread|body|number|false|The number of unread comments for the current user|
|» draftGrade|body|number \| null|false|Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission|
|» grade|body|number \| null|false|Optional grade. If unset, no grade was set.|
|» return|body|boolean|false|If `true`, the submission will be marked as done|
|» submit|body|boolean|false|If `true`, the submission will be marked as done|

> Example responses

> 200 Response

```json
{
  "assignment": "58c49068524c03ec576ca43c",
  "attachments": [
    {
      "score": "58c4955a226ffff257211a8d",
      "title": "Hello - Student",
      "type": "flat"
    }
  ],
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2020-08-12T00:25:00.748000Z",
  "creator": "559eb5c7f0d4d5e46d03781d",
  "draftGrade": 82,
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
    "id": "CgsI-00000000000",
    "state": "turned_in"
  },
  "grade": 80,
  "id": "58c4955c226ffff257211a90",
  "returnCreator": "559eb5c7f0d4d5e46d000000",
  "returnDate": "2020-08-15T00:25:00.748000Z",
  "submissionDate": "2020-08-12T00:45:22.748000Z"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="create-or-edit-a-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The submission|[AssignmentSubmission](#schemaassignmentsubmission)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.assignments )
</aside>

## CSV Grades exports

<a id="opIdexportSubmissionsReviewsAsCsv"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/csv \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}/assignments/{assignment}/submissions/csv`

Export list of submissions grades to a CSV file

<h3 id="csv-grades-exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|

<h3 id="csv-grades-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of submissions|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.classes.readonly edu.assignments edu.assignments.readonly )
</aside>

## Excel Grades exports

<a id="opIdexportSubmissionsReviewsAsExcel"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/excel \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}/assignments/{assignment}/submissions/excel`

Export list of submissions grades to an Excel file

<h3 id="excel-grades-exports-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|

<h3 id="excel-grades-exports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of submissions|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.classes.readonly edu.assignments edu.assignments.readonly )
</aside>

## Get a student submission

<a id="opIdgetSubmission"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}/assignments/{assignment}/submissions/{submission}`

<h3 id="get-a-student-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|submission|path|string|true|Unique identifier of the submission|

> Example responses

> 200 Response

```json
{
  "assignment": "58c49068524c03ec576ca43c",
  "attachments": [
    {
      "score": "58c4955a226ffff257211a8d",
      "title": "Hello - Student",
      "type": "flat"
    }
  ],
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2020-08-12T00:25:00.748000Z",
  "creator": "559eb5c7f0d4d5e46d03781d",
  "draftGrade": 82,
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
    "id": "CgsI-00000000000",
    "state": "turned_in"
  },
  "grade": 80,
  "id": "58c4955c226ffff257211a90",
  "returnCreator": "559eb5c7f0d4d5e46d000000",
  "returnDate": "2020-08-15T00:25:00.748000Z",
  "submissionDate": "2020-08-12T00:45:22.748000Z"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-a-student-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A submission|[AssignmentSubmission](#schemaassignmentsubmission)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.classes.readonly edu.assignments edu.assignments.readonly )
</aside>

## Edit a submission

<a id="opIdeditSubmission"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachments": [
      {
        "score": "58c4955a226ffff257211a8d",
        "title": "Hello - Student",
        "type": "flat"
      }
    ],
    "submit": true
  }'
```

`PUT /classes/{class}/assignments/{assignment}/submissions/{submission}`

Use this method as a teacher to update the different submission and give feedback.
Teachers can only set `return`, `draftGrade` and `grade`


> Body parameter

```json
{
  "attachments": [
    {
      "score": "58c4955a226ffff257211a8d",
      "title": "Hello - Student",
      "type": "flat"
    }
  ],
  "submit": true
}
```

<h3 id="edit-a-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|submission|path|string|true|Unique identifier of the submission|
|body|body|[AssignmentSubmissionUpdate](#schemaassignmentsubmissionupdate)|true|none|
|» attachments|body|[[ClassAttachmentCreation](#schemaclassattachmentcreation)]|false|none|
|» comments|body|object|false|none|
|» » total|body|number|false|The total number of comments added to the submission|
|» » unread|body|number|false|The number of unread comments for the current user|
|» draftGrade|body|number \| null|false|Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission|
|» grade|body|number \| null|false|Optional grade. If unset, no grade was set.|
|» return|body|boolean|false|If `true`, the submission will be marked as done|
|» submit|body|boolean|false|If `true`, the submission will be marked as done|

> Example responses

> 200 Response

```json
{
  "assignment": "58c49068524c03ec576ca43c",
  "attachments": [
    {
      "score": "58c4955a226ffff257211a8d",
      "title": "Hello - Student",
      "type": "flat"
    }
  ],
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2020-08-12T00:25:00.748000Z",
  "creator": "559eb5c7f0d4d5e46d03781d",
  "draftGrade": 82,
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
    "id": "CgsI-00000000000",
    "state": "turned_in"
  },
  "grade": 80,
  "id": "58c4955c226ffff257211a90",
  "returnCreator": "559eb5c7f0d4d5e46d000000",
  "returnDate": "2020-08-15T00:25:00.748000Z",
  "submissionDate": "2020-08-12T00:45:22.748000Z"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="edit-a-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The submission|[AssignmentSubmission](#schemaassignmentsubmission)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.assignments )
</aside>

## Delete a submission

<a id="opIddeleteSubmission"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /classes/{class}/assignments/{assignment}/submissions/{submission}`

Use this method as a teacher to delete a submission and allow student to start over the assignment


<h3 id="delete-a-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|submission|path|string|true|Unique identifier of the submission|

> Example responses

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="delete-a-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The submission has been deleted|None|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.assignments )
</aside>

## List the feedback comments of a submission

<a id="opIdgetSubmissionComments"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/string/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}/assignments/{assignment}/submissions/{submission}/comments`

<h3 id="list-the-feedback-comments-of-a-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|submission|path|string|true|Unique identifier of the submission|

> Example responses

> 200 Response

```json
[
  {
    "comment": "string",
    "date": "1970-01-01T00:00:00Z",
    "id": "string",
    "modificationDate": "1970-01-01T00:00:00Z",
    "submission": "string",
    "unread": true,
    "user": "string"
  }
]
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-feedback-comments-of-a-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The comments of the score|Inline|
|403|Forbidden|Not granted to access to this submission|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Submission not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-feedback-comments-of-a-submission-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssignmentSubmissionComment](#schemaassignmentsubmissioncomment)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.assignments edu.assignments.readonly )
</aside>

## Add a feedback comment to a submission

<a id="opIdpostSubmissionComment"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/string/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "string"
  }'
```

`POST /classes/{class}/assignments/{assignment}/submissions/{submission}/comments`

> Body parameter

```json
{
  "comment": "string"
}
```

<h3 id="add-a-feedback-comment-to-a-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|submission|path|string|true|Unique identifier of the submission|
|body|body|[AssignmentSubmissionCommentCreation](#schemaassignmentsubmissioncommentcreation)|true|none|
|» comment|body|string|true|The comment text|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "date": "1970-01-01T00:00:00Z",
  "id": "string",
  "modificationDate": "1970-01-01T00:00:00Z",
  "submission": "string",
  "unread": true,
  "user": "string"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="add-a-feedback-comment-to-a-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The comment|[AssignmentSubmissionComment](#schemaassignmentsubmissioncomment)|
|403|Forbidden|Not granted to access to this submission|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Submission not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.assignments )
</aside>

## Update a feedback comment to a submission

<a id="opIdupdateSubmissionComment"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/string/comments/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "string"
  }'
```

`PUT /classes/{class}/assignments/{assignment}/submissions/{submission}/comments/{comment}`

> Body parameter

```json
{
  "comment": "string"
}
```

<h3 id="update-a-feedback-comment-to-a-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|submission|path|string|true|Unique identifier of the submission|
|comment|path|string|true|Unique identifier of the comment|
|body|body|[AssignmentSubmissionCommentCreation](#schemaassignmentsubmissioncommentcreation)|true|none|
|» comment|body|string|true|The comment text|

> Example responses

> 200 Response

```json
{
  "comment": "string",
  "date": "1970-01-01T00:00:00Z",
  "id": "string",
  "modificationDate": "1970-01-01T00:00:00Z",
  "submission": "string",
  "unread": true,
  "user": "string"
}
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="update-a-feedback-comment-to-a-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The comment|[AssignmentSubmissionComment](#schemaassignmentsubmissioncomment)|
|403|Forbidden|Not granted to access to this submission|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Submission not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.assignments )
</aside>

## Delete a feedback comment to a submission

<a id="opIddeleteSubmissionComment"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/string/comments/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /classes/{class}/assignments/{assignment}/submissions/{submission}/comments/{comment}`

<h3 id="delete-a-feedback-comment-to-a-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|submission|path|string|true|Unique identifier of the submission|
|comment|path|string|true|Unique identifier of the comment|

> Example responses

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="delete-a-feedback-comment-to-a-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The comment has been deleted|None|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.assignments )
</aside>

## Get the history of the submission

<a id="opIdgetSubmissionHistory"></a>

> Code samples

```bash
curl https://example.com/classes/string/assignments/string/submissions/string/history \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}/assignments/{assignment}/submissions/{submission}/history`

For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories.


<h3 id="get-the-history-of-the-submission-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|assignment|path|string|true|Unique identifier of the assignment|
|submission|path|string|true|Unique identifier of the submission|

> Example responses

> 200 Response

```json
[
  {
    "attachment": {
      "revision": "string",
      "score": "string"
    },
    "date": "1970-01-01T00:00:00Z",
    "draftGrade": 0,
    "grade": 0,
    "maxPoints": 0,
    "state": "created",
    "users": [
      "string"
    ]
  }
]
```

> 403 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> 404 Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-the-history-of-the-submission-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The history of the submission|Inline|
|403|Forbidden|Not granted to access to this submission|[FlatErrorResponse](#schemaflaterrorresponse)|
|404|Not Found|Submission not found|[FlatErrorResponse](#schemaflaterrorresponse)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="get-the-history-of-the-submission-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssignmentSubmissionHistory](#schemaassignmentsubmissionhistory)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.assignments edu.assignments.readonly )
</aside>

## List the submissions for a student

<a id="opIdlistClassStudentSubmissions"></a>

> Code samples

```bash
curl https://example.com/classes/string/students/string/submissions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /classes/{class}/students/{user}/submissions`

Use this method as a teacher to list all the assignment submissions sent by a student of the class


<h3 id="list-the-submissions-for-a-student-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|user|path|string|true|Unique identifier of the user|

> Example responses

> 200 Response

```json
[
  {
    "assignment": "58c49068524c03ec576ca43c",
    "attachments": [
      {
        "score": "58c4955a226ffff257211a8d",
        "title": "Hello - Student",
        "type": "flat"
      }
    ],
    "classroom": "58c4725345cd836264f0b29e",
    "creationDate": "2020-08-12T00:25:00.748000Z",
    "creator": "559eb5c7f0d4d5e46d03781d",
    "draftGrade": 82,
    "googleClassroom": {
      "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
      "id": "CgsI-00000000000",
      "state": "turned_in"
    },
    "grade": 80,
    "id": "58c4955c226ffff257211a90",
    "returnCreator": "559eb5c7f0d4d5e46d000000",
    "returnDate": "2020-08-15T00:25:00.748000Z",
    "submissionDate": "2020-08-12T00:45:22.748000Z"
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-the-submissions-for-a-student-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of submissions|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-the-submissions-for-a-student-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AssignmentSubmission](#schemaassignmentsubmission)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes edu.classes.readonly edu.assignments edu.assignments.readonly )
</aside>

## Add a user to the class

<a id="opIdaddClassUser"></a>

> Code samples

```bash
curl https://example.com/classes/string/users/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /classes/{class}/users/{user}`

This method can be used by a teacher of the class to enroll another Flat user into the class.

Only users that are part of your Organization can be enrolled in a class of this same Organization.

When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.


<h3 id="add-a-user-to-the-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|user|path|string|true|Unique identifier of the user|

> Example responses

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="add-a-user-to-the-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The user has been added to the class|None|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes )
</aside>

## Remove a user from the class

<a id="opIddeleteClassUser"></a>

> Code samples

```bash
curl https://example.com/classes/string/users/string \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /classes/{class}/users/{user}`

This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.

Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.


<h3 id="remove-a-user-from-the-class-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|class|path|string|true|Unique identifier of the class|
|user|path|string|true|Unique identifier of the user|

> Example responses

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="remove-a-user-from-the-class-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|The user has been removed from the class|None|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.classes )
</aside>

<h1 id="flat-api-group">Group</h1>

Flat Groups

## Get group information

<a id="opIdgetGroupDetails"></a>

> Code samples

```bash
curl https://example.com/groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{group}`

<h3 id="get-group-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group|path|string|true|Unique identifier of a Flat group<br>|

> Example responses

> 200 Response

```json
{
  "creationDate": "2017-07-02T15:02:40.207000Z",
  "id": "58c4955c226ffff257211a00",
  "name": "5th Grade - Teachers",
  "organization": "0000000000000000000000042",
  "readOnly": false,
  "type": "classTeachers",
  "usersCount": 2
}
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="get-group-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The group details|[GroupDetails](#schemagroupdetails)|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users edu.admin.users.readonly edu.classes edu.classes.readonly )
</aside>

## List group's scores

<a id="opIdgetGroupScores"></a>

> Code samples

```bash
curl https://example.com/groups/string/scores \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{group}/scores`

Get the list of scores shared with a group.


<h3 id="list-groups-scores-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|query|string|false|Filter the score forked from the score id `parent`|
|group|path|string|true|Unique identifier of a Flat group<br>|

> Example responses

> 200 Response

```json
[
  {
    "htmlUrl": "https://flat.io/score/000000000000000000000000",
    "id": "000000000000000000000000",
    "privacy": "private",
    "title": "My score",
    "user": {
      "id": "000000000000000000000001",
      "name": "Flat Team",
      "picture": "https://flat.io/img/logo_flat.svg",
      "printableName": "Flat Team",
      "username": "flat"
    },
    "arranger": "string",
    "collaborators": [
      {
        "aclAdmin": true,
        "aclRead": true,
        "aclWrite": true,
        "isCollaborator": true,
        "collection": "string",
        "group": {
          "creationDate": "2015-01-19T00:22:02.387000Z",
          "id": "0000000000000000000000043",
          "name": "5th grade",
          "organization": "0000000000000000000000042",
          "readOnly": true,
          "type": "classTeachers",
          "userCount": 24
        },
        "id": "string",
        "invited": true,
        "score": "string",
        "user": {
          "id": "000000000000000000000001",
          "isFlatTeam": true,
          "isPowerUser": true,
          "name": "Flat Team",
          "picture": "https://flat.io/img/logo_flat.svg",
          "printableName": "Flat Team",
          "username": "flat",
          "classRole": "teacher",
          "htmlUrl": "string",
          "organization": "string",
          "organizationRole": "admin",
          "bio": "string",
          "coverPicture": "string",
          "followersCount": 0,
          "followingCount": 0,
          "instruments": [
            "string"
          ],
          "likedScoresCount": 0,
          "ownedPublicScoresCount": 0,
          "profileTheme": "string",
          "registrationDate": "1970-01-01T00:00:00Z"
        },
        "userEmail": "string"
      }
    ],
    "collections": [
      "string"
    ],
    "comments": {
      "monthly": 30,
      "total": 42,
      "unique": 35,
      "weekly": 10
    },
    "composer": "string",
    "creationDate": "1970-01-01T00:00:00Z",
    "creationType": "original",
    "description": "string",
    "durationTime": 0,
    "googleDriveFileId": "string",
    "instruments": [
      "string"
    ],
    "license": "copyright",
    "licenseText": "string",
    "likes": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    },
    "lyricist": "string",
    "mainTempoQpm": 0,
    "modificationDate": "1970-01-01T00:00:00Z",
    "numberMeasures": 0,
    "organization": "string",
    "parentScore": "string",
    "plays": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    },
    "publicationDate": "1970-01-01T00:00:00Z",
    "rights": {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true
    },
    "samples": [
      "string"
    ],
    "subtitle": "string",
    "tags": [
      "string"
    ],
    "views": {
      "monthly": 30,
      "total": 42,
      "weekly": 10
    }
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-groups-scores-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The group's scores|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-groups-scores-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ScoreDetails](#schemascoredetails)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: scores scores.readonly )
</aside>

## List group's users

<a id="opIdlistGroupUsers"></a>

> Code samples

```bash
curl https://example.com/groups/string/users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{group}/users`

<h3 id="list-groups-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source|query|string|false|Filter the users by their source<br>|
|group|path|string|true|Unique identifier of a Flat group<br>|

#### Enumerated Values

|Parameter|Value|
|---|---|
|source|googleClassroom|
|source|microsoftGraph|
|source|clever|

> Example responses

> 200 Response

```json
[
  {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin",
    "bio": "string",
    "coverPicture": "string",
    "followersCount": 0,
    "followingCount": 0,
    "instruments": [
      "string"
    ],
    "likedScoresCount": 0,
    "ownedPublicScoresCount": 0,
    "profileTheme": "string",
    "registrationDate": "1970-01-01T00:00:00Z"
  }
]
```

> default Response

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

<h3 id="list-groups-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The list of users member of the group|Inline|
|default|Default|Error|[FlatErrorResponse](#schemaflaterrorresponse)|

<h3 id="list-groups-users-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[UserPublic](#schemauserpublic)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2 ( Scopes: edu.admin edu.admin.users edu.admin.users.readonly edu.classes edu.classes.readonly )
</aside>

# Schemas

<h2 id="tocS_Assignment">Assignment</h2>
<!-- backwards compatibility -->
<a id="schemaassignment"></a>
<a id="schema_Assignment"></a>
<a id="tocSassignment"></a>
<a id="tocsassignment"></a>

```json
{
  "attachments": [
    {
      "score": "0000000000000000",
      "type": "flat"
    },
    {
      "type": "link",
      "url": "https://flat.io/developers"
    },
    {
      "authorName": "Flat",
      "authorUrl": "https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw",
      "description": "Discover Flat on https://flat.io",
      "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SNbRUiBZ4Uw\" frameborder=\"0\" allowfullscreen></iframe>",
      "thumbnailHeight": 1052,
      "thumbnailUrl": "https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg",
      "thumbnailWidth": 1868,
      "title": "Flat - The online collaborative music notation software",
      "type": "video",
      "url": "https://www.youtube.com/watch?v=SNbRUiBZ4Uw"
    }
  ],
  "canvas": {
    "alternateLink": "https://canvas.instructure.com/courses/00000/assignments/12345",
    "id": "12345"
  },
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2017-06-12T13:56:19.613000Z",
  "creator": "5832bf149995c4024bd6de7d",
  "description": "Get started with Flat",
  "dueDate": "2017-07-12T13:56:19.613000Z",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/detail",
    "id": "1235665432"
  },
  "lti": {
    "id": "12345"
  },
  "maxPoints": 100,
  "scheduledDate": "2017-06-18T13:56:19.613000Z",
  "state": "active",
  "submissions": [
    {
      "assignment": "58c49068524c03ec576ca43c",
      "attachments": [
        {
          "score": "58c4955a226ffff257211a8d",
          "title": "Hello - Student",
          "type": "flat"
        }
      ],
      "classroom": "58c4725345cd836264f0b29e",
      "creationDate": "2017-03-12T00:25:00.748000Z",
      "creator": "559eb5c7f0d4d5e46d03781d",
      "googleClassroom": {
        "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
        "id": "CgsI-00000000000",
        "state": "turned_in"
      },
      "id": "58c4955c226ffff257211a90",
      "submissionDate": "2017-03-12T00:25:22.748000Z"
    }
  ],
  "title": "My first assignment"
}
```

Assignment details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[MediaAttachment](#schemamediaattachment)]|false|none|none|
|canvas|object|false|none|A Canvas LMS assignment|
|classroom|string|false|none|The unique identifier of the class where this assignment was posted|
|cover|string|false|none|The URL of the cover to display|
|coverFile|string|false|none|The id of the cover to display|
|creationDate|string(date-time)|false|none|The creation date of this assignment|
|creator|string|false|none|The User unique identifier of the creator of this assignment<br>|
|description|string|false|none|Description and content of the assignment|
|dueDate|string(date-time)|false|none|The due date of this assignment, late submissions will be marked as<br>paste due.<br>|
|googleClassroom|[GoogleClassroomCoursework](#schemagoogleclassroomcoursework)|false|none|A coursework on Google Classroom|
|lti|object|false|none|An LTI assignment|
|maxPoints|number|false|none|If set, the grading will be enabled for the assignement<br>|
|mfc|object|false|none|A MusicFirst Classroom assignment|
|microsoftGraph|[MicrosoftGraphAssignment](#schemamicrosoftgraphassignment)|false|none|A Microsoft Teams asignment|
|scheduledDate|string(date-time)|false|none|The publication (scheduled) date of the assignment.<br>If this one is specified, the assignment will only be listed to the teachers of the class.<br>|
|state|string|false|none|State of the assignment|
|submissions|[[AssignmentSubmission](#schemaassignmentsubmission)]|false|none|none|
|title|string|false|none|Title of the assignment|
|type|[AssignmentType](#schemaassignmenttype)|false|none|Type of the assignment|

#### Enumerated Values

|Property|Value|
|---|---|
|state|draft|
|state|active|
|state|archived|
|type|none|
|type|newScore|
|type|scoreTemplate|
|type|sharedWriting|
|type|worksheet|
|type|performance|

<h2 id="tocS_AssignmentCopy">AssignmentCopy</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentcopy"></a>
<a id="schema_AssignmentCopy"></a>
<a id="tocSassignmentcopy"></a>
<a id="tocsassignmentcopy"></a>

```json
{
  "classroom": "0000000000000000"
}
```

Assignment copy operation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignment|string|false|none|An optional destination assignment where the original assignement will be copied. Must be a draft.|
|classroom|string|false|none|The destination classroom where the assignment will be copied|
|scheduledDate|string(date-time)|false|none|The publication (scheduled) date of the assignment.<br>If this one is specified, the assignment will only be listed to the teachers of the class.<br>Alternatively the existing `scheduledDate` from the copied assignment will be used.<br>|

<h2 id="tocS_AssignmentCreation">AssignmentCreation</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentcreation"></a>
<a id="schema_AssignmentCreation"></a>
<a id="tocSassignmentcreation"></a>
<a id="tocsassignmentcreation"></a>

```json
{
  "attachments": [
    {
      "score": "0000000000000000",
      "type": "flat"
    },
    {
      "type": "link",
      "url": "https://flat.io/developers"
    }
  ],
  "description": "Get started with Flat",
  "dueDate": "2017-07-12T13:56:19.613000Z",
  "maxPoints": 100,
  "scheduledDate": "2017-06-20T13:56:19.613000Z",
  "title": "First assignment"
}
```

Assignment creation details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignedStudents|[string]|false|none|Identifiers for the students that have access to the assignment|
|assigneeMode|string|false|none|Possible modes of assigning assignments|
|attachments|[[ClassAttachmentCreation](#schemaclassattachmentcreation)]|false|none|none|
|cover|string \| null|false|none|The URL of the cover to display|
|coverFile|string \| null|false|none|The id of the cover to display|
|description|string|false|none|Description and content of the assignment|
|dueDate|string(date-time) \| null|false|none|The due date of this assignment, late submissions will be marked as paste due. If not set, the assignment won't have a due date.<br>|
|googleClassroom|object|false|none|Google Classroom options for this assignment|
|maxPoints|number \| null|false|none|If set, the grading will be enabled for the assignement with this value as the maximum of points<br>|
|microsoftGraph|object|false|none|Microsoft Graph options for this assignment|
|nbPlaybackAuthorized|number \| null|false|none|The number of playback authorized on the scores of the assignment.|
|scheduledDate|string(date-time) \| null|false|none|The publication (scheduled) date of the assignment.<br>If this one is specified, the assignment will only be listed to the teachers of the class.<br>|
|state|string|false|none|State of the assignment|
|title|string|false|none|Title of the assignment|
|toolset|string \| null|false|none|The id of the associated toolset|
|type|[AssignmentType](#schemaassignmenttype)|false|none|Type of the assignment|

#### Enumerated Values

|Property|Value|
|---|---|
|assigneeMode|everyone|
|assigneeMode|selected|
|state|draft|
|state|active|
|type|none|
|type|newScore|
|type|scoreTemplate|
|type|sharedWriting|
|type|worksheet|
|type|performance|

<h2 id="tocS_AssignmentSubmission">AssignmentSubmission</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentsubmission"></a>
<a id="schema_AssignmentSubmission"></a>
<a id="tocSassignmentsubmission"></a>
<a id="tocsassignmentsubmission"></a>

```json
{
  "assignment": "58c49068524c03ec576ca43c",
  "attachments": [
    {
      "score": "58c4955a226ffff257211a8d",
      "title": "Hello - Student",
      "type": "flat"
    }
  ],
  "classroom": "58c4725345cd836264f0b29e",
  "creationDate": "2020-08-12T00:25:00.748000Z",
  "creator": "559eb5c7f0d4d5e46d03781d",
  "draftGrade": 82,
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
    "id": "CgsI-00000000000",
    "state": "turned_in"
  },
  "grade": 80,
  "id": "58c4955c226ffff257211a90",
  "returnCreator": "559eb5c7f0d4d5e46d000000",
  "returnDate": "2020-08-15T00:25:00.748000Z",
  "submissionDate": "2020-08-12T00:45:22.748000Z"
}
```

Assignment Submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignment|string|false|none|Unique identifier of the assignment|
|attachments|[[MediaAttachment](#schemamediaattachment)]|false|none|none|
|classroom|string|false|none|Unique identifier of the classroom where the assignment was posted<br>|
|creationDate|string|false|none|The date when the submission was created|
|creator|string|false|none|The User identifier of the student who created the submission|
|draftGrade|number \| null|false|none|Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission|
|googleClassroom|[GoogleClassroomSubmission](#schemagoogleclassroomsubmission)|false|none|A coursework submission on Google Classroom|
|grade|number \| null|false|none|Optional grade. If unset, no grade was set.|
|id|string|false|none|Unique identifier of the submission|
|maxPoints|number|false|none|Optional max points for the grade. If set, a corresponding `draftGrade` or `grade` will be set.|
|microsoftGraph|[MicrosoftGraphSubmission](#schemamicrosoftgraphsubmission)|false|none|A Microsoft Teams submission|
|returnCreator|string|false|none|The User unique identifier of the teacher who returned the submission<br>|
|returnDate|string|false|none|The date when the teacher returned the work|
|state|[AssignmentSubmissionState](#schemaassignmentsubmissionstate)|false|none|State of the submission|
|submissionDate|string|false|none|The date when the student submitted his work|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|turnedIn|
|state|returned|

<h2 id="tocS_AssignmentSubmissionComment">AssignmentSubmissionComment</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentsubmissioncomment"></a>
<a id="schema_AssignmentSubmissionComment"></a>
<a id="tocSassignmentsubmissioncomment"></a>
<a id="tocsassignmentsubmissioncomment"></a>

```json
{
  "comment": "string",
  "date": "1970-01-01T00:00:00Z",
  "id": "string",
  "modificationDate": "1970-01-01T00:00:00Z",
  "submission": "string",
  "unread": true,
  "user": "string"
}
```

Feedback comment added to an assignment submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|The comment text|
|date|string(date-time)|false|none|The date when the comment was posted|
|id|string|false|none|The comment unique identifier|
|modificationDate|string(date-time)|false|none|The date of the last comment modification|
|submission|string|false|none|The submission unique identifier|
|unread|boolean|false|none|True if the comment is unread by the current user|
|user|string|false|none|The author unique identifier|

<h2 id="tocS_AssignmentSubmissionCommentCreation">AssignmentSubmissionCommentCreation</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentsubmissioncommentcreation"></a>
<a id="schema_AssignmentSubmissionCommentCreation"></a>
<a id="tocSassignmentsubmissioncommentcreation"></a>
<a id="tocsassignmentsubmissioncommentcreation"></a>

```json
{
  "comment": "string"
}
```

Creation of a assignment submission comment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|The comment text|

<h2 id="tocS_AssignmentSubmissionHistory">AssignmentSubmissionHistory</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentsubmissionhistory"></a>
<a id="schema_AssignmentSubmissionHistory"></a>
<a id="tocSassignmentsubmissionhistory"></a>
<a id="tocsassignmentsubmissionhistory"></a>

```json
{
  "attachment": {
    "revision": "string",
    "score": "string"
  },
  "date": "1970-01-01T00:00:00Z",
  "draftGrade": 0,
  "grade": 0,
  "maxPoints": 0,
  "state": "created",
  "users": [
    "string"
  ]
}
```

History item of the submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachment|object|false|none|none|
|date|string(date-time)|false|none|The date when the submission was changed|
|draftGrade|number|false|none|The numerator of the grade at this time in the submission grade history|
|grade|number|false|none|The numerator of the grade at this time in the submission grade history|
|maxPoints|number|false|none|The denominator of the grade at this time in the submission grade history|
|state|[AssignmentSubmissionState](#schemaassignmentsubmissionstate)|false|none|State of the submission|
|users|[string]|false|none|The user(s) unique identifier(s) who made the change|

#### Enumerated Values

|Property|Value|
|---|---|
|state|created|
|state|turnedIn|
|state|returned|

<h2 id="tocS_AssignmentSubmissionState">AssignmentSubmissionState</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentsubmissionstate"></a>
<a id="schema_AssignmentSubmissionState"></a>
<a id="tocSassignmentsubmissionstate"></a>
<a id="tocsassignmentsubmissionstate"></a>

```json
"created"
```

State of the submission

<h2 id="tocS_AssignmentSubmissionUpdate">AssignmentSubmissionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaassignmentsubmissionupdate"></a>
<a id="schema_AssignmentSubmissionUpdate"></a>
<a id="tocSassignmentsubmissionupdate"></a>
<a id="tocsassignmentsubmissionupdate"></a>

```json
{
  "attachments": [
    {
      "score": "58c4955a226ffff257211a8d",
      "title": "Hello - Student",
      "type": "flat"
    }
  ],
  "submit": true
}
```

Assignment Submission creation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[[ClassAttachmentCreation](#schemaclassattachmentcreation)]|false|none|none|
|comments|object|false|none|none|
|draftGrade|number \| null|false|none|Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission|
|grade|number \| null|false|none|Optional grade. If unset, no grade was set.|
|return|boolean|false|none|If `true`, the submission will be marked as done|
|submit|boolean|false|none|If `true`, the submission will be marked as done|

<h2 id="tocS_AssignmentType">AssignmentType</h2>
<!-- backwards compatibility -->
<a id="schemaassignmenttype"></a>
<a id="schema_AssignmentType"></a>
<a id="tocSassignmenttype"></a>
<a id="tocsassignmenttype"></a>

```json
"none"
```

Type of the assignment

<h2 id="tocS_ClassAttachmentCreation">ClassAttachmentCreation</h2>
<!-- backwards compatibility -->
<a id="schemaclassattachmentcreation"></a>
<a id="schema_ClassAttachmentCreation"></a>
<a id="tocSclassattachmentcreation"></a>
<a id="tocsclassattachmentcreation"></a>

```json
{
  "score": "000000000000000001",
  "sharingMode": "copy",
  "type": "flat"
}
```

Attachment creation for an assignment or stream post.
This attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleDriveFileId|string|false|none|The ID of the Google Drive File|
|lockScoreTemplate|boolean|false|none|To be used with a score attached in `sharingMode` `copy` (score used as template). If true, students won't be able to change the original notes of the template.|
|score|string|false|none|A unique Flat score identifier. The user creating the assignment must at least have read access to the document. If the user has admin rights, new group permissions will be automatically added for the<br>teachers and students of the class.<br>|
|sharingMode|[MediaScoreSharingMode](#schemamediascoresharingmode)|false|none|The sharing mode of the score for classes post and assignments|
|type|string|false|none|The type of the attachment posted|
|url|string|false|none|The URL of the attachment.|
|worksheet|string|false|none|An unique worksheet identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|sharingMode|read|
|sharingMode|write|
|sharingMode|copy|
|sharingMode|performance|
|type|flat|
|type|link|
|type|googleDrive|
|type|worksheet|

<h2 id="tocS_ClassCreation">ClassCreation</h2>
<!-- backwards compatibility -->
<a id="schemaclasscreation"></a>
<a id="schema_ClassCreation"></a>
<a id="tocSclasscreation"></a>
<a id="tocsclasscreation"></a>

```json
{
  "name": "Music Theory Course",
  "section": "Music Theory 101"
}
```

Creation of a classroom

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|The name of the new class|
|section|string|false|none|The section of the new class|

<h2 id="tocS_ClassDetails">ClassDetails</h2>
<!-- backwards compatibility -->
<a id="schemaclassdetails"></a>
<a id="schema_ClassDetails"></a>
<a id="tocSclassdetails"></a>
<a id="tocsclassdetails"></a>

```json
{
  "assignmentsCount": 10,
  "canvas": {
    "id": "000000000"
  },
  "creationTime": "2017-01-25T09:47:34.544000Z",
  "enrollmentCode": "jm447ear",
  "googleClassroom": {
    "alternateLink": "http://classroom.google.com/c/music-theory",
    "id": "00000000"
  },
  "googleDrive": {
    "teacherFolderAlternateLink": "https://drive.google.com/drive/folders/0B-0000000000000000",
    "teacherFolderId": "0B-0000000000000000"
  },
  "id": "100000000000000000000001",
  "lti": {
    "contextId": "042",
    "contextLabel": "MUSIC",
    "contextTitle": "Music Theory 101"
  },
  "microsoftGraph": {
    "id": "00000000-0000-0000-0000-000000000000"
  },
  "name": "Music Theory 101",
  "organization": "100000000000000000000002",
  "owner": "100000000000000000000003",
  "section": "Music Theory 101",
  "state": "active",
  "theme": "blue-8"
}
```

A classroom

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assignmentsCount|number|false|none|The number of assignments created in the class|
|canvas|object|false|none|Meta information provided by Canvs LMS|
|clever|object|false|none|Clever.com section-related information|
|creationDate|string(date-time)|false|none|The date when the class was create|
|description|string|false|none|An optionnal description for this class|
|enrollmentCode|string|false|none|[Teachers only] The enrollment code that can be used by the students to join the class<br>|
|googleClassroom|object|false|none|Google Classroom course-related information|
|googleDrive|object|false|none|Google Drive course-related information provided by Google Classroom|
|id|string|false|none|The unique identifier of the class|
|issues|object|false|none|Detected issues for this class|
|lti|object|false|none|Meta information provided by the LTI consumer|
|mfc|object|false|none|Meta information provided by Canvs LMS|
|microsoftGraph|object|false|none|none|
|name|string|false|none|The name of the class|
|organization|string|false|none|The unique identifier of the Organization owning this class|
|owner|string|false|none|The unique identifier of the User owning this class|
|section|string|false|none|The section of the class|
|state|[ClassState](#schemaclassstate)|false|none|The state of a classroom|
|studentsGroup|[GroupDetails](#schemagroupdetails)|false|none|The details of a group|
|teachersGroup|[GroupDetails](#schemagroupdetails)|false|none|The details of a group|
|theme|string|false|none|The theme identifier using in Flat User Interface|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|inactive|
|state|archived|

<h2 id="tocS_ClassRoles">ClassRoles</h2>
<!-- backwards compatibility -->
<a id="schemaclassroles"></a>
<a id="schema_ClassRoles"></a>
<a id="tocSclassroles"></a>
<a id="tocsclassroles"></a>

```json
"teacher"
```

User's Class Role (for Edu users only)

<h2 id="tocS_ClassState">ClassState</h2>
<!-- backwards compatibility -->
<a id="schemaclassstate"></a>
<a id="schema_ClassState"></a>
<a id="tocSclassstate"></a>
<a id="tocsclassstate"></a>

```json
"active"
```

The state of a classroom

<h2 id="tocS_ClassUpdate">ClassUpdate</h2>
<!-- backwards compatibility -->
<a id="schemaclassupdate"></a>
<a id="schema_ClassUpdate"></a>
<a id="tocSclassupdate"></a>
<a id="tocsclassupdate"></a>

```json
{
  "name": "Music Theory Course",
  "section": "Music Theory 101"
}
```

Update of a classroom

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|The name of the class|
|section|string|false|none|The section of the class|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "app": "string",
  "capabilities": {
    "canAddScores": true,
    "canDelete": true,
    "canDeleteScores": true,
    "canEdit": true,
    "canShare": true
  },
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "creationDate": "1970-01-01T00:00:00Z",
  "htmlUrl": "http://example.com",
  "id": "string",
  "privacy": "private",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "sharingKey": "string",
  "title": "string",
  "type": "root",
  "user": {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin"
  }
}
```

Collection of scores

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|app|string|false|none|If this directory is dedicated to an app, the unique idenfier of this app|
|capabilities|object|false|none|Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.|
|collaborators|[[ResourceCollaborator](#schemaresourcecollaborator)]|false|none|The list of the collaborators of the collection|
|collections|[string]|false|none|The List of parent collections, which includes all the collections this score is included. Please note that you might not have access to all of them.|
|creationDate|string(date-time)|false|none|The date when the collection was created|
|htmlUrl|string(url)|false|none|The url where the collection can be viewed in a web browser|
|id|string|false|none|Unique identifier of the collection|
|privacy|[CollectionPrivacy](#schemacollectionprivacy)|false|none|The collection main privacy mode.<br>- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.<br>|
|rights|[ResourceRights](#schemaresourcerights)|false|none|The rights of the current user on a score or collection|
|sharingKey|string|false|none|The private sharing key of the collection (available when the `privacy` mode is set to `privateLink`)|
|title|string|false|none|The title of the collection|
|type|[CollectionType](#schemacollectiontype)|false|none|Type of the collection.<br>The type will influence the capabilitied available on the collections and how this collection is/can be populated.<br>|
|user|[UserPublicSummary](#schemauserpublicsummary)|false|none|Public User details summary|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|private|
|type|root|
|type|regular|
|type|sharedWithMe|
|type|sharedWithGroup|
|type|trash|

<h2 id="tocS_CollectionCreation">CollectionCreation</h2>
<!-- backwards compatibility -->
<a id="schemacollectioncreation"></a>
<a id="schema_CollectionCreation"></a>
<a id="tocScollectioncreation"></a>
<a id="tocscollectioncreation"></a>

```json
{
  "privacy": "private",
  "title": "Jazz scores"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privacy|[CollectionPrivacy](#schemacollectionprivacy)|true|none|The collection main privacy mode.<br>- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.<br>|
|title|string|true|none|The title of the collection|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|private|

<h2 id="tocS_CollectionModification">CollectionModification</h2>
<!-- backwards compatibility -->
<a id="schemacollectionmodification"></a>
<a id="schema_CollectionModification"></a>
<a id="tocScollectionmodification"></a>
<a id="tocscollectionmodification"></a>

```json
{
  "privacy": "private",
  "title": "string"
}
```

Edit the collection metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|privacy|[CollectionPrivacy](#schemacollectionprivacy)|false|none|The collection main privacy mode.<br>- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.<br>|
|title|string|false|none|The title of the collection|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|private|

<h2 id="tocS_CollectionPrivacy">CollectionPrivacy</h2>
<!-- backwards compatibility -->
<a id="schemacollectionprivacy"></a>
<a id="schema_CollectionPrivacy"></a>
<a id="tocScollectionprivacy"></a>
<a id="tocscollectionprivacy"></a>

```json
"private"
```

The collection main privacy mode.
- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.

<h2 id="tocS_CollectionType">CollectionType</h2>
<!-- backwards compatibility -->
<a id="schemacollectiontype"></a>
<a id="schema_CollectionType"></a>
<a id="tocScollectiontype"></a>
<a id="tocscollectiontype"></a>

```json
"root"
```

Type of the collection.
The type will influence the capabilitied available on the collections and how this collection is/can be populated.

<h2 id="tocS_FlatErrorResponse">FlatErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaflaterrorresponse"></a>
<a id="schema_FlatErrorResponse"></a>
<a id="tocSflaterrorresponse"></a>
<a id="tocsflaterrorresponse"></a>

```json
{
  "code": "CLIENT_ERROR",
  "id": "123456789",
  "message": "Invalid request"
}
```

An API Error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|A corresponding code for this error|
|id|string|false|none|An unique error identifier generated for the request|
|message|string|false|none|A printable message for this message|
|param|string|false|none|The related parameter that caused the error|

<h2 id="tocS_FlatLocales">FlatLocales</h2>
<!-- backwards compatibility -->
<a id="schemaflatlocales"></a>
<a id="schema_FlatLocales"></a>
<a id="tocSflatlocales"></a>
<a id="tocsflatlocales"></a>

```json
"en"
```

The user language

<h2 id="tocS_GoogleClassroomCoursework">GoogleClassroomCoursework</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclassroomcoursework"></a>
<a id="schema_GoogleClassroomCoursework"></a>
<a id="tocSgoogleclassroomcoursework"></a>
<a id="tocsgoogleclassroomcoursework"></a>

```json
{
  "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/detail",
  "id": "1235665432",
  "state": "draft"
}
```

A coursework on Google Classroom

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to this coursework in the Classroom web UI|
|id|string|false|none|Identifier of the coursework assigned by Classroom|
|state|string|false|none|State of the coursework|
|topicId|string \| null|false|none|Identifier of the topic where the assignment is created|

<h2 id="tocS_GoogleClassroomSubmission">GoogleClassroomSubmission</h2>
<!-- backwards compatibility -->
<a id="schemagoogleclassroomsubmission"></a>
<a id="schema_GoogleClassroomSubmission"></a>
<a id="tocSgoogleclassroomsubmission"></a>
<a id="tocsgoogleclassroomsubmission"></a>

```json
{
  "alternateLink": "http://classroom.google.com/c/music-theory/a/first-assignment/submissions/student/my-submission",
  "id": "CgsI-00000000000",
  "state": "turned_in"
}
```

A coursework submission on Google Classroom

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to this coursework in the Classroom web UI|
|id|string|false|none|Identifier of the coursework submission assigned by Classroom|
|state|string|false|none|State of the submission on Google Classroom|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "creationDate": "2015-01-19T00:22:02.387000Z",
  "id": "0000000000000000000000043",
  "name": "5th grade",
  "organization": "0000000000000000000000042",
  "readOnly": true,
  "type": "classTeachers",
  "userCount": 24
}
```

A group of users

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|false|none|The creation date of the group|
|id|string|false|none|The unique identifier of the group|
|name|string|false|none|The display name of the group|
|organization|string|false|none|If the group is related to an organization, this field will contain<br>the unique identifier of the organization<br>|
|readOnly|boolean|false|none|`True` if the group is set in read-only<br>|
|type|string|false|none|The type of the group:<br>* `generic`: A group created by a Flat user<br>* `classTeachers`: A group created automaticaly by Flat that contains<br>  the teachers of a class<br>* `classStudents`: A group created automaticaly by Flat that contains<br>  the studnets of a class<br>|
|usersCount|number|false|none|The number of users in this group|

#### Enumerated Values

|Property|Value|
|---|---|
|type|generic|
|type|classTeachers|
|type|classStudents|

<h2 id="tocS_GroupDetails">GroupDetails</h2>
<!-- backwards compatibility -->
<a id="schemagroupdetails"></a>
<a id="schema_GroupDetails"></a>
<a id="tocSgroupdetails"></a>
<a id="tocsgroupdetails"></a>

```json
{
  "creationDate": "2017-07-02T15:02:40.207000Z",
  "id": "58c4955c226ffff257211a00",
  "name": "5th Grade - Teachers",
  "organization": "0000000000000000000000042",
  "readOnly": false,
  "type": "classTeachers",
  "usersCount": 2
}
```

The details of a group

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|false|none|The date when the group was create|
|id|string|false|none|The unique identifier of the group|
|name|string|false|none|The displayable name of the group|
|organization|string|false|none|The unique identifier of the Organization owning the group|
|readOnly|boolean|false|none|`true` if the properties and members of this group are in in read-only<br>|
|type|[GroupType](#schemagrouptype)|false|none|The type of the group|
|usersCount|number|false|none|The number of students in this group|

#### Enumerated Values

|Property|Value|
|---|---|
|type|generic|
|type|classTeachers|
|type|classStudents|

<h2 id="tocS_GroupType">GroupType</h2>
<!-- backwards compatibility -->
<a id="schemagrouptype"></a>
<a id="schema_GroupType"></a>
<a id="tocSgrouptype"></a>
<a id="tocsgrouptype"></a>

```json
"generic"
```

The type of the group

<h2 id="tocS_LicenseMode">LicenseMode</h2>
<!-- backwards compatibility -->
<a id="schemalicensemode"></a>
<a id="schema_LicenseMode"></a>
<a id="tocSlicensemode"></a>
<a id="tocslicensemode"></a>

```json
"credit"
```

Mode of the license

<h2 id="tocS_LicenseSources">LicenseSources</h2>
<!-- backwards compatibility -->
<a id="schemalicensesources"></a>
<a id="schema_LicenseSources"></a>
<a id="tocSlicensesources"></a>
<a id="tocslicensesources"></a>

```json
"order"
```

Source of the license

<h2 id="tocS_LmsName">LmsName</h2>
<!-- backwards compatibility -->
<a id="schemalmsname"></a>
<a id="schema_LmsName"></a>
<a id="tocSlmsname"></a>
<a id="tocslmsname"></a>

```json
"canvas"
```

LMS name

<h2 id="tocS_LtiCredentials">LtiCredentials</h2>
<!-- backwards compatibility -->
<a id="schemalticredentials"></a>
<a id="schema_LtiCredentials"></a>
<a id="tocSlticredentials"></a>
<a id="tocslticredentials"></a>

```json
{
  "consumerKey": "200082F5-FAFD-4C6E-BB19-7DAB5D6264D4",
  "consumerSecret": "168b6181c05eae14298176a274273e4ebef0d15555fe3e80c6a98ccd57d0c3b6",
  "creationDate": "2017-06-06T11:03:01.955000Z",
  "creator": "5832bf149995c4024bd6de7d",
  "id": "59368be5c66caf895ee02387",
  "lastUsage": "2017-06-13T16:02:34.324000Z",
  "lms": "canvas",
  "name": "My couple of credentials for Canvas",
  "organization": "5832c801a4bedc05f4fb4993"
}
```

A couple of LTI 1.x OAuth credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|consumerKey|string|false|none|OAuth 1 Consumer Key|
|consumerSecret|string|false|none|OAuth 1 Consumer Secret|
|creationDate|string(date-time)|false|none|The creation date of thse credentials|
|creator|string|false|none|Unique identifier of the user who created these credentials|
|id|string|false|none|The unique identifier of this couple of credentials|
|lastUsage|string(date-time)|false|none|The last time these credentials were used|
|lms|[LmsName](#schemalmsname)|false|none|LMS name|
|name|string|false|none|Name of the couple of credentials|
|organization|string|false|none|The unique identifier of the Organization associated to these credentials|

#### Enumerated Values

|Property|Value|
|---|---|
|lms|canvas|
|lms|moodle|
|lms|schoology|
|lms|blackboard|
|lms|desire2learn|
|lms|sakai|
|lms|schoolbox|
|lms|other|

<h2 id="tocS_LtiCredentialsCreation">LtiCredentialsCreation</h2>
<!-- backwards compatibility -->
<a id="schemalticredentialscreation"></a>
<a id="schema_LtiCredentialsCreation"></a>
<a id="tocSlticredentialscreation"></a>
<a id="tocslticredentialscreation"></a>

```json
{
  "lms": "canvas",
  "name": "My couple of credentials for Canvas"
}
```

Creation of a couple of LTI 1.x OAuth credentials

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lms|[LmsName](#schemalmsname)|true|none|LMS name|
|name|string|true|none|Name of the couple of credentials|

#### Enumerated Values

|Property|Value|
|---|---|
|lms|canvas|
|lms|moodle|
|lms|schoology|
|lms|blackboard|
|lms|desire2learn|
|lms|sakai|
|lms|schoolbox|
|lms|other|

<h2 id="tocS_MediaAttachment">MediaAttachment</h2>
<!-- backwards compatibility -->
<a id="schemamediaattachment"></a>
<a id="schema_MediaAttachment"></a>
<a id="tocSmediaattachment"></a>
<a id="tocsmediaattachment"></a>

```json
{
  "authorName": "Flat",
  "authorUrl": "https://www.youtube.com/channel/UCEUIbEP9Rba_g0r4eeGhmXw",
  "description": "Discover Flat on https://flat.io",
  "html": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/SNbRUiBZ4Uw\" frameborder=\"0\" allowfullscreen></iframe>",
  "thumbnailHeight": 1052,
  "thumbnailUrl": "https://i.ytimg.com/vi/SNbRUiBZ4Uw/maxresdefault.jpg",
  "thumbnailWidth": 1868,
  "title": "Flat - The online collaborative music notation software",
  "type": "video",
  "url": "https://www.youtube.com/watch?v=SNbRUiBZ4Uw"
}
```

Media attachment. The API will automatically resolve the details, oEmbed,
and media available if possible and return them in this object

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authorName|string|false|none|The resolved author name of the attachment|
|authorUrl|string|false|none|The resolved author url of the attachment|
|description|string|false|none|The resolved description of the attachment|
|googleDriveFileId|string|false|none|The ID of the Google Drive File|
|html|string|false|none|If the attachment type is `rich` or `video`, the HTML code of the<br>media to display<br>|
|htmlHeight|string|false|none|If the `html` is available, the height of the widget|
|htmlWidth|string|false|none|If the `html` is available, the width of the widget|
|iconUrl|string|false|none|The URL of the icon|
|lockScoreTemplate|boolean|false|none|To be used with a score attached in `sharingMode` `copy` (score used as template). If true, students won't be able to change the original notes of the template.|
|mimeType|string|false|none|The mine type of the file|
|revision|string|false|none|An unique revision identifier of a score|
|score|string|false|none|An unique Flat score identifier|
|sharingMode|[MediaScoreSharingMode](#schemamediascoresharingmode)|false|none|The sharing mode of the score for classes post and assignments|
|thumbnailHeight|integer|false|none|If the `thumbnailUrl` is available, the width of the thumbnail<br>|
|thumbnailUrl|string|false|none|If the attachment type is `rich`, `video`, `photo` or `link`, a<br>displayable thumbnail for this attachment<br>|
|thumbnailWidth|integer|false|none|If the `thumbnailUrl` is available, the width of the thumbnail<br>|
|title|string|false|none|The resolved title of the attachment|
|track|string|false|none|A unique track identifier|
|type|string|false|none|The type of the assignment resolved:<br>* `rich`, `photo`, `video` are attachment types that are automatically resolved from a `link` attachment.<br>* A `flat` attachment is a score document where the unique identifier will be specified in the `score` property. Its sharing mode will be provided in the `sharingMode` property.<br>|
|url|string|false|none|The url of the attachment|
|worksheet|string|false|none|An unique worksheet identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|sharingMode|read|
|sharingMode|write|
|sharingMode|copy|
|sharingMode|performance|
|type|rich|
|type|photo|
|type|video|
|type|link|
|type|flat|
|type|googleDrive|
|type|worksheet|
|type|performance|

<h2 id="tocS_MediaScoreSharingMode">MediaScoreSharingMode</h2>
<!-- backwards compatibility -->
<a id="schemamediascoresharingmode"></a>
<a id="schema_MediaScoreSharingMode"></a>
<a id="tocSmediascoresharingmode"></a>
<a id="tocsmediascoresharingmode"></a>

```json
"read"
```

The sharing mode of the score for classes post and assignments

<h2 id="tocS_MicrosoftGraphAssignment">MicrosoftGraphAssignment</h2>
<!-- backwards compatibility -->
<a id="schemamicrosoftgraphassignment"></a>
<a id="schema_MicrosoftGraphAssignment"></a>
<a id="tocSmicrosoftgraphassignment"></a>
<a id="tocsmicrosoftgraphassignment"></a>

```json
{
  "alternateLink": "https://teams.microsoft.com/l/entity",
  "categories": [
    "0a012acd-6e78-4cd0-89a9-80d296e48f82"
  ],
  "id": "8e460d32-d2d4-46b3-8e1a-9b7677a48fda",
  "state": "draft"
}
```

A Microsoft Teams asignment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to this assignement in the Microsoft Teams web UI|
|categories|[string]|false|none|List of categories where this assignment is published under|
|id|string|false|none|Identifier of the assignement assigned by Microsoft Teams|
|state|string|false|none|State of the assignment|

<h2 id="tocS_MicrosoftGraphSubmission">MicrosoftGraphSubmission</h2>
<!-- backwards compatibility -->
<a id="schemamicrosoftgraphsubmission"></a>
<a id="schema_MicrosoftGraphSubmission"></a>
<a id="tocSmicrosoftgraphsubmission"></a>
<a id="tocsmicrosoftgraphsubmission"></a>

```json
{
  "alternateLink": "https://teams.microsoft.com/l/entity",
  "id": "8e460d32-d2d4-46b3-8e1a-9b7677a48fda",
  "state": "returned"
}
```

A Microsoft Teams submission

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alternateLink|string|false|none|Absolute link to this submission in the Microsoft Teams web UI|
|id|string|false|none|Identifier of the submission assigned by Microsoft Teams|
|state|string|false|none|State of the submission|

<h2 id="tocS_OrganizationInvitation">OrganizationInvitation</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinvitation"></a>
<a id="schema_OrganizationInvitation"></a>
<a id="tocSorganizationinvitation"></a>
<a id="tocsorganizationinvitation"></a>

```json
{
  "creationDate": "2017-07-02T15:05:15.576000Z",
  "customCode": "u5raQ7pZ",
  "email": "edu@flat.io",
  "id": "59590bab53b1af260610000",
  "invitedBy": "55b8d8f395c8db031ed00000",
  "organization": "55df29a6694e4a3953100000",
  "organizationRole": "teacher"
}
```

Details of an invitation to join an organization

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|customCode|string|false|none|Enrollment code to use when joining this organization|
|email|string|false|none|The email address this invitation was sent to|
|id|string|false|none|The invitation unique identifier|
|invitedBy|string|false|none|The unique identifier of the User who created this invitation|
|organization|string|false|none|The unique identifier of the Organization owning this class|
|organizationRole|[OrganizationRoles](#schemaorganizationroles)|false|none|User's Organization Role (for Edu users only)|
|usedBy|string|false|none|The unique identifier of the User who used this invitation|

#### Enumerated Values

|Property|Value|
|---|---|
|organizationRole|admin|
|organizationRole|billing|
|organizationRole|teacher|
|organizationRole|user|

<h2 id="tocS_OrganizationInvitationCreation">OrganizationInvitationCreation</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationinvitationcreation"></a>
<a id="schema_OrganizationInvitationCreation"></a>
<a id="tocSorganizationinvitationcreation"></a>
<a id="tocsorganizationinvitationcreation"></a>

```json
{
  "email": "edu@flat.io",
  "organizationRole": "teacher"
}
```

The parameters to create an organization invitation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|The email address you want to send the invitation to|
|organizationRole|[OrganizationRoles](#schemaorganizationroles)|false|none|User's Organization Role (for Edu users only)|

#### Enumerated Values

|Property|Value|
|---|---|
|organizationRole|admin|
|organizationRole|billing|
|organizationRole|teacher|
|organizationRole|user|

<h2 id="tocS_OrganizationRoles">OrganizationRoles</h2>
<!-- backwards compatibility -->
<a id="schemaorganizationroles"></a>
<a id="schema_OrganizationRoles"></a>
<a id="tocSorganizationroles"></a>
<a id="tocsorganizationroles"></a>

```json
"admin"
```

User's Organization Role (for Edu users only)

<h2 id="tocS_ResourceCollaborator">ResourceCollaborator</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollaborator"></a>
<a id="schema_ResourceCollaborator"></a>
<a id="tocSresourcecollaborator"></a>
<a id="tocsresourcecollaborator"></a>

```json
{
  "aclAdmin": true,
  "aclRead": true,
  "aclWrite": true,
  "isCollaborator": true,
  "collection": "string",
  "group": {
    "creationDate": "2015-01-19T00:22:02.387000Z",
    "id": "0000000000000000000000043",
    "name": "5th grade",
    "organization": "0000000000000000000000042",
    "readOnly": true,
    "type": "classTeachers",
    "userCount": 24
  },
  "id": "string",
  "invited": true,
  "score": "string",
  "user": {
    "id": "000000000000000000000001",
    "isFlatTeam": true,
    "isPowerUser": true,
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat",
    "classRole": "teacher",
    "htmlUrl": "string",
    "organization": "string",
    "organizationRole": "admin",
    "bio": "string",
    "coverPicture": "string",
    "followersCount": 0,
    "followingCount": 0,
    "instruments": [
      "string"
    ],
    "likedScoresCount": 0,
    "ownedPublicScoresCount": 0,
    "profileTheme": "string",
    "registrationDate": "1970-01-01T00:00:00Z"
  },
  "userEmail": "string"
}
```

A collaborator of a score. The `userEmail` and `group` are only available if the requesting user is a collaborator of the related score (in this case these permissions will eventualy not be listed and exposed publicly).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aclAdmin|boolean|false|none|`True` if the current user can manage the current document (i.e. share, delete)<br><br>If this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the `capabilities` property as the end-user to have the complete possibilities with the collection.<br>|
|aclRead|boolean|false|none|`True` if the current user can read the current document<br>|
|aclWrite|boolean|false|none|`True` if the current user can modify the current document.<br><br>If this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the `capabilities` property as the end-user to have the complete possibilities with the collection.<br>|
|isCollaborator|boolean|false|none|`True` if the current user is a collaborator of the current document (direct or via group).<br>|
|collection|string|false|none|If this object is a permission of a collection, this property will contain the unique identifier of the collection|
|group|[Group](#schemagroup)|false|none|A group of users|
|id|string|false|none|The unique identifier of the permission|
|invited|boolean|false|none|If this property is `true`, this is still a pending invitation<br>|
|score|string|false|none|If this object is a permission of a score, this property will contain the unique identifier of the score|
|user|[UserPublic](#schemauserpublic)|false|none|Public User details|
|userEmail|string|false|none|If the collaborator is not a user of Flat yet, this field will contain his email.<br>|

<h2 id="tocS_ResourceCollaboratorCreation">ResourceCollaboratorCreation</h2>
<!-- backwards compatibility -->
<a id="schemaresourcecollaboratorcreation"></a>
<a id="schema_ResourceCollaboratorCreation"></a>
<a id="tocSresourcecollaboratorcreation"></a>
<a id="tocsresourcecollaboratorcreation"></a>

```json
{
  "aclAdmin": false,
  "aclRead": true,
  "aclWrite": true,
  "userEmail": "jdoe@flat.io"
}
```

Add a collaborator to a resource.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aclAdmin|boolean|false|none|`True` if the related user can can manage the current document, i.e. changing the document permissions and deleting the document<br>|
|aclRead|boolean|false|none|`True` if the related user can read the score. (probably true if the user has a permission on the document).<br>|
|aclWrite|boolean|false|none|`True` if the related user can modify the score.<br>|
|group|string|false|none|The unique identifier of a Flat group|
|user|string|false|none|The unique identifier of a Flat user|
|userEmail|string|false|none|Fill this field to invite an individual user by email.<br>|
|userToken|string|false|none|Token received in an invitation to join the score.<br>|

<h2 id="tocS_ResourceRights">ResourceRights</h2>
<!-- backwards compatibility -->
<a id="schemaresourcerights"></a>
<a id="schema_ResourceRights"></a>
<a id="tocSresourcerights"></a>
<a id="tocsresourcerights"></a>

```json
{
  "aclAdmin": true,
  "aclRead": true,
  "aclWrite": true,
  "isCollaborator": true
}
```

The rights of the current user on a score or collection

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|aclAdmin|boolean|false|none|`True` if the current user can manage the current document (i.e. share, delete)<br><br>If this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the `capabilities` property as the end-user to have the complete possibilities with the collection.<br>|
|aclRead|boolean|false|none|`True` if the current user can read the current document<br>|
|aclWrite|boolean|false|none|`True` if the current user can modify the current document.<br><br>If this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the `capabilities` property as the end-user to have the complete possibilities with the collection.<br>|
|isCollaborator|boolean|false|none|`True` if the current user is a collaborator of the current document (direct or via group).<br>|

<h2 id="tocS_ScoreComment">ScoreComment</h2>
<!-- backwards compatibility -->
<a id="schemascorecomment"></a>
<a id="schema_ScoreComment"></a>
<a id="tocSscorecomment"></a>
<a id="tocsscorecomment"></a>

```json
{
  "comment": "@[000000000000000000000000:flat] Great work!",
  "context": {
    "measureUuids": [
      "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
      "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
      "056ec5eb-9213-df56-6ae8-d9b99673dc48"
    ],
    "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
    "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
    "startDpq": 1,
    "startTimePos": 2,
    "stopDpq": 1,
    "stopTimePos": 3
  },
  "date": "2017-01-26T20:29:10.622000Z",
  "id": "000000000000000000000010",
  "mentions": [
    "000000000000000000000000"
  ],
  "modificationDate": "2017-01-26T21:29:10.622000Z",
  "rawComment": "@flat: Great work!",
  "replyTo": "000000000000000000000000",
  "resolved": true,
  "resolvedBy": "000000000000000000000000",
  "revision": "000000000000000000000011",
  "score": "000000000000000000000042",
  "spam": false,
  "type": "inline",
  "user": "000000000000000000000001"
}
```

Comment added on a sheet music

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|The comment text that can includes mentions using the following<br>format: `@[id:username]`.<br>|
|context|[ScoreCommentContext](#schemascorecommentcontext)|false|none|The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).<br>|
|date|string(date-time)|false|none|The date when the comment was posted|
|id|string|false|none|The comment unique identifier|
|mentions|[string]|false|none|The list of user identifier mentioned on the score|
|modificationDate|string(date-time)|false|none|The date of the last comment modification|
|rawComment|string|false|none|A raw version of the comment, that can be displayed without parsing<br>the mentions.<br>|
|replyTo|string|false|none|When the comment is a reply to another comment, the unique identifier of the parent comment<br>|
|resolved|boolean|false|none|For inline comments, the comment can be marked as resolved and will be hidden in the future responses<br>|
|resolvedBy|string|false|none|If the user is marked as resolved, this will contain the unique identifier of the User who marked this comment as resolved<br>|
|revision|string|false|none|The unique identifier of revision the comment was posted|
|score|string|false|none|The unique identifier of the score where the comment was posted|
|spam|boolean|false|none|`true  if the message has been detected as spam and hidden from other users<br>|
|type|string|false|none|The type of the comment|
|user|string|false|none|The author unique identifier|

#### Enumerated Values

|Property|Value|
|---|---|
|type|document|
|type|inline|

<h2 id="tocS_ScoreCommentContext">ScoreCommentContext</h2>
<!-- backwards compatibility -->
<a id="schemascorecommentcontext"></a>
<a id="schema_ScoreCommentContext"></a>
<a id="tocSscorecommentcontext"></a>
<a id="tocsscorecommentcontext"></a>

```json
{
  "measureUuids": [
    "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
    "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
    "056ec5eb-9213-df56-6ae8-d9b99673dc48"
  ],
  "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
  "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
  "startDpq": 1,
  "startTimePos": 2,
  "stopDpq": 1,
  "stopTimePos": 3
}
```

The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|measureUuids|[string]|true|none|The list of measure UUIds|
|partUuid|string|true|none|The unique identifier (UUID) of the score part|
|staffIdx|number|false|none|(Deprecated, use `staffUuid`) The identififer of the staff|
|staffUuid|string|false|none|The unique identififer (UUID) of the staff|
|startDpq|number|true|none|none|
|startTimePos|number|true|none|none|
|stopDpq|number|true|none|none|
|stopTimePos|number|true|none|none|

<h2 id="tocS_ScoreCommentCreation">ScoreCommentCreation</h2>
<!-- backwards compatibility -->
<a id="schemascorecommentcreation"></a>
<a id="schema_ScoreCommentCreation"></a>
<a id="tocSscorecommentcreation"></a>
<a id="tocsscorecommentcreation"></a>

```json
{
  "comment": "@[000000000000000000000000:flat] Great work!",
  "context": {
    "measureUuids": [
      "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
      "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
      "056ec5eb-9213-df56-6ae8-d9b99673dc48"
    ],
    "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
    "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
    "startDpq": 1,
    "startTimePos": 2,
    "stopDpq": 1,
    "stopTimePos": 3
  },
  "mentions": [
    "000000000000000000000000"
  ],
  "rawComment": "@flat: Great work!",
  "replyTo": "000000000000000000000000",
  "revision": "000000000000000000000010"
}
```

Creation of a comment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|true|none|The comment text that can includes mentions using the following format: `@[id:username]`.<br>|
|context|[ScoreCommentContext](#schemascorecommentcontext)|false|none|The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).<br>|
|mentions|[string]|false|none|The list of user identifiers mentioned in this comment|
|rawComment|string|false|none|A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.<br>|
|replyTo|string|false|none|When the comment is a reply to another comment, the unique identifier of the parent comment<br>|
|revision|string|false|none|The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.<br>|

<h2 id="tocS_ScoreCommentUpdate">ScoreCommentUpdate</h2>
<!-- backwards compatibility -->
<a id="schemascorecommentupdate"></a>
<a id="schema_ScoreCommentUpdate"></a>
<a id="tocSscorecommentupdate"></a>
<a id="tocsscorecommentupdate"></a>

```json
{
  "comment": "@[000000000000000000000000:flat] Great work!",
  "context": {
    "measureUuids": [
      "e6a6a60b-8710-f819-9a49-e907b19c6f1f",
      "da83d93c-e3a6-3c73-1bbe-15e5131d6437",
      "056ec5eb-9213-df56-6ae8-d9b99673dc48"
    ],
    "partUuid": "91982db7-2e6d-285e-7a19-76b4bd005b8b",
    "staffUuid": "9395d8f3-f42b-47b6-8c5d-6ba704961ec0",
    "startDpq": 1,
    "startTimePos": 2,
    "stopDpq": 1,
    "stopTimePos": 3
  },
  "mentions": [
    "000000000000000000000000"
  ],
  "rawComment": "@flat: Great work!",
  "replyTo": "000000000000000000000000",
  "revision": "000000000000000000000011"
}
```

Update of a comment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|The comment text that can includes mentions using the following format: `@[id:username]`.<br>|
|context|[ScoreCommentContext](#schemascorecommentcontext)|false|none|The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).<br>|
|rawComment|string|false|none|A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.<br>|
|revision|string|false|none|The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.<br>|

<h2 id="tocS_ScoreCommentsCounts">ScoreCommentsCounts</h2>
<!-- backwards compatibility -->
<a id="schemascorecommentscounts"></a>
<a id="schema_ScoreCommentsCounts"></a>
<a id="tocSscorecommentscounts"></a>
<a id="tocsscorecommentscounts"></a>

```json
{
  "monthly": 30,
  "total": 42,
  "unique": 35,
  "weekly": 10
}
```

A computed version of the total, unique, weekly and monthly number of
comments added on the documents (this doesn't include inline comments).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monthly|number|false|none|The monthly unique number of comments added to the score|
|total|number|false|none|The total number of comments added to the score|
|unique|number|false|none|The unique (1/user) number of comments added to the score|
|weekly|number|false|none|The weekly unique number of comments added to the score|

<h2 id="tocS_ScoreCreation">ScoreCreation</h2>
<!-- backwards compatibility -->
<a id="schemascorecreation"></a>
<a id="schema_ScoreCreation"></a>
<a id="tocSscorecreation"></a>
<a id="tocsscorecreation"></a>

```json
{
  "data": "<score-partwise version=\"3.0\"></score-partwise>",
  "googleDriveFolder": "0B-0000000000000000",
  "privacy": "private",
  "title": "My new score"
}
```

A new created score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|false|none|Unique identifier of a collection where the score will be created.<br>If no collection identifier is provided, the score will be stored in the `root` directory.<br>|
|data|string|false|none|The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.<br>Binary payloads (`vnd.recordare.musicxml` and `audio/midi`) can be encoded in Base64, in this case the `dataEncoding` property must match the encoding used for the API request.<br>|
|dataEncoding|string|false|none|The optional encoding of the score data. This property must match the encoding used for the `data` property.|
|filename|string|false|none|If this is an imported file, its filename|
|googleDriveFolder|string|false|none|If the user uses Google Drive and this properties is specified, the file will be created in this directory. The currently user creating the file must be granted to write in this directory.<br>|
|privacy|[ScorePrivacy](#schemascoreprivacy)|true|none|The score main privacy mode.<br><br>- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.<br>- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.<br>- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.<br>- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.<br><br>The score can also be individually shared to a set of users or groups using the different collaborators API methods.<br><br>When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.<br><br>When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).<br>|
|source|[ScoreSource](#schemascoresource)|false|none|none|
|title|string|false|none|The title of the new score. If the title is too long, the API may trim this one.<br><br>If this title is not specified, the API will try to (in this order):<br>  - Use the title contained in the file (e.g. [`movement-title`](https://usermanuals.musicxml.com/MusicXML/Content/EL-MusicXML-movement-title.htm) or [`credit-words`](https://usermanuals.musicxml.com/MusicXML/Content/EL-MusicXML-credit-words.htm) for [MusicXML](http://www.musicxml.com/) files).<br>  - Use the name of the file for files from a specified `source` (e.g. Google Drive) or the one in the `filename` property<br>  - Set a default title (e.g. "New Music Score")<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|dataEncoding|base64|
|privacy|public|
|privacy|private|
|privacy|organizationPublic|
|privacy|privateLink|

<h2 id="tocS_ScoreCreationType">ScoreCreationType</h2>
<!-- backwards compatibility -->
<a id="schemascorecreationtype"></a>
<a id="schema_ScoreCreationType"></a>
<a id="tocSscorecreationtype"></a>
<a id="tocsscorecreationtype"></a>

```json
"original"
```

The type of creation (an orginal, an arrangement)

<h2 id="tocS_ScoreDetails">ScoreDetails</h2>
<!-- backwards compatibility -->
<a id="schemascoredetails"></a>
<a id="schema_ScoreDetails"></a>
<a id="tocSscoredetails"></a>
<a id="tocsscoredetails"></a>

```json
{
  "htmlUrl": "https://flat.io/score/000000000000000000000000",
  "id": "000000000000000000000000",
  "privacy": "private",
  "title": "My score",
  "user": {
    "id": "000000000000000000000001",
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat"
  },
  "arranger": "string",
  "collaborators": [
    {
      "aclAdmin": true,
      "aclRead": true,
      "aclWrite": true,
      "isCollaborator": true,
      "collection": "string",
      "group": {
        "creationDate": "2015-01-19T00:22:02.387000Z",
        "id": "0000000000000000000000043",
        "name": "5th grade",
        "organization": "0000000000000000000000042",
        "readOnly": true,
        "type": "classTeachers",
        "userCount": 24
      },
      "id": "string",
      "invited": true,
      "score": "string",
      "user": {
        "id": "000000000000000000000001",
        "isFlatTeam": true,
        "isPowerUser": true,
        "name": "Flat Team",
        "picture": "https://flat.io/img/logo_flat.svg",
        "printableName": "Flat Team",
        "username": "flat",
        "classRole": "teacher",
        "htmlUrl": "string",
        "organization": "string",
        "organizationRole": "admin",
        "bio": "string",
        "coverPicture": "string",
        "followersCount": 0,
        "followingCount": 0,
        "instruments": [
          "string"
        ],
        "likedScoresCount": 0,
        "ownedPublicScoresCount": 0,
        "profileTheme": "string",
        "registrationDate": "1970-01-01T00:00:00Z"
      },
      "userEmail": "string"
    }
  ],
  "collections": [
    "string"
  ],
  "comments": {
    "monthly": 30,
    "total": 42,
    "unique": 35,
    "weekly": 10
  },
  "composer": "string",
  "creationDate": "1970-01-01T00:00:00Z",
  "creationType": "original",
  "description": "string",
  "durationTime": 0,
  "googleDriveFileId": "string",
  "instruments": [
    "string"
  ],
  "license": "copyright",
  "licenseText": "string",
  "likes": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "lyricist": "string",
  "mainTempoQpm": 0,
  "modificationDate": "1970-01-01T00:00:00Z",
  "numberMeasures": 0,
  "organization": "string",
  "parentScore": "string",
  "plays": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  },
  "publicationDate": "1970-01-01T00:00:00Z",
  "rights": {
    "aclAdmin": true,
    "aclRead": true,
    "aclWrite": true,
    "isCollaborator": true
  },
  "samples": [
    "string"
  ],
  "subtitle": "string",
  "tags": [
    "string"
  ],
  "views": {
    "monthly": 30,
    "total": 42,
    "weekly": 10
  }
}
```

The score and all its details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|htmlUrl|string(url)|false|none|The url where the score can be viewed in a web browser|
|id|string|false|none|The unique identifier of the score|
|privacy|[ScorePrivacy](#schemascoreprivacy)|false|none|The score main privacy mode.<br><br>- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.<br>- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.<br>- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.<br>- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.<br><br>The score can also be individually shared to a set of users or groups using the different collaborators API methods.<br><br>When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.<br><br>When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).<br>|
|sharingKey|string|false|none|The private sharing key of the score (available when the `privacy` mode is set to `privateLink`)|
|title|string|false|none|The title of the score|
|user|[UserPublicSummary](#schemauserpublicsummary)|false|none|Public User details summary|
|arranger|string|false|none|Arranger of the score|
|collaborators|[[ResourceCollaborator](#schemaresourcecollaborator)]|false|none|The list of the collaborators of the score|
|collections|[string]|false|none|The List of parent collections, which includes all the collections this score is included. Please note that you might not have access to all of them.|
|comments|[ScoreCommentsCounts](#schemascorecommentscounts)|false|none|A computed version of the total, unique, weekly and monthly number of<br>comments added on the documents (this doesn't include inline comments).<br>|
|composer|string|false|none|Composer of the score|
|creationDate|string(date-time)|false|none|The date when the score was created|
|creationType|[ScoreCreationType](#schemascorecreationtype)|false|none|The type of creation (an orginal, an arrangement)|
|description|string|false|none|Description of the creation|
|durationTime|number|false|none|In seconds, an approximative duration of the score|
|googleDriveFileId|string|false|none|If the user uses Google Drive and the score exists on Google Drive, this field will contain the unique identifier of the Flat score on Google Drive. You can access the document using the url: `https://drive.google.com/open?id={googleDriveFileId}`<br>|
|instruments|[string]|false|none|An array of the instrument identifiers used in the last version of the score. This is mainly used to display a list of the instruments in the Flat's UI or instruments icons. The format of the strings is `{instrument-group}.{instrument-id}`.<br>|
|license|[ScoreLicense](#schemascorelicense)|false|none|License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/<br>|
|licenseText|string|false|none|Additional license text written on the exported/printed score|
|likes|[ScoreLikesCounts](#schemascorelikescounts)|false|none|A computed version of the weekly, monthly and total of number of likes<br>for a score<br>|
|lyricist|string|false|none|Lyricist of the score|
|mainTempoQpm|number|false|none|The main tempo of the score (in QPM)|
|modificationDate|string(date-time)|false|none|The date of the last revision of the score|
|numberMeasures|integer|false|none|The number of measures in the score|
|organization|string|false|none|If the score has been created in an organization, the identifier of this organization. This property is especially used with the score privacy `organizationPublic`.<br>|
|parentScore|string|false|none|If the score has been forked, the unique identifier of the parent score.<br>|
|plays|[ScorePlaysCounts](#schemascoreplayscounts)|false|none|A computed version of the total, weekly, and monthly number of plays of<br>the score<br>|
|publicationDate|string(date-time)|false|none|The date when the score was published on Flat|
|rights|[ResourceRights](#schemaresourcerights)|false|none|The rights of the current user on a score or collection|
|samples|[string]|false|none|An array of the audio samples identifiers used the different score parts.<br>The format of the strings is `{instrument-group}.{sample-id}`.<br>|
|subtitle|string|false|none|Subtitle of the score|
|tags|[string]|false|none|Tags describing the score|
|views|[ScoreViewsCounts](#schemascoreviewscounts)|false|none|A computed version of the total, weekly, and monthly number of views of<br>the score<br>|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|public|
|privacy|private|
|privacy|organizationPublic|
|privacy|privateLink|
|creationType|original|
|creationType|arrangement|
|creationType|other|
|license|copyright|
|license|cc0|
|license|cc-by|
|license|cc-by-sa|
|license|cc-by-nd|
|license|cc-by-nc|
|license|cc-by-nc-sa|
|license|cc-by-nc-nd|

<h2 id="tocS_ScoreFork">ScoreFork</h2>
<!-- backwards compatibility -->
<a id="schemascorefork"></a>
<a id="schema_ScoreFork"></a>
<a id="tocSscorefork"></a>
<a id="tocsscorefork"></a>

```json
{
  "collection": "root"
}
```

Options to fork the score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|collection|string|false|none|Unique identifier of a collection where the score will be copied.<br>If no collection identifier is provided, the score will be stored in the `root` directory.<br>|

<h2 id="tocS_ScoreLicense">ScoreLicense</h2>
<!-- backwards compatibility -->
<a id="schemascorelicense"></a>
<a id="schema_ScoreLicense"></a>
<a id="tocSscorelicense"></a>
<a id="tocsscorelicense"></a>

```json
"copyright"
```

License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/

<h2 id="tocS_ScoreLikesCounts">ScoreLikesCounts</h2>
<!-- backwards compatibility -->
<a id="schemascorelikescounts"></a>
<a id="schema_ScoreLikesCounts"></a>
<a id="tocSscorelikescounts"></a>
<a id="tocsscorelikescounts"></a>

```json
{
  "monthly": 30,
  "total": 42,
  "weekly": 10
}
```

A computed version of the weekly, monthly and total of number of likes
for a score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monthly|number|false|none|The number of new likes during the last month|
|total|number|false|none|The total number of likes of the score|
|weekly|number|false|none|The number of new likes during the last week|

<h2 id="tocS_ScoreModification">ScoreModification</h2>
<!-- backwards compatibility -->
<a id="schemascoremodification"></a>
<a id="schema_ScoreModification"></a>
<a id="tocSscoremodification"></a>
<a id="tocsscoremodification"></a>

```json
{
  "privacy": "private"
}
```

Edit the score metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|arranger|string|false|none|The arranger of the score|
|composer|string|false|none|The composer of the score|
|creationType|[ScoreCreationType](#schemascorecreationtype)|false|none|The type of creation (an orginal, an arrangement)|
|description|string|false|none|Description of the creation|
|license|[ScoreLicense](#schemascorelicense)|false|none|License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/<br>|
|licenseText|string|false|none|The rights info written on the score|
|lyricist|string|false|none|The lyricist of the score|
|privacy|[ScorePrivacy](#schemascoreprivacy)|false|none|The score main privacy mode.<br><br>- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.<br>- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.<br>- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.<br>- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.<br><br>The score can also be individually shared to a set of users or groups using the different collaborators API methods.<br><br>When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.<br><br>When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).<br>|
|sharingKey|string|false|none|When using the `privacy` mode `privateLink`, this property can be used to set a custom sharing key, otherwise a new key will be generated.|
|subtitle|string|false|none|The subtitle of the score|
|tags|[string]|false|none|Tags describing the score|
|title|string|false|none|The title of the score|

#### Enumerated Values

|Property|Value|
|---|---|
|creationType|original|
|creationType|arrangement|
|creationType|other|
|license|copyright|
|license|cc0|
|license|cc-by|
|license|cc-by-sa|
|license|cc-by-nd|
|license|cc-by-nc|
|license|cc-by-nc-sa|
|license|cc-by-nc-nd|
|privacy|public|
|privacy|private|
|privacy|organizationPublic|
|privacy|privateLink|

<h2 id="tocS_ScorePlaysCounts">ScorePlaysCounts</h2>
<!-- backwards compatibility -->
<a id="schemascoreplayscounts"></a>
<a id="schema_ScorePlaysCounts"></a>
<a id="tocSscoreplayscounts"></a>
<a id="tocsscoreplayscounts"></a>

```json
{
  "monthly": 30,
  "total": 42,
  "weekly": 10
}
```

A computed version of the total, weekly, and monthly number of plays of
the score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monthly|number|false|none|The monthly number of plays of the score|
|total|number|false|none|The total number of plays of the score|
|weekly|number|false|none|The weekly number of plays of the score|

<h2 id="tocS_ScorePrivacy">ScorePrivacy</h2>
<!-- backwards compatibility -->
<a id="schemascoreprivacy"></a>
<a id="schema_ScorePrivacy"></a>
<a id="tocSscoreprivacy"></a>
<a id="tocsscoreprivacy"></a>

```json
"public"
```

The score main privacy mode.

- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.
- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.
- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.
- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.

The score can also be individually shared to a set of users or groups using the different collaborators API methods.

When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.

When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).

<h2 id="tocS_ScoreRevision">ScoreRevision</h2>
<!-- backwards compatibility -->
<a id="schemascorerevision"></a>
<a id="schema_ScoreRevision"></a>
<a id="tocSscorerevision"></a>
<a id="tocsscorerevision"></a>

```json
{
  "autosave": true,
  "collaborators": [
    "000000000000000000000010",
    "000000000000000000000020"
  ],
  "creationDate": "2017-01-26T20:29:10.622000Z",
  "description": "New revision",
  "user": "000000000000000000000020"
}
```

A score revision metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autosave|boolean|false|none|True if this revision was automatically generated by Flat and not on<br>purpose by the user.<br>|
|collaborators|[string]|false|none|none|
|creationDate|string(date-time)|false|none|The date when this revision was created|
|description|string|false|none|A description associated to the revision|
|event|string|false|none|The last event (action id) of the revision|
|id|string|false|none|The unique identifier of the revision.|
|statistics|[ScoreRevisionStatistics](#schemascorerevisionstatistics)|false|none|The statistics related to the score revision (additions and deletions)<br>|
|user|string|false|none|The user identifier who created the revision|

<h2 id="tocS_ScoreRevisionCreation">ScoreRevisionCreation</h2>
<!-- backwards compatibility -->
<a id="schemascorerevisioncreation"></a>
<a id="schema_ScoreRevisionCreation"></a>
<a id="tocSscorerevisioncreation"></a>
<a id="tocsscorerevisioncreation"></a>

```json
{
  "autosave": true,
  "data": "<score-partwise version=\"3.0\"></score-partwise>",
  "description": "New revision",
  "history": [
    {
      "args": {
        "measureUuid": "0be9f739-3213-f312-bb0a-00ad0c787ef7",
        "previousUuid": "888cb742-2110-a050-ba71-28300ba6d61f"
      },
      "fnc": "action.AddMeasure",
      "id": "b278ad43-2e99-4e60-a782-ac119b294ab8",
      "userId": "000000000000000000000010"
    }
  ]
}
```

A new created revision

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|autosave|boolean|false|none|Must be set to `true` if the revision was created automatically.<br>|
|data|string|true|none|The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.<br>Binary payloads (`vnd.recordare.musicxml` and `audio/midi`) can be encoded in Base64, in this case the `dataEncoding` property must match the encoding used for the API request.<br>|
|dataEncoding|string|false|none|The optional encoding of the score data. This property must match the encoding used for the `data` property.|
|description|string|false|none|A description associated to the revision|

#### Enumerated Values

|Property|Value|
|---|---|
|dataEncoding|base64|

<h2 id="tocS_ScoreRevisionStatistics">ScoreRevisionStatistics</h2>
<!-- backwards compatibility -->
<a id="schemascorerevisionstatistics"></a>
<a id="schema_ScoreRevisionStatistics"></a>
<a id="tocSscorerevisionstatistics"></a>
<a id="tocsscorerevisionstatistics"></a>

```json
{
  "additions": 24,
  "deletions": 5
}
```

The statistics related to the score revision (additions and deletions)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additions|number|false|none|The number of additions operations in the last revision|
|deletions|number|false|none|The number of deletions operations in the last revision|

<h2 id="tocS_ScoreSource">ScoreSource</h2>
<!-- backwards compatibility -->
<a id="schemascoresource"></a>
<a id="schema_ScoreSource"></a>
<a id="tocSscoresource"></a>
<a id="tocsscoresource"></a>

```json
{
  "googleDrive": "0B-0000000000000001"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleDrive|string|false|none|If the score is a file on Google Drive, this field property must contain its identifier. To use this method, the Drive file must be public or the Flat Drive App must have access to the file.<br>|

<h2 id="tocS_ScoreSummary">ScoreSummary</h2>
<!-- backwards compatibility -->
<a id="schemascoresummary"></a>
<a id="schema_ScoreSummary"></a>
<a id="tocSscoresummary"></a>
<a id="tocsscoresummary"></a>

```json
{
  "htmlUrl": "https://flat.io/score/000000000000000000000000",
  "id": "000000000000000000000000",
  "privacy": "private",
  "title": "My score",
  "user": {
    "id": "000000000000000000000001",
    "name": "Flat Team",
    "picture": "https://flat.io/img/logo_flat.svg",
    "printableName": "Flat Team",
    "username": "flat"
  }
}
```

A summary of the score details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|htmlUrl|string(url)|false|none|The url where the score can be viewed in a web browser|
|id|string|false|none|The unique identifier of the score|
|privacy|[ScorePrivacy](#schemascoreprivacy)|false|none|The score main privacy mode.<br><br>- `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.<br>- `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.<br>- `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.<br>- `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.<br><br>The score can also be individually shared to a set of users or groups using the different collaborators API methods.<br><br>When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.<br><br>When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).<br>|
|sharingKey|string|false|none|The private sharing key of the score (available when the `privacy` mode is set to `privateLink`)|
|title|string|false|none|The title of the score|
|user|[UserPublicSummary](#schemauserpublicsummary)|false|none|Public User details summary|

#### Enumerated Values

|Property|Value|
|---|---|
|privacy|public|
|privacy|private|
|privacy|organizationPublic|
|privacy|privateLink|

<h2 id="tocS_ScoreTrack">ScoreTrack</h2>
<!-- backwards compatibility -->
<a id="schemascoretrack"></a>
<a id="schema_ScoreTrack"></a>
<a id="tocSscoretrack"></a>
<a id="tocsscoretrack"></a>

```json
{
  "creationDate": "2017-10-22T14:58:22.753000Z",
  "creator": "5815d4b53269d90d2c80b71c",
  "default": true,
  "id": "59ecb20e563736b1e1f75dce",
  "mediaId": "dQw4w9WgXcQ",
  "modificationDate": "2017-10-22T14:58:33.424000Z",
  "score": "59a29d96f35a6411d7508bdd",
  "state": "completed",
  "synchronizationPoints": [
    {
      "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
      "time": 0,
      "type": "measure"
    },
    {
      "time": 213,
      "type": "end"
    }
  ],
  "title": "Rick Astley - Never Gonna Give You Up",
  "type": "youtube",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

An audio track for a score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creationDate|string(date-time)|false|none|The creation date of the track|
|creator|string|false|none|The unique identifier of the track creator|
|default|boolean|false|none|True if the track should be used as default audio source|
|id|string|false|none|The unique identifier of the score track|
|mediaId|string|false|none|The unique identifier of the track when hosted on an external service.<br>For example, if the url is `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, `mediaId` will be `dQw4w9WgXcQ`<br>|
|modificationDate|string(date-time)|false|none|The modification date of the track|
|score|string|false|none|The unique identifier of the score|
|state|[ScoreTrackState](#schemascoretrackstate)|false|none|State of the track|
|synchronizationPoints|[[ScoreTrackPoint](#schemascoretrackpoint)]|false|none|none|
|title|string|false|none|Title of the track|
|type|[ScoreTrackType](#schemascoretracktype)|false|none|The type of an audio track|
|url|string|false|none|The URL of the track|

#### Enumerated Values

|Property|Value|
|---|---|
|state|draft|
|state|completed|
|state|deleted|
|type|audio|
|type|soundcloud|
|type|youtube|
|type|vimeo|

<h2 id="tocS_ScoreTrackCreation">ScoreTrackCreation</h2>
<!-- backwards compatibility -->
<a id="schemascoretrackcreation"></a>
<a id="schema_ScoreTrackCreation"></a>
<a id="tocSscoretrackcreation"></a>
<a id="tocsscoretrackcreation"></a>

```json
{
  "default": true,
  "state": "draft",
  "synchronizationPoints": [
    {
      "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
      "time": 0,
      "type": "measure"
    },
    {
      "time": 213,
      "type": "end"
    }
  ],
  "title": "Rick Astley - Never Gonna Give You Up",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

Creation of a new track. This one must contain the URL of the track or the corresponding file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|boolean|false|none|True if the track should be used as default audio source|
|state|[ScoreTrackState](#schemascoretrackstate)|false|none|State of the track|
|synchronizationPoints|[[ScoreTrackPoint](#schemascoretrackpoint)]|false|none|none|
|title|string|false|none|Title of the track|
|url|string|false|none|The URL of the track|

#### Enumerated Values

|Property|Value|
|---|---|
|state|draft|
|state|completed|
|state|deleted|

<h2 id="tocS_ScoreTrackPoint">ScoreTrackPoint</h2>
<!-- backwards compatibility -->
<a id="schemascoretrackpoint"></a>
<a id="schema_ScoreTrackPoint"></a>
<a id="tocSscoretrackpoint"></a>
<a id="tocsscoretrackpoint"></a>

```json
{
  "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
  "time": 0,
  "type": "measure"
}
```

A track synchronization point

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|measureUuid|string(uuid)|false|none|The measure unique identifier|
|time|number|true|none|The corresponding time in seconds|
|type|string|true|none|The type of the synchronization point. If the type is `measure`, the measure uuid must be present in `measureUuid`|

#### Enumerated Values

|Property|Value|
|---|---|
|type|measure|
|type|end|

<h2 id="tocS_ScoreTrackState">ScoreTrackState</h2>
<!-- backwards compatibility -->
<a id="schemascoretrackstate"></a>
<a id="schema_ScoreTrackState"></a>
<a id="tocSscoretrackstate"></a>
<a id="tocsscoretrackstate"></a>

```json
"draft"
```

State of the track

<h2 id="tocS_ScoreTrackType">ScoreTrackType</h2>
<!-- backwards compatibility -->
<a id="schemascoretracktype"></a>
<a id="schema_ScoreTrackType"></a>
<a id="tocSscoretracktype"></a>
<a id="tocsscoretracktype"></a>

```json
"audio"
```

The type of an audio track

<h2 id="tocS_ScoreTrackUpdate">ScoreTrackUpdate</h2>
<!-- backwards compatibility -->
<a id="schemascoretrackupdate"></a>
<a id="schema_ScoreTrackUpdate"></a>
<a id="tocSscoretrackupdate"></a>
<a id="tocsscoretrackupdate"></a>

```json
{
  "default": true,
  "state": "draft",
  "synchronizationPoints": [
    {
      "measureUuid": "5132a788-69e6-d0c6-84ec-4bd858658d7c",
      "time": 0,
      "type": "measure"
    },
    {
      "time": 213,
      "type": "end"
    }
  ],
  "title": "Rick Astley - Never Gonna Give You Up",
  "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
```

Update an existing track.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|boolean|false|none|True if the track should be used as default audio source|
|state|[ScoreTrackState](#schemascoretrackstate)|false|none|State of the track|
|synchronizationPoints|[[ScoreTrackPoint](#schemascoretrackpoint)]|false|none|none|
|title|string|false|none|Title of the track|

#### Enumerated Values

|Property|Value|
|---|---|
|state|draft|
|state|completed|
|state|deleted|

<h2 id="tocS_ScoreViewsCounts">ScoreViewsCounts</h2>
<!-- backwards compatibility -->
<a id="schemascoreviewscounts"></a>
<a id="schema_ScoreViewsCounts"></a>
<a id="tocSscoreviewscounts"></a>
<a id="tocsscoreviewscounts"></a>

```json
{
  "monthly": 30,
  "total": 42,
  "weekly": 10
}
```

A computed version of the total, weekly, and monthly number of views of
the score

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|monthly|number|false|none|The monthly number of views of the score|
|total|number|false|none|The total number of views of the score|
|weekly|number|false|none|The weekly number of views of the score|

<h2 id="tocS_UserAdminUpdate">UserAdminUpdate</h2>
<!-- backwards compatibility -->
<a id="schemauseradminupdate"></a>
<a id="schema_UserAdminUpdate"></a>
<a id="tocSuseradminupdate"></a>
<a id="tocsuseradminupdate"></a>

```json
{
  "email": "user@example.com",
  "firstname": "string",
  "lastname": "string",
  "organizationRole": "admin",
  "password": "password",
  "username": "string"
}
```

User update as an organization admin

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|false|none|Email of the account|
|firstname|string|false|none|First name of the user|
|lastname|string|false|none|Last name of the user|
|organizationRole|[OrganizationRoles](#schemaorganizationroles)|false|none|User's Organization Role (for Edu users only)|
|password|string(password)|false|none|Password of the account|
|username|string|false|none|Username of the account|

#### Enumerated Values

|Property|Value|
|---|---|
|organizationRole|admin|
|organizationRole|billing|
|organizationRole|teacher|
|organizationRole|user|

<h2 id="tocS_UserBasics">UserBasics</h2>
<!-- backwards compatibility -->
<a id="schemauserbasics"></a>
<a id="schema_UserBasics"></a>
<a id="tocSuserbasics"></a>
<a id="tocsuserbasics"></a>

```json
{
  "id": "000000000000000000000001",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstname|string|false|none|Firstname of the user (for education users)|
|id|string|false|none|The user unique identifier|
|isFlatTeam|boolean|false|none|Will be 'true' if user is part of the Flat Team|
|isPowerUser|boolean|false|none|User license status. 'true' if user is an individual Power user|
|lastname|string|false|none|Lastname of the user (for education users)|
|name|string|false|none|A displayable name for the user (for consumer users)|
|picture|string \| null|false|none|The URL of the picture to display|
|printableName|string|false|none|The name that can be directly printed (name, firstname & lastname, or username)|
|type|string|false|none|The type of user account|
|username|string|false|none|The user name (unique for the organization)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|guest|

<h2 id="tocS_UserCreation">UserCreation</h2>
<!-- backwards compatibility -->
<a id="schemausercreation"></a>
<a id="schema_UserCreation"></a>
<a id="tocSusercreation"></a>
<a id="tocsusercreation"></a>

```json
{
  "email": "user@example.com",
  "firstname": "string",
  "lastname": "string",
  "locale": "en",
  "password": "password",
  "username": "string"
}
```

User creation

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string(email)|false|none|Email of the new account|
|firstname|string|false|none|First name of the user|
|lastname|string|false|none|Last name of the user|
|locale|[FlatLocales](#schemaflatlocales)|false|none|The user language|
|password|string(password)|true|none|Password of the new account|
|username|string|true|none|Username of the new account|

#### Enumerated Values

|Property|Value|
|---|---|
|locale|en|
|locale|en-GB|
|locale|es|
|locale|fr|
|locale|de|
|locale|it|
|locale|ja|
|locale|ko|
|locale|nl|
|locale|pl|
|locale|pt|
|locale|pt-BR|
|locale|ro|
|locale|ru|
|locale|sv|
|locale|tr|
|locale|zh-Hans|

<h2 id="tocS_UserDetails">UserDetails</h2>
<!-- backwards compatibility -->
<a id="schemauserdetails"></a>
<a id="schema_UserDetails"></a>
<a id="tocSuserdetails"></a>
<a id="tocsuserdetails"></a>

```json
{
  "id": "string",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat",
  "classRole": "teacher",
  "htmlUrl": "string",
  "organization": "string",
  "organizationRole": "admin",
  "bio": "string",
  "coverPicture": "string",
  "followersCount": 0,
  "followingCount": 0,
  "instruments": [
    "string"
  ],
  "likedScoresCount": 0,
  "ownedPublicScoresCount": 0,
  "profileTheme": "string",
  "registrationDate": "1970-01-01T00:00:00Z",
  "coverPictureFile": "string",
  "locale": "en",
  "pictureFile": "string",
  "privateProfile": true,
  "type": "user"
}
```

User details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstname|string|false|none|Firstname of the user (for education users)|
|id|string|false|none|The user unique identifier|
|isFlatTeam|boolean|false|none|Will be 'true' if user is part of the Flat Team|
|isPowerUser|boolean|false|none|User license status. 'true' if user is an individual Power user|
|lastname|string|false|none|Lastname of the user (for education users)|
|name|string|false|none|A displayable name for the user (for consumer users)|
|picture|string \| null|false|none|The URL of the picture to display|
|printableName|string|false|none|The name that can be directly printed (name, firstname & lastname, or username)|
|type|string|false|none|The type of user account|
|username|string|false|none|The user name (unique for the organization)|
|classRole|[ClassRoles](#schemaclassroles)|false|none|User's Class Role (for Edu users only)|
|htmlUrl|string|false|none|Link to user profile (for Indiv. users only)|
|organization|string|false|none|Organization ID (for Edu users only)|
|organizationRole|[OrganizationRoles](#schemaorganizationroles)|false|none|User's Organization Role (for Edu users only)|
|bio|string|false|none|User's biography|
|coverPicture|string|false|none|Cover picture (backgroud) for the profile|
|followersCount|integer|false|none|Number of followers the user have|
|followingCount|integer|false|none|Number of people the user follow|
|instruments|[string]|false|none|An array of the instrument identifiers.<br>The format of the strings is `{instrument-group}.{instrument-id}`.<br>|
|likedScoresCount|integer|false|none|Number of the scores liked by the user|
|ownedPublicScoresCount|integer|false|none|Number of public scores the user have|
|profileTheme|string|false|none|Theme (background) for the profile|
|registrationDate|string(date-time)|false|none|Date the user signed up|
|coverPictureFile|string \| null|false|none|The ID of the user profile cover picture|
|id|string|false|none|Identifier of the user|
|locale|[FlatLocales](#schemaflatlocales)|false|none|The user language|
|pictureFile|string \| null|false|none|The ID of the user profile picture|
|privateProfile|boolean|false|none|Tell either this user profile is private or not (individual accounts only)|
|type|string|false|none|The type of account|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|guest|
|classRole|teacher|
|classRole|student|
|organizationRole|admin|
|organizationRole|billing|
|organizationRole|teacher|
|organizationRole|user|
|locale|en|
|locale|en-GB|
|locale|es|
|locale|fr|
|locale|de|
|locale|it|
|locale|ja|
|locale|ko|
|locale|nl|
|locale|pl|
|locale|pt|
|locale|pt-BR|
|locale|ro|
|locale|ru|
|locale|sv|
|locale|tr|
|locale|zh-Hans|
|type|user|
|type|guest|

<h2 id="tocS_UserDetailsAdmin">UserDetailsAdmin</h2>
<!-- backwards compatibility -->
<a id="schemauserdetailsadmin"></a>
<a id="schema_UserDetailsAdmin"></a>
<a id="tocSuserdetailsadmin"></a>
<a id="tocsuserdetailsadmin"></a>

```json
{
  "id": "000000000000000000000001",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat",
  "classRole": "teacher",
  "htmlUrl": "string",
  "organization": "string",
  "organizationRole": "admin",
  "email": "user@example.com",
  "lastActivityDate": "1970-01-01T00:00:00Z",
  "license": {
    "active": true,
    "expirationDate": "1970-01-01T00:00:00Z",
    "id": "string",
    "mode": "credit",
    "source": "order"
  }
}
```

User details (view for organization teacher / admin)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstname|string|false|none|Firstname of the user (for education users)|
|id|string|false|none|The user unique identifier|
|isFlatTeam|boolean|false|none|Will be 'true' if user is part of the Flat Team|
|isPowerUser|boolean|false|none|User license status. 'true' if user is an individual Power user|
|lastname|string|false|none|Lastname of the user (for education users)|
|name|string|false|none|A displayable name for the user (for consumer users)|
|picture|string \| null|false|none|The URL of the picture to display|
|printableName|string|false|none|The name that can be directly printed (name, firstname & lastname, or username)|
|type|string|false|none|The type of user account|
|username|string|false|none|The user name (unique for the organization)|
|classRole|[ClassRoles](#schemaclassroles)|false|none|User's Class Role (for Edu users only)|
|htmlUrl|string|false|none|Link to user profile (for Indiv. users only)|
|organization|string|false|none|Organization ID (for Edu users only)|
|organizationRole|[OrganizationRoles](#schemaorganizationroles)|false|none|User's Organization Role (for Edu users only)|
|email|string(email)|false|none|Email of the user|
|lastActivityDate|string(date-time)|false|none|Date of the last user activity|
|license|object|false|none|Current active license of the user|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|guest|
|classRole|teacher|
|classRole|student|
|organizationRole|admin|
|organizationRole|billing|
|organizationRole|teacher|
|organizationRole|user|

<h2 id="tocS_UserPublic">UserPublic</h2>
<!-- backwards compatibility -->
<a id="schemauserpublic"></a>
<a id="schema_UserPublic"></a>
<a id="tocSuserpublic"></a>
<a id="tocsuserpublic"></a>

```json
{
  "id": "000000000000000000000001",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat",
  "classRole": "teacher",
  "htmlUrl": "string",
  "organization": "string",
  "organizationRole": "admin",
  "bio": "string",
  "coverPicture": "string",
  "followersCount": 0,
  "followingCount": 0,
  "instruments": [
    "string"
  ],
  "likedScoresCount": 0,
  "ownedPublicScoresCount": 0,
  "profileTheme": "string",
  "registrationDate": "1970-01-01T00:00:00Z"
}
```

Public User details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstname|string|false|none|Firstname of the user (for education users)|
|id|string|false|none|The user unique identifier|
|isFlatTeam|boolean|false|none|Will be 'true' if user is part of the Flat Team|
|isPowerUser|boolean|false|none|User license status. 'true' if user is an individual Power user|
|lastname|string|false|none|Lastname of the user (for education users)|
|name|string|false|none|A displayable name for the user (for consumer users)|
|picture|string \| null|false|none|The URL of the picture to display|
|printableName|string|false|none|The name that can be directly printed (name, firstname & lastname, or username)|
|type|string|false|none|The type of user account|
|username|string|false|none|The user name (unique for the organization)|
|classRole|[ClassRoles](#schemaclassroles)|false|none|User's Class Role (for Edu users only)|
|htmlUrl|string|false|none|Link to user profile (for Indiv. users only)|
|organization|string|false|none|Organization ID (for Edu users only)|
|organizationRole|[OrganizationRoles](#schemaorganizationroles)|false|none|User's Organization Role (for Edu users only)|
|bio|string|false|none|User's biography|
|coverPicture|string|false|none|Cover picture (backgroud) for the profile|
|followersCount|integer|false|none|Number of followers the user have|
|followingCount|integer|false|none|Number of people the user follow|
|instruments|[string]|false|none|An array of the instrument identifiers.<br>The format of the strings is `{instrument-group}.{instrument-id}`.<br>|
|likedScoresCount|integer|false|none|Number of the scores liked by the user|
|ownedPublicScoresCount|integer|false|none|Number of public scores the user have|
|profileTheme|string|false|none|Theme (background) for the profile|
|registrationDate|string(date-time)|false|none|Date the user signed up|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|guest|
|classRole|teacher|
|classRole|student|
|organizationRole|admin|
|organizationRole|billing|
|organizationRole|teacher|
|organizationRole|user|

<h2 id="tocS_UserPublicSummary">UserPublicSummary</h2>
<!-- backwards compatibility -->
<a id="schemauserpublicsummary"></a>
<a id="schema_UserPublicSummary"></a>
<a id="tocSuserpublicsummary"></a>
<a id="tocsuserpublicsummary"></a>

```json
{
  "id": "000000000000000000000001",
  "isFlatTeam": true,
  "isPowerUser": true,
  "name": "Flat Team",
  "picture": "https://flat.io/img/logo_flat.svg",
  "printableName": "Flat Team",
  "username": "flat",
  "classRole": "teacher",
  "htmlUrl": "string",
  "organization": "string",
  "organizationRole": "admin"
}
```

Public User details summary

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|firstname|string|false|none|Firstname of the user (for education users)|
|id|string|false|none|The user unique identifier|
|isFlatTeam|boolean|false|none|Will be 'true' if user is part of the Flat Team|
|isPowerUser|boolean|false|none|User license status. 'true' if user is an individual Power user|
|lastname|string|false|none|Lastname of the user (for education users)|
|name|string|false|none|A displayable name for the user (for consumer users)|
|picture|string \| null|false|none|The URL of the picture to display|
|printableName|string|false|none|The name that can be directly printed (name, firstname & lastname, or username)|
|type|string|false|none|The type of user account|
|username|string|false|none|The user name (unique for the organization)|
|classRole|[ClassRoles](#schemaclassroles)|false|none|User's Class Role (for Edu users only)|
|htmlUrl|string|false|none|Link to user profile (for Indiv. users only)|
|organization|string|false|none|Organization ID (for Edu users only)|
|organizationRole|[OrganizationRoles](#schemaorganizationroles)|false|none|User's Organization Role (for Edu users only)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|user|
|type|guest|
|classRole|teacher|
|classRole|student|
|organizationRole|admin|
|organizationRole|billing|
|organizationRole|teacher|
|organizationRole|user|
