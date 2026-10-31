<h1 id="braze-endpoints">Braze Endpoints v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Braze API Overview

Braze provides a high performance REST API to allow you to track users, send messages, export data, and more.

A REST API is a way to programmatically transfer information over the web using a predefined schema. Braze has created many different endpoints with specific requirements that will perform various actions and/or return various data. API access is done using HTTPS web requests to your company's REST API endpoint (this will correspond to your Dashboard URL as shown in the table below).

Customers using Braze's EU database should use `https://rest.fra-01.braze.eu/`. For more information on REST API endpoints for customers using Braze's EU database see our [EU/US Implementation Differences documentation](https://www.braze.com/docs/developer_guide/eu01_us3_sdk_implementation_differences/overview/).

## Braze Instances

Instance    | Dashboard URL   | REST Endpoint
----------- |---------------- | --------------------
US-01 | `https://dashboard.braze.com` or<br> `https://dashboard-01.braze.com` | `https://rest.iad-01.braze.com`
US-02 | `https://dashboard-02.braze.com` | `https://rest.iad-02.braze.com`
US-03 | `https://dashboard-03.braze.com` | `https://rest.iad-03.braze.com`
US-04 | `https://dashboard-04.braze.com` | `https://rest.iad-04.braze.com`
US-06 | `https://dashboard-06.braze.com` | `https://rest.iad-06.braze.com`
EU-01 | `https://dashboard.braze.eu` or<br> `https://dashboard-01.braze.eu` | `https://rest.fra-01.braze.eu`


# Using Braze's Postman Collection 

If you have a Postman account (MacOS, Windows, and Linux versions can be downloaded from their website located [here](https://www.getpostman.com)), you can go to our Postman documentation and click the orange `Run in Postman` button in the top, right corner. This will allow you to [create an environment](#setting-up-your-postman-environment), as well as edit the available `POST` and `GET` requests to suit your own needs.

## Setting Up Your Postman Environment

The Braze Postman Collection uses a templating variable, `{{instance_url}}`, to substitute the REST API URL of your Braze instance into the pre-built requests. Rather than having to manually edit all requests in the Collection, you can set up this variable in your Postman environment. To do so, please follow the steps below:

1. Click on the gear icon in the top right corner of the Postman app. 
2. Select "Manage Environments" to open a modal window which displays your active environments.
3. In the bottom right corner of the modal window, click "Add" to create a new environment.
4. Give this environment a name (e.g. "Braze API Requests") and add keys for `instance_url` and `api_key` with values corresponding to [your Braze instance](https://www.braze.com/docs/api/basics/#endpoints) and [Braze REST API Key](https://www.braze.com/docs/api/basics/#app-group-rest-api-keys), as pictured below. 

As of April, 2020 Braze has changed how we read App Group API keys. Instead of passing them in the request body or through url parameters, we now read the App Group Rest`api_key` through the HTTP Authorization header. API keys not passed through the HTTP Authorization Header will coninue to work until they have been sunset. 

## Using the Pre-Built Requests from the Collection

Once you have configured your environment. You can use any of the pre-built requests in the collection as a template for building new API requests. To start using one of the pre-built requests, simply click on it within the 'Collections' menu on the left side of Postman. This will open the request as a new tab in the main window of the Postman app.

In general, there are two types of requests that Braze's API endpoints accept - `GET` and `POST`. Depending on which `HTTP` method the endpoint uses, you'll need to edit the pre-built request differently.

### Edit a POST Request

When editing a `POST` request, you'll need to open the request and navigate to the `Body` section in the request editor. For readability, select the `raw` radio button to format the `JSON` request body.

### Edit a GET Request

When editing a `GET` request, you will need to edit the parameters passed in the request URL. To edit these easily, select the `Params` button next to the URL bar and edit the key-value pairs in the fields that will appear below the URL bar.

## Send Your Request

Once your API request is ready to send, click on the 'Send' button next to the URL bar. The request will be sent and the response data will be populated in a section underneath the request editor. From here, you can view the raw data returned from Braze's API, see the HTTP response code, see how long the request took to process, and view header information.

Base URLs:

* <a href="https://rest.iad-01.braze.com">https://rest.iad-01.braze.com</a>

<h1 id="braze-endpoints-email-lists-addresses">Email Lists &amp; Addresses</h1>

Users’ email subscription status can be updated and retrieved via Braze using a RESTful API. You can use the API to set up bi-directional sync between Braze and other email systems or your own database.

## Query Hard Bounced Emails

<a id="opIdqueryHardBouncedEmails"></a>

> Code samples

```bash
curl https://example.com/email/hard_bounces
```

`GET /email/hard_bounces`

This endpoint allows you to pull a list of email addresses that have “hard bounced” your email messages within a certain time frame.

> You must provide an `end_date`, as well as either an `email` or a `start_date`.<br><br>If your date range has more than `limit` number of hard bounces, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.

## Response

Entries are listed in descending order.

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "emails": [
    {
      "email": "example1@braze.com",
      "hard_bounced_at": "2016-08-25 15:24:32 +0000"
    },
    {
      "email": "example2@braze.com",
      "hard_bounced_at": "2016-08-24 17:41:58 +0000"
    },
    {
      "email": "example3@braze.com",
      "hard_bounced_at": "2016-08-24 12:01:13 +0000"
    }
  ],
  "message": "success"
}
```

<h3 id="query-hard-bounced-emails-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string|false|(Optional*) String in YYYY-MM-DD format <br><br>Start date of the range to retrieve hard bounces, must be earlier than `end_date`. This is treated as midnight in UTC time by the API.<br><br>*You must provide either an `email` or a `start_date`, and an `end_date`.<br>|
|end_date|query|string|false|(Optional*) String in YYYY-MM-DD format<br><br>String in YYYY-MM-DD format. End date of the range to retrieve hard bounces. This is treated as midnight in UTC time by the API.<br><br>*You must provide either an `email` or a `start_date`, and an `end_date`.|
|limit|query|string|false|(Optional) Integer<br><br>Optional field to limit the number of results returned. Defaults to 100, maximum is 500.|
|offset|query|string|false|(Optional) Integer<br><br>Optional beginning point in the list to retrieve from.|
|email|query|string|false|(Optional*) String<br><br>If provided, we will return whether or not the user has hard bounced.<br><br>*You must provide either an `email` or a `start_date`, and an `end_date`.|

<h3 id="query-hard-bounced-emails-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Query List of Unsubscribed Email Addresses

<a id="opIdqueryListOfUnsubscribedEmailAddresses"></a>

> Code samples

```bash
curl https://example.com/email/unsubscribes
```

`GET /email/unsubscribes`

Use the /email/unsubscribes endpoint to return emails that have unsubscribed during the time period from `start_date` to `end_date`. You can use this endpoint to set up a bi-directional sync between Braze and other email systems or your own database.

> You must provide either an email or a start_date and an end_date. <br><br>If your date range has more than `limit` number of unsubscribes, you will need to make multiple API calls, each time increasing the `offset` until a call returns either fewer than `limit` or zero results.

<h3 id="query-list-of-unsubscribed-email-addresses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|start_date|query|string|false|(Optional*) String in YYYY-MM-DD format<br><br>Start date of the range to retrieve unsubscribes, must be earlier than end_date. This is treated as midnight in UTC time by the API.|
|end_date|query|string|false|(Optional*)  String in YYYY-MM-DD format<br><br>End date of the range to retrieve unsubscribes. This is treated as midnight in UTC time by the API.|
|limit|query|string|false|(Optional) Integer<br><br>Optional field to limit the number of results returned. Limit must be greater than 1. Defaults to 100, maximum is 500.|
|offset|query|string|false|(Optional) Integer <br><br>Optional beginning point in the list to retrieve from|
|sort_direction|query|string|false|(Optional) String<br><br>Pass in the value `asc` to sort unsubscribes from oldest to newest. Pass in `desc` to sort from newest to oldest. If sort_direction is not included, the default order is newest to oldest.|
|email|query|string|false|(Optional*) String<br><br>If provided, we will return whether or not the user has unsubscribed|

<h3 id="query-list-of-unsubscribed-email-addresses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="braze-endpoints-export">Export</h1>

With this collection of endpoints, you will be able to access and export various levels of details on your users, segments, campaigns, and Canvases. 

Please be sure to reference the correct Instance when making API requests.



## Campaign Analytics

<a id="opIdcampaignAnalytics"></a>

> Code samples

```bash
curl https://example.com/campaigns/data_series
```

`GET /campaigns/data_series`

This endpoint allows you to retrieve a daily series of various stats for a campaign over time. Data returned includes how many messages were sent, opened, clicked, converted, etc., broken down by message channel. 

### Components Used
-[Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)


### Responses

#### Multi-Channel Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "messages" : {
                "ios_push" : [
                    {
                      "variation_name": "iOS_Push",
                      "sent" : (int),
                      "direct_opens" : (int),
                      "total_opens" : (int),
                      "bounces" : (int),
                      "body_clicks" : (int)
                      "revenue": 0,
                      "unique_recipients": 1,
                      "conversions": 0,
                      "conversions_by_send_time": 0,
                      "conversions1": 0,
                      "conversions1_by_send_time": 0,
                      "conversions2": 0,
                      "conversions2_by_send_time": 0,
                      "conversions3": 0,
                      "conversions3_by_send_time": 0,
                      "carousel_slide_[NUM]_[TITLE]_click": (optional, int),
                      "notif_button_[NUM]_[TITLE]_click": (optional, int)
                    }
                ],
                "android_push" : [
                    {
                      "sent" : (int),
                      "direct_opens" : (int),
                      "total_opens" : (int),
                      "bounces" : (int),
                      "body_clicks" : (int)
                    }
                ],
                "webhook": [
                    {
                      "sent": (int),
                      "errors": (int)
                    }
                ],
                "email" : [
                    {
                      "sent": (int),
                      "opens": (int),
                      "unique_opens": (int),
                      "clicks": (int),
                      "unique_clicks": (int),
                      "unsubscribes": (int),
                      "bounces": (int),
                      "delivered": (int),
                      "reported_spam": (int)
                    }
                ],
                "sms" : [
                  {
                    "sent": (int),
                    "delivered": (int),
                    "undelivered": (int),
                    "delivery_failed": (int)
                  }
                ]
              },
           "conversions_by_send_time": (optional, int),
           "conversions1_by_send_time": (optional, int),
           "conversions2_by_send_time": (optional, int),
           "conversions3_by_send_time": (optional, int),
           "conversions": (int),
           "conversions1": (optional, int),
           "conversions2": (optional, int),
           "conversions3": (optional, int),
           "unique_recipients": (int),
           "revenue": (optional, float)
        },
        ...
    ],
    ...
}
```

#### Multivariate Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "conversions" : (int),
            "revenue": (float),
            "conversions_by_send_time": (int),
            "messages" : {
               "trigger_in_app_message": [{
      				"variation_name": (optional, string),
      				"impressions": (int),
      				"clicks": (int),
      				"first_button_clicks": (int),
      				"second_button_clicks": (int),
      				"revenue": (optional, float),,
      				"unique_recipients": (int),
      				"conversions": (optional, int),
      				"conversions_by_send_time": (optional, int),
      				"conversions1": (optional, int),
      				"conversions1_by_send_time": (optional, int),
      				"conversions2": (optional, int),
      				"conversions2_by_send_time": (optional, int),
      				"conversions3": (optional, int),
      				"conversions3_by_send_time": (optional, int)
      			}, {
      				"variation_name": (optional, string),
      				"impressions": (int),
      				"clicks": (int),
      				"first_button_clicks": (int),
      				"second_button_clicks": (int),
      				"revenue": (optional, float),,
      				"unique_recipients": (int),
      				"conversions": (optional, int),
      				"conversions_by_send_time": (optional, int),
      				"conversions1": (optional, int),
      				"conversions1_by_send_time": (optional, int),
      				"conversions2": (optional, int),
      				"conversions2_by_send_time": (optional, int),
      				"conversions3": (optional, int).
      				"conversions3_by_send_time": (optional, int)
      			}, {
      				"variation_name": (optional, string),
      				"revenue": (optional, float),,
      				"unique_recipients": (int),
      				"conversions": (optional, int),
      				"conversions_by_send_time": (optional, int),
      				"conversions1": (optional, int),
      				"conversions1_by_send_time": (optional, int),
      				"conversions2": (optional, int),
      				"conversions2_by_send_time": (optional, int),
      				"conversions3": (optional, int),
      				"conversions3_by_send_time": (optional, int),
      				"enrolled": (optional, int)
      			}]
      		},
      		"conversions_by_send_time": (optional, int),
      		"conversions1_by_send_time": (optional, int),
      		"conversions2_by_send_time": (optional, int),
      		"conversions3_by_send_time": (optional, int),
      		"conversions": (optional, int,
      		"conversions1": (optional, int),
      		"conversions2": (optional, int),
      		"conversions3": (optional, int),
      		"unique_recipients": (int),
      		"revenue": (optional, float)
         }],
         ...
}
```

Possible message types are `email`, `in_app_message`, `webhook`, `android_push`, `apple_push`, `kindle_push`, `web_push`, `windows_phone8_push`, and `windows_universal_push`. All push message types will have the same statistics shown for `android_push` above.

<h3 id="campaign-analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|query|string|false|(Required) String<br><br>Campaign API identifier|
|length|query|string|false|(Required) Integer<br><br>Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive|
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Date on which the data series should end - defaults to time of the request|

<h3 id="campaign-analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Campaign Details

<a id="opIdcampaignDetails"></a>

> Code samples

```bash
curl https://example.com/campaigns/details
```

`GET /campaigns/details`

This endpoint allows you to retrieve relevant information on a specified campaign, which can be identified by the `campaign_id`. 

> The campaign_id for API campaigns can be found on the Developer Console page and the campaign details page within your dashboard or you can use the Campaign List Endpoint.

### Components Used
- [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)


### Campaign Details Endpoint API Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "created_at" : (string) date created as ISO 8601 date,
    "updated_at" : (string) date last updated as ISO 8601 date,
    "archived": (boolean) whether this Campaign is archived,
    "draft": (boolean) whether this Campaign is a draft,
    "name" : (string) campaign name,
    "description" : (string) campaign description,
    "schedule_type" : (string) type of scheduling action,
    "channels" : (array) list of channels to send via,
    "first_sent" : (string) date and hour of first sent as ISO 8601 date,
    "last_sent" : (string) date and hour of last sent as ISO 8601 date,
    "tags" : (array) tag names associated with the campaign,
    "messages": {
        "message_variation_id": (string) { // <=This is the actual id
            "channel": (string) channel type of the message (as in, "email", "ios_push", "webhook", "content_card", "in-app_message", "sms"),
            "name": (string) name of the message in the Dashboard (eg., "Variation 1")
            ... channel-specific fields for this message, see below ...
        }
    },
    "conversion_behaviors": (array) conversion event behaviors assigned to the campaign (see below)
}
```

#### Messages

The `messages` response will contain information about each message. Example message responses for channels are below:

##### Push Channels

```json
{
    "channel": (string) description of the channel, such as "ios_push" or "android_push"
    "alert": (string) alert body text,
    "extras": (hash) any key value pairs provided
}
```

##### Email Channel

```json
{
    "channel": "email",
    "subject": (string) subject,
    "body": (string) HTML body,
    "from": (string) from address and display name,
    "reply_to": (string) reply-to for message, if different than "from" address,
    "title": (string) name of the email,
    "extras": (hash) any key value pairs provided
}
```

##### Content Card Channel

```json
{
    "channel": "content_cards",
    "name": (string) name of variant,
    "extras": (hash) any key value pairs provided; only present if at least one key-value pair has been set
}
```

##### Webhook Channel

```json
{
    "channel": "webhook",
    "url": (string) url for webhook,
    "body": (string) payload body,
    "type": (string) body content type,
    "headers": (hash) specified request headers,
    "method": (string) HTTP method (e.g., "POST" or "GET"),
}
```

##### SMS Channel

```json
{
  "channel": "sms",
  "body": (string) payload body,
  "from": (string) list of numbers associated with the subscription group,
  "subscription_group_id": (string) API id of the subscription group targeted in the SMS message
}
```

##### Control Messages

```json
{
    "channel": (string) description of the channel that the control is for,
    "type": "control"
}
```

#### Conversion Behaviors

The `conversion_behaviors` array will contain information about each conversion event behavior set for the campaign. These behaviors are in order as set by the campaign. For example, Conversion Event A will be the first item in the array, Conversion Event B will be second, etc. Example conversion event behavior responses for are below:

##### Clicks Email

```json
{
    "type": "Clicks Email",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
}
```

##### Opens Email

```json
{
    "type": "Opens Email",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
}
```

##### Makes Purchase (any purchase)

```json
{
    "type": "Makes Any Purchase",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours
}
```

##### Makes Purchase (specific product)

```json
{
    "type": "Makes Specific Purchase",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
    "product": (string) name of the product, i.e. - "Feline Body Armor"
}
```

##### Performs Custom Event

```json
{
    "type": "Performs Custom Event",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
    "custom_event_name": (string) name of the event, i.e. - "Used Feline Body Armor"
}
```

##### Upgrades App

```json
{
    "type": "Upgrades App",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
    "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
}
```

##### Uses App

```json
{
    "type": "Starts Session",
    "window": (integer) number of seconds during which the user can convert on this event, i.e. - 86400, which is 24 hours,
    "app_ids": (array|null) array of app ids, i.e. - ["12345", "67890"], or `null` if "Track sessions for any app" is selected in the UI
}
```

<h3 id="campaign-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|query|string|false|(Required) String<br><br>Campaign API identifier|

<h3 id="campaign-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Campaign List

<a id="opIdcampaignList"></a>

> Code samples

```bash
curl https://example.com/campaigns/list
```

`GET /campaigns/list`

This endpoint allows you to export a list of campaigns, each of which will include its name, Campaign API Identifier, whether it is an API Campaign, and Tags associated with the campaign. The campaigns are returned in groups of 100 sorted by time of creation (oldest to newest by default).

## Campaign List Endpoint API Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "campaigns" : [
        {
            "id" : (string) Campaign API Identifier,
            "last_edited": (ISO 8601 string) the last edited time for the message 
            "name" : (string) campaign name,
            "is_api_campaign" : (boolean) whether the campaign is an API Campaign,
            "tags" : (array) tag names associated with the campaign
        },
        ...
    ]
}
```

<h3 id="campaign-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|(Optional) Integer<br><br>The page of campaigns to return, defaults to 0 (returns the first set of up to 100)|
|include_archived|query|string|false|(Optional) Boolean<br><br>Whether or not to include archived campaigns, defaults to false|
|sort_direction|query|string|false|(Optional) String<br><br>Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.|
|last_edit.time[gt]|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Filters the results and only returns campaigns that were edited greater than the time provided till now. |

<h3 id="campaign-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Canvas Data Series Analytics

<a id="opIdcanvasDataSeriesAnalytics"></a>

> Code samples

```bash
curl https://example.com/canvas/data_series
```

`GET /canvas/data_series`

This endpoint allows you to export time series data for a Canvas.

### Components Used
- [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response
```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "data": {
    "name": (string) Canvas name,
    "stats": [
      {
        "time": (string) date as ISO 8601 date,
        "total_stats": {
          "revenue": (float),
          "conversions": (int),
          "conversions_by_entry_time": (int),
          "entries": (int)
        },
        "variant_stats": (optional) {
          "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
            "name": (string) name of variant,
            "revenue": (int),
            "conversions": (int),
            "conversions_by_entry_time": (int),
            "entries": (int)
          },
          ... (more variants)
        },
        "step_stats": (optional) {
          "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
            "name": (string) name of step,
            "revenue": (float),
            "conversions": (int),
            "conversions_by_entry_time": (int),
            "messages": {
              "email": [
                {
                  "sent": (int),
                  "opens": (int),
                  "unique_opens": (int),
                  "clicks": (int),
                  ... (more stats)
                }
              ],
              ... (more channels)
            }
          },
          ... (more steps)
        }
      },
      ... (more stats by time)
    ]
  },
  "message": (required, string) the status of the export, returns 'success' when completed without errors
}
```

<h3 id="canvas-data-series-analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|canvas_id|query|string|false|(Required) String<br><br>Canvas API Identifier|
|ending_at|query|string|false|(Required) DateTime (ISO 8601 string)<br><br>Date on which the data export should end - defaults to time of the request|
|starting_at|query|string|false|(Optional) DateTime (ISO 8601 string) <br><br>Date on which the data export should begin (either length or starting_at are required)|
|length|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required)|
|include_variant_breakdown|query|string|false|(Optional) Boolean<br><br>Whether or not to include variant stats (defaults to false)|
|include_step_breakdown|query|string|false|(Optional) Boolean<br><br>Whether or not to include step stats (defaults to false)|
|include_deleted_step_data|query|string|false|(Optional) Boolean<br><br>Whether or not to include step stats for deleted steps (defaults to false)|

<h3 id="canvas-data-series-analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Canvas Data Analytics Summary

<a id="opIdcanvasDataAnalyticsSummary"></a>

> Code samples

```bash
curl https://example.com/canvas/data_summary
```

`GET /canvas/data_summary`

This endpoint allows you to export rollups of time series data for a Canvas, providing a concise summary of a Canvas' results.

### Components Used
- [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "data": {
    "name": (string) Canvas name,
    "total_stats": {
      "revenue": (float),
      "conversions": (int),
      "conversions_by_entry_time": (int),
      "entries": (int)
    },
    "variant_stats": (optional) {
      "00000000-0000-0000-0000-0000000000000": (API identifier for variant) {
        "name": (string) name of variant,
        "revenue": (float),
        "conversions": (int),
        "entries": (int)
      },
      ... (more variants)
    },
    "step_stats": (optional) {
      "00000000-0000-0000-0000-0000000000000": (API identifier for step) {
        "name": (string) name of step,
        "revenue": (float),
        "conversions": (int),
        "conversions_by_entry_time": (int),
        "messages": {
          "android_push": (name of channel) [
            {
              "sent": (int),
              "opens": (int),
              "influenced_opens": (int),
              "bounces": (int)
              ... (more stats for channel)
            }
          ],
          ... (more channels)
        }
      },
      ... (more steps)
    }
  },
  "message": (required, string) the status of the export, returns 'success' when completed without errors
}
```

