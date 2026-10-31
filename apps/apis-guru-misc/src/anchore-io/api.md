<h1 id="anchore-engine-api-server">Anchore Engine API Server v0.1.20</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

This is the Anchore Engine API. Provides the primary external API for users of the service.

Base URLs:

* <a href="https://api.apis.guru/">https://api.apis.guru/</a>

* <a href="http://anchore.local">http://anchore.local</a>

Email: <a href="mailto:nurmi@anchore.com">nurmi@anchore.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="anchore-engine-api-server-subscriptions">Subscriptions</h1>

Subscription Management

## List all subscriptions

<a id="opIdlist_subscriptions"></a>

> Code samples

```bash
curl https://example.com/subscriptions \
  -H 'Accept: application/json'
```

`GET /subscriptions`

<h3 id="list-all-subscriptions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscription_key|query|string|false|filter only subscriptions matching key|
|subscription_type|query|string|false|filter only subscriptions matching type|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "subscription_id": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "subscription_value": "string",
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-all-subscriptions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription listing|[SubscriptionList](#schemasubscriptionlist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a subscription of a specific type

<a id="opIdadd_subscription"></a>

> Code samples

```bash
curl https://example.com/subscriptions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "subscription_key": "string",
    "subscription_type": "string",
    "subscription_value": "string"
  }'
```

`POST /subscriptions`

Create a new subscription to watch a tag and get notifications of changes

> Body parameter

```json
{
  "subscription_key": "string",
  "subscription_type": "string",
  "subscription_value": "string"
}
```

<h3 id="add-a-subscription-of-a-specific-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|
|body|body|[SubscriptionRequest](#schemasubscriptionrequest)|true|none|
|» subscription_key|body|string|false|none|
|» subscription_type|body|string|false|none|
|» subscription_value|body|string \| null|false|none|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "subscription_id": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "subscription_value": "string",
    "userId": "string"
  }
]
```

<h3 id="add-a-subscription-of-a-specific-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription add success|[SubscriptionList](#schemasubscriptionlist)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific subscription set

<a id="opIdget_subscription"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string \
  -H 'Accept: application/json'
```

`GET /subscriptions/{subscriptionId}`

<h3 id="get-a-specific-subscription-set-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "subscription_id": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "subscription_value": "string",
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-a-specific-subscription-set-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Filtered subscription list by type|[SubscriptionList](#schemasubscriptionlist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update an existing and specific subscription

<a id="opIdupdate_subscription"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "active": true,
    "subscription_value": "string"
  }'
```

`PUT /subscriptions/{subscriptionId}`

> Body parameter

```json
{
  "active": true,
  "subscription_value": "string"
}
```

<h3 id="update-an-existing-and-specific-subscription-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|
|body|body|[SubscriptionUpdate](#schemasubscriptionupdate)|true|none|
|» active|body|boolean|false|Toggle the subscription processing on or off|
|» subscription_value|body|string \| null|false|The new subscription value, e.g. the new tag to be subscribed to|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "subscription_id": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "subscription_value": "string",
    "userId": "string"
  }
]
```

<h3 id="update-an-existing-and-specific-subscription-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Subscription add success|[SubscriptionList](#schemasubscriptionlist)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete subscriptions of a specific type

<a id="opIddelete_subscription"></a>

> Code samples

```bash
curl https://example.com/subscriptions/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /subscriptions/{subscriptionId}`

<h3 id="delete-subscriptions-of-a-specific-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|subscriptionId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-subscriptions-of-a-specific-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete success|None|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-policies">Policies</h1>

Policy Management

## List policies

<a id="opIdlist_policies"></a>

> Code samples

```bash
curl https://example.com/policies \
  -H 'Accept: application/json'
```

`GET /policies`

List all saved policy bundles

<h3 id="list-policies-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|detail|query|boolean|false|Include policy bundle detail in the form of the full bundle content for each entry|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "created_at": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "policyId": "string",
    "policy_source": "string",
    "policybundle": {
      "blacklisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "comment": "string",
      "id": "string",
      "mappings": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "policy_id": "string",
          "policy_ids": [
            "string"
          ],
          "registry": "string",
          "repository": "string",
          "whitelist_ids": [
            "string"
          ]
        }
      ],
      "name": "string",
      "policies": [
        {
          "comment": "string",
          "id": "string",
          "name": "string",
          "rules": [
            {
              "action": "GO",
              "gate": "string",
              "id": "string",
              "params": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "trigger": "string"
            }
          ],
          "version": "string"
        }
      ],
      "version": "string",
      "whitelisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "whitelists": [
        {
          "comment": "string",
          "id": "string",
          "items": [
            {
              "expires_on": "1970-01-01T00:00:00Z",
              "gate": "string",
              "id": "string",
              "trigger_id": "string"
            }
          ],
          "name": "string",
          "version": "string"
        }
      ]
    },
    "userId": "string"
  }
]
```

<h3 id="list-policies-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy listing|[PolicyBundleList](#schemapolicybundlelist)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new policy

<a id="opIdadd_policy"></a>

> Code samples

```bash
curl https://example.com/policies \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "blacklisted_images": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "registry": "string",
        "repository": "string"
      }
    ],
    "comment": "string",
    "id": "string",
    "mappings": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "policy_id": "string",
        "policy_ids": [
          "string"
        ],
        "registry": "string",
        "repository": "string",
        "whitelist_ids": [
          "string"
        ]
      }
    ],
    "name": "string",
    "policies": [
      {
        "comment": "string",
        "id": "string",
        "name": "string",
        "rules": [
          {
            "action": "GO",
            "gate": "string",
            "id": "string",
            "params": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "trigger": "string"
          }
        ],
        "version": "string"
      }
    ],
    "version": "string",
    "whitelisted_images": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "registry": "string",
        "repository": "string"
      }
    ],
    "whitelists": [
      {
        "comment": "string",
        "id": "string",
        "items": [
          {
            "expires_on": "1970-01-01T00:00:00Z",
            "gate": "string",
            "id": "string",
            "trigger_id": "string"
          }
        ],
        "name": "string",
        "version": "string"
      }
    ]
  }'
```

`POST /policies`

Adds a new policy bundle to the system

> Body parameter

```json
{
  "blacklisted_images": [
    {
      "id": "string",
      "image": {
        "type": "tag",
        "value": "string"
      },
      "name": "string",
      "registry": "string",
      "repository": "string"
    }
  ],
  "comment": "string",
  "id": "string",
  "mappings": [
    {
      "id": "string",
      "image": {
        "type": "tag",
        "value": "string"
      },
      "name": "string",
      "policy_id": "string",
      "policy_ids": [
        "string"
      ],
      "registry": "string",
      "repository": "string",
      "whitelist_ids": [
        "string"
      ]
    }
  ],
  "name": "string",
  "policies": [
    {
      "comment": "string",
      "id": "string",
      "name": "string",
      "rules": [
        {
          "action": "GO",
          "gate": "string",
          "id": "string",
          "params": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "trigger": "string"
        }
      ],
      "version": "string"
    }
  ],
  "version": "string",
  "whitelisted_images": [
    {
      "id": "string",
      "image": {
        "type": "tag",
        "value": "string"
      },
      "name": "string",
      "registry": "string",
      "repository": "string"
    }
  ],
  "whitelists": [
    {
      "comment": "string",
      "id": "string",
      "items": [
        {
          "expires_on": "1970-01-01T00:00:00Z",
          "gate": "string",
          "id": "string",
          "trigger_id": "string"
        }
      ],
      "name": "string",
      "version": "string"
    }
  ]
}
```

<h3 id="add-a-new-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|
|body|body|[PolicyBundle](#schemapolicybundle)|true|none|
|» blacklisted_images|body|[[ImageSelectionRule](#schemaimageselectionrule)]|false|List of mapping rules that define which images should always result in a STOP/FAIL policy result regardless of policy content or presence in whitelisted_images|
|» comment|body|string|false|Description of the bundle, human readable|
|» id|body|string|true|Id of the bundle|
|» mappings|body|[[MappingRule](#schemamappingrule)]|true|Mapping rules for defining which policy and whitelist(s) to apply to an image based on a match of the image tag or id. Evaluated in order.|
|» name|body|string|false|Human readable name for the bundle|
|» policies|body|[[Policy](#schemapolicy)]|true|Policies which define the go/stop/warn status of an image using rule matches on image properties|
|» version|body|string|true|Version id for this bundle format|
|» whitelisted_images|body|[[ImageSelectionRule](#schemaimageselectionrule)]|false|List of mapping rules that define which images should always be passed (unless also on the blacklist), regardless of policy result.|
|» whitelists|body|[[Whitelist](#schemawhitelist)]|false|Whitelists which define which policy matches to disregard explicitly in the final policy decision|

> Example responses

> 200 Response

```json
{
  "active": true,
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "policyId": "string",
  "policy_source": "string",
  "policybundle": {
    "blacklisted_images": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "registry": "string",
        "repository": "string"
      }
    ],
    "comment": "string",
    "id": "string",
    "mappings": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "policy_id": "string",
        "policy_ids": [
          "string"
        ],
        "registry": "string",
        "repository": "string",
        "whitelist_ids": [
          "string"
        ]
      }
    ],
    "name": "string",
    "policies": [
      {
        "comment": "string",
        "id": "string",
        "name": "string",
        "rules": [
          {
            "action": "GO",
            "gate": "string",
            "id": "string",
            "params": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "trigger": "string"
          }
        ],
        "version": "string"
      }
    ],
    "version": "string",
    "whitelisted_images": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "registry": "string",
        "repository": "string"
      }
    ],
    "whitelists": [
      {
        "comment": "string",
        "id": "string",
        "items": [
          {
            "expires_on": "1970-01-01T00:00:00Z",
            "gate": "string",
            "id": "string",
            "trigger_id": "string"
          }
        ],
        "name": "string",
        "version": "string"
      }
    ]
  },
  "userId": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="add-a-new-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Saved bundle|[PolicyBundleRecord](#schemapolicybundlerecord)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get specific policy

<a id="opIdget_policy"></a>

> Code samples

```bash
curl https://example.com/policies/string \
  -H 'Accept: application/json'
```

`GET /policies/{policyId}`

Get the policy bundle content

<h3 id="get-specific-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyId|path|string|true|none|
|detail|query|boolean|false|Include policy bundle detail in the form of the full bundle content for each entry|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "created_at": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "policyId": "string",
    "policy_source": "string",
    "policybundle": {
      "blacklisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "comment": "string",
      "id": "string",
      "mappings": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "policy_id": "string",
          "policy_ids": [
            "string"
          ],
          "registry": "string",
          "repository": "string",
          "whitelist_ids": [
            "string"
          ]
        }
      ],
      "name": "string",
      "policies": [
        {
          "comment": "string",
          "id": "string",
          "name": "string",
          "rules": [
            {
              "action": "GO",
              "gate": "string",
              "id": "string",
              "params": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "trigger": "string"
            }
          ],
          "version": "string"
        }
      ],
      "version": "string",
      "whitelisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "whitelists": [
        {
          "comment": "string",
          "id": "string",
          "items": [
            {
              "expires_on": "1970-01-01T00:00:00Z",
              "gate": "string",
              "id": "string",
              "trigger_id": "string"
            }
          ],
          "name": "string",
          "version": "string"
        }
      ]
    },
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-specific-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list with a single fetched policy bundle record|[PolicyBundleList](#schemapolicybundlelist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update policy

<a id="opIdupdate_policy"></a>

> Code samples

```bash
curl https://example.com/policies/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "active": true,
    "created_at": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "policyId": "string",
    "policy_source": "string",
    "policybundle": {
      "blacklisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "comment": "string",
      "id": "string",
      "mappings": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "policy_id": "string",
          "policy_ids": [
            "string"
          ],
          "registry": "string",
          "repository": "string",
          "whitelist_ids": [
            "string"
          ]
        }
      ],
      "name": "string",
      "policies": [
        {
          "comment": "string",
          "id": "string",
          "name": "string",
          "rules": [
            {
              "action": "GO",
              "gate": "string",
              "id": "string",
              "params": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "trigger": "string"
            }
          ],
          "version": "string"
        }
      ],
      "version": "string",
      "whitelisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "whitelists": [
        {
          "comment": "string",
          "id": "string",
          "items": [
            {
              "expires_on": "1970-01-01T00:00:00Z",
              "gate": "string",
              "id": "string",
              "trigger_id": "string"
            }
          ],
          "name": "string",
          "version": "string"
        }
      ]
    },
    "userId": "string"
  }'
```

`PUT /policies/{policyId}`

Update/replace and existing policy

> Body parameter

```json
{
  "active": true,
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "policyId": "string",
  "policy_source": "string",
  "policybundle": {
    "blacklisted_images": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "registry": "string",
        "repository": "string"
      }
    ],
    "comment": "string",
    "id": "string",
    "mappings": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "policy_id": "string",
        "policy_ids": [
          "string"
        ],
        "registry": "string",
        "repository": "string",
        "whitelist_ids": [
          "string"
        ]
      }
    ],
    "name": "string",
    "policies": [
      {
        "comment": "string",
        "id": "string",
        "name": "string",
        "rules": [
          {
            "action": "GO",
            "gate": "string",
            "id": "string",
            "params": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "trigger": "string"
          }
        ],
        "version": "string"
      }
    ],
    "version": "string",
    "whitelisted_images": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "registry": "string",
        "repository": "string"
      }
    ],
    "whitelists": [
      {
        "comment": "string",
        "id": "string",
        "items": [
          {
            "expires_on": "1970-01-01T00:00:00Z",
            "gate": "string",
            "id": "string",
            "trigger_id": "string"
          }
        ],
        "name": "string",
        "version": "string"
      }
    ]
  },
  "userId": "string"
}
```

<h3 id="update-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyId|path|string|true|none|
|active|query|boolean|false|Mark policy as active|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|
|body|body|[PolicyBundleRecord](#schemapolicybundlerecord)|true|none|
|» active|body|boolean|false|True if the bundle is currently defined to be used automatically|
|» created_at|body|string(date-time)|false|none|
|» last_updated|body|string(date-time)|false|none|
|» policyId|body|string|false|The bundle's identifier|
|» policy_source|body|string|false|Source location of where the policy bundle originated|
|» policybundle|body|[PolicyBundle](#schemapolicybundle)|false|A bundle containing a set of policies, whitelists, and rules for mapping them to specific images|
|» userId|body|string|false|UserId of the user that owns the bundle|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "created_at": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "policyId": "string",
    "policy_source": "string",
    "policybundle": {
      "blacklisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "comment": "string",
      "id": "string",
      "mappings": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "policy_id": "string",
          "policy_ids": [
            "string"
          ],
          "registry": "string",
          "repository": "string",
          "whitelist_ids": [
            "string"
          ]
        }
      ],
      "name": "string",
      "policies": [
        {
          "comment": "string",
          "id": "string",
          "name": "string",
          "rules": [
            {
              "action": "GO",
              "gate": "string",
              "id": "string",
              "params": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "trigger": "string"
            }
          ],
          "version": "string"
        }
      ],
      "version": "string",
      "whitelisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "whitelists": [
        {
          "comment": "string",
          "id": "string",
          "items": [
            {
              "expires_on": "1970-01-01T00:00:00Z",
              "gate": "string",
              "id": "string",
              "trigger_id": "string"
            }
          ],
          "name": "string",
          "version": "string"
        }
      ]
    },
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="update-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|A list with a single updated policy bundle record|[PolicyBundleList](#schemapolicybundlelist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete policy

<a id="opIddelete_policy"></a>

> Code samples

```bash
curl https://example.com/policies/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /policies/{policyId}`

Delete the specified policy

<h3 id="delete-policy-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|policyId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 404 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-policy-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete success|None|
|404|Not Found|Policy not found to delete|[ApiErrorResponse](#schemaapierrorresponse)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-images">Images</h1>

Image Management

## List all visible images

<a id="opIdlist_images"></a>

> Code samples

```bash
curl https://example.com/images \
  -H 'Accept: application/json'
```

`GET /images`

List all images visible to the user

<h3 id="list-all-visible-images-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|history|query|boolean|false|Include image history in the response|
|fulltag|query|string|false|Full docker-pull string to filter results by (e.g. docker.io/library/nginx:latest, or myhost.com:5000/testimages:v1.1.1)|
|image_status|query|string|false|Filter by image_status value on the record. Default if omitted is 'active'.|
|analysis_status|query|string|false|Filter by analysis_status value on the record.|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|image_status|all|
|image_status|active|
|image_status|deleting|
|analysis_status|not_analyzed|
|analysis_status|analyzed|
|analysis_status|analyzing|
|analysis_status|analysis_failed|

> Example responses

> 200 Response

```json
[
  {
    "analysis_status": "not_analyzed",
    "annotations": {},
    "created_at": "1970-01-01T00:00:00Z",
    "imageDigest": "string",
    "image_content": {},
    "image_detail": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "dockerfile": "string",
        "fulldigest": "string",
        "fulltag": "string",
        "imageDigest": "string",
        "imageId": "string",
        "last_updated": "1970-01-01T00:00:00Z",
        "registry": "string",
        "repo": "string",
        "userId": "string"
      }
    ],
    "image_status": "active",
    "last_updated": "1970-01-01T00:00:00Z",
    "record_version": "string",
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-all-visible-images-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AnchoreImageList](#schemaanchoreimagelist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Submit a new image for analysis by the engine

<a id="opIdadd_image"></a>

> Code samples

```bash
curl https://example.com/images \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "annotations": {},
    "created_at": "1970-01-01T00:00:00Z",
    "digest": "string",
    "dockerfile": "string",
    "image_type": "string",
    "source": {
      "archive": {
        "digest": "string"
      },
      "digest": {
        "creation_timestamp_override": "1970-01-01T00:00:00Z",
        "dockerfile": "string",
        "pullstring": "string",
        "tag": "string"
      },
      "import": {
        "contents": {
          "dockerfile": "string",
          "image_config": "string",
          "manifest": "string",
          "packages": "string",
          "parent_manifest": "string"
        },
        "digest": "string",
        "local_image_id": "string",
        "operation_uuid": "string",
        "parent_digest": "string",
        "tags": [
          "docker.io/library/nginx:latest"
        ]
      },
      "tag": {
        "dockerfile": "string",
        "pullstring": "string"
      }
    },
    "tag": "string"
  }'
```

`POST /images`

Creates a new analysis task that is executed asynchronously

> Body parameter

```json
{
  "annotations": {},
  "created_at": "1970-01-01T00:00:00Z",
  "digest": "string",
  "dockerfile": "string",
  "image_type": "string",
  "source": {
    "archive": {
      "digest": "string"
    },
    "digest": {
      "creation_timestamp_override": "1970-01-01T00:00:00Z",
      "dockerfile": "string",
      "pullstring": "string",
      "tag": "string"
    },
    "import": {
      "contents": {
        "dockerfile": "string",
        "image_config": "string",
        "manifest": "string",
        "packages": "string",
        "parent_manifest": "string"
      },
      "digest": "string",
      "local_image_id": "string",
      "operation_uuid": "string",
      "parent_digest": "string",
      "tags": [
        "docker.io/library/nginx:latest"
      ]
    },
    "tag": {
      "dockerfile": "string",
      "pullstring": "string"
    }
  },
  "tag": "string"
}
```

<h3 id="submit-a-new-image-for-analysis-by-the-engine-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|force|query|boolean|false|Override any existing entry in the system|
|autosubscribe|query|boolean|false|Instruct engine to automatically begin watching the added tag for updates from registry|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|
|body|body|[ImageAnalysisRequest](#schemaimageanalysisrequest)|true|none|
|» annotations|body|object|false|Annotations to be associated with the added image in key/value form|
|» created_at|body|string(date-time)|false|Optional override of the image creation time, only honored when both tag and digest are also supplied  e.g. 2018-10-17T18:14:00Z. Deprecated in favor of the 'source' field|
|» digest|body|string|false|A digest string for an image, maybe a pull string or just a digest. e.g. nginx@sha256:123 or sha256:abc123. If a pull string, it must have same regisry/repo as the tag field. Deprecated in favor of the 'source' field|
|» dockerfile|body|string|false|Base64 encoded content of the dockerfile for the image, if available. Deprecated in favor of the 'source' field.|
|» image_type|body|string|false|Optional. The type of image this is adding, defaults to "docker". This can be ommitted until multiple image types are supported.|
|» source|body|[ImageSource](#schemaimagesource)|false|A set of analysis source types. Only one may be set in any given request.|
|» tag|body|string|false|Full pullable tag reference for image. e.g. docker.io/nginx:latest. Deprecated in favor of the 'source' field|

> Example responses

> 200 Response

```json
[
  {
    "analysis_status": "not_analyzed",
    "annotations": {},
    "created_at": "1970-01-01T00:00:00Z",
    "imageDigest": "string",
    "image_content": {},
    "image_detail": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "dockerfile": "string",
        "fulldigest": "string",
        "fulltag": "string",
        "imageDigest": "string",
        "imageId": "string",
        "last_updated": "1970-01-01T00:00:00Z",
        "registry": "string",
        "repo": "string",
        "userId": "string"
      }
    ],
    "image_status": "active",
    "last_updated": "1970-01-01T00:00:00Z",
    "record_version": "string",
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="submit-a-new-image-for-analysis-by-the-engine-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully added image to analysis queue|[AnchoreImageList](#schemaanchoreimagelist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Bulk mark images for deletion

<a id="opIddelete_images_async"></a>

> Code samples

```bash
curl 'https://example.com/images?imageDigests=string' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /images`

Delete analysis for image digests in the list asynchronously

<h3 id="bulk-mark-images-for-deletion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigests|query|[string]|true|none|
|force|query|boolean|false|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "detail": "string",
    "digest": "string",
    "status": "not_found"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="bulk-mark-images-for-deletion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[DeleteImageResponseList](#schemadeleteimageresponselist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Lookup image by docker imageId

<a id="opIdget_image_by_imageId"></a>

> Code samples

```bash
curl https://example.com/images/by_id/string \
  -H 'Accept: application/json'
```

`GET /images/by_id/{imageId}`

<h3 id="lookup-image-by-docker-imageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "analysis_status": "not_analyzed",
    "annotations": {},
    "created_at": "1970-01-01T00:00:00Z",
    "imageDigest": "string",
    "image_content": {},
    "image_detail": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "dockerfile": "string",
        "fulldigest": "string",
        "fulltag": "string",
        "imageDigest": "string",
        "imageId": "string",
        "last_updated": "1970-01-01T00:00:00Z",
        "registry": "string",
        "repo": "string",
        "userId": "string"
      }
    ],
    "image_status": "active",
    "last_updated": "1970-01-01T00:00:00Z",
    "record_version": "string",
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="lookup-image-by-docker-imageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image lookup success|[AnchoreImageList](#schemaanchoreimagelist)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete image by docker imageId

<a id="opIddelete_image_by_imageId"></a>

> Code samples

```bash
curl https://example.com/images/by_id/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /images/by_id/{imageId}`

