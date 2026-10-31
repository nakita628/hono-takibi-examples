<h1 id="community-api">Community API v3.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Get access to comments from registered users on New York Times articles.  NOTE: This API is deprecated.

Base URLs:

* <a href="http://api.nytimes.com/svc/community/v3">http://api.nytimes.com/svc/community/v3</a>

<a href="http://developer.nytimes.com/tou">Terms of service</a>

<a href="http://developer.nytimes.com/">External documentation</a>

# Authentication

* API Key (api-key)
    - Parameter Name: **api-key**, in: query.

<h1 id="community-api-default">Default</h1>

## Comments by Date

<a id="opIdGET_user-content-by-date-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/user-content/by-date.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /user-content/by-date.json`

<h3 id="comments-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "debug": {
    "version": 3.1
  },
  "results": {
    "api_timestamp": "1458149967",
    "comments": [
      {
        "approveDate": "1451710808",
        "assetID": 3444599,
        "assetURL": "http://cooking.nytimes.com/recipes/1017904",
        "commentBody": "We used black eyed peas and kale (couldn&#x27;t find mustard greens), and this recipe is fantastic! With cornbread it was perfect!",
        "commentID": 17096625,
        "commentSequence": 17096625,
        "commentTitle": "<br/>",
        "commentType": "comment",
        "createDate": "1451710797",
        "editorsSelection": 0,
        "lft": 42,
        "parentID": null,
        "recommendationCount": 0,
        "replies": [],
        "replyCount": 0,
        "rgt": 43,
        "status": "approved",
        "statusID": 2,
        "updateDate": "1451710808",
        "userDisplayName": "Sharon",
        "userID": 72856041,
        "userLocation": "<br/>",
        "userTitle": "NULL",
        "userURL": 72856041
      }
    ],
    "totalCommentsFound": 4121,
    "totalCommentsReturned": 25
  },
  "status": "OK"
}
```

<h3 id="comments-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="comments-by-date-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|debug|object|false|none|none|
|» version|number|false|none|none|
|results|object|false|none|none|
|» api_timestamp|string|false|none|none|
|» comments|[object]|false|none|none|
|» » approveDate|string|false|none|none|
|» » assetID|integer|false|none|none|
|» » assetURL|string|false|none|none|
|» » commentBody|string|false|none|none|
|» » commentID|integer|false|none|none|
|» » commentSequence|integer|false|none|none|
|» » commentTitle|string|false|none|none|
|» » commentType|string|false|none|none|
|» » createDate|string|false|none|none|
|» » editorsSelection|integer|false|none|none|
|» » lft|integer|false|none|none|
|» » parentID|object \| null|false|none|none|
|» » recommendationCount|integer|false|none|none|
|» » replies|[object]|false|none|none|
|» » replyCount|integer|false|none|none|
|» » rgt|integer|false|none|none|
|» » status|string|false|none|none|
|» » statusID|integer|false|none|none|
|» » updateDate|string|false|none|none|
|» » userDisplayName|string|false|none|none|
|» » userID|integer|false|none|none|
|» » userLocation|string|false|none|none|
|» » userTitle|string|false|none|none|
|» » userURL|integer|false|none|none|
|» totalCommentsFound|integer|false|none|none|
|» totalCommentsReturned|integer|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Recent User Comments

<a id="opIdGET_user-content-recent-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/user-content/recent.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /user-content/recent.json`

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "debug": {
    "version": 3.1
  },
  "results": {
    "api_timestamp": "1458149501",
    "comments": [
      {
        "approveDate": "1458149469",
        "asset": {
          "all-properties": [
            {
              "description": "Not in a group",
              "name": "no-group",
              "properties": []
            }
          ],
          "assetID": 3449092,
          "assetTitle": "Kasich, the Boulder Between the G.O.P. and Trump (16collins)",
          "assetURL": "http://www.nytimes.com/2016/03/16/opinion/campaign-stops/kasich-the-boulder-between-the-gop.html",
          "createDate": "1458096538",
          "labels": [],
          "properties": {
            "automoderation-on": {
              "groupID": 2,
              "taxonomyID": 364114
            },
            "comment-list-sort-editors": {
              "groupID": 1,
              "taxonomyID": 364114
            },
            "reached-max-com-off": {
              "groupID": 3,
              "taxonomyID": 9188
            }
          },
          "source": "url",
          "taxonomies": [
            [
              {
                "name": "opinion",
                "taxonomyID": 9188
              }
            ]
          ],
          "taxonomy": "opinion/Kasich, the Boulder Between the G.O.P. and Trump (16collins)",
          "text": [],
          "updateDate": "1458149477",
          "vendorID": "MQdKLYFNCfZ7XvixkGz2rw=="
        },
        "assetID": 3449092,
        "commentBody": "Two things to know about our Governor Kasich. First, he was one of the few Republican governors to accept Obamacare and Medicaid expansion in Ohio, despite the efforts of legislators from his party. Second, as Gail Collins pointed out, he has done everything in his power to eliminate access to safe abortion in Ohio. This will soon include a bill he is expected to sign that will make it illegal for women to have an abortion after learning their fetus has Down's syndrome. Like most candidates these days, we have to take the good with the bad.",
        "commentID": 17912830,
        "commentSequence": 17912830,
        "commentTitle": "<br/>",
        "commentType": "comment",
        "createDate": "1458149421",
        "display_name": "DD",
        "editorsSelection": 0,
        "location": "Cincinnati, OH",
        "parentID": null,
        "recommendationCount": 0,
        "replies": [],
        "status": "approved",
        "statusID": 2,
        "updateDate": "1458149469",
        "userDisplayName": "DD",
        "userID": 64507566,
        "userLocation": "Cincinnati, OH",
        "userTitle": "NULL",
        "userURL": "NULL"
      }
    ],
    "totalCommentsReturned": 25
  },
  "status": "OK"
}
```

<h3 id="recent-user-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="recent-user-comments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|debug|object|false|none|none|
|» version|number|false|none|none|
|results|object|false|none|none|
|» api_timestamp|string|false|none|none|
|» comments|[object]|false|none|none|
|» » approveDate|string|false|none|none|
|» » asset|object|false|none|none|
|» » » all-properties|[object]|false|none|none|
|» » » » description|string|false|none|none|
|» » » » name|string|false|none|none|
|» » » » properties|[object]|false|none|none|
|» » » assetID|integer|false|none|none|
|» » » assetTitle|string|false|none|none|
|» » » assetURL|string|false|none|none|
|» » » createDate|string|false|none|none|
|» » » labels|[object]|false|none|none|
|» » » properties|object|false|none|none|
|» » » » automoderation-on|object|false|none|none|
|» » » » » groupID|integer|false|none|none|
|» » » » » taxonomyID|integer|false|none|none|
|» » » » comment-list-sort-editors|object|false|none|none|
|» » » » » groupID|integer|false|none|none|
|» » » » » taxonomyID|integer|false|none|none|
|» » » » reached-max-com-off|object|false|none|none|
|» » » » » groupID|integer|false|none|none|
|» » » » » taxonomyID|integer|false|none|none|
|» » » source|string|false|none|none|
|» » » taxonomy|string|false|none|none|
|» » » text|[object]|false|none|none|
|» » » updateDate|string|false|none|none|
|» » » vendorID|string|false|none|none|
|» » assetID|integer|false|none|none|
|» » commentBody|string|false|none|none|
|» » commentID|integer|false|none|none|
|» » commentSequence|integer|false|none|none|
|» » commentTitle|string|false|none|none|
|» » commentType|string|false|none|none|
|» » createDate|string|false|none|none|
|» » display_name|string|false|none|none|
|» » editorsSelection|integer|false|none|none|
|» » location|string|false|none|none|
|» » parentID|object \| null|false|none|none|
|» » recommendationCount|integer|false|none|none|
|» » replies|[object]|false|none|none|
|» » status|string|false|none|none|
|» » statusID|integer|false|none|none|
|» » updateDate|string|false|none|none|
|» » userDisplayName|string|false|none|none|
|» » userID|integer|false|none|none|
|» » userLocation|string|false|none|none|
|» » userTitle|string|false|none|none|
|» » userURL|string|false|none|none|
|» totalCommentsReturned|integer|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Comments by URL

<a id="opIdGET_user-content-url-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/user-content/url.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /user-content/url.json`

