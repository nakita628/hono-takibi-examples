<h1 id="clubhouse-api">Clubhouse API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Clubhouse API

Base URLs:

* <a href="https://www.clubhouseapi.com/api/">https://www.clubhouseapi.com/api/</a>

<h1 id="clubhouse-api-default">Default</h1>

## Call phone number auth.

> Code samples

```bash
curl https://example.com/call_phone_number_auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /call_phone_number_auth`

> Body parameter

```json
{}
```

<h3 id="call-phone-number-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="call-phone-number-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Clubhouse uses this to check for updates when app is not installed from App Store (eg TestFlight)

> Code samples

```bash
curl https://example.com/check_for_update \
  -H 'Accept: application/json'
```

`GET /check_for_update`

<h3 id="clubhouse-uses-this-to-check-for-updates-when-app-is-not-installed-from-app-store-eg-testflight-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_testflight|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "app_build": 262,
  "app_url": "https://apps.apple.com/us/app/id1503133294",
  "app_version": "0.1.24",
  "has_update": true,
  "is_mandatory": true,
  "success": true
}
```

<h3 id="clubhouse-uses-this-to-check-for-updates-when-app-is-not-installed-from-app-store-eg-testflight-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful response|None|

<aside class="success">
This operation does not require authentication
</aside>

## checks waitlist status.

> Code samples

```bash
curl https://example.com/check_waitlist_status \
  -X POST \
  -H 'Accept: application/json'
```

`POST /check_waitlist_status`

> Example responses

> 200 Response

```json
{
  "is_onboarding": true,
  "is_waitlisted": true,
  "success": true
}
```

> 401 Response

```json
{
  "detail": "Authentication credentials were not provided."
}
```

<h3 id="checks-waitlist-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|got waitlist status|None|
|401|Unauthorized|authorization not provided|None|

<aside class="success">
This operation does not require authentication
</aside>

## Call phone number auth.

> Code samples

```bash
curl https://example.com/complete_phone_number_auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "phone_number": "+1234567890",
    "verification_code": "1234"
  }'
```

`POST /complete_phone_number_auth`

> Body parameter

```json
{
  "phone_number": "+1234567890",
  "verification_code": "1234"
}
```

<h3 id="call-phone-number-auth-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "<jwt>",
  "auth_token": "<auth_token>",
  "is_onboarding": true,
  "is_verified": true,
  "is_waitlisted": true,
  "refresh_token": "<jwt>",
  "success": true,
  "user_profile": {
    "name": null,
    "photo_url": null,
    "user_id": 1234,
    "username": null
  }
}
```

<h3 id="call-phone-number-auth-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="success">
This operation does not require authentication
</aside>

## creates a channel

> Code samples

```bash
curl https://example.com/create_channel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "club_id": null,
    "event_id": null,
    "is_private": false,
    "is_social_mode": false,
    "topic": null,
    "user_ids": []
  }'
```

`POST /create_channel`

> Body parameter

```json
{
  "club_id": null,
  "event_id": null,
  "is_private": false,
  "is_social_mode": false,
  "topic": null,
  "user_ids": []
}
```

<h3 id="creates-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 400 Response

```json
{
  "error_message": "Your account is waitlisted. Please contact us if this is in error.",
  "success": false
}
```

<h3 id="creates-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|waitlisted|None|

<aside class="success">
This operation does not require authentication
</aside>

## follows a user

> Code samples

```bash
curl https://example.com/follow \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user_id": 1234
  }'
```

`POST /follow`

> Body parameter

```json
{
  "user_id": 1234
}
```

<h3 id="follows-a-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 401 Response

```json
{
  "error_message": "Your account is waitlisted. Please contact us if this is in error.",
  "success": false
}
```

<h3 id="follows-a-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|401|Unauthorized|waitlisted|None|

<aside class="success">
This operation does not require authentication
</aside>

## get actionable notifications (the bell again)

> Code samples

```bash
curl https://example.com/get_actionable_notifications \
  -H 'Accept: application/json'
```