<h3 id="delete-image-by-docker-imageid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|force|query|boolean|false|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "detail": "string",
  "digest": "string",
  "status": "not_found"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-image-by-docker-imageid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image deletion success|[DeleteImageResponse](#schemadeleteimageresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Check policy evaluation status for image

<a id="opIdget_image_policy_check_by_imageId"></a>

> Code samples

```bash
curl 'https://example.com/images/by_id/string/check?tag=string' \
  -H 'Accept: application/json'
```

`GET /images/by_id/{imageId}/check`

Get the policy evaluation for the given image

<h3 id="check-policy-evaluation-status-for-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|policyId|query|string|false|none|
|tag|query|string|true|none|
|detail|query|boolean|false|none|
|history|query|boolean|false|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {}
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="check-policy-evaluation-status-for-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy evaluation success|[PolicyEvaluationList](#schemapolicyevaluationlist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List image content types

<a id="opIdlist_image_content_by_imageid"></a>

> Code samples

```bash
curl https://example.com/images/by_id/string/content \
  -H 'Accept: application/json'
```

`GET /images/by_id/{imageId}/content`

<h3 id="list-image-content-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-image-content-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of specified type from the image|Inline|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<h3 id="list-image-content-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the content of an image by type files

<a id="opIdget_image_content_by_type_imageId_files"></a>

> Code samples

```bash
curl https://example.com/images/by_id/string/content/files \
  -H 'Accept: application/json'
```

`GET /images/by_id/{imageId}/content/files`

<h3 id="get-the-content-of-an-image-by-type-files-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "filename": "string",
      "gid": 0,
      "linkdest": "string",
      "mode": "string",
      "sha256": "string",
      "size": 0,
      "type": "string",
      "uid": 0
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-the-content-of-an-image-by-type-files-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of specified type from the image|[ContentFilesResponse](#schemacontentfilesresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the content of an image by type java

<a id="opIdget_image_content_by_type_imageId_javapackage"></a>

> Code samples

```bash
curl https://example.com/images/by_id/string/content/java \
  -H 'Accept: application/json'
```

`GET /images/by_id/{imageId}/content/java`

<h3 id="get-the-content-of-an-image-by-type-java-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "cpes": [
        "string"
      ],
      "implementation-version": "string",
      "location": "string",
      "maven-version": "string",
      "origin": "string",
      "package": "string",
      "specification-version": "string",
      "type": "string"
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-the-content-of-an-image-by-type-java-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of specified type from the image|[ContentJAVAPackageResponse](#schemacontentjavapackageresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the content of an image by type

<a id="opIdget_image_content_by_type_imageId"></a>

> Code samples

```bash
curl https://example.com/images/by_id/string/content/string \
  -H 'Accept: application/json'
```

`GET /images/by_id/{imageId}/content/{ctype}`

<h3 id="get-the-content-of-an-image-by-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|ctype|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "cpes": [
        "string"
      ],
      "license": "string",
      "licenses": [
        "string"
      ],
      "location": "string",
      "origin": "string",
      "package": "string",
      "size": "string",
      "type": "string",
      "version": "string"
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-the-content-of-an-image-by-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of specified type from the image|[ContentPackageResponse](#schemacontentpackageresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get vulnerability types

<a id="opIdget_image_vulnerability_types_by_imageId"></a>

> Code samples

```bash
curl https://example.com/images/by_id/string/vuln \
  -H 'Accept: application/json'
```

`GET /images/by_id/{imageId}/vuln`

<h3 id="get-vulnerability-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  "all"
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-vulnerability-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vulnerability listing for the image|Inline|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<h3 id="get-vulnerability-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get vulnerabilities by type

<a id="opIdget_image_vulnerabilities_by_type_imageId"></a>

> Code samples

```bash
curl https://example.com/images/by_id/string/vuln/string \
  -H 'Accept: application/json'
```

`GET /images/by_id/{imageId}/vuln/{vtype}`

<h3 id="get-vulnerabilities-by-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageId|path|string|true|none|
|vtype|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "imageDigest": "string",
  "vulnerabilities": [
    {
      "feed": "string",
      "feed_group": "string",
      "fix": "string",
      "nvd_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ],
      "package": "string",
      "package_cpe": "string",
      "package_name": "string",
      "package_path": "string",
      "package_type": "string",
      "package_version": "string",
      "severity": "string",
      "url": "string",
      "vendor_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ],
      "vuln": "string",
      "will_not_fix": true
    }
  ],
  "vulnerability_type": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-vulnerabilities-by-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vulnerability listing for the image|[VulnerabilityResponse](#schemavulnerabilityresponse)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get image metadata

<a id="opIdget_image"></a>

> Code samples

```bash
curl https://example.com/images/string \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}`

<h3 id="get-image-metadata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "analysis_status": "not_analyzed",
    "annotations": {},
    "created_at": "1970-01-01T00:00:00Z",
    "imageDigest": "string",
    "image_content": {},
    "image_detail": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "dockerfile": "string",
        "fulldigest": "string",
        "fulltag": "string",
        "imageDigest": "string",
        "imageId": "string",
        "last_updated": "1970-01-01T00:00:00Z",
        "registry": "string",
        "repo": "string",
        "userId": "string"
      }
    ],
    "image_status": "active",
    "last_updated": "1970-01-01T00:00:00Z",
    "record_version": "string",
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-image-metadata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image lookup success|[AnchoreImageList](#schemaanchoreimagelist)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete an image analysis

<a id="opIddelete_image"></a>

> Code samples

```bash
curl https://example.com/images/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /images/{imageDigest}`

<h3 id="delete-an-image-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|force|query|boolean|false|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "detail": "string",
  "digest": "string",
  "status": "not_found"
}
```

<h3 id="delete-an-image-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image deletion success|[DeleteImageResponse](#schemadeleteimageresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Check policy evaluation status for image

<a id="opIdget_image_policy_check"></a>

> Code samples

```bash
curl 'https://example.com/images/string/check?tag=string' \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/check`

Get the policy evaluation for the given image

<h3 id="check-policy-evaluation-status-for-image-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|policyId|query|string|false|none|
|tag|query|string|true|none|
|detail|query|boolean|false|none|
|history|query|boolean|false|none|
|interactive|query|boolean|false|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {}
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="check-policy-evaluation-status-for-image-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy evaluation success|[PolicyEvaluationList](#schemapolicyevaluationlist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List image content types

<a id="opIdlist_image_content"></a>

> Code samples

```bash
curl https://example.com/images/string/content \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/content`

<h3 id="list-image-content-types-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-image-content-types-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content listing for the image|Inline|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<h3 id="list-image-content-types-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the content of an image by type files

<a id="opIdget_image_content_by_type_files"></a>

> Code samples

```bash
curl https://example.com/images/string/content/files \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/content/files`

<h3 id="get-the-content-of-an-image-by-type-files-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "filename": "string",
      "gid": 0,
      "linkdest": "string",
      "mode": "string",
      "sha256": "string",
      "size": 0,
      "type": "string",
      "uid": 0
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-the-content-of-an-image-by-type-files-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of specified type from the image|[ContentFilesResponse](#schemacontentfilesresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the content of an image by type java

<a id="opIdget_image_content_by_type_javapackage"></a>

> Code samples

```bash
curl https://example.com/images/string/content/java \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/content/java`

<h3 id="get-the-content-of-an-image-by-type-java-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "cpes": [
        "string"
      ],
      "implementation-version": "string",
      "location": "string",
      "maven-version": "string",
      "origin": "string",
      "package": "string",
      "specification-version": "string",
      "type": "string"
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-the-content-of-an-image-by-type-java-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of specified type from the image|[ContentJAVAPackageResponse](#schemacontentjavapackageresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the content of an image by type malware

<a id="opIdget_image_content_by_type_malware"></a>

> Code samples

```bash
curl https://example.com/images/string/content/malware \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/content/malware`

<h3 id="get-the-content-of-an-image-by-type-malware-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "enabled": true,
      "findings": [
        {
          "path": "string",
          "signature": "string"
        }
      ],
      "metadata": {},
      "scanner": "string"
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-the-content-of-an-image-by-type-malware-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of specified type from the image|[ContentMalwareResponse](#schemacontentmalwareresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get the content of an image by type

<a id="opIdget_image_content_by_type"></a>

> Code samples

```bash
curl https://example.com/images/string/content/string \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/content/{ctype}`

<h3 id="get-the-content-of-an-image-by-type-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|ctype|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "content": [
    {
      "cpes": [
        "string"
      ],
      "license": "string",
      "licenses": [
        "string"
      ],
      "location": "string",
      "origin": "string",
      "package": "string",
      "size": "string",
      "type": "string",
      "version": "string"
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-the-content-of-an-image-by-type-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Content of specified type from the image|[ContentPackageResponse](#schemacontentpackageresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List image metadata types

<a id="opIdlist_image_metadata"></a>

> Code samples

```bash
curl https://example.com/images/string/metadata \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/metadata`

<h3 id="list-image-metadata-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-image-metadata-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metadata listing for the image|Inline|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<h3 id="list-image-metadata-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get the metadata of an image by type

<a id="opIdget_image_metadata_by_type"></a>

> Code samples

```bash
curl https://example.com/images/string/metadata/string \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/metadata/{mtype}`

<h3 id="get-the-metadata-of-an-image-by-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|mtype|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "imageDigest": "string",
  "metadata": null,
  "metadata_type": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-the-metadata-of-an-image-by-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Metadata of specified type from the image|[MetadataResponse](#schemametadataresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get image sbom in the native Anchore format

<a id="opIdget_image_sbom_native"></a>

> Code samples

```bash
curl https://example.com/images/string/sboms/native
```

`GET /images/{imageDigest}/sboms/native`

<h3 id="get-image-sbom-in-the-native-anchore-format-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

<h3 id="get-image-sbom-in-the-native-anchore-format-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image lookup success|Inline|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get vulnerability types

<a id="opIdget_image_vulnerability_types"></a>

> Code samples

```bash
curl https://example.com/images/string/vuln \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/vuln`

<h3 id="get-vulnerability-types-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  "all"
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-vulnerability-types-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vulnerability listing for the image|Inline|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<h3 id="get-vulnerability-types-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get vulnerabilities by type

<a id="opIdget_image_vulnerabilities_by_type"></a>

> Code samples

```bash
curl https://example.com/images/string/vuln/string \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/vuln/{vtype}`

<h3 id="get-vulnerabilities-by-type-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|vtype|path|string|true|none|
|force_refresh|query|boolean|false|none|
|vendor_only|query|boolean|false|Filter results to include only vulnerabilities that are not marked as invalid by upstream OS vendor data. When set to true, it will filter out all vulnerabilities where `will_not_fix` is False. If false all vulnerabilities are returned regardless of `will_not_fix`|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "imageDigest": "string",
  "vulnerabilities": [
    {
      "feed": "string",
      "feed_group": "string",
      "fix": "string",
      "nvd_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ],
      "package": "string",
      "package_cpe": "string",
      "package_name": "string",
      "package_path": "string",
      "package_type": "string",
      "package_version": "string",
      "severity": "string",
      "url": "string",
      "vendor_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ],
      "vuln": "string",
      "will_not_fix": true
    }
  ],
  "vulnerability_type": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-vulnerabilities-by-type-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vulnerability listing for the image|[VulnerabilityResponse](#schemavulnerabilityresponse)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-registries">Registries</h1>

Registry Management

## List configured registries

<a id="opIdlist_registries"></a>

> Code samples

```bash
curl https://example.com/registries \
  -H 'Accept: application/json'
```

`GET /registries`

List all configured registries the system can/will watch

<h3 id="list-configured-registries-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "last_upated": "1970-01-01T00:00:00Z",
    "registry": "string",
    "registry_name": "string",
    "registry_type": "string",
    "registry_user": "string",
    "registry_verify": true,
    "userId": "string"
  }
]
```

<h3 id="list-configured-registries-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Registry listing|[RegistryConfigurationList](#schemaregistryconfigurationlist)|

<aside class="success">
This operation does not require authentication
</aside>

## Add a new registry

<a id="opIdcreate_registry"></a>

> Code samples

```bash
curl https://example.com/registries \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "registry": "string",
    "registry_name": "string",
    "registry_pass": "string",
    "registry_type": "string",
    "registry_user": "string",
    "registry_verify": true
  }'
```

`POST /registries`

Adds a new registry to the system

> Body parameter

```json
{
  "registry": "string",
  "registry_name": "string",
  "registry_pass": "string",
  "registry_type": "string",
  "registry_user": "string",
  "registry_verify": true
}
```

<h3 id="add-a-new-registry-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|validate|query|boolean|false|flag to determine whether or not to validate registry/credential at registry add time|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|
|body|body|[RegistryConfigurationRequest](#schemaregistryconfigurationrequest)|true|none|
|» registry|body|string|false|hostname:port string for accessing the registry, as would be used in a docker pull operation. May include some or all of a repository and wildcards (e.g. docker.io/library/* or gcr.io/myproject/myrepository)|
|» registry_name|body|string|false|human readable name associated with registry record|
|» registry_pass|body|string|false|Password portion of credential to use for this registry|
|» registry_type|body|string|false|Type of registry|
|» registry_user|body|string|false|Username portion of credential to use for this registry|
|» registry_verify|body|boolean|false|Use TLS/SSL verification for the registry URL|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "last_upated": "1970-01-01T00:00:00Z",
    "registry": "string",
    "registry_name": "string",
    "registry_type": "string",
    "registry_user": "string",
    "registry_verify": true,
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="add-a-new-registry-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Saved registry configuration|[RegistryConfigurationList](#schemaregistryconfigurationlist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific registry configuration

<a id="opIdget_registry"></a>

> Code samples

```bash
curl https://example.com/registries/string \
  -H 'Accept: application/json'
```

`GET /registries/{registry}`

Get information on a specific registry

<h3 id="get-a-specific-registry-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registry|path|string(path)|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "last_upated": "1970-01-01T00:00:00Z",
    "registry": "string",
    "registry_name": "string",
    "registry_type": "string",
    "registry_user": "string",
    "registry_verify": true,
    "userId": "string"
  }
]
```

<h3 id="get-a-specific-registry-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Registry configuration|[RegistryConfigurationList](#schemaregistryconfigurationlist)|

<aside class="success">
This operation does not require authentication
</aside>

## Update/replace a registry configuration

<a id="opIdupdate_registry"></a>

> Code samples

```bash
curl https://example.com/registries/string \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "registry": "string",
    "registry_name": "string",
    "registry_pass": "string",
    "registry_type": "string",
    "registry_user": "string",
    "registry_verify": true
  }'
```

`PUT /registries/{registry}`

Replaces an existing registry record with the given record

> Body parameter

```json
{
  "registry": "string",
  "registry_name": "string",
  "registry_pass": "string",
  "registry_type": "string",
  "registry_user": "string",
  "registry_verify": true
}
```

<h3 id="updatereplace-a-registry-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registry|path|string(path)|true|none|
|validate|query|boolean|false|flag to determine whether or not to validate registry/credential at registry update time|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|
|body|body|[RegistryConfigurationRequest](#schemaregistryconfigurationrequest)|true|none|
|» registry|body|string|false|hostname:port string for accessing the registry, as would be used in a docker pull operation. May include some or all of a repository and wildcards (e.g. docker.io/library/* or gcr.io/myproject/myrepository)|
|» registry_name|body|string|false|human readable name associated with registry record|
|» registry_pass|body|string|false|Password portion of credential to use for this registry|
|» registry_type|body|string|false|Type of registry|
|» registry_user|body|string|false|Username portion of credential to use for this registry|
|» registry_verify|body|boolean|false|Use TLS/SSL verification for the registry URL|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "last_upated": "1970-01-01T00:00:00Z",
    "registry": "string",
    "registry_name": "string",
    "registry_type": "string",
    "registry_user": "string",
    "registry_verify": true,
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="updatereplace-a-registry-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated registry configuration|[RegistryConfigurationList](#schemaregistryconfigurationlist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a registry configuration

<a id="opIddelete_registry"></a>

> Code samples

```bash
curl https://example.com/registries/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /registries/{registry}`

Delete a registry configuration record from the system. Does not remove any images.

<h3 id="delete-a-registry-configuration-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|registry|path|string(path)|true|none|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-a-registry-configuration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete success|None|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-repository-credentials">Repository Credentials</h1>

Repository Credential Management

## Add repository to watch

<a id="opIdadd_repository"></a>

> Code samples

```bash
curl 'https://example.com/repositories?repository=string' \
  -X POST \
  -H 'Accept: application/json'
```

`POST /repositories`

<h3 id="add-repository-to-watch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|repository|query|string|true|full repository to add e.g. docker.io/library/alpine|
|autosubscribe|query|boolean|false|flag to enable/disable auto tag_update activation when new images from a repo are added|
|dryrun|query|boolean|false|flag to return tags in the repository without actually watching the repository, default is false|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  {
    "active": true,
    "subscription_id": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "subscription_value": "string",
    "userId": "string"
  }
]
```

<h3 id="add-repository-to-watch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Repository and discovered tags added|[SubscriptionList](#schemasubscriptionlist)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-system">System</h1>

System Management

## Service status

<a id="opIdget_status"></a>

> Code samples

```bash
curl https://example.com/status \
  -H 'Accept: application/json'
```

`GET /status`

Get the API service status

> Example responses

> 200 Response

```json
{
  "available": true,
  "busy": true,
  "db_version": "string",
  "detail": {},
  "message": "string",
  "up": true,
  "version": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="service-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status listing|[StatusResponse](#schemastatusresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## System status

<a id="opIdget_service_detail"></a>

> Code samples

```bash
curl https://example.com/system \
  -H 'Accept: application/json'
```

`GET /system`

Get the system status including queue lengths

> Example responses

> 200 Response

```json
{
  "service_states": [
    {
      "base_url": "string",
      "hostid": "string",
      "service_detail": {
        "available": true,
        "busy": true,
        "db_version": "string",
        "detail": {},
        "message": "string",
        "up": true,
        "version": "string"
      },
      "servicename": "string",
      "status": true,
      "status_message": "string",
      "version": "string"
    }
  ]
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="system-status-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Status listing|[SystemStatusResponse](#schemasystemstatusresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Describe anchore engine error codes.

<a id="opIddescribe_error_codes"></a>

> Code samples

```bash
curl https://example.com/system/error_codes \
  -H 'Accept: application/json'
```

`GET /system/error_codes`

Describe anchore engine error codes.

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "name": "string"
  }
]
```

<h3 id="describe-anchore-engine-error-codes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Error Codes Description|Inline|

<h3 id="describe-anchore-engine-error-codes-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[AnchoreErrorCode](#schemaanchoreerrorcode)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## list feeds operations and information

<a id="opIdget_system_feeds"></a>

> Code samples

```bash
curl https://example.com/system/feeds \
  -H 'Accept: application/json'
```

`GET /system/feeds`

Return a list of feed and their groups along with update and record count information. This data reflects the state of the policy engine, not the upstream feed service itself.

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "groups": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "last_sync": "1970-01-01T00:00:00Z",
        "name": "string",
        "record_count": 0
      }
    ],
    "last_full_sync": "1970-01-01T00:00:00Z",
    "name": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-feeds-operations-and-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|Inline|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<h3 id="list-feeds-operations-and-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FeedMetadata](#schemafeedmetadata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## trigger feeds operations

<a id="opIdpost_system_feeds"></a>

> Code samples

```bash
curl https://example.com/system/feeds \
  -X POST \
  -H 'Accept: application/json'
```

`POST /system/feeds`

Execute a synchronous feed sync operation. The response will block until complete, then return the result summary.

<h3 id="trigger-feeds-operations-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|flush|query|boolean|false|instruct system to flush existing data feeds records from anchore-engine|
|sync|query|boolean|false|instruct system to re-sync data feeds|

> Example responses

> 200 Response

```json
[
  {
    "feed": "string",
    "groups": [
      {
        "group": "string",
        "status": "success",
        "total_time_seconds": 0,
        "updated_image_count": 0,
        "updated_record_count": 0
      }
    ],
    "status": "success",
    "total_time_seconds": 0
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="trigger-feeds-operations-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Feeds operation success|[FeedSyncResults](#schemafeedsyncresults)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## toggle_feed_enabled

<a id="opIdtoggle_feed_enabled"></a>

> Code samples

```bash
curl 'https://example.com/system/feeds/string?enabled=true' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /system/feeds/{feed}`

Disable the feed so that it does not sync on subsequent sync operations

<h3 id="togglefeedenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feed|path|string|true|none|
|enabled|query|boolean|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "groups": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "last_sync": "1970-01-01T00:00:00Z",
      "name": "string",
      "record_count": 0
    }
  ],
  "last_full_sync": "1970-01-01T00:00:00Z",
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

<h3 id="togglefeedenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|FeedInfo|[FeedMetadata](#schemafeedmetadata)|
|400|Bad Request|Bad request, fix and resend|None|
|500|Internal Server Error|Internal server error processing the request. Retry expected|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete_feed

<a id="opIddelete_feed"></a>

> Code samples

```bash
curl https://example.com/system/feeds/string \
  -X DELETE
```

`DELETE /system/feeds/{feed}`

Delete the groups and data for the feed and disable the feed itself

<h3 id="deletefeed-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feed|path|string|true|none|

<h3 id="deletefeed-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal server error processing the request. Retry expected|None|

<aside class="success">
This operation does not require authentication
</aside>

## toggle_group_enabled

<a id="opIdtoggle_group_enabled"></a>

> Code samples

```bash
curl 'https://example.com/system/feeds/string/string?enabled=true' \
  -X PUT \
  -H 'Accept: application/json'
```

`PUT /system/feeds/{feed}/{group}`

Disable a specific group within a feed to not sync

<h3 id="togglegroupenabled-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feed|path|string|true|none|
|group|path|string|true|none|
|enabled|query|boolean|true|none|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "groups": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "last_sync": "1970-01-01T00:00:00Z",
        "name": "string",
        "record_count": 0
      }
    ],
    "last_full_sync": "1970-01-01T00:00:00Z",
    "name": "string",
    "updated_at": "1970-01-01T00:00:00Z"
  }
]
```

<h3 id="togglegroupenabled-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|FeedInfo listing|Inline|
|400|Bad Request|Bad request, fix and resend|None|
|500|Internal Server Error|Internal server error processing the request. Retry expected|None|

<h3 id="togglegroupenabled-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[FeedMetadata](#schemafeedmetadata)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## delete_feed_group

<a id="opIddelete_feed_group"></a>

> Code samples

```bash
curl https://example.com/system/feeds/string/string \
  -X DELETE
```

`DELETE /system/feeds/{feed}/{group}`

Delete the group data and disable the group itself

<h3 id="deletefeedgroup-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|feed|path|string|true|none|
|group|path|string|true|none|

<h3 id="deletefeedgroup-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully deleted|None|
|404|Not Found|Not found|None|
|500|Internal Server Error|Internal server error processing the request. Retry expected|None|

<aside class="success">
This operation does not require authentication
</aside>

## Describe the policy language spec implemented by this service.

<a id="opIddescribe_policy"></a>

> Code samples

```bash
curl https://example.com/system/policy_spec \
  -H 'Accept: application/json'
```

`GET /system/policy_spec`

Get the policy language spec for this service

> Example responses

> 200 Response

```json
[
  {
    "description": "string",
    "name": "string",
    "state": "active",
    "superceded_by": "string",
    "triggers": [
      {
        "description": "string",
        "name": "string",
        "parameters": [
          {
            "description": "string",
            "example": "string",
            "name": "string",
            "required": true,
            "state": "active",
            "superceded_by": "string",
            "validator": {}
          }
        ],
        "state": "active",
        "superceded_by": "string"
      }
    ]
  }
]
```

<h3 id="describe-the-policy-language-spec-implemented-by-this-service-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Policy Language Description|Inline|

<h3 id="describe-the-policy-language-spec-implemented-by-this-service-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[GateSpec](#schemagatespec)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## List system services

<a id="opIdlist_services"></a>

> Code samples

```bash
curl https://example.com/system/services \
  -H 'Accept: application/json'
```

`GET /system/services`

> Example responses

> 200 Response

```json
[
  {
    "base_url": "string",
    "hostid": "string",
    "service_detail": {
      "available": true,
      "busy": true,
      "db_version": "string",
      "detail": {},
      "message": "string",
      "up": true,
      "version": "string"
    },
    "servicename": "string",
    "status": true,
    "status_message": "string",
    "version": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-system-services-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service listing|[ServiceList](#schemaservicelist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a service configuration and state

<a id="opIdget_services_by_name"></a>

> Code samples

```bash
curl https://example.com/system/services/string \
  -H 'Accept: application/json'
```

`GET /system/services/{servicename}`

<h3 id="get-a-service-configuration-and-state-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicename|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "base_url": "string",
    "hostid": "string",
    "service_detail": {
      "available": true,
      "busy": true,
      "db_version": "string",
      "detail": {},
      "message": "string",
      "up": true,
      "version": "string"
    },
    "servicename": "string",
    "status": true,
    "status_message": "string",
    "version": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-a-service-configuration-and-state-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Service Info|[ServiceList](#schemaservicelist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get service config for a specific host

<a id="opIdget_services_by_name_and_host"></a>

> Code samples

```bash
curl https://example.com/system/services/string/string \
  -H 'Accept: application/json'
```

`GET /system/services/{servicename}/{hostid}`

<h3 id="get-service-config-for-a-specific-host-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicename|path|string|true|none|
|hostid|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "base_url": "string",
    "hostid": "string",
    "service_detail": {
      "available": true,
      "busy": true,
      "db_version": "string",
      "detail": {},
      "message": "string",
      "up": true,
      "version": "string"
    },
    "servicename": "string",
    "status": true,
    "status_message": "string",
    "version": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-service-config-for-a-specific-host-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing of registered services|[ServiceList](#schemaservicelist)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the service config

<a id="opIddelete_service"></a>

> Code samples

```bash
curl https://example.com/system/services/string/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /system/services/{servicename}/{hostid}`

<h3 id="delete-the-service-config-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|servicename|path|string|true|none|
|hostid|path|string|true|none|

> Example responses

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-the-service-config-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete success|None|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Adds the capabilities to test a webhook delivery for the given notification type

<a id="opIdtest_webhook"></a>

> Code samples

```bash
curl https://example.com/system/webhooks/string/test \
  -X POST \
  -H 'Accept: application/json'
```

`POST /system/webhooks/{webhook_type}/test`

Loads the Webhook configuration for webhook_type, and sends the notification out as a test

<h3 id="adds-the-capabilities-to-test-a-webhook-delivery-for-the-given-notification-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|webhook_type|path|string|true|The Webhook Type that we should test|
|notification_type|query|string|false|What kind of Notification to send|

#### Enumerated Values

|Parameter|Value|
|---|---|
|notification_type|tag_update|
|notification_type|analysis_update|
|notification_type|vuln_update|
|notification_type|policy_eval|

> Example responses

> 400 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="adds-the-capabilities-to-test-a-webhook-delivery-for-the-given-notification-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|The Webhook was sent successfully. Schemas may be found under Models (PolicyEvalNotification, TagUpdateNotification, VulnUpdateNotification, AnalysisUpdateNotification)|None|
|400|Bad Request|The Webhook failed to send due to misconfiguration|[ApiErrorResponse](#schemaapierrorresponse)|
|500|Internal Server Error|The Webhook failed to send due to an Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-summaries">Summaries</h1>

Resource Summaries

## List all visible image digests and tags

<a id="opIdlist_imagetags"></a>

> Code samples

```bash
curl https://example.com/summaries/imagetags \
  -H 'Accept: application/json'
```

`GET /summaries/imagetags`

List all image tags visible to the user

<h3 id="list-all-visible-image-digests-and-tags-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|image_status|query|[string]|false|Filter images in one or more states such as active, deleting. Defaults to active images only if unspecified|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|image_status|all|
|image_status|active|
|image_status|deleting|

> Example responses

> 200 Response

```json
[
  {
    "analysis_status": "string",
    "analyzed_at": 0,
    "created_at": 0,
    "fulltag": "string",
    "imageDigest": "string",
    "imageId": "string",
    "image_status": "string",
    "parentDigest": "string",
    "tag_detected_at": 0
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-all-visible-image-digests-and-tags-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[AnchoreImageTagSummaryList](#schemaanchoreimagetagsummarylist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-events">Events</h1>

View and delete events

## List Event Types

<a id="opIdlist_event_types"></a>

> Code samples

```bash
curl https://example.com/event_types \
  -H 'Accept: application/json'
```

`GET /event_types`

Returns list of event types in the category hierarchy

> Example responses

> 200 Response

```json
[
  {
    "category": "string",
    "description": "string",
    "subcategories": [
      {
        "description": "string",
        "events": [
          {
            "message": "string",
            "name": "string",
            "resource_type": "string",
            "type": "string"
          }
        ],
        "name": "string"
      }
    ]
  }
]
```

<h3 id="list-event-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of event types|[EventTypesList](#schemaeventtypeslist)|

<aside class="success">
This operation does not require authentication
</aside>

## List Events

<a id="opIdlist_events"></a>

> Code samples

```bash
curl https://example.com/events \
  -H 'Accept: application/json'
```

`GET /events`

Returns a paginated list of events in the descending order of their occurrence. Optional query parameters may be used for filtering results

<h3 id="list-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|source_servicename|query|string|false|Filter events by the originating service|
|source_hostid|query|string|false|Filter events by the originating host ID|
|event_type|query|string|false|Filter events by a prefix match on the event type (e.g. "user.image.")|
|resource_type|query|string|false|Filter events by the type of resource - tag, imageDigest, repository etc|
|resource_id|query|string|false|Filter events by the id of the resource|
|level|query|string|false|Filter events by the level - INFO or ERROR|
|since|query|string|false|Return events that occurred after the timestamp|
|before|query|string|false|Return events that occurred before the timestamp|
|page|query|integer|false|Pagination controls - return the nth page of results. Defaults to first page if left empty|
|limit|query|integer|false|Number of events in the result set. Defaults to 100 if left empty|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "item_count": 0,
  "next_page": true,
  "page": 0,
  "results": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "event": {
        "category": "string",
        "details": {},
        "level": "string",
        "message": "string",
        "resource": {
          "id": "string",
          "type": "string",
          "user_id": "string"
        },
        "source": {
          "base_url": "string",
          "hostid": "string",
          "request_id": "string",
          "servicename": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "type": "string"
      },
      "generated_uuid": "string"
    }
  ]
}
```

<h3 id="list-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Paginated list of event records and the next token|[EventsList](#schemaeventslist)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Events

<a id="opIddelete_events"></a>

> Code samples

```bash
curl https://example.com/events \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /events`

Delete all or a subset of events filtered using the optional query parameters

<h3 id="delete-events-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|before|query|string|false|Delete events that occurred before the timestamp|
|since|query|string|false|Delete events that occurred after the timestamp|
|level|query|string|false|Delete events that match the level - INFO or ERROR|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
[
  "string"
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-events-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of deleted event IDs|Inline|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<h3 id="delete-events-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[string]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Get Event

<a id="opIdget_event"></a>

> Code samples

```bash
curl https://example.com/events/string \
  -H 'Accept: application/json'
```

`GET /events/{eventId}`

Lookup an event by its event ID

<h3 id="get-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|Event ID of the event for lookup|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "event": {
    "category": "string",
    "details": {},
    "level": "string",
    "message": "string",
    "resource": {
      "id": "string",
      "type": "string",
      "user_id": "string"
    },
    "source": {
      "base_url": "string",
      "hostid": "string",
      "request_id": "string",
      "servicename": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z",
    "type": "string"
  },
  "generated_uuid": "string"
}
```

<h3 id="get-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Single event record|[EventResponse](#schemaeventresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete Event

<a id="opIddelete_event"></a>

> Code samples

```bash
curl https://example.com/events/string \
  -X DELETE
```

`DELETE /events/{eventId}`

Delete an event by its event ID

<h3 id="delete-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|eventId|path|string|true|Event ID of the event to be deleted|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

<h3 id="delete-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Delete success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-user-management">User Management</h1>

Manage Accounts, Users, and Credentials

## List user summaries. Only available to the system admin user.

<a id="opIdlist_accounts"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -H 'Accept: application/json'
```

`GET /accounts`

<h3 id="list-user-summaries-only-available-to-the-system-admin-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|state|query|string|false|Filter accounts by state|

#### Enumerated Values

|Parameter|Value|
|---|---|
|state|enabled|
|state|disabled|
|state|deleting|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "email": "string",
    "last_updated": "1970-01-01T00:00:00Z",
    "name": "string",
    "state": "enabled",
    "type": "user"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-user-summaries-only-available-to-the-system-admin-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Accound summary listing|[AccountList](#schemaaccountlist)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new user. Only avaialble to admin user.

<a id="opIdcreate_account"></a>

> Code samples

```bash
curl https://example.com/accounts \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string",
    "name": "string"
  }'
```

`POST /accounts`

> Body parameter

```json
{
  "email": "string",
  "name": "string"
}
```

<h3 id="create-a-new-user-only-avaialble-to-admin-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccountCreationRequest](#schemaaccountcreationrequest)|true|none|
|» email|body|string|false|An optional email to associate with the account for contact purposes|
|» name|body|string|true|The account name to use. This will identify the account and must be globally unique in the system.|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "email": "string",
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "state": "enabled",
  "type": "user"
}
```

> 409 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="create-a-new-user-only-avaialble-to-admin-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Account Record|[Account](#schemaaccount)|
|409|Conflict|Conflicting user information. User already exists.|[ApiErrorResponse](#schemaapierrorresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get info about an user. Only available to admin user. Uses the main user Id, not a username.

<a id="opIdget_account"></a>

> Code samples

```bash
curl https://example.com/accounts/string \
  -H 'Accept: application/json'
```

`GET /accounts/{accountname}`

<h3 id="get-info-about-an-user-only-available-to-admin-user-uses-the-main-user-id-not-a-username-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "email": "string",
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "state": "enabled",
  "type": "user"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-info-about-an-user-only-available-to-admin-user-uses-the-main-user-id-not-a-username-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Get user information|[Account](#schemaaccount)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete the specified account, only allowed if the account is in the disabled state. All users will be deleted along with the account and all resources will be garbage collected

<a id="opIddelete_account"></a>

> Code samples

```bash
curl https://example.com/accounts/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /accounts/{accountname}`

<h3 id="delete-the-specified-account-only-allowed-if-the-account-is-in-the-disabled-state-all-users-will-be-deleted-along-with-the-account-and-all-resources-will-be-garbage-collected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|

> Example responses

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-the-specified-account-only-allowed-if-the-account-is-in-the-disabled-state-all-users-will-be-deleted-along-with-the-account-and-all-resources-will-be-garbage-collected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful deletion|None|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Update the state of an account to either enabled or disabled. For deletion use the DELETE route

<a id="opIdupdate_account_state"></a>

> Code samples

```bash
curl https://example.com/accounts/string/state \
  -X PUT \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "state": "enabled"
  }'
```

`PUT /accounts/{accountname}/state`

> Body parameter

```json
{
  "state": "enabled"
}
```

<h3 id="update-the-state-of-an-account-to-either-enabled-or-disabled-for-deletion-use-the-delete-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|
|body|body|[AccountStatus](#schemaaccountstatus)|true|none|
|» state|body|string|false|The status of the account|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» state|enabled|
|» state|disabled|

> Example responses

> 200 Response

```json
{
  "state": "enabled"
}
```

> 400 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="update-the-state-of-an-account-to-either-enabled-or-disabled-for-deletion-use-the-delete-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Updated state of the account|[AccountStatus](#schemaaccountstatus)|
|400|Bad Request|State requested is invalid based on current state of the account|[ApiErrorResponse](#schemaapierrorresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List accounts for the user

<a id="opIdlist_users"></a>

> Code samples

```bash
curl https://example.com/accounts/string/users \
  -H 'Accept: application/json'
```

`GET /accounts/{accountname}/users`

<h3 id="list-accounts-for-the-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "source": "string",
    "type": "native",
    "username": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-accounts-for-the-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User listing|Inline|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<h3 id="list-accounts-for-the-user-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[User](#schemauser)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a new user

<a id="opIdcreate_user"></a>

> Code samples

```bash
curl https://example.com/accounts/string/users \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "password": "string",
    "username": "string"
  }'
```

`POST /accounts/{accountname}/users`

> Body parameter

```json
{
  "password": "string",
  "username": "string"
}
```

<h3 id="create-a-new-user-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|
|body|body|[UserCreationRequest](#schemausercreationrequest)|true|none|
|» password|body|string|true|The initial password for the user, must be at least 6 characters, up to 128|
|» username|body|string|true|The username to create|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "source": "string",
  "type": "native",
  "username": "string"
}
```

<h3 id="create-a-new-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Credential summary|[User](#schemauser)|

<aside class="success">
This operation does not require authentication
</aside>

## Get a specific user in the specified account

<a id="opIdget_account_user"></a>

> Code samples

```bash
curl https://example.com/accounts/string/users/string \
  -H 'Accept: application/json'
```

`GET /accounts/{accountname}/users/{username}`

<h3 id="get-a-specific-user-in-the-specified-account-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "source": "string",
  "type": "native",
  "username": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-a-specific-user-in-the-specified-account-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User record|[User](#schemauser)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a specific user credential by username of the credential. Cannot be the credential used to authenticate the request.

<a id="opIddelete_user"></a>

> Code samples

```bash
curl https://example.com/accounts/string/users/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /accounts/{accountname}/users/{username}`

<h3 id="delete-a-specific-user-credential-by-username-of-the-credential-cannot-be-the-credential-used-to-authenticate-the-request-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|
|username|path|string|true|none|

> Example responses

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-a-specific-user-credential-by-username-of-the-credential-cannot-be-the-credential-used-to-authenticate-the-request-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Deleted credential|None|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get current credential summary

<a id="opIdlist_user_credentials"></a>

> Code samples

```bash
curl https://example.com/accounts/string/users/string/credentials \
  -H 'Accept: application/json'
```

`GET /accounts/{accountname}/users/{username}/credentials`

<h3 id="get-current-credential-summary-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|
|username|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "created_at": "string",
    "type": "password",
    "value": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-current-credential-summary-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User credential listing|[CredentialList](#schemacredentiallist)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## add/replace credential

<a id="opIdcreate_user_credential"></a>

> Code samples

```bash
curl https://example.com/accounts/string/users/string/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "created_at": "string",
    "type": "password",
    "value": "string"
  }'
```

`POST /accounts/{accountname}/users/{username}/credentials`

> Body parameter

```json
{
  "created_at": "string",
  "type": "password",
  "value": "string"
}
```

<h3 id="addreplace-credential-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|
|username|path|string|true|none|
|body|body|[AccessCredential](#schemaaccesscredential)|true|none|
|» created_at|body|string|false|The timestamp of creation of the credential|
|» type|body|string|true|The type of credential|
|» value|body|string|true|The credential value (e.g. the password)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|password|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "source": "string",
  "type": "native",
  "username": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="addreplace-credential-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Add a credential, overwritting if already exists|[User](#schemauser)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a credential by type

<a id="opIddelete_user_credential"></a>

> Code samples

```bash
curl 'https://example.com/accounts/string/users/string/credentials?credential_type=password' \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /accounts/{accountname}/users/{username}/credentials`

<h3 id="delete-a-credential-by-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|accountname|path|string|true|none|
|username|path|string|true|none|
|credential_type|query|string|true|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|credential_type|password|

> Example responses

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="delete-a-credential-by-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|No Content|Successful deletion|None|
|400|Bad Request|Conflict, cannot delete the credential used to authenticate this request|None|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-identity">Identity</h1>

Get and operate on the authenticated user's identity

## List the account for the authenticated user

<a id="opIdget_users_account"></a>

> Code samples

```bash
curl https://example.com/account \
  -H 'Accept: application/json'
```

`GET /account`

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "email": "string",
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "state": "enabled",
  "type": "user"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-the-account-for-the-authenticated-user-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User details for caller's user|[Account](#schemaaccount)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List authenticated user info

<a id="opIdget_user"></a>

> Code samples

```bash
curl https://example.com/user \
  -H 'Accept: application/json'
```

`GET /user`

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "source": "string",
  "type": "native",
  "username": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-authenticated-user-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User details for caller's user|[User](#schemauser)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get current credential summary

<a id="opIdget_credentials"></a>

> Code samples

```bash
curl https://example.com/user/credentials \
  -H 'Accept: application/json'
```

`GET /user/credentials`

> Example responses

> 200 Response

```json
[
  {
    "created_at": "string",
    "type": "password",
    "value": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="get-current-credential-summary-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|User credential listing|[CredentialList](#schemacredentiallist)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## add/replace credential

<a id="opIdadd_credential"></a>

> Code samples

```bash
curl https://example.com/user/credentials \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "created_at": "string",
    "type": "password",
    "value": "string"
  }'
```

`POST /user/credentials`

> Body parameter

```json
{
  "created_at": "string",
  "type": "password",
  "value": "string"
}
```

<h3 id="addreplace-credential-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AccessCredential](#schemaaccesscredential)|true|none|
|» created_at|body|string|false|The timestamp of creation of the credential|
|» type|body|string|true|The type of credential|
|» value|body|string|true|The credential value (e.g. the password)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|password|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "source": "string",
  "type": "native",
  "username": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="addreplace-credential-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Add a credential, overwritting if already exists|[User](#schemauser)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-archives">Archives</h1>

Data Archiving Management

## list_archives

<a id="opIdlist_archives"></a>

> Code samples

```bash
curl https://example.com/archives \
  -H 'Accept: application/json'
```

`GET /archives`

> Example responses

> 200 Response

```json
{
  "images": {
    "last_updated": "1970-01-01T00:00:00Z",
    "total_data_bytes": 0,
    "total_image_count": 0,
    "total_tag_count": 0
  },
  "rules": {
    "count": 0,
    "last_updated": "1970-01-01T00:00:00Z"
  }
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="listarchives-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive summary listing|[ArchiveSummary](#schemaarchivesummary)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## list_analysis_archive

<a id="opIdlist_analysis_archive"></a>

> Code samples

```bash
curl https://example.com/archives/images \
  -H 'Accept: application/json'
```

`GET /archives/images`

> Example responses

> 200 Response

```json
[
  {
    "analyzed_at": "1970-01-01T00:00:00Z",
    "annotations": {},
    "archive_size_bytes": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "imageDigest": "string",
    "image_detail": [
      {
        "detected_at": "1970-01-01T00:00:00Z",
        "pullstring": "string",
        "registry": "string",
        "repository": "string",
        "tag": "string"
      }
    ],
    "last_updated": "1970-01-01T00:00:00Z",
    "parentDigest": "string",
    "status": "archiving"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="listanalysisarchive-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image analysis archive listing for the requesting account (not the whole system)|[ArchivedAnalyses](#schemaarchivedanalyses)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## archive_image_analysis

<a id="opIdarchive_image_analysis"></a>

> Code samples

```bash
curl https://example.com/archives/images \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '[
    "string"
  ]'
```

`POST /archives/images`

> Body parameter

```json
[
  "string"
]
```

<h3 id="archiveimageanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ImageAnalysisReferences](#schemaimageanalysisreferences)|true|none|

> Example responses

> 200 Response

```json
[
  {
    "detail": "string",
    "digest": "string",
    "status": "archived"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="archiveimageanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive statuses|[AddAnalysisArchiveResult](#schemaaddanalysisarchiveresult)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## get_archived_analysis

<a id="opIdget_archived_analysis"></a>

> Code samples

```bash
curl https://example.com/archives/images/string \
  -H 'Accept: application/json'
```

`GET /archives/images/{imageDigest}`

Returns the archive metadata record identifying the image and tags for the analysis in the archive.

<h3 id="getarchivedanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|The image digest to identify the image analysis|

> Example responses

> 200 Response

```json
{
  "analyzed_at": "1970-01-01T00:00:00Z",
  "annotations": {},
  "archive_size_bytes": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "imageDigest": "string",
  "image_detail": [
    {
      "detected_at": "1970-01-01T00:00:00Z",
      "pullstring": "string",
      "registry": "string",
      "repository": "string",
      "tag": "string"
    }
  ],
  "last_updated": "1970-01-01T00:00:00Z",
  "parentDigest": "string",
  "status": "archiving"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="getarchivedanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archived Image|[ArchivedAnalysis](#schemaarchivedanalysis)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## delete_archived_analysis

<a id="opIddelete_archived_analysis"></a>

> Code samples

```bash
curl https://example.com/archives/images/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /archives/images/{imageDigest}`

Performs a synchronous archive deletion

<h3 id="deletearchivedanalysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|
|force|query|boolean|false|none|

> Example responses

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="deletearchivedanalysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|ArchivdImageAnalysis successfully deleted|None|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## list_analysis_archive_rules

<a id="opIdlist_analysis_archive_rules"></a>

> Code samples

```bash
curl https://example.com/archives/rules \
  -H 'Accept: application/json'
```

`GET /archives/rules`

<h3 id="listanalysisarchiverules-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|system_global|query|boolean|false|If true include system global rules (owned by admin) even for non-admin users. Defaults to true if not set. Can be set to false to exclude globals|

> Example responses

> 200 Response

```json
[
  {
    "analysis_age_days": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "exclude": {
      "expiration_days": -1,
      "selector": {
        "registry": "string",
        "repository": "string",
        "tag": "string"
      }
    },
    "last_updated": "1970-01-01T00:00:00Z",
    "max_images_per_account": 0,
    "rule_id": "string",
    "selector": {
      "registry": "string",
      "repository": "string",
      "tag": "string"
    },
    "system_global": true,
    "tag_versions_newer": 0,
    "transition": "archive"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="listanalysisarchiverules-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive transition rules|[AnalysisArchiveRules](#schemaanalysisarchiverules)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## create_analysis_archive_rule

<a id="opIdcreate_analysis_archive_rule"></a>

> Code samples

```bash
curl https://example.com/archives/rules \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "analysis_age_days": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "exclude": {
      "expiration_days": -1,
      "selector": {
        "registry": "string",
        "repository": "string",
        "tag": "string"
      }
    },
    "last_updated": "1970-01-01T00:00:00Z",
    "max_images_per_account": 0,
    "rule_id": "string",
    "selector": {
      "registry": "string",
      "repository": "string",
      "tag": "string"
    },
    "system_global": true,
    "tag_versions_newer": 0,
    "transition": "archive"
  }'
```

`POST /archives/rules`

> Body parameter

```json
{
  "analysis_age_days": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "exclude": {
    "expiration_days": -1,
    "selector": {
      "registry": "string",
      "repository": "string",
      "tag": "string"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "max_images_per_account": 0,
  "rule_id": "string",
  "selector": {
    "registry": "string",
    "repository": "string",
    "tag": "string"
  },
  "system_global": true,
  "tag_versions_newer": 0,
  "transition": "archive"
}
```

<h3 id="createanalysisarchiverule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AnalysisArchiveTransitionRule](#schemaanalysisarchivetransitionrule)|true|none|
|» analysis_age_days|body|integer|false|Matches if the analysis is strictly older than this number of days|
|» created_at|body|string(date-time)|false|none|
|» exclude|body|[AnalysisArchiveTransitionRuleExclude](#schemaanalysisarchivetransitionruleexclude)|false|Which Images to exclude from auto-archiving logic|
|» last_updated|body|string(date-time)|false|none|
|» max_images_per_account|body|integer|false|This is the maximum number of image analyses an account can have. Can only be set on system_global rules|
|» rule_id|body|string|false|Unique identifier for archive rule|
|» selector|body|[ImageSelector](#schemaimageselector)|false|A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field|
|» system_global|body|boolean|false|True if the rule applies to all accounts in the system. This is only available to admin users to update/modify, but all users with permission to list rules can see them|
|» tag_versions_newer|body|integer|false|Number of images mapped to the tag that are newer|
|» transition|body|string|true|The type of transition to make. If "archive", then archive an image from the working set and remove it from the working set. If "delete", then match against archived images and delete from the archive if match.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» transition|archive|
|» transition|delete|

> Example responses

> 200 Response

```json
{
  "analysis_age_days": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "exclude": {
    "expiration_days": -1,
    "selector": {
      "registry": "string",
      "repository": "string",
      "tag": "string"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "max_images_per_account": 0,
  "rule_id": "string",
  "selector": {
    "registry": "string",
    "repository": "string",
    "tag": "string"
  },
  "system_global": true,
  "tag_versions_newer": 0,
  "transition": "archive"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="createanalysisarchiverule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive transition rule|[AnalysisArchiveTransitionRule](#schemaanalysisarchivetransitionrule)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## get_analysis_archive_rule

<a id="opIdget_analysis_archive_rule"></a>

> Code samples

```bash
curl https://example.com/archives/rules/string \
  -H 'Accept: application/json'
```

`GET /archives/rules/{ruleId}`

<h3 id="getanalysisarchiverule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleId|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "analysis_age_days": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "exclude": {
    "expiration_days": -1,
    "selector": {
      "registry": "string",
      "repository": "string",
      "tag": "string"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "max_images_per_account": 0,
  "rule_id": "string",
  "selector": {
    "registry": "string",
    "repository": "string",
    "tag": "string"
  },
  "system_global": true,
  "tag_versions_newer": 0,
  "transition": "archive"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="getanalysisarchiverule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Archive transition rule|[AnalysisArchiveTransitionRule](#schemaanalysisarchivetransitionrule)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## delete_analysis_archive_rule

<a id="opIddelete_analysis_archive_rule"></a>

> Code samples

```bash
curl https://example.com/archives/rules/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /archives/rules/{ruleId}`

<h3 id="deleteanalysisarchiverule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ruleId|path|string|true|none|

> Example responses

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="deleteanalysisarchiverule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Analysis archive rule succesfuly deleted|None|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-default">Default</h1>

## ping

<a id="opIdping"></a>

> Code samples

```bash
curl https://example.com/ \
  -H 'Accept: application/json'
```

`GET /`

Simple status check

> Example responses

> 200 Response

```json
"string"
```

<h3 id="ping-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Version check response, returns the api version prefix (e.g. 'v1')|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## health_check

<a id="opIdhealth_check"></a>

> Code samples

```bash
curl https://example.com/health
```

`GET /health`

Health check, returns 200 and no body if service is running

<h3 id="healthcheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Empty body on success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of analyzer artifacts of the specified type

<a id="opIdlist_file_content_search_results"></a>

> Code samples

```bash
curl https://example.com/images/string/artifacts/file_content_search \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/artifacts/file_content_search`

<h3 id="return-a-list-of-analyzer-artifacts-of-the-specified-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "matches": [
      {
        "lines": [
          0
        ],
        "name": "string",
        "regex": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="return-a-list-of-analyzer-artifacts-of-the-specified-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of file metadata objects|[FileContentSearchList](#schemafilecontentsearchlist)|
|404|Not Found|Image not found in this service|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of analyzer artifacts of the specified type

<a id="opIdlist_retrieved_files"></a>

> Code samples

```bash
curl https://example.com/images/string/artifacts/retrieved_files \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/artifacts/retrieved_files`

<h3 id="return-a-list-of-analyzer-artifacts-of-the-specified-type-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "b64_content": "string",
    "path": "string"
  }
]
```

<h3 id="return-a-list-of-analyzer-artifacts-of-the-specified-type-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of file metadata objects|[RetrievedFileList](#schemaretrievedfilelist)|
|404|Not Found|Image not found in this service|None|

<aside class="success">
This operation does not require authentication
</aside>

## Return a list of analyzer artifacts of the specified type

<a id="opIdlist_secret_search_results"></a>

> Code samples

```bash
curl https://example.com/images/string/artifacts/secret_search \
  -H 'Accept: application/json'
```

`GET /images/{imageDigest}/artifacts/secret_search`

<h3 id="return-a-list-of-analyzer-artifacts-of-the-specified-type-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|imageDigest|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "matches": [
      {
        "lines": [
          0
        ],
        "name": "string",
        "regex": "string"
      }
    ],
    "path": "string"
  }
]
```

<h3 id="return-a-list-of-analyzer-artifacts-of-the-specified-type-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|List of file metadata objects|[SecretSearchList](#schemasecretsearchlist)|
|404|Not Found|Image not found in this service|None|

<aside class="success">
This operation does not require authentication
</aside>

## get_oauth_token

<a id="opIdget_oauth_token"></a>

> Code samples

```bash
curl https://example.com/oauth/token \
  -X POST \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Accept: application/json' \
  -d 'client_id=anonymous&grant_type=password&password=string&username=string'
```

`POST /oauth/token`

Request a jwt token for subsequent operations, this request is authenticated with normal HTTP auth

> Body parameter

```yaml
client_id: anonymous
grant_type: password
password: string
username: string
```

<h3 id="getoauthtoken-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» client_id|body|string|false|The type of client used for the OAuth token|
|» grant_type|body|string|false|OAuth Grant type for token|
|» password|body|string|false|Password for corresponding user|
|» username|body|string|false|User to assign OAuth token to|

> Example responses

> 200 Response

```json
{
  "token": "string"
}
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="getoauthtoken-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Resulting JWT token|[TokenResponse](#schematokenresponse)|
|500|Internal Server Error|Internal error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## version_check

<a id="opIdversion_check"></a>

> Code samples

```bash
curl https://example.com/version \
  -H 'Accept: application/json'
```

`GET /version`

Returns the version object for the service, including db schema version info

> Example responses

> 200 Response

```json
{
  "api": {
    "version": "string"
  },
  "db": {
    "schema_version": "string"
  },
  "service": {
    "version": "string"
  }
}
```

<h3 id="versioncheck-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Version object describing version state|[ServiceVersion](#schemaserviceversion)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-import">Import</h1>

## Import an anchore image tar.gz archive file. This is a deprecated API replaced by the &quot;/imports/images&quot; route

<a id="opIdimport_image_archive"></a>

> Code samples

```bash
curl https://example.com/import/images \
  -X POST \
  -H 'Accept: application/json' \
  -F 'archive_file=@/path/to/file'
```

`POST /import/images`

> Body parameter

```yaml
archive_file: string
```

<h3 id="import-an-anchore-image-targz-archive-file-this-is-a-deprecated-api-replaced-by-the-importsimages-route-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» archive_file|body|string(binary)|true|anchore image tar archive.|

> Example responses

> 200 Response

```json
[
  {
    "analysis_status": "not_analyzed",
    "annotations": {},
    "created_at": "1970-01-01T00:00:00Z",
    "imageDigest": "string",
    "image_content": {},
    "image_detail": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "dockerfile": "string",
        "fulldigest": "string",
        "fulltag": "string",
        "imageDigest": "string",
        "imageId": "string",
        "last_updated": "1970-01-01T00:00:00Z",
        "registry": "string",
        "repo": "string",
        "userId": "string"
      }
    ],
    "image_status": "active",
    "last_updated": "1970-01-01T00:00:00Z",
    "record_version": "string",
    "userId": "string"
  }
]
```

> 500 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="import-an-anchore-image-targz-archive-file-this-is-a-deprecated-api-replaced-by-the-importsimages-route-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successfully imported image to the engine|[AnchoreImageList](#schemaanchoreimagelist)|
|500|Internal Server Error|Internal Error|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-imports">Imports</h1>

## Lists in-progress imports

<a id="opIdlist_operations"></a>

> Code samples

```bash
curl https://example.com/imports/images \
  -H 'Accept: application/json'
```

`GET /imports/images`

> Example responses

> 200 Response

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "status": "pending",
    "uuid": "string"
  }
]
```

<h3 id="lists-in-progress-imports-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImports](#schemaimageimports)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Begin the import of an image analyzed by Syft into the system

<a id="opIdcreate_operation"></a>

> Code samples

```bash
curl https://example.com/imports/images \
  -X POST \
  -H 'Accept: application/json'
```

`POST /imports/images`

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "status": "pending",
  "uuid": "string"
}
```

<h3 id="begin-the-import-of-an-image-analyzed-by-syft-into-the-system-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImportOperation](#schemaimageimportoperation)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Get detail on a single import

<a id="opIdget_operation"></a>

> Code samples

```bash
curl https://example.com/imports/images/string \
  -H 'Accept: application/json'
```

`GET /imports/images/{operation_id}`

<h3 id="get-detail-on-a-single-import-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "status": "pending",
  "uuid": "string"
}
```

<h3 id="get-detail-on-a-single-import-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImportOperation](#schemaimageimportoperation)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Invalidate operation ID so it can be garbage collected

<a id="opIdinvalidate_operation"></a>

> Code samples

```bash
curl https://example.com/imports/images/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /imports/images/{operation_id}`

<h3 id="invalidate-operation-id-so-it-can-be-garbage-collected-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "status": "pending",
  "uuid": "string"
}
```

<h3 id="invalidate-operation-id-so-it-can-be-garbage-collected-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImportOperation](#schemaimageimportoperation)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List uploaded dockerfiles

<a id="opIdlist_import_dockerfiles"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/dockerfile \
  -H 'Accept: application/json'
```

`GET /imports/images/{operation_id}/dockerfile`

<h3 id="list-uploaded-dockerfiles-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-uploaded-dockerfiles-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImportContentDigestList](#schemaimportcontentdigestlist)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Begin the import of an image analyzed by Syft into the system

<a id="opIdimport_image_dockerfile"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/dockerfile \
  -X POST \
  -H 'Content-Type: text/plain; utf-8' \
  -H 'Accept: application/json' \
  -d 'string'
```

`POST /imports/images/{operation_id}/dockerfile`

> Body parameter

```text
string
```

<h3 id="begin-the-import-of-an-image-analyzed-by-syft-into-the-system-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|
|body|body|string|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "digest": "string"
}
```

<h3 id="begin-the-import-of-an-image-analyzed-by-syft-into-the-system-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImportContentResponse](#schemaimageimportcontentresponse)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List uploaded image configs

<a id="opIdlist_import_image_configs"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/image_config \
  -H 'Accept: application/json'
```

`GET /imports/images/{operation_id}/image_config`

<h3 id="list-uploaded-image-configs-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-uploaded-image-configs-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImportContentDigestList](#schemaimportcontentdigestlist)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Import a docker or OCI image config to associate with the image

<a id="opIdimport_image_config"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/image_config \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /imports/images/{operation_id}/image_config`

> Body parameter

```json
{}
```

<h3 id="import-a-docker-or-oci-image-config-to-associate-with-the-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "digest": "string"
}
```

<h3 id="import-a-docker-or-oci-image-config-to-associate-with-the-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImportContentResponse](#schemaimageimportcontentresponse)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List uploaded image manifests

<a id="opIdlist_import_image_manifests"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/manifest \
  -H 'Accept: application/json'
```

`GET /imports/images/{operation_id}/manifest`

<h3 id="list-uploaded-image-manifests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-uploaded-image-manifests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImportContentDigestList](#schemaimportcontentdigestlist)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Import a docker or OCI distribution manifest to associate with the image

<a id="opIdimport_image_manifest"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/manifest \
  -X POST \
  -H 'Content-Type: application/vnd.docker.distribution.manifest.v1+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /imports/images/{operation_id}/manifest`

> Body parameter

```json
{}
```

<h3 id="import-a-docker-or-oci-distribution-manifest-to-associate-with-the-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "digest": "string"
}
```

<h3 id="import-a-docker-or-oci-distribution-manifest-to-associate-with-the-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImportContentResponse](#schemaimageimportcontentresponse)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List uploaded package manifests

<a id="opIdlist_import_packages"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/packages \
  -H 'Accept: application/json'
```

`GET /imports/images/{operation_id}/packages`

<h3 id="list-uploaded-package-manifests-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-uploaded-package-manifests-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImportContentDigestList](#schemaimportcontentdigestlist)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Begin the import of an image analyzed by Syft into the system

<a id="opIdimport_image_packages"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/packages \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "artifactRelationships": [
      {
        "child": "string",
        "metadata": {},
        "parent": "string",
        "type": "string"
      }
    ],
    "artifacts": [
      {
        "cpes": [
          "string"
        ],
        "foundBy": "string",
        "id": "string",
        "language": "string",
        "licenses": [
          "string"
        ],
        "locations": [
          {
            "layerID": "string",
            "path": "string"
          }
        ],
        "metadata": {},
        "metadataType": "string",
        "name": "string",
        "purl": "string",
        "type": "string",
        "version": "string"
      }
    ],
    "descriptor": {
      "name": "string",
      "version": "string"
    },
    "distro": {
      "idLike": "string",
      "name": "string",
      "version": "string"
    },
    "schema": {
      "url": "string",
      "version": "string"
    },
    "source": {
      "target": null,
      "type": "string"
    }
  }'
```

`POST /imports/images/{operation_id}/packages`

> Body parameter

```json
{
  "artifactRelationships": [
    {
      "child": "string",
      "metadata": {},
      "parent": "string",
      "type": "string"
    }
  ],
  "artifacts": [
    {
      "cpes": [
        "string"
      ],
      "foundBy": "string",
      "id": "string",
      "language": "string",
      "licenses": [
        "string"
      ],
      "locations": [
        {
          "layerID": "string",
          "path": "string"
        }
      ],
      "metadata": {},
      "metadataType": "string",
      "name": "string",
      "purl": "string",
      "type": "string",
      "version": "string"
    }
  ],
  "descriptor": {
    "name": "string",
    "version": "string"
  },
  "distro": {
    "idLike": "string",
    "name": "string",
    "version": "string"
  },
  "schema": {
    "url": "string",
    "version": "string"
  },
  "source": {
    "target": null,
    "type": "string"
  }
}
```

<h3 id="begin-the-import-of-an-image-analyzed-by-syft-into-the-system-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|
|body|body|[ImagePackageManifest](#schemaimagepackagemanifest)|true|none|
|» artifactRelationships|body|[[ImportPackageRelationship](#schemaimportpackagerelationship)]|false|none|
|» artifacts|body|[[ImportPackage](#schemaimportpackage)]|true|none|
|» descriptor|body|[ImportDescriptor](#schemaimportdescriptor)|false|none|
|» distro|body|[ImportDistribution](#schemaimportdistribution)|true|none|
|» schema|body|[ImportSchema](#schemaimportschema)|false|none|
|» source|body|[ImportSource](#schemaimportsource)|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "digest": "string"
}
```

<h3 id="begin-the-import-of-an-image-analyzed-by-syft-into-the-system-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImportContentResponse](#schemaimageimportcontentresponse)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## List uploaded parent manifests (manifest lists for a tag)

<a id="opIdlist_import_parent_manifests"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/parent_manifest \
  -H 'Accept: application/json'
```

`GET /imports/images/{operation_id}/parent_manifest`

<h3 id="list-uploaded-parent-manifests-manifest-lists-for-a-tag-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  "string"
]
```

<h3 id="list-uploaded-parent-manifests-manifest-lists-for-a-tag-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImportContentDigestList](#schemaimportcontentdigestlist)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

## Import a docker or OCI distribution manifest list to associate with the image

<a id="opIdimport_image_parent_manifest"></a>

> Code samples

```bash
curl https://example.com/imports/images/string/parent_manifest \
  -X POST \
  -H 'Content-Type: application/vnd.docker.distribution.manifest.list.v2+json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /imports/images/{operation_id}/parent_manifest`

> Body parameter

```json
{}
```

<h3 id="import-a-docker-or-oci-distribution-manifest-list-to-associate-with-the-image-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|operation_id|path|string|true|none|
|body|body|object|true|none|

> Example responses

> 200 Response

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "digest": "string"
}
```

<h3 id="import-a-docker-or-oci-distribution-manifest-list-to-associate-with-the-image-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|success|[ImageImportContentResponse](#schemaimageimportcontentresponse)|
|500|Internal Server Error|Internal Error|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="anchore-engine-api-server-query">Query</h1>

## List of images containing given package

<a id="opIdquery_images_by_package"></a>

> Code samples

```bash
curl 'https://example.com/query/images/by_package?name=string' \
  -H 'Accept: application/json'
```

`GET /query/images/by_package`

Filterable query interface to search for images containing specified package

<h3 id="list-of-images-containing-given-package-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|query|string|true|Name of package to search for (e.g. sed)|
|package_type|query|string|false|Type of package to filter on (e.g. dpkg)|
|version|query|string|false|Version of named package to filter on (e.g. 4.4-1)|
|page|query|string|false|The page of results to fetch. Pages start at 1|
|limit|query|integer|false|Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "page": "string",
  "returned_count": 0,
  "images": [
    {
      "image": {
        "analyzed_at": "string",
        "digest": "string",
        "id": "string",
        "tag_history": [
          {
            "detected_at": "1970-01-01T00:00:00Z",
            "pullstring": "string",
            "registry": "string",
            "repository": "string",
            "tag": "string"
          }
        ]
      },
      "packages": [
        {
          "name": "string",
          "type": "string",
          "version": "string",
          "will_not_fix": true
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-of-images-containing-given-package-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image listing|[PaginatedImageList](#schemapaginatedimagelist)|
|400|Bad Request|Bad filter parameters|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List images vulnerable to the specific vulnerability ID.

<a id="opIdquery_images_by_vulnerability"></a>

> Code samples

```bash
curl 'https://example.com/query/images/by_vulnerability?vulnerability_id=string' \
  -H 'Accept: application/json'
```

`GET /query/images/by_vulnerability`

Returns a listing of images and their respective packages vulnerable to the given vulnerability ID

<h3 id="list-images-vulnerable-to-the-specific-vulnerability-id-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vulnerability_id|query|string|true|The ID of the vulnerability to search for within all images stored in anchore-engine (e.g. CVE-1999-0001)|
|namespace|query|string|false|Filter results to images within the given vulnerability namespace (e.g. debian:8, ubuntu:14.04)|
|affected_package|query|string|false|Filter results to images with vulnable packages with the given package name (e.g. libssl)|
|severity|query|string|false|Filter results to vulnerable package/vulnerability with the given severity|
|vendor_only|query|boolean|false|Filter results to include only vulnerabilities that are not marked as invalid by upstream OS vendor data|
|page|query|integer|false|The page of results to fetch. Pages start at 1|
|limit|query|integer|false|Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page|
|x-anchore-account|header|string|false|An account name to change the resource scope of the request to that account, if permissions allow (admin only)|

#### Enumerated Values

|Parameter|Value|
|---|---|
|severity|Unknown|
|severity|Negligible|
|severity|Low|
|severity|Medium|
|severity|High|
|severity|Critical|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "page": "string",
  "returned_count": 0,
  "images": [
    {
      "affected_packages": [
        {
          "name": "string",
          "namespace": "string",
          "severity": "string",
          "type": "string",
          "version": "string"
        }
      ],
      "image": {
        "analyzed_at": "string",
        "digest": "string",
        "id": "string",
        "tag_history": [
          {
            "detected_at": "1970-01-01T00:00:00Z",
            "pullstring": "string",
            "registry": "string",
            "repository": "string",
            "tag": "string"
          }
        ]
      }
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="list-images-vulnerable-to-the-specific-vulnerability-id-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Image lookup success|[PaginatedVulnerableImageList](#schemapaginatedvulnerableimagelist)|
|400|Bad Request|Invalid filter parameters|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Listing information about given vulnerability

<a id="opIdquery_vulnerabilities"></a>

> Code samples

```bash
curl 'https://example.com/query/vulnerabilities?id=string' \
  -H 'Accept: application/json'
```

`GET /query/vulnerabilities`

List (w/filters) vulnerability records known by the system, with affected packages information if present

<h3 id="listing-information-about-given-vulnerability-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|query|[string]|true|The ID of the vulnerability (e.g. CVE-1999-0001)|
|affected_package|query|string|false|Filter results by specified package name (e.g. sed)|
|affected_package_version|query|string|false|Filter results by specified package version (e.g. 4.4-1)|
|page|query|string|false|The page of results to fetch. Pages start at 1|
|limit|query|integer|false|Limit the number of records for the requested page. If omitted or set to 0, return all results in a single page|
|namespace|query|[string]|false|Namespace(s) to filter vulnerability records by|

> Example responses

> 200 Response

```json
{
  "next_page": "string",
  "page": "string",
  "returned_count": 0,
  "vulnerabilities": [
    {
      "affected_packages": [
        {
          "name": "string",
          "type": "string",
          "version": "string",
          "will_not_fix": true
        }
      ],
      "description": "string",
      "id": "string",
      "link": "string",
      "namespace": "string",
      "nvd_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ],
      "references": [
        {
          "source": "string",
          "tags": [
            "string"
          ],
          "url": "string"
        }
      ],
      "severity": "Unknown",
      "vendor_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ]
    }
  ]
}
```

> 400 Response

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

<h3 id="listing-information-about-given-vulnerability-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Vulnerability listing paginated|[PaginatedVulnerabilityList](#schemapaginatedvulnerabilitylist)|
|400|Bad Request|Invalid filter parameters|[ApiErrorResponse](#schemaapierrorresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessCredential">AccessCredential</h2>
<!-- backwards compatibility -->
<a id="schemaaccesscredential"></a>
<a id="schema_AccessCredential"></a>
<a id="tocSaccesscredential"></a>
<a id="tocsaccesscredential"></a>

```json
{
  "created_at": "string",
  "type": "password",
  "value": "string"
}
```

A login credential mapped to a user identity. For password credentials, the username to present for Basic auth is the user's username from the user record

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string|false|none|The timestamp of creation of the credential|
|type|string|true|none|The type of credential|
|value|string|true|none|The credential value (e.g. the password)|

#### Enumerated Values

|Property|Value|
|---|---|
|type|password|

<h2 id="tocS_Account">Account</h2>
<!-- backwards compatibility -->
<a id="schemaaccount"></a>
<a id="schema_Account"></a>
<a id="tocSaccount"></a>
<a id="tocsaccount"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "email": "string",
  "last_updated": "1970-01-01T00:00:00Z",
  "name": "string",
  "state": "enabled",
  "type": "user"
}
```

Account information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|The timestamp when the account was created|
|email|string|false|none|Optional email address associated with the account|
|last_updated|string(date-time)|false|none|The timestamp of the last update to the account metadata itself (not users or creds)|
|name|string|true|none|The account identifier, not updatable after creation|
|state|string|false|none|State of the account. Disabled accounts prevent member users from logging in, deleting accounts are disabled and pending deletion and will be removed once all owned resources are garbage collected by the system|
|type|string|false|none|The user type (admin vs user). If not specified in a POST request, 'user' is default|

#### Enumerated Values

|Property|Value|
|---|---|
|state|enabled|
|state|disabled|
|state|deleting|
|type|user|
|type|admin|
|type|service|

<h2 id="tocS_AccountCreationRequest">AccountCreationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaaccountcreationrequest"></a>
<a id="schema_AccountCreationRequest"></a>
<a id="tocSaccountcreationrequest"></a>
<a id="tocsaccountcreationrequest"></a>

```json
{
  "email": "string",
  "name": "string"
}
```

An account to create/add to the system. If already exists will return 400.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|An optional email to associate with the account for contact purposes|
|name|string|true|none|The account name to use. This will identify the account and must be globally unique in the system.|

<h2 id="tocS_AccountList">AccountList</h2>
<!-- backwards compatibility -->
<a id="schemaaccountlist"></a>
<a id="schema_AccountList"></a>
<a id="tocSaccountlist"></a>
<a id="tocsaccountlist"></a>

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "email": "string",
    "last_updated": "1970-01-01T00:00:00Z",
    "name": "string",
    "state": "enabled",
    "type": "user"
  }
]
```

<h2 id="tocS_AccountStatus">AccountStatus</h2>
<!-- backwards compatibility -->
<a id="schemaaccountstatus"></a>
<a id="schema_AccountStatus"></a>
<a id="tocSaccountstatus"></a>
<a id="tocsaccountstatus"></a>

```json
{
  "state": "enabled"
}
```

A summary of account status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|state|string|false|none|The status of the account|

#### Enumerated Values

|Property|Value|
|---|---|
|state|enabled|
|state|disabled|

<h2 id="tocS_AddAnalysisArchiveResult">AddAnalysisArchiveResult</h2>
<!-- backwards compatibility -->
<a id="schemaaddanalysisarchiveresult"></a>
<a id="schema_AddAnalysisArchiveResult"></a>
<a id="tocSaddanalysisarchiveresult"></a>
<a id="tocsaddanalysisarchiveresult"></a>

```json
[
  {
    "detail": "string",
    "digest": "string",
    "status": "archived"
  }
]
```

List of analysis archive add results

<h2 id="tocS_AnalysisArchiveAddResult">AnalysisArchiveAddResult</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisarchiveaddresult"></a>
<a id="schema_AnalysisArchiveAddResult"></a>
<a id="tocSanalysisarchiveaddresult"></a>
<a id="tocsanalysisarchiveaddresult"></a>

```json
{
  "detail": "string",
  "digest": "string",
  "status": "archived"
}
```

The result of adding a single digest to the archive

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|Details on the status, e.g. the error message|
|digest|string|false|none|The image digest requested to be added|
|status|string|false|none|The status of the archive add operation. Typically either 'archived' or 'error'|

#### Enumerated Values

|Property|Value|
|---|---|
|status|archived|
|status|archiving|
|status|error|

<h2 id="tocS_AnalysisArchiveRules">AnalysisArchiveRules</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisarchiverules"></a>
<a id="schema_AnalysisArchiveRules"></a>
<a id="tocSanalysisarchiverules"></a>
<a id="tocsanalysisarchiverules"></a>

```json
[
  {
    "analysis_age_days": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "exclude": {
      "expiration_days": -1,
      "selector": {
        "registry": "string",
        "repository": "string",
        "tag": "string"
      }
    },
    "last_updated": "1970-01-01T00:00:00Z",
    "max_images_per_account": 0,
    "rule_id": "string",
    "selector": {
      "registry": "string",
      "repository": "string",
      "tag": "string"
    },
    "system_global": true,
    "tag_versions_newer": 0,
    "transition": "archive"
  }
]
```

Rule set for automatic archiving of system objects and flushing of archived objects (permament delete).

<h2 id="tocS_AnalysisArchiveRulesSummary">AnalysisArchiveRulesSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisarchiverulessummary"></a>
<a id="schema_AnalysisArchiveRulesSummary"></a>
<a id="tocSanalysisarchiverulessummary"></a>
<a id="tocsanalysisarchiverulessummary"></a>

```json
{
  "count": 0,
  "last_updated": "1970-01-01T00:00:00Z"
}
```

Summary of the transition rule set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|The number of rules for this account|
|last_updated|string(date-time)|false|none|The newest last_updated timestamp from the set of rules|

<h2 id="tocS_AnalysisArchiveSource">AnalysisArchiveSource</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisarchivesource"></a>
<a id="schema_AnalysisArchiveSource"></a>
<a id="tocSanalysisarchivesource"></a>
<a id="tocsanalysisarchivesource"></a>

```json
{
  "digest": "string"
}
```

An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string|true|none|The image digest identify the analysis. Archived analyses are based on digest, tag records are restored as analysis is restored.|

<h2 id="tocS_AnalysisArchiveSummary">AnalysisArchiveSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisarchivesummary"></a>
<a id="schema_AnalysisArchiveSummary"></a>
<a id="tocSanalysisarchivesummary"></a>
<a id="tocsanalysisarchivesummary"></a>

```json
{
  "last_updated": "1970-01-01T00:00:00Z",
  "total_data_bytes": 0,
  "total_image_count": 0,
  "total_tag_count": 0
}
```

A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|last_updated|string(date-time)|false|none|The timestamp of the most recent archived image|
|total_data_bytes|integer|false|none|The total sum of all the bytes stored to the backing storage. Accounts for anchore-applied compression, but not compression by the underlying storage system.|
|total_image_count|integer|false|none|The number of unique images (digests) in the archive|
|total_tag_count|integer|false|none|The number of tag records (registry/repo:tag pull strings) in the archive. This may include repeated tags but will always have a unique tag->digest mapping per record.|

<h2 id="tocS_AnalysisArchiveTransitionHistory">AnalysisArchiveTransitionHistory</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisarchivetransitionhistory"></a>
<a id="schema_AnalysisArchiveTransitionHistory"></a>
<a id="tocSanalysisarchivetransitionhistory"></a>
<a id="tocsanalysisarchivetransitionhistory"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "imageDigest": "string",
  "last_updated": "1970-01-01T00:00:00Z",
  "rule_id": "string",
  "transition": "archive",
  "transition_task_id": "string"
}
```

A rule for auto-archiving image analysis by time and/or tag-history

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|imageDigest|string|false|none|none|
|last_updated|string(date-time)|false|none|none|
|rule_id|string|false|none|none|
|transition|string|false|none|none|
|transition_task_id|string|false|none|The task that created & updated this entry|

#### Enumerated Values

|Property|Value|
|---|---|
|transition|archive|
|transition|delete|

<h2 id="tocS_AnalysisArchiveTransitionRule">AnalysisArchiveTransitionRule</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisarchivetransitionrule"></a>
<a id="schema_AnalysisArchiveTransitionRule"></a>
<a id="tocSanalysisarchivetransitionrule"></a>
<a id="tocsanalysisarchivetransitionrule"></a>

```json
{
  "analysis_age_days": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "exclude": {
    "expiration_days": -1,
    "selector": {
      "registry": "string",
      "repository": "string",
      "tag": "string"
    }
  },
  "last_updated": "1970-01-01T00:00:00Z",
  "max_images_per_account": 0,
  "rule_id": "string",
  "selector": {
    "registry": "string",
    "repository": "string",
    "tag": "string"
  },
  "system_global": true,
  "tag_versions_newer": 0,
  "transition": "archive"
}
```

A rule for auto-archiving image analysis by time and/or tag-history

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysis_age_days|integer|false|none|Matches if the analysis is strictly older than this number of days|
|created_at|string(date-time)|false|none|none|
|exclude|[AnalysisArchiveTransitionRuleExclude](#schemaanalysisarchivetransitionruleexclude)|false|none|Which Images to exclude from auto-archiving logic|
|last_updated|string(date-time)|false|none|none|
|max_images_per_account|integer|false|none|This is the maximum number of image analyses an account can have. Can only be set on system_global rules|
|rule_id|string|false|none|Unique identifier for archive rule|
|selector|[ImageSelector](#schemaimageselector)|false|none|A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field|
|system_global|boolean|false|none|True if the rule applies to all accounts in the system. This is only available to admin users to update/modify, but all users with permission to list rules can see them|
|tag_versions_newer|integer|false|none|Number of images mapped to the tag that are newer|
|transition|string|true|none|The type of transition to make. If "archive", then archive an image from the working set and remove it from the working set. If "delete", then match against archived images and delete from the archive if match.|

#### Enumerated Values

|Property|Value|
|---|---|
|transition|archive|
|transition|delete|

<h2 id="tocS_AnalysisArchiveTransitionRuleExclude">AnalysisArchiveTransitionRuleExclude</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisarchivetransitionruleexclude"></a>
<a id="schema_AnalysisArchiveTransitionRuleExclude"></a>
<a id="tocSanalysisarchivetransitionruleexclude"></a>
<a id="tocsanalysisarchivetransitionruleexclude"></a>

```json
{
  "expiration_days": -1,
  "selector": {
    "registry": "string",
    "repository": "string",
    "tag": "string"
  }
}
```

Which Images to exclude from auto-archiving logic

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expiration_days|integer|false|none|How long the image selected will be excluded from the archive transition|
|selector|[ImageSelector](#schemaimageselector)|false|none|A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field|

<h2 id="tocS_AnalysisUpdateEval">AnalysisUpdateEval</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisupdateeval"></a>
<a id="schema_AnalysisUpdateEval"></a>
<a id="tocSanalysisupdateeval"></a>
<a id="tocsanalysisupdateeval"></a>

```json
{
  "analysis_status": "string",
  "annotations": {},
  "image_digest": "string"
}
```

Evaluation Results for an entity (current or last)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysis_status|string|false|none|none|
|annotations|object|false|none|none|
|image_digest|string|false|none|none|

<h2 id="tocS_AnalysisUpdateNotification">AnalysisUpdateNotification</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisupdatenotification"></a>
<a id="schema_AnalysisUpdateNotification"></a>
<a id="tocSanalysisupdatenotification"></a>
<a id="tocsanalysisupdatenotification"></a>

```json
{
  "created_at": 0,
  "dataId": "string",
  "last_updated": 0,
  "max_tries": 0,
  "queueId": "string",
  "record_state_key": "active",
  "record_state_val": "string",
  "tries": 0,
  "userId": "string",
  "data": {
    "notification_type": "string",
    "notification_user": "string",
    "notification_user_email": "string",
    "notification_payload": {
      "notificationId": "string",
      "subscription_key": "string",
      "subscription_type": "string",
      "userId": "string",
      "annotations": {},
      "curr_eval": {
        "analysis_status": "string",
        "annotations": {},
        "image_digest": "string"
      },
      "last_eval": {
        "analysis_status": "string",
        "annotations": {},
        "image_digest": "string"
      }
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|none|
|dataId|string|false|none|none|
|last_updated|integer|false|none|none|
|max_tries|integer|false|none|none|
|queueId|string|false|none|none|
|record_state_key|string|false|none|none|
|record_state_val|string \| null|false|none|none|
|tries|integer|false|none|none|
|userId|string|false|none|none|
|data|[AnalysisUpdateNotificationData](#schemaanalysisupdatenotificationdata)|false|none|none|

<h2 id="tocS_AnalysisUpdateNotificationData">AnalysisUpdateNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisupdatenotificationdata"></a>
<a id="schema_AnalysisUpdateNotificationData"></a>
<a id="tocSanalysisupdatenotificationdata"></a>
<a id="tocsanalysisupdatenotificationdata"></a>

```json
{
  "notification_type": "string",
  "notification_user": "string",
  "notification_user_email": "string",
  "notification_payload": {
    "notificationId": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "userId": "string",
    "annotations": {},
    "curr_eval": {
      "analysis_status": "string",
      "annotations": {},
      "image_digest": "string"
    },
    "last_eval": {
      "analysis_status": "string",
      "annotations": {},
      "image_digest": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification_type|string|false|none|none|
|notification_user|string|false|none|none|
|notification_user_email|string|false|none|none|
|notification_payload|[AnalysisUpdateNotificationPayload](#schemaanalysisupdatenotificationpayload)|false|none|none|

<h2 id="tocS_AnalysisUpdateNotificationPayload">AnalysisUpdateNotificationPayload</h2>
<!-- backwards compatibility -->
<a id="schemaanalysisupdatenotificationpayload"></a>
<a id="schema_AnalysisUpdateNotificationPayload"></a>
<a id="tocSanalysisupdatenotificationpayload"></a>
<a id="tocsanalysisupdatenotificationpayload"></a>

```json
{
  "notificationId": "string",
  "subscription_key": "string",
  "subscription_type": "string",
  "userId": "string",
  "annotations": {},
  "curr_eval": {
    "analysis_status": "string",
    "annotations": {},
    "image_digest": "string"
  },
  "last_eval": {
    "analysis_status": "string",
    "annotations": {},
    "image_digest": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationId|string|false|none|none|
|subscription_key|string|false|none|none|
|subscription_type|string|false|none|none|
|userId|string|false|none|none|
|annotations|object \| null|false|none|List of Corresponding Image Annotations|
|curr_eval|[AnalysisUpdateEval](#schemaanalysisupdateeval)|false|none|Evaluation Results for an entity (current or last)|
|last_eval|[AnalysisUpdateEval](#schemaanalysisupdateeval)|false|none|Evaluation Results for an entity (current or last)|

<h2 id="tocS_AnchoreErrorCode">AnchoreErrorCode</h2>
<!-- backwards compatibility -->
<a id="schemaanchoreerrorcode"></a>
<a id="schema_AnchoreErrorCode"></a>
<a id="tocSanchoreerrorcode"></a>
<a id="tocsanchoreerrorcode"></a>

```json
{
  "description": "string",
  "name": "string"
}
```

A description of an anchore error code (name, description)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the error code|
|name|string|false|none|Error code name|

<h2 id="tocS_AnchoreImage">AnchoreImage</h2>
<!-- backwards compatibility -->
<a id="schemaanchoreimage"></a>
<a id="schema_AnchoreImage"></a>
<a id="tocSanchoreimage"></a>
<a id="tocsanchoreimage"></a>

```json
{
  "analysis_status": "not_analyzed",
  "annotations": {},
  "created_at": "1970-01-01T00:00:00Z",
  "imageDigest": "string",
  "image_content": {},
  "image_detail": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "dockerfile": "string",
      "fulldigest": "string",
      "fulltag": "string",
      "imageDigest": "string",
      "imageId": "string",
      "last_updated": "1970-01-01T00:00:00Z",
      "registry": "string",
      "repo": "string",
      "userId": "string"
    }
  ],
  "image_status": "active",
  "last_updated": "1970-01-01T00:00:00Z",
  "record_version": "string",
  "userId": "string"
}
```

A unique image in the engine. May have multiple tags or references. Unique to an image content across registries or repositories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysis_status|string|false|none|A state value for the current status of the analysis progress of the image|
|annotations|object|false|none|none|
|created_at|string(date-time)|false|none|none|
|imageDigest|string|false|none|none|
|image_content|[ImageContent](#schemaimagecontent)|false|none|A metadata content record for a specific image, containing different content type entries|
|image_detail|[[ImageDetail](#schemaimagedetail)]|false|none|Details specific to an image reference and type such as tag and image source|
|image_status|string|false|none|State of the image|
|last_updated|string(date-time)|false|none|none|
|record_version|string|false|none|The version of the record, used for internal schema updates and data migrations.|
|userId|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|analysis_status|not_analyzed|
|analysis_status|analyzing|
|analysis_status|analyzed|
|analysis_status|analysis_failed|
|image_status|active|
|image_status|inactive|
|image_status|disabled|

<h2 id="tocS_AnchoreImageList">AnchoreImageList</h2>
<!-- backwards compatibility -->
<a id="schemaanchoreimagelist"></a>
<a id="schema_AnchoreImageList"></a>
<a id="tocSanchoreimagelist"></a>
<a id="tocsanchoreimagelist"></a>

```json
[
  {
    "analysis_status": "not_analyzed",
    "annotations": {},
    "created_at": "1970-01-01T00:00:00Z",
    "imageDigest": "string",
    "image_content": {},
    "image_detail": [
      {
        "created_at": "1970-01-01T00:00:00Z",
        "dockerfile": "string",
        "fulldigest": "string",
        "fulltag": "string",
        "imageDigest": "string",
        "imageId": "string",
        "last_updated": "1970-01-01T00:00:00Z",
        "registry": "string",
        "repo": "string",
        "userId": "string"
      }
    ],
    "image_status": "active",
    "last_updated": "1970-01-01T00:00:00Z",
    "record_version": "string",
    "userId": "string"
  }
]
```

A list of Anchore Images

<h2 id="tocS_AnchoreImageTagSummary">AnchoreImageTagSummary</h2>
<!-- backwards compatibility -->
<a id="schemaanchoreimagetagsummary"></a>
<a id="schema_AnchoreImageTagSummary"></a>
<a id="tocSanchoreimagetagsummary"></a>
<a id="tocsanchoreimagetagsummary"></a>

```json
{
  "analysis_status": "string",
  "analyzed_at": 0,
  "created_at": 0,
  "fulltag": "string",
  "imageDigest": "string",
  "imageId": "string",
  "image_status": "string",
  "parentDigest": "string",
  "tag_detected_at": 0
}
```

A unique image in the engine.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analysis_status|string|false|none|none|
|analyzed_at|integer|false|none|none|
|created_at|integer|false|none|none|
|fulltag|string|false|none|none|
|imageDigest|string|false|none|none|
|imageId|string|false|none|none|
|image_status|string|false|none|none|
|parentDigest|string|false|none|none|
|tag_detected_at|integer|false|none|none|

<h2 id="tocS_AnchoreImageTagSummaryList">AnchoreImageTagSummaryList</h2>
<!-- backwards compatibility -->
<a id="schemaanchoreimagetagsummarylist"></a>
<a id="schema_AnchoreImageTagSummaryList"></a>
<a id="tocSanchoreimagetagsummarylist"></a>
<a id="tocsanchoreimagetagsummarylist"></a>

```json
[
  {
    "analysis_status": "string",
    "analyzed_at": 0,
    "created_at": 0,
    "fulltag": "string",
    "imageDigest": "string",
    "imageId": "string",
    "image_status": "string",
    "parentDigest": "string",
    "tag_detected_at": 0
  }
]
```

a list of AnchoreImageTagSummary objects

<h2 id="tocS_Annotations">Annotations</h2>
<!-- backwards compatibility -->
<a id="schemaannotations"></a>
<a id="schema_Annotations"></a>
<a id="tocSannotations"></a>
<a id="tocsannotations"></a>

```json
{}
```

Simple key/value pairs where the value may be optional

<h2 id="tocS_ApiErrorResponse">ApiErrorResponse</h2>
<!-- backwards compatibility -->
<a id="schemaapierrorresponse"></a>
<a id="schema_ApiErrorResponse"></a>
<a id="tocSapierrorresponse"></a>
<a id="tocsapierrorresponse"></a>

```json
{
  "code": 0,
  "detail": {},
  "error_type": "string",
  "message": "string"
}
```

Generic HTTP API error response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|integer(int32)|false|none|none|
|detail|object|false|none|Details structure for additional information about the error if available. Content and structure will be error specific.|
|error_type|string|false|none|none|
|message|string|false|none|none|

<h2 id="tocS_ArchiveSummary">ArchiveSummary</h2>
<!-- backwards compatibility -->
<a id="schemaarchivesummary"></a>
<a id="schema_ArchiveSummary"></a>
<a id="tocSarchivesummary"></a>
<a id="tocsarchivesummary"></a>

```json
{
  "images": {
    "last_updated": "1970-01-01T00:00:00Z",
    "total_data_bytes": 0,
    "total_image_count": 0,
    "total_tag_count": 0
  },
  "rules": {
    "count": 0,
    "last_updated": "1970-01-01T00:00:00Z"
  }
}
```

A summarization of the available archives, a place to for long-term storage of audit, analysis, or other data to remove it from the system's working set but keep it available.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|images|[AnalysisArchiveSummary](#schemaanalysisarchivesummary)|false|none|A summarization of the analysis archive, including size, counts, etc. This archive stores image analysis only, never the actual image content or layers.|
|rules|[AnalysisArchiveRulesSummary](#schemaanalysisarchiverulessummary)|false|none|Summary of the transition rule set|

<h2 id="tocS_ArchivedAnalyses">ArchivedAnalyses</h2>
<!-- backwards compatibility -->
<a id="schemaarchivedanalyses"></a>
<a id="schema_ArchivedAnalyses"></a>
<a id="tocSarchivedanalyses"></a>
<a id="tocsarchivedanalyses"></a>

```json
[
  {
    "analyzed_at": "1970-01-01T00:00:00Z",
    "annotations": {},
    "archive_size_bytes": 0,
    "created_at": "1970-01-01T00:00:00Z",
    "imageDigest": "string",
    "image_detail": [
      {
        "detected_at": "1970-01-01T00:00:00Z",
        "pullstring": "string",
        "registry": "string",
        "repository": "string",
        "tag": "string"
      }
    ],
    "last_updated": "1970-01-01T00:00:00Z",
    "parentDigest": "string",
    "status": "archiving"
  }
]
```

List of archived analyses

<h2 id="tocS_ArchivedAnalysis">ArchivedAnalysis</h2>
<!-- backwards compatibility -->
<a id="schemaarchivedanalysis"></a>
<a id="schema_ArchivedAnalysis"></a>
<a id="tocSarchivedanalysis"></a>
<a id="tocsarchivedanalysis"></a>

```json
{
  "analyzed_at": "1970-01-01T00:00:00Z",
  "annotations": {},
  "archive_size_bytes": 0,
  "created_at": "1970-01-01T00:00:00Z",
  "imageDigest": "string",
  "image_detail": [
    {
      "detected_at": "1970-01-01T00:00:00Z",
      "pullstring": "string",
      "registry": "string",
      "repository": "string",
      "tag": "string"
    }
  ],
  "last_updated": "1970-01-01T00:00:00Z",
  "parentDigest": "string",
  "status": "archiving"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzed_at|string(date-time)|false|none|none|
|annotations|object|false|none|User provided annotations as key-value pairs|
|archive_size_bytes|integer|false|none|The size, in bytes, of the analysis archive file|
|created_at|string(date-time)|false|none|none|
|imageDigest|string|false|none|The image digest (digest of the manifest describing the image, per docker spec)|
|image_detail|[[TagEntry](#schematagentry)]|false|none|List of tags associated with the image digest|
|last_updated|string(date-time)|false|none|none|
|parentDigest|string|false|none|The digest of a parent manifest (for manifest-list images)|
|status|string|false|none|The archival status|

#### Enumerated Values

|Property|Value|
|---|---|
|status|archiving|
|status|archived|
|status|deleting|
|status|deleted|

<h2 id="tocS_BaseNotificationData">BaseNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemabasenotificationdata"></a>
<a id="schema_BaseNotificationData"></a>
<a id="tocSbasenotificationdata"></a>
<a id="tocsbasenotificationdata"></a>

```json
{
  "notification_type": "string",
  "notification_user": "string",
  "notification_user_email": "string"
}
```

Every notification has a payload, which follows this basic structure

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification_type|string|false|none|none|
|notification_user|string|false|none|none|
|notification_user_email|string|false|none|none|

<h2 id="tocS_CVSSV2Scores">CVSSV2Scores</h2>
<!-- backwards compatibility -->
<a id="schemacvssv2scores"></a>
<a id="schema_CVSSV2Scores"></a>
<a id="tocScvssv2scores"></a>
<a id="tocscvssv2scores"></a>

```json
{
  "base_score": 0,
  "exploitability_score": 0,
  "impact_score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_score|number \| null|false|none|none|
|exploitability_score|number \| null|false|none|none|
|impact_score|number \| null|false|none|none|

<h2 id="tocS_CVSSV3Scores">CVSSV3Scores</h2>
<!-- backwards compatibility -->
<a id="schemacvssv3scores"></a>
<a id="schema_CVSSV3Scores"></a>
<a id="tocScvssv3scores"></a>
<a id="tocscvssv3scores"></a>

```json
{
  "base_score": 0,
  "exploitability_score": 0,
  "impact_score": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_score|number \| null|false|none|none|
|exploitability_score|number \| null|false|none|none|
|impact_score|number \| null|false|none|none|

<h2 id="tocS_ContentFilesResponse">ContentFilesResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontentfilesresponse"></a>
<a id="schema_ContentFilesResponse"></a>
<a id="tocScontentfilesresponse"></a>
<a id="tocscontentfilesresponse"></a>

```json
{
  "content": [
    {
      "filename": "string",
      "gid": 0,
      "linkdest": "string",
      "mode": "string",
      "sha256": "string",
      "size": 0,
      "type": "string",
      "uid": 0
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

File content listings from images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[object]|false|none|none|
|content_type|string|false|none|none|
|imageDigest|string|false|none|none|

<h2 id="tocS_ContentJAVAPackageResponse">ContentJAVAPackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontentjavapackageresponse"></a>
<a id="schema_ContentJAVAPackageResponse"></a>
<a id="tocScontentjavapackageresponse"></a>
<a id="tocscontentjavapackageresponse"></a>

```json
{
  "content": [
    {
      "cpes": [
        "string"
      ],
      "implementation-version": "string",
      "location": "string",
      "maven-version": "string",
      "origin": "string",
      "package": "string",
      "specification-version": "string",
      "type": "string"
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

Java package content listings from images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[object]|false|none|none|
|content_type|string|false|none|none|
|imageDigest|string|false|none|none|

<h2 id="tocS_ContentMalwareResponse">ContentMalwareResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontentmalwareresponse"></a>
<a id="schema_ContentMalwareResponse"></a>
<a id="tocScontentmalwareresponse"></a>
<a id="tocscontentmalwareresponse"></a>

```json
{
  "content": [
    {
      "enabled": true,
      "findings": [
        {
          "path": "string",
          "signature": "string"
        }
      ],
      "metadata": {},
      "scanner": "string"
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

Malware listing response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[[MalwareScan](#schemamalwarescan)]|false|none|List of malware scan results, one per scanner configured to run|
|content_type|string|false|none|none|
|imageDigest|string|false|none|none|

<h2 id="tocS_ContentPackageResponse">ContentPackageResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontentpackageresponse"></a>
<a id="schema_ContentPackageResponse"></a>
<a id="tocScontentpackageresponse"></a>
<a id="tocscontentpackageresponse"></a>

```json
{
  "content": [
    {
      "cpes": [
        "string"
      ],
      "license": "string",
      "licenses": [
        "string"
      ],
      "location": "string",
      "origin": "string",
      "package": "string",
      "size": "string",
      "type": "string",
      "version": "string"
    }
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

Package content listings from images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[object]|false|none|none|
|content_type|string|false|none|none|
|imageDigest|string|false|none|none|

<h2 id="tocS_ContentResponse">ContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemacontentresponse"></a>
<a id="schema_ContentResponse"></a>
<a id="tocScontentresponse"></a>
<a id="tocscontentresponse"></a>

```json
{
  "content": [
    {}
  ],
  "content_type": "string",
  "imageDigest": "string"
}
```

Generic wrapper for content listings from images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content|[object]|false|none|none|
|content_type|string|false|none|none|
|imageDigest|string|false|none|none|

<h2 id="tocS_CredentialList">CredentialList</h2>
<!-- backwards compatibility -->
<a id="schemacredentiallist"></a>
<a id="schema_CredentialList"></a>
<a id="tocScredentiallist"></a>
<a id="tocscredentiallist"></a>

```json
[
  {
    "created_at": "string",
    "type": "password",
    "value": "string"
  }
]
```

<h2 id="tocS_DeleteImageResponse">DeleteImageResponse</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimageresponse"></a>
<a id="schema_DeleteImageResponse"></a>
<a id="tocSdeleteimageresponse"></a>
<a id="tocsdeleteimageresponse"></a>

```json
{
  "detail": "string",
  "digest": "string",
  "status": "not_found"
}
```

Image deletion response containing status and details

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detail|string|false|none|none|
|digest|string|true|none|none|
|status|string|true|none|Current status of the image deletion|

#### Enumerated Values

|Property|Value|
|---|---|
|status|not_found|
|status|deleting|
|status|delete_failed|

<h2 id="tocS_DeleteImageResponseList">DeleteImageResponseList</h2>
<!-- backwards compatibility -->
<a id="schemadeleteimageresponselist"></a>
<a id="schema_DeleteImageResponseList"></a>
<a id="tocSdeleteimageresponselist"></a>
<a id="tocsdeleteimageresponselist"></a>

```json
[
  {
    "detail": "string",
    "digest": "string",
    "status": "not_found"
  }
]
```

A list of delete image responses

<h2 id="tocS_EventCategory">EventCategory</h2>
<!-- backwards compatibility -->
<a id="schemaeventcategory"></a>
<a id="schema_EventCategory"></a>
<a id="tocSeventcategory"></a>
<a id="tocseventcategory"></a>

```json
{
  "category": "string",
  "description": "string",
  "subcategories": [
    {
      "description": "string",
      "events": [
        {
          "message": "string",
          "name": "string",
          "resource_type": "string",
          "type": "string"
        }
      ],
      "name": "string"
    }
  ]
}
```

A collection of event subcategories

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|none|
|description|string|false|none|none|
|subcategories|[[EventSubcategory](#schemaeventsubcategory)]|false|none|none|

<h2 id="tocS_EventDescription">EventDescription</h2>
<!-- backwards compatibility -->
<a id="schemaeventdescription"></a>
<a id="schema_EventDescription"></a>
<a id="tocSeventdescription"></a>
<a id="tocseventdescription"></a>

```json
{
  "message": "string",
  "name": "string",
  "resource_type": "string",
  "type": "string"
}
```

A description of an event type

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|false|none|The message associated with the event type|
|name|string|false|none|The event type. The last component of the fully-qualified event_type (category.subcategory.event)|
|resource_type|string|false|none|The type of resource this event is generated from|
|type|string|false|none|The fully qualified event type as would be seen in the event payload|

<h2 id="tocS_EventResponse">EventResponse</h2>
<!-- backwards compatibility -->
<a id="schemaeventresponse"></a>
<a id="schema_EventResponse"></a>
<a id="tocSeventresponse"></a>
<a id="tocseventresponse"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "event": {
    "category": "string",
    "details": {},
    "level": "string",
    "message": "string",
    "resource": {
      "id": "string",
      "type": "string",
      "user_id": "string"
    },
    "source": {
      "base_url": "string",
      "hostid": "string",
      "request_id": "string",
      "servicename": "string"
    },
    "timestamp": "1970-01-01T00:00:00Z",
    "type": "string"
  },
  "generated_uuid": "string"
}
```

A record of occurance of an asynchronous event triggered either by system or by user activity

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|event|object|false|none|none|
|generated_uuid|string|false|none|none|

<h2 id="tocS_EventSubcategory">EventSubcategory</h2>
<!-- backwards compatibility -->
<a id="schemaeventsubcategory"></a>
<a id="schema_EventSubcategory"></a>
<a id="tocSeventsubcategory"></a>
<a id="tocseventsubcategory"></a>

```json
{
  "description": "string",
  "events": [
    {
      "message": "string",
      "name": "string",
      "resource_type": "string",
      "type": "string"
    }
  ],
  "name": "string"
}
```

A collection of events related to each other

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|events|[[EventDescription](#schemaeventdescription)]|false|none|none|
|name|string|false|none|none|

<h2 id="tocS_EventTypesList">EventTypesList</h2>
<!-- backwards compatibility -->
<a id="schemaeventtypeslist"></a>
<a id="schema_EventTypesList"></a>
<a id="tocSeventtypeslist"></a>
<a id="tocseventtypeslist"></a>

```json
[
  {
    "category": "string",
    "description": "string",
    "subcategories": [
      {
        "description": "string",
        "events": [
          {
            "message": "string",
            "name": "string",
            "resource_type": "string",
            "type": "string"
          }
        ],
        "name": "string"
      }
    ]
  }
]
```

Array of EventCategory objects

<h2 id="tocS_EventsList">EventsList</h2>
<!-- backwards compatibility -->
<a id="schemaeventslist"></a>
<a id="schema_EventsList"></a>
<a id="tocSeventslist"></a>
<a id="tocseventslist"></a>

```json
{
  "item_count": 0,
  "next_page": true,
  "page": 0,
  "results": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "event": {
        "category": "string",
        "details": {},
        "level": "string",
        "message": "string",
        "resource": {
          "id": "string",
          "type": "string",
          "user_id": "string"
        },
        "source": {
          "base_url": "string",
          "hostid": "string",
          "request_id": "string",
          "servicename": "string"
        },
        "timestamp": "1970-01-01T00:00:00Z",
        "type": "string"
      },
      "generated_uuid": "string"
    }
  ]
}
```

Response envelope for paginated listing of events

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|item_count|integer|false|none|Number of events in this page|
|next_page|boolean|false|none|Boolean flag, True indicates there are more events and False otherwise|
|page|integer|false|none|Page number of this result set|
|results|[[EventResponse](#schemaeventresponse)]|false|none|List of events|

<h2 id="tocS_FeedGroupMetadata">FeedGroupMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafeedgroupmetadata"></a>
<a id="schema_FeedGroupMetadata"></a>
<a id="tocSfeedgroupmetadata"></a>
<a id="tocsfeedgroupmetadata"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "last_sync": "1970-01-01T00:00:00Z",
  "name": "string",
  "record_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|last_sync|string(date-time)|false|none|none|
|name|string|false|none|none|
|record_count|integer|false|none|none|

<h2 id="tocS_FeedMetadata">FeedMetadata</h2>
<!-- backwards compatibility -->
<a id="schemafeedmetadata"></a>
<a id="schema_FeedMetadata"></a>
<a id="tocSfeedmetadata"></a>
<a id="tocsfeedmetadata"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "groups": [
    {
      "created_at": "1970-01-01T00:00:00Z",
      "last_sync": "1970-01-01T00:00:00Z",
      "name": "string",
      "record_count": 0
    }
  ],
  "last_full_sync": "1970-01-01T00:00:00Z",
  "name": "string",
  "updated_at": "1970-01-01T00:00:00Z"
}
```

Metadata on a single feed based on what the engine finds from querying the endpoints

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|Date the metadata record was created in engine (first seen on source)|
|groups|[[FeedGroupMetadata](#schemafeedgroupmetadata)]|false|none|none|
|last_full_sync|string(date-time)|false|none|none|
|name|string|false|none|name of the feed|
|updated_at|string(date-time)|false|none|Date the metadata was last updated|

<h2 id="tocS_FeedSyncResult">FeedSyncResult</h2>
<!-- backwards compatibility -->
<a id="schemafeedsyncresult"></a>
<a id="schema_FeedSyncResult"></a>
<a id="tocSfeedsyncresult"></a>
<a id="tocsfeedsyncresult"></a>

```json
{
  "feed": "string",
  "groups": [
    {
      "group": "string",
      "status": "success",
      "total_time_seconds": 0,
      "updated_image_count": 0,
      "updated_record_count": 0
    }
  ],
  "status": "success",
  "total_time_seconds": 0
}
```

The result of a sync of a single feed

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feed|string|false|none|The name of the feed synced|
|groups|[[GroupSyncResult](#schemagroupsyncresult)]|false|none|Array of group sync results|
|status|string|false|none|The result of the sync operations, either co|
|total_time_seconds|number|false|none|The duratin, in seconds, of the sync of the feed, the sum of all the group syncs|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|failure|

<h2 id="tocS_FeedSyncResults">FeedSyncResults</h2>
<!-- backwards compatibility -->
<a id="schemafeedsyncresults"></a>
<a id="schema_FeedSyncResults"></a>
<a id="tocSfeedsyncresults"></a>
<a id="tocsfeedsyncresults"></a>

```json
[
  {
    "feed": "string",
    "groups": [
      {
        "group": "string",
        "status": "success",
        "total_time_seconds": 0,
        "updated_image_count": 0,
        "updated_record_count": 0
      }
    ],
    "status": "success",
    "total_time_seconds": 0
  }
]
```

An array of feed sync summaries representing the result of an explicit feed sync operation

<h2 id="tocS_FileContentSearchList">FileContentSearchList</h2>
<!-- backwards compatibility -->
<a id="schemafilecontentsearchlist"></a>
<a id="schema_FileContentSearchList"></a>
<a id="tocSfilecontentsearchlist"></a>
<a id="tocsfilecontentsearchlist"></a>

```json
[
  {
    "matches": [
      {
        "lines": [
          0
        ],
        "name": "string",
        "regex": "string"
      }
    ],
    "path": "string"
  }
]
```

Simple array of RetrievedFileMetadata objects

<h2 id="tocS_FileContentSearchResult">FileContentSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemafilecontentsearchresult"></a>
<a id="schema_FileContentSearchResult"></a>
<a id="tocSfilecontentsearchresult"></a>
<a id="tocsfilecontentsearchresult"></a>

```json
{
  "matches": [
    {
      "lines": [
        0
      ],
      "name": "string",
      "regex": "string"
    }
  ],
  "path": "string"
}
```

The retrieved file entry including content (b64 encoded)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[[RegexContentMatch](#schemaregexcontentmatch)]|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_GateSpec">GateSpec</h2>
<!-- backwards compatibility -->
<a id="schemagatespec"></a>
<a id="schema_GateSpec"></a>
<a id="tocSgatespec"></a>
<a id="tocsgatespec"></a>

```json
{
  "description": "string",
  "name": "string",
  "state": "active",
  "superceded_by": "string",
  "triggers": [
    {
      "description": "string",
      "name": "string",
      "parameters": [
        {
          "description": "string",
          "example": "string",
          "name": "string",
          "required": true,
          "state": "active",
          "superceded_by": "string",
          "validator": {}
        }
      ],
      "state": "active",
      "superceded_by": "string"
    }
  ]
}
```

A description of the set of gates available in this engine and the triggers and parameters supported

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Description of the gate|
|name|string|false|none|Gate name, as it would appear in a policy document|
|state|string|false|none|State of the gate and transitively all triggers it contains if not 'active'|
|superceded_by|string \| null|false|none|The name of another trigger that supercedes this on functionally if this is deprecated|
|triggers|[[TriggerSpec](#schematriggerspec)]|false|none|List of the triggers that can fire for this Gate|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|deprecated|
|state|eol|

<h2 id="tocS_GenericNotificationPayload">GenericNotificationPayload</h2>
<!-- backwards compatibility -->
<a id="schemagenericnotificationpayload"></a>
<a id="schema_GenericNotificationPayload"></a>
<a id="tocSgenericnotificationpayload"></a>
<a id="tocsgenericnotificationpayload"></a>

```json
{
  "notificationId": "string",
  "subscription_key": "string",
  "subscription_type": "string",
  "userId": "string"
}
```

Parent class for Notification Payloads

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationId|string|false|none|none|
|subscription_key|string|false|none|none|
|subscription_type|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_GroupSyncResult">GroupSyncResult</h2>
<!-- backwards compatibility -->
<a id="schemagroupsyncresult"></a>
<a id="schema_GroupSyncResult"></a>
<a id="tocSgroupsyncresult"></a>
<a id="tocsgroupsyncresult"></a>

```json
{
  "group": "string",
  "status": "success",
  "total_time_seconds": 0,
  "updated_image_count": 0,
  "updated_record_count": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|group|string|false|none|The name of the group|
|status|string|false|none|none|
|total_time_seconds|number|false|none|The duration of the group sync in seconds|
|updated_image_count|integer|false|none|The number of images updated by the this group sync, across all accounts. This is typically only non-zero for vulnerability feeds which update images' vulnerability results during the sync.|
|updated_record_count|integer|false|none|The number of feed data records synced down as either updates or new records|

#### Enumerated Values

|Property|Value|
|---|---|
|status|success|
|status|failure|

<h2 id="tocS_ImageAnalysisReferences">ImageAnalysisReferences</h2>
<!-- backwards compatibility -->
<a id="schemaimageanalysisreferences"></a>
<a id="schema_ImageAnalysisReferences"></a>
<a id="tocSimageanalysisreferences"></a>
<a id="tocsimageanalysisreferences"></a>

```json
[
  "string"
]
```

List of image digests to archive

<h2 id="tocS_ImageAnalysisReport">ImageAnalysisReport</h2>
<!-- backwards compatibility -->
<a id="schemaimageanalysisreport"></a>
<a id="schema_ImageAnalysisReport"></a>
<a id="tocSimageanalysisreport"></a>
<a id="tocsimageanalysisreport"></a>

```json
{}
```

Analysis report json to be imported

<h2 id="tocS_ImageAnalysisRequest">ImageAnalysisRequest</h2>
<!-- backwards compatibility -->
<a id="schemaimageanalysisrequest"></a>
<a id="schema_ImageAnalysisRequest"></a>
<a id="tocSimageanalysisrequest"></a>
<a id="tocsimageanalysisrequest"></a>

```json
{
  "annotations": {},
  "created_at": "1970-01-01T00:00:00Z",
  "digest": "string",
  "dockerfile": "string",
  "image_type": "string",
  "source": {
    "archive": {
      "digest": "string"
    },
    "digest": {
      "creation_timestamp_override": "1970-01-01T00:00:00Z",
      "dockerfile": "string",
      "pullstring": "string",
      "tag": "string"
    },
    "import": {
      "contents": {
        "dockerfile": "string",
        "image_config": "string",
        "manifest": "string",
        "packages": "string",
        "parent_manifest": "string"
      },
      "digest": "string",
      "local_image_id": "string",
      "operation_uuid": "string",
      "parent_digest": "string",
      "tags": [
        "docker.io/library/nginx:latest"
      ]
    },
    "tag": {
      "dockerfile": "string",
      "pullstring": "string"
    }
  },
  "tag": "string"
}
```

A request to add an image to be watched and analyzed by the engine. Optionally include the dockerfile content. Either source, digest or tag must be present.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|annotations|object|false|none|Annotations to be associated with the added image in key/value form|
|created_at|string(date-time)|false|none|Optional override of the image creation time, only honored when both tag and digest are also supplied  e.g. 2018-10-17T18:14:00Z. Deprecated in favor of the 'source' field|
|digest|string|false|none|A digest string for an image, maybe a pull string or just a digest. e.g. nginx@sha256:123 or sha256:abc123. If a pull string, it must have same regisry/repo as the tag field. Deprecated in favor of the 'source' field|
|dockerfile|string|false|none|Base64 encoded content of the dockerfile for the image, if available. Deprecated in favor of the 'source' field.|
|image_type|string|false|none|Optional. The type of image this is adding, defaults to "docker". This can be ommitted until multiple image types are supported.|
|source|[ImageSource](#schemaimagesource)|false|none|A set of analysis source types. Only one may be set in any given request.|
|tag|string|false|none|Full pullable tag reference for image. e.g. docker.io/nginx:latest. Deprecated in favor of the 'source' field|

<h2 id="tocS_ImageContent">ImageContent</h2>
<!-- backwards compatibility -->
<a id="schemaimagecontent"></a>
<a id="schema_ImageContent"></a>
<a id="tocSimagecontent"></a>
<a id="tocsimagecontent"></a>

```json
{}
```

A metadata content record for a specific image, containing different content type entries

<h2 id="tocS_ImageContentDeleteResponse">ImageContentDeleteResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimagecontentdeleteresponse"></a>
<a id="schema_ImageContentDeleteResponse"></a>
<a id="tocSimagecontentdeleteresponse"></a>
<a id="tocsimagecontentdeleteresponse"></a>

```json
{}
```

<h2 id="tocS_ImageDetail">ImageDetail</h2>
<!-- backwards compatibility -->
<a id="schemaimagedetail"></a>
<a id="schema_ImageDetail"></a>
<a id="tocSimagedetail"></a>
<a id="tocsimagedetail"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "dockerfile": "string",
  "fulldigest": "string",
  "fulltag": "string",
  "imageDigest": "string",
  "imageId": "string",
  "last_updated": "1970-01-01T00:00:00Z",
  "registry": "string",
  "repo": "string",
  "userId": "string"
}
```

A metadata detail record for a specific image. Multiple detail records may map a single catalog image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|dockerfile|string \| null|false|none|none|
|fulldigest|string|false|none|Full docker-pullable digest string including the registry url and repository necessary get the image|
|fulltag|string|false|none|Full docker-pullable tag string referencing the image|
|imageDigest|string|false|none|The parent Anchore Image record to which this detail maps|
|imageId|string|false|none|none|
|last_updated|string(date-time)|false|none|none|
|registry|string|false|none|none|
|repo|string|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_ImageFilter">ImageFilter</h2>
<!-- backwards compatibility -->
<a id="schemaimagefilter"></a>
<a id="schema_ImageFilter"></a>
<a id="tocSimagefilter"></a>
<a id="tocsimagefilter"></a>

```json
{
  "digest": "string",
  "tag": "string"
}
```

Filter for an image list by id, tag, or digest, but not both

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string|false|none|none|
|tag|string|false|none|none|

<h2 id="tocS_ImageImportContentResponse">ImageImportContentResponse</h2>
<!-- backwards compatibility -->
<a id="schemaimageimportcontentresponse"></a>
<a id="schema_ImageImportContentResponse"></a>
<a id="tocSimageimportcontentresponse"></a>
<a id="tocsimageimportcontentresponse"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "digest": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|digest|string|false|none|none|

<h2 id="tocS_ImageImportManifest">ImageImportManifest</h2>
<!-- backwards compatibility -->
<a id="schemaimageimportmanifest"></a>
<a id="schema_ImageImportManifest"></a>
<a id="tocSimageimportmanifest"></a>
<a id="tocsimageimportmanifest"></a>

```json
{
  "contents": {
    "dockerfile": "string",
    "image_config": "string",
    "manifest": "string",
    "packages": "string",
    "parent_manifest": "string"
  },
  "digest": "string",
  "local_image_id": "string",
  "operation_uuid": "string",
  "parent_digest": "string",
  "tags": [
    "docker.io/library/nginx:latest"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contents|[ImportContentDigests](#schemaimportcontentdigests)|true|none|Digest of content to use in the final import|
|digest|string|true|none|none|
|local_image_id|string|false|none|An "imageId" as used by Docker if available|
|operation_uuid|string|true|none|none|
|parent_digest|string|false|none|The digest of the images's manifest-list parent if it was accessed from a multi-arch tag where the tag pointed to a manifest-list. This allows preservation of that relationship in the data|
|tags|[string]|true|none|none|

<h2 id="tocS_ImageImportOperation">ImageImportOperation</h2>
<!-- backwards compatibility -->
<a id="schemaimageimportoperation"></a>
<a id="schema_ImageImportOperation"></a>
<a id="tocSimageimportoperation"></a>
<a id="tocsimageimportoperation"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "expires_at": "1970-01-01T00:00:00Z",
  "status": "pending",
  "uuid": "string"
}
```

An import record, creating a unique identifier for referencing the operation as well as its state

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|expires_at|string(date-time)|false|none|none|
|status|string|false|none|none|
|uuid|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|pending|
|status|queued|
|status|processing|
|status|complete|
|status|failed|
|status|expired|

<h2 id="tocS_ImageImports">ImageImports</h2>
<!-- backwards compatibility -->
<a id="schemaimageimports"></a>
<a id="schema_ImageImports"></a>
<a id="tocSimageimports"></a>
<a id="tocsimageimports"></a>

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "expires_at": "1970-01-01T00:00:00Z",
    "status": "pending",
    "uuid": "string"
  }
]
```

<h2 id="tocS_ImagePackageManifest">ImagePackageManifest</h2>
<!-- backwards compatibility -->
<a id="schemaimagepackagemanifest"></a>
<a id="schema_ImagePackageManifest"></a>
<a id="tocSimagepackagemanifest"></a>
<a id="tocsimagepackagemanifest"></a>

```json
{
  "artifactRelationships": [
    {
      "child": "string",
      "metadata": {},
      "parent": "string",
      "type": "string"
    }
  ],
  "artifacts": [
    {
      "cpes": [
        "string"
      ],
      "foundBy": "string",
      "id": "string",
      "language": "string",
      "licenses": [
        "string"
      ],
      "locations": [
        {
          "layerID": "string",
          "path": "string"
        }
      ],
      "metadata": {},
      "metadataType": "string",
      "name": "string",
      "purl": "string",
      "type": "string",
      "version": "string"
    }
  ],
  "descriptor": {
    "name": "string",
    "version": "string"
  },
  "distro": {
    "idLike": "string",
    "name": "string",
    "version": "string"
  },
  "schema": {
    "url": "string",
    "version": "string"
  },
  "source": {
    "target": null,
    "type": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|artifactRelationships|[[ImportPackageRelationship](#schemaimportpackagerelationship)]|false|none|none|
|artifacts|[[ImportPackage](#schemaimportpackage)]|true|none|none|
|descriptor|[ImportDescriptor](#schemaimportdescriptor)|false|none|none|
|distro|[ImportDistribution](#schemaimportdistribution)|true|none|none|
|schema|[ImportSchema](#schemaimportschema)|false|none|none|
|source|[ImportSource](#schemaimportsource)|true|none|none|

<h2 id="tocS_ImageRef">ImageRef</h2>
<!-- backwards compatibility -->
<a id="schemaimageref"></a>
<a id="schema_ImageRef"></a>
<a id="tocSimageref"></a>
<a id="tocsimageref"></a>

```json
{
  "type": "tag",
  "value": "string"
}
```

A reference to an image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|true|none|none|
|value|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|tag|
|type|digest|
|type|id|

<h2 id="tocS_ImageReference">ImageReference</h2>
<!-- backwards compatibility -->
<a id="schemaimagereference"></a>
<a id="schema_ImageReference"></a>
<a id="tocSimagereference"></a>
<a id="tocsimagereference"></a>

```json
{
  "analyzed_at": "string",
  "digest": "string",
  "id": "string",
  "tag_history": [
    {
      "detected_at": "1970-01-01T00:00:00Z",
      "pullstring": "string",
      "registry": "string",
      "repository": "string",
      "tag": "string"
    }
  ]
}
```

A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|analyzed_at|string|false|none|Timestamp, in rfc3339 format, indicating when the image state became 'analyzed' in Anchore Engine.|
|digest|string|false|none|The image digest|
|id|string|false|none|The image id if available|
|tag_history|[[TagEntry](#schematagentry)]|false|none|none|

<h2 id="tocS_ImageSelectionRule">ImageSelectionRule</h2>
<!-- backwards compatibility -->
<a id="schemaimageselectionrule"></a>
<a id="schema_ImageSelectionRule"></a>
<a id="tocSimageselectionrule"></a>
<a id="tocsimageselectionrule"></a>

```json
{
  "id": "string",
  "image": {
    "type": "tag",
    "value": "string"
  },
  "name": "string",
  "registry": "string",
  "repository": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|image|[ImageRef](#schemaimageref)|true|none|A reference to an image|
|name|string|true|none|none|
|registry|string|true|none|none|
|repository|string|true|none|none|

<h2 id="tocS_ImageSelector">ImageSelector</h2>
<!-- backwards compatibility -->
<a id="schemaimageselector"></a>
<a id="schema_ImageSelector"></a>
<a id="tocSimageselector"></a>
<a id="tocsimageselector"></a>

```json
{
  "registry": "string",
  "repository": "string",
  "tag": "string"
}
```

A set of selection criteria to match an image by a tagged pullstring based on its components, with regex support in each field

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registry|string|false|none|The registry section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "docker.io"|
|repository|string|false|none|The repository section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "anchore/anchore-engine"|
|tag|string|false|none|The tag-only section of a pull string. e.g. with "docker.io/anchore/anchore-engine:latest", this is "latest"|

<h2 id="tocS_ImageSource">ImageSource</h2>
<!-- backwards compatibility -->
<a id="schemaimagesource"></a>
<a id="schema_ImageSource"></a>
<a id="tocSimagesource"></a>
<a id="tocsimagesource"></a>

```json
{
  "archive": {
    "digest": "string"
  },
  "digest": {
    "creation_timestamp_override": "1970-01-01T00:00:00Z",
    "dockerfile": "string",
    "pullstring": "string",
    "tag": "string"
  },
  "import": {
    "contents": {
      "dockerfile": "string",
      "image_config": "string",
      "manifest": "string",
      "packages": "string",
      "parent_manifest": "string"
    },
    "digest": "string",
    "local_image_id": "string",
    "operation_uuid": "string",
    "parent_digest": "string",
    "tags": [
      "docker.io/library/nginx:latest"
    ]
  },
  "tag": {
    "dockerfile": "string",
    "pullstring": "string"
  }
}
```

A set of analysis source types. Only one may be set in any given request.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|archive|[AnalysisArchiveSource](#schemaanalysisarchivesource)|false|none|An image reference in the analysis archive for the purposes of loading analysis from the archive into th working set|
|digest|[RegistryDigestSource](#schemaregistrydigestsource)|false|none|An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction.|
|import|[ImageImportManifest](#schemaimageimportmanifest)|false|none|none|
|tag|[RegistryTagSource](#schemaregistrytagsource)|false|none|An image reference using a tag in a registry, this is the most common source type.|

<h2 id="tocS_ImageWithPackages">ImageWithPackages</h2>
<!-- backwards compatibility -->
<a id="schemaimagewithpackages"></a>
<a id="schema_ImageWithPackages"></a>
<a id="tocSimagewithpackages"></a>
<a id="tocsimagewithpackages"></a>

```json
{
  "image": {
    "analyzed_at": "string",
    "digest": "string",
    "id": "string",
    "tag_history": [
      {
        "detected_at": "1970-01-01T00:00:00Z",
        "pullstring": "string",
        "registry": "string",
        "repository": "string",
        "tag": "string"
      }
    ]
  },
  "packages": [
    {
      "name": "string",
      "type": "string",
      "version": "string",
      "will_not_fix": true
    }
  ]
}
```

An image record that contains packages

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|image|[ImageReference](#schemaimagereference)|false|none|A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest|
|packages|[[PackageReference](#schemapackagereference)]|false|none|none|

<h2 id="tocS_ImportContentDigestList">ImportContentDigestList</h2>
<!-- backwards compatibility -->
<a id="schemaimportcontentdigestlist"></a>
<a id="schema_ImportContentDigestList"></a>
<a id="tocSimportcontentdigestlist"></a>
<a id="tocsimportcontentdigestlist"></a>

```json
[
  "string"
]
```

<h2 id="tocS_ImportContentDigests">ImportContentDigests</h2>
<!-- backwards compatibility -->
<a id="schemaimportcontentdigests"></a>
<a id="schema_ImportContentDigests"></a>
<a id="tocSimportcontentdigests"></a>
<a id="tocsimportcontentdigests"></a>

```json
{
  "dockerfile": "string",
  "image_config": "string",
  "manifest": "string",
  "packages": "string",
  "parent_manifest": "string"
}
```

Digest of content to use in the final import

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerfile|string|false|none|Digest for reference content for dockerfile|
|image_config|string|true|none|Digest for reference content for image config|
|manifest|string|true|none|Digest to reference content for the image manifest|
|packages|string|true|none|Digest to use for the packages content|
|parent_manifest|string|false|none|Digest for reference content for parent manifest|

<h2 id="tocS_ImportDescriptor">ImportDescriptor</h2>
<!-- backwards compatibility -->
<a id="schemaimportdescriptor"></a>
<a id="schema_ImportDescriptor"></a>
<a id="tocSimportdescriptor"></a>
<a id="tocsimportdescriptor"></a>

```json
{
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_ImportDistribution">ImportDistribution</h2>
<!-- backwards compatibility -->
<a id="schemaimportdistribution"></a>
<a id="schema_ImportDistribution"></a>
<a id="tocSimportdistribution"></a>
<a id="tocsimportdistribution"></a>

```json
{
  "idLike": "string",
  "name": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|idLike|string|true|none|none|
|name|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_ImportPackage">ImportPackage</h2>
<!-- backwards compatibility -->
<a id="schemaimportpackage"></a>
<a id="schema_ImportPackage"></a>
<a id="tocSimportpackage"></a>
<a id="tocsimportpackage"></a>

```json
{
  "cpes": [
    "string"
  ],
  "foundBy": "string",
  "id": "string",
  "language": "string",
  "licenses": [
    "string"
  ],
  "locations": [
    {
      "layerID": "string",
      "path": "string"
    }
  ],
  "metadata": {},
  "metadataType": "string",
  "name": "string",
  "purl": "string",
  "type": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cpes|[string]|true|none|none|
|foundBy|string|false|none|none|
|id|string|false|none|none|
|language|string|true|none|none|
|licenses|[string]|true|none|none|
|locations|[[ImportPackageLocation](#schemaimportpackagelocation)]|true|none|none|
|metadata|object|false|none|none|
|metadataType|string|true|none|none|
|name|string|true|none|none|
|purl|string|false|none|none|
|type|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_ImportPackageLocation">ImportPackageLocation</h2>
<!-- backwards compatibility -->
<a id="schemaimportpackagelocation"></a>
<a id="schema_ImportPackageLocation"></a>
<a id="tocSimportpackagelocation"></a>
<a id="tocsimportpackagelocation"></a>

```json
{
  "layerID": "string",
  "path": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|layerID|string|false|none|none|
|path|string|true|none|none|

<h2 id="tocS_ImportPackageRelationship">ImportPackageRelationship</h2>
<!-- backwards compatibility -->
<a id="schemaimportpackagerelationship"></a>
<a id="schema_ImportPackageRelationship"></a>
<a id="tocSimportpackagerelationship"></a>
<a id="tocsimportpackagerelationship"></a>

```json
{
  "child": "string",
  "metadata": {},
  "parent": "string",
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|child|string|true|none|none|
|metadata|object|false|none|none|
|parent|string|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_ImportSchema">ImportSchema</h2>
<!-- backwards compatibility -->
<a id="schemaimportschema"></a>
<a id="schema_ImportSchema"></a>
<a id="tocSimportschema"></a>
<a id="tocsimportschema"></a>

```json
{
  "url": "string",
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|url|string|true|none|none|
|version|string|true|none|none|

<h2 id="tocS_ImportSource">ImportSource</h2>
<!-- backwards compatibility -->
<a id="schemaimportsource"></a>
<a id="schema_ImportSource"></a>
<a id="tocSimportsource"></a>
<a id="tocsimportsource"></a>

```json
{
  "target": null,
  "type": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|target|object|true|none|none|
|type|string|true|none|none|

<h2 id="tocS_LocalAnalysisSource">LocalAnalysisSource</h2>
<!-- backwards compatibility -->
<a id="schemalocalanalysissource"></a>
<a id="schema_LocalAnalysisSource"></a>
<a id="tocSlocalanalysissource"></a>
<a id="tocslocalanalysissource"></a>

```json
{
  "digest": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|digest|string|false|none|none|

<h2 id="tocS_MalwareScan">MalwareScan</h2>
<!-- backwards compatibility -->
<a id="schemamalwarescan"></a>
<a id="schema_MalwareScan"></a>
<a id="tocSmalwarescan"></a>
<a id="tocsmalwarescan"></a>

```json
{
  "enabled": true,
  "findings": [
    {
      "path": "string",
      "signature": "string"
    }
  ],
  "metadata": {},
  "scanner": "string"
}
```

A single scan from a scanner

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|enabled|boolean|false|none|Indicates if the scanner is enabled|
|findings|[object]|false|none|none|
|metadata|object|false|none|Open schema for scanner-specific metadata related to the scan result|
|scanner|string|false|none|The name of the scanner that produced the finding|

<h2 id="tocS_MappingRule">MappingRule</h2>
<!-- backwards compatibility -->
<a id="schemamappingrule"></a>
<a id="schema_MappingRule"></a>
<a id="tocSmappingrule"></a>
<a id="tocsmappingrule"></a>

```json
{
  "id": "string",
  "image": {
    "type": "tag",
    "value": "string"
  },
  "name": "string",
  "policy_id": "string",
  "policy_ids": [
    "string"
  ],
  "registry": "string",
  "repository": "string",
  "whitelist_ids": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|none|
|image|[ImageRef](#schemaimageref)|true|none|A reference to an image|
|name|string|true|none|none|
|policy_id|string|false|none|Optional single policy to evalute, if set will override any value in policy_ids, for backwards compatibility. Generally, policy_ids should be used even with a array of length 1.|
|policy_ids|[string]|false|none|List of policyIds to evaluate in order, to completion|
|registry|string|true|none|none|
|repository|string|true|none|none|
|whitelist_ids|[string]|false|none|none|

<h2 id="tocS_MetadataResponse">MetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemametadataresponse"></a>
<a id="schema_MetadataResponse"></a>
<a id="tocSmetadataresponse"></a>
<a id="tocsmetadataresponse"></a>

```json
{
  "imageDigest": "string",
  "metadata": null,
  "metadata_type": "string"
}
```

Generic wrapper for metadata listings from images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageDigest|string|false|none|none|
|metadata|object|false|none|none|
|metadata_type|string|false|none|none|

<h2 id="tocS_NativeSbom">NativeSbom</h2>
<!-- backwards compatibility -->
<a id="schemanativesbom"></a>
<a id="schema_NativeSbom"></a>
<a id="tocSnativesbom"></a>
<a id="tocsnativesbom"></a>

```json
{}
```

<h2 id="tocS_NotificationBase">NotificationBase</h2>
<!-- backwards compatibility -->
<a id="schemanotificationbase"></a>
<a id="schema_NotificationBase"></a>
<a id="tocSnotificationbase"></a>
<a id="tocsnotificationbase"></a>

```json
{
  "created_at": 0,
  "dataId": "string",
  "last_updated": 0,
  "max_tries": 0,
  "queueId": "string",
  "record_state_key": "active",
  "record_state_val": "string",
  "tries": 0,
  "userId": "string"
}
```

base object for Notifications (every notification has this basic structure)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|none|
|dataId|string|false|none|none|
|last_updated|integer|false|none|none|
|max_tries|integer|false|none|none|
|queueId|string|false|none|none|
|record_state_key|string|false|none|none|
|record_state_val|string \| null|false|none|none|
|tries|integer|false|none|none|
|userId|string|false|none|none|

<h2 id="tocS_NvdDataList">NvdDataList</h2>
<!-- backwards compatibility -->
<a id="schemanvddatalist"></a>
<a id="schema_NvdDataList"></a>
<a id="tocSnvddatalist"></a>
<a id="tocsnvddatalist"></a>

```json
[
  {
    "cvss_v2": {
      "base_score": 0,
      "exploitability_score": 0,
      "impact_score": 0
    },
    "cvss_v3": {
      "base_score": 0,
      "exploitability_score": 0,
      "impact_score": 0
    },
    "id": "string"
  }
]
```

List of Nvd Data objects

<h2 id="tocS_NvdDataObject">NvdDataObject</h2>
<!-- backwards compatibility -->
<a id="schemanvddataobject"></a>
<a id="schema_NvdDataObject"></a>
<a id="tocSnvddataobject"></a>
<a id="tocsnvddataobject"></a>

```json
{
  "cvss_v2": {
    "base_score": 0,
    "exploitability_score": 0,
    "impact_score": 0
  },
  "cvss_v3": {
    "base_score": 0,
    "exploitability_score": 0,
    "impact_score": 0
  },
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvss_v2|[CVSSV2Scores](#schemacvssv2scores)|false|none|none|
|cvss_v3|[CVSSV3Scores](#schemacvssv3scores)|false|none|none|
|id|string|false|none|NVD Vulnerability ID|

<h2 id="tocS_PackageReference">PackageReference</h2>
<!-- backwards compatibility -->
<a id="schemapackagereference"></a>
<a id="schema_PackageReference"></a>
<a id="tocSpackagereference"></a>
<a id="tocspackagereference"></a>

```json
{
  "name": "string",
  "type": "string",
  "version": "string",
  "will_not_fix": true
}
```

A record of a software item which is vulnerable or carries a fix for a vulnerability

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Package name|
|type|string|false|none|Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...)|
|version|string \| null|false|none|A version for the package. If null, then references all versions|
|will_not_fix|boolean|false|none|Whether a vendor will or will not fix a vulnerabitlity|

<h2 id="tocS_PaginatedImageList">PaginatedImageList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedimagelist"></a>
<a id="schema_PaginatedImageList"></a>
<a id="tocSpaginatedimagelist"></a>
<a id="tocspaginatedimagelist"></a>

```json
{
  "next_page": "string",
  "page": "string",
  "returned_count": 0,
  "images": [
    {
      "image": {
        "analyzed_at": "string",
        "digest": "string",
        "id": "string",
        "tag_history": [
          {
            "detected_at": "1970-01-01T00:00:00Z",
            "pullstring": "string",
            "registry": "string",
            "repository": "string",
            "tag": "string"
          }
        ]
      },
      "packages": [
        {
          "name": "string",
          "type": "string",
          "version": "string",
          "will_not_fix": true
        }
      ]
    }
  ]
}
```

Pagination wrapped list of images that match some filter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page|string|false|none|True if additional pages exist (page + 1) or False if this is the last page|
|page|string|false|none|The page number returned (should match the requested page query string param)|
|returned_count|integer|false|none|The number of items sent in this response|
|images|[[ImageWithPackages](#schemaimagewithpackages)]|false|none|none|

<h2 id="tocS_PaginatedVulnerabilityList">PaginatedVulnerabilityList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedvulnerabilitylist"></a>
<a id="schema_PaginatedVulnerabilityList"></a>
<a id="tocSpaginatedvulnerabilitylist"></a>
<a id="tocspaginatedvulnerabilitylist"></a>

```json
{
  "next_page": "string",
  "page": "string",
  "returned_count": 0,
  "vulnerabilities": [
    {
      "affected_packages": [
        {
          "name": "string",
          "type": "string",
          "version": "string",
          "will_not_fix": true
        }
      ],
      "description": "string",
      "id": "string",
      "link": "string",
      "namespace": "string",
      "nvd_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ],
      "references": [
        {
          "source": "string",
          "tags": [
            "string"
          ],
          "url": "string"
        }
      ],
      "severity": "Unknown",
      "vendor_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ]
    }
  ]
}
```

A paginated listing of vulnerability records sorted by ID in descending order

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page|string|false|none|True if additional pages exist (page + 1) or False if this is the last page|
|page|string|false|none|The page number returned (should match the requested page query string param)|
|returned_count|integer|false|none|The number of items sent in this response|
|vulnerabilities|[[StandaloneVulnerability](#schemastandalonevulnerability)]|false|none|The listing of matching vulnerabilities for the query subject to pagination|

<h2 id="tocS_PaginatedVulnerableImageList">PaginatedVulnerableImageList</h2>
<!-- backwards compatibility -->
<a id="schemapaginatedvulnerableimagelist"></a>
<a id="schema_PaginatedVulnerableImageList"></a>
<a id="tocSpaginatedvulnerableimagelist"></a>
<a id="tocspaginatedvulnerableimagelist"></a>

```json
{
  "next_page": "string",
  "page": "string",
  "returned_count": 0,
  "images": [
    {
      "affected_packages": [
        {
          "name": "string",
          "namespace": "string",
          "severity": "string",
          "type": "string",
          "version": "string"
        }
      ],
      "image": {
        "analyzed_at": "string",
        "digest": "string",
        "id": "string",
        "tag_history": [
          {
            "detected_at": "1970-01-01T00:00:00Z",
            "pullstring": "string",
            "registry": "string",
            "repository": "string",
            "tag": "string"
          }
        ]
      }
    }
  ]
}
```

Pagination wrapped list of images with vulnerabilties that match some filter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page|string|false|none|True if additional pages exist (page + 1) or False if this is the last page|
|page|string|false|none|The page number returned (should match the requested page query string param)|
|returned_count|integer|false|none|The number of items sent in this response|
|images|[[VulnerableImage](#schemavulnerableimage)]|false|none|none|

<h2 id="tocS_PaginationProperties">PaginationProperties</h2>
<!-- backwards compatibility -->
<a id="schemapaginationproperties"></a>
<a id="schema_PaginationProperties"></a>
<a id="tocSpaginationproperties"></a>
<a id="tocspaginationproperties"></a>

```json
{
  "next_page": "string",
  "page": "string",
  "returned_count": 0
}
```

Properties for common pagination handling to be included in any wrapping object that needs pagination elements

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|next_page|string|false|none|True if additional pages exist (page + 1) or False if this is the last page|
|page|string|false|none|The page number returned (should match the requested page query string param)|
|returned_count|integer|false|none|The number of items sent in this response|

<h2 id="tocS_Policy">Policy</h2>
<!-- backwards compatibility -->
<a id="schemapolicy"></a>
<a id="schema_Policy"></a>
<a id="tocSpolicy"></a>
<a id="tocspolicy"></a>

```json
{
  "comment": "string",
  "id": "string",
  "name": "string",
  "rules": [
    {
      "action": "GO",
      "gate": "string",
      "id": "string",
      "params": [
        {
          "name": "string",
          "value": "string"
        }
      ],
      "trigger": "string"
    }
  ],
  "version": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|none|
|id|string|true|none|none|
|name|string|false|none|none|
|rules|[[PolicyRule](#schemapolicyrule)]|false|none|none|
|version|string|true|none|none|

<h2 id="tocS_PolicyBundle">PolicyBundle</h2>
<!-- backwards compatibility -->
<a id="schemapolicybundle"></a>
<a id="schema_PolicyBundle"></a>
<a id="tocSpolicybundle"></a>
<a id="tocspolicybundle"></a>

```json
{
  "blacklisted_images": [
    {
      "id": "string",
      "image": {
        "type": "tag",
        "value": "string"
      },
      "name": "string",
      "registry": "string",
      "repository": "string"
    }
  ],
  "comment": "string",
  "id": "string",
  "mappings": [
    {
      "id": "string",
      "image": {
        "type": "tag",
        "value": "string"
      },
      "name": "string",
      "policy_id": "string",
      "policy_ids": [
        "string"
      ],
      "registry": "string",
      "repository": "string",
      "whitelist_ids": [
        "string"
      ]
    }
  ],
  "name": "string",
  "policies": [
    {
      "comment": "string",
      "id": "string",
      "name": "string",
      "rules": [
        {
          "action": "GO",
          "gate": "string",
          "id": "string",
          "params": [
            {
              "name": "string",
              "value": "string"
            }
          ],
          "trigger": "string"
        }
      ],
      "version": "string"
    }
  ],
  "version": "string",
  "whitelisted_images": [
    {
      "id": "string",
      "image": {
        "type": "tag",
        "value": "string"
      },
      "name": "string",
      "registry": "string",
      "repository": "string"
    }
  ],
  "whitelists": [
    {
      "comment": "string",
      "id": "string",
      "items": [
        {
          "expires_on": "1970-01-01T00:00:00Z",
          "gate": "string",
          "id": "string",
          "trigger_id": "string"
        }
      ],
      "name": "string",
      "version": "string"
    }
  ]
}
```

A bundle containing a set of policies, whitelists, and rules for mapping them to specific images

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|blacklisted_images|[[ImageSelectionRule](#schemaimageselectionrule)]|false|none|List of mapping rules that define which images should always result in a STOP/FAIL policy result regardless of policy content or presence in whitelisted_images|
|comment|string|false|none|Description of the bundle, human readable|
|id|string|true|none|Id of the bundle|
|mappings|[[MappingRule](#schemamappingrule)]|true|none|Mapping rules for defining which policy and whitelist(s) to apply to an image based on a match of the image tag or id. Evaluated in order.|
|name|string|false|none|Human readable name for the bundle|
|policies|[[Policy](#schemapolicy)]|true|none|Policies which define the go/stop/warn status of an image using rule matches on image properties|
|version|string|true|none|Version id for this bundle format|
|whitelisted_images|[[ImageSelectionRule](#schemaimageselectionrule)]|false|none|List of mapping rules that define which images should always be passed (unless also on the blacklist), regardless of policy result.|
|whitelists|[[Whitelist](#schemawhitelist)]|false|none|Whitelists which define which policy matches to disregard explicitly in the final policy decision|

<h2 id="tocS_PolicyBundleList">PolicyBundleList</h2>
<!-- backwards compatibility -->
<a id="schemapolicybundlelist"></a>
<a id="schema_PolicyBundleList"></a>
<a id="tocSpolicybundlelist"></a>
<a id="tocspolicybundlelist"></a>

```json
[
  {
    "active": true,
    "created_at": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "policyId": "string",
    "policy_source": "string",
    "policybundle": {
      "blacklisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "comment": "string",
      "id": "string",
      "mappings": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "policy_id": "string",
          "policy_ids": [
            "string"
          ],
          "registry": "string",
          "repository": "string",
          "whitelist_ids": [
            "string"
          ]
        }
      ],
      "name": "string",
      "policies": [
        {
          "comment": "string",
          "id": "string",
          "name": "string",
          "rules": [
            {
              "action": "GO",
              "gate": "string",
              "id": "string",
              "params": [
                {
                  "name": "string",
                  "value": "string"
                }
              ],
              "trigger": "string"
            }
          ],
          "version": "string"
        }
      ],
      "version": "string",
      "whitelisted_images": [
        {
          "id": "string",
          "image": {
            "type": "tag",
            "value": "string"
          },
          "name": "string",
          "registry": "string",
          "repository": "string"
        }
      ],
      "whitelists": [
        {
          "comment": "string",
          "id": "string",
          "items": [
            {
              "expires_on": "1970-01-01T00:00:00Z",
              "gate": "string",
              "id": "string",
              "trigger_id": "string"
            }
          ],
          "name": "string",
          "version": "string"
        }
      ]
    },
    "userId": "string"
  }
]
```

List of PolicyBundleRecord objects

<h2 id="tocS_PolicyBundleRecord">PolicyBundleRecord</h2>
<!-- backwards compatibility -->
<a id="schemapolicybundlerecord"></a>
<a id="schema_PolicyBundleRecord"></a>
<a id="tocSpolicybundlerecord"></a>
<a id="tocspolicybundlerecord"></a>

```json
{
  "active": true,
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "policyId": "string",
  "policy_source": "string",
  "policybundle": {
    "blacklisted_images": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "registry": "string",
        "repository": "string"
      }
    ],
    "comment": "string",
    "id": "string",
    "mappings": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "policy_id": "string",
        "policy_ids": [
          "string"
        ],
        "registry": "string",
        "repository": "string",
        "whitelist_ids": [
          "string"
        ]
      }
    ],
    "name": "string",
    "policies": [
      {
        "comment": "string",
        "id": "string",
        "name": "string",
        "rules": [
          {
            "action": "GO",
            "gate": "string",
            "id": "string",
            "params": [
              {
                "name": "string",
                "value": "string"
              }
            ],
            "trigger": "string"
          }
        ],
        "version": "string"
      }
    ],
    "version": "string",
    "whitelisted_images": [
      {
        "id": "string",
        "image": {
          "type": "tag",
          "value": "string"
        },
        "name": "string",
        "registry": "string",
        "repository": "string"
      }
    ],
    "whitelists": [
      {
        "comment": "string",
        "id": "string",
        "items": [
          {
            "expires_on": "1970-01-01T00:00:00Z",
            "gate": "string",
            "id": "string",
            "trigger_id": "string"
          }
        ],
        "name": "string",
        "version": "string"
      }
    ]
  },
  "userId": "string"
}
```

A policy bundle plus some metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|True if the bundle is currently defined to be used automatically|
|created_at|string(date-time)|false|none|none|
|last_updated|string(date-time)|false|none|none|
|policyId|string|false|none|The bundle's identifier|
|policy_source|string|false|none|Source location of where the policy bundle originated|
|policybundle|[PolicyBundle](#schemapolicybundle)|false|none|A bundle containing a set of policies, whitelists, and rules for mapping them to specific images|
|userId|string|false|none|UserId of the user that owns the bundle|

<h2 id="tocS_PolicyEvalNotification">PolicyEvalNotification</h2>
<!-- backwards compatibility -->
<a id="schemapolicyevalnotification"></a>
<a id="schema_PolicyEvalNotification"></a>
<a id="tocSpolicyevalnotification"></a>
<a id="tocspolicyevalnotification"></a>

```json
{
  "created_at": 0,
  "dataId": "string",
  "last_updated": 0,
  "max_tries": 0,
  "queueId": "string",
  "record_state_key": "active",
  "record_state_val": "string",
  "tries": 0,
  "userId": "string",
  "data": {
    "notification_type": "string",
    "notification_user": "string",
    "notification_user_email": "string",
    "notification_payload": {
      "notificationId": "string",
      "subscription_key": "string",
      "subscription_type": "string",
      "userId": "string",
      "annotations": {},
      "curr_eval": {},
      "last_eval": {}
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|none|
|dataId|string|false|none|none|
|last_updated|integer|false|none|none|
|max_tries|integer|false|none|none|
|queueId|string|false|none|none|
|record_state_key|string|false|none|none|
|record_state_val|string \| null|false|none|none|
|tries|integer|false|none|none|
|userId|string|false|none|none|
|data|[PolicyEvalNotificationData](#schemapolicyevalnotificationdata)|false|none|none|

<h2 id="tocS_PolicyEvalNotificationData">PolicyEvalNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemapolicyevalnotificationdata"></a>
<a id="schema_PolicyEvalNotificationData"></a>
<a id="tocSpolicyevalnotificationdata"></a>
<a id="tocspolicyevalnotificationdata"></a>

```json
{
  "notification_type": "string",
  "notification_user": "string",
  "notification_user_email": "string",
  "notification_payload": {
    "notificationId": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "userId": "string",
    "annotations": {},
    "curr_eval": {},
    "last_eval": {}
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification_type|string|false|none|none|
|notification_user|string|false|none|none|
|notification_user_email|string|false|none|none|
|notification_payload|[PolicyEvalNotificationPayload](#schemapolicyevalnotificationpayload)|false|none|none|

<h2 id="tocS_PolicyEvalNotificationPayload">PolicyEvalNotificationPayload</h2>
<!-- backwards compatibility -->
<a id="schemapolicyevalnotificationpayload"></a>
<a id="schema_PolicyEvalNotificationPayload"></a>
<a id="tocSpolicyevalnotificationpayload"></a>
<a id="tocspolicyevalnotificationpayload"></a>

```json
{
  "notificationId": "string",
  "subscription_key": "string",
  "subscription_type": "string",
  "userId": "string",
  "annotations": {},
  "curr_eval": {},
  "last_eval": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationId|string|false|none|none|
|subscription_key|string|false|none|none|
|subscription_type|string|false|none|none|
|userId|string|false|none|none|
|annotations|object \| null|false|none|List of Corresponding Image Annotations|
|curr_eval|object|false|none|The Current Policy Evaluation result|
|last_eval|object|false|none|The Previous Policy Evaluation result|

<h2 id="tocS_PolicyEvaluation">PolicyEvaluation</h2>
<!-- backwards compatibility -->
<a id="schemapolicyevaluation"></a>
<a id="schema_PolicyEvaluation"></a>
<a id="tocSpolicyevaluation"></a>
<a id="tocspolicyevaluation"></a>

```json
{}
```

Evaluation response object

<h2 id="tocS_PolicyEvaluationList">PolicyEvaluationList</h2>
<!-- backwards compatibility -->
<a id="schemapolicyevaluationlist"></a>
<a id="schema_PolicyEvaluationList"></a>
<a id="tocSpolicyevaluationlist"></a>
<a id="tocspolicyevaluationlist"></a>

```json
[
  {}
]
```

Evaluation response object

<h2 id="tocS_PolicyRule">PolicyRule</h2>
<!-- backwards compatibility -->
<a id="schemapolicyrule"></a>
<a id="schema_PolicyRule"></a>
<a id="tocSpolicyrule"></a>
<a id="tocspolicyrule"></a>

```json
{
  "action": "GO",
  "gate": "string",
  "id": "string",
  "params": [
    {
      "name": "string",
      "value": "string"
    }
  ],
  "trigger": "string"
}
```

A rule that defines and decision value if the match is found true for a given image.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|true|none|none|
|gate|string|true|none|none|
|id|string|false|none|none|
|params|[object]|false|none|none|
|trigger|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|action|GO|
|action|STOP|
|action|WARN|

<h2 id="tocS_RegexContentMatch">RegexContentMatch</h2>
<!-- backwards compatibility -->
<a id="schemaregexcontentmatch"></a>
<a id="schema_RegexContentMatch"></a>
<a id="tocSregexcontentmatch"></a>
<a id="tocsregexcontentmatch"></a>

```json
{
  "lines": [
    0
  ],
  "name": "string",
  "regex": "string"
}
```

Match of a named regex on a file

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|lines|[integer]|false|none|A list of line numbers in the file that matched the regex|
|name|string|false|none|The name associated with the regular expression|
|regex|string|false|none|The regular expression used for the match|

<h2 id="tocS_RegistryConfiguration">RegistryConfiguration</h2>
<!-- backwards compatibility -->
<a id="schemaregistryconfiguration"></a>
<a id="schema_RegistryConfiguration"></a>
<a id="tocSregistryconfiguration"></a>
<a id="tocsregistryconfiguration"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "last_upated": "1970-01-01T00:00:00Z",
  "registry": "string",
  "registry_name": "string",
  "registry_type": "string",
  "registry_user": "string",
  "registry_verify": true,
  "userId": "string"
}
```

A registry entry describing the endpoint and credentials for a registry to pull images from

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|none|
|last_upated|string(date-time)|false|none|none|
|registry|string|false|none|hostname:port string for accessing the registry, as would be used in a docker pull operation|
|registry_name|string|false|none|human readable name associated with registry record|
|registry_type|string|false|none|Type of registry|
|registry_user|string|false|none|Username portion of credential to use for this registry|
|registry_verify|boolean|false|none|Use TLS/SSL verification for the registry URL|
|userId|string|false|none|Engine user that owns this registry entry|

<h2 id="tocS_RegistryConfigurationList">RegistryConfigurationList</h2>
<!-- backwards compatibility -->
<a id="schemaregistryconfigurationlist"></a>
<a id="schema_RegistryConfigurationList"></a>
<a id="tocSregistryconfigurationlist"></a>
<a id="tocsregistryconfigurationlist"></a>

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "last_upated": "1970-01-01T00:00:00Z",
    "registry": "string",
    "registry_name": "string",
    "registry_type": "string",
    "registry_user": "string",
    "registry_verify": true,
    "userId": "string"
  }
]
```

List of registry configurations

<h2 id="tocS_RegistryConfigurationRequest">RegistryConfigurationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaregistryconfigurationrequest"></a>
<a id="schema_RegistryConfigurationRequest"></a>
<a id="tocSregistryconfigurationrequest"></a>
<a id="tocsregistryconfigurationrequest"></a>

```json
{
  "registry": "string",
  "registry_name": "string",
  "registry_pass": "string",
  "registry_type": "string",
  "registry_user": "string",
  "registry_verify": true
}
```

A registry record describing the endpoint and credentials for a registry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|registry|string|false|none|hostname:port string for accessing the registry, as would be used in a docker pull operation. May include some or all of a repository and wildcards (e.g. docker.io/library/* or gcr.io/myproject/myrepository)|
|registry_name|string|false|none|human readable name associated with registry record|
|registry_pass|string|false|none|Password portion of credential to use for this registry|
|registry_type|string|false|none|Type of registry|
|registry_user|string|false|none|Username portion of credential to use for this registry|
|registry_verify|boolean|false|none|Use TLS/SSL verification for the registry URL|

<h2 id="tocS_RegistryDigestSource">RegistryDigestSource</h2>
<!-- backwards compatibility -->
<a id="schemaregistrydigestsource"></a>
<a id="schema_RegistryDigestSource"></a>
<a id="tocSregistrydigestsource"></a>
<a id="tocsregistrydigestsource"></a>

```json
{
  "creation_timestamp_override": "1970-01-01T00:00:00Z",
  "dockerfile": "string",
  "pullstring": "string",
  "tag": "string"
}
```

An image reference using a digest in a registry, includes some extra tag and timestamp info in addition to the pull string to allow proper tag history reconstruction.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|creation_timestamp_override|string(date-time)|false|none|Optional override of the image creation time to support proper tag history construction in cases of out-of-order analysis compared to registry history for the tag|
|dockerfile|string|false|none|Base64 encoded content of the dockerfile used to build the image, if available.|
|pullstring|string|true|none|A digest-based pullstring (e.g. docker.io/nginx@sha256:123abc)|
|tag|string|true|none|A valid docker tag reference (e.g. docker.io/nginx:latest) that will be associated with the image but not used to pull the image.|

<h2 id="tocS_RegistryTagSource">RegistryTagSource</h2>
<!-- backwards compatibility -->
<a id="schemaregistrytagsource"></a>
<a id="schema_RegistryTagSource"></a>
<a id="tocSregistrytagsource"></a>
<a id="tocsregistrytagsource"></a>

```json
{
  "dockerfile": "string",
  "pullstring": "string"
}
```

An image reference using a tag in a registry, this is the most common source type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dockerfile|string|false|none|Base64 encoded content of the dockerfile used to build the image, if available.|
|pullstring|string|true|none|A docker pull string (e.g. docker.io/nginx:latest, or docker.io/nginx@sha256:abd) to retrieve the image|

<h2 id="tocS_RepositoryTagList">RepositoryTagList</h2>
<!-- backwards compatibility -->
<a id="schemarepositorytaglist"></a>
<a id="schema_RepositoryTagList"></a>
<a id="tocSrepositorytaglist"></a>
<a id="tocsrepositorytaglist"></a>

```json
[
  "string"
]
```

List of discovered tags in a repository

<h2 id="tocS_RetrievedFile">RetrievedFile</h2>
<!-- backwards compatibility -->
<a id="schemaretrievedfile"></a>
<a id="schema_RetrievedFile"></a>
<a id="tocSretrievedfile"></a>
<a id="tocsretrievedfile"></a>

```json
{
  "b64_content": "string",
  "path": "string"
}
```

The retrieved file entry including content (b64 encoded)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|b64_content|string|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_RetrievedFileList">RetrievedFileList</h2>
<!-- backwards compatibility -->
<a id="schemaretrievedfilelist"></a>
<a id="schema_RetrievedFileList"></a>
<a id="tocSretrievedfilelist"></a>
<a id="tocsretrievedfilelist"></a>

```json
[
  {
    "b64_content": "string",
    "path": "string"
  }
]
```

Simple array of RetrievedFileMetadata objects

<h2 id="tocS_SecretSearchList">SecretSearchList</h2>
<!-- backwards compatibility -->
<a id="schemasecretsearchlist"></a>
<a id="schema_SecretSearchList"></a>
<a id="tocSsecretsearchlist"></a>
<a id="tocssecretsearchlist"></a>

```json
[
  {
    "matches": [
      {
        "lines": [
          0
        ],
        "name": "string",
        "regex": "string"
      }
    ],
    "path": "string"
  }
]
```

Simple array of RetrievedFileMetadata objects

<h2 id="tocS_SecretSearchResult">SecretSearchResult</h2>
<!-- backwards compatibility -->
<a id="schemasecretsearchresult"></a>
<a id="schema_SecretSearchResult"></a>
<a id="tocSsecretsearchresult"></a>
<a id="tocssecretsearchresult"></a>

```json
{
  "matches": [
    {
      "lines": [
        0
      ],
      "name": "string",
      "regex": "string"
    }
  ],
  "path": "string"
}
```

The retrieved file entry including content (b64 encoded)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|matches|[[RegexContentMatch](#schemaregexcontentmatch)]|false|none|none|
|path|string|false|none|none|

<h2 id="tocS_Service">Service</h2>
<!-- backwards compatibility -->
<a id="schemaservice"></a>
<a id="schema_Service"></a>
<a id="tocSservice"></a>
<a id="tocsservice"></a>

```json
{
  "base_url": "string",
  "hostid": "string",
  "service_detail": {
    "available": true,
    "busy": true,
    "db_version": "string",
    "detail": {},
    "message": "string",
    "up": true,
    "version": "string"
  },
  "servicename": "string",
  "status": true,
  "status_message": "string",
  "version": "string"
}
```

A service status record

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|base_url|string|false|none|The url to reach the service, including port as needed|
|hostid|string|false|none|The unique id of the host on which the service is executing|
|service_detail|[StatusResponse](#schemastatusresponse)|false|none|System status response|
|servicename|string|false|none|Registered service name|
|status|boolean|false|none|none|
|status_message|string|false|none|A state indicating the condition of the service. Normal operation is 'registered'|
|version|string|false|none|The version of the service as reported by the service implementation on registration|

<h2 id="tocS_ServiceList">ServiceList</h2>
<!-- backwards compatibility -->
<a id="schemaservicelist"></a>
<a id="schema_ServiceList"></a>
<a id="tocSservicelist"></a>
<a id="tocsservicelist"></a>

```json
[
  {
    "base_url": "string",
    "hostid": "string",
    "service_detail": {
      "available": true,
      "busy": true,
      "db_version": "string",
      "detail": {},
      "message": "string",
      "up": true,
      "version": "string"
    },
    "servicename": "string",
    "status": true,
    "status_message": "string",
    "version": "string"
  }
]
```

A list of service objects

<h2 id="tocS_ServiceVersion">ServiceVersion</h2>
<!-- backwards compatibility -->
<a id="schemaserviceversion"></a>
<a id="schema_ServiceVersion"></a>
<a id="tocSserviceversion"></a>
<a id="tocsserviceversion"></a>

```json
{
  "api": {
    "version": "string"
  },
  "db": {
    "schema_version": "string"
  },
  "service": {
    "version": "string"
  }
}
```

Version information for a service

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|api|object|false|none|Api Version string|
|db|object|false|none|none|
|service|object|false|none|none|

<h2 id="tocS_StandaloneVulnerability">StandaloneVulnerability</h2>
<!-- backwards compatibility -->
<a id="schemastandalonevulnerability"></a>
<a id="schema_StandaloneVulnerability"></a>
<a id="tocSstandalonevulnerability"></a>
<a id="tocsstandalonevulnerability"></a>

```json
{
  "affected_packages": [
    {
      "name": "string",
      "type": "string",
      "version": "string",
      "will_not_fix": true
    }
  ],
  "description": "string",
  "id": "string",
  "link": "string",
  "namespace": "string",
  "nvd_data": [
    {
      "cvss_v2": {
        "base_score": 0,
        "exploitability_score": 0,
        "impact_score": 0
      },
      "cvss_v3": {
        "base_score": 0,
        "exploitability_score": 0,
        "impact_score": 0
      },
      "id": "string"
    }
  ],
  "references": [
    {
      "source": "string",
      "tags": [
        "string"
      ],
      "url": "string"
    }
  ],
  "severity": "Unknown",
  "vendor_data": [
    {
      "cvss_v2": {
        "base_score": 0,
        "exploitability_score": 0,
        "impact_score": 0
      },
      "cvss_v3": {
        "base_score": 0,
        "exploitability_score": 0,
        "impact_score": 0
      },
      "id": "string"
    }
  ]
}
```

A single vulnerability record in a single namespace, the unique key is the combination of the id and namespace

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affected_packages|[[PackageReference](#schemapackagereference)]|false|none|The array of packages (typically packages) that are vulnerable-to or provide fixes-for this vulnerability|
|description|string|false|none|Description of the vulnerability if available|
|id|string|false|none|Vulnerability identifier. May be CVE-X, RHSA-X, etc. Not necessarily unique across namespaces|
|link|string|false|none|URL for the upstream CVE record in the reporting source (e.g. ubuntu security tracker)|
|namespace|string|false|none|The namespace for the vulnerability record to avoid conflicts for the same id in different distros or sources (e.g. deb vs ubuntu for same CVE)|
|nvd_data|[NvdDataList](#schemanvddatalist)|false|none|List of Nvd Data objects|
|references|[[VulnerabilityReference](#schemavulnerabilityreference)]|false|none|List of references including|
|severity|string|false|none|Severity label specific to the namepsace|
|vendor_data|[VendorDataList](#schemavendordatalist)|false|none|List of Vendor Data objects|

#### Enumerated Values

|Property|Value|
|---|---|
|severity|Unknown|
|severity|Negligible|
|severity|Low|
|severity|Medium|
|severity|High|
|severity|Critical|

<h2 id="tocS_StatusResponse">StatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemastatusresponse"></a>
<a id="schema_StatusResponse"></a>
<a id="tocSstatusresponse"></a>
<a id="tocsstatusresponse"></a>

```json
{
  "available": true,
  "busy": true,
  "db_version": "string",
  "detail": {},
  "message": "string",
  "up": true,
  "version": "string"
}
```

System status response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|available|boolean|false|none|none|
|busy|boolean|false|none|none|
|db_version|string|false|none|none|
|detail|object|false|none|none|
|message|string|false|none|none|
|up|boolean|false|none|none|
|version|string|false|none|none|

<h2 id="tocS_Subscription">Subscription</h2>
<!-- backwards compatibility -->
<a id="schemasubscription"></a>
<a id="schema_Subscription"></a>
<a id="tocSsubscription"></a>
<a id="tocssubscription"></a>

```json
{
  "active": true,
  "subscription_id": "string",
  "subscription_key": "string",
  "subscription_type": "string",
  "subscription_value": "string",
  "userId": "string"
}
```

Subscription entry

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Is the subscription currently active|
|subscription_id|string|false|none|the unique id for this subscription record|
|subscription_key|string|false|none|The key value that the subscription references. E.g. a tag value or a repo name.|
|subscription_type|string|false|none|The type of the subscription|
|subscription_value|string \| null|false|none|The value of the subscription target|
|userId|string|false|none|The userId of the subscribed user|

<h2 id="tocS_SubscriptionList">SubscriptionList</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionlist"></a>
<a id="schema_SubscriptionList"></a>
<a id="tocSsubscriptionlist"></a>
<a id="tocssubscriptionlist"></a>

```json
[
  {
    "active": true,
    "subscription_id": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "subscription_value": "string",
    "userId": "string"
  }
]
```

List of subscriptions

<h2 id="tocS_SubscriptionRequest">SubscriptionRequest</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionrequest"></a>
<a id="schema_SubscriptionRequest"></a>
<a id="tocSsubscriptionrequest"></a>
<a id="tocssubscriptionrequest"></a>

```json
{
  "subscription_key": "string",
  "subscription_type": "string",
  "subscription_value": "string"
}
```

A subscription entry to add to the system

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subscription_key|string|false|none|none|
|subscription_type|string|false|none|none|
|subscription_value|string \| null|false|none|none|

<h2 id="tocS_SubscriptionUpdate">SubscriptionUpdate</h2>
<!-- backwards compatibility -->
<a id="schemasubscriptionupdate"></a>
<a id="schema_SubscriptionUpdate"></a>
<a id="tocSsubscriptionupdate"></a>
<a id="tocssubscriptionupdate"></a>

```json
{
  "active": true,
  "subscription_value": "string"
}
```

A modification to a subscription entry to change its status or value

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Toggle the subscription processing on or off|
|subscription_value|string \| null|false|none|The new subscription value, e.g. the new tag to be subscribed to|

<h2 id="tocS_SystemStatusResponse">SystemStatusResponse</h2>
<!-- backwards compatibility -->
<a id="schemasystemstatusresponse"></a>
<a id="schema_SystemStatusResponse"></a>
<a id="tocSsystemstatusresponse"></a>
<a id="tocssystemstatusresponse"></a>

```json
{
  "service_states": [
    {
      "base_url": "string",
      "hostid": "string",
      "service_detail": {
        "available": true,
        "busy": true,
        "db_version": "string",
        "detail": {},
        "message": "string",
        "up": true,
        "version": "string"
      },
      "servicename": "string",
      "status": true,
      "status_message": "string",
      "version": "string"
    }
  ]
}
```

System status response

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|service_states|[ServiceList](#schemaservicelist)|false|none|A list of service objects|

<h2 id="tocS_TagEntry">TagEntry</h2>
<!-- backwards compatibility -->
<a id="schematagentry"></a>
<a id="schema_TagEntry"></a>
<a id="tocStagentry"></a>
<a id="tocstagentry"></a>

```json
{
  "detected_at": "1970-01-01T00:00:00Z",
  "pullstring": "string",
  "registry": "string",
  "repository": "string",
  "tag": "string"
}
```

A docker-pullable tag value as well as deconstructed components

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|detected_at|string(date-time)|false|none|The timestamp at which the Anchore Engine detected this tag was mapped to the image digest. Does not necessarily indicate when the tag was actually pushed to the registry.|
|pullstring|string|false|none|The pullable string for the tag. E.g. "docker.io/library/node:latest"|
|registry|string|false|none|The registry hostname:port section of the pull string|
|repository|string|false|none|The repository section of the pull string|
|tag|string|false|none|The tag-only section of the pull string|

<h2 id="tocS_TagUpdateNotification">TagUpdateNotification</h2>
<!-- backwards compatibility -->
<a id="schematagupdatenotification"></a>
<a id="schema_TagUpdateNotification"></a>
<a id="tocStagupdatenotification"></a>
<a id="tocstagupdatenotification"></a>

```json
{
  "created_at": 0,
  "dataId": "string",
  "last_updated": 0,
  "max_tries": 0,
  "queueId": "string",
  "record_state_key": "active",
  "record_state_val": "string",
  "tries": 0,
  "userId": "string",
  "data": {
    "notification_type": "string",
    "notification_user": "string",
    "notification_user_email": "string",
    "notification_payload": {
      "notificationId": "string",
      "subscription_key": "string",
      "subscription_type": "string",
      "userId": "string",
      "annotations": {},
      "curr_eval": [
        null
      ],
      "last_eval": [
        null
      ]
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|none|
|dataId|string|false|none|none|
|last_updated|integer|false|none|none|
|max_tries|integer|false|none|none|
|queueId|string|false|none|none|
|record_state_key|string|false|none|none|
|record_state_val|string \| null|false|none|none|
|tries|integer|false|none|none|
|userId|string|false|none|none|
|data|[TagUpdateNotificationData](#schematagupdatenotificationdata)|false|none|none|

<h2 id="tocS_TagUpdateNotificationData">TagUpdateNotificationData</h2>
<!-- backwards compatibility -->
<a id="schematagupdatenotificationdata"></a>
<a id="schema_TagUpdateNotificationData"></a>
<a id="tocStagupdatenotificationdata"></a>
<a id="tocstagupdatenotificationdata"></a>

```json
{
  "notification_type": "string",
  "notification_user": "string",
  "notification_user_email": "string",
  "notification_payload": {
    "notificationId": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "userId": "string",
    "annotations": {},
    "curr_eval": [
      null
    ],
    "last_eval": [
      null
    ]
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification_type|string|false|none|none|
|notification_user|string|false|none|none|
|notification_user_email|string|false|none|none|
|notification_payload|[TagUpdateNotificationPayload](#schematagupdatenotificationpayload)|false|none|none|

<h2 id="tocS_TagUpdateNotificationPayload">TagUpdateNotificationPayload</h2>
<!-- backwards compatibility -->
<a id="schematagupdatenotificationpayload"></a>
<a id="schema_TagUpdateNotificationPayload"></a>
<a id="tocStagupdatenotificationpayload"></a>
<a id="tocstagupdatenotificationpayload"></a>

```json
{
  "notificationId": "string",
  "subscription_key": "string",
  "subscription_type": "string",
  "userId": "string",
  "annotations": {},
  "curr_eval": [
    null
  ],
  "last_eval": [
    null
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationId|string|false|none|none|
|subscription_key|string|false|none|none|
|subscription_type|string|false|none|none|
|userId|string|false|none|none|
|annotations|object \| null|false|none|List of Corresponding Image Annotations|
|curr_eval|[object]|false|none|A list containing the current image digest|
|last_eval|[object]|false|none|A list containing the previous image digests|

<h2 id="tocS_TokenResponse">TokenResponse</h2>
<!-- backwards compatibility -->
<a id="schematokenresponse"></a>
<a id="schema_TokenResponse"></a>
<a id="tocStokenresponse"></a>
<a id="tocstokenresponse"></a>

```json
{
  "token": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|token|string|true|none|The token content|

<h2 id="tocS_TriggerParamSpec">TriggerParamSpec</h2>
<!-- backwards compatibility -->
<a id="schematriggerparamspec"></a>
<a id="schema_TriggerParamSpec"></a>
<a id="tocStriggerparamspec"></a>
<a id="tocstriggerparamspec"></a>

```json
{
  "description": "string",
  "example": "string",
  "name": "string",
  "required": true,
  "state": "active",
  "superceded_by": "string",
  "validator": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|example|string \| null|false|none|An example value for the parameter (encoded as a string if the parameter is an object or list type)|
|name|string|false|none|Parameter name as it appears in policy document|
|required|boolean|false|none|Is this a required parameter or optional|
|state|string|false|none|State of the trigger parameter|
|superceded_by|string \| null|false|none|The name of another trigger that supercedes this on functionally if this is deprecated|
|validator|object|false|none|If present, a definition for validation of input. Typically a jsonschema object that can be used to validate an input against.|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|deprecated|
|state|eol|

<h2 id="tocS_TriggerSpec">TriggerSpec</h2>
<!-- backwards compatibility -->
<a id="schematriggerspec"></a>
<a id="schema_TriggerSpec"></a>
<a id="tocStriggerspec"></a>
<a id="tocstriggerspec"></a>

```json
{
  "description": "string",
  "name": "string",
  "parameters": [
    {
      "description": "string",
      "example": "string",
      "name": "string",
      "required": true,
      "state": "active",
      "superceded_by": "string",
      "validator": {}
    }
  ],
  "state": "active",
  "superceded_by": "string"
}
```

Definition of a trigger and its parameters

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Trigger description for what it tests and when it will fire during evaluation|
|name|string|false|none|Name of the trigger as it would appear in a policy document|
|parameters|[[TriggerParamSpec](#schematriggerparamspec)]|false|none|The list of parameters that are valid for this trigger|
|state|string|false|none|State of the trigger|
|superceded_by|string \| null|false|none|The name of another trigger that supercedes this on functionally if this is deprecated|

#### Enumerated Values

|Property|Value|
|---|---|
|state|active|
|state|deprecated|
|state|eol|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "created_at": "1970-01-01T00:00:00Z",
  "last_updated": "1970-01-01T00:00:00Z",
  "source": "string",
  "type": "native",
  "username": "string"
}
```

A username for authenticating with one or more types of credentials. User type defines the expected credentials allowed for the user. Native users have passwords, External users have no credential internally. Internal users are service/system users for inter-service communication.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|string(date-time)|false|none|The timestampt the user record was created|
|last_updated|string(date-time)|false|none|The timestamp of the last update to this record|
|source|string|false|none|If the user is external, this is the source that the user was initialized from. All other user types have this set to null|
|type|string|false|none|The user's type|
|username|string|true|none|The username to authenticate with|

#### Enumerated Values

|Property|Value|
|---|---|
|type|native|
|type|internal|
|type|external|

<h2 id="tocS_UserCreationRequest">UserCreationRequest</h2>
<!-- backwards compatibility -->
<a id="schemausercreationrequest"></a>
<a id="schema_UserCreationRequest"></a>
<a id="tocSusercreationrequest"></a>
<a id="tocsusercreationrequest"></a>

```json
{
  "password": "string",
  "username": "string"
}
```

A payload for creating a new user, includes the username and password in a single request

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|password|string|true|none|The initial password for the user, must be at least 6 characters, up to 128|
|username|string|true|none|The username to create|

<h2 id="tocS_UserList">UserList</h2>
<!-- backwards compatibility -->
<a id="schemauserlist"></a>
<a id="schema_UserList"></a>
<a id="tocSuserlist"></a>
<a id="tocsuserlist"></a>

```json
[
  {
    "created_at": "1970-01-01T00:00:00Z",
    "last_updated": "1970-01-01T00:00:00Z",
    "source": "string",
    "type": "native",
    "username": "string"
  }
]
```

<h2 id="tocS_VendorDataList">VendorDataList</h2>
<!-- backwards compatibility -->
<a id="schemavendordatalist"></a>
<a id="schema_VendorDataList"></a>
<a id="tocSvendordatalist"></a>
<a id="tocsvendordatalist"></a>

```json
[
  {
    "cvss_v2": {
      "base_score": 0,
      "exploitability_score": 0,
      "impact_score": 0
    },
    "cvss_v3": {
      "base_score": 0,
      "exploitability_score": 0,
      "impact_score": 0
    },
    "id": "string"
  }
]
```

List of Vendor Data objects

<h2 id="tocS_VendorDataObject">VendorDataObject</h2>
<!-- backwards compatibility -->
<a id="schemavendordataobject"></a>
<a id="schema_VendorDataObject"></a>
<a id="tocSvendordataobject"></a>
<a id="tocsvendordataobject"></a>

```json
{
  "cvss_v2": {
    "base_score": 0,
    "exploitability_score": 0,
    "impact_score": 0
  },
  "cvss_v3": {
    "base_score": 0,
    "exploitability_score": 0,
    "impact_score": 0
  },
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cvss_v2|[CVSSV2Scores](#schemacvssv2scores)|false|none|none|
|cvss_v3|[CVSSV3Scores](#schemacvssv3scores)|false|none|none|
|id|string|false|none|Vendor Vulnerability ID|

<h2 id="tocS_VulnDiffResult">VulnDiffResult</h2>
<!-- backwards compatibility -->
<a id="schemavulndiffresult"></a>
<a id="schema_VulnDiffResult"></a>
<a id="tocSvulndiffresult"></a>
<a id="tocsvulndiffresult"></a>

```json
{
  "added": [
    null
  ],
  "removed": [
    null
  ],
  "updated": [
    null
  ]
}
```

The results of the comparing two vulnerability records during an update

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|added|[object]|false|none|none|
|removed|[object]|false|none|none|
|updated|[object]|false|none|none|

<h2 id="tocS_VulnUpdateNotification">VulnUpdateNotification</h2>
<!-- backwards compatibility -->
<a id="schemavulnupdatenotification"></a>
<a id="schema_VulnUpdateNotification"></a>
<a id="tocSvulnupdatenotification"></a>
<a id="tocsvulnupdatenotification"></a>

```json
{
  "created_at": 0,
  "dataId": "string",
  "last_updated": 0,
  "max_tries": 0,
  "queueId": "string",
  "record_state_key": "active",
  "record_state_val": "string",
  "tries": 0,
  "userId": "string",
  "data": {
    "notification_type": "string",
    "notification_user": "string",
    "notification_user_email": "string",
    "notification_payload": {
      "notificationId": "string",
      "subscription_key": "string",
      "subscription_type": "string",
      "userId": "string",
      "annotations": {},
      "diff_vulnerability_result": {
        "added": [
          null
        ],
        "removed": [
          null
        ],
        "updated": [
          null
        ]
      },
      "imageDigest": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|created_at|integer|false|none|none|
|dataId|string|false|none|none|
|last_updated|integer|false|none|none|
|max_tries|integer|false|none|none|
|queueId|string|false|none|none|
|record_state_key|string|false|none|none|
|record_state_val|string \| null|false|none|none|
|tries|integer|false|none|none|
|userId|string|false|none|none|
|data|[VulnUpdateNotificationData](#schemavulnupdatenotificationdata)|false|none|none|

<h2 id="tocS_VulnUpdateNotificationData">VulnUpdateNotificationData</h2>
<!-- backwards compatibility -->
<a id="schemavulnupdatenotificationdata"></a>
<a id="schema_VulnUpdateNotificationData"></a>
<a id="tocSvulnupdatenotificationdata"></a>
<a id="tocsvulnupdatenotificationdata"></a>

```json
{
  "notification_type": "string",
  "notification_user": "string",
  "notification_user_email": "string",
  "notification_payload": {
    "notificationId": "string",
    "subscription_key": "string",
    "subscription_type": "string",
    "userId": "string",
    "annotations": {},
    "diff_vulnerability_result": {
      "added": [
        null
      ],
      "removed": [
        null
      ],
      "updated": [
        null
      ]
    },
    "imageDigest": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notification_type|string|false|none|none|
|notification_user|string|false|none|none|
|notification_user_email|string|false|none|none|
|notification_payload|[VulnUpdateNotificationPayload](#schemavulnupdatenotificationpayload)|false|none|none|

<h2 id="tocS_VulnUpdateNotificationPayload">VulnUpdateNotificationPayload</h2>
<!-- backwards compatibility -->
<a id="schemavulnupdatenotificationpayload"></a>
<a id="schema_VulnUpdateNotificationPayload"></a>
<a id="tocSvulnupdatenotificationpayload"></a>
<a id="tocsvulnupdatenotificationpayload"></a>

```json
{
  "notificationId": "string",
  "subscription_key": "string",
  "subscription_type": "string",
  "userId": "string",
  "annotations": {},
  "diff_vulnerability_result": {
    "added": [
      null
    ],
    "removed": [
      null
    ],
    "updated": [
      null
    ]
  },
  "imageDigest": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|notificationId|string|false|none|none|
|subscription_key|string|false|none|none|
|subscription_type|string|false|none|none|
|userId|string|false|none|none|
|annotations|object \| null|false|none|List of Corresponding Image Annotations|
|diff_vulnerability_result|[VulnDiffResult](#schemavulndiffresult)|false|none|The results of the comparing two vulnerability records during an update|
|imageDigest|string|false|none|none|

<h2 id="tocS_Vulnerability">Vulnerability</h2>
<!-- backwards compatibility -->
<a id="schemavulnerability"></a>
<a id="schema_Vulnerability"></a>
<a id="tocSvulnerability"></a>
<a id="tocsvulnerability"></a>

```json
{
  "feed": "string",
  "feed_group": "string",
  "fix": "string",
  "nvd_data": [
    {
      "cvss_v2": {
        "base_score": 0,
        "exploitability_score": 0,
        "impact_score": 0
      },
      "cvss_v3": {
        "base_score": 0,
        "exploitability_score": 0,
        "impact_score": 0
      },
      "id": "string"
    }
  ],
  "package": "string",
  "package_cpe": "string",
  "package_name": "string",
  "package_path": "string",
  "package_type": "string",
  "package_version": "string",
  "severity": "string",
  "url": "string",
  "vendor_data": [
    {
      "cvss_v2": {
        "base_score": 0,
        "exploitability_score": 0,
        "impact_score": 0
      },
      "cvss_v3": {
        "base_score": 0,
        "exploitability_score": 0,
        "impact_score": 0
      },
      "id": "string"
    }
  ],
  "vuln": "string",
  "will_not_fix": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feed|string|false|none|The name of the feed where vulnerability match was made|
|feed_group|string|false|none|The name of the feed group where vulnerability match was made|
|fix|string|false|none|The package containing a fix, if available|
|nvd_data|[NvdDataList](#schemanvddatalist)|false|none|List of Nvd Data objects|
|package|string|false|none|The package name and version that are vulnerable in the image|
|package_cpe|string|false|none|The CPE string (if applicable) describing the package to vulnerability match|
|package_name|string|false|none|The name of the vulnerable package artifact|
|package_path|string|false|none|The location (if applicable) of the vulnerable package in the container filesystem|
|package_type|string|false|none|The type of vulnerable package|
|package_version|string|false|none|The version of the vulnerable package artifact|
|severity|string|false|none|The severity of the vulnerability|
|url|string|false|none|The url for more information about the vulnerability|
|vendor_data|[VendorDataList](#schemavendordatalist)|false|none|List of Vendor Data objects|
|vuln|string|false|none|The vulnerability identifier, such as CVE-2017-100, or RHSA-2017123|
|will_not_fix|boolean|false|none|Whether a vendor will fix or not fix the vulnerability|

<h2 id="tocS_VulnerabilityList">VulnerabilityList</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilitylist"></a>
<a id="schema_VulnerabilityList"></a>
<a id="tocSvulnerabilitylist"></a>
<a id="tocsvulnerabilitylist"></a>

```json
[
  {
    "feed": "string",
    "feed_group": "string",
    "fix": "string",
    "nvd_data": [
      {
        "cvss_v2": {
          "base_score": 0,
          "exploitability_score": 0,
          "impact_score": 0
        },
        "cvss_v3": {
          "base_score": 0,
          "exploitability_score": 0,
          "impact_score": 0
        },
        "id": "string"
      }
    ],
    "package": "string",
    "package_cpe": "string",
    "package_name": "string",
    "package_path": "string",
    "package_type": "string",
    "package_version": "string",
    "severity": "string",
    "url": "string",
    "vendor_data": [
      {
        "cvss_v2": {
          "base_score": 0,
          "exploitability_score": 0,
          "impact_score": 0
        },
        "cvss_v3": {
          "base_score": 0,
          "exploitability_score": 0,
          "impact_score": 0
        },
        "id": "string"
      }
    ],
    "vuln": "string",
    "will_not_fix": true
  }
]
```

List of Vulnerability objects

<h2 id="tocS_VulnerabilityReference">VulnerabilityReference</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityreference"></a>
<a id="schema_VulnerabilityReference"></a>
<a id="tocSvulnerabilityreference"></a>
<a id="tocsvulnerabilityreference"></a>

```json
{
  "source": "string",
  "tags": [
    "string"
  ],
  "url": "string"
}
```

An external link/reference

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|source|string|false|none|The reference source|
|tags|[string]|false|none|none|
|url|string|false|none|The reference url|

<h2 id="tocS_VulnerabilityResponse">VulnerabilityResponse</h2>
<!-- backwards compatibility -->
<a id="schemavulnerabilityresponse"></a>
<a id="schema_VulnerabilityResponse"></a>
<a id="tocSvulnerabilityresponse"></a>
<a id="tocsvulnerabilityresponse"></a>

```json
{
  "imageDigest": "string",
  "vulnerabilities": [
    {
      "feed": "string",
      "feed_group": "string",
      "fix": "string",
      "nvd_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ],
      "package": "string",
      "package_cpe": "string",
      "package_name": "string",
      "package_path": "string",
      "package_type": "string",
      "package_version": "string",
      "severity": "string",
      "url": "string",
      "vendor_data": [
        {
          "cvss_v2": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "cvss_v3": {
            "base_score": 0,
            "exploitability_score": 0,
            "impact_score": 0
          },
          "id": "string"
        }
      ],
      "vuln": "string",
      "will_not_fix": true
    }
  ],
  "vulnerability_type": "string"
}
```

envelope containing list of vulnerabilities

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|imageDigest|string|false|none|none|
|vulnerabilities|[VulnerabilityList](#schemavulnerabilitylist)|false|none|List of Vulnerability objects|
|vulnerability_type|string|false|none|none|

<h2 id="tocS_VulnerableImage">VulnerableImage</h2>
<!-- backwards compatibility -->
<a id="schemavulnerableimage"></a>
<a id="schema_VulnerableImage"></a>
<a id="tocSvulnerableimage"></a>
<a id="tocsvulnerableimage"></a>

```json
{
  "affected_packages": [
    {
      "name": "string",
      "namespace": "string",
      "severity": "string",
      "type": "string",
      "version": "string"
    }
  ],
  "image": {
    "analyzed_at": "string",
    "digest": "string",
    "id": "string",
    "tag_history": [
      {
        "detected_at": "1970-01-01T00:00:00Z",
        "pullstring": "string",
        "registry": "string",
        "repository": "string",
        "tag": "string"
      }
    ]
  }
}
```

A record of an image vulnerable to some known vulnerability. Includes vulnerable package information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|affected_packages|[[VulnerablePackageReference](#schemavulnerablepackagereference)]|false|none|none|
|image|[ImageReference](#schemaimagereference)|false|none|A summary of an image identity, including digest, id (if available), and any tags known to have ever been mapped to the digest|

<h2 id="tocS_VulnerablePackageReference">VulnerablePackageReference</h2>
<!-- backwards compatibility -->
<a id="schemavulnerablepackagereference"></a>
<a id="schema_VulnerablePackageReference"></a>
<a id="tocSvulnerablepackagereference"></a>
<a id="tocsvulnerablepackagereference"></a>

```json
{
  "name": "string",
  "namespace": "string",
  "severity": "string",
  "type": "string",
  "version": "string"
}
```

A record of a software item which is vulnerable or carries a fix for a vulnerability

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Package name|
|namespace|string|false|none|Vulnerability namespace of affected package|
|severity|string|false|none|Severity of vulnerability affecting package|
|type|string|false|none|Package type (e.g. package, rpm, deb, apk, jar, npm, gem, ...)|
|version|string \| null|false|none|A version for the package. If null, then references all versions|

<h2 id="tocS_Whitelist">Whitelist</h2>
<!-- backwards compatibility -->
<a id="schemawhitelist"></a>
<a id="schema_Whitelist"></a>
<a id="tocSwhitelist"></a>
<a id="tocswhitelist"></a>

```json
{
  "comment": "string",
  "id": "string",
  "items": [
    {
      "expires_on": "1970-01-01T00:00:00Z",
      "gate": "string",
      "id": "string",
      "trigger_id": "string"
    }
  ],
  "name": "string",
  "version": "string"
}
```

A collection of whitelist items to match a policy evaluation against.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|comment|string|false|none|none|
|id|string|true|none|none|
|items|[[WhitelistItem](#schemawhitelistitem)]|false|none|none|
|name|string|false|none|none|
|version|string|true|none|none|

<h2 id="tocS_WhitelistItem">WhitelistItem</h2>
<!-- backwards compatibility -->
<a id="schemawhitelistitem"></a>
<a id="schema_WhitelistItem"></a>
<a id="tocSwhitelistitem"></a>
<a id="tocswhitelistitem"></a>

```json
{
  "expires_on": "1970-01-01T00:00:00Z",
  "gate": "string",
  "id": "string",
  "trigger_id": "string"
}
```

Identifies a specific gate and trigger match from a policy against an image and indicates it should be ignored in final policy decisions

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|expires_on|string(date-time)|false|none|none|
|gate|string|true|none|none|
|id|string|false|none|none|
|trigger_id|string|true|none|none|
