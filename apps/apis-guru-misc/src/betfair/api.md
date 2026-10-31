<h1 id="betfair-exchange-streaming-api">Betfair: Exchange Streaming API v1.0.1423</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

API to receive streamed updates. This is an ssl socket connection of CRLF delimited json messages (see RequestMessage & ResponseMessage)

Base URLs:

* <a href="http://stream-api.betfair.com:443/api">http://stream-api.betfair.com:443/api</a>

Email: <a href="mailto:bdp@betfair.com">BDP Support</a> 
Web: <a href="https://developer.betfair.com/support/">BDP Support</a> 
License: See BDP site

<h1 id="betfair-exchange-streaming-api-default">Default</h1>

## post/request

> Code samples

```bash
curl https://example.com/request \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "authentication": {
      "id": 0,
      "op": "string",
      "appKey": "string",
      "session": "string"
    },
    "heartbeat": {
      "id": 0,
      "op": "string"
    },
    "marketSubscription": {
      "id": 0,
      "op": "string",
      "clk": "string",
      "conflateMs": 0,
      "heartbeatMs": 0,
      "initialClk": "string",
      "marketDataFilter": {
        "fields": [
          "EX_BEST_OFFERS_DISP"
        ],
        "ladderLevels": 0
      },
      "marketFilter": {
        "bettingTypes": [
          "ODDS"
        ],
        "bspMarket": true,
        "countryCodes": [
          "string"
        ],
        "eventIds": [
          "string"
        ],
        "eventTypeIds": [
          "string"
        ],
        "marketIds": [
          "string"
        ],
        "marketTypes": [
          "string"
        ],
        "raceTypes": [
          "string"
        ],
        "turnInPlayEnabled": true,
        "venues": [
          "string"
        ]
      },
      "segmentationEnabled": true
    },
    "opTypes": "heartbeat",
    "orderSubscriptionMessage": {
      "id": 0,
      "op": "string",
      "clk": "string",
      "conflateMs": 0,
      "heartbeatMs": 0,
      "initialClk": "string",
      "orderFilter": {
        "accountIds": [
          0
        ],
        "customerStrategyRefs": [
          "string"
        ],
        "includeOverallPosition": true,
        "partitionMatchedByStrategyRef": true
      },
      "segmentationEnabled": true
    }
  }'
```

`POST /request`

This is a socket protocol delimited by CRLF (not http)

> Body parameter

```json
{
  "authentication": {
    "id": 0,
    "op": "string",
    "appKey": "string",
    "session": "string"
  },
  "heartbeat": {
    "id": 0,
    "op": "string"
  },
  "marketSubscription": {
    "id": 0,
    "op": "string",
    "clk": "string",
    "conflateMs": 0,
    "heartbeatMs": 0,
    "initialClk": "string",
    "marketDataFilter": {
      "fields": [
        "EX_BEST_OFFERS_DISP"
      ],
      "ladderLevels": 0
    },
    "marketFilter": {
      "bettingTypes": [
        "ODDS"
      ],
      "bspMarket": true,
      "countryCodes": [
        "string"
      ],
      "eventIds": [
        "string"
      ],
      "eventTypeIds": [
        "string"
      ],
      "marketIds": [
        "string"
      ],
      "marketTypes": [
        "string"
      ],
      "raceTypes": [
        "string"
      ],
      "turnInPlayEnabled": true,
      "venues": [
        "string"
      ]
    },
    "segmentationEnabled": true
  },
  "opTypes": "heartbeat",
  "orderSubscriptionMessage": {
    "id": 0,
    "op": "string",
    "clk": "string",
    "conflateMs": 0,
    "heartbeatMs": 0,
    "initialClk": "string",
    "orderFilter": {
      "accountIds": [
        0
      ],
      "customerStrategyRefs": [
        "string"
      ],
      "includeOverallPosition": true,
      "partitionMatchedByStrategyRef": true
    },
    "segmentationEnabled": true
  }
}
```