`GET /get_actionable_notifications`

> Example responses

> 200 Response

```json
{
  "count": 0,
  "next": null,
  "notifications": [],
  "previous": null,
  "success": true
}
```

<h3 id="get-actionable-notifications-the-bell-again-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of actionable notifications.|None|

<aside class="success">
This operation does not require authentication
</aside>

## gets all topics.

> Code samples

```bash
curl https://example.com/get_all_topics \
  -H 'Accept: application/json'
```

`GET /get_all_topics`

> Example responses

> 200 Response

```json
{
  "topics": [
    {
      "abbreviated_title": "Example",
      "id": 1,
      "title": "Example",
      "topics": [
        {
          "abbreviated_title": "The Future",
          "id": 140,
          "title": "⏳ The Future"
        }
      ]
    }
  ]
}
```

<h3 id="gets-all-topics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a list of topics|None|

<aside class="success">
This operation does not require authentication
</aside>

## get all channels

> Code samples

```bash
curl https://example.com/get_channels \
  -H 'Accept: application/json'
```

`GET /get_channels`

> Example responses

> 200 Response

```json
{
  "channels": [
    {
      "channel": "abcdefgh",
      "channel_id": 123456,
      "club": {
        "club_id": 12345,
        "description": "Club description",
        "enable_private": true,
        "is_community": false,
        "is_follow_allowed": true,
        "is_membership_private": false,
        "name": "Club name",
        "num_followers": 456,
        "num_members": 123,
        "num_online": 0,
        "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/club_<club_id>_<guid>_thumbnail_250x250",
        "rules": [
          {
            "desc": "Description",
            "title": "Rule"
          }
        ]
      },
      "club_id": 12345,
      "club_name": "Club name",
      "creator_user_profile_id": 1234,
      "has_blocked_speakers": false,
      "is_explore_channel": false,
      "is_private": false,
      "is_social_mode": false,
      "num_all": 1234,
      "num_other": 0,
      "num_speakers": 123,
      "topic": "Example Topic",
      "url": "https://www.joinclubhouse.com/room/abcdefgh",
      "users": [
        {
          "is_followed_by_speaker": true,
          "is_invited_as_speaker": false,
          "is_moderator": true,
          "is_speaker": true,
          "name": "John Example",
          "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<guid>_thumbnail_250x250",
          "time_joined_as_speaker": "2021-01-20T00:00:00.000000+00:00",
          "user_id": 1234
        }
      ],
      "welcome_for_user_profile": null
    }
  ],
  "events": [],
  "success": true
}
```

<h3 id="get-all-channels-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|list of channels|None|

<aside class="success">
This operation does not require authentication
</aside>

## gets club by id

> Code samples

```bash
curl https://example.com/get_club \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "club_id": 1234
  }'
```

`POST /get_club`

> Body parameter

```json
{
  "club_id": 1234
}
```

<h3 id="gets-club-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "added_by_user_profile": null,
  "club": {
    "club_id": 123,
    "description": "Example",
    "is_follower": false,
    "is_member": false,
    "name": "Example Club",
    "num_followers": 456,
    "num_members": 123,
    "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/club_<club_id>_<guid>_thumbnail_250x250"
  },
  "invite_link": null,
  "is_admin": false,
  "is_follower": false,
  "is_member": false,
  "is_pending_accept": false,
  "is_pending_approval": false,
  "member_user_ids": [],
  "num_invites": 0,
  "success": true,
  "topics": [
    {
      "abbreviated_title": "Topic Example",
      "id": 140,
      "title": "Topic Example"
    }
  ]
}
```

<h3 id="gets-club-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns club object|None|

<aside class="success">
This operation does not require authentication
</aside>

## looks up clubs by topic.

> Code samples

```bash
curl https://example.com/get_clubs_for_topic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "topic_id": 140
  }'
