<h1 id="ecosystem-api">Ecosystem API v0.0.6</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Ecosystem API

Base URLs:

* <a href="https://api.apideck.com">https://api.apideck.com</a> - Production

Email: <a href="mailto:hello@apideck.com">hello@apideck.com</a> 
Web: <a href="https://developers.apideck.com">https://developers.apideck.com</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://developers.apideck.com">Apideck Developer Docs</a>

<h1 id="ecosystem-api-ecosystem">Ecosystem</h1>

## Get ecosystem

<a id="opIdecosystemsOne"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}`

Get ecosystem

<h3 id="get-ecosystem-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": {
    "about": "string",
    "alternatives_background_color": "string",
    "alternatives_color": "string",
    "attribution": true,
    "body_background_color": "string",
    "body_button_background_color": "string",
    "body_button_color": "string",
    "body_color": "string",
    "body_link_color": "string",
    "card_settings": {
      "background_color": "string",
      "border_color": "string",
      "border_radius": "string",
      "border_size": "string",
      "color": "string",
      "columns": 0,
      "description_lines": 0,
      "icon_border_radius": "string",
      "icon_shadow_enabled": true,
      "icon_size": 0,
      "shadow_enabled": true,
      "show_action": true,
      "show_badges": true,
      "show_category": true,
      "show_description": true,
      "style": "string"
    },
    "categories_count_badge": true,
    "categories_show_max_items": 0,
    "collections_count_badge": true,
    "collections_title": "string",
    "create_link": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "cta_settings": {
      "background_color": "string",
      "button_background_color": "string",
      "button_color": "string",
      "button_label": "string",
      "button_link": "string",
      "color": "string",
      "description": "string",
      "enabled": true,
      "title": "string"
    },
    "custom_domain": "string",
    "custom_settings": {
      "css": "string",
      "css_link": "string",
      "domain": "string",
      "html_footer": "string",
      "html_nav": "string",
      "java_script_link": "string"
    },
    "detail_pages_enabled": true,
    "footer_background_color": "string",
    "footer_color": "string",
    "google_site_verification_id": "string",
    "hide_install_buttons": true,
    "home_page_collection_category_cards": true,
    "home_page_show_all_listings": true,
    "id": "12345",
    "installation_request_flow_enabled": true,
    "integration_settings": {
      "albacross_id": "string",
      "automate_enabled": true,
      "blendr_enabled": true,
      "combidesk_enabled": true,
      "crisp_id": "string",
      "drift_id": "string",
      "google_analytics_id": "string",
      "google_tag_manager_id": "string",
      "heap_id": "string",
      "hubspot_portal_id": "string",
      "integromat_enabled": true,
      "intercom_app_id": "string",
      "iubenda_cookie_policy_id": "string",
      "iubenda_site_id": "string",
      "journy_io_domain": "string",
      "journy_io_id": "string",
      "livechat_id": "string",
      "metomic_id": "string",
      "microsoft_flow_enabled": true,
      "microsoft_flow_id": "string",
      "onetrust_id": "string",
      "piesync_enabled": true,
      "segment_enabled": true,
      "segment_id": "string",
      "tray_io_enabled": true,
      "zapier_beta_link": "string",
      "zapier_enabled": true,
      "zapier_id": "string"
    },
    "is_published": true,
    "lead_form_settings": {
      "capture_form_enabled": true,
      "first_name_field_enabled": true,
      "first_name_field_required": true,
      "integration_enabled": true,
      "last_name_field_enabled": true,
      "last_name_field_required": true,
      "telephone_field_enabled": true,
      "telephone_field_required": true,
      "work_email_validation": true
    },
    "listing_settings": {
      "description_text_template": "string",
      "description_title": "string",
      "features_text_template": "string",
      "features_title": "string",
      "install_button_label": "string",
      "name_postfix": "string",
      "naming": "LISTING",
      "native_integration_link": "string",
      "pricing_disabled": true,
      "pricing_text_template": "string",
      "pricing_title": "string",
      "sidebar_position": "TOP"
    },
    "masthead_settings": {
      "background": "string",
      "background_color": "string",
      "color": "string",
      "columns": 0,
      "description": "string",
      "title": "string"
    },
    "menu_position": "TOP",
    "menu_style": "LIST",
    "meta_tag_settings": {
      "description": "string",
      "description_category_page": "string",
      "description_collection_page": "string",
      "description_listing_page": "string",
      "keywords": "string",
      "title": "string",
      "title_postfix": "string"
    },
    "name": "string",
    "navigation_background_color": "string",
    "navigation_color": "string",
    "navigation_logo_post_fix": "string",
    "navigation_mobile_menu_type": "ICON",
    "navigation_sticky": true,
    "primary_color": "string",
    "privacy_link": "string",
    "request_link": "string",
    "shadow_page_description": "string",
    "shadow_pages_enabled": true,
    "show_attribution_badge": true,
    "show_requested_listings": true,
    "slug": "string",
    "terms_link": "string",
    "total_published_listings": 0,
    "unify_application_id": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "utm_campaign": "string",
    "website": "string",
    "zaps_menu_title": "string",
    "zaps_page_enabled": true
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="get-ecosystem-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Ecosystems|[GetEcosystemResponse](#schemagetecosystemresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ecosystem-api-listing">Listing</h1>

## List listings

<a id="opIdlistingsAll"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/listings \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/listings`

List listings

