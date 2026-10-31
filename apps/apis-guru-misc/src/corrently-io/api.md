<h1 id="correntlyio">Corrently.io v2.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

*Corrently - from italian corrente, which is energy*
# Introduction
The Corrently ecosystem gets maintained by [STROMDAO GmbH](https://www.stromdao.de/) to support green energy services for prosumers, grid operators, regulators, integrators or any other party with an emerging need of consensus driven management.
As the [energy product Corrently](https://www.corrently.de/) got first launched in Germany parts of this documentation provide simple translations for better understanding.
[Released SKDs for Download](https://github.com/energychain/corrently-api/releases)

Base URLs:

* <a href="https://api.corrently.io/v2.0">https://api.corrently.io/v2.0</a>

<a href="https://corrently.io/terms/">Terms of service</a>
Email: <a href="mailto:dev@stromdao.com">dev@stromdao.com</a> 
Web: <a href="https://stromdao.de/kontakt">https://stromdao.de/kontakt</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<h1 id="correntlyio-stromkonto-ledger">Stromkonto (Ledger)</h1>

Managing accounts and balances for market partners (eq. households, grid operators, traders,..) Stromkonto is based on distributed ledger technology (AKA Blockchain). Instead of using the REST Api to access any energy ledger, you might act as a blockchain node and use the published ABI definitions to get the same results and/or run transactions directly.


## Balances

<a id="opIdstromkontoBalances"></a>

> Code samples

```bash
curl https://example.com/stromkonto/balances \
  -H 'Accept: application/json'
```

`GET /stromkonto/balances`

Stromkonto represents a core component of the Corrently Ecosystem. It is a ledger for green energy related transactions and gets heavily used by the public Web-UI on www.stromkonto.net . Beside of some decoration and reformating operations all data is backed by the [Energychain blockchain](https://github.com/energychain/) to provide consensus of balances and transactions. Use this API Endppoint if you prefere not to work with low level Distributed Ledger Technology (Blockchain).


<h3 id="balances-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|Ethereum style address referencing a valid account (AKA Stromkonto).|

> Example responses

> 200 Response

```json
[
  {
    "balance": 20,
    "haben": 20,
    "soll": 20,
    "txs": [
      {
        "cashier": "Miller",
        "timeStamp": 1606777200000,
        "txid": "722d30b2-b46f-4ed4-a8cd-16d262180d37",
        "txtype": "bank.incGSB",
        "value": 1337
      }
    ],
    "variation": "gsb"
  }
]
```

<h3 id="balances-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="balances-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Balance](#schemabalance)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Selectable Choices for customer

<a id="opIdstromkontoChoices"></a>

> Code samples

```bash
curl https://example.com/stromkonto/choices \
  -H 'Accept: application/json'
```

`GET /stromkonto/choices`

Signable choices (contract changes) for customer.


<h3 id="selectable-choices-for-customer-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|Ethereum style address referencing a valid account alias (never use Stromkonto directly!).|

> Example responses

> 200 Response

```json
[
  {
    "balance": 20,
    "haben": 20,
    "soll": 20,
    "txs": [
      {
        "cashier": "Miller",
        "timeStamp": 1606777200000,
        "txid": "722d30b2-b46f-4ed4-a8cd-16d262180d37",
        "txtype": "bank.incGSB",
        "value": 1337
      }
    ],
    "variation": "gsb"
  }
]
```

<h3 id="selectable-choices-for-customer-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="selectable-choices-for-customer-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Balance](#schemabalance)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Login (via Mail)

<a id="opIdstromkontoLogin"></a>

> Code samples

```bash
curl https://example.com/stromkonto/login \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string"
  }'
```

`POST /stromkonto/login`

Sends a mail to a given email address to login this user. This function makes life a bit easier in order to not having to deal with private key protection on the user side as a shared key is used to sign transactions onbehalf of a particular account.  However viewing consensus information (balances) are public and *might move* from account to account without prior notification. Best practice for third party uses is to always start a session with the login RESP call and only create a user in case the response indicates an `unregistered` status.


> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="login-via-mail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|false|none|

> Example responses

> 200 Response

```json
{
  "status": "registered"
}
```

<h3 id="login-via-mail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="login-via-mail-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Registration status of a user. In case unregistered gets returned use the `register` endpoint to (re-)register.|

#### Enumerated Values

|Property|Value|
|---|---|
|status|registered|
|status|unregistered|

<aside class="success">
This operation does not require authentication
</aside>

## Prepare Transaction

<a id="opIdprepareTransaction"></a>

> Code samples

```bash
curl https://example.com/stromkonto/prepareTransaction \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "account": "string",
    "signature": "string",
    "to": "string",
    "value": 0,
    "variation": "gsb"
  }'
```

`POST /stromkonto/prepareTransaction`

Prepares and inques a transaction (transfer) between two accounts (Stromkonten). This might be used to send any balanced entity. Using this endpoint will only prepare the transaction and enques it for signing and countersigning. This is done from within the user UI using validation process. Note: This API method does not validate any transations. In other words authentication, authorization, validation and actual transfer of value is done using a smart contract during processing in the energy blockchain.


> Body parameter

```json
{
  "account": "string",
  "signature": "string",
  "to": "string",
  "value": 0,
  "variation": "gsb"
}
```

<h3 id="prepare-transaction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» account|body|string|false|Stromkonto account address of sender|
|» signature|body|string|false|Signature per Stromkonto setting (might be simple email confirmation link)|
|» to|body|string|false|Stromkonto account address of reciever|
|» value|body|integer|false|Amount to transfer (in Watthours for electricity, or pcs for trees)|
|» variation|body|string|false|none|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» variation|gsb|
|» variation|erzeugung|
|» variation|eigenstrom|
|» variation|co2|
|» variation|baeume|

<h3 id="prepare-transaction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Register (new Stromkonto)

<a id="opIdstromkontoRegister"></a>

> Code samples

```bash
curl https://example.com/stromkonto/register \
  -X POST \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "string",
    "first_name": "string",
    "last_name": "string",
    "zipcode": "string"
  }'
```

`POST /stromkonto/register`

Calling this method with an unregistered (new) email will create a new account (Stromkonto) with all balances having a value of `0` and no transaction history. In addition some basic properties like region and zipcode are set to allow further operation of account.


> Body parameter

```json
{
  "email": "string",
  "first_name": "string",
  "last_name": "string",
  "zipcode": "string"
}
```

<h3 id="register-new-stromkonto-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|false|none|
|» first_name|body|string|false|none|
|» last_name|body|string|false|none|
|» zipcode|body|string|false|none|

<h3 id="register-new-stromkonto-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="correntlyio-greenpowerindex-grünstromindex">GreenPowerIndex (GrünstromIndex)</h1>

Green Power Index (GrünstromIndex), an AI based service to forecast energy sources in the grid (regionale Stromherkunft).
Further Details and sample implementation is available at [gruenstromindex.de](https://www.gruenstromindex.de/).


## Get best hour (with most regional green energy) in a given timeframe.

<a id="opIdgsiBesthour"></a>

> Code samples

```bash
curl https://example.com/gsi/bestHour \
  -H 'Accept: application/json'
```

`GET /gsi/bestHour`

Simple Wrapper around the GreenPowerIndex for easy integration into almost any SmartHome system that allows access to a JSON/REST Service This endpoint is designed to indicate if a device should be turned on or off. (Switch state).


<h3 id="get-best-hour-with-most-regional-green-energy-in-a-given-timeframe-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zip|query|string|false|Zipcode (Postleitzahl) of a city in Germany.|
|key|query|string|false|Any valid Stromkonto account (address).|
|timeframe|query|integer|false|Number of hours to check (default 24 hours from now).|
|hours|query|integer|false|How many hours in row do you need the device turned on?|

> Example responses

> 200 Response

```json
true
```

<h3 id="get-best-hour-with-most-regional-green-energy-in-a-given-timeframe-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Dispatch (Green Energy Distribution Schedule)

<a id="opIdgsiDispatch"></a>

> Code samples

```bash
curl https://example.com/gsi/dispatch \
  -H 'Accept: application/json'
```

`GET /gsi/dispatch`

Dispatch of green energy has two aspects to consider:
  - Availability of gerneration facility (depends on weather and installed capacity)
  - Demand of energy
Using the green power index (GrünstromIndex) we have received a tool to automate distribution of energy in order to prevent redispatch situations. Doing this alows to opimize resource usage (tactical) and leverage data for investment planning (strategic).


<h3 id="dispatch-green-energy-distribution-schedule-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zip|query|string|false|Zipcode (Postleitzahl) of a city in Germany.|
|key|query|string|false|Any valid Stromkonto account (address).|

> Example responses

> 200 Response

```json
{
  "avg_distance_km": 0,
  "dispatch_from": [
    {
      "energy": 0.2345677,
      "location": {}
    }
  ],
  "dispatch_target": [
    {
      "energy": 0.2345677,
      "location": {}
    }
  ],
  "postmix": {},
  "premix": {},
  "timeframe": {
    "end": 0,
    "start": 0
  }
}
```

<h3 id="dispatch-green-energy-distribution-schedule-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="dispatch-green-energy-distribution-schedule-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|avg_distance_km|number|false|none|Averaged geospatial distance in kilometers between energy generation and usage at requested location.|
|dispatch_from|[[DispatchLocation](#schemadispatchlocation)]|false|none|List of current sources of green energy (into requested location)|
|dispatch_target|[[DispatchLocation](#schemadispatchlocation)]|false|none|List of current targets of green energy (out of requested location)|
|postmix|object|false|none|Green Energy Mix after dispatch of given city|
|premix|object|false|none|Green Energy Mix prior to dispatch of given city|
|timeframe|object|false|none|Evaluated timeframe for this request|
|» end|integer|false|none|Ending time of window evaluated for this request/dispatches.|
|» start|integer|false|none|Starting time of window evaluated in order to get dispatches|

<aside class="success">
This operation does not require authentication
</aside>

## Marketdata

<a id="opIdgsiMarketdata"></a>

> Code samples

```bash
curl https://example.com/gsi/marketdata \
  -H 'Accept: application/json'
```

`GET /gsi/marketdata`

Compatible to awattar (https://api.awattar.de/v1/marketdata) API interface but data comes from GreenPowerIndex instead of EPEXSpot.


<h3 id="marketdata-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zip|query|string|false|Zipcode (Postleitzahl) of a city in Germany.|

> Example responses

> 200 Response

```json
{
  "data": [
    {
      "end_timestamp": 1609293600000,
      "marketprice": 43,
      "start_timestamp": 1609293600000
    }
  ]
}
```

<h3 id="marketdata-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="marketdata-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|[[MarketData](#schemamarketdata)]|false|none|Energyprice for the upcomming hours|

<aside class="success">
This operation does not require authentication
</aside>

## Prediction

<a id="opIdgsiPrediction"></a>

> Code samples

```bash
curl https://example.com/gsi/prediction \
  -H 'Accept: application/json'
```

`GET /gsi/prediction`

Retrieval the GreenPowerIndex (GrünstromIndex) for a given city (by zipcode) in Germany.


<h3 id="prediction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zip|query|string|false|Zipcode (Postleitzahl) of a city in Germany.|
|key|query|string|false|Any valid Stromkonto account (address).|

> Example responses

> 200 Response

```json
{
  "forecast": [
    {
      "co2_g_oekostrom": 23,
      "energyprice": -0.219,
      "epochtime": 1609293600,
      "gsi": 43,
      "scaled": true,
      "sci": 43,
      "timeStamp": 1609293600000
    }
  ],
  "location": {
    "city": "string",
    "zip": "string"
  },
  "matrix": {
    "h0": {
      "avg_1": "string",
      "avg_2": "string",
      "avg_3": "string"
    }
  }
}
```

<h3 id="prediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="prediction-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|forecast|[[ForecastItem](#schemaforecastitem)]|false|none|Prediction for the upcomming hours|
|location|object|false|none|Standarized location info sourced for prediction|
|» city|string|false|none|Pretty Print city name|
|» zip|string|false|none|Zipcode (Postleitzahl)|
|matrix|object|false|none|Device switching recommendation.|
|» h0|object|false|none|Indicates number of hours a device should run|
|» » avg_1|string|false|none|device should run in 1 hour|
|» » avg_2|string|false|none|device should run in 2 hours|
|» » avg_3|string|false|none|device should run in 3 hour|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="correntlyio-metering-decorator">Metering (Decorator)</h1>

Allows to virtualy act as an Meter Point Operator by decorating meter readings with GreenPowerIndex (GrünstromIndex) handles. In principal this service decorates meter [OBIS Code](https://de.wikipedia.org/wiki/OBIS-Kennzahlen) 1.8.0 values to 1.8.1 and 1.8.2 according to the local and actual GSI value. A signature gets applied to the reading and all three OBIS values get hashed into the Energychain for consensus (e.q. creating balancing groups). CO2 footprint of a meter gets provided (as of first reading pushed).This works in conjunction with German Smart Meter Gateways (as of March 2020).


## Meter Reading

<a id="opIdmeteringGet"></a>

> Code samples

```bash
curl https://example.com/metering/reading \
  -H 'Accept: application/json'
```

`GET /metering/reading`

Retrieves a metered reading using account (Stromkonto).


<h3 id="meter-reading-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|Account/Address (Stromkonto) to retrieve reading for.|

> Example responses

> 200 Response

```json
{
  "1.8.0": 0,
  "1.8.1": 0,
  "1.8.2": 0,
  "_processingTime": 0,
  "account": "string",
  "co2_g_oekostrom": 0,
  "co2_g_standard": 0,
  "credits": null,
  "timeStamp": 0,
  "ttl": 0
}
```

<h3 id="meter-reading-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="meter-reading-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|1.8.0|integer|false|none|Reading as provided as input in Wh|
|1.8.1|integer|false|none|Green energy calculated using Green Power Index (GrünstromIndex) in Wh|
|1.8.2|integer|false|none|Grey energy calculated using Green Power Index (GrünstromIndex) in Wh|
|_processingTime|integer|false|none|Time this reading got imported into consensus (e.q. signed timestamp).|
|account|string|false|none|Stromkonto/Metering address allocated (this is not the MELOID!)|
|co2_g_oekostrom|integer|false|none|CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)|
|co2_g_standard|integer|false|none|CO2 Emission of metered energy in a standard mix|
|credits|object|false|none|Update credits this meter has. Gets refilled automtically to prevent too frequent updates|
|timeStamp|integer|false|none|API Consensus time this reading was fully received|
|ttl|integer|false|none|Time to Live for this reader. If no update is provided it gets decommissioned.|

<aside class="success">
This operation does not require authentication
</aside>

## Meter Reading

<a id="opIdmeteringPost"></a>

> Code samples

```bash
curl https://example.com/metering/reading \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "1.8.0": 0,
    "account": "string",
    "energy": 0,
    "secret": "string",
    "value": 0,
    "zip": "string"
  }'
```

`POST /metering/reading`

Post meter reading and get it decorated. Best practice is to first create a new Stromkonto with the register method and choose a nice secret to protect updates. Now regularly send updates to get readings (consumption) split into green power (1.8.1) and grey power (1.8.2).


> Body parameter

```json
{
  "1.8.0": 0,
  "account": "string",
  "energy": 0,
  "secret": "string",
  "value": 0,
  "zip": "string"
}
```

<h3 id="meter-reading-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» 1.8.0|body|integer|false|Meter Reading (prefered in Wh)|
|» account|body|string|false|Stromkonto account (address) associated with this metering.|
|» energy|body|integer|false|Alias for 1.8.0|
|» secret|body|string|false|Some private password you might choose on first update. However you need to use the same secret on every further posts.|
|» value|body|integer|false|Alias for 1.8.0|
|» zip|body|string|false|Zipcode (Postleitzahl) of metered location|

> Example responses

> 200 Response

```json
{
  "1.8.0": 0,
  "1.8.1": 0,
  "1.8.2": 0,
  "_processingTime": 0,
  "account": "string",
  "co2_g_oekostrom": 0,
  "co2_g_standard": 0,
  "timeStamp": 0
}
```

<h3 id="meter-reading-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="meter-reading-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|1.8.0|integer|false|none|Reading as provided as input in Wh|
|1.8.1|integer|false|none|Green energy calculated using Green Power Index (GrünstromIndex) in Wh|
|1.8.2|integer|false|none|Grey energy calculated using Green Power Index (GrünstromIndex) in Wh|
|_processingTime|integer|false|none|Time this reading got imported into consensus (e.q. signed timestamp).|
|account|string|false|none|Stromkonto/Metering address allocated (this is not the MELOID!)|
|co2_g_oekostrom|integer|false|none|CO2 Emission of metered energy in a green energy mix (e.q. Ökostromtarif)|
|co2_g_standard|integer|false|none|CO2 Emission of metered energy in a standard mix|
|timeStamp|integer|false|none|API Consensus time this reading was fully received|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="correntlyio-tariff-price-api">Tariff (Price API)</h1>

Tariff information for the German market region. Provides base price and energy price information for private households (Standardlastprofil H0, SLP H0 Tarifinformation).

## Energy Tariff price components

<a id="opIdtariffcomponents"></a>

> Code samples

```bash
curl https://example.com/tariff/components \
  -H 'Accept: application/json'
```

`GET /tariff/components`

Provides insides into the different cost components of energy for a private household.
Sample Request: https://api.corrently.io/v2.0/tariff/components?email=demo%40corrently.io&zip=69168&kwha=3300


<h3 id="energy-tariff-price-components-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zipcode|query|string|false|Zipcode (Postzleitzahl) of a city in Germany.|
|email|query|string|false|Valid email address to assign request to (pre offer generation). Ensure GDPR (DSGVO) at any time|
|kwha|query|integer|false|Total amount of energy in kilo-watt-hours per year. (sample 2100)|
|milliseconds|query|integer|false|If provided all results will be scaled to this timeframe|
|wh|query|integer|false|If provided together with milliseconds, a cost component stament for a particular event (like charging a car) will be created.|

> Example responses

> 200 Response

```json
{
  "components": [
    {}
  ],
  "describtion": "Grundgebühr",
  "mutlityplier": "month",
  "per": 0.012,
  "sum": 22.12
}
```

<h3 id="energy-tariff-price-components-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|[componentsh0](#schemacomponentsh0)|

<aside class="success">
This operation does not require authentication
</aside>

## Energy Tariff information

<a id="opIdtariffSLPH0"></a>

> Code samples

```bash
curl https://example.com/tariff/slph0 \
  -H 'Accept: application/json'
```

`GET /tariff/slph0`

Provides pricing data for private households with standard load profiles (Standardlastprofil H0).


<h3 id="energy-tariff-information-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|zipcode|query|string|false|Zipcode (Postzleitzahl) of a city in Germany.|

> Example responses

> 200 Response

```json
[
  {
    "ap": 22.12,
    "gp": 7.5
  }
]
```

<h3 id="energy-tariff-information-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="energy-tariff-information-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Tariffh0](#schematariffh0)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="correntlyio-wim-wechselprozesse-im-messwesen-strom---status-api">WiM (Wechselprozesse im Messwesen Strom - Status API)</h1>

Access to status information of an existing metering change and allocation process.

## WiM Proess Informtion

<a id="opIdwimstatus"></a>

> Code samples

```bash
curl https://example.com/wim/status \
  -H 'Accept: application/json'
```

`GET /wim/status`

Access to status information of an existing metering change and allocation process.


<h3 id="wim-proess-informtion-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|vid|query|string|false|VID key of the process.|

> Example responses

> 200 Response

```json
{
  "wim_started": 1615914297977,
  "wim_status": "Erfolgreiche Prüfung"
}
```

<h3 id="wim-proess-informtion-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="wim-proess-informtion-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|wim_started|integer|false|none|Starting time of process|
|wim_status|string|false|none|Latest Status|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="correntlyio-openmeter">OpenMETER</h1>

Alternative access to OpenMeter Data.

## Public shared smart meters installed in Germany and available for subservices and exploration.

<a id="opIdomActivities"></a>

> Code samples

```bash
curl https://example.com/alternative/openmeter/activities \
  -H 'Accept: application/json'
```

`GET /alternative/openmeter/activities`

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


> Example responses

> 200 Response

```json
[
  {
    "currentScalingFactor": 0,
    "loadProfileType": "string",
    "location": "string",
    "manufacturerId": "string",
    "measurementType": "string",
    "meta": "string",
    "meterId": "gAAAAABgsYVSfcCjJZV5w2wGBTzOXCihY7dMaDyypwcbJzAELvxeCDaXiy65H2QwtY-7usSOfoqEIomTJjQb1yyIXZfFnTY2pmLgIu_DVw1rjppFte56yWBD5Fgrmbh2KyOkMNUr8zxO",
    "scalingFactor": 0,
    "type": "string",
    "voltageScalingFactor": 0
  }
]
```

<h3 id="public-shared-smart-meters-installed-in-germany-and-available-for-subservices-and-exploration-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="public-shared-smart-meters-installed-in-germany-and-available-for-subservices-and-exploration-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ommeters](#schemaommeters)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Public shared smart meters installed in Germany and available for subservices and exploration.

<a id="opIdomMeters"></a>

> Code samples

```bash
curl https://example.com/alternative/openmeter/meters \
  -H 'Accept: application/json'
```

`GET /alternative/openmeter/meters`

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


> Example responses

> 200 Response

```json
[
  {
    "currentScalingFactor": 0,
    "loadProfileType": "string",
    "location": "string",
    "manufacturerId": "string",
    "measurementType": "string",
    "meta": "string",
    "meterId": "gAAAAABgsYVSfcCjJZV5w2wGBTzOXCihY7dMaDyypwcbJzAELvxeCDaXiy65H2QwtY-7usSOfoqEIomTJjQb1yyIXZfFnTY2pmLgIu_DVw1rjppFte56yWBD5Fgrmbh2KyOkMNUr8zxO",
    "scalingFactor": 0,
    "type": "string",
    "voltageScalingFactor": 0
  }
]
```

<h3 id="public-shared-smart-meters-installed-in-germany-and-available-for-subservices-and-exploration-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="public-shared-smart-meters-installed-in-germany-and-available-for-subservices-and-exploration-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ommeters](#schemaommeters)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Public shared smart meters installed in Germany and available for subservices and exploration.

<a id="opIdomReadings"></a>

> Code samples

```bash
curl https://example.com/alternative/openmeter/readings \
  -H 'Accept: application/json'
```

`GET /alternative/openmeter/readings`

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


> Example responses

> 200 Response

```json
[
  {
    "currentScalingFactor": 0,
    "loadProfileType": "string",
    "location": "string",
    "manufacturerId": "string",
    "measurementType": "string",
    "meta": "string",
    "meterId": "gAAAAABgsYVSfcCjJZV5w2wGBTzOXCihY7dMaDyypwcbJzAELvxeCDaXiy65H2QwtY-7usSOfoqEIomTJjQb1yyIXZfFnTY2pmLgIu_DVw1rjppFte56yWBD5Fgrmbh2KyOkMNUr8zxO",
    "scalingFactor": 0,
    "type": "string",
    "voltageScalingFactor": 0
  }
]
```

<h3 id="public-shared-smart-meters-installed-in-germany-and-available-for-subservices-and-exploration-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="public-shared-smart-meters-installed-in-germany-and-available-for-subservices-and-exploration-2-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[ommeters](#schemaommeters)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="correntlyio-easee">easee</h1>

Alternative access to EASEE.cloud Data.

## Returns lastSession info for all easee wallboxes (chargers) given user has access to.

<a id="opIdeaseeSessions"></a>

> Code samples

```bash
curl https://example.com/alternative/easee/lastSessions \
  -H 'Accept: application/json'
```

`GET /alternative/easee/lastSessions`

Refer to easee.cloud API for details.


<h3 id="returns-lastsession-info-for-all-easee-wallboxes-chargers-given-user-has-access-to-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|username|query|string|false|Username as used on easy.cloud|
|password|query|string|false|Password as used on easy.cloud|

> Example responses

> 200 Response

```json
[
  {
    "id": "EH780684",
    "lastSession": "string",
    "name": "string"
  }
]
```

<h3 id="returns-lastsession-info-for-all-easee-wallboxes-chargers-given-user-has-access-to-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="returns-lastsession-info-for-all-easee-wallboxes-chargers-given-user-has-access-to-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[easee-charger](#schemaeasee-charger)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="correntlyio-ocpp">OCPP</h1>

Alternative access to Corrently OCPP Data (hosted cloud backend).

## Last Session Info

<a id="opIdocppSessions"></a>

> Code samples

```bash
curl https://example.com/alternative/ocpp/lastSessions \
  -H 'Accept: application/json'
```

`GET /alternative/ocpp/lastSessions`

Returns lastSession info of OCCP Cloud service for clearing in corrently ecosystem. Might be tested via [OCPP cloud simulator](https://ocpp.corrently.cloud).
Last session Info of managed EV charging stations connected to the correnty ecosystem.


> Example responses

> 200 Response

```json
[
  {
    "id": "EH780684",
    "lastSession": "string",
    "name": "string"
  }
]
```

<h3 id="last-session-info-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="last-session-info-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[easee-charger](#schemaeasee-charger)]|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="correntlyio-strom-quittung">Strom-Quittung</h1>

Self-Service to create a full receipt (Quittung) for energy delivery in case of submetering. Please refer to [Strom-Quittung](http://strom-quittung.de) for a sample usage.


## Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare

<a id="opIdquittungComit"></a>

> Code samples

```bash
curl https://example.com/quittung/commit \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": "string"
  }'
```

`POST /quittung/commit`

Uses collected fields or provided fields to create a final receipt (Strom-Quittung).


> Body parameter

```json
{
  "account": "string"
}
```

<h3 id="finishs-a-collection-of-data-and-finalizes-receipt-use-this-method-after-collecting-all-data-via-quittungprepare-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account|body|string|false|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="finishs-a-collection-of-data-and-finalizes-receipt-use-this-method-after-collecting-all-data-via-quittungprepare-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Create a receipt for an energy delivery (only valid in Germany).

<a id="opIdquittungCreate"></a>

> Code samples

```bash
curl https://example.com/quittung/create \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "email": "string"
  }'
```

`POST /quittung/create`

Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.


> Body parameter

```json
{
  "email": "string"
}
```

<h3 id="create-a-receipt-for-an-energy-delivery-only-valid-in-germany-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» email|body|string|false|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="create-a-receipt-for-an-energy-delivery-only-valid-in-germany-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Allows to collect data with several requests (or a single) for a receipt.

<a id="opIdquittungPrepare"></a>

> Code samples

```bash
curl https://example.com/quittung/prepare \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -d '{
    "account": "string"
  }'
```

`POST /quittung/prepare`

During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.


> Body parameter

```json
{
  "account": "string"
}
```

<h3 id="allows-to-collect-data-with-several-requests-or-a-single-for-a-receipt-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|false|none|
|» account|body|string|false|none|

> Example responses

> 200 Response

```json
"string"
```

<h3 id="allows-to-collect-data-with-several-requests-or-a-single-for-a-receipt-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).

<a id="opIdquittungTSE"></a>

> Code samples

```bash
curl https://example.com/quittung/tse \
  -X POST \
  -H 'Accept: application/json'
```

`POST /quittung/tse`

Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.


<h3 id="retrieve-tse-technische-sicherheitseinrichtung-data-for-a-given-receipt-strom-quittung-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|Quittung Identifier  (serialnumber generated during receipt generation process)|

> Example responses

> 200 Response

```json
{
  "data": null,
  "publickey": "string",
  "raw": "string",
  "signature": "string"
}
```

<h3 id="retrieve-tse-technische-sicherheitseinrichtung-data-for-a-given-receipt-strom-quittung-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|Inline|

<h3 id="retrieve-tse-technische-sicherheitseinrichtung-data-for-a-given-receipt-strom-quittung-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|data|object|false|none|JSON object that got signed by TSE.|
|publickey|string|false|none|Public Key of TSE|
|raw|string|false|none|Datastring of JSON Object as it got used to create signature.|
|signature|string|false|none|Resulting signature by signing raw datastring using private key of TSE.|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve TSE (Technische Sicherheitseinrichtung) raw data only for a given receipt (Strom-Quittung).

<a id="opIdquittungTSEData"></a>

> Code samples

```bash
curl https://example.com/quittung/tsedata \
  -X POST
```

`POST /quittung/tsedata`

Allows to retrieve input string for a signing process.


<h3 id="retrieve-tse-technische-sicherheitseinrichtung-raw-data-only-for-a-given-receipt-strom-quittung-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|Quittung Identifier  (serialnumber generated during receipt generation process)|

<h3 id="retrieve-tse-technische-sicherheitseinrichtung-raw-data-only-for-a-given-receipt-strom-quittung-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).

<a id="opIdquittungTSEsignature"></a>

> Code samples

```bash
curl https://example.com/quittung/tsesignature \
  -X POST
```

`POST /quittung/tsesignature`

Allows to retrieve digital signature for a given receipt.


<h3 id="retrieve-tse-technische-sicherheitseinrichtung-signature-only-for-a-given-receipt-strom-quittung-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|Quittung Identifier  (serialnumber generated during receipt generation process)|

<h3 id="retrieve-tse-technische-sicherheitseinrichtung-signature-only-for-a-given-receipt-strom-quittung-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve Zugferd XML for a given receipt (Strom-Quittung).

<a id="opIdquittungZugferd"></a>

> Code samples

```bash
curl https://example.com/quittung/zugferd
```

`GET /quittung/zugferd`

Allows to retrieve XML of the zugferd invoice.


<h3 id="retrieve-zugferd-xml-for-a-given-receipt-strom-quittung-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|account|query|string|false|Quittung Identifier  (serialnumber generated during receipt generation process)|

<h3 id="retrieve-zugferd-xml-for-a-given-receipt-strom-quittung-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|Success|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Balance">Balance</h2>
<!-- backwards compatibility -->
<a id="schemabalance"></a>
<a id="schema_Balance"></a>
<a id="tocSbalance"></a>
<a id="tocsbalance"></a>

```json
{
  "balance": 20,
  "haben": 20,
  "soll": 20,
  "txs": [
    {
      "cashier": "Miller",
      "timeStamp": 1606777200000,
      "txid": "722d30b2-b46f-4ed4-a8cd-16d262180d37",
      "txtype": "bank.incGSB",
      "value": 1337
    }
  ],
  "variation": "gsb"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|balance|integer|false|none|Sum owned - sum due by account|
|haben|integer|false|none|Sum owned by account|
|soll|integer|false|none|Sum due by account|
|txs|[[Transactions](#schematransactions)]|false|none|none|
|variation|string|false|none|Type of subbalance (sub account)|

#### Enumerated Values

|Property|Value|
|---|---|
|variation|gsb|
|variation|erzeugung|
|variation|eigenstrom|
|variation|co2|
|variation|baeume|

<h2 id="tocS_DispatchLocation">DispatchLocation</h2>
<!-- backwards compatibility -->
<a id="schemadispatchlocation"></a>
<a id="schema_DispatchLocation"></a>
<a id="tocSdispatchlocation"></a>
<a id="tocsdispatchlocation"></a>

```json
{
  "energy": 0.2345677,
  "location": {}
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|energy|number|false|none|Percentage of energy|
|location|object|false|none|GeoJSON encoded location of target or source of green energy.|

<h2 id="tocS_ForecastItem">ForecastItem</h2>
<!-- backwards compatibility -->
<a id="schemaforecastitem"></a>
<a id="schema_ForecastItem"></a>
<a id="tocSforecastitem"></a>
<a id="tocsforecastitem"></a>

```json
{
  "co2_g_oekostrom": 23,
  "energyprice": -0.219,
  "epochtime": 1609293600,
  "gsi": 43,
  "scaled": true,
  "sci": 43,
  "timeStamp": 1609293600000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|co2_g_oekostrom|integer|false|none|CO2 footprint in Gramm per kwh (only Green Power)|
|energyprice|number|false|none|Local/regional energyprice modification (cent per kWh or euro per MWh).|
|epochtime|integer|false|none|Timestamps in Seconds|
|gsi|integer|false|none|Actual GreenPowerIndex for given Timestamp (between 0-100)|
|scaled|boolean|false|none|Indicates if scaling is in operation to predict values|
|sci|integer|false|none|Subindex just for Solar Energy|
|timeStamp|integer|false|none|Timestamp in Standard Milliseconds|

<h2 id="tocS_MarketData">MarketData</h2>
<!-- backwards compatibility -->
<a id="schemamarketdata"></a>
<a id="schema_MarketData"></a>
<a id="tocSmarketdata"></a>
<a id="tocsmarketdata"></a>

```json
{
  "end_timestamp": 1609293600000,
  "marketprice": 43,
  "start_timestamp": 1609293600000
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|end_timestamp|integer|false|none|Timestamp in Standard Milliseconds|
|marketprice|number|false|none|Actual Marketprice for regional green power in EUR per MWh|
|start_timestamp|integer|false|none|Timestamp in Standard Milliseconds|

<h2 id="tocS_Tariffh0">Tariffh0</h2>
<!-- backwards compatibility -->
<a id="schematariffh0"></a>
<a id="schema_Tariffh0"></a>
<a id="tocStariffh0"></a>
<a id="tocstariffh0"></a>

```json
{
  "ap": 22.12,
  "gp": 7.5
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|ap|integer|false|none|Energy price in cent per kwh. (Arbeitspreis) including all taxes and fees.|
|gp|integer|false|none|Base price in euro per montah (Grundpreis) including all taxes and fees.|

<h2 id="tocS_Transactions">Transactions</h2>
<!-- backwards compatibility -->
<a id="schematransactions"></a>
<a id="schema_Transactions"></a>
<a id="tocStransactions"></a>
<a id="tocstransactions"></a>

```json
{
  "cashier": "Miller",
  "timeStamp": 1606777200000,
  "txid": "722d30b2-b46f-4ed4-a8cd-16d262180d37",
  "txtype": "bank.incGSB",
  "value": 1337
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cashier|string|false|none|Pretty print of counter signing party|
|timeStamp|integer|false|none|Cross signed timestamp of transaction|
|txid|string|false|none|Unique hash of this transaction as provided by counter signing party|
|txtype|string|false|none|Type of transaction per cashier implementation and schema|
|value|integer|false|none|Amount covered by transaction|

<h2 id="tocS_componentsh0">componentsh0</h2>
<!-- backwards compatibility -->
<a id="schemacomponentsh0"></a>
<a id="schema_componentsh0"></a>
<a id="tocScomponentsh0"></a>
<a id="tocscomponentsh0"></a>

```json
{
  "components": [
    {
      "components": [
        {}
      ],
      "describtion": "Grundgebühr",
      "mutlityplier": "month",
      "per": 0.012,
      "sum": 22.12
    }
  ],
  "describtion": "Grundgebühr",
  "mutlityplier": "month",
  "per": 0.012,
  "sum": 22.12
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|components|[[componentsh0](#schemacomponentsh0)]|false|none|Sub components of this price|
|describtion|string|false|none|What is this price component about|
|mutlityplier|string|false|none|Frequency/dependency of component|
|per|number(double)|false|none|Single unit price multiyplier is based on|
|sum|number(double)|false|none|Total sum in Euro for this price component.|

<h2 id="tocS_easee-charger">easee-charger</h2>
<!-- backwards compatibility -->
<a id="schemaeasee-charger"></a>
<a id="schema_easee-charger"></a>
<a id="tocSeasee-charger"></a>
<a id="tocseasee-charger"></a>

```json
{
  "id": "EH780684",
  "lastSession": "string",
  "name": "string"
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|Given ID by easee api|
|lastSession|string|false|none|lastSession Info as given by easee API|
|name|string|false|none|Name set for charger|

<h2 id="tocS_ommeters">ommeters</h2>
<!-- backwards compatibility -->
<a id="schemaommeters"></a>
<a id="schema_ommeters"></a>
<a id="tocSommeters"></a>
<a id="tocsommeters"></a>

```json
{
  "currentScalingFactor": 0,
  "loadProfileType": "string",
  "location": "string",
  "manufacturerId": "string",
  "measurementType": "string",
  "meta": "string",
  "meterId": "gAAAAABgsYVSfcCjJZV5w2wGBTzOXCihY7dMaDyypwcbJzAELvxeCDaXiy65H2QwtY-7usSOfoqEIomTJjQb1yyIXZfFnTY2pmLgIu_DVw1rjppFte56yWBD5Fgrmbh2KyOkMNUr8zxO",
  "scalingFactor": 0,
  "type": "string",
  "voltageScalingFactor": 0
}
```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|currentScalingFactor|integer|false|none|Factor imposed on metered current by a transducer|
|loadProfileType|string|false|none|Metering load profile type associated with the meter|
|location|string|false|none|Basic address information for geo coding|
|manufacturerId|string|false|none|DLMS manufacturerId|
|measurementType|string|false|none|Physical quantity being measured by the meter|
|meta|string|false|none|Statistical metadata for this household|
|meterId|string|false|none|identifier to be used in other methods like readings or activities.|
|scalingFactor|integer|false|none|Factor imposed on metered current AND voltage by a transducer|
|type|string|false|none|Device type of the meter|
|voltageScalingFactor|integer|false|none|Factor imposed on metered voltage by a transducer|