<h3 id="canvas-data-analytics-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|canvas_id|query|string|false|(Required) String <br><br>Canvas API identifier|
|ending_at|query|string|false|(Required) DateTime (ISO 8601 string)<br><br>Date on which the data export should end - defaults to time of the request|
|starting_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Date on which the data export should begin (either length or starting_at required)|
|length|query|string|false|(Optional) Integer<br><br>Max number of days before ending_at to include in the returned series - must be between 1 and 14 inclusive (either length or starting_at required)|
|include_variant_breakdown|query|string|false|(Optional) Boolean<br><br>Whether or not to include variant stats (defaults to false)|
|include_step_breakdown|query|string|false|(Optional) Boolean<br><br>Whether or not to include step stats (defaults to false)|
|include_deleted_step_data|query|string|false|(Optional) Boolean<br><br>Whether or not to include step stats for deleted steps (defaults to false)|

<h3 id="canvas-data-analytics-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Canvas Details

<a id="opIdcanvasDetails"></a>

> Code samples

```bash
curl https://example.com/canvas/details
```

`GET /canvas/details`

This endpoint allows you to export metadata about a Canvas, such as its name, when it was created, its current status, and more.

### Components Used
- [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "created_at": (string) date created as ISO 8601 date,
  "updated_at": (string) date updated as ISO 8601 date,
  "name": (string) Canvas name,
  "description": (string) Canvas description,
  "archived": (boolean) whether this Canvas is archived,
  "draft": (boolean) whether this Canvas is a draft,
  "schedule_type": (string) type of scheduling action,
  "first_entry": (string) date of first entry as ISO 8601 date,
  "last_entry": (string) date of last entry as ISO 8601 date,
  "channels": (array of strings) step channels used with Canvas,
  "variants": [
    {
      "name": (string) name of variant,
      "id": (string) API identifier of the variant,
      "first_step_ids": (array of strings) API identifiers for first steps in variant,
      "first_step_id": (string) API identifier of first step in variant (deprecated in November 2017, only included if the variant has only one first step)
    },
    ... (more variations)
  ],
  "tags": (array of strings) tag names associated with the Canvas,
  "steps": [
    {
      "name": (string) name of step,
      "id": (string) API identifier of the step,
      "next_step_ids": (array of strings) API identifiers of steps following step,
      "channels": (array of strings) channels used in step,
      "messages": {
          "message_variation_id": (string) {  // <=This is the actual id
              "channel": (string) channel type of the message (eg., "email"),
              ... channel-specific fields for this message, see Campaign Details Endpoint API Response for example message responses ...
          }
      }
    },
    ... (more steps)
  ],
  "message": (required, string) the status of the export, returns 'success' when completed without errors
}
```

<h3 id="canvas-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|canvas_id|query|string|false|(Required) String<br><br>Canvas API Identifier |

<h3 id="canvas-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Canvas List

<a id="opIdcanvasList"></a>

> Code samples

```bash
curl https://example.com/canvas/list
```

`GET /canvas/list`

This endpoint allows you to export a list of Canvases, including the name, Canvas API Identifier and associated Tags. The Canvases are returned in groups of 100 sorted by time of creation (oldest to newest by default).

> Archived Canvases will not be included in the API response unless the `include_archived` field is specified. Canvases that are stopped but not archived, however, will be returned by default.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "canvases" : [
  	{
  		"id" : (string) Canvas API Identifier,
  		"last_edited": (ISO 8601 string) the last edited time for the message,
  		"name" : (string) Canvas name,
  		"tags" : (array) tag names associated with the Canvas,
  	},
    ... (more Canvases)
  ],
  "message": (required, string) the status of the export, returns 'success' when completed without errors
}
```