```

`POST /get_clubs_for_topic`

> Body parameter

```json
{
  "topic_id": 140
}
```

<h3 id="looks-up-clubs-by-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "clubs": [
    {
      "club_id": 123,
      "description": "Example",
      "is_follower": false,
      "is_member": false,
      "name": "Example Club",
      "num_followers": 456,
      "num_members": 123,
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/club_<club_id>_<guid>_thumbnail_250x250"
    }
  ],
  "count": 1,
  "next": null,
  "previous": null,
  "success": true
}
```

<h3 id="looks-up-clubs-by-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns list of clubs with pagination|None|

<aside class="success">
This operation does not require authentication
</aside>

## is fetched when you tap Create Room

> Code samples

```bash
curl https://example.com/get_create_channel_targets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /get_create_channel_targets`

> Body parameter

```json
{}
```

<h3 id="is-fetched-when-you-tap-create-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 400 Response

```json
{
  "error_message": "Your account is waitlisted. Please contact us if this is in error.",
  "success": false
}
```

<h3 id="is-fetched-when-you-tap-create-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|waitlisted|None|

<aside class="success">
This operation does not require authentication
</aside>

## the Upcoming for You page

> Code samples

```bash
curl https://example.com/get_events \
  -H 'Accept: application/json'
```

`GET /get_events`

<h3 id="the-upcoming-for-you-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|is_filtered|query|boolean|false|none|
|page_size|query|integer|false|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "events": [],
  "next": null,
  "previous": null,
  "success": true
}
```

<h3 id="the-upcoming-for-you-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a list of events|None|

<aside class="success">
This operation does not require authentication
</aside>

## get a list of the users and clubs that this user is following. Returned users have bios truncated to ~80 characters.

> Code samples

```bash
curl https://example.com/get_following \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user_id": 1234
  }'
```

`POST /get_following`

> Body parameter

```json
{
  "user_id": 1234
}
```

<h3 id="get-a-list-of-the-users-and-clubs-that-this-user-is-following-returned-users-have-bios-truncated-to-80-characters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "clubs": [
    {
      "club_id": 123,
      "description": "Example",
      "is_follower": false,
      "is_member": false,
      "name": "Example Club",
      "num_followers": 456,
      "num_members": 123,
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/club_<club_id>_<guid>_thumbnail_250x250"
    }
  ],
  "count": 2,
  "next": null,
  "previous": null,
  "success": true,
  "users": [
    {
      "bio": "Bio",
      "name": "John Smith",
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<uuid>_thumbnail_250x250",
      "twitter": null,
      "user_id": 12345,
      "username": "johnsmith"
    }
  ]
}
```

<h3 id="get-a-list-of-the-users-and-clubs-that-this-user-is-following-returned-users-have-bios-truncated-to-80-characters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns list of users and clubs|None|

<aside class="success">
This operation does not require authentication
</aside>

## get notifications (the bell icon)

> Code samples

```bash
curl https://example.com/get_notifications \
  -H 'Accept: application/json'
```

`GET /get_notifications`

<h3 id="get-notifications-the-bell-icon-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page_size|query|integer|false|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "count": 0,
  "disabled": false,
  "next": null,
  "notifications": [],
  "previous": null,
  "success": true
}
```

<h3 id="get-notifications-the-bell-icon-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of notifications.|None|

<aside class="success">
This operation does not require authentication
</aside>

## gets online friends on the app homepage.

> Code samples

```bash
curl https://example.com/get_online_friends \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /get_online_friends`

> Body parameter

```json
{}
```

<h3 id="gets-online-friends-on-the-app-homepage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "clubs": [],
  "users": []
}
```

<h3 id="gets-online-friends-on-the-app-homepage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a list of online clubs and users.|None|

<aside class="success">
This operation does not require authentication
</aside>

## looks up user profile by ID.

> Code samples

```bash
curl https://example.com/get_profile \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user_id": 4075733
  }'
