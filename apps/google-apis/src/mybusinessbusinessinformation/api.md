<h1 id="my-business-business-information-api">My Business Business Information API v1</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

The My Business Business Information API provides an interface for managing business information. Note - If you have a quota of 0 after enabling the API, please request for GBP API access.

Base URLs:

* <a href="https://mybusinessbusinessinformation.googleapis.com/">https://mybusinessbusinessinformation.googleapis.com/</a>

<a href="https://developers.google.com/terms/">Terms of service</a>
Web: <a href="https://google.com">Google</a> 
License: <a href="http://creativecommons.org/licenses/by/3.0/">Creative Commons Attribution 3.0</a>

<a href="https://developers.google.com/my-business/">External documentation</a>

<h1 id="my-business-business-information-api-accounts">accounts</h1>

## mybusinessbusinessinformation.accounts.locations.list

<a id="opIdmybusinessbusinessinformation.accounts.locations.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -H 'Accept: application/json'
```

`GET /v1/{parent}/locations`

Lists the locations for the specified account.

<h3 id="mybusinessbusinessinformationaccountslocationslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly.|
|filter|query|string|false|Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations).|
|orderBy|query|string|false|Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are title and store_code. For example: "title, store_code desc" or "title" or "store_code desc"|
|pageSize|query|integer|false|Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100.|
|pageToken|query|string|false|Optional. If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size.|
|readMask|query|string|false|Required. Read mask to specify what fields will be returned in the response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "locations": [
    {
      "adWordsLocationExtensions": {
        "adPhone": "string"
      },
      "categories": {
        "additionalCategories": [
          {
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "name": "string",
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        ],
        "primaryCategory": {
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "name": "string",
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      },
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "metadata": {
        "canDelete": true,
        "canHaveBusinessCalls": true,
        "canHaveFoodMenus": true,
        "canModifyServiceList": true,
        "canOperateHealthData": true,
        "canOperateLocalPost": true,
        "canOperateLodgingData": true,
        "duplicateLocation": "string",
        "hasGoogleUpdated": true,
        "hasPendingEdits": true,
        "hasVoiceOfMerchant": true,
        "mapsUri": "string",
        "newReviewUri": "string",
        "placeId": "string"
      },
      "moreHours": [
        {
          "hoursTypeId": "string",
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ]
        }
      ],
      "name": "string",
      "openInfo": {
        "canReopen": true,
        "openingDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
      },
      "phoneNumbers": {
        "additionalPhones": [
          "string"
        ],
        "primaryPhone": "string"
      },
      "profile": {
        "description": "string"
      },
      "regularHours": {
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      },
      "relationshipData": {
        "childrenLocations": [
          {
            "placeId": "string",
            "relationType": "RELATION_TYPE_UNSPECIFIED"
          }
        ],
        "parentChain": "string",
        "parentLocation": {
          "placeId": "string",
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      },
      "serviceArea": {
        "businessType": "BUSINESS_TYPE_UNSPECIFIED",
        "places": {
          "placeInfos": [
            {
              "placeId": "string",
              "placeName": "string"
            }
          ]
        },
        "regionCode": "string"
      },
      "serviceItems": [
        {
          "freeFormServiceItem": {
            "category": "string",
            "label": {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "structuredServiceItem": {
            "description": "string",
            "serviceTypeId": "string"
          }
        }
      ],
      "specialHours": {
        "specialHourPeriods": [
          {
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "closed": true,
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ]
      },
      "storeCode": "string",
      "storefrontAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "title": "string",
      "websiteUri": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

<h3 id="mybusinessbusinessinformationaccountslocationslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListLocationsResponse](#schemalistlocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinessinformation.accounts.locations.create

<a id="opIdmybusinessbusinessinformation.accounts.locations.create"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string/locations \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "categories": {
      "additionalCategories": [
        {
          "name": "string"
        }
      ],
      "primaryCategory": {
        "name": "string"
      }
    },
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "phoneNumbers": {
      "additionalPhones": [
        "string"
      ],
      "primaryPhone": "string"
    },
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    },
    "relationshipData": {
      "childrenLocations": [
        {
          "placeId": "string",
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      ],
      "parentChain": "string",
      "parentLocation": {
        "placeId": "string",
        "relationType": "RELATION_TYPE_UNSPECIFIED"
      }
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "placeId": "string",
            "placeName": "string"
          }
        ]
      },
      "regionCode": "string"
    },
    "serviceItems": [
      {
        "freeFormServiceItem": {
          "category": "string",
          "label": {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        },
        "price": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "structuredServiceItem": {
          "description": "string",
          "serviceTypeId": "string"
        }
      }
    ],
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "closed": true,
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "storefrontAddress": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "title": "string",
    "websiteUri": "string"
  }'
```

`POST /v1/{parent}/locations`

Creates a new Location that will be owned by the logged in user.

> Body parameter

```json
{
  "adWordsLocationExtensions": {
    "adPhone": "string"
  },
  "categories": {
    "additionalCategories": [
      {
        "name": "string"
      }
    ],
    "primaryCategory": {
      "name": "string"
    }
  },
  "labels": [
    "string"
  ],
  "languageCode": "string",
  "latlng": {
    "latitude": 0,
    "longitude": 0
  },
  "moreHours": [
    {
      "hoursTypeId": "string",
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    }
  ],
  "name": "string",
  "openInfo": {
    "openingDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
  },
  "phoneNumbers": {
    "additionalPhones": [
      "string"
    ],
    "primaryPhone": "string"
  },
  "profile": {
    "description": "string"
  },
  "regularHours": {
    "periods": [
      {
        "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
        "closeTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "openDay": "DAY_OF_WEEK_UNSPECIFIED",
        "openTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ]
  },
  "relationshipData": {
    "childrenLocations": [
      {
        "placeId": "string",
        "relationType": "RELATION_TYPE_UNSPECIFIED"
      }
    ],
    "parentChain": "string",
    "parentLocation": {
      "placeId": "string",
      "relationType": "RELATION_TYPE_UNSPECIFIED"
    }
  },
  "serviceArea": {
    "businessType": "BUSINESS_TYPE_UNSPECIFIED",
    "places": {
      "placeInfos": [
        {
          "placeId": "string",
          "placeName": "string"
        }
      ]
    },
    "regionCode": "string"
  },
  "serviceItems": [
    {
      "freeFormServiceItem": {
        "category": "string",
        "label": {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      },
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "structuredServiceItem": {
        "description": "string",
        "serviceTypeId": "string"
      }
    }
  ],
  "specialHours": {
    "specialHourPeriods": [
      {
        "closeTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "closed": true,
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "openTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ]
  },
  "storeCode": "string",
  "storefrontAddress": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "title": "string",
  "websiteUri": "string"
}
```