<h3 id="canvas-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|(Optional) Integer<br><br>The page of Canvases to return, defaults to `0` (returns the first set of up to 100)|
|include_archived|query|string|false|(Optional) Boolean<br><br>Whether or not to include archived Canvases, defaults to `false`.|
|sort_direction|query|string|false|(Optional) String<br><br>Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.|
|last_edit.time[gt]|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Filters the results and only returns Canvases that were edited greater than the time provided till now.|

<h3 id="canvas-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Custom Events Analytics

<a id="opIdcustomEventsAnalytics"></a>

> Code samples

```bash
curl https://example.com/events/data_series
```

`GET /events/data_series`

This endpoint allows you to retrieve a series of the number of occurrences of a custom event in your app over a designated time period.

### Components Used
-[Segment Identifier](https://www.braze.com/docs/api/identifier_types/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "count" : (int)
        },
        ...
    ]
}
```

### Fatal Error Response Codes
The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.

| Error Code       | Reason / Cause                                                   |
| ---------------- | ---------------------------------------------------------------- |
| 400 Bad Request  | Bad Syntax                                                       |
| 401 Unauthorized | Unknown or missing REST API Key                                  |
| 429 Rate Limited | Over rate limit                                                  |
| 5XX              | Internal server error, you should retry with exponential backoff |

<h3 id="custom-events-analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|event|query|string|false|(Required) String<br><br>The name of the custom event for which to return analytics |
|length|query|string|false|(Required) Integer<br><br>Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive|
|unit|query|string|false|(Optional) String<br><br>Unit of time between data points - can be "day" or "hour" (defaults to "day")|
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Point in time when the data series should end - defaults to time of the request|
|app_id|query|string|false|(Optional) String<br><br>App API identifier retrieved from the Developer Console to limit analytics to a specific app|
|segment_id|query|string|false|(Optional) String<br><br>Segment API identifier indicating the analytics enabled segment for which event analytics should be returned|

<h3 id="custom-events-analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Custom Events List

<a id="opIdcustomEventsList"></a>

> Code samples

```bash
curl https://example.com/events/list
```

`GET /events/list`

This endpoint allows you to export a list of custom events that have been recorded for your app. The event names are returned in groups of 250, sorted alphabetically.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "events" : [
        "Event A",
        "Event B",
        "Event C",
        ...
    ]
}
```