```

`POST /get_profile`

> Body parameter

```json
{
  "user_id": 4075733
}
```

<h3 id="looks-up-user-profile-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "user_profile": {
    "bio": "🌸 Creating INEVITABLE™ Services",
    "can_edit_displayname": true,
    "can_edit_name": true,
    "can_edit_username": true,
    "clubs": [
      {
        "club_id": 12345,
        "description": "Club description",
        "enable_private": true,
        "is_community": false,
        "is_follow_allowed": true,
        "is_membership_private": false,
        "name": "Club name",
        "num_followers": 456,
        "num_members": 123,
        "num_online": 0,
        "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/club_<club_id>_<guid>_thumbnail_250x250",
        "rules": [
          {
            "desc": "Description",
            "title": "Rule"
          }
        ]
      }
    ],
    "displayname": null,
    "follows_me": false,
    "has_verified_email": true,
    "instagram": "_junhoyeo",
    "invited_by_user_profile": {
      "name": "Example Norminator",
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<guid>_thumbnail_250x250",
      "user_id": 1234,
      "username": "myexamplenorminator"
    },
    "is_blocked_by_network": false,
    "mutual_follows": [],
    "mutual_follows_count": 0,
    "name": "Junho Yeo",
    "notification_type": null,
    "num_followers": 103,
    "num_following": 98,
    "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<guid>",
    "time_created": "2021-01-28T12:30:25.625451+00:00",
    "topics": [
      {
        "abbreviated_title": "Startups",
        "id": 107,
        "title": "🦄 Startups"
      }
    ],
    "twitter": null,
    "user_id": 4075733,
    "username": "junhoyeo"
  }
}
```

<h3 id="looks-up-user-profile-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns user profile info|None|

<aside class="success">
This operation does not require authentication
</aside>

## gets release notes.

> Code samples

```bash
curl https://example.com/get_release_notes \
  -X POST \
  -H 'Accept: application/json'
```

`POST /get_release_notes`

> Example responses

> 200 Response

```json
{
  "action": "See What's New",
  "should_display": true,
  "title": "🕹 You are now using the latest update of Clubhouse!",
  "url": "https://whatsnew.joinclubhouse.com"
}
```

<h3 id="gets-release-notes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the response|None|

<aside class="success">
This operation does not require authentication
</aside>

## get notification settings

> Code samples

```bash
curl https://example.com/get_settings \
  -H 'Accept: application/json'
```

`GET /get_settings`

> Example responses

> 200 Response

```json
{
  "notifications_enable_trending": true,
  "notifications_frequency": 3,
  "notifications_is_paused": false,
  "success": true
}
```

<h3 id="get-notification-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|notification settings|None|

<aside class="success">
This operation does not require authentication
</aside>

## find users to invite to clubs based on phone number

> Code samples

```bash
curl https://example.com/get_suggested_club_invites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "contacts": [
      {
        "name": "aaa",
        "phone_number": "+11234567890"
      }
    ],
    "upload_contacts": true
  }'
```

`POST /get_suggested_club_invites`

> Body parameter

```json
{
  "contacts": [
    {
      "name": "aaa",
      "phone_number": "+11234567890"
    }
  ],
  "upload_contacts": true
}
```

<h3 id="find-users-to-invite-to-clubs-based-on-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "suggested_invites": []
}
```

<h3 id="find-users-to-invite-to-clubs-based-on-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns list of suggested invites.|None|

<aside class="success">
This operation does not require authentication
</aside>

## gets suggested follows during signup

> Code samples

```bash
curl https://example.com/get_suggested_follows_all \
  -H 'Accept: application/json'
```

`GET /get_suggested_follows_all`

<h3 id="gets-suggested-follows-during-signup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|in_onboarding|query|boolean|false|none|
|page_size|query|integer|false|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "count": 59,
  "next": 2,
  "previous": null,
  "success": true,
  "users": [
    {
      "bio": "Example bio",
      "name": "John Smith",
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<guid>_thumbnail_250x250",
      "twitter": "johnsmith",
      "user_id": 1234,
      "username": "rohan"
    }
  ]
}
```