<h3 id="list-listings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of records to return|
|external_id|query|string|false|Filter on external_id|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "automate_id": "string",
      "blendr_id": "string",
      "card_background_color": "string",
      "card_background_image": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "categories": [
        {
          "count": 1,
          "created_at": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "listing_description_text_template": "string",
          "listing_features_text_template": "string",
          "listing_pricing_text_template": "string",
          "logo": {
            "content_type": "string",
            "id": "string",
            "type": "LOGO",
            "url": "string"
          },
          "name": "string",
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "updated_at": "1970-01-01T00:00:00Z"
        }
      ],
      "cloud_service_id": "string",
      "collections": [
        {
          "card_background_color": "string",
          "card_background_image": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "card_columns": 0,
          "card_style": "string",
          "count": 1,
          "description": "string",
          "hidden_from_homepage": true,
          "id": "string",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 0,
          "show_max_items_homepage": 0,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "combidesk_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "detail_page_disabled": true,
      "external_id": "12345",
      "features": "string",
      "id": "12345",
      "integromat_id": "string",
      "logo": {
        "content_type": "string",
        "id": "string",
        "type": "LOGO",
        "url": "string"
      },
      "media": [
        {
          "caption": "Media",
          "id": "12345",
          "sequence": 1,
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "type": "SCREENSHOT",
          "url": "string"
        }
      ],
      "meta_tag_description": "string",
      "meta_tag_keywords": "string",
      "meta_tag_title": "string",
      "microsoft_flow_id": "string",
      "name": "string",
      "native_integration": true,
      "native_integration_link": "string",
      "partner": {
        "company": "string",
        "contacts": [
          {
            "email": "string",
            "first_name": "string",
            "id": "12345",
            "last_name": "string",
            "linked_in": "string",
            "name": "string",
            "role": "string",
            "twitter": "string"
          }
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "icon": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "id": "12345",
        "listed": "string",
        "twitter": "string",
        "updated_at": "1970-01-01T00:00:00Z",
        "website": "string"
      },
      "piesync_id": "string",
      "pricing": "string",
      "products": [
        {
          "count": 1,
          "description": "string",
          "id": "12345",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 1,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "published": true,
      "published_at": "1970-01-01T00:00:00Z",
      "screenshots": [
        {
          "caption": "Screenshot",
          "file": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "id": "12345",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      ],
      "segment_id": "string",
      "slug": "string",
      "sticky": true,
      "tag_line": "string",
      "third_party_integration": true,
      "third_party_integration_link": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "tray_io_id": "string",
      "unify_connector_id": "string",
      "upcoming": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "zapier_id": "string"
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="list-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listings|[GetListingsResponse](#schemagetlistingsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get listing

<a id="opIdlistingsOne"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/listings/string \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/listings/{id}`

Get listing

<h3 id="get-listing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|id|path|string|true|ID of the record you are acting upon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "automate_id": "string",
    "blendr_id": "string",
    "card_background_color": "string",
    "card_background_image": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "categories": [
      {
        "count": 1,
        "created_at": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "string",
        "listing_description_text_template": "string",
        "listing_features_text_template": "string",
        "listing_pricing_text_template": "string",
        "logo": {
          "content_type": "string",
          "id": "string",
          "type": "LOGO",
          "url": "string"
        },
        "name": "string",
        "slug": "string",
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ],
        "updated_at": "1970-01-01T00:00:00Z"
      }
    ],
    "cloud_service_id": "string",
    "collections": [
      {
        "card_background_color": "string",
        "card_background_image": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "card_columns": 0,
        "card_style": "string",
        "count": 1,
        "description": "string",
        "hidden_from_homepage": true,
        "id": "string",
        "logo": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "name": "string",
        "sequence": 0,
        "show_max_items_homepage": 0,
        "slug": "string",
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ],
        "visible": true
      }
    ],
    "combidesk_id": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "description": "string",
    "detail_page_disabled": true,
    "external_id": "12345",
    "features": "string",
    "id": "12345",
    "integromat_id": "string",
    "logo": {
      "content_type": "string",
      "id": "string",
      "type": "LOGO",
      "url": "string"
    },
    "media": [
      {
        "caption": "Media",
        "id": "12345",
        "sequence": 1,
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ],
        "type": "SCREENSHOT",
        "url": "string"
      }
    ],
    "meta_tag_description": "string",
    "meta_tag_keywords": "string",
    "meta_tag_title": "string",
    "microsoft_flow_id": "string",
    "name": "string",
    "native_integration": true,
    "native_integration_link": "string",
    "partner": {
      "company": "string",
      "contacts": [
        {
          "email": "string",
          "first_name": "string",
          "id": "12345",
          "last_name": "string",
          "linked_in": "string",
          "name": "string",
          "role": "string",
          "twitter": "string"
        }
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "icon": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "id": "12345",
      "listed": "string",
      "twitter": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "website": "string"
    },
    "piesync_id": "string",
    "pricing": "string",
    "products": [
      {
        "count": 1,
        "description": "string",
        "id": "12345",
        "logo": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "name": "string",
        "sequence": 1,
        "slug": "string",
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ],
        "visible": true
      }
    ],
    "published": true,
    "published_at": "1970-01-01T00:00:00Z",
    "screenshots": [
      {
        "caption": "Screenshot",
        "file": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "id": "12345",
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      }
    ],
    "segment_id": "string",
    "slug": "string",
    "sticky": true,
    "tag_line": "string",
    "third_party_integration": true,
    "third_party_integration_link": "string",
    "translations": [
      {
        "key": "string",
        "locale": "string",
        "value": "string"
      }
    ],
    "tray_io_id": "string",
    "unify_connector_id": "string",
    "upcoming": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "zapier_id": "string"
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="get-listing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listing|[GetListingResponse](#schemagetlistingresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ecosystem-api-collection">Collection</h1>

## List collections

<a id="opIdcollectionsAll"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/collections \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/collections`

List collections

<h3 id="list-collections-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of records to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "card_background_color": "string",
      "card_background_image": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "card_columns": 0,
      "card_style": "string",
      "count": 1,
      "description": "string",
      "hidden_from_homepage": true,
      "id": "string",
      "logo": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "name": "string",
      "sequence": 0,
      "show_max_items_homepage": 0,
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "visible": true
    }
  ],
  "status": "OK",
  "status_code": 200
}
```

<h3 id="list-collections-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collections|[GetCollectionsResponse](#schemagetcollectionsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get collection

<a id="opIdcollectionsOne"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/collections/string \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/collections/{id}`

Get collection

<h3 id="get-collection-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|id|path|string|true|ID of the record you are acting upon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "card_background_color": "string",
    "card_background_image": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "card_columns": 0,
    "card_style": "string",
    "count": 1,
    "description": "string",
    "hidden_from_homepage": true,
    "id": "string",
    "logo": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "name": "string",
    "sequence": 0,
    "show_max_items_homepage": 0,
    "slug": "string",
    "translations": [
      {
        "key": "string",
        "locale": "string",
        "value": "string"
      }
    ],
    "visible": true
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="get-collection-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Collection|[GetCollectionResponse](#schemagetcollectionresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List collection listings

<a id="opIdcollectionListingsAll"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/collections/string/listings \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/collections/{id}/listings`

List collection listings

<h3 id="list-collection-listings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|id|path|string|true|ID of the record you are acting upon.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of records to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "automate_id": "string",
      "blendr_id": "string",
      "card_background_color": "string",
      "card_background_image": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "categories": [
        {
          "count": 1,
          "created_at": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "listing_description_text_template": "string",
          "listing_features_text_template": "string",
          "listing_pricing_text_template": "string",
          "logo": {
            "content_type": "string",
            "id": "string",
            "type": "LOGO",
            "url": "string"
          },
          "name": "string",
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "updated_at": "1970-01-01T00:00:00Z"
        }
      ],
      "cloud_service_id": "string",
      "collections": [
        {
          "card_background_color": "string",
          "card_background_image": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "card_columns": 0,
          "card_style": "string",
          "count": 1,
          "description": "string",
          "hidden_from_homepage": true,
          "id": "string",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 0,
          "show_max_items_homepage": 0,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "combidesk_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "detail_page_disabled": true,
      "external_id": "12345",
      "features": "string",
      "id": "12345",
      "integromat_id": "string",
      "logo": {
        "content_type": "string",
        "id": "string",
        "type": "LOGO",
        "url": "string"
      },
      "media": [
        {
          "caption": "Media",
          "id": "12345",
          "sequence": 1,
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "type": "SCREENSHOT",
          "url": "string"
        }
      ],
      "meta_tag_description": "string",
      "meta_tag_keywords": "string",
      "meta_tag_title": "string",
      "microsoft_flow_id": "string",
      "name": "string",
      "native_integration": true,
      "native_integration_link": "string",
      "partner": {
        "company": "string",
        "contacts": [
          {
            "email": "string",
            "first_name": "string",
            "id": "12345",
            "last_name": "string",
            "linked_in": "string",
            "name": "string",
            "role": "string",
            "twitter": "string"
          }
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "icon": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "id": "12345",
        "listed": "string",
        "twitter": "string",
        "updated_at": "1970-01-01T00:00:00Z",
        "website": "string"
      },
      "piesync_id": "string",
      "pricing": "string",
      "products": [
        {
          "count": 1,
          "description": "string",
          "id": "12345",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 1,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "published": true,
      "published_at": "1970-01-01T00:00:00Z",
      "screenshots": [
        {
          "caption": "Screenshot",
          "file": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "id": "12345",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      ],
      "segment_id": "string",
      "slug": "string",
      "sticky": true,
      "tag_line": "string",
      "third_party_integration": true,
      "third_party_integration_link": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "tray_io_id": "string",
      "unify_connector_id": "string",
      "upcoming": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "zapier_id": "string"
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="list-collection-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listings|[GetListingsResponse](#schemagetlistingsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ecosystem-api-category">Category</h1>

## List categories

<a id="opIdcategoriesAll"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/categories \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/categories`

List categories

<h3 id="list-categories-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of records to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "count": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "listing_description_text_template": "string",
      "listing_features_text_template": "string",
      "listing_pricing_text_template": "string",
      "logo": {
        "content_type": "string",
        "id": "string",
        "type": "LOGO",
        "url": "string"
      },
      "name": "string",
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="list-categories-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Categories|[GetCategoriesResponse](#schemagetcategoriesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get category

<a id="opIdcategoriesOne"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/categories/string \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/categories/{id}`

Get category

<h3 id="get-category-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|id|path|string|true|ID of the record you are acting upon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "count": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "listing_description_text_template": "string",
    "listing_features_text_template": "string",
    "listing_pricing_text_template": "string",
    "logo": {
      "content_type": "string",
      "id": "string",
      "type": "LOGO",
      "url": "string"
    },
    "name": "string",
    "slug": "string",
    "translations": [
      {
        "key": "string",
        "locale": "string",
        "value": "string"
      }
    ],
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="get-category-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Category|[GetCategoryResponse](#schemagetcategoryresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List category listings

<a id="opIdcategoryListingsAll"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/categories/string/listings \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/categories/{id}/listings`

List category listings

<h3 id="list-category-listings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|id|path|string|true|ID of the record you are acting upon.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of records to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "automate_id": "string",
      "blendr_id": "string",
      "card_background_color": "string",
      "card_background_image": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "categories": [
        {
          "count": 1,
          "created_at": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "listing_description_text_template": "string",
          "listing_features_text_template": "string",
          "listing_pricing_text_template": "string",
          "logo": {
            "content_type": "string",
            "id": "string",
            "type": "LOGO",
            "url": "string"
          },
          "name": "string",
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "updated_at": "1970-01-01T00:00:00Z"
        }
      ],
      "cloud_service_id": "string",
      "collections": [
        {
          "card_background_color": "string",
          "card_background_image": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "card_columns": 0,
          "card_style": "string",
          "count": 1,
          "description": "string",
          "hidden_from_homepage": true,
          "id": "string",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 0,
          "show_max_items_homepage": 0,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "combidesk_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "detail_page_disabled": true,
      "external_id": "12345",
      "features": "string",
      "id": "12345",
      "integromat_id": "string",
      "logo": {
        "content_type": "string",
        "id": "string",
        "type": "LOGO",
        "url": "string"
      },
      "media": [
        {
          "caption": "Media",
          "id": "12345",
          "sequence": 1,
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "type": "SCREENSHOT",
          "url": "string"
        }
      ],
      "meta_tag_description": "string",
      "meta_tag_keywords": "string",
      "meta_tag_title": "string",
      "microsoft_flow_id": "string",
      "name": "string",
      "native_integration": true,
      "native_integration_link": "string",
      "partner": {
        "company": "string",
        "contacts": [
          {
            "email": "string",
            "first_name": "string",
            "id": "12345",
            "last_name": "string",
            "linked_in": "string",
            "name": "string",
            "role": "string",
            "twitter": "string"
          }
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "icon": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "id": "12345",
        "listed": "string",
        "twitter": "string",
        "updated_at": "1970-01-01T00:00:00Z",
        "website": "string"
      },
      "piesync_id": "string",
      "pricing": "string",
      "products": [
        {
          "count": 1,
          "description": "string",
          "id": "12345",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 1,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "published": true,
      "published_at": "1970-01-01T00:00:00Z",
      "screenshots": [
        {
          "caption": "Screenshot",
          "file": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "id": "12345",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      ],
      "segment_id": "string",
      "slug": "string",
      "sticky": true,
      "tag_line": "string",
      "third_party_integration": true,
      "third_party_integration_link": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "tray_io_id": "string",
      "unify_connector_id": "string",
      "upcoming": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "zapier_id": "string"
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="list-category-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listings|[GetListingsResponse](#schemagetlistingsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ecosystem-api-product">Product</h1>

## List products

<a id="opIdproductsAll"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/products \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/products`

List products

<h3 id="list-products-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "count": 1,
      "description": "string",
      "id": "12345",
      "logo": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "name": "string",
      "sequence": 1,
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "visible": true
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="list-products-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Products|[GetProductsResponse](#schemagetproductsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## Get product

<a id="opIdproductsOne"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/products/string \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/products/{id}`

Get product

<h3 id="get-product-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|id|path|string|true|ID of the record you are acting upon.|

> Example responses

> 200 Response

```json
{
  "data": {
    "count": 1,
    "description": "string",
    "id": "12345",
    "logo": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "name": "string",
    "sequence": 1,
    "slug": "string",
    "translations": [
      {
        "key": "string",
        "locale": "string",
        "value": "string"
      }
    ],
    "visible": true
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="get-product-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Product|[GetProductResponse](#schemagetproductresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## List product listings

<a id="opIdproductListingsAll"></a>

> Code samples

```bash
curl https://example.com/ecosystems/string/products/string/listings \
  -H 'Accept: application/json'
```

`GET /ecosystems/{ecosystem_id}/products/{id}/listings`

List product listings

<h3 id="list-product-listings-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|ecosystem_id|path|string|true|none|
|id|path|string|true|ID of the record you are acting upon.|
|cursor|query|string \| null|false|Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.|
|limit|query|integer|false|Number of records to return|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "automate_id": "string",
      "blendr_id": "string",
      "card_background_color": "string",
      "card_background_image": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "categories": [
        {
          "count": 1,
          "created_at": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "listing_description_text_template": "string",
          "listing_features_text_template": "string",
          "listing_pricing_text_template": "string",
          "logo": {
            "content_type": "string",
            "id": "string",
            "type": "LOGO",
            "url": "string"
          },
          "name": "string",
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "updated_at": "1970-01-01T00:00:00Z"
        }
      ],
      "cloud_service_id": "string",
      "collections": [
        {
          "card_background_color": "string",
          "card_background_image": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "card_columns": 0,
          "card_style": "string",
          "count": 1,
          "description": "string",
          "hidden_from_homepage": true,
          "id": "string",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 0,
          "show_max_items_homepage": 0,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "combidesk_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "detail_page_disabled": true,
      "external_id": "12345",
      "features": "string",
      "id": "12345",
      "integromat_id": "string",
      "logo": {
        "content_type": "string",
        "id": "string",
        "type": "LOGO",
        "url": "string"
      },
      "media": [
        {
          "caption": "Media",
          "id": "12345",
          "sequence": 1,
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "type": "SCREENSHOT",
          "url": "string"
        }
      ],
      "meta_tag_description": "string",
      "meta_tag_keywords": "string",
      "meta_tag_title": "string",
      "microsoft_flow_id": "string",
      "name": "string",
      "native_integration": true,
      "native_integration_link": "string",
      "partner": {
        "company": "string",
        "contacts": [
          {
            "email": "string",
            "first_name": "string",
            "id": "12345",
            "last_name": "string",
            "linked_in": "string",
            "name": "string",
            "role": "string",
            "twitter": "string"
          }
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "icon": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "id": "12345",
        "listed": "string",
        "twitter": "string",
        "updated_at": "1970-01-01T00:00:00Z",
        "website": "string"
      },
      "piesync_id": "string",
      "pricing": "string",
      "products": [
        {
          "count": 1,
          "description": "string",
          "id": "12345",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 1,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "published": true,
      "published_at": "1970-01-01T00:00:00Z",
      "screenshots": [
        {
          "caption": "Screenshot",
          "file": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "id": "12345",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      ],
      "segment_id": "string",
      "slug": "string",
      "sticky": true,
      "tag_line": "string",
      "third_party_integration": true,
      "third_party_integration_link": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "tray_io_id": "string",
      "unify_connector_id": "string",
      "upcoming": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "zapier_id": "string"
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

<h3 id="list-product-listings-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Listings|[GetListingsResponse](#schemagetlistingsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CTASettings">CTASettings</h2>
<!-- backwards compatibility -->
<a id="schemactasettings"></a>
<a id="schema_CTASettings"></a>
<a id="tocSctasettings"></a>
<a id="tocsctasettings"></a>

```json
{
  "background_color": "string",
  "button_background_color": "string",
  "button_color": "string",
  "button_label": "string",
  "button_link": "string",
  "color": "string",
  "description": "string",
  "enabled": true,
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|background_color|string|false|none|none|
|button_background_color|string|false|none|none|
|button_color|string|false|none|none|
|button_label|string|false|none|none|
|button_link|string|false|none|none|
|color|string|false|none|none|
|description|string|false|none|none|
|enabled|boolean|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_CardSettings">CardSettings</h2>
<!-- backwards compatibility -->
<a id="schemacardsettings"></a>
<a id="schema_CardSettings"></a>
<a id="tocScardsettings"></a>
<a id="tocscardsettings"></a>

```json
{
  "background_color": "string",
  "border_color": "string",
  "border_radius": "string",
  "border_size": "string",
  "color": "string",
  "columns": 0,
  "description_lines": 0,
  "icon_border_radius": "string",
  "icon_shadow_enabled": true,
  "icon_size": 0,
  "shadow_enabled": true,
  "show_action": true,
  "show_badges": true,
  "show_category": true,
  "show_description": true,
  "style": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|background_color|string|false|none|none|
|border_color|string|false|none|none|
|border_radius|string|false|none|none|
|border_size|string|false|none|none|
|color|string|false|none|none|
|columns|integer|false|none|none|
|description_lines|integer|false|none|none|
|icon_border_radius|string|false|none|none|
|icon_shadow_enabled|boolean|false|none|none|
|icon_size|integer|false|none|none|
|shadow_enabled|boolean|false|none|none|
|show_action|boolean|false|none|none|
|show_badges|boolean|false|none|none|
|show_category|boolean|false|none|none|
|show_description|boolean|false|none|none|
|style|string|false|none|none|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "count": 1,
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "id": "string",
  "listing_description_text_template": "string",
  "listing_features_text_template": "string",
  "listing_pricing_text_template": "string",
  "logo": {
    "content_type": "string",
    "id": "string",
    "type": "LOGO",
    "url": "string"
  },
  "name": "string",
  "slug": "string",
  "translations": [
    {
      "key": "string",
      "locale": "string",
      "value": "string"
    }
  ],
  "updated_at": "1970-01-01T00:00:00Z"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|description|string|false|none|none|
|id|string|false|none|none|
|listing_description_text_template|string|false|none|none|
|listing_features_text_template|string|false|none|none|
|listing_pricing_text_template|string|false|none|none|
|logo|[Logo](#schemalogo)|false|none|none|
|name|string|true|none|none|
|slug|string|true|none|none|
|translations|[Translations](#schematranslations)|false|none|none|
|updated_at|string(date-time)|false|read-only|none|

<h2 id="tocS_Collection">Collection</h2>
<!-- backwards compatibility -->
<a id="schemacollection"></a>
<a id="schema_Collection"></a>
<a id="tocScollection"></a>
<a id="tocscollection"></a>

```json
{
  "card_background_color": "string",
  "card_background_image": {
    "content_type": "application/jpeg",
    "created_at": "1970-01-01T00:00:00Z",
    "id": "12345",
    "type": "LOGO",
    "updated_at": "1970-01-01T00:00:00Z",
    "url": "string"
  },
  "card_columns": 0,
  "card_style": "string",
  "count": 1,
  "description": "string",
  "hidden_from_homepage": true,
  "id": "string",
  "logo": {
    "content_type": "application/jpeg",
    "created_at": "1970-01-01T00:00:00Z",
    "id": "12345",
    "type": "LOGO",
    "updated_at": "1970-01-01T00:00:00Z",
    "url": "string"
  },
  "name": "string",
  "sequence": 0,
  "show_max_items_homepage": 0,
  "slug": "string",
  "translations": [
    {
      "key": "string",
      "locale": "string",
      "value": "string"
    }
  ],
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|card_background_color|string|false|none|none|
|card_background_image|[File](#schemafile)|false|none|none|
|card_columns|integer|false|none|none|
|card_style|string|false|none|none|
|count|integer|false|none|none|
|description|string|false|none|none|
|hidden_from_homepage|boolean|false|none|none|
|id|string|false|none|none|
|logo|[File](#schemafile)|false|none|none|
|name|string|true|none|none|
|sequence|integer|false|none|none|
|show_max_items_homepage|integer|false|none|none|
|slug|string|true|none|none|
|translations|[Translations](#schematranslations)|false|none|none|
|visible|boolean|true|none|none|

<h2 id="tocS_Contact">Contact</h2>
<!-- backwards compatibility -->
<a id="schemacontact"></a>
<a id="schema_Contact"></a>
<a id="tocScontact"></a>
<a id="tocscontact"></a>

```json
{
  "email": "string",
  "first_name": "string",
  "id": "12345",
  "last_name": "string",
  "linked_in": "string",
  "name": "string",
  "role": "string",
  "twitter": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|email|string|false|none|none|
|first_name|string|false|none|none|
|id|string|false|read-only|none|
|last_name|string|false|none|none|
|linked_in|string|false|none|none|
|name|string|true|none|none|
|role|string|false|none|none|
|twitter|string|false|none|none|

<h2 id="tocS_CustomSettings">CustomSettings</h2>
<!-- backwards compatibility -->
<a id="schemacustomsettings"></a>
<a id="schema_CustomSettings"></a>
<a id="tocScustomsettings"></a>
<a id="tocscustomsettings"></a>

```json
{
  "css": "string",
  "css_link": "string",
  "domain": "string",
  "html_footer": "string",
  "html_nav": "string",
  "java_script_link": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|css|string|false|none|none|
|css_link|string|false|none|none|
|domain|string|false|none|none|
|html_footer|string|false|none|none|
|html_nav|string|false|none|none|
|java_script_link|string|false|none|none|

<h2 id="tocS_Ecosystem">Ecosystem</h2>
<!-- backwards compatibility -->
<a id="schemaecosystem"></a>
<a id="schema_Ecosystem"></a>
<a id="tocSecosystem"></a>
<a id="tocsecosystem"></a>

```json
{
  "about": "string",
  "alternatives_background_color": "string",
  "alternatives_color": "string",
  "attribution": true,
  "body_background_color": "string",
  "body_button_background_color": "string",
  "body_button_color": "string",
  "body_color": "string",
  "body_link_color": "string",
  "card_settings": {
    "background_color": "string",
    "border_color": "string",
    "border_radius": "string",
    "border_size": "string",
    "color": "string",
    "columns": 0,
    "description_lines": 0,
    "icon_border_radius": "string",
    "icon_shadow_enabled": true,
    "icon_size": 0,
    "shadow_enabled": true,
    "show_action": true,
    "show_badges": true,
    "show_category": true,
    "show_description": true,
    "style": "string"
  },
  "categories_count_badge": true,
  "categories_show_max_items": 0,
  "collections_count_badge": true,
  "collections_title": "string",
  "create_link": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "cta_settings": {
    "background_color": "string",
    "button_background_color": "string",
    "button_color": "string",
    "button_label": "string",
    "button_link": "string",
    "color": "string",
    "description": "string",
    "enabled": true,
    "title": "string"
  },
  "custom_domain": "string",
  "custom_settings": {
    "css": "string",
    "css_link": "string",
    "domain": "string",
    "html_footer": "string",
    "html_nav": "string",
    "java_script_link": "string"
  },
  "detail_pages_enabled": true,
  "footer_background_color": "string",
  "footer_color": "string",
  "google_site_verification_id": "string",
  "hide_install_buttons": true,
  "home_page_collection_category_cards": true,
  "home_page_show_all_listings": true,
  "id": "12345",
  "installation_request_flow_enabled": true,
  "integration_settings": {
    "albacross_id": "string",
    "automate_enabled": true,
    "blendr_enabled": true,
    "combidesk_enabled": true,
    "crisp_id": "string",
    "drift_id": "string",
    "google_analytics_id": "string",
    "google_tag_manager_id": "string",
    "heap_id": "string",
    "hubspot_portal_id": "string",
    "integromat_enabled": true,
    "intercom_app_id": "string",
    "iubenda_cookie_policy_id": "string",
    "iubenda_site_id": "string",
    "journy_io_domain": "string",
    "journy_io_id": "string",
    "livechat_id": "string",
    "metomic_id": "string",
    "microsoft_flow_enabled": true,
    "microsoft_flow_id": "string",
    "onetrust_id": "string",
    "piesync_enabled": true,
    "segment_enabled": true,
    "segment_id": "string",
    "tray_io_enabled": true,
    "zapier_beta_link": "string",
    "zapier_enabled": true,
    "zapier_id": "string"
  },
  "is_published": true,
  "lead_form_settings": {
    "capture_form_enabled": true,
    "first_name_field_enabled": true,
    "first_name_field_required": true,
    "integration_enabled": true,
    "last_name_field_enabled": true,
    "last_name_field_required": true,
    "telephone_field_enabled": true,
    "telephone_field_required": true,
    "work_email_validation": true
  },
  "listing_settings": {
    "description_text_template": "string",
    "description_title": "string",
    "features_text_template": "string",
    "features_title": "string",
    "install_button_label": "string",
    "name_postfix": "string",
    "naming": "LISTING",
    "native_integration_link": "string",
    "pricing_disabled": true,
    "pricing_text_template": "string",
    "pricing_title": "string",
    "sidebar_position": "TOP"
  },
  "masthead_settings": {
    "background": "string",
    "background_color": "string",
    "color": "string",
    "columns": 0,
    "description": "string",
    "title": "string"
  },
  "menu_position": "TOP",
  "menu_style": "LIST",
  "meta_tag_settings": {
    "description": "string",
    "description_category_page": "string",
    "description_collection_page": "string",
    "description_listing_page": "string",
    "keywords": "string",
    "title": "string",
    "title_postfix": "string"
  },
  "name": "string",
  "navigation_background_color": "string",
  "navigation_color": "string",
  "navigation_logo_post_fix": "string",
  "navigation_mobile_menu_type": "ICON",
  "navigation_sticky": true,
  "primary_color": "string",
  "privacy_link": "string",
  "request_link": "string",
  "shadow_page_description": "string",
  "shadow_pages_enabled": true,
  "show_attribution_badge": true,
  "show_requested_listings": true,
  "slug": "string",
  "terms_link": "string",
  "total_published_listings": 0,
  "unify_application_id": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "utm_campaign": "string",
  "website": "string",
  "zaps_menu_title": "string",
  "zaps_page_enabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|about|string|false|none|none|
|alternatives_background_color|string|false|none|none|
|alternatives_color|string|false|none|none|
|attribution|boolean|false|none|none|
|body_background_color|string|false|none|none|
|body_button_background_color|string|false|none|none|
|body_button_color|string|false|none|none|
|body_color|string|false|none|none|
|body_link_color|string|false|none|none|
|card_settings|[CardSettings](#schemacardsettings)|false|none|none|
|categories_count_badge|boolean|false|none|none|
|categories_show_max_items|integer|false|none|none|
|collections_count_badge|boolean|false|none|none|
|collections_title|string|false|none|none|
|create_link|string|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|cta_settings|[CTASettings](#schemactasettings)|false|none|none|
|custom_domain|string|false|none|none|
|custom_settings|[CustomSettings](#schemacustomsettings)|false|none|none|
|detail_pages_enabled|boolean|false|none|none|
|footer_background_color|string|false|none|none|
|footer_color|string|false|none|none|
|google_site_verification_id|string|false|none|none|
|hide_install_buttons|boolean|false|none|none|
|home_page_collection_category_cards|boolean|false|none|none|
|home_page_show_all_listings|boolean|false|none|none|
|id|string|false|read-only|none|
|installation_request_flow_enabled|boolean|false|none|none|
|integration_settings|[IntegrationSettings](#schemaintegrationsettings)|false|none|none|
|is_published|boolean|true|none|none|
|lead_form_settings|[LeadFormSettings](#schemaleadformsettings)|false|none|none|
|listing_settings|[ListingSettings](#schemalistingsettings)|false|none|none|
|masthead_settings|[MastheadSettings](#schemamastheadsettings)|false|none|none|
|menu_position|string|false|none|none|
|menu_style|string|false|none|none|
|meta_tag_settings|[MetaTagSettings](#schemametatagsettings)|false|none|none|
|name|string|true|none|none|
|navigation_background_color|string|false|none|none|
|navigation_color|string|false|none|none|
|navigation_logo_post_fix|string|false|none|none|
|navigation_mobile_menu_type|string|false|none|none|
|navigation_sticky|boolean|false|none|none|
|primary_color|string|false|none|none|
|privacy_link|string|false|none|none|
|request_link|string|false|none|none|
|shadow_page_description|string|false|none|none|
|shadow_pages_enabled|boolean|false|none|none|
|show_attribution_badge|boolean|false|none|none|
|show_requested_listings|boolean|false|none|none|
|slug|string|true|none|none|
|terms_link|string|false|none|none|
|total_published_listings|integer|false|none|none|
|unify_application_id|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|
|utm_campaign|string|false|none|none|
|website|string|false|none|none|
|zaps_menu_title|string|false|none|none|
|zaps_page_enabled|boolean|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|menu_position|TOP|
|menu_position|LEFT|
|menu_position|RIGHT|
|menu_position|HIDDEN|
|menu_style|LIST|
|menu_style|PILL|
|menu_style|FILTER|
|navigation_mobile_menu_type|ICON|
|navigation_mobile_menu_type|TEXT|

<h2 id="tocS_File">File</h2>
<!-- backwards compatibility -->
<a id="schemafile"></a>
<a id="schema_File"></a>
<a id="tocSfile"></a>
<a id="tocsfile"></a>

```json
{
  "content_type": "application/jpeg",
  "created_at": "1970-01-01T00:00:00Z",
  "id": "12345",
  "type": "LOGO",
  "updated_at": "1970-01-01T00:00:00Z",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|id|string|false|read-only|none|
|type|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|
|url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LOGO|
|type|BANNER|
|type|SCREENSHOT|

<h2 id="tocS_GetCategoriesResponse">GetCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcategoriesresponse"></a>
<a id="schema_GetCategoriesResponse"></a>
<a id="tocSgetcategoriesresponse"></a>
<a id="tocsgetcategoriesresponse"></a>

```json
{
  "data": [
    {
      "count": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "listing_description_text_template": "string",
      "listing_features_text_template": "string",
      "listing_pricing_text_template": "string",
      "logo": {
        "content_type": "string",
        "id": "string",
        "type": "LOGO",
        "url": "string"
      },
      "name": "string",
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Category](#schemacategory)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCategoryResponse">GetCategoryResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcategoryresponse"></a>
<a id="schema_GetCategoryResponse"></a>
<a id="tocSgetcategoryresponse"></a>
<a id="tocsgetcategoryresponse"></a>

```json
{
  "data": {
    "count": 1,
    "created_at": "1970-01-01T00:00:00Z",
    "description": "string",
    "id": "string",
    "listing_description_text_template": "string",
    "listing_features_text_template": "string",
    "listing_pricing_text_template": "string",
    "logo": {
      "content_type": "string",
      "id": "string",
      "type": "LOGO",
      "url": "string"
    },
    "name": "string",
    "slug": "string",
    "translations": [
      {
        "key": "string",
        "locale": "string",
        "value": "string"
      }
    ],
    "updated_at": "1970-01-01T00:00:00Z"
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Category](#schemacategory)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCollectionResponse">GetCollectionResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcollectionresponse"></a>
<a id="schema_GetCollectionResponse"></a>
<a id="tocSgetcollectionresponse"></a>
<a id="tocsgetcollectionresponse"></a>

```json
{
  "data": {
    "card_background_color": "string",
    "card_background_image": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "card_columns": 0,
    "card_style": "string",
    "count": 1,
    "description": "string",
    "hidden_from_homepage": true,
    "id": "string",
    "logo": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "name": "string",
    "sequence": 0,
    "show_max_items_homepage": 0,
    "slug": "string",
    "translations": [
      {
        "key": "string",
        "locale": "string",
        "value": "string"
      }
    ],
    "visible": true
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Collection](#schemacollection)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetCollectionsResponse">GetCollectionsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetcollectionsresponse"></a>
<a id="schema_GetCollectionsResponse"></a>
<a id="tocSgetcollectionsresponse"></a>
<a id="tocsgetcollectionsresponse"></a>

```json
{
  "data": [
    {
      "card_background_color": "string",
      "card_background_image": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "card_columns": 0,
      "card_style": "string",
      "count": 1,
      "description": "string",
      "hidden_from_homepage": true,
      "id": "string",
      "logo": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "name": "string",
      "sequence": 0,
      "show_max_items_homepage": 0,
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "visible": true
    }
  ],
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Collection](#schemacollection)]|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetEcosystemResponse">GetEcosystemResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetecosystemresponse"></a>
<a id="schema_GetEcosystemResponse"></a>
<a id="tocSgetecosystemresponse"></a>
<a id="tocsgetecosystemresponse"></a>

```json
{
  "data": {
    "about": "string",
    "alternatives_background_color": "string",
    "alternatives_color": "string",
    "attribution": true,
    "body_background_color": "string",
    "body_button_background_color": "string",
    "body_button_color": "string",
    "body_color": "string",
    "body_link_color": "string",
    "card_settings": {
      "background_color": "string",
      "border_color": "string",
      "border_radius": "string",
      "border_size": "string",
      "color": "string",
      "columns": 0,
      "description_lines": 0,
      "icon_border_radius": "string",
      "icon_shadow_enabled": true,
      "icon_size": 0,
      "shadow_enabled": true,
      "show_action": true,
      "show_badges": true,
      "show_category": true,
      "show_description": true,
      "style": "string"
    },
    "categories_count_badge": true,
    "categories_show_max_items": 0,
    "collections_count_badge": true,
    "collections_title": "string",
    "create_link": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "cta_settings": {
      "background_color": "string",
      "button_background_color": "string",
      "button_color": "string",
      "button_label": "string",
      "button_link": "string",
      "color": "string",
      "description": "string",
      "enabled": true,
      "title": "string"
    },
    "custom_domain": "string",
    "custom_settings": {
      "css": "string",
      "css_link": "string",
      "domain": "string",
      "html_footer": "string",
      "html_nav": "string",
      "java_script_link": "string"
    },
    "detail_pages_enabled": true,
    "footer_background_color": "string",
    "footer_color": "string",
    "google_site_verification_id": "string",
    "hide_install_buttons": true,
    "home_page_collection_category_cards": true,
    "home_page_show_all_listings": true,
    "id": "12345",
    "installation_request_flow_enabled": true,
    "integration_settings": {
      "albacross_id": "string",
      "automate_enabled": true,
      "blendr_enabled": true,
      "combidesk_enabled": true,
      "crisp_id": "string",
      "drift_id": "string",
      "google_analytics_id": "string",
      "google_tag_manager_id": "string",
      "heap_id": "string",
      "hubspot_portal_id": "string",
      "integromat_enabled": true,
      "intercom_app_id": "string",
      "iubenda_cookie_policy_id": "string",
      "iubenda_site_id": "string",
      "journy_io_domain": "string",
      "journy_io_id": "string",
      "livechat_id": "string",
      "metomic_id": "string",
      "microsoft_flow_enabled": true,
      "microsoft_flow_id": "string",
      "onetrust_id": "string",
      "piesync_enabled": true,
      "segment_enabled": true,
      "segment_id": "string",
      "tray_io_enabled": true,
      "zapier_beta_link": "string",
      "zapier_enabled": true,
      "zapier_id": "string"
    },
    "is_published": true,
    "lead_form_settings": {
      "capture_form_enabled": true,
      "first_name_field_enabled": true,
      "first_name_field_required": true,
      "integration_enabled": true,
      "last_name_field_enabled": true,
      "last_name_field_required": true,
      "telephone_field_enabled": true,
      "telephone_field_required": true,
      "work_email_validation": true
    },
    "listing_settings": {
      "description_text_template": "string",
      "description_title": "string",
      "features_text_template": "string",
      "features_title": "string",
      "install_button_label": "string",
      "name_postfix": "string",
      "naming": "LISTING",
      "native_integration_link": "string",
      "pricing_disabled": true,
      "pricing_text_template": "string",
      "pricing_title": "string",
      "sidebar_position": "TOP"
    },
    "masthead_settings": {
      "background": "string",
      "background_color": "string",
      "color": "string",
      "columns": 0,
      "description": "string",
      "title": "string"
    },
    "menu_position": "TOP",
    "menu_style": "LIST",
    "meta_tag_settings": {
      "description": "string",
      "description_category_page": "string",
      "description_collection_page": "string",
      "description_listing_page": "string",
      "keywords": "string",
      "title": "string",
      "title_postfix": "string"
    },
    "name": "string",
    "navigation_background_color": "string",
    "navigation_color": "string",
    "navigation_logo_post_fix": "string",
    "navigation_mobile_menu_type": "ICON",
    "navigation_sticky": true,
    "primary_color": "string",
    "privacy_link": "string",
    "request_link": "string",
    "shadow_page_description": "string",
    "shadow_pages_enabled": true,
    "show_attribution_badge": true,
    "show_requested_listings": true,
    "slug": "string",
    "terms_link": "string",
    "total_published_listings": 0,
    "unify_application_id": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "utm_campaign": "string",
    "website": "string",
    "zaps_menu_title": "string",
    "zaps_page_enabled": true
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Ecosystem](#schemaecosystem)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetListingResponse">GetListingResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistingresponse"></a>
<a id="schema_GetListingResponse"></a>
<a id="tocSgetlistingresponse"></a>
<a id="tocsgetlistingresponse"></a>

```json
{
  "data": {
    "automate_id": "string",
    "blendr_id": "string",
    "card_background_color": "string",
    "card_background_image": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "categories": [
      {
        "count": 1,
        "created_at": "1970-01-01T00:00:00Z",
        "description": "string",
        "id": "string",
        "listing_description_text_template": "string",
        "listing_features_text_template": "string",
        "listing_pricing_text_template": "string",
        "logo": {
          "content_type": "string",
          "id": "string",
          "type": "LOGO",
          "url": "string"
        },
        "name": "string",
        "slug": "string",
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ],
        "updated_at": "1970-01-01T00:00:00Z"
      }
    ],
    "cloud_service_id": "string",
    "collections": [
      {
        "card_background_color": "string",
        "card_background_image": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "card_columns": 0,
        "card_style": "string",
        "count": 1,
        "description": "string",
        "hidden_from_homepage": true,
        "id": "string",
        "logo": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "name": "string",
        "sequence": 0,
        "show_max_items_homepage": 0,
        "slug": "string",
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ],
        "visible": true
      }
    ],
    "combidesk_id": "string",
    "created_at": "1970-01-01T00:00:00Z",
    "description": "string",
    "detail_page_disabled": true,
    "external_id": "12345",
    "features": "string",
    "id": "12345",
    "integromat_id": "string",
    "logo": {
      "content_type": "string",
      "id": "string",
      "type": "LOGO",
      "url": "string"
    },
    "media": [
      {
        "caption": "Media",
        "id": "12345",
        "sequence": 1,
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ],
        "type": "SCREENSHOT",
        "url": "string"
      }
    ],
    "meta_tag_description": "string",
    "meta_tag_keywords": "string",
    "meta_tag_title": "string",
    "microsoft_flow_id": "string",
    "name": "string",
    "native_integration": true,
    "native_integration_link": "string",
    "partner": {
      "company": "string",
      "contacts": [
        {
          "email": "string",
          "first_name": "string",
          "id": "12345",
          "last_name": "string",
          "linked_in": "string",
          "name": "string",
          "role": "string",
          "twitter": "string"
        }
      ],
      "created_at": "1970-01-01T00:00:00Z",
      "icon": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "id": "12345",
      "listed": "string",
      "twitter": "string",
      "updated_at": "1970-01-01T00:00:00Z",
      "website": "string"
    },
    "piesync_id": "string",
    "pricing": "string",
    "products": [
      {
        "count": 1,
        "description": "string",
        "id": "12345",
        "logo": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "name": "string",
        "sequence": 1,
        "slug": "string",
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ],
        "visible": true
      }
    ],
    "published": true,
    "published_at": "1970-01-01T00:00:00Z",
    "screenshots": [
      {
        "caption": "Screenshot",
        "file": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "id": "12345",
        "translations": [
          {
            "key": "string",
            "locale": "string",
            "value": "string"
          }
        ]
      }
    ],
    "segment_id": "string",
    "slug": "string",
    "sticky": true,
    "tag_line": "string",
    "third_party_integration": true,
    "third_party_integration_link": "string",
    "translations": [
      {
        "key": "string",
        "locale": "string",
        "value": "string"
      }
    ],
    "tray_io_id": "string",
    "unify_connector_id": "string",
    "upcoming": true,
    "updated_at": "1970-01-01T00:00:00Z",
    "zapier_id": "string"
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Listing](#schemalisting)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetListingsResponse">GetListingsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetlistingsresponse"></a>
<a id="schema_GetListingsResponse"></a>
<a id="tocSgetlistingsresponse"></a>
<a id="tocsgetlistingsresponse"></a>

```json
{
  "data": [
    {
      "automate_id": "string",
      "blendr_id": "string",
      "card_background_color": "string",
      "card_background_image": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "categories": [
        {
          "count": 1,
          "created_at": "1970-01-01T00:00:00Z",
          "description": "string",
          "id": "string",
          "listing_description_text_template": "string",
          "listing_features_text_template": "string",
          "listing_pricing_text_template": "string",
          "logo": {
            "content_type": "string",
            "id": "string",
            "type": "LOGO",
            "url": "string"
          },
          "name": "string",
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "updated_at": "1970-01-01T00:00:00Z"
        }
      ],
      "cloud_service_id": "string",
      "collections": [
        {
          "card_background_color": "string",
          "card_background_image": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "card_columns": 0,
          "card_style": "string",
          "count": 1,
          "description": "string",
          "hidden_from_homepage": true,
          "id": "string",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 0,
          "show_max_items_homepage": 0,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "combidesk_id": "string",
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "detail_page_disabled": true,
      "external_id": "12345",
      "features": "string",
      "id": "12345",
      "integromat_id": "string",
      "logo": {
        "content_type": "string",
        "id": "string",
        "type": "LOGO",
        "url": "string"
      },
      "media": [
        {
          "caption": "Media",
          "id": "12345",
          "sequence": 1,
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "type": "SCREENSHOT",
          "url": "string"
        }
      ],
      "meta_tag_description": "string",
      "meta_tag_keywords": "string",
      "meta_tag_title": "string",
      "microsoft_flow_id": "string",
      "name": "string",
      "native_integration": true,
      "native_integration_link": "string",
      "partner": {
        "company": "string",
        "contacts": [
          {
            "email": "string",
            "first_name": "string",
            "id": "12345",
            "last_name": "string",
            "linked_in": "string",
            "name": "string",
            "role": "string",
            "twitter": "string"
          }
        ],
        "created_at": "1970-01-01T00:00:00Z",
        "icon": {
          "content_type": "application/jpeg",
          "created_at": "1970-01-01T00:00:00Z",
          "id": "12345",
          "type": "LOGO",
          "updated_at": "1970-01-01T00:00:00Z",
          "url": "string"
        },
        "id": "12345",
        "listed": "string",
        "twitter": "string",
        "updated_at": "1970-01-01T00:00:00Z",
        "website": "string"
      },
      "piesync_id": "string",
      "pricing": "string",
      "products": [
        {
          "count": 1,
          "description": "string",
          "id": "12345",
          "logo": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "name": "string",
          "sequence": 1,
          "slug": "string",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ],
          "visible": true
        }
      ],
      "published": true,
      "published_at": "1970-01-01T00:00:00Z",
      "screenshots": [
        {
          "caption": "Screenshot",
          "file": {
            "content_type": "application/jpeg",
            "created_at": "1970-01-01T00:00:00Z",
            "id": "12345",
            "type": "LOGO",
            "updated_at": "1970-01-01T00:00:00Z",
            "url": "string"
          },
          "id": "12345",
          "translations": [
            {
              "key": "string",
              "locale": "string",
              "value": "string"
            }
          ]
        }
      ],
      "segment_id": "string",
      "slug": "string",
      "sticky": true,
      "tag_line": "string",
      "third_party_integration": true,
      "third_party_integration_link": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "tray_io_id": "string",
      "unify_connector_id": "string",
      "upcoming": true,
      "updated_at": "1970-01-01T00:00:00Z",
      "zapier_id": "string"
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Listing](#schemalisting)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetProductResponse">GetProductResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetproductresponse"></a>
<a id="schema_GetProductResponse"></a>
<a id="tocSgetproductresponse"></a>
<a id="tocsgetproductresponse"></a>

```json
{
  "data": {
    "count": 1,
    "description": "string",
    "id": "12345",
    "logo": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "name": "string",
    "sequence": 1,
    "slug": "string",
    "translations": [
      {
        "key": "string",
        "locale": "string",
        "value": "string"
      }
    ],
    "visible": true
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[Product](#schemaproduct)|true|none|none|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_GetProductsResponse">GetProductsResponse</h2>
<!-- backwards compatibility -->
<a id="schemagetproductsresponse"></a>
<a id="schema_GetProductsResponse"></a>
<a id="tocSgetproductsresponse"></a>
<a id="tocsgetproductsresponse"></a>

```json
{
  "data": [
    {
      "count": 1,
      "description": "string",
      "id": "12345",
      "logo": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "name": "string",
      "sequence": 1,
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "visible": true
    }
  ],
  "links": {
    "current": "https://api.apideck.com/ecosystem/123abc/listings",
    "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
    "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
  },
  "meta": {
    "cursors": {
      "current": "em9oby1jcm06OnBhZ2U6OjI=",
      "next": "em9oby1jcm06OnBhZ2U6OjM=",
      "previous": "em9oby1jcm06OnBhZ2U6OjE="
    },
    "items_on_page": 50
  },
  "status": "OK",
  "status_code": 200
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[Product](#schemaproduct)]|true|none|none|
|links|[Links](#schemalinks)|false|none|Links to navigate to previous or next pages through the API|
|meta|[Meta](#schemameta)|false|none|Response metadata|
|status|string|true|none|HTTP Response Status|
|status_code|integer|true|none|HTTP Response Status Code|

<h2 id="tocS_IntegrationSettings">IntegrationSettings</h2>
<!-- backwards compatibility -->
<a id="schemaintegrationsettings"></a>
<a id="schema_IntegrationSettings"></a>
<a id="tocSintegrationsettings"></a>
<a id="tocsintegrationsettings"></a>

```json
{
  "albacross_id": "string",
  "automate_enabled": true,
  "blendr_enabled": true,
  "combidesk_enabled": true,
  "crisp_id": "string",
  "drift_id": "string",
  "google_analytics_id": "string",
  "google_tag_manager_id": "string",
  "heap_id": "string",
  "hubspot_portal_id": "string",
  "integromat_enabled": true,
  "intercom_app_id": "string",
  "iubenda_cookie_policy_id": "string",
  "iubenda_site_id": "string",
  "journy_io_domain": "string",
  "journy_io_id": "string",
  "livechat_id": "string",
  "metomic_id": "string",
  "microsoft_flow_enabled": true,
  "microsoft_flow_id": "string",
  "onetrust_id": "string",
  "piesync_enabled": true,
  "segment_enabled": true,
  "segment_id": "string",
  "tray_io_enabled": true,
  "zapier_beta_link": "string",
  "zapier_enabled": true,
  "zapier_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|albacross_id|string|false|none|none|
|automate_enabled|boolean|false|none|none|
|blendr_enabled|boolean|false|none|none|
|combidesk_enabled|boolean|false|none|none|
|crisp_id|string|false|none|none|
|drift_id|string|false|none|none|
|google_analytics_id|string|false|none|none|
|google_tag_manager_id|string|false|none|none|
|heap_id|string|false|none|none|
|hubspot_portal_id|string|false|none|none|
|integromat_enabled|boolean|false|none|none|
|intercom_app_id|string|false|none|none|
|iubenda_cookie_policy_id|string|false|none|none|
|iubenda_site_id|string|false|none|none|
|journy_io_domain|string|false|none|none|
|journy_io_id|string|false|none|none|
|livechat_id|string|false|none|none|
|metomic_id|string|false|none|none|
|microsoft_flow_enabled|boolean|false|none|none|
|microsoft_flow_id|string|false|none|none|
|onetrust_id|string|false|none|none|
|piesync_enabled|boolean|false|none|none|
|segment_enabled|boolean|false|none|none|
|segment_id|string|false|none|none|
|tray_io_enabled|boolean|false|none|none|
|zapier_beta_link|string|false|none|none|
|zapier_enabled|boolean|false|none|none|
|zapier_id|string|false|none|none|

<h2 id="tocS_LeadFormSettings">LeadFormSettings</h2>
<!-- backwards compatibility -->
<a id="schemaleadformsettings"></a>
<a id="schema_LeadFormSettings"></a>
<a id="tocSleadformsettings"></a>
<a id="tocsleadformsettings"></a>

```json
{
  "capture_form_enabled": true,
  "first_name_field_enabled": true,
  "first_name_field_required": true,
  "integration_enabled": true,
  "last_name_field_enabled": true,
  "last_name_field_required": true,
  "telephone_field_enabled": true,
  "telephone_field_required": true,
  "work_email_validation": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|capture_form_enabled|boolean|false|none|none|
|first_name_field_enabled|boolean|false|none|none|
|first_name_field_required|boolean|false|none|none|
|integration_enabled|boolean|false|none|none|
|last_name_field_enabled|boolean|false|none|none|
|last_name_field_required|boolean|false|none|none|
|telephone_field_enabled|boolean|false|none|none|
|telephone_field_required|boolean|false|none|none|
|work_email_validation|boolean|false|none|none|

<h2 id="tocS_Links">Links</h2>
<!-- backwards compatibility -->
<a id="schemalinks"></a>
<a id="schema_Links"></a>
<a id="tocSlinks"></a>
<a id="tocslinks"></a>

```json
{
  "current": "https://api.apideck.com/ecosystem/123abc/listings",
  "next": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjM",
  "previous": "https://api.apideck.com/ecosystem/123abc/listings?cursor=em9oby1jcm06OnBhZ2U6OjE%3D"
}
```

Links to navigate to previous or next pages through the API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|current|string|true|none|Link to navigate to the current page through the API|
|next|string|false|none|Link to navigate to the previous page through the API|
|previous|string|false|none|Link to navigate to the previous page through the API|

<h2 id="tocS_Listing">Listing</h2>
<!-- backwards compatibility -->
<a id="schemalisting"></a>
<a id="schema_Listing"></a>
<a id="tocSlisting"></a>
<a id="tocslisting"></a>

```json
{
  "automate_id": "string",
  "blendr_id": "string",
  "card_background_color": "string",
  "card_background_image": {
    "content_type": "application/jpeg",
    "created_at": "1970-01-01T00:00:00Z",
    "id": "12345",
    "type": "LOGO",
    "updated_at": "1970-01-01T00:00:00Z",
    "url": "string"
  },
  "categories": [
    {
      "count": 1,
      "created_at": "1970-01-01T00:00:00Z",
      "description": "string",
      "id": "string",
      "listing_description_text_template": "string",
      "listing_features_text_template": "string",
      "listing_pricing_text_template": "string",
      "logo": {
        "content_type": "string",
        "id": "string",
        "type": "LOGO",
        "url": "string"
      },
      "name": "string",
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "updated_at": "1970-01-01T00:00:00Z"
    }
  ],
  "cloud_service_id": "string",
  "collections": [
    {
      "card_background_color": "string",
      "card_background_image": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "card_columns": 0,
      "card_style": "string",
      "count": 1,
      "description": "string",
      "hidden_from_homepage": true,
      "id": "string",
      "logo": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "name": "string",
      "sequence": 0,
      "show_max_items_homepage": 0,
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "visible": true
    }
  ],
  "combidesk_id": "string",
  "created_at": "1970-01-01T00:00:00Z",
  "description": "string",
  "detail_page_disabled": true,
  "external_id": "12345",
  "features": "string",
  "id": "12345",
  "integromat_id": "string",
  "logo": {
    "content_type": "string",
    "id": "string",
    "type": "LOGO",
    "url": "string"
  },
  "media": [
    {
      "caption": "Media",
      "id": "12345",
      "sequence": 1,
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "type": "SCREENSHOT",
      "url": "string"
    }
  ],
  "meta_tag_description": "string",
  "meta_tag_keywords": "string",
  "meta_tag_title": "string",
  "microsoft_flow_id": "string",
  "name": "string",
  "native_integration": true,
  "native_integration_link": "string",
  "partner": {
    "company": "string",
    "contacts": [
      {
        "email": "string",
        "first_name": "string",
        "id": "12345",
        "last_name": "string",
        "linked_in": "string",
        "name": "string",
        "role": "string",
        "twitter": "string"
      }
    ],
    "created_at": "1970-01-01T00:00:00Z",
    "icon": {
      "content_type": "application/jpeg",
      "created_at": "1970-01-01T00:00:00Z",
      "id": "12345",
      "type": "LOGO",
      "updated_at": "1970-01-01T00:00:00Z",
      "url": "string"
    },
    "id": "12345",
    "listed": "string",
    "twitter": "string",
    "updated_at": "1970-01-01T00:00:00Z",
    "website": "string"
  },
  "piesync_id": "string",
  "pricing": "string",
  "products": [
    {
      "count": 1,
      "description": "string",
      "id": "12345",
      "logo": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "name": "string",
      "sequence": 1,
      "slug": "string",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ],
      "visible": true
    }
  ],
  "published": true,
  "published_at": "1970-01-01T00:00:00Z",
  "screenshots": [
    {
      "caption": "Screenshot",
      "file": {
        "content_type": "application/jpeg",
        "created_at": "1970-01-01T00:00:00Z",
        "id": "12345",
        "type": "LOGO",
        "updated_at": "1970-01-01T00:00:00Z",
        "url": "string"
      },
      "id": "12345",
      "translations": [
        {
          "key": "string",
          "locale": "string",
          "value": "string"
        }
      ]
    }
  ],
  "segment_id": "string",
  "slug": "string",
  "sticky": true,
  "tag_line": "string",
  "third_party_integration": true,
  "third_party_integration_link": "string",
  "translations": [
    {
      "key": "string",
      "locale": "string",
      "value": "string"
    }
  ],
  "tray_io_id": "string",
  "unify_connector_id": "string",
  "upcoming": true,
  "updated_at": "1970-01-01T00:00:00Z",
  "zapier_id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|automate_id|string|false|none|none|
|blendr_id|string|false|none|none|
|card_background_color|string|false|none|none|
|card_background_image|[File](#schemafile)|false|none|none|
|categories|[[Category](#schemacategory)]|false|none|none|
|cloud_service_id|string|false|none|none|
|collections|[[Collection](#schemacollection)]|false|none|none|
|combidesk_id|string|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|description|string|false|none|none|
|detail_page_disabled|boolean|false|none|none|
|external_id|string|false|read-only|none|
|features|string|false|none|none|
|id|string|false|read-only|none|
|integromat_id|string|false|none|none|
|logo|[Logo](#schemalogo)|false|none|none|
|media|[[Media](#schemamedia)]|false|none|none|
|meta_tag_description|string|false|none|none|
|meta_tag_keywords|string|false|none|none|
|meta_tag_title|string|false|none|none|
|microsoft_flow_id|string|false|none|none|
|name|string|true|none|none|
|native_integration|boolean|false|none|none|
|native_integration_link|string|false|none|none|
|partner|[Partner](#schemapartner)|false|none|none|
|piesync_id|string|false|none|none|
|pricing|string|false|none|none|
|products|[[Product](#schemaproduct)]|false|none|none|
|published|boolean|false|none|none|
|published_at|string(date-time)|false|read-only|none|
|screenshots|[[Screenshot](#schemascreenshot)]|false|none|none|
|segment_id|string|false|none|none|
|slug|string|true|none|none|
|sticky|boolean|false|none|none|
|tag_line|string|false|none|none|
|third_party_integration|boolean|false|none|none|
|third_party_integration_link|string|false|none|none|
|translations|[Translations](#schematranslations)|false|none|none|
|tray_io_id|string|false|none|none|
|unify_connector_id|string|false|none|none|
|upcoming|boolean|false|none|none|
|updated_at|string(date-time)|false|read-only|none|
|zapier_id|string|false|none|none|

<h2 id="tocS_ListingSettings">ListingSettings</h2>
<!-- backwards compatibility -->
<a id="schemalistingsettings"></a>
<a id="schema_ListingSettings"></a>
<a id="tocSlistingsettings"></a>
<a id="tocslistingsettings"></a>

```json
{
  "description_text_template": "string",
  "description_title": "string",
  "features_text_template": "string",
  "features_title": "string",
  "install_button_label": "string",
  "name_postfix": "string",
  "naming": "LISTING",
  "native_integration_link": "string",
  "pricing_disabled": true,
  "pricing_text_template": "string",
  "pricing_title": "string",
  "sidebar_position": "TOP"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description_text_template|string|false|none|none|
|description_title|string|false|none|none|
|features_text_template|string|false|none|none|
|features_title|string|false|none|none|
|install_button_label|string|false|none|none|
|name_postfix|string|false|none|none|
|naming|string|false|none|none|
|native_integration_link|string|false|none|none|
|pricing_disabled|boolean|false|none|none|
|pricing_text_template|string|false|none|none|
|pricing_title|string|false|none|none|
|sidebar_position|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|naming|LISTING|
|naming|LISTINGS|
|naming|INTEGRATIONS|
|naming|APPS|
|naming|CONNECTORS|
|naming|DATASOURCES|
|naming|ADDONS|
|naming|PLUGINS|
|naming|PARTNERS|
|naming|CHANNELS|
|naming|CONNECTIONS|
|naming|EXTENSIONS|
|sidebar_position|TOP|
|sidebar_position|LEFT|
|sidebar_position|RIGHT|
|sidebar_position|HIDDEN|

<h2 id="tocS_Logo">Logo</h2>
<!-- backwards compatibility -->
<a id="schemalogo"></a>
<a id="schema_Logo"></a>
<a id="tocSlogo"></a>
<a id="tocslogo"></a>

```json
{
  "content_type": "string",
  "id": "string",
  "type": "LOGO",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|content_type|string|false|none|none|
|id|string|false|none|none|
|type|string|false|none|none|
|url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|LOGO|
|type|BANNER|
|type|SCREENSHOT|

<h2 id="tocS_MastheadSettings">MastheadSettings</h2>
<!-- backwards compatibility -->
<a id="schemamastheadsettings"></a>
<a id="schema_MastheadSettings"></a>
<a id="tocSmastheadsettings"></a>
<a id="tocsmastheadsettings"></a>

```json
{
  "background": "string",
  "background_color": "string",
  "color": "string",
  "columns": 0,
  "description": "string",
  "title": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|background|string|false|none|none|
|background_color|string|false|none|none|
|color|string|false|none|none|
|columns|integer|false|none|none|
|description|string|false|none|none|
|title|string|false|none|none|

<h2 id="tocS_Media">Media</h2>
<!-- backwards compatibility -->
<a id="schemamedia"></a>
<a id="schema_Media"></a>
<a id="tocSmedia"></a>
<a id="tocsmedia"></a>

```json
{
  "caption": "Media",
  "id": "12345",
  "sequence": 1,
  "translations": [
    {
      "key": "string",
      "locale": "string",
      "value": "string"
    }
  ],
  "type": "SCREENSHOT",
  "url": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|none|
|id|string|false|read-only|none|
|sequence|integer|false|none|none|
|translations|[Translations](#schematranslations)|false|none|none|
|type|string|false|none|none|
|url|string|true|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|SCREENSHOT|
|type|VIDEO|

<h2 id="tocS_Meta">Meta</h2>
<!-- backwards compatibility -->
<a id="schemameta"></a>
<a id="schema_Meta"></a>
<a id="tocSmeta"></a>
<a id="tocsmeta"></a>

```json
{
  "cursors": {
    "current": "em9oby1jcm06OnBhZ2U6OjI=",
    "next": "em9oby1jcm06OnBhZ2U6OjM=",
    "previous": "em9oby1jcm06OnBhZ2U6OjE="
  },
  "items_on_page": 50
}
```

Response metadata

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cursors|object|false|none|Cursors to navigate to previous or next pages through the API|
|items_on_page|integer|false|none|Number of items returned in the data property of the response|

<h2 id="tocS_MetaTagSettings">MetaTagSettings</h2>
<!-- backwards compatibility -->
<a id="schemametatagsettings"></a>
<a id="schema_MetaTagSettings"></a>
<a id="tocSmetatagsettings"></a>
<a id="tocsmetatagsettings"></a>

```json
{
  "description": "string",
  "description_category_page": "string",
  "description_collection_page": "string",
  "description_listing_page": "string",
  "keywords": "string",
  "title": "string",
  "title_postfix": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|none|
|description_category_page|string|false|none|none|
|description_collection_page|string|false|none|none|
|description_listing_page|string|false|none|none|
|keywords|string|false|none|none|
|title|string|false|none|none|
|title_postfix|string|false|none|none|

<h2 id="tocS_Partner">Partner</h2>
<!-- backwards compatibility -->
<a id="schemapartner"></a>
<a id="schema_Partner"></a>
<a id="tocSpartner"></a>
<a id="tocspartner"></a>

```json
{
  "company": "string",
  "contacts": [
    {
      "email": "string",
      "first_name": "string",
      "id": "12345",
      "last_name": "string",
      "linked_in": "string",
      "name": "string",
      "role": "string",
      "twitter": "string"
    }
  ],
  "created_at": "1970-01-01T00:00:00Z",
  "icon": {
    "content_type": "application/jpeg",
    "created_at": "1970-01-01T00:00:00Z",
    "id": "12345",
    "type": "LOGO",
    "updated_at": "1970-01-01T00:00:00Z",
    "url": "string"
  },
  "id": "12345",
  "listed": "string",
  "twitter": "string",
  "updated_at": "1970-01-01T00:00:00Z",
  "website": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|company|string|true|none|none|
|contacts|[[Contact](#schemacontact)]|false|none|none|
|created_at|string(date-time)|false|read-only|none|
|icon|[File](#schemafile)|false|none|none|
|id|string|false|read-only|none|
|listed|string|false|none|none|
|twitter|string|false|none|none|
|updated_at|string(date-time)|false|read-only|none|
|website|string|false|none|none|

<h2 id="tocS_Product">Product</h2>
<!-- backwards compatibility -->
<a id="schemaproduct"></a>
<a id="schema_Product"></a>
<a id="tocSproduct"></a>
<a id="tocsproduct"></a>

```json
{
  "count": 1,
  "description": "string",
  "id": "12345",
  "logo": {
    "content_type": "application/jpeg",
    "created_at": "1970-01-01T00:00:00Z",
    "id": "12345",
    "type": "LOGO",
    "updated_at": "1970-01-01T00:00:00Z",
    "url": "string"
  },
  "name": "string",
  "sequence": 1,
  "slug": "string",
  "translations": [
    {
      "key": "string",
      "locale": "string",
      "value": "string"
    }
  ],
  "visible": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|count|integer|false|none|none|
|description|string|false|none|none|
|id|string|false|read-only|none|
|logo|[File](#schemafile)|false|none|none|
|name|string|true|none|none|
|sequence|integer|false|none|none|
|slug|string|true|none|none|
|translations|[Translations](#schematranslations)|false|none|none|
|visible|boolean|true|none|none|

<h2 id="tocS_Screenshot">Screenshot</h2>
<!-- backwards compatibility -->
<a id="schemascreenshot"></a>
<a id="schema_Screenshot"></a>
<a id="tocSscreenshot"></a>
<a id="tocsscreenshot"></a>

```json
{
  "caption": "Screenshot",
  "file": {
    "content_type": "application/jpeg",
    "created_at": "1970-01-01T00:00:00Z",
    "id": "12345",
    "type": "LOGO",
    "updated_at": "1970-01-01T00:00:00Z",
    "url": "string"
  },
  "id": "12345",
  "translations": [
    {
      "key": "string",
      "locale": "string",
      "value": "string"
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|caption|string|false|none|none|
|file|[File](#schemafile)|false|none|none|
|id|string|false|read-only|none|
|translations|[Translations](#schematranslations)|false|none|none|

<h2 id="tocS_Translation">Translation</h2>
<!-- backwards compatibility -->
<a id="schematranslation"></a>
<a id="schema_Translation"></a>
<a id="tocStranslation"></a>
<a id="tocstranslation"></a>

```json
{
  "key": "string",
  "locale": "string",
  "value": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|key|string|true|none|none|
|locale|string|true|none|none|
|value|string|false|none|none|

<h2 id="tocS_Translations">Translations</h2>
<!-- backwards compatibility -->
<a id="schematranslations"></a>
<a id="schema_Translations"></a>
<a id="tocStranslations"></a>
<a id="tocstranslations"></a>

```json
[
  {
    "key": "string",
    "locale": "string",
    "value": "string"
  }
]
```