<h3 id="postrequest-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[AllRequestTypesExample](#schemaallrequesttypesexample)|true|Requests are sent to socket|
|» authentication|body|[AuthenticationMessage](#schemaauthenticationmessage)|false|none|
|» heartbeat|body|[HeartbeatMessage](#schemaheartbeatmessage)|false|none|
|» marketSubscription|body|[MarketSubscriptionMessage](#schemamarketsubscriptionmessage)|false|none|
|» opTypes|body|string|false|none|
|» orderSubscriptionMessage|body|[OrderSubscriptionMessage](#schemaordersubscriptionmessage)|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» opTypes|heartbeat|
|» opTypes|authentication|
|» opTypes|marketSubscription|
|» opTypes|orderSubscription|

> Example responses

> default Response

```json
{
  "connection": {
    "id": 0,
    "op": "string",
    "connectionId": "string"
  },
  "marketChangeMessage": {
    "id": 0,
    "op": "string",
    "clk": "string",
    "conflateMs": 0,
    "ct": "SUB_IMAGE",
    "heartbeatMs": 0,
    "initialClk": "string",
    "mc": [
      {
        "con": true,
        "id": "string",
        "img": true,
        "marketDefinition": {
          "betDelay": 0,
          "bettingType": "ODDS",
          "bspMarket": true,
          "bspReconciled": true,
          "complete": true,
          "countryCode": "string",
          "crossMatching": true,
          "discountAllowed": true,
          "eachWayDivisor": 0,
          "eventId": "string",
          "eventTypeId": "string",
          "inPlay": true,
          "keyLineDefinition": {
            "kl": [
              {
                "hc": 0,
                "id": 0
              }
            ]
          },
          "lineInterval": 0,
          "lineMaxUnit": 0,
          "lineMinUnit": 0,
          "marketBaseRate": 0,
          "marketTime": "1970-01-01T00:00:00Z",
          "marketType": "string",
          "numberOfActiveRunners": 0,
          "numberOfWinners": 0,
          "openDate": "1970-01-01T00:00:00Z",
          "persistenceEnabled": true,
          "priceLadderDefinition": {
            "type": "CLASSIC"
          },
          "raceType": "string",
          "regulators": [
            "string"
          ],
          "runners": [
            {
              "adjustmentFactor": 0,
              "bsp": 0,
              "hc": 0,
              "id": 0,
              "removalDate": "1970-01-01T00:00:00Z",
              "sortPriority": 0,
              "status": "ACTIVE"
            }
          ],
          "runnersVoidable": true,
          "settledTime": "1970-01-01T00:00:00Z",
          "status": "INACTIVE",
          "suspendTime": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "turnInPlayEnabled": true,
          "venue": "string",
          "version": 0
        },
        "rc": [
          {
            "atb": [
              [
                0
              ]
            ],
            "atl": [
              [
                0
              ]
            ],
            "batb": [
              [
                0
              ]
            ],
            "batl": [
              [
                0
              ]
            ],
            "bdatb": [
              [
                0
              ]
            ],
            "bdatl": [
              [
                0
              ]
            ],
            "hc": 0,
            "id": 0,
            "ltp": 0,
            "spb": [
              [
                0
              ]
            ],
            "spf": 0,
            "spl": [
              [
                0
              ]
            ],
            "spn": 0,
            "trd": [
              [
                0
              ]
            ],
            "tv": 0
          }
        ],
        "tv": 0
      }
    ],
    "pt": 0,
    "segmentType": "SEG_START",
    "status": 0
  },
  "opTypes": "connection",
  "orderChangeMessage": {
    "id": 0,
    "op": "string",
    "clk": "string",
    "conflateMs": 0,
    "ct": "SUB_IMAGE",
    "heartbeatMs": 0,
    "initialClk": "string",
    "oc": [
      {
        "accountId": 0,
        "closed": true,
        "fullImage": true,
        "id": "string",
        "orc": [
          {
            "fullImage": true,
            "hc": 0,
            "id": 0,
            "mb": [
              [
                0
              ]
            ],
            "ml": [
              [
                0
              ]
            ],
            "smc": {
              "property1": {
                "mb": [
                  [
                    0
                  ]
                ],
                "ml": [
                  [
                    0
                  ]
                ]
              },
              "property2": {
                "mb": [
                  [
                    0
                  ]
                ],
                "ml": [
                  [
                    0
                  ]
                ]
              }
            },
            "uo": [
              {
                "avp": 0,
                "bsp": 0,
                "cd": 0,
                "id": "string",
                "ld": 0,
                "lsrc": "string",
                "md": 0,
                "ot": "L",
                "p": 0,
                "pd": 0,
                "pt": "L",
                "rac": "string",
                "rc": "string",
                "rfo": "string",
                "rfs": "string",
                "s": 0,
                "sc": 0,
                "side": "B",
                "sl": 0,
                "sm": 0,
                "sr": 0,
                "status": "E",
                "sv": 0
              }
            ]
          }
        ]
      }
    ],
    "pt": 0,
    "segmentType": "SEG_START",
    "status": 0
  },
  "status": {
    "id": 0,
    "op": "string",
    "connectionClosed": true,
    "connectionId": "string",
    "connectionsAvailable": 0,
    "errorCode": "NO_APP_KEY",
    "errorMessage": "string",
    "statusCode": "SUCCESS"
  }
}
```

<h3 id="postrequest-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|default|Default|Responses are received from socket|[AllResponseTypesExample](#schemaallresponsetypesexample)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_AllRequestTypesExample">AllRequestTypesExample</h2>
<!-- backwards compatibility -->
<a id="schemaallrequesttypesexample"></a>
<a id="schema_AllRequestTypesExample"></a>
<a id="tocSallrequesttypesexample"></a>
<a id="tocsallrequesttypesexample"></a>

```json
{
  "authentication": {
    "id": 0,
    "op": "string",
    "appKey": "string",
    "session": "string"
  },
  "heartbeat": {
    "id": 0,
    "op": "string"
  },
  "marketSubscription": {
    "id": 0,
    "op": "string",
    "clk": "string",
    "conflateMs": 0,
    "heartbeatMs": 0,
    "initialClk": "string",
    "marketDataFilter": {
      "fields": [
        "EX_BEST_OFFERS_DISP"
      ],
      "ladderLevels": 0
    },
    "marketFilter": {
      "bettingTypes": [
        "ODDS"
      ],
      "bspMarket": true,
      "countryCodes": [
        "string"
      ],
      "eventIds": [
        "string"
      ],
      "eventTypeIds": [
        "string"
      ],
      "marketIds": [
        "string"
      ],
      "marketTypes": [
        "string"
      ],
      "raceTypes": [
        "string"
      ],
      "turnInPlayEnabled": true,
      "venues": [
        "string"
      ]
    },
    "segmentationEnabled": true
  },
  "opTypes": "heartbeat",
  "orderSubscriptionMessage": {
    "id": 0,
    "op": "string",
    "clk": "string",
    "conflateMs": 0,
    "heartbeatMs": 0,
    "initialClk": "string",
    "orderFilter": {
      "accountIds": [
        0
      ],
      "customerStrategyRefs": [
        "string"
      ],
      "includeOverallPosition": true,
      "partitionMatchedByStrategyRef": true
    },
    "segmentationEnabled": true
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authentication|[AuthenticationMessage](#schemaauthenticationmessage)|false|none|none|
|heartbeat|[HeartbeatMessage](#schemaheartbeatmessage)|false|none|none|
|marketSubscription|[MarketSubscriptionMessage](#schemamarketsubscriptionmessage)|false|none|none|
|opTypes|string|false|none|none|
|orderSubscriptionMessage|[OrderSubscriptionMessage](#schemaordersubscriptionmessage)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|opTypes|heartbeat|
|opTypes|authentication|
|opTypes|marketSubscription|
|opTypes|orderSubscription|

<h2 id="tocS_AllResponseTypesExample">AllResponseTypesExample</h2>
<!-- backwards compatibility -->
<a id="schemaallresponsetypesexample"></a>
<a id="schema_AllResponseTypesExample"></a>
<a id="tocSallresponsetypesexample"></a>
<a id="tocsallresponsetypesexample"></a>

```json
{
  "connection": {
    "id": 0,
    "op": "string",
    "connectionId": "string"
  },
  "marketChangeMessage": {
    "id": 0,
    "op": "string",
    "clk": "string",
    "conflateMs": 0,
    "ct": "SUB_IMAGE",
    "heartbeatMs": 0,
    "initialClk": "string",
    "mc": [
      {
        "con": true,
        "id": "string",
        "img": true,
        "marketDefinition": {
          "betDelay": 0,
          "bettingType": "ODDS",
          "bspMarket": true,
          "bspReconciled": true,
          "complete": true,
          "countryCode": "string",
          "crossMatching": true,
          "discountAllowed": true,
          "eachWayDivisor": 0,
          "eventId": "string",
          "eventTypeId": "string",
          "inPlay": true,
          "keyLineDefinition": {
            "kl": [
              {
                "hc": 0,
                "id": 0
              }
            ]
          },
          "lineInterval": 0,
          "lineMaxUnit": 0,
          "lineMinUnit": 0,
          "marketBaseRate": 0,
          "marketTime": "1970-01-01T00:00:00Z",
          "marketType": "string",
          "numberOfActiveRunners": 0,
          "numberOfWinners": 0,
          "openDate": "1970-01-01T00:00:00Z",
          "persistenceEnabled": true,
          "priceLadderDefinition": {
            "type": "CLASSIC"
          },
          "raceType": "string",
          "regulators": [
            "string"
          ],
          "runners": [
            {
              "adjustmentFactor": 0,
              "bsp": 0,
              "hc": 0,
              "id": 0,
              "removalDate": "1970-01-01T00:00:00Z",
              "sortPriority": 0,
              "status": "ACTIVE"
            }
          ],
          "runnersVoidable": true,
          "settledTime": "1970-01-01T00:00:00Z",
          "status": "INACTIVE",
          "suspendTime": "1970-01-01T00:00:00Z",
          "timezone": "string",
          "turnInPlayEnabled": true,
          "venue": "string",
          "version": 0
        },
        "rc": [
          {
            "atb": [
              [
                0
              ]
            ],
            "atl": [
              [
                0
              ]
            ],
            "batb": [
              [
                0
              ]
            ],
            "batl": [
              [
                0
              ]
            ],
            "bdatb": [
              [
                0
              ]
            ],
            "bdatl": [
              [
                0
              ]
            ],
            "hc": 0,
            "id": 0,
            "ltp": 0,
            "spb": [
              [
                0
              ]
            ],
            "spf": 0,
            "spl": [
              [
                0
              ]
            ],
            "spn": 0,
            "trd": [
              [
                0
              ]
            ],
            "tv": 0
          }
        ],
        "tv": 0
      }
    ],
    "pt": 0,
    "segmentType": "SEG_START",
    "status": 0
  },
  "opTypes": "connection",
  "orderChangeMessage": {
    "id": 0,
    "op": "string",
    "clk": "string",
    "conflateMs": 0,
    "ct": "SUB_IMAGE",
    "heartbeatMs": 0,
    "initialClk": "string",
    "oc": [
      {
        "accountId": 0,
        "closed": true,
        "fullImage": true,
        "id": "string",
        "orc": [
          {
            "fullImage": true,
            "hc": 0,
            "id": 0,
            "mb": [
              [
                0
              ]
            ],
            "ml": [
              [
                0
              ]
            ],
            "smc": {
              "property1": {
                "mb": [
                  [
                    0
                  ]
                ],
                "ml": [
                  [
                    0
                  ]
                ]
              },
              "property2": {
                "mb": [
                  [
                    0
                  ]
                ],
                "ml": [
                  [
                    0
                  ]
                ]
              }
            },
            "uo": [
              {
                "avp": 0,
                "bsp": 0,
                "cd": 0,
                "id": "string",
                "ld": 0,
                "lsrc": "string",
                "md": 0,
                "ot": "L",
                "p": 0,
                "pd": 0,
                "pt": "L",
                "rac": "string",
                "rc": "string",
                "rfo": "string",
                "rfs": "string",
                "s": 0,
                "sc": 0,
                "side": "B",
                "sl": 0,
                "sm": 0,
                "sr": 0,
                "status": "E",
                "sv": 0
              }
            ]
          }
        ]
      }
    ],
    "pt": 0,
    "segmentType": "SEG_START",
    "status": 0
  },
  "status": {
    "id": 0,
    "op": "string",
    "connectionClosed": true,
    "connectionId": "string",
    "connectionsAvailable": 0,
    "errorCode": "NO_APP_KEY",
    "errorMessage": "string",
    "statusCode": "SUCCESS"
  }
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|connection|[ConnectionMessage](#schemaconnectionmessage)|false|none|none|
|marketChangeMessage|[MarketChangeMessage](#schemamarketchangemessage)|false|none|none|
|opTypes|string|false|none|none|
|orderChangeMessage|[OrderChangeMessage](#schemaorderchangemessage)|false|none|none|
|status|[StatusMessage](#schemastatusmessage)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|opTypes|connection|
|opTypes|status|
|opTypes|mcm|
|opTypes|ocm|

<h2 id="tocS_AuthenticationMessage">AuthenticationMessage</h2>
<!-- backwards compatibility -->
<a id="schemaauthenticationmessage"></a>
<a id="schema_AuthenticationMessage"></a>
<a id="tocSauthenticationmessage"></a>
<a id="tocsauthenticationmessage"></a>

```json
{
  "id": 0,
  "op": "string",
  "appKey": "string",
  "session": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|
|appKey|string|false|none|none|
|session|string|false|none|none|

<h2 id="tocS_ConnectionMessage">ConnectionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaconnectionmessage"></a>
<a id="schema_ConnectionMessage"></a>
<a id="tocSconnectionmessage"></a>
<a id="tocsconnectionmessage"></a>

```json
{
  "id": 0,
  "op": "string",
  "connectionId": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|
|connectionId|string|false|none|The connection id|

<h2 id="tocS_HeartbeatMessage">HeartbeatMessage</h2>
<!-- backwards compatibility -->
<a id="schemaheartbeatmessage"></a>
<a id="schema_HeartbeatMessage"></a>
<a id="tocSheartbeatmessage"></a>
<a id="tocsheartbeatmessage"></a>

```json
{
  "id": 0,
  "op": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|

<h2 id="tocS_KeyLineDefinition">KeyLineDefinition</h2>
<!-- backwards compatibility -->
<a id="schemakeylinedefinition"></a>
<a id="schema_KeyLineDefinition"></a>
<a id="tocSkeylinedefinition"></a>
<a id="tocskeylinedefinition"></a>

```json
{
  "kl": [
    {
      "hc": 0,
      "id": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|kl|[[KeyLineSelection](#schemakeylineselection)]|false|none|none|

<h2 id="tocS_KeyLineSelection">KeyLineSelection</h2>
<!-- backwards compatibility -->
<a id="schemakeylineselection"></a>
<a id="schema_KeyLineSelection"></a>
<a id="tocSkeylineselection"></a>
<a id="tocskeylineselection"></a>

```json
{
  "hc": 0,
  "id": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hc|number(double)|false|none|none|
|id|integer(int64)|false|none|none|

<h2 id="tocS_MarketChange">MarketChange</h2>
<!-- backwards compatibility -->
<a id="schemamarketchange"></a>
<a id="schema_MarketChange"></a>
<a id="tocSmarketchange"></a>
<a id="tocsmarketchange"></a>

```json
{
  "con": true,
  "id": "string",
  "img": true,
  "marketDefinition": {
    "betDelay": 0,
    "bettingType": "ODDS",
    "bspMarket": true,
    "bspReconciled": true,
    "complete": true,
    "countryCode": "string",
    "crossMatching": true,
    "discountAllowed": true,
    "eachWayDivisor": 0,
    "eventId": "string",
    "eventTypeId": "string",
    "inPlay": true,
    "keyLineDefinition": {
      "kl": [
        {
          "hc": 0,
          "id": 0
        }
      ]
    },
    "lineInterval": 0,
    "lineMaxUnit": 0,
    "lineMinUnit": 0,
    "marketBaseRate": 0,
    "marketTime": "1970-01-01T00:00:00Z",
    "marketType": "string",
    "numberOfActiveRunners": 0,
    "numberOfWinners": 0,
    "openDate": "1970-01-01T00:00:00Z",
    "persistenceEnabled": true,
    "priceLadderDefinition": {
      "type": "CLASSIC"
    },
    "raceType": "string",
    "regulators": [
      "string"
    ],
    "runners": [
      {
        "adjustmentFactor": 0,
        "bsp": 0,
        "hc": 0,
        "id": 0,
        "removalDate": "1970-01-01T00:00:00Z",
        "sortPriority": 0,
        "status": "ACTIVE"
      }
    ],
    "runnersVoidable": true,
    "settledTime": "1970-01-01T00:00:00Z",
    "status": "INACTIVE",
    "suspendTime": "1970-01-01T00:00:00Z",
    "timezone": "string",
    "turnInPlayEnabled": true,
    "venue": "string",
    "version": 0
  },
  "rc": [
    {
      "atb": [
        [
          0
        ]
      ],
      "atl": [
        [
          0
        ]
      ],
      "batb": [
        [
          0
        ]
      ],
      "batl": [
        [
          0
        ]
      ],
      "bdatb": [
        [
          0
        ]
      ],
      "bdatl": [
        [
          0
        ]
      ],
      "hc": 0,
      "id": 0,
      "ltp": 0,
      "spb": [
        [
          0
        ]
      ],
      "spf": 0,
      "spl": [
        [
          0
        ]
      ],
      "spn": 0,
      "trd": [
        [
          0
        ]
      ],
      "tv": 0
    }
  ],
  "tv": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|con|boolean|false|none|Conflated - have more than a single change been combined (or null if not conflated)|
|id|string|false|none|Market Id - the id of the market|
|img|boolean|false|none|Image - replace existing prices / data with the data supplied: it is not a delta (or null if delta)|
|marketDefinition|[MarketDefinition](#schemamarketdefinition)|false|none|none|
|rc|[[RunnerChange](#schemarunnerchange)]|false|none|Runner Changes - a list of changes to runners (or null if un-changed)|
|tv|number(double)|false|none|The total amount matched across the market. This value is truncated at 2dp (or null if un-changed)|

<h2 id="tocS_MarketChangeMessage">MarketChangeMessage</h2>
<!-- backwards compatibility -->
<a id="schemamarketchangemessage"></a>
<a id="schema_MarketChangeMessage"></a>
<a id="tocSmarketchangemessage"></a>
<a id="tocsmarketchangemessage"></a>

```json
{
  "id": 0,
  "op": "string",
  "clk": "string",
  "conflateMs": 0,
  "ct": "SUB_IMAGE",
  "heartbeatMs": 0,
  "initialClk": "string",
  "mc": [
    {
      "con": true,
      "id": "string",
      "img": true,
      "marketDefinition": {
        "betDelay": 0,
        "bettingType": "ODDS",
        "bspMarket": true,
        "bspReconciled": true,
        "complete": true,
        "countryCode": "string",
        "crossMatching": true,
        "discountAllowed": true,
        "eachWayDivisor": 0,
        "eventId": "string",
        "eventTypeId": "string",
        "inPlay": true,
        "keyLineDefinition": {
          "kl": [
            {
              "hc": 0,
              "id": 0
            }
          ]
        },
        "lineInterval": 0,
        "lineMaxUnit": 0,
        "lineMinUnit": 0,
        "marketBaseRate": 0,
        "marketTime": "1970-01-01T00:00:00Z",
        "marketType": "string",
        "numberOfActiveRunners": 0,
        "numberOfWinners": 0,
        "openDate": "1970-01-01T00:00:00Z",
        "persistenceEnabled": true,
        "priceLadderDefinition": {
          "type": "CLASSIC"
        },
        "raceType": "string",
        "regulators": [
          "string"
        ],
        "runners": [
          {
            "adjustmentFactor": 0,
            "bsp": 0,
            "hc": 0,
            "id": 0,
            "removalDate": "1970-01-01T00:00:00Z",
            "sortPriority": 0,
            "status": "ACTIVE"
          }
        ],
        "runnersVoidable": true,
        "settledTime": "1970-01-01T00:00:00Z",
        "status": "INACTIVE",
        "suspendTime": "1970-01-01T00:00:00Z",
        "timezone": "string",
        "turnInPlayEnabled": true,
        "venue": "string",
        "version": 0
      },
      "rc": [
        {
          "atb": [
            [
              0
            ]
          ],
          "atl": [
            [
              0
            ]
          ],
          "batb": [
            [
              0
            ]
          ],
          "batl": [
            [
              0
            ]
          ],
          "bdatb": [
            [
              0
            ]
          ],
          "bdatl": [
            [
              0
            ]
          ],
          "hc": 0,
          "id": 0,
          "ltp": 0,
          "spb": [
            [
              0
            ]
          ],
          "spf": 0,
          "spl": [
            [
              0
            ]
          ],
          "spn": 0,
          "trd": [
            [
              0
            ]
          ],
          "tv": 0
        }
      ],
      "tv": 0
    }
  ],
  "pt": 0,
  "segmentType": "SEG_START",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|
|clk|string|false|none|Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)|
|conflateMs|integer(int64)|false|none|Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)|
|ct|string|false|none|Change Type - set to indicate the type of change - if null this is a delta)|
|heartbeatMs|integer(int64)|false|none|Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)|
|initialClk|string|false|none|Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)|
|mc|[[MarketChange](#schemamarketchange)]|false|none|MarketChanges - the modifications to markets (will be null on a heartbeat|
|pt|integer(int64)|false|none|Publish Time (in millis since epoch) that the changes were generated|
|segmentType|string|false|none|Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented|
|status|integer(int32)|false|none|Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies|

#### Enumerated Values

|Property|Value|
|---|---|
|ct|SUB_IMAGE|
|ct|RESUB_DELTA|
|ct|HEARTBEAT|
|segmentType|SEG_START|
|segmentType|SEG|
|segmentType|SEG_END|

<h2 id="tocS_MarketDataFilter">MarketDataFilter</h2>
<!-- backwards compatibility -->
<a id="schemamarketdatafilter"></a>
<a id="schema_MarketDataFilter"></a>
<a id="tocSmarketdatafilter"></a>
<a id="tocsmarketdatafilter"></a>

```json
{
  "fields": [
    "EX_BEST_OFFERS_DISP"
  ],
  "ladderLevels": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fields|[string]|false|none|none|
|ladderLevels|integer(int32)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|fields|EX_BEST_OFFERS_DISP|
|fields|EX_BEST_OFFERS|
|fields|EX_ALL_OFFERS|
|fields|EX_TRADED|
|fields|EX_TRADED_VOL|
|fields|EX_LTP|
|fields|EX_MARKET_DEF|
|fields|SP_TRADED|
|fields|SP_PROJECTED|

<h2 id="tocS_MarketDefinition">MarketDefinition</h2>
<!-- backwards compatibility -->
<a id="schemamarketdefinition"></a>
<a id="schema_MarketDefinition"></a>
<a id="tocSmarketdefinition"></a>
<a id="tocsmarketdefinition"></a>

```json
{
  "betDelay": 0,
  "bettingType": "ODDS",
  "bspMarket": true,
  "bspReconciled": true,
  "complete": true,
  "countryCode": "string",
  "crossMatching": true,
  "discountAllowed": true,
  "eachWayDivisor": 0,
  "eventId": "string",
  "eventTypeId": "string",
  "inPlay": true,
  "keyLineDefinition": {
    "kl": [
      {
        "hc": 0,
        "id": 0
      }
    ]
  },
  "lineInterval": 0,
  "lineMaxUnit": 0,
  "lineMinUnit": 0,
  "marketBaseRate": 0,
  "marketTime": "1970-01-01T00:00:00Z",
  "marketType": "string",
  "numberOfActiveRunners": 0,
  "numberOfWinners": 0,
  "openDate": "1970-01-01T00:00:00Z",
  "persistenceEnabled": true,
  "priceLadderDefinition": {
    "type": "CLASSIC"
  },
  "raceType": "string",
  "regulators": [
    "string"
  ],
  "runners": [
    {
      "adjustmentFactor": 0,
      "bsp": 0,
      "hc": 0,
      "id": 0,
      "removalDate": "1970-01-01T00:00:00Z",
      "sortPriority": 0,
      "status": "ACTIVE"
    }
  ],
  "runnersVoidable": true,
  "settledTime": "1970-01-01T00:00:00Z",
  "status": "INACTIVE",
  "suspendTime": "1970-01-01T00:00:00Z",
  "timezone": "string",
  "turnInPlayEnabled": true,
  "venue": "string",
  "version": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|betDelay|integer(int32)|false|none|none|
|bettingType|string|false|none|none|
|bspMarket|boolean|false|none|none|
|bspReconciled|boolean|false|none|none|
|complete|boolean|false|none|none|
|countryCode|string|false|none|none|
|crossMatching|boolean|false|none|none|
|discountAllowed|boolean|false|none|none|
|eachWayDivisor|number(double)|false|none|none|
|eventId|string|false|none|none|
|eventTypeId|string|false|none|The Event Type the market is contained within.|
|inPlay|boolean|false|none|none|
|keyLineDefinition|[KeyLineDefinition](#schemakeylinedefinition)|false|none|none|
|lineInterval|number(double)|false|none|For Handicap and Line markets, the lines available on this market will be between the range of lineMinUnit and lineMaxUnit, in increments of the lineInterval value. e.g. If unit is runs, lineMinUnit=10, lineMaxUnit=20 and lineInterval=0.5, then valid lines include 10, 10.5, 11, 11.5 up to 20 runs.|
|lineMaxUnit|number(double)|false|none|For Handicap and Line markets, the maximum value for the outcome, in market units for this market (eg 100 runs).|
|lineMinUnit|number(double)|false|none|For Handicap and Line markets, the minimum value for the outcome, in market units for this market (eg 0 runs).|
|marketBaseRate|number(double)|false|none|none|
|marketTime|string(date-time)|false|none|none|
|marketType|string|false|none|none|
|numberOfActiveRunners|integer(int32)|false|none|none|
|numberOfWinners|integer(int32)|false|none|none|
|openDate|string(date-time)|false|none|none|
|persistenceEnabled|boolean|false|none|none|
|priceLadderDefinition|[PriceLadderDefinition](#schemapriceladderdefinition)|false|none|none|
|raceType|string|false|none|none|
|regulators|[string]|false|none|The market regulators.|
|runners|[[RunnerDefinition](#schemarunnerdefinition)]|false|none|none|
|runnersVoidable|boolean|false|none|none|
|settledTime|string(date-time)|false|none|none|
|status|string|false|none|none|
|suspendTime|string(date-time)|false|none|none|
|timezone|string|false|none|none|
|turnInPlayEnabled|boolean|false|none|none|
|venue|string|false|none|none|
|version|integer(int64)|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|bettingType|ODDS|
|bettingType|LINE|
|bettingType|RANGE|
|bettingType|ASIAN_HANDICAP_DOUBLE_LINE|
|bettingType|ASIAN_HANDICAP_SINGLE_LINE|
|status|INACTIVE|
|status|OPEN|
|status|SUSPENDED|
|status|CLOSED|

<h2 id="tocS_MarketFilter">MarketFilter</h2>
<!-- backwards compatibility -->
<a id="schemamarketfilter"></a>
<a id="schema_MarketFilter"></a>
<a id="tocSmarketfilter"></a>
<a id="tocsmarketfilter"></a>

```json
{
  "bettingTypes": [
    "ODDS"
  ],
  "bspMarket": true,
  "countryCodes": [
    "string"
  ],
  "eventIds": [
    "string"
  ],
  "eventTypeIds": [
    "string"
  ],
  "marketIds": [
    "string"
  ],
  "marketTypes": [
    "string"
  ],
  "raceTypes": [
    "string"
  ],
  "turnInPlayEnabled": true,
  "venues": [
    "string"
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|bettingTypes|[string]|false|none|none|
|bspMarket|boolean|false|none|none|
|countryCodes|[string]|false|none|none|
|eventIds|[string]|false|none|none|
|eventTypeIds|[string]|false|none|none|
|marketIds|[string]|false|none|none|
|marketTypes|[string]|false|none|none|
|raceTypes|[string]|false|none|none|
|turnInPlayEnabled|boolean|false|none|none|
|venues|[string]|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|bettingTypes|ODDS|
|bettingTypes|LINE|
|bettingTypes|RANGE|
|bettingTypes|ASIAN_HANDICAP_DOUBLE_LINE|
|bettingTypes|ASIAN_HANDICAP_SINGLE_LINE|

<h2 id="tocS_MarketSubscriptionMessage">MarketSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemamarketsubscriptionmessage"></a>
<a id="schema_MarketSubscriptionMessage"></a>
<a id="tocSmarketsubscriptionmessage"></a>
<a id="tocsmarketsubscriptionmessage"></a>

```json
{
  "id": 0,
  "op": "string",
  "clk": "string",
  "conflateMs": 0,
  "heartbeatMs": 0,
  "initialClk": "string",
  "marketDataFilter": {
    "fields": [
      "EX_BEST_OFFERS_DISP"
    ],
    "ladderLevels": 0
  },
  "marketFilter": {
    "bettingTypes": [
      "ODDS"
    ],
    "bspMarket": true,
    "countryCodes": [
      "string"
    ],
    "eventIds": [
      "string"
    ],
    "eventTypeIds": [
      "string"
    ],
    "marketIds": [
      "string"
    ],
    "marketTypes": [
      "string"
    ],
    "raceTypes": [
      "string"
    ],
    "turnInPlayEnabled": true,
    "venues": [
      "string"
    ]
  },
  "segmentationEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|
|clk|string|false|none|Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription|
|conflateMs|integer(int64)|false|none|Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)|
|heartbeatMs|integer(int64)|false|none|Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)|
|initialClk|string|false|none|Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription|
|marketDataFilter|[MarketDataFilter](#schemamarketdatafilter)|false|none|none|
|marketFilter|[MarketFilter](#schemamarketfilter)|false|none|none|
|segmentationEnabled|boolean|false|none|Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block|

<h2 id="tocS_Order">Order</h2>
<!-- backwards compatibility -->
<a id="schemaorder"></a>
<a id="schema_Order"></a>
<a id="tocSorder"></a>
<a id="tocsorder"></a>

```json
{
  "avp": 0,
  "bsp": 0,
  "cd": 0,
  "id": "string",
  "ld": 0,
  "lsrc": "string",
  "md": 0,
  "ot": "L",
  "p": 0,
  "pd": 0,
  "pt": "L",
  "rac": "string",
  "rc": "string",
  "rfo": "string",
  "rfs": "string",
  "s": 0,
  "sc": 0,
  "side": "B",
  "sl": 0,
  "sm": 0,
  "sr": 0,
  "status": "E",
  "sv": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avp|number(double)|false|none|Average Price Matched - the average price the order was matched at (null if the order is not matched). This value is not meaningful for activity on Line markets and is not guaranteed to be returned or maintained for these markets.|
|bsp|number(double)|false|none|BSP Liability - the BSP liability of the order (null if the order is not a BSP order)|
|cd|integer(int64)|false|none|Cancelled Date - the date the order was cancelled (null if the order is not cancelled)|
|id|string|false|none|Bet Id - the id of the order|
|ld|integer(int64)|false|none|Lapsed Date - the date the order was lapsed (null if the order is not lapsed)|
|lsrc|string|false|none|Lapse Status Reason Code - the reason that some or all of this order has been lapsed (null if no portion of the order is lapsed|
|md|integer(int64)|false|none|Matched Date - the date the order was matched (null if the order is not matched)|
|ot|string|false|none|Order Type - the type of the order (L = LIMIT, MOC = MARKET_ON_CLOSE, LOC = LIMIT_ON_CLOSE)|
|p|number(double)|false|none|Price - the original placed price of the order. Line markets operate at even-money odds of 2.0. However, price for these markets refers to the line positions available as defined by the markets min-max range and interval steps|
|pd|integer(int64)|false|none|Placed Date - the date the order was placed|
|pt|string|false|none|Persistence Type - whether the order will persist at in play or not (L = LAPSE, P = PERSIST, MOC = Market On Close)|
|rac|string|false|none|Regulator Auth Code - the auth code returned by the regulator|
|rc|string|false|none|Regulator Code - the regulator of the order|
|rfo|string|false|none|Order Reference - the customer's order reference for this order (empty string if one was not set)|
|rfs|string|false|none|Strategy Reference - the customer's strategy reference for this order (empty string if one was not set)|
|s|number(double)|false|none|Size - the original placed size of the order|
|sc|number(double)|false|none|Size Cancelled - the amount of the order that has been cancelled|
|side|string|false|none|Side - the side of the order. For Line markets a 'B' bet refers to a SELL line and an 'L' bet refers to a BUY line.|
|sl|number(double)|false|none|Size Lapsed - the amount of the order that has been lapsed|
|sm|number(double)|false|none|Size Matched - the amount of the order that has been matched|
|sr|number(double)|false|none|Size Remaining - the amount of the order that is remaining unmatched|
|status|string|false|none|Status - the status of the order (E = EXECUTABLE, EC = EXECUTION_COMPLETE)|
|sv|number(double)|false|none|Size Voided - the amount of the order that has been voided|

#### Enumerated Values

|Property|Value|
|---|---|
|ot|L|
|ot|LOC|
|ot|MOC|
|pt|L|
|pt|P|
|pt|MOC|
|side|B|
|side|L|
|status|E|
|status|EC|

<h2 id="tocS_OrderChangeMessage">OrderChangeMessage</h2>
<!-- backwards compatibility -->
<a id="schemaorderchangemessage"></a>
<a id="schema_OrderChangeMessage"></a>
<a id="tocSorderchangemessage"></a>
<a id="tocsorderchangemessage"></a>

```json
{
  "id": 0,
  "op": "string",
  "clk": "string",
  "conflateMs": 0,
  "ct": "SUB_IMAGE",
  "heartbeatMs": 0,
  "initialClk": "string",
  "oc": [
    {
      "accountId": 0,
      "closed": true,
      "fullImage": true,
      "id": "string",
      "orc": [
        {
          "fullImage": true,
          "hc": 0,
          "id": 0,
          "mb": [
            [
              0
            ]
          ],
          "ml": [
            [
              0
            ]
          ],
          "smc": {
            "property1": {
              "mb": [
                [
                  0
                ]
              ],
              "ml": [
                [
                  0
                ]
              ]
            },
            "property2": {
              "mb": [
                [
                  0
                ]
              ],
              "ml": [
                [
                  0
                ]
              ]
            }
          },
          "uo": [
            {
              "avp": 0,
              "bsp": 0,
              "cd": 0,
              "id": "string",
              "ld": 0,
              "lsrc": "string",
              "md": 0,
              "ot": "L",
              "p": 0,
              "pd": 0,
              "pt": "L",
              "rac": "string",
              "rc": "string",
              "rfo": "string",
              "rfs": "string",
              "s": 0,
              "sc": 0,
              "side": "B",
              "sl": 0,
              "sm": 0,
              "sr": 0,
              "status": "E",
              "sv": 0
            }
          ]
        }
      ]
    }
  ],
  "pt": 0,
  "segmentType": "SEG_START",
  "status": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|
|clk|string|false|none|Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)|
|conflateMs|integer(int64)|false|none|Conflate Milliseconds - the conflation rate (may differ from that requested if subscription is delayed)|
|ct|string|false|none|Change Type - set to indicate the type of change - if null this is a delta)|
|heartbeatMs|integer(int64)|false|none|Heartbeat Milliseconds - the heartbeat rate (may differ from requested: bounds are 500 to 30000)|
|initialClk|string|false|none|Token value (non-null) should be stored and passed in a MarketSubscriptionMessage to resume subscription (in case of disconnect)|
|oc|[[OrderMarketChange](#schemaordermarketchange)]|false|none|OrderMarketChanges - the modifications to account's orders (will be null on a heartbeat|
|pt|integer(int64)|false|none|Publish Time (in millis since epoch) that the changes were generated|
|segmentType|string|false|none|Segment Type - if the change is split into multiple segments, this denotes the beginning and end of a change, and segments in between. Will be null if data is not segmented|
|status|integer(int32)|false|none|Stream status: set to null if the exchange stream data is up to date and 503 if the downstream services are experiencing latencies|

#### Enumerated Values

|Property|Value|
|---|---|
|ct|SUB_IMAGE|
|ct|RESUB_DELTA|
|ct|HEARTBEAT|
|segmentType|SEG_START|
|segmentType|SEG|
|segmentType|SEG_END|

<h2 id="tocS_OrderFilter">OrderFilter</h2>
<!-- backwards compatibility -->
<a id="schemaorderfilter"></a>
<a id="schema_OrderFilter"></a>
<a id="tocSorderfilter"></a>
<a id="tocsorderfilter"></a>

```json
{
  "accountIds": [
    0
  ],
  "customerStrategyRefs": [
    "string"
  ],
  "includeOverallPosition": true,
  "partitionMatchedByStrategyRef": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountIds|[integer(int64)]|false|none|Internal use only & should not be set on your filter (your subscription is already locked to your account). If set subscription will fail.|
|customerStrategyRefs|[string]|false|none|Restricts to specified customerStrategyRefs; this will filter orders and StrategyMatchChanges accordingly (Note: overall postition is not filtered)|
|includeOverallPosition|boolean|false|none|Returns overall / net position (See: OrderRunnerChange.mb / OrderRunnerChange.ml). Default=true|
|partitionMatchedByStrategyRef|boolean|false|none|Returns strategy positions (See: OrderRunnerChange.smc=Map<customerStrategyRef, StrategyMatchChange>) - these are sent in delta format as per overall position. Default=false|

<h2 id="tocS_OrderMarketChange">OrderMarketChange</h2>
<!-- backwards compatibility -->
<a id="schemaordermarketchange"></a>
<a id="schema_OrderMarketChange"></a>
<a id="tocSordermarketchange"></a>
<a id="tocsordermarketchange"></a>

```json
{
  "accountId": 0,
  "closed": true,
  "fullImage": true,
  "id": "string",
  "orc": [
    {
      "fullImage": true,
      "hc": 0,
      "id": 0,
      "mb": [
        [
          0
        ]
      ],
      "ml": [
        [
          0
        ]
      ],
      "smc": {
        "property1": {
          "mb": [
            [
              0
            ]
          ],
          "ml": [
            [
              0
            ]
          ]
        },
        "property2": {
          "mb": [
            [
              0
            ]
          ],
          "ml": [
            [
              0
            ]
          ]
        }
      },
      "uo": [
        {
          "avp": 0,
          "bsp": 0,
          "cd": 0,
          "id": "string",
          "ld": 0,
          "lsrc": "string",
          "md": 0,
          "ot": "L",
          "p": 0,
          "pd": 0,
          "pt": "L",
          "rac": "string",
          "rc": "string",
          "rfo": "string",
          "rfs": "string",
          "s": 0,
          "sc": 0,
          "side": "B",
          "sl": 0,
          "sm": 0,
          "sr": 0,
          "status": "E",
          "sv": 0
        }
      ]
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|accountId|integer(int64)|false|none|none|
|closed|boolean|false|none|none|
|fullImage|boolean|false|none|none|
|id|string|false|none|Market Id - the id of the market the order is on|
|orc|[[OrderRunnerChange](#schemaorderrunnerchange)]|false|none|Order Changes - a list of changes to orders on a selection|

<h2 id="tocS_OrderRunnerChange">OrderRunnerChange</h2>
<!-- backwards compatibility -->
<a id="schemaorderrunnerchange"></a>
<a id="schema_OrderRunnerChange"></a>
<a id="tocSorderrunnerchange"></a>
<a id="tocsorderrunnerchange"></a>

```json
{
  "fullImage": true,
  "hc": 0,
  "id": 0,
  "mb": [
    [
      0
    ]
  ],
  "ml": [
    [
      0
    ]
  ],
  "smc": {
    "property1": {
      "mb": [
        [
          0
        ]
      ],
      "ml": [
        [
          0
        ]
      ]
    },
    "property2": {
      "mb": [
        [
          0
        ]
      ],
      "ml": [
        [
          0
        ]
      ]
    }
  },
  "uo": [
    {
      "avp": 0,
      "bsp": 0,
      "cd": 0,
      "id": "string",
      "ld": 0,
      "lsrc": "string",
      "md": 0,
      "ot": "L",
      "p": 0,
      "pd": 0,
      "pt": "L",
      "rac": "string",
      "rc": "string",
      "rfo": "string",
      "rfs": "string",
      "s": 0,
      "sc": 0,
      "side": "B",
      "sl": 0,
      "sm": 0,
      "sr": 0,
      "status": "E",
      "sv": 0
    }
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|fullImage|boolean|false|none|none|
|hc|number(double)|false|none|Handicap - the handicap of the runner (selection) (null if not applicable)|
|id|integer(int64)|false|none|Selection Id - the id of the runner (selection)|
|mb|[[number(double)]]|false|none|Matched Backs - matched amounts by distinct matched price on the Back side for this runner (selection)|
|ml|[[number(double)]]|false|none|Matched Lays - matched amounts by distinct matched price on the Lay side for this runner (selection)|
|smc|object|false|none|Strategy Matches - Matched Backs and Matched Lays grouped by strategy reference|
|uo|[[Order](#schemaorder)]|false|none|Unmatched Orders - orders on this runner (selection) that are not fully matched|

<h2 id="tocS_OrderSubscriptionMessage">OrderSubscriptionMessage</h2>
<!-- backwards compatibility -->
<a id="schemaordersubscriptionmessage"></a>
<a id="schema_OrderSubscriptionMessage"></a>
<a id="tocSordersubscriptionmessage"></a>
<a id="tocsordersubscriptionmessage"></a>

```json
{
  "id": 0,
  "op": "string",
  "clk": "string",
  "conflateMs": 0,
  "heartbeatMs": 0,
  "initialClk": "string",
  "orderFilter": {
    "accountIds": [
      0
    ],
    "customerStrategyRefs": [
      "string"
    ],
    "includeOverallPosition": true,
    "partitionMatchedByStrategyRef": true
  },
  "segmentationEnabled": true
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|
|clk|string|false|none|Token value delta (received in MarketChangeMessage) that should be passed to resume a subscription|
|conflateMs|integer(int64)|false|none|Conflate Milliseconds - the conflation rate (looped back on initial image after validation: bounds are 0 to 120000)|
|heartbeatMs|integer(int64)|false|none|Heartbeat Milliseconds - the heartbeat rate (looped back on initial image after validation: bounds are 500 to 5000)|
|initialClk|string|false|none|Token value (received in initial MarketChangeMessage) that should be passed to resume a subscription|
|orderFilter|[OrderFilter](#schemaorderfilter)|false|none|none|
|segmentationEnabled|boolean|false|none|Segmentation Enabled - allow the server to send large sets of data in segments, instead of a single block|

<h2 id="tocS_PriceLadderDefinition">PriceLadderDefinition</h2>
<!-- backwards compatibility -->
<a id="schemapriceladderdefinition"></a>
<a id="schema_PriceLadderDefinition"></a>
<a id="tocSpriceladderdefinition"></a>
<a id="tocspriceladderdefinition"></a>

```json
{
  "type": "CLASSIC"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|type|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|type|CLASSIC|
|type|FINEST|
|type|LINE_RANGE|

<h2 id="tocS_RequestMessage">RequestMessage</h2>
<!-- backwards compatibility -->
<a id="schemarequestmessage"></a>
<a id="schema_RequestMessage"></a>
<a id="tocSrequestmessage"></a>
<a id="tocsrequestmessage"></a>

```json
{
  "id": 0,
  "op": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|

<h2 id="tocS_ResponseMessage">ResponseMessage</h2>
<!-- backwards compatibility -->
<a id="schemaresponsemessage"></a>
<a id="schema_ResponseMessage"></a>
<a id="tocSresponsemessage"></a>
<a id="tocsresponsemessage"></a>

```json
{
  "id": 0,
  "op": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|

<h2 id="tocS_RunnerChange">RunnerChange</h2>
<!-- backwards compatibility -->
<a id="schemarunnerchange"></a>
<a id="schema_RunnerChange"></a>
<a id="tocSrunnerchange"></a>
<a id="tocsrunnerchange"></a>

```json
{
  "atb": [
    [
      0
    ]
  ],
  "atl": [
    [
      0
    ]
  ],
  "batb": [
    [
      0
    ]
  ],
  "batl": [
    [
      0
    ]
  ],
  "bdatb": [
    [
      0
    ]
  ],
  "bdatl": [
    [
      0
    ]
  ],
  "hc": 0,
  "id": 0,
  "ltp": 0,
  "spb": [
    [
      0
    ]
  ],
  "spf": 0,
  "spl": [
    [
      0
    ]
  ],
  "spn": 0,
  "trd": [
    [
      0
    ]
  ],
  "tv": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|atb|[[number(double)]]|false|none|Available To Back - PriceVol tuple delta of price changes (0 vol is remove)|
|atl|[[number(double)]]|false|none|Available To Lay - PriceVol tuple delta of price changes (0 vol is remove)|
|batb|[[number(double)]]|false|none|Best Available To Back - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)|
|batl|[[number(double)]]|false|none|Best Available To Lay - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)|
|bdatb|[[number(double)]]|false|none|Best Display Available To Back (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)|
|bdatl|[[number(double)]]|false|none|Best Display Available To Lay (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove)|
|hc|number(double)|false|none|Handicap - the handicap of the runner (selection) (null if not applicable)|
|id|integer(int64)|false|none|Selection Id - the id of the runner (selection)|
|ltp|number(double)|false|none|Last Traded Price - The last traded price (or null if un-changed)|
|spb|[[number(double)]]|false|none|Starting Price Back - PriceVol tuple delta of price changes (0 vol is remove)|
|spf|number(double)|false|none|Starting Price Far - The far starting price (or null if un-changed)|
|spl|[[number(double)]]|false|none|Starting Price Lay - PriceVol tuple delta of price changes (0 vol is remove)|
|spn|number(double)|false|none|Starting Price Near - The far starting price (or null if un-changed)|
|trd|[[number(double)]]|false|none|Traded - PriceVol tuple delta of price changes (0 vol is remove)|
|tv|number(double)|false|none|The total amount matched. This value is truncated at 2dp.|

<h2 id="tocS_RunnerDefinition">RunnerDefinition</h2>
<!-- backwards compatibility -->
<a id="schemarunnerdefinition"></a>
<a id="schema_RunnerDefinition"></a>
<a id="tocSrunnerdefinition"></a>
<a id="tocsrunnerdefinition"></a>

```json
{
  "adjustmentFactor": 0,
  "bsp": 0,
  "hc": 0,
  "id": 0,
  "removalDate": "1970-01-01T00:00:00Z",
  "sortPriority": 0,
  "status": "ACTIVE"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|adjustmentFactor|number(double)|false|none|none|
|bsp|number(double)|false|none|none|
|hc|number(double)|false|none|Handicap - the handicap of the runner (selection) (null if not applicable)|
|id|integer(int64)|false|none|Selection Id - the id of the runner (selection)|
|removalDate|string(date-time)|false|none|none|
|sortPriority|integer(int32)|false|none|none|
|status|string|false|none|none|

#### Enumerated Values

|Property|Value|
|---|---|
|status|ACTIVE|
|status|WINNER|
|status|LOSER|
|status|REMOVED|
|status|REMOVED_VACANT|
|status|HIDDEN|
|status|PLACED|

<h2 id="tocS_StatusMessage">StatusMessage</h2>
<!-- backwards compatibility -->
<a id="schemastatusmessage"></a>
<a id="schema_StatusMessage"></a>
<a id="tocSstatusmessage"></a>
<a id="tocsstatusmessage"></a>

```json
{
  "id": 0,
  "op": "string",
  "connectionClosed": true,
  "connectionId": "string",
  "connectionsAvailable": 0,
  "errorCode": "NO_APP_KEY",
  "errorMessage": "string",
  "statusCode": "SUCCESS"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|integer(int32)|false|none|Client generated unique id to link request with response (like json rpc)|
|op|string|false|none|The operation type|
|connectionClosed|boolean|false|none|Is the connection now closed|
|connectionId|string|false|none|The connection id|
|connectionsAvailable|integer(int32)|false|none|The number of connections available for this account at this moment in time. Present on responses to Authentication messages only.|
|errorCode|string|false|none|The type of error in case of a failure|
|errorMessage|string|false|none|Additional message in case of a failure|
|statusCode|string|false|none|The status of the last request|

#### Enumerated Values

|Property|Value|
|---|---|
|errorCode|NO_APP_KEY|
|errorCode|INVALID_APP_KEY|
|errorCode|NO_SESSION|
|errorCode|INVALID_SESSION_INFORMATION|
|errorCode|NOT_AUTHORIZED|
|errorCode|INVALID_INPUT|
|errorCode|INVALID_CLOCK|
|errorCode|UNEXPECTED_ERROR|
|errorCode|TIMEOUT|
|errorCode|SUBSCRIPTION_LIMIT_EXCEEDED|
|errorCode|INVALID_REQUEST|
|errorCode|CONNECTION_FAILED|
|errorCode|MAX_CONNECTION_LIMIT_EXCEEDED|
|errorCode|TOO_MANY_REQUESTS|
|statusCode|SUCCESS|
|statusCode|FAILURE|

<h2 id="tocS_StrategyMatchChange">StrategyMatchChange</h2>
<!-- backwards compatibility -->
<a id="schemastrategymatchchange"></a>
<a id="schema_StrategyMatchChange"></a>
<a id="tocSstrategymatchchange"></a>
<a id="tocsstrategymatchchange"></a>

```json
{
  "mb": [
    [
      0
    ]
  ],
  "ml": [
    [
      0
    ]
  ]
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|mb|[[number(double)]]|false|none|Matched Backs - matched amounts by distinct matched price on the Back side for this strategy|
|ml|[[number(double)]]|false|none|Matched Lays - matched amounts by distinct matched price on the Lay side for this strategy|
