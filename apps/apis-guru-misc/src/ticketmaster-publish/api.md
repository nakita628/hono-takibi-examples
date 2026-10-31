<h1 id="ticketmaster-publish-api">ticketmaster publish api v2</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Publish API

Base URLs:

* <a href="https://api.apis.guru//www.ticketmaster.com/publish/v2">https://api.apis.guru//www.ticketmaster.com/publish/v2</a>

Web: <a href="http://developer.ticketmaster.com/support/contact-us/">http://developer.ticketmaster.com/support/contact-us/</a> 

<h1 id="ticketmaster-publish-api-default">Default</h1>

## Publish an attractions

<a id="opIdpublishAttraction"></a>

> Code samples

```bash
curl https://example.com/publish/v2/attractions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "active": false,
    "additionalInfos": "en-us: additionalInfo",
    "classifications": [
      {
        "genre": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        },
        "primary": false,
        "segment": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        },
        "subGenre": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        },
        "subType": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        },
        "type": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "descriptions": "en-us: description",
    "discoverable": false,
    "images": [
      {
        "attribution": "string",
        "domains": [
          "string"
        ],
        "fallback": false,
        "height": 0,
        "ratio": "16_9",
        "url": "string",
        "width": 0
      }
    ],
    "names": "en-us: name",
    "references": "sourceName: id",
    "relationships": [
      {}
    ],
    "source": {
      "id": "string",
      "name": "string"
    },
    "test": false,
    "type": "event",
    "url": "string",
    "version": 0
  }'
```

`POST /publish/v2/attractions`

Since 1.0.0

> Body parameter

```json
{
  "active": false,
  "additionalInfos": "en-us: additionalInfo",
  "classifications": [
    {
      "genre": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "primary": false,
      "segment": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "subGenre": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "subType": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "type": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "descriptions": "en-us: description",
  "discoverable": false,
  "images": [
    {
      "attribution": "string",
      "domains": [
        "string"
      ],
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "names": "en-us: name",
  "references": "sourceName: id",
  "relationships": [
    {}
  ],
  "source": {
    "id": "string",
    "name": "string"
  },
  "test": false,
  "type": "event",
  "url": "string",
  "version": 0
}
```

