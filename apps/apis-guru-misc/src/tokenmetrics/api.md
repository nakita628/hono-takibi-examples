<h1 id="endpoints">Endpoints v1.0.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Base URLs:

* <a href="https://api.tokenmetrics.com">https://api.tokenmetrics.com</a>

<h1 id="endpoints-default">Default</h1>

## Correlation

<a id="opIdcorrelation"></a>

> Code samples

```bash
curl https://example.com/v1/correlation
```

`GET /v1/correlation`

Correlation

<h3 id="correlation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|limit|query|string|false|none|

<h3 id="correlation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Indices

<a id="opIdindices"></a>

> Code samples

```bash
curl https://example.com/v1/indices
```

`GET /v1/indices`

Indices

<h3 id="indices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|exchanges|query|string|false|none|
|timeHorizon|query|string|false|none|
|lowCap|query|string|false|none|
|startDate|query|string|false|none|
|endDate|query|string|false|none|
|limit|query|string|false|none|

<h3 id="indices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Investor Grades

<a id="opIdinvestorGrades"></a>

> Code samples

```bash
curl https://example.com/v1/investor-grades
```

`GET /v1/investor-grades`

Investor Grades

<h3 id="investor-grades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|startDate|query|string|false|none|
|endDate|query|string|false|none|
|limit|query|string|false|none|

<h3 id="investor-grades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Market Indicator

<a id="opIdmarketIndicator"></a>

> Code samples

```bash
curl https://example.com/v1/market-indicator
```

`GET /v1/market-indicator`

Market Indicator

<h3 id="market-indicator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|startDate|query|string|false|none|
|endDate|query|string|false|none|
|limit|query|string|false|none|

<h3 id="market-indicator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Price

<a id="opIdprice"></a>

> Code samples

```bash
curl https://example.com/v1/price
```

`GET /v1/price`

Price

<h3 id="price-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|startDate|query|string|false|none|
|endDate|query|string|false|none|
|limit|query|string|false|none|
|page|query|string|false|none|

<h3 id="price-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Price Prediction

<a id="opIdpricePrediction"></a>

> Code samples

```bash
curl https://example.com/v1/price-prediction
```

`GET /v1/price-prediction`

Price Prediction

<h3 id="price-prediction-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|date|query|string|false|none|
|limit|query|string|false|none|

<h3 id="price-prediction-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Quantmetrics Tier 1

<a id="opIdquantmetricsTier1"></a>

> Code samples

```bash
curl https://example.com/v1/quantmetrics-tier-1
```

`GET /v1/quantmetrics-tier-1`

Quantmetrics Tier 1

<h3 id="quantmetrics-tier-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|date|query|string|false|none|
|limit|query|string|false|none|

<h3 id="quantmetrics-tier-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Quantmetrics Tier 2

<a id="opIdquantmetricsTier2"></a>

> Code samples

```bash
curl https://example.com/v1/quantmetrics-tier-2
```

`GET /v1/quantmetrics-tier-2`

Quantmetrics Tier 2

<h3 id="quantmetrics-tier-2-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|date|query|string|false|none|
|limit|query|string|false|none|

<h3 id="quantmetrics-tier-2-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Resistance &amp; Support

<a id="opIdresistanceSupport"></a>

> Code samples

```bash
curl https://example.com/v1/resistance-support
```

`GET /v1/resistance-support`

Resistance & Support

<h3 id="resistance-support-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|startDate|query|string|false|none|
|endDate|query|string|false|none|
|limit|query|string|false|none|

<h3 id="resistance-support-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Scenario Analysis

<a id="opIdscenarioAnalysis"></a>

> Code samples

```bash
curl https://example.com/v1/scenario-analysis
```

`GET /v1/scenario-analysis`

Scenario Analysis

<h3 id="scenario-analysis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|limit|query|string|false|none|

<h3 id="scenario-analysis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Sentiments

<a id="opIdsentiments"></a>

> Code samples

```bash
curl https://example.com/v1/sentiments
```

`GET /v1/sentiments`

Sentiments

<h3 id="sentiments-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|startDate|query|string|false|none|
|endDate|query|string|false|none|
|limit|query|string|false|none|

<h3 id="sentiments-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Tokens

<a id="opIdtokens"></a>

> Code samples

```bash
curl https://example.com/v1/tokens
```

`GET /v1/tokens`

Tokens

<h3 id="tokens-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|token_ids|query|string|false|none|
|token_names|query|string|false|none|
|token_symbols|query|string|false|none|

<h3 id="tokens-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Trader Grades

<a id="opIdtraderGrades"></a>

> Code samples

```bash
curl https://example.com/v1/trader-grades
```

`GET /v1/trader-grades`

Trader Grades

<h3 id="trader-grades-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|startDate|query|string|false|none|
|endDate|query|string|false|none|
|limit|query|string|false|none|

<h3 id="trader-grades-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>

## Trading Indicator

<a id="opIdtradingIndicator"></a>

> Code samples

```bash
curl https://example.com/v1/trading-indicator
```

`GET /v1/trading-indicator`

Trading Indicator

<h3 id="trading-indicator-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|tokens|query|string|false|none|
|limit|query|string|false|none|

<h3 id="trading-indicator-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK||None|

<aside class="success">
This operation does not require authentication
</aside>
