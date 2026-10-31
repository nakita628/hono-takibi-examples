<h1 id="vtex-headless-cms">VTEX Headless CMS v0.31.2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.


The VTEX Headless CMS is a no-code management system for storefront content. 
That means you can store your content as structured data in a layer decoupled from the frontend and 
use the VTEX Headless CMS to access and deliver your content to your storefront project.

Notice that the VTEX Headless CMS typically works with **FastStore** projects only. In this case, you can use this API
to fetch data using SSR (NextJS and Gatsby v4+) or SSG (NextJS).

**Servers**
- `https://{account}.myvtex.com/`
- `https://{workspace}--{account}.myvtex.com/`

**Server variables**
- `accountName`: Name of your VTEX account.
- `workspace`: Name of your VTEX workspace.

Base URLs:

* <a href="https://vtex.local">https://vtex.local</a>

* <a href="https://storeframework.myvtex.com">https://storeframework.myvtex.com</a>

* <a href="https://test--storeframework.myvtex.com">https://test--storeframework.myvtex.com</a>

<h1 id="vtex-headless-cms-pages">Pages</h1>

## Get all Content Types

<a id="opIdGetAllContentTypes"></a>

> Code samples

```bash
curl https://example.com/_v/cms/api/faststore/ \
  -H 'Accept: application/json'
```

`GET /_v/cms/api/{builderId}/`

Gets data from all Content Types.

<h3 id="get-all-content-types-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|builderId|path|string|true|Builder ID specified in the settings of the CMS app.|

> Example responses

> 200 Response

```json
{
  "contentTypes": [
    {
      "configurationSchemaSets": [],
      "id": "home",
      "name": "Home Page"
    },
    {
      "configurationSchemaSets": [
        {
          "configurations": [
            {
              "name": "Collection",
              "schema": {
                "description": "Definition of a Collection for the CMS",
                "oneOf": [
                  {
                    "description": "Configure a Category",
                    "properties": {
                      "categoryId": {
                        "title": "Category ID",
                        "type": "string"
                      },
                      "sort": {
                        "default": "\"\"",
                        "enum": [
                          "\"\"",
                          "discount:desc",
                          "release:desc",
                          "name:asc",
                          "name:desc",
                          "orders:desc",
                          "price:asc",
                          "price:desc"
                        ],
                        "enumNames": [
                          "Relevance",
                          "Discount",
                          "Release date",
                          "Name, ascending",
                          "Name, descending",
                          "Sales",
                          "Price: Low to High",
                          "Price: High to Low"
                        ],
                        "title": "Default ordering",
                        "type": "string"
                      }
                    },
                    "required": [
                      "categoryId",
                      "sort"
                    ],
                    "title": "Category",
                    "type": "object"
                  },
                  {
                    "description": "Configure a Brand",
                    "properties": {
                      "brandId": {
                        "title": "Brand ID",
                        "type": "string"
                      },
                      "sort": {
                        "default": "\"\"",
                        "enum": [
                          "\"\"",
                          "discount:desc",
                          "release:desc",
                          "name:asc",
                          "name:desc",
                          "orders:desc",
                          "price:asc",
                          "price:desc"
                        ],
                        "enumNames": [
                          "Relevance",
                          "Discount",
                          "Release date",
                          "Name, ascending",
                          "Name, descending",
                          "Sales",
                          "Price: Low to High",
                          "Price: High to Low"
                        ],
                        "title": "Default ordering",
                        "type": "string"
                      }
                    },
                    "required": [
                      "brandId",
                      "sort"
                    ],
                    "title": "Brand",
                    "type": "object"
                  },
                  {
                    "description": "Configure a Collection",
                    "properties": {
                      "clusterId": {
                        "title": "Collection ID",
                        "type": "string"
                      },
                      "seo": {
                        "properties": {
                          "description": {
                            "default": "Page description",
                            "description": "Suggested for search engines",
                            "title": "Description (Meta description)",
                            "type": "string"
                          },
                          "slug": {
                            "default": "/path/to/page",
                            "description": "Final part of the page's address. No spaces allowed.",
                            "pattern": "^/([a-zA-Z0-9]|-|/|_)*",
                            "title": "URL slug",
                            "type": "string"
                          },
                          "title": {
                            "default": "Page title",
                            "description": "Appears in the browser tab and is suggested for search engines",
                            "title": "Title",
                            "type": "string"
                          }
                        },
                        "required": [
                          "title",
                          "description",
                          "slug"
                        ],
                        "title": "Seo",
                        "type": "object",
                        "widget": {
                          "ui:ObjectFieldTemplate": "GoogleSeoPreview"
                        }
                      },
                      "sort": {
                        "default": "\"\"",
                        "enum": [
                          "\"\"",
                          "discount:desc",
                          "release:desc",
                          "name:asc",
                          "name:desc",
                          "orders:desc",
                          "price:asc",
                          "price:desc"
                        ],
                        "enumNames": [
                          "Relevance",
                          "Discount",
                          "Release date",
                          "Name, ascending",
                          "Name, descending",
                          "Sales",
                          "Price: Low to High",
                          "Price: High to Low"
                        ],
                        "title": "Default ordering",
                        "type": "string"
                      }
                    },
                    "required": [
                      "clusterId",
                      "sort",
                      "seo"
                    ],
                    "title": "Collection",
                    "type": "object"
                  }
                ],
                "title": "Collection"
              }
            }
          ],
          "name": "Parameters"
        }
      ],
      "id": "plp",
      "name": "PLP"
    },
    {
      "configurationSchemaSets": [
        {
          "configurations": [
            {
              "name": "siteMetadataWithSlug",
              "schema": {
                "description": "Configure global site metadata",
                "properties": {
                  "description": {
                    "default": "A beautifuly designed site for general VTEX stores",
                    "title": "Meta tag description",
                    "type": "string"
                  },
                  "slug": {
                    "default": "/landing-page-url",
                    "title": "URL Slug",
                    "type": "string"
                  },
                  "title": {
                    "default": "Store Theme | VTEX FastStore",
                    "description": "Display this title when no other tile is available",
                    "title": "Default page title",
                    "type": "string"
                  },
                  "titleTemplate": {
                    "default": "%s | Store Theme",
                    "title": "Title template to be used in category/product pages",
                    "type": "string"
                  }
                },
                "title": "Site Metadata",
                "type": "object",
                "widget": {
                  "ui:ObjectFieldTemplate": "GoogleSeoPreview"
                }
              }
            }
          ],
          "name": "SEO"
        }
      ],
      "id": "institutionalPage",
      "name": "Institutional page"
    }
  ]
}
```

