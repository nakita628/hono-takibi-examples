<h1 id="trash-nothing">trash nothing v1.3</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the REST API for [trashnothing.com](https://trashnothing.com).

To learn more about the API or to register your app for use with the API
visit the [trash nothing Developer page](https://trashnothing.com/developer).

NOTE: All date-time values are [UTC](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)
and are in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) (eg. 2019-02-03T01:23:53).

Base URLs:

* <a href="https://trashnothing.com/api/v1.3">https://trashnothing.com/api/v1.3</a>

<a href="https://trashnothing.com/tos">Terms of service</a>

# Authentication

* API Key (api_key)
    - Parameter Name: **api_key**, in: query. Provides access to specific public API endpoints which don't require user authorization. <br /><br /> The API currently allows api key access to list, search and retrieve posts (for public posts and posts on open archive groups) and to list, search and retrieve groups. <br /><br /> NOTE: Some API endpoints behave differently when requests are made using api keys instead of oauth (because api key requests have no user associated with them).  Check the documentation for each endpoint for a description of the differences.

- oAuth2 authentication. This OAuth2 flow is designed for server side apps and is not enabled by default for new apps. If you would like to use this flow for your app, contact us through the [trash nothing Developer page](https://trashnothing.com/developer).

    - Flow: authorizationCode
    - Authorization URL = [https://trashnothing.com/oauth2/authorize](https://trashnothing.com/oauth2/authorize)
    - Token URL = [https://trashnothing.com/oauth2/token](https://trashnothing.com/oauth2/token)

|Scope|Scope Description|
|---|---|
|basic|Provides full access to a user's account|

- oAuth2 authentication. This is the default OAuth2 flow for new apps.

    - Flow: implicit
    - Authorization URL = [https://trashnothing.com/oauth2/authorize](https://trashnothing.com/oauth2/authorize)

|Scope|Scope Description|
|---|---|
|basic|Provides full access to a user's account|

<h1 id="trash-nothing-users">users</h1>

Retrieve and update user data.

## Retrieve current user

<a id="opIdget_current_user"></a>

> Code samples

```bash
curl https://example.com/users/me \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me`

> Example responses

> 200 Response

```json
{
  "about_me": "I used to be an accountant but then I decided to become a pirate.",
  "country": "US",
  "digest_photos": false,
  "email": {
    "address": "johndoe@example.com",
    "bouncing": false,
    "spam_stop": false,
    "verified": true
  },
  "email_message_delay": "immediate",
  "email_post_reminders": true,
  "email_posts_frequency": "6_hours",
  "email_search_alerts": true,
  "firstname": "Jack",
  "has_password": false,
  "last_listings_view": "2018-02-15T15:04:47",
  "lastname": "Carter",
  "location": {
    "latitude": 39.766098,
    "longitude": -105.077206,
    "name": "Wheat Ridge, CO, USA",
    "radius'": 32186.88
  },
  "member_since": "2009-09-25T14:20:01",
  "profile_image": "https://gravatar.com/avatar/88305a95b05b30f6cd306019ea5d88f3?s=90&r=pg&default=identicon",
  "profile_image_source": "gravatar",
  "public_name": false,
  "public_post_sources": [
    "trashnothing"
  ],
  "show_all_group_posts": true,
  "signup": "2017-11-20T04:32:06",
  "special_notices": true,
  "user_id": 119458,
  "username": "captainjack",
  "uses_fair_offer_policy": true,
  "verified": true
}
```

<h3 id="retrieve-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User data|[CurrentUser](#schemacurrentuser)|
|404|Not Found|User not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Update current user

<a id="opIdupdate_current_user"></a>

> Code samples

```bash
curl https://example.com/users/me \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'about_me=string' \
  -F 'digest_photos=0' \
  -F 'email_message_delay=string' \
  -F 'email_newsletters=string' \
  -F 'email_post_reminders=0' \
  -F 'email_posts_frequency=string' \
  -F 'email_search_alerts=0' \
  -F 'firstname=string' \
  -F 'last_listings_view=1970-01-01T00:00:00Z' \
  -F 'lastname=string' \
  -F 'notify_about_reposts=0' \
  -F 'old_password=string' \
  -F 'password=string' \
  -F 'profile_image_source=string' \
  -F 'public_name=0' \
  -F 'public_post_sources=string' \
  -F 'show_all_group_posts=0' \
  -F 'special_notices=0'
```

`PUT /users/me`

Update the current user.  All fields are optional so requests can update just one or multiple user properties at a time.


> Body parameter

```yaml
about_me: string
digest_photos: 0
email_message_delay: string
email_newsletters: string
email_post_reminders: 0
email_posts_frequency: string
email_search_alerts: 0
firstname: string
last_listings_view: "1970-01-01T00:00:00Z"
lastname: string
notify_about_reposts: 0
old_password: string
password: string
profile_image_source: string
public_name: 0
public_post_sources: string
show_all_group_posts: 0
special_notices: 0
```

<h3 id="update-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» about_me|body|string|false|A short bio a user has written about themselves to help other members get to know them better.|
|» digest_photos|body|integer|false|Whether or not to include photos in the digest emails. Set to 1 to enable photos and 0 to disable photos.<br>|
|» email_message_delay|body|string|false|How quickly new messages from other users are emailed to this user. One of: immediate, 30_minutes, 1_hour, 2_hours, 4_hours, 6_hours, 8_hours <br /> If set to anything other than immediate, the user will receive a digest email summarizing all of the new messages that they haven't viewed.<br>|
|» email_newsletters|body|string|false|If set to 1, the user will receive occasional email newsletters from trash nothing.  To disable, set to 0.|
|» email_post_reminders|body|integer|false|If set to 1, the user will receive emails to remind them to handle their old posts.  To disable, set to 0.|
|» email_posts_frequency|body|string|false|How often new post email notifications are sent to the user. One of: weekly, twice_weekly, daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> To turn off new post email notifications, set this to an empty string.<br>|
|» email_search_alerts|body|integer|false|If set to 1, the user will receive emails when new posts that match one of their search alerts.  To disable, set to 0.|
|» firstname|body|string|false|The first name of the user.|
|» last_listings_view|body|string(date-time)|false|The UTC date and time when the user last viewed the newest posts on the All Posts page.|
|» lastname|body|string|false|The last name of the user.|
|» notify_about_reposts|body|integer|false|If set to 1, the user will be notified about reposts. This affects digests and search alerts. If set to 0, the user will not be notified about reposts. <br /><br /> This does not affect the posts that are returned by the /posts endpoint which has an include_reposts option for this purpose. <br /><br /> See the repost_count field of post objects for details about how reposts are identified.<br>|
|» old_password|body|string|false|The users current password.  This is required when the user is changing their password.|
|» password|body|string|false|A new password for the users' account.  When setting a new password, the old_password parameter must be passed and set to the users' current password. <br /><br /> NOTE: The password and old_password properties can NOT be used when the user property has_password is false.  Instead, use the password reset endpoint to have a new password emailed to the user.<br>|
|» profile_image_source|body|string|false|The source of the users' profile image. The values this can be set to change dynamically based on the users' account. To get the values that can be used, use the source properties returned by the profile images endpoint.<br>|
|» public_name|body|integer|false|Whether or not the users' first and last name will be visible to other users. Set to 1 to enable and 0 to disable.<br>|
|» public_post_sources|body|string|false|A comma separated list of the sources to show public posts from. Currently only 'trashnothing' is supported.<br>If not passed, all sources will be enabled.<br>If set to an empty string, no sources will be enabled which effectively disables public posts for the user so that the user will only see posts from the groups they are a member of.  Setting to an empty string is only allowed if the user is a member of one or more groups.<br>|
|» show_all_group_posts|body|integer|false|Set to 1 to show all group posts on the main posts page and in the digests.  Set to 0 to only show group posts in the area defined by the users' location.  Can only be set to 0 if the users' location is already set.<br>|
|» special_notices|body|integer|false|Whether or not the user wants to receive special notice emails from the groups they are a member of. Special notices are admin posts that the group moderators choose to send out by email. Set to 1 to enable and 0 to disable.<br>|

> Example responses

> 200 Response

```json
{
  "about_me": "I used to be an accountant but then I decided to become a pirate.",
  "country": "US",
  "digest_photos": false,
  "email": {
    "address": "johndoe@example.com",
    "bouncing": false,
    "spam_stop": false,
    "verified": true
  },
  "email_message_delay": "immediate",
  "email_post_reminders": true,
  "email_posts_frequency": "6_hours",
  "email_search_alerts": true,
  "firstname": "Jack",
  "has_password": false,
  "last_listings_view": "2018-02-15T15:04:47",
  "lastname": "Carter",
  "location": {
    "latitude": 39.766098,
    "longitude": -105.077206,
    "name": "Wheat Ridge, CO, USA",
    "radius'": 32186.88
  },
  "member_since": "2009-09-25T14:20:01",
  "profile_image": "https://gravatar.com/avatar/88305a95b05b30f6cd306019ea5d88f3?s=90&r=pg&default=identicon",
  "profile_image_source": "gravatar",
  "public_name": false,
  "public_post_sources": [
    "trashnothing"
  ],
  "show_all_group_posts": true,
  "signup": "2017-11-20T04:32:06",
  "special_notices": true,
  "user_id": 119458,
  "username": "captainjack",
  "uses_fair_offer_policy": true,
  "verified": true
}
```

<h3 id="update-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated user data.|[CurrentUser](#schemacurrentuser)|
|400|Bad Request|Invalid parameter.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List current users' email alerts

<a id="opIdget_alerts"></a>

> Code samples

```bash
curl https://example.com/users/me/alerts \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/alerts`

> Example responses

> 200 Response

```json
[
  {
    "alert_id": 7584,
    "last_sent": "2018-02-16T12:58:51",
    "search": "table",
    "send_count": 3,
    "types": [
      "offer"
    ],
    "user_id": 9191
  }
]
```

<h3 id="list-current-users-email-alerts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The users alerts.|Inline|

<h3 id="list-current-users-email-alerts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Alert](#schemaalert)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Create an email alert

<a id="opIdcreate_alert"></a>

> Code samples

```bash
curl https://example.com/users/me/alerts \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'search=string' \
  -F 'types=string'
```

`PUT /users/me/alerts`

> Body parameter

```yaml
search: string
types: string
```

<h3 id="create-an-email-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» search|body|string|true|When a post matches this search query, an email alert will be sent.  Must have a length >= 2 and < 255 characters.|
|» types|body|string|true|A comma separated list of the post types that the alert should match against. The available post types are: offer, wanted<br>|

> Example responses

> 200 Response

```json
{
  "alert_id": 7584,
  "last_sent": "2018-02-16T12:58:51",
  "search": "table",
  "send_count": 3,
  "types": [
    "offer"
  ],
  "user_id": 9191
}
```

<h3 id="create-an-email-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new alert.|[Alert](#schemaalert)|
|400|Bad Request|Missing or invalid parameters or maximum number of alerts reached.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Delete an email alert

<a id="opIddelete_alert"></a>

> Code samples

```bash
curl https://example.com/users/me/alerts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/me/alerts/{alert_id}`

<h3 id="delete-an-email-alert-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|alert_id|path|string|true|The ID of the email alert to delete.|

<h3 id="delete-an-email-alert-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Alert deleted.|None|
|403|Forbidden|The user doesn't have permission to access the alert.|None|
|404|Not Found|Alert not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Change email address

<a id="opIdchange_email"></a>

> Code samples

```bash
curl https://example.com/users/me/email \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'address=string'
```

`POST /users/me/email`

Change the users' current email address.  A verification link will be emailed to the new email address to verify that the email account belongs to the user.  The email change will not take effect until the user clicks the link in the verification email.


> Body parameter

```yaml
address: string
```

<h3 id="change-email-address-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» address|body|string|true|The new email address.|

<h3 id="change-email-address-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A verification email was sent to the new email address.|None|
|400|Bad Request|Invalid email address.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Set users' email address as not bouncing

<a id="opIdset_email_not_bouncing"></a>

> Code samples

```bash
curl https://example.com/users/me/email/not-bouncing \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /users/me/email/not-bouncing`

Resets an email address bouncing state to false.  The users' email address may be automatically marked as bouncing again if further emails sent to it are bounced.


> Example responses

> 200 Response

```json
{
  "about_me": "I used to be an accountant but then I decided to become a pirate.",
  "country": "US",
  "digest_photos": false,
  "email": {
    "address": "johndoe@example.com",
    "bouncing": false,
    "spam_stop": false,
    "verified": true
  },
  "email_message_delay": "immediate",
  "email_post_reminders": true,
  "email_posts_frequency": "6_hours",
  "email_search_alerts": true,
  "firstname": "Jack",
  "has_password": false,
  "last_listings_view": "2018-02-15T15:04:47",
  "lastname": "Carter",
  "location": {
    "latitude": 39.766098,
    "longitude": -105.077206,
    "name": "Wheat Ridge, CO, USA",
    "radius'": 32186.88
  },
  "member_since": "2009-09-25T14:20:01",
  "profile_image": "https://gravatar.com/avatar/88305a95b05b30f6cd306019ea5d88f3?s=90&r=pg&default=identicon",
  "profile_image_source": "gravatar",
  "public_name": false,
  "public_post_sources": [
    "trashnothing"
  ],
  "show_all_group_posts": true,
  "signup": "2017-11-20T04:32:06",
  "special_notices": true,
  "user_id": 119458,
  "username": "captainjack",
  "uses_fair_offer_policy": true,
  "verified": true
}
```

<h3 id="set-users-email-address-as-not-bouncing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated user.|[CurrentUser](#schemacurrentuser)|
|400|Bad Request|Email not yet verified.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List current users' groups

<a id="opIdget_current_user_groups"></a>

> Code samples

```bash
curl https://example.com/users/me/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/groups`

<h3 id="list-current-users-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|membership|query|string|false|Set the membership parameter to only return certain groups. The options are: <br /><br /> - **subscribed**: Only return groups the user is a member of.<br /> - **pending-questions**: Only return groups where the user needs to respond to a new member questionnaire.<br /> - **pending**: Only return groups where the user is waiting for their membership request to be approved (excludes groups which are pending-questions). <br /><br /> If unset, all groups the user is a member of and pending membership on will be returned.<br>|

> Example responses

> 200 Response

```json
[
  {
    "country": {
      "abbreviation": "CA",
      "name": "Canada"
    },
    "group_id": 46,
    "has_questions": true,
    "homepage": "https://trashnothing.com/OttawaReuse",
    "identifier": "OttawaReuse",
    "latitude": 45.423494,
    "longitude": -75.697933,
    "member_count": 4838,
    "membership": {
      "date": "2015-01-22T17:05:50",
      "questionnaire": {
        "message": "This group is only for people who live in Ottawa.",
        "questions": [
          "Where do you live?"
        ]
      },
      "status": "pending-questions"
    },
    "name": "Ottawa Reuse",
    "open_archives": false,
    "open_membership": false,
    "region": {
      "abbreviation": "ON",
      "name": "Ontario"
    },
    "timezone": "America/Toronto"
  }
]
```

<h3 id="list-current-users-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The users groups.|Inline|
|400|Bad Request|Invalid membership parameter.|None|

<h3 id="list-current-users-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Group](#schemagroup)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Update location

<a id="opIdupdate_location"></a>

> Code samples

```bash
curl https://example.com/users/me/location \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'latitude=0' \
  -F 'longitude=0' \
  -F 'name=string' \
  -F 'radius=0'
```

`PUT /users/me/location`

Update the current users' location. The location is used to determine which posts are shown to the user (both public posts and group posts).


> Body parameter

```yaml
latitude: 0
longitude: 0
name: string
radius: 0
```

<h3 id="update-location-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» latitude|body|number|true|none|
|» longitude|body|number|true|none|
|» name|body|string|true|A name that describes the location specified by the given latitude and longitude (must be <= 128 characters).|
|» radius|body|number|true|A radius in meters that defines a circle around the point specified by latitude and longitude. Only posts within the area specified by this circle will be shown.<br>If set to 0, effectively disables public posts for the user.<br>|

> Example responses

> 200 Response

```json
{
  "about_me": "I used to be an accountant but then I decided to become a pirate.",
  "country": "US",
  "digest_photos": false,
  "email": {
    "address": "johndoe@example.com",
    "bouncing": false,
    "spam_stop": false,
    "verified": true
  },
  "email_message_delay": "immediate",
  "email_post_reminders": true,
  "email_posts_frequency": "6_hours",
  "email_search_alerts": true,
  "firstname": "Jack",
  "has_password": false,
  "last_listings_view": "2018-02-15T15:04:47",
  "lastname": "Carter",
  "location": {
    "latitude": 39.766098,
    "longitude": -105.077206,
    "name": "Wheat Ridge, CO, USA",
    "radius'": 32186.88
  },
  "member_since": "2009-09-25T14:20:01",
  "profile_image": "https://gravatar.com/avatar/88305a95b05b30f6cd306019ea5d88f3?s=90&r=pg&default=identicon",
  "profile_image_source": "gravatar",
  "public_name": false,
  "public_post_sources": [
    "trashnothing"
  ],
  "show_all_group_posts": true,
  "signup": "2017-11-20T04:32:06",
  "special_notices": true,
  "user_id": 119458,
  "username": "captainjack",
  "uses_fair_offer_policy": true,
  "verified": true
}
```

<h3 id="update-location-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user with the updated location.|[CurrentUser](#schemacurrentuser)|
|400|Bad Request|Missing or invalid parameters.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List current users' group notices

<a id="opIdget_user_group_notices"></a>

> Code samples

```bash
curl https://example.com/users/me/notices \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/notices`

<h3 id="list-current-users-group-notices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_ids|query|string|false|A comma separated list of group IDs to return notices for.  If unset, notices for all the users groups will be returned.|

> Example responses

> 200 Response

```json
[
  {
    "content": "Everything must be free, legal and appropriate for all ages.  Repeat offenders will be banned.",
    "date": "2018-02-17T13:22:40",
    "group_id": 1781,
    "notice_id": 81178,
    "title": "Group Rules & Guidelines"
  }
]
```

<h3 id="list-current-users-group-notices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The users group notices.|Inline|
|400|Bad Request|Invalid group IDs.|None|

<h3 id="list-current-users-group-notices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GroupNotice](#schemagroupnotice)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List current users' post locations

<a id="opIdget_post_locations"></a>

> Code samples

```bash
curl https://example.com/users/me/post-locations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/post-locations`

Only the most recent 3 post locations are returned.

> Example responses

> 200 Response

```json
[
  {
    "latitude": 0,
    "longitude": 0,
    "name": "string"
  }
]
```

<h3 id="list-current-users-post-locations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The current users' post locations.|Inline|

<h3 id="list-current-users-post-locations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» latitude|number|false|none|none|
|» longitude|number|false|none|none|
|» name|string|false|none|The location name used when submitting new posts.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Save a post location for the current user

<a id="opIdsave_post_location"></a>

> Code samples

```bash
curl https://example.com/users/me/post-locations \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'latitude=0' \
  -F 'longitude=0' \
  -F 'name=string'
```

`PUT /users/me/post-locations`

Creates or updates a post location for the current user. Updates will happen when the name of the post location matches a previous post location.


> Body parameter

```yaml
latitude: 0
longitude: 0
name: string
```

<h3 id="save-a-post-location-for-the-current-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» latitude|body|number|true|none|
|» longitude|body|number|true|none|
|» name|body|string|true|A name that describes the location specified by the given latitude and longitude (must be >= 2 characters and <= 30 characters).|

> Example responses

> 200 Response

```json
[
  {
    "latitude": 0,
    "longitude": 0,
    "name": "string"
  }
]
```

<h3 id="save-a-post-location-for-the-current-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The current users' post locations.|Inline|

<h3 id="save-a-post-location-for-the-current-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» latitude|number|false|none|none|
|» longitude|number|false|none|none|
|» name|string|false|none|The location name used when submitting new posts.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List current users' posts

<a id="opIdget_current_user_posts"></a>

> Code samples

```bash
curl 'https://example.com/users/me/posts?types=string&sources=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/posts`

NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.


<h3 id="list-current-users-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort_by|query|string|false|How to sort the posts that are returned.  One of: date, active, distance <br /><br /><br>Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.<br>|
|types|query|string|true|A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin<br>|
|sources|query|string|true|A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.<br>|
|group_ids|query|string|false|A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.<br>|
|per_page|query|integer|false|The number of posts to return per page (must be >= 1 and <= 100).|
|page|query|integer|false|The page of posts to return.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|latitude|query|number|false|The latitude of a point around which to return posts.<br>|
|longitude|query|number|false|The longitude of a point around which to return posts.<br>|
|radius|query|number|false|The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.<br>|
|date_min|query|string(date-time)|false|Only posts newer than or equal to this UTC date and time will be returned.<br>|
|date_max|query|string(date-time)|false|Only posts older than this UTC date and time will be returned.|
|outcomes|query|string|false|A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.<br>|
|user_state|query|string|false|If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.<br>|
|include_reposts|query|integer|false|If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.<br>|

> Example responses

> 200 Response

```json
{
  "end_index": 0,
  "group_ids": [
    "string"
  ],
  "last_listings_view": "1970-01-01T00:00:00Z",
  "num_pages": 0,
  "num_posts": 0,
  "page": 0,
  "per_page": 0,
  "posts": [
    {
      "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
      "date": "2018-02-05T15:10:21",
      "expiration": "2018-03-05T15:10:21",
      "footer": null,
      "group_id": 6,
      "latitude": 43.653226,
      "longitude": -79.383184,
      "outcome": "satisfied",
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "post_id": 3171898,
      "repost_count": 1,
      "reselling": false,
      "title": "Ultrasonic diffuser (Downtown Toronto)",
      "type": "offer",
      "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
      "user_id": 2933
    }
  ],
  "start_index": 0
}
```

<h3 id="list-current-users-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The posts and paging data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="list-current-users-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_index|integer|false|none|The index of the last post being returned (an integer between start_index and num_posts).|
|group_ids|[string]|false|none|The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.<br>|
|last_listings_view|string(date-time)|false|none|The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.<br>|
|num_pages|integer|false|none|The total number of pages available.|
|num_posts|integer|false|none|The total number of posts available.|
|page|integer|false|none|The page number of the posts being returned.|
|per_page|integer|false|none|The number of posts being returned per page.|
|posts|[[Post](#schemapost)]|false|none|none|
|start_index|integer|false|none|The index of the first post being returned (an integer between 1 and num_posts).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Search current users' posts

<a id="opIdsearch_current_user_posts"></a>

> Code samples

```bash
curl 'https://example.com/users/me/posts/search?search=string&types=string&sources=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/posts/search`

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.


<h3 id="search-current-users-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|The search query used to find posts.|
|sort_by|query|string|false|How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.<br>|
|types|query|string|true|A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin<br>|
|sources|query|string|true|A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.<br>|
|group_ids|query|string|false|A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.<br>|
|per_page|query|integer|false|The number of posts to return per page (must be >= 1 and <= 100).|
|page|query|integer|false|The page of posts to return.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|latitude|query|number|false|The latitude of a point around which to return posts.<br>|
|longitude|query|number|false|The longitude of a point around which to return posts.<br>|
|radius|query|number|false|The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.<br>|
|date_min|query|string(date-time)|false|Only posts newer than or equal to this UTC date and time will be returned.<br>|
|date_max|query|string(date-time)|false|Only posts older than this UTC date and time will be returned.|
|outcomes|query|string|false|A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.<br>|
|user_state|query|string|false|If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.<br>|
|include_reposts|query|integer|false|If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.<br>|

> Example responses

> 200 Response

```json
{
  "end_index": 0,
  "group_ids": [
    "string"
  ],
  "num_pages": 0,
  "num_posts": 0,
  "page": 0,
  "per_page": 0,
  "posts": [
    {
      "content": "Panasonic microwave oven in good working order 800 W power and turntable inside Has all the normal microwave functions plus grill elements for browning Comes with original instructions booklet It's an old microwave and could do with a bit of a clean, but still works very well\n",
      "date": "2018-02-18T17:11:38",
      "expiration": "2018-04-18T17:11:38",
      "footer": null,
      "group_id": 81,
      "latitude": 42.961404,
      "longitude": -88.012586,
      "outcome": null,
      "photos": null,
      "post_id": 25997431,
      "repost_count": 0,
      "reselling": false,
      "search_content": "Panasonic <span class=\"highlight\">microwave</span> oven in good working order 800 W power and turntable",
      "search_title": "<span class=\"highlight\">Microwave</span> Oven (Greenfield)",
      "title": "Microwave Oven (Greenfield)",
      "type": "offer",
      "url": "https://trashnothing.com/post/25997431/microwave-oven-greenfield",
      "user_id": 82928
    }
  ],
  "start_index": 0
}
```

<h3 id="search-current-users-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The posts and paging data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="search-current-users-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_index|integer|false|none|The index of the last post being returned (an integer between start_index and num_posts).|
|group_ids|[string]|false|none|The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.<br>|
|num_pages|integer|false|none|The total number of pages available.|
|num_posts|integer|false|none|The total number of posts available.|
|page|integer|false|none|The page number of the posts being returned.|
|per_page|integer|false|none|The number of posts being returned per page.|
|posts|[[PostSearchResult](#schemapostsearchresult)]|false|none|none|
|start_index|integer|false|none|The index of the first post being returned (an integer between 1 and num_posts).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Set a profile image

<a id="opIdset_profile_image"></a>

> Code samples

```bash
curl https://example.com/users/me/profile-image \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'crop=string' \
  -F 'device_pixel_ratio=1' \
  -F 'photo=@/path/to/file' \
  -F 'photo_id=string' \
  -F 'set_default=1'
```

`POST /users/me/profile-image`

Profile images must be at least 90 pixels wide and tall.  And if the image used is not square it will be automatically cropped to be square.


> Body parameter

```yaml
crop: string
device_pixel_ratio: 1
photo: string
photo_id: string
set_default: 1
```

<h3 id="set-a-profile-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» crop|body|string|false|If the photo needs to be cropped, a JSON encoded object with the crop arguments can be passed. The supported crop arguments are below.  All arguments except rotate are required. <br /><br /> - **original_width**: Original width of the photo before being cropped or rotated (in pixels).<br /> - **original_height**: Original height of the photo before being cropped or rotated (in pixels).<br /> - **x**: The x-coordinate of the top left corner of the cropped area.<br /> - **y**: The y-coordinate of the top left corner of the cropped area.<br /> - **size**: The size of the square cropped area.<br /> - **rotate**: (optional) The number of degrees to rotate the image before cropping.<br>  Currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.<br><br /><br>|
|» device_pixel_ratio|body|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|» photo|body|string(binary)|false|Photo to upload.|
|» photo_id|body|string|false|Photo to use (if already uploaded).|
|» set_default|body|integer|false|Whether or not to set the photo as the users' default profile image.  Set to 1 to enable and 0 to disable.<br>|

> Example responses

> 200 Response

```json
{
  "photo": {
    "photo_id": "987-423",
    "thumbnail": {
      "height": 120,
      "url": "https://trashnothing.com/img/2018-02-02/307731-20180119_155358.90x120.jpg",
      "width": 90
    }
  },
  "user": {
    "about_me": "I used to be an accountant but then I decided to become a pirate.",
    "country": "US",
    "digest_photos": false,
    "email": {
      "address": "johndoe@example.com",
      "bouncing": false,
      "spam_stop": false,
      "verified": true
    },
    "email_message_delay": "immediate",
    "email_post_reminders": true,
    "email_posts_frequency": "6_hours",
    "email_search_alerts": true,
    "firstname": "Jack",
    "has_password": false,
    "last_listings_view": "2018-02-15T15:04:47",
    "lastname": "Carter",
    "location": {
      "latitude": 39.766098,
      "longitude": -105.077206,
      "name": "Wheat Ridge, CO, USA",
      "radius'": 32186.88
    },
    "member_since": "2009-09-25T14:20:01",
    "profile_image": "https://gravatar.com/avatar/88305a95b05b30f6cd306019ea5d88f3?s=90&r=pg&default=identicon",
    "profile_image_source": "gravatar",
    "public_name": false,
    "public_post_sources": [
      "trashnothing"
    ],
    "show_all_group_posts": true,
    "signup": "2017-11-20T04:32:06",
    "special_notices": true,
    "user_id": 119458,
    "username": "captainjack",
    "uses_fair_offer_policy": true,
    "verified": true
  }
}
```

<h3 id="set-a-profile-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated user and the photo.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="set-a-profile-image-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photo|[PhotoResult](#schemaphotoresult)|false|none|The result of uploading or editing a photo.|
|user|[CurrentUser](#schemacurrentuser)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List current users' profile images

<a id="opIdget_profile_images"></a>

> Code samples

```bash
curl https://example.com/users/me/profile-images \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/me/profile-images`

> Example responses

> 200 Response

```json
[
  {
    "image": "string",
    "source": "string"
  }
]
```

<h3 id="list-current-users-profile-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The  users profile images.|Inline|

<h3 id="list-current-users-profile-images-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[object]|false|none|none|
|» image|string|false|none|An image URL.|
|» source|string|false|none|The source of the image.  Currently one of: gravatar, facebook, google <br /><br /> NOTE: Additional sources may be added in the future (eg. 'trashnothing' when support for uploading custom profile images is added) so clients should take care to support arbitrary sources being returned.<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Resend account verification email

<a id="opIdresend_account_verification_email"></a>

> Code samples

```bash
curl https://example.com/users/me/resend-verification \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/me/resend-verification`

<h3 id="resend-account-verification-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Verification email was resent.|None|
|400|Bad Request|Account already verified.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Send password reset email

<a id="opIdsend_password_reset_email"></a>

> Code samples

```bash
curl https://example.com/users/me/reset-password \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/me/reset-password`

<h3 id="send-password-reset-email-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Password reset email was sent.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Report a user

<a id="opIdreport_user"></a>

> Code samples

```bash
curl https://example.com/users/report \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'group_id=string' \
  -F 'message=string' \
  -F 'subject=string' \
  -F 'user_email=string' \
  -F 'user_id=string'
```

`POST /users/report`

> Body parameter

```yaml
group_id: string
message: string
subject: string
user_email: string
user_id: string
```

<h3 id="report-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» group_id|body|string|false|The ID of the group to report the user to.  This may be disregarded in cases where user_email is set and can be used to automatically identify which group the user should be reported to (because some email addresses are specific to certain groups).<br>|
|» message|body|string|true|The body of the message.|
|» subject|body|string|false|The subject of the message.|
|» user_email|body|string|false|The email of the user to report.  Often users only know to identify other users by their email addresses so allowing users to enter an email address can be easier in certain cases.<br>|
|» user_id|body|string|false|The ID of the user to report.  One of user_id or user_email must be passed but only user_id will be used if both are passed.|

<h3 id="report-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user was reported.|None|
|400|Bad Request|Missing or invalid parameters.  In particular, a user cannot report themselves.|None|
|404|Not Found|User or group not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Retrieve a user

<a id="opIdget_user"></a>

> Code samples

```bash
curl https://example.com/users/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}`

<h3 id="retrieve-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|A user ID.|

> Example responses

> 200 Response

```json
{
  "about_me": "Just an old fisherman looking to reuse more.",
  "country": "GB",
  "feedback": {
    "percent_positive": 87.5,
    "restriction": "no-recent-messages",
    "score": 7
  },
  "firstname": null,
  "lastname": null,
  "member_since": "2017-01-27T06:35:55",
  "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
  "reply_time": 4850,
  "user_id": 2946512,
  "username": "fred gibson"
}
```

<h3 id="retrieve-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User data|[User](#schemauser)|
|404|Not Found|User not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Retrieve user display info

<a id="opIdget_user_and_related_data"></a>

> Code samples

```bash
curl https://example.com/users/string/display \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}/display`

Retrieve a user and information related to the user (eg. recent posts) that is useful for displaying a more detailed view of the user.


<h3 id="retrieve-user-display-info-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|A user ID.|

> Example responses

> 200 Response

```json
{
  "feedback": [
    {
      "content": "Fred gave me a great antique table for my new apartment!",
      "date": "2020-03-01T12:01:22",
      "positive": true,
      "reviewer_user_id": 9191,
      "user_id": 2946512
    }
  ],
  "offer_count": 0,
  "posts": [
    {
      "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
      "date": "2018-02-05T15:10:21",
      "expiration": "2018-03-05T15:10:21",
      "footer": null,
      "group_id": 6,
      "latitude": 43.653226,
      "longitude": -79.383184,
      "outcome": "satisfied",
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "post_id": 3171898,
      "repost_count": 1,
      "reselling": false,
      "title": "Ultrasonic diffuser (Downtown Toronto)",
      "type": "offer",
      "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
      "user_id": 2933
    }
  ],
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "feedback": {
      "percent_positive": 87.5,
      "restriction": "no-recent-messages",
      "score": 7
    },
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "reply_time": 4850,
    "user_id": 2946512,
    "username": "fred gibson"
  },
  "wanted_count": 0
}
```

<h3 id="retrieve-user-display-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The user and related data.|Inline|
|404|Not Found|User not found.|None|

<h3 id="retrieve-user-display-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedback|[[Feedback](#schemafeedback)]|false|none|Feedback the current user has left on the user.|
|offer_count|integer|false|none|Count of offer posts made by the user in the last 90 days.|
|posts|[[Post](#schemapost)]|false|none|Other active posts from the user in the last 90 days. A maximum of 30 posts will be returned.<br>|
|user|[User](#schemauser)|false|none|none|
|wanted_count|integer|false|none|Count of wanted posts made by the user in the last 90 days.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Submit feedback on a user

<a id="opIdsubmit_user_feedback"></a>

> Code samples

```bash
curl https://example.com/users/string/feedback \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'category=string' \
  -F 'content=string' \
  -F 'positive=0'
```

`POST /users/{user_id}/feedback`

Allows the current user to submit feedback on a user.  The current user can only leave feedback on a user if the feedback allowed property on that user is set to true (see User definition for more details). And the system will only store the most recent feedback submission that the current user has submitted on a user. If the current user submits feedback multiple times, the newest feedback will overwrite the older feedback. This allows users to update their feedback as long as the feedback allowed property allows it.


> Body parameter

```yaml
category: string
content: string
positive: 0
```

<h3 id="submit-feedback-on-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|A user ID.|
|body|body|object|true|none|
|» category|body|string|false|For positive feedback, category should not be set. <br /><br /> For negative feedback, category should be set to one of: NO_SHOW, UNRESPONSIVE, LATE_OR_TOO_EARLY, ITEM_NOT_AS_DESCRIBED, BROKEN_PROMISE, RUDE, RESELLER, SELLING, UNWANTED_MESSAGES, COMMUNICATION, OTHER <br /><br /> Below are descriptions for each of these categories: <br /><br /> **NO_SHOW** - The user did not show up when they said they would.<br /> **UNRESPONSIVE** - The user failed to respond when a response was expected.<br /> **LATE_OR_TOO_EARLY** - The user showed up later than they said they would (or too early).<br /> **ITEM_NOT_AS_DESCRIBED** - The user gave away an item that had a misleading on incomplete description.<br /> **BROKEN_PROMISE** - The user broke a promise.<br /> **RUDE** - The user was rude or impolite.<br /> **RESELLER** - The user is obtaining free items to sell on other sites without disclosing their intent to resell.<br /> **SELLING** - The user is selling items on trash nothing.<br /> **UNWANTED_MESSAGES** - The user is sending off-topic or unrelated messages.<br />           **COMMUNICATION** - The users' communication is unclear, confusing or bad.<br /> **OTHER** - This category is for anything that does not fit in any of the above categories.<br>|
|» content|body|string|false|A comment written by the current user about the user they are leaving feedback on. This is optional for positive feedback but is required for negative feedback.<br>|
|» positive|body|integer|true|If set to 1, the feedback is positive.  If set to 0, the feedback is negative.|

> Example responses

> 200 Response

```json
{
  "feedback": {
    "content": "Fred gave me a great antique table for my new apartment!",
    "date": "2020-03-01T12:01:22",
    "positive": true,
    "reviewer_user_id": 9191,
    "user_id": 2946512
  },
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "feedback": {
      "percent_positive": 87.5,
      "restriction": "no-recent-messages",
      "score": 7
    },
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "reply_time": 4850,
    "user_id": 2946512,
    "username": "fred gibson"
  }
}
```

<h3 id="submit-feedback-on-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated user and feedback.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|
|404|Not Found|User not found.|None|

<h3 id="submit-feedback-on-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feedback|[Feedback](#schemafeedback)|false|none|none|
|user|[User](#schemauser)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Remove feedback on a user

<a id="opIdremove_user_feedback"></a>

> Code samples

```bash
curl https://example.com/users/string/feedback \
  -X DELETE \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{user_id}/feedback`

Allows the current user to remove feedback that they left on a user.


<h3 id="remove-feedback-on-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|A user ID.|

> Example responses

> 200 Response

```json
{
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "feedback": {
      "percent_positive": 87.5,
      "restriction": "no-recent-messages",
      "score": 7
    },
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "reply_time": 4850,
    "user_id": 2946512,
    "username": "fred gibson"
  }
}
```

<h3 id="remove-feedback-on-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated user.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|
|404|Not Found|User not found.|None|

<h3 id="remove-feedback-on-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|user|[User](#schemauser)|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List posts by a user

<a id="opIdget_user_posts"></a>

> Code samples

```bash
curl 'https://example.com/users/string/posts?types=string&sources=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}/posts`

NOTE: In order to make it easier to see all a users&#39; posts, the current users&#39; location preferences are not applied when listing or searching posts from a single user.  If location based filtering of the posts is needed, the latitude, longitude and radius parameters may be used.


<h3 id="list-posts-by-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.<br>|
|sort_by|query|string|false|How to sort the posts that are returned.  One of: date, active, distance <br /><br /><br>Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.<br>|
|types|query|string|true|A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin<br>|
|sources|query|string|true|A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.<br>|
|group_ids|query|string|false|A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.<br>|
|per_page|query|integer|false|The number of posts to return per page (must be >= 1 and <= 100).|
|page|query|integer|false|The page of posts to return.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|latitude|query|number|false|The latitude of a point around which to return posts.<br>|
|longitude|query|number|false|The longitude of a point around which to return posts.<br>|
|radius|query|number|false|The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.<br>|
|date_min|query|string(date-time)|false|Only posts newer than or equal to this UTC date and time will be returned.<br>|
|date_max|query|string(date-time)|false|Only posts older than this UTC date and time will be returned.|
|outcomes|query|string|false|A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.<br>|
|include_reposts|query|integer|false|If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.<br>|

> Example responses

> 200 Response

```json
{
  "end_index": 0,
  "group_ids": [
    "string"
  ],
  "last_listings_view": "1970-01-01T00:00:00Z",
  "num_pages": 0,
  "num_posts": 0,
  "page": 0,
  "per_page": 0,
  "posts": [
    {
      "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
      "date": "2018-02-05T15:10:21",
      "expiration": "2018-03-05T15:10:21",
      "footer": null,
      "group_id": 6,
      "latitude": 43.653226,
      "longitude": -79.383184,
      "outcome": "satisfied",
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "post_id": 3171898,
      "repost_count": 1,
      "reselling": false,
      "title": "Ultrasonic diffuser (Downtown Toronto)",
      "type": "offer",
      "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
      "user_id": 2933
    }
  ],
  "start_index": 0
}
```

<h3 id="list-posts-by-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The posts and paging data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="list-posts-by-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_index|integer|false|none|The index of the last post being returned (an integer between start_index and num_posts).|
|group_ids|[string]|false|none|The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.<br>|
|last_listings_view|string(date-time)|false|none|The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.<br>|
|num_pages|integer|false|none|The total number of pages available.|
|num_posts|integer|false|none|The total number of posts available.|
|page|integer|false|none|The page number of the posts being returned.|
|per_page|integer|false|none|The number of posts being returned per page.|
|posts|[[Post](#schemapost)]|false|none|none|
|start_index|integer|false|none|The index of the first post being returned (an integer between 1 and num_posts).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Search posts by a user

<a id="opIdsearch_user_posts"></a>

> Code samples

```bash
curl 'https://example.com/users/string/posts/search?search=string&types=string&sources=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}/posts/search`

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.


<h3 id="search-posts-by-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The user ID of the user whose posts will be retrieved. Using 'me' as the user_id will return the posts for the current user.<br>|
|search|query|string|true|The search query used to find posts.|
|sort_by|query|string|false|How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.<br>|
|types|query|string|true|A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin<br>|
|sources|query|string|true|A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or all the open archive groups the requested user has posted to if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.<br>|
|group_ids|query|string|false|A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.<br>|
|per_page|query|integer|false|The number of posts to return per page (must be >= 1 and <= 100).|
|page|query|integer|false|The page of posts to return.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|latitude|query|number|false|The latitude of a point around which to return posts.<br>|
|longitude|query|number|false|The longitude of a point around which to return posts.<br>|
|radius|query|number|false|The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.<br>|
|date_min|query|string(date-time)|false|Only posts newer than or equal to this UTC date and time will be returned.<br>|
|date_max|query|string(date-time)|false|Only posts older than this UTC date and time will be returned.|
|outcomes|query|string|false|A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.<br>|
|include_reposts|query|integer|false|If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.<br>|

> Example responses

> 200 Response

```json
{
  "end_index": 0,
  "group_ids": [
    "string"
  ],
  "num_pages": 0,
  "num_posts": 0,
  "page": 0,
  "per_page": 0,
  "posts": [
    {
      "content": "Panasonic microwave oven in good working order 800 W power and turntable inside Has all the normal microwave functions plus grill elements for browning Comes with original instructions booklet It's an old microwave and could do with a bit of a clean, but still works very well\n",
      "date": "2018-02-18T17:11:38",
      "expiration": "2018-04-18T17:11:38",
      "footer": null,
      "group_id": 81,
      "latitude": 42.961404,
      "longitude": -88.012586,
      "outcome": null,
      "photos": null,
      "post_id": 25997431,
      "repost_count": 0,
      "reselling": false,
      "search_content": "Panasonic <span class=\"highlight\">microwave</span> oven in good working order 800 W power and turntable",
      "search_title": "<span class=\"highlight\">Microwave</span> Oven (Greenfield)",
      "title": "Microwave Oven (Greenfield)",
      "type": "offer",
      "url": "https://trashnothing.com/post/25997431/microwave-oven-greenfield",
      "user_id": 82928
    }
  ],
  "start_index": 0
}
```

<h3 id="search-posts-by-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The posts and paging data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="search-posts-by-a-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_index|integer|false|none|The index of the last post being returned (an integer between start_index and num_posts).|
|group_ids|[string]|false|none|The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.<br>|
|num_pages|integer|false|none|The total number of pages available.|
|num_posts|integer|false|none|The total number of posts available.|
|page|integer|false|none|The page number of the posts being returned.|
|per_page|integer|false|none|The number of posts being returned per page.|
|posts|[[PostSearchResult](#schemapostsearchresult)]|false|none|none|
|start_index|integer|false|none|The index of the first post being returned (an integer between 1 and num_posts).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Retrieve a users' profile image

<a id="opIdget_profile_image_file"></a>

> Code samples

```bash
curl https://example.com/users/string/profile-image \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{user_id}/profile-image`

This is designed to be used as the src attribute of an HTML &lt;img&gt; tag to show the profile image of the given user.


<h3 id="retrieve-a-users-profile-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|user_id|path|string|true|The user ID of the user to return the profile image of.|
|default|query|string|false|A default image URL to use when the user has no profile image. Or to use one of the Gravatar default images, you can set default to any one of (404, mm, identicon, monsterid, wavatar, retro, blank). <br /><br /> To learn how the Gravatar default images options work, see the Default Image section on the page at:<br /> https://en.gravatar.com/site/implement/images/<br>|

<h3 id="retrieve-a-users-profile-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|302|Found|This endpoint returns an HTTP redirect to a URL that hosts the image. So requests on this endpoint that automatically follow redirects (eg. most browsers) will be redirected to a valid image file.<br>|None|
|400|Bad Request|Invalid default parameter.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

<h1 id="trash-nothing-posts">posts</h1>

Retrieve and update posts.

## List posts

<a id="opIdget_posts"></a>

> Code samples

```bash
curl 'https://example.com/posts?types=string&sources=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posts`

NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.
NOTE: Passing the latitude, longitude and radius parameters filters all posts by their location and so these parameters will temporarily override the current users' location preferences. When latitude, longitude and radius are not specified, public posts will be filtered by the current users' location preferences.


<h3 id="list-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sort_by|query|string|false|How to sort the posts that are returned.  One of: date, active, distance <br /><br /><br>Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.<br>|
|types|query|string|true|A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin<br>|
|sources|query|string|true|A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.<br>|
|group_ids|query|string|false|A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.<br>|
|per_page|query|integer|false|The number of posts to return per page (must be >= 1 and <= 100).|
|page|query|integer|false|The page of posts to return.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|latitude|query|number|false|The latitude of a point around which to return posts.<br>|
|longitude|query|number|false|The longitude of a point around which to return posts.<br>|
|radius|query|number|false|The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.<br>|
|date_min|query|string(date-time)|false|Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.<br>|
|date_max|query|string(date-time)|false|Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.|
|outcomes|query|string|false|A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.<br>|
|user_state|query|string|false|If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.<br>|
|include_reposts|query|integer|false|If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.<br>|

> Example responses

> 200 Response

```json
{
  "end_index": 0,
  "group_ids": [
    "string"
  ],
  "last_listings_view": "1970-01-01T00:00:00Z",
  "num_pages": 0,
  "num_posts": 0,
  "page": 0,
  "per_page": 0,
  "posts": [
    {
      "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
      "date": "2018-02-05T15:10:21",
      "expiration": "2018-03-05T15:10:21",
      "footer": null,
      "group_id": 6,
      "latitude": 43.653226,
      "longitude": -79.383184,
      "outcome": "satisfied",
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "post_id": 3171898,
      "repost_count": 1,
      "reselling": false,
      "title": "Ultrasonic diffuser (Downtown Toronto)",
      "type": "offer",
      "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
      "user_id": 2933
    }
  ],
  "start_index": 0
}
```

<h3 id="list-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The posts and paging data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="list-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_index|integer|false|none|The index of the last post being returned (an integer between start_index and num_posts).|
|group_ids|[string]|false|none|The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.<br>|
|last_listings_view|string(date-time)|false|none|The UTC date and time when the current user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page. <br /><br /> NOTE: For requests using an api key instead of oauth, this field is always null.<br>|
|num_pages|integer|false|none|The total number of pages available.|
|num_posts|integer|false|none|The total number of posts available.|
|page|integer|false|none|The page number of the posts being returned.|
|per_page|integer|false|none|The number of posts being returned per page.|
|posts|[[Post](#schemapost)]|false|none|none|
|start_index|integer|false|none|The index of the first post being returned (an integer between 1 and num_posts).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Submit a post

<a id="opIdsubmit_post"></a>

> Code samples

```bash
curl https://example.com/posts \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'content=string' \
  -F 'expires_in=string' \
  -F 'fair_offer=0' \
  -F 'group_ids=string' \
  -F 'latitude=0' \
  -F 'location=string' \
  -F 'longitude=0' \
  -F 'photo_ids=string' \
  -F 'preferences=string' \
  -F 'repost=string' \
  -F 'reselling=string' \
  -F 'session=string' \
  -F 'title=string' \
  -F 'type=string'
```

`POST /posts`

Submits a new post.


> Body parameter

```yaml
content: string
expires_in: string
fair_offer: 0
group_ids: string
latitude: 0
location: string
longitude: 0
photo_ids: string
preferences: string
repost: string
reselling: string
session: string
title: string
type: string
```

<h3 id="submit-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» content|body|string|false|A longer description of the item(s).|
|» expires_in|body|string|false|When the post should expire.  Defaults to 90 days. Any amount of time from 1 hour to 90 days can be provided.  To pass a number of hours, provide the number of hours prefixed by 'h' (eg. 1hr 24hr). To pass a number of days, provide the number of days prefixed by 'd' (eg. 1d 90d). <br /><br /> Note that posts may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays.  So with short expirations (eg. < 8 hours), there is a chance that the post may expire before it's approved and so it will never be published.<br>|
|» fair_offer|body|integer|false|If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).|
|» group_ids|body|string|false|A comma separated list of group IDs to submit the post to (if any).|
|» latitude|body|number|false|The latitude corresponding to the location description provided. <br /><br /> If latitude and longitude are not provided, an attempt will be made to automatically geocode the location.  If the location is unable to be geocoded, the post will be rejected* and will have to be resubmitted with a latitude and longitude corresponding to the location or resubmitted with a different location that can be automatically geocoded. <br /><br /> NOTE: The latitude and longitude should NOT be the users' exact location because we don't want to publicize their exact location unless their location description is their full address (which is not recommended). <br /><br /> *When a post is rejected because it can't be geocoded, the returned error will have its identifier property set to 'unknown-location'.<br>|
|» location|body|string|true|A short location description.|
|» longitude|body|number|false|The longitude corresponding to the location description provided. (see the NOTE in latitude description)|
|» photo_ids|body|string|false|A comma separated list of the IDs of the photos that should be attached to this post.|
|» preferences|body|string|false|A JSON string representing a permanent object that the client persists and modifies based on warnings returned by the post submission process and user input.  Some warnings returned after submitting  a post have a preference_key string property so that users can opt out of those warnings in the future.  To save this opt-out preference, set the property indicated by the preference_key in the preferences object (eg. preferences[preference_key] = 1).  The preferences object is never modified by the server - it is up to the client to initialize, modify and persist the preferences object.<br>|
|» repost|body|string|false|If the post is a repost of an existing post, this should be set to the post_id of the post that is being reposted.<br>|
|» reselling|body|string|false|For wanted posts only. If set to 1, the wanted post will show that the poster intends to resell any items that they receive in response to this post.  Posters must declare if they intend to resell items.<br>|
|» session|body|string|true|A JSON string representing a temporary object that is used to store data about the submission process for a single post.  The first time a post is submitted, session should be a new empty object (eg. '{}').  The session object should be persisted by the client until that post is successfully submitted and then it  can be discarded so that the next post will start over with a new empty session object.  Every time a post is submitted and the response indicates that the submission was not successful, the session object returned in the response should override the clients copy of the session.<br>|
|» title|body|string|true|A short description of the item(s).|
|» type|body|string|true|The type of post.  One of: offer, wanted<br>|

> Example responses

> 200 Response

```json
{
  "identifier": "string",
  "message": "string",
  "preference_key": "string",
  "result": "string",
  "session": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="submit-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Post submission result.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="submit-a-post-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|false|none|When an error or warning is returned, this will contain a short string representing the type of error or warning that occurred.  Is null on success.<br>|
|message|string|false|none|Contains text describing the reason a post  was not successful.  Is null on success.<br>|
|preference_key|string|false|none|Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be  set in the preferences object by the client to opt out of that type of warning in the future (see the description of the preferences parameter for more details).  Is null for errors, success and warnings that can't be opted out of.<br>|
|result|string|false|none|One of: success, error, warning. <br /><br /> A success result indicates that the post  was submitted successfully. Note that posts may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays. <br /><br /> An error result indicates that there is an error with the post that should be shown to the user and the message property will contain text describing the error. <br /><br /> A warning result indicates that there is a warning about the post  to show the user and the message property will contain a string describing the warning.   A warning result doesn't prevent a post  from being submitted, to continue the submission process after a warning result, just re-submit (with the updated session object) to temporarily override that specific warning.<br>|
|session|object|false|none|The updated session object that should override the client's copy of the session that was passed in the session parameter. Is null on success.<br>|
|» **additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List all posts

<a id="opIdget_all_posts"></a>

> Code samples

```bash
curl 'https://example.com/posts/all?types=string&date_min=1970-01-01T00%3A00%3A00Z&date_max=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posts/all`

This endpoint provides an easy way to get a feed of all the publicly published posts on trash nothing. It provides access to all publicly published offer and wanted posts from the last 30 days. The posts are sorted by date (newest first). <br /><br /> There are fewer options for filtering, sorting and searching posts with this endpoint but there is no 1,000 post limit and posts that are crossposted to multiple groups are not merged together in the response.  In most cases, crossposted posts are easy to detect because they have the same user_id, title and content.


<h3 id="list-all-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|types|query|string|true|A comma separated list of the post types to return.  The available post types are: offer, wanted<br>|
|date_min|query|string(date-time)|true|Only posts newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.<br>|
|date_max|query|string(date-time)|true|Only posts older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.<br>|
|per_page|query|integer|false|The number of posts to return per page (must be >= 1 and <= 50).|
|page|query|integer|false|The page of posts to return.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
{
  "posts": [
    {
      "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
      "date": "2018-02-05T15:10:21",
      "expiration": "2018-03-05T15:10:21",
      "footer": null,
      "group_id": 6,
      "latitude": 43.653226,
      "longitude": -79.383184,
      "outcome": "satisfied",
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "post_id": 3171898,
      "repost_count": 1,
      "reselling": false,
      "title": "Ultrasonic diffuser (Downtown Toronto)",
      "type": "offer",
      "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
      "user_id": 2933
    }
  ]
}
```

<h3 id="list-all-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The posts.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="list-all-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|posts|[[Post](#schemapost)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## List all post changes

<a id="opIdget_all_posts_changes"></a>

> Code samples

```bash
curl 'https://example.com/posts/all/changes?date_min=1970-01-01T00%3A00%3A00Z&date_max=1970-01-01T00%3A00%3A00Z' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posts/all/changes`

This endpoint provides an easy way to get a feed of all the changes that have been made to publicly published posts on trash nothing.  Similar to the /posts/all endpoint, only data from the last 30 days is available and the changes are sorted by date (newest first).  Every change includes the date of the change, the post_id of the post that was changed and the type of change. <br /><br /> The different types of changes that are returned are listed below. <br /><br /> - deleted<br /> - undeleted<br /> - satisfied<br /> - promised<br /> - unpromised<br /> - withdrawn<br /> - edited<br /> <br /> For edited changes, clients can use the retrieve post API endpoint to get the edits that have been made to the post.


<h3 id="list-all-post-changes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|date_min|query|string(date-time)|true|Only changes newer than or equal to this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_max. And the date and time must be within the last 30 days. And the date and time must be rounded to the nearest second.<br>|
|date_max|query|string(date-time)|true|Only changes older than this UTC date and time will be returned. The UTC date and time used must be within a day or less of date_min. And the date and time must be rounded to the nearest second.<br>|
|per_page|query|integer|false|The number of changes to return per page (must be >= 1 and <= 50).|
|page|query|integer|false|The page of changes to return.|

> Example responses

> 200 Response

```json
{
  "changes": [
    {
      "date": "1970-01-01T00:00:00Z",
      "post_id": "string",
      "type": "string"
    }
  ]
}
```

<h3 id="list-all-post-changes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The changes.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="list-all-post-changes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[object]|false|none|none|
|» date|string(date-time)|false|none|The UTC date and time when the post was changed.|
|» post_id|string|false|none|none|
|» type|string|false|none|The type of change.  One of: deleted, undeleted, satisfied, promised, unpromised, withdrawn, edited, expired<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Retrieve multiple posts

<a id="opIdget_posts_by_ids"></a>

> Code samples

```bash
curl 'https://example.com/posts/multiple?post_ids=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posts/multiple`

<h3 id="retrieve-multiple-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_ids|query|string|true|A comma separated list of the post IDs. If more than 10 post IDs are passed, only the first 10 posts will be returned.<br>|

> Example responses

> 200 Response

```json
{
  "forbidden": [
    "string"
  ],
  "not_found": [
    "string"
  ],
  "posts": [
    {
      "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
      "date": "2018-02-05T15:10:21",
      "expiration": "2018-03-05T15:10:21",
      "footer": null,
      "group_id": 6,
      "latitude": 43.653226,
      "longitude": -79.383184,
      "outcome": "satisfied",
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "post_id": 3171898,
      "repost_count": 1,
      "reselling": false,
      "title": "Ultrasonic diffuser (Downtown Toronto)",
      "type": "offer",
      "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
      "user_id": 2933
    }
  ]
}
```

<h3 id="retrieve-multiple-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The posts.|Inline|

<h3 id="retrieve-multiple-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forbidden|[string]|false|none|The IDs of posts that are forbidden for the current user.|
|not_found|[string]|false|none|The IDs of posts that weren't found (may have been deleted or never existed).|
|posts|[[Post](#schemapost)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Search posts

<a id="opIdsearch_posts"></a>

> Code samples

```bash
curl 'https://example.com/posts/search?search=string&types=string&sources=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posts/search`

Searching posts takes the same arguments as listing posts except for the addition of the search and sort_by parameters.
NOTE: When paging through the posts returned by this endpoint, there will be at most 1,000 posts that can be returned (eg. 50 pages worth of posts with the default per_page value of 20).  In areas where there are more than 1,000 posts, clients can use more specific query parameters to adjust which posts are returned.


<h3 id="search-posts-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|The search query used to find posts.|
|sort_by|query|string|false|How to sort the posts that are returned.  One of: relevance, date, active, distance <br /><br /> Relevance sorting will sort the posts that best match the search query first. Date sorting will sort posts from newest to oldest. Active sorting will sort active posts before satisfied, withdrawn and expired posts and then sort by date. Distance sorting will sort the closest posts first.<br>|
|types|query|string|true|A comma separated list of the post types to return.  The available post types are: offer, taken, wanted, received, admin<br>|
|sources|query|string|true|A comma separated list of the post sources to retrieve posts from. The available sources are: groups, trashnothing, open_archive_groups. The trashnothing source is for public posts that are posted on trash nothing but are not associated with any group. The open_archive_groups source provides a way to easily request posts from groups that have open_archives set to true without having to pass a group_ids parameter.  When passed, it will automatically return posts from open archive groups that are within the area specified by the latitude, longitude and radius parameters (or the current users' location if latitude, longitude and radius aren't passed). <br /><br /> NOTE: For requests using an api key instead of oauth, passing the trashnothing source or the open_archive_groups source makes the latitude, longitude and radius parameters required.<br>|
|group_ids|query|string|false|A comma separated list of the group IDs to retrieve posts from. This parameter is only used if the 'groups' source is passed in the sources parameter and only groups that the current user is a member of or that are open archives groups will be used (the group IDs of other groups will be silently discarded*). <br /><br /> NOTE: For requests using an api key instead of oauth, this field is required if the 'groups' source is passed. In addition, only posts from groups that have open_archives set to true will be used (the group IDS of other groups will be silently discarded*). <br /><br/> *To determine which group IDs were used and which were discarded, use the group_ids field in the response.<br>|
|per_page|query|integer|false|The number of posts to return per page (must be >= 1 and <= 100).|
|page|query|integer|false|The page of posts to return.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|latitude|query|number|false|The latitude of a point around which to return posts.<br>|
|longitude|query|number|false|The longitude of a point around which to return posts.<br>|
|radius|query|number|false|The radius in meters of a circle centered at the point defined by the latitude and longitude parameters. When latitude, longitude and radius are passed, only posts within the circle defined by these parameters will be returned.<br>|
|date_min|query|string(date-time)|false|Only posts newer than or equal to this UTC date and time will be returned.  If unset, defaults to the current date and time minus 90 days.<br>|
|date_max|query|string(date-time)|false|Only posts older than this UTC date and time will be returned.  If unset, defaults to the current date and time.|
|outcomes|query|string|false|A comma separated list of the post outcomes to return.  The available post outcomes are: satisfied, withdrawn <br /><br /> There are also a couple special values that can be passed.  If set to an empty string (the default), only posts that are not satisfied and not withdrawn and not expired are returned. If set to 'all', all posts will be returned no matter what outcome the posts have. If set to 'not-promised', only posts that are not satisfied ant not withdrawn and not expired and not promised are returned.<br>|
|user_state|query|string|false|If user_state is set, only posts matching the state specified will be returned.  Only one state may be passed and it must be one of the following: viewed, replied, bookmarked <br><br> NOTE: This option will only work with oauth requests.<br>|
|include_reposts|query|integer|false|If set to 1 (the default), posts that are reposts will be included. If set to 0, reposts will be excluded. See the repost_count field of post objects for details about how reposts are identified.<br>|

> Example responses

> 200 Response

```json
{
  "end_index": 0,
  "group_ids": [
    "string"
  ],
  "num_pages": 0,
  "num_posts": 0,
  "page": 0,
  "per_page": 0,
  "posts": [
    {
      "content": "Panasonic microwave oven in good working order 800 W power and turntable inside Has all the normal microwave functions plus grill elements for browning Comes with original instructions booklet It's an old microwave and could do with a bit of a clean, but still works very well\n",
      "date": "2018-02-18T17:11:38",
      "expiration": "2018-04-18T17:11:38",
      "footer": null,
      "group_id": 81,
      "latitude": 42.961404,
      "longitude": -88.012586,
      "outcome": null,
      "photos": null,
      "post_id": 25997431,
      "repost_count": 0,
      "reselling": false,
      "search_content": "Panasonic <span class=\"highlight\">microwave</span> oven in good working order 800 W power and turntable",
      "search_title": "<span class=\"highlight\">Microwave</span> Oven (Greenfield)",
      "title": "Microwave Oven (Greenfield)",
      "type": "offer",
      "url": "https://trashnothing.com/post/25997431/microwave-oven-greenfield",
      "user_id": 82928
    }
  ],
  "start_index": 0
}
```

<h3 id="search-posts-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The posts and paging data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="search-posts-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_index|integer|false|none|The index of the last post being returned (an integer between start_index and num_posts).|
|group_ids|[string]|false|none|The IDs of the groups that the posts were retrieved from (will be null when no group IDs were used). These IDs may be a subset of the requested group IDs when a request includes group IDs for groups that are not open archives and that the current user is not a member of.  If the open_archive_groups source is used, these IDs may include the IDs of open archive groups that weren't present in the group_ids parameter of the request.<br>|
|num_pages|integer|false|none|The total number of pages available.|
|num_posts|integer|false|none|The total number of posts available.|
|page|integer|false|none|The page number of the posts being returned.|
|per_page|integer|false|none|The number of posts being returned per page.|
|posts|[[PostSearchResult](#schemapostsearchresult)]|false|none|none|
|start_index|integer|false|none|The index of the first post being returned (an integer between 1 and num_posts).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Retrieve a post

<a id="opIdget_post"></a>

> Code samples

```bash
curl https://example.com/posts/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posts/{post_id}`

<h3 id="retrieve-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to retrieve.|

> Example responses

> 200 Response

```json
{
  "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
  "date": "2018-02-05T15:10:21",
  "expiration": "2018-03-05T15:10:21",
  "footer": null,
  "group_id": 6,
  "latitude": 43.653226,
  "longitude": -79.383184,
  "outcome": "satisfied",
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "post_id": 3171898,
  "repost_count": 1,
  "reselling": false,
  "title": "Ultrasonic diffuser (Downtown Toronto)",
  "type": "offer",
  "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
  "user_id": 2933
}
```

<h3 id="retrieve-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The post.|[Post](#schemapost)|
|403|Forbidden|The user doesn't have permission to access the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Update a post

<a id="opIdupdate_post"></a>

> Code samples

```bash
curl https://example.com/posts/string \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'content=string' \
  -F 'expires_in=string' \
  -F 'fair_offer=0' \
  -F 'latitude=0' \
  -F 'location=string' \
  -F 'longitude=0' \
  -F 'photo_ids=string' \
  -F 'preferences=string' \
  -F 'reselling=string' \
  -F 'session=string' \
  -F 'title=string' \
  -F 'type=string'
```

`PUT /posts/{post_id}`

Users can update posts to fix mistakes with their post, add photos, or add more details about the items. Updates should not be used to say that items in a post have been taken or received since the post satisfy endpoint is designed to do that.


> Body parameter

```yaml
content: string
expires_in: string
fair_offer: 0
latitude: 0
location: string
longitude: 0
photo_ids: string
preferences: string
reselling: string
session: string
title: string
type: string
```

<h3 id="update-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to update.|
|body|body|object|true|none|
|» content|body|string|false|A longer description of the item(s).|
|» expires_in|body|string|false|When the post should expire.   Any amount of time from 1 hour to 90 days can be provided.  To pass a number of hours, provide the number of hours prefixed by 'h' (eg. 1hr 24hr). To pass a number of days, provide the number of days prefixed by 'd' (eg. 1d 90d). <br /><br /> Note that updates may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays.  So with short expirations (eg. < 8 hours), there is a chance that the post may expire before the update is approved and so it will never be published.<br><br><br> NOTE: The max expiration for a post is 90 days after the post is published.  So updates to posts that try to set an longer expiration will be silently changed to just apply the max expiration.<br>|
|» fair_offer|body|integer|false|If set to 1, the post will be posted with the Fair Offer Policy (only valid for offer posts - see https://trashnothing.com/fair_offer_policy ).|
|» latitude|body|number|false|The latitude corresponding to the location description provided. <br /><br /> If latitude and longitude are not provided, an attempt will be made to automatically geocode the location.  If the location is unable to be geocoded, the post will be rejected* and will have to be resubmitted with a latitude and longitude corresponding to the location or resubmitted with a different location that can be automatically geocoded. <br /><br /> NOTE: The latitude and longitude should NOT be the users' exact location because we don't want to publicize their exact location unless their location description is their full address (which is not recommended). <br /><br /> *When a post is rejected because it can't be geocoded, the returned error will have its identifier property set to 'unknown-location'.<br>|
|» location|body|string|true|A short location description.|
|» longitude|body|number|false|The longitude corresponding to the location description provided. (see the NOTE in latitude description)|
|» photo_ids|body|string|false|A comma separated list of the IDs of the photos that should be attached to this post.|
|» preferences|body|string|false|A JSON string representing a permanent object that the client persists and modifies based on warnings returned by the update submission process and user input.  Some warnings returned after submitting  an update have a preference_key string property so that users can opt out of those warnings in the future.  To save this opt-out preference, set the property indicated by the preference_key in the preferences object (eg. preferences[preference_key] = 1).  The preferences object is never modified by the server - it is up to the client to initialize, modify and persist the preferences object.<br>|
|» reselling|body|string|false|For wanted posts only. If set to 1, the wanted post will show that the poster intends to resell any items that they receive in response to this post.  Posters must declare if they intend to resell items.<br>|
|» session|body|string|true|A JSON string representing a temporary object that is used to store data about the update process for a single post.  The first time a post update is submitted, session should be a new empty object (eg. '{}').  The session object should be persisted by the client until that update is successfully submitted and then it  can be discarded so that the next update will start over with a new empty session object.  Every time an update is submitted and the response indicates that the submission was not successful, the session object returned in the response should override the clients copy of the session.<br>|
|» title|body|string|true|A short description of the item(s).|
|» type|body|string|true|The type of post.  One of: offer, wanted<br>|

> Example responses

> 200 Response

```json
{
  "identifier": "string",
  "message": "string",
  "preference_key": "string",
  "result": "string",
  "session": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="update-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Post update result.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|
|403|Forbidden|The user doesn't have permission to edit the post.|None|
|404|Not Found|Post not found.|None|

<h3 id="update-a-post-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|identifier|string|false|none|When an error or warning is returned, this will contain a short string representing the type of error or warning that occurred.  Is null on success.<br>|
|message|string|false|none|Contains text describing the reason a post update was not successful.  Is null on success.<br>|
|preference_key|string|false|none|Certain types of warnings can be opted out of.  These warnings will set preference_key to a string that can be  set in the preferences object by the client to opt out of that type of warning in the future (see the description of the preferences parameter for more details).  Is null for errors, success and warnings that can't be opted out of.<br>|
|result|string|false|none|One of: success, error, warning. <br /><br /> A success result indicates that the post update was submitted successfully. Note that post updates may not appear instantly after submission because the volunteer moderators of many groups may have additional automatic or manual review processes in place that can cause delays. <br /><br /> An error result indicates that there is an error with the post that should be shown to the user and the message property will contain text describing the error. <br /><br /> A warning result indicates that there is a warning about the post update to show the user and the message property will contain a string describing the warning.   A warning result doesn't prevent a post update from being submitted, to continue the submission process after a warning result, just re-submit (with the updated session object) to temporarily override that specific warning.<br>|
|session|object|false|none|The updated session object that should override the client's copy of the session that was passed in the session parameter. Is null on success.<br>|
|» **additionalProperties**|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Delete a post

<a id="opIddelete_post"></a>

> Code samples

```bash
curl https://example.com/posts/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /posts/{post_id}`

Users can delete posts they have made that have been satisfied or withdrawn or that have expired. Deleting posts isn't intended to be a normal part of the posting process since it makes reposting and viewing old posts harder.


<h3 id="delete-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|none|

<h3 id="delete-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Post deleted.|None|
|400|Bad Request|Post cannot be deleted until it is satisfied, withdrawn or expired.|None|
|403|Forbidden|The user doesn't have permission to delete the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Bookmark a post

<a id="opIdbookmark_post"></a>

> Code samples

```bash
curl https://example.com/posts/string/bookmark \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /posts/{post_id}/bookmark`

<h3 id="bookmark-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|none|

<h3 id="bookmark-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The post has been bookmarked.|None|
|403|Forbidden|The user doesn't have permission to view the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Delete a post bookmark

<a id="opIddelete_bookmark"></a>

> Code samples

```bash
curl https://example.com/posts/string/bookmark \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /posts/{post_id}/bookmark`

<h3 id="delete-a-post-bookmark-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|none|

<h3 id="delete-a-post-bookmark-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Bookmark deleted.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Retrieve post display data

<a id="opIdget_post_and_related_data"></a>

> Code samples

```bash
curl https://example.com/posts/string/display \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /posts/{post_id}/display`

Retrieve a post and other data related to the post that is useful for displaying the post such as data about the user who posted the post and the groups the post was posted on.


<h3 id="retrieve-post-display-data-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to retrieve.|

> Example responses

> 200 Response

```json
{
  "author": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "feedback": {
      "percent_positive": 87.5,
      "restriction": "no-recent-messages",
      "score": 7
    },
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "reply_time": 4850,
    "user_id": 2946512,
    "username": "fred gibson"
  },
  "author_offer_count": 0,
  "author_posts": [
    {
      "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
      "date": "2018-02-05T15:10:21",
      "expiration": "2018-03-05T15:10:21",
      "footer": null,
      "group_id": 6,
      "latitude": 43.653226,
      "longitude": -79.383184,
      "outcome": "satisfied",
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "post_id": 3171898,
      "repost_count": 1,
      "reselling": false,
      "title": "Ultrasonic diffuser (Downtown Toronto)",
      "type": "offer",
      "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
      "user_id": 2933
    }
  ],
  "author_wanted_count": 0,
  "bookmarked": true,
  "feedback": [
    {
      "content": "Fred gave me a great antique table for my new apartment!",
      "date": "2020-03-01T12:01:22",
      "positive": true,
      "reviewer_user_id": 9191,
      "user_id": 2946512
    }
  ],
  "groups": [
    {
      "country": {
        "abbreviation": "CA",
        "name": "Canada"
      },
      "group_id": 46,
      "has_questions": true,
      "homepage": "https://trashnothing.com/OttawaReuse",
      "identifier": "OttawaReuse",
      "latitude": 45.423494,
      "longitude": -75.697933,
      "member_count": 4838,
      "membership": {
        "date": "2015-01-22T17:05:50",
        "questionnaire": {
          "message": "This group is only for people who live in Ottawa.",
          "questions": [
            "Where do you live?"
          ]
        },
        "status": "pending-questions"
      },
      "name": "Ottawa Reuse",
      "open_archives": false,
      "open_membership": false,
      "region": {
        "abbreviation": "ON",
        "name": "Ontario"
      },
      "timezone": "America/Toronto"
    }
  ],
  "post": {
    "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
    "date": "2018-02-05T15:10:21",
    "expiration": "2018-03-05T15:10:21",
    "footer": null,
    "group_id": 6,
    "latitude": 43.653226,
    "longitude": -79.383184,
    "outcome": "satisfied",
    "photos": [
      {
        "images": [
          {
            "height": 120,
            "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
            "width": 90
          },
          {
            "height": 240,
            "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
            "width": 180
          },
          {
            "height": 360,
            "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
            "width": 270
          },
          {
            "height": 500,
            "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
            "width": 375
          }
        ],
        "photo_id": "695624-768616",
        "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
        "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
      }
    ],
    "post_id": 3171898,
    "repost_count": 1,
    "reselling": false,
    "title": "Ultrasonic diffuser (Downtown Toronto)",
    "type": "offer",
    "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
    "user_id": 2933
  },
  "replied": true,
  "user_can_reply": true,
  "viewed": true
}
```

<h3 id="retrieve-post-display-data-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The post and related data.|Inline|
|403|Forbidden|The user doesn't have permission to access the post.|None|
|404|Not Found|Post not found.|None|

<h3 id="retrieve-post-display-data-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|author|[User](#schemauser)|false|none|none|
|author_offer_count|integer|false|none|Count of offer posts made by the post author in the last 90 days.|
|author_posts|[[Post](#schemapost)]|false|none|Other active posts from the post author in the last 90 days. A maximum of 30 posts will be returned.<br>|
|author_wanted_count|integer|false|none|Count of wanted posts made by the post author in the last 90 days.|
|bookmarked|boolean|false|none|Whether or not the current user has bookmarked this post.  Will be null for api key requests and for the current users' posts.|
|feedback|[[Feedback](#schemafeedback)]|false|none|Feedback the current user has left on the post author.|
|groups|[[Group](#schemagroup)]|false|none|The groups the post is published on.|
|post|[Post](#schemapost)|false|none|An offer, wanted, admin, taken or received post.|
|replied|boolean|false|none|Whether or not the current user has replied to this post.  Will be null for api key requests and for the current users' posts.|
|user_can_reply|boolean|false|none|Whether or not the current user (if any) can reply to this post. Unverified users cannot reply to posts until they verify their account.<br>|
|viewed|boolean|false|none|Whether or not the current user has previously viewed this post.  Will be null for api key requests and for the current users' posts.|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Promise an offer post

<a id="opIdpromise_post"></a>

> Code samples

```bash
curl https://example.com/posts/string/promise \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /posts/{post_id}/promise`

Mark an offer by the current user as promised to someone. This helps people viewing the post know that the items being offered may soon be given away as long as the person who was promised the items picks them up.


<h3 id="promise-an-offer-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to promise.|

> Example responses

> 200 Response

```json
{
  "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
  "date": "2018-02-05T15:10:21",
  "expiration": "2018-03-05T15:10:21",
  "footer": null,
  "group_id": 6,
  "latitude": 43.653226,
  "longitude": -79.383184,
  "outcome": "satisfied",
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "post_id": 3171898,
  "repost_count": 1,
  "reselling": false,
  "title": "Ultrasonic diffuser (Downtown Toronto)",
  "type": "offer",
  "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
  "user_id": 2933
}
```

<h3 id="promise-an-offer-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated post.|[Post](#schemapost)|
|400|Bad Request|The post is not an offer post or the post has already been satisfied or withdrawn or expired.|None|
|403|Forbidden|The user doesn't have permission to access the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Reply to a post

<a id="opIdreply_to_post"></a>

> Code samples

```bash
curl https://example.com/posts/string/reply \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'message=string' \
  -F 'photo_ids=string'
```

`POST /posts/{post_id}/reply`

Send a reply to a post from the current user to the post author.

> Body parameter

```yaml
message: string
photo_ids: string
```

<h3 id="reply-to-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to reply to.|
|body|body|object|true|none|
|» message|body|string|true|The message to send to the post author.|
|» photo_ids|body|string|false|A comma separated list of the IDs of the photos that should be attached to this reply.|

<h3 id="reply-to-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The reply has been sent.|None|
|400|Bad Request|Missing message parameter or post has been satisfied or withdrawn or expired or the post author is blocked.|None|
|403|Forbidden|The user doesn't have permission to reply to the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Report a post

<a id="opIdreport_post"></a>

> Code samples

```bash
curl https://example.com/posts/string/report \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'details=string' \
  -F 'reason=string'
```

`POST /posts/{post_id}/report`

Reports a post to be reviewed by the moderators.

> Body parameter

```yaml
details: string
reason: string
```

<h3 id="report-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|none|
|body|body|object|true|none|
|» details|body|string|false|An explanation from the current user for why they are reporting this post.   This is useful for users to provide evidence or explain why there is a problem with the post. <br /><br /> NOTE: If reason is set to 'other', details are required.<br>|
|» reason|body|string|true|The reason that this post is being reported.  Must be one of: 'spam', 'not free (for sale/trade/borrow)', 'illegal item', 'not family-friendly', 'other', 'mislabeled: is a Want', 'mislabeled: is an Offer'. <br /><br /> NOTE: If reason is set to 'other', the details parameter is required to be set.<br>|

<h3 id="report-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The post has been reported.|None|
|400|Bad Request|Invalid reason parameter or missing details.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Satisfy a post

<a id="opIdsatisfy_post"></a>

> Code samples

```bash
curl https://example.com/posts/string/satisfy \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /posts/{post_id}/satisfy`

Mark an offer or wanted post by the current user as satisfied (eg. an offer has been taken or a wanted has been received).

<h3 id="satisfy-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to satisfy.|

> Example responses

> 200 Response

```json
{
  "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
  "date": "2018-02-05T15:10:21",
  "expiration": "2018-03-05T15:10:21",
  "footer": null,
  "group_id": 6,
  "latitude": 43.653226,
  "longitude": -79.383184,
  "outcome": "satisfied",
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "post_id": 3171898,
  "repost_count": 1,
  "reselling": false,
  "title": "Ultrasonic diffuser (Downtown Toronto)",
  "type": "offer",
  "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
  "user_id": 2933
}
```

<h3 id="satisfy-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated post.|[Post](#schemapost)|
|400|Bad Request|Invalid summary or the post is not an offer or wanted post or the post has been withdrawn or has expired.|None|
|403|Forbidden|The user doesn't have permission to access the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Share a post

<a id="opIdshare_post"></a>

> Code samples

```bash
curl https://example.com/posts/string/share \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /posts/{post_id}/share`

Forwards a copy of the post to the current user so that they can forward it to friends.

<h3 id="share-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to share.|

<h3 id="share-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Post shared.|None|
|403|Forbidden|The user doesn't have permission to access the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Unpromise an offer post

<a id="opIdunpromise_post"></a>

> Code samples

```bash
curl https://example.com/posts/string/unpromise \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /posts/{post_id}/unpromise`

Mark an offer by the current user as unpromised.

<h3 id="unpromise-an-offer-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to unpromise.|

> Example responses

> 200 Response

```json
{
  "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
  "date": "2018-02-05T15:10:21",
  "expiration": "2018-03-05T15:10:21",
  "footer": null,
  "group_id": 6,
  "latitude": 43.653226,
  "longitude": -79.383184,
  "outcome": "satisfied",
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "post_id": 3171898,
  "repost_count": 1,
  "reselling": false,
  "title": "Ultrasonic diffuser (Downtown Toronto)",
  "type": "offer",
  "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
  "user_id": 2933
}
```

<h3 id="unpromise-an-offer-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated post.|[Post](#schemapost)|
|400|Bad Request|The post is not an offer post or the post has already been satisfied or withdrawn.|None|
|403|Forbidden|The user doesn't have permission to access the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Withdraw a post

<a id="opIdwithdraw_post"></a>

> Code samples

```bash
curl https://example.com/posts/string/withdraw \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /posts/{post_id}/withdraw`

Mark an offer or wanted post by the current user as withdrawn.

<h3 id="withdraw-a-post-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|post_id|path|string|true|The ID of the post to withdraw.|

> Example responses

> 200 Response

```json
{
  "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
  "date": "2018-02-05T15:10:21",
  "expiration": "2018-03-05T15:10:21",
  "footer": null,
  "group_id": 6,
  "latitude": 43.653226,
  "longitude": -79.383184,
  "outcome": "satisfied",
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "post_id": 3171898,
  "repost_count": 1,
  "reselling": false,
  "title": "Ultrasonic diffuser (Downtown Toronto)",
  "type": "offer",
  "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
  "user_id": 2933
}
```

<h3 id="withdraw-a-post-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated post.|[Post](#schemapost)|
|400|Bad Request|The post is not an offer or wanted post or the post has already been satisfied or expired.|None|
|403|Forbidden|The user doesn't have permission to access the post.|None|
|404|Not Found|Post not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

<h1 id="trash-nothing-groups">groups</h1>

Search, subscribe and unsubscribe to groups.

## Search groups

<a id="opIdsearch_groups"></a>

> Code samples

```bash
curl https://example.com/groups \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups`

<h3 id="search-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|false|Find groups that have the given text somewhere in their name (case insensitive).|
|latitude|query|number|false|Find groups near the given latitude and longitude.|
|longitude|query|number|false|Find groups near the given latitude and longitude.|
|distance|query|number|false|When latitude and longitude are passed, distance can optionally be passed to only return groups within a certain distance (in kilometers) from the point specified by the latitude and longitude.  The distance must be > 0 and <= 150 and will default to 100.<br>|
|country|query|string|false|Find groups in the given country where country is a 2 letter country code for the country (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ).<br>|
|region|query|string|false|For countries with regions (AU, CA, GB, US), search groups in a specific region as specified by the region abbreviation.  The supported regions and their abbreviations are listed below. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority. <br /><br /> --- <br /><br /> **AU**<br /> - QLD: Queensland<br /> - SA: South Australia<br /> - TAS: Tasmania<br /> - VIC: Victoria<br /> - WA: Western Australia<br /> - NT: Northern Territory<br /> - NSW: New South Wales - ACT<br /> <br /> **CA**<br /> - AB: Alberta<br /> - BC: British Columbia<br /> - MB: Manitoba<br /> - NB: New Brunswick<br /> - NL: Newfoundland and Labrador<br /> - NS: Nova Scotia<br /> - ON: Ontario<br /> - QC: Quebec<br /> - SK: Saskatchewan<br /> - PE: Prince Edward Island<br /> <br /> **GB**<br /> - E: East<br /> - EM: East Midlands<br /> - LDN: London<br /> - NE: North East<br /> - NW: North West<br /> - NI: Northern Ireland<br /> - SC: Scotland<br /> - SE: South East<br /> - SW: South West<br /> - WA: Wales<br /> - WM: West Midlands<br /> - YH: Yorkshire and the Humber<br /> <br /> **US**<br /> All 50 states and the District of Columbia are supported.  For the abbreviations, see: https://github.com/jasonong/List-of-US-States/blob/master/states.csv<br>|
|postal_code|query|string|false|Find groups in the given postal code.  Only a few countries support postal code searches (US, CA, AU, GB).  The country parameter must be passed when the postal_code parameter is set. <br /><br /> NOTE: The region and postal_code parameters cannot be used at the same time and if both are passed then the postal_code will take priority.<br>|
|page|query|integer|false|The page of groups to return.|
|per_page|query|integer|false|The number of groups to return per page (must be >= 1 and <= 100).|

> Example responses

> 200 Response

```json
{
  "end_index": 0,
  "groups": [
    {
      "country": {
        "abbreviation": "CA",
        "name": "Canada"
      },
      "group_id": 46,
      "has_questions": true,
      "homepage": "https://trashnothing.com/OttawaReuse",
      "identifier": "OttawaReuse",
      "latitude": 45.423494,
      "longitude": -75.697933,
      "member_count": 4838,
      "membership": {
        "date": "2015-01-22T17:05:50",
        "questionnaire": {
          "message": "This group is only for people who live in Ottawa.",
          "questions": [
            "Where do you live?"
          ]
        },
        "status": "pending-questions"
      },
      "name": "Ottawa Reuse",
      "open_archives": false,
      "open_membership": false,
      "region": {
        "abbreviation": "ON",
        "name": "Ontario"
      },
      "timezone": "America/Toronto"
    }
  ],
  "num_groups": 0,
  "num_pages": 0,
  "page": 0,
  "per_page": 0,
  "start_index": 0
}
```

<h3 id="search-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The groups and paging data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="search-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_index|integer|false|none|The index of the last group being returned (an integer between start_index and num_groups).|
|groups|[[Group](#schemagroup)]|false|none|none|
|num_groups|integer|false|none|The total number of groups available.|
|num_pages|integer|false|none|The total number of pages available.|
|page|integer|false|none|The page number of the groups being returned.|
|per_page|integer|false|none|The number of groups being returned per page.|
|start_index|integer|false|none|The index of the first group being returned (an integer between 1 and num_groups).|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Retrieve multiple groups

<a id="opIdget_groups_by_ids"></a>

> Code samples

```bash
curl 'https://example.com/groups/multiple?group_ids=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/multiple`

<h3 id="retrieve-multiple-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_ids|query|string|true|The IDs of the groups to retrieve.  If more than 20 group IDs are passed, only the first 20 groups will be returned.|

> Example responses

> 200 Response

```json
[
  {
    "country": {
      "abbreviation": "CA",
      "name": "Canada"
    },
    "group_id": 46,
    "has_questions": true,
    "homepage": "https://trashnothing.com/OttawaReuse",
    "identifier": "OttawaReuse",
    "latitude": 45.423494,
    "longitude": -75.697933,
    "member_count": 4838,
    "membership": {
      "date": "2015-01-22T17:05:50",
      "questionnaire": {
        "message": "This group is only for people who live in Ottawa.",
        "questions": [
          "Where do you live?"
        ]
      },
      "status": "pending-questions"
    },
    "name": "Ottawa Reuse",
    "open_archives": false,
    "open_membership": false,
    "region": {
      "abbreviation": "ON",
      "name": "Ontario"
    },
    "timezone": "America/Toronto"
  }
]
```

<h3 id="retrieve-multiple-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The groups.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="retrieve-multiple-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Group](#schemagroup)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Join groups

<a id="opIdjoin_groups"></a>

> Code samples

```bash
curl https://example.com/groups/subscribe \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'group_ids=string'
```

`POST /groups/subscribe`

Request membership to one or more groups. <br /><br /> NOTE: Any group with a has_questions field set to true will also require answers to the groups' new member questionnaire to be submitted.  Groups waiting for answers will have their membership field set to 'pending-questions'.  And the questionnaire that needs to be answered can be found in the membership.questionnaire field of the group after a subscribe request is made to that group.


> Body parameter

```yaml
group_ids: string
```

<h3 id="join-groups-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» group_ids|body|string|true|A comma separated list of the IDs of the groups to join.|

> Example responses

> 200 Response

```json
{
  "groups": [
    {
      "country": {
        "abbreviation": "CA",
        "name": "Canada"
      },
      "group_id": 46,
      "has_questions": true,
      "homepage": "https://trashnothing.com/OttawaReuse",
      "identifier": "OttawaReuse",
      "latitude": 45.423494,
      "longitude": -75.697933,
      "member_count": 4838,
      "membership": {
        "date": "2015-01-22T17:05:50",
        "questionnaire": {
          "message": "This group is only for people who live in Ottawa.",
          "questions": [
            "Where do you live?"
          ]
        },
        "status": "pending-questions"
      },
      "name": "Ottawa Reuse",
      "open_archives": false,
      "open_membership": false,
      "region": {
        "abbreviation": "ON",
        "name": "Ontario"
      },
      "timezone": "America/Toronto"
    }
  ],
  "over_group_limit": true
}
```

<h3 id="join-groups-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The groups with updated membership data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|
|404|Not Found|Group not found.|None|

<h3 id="join-groups-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|groups|[[Group](#schemagroup)]|false|none|Updated data about the groups and the current users' membership to each group.|
|over_group_limit|boolean|false|none|When this is true, it means that some of the membership requests weren't processed in order to keep the user from going over the 12 group limit (the membership field of the groups can be used to determine which requests were processed).<br>|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Retrieve a group

<a id="opIdget_group"></a>

> Code samples

```bash
curl https://example.com/groups/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /groups/{group_id}`

<h3 id="retrieve-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string|true|The ID of the group to retrieve.|

> Example responses

> 200 Response

```json
{
  "country": {
    "abbreviation": "CA",
    "name": "Canada"
  },
  "group_id": 46,
  "has_questions": true,
  "homepage": "https://trashnothing.com/OttawaReuse",
  "identifier": "OttawaReuse",
  "latitude": 45.423494,
  "longitude": -75.697933,
  "member_count": 4838,
  "membership": {
    "date": "2015-01-22T17:05:50",
    "questionnaire": {
      "message": "This group is only for people who live in Ottawa.",
      "questions": [
        "Where do you live?"
      ]
    },
    "status": "pending-questions"
  },
  "name": "Ottawa Reuse",
  "open_archives": false,
  "open_membership": false,
  "region": {
    "abbreviation": "ON",
    "name": "Ontario"
  },
  "timezone": "America/Toronto"
}
```

<h3 id="retrieve-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The group.|[Group](#schemagroup)|
|404|Not Found|Group not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Submit group answers

<a id="opIdsubmit_answers"></a>

> Code samples

```bash
curl https://example.com/groups/string/answers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "property1": "string",
    "property2": "string"
  }'
```

`POST /groups/{group_id}/answers`

Submits answers to a groups' membership questionnaire. <br /><br /> The request body should be a JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.


> Body parameter

```json
{
  "property1": "string",
  "property2": "string"
}
```

<h3 id="submit-group-answers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string|true|The group ID of the group that the user is submitting answers for.|
|body|body|object|true|A JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.<br>|
|» **additionalProperties**|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "country": {
    "abbreviation": "CA",
    "name": "Canada"
  },
  "group_id": 46,
  "has_questions": true,
  "homepage": "https://trashnothing.com/OttawaReuse",
  "identifier": "OttawaReuse",
  "latitude": 45.423494,
  "longitude": -75.697933,
  "member_count": 4838,
  "membership": {
    "date": "2015-01-22T17:05:50",
    "questionnaire": {
      "message": "This group is only for people who live in Ottawa.",
      "questions": [
        "Where do you live?"
      ]
    },
    "status": "pending-questions"
  },
  "name": "Ottawa Reuse",
  "open_archives": false,
  "open_membership": false,
  "region": {
    "abbreviation": "ON",
    "name": "Ontario"
  },
  "timezone": "America/Toronto"
}
```

<h3 id="submit-group-answers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated group.|[Group](#schemagroup)|
|400|Bad Request|Missing or invalid answers or questions were already answered or questions don't need to be answered.|None|
|404|Not Found|Group not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Contact group moderators

<a id="opIdcontact_moderators"></a>

> Code samples

```bash
curl https://example.com/groups/string/contact \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'message=string' \
  -F 'subject=string'
```

`POST /groups/{group_id}/contact`

> Body parameter

```yaml
message: string
subject: string
```

<h3 id="contact-group-moderators-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string|true|The group ID of the group whose moderators will be contacted.|
|body|body|object|true|none|
|» message|body|string|true|The body of the message.|
|» subject|body|string|true|The subject of the message.|

<h3 id="contact-group-moderators-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Message was sent to moderators.|None|
|400|Bad Request|Missing or invalid parameters.|None|
|404|Not Found|Group not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Leave a group

<a id="opIdleave_group"></a>

> Code samples

```bash
curl https://example.com/groups/string/unsubscribe \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /groups/{group_id}/unsubscribe`

<h3 id="leave-a-group-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|group_id|path|string|true|The ID of the group to leave.|

> Example responses

> 200 Response

```json
{
  "country": {
    "abbreviation": "CA",
    "name": "Canada"
  },
  "group_id": 46,
  "has_questions": true,
  "homepage": "https://trashnothing.com/OttawaReuse",
  "identifier": "OttawaReuse",
  "latitude": 45.423494,
  "longitude": -75.697933,
  "member_count": 4838,
  "membership": {
    "date": "2015-01-22T17:05:50",
    "questionnaire": {
      "message": "This group is only for people who live in Ottawa.",
      "questions": [
        "Where do you live?"
      ]
    },
    "status": "pending-questions"
  },
  "name": "Ottawa Reuse",
  "open_archives": false,
  "open_membership": false,
  "region": {
    "abbreviation": "ON",
    "name": "Ontario"
  },
  "timezone": "America/Toronto"
}
```

<h3 id="leave-a-group-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated data about the group and the current users' membership.|[Group](#schemagroup)|
|400|Bad Request|The current user is not an active or pending member of the given group.|None|
|404|Not Found|Group not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

<h1 id="trash-nothing-photos">photos</h1>

Upload, delete and rotate photos.

## Create a photo

<a id="opIdupload_photo"></a>

> Code samples

```bash
curl https://example.com/photos \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'device_pixel_ratio=1' \
  -F 'photo=@/path/to/file'
```

`POST /photos`

> Body parameter

```yaml
device_pixel_ratio: 1
photo: string
```

<h3 id="create-a-photo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» device_pixel_ratio|body|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|» photo|body|string(binary)|true|Photo to upload.|

> Example responses

> 200 Response

```json
{
  "photo_id": "987-423",
  "thumbnail": {
    "height": 120,
    "url": "https://trashnothing.com/img/2018-02-02/307731-20180119_155358.90x120.jpg",
    "width": 90
  }
}
```

<h3 id="create-a-photo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Photo created.|[PhotoResult](#schemaphotoresult)|
|400|Bad Request|Invalid photo.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Retrieve multiple photos

<a id="opIdget_photos_by_ids"></a>

> Code samples

```bash
curl 'https://example.com/photos/multiple?photo_ids=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /photos/multiple`

<h3 id="retrieve-multiple-photos-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|photo_ids|query|string|true|The IDs of the photos to retrieve.  If more than 50 photo IDs are passed, only the first 50 photos will be returned.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
[
  {
    "photo_id": "987-423",
    "thumbnail": {
      "height": 120,
      "url": "https://trashnothing.com/img/2018-02-02/307731-20180119_155358.90x120.jpg",
      "width": 90
    }
  }
]
```

<h3 id="retrieve-multiple-photos-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The photos.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="retrieve-multiple-photos-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[PhotoResult](#schemaphotoresult)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Delete a photo

<a id="opIddelete_photo"></a>

> Code samples

```bash
curl https://example.com/photos/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /photos/{photo_id}`

<h3 id="delete-a-photo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|photo_id|path|string|true|none|

<h3 id="delete-a-photo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Photo deleted.|None|
|400|Bad Request|Invalid photo.|None|
|403|Forbidden|The user doesn't have permission to delete the photo.|None|
|404|Not Found|Photo not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Rotate a photo

<a id="opIdrotate_photo"></a>

> Code samples

```bash
curl 'https://example.com/photos/string/rotate?degrees=0' \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /photos/{photo_id}/rotate`

<h3 id="rotate-a-photo-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|photo_id|path|string|true|none|
|degrees|query|integer|true|Rotation in degrees - currently only 90, 180 and 270 are supported which correspond to rotate left, rotate upside down and rotate right.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
{
  "photo_id": "987-423",
  "thumbnail": {
    "height": 120,
    "url": "https://trashnothing.com/img/2018-02-02/307731-20180119_155358.90x120.jpg",
    "width": 90
  }
}
```

<h3 id="rotate-a-photo-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Photo rotated.|[PhotoResult](#schemaphotoresult)|
|400|Bad Request|Invalid photo.|None|
|403|Forbidden|The user doesn't have permission to rotate the photo.|None|
|404|Not Found|Photo not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

<h1 id="trash-nothing-messages">messages</h1>

Manage conversations and messages with other users. <br /><br /> It's important to note that messages are always sent by email to the users.   So it's possible to create a fully functional app using the trash nothing API without using any of the conversations or messages API endpoints.  These API endpoints are useful for developers who want to build a complete messaging interface into their app.


## List conversations

<a id="opIdget_conversations"></a>

> Code samples

```bash
curl https://example.com/conversations \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations`

<h3 id="list-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|category|query|string|false|Used to filter messases by category.  Must be set to one of the following three categories: inbox, archived, blocked<br>|
|page|query|integer|false|The page of conversations to return.|
|per_page|query|integer|false|The number of conversations to return per page (must be >= 1 and <= 30).|
|num_messages|query|integer|false|The number of recent messages to return with each conversation. Additional messages can be retrieved using get conversation messages endpoint.<br>|
|include_num_unread|query|integer|false|If set to 1, the num_unread field in the response will be set to the count of the total number of conversations that have unread messages. <br /><br /> This is useful for showing users the total number of unread messages that they have in their inbox. Calculating the count will slow the request down a bit so setting this should be avoided for requests where it's not needed (eg. requesting archived or blocked conversations or requests that are just paging through older conversations).<br>|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
{
  "conversations": [
    {
      "archived": false,
      "blocked": false,
      "conversation_id": 38914,
      "last_message_date": "2019-07-24T22:51:09",
      "messages": [
        {
          "content": "Here are some photos and the directions for pick up.",
          "date": "2019-07-24T22:29:10",
          "email_attachments": [
            "Directions and map.pdf"
          ],
          "from_user_id": 2946512,
          "message_id": 10199633,
          "photos": [
            {
              "images": [
                {
                  "height": 120,
                  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
                  "width": 90
                },
                {
                  "height": 240,
                  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
                  "width": 180
                },
                {
                  "height": 360,
                  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
                  "width": 270
                },
                {
                  "height": 500,
                  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
                  "width": 375
                }
              ],
              "photo_id": "695624-768616",
              "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
            }
          ],
          "subject": "Dining Table and 4 Chairs",
          "to_user_id": 119458
        }
      ],
      "num_unread_messages": 1,
      "user": {
        "about_me": "Just an old fisherman looking to reuse more.",
        "country": "GB",
        "firstname": null,
        "lastname": null,
        "member_since": "2017-01-27T06:35:55",
        "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
        "user_id": 2946512,
        "username": "fred gibson"
      }
    }
  ],
  "num_unread": 0,
  "page": 0,
  "per_page": 0
}
```

<h3 id="list-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversations and paging data.|Inline|
|400|Bad Request|Invalid parameters.|None|

<h3 id="list-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversations|[[Conversation](#schemaconversation)]|false|none|none|
|num_unread|integer|false|none|If the include_num_unread parameter is set to 1, this will be set to the total number of conversations that have unread messages matching the query parameters of the request.  If the include_num_unread parameter is set to 0, this will be null.<br>|
|page|integer|false|none|none|
|per_page|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Archive all conversations

<a id="opIdarchive_all_conversations"></a>

> Code samples

```bash
curl https://example.com/conversations/archive-all \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'message_id=string'
```

`PUT /conversations/archive-all`

> Body parameter

```yaml
message_id: string
```

<h3 id="archive-all-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» message_id|body|string|true|The message_id of the most recent message from the conversations that the client has downloaded.|

<h3 id="archive-all-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversations archived.|None|
|400|Bad Request|Invalid message_id.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Mark all conversations as read

<a id="opIdmark_all_conversations_read"></a>

> Code samples

```bash
curl https://example.com/conversations/mark-all-read \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'message_id=string'
```

`PUT /conversations/mark-all-read`

> Body parameter

```yaml
message_id: string
```

<h3 id="mark-all-conversations-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» message_id|body|string|true|The message_id of the most recent message from the conversations that the client has downloaded.|

<h3 id="mark-all-conversations-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversations marked as read.|None|
|400|Bad Request|Invalid message_id.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Search conversations

<a id="opIdsearch_conversations"></a>

> Code samples

```bash
curl 'https://example.com/conversations/search?search=string' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/search`

Searches all conversations except blocked conversations.

<h3 id="search-conversations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|search|query|string|true|The search query used to find conversations and messages.|
|page|query|integer|false|The page of conversations to return.|
|per_page|query|integer|false|The number of conversations to return per page (must be >= 1 and <= 30).|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
{
  "conversations": [
    {
      "archived": false,
      "blocked": false,
      "conversation_id": 38914,
      "last_message_date": "2019-07-24T22:51:09",
      "messages": [
        {
          "content": "Here are some photos and the directions for pick up.",
          "date": "2019-07-24T22:29:10",
          "email_attachments": [
            "Directions and map.pdf"
          ],
          "from_user_id": 2946512,
          "message_id": 10199633,
          "photos": [
            {
              "images": [
                {
                  "height": 120,
                  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
                  "width": 90
                },
                {
                  "height": 240,
                  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
                  "width": 180
                },
                {
                  "height": 360,
                  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
                  "width": 270
                },
                {
                  "height": 500,
                  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
                  "width": 375
                }
              ],
              "photo_id": "695624-768616",
              "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
            }
          ],
          "subject": "Dining Table and 4 Chairs",
          "to_user_id": 119458
        }
      ],
      "num_unread_messages": 1,
      "user": {
        "about_me": "Just an old fisherman looking to reuse more.",
        "country": "GB",
        "firstname": null,
        "lastname": null,
        "member_since": "2017-01-27T06:35:55",
        "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
        "user_id": 2946512,
        "username": "fred gibson"
      }
    }
  ],
  "page": 0,
  "per_page": 0,
  "search": "string"
}
```

<h3 id="search-conversations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The conversations and paging data.|Inline|
|400|Bad Request|Invalid parameters.|None|

<h3 id="search-conversations-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversations|[[Conversation](#schemaconversation)]|false|none|none|
|page|integer|false|none|none|
|per_page|integer|false|none|none|
|search|string|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Delete conversation

<a id="opIddelete_conversation"></a>

> Code samples

```bash
curl 'https://example.com/conversations/string?message_id=string' \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /conversations/{conversation_id}`

<h3 id="delete-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to delete.|
|message_id|query|string|true|The ID of the newest message in the conversation that the client has downloaded.|

<h3 id="delete-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation deleted.|None|
|400|Bad Request|Invalid parameters.|None|
|403|Forbidden|The user doesn't have permission to modify this conversation.|None|
|404|Not Found|Conversation or message not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Archive conversation

<a id="opIdarchive_conversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/archive \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /conversations/{conversation_id}/archive`

<h3 id="archive-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to archive.|

<h3 id="archive-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation archived.|None|
|403|Forbidden|The user doesn't have permission to modify this conversation.|None|
|404|Not Found|Conversation not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Block conversation

<a id="opIdblock_conversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/block \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /conversations/{conversation_id}/block`

<h3 id="block-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to block.|

<h3 id="block-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation blocked.|None|
|400|Bad Request|Conversations with moderators cannot be blocked.|None|
|403|Forbidden|The user doesn't have permission to modify this conversation.|None|
|404|Not Found|Conversation not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Mark conversation as read

<a id="opIdmark_conversation_read"></a>

> Code samples

```bash
curl https://example.com/conversations/string/mark-read \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'message_id=string'
```

`PUT /conversations/{conversation_id}/mark-read`

> Body parameter

```yaml
message_id: string
```

<h3 id="mark-conversation-as-read-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to mark as read.|
|body|body|object|true|none|
|» message_id|body|string|true|The ID of the newest message in the conversation that the current user has read.|

<h3 id="mark-conversation-as-read-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation marked as read.|None|
|400|Bad Request|Invalid parameters.|None|
|403|Forbidden|The user doesn't have permission to modify this conversation.|None|
|404|Not Found|Conversation or message not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## List conversation messages

<a id="opIdget_conversation_messages"></a>

> Code samples

```bash
curl https://example.com/conversations/string/messages \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /conversations/{conversation_id}/messages`

<h3 id="list-conversation-messages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to return messages from.|
|page|query|integer|false|The page of messages to return.|
|per_page|query|integer|false|The number of messages to return per page (must be >= 1 and <= 30).|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|include_conversation|query|integer|false|If set to 1, the conversation will be returned along with the messages.|

> Example responses

> 200 Response

```json
{
  "conversation": {
    "archived": false,
    "blocked": false,
    "conversation_id": 38914,
    "last_message_date": "2019-07-24T22:51:09",
    "messages": [
      {
        "content": "Here are some photos and the directions for pick up.",
        "date": "2019-07-24T22:29:10",
        "email_attachments": [
          "Directions and map.pdf"
        ],
        "from_user_id": 2946512,
        "message_id": 10199633,
        "photos": [
          {
            "images": [
              {
                "height": 120,
                "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
                "width": 90
              },
              {
                "height": 240,
                "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
                "width": 180
              },
              {
                "height": 360,
                "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
                "width": 270
              },
              {
                "height": 500,
                "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
                "width": 375
              }
            ],
            "photo_id": "695624-768616",
            "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
            "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
          }
        ],
        "subject": "Dining Table and 4 Chairs",
        "to_user_id": 119458
      }
    ],
    "num_unread_messages": 1,
    "user": {
      "about_me": "Just an old fisherman looking to reuse more.",
      "country": "GB",
      "firstname": null,
      "lastname": null,
      "member_since": "2017-01-27T06:35:55",
      "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
      "user_id": 2946512,
      "username": "fred gibson"
    }
  },
  "messages": [
    {
      "content": "Here are some photos and the directions for pick up.",
      "date": "2019-07-24T22:29:10",
      "email_attachments": [
        "Directions and map.pdf"
      ],
      "from_user_id": 2946512,
      "message_id": 10199633,
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "post": null,
      "subject": "Dining Table and 4 Chairs",
      "to_user_id": 119458
    }
  ],
  "page": 0,
  "per_page": 0
}
```

<h3 id="list-conversation-messages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The messages and page data.  The conversation data is optional and is only returned if the include_conversation parameter is set.<br>|Inline|
|400|Bad Request|Invalid parameters.|None|
|403|Forbidden|The user doesn't have permission to access the conversation.|None|
|404|Not Found|Conversation not found.|None|

<h3 id="list-conversation-messages-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|conversation|[Conversation](#schemaconversation)|false|none|A conversation between the current user and another user.|
|messages|[[Message](#schemamessage)]|false|none|none|
|page|integer|false|none|none|
|per_page|integer|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Reply to conversation

<a id="opIdreply_to_conversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/reply \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'content=string' \
  -F 'device_pixel_ratio=1' \
  -F 'photo_ids=string'
```

`POST /conversations/{conversation_id}/reply`

> Body parameter

```yaml
content: string
device_pixel_ratio: 1
photo_ids: string
```

<h3 id="reply-to-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to reply to.|
|body|body|object|true|none|
|» content|body|string|true|The content of the reply.|
|» device_pixel_ratio|body|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|» photo_ids|body|string|false|A comma separated list of the IDs of the photos that should be attached to this message.|

> Example responses

> 200 Response

```json
{
  "content": "Here are some photos and the directions for pick up.",
  "date": "2019-07-24T22:29:10",
  "email_attachments": [
    "Directions and map.pdf"
  ],
  "from_user_id": 2946512,
  "message_id": 10199633,
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "post": null,
  "subject": "Dining Table and 4 Chairs",
  "to_user_id": 119458
}
```

<h3 id="reply-to-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new message sent to the conversation.|[Message](#schemamessage)|
|400|Bad Request|Invalid parameters or duplicate reply or conversation is blocked.|None|
|403|Forbidden|The user doesn't have permission to reply to the conversation.|None|
|404|Not Found|Conversation not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Report conversation

<a id="opIdreport_conversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/report \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'reason=string'
```

`POST /conversations/{conversation_id}/report`

> Body parameter

```yaml
reason: string
```

<h3 id="report-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to report.|
|body|body|object|true|none|
|» reason|body|string|true|A user provided reason why the conversation is being reported.|

<h3 id="report-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation reported.|None|
|400|Bad Request|Empty reason parameter.|None|
|403|Forbidden|The user doesn't have permission to report the conversation.|None|
|404|Not Found|Conversation not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Unarchive conversation

<a id="opIdunarchive_conversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/unarchive \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /conversations/{conversation_id}/unarchive`

<h3 id="unarchive-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to unarchive.|

<h3 id="unarchive-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation unarchived.|None|
|403|Forbidden|The user doesn't have permission to modify this conversation.|None|
|404|Not Found|Conversation not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Unblock conversation

<a id="opIdunblock_conversation"></a>

> Code samples

```bash
curl https://example.com/conversations/string/unblock \
  -X PUT \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /conversations/{conversation_id}/unblock`

<h3 id="unblock-conversation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|conversation_id|path|string|true|The ID of the conversation to unblock.|

<h3 id="unblock-conversation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Conversation unblocked.|None|
|403|Forbidden|The user doesn't have permission to modify this conversation.|None|
|404|Not Found|Conversation not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

<h1 id="trash-nothing-stories">stories</h1>

Retrieve and submit stories.

## List stories

<a id="opIdget_stories"></a>

> Code samples

```bash
curl https://example.com/stories \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stories`

<h3 id="list-stories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|integer|false|The page of stories to return.|
|per_page|query|integer|false|The number of stories to return per page (must be >= 1 and <= 50).|
|sort_by|query|string|false|How to sort the stories that are returned.  One of: date, distance, likes, views <br /><br /> Setting sort_by to date will sort posts from newest to oldest.  Setting sort_by to distance will sort posts from nearest to farthest.  Setting sort_by to likes will sort posts with the most likes first.  Setting sort_by to views will show the posts with the most views first.<br>|
|latitude|query|number|false|Find groups near the given latitude and longitude.|
|longitude|query|number|false|Find groups near the given latitude and longitude.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
{
  "stories": [
    {
      "content": "People helping people - it doesn't get better than this!",
      "date": "2020-04-25T10:26:32",
      "like_count": 3,
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "share_url": "https://trashnothing.com/story/7584",
      "story_id": 7584,
      "title": "Sharing is caring",
      "user": {
        "about_me": "Just an old fisherman looking to reuse more.",
        "country": "GB",
        "firstname": null,
        "lastname": null,
        "member_since": "2017-01-27T06:35:55",
        "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
        "user_id": 2946512,
        "username": "fred gibson"
      }
    }
  ]
}
```

<h3 id="list-stories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The stories and paging data.|Inline|
|400|Bad Request|Missing or invalid parameters.|None|

<h3 id="list-stories-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|stories|[[Story](#schemastory)]|false|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Submit a story

<a id="opIdsubmit_story"></a>

> Code samples

```bash
curl https://example.com/stories \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'content=string' \
  -F 'device_pixel_ratio=1' \
  -F 'photo_ids=string' \
  -F 'sharing=string' \
  -F 'title=string'
```

`POST /stories`

> Body parameter

```yaml
content: string
device_pixel_ratio: 1
photo_ids: string
sharing: string
title: string
```

<h3 id="submit-a-story-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» content|body|string|true|The content of the story.|
|» device_pixel_ratio|body|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|
|» photo_ids|body|string|false|A comma separated list of the IDs of the photos that should be attached to this story.|
|» sharing|body|string|true|Must be set to one of the following two options: public, members <br /><br /> When sharing is set to public, anyone will be able to view the story. When sharing is set to members, only other members will be able to view the story.<br>|
|» title|body|string|true|The title of the story.|

> Example responses

> 200 Response

```json
{
  "content": "People helping people - it doesn't get better than this!",
  "date": "2020-04-25T10:26:32",
  "like_count": 3,
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "share_url": "https://trashnothing.com/story/7584",
  "story_id": 7584,
  "title": "Sharing is caring",
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "user_id": 2946512,
    "username": "fred gibson"
  }
}
```

<h3 id="submit-a-story-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The new story.|[Story](#schemastory)|
|400|Bad Request|Missing or invalid parameters.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Retrieve a story

<a id="opIdget_story"></a>

> Code samples

```bash
curl https://example.com/stories/string \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /stories/{story_id}`

<h3 id="retrieve-a-story-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|story_id|path|string|true|The ID of the story to retrieve.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
{
  "content": "People helping people - it doesn't get better than this!",
  "date": "2020-04-25T10:26:32",
  "like_count": 3,
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "share_url": "https://trashnothing.com/story/7584",
  "story_id": 7584,
  "title": "Sharing is caring",
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "user_id": 2946512,
    "username": "fred gibson"
  }
}
```

<h3 id="retrieve-a-story-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The story.|[Story](#schemastory)|
|403|Forbidden|Story is only visible to members.|None|
|404|Not Found|Story not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

## Like a story

<a id="opIdlike_story"></a>

> Code samples

```bash
curl https://example.com/stories/string/like \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /stories/{story_id}/like`

<h3 id="like-a-story-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|story_id|path|string|true|The ID of the story to like.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
{
  "content": "People helping people - it doesn't get better than this!",
  "date": "2020-04-25T10:26:32",
  "like_count": 3,
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "share_url": "https://trashnothing.com/story/7584",
  "story_id": 7584,
  "title": "Sharing is caring",
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "user_id": 2946512,
    "username": "fred gibson"
  }
}
```

<h3 id="like-a-story-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated story.|[Story](#schemastory)|
|404|Not Found|Story not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Unlike a story

<a id="opIdunlike_story"></a>

> Code samples

```bash
curl https://example.com/stories/string/unlike \
  -X PUT \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`PUT /stories/{story_id}/unlike`

<h3 id="unlike-a-story-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|story_id|path|string|true|The ID of the story to unlike.|
|device_pixel_ratio|query|number|false|Client device pixel ratio used to determine thumbnail size (default 1.0).|

> Example responses

> 200 Response

```json
{
  "content": "People helping people - it doesn't get better than this!",
  "date": "2020-04-25T10:26:32",
  "like_count": 3,
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "share_url": "https://trashnothing.com/story/7584",
  "story_id": 7584,
  "title": "Sharing is caring",
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "user_id": 2946512,
    "username": "fred gibson"
  }
}
```

<h3 id="unlike-a-story-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The updated story.|[Story](#schemastory)|
|404|Not Found|Story not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

## Record story viewed

<a id="opIdviewed_story"></a>

> Code samples

```bash
curl https://example.com/stories/string/viewed \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /stories/{story_id}/viewed`

Records every time a user views the full story (and not just a preview or snippet),

<h3 id="record-story-viewed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|story_id|path|string|true|The ID of the story viewed.|

<h3 id="record-story-viewed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Story view was recorded.|None|
|404|Not Found|Story not found.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic ), api_key
</aside>

<h1 id="trash-nothing-misc">misc</h1>

Miscellaneous functionality.

## Send feedback

<a id="opIdsend_feedback"></a>

> Code samples

```bash
curl https://example.com/feedback \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -F 'message=string' \
  -F 'meta=string' \
  -F 'subject=string'
```

`POST /feedback`

Allows users to send feedback about the trashnothing.com site or apps.

> Body parameter

```yaml
message: string
meta: string
subject: string
```

<h3 id="send-feedback-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» message|body|string|true|The message.|
|» meta|body|string|false|Extra information set by the client that may be useful to contextualize the feedback (eg. operating system details, browser details, app details, device details).<br>|
|» subject|body|string|true|The subject.|

<h3 id="send-feedback-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The feedback has been sent.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2_implicit ( Scopes: basic ), oauth2_code ( Scopes: basic )
</aside>

# Schemas

<h2 id="tocS_Alert">Alert</h2>
<!-- backwards compatibility -->
<a id="schemaalert"></a>
<a id="schema_Alert"></a>
<a id="tocSalert"></a>
<a id="tocsalert"></a>

```json
{
  "alert_id": 7584,
  "last_sent": "2018-02-16T12:58:51",
  "search": "table",
  "send_count": 3,
  "types": [
    "offer"
  ],
  "user_id": 9191
}
```

A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alert_id|string|false|none|none|
|last_sent|string(date-time)|false|none|The UTC date and time when the alert was last triggered and sent out (may be null).|
|search|string|false|none|The search phrase that the alert triggers on.|
|send_count|integer|false|none|The number of time the alert has triggered and been send out.|
|types|[string]|false|none|A list of the post types that the alert is set to match against.  The available post types are: offer, wanted <br /><br /> NOTE: Additional post types may be added in the future (eg. events) so clients should take care to support arbitrary types being returned.<br>|
|user_id|string|false|none|none|

<h2 id="tocS_BoundingBox">BoundingBox</h2>
<!-- backwards compatibility -->
<a id="schemaboundingbox"></a>
<a id="schema_BoundingBox"></a>
<a id="tocSboundingbox"></a>
<a id="tocsboundingbox"></a>

```json
{
  "northeast": {
    "latitude": 52.8293255665,
    "longitude": -0.600956182
  },
  "southwest": {
    "latitude": 51.0025285305,
    "longitude": -3.5323240284
  }
}
```

A geographic bounding box defined by its southwest and northeast points.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|northeast|object|false|none|The point defining the northeast corner of the bounding box.|
|southwest|object|false|none|The point defining the southwest corner of the bounding box.|

<h2 id="tocS_Conversation">Conversation</h2>
<!-- backwards compatibility -->
<a id="schemaconversation"></a>
<a id="schema_Conversation"></a>
<a id="tocSconversation"></a>
<a id="tocsconversation"></a>

```json
{
  "archived": false,
  "blocked": false,
  "conversation_id": 38914,
  "last_message_date": "2019-07-24T22:51:09",
  "messages": [
    {
      "content": "Here are some photos and the directions for pick up.",
      "date": "2019-07-24T22:29:10",
      "email_attachments": [
        "Directions and map.pdf"
      ],
      "from_user_id": 2946512,
      "message_id": 10199633,
      "photos": [
        {
          "images": [
            {
              "height": 120,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
              "width": 90
            },
            {
              "height": 240,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
              "width": 180
            },
            {
              "height": 360,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
              "width": 270
            },
            {
              "height": 500,
              "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
              "width": 375
            }
          ],
          "photo_id": "695624-768616",
          "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
        }
      ],
      "subject": "Dining Table and 4 Chairs",
      "to_user_id": 119458
    }
  ],
  "num_unread_messages": 1,
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "user_id": 2946512,
    "username": "fred gibson"
  }
}
```

A conversation between the current user and another user.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archived|boolean|false|none|Whether or not this conversation is archived.|
|blocked|boolean|false|none|Whether or not this conversation is blocked.|
|conversation_id|string|false|none|none|
|last_message_date|string(date-time)|false|none|The UTC date and time of the last message in this conversation.|
|messages|[[Message](#schemamessage)]|false|none|The latest messages in this conversation.|
|num_unread_messages|integer|false|none|The count of how many unread messages this conversation has.|
|user|[User](#schemauser)|false|none|none|

<h2 id="tocS_CurrentUser">CurrentUser</h2>
<!-- backwards compatibility -->
<a id="schemacurrentuser"></a>
<a id="schema_CurrentUser"></a>
<a id="tocScurrentuser"></a>
<a id="tocscurrentuser"></a>

```json
{
  "about_me": "I used to be an accountant but then I decided to become a pirate.",
  "country": "US",
  "digest_photos": false,
  "email": {
    "address": "johndoe@example.com",
    "bouncing": false,
    "spam_stop": false,
    "verified": true
  },
  "email_message_delay": "immediate",
  "email_post_reminders": true,
  "email_posts_frequency": "6_hours",
  "email_search_alerts": true,
  "firstname": "Jack",
  "has_password": false,
  "last_listings_view": "2018-02-15T15:04:47",
  "lastname": "Carter",
  "location": {
    "latitude": 39.766098,
    "longitude": -105.077206,
    "name": "Wheat Ridge, CO, USA",
    "radius'": 32186.88
  },
  "member_since": "2009-09-25T14:20:01",
  "profile_image": "https://gravatar.com/avatar/88305a95b05b30f6cd306019ea5d88f3?s=90&r=pg&default=identicon",
  "profile_image_source": "gravatar",
  "public_name": false,
  "public_post_sources": [
    "trashnothing"
  ],
  "show_all_group_posts": true,
  "signup": "2017-11-20T04:32:06",
  "special_notices": true,
  "user_id": 119458,
  "username": "captainjack",
  "uses_fair_offer_policy": true,
  "verified": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about_me|string|false|none|A short bio a user has written about themselves to help other members get to know them better. May be null if the user has not written anything about themselves.<br>|
|country|string|false|none|A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.<br>|
|feedback|object|false|none|none|
|firstname|string|false|none|The first name of the user (may be null).|
|lastname|string|false|none|The last name of the user (may be null).|
|member_since|string|false|none|The date and time when the user first became publicly active on a group (the date may be older than when the user signed up).|
|profile_image|string|false|none|A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.<br>|
|reply_time|integer|false|none|An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.<br>|
|user_id|string|false|none|none|
|username|string|false|none|A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.<br>|
|digest_photos|boolean|false|none|Whether or not photos are included in the digest emails sent to the user.|
|email|object|false|none|Data related to the users' email address.|
|email_message_delay|string|false|none|How quickly new messages from other users are emailed to this user. One of: immediate, 30_minutes, 1_hour, 2_hours, 4_hours, 6_hours, 8_hours <br /> If set to anything other than immediate, the user will receive a digest email summarizing all of the new messages that they haven't viewed.<br>|
|email_post_reminders|boolean|false|none|Whether or not post reminder emails are enabled for this user (to remind them to update or repost their posts).|
|email_posts_frequency|string|false|none|How often new post email notifications are sent to the user. One of: weekly, twice_weekly, daily, 12_hours, 8_hours, 6_hours, 4_hours, 2_hours, hourly <br /><br /> Will be null if new post email notifications are turned off.<br>|
|email_search_alerts|boolean|false|none|Whether or not search alert emails are enabled for this user.|
|has_password|boolean|false|none|Whether or not the user has a password (accounts created using 3rd party providers like Facebook don't have passwords set). <br /><br /> When has_password is false, the only way to set a password on the users' account is to send the user a password reset email.<br>|
|last_listings_view|string(date-time)|false|none|The UTC date and time when the user last viewed the newest posts on the All Posts page (may be null). <br /><br /> NOTE: For this to be accurate, clients must update the last_listings_view property of the current user every time the user is shown the newest posts on the All Posts page.<br>|
|location|object|false|none|The users' location.  The location is used to determine which posts are shown to the user (may be null).|
|profile_image_source|string|false|none|The source of the users' profile image. One of: gravatar, facebook, google, freegle, custom<br>|
|public_name|boolean|false|none|Whether or not the user has chosen to make their first and last name public.|
|public_post_sources|[string]|false|none|A list of the public post sources the user is interested in seeing posts from (currently only 'trashnothing' is supported). If the array is empty, no sources are enabled and the user will only see posts from the groups they are a member of. <br /><br /> NOTE: Additional sources may be added in the future so clients should take care to support arbitrary sources being returned.<br>|
|show_all_group_posts|boolean|false|none|If true, all group posts from the users' groups are shown to them on the main posts page and in the digests. <br /><br /> If false, only group posts in the area defined by the users' location are shown.<br>|
|signup|string(date-time)|false|none|The UTC date and time when the user signed up.|
|special_notices|boolean|false|none|Whether or not the user wants to receive special notice emails from the groups they are a member of. Special notices are admin posts that the group moderators choose to send out by email.<br>|
|uses_fair_offer_policy|boolean|false|none|Whether or not the user used the Fair Offer Policy (see https://trashnothing.com/fair_offer_policy ) the last time they posted.|
|verified|boolean|false|none|Whether or not the user has verified their account. The user account will be limited (eg. they will not be able to reply to posts) until their account is verified.<br>|

<h2 id="tocS_Feedback">Feedback</h2>
<!-- backwards compatibility -->
<a id="schemafeedback"></a>
<a id="schema_Feedback"></a>
<a id="tocSfeedback"></a>
<a id="tocsfeedback"></a>

```json
{
  "content": "Fred gave me a great antique table for my new apartment!",
  "date": "2020-03-01T12:01:22",
  "positive": true,
  "reviewer_user_id": 9191,
  "user_id": 2946512
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|A comment written by the reviewer about the user (may be null).|
|date|string(date-time)|false|none|Date when the feedback was submitted.|
|feedback_id|string|false|none|none|
|positive|boolean|false|none|Set to true for positive feedback and false for negative feedback.|
|reviewer_user_id|string|false|none|The user ID of the user that submitted the feedback.|
|user_id|string|false|none|The user ID of the user that the feedback is about.|

<h2 id="tocS_GeolocateBounds">GeolocateBounds</h2>
<!-- backwards compatibility -->
<a id="schemageolocatebounds"></a>
<a id="schema_GeolocateBounds"></a>
<a id="tocSgeolocatebounds"></a>
<a id="tocsgeolocatebounds"></a>

```json
{
  "default": {
    "northeast": {
      "latitude": 52.8293255665,
      "longitude": -0.600956182
    },
    "southwest": {
      "latitude": 51.0025285305,
      "longitude": -3.5323240284
    }
  },
  "limit": {
    "northeast": {
      "latitude": 52.8293255665,
      "longitude": -0.600956182
    },
    "southwest": {
      "latitude": 51.0025285305,
      "longitude": -3.5323240284
    }
  }
}
```

Two bounding boxes that make using Google Maps' geocoder easier. <br /><br /> The default bounding box defines the area in which the post is probably located.  This is useful for providing a bounds to Google Maps geocoder. <br /><br /> The limit bounding box is a larger bounding box that contains the default bounding box. This is useful for discarding Google Maps geocoding results that are outside of this bounding box.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|default|[BoundingBox](#schemaboundingbox)|false|none|A geographic bounding box defined by its southwest and northeast points.|
|limit|[BoundingBox](#schemaboundingbox)|false|none|A geographic bounding box defined by its southwest and northeast points.|

<h2 id="tocS_Group">Group</h2>
<!-- backwards compatibility -->
<a id="schemagroup"></a>
<a id="schema_Group"></a>
<a id="tocSgroup"></a>
<a id="tocsgroup"></a>

```json
{
  "country": {
    "abbreviation": "CA",
    "name": "Canada"
  },
  "group_id": 46,
  "has_questions": true,
  "homepage": "https://trashnothing.com/OttawaReuse",
  "identifier": "OttawaReuse",
  "latitude": 45.423494,
  "longitude": -75.697933,
  "member_count": 4838,
  "membership": {
    "date": "2015-01-22T17:05:50",
    "questionnaire": {
      "message": "This group is only for people who live in Ottawa.",
      "questions": [
        "Where do you live?"
      ]
    },
    "status": "pending-questions"
  },
  "name": "Ottawa Reuse",
  "open_archives": false,
  "open_membership": false,
  "region": {
    "abbreviation": "ON",
    "name": "Ontario"
  },
  "timezone": "America/Toronto"
}
```

Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|object|false|none|Provides information about the country that is associated with a group.  May be null.|
|group_id|string|false|none|none|
|has_questions|boolean|false|none|When true, anyone requesting membership to this group will be required to answer a new membership questionnaire.|
|homepage|string|false|none|A URL to the group homepage.|
|identifier|string|false|none|A unique identifier for the group that is used in URLs.|
|latitude|number|false|none|none|
|longitude|number|false|none|none|
|member_count|integer|false|none|The number of members who belong to the group.|
|membership|object|false|none|Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.<br>|
|name|string|false|none|The name of the group (not guaranteed to be unique).|
|open_archives|boolean|false|none|When true, the group posts are viewable by anyone.  When false, the group posts can only be viewed by members of the group.|
|open_membership|boolean|false|none|When true, the group allows anyone to join.  When false, the group moderators review and approve applicants.|
|region|object|false|none|Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.|
|timezone|string|false|none|The timezone that the group is in (eg. America/New_York).|

<h2 id="tocS_GroupNotice">GroupNotice</h2>
<!-- backwards compatibility -->
<a id="schemagroupnotice"></a>
<a id="schema_GroupNotice"></a>
<a id="tocSgroupnotice"></a>
<a id="tocsgroupnotice"></a>

```json
{
  "content": "Everything must be free, legal and appropriate for all ages.  Repeat offenders will be banned.",
  "date": "2018-02-17T13:22:40",
  "group_id": 1781,
  "notice_id": 81178,
  "title": "Group Rules & Guidelines"
}
```

Group notices are created by group moderators in order to provide useful information to the group members (eg. group rules and guidelines).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|date|string(date-time)|false|none|The UTC date and time when this notice was received.|
|group_id|string|false|none|none|
|notice_id|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_Message">Message</h2>
<!-- backwards compatibility -->
<a id="schemamessage"></a>
<a id="schema_Message"></a>
<a id="tocSmessage"></a>
<a id="tocsmessage"></a>

```json
{
  "content": "Here are some photos and the directions for pick up.",
  "date": "2019-07-24T22:29:10",
  "email_attachments": [
    "Directions and map.pdf"
  ],
  "from_user_id": 2946512,
  "message_id": 10199633,
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "post": null,
  "subject": "Dining Table and 4 Chairs",
  "to_user_id": 119458
}
```

A message between two users.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|The content of the message.|
|date|string(date-time)|false|none|The UTC date and time when the message was sent.|
|email_attachments|[string]|false|none|Every message a user receives is made available via the API and is sent to the user by email.  Some messages may contain unsupported attachments that are not available by the API but are emailed to the user (eg. documents, videos, zip files). The email_attachments field provides the names of all the unsupported attachments that were emailed to the user (will be null if there are no unsupported attachments).<br>|
|from_user_id|string|false|none|The ID of the user that sent the message (the sender).|
|message_id|string|false|none|none|
|photos|[[Photo](#schemaphoto)]|false|none|Details about the photos associated with this message (may be null if there are no photos).|
|post|[Post](#schemapost)|false|none|An offer, wanted, admin, taken or received post.|
|subject|string|false|none|Because many messages are received by email, all messages have a subject. The subject is often useful to allow the recipient to determine which post a message may be referring to.  In rare cases, some senders send emails with a subject and but no email body which causes the message content to be an empty string.<br>|
|to_user_id|string|false|none|The ID of the user that received the message (the recipient).|

<h2 id="tocS_Photo">Photo</h2>
<!-- backwards compatibility -->
<a id="schemaphoto"></a>
<a id="schema_Photo"></a>
<a id="tocSphoto"></a>
<a id="tocsphoto"></a>

```json
{
  "blurhash": "TkJ7jsoz%f~VoLxu-pWCWB-oj[M|",
  "images": [
    {
      "height": 120,
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "width": 90
    },
    {
      "height": 240,
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
      "width": 180
    },
    {
      "height": 360,
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
      "width": 270
    },
    {
      "height": 500,
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
      "width": 375
    }
  ],
  "photo_id": "695624-768616",
  "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
  "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blurhash|string|false|none|A blurhash of the photo that can be used as a placeholder while the photo is loading (see: https://github.com/woltapp/blurhash). May be null if no blurhash is available and the length of the blurhash can vary based on the photo.<br>|
|images|[object]|false|none|All the versions of this photo ordered from smallest to largest.  This list is guaranteed to include the photos specified by the above thumbnail and url properties.|
|photo_id|string|false|none|none|
|thumbnail|string|false|none|A URL to a thumbnail of this photo.  The size of the thumbnail depends on the device_pixel_ratio parameter and it is not guaranteed to be square.|
|url|string|false|none|A URL to a large version of this photo (but not necessarily the largest size available).|

<h2 id="tocS_PhotoResult">PhotoResult</h2>
<!-- backwards compatibility -->
<a id="schemaphotoresult"></a>
<a id="schema_PhotoResult"></a>
<a id="tocSphotoresult"></a>
<a id="tocsphotoresult"></a>

```json
{
  "photo_id": "987-423",
  "thumbnail": {
    "height": 120,
    "url": "https://trashnothing.com/img/2018-02-02/307731-20180119_155358.90x120.jpg",
    "width": 90
  }
}
```

The result of uploading or editing a photo.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|photo_id|string|false|none|none|
|thumbnail|object|false|none|Photo thumbnail data.|

<h2 id="tocS_Post">Post</h2>
<!-- backwards compatibility -->
<a id="schemapost"></a>
<a id="schema_Post"></a>
<a id="tocSpost"></a>
<a id="tocspost"></a>

```json
{
  "content": "This ultrasonic diffuser creates an aroma in your home. It comes with two essential oils - mint and lavender.",
  "date": "2018-02-05T15:10:21",
  "expiration": "2018-03-05T15:10:21",
  "footer": null,
  "group_id": 6,
  "latitude": 43.653226,
  "longitude": -79.383184,
  "outcome": "satisfied",
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "post_id": 3171898,
  "repost_count": 1,
  "reselling": false,
  "title": "Ultrasonic diffuser (Downtown Toronto)",
  "type": "offer",
  "url": "https://trashnothing.com/post/3171898/ultrasonic-diffuser-downtown-torronto",
  "user_id": 2933
}
```

An offer, wanted, admin, taken or received post.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|date|string(date-time)|false|none|The UTC date and time when the post was published.|
|expiration|string(date-time)|false|none|The UTC date and time when the post will expire.   Currently only offer and wanted posts expire.  For all other posts, expiration is always null.<br>|
|footer|string|false|none|Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null).|
|group_id|string|false|none|The group ID of the post.  For public posts, this is always null.<br>|
|latitude|number|false|none|May be null if a post hasn't been mapped.|
|longitude|number|false|none|May be null if a post hasn't been mapped.|
|outcome|string|false|none|For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   <br /><br /> Offer post outcomes will be one of: satisfied, withdrawn, promised, expired <br /><br /> Wanted post outcomes will be one of: satisfied, withdrawn, expired <br /><br /> For all other posts, outcome is always null.<br>|
|photos|[[Photo](#schemaphoto)]|false|none|Details about the photos associated with this post (may be null if there are no photos).|
|post_id|string|false|none|none|
|repost_count|integer|false|none|The count of how many times this post has been reposted in the last 90 days. A value of zero is used to indicate that the post is not a repost. The count is specific to the source of the post (eg. the specific group the post is on). If a post is crossposted to multiple groups, the repost_count of the post on each group may be different for each group depending on how many times the post has been posted on that group in the last 90 days.<br>|
|reselling|boolean|false|none|For wanted posts, whether the item is being requested in order to resell it or not. Will be null for all posts that are not wanted posts and for wanted posts where the poster hasn't indicated whether or not they intend to resell the item they are requesting.<br>|
|source|string|false|none|The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.<br>|
|title|string|false|none|none|
|type|string|false|none|The type of post.  One of: offer, taken, wanted, received, admin<br>|
|url|string|false|none|The link to use to view the post on the trash nothing site.|
|user_id|string|false|none|none|

<h2 id="tocS_PostSearchResult">PostSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemapostsearchresult"></a>
<a id="schema_PostSearchResult"></a>
<a id="tocSpostsearchresult"></a>
<a id="tocspostsearchresult"></a>

```json
{
  "content": "Panasonic microwave oven in good working order 800 W power and turntable inside Has all the normal microwave functions plus grill elements for browning Comes with original instructions booklet It's an old microwave and could do with a bit of a clean, but still works very well\n",
  "date": "2018-02-18T17:11:38",
  "expiration": "2018-04-18T17:11:38",
  "footer": null,
  "group_id": 81,
  "latitude": 42.961404,
  "longitude": -88.012586,
  "outcome": null,
  "photos": null,
  "post_id": 25997431,
  "repost_count": 0,
  "reselling": false,
  "search_content": "Panasonic <span class=\"highlight\">microwave</span> oven in good working order 800 W power and turntable",
  "search_title": "<span class=\"highlight\">Microwave</span> Oven (Greenfield)",
  "title": "Microwave Oven (Greenfield)",
  "type": "offer",
  "url": "https://trashnothing.com/post/25997431/microwave-oven-greenfield",
  "user_id": 82928
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|date|string(date-time)|false|none|The UTC date and time when the post was published.|
|expiration|string(date-time)|false|none|The UTC date and time when the post will expire.   Currently only offer and wanted posts expire.  For all other posts, expiration is always null.<br>|
|footer|string|false|none|Some groups add footers to posts that are separate and sometimes unrelated to the post itself - such as reminders about group rules or features (may be null).|
|group_id|string|false|none|The group ID of the post.  For public posts, this is always null.<br>|
|latitude|number|false|none|May be null if a post hasn't been mapped.|
|longitude|number|false|none|May be null if a post hasn't been mapped.|
|outcome|string|false|none|For offer and wanted posts, this indicates the outcome of the post which is null if no outcome has been set yet.   <br /><br /> Offer post outcomes will be one of: satisfied, withdrawn, promised, expired <br /><br /> Wanted post outcomes will be one of: satisfied, withdrawn, expired <br /><br /> For all other posts, outcome is always null.<br>|
|photos|[[Photo](#schemaphoto)]|false|none|Details about the photos associated with this post (may be null if there are no photos).|
|post_id|string|false|none|none|
|repost_count|integer|false|none|The count of how many times this post has been reposted in the last 90 days. A value of zero is used to indicate that the post is not a repost. The count is specific to the source of the post (eg. the specific group the post is on). If a post is crossposted to multiple groups, the repost_count of the post on each group may be different for each group depending on how many times the post has been posted on that group in the last 90 days.<br>|
|reselling|boolean|false|none|For wanted posts, whether the item is being requested in order to resell it or not. Will be null for all posts that are not wanted posts and for wanted posts where the poster hasn't indicated whether or not they intend to resell the item they are requesting.<br>|
|source|string|false|none|The source of the post.  One of: groups, trashnothing, open_archive_groups.  A value of groups or open_archive_groups indicates the post is from a group and the group_id field will contain the ID of the group. A value of trashnothing indicates the post is a public post not associated with any group.<br>|
|title|string|false|none|none|
|type|string|false|none|The type of post.  One of: offer, taken, wanted, received, admin<br>|
|url|string|false|none|The link to use to view the post on the trash nothing site.|
|user_id|string|false|none|none|
|search_content|string|false|none|A snippet of the post content as HTML with the parts of the content that matched the search query (if any) wrapped in an HTML span tags with the class 'highlight' (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the post content matched the search query. <br /><br /> NOTE: This is not the full content of the post  It is just a snippet of around 200 characters that can be used to display the parts of the post content relevant to the search query.<br>|
|search_title|string|false|none|The post subject as HTML with the parts of the subject that matched the search query (if any) wrapped in HTML span tags with the class 'highlight'. (eg. &lt;span class="highlight"&gt;matched words&lt;/span&gt;). May be null if none of the words in the subject matched the search query.<br>|

<h2 id="tocS_Story">Story</h2>
<!-- backwards compatibility -->
<a id="schemastory"></a>
<a id="schema_Story"></a>
<a id="tocSstory"></a>
<a id="tocsstory"></a>

```json
{
  "content": "People helping people - it doesn't get better than this!",
  "date": "2020-04-25T10:26:32",
  "like_count": 3,
  "photos": [
    {
      "images": [
        {
          "height": 120,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
          "width": 90
        },
        {
          "height": 240,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.180x240.jpg",
          "width": 180
        },
        {
          "height": 360,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.270x360.jpg",
          "width": 270
        },
        {
          "height": 500,
          "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg",
          "width": 375
        }
      ],
      "photo_id": "695624-768616",
      "thumbnail": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.90x120.jpg",
      "url": "https://trashnothing.com/img/2018-02-05/cfsbfm-39051735845_379baab73f.375x500.jpg"
    }
  ],
  "share_url": "https://trashnothing.com/story/7584",
  "story_id": 7584,
  "title": "Sharing is caring",
  "user": {
    "about_me": "Just an old fisherman looking to reuse more.",
    "country": "GB",
    "firstname": null,
    "lastname": null,
    "member_since": "2017-01-27T06:35:55",
    "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
    "user_id": 2946512,
    "username": "fred gibson"
  }
}
```

A user story

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|string|false|none|none|
|date|string(date-time)|false|none|The UTC date and time when the post was published.|
|like_count|integer|false|none|The number of people who have liked this story.|
|photos|[[Photo](#schemaphoto)]|false|none|Details about the photos associated with this story (may be null if there are no photos).|
|share_url|string|false|none|A URL that can be used to share the story (may be null if the story is not public).|
|story_id|string|false|none|none|
|title|string|false|none|none|
|user|[User](#schemauser)|false|none|none|
|user_liked|boolean|false|none|Whether or not the current user has liked this story or not.|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "about_me": "Just an old fisherman looking to reuse more.",
  "country": "GB",
  "feedback": {
    "percent_positive": 87.5,
    "restriction": "no-recent-messages",
    "score": 7
  },
  "firstname": null,
  "lastname": null,
  "member_since": "2017-01-27T06:35:55",
  "profile_image": "https://lh3.googleusercontent.com/-1qVLzuOCyYg/AAAAAAAAAAI/AAAAAAAAAAA/0aGNzRAO61c/s64-c/100783935580725962164.jpg",
  "reply_time": 4850,
  "user_id": 2946512,
  "username": "fred gibson"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about_me|string|false|none|A short bio a user has written about themselves to help other members get to know them better. May be null if the user has not written anything about themselves.<br>|
|country|string|false|none|A 2 letter country code for the country that has been automatically detected for the user (see https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 ). May be null if no country has been set.<br>|
|feedback|object|false|none|none|
|firstname|string|false|none|The first name of the user (may be null).|
|lastname|string|false|none|The last name of the user (may be null).|
|member_since|string|false|none|The date and time when the user first became publicly active on a group (the date may be older than when the user signed up).|
|profile_image|string|false|none|A URL to a profile image for the user.  Profile images sizes vary based on the source (Google, Facebook, Gravatar, etc) and some can be as small as 64px by 64px.  Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.<br>|
|reply_time|integer|false|none|An estimate of how many seconds it takes this user to reply to messages. May be null when there is not enough data to calculate an estimate.<br>|
|user_id|string|false|none|none|
|username|string|false|none|A username that can be displayed for the user (the username is NOT guaranteed to be unique). Will be null for api key requests and requests where the oauth user doesn't belong to any of the same groups as this user.<br>|