### Fatal Error Response Codes

The following status codes and associated error messages will be returned if your request encounters a fatal error. Any of these error codes indicate that no data will be processed.

| Error Code       | Reason / Cause                                                   |
| ---------------- | ---------------------------------------------------------------- |
| 400 Bad Request  | Bad Syntax                                                       |
| 401 Unauthorized | Unknown or missing REST API Key                                  |
| 429 Rate Limited | Over rate limit                                                  |
| 5XX              | Internal server error, you should retry with exponential backoff |

<h3 id="custom-events-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|(Optional) Integer<br><br>The page of event names to return, defaults to 0 (returns the first set of up to 250)|

<h3 id="custom-events-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## News Feed Card Analytics

<a id="opIdnewsFeedCardAnalytics"></a>

> Code samples

```bash
curl https://example.com/feed/data_series
```

`GET /feed/data_series`

This endpoint allows you to retrieve a daily series of engagement stats for a card over time.

### Components Used
- [Card ID](https://www.braze.com/docs/api/identifier_types/)
- [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "clicks" : (int) ,
            "impressions" : (int),
            "unique_clicks" : (int),
            "unique_impressions" : (int)
        },
        ...
    ]
}
```

<h3 id="news-feed-card-analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|query|string|false|(Required) String<br><br>Card API identifier|
|length|query|string|false|(Required) Integer<br><br>Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive|
|unit|query|string|false|(Optional) String<br><br>Unit of time between data points - can be "day" or "hour" (defaults to "day")|
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Date on which the data series should end - defaults to time of the request|

<h3 id="news-feed-card-analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## News Feed Cards Details

<a id="opIdnewsFeedCardsDetails"></a>

> Code samples

```bash
curl https://example.com/feed/details
```

`GET /feed/details`

This endpoint allows you to retrieve relevant information on the card, which can be identified by the `card_id`.

### Components Used
- [Card ID](https://www.braze.com/docs/api/identifier_types/)
- [News Feed List](https://www.braze.com/docs/api/endpoints/export/news_feed/get_news_feed_cards/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) The status of the export, returns 'success' when completed without errors,
    "created_at" : (string) Date created as ISO 8601 date,
    "updated_at" : (string) Date last updated as ISO 8601 date,
    "name" : (string) Card name,
    "publish_at" : (string) Date card was published as ISO 8601 date,
    "end_at" : (string) Date card will stop displaying for users as ISO 8601 date,
    "tags" : (array) Tag names associated with the card,
    "title" : (string) Title of the card,
    "image_url" : (string) Image URL used by this card,
    "extras" : (dictionary) Dictionary containing key-value pair data attached to this card,
    "description" : (string) Description text used by this card,
    "archived": (boolean) whether this Card is archived,
    "draft": (boolean) whether this Card is a draft,
}
```