<h3 id="get-all-content-types-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-all-content-types-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|contentTypes|[object]|false|none|Array with data of each Content Type.|
|» configurationSchemaSets|[object]|false|none|Array with data of the `configurationSchemaSets` tabs specified in the FastStore project.|
|» » configurations|[object]|false|none|Custom configurations of the Content Type tab. Varies depending on the Content Type schema defined in the FastStore project.|
|» » name|string|false|none|Name of the Content Type tab.|
|» id|string|false|none|Content Type identifier specified in the FastStore project.|
|» name|string|false|none|Content Type name specified in the FastStore project.|

<aside class="success">
This operation does not require authentication
</aside>

## Get all CMS pages by Content Type

<a id="opIdGetPagesbyContentType"></a>

> Code samples

```bash
curl https://example.com/_v/cms/api/faststore/plp \
  -H 'Accept: application/json'
```

`GET /_v/cms/api/{builderId}/{content-type}`

Gets data from all pages of a given Content Type.

<h3 id="get-all-cms-pages-by-content-type-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|builderId|path|string|true|Builder ID specified in the settings of the CMS app.|
|content-type|path|string|true|Content Type identifier defined in the FastStore project.|
|versionId|query|string|false|Version ID presented in the URL path of a CMS preview.|
|releaseId|query|string|false|Release ID presented in the URL path of a CMS preview.|
|filters[{field}]|query|string|false|Filter results by a property of the page (e.g., `filters[status]`) or by a nested custom field of the `parameters` object (e.g., `filters[parameters.collection.sort]`).<br>*Replace {field} with the desired property.*|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "id": "d05d3db8-62b2-4f0b-9b70-d6d25ff29b6e",
      "name": "Electronics",
      "parameters": {
        "collection": {
          "brandId": "123",
          "sort": "\"\""
        }
      },
      "sections": [
        {
          "data": {
            "content": "{\"blocks\":[{\"key\":\"dtg7g\",\"text\":\"-\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
          },
          "id": "1632244409269",
          "name": "RichText"
        },
        {
          "data": {
            "content": "{\"blocks\":[{\"key\":\"2qtft\",\"text\":\",\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
          },
          "id": "1632244445091",
          "name": "RichText"
        }
      ],
      "status": "published",
      "type": "plp",
      "versionId": "ed51d1cd-e020-4f16-b48b-ca83e720472d",
      "versionStatus": "published"
    },
    {
      "id": "4ab6388d-79e6-492f-adda-3e251b85eeb6",
      "name": "Beauty",
      "parameters": {
        "collection": {
          "clusterId": "1182",
          "seo": {
            "description": "beauty products",
            "slug": "/beauty",
            "title": "Page title"
          },
          "sort": "\"\""
        }
      },
      "sections": [
        {
          "data": {
            "alt": "beauty",
            "description": "beauty products",
            "desktop": {
              "srcSet": "https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/dda7c17e-5182-4439-b5af-94f651e2d835___1ef09be73ec9e80c719da13432666441.jpeg"
            },
            "mobile": {
              "srcSet": "https://storecomponents.vtexassets.com/assets/vtex.file-manager-graphql/images/ed8ef334-c1e5-4269-8728-34dbffeda424___1ef09be73ec9e80c719da13432666441.jpeg"
            },
            "title": "beauty"
          },
          "id": "1643319987751",
          "name": "SearchBanner"
        }
      ],
      "status": "published",
      "type": "plp",
      "versionId": "95f940d4-584e-4b3d-9872-8c713ba42583",
      "versionStatus": "published"
    }
  ],
  "hasNextPage": false,
  "totalItems": 2
}
```

<h3 id="get-all-cms-pages-by-content-type-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-all-cms-pages-by-content-type-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[object]|false|none|Array with data from all pages of the given Content Type.|
|» id|string|false|none|Document ID presented in the URL path of a CMS preview.|
|» name|string|false|none|Name of the page created via the CMS interface.|
|» parameters|object|false|none|Object with the configuration values of a `configurationSchemaSets` tab. Varies depending on the Content Type schema defined in the FastStore project.|
|» sections|[object]|false|none|Sections that compose the page.|
|» » data|object|false|none|Custom field values of the Section. Varies depending on the Section schema defined in the FastStore project.|
|» » id|string|false|none|Section ID.|
|» » name|string|false|none|Section name.|
|» status|string|false|none|Current status of the page.|
|» type|string|false|none|Name of the Content Type defined in the FastStore project.|
|» versionId|string|false|none|Version ID.|
|» versionStatus|string|false|none|Version status.|
|hasNextPage|boolean|false|none|Indicates if there are more items to fetch.|
|totalItems|integer|false|none|Total number of results.|

<aside class="success">
This operation does not require authentication
</aside>

## Get CMS page

<a id="opIdGetCMSpage"></a>

> Code samples

```bash
curl https://example.com/_v/cms/api/faststore/plp/5af643b5-9a6d-48f2-9b34-919dd762c908/ \
  -H 'Accept: application/json'