<h3 id="gets-suggested-follows-during-signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|a list of users to follow. bios truncated to 80 chars.|None|

<aside class="success">
This operation does not require authentication
</aside>

## find people to follow by uploading contacts during signup

> Code samples

```bash
curl https://example.com/get_suggested_follows_friends_only \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "club_id": null,
    "contacts": [],
    "upload_contacts": true
  }'
```

`POST /get_suggested_follows_friends_only`

> Body parameter

```json
{
  "club_id": null,
  "contacts": [],
  "upload_contacts": true
}
```

<h3 id="find-people-to-follow-by-uploading-contacts-during-signup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "users": []
}
```

<h3 id="find-people-to-follow-by-uploading-contacts-during-signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns list of users and clubs|None|

<aside class="success">
This operation does not require authentication
</aside>

## find similar users. (The Sparkles button on Clubhouse's profile page)

> Code samples

```bash
curl https://example.com/get_suggested_follows_similar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user_id": 4
  }'
```

`POST /get_suggested_follows_similar`

> Body parameter

```json
{
  "user_id": 4
}
```

<h3 id="find-similar-users-the-sparkles-button-on-clubhouses-profile-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "users": [
    {
      "bio": "",
      "name": "John Smith",
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<uuid>_thumbnail_250x250",
      "twitter": null,
      "user_id": "1234",
      "username": "johnsmith"
    }
  ]
}
```

<h3 id="find-similar-users-the-sparkles-button-on-clubhouses-profile-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of users. Bios truncated to 80 chars.|None|

<aside class="success">
This operation does not require authentication
</aside>

## find users to invite based on phone number.

> Code samples

```bash
curl https://example.com/get_suggested_invites \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "club_id": null,
    "contacts": [
      {
        "phone_number": "+11234567890"
      }
    ],
    "upload_contacts": false
  }'
```

`POST /get_suggested_invites`

(also see https://zerforschung.org/posts/clubhouse-telefonnummern-en/ for @zerforschung's analysis of the privacy implications of this API)

> Body parameter

```json
{
  "club_id": null,
  "contacts": [
    {
      "phone_number": "+11234567890"
    }
  ],
  "upload_contacts": false
}
```

<h3 id="find-users-to-invite-based-on-phone-number-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "num_invites": 0,
  "success": true,
  "suggested_invites": [
    {
      "in_app": false,
      "is_invited": false,
      "num_friends": 0,
      "phone_number": "+11234567890"
    }
  ]
}
```

<h3 id="find-users-to-invite-based-on-phone-number-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns list of users that can be invited.|None|

<aside class="success">
This operation does not require authentication
</aside>

## gets suggested users when you start a private room

> Code samples

```bash
curl https://example.com/get_suggested_speakers \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel": null
  }'
```

`POST /get_suggested_speakers`

> Body parameter

```json
{
  "channel": null
}
```

<h3 id="gets-suggested-users-when-you-start-a-private-room-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "clubs": [],
  "count": 0,
  "next": null,
  "previous": null,
  "success": true,
  "users": []
}
```

<h3 id="gets-suggested-users-when-you-start-a-private-room-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of actionable notifications.|None|

<aside class="success">
This operation does not require authentication
</aside>

## looks up topic by ID.

> Code samples

```bash
curl https://example.com/get_topic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "topic_id": 140
  }'
```

`POST /get_topic`

> Body parameter

```json
{
  "topic_id": 140
}
```

<h3 id="looks-up-topic-by-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true,
  "topic": {
    "abbreviated_title": "The Future",
    "id": 140,
    "title": "⏳ The Future"
  }
}
```

<h3 id="looks-up-topic-by-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns topic info|None|

<aside class="success">
This operation does not require authentication
</aside>

## looks up users by topic.

> Code samples

```bash
curl https://example.com/get_users_for_topic \
  -H 'Accept: application/json'
