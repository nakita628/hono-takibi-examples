<h1 id="dashboard">dashboard v0.0.1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Dashboard app

License: agpl

# Authentication

- HTTP Authentication, scheme: basic

- HTTP Authentication, scheme: bearer

<h1 id="dashboard-dashboardapi">dashboard_api</h1>

## Get the items for the widgets

<a id="opIddashboard_api-get-widget-items"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dashboard/api/v1/widget-items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dashboard/api/v1/widget-items`

<h3 id="get-the-items-for-the-widgets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sinceIds|query|string|false|Array indexed by widget Ids, contains date/id from which we want the new items|
|limit|query|integer(int64)|false|Limit number of result items per widget|
|widgets[]|query|[string]|false|Limit results to specific widgets|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": [
        {
          "subtitle": "string",
          "title": "string",
          "link": "string",
          "iconUrl": "string",
          "overlayIconUrl": "string",
          "sinceId": "string"
        }
      ],
      "property2": [
        {
          "subtitle": "string",
          "title": "string",
          "link": "string",
          "iconUrl": "string",
          "overlayIconUrl": "string",
          "sinceId": "string"
        }
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-items-for-the-widgets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Widget items returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-items-for-the-widgets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|[[WidgetItem](#schemawidgetitem)]|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the items for the widgets

<a id="opIddashboard_api-get-widget-items-v2"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dashboard/api/v2/widget-items \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dashboard/api/v2/widget-items`

<h3 id="get-the-items-for-the-widgets-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|sinceIds|query|string|false|Array indexed by widget Ids, contains date/id from which we want the new items|
|limit|query|integer(int64)|false|Limit number of result items per widget, not more than 30 are allowed|
|widgets[]|query|[string]|false|Limit results to specific widgets|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": {
        "items": [
          {
            "subtitle": "string",
            "title": "string",
            "link": "string",
            "iconUrl": "string",
            "overlayIconUrl": "string",
            "sinceId": "string"
          }
        ],
        "emptyContentMessage": "string",
        "halfEmptyContentMessage": "string"
      },
      "property2": {
        "items": [
          {
            "subtitle": "string",
            "title": "string",
            "link": "string",
            "iconUrl": "string",
            "overlayIconUrl": "string",
            "sinceId": "string"
          }
        ],
        "emptyContentMessage": "string",
        "halfEmptyContentMessage": "string"
      }
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-items-for-the-widgets-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Widget items returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-items-for-the-widgets-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|[WidgetItems](#schemawidgetitems)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the widgets

<a id="opIddashboard_api-get-widgets"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dashboard/api/v1/widgets \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dashboard/api/v1/widgets`

<h3 id="get-the-widgets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "property1": {
        "id": "string",
        "title": "string",
        "order": 0,
        "icon_class": "string",
        "icon_url": "string",
        "widget_url": "string",
        "item_icons_round": true,
        "item_api_versions": [
          0
        ],
        "reload_interval": 0,
        "buttons": [
          {
            "type": "string",
            "text": "string",
            "link": "string"
          }
        ]
      },
      "property2": {
        "id": "string",
        "title": "string",
        "order": 0,
        "icon_class": "string",
        "icon_url": "string",
        "widget_url": "string",
        "item_icons_round": true,
        "item_api_versions": [
          0
        ],
        "reload_interval": 0,
        "buttons": [
          {
            "type": "string",
            "text": "string",
            "link": "string"
          }
        ]
      }
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-widgets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Widgets returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-widgets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » **additionalProperties**|[Widget](#schemawidget)|false|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the layout

<a id="opIddashboard_api-get-layout"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dashboard/api/v3/layout \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dashboard/api/v3/layout`

<h3 id="get-the-layout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "layout": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-layout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Layout returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-layout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » layout|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update the layout

<a id="opIddashboard_api-update-layout"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dashboard/api/v3/layout \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "layout": [
      "string"
    ]
  }'
```

`POST /ocs/v2.php/apps/dashboard/api/v3/layout`

> Body parameter

```json
{
  "layout": [
    "string"
  ]
}
```

<h3 id="update-the-layout-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» layout|body|[string]|true|The new layout|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "layout": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-the-layout-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statuses updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="update-the-layout-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » layout|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Get the statuses

<a id="opIddashboard_api-get-statuses"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dashboard/api/v3/statuses \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true'
```

`GET /ocs/v2.php/apps/dashboard/api/v3/statuses`

<h3 id="get-the-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "statuses": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="get-the-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statuses returned|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="get-the-statuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » statuses|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