<h3 id="comments-by-url-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|url|query|string|false|none|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "debug": {
    "version": 3.1
  },
  "results": {
    "api_timestamp": "1455718117",
    "callerID": null,
    "comments": [
      {
        "approveDate": "1199322293",
        "commentBody": "I have always wondered how much energy US would save if it shut down Vegas? Can you imagine the amount of electricity consumed on the strip, the ice melted for its water supply - all in the name of gambling? That's the kind of consumerism I would like to see halted. Same goes for all the downtown skylines which cause so much light pollution. Even a simple thing like having an \"off\" switch in the homes rather than just power outlets would save a lot of energy and hopefully make a huge difference in the \"consumption footprint.\" Can American live with that?<br/><br/>As for the growing economies of China & India: the increased industrialization has also increased environmental pollution in those countries. West has conveniently handed down it's dirty work to them. And at the same time we have Americans screaming about lost jobs. When will they realize that they can't have it both ways?<br/><br/>All in all they are acting like spoilt brats who have realized that they are no longer the teacher's favorite. Is it surprising that other folks hate you for your spoilt ways, at the same time envying how you have it so easy?<br/><br/>",
        "commentID": 20831,
        "commentSequence": 138,
        "commentTitle": "",
        "commentType": "comment",
        "createDate": "1199309173",
        "depth": 1,
        "editorsSelection": false,
        "parentID": null,
        "parentUserDisplayName": null,
        "permID": "138",
        "picURL": "http://graphics8.nytimes.com/images/apps/timespeople/none.png",
        "recommendations": 5,
        "recommendedFlag": null,
        "replies": [],
        "replyCount": 0,
        "reportAbuseFlag": null,
        "sharing": 0,
        "status": "approved",
        "timespeople": 1,
        "trusted": 0,
        "updateDate": "1199322293",
        "userDisplayName": "byakushi",
        "userID": 44150303,
        "userLocation": "US",
        "userTitle": null,
        "userURL": null
      }
    ],
    "depthLimit": 0,
    "filter": "",
    "page": 1,
    "replyLimit": 3,
    "sort": "oldest",
    "totalCommentsFound": 138,
    "totalCommentsReturned": 25,
    "totalEditorsSelectionFound": 13,
    "totalEditorsSelectionReturned": 1,
    "totalParentCommentsFound": 138,
    "totalParentCommentsReturned": 25,
    "totalRecommendationsFound": 118,
    "totalRecommendationsReturned": 23,
    "totalReplyCommentsFound": 0,
    "totalReplyCommentsReturned": 0,
    "totalReporterReplyCommentsFound": 0,
    "totalReporterReplyCommentsReturned": 0
  },
  "status": "OK"
}
```

<h3 id="comments-by-url-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="comments-by-url-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|debug|object|false|none|none|
|» version|number|false|none|none|
|results|object|false|none|none|
|» api_timestamp|string|false|none|none|
|» callerID|object \| null|false|none|none|
|» comments|[object]|false|none|none|
|» » approveDate|string|false|none|none|
|» » commentBody|string|false|none|none|
|» » commentID|integer|false|none|none|
|» » commentSequence|integer|false|none|none|
|» » commentTitle|string|false|none|none|
|» » commentType|string|false|none|none|
|» » createDate|string|false|none|none|
|» » depth|integer|false|none|none|
|» » editorsSelection|boolean|false|none|none|
|» » parentID|object \| null|false|none|none|
|» » parentUserDisplayName|object \| null|false|none|none|
|» » permID|string|false|none|none|
|» » picURL|string|false|none|none|
|» » recommendations|integer|false|none|none|
|» » recommendedFlag|object \| null|false|none|none|
|» » replies|[object]|false|none|none|
|» » replyCount|integer|false|none|none|
|» » reportAbuseFlag|object \| null|false|none|none|
|» » sharing|integer|false|none|none|
|» » status|string|false|none|none|
|» » timespeople|integer|false|none|none|
|» » trusted|integer|false|none|none|
|» » updateDate|string|false|none|none|
|» » userDisplayName|string|false|none|none|
|» » userID|integer|false|none|none|
|» » userLocation|string|false|none|none|
|» » userTitle|object \| null|false|none|none|
|» » userURL|object \| null|false|none|none|
|» depthLimit|integer|false|none|none|
|» filter|string \| null|false|none|none|
|» page|integer|false|none|none|
|» replyLimit|integer|false|none|none|
|» sort|string|false|none|none|
|» totalCommentsFound|integer|false|none|none|
|» totalCommentsReturned|integer|false|none|none|
|» totalEditorsSelectionFound|integer|false|none|none|
|» totalEditorsSelectionReturned|integer|false|none|none|
|» totalParentCommentsFound|integer|false|none|none|
|» totalParentCommentsReturned|integer|false|none|none|
|» totalRecommendationsFound|integer|false|none|none|
|» totalRecommendationsReturned|integer|false|none|none|
|» totalReplyCommentsFound|integer|false|none|none|
|» totalReplyCommentsReturned|integer|false|none|none|
|» totalReporterReplyCommentsFound|integer|false|none|none|
|» totalReporterReplyCommentsReturned|integer|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>

## Comments by User

<a id="opIdGET_user-content-user-json"></a>

> Code samples

```bash
curl "https://api.nytimes.com/svc/user-content/user.json?api-key=${API_KEY}" \
  -H 'Accept: application/json'