```

`GET /get_users_for_topic`

<h3 id="looks-up-users-by-topic-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|topic_id|query|integer|false|none|
|page_size|query|integer|false|none|
|page|query|integer|false|none|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "success": true,
  "users": [
    {
      "bio": "John Example is an exemplary user object",
      "name": "John Example",
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<guid>_thumbnail_250x250",
      "twitter": "john_example",
      "user_id": 1234,
      "username": "john_example"
    }
  ]
}
```

<h3 id="looks-up-users-by-topic-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns list of users with pagination. Bios truncated to 80 chars.|None|

<aside class="success">
This operation does not require authentication
</aside>

## called during signup

> Code samples

```bash
curl https://example.com/get_welcome_channel \
  -H 'Accept: application/json'
```

`GET /get_welcome_channel`

> Example responses

> 200 Response

```json
{
  "is_empty": true,
  "success": true
}
```

<h3 id="called-during-signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|empty???|None|

<aside class="success">
This operation does not require authentication
</aside>

## wave to another user on the waitlist to give them access

> Code samples

```bash
curl https://example.com/invite_from_waitlist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "user_id": 1234
  }'
```

`POST /invite_from_waitlist`

> Body parameter

```json
{
  "user_id": 1234
}
```

<h3 id="wave-to-another-user-on-the-waitlist-to-give-them-access-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 400 Response

```json
{
  "error_message": "",
  "success": false
}
```

<h3 id="wave-to-another-user-on-the-waitlist-to-give-them-access-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|your own account is waitlisted, or some other error occurred|None|

<aside class="success">
This operation does not require authentication
</aside>

## invite a user to the app, using one of your invites

> Code samples

```bash
curl https://example.com/invite_to_app \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "message": null,
    "name": "John Smith",
    "phone_number": "+11234567890"
  }'
```

`POST /invite_to_app`

> Body parameter

```json
{
  "message": null,
  "name": "John Smith",
  "phone_number": "+11234567890"
}
```

<h3 id="invite-a-user-to-the-app-using-one-of-your-invites-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 400 Response

```json
{
  "error_message": "Your account is waitlisted. Please contact us if this is in error.",
  "success": false
}
```

<h3 id="invite-a-user-to-the-app-using-one-of-your-invites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|your own account doesn't have an invite either|None|

<aside class="success">
This operation does not require authentication
</aside>

## join a channel.

> Code samples

```bash
curl https://example.com/join_channel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attribution_details": "eyJpc19leHBsb3JlIjpmYWxzZSwicmFuayI6MX0=",
    "attribution_source": "feed",
    "channel": "abcdefgh"
  }'
```

`POST /join_channel`

> Body parameter

```json
{
  "attribution_details": "eyJpc19leHBsb3JlIjpmYWxzZSwicmFuayI6MX0=",
  "attribution_source": "feed",
  "channel": "abcdefgh"
}
```

<h3 id="join-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "agora_native_mute": true,
  "channel": "abcdefgh",
  "channel_id": 123456,
  "club": {
    "club_id": 1234,
    "description": "Club description",
    "enable_private": true,
    "is_community": false,
    "is_follow_allowed": true,
    "is_membership_private": false,
    "name": "Club name",
    "num_followers": 567,
    "num_members": 123,
    "num_online": 0,
    "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/club_<club_id>_<guid>_thumbnail_250x250",
    "rules": []
  },
  "club_id": 45,
  "club_name": "Startup Club",
  "creator_user_profile_id": 1234,
  "handraise_permission": 1,
  "is_club_admin": false,
  "is_club_member": false,
  "is_empty": false,
  "is_handraise_enabled": true,
  "is_private": false,
  "is_social_mode": false,
  "pubnub_enable": true,
  "pubnub_heartbeat_interval": 29,
  "pubnub_heartbeat_value": 60,
  "pubnub_origin": null,
  "pubnub_token": "<pubnub_token>",
  "rtm_token": "<rtm_token>",
  "success": true,
  "token": "<token>",
  "topic": "Channel topic",
  "url": "https://www.joinclubhouse.com/room/abcdefgh",
  "users": [
    {
      "first_name": "John",
      "is_followed_by_speaker": true,
      "is_invited_as_speaker": true,
      "is_moderator": true,
      "is_new": true,
      "is_speaker": true,
      "name": "John Example",
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<guid>_thumbnail_250x250",
      "skintone": 3,
      "time_joined_as_speaker": "2021-01-31T00:00:00.000000+00:00",
      "user_id": 123456,
      "username": "john_example"
    },
    {
      "first_name": "Current",
      "is_followed_by_speaker": false,
      "is_invited_as_speaker": false,
      "is_moderator": false,
      "is_new": false,
      "is_speaker": false,
      "name": "The currently joining user",
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<guid>_thumbnail_250x250",
      "skintone": 3,
      "time_joined_as_speaker": null,
      "user_id": 1234,
      "username": "currentuser"
    }
  ],
  "welcome_for_user_profile": null
}
```

> 400 Response

```json
{
  "error_message": "Please upgrade the app to join rooms!",
  "success": false
}
```

<h3 id="join-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|stuff needed to actually join a channel|None|
|400|Bad Request|cannot join|None|

<aside class="success">
This operation does not require authentication
</aside>

## leave a channel.

> Code samples

```bash
curl https://example.com/leave_channel \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "channel": "abcdefgh"
  }'
