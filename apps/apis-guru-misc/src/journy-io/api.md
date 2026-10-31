<h1 id="developer-documentation">Developer documentation v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

# Welcome

Implementing a new tool can be daunting, but it doesn't have to. You can implement journy.io in a few different ways to ensure it fits with the rest of your tech stack seamlessly.

We welcome your feedback, ideas and suggestions. We really want to make your life easier, so if we’re falling short or should be doing something different, we want to hear about it. Send us an email at [hi@journy.io](mailto:hi@journy.io) or reach out via the chat on our website or on our platform.

There are multiple ways you can send us data about users and accounts. We have both frontend and backend APIs, which can be used together at the same time.

If you already use [Segment](https://segment.com/), you can [get up and running with journy.io in seconds](https://help.journy.io/en/articles/6488307-the-segment-connector).

# Concepts

## Users

The most basic entity is a user, a specific individual that completed an interaction with your product.

We support multiple types of users, often differentiated by it's external ID prefix. E.g. In the case you are building an ordering app, there could easily be an administrator (who updates products and checks for orders) and the end-customers who place orders. One could have a typical ADM-XXXXXXXX ID, while the other would be referenced by USR-XXXXXXXXX.

## Accounts

In B2B SaaS, users can be part of multiple accounts. E.g. Imagine you're building a content scheduling app where an agency can manage the social media posts of their clients. Each client of the agency has its own account in the product.

If your app doesn't have the concept of a team or group of users, you can ignore accounts.

## Events

An event is a data point that represents an interaction between a user and/or an account; and your product. Events can represents any range of interactions. E.g. Every time a customer creates an invoice in an invoicing app. Actions like creating an invoice can be tracked as an event in journy.io.

It's critical to track events properly. You'll need to provide either an account ID, or a user ID, or both; when tracking an event. E.g. If a user updates his personal settings, you can omit the account ID as the event would not be related to any account. In a same logic, an account could get a 'suspend account' event (with account ID) from an internal process, whereas no user would be associated. In most cases, events will be associated to both 1 user and 1 account.

You can optionally pass extra details as metadata (e.g. amount of the invoice). This gets particarly powerfull when creating computed properties on those event metadata. E.g. Our above ordering app could send journy.io 'Place Order' events with metadata 'price', on which journy.io very easily would compute a total order value (for each account) for the last 30 days.

💡 Metadata does not update the properties of a user or account.

# Frontend vs backend

The best implementations we see employ a hybrid approach to maximize data quality while maintaining the flexibility to easily collect the data they need.

We recommend using our JavaScript snippet to track screen views and our backend API to sync users, sync accounts and track events.

When evaluating how to track a particular event, we suggest starting with server-side and only use frontend if it's not possible to collect purely server-side. This can be the case if you need to track interactions with your product that don't result in any natural server requests (such as a button click that opens a modal).

# Frontend

## Setup

💡 You can find the JavaScript snippet in the website settings in the connections view.

Copy the JavaScript snippet and place it in the head or body of your application.

The snippet automatically calls `journy("init", { ... })` and `journy("pageview")`.

## Identify user

💡 A user ID should be a robust, static, unique identifier that you recognize a user by in your own systems. Because these IDs are consistent across a customer’s lifetime, you should include a user ID in identify calls as often as you can. Ideally, the user ID should be a database ID.

💡 journy.io does not recommend using simple email addresses or usernames as user ID, as these can change over time. journy.io recommends that you use static IDs instead, so the IDs never change. When you use a static ID, you can still recognize the user in your analytics tools, even if the user changes their email address.

💡 The properties `full_name`, `first_name`, `last_name`, `phone` and `registered_at` will be used for creating contacts in destinations like Intercom, HubSpot, Salesforce, ...

`journy("identify")` allows you to identify the user that is currently using your product.

```ts
journy("identify", {
  // Email or user ID is required
  email: "john.doe@acme.com",
  // Unique identifier for the user in your database
  userId: "20",

  // Optional
  // Hash of the user ID using a backend secret
  // You can find the secret in the website settings
  // Recommended to prevent spoofing
  verification: "hash",

  // Optional
  properties: {
    full_name: "John Doe",
    // or
    first_name: "John",
    last_name: "Doe",

    phone: "123",
    registered_at: new Date(/* ... */),
    is_admin: true,
    key_with_empty_value: "",
    this_property_will_be_deleted: null,
  },
});
```

## Identify account

💡 An account ID should be a robust, static, unique identifier that you recognize an account by in your own systems. Ideally, the account ID should be a database ID.

💡 The properties `name`, `mrr`, `plan` and `registered_at` will be used to create companies in destinations like Intercom, HubSpot, Salesforce, ...

`journy("account")` allows you to identify the business account (i.e. organization) using your product.

```ts
journy("account", {
  // Required
  // Unique identifier for the account in your database
  accountId: "30",

  // Optional
  // Hash of the account ID using a backend secret
  // You can find the secret in the website settings
  // Recommended to prevent spoofing
  verification: "hash",

  // Optional
  properties: {
    name: "ACME, Inc",
    mrr: 399,
    plan: "Pro",
    registered_at: new Date(/* ... */),
    is_paying: true,
    key_with_empty_value: "",
    this_property_will_be_deleted: null,
  },
});
```

## Send page view

💡 In applications, we advise you to use screen views instead of page views.

The JavaScript snippet in the site settings includes a `pageview` by default.

```ts
journy("pageview");
```

If you have a B2B application, we recommend to set account ID for every page view that happens within the context of an account.

💡 An account ID should be a robust, static, unique identifier that you recognize an account by in your own systems. Ideally, the account ID should be a database ID.

```ts
journy("pageview", {
  accountId: "30",

  // Optional
  // Hash of the account ID using a backend secret
  // You can find the secret in the website settings
  // Recommended to prevent spoofing
  verification: "hash",
});
```

## Send screen view

In applications, we strongly advise you to use screen views instead of page views.

Page URLs in applications often include the account ID (e.g. https://app.acme.com/accountId/settings).

This makes it difficult to create signals, segments, ... based on those URLs.

That's what screen views solve. It allows you to set a name for the screen being viewed (e.g. Account settings).

```ts
journy("screen", { name: "Personal settings" });
```

If you have a B2B application, we recommend to set account ID for every screen view that happens within the context of an account.

Example: "Personal settings" would be without account ID, "Team settings" would be with account ID.

💡 An account ID should be a robust, static, unique identifier that you recognize an account by in your own systems. Ideally, the account ID should be a database ID.

```ts
journy("screen", {
  name: "Account settings",
  accountId: "30",

  // Optional
  // Hash of the account ID using a backend secret
  // You can find the secret in the website settings
  // Recommended to prevent spoofing
  verification: "hash",
});
```

## Trigger an event

💡 Use past tense for event names.

User events:

```js
journy("event", {
  // required
  name: "signed_in",

  // optional
  metadata: {
    key: "value",
  },
});
```

Account events:

💡 An account ID should be a robust, static, unique identifier that you recognize an account by in your own systems. Ideally, the account ID should be a database ID.

```js
journy("event", {
  // required
  name: "created_invoice",
  accountId: "30",

  // Optional
  // Hash of the account ID using a backend secret
  // You can find the secret in the website settings
  // Recommended to prevent spoofing
  verification: "hash",

  // optional
  metadata: {
    key: "value",
    amount: 100,
    allow_wire_transfer: true,
  },
});
```

## Identity verification

Identity verification ensures that one person can't impersonate another.

Identity verification requires you to add an hash (HMAC) (that you generate on your server using SHA256) to your installation snippet alongside your user ID and account ID.

journy.io won't accept requests for a logged-in user without a valid hash. The hash is calculated using a secret key, which you should never share. Without this secret key, no third party can send journy.io a valid hash for one of your users, so they can't impersonate your users.

This is optional but highly recommended.

You can enable identify verification in the website settings in the connections view.

```js
journy("identify", {
  userId: "userId",
  verification: "USER_ID_HMAC_VALUE_HERE"
})

journy("account", {
  accountId: "accountId",
  verification: "ACCOUNT_ID_HMAC_VALUE_HERE"
})

journy("event", {
  accountId: "accountId",
  verification: "ACCOUNT_ID_HMAC_VALUE_HERE"
})
```

### PHP

```php
<?php

hash_hmac(
  'sha256', // hash function
  id, // user or account ID
  'secret' // secret key (keep safe!)
);
```

### Node.js

```js
import { createHmac } from "crypto"

createHmac(
  "sha256", // hash function
  'secret' // secret key (keep safe!)
).update(id).digest("hex") // user or account ID
```

### Ruby

```ruby
OpenSSL::HMAC.hexdigest(
  'sha256', # hash function
  'secret', # secret key (keep safe!)
  id.to_s # user or account ID
)
```

### Python

```
import hmac
import hashlib

hmac.new(
  b'secret', # secret key (keep safe!)
  bytes(id, encoding='utf-8'), # user or account ID
  digestmod=hashlib.sha256 # hash function
).hexdigest()
```

## Single page application

You can use our JavaScript snippet inside single page applications.

You should call `journy("screen")` (or `journy("pageview")`) whenever a user in your application transitions to another page. You can do this by listening to router change events. The current page URL will always be resolved using `window.location.href`.

You can trigger events using `journy("event")` whenever you need to.

### Next.js

We built a demo app with Next.js. You can find the code [here](https://github.com/journy-io/js-sdk-demo-app).

This [component](https://github.com/journy-io/js-sdk-demo-app/blob/main/components/Journy.js) should be a great start.

You can use the `Script` component from Next.js to load the web snippet and call `init`.

Don't forget to listen on route changes. You can use the `useRouter` hook for that.

### React Router v6

You can use the [`useLocation`](https://reactrouter.com/docs/en/v6/api#uselocation) hook to listen for route changes:

```js
import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    journy("screen", { name: "name" });
    // or
    journy("pageview");
  }, [location]);

  return (
      // ...
  );
}
```

### Vue Router

You can use [`router.afterEach`](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks) to listen for route changes:

```js
const router = new VueRouter({ ... });

router.afterEach((to, from) => {
  journy("screen", { name: "name" });
  // or
  journy("pageview");
});
```

Note: We don't accept a page URL argument for `journy("pageview")`. The current page URL will always be resolved using `window.location.href`.

## TypeScript

We published an [npm package](https://www.npmjs.com/package/@journyio/web-types) with type definitions to enable type-safe usage of our JavaScript snippet. The code and documentation is available on [GitHub](https://github.com/journy-io/web-types).

## Localhost

By default a site doesn't allow page views from other domains than the registered domain. This makes it difficult to test your tracking implementation locally.

You can enable "Allow any domain" in the site settings to disable the domain check.

This will allow you to test the JavaScript snippet with localhost as hostname.

# Backend

The journy.io API is organized around REST. Our API has predictable resource-oriented URLs, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

The API is hosted on api.journy.io.

## Official SDKs

Our SDKs are designed to help you interact with our APIs with less friction. They are written in several different languages and help bridge the gap between your application and journy.io APIs. They take away the need to know the exact URL and HTTP method to use for each API call among other things leaving you more time to focus on making your application.

| Language   | Package                                                                        | Source code                                                                |
|------------|--------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| 💚 Node.js | [npm install @journyio/sdk ](https://www.npmjs.com/package/@journyio/sdk)      | [github.com/journy-io/js-sdk](https://github.com/journy-io/js-sdk)         |
| 🐘 PHP     | [composer require journy-io/sdk](https://packagist.org/packages/journy-io/sdk) | [github.com/journy-io/php-sdk](https://github.com/journy-io/php-sdk)       |
| 🐍 Python  | [pip install journyio-sdk](https://pypi.org/project/journyio-sdk/)             | [github.com/journy-io/python-sdk](https://github.com/journy-io/python-sdk) |
| 💎 Ruby    | Coming soon                                                                    | Coming soon                                                                |

Your favourite programming language not included? [Let us know!](mailto:hi@journy.io)

In the meanwhile, you can use [OpenAPI Generator](https://github.com/OpenAPITools/openapi-generator) to generate a client for your programming language.

## Authentication

The journy.io API uses API keys to authenticate requests. You can view and manage your API keys in the [connections screen](https://system.journy.io).

Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

For every request send to the API we expect a header `X-Api-Key` to be set with the API Key.

## Permissions

When creating an API Key in [the application](https://system.journy.io) you will have the choice to give permissions to an API Key (which you can change later on). These permissions restrict the API Key from different actions. When an API Key tries to perform a certain action it doesn't have the permissions for, you will receive a `401: Unauthorized` response.

## Rate limiting

To prevent abuse of the API there is a maximum throughput of 1800 requests per minute. If you need a higher throughput, please contact us.

To keep our platform healthy and stable, we'll block API keys that consistently hit our rate limits. Therefore, please consider taking this throughput into account.

In every response the headers `X-RateLimit-Limit` and `X-RateLimit-Remaining` will be set. The `X-RateLimit-Limit`-header will always contain the current limit of requests per minute. The `X-RateLimit-Remaining`-header will always contain the amount of requests you have left in the current sliding window.

💡 The client-side tracking uses different rate limits.

## Errors

journy.io uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g. a required parameter was omitted). Codes in the 5xx range indicate an error with journy.io's servers (these are rare).

When performing a `POST`- or `PUT`-request with a requestBody, or when including parameters, these parameters and fields will automatically be checked and validated against the API Spec. When any error occurs, you will get a response with an `errors`-field, structured as follows:

```json
{
  "errors": {
    "parameters": {
      "header": {
        "headerParameterName": "Describe what's wrong with the header parameter.",
        ...
      },
      "query": {
        "queryParameterName": "Describe what's wrong with the query parameter.",
        ...
      },
      "path": {
        "pathParameterName": "Describe what's wrong with the path parameter.",
        ...
      },
    },
    "fields": {
      "fieldName": "Describe what's wrong with the fieldName.",
      "object.fieldName": "Describe what's wrong with the fieldName of the included object.",
       ...
    }
  }
}
```

## Best practices

### Track accounts & users immediately on creation

When you create an account in your database, immediately sending data about that account to journy.io helps your team stay in sync. The same goes for users. Call [Upsert account](#operation/upsertAccount) as soon as possible, right after the account is first created in your database.

### Update account data daily

Not every account is active every day. But, you may have properties on the account that change through background processing. That's why we recommend updating every one of your accounts' data in a recurring daily process. This way, you know that your accounts are updated every day in journy.io.

## Changelog

### December 2021

[POST /events](#operation/trackJourneyEvent) will be moved to [POST /track](#operation/trackEvent). [POST /events](#operation/trackJourneyEvent) is deprecated and will be removed in the future.

Base URLs:

* <a href="https://api.journy.io">https://api.journy.io</a> - Production

<a href="https://www.journy.io/terms-of-use/">Terms of service</a>
Email: <a href="mailto:hi@journy.io">Support</a> 
Web: <a href="https://developers.journy.io">Support</a> 

<a href="https://help.journy.io">Help center</a>

<h1 id="developer-documentation-users">Users</h1>

Endpoints for creating, deleting or updating users.

## Link web activity to user

<a id="opIdlink"></a>

> Code samples

```bash
curl https://example.com/link \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "deviceId": "string",
    "identification": {
      "email": "user@example.com",
      "userId": "string"
    }
  }'
```

`POST /link`

💡 You don't need to use this endpoint if you use our JavaScript snippet in your application.

This endpoint is used to link web activity to a user in your application. This will help you discover which channels and campaigns work best.

When our JavaScript snippet is embedded on your website, blog or landing pages, a cookie named "__journey" will be set.

This will only work if your website and application are under the same top level domain.

Website, blog or landing pages
* www.my-domain.tld
* blog.my-domain.tld
* landing-page.my-domain.tld

Application
* app.my-domain.tld

The cookie on my-domain.tld will also be send to your app domain.

You should call this endpoint after the user succesfully logged in (so that you know the user's ID). Use the value of the cookie as device ID.

> Body parameter

```json
{
  "deviceId": "string",
  "identification": {
    "email": "user@example.com",
    "userId": "string"
  }
}
```

<h3 id="link-web-activity-to-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» deviceId|body|string(non-empty-string)|true|none|
|» identification|body|object|true|User identification requires a userId, email or both|
|» » email|body|string(email)|false|Email address of the user|
|» » userId|body|string(user-id)|false|Unique identifier for the user in your database|

> Example responses

> 201 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="link-web-activity-to-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Object was created|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="link-web-activity-to-user-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-RateLimit-Limit|integer||Request limit per minute.|
|201|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

## Delete user

<a id="opIddeleteUser"></a>

> Code samples

```bash
curl https://example.com/users \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "identification": {
      "email": "user@example.com",
      "userId": "string"
    }
  }'
```

`DELETE /users`

Endpoint to delete a user.

> Body parameter

```json
{
  "identification": {
    "email": "user@example.com",
    "userId": "string"
  }
}
```

<h3 id="delete-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» identification|body|object|true|User identification requires a userId, email or both|
|» » email|body|string(email)|false|Email address of the user|
|» » userId|body|string(user-id)|false|Unique identifier for the user in your database|

> Example responses

> 202 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="delete-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="delete-user-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|X-RateLimit-Limit|integer||Request limit per minute.|
|202|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update user

<a id="opIdupsertUser"></a>

> Code samples

```bash
curl https://example.com/users/upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "identification": {
      "email": "user@example.com",
      "userId": "string"
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /users/upsert`

Endpoint to create or update a user.

> Body parameter

```json
{
  "identification": {
    "email": "user@example.com",
    "userId": "string"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-or-update-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» identification|body|object|true|User identification requires a userId, email or both|
|» » email|body|string(email)|false|Email address of the user|
|» » userId|body|string(user-id)|false|Unique identifier for the user in your database|
|» properties|body|object|false|The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)|
|» » **additionalProperties**|body|string \| null \| boolean \| number \| [string(non-empty-string)]|false|none|
|» » » *oneOf*|body|string \| null|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|[string(non-empty-string)]|false|none|

> Example responses

> 201 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "User will be created or updated",
  "rejected": {
    "created_at": "Expected a date but found a boolean."
  }
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="create-or-update-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|User will be created|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="create-or-update-user-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|rejected|object|false|none|If validation fails, specifies property name and error description|
|» **additionalProperties**|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-RateLimit-Limit|integer||Request limit per minute.|
|201|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="developer-documentation-accounts">Accounts</h1>

Endpoints for creating, deleting or updating accounts.

## Delete account

<a id="opIddeleteAccount"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -X DELETE \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "identification": {
      "accountId": "string",
      "domain": "string"
    }
  }'
```

`DELETE /accounts`

Endpoint used to delete an account.

> Body parameter

```json
{
  "identification": {
    "accountId": "string",
    "domain": "string"
  }
}
```

<h3 id="delete-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» identification|body|object|true|Account identification requires an accountId, domain or both|
|» » accountId|body|string(account-id)|false|Unique identifier for the account in your database|
|» » domain|body|string(top-level-domain)|false|The domain associated with the account (e.g. acme-inc.com)|

> Example responses

> 202 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="delete-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|202|Accepted|Accepted|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="delete-account-responseschema">Response Schema</h3>

Status Code **202**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|202|X-RateLimit-Limit|integer||Request limit per minute.|
|202|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

## Create or update account

<a id="opIdupsertAccount"></a>

> Code samples

```bash
curl https://example.com/accounts/upsert \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "identification": {
      "accountId": "string",
      "domain": "string"
    },
    "properties": {
      "property1": "string",
      "property2": "string"
    }
  }'
```

`POST /accounts/upsert`

Endpoint used to create or update an account.

> Body parameter

```json
{
  "identification": {
    "accountId": "string",
    "domain": "string"
  },
  "properties": {
    "property1": "string",
    "property2": "string"
  }
}
```

<h3 id="create-or-update-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» identification|body|object|true|Account identification requires an accountId, domain or both|
|» » accountId|body|string(account-id)|false|Unique identifier for the account in your database|
|» » domain|body|string(top-level-domain)|false|The domain associated with the account (e.g. acme-inc.com)|
|» properties|body|object|false|The properties being set, possible values are strings, booleans, numbers and datetimes (ISO 8601)|
|» » **additionalProperties**|body|string \| null \| boolean \| number \| [string(non-empty-string)]|false|none|
|» » » *oneOf*|body|string \| null|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|[string(non-empty-string)]|false|none|

> Example responses

> 201 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "Account will be created or updated",
  "rejected": {
    "created_at": "Expected a date but found a boolean."
  }
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="create-or-update-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Account will be created|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="create-or-update-account-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|rejected|object|false|none|If validation fails, specifies the property name and error message|
|» **additionalProperties**|string|false|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-RateLimit-Limit|integer||Request limit per minute.|
|201|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

## Add users to an account

<a id="opIdaddUserToAccount"></a>

> Code samples

```bash
curl https://example.com/accounts/users/add \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": {
      "accountId": "string",
      "domain": "string"
    },
    "users": [
      {
        "identification": {
          "email": "user@example.com",
          "userId": "string"
        }
      }
    ]
  }'
```

`POST /accounts/users/add`

You can add up to 100 users to an account.

> Body parameter

```json
{
  "account": {
    "accountId": "string",
    "domain": "string"
  },
  "users": [
    {
      "identification": {
        "email": "user@example.com",
        "userId": "string"
      }
    }
  ]
}
```

<h3 id="add-users-to-an-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» account|body|object|true|Account identification requires an accountId, domain or both|
|» » accountId|body|string(account-id)|false|Unique identifier for the account in your database|
|» » domain|body|string(top-level-domain)|false|The domain associated with the account (e.g. acme-inc.com)|
|» users|body|[object]|true|none|
|» » identification|body|object|true|User identification requires a userId, email or both|
|» » » email|body|string(email)|false|Email address of the user|
|» » » userId|body|string(user-id)|false|Unique identifier for the user in your database|

> Example responses

> 201 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="add-users-to-an-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Object was created|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="add-users-to-an-account-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-RateLimit-Limit|integer||Request limit per minute.|
|201|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

## Remove user from account

<a id="opIdremoveUserFromAccount"></a>

> Code samples

```bash
curl https://example.com/accounts/users/remove \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": {
      "accountId": "string",
      "domain": "string"
    },
    "users": [
      {
        "identification": {
          "email": "user@example.com",
          "userId": "string"
        }
      }
    ]
  }'
```

`POST /accounts/users/remove`

You can remove up to 100 users from an account.

When removing a user, the user will still be stored in journy.io, but marked as "removed".


> Body parameter

```json
{
  "account": {
    "accountId": "string",
    "domain": "string"
  },
  "users": [
    {
      "identification": {
        "email": "user@example.com",
        "userId": "string"
      }
    }
  ]
}
```

<h3 id="remove-user-from-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» account|body|object|true|Account identification requires an accountId, domain or both|
|» » accountId|body|string(account-id)|false|Unique identifier for the account in your database|
|» » domain|body|string(top-level-domain)|false|The domain associated with the account (e.g. acme-inc.com)|
|» users|body|[object]|true|none|
|» » identification|body|object|true|User identification requires a userId, email or both|
|» » » email|body|string(email)|false|Email address of the user|
|» » » userId|body|string(user-id)|false|Unique identifier for the user in your database|

> Example responses

> 204 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="remove-user-from-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|No content|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="remove-user-from-account-responseschema">Response Schema</h3>

Status Code **204**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|204|X-RateLimit-Limit|integer||Request limit per minute.|
|204|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="developer-documentation-track">Track</h1>

Endpoints for tracking events.

## Track event

<a id="opIdtrackEvent"></a>

> Code samples

```bash
curl https://example.com/track \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "identification": {
      "account": {
        "accountId": "string",
        "domain": "string"
      },
      "user": {
        "email": "user@example.com",
        "userId": "string"
      }
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "triggeredAt": "string"
  }'
```

`POST /track`

Endpoint used to track an event for a user or an account.

> Body parameter

```json
{
  "identification": {
    "account": {
      "accountId": "string",
      "domain": "string"
    },
    "user": {
      "email": "user@example.com",
      "userId": "string"
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "triggeredAt": "string"
}
```

<h3 id="track-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» identification|body|object|true|Event identification requires a user, account or both|
|» » account|body|object|false|Account identification requires an accountId, domain or both|
|» » » accountId|body|string(account-id)|false|Unique identifier for the account in your database|
|» » » domain|body|string(top-level-domain)|false|The domain associated with the account (e.g. acme-inc.com)|
|» » user|body|object|false|User identification requires a userId, email or both|
|» » » email|body|string(email)|false|Email address of the user|
|» » » userId|body|string(user-id)|false|Unique identifier for the user in your database|
|» metadata|body|object|false|Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601)|
|» » **additionalProperties**|body|string \| boolean \| number \| string(datetime)|false|none|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|number|false|none|
|» » » *oneOf*|body|string(datetime)|false|none|
|» name|body|string(event-name)|true|none|
|» triggeredAt|body|string(datetime)|false|If left blank this defaults to the current datetime|

> Example responses

> 201 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="track-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Object was created|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="track-event-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-RateLimit-Limit|integer||Request limit per minute.|
|201|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="developer-documentation-properties">Properties</h1>

Endpoints for listing properties.

## Get account properties

<a id="opIdgetAccountProperties"></a>

> Code samples

```bash
curl https://example.com/properties/accounts \
  -H 'Accept: application/json'
```

`GET /properties/accounts`

Endpoint to list account properties.

> Example responses

> 200 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "data": [
    {
      "group": {
        "id": "string",
        "name": "string"
      },
      "isComputed": true,
      "label": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="get-account-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Properties|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="get-account-properties-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|data|[object]|true|none|none|
|» group|object|false|none|Property group details|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» isComputed|boolean|true|none|none|
|» label|string|true|none|none|
|» name|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

## Get user properties

<a id="opIdgetUserProperties"></a>

> Code samples

```bash
curl https://example.com/properties/users \
  -H 'Accept: application/json'
```

`GET /properties/users`

Endpoint to list user properties.

> Example responses

> 200 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "data": [
    {
      "group": {
        "id": "string",
        "name": "string"
      },
      "isComputed": true,
      "label": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="get-user-properties-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Properties|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="get-user-properties-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|data|[object]|true|none|none|
|» group|object|false|none|Property group details|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» isComputed|boolean|true|none|none|
|» label|string|true|none|none|
|» name|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="developer-documentation-events">Events</h1>

Endpoints for listing events.

## Get events

<a id="opIdgetEvents"></a>

> Code samples

```bash
curl https://example.com/events \
  -H 'Accept: application/json'
```

`GET /events`

Endpoint to list events.

> Example responses

> 200 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "data": [
    {
      "group": {
        "id": "string",
        "name": "string"
      },
      "id": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="get-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Events|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="get-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|data|[object]|true|none|none|
|» group|object|false|none|Event group details|
|» » id|string|true|none|none|
|» » name|string|true|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

## Track event

<a id="opIdtrackJourneyEvent"></a>

> Code samples

```bash
curl https://example.com/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "identification": {
      "account": {
        "accountId": "string",
        "domain": "string"
      },
      "user": {
        "email": "user@example.com",
        "userId": "string"
      }
    },
    "metadata": {
      "property1": "string",
      "property2": "string"
    },
    "name": "string",
    "triggeredAt": "string"
  }'
```

`POST /events`

<aside class="warning">
This operation is deprecated
</aside>

Endpoint used to track an event for a user or an account.

This endpoint is moved to [Track](#operation/trackEvent).

> Body parameter

```json
{
  "identification": {
    "account": {
      "accountId": "string",
      "domain": "string"
    },
    "user": {
      "email": "user@example.com",
      "userId": "string"
    }
  },
  "metadata": {
    "property1": "string",
    "property2": "string"
  },
  "name": "string",
  "triggeredAt": "string"
}
```

<h3 id="track-event-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» identification|body|object|true|Event identification requires a user, account or both|
|» » account|body|object|false|Account identification requires an accountId, domain or both|
|» » » accountId|body|string(account-id)|false|Unique identifier for the account in your database|
|» » » domain|body|string(top-level-domain)|false|The domain associated with the account (e.g. acme-inc.com)|
|» » user|body|object|false|User identification requires a userId, email or both|
|» » » email|body|string(email)|false|Email address of the user|
|» » » userId|body|string(user-id)|false|Unique identifier for the user in your database|
|» metadata|body|object|false|Event metadata, possible values are strings, booleans, numbers and datetimes (ISO 8601)|
|» » **additionalProperties**|body|string \| boolean \| number|false|none|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|boolean|false|none|
|» » » *oneOf*|body|number|false|none|
|» name|body|string(event-name)|true|none|
|» triggeredAt|body|string(datetime)|false|If left blank this defaults to the current datetime|

> Example responses

> 201 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="track-event-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|Created|Object was created|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="track-event-1-responseschema">Response Schema</h3>

Status Code **201**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|201|X-RateLimit-Limit|integer||Request limit per minute.|
|201|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="developer-documentation-segments">Segments</h1>

Endpoints for reading user and account segments

## Get account segments

<a id="opIdgetAccountSegments"></a>

> Code samples

```bash
curl https://example.com/segments/accounts \
  -H 'Accept: application/json'
```

`GET /segments/accounts`

Endpoint to list account segments.

> Example responses

> 200 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "data": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="get-account-segments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Segments|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="get-account-segments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|data|[object]|true|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

## Get user segments

<a id="opIdgetUserSegments"></a>

> Code samples

```bash
curl https://example.com/segments/users \
  -H 'Accept: application/json'
```

`GET /segments/users`

Endpoint to list user segments.

> Example responses

> 200 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "data": [
    {
      "id": "string",
      "name": "string"
    }
  ]
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="get-user-segments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User Segments|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="get-user-segments-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|data|[object]|true|none|none|
|» id|string|true|none|none|
|» name|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="developer-documentation-websites">Websites</h1>

Endpoints for managing websites.

## Get snippet for a website

<a id="opIdgetTrackingSnippet"></a>

> Code samples

```bash
curl 'https://example.com/tracking/snippet?domain=string' \
  -H 'Accept: application/json'
```

`GET /tracking/snippet`

Endpoint used to get a snippet for a website.

<h3 id="get-snippet-for-a-website-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|domain|query|string(domain)|true|The domain you want to receive a snippet for|

> Example responses

> 200 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "data": {
    "domain": "string",
    "snippet": "string"
  }
}
```

> 400 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string",
  "errors": {
    "fields": {
      "property1": "string",
      "property2": "string"
    },
    "parameters": {
      "header": {
        "property1": "string",
        "property2": "string"
      },
      "path": {
        "property1": "string",
        "property2": "string"
      },
      "query": {
        "property1": "string",
        "property2": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 404 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="get-snippet-for-a-website-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Snippet|Inline|
|400|Bad Request|Bad request, some fields or parameters are incorrect|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|404|Not Found|Not found|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="get-snippet-for-a-website-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|data|object|true|none|A snippet|
|» domain|string(domain)|true|none|none|
|» snippet|string|true|none|none|

Status Code **400**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|
|errors|object|true|none|Map that sums up all received values that seemed incorrect|
|» fields|object|false|none|All input fields that seemed incorrect|
|» » **additionalProperties**|string|false|none|none|
|» parameters|object|false|none|All query-, header- and path- parameters that seemed incorrect|
|» » header|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » path|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|
|» » query|object|false|none|none|
|» » » **additionalProperties**|string|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|400|X-RateLimit-Limit|integer||Request limit per minute.|
|400|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|404|X-RateLimit-Limit|integer||Request limit per minute.|
|404|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="developer-documentation-validation">Validation</h1>

Endpoints for validating API keys.

## Validate API key

<a id="opIdgetValidity"></a>

> Code samples

```bash
curl https://example.com/validate \
  -H 'Accept: application/json'
```

`GET /validate`

Endpoint used to test the validity and some basic information about a specific API Key.

> Example responses

> 200 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "data": {
    "permissions": [
      "string"
    ]
  }
}
```

> 401 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 403 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 429 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

> 500 Response

```json
{
  "meta": {
    "requestId": "string",
    "status": 0
  },
  "message": "string"
}
```

<h3 id="validate-api-key-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Key validation|Inline|
|401|Unauthorized|No API Key was provided or the key is not authorised to perform the action|Inline|
|403|Forbidden|The API Key provided is currently not enabled|Inline|
|429|Too Many Requests|Too many API requests were send|Inline|
|500|Internal Server Error|An unexpected error occurred|Inline|

<h3 id="validate-api-key-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|data|object|true|none|Validation of API Key|
|» permissions|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **429**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|meta|object|true|none|none|
|» requestId|string|true|none|none|
|» status|number|true|none|none|
|message|string|true|none|none|

### Response Headers

|Status|Header|Type|Format|Description|
|---|---|---|---|---|
|200|X-RateLimit-Limit|integer||Request limit per minute.|
|200|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|401|X-RateLimit-Limit|integer||Request limit per minute.|
|401|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|403|X-RateLimit-Limit|integer||Request limit per minute.|
|403|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|429|X-RateLimit-Limit|integer||Request limit per minute.|
|429|X-RateLimit-Remaining|integer||The number of requests left for the time window.|
|500|X-RateLimit-Limit|integer||Request limit per minute.|
|500|X-RateLimit-Remaining|integer||The number of requests left for the time window.|

<aside class="success">
This operation does not require authentication
</aside>