<h3 id="mybusinessbusinessinformationaccountslocationscreate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|parent|path|string|true|Required. The name of the account in which to create this location.|
|requestId|query|string|false|Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters.|
|validateOnly|query|boolean|false|Optional. If true, the request is validated without actually creating the location.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Location](#schemalocation)|false|none|
|» adWordsLocationExtensions|body|[AdWordsLocationExtensions](#schemaadwordslocationextensions)|false|Optional. Additional information that is surfaced in AdWords.|
|» categories|body|[Categories](#schemacategories)|false|Optional. The different categories that describe the business.|
|» labels|body|[string]|false|Optional. A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Must be between 1-255 characters per label.|
|» languageCode|body|string|false|Immutable. The language of the location. Set during creation and not updateable.|
|» latlng|body|[LatLng](#schemalatlng)|false|Optional. User-provided latitude and longitude. When creating a location, this field is ignored if the provided address geocodes successfully. This field is only returned on get requests if the user-provided `latlng` value was accepted during create, or the `latlng` value was updated through the Google Business Profile website. This field can only be updated by approved clients.|
|» moreHours|body|[[MoreHours](#schemamorehours)]|false|Optional. More hours for a business's different departments or specific customers.|
|» name|body|string|false|Google identifier for this location in the form: `locations/{location_id}`.|
|» openInfo|body|[OpenInfo](#schemaopeninfo)|false|Optional. A flag that indicates whether the location is currently open for business.|
|» phoneNumbers|body|[PhoneNumbers](#schemaphonenumbers)|false|Optional. The different phone numbers that customers can use to get in touch with the business.|
|» profile|body|[Profile](#schemaprofile)|false|Optional. Describes your business in your own voice and shares with users the unique story of your business and offerings. This field is required for all categories except lodging categories (e.g. hotels, motels, inns).|
|» regularHours|body|[BusinessHours](#schemabusinesshours)|false|Optional. Operating hours for the business.|
|» relationshipData|body|[RelationshipData](#schemarelationshipdata)|false|Optional. All locations and chain related to this one.|
|» serviceArea|body|[ServiceAreaBusiness](#schemaserviceareabusiness)|false|Optional. Service area businesses provide their service at the customer's location. If this business is a service area business, this field describes the area(s) serviced by the business.|
|» serviceItems|body|[[ServiceItem](#schemaserviceitem)]|false|Optional. List of services supported by merchants. A service can be haircut, install water heater, etc. Duplicated service items will be removed automatically.|
|» specialHours|body|[SpecialHours](#schemaspecialhours)|false|Optional. Special hours for the business. This typically includes holiday hours, and other times outside of regular operating hours. These override regular business hours. This field cannot be set without regular hours.|
|» storeCode|body|string|false|Optional. External identifier for this location, which must be unique within a given account. This is a means of associating the location with your own records.|
|» storefrontAddress|body|[PostalAddress](#schemapostaladdress)|false|Optional. A precise, accurate address to describe your business location. PO boxes or mailboxes located at remote locations are not acceptable. At this time, you can specify a maximum of five `address_lines` values in the address. This field should only be set for businesses that have a storefront. This field should not be set for locations of type `CUSTOMER_LOCATION_ONLY`.|
|» title|body|string|false|Required. Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").|
|» websiteUri|body|string|false|Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "adWordsLocationExtensions": {
    "adPhone": "string"
  },
  "categories": {
    "additionalCategories": [
      {
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "name": "string",
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    ],
    "primaryCategory": {
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "name": "string",
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  },
  "labels": [
    "string"
  ],
  "languageCode": "string",
  "latlng": {
    "latitude": 0,
    "longitude": 0
  },
  "metadata": {
    "canDelete": true,
    "canHaveBusinessCalls": true,
    "canHaveFoodMenus": true,
    "canModifyServiceList": true,
    "canOperateHealthData": true,
    "canOperateLocalPost": true,
    "canOperateLodgingData": true,
    "duplicateLocation": "string",
    "hasGoogleUpdated": true,
    "hasPendingEdits": true,
    "hasVoiceOfMerchant": true,
    "mapsUri": "string",
    "newReviewUri": "string",
    "placeId": "string"
  },
  "moreHours": [
    {
      "hoursTypeId": "string",
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    }
  ],
  "name": "string",
  "openInfo": {
    "canReopen": true,
    "openingDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
  },
  "phoneNumbers": {
    "additionalPhones": [
      "string"
    ],
    "primaryPhone": "string"
  },
  "profile": {
    "description": "string"
  },
  "regularHours": {
    "periods": [
      {
        "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
        "closeTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "openDay": "DAY_OF_WEEK_UNSPECIFIED",
        "openTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ]
  },
  "relationshipData": {
    "childrenLocations": [
      {
        "placeId": "string",
        "relationType": "RELATION_TYPE_UNSPECIFIED"
      }
    ],
    "parentChain": "string",
    "parentLocation": {
      "placeId": "string",
      "relationType": "RELATION_TYPE_UNSPECIFIED"
    }
  },
  "serviceArea": {
    "businessType": "BUSINESS_TYPE_UNSPECIFIED",
    "places": {
      "placeInfos": [
        {
          "placeId": "string",
          "placeName": "string"
        }
      ]
    },
    "regionCode": "string"
  },
  "serviceItems": [
    {
      "freeFormServiceItem": {
        "category": "string",
        "label": {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      },
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "structuredServiceItem": {
        "description": "string",
        "serviceTypeId": "string"
      }
    }
  ],
  "specialHours": {
    "specialHourPeriods": [
      {
        "closeTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "closed": true,
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "openTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ]
  },
  "storeCode": "string",
  "storefrontAddress": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "title": "string",
  "websiteUri": "string"
}
```

<h3 id="mybusinessbusinessinformationaccountslocationscreate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Location](#schemalocation)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-business-business-information-api-attributes">attributes</h1>

## mybusinessbusinessinformation.attributes.list

<a id="opIdmybusinessbusinessinformation.attributes.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/attributes \
  -H 'Accept: application/json'
```

`GET /v1/attributes`

Returns the list of attributes that would be available for a location with the given primary category and country.

<h3 id="mybusinessbusinessinformationattributeslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|categoryName|query|string|false|The primary category stable ID to find available attributes. Must be of the format categories/{category_id}.|
|languageCode|query|string|false|The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English.|
|pageSize|query|integer|false|How many attributes to include per page. Default is 200, minimum is 1.|
|pageToken|query|string|false|If specified, the next page of attribute metadata is retrieved.|
|parent|query|string|false|Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set.|
|regionCode|query|string|false|The ISO 3166-1 alpha-2 country code to find available attributes.|
|showAll|query|boolean|false|Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "attributeMetadata": [
    {
      "deprecated": true,
      "displayName": "string",
      "groupDisplayName": "string",
      "parent": "string",
      "repeatable": true,
      "valueMetadata": [
        {
          "displayName": "string",
          "value": null
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessbusinessinformationattributeslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListAttributeMetadataResponse](#schemalistattributemetadataresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-business-business-information-api-categories">categories</h1>

## mybusinessbusinessinformation.categories.list

<a id="opIdmybusinessbusinessinformation.categories.list"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/categories \
  -H 'Accept: application/json'
```

`GET /v1/categories`

Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

<h3 id="mybusinessbusinessinformationcategorieslist-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|filter|query|string|false|Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`.|
|languageCode|query|string|false|Required. The BCP 47 code of language.|
|pageSize|query|integer|false|Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100.|
|pageToken|query|string|false|Optional. If specified, the next page of categories will be fetched.|
|regionCode|query|string|false|Required. The ISO 3166-1 alpha-2 country code.|
|view|query|string|false|Required. Specifies which parts to the Category resource should be returned in the response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|CATEGORY_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "categories": [
    {
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "name": "string",
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

<h3 id="mybusinessbusinessinformationcategorieslist-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[ListCategoriesResponse](#schemalistcategoriesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinessinformation.categories.batchGet

<a id="opIdmybusinessbusinessinformation.categories.batchGet"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/categories:batchGet \
  -H 'Accept: application/json'
```

`GET /v1/categories:batchGet`

Returns a list of business categories for the provided language and GConcept ids.

<h3 id="mybusinessbusinessinformationcategoriesbatchget-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|languageCode|query|string|false|Required. The BCP 47 code of language that the category names should be returned in.|
|names|query|[string]|false|Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request.|
|regionCode|query|string|false|Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language.|
|view|query|string|false|Required. Specifies which parts to the Category resource should be returned in the response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|view|CATEGORY_VIEW_UNSPECIFIED|
|view|BASIC|
|view|FULL|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "categories": [
    {
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "name": "string",
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ]
}
```

<h3 id="mybusinessbusinessinformationcategoriesbatchget-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[BatchGetCategoriesResponse](#schemabatchgetcategoriesresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-business-business-information-api-chains">chains</h1>

## mybusinessbusinessinformation.chains.search

<a id="opIdmybusinessbusinessinformation.chains.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/chains:search \
  -H 'Accept: application/json'
```

`GET /v1/chains:search`

Searches the chain based on chain name.

<h3 id="mybusinessbusinessinformationchainssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|chainName|query|string|false|Required. Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛"|
|pageSize|query|integer|false|The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "chains": [
    {
      "chainNames": [
        {
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "locationCount": 0,
      "name": "string",
      "websites": [
        {
          "uri": "string"
        }
      ]
    }
  ]
}
```

<h3 id="mybusinessbusinessinformationchainssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchChainsResponse](#schemasearchchainsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-business-business-information-api-googlelocations">googleLocations</h1>

## mybusinessbusinessinformation.googleLocations.search

<a id="opIdmybusinessbusinessinformation.googleLocations.search"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/googleLocations:search \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "location": {
      "adWordsLocationExtensions": {
        "adPhone": "string"
      },
      "categories": {
        "additionalCategories": [
          {
            "name": "string"
          }
        ],
        "primaryCategory": {
          "name": "string"
        }
      },
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "moreHours": [
        {
          "hoursTypeId": "string",
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ]
        }
      ],
      "name": "string",
      "openInfo": {
        "openingDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
      },
      "phoneNumbers": {
        "additionalPhones": [
          "string"
        ],
        "primaryPhone": "string"
      },
      "profile": {
        "description": "string"
      },
      "regularHours": {
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      },
      "relationshipData": {
        "childrenLocations": [
          {
            "placeId": "string",
            "relationType": "RELATION_TYPE_UNSPECIFIED"
          }
        ],
        "parentChain": "string",
        "parentLocation": {
          "placeId": "string",
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      },
      "serviceArea": {
        "businessType": "BUSINESS_TYPE_UNSPECIFIED",
        "places": {
          "placeInfos": [
            {
              "placeId": "string",
              "placeName": "string"
            }
          ]
        },
        "regionCode": "string"
      },
      "serviceItems": [
        {
          "freeFormServiceItem": {
            "category": "string",
            "label": {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "structuredServiceItem": {
            "description": "string",
            "serviceTypeId": "string"
          }
        }
      ],
      "specialHours": {
        "specialHourPeriods": [
          {
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "closed": true,
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ]
      },
      "storeCode": "string",
      "storefrontAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "title": "string",
      "websiteUri": "string"
    },
    "pageSize": 0,
    "query": "string"
  }'
```

`POST /v1/googleLocations:search`

Search all of the possible locations that are a match to the specified request.

> Body parameter

```json
{
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "categories": {
      "additionalCategories": [
        {
          "name": "string"
        }
      ],
      "primaryCategory": {
        "name": "string"
      }
    },
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "phoneNumbers": {
      "additionalPhones": [
        "string"
      ],
      "primaryPhone": "string"
    },
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    },
    "relationshipData": {
      "childrenLocations": [
        {
          "placeId": "string",
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      ],
      "parentChain": "string",
      "parentLocation": {
        "placeId": "string",
        "relationType": "RELATION_TYPE_UNSPECIFIED"
      }
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "placeId": "string",
            "placeName": "string"
          }
        ]
      },
      "regionCode": "string"
    },
    "serviceItems": [
      {
        "freeFormServiceItem": {
          "category": "string",
          "label": {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        },
        "price": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "structuredServiceItem": {
          "description": "string",
          "serviceTypeId": "string"
        }
      }
    ],
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "closed": true,
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "storefrontAddress": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "title": "string",
    "websiteUri": "string"
  },
  "pageSize": 0,
  "query": "string"
}
```

<h3 id="mybusinessbusinessinformationgooglelocationssearch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[SearchGoogleLocationsRequest](#schemasearchgooglelocationsrequest)|false|none|
|» location|body|[Location](#schemalocation)|false|Location to search for. If provided, will find locations which match the provided location details.|
|» pageSize|body|integer(int32)|false|The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.|
|» query|body|string|false|Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "googleLocations": [
    {
      "location": {
        "adWordsLocationExtensions": {
          "adPhone": "string"
        },
        "categories": {
          "additionalCategories": [
            {
              "displayName": "string",
              "moreHoursTypes": [
                {
                  "displayName": "string",
                  "hoursTypeId": "string",
                  "localizedDisplayName": "string"
                }
              ],
              "name": "string",
              "serviceTypes": [
                {
                  "displayName": "string",
                  "serviceTypeId": "string"
                }
              ]
            }
          ],
          "primaryCategory": {
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "name": "string",
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        },
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "metadata": {
          "canDelete": true,
          "canHaveBusinessCalls": true,
          "canHaveFoodMenus": true,
          "canModifyServiceList": true,
          "canOperateHealthData": true,
          "canOperateLocalPost": true,
          "canOperateLodgingData": true,
          "duplicateLocation": "string",
          "hasGoogleUpdated": true,
          "hasPendingEdits": true,
          "hasVoiceOfMerchant": true,
          "mapsUri": "string",
          "newReviewUri": "string",
          "placeId": "string"
        },
        "moreHours": [
          {
            "hoursTypeId": "string",
            "periods": [
              {
                "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
                "closeTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "openDay": "DAY_OF_WEEK_UNSPECIFIED",
                "openTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ]
          }
        ],
        "name": "string",
        "openInfo": {
          "canReopen": true,
          "openingDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
        },
        "phoneNumbers": {
          "additionalPhones": [
            "string"
          ],
          "primaryPhone": "string"
        },
        "profile": {
          "description": "string"
        },
        "regularHours": {
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ]
        },
        "relationshipData": {
          "childrenLocations": [
            {
              "placeId": "string",
              "relationType": "RELATION_TYPE_UNSPECIFIED"
            }
          ],
          "parentChain": "string",
          "parentLocation": {
            "placeId": "string",
            "relationType": "RELATION_TYPE_UNSPECIFIED"
          }
        },
        "serviceArea": {
          "businessType": "BUSINESS_TYPE_UNSPECIFIED",
          "places": {
            "placeInfos": [
              {
                "placeId": "string",
                "placeName": "string"
              }
            ]
          },
          "regionCode": "string"
        },
        "serviceItems": [
          {
            "freeFormServiceItem": {
              "category": "string",
              "label": {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            },
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "structuredServiceItem": {
              "description": "string",
              "serviceTypeId": "string"
            }
          }
        ],
        "specialHours": {
          "specialHourPeriods": [
            {
              "closeTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "closed": true,
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "openTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              }
            }
          ]
        },
        "storeCode": "string",
        "storefrontAddress": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "title": "string",
        "websiteUri": "string"
      },
      "name": "string",
      "requestAdminRightsUri": "string"
    }
  ]
}
```

<h3 id="mybusinessbusinessinformationgooglelocationssearch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[SearchGoogleLocationsResponse](#schemasearchgooglelocationsresponse)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="my-business-business-information-api-locations">locations</h1>

## mybusinessbusinessinformation.locations.getAttributes

<a id="opIdmybusinessbusinessinformation.locations.getAttributes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -H 'Accept: application/json'
```

`GET /v1/{name}`

Looks up all the attributes set for a given location.

<h3 id="mybusinessbusinessinformationlocationsgetattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "attributes": [
    {
      "name": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "uriValues": [
        {
          "uri": "string"
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
      "values": [
        null
      ]
    }
  ],
  "name": "string"
}
```

<h3 id="mybusinessbusinessinformationlocationsgetattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attributes](#schemaattributes)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinessinformation.locations.delete

<a id="opIdmybusinessbusinessinformation.locations.delete"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X DELETE \
  -H 'Accept: application/json'
```

`DELETE /v1/{name}`

Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.

<h3 id="mybusinessbusinessinformationlocationsdelete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The name of the location to delete.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="mybusinessbusinessinformationlocationsdelete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinessinformation.locations.updateAttributes

<a id="opIdmybusinessbusinessinformation.locations.updateAttributes"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "attributes": [
      {
        "name": "string",
        "repeatedEnumValue": {
          "setValues": [
            "string"
          ],
          "unsetValues": [
            "string"
          ]
        },
        "uriValues": [
          {
            "uri": "string"
          }
        ],
        "values": [
          null
        ]
      }
    ],
    "name": "string"
  }'
```

`PATCH /v1/{name}`

Update attributes for a given location.

> Body parameter

```json
{
  "attributes": [
    {
      "name": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "uriValues": [
        {
          "uri": "string"
        }
      ],
      "values": [
        null
      ]
    }
  ],
  "name": "string"
}
```

<h3 id="mybusinessbusinessinformationlocationsupdateattributes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.|
|attributeMask|query|string|false|Required. Attribute name of attributes that you'd like to update. Represented by `attributes/{attribute}`. Updates: All attributes provided in the attributes field that you would like to update must be set in the `attribute_mask`. Attributes set in the above list but not in the `attribute_mask` will be ignored. Deletes: If you'd like to delete certain attributes, they must be specified in the `attribute_mask` with no matching entry in the attributes list. If you'd like to delete all attributes set on a location, you should look up all the applicable attributes for the location and then add them to the `attribute_mask` with an empty attributes field.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[Attributes](#schemaattributes)|false|none|
|» attributes|body|[[Attribute](#schemaattribute)]|false|A collection of attributes that need to be updated.|
|» name|body|string|false|Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "attributes": [
    {
      "name": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "uriValues": [
        {
          "uri": "string"
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
      "values": [
        null
      ]
    }
  ],
  "name": "string"
}
```

<h3 id="mybusinessbusinessinformationlocationsupdateattributes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attributes](#schemaattributes)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinessinformation.locations.associate

<a id="opIdmybusinessbusinessinformation.locations.associate"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:associate \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "placeId": "string"
  }'
```

`POST /v1/{name}:associate`

Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `SearchGoogleLocations`.

> Body parameter

```json
{
  "placeId": "string"
}
```

<h3 id="mybusinessbusinessinformationlocationsassociate-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the location to associate.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[AssociateLocationRequest](#schemaassociatelocationrequest)|false|none|
|» placeId|body|string|false|The association to establish. If not set, it indicates no match.|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="mybusinessbusinessinformationlocationsassociate-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinessinformation.locations.clearLocationAssociation

<a id="opIdmybusinessbusinessinformation.locations.clearLocationAssociation"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:clearLocationAssociation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{}'
```

`POST /v1/{name}:clearLocationAssociation`

Clears an association between a location and its place ID. This operation is only valid if the location is unverified.

> Body parameter

```json
{}
```

<h3 id="mybusinessbusinessinformationlocationsclearlocationassociation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. The resource name of the location to disassociate.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|
|body|body|[ClearLocationAssociationRequest](#schemaclearlocationassociationrequest)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{}
```

<h3 id="mybusinessbusinessinformationlocationsclearlocationassociation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Empty](#schemaempty)|

<aside class="success">
This operation does not require authentication
</aside>

## mybusinessbusinessinformation.locations.attributes.getGoogleUpdated

<a id="opIdmybusinessbusinessinformation.locations.attributes.getGoogleUpdated"></a>

> Code samples

```bash
curl https://www.googleapis.com/v1/string:getGoogleUpdated \
  -H 'Accept: application/json'
```

`GET /v1/{name}:getGoogleUpdated`

Gets the Google-updated version of the specified location.

<h3 id="mybusinessbusinessinformationlocationsattributesgetgoogleupdated-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|name|path|string|true|Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.|
|readMask|query|string|false|Required. Read mask to specify what fields will be returned in the response.|
|$.xgafv|query|string|false|V1 error format.|
|access_token|query|string|false|OAuth access token.|
|alt|query|string|false|Data format for response.|
|callback|query|string|false|JSONP|
|fields|query|string|false|Selector specifying which fields to include in a partial response.|
|key|query|string|false|API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.|
|oauth_token|query|string|false|OAuth 2.0 token for the current user.|
|prettyPrint|query|boolean|false|Returns response with indentations and line breaks.|
|quotaUser|query|string|false|Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.|
|upload_protocol|query|string|false|Upload protocol for media (e.g. "raw", "multipart").|
|uploadType|query|string|false|Legacy upload protocol for media (e.g. "media", "multipart").|

#### Enumerated Values

|Parameter|Value|
|---|---|
|$.xgafv|1|
|$.xgafv|2|
|alt|json|
|alt|media|
|alt|proto|

> Example responses

> 200 Response

```json
{
  "attributes": [
    {
      "name": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "uriValues": [
        {
          "uri": "string"
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
      "values": [
        null
      ]
    }
  ],
  "name": "string"
}
```

<h3 id="mybusinessbusinessinformationlocationsattributesgetgoogleupdated-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Successful response|[Attributes](#schemaattributes)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AdWordsLocationExtensions">AdWordsLocationExtensions</h2>
<!-- backwards compatibility -->
<a id="schemaadwordslocationextensions"></a>
<a id="schema_AdWordsLocationExtensions"></a>
<a id="tocSadwordslocationextensions"></a>
<a id="tocsadwordslocationextensions"></a>

```json
{
  "adPhone": "string"
}
```

Additional information that is surfaced in AdWords.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adPhone|string|false|none|Required. An alternate phone number to display on AdWords location extensions instead of the location's primary phone number.|

<h2 id="tocS_AssociateLocationRequest">AssociateLocationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaassociatelocationrequest"></a>
<a id="schema_AssociateLocationRequest"></a>
<a id="tocSassociatelocationrequest"></a>
<a id="tocsassociatelocationrequest"></a>

```json
{
  "placeId": "string"
}
```

Request message for Locations.AssociateLocationRequest.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeId|string|false|none|The association to establish. If not set, it indicates no match.|

<h2 id="tocS_Attribute">Attribute</h2>
<!-- backwards compatibility -->
<a id="schemaattribute"></a>
<a id="schema_Attribute"></a>
<a id="tocSattribute"></a>
<a id="tocsattribute"></a>

```json
{
  "name": "string",
  "repeatedEnumValue": {
    "setValues": [
      "string"
    ],
    "unsetValues": [
      "string"
    ]
  },
  "uriValues": [
    {
      "uri": "string"
    }
  ],
  "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
  "values": [
    null
  ]
}
```

A location attribute. Attributes provide additional information about a location. The attributes that can be set on a location may vary based on the properties of that location (for example, category). Available attributes are determined by Google and may be added and removed without API changes.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|Required. The resource name for this attribute.|
|repeatedEnumValue|[RepeatedEnumAttributeValue](#schemarepeatedenumattributevalue)|false|none|When the attribute value type is REPEATED_ENUM, this contains the attribute value, and the other values fields must be empty.|
|uriValues|[[UriAttributeValue](#schemauriattributevalue)]|false|none|When the attribute value type is URL, this field contains the value(s) for this attribute, and the other values fields must be empty.|
|valueType|string|false|read-only|Output only. The type of value that this attribute contains. This should be used to determine how to interpret the value.|
|values|[object]|false|none|The values for this attribute. The type of the values supplied must match that expected for that attribute. This is a repeated field where multiple attribute values may be provided. Attribute types only support one value.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|ATTRIBUTE_VALUE_TYPE_UNSPECIFIED|
|valueType|BOOL|
|valueType|ENUM|
|valueType|URL|
|valueType|REPEATED_ENUM|

<h2 id="tocS_AttributeMetadata">AttributeMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaattributemetadata"></a>
<a id="schema_AttributeMetadata"></a>
<a id="tocSattributemetadata"></a>
<a id="tocsattributemetadata"></a>

```json
{
  "deprecated": true,
  "displayName": "string",
  "groupDisplayName": "string",
  "parent": "string",
  "repeatable": true,
  "valueMetadata": [
    {
      "displayName": "string",
      "value": null
    }
  ],
  "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
}
```

Metadata for an attribute. Contains display information for the attribute, including a localized name and a heading for grouping related attributes together.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|deprecated|boolean|false|none|If true, the attribute is deprecated and should no longer be used. If deprecated, updating this attribute will not result in an error, but updates will not be saved. At some point after being deprecated, the attribute will be removed entirely and it will become an error.|
|displayName|string|false|none|The localized display name for the attribute, if available; otherwise, the English display name.|
|groupDisplayName|string|false|none|The localized display name of the group that contains this attribute, if available; otherwise, the English group name. Related attributes are collected into a group and should be displayed together under the heading given here.|
|parent|string|false|none|The unique identifier for the attribute.|
|repeatable|boolean|false|none|If true, the attribute supports multiple values. If false, only a single value should be provided.|
|valueMetadata|[[AttributeValueMetadata](#schemaattributevaluemetadata)]|false|none|For some types of attributes (for example, enums), a list of supported values and corresponding display names for those values is provided.|
|valueType|string|false|none|The value type for the attribute. Values set and retrieved should be expected to be of this type.|

#### Enumerated Values

|Property|Value|
|---|---|
|valueType|ATTRIBUTE_VALUE_TYPE_UNSPECIFIED|
|valueType|BOOL|
|valueType|ENUM|
|valueType|URL|
|valueType|REPEATED_ENUM|

<h2 id="tocS_AttributeValueMetadata">AttributeValueMetadata</h2>
<!-- backwards compatibility -->
<a id="schemaattributevaluemetadata"></a>
<a id="schema_AttributeValueMetadata"></a>
<a id="tocSattributevaluemetadata"></a>
<a id="tocsattributevaluemetadata"></a>

```json
{
  "displayName": "string",
  "value": null
}
```

Metadata for supported attribute values.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name for this value, localized where available; otherwise, in English. The value display name is intended to be used in context with the attribute display name. For example, for a "WiFi" enum attribute, this could contain "Paid" to represent paid Wi-Fi.|
|value|object|false|none|The attribute value.|

<h2 id="tocS_Attributes">Attributes</h2>
<!-- backwards compatibility -->
<a id="schemaattributes"></a>
<a id="schema_Attributes"></a>
<a id="tocSattributes"></a>
<a id="tocsattributes"></a>

```json
{
  "attributes": [
    {
      "name": "string",
      "repeatedEnumValue": {
        "setValues": [
          "string"
        ],
        "unsetValues": [
          "string"
        ]
      },
      "uriValues": [
        {
          "uri": "string"
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED",
      "values": [
        null
      ]
    }
  ],
  "name": "string"
}
```

A container for all the attributes for a given location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributes|[[Attribute](#schemaattribute)]|false|none|A collection of attributes that need to be updated.|
|name|string|false|none|Required. Google identifier for this location in the form of `locations/{location_id}/attributes`.|

<h2 id="tocS_BatchGetCategoriesResponse">BatchGetCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemabatchgetcategoriesresponse"></a>
<a id="schema_BatchGetCategoriesResponse"></a>
<a id="tocSbatchgetcategoriesresponse"></a>
<a id="tocsbatchgetcategoriesresponse"></a>

```json
{
  "categories": [
    {
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "name": "string",
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ]
}
```

Response message for BusinessCategories.BatchGetBusinessCategories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[Category](#schemacategory)]|false|none|Categories that match the GConcept ids provided in the request. They will not come in the same order as category ids in the request.|

<h2 id="tocS_BusinessHours">BusinessHours</h2>
<!-- backwards compatibility -->
<a id="schemabusinesshours"></a>
<a id="schema_BusinessHours"></a>
<a id="tocSbusinesshours"></a>
<a id="tocsbusinesshours"></a>

```json
{
  "periods": [
    {
      "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
      "closeTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "openDay": "DAY_OF_WEEK_UNSPECIFIED",
      "openTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ]
}
```

Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|periods|[[TimePeriod](#schematimeperiod)]|false|none|Required. A collection of times that this location is open for business. Each period represents a range of hours when the location is open during the week.|

<h2 id="tocS_Categories">Categories</h2>
<!-- backwards compatibility -->
<a id="schemacategories"></a>
<a id="schema_Categories"></a>
<a id="tocScategories"></a>
<a id="tocscategories"></a>

```json
{
  "additionalCategories": [
    {
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "name": "string",
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ],
  "primaryCategory": {
    "displayName": "string",
    "moreHoursTypes": [
      {
        "displayName": "string",
        "hoursTypeId": "string",
        "localizedDisplayName": "string"
      }
    ],
    "name": "string",
    "serviceTypes": [
      {
        "displayName": "string",
        "serviceTypeId": "string"
      }
    ]
  }
}
```

A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalCategories|[[Category](#schemacategory)]|false|none|Optional. Additional categories to describe your business. Categories help your customers find accurate, specific results for services they're interested in. To keep your business information accurate and live, make sure that you use as few categories as possible to describe your overall core business. Choose categories that are as specific as possible, but representative of your main business.|
|primaryCategory|[Category](#schemacategory)|false|none|Required. Category that best describes the core business this location engages in.|

<h2 id="tocS_Category">Category</h2>
<!-- backwards compatibility -->
<a id="schemacategory"></a>
<a id="schema_Category"></a>
<a id="tocScategory"></a>
<a id="tocscategory"></a>

```json
{
  "displayName": "string",
  "moreHoursTypes": [
    {
      "displayName": "string",
      "hoursTypeId": "string",
      "localizedDisplayName": "string"
    }
  ],
  "name": "string",
  "serviceTypes": [
    {
      "displayName": "string",
      "serviceTypeId": "string"
    }
  ]
}
```

A category describing what this business is (not what it does). For a list of valid category IDs, and the mappings to their human-readable names, see `categories.list`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. The human-readable name of the category. This is set when reading the location. When modifying the location, `category_id` must be set.|
|moreHoursTypes|[[MoreHoursType](#schemamorehourstype)]|false|read-only|Output only. More hours types that are available for this business category.|
|name|string|false|none|Required. A stable ID (provided by Google) for this category. The value must be specified when modifying the category (when creating or updating a location).|
|serviceTypes|[[ServiceType](#schemaservicetype)]|false|read-only|Output only. A list of all the service types that are available for this business category.|

<h2 id="tocS_Chain">Chain</h2>
<!-- backwards compatibility -->
<a id="schemachain"></a>
<a id="schema_Chain"></a>
<a id="tocSchain"></a>
<a id="tocschain"></a>

```json
{
  "chainNames": [
    {
      "displayName": "string",
      "languageCode": "string"
    }
  ],
  "locationCount": 0,
  "name": "string",
  "websites": [
    {
      "uri": "string"
    }
  ]
}
```

A chain is a brand that your business's locations can be affiliated with.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chainNames|[[ChainName](#schemachainname)]|false|none|Names of the chain.|
|locationCount|integer(int32)|false|none|Number of locations that are part of this chain.|
|name|string|false|none|Required. The chain's resource name, in the format `chains/{chain_id}`.|
|websites|[[ChainUri](#schemachainuri)]|false|none|Websites of the chain.|

<h2 id="tocS_ChainName">ChainName</h2>
<!-- backwards compatibility -->
<a id="schemachainname"></a>
<a id="schema_ChainName"></a>
<a id="tocSchainname"></a>
<a id="tocschainname"></a>

```json
{
  "displayName": "string",
  "languageCode": "string"
}
```

Name to be used when displaying the chain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|none|The display name for this chain.|
|languageCode|string|false|none|The BCP 47 code of language of the name.|

<h2 id="tocS_ChainUri">ChainUri</h2>
<!-- backwards compatibility -->
<a id="schemachainuri"></a>
<a id="schema_ChainUri"></a>
<a id="tocSchainuri"></a>
<a id="tocschainuri"></a>

```json
{
  "uri": "string"
}
```

Url to be used when displaying the chain.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|The uri for this chain.|

<h2 id="tocS_ClearLocationAssociationRequest">ClearLocationAssociationRequest</h2>
<!-- backwards compatibility -->
<a id="schemaclearlocationassociationrequest"></a>
<a id="schema_ClearLocationAssociationRequest"></a>
<a id="tocSclearlocationassociationrequest"></a>
<a id="tocsclearlocationassociationrequest"></a>

```json
{}
```

Request message for Locations.ClearLocationAssociationRequest.

<h2 id="tocS_Date">Date</h2>
<!-- backwards compatibility -->
<a id="schemadate"></a>
<a id="schema_Date"></a>
<a id="tocSdate"></a>
<a id="tocsdate"></a>

```json
{
  "day": 0,
  "month": 0,
  "year": 0
}
```

Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|day|integer(int32)|false|none|Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.|
|month|integer(int32)|false|none|Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.|
|year|integer(int32)|false|none|Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.|

<h2 id="tocS_Empty">Empty</h2>
<!-- backwards compatibility -->
<a id="schemaempty"></a>
<a id="schema_Empty"></a>
<a id="tocSempty"></a>
<a id="tocsempty"></a>

```json
{}
```

A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }

<h2 id="tocS_FreeFormServiceItem">FreeFormServiceItem</h2>
<!-- backwards compatibility -->
<a id="schemafreeformserviceitem"></a>
<a id="schema_FreeFormServiceItem"></a>
<a id="tocSfreeformserviceitem"></a>
<a id="tocsfreeformserviceitem"></a>

```json
{
  "category": "string",
  "label": {
    "description": "string",
    "displayName": "string",
    "languageCode": "string"
  }
}
```

Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|category|string|false|none|Required. This field represents the category name (i.e. the category's stable ID). The `category` and `service_type_id` should match the possible combinations provided in the `Category` message.|
|label|[Label](#schemalabel)|false|none|Required. Language-tagged labels for the item. We recommend that item names be 140 characters or less, and descriptions 250 characters or less. This field should only be set if the input is a custom service item. Standardized service types should be updated via service_type_id.|

<h2 id="tocS_GoogleLocation">GoogleLocation</h2>
<!-- backwards compatibility -->
<a id="schemagooglelocation"></a>
<a id="schema_GoogleLocation"></a>
<a id="tocSgooglelocation"></a>
<a id="tocsgooglelocation"></a>

```json
{
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "categories": {
      "additionalCategories": [
        {
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "name": "string",
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      ],
      "primaryCategory": {
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "name": "string",
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    },
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "metadata": {
      "canDelete": true,
      "canHaveBusinessCalls": true,
      "canHaveFoodMenus": true,
      "canModifyServiceList": true,
      "canOperateHealthData": true,
      "canOperateLocalPost": true,
      "canOperateLodgingData": true,
      "duplicateLocation": "string",
      "hasGoogleUpdated": true,
      "hasPendingEdits": true,
      "hasVoiceOfMerchant": true,
      "mapsUri": "string",
      "newReviewUri": "string",
      "placeId": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "phoneNumbers": {
      "additionalPhones": [
        "string"
      ],
      "primaryPhone": "string"
    },
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    },
    "relationshipData": {
      "childrenLocations": [
        {
          "placeId": "string",
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      ],
      "parentChain": "string",
      "parentLocation": {
        "placeId": "string",
        "relationType": "RELATION_TYPE_UNSPECIFIED"
      }
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "placeId": "string",
            "placeName": "string"
          }
        ]
      },
      "regionCode": "string"
    },
    "serviceItems": [
      {
        "freeFormServiceItem": {
          "category": "string",
          "label": {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        },
        "price": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "structuredServiceItem": {
          "description": "string",
          "serviceTypeId": "string"
        }
      }
    ],
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "closed": true,
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "storefrontAddress": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "title": "string",
    "websiteUri": "string"
  },
  "name": "string",
  "requestAdminRightsUri": "string"
}
```

Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|false|none|The sparsely populated Location information. This field can be re-used in CreateLocation if it is not currently claimed by a user.|
|name|string|false|none|Resource name of this GoogleLocation, in the format `googleLocations/{googleLocationId}`.|
|requestAdminRightsUri|string|false|none|A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user.|

<h2 id="tocS_GoogleUpdatedLocation">GoogleUpdatedLocation</h2>
<!-- backwards compatibility -->
<a id="schemagoogleupdatedlocation"></a>
<a id="schema_GoogleUpdatedLocation"></a>
<a id="tocSgoogleupdatedlocation"></a>
<a id="tocsgoogleupdatedlocation"></a>

```json
{
  "diffMask": "string",
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "categories": {
      "additionalCategories": [
        {
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "name": "string",
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      ],
      "primaryCategory": {
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "name": "string",
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    },
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "metadata": {
      "canDelete": true,
      "canHaveBusinessCalls": true,
      "canHaveFoodMenus": true,
      "canModifyServiceList": true,
      "canOperateHealthData": true,
      "canOperateLocalPost": true,
      "canOperateLodgingData": true,
      "duplicateLocation": "string",
      "hasGoogleUpdated": true,
      "hasPendingEdits": true,
      "hasVoiceOfMerchant": true,
      "mapsUri": "string",
      "newReviewUri": "string",
      "placeId": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "phoneNumbers": {
      "additionalPhones": [
        "string"
      ],
      "primaryPhone": "string"
    },
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    },
    "relationshipData": {
      "childrenLocations": [
        {
          "placeId": "string",
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      ],
      "parentChain": "string",
      "parentLocation": {
        "placeId": "string",
        "relationType": "RELATION_TYPE_UNSPECIFIED"
      }
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "placeId": "string",
            "placeName": "string"
          }
        ]
      },
      "regionCode": "string"
    },
    "serviceItems": [
      {
        "freeFormServiceItem": {
          "category": "string",
          "label": {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        },
        "price": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "structuredServiceItem": {
          "description": "string",
          "serviceTypeId": "string"
        }
      }
    ],
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "closed": true,
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "storefrontAddress": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "title": "string",
    "websiteUri": "string"
  },
  "pendingMask": "string"
}
```

Represents a location that was modified by Google.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|diffMask|string(google-fieldmask)|false|none|The fields that Google updated.|
|location|[Location](#schemalocation)|false|none|The Google-updated version of this location.|
|pendingMask|string(google-fieldmask)|false|none|The fields that have pending edits that haven't yet been pushed to Maps and Search.|

<h2 id="tocS_Label">Label</h2>
<!-- backwards compatibility -->
<a id="schemalabel"></a>
<a id="schema_Label"></a>
<a id="tocSlabel"></a>
<a id="tocslabel"></a>

```json
{
  "description": "string",
  "displayName": "string",
  "languageCode": "string"
}
```

Label to be used when displaying the price list, section, or item.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of the price list, section, or item.|
|displayName|string|false|none|Required. Display name for the price list, section, or item.|
|languageCode|string|false|none|Optional. The BCP-47 language code that these strings apply for. Only one set of labels may be set per language.|

<h2 id="tocS_LatLng">LatLng</h2>
<!-- backwards compatibility -->
<a id="schemalatlng"></a>
<a id="schema_LatLng"></a>
<a id="tocSlatlng"></a>
<a id="tocslatlng"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number(double)|false|none|The latitude in degrees. It must be in the range [-90.0, +90.0].|
|longitude|number(double)|false|none|The longitude in degrees. It must be in the range [-180.0, +180.0].|

<h2 id="tocS_ListAttributeMetadataResponse">ListAttributeMetadataResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistattributemetadataresponse"></a>
<a id="schema_ListAttributeMetadataResponse"></a>
<a id="tocSlistattributemetadataresponse"></a>
<a id="tocslistattributemetadataresponse"></a>

```json
{
  "attributeMetadata": [
    {
      "deprecated": true,
      "displayName": "string",
      "groupDisplayName": "string",
      "parent": "string",
      "repeatable": true,
      "valueMetadata": [
        {
          "displayName": "string",
          "value": null
        }
      ],
      "valueType": "ATTRIBUTE_VALUE_TYPE_UNSPECIFIED"
    }
  ],
  "nextPageToken": "string"
}
```

Response for AttributesService.ListAttributeMetadata.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attributeMetadata|[[AttributeMetadata](#schemaattributemetadata)]|false|none|A collection of attribute metadata for the available attributes.|
|nextPageToken|string|false|none|If the number of attributes exceeded the requested page size, this field will be populated with a token to fetch the next page of attributes on a subsequent call to `attributes.list`. If there are no more attributes, this field will not be present in the response.|

<h2 id="tocS_ListCategoriesResponse">ListCategoriesResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistcategoriesresponse"></a>
<a id="schema_ListCategoriesResponse"></a>
<a id="tocSlistcategoriesresponse"></a>
<a id="tocslistcategoriesresponse"></a>

```json
{
  "categories": [
    {
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "name": "string",
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  ],
  "nextPageToken": "string"
}
```

Response message for BusinessCategories.ListCategories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|categories|[[Category](#schemacategory)]|false|none|The matching categories based on the requested parameters.|
|nextPageToken|string|false|none|If the number of categories exceeded the requested page size, this field will be populated with a token to fetch the next page of categories on a subsequent call to `ListCategories`.|

<h2 id="tocS_ListLocationsResponse">ListLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemalistlocationsresponse"></a>
<a id="schema_ListLocationsResponse"></a>
<a id="tocSlistlocationsresponse"></a>
<a id="tocslistlocationsresponse"></a>

```json
{
  "locations": [
    {
      "adWordsLocationExtensions": {
        "adPhone": "string"
      },
      "categories": {
        "additionalCategories": [
          {
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "name": "string",
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        ],
        "primaryCategory": {
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "name": "string",
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      },
      "labels": [
        "string"
      ],
      "languageCode": "string",
      "latlng": {
        "latitude": 0,
        "longitude": 0
      },
      "metadata": {
        "canDelete": true,
        "canHaveBusinessCalls": true,
        "canHaveFoodMenus": true,
        "canModifyServiceList": true,
        "canOperateHealthData": true,
        "canOperateLocalPost": true,
        "canOperateLodgingData": true,
        "duplicateLocation": "string",
        "hasGoogleUpdated": true,
        "hasPendingEdits": true,
        "hasVoiceOfMerchant": true,
        "mapsUri": "string",
        "newReviewUri": "string",
        "placeId": "string"
      },
      "moreHours": [
        {
          "hoursTypeId": "string",
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ]
        }
      ],
      "name": "string",
      "openInfo": {
        "canReopen": true,
        "openingDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
      },
      "phoneNumbers": {
        "additionalPhones": [
          "string"
        ],
        "primaryPhone": "string"
      },
      "profile": {
        "description": "string"
      },
      "regularHours": {
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      },
      "relationshipData": {
        "childrenLocations": [
          {
            "placeId": "string",
            "relationType": "RELATION_TYPE_UNSPECIFIED"
          }
        ],
        "parentChain": "string",
        "parentLocation": {
          "placeId": "string",
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      },
      "serviceArea": {
        "businessType": "BUSINESS_TYPE_UNSPECIFIED",
        "places": {
          "placeInfos": [
            {
              "placeId": "string",
              "placeName": "string"
            }
          ]
        },
        "regionCode": "string"
      },
      "serviceItems": [
        {
          "freeFormServiceItem": {
            "category": "string",
            "label": {
              "description": "string",
              "displayName": "string",
              "languageCode": "string"
            }
          },
          "price": {
            "currencyCode": "string",
            "nanos": 0,
            "units": "string"
          },
          "structuredServiceItem": {
            "description": "string",
            "serviceTypeId": "string"
          }
        }
      ],
      "specialHours": {
        "specialHourPeriods": [
          {
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "closed": true,
            "endDate": {
              "day": 0,
              "month": 0,
              "year": 0
            },
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "startDate": {
              "day": 0,
              "month": 0,
              "year": 0
            }
          }
        ]
      },
      "storeCode": "string",
      "storefrontAddress": {
        "addressLines": [
          "string"
        ],
        "administrativeArea": "string",
        "languageCode": "string",
        "locality": "string",
        "organization": "string",
        "postalCode": "string",
        "recipients": [
          "string"
        ],
        "regionCode": "string",
        "revision": 0,
        "sortingCode": "string",
        "sublocality": "string"
      },
      "title": "string",
      "websiteUri": "string"
    }
  ],
  "nextPageToken": "string",
  "totalSize": 0
}
```

Response message for Locations.ListLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|locations|[[Location](#schemalocation)]|false|none|The locations.|
|nextPageToken|string|false|none|If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response.|
|totalSize|integer(int32)|false|none|The approximate number of Locations in the list irrespective of pagination.|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "adWordsLocationExtensions": {
    "adPhone": "string"
  },
  "categories": {
    "additionalCategories": [
      {
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "name": "string",
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    ],
    "primaryCategory": {
      "displayName": "string",
      "moreHoursTypes": [
        {
          "displayName": "string",
          "hoursTypeId": "string",
          "localizedDisplayName": "string"
        }
      ],
      "name": "string",
      "serviceTypes": [
        {
          "displayName": "string",
          "serviceTypeId": "string"
        }
      ]
    }
  },
  "labels": [
    "string"
  ],
  "languageCode": "string",
  "latlng": {
    "latitude": 0,
    "longitude": 0
  },
  "metadata": {
    "canDelete": true,
    "canHaveBusinessCalls": true,
    "canHaveFoodMenus": true,
    "canModifyServiceList": true,
    "canOperateHealthData": true,
    "canOperateLocalPost": true,
    "canOperateLodgingData": true,
    "duplicateLocation": "string",
    "hasGoogleUpdated": true,
    "hasPendingEdits": true,
    "hasVoiceOfMerchant": true,
    "mapsUri": "string",
    "newReviewUri": "string",
    "placeId": "string"
  },
  "moreHours": [
    {
      "hoursTypeId": "string",
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    }
  ],
  "name": "string",
  "openInfo": {
    "canReopen": true,
    "openingDate": {
      "day": 0,
      "month": 0,
      "year": 0
    },
    "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
  },
  "phoneNumbers": {
    "additionalPhones": [
      "string"
    ],
    "primaryPhone": "string"
  },
  "profile": {
    "description": "string"
  },
  "regularHours": {
    "periods": [
      {
        "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
        "closeTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "openDay": "DAY_OF_WEEK_UNSPECIFIED",
        "openTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        }
      }
    ]
  },
  "relationshipData": {
    "childrenLocations": [
      {
        "placeId": "string",
        "relationType": "RELATION_TYPE_UNSPECIFIED"
      }
    ],
    "parentChain": "string",
    "parentLocation": {
      "placeId": "string",
      "relationType": "RELATION_TYPE_UNSPECIFIED"
    }
  },
  "serviceArea": {
    "businessType": "BUSINESS_TYPE_UNSPECIFIED",
    "places": {
      "placeInfos": [
        {
          "placeId": "string",
          "placeName": "string"
        }
      ]
    },
    "regionCode": "string"
  },
  "serviceItems": [
    {
      "freeFormServiceItem": {
        "category": "string",
        "label": {
          "description": "string",
          "displayName": "string",
          "languageCode": "string"
        }
      },
      "price": {
        "currencyCode": "string",
        "nanos": 0,
        "units": "string"
      },
      "structuredServiceItem": {
        "description": "string",
        "serviceTypeId": "string"
      }
    }
  ],
  "specialHours": {
    "specialHourPeriods": [
      {
        "closeTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "closed": true,
        "endDate": {
          "day": 0,
          "month": 0,
          "year": 0
        },
        "openTime": {
          "hours": 0,
          "minutes": 0,
          "nanos": 0,
          "seconds": 0
        },
        "startDate": {
          "day": 0,
          "month": 0,
          "year": 0
        }
      }
    ]
  },
  "storeCode": "string",
  "storefrontAddress": {
    "addressLines": [
      "string"
    ],
    "administrativeArea": "string",
    "languageCode": "string",
    "locality": "string",
    "organization": "string",
    "postalCode": "string",
    "recipients": [
      "string"
    ],
    "regionCode": "string",
    "revision": 0,
    "sortingCode": "string",
    "sublocality": "string"
  },
  "title": "string",
  "websiteUri": "string"
}
```

A location. See the [help center article] (https://support.google.com/business/answer/3038177) for a detailed description of these fields, or the [category endpoint](/my-business/reference/rest/v4/categories) for a list of valid business categories.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adWordsLocationExtensions|[AdWordsLocationExtensions](#schemaadwordslocationextensions)|false|none|Optional. Additional information that is surfaced in AdWords.|
|categories|[Categories](#schemacategories)|false|none|Optional. The different categories that describe the business.|
|labels|[string]|false|none|Optional. A collection of free-form strings to allow you to tag your business. These labels are NOT user facing; only you can see them. Must be between 1-255 characters per label.|
|languageCode|string|false|none|Immutable. The language of the location. Set during creation and not updateable.|
|latlng|[LatLng](#schemalatlng)|false|none|Optional. User-provided latitude and longitude. When creating a location, this field is ignored if the provided address geocodes successfully. This field is only returned on get requests if the user-provided `latlng` value was accepted during create, or the `latlng` value was updated through the Google Business Profile website. This field can only be updated by approved clients.|
|metadata|[Metadata](#schemametadata)|false|none|Output only. Additional non-user-editable information.|
|moreHours|[[MoreHours](#schemamorehours)]|false|none|Optional. More hours for a business's different departments or specific customers.|
|name|string|false|none|Google identifier for this location in the form: `locations/{location_id}`.|
|openInfo|[OpenInfo](#schemaopeninfo)|false|none|Optional. A flag that indicates whether the location is currently open for business.|
|phoneNumbers|[PhoneNumbers](#schemaphonenumbers)|false|none|Optional. The different phone numbers that customers can use to get in touch with the business.|
|profile|[Profile](#schemaprofile)|false|none|Optional. Describes your business in your own voice and shares with users the unique story of your business and offerings. This field is required for all categories except lodging categories (e.g. hotels, motels, inns).|
|regularHours|[BusinessHours](#schemabusinesshours)|false|none|Optional. Operating hours for the business.|
|relationshipData|[RelationshipData](#schemarelationshipdata)|false|none|Optional. All locations and chain related to this one.|
|serviceArea|[ServiceAreaBusiness](#schemaserviceareabusiness)|false|none|Optional. Service area businesses provide their service at the customer's location. If this business is a service area business, this field describes the area(s) serviced by the business.|
|serviceItems|[[ServiceItem](#schemaserviceitem)]|false|none|Optional. List of services supported by merchants. A service can be haircut, install water heater, etc. Duplicated service items will be removed automatically.|
|specialHours|[SpecialHours](#schemaspecialhours)|false|none|Optional. Special hours for the business. This typically includes holiday hours, and other times outside of regular operating hours. These override regular business hours. This field cannot be set without regular hours.|
|storeCode|string|false|none|Optional. External identifier for this location, which must be unique within a given account. This is a means of associating the location with your own records.|
|storefrontAddress|[PostalAddress](#schemapostaladdress)|false|none|Optional. A precise, accurate address to describe your business location. PO boxes or mailboxes located at remote locations are not acceptable. At this time, you can specify a maximum of five `address_lines` values in the address. This field should only be set for businesses that have a storefront. This field should not be set for locations of type `CUSTOMER_LOCATION_ONLY`.|
|title|string|false|none|Required. Location name should reflect your business's real-world name, as used consistently on your storefront, website, and stationery, and as known to customers. Any additional information, when relevant, can be included in other fields of the resource (for example, `Address`, `Categories`). Don't add unnecessary information to your name (for example, prefer "Google" over "Google Inc. - Mountain View Corporate Headquarters"). Don't include marketing taglines, store codes, special characters, hours or closed/open status, phone numbers, website URLs, service/product information, location/address or directions, or containment information (for example, "Chase ATM in Duane Reade").|
|websiteUri|string|false|none|Optional. A URL for this business. If possible, use a URL that represents this individual business location instead of a generic website/URL that represents all locations, or the brand.|

<h2 id="tocS_Metadata">Metadata</h2>
<!-- backwards compatibility -->
<a id="schemametadata"></a>
<a id="schema_Metadata"></a>
<a id="tocSmetadata"></a>
<a id="tocsmetadata"></a>

```json
{
  "canDelete": true,
  "canHaveBusinessCalls": true,
  "canHaveFoodMenus": true,
  "canModifyServiceList": true,
  "canOperateHealthData": true,
  "canOperateLocalPost": true,
  "canOperateLodgingData": true,
  "duplicateLocation": "string",
  "hasGoogleUpdated": true,
  "hasPendingEdits": true,
  "hasVoiceOfMerchant": true,
  "mapsUri": "string",
  "newReviewUri": "string",
  "placeId": "string"
}
```

Additional non-user-editable information about the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canDelete|boolean|false|read-only|Output only. Indicates whether the location can be deleted using the API.|
|canHaveBusinessCalls|boolean|false|read-only|Output only. Indicates if the listing is eligible for business calls.|
|canHaveFoodMenus|boolean|false|read-only|Output only. Indicates if the listing is eligible for food menu.|
|canModifyServiceList|boolean|false|read-only|Output only. Indicates if the listing can modify the service list.|
|canOperateHealthData|boolean|false|read-only|Output only. Indicates whether the location can operate on Health data.|
|canOperateLocalPost|boolean|false|read-only|Output only. Indicates if the listing can manage local posts.|
|canOperateLodgingData|boolean|false|read-only|Output only. Indicates whether the location can operate on Lodging data.|
|duplicateLocation|string|false|read-only|Output only. The location resource that this location duplicates.|
|hasGoogleUpdated|boolean|false|read-only|Output only. Indicates whether the place ID associated with this location has updates that need to be updated or rejected by the client. If this boolean is set, you should call the `getGoogleUpdated` method to lookup information that's needs to be verified.|
|hasPendingEdits|boolean|false|read-only|Output only. Indicates whether any of this Location's properties are in the edit pending state.|
|hasVoiceOfMerchant|boolean|false|read-only|Output only. Indicates if the listing has Voice of Merchant. If this boolean is false, you should call the locations.getVoiceOfMerchantState API to get details as to why they do not have Voice of Merchant.|
|mapsUri|string|false|read-only|Output only. A link to the location on Maps.|
|newReviewUri|string|false|read-only|Output only. A link to the page on Google Search where a customer can leave a review for the location.|
|placeId|string|false|read-only|Output only. If this locationappears on Google Maps, this field is populated with the place ID for the location. This ID can be used in various Places APIs. This field can be set during Create calls, but not for Update.|

<h2 id="tocS_Money">Money</h2>
<!-- backwards compatibility -->
<a id="schemamoney"></a>
<a id="schema_Money"></a>
<a id="tocSmoney"></a>
<a id="tocsmoney"></a>

```json
{
  "currencyCode": "string",
  "nanos": 0,
  "units": "string"
}
```

Represents an amount of money with its currency type.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currencyCode|string|false|none|The three-letter currency code defined in ISO 4217.|
|nanos|integer(int32)|false|none|Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.|
|units|string(int64)|false|none|The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar.|

<h2 id="tocS_MoreHours">MoreHours</h2>
<!-- backwards compatibility -->
<a id="schemamorehours"></a>
<a id="schema_MoreHours"></a>
<a id="tocSmorehours"></a>
<a id="tocsmorehours"></a>

```json
{
  "hoursTypeId": "string",
  "periods": [
    {
      "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
      "closeTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "openDay": "DAY_OF_WEEK_UNSPECIFIED",
      "openTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      }
    }
  ]
}
```

The time periods during which a location is open for certain types of business.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hoursTypeId|string|false|none|Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations.|
|periods|[[TimePeriod](#schematimeperiod)]|false|none|Required. A collection of times that this location is open. Each period represents a range of hours when the location is open during the week.|

<h2 id="tocS_MoreHoursType">MoreHoursType</h2>
<!-- backwards compatibility -->
<a id="schemamorehourstype"></a>
<a id="schema_MoreHoursType"></a>
<a id="tocSmorehourstype"></a>
<a id="tocsmorehourstype"></a>

```json
{
  "displayName": "string",
  "hoursTypeId": "string",
  "localizedDisplayName": "string"
}
```

More hours types that a business can offers, in addition to its regular hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. The human-readable English display name for the hours type.|
|hoursTypeId|string|false|read-only|Output only. A stable ID provided by Google for this hours type.|
|localizedDisplayName|string|false|read-only|Output only. The human-readable localized display name for the hours type.|

<h2 id="tocS_OpenInfo">OpenInfo</h2>
<!-- backwards compatibility -->
<a id="schemaopeninfo"></a>
<a id="schema_OpenInfo"></a>
<a id="tocSopeninfo"></a>
<a id="tocsopeninfo"></a>

```json
{
  "canReopen": true,
  "openingDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
}
```

Information related to the opening state of the business.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|canReopen|boolean|false|read-only|Output only. Indicates whether this business is eligible for re-open.|
|openingDate|[Date](#schemadate)|false|none|Optional. The date on which the location first opened. If the exact day is not known, month and year only can be provided. The date must be in the past or be no more than one year in the future.|
|status|string|false|none|Required. Indicates whether or not the Location is currently open for business. All locations are open by default, unless updated to be closed.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|OPEN_FOR_BUSINESS_UNSPECIFIED|
|status|OPEN|
|status|CLOSED_PERMANENTLY|
|status|CLOSED_TEMPORARILY|

<h2 id="tocS_PhoneNumbers">PhoneNumbers</h2>
<!-- backwards compatibility -->
<a id="schemaphonenumbers"></a>
<a id="schema_PhoneNumbers"></a>
<a id="tocSphonenumbers"></a>
<a id="tocsphonenumbers"></a>

```json
{
  "additionalPhones": [
    "string"
  ],
  "primaryPhone": "string"
}
```

A collection of phone numbers for the business. During updates, both fields must be set. Clients may not update just the primary or additional phone numbers using the update mask. International phone format is preferred, such as "+1 415 555 0132", see more in (https://developers.google.com/style/phone-numbers#international-phone-numbers).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|additionalPhones|[string]|false|none|Optional. Up to two phone numbers (mobile or landline, no fax) at which your business can be called, in addition to your primary phone number.|
|primaryPhone|string|false|none|Required. A phone number that connects to your individual business location as directly as possible. Use a local phone number instead of a central, call center helpline number whenever possible.|

<h2 id="tocS_PlaceInfo">PlaceInfo</h2>
<!-- backwards compatibility -->
<a id="schemaplaceinfo"></a>
<a id="schema_PlaceInfo"></a>
<a id="tocSplaceinfo"></a>
<a id="tocsplaceinfo"></a>

```json
{
  "placeId": "string",
  "placeName": "string"
}
```

Defines an area that's represented by a place ID.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeId|string|false|none|Required. The ID of the place. Must correspond to a region. (https://developers.google.com/places/web-service/supported_types#table3)|
|placeName|string|false|none|Required. The localized name of the place. For example, `Scottsdale, AZ`.|

<h2 id="tocS_Places">Places</h2>
<!-- backwards compatibility -->
<a id="schemaplaces"></a>
<a id="schema_Places"></a>
<a id="tocSplaces"></a>
<a id="tocsplaces"></a>

```json
{
  "placeInfos": [
    {
      "placeId": "string",
      "placeName": "string"
    }
  ]
}
```

Defines the union of areas represented by a set of places.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeInfos|[[PlaceInfo](#schemaplaceinfo)]|false|none|The areas represented by place IDs. Limited to a maximum of 20 places.|

<h2 id="tocS_PostalAddress">PostalAddress</h2>
<!-- backwards compatibility -->
<a id="schemapostaladdress"></a>
<a id="schema_PostalAddress"></a>
<a id="tocSpostaladdress"></a>
<a id="tocspostaladdress"></a>

```json
{
  "addressLines": [
    "string"
  ],
  "administrativeArea": "string",
  "languageCode": "string",
  "locality": "string",
  "organization": "string",
  "postalCode": "string",
  "recipients": [
    "string"
  ],
  "regionCode": "string",
  "revision": 0,
  "sortingCode": "string",
  "sublocality": "string"
}
```

Represents a postal address, e.g. for postal delivery or payments addresses. Given a postal address, a postal service can deliver items to a premise, P.O. Box or similar. It is not intended to model geographical locations (roads, towns, mountains). In typical usage an address would be created via user input or from importing existing data, depending on the type of process. Advice on address input / editing: - Use an internationalization-ready address widget such as https://github.com/google/libaddressinput) - Users should not be presented with UI elements for input or editing of fields outside countries where that field is used. For more guidance on how to use this schema, please see: https://support.google.com/business/answer/6397478

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|addressLines|[string]|false|none|Unstructured address lines describing the lower levels of an address. Because values in address_lines do not have type information and may sometimes contain multiple values in a single field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be "envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way, the most specific line of an address can be selected based on the language. The minimum permitted structural representation of an address consists of a region_code with all remaining information placed in the address_lines. It would be possible to format such an address very approximately without geocoding, but no semantic reasoning could be made about any of the address components until it was at least partially resolved. Creating an address only containing a region_code and address_lines, and then geocoding is the recommended way to handle completely unstructured addresses (as opposed to guessing which parts of the address should be localities or administrative areas).|
|administrativeArea|string|false|none|Optional. Highest administrative subdivision which is used for postal addresses of a country or region. For example, this can be a state, a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community (e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland this should be left unpopulated.|
|languageCode|string|false|none|Optional. BCP-47 language code of the contents of this address (if known). This is often the UI language of the input form or is expected to match one of the languages used in the address' country/region, or their transliterated equivalents. This can affect formatting in certain countries, but is not critical to the correctness of the data and will never affect any validation or other non-formatting related operations. If this value is not known, it should be omitted (rather than specifying a possibly incorrect default). Examples: "zh-Hant", "ja", "ja-Latn", "en".|
|locality|string|false|none|Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use address_lines.|
|organization|string|false|none|Optional. The name of the organization at the address.|
|postalCode|string|false|none|Optional. Postal code of the address. Not all countries use or require postal codes to be present, but where they are used, they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).|
|recipients|[string]|false|none|Optional. The recipient at the address. This field may, under certain circumstances, contain multiline information. For example, it might contain "care of" information.|
|regionCode|string|false|none|Required. CLDR region code of the country/region of the address. This is never inferred and it is up to the user to ensure the value is correct. See https://cldr.unicode.org/ and https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.|
|revision|integer(int32)|false|none|The schema revision of the `PostalAddress`. This must be set to 0, which is the latest revision. All new revisions **must** be backward compatible with old revisions.|
|sortingCode|string|false|none|Optional. Additional, country-specific, sorting code. This is not used in most regions. Where it is used, the value is either a string like "CEDEX", optionally followed by a number (e.g. "CEDEX 7"), or just a number alone, representing the "sector code" (Jamaica), "delivery area indicator" (Malawi) or "post office indicator" (e.g. Côte d'Ivoire).|
|sublocality|string|false|none|Optional. Sublocality of the address. For example, this can be neighborhoods, boroughs, districts.|

<h2 id="tocS_Profile">Profile</h2>
<!-- backwards compatibility -->
<a id="schemaprofile"></a>
<a id="schema_Profile"></a>
<a id="tocSprofile"></a>
<a id="tocsprofile"></a>

```json
{
  "description": "string"
}
```

All information pertaining to the location's profile.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Required. Description of the location in your own voice, not editable by anyone else.|

<h2 id="tocS_RelationshipData">RelationshipData</h2>
<!-- backwards compatibility -->
<a id="schemarelationshipdata"></a>
<a id="schema_RelationshipData"></a>
<a id="tocSrelationshipdata"></a>
<a id="tocsrelationshipdata"></a>

```json
{
  "childrenLocations": [
    {
      "placeId": "string",
      "relationType": "RELATION_TYPE_UNSPECIFIED"
    }
  ],
  "parentChain": "string",
  "parentLocation": {
    "placeId": "string",
    "relationType": "RELATION_TYPE_UNSPECIFIED"
  }
}
```

Information of all parent and children locations related to this one.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childrenLocations|[[RelevantLocation](#schemarelevantlocation)]|false|none|The list of children locations that this location has relations with.|
|parentChain|string|false|none|The resource name of the Chain that this location is member of. How to find Chain ID|
|parentLocation|[RelevantLocation](#schemarelevantlocation)|false|none|The parent location that this location has relations with.|

<h2 id="tocS_RelevantLocation">RelevantLocation</h2>
<!-- backwards compatibility -->
<a id="schemarelevantlocation"></a>
<a id="schema_RelevantLocation"></a>
<a id="tocSrelevantlocation"></a>
<a id="tocsrelevantlocation"></a>

```json
{
  "placeId": "string",
  "relationType": "RELATION_TYPE_UNSPECIFIED"
}
```

Information about another location that is related to current one. The relation can be any one of DEPARTMENT_OF or INDEPENDENT_ESTABLISHMENT_OF, and the location specified here can be on either side (parent/child) of the location.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|placeId|string|false|none|Required. Specify the location that is on the other side of the relation by its placeID.|
|relationType|string|false|none|Required. The type of the relationship.|

#### Enumerated Values

|Property|Value|
|---|---|
|relationType|RELATION_TYPE_UNSPECIFIED|
|relationType|DEPARTMENT_OF|
|relationType|INDEPENDENT_ESTABLISHMENT_IN|

<h2 id="tocS_RepeatedEnumAttributeValue">RepeatedEnumAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemarepeatedenumattributevalue"></a>
<a id="schema_RepeatedEnumAttributeValue"></a>
<a id="tocSrepeatedenumattributevalue"></a>
<a id="tocsrepeatedenumattributevalue"></a>

```json
{
  "setValues": [
    "string"
  ],
  "unsetValues": [
    "string"
  ]
}
```

Values for an attribute with a `value_type` of REPEATED_ENUM. This consists of two lists of value IDs: those that are set (true) and those that are unset (false). Values absent are considered unknown. At least one value must be specified.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|setValues|[string]|false|none|Enum values that are set.|
|unsetValues|[string]|false|none|Enum values that are unset.|

<h2 id="tocS_SearchChainsResponse">SearchChainsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchchainsresponse"></a>
<a id="schema_SearchChainsResponse"></a>
<a id="tocSsearchchainsresponse"></a>
<a id="tocssearchchainsresponse"></a>

```json
{
  "chains": [
    {
      "chainNames": [
        {
          "displayName": "string",
          "languageCode": "string"
        }
      ],
      "locationCount": 0,
      "name": "string",
      "websites": [
        {
          "uri": "string"
        }
      ]
    }
  ]
}
```

Response message for Locations.SearchChains.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chains|[[Chain](#schemachain)]|false|none|Chains that match the queried chain_display_name in SearchChainsRequest. If there are no matches, this field will be empty. Results are listed in order of relevance.|

<h2 id="tocS_SearchGoogleLocationsRequest">SearchGoogleLocationsRequest</h2>
<!-- backwards compatibility -->
<a id="schemasearchgooglelocationsrequest"></a>
<a id="schema_SearchGoogleLocationsRequest"></a>
<a id="tocSsearchgooglelocationsrequest"></a>
<a id="tocssearchgooglelocationsrequest"></a>

```json
{
  "location": {
    "adWordsLocationExtensions": {
      "adPhone": "string"
    },
    "categories": {
      "additionalCategories": [
        {
          "displayName": "string",
          "moreHoursTypes": [
            {
              "displayName": "string",
              "hoursTypeId": "string",
              "localizedDisplayName": "string"
            }
          ],
          "name": "string",
          "serviceTypes": [
            {
              "displayName": "string",
              "serviceTypeId": "string"
            }
          ]
        }
      ],
      "primaryCategory": {
        "displayName": "string",
        "moreHoursTypes": [
          {
            "displayName": "string",
            "hoursTypeId": "string",
            "localizedDisplayName": "string"
          }
        ],
        "name": "string",
        "serviceTypes": [
          {
            "displayName": "string",
            "serviceTypeId": "string"
          }
        ]
      }
    },
    "labels": [
      "string"
    ],
    "languageCode": "string",
    "latlng": {
      "latitude": 0,
      "longitude": 0
    },
    "metadata": {
      "canDelete": true,
      "canHaveBusinessCalls": true,
      "canHaveFoodMenus": true,
      "canModifyServiceList": true,
      "canOperateHealthData": true,
      "canOperateLocalPost": true,
      "canOperateLodgingData": true,
      "duplicateLocation": "string",
      "hasGoogleUpdated": true,
      "hasPendingEdits": true,
      "hasVoiceOfMerchant": true,
      "mapsUri": "string",
      "newReviewUri": "string",
      "placeId": "string"
    },
    "moreHours": [
      {
        "hoursTypeId": "string",
        "periods": [
          {
            "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
            "closeTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            },
            "openDay": "DAY_OF_WEEK_UNSPECIFIED",
            "openTime": {
              "hours": 0,
              "minutes": 0,
              "nanos": 0,
              "seconds": 0
            }
          }
        ]
      }
    ],
    "name": "string",
    "openInfo": {
      "canReopen": true,
      "openingDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
    },
    "phoneNumbers": {
      "additionalPhones": [
        "string"
      ],
      "primaryPhone": "string"
    },
    "profile": {
      "description": "string"
    },
    "regularHours": {
      "periods": [
        {
          "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "openDay": "DAY_OF_WEEK_UNSPECIFIED",
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          }
        }
      ]
    },
    "relationshipData": {
      "childrenLocations": [
        {
          "placeId": "string",
          "relationType": "RELATION_TYPE_UNSPECIFIED"
        }
      ],
      "parentChain": "string",
      "parentLocation": {
        "placeId": "string",
        "relationType": "RELATION_TYPE_UNSPECIFIED"
      }
    },
    "serviceArea": {
      "businessType": "BUSINESS_TYPE_UNSPECIFIED",
      "places": {
        "placeInfos": [
          {
            "placeId": "string",
            "placeName": "string"
          }
        ]
      },
      "regionCode": "string"
    },
    "serviceItems": [
      {
        "freeFormServiceItem": {
          "category": "string",
          "label": {
            "description": "string",
            "displayName": "string",
            "languageCode": "string"
          }
        },
        "price": {
          "currencyCode": "string",
          "nanos": 0,
          "units": "string"
        },
        "structuredServiceItem": {
          "description": "string",
          "serviceTypeId": "string"
        }
      }
    ],
    "specialHours": {
      "specialHourPeriods": [
        {
          "closeTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "closed": true,
          "endDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "openTime": {
            "hours": 0,
            "minutes": 0,
            "nanos": 0,
            "seconds": 0
          },
          "startDate": {
            "day": 0,
            "month": 0,
            "year": 0
          }
        }
      ]
    },
    "storeCode": "string",
    "storefrontAddress": {
      "addressLines": [
        "string"
      ],
      "administrativeArea": "string",
      "languageCode": "string",
      "locality": "string",
      "organization": "string",
      "postalCode": "string",
      "recipients": [
        "string"
      ],
      "regionCode": "string",
      "revision": 0,
      "sortingCode": "string",
      "sublocality": "string"
    },
    "title": "string",
    "websiteUri": "string"
  },
  "pageSize": 0,
  "query": "string"
}
```

Request message for GoogleLocations.SearchGoogleLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|false|none|Location to search for. If provided, will find locations which match the provided location details.|
|pageSize|integer(int32)|false|none|The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.|
|query|string|false|none|Text query to search for. The search results from a query string will be less accurate than if providing an exact location, but can provide more inexact matches.|

<h2 id="tocS_SearchGoogleLocationsResponse">SearchGoogleLocationsResponse</h2>
<!-- backwards compatibility -->
<a id="schemasearchgooglelocationsresponse"></a>
<a id="schema_SearchGoogleLocationsResponse"></a>
<a id="tocSsearchgooglelocationsresponse"></a>
<a id="tocssearchgooglelocationsresponse"></a>

```json
{
  "googleLocations": [
    {
      "location": {
        "adWordsLocationExtensions": {
          "adPhone": "string"
        },
        "categories": {
          "additionalCategories": [
            {
              "displayName": "string",
              "moreHoursTypes": [
                {
                  "displayName": "string",
                  "hoursTypeId": "string",
                  "localizedDisplayName": "string"
                }
              ],
              "name": "string",
              "serviceTypes": [
                {
                  "displayName": "string",
                  "serviceTypeId": "string"
                }
              ]
            }
          ],
          "primaryCategory": {
            "displayName": "string",
            "moreHoursTypes": [
              {
                "displayName": "string",
                "hoursTypeId": "string",
                "localizedDisplayName": "string"
              }
            ],
            "name": "string",
            "serviceTypes": [
              {
                "displayName": "string",
                "serviceTypeId": "string"
              }
            ]
          }
        },
        "labels": [
          "string"
        ],
        "languageCode": "string",
        "latlng": {
          "latitude": 0,
          "longitude": 0
        },
        "metadata": {
          "canDelete": true,
          "canHaveBusinessCalls": true,
          "canHaveFoodMenus": true,
          "canModifyServiceList": true,
          "canOperateHealthData": true,
          "canOperateLocalPost": true,
          "canOperateLodgingData": true,
          "duplicateLocation": "string",
          "hasGoogleUpdated": true,
          "hasPendingEdits": true,
          "hasVoiceOfMerchant": true,
          "mapsUri": "string",
          "newReviewUri": "string",
          "placeId": "string"
        },
        "moreHours": [
          {
            "hoursTypeId": "string",
            "periods": [
              {
                "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
                "closeTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                },
                "openDay": "DAY_OF_WEEK_UNSPECIFIED",
                "openTime": {
                  "hours": 0,
                  "minutes": 0,
                  "nanos": 0,
                  "seconds": 0
                }
              }
            ]
          }
        ],
        "name": "string",
        "openInfo": {
          "canReopen": true,
          "openingDate": {
            "day": 0,
            "month": 0,
            "year": 0
          },
          "status": "OPEN_FOR_BUSINESS_UNSPECIFIED"
        },
        "phoneNumbers": {
          "additionalPhones": [
            "string"
          ],
          "primaryPhone": "string"
        },
        "profile": {
          "description": "string"
        },
        "regularHours": {
          "periods": [
            {
              "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
              "closeTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "openDay": "DAY_OF_WEEK_UNSPECIFIED",
              "openTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              }
            }
          ]
        },
        "relationshipData": {
          "childrenLocations": [
            {
              "placeId": "string",
              "relationType": "RELATION_TYPE_UNSPECIFIED"
            }
          ],
          "parentChain": "string",
          "parentLocation": {
            "placeId": "string",
            "relationType": "RELATION_TYPE_UNSPECIFIED"
          }
        },
        "serviceArea": {
          "businessType": "BUSINESS_TYPE_UNSPECIFIED",
          "places": {
            "placeInfos": [
              {
                "placeId": "string",
                "placeName": "string"
              }
            ]
          },
          "regionCode": "string"
        },
        "serviceItems": [
          {
            "freeFormServiceItem": {
              "category": "string",
              "label": {
                "description": "string",
                "displayName": "string",
                "languageCode": "string"
              }
            },
            "price": {
              "currencyCode": "string",
              "nanos": 0,
              "units": "string"
            },
            "structuredServiceItem": {
              "description": "string",
              "serviceTypeId": "string"
            }
          }
        ],
        "specialHours": {
          "specialHourPeriods": [
            {
              "closeTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "closed": true,
              "endDate": {
                "day": 0,
                "month": 0,
                "year": 0
              },
              "openTime": {
                "hours": 0,
                "minutes": 0,
                "nanos": 0,
                "seconds": 0
              },
              "startDate": {
                "day": 0,
                "month": 0,
                "year": 0
              }
            }
          ]
        },
        "storeCode": "string",
        "storefrontAddress": {
          "addressLines": [
            "string"
          ],
          "administrativeArea": "string",
          "languageCode": "string",
          "locality": "string",
          "organization": "string",
          "postalCode": "string",
          "recipients": [
            "string"
          ],
          "regionCode": "string",
          "revision": 0,
          "sortingCode": "string",
          "sublocality": "string"
        },
        "title": "string",
        "websiteUri": "string"
      },
      "name": "string",
      "requestAdminRightsUri": "string"
    }
  ]
}
```

Response message for GoogleLocations.SearchGoogleLocations.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|googleLocations|[[GoogleLocation](#schemagooglelocation)]|false|none|A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy.|

<h2 id="tocS_ServiceAreaBusiness">ServiceAreaBusiness</h2>
<!-- backwards compatibility -->
<a id="schemaserviceareabusiness"></a>
<a id="schema_ServiceAreaBusiness"></a>
<a id="tocSserviceareabusiness"></a>
<a id="tocsserviceareabusiness"></a>

```json
{
  "businessType": "BUSINESS_TYPE_UNSPECIFIED",
  "places": {
    "placeInfos": [
      {
        "placeId": "string",
        "placeName": "string"
      }
    ]
  },
  "regionCode": "string"
}
```

Service area businesses provide their service at the customer's location (for example, a locksmith or plumber).

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|businessType|string|false|none|Required. Indicates the type of the service area business.|
|places|[Places](#schemaplaces)|false|none|The area that this business serves defined through a set of places.|
|regionCode|string|false|none|Immutable. CLDR region code of the country/region that this service area business is based in. See http://cldr.unicode.org/ and http://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland. This field is required for CUSTOMER_LOCATION_ONLY businesses, and is ignored otherwise. The region specified here can be different from regions for the areas that this business serves (e.g. service area businesses that provide services in regions other than the one that they are based in). If this location requires verification after creation, the address provided for verification purposes *must* be located within this region, and the business owner or their authorized representative *must* be able to receive postal mail at the provided verification address.|

#### Enumerated Values

|Property|Value|
|---|---|
|businessType|BUSINESS_TYPE_UNSPECIFIED|
|businessType|CUSTOMER_LOCATION_ONLY|
|businessType|CUSTOMER_AND_BUSINESS_LOCATION|

<h2 id="tocS_ServiceItem">ServiceItem</h2>
<!-- backwards compatibility -->
<a id="schemaserviceitem"></a>
<a id="schema_ServiceItem"></a>
<a id="tocSserviceitem"></a>
<a id="tocsserviceitem"></a>

```json
{
  "freeFormServiceItem": {
    "category": "string",
    "label": {
      "description": "string",
      "displayName": "string",
      "languageCode": "string"
    }
  },
  "price": {
    "currencyCode": "string",
    "nanos": 0,
    "units": "string"
  },
  "structuredServiceItem": {
    "description": "string",
    "serviceTypeId": "string"
  }
}
```

A message that describes a single service item. It is used to describe the type of service that the merchant provides. For example, haircut can be a service.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|freeFormServiceItem|[FreeFormServiceItem](#schemafreeformserviceitem)|false|none|Optional. This field will be set case of free-form services data.|
|price|[Money](#schemamoney)|false|none|Optional. Represents the monetary price of the service item. We recommend that currency_code and units should be set when including a price. This will be treated as a fixed price for the service item.|
|structuredServiceItem|[StructuredServiceItem](#schemastructuredserviceitem)|false|none|Optional. This field will be set case of structured services data.|

<h2 id="tocS_ServiceType">ServiceType</h2>
<!-- backwards compatibility -->
<a id="schemaservicetype"></a>
<a id="schema_ServiceType"></a>
<a id="tocSservicetype"></a>
<a id="tocsservicetype"></a>

```json
{
  "displayName": "string",
  "serviceTypeId": "string"
}
```

A message describing a service type that the business offers.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|displayName|string|false|read-only|Output only. The human-readable display name for the service type.|
|serviceTypeId|string|false|read-only|Output only. A stable ID (provided by Google) for this service type.|

<h2 id="tocS_SpecialHourPeriod">SpecialHourPeriod</h2>
<!-- backwards compatibility -->
<a id="schemaspecialhourperiod"></a>
<a id="schema_SpecialHourPeriod"></a>
<a id="tocSspecialhourperiod"></a>
<a id="tocsspecialhourperiod"></a>

```json
{
  "closeTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "closed": true,
  "endDate": {
    "day": 0,
    "month": 0,
    "year": 0
  },
  "openTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "startDate": {
    "day": 0,
    "month": 0,
    "year": 0
  }
}
```

Represents a single time period when a location's operational hours differ from its normal business hours. A special hour period must represent a range of less than 24 hours. The `open_time` and `start_date` must predate the `close_time` and `end_date`. The `close_time` and `end_date` can extend to 11:59 a.m. on the day after the specified `start_date`. For example, the following inputs are valid: start_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-23, open_time=08:00, close_time=18:00 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=11:59 The following inputs are not valid: start_date=2015-11-23, open_time=13:00, close_time=11:59 start_date=2015-11-23, end_date=2015-11-24, open_time=13:00, close_time=12:00 start_date=2015-11-23, end_date=2015-11-25, open_time=08:00, close_time=18:00

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closeTime|[TimeOfDay](#schematimeofday)|false|none|Optional. Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field. Must be specified if `closed` is false.|
|closed|boolean|false|none|Optional. If true, `end_date`, `open_time`, and `close_time` are ignored, and the date specified in `start_date` is treated as the location being closed for the entire day.|
|endDate|[Date](#schemadate)|false|none|Optional. The calendar date this special hour period ends on. If `end_date` field is not set, default to the date specified in `start_date`. If set, this field must be equal to or at most 1 day after `start_date`.|
|openTime|[TimeOfDay](#schematimeofday)|false|none|Optional. Valid values are 00:00-24:00 where 24:00 represents midnight at the end of the specified day field. Must be specified if `closed` is false.|
|startDate|[Date](#schemadate)|false|none|Required. The calendar date this special hour period starts on.|

<h2 id="tocS_SpecialHours">SpecialHours</h2>
<!-- backwards compatibility -->
<a id="schemaspecialhours"></a>
<a id="schema_SpecialHours"></a>
<a id="tocSspecialhours"></a>
<a id="tocsspecialhours"></a>

```json
{
  "specialHourPeriods": [
    {
      "closeTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "closed": true,
      "endDate": {
        "day": 0,
        "month": 0,
        "year": 0
      },
      "openTime": {
        "hours": 0,
        "minutes": 0,
        "nanos": 0,
        "seconds": 0
      },
      "startDate": {
        "day": 0,
        "month": 0,
        "year": 0
      }
    }
  ]
}
```

Represents a set of time periods when a location's operational hours differ from its normal business hours.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|specialHourPeriods|[[SpecialHourPeriod](#schemaspecialhourperiod)]|false|none|Required. A list of exceptions to the business's regular hours.|

<h2 id="tocS_StructuredServiceItem">StructuredServiceItem</h2>
<!-- backwards compatibility -->
<a id="schemastructuredserviceitem"></a>
<a id="schema_StructuredServiceItem"></a>
<a id="tocSstructuredserviceitem"></a>
<a id="tocsstructuredserviceitem"></a>

```json
{
  "description": "string",
  "serviceTypeId": "string"
}
```

Represents a structured service offered by the merchant. For eg: toilet_installation.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|description|string|false|none|Optional. Description of structured service item. The character limit is 300.|
|serviceTypeId|string|false|none|Required. The `service_type_id` field is a Google provided unique ID that can be found in `ServiceType`. This information is provided by `BatchGetCategories` rpc service.|

<h2 id="tocS_TimeOfDay">TimeOfDay</h2>
<!-- backwards compatibility -->
<a id="schematimeofday"></a>
<a id="schema_TimeOfDay"></a>
<a id="tocStimeofday"></a>
<a id="tocstimeofday"></a>

```json
{
  "hours": 0,
  "minutes": 0,
  "nanos": 0,
  "seconds": 0
}
```

Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hours|integer(int32)|false|none|Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.|
|minutes|integer(int32)|false|none|Minutes of hour of day. Must be from 0 to 59.|
|nanos|integer(int32)|false|none|Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.|
|seconds|integer(int32)|false|none|Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.|

<h2 id="tocS_TimePeriod">TimePeriod</h2>
<!-- backwards compatibility -->
<a id="schematimeperiod"></a>
<a id="schema_TimePeriod"></a>
<a id="tocStimeperiod"></a>
<a id="tocstimeperiod"></a>

```json
{
  "closeDay": "DAY_OF_WEEK_UNSPECIFIED",
  "closeTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  },
  "openDay": "DAY_OF_WEEK_UNSPECIFIED",
  "openTime": {
    "hours": 0,
    "minutes": 0,
    "nanos": 0,
    "seconds": 0
  }
}
```

Represents a span of time that the business is open, starting on the specified open day/time and closing on the specified close day/time. The closing time must occur after the opening time, for example later in the same day, or on a subsequent day.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|closeDay|string|false|none|Required. Indicates the day of the week this period ends on.|
|closeTime|[TimeOfDay](#schematimeofday)|false|none|Required. Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.|
|openDay|string|false|none|Required. Indicates the day of the week this period starts on.|
|openTime|[TimeOfDay](#schematimeofday)|false|none|Required. Valid values are 00:00-24:00, where 24:00 represents midnight at the end of the specified day field.|

#### Enumerated Values

|Property|Value|
|---|---|
|closeDay|DAY_OF_WEEK_UNSPECIFIED|
|closeDay|MONDAY|
|closeDay|TUESDAY|
|closeDay|WEDNESDAY|
|closeDay|THURSDAY|
|closeDay|FRIDAY|
|closeDay|SATURDAY|
|closeDay|SUNDAY|
|openDay|DAY_OF_WEEK_UNSPECIFIED|
|openDay|MONDAY|
|openDay|TUESDAY|
|openDay|WEDNESDAY|
|openDay|THURSDAY|
|openDay|FRIDAY|
|openDay|SATURDAY|
|openDay|SUNDAY|

<h2 id="tocS_UriAttributeValue">UriAttributeValue</h2>
<!-- backwards compatibility -->
<a id="schemauriattributevalue"></a>
<a id="schema_UriAttributeValue"></a>
<a id="tocSuriattributevalue"></a>
<a id="tocsuriattributevalue"></a>

```json
{
  "uri": "string"
}
```

Values for an attribute with a `value_type` of URL.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|uri|string|false|none|Required. The proposed URI value for this attribute.|