```

`POST /leave_channel`

> Body parameter

```json
{
  "channel": "abcdefgh"
}
```

<h3 id="leave-a-channel-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="leave-a-channel-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|left the channel|None|

<aside class="success">
This operation does not require authentication
</aside>

## gets user

> Code samples

```bash
curl https://example.com/me \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "return_blocked_ids": true,
    "return_following_ids": true,
    "timezone_identifier": "America/Los_Angeles"
  }'
```

`POST /me`

> Body parameter

```json
{
  "return_blocked_ids": true,
  "return_following_ids": true,
  "timezone_identifier": "America/Los_Angeles"
}
```

<h3 id="gets-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "<jwt>",
  "actionable_notifications_count": 0,
  "auth_token": "<auth_token>",
  "blocked_ids": null,
  "email": null,
  "feature_flags": [
    ""
  ],
  "following_ids": null,
  "has_unread_notifications": false,
  "is_admin": false,
  "notifications_enabled": false,
  "num_invites": 0,
  "refresh_token": "<jwt>",
  "success": true,
  "user_profile": {
    "name": null,
    "photo_url": null,
    "user_id": 1234,
    "username": null
  }
}
```

> 403 Response

```json
{
  "detail": "You do not have permission to perform this action."
}
```

<h3 id="gets-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|the response|None|
|403|Forbidden|error response - happens if account is banned (is_blocked)|None|

<aside class="success">
This operation does not require authentication
</aside>

## analytics

> Code samples

```bash
curl https://example.com/record_action_trails \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "action_trails": [
      {
        "blob_data": {},
        "client_time_created": 1612971962,
        "trail_type": "app_opened"
      }
    ]
  }'
```

`POST /record_action_trails`

> Body parameter

```json
{
  "action_trails": [
    {
      "blob_data": {},
      "client_time_created": 1612971962,
      "trail_type": "app_opened"
    }
  ]
}
```

<h3 id="analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "success": true
}
```

<h3 id="analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|always empty|None|

<aside class="success">
This operation does not require authentication
</aside>

## gets an access_token from a refresh_token.

> Code samples

```bash
curl https://example.com/refresh_token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "refresh": "<refresh_token>"
  }'
```

`POST /refresh_token`

> Body parameter

```json
{
  "refresh": "<refresh_token>"
}
```

<h3 id="gets-an-accesstoken-from-a-refreshtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "access": "<access_token>",
  "refresh": "<refresh_token>"
}
```

> 401 Response

```json
{
  "code": "token_not_valid",
  "detail": "Token is invalid or expired"
}
```

<h3 id="gets-an-accesstoken-from-a-refreshtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|returns new access and refresh token|None|
|401|Unauthorized|invalid refresh token|None|