<h3 id="news-feed-cards-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|card_id|query|string|false|(Required) String<br><br>Card API identifier |

<h3 id="news-feed-cards-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## News Feed Cards List

<a id="opIdnewsFeedCardsList"></a>

> Code samples

```bash
curl https://example.com/feed/list
```

`GET /feed/list`

This endpoint allows you to export a list of News Feed cards, each of which will include its name and Card API Identifier. The cards are returned in groups of 100 sorted by time of creation (oldest to newest by default).


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "cards" : [
        {
            "id" : (string) Card API Identifier,
            "type" : (string) type of the card - NewsItem (classic cards), CaptionedImage, Banner or DevPick (cross-promotional cards),
            "title" : (string) title of the card,
            "tags" : (array) tag names associated with the card
        },
        ...
    ]
}
```

<h3 id="news-feed-cards-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|(Optional) Integer<br><br>The page of cards to return, defaults to 0 (returns the first set of up to 100)|
|include_archived|query|string|false|(Optional) Boolean<br><br>Whether or not to include archived cards, defaults to false|
|sort_direction|query|string|false|(Optional) String<br><br>Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If sort_direction is not included, the default order is oldest to newest.|

<h3 id="news-feed-cards-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Daily Active Users by Date

<a id="opIddailyActiveUsersByDate"></a>

> Code samples

```bash
curl https://example.com/kpi/dau/data_series
```

`GET /kpi/dau/data_series`

This endpoint allows you to retrieve a daily series of the total number of unique active users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "dau" : (int)
        },
        ...
    ]
}
```

<h3 id="daily-active-users-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|length|query|string|false|(Required) Integer<br><br>Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive|
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Point in time when the data series should end - defaults to time of the request|
|app_id|query|string|false|(Optional) String<br><br>App API identifier; if excluded, results for all apps in app group will be returned|

<h3 id="daily-active-users-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Monthly Active Users for Last 30 Days

<a id="opIdmonthlyActiveUsersForLast30Days"></a>

> Code samples

```bash
curl https://example.com/kpi/mau/data_series
```

`GET /kpi/mau/data_series`

This endpoint allows you to retrieve a daily series of the total number of unique active users over a 30-day rolling window.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "mau" : (int)
        },
        ...
    ]
}
```

<h3 id="monthly-active-users-for-last-30-days-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|length|query|string|false|(Required) Integer<br><br>Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive|
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Point in time when the data series should end - defaults to time of the request|
|app_id|query|string|false|(Optional) String<br><br>App API identifier; if excluded, results for all apps in app group will be returned|

<h3 id="monthly-active-users-for-last-30-days-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Daily New Users by Date

<a id="opIddailyNewUsersByDate"></a>

> Code samples

```bash
curl https://example.com/kpi/new_users/data_series
```

`GET /kpi/new_users/data_series`

This endpoint allows you to retrieve a daily series of the total number of new users on each date.


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "new_users" : (int)
        },
        ...
    ]
}
```

<h3 id="daily-new-users-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|length|query|string|false|(Required) Integer<br><br>Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive|
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Point in time when the data series should end - defaults to time of the request|
|app_id|query|string|false|(Optional) String<br><br>App API identifier; if excluded, results for all apps in app group will be returned|

<h3 id="daily-new-users-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## KPIs for Daily App Uninstalls by Date

<a id="opIdkpIsForDailyAppUninstallsByDate"></a>

> Code samples

```bash
curl https://example.com/kpi/uninstalls/data_series
```

`GET /kpi/uninstalls/data_series`

This endpoint allows you to retrieve a daily series of the total number of uninstalls on each date.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "uninstalls" : (int)
        },
        ...
    ]
}
```

<h3 id="kpis-for-daily-app-uninstalls-by-date-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|length|query|string|false|(Required) Integer<br><br>Max number of days before ending_at to include in the returned series - must be between 1 and 100 inclusive|
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Point in time when the data series should end - defaults to time of the request|
|app_id|query|string|false|(Optional) String<br><br>App API identifier; if excluded, results for all apps in app group will be returned|

<h3 id="kpis-for-daily-app-uninstalls-by-date-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Segment Analytics

<a id="opIdsegmentAnalytics"></a>

> Code samples

```bash
curl https://example.com/segments/data_series
```

`GET /segments/data_series`

This endpoint allows you to retrieve a daily series of the size of a segment over time for a segment.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) date as ISO 8601 date,
            "size" : (int) size of the segment on that date
        },
        ...
    ]
}
```

<h3 id="segment-analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|segment_id|query|string|false|(Required) String<br><br>Segment API identifier.|
|length|query|string|false|(Required) Integer<br><br>Max number of days before `ending_at` to include in the returned series - must be between 1 and 100 inclusive.|
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Point in time when the data series should end - defaults to time of the request.|

