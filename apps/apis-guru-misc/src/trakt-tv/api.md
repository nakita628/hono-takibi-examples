<h1 id="trakt-api">Trakt API v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

At Trakt, we collect lots of interesting information about what tv shows and movies everyone is watching. Part of the fun with such data is making it available for anyone to mash up and use on their own site or app. The Trakt API was made just for this purpose. It is very easy to use, you basically call a URL and get some JSON back.

More complex API calls (such as adding a movie or show to your collection) involve sending us data. These are still easy to use, you simply POST some JSON data to a specific URL.

Make sure to check out the [**Required Headers**](#introduction/required-headers) and [**Authentication**](#reference/authentication-oauth) sections for more info on what needs to be sent with each API call. Also check out the [**Terminology**](#introduction/terminology) section insight into the features Trakt supports.

# Create an App

To use the Trakt API, you'll need to [**create a new API app**](https://trakt.tv/oauth/applications/new).

# Stay Connected

API discussion and bugs should be posted in the [**GitHub Developer Forum**](https://github.com/trakt/api-help/issues) and *watch* the repository if you'd like to get notifications. Make sure to follow our [**API Blog**](https://apiblog.trakt.tv) and [**@traktapi on Twitter**](https://twitter.com/traktapi) too.

# API URL

The API should always be accessed over SSL.

```
https://api.trakt.tv
```

If you would like to use our sandbox environment to not fill production with test data, use this URL over SSL. **Note:** Staging is a completely separate environment, so you'll need to [**create a new API app on staging**](https://staging.trakt.tv/oauth/applications/new).

```
https://api-staging.trakt.tv
```

# Verbs

The API uses restful verbs.

| Verb | Description |
|---|---|
| `GET` | Select one or more items. Success returns `200` status code. |
| `POST` | Create a new item. Success returns `201` status code. |
| `PUT` | Update an item. Success returns `200` status code. |
| `DELETE` | Delete an item. Success returns `200` or `204` status code. |

# Status Codes

The API will respond with one of the following HTTP status codes.

| Code | Description |
|---|---|
| `200` | Success
| `201` | Success - *new resource created (POST)*
| `204` | Success - *no content to return (DELETE)*
| `400` | Bad Request - *request couldn't be parsed*
| `401` | Unauthorized - *OAuth must be provided*
| `403` | Forbidden - *invalid API key or unapproved app*
| `404` | Not Found - *method exists, but no record found*
| `405` | Method Not Found - *method doesn't exist*
| `409` | Conflict - *resource already created*
| `412` | Precondition Failed - *use application/json content type*
| `420` | Account Limit Exceeded - *list count, item count, etc*
| `422` | Unprocessable Entity - *validation errors*
| `423` | Locked User Account - *have the user contact support*
| `426` | VIP Only - *user must upgrade to VIP*
| `429` | Rate Limit Exceeded
| `500` | Server Error - *please open a support ticket*
| `502` | Service Unavailable - *server overloaded (try again in 30s)*
| `503` | Service Unavailable - *server overloaded (try again in 30s)*
| `504` | Service Unavailable - *server overloaded (try again in 30s)*
| `520` | Service Unavailable - *Cloudflare error*
| `521` | Service Unavailable - *Cloudflare error*
| `522` | Service Unavailable - *Cloudflare error*

# Required Headers

You'll need to send some headers when making API calls to identify your application, set the version and set the content type to JSON.

| Header | Value |
|---|---|
| `Content-type` <span style="color:red;">*</a> | `application/json` |
| `trakt-api-key` <span style="color:red;">*</a> | Your `client_id` listed under your Trakt applications. |
| `trakt-api-version` <span style="color:red;">*</a> | `2` | API version to use.

All `POST`, `PUT`, and `DELETE` methods require a valid OAuth `access_token`. Some `GET` calls require OAuth and others will return user specific data if OAuth is sent. Methods that &#128274; **require** or have &#128275; **optional** OAuth will be indicated.

Your OAuth library should take care of sending the auth headers for you, but for reference here's how the Bearer token should be sent.

| Header | Value |
|---|---|
| `Authorization` | `Bearer [access_token]` |

# Rate Limiting

All API methods are rate limited. A `429` HTTP status code is returned when the limit has been exceeded. Check the headers for detailed info, then try your API call in `Retry-After` seconds.

| Header | Value |
|---|---|
| `X-Ratelimit` | `{"name":"UNAUTHED_API_GET_LIMIT","period":300,"limit":1000,"remaining":0,"until":"2020-10-10T00:24:00Z"}` |
| `Retry-After` | `10` |

Here are the current limits. There are separate limits for authed (user level) and unauthed (application level) calls. We'll continue to adjust these limits to optimize API performance for everyone. The goal is to prevent API abuse and poor coding, but allow users to use apps normally.

| Name | Verb | Methods | Limit |
|---|---|---|---|
| `AUTHED_API_POST_LIMIT` | `POST`, `PUT`, `DELETE` | all | 1 call per second |
| `AUTHED_API_GET_LIMIT` | `GET` | all | 1000 calls every 5 minutes |
| `UNAUTHED_API_GET_LIMIT` | `GET` | all | 1000 calls every 5 minutes |

# Locked User Account

A `423` HTTP status code is returned when the OAuth user has a locked user account. Please instruct the user to [**contact Trakt support**](https://support.trakt.tv) so we can fix their account. API access will be suspended for the user until we fix their account.

# VIP Methods

Some API methods are tagged 🔥 **VIP Only**. A `426` HTTP status code is returned when the user isn't a VIP, indicating they need to sign up for [**Trakt VIP**](https://trakt.tv/vip) in order to use this method. In your app, please open a browser to `X-Upgrade-URL` so the user can sign up for Trakt VIP.

| Header | Value |
|---|---|
| `X-Upgrade-URL` | `https://trakt.tv/vip` |

Some API methods are tagged 🔥 **VIP Enhanced**. A `420` HTTP status code is returned when the user has exceeded their account limit. Signing up for [**Trakt VIP**](https://trakt.tv/vip) will increase these limits. If the user isn't a VIP, please open a browser to `X-Upgrade-URL` so the user can sign up for Trakt VIP. If they are already VIP and still exceeded the limit, please display a message indicating this.

| Header | Value |
|---|---|
| `X-Upgrade-URL` | `https://trakt.tv/vip` |
| `X-VIP-User` | `true` or `false` |
| `X-Account-Limit` | Limit allowed. |

# Pagination

Some methods are paginated. Methods with &#128196; **Pagination** will load 1 page of 10 items by default. Methods with &#128196; **Pagination Optional** will load all items by default. In either case, append a query string like `?page={page}&limit={limit}` to the URL to influence the results.

| Parameter | Type | Default | Value |
|---|---|---|---|
| `page` | integer | `1` | Number of page of results to be returned. |
| `limit` | integer | `10` | Number of results to return per page. |

All paginated methods will return these HTTP headers.

| Header | Value |
|---|---|
| `X-Pagination-Page` | Current page. |
| `X-Pagination-Limit` | Items per page. |
| `X-Pagination-Page-Count` | Total number of pages. |
| `X-Pagination-Item-Count` | Total number of items. |

# Extended Info

By default, all methods will return minimal info for movies, shows, episodes, people, and users. Minimal info is typically all you need to match locally cached items and includes the `title`, `year`, and `ids`. However, you can request different extended levels of information by adding `?extended={level}` to the URL. Send a comma separated string to get multiple types of extended info.

**Note:** This returns a lot of extra data, so please only use extended parameters if you actually need them!

| Level | Description |
|---|---|
| `full` | Complete info for an item.
| `metadata` | **Collection only.** Additional video and audio info.

# Filters

Some `movies`, `shows`, `calendars`,  and `search` methods support additional filters and will be tagged with &#127898; **Filters**. Applying these filters refines the results and helps your users to more easily discover new items.

Add a query string (i.e. `?years=2016&genres=action`) with any filters you want to use. Some filters allow multiples which can be sent as comma delimited parameters. For example, `?genres=action,adventure` would match the `action` OR `adventure` genre.

**Note:** Make sure to properly URL encode the parameters including spaces and special characters.

#### Common Filters

| Parameter | Multiples | Example | Value |
|---|---|---|---|
| `query` | | `batman` | Search titles and descriptions. |
| `years` | | `2016` | 4 digit year or range of years. |
| `genres` | &#10003; | `action` | [Genre slugs.](#reference/genres) |
| `languages` | &#10003; | `en` | [2 character language code.](#reference/languages) |
| `countries` | &#10003; | `us` | [2 character country code.](#reference/countries) |
| `runtimes` | | `30-90` | Range in minutes. |
| `studios` | &#10003; | `marvel-studios` | Studio slugs. |

#### Rating Filters

Trakt, TMDB, and IMDB ratings apply to `movies`, `shows`, and `episodes`. Rotten Tomatoes and Metacritic apply to `movies`.

| Parameter | Multiples | Example | Value |
|---|---|---|---|
| `ratings` | | `75-100` | Trakt rating range between `0` and `100`. |
| `votes` | | `5000-10000` | Trakt vote count between `0` and `100000`. |
| `tmdb_ratings` | | `5.5-10.0` | TMDB rating range between `0.0` and `10.0`. |
| `tmdb_votes` | | `5000-10000` | TMDB vote count between `0` and `100000`. |
| `imdb_ratings` | | `5.5-10.0` | IMDB rating range between `0.0` and `10.0`. |
| `imdb_votes` | | `5000-10000` | IMDB vote count between `0` and `3000000`. |
| `rt_meters` | | `5.5-10.0` | Rotten Tomatoes meter range between `0` and `100`. |
| `metascores` | | `5.5-10.0` | Metacritic score range between `0` and `100`. |

#### Movie Filters

| Parameter | Multiples | Example | Value |
|---|---|---|---|
| `certifications` | &#10003; | `pg-13` | US content certification. |

#### Show Filters

| Parameter | Multiples | Example | Value |
|---|---|---|---|
| `certifications` | &#10003; | `tv-pg` | US content certification. |
| `networks` | &#10003; | `HBO` | Network name. |
| `status` | &#10003; | `ended` | Set to `returning series`, `continuing`, `in production`, `planned`, `upcoming`,  `pilot`, `canceled`, or `ended`. |

# CORS

When creating your API app, specify the JavaScript (CORS) origins you'll be using. We use these origins to return the headers needed for CORS.

# Dates

All dates will be GMT and returned in the ISO 8601 format like `2014-09-01T09:10:11.000Z`. Adjust accordingly in your app for the user's local timezone.

# Emojis

We use short codes for emojis like `:smiley:` and `:raised_hands:` and render them on the Trakt website using [**JoyPixels**](https://www.joypixels.com/) _(verion 6.6.0)_. Methods that support emojis are tagged with &#128513; **Emojis**. For POST methods, you can send standard unicode emojis and we'll automatically convert them to short codes. For GET methods, we'll return the short codes and it's up to your app to convert them back to unicode emojis.

# Standard Media Objects

All methods will accept or return standard media objects for `movie`, `show`, `season`, `episode`, `person`, and `user` items. Here are examples for all minimal objects.

#### movie

```
{
    "title": "Batman Begins",
    "year": 2005,
    "ids": {
        "trakt": 1,
        "slug": "batman-begins-2005",
        "imdb": "tt0372784",
        "tmdb": 272
    }
}
```

#### show

```
{
    "title": "Breaking Bad",
    "year": 2008,
    "ids": {
        "trakt": 1,
        "slug": "breaking-bad",
        "tvdb": 81189,
        "imdb": "tt0903747",
        "tmdb": 1396
    }
}
```

#### season

```
{
    "number": 0,
    "ids": {
        "trakt": 1,
        "tvdb": 439371,
        "tmdb": 3577
    }
}
```

#### episode

```
{
    "season": 1,
    "number": 1,
    "title": "Pilot",
    "ids": {
        "trakt": 16,
        "tvdb": 349232,
        "imdb": "tt0959621",
        "tmdb": 62085
    }
}
```

#### person

```
{
    "name": "Bryan Cranston",
    "ids": {
        "trakt": 142,
        "slug": "bryan-cranston",
        "imdb": "nm0186505",
        "tmdb": 17419
    }
}
```

#### user

```
{
    "username": "sean",
    "private": false,
    "name": "Sean Rudford",
    "vip": true,
    "vip_ep": true,
    "ids": {
        "slug": "sean"
    }
}
```

# Images

The standard media objects for all `movie`, `show`, `season`, `episode`, and `person` items include an `ids` object. These `ids` map to other services like [TMDB](https://www.themoviedb.org), [TVDB](https://thetvdb.com), [Fanart.tv](https://fanart.tv), [IMDB](https://www.imdb.com), and [OMDB](https://www.omdbapi.com/).

Most of these services have free APIs you can use to grab lots of great looking images. Here’s a chart to help you find the best artwork for your app. [**We also wrote an article to help with this.**](https://apiblog.trakt.tv/how-to-find-the-best-images-516045bcc3b6)

| Media | Type | [TMDB](https://developers.themoviedb.org/3) | [TVDB](https://api.thetvdb.com/swagger) | [Fanart.tv](http://docs.fanarttv.apiary.io) | [OMDB](https://www.omdbapi.com) |
|---|---|---|---|---|---|
| `shows` | `poster` | &#10003; | &#10003; | &#10003; | &#10003; |
|  | `fanart` | &#10003; | &#10003; | &#10003; |  |
|  | `banner` |  | &#10003; | &#10003; |  |
|  | `logo` |  |  | &#10003; |  |
|  | `clearart` |  |  | &#10003; |  |
|  | `thumb` |  |  | &#10003; |  |
| `seasons` | `poster` | &#10003; | &#10003; | &#10003; |  |
|  | `banner` |  | &#10003; | &#10003; |  |
|  | `thumb` |  |  | &#10003; |  |
| `episodes` | `screenshot` | &#10003; | &#10003; |  |  |
| `movies` | `poster` | &#10003; |  | &#10003; | &#10003; |
|  | `fanart` | &#10003; |  | &#10003; |  |
|  | `banner` |  |  | &#10003; |  |
|  | `logo` |  |  | &#10003; |  |
|  | `clearart` |  |  | &#10003; |  |
|  | `thumb` |  |  | &#10003; |  |
| `person` | `headshot` | &#10003; |  |  |  |
|  | `character` |  | &#10003; |  |  |

# Website Media Links

There are several ways to construct direct links to media on the Trakt website. The website itself uses slugs so the URLs are more readable.

| Type | URL |
|---|---|
| `movie` | `/movies/:slug` |
| `show` | `/shows/:slug` |
| `season` | `/shows/:slug/seasons/:num` |
| `episode` | `/shows/:slug/seasons/:num/episodes/:num` |
| `person` | `/people/:slug` |
| `comment` | `/comments/:id` |
| `list` | `/lists/:id` |

You can also create links using the Trakt, IMDB, TMDB, or TVDB IDs. We recommend using the Trakt ID if possible since that will always have full coverage. If you use the search url without an `id_type` it will return search results if multiple items are found.

| Type | URL |
|---|---|
| `trakt` | `/search/trakt/:id` |
|  | `/search/trakt/:id?id_type=movie` |
|  | `/search/trakt/:id?id_type=show` |
|  | `/search/trakt/:id?id_type=season` |
|  | `/search/trakt/:id?id_type=episode` |
|  | `/search/trakt/:id?id_type=person` |
| `imdb` | `/search/imdb/:id` |
| `tmdb` | `/search/tmdb/:id` |
|  | `/search/tmdb/:id?id_type=movie` |
|  | `/search/tmdb/:id?id_type=show` |
|  | `/search/tmdb/:id?id_type=episode` |
|  | `/search/tmdb/:id?id_type=person` |
| `tvdb` | `/search/tvdb/:id` |
|  | `/search/tvdb/:id?id_type=show` |
|  | `/search/tvdb/:id?id_type=episode` |

# Third Party Libraries

All of the libraries listed below are user contributed. If you find a bug or missing feature, please contact the developer directly. These might help give your project a head start, but we can't provide direct support for any of these libraries. Please help us keep this list up to date.

| Language | Name | Repository |
|---|---|---|
| `C#` | `Trakt.NET` | https://github.com/henrikfroehling/Trakt.NET |
|  | `TraktSharp` | https://github.com/wwarby/TraktSharp |
| `C++` | `libtraqt` | https://github.com/RobertMe/libtraqt |
| `Clojure` | `clj-trakt` | https://github.com/niamu/clj-trakt |
| `Java` | `trakt-java` | https://github.com/UweTrottmann/trakt-java |
| `Node.js` | `Trakt.tv` | https://github.com/vankasteelj/trakt.tv |
|  | `TraktApi2` | https://github.com/PatrickE94/traktapi2 |
| `Python` | `trakt.py` | https://github.com/fuzeman/trakt.py |
|  | `pyTrakt` | https://github.com/moogar0880/PyTrakt |
| `R` | `tRakt` | https://github.com/jemus42/tRakt |
| `React Native` | `nodeless-trakt` | https://github.com/kdemoya/nodeless-trakt |
| `Ruby` | `omniauth-trakt` | https://github.com/wafcio/omniauth-trakt |
|  | `omniauth-trakt` | https://github.com/alextakitani/omniauth-trakt |
| `Swift` | `TraktKit` | https://github.com/MaxHasADHD/TraktKit |
|  | `AKTrakt` | https://github.com/arsonik/AKTrakt |

# Terminology

Trakt has a lot of features and here's a chart to help explain the differences between some of them.

| Term | Description |
|---|---|
| `scrobble` | Automatic way to track what a user is watching in a media center. |
| `checkin` | Manual action used by mobile apps allowing the user to indicate what they are watching right now. |
| `history` | All watched items (scrobbles, checkins, watched) for a user. |
| `collection` | Items a user has available to watch including Blu-Rays, DVDs, and digital downloads. |
| `watchlist` | Items a user wants to watch in the future. Once watched, they are auto removed from this list. |
| `list` | Personal list for any purpose. Items are not auto removed from any personal lists. |
| `recommendations` | Movies and TV shows a user personally recommends to others. |

Base URLs:

* <a href="https://api.trakt.tv">https://api.trakt.tv</a>

# Authentication

- oAuth2 authentication.

    - Flow: authorizationCode
    - Authorization URL = [/](/)
    - Token URL = [/](/)

<h1 id="trakt-api-authentication---oauth">Authentication - OAuth</h1>

The API uses OAuth2.  If you know what's up with OAuth2, grab your library and starting rolling. If you have access to a web browser (mobile app, desktop app, website), use standard **OAuth**. If you don't have web browser access (media center plugins, smart watches, smart TVs, command line scripts, system services), use **Device** authentication.

To obtain a `client_id` and `client_secret`, create an application on the Trakt website. Here are some helpful links to get your started:

- [Create a new API app](https://trakt.tv/oauth/applications/new)

- [View your API apps](https://trakt.tv/oauth/applications)

---

#### Application Flow

1. **Redirect to request Trakt access.** Using the [**/oauth/authorize**](/reference/authentication-oauth/authorize) method, construct then redirect to this URL. The Trakt website will request permissions for your app and the user will have the opportunity to sign up for a new Trakt account or sign in with their existing account.

2. **Trakt redirects back to your site.** If the user accepts your request, Trakt redirects back to your site with a temporary code in a `code` GET parameter as well as the state (if provided) in the previous step in a `state` parameter. If the states don’t match, the request has been created by a third party and the process should be aborted.

3. **Exchange the code for an access token.** If everything looks good in step 2, exchange the `code` for an access token using the [**/oauth/token**](reference/authentication-oauth/get-token/) method. Save the `access_token` so your app can authenticate the user by sending the `Authorization` header as indicated below or in any example code. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate.

## Authorize Application

<a id="opIdAuthorize Application"></a>

> Code samples

```bash
curl 'https://example.com/oauth/authorize?response_type=code&client_id=%20&redirect_uri=%20' \
  -H 'Content-Type: application/json' \
  -d '"string"'
```

`GET /oauth/authorize`

Construct then redirect to this URL. The Trakt website will request permissions for your app, which the user needs to approve. If the user isn't signed into Trakt, it will ask them to do so. Send `signup=true` if you prefer the account sign up page to be the default.

**Note:** You should use the normal **https://trakt.tv** hostname when creating this URL and not the API URL.

> Body parameter

```json
"string"
```

<h3 id="authorize-application-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|response_type|query|string|true|Must be set to code.|
|client_id|query|string|true|Get this from your app settings.|
|redirect_uri|query|string|true|URI specified in your app settings.|
|state|query|string|false|State variable for CSRF purposes.|
|body|body|string|false|Default to the sign up page.|

<h3 id="authorize-application-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Revoke an access_token

<a id="opIdRevoke an access_token"></a>

> Code samples

```bash
curl https://example.com/oauth/revoke \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_id": "9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f",
    "client_secret": "d6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2",
    "token": "fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0"
  }'
```

`POST /oauth/revoke`

An `access_token` can be revoked when a user signs out of their Trakt account in your app. This is not required, but might improve the user experience so the user doesn't have an unused app connection hanging around.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `token` <span style="color:red;">*</a> | string | A valid OAuth `access_token`. |
| `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |
| `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |

> Body parameter

```json
{
  "client_id": "9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f",
  "client_secret": "d6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2",
  "token": "fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0"
}
```

<h3 id="revoke-an-accesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» token|body|string|false|none|

> Example responses

> 200 Response

```json
{}
```

<h3 id="revoke-an-accesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Exchange refresh_token for access_token

<a id="opIdExchange refresh_token for access_token"></a>

> Code samples

```bash
curl https://example.com/oauth/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_id": "9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f",
    "client_secret": "d6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2",
    "grant_type": "refresh_token",
    "redirect_uri": "urn:ietf:wg:oauth:2.0:oob",
    "refresh_token": "fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0"
  }'
```

`POST /oauth/token`

Use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. The `access_token` is valid for 3 months before it needs to be refreshed again.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `refresh_token` <span style="color:red;">*</a> | string | Saved from the initial token method. |
| `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |
| `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |
| `redirect_uri` <span style="color:red;">*</a> | string | URI specified in your app settings. |
| `grant_type` <span style="color:red;">* </a> | string | `refresh_token` |

> Body parameter

```json
{
  "client_id": "9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f",
  "client_secret": "d6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2",
  "grant_type": "refresh_token",
  "redirect_uri": "urn:ietf:wg:oauth:2.0:oob",
  "refresh_token": "fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0"
}
```

<h3 id="exchange-refreshtoken-for-accesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» grant_type|body|string|false|none|
|» redirect_uri|body|string|false|none|
|» refresh_token|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "dbaf9757982a9e738f05d249b7b5b4a266b3a139049317c4909f2f263572c781",
  "created_at": 1487889741,
  "expires_in": 7200,
  "refresh_token": "76ba4c5c75c96f6087f58a4de10be6c00b29ea1ddc3b2022ee2016d1363e3a7c",
  "scope": "public",
  "token_type": "bearer"
}
```

> 401 Response

```json
{
  "error": "invalid_grant",
  "error_description": "The provided authorization grant is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client."
}
```

<h3 id="exchange-refreshtoken-for-accesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|If the `refresh_token` is valid, you'll get the `access_token` back.|None|
|401|Unauthorized|If the `refresh_token` is invalid, you'll get a `401` error.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-authentication---devices">Authentication - Devices</h1>

Device authentication is for apps and services with limited input or display capabilities. This include media center plugins, smart watches, smart TVs, command line scripts, and system services.

Your app displays an alphanumeric code (typically 8 characters) to the user. They are then instructed to visit the verification URL on their computer or mobile device. After entering the code, the user will be prompted to grant permission for your app. After your app gets permissions, the device receives an `access_token` and works like standard OAuth from that point on. More details below.

---

#### Application Flow

1. **Generate codes.** Your app calls [**/oauth/device/code**](/reference/authentication-devices/code) to generate new codes. Save this entire response for later use.

2. **Display the code.** Display the `user_code` and instruct the user to visit the `verification_url` on their computer or mobile device.

3. **Poll for authorization.** Poll the [**/oauth/device/token**](/reference/authentication-devices/token) method to see if the user successfully authorizes your app. Use the `device_code` and poll at the `interval` (in seconds) to check if the user has authorized your app. Check the docs below for the specific error codes you need to handle. Use `expires_in` to stop polling after that many seconds, and gracefully instruct the user to restart the process. **It is important to poll at the correct interval and also stop polling when expired.**

4. **Successful authorization.** When you receive a `200` success response, save the `access_token` so your app can authenticate the user in methods that require it. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. It's normal OAuth from this point.

---

#### User Flow

1. **Call to action.** Consider your user experience when asking a user to connect their Trakt account. For some devices this will be right away, and for others it might be later in the experience.

2. **Display the code.** When a user clicks the call to action, your app calls [**/oauth/device/code**](/reference/authentication-devices/code) to generate new codes. In your UI, display the `user_code` and instruct the user to visit the `verification_url` on their computer or mobile device. The `user_code` is typically 8 characters, so make sure there is enough room to display the full code.

3. **Authorizing your app.** When the user visits the `verification_url` it first checks to make sure they're signed in. If not signed in, they'll be able to or can sign up for a new account. After entering the code, the user will be prompted to grant permission for your app. Once approved, the user will see a success message indicating their device is connected.

4. **Confirm successful authorization.** Your app will be polling to see if the user successfully authorizes your app. Once they have, refresh your UI to indicate a successful connection has been made.

## Generate new device codes

<a id="opIdGenerate new device codes"></a>

> Code samples

```bash
curl https://example.com/oauth/device/code \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_id": "9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f"
  }'
```

`POST /oauth/device/code`

Generate new codes to start the device authentication process. The `device_code` and `interval` will be used later to poll for the `access_token`. The `user_code` and `verification_url` should be presented to the user as mentioned in the flow steps above.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |

> Body parameter

```json
{
  "client_id": "9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f"
}
```

<h3 id="generate-new-device-codes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "device_code": "d9c126a7706328d808914cfd1e40274b6e009f684b1aca271b9b3f90b3630d64",
  "expires_in": 600,
  "interval": 5,
  "user_code": "5055CC52",
  "verification_url": "https://trakt.tv/activate"
}
```

<h3 id="generate-new-device-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Poll for the access_token

<a id="opIdPoll for the access_token"></a>

> Code samples

```bash
curl https://example.com/oauth/device/token \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "client_id": "9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f",
    "client_secret": "d6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2",
    "code": "fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0"
  }'
```

`POST /oauth/device/token`

Use the `device_code` and poll at the `interval` (in seconds) to check if the user has authorized you app. Use `expires_in` to stop polling after that many seconds, and gracefully instruct the user to restart the process. **It is important to poll at the correct interval and also stop polling when expired.**

When you receive a `200` success response, save the `access_token` so your app can authenticate the user in methods that require it. The `access_token` is valid for 3 months. Save and use the `refresh_token` to get a new `access_token` without asking the user to re-authenticate. Check below for all the error codes that you should handle.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `code` <span style="color:red;">*</a> | string | `device_code` from the initial method. |
| `client_id` <span style="color:red;">*</a> | string | Get this from your app settings. |
| `client_secret` <span style="color:red;">*</a> | string | Get this from your app settings. |

####  Status Codes

This method will send various HTTP status codes that you should handle accordingly.

| Code | Description |
|---|---|
| `200` | Success - *save the `access_token`*
| `400` | Pending - *waiting for the user to authorize your app*
| `404` | Not Found - *invalid `device_code`*
| `409` | Already Used - *user already approved this code*
| `410` | Expired - *the tokens have expired, restart the process*
| `418` | Denied - *user explicitly denied this code*
| `429` | Slow Down - *your app is polling too quickly*

> Body parameter

```json
{
  "client_id": "9b36d8c0db59eff5038aea7a417d73e69aea75b41aac771816d2ef1b3109cc2f",
  "client_secret": "d6ea27703957b69939b8104ed4524595e210cd2e79af587744a7eb6e58f5b3d2",
  "code": "fd0847dbb559752d932dd3c1ac34ff98d27b11fe2fea5a864f44740cd7919ad0"
}
```

<h3 id="poll-for-the-accesstoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|none|
|» client_secret|body|string|false|none|
|» code|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "access_token": "dbaf9757982a9e738f05d249b7b5b4a266b3a139049317c4909f2f263572c781",
  "created_at": 1487889741,
  "expires_in": 7200,
  "refresh_token": "76ba4c5c75c96f6087f58a4de10be6c00b29ea1ddc3b2022ee2016d1363e3a7c",
  "scope": "public",
  "token_type": "bearer"
}
```

<h3 id="poll-for-the-accesstoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-calendars">Calendars</h1>

By default, the calendar will return all shows or movies for the specified time period and can be global or user specific. The `start_date` defaults to today and `days` to 7. The maximum amount of `days` you can send is `33`. All dates (including the `start_date` and `first_aired`) are in UTC, so it's up to your app to handle any offsets based on the user's time zone.

The `my` calendar displays episodes for all shows that have been watched, collected, or watchlisted plus individual episodes on the watchlist. It will remove any shows that have been hidden from the calendar. The `all` calendar displays info for all shows airing during the specified period.

## Get DVD releases

> Code samples

```bash
curl https://example.com/calendars/all/dvd/2014-09-01/7 \
  -H 'Accept: application/json'
```

`GET /calendars/all/dvd/{start_date}/{days}`

#### &#10024; Extended Info &#127898; Filters

Returns all movies with a DVD release date during the time period specified.

<h3 id="get-dvd-releases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "released": "2014-08-01"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt2473602",
        "slug": "get-on-up-2014",
        "tmdb": 239566,
        "trakt": 29
      },
      "title": "Get On Up",
      "year": 2014
    },
    "released": "2014-08-01"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt1291150",
        "slug": "teenage-mutant-ninja-turtles-2014",
        "tmdb": 98566,
        "trakt": 30
      },
      "title": "Teenage Mutant Ninja Turtles",
      "year": 2014
    },
    "released": "2014-08-08"
  }
]
```

<h3 id="get-dvd-releases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get movies

> Code samples

```bash
curl https://example.com/calendars/all/movies/2014-09-01/7 \
  -H 'Accept: application/json'
```

`GET /calendars/all/movies/{start_date}/{days}`

#### &#10024; Extended Info &#127898; Filters

Returns all movies with a release date during the time period specified.

<h3 id="get-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "released": "2014-08-01"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt2473602",
        "slug": "get-on-up-2014",
        "tmdb": 239566,
        "trakt": 29
      },
      "title": "Get On Up",
      "year": 2014
    },
    "released": "2014-08-01"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt1291150",
        "slug": "teenage-mutant-ninja-turtles-2014",
        "tmdb": 98566,
        "trakt": 30
      },
      "title": "Teenage Mutant Ninja Turtles",
      "year": 2014
    },
    "released": "2014-08-08"
  }
]
```

<h3 id="get-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get new shows

> Code samples

```bash
curl https://example.com/calendars/all/shows/new/2014-09-01/7 \
  -H 'Accept: application/json'
```

`GET /calendars/all/shows/new/{start_date}/{days}`

#### &#10024; Extended Info &#127898; Filters

Returns all new show premieres (season 1, episode 1) airing during the time period specified.

<h3 id="get-new-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt3203968",
        "tmdb": 983732,
        "trakt": 497,
        "tvdb": null
      },
      "number": 1,
      "season": 1,
      "title": "Pilot"
    },
    "first_aired": "2014-06-30T02:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt2699128",
        "slug": "the-leftovers",
        "tmdb": 54344,
        "trakt": 7,
        "tvdb": 269689
      },
      "title": "The Leftovers",
      "year": 2014
    }
  }
]
```

<h3 id="get-new-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get season premieres

> Code samples

```bash
curl https://example.com/calendars/all/shows/premieres/2014-09-01/7 \
  -H 'Accept: application/json'
```

`GET /calendars/all/shows/premieres/{start_date}/{days}`

#### &#10024; Extended Info &#127898; Filters

Returns all show premieres (any season, episode 1) airing during the time period specified.

<h3 id="get-season-premieres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt3203968",
        "tmdb": 983732,
        "trakt": 497,
        "tvdb": null
      },
      "number": 1,
      "season": 1,
      "title": "Pilot"
    },
    "first_aired": "2014-06-30T02:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt2699128",
        "slug": "the-leftovers",
        "tmdb": 54344,
        "trakt": 7,
        "tvdb": 269689
      },
      "title": "The Leftovers",
      "year": 2014
    }
  },
  {
    "episode": {
      "ids": {
        "imdb": "",
        "tmdb": 975949,
        "trakt": 163,
        "tvdb": null
      },
      "number": 1,
      "season": 5,
      "title": "5x1"
    },
    "first_aired": "2014-10-13T01:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    }
  }
]
```

<h3 id="get-season-premieres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get shows

> Code samples

```bash
curl https://example.com/calendars/all/shows/2014-09-01/7 \
  -H 'Accept: application/json'
```

`GET /calendars/all/shows/{start_date}/{days}`

#### &#10024; Extended Info &#127898; Filters

Returns all shows airing during the time period specified.

<h3 id="get-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt3500614",
        "tmdb": 988123,
        "trakt": 443,
        "tvdb": 4851180
      },
      "number": 4,
      "season": 7,
      "title": "Death is Not the End"
    },
    "first_aired": "2014-07-14T01:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt0844441",
        "slug": "true-blood",
        "tmdb": 10545,
        "trakt": 5,
        "tvdb": 82283
      },
      "title": "True Blood",
      "year": 2008
    }
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt3631218",
        "tmdb": 988346,
        "trakt": 499,
        "tvdb": 4854797
      },
      "number": 3,
      "season": 1,
      "title": "Two Boats and a Helicopter"
    },
    "first_aired": "2014-07-14T02:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt2699128",
        "slug": "the-leftovers",
        "tmdb": 54344,
        "trakt": 7,
        "tvdb": 269689
      },
      "title": "The Leftovers",
      "year": 2014
    }
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt3500616",
        "tmdb": 988124,
        "trakt": 444,
        "tvdb": 4851181
      },
      "number": 5,
      "season": 7,
      "title": "Return to Oz"
    },
    "first_aired": "2014-07-21T01:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt0844441",
        "slug": "true-blood",
        "tmdb": 10545,
        "trakt": 5,
        "tvdb": 82283
      },
      "title": "True Blood",
      "year": 2008
    }
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt3594942",
        "tmdb": 988347,
        "trakt": 500,
        "tvdb": 4854798
      },
      "number": 4,
      "season": 1,
      "title": "B.J. and the A.C."
    },
    "first_aired": "2014-07-21T02:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt2699128",
        "slug": "the-leftovers",
        "tmdb": 54344,
        "trakt": 7,
        "tvdb": 269689
      },
      "title": "The Leftovers",
      "year": 2014
    }
  }
]
```

<h3 id="get-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get DVD releases

<a id="opIdGet DVD releases"></a>

> Code samples

```bash
curl https://example.com/calendars/my/dvd/2014-09-01/7 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/my/dvd/{start_date}/{days}`

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters

Returns all movies with a DVD release date during the time period specified.

<h3 id="get-dvd-releases-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "released": "2014-08-01"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt2473602",
        "slug": "get-on-up-2014",
        "tmdb": 239566,
        "trakt": 29
      },
      "title": "Get On Up",
      "year": 2014
    },
    "released": "2014-08-01"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt1291150",
        "slug": "teenage-mutant-ninja-turtles-2014",
        "tmdb": 98566,
        "trakt": 30
      },
      "title": "Teenage Mutant Ninja Turtles",
      "year": 2014
    },
    "released": "2014-08-08"
  }
]
```

<h3 id="get-dvd-releases-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get movies

<a id="opIdGet movies"></a>

> Code samples

```bash
curl https://example.com/calendars/my/movies/2014-09-01/7 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/my/movies/{start_date}/{days}`

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters

Returns all movies with a release date during the time period specified.

<h3 id="get-movies-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "released": "2014-08-01"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt2473602",
        "slug": "get-on-up-2014",
        "tmdb": 239566,
        "trakt": 29
      },
      "title": "Get On Up",
      "year": 2014
    },
    "released": "2014-08-01"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt1291150",
        "slug": "teenage-mutant-ninja-turtles-2014",
        "tmdb": 98566,
        "trakt": 30
      },
      "title": "Teenage Mutant Ninja Turtles",
      "year": 2014
    },
    "released": "2014-08-08"
  }
]
```

<h3 id="get-movies-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get new shows

<a id="opIdGet new shows"></a>

> Code samples

```bash
curl https://example.com/calendars/my/shows/new/2014-09-01/7 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/my/shows/new/{start_date}/{days}`

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters

Returns all new show premieres (season 1, episode 1) airing during the time period specified.

<h3 id="get-new-shows-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt3203968",
        "tmdb": 983732,
        "trakt": 497,
        "tvdb": null
      },
      "number": 1,
      "season": 1,
      "title": "Pilot"
    },
    "first_aired": "2014-06-30T02:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt2699128",
        "slug": "the-leftovers",
        "tmdb": 54344,
        "trakt": 7,
        "tvdb": 269689
      },
      "title": "The Leftovers",
      "year": 2014
    }
  }
]
```

<h3 id="get-new-shows-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get season premieres

<a id="opIdGet season premieres"></a>

> Code samples

```bash
curl https://example.com/calendars/my/shows/premieres/2014-09-01/7 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/my/shows/premieres/{start_date}/{days}`

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters

Returns all show premieres (any season, episode 1) airing during the time period specified.

<h3 id="get-season-premieres-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt3203968",
        "tmdb": 983732,
        "trakt": 497,
        "tvdb": null
      },
      "number": 1,
      "season": 1,
      "title": "Pilot"
    },
    "first_aired": "2014-06-30T02:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt2699128",
        "slug": "the-leftovers",
        "tmdb": 54344,
        "trakt": 7,
        "tvdb": 269689
      },
      "title": "The Leftovers",
      "year": 2014
    }
  },
  {
    "episode": {
      "ids": {
        "imdb": "",
        "tmdb": 975949,
        "trakt": 163,
        "tvdb": null
      },
      "number": 1,
      "season": 5,
      "title": "5x1"
    },
    "first_aired": "2014-10-13T01:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    }
  }
]
```

<h3 id="get-season-premieres-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get shows

<a id="opIdGet shows"></a>

> Code samples

```bash
curl https://example.com/calendars/my/shows/2014-09-01/7 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /calendars/my/shows/{start_date}/{days}`

#### &#128274; OAuth Required &#10024; Extended Info &#127898; Filters

Returns all shows airing during the time period specified.

<h3 id="get-shows-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Start the calendar on this date.|
|days|path|integer|true|Number of days to display.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt3500614",
        "tmdb": 988123,
        "trakt": 443,
        "tvdb": 4851180
      },
      "number": 4,
      "season": 7,
      "title": "Death is Not the End"
    },
    "first_aired": "2014-07-14T01:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt0844441",
        "slug": "true-blood",
        "tmdb": 10545,
        "trakt": 5,
        "tvdb": 82283
      },
      "title": "True Blood",
      "year": 2008
    }
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt3631218",
        "tmdb": 988346,
        "trakt": 499,
        "tvdb": 4854797
      },
      "number": 3,
      "season": 1,
      "title": "Two Boats and a Helicopter"
    },
    "first_aired": "2014-07-14T02:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt2699128",
        "slug": "the-leftovers",
        "tmdb": 54344,
        "trakt": 7,
        "tvdb": 269689
      },
      "title": "The Leftovers",
      "year": 2014
    }
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt3500616",
        "tmdb": 988124,
        "trakt": 444,
        "tvdb": 4851181
      },
      "number": 5,
      "season": 7,
      "title": "Return to Oz"
    },
    "first_aired": "2014-07-21T01:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt0844441",
        "slug": "true-blood",
        "tmdb": 10545,
        "trakt": 5,
        "tvdb": 82283
      },
      "title": "True Blood",
      "year": 2008
    }
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt3594942",
        "tmdb": 988347,
        "trakt": 500,
        "tvdb": 4854798
      },
      "number": 4,
      "season": 1,
      "title": "B.J. and the A.C."
    },
    "first_aired": "2014-07-21T02:00:00.000Z",
    "show": {
      "ids": {
        "imdb": "tt2699128",
        "slug": "the-leftovers",
        "tmdb": 54344,
        "trakt": 7,
        "tvdb": 269689
      },
      "title": "The Leftovers",
      "year": 2014
    }
  }
]
```

<h3 id="get-shows-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-End-Date|string||none|
|200|X-Start-Date|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="trakt-api-checkin">Checkin</h1>

Checking in is a manual action used by mobile apps allowing the user to indicate what they are watching right now. While not as effortless as scrobbling, checkins help fill in the gaps. You might be watching live tv, at a friend's house, or watching a movie in theaters. You can simply checkin from your phone or tablet in those situations. The item will display as *watching* on the site, then automatically switch to *watched* status once the duration has elapsed.

## Check into an item

<a id="opIdCheck into an item"></a>

> Code samples

```bash
curl https://example.com/checkin \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "app_date": "2014-09-22",
    "app_version": "1.0",
    "message": "Guardians of the Galaxy FTW!",
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "sharing": {
      "tumblr": false,
      "twitter": true
    }
  }'
```

`POST /checkin`

#### &#128274; OAuth Required

Check into a movie or episode. This should be tied to a user action to manually indicate they are watching something. The item will display as *watching* on the site, then automatically switch to *watched* status once the duration has elapsed. A unique history `id` (64-bit integer) will be returned and can be used to reference this checkin directly.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |
| `sharing`  | object | Control sharing to any connected social networks. (see below &#8595;) |
| `message`  | string | Message used for sharing. If not sent, it will use the watching string in the user settings. |
| `venue_id` | string | Foursquare venue ID. |
| `venue_name` | string | Foursquare venue name. |
| `app_version` | string | Version number of the app. |
| `app_date` | string | Build date of the app. |

#### Sharing

The `sharing` object is optional and will apply the user's settings if not sent. If `sharing` is sent, each key will override the user's setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [**/users/settings**](/reference/users/settings) method.

| Key | Type |
|---|---|
| `twitter` | boolean |
| `tumblr` | boolean |

**Note:** If a checkin is already in progress, a `409` HTTP status code will returned. The response will contain an `expires_at` timestamp which is when the user can check in again.

> Body parameter

```json
{
  "app_date": "2014-09-22",
  "app_version": "1.0",
  "message": "Guardians of the Galaxy FTW!",
  "movie": {
    "ids": {
      "imdb": "tt2015381",
      "slug": "guardians-of-the-galaxy-2014",
      "tmdb": 118340,
      "trakt": 28
    },
    "title": "Guardians of the Galaxy",
    "year": 2014
  },
  "sharing": {
    "tumblr": false,
    "twitter": true
  }
}
```

<h3 id="check-into-an-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» app_date|body|string|false|none|
|» app_version|body|string|false|none|
|» message|body|string|false|none|
|» movie|body|object|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» sharing|body|object|false|none|
|» » tumblr|body|boolean|false|none|
|» » twitter|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "episode": {
    "ids": {
      "imdb": null,
      "tmdb": null,
      "trakt": 856373,
      "tvdb": 362082
    },
    "number": 21,
    "season": 9,
    "title": "Light the Fire of Shandia! Wiper the Warrior"
  },
  "id": 3373536622,
  "sharing": {
    "tumblr": false,
    "twitter": true
  },
  "show": {
    "ids": {
      "imdb": "tt0388629",
      "slug": "one-piece",
      "tmdb": 37854,
      "trakt": 37696,
      "tvdb": 81797
    },
    "title": "One Piece",
    "year": 1999
  },
  "watched_at": "2019-01-20T06:54:36.859Z"
}
```

> 409 Response

```json
{
  "expires_at": "2014-10-15T22:21:29.000Z"
}
```

<h3 id="check-into-an-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|409|Conflict|There is already a checkin in progress.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2, oauth2, oauth2, oauth2
</aside>

## Delete any active checkins

<a id="opIdDelete any active checkins"></a>

> Code samples

```bash
curl https://example.com/checkin \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /checkin`

#### &#128274; OAuth Required

Removes any active checkins, no need to provide a specific item.

<h3 id="delete-any-active-checkins-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

<h3 id="delete-any-active-checkins-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="trakt-api-certifications">Certifications</h1>

## Get certifications

<a id="opIdGet certifications"></a>

> Code samples

```bash
curl https://example.com/certifications/movies \
  -H 'Accept: application/json'
```

`GET /certifications/{type}`

Get a list of all certifications, including names, slugs, and descriptions.

<h3 id="get-certifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|

> Example responses

> 200 Response

```json
{
  "us": [
    {
      "description": "All Ages",
      "name": "G",
      "slug": "g"
    },
    {
      "description": "Parental Guidance Suggested",
      "name": "PG",
      "slug": "pg"
    },
    {
      "description": "Parents Strongly Cautioned - Ages 13+ Recommended",
      "name": "PG-13",
      "slug": "pg-13"
    },
    {
      "description": "Mature Audiences - Ages 17+ Recommended",
      "name": "R",
      "slug": "r"
    },
    {
      "description": "Not Rated",
      "name": "Not Rated",
      "slug": "nr"
    }
  ]
}
```

<h3 id="get-certifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-comments">Comments</h1>

Comments are attached to any movie, show, season, episode, or list and can be a quick shout or a more detailed review. Each comment can have replies and can be liked. These likes are used to determine popular comments. Comments must follow these rules and your app should indicate these to the user. Failure to adhere to these rules could suspend the user's commenting abilities.

- Comments must be at least 5 words.

- Comments 200 words or longer will be automatically marked as a review.

- Correctly indicate if the comment contains spoilers.

- Only write comments in English - **This is important!**

- **Do not include** app specific text like (via App Name) or #apphashtag. This clutters up the comments and failure to clean the comment text could get your app blacklisted from commenting.

#### Possible Error Responses

| Code | Description |
|---|---|
| `401` | Invalid user
| `401` | User banned from commenting
| `404` | Item not found or doesn't allow comments
| `409` | Comment can't be deleted
| `422` | Validation errors

#### Validation Errors

If a comment doesn't pass validation, it returns a `422` HTTP error code and an array of validation errors in the response. The validation errors could include:

| Error Message |
|---|
| `must be at least 5 words` |
| `must be written in English` |

#### Comment Formatting

Comments support [**markdown**](https://en.wikipedia.org/wiki/Markdown) formatting so you'll want to render this in your app so it matches what the website does. In addition, we support inline spoiler tags like `[spoiler]text[/spoiler]` which you should also handle independent of the top level `spoiler` attribute.

## Post a comment

<a id="opIdPost a comment"></a>

> Code samples

```bash
curl https://example.com/comments \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "Oh, I wasn'\''t really listening.",
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "sharing": {
      "medium": true,
      "tumblr": false,
      "twitter": true
    },
    "spoiler": false
  }'
```

`POST /comments`

#### &#128274; OAuth Required &#128513; Emojis

Add a new comment to a movie, show, season, episode, or list. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.

#### JSON POST Data

| Key | Type | Default | Value |
|---|---|---|---|
| item <span style="color:red;">*</a> | object | | `movie`, `show`, `season`, `episode`, or `list` object. (see examples &#8594;) |
| `comment` <span style="color:red;">*</a> | string |  | Text for the comment. |
| `spoiler` | boolean | `false` | Is this a spoiler? |
| `sharing`  | object | | Control sharing to any connected social networks. (see below &#8595;) |

#### Sharing

The `sharing` object is optional and will apply the user's settings if not sent. If `sharing` is sent, each key will override the user's setting for that social network. Send `true` to post or `false` to not post on the indicated social network. You can see which social networks a user has connected with the [**/users/settings**](/reference/users/settings) method.

| Key | Type |
|---|---|
| `twitter` | boolean |
| `tumblr` | boolean |
| `medium` | boolean |

> Body parameter

```json
{
  "comment": "Oh, I wasn't really listening.",
  "movie": {
    "ids": {
      "imdb": "tt2015381",
      "slug": "guardians-of-the-galaxy-2014",
      "tmdb": 118340,
      "trakt": 28
    },
    "title": "Guardians of the Galaxy",
    "year": 2014
  },
  "sharing": {
    "medium": true,
    "tumblr": false,
    "twitter": true
  },
  "spoiler": false
}
```

<h3 id="post-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» comment|body|string|false|none|
|» movie|body|object|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» sharing|body|object|false|none|
|» » medium|body|boolean|false|none|
|» » tumblr|body|boolean|false|none|
|» » twitter|body|boolean|false|none|
|» spoiler|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "comment": "I want candy.",
  "created_at": "2014-08-04T06:46:01.000Z",
  "id": 190,
  "likes": 0,
  "parent_id": 0,
  "replies": 0,
  "review": false,
  "spoiler": false,
  "updated_at": "2014-08-04T06:46:01.000Z",
  "user": {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  },
  "user_stats": {
    "completed_count": 1,
    "play_count": 1,
    "rating": null
  }
}
```

<h3 id="post-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2, oauth2, oauth2, oauth2, oauth2
</aside>

## Get recently created comments

<a id="opIdGet recently created comments"></a>

> Code samples

```bash
curl https://example.com/comments/recent/all/all \
  -H 'Accept: application/json'
```

`GET /comments/recent/{comment_type}/{type}`

#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis

Returns the most recently written comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.

<h3 id="get-recently-created-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|comment_type|path|string|true|none|
|type|path|string|true|none|
|include_replies|query|string|false|include comment replies|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|comment_type|all|
|comment_type|reviews|
|comment_type|shouts|
|type|all|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|
|type|lists|

> Example responses

> 200 Response

```json
[
  {
    "comment": {
      "comment": "Great kickoff to a new Batman trilogy!",
      "created_at": "2015-04-25T00:14:57.000Z",
      "id": 267,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-25T00:14:57.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 10
      }
    },
    "movie": {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    "type": "movie"
  },
  {
    "comment": {
      "comment": "Skyler, I AM THE DANGER.",
      "created_at": "2015-02-18T06:02:30.000Z",
      "id": 199,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-02-18T06:02:30.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 10
      }
    },
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "show"
  },
  {
    "comment": {
      "comment": "Kicking off season 1 for a new Batman show.",
      "created_at": "2015-04-21T06:53:25.000Z",
      "id": 220,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-21T06:53:25.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 8
      }
    },
    "season": {
      "ids": {
        "tmdb": 60394,
        "trakt": 3958,
        "tvdb": 274431
      },
      "number": 1
    },
    "show": {
      "ids": {
        "imdb": "tt3749900",
        "slug": "gotham",
        "tmdb": 60708,
        "trakt": 869,
        "tvdb": 274431
      },
      "title": "Gotham",
      "year": 2014
    },
    "type": "season"
  },
  {
    "comment": {
      "comment": "Is this the OC?",
      "created_at": "2015-04-21T15:42:31.000Z",
      "id": 229,
      "likes": 0,
      "parent_id": 0,
      "replies": 1,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-21T15:42:31.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 7
      }
    },
    "episode": {
      "ids": {
        "imdb": "tt3216414",
        "tmdb": 975968,
        "trakt": 63958,
        "tvdb": 4768720
      },
      "number": 1,
      "season": 1,
      "title": "Jim Gordon"
    },
    "show": {
      "ids": {
        "imdb": "tt3749900",
        "slug": "gotham",
        "tmdb": 60708,
        "trakt": 869,
        "tvdb": 274431
      },
      "title": "Gotham",
      "year": 2014
    },
    "type": "episode"
  },
  {
    "comment": {
      "comment": "May the 4th be with you!",
      "created_at": "2014-12-08T17:34:51.000Z",
      "id": 268,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2014-12-08T17:34:51.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": null
      }
    },
    "list": {
      "allow_comments": true,
      "comment_count": 0,
      "description": "The complete Star Wars saga!",
      "display_numbers": false,
      "ids": {
        "slug": "star-wars",
        "trakt": 51
      },
      "item_count": 8,
      "likes": 0,
      "name": "Star Wars",
      "privacy": "public",
      "updated_at": "2015-04-22T22:01:39.000Z"
    },
    "type": "list"
  }
]
```

<h3 id="get-recently-created-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get trending comments

<a id="opIdGet trending comments"></a>

> Code samples

```bash
curl https://example.com/comments/trending/all/all \
  -H 'Accept: application/json'
```

`GET /comments/trending/{comment_type}/{type}`

#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis

Returns all comments with the most likes and replies over the last 7 days. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.

<h3 id="get-trending-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|comment_type|path|string|true|none|
|type|path|string|true|none|
|include_replies|query|string|false|include comment replies|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|comment_type|all|
|comment_type|reviews|
|comment_type|shouts|
|type|all|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|
|type|lists|

> Example responses

> 200 Response

```json
[
  {
    "comment": {
      "comment": "Great kickoff to a new Batman trilogy!",
      "created_at": "2015-04-25T00:14:57.000Z",
      "id": 267,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-25T00:14:57.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 10
      }
    },
    "movie": {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    "type": "movie"
  },
  {
    "comment": {
      "comment": "Skyler, I AM THE DANGER.",
      "created_at": "2015-02-18T06:02:30.000Z",
      "id": 199,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-02-18T06:02:30.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 10
      }
    },
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "show"
  },
  {
    "comment": {
      "comment": "Kicking off season 1 for a new Batman show.",
      "created_at": "2015-04-21T06:53:25.000Z",
      "id": 220,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-21T06:53:25.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 8
      }
    },
    "season": {
      "ids": {
        "tmdb": 60394,
        "trakt": 3958,
        "tvdb": 274431
      },
      "number": 1
    },
    "show": {
      "ids": {
        "imdb": "tt3749900",
        "slug": "gotham",
        "tmdb": 60708,
        "trakt": 869,
        "tvdb": 274431
      },
      "title": "Gotham",
      "year": 2014
    },
    "type": "season"
  },
  {
    "comment": {
      "comment": "Is this the OC?",
      "created_at": "2015-04-21T15:42:31.000Z",
      "id": 229,
      "likes": 0,
      "parent_id": 0,
      "replies": 1,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-21T15:42:31.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 7
      }
    },
    "episode": {
      "ids": {
        "imdb": "tt3216414",
        "tmdb": 975968,
        "trakt": 63958,
        "tvdb": 4768720
      },
      "number": 1,
      "season": 1,
      "title": "Jim Gordon"
    },
    "show": {
      "ids": {
        "imdb": "tt3749900",
        "slug": "gotham",
        "tmdb": 60708,
        "trakt": 869,
        "tvdb": 274431
      },
      "title": "Gotham",
      "year": 2014
    },
    "type": "episode"
  },
  {
    "comment": {
      "comment": "May the 4th be with you!",
      "created_at": "2014-12-08T17:34:51.000Z",
      "id": 268,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2014-12-08T17:34:51.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": null
      }
    },
    "list": {
      "allow_comments": true,
      "comment_count": 0,
      "description": "The complete Star Wars saga!",
      "display_numbers": false,
      "ids": {
        "slug": "star-wars",
        "trakt": 51
      },
      "item_count": 8,
      "likes": 0,
      "name": "Star Wars",
      "privacy": "public",
      "updated_at": "2015-04-22T22:01:39.000Z"
    },
    "type": "list"
  }
]
```

<h3 id="get-trending-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get recently updated comments

<a id="opIdGet recently updated comments"></a>

> Code samples

```bash
curl https://example.com/comments/updates/all/all \
  -H 'Accept: application/json'
```

`GET /comments/updates/{comment_type}/{type}`

#### &#128196; Pagination &#10024; Extended Info &#128513; Emojis

Returns the most recently updated comments across all of Trakt. You can optionally filter by the `comment_type` and media `type` to limit what gets returned. If you want to `include_replies` that will return replies in place alongside top level comments.

<h3 id="get-recently-updated-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|comment_type|path|string|true|none|
|type|path|string|true|none|
|include_replies|query|string|false|include comment replies|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|comment_type|all|
|comment_type|reviews|
|comment_type|shouts|
|type|all|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|
|type|lists|

> Example responses

> 200 Response

```json
[
  {
    "comment": {
      "comment": "Great kickoff to a new Batman trilogy!",
      "created_at": "2015-04-25T00:14:57.000Z",
      "id": 267,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-25T00:14:57.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 10
      }
    },
    "movie": {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    "type": "movie"
  },
  {
    "comment": {
      "comment": "Skyler, I AM THE DANGER.",
      "created_at": "2015-02-18T06:02:30.000Z",
      "id": 199,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-02-18T06:02:30.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 10
      }
    },
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "show"
  },
  {
    "comment": {
      "comment": "Kicking off season 1 for a new Batman show.",
      "created_at": "2015-04-21T06:53:25.000Z",
      "id": 220,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-21T06:53:25.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 8
      }
    },
    "season": {
      "ids": {
        "tmdb": 60394,
        "trakt": 3958,
        "tvdb": 274431
      },
      "number": 1
    },
    "show": {
      "ids": {
        "imdb": "tt3749900",
        "slug": "gotham",
        "tmdb": 60708,
        "trakt": 869,
        "tvdb": 274431
      },
      "title": "Gotham",
      "year": 2014
    },
    "type": "season"
  },
  {
    "comment": {
      "comment": "Is this the OC?",
      "created_at": "2015-04-21T15:42:31.000Z",
      "id": 229,
      "likes": 0,
      "parent_id": 0,
      "replies": 1,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-21T15:42:31.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 7
      }
    },
    "episode": {
      "ids": {
        "imdb": "tt3216414",
        "tmdb": 975968,
        "trakt": 63958,
        "tvdb": 4768720
      },
      "number": 1,
      "season": 1,
      "title": "Jim Gordon"
    },
    "show": {
      "ids": {
        "imdb": "tt3749900",
        "slug": "gotham",
        "tmdb": 60708,
        "trakt": 869,
        "tvdb": 274431
      },
      "title": "Gotham",
      "year": 2014
    },
    "type": "episode"
  },
  {
    "comment": {
      "comment": "May the 4th be with you!",
      "created_at": "2014-12-08T17:34:51.000Z",
      "id": 268,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2014-12-08T17:34:51.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": null
      }
    },
    "list": {
      "allow_comments": true,
      "comment_count": 0,
      "description": "The complete Star Wars saga!",
      "display_numbers": false,
      "ids": {
        "slug": "star-wars",
        "trakt": 51
      },
      "item_count": 8,
      "likes": 0,
      "name": "Star Wars",
      "privacy": "public",
      "updated_at": "2015-04-22T22:01:39.000Z"
    },
    "type": "list"
  }
]
```

<h3 id="get-recently-updated-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a comment or reply

<a id="opIdGet a comment or reply"></a>

> Code samples

```bash
curl https://example.com/comments/417 \
  -H 'Accept: application/json'
```

`GET /comments/{id}`

####  &#128513; Emojis

Returns a single comment and indicates how many replies it has. Use [**/comments/:id/replies**](/reference/comments/replies/) to get the actual replies.

<h3 id="get-a-comment-or-reply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A specific comment ID.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "comment": "Agreed, this show is awesome. AMC in general has awesome shows.",
  "created_at": "2010-11-03T06:30:13.000Z",
  "id": 1,
  "likes": 0,
  "parent_id": 0,
  "replies": 1,
  "review": false,
  "spoiler": false,
  "user": {
    "ids": {
      "slug": "justin"
    },
    "name": "Justin Nemeth",
    "private": false,
    "username": "justin",
    "vip": true,
    "vip_ep": false
  },
  "user_stats": {
    "completed_count": 1,
    "play_count": 1,
    "rating": 8
  }
}
```

<h3 id="get-a-comment-or-reply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Item-ID|string||none|
|200|X-Item-Type|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a comment or reply

<a id="opIdUpdate a comment or reply"></a>

> Code samples

```bash
curl https://example.com/comments/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "Agreed, this show is awesome. AMC in general has awesome shows and I can'\''t wait to see what they come up with next.",
    "spoiler": false
  }'
```

`PUT /comments/{id}`

#### &#128274; OAuth Required &#128513; Emojis

Update a single comment. The OAuth user must match the author of the comment in order to update it. If not, a `401` HTTP status is returned.

#### JSON POST Data

| Key | Type | Default | Value |
|---|---|---|---|
| `comment` | string |  | Text for the comment. |
| `spoiler` | boolean | `false` | Is this a spoiler? |

> Body parameter

```json
{
  "comment": "Agreed, this show is awesome. AMC in general has awesome shows and I can't wait to see what they come up with next.",
  "spoiler": false
}
```

<h3 id="update-a-comment-or-reply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|
|body|body|object|false|none|
|» comment|body|string|false|none|
|» spoiler|body|boolean|false|none|

> Example responses

> 200 Response

```json
{
  "comment": "Agreed, this show is awesome. AMC in general has awesome shows and I can't wait to see what they come up with next.",
  "created_at": "2010-11-03T06:30:13.000Z",
  "id": 1,
  "likes": 0,
  "parent_id": 0,
  "replies": 1,
  "review": false,
  "spoiler": false,
  "updated_at": "2010-11-13T06:30:13.000Z",
  "user": {
    "ids": {
      "slug": "justin"
    },
    "name": "Justin Nemeth",
    "private": false,
    "username": "justin",
    "vip": true,
    "vip_ep": false
  },
  "user_stats": {
    "completed_count": 1,
    "play_count": 1,
    "rating": null
  }
}
```

<h3 id="update-a-comment-or-reply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Delete a comment or reply

<a id="opIdDelete a comment or reply"></a>

> Code samples

```bash
curl https://example.com/comments/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /comments/{id}`

#### &#128274; OAuth Required

Delete a single comment. The OAuth user must match the author of the comment in order to delete it. If not, a `401` HTTP status code is returned. The comment must also be less than 2 weeks old or have 0 replies. If not, a `409` HTTP status is returned.

<h3 id="delete-a-comment-or-reply-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|

<h3 id="delete-a-comment-or-reply-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get the attached media item

<a id="opIdGet the attached media item"></a>

> Code samples

```bash
curl https://example.com/comments/417/item \
  -H 'Accept: application/json'
```

`GET /comments/{id}/item`

#### &#10024; Extended Info

Returns the media item this comment is attached to. The media type can be `movie`, `show`, `season`, `episode`, or `list` and it also returns the standard media object for that media type.

<h3 id="get-the-attached-media-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A specific comment ID.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "show": {
    "ids": {
      "imdb": "tt0944947",
      "slug": "game-of-thrones",
      "tmdb": 1399,
      "trakt": 353,
      "tvdb": 121361
    },
    "title": "Game of Thrones",
    "year": 2011
  },
  "type": "show"
}
```

<h3 id="get-the-attached-media-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Like a comment

<a id="opIdLike a comment"></a>

> Code samples

```bash
curl https://example.com/comments/417/like \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /comments/{id}/like`

#### &#128274; OAuth Required

Votes help determine popular comments. Only one like is allowed per comment per user.

<h3 id="like-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A specific comment ID.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

<h3 id="like-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove like on a comment

<a id="opIdRemove like on a comment"></a>

> Code samples

```bash
curl https://example.com/comments/string/like \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /comments/{id}/like`

#### &#128274; OAuth Required

Remove a like on a comment.

<h3 id="remove-like-on-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|

<h3 id="remove-like-on-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get all users who liked a comment

<a id="opIdGet all users who liked a comment"></a>

> Code samples

```bash
curl https://example.com/comments/417/likes \
  -H 'Accept: application/json'
```

`GET /comments/{id}/likes`

#### &#128196; Pagination

Returns all users who liked a comment. If you only need the `replies` count, the main `comment` object already has that, so no need to use this method.

<h3 id="get-all-users-who-liked-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|A specific comment ID.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "liked_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  },
  {
    "liked_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-all-users-who-liked-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get replies for a comment

<a id="opIdGet replies for a comment"></a>

> Code samples

```bash
curl https://example.com/comments/417/replies \
  -H 'Accept: application/json'
```

`GET /comments/{id}/replies`

#### &#128196; Pagination &#128513; Emojis

Returns all replies for a comment. It is possible these replies could have replies themselves, so in that case you would just call [**/comments/:id/replies**](/reference/comments/replies/) again with the new comment `id`.

<h3 id="get-replies-for-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A specific comment ID.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Season 2 has really picked up the action!",
    "created_at": "2014-07-27T23:06:59.000Z",
    "id": 19,
    "likes": 0,
    "parent_id": 1,
    "replies": 0,
    "review": false,
    "spoiler": true,
    "updated_at": "2014-07-27T23:06:59.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    },
    "user_stats": {
      "completed_count": 1,
      "play_count": 1,
      "rating": 8
    }
  }
]
```

<h3 id="get-replies-for-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Post a reply for a comment

<a id="opIdPost a reply for a comment"></a>

> Code samples

```bash
curl https://example.com/comments/string/replies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "comment": "Couldn'\''t agree more with your review!",
    "spoiler": false
  }'
```

`POST /comments/{id}/replies`

#### &#128274; OAuth Required &#128513; Emojis

Add a new reply to an existing comment. Make sure to allow and encourage *spoilers* to be indicated in your app and follow the rules listed above.

#### JSON POST Data

| Key | Type | Default | Value |
|---|---|---|---|
| `comment` <span style="color:red;">*</a> | string |  | Text for the reply. |
| `spoiler` | boolean | `false` | Is this a spoiler? |

> Body parameter

```json
{
  "comment": "Couldn't agree more with your review!",
  "spoiler": false
}
```

<h3 id="post-a-reply-for-a-comment-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|
|body|body|object|false|none|
|» comment|body|string|false|none|
|» spoiler|body|boolean|false|none|

> Example responses

> 201 Response

```json
{
  "comment": "Couldn't agree more with your review!",
  "created_at": "2014-09-01T06:30:13.000Z",
  "id": 2,
  "likes": 0,
  "parent_id": 1,
  "replies": 0,
  "review": false,
  "spoiler": false,
  "updated_at": "2014-09-01T06:30:13.000Z",
  "user": {
    "ids": {
      "slug": "justin"
    },
    "name": "Justin Nemeth",
    "private": false,
    "username": "justin",
    "vip": true,
    "vip_ep": false
  },
  "user_stats": {
    "completed_count": 1,
    "play_count": 1,
    "rating": null
  }
}
```

<h3 id="post-a-reply-for-a-comment-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="trakt-api-countries">Countries</h1>

## Get countries

<a id="opIdGet countries"></a>

> Code samples

```bash
curl https://example.com/countries/movies \
  -H 'Accept: application/json'
```

`GET /countries/{type}`

Get a list of all countries, including names and codes.

<h3 id="get-countries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|

> Example responses

> 200 Response

```json
[
  {
    "code": "au",
    "name": "Australia"
  },
  {
    "code": "ja",
    "name": "Japan"
  },
  {
    "code": "us",
    "name": "United States"
  }
]
```

<h3 id="get-countries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-genres">Genres</h1>

## Get genres

<a id="opIdGet genres"></a>

> Code samples

```bash
curl https://example.com/genres/movies \
  -H 'Accept: application/json'
```

`GET /genres/{type}`

Get a list of all genres, including names and slugs.

<h3 id="get-genres-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|

> Example responses

> 200 Response

```json
[
  {
    "name": "Action",
    "slug": "action"
  },
  {
    "name": "Adventure",
    "slug": "adventure"
  },
  {
    "name": "Animation",
    "slug": "animation"
  },
  {
    "name": "Anime",
    "slug": "anime"
  },
  {
    "name": "Comedy",
    "slug": "comedy"
  },
  {
    "name": "Crime",
    "slug": "crime"
  },
  {
    "name": "Disaster",
    "slug": "disaster"
  },
  {
    "name": "Documentary",
    "slug": "documentary"
  },
  {
    "name": "donghua",
    "slug": "Donghua"
  },
  {
    "name": "Drama",
    "slug": "drama"
  },
  {
    "name": "Eastern",
    "slug": "eastern"
  },
  {
    "name": "Family",
    "slug": "family"
  },
  {
    "name": "Fan Film",
    "slug": "fan-film"
  },
  {
    "name": "Fantasy",
    "slug": "fantasy"
  },
  {
    "name": "Film Noir",
    "slug": "film-noir"
  },
  {
    "name": "History",
    "slug": "history"
  },
  {
    "name": "Holiday",
    "slug": "holiday"
  },
  {
    "name": "Horror",
    "slug": "horror"
  },
  {
    "name": "Indie",
    "slug": "indie"
  },
  {
    "name": "Music",
    "slug": "music"
  },
  {
    "name": "Musical",
    "slug": "musical"
  },
  {
    "name": "Mystery",
    "slug": "mystery"
  },
  {
    "name": "None",
    "slug": "none"
  },
  {
    "name": "Road",
    "slug": "road"
  },
  {
    "name": "Romance",
    "slug": "romance"
  },
  {
    "name": "Science Fiction",
    "slug": "science-fiction"
  },
  {
    "name": "Short",
    "slug": "short"
  },
  {
    "name": "Sports",
    "slug": "sports"
  },
  {
    "name": "Sporting Event",
    "slug": "sporting-event"
  },
  {
    "name": "Suspense",
    "slug": "suspense"
  },
  {
    "name": "Thriller",
    "slug": "thriller"
  },
  {
    "name": "Tv Movie",
    "slug": "tv-movie"
  },
  {
    "name": "War",
    "slug": "war"
  },
  {
    "name": "Western",
    "slug": "western"
  }
]
```

<h3 id="get-genres-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-languages">Languages</h1>

## Get languages

<a id="opIdGet languages"></a>

> Code samples

```bash
curl https://example.com/languages/movies \
  -H 'Accept: application/json'
```

`GET /languages/{type}`

Get a list of all langauges, including names and codes.

<h3 id="get-languages-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|

> Example responses

> 200 Response

```json
[
  {
    "code": "en",
    "name": "English"
  },
  {
    "code": "it",
    "name": "Italian"
  },
  {
    "code": "pl",
    "name": "Polish"
  }
]
```

<h3 id="get-languages-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-lists">Lists</h1>

## Get popular lists

<a id="opIdGet popular lists"></a>

> Code samples

```bash
curl https://example.com/lists/popular \
  -H 'Accept: application/json'
```

`GET /lists/popular`

#### &#128196; Pagination &#128513; Emojis

Returns the most popular lists. Popularity is calculated using total number of likes and comments.

<h3 id="get-popular-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "comment_count": 20,
    "like_count": 109,
    "list": {
      "allow_comments": true,
      "comment_count": 20,
      "created_at": "2015-10-11T17:00:54.000Z",
      "description": "So cute.",
      "display_numbers": true,
      "ids": {
        "slug": "top-chihuahua-movies",
        "trakt": 1338
      },
      "item_count": 50,
      "likes": 109,
      "name": "Top Chihuahua Movies",
      "privacy": "public",
      "sort_by": "rank",
      "sort_how": "asc",
      "type": "personal",
      "updated_at": "2015-10-11T17:00:54.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin Nemeth",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      }
    }
  },
  {
    "comment_count": 10,
    "like_count": 99,
    "list": {
      "allow_comments": true,
      "comment_count": 10,
      "created_at": "2014-10-11T17:00:54.000Z",
      "description": "How could my brain conceive them?",
      "display_numbers": true,
      "ids": {
        "slug": "incredible-thoughts",
        "trakt": 1337
      },
      "item_count": 50,
      "likes": 99,
      "name": "Incredible Thoughts",
      "privacy": "public",
      "sort_by": "rank",
      "sort_how": "asc",
      "type": "personal",
      "updated_at": "2014-10-11T17:00:54.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin Nemeth",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      }
    }
  }
]
```

<h3 id="get-popular-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get trending lists

<a id="opIdGet trending lists"></a>

> Code samples

```bash
curl https://example.com/lists/trending \
  -H 'Accept: application/json'
```

`GET /lists/trending`

#### &#128196; Pagination &#128513; Emojis

Returns all lists with the most likes and comments over the last 7 days.

<h3 id="get-trending-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "comment_count": 5,
    "like_count": 5,
    "list": {
      "allow_comments": true,
      "comment_count": 10,
      "created_at": "2014-10-11T17:00:54.000Z",
      "description": "How could my brain conceive them?",
      "display_numbers": true,
      "ids": {
        "slug": "incredible-thoughts",
        "trakt": 1337
      },
      "item_count": 50,
      "likes": 99,
      "name": "Incredible Thoughts",
      "privacy": "public",
      "sort_by": "rank",
      "sort_how": "asc",
      "type": "personal",
      "updated_at": "2014-10-11T17:00:54.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin Nemeth",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      }
    }
  },
  {
    "comment_count": 4,
    "like_count": 4,
    "list": {
      "allow_comments": true,
      "comment_count": 20,
      "created_at": "2015-10-11T17:00:54.000Z",
      "description": "So cute.",
      "display_numbers": true,
      "ids": {
        "slug": "top-chihuahua-movies",
        "trakt": 1338
      },
      "item_count": 50,
      "likes": 109,
      "name": "Top Chihuahua Movies",
      "privacy": "public",
      "sort_by": "rank",
      "sort_how": "asc",
      "type": "personal",
      "updated_at": "2015-10-11T17:00:54.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin Nemeth",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      }
    }
  }
]
```

<h3 id="get-trending-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get list

<a id="opIdGet list"></a>

> Code samples

```bash
curl https://example.com/lists/55 \
  -H 'Accept: application/json'
```

`GET /lists/{id}`

#### &#128513; Emojis

Returns a single list. Use the [**/lists/:id/items**](#reference/lists/list-items) method to get the actual items this list contains.

**Note:** You must use an integer `id`, and only public lists will return data.

<h3 id="get-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Trakt ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "allow_comments": true,
  "comment_count": 0,
  "created_at": "2014-10-11T17:00:54.000Z",
  "description": "Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.",
  "display_numbers": true,
  "ids": {
    "slug": "star-wars-in-machete-order",
    "trakt": 55
  },
  "item_count": 5,
  "likes": 0,
  "name": "Star Wars in machete order",
  "privacy": "public",
  "sort_by": "rank",
  "sort_how": "asc",
  "type": "personal",
  "updated_at": "2014-10-11T17:00:54.000Z",
  "user": {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
}
```

<h3 id="get-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Sort-By|string||none|
|200|X-Sort-How|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all list comments

<a id="opIdGet all list comments"></a>

> Code samples

```bash
curl https://example.com/lists/55/comments/newest \
  -H 'Accept: application/json'
```

`GET /lists/{id}/comments/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.

<h3 id="get-all-list-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|Trakt ID|
|sort|path|string|true|how to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|sort|likes|
|sort|replies|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Can't wait to watch everything on this epic list!",
    "created_at": "2011-03-25T22:35:17.000Z",
    "id": 8,
    "likes": 0,
    "parent_id": 0,
    "replies": 0,
    "review": false,
    "spoiler": false,
    "updated_at": "2011-03-25T22:35:17.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    },
    "user_stats": {
      "completed_count": 1,
      "play_count": 1,
      "rating": null
    }
  }
]
```

<h3 id="get-all-list-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get items on a list

<a id="opIdGet items on a list"></a>

> Code samples

```bash
curl https://example.com/lists/55/items/movies \
  -H 'Accept: application/json'
```

`GET /lists/{id}/items/{type}`

#### &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis

Get all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.

#### Notes

Each list item contains a `notes` field with text entered by the user.

#### Sorting Headers

All list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.

<h3 id="get-items-on-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID|
|type|path|string|true|Filter for a specific item type|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movie|
|type|show|
|type|season|
|type|episode|
|type|person|

> Example responses

> 200 Response

```json
[
  {
    "id": 101,
    "listed_at": "2014-06-16T06:07:12.000Z",
    "movie": {
      "ids": {
        "imdb": "tt0076759",
        "slug": "star-wars-episode-iv-a-new-hope-1977",
        "tmdb": 11,
        "trakt": 12
      },
      "title": "Star Wars: Episode IV - A New Hope",
      "year": 1977
    },
    "notes": null,
    "rank": 1,
    "type": "movie"
  },
  {
    "id": 102,
    "listed_at": "2014-06-16T06:07:12.000Z",
    "notes": null,
    "rank": 2,
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    },
    "type": "show"
  },
  {
    "id": 103,
    "listed_at": "2014-06-16T06:07:12.000Z",
    "notes": null,
    "rank": 3,
    "season": {
      "ids": {
        "tmdb": 3572,
        "tvdb": 30272
      },
      "number": 1
    },
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "season"
  },
  {
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 62133,
        "trakt": 2,
        "tvdb": 3859791
      },
      "number": 2,
      "season": 0,
      "title": "Wedding Day"
    },
    "id": 104,
    "listed_at": "2014-06-17T06:52:03.000Z",
    "notes": null,
    "rank": 4,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  },
  {
    "id": 105,
    "listed_at": "2014-06-17T06:52:03.000Z",
    "notes": null,
    "person": {
      "ids": {
        "imdb": "nm1330560",
        "slug": "garrett-hedlund",
        "tmdb": 9828,
        "trakt": 1
      },
      "name": "Garrett Hedlund"
    },
    "rank": 5,
    "type": "person"
  }
]
```

<h3 id="get-items-on-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Private-User|string||none|
|200|X-Sort-By|string||none|
|200|X-Sort-How|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all users who liked a list

<a id="opIdGet all users who liked a list"></a>

> Code samples

```bash
curl https://example.com/lists/55/likes \
  -H 'Accept: application/json'
```

`GET /lists/{id}/likes`

#### &#128196; Pagination

Returns all users who liked a list.

<h3 id="get-all-users-who-liked-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "liked_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  },
  {
    "liked_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-all-users-who-liked-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-movies">Movies</h1>

## Get the most anticipated movies

<a id="opIdGet the most anticipated movies"></a>

> Code samples

```bash
curl https://example.com/movies/anticipated \
  -H 'Accept: application/json'
```

`GET /movies/anticipated`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most anticipated movies based on the number of lists a movie appears on.

<h3 id="get-the-most-anticipated-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "list_count": 5362,
    "movie": {
      "ids": {
        "imdb": "tt1951266",
        "slug": "the-hunger-games-mockingjay-part-2-2015",
        "tmdb": 131634,
        "trakt": 89543
      },
      "title": "The Hunger Games: Mockingjay - Part 2",
      "year": 2015
    }
  },
  {
    "list_count": 4405,
    "movie": {
      "ids": {
        "imdb": "tt2975590",
        "slug": "batman-v-superman-dawn-of-justice-2016",
        "tmdb": 209112,
        "trakt": 129583
      },
      "title": "Batman v Superman: Dawn of Justice",
      "year": 2016
    }
  },
  {
    "list_count": 4185,
    "movie": {
      "ids": {
        "imdb": "tt2488496",
        "slug": "star-wars-episode-vii-the-force-awakens-2015",
        "tmdb": 140607,
        "trakt": 94024
      },
      "title": "Star Wars: Episode VII - The Force Awakens",
      "year": 2015
    }
  },
  {
    "list_count": 2996,
    "movie": {
      "ids": {
        "imdb": "tt3659388",
        "slug": "the-martian-2015",
        "tmdb": 286217,
        "trakt": 183371
      },
      "title": "The Martian",
      "year": 2015
    }
  },
  {
    "list_count": 2902,
    "movie": {
      "ids": {
        "imdb": "tt1431045",
        "slug": "deadpool-2016",
        "tmdb": 293660,
        "trakt": 190430
      },
      "title": "Deadpool",
      "year": 2016
    }
  },
  {
    "list_count": 2675,
    "movie": {
      "ids": {
        "imdb": "tt3498820",
        "slug": "captain-america-civil-war-2016",
        "tmdb": 271110,
        "trakt": 169105
      },
      "title": "Captain America: Civil War",
      "year": 2016
    }
  },
  {
    "list_count": 2629,
    "movie": {
      "ids": {
        "imdb": "tt3385516",
        "slug": "x-men-apocalypse-2016",
        "tmdb": 246655,
        "trakt": 149999
      },
      "title": "X-Men: Apocalypse",
      "year": 2016
    }
  },
  {
    "list_count": 2184,
    "movie": {
      "ids": {
        "imdb": "tt1386697",
        "slug": "suicide-squad-2016",
        "tmdb": 297761,
        "trakt": 193079
      },
      "title": "Suicide Squad",
      "year": 2016
    }
  },
  {
    "list_count": 2127,
    "movie": {
      "ids": {
        "imdb": "tt2379713",
        "slug": "spectre-2015",
        "tmdb": 206647,
        "trakt": 128378
      },
      "title": "SPECTRE",
      "year": 2015
    }
  },
  {
    "list_count": 1951,
    "movie": {
      "ids": {
        "imdb": "tt0974015",
        "slug": "justice-league-2017",
        "tmdb": 141052,
        "trakt": 94232
      },
      "title": "Justice League",
      "year": 2017
    }
  }
]
```

<h3 id="get-the-most-anticipated-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the weekend box office

<a id="opIdGet the weekend box office"></a>

> Code samples

```bash
curl https://example.com/movies/boxoffice \
  -H 'Accept: application/json'
```

`GET /movies/boxoffice`

#### &#10024; Extended Info

Returns the top 10 grossing movies in the U.S. box office last weekend. Updated every Monday morning.

<h3 id="get-the-weekend-box-office-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt2510894",
        "slug": "hotel-transylvania-2-2015",
        "tmdb": 159824,
        "trakt": 103449
      },
      "title": "Hotel Transylvania 2",
      "year": 2015
    },
    "revenue": 48464322
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt2361509",
        "slug": "the-intern-2015",
        "tmdb": 257211,
        "trakt": 156997
      },
      "title": "The Intern",
      "year": 2015
    },
    "revenue": 17728313
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt4046784",
        "slug": "maze-runner-the-scorch-trials-2015",
        "tmdb": 294254,
        "trakt": 190987
      },
      "title": "Maze Runner: The Scorch Trials",
      "year": 2015
    },
    "revenue": 14271777
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt2719848",
        "slug": "everest-2015",
        "tmdb": 253412,
        "trakt": 153969
      },
      "title": "Everest",
      "year": 2015
    },
    "revenue": 13242895
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt1355683",
        "slug": "black-mass-2015",
        "tmdb": 261023,
        "trakt": 160067
      },
      "title": "Black Mass",
      "year": 2015
    },
    "revenue": 11031215
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt3567288",
        "slug": "the-visit-2015",
        "tmdb": 298312,
        "trakt": 196859
      },
      "title": "The Visit",
      "year": 2015
    },
    "revenue": 6674280
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt3862750",
        "slug": "the-perfect-guy-2015",
        "tmdb": 304372,
        "trakt": 207114
      },
      "title": "The Perfect Guy",
      "year": 2015
    },
    "revenue": 4774505
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt3832914",
        "slug": "war-room",
        "tmdb": 323272,
        "trakt": 203901
      },
      "title": "War Room",
      "year": 2015
    },
    "revenue": 4242644
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt2403021",
        "slug": "the-green-inferno-2014",
        "tmdb": 171424,
        "trakt": 109134
      },
      "title": "The Green Inferno",
      "year": 2014
    },
    "revenue": 3520626
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt3397884",
        "slug": "sicario-2015",
        "tmdb": 273481,
        "trakt": 171369
      },
      "title": "Sicario",
      "year": 2015
    },
    "revenue": 1717301
  }
]
```

<h3 id="get-the-weekend-box-office-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most Collected movies

<a id="opIdGet the most Collected movies"></a>

> Code samples

```bash
curl https://example.com/movies/collected/weekly \
  -H 'Accept: application/json'
```

`GET /movies/collected/{period}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most collected (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

<h3 id="get-the-most-collected-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|Time period.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|yearly|
|period|all|

> Example responses

> 200 Response

```json
[
  {
    "collected_count": 33837,
    "movie": {
      "ids": {
        "imdb": "tt0848228",
        "slug": "the-avengers-2012",
        "tmdb": 24428,
        "trakt": 14701
      },
      "title": "The Avengers",
      "year": 2012
    },
    "play_count": 102512,
    "watcher_count": 81289
  },
  {
    "collected_count": 32044,
    "movie": {
      "ids": {
        "imdb": "tt1375666",
        "slug": "inception-2010",
        "tmdb": 27205,
        "trakt": 16662
      },
      "title": "Inception",
      "year": 2010
    },
    "play_count": 88597,
    "watcher_count": 74665
  },
  {
    "collected_count": 31877,
    "movie": {
      "ids": {
        "imdb": "tt0468569",
        "slug": "the-dark-knight-2008",
        "tmdb": 155,
        "trakt": 120
      },
      "title": "The Dark Knight",
      "year": 2008
    },
    "play_count": 104242,
    "watcher_count": 76254
  },
  {
    "collected_count": 30502,
    "movie": {
      "ids": {
        "imdb": "tt0903624",
        "slug": "the-hobbit-an-unexpected-journey-2012",
        "tmdb": 49051,
        "trakt": 34097
      },
      "title": "The Hobbit: An Unexpected Journey",
      "year": 2012
    },
    "play_count": 67402,
    "watcher_count": 55355
  },
  {
    "collected_count": 29062,
    "movie": {
      "ids": {
        "imdb": "tt1345836",
        "slug": "the-dark-knight-rises-2012",
        "tmdb": 49026,
        "trakt": 34073
      },
      "title": "The Dark Knight Rises",
      "year": 2012
    },
    "play_count": 71767,
    "watcher_count": 56916
  },
  {
    "collected_count": 28037,
    "movie": {
      "ids": {
        "imdb": "tt1392170",
        "slug": "the-hunger-games-2012",
        "tmdb": 70160,
        "trakt": 51342
      },
      "title": "The Hunger Games",
      "year": 2012
    },
    "play_count": 65325,
    "watcher_count": 57603
  },
  {
    "collected_count": 27802,
    "movie": {
      "ids": {
        "imdb": "tt1300854",
        "slug": "iron-man-3-2013",
        "tmdb": 68721,
        "trakt": 50134
      },
      "title": "Iron Man 3",
      "year": 2013
    },
    "play_count": 63107,
    "watcher_count": 52662
  },
  {
    "collected_count": 27721,
    "movie": {
      "ids": {
        "imdb": "tt0371746",
        "slug": "iron-man-2008",
        "tmdb": 1726,
        "trakt": 1157
      },
      "title": "Iron Man",
      "year": 2008
    },
    "play_count": 79998,
    "watcher_count": 63920
  },
  {
    "collected_count": 27693,
    "movie": {
      "ids": {
        "imdb": "tt0499549",
        "slug": "avatar-2009",
        "tmdb": 19995,
        "trakt": 12269
      },
      "title": "Avatar",
      "year": 2009
    },
    "play_count": 78930,
    "watcher_count": 62786
  },
  {
    "collected_count": 27661,
    "movie": {
      "ids": {
        "imdb": "tt1853728",
        "slug": "django-unchained-2012",
        "tmdb": 68718,
        "trakt": 50131
      },
      "title": "Django Unchained",
      "year": 2012
    },
    "play_count": 60086,
    "watcher_count": 49809
  }
]
```

<h3 id="get-the-most-collected-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most played movies

<a id="opIdGet the most played movies"></a>

> Code samples

```bash
curl https://example.com/movies/played/weekly \
  -H 'Accept: application/json'
```

`GET /movies/played/{period}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most played (a single user can watch multiple times) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

<h3 id="get-the-most-played-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|Time period.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|yearly|
|period|all|

> Example responses

> 200 Response

```json
[
  {
    "collected_count": 27584,
    "movie": {
      "ids": {
        "imdb": "tt2294629",
        "slug": "frozen-2013",
        "tmdb": 109445,
        "trakt": 77349
      },
      "title": "Frozen",
      "year": 2013
    },
    "play_count": 109736,
    "watcher_count": 66667
  },
  {
    "collected_count": 31877,
    "movie": {
      "ids": {
        "imdb": "tt0468569",
        "slug": "the-dark-knight-2008",
        "tmdb": 155,
        "trakt": 120
      },
      "title": "The Dark Knight",
      "year": 2008
    },
    "play_count": 104242,
    "watcher_count": 76254
  },
  {
    "collected_count": 33837,
    "movie": {
      "ids": {
        "imdb": "tt0848228",
        "slug": "the-avengers-2012",
        "tmdb": 24428,
        "trakt": 14701
      },
      "title": "The Avengers",
      "year": 2012
    },
    "play_count": 102512,
    "watcher_count": 81289
  },
  {
    "collected_count": 26662,
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 82405
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "play_count": 97715,
    "watcher_count": 72538
  },
  {
    "collected_count": 6252,
    "movie": {
      "ids": {
        "imdb": "tt1980929",
        "slug": "begin-again-2013",
        "tmdb": 198277,
        "trakt": 123759
      },
      "title": "Begin Again",
      "year": 2014
    },
    "play_count": 95830,
    "watcher_count": 8487
  },
  {
    "collected_count": 32044,
    "movie": {
      "ids": {
        "imdb": "tt1375666",
        "slug": "inception-2010",
        "tmdb": 27205,
        "trakt": 16662
      },
      "title": "Inception",
      "year": 2010
    },
    "play_count": 88597,
    "watcher_count": 74665
  },
  {
    "collected_count": 25855,
    "movie": {
      "ids": {
        "imdb": "tt1323594",
        "slug": "despicable-me-2010",
        "tmdb": 20352,
        "trakt": 12496
      },
      "title": "Despicable Me",
      "year": 2010
    },
    "play_count": 82227,
    "watcher_count": 55443
  },
  {
    "collected_count": 27441,
    "movie": {
      "ids": {
        "imdb": "tt1228705",
        "slug": "iron-man-2-2010",
        "tmdb": 10138,
        "trakt": 5355
      },
      "title": "Iron Man 2",
      "year": 2010
    },
    "play_count": 81167,
    "watcher_count": 55739
  },
  {
    "collected_count": 16419,
    "movie": {
      "ids": {
        "imdb": "tt2245084",
        "slug": "big-hero-6-2014",
        "tmdb": 177572,
        "trakt": 112404
      },
      "title": "Big Hero 6",
      "year": 2014
    },
    "play_count": 80008,
    "watcher_count": 45472
  },
  {
    "collected_count": 27721,
    "movie": {
      "ids": {
        "imdb": "tt0371746",
        "slug": "iron-man-2008",
        "tmdb": 1726,
        "trakt": 1157
      },
      "title": "Iron Man",
      "year": 2008
    },
    "play_count": 79998,
    "watcher_count": 63920
  }
]
```

<h3 id="get-the-most-played-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get popular movies

<a id="opIdGet popular movies"></a>

> Code samples

```bash
curl https://example.com/movies/popular \
  -H 'Accept: application/json'
```

`GET /movies/popular`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most popular movies. Popularity is calculated using the rating percentage and the number of ratings.

<h3 id="get-popular-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "imdb": "tt0468569",
      "slug": "the-dark-knight-2008",
      "tmdb": 155,
      "trakt": 16
    },
    "title": "The Dark Knight",
    "year": 2008
  },
  {
    "ids": {
      "imdb": "tt0137523",
      "slug": "fight-club-1999",
      "tmdb": 550,
      "trakt": 727
    },
    "title": "Fight Club",
    "year": 1999
  },
  {
    "ids": {
      "imdb": "tt0107290",
      "slug": "jurassic-park-1993",
      "tmdb": 329,
      "trakt": 393
    },
    "title": "Jurassic Park",
    "year": 1993
  },
  {
    "ids": {
      "imdb": "tt0088763",
      "slug": "back-to-the-future-1985",
      "tmdb": 105,
      "trakt": 308
    },
    "title": "Back to the Future",
    "year": 1985
  },
  {
    "ids": {
      "imdb": "tt0111161",
      "slug": "the-shawshank-redemption-1994",
      "tmdb": 278,
      "trakt": 231
    },
    "title": "The Shawshank Redemption",
    "year": 1994
  },
  {
    "ids": {
      "imdb": "tt1285016",
      "slug": "the-social-network-2010",
      "tmdb": 37799,
      "trakt": 98
    },
    "title": "The Social Network",
    "year": 2010
  },
  {
    "ids": {
      "imdb": "tt0076759",
      "slug": "star-wars-episode-iv-a-new-hope-1977",
      "tmdb": 11,
      "trakt": 738
    },
    "title": "Star Wars: Episode IV - A New Hope",
    "year": 1977
  },
  {
    "ids": {
      "imdb": "tt0167260",
      "slug": "the-lord-of-the-rings-the-return-of-the-king-2003",
      "tmdb": 122,
      "trakt": 374
    },
    "title": "The Lord of the Rings: The Return of the King",
    "year": 2003
  },
  {
    "ids": {
      "imdb": "tt0167261",
      "slug": "the-lord-of-the-rings-the-two-towers-2002",
      "tmdb": 121,
      "trakt": 373
    },
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002
  },
  {
    "ids": {
      "imdb": "tt0133093",
      "slug": "the-matrix-1999",
      "tmdb": 603,
      "trakt": 269
    },
    "title": "The Matrix",
    "year": 1999
  }
]
```

<h3 id="get-popular-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most recommended movies

<a id="opIdGet the most recommended movies"></a>

> Code samples

```bash
curl https://example.com/movies/recommended/weekly \
  -H 'Accept: application/json'
```

`GET /movies/recommended/{period}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most recommended movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

<h3 id="get-the-most-recommended-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|Time period.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|yearly|
|period|all|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt0468569",
        "slug": "the-dark-knight-2008",
        "tmdb": 155,
        "trakt": 120
      },
      "title": "The Dark Knight",
      "year": 2008
    },
    "user_count": 76254
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt0848228",
        "slug": "the-avengers-2012",
        "tmdb": 24428,
        "trakt": 14701
      },
      "title": "The Avengers",
      "year": 2012
    },
    "user_count": 61289
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt1323594",
        "slug": "despicable-me-2010",
        "tmdb": 20352,
        "trakt": 12496
      },
      "title": "Despicable Me",
      "year": 2010
    },
    "user_count": 55443
  }
]
```

<h3 id="get-the-most-recommended-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get trending movies

<a id="opIdGet trending movies"></a>

> Code samples

```bash
curl https://example.com/movies/trending \
  -H 'Accept: application/json'
```

`GET /movies/trending`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns all movies being watched right now. Movies with the most users are returned first.

<h3 id="get-trending-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt1104001",
        "slug": "tron-legacy-2010",
        "tmdb": 20526,
        "trakt": 1
      },
      "title": "TRON: Legacy",
      "year": 2010
    },
    "watchers": 21
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt0468569",
        "slug": "the-dark-knight-2008",
        "tmdb": 155,
        "trakt": 4
      },
      "title": "The Dark Knight",
      "year": 2008
    },
    "watchers": 17
  }
]
```

<h3 id="get-trending-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|
|200|X-Trending-User-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get recently updated movie Trakt IDs

<a id="opIdGet recently updated movie Trakt IDs"></a>

> Code samples

```bash
curl https://example.com/movies/updates/id/2020-11-27T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /movies/updates/id/{start_date}`

#### &#128196; Pagination

Returns all movie Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.

**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.

**Note:** The `start_date` can only be a maximum of 30 days in the past.

<h3 id="get-recently-updated-movie-trakt-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Updated since this date and time.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  1,
  20,
  34,
  50
]
```

<h3 id="get-recently-updated-movie-trakt-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get recently updated movies

<a id="opIdGet recently updated movies"></a>

> Code samples

```bash
curl https://example.com/movies/updates/2020-11-27T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /movies/updates/{start_date}`

#### &#128196; Pagination &#10024; Extended Info

Returns all movies updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.

**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.

**Note:** The `start_date` can only be a maximum of 30 days in the past.

<h3 id="get-recently-updated-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Updated since this date and time.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt1104001",
        "slug": "tron-legacy-2010",
        "tmdb": 20526,
        "trakt": 1
      },
      "title": "TRON: Legacy",
      "year": 2010
    },
    "updated_at": "2014-09-22T21:56:03.000Z"
  },
  {
    "movie": {
      "ids": {
        "imdb": "tt0468569",
        "slug": "the-dark-knight-2008",
        "tmdb": 155,
        "trakt": 4
      },
      "title": "The Dark Knight",
      "year": 2008
    },
    "updated_at": "2014-09-23T21:56:03.000Z"
  }
]
```

<h3 id="get-recently-updated-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most watched movies

<a id="opIdGet the most watched movies"></a>

> Code samples

```bash
curl https://example.com/movies/watched/weekly \
  -H 'Accept: application/json'
```

`GET /movies/watched/{period}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most watched (unique users) movies in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

<h3 id="get-the-most-watched-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|Time period.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|yearly|
|period|all|

> Example responses

> 200 Response

```json
[
  {
    "collected_count": 33837,
    "movie": {
      "ids": {
        "imdb": "tt0848228",
        "slug": "the-avengers-2012",
        "tmdb": 24428,
        "trakt": 14701
      },
      "title": "The Avengers",
      "year": 2012
    },
    "play_count": 102512,
    "watcher_count": 81289
  },
  {
    "collected_count": 31877,
    "movie": {
      "ids": {
        "imdb": "tt0468569",
        "slug": "the-dark-knight-2008",
        "tmdb": 155,
        "trakt": 120
      },
      "title": "The Dark Knight",
      "year": 2008
    },
    "play_count": 104242,
    "watcher_count": 76254
  },
  {
    "collected_count": 32044,
    "movie": {
      "ids": {
        "imdb": "tt1375666",
        "slug": "inception-2010",
        "tmdb": 27205,
        "trakt": 16662
      },
      "title": "Inception",
      "year": 2010
    },
    "play_count": 88597,
    "watcher_count": 74665
  },
  {
    "collected_count": 26662,
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 82405
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "play_count": 97715,
    "watcher_count": 72538
  },
  {
    "collected_count": 26263,
    "movie": {
      "ids": {
        "imdb": "tt0133093",
        "slug": "the-matrix-1999",
        "tmdb": 603,
        "trakt": 481
      },
      "title": "The Matrix",
      "year": 1999
    },
    "play_count": 77108,
    "watcher_count": 67228
  },
  {
    "collected_count": 27584,
    "movie": {
      "ids": {
        "imdb": "tt2294629",
        "slug": "frozen-2013",
        "tmdb": 109445,
        "trakt": 77349
      },
      "title": "Frozen",
      "year": 2013
    },
    "play_count": 109736,
    "watcher_count": 66667
  },
  {
    "collected_count": 27721,
    "movie": {
      "ids": {
        "imdb": "tt0371746",
        "slug": "iron-man-2008",
        "tmdb": 1726,
        "trakt": 1157
      },
      "title": "Iron Man",
      "year": 2008
    },
    "play_count": 79998,
    "watcher_count": 63920
  },
  {
    "collected_count": 27693,
    "movie": {
      "ids": {
        "imdb": "tt0499549",
        "slug": "avatar-2009",
        "tmdb": 19995,
        "trakt": 12269
      },
      "title": "Avatar",
      "year": 2009
    },
    "play_count": 78930,
    "watcher_count": 62786
  },
  {
    "collected_count": 27542,
    "movie": {
      "ids": {
        "imdb": "tt0120737",
        "slug": "the-lord-of-the-rings-the-fellowship-of-the-ring-2001",
        "tmdb": 120,
        "trakt": 88
      },
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "year": 2001
    },
    "play_count": 69112,
    "watcher_count": 60803
  },
  {
    "collected_count": 25803,
    "movie": {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 228
      },
      "title": "Batman Begins",
      "year": 2005
    },
    "play_count": 67884,
    "watcher_count": 58057
  }
]
```

<h3 id="get-the-most-watched-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a movie

<a id="opIdGet a movie"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010 \
  -H 'Accept: application/json'
```

`GET /movies/{id}`

#### &#10024; Extended Info

Returns a single movie's details.

**Note:** When getting `full` extended info, the `status` field can have a value of `released`, `in production`, `post production`, `planned`, `rumored`, or `canceled`.

<h3 id="get-a-movie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "available_translations": [
    "en"
  ],
  "certification": "PG-13",
  "comment_count": 92,
  "country": "us",
  "genres": [
    "action"
  ],
  "homepage": "http://disney.go.com/tron/",
  "ids": {
    "imdb": "tt1104001",
    "slug": "tron-legacy-2010",
    "tmdb": 20526,
    "trakt": 343
  },
  "language": "en",
  "overview": "Sam Flynn, the tech-savvy and daring son of Kevin Flynn, investigates his father's disappearance and is pulled into The Grid. With the help of  a mysterious program named Quorra, Sam quests to stop evil dictator Clu from crossing into the real world.",
  "rating": 8,
  "released": "2010-12-16",
  "runtime": 125,
  "status": "released",
  "tagline": "The Game Has Changed.",
  "title": "TRON: Legacy",
  "trailer": null,
  "updated_at": "2014-07-23T03:21:46.000Z",
  "votes": 111,
  "year": 2010
}
```

<h3 id="get-a-movie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/movies/tron-legacy-2010?extended=full<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all movie aliases

<a id="opIdGet all movie aliases"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/aliases \
  -H 'Accept: application/json'
```

`GET /movies/{id}/aliases`

Returns all title aliases for a movie.  Includes country where name is different.

<h3 id="get-all-movie-aliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "country": "ca",
    "title": "Batman 1 - Batman Begins"
  },
  {
    "country": "br",
    "title": "Batman 5 Begins"
  },
  {
    "country": "ar",
    "title": "Batman inicia"
  },
  {
    "country": "us",
    "title": "Batman 5: Batman Begins"
  },
  {
    "country": "tw",
    "title": "蝙蝠俠：開戰時刻"
  },
  {
    "country": "si",
    "title": "Batman: Na začetku"
  },
  {
    "country": "es",
    "title": "Batman Begins"
  },
  {
    "country": "de",
    "title": "Batman Begins"
  },
  {
    "country": "no",
    "title": "Batman  - Batman Begins"
  },
  {
    "country": "ca",
    "title": "Batman:Le commencement"
  },
  {
    "country": "us",
    "title": "Batman Dark Knight 1: Batman Begins"
  },
  {
    "country": "cn",
    "title": "蝙蝠侠：侠影之谜"
  },
  {
    "country": "ru",
    "title": "Бэтмен: Начало"
  },
  {
    "country": "ua",
    "title": "Бетмен: Початок"
  },
  {
    "country": "kr",
    "title": "배트맨 비긴즈"
  }
]
```

<h3 id="get-all-movie-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all movie comments

<a id="opIdGet all movie comments"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/comments/newest \
  -H 'Accept: application/json'
```

`GET /movies/{id}/comments/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all top level comments for a movie. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.

<h3 id="get-all-movie-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|sort|path|string|true|how to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|sort|likes|
|sort|replies|
|sort|highest|
|sort|lowest|
|sort|plays|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Great movie!",
    "created_at": "2011-03-25T22:35:17.000Z",
    "id": 8,
    "likes": 0,
    "parent_id": 0,
    "replies": 1,
    "review": false,
    "spoiler": false,
    "updated_at": "2011-03-25T22:35:17.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    },
    "user_stats": {
      "completed_count": 1,
      "play_count": 1,
      "rating": 8
    }
  }
]
```

<h3 id="get-all-movie-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get lists containing this movie

<a id="opIdGet lists containing this movie"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/lists/personal/popular \
  -H 'Accept: application/json'
```

`GET /movies/{id}/lists/{type}/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all lists that contain this movie. By default, `personal` lists are returned sorted by the most `popular`.

<h3 id="get-lists-containing-this-movie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|type|path|string|true|Filter for a specific list type|
|sort|path|string|true|How to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|personal|
|type|official|
|type|watchlists|
|type|recommendations|
|sort|popular|
|sort|likes|
|sort|comments|
|sort|items|
|sort|added|
|sort|updated|

> Example responses

> 200 Response

```json
[
  {
    "allow_comments": true,
    "comment_count": 10,
    "created_at": "2014-10-11T17:00:54.000Z",
    "description": "How could my brain conceive them?",
    "display_numbers": true,
    "ids": {
      "slug": "incredible-thoughts",
      "trakt": 1337
    },
    "item_count": 50,
    "likes": 99,
    "name": "Incredible Thoughts",
    "privacy": "public",
    "sort_by": "rank",
    "sort_how": "asc",
    "type": "personal",
    "updated_at": "2014-10-11T17:00:54.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-lists-containing-this-movie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all people for a movie

<a id="opIdGet all people for a movie"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/people \
  -H 'Accept: application/json'
```

`GET /movies/{id}/people`

#### &#10024; Extended Info

Returns all `cast` and `crew` for a movie. Each `cast` member will have a `characters` array and a standard `person` object.

The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.

<h3 id="get-all-people-for-a-movie-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "cast": [
    {
      "characters": [
        "Sam Flynn"
      ],
      "person": {
        "ids": {
          "imdb": "nm1330560",
          "slug": "garrett-hedlund",
          "tmdb": 9828,
          "trakt": 1
        },
        "name": "Garrett Hedlund"
      }
    },
    {
      "characters": [
        "Kevin Flynn",
        "Clu"
      ],
      "person": {
        "ids": {
          "imdb": "nm0000313",
          "slug": "jeff-bridges",
          "tmdb": 1229,
          "trakt": 2
        },
        "name": "Jeff Bridges"
      }
    },
    {
      "characters": [
        "Quorra"
      ],
      "person": {
        "ids": {
          "imdb": "nm1312575",
          "slug": "olivia-wilde",
          "tmdb": 59315,
          "trakt": 3
        },
        "name": "Olivia Wilde"
      }
    },
    {
      "characters": [
        "Alan Bradley",
        "Tron"
      ],
      "person": {
        "ids": {
          "imdb": "nm0000310",
          "slug": "bruce-boxleitner",
          "tmdb": 2547,
          "trakt": 4
        },
        "name": "Bruce Boxleitner"
      }
    },
    {
      "characters": [
        "Siren"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "yaya-dacosta",
          "tmdb": 60033,
          "trakt": 5
        },
        "name": "Yaya DaCosta"
      }
    },
    {
      "characters": [
        "Siren"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "serinda-swan",
          "tmdb": 86268,
          "trakt": 6
        },
        "name": "Serinda Swan"
      }
    },
    {
      "characters": [
        "Siren"
      ],
      "person": {
        "ids": {
          "imdb": "nm1683768",
          "slug": "beau-garrett",
          "tmdb": 20403,
          "trakt": 7
        },
        "name": "Beau Garrett"
      }
    },
    {
      "characters": [
        "Siren"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "elizabeth-mathis",
          "tmdb": 130108,
          "trakt": 8
        },
        "name": "Elizabeth Mathis"
      }
    },
    {
      "characters": [
        "Jarvis"
      ],
      "person": {
        "ids": {
          "imdb": "nm0289656",
          "slug": "james-frain",
          "tmdb": 22063,
          "trakt": 9
        },
        "name": "James Frain"
      }
    },
    {
      "characters": [
        "Young Mrs. Flynn"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "amy-esterle",
          "tmdb": 86269,
          "trakt": 10
        },
        "name": "Amy Esterle"
      }
    },
    {
      "characters": [
        "Sobel"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "brandon-jay-mclaren",
          "tmdb": 58371,
          "trakt": 11
        },
        "name": "Brandon Jay McLaren"
      }
    },
    {
      "characters": [
        "Castor",
        "Zuse"
      ],
      "person": {
        "ids": {
          "imdb": "nm0790688",
          "slug": "michael-sheen",
          "tmdb": 3968,
          "trakt": 12
        },
        "name": "Michael Sheen"
      }
    },
    {
      "characters": [
        "Young Sam"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "owen-best",
          "tmdb": 109205,
          "trakt": 13
        },
        "name": "Owen Best"
      }
    },
    {
      "characters": [
        "Green Light Cycle Rider"
      ],
      "person": {
        "ids": {
          "imdb": "nm1083137",
          "slug": "michael-teigen",
          "tmdb": 37980,
          "trakt": 14
        },
        "name": "Michael Teigen"
      }
    },
    {
      "characters": [
        "Masked DJ's"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "daft-punk",
          "tmdb": 67931,
          "trakt": 15
        },
        "name": "Daft Punk"
      }
    },
    {
      "characters": [
        "Chattering Homeless Man"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "ron-selmour",
          "tmdb": 10874,
          "trakt": 16
        },
        "name": "Ron Selmour"
      }
    },
    {
      "characters": [
        "Bartik"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "conrad-coates",
          "tmdb": 43263,
          "trakt": 17
        },
        "name": "Conrad Coates"
      }
    },
    {
      "characters": [
        "Half Faced Man (as Yurij Kis)"
      ],
      "person": {
        "ids": {
          "imdb": "",
          "slug": "kis-yurij",
          "tmdb": 145110,
          "trakt": 18
        },
        "name": "Kis Yurij"
      }
    }
  ],
  "crew": {
    "art": [
      {
        "jobs": [
          "Production Design"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "darren-gilford",
            "tmdb": 411385,
            "trakt": 22
          },
          "name": "Darren Gilford"
        }
      },
      {
        "jobs": [
          "Set Decoration"
        ],
        "person": {
          "ids": {
            "imdb": "nm0003106",
            "slug": "lin-macdonald",
            "tmdb": 12384,
            "trakt": 25
          },
          "name": "Lin MacDonald"
        }
      }
    ],
    "camera": [
      {
        "jobs": [
          "Director of Photography"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "claudio-miranda",
            "tmdb": 51333,
            "trakt": 41
          },
          "name": "Claudio Miranda"
        }
      }
    ],
    "costume & make-up": [
      {
        "jobs": [
          "Costume Design"
        ],
        "person": {
          "ids": {
            "imdb": "nm0929452",
            "slug": "michael-wilkinson",
            "tmdb": 5392,
            "trakt": 26
          },
          "name": "Michael Wilkinson"
        }
      },
      {
        "jobs": [
          "Makeup Department Head"
        ],
        "person": {
          "ids": {
            "imdb": "nm0196301",
            "slug": "rosalina-da-silva",
            "tmdb": 75294,
            "trakt": 27
          },
          "name": "Rosalina Da Silva"
        }
      },
      {
        "jobs": [
          "Costume Supervisor"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "tangi-crawford",
            "tmdb": 1323289,
            "trakt": 28
          },
          "name": "Tangi Crawford"
        }
      }
    ],
    "crew": [
      {
        "jobs": [
          "Supervising Art Director"
        ],
        "person": {
          "ids": {
            "imdb": "nm0411131",
            "slug": "kevin-ishioka",
            "tmdb": 6878,
            "trakt": 23
          },
          "name": "Kevin Ishioka"
        }
      },
      {
        "jobs": [
          "Supervising Art Director"
        ],
        "person": {
          "ids": {
            "imdb": "nm0543729",
            "slug": "mark-w-mansbridge",
            "tmdb": 21070,
            "trakt": 24
          },
          "name": "Mark W. Mansbridge"
        }
      }
    ],
    "directing": [
      {
        "jobs": [
          "Director"
        ],
        "person": {
          "ids": {
            "imdb": "nm2676052",
            "slug": "joseph-kosinski",
            "tmdb": 86270,
            "trakt": 29
          },
          "name": "Joseph Kosinski"
        }
      }
    ],
    "production": [
      {
        "jobs": [
          "Casting"
        ],
        "person": {
          "ids": {
            "imdb": "nm0104840",
            "slug": "heike-brandstatter",
            "tmdb": 5362,
            "trakt": 19
          },
          "name": "Heike Brandstatter"
        }
      },
      {
        "jobs": [
          "Casting"
        ],
        "person": {
          "ids": {
            "imdb": "nm0278168",
            "slug": "sarah-finn",
            "tmdb": 7232,
            "trakt": 20
          },
          "name": "Sarah Finn"
        }
      },
      {
        "jobs": [
          "Casting"
        ],
        "person": {
          "ids": {
            "imdb": "nm0563042",
            "slug": "coreen-mayrs",
            "tmdb": 5363,
            "trakt": 21
          },
          "name": "Coreen Mayrs"
        }
      },
      {
        "jobs": [
          "Producer"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "sean-bailey",
            "tmdb": 39387,
            "trakt": 34
          },
          "name": "Sean Bailey"
        }
      },
      {
        "jobs": [
          "Producer"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "steven-lisberger",
            "tmdb": 12859,
            "trakt": 33
          },
          "name": "Steven Lisberger"
        }
      },
      {
        "jobs": [
          "Producer"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "jeffrey-silver",
            "tmdb": 20908,
            "trakt": 35
          },
          "name": "Jeffrey Silver"
        }
      },
      {
        "jobs": [
          "Producer"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "bruce-franklin",
            "tmdb": 113981,
            "trakt": 36
          },
          "name": "Bruce Franklin"
        }
      },
      {
        "jobs": [
          "Producer"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "steve-gaub",
            "tmdb": 63289,
            "trakt": 37
          },
          "name": "Steve Gaub"
        }
      },
      {
        "jobs": [
          "Producer"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "justis-greene",
            "tmdb": 113982,
            "trakt": 38
          },
          "name": "Justis Greene"
        }
      },
      {
        "jobs": [
          "Producer"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "julien-lemaitre",
            "tmdb": 113983,
            "trakt": 39
          },
          "name": "Julien Lemaitre"
        }
      },
      {
        "job": [
          "Executive Producer"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "donald-kushner",
            "tmdb": 6889,
            "trakt": 40
          },
          "name": "Donald Kushner"
        }
      }
    ],
    "sound": [
      {
        "jobs": [
          "Music"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "daft-punk",
            "tmdb": 67931,
            "trakt": 15
          },
          "name": "Daft Punk"
        }
      }
    ],
    "writing": [
      {
        "jobs": [
          "Screenplay"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "adam-horowitz",
            "tmdb": 44035,
            "trakt": 30
          },
          "name": "Adam Horowitz"
        }
      },
      {
        "job": [
          "Screenplay"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "richard-jefferies",
            "tmdb": 73570,
            "trakt": 31
          },
          "name": "Richard Jefferies"
        }
      },
      {
        "jobs": [
          "Screenplay"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "edward-kitsis",
            "tmdb": 44034,
            "trakt": 32
          },
          "name": "Edward Kitsis"
        }
      },
      {
        "jobs": [
          "Screenplay"
        ],
        "person": {
          "ids": {
            "imdb": "",
            "slug": "steven-lisberger",
            "tmdb": 12859,
            "trakt": 33
          },
          "name": "Steven Lisberger"
        }
      }
    ]
  }
}
```

<h3 id="get-all-people-for-a-movie-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get movie ratings

<a id="opIdGet movie ratings"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/ratings \
  -H 'Accept: application/json'
```

`GET /movies/{id}/ratings`

Returns rating (between 0 and 10) and distribution for a movie.

<h3 id="get-movie-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "distribution": {
    "1": 298,
    "2": 46,
    "3": 87,
    "4": 178,
    "5": 446,
    "6": 1167,
    "7": 1855,
    "8": 1543,
    "9": 662,
    "10": 1583
  },
  "rating": 7.33778,
  "votes": 7866
}
```

<h3 id="get-movie-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get related movies

<a id="opIdGet related movies"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/related \
  -H 'Accept: application/json'
```

`GET /movies/{id}/related`

#### &#128196; Pagination &#10024; Extended Info

Returns related and similar movies.

<h3 id="get-related-movies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "imdb": "tt0107290",
      "slug": "jurassic-park-1993",
      "tmdb": 329,
      "trakt": 393
    },
    "title": "Jurassic Park",
    "year": 1993
  },
  {
    "ids": {
      "imdb": "tt0088763",
      "slug": "back-to-the-future-1985",
      "tmdb": 105,
      "trakt": 308
    },
    "title": "Back to the Future",
    "year": 1985
  },
  {
    "ids": {
      "imdb": "tt1250777",
      "slug": "kick-ass-2010",
      "tmdb": 23483,
      "trakt": 171
    },
    "title": "Kick-Ass",
    "year": 2010
  },
  {
    "ids": {
      "imdb": "tt1119646",
      "slug": "the-hangover-2009",
      "tmdb": 18785,
      "trakt": 547
    },
    "title": "The Hangover",
    "year": 2009
  },
  {
    "ids": {
      "imdb": "tt0096874",
      "slug": "back-to-the-future-part-ii-1989",
      "tmdb": 165,
      "trakt": 384
    },
    "title": "Back to the Future Part II",
    "year": 1989
  },
  {
    "ids": {
      "imdb": "tt1156398",
      "slug": "zombieland-2009",
      "tmdb": 19908,
      "trakt": 205
    },
    "title": "Zombieland",
    "year": 2009
  },
  {
    "ids": {
      "imdb": "tt1375666",
      "slug": "inception-2010",
      "tmdb": 27205,
      "trakt": 108
    },
    "title": "Inception",
    "year": 2010
  },
  {
    "ids": {
      "imdb": "tt0172495",
      "slug": "gladiator-2000",
      "tmdb": 98,
      "trakt": 463
    },
    "title": "Gladiator",
    "year": 2000
  },
  {
    "ids": {
      "imdb": "tt0208092",
      "slug": "snatch-2000",
      "tmdb": 107,
      "trakt": 1473
    },
    "title": "Snatch",
    "year": 2000
  },
  {
    "ids": {
      "imdb": "tt0246578",
      "slug": "donnie-darko-2001",
      "tmdb": 141,
      "trakt": 114
    },
    "title": "Donnie Darko",
    "year": 2001
  }
]
```

<h3 id="get-related-movies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all movie releases

<a id="opIdGet all movie releases"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/releases/us \
  -H 'Accept: application/json'
```

`GET /movies/{id}/releases/{country}`

Returns all releases for a movie including country, certification, release date, release type, and note. The release type can be set to `unknown`, `premiere`, `limited`, `theatrical`, `digital`, `physical`, or `tv`. The `note` might have optional info such as the film festival name for a `premiere` release or Blu-ray specs for a `physical` release. We pull this info from [TMDB](https://developers.themoviedb.org/3/movies/get-movie-release-dates).

<h3 id="get-all-movie-releases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|country|path|string|true|2 character country code|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "certification": "PG",
    "country": "us",
    "note": null,
    "release_date": "2010-12-16",
    "release_type": "theatrical"
  },
  {
    "certification": "PG",
    "country": "gb",
    "note": null,
    "release_date": "2010-12-17",
    "release_type": "theatrical"
  },
  {
    "certification": "12",
    "country": "de",
    "note": null,
    "release_date": "2011-01-26",
    "release_type": "theatrical"
  },
  {
    "certification": "U",
    "country": "fr",
    "note": null,
    "release_date": "2011-02-09",
    "release_type": "theatrical"
  },
  {
    "certification": "",
    "country": "it",
    "note": null,
    "release_date": "2010-12-29",
    "release_type": "theatrical"
  },
  {
    "certification": "PG-13",
    "country": "tr",
    "note": null,
    "release_date": "2011-01-28",
    "release_type": "theatrical"
  },
  {
    "certification": "",
    "country": "ca",
    "note": null,
    "release_date": "2010-12-17",
    "release_type": "theatrical"
  },
  {
    "certification": "12",
    "country": "nl",
    "note": null,
    "release_date": "2011-01-28",
    "release_type": "theatrical"
  },
  {
    "certification": "Б14",
    "country": "kz",
    "note": null,
    "release_date": "2010-12-15",
    "release_type": "theatrical"
  },
  {
    "certification": "12",
    "country": "sk",
    "note": null,
    "release_date": "2011-01-06",
    "release_type": "theatrical"
  },
  {
    "certification": "전체 관람가",
    "country": "kr",
    "note": null,
    "release_date": "2010-12-29",
    "release_type": "theatrical"
  },
  {
    "certification": "PG",
    "country": "au",
    "note": null,
    "release_date": "2010-12-16",
    "release_type": "theatrical"
  },
  {
    "certification": "PG",
    "country": "gr",
    "note": null,
    "release_date": "2010-12-16",
    "release_type": "theatrical"
  }
]
```

<h3 id="get-all-movie-releases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get movie stats

<a id="opIdGet movie stats"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/stats \
  -H 'Accept: application/json'
```

`GET /movies/{id}/stats`

Returns lots of movie stats.

<h3 id="get-movie-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "collectors": 27379,
  "comments": 36,
  "lists": 4561,
  "plays": 51033,
  "recommended": 54321,
  "votes": 7866,
  "watchers": 39204
}
```

<h3 id="get-movie-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get movie studios

<a id="opIdGet movie studios"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/studios \
  -H 'Accept: application/json'
```

`GET /movies/{id}/studios`

Returns all studios for a movie.

<h3 id="get-movie-studios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "country": "us",
    "ids": {
      "slug": "20th-century-fox",
      "tmdb": 25,
      "trakt": 20
    },
    "name": "20th Century Fox"
  },
  {
    "country": "us",
    "ids": {
      "slug": "marvel-entertainment",
      "tmdb": 7505,
      "trakt": 19
    },
    "name": "Marvel Entertainment"
  },
  {
    "country": "us",
    "ids": {
      "slug": "the-donners-company",
      "tmdb": 431,
      "trakt": 25
    },
    "name": "The Donners' Company"
  },
  {
    "country": "us",
    "ids": {
      "slug": "tsg-entertainment",
      "tmdb": 22213,
      "trakt": 22
    },
    "name": "TSG Entertainment"
  },
  {
    "country": "us",
    "ids": {
      "slug": "genre-films",
      "tmdb": 28788,
      "trakt": 23
    },
    "name": "Genre Films"
  }
]
```

<h3 id="get-movie-studios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all movie translations

<a id="opIdGet all movie translations"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/translations/es \
  -H 'Accept: application/json'
```

`GET /movies/{id}/translations/{language}`

Returns all translations for a movie, including language and translated values for title, tagline and overview.

<h3 id="get-all-movie-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|language|path|string|true|2 character language code|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "country": "us",
    "language": "en",
    "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    "tagline": "Evil fears the knight.",
    "title": "Batman Begins"
  },
  {
    "country": "de",
    "language": "de",
    "overview": "...",
    "tagline": "Das Böse fürchtet den Ritter.",
    "title": "Batman Begins"
  },
  {
    "country": "da",
    "language": "da",
    "overview": "...",
    "tagline": "",
    "title": "Batman Begins"
  }
]
```

<h3 id="get-all-movie-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get users watching right now

<a id="opIdGet users watching right now"></a>

> Code samples

```bash
curl https://example.com/movies/tron-legacy-2010/watching \
  -H 'Accept: application/json'
```

`GET /movies/{id}/watching`

#### &#10024; Extended Info

Returns all users watching this movie right now.

<h3 id="get-users-watching-right-now-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "slug": "justin"
    },
    "name": "Justin Nemeth",
    "private": false,
    "username": "justin",
    "vip": true,
    "vip_ep": false
  },
  {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
]
```

<h3 id="get-users-watching-right-now-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-networks">Networks</h1>

## Get networks

<a id="opIdGet networks"></a>

> Code samples

```bash
curl https://example.com/networks \
  -H 'Accept: application/json'
```

`GET /networks`

Get a list of all TV networks, including the name.

<h3 id="get-networks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "name": "A&E"
  },
  {
    "name": "ABC (US)"
  },
  {
    "name": "AMC"
  }
]
```

<h3 id="get-networks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-people">People</h1>

## Get recently updated people Trakt IDs

<a id="opIdGet recently updated people Trakt IDs"></a>

> Code samples

```bash
curl https://example.com/people/updates/id/2020-11-27T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /people/updates/id/{start_date}`

#### &#128196; Pagination

Returns all people Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.

**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.

**Note:** The `start_date` can only be a maximum of 30 days in the past.

<h3 id="get-recently-updated-people-trakt-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Updated since this date and time.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  1,
  20,
  34,
  50
]
```

<h3 id="get-recently-updated-people-trakt-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get recently updated people

<a id="opIdGet recently updated people"></a>

> Code samples

```bash
curl https://example.com/people/updates/2020-11-27T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /people/updates/{start_date}`

#### &#128196; Pagination &#10024; Extended Info

Returns all people updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.

**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.

**Note:** The `start_date` can only be a maximum of 30 days in the past.

<h3 id="get-recently-updated-people-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Updated since this date and time.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "person": {
      "ids": {
        "imdb": "nm1214435",
        "slug": "charlie-cox",
        "tmdb": 23458,
        "trakt": 417084,
        "tvrage": 145276
      },
      "name": "Charlie Cox"
    },
    "updated_at": "2022-11-03T18:58:09.000Z"
  },
  {
    "person": {
      "ids": {
        "imdb": "nm2832695",
        "slug": "deborah-ann-woll",
        "tmdb": 212154,
        "trakt": 451773,
        "tvrage": null
      },
      "name": "Deborah Ann Woll"
    },
    "updated_at": "2022-11-03T18:58:09.000Z"
  }
]
```

<h3 id="get-recently-updated-people-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a single person

<a id="opIdGet a single person"></a>

> Code samples

```bash
curl https://example.com/people/bryan-cranston \
  -H 'Accept: application/json'
```

`GET /people/{id}`

#### &#10024; Extended Info

Returns a single person's details.

#### Gender

If available, the `gender` property will be set to `male`, `female`, or `non_binary`.

#### Known For Department

If available, the `known_for_department` property will be set to `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, or `editing`. Many people have credits across departments, `known_for` allows you to select their default credits more accurately.

<h3 id="get-a-single-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "biography": "Bryan Lee Cranston (born March 7, 1956) is an American actor, voice actor, writer and director.He is perhaps best known for his roles as Hal, the father in the Fox situation comedy \"Malcolm in the Middle\", and as Walter White in the AMC drama series Breaking Bad, for which he has won three consecutive Outstanding Lead Actor in a Drama Series Emmy Awards. Other notable roles include Dr. Tim Whatley on Seinfeld, Doug Heffernan's neighbor in The King of Queens, Astronaut Buzz Aldrin in From the Earth to the Moon, and Ted Mosby's boss on How I Met Your Mother.  Description above from the Wikipedia article Bryan Cranston, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
  "birthday": "1956-03-07",
  "birthplace": "San Fernando Valley, California, USA",
  "death": null,
  "gender": "male",
  "homepage": "http://www.bryancranston.com/",
  "ids": {
    "imdb": "nm0186505",
    "slug": "bryan-cranston",
    "tmdb": 17419,
    "trakt": 1
  },
  "known_for_department": "acting",
  "name": "Bryan Cranston",
  "social_ids": {
    "facebook": "thebryancranston",
    "instagram": "bryancranston",
    "twitter": "BryanCranston",
    "wikipedia": null
  },
  "updated_at": "2022-11-03T17:00:54.000Z"
}
```

<h3 id="get-a-single-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/people/bryan-cranston?extended=full<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get lists containing this person

<a id="opIdGet lists containing this person"></a>

> Code samples

```bash
curl https://example.com/people/bryan-cranston/lists/personal/popular \
  -H 'Accept: application/json'
```

`GET /people/{id}/lists/{type}/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all lists that contain this person. By default, `personal` lists are returned sorted by the most `popular`.

<h3 id="get-lists-containing-this-person-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|type|path|string|true|Filter for a specific list type|
|sort|path|string|true|How to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|personal|
|type|official|
|sort|popular|
|sort|likes|
|sort|comments|
|sort|items|
|sort|added|
|sort|updated|

> Example responses

> 200 Response

```json
[
  {
    "allow_comments": true,
    "comment_count": 10,
    "created_at": "2014-10-11T17:00:54.000Z",
    "description": "How could my brain conceive them?",
    "display_numbers": true,
    "ids": {
      "slug": "incredible-thoughts",
      "trakt": 1337
    },
    "item_count": 50,
    "likes": 99,
    "name": "Incredible Thoughts",
    "privacy": "public",
    "sort_by": "rank",
    "sort_how": "asc",
    "type": "personal",
    "updated_at": "2014-10-11T17:00:54.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-lists-containing-this-person-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get movie credits

<a id="opIdGet movie credits"></a>

> Code samples

```bash
curl https://example.com/people/bryan-cranston/movies \
  -H 'Accept: application/json'
```

`GET /people/{id}/movies`

#### &#10024; Extended Info

Returns all movies where this person is in the `cast` or `crew`. Each `cast` object will have a `characters` array and a standard `movie` object.

The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `movie` object.

<h3 id="get-movie-credits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "cast": [
    {
      "characters": [
        "Joe Brody"
      ],
      "movie": {
        "ids": {
          "imdb": "tt0831387",
          "slug": "godzilla-2014",
          "tmdb": 124905,
          "trakt": 24
        },
        "title": "Godzilla",
        "year": 2014
      }
    }
  ],
  "crew": {
    "directing": [
      {
        "jobs": [
          "Director"
        ],
        "movie": {
          "ids": {
            "imdb": "tt0831387",
            "slug": "godzilla-2014",
            "tmdb": 124905,
            "trakt": 24
          },
          "title": "Godzilla",
          "year": 2014
        }
      }
    ],
    "producing": [
      {
        "jobs": [
          "Producer"
        ],
        "movie": {
          "ids": {
            "imdb": "tt0831387",
            "slug": "godzilla-2014",
            "tmdb": 124905,
            "trakt": 24
          },
          "title": "Godzilla",
          "year": 2014
        }
      }
    ],
    "writing": [
      {
        "jobs": [
          "Screenplay"
        ],
        "movie": {
          "ids": {
            "imdb": "tt0831387",
            "slug": "godzilla-2014",
            "tmdb": 124905,
            "trakt": 24
          },
          "title": "Godzilla",
          "year": 2014
        }
      }
    ]
  }
}
```

<h3 id="get-movie-credits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get show credits

<a id="opIdGet show credits"></a>

> Code samples

```bash
curl https://example.com/people/bryan-cranston/shows \
  -H 'Accept: application/json'
```

`GET /people/{id}/shows`

#### &#10024; Extended Info

Returns all shows where this person is in the `cast` or `crew`, including the `episode_count` for which they appear. Each `cast` object will have a `characters` array and a standard `show` object. If `series_regular` is `true`, this person is a series regular and not simply a guest star.

The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `show` object.

<h3 id="get-show-credits-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "cast": [
    {
      "characters": [
        "Walter White"
      ],
      "episode_count": 62,
      "series_regular": true,
      "show": {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      }
    }
  ],
  "crew": {
    "production": [
      {
        "jobs": [
          "Producer"
        ],
        "show": {
          "ids": {
            "imdb": "tt0903747",
            "slug": "breaking-bad",
            "tmdb": 1396,
            "trakt": 1,
            "tvdb": 81189
          },
          "title": "Breaking Bad",
          "year": 2008
        }
      }
    ]
  }
}
```

<h3 id="get-show-credits-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-recommendations">Recommendations</h1>

Trakt social recommendations use all the `Recommendations` lists from the users you follow. The more users you follow with similar tastes, the better your recommendations will be. We also use other factors for the algorithm to further personalize what gets recommended.

## Get movie recommendations

<a id="opIdGet movie recommendations"></a>

> Code samples

```bash
curl https://example.com/recommendations/movies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /recommendations/movies`

#### &#128274; OAuth Required &#10024; Extended Info

Movie recommendations for a user. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page. Set `ignore_collected=true` to filter out movies the user has already collected or `ignore_watchlisted=true` to filter out movies the user has already watchlisted.

<h3 id="get-movie-recommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore_collected|query|string|false|filter out collected movies|
|ignore_watchlisted|query|string|false|filter out watchlisted movies|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ignore_collected|true|
|ignore_collected|false|
|ignore_watchlisted|true|
|ignore_watchlisted|false|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "imdb": "tt2545118",
      "slug": "blackfish-2013",
      "tmdb": 158999,
      "trakt": 58
    },
    "title": "Blackfish",
    "year": 2013
  },
  {
    "ids": {
      "imdb": "tt1566648",
      "slug": "waiting-for-superman-2010",
      "tmdb": 39440,
      "trakt": 289
    },
    "title": "Waiting for Superman",
    "year": 2010
  },
  {
    "ids": {
      "imdb": "tt1645089",
      "slug": "inside-job-2010",
      "tmdb": 44639,
      "trakt": 329
    },
    "title": "Inside Job",
    "year": 2010
  },
  {
    "ids": {
      "imdb": "tt0332379",
      "slug": "school-of-rock-2003",
      "tmdb": 1584,
      "trakt": 503
    },
    "title": "School of Rock",
    "year": 2003
  },
  {
    "ids": {
      "imdb": "tt1189340",
      "slug": "the-lincoln-lawyer-2011",
      "tmdb": 50348,
      "trakt": 513
    },
    "title": "The Lincoln Lawyer",
    "year": 2011
  },
  {
    "ids": {
      "imdb": "tt1488555",
      "slug": "the-change-up-2011",
      "tmdb": 49520,
      "trakt": 822
    },
    "title": "The Change-Up",
    "year": 2011
  },
  {
    "ids": {
      "imdb": "tt1306980",
      "slug": "50-50-2011",
      "tmdb": 40807,
      "trakt": 907
    },
    "title": "50/50",
    "year": 2011
  },
  {
    "ids": {
      "imdb": "tt1210166",
      "slug": "moneyball-2011",
      "tmdb": 60308,
      "trakt": 945
    },
    "title": "Moneyball",
    "year": 2011
  },
  {
    "ids": {
      "imdb": "tt0903660",
      "slug": "killer-at-large-2008",
      "tmdb": 37312,
      "trakt": 3549
    },
    "title": "Killer at Large",
    "year": 2008
  },
  {
    "ids": {
      "imdb": "tt0485773",
      "slug": "green-day-bullet-in-a-bible-2005",
      "tmdb": 26627,
      "trakt": 3770
    },
    "title": "Green Day: Bullet in a Bible",
    "year": 2005
  }
]
```

<h3 id="get-movie-recommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Hide a movie recommendation

<a id="opIdHide a movie recommendation"></a>

> Code samples

```bash
curl https://example.com/recommendations/movies/922 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /recommendations/movies/{id}`

#### &#128274; OAuth Required

Hide a movie from getting recommended anymore.

<h3 id="hide-a-movie-recommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

<h3 id="hide-a-movie-recommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get show recommendations

<a id="opIdGet show recommendations"></a>

> Code samples

```bash
curl https://example.com/recommendations/shows \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /recommendations/shows`

#### &#128274; OAuth Required &#10024; Extended Info

TV show recommendations for a user. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page. Set `ignore_collected=true` to filter out shows the user has already collected or `ignore_watchlisted=true` to filter out shows the user has already watchlisted.

<h3 id="get-show-recommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ignore_collected|query|string|false|filter out collected shows|
|ignore_watchlisted|query|string|false|filter out watchlisted movies|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|ignore_collected|true|
|ignore_collected|false|
|ignore_watchlisted|true|
|ignore_watchlisted|false|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "imdb": "tt0429318",
      "slug": "the-biggest-loser",
      "tmdb": 579,
      "trakt": 9,
      "tvdb": 75166
    },
    "title": "The Biggest Loser",
    "year": 2004
  },
  {
    "ids": {
      "imdb": "tt1442550",
      "slug": "shark-tank",
      "tmdb": 30703,
      "trakt": 36,
      "tvdb": 100981
    },
    "title": "Shark Tank",
    "year": 2009
  },
  {
    "ids": {
      "imdb": "tt0437005",
      "slug": "hell-s-kitchen",
      "tmdb": 2370,
      "trakt": 40,
      "tvdb": 74897
    },
    "title": "Hell's Kitchen",
    "year": 2005
  },
  {
    "ids": {
      "imdb": "tt1515193",
      "slug": "the-big-c",
      "tmdb": 32406,
      "trakt": 51,
      "tvdb": 161501
    },
    "title": "The Big C",
    "year": 2010
  },
  {
    "ids": {
      "imdb": "tt1001482",
      "slug": "united-states-of-tara",
      "tmdb": 7097,
      "trakt": 69,
      "tvdb": 83463
    },
    "title": "United States of Tara",
    "year": 2009
  },
  {
    "ids": {
      "imdb": "tt1229413",
      "slug": "hung",
      "tmdb": 18614,
      "trakt": 168,
      "tvdb": 82091
    },
    "title": "Hung",
    "year": 2009
  },
  {
    "ids": {
      "imdb": "tt0421030",
      "slug": "big-love",
      "tmdb": 4392,
      "trakt": 272,
      "tvdb": 74156
    },
    "title": "Big Love",
    "year": 2006
  },
  {
    "ids": {
      "imdb": "tt2467372",
      "slug": "brooklyn-nine-nine",
      "tmdb": 48891,
      "trakt": 599,
      "tvdb": 269586
    },
    "title": "Brooklyn Nine-Nine",
    "year": 2013
  },
  {
    "ids": {
      "imdb": "tt1441135",
      "slug": "flashforward",
      "tmdb": 19092,
      "trakt": 677,
      "tvdb": 84024
    },
    "title": "FlashForward",
    "year": 2009
  },
  {
    "ids": {
      "imdb": "tt0201391",
      "slug": "roswell",
      "tmdb": 4624,
      "trakt": 717,
      "tvdb": 73965
    },
    "title": "Roswell",
    "year": 1999
  }
]
```

<h3 id="get-show-recommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Hide a show recommendation

<a id="opIdHide a show recommendation"></a>

> Code samples

```bash
curl https://example.com/recommendations/shows/922 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /recommendations/shows/{id}`

#### &#128274; OAuth Required

Hide a show from getting recommended anymore.

<h3 id="hide-a-show-recommendation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

<h3 id="hide-a-show-recommendation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="trakt-api-scrobble">Scrobble</h1>

Scrobbling is an automatic way to track what a user is watching in a media center. The media center should send events that correspond to starting, pausing, and stopping (or finishing) watching a movie or episode.

## Pause watching in a media center

<a id="opIdPause watching in a media center"></a>

> Code samples

```bash
curl https://example.com/scrobble/pause \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "app_date": "2014-09-22",
    "app_version": "1.0",
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "progress": 75
  }'
```

`POST /scrobble/pause`

#### &#128274; OAuth Required

Use this method when the video is paused. The playback progress will be saved and [**/sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position. Unpause a video by calling the [**/scrobble/start**](/reference/scrobble/start/) method again.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |
| `progress` <span style="color:red;">*</a> | float | Progress percentage between 0 and 100. |
| `app_version` | string | Version number of the app. |
| `app_date` | string | Build date of the app. |

> Body parameter

```json
{
  "app_date": "2014-09-22",
  "app_version": "1.0",
  "movie": {
    "ids": {
      "imdb": "tt2015381",
      "slug": "guardians-of-the-galaxy-2014",
      "tmdb": 118340,
      "trakt": 28
    },
    "title": "Guardians of the Galaxy",
    "year": 2014
  },
  "progress": 75
}
```

<h3 id="pause-watching-in-a-media-center-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» app_date|body|string|false|none|
|» app_version|body|string|false|none|
|» movie|body|object|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» progress|body|number|false|none|

> Example responses

> 201 Response

```json
{
  "action": "pause",
  "id": 0,
  "movie": {
    "ids": {
      "imdb": "tt2015381",
      "slug": "guardians-of-the-galaxy-2014",
      "tmdb": 118340,
      "trakt": 28
    },
    "title": "Guardians of the Galaxy",
    "year": 2014
  },
  "progress": 75,
  "sharing": {
    "tumblr": false,
    "twitter": false
  }
}
```

<h3 id="pause-watching-in-a-media-center-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Start watching in a media center

<a id="opIdStart watching in a media center"></a>

> Code samples

```bash
curl https://example.com/scrobble/start \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "app_date": "2014-09-22",
    "app_version": "1.0",
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "progress": 1.25
  }'
```

`POST /scrobble/start`

#### &#128274; OAuth Required

Use this method when the video initially starts playing or is unpaused. This will remove any playback progress if it exists.

**Note:** A watching status will auto expire after the remaining runtime has elapsed. There is no need to call this method again while continuing to watch the same item.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |
| `progress` <span style="color:red;">*</a> | float | Progress percentage between 0 and 100. |
| `app_version` | string | Version number of the app. |
| `app_date` | string | Build date of the app. |

> Body parameter

```json
{
  "app_date": "2014-09-22",
  "app_version": "1.0",
  "movie": {
    "ids": {
      "imdb": "tt2015381",
      "slug": "guardians-of-the-galaxy-2014",
      "tmdb": 118340,
      "trakt": 28
    },
    "title": "Guardians of the Galaxy",
    "year": 2014
  },
  "progress": 1.25
}
```

<h3 id="start-watching-in-a-media-center-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» app_date|body|string|false|none|
|» app_version|body|string|false|none|
|» movie|body|object|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» progress|body|number|false|none|

> Example responses

> 201 Response

```json
{
  "action": "start",
  "episode": {
    "ids": {
      "imdb": null,
      "tmdb": null,
      "trakt": 856373,
      "tvdb": 362082
    },
    "number": 21,
    "season": 9,
    "title": "Light the Fire of Shandia! Wiper the Warrior"
  },
  "id": 0,
  "progress": 10,
  "sharing": {
    "tumblr": false,
    "twitter": true
  },
  "show": {
    "ids": {
      "imdb": "tt0388629",
      "slug": "one-piece",
      "tmdb": 37854,
      "trakt": 37696,
      "tvdb": 81797
    },
    "title": "One Piece",
    "year": 1999
  }
}
```

<h3 id="start-watching-in-a-media-center-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2, oauth2, oauth2, oauth2
</aside>

## Stop or finish watching in a media center

<a id="opIdStop or finish watching in a media center"></a>

> Code samples

```bash
curl https://example.com/scrobble/stop \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "app_date": "2014-09-22",
    "app_version": "1.0",
    "movie": {
      "ids": {
        "imdb": "tt2015381",
        "slug": "guardians-of-the-galaxy-2014",
        "tmdb": 118340,
        "trakt": 28
      },
      "title": "Guardians of the Galaxy",
      "year": 2014
    },
    "progress": 99.9
  }'
```

`POST /scrobble/stop`

#### &#128274; OAuth Required

Use this method when the video is stopped or finishes playing on its own. If the progress is above 80%, the video will be scrobbled and the `action` will be set to **scrobble**. A unique history `id` (64-bit integer) will be returned and can be used to reference this `scrobble` directly.

If the progress is less than 80%, it will be treated as a *pause* and the `action` will be set to **pause**. The playback progress will be saved and [**/sync/playback**](/reference/sync/playback/) can be used to resume the video from this exact position.

**Note:** If you prefer to use a threshold higher than 80%, you should use [**/scrobble/pause**](/reference/scrobble/pause/) yourself so it doesn't create duplicate scrobbles.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| item <span style="color:red;">*</a> | object | `movie` or `episode` object. (see examples &#8594;) |
| `progress` <span style="color:red;">*</a> | flloat | Progress percentage between 0 and 100. |
| `app_version` | string | Version number of the app. |
| `app_date` | string | Build date of the app. |

**Note:** If the same item was just scrobbled, a `409` HTTP status code will returned to avoid scrobbling a duplicate. The response will contain a `watched_at` timestamp when the item was last scrobbled and a `expires_at` timestamp when the item can be scrobbled again.

> Body parameter

```json
{
  "app_date": "2014-09-22",
  "app_version": "1.0",
  "movie": {
    "ids": {
      "imdb": "tt2015381",
      "slug": "guardians-of-the-galaxy-2014",
      "tmdb": 118340,
      "trakt": 28
    },
    "title": "Guardians of the Galaxy",
    "year": 2014
  },
  "progress": 99.9
}
```

<h3 id="stop-or-finish-watching-in-a-media-center-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» app_date|body|string|false|none|
|» app_version|body|string|false|none|
|» movie|body|object|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» progress|body|number|false|none|

> Example responses

> 201 Response

```json
{
  "action": "pause",
  "id": 0,
  "movie": {
    "ids": {
      "imdb": "tt2015381",
      "slug": "guardians-of-the-galaxy-2014",
      "tmdb": 118340,
      "trakt": 28
    },
    "title": "Guardians of the Galaxy",
    "year": 2014
  },
  "progress": 75,
  "sharing": {
    "tumblr": false,
    "twitter": false
  }
}
```

> 409 Response

```json
{
  "expires_at": "2014-10-15T23:21:29.000Z",
  "watched_at": "2014-10-15T22:21:29.000Z"
}
```

<h3 id="stop-or-finish-watching-in-a-media-center-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|409|Conflict|The same item was recently scrobbled.|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2, oauth2, oauth2, oauth2, oauth2
</aside>

<h1 id="trakt-api-search">Search</h1>

Searches can use queries or ID lookups. Queries will search text fields like the title and overview. ID lookups are helpful if you have an external ID and want to get the Trakt ID and info. These methods can search for movies, shows, episodes, people, and lists.

## Get ID lookup results

<a id="opIdGet ID lookup results"></a>

> Code samples

```bash
curl https://example.com/search/imdb/tt0848228 \
  -H 'Accept: application/json'
```

`GET /search/{id_type}/{id}`

#### &#128196; Pagination &#10024; Extended Info

Lookup items by their Trakt, IMDB, TMDB, or TVDB ID. If you use the search url without a `type` it might return multiple items if the `id_type` is not globally unique. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.

| Type | URL |
|---|---|
| `trakt` | `/search/trakt/:id` |
|  | `/search/trakt/:id?type=movie` |
|  | `/search/trakt/:id?type=show` |
|  | `/search/trakt/:id?type=episode` |
|  | `/search/trakt/:id?type=person` |
| `imdb` | `/search/imdb/:id` |
| `tmdb` | `/search/tmdb/:id` |
|  | `/search/tmdb/:id?type=movie` |
|  | `/search/tmdb/:id?type=show` |
|  | `/search/tmdb/:id?type=episode` |
|  | `/search/tmdb/:id?type=person` |
| `tvdb` | `/search/tvdb/:id` |
|  | `/search/tvdb/:id?type=show` |
|  | `/search/tvdb/:id?type=episode` |

<h3 id="get-id-lookup-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id_type|path|string|true|Type of ID to lookup.|
|id|path|string|true|ID that matches with the type.|
|type|query|string|false|Search type.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|id_type|trakt|
|id_type|imdb|
|id_type|tmdb|
|id_type|tvdb|
|type|movie|
|type|show|
|type|episode|
|type|person|
|type|list|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt1104001",
        "slug": "tron-legacy-2010",
        "tmdb": 20526,
        "trakt": 12601
      },
      "title": "TRON: Legacy",
      "year": 2010
    },
    "score": null,
    "type": "movie"
  }
]
```

<h3 id="get-id-lookup-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/search/trakt/12601?type=movie<br>/search/imdb/tt1104001<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get text query results

<a id="opIdGet text query results"></a>

> Code samples

```bash
curl 'https://example.com/search/movie?query=tron' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '"title"'
```

`GET /search/{type}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Search all text fields that a media object contains (i.e. title, overview, etc). Results are ordered by the most relevant score. Specify the `type` of results by sending a single value or a comma delimited string for multiple types.

#### Special Characters

Our search engine (Solr) gives the following characters special meaning when they appear in a query:

`+ - && || ! ( ) { } [ ] ^ " ~ * ? : /`

To interpret any of these characters literally (and not as a special character), precede the character with a backslash `\` character.

#### Search Fields

By default, all text fields are used to search for the `query`. You can optionally specify the `fields` parameter with a single value or comma delimited string for multiple fields. Each `type` has specific `fields` that can be specified. This can be useful if you want to support more strict searches (i.e. title only).

| Type | Field |
|---|---|
| `movie` | `title` |
|  | `tagline` |
|  | `overview` |
|  | `people` |
|  | `translations` |
|  | `aliases` |
| `show` | `title` |
|  | `overview` |
|  | `people` |
|  | `translations` |
|  | `aliases` |
| `episode` | `title` |
|  | `overview` |
| `person` | `name` |
|  | `biography` |
| `list` | `name` |
|  | `description` |

> Body parameter

```json
"title"
```

<h3 id="get-text-query-results-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Search type.|
|query|query|string|true|Search all text based fields.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|string|false|Specific text fields.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movie|
|type|show|
|type|episode|
|type|person|
|type|list|

> Example responses

> 200 Response

```json
[
  {
    "movie": {
      "ids": {
        "imdb": "tt1104001",
        "slug": "tron-legacy-2010",
        "tmdb": 20526,
        "trakt": 12601
      },
      "title": "TRON: Legacy",
      "year": 2010
    },
    "score": 26.019499,
    "type": "movie"
  },
  {
    "score": 19.533358,
    "show": {
      "ids": {
        "imdb": "tt1812523",
        "slug": "tron-uprising",
        "tmdb": 34356,
        "trakt": 34209,
        "tvdb": 258480
      },
      "title": "Tron: Uprising",
      "year": 2012
    },
    "type": "show"
  },
  {
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 786460,
        "trakt": 793693,
        "tvdb": 4318713
      },
      "number": 1,
      "season": 1,
      "title": "The Renegade (1)"
    },
    "score": 42.50835,
    "show": {
      "ids": {
        "imdb": "tt1812523",
        "slug": "tron-uprising",
        "tmdb": 34356,
        "trakt": 34209,
        "tvdb": 258480
      },
      "title": "Tron: Uprising",
      "year": 2012
    },
    "type": "episode"
  },
  {
    "person": {
      "ids": {
        "imdb": "nm0000313",
        "slug": "jeff-bridges",
        "tmdb": 1229,
        "trakt": 4173
      },
      "name": "Jeff Bridges"
    },
    "score": 53.421608,
    "type": "person"
  },
  {
    "list": {
      "allow_comments": true,
      "comment_count": 0,
      "created_at": "2016-04-22T05:54:55.000Z",
      "description": "Let food be thy medicine and medicine be thy food.",
      "display_numbers": true,
      "ids": {
        "slug": "open-your-eyes",
        "trakt": 2180135
      },
      "item_count": 22,
      "likes": 6,
      "name": "Open Your Eyes",
      "privacy": "public",
      "sort_by": "rank",
      "sort_how": "asc",
      "type": "personal",
      "updated_at": "2016-06-29T09:47:40.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin Nemeth",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": true
      }
    },
    "score": 38.643196,
    "type": "list"
  }
]
```

<h3 id="get-text-query-results-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/search/movie,show,episode,person,list?query=tron<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-shows">Shows</h1>

## Get the most anticipated shows

<a id="opIdGet the most anticipated shows"></a>

> Code samples

```bash
curl https://example.com/shows/anticipated \
  -H 'Accept: application/json'
```

`GET /shows/anticipated`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most anticipated shows based on the number of lists a show appears on.

<h3 id="get-the-most-anticipated-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "list_count": 5383,
    "show": {
      "ids": {
        "imdb": "tt4016454",
        "slug": "supergirl",
        "tmdb": 62688,
        "trakt": 99046,
        "tvdb": 295759
      },
      "title": "Supergirl",
      "year": 2015
    }
  },
  {
    "list_count": 3132,
    "show": {
      "ids": {
        "imdb": "tt2357547",
        "slug": "marvel-s-jessica-jones",
        "tmdb": 38472,
        "trakt": 79385,
        "tvdb": 284190
      },
      "title": "Marvel's Jessica Jones",
      "year": 2015
    }
  },
  {
    "list_count": 3095,
    "show": {
      "ids": {
        "imdb": "tt4052886",
        "slug": "lucifer",
        "tmdb": 63174,
        "trakt": 98990,
        "tvdb": 295685
      },
      "title": "Lucifer",
      "year": 2016
    }
  },
  {
    "list_count": 1704,
    "show": {
      "ids": {
        "imdb": "tt4189022",
        "slug": "ash-vs-evil-dead",
        "tmdb": 62264,
        "trakt": 99460,
        "tvdb": 296295
      },
      "title": "Ash vs Evil Dead",
      "year": 2015
    }
  },
  {
    "list_count": 1655,
    "show": {
      "ids": {
        "imdb": "tt3230854",
        "slug": "the-expanse",
        "tmdb": null,
        "trakt": 77199,
        "tvdb": 280619
      },
      "title": "The Expanse",
      "year": 2015
    }
  },
  {
    "list_count": 1481,
    "show": {
      "ids": {
        "imdb": "tt3865236",
        "slug": "into-the-badlands",
        "tmdb": 47450,
        "trakt": 82217,
        "tvdb": 289079
      },
      "title": "Into the Badlands",
      "year": 2015
    }
  },
  {
    "list_count": 1332,
    "show": {
      "ids": {
        "imdb": "tt4209256",
        "slug": "colony",
        "tmdb": 62858,
        "trakt": 95966,
        "tvdb": 284210
      },
      "title": "Colony",
      "year": 2016
    }
  },
  {
    "list_count": 1060,
    "show": {
      "ids": {
        "imdb": "tt4428124",
        "slug": "wicked-city",
        "tmdb": 62927,
        "trakt": 98888,
        "tvdb": 295518
      },
      "title": "Wicked City",
      "year": 2015
    }
  },
  {
    "list_count": 982,
    "show": {
      "ids": {
        "imdb": "tt3322314",
        "slug": "marvel-s-luke-cage",
        "tmdb": 62126,
        "trakt": 79382,
        "tvdb": 284192
      },
      "title": "Marvel's Luke Cage",
      "year": 2016
    }
  },
  {
    "list_count": 838,
    "show": {
      "ids": {
        "imdb": "tt3216608",
        "slug": "dr-ken-1969",
        "tmdb": 62776,
        "trakt": 98913,
        "tvdb": 295557
      },
      "title": "Dr. Ken",
      "year": 2015
    }
  }
]
```

<h3 id="get-the-most-anticipated-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most collected shows

<a id="opIdGet the most collected shows"></a>

> Code samples

```bash
curl https://example.com/shows/collected/weekly \
  -H 'Accept: application/json'
```

`GET /shows/collected/{period}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most collected (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

<h3 id="get-the-most-collected-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|Time period.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|yearly|
|period|all|

> Example responses

> 200 Response

```json
[
  {
    "collected_count": 7427018,
    "collector_count": 23876,
    "play_count": 19286818,
    "show": {
      "ids": {
        "imdb": "tt0096697",
        "slug": "the-simpsons",
        "tmdb": 456,
        "trakt": 455,
        "tvdb": 71663
      },
      "title": "The Simpsons",
      "year": 1989
    },
    "watcher_count": 56216
  },
  {
    "collected_count": 6635583,
    "collector_count": 54953,
    "play_count": 23542030,
    "show": {
      "ids": {
        "imdb": "tt0898266",
        "slug": "the-big-bang-theory",
        "tmdb": 1418,
        "trakt": 1409,
        "tvdb": 80379
      },
      "title": "The Big Bang Theory",
      "year": 2007
    },
    "watcher_count": 155291
  },
  {
    "collected_count": 4529880,
    "collector_count": 32335,
    "play_count": 19787304,
    "show": {
      "ids": {
        "imdb": "tt0460649",
        "slug": "how-i-met-your-mother",
        "tmdb": 1100,
        "trakt": 1095,
        "tvdb": 75760
      },
      "title": "How I Met Your Mother",
      "year": 2005
    },
    "watcher_count": 100242
  },
  {
    "collected_count": 3550246,
    "collector_count": 4511,
    "play_count": 17845449,
    "show": {
      "ids": {
        "imdb": "tt0115147",
        "slug": "the-daily-show-with-jon-stewart",
        "tmdb": 2224,
        "trakt": 2211,
        "tvdb": 71256
      },
      "title": "The Daily Show with Jon Stewart",
      "year": 1996
    },
    "watcher_count": 8050
  },
  {
    "collected_count": 3347336,
    "collector_count": 16230,
    "play_count": 12379465,
    "show": {
      "ids": {
        "imdb": "tt0108778",
        "slug": "friends",
        "tmdb": 1668,
        "trakt": 1657,
        "tvdb": 79168
      },
      "title": "Friends",
      "year": 1994
    },
    "watcher_count": 53775
  },
  {
    "collected_count": 3273255,
    "collector_count": 23114,
    "play_count": 7879681,
    "show": {
      "ids": {
        "imdb": "tt0182576",
        "slug": "family-guy",
        "tmdb": 1434,
        "trakt": 1425,
        "tvdb": 75978
      },
      "title": "Family Guy",
      "year": 1999
    },
    "watcher_count": 48984
  },
  {
    "collected_count": 3119930,
    "collector_count": 24399,
    "play_count": 11294835,
    "show": {
      "ids": {
        "imdb": "tt0460681",
        "slug": "supernatural",
        "tmdb": 1622,
        "trakt": 1611,
        "tvdb": 78901
      },
      "title": "Supernatural",
      "year": 2005
    },
    "watcher_count": 68267
  },
  {
    "collected_count": 2965842,
    "collector_count": 19450,
    "play_count": 7267474,
    "show": {
      "ids": {
        "imdb": "tt0121955",
        "slug": "south-park",
        "tmdb": 2190,
        "trakt": 2177,
        "tvdb": 75897
      },
      "title": "South Park",
      "year": 1997
    },
    "watcher_count": 41844
  },
  {
    "collected_count": 2570535,
    "collector_count": 28446,
    "play_count": 7997522,
    "show": {
      "ids": {
        "imdb": "tt1442437",
        "slug": "modern-family",
        "tmdb": 1421,
        "trakt": 1412,
        "tvdb": 95011
      },
      "title": "Modern Family",
      "year": 2009
    },
    "watcher_count": 72285
  },
  {
    "collected_count": 2546116,
    "collector_count": 20113,
    "play_count": 8986802,
    "show": {
      "ids": {
        "imdb": "tt0412142",
        "slug": "house",
        "tmdb": 1408,
        "trakt": 1399,
        "tvdb": 73255
      },
      "title": "House",
      "year": 2004
    },
    "watcher_count": 54604
  }
]
```

<h3 id="get-the-most-collected-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most played shows

<a id="opIdGet the most played shows"></a>

> Code samples

```bash
curl https://example.com/shows/played/weekly \
  -H 'Accept: application/json'
```

`GET /shows/played/{period}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most played (a single user can watch multiple episodes multiple times) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

<h3 id="get-the-most-played-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|Time period.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|yearly|
|period|all|

> Example responses

> 200 Response

```json
[
  {
    "collected_count": 6635583,
    "collector_count": 54953,
    "play_count": 23542030,
    "show": {
      "ids": {
        "imdb": "tt0898266",
        "slug": "the-big-bang-theory",
        "tmdb": 1418,
        "trakt": 1409,
        "tvdb": 80379
      },
      "title": "The Big Bang Theory",
      "year": 2007
    },
    "watcher_count": 155291
  },
  {
    "collected_count": 4529880,
    "collector_count": 32335,
    "play_count": 19787304,
    "show": {
      "ids": {
        "imdb": "tt0460649",
        "slug": "how-i-met-your-mother",
        "tmdb": 1100,
        "trakt": 1095,
        "tvdb": 75760
      },
      "title": "How I Met Your Mother",
      "year": 2005
    },
    "watcher_count": 100242
  },
  {
    "collected_count": 7427018,
    "collector_count": 23876,
    "play_count": 19286818,
    "show": {
      "ids": {
        "imdb": "tt0096697",
        "slug": "the-simpsons",
        "tmdb": 456,
        "trakt": 455,
        "tvdb": 71663
      },
      "title": "The Simpsons",
      "year": 1989
    },
    "watcher_count": 56216
  },
  {
    "collected_count": 3550246,
    "collector_count": 4511,
    "play_count": 17845449,
    "show": {
      "ids": {
        "imdb": "tt0115147",
        "slug": "the-daily-show-with-jon-stewart",
        "tmdb": 2224,
        "trakt": 2211,
        "tvdb": 71256
      },
      "title": "The Daily Show with Jon Stewart",
      "year": 1996
    },
    "watcher_count": 8050
  },
  {
    "collected_count": 3347336,
    "collector_count": 16230,
    "play_count": 12379465,
    "show": {
      "ids": {
        "imdb": "tt0108778",
        "slug": "friends",
        "tmdb": 1668,
        "trakt": 1657,
        "tvdb": 79168
      },
      "title": "Friends",
      "year": 1994
    },
    "watcher_count": 53775
  },
  {
    "collected_count": 3119930,
    "collector_count": 24399,
    "play_count": 11294835,
    "show": {
      "ids": {
        "imdb": "tt0460681",
        "slug": "supernatural",
        "tmdb": 1622,
        "trakt": 1611,
        "tvdb": 78901
      },
      "title": "Supernatural",
      "year": 2005
    },
    "watcher_count": 68267
  },
  {
    "collected_count": 2423833,
    "collector_count": 57617,
    "play_count": 9945882,
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 1393,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    },
    "watcher_count": 163097
  },
  {
    "collected_count": 2251539,
    "collector_count": 17682,
    "play_count": 9766448,
    "show": {
      "ids": {
        "imdb": "tt0413573",
        "slug": "grey-s-anatomy",
        "tmdb": 1416,
        "trakt": 1407,
        "tvdb": 73762
      },
      "title": "Grey's Anatomy",
      "year": 2005
    },
    "watcher_count": 46170
  },
  {
    "collected_count": 2546116,
    "collector_count": 20113,
    "play_count": 8986802,
    "show": {
      "ids": {
        "imdb": "tt0412142",
        "slug": "house",
        "tmdb": 1408,
        "trakt": 1399,
        "tvdb": 73255
      },
      "title": "House",
      "year": 2004
    },
    "watcher_count": 54604
  },
  {
    "collected_count": 2436824,
    "collector_count": 73224,
    "play_count": 8784154,
    "show": {
      "ids": {
        "imdb": "tt0944947",
        "slug": "game-of-thrones",
        "tmdb": 1399,
        "trakt": 1390,
        "tvdb": 121361
      },
      "title": "Game of Thrones",
      "year": 2011
    },
    "watcher_count": 203742
  }
]
```

<h3 id="get-the-most-played-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get popular shows

<a id="opIdGet popular shows"></a>

> Code samples

```bash
curl https://example.com/shows/popular \
  -H 'Accept: application/json'
```

`GET /shows/popular`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most popular shows. Popularity is calculated using the rating percentage and the number of ratings.

<h3 id="get-popular-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "imdb": "tt1439629",
      "slug": "community",
      "tmdb": 18347,
      "trakt": 41,
      "tvdb": 94571
    },
    "title": "Community",
    "year": 2009
  },
  {
    "ids": {
      "imdb": "tt1520211",
      "slug": "the-walking-dead",
      "tmdb": 1402,
      "trakt": 2,
      "tvdb": 153021
    },
    "title": "The Walking Dead",
    "year": 2010
  },
  {
    "ids": {
      "imdb": "tt0773262",
      "slug": "dexter",
      "tmdb": 1405,
      "trakt": 19,
      "tvdb": 79349
    },
    "title": "Dexter",
    "year": 2006
  },
  {
    "ids": {
      "imdb": "tt0096697",
      "slug": "the-simpsons",
      "tmdb": 456,
      "trakt": 91,
      "tvdb": 71663
    },
    "title": "The Simpsons",
    "year": 1989
  },
  {
    "ids": {
      "imdb": "tt0944947",
      "slug": "game-of-thrones",
      "tmdb": 1399,
      "trakt": 353,
      "tvdb": 121361
    },
    "title": "Game of Thrones",
    "year": 2011
  },
  {
    "ids": {
      "imdb": "tt0411008",
      "slug": "lost",
      "tmdb": 4607,
      "trakt": 511,
      "tvdb": 73739
    },
    "title": "Lost",
    "year": 2004
  },
  {
    "ids": {
      "imdb": "tt0285331",
      "slug": "24",
      "tmdb": 1973,
      "trakt": 460,
      "tvdb": 76290
    },
    "title": "24",
    "year": 2001
  },
  {
    "ids": {
      "imdb": "tt0407362",
      "slug": "battlestar-galactica",
      "tmdb": 1972,
      "trakt": 331,
      "tvdb": 73545
    },
    "title": "Battlestar Galactica",
    "year": 2005
  },
  {
    "ids": {
      "imdb": "tt0903747",
      "slug": "breaking-bad",
      "tmdb": 1396,
      "trakt": 1,
      "tvdb": 81189
    },
    "title": "Breaking Bad",
    "year": 2008
  },
  {
    "ids": {
      "imdb": "tt0303461",
      "slug": "firefly",
      "tmdb": 1437,
      "trakt": 329,
      "tvdb": 78874
    },
    "title": "Firefly",
    "year": 2002
  }
]
```

<h3 id="get-popular-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most recommended shows

<a id="opIdGet the most recommended shows"></a>

> Code samples

```bash
curl https://example.com/shows/recommended/weekly \
  -H 'Accept: application/json'
```

`GET /shows/recommended/{period}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most recommended shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

<h3 id="get-the-most-recommended-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|Time period.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|yearly|
|period|all|

> Example responses

> 200 Response

```json
[
  {
    "show": {
      "ids": {
        "imdb": "tt0898266",
        "slug": "the-big-bang-theory",
        "tmdb": 1418,
        "trakt": 1409,
        "tvdb": 80379
      },
      "title": "The Big Bang Theory",
      "year": 2007
    },
    "user_count": 155291
  },
  {
    "show": {
      "ids": {
        "imdb": "tt0413573",
        "slug": "grey-s-anatomy",
        "tmdb": 1416,
        "trakt": 1407,
        "tvdb": 73762
      },
      "title": "Grey's Anatomy",
      "year": 2005
    },
    "user_count": 46170
  },
  {
    "show": {
      "ids": {
        "imdb": "tt0944947",
        "slug": "game-of-thrones",
        "tmdb": 1399,
        "trakt": 1390,
        "tvdb": 121361
      },
      "title": "Game of Thrones",
      "year": 2011
    },
    "user_count": 203742
  }
]
```

<h3 id="get-the-most-recommended-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get trending shows

<a id="opIdGet trending shows"></a>

> Code samples

```bash
curl https://example.com/shows/trending \
  -H 'Accept: application/json'
```

`GET /shows/trending`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns all shows being watched right now. Shows with the most users are returned first.

<h3 id="get-trending-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "watchers": 541
  },
  {
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    },
    "watchers": 432
  }
]
```

<h3 id="get-trending-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|
|200|X-Trending-User-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get recently updated show Trakt IDs

<a id="opIdGet recently updated show Trakt IDs"></a>

> Code samples

```bash
curl https://example.com/shows/updates/id/2020-11-27T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /shows/updates/id/{start_date}`

#### &#128196; Pagination

Returns all show Trakt IDs updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.

**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.

**Note:** The `start_date` can only be a maximum of 30 days in the past.

<h3 id="get-recently-updated-show-trakt-ids-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Updated since this date and time.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  1,
  20,
  34,
  50
]
```

<h3 id="get-recently-updated-show-trakt-ids-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get recently updated shows

<a id="opIdGet recently updated shows"></a>

> Code samples

```bash
curl https://example.com/shows/updates/2020-11-27T00%3A00%3A00Z \
  -H 'Accept: application/json'
```

`GET /shows/updates/{start_date}`

#### &#128196; Pagination &#10024; Extended Info

Returns all shows updated since the specified UTC date and time. We recommended storing the `X-Start-Date` header you can be efficient using this method moving forward. By default, `10` results are returned. You can send a `limit` to get up to `100` results per page.

**Important!** The `start_date` is only accurate to the hour, for caching purposes. Please drop the minutes and seconds from your timestamp to help optimize our cached data. For example, use `2021-07-17T12:00:00Z` and not `2021-07-17T12:23:34Z`.

**Note:** The `start_date` can only be a maximum of 30 days in the past.

<h3 id="get-recently-updated-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|path|string|true|Updated since this date and time.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "updated_at": "2014-09-22T21:56:03.000Z"
  },
  {
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    },
    "updated_at": "2014-09-23T21:56:03.000Z"
  }
]
```

<h3 id="get-recently-updated-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|
|200|X-Start-Date|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the most watched shows

<a id="opIdGet the most watched shows"></a>

> Code samples

```bash
curl https://example.com/shows/watched/weekly \
  -H 'Accept: application/json'
```

`GET /shows/watched/{period}`

#### &#128196; Pagination &#10024; Extended Info &#127898; Filters

Returns the most watched (unique users) shows in the specified time `period`, defaulting to `weekly`. All stats are relative to the specific time `period`.

<h3 id="get-the-most-watched-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|period|path|string|true|Time period.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|period|daily|
|period|weekly|
|period|monthly|
|period|yearly|
|period|all|

> Example responses

> 200 Response

```json
[
  {
    "collected_count": 2436824,
    "collector_count": 73224,
    "play_count": 8784154,
    "show": {
      "ids": {
        "imdb": "tt0944947",
        "slug": "game-of-thrones",
        "tmdb": 1399,
        "trakt": 1390,
        "tvdb": 121361
      },
      "title": "Game of Thrones",
      "year": 2011
    },
    "watcher_count": 203742
  },
  {
    "collected_count": 2423833,
    "collector_count": 57617,
    "play_count": 9945882,
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 1393,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    },
    "watcher_count": 163097
  },
  {
    "collected_count": 6635583,
    "collector_count": 54953,
    "play_count": 23542030,
    "show": {
      "ids": {
        "imdb": "tt0898266",
        "slug": "the-big-bang-theory",
        "tmdb": 1418,
        "trakt": 1409,
        "tvdb": 80379
      },
      "title": "The Big Bang Theory",
      "year": 2007
    },
    "watcher_count": 155291
  },
  {
    "collected_count": 2471061,
    "collector_count": 49385,
    "play_count": 8576210,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1388,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "watcher_count": 140725
  },
  {
    "collected_count": 1856666,
    "collector_count": 43351,
    "play_count": 6173692,
    "show": {
      "ids": {
        "imdb": "tt2193021",
        "slug": "arrow",
        "tmdb": 1412,
        "trakt": 1403,
        "tvdb": 257655
      },
      "title": "Arrow",
      "year": 2012
    },
    "watcher_count": 123797
  },
  {
    "collected_count": 4529880,
    "collector_count": 32335,
    "play_count": 19787304,
    "show": {
      "ids": {
        "imdb": "tt0460649",
        "slug": "how-i-met-your-mother",
        "tmdb": 1100,
        "trakt": 1095,
        "tvdb": 75760
      },
      "title": "How I Met Your Mother",
      "year": 2005
    },
    "watcher_count": 100242
  },
  {
    "collected_count": 260713,
    "collector_count": 34077,
    "play_count": 912066,
    "show": {
      "ids": {
        "imdb": "tt1475582",
        "slug": "sherlock",
        "tmdb": 19885,
        "trakt": 19792,
        "tvdb": 176941
      },
      "title": "Sherlock",
      "year": 2010
    },
    "watcher_count": 94282
  },
  {
    "collected_count": 1299956,
    "collector_count": 39724,
    "play_count": 3375660,
    "show": {
      "ids": {
        "imdb": "tt1796960",
        "slug": "homeland",
        "tmdb": 1407,
        "trakt": 1398,
        "tvdb": 247897
      },
      "title": "Homeland",
      "year": 2011
    },
    "watcher_count": 89242
  },
  {
    "collected_count": 2239477,
    "collector_count": 33424,
    "play_count": 7799337,
    "show": {
      "ids": {
        "imdb": "tt0773262",
        "slug": "dexter",
        "tmdb": 1405,
        "trakt": 1396,
        "tvdb": 79349
      },
      "title": "Dexter",
      "year": 2006
    },
    "watcher_count": 87059
  },
  {
    "collected_count": 881552,
    "collector_count": 31982,
    "play_count": 2795758,
    "show": {
      "ids": {
        "imdb": "tt2364582",
        "slug": "marvel-s-agents-of-s-h-i-e-l-d",
        "tmdb": 1403,
        "trakt": 1394,
        "tvdb": 263365
      },
      "title": "Marvel's Agents of S.H.I.E.L.D.",
      "year": 2013
    },
    "watcher_count": 83087
  }
]
```

<h3 id="get-the-most-watched-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get a single show

<a id="opIdGet a single show"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones \
  -H 'Accept: application/json'
```

`GET /shows/{id}`

#### &#10024; Extended Info

Returns a single shows's details. If you request extended info, the `airs` object is relative to the show's country. You can use the `day`, `time`, and `timezone` to construct your own date then convert it to whatever timezone your user is in.

**Note:** When getting `full` extended info, the `status` field can have a value of `returning series` (airing right now),  `continuing` (airing right now), `in production` (airing soon), `planned` (in development), `upcoming` (in development),  `pilot`, `canceled`, or `ended`.

<h3 id="get-a-single-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "aired_episodes": 50,
  "airs": {
    "day": "Sunday",
    "time": "21:00",
    "timezone": "America/New_York"
  },
  "available_translations": [
    "en",
    "tr",
    "sk",
    "de",
    "ru",
    "fr",
    "hu",
    "zh",
    "el",
    "pt",
    "es",
    "bg",
    "ro",
    "it",
    "ko",
    "he",
    "nl",
    "pl"
  ],
  "certification": "TV-MA",
  "comment_count": 92,
  "country": "us",
  "first_aired": "2011-04-18T01:00:00.000Z",
  "genres": [
    "drama",
    "fantasy"
  ],
  "homepage": "http://www.hbo.com/game-of-thrones/index.html",
  "ids": {
    "imdb": "tt0944947",
    "slug": "game-of-thrones",
    "tmdb": 1399,
    "trakt": 353,
    "tvdb": 121361
  },
  "language": "en",
  "network": "HBO",
  "overview": "Game of Thrones is an American fantasy drama television series created for HBO by David Benioff and D. B. Weiss. It is an adaptation of A Song of Ice and Fire, George R. R. Martin's series of fantasy novels, the first of which is titled A Game of Thrones.\n\nThe series, set on the fictional continents of Westeros and Essos at the end of a decade-long summer, interweaves several plot lines. The first follows the members of several noble houses in a civil war for the Iron Throne of the Seven Kingdoms; the second covers the rising threat of the impending winter and the mythical creatures of the North; the third chronicles the attempts of the exiled last scion of the realm's deposed dynasty to reclaim the throne. Through its morally ambiguous characters, the series explores the issues of social hierarchy, religion, loyalty, corruption, sexuality, civil war, crime, and punishment.",
  "rating": 9,
  "runtime": 60,
  "status": "returning series",
  "title": "Game of Thrones",
  "trailer": null,
  "updated_at": "2014-08-22T08:32:06.000Z",
  "votes": 111,
  "year": 2011
}
```

<h3 id="get-a-single-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/shows/game-of-thrones?extended=full<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all show aliases

<a id="opIdGet all show aliases"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/aliases \
  -H 'Accept: application/json'
```

`GET /shows/{id}/aliases`

Returns all title aliases for a show.  Includes country where name is different.

<h3 id="get-all-show-aliases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "country": "tw",
    "title": "冰與火之歌：權力遊戲"
  },
  {
    "country": "br",
    "title": "A Guerra dos Tronos"
  },
  {
    "country": "de",
    "title": "Game of Thrones- Das Lied von Eis und Feuer"
  },
  {
    "country": "gr",
    "title": "Παιχνίδι Του Στέμματος"
  },
  {
    "country": "de",
    "title": "Game of Thrones - Das Lied von Eis und Feuer"
  },
  {
    "country": "fr",
    "title": "Le Trône de fer"
  },
  {
    "country": "ro",
    "title": "Urzeala Tronurilor"
  },
  {
    "country": "sa",
    "title": "صراع العروش"
  }
]
```

<h3 id="get-all-show-aliases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all show certifications

<a id="opIdGet all show certifications"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/certifications \
  -H 'Accept: application/json'
```

`GET /shows/{id}/certifications`

Returns all content certifications for a show, including the country.

<h3 id="get-all-show-certifications-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "certification": "TV-MA",
    "country": "us"
  },
  {
    "certification": "12",
    "country": "de"
  },
  {
    "certification": "15",
    "country": "kr"
  },
  {
    "certification": "15",
    "country": "gb"
  },
  {
    "certification": "16",
    "country": "br"
  },
  {
    "certification": "12",
    "country": "nl"
  },
  {
    "certification": "18",
    "country": "pt"
  }
]
```

<h3 id="get-all-show-certifications-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all show comments

<a id="opIdGet all show comments"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/comments/newest \
  -H 'Accept: application/json'
```

`GET /shows/{id}/comments/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all top level comments for a show. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.

<h3 id="get-all-show-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|sort|path|string|true|how to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|sort|likes|
|sort|replies|
|sort|highest|
|sort|lowest|
|sort|plays|
|sort|watched|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Great show!",
    "created_at": "2011-03-25T22:35:17.000Z",
    "id": 8,
    "likes": 0,
    "parent_id": 0,
    "replies": 1,
    "review": false,
    "spoiler": false,
    "updated_at": "2011-03-25T22:35:17.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    },
    "user_stats": {
      "completed_count": 1,
      "play_count": 1,
      "rating": 8
    }
  }
]
```

<h3 id="get-all-show-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get last episode

<a id="opIdGet last episode"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/last_episode \
  -H 'Accept: application/json'
```

`GET /shows/{id}/last_episode`

#### &#10024; Extended Info

Returns the most recently aired episode. If no episode is found, a `204` HTTP status code will be returned.

<h3 id="get-last-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "ids": {
    "imdb": "tt4283094",
    "tmdb": 1187405,
    "trakt": 1989031,
    "tvdb": 5624261
  },
  "number": 10,
  "season": 6,
  "title": "The Winds of Winter"
}
```

<h3 id="get-last-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get lists containing this show

<a id="opIdGet lists containing this show"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/lists/personal/popular \
  -H 'Accept: application/json'
```

`GET /shows/{id}/lists/{type}/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all lists that contain this show. By default, `personal` lists are returned sorted by the most `popular`.

<h3 id="get-lists-containing-this-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|type|path|string|true|Filter for a specific list type|
|sort|path|string|true|How to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|personal|
|type|official|
|type|watchlists|
|type|recommendations|
|sort|popular|
|sort|likes|
|sort|comments|
|sort|items|
|sort|added|
|sort|updated|

> Example responses

> 200 Response

```json
[
  {
    "allow_comments": true,
    "comment_count": 10,
    "created_at": "2014-10-11T17:00:54.000Z",
    "description": "How could my brain conceive them?",
    "display_numbers": true,
    "ids": {
      "slug": "incredible-thoughts",
      "trakt": 1337
    },
    "item_count": 50,
    "likes": 99,
    "name": "Incredible Thoughts",
    "privacy": "public",
    "sort_by": "rank",
    "sort_how": "asc",
    "type": "personal",
    "updated_at": "2014-10-11T17:00:54.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-lists-containing-this-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get next episode

<a id="opIdGet next episode"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/next_episode \
  -H 'Accept: application/json'
```

`GET /shows/{id}/next_episode`

#### &#10024; Extended Info

Returns the next scheduled to air episode. If no episode is found, a `204` HTTP status code will be returned.

<h3 id="get-next-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "ids": {
    "imdb": null,
    "tmdb": null,
    "trakt": 2279059,
    "tvdb": 5773656
  },
  "number": 1,
  "season": 7,
  "title": "TBA"
}
```

<h3 id="get-next-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all people for a show

<a id="opIdGet all people for a show"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/people \
  -H 'Accept: application/json'
```

`GET /shows/{id}/people`

#### &#10024; Extended Info

Returns all `cast` and `crew` for a show, including the `episode_count` for which they appears. Each `cast` member will have a `characters` array and a standard `person` object.

The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, `editing`, and `created  by` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.

#### Guest Stars

If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the show.

**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

<h3 id="get-all-people-for-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "cast": [
    {
      "characters": [
        "Daenerys Targaryen"
      ],
      "episode_count": 73,
      "person": {
        "ids": {
          "imdb": "nm3592338",
          "slug": "emilia-clarke",
          "tmdb": 1223786,
          "trakt": 2332,
          "tvrage": null
        },
        "name": "Emilia Clarke"
      }
    },
    {
      "characters": [
        "Varys"
      ],
      "episode_count": 73,
      "person": {
        "ids": {
          "imdb": "nm0384152",
          "slug": "conleth-hill",
          "tmdb": 84423,
          "trakt": 4428,
          "tvrage": null
        },
        "name": "Conleth Hill"
      }
    },
    {
      "characters": [
        "Tyrion Lannister"
      ],
      "episode_count": 73,
      "person": {
        "ids": {
          "imdb": "nm0227759",
          "slug": "peter-dinklage",
          "tmdb": 22970,
          "trakt": 2329,
          "tvrage": 34516
        },
        "name": "Peter Dinklage"
      }
    }
  ],
  "crew": {
    "art": [
      {
        "episode_count": 30,
        "jobs": [
          "Production Design"
        ],
        "person": {
          "ids": {
            "imdb": "nm0413541",
            "slug": "gemma-jackson",
            "tmdb": 9153,
            "trakt": 17454,
            "tvrage": null
          },
          "name": "Gemma Jackson"
        }
      },
      {
        "episode_count": 20,
        "jobs": [
          "Art Direction"
        ],
        "person": {
          "ids": {
            "imdb": "nm0255797",
            "slug": "philip-elton",
            "tmdb": 80424,
            "trakt": 13414,
            "tvrage": null
          },
          "name": "Philip Elton"
        }
      }
    ],
    "costume & make-up": [
      {
        "episode_count": 63,
        "jobs": [
          "Costume Design"
        ],
        "person": {
          "ids": {
            "imdb": "nm0163449",
            "slug": "michele-clapton",
            "tmdb": 50953,
            "trakt": 5019,
            "tvrage": null
          },
          "name": "Michele Clapton"
        }
      }
    ],
    "directing": [
      {
        "episode_count": 9,
        "jobs": [
          "Director"
        ],
        "person": {
          "ids": {
            "imdb": "nm0638354",
            "slug": "david-nutter",
            "tmdb": 33316,
            "trakt": 346,
            "tvrage": 373
          },
          "name": "David Nutter"
        }
      },
      {
        "episode_count": 7,
        "jobs": [
          "Director"
        ],
        "person": {
          "ids": {
            "imdb": "nm0851930",
            "slug": "alan-taylor",
            "tmdb": 47005,
            "trakt": 17457,
            "tvrage": null
          },
          "name": "Alan Taylor"
        }
      }
    ],
    "production": [
      {
        "episode_count": 73,
        "jobs": [
          "Co-Executive Producer"
        ],
        "person": {
          "ids": {
            "imdb": "nm0552333",
            "slug": "george-r-r-martin",
            "tmdb": 237053,
            "trakt": 5020,
            "tvrage": 79951
          },
          "name": "George R. R. Martin"
        }
      },
      {
        "episode_count": 73,
        "jobs": [
          "Executive Producer"
        ],
        "person": {
          "ids": {
            "imdb": "nm1888967",
            "slug": "d-b-weiss",
            "tmdb": 228068,
            "trakt": 17443,
            "tvrage": null
          },
          "name": "D. B. Weiss"
        }
      }
    ],
    "sound": [
      {
        "episode_count": 73,
        "jobs": [
          "Original Music Composer"
        ],
        "person": {
          "ids": {
            "imdb": "nm1014697",
            "slug": "ramin-djawadi",
            "tmdb": 10851,
            "trakt": 3698,
            "tvrage": null
          },
          "name": "Ramin Djawadi"
        }
      },
      {
        "episode_count": 40,
        "jobs": [
          "Sound Designer"
        ],
        "person": {
          "ids": {
            "imdb": "nm0265584",
            "slug": "paula-fairfield",
            "tmdb": 85960,
            "trakt": 17461,
            "tvrage": null
          },
          "name": "Paula Fairfield"
        }
      }
    ],
    "visual effects": [
      {
        "episode_count": 10,
        "jobs": [
          "Visual Effects"
        ],
        "person": {
          "ids": {
            "imdb": "nm2108603",
            "slug": "jeremy-stewart",
            "tmdb": 1463785,
            "trakt": 5018,
            "tvrage": null
          },
          "name": "Jeremy Stewart"
        }
      }
    ],
    "writing": [
      {
        "episode_count": 73,
        "jobs": [
          "Novel"
        ],
        "person": {
          "ids": {
            "imdb": "nm0552333",
            "slug": "george-r-r-martin",
            "tmdb": 237053,
            "trakt": 5020,
            "tvrage": 79951
          },
          "name": "George R. R. Martin"
        }
      }
    ]
  },
  "guest_stars": [
    {
      "characters": [
        "Podrick Payne"
      ],
      "episode_count": 33,
      "person": {
        "ids": {
          "imdb": "nm4535552",
          "slug": "daniel-portman",
          "tmdb": 1034702,
          "trakt": 13094,
          "tvrage": null
        },
        "name": "Daniel Portman"
      }
    },
    {
      "characters": [
        "Eddison Tollett"
      ],
      "episode_count": 32,
      "person": {
        "ids": {
          "imdb": "nm0174005",
          "slug": "ben-crompton",
          "tmdb": 72315,
          "trakt": 1782,
          "tvrage": null
        },
        "name": "Ben Crompton"
      }
    },
    {
      "characters": [
        "Grand Maester Pycelle"
      ],
      "episode_count": 31,
      "person": {
        "ids": {
          "imdb": "nm0002103",
          "slug": "julian-glover",
          "tmdb": 740,
          "trakt": 2654,
          "tvrage": 41261
        },
        "name": "Julian Glover"
      }
    }
  ]
}
```

<h3 id="get-all-people-for-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/shows/game-of-thrones/people?extended=guest_stars<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get show collection progress

<a id="opIdGet show collection progress"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/progress/collection \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"aired"'
```

`GET /shows/{id}/progress/collection`

#### &#128274; OAuth Required

Returns collection progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should collect, if there are no upcoming episodes it will be set to `null`.

By default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.

By default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.

By default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has collected, even if they've collected older episodes more recently. To use their last collected episode for these calculations, set the `last_activity` flag to `collected`.

**Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.

> Body parameter

```json
"aired"
```

<h3 id="get-show-collection-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|hidden|query|string|false|include any hidden seasons|
|specials|query|string|false|include specials as season 0|
|count_specials|query|string|false|count specials in the overall stats (only applies if specials are included)|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "aired": 8,
  "completed": 6,
  "hidden_seasons": [
    {
      "ids": {
        "tmdb": 53334,
        "trakt": 3051,
        "tvdb": 498968
      },
      "number": 2
    }
  ],
  "last_collected_at": "2015-03-21T19:03:58.000Z",
  "last_episode": {
    "ids": {
      "imdb": null,
      "tmdb": null,
      "trakt": 62314,
      "tvdb": 4849872
    },
    "number": 6,
    "season": 1,
    "title": "Fire"
  },
  "next_episode": {
    "ids": {
      "imdb": null,
      "tmdb": null,
      "trakt": 62315,
      "tvdb": 4849873
    },
    "number": 7,
    "season": 1,
    "title": "Water"
  },
  "seasons": [
    {
      "aired": 8,
      "completed": 6,
      "episodes": [
        {
          "collected_at": "2015-03-21T19:03:58.000Z",
          "completed": true,
          "number": 1
        },
        {
          "collected_at": "2015-03-21T19:03:58.000Z",
          "completed": true,
          "number": 2
        },
        {
          "collected_at": "2015-03-21T19:03:58.000Z",
          "completed": true,
          "number": 3
        },
        {
          "collected_at": "2015-03-21T19:03:58.000Z",
          "completed": true,
          "number": 4
        },
        {
          "collected_at": "2015-03-21T19:03:58.000Z",
          "completed": true,
          "number": 5
        },
        {
          "collected_at": "2015-03-21T19:03:58.000Z",
          "completed": true,
          "number": 6
        },
        {
          "collected_at": null,
          "completed": false,
          "number": 7
        },
        {
          "collected_at": null,
          "completed": false,
          "number": 8
        }
      ],
      "number": 1,
      "title": "The first Hodor."
    }
  ]
}
```

<h3 id="get-show-collection-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get show watched progress

<a id="opIdGet show watched progress"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/progress/watched \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '"aired"'
```

`GET /shows/{id}/progress/watched`

#### &#128274; OAuth Required

Returns watched progress for a show including details on all aired seasons and episodes. The `next_episode` will be the next episode the user should watch, if there are no upcoming episodes it will be set to `null`. If not `null`, the `reset_at` date is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.

By default, any hidden seasons will be removed from the response and stats. To include these and adjust the completion stats, set the `hidden` flag to `true`.

By default, specials will be excluded from the response. Set the `specials` flag to `true` to include season 0 and adjust the stats accordingly. If you'd like to include specials, but not adjust the stats, set `count_specials` to `false`.

By default, the `last_episode` and `next_episode` are calculated using the last `aired` episode the user has watched, even if they've watched older episodes more recently. To use their last watched episode for these calculations, set the `last_activity` flag to `watched`.

**Note:** Only aired episodes are used to calculate progress. Episodes in the future or without an air date are ignored.

> Body parameter

```json
"aired"
```

<h3 id="get-show-watched-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|hidden|query|string|false|include any hidden seasons|
|specials|query|string|false|include specials as season 0|
|count_specials|query|string|false|count specials in the overall stats (only applies if specials are included)|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "aired": 8,
  "completed": 6,
  "hidden_seasons": [
    {
      "ids": {
        "tmdb": 53334,
        "trakt": 3051,
        "tvdb": 498968
      },
      "number": 2
    }
  ],
  "last_episode": {
    "ids": {
      "imdb": null,
      "tmdb": null,
      "trakt": 62314,
      "tvdb": 4849872
    },
    "number": 6,
    "season": 1,
    "title": "Fire"
  },
  "last_watched_at": "2015-03-21T19:03:58.000Z",
  "next_episode": {
    "ids": {
      "imdb": null,
      "tmdb": null,
      "trakt": 62315,
      "tvdb": 4849873
    },
    "number": 7,
    "season": 1,
    "title": "Water"
  },
  "reset_at": null,
  "seasons": [
    {
      "aired": 8,
      "completed": 6,
      "episodes": [
        {
          "completed": true,
          "last_watched_at": "2015-03-21T19:03:58.000Z",
          "number": 1
        },
        {
          "completed": true,
          "last_watched_at": "2015-03-21T19:03:58.000Z",
          "number": 2
        },
        {
          "completed": true,
          "last_watched_at": "2015-03-21T19:03:58.000Z",
          "number": 3
        },
        {
          "completed": true,
          "last_watched_at": "2015-03-21T19:03:58.000Z",
          "number": 4
        },
        {
          "completed": true,
          "last_watched_at": "2015-03-21T19:03:58.000Z",
          "number": 5
        },
        {
          "completed": true,
          "last_watched_at": "2015-03-21T19:03:58.000Z",
          "number": 6
        },
        {
          "completed": false,
          "last_watched_at": null,
          "number": 7
        },
        {
          "completed": false,
          "last_watched_at": null,
          "number": 8
        }
      ],
      "number": 1,
      "title": "The first Hodor."
    }
  ]
}
```

<h3 id="get-show-watched-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Reset show progress

<a id="opIdReset show progress"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/progress/watched/reset \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /shows/{id}/progress/watched/reset`

#### &#128274; OAuth Required 🔥 VIP Only

Reset a show's progress when the user started re-watching the show. You can optionally specify the `reset_at` date to have it calculate progress from that specific date onwards.

<h3 id="reset-show-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "reset_at": "2021-07-01T00:00:000Z"
}
```

<h3 id="reset-show-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Undo reset show progress

<a id="opIdUndo reset show progress"></a>

> Code samples

```bash
curl https://example.com/shows/string/progress/watched/reset \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /shows/{id}/progress/watched/reset`

#### &#128274; OAuth Required 🔥 VIP Only

Undo the reset and have watched progress use all watched history for the show.

<h3 id="undo-reset-show-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|

<h3 id="undo-reset-show-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get show ratings

<a id="opIdGet show ratings"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/ratings \
  -H 'Accept: application/json'
```

`GET /shows/{id}/ratings`

Returns rating (between 0 and 10) and distribution for a show.

<h3 id="get-show-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "distribution": {
    "1": 320,
    "2": 77,
    "3": 73,
    "4": 131,
    "5": 300,
    "6": 514,
    "7": 1560,
    "8": 4399,
    "9": 9648,
    "10": 34042
  },
  "rating": 9.38363,
  "votes": 51065
}
```

<h3 id="get-show-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get related shows

<a id="opIdGet related shows"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/related \
  -H 'Accept: application/json'
```

`GET /shows/{id}/related`

#### &#128196; Pagination &#10024; Extended Info

Returns related and similar shows.

<h3 id="get-related-shows-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "imdb": "tt0407362",
      "slug": "battlestar-galactica",
      "tmdb": 1972,
      "trakt": 331,
      "tvdb": 73545
    },
    "title": "Battlestar Galactica",
    "year": 2005
  },
  {
    "ids": {
      "imdb": "tt0944947",
      "slug": "game-of-thrones",
      "tmdb": 1399,
      "trakt": 353,
      "tvdb": 121361
    },
    "title": "Game of Thrones",
    "year": 2011
  },
  {
    "ids": {
      "imdb": "tt0303461",
      "slug": "firefly",
      "tmdb": 1437,
      "trakt": 329,
      "tvdb": 78874
    },
    "title": "Firefly",
    "year": 2002
  },
  {
    "ids": {
      "imdb": "tt1870479",
      "slug": "the-newsroom",
      "tmdb": 15621,
      "trakt": 497,
      "tvdb": 256227
    },
    "title": "The Newsroom",
    "year": 2012
  },
  {
    "ids": {
      "imdb": "tt1135300",
      "slug": "dollhouse",
      "tmdb": 14956,
      "trakt": 395,
      "tvdb": 82046
    },
    "title": "Dollhouse",
    "year": 2009
  },
  {
    "ids": {
      "imdb": "tt1124373",
      "slug": "sons-of-anarchy",
      "tmdb": 1409,
      "trakt": 23,
      "tvdb": 82696
    },
    "title": "Sons of Anarchy",
    "year": 2008
  },
  {
    "ids": {
      "imdb": "tt2243973",
      "slug": "hannibal",
      "tmdb": 40008,
      "trakt": 567,
      "tvdb": 259063
    },
    "title": "Hannibal",
    "year": 2013
  },
  {
    "ids": {
      "imdb": "tt0844441",
      "slug": "true-blood",
      "tmdb": 10545,
      "trakt": 122,
      "tvdb": 82283
    },
    "title": "True Blood",
    "year": 2008
  },
  {
    "ids": {
      "imdb": "tt1520211",
      "slug": "the-walking-dead",
      "tmdb": 1402,
      "trakt": 2,
      "tvdb": 153021
    },
    "title": "The Walking Dead",
    "year": 2010
  },
  {
    "ids": {
      "imdb": "tt0286486",
      "slug": "the-shield",
      "tmdb": 1414,
      "trakt": 486,
      "tvdb": 78261
    },
    "title": "The Shield",
    "year": 2002
  }
]
```

<h3 id="get-related-shows-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get show stats

<a id="opIdGet show stats"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/stats \
  -H 'Accept: application/json'
```

`GET /shows/{id}/stats`

Returns lots of show stats.

<h3 id="get-show-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "collected_episodes": 7144637,
  "collectors": 159266,
  "comments": 257,
  "lists": 149488,
  "plays": 18278737,
  "recommended": 54321,
  "votes": 51065,
  "watchers": 355422
}
```

<h3 id="get-show-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get show studios

<a id="opIdGet show studios"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/studios \
  -H 'Accept: application/json'
```

`GET /shows/{id}/studios`

Returns all studios for a show.

<h3 id="get-show-studios-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "country": "us",
    "ids": {
      "slug": "abc-studios",
      "tmdb": 19366,
      "trakt": 1
    },
    "name": "ABC Studios"
  },
  {
    "country": "us",
    "ids": {
      "slug": "deknight-productions",
      "tmdb": 51963,
      "trakt": 2
    },
    "name": "DeKnight Productions"
  },
  {
    "country": "us",
    "ids": {
      "slug": "goddard-textiles",
      "tmdb": 51964,
      "trakt": 3
    },
    "name": "Goddard Textiles"
  },
  {
    "country": "us",
    "ids": {
      "slug": "marvel-television",
      "tmdb": 38679,
      "trakt": 4
    },
    "name": "Marvel Television"
  }
]
```

<h3 id="get-show-studios-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all show translations

<a id="opIdGet all show translations"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/translations/es \
  -H 'Accept: application/json'
```

`GET /shows/{id}/translations/{language}`

Returns all translations for a show, including language and translated values for title and overview.

<h3 id="get-all-show-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|language|path|string|true|2 character language code|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "country": "us",
    "language": "en",
    "overview": "Breaking Bad is an American crime drama television series created and produced by Vince Gilligan. Set and produced in Albuquerque, New Mexico, Breaking Bad is the story of Walter White, a struggling high school chemistry teacher who is diagnosed with inoperable lung cancer at the beginning of the series. He turns to a life of crime, producing and selling methamphetamine, in order to secure his family's financial future before he dies, teaming with his former student, Jesse Pinkman. Heavily serialized, the series is known for positioning its characters in seemingly inextricable corners and has been labeled a contemporary western by its creator.",
    "title": "Breaking Bad"
  },
  {
    "country": "tr",
    "language": "tr",
    "overview": "...",
    "title": "Breaking Bad"
  },
  {
    "country": "sk",
    "language": "sk",
    "overview": "",
    "title": "Perníkový tatko"
  }
]
```

<h3 id="get-all-show-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get users watching right now

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/watching \
  -H 'Accept: application/json'
```

`GET /shows/{id}/watching`

#### &#10024; Extended Info

Returns all users watching this show right now.

<h3 id="get-users-watching-right-now-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "slug": "justin"
    },
    "name": "Justin Nemeth",
    "private": false,
    "username": "justin",
    "vip": true,
    "vip_ep": false
  },
  {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
]
```

<h3 id="get-users-watching-right-now-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-seasons">Seasons</h1>

## Get all seasons for a show

<a id="opIdGet all seasons for a show"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons`

#### &#10024; Extended Info

Returns all seasons for a show including the number of episodes in each season.

#### Episodes

If you add `?extended=episodes` to the URL, it will return all episodes for all seasons.

**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

<h3 id="get-all-seasons-for-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "episodes": [
      {
        "ids": {
          "imdb": "",
          "tmdb": 63087,
          "trakt": 36430,
          "tvdb": 3226241
        },
        "number": 1,
        "season": 0,
        "title": "Inside Game of Thrones"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 63086,
          "trakt": 36431,
          "tvdb": 4045941
        },
        "number": 2,
        "season": 0,
        "title": "15-Minute Preview"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 63088,
          "trakt": 36432,
          "tvdb": 4073401
        },
        "number": 3,
        "season": 0,
        "title": "Making Game of Thrones"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 63089,
          "trakt": 36433,
          "tvdb": 4082317
        },
        "number": 4,
        "season": 0,
        "title": "El Juego Comienza"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 63090,
          "trakt": 36434,
          "tvdb": 4138149
        },
        "number": 5,
        "season": 0,
        "title": "2011 Comic Con Panel"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 63091,
          "trakt": 36435,
          "tvdb": 4292422
        },
        "number": 6,
        "season": 0,
        "title": "You Win or You Die"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 63092,
          "trakt": 36436,
          "tvdb": 4517457
        },
        "number": 7,
        "season": 0,
        "title": "A Gathering Storm"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 63093,
          "trakt": 36437,
          "tvdb": 4576208
        },
        "number": 8,
        "season": 0,
        "title": "Politics of Marriage"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 974558,
          "trakt": 36438,
          "tvdb": 4779102
        },
        "number": 9,
        "season": 0,
        "title": "Ice and Fire: A Foreshadowing"
      },
      {
        "ids": {
          "imdb": "",
          "tmdb": 974559,
          "trakt": 36439,
          "tvdb": 4824480
        },
        "number": 10,
        "season": 0,
        "title": "The Politics of Power: A Look Back at Season 3"
      }
    ],
    "ids": {
      "tmdb": 3627,
      "trakt": 2145,
      "tvdb": 137481
    },
    "number": 0
  },
  {
    "episodes": [
      {
        "ids": {
          "imdb": "tt1480055",
          "tmdb": 63056,
          "trakt": 36440,
          "tvdb": 3254641
        },
        "number": 1,
        "season": 1,
        "title": "Winter Is Coming"
      },
      {
        "ids": {
          "imdb": "tt1668746",
          "tmdb": 63057,
          "trakt": 36441,
          "tvdb": 3436411
        },
        "number": 2,
        "season": 1,
        "title": "The Kingsroad"
      },
      {
        "ids": {
          "imdb": "tt1829962",
          "tmdb": 63058,
          "trakt": 36442,
          "tvdb": 3436421
        },
        "number": 3,
        "season": 1,
        "title": "Lord Snow"
      },
      {
        "ids": {
          "imdb": "tt1829963",
          "tmdb": 63059,
          "trakt": 36443,
          "tvdb": 3436431
        },
        "number": 4,
        "season": 1,
        "title": "Cripples, Bastards, and Broken Things"
      },
      {
        "ids": {
          "imdb": "tt1829964",
          "tmdb": 63060,
          "trakt": 36444,
          "tvdb": 3436441
        },
        "number": 5,
        "season": 1,
        "title": "The Wolf and the Lion"
      },
      {
        "ids": {
          "imdb": "tt1837862",
          "tmdb": 63061,
          "trakt": 36445,
          "tvdb": 3436451
        },
        "number": 6,
        "season": 1,
        "title": "A Golden Crown"
      },
      {
        "ids": {
          "imdb": "tt1837863",
          "tmdb": 63062,
          "trakt": 36446,
          "tvdb": 3436461
        },
        "number": 7,
        "season": 1,
        "title": "You Win or You Die"
      },
      {
        "ids": {
          "imdb": "tt1837864",
          "tmdb": 63063,
          "trakt": 36447,
          "tvdb": 3360391
        },
        "number": 8,
        "season": 1,
        "title": "The Pointy End"
      },
      {
        "ids": {
          "imdb": "tt1851398",
          "tmdb": 63064,
          "trakt": 36448,
          "tvdb": 4063481
        },
        "number": 9,
        "season": 1,
        "title": "Baelor"
      },
      {
        "ids": {
          "imdb": "tt1851397",
          "tmdb": 63065,
          "trakt": 36449,
          "tvdb": 4063491
        },
        "number": 10,
        "season": 1,
        "title": "Fire and Blood"
      }
    ],
    "ids": {
      "tmdb": 3624,
      "trakt": 2146,
      "tvdb": 364731
    },
    "number": 1
  },
  {
    "episodes": [
      {
        "ids": {
          "imdb": "tt1971833",
          "tmdb": 63066,
          "trakt": 36450,
          "tvdb": 4161693
        },
        "number": 1,
        "season": 2,
        "title": "The North Remembers"
      },
      {
        "ids": {
          "imdb": "tt2069318",
          "tmdb": 974430,
          "trakt": 36451,
          "tvdb": 4245771
        },
        "number": 2,
        "season": 2,
        "title": "The Night Lands"
      },
      {
        "ids": {
          "imdb": "tt2070135",
          "tmdb": 63068,
          "trakt": 36452,
          "tvdb": 4245772
        },
        "number": 3,
        "season": 2,
        "title": "What is Dead May Never Die"
      },
      {
        "ids": {
          "imdb": "tt2069319",
          "tmdb": 63069,
          "trakt": 36453,
          "tvdb": 4245773
        },
        "number": 4,
        "season": 2,
        "title": "Garden of Bones"
      },
      {
        "ids": {
          "imdb": "tt2074658",
          "tmdb": 63070,
          "trakt": 36454,
          "tvdb": 4245774
        },
        "number": 5,
        "season": 2,
        "title": "The Ghost of Harrenhal"
      },
      {
        "ids": {
          "imdb": "tt2085238",
          "tmdb": 63071,
          "trakt": 36455,
          "tvdb": 4245775
        },
        "number": 6,
        "season": 2,
        "title": "The Old Gods and the New"
      },
      {
        "ids": {
          "imdb": "tt2085239",
          "tmdb": 63073,
          "trakt": 36456,
          "tvdb": 4245776
        },
        "number": 7,
        "season": 2,
        "title": "A Man Without Honor"
      },
      {
        "ids": {
          "imdb": "tt2085240",
          "tmdb": 63074,
          "trakt": 36457,
          "tvdb": 4245777
        },
        "number": 8,
        "season": 2,
        "title": "The Prince of Winterfell"
      },
      {
        "ids": {
          "imdb": "tt2084342",
          "tmdb": 63072,
          "trakt": 36458,
          "tvdb": 4245778
        },
        "number": 9,
        "season": 2,
        "title": "Blackwater"
      },
      {
        "ids": {
          "imdb": "tt2112510",
          "tmdb": 63075,
          "trakt": 36459,
          "tvdb": 4245779
        },
        "number": 10,
        "season": 2,
        "title": "Valar Morghulis"
      }
    ],
    "ids": {
      "tmdb": 3625,
      "trakt": 2147,
      "tvdb": 473271
    },
    "number": 2
  },
  {
    "episodes": [
      {
        "ids": {
          "imdb": "tt2178782",
          "tmdb": 63077,
          "trakt": 36460,
          "tvdb": 4293685
        },
        "number": 1,
        "season": 3,
        "title": "Valar Dohaeris"
      },
      {
        "ids": {
          "imdb": "tt2178772",
          "tmdb": 63076,
          "trakt": 36461,
          "tvdb": 4517458
        },
        "number": 2,
        "season": 3,
        "title": "Dark Wings, Dark Words"
      },
      {
        "ids": {
          "imdb": "tt2178802",
          "tmdb": 63078,
          "trakt": 36462,
          "tvdb": 4517459
        },
        "number": 3,
        "season": 3,
        "title": "Walk of Punishment"
      },
      {
        "ids": {
          "imdb": "tt2178798",
          "tmdb": 63082,
          "trakt": 36463,
          "tvdb": 4517460
        },
        "number": 4,
        "season": 3,
        "title": "And Now His Watch Is Ended"
      },
      {
        "ids": {
          "imdb": "tt2178788",
          "tmdb": 63083,
          "trakt": 36464,
          "tvdb": 4517461
        },
        "number": 5,
        "season": 3,
        "title": "Kissed by Fire"
      },
      {
        "ids": {
          "imdb": "tt2178812",
          "tmdb": 63084,
          "trakt": 36465,
          "tvdb": 4517462
        },
        "number": 6,
        "season": 3,
        "title": "The Climb"
      },
      {
        "ids": {
          "imdb": "tt2178814",
          "tmdb": 63081,
          "trakt": 36466,
          "tvdb": 4517463
        },
        "number": 7,
        "season": 3,
        "title": "The Bear and the Maiden Fair"
      },
      {
        "ids": {
          "imdb": "tt2178806",
          "tmdb": 63085,
          "trakt": 36467,
          "tvdb": 4517464
        },
        "number": 8,
        "season": 3,
        "title": "Second Sons"
      },
      {
        "ids": {
          "imdb": "tt2178784",
          "tmdb": 63080,
          "trakt": 36468,
          "tvdb": 4517465
        },
        "number": 9,
        "season": 3,
        "title": "The Rains of Castamere"
      },
      {
        "ids": {
          "imdb": "tt2178796",
          "tmdb": 63079,
          "trakt": 36469,
          "tvdb": 4517466
        },
        "number": 10,
        "season": 3,
        "title": "Mhysa"
      }
    ],
    "ids": {
      "tmdb": 3626,
      "trakt": 2148,
      "tvdb": 488434
    },
    "number": 3
  },
  {
    "episodes": [
      {
        "ids": {
          "imdb": "tt2816136",
          "tmdb": 973190,
          "trakt": 36470,
          "tvdb": 4721938
        },
        "number": 1,
        "season": 4,
        "title": "Two Swords"
      },
      {
        "ids": {
          "imdb": "tt2832378",
          "tmdb": 973219,
          "trakt": 36471,
          "tvdb": 4801602
        },
        "number": 2,
        "season": 4,
        "title": "The Lion and the Rose"
      },
      {
        "ids": {
          "imdb": "tt2972426",
          "tmdb": 63096,
          "trakt": 36472,
          "tvdb": 4615736
        },
        "number": 3,
        "season": 4,
        "title": "Breaker of Chains"
      },
      {
        "ids": {
          "imdb": "tt2972428",
          "tmdb": 63097,
          "trakt": 36473,
          "tvdb": 4615737
        },
        "number": 4,
        "season": 4,
        "title": "Oathkeeper"
      },
      {
        "ids": {
          "imdb": "tt3060856",
          "tmdb": 63098,
          "trakt": 36474,
          "tvdb": 4615738
        },
        "number": 5,
        "season": 4,
        "title": "First of His Name"
      },
      {
        "ids": {
          "imdb": "tt3060910",
          "tmdb": 63099,
          "trakt": 36475,
          "tvdb": 4615739
        },
        "number": 6,
        "season": 4,
        "title": "The Laws of Gods and Men"
      },
      {
        "ids": {
          "imdb": "tt3060876",
          "tmdb": 63100,
          "trakt": 36476,
          "tvdb": 4615740
        },
        "number": 7,
        "season": 4,
        "title": "Mockingbird"
      },
      {
        "ids": {
          "imdb": "tt3060782",
          "tmdb": 63101,
          "trakt": 36477,
          "tvdb": 4615741
        },
        "number": 8,
        "season": 4,
        "title": "The Mountain and the Viper"
      },
      {
        "ids": {
          "imdb": "tt3060858",
          "tmdb": 63102,
          "trakt": 36478,
          "tvdb": 4615742
        },
        "number": 9,
        "season": 4,
        "title": "The Watchers on the Wall"
      },
      {
        "ids": {
          "imdb": "tt3060860",
          "tmdb": 63103,
          "trakt": 36479,
          "tvdb": 4615743
        },
        "number": 10,
        "season": 4,
        "title": "The Children"
      }
    ],
    "ids": {
      "tmdb": 3628,
      "trakt": 2149,
      "tvdb": 522882
    },
    "number": 4
  },
  {
    "episodes": [
      {
        "ids": {
          "imdb": "",
          "tmdb": 1001402,
          "trakt": 63767,
          "tvdb": null
        },
        "number": 1,
        "season": 5,
        "title": "5x1"
      }
    ],
    "ids": {
      "tmdb": 62090,
      "trakt": 3955,
      "tvdb": null
    },
    "number": 5
  }
]
```

<h3 id="get-all-seasons-for-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/shows/game-of-thrones/seasons?extended=episodes<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get single season for a show

<a id="opIdGet single season for a show"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1 \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}`

#### &#10024; Extended Info

Returns all episodes for a specific season of a show.

#### Translations

If you'd like to included translated episode titles and overviews in the response, include the `translations` parameter in the URL. Include all languages by setting the parameter to `all` or use a specific 2 digit country language code to further limit it.

**Note:** This returns a lot of data, so please only use this parameter if you actually need it!

<h3 id="get-single-season-for-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|translations|query|string|false|include episode translations|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "imdb": "tt1480055",
      "tmdb": 63056,
      "trakt": 456,
      "tvdb": 3254641
    },
    "number": 1,
    "season": 1,
    "title": "Winter Is Coming"
  },
  {
    "ids": {
      "imdb": "tt1668746",
      "tmdb": 63057,
      "trakt": 457,
      "tvdb": 3436411
    },
    "number": 2,
    "season": 1,
    "title": "The Kingsroad"
  },
  {
    "ids": {
      "imdb": "tt1829962",
      "tmdb": 63058,
      "trakt": 458,
      "tvdb": 3436421
    },
    "number": 3,
    "season": 1,
    "title": "Lord Snow"
  },
  {
    "ids": {
      "imdb": "tt1829963",
      "tmdb": 63059,
      "trakt": 459,
      "tvdb": 3436431
    },
    "number": 4,
    "season": 1,
    "title": "Cripples, Bastards, and Broken Things"
  },
  {
    "ids": {
      "imdb": "tt1829964",
      "tmdb": 63060,
      "trakt": 460,
      "tvdb": 3436441
    },
    "number": 5,
    "season": 1,
    "title": "The Wolf and the Lion"
  },
  {
    "ids": {
      "imdb": "tt1837862",
      "tmdb": 63061,
      "trakt": 461,
      "tvdb": 3436451
    },
    "number": 6,
    "season": 1,
    "title": "A Golden Crown"
  },
  {
    "ids": {
      "imdb": "tt1837863",
      "tmdb": 63062,
      "trakt": 462,
      "tvdb": 3436461
    },
    "number": 7,
    "season": 1,
    "title": "You Win or You Die"
  },
  {
    "ids": {
      "imdb": "tt1837864",
      "tmdb": 63063,
      "trakt": 463,
      "tvdb": 3360391
    },
    "number": 8,
    "season": 1,
    "title": "The Pointy End"
  },
  {
    "ids": {
      "imdb": "tt1851398",
      "tmdb": 63064,
      "trakt": 464,
      "tvdb": 4063481
    },
    "number": 9,
    "season": 1,
    "title": "Baelor"
  },
  {
    "ids": {
      "imdb": "tt1851397",
      "tmdb": 63065,
      "trakt": 465,
      "tvdb": 4063491
    },
    "number": 10,
    "season": 1,
    "title": "Fire and Blood"
  }
]
```

<h3 id="get-single-season-for-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all season comments

<a id="opIdGet all season comments"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/comments/newest \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/comments/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all top level comments for a season. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, most `plays`, and highest `watched` percentage.

<h3 id="get-all-season-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|sort|path|string|true|how to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|sort|likes|
|sort|replies|
|sort|highest|
|sort|lowest|
|sort|plays|
|sort|watched|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Great season!",
    "created_at": "2011-03-25T22:35:17.000Z",
    "id": 8,
    "likes": 0,
    "parent_id": 0,
    "replies": 1,
    "review": false,
    "spoiler": false,
    "updated_at": "2011-03-25T22:35:17.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    },
    "user_stats": {
      "completed_count": 1,
      "play_count": 1,
      "rating": 8
    }
  }
]
```

<h3 id="get-all-season-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get lists containing this season

<a id="opIdGet lists containing this season"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/lists/personal/popular \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/lists/{type}/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all lists that contain this season. By default, `personal` lists are returned sorted by the most `popular`.

<h3 id="get-lists-containing-this-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|type|path|string|true|Filter for a specific list type|
|sort|path|string|true|How to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|personal|
|type|official|
|type|watchlists|
|sort|popular|
|sort|likes|
|sort|comments|
|sort|items|
|sort|added|
|sort|updated|

> Example responses

> 200 Response

```json
[
  {
    "allow_comments": true,
    "comment_count": 10,
    "created_at": "2014-10-11T17:00:54.000Z",
    "description": "How could my brain conceive them?",
    "display_numbers": true,
    "ids": {
      "slug": "incredible-thoughts",
      "trakt": 1337
    },
    "item_count": 50,
    "likes": 99,
    "name": "Incredible Thoughts",
    "privacy": "public",
    "sort_by": "rank",
    "sort_how": "asc",
    "type": "personal",
    "updated_at": "2014-10-11T17:00:54.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-lists-containing-this-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all people for a season

<a id="opIdGet all people for a season"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/people \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/people`

#### &#10024; Extended Info

Returns all `cast` and `crew` for a season, including the `episode_count` for which they appear. Each `cast` member will have a `characters` array and a standard `person` object.

The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions).. Each of those members will have a `jobs` array and a standard `person` object.

#### Guest Stars

If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in at least 1 episode of the season.

**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

<h3 id="get-all-people-for-a-season-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "cast": [
    {
      "characters": [
        "Daenerys Targaryen"
      ],
      "episode_count": 10,
      "person": {
        "ids": {
          "imdb": "nm3592338",
          "slug": "emilia-clarke",
          "tmdb": 1223786,
          "trakt": 2332,
          "tvrage": null
        },
        "name": "Emilia Clarke"
      }
    },
    {
      "characters": [
        "Jon Snow"
      ],
      "episode_count": 10,
      "person": {
        "ids": {
          "imdb": "nm3229685",
          "slug": "kit-harington",
          "tmdb": 239019,
          "trakt": 2333,
          "tvrage": null
        },
        "name": "Kit Harington"
      }
    },
    {
      "characters": [
        "Robert Baratheon"
      ],
      "episode_count": 10,
      "person": {
        "ids": {
          "imdb": "nm0004692",
          "slug": "mark-addy",
          "tmdb": 13633,
          "trakt": 17444,
          "tvrage": 37728
        },
        "name": "Mark Addy"
      }
    }
  ],
  "crew": {
    "art": [
      {
        "episode_count": 10,
        "jobs": [
          "Set Decoration"
        ],
        "person": {
          "ids": {
            "imdb": "nm0731517",
            "slug": "richard-roberts",
            "tmdb": 8410,
            "trakt": 6026,
            "tvrage": null
          },
          "name": "Richard Roberts"
        }
      },
      {
        "episode_count": 10,
        "jobs": [
          "Production Design"
        ],
        "person": {
          "ids": {
            "imdb": "nm0413541",
            "slug": "gemma-jackson",
            "tmdb": 9153,
            "trakt": 17454,
            "tvrage": null
          },
          "name": "Gemma Jackson"
        }
      }
    ],
    "costume & make-up": [
      {
        "episode_count": 10,
        "jobs": [
          "Costume Design"
        ],
        "person": {
          "ids": {
            "imdb": "nm0163449",
            "slug": "michele-clapton",
            "tmdb": 50953,
            "trakt": 5019,
            "tvrage": null
          },
          "name": "Michele Clapton"
        }
      }
    ],
    "directing": [
      {
        "episode_count": 3,
        "jobs": [
          "Director"
        ],
        "person": {
          "ids": {
            "imdb": "nm1047532",
            "slug": "brian-kirk",
            "tmdb": 93223,
            "trakt": 17511,
            "tvrage": 115091
          },
          "name": "Brian Kirk"
        }
      },
      {
        "episode_count": 3,
        "jobs": [
          "Director"
        ],
        "person": {
          "ids": {
            "imdb": "nm0590889",
            "slug": "daniel-minahan",
            "tmdb": 88743,
            "trakt": 17514,
            "tvrage": 28917
          },
          "name": "Daniel Minahan"
        }
      }
    ],
    "production": [
      {
        "episode_count": 10,
        "jobs": [
          "Executive Producer"
        ],
        "person": {
          "ids": {
            "imdb": "nm1125275",
            "slug": "david-benioff",
            "tmdb": 9813,
            "trakt": 2631,
            "tvrage": null
          },
          "name": "David Benioff"
        }
      },
      {
        "episode_count": 10,
        "jobs": [
          "Co-Executive Producer"
        ],
        "person": {
          "ids": {
            "imdb": "nm0552333",
            "slug": "george-r-r-martin",
            "tmdb": 237053,
            "trakt": 5020,
            "tvrage": 79951
          },
          "name": "George R. R. Martin"
        }
      }
    ],
    "sound": [
      {
        "episode_count": 10,
        "jobs": [
          "Original Music Composer"
        ],
        "person": {
          "ids": {
            "imdb": "nm1014697",
            "slug": "ramin-djawadi",
            "tmdb": 10851,
            "trakt": 3698,
            "tvrage": null
          },
          "name": "Ramin Djawadi"
        }
      }
    ],
    "writing": [
      {
        "episode_count": 10,
        "jobs": [
          "Novel"
        ],
        "person": {
          "ids": {
            "imdb": "nm0552333",
            "slug": "george-r-r-martin",
            "tmdb": 237053,
            "trakt": 5020,
            "tvrage": 79951
          },
          "name": "George R. R. Martin"
        }
      }
    ]
  },
  "guest_stars": [
    {
      "characters": [
        "Rodrik Cassel"
      ],
      "episode_count": 9,
      "person": {
        "ids": {
          "imdb": "nm0231871",
          "slug": "ron-donachie",
          "tmdb": 63141,
          "trakt": 17471,
          "tvrage": 13644
        },
        "name": "Ron Donachie"
      }
    },
    {
      "characters": [
        "Grand Maester Pycelle"
      ],
      "episode_count": 8,
      "person": {
        "ids": {
          "imdb": "nm0002103",
          "slug": "julian-glover",
          "tmdb": 740,
          "trakt": 2654,
          "tvrage": 41261
        },
        "name": "Julian Glover"
      }
    },
    {
      "characters": [
        "Irri"
      ],
      "episode_count": 8,
      "person": {
        "ids": {
          "imdb": "nm3822505",
          "slug": "amrita-acharia",
          "tmdb": 1048692,
          "trakt": 17478,
          "tvrage": 340928
        },
        "name": "Amrita Acharia"
      }
    }
  ]
}
```

<h3 id="get-all-people-for-a-season-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/shows/game-of-thrones/seasons/1/people?extended=guest_stars<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get season ratings

<a id="opIdGet season ratings"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/ratings \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/ratings`

Returns rating (between 0 and 10) and distribution for a season.

<h3 id="get-season-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "distribution": {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 1,
    "10": 2
  },
  "rating": 9,
  "votes": 3
}
```

<h3 id="get-season-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get season stats

<a id="opIdGet season stats"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/stats \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/stats`

Returns lots of season stats.

<h3 id="get-season-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "collected_episodes": 87991,
  "collectors": 12899,
  "comments": 115,
  "lists": 309,
  "plays": 37986,
  "votes": 25655,
  "watchers": 30521
}
```

<h3 id="get-season-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all season translations

<a id="opIdGet all season translations"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/translations/es \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/translations/{language}`

Returns all translations for an season, including language and translated values for title and overview.

<h3 id="get-all-season-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|language|path|string|true|2 character language code|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "country": "ko",
    "language": "ko",
    "overview": "웨스테로스 북부 지방 윈터펠을 다스리는 에다드 스타크. 스타크 가문은 '겨울이 오고 있다'를 가언으로 몇 년, 때론 남은 일생 동안 계속 될지도 모르는 혹독한 겨울을 대비하며 지낸다. 그러던 중 에다드는 현재 왕좌에 있는 바라테온 가문의 로버트 왕의 핸드로서 왕을 보좌하기 위해 수도 킹스랜딩에 오게 된다. 바라테온 가문과 라니스터 가문, 왕좌를 빼앗긴 타르가옌 가문 등 칠왕국 안의 가문들은 욕망과 명예를 향한 열망으로 피 튀기는 암투를 시작하는데...",
    "title": "시즌 1"
  },
  {
    "country": "nl",
    "language": "nl",
    "overview": "Het eerste seizoen van de epische fantasy tv- drama-serie Game of Thrones ging in première op HBO op 17 april 2011 en eindigde op 19 juni 2011, uitgezonden in de Verenigde Staten . Het bestaat uit 10 afleveringen , elke aflevering duurt ongeveer 55 minuten. Game of Thrones is gebaseerd op de roman A Game of Thrones , de eerste vermelding in Een Lied van IJs en Vuur serie van George RR Martin . Het verhaal speelt zich af in een fictieve wereld , in de eerste plaats op een continent genaamd Westeros . The Noble House Stark , onder leiding van Lord Eddard \" Ned \" Stark wordt betrokken in regelingen tegen koning Robert Baratheon wanneer de Hand van de Koning Jon Arryn op mysterieuze wijze sterft .",
    "title": "Seizoen 1"
  },
  {
    "country": "no",
    "language": "no",
    "overview": "Sesong 1 av Game of Thrones hadde premiere 17 Mai, 2011.",
    "title": "Sesong 1"
  }
]
```

<h3 id="get-all-season-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get users watching right now

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/watching \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/watching`

#### &#10024; Extended Info

Returns all users watching this season right now.

<h3 id="get-users-watching-right-now-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "slug": "justin"
    },
    "name": "Justin Nemeth",
    "private": false,
    "username": "justin",
    "vip": true,
    "vip_ep": false
  },
  {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
]
```

<h3 id="get-users-watching-right-now-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-episodes">Episodes</h1>

## Get a single episode for a show

<a id="opIdGet a single episode for a show"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/episodes/1 \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/episodes/{episode}`

#### &#10024; Extended Info

Returns a single episode's details. All date and times are in UTC and were calculated using the episode's `air_date` and show's `country` and `air_time`.

**Note:** If the `first_aired` is unknown, it will be set to `null`.

<h3 id="get-a-single-episode-for-a-show-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|episode|path|integer|true|episode number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "available_translations": [
    "en"
  ],
  "comment_count": 92,
  "first_aired": "2011-04-18T01:00:00.000Z",
  "ids": {
    "imdb": "tt1480055",
    "tmdb": 63056,
    "trakt": 36440,
    "tvdb": 3254641
  },
  "number": 1,
  "number_abs": null,
  "overview": "Ned Stark, Lord of Winterfell learns that his mentor, Jon Arryn, has died and that King Robert is on his way north to offer Ned Arryn’s position as the King’s Hand. Across the Narrow Sea in Pentos, Viserys Targaryen plans to wed his sister Daenerys to the nomadic Dothraki warrior leader, Khal Drogo to forge an alliance to take the throne.",
  "rating": 9,
  "runtime": 58,
  "season": 1,
  "title": "Winter Is Coming",
  "updated_at": "2014-08-29T23:16:39.000Z",
  "votes": 111
}
```

<h3 id="get-a-single-episode-for-a-show-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/shows/game-of-thrones/seasons/1/episodes/1?extended=full<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all episode comments

<a id="opIdGet all episode comments"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/episodes/1/comments/newest \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/episodes/{episode}/comments/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all top level comments for an episode. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, most `replies`, `highest` rated, `lowest` rated, and most `plays`.

<h3 id="get-all-episode-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|episode|path|integer|true|episode number|
|sort|path|string|true|how to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|sort|likes|
|sort|replies|
|sort|highest|
|sort|lowest|
|sort|plays|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Great episode!",
    "created_at": "2011-03-25T22:35:17.000Z",
    "id": 8,
    "likes": 0,
    "parent_id": 0,
    "replies": 1,
    "review": false,
    "spoiler": false,
    "updated_at": "2011-03-25T22:35:17.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    },
    "user_stats": {
      "completed_count": 1,
      "play_count": 1,
      "rating": 8
    }
  }
]
```

<h3 id="get-all-episode-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get lists containing this episode

<a id="opIdGet lists containing this episode"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/episodes/1/lists/personal/popular \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/episodes/{episode}/lists/{type}/{sort}`

#### &#128196; Pagination &#128513; Emojis

Returns all lists that contain this episode. By default, `personal` lists are returned sorted by the most `popular`.

<h3 id="get-lists-containing-this-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|episode|path|integer|true|episode number|
|type|path|string|true|Filter for a specific list type|
|sort|path|string|true|How to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|all|
|type|personal|
|type|official|
|type|watchlists|
|sort|popular|
|sort|likes|
|sort|comments|
|sort|items|
|sort|added|
|sort|updated|

> Example responses

> 200 Response

```json
[
  {
    "allow_comments": true,
    "comment_count": 10,
    "created_at": "2014-10-11T17:00:54.000Z",
    "description": "How could my brain conceive them?",
    "display_numbers": true,
    "ids": {
      "slug": "incredible-thoughts",
      "trakt": 1337
    },
    "item_count": 50,
    "likes": 99,
    "name": "Incredible Thoughts",
    "privacy": "public",
    "sort_by": "rank",
    "sort_how": "asc",
    "type": "personal",
    "updated_at": "2014-10-11T17:00:54.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-lists-containing-this-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get all people for an episode

<a id="opIdGet all people for an episode"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/episodes/1/people \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/episodes/{episode}/people`

#### &#10024; Extended Info

Returns all `cast` and `crew` for an episode. Each `cast` member will have a `characters` array and a standard `person` object.

The `crew` object will be broken up by department into `production`, `art`, `crew`, `costume & make-up`, `directing`, `writing`, `sound`, `camera`, `visual effects`, `lighting`, and `editing` (if there are people for those crew positions). Each of those members will have a `jobs` array and a standard `person` object.

#### Guest Stars

If you add `?extended=guest_stars` to the URL, it will return all guest stars that appeared in the episode.

**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

<h3 id="get-all-people-for-an-episode-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|episode|path|integer|true|episode number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "cast": [
    {
      "characters": [
        "Daenerys Targaryen"
      ],
      "person": {
        "ids": {
          "imdb": "nm3592338",
          "slug": "emilia-clarke",
          "tmdb": 1223786,
          "trakt": 2332,
          "tvrage": null
        },
        "name": "Emilia Clarke"
      }
    },
    {
      "characters": [
        "Jon Snow"
      ],
      "person": {
        "ids": {
          "imdb": "nm3229685",
          "slug": "kit-harington",
          "tmdb": 239019,
          "trakt": 2333,
          "tvrage": null
        },
        "name": "Kit Harington"
      }
    },
    {
      "characters": [
        "Robert Baratheon"
      ],
      "person": {
        "ids": {
          "imdb": "nm0004692",
          "slug": "mark-addy",
          "tmdb": 13633,
          "trakt": 17444,
          "tvrage": 37728
        },
        "name": "Mark Addy"
      }
    }
  ],
  "crew": {
    "camera": [
      {
        "jobs": [
          "Director of Photography"
        ],
        "person": {
          "ids": {
            "imdb": "nm0002399",
            "slug": "alik-sakharov",
            "tmdb": 1318704,
            "trakt": 17509,
            "tvrage": null
          },
          "name": "Alik Sakharov"
        }
      }
    ],
    "directing": [
      {
        "jobs": [
          "Director"
        ],
        "person": {
          "ids": {
            "imdb": "nm0887700",
            "slug": "tim-van-patten",
            "tmdb": 44797,
            "trakt": 17508,
            "tvrage": 47577
          },
          "name": "Tim Van Patten"
        }
      }
    ],
    "editing": [
      {
        "jobs": [
          "Editor"
        ],
        "person": {
          "ids": {
            "imdb": "nm0653205",
            "slug": "oral-norrie-ottey",
            "tmdb": 18077,
            "trakt": 17510,
            "tvrage": null
          },
          "name": "Oral Norrie Ottey"
        }
      }
    ],
    "writing": [
      {
        "jobs": [
          "Writer"
        ],
        "person": {
          "ids": {
            "imdb": "nm1125275",
            "slug": "david-benioff",
            "tmdb": 9813,
            "trakt": 2631,
            "tvrage": null
          },
          "name": "David Benioff"
        }
      },
      {
        "jobs": [
          "Writer"
        ],
        "person": {
          "ids": {
            "imdb": "nm1888967",
            "slug": "d-b-weiss",
            "tmdb": 228068,
            "trakt": 17443,
            "tvrage": null
          },
          "name": "D. B. Weiss"
        }
      }
    ]
  },
  "guest_stars": [
    {
      "characters": [
        "Khal Drogo"
      ],
      "person": {
        "ids": {
          "imdb": "nm0597388",
          "slug": "jason-momoa",
          "tmdb": 117642,
          "trakt": 5038,
          "tvrage": 35980
        },
        "name": "Jason Momoa"
      }
    },
    {
      "characters": [
        "Hodor"
      ],
      "person": {
        "ids": {
          "imdb": null,
          "slug": "kristian-nairn",
          "tmdb": 1223792,
          "trakt": 13075,
          "tvrage": null
        },
        "name": "Kristian Nairn"
      }
    },
    {
      "characters": [
        "Benjen Stark"
      ],
      "person": {
        "ids": {
          "imdb": "nm1152798",
          "slug": "joseph-mawle",
          "tmdb": 119783,
          "trakt": 10613,
          "tvrage": null
        },
        "name": "Joseph Mawle"
      }
    }
  ]
}
```

<h3 id="get-all-people-for-an-episode-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/shows/game-of-thrones/seasons/1/episodes/1/people?extended=guest_stars<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get episode ratings

<a id="opIdGet episode ratings"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/episodes/12/ratings \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/episodes/{episode}/ratings`

Returns rating (between 0 and 10) and distribution for an episode.

<h3 id="get-episode-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|episode|path|integer|true|episode number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "distribution": {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "9": 1,
    "10": 2
  },
  "rating": 9,
  "votes": 3
}
```

<h3 id="get-episode-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get episode stats

<a id="opIdGet episode stats"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/episodes/1/stats \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/episodes/{episode}/stats`

Returns lots of episode stats.

<h3 id="get-episode-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|episode|path|integer|true|episode number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "collected_episodes": 87991,
  "collectors": 12899,
  "comments": 115,
  "lists": 309,
  "plays": 37986,
  "votes": 25655,
  "watchers": 30521
}
```

<h3 id="get-episode-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get all episode translations

<a id="opIdGet all episode translations"></a>

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/episodes/1/translations/es \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/episodes/{episode}/translations/{language}`

Returns all translations for an episode, including language and translated values for title and overview.

<h3 id="get-all-episode-translations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|episode|path|integer|true|episode number|
|language|path|string|true|2 character language code|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "country": "us",
    "language": "en",
    "overview": "Jon Arryn, the Hand of the King, is dead. King Robert Baratheon plans to ask his oldest friend, Eddard Stark, to take Jon's place. Across the sea, Viserys Targaryen plans to wed his sister to a nomadic warlord in exchange for an army.",
    "title": "Winter Is Coming"
  },
  {
    "country": "es",
    "language": "es",
    "overview": "El Lord Ned Stark está preocupado por los perturbantes reportes de un desertor del Nights Watch; El Rey Robert y los Lannisters llegan a Winterfell; el exiliado Viserys Targaryen forja una nueva y poderosa alianza.",
    "title": "Se acerca el invierno"
  },
  {
    "country": "tw",
    "language": "zh",
    "overview": "一名守夜人军团的逃兵在临冬城外被抓获，领主艾德（奈德）·史塔克下令将其处斩。奈德对绝境长城之外的形势忧心忡忡。行刑结束后，奈德回到城中，他的夫人凯特琳带来一个令人震惊的消息：奈德的良师益友、现任首相琼恩·艾林在都城离奇死亡，罗伯特国王正启程赶往北方，希望奈德接替琼恩·艾林出任国王之手。与此同时，在狭海对岸的潘托斯，韦赛里斯·坦格利安正计划与多斯拉克游牧民族的一位重要首领卓戈卡奥结盟，凭借多斯拉克人的力量夺回本属于他的铁王座。他妹妹丹妮莉斯的终身幸福成了他手中最重要的筹码。罗伯特国王带着瑟曦·兰尼斯特王后及兰尼斯特家族的重要成员抵达临冬城。他的随行人员包括：王后的弟弟詹姆和提力昂，他们一个英俊潇洒，一个却是侏儒；12岁的乔佛里王子，王位的继承人。奈德无法拒绝国王的盛情邀请，决定南下君临城帮助国王稳定国内局势。就在罗伯特和奈德动身之前，奈德的私生子琼恩·雪诺决定北上黑城堡加盟守夜人军团，对守夜人颇为好奇的提力昂打算和雪诺一同前往。厄运突然降临到奈德的次子布兰身上，奈德和琼恩都被迫推迟了行程。",
    "title": "凛冬将至"
  }
]
```

<h3 id="get-all-episode-translations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get users watching right now

> Code samples

```bash
curl https://example.com/shows/game-of-thrones/seasons/1/episodes/1/watching \
  -H 'Accept: application/json'
```

`GET /shows/{id}/seasons/{season}/episodes/{episode}/watching`

#### &#10024; Extended Info

Returns all users watching this episode right now.

<h3 id="get-users-watching-right-now-3-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|Trakt ID, Trakt slug, or IMDB ID|
|season|path|integer|true|season number|
|episode|path|integer|true|episode number|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "ids": {
      "slug": "justin"
    },
    "name": "Justin Nemeth",
    "private": false,
    "username": "justin",
    "vip": true,
    "vip_ep": false
  },
  {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
]
```

<h3 id="get-users-watching-right-now-3-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="trakt-api-sync">Sync</h1>

Syncing with trakt opens up quite a few cool features. Most importantly, trakt can serve as a cloud based backup for the data in your app. This is especially useful when rebuilding a media center or installing a mobile app on your new phone. It can also be nice to sync up multiple media centers with a central trakt account. If everything is in sync, your media can be managed from trakt and be reflected in your apps.

### Media objects for syncing

As a baseline, all *add* and *remove* sync methods accept arrays of `movies`, `shows`, and `episodes`. Each of these top level array elements should themselves be an array of standard `movie`, `show`, or `episode` objects. Full examples are in the intro section called **Standard Media Objects**. Keep in mind that `episode` objects really only need the `ids` so it can find an exact match. This is useful for absolute ordered shows. Some methods also have optional metadata you can attach, so check the docs for each specific method.

Media objects will be matched by ID first, then fall back to title and year. IDs will be matched in this order `trakt`, `imdb`, `tmdb`, `tvdb`, and `slug`. If nothing is found, it will match on the `title` and `year`. If still nothing, it would use just the `title` (or `name` for people) and find the most current object that exists.

### Watched History Sync

This is a 2 way sync that will get items from trakt to sync locally, plus find anything new and sync back to trakt. Perform this sync on startup or at set intervals (i.e. once every day) to keep everything in sync. *This will only send data to trakt and not remove it.*

### Collection Sync

It's very handy to have a snapshot on trakt of everything you have available to watch locally. Syncing your local connection will do just that. *This will only send data to trakt and not remove it.*

### Clean Collection

Cleaning a collection involves comparing the trakt collection to what exists locally. This will remove items from the trakt collection if they don't exist locally anymore. You should make this clear to the user that data might be removed from trakt.

## Add items to collection

<a id="opIdAdd items to collection"></a>

> Code samples

```bash
curl https://example.com/sync/collection \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        }
      }
    ],
    "movies": [
      {
        "audio": "dts_ma",
        "audio_channels": "5.1",
        "collected_at": "2014-09-01T09:10:11.000Z",
        "hdr": "dolby_vision",
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "media_type": "digital",
        "resolution": "uhd_4k",
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      },
      {
        "ids": {
          "imdb": "tt0804503",
          "slug": "mad-men",
          "tmdb": 1104,
          "trakt": 4,
          "tvdb": 80337
        },
        "seasons": [
          {
            "episodes": [
              {
                "audio": "dolby_digital_plus",
                "audio_channels": "5.1",
                "media_type": "bluray",
                "number": 1,
                "resolution": "hd_1080p"
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ],
        "title": "Mad Men",
        "year": 2007
      }
    ]
  }'
```

`POST /sync/collection`

#### &#128274; OAuth Required

Add items to a user's collection. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be collected. If seasons are specified, all episodes in those seasons will be collected.

Send a `collected_at` UTC datetime to mark items as collected in the past. You can also send additional metadata about the media itself to have a very accurate collection. Showcase what is available to watch from your epic HD DVD collection down to your downloaded iTunes movies.

**Note:** You can resend items already in your collection and they will be updated with any new values. This includes the `collected_at` and any other metadata.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |

#### Media Object POST Data

| Key | Type | Value |
|---|---|---|
| item <span style="color:red;">*</a> | object | `movie`, `show`, or `episode` object. |
| `collected_at` | datetime | UTC datetime when the item was collected. Set to `released` to automatically use the inital release date + runtime *(episodes only)*). |
| `media_type` | string | Set to `digital`, `bluray`, `hddvd`, `dvd`, `vcd`, `vhs`, `betamax`, or `laserdisc`. |
| `resolution` | string | Set to `uhd_4k`, `hd_1080p`, `hd_1080i`, `hd_720p`, `sd_480p`, `sd_480i`, `sd_576p`, or `sd_576i`. |
| `hdr` | string | Set to `dolby_vision`, `hdr10`, `hdr10_plus`, or `hlg`. |
| `audio` | string | Set to `dolby_digital`, `dolby_digital_plus`, `dolby_digital_plus_atmos`, `dolby_truehd`, `dolby_atmos` *(Dolby TrueHD Atmos)*, `dolby_prologic`, `dts`, `dts_ma`, `dts_hr`, `dts_x`, `auro_3d`, `mp3`, `mp2`, `aac`, `lpcm`, `ogg` *(Ogg Vorbis)*, `ogg_opus`, `wma`, or `flac`. |
| `audio_channels` | string | Set to `1.0`, `2.0`, `2.1`, `3.0`, `3.1`, `4.0`, `4.1`, `5.0`, `5.1`, `5.1.2`, `5.1.4`, `6.1`, `7.1`, `7.1.2`, `7.1.4`, `9.1`, or `10.1` |
| `3d` | boolean | Set `true` if in 3D. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      }
    }
  ],
  "movies": [
    {
      "audio": "dts_ma",
      "audio_channels": "5.1",
      "collected_at": "2014-09-01T09:10:11.000Z",
      "hdr": "dolby_vision",
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "media_type": "digital",
      "resolution": "uhd_4k",
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    },
    {
      "ids": {
        "imdb": "tt0804503",
        "slug": "mad-men",
        "tmdb": 1104,
        "trakt": 4,
        "tvdb": 80337
      },
      "seasons": [
        {
          "episodes": [
            {
              "audio": "dolby_digital_plus",
              "audio_channels": "5.1",
              "media_type": "bluray",
              "number": 1,
              "resolution": "hd_1080p"
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ],
      "title": "Mad Men",
      "year": 2007
    }
  ]
}
```

<h3 id="add-items-to-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» movies|body|[object]|false|none|
|» » audio|body|string|false|none|
|» » audio_channels|body|string|false|none|
|» » collected_at|body|string|false|none|
|» » hdr|body|string|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » media_type|body|string|false|none|
|» » resolution|body|string|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » audio|body|string|false|none|
|» » » » audio_channels|body|string|false|none|
|» » » » media_type|body|string|false|none|
|» » » » number|body|number|true|none|
|» » » » resolution|body|string|false|none|
|» » » number|body|number|true|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 201 Response

```json
{
  "added": {
    "episodes": 12,
    "movies": 1
  },
  "existing": {
    "episodes": 0,
    "movies": 0
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": []
  },
  "updated": {
    "episodes": 0,
    "movies": 0
  }
}
```

<h3 id="add-items-to-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove items from collection

<a id="opIdRemove items from collection"></a>

> Code samples

```bash
curl https://example.com/sync/collection/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        }
      }
    ],
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      },
      {
        "ids": {
          "imdb": "tt0804503",
          "slug": "mad-men",
          "tmdb": 1104,
          "trakt": 4,
          "tvdb": 80337
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ],
        "title": "Mad Men",
        "year": 2007
      }
    ]
  }'
```

`POST /sync/collection/remove`

#### &#128274; OAuth Required

Remove one or more items from a user's collection.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      }
    }
  ],
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    },
    {
      "ids": {
        "imdb": "tt0804503",
        "slug": "mad-men",
        "tmdb": 1104,
        "trakt": 4,
        "tvdb": 80337
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ],
      "title": "Mad Men",
      "year": 2007
    }
  ]
}
```

<h3 id="remove-items-from-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » number|body|number|true|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "deleted": {
    "episodes": 12,
    "movies": 1
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="remove-items-from-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get collection

<a id="opIdGet collection"></a>

> Code samples

```bash
curl https://example.com/sync/collection/movies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/collection/{type}`

#### &#128274; OAuth Required &#10024; Extended Info

Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.

Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.

Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.

If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.

<h3 id="get-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|

> Example responses

> 200 Response

```json
[
  {
    "last_collected_at": "2014-09-01T09:10:11.000Z",
    "last_updated_at": "2014-09-01T09:10:11.000Z",
    "seasons": [
      {
        "episodes": [
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 1
          },
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 2
          }
        ],
        "number": 1
      },
      {
        "episodes": [
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10_plus",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 1
          },
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10_plus",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 2
          }
        ],
        "number": 2
      }
    ],
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    }
  },
  {
    "last_collected_at": "2014-09-01T09:10:11.000Z",
    "last_updated_at": "2014-09-01T09:10:11.000Z",
    "seasons": [
      {
        "episodes": [
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 1
          },
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 2
          }
        ],
        "number": 1
      },
      {
        "episodes": [
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 1
          },
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 2
          }
        ],
        "number": 2
      }
    ],
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    }
  }
]
```

<h3 id="get-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/sync/collection/shows?extended=metadata<br>```|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Add items to watched history

<a id="opIdAdd items to watched history"></a>

> Code samples

```bash
curl https://example.com/sync/history \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        },
        "watched_at": "2014-09-01T09:10:11.000Z"
      }
    ],
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "title": "Batman Begins",
        "watched_at": "2014-09-01T09:10:11.000Z",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        },
        "watched_at": "2019-01-02T09:10:11.000Z"
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3,
            "watched_at": "2014-09-01T09:10:11.000Z"
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      },
      {
        "ids": {
          "imdb": "tt0804503",
          "slug": "mad-men",
          "tmdb": 1104,
          "trakt": 4,
          "tvdb": 80337
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1,
                "watched_at": "2014-09-01T09:10:11.000Z"
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ],
        "title": "Mad Men",
        "year": 2007
      }
    ]
  }'
```

`POST /sync/history`

#### &#128274; OAuth Required

Add items to a user's watch history. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be added. If seasons are specified, only episodes in those seasons will be added.

Send a `watched_at` UTC datetime to mark items as watched in the past. This is useful for syncing past watches from a media center.

**Note:** Please be careful with sending duplicate data. We don't verify the `item` + `watched_at` to ensure it's unique, it is up to your app to veify this and not send duplicate plays.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |

#### Media Object POST Data

| Key | Type | Value |
|---|---|---|
| item <span style="color:red;">*</a> | object | `movie`, `show`, or `episode` object. |
| `watched_at` | datetime | UTC datetime when the item was watched. Set to `released` to automatically use the initial release date + runtime *(episodes only)*. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      },
      "watched_at": "2014-09-01T09:10:11.000Z"
    }
  ],
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "watched_at": "2014-09-01T09:10:11.000Z",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      },
      "watched_at": "2019-01-02T09:10:11.000Z"
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3,
          "watched_at": "2014-09-01T09:10:11.000Z"
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    },
    {
      "ids": {
        "imdb": "tt0804503",
        "slug": "mad-men",
        "tmdb": 1104,
        "trakt": 4,
        "tvdb": 80337
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1,
              "watched_at": "2014-09-01T09:10:11.000Z"
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ],
      "title": "Mad Men",
      "year": 2007
    }
  ]
}
```

<h3 id="add-items-to-watched-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » watched_at|body|string|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » watched_at|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » watched_at|body|string|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » » watched_at|body|string|false|none|
|» » » number|body|number|true|none|
|» » » watched_at|body|string|false|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 201 Response

```json
{
  "added": {
    "episodes": 72,
    "movies": 2
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="add-items-to-watched-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove items from history

<a id="opIdRemove items from history"></a>

> Code samples

```bash
curl https://example.com/sync/history/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        }
      }
    ],
    "ids": [
      4,
      8,
      15,
      16,
      23,
      42
    ],
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      },
      {
        "ids": {
          "imdb": "tt0804503",
          "slug": "mad-men",
          "tmdb": 1104,
          "trakt": 4,
          "tvdb": 80337
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ],
        "title": "Mad Men",
        "year": 2007
      }
    ]
  }'
```

`POST /sync/history/remove`

#### &#128274; OAuth Required

Remove items from a user's watch history including all watches, scrobbles, and checkins. Accepts shows, seasons, episodes and movies. If only a show is passed, all episodes for the show will be removed. If seasons are specified, only episodes in those seasons will be removed.

You can also send a list of raw history `ids` _(64-bit integers)_ to delete single plays from the watched history. The [**/sync/history**](#reference/sync/get-history) method will return an individual `id` _(64-bit integer)_ for each history item.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |
| `ids` | array | Array of history ids. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      }
    }
  ],
  "ids": [
    4,
    8,
    15,
    16,
    23,
    42
  ],
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    },
    {
      "ids": {
        "imdb": "tt0804503",
        "slug": "mad-men",
        "tmdb": 1104,
        "trakt": 4,
        "tvdb": 80337
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ],
      "title": "Mad Men",
      "year": 2007
    }
  ]
}
```

<h3 id="remove-items-from-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» ids|body|[number]|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » number|body|number|true|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "deleted": {
    "episodes": 72,
    "movies": 2
  },
  "not_found": {
    "episodes": [],
    "ids": [
      23,
      42
    ],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="remove-items-from-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get watched history

<a id="opIdGet watched history"></a>

> Code samples

```bash
curl https://example.com/sync/history/movies/123 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/history/{type}/{id}`

#### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info

Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.

Specify a `type` and trakt `id` to limit the history for just that item. If the `id` is valid, but there is no history, an empty array will be returned.

| Example URL | Returns watches for... |
|---|---|
| `/history/movies/12601` | TRON: Legacy |
| `/history/shows/1388` | All episodes of Breaking Bad |
| `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 |
| `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |

<h3 id="get-watched-history-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|id|path|integer|true|Trakt ID for a specific item.|
|start_at|query|string|false|Starting date.|
|end_at|query|string|false|Ending date.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|

> Example responses

> 200 Response

```json
[
  {
    "action": "scrobble",
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 397629,
        "trakt": 251,
        "tvdb": 797571
      },
      "number": 1,
      "season": 2,
      "title": "Pawnee Zoo"
    },
    "id": 1982346,
    "show": {
      "ids": {
        "imdb": "tt1266020",
        "slug": "parks-and-recreation",
        "tmdb": 8592,
        "trakt": 4,
        "tvdb": 84912
      },
      "title": "Parks and Recreation",
      "year": 2009
    },
    "type": "episode",
    "watched_at": "2014-03-31T09:28:53.000Z"
  },
  {
    "action": "checkin",
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 397627,
        "trakt": 252,
        "tvdb": 1088031
      },
      "number": 2,
      "season": 2,
      "title": "The Stakeout"
    },
    "id": 1982347,
    "show": {
      "ids": {
        "imdb": "tt1266020",
        "slug": "parks-and-recreation",
        "tmdb": 8592,
        "trakt": 4,
        "tvdb": 84912
      },
      "title": "Parks and Recreation",
      "year": 2009
    },
    "type": "episode",
    "watched_at": "2014-03-31T09:28:53.000Z"
  },
  {
    "action": "watch",
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 397642,
        "trakt": 253,
        "tvdb": 1088041
      },
      "number": 3,
      "season": 2,
      "title": "Beauty Pageant"
    },
    "id": 1982348,
    "show": {
      "ids": {
        "imdb": "tt1266020",
        "slug": "parks-and-recreation",
        "tmdb": 8592,
        "trakt": 4,
        "tvdb": 84912
      },
      "title": "Parks and Recreation",
      "year": 2009
    },
    "type": "episode",
    "watched_at": "2014-03-31T09:28:53.000Z"
  }
]
```

<h3 id="get-watched-history-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/sync/history/episodes<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get last activity

<a id="opIdGet last activity"></a>

> Code samples

```bash
curl https://example.com/sync/last_activities \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/last_activities`

#### &#128274; OAuth Required

This method is a useful first step in the syncing process. We recommended caching these dates locally, then you can compare to know exactly what data has changed recently. This can greatly optimize your syncs so you don't pull down a ton of data only to see nothing has actually changed.

#### Account

`settings_at` is set when the OAuth user updates any of their Trakt settings on the website. `followed_at` is set when another Trakt user follows or unfollows the OAuth user. `following_at` is set when the OAuth user follows or unfollows another Trakt user. `pending_at` is set when the OAuth user follows a private account, which requires their approval. `requested_at` is set when the OAuth user has a private account and someone requests to follow them.

<h3 id="get-last-activity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "account": {
    "followed_at": "2020-03-04T03:38:09.000Z",
    "following_at": "2020-03-04T03:38:09.000Z",
    "pending_at": "2020-03-04T03:38:09.000Z",
    "requested_at": "2022-04-27T03:38:09.000Z",
    "settings_at": "2020-03-04T03:38:09.000Z"
  },
  "all": "2014-11-20T07:01:32.000Z",
  "comments": {
    "blocked_at": "2022-02-22T03:38:09.000Z",
    "liked_at": "2014-11-20T03:38:09.000Z"
  },
  "episodes": {
    "collected_at": "2014-11-19T22:02:41.000Z",
    "commented_at": "2014-11-20T06:51:30.000Z",
    "paused_at": "2014-11-20T06:51:30.000Z",
    "rated_at": "2014-11-20T06:51:30.000Z",
    "watched_at": "2014-11-20T06:51:30.000Z",
    "watchlisted_at": "2014-11-20T06:51:30.000Z"
  },
  "lists": {
    "commented_at": "2014-11-20T06:51:30.000Z",
    "liked_at": "2014-11-20T00:36:48.000Z",
    "updated_at": "2014-11-20T06:52:18.000Z"
  },
  "movies": {
    "collected_at": "2014-11-20T06:51:30.000Z",
    "commented_at": "2014-11-20T06:51:30.000Z",
    "hidden_at": "2016-08-20T06:51:30.000Z",
    "paused_at": "2014-11-20T06:51:30.000Z",
    "rated_at": "2014-11-19T18:32:29.000Z",
    "recommendations_at": "2014-11-19T21:42:41.000Z",
    "watched_at": "2014-11-19T21:42:41.000Z",
    "watchlisted_at": "2014-11-19T21:42:41.000Z"
  },
  "recommendations": {
    "updated_at": "2014-11-20T06:52:18.000Z"
  },
  "saved_filters": {
    "updated_at": "2022-06-14T06:52:18.000Z"
  },
  "seasons": {
    "commented_at": "2014-11-20T06:51:30.000Z",
    "hidden_at": "2016-08-20T06:51:30.000Z",
    "rated_at": "2014-11-19T19:54:24.000Z",
    "watchlisted_at": "2014-11-20T06:51:30.000Z"
  },
  "shows": {
    "commented_at": "2014-11-20T06:51:30.000Z",
    "hidden_at": "2016-08-20T06:51:30.000Z",
    "rated_at": "2014-11-19T19:50:58.000Z",
    "recommendations_at": "2014-11-20T06:51:30.000Z",
    "watchlisted_at": "2014-11-20T06:51:30.000Z"
  },
  "watchlist": {
    "updated_at": "2014-11-20T06:52:18.000Z"
  }
}
```

<h3 id="get-last-activity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove a playback item

<a id="opIdRemove a playback item"></a>

> Code samples

```bash
curl https://example.com/sync/playback/13 \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /sync/playback/{id}`

#### &#128274; OAuth Required

Remove a playback item from a user's playback progress list. A `404` will be returned if the `id` is invalid.

<h3 id="remove-a-playback-item-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|integer|true|playback ID|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

<h3 id="remove-a-playback-item-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get playback progress

<a id="opIdGet playback progress"></a>

> Code samples

```bash
curl https://example.com/sync/playback/movies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/playback/{type}`

#### &#128274; OAuth Required &#128196; Pagination Optional

Whenever a scrobble is paused, the playback progress is saved. Use this progress to sync up playback across different media centers or apps. For example, you can start watching a movie in a media center, stop it, then resume on your tablet from the same spot. Each item will have the `progress` percentage between 0 and 100.

You can optionally specify a `type` to only get `movies` or `episodes`.

By default, all results will be returned. Pagination is optional and can be used for something like an "on deck" feature, or if you only need a limited data set.

**Note:** We only save playback progress for the last 6 months.

<h3 id="get-playback-progress-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|start_at|query|string|false|Starting date.|
|end_at|query|string|false|Ending date.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|episodes|

> Example responses

> 200 Response

```json
[
  {
    "id": 13,
    "movie": {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    "paused_at": "2015-01-25T22:01:32.000Z",
    "progress": 10,
    "type": "movie"
  },
  {
    "episode": {
      "ids": {
        "imdb": "",
        "tmdb": 62131,
        "trakt": 1,
        "tvdb": 3859781
      },
      "number": 1,
      "season": 0,
      "title": "Good Cop Bad Cop"
    },
    "id": 37,
    "paused_at": "2015-01-25T22:01:32.000Z",
    "progress": 65.5,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  }
]
```

<h3 id="get-playback-progress-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Add new ratings

<a id="opIdAdd new ratings"></a>

> Code samples

```bash
curl https://example.com/sync/ratings \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        },
        "rating": 7
      }
    ],
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "rated_at": "2014-09-01T09:10:11.000Z",
        "rating": 5,
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        },
        "rating": 10
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        },
        "rating": 10
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "rating": 10,
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3,
            "rating": 9
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      },
      {
        "ids": {
          "imdb": "tt0804503",
          "slug": "mad-men",
          "tmdb": 1104,
          "trakt": 4,
          "tvdb": 80337
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1,
                "rating": 8
              },
              {
                "number": 2,
                "rating": 8
              }
            ],
            "number": 1
          }
        ],
        "title": "Mad Men",
        "year": 2007
      }
    ]
  }'
```

`POST /sync/ratings`

#### &#128274; OAuth Required

Rate one or more items. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be rated. If seasons are specified, all of those seasons will be rated.

Send a `rated_at` UTC datetime to mark items as rated in the past. This is useful for syncing ratings from a media center.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |

#### Media Object POST Data

| Key | Type | Value |
|---|---|---|
| item <span style="color:red;">*</a> | object | `movie`, `show`, `season`, or `episode` object. |
| `rating` <span style="color:red;">*</a> | integer | Between 1 and 10. |
| `rated_at` | datetime | UTC datetime when the item was rated. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      },
      "rating": 7
    }
  ],
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "rated_at": "2014-09-01T09:10:11.000Z",
      "rating": 5,
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      },
      "rating": 10
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      },
      "rating": 10
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "rating": 10,
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3,
          "rating": 9
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    },
    {
      "ids": {
        "imdb": "tt0804503",
        "slug": "mad-men",
        "tmdb": 1104,
        "trakt": 4,
        "tvdb": 80337
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1,
              "rating": 8
            },
            {
              "number": 2,
              "rating": 8
            }
          ],
          "number": 1
        }
      ],
      "title": "Mad Men",
      "year": 2007
    }
  ]
}
```

<h3 id="add-new-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » rating|body|number|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » rated_at|body|string|false|none|
|» » rating|body|number|true|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » rating|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » rating|body|number|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » » rating|body|number|true|none|
|» » » number|body|number|true|none|
|» » » rating|body|number|false|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 201 Response

```json
{
  "added": {
    "episodes": 2,
    "movies": 1,
    "seasons": 1,
    "shows": 1
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        },
        "rating": 10
      }
    ],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="add-new-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove ratings

<a id="opIdRemove ratings"></a>

> Code samples

```bash
curl https://example.com/sync/ratings/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        }
      }
    ],
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      },
      {
        "ids": {
          "imdb": "tt0804503",
          "slug": "mad-men",
          "tmdb": 1104,
          "trakt": 4,
          "tvdb": 80337
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ],
        "title": "Mad Men",
        "year": 2007
      }
    ]
  }'
```

`POST /sync/ratings/remove`

#### &#128274; OAuth Required

Remove ratings for one or more items.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      }
    }
  ],
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    },
    {
      "ids": {
        "imdb": "tt0804503",
        "slug": "mad-men",
        "tmdb": 1104,
        "trakt": 4,
        "tvdb": 80337
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ],
      "title": "Mad Men",
      "year": 2007
    }
  ]
}
```

<h3 id="remove-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » number|body|number|true|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "deleted": {
    "episodes": 2,
    "movies": 1,
    "seasons": 1,
    "shows": 1
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="remove-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get ratings

<a id="opIdGet ratings"></a>

> Code samples

```bash
curl https://example.com/sync/ratings/movies/9 \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/ratings/{type}/{rating}`

#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info

Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.

<h3 id="get-ratings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|rating|path|integer|true|Filter for a specific rating.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|
|type|all|
|rating|1|
|rating|2|
|rating|3|
|rating|4|
|rating|5|
|rating|6|
|rating|7|
|rating|8|
|rating|9|
|rating|10|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt1683084",
        "tmdb": 62118,
        "trakt": 49,
        "tvdb": 2639411
      },
      "number": 1,
      "season": 4,
      "title": "Box Cutter"
    },
    "rated_at": "2014-09-01T09:10:11.000Z",
    "rating": 10,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt1683095",
        "tmdb": 62127,
        "trakt": 56,
        "tvdb": 4127161
      },
      "number": 8,
      "season": 4,
      "title": "Hermanos"
    },
    "rated_at": "2014-09-01T09:10:11.000Z",
    "rating": 10,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  }
]
```

<h3 id="get-ratings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/sync/ratings/episodes<br>```|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Add items to personal recommendations

<a id="opIdAdd items to personal recommendations"></a>

> Code samples

```bash
curl https://example.com/sync/recommendations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "notes": "One of Chritian Bale'\''s most iconic roles.",
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "notes": "I AM THE DANGER!",
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "title": "The Walking Dead",
        "year": 2010
      }
    ]
  }'
```

`POST /sync/recommendations`

#### &#128274; OAuth Required &#128513; Emojis

If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.

#### Notes

Each recommendation can optionally accept a `notes` *(255 maximum characters)* field explaining why the user recommended the item.

#### Limits

If the user has recommended 50 items already, a `420` HTTP error code is returned. This limit applies to all users.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |

> Body parameter

```json
{
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "notes": "One of Chritian Bale's most iconic roles.",
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "notes": "I AM THE DANGER!",
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    }
  ]
}
```

<h3 id="add-items-to-personal-recommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » notes|body|string|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » notes|body|string|false|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 201 Response

```json
{
  "added": {
    "movies": 1,
    "shows": 2
  },
  "existing": {
    "movies": 0,
    "shows": 0
  },
  "list": {
    "item_count": 3,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "not_found": {
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "shows": []
  }
}
```

<h3 id="add-items-to-personal-recommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove items from personal recommendations

<a id="opIdRemove items from personal recommendations"></a>

> Code samples

```bash
curl https://example.com/sync/recommendations/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      }
    ]
  }'
```

`POST /sync/recommendations/remove`

#### &#128274; OAuth Required

Remove items from a user's personal recommendations. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |

> Body parameter

```json
{
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    }
  ]
}
```

<h3 id="remove-items-from-personal-recommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|

> Example responses

> 200 Response

```json
{
  "deleted": {
    "movies": 1,
    "shows": 1
  },
  "list": {
    "item_count": 0,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "not_found": {
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "shows": []
  }
}
```

<h3 id="remove-items-from-personal-recommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Reorder personally recommended items

<a id="opIdReorder personally recommended items"></a>

> Code samples

```bash
curl https://example.com/sync/recommendations/reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rank": [
      923,
      324,
      98768,
      456456,
      345,
      12,
      990
    ]
  }'
```

`POST /sync/recommendations/reorder`

#### &#128274; OAuth Required

Reorder all items on a user's personal recommendations by sending the updated `rank` of list item ids. Use the [**/sync/recommendations**](#reference/sync/get-personal-recommendations) method to get all list item ids.

> Body parameter

```json
{
  "rank": [
    923,
    324,
    98768,
    456456,
    345,
    12,
    990
  ]
}
```

<h3 id="reorder-personally-recommended-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» rank|body|[number]|false|none|

> Example responses

> 200 Response

```json
{
  "list": {
    "item_count": 3,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "skipped_ids": [
    12
  ],
  "updated": 6
}
```

<h3 id="reorder-personally-recommended-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get personal recommendations

<a id="opIdGet personal recommendations"></a>

> Code samples

```bash
curl https://example.com/sync/recommendations/movies/rank \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/recommendations/{type}/{sort}`

#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis

If the user only had 50 movies and TV shows to bring with them on a desert island, what would they be? These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.

#### Notes

Each recommendation contains a `notes` field explaining why the user recommended the item.

<h3 id="get-personal-recommendations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Filter for a specific item type|
|sort|path|string|true|How to sort (only if type is also sent)|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|
|sort|rank|
|sort|added|
|sort|released|
|sort|title|

> Example responses

> 200 Response

```json
[
  {
    "id": 101,
    "listed_at": "2014-09-01T09:10:11.000Z",
    "notes": "I AM THE DANGER!",
    "rank": 1,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "show"
  },
  {
    "id": 102,
    "listed_at": "2014-09-01T09:10:11.000Z",
    "notes": "Atmospheric for days.",
    "rank": 2,
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    },
    "type": "show"
  }
]
```

<h3 id="get-personal-recommendations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/sync/recommendations/shows<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Sort-By|string||none|
|200|X-Sort-How|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get watched

<a id="opIdGet watched"></a>

> Code samples

```bash
curl https://example.com/sync/watched/movies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/watched/{type}`

#### &#128274; OAuth Required &#10024; Extended Info

Returns all movies or shows a user has watched sorted by most plays.

If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.

Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.

Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.

<h3 id="get-watched-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|

> Example responses

> 200 Response

```json
[
  {
    "last_updated_at": "2014-10-11T17:00:54.000Z",
    "last_watched_at": "2014-10-11T17:00:54.000Z",
    "plays": 56,
    "reset_at": null,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    }
  },
  {
    "last_updated_at": "2014-10-12T17:00:54.000Z",
    "last_watched_at": "2014-10-12T17:00:54.000Z",
    "plays": 23,
    "reset_at": "2019-08-12T17:00:54.000Z",
    "show": {
      "ids": {
        "imdb": "tt1266020",
        "slug": "parks-and-recreation",
        "tmdb": 8592,
        "trakt": 4,
        "tvdb": 84912
      },
      "title": "Parks and Recreation",
      "year": 2009
    }
  }
]
```

<h3 id="get-watched-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/sync/watched/shows?extended=noseasons<br>```|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Add items to watchlist

<a id="opIdAdd items to watchlist"></a>

> Code samples

```bash
curl https://example.com/sync/watchlist \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        }
      }
    ],
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "notes": "One of Chritian Bale'\''s most iconic roles.",
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "notes": "I AM THE DANGER!",
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      },
      {
        "ids": {
          "imdb": "tt0804503",
          "slug": "mad-men",
          "tmdb": 1104,
          "trakt": 4,
          "tvdb": 80337
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ],
        "title": "Mad Men",
        "year": 2007
      }
    ]
  }'
```

`POST /sync/watchlist`

#### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced

Add one of more items to a user's watchlist. Accepts shows, seasons, episodes and movies. If only a show is passed, only the show itself will be added. If seasons are specified, all of those seasons will be added.

#### Notes

Each watchlist item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.

#### Limits

If the user's watchlist limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      }
    }
  ],
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "notes": "One of Chritian Bale's most iconic roles.",
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "notes": "I AM THE DANGER!",
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    },
    {
      "ids": {
        "imdb": "tt0804503",
        "slug": "mad-men",
        "tmdb": 1104,
        "trakt": 4,
        "tvdb": 80337
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ],
      "title": "Mad Men",
      "year": 2007
    }
  ]
}
```

<h3 id="add-items-to-watchlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » notes|body|string|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » notes|body|string|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » number|body|number|true|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 201 Response

```json
{
  "added": {
    "episodes": 2,
    "movies": 1,
    "seasons": 1,
    "shows": 1
  },
  "existing": {
    "episodes": 0,
    "movies": 0,
    "seasons": 0,
    "shows": 0
  },
  "list": {
    "item_count": 5,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="add-items-to-watchlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|420|420||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|420|X-Account-Limit|string||none|
|420|X-Upgrade-URL|string||none|
|420|X-VIP-User|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove items from watchlist

<a id="opIdRemove items from watchlist"></a>

> Code samples

```bash
curl https://example.com/sync/watchlist/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        }
      }
    ],
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      },
      {
        "ids": {
          "imdb": "tt0804503",
          "slug": "mad-men",
          "tmdb": 1104,
          "trakt": 4,
          "tvdb": 80337
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ],
        "title": "Mad Men",
        "year": 2007
      }
    ]
  }'
```

`POST /sync/watchlist/remove`

#### &#128274; OAuth Required

Remove one or more items from a user's watchlist.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      }
    }
  ],
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    },
    {
      "ids": {
        "imdb": "tt0804503",
        "slug": "mad-men",
        "tmdb": 1104,
        "trakt": 4,
        "tvdb": 80337
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ],
      "title": "Mad Men",
      "year": 2007
    }
  ]
}
```

<h3 id="remove-items-from-watchlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » number|body|number|true|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "deleted": {
    "episodes": 2,
    "movies": 1,
    "seasons": 1,
    "shows": 1
  },
  "list": {
    "item_count": 0,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="remove-items-from-watchlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Reorder watchlist items

<a id="opIdReorder watchlist items"></a>

> Code samples

```bash
curl https://example.com/sync/watchlist/reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rank": [
      923,
      324,
      98768,
      456456,
      345,
      12,
      990
    ]
  }'
```

`POST /sync/watchlist/reorder`

#### &#128274; OAuth Required

Reorder all items on a user's watchlist by sending the updated `rank` of list item ids. Use the [**/sync/watchlist**](#reference/sync/get-watchlist) method to get all list item ids.

> Body parameter

```json
{
  "rank": [
    923,
    324,
    98768,
    456456,
    345,
    12,
    990
  ]
}
```

<h3 id="reorder-watchlist-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» rank|body|[number]|false|none|

> Example responses

> 200 Response

```json
{
  "list": {
    "item_count": 5,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "skipped_ids": [
    12
  ],
  "updated": 6
}
```

<h3 id="reorder-watchlist-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get watchlist

<a id="opIdGet watchlist"></a>

> Code samples

```bash
curl https://example.com/sync/watchlist/movies/rank \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /sync/watchlist/{type}/{sort}`

#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis

Returns all items in a user's watchlist filtered by type.

#### Notes

Each watchlist item contains a `notes` field with text entered by the user.

#### Sorting Headers

By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.

We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.

#### Auto Removal

When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.

_**The watchlist should not be used as a list of what the user is actively watching.**_

Use a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.

<h3 id="get-watchlist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|type|path|string|true|Filter for a specific item type|
|sort|path|string|true|How to sort (only if type is also sent)|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|
|sort|rank|
|sort|added|
|sort|released|
|sort|title|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt1683084",
        "tmdb": 62118,
        "trakt": 49,
        "tvdb": 2639411
      },
      "number": 1,
      "season": 4,
      "title": "Box Cutter"
    },
    "id": 101,
    "listed_at": "2014-09-01T09:10:11.000Z",
    "notes": null,
    "rank": 1,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt1683095",
        "tmdb": 62127,
        "trakt": 56,
        "tvdb": 4127161
      },
      "number": 8,
      "season": 4,
      "title": "Hermanos"
    },
    "id": 102,
    "listed_at": "2014-09-01T09:10:11.000Z",
    "notes": null,
    "rank": 2,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  }
]
```

<h3 id="get-watchlist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/sync/watchlist/episodes<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Sort-By|string||none|
|200|X-Sort-How|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

<h1 id="trakt-api-users">Users</h1>

User's with public data will return info with all GET methods. Private user's (including yourself) require valid OAuth and a friend relationship to return data.

### Username vs. Slug

All `users` methods should use the `slug` to identify the user. The `slug` is a URL safe and globally unique version of the `username`.

### Special ID for the OAuth user

If you send valid OAuth, you can use `me` to identify the OAuth user instead of needing their actual slug. You can of course still use their actual slug, it's up to you.

### Extra Headers

If valid OAuth is sent, additional headers will be sent to better determine it is a data permissions issue (they aren't friends) and not bad OAuth. For example, you might try and access a private user's list you aren't friends with. This will return a `401` HTTP status code and the additional headers. This means the OAuth is valid, but authorization ultimately failed because there is no friend relationship.

| Header | Value |
|---|---|
| `X-Private-User` | `true` or `false` |

### Creating New Users

Since the API uses OAuth, users can create a new account during that flow if they need to. As far as your app is concerned, you'll still receive OAuth tokens no matter if they sign in with an existing account or create a new one.

## Get hidden items

<a id="opIdGet hidden items"></a>

> Code samples

```bash
curl https://example.com/users/hidden/calendar \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/hidden/{section}`

#### &#128274; OAuth Required &#128196; Pagination &#10024; Extended Info

Get hidden items for a section. This will return an array of standard media objects. You can optionally limit the `type` of results to return.

<h3 id="get-hidden-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|none|
|type|query|string|false|Narrow down by element type.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|calendar|
|section|progress_watched|
|section|progress_watched_reset|
|section|progress_collected|
|section|recommendations|
|section|comments|
|type|movie|
|type|show|
|type|season|
|type|user|

> Example responses

> 200 Response

```json
[
  {
    "hidden_at": "2015-03-30T23:18:42.000Z",
    "show": {
      "ids": {
        "imdb": "tt0397442",
        "slug": "gossip-girl",
        "tmdb": 1395,
        "trakt": 48,
        "tvdb": 80547
      },
      "title": "Gossip Girl",
      "year": 2007
    },
    "type": "show"
  },
  {
    "hidden_at": "2015-03-30T23:19:33.000Z",
    "show": {
      "ids": {
        "imdb": "tt2365946",
        "slug": "bitten",
        "tmdb": 60556,
        "trakt": 839,
        "tvdb": 269550
      },
      "title": "Bitten",
      "year": 2014
    },
    "type": "show"
  }
]
```

<h3 id="get-hidden-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Add hidden items

<a id="opIdAdd hidden items"></a>

> Code samples

```bash
curl https://example.com/users/hidden/calendar \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "trakt": 1337
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      }
    ]
  }'
```

`POST /users/hidden/{section}`

#### &#128274; OAuth Required

Hide items for a specific section. Here's what type of items can hidden for each section.

#### Hideable Media Objects

| Section | Objects |
|---|---|---|
| `calendar` | `movie`, `show` |
| `progress_watched` | `show`, `season` |
| `progress_collected` | `show`, `season` |
| `recommendations` | `movie`, `show` |
| `comments` | `user` |

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `users` | array | Array of `user` objects. |

> Body parameter

```json
{
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "trakt": 1337
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    }
  ]
}
```

<h3 id="add-hidden-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » trakt|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » seasons|body|[object]|false|none|
|» » » number|body|number|false|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|calendar|
|section|progress_watched|
|section|progress_collected|
|section|recommendations|

> Example responses

> 201 Response

```json
{
  "added": {
    "movies": 1,
    "seasons": 2,
    "shows": 2,
    "users": 0
  },
  "not_found": {
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": [],
    "users": []
  }
}
```

<h3 id="add-hidden-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove hidden items

<a id="opIdRemove hidden items"></a>

> Code samples

```bash
curl https://example.com/users/hidden/calendar/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "movies": [
      {
        "ids": {
          "imdb": "tt0372784",
          "slug": "batman-begins-2005",
          "tmdb": 272,
          "trakt": 1
        },
        "title": "Batman Begins",
        "year": 2005
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [
      {
        "ids": {
          "trakt": 1337
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "imdb": "tt0903747",
          "slug": "breaking-bad",
          "tmdb": 1396,
          "trakt": 1,
          "tvdb": 81189
        },
        "title": "Breaking Bad",
        "year": 2008
      },
      {
        "ids": {
          "imdb": "tt1520211",
          "slug": "the-walking-dead",
          "tmdb": 1402,
          "trakt": 2,
          "tvdb": 153021
        },
        "seasons": [
          {
            "number": 3
          }
        ],
        "title": "The Walking Dead",
        "year": 2010
      }
    ]
  }'
```

`POST /users/hidden/{section}/remove`

#### &#128274; OAuth Required

Unhide items for a specific section. Here's what type of items can unhidden for each section.

#### Unhideable Media Objects

| Section | Objects |
|---|---|---|
| `calendar` | `movie`, `show` |
| `progress_watched` | `show`, `season` |
| `progress_collected` | `show`, `season` |
| `recommendations` | `movie`, `show` |
| `comments` | `user` |

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `users` | array | Array of `user` objects. |

> Body parameter

```json
{
  "movies": [
    {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "seasons": [
    {
      "ids": {
        "trakt": 1337
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "seasons": [
        {
          "number": 3
        }
      ],
      "title": "The Walking Dead",
      "year": 2010
    }
  ]
}
```

<h3 id="remove-hidden-items-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » title|body|string|false|none|
|» » year|body|number|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » trakt|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» » seasons|body|[object]|false|none|
|» » » number|body|number|false|none|
|» » title|body|string|true|none|
|» » year|body|number|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|calendar|
|section|progress_watched|
|section|progress_collected|
|section|recommendations|
|section|comments|

> Example responses

> 200 Response

```json
{
  "deleted": {
    "movies": 1,
    "seasons": 2,
    "shows": 2,
    "users": 0
  },
  "not_found": {
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "seasons": [],
    "shows": [],
    "users": []
  }
}
```

<h3 id="remove-hidden-items-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get follow requests

<a id="opIdGet follow requests"></a>

> Code samples

```bash
curl https://example.com/users/requests \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/requests`

#### &#128274; OAuth Required &#10024; Extended Info

List a user's pending follow requests so they can either approve or deny them.

<h3 id="get-follow-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "id": 3,
    "requested_at": "2014-09-22T04:23:48.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-follow-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get pending following requests

<a id="opIdGet pending following requests"></a>

> Code samples

```bash
curl https://example.com/users/requests/following \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/requests/following`

#### &#128274; OAuth Required &#10024; Extended Info

List a user's pending following requests that they're waiting for the other user's to approve.

<h3 id="get-pending-following-requests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "id": 3,
    "requested_at": "2014-09-22T04:23:48.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-pending-following-requests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Approve follow request

<a id="opIdApprove follow request"></a>

> Code samples

```bash
curl https://example.com/users/requests/123 \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/requests/{id}`

#### &#128274; OAuth Required

Approve a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.

<h3 id="approve-follow-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the follower request.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "followed_at": "2014-09-22T05:38:54.083Z",
  "user": {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
}
```

<h3 id="approve-follow-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Deny follow request

<a id="opIdDeny follow request"></a>

> Code samples

```bash
curl https://example.com/users/requests/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/requests/{id}`

#### &#128274; OAuth Required

Deny a follower using the `id` of the request. If the `id` is not found, was already approved, or was already denied, a `404` error will be returned.

<h3 id="deny-follow-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|

<h3 id="deny-follow-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get saved filters

<a id="opIdGet saved filters"></a>

> Code samples

```bash
curl https://example.com/users/saved_filters/movies \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/saved_filters/{section}`

#### &#128274; OAuth Required &#128196; Pagination 🔥 VIP Only

Get all saved filters a user has created. The `path` and `query` can be used to construct an API path to retrieve the saved data. Think of this like a dynamically updated list.

<h3 id="get-saved-filters-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|section|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|section|movies|
|section|shows|
|section|calendars|
|section|search|

> Example responses

> 200 Response

```json
[
  {
    "id": 101,
    "name": "Movies: IMDB + TMDB ratings",
    "path": "/movies/recommended/weekly",
    "query": "imdb_ratings=6.9-10.0&tmdb_ratings=4.2-10.0",
    "rank": 1,
    "section": "movies",
    "updated_at": "2022-06-15T11:15:06.000Z"
  },
  {
    "id": 102,
    "name": "Shows: US + Disney+",
    "path": "/shows/popular",
    "query": "watchnow=disney_plus&countries=us",
    "rank": 2,
    "section": "shows",
    "updated_at": "2022-06-15T12:15:06.000Z"
  },
  {
    "id": 103,
    "name": "On Netflix",
    "path": "/calendars/my/shows",
    "query": "networks=Netflix",
    "rank": 3,
    "section": "calendars",
    "updated_at": "2022-06-15T13:15:06.000Z"
  },
  {
    "id": 104,
    "name": "Action & Adventure",
    "path": "/search/movie,show",
    "query": "genres=+action,+adventure",
    "rank": 4,
    "section": "search",
    "updated_at": "2022-06-15T14:15:06.000Z"
  }
]
```

<h3 id="get-saved-filters-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Retrieve settings

<a id="opIdRetrieve settings"></a>

> Code samples

```bash
curl https://example.com/users/settings \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/settings`

#### &#128274; OAuth Required

Get the user's settings so you can align your app's experience with what they're used to on the trakt website. A globally unique `uuid` is also returned, which can be used to identify the user locally in your app if needed. However, the `uuid` can't be used to retrieve data from the Trakt API.

<h3 id="retrieve-settings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "account": {
    "cover_image": "https://walter.trakt.tv/images/movies/000/001/545/fanarts/original/0abb604492.jpg",
    "date_format": "mdy",
    "time_24hr": false,
    "timezone": "America/Los_Angeles"
  },
  "connections": {
    "apple": false,
    "dropbox": false,
    "facebook": false,
    "google": true,
    "medium": false,
    "microsoft": false,
    "slack": false,
    "tumblr": false,
    "twitter": true
  },
  "limits": {
    "list": {
      "count": 5,
      "item_count": 250
    },
    "recommendations": {
      "item_count": 50
    },
    "watchlist": {
      "item_count": 250
    }
  },
  "sharing_text": {
    "rated": "[item] [stars]",
    "watched": "I just watched [item]",
    "watching": "I'm watching [item]"
  },
  "user": {
    "about": "Co-founder of trakt.",
    "age": 32,
    "gender": "male",
    "ids": {
      "slug": "justin",
      "uuid": "b6589fc6ab0dc82cf12099d1c2d40ab994e8410c"
    },
    "images": {
      "avatar": {
        "full": "https://secure.gravatar.com/avatar/30c2f0dfbc39e48656f40498aa871e33?r=pg&s=256"
      }
    },
    "joined_at": "2010-09-25T17:49:25.000Z",
    "location": "San Diego, CA",
    "name": "Justin Nemeth",
    "private": false,
    "username": "justin",
    "vip": true,
    "vip_ep": false,
    "vip_og": true,
    "vip_years": 5
  }
}
```

<h3 id="retrieve-settings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get user profile

<a id="opIdGet user profile"></a>

> Code samples

```bash
curl https://example.com/users/sean \
  -H 'Accept: application/json'
```

`GET /users/{id}`

#### &#128275; OAuth Optional &#10024; Extended Info

Get a user's profile information. If the user is private, info will only be returned if you send OAuth and are either that user or an approved follower. Adding `?extended=vip` will return some additional VIP related fields so you can display the user's Trakt VIP status and year count.

<h3 id="get-user-profile-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "ids": {
    "slug": "sean"
  },
  "name": "Sean Rudford",
  "private": false,
  "username": "sean",
  "vip": true,
  "vip_cover_image": "https://walter.trakt.tv/images/movies/000/000/343/fanarts/full/5aab754f58.jpg",
  "vip_ep": true,
  "vip_og": true,
  "vip_years": 5
}
```

<h3 id="get-user-profile-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/sean?extended=vip<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get collection

> Code samples

```bash
curl https://example.com/users/sean/collection/movies \
  -H 'Accept: application/json'
```

`GET /users/{id}/collection/{type}`

#### &#128275; OAuth Optional &#10024; Extended Info

Get all collected items in a user's collection. A collected item indicates availability to watch digitally or on physical media.

Each `movie` object contains `collected_at` and `updated_at` timestamps. Since users can set custom dates when they collected movies, it is possible for `collected_at` to be in the past. We also include `updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movie if you see a newer timestamp.

Each `show` object contains `last_collected_at` and `last_updated_at` timestamps. Since users can set custom dates when they collected episodes, it is possible for `last_collected_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the show if you see a newer timestamp.

If you add `?extended=metadata` to the URL, it will return the additional `media_type`, `resolution`, `hdr`, `audio`, `audio_channels` and '3d' metadata. It will use `null` if the metadata isn't set for an item.

<h3 id="get-collection-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|

> Example responses

> 200 Response

```json
[
  {
    "last_collected_at": "2014-09-01T09:10:11.000Z",
    "last_updated_at": "2014-09-01T09:10:11.000Z",
    "seasons": [
      {
        "episodes": [
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 1
          },
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 2
          }
        ],
        "number": 1
      },
      {
        "episodes": [
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10_plus",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 1
          },
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10_plus",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 2
          }
        ],
        "number": 2
      }
    ],
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    }
  },
  {
    "last_collected_at": "2014-09-01T09:10:11.000Z",
    "last_updated_at": "2014-09-01T09:10:11.000Z",
    "seasons": [
      {
        "episodes": [
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 1
          },
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 2
          }
        ],
        "number": 1
      },
      {
        "episodes": [
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 1
          },
          {
            "collected_at": "2014-09-01T09:10:11.000Z",
            "metadata": {
              "3d": false,
              "audio": "aac",
              "audio_channels": "5.1",
              "hdr": "hdr10",
              "media_type": "digital",
              "resolution": "hd_720p"
            },
            "number": 2
          }
        ],
        "number": 2
      }
    ],
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    }
  }
]
```

<h3 id="get-collection-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/sean/collection/shows?extended=metadata<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get comments

<a id="opIdGet comments"></a>

> Code samples

```bash
curl https://example.com/users/sean/comments/all/all \
  -H 'Accept: application/json'
```

`GET /users/{id}/comments/{comment_type}/{type}`

#### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info

Returns the most recently written comments for the user. You can optionally filter by the `comment_type` and media `type` to limit what gets returned.

By default, only top level comments are returned. Set `?include_replies=true` to return replies in addition to top level comments. Set `?include_replies=only` to return only replies and no top level comments.

<h3 id="get-comments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|comment_type|path|string|true|none|
|type|path|string|true|none|
|include_replies|query|string|false|include comment replies|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|comment_type|all|
|comment_type|reviews|
|comment_type|shouts|
|type|all|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|
|type|lists|
|include_replies|true|
|include_replies|false|
|include_replies|only|

> Example responses

> 200 Response

```json
[
  {
    "comment": {
      "comment": "Great kickoff to a new Batman trilogy!",
      "created_at": "2015-04-25T00:14:57.000Z",
      "id": 267,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-25T00:14:57.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 10
      }
    },
    "movie": {
      "ids": {
        "imdb": "tt0372784",
        "slug": "batman-begins-2005",
        "tmdb": 272,
        "trakt": 1
      },
      "title": "Batman Begins",
      "year": 2005
    },
    "type": "movie"
  },
  {
    "comment": {
      "comment": "Skyler, I AM THE DANGER.",
      "created_at": "2015-02-18T06:02:30.000Z",
      "id": 199,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-02-18T06:02:30.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 10
      }
    },
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "show"
  },
  {
    "comment": {
      "comment": "Kicking off season 1 for a new Batman show.",
      "created_at": "2015-04-21T06:53:25.000Z",
      "id": 220,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-21T06:53:25.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 8
      }
    },
    "season": {
      "ids": {
        "tmdb": 60394,
        "trakt": 3958,
        "tvdb": 274431
      },
      "number": 1
    },
    "show": {
      "ids": {
        "imdb": "tt3749900",
        "slug": "gotham",
        "tmdb": 60708,
        "trakt": 869,
        "tvdb": 274431
      },
      "title": "Gotham",
      "year": 2014
    },
    "type": "season"
  },
  {
    "comment": {
      "comment": "Is this the OC?",
      "created_at": "2015-04-21T15:42:31.000Z",
      "id": 229,
      "likes": 0,
      "parent_id": 0,
      "replies": 1,
      "review": false,
      "spoiler": false,
      "updated_at": "2015-04-21T15:42:31.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": 7
      }
    },
    "episode": {
      "ids": {
        "imdb": "tt3216414",
        "tmdb": 975968,
        "trakt": 63958,
        "tvdb": 4768720
      },
      "number": 1,
      "season": 1,
      "title": "Jim Gordon"
    },
    "show": {
      "ids": {
        "imdb": "tt3749900",
        "slug": "gotham",
        "tmdb": 60708,
        "trakt": 869,
        "tvdb": 274431
      },
      "title": "Gotham",
      "year": 2014
    },
    "type": "episode"
  },
  {
    "comment": {
      "comment": "May the 4th be with you!",
      "created_at": "2014-12-08T17:34:51.000Z",
      "id": 268,
      "likes": 0,
      "parent_id": 0,
      "replies": 0,
      "review": false,
      "spoiler": false,
      "updated_at": "2014-12-08T17:34:51.000Z",
      "user": {
        "ids": {
          "slug": "justin"
        },
        "name": "Justin N.",
        "private": false,
        "username": "justin",
        "vip": true,
        "vip_ep": false
      },
      "user_stats": {
        "completed_count": 1,
        "play_count": 1,
        "rating": null
      }
    },
    "list": {
      "allow_comments": true,
      "comment_count": 0,
      "description": "The complete Star Wars saga!",
      "display_numbers": false,
      "ids": {
        "slug": "star-wars",
        "trakt": 51
      },
      "item_count": 8,
      "likes": 0,
      "name": "Star Wars",
      "privacy": "public",
      "updated_at": "2015-04-22T22:01:39.000Z"
    },
    "type": "list"
  }
]
```

<h3 id="get-comments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/sean/comments<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Follow this user

<a id="opIdFollow this user"></a>

> Code samples

```bash
curl https://example.com/users/sean/follow \
  -X POST \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{id}/follow`

#### &#128274; OAuth Required

If the user has a private profile, the follow request will require approval (`approved_at` will be null). If a user is public, they will be followed immediately (`approved_at` will have a date).

**Note:** If this user is already being followed, a `409` HTTP status code will returned.

<h3 id="follow-this-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 201 Response

```json
{
  "approved_at": "2014-11-15T09:41:34.704Z",
  "user": {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
}
```

<h3 id="follow-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Unfollow this user

<a id="opIdUnfollow this user"></a>

> Code samples

```bash
curl https://example.com/users/string/follow \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{id}/follow`

#### &#128274; OAuth Required

Unfollow someone you already follow.

<h3 id="unfollow-this-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|

<h3 id="unfollow-this-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get followers

<a id="opIdGet followers"></a>

> Code samples

```bash
curl https://example.com/users/sean/followers \
  -H 'Accept: application/json'
```

`GET /users/{id}/followers`

#### &#128275; OAuth Optional &#10024; Extended Info

Returns all followers including when the relationship began.

<h3 id="get-followers-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "followed_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  },
  {
    "followed_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-followers-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get following

<a id="opIdGet following"></a>

> Code samples

```bash
curl https://example.com/users/sean/following \
  -H 'Accept: application/json'
```

`GET /users/{id}/following`

#### &#128275; OAuth Optional &#10024; Extended Info

Returns all user's they follow including when the relationship began.

<h3 id="get-following-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "followed_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  },
  {
    "followed_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-following-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get friends

<a id="opIdGet friends"></a>

> Code samples

```bash
curl https://example.com/users/sean/friends \
  -H 'Accept: application/json'
```

`GET /users/{id}/friends`

#### &#128275; OAuth Optional &#10024; Extended Info

Returns all friends for a user including when the relationship began. Friendship is a 2 way relationship where each user follows the other.

<h3 id="get-friends-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "friends_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  },
  {
    "friends_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-friends-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get watched history

> Code samples

```bash
curl https://example.com/users/sean/history/movies/123 \
  -H 'Accept: application/json'
```

`GET /users/{id}/history/{type}/{item_id}`

#### &#128275; OAuth Optional &#128196; Pagination &#10024; Extended Info

Returns movies and episodes that a user has watched, sorted by most recent. You can optionally limit the `type` to `movies` or `episodes`. The `id` _(64-bit integer)_ in each history item uniquely identifies the event and can be used to remove individual events by using the [**/sync/history/remove**](#reference/sync/remove-from-history/get-watched-history) method. The `action` will be set to `scrobble`, `checkin`, or `watch`.

Specify a `type` and trakt `item_id` to limit the history for just that item. If the `item_id` is valid, but there is no history, an empty array will be returned.

| Example URL | Returns watches for... |
|---|---|
| `/history/movies/12601` | TRON: Legacy |
| `/history/shows/1388` | All episodes of Breaking Bad |
| `/history/seasons/3950` | All episodes of Breaking Bad: Season 1 |
| `/history/episodes/73482` | Only episode 1 for Breaking Bad: Season 1 |

<h3 id="get-watched-history-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|type|path|string|true|none|
|item_id|path|integer|true|Trakt ID for a specific item.|
|start_at|query|string|false|Starting date.|
|end_at|query|string|false|Ending date.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|

> Example responses

> 200 Response

```json
[
  {
    "action": "scrobble",
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 397629,
        "trakt": 251,
        "tvdb": 797571
      },
      "number": 1,
      "season": 2,
      "title": "Pawnee Zoo"
    },
    "id": 1982346,
    "show": {
      "ids": {
        "imdb": "tt1266020",
        "slug": "parks-and-recreation",
        "tmdb": 8592,
        "trakt": 4,
        "tvdb": 84912
      },
      "title": "Parks and Recreation",
      "year": 2009
    },
    "type": "episode",
    "watched_at": "2014-03-31T09:28:53.000Z"
  },
  {
    "action": "checkin",
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 397627,
        "trakt": 252,
        "tvdb": 1088031
      },
      "number": 2,
      "season": 2,
      "title": "The Stakeout"
    },
    "id": 1982347,
    "show": {
      "ids": {
        "imdb": "tt1266020",
        "slug": "parks-and-recreation",
        "tmdb": 8592,
        "trakt": 4,
        "tvdb": 84912
      },
      "title": "Parks and Recreation",
      "year": 2009
    },
    "type": "episode",
    "watched_at": "2014-03-31T09:28:53.000Z"
  },
  {
    "action": "watch",
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 397642,
        "trakt": 253,
        "tvdb": 1088041
      },
      "number": 3,
      "season": 2,
      "title": "Beauty Pageant"
    },
    "id": 1982348,
    "show": {
      "ids": {
        "imdb": "tt1266020",
        "slug": "parks-and-recreation",
        "tmdb": 8592,
        "trakt": 4,
        "tvdb": 84912
      },
      "title": "Parks and Recreation",
      "year": 2009
    },
    "type": "episode",
    "watched_at": "2014-03-31T09:28:53.000Z"
  }
]
```

<h3 id="get-watched-history-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/sean/history/episodes<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get likes

<a id="opIdGet likes"></a>

> Code samples

```bash
curl https://example.com/users/sean/likes/comments \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{id}/likes/{type}`

#### &#128274; OAuth Optional &#128196; Pagination

Get items a user likes. This will return an array of standard media objects. You can optionally limit the `type` of results to return.

#### Comment Media Objects

If you add `?extended=comments` to the URL, it will return media objects for each comment like.

**Note:** This returns a lot of data, so please only use this extended parameter if you actually need it!

<h3 id="get-likes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|comments|
|type|lists|

> Example responses

> 200 Response

```json
[
  {
    "liked_at": "2015-03-31T23:18:42.000Z",
    "list": {
      "allow_comments": false,
      "comment_count": 0,
      "description": "Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.",
      "display_numbers": true,
      "ids": {
        "slug": "star-wars-in-machete-order",
        "trakt": 55
      },
      "item_count": 5,
      "likes": 0,
      "name": "Star Wars in NEW machete order",
      "privacy": "private",
      "updated_at": "2014-10-11T17:00:54.000Z",
      "user": {
        "ids": {
          "slug": "sean"
        },
        "name": "Sean Rudford",
        "private": false,
        "username": "sean",
        "vip": true,
        "vip_ep": false
      }
    },
    "type": "list"
  }
]
```

<h3 id="get-likes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/sean/likes/lists<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get a user's personal lists

<a id="opIdGet a user's personal lists"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists \
  -H 'Accept: application/json'
```

`GET /users/{id}/lists`

#### &#128275; OAuth Optional &#128513; Emojis

Returns all personal lists for a user. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items a specific list contains.

<h3 id="get-a-users-personal-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "allow_comments": true,
    "comment_count": 0,
    "created_at": "2014-10-11T17:00:54.000Z",
    "description": "Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.",
    "display_numbers": true,
    "ids": {
      "slug": "star-wars-in-machete-order",
      "trakt": 55
    },
    "item_count": 5,
    "likes": 0,
    "name": "Star Wars in machete order",
    "privacy": "public",
    "sort_by": "rank",
    "sort_how": "asc",
    "type": "personal",
    "updated_at": "2014-10-11T17:00:54.000Z"
  },
  {
    "allow_comments": true,
    "comment_count": 0,
    "created_at": "2014-10-11T17:00:54.000Z",
    "description": "These suck, but in a good way!",
    "display_numbers": false,
    "ids": {
      "slug": "vampires-ftw",
      "trakt": 52
    },
    "item_count": 5,
    "likes": 0,
    "name": "Vampires FTW",
    "privacy": "public",
    "sort_by": "rank",
    "sort_how": "asc",
    "type": "personal",
    "updated_at": "2014-10-11T17:00:54.000Z"
  }
]
```

<h3 id="get-a-users-personal-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Create personal list

<a id="opIdCreate personal list"></a>

> Code samples

```bash
curl https://example.com/users/string/lists \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "allow_comments": true,
    "description": "Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.",
    "display_numbers": true,
    "name": "Star Wars in machete order",
    "privacy": "public",
    "sort_by": "rank",
    "sort_how": "asc"
  }'
```

`POST /users/{id}/lists`

#### &#128274; OAuth Required 🔥 VIP Enhanced

Create a new personal list. The `name` is the only required field, but the other info is recommended to ask for.

#### Limits

If the user's list limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.

#### JSON POST Data

| Key | Type | Default | Value |
|---|---|---|---|
| `name` <span style="color:red;">*</a> | string |  | Name of the list. |
| `description` | string |  | Description for this list. |
| `privacy` | string | `private` | `private`, `friends`, `public` |
| `display_numbers` | boolean | `false` | Should each item be numbered? |
| `allow_comments` | boolean | `true` | Are comments allowed? |
| `sort_by` | string | `rank` | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` |
| `sort_how` | string | `asc` | `asc`, `desc` |

> Body parameter

```json
{
  "allow_comments": true,
  "description": "Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.",
  "display_numbers": true,
  "name": "Star Wars in machete order",
  "privacy": "public",
  "sort_by": "rank",
  "sort_how": "asc"
}
```

<h3 id="create-personal-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|
|body|body|object|false|none|
|» allow_comments|body|boolean|false|none|
|» description|body|string|false|none|
|» display_numbers|body|boolean|false|none|
|» name|body|string|false|none|
|» privacy|body|string|false|none|
|» sort_by|body|string|false|none|
|» sort_how|body|string|false|none|

> Example responses

> 201 Response

```json
{
  "allow_comments": true,
  "comment_count": 0,
  "created_at": "2014-10-11T17:00:54.000Z",
  "description": "Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.",
  "display_numbers": true,
  "ids": {
    "slug": "star-wars-in-machete-order",
    "trakt": 55
  },
  "item_count": 0,
  "likes": 0,
  "name": "Star Wars in machete order",
  "privacy": "public",
  "sort_by": "rank",
  "sort_how": "asc",
  "type": "personal",
  "updated_at": "2014-10-11T17:00:54.000Z"
}
```

<h3 id="create-personal-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|420|420||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|420|X-Account-Limit|string||none|
|420|X-Upgrade-URL|string||none|
|420|X-VIP-User|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get all lists a user can collaborate on

<a id="opIdGet all lists a user can collaborate on"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists/collaborations \
  -H 'Accept: application/json'
```

`GET /users/{id}/lists/collaborations`

#### &#128275; OAuth Optional

Returns all lists a user can collaborate on. This gives full access to add, remove, and re-order list items. It essentially works just like a list owned by the user, just make sure to use the correct list owner `user` when building the API URLs.

<h3 id="get-all-lists-a-user-can-collaborate-on-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "allow_comments": true,
    "comment_count": 0,
    "created_at": "2022-02-16T21:48:18.000Z",
    "description": "Hey everyone, add your favorite movies we've all enjoyed together over the years!",
    "display_numbers": false,
    "ids": {
      "slug": "our-favorite-movies",
      "trakt": 2612438
    },
    "item_count": 6,
    "likes": 1,
    "name": "Our Favorite Movies",
    "privacy": "private",
    "sort_by": "rank",
    "sort_how": "asc",
    "type": "personal",
    "updated_at": "2022-06-10T21:55:05.000Z",
    "user": {
      "ids": {
        "slug": "sean",
        "trakt": 2
      },
      "name": "Sean",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-all-lists-a-user-can-collaborate-on-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Reorder a user's lists

<a id="opIdReorder a user's lists"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists/reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rank": [
      823,
      224,
      88768,
      356456,
      245,
      2,
      890
    ]
  }'
```

`POST /users/{id}/lists/reorder`

#### &#128274; OAuth Required

Reorder all lists by sending the updated `rank` of list ids. Use the [**/users/:id/lists**](#reference/users/lists) method to get all list ids.

> Body parameter

```json
{
  "rank": [
    823,
    224,
    88768,
    356456,
    245,
    2,
    890
  ]
}
```

<h3 id="reorder-a-users-lists-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» rank|body|[number]|false|none|

> Example responses

> 200 Response

```json
{
  "skipped_ids": [
    2
  ],
  "updated": 6
}
```

<h3 id="reorder-a-users-lists-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get personal list

<a id="opIdGet personal list"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists/star-wars-in-machete-order \
  -H 'Accept: application/json'
```

`GET /users/{id}/lists/{list_id}`

#### &#128275; OAuth Optional &#128513; Emojis

Returns a single personal list. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get the actual items this list contains.

<h3 id="get-personal-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|list_id|path|string|true|Trakt ID or Trakt slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "allow_comments": true,
  "comment_count": 0,
  "created_at": "2014-10-11T17:00:54.000Z",
  "description": "Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.",
  "display_numbers": true,
  "ids": {
    "slug": "star-wars-in-machete-order",
    "trakt": 55
  },
  "item_count": 5,
  "likes": 0,
  "name": "Star Wars in machete order",
  "privacy": "public",
  "sort_by": "rank",
  "sort_how": "asc",
  "type": "personal",
  "updated_at": "2014-10-11T17:00:54.000Z",
  "user": {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
}
```

<h3 id="get-personal-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Sort-By|string||none|
|200|X-Sort-How|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Update personal list

<a id="opIdUpdate personal list"></a>

> Code samples

```bash
curl https://example.com/users/string/lists/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "display_numbers": false,
    "name": "Star Wars in NEW machete order",
    "privacy": "private",
    "sort_by": "rank",
    "sort_how": "asc"
  }'
```

`PUT /users/{id}/lists/{list_id}`

#### &#128274; OAuth Required

Update a personal list by sending 1 or more parameters. If you update the list name, the original slug will still be retained so existing references to this list won't break.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|---|
| `name` | string | Name of the list. |
| `description` | string | Description for this list. |
| `privacy` | string | `private`, `friends`, `public` |
| `display_numbers` | boolean | Should each item be numbered? |
| `allow_comments` | boolean | Are comments allowed? |
| `sort_by` | string | `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, `collected` |
| `sort_how` | string | `asc`, `desc` |

> Body parameter

```json
{
  "display_numbers": false,
  "name": "Star Wars in NEW machete order",
  "privacy": "private",
  "sort_by": "rank",
  "sort_how": "asc"
}
```

<h3 id="update-personal-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|
|list_id|path|string|true|Automatically added|
|body|body|object|false|none|
|» display_numbers|body|boolean|false|none|
|» name|body|string|false|none|
|» privacy|body|string|false|none|
|» sort_by|body|string|false|none|
|» sort_how|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "allow_comments": false,
  "comment_count": 0,
  "created_at": "2014-10-11T17:00:54.000Z",
  "description": "Next time you want to introduce someone to Star Wars for the first time, watch the films with them in this order: IV, V, II, III, VI.",
  "display_numbers": true,
  "ids": {
    "slug": "star-wars-in-machete-order",
    "trakt": 55
  },
  "item_count": 5,
  "likes": 0,
  "name": "Star Wars in NEW machete order",
  "privacy": "private",
  "sort_by": "rank",
  "sort_how": "asc",
  "type": "personal",
  "updated_at": "2014-10-11T17:00:54.000Z",
  "user": {
    "ids": {
      "slug": "sean"
    },
    "name": "Sean Rudford",
    "private": false,
    "username": "sean",
    "vip": true,
    "vip_ep": false
  }
}
```

<h3 id="update-personal-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Delete a user's personal list

<a id="opIdDelete a user's personal list"></a>

> Code samples

```bash
curl https://example.com/users/string/lists/string \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{id}/lists/{list_id}`

#### &#128274; OAuth Required

Remove a personal list and all items it contains.

<h3 id="delete-a-users-personal-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|
|list_id|path|string|true|Automatically added|

<h3 id="delete-a-users-personal-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get all list comments

> Code samples

```bash
curl https://example.com/users/sean/lists/star-wars-in-machete-order/comments/newest \
  -H 'Accept: application/json'
```

`GET /users/{id}/lists/{list_id}/comments/{sort}`

#### &#128275; OAuth Optional &#128196; Pagination &#128513; Emojis

Returns all top level comments for a list. By default, the `newest` comments are returned first. Other sorting options include `oldest`, most `likes`, and most `replies`.

<h3 id="get-all-list-comments-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|list_id|path|string|true|Trakt ID or Trakt slug|
|sort|path|string|true|how to sort|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|sort|newest|
|sort|oldest|
|sort|likes|
|sort|replies|

> Example responses

> 200 Response

```json
[
  {
    "comment": "Can't wait to watch everything on this epic list!",
    "created_at": "2011-03-25T22:35:17.000Z",
    "id": 8,
    "likes": 0,
    "parent_id": 0,
    "replies": 0,
    "review": false,
    "spoiler": false,
    "updated_at": "2011-03-25T22:35:17.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    },
    "user_stats": {
      "completed_count": 1,
      "play_count": 1,
      "rating": null
    }
  }
]
```

<h3 id="get-all-list-comments-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Add items to personal list

<a id="opIdAdd items to personal list"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists/star-wars-in-machete-order/items \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        }
      }
    ],
    "movies": [
      {
        "ids": {
          "trakt": 1
        },
        "notes": "Amazing movie!"
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "people": [
      {
        "ids": {
          "imdb": "nm0000313",
          "slug": "jeff-bridges",
          "tmdb": 1229,
          "trakt": 2
        },
        "name": "Jeff Bridges"
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "trakt": 1
        }
      },
      {
        "ids": {
          "trakt": 1
        },
        "notes": "Best season of this show, don'\''t bother watching the rest.",
        "seasons": [
          {
            "number": 1
          }
        ]
      },
      {
        "ids": {
          "trakt": 1
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ]
      }
    ]
  }'
```

`POST /users/{id}/lists/{list_id}/items`

#### &#128274; OAuth Required &#128513; Emojis 🔥 VIP Enhanced

Add one or more items to a personal list. Items can be movies, shows, seasons, episodes, or people.

#### Notes

Each list item can optionally accept a `notes` *(255 maximum characters)* field with custom text. The user must be a [**Trakt VIP**](https://trakt.tv/vip) to send `notes`.

#### Limits

If the user's list item limit is exceeded, a `420` HTTP error code is returned. Use the [**/users/settings**](/reference/users/settings) method to get all limits for a user account. In most cases, upgrading to [**Trakt VIP**](https://trakt.tv/vip) will increase the limits.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |
| `people` | array | Array of `person` objects. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      }
    }
  ],
  "movies": [
    {
      "ids": {
        "trakt": 1
      },
      "notes": "Amazing movie!"
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "people": [
    {
      "ids": {
        "imdb": "nm0000313",
        "slug": "jeff-bridges",
        "tmdb": 1229,
        "trakt": 2
      },
      "name": "Jeff Bridges"
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "trakt": 1
      }
    },
    {
      "ids": {
        "trakt": 1
      },
      "notes": "Best season of this show, don't bother watching the rest.",
      "seasons": [
        {
          "number": 1
        }
      ]
    },
    {
      "ids": {
        "trakt": 1
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ]
    }
  ]
}
```

<h3 id="add-items-to-personal-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|list_id|path|string|true|Trakt ID or Trakt slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » trakt|body|number|false|none|
|» » notes|body|string|false|none|
|» people|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » name|body|string|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » trakt|body|number|false|none|
|» » notes|body|string|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » number|body|number|true|none|

> Example responses

> 201 Response

```json
{
  "added": {
    "episodes": 2,
    "movies": 1,
    "people": 1,
    "seasons": 1,
    "shows": 1
  },
  "existing": {
    "episodes": 0,
    "movies": 0,
    "people": 0,
    "seasons": 0,
    "shows": 0
  },
  "list": {
    "item_count": 6,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "people": [],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="add-items-to-personal-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Created|None|
|420|420||None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|420|X-Account-Limit|string||none|
|420|X-Upgrade-URL|string||none|
|420|X-VIP-User|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove items from personal list

<a id="opIdRemove items from personal list"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists/star-wars-in-machete-order/items/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "episodes": [
      {
        "ids": {
          "imdb": "tt007404",
          "tmdb": 422183,
          "trakt": 1061,
          "tvdb": 1555111
        }
      }
    ],
    "movies": [
      {
        "ids": {
          "trakt": 1
        }
      },
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "people": [
      {
        "ids": {
          "imdb": "nm0000313",
          "slug": "jeff-bridges",
          "tmdb": 1229,
          "trakt": 2
        },
        "name": "Jeff Bridges"
      }
    ],
    "seasons": [
      {
        "ids": {
          "tmdb": 81266,
          "trakt": 140912,
          "tvdb": 703353
        }
      }
    ],
    "shows": [
      {
        "ids": {
          "trakt": 1
        }
      },
      {
        "ids": {
          "trakt": 1
        },
        "seasons": [
          {
            "number": 1
          }
        ]
      },
      {
        "ids": {
          "trakt": 1
        },
        "seasons": [
          {
            "episodes": [
              {
                "number": 1
              },
              {
                "number": 2
              }
            ],
            "number": 1
          }
        ]
      }
    ]
  }'
```

`POST /users/{id}/lists/{list_id}/items/remove`

#### &#128274; OAuth Required

Remove one or more items from a personal list.

#### JSON POST Data

| Key | Type | Value |
|---|---|---|
| `movies` | array | Array of `movie` objects. (see examples &#8594;) |
| `shows` | array | Array of `show` objects. |
| `seasons` | array | Array of `season` objects. |
| `episodes` | array | Array of `episode` objects. |
| `people` | array | Array of `person` objects. |

> Body parameter

```json
{
  "episodes": [
    {
      "ids": {
        "imdb": "tt007404",
        "tmdb": 422183,
        "trakt": 1061,
        "tvdb": 1555111
      }
    }
  ],
  "movies": [
    {
      "ids": {
        "trakt": 1
      }
    },
    {
      "ids": {
        "imdb": "tt0000111"
      }
    }
  ],
  "people": [
    {
      "ids": {
        "imdb": "nm0000313",
        "slug": "jeff-bridges",
        "tmdb": 1229,
        "trakt": 2
      },
      "name": "Jeff Bridges"
    }
  ],
  "seasons": [
    {
      "ids": {
        "tmdb": 81266,
        "trakt": 140912,
        "tvdb": 703353
      }
    }
  ],
  "shows": [
    {
      "ids": {
        "trakt": 1
      }
    },
    {
      "ids": {
        "trakt": 1
      },
      "seasons": [
        {
          "number": 1
        }
      ]
    },
    {
      "ids": {
        "trakt": 1
      },
      "seasons": [
        {
          "episodes": [
            {
              "number": 1
            },
            {
              "number": 2
            }
          ],
          "number": 1
        }
      ]
    }
  ]
}
```

<h3 id="remove-items-from-personal-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|list_id|path|string|true|Trakt ID or Trakt slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» episodes|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» movies|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » imdb|body|string|false|none|
|» » » trakt|body|number|false|none|
|» people|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » imdb|body|string|false|none|
|» » » slug|body|string|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » name|body|string|false|none|
|» seasons|body|[object]|false|none|
|» » ids|body|object|false|none|
|» » » tmdb|body|number|false|none|
|» » » trakt|body|number|false|none|
|» » » tvdb|body|number|false|none|
|» shows|body|[object]|false|none|
|» » ids|body|object|true|none|
|» » » trakt|body|number|false|none|
|» » seasons|body|[object]|true|none|
|» » » episodes|body|[object]|false|none|
|» » » » number|body|number|true|none|
|» » » number|body|number|true|none|

> Example responses

> 200 Response

```json
{
  "deleted": {
    "episodes": 2,
    "movies": 1,
    "people": 1,
    "seasons": 1,
    "shows": 1
  },
  "list": {
    "item_count": 0,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "not_found": {
    "episodes": [],
    "movies": [
      {
        "ids": {
          "imdb": "tt0000111"
        }
      }
    ],
    "people": [],
    "seasons": [],
    "shows": []
  }
}
```

<h3 id="remove-items-from-personal-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Reorder items on a list

<a id="opIdReorder items on a list"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists/star-wars-in-machete-order/items/reorder \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -d '{
    "rank": [
      923,
      324,
      98768,
      456456,
      345,
      12,
      990
    ]
  }'
```

`POST /users/{id}/lists/{list_id}/items/reorder`

#### &#128274; OAuth Required

Reorder all items on a list by sending the updated `rank` of list item ids. Use the [**/users/:id/lists/:list_id/items**](#reference/users/list-items) method to get all list item ids.

> Body parameter

```json
{
  "rank": [
    923,
    324,
    98768,
    456456,
    345,
    12,
    990
  ]
}
```

<h3 id="reorder-items-on-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|list_id|path|string|true|Trakt ID or Trakt slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|body|body|object|false|none|
|» rank|body|[number]|false|none|

> Example responses

> 200 Response

```json
{
  "list": {
    "item_count": 6,
    "updated_at": "2022-04-27T21:40:41.000Z"
  },
  "skipped_ids": [
    12
  ],
  "updated": 6
}
```

<h3 id="reorder-items-on-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get items on a personal list

<a id="opIdGet items on a personal list"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists/star-wars-in-machete-order/items/movies \
  -H 'Accept: application/json'
```

`GET /users/{id}/lists/{list_id}/items/{type}`

#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis

Get all items on a personal list. Items can be a `movie`, `show`, `season`, `episode`, or `person`. You can optionally specify the `type` parameter with a single value or comma delimited string for multiple item types.

#### Notes

Each list item contains a `notes` field with text entered by the user.

#### Sorting Headers

All list items are sorted by ascending `rank`. We also send `X-Sort-By` and `X-Sort-How` headers which can be used to custom sort the list _**in your app**_ based on the user's preference. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, `votes`, `my_rating`, `random`, `watched`, and `collected`. Values for `X-Sort-How` include `asc` and `desc`.

<h3 id="get-items-on-a-personal-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|list_id|path|string|true|Trakt ID or Trakt slug|
|type|path|string|true|Filter for a specific item type|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movie|
|type|show|
|type|season|
|type|episode|
|type|person|

> Example responses

> 200 Response

```json
[
  {
    "id": 101,
    "listed_at": "2014-06-16T06:07:12.000Z",
    "movie": {
      "ids": {
        "imdb": "tt0076759",
        "slug": "star-wars-episode-iv-a-new-hope-1977",
        "tmdb": 11,
        "trakt": 12
      },
      "title": "Star Wars: Episode IV - A New Hope",
      "year": 1977
    },
    "notes": "You are part of the rebel alliance and a spy!",
    "rank": 1,
    "type": "movie"
  },
  {
    "id": 102,
    "listed_at": "2014-06-16T06:07:12.000Z",
    "notes": null,
    "rank": 2,
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    },
    "type": "show"
  },
  {
    "id": 103,
    "listed_at": "2014-06-16T06:07:12.000Z",
    "notes": null,
    "rank": 3,
    "season": {
      "ids": {
        "tmdb": 3572,
        "tvdb": 30272
      },
      "number": 1
    },
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "season"
  },
  {
    "episode": {
      "ids": {
        "imdb": null,
        "tmdb": 62133,
        "trakt": 2,
        "tvdb": 3859791
      },
      "number": 2,
      "season": 0,
      "title": "Wedding Day"
    },
    "id": 104,
    "listed_at": "2014-06-17T06:52:03.000Z",
    "notes": null,
    "rank": 4,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  },
  {
    "id": 105,
    "listed_at": "2014-06-17T06:52:03.000Z",
    "notes": null,
    "person": {
      "ids": {
        "imdb": "nm1330560",
        "slug": "garrett-hedlund",
        "tmdb": 9828,
        "trakt": 1
      },
      "name": "Garrett Hedlund"
    },
    "rank": 5,
    "type": "person"
  }
]
```

<h3 id="get-items-on-a-personal-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Private-User|string||none|
|200|X-Sort-By|string||none|
|200|X-Sort-How|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Like a list

<a id="opIdLike a list"></a>

> Code samples

```bash
curl https://example.com/users/sean/lists/star-wars-in-machete-order/like \
  -X POST \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`POST /users/{id}/lists/{list_id}/like`

#### &#128274; OAuth Required

Votes help determine popular lists. Only one like is allowed per list per user.

<h3 id="like-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|list_id|path|string|true|Trakt ID or Trakt slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

<h3 id="like-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Remove like on a list

<a id="opIdRemove like on a list"></a>

> Code samples

```bash
curl https://example.com/users/string/lists/string/like \
  -X DELETE \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`DELETE /users/{id}/lists/{list_id}/like`

#### &#128274; OAuth Required

Remove a like on a list.

<h3 id="remove-like-on-a-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|
|id|path|string|true|Automatically added|
|list_id|path|string|true|Automatically added|

<h3 id="remove-like-on-a-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No Content|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get all users who liked a list

> Code samples

```bash
curl https://example.com/users/sean/lists/star-wars-in-machete-order/likes \
  -H 'Accept: application/json'
```

`GET /users/{id}/lists/{list_id}/likes`

#### &#128275; OAuth Optional &#128196; Pagination

Returns all users who liked a list.

<h3 id="get-all-users-who-liked-a-list-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|list_id|path|string|true|Trakt ID or Trakt slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
[
  {
    "liked_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "sean"
      },
      "name": "Sean Rudford",
      "private": false,
      "username": "sean",
      "vip": true,
      "vip_ep": false
    }
  },
  {
    "liked_at": "2014-09-01T09:10:11.000Z",
    "user": {
      "ids": {
        "slug": "justin"
      },
      "name": "Justin Nemeth",
      "private": false,
      "username": "justin",
      "vip": true,
      "vip_ep": false
    }
  }
]
```

<h3 id="get-all-users-who-liked-a-list-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Pagination-Item-Count|string||none|
|200|X-Pagination-Limit|string||none|
|200|X-Pagination-Page|string||none|
|200|X-Pagination-Page-Count|string||none|

<aside class="success">
This operation does not require authentication
</aside>

## Get ratings

> Code samples

```bash
curl https://example.com/users/sean/ratings/movies/9 \
  -H 'Accept: application/json'
```

`GET /users/{id}/ratings/{type}/{rating}`

#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info

Get a user's ratings filtered by `type`. You can optionally filter for a specific `rating` between 1 and 10. Send a comma separated string for `rating` if you need multiple ratings.

<h3 id="get-ratings-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|type|path|string|true|none|
|rating|path|integer|true|Filter for a specific rating.|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|
|type|all|
|rating|1|
|rating|2|
|rating|3|
|rating|4|
|rating|5|
|rating|6|
|rating|7|
|rating|8|
|rating|9|
|rating|10|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt1683084",
        "tmdb": 62118,
        "trakt": 49,
        "tvdb": 2639411
      },
      "number": 1,
      "season": 4,
      "title": "Box Cutter"
    },
    "rated_at": "2014-09-01T09:10:11.000Z",
    "rating": 10,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt1683095",
        "tmdb": 62127,
        "trakt": 56,
        "tvdb": 4127161
      },
      "number": 8,
      "season": 4,
      "title": "Hermanos"
    },
    "rated_at": "2014-09-01T09:10:11.000Z",
    "rating": 10,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  }
]
```

<h3 id="get-ratings-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/sean/ratings/episodes<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get personal recommendations

> Code samples

```bash
curl https://example.com/users/sean/recommendations/movies/rank \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

`GET /users/{id}/recommendations/{type}/{sort}`

#### &#128274; OAuth Required &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis

Returns the top 50 items a user personally recommendeds to others. These recommendations are used to enchance Trakt's social recommendation algorithm. Apps should encourage user's to build their personal recommendations so the algorithm keeps getting better.

#### Notes

Each recommendation contains a `notes` field explaining why the user recommended the item.

<h3 id="get-personal-recommendations-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|type|path|string|true|Filter for a specific item type|
|sort|path|string|true|How to sort (only if type is also sent)|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|
|sort|rank|
|sort|added|
|sort|released|
|sort|title|

> Example responses

> 200 Response

```json
[
  {
    "id": 101,
    "listed_at": "2014-09-01T09:10:11.000Z",
    "notes": "I AM THE DANGER!",
    "rank": 1,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "show"
  },
  {
    "id": 102,
    "listed_at": "2014-09-01T09:10:11.000Z",
    "notes": "Atmospheric for days.",
    "rank": 2,
    "show": {
      "ids": {
        "imdb": "tt1520211",
        "slug": "the-walking-dead",
        "tmdb": 1402,
        "trakt": 2,
        "tvdb": 153021
      },
      "title": "The Walking Dead",
      "year": 2010
    },
    "type": "show"
  }
]
```

<h3 id="get-personal-recommendations-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/justin/recommendations/shows<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Sort-By|string||none|
|200|X-Sort-How|string||none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
oauth2
</aside>

## Get stats

<a id="opIdGet stats"></a>

> Code samples

```bash
curl https://example.com/users/sean/stats \
  -H 'Accept: application/json'
```

`GET /users/{id}/stats`

#### &#128275; OAuth Optional

Returns stats about the movies, shows, and episodes a user has watched, collected, and rated.

<h3 id="get-stats-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "episodes": {
    "collected": 117,
    "comments": 14,
    "minutes": 17330,
    "plays": 552,
    "ratings": 64,
    "watched": 534
  },
  "movies": {
    "collected": 933,
    "comments": 28,
    "minutes": 15650,
    "plays": 155,
    "ratings": 256,
    "watched": 114
  },
  "network": {
    "followers": 4,
    "following": 11,
    "friends": 1
  },
  "ratings": {
    "distribution": {
      "1": 18,
      "2": 1,
      "3": 4,
      "4": 1,
      "5": 10,
      "6": 9,
      "7": 37,
      "8": 37,
      "9": 57,
      "10": 215
    },
    "total": 389
  },
  "seasons": {
    "comments": 1,
    "ratings": 6
  },
  "shows": {
    "collected": 7,
    "comments": 20,
    "ratings": 63,
    "watched": 16
  }
}
```

<h3 id="get-stats-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get watched

> Code samples

```bash
curl https://example.com/users/sean/watched/movies \
  -H 'Accept: application/json'
```

`GET /users/{id}/watched/{type}`

#### &#128275; OAuth Optional &#10024; Extended Info

Returns all movies or shows a user has watched sorted by most plays.

If `type` is set to _shows_ and you add `?extended=noseasons` to the URL, it won't return season or episode info.

Each `movie` and `show` object contains `last_watched_at` and `last_updated_at` timestamps. Since users can set custom dates when they watched movies and episodes, it is possible for `last_watched_at` to be in the past. We also include `last_updated_at` to help sync Trakt data with your app. Cache this timestamp locally and only re-process the movies and shows if you see a newer timestamp.

Each `show` object contains a `reset_at` timestamp. If not `null`, this is when the user started re-watching the show. Your app can adjust the progress by ignoring episodes with a `last_watched_at` prior to the `reset_at`.

<h3 id="get-watched-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|type|path|string|true|none|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|

> Example responses

> 200 Response

```json
[
  {
    "last_updated_at": "2014-10-11T17:00:54.000Z",
    "last_watched_at": "2014-10-11T17:00:54.000Z",
    "plays": 56,
    "reset_at": null,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    }
  },
  {
    "last_updated_at": "2014-10-12T17:00:54.000Z",
    "last_watched_at": "2014-10-12T17:00:54.000Z",
    "plays": 23,
    "reset_at": "2019-10-12T17:00:54.000Z",
    "show": {
      "ids": {
        "imdb": "tt1266020",
        "slug": "parks-and-recreation",
        "tmdb": 8592,
        "trakt": 4,
        "tvdb": 84912
      },
      "title": "Parks and Recreation",
      "year": 2009
    }
  }
]
```

<h3 id="get-watched-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/sean/watched/shows?extended=noseasons<br>```|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get watching

<a id="opIdGet watching"></a>

> Code samples

```bash
curl https://example.com/users/sean/watching \
  -H 'Accept: application/json'
```

`GET /users/{id}/watching`

#### &#128275; OAuth Optional &#10024; Extended Info

Returns a movie or episode if the user is currently watching something.  If they are not, it returns no data and a `204` HTTP status code.

<h3 id="get-watching-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

> Example responses

> 200 Response

```json
{
  "action": "checkin",
  "expires_at": "2014-10-23T08:36:02.000Z",
  "movie": {
    "ids": {
      "imdb": "tt1650062",
      "slug": "super-8-2011",
      "tmdb": 37686,
      "trakt": 2
    },
    "title": "Super 8",
    "year": 2011
  },
  "started_at": "2014-10-23T06:44:02.000Z",
  "type": "movie"
}
```

<h3 id="get-watching-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Currently watching a `movie`.|None|
|204|No Content|Not watching anything.|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get watchlist

> Code samples

```bash
curl https://example.com/users/sean/watchlist/movies/rank \
  -H 'Accept: application/json'
```

`GET /users/{id}/watchlist/{type}/{sort}`

#### &#128275; OAuth Optional &#128196; Pagination Optional &#10024; Extended Info &#128513; Emojis

Returns all items in a user's watchlist filtered by type.

#### Notes

Each watchlist item contains a `notes` field with text entered by the user.

#### Sorting Headers

By default, all list items are sorted by `rank` `asc`. We send `X-Applied-Sort-By` and `X-Applied-Sort-How` headers to indicate how the results are actually being sorted.

We also send `X-Sort-By` and `X-Sort-How` headers which indicate the user's sort preference. Use these to to custom sort the watchlist _**in your app**_ for more advanced sort abilities we can't do in the API. Values for `X-Sort-By` include `rank`, `added`, `title`, `released`, `runtime`, `popularity`, `percentage`, and `votes`. Values for `X-Sort-How` include `asc` and `desc`.

#### Auto Removal

When an item is watched, it will be automatically removed from the watchlist. For shows and seasons, watching 1 episode will remove the entire show or season.

_**The watchlist should not be used as a list of what the user is actively watching.**_

Use a combination of the [**/sync/watched**](/reference/sync/get-watched) and [**/shows/:id/progress**](/reference/shows/watched-progress) methods to get what the user is actively watching.

<h3 id="get-watchlist-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|User slug|
|type|path|string|true|Filter for a specific item type|
|sort|path|string|true|How to sort (only if type is also sent)|
|trakt-api-version|header|string|false|e.g. 2|
|trakt-api-key|header|string|false|e.g. [client_id]|

#### Enumerated Values

|Parameter|Value|
|---|---|
|type|movies|
|type|shows|
|type|seasons|
|type|episodes|
|sort|rank|
|sort|added|
|sort|released|
|sort|title|

> Example responses

> 200 Response

```json
[
  {
    "episode": {
      "ids": {
        "imdb": "tt1683084",
        "tmdb": 62118,
        "trakt": 49,
        "tvdb": 2639411
      },
      "number": 1,
      "season": 4,
      "title": "Box Cutter"
    },
    "id": 101,
    "listed_at": "2014-09-01T09:10:11.000Z",
    "notes": null,
    "rank": 1,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  },
  {
    "episode": {
      "ids": {
        "imdb": "tt1683095",
        "tmdb": 62127,
        "trakt": 56,
        "tvdb": 4127161
      },
      "number": 8,
      "season": 4,
      "title": "Hermanos"
    },
    "id": 102,
    "listed_at": "2014-09-01T09:10:11.000Z",
    "notes": null,
    "rank": 2,
    "show": {
      "ids": {
        "imdb": "tt0903747",
        "slug": "breaking-bad",
        "tmdb": 1396,
        "trakt": 1,
        "tvdb": 81189
      },
      "title": "Breaking Bad",
      "year": 2008
    },
    "type": "episode"
  }
]
```

<h3 id="get-watchlist-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|```<br>/users/sean/watchlist/episodes<br>```|None|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-Private-User|string||none|
|200|X-Sort-By|string||none|
|200|X-Sort-How|string||none|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Add_Hidden_Items">Add_Hidden_Items</h2>
<!-- backwards compatibility -->
<a id="schemaadd_hidden_items"></a>
<a id="schema_Add_Hidden_Items"></a>
<a id="tocSadd_hidden_items"></a>
<a id="tocsadd_hidden_items"></a>

```json
null
```

<h2 id="tocS_Add_List_Items">Add_List_Items</h2>
<!-- backwards compatibility -->
<a id="schemaadd_list_items"></a>
<a id="schema_Add_List_Items"></a>
<a id="tocSadd_list_items"></a>
<a id="tocsadd_list_items"></a>

```json
null
```

<h2 id="tocS_Add_Ratings">Add_Ratings</h2>
<!-- backwards compatibility -->
<a id="schemaadd_ratings"></a>
<a id="schema_Add_Ratings"></a>
<a id="tocSadd_ratings"></a>
<a id="tocsadd_ratings"></a>

```json
null
```

<h2 id="tocS_Add_to_Collection">Add_to_Collection</h2>
<!-- backwards compatibility -->
<a id="schemaadd_to_collection"></a>
<a id="schema_Add_to_Collection"></a>
<a id="tocSadd_to_collection"></a>
<a id="tocsadd_to_collection"></a>

```json
null
```

<h2 id="tocS_Add_to_History">Add_to_History</h2>
<!-- backwards compatibility -->
<a id="schemaadd_to_history"></a>
<a id="schema_Add_to_History"></a>
<a id="tocSadd_to_history"></a>
<a id="tocsadd_to_history"></a>

```json
null
```

<h2 id="tocS_Add_to_Personal_Recommendations_-_BETA">Add_to_Personal_Recommendations_-_BETA</h2>
<!-- backwards compatibility -->
<a id="schemaadd_to_personal_recommendations_-_beta"></a>
<a id="schema_Add_to_Personal_Recommendations_-_BETA"></a>
<a id="tocSadd_to_personal_recommendations_-_beta"></a>
<a id="tocsadd_to_personal_recommendations_-_beta"></a>

```json
null
```

<h2 id="tocS_Add_to_Watchlist">Add_to_Watchlist</h2>
<!-- backwards compatibility -->
<a id="schemaadd_to_watchlist"></a>
<a id="schema_Add_to_Watchlist"></a>
<a id="tocSadd_to_watchlist"></a>
<a id="tocsadd_to_watchlist"></a>

```json
null
```

<h2 id="tocS_Aliases">Aliases</h2>
<!-- backwards compatibility -->
<a id="schemaaliases"></a>
<a id="schema_Aliases"></a>
<a id="tocSaliases"></a>
<a id="tocsaliases"></a>

```json
null
```

<h2 id="tocS_All_DVD">All_DVD</h2>
<!-- backwards compatibility -->
<a id="schemaall_dvd"></a>
<a id="schema_All_DVD"></a>
<a id="tocSall_dvd"></a>
<a id="tocsall_dvd"></a>

```json
null
```

<h2 id="tocS_All_Movies">All_Movies</h2>
<!-- backwards compatibility -->
<a id="schemaall_movies"></a>
<a id="schema_All_Movies"></a>
<a id="tocSall_movies"></a>
<a id="tocsall_movies"></a>

```json
null
```

<h2 id="tocS_All_New_Shows">All_New_Shows</h2>
<!-- backwards compatibility -->
<a id="schemaall_new_shows"></a>
<a id="schema_All_New_Shows"></a>
<a id="tocSall_new_shows"></a>
<a id="tocsall_new_shows"></a>

```json
null
```

<h2 id="tocS_All_Season_Premieres">All_Season_Premieres</h2>
<!-- backwards compatibility -->
<a id="schemaall_season_premieres"></a>
<a id="schema_All_Season_Premieres"></a>
<a id="tocSall_season_premieres"></a>
<a id="tocsall_season_premieres"></a>

```json
null
```

<h2 id="tocS_All_Shows">All_Shows</h2>
<!-- backwards compatibility -->
<a id="schemaall_shows"></a>
<a id="schema_All_Shows"></a>
<a id="tocSall_shows"></a>
<a id="tocsall_shows"></a>

```json
null
```

<h2 id="tocS_Anticipated">Anticipated</h2>
<!-- backwards compatibility -->
<a id="schemaanticipated"></a>
<a id="schema_Anticipated"></a>
<a id="tocSanticipated"></a>
<a id="tocsanticipated"></a>

```json
null
```

<h2 id="tocS_Approve_or_Deny_Follower_Requests">Approve_or_Deny_Follower_Requests</h2>
<!-- backwards compatibility -->
<a id="schemaapprove_or_deny_follower_requests"></a>
<a id="schema_Approve_or_Deny_Follower_Requests"></a>
<a id="tocSapprove_or_deny_follower_requests"></a>
<a id="tocsapprove_or_deny_follower_requests"></a>

```json
null
```

<h2 id="tocS_Authorize">Authorize</h2>
<!-- backwards compatibility -->
<a id="schemaauthorize"></a>
<a id="schema_Authorize"></a>
<a id="tocSauthorize"></a>
<a id="tocsauthorize"></a>

```json
null
```

<h2 id="tocS_Box_Office">Box_Office</h2>
<!-- backwards compatibility -->
<a id="schemabox_office"></a>
<a id="schema_Box_Office"></a>
<a id="tocSbox_office"></a>
<a id="tocsbox_office"></a>

```json
null
```

<h2 id="tocS_Certifications">Certifications</h2>
<!-- backwards compatibility -->
<a id="schemacertifications"></a>
<a id="schema_Certifications"></a>
<a id="tocScertifications"></a>
<a id="tocscertifications"></a>

```json
null
```

<h2 id="tocS_Checkin">Checkin</h2>
<!-- backwards compatibility -->
<a id="schemacheckin"></a>
<a id="schema_Checkin"></a>
<a id="tocScheckin"></a>
<a id="tocscheckin"></a>

```json
null
```

<h2 id="tocS_Collaborations">Collaborations</h2>
<!-- backwards compatibility -->
<a id="schemacollaborations"></a>
<a id="schema_Collaborations"></a>
<a id="tocScollaborations"></a>
<a id="tocscollaborations"></a>

```json
null
```

<h2 id="tocS_Collected">Collected</h2>
<!-- backwards compatibility -->
<a id="schemacollected"></a>
<a id="schema_Collected"></a>
<a id="tocScollected"></a>
<a id="tocscollected"></a>

```json
null
```

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
null
```

<h2 id="tocS_Collection_Progress">Collection_Progress</h2>
<!-- backwards compatibility -->
<a id="schemacollection_progress"></a>
<a id="schema_Collection_Progress"></a>
<a id="tocScollection_progress"></a>
<a id="tocscollection_progress"></a>

```json
null
```

<h2 id="tocS_Comment">Comment</h2>
<!-- backwards compatibility -->
<a id="schemacomment"></a>
<a id="schema_Comment"></a>
<a id="tocScomment"></a>
<a id="tocscomment"></a>

```json
null
```

<h2 id="tocS_Comments">Comments</h2>
<!-- backwards compatibility -->
<a id="schemacomments"></a>
<a id="schema_Comments"></a>
<a id="tocScomments"></a>
<a id="tocscomments"></a>

```json
null
```

<h2 id="tocS_Device_Code">Device_Code</h2>
<!-- backwards compatibility -->
<a id="schemadevice_code"></a>
<a id="schema_Device_Code"></a>
<a id="tocSdevice_code"></a>
<a id="tocsdevice_code"></a>

```json
null
```

<h2 id="tocS_Follow">Follow</h2>
<!-- backwards compatibility -->
<a id="schemafollow"></a>
<a id="schema_Follow"></a>
<a id="tocSfollow"></a>
<a id="tocsfollow"></a>

```json
null
```

<h2 id="tocS_Follower_Requests">Follower_Requests</h2>
<!-- backwards compatibility -->
<a id="schemafollower_requests"></a>
<a id="schema_Follower_Requests"></a>
<a id="tocSfollower_requests"></a>
<a id="tocsfollower_requests"></a>

```json
null
```

<h2 id="tocS_Followers">Followers</h2>
<!-- backwards compatibility -->
<a id="schemafollowers"></a>
<a id="schema_Followers"></a>
<a id="tocSfollowers"></a>
<a id="tocsfollowers"></a>

```json
null
```

<h2 id="tocS_Following">Following</h2>
<!-- backwards compatibility -->
<a id="schemafollowing"></a>
<a id="schema_Following"></a>
<a id="tocSfollowing"></a>
<a id="tocsfollowing"></a>

```json
null
```

<h2 id="tocS_Following_Requests">Following_Requests</h2>
<!-- backwards compatibility -->
<a id="schemafollowing_requests"></a>
<a id="schema_Following_Requests"></a>
<a id="tocSfollowing_requests"></a>
<a id="tocsfollowing_requests"></a>

```json
null
```

<h2 id="tocS_Friends">Friends</h2>
<!-- backwards compatibility -->
<a id="schemafriends"></a>
<a id="schema_Friends"></a>
<a id="tocSfriends"></a>
<a id="tocsfriends"></a>

```json
null
```

<h2 id="tocS_Get_Collection">Get_Collection</h2>
<!-- backwards compatibility -->
<a id="schemaget_collection"></a>
<a id="schema_Get_Collection"></a>
<a id="tocSget_collection"></a>
<a id="tocsget_collection"></a>

```json
null
```

<h2 id="tocS_Get_History">Get_History</h2>
<!-- backwards compatibility -->
<a id="schemaget_history"></a>
<a id="schema_Get_History"></a>
<a id="tocSget_history"></a>
<a id="tocsget_history"></a>

```json
null
```

<h2 id="tocS_Get_Personal_Recommendations_-_BETA">Get_Personal_Recommendations_-_BETA</h2>
<!-- backwards compatibility -->
<a id="schemaget_personal_recommendations_-_beta"></a>
<a id="schema_Get_Personal_Recommendations_-_BETA"></a>
<a id="tocSget_personal_recommendations_-_beta"></a>
<a id="tocsget_personal_recommendations_-_beta"></a>

```json
null
```

<h2 id="tocS_Get_Ratings">Get_Ratings</h2>
<!-- backwards compatibility -->
<a id="schemaget_ratings"></a>
<a id="schema_Get_Ratings"></a>
<a id="tocSget_ratings"></a>
<a id="tocsget_ratings"></a>

```json
null
```

<h2 id="tocS_Get_Token">Get_Token</h2>
<!-- backwards compatibility -->
<a id="schemaget_token"></a>
<a id="schema_Get_Token"></a>
<a id="tocSget_token"></a>
<a id="tocsget_token"></a>

```json
null
```

<h2 id="tocS_Get_Watched">Get_Watched</h2>
<!-- backwards compatibility -->
<a id="schemaget_watched"></a>
<a id="schema_Get_Watched"></a>
<a id="tocSget_watched"></a>
<a id="tocsget_watched"></a>

```json
null
```

<h2 id="tocS_Get_Watchlist">Get_Watchlist</h2>
<!-- backwards compatibility -->
<a id="schemaget_watchlist"></a>
<a id="schema_Get_Watchlist"></a>
<a id="tocSget_watchlist"></a>
<a id="tocsget_watchlist"></a>

```json
null
```

<h2 id="tocS_Hidden_Items">Hidden_Items</h2>
<!-- backwards compatibility -->
<a id="schemahidden_items"></a>
<a id="schema_Hidden_Items"></a>
<a id="tocShidden_items"></a>
<a id="tocshidden_items"></a>

```json
null
```

<h2 id="tocS_Hide_Movie">Hide_Movie</h2>
<!-- backwards compatibility -->
<a id="schemahide_movie"></a>
<a id="schema_Hide_Movie"></a>
<a id="tocShide_movie"></a>
<a id="tocshide_movie"></a>

```json
null
```

<h2 id="tocS_Hide_Show">Hide_Show</h2>
<!-- backwards compatibility -->
<a id="schemahide_show"></a>
<a id="schema_Hide_Show"></a>
<a id="tocShide_show"></a>
<a id="tocshide_show"></a>

```json
null
```

<h2 id="tocS_History">History</h2>
<!-- backwards compatibility -->
<a id="schemahistory"></a>
<a id="schema_History"></a>
<a id="tocShistory"></a>
<a id="tocshistory"></a>

```json
null
```

<h2 id="tocS_ID_Lookup">ID_Lookup</h2>
<!-- backwards compatibility -->
<a id="schemaid_lookup"></a>
<a id="schema_ID_Lookup"></a>
<a id="tocSid_lookup"></a>
<a id="tocsid_lookup"></a>

```json
null
```

<h2 id="tocS_Item">Item</h2>
<!-- backwards compatibility -->
<a id="schemaitem"></a>
<a id="schema_Item"></a>
<a id="tocSitem"></a>
<a id="tocsitem"></a>

```json
null
```

<h2 id="tocS_Last_Activities">Last_Activities</h2>
<!-- backwards compatibility -->
<a id="schemalast_activities"></a>
<a id="schema_Last_Activities"></a>
<a id="tocSlast_activities"></a>
<a id="tocslast_activities"></a>

```json
null
```

<h2 id="tocS_Last_Episode">Last_Episode</h2>
<!-- backwards compatibility -->
<a id="schemalast_episode"></a>
<a id="schema_Last_Episode"></a>
<a id="tocSlast_episode"></a>
<a id="tocslast_episode"></a>

```json
null
```

<h2 id="tocS_Like">Like</h2>
<!-- backwards compatibility -->
<a id="schemalike"></a>
<a id="schema_Like"></a>
<a id="tocSlike"></a>
<a id="tocslike"></a>

```json
null
```

<h2 id="tocS_Likes">Likes</h2>
<!-- backwards compatibility -->
<a id="schemalikes"></a>
<a id="schema_Likes"></a>
<a id="tocSlikes"></a>
<a id="tocslikes"></a>

```json
null
```

<h2 id="tocS_List">List</h2>
<!-- backwards compatibility -->
<a id="schemalist"></a>
<a id="schema_List"></a>
<a id="tocSlist"></a>
<a id="tocslist"></a>

```json
null
```

<h2 id="tocS_List_Comments">List_Comments</h2>
<!-- backwards compatibility -->
<a id="schemalist_comments"></a>
<a id="schema_List_Comments"></a>
<a id="tocSlist_comments"></a>
<a id="tocslist_comments"></a>

```json
null
```

<h2 id="tocS_List_Items">List_Items</h2>
<!-- backwards compatibility -->
<a id="schemalist_items"></a>
<a id="schema_List_Items"></a>
<a id="tocSlist_items"></a>
<a id="tocslist_items"></a>

```json
null
```

<h2 id="tocS_List_Like">List_Like</h2>
<!-- backwards compatibility -->
<a id="schemalist_like"></a>
<a id="schema_List_Like"></a>
<a id="tocSlist_like"></a>
<a id="tocslist_like"></a>

```json
null
```

<h2 id="tocS_List_Likes">List_Likes</h2>
<!-- backwards compatibility -->
<a id="schemalist_likes"></a>
<a id="schema_List_Likes"></a>
<a id="tocSlist_likes"></a>
<a id="tocslist_likes"></a>

```json
null
```

<h2 id="tocS_Lists">Lists</h2>
<!-- backwards compatibility -->
<a id="schemalists"></a>
<a id="schema_Lists"></a>
<a id="tocSlists"></a>
<a id="tocslists"></a>

```json
null
```

<h2 id="tocS_Movies">Movies</h2>
<!-- backwards compatibility -->
<a id="schemamovies"></a>
<a id="schema_Movies"></a>
<a id="tocSmovies"></a>
<a id="tocsmovies"></a>

```json
null
```

<h2 id="tocS_My_DVD">My_DVD</h2>
<!-- backwards compatibility -->
<a id="schemamy_dvd"></a>
<a id="schema_My_DVD"></a>
<a id="tocSmy_dvd"></a>
<a id="tocsmy_dvd"></a>

```json
null
```

<h2 id="tocS_My_Movies">My_Movies</h2>
<!-- backwards compatibility -->
<a id="schemamy_movies"></a>
<a id="schema_My_Movies"></a>
<a id="tocSmy_movies"></a>
<a id="tocsmy_movies"></a>

```json
null
```

<h2 id="tocS_My_New_Shows">My_New_Shows</h2>
<!-- backwards compatibility -->
<a id="schemamy_new_shows"></a>
<a id="schema_My_New_Shows"></a>
<a id="tocSmy_new_shows"></a>
<a id="tocsmy_new_shows"></a>

```json
null
```

<h2 id="tocS_My_Season_Premieres">My_Season_Premieres</h2>
<!-- backwards compatibility -->
<a id="schemamy_season_premieres"></a>
<a id="schema_My_Season_Premieres"></a>
<a id="tocSmy_season_premieres"></a>
<a id="tocsmy_season_premieres"></a>

```json
null
```

<h2 id="tocS_My_Shows">My_Shows</h2>
<!-- backwards compatibility -->
<a id="schemamy_shows"></a>
<a id="schema_My_Shows"></a>
<a id="tocSmy_shows"></a>
<a id="tocsmy_shows"></a>

```json
null
```

<h2 id="tocS_Next_Episode">Next_Episode</h2>
<!-- backwards compatibility -->
<a id="schemanext_episode"></a>
<a id="schema_Next_Episode"></a>
<a id="tocSnext_episode"></a>
<a id="tocsnext_episode"></a>

```json
null
```

<h2 id="tocS_Pause">Pause</h2>
<!-- backwards compatibility -->
<a id="schemapause"></a>
<a id="schema_Pause"></a>
<a id="tocSpause"></a>
<a id="tocspause"></a>

```json
null
```

<h2 id="tocS_People">People</h2>
<!-- backwards compatibility -->
<a id="schemapeople"></a>
<a id="schema_People"></a>
<a id="tocSpeople"></a>
<a id="tocspeople"></a>

```json
null
```

<h2 id="tocS_Personal_Recommendations_-_BETA">Personal_Recommendations_-_BETA</h2>
<!-- backwards compatibility -->
<a id="schemapersonal_recommendations_-_beta"></a>
<a id="schema_Personal_Recommendations_-_BETA"></a>
<a id="tocSpersonal_recommendations_-_beta"></a>
<a id="tocspersonal_recommendations_-_beta"></a>

```json
null
```

<h2 id="tocS_Playback">Playback</h2>
<!-- backwards compatibility -->
<a id="schemaplayback"></a>
<a id="schema_Playback"></a>
<a id="tocSplayback"></a>
<a id="tocsplayback"></a>

```json
null
```

<h2 id="tocS_Played">Played</h2>
<!-- backwards compatibility -->
<a id="schemaplayed"></a>
<a id="schema_Played"></a>
<a id="tocSplayed"></a>
<a id="tocsplayed"></a>

```json
null
```

<h2 id="tocS_Popular">Popular</h2>
<!-- backwards compatibility -->
<a id="schemapopular"></a>
<a id="schema_Popular"></a>
<a id="tocSpopular"></a>
<a id="tocspopular"></a>

```json
null
```

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
null
```

<h2 id="tocS_Ratings">Ratings</h2>
<!-- backwards compatibility -->
<a id="schemaratings"></a>
<a id="schema_Ratings"></a>
<a id="tocSratings"></a>
<a id="tocsratings"></a>

```json
null
```

<h2 id="tocS_Recent">Recent</h2>
<!-- backwards compatibility -->
<a id="schemarecent"></a>
<a id="schema_Recent"></a>
<a id="tocSrecent"></a>
<a id="tocsrecent"></a>

```json
null
```

<h2 id="tocS_Recommended">Recommended</h2>
<!-- backwards compatibility -->
<a id="schemarecommended"></a>
<a id="schema_Recommended"></a>
<a id="tocSrecommended"></a>
<a id="tocsrecommended"></a>

```json
null
```

<h2 id="tocS_Refresh_Token">Refresh_Token</h2>
<!-- backwards compatibility -->
<a id="schemarefresh_token"></a>
<a id="schema_Refresh_Token"></a>
<a id="tocSrefresh_token"></a>
<a id="tocsrefresh_token"></a>

```json
null
```

<h2 id="tocS_Related">Related</h2>
<!-- backwards compatibility -->
<a id="schemarelated"></a>
<a id="schema_Related"></a>
<a id="tocSrelated"></a>
<a id="tocsrelated"></a>

```json
null
```

<h2 id="tocS_Releases">Releases</h2>
<!-- backwards compatibility -->
<a id="schemareleases"></a>
<a id="schema_Releases"></a>
<a id="tocSreleases"></a>
<a id="tocsreleases"></a>

```json
null
```

<h2 id="tocS_Remove_Hidden_Items">Remove_Hidden_Items</h2>
<!-- backwards compatibility -->
<a id="schemaremove_hidden_items"></a>
<a id="schema_Remove_Hidden_Items"></a>
<a id="tocSremove_hidden_items"></a>
<a id="tocsremove_hidden_items"></a>

```json
null
```

<h2 id="tocS_Remove_List_Items">Remove_List_Items</h2>
<!-- backwards compatibility -->
<a id="schemaremove_list_items"></a>
<a id="schema_Remove_List_Items"></a>
<a id="tocSremove_list_items"></a>
<a id="tocsremove_list_items"></a>

```json
null
```

<h2 id="tocS_Remove_Playback">Remove_Playback</h2>
<!-- backwards compatibility -->
<a id="schemaremove_playback"></a>
<a id="schema_Remove_Playback"></a>
<a id="tocSremove_playback"></a>
<a id="tocsremove_playback"></a>

```json
null
```

<h2 id="tocS_Remove_Ratings">Remove_Ratings</h2>
<!-- backwards compatibility -->
<a id="schemaremove_ratings"></a>
<a id="schema_Remove_Ratings"></a>
<a id="tocSremove_ratings"></a>
<a id="tocsremove_ratings"></a>

```json
null
```

<h2 id="tocS_Remove_from_Collection">Remove_from_Collection</h2>
<!-- backwards compatibility -->
<a id="schemaremove_from_collection"></a>
<a id="schema_Remove_from_Collection"></a>
<a id="tocSremove_from_collection"></a>
<a id="tocsremove_from_collection"></a>

```json
null
```

<h2 id="tocS_Remove_from_History">Remove_from_History</h2>
<!-- backwards compatibility -->
<a id="schemaremove_from_history"></a>
<a id="schema_Remove_from_History"></a>
<a id="tocSremove_from_history"></a>
<a id="tocsremove_from_history"></a>

```json
null
```

<h2 id="tocS_Remove_from_Personal_Recommendations_-_BETA">Remove_from_Personal_Recommendations_-_BETA</h2>
<!-- backwards compatibility -->
<a id="schemaremove_from_personal_recommendations_-_beta"></a>
<a id="schema_Remove_from_Personal_Recommendations_-_BETA"></a>
<a id="tocSremove_from_personal_recommendations_-_beta"></a>
<a id="tocsremove_from_personal_recommendations_-_beta"></a>

```json
null
```

<h2 id="tocS_Remove_from_Watchlist">Remove_from_Watchlist</h2>
<!-- backwards compatibility -->
<a id="schemaremove_from_watchlist"></a>
<a id="schema_Remove_from_Watchlist"></a>
<a id="tocSremove_from_watchlist"></a>
<a id="tocsremove_from_watchlist"></a>

```json
null
```

<h2 id="tocS_Reorder_List_Items">Reorder_List_Items</h2>
<!-- backwards compatibility -->
<a id="schemareorder_list_items"></a>
<a id="schema_Reorder_List_Items"></a>
<a id="tocSreorder_list_items"></a>
<a id="tocsreorder_list_items"></a>

```json
null
```

<h2 id="tocS_Reorder_Lists">Reorder_Lists</h2>
<!-- backwards compatibility -->
<a id="schemareorder_lists"></a>
<a id="schema_Reorder_Lists"></a>
<a id="tocSreorder_lists"></a>
<a id="tocsreorder_lists"></a>

```json
null
```

<h2 id="tocS_Reorder_Personal_Recommendations_-_BETA">Reorder_Personal_Recommendations_-_BETA</h2>
<!-- backwards compatibility -->
<a id="schemareorder_personal_recommendations_-_beta"></a>
<a id="schema_Reorder_Personal_Recommendations_-_BETA"></a>
<a id="tocSreorder_personal_recommendations_-_beta"></a>
<a id="tocsreorder_personal_recommendations_-_beta"></a>

```json
null
```

<h2 id="tocS_Reorder_Watchlist">Reorder_Watchlist</h2>
<!-- backwards compatibility -->
<a id="schemareorder_watchlist"></a>
<a id="schema_Reorder_Watchlist"></a>
<a id="tocSreorder_watchlist"></a>
<a id="tocsreorder_watchlist"></a>

```json
null
```

<h2 id="tocS_Replies">Replies</h2>
<!-- backwards compatibility -->
<a id="schemareplies"></a>
<a id="schema_Replies"></a>
<a id="tocSreplies"></a>
<a id="tocsreplies"></a>

```json
null
```

<h2 id="tocS_Reset_Watched_Progress">Reset_Watched_Progress</h2>
<!-- backwards compatibility -->
<a id="schemareset_watched_progress"></a>
<a id="schema_Reset_Watched_Progress"></a>
<a id="tocSreset_watched_progress"></a>
<a id="tocsreset_watched_progress"></a>

```json
null
```

<h2 id="tocS_Revoke_Token">Revoke_Token</h2>
<!-- backwards compatibility -->
<a id="schemarevoke_token"></a>
<a id="schema_Revoke_Token"></a>
<a id="tocSrevoke_token"></a>
<a id="tocsrevoke_token"></a>

```json
null
```

<h2 id="tocS_Saved_Filters">Saved_Filters</h2>
<!-- backwards compatibility -->
<a id="schemasaved_filters"></a>
<a id="schema_Saved_Filters"></a>
<a id="tocSsaved_filters"></a>
<a id="tocssaved_filters"></a>

```json
null
```

<h2 id="tocS_Season">Season</h2>
<!-- backwards compatibility -->
<a id="schemaseason"></a>
<a id="schema_Season"></a>
<a id="tocSseason"></a>
<a id="tocsseason"></a>

```json
null
```

<h2 id="tocS_Settings">Settings</h2>
<!-- backwards compatibility -->
<a id="schemasettings"></a>
<a id="schema_Settings"></a>
<a id="tocSsettings"></a>
<a id="tocssettings"></a>

```json
null
```

<h2 id="tocS_Shows">Shows</h2>
<!-- backwards compatibility -->
<a id="schemashows"></a>
<a id="schema_Shows"></a>
<a id="tocSshows"></a>
<a id="tocsshows"></a>

```json
null
```

<h2 id="tocS_Start">Start</h2>
<!-- backwards compatibility -->
<a id="schemastart"></a>
<a id="schema_Start"></a>
<a id="tocSstart"></a>
<a id="tocsstart"></a>

```json
null
```

<h2 id="tocS_Stats">Stats</h2>
<!-- backwards compatibility -->
<a id="schemastats"></a>
<a id="schema_Stats"></a>
<a id="tocSstats"></a>
<a id="tocsstats"></a>

```json
null
```

<h2 id="tocS_Stop">Stop</h2>
<!-- backwards compatibility -->
<a id="schemastop"></a>
<a id="schema_Stop"></a>
<a id="tocSstop"></a>
<a id="tocsstop"></a>

```json
null
```

<h2 id="tocS_Studios">Studios</h2>
<!-- backwards compatibility -->
<a id="schemastudios"></a>
<a id="schema_Studios"></a>
<a id="tocSstudios"></a>
<a id="tocsstudios"></a>

```json
null
```

<h2 id="tocS_Summary">Summary</h2>
<!-- backwards compatibility -->
<a id="schemasummary"></a>
<a id="schema_Summary"></a>
<a id="tocSsummary"></a>
<a id="tocssummary"></a>

```json
null
```

<h2 id="tocS_Text_Query">Text_Query</h2>
<!-- backwards compatibility -->
<a id="schematext_query"></a>
<a id="schema_Text_Query"></a>
<a id="tocStext_query"></a>
<a id="tocstext_query"></a>

```json
null
```

<h2 id="tocS_Translations">Translations</h2>
<!-- backwards compatibility -->
<a id="schematranslations"></a>
<a id="schema_Translations"></a>
<a id="tocStranslations"></a>
<a id="tocstranslations"></a>

```json
null
```

<h2 id="tocS_Trending">Trending</h2>
<!-- backwards compatibility -->
<a id="schematrending"></a>
<a id="schema_Trending"></a>
<a id="tocStrending"></a>
<a id="tocstrending"></a>

```json
null
```

<h2 id="tocS_Updated_IDs">Updated_IDs</h2>
<!-- backwards compatibility -->
<a id="schemaupdated_ids"></a>
<a id="schema_Updated_IDs"></a>
<a id="tocSupdated_ids"></a>
<a id="tocsupdated_ids"></a>

```json
null
```

<h2 id="tocS_Updates">Updates</h2>
<!-- backwards compatibility -->
<a id="schemaupdates"></a>
<a id="schema_Updates"></a>
<a id="tocSupdates"></a>
<a id="tocsupdates"></a>

```json
null
```

<h2 id="tocS_Watched">Watched</h2>
<!-- backwards compatibility -->
<a id="schemawatched"></a>
<a id="schema_Watched"></a>
<a id="tocSwatched"></a>
<a id="tocswatched"></a>

```json
null
```

<h2 id="tocS_Watched_Progress">Watched_Progress</h2>
<!-- backwards compatibility -->
<a id="schemawatched_progress"></a>
<a id="schema_Watched_Progress"></a>
<a id="tocSwatched_progress"></a>
<a id="tocswatched_progress"></a>

```json
null
```

<h2 id="tocS_Watching">Watching</h2>
<!-- backwards compatibility -->
<a id="schemawatching"></a>
<a id="schema_Watching"></a>
<a id="tocSwatching"></a>
<a id="tocswatching"></a>

```json
null
```

<h2 id="tocS_Watchlist">Watchlist</h2>
<!-- backwards compatibility -->
<a id="schemawatchlist"></a>
<a id="schema_Watchlist"></a>
<a id="tocSwatchlist"></a>
<a id="tocswatchlist"></a>

```json
null
```