<aside class="success">
This operation does not require authentication
</aside>

## Resend phone number auth.

> Code samples

```bash
curl https://example.com/resend_phone_number_auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /resend_phone_number_auth`

> Body parameter

```json
{}
```

<h3 id="resend-phone-number-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

<h3 id="resend-phone-number-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="success">
This operation does not require authentication
</aside>

## search clubs.

> Code samples

```bash
curl https://example.com/search_clubs \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cofollows_only": false,
    "followers_only": false,
    "following_only": false,
    "query": "rohan"
  }'
```

`POST /search_clubs`

> Body parameter

```json
{
  "cofollows_only": false,
  "followers_only": false,
  "following_only": false,
  "query": "rohan"
}
```

<h3 id="search-clubs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "clubs": [
    {
      "club_id": "1234",
      "description": "Example club",
      "is_follower": false,
      "is_member": false,
      "name": "Example club",
      "num_followers": 1234,
      "num_members": 5678,
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/club_<club_id>_<uuid>_thumbnail_250x250"
    }
  ],
  "count": 1,
  "next": null,
  "previous": null,
  "success": true
}
```

<h3 id="search-clubs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of clubs.|None|

<aside class="success">
This operation does not require authentication
</aside>

## search for users

> Code samples

```bash
curl https://example.com/search_users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "cofollows_only": false,
    "followers_only": false,
    "following_only": false,
    "query": "johnsmith"
  }'
```

`POST /search_users`

> Body parameter

```json
{
  "cofollows_only": false,
  "followers_only": false,
  "following_only": false,
  "query": "johnsmith"
}
```

<h3 id="search-for-users-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "success": true,
  "users": [
    {
      "bio": "Bio!",
      "name": "John Smith",
      "photo_url": "https://clubhouseprod.s3.amazonaws.com:443/<user_id>_<uuid>_thumbnail_250x250",
      "user_id": "1234",
      "username": "johnsmith"
    }
  ]
}
```

<h3 id="search-for-users-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Returns a list of users.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Starts phone number auth.

> Code samples

```bash
curl https://example.com/start_phone_number_auth \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "phone_number": "+11234567890"
  }'
```

`POST /start_phone_number_auth`

> Body parameter

```json
{
  "phone_number": "+11234567890"
}
```

<h3 id="starts-phone-number-auth-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "is_blocked": false,
  "number_of_attempts_remaining": 3,
  "success": true
}
```

<h3 id="starts-phone-number-auth-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|None|

<aside class="success">
This operation does not require authentication
</aside>

## updates notification during signup.

> Code samples

```bash
curl https://example.com/update_notifications \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "apn_token": null,
    "enable_trending": -1,
    "frequency": -1,
    "is_sandbox": false,
    "pause_till": -1,
    "system_enabled": 2
  }'
```

`POST /update_notifications`

> Body parameter

```json
{
  "apn_token": null,
  "enable_trending": -1,
  "frequency": -1,
  "is_sandbox": false,
  "pause_till": -1,
  "system_enabled": 2
}
```

<h3 id="updates-notification-during-signup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 400 Response

```json
{
  "error_message": "Your account is waitlisted. Please contact us if this is in error.",
  "success": false
}
```

<h3 id="updates-notification-during-signup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|400|Bad Request|waitlisted|None|

<aside class="success">
This operation does not require authentication
</aside>

## edits username.

> Code samples

```bash
curl https://example.com/update_username \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "username": "hipsterhouse"
  }'
```

`POST /update_username`

> Body parameter

```json
{
  "username": "hipsterhouse"
}
```

<h3 id="edits-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|

> Example responses

> 200 Response

```json
{
  "error_message": null,
  "success": true
}
```

> 400 Response

```json
{
  "error_message": "This username is not allowed. Please try another one.",
  "success": false
}
```

<h3 id="edits-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|username successfully set|None|
|400|Bad Request|invalid/taken username (eg empty string)|None|

<aside class="success">
This operation does not require authentication
</aside>