## Update the statuses

<a id="opIddashboard_api-update-statuses"></a>

> Code samples

```bash
curl https://cloud.example.com/ocs/v2.php/apps/dashboard/api/v3/statuses \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "Authorization: Bearer ${ACCESS_TOKEN}" \
  -H 'OCS-APIRequest: true' \
  -d '{
    "statuses": [
      "string"
    ]
  }'
```

`POST /ocs/v2.php/apps/dashboard/api/v3/statuses`

> Body parameter

```json
{
  "statuses": [
    "string"
  ]
}
```

<h3 id="update-the-statuses-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|OCS-APIRequest|header|boolean|true|Required to be true for the API request to pass|
|body|body|object|true|none|
|» statuses|body|[string]|true|The new statuses|

> Example responses

> 200 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": {
      "statuses": [
        "string"
      ]
    }
  }
}
```

> 401 Response

```json
{
  "ocs": {
    "meta": {
      "status": "string",
      "statuscode": 0,
      "message": "string",
      "totalitems": "string",
      "itemsperpage": "string"
    },
    "data": null
  }
}
```

<h3 id="update-the-statuses-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Statuses updated successfully|Inline|
|401|Unauthorized|Current user is not logged in|Inline|

<h3 id="update-the-statuses-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|
|» » statuses|[string]|true|none|none|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ocs|object|true|none|none|
|» meta|[OCSMeta](#schemaocsmeta)|true|none|none|
|» data|object|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
bearer_auth, basic_auth
</aside>

# Schemas

<h2 id="tocS_OCSMeta">OCSMeta</h2>
<!-- backwards compatibility -->
<a id="schemaocsmeta"></a>
<a id="schema_OCSMeta"></a>
<a id="tocSocsmeta"></a>
<a id="tocsocsmeta"></a>

```json
{
  "status": "string",
  "statuscode": 0,
  "message": "string",
  "totalitems": "string",
  "itemsperpage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|true|none|none|
|statuscode|integer|true|none|none|
|message|string|false|none|none|
|totalitems|string|false|none|none|
|itemsperpage|string|false|none|none|

<h2 id="tocS_Widget">Widget</h2>
<!-- backwards compatibility -->
<a id="schemawidget"></a>
<a id="schema_Widget"></a>
<a id="tocSwidget"></a>
<a id="tocswidget"></a>

```json
{
  "id": "string",
  "title": "string",
  "order": 0,
  "icon_class": "string",
  "icon_url": "string",
  "widget_url": "string",
  "item_icons_round": true,
  "item_api_versions": [
    0
  ],
  "reload_interval": 0,
  "buttons": [
    {
      "type": "string",
      "text": "string",
      "link": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|none|
|title|string|true|none|none|
|order|integer(int64)|true|none|none|
|icon_class|string|true|none|none|
|icon_url|string|true|none|none|
|widget_url|string \| null|true|none|none|
|item_icons_round|boolean|true|none|none|
|item_api_versions|[integer(int64)]|true|none|none|
|reload_interval|integer(int64)|true|none|none|
|buttons|[object]|false|none|none|

<h2 id="tocS_WidgetItem">WidgetItem</h2>
<!-- backwards compatibility -->
<a id="schemawidgetitem"></a>
<a id="schema_WidgetItem"></a>
<a id="tocSwidgetitem"></a>
<a id="tocswidgetitem"></a>

```json
{
  "subtitle": "string",
  "title": "string",
  "link": "string",
  "iconUrl": "string",
  "overlayIconUrl": "string",
  "sinceId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|subtitle|string|true|none|none|
|title|string|true|none|none|
|link|string|true|none|none|
|iconUrl|string|true|none|none|
|overlayIconUrl|string|true|none|none|
|sinceId|string|true|none|none|

<h2 id="tocS_WidgetItems">WidgetItems</h2>
<!-- backwards compatibility -->
<a id="schemawidgetitems"></a>
<a id="schema_WidgetItems"></a>
<a id="tocSwidgetitems"></a>
<a id="tocswidgetitems"></a>

```json
{
  "items": [
    {
      "subtitle": "string",
      "title": "string",
      "link": "string",
      "iconUrl": "string",
      "overlayIconUrl": "string",
      "sinceId": "string"
    }
  ],
  "emptyContentMessage": "string",
  "halfEmptyContentMessage": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|items|[[WidgetItem](#schemawidgetitem)]|true|none|none|
|emptyContentMessage|string|true|none|none|
|halfEmptyContentMessage|string|true|none|none|