```

`GET /_v/cms/api/{builderId}/{content-type}/{document-id}/`

Gets all data from a given page.

<h3 id="get-cms-page-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|builderId|path|string|true|Builder ID specified in the settings of the CMS app.|
|content-type|path|string|true|Content Type ID defined in the FastStore project.|
|document-id|path|string|true|Document ID presented in the URL path of a CMS preview.|
|versionId|query|string|false|Version ID presented in the URL path of a CMS preview.|
|releaseId|query|string|false|Release ID presented in the URL path of a CMS preview.|

> Example responses

> 200 Response

```json
{
  "id": "ad2fd81d-a53c-4281-8d01-a4fc2f274db3",
  "name": "Home",
  "sections": [
    {
      "data": {
        "actionLink": "link.url.com",
        "dismissible": true,
        "icon": "Bell",
        "linkText": "alert link",
        "text": "alert text"
      },
      "id": "1651804180614",
      "name": "Alert"
    },
    {
      "data": {
        "imageAlt": "hero image",
        "imageSrc": "https://storeframework.vtexassets.com/assets/vtex.file-manager-graphql/images/299f7d32-bb6a-40fd-82a0-4af5573ba572___17239443c00c1e894cff10ca05018058.jpg",
        "link": "/office",
        "linkText": "See all",
        "subtitle": "At FastStore you can shop the best tech of 2022. Enjoy and get 10% off on your first purchase.",
        "title": "New Products Available"
      },
      "id": "1647286556072",
      "name": "Hero"
    },
    {
      "data": {
        "after": "0",
        "first": 5,
        "selectedFacets": [
          {
            "key": "productClusterIds",
            "value": "140"
          }
        ],
        "sort": "score_desc",
        "title": "Most Wanted!"
      },
      "id": "1649293076336",
      "name": "ProductShelf"
    },
    {
      "data": {
        "after": "0",
        "first": 3,
        "selectedFacets": [
          {
            "key": "productClusterIds",
            "value": "141"
          }
        ],
        "sort": "score_desc",
        "title": "Just Arrived"
      },
      "id": "1649293548351",
      "name": "ProductTiles"
    },
    {
      "data": {
        "actionLabel": "See all",
        "actionPath": "/office",
        "caption": "Enjoy and get 10% off on your first purchase!!",
        "title": "Receive our news and promotions in advance."
      },
      "id": "1647286735093",
      "name": "BannerText"
    },
    {
      "data": {
        "after": "0",
        "first": 5,
        "selectedFacets": [
          {
            "key": "productClusterIds",
            "value": "142"
          }
        ],
        "sort": "score_desc",
        "title": "Deals & Promotions"
      },
      "id": "1649293131632",
      "name": "ProductShelf"
    }
  ],
  "status": "published",
  "type": "home",
  "versionId": "e3867e2c-7082-4fe6-83ed-c473242b6970",
  "versionStatus": "publishing"
}
```

<h3 id="get-cms-page-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|
|404|Not Found|Not Found|None|
|500|Internal Server Error|Internal Server Error|None|

<h3 id="get-cms-page-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|Document ID.|
|name|string|true|none|Name of the page created in the CMS app.|
|sections|[object]|false|none|Sections that compose the page.|
|» data|object|true|none|Content of the Section. Varies depending on the Section schema defined in the FastStore project.|
|» id|string|true|none|Section ID.|
|» name|string|true|none|Section name.|
|status|string|true|none|Current status of the page.|
|type|string|true|none|Name of the Content Type defined in the FastStore project.|
|versionId|string|false|none|Version ID.|
|versionStatus|string|false|none|Version status|

<aside class="success">
This operation does not require authentication
</aside>