```

`GET /user-content/user.json`

<h3 id="comments-by-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userID|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "copyright": "Copyright (c) 2016 The New York Times Company.  All Rights Reserved.",
  "debug": {
    "version": 3.1
  },
  "results": {
    "api_timestamp": "1458150045",
    "comments": [
      {
        "approveDate": "1316728099",
        "asset": {
          "all-properties": [
            {
              "description": "Not in a group",
              "name": "no-group",
              "properties": []
            }
          ],
          "assetID": 3267087,
          "assetTitle": "Cellphone Service Coming to the Subway",
          "assetURL": "http://cityroom.blogs.nytimes.com/2011/09/22/cell-phone-service-on-some-subway-platforms-starts-next-week/",
          "createDate": "1316722025",
          "labels": [
            {
              "labelID": 54906,
              "labelName": "NYT_Blogs"
            }
          ],
          "properties": {
            "automoderation-off": {
              "groupID": 2,
              "taxonomyID": 199832
            },
            "comment-list-sort-approvedate-desc": {
              "groupID": 1,
              "taxonomyID": 199832
            },
            "reached-max-com-on": {
              "groupID": 3,
              "taxonomyID": 199832
            }
          },
          "source": "url",
          "taxonomies": [
            [
              {
                "name": "blogs",
                "taxonomyID": 70457
              }
            ]
          ],
          "taxonomy": "blogs/cityroom/Cellphone Service Coming to the Subway",
          "text": [],
          "updateDate": "1319743568",
          "vendorID": "P12Rq7kT2AvJyomlFgcylQ=="
        },
        "commentBody": "time to Google for \"cell phone signal blocker\"...",
        "commentID": 4570862,
        "commentSequence": 10,
        "commentTitle": "hardcoded comment title",
        "commentType": "comment",
        "createDate": "1316723787",
        "editorsSelection": false,
        "labels": [],
        "parentID": null,
        "permid": 10,
        "picURL": "http://pimage.timespeople.nytimes.com/2364/811/cropped-2364811.jpg?0.8428952772024576",
        "recommendations": 11,
        "replies": [],
        "replyCount": 0,
        "status": "approved",
        "updateDate": "1316728099",
        "userDisplayName": null,
        "userID": 2364811,
        "userLocation": null,
        "userSubmittedDisplayName": "Jim",
        "userSubmittedLocation": "NYC",
        "userSubmittedTitle": null,
        "userSubmittedURL": null,
        "userTitle": null,
        "userURL": null
      }
    ],
    "totalCommentsFound": 2,
    "totalCommentsReturned": 2
  },
  "status": "OK"
}
```