<h3 id="segment-analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Segment Details

<a id="opIdsegmentDetails"></a>

> Code samples

```bash
curl https://example.com/segments/details
```

`GET /segments/details`

This endpoint allows you to retrieve relevant information on the segment, which can be identified by the `segment_id`.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
      "message": (required, string) the status of the export, returns 'success' when completed without errors,
      "created_at" : (string) date created as ISO 8601 date,
      "updated_at" : (string) date last updated as ISO 8601 date,
      "name" : (string) segment name,
      "description" : (string) human-readable description of filters,
      "text_description" : (string) segment description, 
      "tags" : (array) tag names associated with the segment
}
```

<h3 id="segment-details-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|segment_id|query|string|false|(Required) String<br><br>Segment API identifier|

<h3 id="segment-details-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Segment List

<a id="opIdsegmentList"></a>

> Code samples

```bash
curl https://example.com/segments/list
```

`GET /segments/list`

This endpoint allows you to export a list of segments, each of which will include its name, Segment API Identifier, and whether it has analytics tracking enabled. The segments are returned in groups of 100 sorted by time of creation (oldest to newest by default). Archived segments are not included.

### Request Components
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)


## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "segments" : [
        {
            "id" : (string) Segment API Identifier,
            "name" : (string) segment name,
            "analytics_tracking_enabled" : (boolean) whether the segment has analytics tracking enabled,
            "tags" : (array) tag names associated with the segment
        },
        ...
    ]
}
```

<h3 id="segment-list-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|page|query|string|false|(Optional) Integer<br><br>The page of segments to return, defaults to 0 (returns the first set of up to 100)|
|sort_direction|query|string|false|(Optional) String<br><br>Pass in the value `desc` to sort by creation time from newest to oldest. Pass in `asc` to sort from oldest to newest. If `sort_direction` is not included, the default order is oldest to newest.|

<h3 id="segment-list-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Send Analytics

<a id="opIdsendAnalytics"></a>

> Code samples

```bash
curl https://example.com/sends/data_series
```

`GET /sends/data_series`

This endpoint allows you to retrieve a daily series of various stats for a tracked `send_id`. Braze stores send analytics for 14 days after the send.

Campaign conversions will be attributed towards the most recent send id that a given user has received from the campaign.

> The `send_id` is only generated for API campaign sends targeting segments, connected audiences or broadcasts. When relevant, the `send_id` is included in response for the `messages/send`, `messages/schedule`, `campaign/trigger/send` and `campaign/trigger/schedule` endpoints.

### Components Used
- [Campaign Identifier](https://www.braze.com/docs/api/identifier_types/)

### Send Analytics Endpoint API Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
            "variation_name": (string) variation name,
            "sent": (int) the number of sends,
            "delivered": (int) the number of messages successfully delivered,
            "undelivered": (int) the number of undelivered,
            "delivery_failed": (int) the number of rejected,
            "direct_opens": (int) the number of direct opens,
            "total_opens": (int) the number of total opens,
            "bounces": (int) the number of bounces,
            "body_clicks": (int) the number of body clicks,
            "revenue": (float) the number of dollars of revenue (USD),
            "unique_recipients": (int) the number of unique recipients,
            "conversions": (int) the number of conversions,
            "conversions_by_send_time": (int) the number of conversions,
            "conversions1": (int, optional) the number of conversions for the second conversion event,
            "conversions1_by_send_time": (int, optional) the number of conversions for the second conversion event by send time,
            "conversions2": (int, optional) the number of conversions for the third conversion event,
            "conversions2_by_send_time": (int, optional) the number of conversions for the third conversion event by send time,
            "conversions3": (int, optional) the number of conversions for the fourth conversion event,
            "conversions3_by_send_time": (int, optional) the number of conversions for the fourth conversion event by send time
          }
        ]
      },
      "conversions_by_send_time": 0,
      "conversions1_by_send_time": 0,
      "conversions2_by_send_time": 0,
      "conversions3_by_send_time": 0,
      "conversions": 0,
      "conversions1": 0,
      "conversions2": 0,
      "conversions3": 0,
      "unique_recipients": 1,
      "revenue": 0
    }
  ],
  "message": "success"
}
```

<h3 id="send-analytics-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|campaign_id|query|string|false|(Required) String<br><br>Campaign API identifier.|
|send_id|query|string|false|(Required) String<br><br>Send API identifier.|
|length|query|string|false|(Required) Integer<br><br>Maximum number of days before `ending_at` to include in the returned series. Must be between 1 and 100 inclusive.|
|ending_at|query|string|false|(Optional) Datetime ISO 8601 string<br><br>Date on which the data series should end. Defaults to time of the request.|

<h3 id="send-analytics-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## App Sessions by Time

<a id="opIdappSessionsByTime"></a>

> Code samples

```bash
curl https://example.com/sessions/data_series
```

`GET /sessions/data_series`

This endpoint allows you to retrieve a series of the number of sessions for your app over a designated time period.

### Components Used
- [Segment Identifier](https://www.braze.com/docs/api/identifier_types/)

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "message": (required, string) the status of the export, returns 'success' when completed without errors,
    "data" : [
        {
            "time" : (string) point in time - as ISO 8601 extended when unit is "hour" and as ISO 8601 date when unit is "day",
            "sessions" : (int)
        },
        ...
    ]
}
```

<h3 id="app-sessions-by-time-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|length|query|string|false|(Required) Integer<br><br>Max number of units (days or hours) before ending_at to include in the returned series - must be between 1 and 100 inclusive.|
|unit|query|string|false|(Optional) String<br><br>Unit of time between data points - can be "day" or "hour" (defaults to "day"). |
|ending_at|query|string|false|(Optional) DateTime (ISO 8601 string)<br><br>Point in time when the data series should end - defaults to time of the request.|
|app_id|query|string|false|(Optional) String<br><br>App API identifier retrieved from the Developer Console to limit analytics to a specific app.|
|segment_id|query|string|false|(Optional) String<br><br>Segment API identifier indicating the analytics enabled segment for which sessions should be returned.|

<h3 id="app-sessions-by-time-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="braze-endpoints-messaging">Messaging</h1>

The Braze messaging API provides you with two distinct options for sending messages to your users. You can provide the message contents and configuration in the API request with the /messages/send and /messages/schedule endpoints. Alternatively, you can manage the details of your message with an API-Triggered Delivery campaign in the dashboard and just control when and to whom it is sent with the campaigns/trigger/send and campaigns/trigger/schedule endpoints. The following sections will detail the request specification for both methods.

The examples below contain the URL https://rest.iad-01.braze.com, but some customers will need to use a different endpoint URL, for example if you are hosted in Braze’s EU data center or have a dedicated Braze installation. Your Success Manager will inform you if you should use a different endpoint URL.

Similarly to other campaigns, you can limit the number of times a particular user can receive a Messaging API campaign by configuring re-eligibility settings in the Braze Dashboard. Braze will not deliver API messages to users that haven’t become re-eligible for the campaign regardless of how many API requests are sent.



## Schedule API Triggered Canvases

<a id="opIdscheduleApiTriggeredCanvases"></a>

> Code samples