<h3 id="publish-an-attractions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[Attraction](#schemaattraction)|true|Attraction|
|» active|body|boolean|false|Indicate if the entity is active, inactive entity won't appear in Discovery API|
|» additionalInfos|body|object|false|Additional informations of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» classifications|body|[[Classification](#schemaclassification)]|false|Attraction's classifications|
|» descriptions|body|object|false|Descriptions of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» discoverable|body|boolean|false|True if the entity is dicoverable in discovery API|
|» images|body|[[Image](#schemaimage)]|false|Images of the entity|
|» names|body|object|false|Names of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» references|body|object|false|References of this entity in an other system. Reference is the exact same entity|
|» » **additionalProperties**|body|string|false|none|
|» relationships|body|[[Relationship](#schemarelationship)]|false|Relationships on the entity, like if the entity is a duplicate of another one|
|» source|body|[Source](#schemasource)|false|Source|
|» test|body|boolean|false|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|» type|body|string|true|Type of the entity|
|» url|body|string|false|URL of a web site detail page of the entity|
|» version|body|integer(int64)|false|Version of the entity. Version is to avoid updated an entity with an older version|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|event|
|» type|venue|
|» type|attraction|

<h3 id="publish-an-attractions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish a patch on an attraction

<a id="opIdpatchAttraction"></a>

> Code samples

```bash
curl https://example.com/publish/v2/attractions/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "changes": [
      {
        "from": "string",
        "op": "add",
        "path": "string",
        "value": {}
      }
    ],
    "relatedEntityId": "string",
    "relatedEntityType": "event",
    "score": 0,
    "source": "string",
    "versionNumber": 0
  }'
```

`PATCH /publish/v2/attractions/{id}`

Since 1.0.0

> Body parameter

```json
{
  "changes": [
    {
      "from": "string",
      "op": "add",
      "path": "string",
      "value": {}
    }
  ],
  "relatedEntityId": "string",
  "relatedEntityType": "event",
  "score": 0,
  "source": "string",
  "versionNumber": 0
}
```

<h3 id="publish-a-patch-on-an-attraction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the attraction the patch will be applied|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[AugmentationData](#schemaaugmentationdata)|true|Patch to apply|
|» changes|body|[[Change](#schemachange)]|true|List of changes to apply to the related entity|
|» relatedEntityId|body|string|true|Id of the entity to apply the augmentation data.|
|» relatedEntityType|body|string|true|The type of the entity to apply the augmentation data.|
|» score|body|number(float)|false|The confidence (%) level of the accuracy of this augmention data. 100 is the better|
|» source|body|string|true|The source where the augementation data came from|
|» versionNumber|body|integer(int64)|true|Vesion of this augmentation data. This field is to avoid updating entity with old data. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» relatedEntityType|event|
|» relatedEntityType|attraction|
|» relatedEntityType|venue|

<h3 id="publish-a-patch-on-an-attraction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish a video on an attraction

<a id="opIdpublishAttractionVideos"></a>

> Code samples

```bash
curl https://example.com/publish/v2/attractions/string/videos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "embedUrl": "string",
    "licensingInformation": {
      "license": "string",
      "regionRestriction": {
        "allowed": [
          "string"
        ]
      }
    },
    "source": {
      "id": "string",
      "name": "string"
    },
    "url": "string"
  }'
```

`POST /publish/v2/attractions/{id}/videos`

Since 1.0.0

> Body parameter

```json
{
  "embedUrl": "string",
  "licensingInformation": {
    "license": "string",
    "regionRestriction": {
      "allowed": [
        "string"
      ]
    }
  },
  "source": {
    "id": "string",
    "name": "string"
  },
  "url": "string"
}
```

<h3 id="publish-a-video-on-an-attraction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the attraction the video is linked to|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[Video](#schemavideo)|true|Video data|
|» embedUrl|body|string|false|The url of the embeded video|
|» licensingInformation|body|[LicensingInformation](#schemalicensinginformation)|true|This class defines an entitlement data on the Publish API|
|» source|body|[Source](#schemasource)|true|Source|
|» url|body|string|true|The url of the video|

<h3 id="publish-a-video-on-an-attraction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish entitlements on an entity

<a id="opIdpublishEntitlements"></a>

> Code samples

```bash
curl https://example.com/publish/v2/entitlements \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "data": {},
    "relatedEntityId": "string",
    "relatedEntitySource": {
      "id": "string",
      "name": "string"
    },
    "relatedEntityType": "event",
    "source": "ticketmaster",
    "versionNumber": 0
  }'
```

`POST /publish/v2/entitlements`

Since 2.0.0

> Body parameter

```json
{
  "data": {},
  "relatedEntityId": "string",
  "relatedEntitySource": {
    "id": "string",
    "name": "string"
  },
  "relatedEntityType": "event",
  "source": "ticketmaster",
  "versionNumber": 0
}
```

<h3 id="publish-entitlements-on-an-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[Entitlement](#schemaentitlement)|true|Entitlements information to add to the entity|
|» data|body|object|true|The actual entitlements information to add to the entity|
|» relatedEntityId|body|string|false|Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided|
|» relatedEntitySource|body|[Source](#schemasource)|false|Source|
|» relatedEntityType|body|string|true|The type of the entity to add this entitlement to|
|» source|body|string|true|Source of the extension, where it came from|
|» versionNumber|body|integer(int64)|false|Version of the entitlements. Version is to prevent to override an entitlements with an older one|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» relatedEntityType|event|
|» relatedEntityType|venue|
|» relatedEntityType|attraction|
|» source|ticketmaster|

<h3 id="publish-entitlements-on-an-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish an event

<a id="opIdpublishEvent"></a>

> Code samples

```bash
curl https://example.com/publish/v2/events \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "active": false,
    "additionalInfos": "en-us: additionalInfo",
    "attractions": [
      {
        "active": false,
        "additionalInfos": "en-us: additionalInfo",
        "classifications": [
          {
            "genre": {
              "id": "string",
              "names": {
                "property1": "string",
                "property2": "string"
              }
            },
            "primary": false,
            "segment": {
              "id": "string",
              "names": {
                "property1": "string",
                "property2": "string"
              }
            },
            "subGenre": {
              "id": "string",
              "names": {
                "property1": "string",
                "property2": "string"
              }
            },
            "subType": {
              "id": "string",
              "names": {
                "property1": "string",
                "property2": "string"
              }
            },
            "type": {
              "id": "string",
              "names": {
                "property1": "string",
                "property2": "string"
              }
            }
          }
        ],
        "descriptions": "en-us: description",
        "discoverable": false,
        "images": [
          {
            "attribution": "string",
            "domains": [
              "string"
            ],
            "fallback": false,
            "height": 0,
            "ratio": "16_9",
            "url": "string",
            "width": 0
          }
        ],
        "names": "en-us: name",
        "references": "sourceName: id",
        "relationships": [
          {}
        ],
        "source": {
          "id": "string",
          "name": "string"
        },
        "test": false,
        "type": "event",
        "url": "string",
        "version": 0
      }
    ],
    "classifications": [
      {
        "genre": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        },
        "primary": false,
        "segment": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        },
        "subGenre": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        },
        "subType": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        },
        "type": {
          "id": "string",
          "names": {
            "property1": "string",
            "property2": "string"
          }
        }
      }
    ],
    "dates": {
      "access": {
        "endApproximate": "yyyy-MM-ddThh-mm-ssZ",
        "endDateTime": "yyyy-MM-ddThh-mm-ssZ",
        "startApproximate": false,
        "startDateTime": "yyyy-MM-ddThh-mm-ssZ"
      },
      "end": {
        "approximate": false,
        "dateTime": "yyyy-MM-ddThh-mm-ssZ",
        "localTime": {
          "chronology": {
            "zone": {
              "fixed": false,
              "id": "string"
            }
          },
          "fieldTypes": [
            {
              "durationType": {
                "name": "string"
              },
              "name": "string",
              "rangeDurationType": {
                "name": "string"
              }
            }
          ],
          "fields": [
            {
              "durationField": {
                "name": "string",
                "precise": false,
                "supported": false,
                "type": {
                  "name": "string"
                },
                "unitMillis": 0
              },
              "leapDurationField": {
                "name": "string",
                "precise": false,
                "supported": false,
                "type": {
                  "name": "string"
                },
                "unitMillis": 0
              },
              "lenient": false,
              "maximumValue": 0,
              "minimumValue": 0,
              "name": "string",
              "rangeDurationField": {
                "name": "string",
                "precise": false,
                "supported": false,
                "type": {
                  "name": "string"
                },
                "unitMillis": 0
              },
              "supported": false,
              "type": {
                "durationType": {
                  "name": "string"
                },
                "name": "string",
                "rangeDurationType": {
                  "name": "string"
                }
              }
            }
          ],
          "hourOfDay": 0,
          "millisOfDay": 0,
          "millisOfSecond": 0,
          "minuteOfHour": 0,
          "secondOfMinute": 0,
          "values": [
            0
          ]
        }
      },
      "start": {
        "dateTBA": false,
        "dateTBD": false,
        "dateTime": "yyyy-MM-ddThh:mm:ssZ",
        "localDate": "yyyy-MM-dd",
        "localTime": {
          "chronology": {
            "zone": {
              "fixed": false,
              "id": "string"
            }
          },
          "fieldTypes": [
            {
              "durationType": {
                "name": "string"
              },
              "name": "string",
              "rangeDurationType": {
                "name": "string"
              }
            }
          ],
          "fields": [
            {
              "durationField": {
                "name": "string",
                "precise": false,
                "supported": false,
                "type": {
                  "name": "string"
                },
                "unitMillis": 0
              },
              "leapDurationField": {
                "name": "string",
                "precise": false,
                "supported": false,
                "type": {
                  "name": "string"
                },
                "unitMillis": 0
              },
              "lenient": false,
              "maximumValue": 0,
              "minimumValue": 0,
              "name": "string",
              "rangeDurationField": {
                "name": "string",
                "precise": false,
                "supported": false,
                "type": {
                  "name": "string"
                },
                "unitMillis": 0
              },
              "supported": false,
              "type": {
                "durationType": {
                  "name": "string"
                },
                "name": "string",
                "rangeDurationType": {
                  "name": "string"
                }
              }
            }
          ],
          "hourOfDay": 0,
          "millisOfDay": 0,
          "millisOfSecond": 0,
          "minuteOfHour": 0,
          "secondOfMinute": 0,
          "values": [
            0
          ]
        },
        "noSpecificTime": false,
        "timeTBA": false
      },
      "status": {
        "code": "onsale"
      },
      "timezone": "string"
    },
    "descriptions": "en-us: description",
    "discoverable": false,
    "distance": 0,
    "images": [
      {
        "attribution": "string",
        "domains": [
          "string"
        ],
        "fallback": false,
        "height": 0,
        "ratio": "16_9",
        "url": "string",
        "width": 0
      }
    ],
    "infos": "en-us: info",
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "names": "en-us: name",
    "place": {
      "address": {
        "line1s": "en-us: line1",
        "line2s": "en-us:line2",
        "line3s": "en-us:line3"
      },
      "area": {
        "names": "en-us: name"
      },
      "city": {
        "names": "en-us: name"
      },
      "country": {
        "countryCode": "string",
        "names": "en-us: name"
      },
      "location": {
        "latitude": 0,
        "longitude": 0
      },
      "names": "en-us: name",
      "postalCode": "string",
      "state": {
        "names": "en-us: name",
        "stateCode": "string"
      }
    },
    "pleaseNotes": "en-us: note",
    "priceRanges": [
      {
        "currency": "string",
        "max": 0,
        "min": 0,
        "type": "standard"
      }
    ],
    "promoter": {
      "descriptions": "en-us: description",
      "id": "string",
      "names": "en-us: name"
    },
    "publicVisibility": {
      "endDateTime": "1970-01-01T00:00:00Z",
      "startDateTime": "1970-01-01T00:00:00Z",
      "visible": false
    },
    "references": "sourceName: id",
    "relationships": [
      {}
    ],
    "sales": {
      "presales": [
        {
          "descriptions": "en-us: description",
          "endDateTime": "1970-01-01T00:00:00Z",
          "names": "en-us: name",
          "startDateTime": "1970-01-01T00:00:00Z",
          "url": "string"
        }
      ],
      "public": {
        "endDateTime": "1970-01-01T00:00:00Z",
        "startDateTime": "1970-01-01T00:00:00Z",
        "startTBD": false
      }
    },
    "source": {
      "id": "string",
      "name": "string"
    },
    "test": false,
    "type": "event",
    "units": "string",
    "url": "string",
    "venue": {
      "accessibleSeatingDetails": "en-us:seatingDetails",
      "active": false,
      "additionalInfos": "en-us: additionalInfo",
      "address": {
        "line1s": "en-us: line1",
        "line2s": "en-us:line2",
        "line3s": "en-us:line3"
      },
      "boxOfficeInfo": {
        "acceptedPaymentDetails": "en-us:paymentDetails",
        "openHoursDetails": "en-us:openHours",
        "phoneNumberDetails": "en-us:phoneNumbers",
        "willCallDetails": "en-us:willCall"
      },
      "city": {
        "names": "en-us: name"
      },
      "country": {
        "countryCode": "string",
        "names": "en-us: name"
      },
      "currency": "string",
      "descriptions": "en-us: description",
      "discoverable": false,
      "distance": 0,
      "dma": [
        {
          "id": 0
        }
      ],
      "generalInfo": {
        "childRules": "en-us: rule",
        "generalRules": "en-us: rule"
      },
      "images": [
        {
          "attribution": "string",
          "domains": [
            "string"
          ],
          "fallback": false,
          "height": 0,
          "ratio": "16_9",
          "url": "string",
          "width": 0
        }
      ],
      "location": {
        "latitude": 0,
        "longitude": 0
      },
      "markets": [
        {
          "id": "string"
        }
      ],
      "names": "en-us: name",
      "parkingDetails": "en-us:parkingDetails",
      "postalCode": "string",
      "references": "sourceName: id",
      "relationships": [
        {}
      ],
      "social": {
        "twitter": {
          "handle": "@a Twitter handle exampe",
          "hashtags": "#hashtag example #hashtag another example"
        }
      },
      "source": {
        "id": "string",
        "name": "string"
      },
      "state": {
        "names": "en-us: name",
        "stateCode": "string"
      },
      "test": false,
      "timezone": "string",
      "type": "event",
      "units": "string",
      "url": "string",
      "version": 0
    },
    "version": 0
  }'
```

`POST /publish/v2/events`

Since 1.0.0

> Body parameter

```json
{
  "active": false,
  "additionalInfos": "en-us: additionalInfo",
  "attractions": [
    {
      "active": false,
      "additionalInfos": "en-us: additionalInfo",
      "classifications": [
        {
          "genre": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          },
          "primary": false,
          "segment": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          },
          "subGenre": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          },
          "subType": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          },
          "type": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "descriptions": "en-us: description",
      "discoverable": false,
      "images": [
        {
          "attribution": "string",
          "domains": [
            "string"
          ],
          "fallback": false,
          "height": 0,
          "ratio": "16_9",
          "url": "string",
          "width": 0
        }
      ],
      "names": "en-us: name",
      "references": "sourceName: id",
      "relationships": [
        {}
      ],
      "source": {
        "id": "string",
        "name": "string"
      },
      "test": false,
      "type": "event",
      "url": "string",
      "version": 0
    }
  ],
  "classifications": [
    {
      "genre": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "primary": false,
      "segment": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "subGenre": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "subType": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "type": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "dates": {
    "access": {
      "endApproximate": "yyyy-MM-ddThh-mm-ssZ",
      "endDateTime": "yyyy-MM-ddThh-mm-ssZ",
      "startApproximate": false,
      "startDateTime": "yyyy-MM-ddThh-mm-ssZ"
    },
    "end": {
      "approximate": false,
      "dateTime": "yyyy-MM-ddThh-mm-ssZ",
      "localTime": {
        "chronology": {
          "zone": {
            "fixed": false,
            "id": "string"
          }
        },
        "fieldTypes": [
          {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        ],
        "fields": [
          {
            "durationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "leapDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "lenient": false,
            "maximumValue": 0,
            "minimumValue": 0,
            "name": "string",
            "rangeDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "supported": false,
            "type": {
              "durationType": {
                "name": "string"
              },
              "name": "string",
              "rangeDurationType": {
                "name": "string"
              }
            }
          }
        ],
        "hourOfDay": 0,
        "millisOfDay": 0,
        "millisOfSecond": 0,
        "minuteOfHour": 0,
        "secondOfMinute": 0,
        "values": [
          0
        ]
      }
    },
    "start": {
      "dateTBA": false,
      "dateTBD": false,
      "dateTime": "yyyy-MM-ddThh:mm:ssZ",
      "localDate": "yyyy-MM-dd",
      "localTime": {
        "chronology": {
          "zone": {
            "fixed": false,
            "id": "string"
          }
        },
        "fieldTypes": [
          {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        ],
        "fields": [
          {
            "durationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "leapDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "lenient": false,
            "maximumValue": 0,
            "minimumValue": 0,
            "name": "string",
            "rangeDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "supported": false,
            "type": {
              "durationType": {
                "name": "string"
              },
              "name": "string",
              "rangeDurationType": {
                "name": "string"
              }
            }
          }
        ],
        "hourOfDay": 0,
        "millisOfDay": 0,
        "millisOfSecond": 0,
        "minuteOfHour": 0,
        "secondOfMinute": 0,
        "values": [
          0
        ]
      },
      "noSpecificTime": false,
      "timeTBA": false
    },
    "status": {
      "code": "onsale"
    },
    "timezone": "string"
  },
  "descriptions": "en-us: description",
  "discoverable": false,
  "distance": 0,
  "images": [
    {
      "attribution": "string",
      "domains": [
        "string"
      ],
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "infos": "en-us: info",
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "names": "en-us: name",
  "place": {
    "address": {
      "line1s": "en-us: line1",
      "line2s": "en-us:line2",
      "line3s": "en-us:line3"
    },
    "area": {
      "names": "en-us: name"
    },
    "city": {
      "names": "en-us: name"
    },
    "country": {
      "countryCode": "string",
      "names": "en-us: name"
    },
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "names": "en-us: name",
    "postalCode": "string",
    "state": {
      "names": "en-us: name",
      "stateCode": "string"
    }
  },
  "pleaseNotes": "en-us: note",
  "priceRanges": [
    {
      "currency": "string",
      "max": 0,
      "min": 0,
      "type": "standard"
    }
  ],
  "promoter": {
    "descriptions": "en-us: description",
    "id": "string",
    "names": "en-us: name"
  },
  "publicVisibility": {
    "endDateTime": "1970-01-01T00:00:00Z",
    "startDateTime": "1970-01-01T00:00:00Z",
    "visible": false
  },
  "references": "sourceName: id",
  "relationships": [
    {}
  ],
  "sales": {
    "presales": [
      {
        "descriptions": "en-us: description",
        "endDateTime": "1970-01-01T00:00:00Z",
        "names": "en-us: name",
        "startDateTime": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "public": {
      "endDateTime": "1970-01-01T00:00:00Z",
      "startDateTime": "1970-01-01T00:00:00Z",
      "startTBD": false
    }
  },
  "source": {
    "id": "string",
    "name": "string"
  },
  "test": false,
  "type": "event",
  "units": "string",
  "url": "string",
  "venue": {
    "accessibleSeatingDetails": "en-us:seatingDetails",
    "active": false,
    "additionalInfos": "en-us: additionalInfo",
    "address": {
      "line1s": "en-us: line1",
      "line2s": "en-us:line2",
      "line3s": "en-us:line3"
    },
    "boxOfficeInfo": {
      "acceptedPaymentDetails": "en-us:paymentDetails",
      "openHoursDetails": "en-us:openHours",
      "phoneNumberDetails": "en-us:phoneNumbers",
      "willCallDetails": "en-us:willCall"
    },
    "city": {
      "names": "en-us: name"
    },
    "country": {
      "countryCode": "string",
      "names": "en-us: name"
    },
    "currency": "string",
    "descriptions": "en-us: description",
    "discoverable": false,
    "distance": 0,
    "dma": [
      {
        "id": 0
      }
    ],
    "generalInfo": {
      "childRules": "en-us: rule",
      "generalRules": "en-us: rule"
    },
    "images": [
      {
        "attribution": "string",
        "domains": [
          "string"
        ],
        "fallback": false,
        "height": 0,
        "ratio": "16_9",
        "url": "string",
        "width": 0
      }
    ],
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "markets": [
      {
        "id": "string"
      }
    ],
    "names": "en-us: name",
    "parkingDetails": "en-us:parkingDetails",
    "postalCode": "string",
    "references": "sourceName: id",
    "relationships": [
      {}
    ],
    "social": {
      "twitter": {
        "handle": "@a Twitter handle exampe",
        "hashtags": "#hashtag example #hashtag another example"
      }
    },
    "source": {
      "id": "string",
      "name": "string"
    },
    "state": {
      "names": "en-us: name",
      "stateCode": "string"
    },
    "test": false,
    "timezone": "string",
    "type": "event",
    "units": "string",
    "url": "string",
    "version": 0
  },
  "version": 0
}
```

<h3 id="publish-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[Event](#schemaevent)|true|Event|
|» active|body|boolean|false|Indicate if the entity is active, inactive entity won't appear in Discovery API|
|» additionalInfos|body|object|false|Additional informations of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» attractions|body|[[Attraction](#schemaattraction)]|false|Ordered Attraction related to the event|
|» classifications|body|[[Classification](#schemaclassification)]|false|Event's classifications|
|» dates|body|[EventDates](#schemaeventdates)|false|Event's Dates|
|» descriptions|body|object|false|Descriptions of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» discoverable|body|boolean|false|True if the entity is dicoverable in discovery API|
|» distance|body|number(double)|false|none|
|» images|body|[[Image](#schemaimage)]|false|Images of the entity|
|» infos|body|object|false|Any information related to the event - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» location|body|[Location](#schemalocation)|false|Location|
|» names|body|object|false|Names of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» place|body|[Place](#schemaplace)|false|Place|
|» pleaseNotes|body|object|false|Any notes related to the event - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» priceRanges|body|[[PriceRange](#schemapricerange)]|false|Price ranges of this event|
|» promoter|body|[Promoter](#schemapromoter)|false|Promoter|
|» publicVisibility|body|[PublicVisibility](#schemapublicvisibility)|false|The class defines the public visibility period on the Discovery/Publish API.|
|» references|body|object|false|References of this entity in an other system. Reference is the exact same entity|
|» » **additionalProperties**|body|string|false|none|
|» relationships|body|[[Relationship](#schemarelationship)]|false|Relationships on the entity, like if the entity is a duplicate of another one|
|» sales|body|[EventSalesDates](#schemaeventsalesdates)|false|Event's Sales Dates|
|» source|body|[Source](#schemasource)|false|Source|
|» test|body|boolean|false|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|» type|body|string|true|Type of the entity|
|» units|body|string|false|none|
|» url|body|string|false|URL of a web site detail page of the entity|
|» venue|body|[Venue](#schemavenue)|false|Venue|
|» version|body|integer(int64)|false|Version of the entity. Version is to avoid updated an entity with an older version|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|event|
|» type|venue|
|» type|attraction|

<h3 id="publish-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish a patch on an event

<a id="opIdpatchEvent"></a>

> Code samples

```bash
curl https://example.com/publish/v2/events/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "changes": [
      {
        "from": "string",
        "op": "add",
        "path": "string",
        "value": {}
      }
    ],
    "relatedEntityId": "string",
    "relatedEntityType": "event",
    "score": 0,
    "source": "string",
    "versionNumber": 0
  }'
```

`PATCH /publish/v2/events/{id}`

Since 1.0.0

> Body parameter

```json
{
  "changes": [
    {
      "from": "string",
      "op": "add",
      "path": "string",
      "value": {}
    }
  ],
  "relatedEntityId": "string",
  "relatedEntityType": "event",
  "score": 0,
  "source": "string",
  "versionNumber": 0
}
```

<h3 id="publish-a-patch-on-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the event the patch will be applied|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[AugmentationData](#schemaaugmentationdata)|true|Patch to apply|
|» changes|body|[[Change](#schemachange)]|true|List of changes to apply to the related entity|
|» relatedEntityId|body|string|true|Id of the entity to apply the augmentation data.|
|» relatedEntityType|body|string|true|The type of the entity to apply the augmentation data.|
|» score|body|number(float)|false|The confidence (%) level of the accuracy of this augmention data. 100 is the better|
|» source|body|string|true|The source where the augementation data came from|
|» versionNumber|body|integer(int64)|true|Vesion of this augmentation data. This field is to avoid updating entity with old data. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» relatedEntityType|event|
|» relatedEntityType|attraction|
|» relatedEntityType|venue|

<h3 id="publish-a-patch-on-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish a video on an event

<a id="opIdpublishEventVideos"></a>

> Code samples

```bash
curl https://example.com/publish/v2/events/string/videos \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "embedUrl": "string",
    "licensingInformation": {
      "license": "string",
      "regionRestriction": {
        "allowed": [
          "string"
        ]
      }
    },
    "source": {
      "id": "string",
      "name": "string"
    },
    "url": "string"
  }'
```

`POST /publish/v2/events/{id}/videos`

Since 1.0.0

> Body parameter

```json
{
  "embedUrl": "string",
  "licensingInformation": {
    "license": "string",
    "regionRestriction": {
      "allowed": [
        "string"
      ]
    }
  },
  "source": {
    "id": "string",
    "name": "string"
  },
  "url": "string"
}
```

<h3 id="publish-a-video-on-an-event-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the event the video is linked to|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[Video](#schemavideo)|true|Video data|
|» embedUrl|body|string|false|The url of the embeded video|
|» licensingInformation|body|[LicensingInformation](#schemalicensinginformation)|true|This class defines an entitlement data on the Publish API|
|» source|body|[Source](#schemasource)|true|Source|
|» url|body|string|true|The url of the video|

<h3 id="publish-a-video-on-an-event-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish extension on an entity

<a id="opIdpublishExtension"></a>

> Code samples

```bash
curl https://example.com/publish/v2/extensions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "data": {},
    "relatedEntityId": "string",
    "relatedEntitySource": {
      "id": "string",
      "name": "string"
    },
    "relatedEntityType": "event",
    "source": "string",
    "type": "string",
    "versionNumber": 0
  }'
```

`POST /publish/v2/extensions`

Since 1.0.0

> Body parameter

```json
{
  "data": {},
  "relatedEntityId": "string",
  "relatedEntitySource": {
    "id": "string",
    "name": "string"
  },
  "relatedEntityType": "event",
  "source": "string",
  "type": "string",
  "versionNumber": 0
}
```

<h3 id="publish-extension-on-an-entity-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[ExtensionData](#schemaextensiondata)|true|Extension information to add to the entity|
|» data|body|object|true|The actual information to add to the entity|
|» relatedEntityId|body|string|false|Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided|
|» relatedEntitySource|body|[Source](#schemasource)|false|Source|
|» relatedEntityType|body|string|true|The type of the entity to add this extensions to|
|» source|body|string|true|Source of the extension, where it came from|
|» type|body|string|true|The type of the extension. This represent the data sent|
|» versionNumber|body|integer(int64)|false|Version of the extensions. Version is to prevent to override an extension with an older one|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» relatedEntityType|event|
|» relatedEntityType|venue|
|» relatedEntityType|attraction|

<h3 id="publish-extension-on-an-entity-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish a venue

<a id="opIdpublishVenue"></a>

> Code samples

```bash
curl https://example.com/publish/v2/venues \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "accessibleSeatingDetails": "en-us:seatingDetails",
    "active": false,
    "additionalInfos": "en-us: additionalInfo",
    "address": {
      "line1s": "en-us: line1",
      "line2s": "en-us:line2",
      "line3s": "en-us:line3"
    },
    "boxOfficeInfo": {
      "acceptedPaymentDetails": "en-us:paymentDetails",
      "openHoursDetails": "en-us:openHours",
      "phoneNumberDetails": "en-us:phoneNumbers",
      "willCallDetails": "en-us:willCall"
    },
    "city": {
      "names": "en-us: name"
    },
    "country": {
      "countryCode": "string",
      "names": "en-us: name"
    },
    "currency": "string",
    "descriptions": "en-us: description",
    "discoverable": false,
    "distance": 0,
    "dma": [
      {
        "id": 0
      }
    ],
    "generalInfo": {
      "childRules": "en-us: rule",
      "generalRules": "en-us: rule"
    },
    "images": [
      {
        "attribution": "string",
        "domains": [
          "string"
        ],
        "fallback": false,
        "height": 0,
        "ratio": "16_9",
        "url": "string",
        "width": 0
      }
    ],
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "markets": [
      {
        "id": "string"
      }
    ],
    "names": "en-us: name",
    "parkingDetails": "en-us:parkingDetails",
    "postalCode": "string",
    "references": "sourceName: id",
    "relationships": [
      {}
    ],
    "social": {
      "twitter": {
        "handle": "@a Twitter handle exampe",
        "hashtags": "#hashtag example #hashtag another example"
      }
    },
    "source": {
      "id": "string",
      "name": "string"
    },
    "state": {
      "names": "en-us: name",
      "stateCode": "string"
    },
    "test": false,
    "timezone": "string",
    "type": "event",
    "units": "string",
    "url": "string",
    "version": 0
  }'
```

`POST /publish/v2/venues`

Since 1.0.0

> Body parameter

```json
{
  "accessibleSeatingDetails": "en-us:seatingDetails",
  "active": false,
  "additionalInfos": "en-us: additionalInfo",
  "address": {
    "line1s": "en-us: line1",
    "line2s": "en-us:line2",
    "line3s": "en-us:line3"
  },
  "boxOfficeInfo": {
    "acceptedPaymentDetails": "en-us:paymentDetails",
    "openHoursDetails": "en-us:openHours",
    "phoneNumberDetails": "en-us:phoneNumbers",
    "willCallDetails": "en-us:willCall"
  },
  "city": {
    "names": "en-us: name"
  },
  "country": {
    "countryCode": "string",
    "names": "en-us: name"
  },
  "currency": "string",
  "descriptions": "en-us: description",
  "discoverable": false,
  "distance": 0,
  "dma": [
    {
      "id": 0
    }
  ],
  "generalInfo": {
    "childRules": "en-us: rule",
    "generalRules": "en-us: rule"
  },
  "images": [
    {
      "attribution": "string",
      "domains": [
        "string"
      ],
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "markets": [
    {
      "id": "string"
    }
  ],
  "names": "en-us: name",
  "parkingDetails": "en-us:parkingDetails",
  "postalCode": "string",
  "references": "sourceName: id",
  "relationships": [
    {}
  ],
  "social": {
    "twitter": {
      "handle": "@a Twitter handle exampe",
      "hashtags": "#hashtag example #hashtag another example"
    }
  },
  "source": {
    "id": "string",
    "name": "string"
  },
  "state": {
    "names": "en-us: name",
    "stateCode": "string"
  },
  "test": false,
  "timezone": "string",
  "type": "event",
  "units": "string",
  "url": "string",
  "version": 0
}
```

<h3 id="publish-a-venue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[Venue](#schemavenue)|true|Venue|
|» accessibleSeatingDetails|body|object|false|Venue accessible seating details - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» active|body|boolean|false|Indicate if the entity is active, inactive entity won't appear in Discovery API|
|» additionalInfos|body|object|false|Additional informations of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» address|body|[Address](#schemaaddress)|false|Address|
|» boxOfficeInfo|body|[VenueBoxOfficeInfo](#schemavenueboxofficeinfo)|false|Venue box office information|
|» city|body|[City](#schemacity)|false|City|
|» country|body|[Country](#schemacountry)|false|Country|
|» currency|body|string|false|Default currency of ticket prices for events in this venue|
|» descriptions|body|object|false|Descriptions of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» discoverable|body|boolean|false|True if the entity is dicoverable in discovery API|
|» distance|body|number(double)|false|none|
|» dma|body|[[Dma](#schemadma)]|false|The list of associated DMAs (Designated Market Areas) of the venue|
|» generalInfo|body|[VenueGeneralInfo](#schemavenuegeneralinfo)|false|Venue general information|
|» images|body|[[Image](#schemaimage)]|false|Images of the entity|
|» location|body|[Location](#schemalocation)|false|Location|
|» markets|body|[[Market](#schemamarket)]|false|Markets of the venue|
|» names|body|object|false|Names of the entity - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» parkingDetails|body|object|false|Venue parking info - multi-lingual fields|
|» » **additionalProperties**|body|string|false|none|
|» postalCode|body|string|false|Postal code / zipcode of the venue|
|» references|body|object|false|References of this entity in an other system. Reference is the exact same entity|
|» » **additionalProperties**|body|string|false|none|
|» relationships|body|[[Relationship](#schemarelationship)]|false|Relationships on the entity, like if the entity is a duplicate of another one|
|» social|body|[Social](#schemasocial)|false|Social networks data|
|» source|body|[Source](#schemasource)|false|Source|
|» state|body|[State](#schemastate)|false|State|
|» test|body|boolean|false|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|» timezone|body|string|false|Timezone of the venue|
|» type|body|string|true|Type of the entity|
|» units|body|string|false|none|
|» url|body|string|false|URL of a web site detail page of the entity|
|» version|body|integer(int64)|false|Version of the entity. Version is to avoid updated an entity with an older version|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» type|event|
|» type|venue|
|» type|attraction|

<h3 id="publish-a-venue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

## Publish a patch on a venue

<a id="opIdpatchVenue"></a>

> Code samples

```bash
curl https://example.com/publish/v2/venues/string \
  -X PATCH \
  -H 'Content-Type: application/json' \
  -H 'TMPS-Correlation-Id: ' \
  -d '{
    "changes": [
      {
        "from": "string",
        "op": "add",
        "path": "string",
        "value": {}
      }
    ],
    "relatedEntityId": "string",
    "relatedEntityType": "event",
    "score": 0,
    "source": "string",
    "versionNumber": 0
  }'
```

`PATCH /publish/v2/venues/{id}`

Since 1.0.0

> Body parameter

```json
{
  "changes": [
    {
      "from": "string",
      "op": "add",
      "path": "string",
      "value": {}
    }
  ],
  "relatedEntityId": "string",
  "relatedEntityType": "event",
  "score": 0,
  "source": "string",
  "versionNumber": 0
}
```

<h3 id="publish-a-patch-on-a-venue-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|ID of the venue the patch will be applied|
|TMPS-Correlation-Id|header|string|true|Unique correlation id to be able to trace the request in our system|
|body|body|[AugmentationData](#schemaaugmentationdata)|true|Patch to apply|
|» changes|body|[[Change](#schemachange)]|true|List of changes to apply to the related entity|
|» relatedEntityId|body|string|true|Id of the entity to apply the augmentation data.|
|» relatedEntityType|body|string|true|The type of the entity to apply the augmentation data.|
|» score|body|number(float)|false|The confidence (%) level of the accuracy of this augmention data. 100 is the better|
|» source|body|string|true|The source where the augementation data came from|
|» versionNumber|body|integer(int64)|true|Vesion of this augmentation data. This field is to avoid updating entity with old data. |

#### Enumerated Values

|Parameter|Value|
|---|---|
|» relatedEntityType|event|
|» relatedEntityType|attraction|
|» relatedEntityType|venue|

<h3 id="publish-a-patch-on-a-venue-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|successful operation|[IngestionResult](#schemaingestionresult)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AccessDates">AccessDates</h2>
<!-- backwards compatibility -->
<a id="schemaaccessdates"></a>
<a id="schema_AccessDates"></a>
<a id="tocSaccessdates"></a>
<a id="tocsaccessdates"></a>

```json
{
  "endApproximate": "yyyy-MM-ddThh-mm-ssZ",
  "endDateTime": "yyyy-MM-ddThh-mm-ssZ",
  "startApproximate": false,
  "startDateTime": "yyyy-MM-ddThh-mm-ssZ"
}
```

Event's Access Date

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endApproximate|boolean|false|none|Boolean flag to indicate whether or not the access end date is approximated|
|endDateTime|string(date-time)|false|none|Event's end access time|
|startApproximate|boolean|false|none|Boolean flag to indicate whether or not the access start date is approximated|
|startDateTime|string(date-time)|false|none|Event's start access time|

<h2 id="tocS_Address">Address</h2>
<!-- backwards compatibility -->
<a id="schemaaddress"></a>
<a id="schema_Address"></a>
<a id="tocSaddress"></a>
<a id="tocsaddress"></a>

```json
{
  "line1s": "en-us: line1",
  "line2s": "en-us:line2",
  "line3s": "en-us:line3"
}
```

Address

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|line1s|object|false|none|Aaddress first line - multi-lingual fields|
|line2s|object|false|none|Address second line - multi-lingual fields|
|line3s|object|false|none|Address third line - multi-lingual fields|

<h2 id="tocS_Area">Area</h2>
<!-- backwards compatibility -->
<a id="schemaarea"></a>
<a id="schema_Area"></a>
<a id="tocSarea"></a>
<a id="tocsarea"></a>

```json
{
  "names": "en-us: name"
}
```

Area

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|object|false|none|Names of the entity - multi-lingual fields|

<h2 id="tocS_Attraction">Attraction</h2>
<!-- backwards compatibility -->
<a id="schemaattraction"></a>
<a id="schema_Attraction"></a>
<a id="tocSattraction"></a>
<a id="tocsattraction"></a>

```json
{
  "active": false,
  "additionalInfos": "en-us: additionalInfo",
  "classifications": [
    {
      "genre": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "primary": false,
      "segment": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "subGenre": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "subType": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "type": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "descriptions": "en-us: description",
  "discoverable": false,
  "images": [
    {
      "attribution": "string",
      "domains": [
        "string"
      ],
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "names": "en-us: name",
  "references": "sourceName: id",
  "relationships": [
    {}
  ],
  "source": {
    "id": "string",
    "name": "string"
  },
  "test": false,
  "type": "event",
  "url": "string",
  "version": 0
}
```

Attraction

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Indicate if the entity is active, inactive entity won't appear in Discovery API|
|additionalInfos|object|false|none|Additional informations of the entity - multi-lingual fields|
|classifications|[[Classification](#schemaclassification)]|false|none|Attraction's classifications|
|descriptions|object|false|none|Descriptions of the entity - multi-lingual fields|
|discoverable|boolean|false|none|True if the entity is dicoverable in discovery API|
|images|[[Image](#schemaimage)]|false|none|Images of the entity|
|names|object|false|none|Names of the entity - multi-lingual fields|
|references|object|false|none|References of this entity in an other system. Reference is the exact same entity|
|relationships|[[Relationship](#schemarelationship)]|false|none|Relationships on the entity, like if the entity is a duplicate of another one|
|source|[Source](#schemasource)|false|none|Source|
|test|boolean|false|none|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|type|string|true|none|Type of the entity|
|url|string|false|none|URL of a web site detail page of the entity|
|version|integer(int64)|false|none|Version of the entity. Version is to avoid updated an entity with an older version|

#### Enumerated Values

|Property|Value|
|---|---|
|type|event|
|type|venue|
|type|attraction|

<h2 id="tocS_AttractionExtensions">AttractionExtensions</h2>
<!-- backwards compatibility -->
<a id="schemaattractionextensions"></a>
<a id="schema_AttractionExtensions"></a>
<a id="tocSattractionextensions"></a>
<a id="tocsattractionextensions"></a>

```json
{}
```

All Attraction's extensions

<h2 id="tocS_AugmentationData">AugmentationData</h2>
<!-- backwards compatibility -->
<a id="schemaaugmentationdata"></a>
<a id="schema_AugmentationData"></a>
<a id="tocSaugmentationdata"></a>
<a id="tocsaugmentationdata"></a>

```json
{
  "changes": [
    {
      "from": "string",
      "op": "add",
      "path": "string",
      "value": {}
    }
  ],
  "relatedEntityId": "string",
  "relatedEntityType": "event",
  "score": 0,
  "source": "string",
  "versionNumber": 0
}
```

This class defines the Augmentation Data on the Publish API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[[Change](#schemachange)]|true|none|List of changes to apply to the related entity|
|relatedEntityId|string|true|none|Id of the entity to apply the augmentation data.|
|relatedEntityType|string|true|none|The type of the entity to apply the augmentation data.|
|score|number(float)|false|none|The confidence (%) level of the accuracy of this augmention data. 100 is the better|
|source|string|true|none|The source where the augementation data came from|
|versionNumber|integer(int64)|true|none|Vesion of this augmentation data. This field is to avoid updating entity with old data. |

#### Enumerated Values

|Property|Value|
|---|---|
|relatedEntityType|event|
|relatedEntityType|attraction|
|relatedEntityType|venue|

<h2 id="tocS_Change">Change</h2>
<!-- backwards compatibility -->
<a id="schemachange"></a>
<a id="schema_Change"></a>
<a id="tocSchange"></a>
<a id="tocschange"></a>

```json
{
  "from": "string",
  "op": "add",
  "path": "string",
  "value": {}
}
```

This class defines the Changes on the Publish API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|from|string|false|none|Json path of the source entity when using the move operation.|
|op|string|true|none|Operation to apply on the entity.|
|path|string|true|none|Json path from the root of the document to the place where the change should be applied.|
|value|object|false|none|Data to change. MUST be a valid json object.|

#### Enumerated Values

|Property|Value|
|---|---|
|op|add|
|op|remove|
|op|replace|
|op|move|
|op|copy|
|op|test|

<h2 id="tocS_Chronology">Chronology</h2>
<!-- backwards compatibility -->
<a id="schemachronology"></a>
<a id="schema_Chronology"></a>
<a id="tocSchronology"></a>
<a id="tocschronology"></a>

```json
{
  "zone": {
    "fixed": false,
    "id": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|zone|[DateTimeZone](#schemadatetimezone)|false|none|none|

<h2 id="tocS_City">City</h2>
<!-- backwards compatibility -->
<a id="schemacity"></a>
<a id="schema_City"></a>
<a id="tocScity"></a>
<a id="tocscity"></a>

```json
{
  "names": "en-us: name"
}
```

City

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|object|false|none|Names of the entity - multi-lingual fields|

<h2 id="tocS_Classification">Classification</h2>
<!-- backwards compatibility -->
<a id="schemaclassification"></a>
<a id="schema_Classification"></a>
<a id="tocSclassification"></a>
<a id="tocsclassification"></a>

```json
{
  "genre": {
    "id": "string",
    "names": {
      "property1": "string",
      "property2": "string"
    }
  },
  "primary": false,
  "segment": {
    "id": "string",
    "names": {
      "property1": "string",
      "property2": "string"
    }
  },
  "subGenre": {
    "id": "string",
    "names": {
      "property1": "string",
      "property2": "string"
    }
  },
  "subType": {
    "id": "string",
    "names": {
      "property1": "string",
      "property2": "string"
    }
  },
  "type": {
    "id": "string",
    "names": {
      "property1": "string",
      "property2": "string"
    }
  }
}
```

Classification

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|genre|[Level](#schemalevel)|false|none|none|
|primary|boolean|false|none|none|
|segment|[Segment](#schemasegment)|false|none|Segment|
|subGenre|[Level](#schemalevel)|false|none|none|
|subType|[Level](#schemalevel)|false|none|none|
|type|[Level](#schemalevel)|false|none|none|

<h2 id="tocS_Country">Country</h2>
<!-- backwards compatibility -->
<a id="schemacountry"></a>
<a id="schema_Country"></a>
<a id="tocScountry"></a>
<a id="tocscountry"></a>

```json
{
  "countryCode": "string",
  "names": "en-us: name"
}
```

Country

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|countryCode|string|false|none|Country code (ISO 3166)|
|names|object|false|none|Names of the entity - multi-lingual fields|

<h2 id="tocS_DateTimeField">DateTimeField</h2>
<!-- backwards compatibility -->
<a id="schemadatetimefield"></a>
<a id="schema_DateTimeField"></a>
<a id="tocSdatetimefield"></a>
<a id="tocsdatetimefield"></a>

```json
{
  "durationField": {
    "name": "string",
    "precise": false,
    "supported": false,
    "type": {
      "name": "string"
    },
    "unitMillis": 0
  },
  "leapDurationField": {
    "name": "string",
    "precise": false,
    "supported": false,
    "type": {
      "name": "string"
    },
    "unitMillis": 0
  },
  "lenient": false,
  "maximumValue": 0,
  "minimumValue": 0,
  "name": "string",
  "rangeDurationField": {
    "name": "string",
    "precise": false,
    "supported": false,
    "type": {
      "name": "string"
    },
    "unitMillis": 0
  },
  "supported": false,
  "type": {
    "durationType": {
      "name": "string"
    },
    "name": "string",
    "rangeDurationType": {
      "name": "string"
    }
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationField|[DurationField](#schemadurationfield)|false|none|none|
|leapDurationField|[DurationField](#schemadurationfield)|false|none|none|
|lenient|boolean|false|none|none|
|maximumValue|integer(int32)|false|none|none|
|minimumValue|integer(int32)|false|none|none|
|name|string|false|none|none|
|rangeDurationField|[DurationField](#schemadurationfield)|false|none|none|
|supported|boolean|false|none|none|
|type|[DateTimeFieldType](#schemadatetimefieldtype)|false|none|none|

<h2 id="tocS_DateTimeFieldType">DateTimeFieldType</h2>
<!-- backwards compatibility -->
<a id="schemadatetimefieldtype"></a>
<a id="schema_DateTimeFieldType"></a>
<a id="tocSdatetimefieldtype"></a>
<a id="tocsdatetimefieldtype"></a>

```json
{
  "durationType": {
    "name": "string"
  },
  "name": "string",
  "rangeDurationType": {
    "name": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|durationType|[DurationFieldType](#schemadurationfieldtype)|false|none|none|
|name|string|false|none|none|
|rangeDurationType|[DurationFieldType](#schemadurationfieldtype)|false|none|none|

<h2 id="tocS_DateTimeZone">DateTimeZone</h2>
<!-- backwards compatibility -->
<a id="schemadatetimezone"></a>
<a id="schema_DateTimeZone"></a>
<a id="tocSdatetimezone"></a>
<a id="tocsdatetimezone"></a>

```json
{
  "fixed": false,
  "id": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fixed|boolean|false|none|none|
|id|string|false|none|none|

<h2 id="tocS_DisplaySettingExtension">DisplaySettingExtension</h2>
<!-- backwards compatibility -->
<a id="schemadisplaysettingextension"></a>
<a id="schema_DisplaySettingExtension"></a>
<a id="tocSdisplaysettingextension"></a>
<a id="tocsdisplaysettingextension"></a>

```json
{}
```

Event's display settings extension

<h2 id="tocS_Dma">Dma</h2>
<!-- backwards compatibility -->
<a id="schemadma"></a>
<a id="schema_Dma"></a>
<a id="tocSdma"></a>
<a id="tocsdma"></a>

```json
{
  "id": 0
}
```

DMA (Designated Market Area)

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|DMS's id|

<h2 id="tocS_DurationField">DurationField</h2>
<!-- backwards compatibility -->
<a id="schemadurationfield"></a>
<a id="schema_DurationField"></a>
<a id="tocSdurationfield"></a>
<a id="tocsdurationfield"></a>

```json
{
  "name": "string",
  "precise": false,
  "supported": false,
  "type": {
    "name": "string"
  },
  "unitMillis": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|
|precise|boolean|false|none|none|
|supported|boolean|false|none|none|
|type|[DurationFieldType](#schemadurationfieldtype)|false|none|none|
|unitMillis|integer(int64)|false|none|none|

<h2 id="tocS_DurationFieldType">DurationFieldType</h2>
<!-- backwards compatibility -->
<a id="schemadurationfieldtype"></a>
<a id="schema_DurationFieldType"></a>
<a id="tocSdurationfieldtype"></a>
<a id="tocsdurationfieldtype"></a>

```json
{
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|name|string|false|none|none|

<h2 id="tocS_EndDates">EndDates</h2>
<!-- backwards compatibility -->
<a id="schemaenddates"></a>
<a id="schema_EndDates"></a>
<a id="tocSenddates"></a>
<a id="tocsenddates"></a>

```json
{
  "approximate": false,
  "dateTime": "yyyy-MM-ddThh-mm-ssZ",
  "localTime": {
    "chronology": {
      "zone": {
        "fixed": false,
        "id": "string"
      }
    },
    "fieldTypes": [
      {
        "durationType": {
          "name": "string"
        },
        "name": "string",
        "rangeDurationType": {
          "name": "string"
        }
      }
    ],
    "fields": [
      {
        "durationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "leapDurationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "lenient": false,
        "maximumValue": 0,
        "minimumValue": 0,
        "name": "string",
        "rangeDurationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "supported": false,
        "type": {
          "durationType": {
            "name": "string"
          },
          "name": "string",
          "rangeDurationType": {
            "name": "string"
          }
        }
      }
    ],
    "hourOfDay": 0,
    "millisOfDay": 0,
    "millisOfSecond": 0,
    "minuteOfHour": 0,
    "secondOfMinute": 0,
    "values": [
      0
    ]
  }
}
```

Event's End Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|approximate|boolean|false|none|Boolean flag to indicate whether or not the end date is approximated|
|dateTime|string(date-time)|false|none|The event end date time|
|localTime|[LocalTime](#schemalocaltime)|false|none|none|

<h2 id="tocS_Entitlement">Entitlement</h2>
<!-- backwards compatibility -->
<a id="schemaentitlement"></a>
<a id="schema_Entitlement"></a>
<a id="tocSentitlement"></a>
<a id="tocsentitlement"></a>

```json
{
  "data": {},
  "relatedEntityId": "string",
  "relatedEntitySource": {
    "id": "string",
    "name": "string"
  },
  "relatedEntityType": "event",
  "source": "ticketmaster",
  "versionNumber": 0
}
```

This class defines an entitlement data on the Publish API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The actual entitlements information to add to the entity|
|relatedEntityId|string|false|none|Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided|
|relatedEntitySource|[Source](#schemasource)|false|none|Source|
|relatedEntityType|string|true|none|The type of the entity to add this entitlement to|
|source|string|true|none|Source of the extension, where it came from|
|versionNumber|integer(int64)|false|none|Version of the entitlements. Version is to prevent to override an entitlements with an older one|

#### Enumerated Values

|Property|Value|
|---|---|
|relatedEntityType|event|
|relatedEntityType|venue|
|relatedEntityType|attraction|
|source|ticketmaster|

<h2 id="tocS_EntityChanges">EntityChanges</h2>
<!-- backwards compatibility -->
<a id="schemaentitychanges"></a>
<a id="schema_EntityChanges"></a>
<a id="tocSentitychanges"></a>
<a id="tocsentitychanges"></a>

```json
{
  "changes": [
    "string"
  ],
  "newlyCreated": false
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|changes|[string]|false|none|none|
|newlyCreated|boolean|false|none|none|

<h2 id="tocS_Event">Event</h2>
<!-- backwards compatibility -->
<a id="schemaevent"></a>
<a id="schema_Event"></a>
<a id="tocSevent"></a>
<a id="tocsevent"></a>

```json
{
  "active": false,
  "additionalInfos": "en-us: additionalInfo",
  "attractions": [
    {
      "active": false,
      "additionalInfos": "en-us: additionalInfo",
      "classifications": [
        {
          "genre": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          },
          "primary": false,
          "segment": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          },
          "subGenre": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          },
          "subType": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          },
          "type": {
            "id": "string",
            "names": {
              "property1": "string",
              "property2": "string"
            }
          }
        }
      ],
      "descriptions": "en-us: description",
      "discoverable": false,
      "images": [
        {
          "attribution": "string",
          "domains": [
            "string"
          ],
          "fallback": false,
          "height": 0,
          "ratio": "16_9",
          "url": "string",
          "width": 0
        }
      ],
      "names": "en-us: name",
      "references": "sourceName: id",
      "relationships": [
        {}
      ],
      "source": {
        "id": "string",
        "name": "string"
      },
      "test": false,
      "type": "event",
      "url": "string",
      "version": 0
    }
  ],
  "classifications": [
    {
      "genre": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "primary": false,
      "segment": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "subGenre": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "subType": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      },
      "type": {
        "id": "string",
        "names": {
          "property1": "string",
          "property2": "string"
        }
      }
    }
  ],
  "dates": {
    "access": {
      "endApproximate": "yyyy-MM-ddThh-mm-ssZ",
      "endDateTime": "yyyy-MM-ddThh-mm-ssZ",
      "startApproximate": false,
      "startDateTime": "yyyy-MM-ddThh-mm-ssZ"
    },
    "end": {
      "approximate": false,
      "dateTime": "yyyy-MM-ddThh-mm-ssZ",
      "localTime": {
        "chronology": {
          "zone": {
            "fixed": false,
            "id": "string"
          }
        },
        "fieldTypes": [
          {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        ],
        "fields": [
          {
            "durationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "leapDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "lenient": false,
            "maximumValue": 0,
            "minimumValue": 0,
            "name": "string",
            "rangeDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "supported": false,
            "type": {
              "durationType": {
                "name": "string"
              },
              "name": "string",
              "rangeDurationType": {
                "name": "string"
              }
            }
          }
        ],
        "hourOfDay": 0,
        "millisOfDay": 0,
        "millisOfSecond": 0,
        "minuteOfHour": 0,
        "secondOfMinute": 0,
        "values": [
          0
        ]
      }
    },
    "start": {
      "dateTBA": false,
      "dateTBD": false,
      "dateTime": "yyyy-MM-ddThh:mm:ssZ",
      "localDate": "yyyy-MM-dd",
      "localTime": {
        "chronology": {
          "zone": {
            "fixed": false,
            "id": "string"
          }
        },
        "fieldTypes": [
          {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        ],
        "fields": [
          {
            "durationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "leapDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "lenient": false,
            "maximumValue": 0,
            "minimumValue": 0,
            "name": "string",
            "rangeDurationField": {
              "name": "string",
              "precise": false,
              "supported": false,
              "type": {
                "name": "string"
              },
              "unitMillis": 0
            },
            "supported": false,
            "type": {
              "durationType": {
                "name": "string"
              },
              "name": "string",
              "rangeDurationType": {
                "name": "string"
              }
            }
          }
        ],
        "hourOfDay": 0,
        "millisOfDay": 0,
        "millisOfSecond": 0,
        "minuteOfHour": 0,
        "secondOfMinute": 0,
        "values": [
          0
        ]
      },
      "noSpecificTime": false,
      "timeTBA": false
    },
    "status": {
      "code": "onsale"
    },
    "timezone": "string"
  },
  "descriptions": "en-us: description",
  "discoverable": false,
  "distance": 0,
  "images": [
    {
      "attribution": "string",
      "domains": [
        "string"
      ],
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "infos": "en-us: info",
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "names": "en-us: name",
  "place": {
    "address": {
      "line1s": "en-us: line1",
      "line2s": "en-us:line2",
      "line3s": "en-us:line3"
    },
    "area": {
      "names": "en-us: name"
    },
    "city": {
      "names": "en-us: name"
    },
    "country": {
      "countryCode": "string",
      "names": "en-us: name"
    },
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "names": "en-us: name",
    "postalCode": "string",
    "state": {
      "names": "en-us: name",
      "stateCode": "string"
    }
  },
  "pleaseNotes": "en-us: note",
  "priceRanges": [
    {
      "currency": "string",
      "max": 0,
      "min": 0,
      "type": "standard"
    }
  ],
  "promoter": {
    "descriptions": "en-us: description",
    "id": "string",
    "names": "en-us: name"
  },
  "publicVisibility": {
    "endDateTime": "1970-01-01T00:00:00Z",
    "startDateTime": "1970-01-01T00:00:00Z",
    "visible": false
  },
  "references": "sourceName: id",
  "relationships": [
    {}
  ],
  "sales": {
    "presales": [
      {
        "descriptions": "en-us: description",
        "endDateTime": "1970-01-01T00:00:00Z",
        "names": "en-us: name",
        "startDateTime": "1970-01-01T00:00:00Z",
        "url": "string"
      }
    ],
    "public": {
      "endDateTime": "1970-01-01T00:00:00Z",
      "startDateTime": "1970-01-01T00:00:00Z",
      "startTBD": false
    }
  },
  "source": {
    "id": "string",
    "name": "string"
  },
  "test": false,
  "type": "event",
  "units": "string",
  "url": "string",
  "venue": {
    "accessibleSeatingDetails": "en-us:seatingDetails",
    "active": false,
    "additionalInfos": "en-us: additionalInfo",
    "address": {
      "line1s": "en-us: line1",
      "line2s": "en-us:line2",
      "line3s": "en-us:line3"
    },
    "boxOfficeInfo": {
      "acceptedPaymentDetails": "en-us:paymentDetails",
      "openHoursDetails": "en-us:openHours",
      "phoneNumberDetails": "en-us:phoneNumbers",
      "willCallDetails": "en-us:willCall"
    },
    "city": {
      "names": "en-us: name"
    },
    "country": {
      "countryCode": "string",
      "names": "en-us: name"
    },
    "currency": "string",
    "descriptions": "en-us: description",
    "discoverable": false,
    "distance": 0,
    "dma": [
      {
        "id": 0
      }
    ],
    "generalInfo": {
      "childRules": "en-us: rule",
      "generalRules": "en-us: rule"
    },
    "images": [
      {
        "attribution": "string",
        "domains": [
          "string"
        ],
        "fallback": false,
        "height": 0,
        "ratio": "16_9",
        "url": "string",
        "width": 0
      }
    ],
    "location": {
      "latitude": 0,
      "longitude": 0
    },
    "markets": [
      {
        "id": "string"
      }
    ],
    "names": "en-us: name",
    "parkingDetails": "en-us:parkingDetails",
    "postalCode": "string",
    "references": "sourceName: id",
    "relationships": [
      {}
    ],
    "social": {
      "twitter": {
        "handle": "@a Twitter handle exampe",
        "hashtags": "#hashtag example #hashtag another example"
      }
    },
    "source": {
      "id": "string",
      "name": "string"
    },
    "state": {
      "names": "en-us: name",
      "stateCode": "string"
    },
    "test": false,
    "timezone": "string",
    "type": "event",
    "units": "string",
    "url": "string",
    "version": 0
  },
  "version": 0
}
```

Event

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|Indicate if the entity is active, inactive entity won't appear in Discovery API|
|additionalInfos|object|false|none|Additional informations of the entity - multi-lingual fields|
|attractions|[[Attraction](#schemaattraction)]|false|none|Ordered Attraction related to the event|
|classifications|[[Classification](#schemaclassification)]|false|none|Event's classifications|
|dates|[EventDates](#schemaeventdates)|false|none|Event's Dates|
|descriptions|object|false|none|Descriptions of the entity - multi-lingual fields|
|discoverable|boolean|false|none|True if the entity is dicoverable in discovery API|
|distance|number(double)|false|none|none|
|images|[[Image](#schemaimage)]|false|none|Images of the entity|
|infos|object|false|none|Any information related to the event - multi-lingual fields|
|location|[Location](#schemalocation)|false|none|Location|
|names|object|false|none|Names of the entity - multi-lingual fields|
|place|[Place](#schemaplace)|false|none|Place|
|pleaseNotes|object|false|none|Any notes related to the event - multi-lingual fields|
|priceRanges|[[PriceRange](#schemapricerange)]|false|none|Price ranges of this event|
|promoter|[Promoter](#schemapromoter)|false|none|Promoter|
|publicVisibility|[PublicVisibility](#schemapublicvisibility)|false|none|The class defines the public visibility period on the Discovery/Publish API.|
|references|object|false|none|References of this entity in an other system. Reference is the exact same entity|
|relationships|[[Relationship](#schemarelationship)]|false|none|Relationships on the entity, like if the entity is a duplicate of another one|
|sales|[EventSalesDates](#schemaeventsalesdates)|false|none|Event's Sales Dates|
|source|[Source](#schemasource)|false|none|Source|
|test|boolean|false|none|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|type|string|true|none|Type of the entity|
|units|string|false|none|none|
|url|string|false|none|URL of a web site detail page of the entity|
|venue|[Venue](#schemavenue)|false|none|Venue|
|version|integer(int64)|false|none|Version of the entity. Version is to avoid updated an entity with an older version|

#### Enumerated Values

|Property|Value|
|---|---|
|type|event|
|type|venue|
|type|attraction|

<h2 id="tocS_EventDates">EventDates</h2>
<!-- backwards compatibility -->
<a id="schemaeventdates"></a>
<a id="schema_EventDates"></a>
<a id="tocSeventdates"></a>
<a id="tocseventdates"></a>

```json
{
  "access": {
    "endApproximate": "yyyy-MM-ddThh-mm-ssZ",
    "endDateTime": "yyyy-MM-ddThh-mm-ssZ",
    "startApproximate": false,
    "startDateTime": "yyyy-MM-ddThh-mm-ssZ"
  },
  "end": {
    "approximate": false,
    "dateTime": "yyyy-MM-ddThh-mm-ssZ",
    "localTime": {
      "chronology": {
        "zone": {
          "fixed": false,
          "id": "string"
        }
      },
      "fieldTypes": [
        {
          "durationType": {
            "name": "string"
          },
          "name": "string",
          "rangeDurationType": {
            "name": "string"
          }
        }
      ],
      "fields": [
        {
          "durationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "leapDurationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "lenient": false,
          "maximumValue": 0,
          "minimumValue": 0,
          "name": "string",
          "rangeDurationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "supported": false,
          "type": {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        }
      ],
      "hourOfDay": 0,
      "millisOfDay": 0,
      "millisOfSecond": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "values": [
        0
      ]
    }
  },
  "start": {
    "dateTBA": false,
    "dateTBD": false,
    "dateTime": "yyyy-MM-ddThh:mm:ssZ",
    "localDate": "yyyy-MM-dd",
    "localTime": {
      "chronology": {
        "zone": {
          "fixed": false,
          "id": "string"
        }
      },
      "fieldTypes": [
        {
          "durationType": {
            "name": "string"
          },
          "name": "string",
          "rangeDurationType": {
            "name": "string"
          }
        }
      ],
      "fields": [
        {
          "durationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "leapDurationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "lenient": false,
          "maximumValue": 0,
          "minimumValue": 0,
          "name": "string",
          "rangeDurationField": {
            "name": "string",
            "precise": false,
            "supported": false,
            "type": {
              "name": "string"
            },
            "unitMillis": 0
          },
          "supported": false,
          "type": {
            "durationType": {
              "name": "string"
            },
            "name": "string",
            "rangeDurationType": {
              "name": "string"
            }
          }
        }
      ],
      "hourOfDay": 0,
      "millisOfDay": 0,
      "millisOfSecond": 0,
      "minuteOfHour": 0,
      "secondOfMinute": 0,
      "values": [
        0
      ]
    },
    "noSpecificTime": false,
    "timeTBA": false
  },
  "status": {
    "code": "onsale"
  },
  "timezone": "string"
}
```

Event's Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access|[AccessDates](#schemaaccessdates)|false|none|Event's Access Date|
|end|[EndDates](#schemaenddates)|false|none|Event's End Dates|
|start|[StartDates](#schemastartdates)|false|none|Event's Start Dates|
|status|[EventStatus](#schemaeventstatus)|false|none|Event's Status|
|timezone|string|false|none|Event's timezone|

<h2 id="tocS_EventExtensions">EventExtensions</h2>
<!-- backwards compatibility -->
<a id="schemaeventextensions"></a>
<a id="schema_EventExtensions"></a>
<a id="tocSeventextensions"></a>
<a id="tocseventextensions"></a>

```json
{}
```

All Event's extensions

<h2 id="tocS_EventSalesDates">EventSalesDates</h2>
<!-- backwards compatibility -->
<a id="schemaeventsalesdates"></a>
<a id="schema_EventSalesDates"></a>
<a id="tocSeventsalesdates"></a>
<a id="tocseventsalesdates"></a>

```json
{
  "presales": [
    {
      "descriptions": "en-us: description",
      "endDateTime": "1970-01-01T00:00:00Z",
      "names": "en-us: name",
      "startDateTime": "1970-01-01T00:00:00Z",
      "url": "string"
    }
  ],
  "public": {
    "endDateTime": "1970-01-01T00:00:00Z",
    "startDateTime": "1970-01-01T00:00:00Z",
    "startTBD": false
  }
}
```

Event's Sales Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|presales|[[Presale](#schemapresale)]|false|none|Presale information on this event|
|public|[PublicSaleDates](#schemapublicsaledates)|false|none|Event's Public Onsales Dates|

<h2 id="tocS_EventStatus">EventStatus</h2>
<!-- backwards compatibility -->
<a id="schemaeventstatus"></a>
<a id="schema_EventStatus"></a>
<a id="tocSeventstatus"></a>
<a id="tocseventstatus"></a>

```json
{
  "code": "onsale"
}
```

Event's Status

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|code|string|false|none|The event's status code|

#### Enumerated Values

|Property|Value|
|---|---|
|code|onsale|
|code|offsale|
|code|canceled|
|code|postponed|
|code|rescheduled|

<h2 id="tocS_Extension">Extension</h2>
<!-- backwards compatibility -->
<a id="schemaextension"></a>
<a id="schema_Extension"></a>
<a id="tocSextension"></a>
<a id="tocsextension"></a>

```json
{}
```

<h2 id="tocS_ExtensionData">ExtensionData</h2>
<!-- backwards compatibility -->
<a id="schemaextensiondata"></a>
<a id="schema_ExtensionData"></a>
<a id="tocSextensiondata"></a>
<a id="tocsextensiondata"></a>

```json
{
  "data": {},
  "relatedEntityId": "string",
  "relatedEntitySource": {
    "id": "string",
    "name": "string"
  },
  "relatedEntityType": "event",
  "source": "string",
  "type": "string",
  "versionNumber": 0
}
```

This class defines an extenstion data on the Publish API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|true|none|The actual information to add to the entity|
|relatedEntityId|string|false|none|Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided|
|relatedEntitySource|[Source](#schemasource)|false|none|Source|
|relatedEntityType|string|true|none|The type of the entity to add this extensions to|
|source|string|true|none|Source of the extension, where it came from|
|type|string|true|none|The type of the extension. This represent the data sent|
|versionNumber|integer(int64)|false|none|Version of the extensions. Version is to prevent to override an extension with an older one|

#### Enumerated Values

|Property|Value|
|---|---|
|relatedEntityType|event|
|relatedEntityType|venue|
|relatedEntityType|attraction|

<h2 id="tocS_GeocodeExtension">GeocodeExtension</h2>
<!-- backwards compatibility -->
<a id="schemageocodeextension"></a>
<a id="schema_GeocodeExtension"></a>
<a id="tocSgeocodeextension"></a>
<a id="tocsgeocodeextension"></a>

```json
{
  "city": "string",
  "country": "string",
  "county": "string",
  "formattedAddress": "string",
  "geometry": {
    "location": {
      "latitude": 0,
      "longitude": 0
    }
  },
  "postalCode": "string",
  "route": "string",
  "state": "string",
  "streetNumber": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|city|string|false|none|none|
|country|string|false|none|none|
|county|string|false|none|none|
|formattedAddress|string|false|none|none|
|geometry|[Geometry](#schemageometry)|false|none|none|
|postalCode|string|false|none|none|
|route|string|false|none|none|
|state|string|false|none|none|
|streetNumber|string|false|none|none|

<h2 id="tocS_GeolocationVenueExtensions">GeolocationVenueExtensions</h2>
<!-- backwards compatibility -->
<a id="schemageolocationvenueextensions"></a>
<a id="schema_GeolocationVenueExtensions"></a>
<a id="tocSgeolocationvenueextensions"></a>
<a id="tocsgeolocationvenueextensions"></a>

```json
{}
```

Venue's geocode extension

<h2 id="tocS_Geometry">Geometry</h2>
<!-- backwards compatibility -->
<a id="schemageometry"></a>
<a id="schema_Geometry"></a>
<a id="tocSgeometry"></a>
<a id="tocsgeometry"></a>

```json
{
  "location": {
    "latitude": 0,
    "longitude": 0
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|location|[Location](#schemalocation)|false|none|Location|

<h2 id="tocS_HostExtension">HostExtension</h2>
<!-- backwards compatibility -->
<a id="schemahostextension"></a>
<a id="schema_HostExtension"></a>
<a id="tocShostextension"></a>
<a id="tocshostextension"></a>

```json
{}
```

Venue's Host extension

<h2 id="tocS_Image">Image</h2>
<!-- backwards compatibility -->
<a id="schemaimage"></a>
<a id="schema_Image"></a>
<a id="tocSimage"></a>
<a id="tocsimage"></a>

```json
{
  "attribution": "string",
  "domains": [
    "string"
  ],
  "fallback": false,
  "height": 0,
  "ratio": "16_9",
  "url": "string",
  "width": 0
}
```

Image

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|attribution|string|false|none|Attribution of the image|
|domains|[string]|false|none|Domains on which this image should be displayed|
|fallback|boolean|false|none|true if the image is not the event's image but a fallbak image|
|height|integer(int32)|false|none|Height of the image|
|ratio|string|false|none|Aspect ratio of the image|
|url|string|false|none|Public URL of the image|
|width|integer(int32)|false|none|Width of the image|

#### Enumerated Values

|Property|Value|
|---|---|
|ratio|16_9|
|ratio|3_2|
|ratio|4_3|

<h2 id="tocS_IngestionResult">IngestionResult</h2>
<!-- backwards compatibility -->
<a id="schemaingestionresult"></a>
<a id="schema_IngestionResult"></a>
<a id="tocSingestionresult"></a>
<a id="tocsingestionresult"></a>

```json
{
  "id": "string",
  "ignoredProperties": {
    "property1": {},
    "property2": {}
  },
  "invalidProperties": {
    "property1": {},
    "property2": {}
  },
  "invalidValues": {
    "property1": {},
    "property2": {}
  },
  "missingProperties": {
    "property1": {},
    "property2": {}
  },
  "status": "Error",
  "unknownProperties": {
    "property1": {},
    "property2": {}
  }
}
```

This class defines the IngestionResult on the Publish API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Id of the entity ingested in the discovery api|
|ignoredProperties|object|false|none|List properties that are ignored in the validation|
|invalidProperties|object|false|none|List of invalid properties|
|invalidValues|object|false|none|List of invalid values|
|missingProperties|object|false|none|List of properties that should be present in your entity to ease its dicovery|
|status|string|true|none|Status of the result|
|unknownProperties|object|false|none|List of unknown properties that will be dropped|

#### Enumerated Values

|Property|Value|
|---|---|
|status|Error|
|status|SuccessWarning|
|status|Success|

<h2 id="tocS_Level">Level</h2>
<!-- backwards compatibility -->
<a id="schemalevel"></a>
<a id="schema_Level"></a>
<a id="tocSlevel"></a>
<a id="tocslevel"></a>

```json
{
  "id": "string",
  "names": {
    "property1": "string",
    "property2": "string"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the classification's level|
|names|object|false|none|The Name of the classification's level - multi-lingual fields|

<h2 id="tocS_LicensingInformation">LicensingInformation</h2>
<!-- backwards compatibility -->
<a id="schemalicensinginformation"></a>
<a id="schema_LicensingInformation"></a>
<a id="tocSlicensinginformation"></a>
<a id="tocslicensinginformation"></a>

```json
{
  "license": "string",
  "regionRestriction": {
    "allowed": [
      "string"
    ]
  }
}
```

This class defines an entitlement data on the Publish API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|license|string|true|none|License name|
|regionRestriction|[RegionRestrictions](#schemaregionrestrictions)|false|none|This class defines an entitlement data on the Publish API|

<h2 id="tocS_LocalTime">LocalTime</h2>
<!-- backwards compatibility -->
<a id="schemalocaltime"></a>
<a id="schema_LocalTime"></a>
<a id="tocSlocaltime"></a>
<a id="tocslocaltime"></a>

```json
{
  "chronology": {
    "zone": {
      "fixed": false,
      "id": "string"
    }
  },
  "fieldTypes": [
    {
      "durationType": {
        "name": "string"
      },
      "name": "string",
      "rangeDurationType": {
        "name": "string"
      }
    }
  ],
  "fields": [
    {
      "durationField": {
        "name": "string",
        "precise": false,
        "supported": false,
        "type": {
          "name": "string"
        },
        "unitMillis": 0
      },
      "leapDurationField": {
        "name": "string",
        "precise": false,
        "supported": false,
        "type": {
          "name": "string"
        },
        "unitMillis": 0
      },
      "lenient": false,
      "maximumValue": 0,
      "minimumValue": 0,
      "name": "string",
      "rangeDurationField": {
        "name": "string",
        "precise": false,
        "supported": false,
        "type": {
          "name": "string"
        },
        "unitMillis": 0
      },
      "supported": false,
      "type": {
        "durationType": {
          "name": "string"
        },
        "name": "string",
        "rangeDurationType": {
          "name": "string"
        }
      }
    }
  ],
  "hourOfDay": 0,
  "millisOfDay": 0,
  "millisOfSecond": 0,
  "minuteOfHour": 0,
  "secondOfMinute": 0,
  "values": [
    0
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|chronology|[Chronology](#schemachronology)|false|none|none|
|fieldTypes|[[DateTimeFieldType](#schemadatetimefieldtype)]|false|none|none|
|fields|[[DateTimeField](#schemadatetimefield)]|false|none|none|
|hourOfDay|integer(int32)|false|none|none|
|millisOfDay|integer(int32)|false|none|none|
|millisOfSecond|integer(int32)|false|none|none|
|minuteOfHour|integer(int32)|false|none|none|
|secondOfMinute|integer(int32)|false|none|none|
|values|[integer(int32)]|false|none|none|

<h2 id="tocS_Locale">Locale</h2>
<!-- backwards compatibility -->
<a id="schemalocale"></a>
<a id="schema_Locale"></a>
<a id="tocSlocale"></a>
<a id="tocslocale"></a>

```json
{
  "country": "string",
  "displayCountry": "string",
  "displayLanguage": "string",
  "displayName": "string",
  "displayScript": "string",
  "displayVariant": "string",
  "extensionKeys": [
    "string"
  ],
  "iso3Country": "string",
  "iso3Language": "string",
  "language": "string",
  "script": "string",
  "unicodeLocaleAttributes": [
    "string"
  ],
  "unicodeLocaleKeys": [
    "string"
  ],
  "variant": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|country|string|false|none|none|
|displayCountry|string|false|none|none|
|displayLanguage|string|false|none|none|
|displayName|string|false|none|none|
|displayScript|string|false|none|none|
|displayVariant|string|false|none|none|
|extensionKeys|[string]|false|none|none|
|iso3Country|string|false|none|none|
|iso3Language|string|false|none|none|
|language|string|false|none|none|
|script|string|false|none|none|
|unicodeLocaleAttributes|[string]|false|none|none|
|unicodeLocaleKeys|[string]|false|none|none|
|variant|string|false|none|none|

<h2 id="tocS_Location">Location</h2>
<!-- backwards compatibility -->
<a id="schemalocation"></a>
<a id="schema_Location"></a>
<a id="tocSlocation"></a>
<a id="tocslocation"></a>

```json
{
  "latitude": 0,
  "longitude": 0
}
```

Location

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|latitude|number|false|none|Latitude|
|longitude|number|false|none|Longitude|

<h2 id="tocS_Market">Market</h2>
<!-- backwards compatibility -->
<a id="schemamarket"></a>
<a id="schema_Market"></a>
<a id="tocSmarket"></a>
<a id="tocsmarket"></a>

```json
{
  "id": "string"
}
```

Market

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Market's id|

<h2 id="tocS_Parking">Parking</h2>
<!-- backwards compatibility -->
<a id="schemaparking"></a>
<a id="schema_Parking"></a>
<a id="tocSparking"></a>
<a id="tocsparking"></a>

```json
{
  "names": "en-us: name",
  "url": "string"
}
```

Parking

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|object|false|none|Names of the entity - multi-lingual fields|
|url|string|false|none|Url to the web page of the parking|

<h2 id="tocS_Place">Place</h2>
<!-- backwards compatibility -->
<a id="schemaplace"></a>
<a id="schema_Place"></a>
<a id="tocSplace"></a>
<a id="tocsplace"></a>

```json
{
  "address": {
    "line1s": "en-us: line1",
    "line2s": "en-us:line2",
    "line3s": "en-us:line3"
  },
  "area": {
    "names": "en-us: name"
  },
  "city": {
    "names": "en-us: name"
  },
  "country": {
    "countryCode": "string",
    "names": "en-us: name"
  },
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "names": "en-us: name",
  "postalCode": "string",
  "state": {
    "names": "en-us: name",
    "stateCode": "string"
  }
}
```

Place

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|address|[Address](#schemaaddress)|false|none|Address|
|area|[Area](#schemaarea)|false|none|Area|
|city|[City](#schemacity)|false|none|City|
|country|[Country](#schemacountry)|false|none|Country|
|location|[Location](#schemalocation)|false|none|Location|
|names|object|false|none|Names of the entity - multi-lingual fields|
|postalCode|string|false|none|Postal code / zipcode of the place|
|state|[State](#schemastate)|false|none|State|

<h2 id="tocS_Presale">Presale</h2>
<!-- backwards compatibility -->
<a id="schemapresale"></a>
<a id="schema_Presale"></a>
<a id="tocSpresale"></a>
<a id="tocspresale"></a>

```json
{
  "descriptions": "en-us: description",
  "endDateTime": "1970-01-01T00:00:00Z",
  "names": "en-us: name",
  "startDateTime": "1970-01-01T00:00:00Z",
  "url": "string"
}
```

Event's Presale Info

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptions|object|false|none|Description of the presale - multi-lingual fields|
|endDateTime|string(date-time)|false|none|Presale's end dates. The date and time when the presale will end|
|names|object|false|none|Name of the presale - multi-lingual fields|
|startDateTime|string(date-time)|false|none|Presale's start dates. The date and time when the presale will start|
|url|string|false|none|Presale link URL|

<h2 id="tocS_PriceRange">PriceRange</h2>
<!-- backwards compatibility -->
<a id="schemapricerange"></a>
<a id="schema_PriceRange"></a>
<a id="tocSpricerange"></a>
<a id="tocspricerange"></a>

```json
{
  "currency": "string",
  "max": 0,
  "min": 0,
  "type": "standard"
}
```

PriceRange

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currency|string|false|none|Currency|
|max|number(double)|false|none|Maximum price|
|min|number(double)|false|none|Minimum price|
|type|string|false|none|Type of price|

#### Enumerated Values

|Property|Value|
|---|---|
|type|standard|

<h2 id="tocS_Promoter">Promoter</h2>
<!-- backwards compatibility -->
<a id="schemapromoter"></a>
<a id="schema_Promoter"></a>
<a id="tocSpromoter"></a>
<a id="tocspromoter"></a>

```json
{
  "descriptions": "en-us: description",
  "id": "string",
  "names": "en-us: name"
}
```

Promoter

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|descriptions|object|false|none|Description of the promoter - multi-lingual fields|
|id|string|false|none|Id of the promoter|
|names|object|false|none|Name of the promoter - multi-lingual fields|

<h2 id="tocS_PublicSaleDates">PublicSaleDates</h2>
<!-- backwards compatibility -->
<a id="schemapublicsaledates"></a>
<a id="schema_PublicSaleDates"></a>
<a id="tocSpublicsaledates"></a>
<a id="tocspublicsaledates"></a>

```json
{
  "endDateTime": "1970-01-01T00:00:00Z",
  "startDateTime": "1970-01-01T00:00:00Z",
  "startTBD": false
}
```

Event's Public Onsales Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDateTime|string(date-time)|false|none|Public sale's end dates. The date and time when the public sale will end|
|startDateTime|string(date-time)|false|none|Public sale's start dates. The date and time when the public sale will start|
|startTBD|boolean|false|none|True if the public sale's date is to be determined|

<h2 id="tocS_PublicVisibility">PublicVisibility</h2>
<!-- backwards compatibility -->
<a id="schemapublicvisibility"></a>
<a id="schema_PublicVisibility"></a>
<a id="tocSpublicvisibility"></a>
<a id="tocspublicvisibility"></a>

```json
{
  "endDateTime": "1970-01-01T00:00:00Z",
  "startDateTime": "1970-01-01T00:00:00Z",
  "visible": false
}
```

The class defines the public visibility period on the Discovery/Publish API.

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|endDateTime|string(date-time)|false|none|The end of the public visibility. The date and time when the event will be public visible|
|startDateTime|string(date-time)|false|none|The start of the public visibility. The date and time when the event will be public visible|
|visible|boolean|false|none|True if you want to have the event visible in the discovery API|

<h2 id="tocS_RegionRestrictions">RegionRestrictions</h2>
<!-- backwards compatibility -->
<a id="schemaregionrestrictions"></a>
<a id="schema_RegionRestrictions"></a>
<a id="tocSregionrestrictions"></a>
<a id="tocsregionrestrictions"></a>

```json
{
  "allowed": [
    "string"
  ]
}
```

This class defines an entitlement data on the Publish API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|[string]|false|none|Restrictions based on regions|

<h2 id="tocS_Relationship">Relationship</h2>
<!-- backwards compatibility -->
<a id="schemarelationship"></a>
<a id="schema_Relationship"></a>
<a id="tocSrelationship"></a>
<a id="tocsrelationship"></a>

```json
{}
```

Relationship

<h2 id="tocS_Segment">Segment</h2>
<!-- backwards compatibility -->
<a id="schemasegment"></a>
<a id="schema_Segment"></a>
<a id="tocSsegment"></a>
<a id="tocssegment"></a>

```json
{
  "id": "string",
  "names": {
    "property1": "string",
    "property2": "string"
  }
}
```

Segment

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The ID of the classification's level|
|names|object|false|none|The Name of the classification's level - multi-lingual fields|

<h2 id="tocS_Social">Social</h2>
<!-- backwards compatibility -->
<a id="schemasocial"></a>
<a id="schema_Social"></a>
<a id="tocSsocial"></a>
<a id="tocssocial"></a>

```json
{
  "twitter": {
    "handle": "@a Twitter handle exampe",
    "hashtags": "#hashtag example #hashtag another example"
  }
}
```

Social networks data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|twitter|[Twitter](#schematwitter)|false|none|Twitter data|

<h2 id="tocS_Source">Source</h2>
<!-- backwards compatibility -->
<a id="schemasource"></a>
<a id="schema_Source"></a>
<a id="tocSsource"></a>
<a id="tocssource"></a>

```json
{
  "id": "string",
  "name": "string"
}
```

Source

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID of the entity in the source's system|
|name|string|false|none|Source's name|

<h2 id="tocS_StartDates">StartDates</h2>
<!-- backwards compatibility -->
<a id="schemastartdates"></a>
<a id="schema_StartDates"></a>
<a id="tocSstartdates"></a>
<a id="tocsstartdates"></a>

```json
{
  "dateTBA": false,
  "dateTBD": false,
  "dateTime": "yyyy-MM-ddThh:mm:ssZ",
  "localDate": "yyyy-MM-dd",
  "localTime": {
    "chronology": {
      "zone": {
        "fixed": false,
        "id": "string"
      }
    },
    "fieldTypes": [
      {
        "durationType": {
          "name": "string"
        },
        "name": "string",
        "rangeDurationType": {
          "name": "string"
        }
      }
    ],
    "fields": [
      {
        "durationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "leapDurationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "lenient": false,
        "maximumValue": 0,
        "minimumValue": 0,
        "name": "string",
        "rangeDurationField": {
          "name": "string",
          "precise": false,
          "supported": false,
          "type": {
            "name": "string"
          },
          "unitMillis": 0
        },
        "supported": false,
        "type": {
          "durationType": {
            "name": "string"
          },
          "name": "string",
          "rangeDurationType": {
            "name": "string"
          }
        }
      }
    ],
    "hourOfDay": 0,
    "millisOfDay": 0,
    "millisOfSecond": 0,
    "minuteOfHour": 0,
    "secondOfMinute": 0,
    "values": [
      0
    ]
  },
  "noSpecificTime": false,
  "timeTBA": false
}
```

Event's Start Dates

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|dateTBA|boolean|false|none|Boolean flag to indicate whether or not the start date is TBA|
|dateTBD|boolean|false|none|Boolean flag to indicate whether or not the start date is TBD|
|dateTime|string(date-time)|false|none|The event start datetime|
|localDate|string(date)|false|none|The event start date in local date|
|localTime|[LocalTime](#schemalocaltime)|false|none|none|
|noSpecificTime|boolean|false|none|Boolean flag to indicate whether or not the event has no specific time|
|timeTBA|boolean|false|none|Boolean flag to indicate whether or not the start time is TBA|

<h2 id="tocS_State">State</h2>
<!-- backwards compatibility -->
<a id="schemastate"></a>
<a id="schema_State"></a>
<a id="tocSstate"></a>
<a id="tocsstate"></a>

```json
{
  "names": "en-us: name",
  "stateCode": "string"
}
```

State

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|names|object|false|none|Names of the entity - multi-lingual fields|
|stateCode|string|false|none|State code|

<h2 id="tocS_TatExtension">TatExtension</h2>
<!-- backwards compatibility -->
<a id="schematatextension"></a>
<a id="schema_TatExtension"></a>
<a id="tocStatextension"></a>
<a id="tocstatextension"></a>

```json
{}
```

The Attraction Tool (TAT) extension

<h2 id="tocS_TicketmasterAttractionExtensions">TicketmasterAttractionExtensions</h2>
<!-- backwards compatibility -->
<a id="schematicketmasterattractionextensions"></a>
<a id="schema_TicketmasterAttractionExtensions"></a>
<a id="tocSticketmasterattractionextensions"></a>
<a id="tocsticketmasterattractionextensions"></a>

```json
{}
```

Attraction's extension (ticketmaster source)

<h2 id="tocS_TicketmasterEventExtensions">TicketmasterEventExtensions</h2>
<!-- backwards compatibility -->
<a id="schematicketmastereventextensions"></a>
<a id="schema_TicketmasterEventExtensions"></a>
<a id="tocSticketmastereventextensions"></a>
<a id="tocsticketmastereventextensions"></a>

```json
{}
```

Event's extension (ticketmaster source)

<h2 id="tocS_TicketmasterVenueExtensions">TicketmasterVenueExtensions</h2>
<!-- backwards compatibility -->
<a id="schematicketmastervenueextensions"></a>
<a id="schema_TicketmasterVenueExtensions"></a>
<a id="tocSticketmastervenueextensions"></a>
<a id="tocsticketmastervenueextensions"></a>

```json
{}
```

Venue's extension (ticketmaster source)

<h2 id="tocS_Twitter">Twitter</h2>
<!-- backwards compatibility -->
<a id="schematwitter"></a>
<a id="schema_Twitter"></a>
<a id="tocStwitter"></a>
<a id="tocstwitter"></a>

```json
{
  "handle": "@a Twitter handle exampe",
  "hashtags": "#hashtag example #hashtag another example"
}
```

Twitter data

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|handle|string|false|none|Twitter handle|
|hashtags|[string]|false|none|Twitter hashtags|

#### Enumerated Values

|Property|Value|
|---|---|
|handle|@a Twitter handle|

<h2 id="tocS_Venue">Venue</h2>
<!-- backwards compatibility -->
<a id="schemavenue"></a>
<a id="schema_Venue"></a>
<a id="tocSvenue"></a>
<a id="tocsvenue"></a>

```json
{
  "accessibleSeatingDetails": "en-us:seatingDetails",
  "active": false,
  "additionalInfos": "en-us: additionalInfo",
  "address": {
    "line1s": "en-us: line1",
    "line2s": "en-us:line2",
    "line3s": "en-us:line3"
  },
  "boxOfficeInfo": {
    "acceptedPaymentDetails": "en-us:paymentDetails",
    "openHoursDetails": "en-us:openHours",
    "phoneNumberDetails": "en-us:phoneNumbers",
    "willCallDetails": "en-us:willCall"
  },
  "city": {
    "names": "en-us: name"
  },
  "country": {
    "countryCode": "string",
    "names": "en-us: name"
  },
  "currency": "string",
  "descriptions": "en-us: description",
  "discoverable": false,
  "distance": 0,
  "dma": [
    {
      "id": 0
    }
  ],
  "generalInfo": {
    "childRules": "en-us: rule",
    "generalRules": "en-us: rule"
  },
  "images": [
    {
      "attribution": "string",
      "domains": [
        "string"
      ],
      "fallback": false,
      "height": 0,
      "ratio": "16_9",
      "url": "string",
      "width": 0
    }
  ],
  "location": {
    "latitude": 0,
    "longitude": 0
  },
  "markets": [
    {
      "id": "string"
    }
  ],
  "names": "en-us: name",
  "parkingDetails": "en-us:parkingDetails",
  "postalCode": "string",
  "references": "sourceName: id",
  "relationships": [
    {}
  ],
  "social": {
    "twitter": {
      "handle": "@a Twitter handle exampe",
      "hashtags": "#hashtag example #hashtag another example"
    }
  },
  "source": {
    "id": "string",
    "name": "string"
  },
  "state": {
    "names": "en-us: name",
    "stateCode": "string"
  },
  "test": false,
  "timezone": "string",
  "type": "event",
  "units": "string",
  "url": "string",
  "version": 0
}
```

Venue

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accessibleSeatingDetails|object|false|none|Venue accessible seating details - multi-lingual fields|
|active|boolean|false|none|Indicate if the entity is active, inactive entity won't appear in Discovery API|
|additionalInfos|object|false|none|Additional informations of the entity - multi-lingual fields|
|address|[Address](#schemaaddress)|false|none|Address|
|boxOfficeInfo|[VenueBoxOfficeInfo](#schemavenueboxofficeinfo)|false|none|Venue box office information|
|city|[City](#schemacity)|false|none|City|
|country|[Country](#schemacountry)|false|none|Country|
|currency|string|false|none|Default currency of ticket prices for events in this venue|
|descriptions|object|false|none|Descriptions of the entity - multi-lingual fields|
|discoverable|boolean|false|none|True if the entity is dicoverable in discovery API|
|distance|number(double)|false|none|none|
|dma|[[Dma](#schemadma)]|false|none|The list of associated DMAs (Designated Market Areas) of the venue|
|generalInfo|[VenueGeneralInfo](#schemavenuegeneralinfo)|false|none|Venue general information|
|images|[[Image](#schemaimage)]|false|none|Images of the entity|
|location|[Location](#schemalocation)|false|none|Location|
|markets|[[Market](#schemamarket)]|false|none|Markets of the venue|
|names|object|false|none|Names of the entity - multi-lingual fields|
|parkingDetails|object|false|none|Venue parking info - multi-lingual fields|
|postalCode|string|false|none|Postal code / zipcode of the venue|
|references|object|false|none|References of this entity in an other system. Reference is the exact same entity|
|relationships|[[Relationship](#schemarelationship)]|false|none|Relationships on the entity, like if the entity is a duplicate of another one|
|social|[Social](#schemasocial)|false|none|Social networks data|
|source|[Source](#schemasource)|false|none|Source|
|state|[State](#schemastate)|false|none|State|
|test|boolean|false|none|Indicate if this is a test entity, by default test entities won't appear in discovery API|
|timezone|string|false|none|Timezone of the venue|
|type|string|true|none|Type of the entity|
|units|string|false|none|none|
|url|string|false|none|URL of a web site detail page of the entity|
|version|integer(int64)|false|none|Version of the entity. Version is to avoid updated an entity with an older version|

#### Enumerated Values

|Property|Value|
|---|---|
|type|event|
|type|venue|
|type|attraction|

<h2 id="tocS_VenueBoxOfficeInfo">VenueBoxOfficeInfo</h2>
<!-- backwards compatibility -->
<a id="schemavenueboxofficeinfo"></a>
<a id="schema_VenueBoxOfficeInfo"></a>
<a id="tocSvenueboxofficeinfo"></a>
<a id="tocsvenueboxofficeinfo"></a>

```json
{
  "acceptedPaymentDetails": "en-us:paymentDetails",
  "openHoursDetails": "en-us:openHours",
  "phoneNumberDetails": "en-us:phoneNumbers",
  "willCallDetails": "en-us:willCall"
}
```

Venue box office information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|acceptedPaymentDetails|object|false|none|Venue box office accepted payment details - multi-lingual fields|
|openHoursDetails|object|false|none|Venue box office opening hours - multi-lingual fields|
|phoneNumberDetails|object|false|none|Venue box office phone number - multi-lingual fields|
|willCallDetails|object|false|none|Venue box office will call details - multi-lingual fields|

<h2 id="tocS_VenueExtensions">VenueExtensions</h2>
<!-- backwards compatibility -->
<a id="schemavenueextensions"></a>
<a id="schema_VenueExtensions"></a>
<a id="tocSvenueextensions"></a>
<a id="tocsvenueextensions"></a>

```json
{}
```

All Venue's extensions

<h2 id="tocS_VenueGeneralInfo">VenueGeneralInfo</h2>
<!-- backwards compatibility -->
<a id="schemavenuegeneralinfo"></a>
<a id="schema_VenueGeneralInfo"></a>
<a id="tocSvenuegeneralinfo"></a>
<a id="tocsvenuegeneralinfo"></a>

```json
{
  "childRules": "en-us: rule",
  "generalRules": "en-us: rule"
}
```

Venue general information

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|childRules|object|false|none|Venue children rules - multi-lingual fields|
|generalRules|object|false|none|Venue general rules - multi-lingual fields|

<h2 id="tocS_Video">Video</h2>
<!-- backwards compatibility -->
<a id="schemavideo"></a>
<a id="schema_Video"></a>
<a id="tocSvideo"></a>
<a id="tocsvideo"></a>

```json
{
  "embedUrl": "string",
  "licensingInformation": {
    "license": "string",
    "regionRestriction": {
      "allowed": [
        "string"
      ]
    }
  },
  "source": {
    "id": "string",
    "name": "string"
  },
  "url": "string"
}
```

This class defines an entitlement data on the Publish API

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|embedUrl|string|false|none|The url of the embeded video|
|licensingInformation|[LicensingInformation](#schemalicensinginformation)|true|none|This class defines an entitlement data on the Publish API|
|source|[Source](#schemasource)|true|none|Source|
|url|string|true|none|The url of the video|