<h3 id="comments-by-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||Inline|

<h3 id="comments-by-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|copyright|string|false|none|none|
|debug|object|false|none|none|
|» version|number|false|none|none|
|results|object|false|none|none|
|» api_timestamp|string|false|none|none|
|» comments|[object]|false|none|none|
|» » approveDate|string|false|none|none|
|» » asset|object|false|none|none|
|» » » all-properties|[object]|false|none|none|
|» » » » description|string|false|none|none|
|» » » » name|string|false|none|none|
|» » » » properties|[object]|false|none|none|
|» » » assetID|integer|false|none|none|
|» » » assetTitle|string|false|none|none|
|» » » assetURL|string|false|none|none|
|» » » createDate|string|false|none|none|
|» » » labels|[object]|false|none|none|
|» » » » labelID|integer|false|none|none|
|» » » » labelName|string|false|none|none|
|» » » properties|object|false|none|none|
|» » » » automoderation-off|object|false|none|none|
|» » » » » groupID|integer|false|none|none|
|» » » » » taxonomyID|integer|false|none|none|
|» » » » comment-list-sort-approvedate-desc|object|false|none|none|
|» » » » » groupID|integer|false|none|none|
|» » » » » taxonomyID|integer|false|none|none|
|» » » » reached-max-com-on|object|false|none|none|
|» » » » » groupID|integer|false|none|none|
|» » » » » taxonomyID|integer|false|none|none|
|» » » source|string|false|none|none|
|» » » taxonomy|string|false|none|none|
|» » » text|[object]|false|none|none|
|» » » updateDate|string|false|none|none|
|» » » vendorID|string|false|none|none|
|» » commentBody|string|false|none|none|
|» » commentID|integer|false|none|none|
|» » commentSequence|integer|false|none|none|
|» » commentTitle|string|false|none|none|
|» » commentType|string|false|none|none|
|» » createDate|string|false|none|none|
|» » editorsSelection|boolean|false|none|none|
|» » labels|[object]|false|none|none|
|» » parentID|object \| null|false|none|none|
|» » permid|integer|false|none|none|
|» » picURL|string|false|none|none|
|» » recommendations|integer|false|none|none|
|» » replies|[object]|false|none|none|
|» » replyCount|integer|false|none|none|
|» » status|string|false|none|none|
|» » updateDate|string|false|none|none|
|» » userDisplayName|object \| null|false|none|none|
|» » userID|integer|false|none|none|
|» » userLocation|object \| null|false|none|none|
|» » userSubmittedDisplayName|string|false|none|none|
|» » userSubmittedLocation|string|false|none|none|
|» » userSubmittedTitle|object \| null|false|none|none|
|» » userSubmittedURL|object \| null|false|none|none|
|» » userTitle|object \| null|false|none|none|
|» » userURL|object \| null|false|none|none|
|» totalCommentsFound|integer|false|none|none|
|» totalCommentsReturned|integer|false|none|none|
|status|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
api-key
</aside>