```bash
curl https://example.com/canvas/trigger/schedule/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "audience": {
      "AND": [
        {
          "custom_attribute": {
            "comparison": "equals",
            "custom_attribute_name": "eye_color",
            "value": "blue"
          }
        },
        {
          "custom_attribute": {
            "comparison": "includes_value",
            "custom_attribute_name": "favorite_foods",
            "value": "pizza"
          }
        },
        {
          "OR": [
            {
              "custom_attribute": {
                "comparison": "less_than_x_days_ago",
                "custom_attribute_name": "last_purchase_time",
                "value": 2
              }
            },
            {
              "push_subscription_status": {
                "comparison": "is",
                "value": "opted_in"
              }
            }
          ]
        },
        {
          "email_subscription_status": {
            "comparison": "is_not",
            "value": "subscribed"
          }
        },
        {
          "last_used_app": {
            "comparison": "after",
            "value": "2019-07-22T13:17:55+0000"
          }
        }
      ]
    },
    "broadcast": false,
    "canvas_entry_properties": {},
    "canvas_id": "canvas_identifier",
    "recipients": [
      {
        "canvas_entry_properties": {},
        "external_user_id": "external_user_identifier",
        "trigger_properties": "",
        "user_alias": "example_alias"
      }
    ],
    "schedule": {
      "at_optimal_time": false,
      "in_local_time": false,
      "time": ""
    }
  }'
```

`POST /canvas/trigger/schedule/create`

Use this endpoint to trigger API Triggered Canvases, which are created on the Dashboard and initiated via the API. You can pass in `canvas_entry_properties` that will be templated into the messages sent by the first steps of the Canvas.

This endpoint allows you to schedule Canvas messages (up to 90 days in advance) via API Triggered delivery, allowing you to decide what action should trigger the message to be sent. Please note that to send messages with this endpoint, you must have a Canvas ID, created when you build a Canvas.

### Request Parameters

| Parameter | Required | Data Type | Description |
| --------- | ---------| --------- | ----------- |
|`canvas_id`|Required|String| See canvas identifier|
|`send_id` | Optional | String | See send identifier |
|`recipients` | Optional | Array of recipient objects | See recipients object |
|`audience` | Optional | Connected audience object | See connected audience |
|`broadcast` | Optional | Boolean | See broadcast -- defaults to false on 8/31/17, must be set to true if "recipients" object is omitted |
| `trigger_properties` | Optional | Object | Personalization key value pairs for all users in this send; see trigger properties |
| `schedule` | Required | Schedule object | See schedule object |

