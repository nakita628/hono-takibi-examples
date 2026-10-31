<h1 id="twitter-api-v2">Twitter API v2 v2.61</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Twitter API v2 available endpoints

Base URLs:

* <a href="https://api.twitter.com">https://api.twitter.com</a> - Twitter API

<a href="https://developer.twitter.com/en/developer-terms/agreement-and-policy.html">Terms of service</a>
Web: <a href="https://developer.twitter.com/">Twitter Developers</a> 
License: <a href="https://developer.twitter.com/en/developer-terms/agreement-and-policy.html">Twitter Developer Agreement and Policy</a>

# Authentication

- HTTP Authentication, scheme: bearer

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [https://api.twitter.com/2/oauth2/authorize](https://api.twitter.com/2/oauth2/authorize)
    - Token URL = [https://api.twitter.com/2/oauth2/token](https://api.twitter.com/2/oauth2/token)

|Scope|Scope Description|
|---|---|
|block.read|Accounts you’ve blocked.|
|block.write|Block and unblock accounts for you.|
|bookmark.read|Allows an app to read bookmarked Tweets|
|bookmark.write|Allows an app to create and delete bookmarks|
|dm.read|All your Direct Messages|
|dm.write|Send and manage Direct Messages for you|
|follows.read|People who follow you and people who you follow.|
|follows.write|Follow and unfollow people for you.|
|like.read|Tweets you’ve liked and likes you can view.|
|like.write|Like and un-like Tweets for you.|
|list.read|Lists, list members, and list followers of lists you’ve created or are a member of, including private lists.|
|list.write|Create and manage Lists for you.|
|mute.read|Accounts you’ve muted.|
|mute.write|Mute and unmute accounts for you.|
|offline.access|App can request refresh token.|
|space.read|Access all of the Spaces you can see.|
|tweet.moderate.write|Hide and unhide replies to your Tweets.|
|tweet.read|All the Tweets you can see, including Tweets from protected accounts.|
|tweet.write|Tweet and retweet for you.|
|users.read|Any account you can see, including protected accounts. Any account you can see, including protected accounts.|

- HTTP Authentication, scheme: oauth

<h1 id="twitter-api-v2-bookmarks">Bookmarks</h1>

Endpoints related to retrieving, managing bookmarks of a user

<a href="https://developer.twitter.com/en/docs/twitter-api/bookmarks">Find out more</a>

## Bookmarks by User

<a id="opIdgetUsersIdBookmarks"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/bookmarks \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/bookmarks`

Returns Tweet objects that have been bookmarked by the requesting User

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/get-users-id-bookmarks">External documentation</a>

<h3 id="bookmarks-by-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User for whom to return results.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="bookmarks-by-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdBookmarksResponse](#schemaget2usersidbookmarksresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: bookmark.read tweet.read users.read )
</aside>

## Add Tweet to Bookmarks

<a id="opIdpostUsersIdBookmarks"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/bookmarks \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tweet_id": "1346889436626259968"
  }'
```

`POST /2/users/{id}/bookmarks`

Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/post-users-id-bookmarks">External documentation</a>

> Body parameter

```json
{
  "tweet_id": "1346889436626259968"
}
```

<h3 id="add-tweet-to-bookmarks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User for whom to add bookmarks.|
|body|body|[BookmarkAddRequest](#schemabookmarkaddrequest)|true|none|
|» tweet_id|body|[TweetId](#schematweetid)|true|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bookmarked": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-tweet-to-bookmarks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[BookmarkMutationResponse](#schemabookmarkmutationresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: bookmark.write tweet.read users.read )
</aside>

## Remove a bookmarked Tweet

<a id="opIdusersIdBookmarksDelete"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/bookmarks/1346889436626259968 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/users/{id}/bookmarks/{tweet_id}`

Removes a Tweet from the requesting User's bookmarked Tweets.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/bookmarks/api-reference/delete-users-id-bookmarks-tweet_id">External documentation</a>

<h3 id="remove-a-bookmarked-tweet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User whose bookmark is to be removed.|
|tweet_id|path|[TweetId](#schematweetid)|true|The ID of the Tweet that the source User is removing from bookmarks.|

> Example responses

> 200 Response

```json
{
  "data": {
    "bookmarked": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="remove-a-bookmarked-tweet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[BookmarkMutationResponse](#schemabookmarkmutationresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: bookmark.write tweet.read users.read )
</aside>

<h1 id="twitter-api-v2-compliance">Compliance</h1>

Endpoints related to keeping Twitter data in your systems compliant

<a href="https://developer.twitter.com/en/docs/twitter-api/compliance/batch-tweet/introduction">Find out more</a>

## List Compliance Jobs

<a id="opIdlistBatchComplianceJobs"></a>

> Code samples

```bash
curl 'https://example.com/2/compliance/jobs?type=tweets' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/compliance/jobs`

Returns recent Compliance Jobs for a given job type and optional job status

<a href="https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs">External documentation</a>

<h3 id="list-compliance-jobs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|query|string|true|Type of Compliance Job to list.|
|status|query|string|false|Status of Compliance Job to list.|
|compliance_job.fields|query|[string]|false|A comma separated list of ComplianceJob fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|tweets|
|type|users|
|status|created|
|status|in_progress|
|status|failed|
|status|complete|
|compliance_job.fields|created_at|
|compliance_job.fields|download_expires_at|
|compliance_job.fields|download_url|
|compliance_job.fields|id|
|compliance_job.fields|name|
|compliance_job.fields|resumable|
|compliance_job.fields|status|
|compliance_job.fields|type|
|compliance_job.fields|upload_expires_at|
|compliance_job.fields|upload_url|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2021-01-06T18:40:40.000Z",
      "download_expires_at": "2021-01-06T18:40:40.000Z",
      "download_url": "http://example.com",
      "id": "1372966999991541762",
      "name": "my-job",
      "status": "created",
      "type": "tweets",
      "upload_expires_at": "2021-01-06T18:40:40.000Z",
      "upload_url": "http://example.com"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "meta": {
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-compliance-jobs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2ComplianceJobsResponse](#schemaget2compliancejobsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Create compliance job

<a id="opIdcreateBatchComplianceJob"></a>

> Code samples

```bash
curl https://example.com/2/compliance/jobs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "name": "my-job",
    "resumable": true,
    "type": "tweets"
  }'
```

`POST /2/compliance/jobs`

Creates a compliance for the given job type

<a href="https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/post-compliance-jobs">External documentation</a>

> Body parameter

```json
{
  "name": "my-job",
  "resumable": true,
  "type": "tweets"
}
```

<h3 id="create-compliance-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateComplianceJobRequest](#schemacreatecompliancejobrequest)|true|none|
|» name|body|[ComplianceJobName](#schemacompliancejobname)|false|User-provided name for a compliance job.|
|» resumable|body|boolean|false|If true, this endpoint will return a pre-signed URL with resumable uploads enabled.|
|» type|body|string|true|Type of compliance job to list.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|tweets|
|» type|users|

> Example responses

> 200 Response

```json
{
  "data": {
    "created_at": "2021-01-06T18:40:40.000Z",
    "download_expires_at": "2021-01-06T18:40:40.000Z",
    "download_url": "http://example.com",
    "id": "1372966999991541762",
    "name": "my-job",
    "status": "created",
    "type": "tweets",
    "upload_expires_at": "2021-01-06T18:40:40.000Z",
    "upload_url": "http://example.com"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-compliance-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[CreateComplianceJobResponse](#schemacreatecompliancejobresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Get Compliance Job

<a id="opIdgetBatchComplianceJob"></a>

> Code samples

```bash
curl https://example.com/2/compliance/jobs/1372966999991541762 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/compliance/jobs/{id}`

Returns a single Compliance Job by ID

<a href="https://developer.twitter.com/en/docs/twitter-api/compliance/batch-compliance/api-reference/get-compliance-jobs-id">External documentation</a>

<h3 id="get-compliance-job-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[JobId](#schemajobid)|true|The ID of the Compliance Job to retrieve.|
|compliance_job.fields|query|[string]|false|A comma separated list of ComplianceJob fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|compliance_job.fields|created_at|
|compliance_job.fields|download_expires_at|
|compliance_job.fields|download_url|
|compliance_job.fields|id|
|compliance_job.fields|name|
|compliance_job.fields|resumable|
|compliance_job.fields|status|
|compliance_job.fields|type|
|compliance_job.fields|upload_expires_at|
|compliance_job.fields|upload_url|

> Example responses

> 200 Response

```json
{
  "data": {
    "created_at": "2021-01-06T18:40:40.000Z",
    "download_expires_at": "2021-01-06T18:40:40.000Z",
    "download_url": "http://example.com",
    "id": "1372966999991541762",
    "name": "my-job",
    "status": "created",
    "type": "tweets",
    "upload_expires_at": "2021-01-06T18:40:40.000Z",
    "upload_url": "http://example.com"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-compliance-job-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2ComplianceJobsIdResponse](#schemaget2compliancejobsidresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Tweets Compliance stream

<a id="opIdgetTweetsComplianceStream"></a>

> Code samples

```bash
curl 'https://example.com/2/tweets/compliance/stream?partition=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/compliance/stream`

Streams 100% of compliance data for Tweets

<h3 id="tweets-compliance-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_minutes|query|integer(int32)|false|The number of minutes of backfill requested.|
|partition|query|integer(int32)|true|The partition number.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided.|

> Example responses

> 200 Response

```json
{
  "data": {
    "delete": {
      "event_at": "2021-07-06T18:40:40.000Z",
      "quote_tweet_id": "1346889436626259968",
      "tweet": {
        "author_id": "2244994945",
        "id": "1346889436626259968"
      }
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="tweets-compliance-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TweetComplianceStreamResponse](#schematweetcompliancestreamresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Tweets Label stream

<a id="opIdgetTweetsLabelStream"></a>

> Code samples

```bash
curl https://example.com/2/tweets/label/stream \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/label/stream`

Streams 100% of labeling events applied to Tweets

<h3 id="tweets-label-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_minutes|query|integer(int32)|false|The number of minutes of backfill requested.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet labels will be provided.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Tweet labels will be provided.|

> Example responses

> 200 Response

```json
{
  "data": {
    "public_tweet_notice": {
      "application": "apply",
      "details": "string",
      "event_at": "2021-07-06T18:40:40.000Z",
      "event_type": "misleading",
      "extended_details_url": "string",
      "label_title": "string",
      "tweet": {
        "author_id": "2244994945",
        "id": "1346889436626259968"
      }
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="tweets-label-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TweetLabelStreamResponse](#schematweetlabelstreamresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Users Compliance stream

<a id="opIdgetUsersComplianceStream"></a>

> Code samples

```bash
curl 'https://example.com/2/users/compliance/stream?partition=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/compliance/stream`

Streams 100% of compliance data for Users

<h3 id="users-compliance-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_minutes|query|integer(int32)|false|The number of minutes of backfill requested.|
|partition|query|integer(int32)|true|The partition number.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.|

> Example responses

> 200 Response

```json
{
  "data": {
    "user_protect": {
      "event_at": "2021-07-06T18:40:40.000Z",
      "user": {
        "id": "2244994945"
      }
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="users-compliance-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[UserComplianceStreamResponse](#schemausercompliancestreamresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

<h1 id="twitter-api-v2-direct-messages">Direct Messages</h1>

Endpoints related to retrieving, managing Direct Messages

<a href="https://developer.twitter.com/en/docs/twitter-api/direct-messages">Find out more</a>

## Create a new DM Conversation

<a id="opIddmConversationIdCreate"></a>

> Code samples

```bash
curl https://example.com/2/dm_conversations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "conversation_type": "Group",
    "message": {
      "attachments": [
        {
          "media_id": "1146654567674912769"
        }
      ],
      "text": "string"
    },
    "participant_ids": [
      "2244994945",
      "2244994945"
    ]
  }'
```

`POST /2/dm_conversations`

Creates a new DM Conversation.

> Body parameter

```json
{
  "conversation_type": "Group",
  "message": {
    "attachments": [
      {
        "media_id": "1146654567674912769"
      }
    ],
    "text": "string"
  },
  "participant_ids": [
    "2244994945",
    "2244994945"
  ]
}
```

<h3 id="create-a-new-dm-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateDmConversationRequest](#schemacreatedmconversationrequest)|false|none|
|» conversation_type|body|string|true|The conversation type that is being created.|
|» message|body|[CreateMessageRequest](#schemacreatemessagerequest)|true|none|
|» participant_ids|body|[DmParticipants](#schemadmparticipants)|true|Participants for the DM Conversation.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» conversation_type|Group|

> Example responses

> 201 Response

```json
{
  "data": {
    "dm_conversation_id": "123123123-456456456",
    "dm_event_id": "1146654567674912769"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-a-new-dm-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded.|[CreateDmEventResponse](#schemacreatedmeventresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: dm.write tweet.read users.read ), UserToken
</aside>

## Get DM Events for a DM Conversation

<a id="opIdgetDmConversationsWithParticipantIdDmEvents"></a>

> Code samples

```bash
curl https://example.com/2/dm_conversations/with/2244994945/dm_events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/dm_conversations/with/{participant_id}/dm_events`

Returns DM Events for a DM Conversation

<h3 id="get-dm-events-for-a-dm-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|participant_id|path|[UserId](#schemauserid)|true|The ID of the participant user for the One to One DM conversation.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken32](#schemapaginationtoken32)|false|This parameter is used to get a specified 'page' of results.|
|event_types|query|[string]|false|The set of event_types to include in the results.|
|dm_event.fields|query|[string]|false|A comma separated list of DmEvent fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|event_types|MessageCreate|
|event_types|ParticipantsJoin|
|event_types|ParticipantsLeave|
|dm_event.fields|attachments|
|dm_event.fields|created_at|
|dm_event.fields|dm_conversation_id|
|dm_event.fields|event_type|
|dm_event.fields|id|
|dm_event.fields|participant_ids|
|dm_event.fields|referenced_tweets|
|dm_event.fields|sender_id|
|dm_event.fields|text|
|expansions|attachments.media_keys|
|expansions|participant_ids|
|expansions|referenced_tweets.id|
|expansions|sender_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attachments": {
        "card_ids": [
          "string"
        ],
        "media_keys": [
          "string"
        ]
      },
      "created_at": "1970-01-01T00:00:00Z",
      "dm_conversation_id": "123123123-456456456",
      "event_type": "MessageCreate",
      "id": "1146654567674912769",
      "participant_ids": [
        "2244994945"
      ],
      "referenced_tweets": [
        {
          "id": "1346889436626259968"
        }
      ],
      "sender_id": "2244994945",
      "text": "string"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-dm-events-for-a-dm-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2DmConversationsWithParticipantIdDmEventsResponse](#schemaget2dmconversationswithparticipantiddmeventsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: dm.read tweet.read users.read ), UserToken
</aside>

## Send a new message to a user

<a id="opIddmConversationWithUserEventIdCreate"></a>

> Code samples

```bash
curl https://example.com/2/dm_conversations/with/2244994945/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachments": [
      {
        "media_id": "1146654567674912769"
      }
    ],
    "text": "string"
  }'
```

`POST /2/dm_conversations/with/{participant_id}/messages`

Creates a new message for a DM Conversation with a participant user by ID

> Body parameter

```json
{
  "attachments": [
    {
      "media_id": "1146654567674912769"
    }
  ],
  "text": "string"
}
```

<h3 id="send-a-new-message-to-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|participant_id|path|[UserId](#schemauserid)|true|The ID of the recipient user that will receive the DM.|
|body|body|[CreateMessageRequest](#schemacreatemessagerequest)|false|none|
|» *anyOf*|body|[CreateTextMessageRequest](#schemacreatetextmessagerequest)|false|none|
|» *anyOf*|body|[CreateAttachmentsMessageRequest](#schemacreateattachmentsmessagerequest)|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "dm_conversation_id": "123123123-456456456",
    "dm_event_id": "1146654567674912769"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="send-a-new-message-to-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded.|[CreateDmEventResponse](#schemacreatedmeventresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: dm.write tweet.read users.read ), UserToken
</aside>

## Send a new message to a DM Conversation

<a id="opIddmConversationByIdEventIdCreate"></a>

> Code samples

```bash
curl https://example.com/2/dm_conversations/string/messages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "attachments": [
      {
        "media_id": "1146654567674912769"
      }
    ],
    "text": "string"
  }'
```

`POST /2/dm_conversations/{dm_conversation_id}/messages`

Creates a new message for a DM Conversation specified by DM Conversation ID

> Body parameter

```json
{
  "attachments": [
    {
      "media_id": "1146654567674912769"
    }
  ],
  "text": "string"
}
```

<h3 id="send-a-new-message-to-a-dm-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dm_conversation_id|path|string|true|The DM Conversation ID.|
|body|body|[CreateMessageRequest](#schemacreatemessagerequest)|false|none|
|» *anyOf*|body|[CreateTextMessageRequest](#schemacreatetextmessagerequest)|false|none|
|» *anyOf*|body|[CreateAttachmentsMessageRequest](#schemacreateattachmentsmessagerequest)|false|none|

> Example responses

> 201 Response

```json
{
  "data": {
    "dm_conversation_id": "123123123-456456456",
    "dm_event_id": "1146654567674912769"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="send-a-new-message-to-a-dm-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded.|[CreateDmEventResponse](#schemacreatedmeventresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: dm.write tweet.read users.read ), UserToken
</aside>

## Get DM Events for a DM Conversation

<a id="opIdgetDmConversationsIdDmEvents"></a>

> Code samples

```bash
curl https://example.com/2/dm_conversations/123123123-456456456/dm_events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/dm_conversations/{id}/dm_events`

Returns DM Events for a DM Conversation

<h3 id="get-dm-events-for-a-dm-conversation-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[DmConversationId](#schemadmconversationid)|true|The DM Conversation ID.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken32](#schemapaginationtoken32)|false|This parameter is used to get a specified 'page' of results.|
|event_types|query|[string]|false|The set of event_types to include in the results.|
|dm_event.fields|query|[string]|false|A comma separated list of DmEvent fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|event_types|MessageCreate|
|event_types|ParticipantsJoin|
|event_types|ParticipantsLeave|
|dm_event.fields|attachments|
|dm_event.fields|created_at|
|dm_event.fields|dm_conversation_id|
|dm_event.fields|event_type|
|dm_event.fields|id|
|dm_event.fields|participant_ids|
|dm_event.fields|referenced_tweets|
|dm_event.fields|sender_id|
|dm_event.fields|text|
|expansions|attachments.media_keys|
|expansions|participant_ids|
|expansions|referenced_tweets.id|
|expansions|sender_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attachments": {
        "card_ids": [
          "string"
        ],
        "media_keys": [
          "string"
        ]
      },
      "created_at": "1970-01-01T00:00:00Z",
      "dm_conversation_id": "123123123-456456456",
      "event_type": "MessageCreate",
      "id": "1146654567674912769",
      "participant_ids": [
        "2244994945"
      ],
      "referenced_tweets": [
        {
          "id": "1346889436626259968"
        }
      ],
      "sender_id": "2244994945",
      "text": "string"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-dm-events-for-a-dm-conversation-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2DmConversationsIdDmEventsResponse](#schemaget2dmconversationsiddmeventsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: dm.read tweet.read users.read ), UserToken
</aside>

## Get recent DM Events

<a id="opIdgetDmEvents"></a>

> Code samples

```bash
curl https://example.com/2/dm_events \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/dm_events`

Returns recent DM Events across DM conversations

<h3 id="get-recent-dm-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken32](#schemapaginationtoken32)|false|This parameter is used to get a specified 'page' of results.|
|event_types|query|[string]|false|The set of event_types to include in the results.|
|dm_event.fields|query|[string]|false|A comma separated list of DmEvent fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|event_types|MessageCreate|
|event_types|ParticipantsJoin|
|event_types|ParticipantsLeave|
|dm_event.fields|attachments|
|dm_event.fields|created_at|
|dm_event.fields|dm_conversation_id|
|dm_event.fields|event_type|
|dm_event.fields|id|
|dm_event.fields|participant_ids|
|dm_event.fields|referenced_tweets|
|dm_event.fields|sender_id|
|dm_event.fields|text|
|expansions|attachments.media_keys|
|expansions|participant_ids|
|expansions|referenced_tweets.id|
|expansions|sender_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "attachments": {
        "card_ids": [
          "string"
        ],
        "media_keys": [
          "string"
        ]
      },
      "created_at": "1970-01-01T00:00:00Z",
      "dm_conversation_id": "123123123-456456456",
      "event_type": "MessageCreate",
      "id": "1146654567674912769",
      "participant_ids": [
        "2244994945"
      ],
      "referenced_tweets": [
        {
          "id": "1346889436626259968"
        }
      ],
      "sender_id": "2244994945",
      "text": "string"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-recent-dm-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2DmEventsResponse](#schemaget2dmeventsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: dm.read tweet.read users.read ), UserToken
</aside>

<h1 id="twitter-api-v2-general">General</h1>

Miscellaneous endpoints for general API functionality

<a href="https://developer.twitter.com/en/docs/twitter-api">Find out more</a>

## Returns the OpenAPI Specification document.

<a id="opIdgetOpenApiSpec"></a>

> Code samples

```bash
curl https://example.com/2/openapi.json \
  -H 'Accept: application/json'
```

`GET /2/openapi.json`

Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)

> Example responses

> 200 Response

```json
{}
```

<h3 id="returns-the-openapi-specification-document-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request was successful|Inline|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="twitter-api-v2-lists">Lists</h1>

Endpoints related to retrieving, managing Lists

<a href="https://developer.twitter.com/en/docs/twitter-api/lists">Find out more</a>

## Create List

<a id="opIdlistIdCreate"></a>

> Code samples

```bash
curl https://example.com/2/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "private": false
  }'
```

`POST /2/lists`

Creates a new List.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/post-lists">External documentation</a>

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "private": false
}
```

<h3 id="create-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ListCreateRequest](#schemalistcreaterequest)|false|none|
|» description|body|string|false|none|
|» name|body|string|true|none|
|» private|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "id": "1146654567674912769",
    "name": "string"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="create-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListCreateResponse](#schemalistcreateresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.read list.write tweet.read users.read ), UserToken
</aside>

## List lookup by List ID.

<a id="opIdlistIdGet"></a>

> Code samples

```bash
curl https://example.com/2/lists/1146654567674912769 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/lists/{id}`

Returns a List.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-lists-id">External documentation</a>

<h3 id="list-lookup-by-list-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[ListId](#schemalistid)|true|The ID of the List.|
|list.fields|query|[string]|false|A comma separated list of List fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|list.fields|created_at|
|list.fields|description|
|list.fields|follower_count|
|list.fields|id|
|list.fields|member_count|
|list.fields|name|
|list.fields|owner_id|
|list.fields|private|
|expansions|owner_id|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": {
    "created_at": "1970-01-01T00:00:00Z",
    "description": "string",
    "follower_count": 0,
    "id": "1146654567674912769",
    "member_count": 0,
    "name": "string",
    "owner_id": "2244994945",
    "private": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-lookup-by-list-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2ListsIdResponse](#schemaget2listsidresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: list.read tweet.read users.read ), UserToken
</aside>

## Update List.

<a id="opIdlistIdUpdate"></a>

> Code samples

```bash
curl https://example.com/2/lists/1146654567674912769 \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "description": "string",
    "name": "string",
    "private": true
  }'
```

`PUT /2/lists/{id}`

Update a List that you own.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/put-lists-id">External documentation</a>

> Body parameter

```json
{
  "description": "string",
  "name": "string",
  "private": true
}
```

<h3 id="update-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[ListId](#schemalistid)|true|The ID of the List to modify.|
|body|body|[ListUpdateRequest](#schemalistupdaterequest)|false|none|
|» description|body|string|false|none|
|» name|body|string|false|none|
|» private|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "updated": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="update-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListUpdateResponse](#schemalistupdateresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.write tweet.read users.read ), UserToken
</aside>

## Delete List

<a id="opIdlistIdDelete"></a>

> Code samples

```bash
curl https://example.com/2/lists/1146654567674912769 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/lists/{id}`

Delete a List that you own.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/manage-lists/api-reference/delete-lists-id">External documentation</a>

<h3 id="delete-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[ListId](#schemalistid)|true|The ID of the List to delete.|

> Example responses

> 200 Response

```json
{
  "data": {
    "deleted": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="delete-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListDeleteResponse](#schemalistdeleteresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.write tweet.read users.read ), UserToken
</aside>

## Add a List member

<a id="opIdlistAddMember"></a>

> Code samples

```bash
curl https://example.com/2/lists/1146654567674912769/members \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "user_id": "2244994945"
  }'
```

`POST /2/lists/{id}/members`

Causes a User to become a member of a List.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/post-lists-id-members">External documentation</a>

> Body parameter

```json
{
  "user_id": "2244994945"
}
```

<h3 id="add-a-list-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[ListId](#schemalistid)|true|The ID of the List for which to add a member.|
|body|body|[ListAddUserRequest](#schemalistadduserrequest)|false|none|
|» user_id|body|[UserId](#schemauserid)|true|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

> Example responses

> 200 Response

```json
{
  "data": {
    "is_member": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="add-a-list-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListMutateResponse](#schemalistmutateresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.write tweet.read users.read ), UserToken
</aside>

## Remove a List member

<a id="opIdlistRemoveMember"></a>

> Code samples

```bash
curl https://example.com/2/lists/1146654567674912769/members/2244994945 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/lists/{id}/members/{user_id}`

Causes a User to be removed from the members of a List.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/delete-lists-id-members-user_id">External documentation</a>

<h3 id="remove-a-list-member-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[ListId](#schemalistid)|true|The ID of the List to remove a member.|
|user_id|path|[UserId](#schemauserid)|true|The ID of User that will be removed from the List.|

> Example responses

> 200 Response

```json
{
  "data": {
    "is_member": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="remove-a-list-member-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListMutateResponse](#schemalistmutateresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.write tweet.read users.read ), UserToken
</aside>

## Get User's Followed Lists

<a id="opIduserFollowedLists"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/followed_lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/followed_lists`

Returns a User's followed Lists.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/get-users-id-followed_lists">External documentation</a>

<h3 id="get-users-followed-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationTokenLong](#schemapaginationtokenlong)|false|This parameter is used to get a specified 'page' of results.|
|list.fields|query|[string]|false|A comma separated list of List fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|list.fields|created_at|
|list.fields|description|
|list.fields|follower_count|
|list.fields|id|
|list.fields|member_count|
|list.fields|name|
|list.fields|owner_id|
|list.fields|private|
|expansions|owner_id|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "follower_count": 0,
      "id": "1146654567674912769",
      "member_count": 0,
      "name": "string",
      "owner_id": "2244994945",
      "private": true
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-users-followed-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdFollowedListsResponse](#schemaget2usersidfollowedlistsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: list.read tweet.read users.read ), UserToken
</aside>

## Follow a List

<a id="opIdlistUserFollow"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/followed_lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "list_id": "1146654567674912769"
  }'
```

`POST /2/users/{id}/followed_lists`

Causes a User to follow a List.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/post-users-id-followed-lists">External documentation</a>

> Body parameter

```json
{
  "list_id": "1146654567674912769"
}
```

<h3 id="follow-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that will follow the List.|
|body|body|[ListFollowedRequest](#schemalistfollowedrequest)|false|none|
|» list_id|body|[ListId](#schemalistid)|true|The unique identifier of this List.|

> Example responses

> 200 Response

```json
{
  "data": {
    "following": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="follow-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListFollowedResponse](#schemalistfollowedresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.write tweet.read users.read ), UserToken
</aside>

## Unfollow a List

<a id="opIdlistUserUnfollow"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/followed_lists/1146654567674912769 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/users/{id}/followed_lists/{list_id}`

Causes a User to unfollow a List.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-follows/api-reference/delete-users-id-followed-lists-list_id">External documentation</a>

<h3 id="unfollow-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that will unfollow the List.|
|list_id|path|[ListId](#schemalistid)|true|The ID of the List to unfollow.|

> Example responses

> 200 Response

```json
{
  "data": {
    "following": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unfollow-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListFollowedResponse](#schemalistfollowedresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.write tweet.read users.read ), UserToken
</aside>

## Get a User's List Memberships

<a id="opIdgetUserListMemberships"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/list_memberships \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/list_memberships`

Get a User's List Memberships.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships">External documentation</a>

<h3 id="get-a-users-list-memberships-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationTokenLong](#schemapaginationtokenlong)|false|This parameter is used to get a specified 'page' of results.|
|list.fields|query|[string]|false|A comma separated list of List fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|list.fields|created_at|
|list.fields|description|
|list.fields|follower_count|
|list.fields|id|
|list.fields|member_count|
|list.fields|name|
|list.fields|owner_id|
|list.fields|private|
|expansions|owner_id|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "follower_count": 0,
      "id": "1146654567674912769",
      "member_count": 0,
      "name": "string",
      "owner_id": "2244994945",
      "private": true
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-users-list-memberships-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdListMembershipsResponse](#schemaget2usersidlistmembershipsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: list.read tweet.read users.read ), UserToken
</aside>

## Get a User's Owned Lists.

<a id="opIdlistUserOwnedLists"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/owned_lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/owned_lists`

Get a User's Owned Lists.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-lookup/api-reference/get-users-id-owned_lists">External documentation</a>

<h3 id="get-a-users-owned-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationTokenLong](#schemapaginationtokenlong)|false|This parameter is used to get a specified 'page' of results.|
|list.fields|query|[string]|false|A comma separated list of List fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|list.fields|created_at|
|list.fields|description|
|list.fields|follower_count|
|list.fields|id|
|list.fields|member_count|
|list.fields|name|
|list.fields|owner_id|
|list.fields|private|
|expansions|owner_id|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "follower_count": 0,
      "id": "1146654567674912769",
      "member_count": 0,
      "name": "string",
      "owner_id": "2244994945",
      "private": true
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-users-owned-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdOwnedListsResponse](#schemaget2usersidownedlistsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: list.read tweet.read users.read ), UserToken
</aside>

## Get a User's Pinned Lists

<a id="opIdlistUserPinnedLists"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/pinned_lists \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/pinned_lists`

Get a User's Pinned Lists.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/get-users-id-pinned_lists">External documentation</a>

<h3 id="get-a-users-pinned-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User for whom to return results.|
|list.fields|query|[string]|false|A comma separated list of List fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|list.fields|created_at|
|list.fields|description|
|list.fields|follower_count|
|list.fields|id|
|list.fields|member_count|
|list.fields|name|
|list.fields|owner_id|
|list.fields|private|
|expansions|owner_id|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "follower_count": 0,
      "id": "1146654567674912769",
      "member_count": 0,
      "name": "string",
      "owner_id": "2244994945",
      "private": true
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="get-a-users-pinned-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdPinnedListsResponse](#schemaget2usersidpinnedlistsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.read tweet.read users.read ), UserToken
</aside>

## Pin a List

<a id="opIdlistUserPin"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/pinned_lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "list_id": "1146654567674912769"
  }'
```

`POST /2/users/{id}/pinned_lists`

Causes a User to pin a List.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/post-users-id-pinned-lists">External documentation</a>

> Body parameter

```json
{
  "list_id": "1146654567674912769"
}
```

<h3 id="pin-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that will pin the List.|
|body|body|[ListPinnedRequest](#schemalistpinnedrequest)|true|none|
|» list_id|body|[ListId](#schemalistid)|true|The unique identifier of this List.|

> Example responses

> 200 Response

```json
{
  "data": {
    "pinned": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="pin-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListPinnedResponse](#schemalistpinnedresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.write tweet.read users.read ), UserToken
</aside>

## Unpin a List

<a id="opIdlistUserUnpin"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/pinned_lists/1146654567674912769 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/users/{id}/pinned_lists/{list_id}`

Causes a User to remove a pinned List.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/pinned-lists/api-reference/delete-users-id-pinned-lists-list_id">External documentation</a>

<h3 id="unpin-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User for whom to return results.|
|list_id|path|[ListId](#schemalistid)|true|The ID of the List to unpin.|

> Example responses

> 200 Response

```json
{
  "data": {
    "pinned": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unpin-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[ListUnpinResponse](#schemalistunpinresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: list.write tweet.read users.read ), UserToken
</aside>

<h1 id="twitter-api-v2-spaces">Spaces</h1>

Endpoints related to retrieving, managing Spaces

<a href="https://developer.twitter.com/en/docs/twitter-api/spaces">Find out more</a>

## Space lookup up Space IDs

<a id="opIdfindSpacesByIds"></a>

> Code samples

```bash
curl 'https://example.com/2/spaces?ids=1SLjjRYNejbKM' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/spaces`

Returns a variety of information about the Spaces specified by the requested IDs

<a href="https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces">External documentation</a>

<h3 id="space-lookup-up-space-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[string]|true|The list of Space IDs to return.|
|space.fields|query|[string]|false|A comma separated list of Space fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|topic.fields|query|[string]|false|A comma separated list of Topic fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|space.fields|created_at|
|space.fields|creator_id|
|space.fields|ended_at|
|space.fields|host_ids|
|space.fields|id|
|space.fields|invited_user_ids|
|space.fields|is_ticketed|
|space.fields|lang|
|space.fields|participant_count|
|space.fields|scheduled_start|
|space.fields|speaker_ids|
|space.fields|started_at|
|space.fields|state|
|space.fields|subscriber_count|
|space.fields|title|
|space.fields|topic_ids|
|space.fields|updated_at|
|expansions|creator_id|
|expansions|host_ids|
|expansions|invited_user_ids|
|expansions|speaker_ids|
|expansions|topic_ids|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|topic.fields|description|
|topic.fields|id|
|topic.fields|name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2021-07-06T18:40:40.000Z",
      "creator_id": "2244994945",
      "ended_at": "2021-07-06T18:40:40.000Z",
      "host_ids": [
        "2244994945"
      ],
      "id": "1SLjjRYNejbKM",
      "invited_user_ids": [
        "2244994945"
      ],
      "is_ticketed": "false",
      "lang": "en",
      "participant_count": 10,
      "scheduled_start": "2021-07-06T18:40:40.000Z",
      "speaker_ids": [
        "2244994945"
      ],
      "started_at": "2021-7-14T04:35:55Z",
      "state": "live",
      "subscriber_count": 10,
      "title": "Spaces are Awesome",
      "topics": [
        {
          "description": "All about technology",
          "id": "848920371311001600",
          "name": "Technology"
        }
      ],
      "updated_at": "2021-7-14T04:35:55Z"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="space-lookup-up-space-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2SpacesResponse](#schemaget2spacesresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: space.read tweet.read users.read )
</aside>

## Space lookup by their creators

<a id="opIdfindSpacesByCreatorIds"></a>

> Code samples

```bash
curl 'https://example.com/2/spaces/by/creator_ids?user_ids=2244994945' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/spaces/by/creator_ids`

Returns a variety of information about the Spaces created by the provided User IDs

<a href="https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-by-creator-ids">External documentation</a>

<h3 id="space-lookup-by-their-creators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_ids|query|[[UserId](#schemauserid)]|true|The IDs of Users to search through.|
|space.fields|query|[string]|false|A comma separated list of Space fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|topic.fields|query|[string]|false|A comma separated list of Topic fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|space.fields|created_at|
|space.fields|creator_id|
|space.fields|ended_at|
|space.fields|host_ids|
|space.fields|id|
|space.fields|invited_user_ids|
|space.fields|is_ticketed|
|space.fields|lang|
|space.fields|participant_count|
|space.fields|scheduled_start|
|space.fields|speaker_ids|
|space.fields|started_at|
|space.fields|state|
|space.fields|subscriber_count|
|space.fields|title|
|space.fields|topic_ids|
|space.fields|updated_at|
|expansions|creator_id|
|expansions|host_ids|
|expansions|invited_user_ids|
|expansions|speaker_ids|
|expansions|topic_ids|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|topic.fields|description|
|topic.fields|id|
|topic.fields|name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2021-07-06T18:40:40.000Z",
      "creator_id": "2244994945",
      "ended_at": "2021-07-06T18:40:40.000Z",
      "host_ids": [
        "2244994945"
      ],
      "id": "1SLjjRYNejbKM",
      "invited_user_ids": [
        "2244994945"
      ],
      "is_ticketed": "false",
      "lang": "en",
      "participant_count": 10,
      "scheduled_start": "2021-07-06T18:40:40.000Z",
      "speaker_ids": [
        "2244994945"
      ],
      "started_at": "2021-7-14T04:35:55Z",
      "state": "live",
      "subscriber_count": 10,
      "title": "Spaces are Awesome",
      "topics": [
        {
          "description": "All about technology",
          "id": "848920371311001600",
          "name": "Technology"
        }
      ],
      "updated_at": "2021-7-14T04:35:55Z"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="space-lookup-by-their-creators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2SpacesByCreatorIdsResponse](#schemaget2spacesbycreatoridsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: space.read tweet.read users.read )
</aside>

## Search for Spaces

<a id="opIdsearchSpaces"></a>

> Code samples

```bash
curl 'https://example.com/2/spaces/search?query=crypto' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/spaces/search`

Returns Spaces that match the provided query.

<a href="https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search">External documentation</a>

<h3 id="search-for-spaces-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|The search query.|
|state|query|string|false|The state of Spaces to search for.|
|max_results|query|integer(int32)|false|The number of results to return.|
|space.fields|query|[string]|false|A comma separated list of Space fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|topic.fields|query|[string]|false|A comma separated list of Topic fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|live|
|state|scheduled|
|state|all|
|space.fields|created_at|
|space.fields|creator_id|
|space.fields|ended_at|
|space.fields|host_ids|
|space.fields|id|
|space.fields|invited_user_ids|
|space.fields|is_ticketed|
|space.fields|lang|
|space.fields|participant_count|
|space.fields|scheduled_start|
|space.fields|speaker_ids|
|space.fields|started_at|
|space.fields|state|
|space.fields|subscriber_count|
|space.fields|title|
|space.fields|topic_ids|
|space.fields|updated_at|
|expansions|creator_id|
|expansions|host_ids|
|expansions|invited_user_ids|
|expansions|speaker_ids|
|expansions|topic_ids|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|topic.fields|description|
|topic.fields|id|
|topic.fields|name|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2021-07-06T18:40:40.000Z",
      "creator_id": "2244994945",
      "ended_at": "2021-07-06T18:40:40.000Z",
      "host_ids": [
        "2244994945"
      ],
      "id": "1SLjjRYNejbKM",
      "invited_user_ids": [
        "2244994945"
      ],
      "is_ticketed": "false",
      "lang": "en",
      "participant_count": 10,
      "scheduled_start": "2021-07-06T18:40:40.000Z",
      "speaker_ids": [
        "2244994945"
      ],
      "started_at": "2021-7-14T04:35:55Z",
      "state": "live",
      "subscriber_count": 10,
      "title": "Spaces are Awesome",
      "topics": [
        {
          "description": "All about technology",
          "id": "848920371311001600",
          "name": "Technology"
        }
      ],
      "updated_at": "2021-7-14T04:35:55Z"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="search-for-spaces-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2SpacesSearchResponse](#schemaget2spacessearchresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: space.read tweet.read users.read )
</aside>

## Space lookup by Space ID

<a id="opIdfindSpaceById"></a>

> Code samples

```bash
curl https://example.com/2/spaces/1YqKDqWqdPLsV \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/spaces/{id}`

Returns a variety of information about the Space specified by the requested ID

<a href="https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id">External documentation</a>

<h3 id="space-lookup-by-space-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Space to be retrieved.|
|space.fields|query|[string]|false|A comma separated list of Space fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|topic.fields|query|[string]|false|A comma separated list of Topic fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|space.fields|created_at|
|space.fields|creator_id|
|space.fields|ended_at|
|space.fields|host_ids|
|space.fields|id|
|space.fields|invited_user_ids|
|space.fields|is_ticketed|
|space.fields|lang|
|space.fields|participant_count|
|space.fields|scheduled_start|
|space.fields|speaker_ids|
|space.fields|started_at|
|space.fields|state|
|space.fields|subscriber_count|
|space.fields|title|
|space.fields|topic_ids|
|space.fields|updated_at|
|expansions|creator_id|
|expansions|host_ids|
|expansions|invited_user_ids|
|expansions|speaker_ids|
|expansions|topic_ids|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|topic.fields|description|
|topic.fields|id|
|topic.fields|name|

> Example responses

> 200 Response

```json
{
  "data": {
    "created_at": "2021-07-06T18:40:40.000Z",
    "creator_id": "2244994945",
    "ended_at": "2021-07-06T18:40:40.000Z",
    "host_ids": [
      "2244994945"
    ],
    "id": "1SLjjRYNejbKM",
    "invited_user_ids": [
      "2244994945"
    ],
    "is_ticketed": "false",
    "lang": "en",
    "participant_count": 10,
    "scheduled_start": "2021-07-06T18:40:40.000Z",
    "speaker_ids": [
      "2244994945"
    ],
    "started_at": "2021-7-14T04:35:55Z",
    "state": "live",
    "subscriber_count": 10,
    "title": "Spaces are Awesome",
    "topics": [
      {
        "description": "All about technology",
        "id": "848920371311001600",
        "name": "Technology"
      }
    ],
    "updated_at": "2021-7-14T04:35:55Z"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="space-lookup-by-space-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2SpacesIdResponse](#schemaget2spacesidresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: space.read tweet.read users.read )
</aside>

## Retrieve the list of Users who purchased a ticket to the given space

<a id="opIdspaceBuyers"></a>

> Code samples

```bash
curl https://example.com/2/spaces/1YqKDqWqdPLsV/buyers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/spaces/{id}/buyers`

Retrieves the list of Users who purchased a ticket to the given space

<a href="https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-buyers">External documentation</a>

<h3 id="retrieve-the-list-of-users-who-purchased-a-ticket-to-the-given-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Space to be retrieved.|
|pagination_token|query|[PaginationToken32](#schemapaginationtoken32)|false|This parameter is used to get a specified 'page' of results.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-the-list-of-users-who-purchased-a-ticket-to-the-given-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2SpacesIdBuyersResponse](#schemaget2spacesidbuyersresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: space.read tweet.read users.read )
</aside>

## Retrieve Tweets from a Space.

<a id="opIdspaceTweets"></a>

> Code samples

```bash
curl https://example.com/2/spaces/1YqKDqWqdPLsV/tweets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/spaces/{id}/tweets`

Retrieves Tweets shared in the specified Space.

<a href="https://developer.twitter.com/en/docs/twitter-api/spaces/lookup/api-reference/get-spaces-id-tweets">External documentation</a>

<h3 id="retrieve-tweets-from-a-space-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The ID of the Space to be retrieved.|
|max_results|query|integer(int32)|false|The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-tweets-from-a-space-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2SpacesIdTweetsResponse](#schemaget2spacesidtweetsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: space.read tweet.read users.read )
</aside>

<h1 id="twitter-api-v2-tweets">Tweets</h1>

Endpoints related to retrieving, searching, and modifying Tweets

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/lookup">Find out more</a>

## List Tweets timeline by List ID.

<a id="opIdlistsIdTweets"></a>

> Code samples

```bash
curl https://example.com/2/lists/1146654567674912769/tweets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/lists/{id}/tweets`

Returns a list of Tweets associated with the provided List ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-tweets/api-reference/get-lists-id-tweets">External documentation</a>

<h3 id="list-tweets-timeline-by-list-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[ListId](#schemalistid)|true|The ID of the List.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="list-tweets-timeline-by-list-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2ListsIdTweetsResponse](#schemaget2listsidtweetsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: list.read tweet.read users.read ), UserToken
</aside>

## Tweet lookup by Tweet IDs

<a id="opIdfindTweetsById"></a>

> Code samples

```bash
curl 'https://example.com/2/tweets?ids=1346889436626259968' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets`

Returns a variety of information about the Tweet specified by the requested ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets">External documentation</a>

<h3 id="tweet-lookup-by-tweet-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[[TweetId](#schematweetid)]|true|A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="tweet-lookup-by-tweet-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsResponse](#schemaget2tweetsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## Creation of a Tweet

<a id="opIdcreateTweet"></a>

> Code samples

```bash
curl https://example.com/2/tweets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "card_uri": "string",
    "direct_message_deep_link": "string",
    "for_super_followers_only": false,
    "geo": {
      "place_id": "string"
    },
    "media": {
      "media_ids": [
        "1146654567674912769"
      ],
      "tagged_user_ids": [
        "2244994945"
      ]
    },
    "nullcast": false,
    "poll": {
      "duration_minutes": 5,
      "options": [
        "string",
        "string"
      ],
      "reply_settings": "following"
    },
    "quote_tweet_id": "1346889436626259968",
    "reply": {
      "exclude_reply_user_ids": [
        "2244994945"
      ],
      "in_reply_to_tweet_id": "1346889436626259968"
    },
    "reply_settings": "following",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  }'
```

`POST /2/tweets`

Causes the User to create a Tweet under the authorized account.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/post-tweets">External documentation</a>

> Body parameter

```json
{
  "card_uri": "string",
  "direct_message_deep_link": "string",
  "for_super_followers_only": false,
  "geo": {
    "place_id": "string"
  },
  "media": {
    "media_ids": [
      "1146654567674912769"
    ],
    "tagged_user_ids": [
      "2244994945"
    ]
  },
  "nullcast": false,
  "poll": {
    "duration_minutes": 5,
    "options": [
      "string",
      "string"
    ],
    "reply_settings": "following"
  },
  "quote_tweet_id": "1346889436626259968",
  "reply": {
    "exclude_reply_user_ids": [
      "2244994945"
    ],
    "in_reply_to_tweet_id": "1346889436626259968"
  },
  "reply_settings": "following",
  "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
}
```

<h3 id="creation-of-a-tweet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[TweetCreateRequest](#schematweetcreaterequest)|true|none|
|» card_uri|body|string|false|Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link.|
|» direct_message_deep_link|body|string|false|Link to take the conversation from the public timeline to a private Direct Message.|
|» for_super_followers_only|body|boolean|false|Exclusive Tweet for super followers.|
|» geo|body|object|false|Place ID being attached to the Tweet for geo location.|
|» » place_id|body|string|false|none|
|» media|body|object|false|Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI.|
|» » media_ids|body|[[MediaId](#schemamediaid)]|true|A list of Media Ids to be attached to a created Tweet.|
|» » tagged_user_ids|body|[[UserId](#schemauserid)]|false|A list of User Ids to be tagged in the media for created Tweet.|
|» nullcast|body|boolean|false|Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers.|
|» poll|body|object|false|Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI.|
|» » duration_minutes|body|integer(int32)|true|Duration of the poll in minutes.|
|» » options|body|[string]|true|none|
|» » reply_settings|body|string|false|Settings to indicate who can reply to the Tweet.|
|» quote_tweet_id|body|[TweetId](#schematweetid)|false|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|» reply|body|object|false|Tweet information of the Tweet being replied to.|
|» » exclude_reply_user_ids|body|[[UserId](#schemauserid)]|false|A list of User Ids to be excluded from the reply Tweet.|
|» » in_reply_to_tweet_id|body|[TweetId](#schematweetid)|true|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|» reply_settings|body|string|false|Settings to indicate who can reply to the Tweet.|
|» text|body|[TweetText](#schematweettext)|false|The content of the Tweet.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» » reply_settings|following|
|» » reply_settings|mentionedUsers|
|» reply_settings|following|
|» reply_settings|mentionedUsers|

> Example responses

> 201 Response

```json
{
  "data": {
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="creation-of-a-tweet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|The request has succeeded.|[TweetCreateResponse](#schematweetcreateresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: tweet.read tweet.write users.read ), UserToken
</aside>

## Full archive search counts

<a id="opIdtweetCountsFullArchiveSearch"></a>

> Code samples

```bash
curl 'https://example.com/2/tweets/counts/all?query=(from%3ATwitterDev%20OR%20from%3ATwitterAPI)%20has%3Amedia%20-is%3Aretweet' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/counts/all`

Returns Tweet Counts that match a search query.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all">External documentation</a>

<h3 id="full-archive-search-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).|
|since_id|query|[TweetId](#schematweetid)|false|Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.|
|until_id|query|[TweetId](#schematweetid)|false|Returns results with a Tweet ID less than (that is, older than) the specified ID.|
|next_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.|
|granularity|query|string|false|The granularity for the search counts results.|
|search_count.fields|query|[string]|false|A comma separated list of SearchCount fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|granularity|minute|
|granularity|hour|
|granularity|day|
|search_count.fields|end|
|search_count.fields|start|
|search_count.fields|tweet_count|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "end": "1970-01-01T00:00:00Z",
      "start": "1970-01-01T00:00:00Z",
      "tweet_count": 0
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "total_tweet_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="full-archive-search-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsCountsAllResponse](#schemaget2tweetscountsallresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Recent search counts

<a id="opIdtweetCountsRecentSearch"></a>

> Code samples

```bash
curl 'https://example.com/2/tweets/counts/recent?query=(from%3ATwitterDev%20OR%20from%3ATwitterAPI)%20has%3Amedia%20-is%3Aretweet' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/counts/recent`

Returns Tweet Counts from the last 7 days that match a search query.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/counts/api-reference/get-tweets-counts-recent">External documentation</a>

<h3 id="recent-search-counts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).|
|since_id|query|[TweetId](#schematweetid)|false|Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.|
|until_id|query|[TweetId](#schematweetid)|false|Returns results with a Tweet ID less than (that is, older than) the specified ID.|
|next_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.|
|granularity|query|string|false|The granularity for the search counts results.|
|search_count.fields|query|[string]|false|A comma separated list of SearchCount fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|granularity|minute|
|granularity|hour|
|granularity|day|
|search_count.fields|end|
|search_count.fields|start|
|search_count.fields|tweet_count|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "end": "1970-01-01T00:00:00Z",
      "start": "1970-01-01T00:00:00Z",
      "tweet_count": 0
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "total_tweet_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="recent-search-counts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsCountsRecentResponse](#schemaget2tweetscountsrecentresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Firehose stream

<a id="opIdgetTweetsFirehoseStream"></a>

> Code samples

```bash
curl 'https://example.com/2/tweets/firehose/stream?partition=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/firehose/stream`

Streams 100% of public Tweets.

<h3 id="firehose-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_minutes|query|integer(int32)|false|The number of minutes of backfill requested.|
|partition|query|integer(int32)|true|The partition number.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="firehose-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[StreamingTweetResponse](#schemastreamingtweetresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Sample stream

<a id="opIdsampleStream"></a>

> Code samples

```bash
curl https://example.com/2/tweets/sample/stream \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/sample/stream`

Streams a deterministic 1% of public Tweets.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/volume-streams/api-reference/get-tweets-sample-stream">External documentation</a>

<h3 id="sample-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_minutes|query|integer(int32)|false|The number of minutes of backfill requested.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="sample-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[StreamingTweetResponse](#schemastreamingtweetresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Sample 10% stream

<a id="opIdgetTweetsSample10Stream"></a>

> Code samples

```bash
curl 'https://example.com/2/tweets/sample10/stream?partition=1' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/sample10/stream`

Streams a deterministic 10% of public Tweets.

<h3 id="sample-10-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_minutes|query|integer(int32)|false|The number of minutes of backfill requested.|
|partition|query|integer(int32)|true|The partition number.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="sample-10-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsSample10StreamResponse](#schemaget2tweetssample10streamresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Full-archive search

<a id="opIdtweetsFullarchiveSearch"></a>

> Code samples

```bash
curl 'https://example.com/2/tweets/search/all?query=(from%3ATwitterDev%20OR%20from%3ATwitterAPI)%20has%3Amedia%20-is%3Aretweet' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/search/all`

Returns Tweets that match a search query.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-all">External documentation</a>

<h3 id="full-archive-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).|
|since_id|query|[TweetId](#schematweetid)|false|Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.|
|until_id|query|[TweetId](#schematweetid)|false|Returns results with a Tweet ID less than (that is, older than) the specified ID.|
|max_results|query|integer(int32)|false|The maximum number of search results to be returned by a request.|
|next_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.|
|sort_order|query|string|false|This order in which to return results.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|recency|
|sort_order|relevancy|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="full-archive-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsSearchAllResponse](#schemaget2tweetssearchallresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Recent search

<a id="opIdtweetsRecentSearch"></a>

> Code samples

```bash
curl 'https://example.com/2/tweets/search/recent?query=(from%3ATwitterDev%20OR%20from%3ATwitterAPI)%20has%3Amedia%20-is%3Aretweet' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/search/recent`

Returns Tweets from the last 7 days that match a search query.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/search/api-reference/get-tweets-search-recent">External documentation</a>

<h3 id="recent-search-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|query|query|string|true|One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).|
|since_id|query|[TweetId](#schematweetid)|false|Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.|
|until_id|query|[TweetId](#schematweetid)|false|Returns results with a Tweet ID less than (that is, older than) the specified ID.|
|max_results|query|integer(int32)|false|The maximum number of search results to be returned by a request.|
|next_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.|
|sort_order|query|string|false|This order in which to return results.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort_order|recency|
|sort_order|relevancy|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="recent-search-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsSearchRecentResponse](#schemaget2tweetssearchrecentresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## Filtered stream

<a id="opIdsearchStream"></a>

> Code samples

```bash
curl https://example.com/2/tweets/search/stream \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/search/stream`

Streams Tweets matching the stream's active rule set.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream">External documentation</a>

<h3 id="filtered-stream-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|backfill_minutes|query|integer(int32)|false|The number of minutes of backfill requested.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "matching_rules": [
    {
      "id": "120897978112909812",
      "tag": "Non-retweeted coffee Tweets"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="filtered-stream-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[FilteredStreamingTweetResponse](#schemafilteredstreamingtweetresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Rules lookup

<a id="opIdgetRules"></a>

> Code samples

```bash
curl https://example.com/2/tweets/search/stream/rules \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/search/stream/rules`

Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream-rules">External documentation</a>

<h3 id="rules-lookup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[[RuleId](#schemaruleid)]|false|A comma-separated list of Rule IDs.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|string|false|This value is populated by passing the 'next_token' returned in a request to paginate through results.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "120897978112909812",
      "tag": "Non-retweeted coffee Tweets",
      "value": "coffee -is:retweet"
    }
  ],
  "meta": {
    "next_token": "string",
    "result_count": 0,
    "sent": "string",
    "summary": {
      "created": 1,
      "invalid": 1,
      "not_created": 1,
      "valid": 1
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="rules-lookup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[RulesLookupResponse](#schemaruleslookupresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Add/Delete rules

<a id="opIdaddOrDeleteRules"></a>

> Code samples

```bash
curl https://example.com/2/tweets/search/stream/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "add": [
      {
        "tag": "Non-retweeted coffee Tweets",
        "value": "coffee -is:retweet"
      }
    ]
  }'
```

`POST /2/tweets/search/stream/rules`

Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/post-tweets-search-stream-rules">External documentation</a>

> Body parameter

```json
{
  "add": [
    {
      "tag": "Non-retweeted coffee Tweets",
      "value": "coffee -is:retweet"
    }
  ]
}
```

<h3 id="adddelete-rules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|dry_run|query|boolean|false|Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.|
|body|body|[AddOrDeleteRulesRequest](#schemaaddordeleterulesrequest)|true|none|
|» *oneOf*|body|[AddRulesRequest](#schemaaddrulesrequest)|false|A request to add a user-specified stream filtering rule.|
|» *oneOf*|body|[DeleteRulesRequest](#schemadeleterulesrequest)|false|A response from deleting user-specified stream filtering rules.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "120897978112909812",
      "tag": "Non-retweeted coffee Tweets",
      "value": "coffee -is:retweet"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "meta": {
    "next_token": "string",
    "result_count": 0,
    "sent": "string",
    "summary": {
      "created": 1,
      "invalid": 1,
      "not_created": 1,
      "valid": 1
    }
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="adddelete-rules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[AddOrDeleteRulesResponse](#schemaaddordeleterulesresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken
</aside>

## Tweet lookup by Tweet ID

<a id="opIdfindTweetById"></a>

> Code samples

```bash
curl https://example.com/2/tweets/1346889436626259968 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/{id}`

Returns a variety of information about the Tweet specified by the requested ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/lookup/api-reference/get-tweets-id">External documentation</a>

<h3 id="tweet-lookup-by-tweet-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TweetId](#schematweetid)|true|A single Tweet ID.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="tweet-lookup-by-tweet-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsIdResponse](#schemaget2tweetsidresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## Tweet delete by Tweet ID

<a id="opIddeleteTweetById"></a>

> Code samples

```bash
curl https://example.com/2/tweets/1346889436626259968 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/tweets/{id}`

Delete specified Tweet (in the path) by ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/manage-tweets/api-reference/delete-tweets-id">External documentation</a>

<h3 id="tweet-delete-by-tweet-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TweetId](#schematweetid)|true|The ID of the Tweet to be deleted.|

> Example responses

> 200 Response

```json
{
  "data": {
    "deleted": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="tweet-delete-by-tweet-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TweetDeleteResponse](#schematweetdeleteresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: tweet.read tweet.write users.read ), UserToken
</aside>

## Retrieve Tweets that quote a Tweet.

<a id="opIdfindTweetsThatQuoteATweet"></a>

> Code samples

```bash
curl https://example.com/2/tweets/1346889436626259968/quote_tweets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/{id}/quote_tweets`

Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/quote-tweets/api-reference/get-tweets-id-quote_tweets">External documentation</a>

<h3 id="retrieve-tweets-that-quote-a-tweet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TweetId](#schematweetid)|true|A single Tweet ID.|
|max_results|query|integer(int32)|false|The maximum number of results to be returned.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get a specified 'page' of results.|
|exclude|query|[string]|false|The set of entities to exclude (e.g. 'replies' or 'retweets').|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exclude|replies|
|exclude|retweets|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="retrieve-tweets-that-quote-a-tweet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsIdQuoteTweetsResponse](#schemaget2tweetsidquotetweetsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## Hide replies

<a id="opIdhideReplyById"></a>

> Code samples

```bash
curl https://example.com/2/tweets/1346889436626259968/hidden \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "hidden": true
  }'
```

`PUT /2/tweets/{tweet_id}/hidden`

Hides or unhides a reply to an owned conversation.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/hide-replies/api-reference/put-tweets-id-hidden">External documentation</a>

> Body parameter

```json
{
  "hidden": true
}
```

<h3 id="hide-replies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tweet_id|path|[TweetId](#schematweetid)|true|The ID of the reply that you want to hide or unhide.|
|body|body|[TweetHideRequest](#schematweethiderequest)|false|none|
|» hidden|body|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "hidden": true
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="hide-replies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[TweetHideResponse](#schematweethideresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: tweet.moderate.write tweet.read users.read ), UserToken
</aside>

## Returns Tweet objects liked by the provided User ID

<a id="opIdusersIdLikedTweets"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/liked_tweets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/liked_tweets`

Returns a list of Tweets liked by the provided User ID

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-users-id-liked_tweets">External documentation</a>

<h3 id="returns-tweet-objects-liked-by-the-provided-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="returns-tweet-objects-liked-by-the-provided-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdLikedTweetsResponse](#schemaget2usersidlikedtweetsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: like.read tweet.read users.read ), UserToken
</aside>

## Causes the User (in the path) to like the specified Tweet

<a id="opIdusersIdLike"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/likes \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tweet_id": "1346889436626259968"
  }'
```

`POST /2/users/{id}/likes`

Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/post-users-id-likes">External documentation</a>

> Body parameter

```json
{
  "tweet_id": "1346889436626259968"
}
```

<h3 id="causes-the-user-in-the-path-to-like-the-specified-tweet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to like the Tweet.|
|body|body|[UsersLikesCreateRequest](#schemauserslikescreaterequest)|false|none|
|» tweet_id|body|[TweetId](#schematweetid)|true|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

> Example responses

> 200 Response

```json
{
  "data": {
    "liked": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="causes-the-user-in-the-path-to-like-the-specified-tweet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[UsersLikesCreateResponse](#schemauserslikescreateresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: like.write tweet.read users.read ), UserToken
</aside>

## Causes the User (in the path) to unlike the specified Tweet

<a id="opIdusersIdUnlike"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/likes/1346889436626259968 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/users/{id}/likes/{tweet_id}`

Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/delete-users-id-likes-tweet_id">External documentation</a>

<h3 id="causes-the-user-in-the-path-to-unlike-the-specified-tweet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to unlike the Tweet.|
|tweet_id|path|[TweetId](#schematweetid)|true|The ID of the Tweet that the User is requesting to unlike.|

> Example responses

> 200 Response

```json
{
  "data": {
    "liked": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="causes-the-user-in-the-path-to-unlike-the-specified-tweet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[UsersLikesDeleteResponse](#schemauserslikesdeleteresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: like.write tweet.read users.read ), UserToken
</aside>

## User mention timeline by User ID

<a id="opIdusersIdMentions"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/mentions \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/mentions`

Returns Tweet objects that mention username associated to the provided User ID

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-mentions">External documentation</a>

<h3 id="user-mention-timeline-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|since_id|query|[TweetId](#schematweetid)|false|The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.|
|until_id|query|[TweetId](#schematweetid)|false|The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results.|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="user-mention-timeline-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdMentionsResponse](#schemaget2usersidmentionsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## Causes the User (in the path) to retweet the specified Tweet.

<a id="opIdusersIdRetweets"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/retweets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "tweet_id": "1346889436626259968"
  }'
```

`POST /2/users/{id}/retweets`

Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/post-users-id-retweets">External documentation</a>

> Body parameter

```json
{
  "tweet_id": "1346889436626259968"
}
```

<h3 id="causes-the-user-in-the-path-to-retweet-the-specified-tweet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to retweet the Tweet.|
|body|body|[UsersRetweetsCreateRequest](#schemausersretweetscreaterequest)|false|none|
|» tweet_id|body|[TweetId](#schematweetid)|true|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

> Example responses

> 200 Response

```json
{
  "data": {
    "retweeted": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="causes-the-user-in-the-path-to-retweet-the-specified-tweet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[UsersRetweetsCreateResponse](#schemausersretweetscreateresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: tweet.read tweet.write users.read ), UserToken
</aside>

## Causes the User (in the path) to unretweet the specified Tweet

<a id="opIdusersIdUnretweets"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/retweets/1346889436626259968 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/users/{id}/retweets/{source_tweet_id}`

Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/delete-users-id-retweets-tweet_id">External documentation</a>

<h3 id="causes-the-user-in-the-path-to-unretweet-the-specified-tweet-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to retweet the Tweet.|
|source_tweet_id|path|[TweetId](#schematweetid)|true|The ID of the Tweet that the User is requesting to unretweet.|

> Example responses

> 200 Response

```json
{
  "data": {
    "retweeted": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="causes-the-user-in-the-path-to-unretweet-the-specified-tweet-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[UsersRetweetsDeleteResponse](#schemausersretweetsdeleteresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: tweet.read tweet.write users.read ), UserToken
</aside>

## User home timeline by User ID

<a id="opIdusersIdTimeline"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/timelines/reverse_chronological \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/timelines/reverse_chronological`

Returns Tweet objects that appears in the provided User ID's home timeline

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-reverse-chronological">External documentation</a>

<h3 id="user-home-timeline-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.|
|since_id|query|[TweetId](#schematweetid)|false|The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.|
|until_id|query|[TweetId](#schematweetid)|false|The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results.|
|exclude|query|[string]|false|The set of entities to exclude (e.g. 'replies' or 'retweets').|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exclude|replies|
|exclude|retweets|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="user-home-timeline-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdTimelinesReverseChronologicalResponse](#schemaget2usersidtimelinesreversechronologicalresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## User Tweets timeline by User ID

<a id="opIdusersIdTweets"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/tweets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/tweets`

Returns a list of Tweets authored by the provided User ID

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-tweets">External documentation</a>

<h3 id="user-tweets-timeline-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|since_id|query|[TweetId](#schematweetid)|false|The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.|
|until_id|query|[TweetId](#schematweetid)|false|The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results.|
|exclude|query|[string]|false|The set of entities to exclude (e.g. 'replies' or 'retweets').|
|start_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.|
|end_time|query|string(date-time)|false|YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|media.fields|query|[string]|false|A comma separated list of Media fields to display.|
|poll.fields|query|[string]|false|A comma separated list of Poll fields to display.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|place.fields|query|[string]|false|A comma separated list of Place fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|exclude|replies|
|exclude|retweets|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|
|expansions|attachments.media_keys|
|expansions|attachments.poll_ids|
|expansions|author_id|
|expansions|edit_history_tweet_ids|
|expansions|entities.mentions.username|
|expansions|geo.place_id|
|expansions|in_reply_to_user_id|
|expansions|referenced_tweets.id|
|expansions|referenced_tweets.id.author_id|
|media.fields|alt_text|
|media.fields|duration_ms|
|media.fields|height|
|media.fields|media_key|
|media.fields|non_public_metrics|
|media.fields|organic_metrics|
|media.fields|preview_image_url|
|media.fields|promoted_metrics|
|media.fields|public_metrics|
|media.fields|type|
|media.fields|url|
|media.fields|variants|
|media.fields|width|
|poll.fields|duration_minutes|
|poll.fields|end_datetime|
|poll.fields|id|
|poll.fields|options|
|poll.fields|voting_status|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|place.fields|contained_within|
|place.fields|country|
|place.fields|country_code|
|place.fields|full_name|
|place.fields|geo|
|place.fields|id|
|place.fields|name|
|place.fields|place_type|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="user-tweets-timeline-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdTweetsResponse](#schemaget2usersidtweetsresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

<h1 id="twitter-api-v2-users">Users</h1>

Endpoints related to retrieving, managing relationships of Users

<a href="https://developer.twitter.com/en/docs/twitter-api/users/lookup">Find out more</a>

## Returns User objects that follow a List by the provided List ID

<a id="opIdlistGetFollowers"></a>

> Code samples

```bash
curl https://example.com/2/lists/1146654567674912769/followers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/lists/{id}/followers`

Returns a list of Users that follow a List by the provided List ID

<a href="https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers">External documentation</a>

<h3 id="returns-user-objects-that-follow-a-list-by-the-provided-list-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[ListId](#schemalistid)|true|The ID of the List.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationTokenLong](#schemapaginationtokenlong)|false|This parameter is used to get a specified 'page' of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="returns-user-objects-that-follow-a-list-by-the-provided-list-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2ListsIdFollowersResponse](#schemaget2listsidfollowersresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: list.read tweet.read users.read ), UserToken
</aside>

## Returns User objects that are members of a List by the provided List ID.

<a id="opIdlistGetMembers"></a>

> Code samples

```bash
curl https://example.com/2/lists/1146654567674912769/members \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/lists/{id}/members`

Returns a list of Users that are members of a List by the provided List ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/lists/list-members/api-reference/get-users-id-list_memberships">External documentation</a>

<h3 id="returns-user-objects-that-are-members-of-a-list-by-the-provided-list-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[ListId](#schemalistid)|true|The ID of the List.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationTokenLong](#schemapaginationtokenlong)|false|This parameter is used to get a specified 'page' of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="returns-user-objects-that-are-members-of-a-list-by-the-provided-list-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2ListsIdMembersResponse](#schemaget2listsidmembersresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: list.read tweet.read users.read ), UserToken
</aside>

## Returns User objects that have liked the provided Tweet ID

<a id="opIdtweetsIdLikingUsers"></a>

> Code samples

```bash
curl https://example.com/2/tweets/1346889436626259968/liking_users \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/{id}/liking_users`

Returns a list of Users that have liked the provided Tweet ID

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/likes/api-reference/get-tweets-id-liking_users">External documentation</a>

<h3 id="returns-user-objects-that-have-liked-the-provided-tweet-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TweetId](#schematweetid)|true|A single Tweet ID.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="returns-user-objects-that-have-liked-the-provided-tweet-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsIdLikingUsersResponse](#schemaget2tweetsidlikingusersresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: like.read tweet.read users.read ), UserToken
</aside>

## Returns User objects that have retweeted the provided Tweet ID

<a id="opIdtweetsIdRetweetingUsers"></a>

> Code samples

```bash
curl https://example.com/2/tweets/1346889436626259968/retweeted_by \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/tweets/{id}/retweeted_by`

Returns a list of Users that have retweeted the provided Tweet ID

<a href="https://developer.twitter.com/en/docs/twitter-api/tweets/retweets/api-reference/get-tweets-id-retweeted_by">External documentation</a>

<h3 id="returns-user-objects-that-have-retweeted-the-provided-tweet-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[TweetId](#schematweetid)|true|A single Tweet ID.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken36](#schemapaginationtoken36)|false|This parameter is used to get the next 'page' of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="returns-user-objects-that-have-retweeted-the-provided-tweet-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2TweetsIdRetweetedByResponse](#schemaget2tweetsidretweetedbyresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## User lookup by IDs

<a id="opIdfindUsersById"></a>

> Code samples

```bash
curl 'https://example.com/2/users?ids=2244994945%2C6253282%2C12' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users`

This endpoint returns information about Users. Specify Users by their ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users">External documentation</a>

<h3 id="user-lookup-by-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ids|query|[[UserId](#schemauserid)]|true|A list of User IDs, comma-separated. You can specify up to 100 IDs.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="user-lookup-by-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersResponse](#schemaget2usersresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## User lookup by usernames

<a id="opIdfindUsersByUsername"></a>

> Code samples

```bash
curl 'https://example.com/2/users/by?usernames=TwitterDev%2CTwitterAPI' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/by`

This endpoint returns information about Users. Specify Users by their username.

<a href="https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by">External documentation</a>

<h3 id="user-lookup-by-usernames-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|usernames|query|[string]|true|A list of usernames, comma-separated.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="user-lookup-by-usernames-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersByResponse](#schemaget2usersbyresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## User lookup by username

<a id="opIdfindUserByUsername"></a>

> Code samples

```bash
curl https://example.com/2/users/by/username/TwitterDev \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/by/username/{username}`

This endpoint returns information about a User. Specify User by username.

<a href="https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by-username-username">External documentation</a>

<h3 id="user-lookup-by-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|path|string|true|A username.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": {
    "created_at": "2013-12-14T04:35:55Z",
    "id": "2244994945",
    "name": "Twitter Dev",
    "protected": false,
    "username": "TwitterDev"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="user-lookup-by-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersByUsernameUsernameResponse](#schemaget2usersbyusernameusernameresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## User lookup me

<a id="opIdfindMyUser"></a>

> Code samples

```bash
curl https://example.com/2/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/me`

This endpoint returns information about the requesting User.

<a href="https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me">External documentation</a>

<h3 id="user-lookup-me-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": {
    "created_at": "2013-12-14T04:35:55Z",
    "id": "2244994945",
    "name": "Twitter Dev",
    "protected": false,
    "username": "TwitterDev"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="user-lookup-me-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersMeResponse](#schemaget2usersmeresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## User lookup by ID

<a id="opIdfindUserById"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}`

This endpoint returns information about a User. Specify User by ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-id">External documentation</a>

<h3 id="user-lookup-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": {
    "created_at": "2013-12-14T04:35:55Z",
    "id": "2244994945",
    "name": "Twitter Dev",
    "protected": false,
    "username": "TwitterDev"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="user-lookup-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdResponse](#schemaget2usersidresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: tweet.read users.read ), UserToken
</aside>

## Returns User objects that are blocked by provided User ID

<a id="opIdusersIdBlocking"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/blocking \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/blocking`

Returns a list of Users that are blocked by the provided User ID

<a href="https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/get-users-blocking">External documentation</a>

<h3 id="returns-user-objects-that-are-blocked-by-provided-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User for whom to return results.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken32](#schemapaginationtoken32)|false|This parameter is used to get a specified 'page' of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="returns-user-objects-that-are-blocked-by-provided-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdBlockingResponse](#schemaget2usersidblockingresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: block.read tweet.read users.read ), UserToken
</aside>

## Block User by User ID

<a id="opIdusersIdBlock"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/blocking \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "target_user_id": "2244994945"
  }'
```

`POST /2/users/{id}/blocking`

Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request

<a href="https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/post-users-user_id-blocking">External documentation</a>

> Body parameter

```json
{
  "target_user_id": "2244994945"
}
```

<h3 id="block-user-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to block the target User.|
|body|body|[BlockUserRequest](#schemablockuserrequest)|true|none|
|» target_user_id|body|[UserId](#schemauserid)|true|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

> Example responses

> 200 Response

```json
{
  "data": {
    "blocking": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="block-user-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[BlockUserMutationResponse](#schemablockusermutationresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: block.write tweet.read users.read ), UserToken
</aside>

## Followers by User ID

<a id="opIdusersIdFollowers"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/followers \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/followers`

Returns a list of Users who are followers of the specified User ID.

<a href="https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-followers">External documentation</a>

<h3 id="followers-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken32](#schemapaginationtoken32)|false|This parameter is used to get a specified 'page' of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="followers-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdFollowersResponse](#schemaget2usersidfollowersresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: follows.read tweet.read users.read ), UserToken
</aside>

## Following by User ID

<a id="opIdusersIdFollowing"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/following \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/following`

Returns a list of Users that are being followed by the provided User ID

<a href="https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following">External documentation</a>

<h3 id="following-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserId](#schemauserid)|true|The ID of the User to lookup.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationToken32](#schemapaginationtoken32)|false|This parameter is used to get a specified 'page' of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="following-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdFollowingResponse](#schemaget2usersidfollowingresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
BearerToken, OAuth2UserToken ( Scopes: follows.read tweet.read users.read ), UserToken
</aside>

## Follow User

<a id="opIdusersIdFollow"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/following \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "target_user_id": "2244994945"
  }'
```

`POST /2/users/{id}/following`

Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request

<a href="https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/post-users-source_user_id-following">External documentation</a>

> Body parameter

```json
{
  "target_user_id": "2244994945"
}
```

<h3 id="follow-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to follow the target User.|
|body|body|[UsersFollowingCreateRequest](#schemausersfollowingcreaterequest)|false|none|
|» target_user_id|body|[UserId](#schemauserid)|true|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

> Example responses

> 200 Response

```json
{
  "data": {
    "following": true,
    "pending_follow": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="follow-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[UsersFollowingCreateResponse](#schemausersfollowingcreateresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: follows.write tweet.read users.read ), UserToken
</aside>

## Returns User objects that are muted by the provided User ID

<a id="opIdusersIdMuting"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/muting \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /2/users/{id}/muting`

Returns a list of Users that are muted by the provided User ID

<a href="https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/get-users-muting">External documentation</a>

<h3 id="returns-user-objects-that-are-muted-by-the-provided-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User for whom to return results.|
|max_results|query|integer(int32)|false|The maximum number of results.|
|pagination_token|query|[PaginationTokenLong](#schemapaginationtokenlong)|false|This parameter is used to get the next 'page' of results.|
|user.fields|query|[string]|false|A comma separated list of User fields to display.|
|expansions|query|[string]|false|A comma separated list of fields to expand.|
|tweet.fields|query|[string]|false|A comma separated list of Tweet fields to display.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|user.fields|created_at|
|user.fields|description|
|user.fields|entities|
|user.fields|id|
|user.fields|location|
|user.fields|name|
|user.fields|pinned_tweet_id|
|user.fields|profile_image_url|
|user.fields|protected|
|user.fields|public_metrics|
|user.fields|url|
|user.fields|username|
|user.fields|verified|
|user.fields|verified_type|
|user.fields|withheld|
|expansions|pinned_tweet_id|
|tweet.fields|attachments|
|tweet.fields|author_id|
|tweet.fields|context_annotations|
|tweet.fields|conversation_id|
|tweet.fields|created_at|
|tweet.fields|edit_controls|
|tweet.fields|edit_history_tweet_ids|
|tweet.fields|entities|
|tweet.fields|geo|
|tweet.fields|id|
|tweet.fields|in_reply_to_user_id|
|tweet.fields|lang|
|tweet.fields|non_public_metrics|
|tweet.fields|organic_metrics|
|tweet.fields|possibly_sensitive|
|tweet.fields|promoted_metrics|
|tweet.fields|public_metrics|
|tweet.fields|referenced_tweets|
|tweet.fields|reply_settings|
|tweet.fields|source|
|tweet.fields|text|
|tweet.fields|withheld|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="returns-user-objects-that-are-muted-by-the-provided-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[Get2UsersIdMutingResponse](#schemaget2usersidmutingresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: mute.read tweet.read users.read ), UserToken
</aside>

## Mute User by User ID.

<a id="opIdusersIdMute"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/muting \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "target_user_id": "2244994945"
  }'
```

`POST /2/users/{id}/muting`

Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.

<a href="https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/post-users-user_id-muting">External documentation</a>

> Body parameter

```json
{
  "target_user_id": "2244994945"
}
```

<h3 id="mute-user-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to mute the target User.|
|body|body|[MuteUserRequest](#schemamuteuserrequest)|false|none|
|» target_user_id|body|[UserId](#schemauserid)|true|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

> Example responses

> 200 Response

```json
{
  "data": {
    "muting": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="mute-user-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[MuteUserMutationResponse](#schemamuteusermutationresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: mute.write tweet.read users.read ), UserToken
</aside>

## Unblock User by User ID

<a id="opIdusersIdUnblock"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/blocking/2244994945 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/users/{source_user_id}/blocking/{target_user_id}`

Causes the source User to unblock the target User. The source User must match the User context authorizing the request

<a href="https://developer.twitter.com/en/docs/twitter-api/users/blocks/api-reference/delete-users-user_id-blocking">External documentation</a>

<h3 id="unblock-user-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_user_id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to unblock the target User.|
|target_user_id|path|[UserId](#schemauserid)|true|The ID of the User that the source User is requesting to unblock.|

> Example responses

> 200 Response

```json
{
  "data": {
    "blocking": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unblock-user-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[BlockUserMutationResponse](#schemablockusermutationresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: block.write tweet.read users.read ), UserToken
</aside>

## Unfollow User

<a id="opIdusersIdUnfollow"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/following/2244994945 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/users/{source_user_id}/following/{target_user_id}`

Causes the source User to unfollow the target User. The source User must match the User context authorizing the request

<a href="https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/delete-users-source_id-following">External documentation</a>

<h3 id="unfollow-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_user_id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to unfollow the target User.|
|target_user_id|path|[UserId](#schemauserid)|true|The ID of the User that the source User is requesting to unfollow.|

> Example responses

> 200 Response

```json
{
  "data": {
    "following": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unfollow-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[UsersFollowingDeleteResponse](#schemausersfollowingdeleteresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: follows.write tweet.read users.read ), UserToken
</aside>

## Unmute User by User ID

<a id="opIdusersIdUnmute"></a>

> Code samples

```bash
curl https://example.com/2/users/2244994945/muting/2244994945 \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /2/users/{source_user_id}/muting/{target_user_id}`

Causes the source User to unmute the target User. The source User must match the User context authorizing the request

<a href="https://developer.twitter.com/en/docs/twitter-api/users/mutes/api-reference/delete-users-user_id-muting">External documentation</a>

<h3 id="unmute-user-by-user-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_user_id|path|[UserIdMatchesAuthenticatedUser](#schemauseridmatchesauthenticateduser)|true|The ID of the authenticated source User that is requesting to unmute the target User.|
|target_user_id|path|[UserId](#schemauserid)|true|The ID of the User that the source User is requesting to unmute.|

> Example responses

> 200 Response

```json
{
  "data": {
    "muting": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

> default Response

```json
{
  "code": 0,
  "message": "string"
}
```

<h3 id="unmute-user-by-user-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The request has succeeded.|[MuteUserMutationResponse](#schemamuteusermutationresponse)|
|default|Default|The request has failed.|[Error](#schemaerror)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
OAuth2UserToken ( Scopes: mute.write tweet.read users.read ), UserToken
</aside>

# Schemas

<h2 id="tocS_AddOrDeleteRulesRequest">AddOrDeleteRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddordeleterulesrequest"></a>
<a id="schema_AddOrDeleteRulesRequest"></a>
<a id="tocSaddordeleterulesrequest"></a>
<a id="tocsaddordeleterulesrequest"></a>

```json
{
  "add": [
    {
      "tag": "Non-retweeted coffee Tweets",
      "value": "coffee -is:retweet"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[AddRulesRequest](#schemaaddrulesrequest)|false|none|A request to add a user-specified stream filtering rule.|
|*oneOf*|[DeleteRulesRequest](#schemadeleterulesrequest)|false|none|A response from deleting user-specified stream filtering rules.|

<h2 id="tocS_AddOrDeleteRulesResponse">AddOrDeleteRulesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaaddordeleterulesresponse"></a>
<a id="schema_AddOrDeleteRulesResponse"></a>
<a id="tocSaddordeleterulesresponse"></a>
<a id="tocsaddordeleterulesresponse"></a>

```json
{
  "data": [
    {
      "id": "120897978112909812",
      "tag": "Non-retweeted coffee Tweets",
      "value": "coffee -is:retweet"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "meta": {
    "next_token": "string",
    "result_count": 0,
    "sent": "string",
    "summary": {
      "created": 1,
      "invalid": 1,
      "not_created": 1,
      "valid": 1
    }
  }
}
```

A response from modifying user-specified stream filtering rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Rule](#schemarule)]|false|none|All user-specified stream filtering rules that were created.|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|meta|[RulesResponseMetadata](#schemarulesresponsemetadata)|true|none|none|

<h2 id="tocS_AddRulesRequest">AddRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaddrulesrequest"></a>
<a id="schema_AddRulesRequest"></a>
<a id="tocSaddrulesrequest"></a>
<a id="tocsaddrulesrequest"></a>

```json
{
  "add": [
    {
      "tag": "Non-retweeted coffee Tweets",
      "value": "coffee -is:retweet"
    }
  ]
}
```

A request to add a user-specified stream filtering rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|add|[[RuleNoId](#schemarulenoid)]|true|none|none|

<h2 id="tocS_Aggregate">Aggregate</h2>
<!-- backwards compatibility -->
<a id="schemaaggregate"></a>
<a id="schema_Aggregate"></a>
<a id="tocSaggregate"></a>
<a id="tocsaggregate"></a>

```json
0
```

The sum of results returned in this response.

<h2 id="tocS_AnimatedGif">AnimatedGif</h2>
<!-- backwards compatibility -->
<a id="schemaanimatedgif"></a>
<a id="schema_AnimatedGif"></a>
<a id="tocSanimatedgif"></a>
<a id="tocsanimatedgif"></a>

```json
{
  "height": 0,
  "media_key": "string",
  "type": "string",
  "width": 0,
  "preview_image_url": "http://example.com",
  "variants": [
    {
      "bit_rate": 0,
      "content_type": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|[MediaHeight](#schemamediaheight)|false|none|The height of the media in pixels.|
|media_key|[MediaKey](#schemamediakey)|false|none|The Media Key identifier for this attachment.|
|type|string|true|none|none|
|width|[MediaWidth](#schemamediawidth)|false|none|The width of the media in pixels.|
|preview_image_url|string(uri)|false|none|none|
|variants|[Variants](#schemavariants)|false|none|An array of all available variants of the media.|

<h2 id="tocS_BlockUserMutationResponse">BlockUserMutationResponse</h2>
<!-- backwards compatibility -->
<a id="schemablockusermutationresponse"></a>
<a id="schema_BlockUserMutationResponse"></a>
<a id="tocSblockusermutationresponse"></a>
<a id="tocsblockusermutationresponse"></a>

```json
{
  "data": {
    "blocking": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_BlockUserRequest">BlockUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemablockuserrequest"></a>
<a id="schema_BlockUserRequest"></a>
<a id="tocSblockuserrequest"></a>
<a id="tocsblockuserrequest"></a>

```json
{
  "target_user_id": "2244994945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_user_id|[UserId](#schemauserid)|true|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

<h2 id="tocS_BookmarkAddRequest">BookmarkAddRequest</h2>
<!-- backwards compatibility -->
<a id="schemabookmarkaddrequest"></a>
<a id="schema_BookmarkAddRequest"></a>
<a id="tocSbookmarkaddrequest"></a>
<a id="tocsbookmarkaddrequest"></a>

```json
{
  "tweet_id": "1346889436626259968"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tweet_id|[TweetId](#schematweetid)|true|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

<h2 id="tocS_BookmarkMutationResponse">BookmarkMutationResponse</h2>
<!-- backwards compatibility -->
<a id="schemabookmarkmutationresponse"></a>
<a id="schema_BookmarkMutationResponse"></a>
<a id="tocSbookmarkmutationresponse"></a>
<a id="tocsbookmarkmutationresponse"></a>

```json
{
  "data": {
    "bookmarked": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_CashtagEntity">CashtagEntity</h2>
<!-- backwards compatibility -->
<a id="schemacashtagentity"></a>
<a id="schema_CashtagEntity"></a>
<a id="tocScashtagentity"></a>
<a id="tocscashtagentity"></a>

```json
{
  "end": 61,
  "start": 50,
  "tag": "TWTR"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|true|none|Index (zero-based) at which position this entity ends.  The index is exclusive.|
|start|integer|true|none|Index (zero-based) at which position this entity starts.  The index is inclusive.|
|tag|string|true|none|none|

<h2 id="tocS_CashtagFields">CashtagFields</h2>
<!-- backwards compatibility -->
<a id="schemacashtagfields"></a>
<a id="schema_CashtagFields"></a>
<a id="tocScashtagfields"></a>
<a id="tocscashtagfields"></a>

```json
{
  "tag": "TWTR"
}
```

Represent the portion of text recognized as a Cashtag, and its start and end position within the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|none|

<h2 id="tocS_ClientDisconnectedProblem">ClientDisconnectedProblem</h2>
<!-- backwards compatibility -->
<a id="schemaclientdisconnectedproblem"></a>
<a id="schema_ClientDisconnectedProblem"></a>
<a id="tocSclientdisconnectedproblem"></a>
<a id="tocsclientdisconnectedproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

Your client has gone away.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ClientForbiddenProblem">ClientForbiddenProblem</h2>
<!-- backwards compatibility -->
<a id="schemaclientforbiddenproblem"></a>
<a id="schema_ClientForbiddenProblem"></a>
<a id="tocSclientforbiddenproblem"></a>
<a id="tocsclientforbiddenproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "reason": "official-client-forbidden",
  "registration_url": "http://example.com"
}
```

A problem that indicates your client is forbidden from making this request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|reason|string|false|none|none|
|registration_url|string(uri)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|reason|official-client-forbidden|
|reason|client-not-enrolled|

<h2 id="tocS_ComplianceJob">ComplianceJob</h2>
<!-- backwards compatibility -->
<a id="schemacompliancejob"></a>
<a id="schema_ComplianceJob"></a>
<a id="tocScompliancejob"></a>
<a id="tocscompliancejob"></a>

```json
{
  "created_at": "2021-01-06T18:40:40.000Z",
  "download_expires_at": "2021-01-06T18:40:40.000Z",
  "download_url": "http://example.com",
  "id": "1372966999991541762",
  "name": "my-job",
  "status": "created",
  "type": "tweets",
  "upload_expires_at": "2021-01-06T18:40:40.000Z",
  "upload_url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|[CreatedAt](#schemacreatedat)|true|none|Creation time of the compliance job.|
|download_expires_at|[DownloadExpiration](#schemadownloadexpiration)|true|none|Expiration time of the download URL.|
|download_url|[DownloadUrl](#schemadownloadurl)|true|none|URL from which the user will retrieve their compliance results.|
|id|[JobId](#schemajobid)|true|none|Compliance Job ID.|
|name|[ComplianceJobName](#schemacompliancejobname)|false|none|User-provided name for a compliance job.|
|status|[ComplianceJobStatus](#schemacompliancejobstatus)|true|none|Status of a compliance job.|
|type|[ComplianceJobType](#schemacompliancejobtype)|true|none|Type of compliance job to list.|
|upload_expires_at|[UploadExpiration](#schemauploadexpiration)|true|none|Expiration time of the upload URL.|
|upload_url|[UploadUrl](#schemauploadurl)|true|none|URL to which the user will upload their Tweet or user IDs.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|created|
|status|in_progress|
|status|failed|
|status|complete|
|status|expired|
|type|tweets|
|type|users|

<h2 id="tocS_ComplianceJobName">ComplianceJobName</h2>
<!-- backwards compatibility -->
<a id="schemacompliancejobname"></a>
<a id="schema_ComplianceJobName"></a>
<a id="tocScompliancejobname"></a>
<a id="tocscompliancejobname"></a>

```json
"my-job"
```

User-provided name for a compliance job.

<h2 id="tocS_ComplianceJobStatus">ComplianceJobStatus</h2>
<!-- backwards compatibility -->
<a id="schemacompliancejobstatus"></a>
<a id="schema_ComplianceJobStatus"></a>
<a id="tocScompliancejobstatus"></a>
<a id="tocscompliancejobstatus"></a>

```json
"created"
```

Status of a compliance job.

<h2 id="tocS_ComplianceJobType">ComplianceJobType</h2>
<!-- backwards compatibility -->
<a id="schemacompliancejobtype"></a>
<a id="schema_ComplianceJobType"></a>
<a id="tocScompliancejobtype"></a>
<a id="tocscompliancejobtype"></a>

```json
"tweets"
```

Type of compliance job to list.

<h2 id="tocS_ConflictProblem">ConflictProblem</h2>
<!-- backwards compatibility -->
<a id="schemaconflictproblem"></a>
<a id="schema_ConflictProblem"></a>
<a id="tocSconflictproblem"></a>
<a id="tocsconflictproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

You cannot create a new job if one is already in progress.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ConnectionExceptionProblem">ConnectionExceptionProblem</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionexceptionproblem"></a>
<a id="schema_ConnectionExceptionProblem"></a>
<a id="tocSconnectionexceptionproblem"></a>
<a id="tocsconnectionexceptionproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "connection_issue": "TooManyConnections"
}
```

A problem that indicates something is wrong with the connection.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|connection_issue|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|connection_issue|TooManyConnections|
|connection_issue|ProvisioningSubscription|
|connection_issue|RuleConfigurationIssue|
|connection_issue|RulesInvalidIssue|

<h2 id="tocS_ContextAnnotation">ContextAnnotation</h2>
<!-- backwards compatibility -->
<a id="schemacontextannotation"></a>
<a id="schema_ContextAnnotation"></a>
<a id="tocScontextannotation"></a>
<a id="tocscontextannotation"></a>

```json
{
  "domain": {
    "description": "string",
    "id": "string",
    "name": "string"
  },
  "entity": {
    "description": "string",
    "id": "string",
    "name": "string"
  }
}
```

Annotation inferred from the Tweet text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|domain|[ContextAnnotationDomainFields](#schemacontextannotationdomainfields)|true|none|Represents the data for the context annotation domain.|
|entity|[ContextAnnotationEntityFields](#schemacontextannotationentityfields)|true|none|Represents the data for the context annotation entity.|

<h2 id="tocS_ContextAnnotationDomainFields">ContextAnnotationDomainFields</h2>
<!-- backwards compatibility -->
<a id="schemacontextannotationdomainfields"></a>
<a id="schema_ContextAnnotationDomainFields"></a>
<a id="tocScontextannotationdomainfields"></a>
<a id="tocscontextannotationdomainfields"></a>

```json
{
  "description": "string",
  "id": "string",
  "name": "string"
}
```

Represents the data for the context annotation domain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the context annotation domain.|
|id|string|true|none|The unique id for a context annotation domain.|
|name|string|false|none|Name of the context annotation domain.|

<h2 id="tocS_ContextAnnotationEntityFields">ContextAnnotationEntityFields</h2>
<!-- backwards compatibility -->
<a id="schemacontextannotationentityfields"></a>
<a id="schema_ContextAnnotationEntityFields"></a>
<a id="tocScontextannotationentityfields"></a>
<a id="tocscontextannotationentityfields"></a>

```json
{
  "description": "string",
  "id": "string",
  "name": "string"
}
```

Represents the data for the context annotation entity.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the context annotation entity.|
|id|string|true|none|The unique id for a context annotation entity.|
|name|string|false|none|Name of the context annotation entity.|

<h2 id="tocS_CountryCode">CountryCode</h2>
<!-- backwards compatibility -->
<a id="schemacountrycode"></a>
<a id="schema_CountryCode"></a>
<a id="tocScountrycode"></a>
<a id="tocscountrycode"></a>

```json
"US"
```

A two-letter ISO 3166-1 alpha-2 country code.

<h2 id="tocS_CreateAttachmentsMessageRequest">CreateAttachmentsMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreateattachmentsmessagerequest"></a>
<a id="schema_CreateAttachmentsMessageRequest"></a>
<a id="tocScreateattachmentsmessagerequest"></a>
<a id="tocscreateattachmentsmessagerequest"></a>

```json
{
  "attachments": [
    {
      "media_id": "1146654567674912769"
    }
  ],
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[DmAttachments](#schemadmattachments)|true|none|Attachments to a DM Event.|
|text|string|false|none|Text of the message.|

<h2 id="tocS_CreateComplianceJobRequest">CreateComplianceJobRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatecompliancejobrequest"></a>
<a id="schema_CreateComplianceJobRequest"></a>
<a id="tocScreatecompliancejobrequest"></a>
<a id="tocscreatecompliancejobrequest"></a>

```json
{
  "name": "my-job",
  "resumable": true,
  "type": "tweets"
}
```

A request to create a new batch compliance job.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|[ComplianceJobName](#schemacompliancejobname)|false|none|User-provided name for a compliance job.|
|resumable|boolean|false|none|If true, this endpoint will return a pre-signed URL with resumable uploads enabled.|
|type|string|true|none|Type of compliance job to list.|

#### Enumerated Values

|Property|Value|
|---|---|
|type|tweets|
|type|users|

<h2 id="tocS_CreateComplianceJobResponse">CreateComplianceJobResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatecompliancejobresponse"></a>
<a id="schema_CreateComplianceJobResponse"></a>
<a id="tocScreatecompliancejobresponse"></a>
<a id="tocscreatecompliancejobresponse"></a>

```json
{
  "data": {
    "created_at": "2021-01-06T18:40:40.000Z",
    "download_expires_at": "2021-01-06T18:40:40.000Z",
    "download_url": "http://example.com",
    "id": "1372966999991541762",
    "name": "my-job",
    "status": "created",
    "type": "tweets",
    "upload_expires_at": "2021-01-06T18:40:40.000Z",
    "upload_url": "http://example.com"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ComplianceJob](#schemacompliancejob)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_CreateDmConversationRequest">CreateDmConversationRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatedmconversationrequest"></a>
<a id="schema_CreateDmConversationRequest"></a>
<a id="tocScreatedmconversationrequest"></a>
<a id="tocscreatedmconversationrequest"></a>

```json
{
  "conversation_type": "Group",
  "message": {
    "attachments": [
      {
        "media_id": "1146654567674912769"
      }
    ],
    "text": "string"
  },
  "participant_ids": [
    "2244994945",
    "2244994945"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation_type|string|true|none|The conversation type that is being created.|
|message|[CreateMessageRequest](#schemacreatemessagerequest)|true|none|none|
|participant_ids|[DmParticipants](#schemadmparticipants)|true|none|Participants for the DM Conversation.|

#### Enumerated Values

|Property|Value|
|---|---|
|conversation_type|Group|

<h2 id="tocS_CreateDmEventResponse">CreateDmEventResponse</h2>
<!-- backwards compatibility -->
<a id="schemacreatedmeventresponse"></a>
<a id="schema_CreateDmEventResponse"></a>
<a id="tocScreatedmeventresponse"></a>
<a id="tocscreatedmeventresponse"></a>

```json
{
  "data": {
    "dm_conversation_id": "123123123-456456456",
    "dm_event_id": "1146654567674912769"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_CreateMessageRequest">CreateMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatemessagerequest"></a>
<a id="schema_CreateMessageRequest"></a>
<a id="tocScreatemessagerequest"></a>
<a id="tocscreatemessagerequest"></a>

```json
{
  "attachments": [
    {
      "media_id": "1146654567674912769"
    }
  ],
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anyOf*|[CreateTextMessageRequest](#schemacreatetextmessagerequest)|false|none|none|
|*anyOf*|[CreateAttachmentsMessageRequest](#schemacreateattachmentsmessagerequest)|false|none|none|

<h2 id="tocS_CreateTextMessageRequest">CreateTextMessageRequest</h2>
<!-- backwards compatibility -->
<a id="schemacreatetextmessagerequest"></a>
<a id="schema_CreateTextMessageRequest"></a>
<a id="tocScreatetextmessagerequest"></a>
<a id="tocscreatetextmessagerequest"></a>

```json
{
  "attachments": [
    {
      "media_id": "1146654567674912769"
    }
  ],
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|[DmAttachments](#schemadmattachments)|false|none|Attachments to a DM Event.|
|text|string|true|none|Text of the message.|

<h2 id="tocS_CreatedAt">CreatedAt</h2>
<!-- backwards compatibility -->
<a id="schemacreatedat"></a>
<a id="schema_CreatedAt"></a>
<a id="tocScreatedat"></a>
<a id="tocscreatedat"></a>

```json
"2021-01-06T18:40:40.000Z"
```

Creation time of the compliance job.

<h2 id="tocS_DeleteRulesRequest">DeleteRulesRequest</h2>
<!-- backwards compatibility -->
<a id="schemadeleterulesrequest"></a>
<a id="schema_DeleteRulesRequest"></a>
<a id="tocSdeleterulesrequest"></a>
<a id="tocsdeleterulesrequest"></a>

```json
{
  "delete": {
    "ids": [
      "120897978112909812"
    ],
    "values": [
      "coffee -is:retweet"
    ]
  }
}
```

A response from deleting user-specified stream filtering rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|object|true|none|IDs and values of all deleted user-specified stream filtering rules.|

<h2 id="tocS_DisallowedResourceProblem">DisallowedResourceProblem</h2>
<!-- backwards compatibility -->
<a id="schemadisallowedresourceproblem"></a>
<a id="schema_DisallowedResourceProblem"></a>
<a id="tocSdisallowedresourceproblem"></a>
<a id="tocsdisallowedresourceproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "resource_id": "string",
  "resource_type": "user",
  "section": "data"
}
```

A problem that indicates that the resource requested violates the precepts of this API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|resource_id|string|true|none|none|
|resource_type|string|true|none|none|
|section|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|user|
|resource_type|tweet|
|resource_type|media|
|resource_type|list|
|resource_type|space|
|section|data|
|section|includes|

<h2 id="tocS_DmAttachments">DmAttachments</h2>
<!-- backwards compatibility -->
<a id="schemadmattachments"></a>
<a id="schema_DmAttachments"></a>
<a id="tocSdmattachments"></a>
<a id="tocsdmattachments"></a>

```json
[
  {
    "media_id": "1146654567674912769"
  }
]
```

Attachments to a DM Event.

<h2 id="tocS_DmConversationId">DmConversationId</h2>
<!-- backwards compatibility -->
<a id="schemadmconversationid"></a>
<a id="schema_DmConversationId"></a>
<a id="tocSdmconversationid"></a>
<a id="tocsdmconversationid"></a>

```json
"123123123-456456456"
```

Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.

<h2 id="tocS_DmEvent">DmEvent</h2>
<!-- backwards compatibility -->
<a id="schemadmevent"></a>
<a id="schema_DmEvent"></a>
<a id="tocSdmevent"></a>
<a id="tocsdmevent"></a>

```json
{
  "attachments": {
    "card_ids": [
      "string"
    ],
    "media_keys": [
      "string"
    ]
  },
  "created_at": "1970-01-01T00:00:00Z",
  "dm_conversation_id": "123123123-456456456",
  "event_type": "MessageCreate",
  "id": "1146654567674912769",
  "participant_ids": [
    "2244994945"
  ],
  "referenced_tweets": [
    {
      "id": "1346889436626259968"
    }
  ],
  "sender_id": "2244994945",
  "text": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|object|false|none|Specifies the type of attachments (if any) present in this DM.|
|created_at|string(date-time)|false|none|none|
|dm_conversation_id|[DmConversationId](#schemadmconversationid)|false|none|Unique identifier of a DM conversation. This can either be a numeric string, or a pair of numeric strings separated by a '-' character in the case of one-on-one DM Conversations.|
|event_type|string|true|none|none|
|id|[DmEventId](#schemadmeventid)|true|none|Unique identifier of a DM Event.|
|participant_ids|[[UserId](#schemauserid)]|false|none|A list of participants for a ParticipantsJoin or ParticipantsLeave event_type.|
|referenced_tweets|[object]|false|none|A list of Tweets this DM refers to.|
|sender_id|[UserId](#schemauserid)|false|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|text|string|false|none|none|

<h2 id="tocS_DmEventId">DmEventId</h2>
<!-- backwards compatibility -->
<a id="schemadmeventid"></a>
<a id="schema_DmEventId"></a>
<a id="tocSdmeventid"></a>
<a id="tocsdmeventid"></a>

```json
"1146654567674912769"
```

Unique identifier of a DM Event.

<h2 id="tocS_DmMediaAttachment">DmMediaAttachment</h2>
<!-- backwards compatibility -->
<a id="schemadmmediaattachment"></a>
<a id="schema_DmMediaAttachment"></a>
<a id="tocSdmmediaattachment"></a>
<a id="tocsdmmediaattachment"></a>

```json
{
  "media_id": "1146654567674912769"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|media_id|[MediaId](#schemamediaid)|true|none|The unique identifier of this Media.|

<h2 id="tocS_DmParticipants">DmParticipants</h2>
<!-- backwards compatibility -->
<a id="schemadmparticipants"></a>
<a id="schema_DmParticipants"></a>
<a id="tocSdmparticipants"></a>
<a id="tocsdmparticipants"></a>

```json
[
  "2244994945",
  "2244994945"
]
```

Participants for the DM Conversation.

<h2 id="tocS_DownloadExpiration">DownloadExpiration</h2>
<!-- backwards compatibility -->
<a id="schemadownloadexpiration"></a>
<a id="schema_DownloadExpiration"></a>
<a id="tocSdownloadexpiration"></a>
<a id="tocsdownloadexpiration"></a>

```json
"2021-01-06T18:40:40.000Z"
```

Expiration time of the download URL.

<h2 id="tocS_DownloadUrl">DownloadUrl</h2>
<!-- backwards compatibility -->
<a id="schemadownloadurl"></a>
<a id="schema_DownloadUrl"></a>
<a id="tocSdownloadurl"></a>
<a id="tocsdownloadurl"></a>

```json
"http://example.com"
```

URL from which the user will retrieve their compliance results.

<h2 id="tocS_DuplicateRuleProblem">DuplicateRuleProblem</h2>
<!-- backwards compatibility -->
<a id="schemaduplicateruleproblem"></a>
<a id="schema_DuplicateRuleProblem"></a>
<a id="tocSduplicateruleproblem"></a>
<a id="tocsduplicateruleproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "id": "string",
  "value": "string"
}
```

The rule you have submitted is a duplicate.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|id|string|false|none|none|
|value|string|false|none|none|

<h2 id="tocS_End">End</h2>
<!-- backwards compatibility -->
<a id="schemaend"></a>
<a id="schema_End"></a>
<a id="tocSend"></a>
<a id="tocsend"></a>

```json
"1970-01-01T00:00:00Z"
```

The end time of the bucket.

<h2 id="tocS_EntityIndicesInclusiveExclusive">EntityIndicesInclusiveExclusive</h2>
<!-- backwards compatibility -->
<a id="schemaentityindicesinclusiveexclusive"></a>
<a id="schema_EntityIndicesInclusiveExclusive"></a>
<a id="tocSentityindicesinclusiveexclusive"></a>
<a id="tocsentityindicesinclusiveexclusive"></a>

```json
{
  "end": 61,
  "start": 50
}
```

Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|true|none|Index (zero-based) at which position this entity ends.  The index is exclusive.|
|start|integer|true|none|Index (zero-based) at which position this entity starts.  The index is inclusive.|

<h2 id="tocS_EntityIndicesInclusiveInclusive">EntityIndicesInclusiveInclusive</h2>
<!-- backwards compatibility -->
<a id="schemaentityindicesinclusiveinclusive"></a>
<a id="schema_EntityIndicesInclusiveInclusive"></a>
<a id="tocSentityindicesinclusiveinclusive"></a>
<a id="tocsentityindicesinclusiveinclusive"></a>

```json
{
  "end": 61,
  "start": 50
}
```

Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is inclusive.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|true|none|Index (zero-based) at which position this entity ends.  The index is inclusive.|
|start|integer|true|none|Index (zero-based) at which position this entity starts.  The index is inclusive.|

<h2 id="tocS_Error">Error</h2>
<!-- backwards compatibility -->
<a id="schemaerror"></a>
<a id="schema_Error"></a>
<a id="tocSerror"></a>
<a id="tocserror"></a>

```json
{
  "code": 0,
  "message": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|true|none|none|
|message|string|true|none|none|

<h2 id="tocS_Expansions">Expansions</h2>
<!-- backwards compatibility -->
<a id="schemaexpansions"></a>
<a id="schema_Expansions"></a>
<a id="tocSexpansions"></a>
<a id="tocsexpansions"></a>

```json
{
  "media": [
    {
      "height": 0,
      "media_key": "string",
      "type": "string",
      "width": 0
    }
  ],
  "places": [
    {
      "contained_within": [
        "f7eb2fa2fea288b1"
      ],
      "country": "United States",
      "country_code": "US",
      "full_name": "Lakewood, CO",
      "geo": {
        "bbox": [
          -105.193475,
          39.60973,
          -105.053164,
          39.761974
        ],
        "geometry": {
          "coordinates": [
            -105.18816086351444,
            40.247749999999996
          ],
          "type": "Point"
        },
        "properties": {},
        "type": "Feature"
      },
      "id": "f7eb2fa2fea288b1",
      "name": "Lakewood",
      "place_type": "city"
    }
  ],
  "polls": [
    {
      "duration_minutes": 5,
      "end_datetime": "1970-01-01T00:00:00Z",
      "id": "1365059861688410112",
      "options": [
        {
          "label": "string",
          "position": 0,
          "votes": 0
        },
        {
          "label": "string",
          "position": 0,
          "votes": 0
        }
      ],
      "voting_status": "open"
    }
  ],
  "topics": [
    {
      "description": "All about technology",
      "id": "string",
      "name": "Technology"
    }
  ],
  "tweets": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "users": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|media|[[Media](#schemamedia)]|false|none|none|
|places|[[Place](#schemaplace)]|false|none|none|
|polls|[[Poll](#schemapoll)]|false|none|none|
|topics|[[Topic](#schematopic)]|false|none|none|
|tweets|[[Tweet](#schematweet)]|false|none|none|
|users|[[User](#schemauser)]|false|none|none|

<h2 id="tocS_FieldUnauthorizedProblem">FieldUnauthorizedProblem</h2>
<!-- backwards compatibility -->
<a id="schemafieldunauthorizedproblem"></a>
<a id="schema_FieldUnauthorizedProblem"></a>
<a id="tocSfieldunauthorizedproblem"></a>
<a id="tocsfieldunauthorizedproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "field": "string",
  "resource_type": "user",
  "section": "data"
}
```

A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|field|string|true|none|none|
|resource_type|string|true|none|none|
|section|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|user|
|resource_type|tweet|
|resource_type|media|
|resource_type|list|
|resource_type|space|
|section|data|
|section|includes|

<h2 id="tocS_FilteredStreamingTweetResponse">FilteredStreamingTweetResponse</h2>
<!-- backwards compatibility -->
<a id="schemafilteredstreamingtweetresponse"></a>
<a id="schema_FilteredStreamingTweetResponse"></a>
<a id="tocSfilteredstreamingtweetresponse"></a>
<a id="tocsfilteredstreamingtweetresponse"></a>

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "matching_rules": [
    {
      "id": "120897978112909812",
      "tag": "Non-retweeted coffee Tweets"
    }
  ]
}
```

A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Tweet](#schematweet)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|matching_rules|[object]|false|none|The list of rules which matched the Tweet|

<h2 id="tocS_FullTextEntities">FullTextEntities</h2>
<!-- backwards compatibility -->
<a id="schemafulltextentities"></a>
<a id="schema_FullTextEntities"></a>
<a id="tocSfulltextentities"></a>
<a id="tocsfulltextentities"></a>

```json
{
  "annotations": [
    {
      "end": 61,
      "start": 50,
      "normalized_text": "Barack Obama",
      "probability": 0,
      "type": "Person"
    }
  ],
  "cashtags": [
    {
      "end": 61,
      "start": 50,
      "tag": "TWTR"
    }
  ],
  "hashtags": [
    {
      "end": 61,
      "start": 50,
      "tag": "MondayMotivation"
    }
  ],
  "mentions": [
    {
      "end": 61,
      "start": 50,
      "id": "2244994945",
      "username": "string"
    }
  ],
  "urls": [
    {
      "end": 61,
      "start": 50,
      "description": "This is a description of the website.",
      "display_url": "twittercommunity.com/t/introducing-…",
      "expanded_url": "https://developer.twitter.com/en/docs/twitter-api",
      "images": [
        {
          "height": 0,
          "url": "https://developer.twitter.com/en/docs/twitter-api",
          "width": 0
        }
      ],
      "media_key": "string",
      "status": 100,
      "title": "Introducing the v2 follow lookup endpoints",
      "unwound_url": "https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118",
      "url": "https://developer.twitter.com/en/docs/twitter-api"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|[object]|false|none|none|
|cashtags|[[CashtagEntity](#schemacashtagentity)]|false|none|none|
|hashtags|[[HashtagEntity](#schemahashtagentity)]|false|none|none|
|mentions|[[MentionEntity](#schemamentionentity)]|false|none|none|
|urls|[[UrlEntity](#schemaurlentity)]|false|none|none|

<h2 id="tocS_GenericProblem">GenericProblem</h2>
<!-- backwards compatibility -->
<a id="schemagenericproblem"></a>
<a id="schema_GenericProblem"></a>
<a id="tocSgenericproblem"></a>
<a id="tocsgenericproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

A generic problem with no additional information beyond that provided by the HTTP status code.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Geo">Geo</h2>
<!-- backwards compatibility -->
<a id="schemageo"></a>
<a id="schema_Geo"></a>
<a id="tocSgeo"></a>
<a id="tocsgeo"></a>

```json
{
  "bbox": [
    -105.193475,
    39.60973,
    -105.053164,
    39.761974
  ],
  "geometry": {
    "coordinates": [
      -105.18816086351444,
      40.247749999999996
    ],
    "type": "Point"
  },
  "properties": {},
  "type": "Feature"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bbox|[number(double)]|true|none|none|
|geometry|[Point](#schemapoint)|false|none|A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.|
|properties|object|true|none|none|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Feature|

<h2 id="tocS_Get2ComplianceJobsIdResponse">Get2ComplianceJobsIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2compliancejobsidresponse"></a>
<a id="schema_Get2ComplianceJobsIdResponse"></a>
<a id="tocSget2compliancejobsidresponse"></a>
<a id="tocsget2compliancejobsidresponse"></a>

```json
{
  "data": {
    "created_at": "2021-01-06T18:40:40.000Z",
    "download_expires_at": "2021-01-06T18:40:40.000Z",
    "download_url": "http://example.com",
    "id": "1372966999991541762",
    "name": "my-job",
    "status": "created",
    "type": "tweets",
    "upload_expires_at": "2021-01-06T18:40:40.000Z",
    "upload_url": "http://example.com"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[ComplianceJob](#schemacompliancejob)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_Get2ComplianceJobsResponse">Get2ComplianceJobsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2compliancejobsresponse"></a>
<a id="schema_Get2ComplianceJobsResponse"></a>
<a id="tocSget2compliancejobsresponse"></a>
<a id="tocsget2compliancejobsresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2021-01-06T18:40:40.000Z",
      "download_expires_at": "2021-01-06T18:40:40.000Z",
      "download_url": "http://example.com",
      "id": "1372966999991541762",
      "name": "my-job",
      "status": "created",
      "type": "tweets",
      "upload_expires_at": "2021-01-06T18:40:40.000Z",
      "upload_url": "http://example.com"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "meta": {
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[ComplianceJob](#schemacompliancejob)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2DmConversationsIdDmEventsResponse">Get2DmConversationsIdDmEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2dmconversationsiddmeventsresponse"></a>
<a id="schema_Get2DmConversationsIdDmEventsResponse"></a>
<a id="tocSget2dmconversationsiddmeventsresponse"></a>
<a id="tocsget2dmconversationsiddmeventsresponse"></a>

```json
{
  "data": [
    {
      "attachments": {
        "card_ids": [
          "string"
        ],
        "media_keys": [
          "string"
        ]
      },
      "created_at": "1970-01-01T00:00:00Z",
      "dm_conversation_id": "123123123-456456456",
      "event_type": "MessageCreate",
      "id": "1146654567674912769",
      "participant_ids": [
        "2244994945"
      ],
      "referenced_tweets": [
        {
          "id": "1346889436626259968"
        }
      ],
      "sender_id": "2244994945",
      "text": "string"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DmEvent](#schemadmevent)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2DmConversationsWithParticipantIdDmEventsResponse">Get2DmConversationsWithParticipantIdDmEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2dmconversationswithparticipantiddmeventsresponse"></a>
<a id="schema_Get2DmConversationsWithParticipantIdDmEventsResponse"></a>
<a id="tocSget2dmconversationswithparticipantiddmeventsresponse"></a>
<a id="tocsget2dmconversationswithparticipantiddmeventsresponse"></a>

```json
{
  "data": [
    {
      "attachments": {
        "card_ids": [
          "string"
        ],
        "media_keys": [
          "string"
        ]
      },
      "created_at": "1970-01-01T00:00:00Z",
      "dm_conversation_id": "123123123-456456456",
      "event_type": "MessageCreate",
      "id": "1146654567674912769",
      "participant_ids": [
        "2244994945"
      ],
      "referenced_tweets": [
        {
          "id": "1346889436626259968"
        }
      ],
      "sender_id": "2244994945",
      "text": "string"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DmEvent](#schemadmevent)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2DmEventsResponse">Get2DmEventsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2dmeventsresponse"></a>
<a id="schema_Get2DmEventsResponse"></a>
<a id="tocSget2dmeventsresponse"></a>
<a id="tocsget2dmeventsresponse"></a>

```json
{
  "data": [
    {
      "attachments": {
        "card_ids": [
          "string"
        ],
        "media_keys": [
          "string"
        ]
      },
      "created_at": "1970-01-01T00:00:00Z",
      "dm_conversation_id": "123123123-456456456",
      "event_type": "MessageCreate",
      "id": "1146654567674912769",
      "participant_ids": [
        "2244994945"
      ],
      "referenced_tweets": [
        {
          "id": "1346889436626259968"
        }
      ],
      "sender_id": "2244994945",
      "text": "string"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[DmEvent](#schemadmevent)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2ListsIdFollowersResponse">Get2ListsIdFollowersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2listsidfollowersresponse"></a>
<a id="schema_Get2ListsIdFollowersResponse"></a>
<a id="tocSget2listsidfollowersresponse"></a>
<a id="tocsget2listsidfollowersresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2ListsIdMembersResponse">Get2ListsIdMembersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2listsidmembersresponse"></a>
<a id="schema_Get2ListsIdMembersResponse"></a>
<a id="tocSget2listsidmembersresponse"></a>
<a id="tocsget2listsidmembersresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2ListsIdResponse">Get2ListsIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2listsidresponse"></a>
<a id="schema_Get2ListsIdResponse"></a>
<a id="tocSget2listsidresponse"></a>
<a id="tocsget2listsidresponse"></a>

```json
{
  "data": {
    "created_at": "1970-01-01T00:00:00Z",
    "description": "string",
    "follower_count": 0,
    "id": "1146654567674912769",
    "member_count": 0,
    "name": "string",
    "owner_id": "2244994945",
    "private": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[List](#schemalist)|false|none|A Twitter List is a curated group of accounts.|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2ListsIdTweetsResponse">Get2ListsIdTweetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2listsidtweetsresponse"></a>
<a id="schema_Get2ListsIdTweetsResponse"></a>
<a id="tocSget2listsidtweetsresponse"></a>
<a id="tocsget2listsidtweetsresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2SpacesByCreatorIdsResponse">Get2SpacesByCreatorIdsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2spacesbycreatoridsresponse"></a>
<a id="schema_Get2SpacesByCreatorIdsResponse"></a>
<a id="tocSget2spacesbycreatoridsresponse"></a>
<a id="tocsget2spacesbycreatoridsresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2021-07-06T18:40:40.000Z",
      "creator_id": "2244994945",
      "ended_at": "2021-07-06T18:40:40.000Z",
      "host_ids": [
        "2244994945"
      ],
      "id": "1SLjjRYNejbKM",
      "invited_user_ids": [
        "2244994945"
      ],
      "is_ticketed": "false",
      "lang": "en",
      "participant_count": 10,
      "scheduled_start": "2021-07-06T18:40:40.000Z",
      "speaker_ids": [
        "2244994945"
      ],
      "started_at": "2021-7-14T04:35:55Z",
      "state": "live",
      "subscriber_count": 10,
      "title": "Spaces are Awesome",
      "topics": [
        {
          "description": "All about technology",
          "id": "848920371311001600",
          "name": "Technology"
        }
      ],
      "updated_at": "2021-7-14T04:35:55Z"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Space](#schemaspace)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2SpacesIdBuyersResponse">Get2SpacesIdBuyersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2spacesidbuyersresponse"></a>
<a id="schema_Get2SpacesIdBuyersResponse"></a>
<a id="tocSget2spacesidbuyersresponse"></a>
<a id="tocsget2spacesidbuyersresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2SpacesIdResponse">Get2SpacesIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2spacesidresponse"></a>
<a id="schema_Get2SpacesIdResponse"></a>
<a id="tocSget2spacesidresponse"></a>
<a id="tocsget2spacesidresponse"></a>

```json
{
  "data": {
    "created_at": "2021-07-06T18:40:40.000Z",
    "creator_id": "2244994945",
    "ended_at": "2021-07-06T18:40:40.000Z",
    "host_ids": [
      "2244994945"
    ],
    "id": "1SLjjRYNejbKM",
    "invited_user_ids": [
      "2244994945"
    ],
    "is_ticketed": "false",
    "lang": "en",
    "participant_count": 10,
    "scheduled_start": "2021-07-06T18:40:40.000Z",
    "speaker_ids": [
      "2244994945"
    ],
    "started_at": "2021-7-14T04:35:55Z",
    "state": "live",
    "subscriber_count": 10,
    "title": "Spaces are Awesome",
    "topics": [
      {
        "description": "All about technology",
        "id": "848920371311001600",
        "name": "Technology"
      }
    ],
    "updated_at": "2021-7-14T04:35:55Z"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Space](#schemaspace)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2SpacesIdTweetsResponse">Get2SpacesIdTweetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2spacesidtweetsresponse"></a>
<a id="schema_Get2SpacesIdTweetsResponse"></a>
<a id="tocSget2spacesidtweetsresponse"></a>
<a id="tocsget2spacesidtweetsresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2SpacesResponse">Get2SpacesResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2spacesresponse"></a>
<a id="schema_Get2SpacesResponse"></a>
<a id="tocSget2spacesresponse"></a>
<a id="tocsget2spacesresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2021-07-06T18:40:40.000Z",
      "creator_id": "2244994945",
      "ended_at": "2021-07-06T18:40:40.000Z",
      "host_ids": [
        "2244994945"
      ],
      "id": "1SLjjRYNejbKM",
      "invited_user_ids": [
        "2244994945"
      ],
      "is_ticketed": "false",
      "lang": "en",
      "participant_count": 10,
      "scheduled_start": "2021-07-06T18:40:40.000Z",
      "speaker_ids": [
        "2244994945"
      ],
      "started_at": "2021-7-14T04:35:55Z",
      "state": "live",
      "subscriber_count": 10,
      "title": "Spaces are Awesome",
      "topics": [
        {
          "description": "All about technology",
          "id": "848920371311001600",
          "name": "Technology"
        }
      ],
      "updated_at": "2021-7-14T04:35:55Z"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Space](#schemaspace)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2SpacesSearchResponse">Get2SpacesSearchResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2spacessearchresponse"></a>
<a id="schema_Get2SpacesSearchResponse"></a>
<a id="tocSget2spacessearchresponse"></a>
<a id="tocsget2spacessearchresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2021-07-06T18:40:40.000Z",
      "creator_id": "2244994945",
      "ended_at": "2021-07-06T18:40:40.000Z",
      "host_ids": [
        "2244994945"
      ],
      "id": "1SLjjRYNejbKM",
      "invited_user_ids": [
        "2244994945"
      ],
      "is_ticketed": "false",
      "lang": "en",
      "participant_count": 10,
      "scheduled_start": "2021-07-06T18:40:40.000Z",
      "speaker_ids": [
        "2244994945"
      ],
      "started_at": "2021-7-14T04:35:55Z",
      "state": "live",
      "subscriber_count": 10,
      "title": "Spaces are Awesome",
      "topics": [
        {
          "description": "All about technology",
          "id": "848920371311001600",
          "name": "Technology"
        }
      ],
      "updated_at": "2021-7-14T04:35:55Z"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Space](#schemaspace)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2TweetsCountsAllResponse">Get2TweetsCountsAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetscountsallresponse"></a>
<a id="schema_Get2TweetsCountsAllResponse"></a>
<a id="tocSget2tweetscountsallresponse"></a>
<a id="tocsget2tweetscountsallresponse"></a>

```json
{
  "data": [
    {
      "end": "1970-01-01T00:00:00Z",
      "start": "1970-01-01T00:00:00Z",
      "tweet_count": 0
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "total_tweet_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SearchCount](#schemasearchcount)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2TweetsCountsRecentResponse">Get2TweetsCountsRecentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetscountsrecentresponse"></a>
<a id="schema_Get2TweetsCountsRecentResponse"></a>
<a id="tocSget2tweetscountsrecentresponse"></a>
<a id="tocsget2tweetscountsrecentresponse"></a>

```json
{
  "data": [
    {
      "end": "1970-01-01T00:00:00Z",
      "start": "1970-01-01T00:00:00Z",
      "tweet_count": 0
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "total_tweet_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[SearchCount](#schemasearchcount)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2TweetsFirehoseStreamResponse">Get2TweetsFirehoseStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetsfirehosestreamresponse"></a>
<a id="schema_Get2TweetsFirehoseStreamResponse"></a>
<a id="tocSget2tweetsfirehosestreamresponse"></a>
<a id="tocsget2tweetsfirehosestreamresponse"></a>

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Tweet](#schematweet)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2TweetsIdLikingUsersResponse">Get2TweetsIdLikingUsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetsidlikingusersresponse"></a>
<a id="schema_Get2TweetsIdLikingUsersResponse"></a>
<a id="tocSget2tweetsidlikingusersresponse"></a>
<a id="tocsget2tweetsidlikingusersresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2TweetsIdQuoteTweetsResponse">Get2TweetsIdQuoteTweetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetsidquotetweetsresponse"></a>
<a id="schema_Get2TweetsIdQuoteTweetsResponse"></a>
<a id="tocSget2tweetsidquotetweetsresponse"></a>
<a id="tocsget2tweetsidquotetweetsresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2TweetsIdResponse">Get2TweetsIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetsidresponse"></a>
<a id="schema_Get2TweetsIdResponse"></a>
<a id="tocSget2tweetsidresponse"></a>
<a id="tocsget2tweetsidresponse"></a>

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Tweet](#schematweet)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2TweetsIdRetweetedByResponse">Get2TweetsIdRetweetedByResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetsidretweetedbyresponse"></a>
<a id="schema_Get2TweetsIdRetweetedByResponse"></a>
<a id="tocSget2tweetsidretweetedbyresponse"></a>
<a id="tocsget2tweetsidretweetedbyresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2TweetsResponse">Get2TweetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetsresponse"></a>
<a id="schema_Get2TweetsResponse"></a>
<a id="tocSget2tweetsresponse"></a>
<a id="tocsget2tweetsresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2TweetsSample10StreamResponse">Get2TweetsSample10StreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetssample10streamresponse"></a>
<a id="schema_Get2TweetsSample10StreamResponse"></a>
<a id="tocSget2tweetssample10streamresponse"></a>
<a id="tocsget2tweetssample10streamresponse"></a>

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Tweet](#schematweet)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2TweetsSampleStreamResponse">Get2TweetsSampleStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetssamplestreamresponse"></a>
<a id="schema_Get2TweetsSampleStreamResponse"></a>
<a id="tocSget2tweetssamplestreamresponse"></a>
<a id="tocsget2tweetssamplestreamresponse"></a>

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Tweet](#schematweet)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2TweetsSearchAllResponse">Get2TweetsSearchAllResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetssearchallresponse"></a>
<a id="schema_Get2TweetsSearchAllResponse"></a>
<a id="tocSget2tweetssearchallresponse"></a>
<a id="tocsget2tweetssearchallresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2TweetsSearchRecentResponse">Get2TweetsSearchRecentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetssearchrecentresponse"></a>
<a id="schema_Get2TweetsSearchRecentResponse"></a>
<a id="tocSget2tweetssearchrecentresponse"></a>
<a id="tocsget2tweetssearchrecentresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2TweetsSearchStreamResponse">Get2TweetsSearchStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2tweetssearchstreamresponse"></a>
<a id="schema_Get2TweetsSearchStreamResponse"></a>
<a id="tocSget2tweetssearchstreamresponse"></a>
<a id="tocsget2tweetssearchstreamresponse"></a>

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Tweet](#schematweet)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2UsersByResponse">Get2UsersByResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersbyresponse"></a>
<a id="schema_Get2UsersByResponse"></a>
<a id="tocSget2usersbyresponse"></a>
<a id="tocsget2usersbyresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2UsersByUsernameUsernameResponse">Get2UsersByUsernameUsernameResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersbyusernameusernameresponse"></a>
<a id="schema_Get2UsersByUsernameUsernameResponse"></a>
<a id="tocSget2usersbyusernameusernameresponse"></a>
<a id="tocsget2usersbyusernameusernameresponse"></a>

```json
{
  "data": {
    "created_at": "2013-12-14T04:35:55Z",
    "id": "2244994945",
    "name": "Twitter Dev",
    "protected": false,
    "username": "TwitterDev"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|The Twitter User object.|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2UsersIdBlockingResponse">Get2UsersIdBlockingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidblockingresponse"></a>
<a id="schema_Get2UsersIdBlockingResponse"></a>
<a id="tocSget2usersidblockingresponse"></a>
<a id="tocsget2usersidblockingresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdBookmarksResponse">Get2UsersIdBookmarksResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidbookmarksresponse"></a>
<a id="schema_Get2UsersIdBookmarksResponse"></a>
<a id="tocSget2usersidbookmarksresponse"></a>
<a id="tocsget2usersidbookmarksresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdFollowedListsResponse">Get2UsersIdFollowedListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidfollowedlistsresponse"></a>
<a id="schema_Get2UsersIdFollowedListsResponse"></a>
<a id="tocSget2usersidfollowedlistsresponse"></a>
<a id="tocsget2usersidfollowedlistsresponse"></a>

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "follower_count": 0,
      "id": "1146654567674912769",
      "member_count": 0,
      "name": "string",
      "owner_id": "2244994945",
      "private": true
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[List](#schemalist)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdFollowersResponse">Get2UsersIdFollowersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidfollowersresponse"></a>
<a id="schema_Get2UsersIdFollowersResponse"></a>
<a id="tocSget2usersidfollowersresponse"></a>
<a id="tocsget2usersidfollowersresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdFollowingResponse">Get2UsersIdFollowingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidfollowingresponse"></a>
<a id="schema_Get2UsersIdFollowingResponse"></a>
<a id="tocSget2usersidfollowingresponse"></a>
<a id="tocsget2usersidfollowingresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdLikedTweetsResponse">Get2UsersIdLikedTweetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidlikedtweetsresponse"></a>
<a id="schema_Get2UsersIdLikedTweetsResponse"></a>
<a id="tocSget2usersidlikedtweetsresponse"></a>
<a id="tocsget2usersidlikedtweetsresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdListMembershipsResponse">Get2UsersIdListMembershipsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidlistmembershipsresponse"></a>
<a id="schema_Get2UsersIdListMembershipsResponse"></a>
<a id="tocSget2usersidlistmembershipsresponse"></a>
<a id="tocsget2usersidlistmembershipsresponse"></a>

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "follower_count": 0,
      "id": "1146654567674912769",
      "member_count": 0,
      "name": "string",
      "owner_id": "2244994945",
      "private": true
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[List](#schemalist)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdMentionsResponse">Get2UsersIdMentionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidmentionsresponse"></a>
<a id="schema_Get2UsersIdMentionsResponse"></a>
<a id="tocSget2usersidmentionsresponse"></a>
<a id="tocsget2usersidmentionsresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdMutingResponse">Get2UsersIdMutingResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidmutingresponse"></a>
<a id="schema_Get2UsersIdMutingResponse"></a>
<a id="tocSget2usersidmutingresponse"></a>
<a id="tocsget2usersidmutingresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdOwnedListsResponse">Get2UsersIdOwnedListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidownedlistsresponse"></a>
<a id="schema_Get2UsersIdOwnedListsResponse"></a>
<a id="tocSget2usersidownedlistsresponse"></a>
<a id="tocsget2usersidownedlistsresponse"></a>

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "follower_count": 0,
      "id": "1146654567674912769",
      "member_count": 0,
      "name": "string",
      "owner_id": "2244994945",
      "private": true
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "next_token": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[List](#schemalist)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdPinnedListsResponse">Get2UsersIdPinnedListsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidpinnedlistsresponse"></a>
<a id="schema_Get2UsersIdPinnedListsResponse"></a>
<a id="tocSget2usersidpinnedlistsresponse"></a>
<a id="tocsget2usersidpinnedlistsresponse"></a>

```json
{
  "data": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "follower_count": 0,
      "id": "1146654567674912769",
      "member_count": 0,
      "name": "string",
      "owner_id": "2244994945",
      "private": true
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[List](#schemalist)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdResponse">Get2UsersIdResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidresponse"></a>
<a id="schema_Get2UsersIdResponse"></a>
<a id="tocSget2usersidresponse"></a>
<a id="tocsget2usersidresponse"></a>

```json
{
  "data": {
    "created_at": "2013-12-14T04:35:55Z",
    "id": "2244994945",
    "name": "Twitter Dev",
    "protected": false,
    "username": "TwitterDev"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|The Twitter User object.|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2UsersIdTimelinesReverseChronologicalResponse">Get2UsersIdTimelinesReverseChronologicalResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidtimelinesreversechronologicalresponse"></a>
<a id="schema_Get2UsersIdTimelinesReverseChronologicalResponse"></a>
<a id="tocSget2usersidtimelinesreversechronologicalresponse"></a>
<a id="tocsget2usersidtimelinesreversechronologicalresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersIdTweetsResponse">Get2UsersIdTweetsResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersidtweetsresponse"></a>
<a id="schema_Get2UsersIdTweetsResponse"></a>
<a id="tocSget2usersidtweetsresponse"></a>
<a id="tocsget2usersidtweetsresponse"></a>

```json
{
  "data": [
    {
      "author_id": "2244994945",
      "created_at": "Wed Jan 06 18:40:40 +0000 2021",
      "id": "1346889436626259968",
      "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  },
  "meta": {
    "newest_id": "string",
    "next_token": "string",
    "oldest_id": "string",
    "previous_token": "string",
    "result_count": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Tweet](#schematweet)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|
|meta|object|false|none|none|

<h2 id="tocS_Get2UsersMeResponse">Get2UsersMeResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersmeresponse"></a>
<a id="schema_Get2UsersMeResponse"></a>
<a id="tocSget2usersmeresponse"></a>
<a id="tocsget2usersmeresponse"></a>

```json
{
  "data": {
    "created_at": "2013-12-14T04:35:55Z",
    "id": "2244994945",
    "name": "Twitter Dev",
    "protected": false,
    "username": "TwitterDev"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[User](#schemauser)|false|none|The Twitter User object.|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Get2UsersResponse">Get2UsersResponse</h2>
<!-- backwards compatibility -->
<a id="schemaget2usersresponse"></a>
<a id="schema_Get2UsersResponse"></a>
<a id="tocSget2usersresponse"></a>
<a id="tocsget2usersresponse"></a>

```json
{
  "data": [
    {
      "created_at": "2013-12-14T04:35:55Z",
      "id": "2244994945",
      "name": "Twitter Dev",
      "protected": false,
      "username": "TwitterDev"
    }
  ],
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[User](#schemauser)]|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_HashtagEntity">HashtagEntity</h2>
<!-- backwards compatibility -->
<a id="schemahashtagentity"></a>
<a id="schema_HashtagEntity"></a>
<a id="tocShashtagentity"></a>
<a id="tocshashtagentity"></a>

```json
{
  "end": 61,
  "start": 50,
  "tag": "MondayMotivation"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|true|none|Index (zero-based) at which position this entity ends.  The index is exclusive.|
|start|integer|true|none|Index (zero-based) at which position this entity starts.  The index is inclusive.|
|tag|string|true|none|The text of the Hashtag.|

<h2 id="tocS_HashtagFields">HashtagFields</h2>
<!-- backwards compatibility -->
<a id="schemahashtagfields"></a>
<a id="schema_HashtagFields"></a>
<a id="tocShashtagfields"></a>
<a id="tocshashtagfields"></a>

```json
{
  "tag": "MondayMotivation"
}
```

Represent the portion of text recognized as a Hashtag, and its start and end position within the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|string|true|none|The text of the Hashtag.|

<h2 id="tocS_HttpStatusCode">HttpStatusCode</h2>
<!-- backwards compatibility -->
<a id="schemahttpstatuscode"></a>
<a id="schema_HttpStatusCode"></a>
<a id="tocShttpstatuscode"></a>
<a id="tocshttpstatuscode"></a>

```json
100
```

HTTP Status Code.

<h2 id="tocS_InvalidRequestProblem">InvalidRequestProblem</h2>
<!-- backwards compatibility -->
<a id="schemainvalidrequestproblem"></a>
<a id="schema_InvalidRequestProblem"></a>
<a id="tocSinvalidrequestproblem"></a>
<a id="tocsinvalidrequestproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "errors": [
    {
      "message": "string",
      "parameters": {
        "property1": [
          "string"
        ],
        "property2": [
          "string"
        ]
      }
    }
  ]
}
```

A problem that indicates this request is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|errors|[object]|false|none|none|

<h2 id="tocS_InvalidRuleProblem">InvalidRuleProblem</h2>
<!-- backwards compatibility -->
<a id="schemainvalidruleproblem"></a>
<a id="schema_InvalidRuleProblem"></a>
<a id="tocSinvalidruleproblem"></a>
<a id="tocsinvalidruleproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

The rule you have submitted is invalid.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_JobId">JobId</h2>
<!-- backwards compatibility -->
<a id="schemajobid"></a>
<a id="schema_JobId"></a>
<a id="tocSjobid"></a>
<a id="tocsjobid"></a>

```json
"1372966999991541762"
```

Compliance Job ID.

<h2 id="tocS_List">List</h2>
<!-- backwards compatibility -->
<a id="schemalist"></a>
<a id="schema_List"></a>
<a id="tocSlist"></a>
<a id="tocslist"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "follower_count": 0,
  "id": "1146654567674912769",
  "member_count": 0,
  "name": "string",
  "owner_id": "2244994945",
  "private": true
}
```

A Twitter List is a curated group of accounts.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|description|string|false|none|none|
|follower_count|integer|false|none|none|
|id|[ListId](#schemalistid)|true|none|The unique identifier of this List.|
|member_count|integer|false|none|none|
|name|string|true|none|The name of this List.|
|owner_id|[UserId](#schemauserid)|false|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|private|boolean|false|none|none|

<h2 id="tocS_ListAddUserRequest">ListAddUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistadduserrequest"></a>
<a id="schema_ListAddUserRequest"></a>
<a id="tocSlistadduserrequest"></a>
<a id="tocslistadduserrequest"></a>

```json
{
  "user_id": "2244994945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_id|[UserId](#schemauserid)|true|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

<h2 id="tocS_ListCreateRequest">ListCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistcreaterequest"></a>
<a id="schema_ListCreateRequest"></a>
<a id="tocSlistcreaterequest"></a>
<a id="tocslistcreaterequest"></a>

```json
{
  "description": "string",
  "name": "string",
  "private": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|true|none|none|
|private|boolean|false|none|none|

<h2 id="tocS_ListCreateResponse">ListCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcreateresponse"></a>
<a id="schema_ListCreateResponse"></a>
<a id="tocSlistcreateresponse"></a>
<a id="tocslistcreateresponse"></a>

```json
{
  "data": {
    "id": "1146654567674912769",
    "name": "string"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|A Twitter List is a curated group of accounts.|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_ListDeleteResponse">ListDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistdeleteresponse"></a>
<a id="schema_ListDeleteResponse"></a>
<a id="tocSlistdeleteresponse"></a>
<a id="tocslistdeleteresponse"></a>

```json
{
  "data": {
    "deleted": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_ListFollowedRequest">ListFollowedRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistfollowedrequest"></a>
<a id="schema_ListFollowedRequest"></a>
<a id="tocSlistfollowedrequest"></a>
<a id="tocslistfollowedrequest"></a>

```json
{
  "list_id": "1146654567674912769"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list_id|[ListId](#schemalistid)|true|none|The unique identifier of this List.|

<h2 id="tocS_ListFollowedResponse">ListFollowedResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistfollowedresponse"></a>
<a id="schema_ListFollowedResponse"></a>
<a id="tocSlistfollowedresponse"></a>
<a id="tocslistfollowedresponse"></a>

```json
{
  "data": {
    "following": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_ListId">ListId</h2>
<!-- backwards compatibility -->
<a id="schemalistid"></a>
<a id="schema_ListId"></a>
<a id="tocSlistid"></a>
<a id="tocslistid"></a>

```json
"1146654567674912769"
```

The unique identifier of this List.

<h2 id="tocS_ListMutateResponse">ListMutateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistmutateresponse"></a>
<a id="schema_ListMutateResponse"></a>
<a id="tocSlistmutateresponse"></a>
<a id="tocslistmutateresponse"></a>

```json
{
  "data": {
    "is_member": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_ListPinnedRequest">ListPinnedRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistpinnedrequest"></a>
<a id="schema_ListPinnedRequest"></a>
<a id="tocSlistpinnedrequest"></a>
<a id="tocslistpinnedrequest"></a>

```json
{
  "list_id": "1146654567674912769"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|list_id|[ListId](#schemalistid)|true|none|The unique identifier of this List.|

<h2 id="tocS_ListPinnedResponse">ListPinnedResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistpinnedresponse"></a>
<a id="schema_ListPinnedResponse"></a>
<a id="tocSlistpinnedresponse"></a>
<a id="tocslistpinnedresponse"></a>

```json
{
  "data": {
    "pinned": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_ListUnpinResponse">ListUnpinResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistunpinresponse"></a>
<a id="schema_ListUnpinResponse"></a>
<a id="tocSlistunpinresponse"></a>
<a id="tocslistunpinresponse"></a>

```json
{
  "data": {
    "pinned": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_ListUpdateRequest">ListUpdateRequest</h2>
<!-- backwards compatibility -->
<a id="schemalistupdaterequest"></a>
<a id="schema_ListUpdateRequest"></a>
<a id="tocSlistupdaterequest"></a>
<a id="tocslistupdaterequest"></a>

```json
{
  "description": "string",
  "name": "string",
  "private": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|name|string|false|none|none|
|private|boolean|false|none|none|

<h2 id="tocS_ListUpdateResponse">ListUpdateResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistupdateresponse"></a>
<a id="schema_ListUpdateResponse"></a>
<a id="tocSlistupdateresponse"></a>
<a id="tocslistupdateresponse"></a>

```json
{
  "data": {
    "updated": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_Media">Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_Media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "height": 0,
  "media_key": "string",
  "type": "string",
  "width": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|[MediaHeight](#schemamediaheight)|false|none|The height of the media in pixels.|
|media_key|[MediaKey](#schemamediakey)|false|none|The Media Key identifier for this attachment.|
|type|string|true|none|none|
|width|[MediaWidth](#schemamediawidth)|false|none|The width of the media in pixels.|

<h2 id="tocS_MediaHeight">MediaHeight</h2>
<!-- backwards compatibility -->
<a id="schemamediaheight"></a>
<a id="schema_MediaHeight"></a>
<a id="tocSmediaheight"></a>
<a id="tocsmediaheight"></a>

```json
0
```

The height of the media in pixels.

<h2 id="tocS_MediaId">MediaId</h2>
<!-- backwards compatibility -->
<a id="schemamediaid"></a>
<a id="schema_MediaId"></a>
<a id="tocSmediaid"></a>
<a id="tocsmediaid"></a>

```json
"1146654567674912769"
```

The unique identifier of this Media.

<h2 id="tocS_MediaKey">MediaKey</h2>
<!-- backwards compatibility -->
<a id="schemamediakey"></a>
<a id="schema_MediaKey"></a>
<a id="tocSmediakey"></a>
<a id="tocsmediakey"></a>

```json
"string"
```

The Media Key identifier for this attachment.

<h2 id="tocS_MediaWidth">MediaWidth</h2>
<!-- backwards compatibility -->
<a id="schemamediawidth"></a>
<a id="schema_MediaWidth"></a>
<a id="tocSmediawidth"></a>
<a id="tocsmediawidth"></a>

```json
0
```

The width of the media in pixels.

<h2 id="tocS_MentionEntity">MentionEntity</h2>
<!-- backwards compatibility -->
<a id="schemamentionentity"></a>
<a id="schema_MentionEntity"></a>
<a id="tocSmentionentity"></a>
<a id="tocsmentionentity"></a>

```json
{
  "end": 61,
  "start": 50,
  "id": "2244994945",
  "username": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|true|none|Index (zero-based) at which position this entity ends.  The index is exclusive.|
|start|integer|true|none|Index (zero-based) at which position this entity starts.  The index is inclusive.|
|id|[UserId](#schemauserid)|false|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|username|[UserName](#schemausername)|true|none|The Twitter handle (screen name) of this user.|

<h2 id="tocS_MentionFields">MentionFields</h2>
<!-- backwards compatibility -->
<a id="schemamentionfields"></a>
<a id="schema_MentionFields"></a>
<a id="tocSmentionfields"></a>
<a id="tocsmentionfields"></a>

```json
{
  "id": "2244994945",
  "username": "string"
}
```

Represent the portion of text recognized as a User mention, and its start and end position within the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[UserId](#schemauserid)|false|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|username|[UserName](#schemausername)|true|none|The Twitter handle (screen name) of this user.|

<h2 id="tocS_MuteUserMutationResponse">MuteUserMutationResponse</h2>
<!-- backwards compatibility -->
<a id="schemamuteusermutationresponse"></a>
<a id="schema_MuteUserMutationResponse"></a>
<a id="tocSmuteusermutationresponse"></a>
<a id="tocsmuteusermutationresponse"></a>

```json
{
  "data": {
    "muting": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_MuteUserRequest">MuteUserRequest</h2>
<!-- backwards compatibility -->
<a id="schemamuteuserrequest"></a>
<a id="schema_MuteUserRequest"></a>
<a id="tocSmuteuserrequest"></a>
<a id="tocsmuteuserrequest"></a>

```json
{
  "target_user_id": "2244994945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_user_id|[UserId](#schemauserid)|true|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

<h2 id="tocS_NewestId">NewestId</h2>
<!-- backwards compatibility -->
<a id="schemanewestid"></a>
<a id="schema_NewestId"></a>
<a id="tocSnewestid"></a>
<a id="tocsnewestid"></a>

```json
"string"
```

The newest id in this response.

<h2 id="tocS_NextToken">NextToken</h2>
<!-- backwards compatibility -->
<a id="schemanexttoken"></a>
<a id="schema_NextToken"></a>
<a id="tocSnexttoken"></a>
<a id="tocsnexttoken"></a>

```json
"string"
```

The next token.

<h2 id="tocS_NonCompliantRulesProblem">NonCompliantRulesProblem</h2>
<!-- backwards compatibility -->
<a id="schemanoncompliantrulesproblem"></a>
<a id="schema_NonCompliantRulesProblem"></a>
<a id="tocSnoncompliantrulesproblem"></a>
<a id="tocsnoncompliantrulesproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

A problem that indicates the user's rule set is not compliant.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_Oauth1PermissionsProblem">Oauth1PermissionsProblem</h2>
<!-- backwards compatibility -->
<a id="schemaoauth1permissionsproblem"></a>
<a id="schema_Oauth1PermissionsProblem"></a>
<a id="tocSoauth1permissionsproblem"></a>
<a id="tocsoauth1permissionsproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

A problem that indicates your client application does not have the required OAuth1 permissions for the requested endpoint.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_OldestId">OldestId</h2>
<!-- backwards compatibility -->
<a id="schemaoldestid"></a>
<a id="schema_OldestId"></a>
<a id="tocSoldestid"></a>
<a id="tocsoldestid"></a>

```json
"string"
```

The oldest id in this response.

<h2 id="tocS_OperationalDisconnectProblem">OperationalDisconnectProblem</h2>
<!-- backwards compatibility -->
<a id="schemaoperationaldisconnectproblem"></a>
<a id="schema_OperationalDisconnectProblem"></a>
<a id="tocSoperationaldisconnectproblem"></a>
<a id="tocsoperationaldisconnectproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "disconnect_type": "OperationalDisconnect"
}
```

You have been disconnected for operational reasons.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|disconnect_type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|disconnect_type|OperationalDisconnect|
|disconnect_type|UpstreamOperationalDisconnect|
|disconnect_type|ForceDisconnect|
|disconnect_type|UpstreamUncleanDisconnect|
|disconnect_type|SlowReader|
|disconnect_type|InternalError|
|disconnect_type|ClientApplicationStateDegraded|
|disconnect_type|InvalidRules|

<h2 id="tocS_PaginationToken32">PaginationToken32</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken32"></a>
<a id="schema_PaginationToken32"></a>
<a id="tocSpaginationtoken32"></a>
<a id="tocspaginationtoken32"></a>

```json
"stringstringstri"
```

A base32 pagination token.

<h2 id="tocS_PaginationToken36">PaginationToken36</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtoken36"></a>
<a id="schema_PaginationToken36"></a>
<a id="tocSpaginationtoken36"></a>
<a id="tocspaginationtoken36"></a>

```json
"string"
```

A base36 pagination token.

<h2 id="tocS_PaginationTokenLong">PaginationTokenLong</h2>
<!-- backwards compatibility -->
<a id="schemapaginationtokenlong"></a>
<a id="schema_PaginationTokenLong"></a>
<a id="tocSpaginationtokenlong"></a>
<a id="tocspaginationtokenlong"></a>

```json
"string"
```

A 'long' pagination token.

<h2 id="tocS_Photo">Photo</h2>
<!-- backwards compatibility -->
<a id="schemaphoto"></a>
<a id="schema_Photo"></a>
<a id="tocSphoto"></a>
<a id="tocsphoto"></a>

```json
{
  "height": 0,
  "media_key": "string",
  "type": "string",
  "width": 0,
  "alt_text": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|[MediaHeight](#schemamediaheight)|false|none|The height of the media in pixels.|
|media_key|[MediaKey](#schemamediakey)|false|none|The Media Key identifier for this attachment.|
|type|string|true|none|none|
|width|[MediaWidth](#schemamediawidth)|false|none|The width of the media in pixels.|
|alt_text|string|false|none|none|
|url|string(uri)|false|none|none|

<h2 id="tocS_Place">Place</h2>
<!-- backwards compatibility -->
<a id="schemaplace"></a>
<a id="schema_Place"></a>
<a id="tocSplace"></a>
<a id="tocsplace"></a>

```json
{
  "contained_within": [
    "f7eb2fa2fea288b1"
  ],
  "country": "United States",
  "country_code": "US",
  "full_name": "Lakewood, CO",
  "geo": {
    "bbox": [
      -105.193475,
      39.60973,
      -105.053164,
      39.761974
    ],
    "geometry": {
      "coordinates": [
        -105.18816086351444,
        40.247749999999996
      ],
      "type": "Point"
    },
    "properties": {},
    "type": "Feature"
  },
  "id": "f7eb2fa2fea288b1",
  "name": "Lakewood",
  "place_type": "city"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contained_within|[[PlaceId](#schemaplaceid)]|false|none|none|
|country|string|false|none|The full name of the county in which this place exists.|
|country_code|[CountryCode](#schemacountrycode)|false|none|A two-letter ISO 3166-1 alpha-2 country code.|
|full_name|string|true|none|The full name of this place.|
|geo|[Geo](#schemageo)|false|none|none|
|id|[PlaceId](#schemaplaceid)|true|none|The identifier for this place.|
|name|string|false|none|The human readable name of this place.|
|place_type|[PlaceType](#schemaplacetype)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|place_type|poi|
|place_type|neighborhood|
|place_type|city|
|place_type|admin|
|place_type|country|
|place_type|unknown|

<h2 id="tocS_PlaceId">PlaceId</h2>
<!-- backwards compatibility -->
<a id="schemaplaceid"></a>
<a id="schema_PlaceId"></a>
<a id="tocSplaceid"></a>
<a id="tocsplaceid"></a>

```json
"f7eb2fa2fea288b1"
```

The identifier for this place.

<h2 id="tocS_PlaceType">PlaceType</h2>
<!-- backwards compatibility -->
<a id="schemaplacetype"></a>
<a id="schema_PlaceType"></a>
<a id="tocSplacetype"></a>
<a id="tocsplacetype"></a>

```json
"city"
```

<h2 id="tocS_Point">Point</h2>
<!-- backwards compatibility -->
<a id="schemapoint"></a>
<a id="schema_Point"></a>
<a id="tocSpoint"></a>
<a id="tocspoint"></a>

```json
{
  "coordinates": [
    -105.18816086351444,
    40.247749999999996
  ],
  "type": "Point"
}
```

A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|coordinates|[Position](#schemaposition)|true|none|A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.|
|type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|Point|

<h2 id="tocS_Poll">Poll</h2>
<!-- backwards compatibility -->
<a id="schemapoll"></a>
<a id="schema_Poll"></a>
<a id="tocSpoll"></a>
<a id="tocspoll"></a>

```json
{
  "duration_minutes": 5,
  "end_datetime": "1970-01-01T00:00:00Z",
  "id": "1365059861688410112",
  "options": [
    {
      "label": "string",
      "position": 0,
      "votes": 0
    },
    {
      "label": "string",
      "position": 0,
      "votes": 0
    }
  ],
  "voting_status": "open"
}
```

Represent a Poll attached to a Tweet.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|duration_minutes|integer(int32)|false|none|none|
|end_datetime|string(date-time)|false|none|none|
|id|[PollId](#schemapollid)|true|none|Unique identifier of this poll.|
|options|[[PollOption](#schemapolloption)]|true|none|none|
|voting_status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|voting_status|open|
|voting_status|closed|

<h2 id="tocS_PollId">PollId</h2>
<!-- backwards compatibility -->
<a id="schemapollid"></a>
<a id="schema_PollId"></a>
<a id="tocSpollid"></a>
<a id="tocspollid"></a>

```json
"1365059861688410112"
```

Unique identifier of this poll.

<h2 id="tocS_PollOption">PollOption</h2>
<!-- backwards compatibility -->
<a id="schemapolloption"></a>
<a id="schema_PollOption"></a>
<a id="tocSpolloption"></a>
<a id="tocspolloption"></a>

```json
{
  "label": "string",
  "position": 0,
  "votes": 0
}
```

Describes a choice in a Poll object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|label|[PollOptionLabel](#schemapolloptionlabel)|true|none|The text of a poll choice.|
|position|integer|true|none|Position of this choice in the poll.|
|votes|integer|true|none|Number of users who voted for this choice.|

<h2 id="tocS_PollOptionLabel">PollOptionLabel</h2>
<!-- backwards compatibility -->
<a id="schemapolloptionlabel"></a>
<a id="schema_PollOptionLabel"></a>
<a id="tocSpolloptionlabel"></a>
<a id="tocspolloptionlabel"></a>

```json
"string"
```

The text of a poll choice.

<h2 id="tocS_Position">Position</h2>
<!-- backwards compatibility -->
<a id="schemaposition"></a>
<a id="schema_Position"></a>
<a id="tocSposition"></a>
<a id="tocsposition"></a>

```json
[
  -105.18816086351444,
  40.247749999999996
]
```

A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.

<h2 id="tocS_PreviousToken">PreviousToken</h2>
<!-- backwards compatibility -->
<a id="schemaprevioustoken"></a>
<a id="schema_PreviousToken"></a>
<a id="tocSprevioustoken"></a>
<a id="tocsprevioustoken"></a>

```json
"string"
```

The previous token.

<h2 id="tocS_Problem">Problem</h2>
<!-- backwards compatibility -->
<a id="schemaproblem"></a>
<a id="schema_Problem"></a>
<a id="tocSproblem"></a>
<a id="tocsproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ReplySettings">ReplySettings</h2>
<!-- backwards compatibility -->
<a id="schemareplysettings"></a>
<a id="schema_ReplySettings"></a>
<a id="tocSreplysettings"></a>
<a id="tocsreplysettings"></a>

```json
"everyone"
```

Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following.

<h2 id="tocS_ResourceNotFoundProblem">ResourceNotFoundProblem</h2>
<!-- backwards compatibility -->
<a id="schemaresourcenotfoundproblem"></a>
<a id="schema_ResourceNotFoundProblem"></a>
<a id="tocSresourcenotfoundproblem"></a>
<a id="tocsresourcenotfoundproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "parameter": "string",
  "resource_id": "string",
  "resource_type": "user",
  "value": "string"
}
```

A problem that indicates that a given Tweet, User, etc. does not exist.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|parameter|string|true|none|none|
|resource_id|string|true|none|none|
|resource_type|string|true|none|none|
|value|string|true|none|Value will match the schema of the field.|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|user|
|resource_type|tweet|
|resource_type|media|
|resource_type|list|
|resource_type|space|

<h2 id="tocS_ResourceUnauthorizedProblem">ResourceUnauthorizedProblem</h2>
<!-- backwards compatibility -->
<a id="schemaresourceunauthorizedproblem"></a>
<a id="schema_ResourceUnauthorizedProblem"></a>
<a id="tocSresourceunauthorizedproblem"></a>
<a id="tocsresourceunauthorizedproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "parameter": "string",
  "resource_id": "string",
  "resource_type": "user",
  "section": "data",
  "value": "string"
}
```

A problem that indicates you are not allowed to see a particular Tweet, User, etc.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|parameter|string|true|none|none|
|resource_id|string|true|none|none|
|resource_type|string|true|none|none|
|section|string|true|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|user|
|resource_type|tweet|
|resource_type|media|
|resource_type|list|
|resource_type|space|
|section|data|
|section|includes|

<h2 id="tocS_ResourceUnavailableProblem">ResourceUnavailableProblem</h2>
<!-- backwards compatibility -->
<a id="schemaresourceunavailableproblem"></a>
<a id="schema_ResourceUnavailableProblem"></a>
<a id="tocSresourceunavailableproblem"></a>
<a id="tocsresourceunavailableproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "parameter": "string",
  "resource_id": "string",
  "resource_type": "user"
}
```

A problem that indicates a particular Tweet, User, etc. is not available to you.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|parameter|string|true|none|none|
|resource_id|string|true|none|none|
|resource_type|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|resource_type|user|
|resource_type|tweet|
|resource_type|media|
|resource_type|list|
|resource_type|space|

<h2 id="tocS_ResultCount">ResultCount</h2>
<!-- backwards compatibility -->
<a id="schemaresultcount"></a>
<a id="schema_ResultCount"></a>
<a id="tocSresultcount"></a>
<a id="tocsresultcount"></a>

```json
0
```

The number of results returned in this response.

<h2 id="tocS_Rule">Rule</h2>
<!-- backwards compatibility -->
<a id="schemarule"></a>
<a id="schema_Rule"></a>
<a id="tocSrule"></a>
<a id="tocsrule"></a>

```json
{
  "id": "120897978112909812",
  "tag": "Non-retweeted coffee Tweets",
  "value": "coffee -is:retweet"
}
```

A user-provided stream filtering rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|[RuleId](#schemaruleid)|false|none|Unique identifier of this rule.|
|tag|[RuleTag](#schemaruletag)|false|none|A tag meant for the labeling of user provided rules.|
|value|[RuleValue](#schemarulevalue)|true|none|The filterlang value of the rule.|

<h2 id="tocS_RuleId">RuleId</h2>
<!-- backwards compatibility -->
<a id="schemaruleid"></a>
<a id="schema_RuleId"></a>
<a id="tocSruleid"></a>
<a id="tocsruleid"></a>

```json
"120897978112909812"
```

Unique identifier of this rule.

<h2 id="tocS_RuleNoId">RuleNoId</h2>
<!-- backwards compatibility -->
<a id="schemarulenoid"></a>
<a id="schema_RuleNoId"></a>
<a id="tocSrulenoid"></a>
<a id="tocsrulenoid"></a>

```json
{
  "tag": "Non-retweeted coffee Tweets",
  "value": "coffee -is:retweet"
}
```

A user-provided stream filtering rule.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tag|[RuleTag](#schemaruletag)|false|none|A tag meant for the labeling of user provided rules.|
|value|[RuleValue](#schemarulevalue)|true|none|The filterlang value of the rule.|

<h2 id="tocS_RuleTag">RuleTag</h2>
<!-- backwards compatibility -->
<a id="schemaruletag"></a>
<a id="schema_RuleTag"></a>
<a id="tocSruletag"></a>
<a id="tocsruletag"></a>

```json
"Non-retweeted coffee Tweets"
```

A tag meant for the labeling of user provided rules.

<h2 id="tocS_RuleValue">RuleValue</h2>
<!-- backwards compatibility -->
<a id="schemarulevalue"></a>
<a id="schema_RuleValue"></a>
<a id="tocSrulevalue"></a>
<a id="tocsrulevalue"></a>

```json
"coffee -is:retweet"
```

The filterlang value of the rule.

<h2 id="tocS_RulesCapProblem">RulesCapProblem</h2>
<!-- backwards compatibility -->
<a id="schemarulescapproblem"></a>
<a id="schema_RulesCapProblem"></a>
<a id="tocSrulescapproblem"></a>
<a id="tocsrulescapproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

You have exceeded the maximum number of rules.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_RulesLookupResponse">RulesLookupResponse</h2>
<!-- backwards compatibility -->
<a id="schemaruleslookupresponse"></a>
<a id="schema_RulesLookupResponse"></a>
<a id="tocSruleslookupresponse"></a>
<a id="tocsruleslookupresponse"></a>

```json
{
  "data": [
    {
      "id": "120897978112909812",
      "tag": "Non-retweeted coffee Tweets",
      "value": "coffee -is:retweet"
    }
  ],
  "meta": {
    "next_token": "string",
    "result_count": 0,
    "sent": "string",
    "summary": {
      "created": 1,
      "invalid": 1,
      "not_created": 1,
      "valid": 1
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Rule](#schemarule)]|false|none|none|
|meta|[RulesResponseMetadata](#schemarulesresponsemetadata)|true|none|none|

<h2 id="tocS_RulesRequestSummary">RulesRequestSummary</h2>
<!-- backwards compatibility -->
<a id="schemarulesrequestsummary"></a>
<a id="schema_RulesRequestSummary"></a>
<a id="tocSrulesrequestsummary"></a>
<a id="tocsrulesrequestsummary"></a>

```json
{
  "created": 1,
  "invalid": 1,
  "not_created": 1,
  "valid": 1
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|A summary of the results of the addition of user-specified stream filtering rules.|
|created|integer(int32)|true|none|Number of user-specified stream filtering rules that were created.|
|invalid|integer(int32)|true|none|Number of invalid user-specified stream filtering rules.|
|not_created|integer(int32)|true|none|Number of user-specified stream filtering rules that were not created.|
|valid|integer(int32)|true|none|Number of valid user-specified stream filtering rules.|
|*oneOf*|object|false|none|none|
|deleted|integer(int32)|true|none|Number of user-specified stream filtering rules that were deleted.|
|not_deleted|integer(int32)|true|none|Number of user-specified stream filtering rules that were not deleted.|

<h2 id="tocS_RulesResponseMetadata">RulesResponseMetadata</h2>
<!-- backwards compatibility -->
<a id="schemarulesresponsemetadata"></a>
<a id="schema_RulesResponseMetadata"></a>
<a id="tocSrulesresponsemetadata"></a>
<a id="tocsrulesresponsemetadata"></a>

```json
{
  "next_token": "string",
  "result_count": 0,
  "sent": "string",
  "summary": {
    "created": 1,
    "invalid": 1,
    "not_created": 1,
    "valid": 1
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_token|[NextToken](#schemanexttoken)|false|none|The next token.|
|result_count|integer(int32)|false|none|Number of Rules in result set.|
|sent|string|true|none|none|
|summary|[RulesRequestSummary](#schemarulesrequestsummary)|false|none|none|

<h2 id="tocS_SearchCount">SearchCount</h2>
<!-- backwards compatibility -->
<a id="schemasearchcount"></a>
<a id="schema_SearchCount"></a>
<a id="tocSsearchcount"></a>
<a id="tocssearchcount"></a>

```json
{
  "end": "1970-01-01T00:00:00Z",
  "start": "1970-01-01T00:00:00Z",
  "tweet_count": 0
}
```

Represent a Search Count Result.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|[End](#schemaend)|true|none|The end time of the bucket.|
|start|[Start](#schemastart)|true|none|The start time of the bucket.|
|tweet_count|[TweetCount](#schematweetcount)|true|none|The count for the bucket.|

<h2 id="tocS_Space">Space</h2>
<!-- backwards compatibility -->
<a id="schemaspace"></a>
<a id="schema_Space"></a>
<a id="tocSspace"></a>
<a id="tocsspace"></a>

```json
{
  "created_at": "2021-07-06T18:40:40.000Z",
  "creator_id": "2244994945",
  "ended_at": "2021-07-06T18:40:40.000Z",
  "host_ids": [
    "2244994945"
  ],
  "id": "1SLjjRYNejbKM",
  "invited_user_ids": [
    "2244994945"
  ],
  "is_ticketed": "false",
  "lang": "en",
  "participant_count": 10,
  "scheduled_start": "2021-07-06T18:40:40.000Z",
  "speaker_ids": [
    "2244994945"
  ],
  "started_at": "2021-7-14T04:35:55Z",
  "state": "live",
  "subscriber_count": 10,
  "title": "Spaces are Awesome",
  "topics": [
    {
      "description": "All about technology",
      "id": "848920371311001600",
      "name": "Technology"
    }
  ],
  "updated_at": "2021-7-14T04:35:55Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|Creation time of the Space.|
|creator_id|[UserId](#schemauserid)|false|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|ended_at|string(date-time)|false|none|End time of the Space.|
|host_ids|[[UserId](#schemauserid)]|false|none|The user ids for the hosts of the Space.|
|id|[SpaceId](#schemaspaceid)|true|none|The unique identifier of this Space.|
|invited_user_ids|[[UserId](#schemauserid)]|false|none|An array of user ids for people who were invited to a Space.|
|is_ticketed|boolean|false|none|Denotes if the Space is a ticketed Space.|
|lang|string|false|none|The language of the Space.|
|participant_count|integer(int32)|false|none|The number of participants in a Space.|
|scheduled_start|string(date-time)|false|none|A date time stamp for when a Space is scheduled to begin.|
|speaker_ids|[[UserId](#schemauserid)]|false|none|An array of user ids for people who were speakers in a Space.|
|started_at|string(date-time)|false|none|When the Space was started as a date string.|
|state|string|true|none|The current state of the Space.|
|subscriber_count|integer(int32)|false|none|The number of people who have either purchased a ticket or set a reminder for this Space.|
|title|string|false|none|The title of the Space.|
|topics|[object]|false|none|The topics of a Space, as selected by its creator.|
|updated_at|string(date-time)|false|none|When the Space was last updated.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|live|
|state|scheduled|
|state|ended|

<h2 id="tocS_SpaceId">SpaceId</h2>
<!-- backwards compatibility -->
<a id="schemaspaceid"></a>
<a id="schema_SpaceId"></a>
<a id="tocSspaceid"></a>
<a id="tocsspaceid"></a>

```json
"1SLjjRYNejbKM"
```

The unique identifier of this Space.

<h2 id="tocS_Start">Start</h2>
<!-- backwards compatibility -->
<a id="schemastart"></a>
<a id="schema_Start"></a>
<a id="tocSstart"></a>
<a id="tocsstart"></a>

```json
"1970-01-01T00:00:00Z"
```

The start time of the bucket.

<h2 id="tocS_StreamingTweetResponse">StreamingTweetResponse</h2>
<!-- backwards compatibility -->
<a id="schemastreamingtweetresponse"></a>
<a id="schema_StreamingTweetResponse"></a>
<a id="tocSstreamingtweetresponse"></a>
<a id="tocsstreamingtweetresponse"></a>

```json
{
  "data": {
    "author_id": "2244994945",
    "created_at": "Wed Jan 06 18:40:40 +0000 2021",
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ],
  "includes": {
    "media": [
      {
        "height": 0,
        "media_key": "string",
        "type": "string",
        "width": 0
      }
    ],
    "places": [
      {
        "contained_within": [
          "f7eb2fa2fea288b1"
        ],
        "country": "United States",
        "country_code": "US",
        "full_name": "Lakewood, CO",
        "geo": {
          "bbox": [
            -105.193475,
            39.60973,
            -105.053164,
            39.761974
          ],
          "geometry": {
            "coordinates": [
              -105.18816086351444,
              40.247749999999996
            ],
            "type": "Point"
          },
          "properties": {},
          "type": "Feature"
        },
        "id": "f7eb2fa2fea288b1",
        "name": "Lakewood",
        "place_type": "city"
      }
    ],
    "polls": [
      {
        "duration_minutes": 5,
        "end_datetime": "1970-01-01T00:00:00Z",
        "id": "1365059861688410112",
        "options": [
          {
            "label": "string",
            "position": 0,
            "votes": 0
          },
          {
            "label": "string",
            "position": 0,
            "votes": 0
          }
        ],
        "voting_status": "open"
      }
    ],
    "topics": [
      {
        "description": "All about technology",
        "id": "string",
        "name": "Technology"
      }
    ],
    "tweets": [
      {
        "author_id": "2244994945",
        "created_at": "Wed Jan 06 18:40:40 +0000 2021",
        "id": "1346889436626259968",
        "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
      }
    ],
    "users": [
      {
        "created_at": "2013-12-14T04:35:55Z",
        "id": "2244994945",
        "name": "Twitter Dev",
        "protected": false,
        "username": "TwitterDev"
      }
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Tweet](#schematweet)|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|
|includes|[Expansions](#schemaexpansions)|false|none|none|

<h2 id="tocS_Topic">Topic</h2>
<!-- backwards compatibility -->
<a id="schematopic"></a>
<a id="schema_Topic"></a>
<a id="tocStopic"></a>
<a id="tocstopic"></a>

```json
{
  "description": "All about technology",
  "id": "string",
  "name": "Technology"
}
```

The topic of a Space, as selected by its creator.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|The description of the given topic.|
|id|[TopicId](#schematopicid)|true|none|Unique identifier of this Topic.|
|name|string|true|none|The name of the given topic.|

<h2 id="tocS_TopicId">TopicId</h2>
<!-- backwards compatibility -->
<a id="schematopicid"></a>
<a id="schema_TopicId"></a>
<a id="tocStopicid"></a>
<a id="tocstopicid"></a>

```json
"string"
```

Unique identifier of this Topic.

<h2 id="tocS_Tweet">Tweet</h2>
<!-- backwards compatibility -->
<a id="schematweet"></a>
<a id="schema_Tweet"></a>
<a id="tocStweet"></a>
<a id="tocstweet"></a>

```json
{
  "author_id": "2244994945",
  "created_at": "Wed Jan 06 18:40:40 +0000 2021",
  "id": "1346889436626259968",
  "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attachments|object|false|none|Specifies the type of attachments (if any) present in this Tweet.|
|author_id|[UserId](#schemauserid)|false|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|context_annotations|[[ContextAnnotation](#schemacontextannotation)]|false|none|none|
|conversation_id|[TweetId](#schematweetid)|false|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|created_at|string(date-time)|false|none|Creation time of the Tweet.|
|edit_controls|object|false|none|none|
|edit_history_tweet_ids|[[TweetId](#schematweetid)]|true|none|A list of Tweet Ids in this Tweet chain.|
|entities|[FullTextEntities](#schemafulltextentities)|false|none|none|
|geo|object|false|none|The location tagged on the Tweet, if the user provided one.|
|id|[TweetId](#schematweetid)|true|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|in_reply_to_user_id|[UserId](#schemauserid)|false|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|lang|string|false|none|Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.|
|non_public_metrics|object|false|none|Nonpublic engagement metrics for the Tweet at the time of the request.|
|organic_metrics|object|false|none|Organic nonpublic engagement metrics for the Tweet at the time of the request.|
|possibly_sensitive|boolean|false|none|Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.|
|promoted_metrics|object|false|none|Promoted nonpublic engagement metrics for the Tweet at the time of the request.|
|public_metrics|object|false|none|Engagement metrics for the Tweet at the time of the request.|
|referenced_tweets|[object]|false|none|A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.|
|reply_settings|[ReplySettings](#schemareplysettings)|false|none|Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following.|
|source|string|false|none|This is deprecated.|
|text|[TweetText](#schematweettext)|true|none|The content of the Tweet.|
|withheld|[TweetWithheld](#schematweetwithheld)|false|none|Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).|

#### Enumerated Values

|Property|Value|
|---|---|
|reply_settings|everyone|
|reply_settings|mentionedUsers|
|reply_settings|following|
|reply_settings|other|

<h2 id="tocS_TweetComplianceData">TweetComplianceData</h2>
<!-- backwards compatibility -->
<a id="schematweetcompliancedata"></a>
<a id="schema_TweetComplianceData"></a>
<a id="tocStweetcompliancedata"></a>
<a id="tocstweetcompliancedata"></a>

```json
{
  "delete": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "quote_tweet_id": "1346889436626259968",
    "tweet": {
      "author_id": "2244994945",
      "id": "1346889436626259968"
    }
  }
}
```

Tweet compliance data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TweetDeleteComplianceSchema](#schematweetdeletecomplianceschema)|false|none|none|
|*oneOf*|[TweetWithheldComplianceSchema](#schematweetwithheldcomplianceschema)|false|none|none|
|*oneOf*|[TweetDropComplianceSchema](#schematweetdropcomplianceschema)|false|none|none|
|*oneOf*|[TweetUndropComplianceSchema](#schematweetundropcomplianceschema)|false|none|none|
|*oneOf*|[TweetEditComplianceSchema](#schematweeteditcomplianceschema)|false|none|none|

<h2 id="tocS_TweetComplianceSchema">TweetComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schematweetcomplianceschema"></a>
<a id="schema_TweetComplianceSchema"></a>
<a id="tocStweetcomplianceschema"></a>
<a id="tocstweetcomplianceschema"></a>

```json
{
  "event_at": "2021-07-06T18:40:40.000Z",
  "quote_tweet_id": "1346889436626259968",
  "tweet": {
    "author_id": "2244994945",
    "id": "1346889436626259968"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_at|string(date-time)|true|none|Event time.|
|quote_tweet_id|[TweetId](#schematweetid)|false|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|tweet|object|true|none|none|

<h2 id="tocS_TweetComplianceStreamResponse">TweetComplianceStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schematweetcompliancestreamresponse"></a>
<a id="schema_TweetComplianceStreamResponse"></a>
<a id="tocStweetcompliancestreamresponse"></a>
<a id="tocstweetcompliancestreamresponse"></a>

```json
{
  "data": {
    "delete": {
      "event_at": "2021-07-06T18:40:40.000Z",
      "quote_tweet_id": "1346889436626259968",
      "tweet": {
        "author_id": "2244994945",
        "id": "1346889436626259968"
      }
    }
  }
}
```

Tweet compliance stream events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Compliance event.|
|data|[TweetComplianceData](#schematweetcompliancedata)|true|none|Tweet compliance data.|
|*oneOf*|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|true|none|none|

<h2 id="tocS_TweetCount">TweetCount</h2>
<!-- backwards compatibility -->
<a id="schematweetcount"></a>
<a id="schema_TweetCount"></a>
<a id="tocStweetcount"></a>
<a id="tocstweetcount"></a>

```json
0
```

The count for the bucket.

<h2 id="tocS_TweetCreateRequest">TweetCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schematweetcreaterequest"></a>
<a id="schema_TweetCreateRequest"></a>
<a id="tocStweetcreaterequest"></a>
<a id="tocstweetcreaterequest"></a>

```json
{
  "card_uri": "string",
  "direct_message_deep_link": "string",
  "for_super_followers_only": false,
  "geo": {
    "place_id": "string"
  },
  "media": {
    "media_ids": [
      "1146654567674912769"
    ],
    "tagged_user_ids": [
      "2244994945"
    ]
  },
  "nullcast": false,
  "poll": {
    "duration_minutes": 5,
    "options": [
      "string",
      "string"
    ],
    "reply_settings": "following"
  },
  "quote_tweet_id": "1346889436626259968",
  "reply": {
    "exclude_reply_user_ids": [
      "2244994945"
    ],
    "in_reply_to_tweet_id": "1346889436626259968"
  },
  "reply_settings": "following",
  "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card_uri|string|false|none|Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link.|
|direct_message_deep_link|string|false|none|Link to take the conversation from the public timeline to a private Direct Message.|
|for_super_followers_only|boolean|false|none|Exclusive Tweet for super followers.|
|geo|object|false|none|Place ID being attached to the Tweet for geo location.|
|media|object|false|none|Media information being attached to created Tweet. This is mutually exclusive from Quote Tweet Id, Poll, and Card URI.|
|nullcast|boolean|false|none|Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers.|
|poll|object|false|none|Poll options for a Tweet with a poll. This is mutually exclusive from Media, Quote Tweet Id, and Card URI.|
|quote_tweet_id|[TweetId](#schematweetid)|false|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|reply|object|false|none|Tweet information of the Tweet being replied to.|
|reply_settings|string|false|none|Settings to indicate who can reply to the Tweet.|
|text|[TweetText](#schematweettext)|false|none|The content of the Tweet.|

#### Enumerated Values

|Property|Value|
|---|---|
|reply_settings|following|
|reply_settings|mentionedUsers|

<h2 id="tocS_TweetCreateResponse">TweetCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schematweetcreateresponse"></a>
<a id="schema_TweetCreateResponse"></a>
<a id="tocStweetcreateresponse"></a>
<a id="tocstweetcreateresponse"></a>

```json
{
  "data": {
    "id": "1346889436626259968",
    "text": "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_TweetDeleteComplianceSchema">TweetDeleteComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schematweetdeletecomplianceschema"></a>
<a id="schema_TweetDeleteComplianceSchema"></a>
<a id="tocStweetdeletecomplianceschema"></a>
<a id="tocstweetdeletecomplianceschema"></a>

```json
{
  "delete": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "quote_tweet_id": "1346889436626259968",
    "tweet": {
      "author_id": "2244994945",
      "id": "1346889436626259968"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|delete|[TweetComplianceSchema](#schematweetcomplianceschema)|true|none|none|

<h2 id="tocS_TweetDeleteResponse">TweetDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schematweetdeleteresponse"></a>
<a id="schema_TweetDeleteResponse"></a>
<a id="tocStweetdeleteresponse"></a>
<a id="tocstweetdeleteresponse"></a>

```json
{
  "data": {
    "deleted": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_TweetDropComplianceSchema">TweetDropComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schematweetdropcomplianceschema"></a>
<a id="schema_TweetDropComplianceSchema"></a>
<a id="tocStweetdropcomplianceschema"></a>
<a id="tocstweetdropcomplianceschema"></a>

```json
{
  "drop": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "quote_tweet_id": "1346889436626259968",
    "tweet": {
      "author_id": "2244994945",
      "id": "1346889436626259968"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|drop|[TweetComplianceSchema](#schematweetcomplianceschema)|true|none|none|

<h2 id="tocS_TweetEditComplianceObjectSchema">TweetEditComplianceObjectSchema</h2>
<!-- backwards compatibility -->
<a id="schematweeteditcomplianceobjectschema"></a>
<a id="schema_TweetEditComplianceObjectSchema"></a>
<a id="tocStweeteditcomplianceobjectschema"></a>
<a id="tocstweeteditcomplianceobjectschema"></a>

```json
{
  "edit_tweet_ids": [
    "1346889436626259968"
  ],
  "event_at": "2021-07-06T18:40:40.000Z",
  "initial_tweet_id": "1346889436626259968",
  "tweet": {
    "id": "1346889436626259968"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|edit_tweet_ids|[[TweetId](#schematweetid)]|true|none|none|
|event_at|string(date-time)|true|none|Event time.|
|initial_tweet_id|[TweetId](#schematweetid)|true|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|tweet|object|true|none|none|

<h2 id="tocS_TweetEditComplianceSchema">TweetEditComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schematweeteditcomplianceschema"></a>
<a id="schema_TweetEditComplianceSchema"></a>
<a id="tocStweeteditcomplianceschema"></a>
<a id="tocstweeteditcomplianceschema"></a>

```json
{
  "tweet_edit": {
    "edit_tweet_ids": [
      "1346889436626259968"
    ],
    "event_at": "2021-07-06T18:40:40.000Z",
    "initial_tweet_id": "1346889436626259968",
    "tweet": {
      "id": "1346889436626259968"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tweet_edit|[TweetEditComplianceObjectSchema](#schematweeteditcomplianceobjectschema)|true|none|none|

<h2 id="tocS_TweetHideRequest">TweetHideRequest</h2>
<!-- backwards compatibility -->
<a id="schematweethiderequest"></a>
<a id="schema_TweetHideRequest"></a>
<a id="tocStweethiderequest"></a>
<a id="tocstweethiderequest"></a>

```json
{
  "hidden": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hidden|boolean|true|none|none|

<h2 id="tocS_TweetHideResponse">TweetHideResponse</h2>
<!-- backwards compatibility -->
<a id="schematweethideresponse"></a>
<a id="schema_TweetHideResponse"></a>
<a id="tocStweethideresponse"></a>
<a id="tocstweethideresponse"></a>

```json
{
  "data": {
    "hidden": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|

<h2 id="tocS_TweetId">TweetId</h2>
<!-- backwards compatibility -->
<a id="schematweetid"></a>
<a id="schema_TweetId"></a>
<a id="tocStweetid"></a>
<a id="tocstweetid"></a>

```json
"1346889436626259968"
```

Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

<h2 id="tocS_TweetLabelData">TweetLabelData</h2>
<!-- backwards compatibility -->
<a id="schematweetlabeldata"></a>
<a id="schema_TweetLabelData"></a>
<a id="tocStweetlabeldata"></a>
<a id="tocstweetlabeldata"></a>

```json
{
  "public_tweet_notice": {
    "application": "apply",
    "details": "string",
    "event_at": "2021-07-06T18:40:40.000Z",
    "event_type": "misleading",
    "extended_details_url": "string",
    "label_title": "string",
    "tweet": {
      "author_id": "2244994945",
      "id": "1346889436626259968"
    }
  }
}
```

Tweet label data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[TweetNoticeSchema](#schematweetnoticeschema)|false|none|none|
|*oneOf*|[TweetUnviewableSchema](#schematweetunviewableschema)|false|none|none|

<h2 id="tocS_TweetLabelStreamResponse">TweetLabelStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schematweetlabelstreamresponse"></a>
<a id="schema_TweetLabelStreamResponse"></a>
<a id="tocStweetlabelstreamresponse"></a>
<a id="tocstweetlabelstreamresponse"></a>

```json
{
  "data": {
    "public_tweet_notice": {
      "application": "apply",
      "details": "string",
      "event_at": "2021-07-06T18:40:40.000Z",
      "event_type": "misleading",
      "extended_details_url": "string",
      "label_title": "string",
      "tweet": {
        "author_id": "2244994945",
        "id": "1346889436626259968"
      }
    }
  }
}
```

Tweet label stream events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|Tweet Label event.|
|data|[TweetLabelData](#schematweetlabeldata)|true|none|Tweet label data.|
|*oneOf*|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|true|none|none|

<h2 id="tocS_TweetNotice">TweetNotice</h2>
<!-- backwards compatibility -->
<a id="schematweetnotice"></a>
<a id="schema_TweetNotice"></a>
<a id="tocStweetnotice"></a>
<a id="tocstweetnotice"></a>

```json
{
  "application": "apply",
  "details": "string",
  "event_at": "2021-07-06T18:40:40.000Z",
  "event_type": "misleading",
  "extended_details_url": "string",
  "label_title": "string",
  "tweet": {
    "author_id": "2244994945",
    "id": "1346889436626259968"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|string|true|none|If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.|
|details|string|false|none|Information shown on the Tweet label|
|event_at|string(date-time)|true|none|Event time.|
|event_type|string|true|none|The type of label on the Tweet|
|extended_details_url|string|false|none|Link to more information about this kind of label|
|label_title|string|false|none|Title/header of the Tweet label|
|tweet|object|true|none|none|

<h2 id="tocS_TweetNoticeSchema">TweetNoticeSchema</h2>
<!-- backwards compatibility -->
<a id="schematweetnoticeschema"></a>
<a id="schema_TweetNoticeSchema"></a>
<a id="tocStweetnoticeschema"></a>
<a id="tocstweetnoticeschema"></a>

```json
{
  "public_tweet_notice": {
    "application": "apply",
    "details": "string",
    "event_at": "2021-07-06T18:40:40.000Z",
    "event_type": "misleading",
    "extended_details_url": "string",
    "label_title": "string",
    "tweet": {
      "author_id": "2244994945",
      "id": "1346889436626259968"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_tweet_notice|[TweetNotice](#schematweetnotice)|true|none|none|

<h2 id="tocS_TweetTakedownComplianceSchema">TweetTakedownComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schematweettakedowncomplianceschema"></a>
<a id="schema_TweetTakedownComplianceSchema"></a>
<a id="tocStweettakedowncomplianceschema"></a>
<a id="tocstweettakedowncomplianceschema"></a>

```json
{
  "event_at": "2021-07-06T18:40:40.000Z",
  "quote_tweet_id": "1346889436626259968",
  "tweet": {
    "author_id": "2244994945",
    "id": "1346889436626259968"
  },
  "withheld_in_countries": [
    "US"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_at|string(date-time)|true|none|Event time.|
|quote_tweet_id|[TweetId](#schematweetid)|false|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|tweet|object|true|none|none|
|withheld_in_countries|[[CountryCode](#schemacountrycode)]|true|none|none|

<h2 id="tocS_TweetText">TweetText</h2>
<!-- backwards compatibility -->
<a id="schematweettext"></a>
<a id="schema_TweetText"></a>
<a id="tocStweettext"></a>
<a id="tocstweettext"></a>

```json
"Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i"
```

The content of the Tweet.

<h2 id="tocS_TweetUndropComplianceSchema">TweetUndropComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schematweetundropcomplianceschema"></a>
<a id="schema_TweetUndropComplianceSchema"></a>
<a id="tocStweetundropcomplianceschema"></a>
<a id="tocstweetundropcomplianceschema"></a>

```json
{
  "undrop": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "quote_tweet_id": "1346889436626259968",
    "tweet": {
      "author_id": "2244994945",
      "id": "1346889436626259968"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|undrop|[TweetComplianceSchema](#schematweetcomplianceschema)|true|none|none|

<h2 id="tocS_TweetUnviewable">TweetUnviewable</h2>
<!-- backwards compatibility -->
<a id="schematweetunviewable"></a>
<a id="schema_TweetUnviewable"></a>
<a id="tocStweetunviewable"></a>
<a id="tocstweetunviewable"></a>

```json
{
  "application": "apply",
  "event_at": "2021-07-06T18:40:40.000Z",
  "tweet": {
    "author_id": "2244994945",
    "id": "1346889436626259968"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|application|string|true|none|If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.|
|event_at|string(date-time)|true|none|Event time.|
|tweet|object|true|none|none|

<h2 id="tocS_TweetUnviewableSchema">TweetUnviewableSchema</h2>
<!-- backwards compatibility -->
<a id="schematweetunviewableschema"></a>
<a id="schema_TweetUnviewableSchema"></a>
<a id="tocStweetunviewableschema"></a>
<a id="tocstweetunviewableschema"></a>

```json
{
  "public_tweet_unviewable": {
    "application": "apply",
    "event_at": "2021-07-06T18:40:40.000Z",
    "tweet": {
      "author_id": "2244994945",
      "id": "1346889436626259968"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|public_tweet_unviewable|[TweetUnviewable](#schematweetunviewable)|true|none|none|

<h2 id="tocS_TweetWithheld">TweetWithheld</h2>
<!-- backwards compatibility -->
<a id="schematweetwithheld"></a>
<a id="schema_TweetWithheld"></a>
<a id="tocStweetwithheld"></a>
<a id="tocstweetwithheld"></a>

```json
{
  "copyright": true,
  "country_codes": [
    "US"
  ],
  "scope": "tweet"
}
```

Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|boolean|true|none|Indicates if the content is being withheld for on the basis of copyright infringement.|
|country_codes|[[CountryCode](#schemacountrycode)]|true|none|Provides a list of countries where this content is not available.|
|scope|string|false|none|Indicates whether the content being withheld is the `tweet` or a `user`.|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|tweet|
|scope|user|

<h2 id="tocS_TweetWithheldComplianceSchema">TweetWithheldComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schematweetwithheldcomplianceschema"></a>
<a id="schema_TweetWithheldComplianceSchema"></a>
<a id="tocStweetwithheldcomplianceschema"></a>
<a id="tocstweetwithheldcomplianceschema"></a>

```json
{
  "withheld": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "quote_tweet_id": "1346889436626259968",
    "tweet": {
      "author_id": "2244994945",
      "id": "1346889436626259968"
    },
    "withheld_in_countries": [
      "US"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|withheld|[TweetTakedownComplianceSchema](#schematweettakedowncomplianceschema)|true|none|none|

<h2 id="tocS_UnsupportedAuthenticationProblem">UnsupportedAuthenticationProblem</h2>
<!-- backwards compatibility -->
<a id="schemaunsupportedauthenticationproblem"></a>
<a id="schema_UnsupportedAuthenticationProblem"></a>
<a id="tocSunsupportedauthenticationproblem"></a>
<a id="tocsunsupportedauthenticationproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string"
}
```

A problem that indicates that the authentication used is not supported.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_UploadExpiration">UploadExpiration</h2>
<!-- backwards compatibility -->
<a id="schemauploadexpiration"></a>
<a id="schema_UploadExpiration"></a>
<a id="tocSuploadexpiration"></a>
<a id="tocsuploadexpiration"></a>

```json
"2021-01-06T18:40:40.000Z"
```

Expiration time of the upload URL.

<h2 id="tocS_UploadUrl">UploadUrl</h2>
<!-- backwards compatibility -->
<a id="schemauploadurl"></a>
<a id="schema_UploadUrl"></a>
<a id="tocSuploadurl"></a>
<a id="tocsuploadurl"></a>

```json
"http://example.com"
```

URL to which the user will upload their Tweet or user IDs.

<h2 id="tocS_Url">Url</h2>
<!-- backwards compatibility -->
<a id="schemaurl"></a>
<a id="schema_Url"></a>
<a id="tocSurl"></a>
<a id="tocsurl"></a>

```json
"https://developer.twitter.com/en/docs/twitter-api"
```

A validly formatted URL.

<h2 id="tocS_UrlEntity">UrlEntity</h2>
<!-- backwards compatibility -->
<a id="schemaurlentity"></a>
<a id="schema_UrlEntity"></a>
<a id="tocSurlentity"></a>
<a id="tocsurlentity"></a>

```json
{
  "end": 61,
  "start": 50,
  "description": "This is a description of the website.",
  "display_url": "twittercommunity.com/t/introducing-…",
  "expanded_url": "https://developer.twitter.com/en/docs/twitter-api",
  "images": [
    {
      "height": 0,
      "url": "https://developer.twitter.com/en/docs/twitter-api",
      "width": 0
    }
  ],
  "media_key": "string",
  "status": 100,
  "title": "Introducing the v2 follow lookup endpoints",
  "unwound_url": "https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118",
  "url": "https://developer.twitter.com/en/docs/twitter-api"
}
```

Represent the portion of text recognized as a URL, and its start and end position within the text.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end|integer|true|none|Index (zero-based) at which position this entity ends.  The index is exclusive.|
|start|integer|true|none|Index (zero-based) at which position this entity starts.  The index is inclusive.|
|description|string|false|none|Description of the URL landing page.|
|display_url|string|false|none|The URL as displayed in the Twitter client.|
|expanded_url|[Url](#schemaurl)|false|none|A validly formatted URL.|
|images|[[UrlImage](#schemaurlimage)]|false|none|none|
|media_key|[MediaKey](#schemamediakey)|false|none|The Media Key identifier for this attachment.|
|status|[HttpStatusCode](#schemahttpstatuscode)|false|none|HTTP Status Code.|
|title|string|false|none|Title of the page the URL points to.|
|unwound_url|string(uri)|false|none|Fully resolved url.|
|url|[Url](#schemaurl)|true|none|A validly formatted URL.|

<h2 id="tocS_UrlFields">UrlFields</h2>
<!-- backwards compatibility -->
<a id="schemaurlfields"></a>
<a id="schema_UrlFields"></a>
<a id="tocSurlfields"></a>
<a id="tocsurlfields"></a>

```json
{
  "description": "This is a description of the website.",
  "display_url": "twittercommunity.com/t/introducing-…",
  "expanded_url": "https://developer.twitter.com/en/docs/twitter-api",
  "images": [
    {
      "height": 0,
      "url": "https://developer.twitter.com/en/docs/twitter-api",
      "width": 0
    }
  ],
  "media_key": "string",
  "status": 100,
  "title": "Introducing the v2 follow lookup endpoints",
  "unwound_url": "https://twittercommunity.com/t/introducing-the-v2-follow-lookup-endpoints/147118",
  "url": "https://developer.twitter.com/en/docs/twitter-api"
}
```

Represent the portion of text recognized as a URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the URL landing page.|
|display_url|string|false|none|The URL as displayed in the Twitter client.|
|expanded_url|[Url](#schemaurl)|false|none|A validly formatted URL.|
|images|[[UrlImage](#schemaurlimage)]|false|none|none|
|media_key|[MediaKey](#schemamediakey)|false|none|The Media Key identifier for this attachment.|
|status|[HttpStatusCode](#schemahttpstatuscode)|false|none|HTTP Status Code.|
|title|string|false|none|Title of the page the URL points to.|
|unwound_url|string(uri)|false|none|Fully resolved url.|
|url|[Url](#schemaurl)|true|none|A validly formatted URL.|

<h2 id="tocS_UrlImage">UrlImage</h2>
<!-- backwards compatibility -->
<a id="schemaurlimage"></a>
<a id="schema_UrlImage"></a>
<a id="tocSurlimage"></a>
<a id="tocsurlimage"></a>

```json
{
  "height": 0,
  "url": "https://developer.twitter.com/en/docs/twitter-api",
  "width": 0
}
```

Represent the information for the URL image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|[MediaHeight](#schemamediaheight)|false|none|The height of the media in pixels.|
|url|[Url](#schemaurl)|false|none|A validly formatted URL.|
|width|[MediaWidth](#schemamediawidth)|false|none|The width of the media in pixels.|

<h2 id="tocS_UsageCapExceededProblem">UsageCapExceededProblem</h2>
<!-- backwards compatibility -->
<a id="schemausagecapexceededproblem"></a>
<a id="schema_UsageCapExceededProblem"></a>
<a id="tocSusagecapexceededproblem"></a>
<a id="tocsusagecapexceededproblem"></a>

```json
{
  "detail": "string",
  "status": 0,
  "title": "string",
  "type": "string",
  "period": "Daily",
  "scope": "Account"
}
```

A problem that indicates that a usage cap has been exceeded.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|status|integer|false|none|none|
|title|string|true|none|none|
|type|string|true|none|none|
|period|string|false|none|none|
|scope|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|period|Daily|
|period|Monthly|
|scope|Account|
|scope|Product|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "created_at": "2013-12-14T04:35:55Z",
  "id": "2244994945",
  "name": "Twitter Dev",
  "protected": false,
  "username": "TwitterDev"
}
```

The Twitter User object.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|Creation time of this User.|
|description|string|false|none|The text of this User's profile description (also known as bio), if the User provided one.|
|entities|object|false|none|A list of metadata found in the User's profile description.|
|id|[UserId](#schemauserid)|true|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|location|string|false|none|The location specified in the User's profile, if the User provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.|
|name|string|true|none|The friendly name of this User, as shown on their profile.|
|pinned_tweet_id|[TweetId](#schematweetid)|false|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|profile_image_url|string(uri)|false|none|The URL to the profile image for this User.|
|protected|boolean|false|none|Indicates if this User has chosen to protect their Tweets (in other words, if this User's Tweets are private).|
|public_metrics|object|false|none|A list of metrics for this User.|
|url|string|false|none|The URL specified in the User's profile.|
|username|[UserName](#schemausername)|true|none|The Twitter handle (screen name) of this user.|
|verified|boolean|false|none|Indicate if this User is a verified Twitter User.|
|verified_type|string|false|none|The Twitter Blue verified type of the user, eg: blue, government, business or none.|
|withheld|[UserWithheld](#schemauserwithheld)|false|none|Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).|

<h2 id="tocS_UserComplianceData">UserComplianceData</h2>
<!-- backwards compatibility -->
<a id="schemausercompliancedata"></a>
<a id="schema_UserComplianceData"></a>
<a id="tocSusercompliancedata"></a>
<a id="tocsusercompliancedata"></a>

```json
{
  "user_protect": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "user": {
      "id": "2244994945"
    }
  }
}
```

User compliance data.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|[UserProtectComplianceSchema](#schemauserprotectcomplianceschema)|false|none|none|
|*oneOf*|[UserUnprotectComplianceSchema](#schemauserunprotectcomplianceschema)|false|none|none|
|*oneOf*|[UserDeleteComplianceSchema](#schemauserdeletecomplianceschema)|false|none|none|
|*oneOf*|[UserUndeleteComplianceSchema](#schemauserundeletecomplianceschema)|false|none|none|
|*oneOf*|[UserSuspendComplianceSchema](#schemausersuspendcomplianceschema)|false|none|none|
|*oneOf*|[UserUnsuspendComplianceSchema](#schemauserunsuspendcomplianceschema)|false|none|none|
|*oneOf*|[UserWithheldComplianceSchema](#schemauserwithheldcomplianceschema)|false|none|none|
|*oneOf*|[UserScrubGeoSchema](#schemauserscrubgeoschema)|false|none|none|
|*oneOf*|[UserProfileModificationComplianceSchema](#schemauserprofilemodificationcomplianceschema)|false|none|none|

<h2 id="tocS_UserComplianceSchema">UserComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemausercomplianceschema"></a>
<a id="schema_UserComplianceSchema"></a>
<a id="tocSusercomplianceschema"></a>
<a id="tocsusercomplianceschema"></a>

```json
{
  "event_at": "2021-07-06T18:40:40.000Z",
  "user": {
    "id": "2244994945"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_at|string(date-time)|true|none|Event time.|
|user|object|true|none|none|

<h2 id="tocS_UserComplianceStreamResponse">UserComplianceStreamResponse</h2>
<!-- backwards compatibility -->
<a id="schemausercompliancestreamresponse"></a>
<a id="schema_UserComplianceStreamResponse"></a>
<a id="tocSusercompliancestreamresponse"></a>
<a id="tocsusercompliancestreamresponse"></a>

```json
{
  "data": {
    "user_protect": {
      "event_at": "2021-07-06T18:40:40.000Z",
      "user": {
        "id": "2244994945"
      }
    }
  }
}
```

User compliance stream events.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*oneOf*|object|false|none|User compliance event.|
|data|[UserComplianceData](#schemausercompliancedata)|true|none|User compliance data.|
|*oneOf*|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|true|none|none|

<h2 id="tocS_UserDeleteComplianceSchema">UserDeleteComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserdeletecomplianceschema"></a>
<a id="schema_UserDeleteComplianceSchema"></a>
<a id="tocSuserdeletecomplianceschema"></a>
<a id="tocsuserdeletecomplianceschema"></a>

```json
{
  "user_delete": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "user": {
      "id": "2244994945"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_delete|[UserComplianceSchema](#schemausercomplianceschema)|true|none|none|

<h2 id="tocS_UserId">UserId</h2>
<!-- backwards compatibility -->
<a id="schemauserid"></a>
<a id="schema_UserId"></a>
<a id="tocSuserid"></a>
<a id="tocsuserid"></a>

```json
"2244994945"
```

Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

<h2 id="tocS_UserIdMatchesAuthenticatedUser">UserIdMatchesAuthenticatedUser</h2>
<!-- backwards compatibility -->
<a id="schemauseridmatchesauthenticateduser"></a>
<a id="schema_UserIdMatchesAuthenticatedUser"></a>
<a id="tocSuseridmatchesauthenticateduser"></a>
<a id="tocsuseridmatchesauthenticateduser"></a>

```json
"2244994945"
```

Unique identifier of this User. The value must be the same as the authenticated user.

<h2 id="tocS_UserName">UserName</h2>
<!-- backwards compatibility -->
<a id="schemausername"></a>
<a id="schema_UserName"></a>
<a id="tocSusername"></a>
<a id="tocsusername"></a>

```json
"string"
```

The Twitter handle (screen name) of this user.

<h2 id="tocS_UserProfileModificationComplianceSchema">UserProfileModificationComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserprofilemodificationcomplianceschema"></a>
<a id="schema_UserProfileModificationComplianceSchema"></a>
<a id="tocSuserprofilemodificationcomplianceschema"></a>
<a id="tocsuserprofilemodificationcomplianceschema"></a>

```json
{
  "user_profile_modification": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "new_value": "string",
    "profile_field": "string",
    "user": {
      "id": "2244994945"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_profile_modification|[UserProfileModificationObjectSchema](#schemauserprofilemodificationobjectschema)|true|none|none|

<h2 id="tocS_UserProfileModificationObjectSchema">UserProfileModificationObjectSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserprofilemodificationobjectschema"></a>
<a id="schema_UserProfileModificationObjectSchema"></a>
<a id="tocSuserprofilemodificationobjectschema"></a>
<a id="tocsuserprofilemodificationobjectschema"></a>

```json
{
  "event_at": "2021-07-06T18:40:40.000Z",
  "new_value": "string",
  "profile_field": "string",
  "user": {
    "id": "2244994945"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_at|string(date-time)|true|none|Event time.|
|new_value|string|true|none|none|
|profile_field|string|true|none|none|
|user|object|true|none|none|

<h2 id="tocS_UserProtectComplianceSchema">UserProtectComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserprotectcomplianceschema"></a>
<a id="schema_UserProtectComplianceSchema"></a>
<a id="tocSuserprotectcomplianceschema"></a>
<a id="tocsuserprotectcomplianceschema"></a>

```json
{
  "user_protect": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "user": {
      "id": "2244994945"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_protect|[UserComplianceSchema](#schemausercomplianceschema)|true|none|none|

<h2 id="tocS_UserScrubGeoObjectSchema">UserScrubGeoObjectSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserscrubgeoobjectschema"></a>
<a id="schema_UserScrubGeoObjectSchema"></a>
<a id="tocSuserscrubgeoobjectschema"></a>
<a id="tocsuserscrubgeoobjectschema"></a>

```json
{
  "event_at": "2021-07-06T18:40:40.000Z",
  "up_to_tweet_id": "1346889436626259968",
  "user": {
    "id": "2244994945"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_at|string(date-time)|true|none|Event time.|
|up_to_tweet_id|[TweetId](#schematweetid)|true|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|
|user|object|true|none|none|

<h2 id="tocS_UserScrubGeoSchema">UserScrubGeoSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserscrubgeoschema"></a>
<a id="schema_UserScrubGeoSchema"></a>
<a id="tocSuserscrubgeoschema"></a>
<a id="tocsuserscrubgeoschema"></a>

```json
{
  "scrub_geo": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "up_to_tweet_id": "1346889436626259968",
    "user": {
      "id": "2244994945"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scrub_geo|[UserScrubGeoObjectSchema](#schemauserscrubgeoobjectschema)|true|none|none|

<h2 id="tocS_UserSuspendComplianceSchema">UserSuspendComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemausersuspendcomplianceschema"></a>
<a id="schema_UserSuspendComplianceSchema"></a>
<a id="tocSusersuspendcomplianceschema"></a>
<a id="tocsusersuspendcomplianceschema"></a>

```json
{
  "user_suspend": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "user": {
      "id": "2244994945"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_suspend|[UserComplianceSchema](#schemausercomplianceschema)|true|none|none|

<h2 id="tocS_UserTakedownComplianceSchema">UserTakedownComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemausertakedowncomplianceschema"></a>
<a id="schema_UserTakedownComplianceSchema"></a>
<a id="tocSusertakedowncomplianceschema"></a>
<a id="tocsusertakedowncomplianceschema"></a>

```json
{
  "event_at": "2021-07-06T18:40:40.000Z",
  "user": {
    "id": "2244994945"
  },
  "withheld_in_countries": [
    "US"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|event_at|string(date-time)|true|none|Event time.|
|user|object|true|none|none|
|withheld_in_countries|[[CountryCode](#schemacountrycode)]|true|none|none|

<h2 id="tocS_UserUndeleteComplianceSchema">UserUndeleteComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserundeletecomplianceschema"></a>
<a id="schema_UserUndeleteComplianceSchema"></a>
<a id="tocSuserundeletecomplianceschema"></a>
<a id="tocsuserundeletecomplianceschema"></a>

```json
{
  "user_undelete": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "user": {
      "id": "2244994945"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_undelete|[UserComplianceSchema](#schemausercomplianceschema)|true|none|none|

<h2 id="tocS_UserUnprotectComplianceSchema">UserUnprotectComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserunprotectcomplianceschema"></a>
<a id="schema_UserUnprotectComplianceSchema"></a>
<a id="tocSuserunprotectcomplianceschema"></a>
<a id="tocsuserunprotectcomplianceschema"></a>

```json
{
  "user_unprotect": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "user": {
      "id": "2244994945"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_unprotect|[UserComplianceSchema](#schemausercomplianceschema)|true|none|none|

<h2 id="tocS_UserUnsuspendComplianceSchema">UserUnsuspendComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserunsuspendcomplianceschema"></a>
<a id="schema_UserUnsuspendComplianceSchema"></a>
<a id="tocSuserunsuspendcomplianceschema"></a>
<a id="tocsuserunsuspendcomplianceschema"></a>

```json
{
  "user_unsuspend": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "user": {
      "id": "2244994945"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_unsuspend|[UserComplianceSchema](#schemausercomplianceschema)|true|none|none|

<h2 id="tocS_UserWithheld">UserWithheld</h2>
<!-- backwards compatibility -->
<a id="schemauserwithheld"></a>
<a id="schema_UserWithheld"></a>
<a id="tocSuserwithheld"></a>
<a id="tocsuserwithheld"></a>

```json
{
  "country_codes": [
    "US"
  ],
  "scope": "user"
}
```

Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country_codes|[[CountryCode](#schemacountrycode)]|true|none|Provides a list of countries where this content is not available.|
|scope|string|false|none|Indicates that the content being withheld is a `user`.|

#### Enumerated Values

|Property|Value|
|---|---|
|scope|user|

<h2 id="tocS_UserWithheldComplianceSchema">UserWithheldComplianceSchema</h2>
<!-- backwards compatibility -->
<a id="schemauserwithheldcomplianceschema"></a>
<a id="schema_UserWithheldComplianceSchema"></a>
<a id="tocSuserwithheldcomplianceschema"></a>
<a id="tocsuserwithheldcomplianceschema"></a>

```json
{
  "user_withheld": {
    "event_at": "2021-07-06T18:40:40.000Z",
    "user": {
      "id": "2244994945"
    },
    "withheld_in_countries": [
      "US"
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user_withheld|[UserTakedownComplianceSchema](#schemausertakedowncomplianceschema)|true|none|none|

<h2 id="tocS_UsersFollowingCreateRequest">UsersFollowingCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemausersfollowingcreaterequest"></a>
<a id="schema_UsersFollowingCreateRequest"></a>
<a id="tocSusersfollowingcreaterequest"></a>
<a id="tocsusersfollowingcreaterequest"></a>

```json
{
  "target_user_id": "2244994945"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target_user_id|[UserId](#schemauserid)|true|none|Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

<h2 id="tocS_UsersFollowingCreateResponse">UsersFollowingCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemausersfollowingcreateresponse"></a>
<a id="schema_UsersFollowingCreateResponse"></a>
<a id="tocSusersfollowingcreateresponse"></a>
<a id="tocsusersfollowingcreateresponse"></a>

```json
{
  "data": {
    "following": true,
    "pending_follow": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_UsersFollowingDeleteResponse">UsersFollowingDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemausersfollowingdeleteresponse"></a>
<a id="schema_UsersFollowingDeleteResponse"></a>
<a id="tocSusersfollowingdeleteresponse"></a>
<a id="tocsusersfollowingdeleteresponse"></a>

```json
{
  "data": {
    "following": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_UsersLikesCreateRequest">UsersLikesCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemauserslikescreaterequest"></a>
<a id="schema_UsersLikesCreateRequest"></a>
<a id="tocSuserslikescreaterequest"></a>
<a id="tocsuserslikescreaterequest"></a>

```json
{
  "tweet_id": "1346889436626259968"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tweet_id|[TweetId](#schematweetid)|true|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

<h2 id="tocS_UsersLikesCreateResponse">UsersLikesCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserslikescreateresponse"></a>
<a id="schema_UsersLikesCreateResponse"></a>
<a id="tocSuserslikescreateresponse"></a>
<a id="tocsuserslikescreateresponse"></a>

```json
{
  "data": {
    "liked": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_UsersLikesDeleteResponse">UsersLikesDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemauserslikesdeleteresponse"></a>
<a id="schema_UsersLikesDeleteResponse"></a>
<a id="tocSuserslikesdeleteresponse"></a>
<a id="tocsuserslikesdeleteresponse"></a>

```json
{
  "data": {
    "liked": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_UsersRetweetsCreateRequest">UsersRetweetsCreateRequest</h2>
<!-- backwards compatibility -->
<a id="schemausersretweetscreaterequest"></a>
<a id="schema_UsersRetweetsCreateRequest"></a>
<a id="tocSusersretweetscreaterequest"></a>
<a id="tocsusersretweetscreaterequest"></a>

```json
{
  "tweet_id": "1346889436626259968"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|tweet_id|[TweetId](#schematweetid)|true|none|Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.|

<h2 id="tocS_UsersRetweetsCreateResponse">UsersRetweetsCreateResponse</h2>
<!-- backwards compatibility -->
<a id="schemausersretweetscreateresponse"></a>
<a id="schema_UsersRetweetsCreateResponse"></a>
<a id="tocSusersretweetscreateresponse"></a>
<a id="tocsusersretweetscreateresponse"></a>

```json
{
  "data": {
    "retweeted": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_UsersRetweetsDeleteResponse">UsersRetweetsDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemausersretweetsdeleteresponse"></a>
<a id="schema_UsersRetweetsDeleteResponse"></a>
<a id="tocSusersretweetsdeleteresponse"></a>
<a id="tocsusersretweetsdeleteresponse"></a>

```json
{
  "data": {
    "retweeted": true
  },
  "errors": [
    {
      "detail": "string",
      "status": 0,
      "title": "string",
      "type": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|none|
|errors|[[Problem](#schemaproblem)]|false|none|none|

<h2 id="tocS_Variant">Variant</h2>
<!-- backwards compatibility -->
<a id="schemavariant"></a>
<a id="schema_Variant"></a>
<a id="tocSvariant"></a>
<a id="tocsvariant"></a>

```json
{
  "bit_rate": 0,
  "content_type": "string",
  "url": "http://example.com"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bit_rate|integer|false|none|The bit rate of the media.|
|content_type|string|false|none|The content type of the media.|
|url|string(uri)|false|none|The url to the media.|

<h2 id="tocS_Variants">Variants</h2>
<!-- backwards compatibility -->
<a id="schemavariants"></a>
<a id="schema_Variants"></a>
<a id="tocSvariants"></a>
<a id="tocsvariants"></a>

```json
[
  {
    "bit_rate": 0,
    "content_type": "string",
    "url": "http://example.com"
  }
]
```

An array of all available variants of the media.

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "height": 0,
  "media_key": "string",
  "type": "string",
  "width": 0,
  "duration_ms": 0,
  "non_public_metrics": {
    "playback_0_count": 0,
    "playback_100_count": 0,
    "playback_25_count": 0,
    "playback_50_count": 0,
    "playback_75_count": 0
  },
  "organic_metrics": {
    "playback_0_count": 0,
    "playback_100_count": 0,
    "playback_25_count": 0,
    "playback_50_count": 0,
    "playback_75_count": 0,
    "view_count": 0
  },
  "preview_image_url": "http://example.com",
  "promoted_metrics": {
    "playback_0_count": 0,
    "playback_100_count": 0,
    "playback_25_count": 0,
    "playback_50_count": 0,
    "playback_75_count": 0,
    "view_count": 0
  },
  "public_metrics": {
    "view_count": 0
  },
  "variants": [
    {
      "bit_rate": 0,
      "content_type": "string",
      "url": "http://example.com"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|height|[MediaHeight](#schemamediaheight)|false|none|The height of the media in pixels.|
|media_key|[MediaKey](#schemamediakey)|false|none|The Media Key identifier for this attachment.|
|type|string|true|none|none|
|width|[MediaWidth](#schemamediawidth)|false|none|The width of the media in pixels.|
|duration_ms|integer|false|none|none|
|non_public_metrics|object|false|none|Nonpublic engagement metrics for the Media at the time of the request.|
|organic_metrics|object|false|none|Organic nonpublic engagement metrics for the Media at the time of the request.|
|preview_image_url|string(uri)|false|none|none|
|promoted_metrics|object|false|none|Promoted nonpublic engagement metrics for the Media at the time of the request.|
|public_metrics|object|false|none|Engagement metrics for the Media at the time of the request.|
|variants|[Variants](#schemavariants)|false|none|An array of all available variants of the media.|