## Request Components
- [Canvas Identifier](https://www.braze.com/docs/api/identifier_types/)
- [Recipients](https://www.braze.com/docs/api/objects_filters/recipient_object/)
- [Connected Audience](https://www.braze.com/docs/api/objects_filters/connected_audience/)
- [Broadcast](https://www.braze.com/docs/api/parameters/#broadcast)
- [Trigger Properties](https://www.braze.com/docs/api/objects_filters/trigger_properties_object/)
- [Schedule Object](https://www.braze.com/docs/api/objects_filters/schedule_object/)

> Body parameter

```json
{
  "audience": {
    "AND": [
      {
        "custom_attribute": {
          "comparison": "equals",
          "custom_attribute_name": "eye_color",
          "value": "blue"
        }
      },
      {
        "custom_attribute": {
          "comparison": "includes_value",
          "custom_attribute_name": "favorite_foods",
          "value": "pizza"
        }
      },
      {
        "OR": [
          {
            "custom_attribute": {
              "comparison": "less_than_x_days_ago",
              "custom_attribute_name": "last_purchase_time",
              "value": 2
            }
          },
          {
            "push_subscription_status": {
              "comparison": "is",
              "value": "opted_in"
            }
          }
        ]
      },
      {
        "email_subscription_status": {
          "comparison": "is_not",
          "value": "subscribed"
        }
      },
      {
        "last_used_app": {
          "comparison": "after",
          "value": "2019-07-22T13:17:55+0000"
        }
      }
    ]
  },
  "broadcast": false,
  "canvas_entry_properties": {},
  "canvas_id": "canvas_identifier",
  "recipients": [
    {
      "canvas_entry_properties": {},
      "external_user_id": "external_user_identifier",
      "trigger_properties": "",
      "user_alias": "example_alias"
    }
  ],
  "schedule": {
    "at_optimal_time": false,
    "in_local_time": false,
    "time": ""
  }
}
```

<h3 id="schedule-api-triggered-canvases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» audience|body|object|false|none|
|» » AND|body|[object]|false|none|
|» » » custom_attribute|body|object|false|none|
|» » » » comparison|body|string|false|none|
|» » » » custom_attribute_name|body|string|false|none|
|» » » » value|body|string|false|none|
|» broadcast|body|boolean|false|none|
|» canvas_entry_properties|body|object|false|none|
|» canvas_id|body|string|false|none|
|» recipients|body|[object]|false|none|
|» » canvas_entry_properties|body|object|false|none|
|» » external_user_id|body|string|false|none|
|» » trigger_properties|body|string|false|none|
|» » user_alias|body|string|false|none|
|» schedule|body|object|false|none|
|» » at_optimal_time|body|boolean|false|none|
|» » in_local_time|body|boolean|false|none|
|» » time|body|string|false|none|

<h3 id="schedule-api-triggered-canvases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Get Upcoming Scheduled Campaigns and Canvases

<a id="opIdgetUpcomingScheduledCampaignsAndCanvases"></a>

> Code samples

```bash
curl https://example.com/messages/scheduled_broadcasts
```

`GET /messages/scheduled_broadcasts`

You can view a JSON list of upcoming and scheduled Campaigns and Canvases using the following information and parameters. The endpoint will return information about scheduled Campaigns and entry Canvases between now and the designated end_time (ISO 8601 format) specified in the request. Daily, recurring messages will only appear once with their next occurrence. Results returned in this endpoint are only for Campaigns and Canvases created and scheduled in Braze.

## Response

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
    "scheduled_broadcasts": [
      # Example Canvas
      {
        "name" => String,
        "id" => String,
        "type" => "Canvas",
        "tags" => [String tag names],
        "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
        "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
      },
      # Example Campaign
      {
        "name" => String,
        "id" => String,
        "type" => "Campaign",
        "tags" => [String tag names],
        "next_send_time" => "YYYY-MM-DD HH:mm:ss" (may also include time zone if not local/intelligent delivery)
        "schedule_type" => one of "local_time_zones", "intelligent_delivery", or the name of your company's time zone
      },
    ]
}
```

<h3 id="get-upcoming-scheduled-campaigns-and-canvases-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|end_time|query|string|false|(Required) String in ISO 8601 format<br><br>End date of the range to retrieve upcoming scheduled Campaigns and Canvases. This is treated as midnight in UTC time by the API.|

<h3 id="get-upcoming-scheduled-campaigns-and-canvases-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="braze-endpoints-subscription-groups">Subscription Groups</h1>

Use the Subscription Group REST APIs to programmatically manage the subscription groups that you have stored on the Braze dashboard, on the Subscription Group page.

## List User's Subscription Group Status - SMS

<a id="opIdlistUser'sSubscriptionGroupStatusSms"></a>

> Code samples

```bash
curl https://example.com/subscription/status/get
```

`GET /subscription/status/get`

Use the endpoint below to get the subscription state of a user in a subscription group. The response from this endpoint will include the external ID and either subscribed, unsubscribed, or unknown for the specific subscription group requested in the API call. This can be used to update the subscription group state in subsequent API calls or to be displayed on a hosted web page.

> *Either `external_id` or `email` are required.

## Response

All successful responses will return `subscribed`, `unsubscribed`, or `unknown` depending on status and user history with the subscription group.

```json
Content-Type: application/json
Authorization: Bearer YOUR-REST-API-KEY
{
  "status": {
    "1": "Unsubscribed",
    "2": "Subscribed"
  },
  "message": "success"
}
```

<h3 id="list-users-subscription-group-status---sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscription_group_id|query|string|false|(Required) String<br><br>The `id` of your subscription group.|
|external_id|query|string|false|(Required*) String<br><br>The `external_id` of the user (must include at least one and at most 50 `external_ids`).<br><br>Only external_id or phone is accepted for SMS subscription groups<br>|
|phone|query|string|false|(Required*) String<br><br>The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.<br><br>Only external_id or phone is accepted for SMS subscription groups<br>|

<h3 id="list-users-subscription-group-status---sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## List User's Subscription Group - SMS

<a id="opIdlistUser'sSubscriptionGroupSms"></a>

> Code samples

```bash
curl https://example.com/subscription/user/status
```

`GET /subscription/user/status`

Use the endpoint below to list and get the subscription groups of a certain user.

> If there are multiple users (multiple external ids) who share the same email address, all users will be returned as a separate user (even if they have the same email address or subscription group).

<h3 id="list-users-subscription-group---sms-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|external_id|query|string|false|(Required*) String<br><br>The external_id of the user. Must include at least one and at most 50 `external_ids`.|
|limit|query|string|false|(Optional) Integer<br><br>The limit on the maximum number of results returned. Default (and max) limit is 100.|
|offset|query|string|false|(Optional) Integer<br><br>Number of templates to skip before returning rest of the templates that fit the search criteria.|
|phone|query|string|false|(Required*) String<br><br>The phone number of the user (must include at least one phone number and at most 50 phone numbers). The recommendation is to provide this in the E.164 format.<br>|

<h3 id="list-users-subscription-group---sms-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="braze-endpoints-templates">Templates</h1>

## See Content Block Information

<a id="opIdseeContentBlockInformation"></a>

> Code samples

```bash
curl https://example.com/content_blocks/info
```

`GET /content_blocks/info`

This endpoint will call information for an existing Content Block.

### Successful Response Properties
```json
Content-Type: application/json
Authorization: Bearer YOUR_REST_API_KEY
{
  "content_block_id": "string",
  "name": "string",
  "content": "string",
  "description": "string",
  "content_type": "html or text",
  "tags":  "array of strings",
  "created_at": "time-in-iso",
  "last_edited": "time-in-iso",
  "inclusion_count" : "integer",
  "message": "success"
}
```

### Possible Errors
- `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.

- `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.

- `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.

- `Include Inclusion Data - error` - One of true or false is not provided.

<h3 id="see-content-block-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|content_block_id|query|string|false|(Required) String<br><br>The Content Block ID. This can be found by either listing Content Block information or going to the Developer Console, then API Settings, then scrolling to the bottom and searching for your Content Block API Identifier.|
|include_inclusion_data|query|string|false|(Optional) Boolean<br><br>When set to ‘true’, the API returns back the Message Variation API ID of Campaigns and Canvases where this content block is included, to be used in subsequent calls. The results exclude archived or deleted Campaigns or Canvases.|

<h3 id="see-content-block-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## List Available Content Blocks

<a id="opIdlistAvailableContentBlocks"></a>

> Code samples

```bash
curl https://example.com/content_blocks/list
```

`GET /content_blocks/list`

This endpoint will list existing Content Block information.

### Successful Response Properties
```json
Content-Type: application/json
Authorization: Bearer YOUR_REST_API_KEY
{
  "count": "integer",
  "content_blocks": [
    {
      "content_block_id": "string",
      "name": "string",
      "content_type": "html or text",
      "liquid_tag": "string",
      "inclusion_count" : "integer",
      "created_at": "time-in-iso",
      "last_edited": "time-in-iso",
      "tags" : "array of strings"
    }
  ]
}
```

### Possible Errors
- `Modified after time is invalid.`
The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).

- `Modified before time is invalid.`
The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).

- `Modified after time must be earlier than or the same as modified before time.`

- `Content Block number limit is invalid.`
The `limit` parameter must be an integer (positive number) greater than 0.

- `Content Block number limit must be greater than 0.`
The `limit` parameter must be an integer (positive number) greater than 0.

- `Content Block number limit exceeds maximum of 1000.`
The `limit` parameter must be an integer (positive number) greater than 0.

- `Offset is invalid.`
The `offset` parameter must be an integer (positive number) greater than 0.

- `Offset must be greater than 0.`
The `offset` parameter must be an integer (positive number) greater than 0.

<h3 id="list-available-content-blocks-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modified_after|query|string|false|(Optional) String in ISO 8601<br><br>Retrieve only content blocks updated at or after the given time.|
|modified_before|query|string|false|(Optional) String in ISO 8601<br><br>Retrieve only content blocks updated at or before the given time.|
|limit|query|string|false|(Optional) Positive Number<br><br>Maximum number of content blocks to retrieve, default to 100 if not provided, maximum acceptable value is 1000.|
|offset|query|string|false|(Optional) Positive Number<br><br>Number of content blocks to skip before returning rest of the templates that fit the search criteria.|

<h3 id="list-available-content-blocks-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## See Email Template Information

<a id="opIdseeEmailTemplateInformation"></a>

> Code samples

```bash
curl https://example.com/templates/email/info
```

`GET /templates/email/info`

Use to get information on your email templates.

Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.

### Request Components
- [Template Identifier](https://www.braze.com/docs/api/identifier_types/)

<h3 id="see-email-template-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email_template_id|query|string|false|(Required) String<br><br>Your email template's API Identifier.|

<h3 id="see-email-template-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## List Available Email Templates

<a id="opIdlistAvailableEmailTemplates"></a>

> Code samples

```bash
curl https://example.com/templates/email/list
```

`GET /templates/email/list`

Use this endpoint to get a list of available templates in your Braze account.

Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.

### Successful Response Properties
```json
{
  "count": number of templates returned
  "templates": [template with the following properties]:
    "email_template_id": (string) your email template's API Identifier,
    "template_name": (string) the name of your email template,
    "created_at": (string, in ISO 8601),
    "updated_at": (string, in ISO 8601),
    "tags": (array of strings) tags appended to the template
}
  ```

<h3 id="list-available-email-templates-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|modified_after|query|string|false|(Optional) String in ISO 8601<br><br>Retrieve only templates updated at or after the given time.|
|modified_before|query|string|false|(Optional) String in ISO 8601<br><br>Retrieve only templates updated at or before the given time|
|limit|query|string|false|(Optional) Positive Number<br><br>Maximum number of templates to retrieve, default to 100 if not provided, maximum acceptable value is 1000.|
|offset|query|string|false|(Optional) Positive Number<br><br>Number of templates to skip before returning rest of the templates that fit the search criteria.|

<h3 id="list-available-email-templates-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
