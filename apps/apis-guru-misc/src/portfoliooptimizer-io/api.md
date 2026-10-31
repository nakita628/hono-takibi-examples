<h1 id="portfolio-optimizer">Portfolio Optimizer v1.0.9</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).

# API General Information

  Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).

Portfolio Optimizer is also as secured as a Web API could be: 
* [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS)
* No usage of cookies
* No usage of personal data  

## API Headers 
The following HTTP header(s) are required when calling Portfolio Optimizer endpoints:
* `Content-type: application/json`  
  This header specifies that the data provided in input to the endpoint is in JSON format

The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints:
* `Content-Encoding: gzip`  
  This header indicates that the data provided in input to the endpoint is compressed with gzip.
* `X-API-Key: <private API key>`  
  This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)

## API Key
Portfolio Optimizer is free to use, but not free to run.

In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.

This participation takes the form of coffee(s), with one coffee = one month of usage.

<p><a href="https://www.buymeacoffee.com/portfolioopt"><img alt='Buy a Coffee at buymeacoffee.com' src="https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00"></a></p>


> **Notes:** 
> * Please make sure not to expose your API key publicly!

## API Limits 

Portfolio Optimizer comes with *fairly reasonable* API limits.

For anonymous users:  
* The API requests are restricted to a subset of all the available endpoints and/or endpoints features  
* The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected 
* The API requests are limited to 1 second of execution time
* The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors

For authenticated users with an [API key](#overview--api-key):  
* The API requests have access to all the available endpoints and endpoints features
* The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued
* The API requests are limited to 2.5 seconds of execution time
* The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors

> **Notes:** 
> * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.
> * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:  
>   * `x-ratelimit-limit-second`, the limit on the number of API requests per second
>   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second    
>   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute
>   * ...

## API Regions
Portfolio Optimizer servers are located in Western Europe.

> **Notes:** 
> * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. 

## API Response Codes       

Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.

| HTTP Code | Description | Notes |
| --------- | ----------- | ----- |
| 200 | Request successfully processed | - |
| 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content |
| 401 | Request failed to be processed because of invalid API key | - |
| 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) |
| 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) |
| 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) |
| 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |

## API Status  

Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).

# Support

For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/).

Base URLs:

* <a href="https://api.portfoliooptimizer.io/v1">https://api.portfoliooptimizer.io/v1</a>

* <a href="https://eu-west-1.api.portfoliooptimizer.io/v1">https://eu-west-1.api.portfoliooptimizer.io/v1</a>

<a href="https://portfoliooptimizer.io/terms-of-service">Terms of service</a>
Email: <a href="mailto:contact@portfoliooptimizer.io">Support</a> 
Web: <a href="https://portfoliooptimizer.io/">Support</a> 
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

<a href="https://docs.portfoliooptimizer.io/">External documentation</a>

# Authentication

* API Key (ApiKeyAuth)
    - Parameter Name: **X-API-Key**, in: header. An [API key](#overview--api-key) is required to benefit from [higher API limits](#overview--api-limits).

<h1 id="portfolio-optimizer-assets-analysis">Assets / Analysis</h1>

## Absorption Ratio

> Code samples

```bash
curl https://example.com/assets/analysis/absorption-ratio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        9,
        1
      ],
      [
        1,
        1
      ]
    ]
  }'
```

`POST /assets/analysis/absorption-ratio`

Compute the absorption ratio associated to a universe of assets.

References
* [Mark Kritzman, Yuanzhen Li, Sebastien Page and Roberto Rigobon, Principal Components as a Measure of Systemic Risk, The Journal of Portfolio Management Summer 2011, 37 (4) 112-126](https://jpm.pm-research.com/content/37/4/112)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      9,
      1
    ],
    [
      1,
      1
    ]
  ]
}
```

<h3 id="absorption-ratio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsCovarianceMatrixEigenvectors|body|object|false|none|
|» » eigenvectorsRetained|body|integer|false|The number of eigenvectors to retain in the numerator of the absorption ratio, which must be lower than the number of assets; defaults to [1/5-th] the number of assets|

> Example responses

> 200 Response

```json
{
  "assetsAbsorptionRatio": 0.9123105625617661
}
```

<h3 id="absorption-ratio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="absorption-ratio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsAbsorptionRatio|number|true|none|The absorption ratio of the universe of assets|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Turbulence Index

> Code samples

```bash
curl https://example.com/assets/analysis/turbulence-index \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsAverageReturns": [
      1,
      1
    ],
    "assetsCovarianceMatrix": [
      [
        9,
        1
      ],
      [
        1,
        1
      ]
    ],
    "assetsReturns": [
      1,
      0
    ]
  }'
```

`POST /assets/analysis/turbulence-index`

Compute the turbulence index associated to a universe of assets.

References
* [M. Kritzman, Y. Li, Skulls, Financial Turbulence, and Risk Management,Financial Analysts Journal, Volume 66, Number 5, Pages 30-41, Year 2010](https://www.tandfonline.com/doi/abs/10.2469/faj.v66.n5.3)
* [Kinlaw, W., Turkington, D. Correlation surprise. J Asset Manag 14, 385–399 (2013)](https://link.springer.com/article/10.1057/jam.2013.27)


> Body parameter

```json
{
  "assets": 2,
  "assetsAverageReturns": [
    1,
    1
  ],
  "assetsCovarianceMatrix": [
    [
      9,
      1
    ],
    [
      1,
      1
    ]
  ],
  "assetsReturns": [
    1,
    0
  ]
}
```

<h3 id="turbulence-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsAverageReturns|body|[number]|true|assetsAverageReturns[i] is the average return of asset i over an historical reference period|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j over an historical reference period|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the return of asset i over a period different from the historical reference period|

> Example responses

> 200 Response

```json
{
  "assetsTurbulenceIndex": 0.5624999999999999
}
```

<h3 id="turbulence-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="turbulence-index-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsTurbulenceIndex|number|true|none|the turbulence index of the universe of assets|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-correlation-matrix">Assets / Correlation Matrix</h1>

## Correlation Matrix

> Code samples

```bash
curl https://example.com/assets/correlation/matrix \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.01,
        -0.0025
      ],
      [
        -0.0025,
        0.0025
      ]
    ]
  }'
```

`POST /assets/correlation/matrix`

Compute the Pearson asset correlation matrix from either:  
* The asset returns
* The asset covariance matrix

References
* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.01,
      -0.0025
    ],
    [
      -0.0025,
      0.0025
    ]
  ]
}
```

<h3 id="correlation-matrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrix": [
    [
      1,
      0.5
    ],
    [
      0.5,
      1
    ]
  ]
}
```

<h3 id="correlation-matrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="correlation-matrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrix|[[number]]|true|none|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Correlation Matrix Bounds

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/bounds \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 4,
    "assetsCorrelationMatrix": [
      [
        1,
        -0.55,
        -0.15,
        -0.1
      ],
      [
        -0.55,
        1,
        0.4,
        0.3
      ],
      [
        -0.15,
        0.4,
        1,
        0.5
      ],
      [
        -0.1,
        0.3,
        0.5,
        1
      ]
    ],
    "assetsGroup": [
      2,
      3,
      4
    ]
  }'
```

`POST /assets/correlation/matrix/bounds`

Compute the lower bounds and the upper bounds of an asset correlation matrix associated to a given group of assets.
 
 References
 * [Kawee Numpacharoen & Kornkanok Bunwong (2013) Boundaries of Correlation Adjustment with Applications to Financial Risk Management, Applied Mathematical Finance, 20:4, 403-414](http://dx.doi.org/10.1080/1350486X.2012.723517).


> Body parameter

```json
{
  "assets": 4,
  "assetsCorrelationMatrix": [
    [
      1,
      -0.55,
      -0.15,
      -0.1
    ],
    [
      -0.55,
      1,
      0.4,
      0.3
    ],
    [
      -0.15,
      0.4,
      1,
      0.5
    ],
    [
      -0.1,
      0.3,
      0.5,
      1
    ]
  ],
  "assetsGroup": [
    2,
    3,
    4
  ]
}
```

<h3 id="correlation-matrix-bounds-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|none|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» assetsGroup|body|[integer]|true|assetsGroup[k] is the indexes of the assets belonging to the assets group|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrixLowerBounds": [
    [
      1,
      0.5,
      0.5,
      0
    ],
    [
      0.5,
      1,
      0.5,
      0.3
    ],
    [
      0.5,
      0.5,
      1,
      -0.6659
    ],
    [
      0,
      0.3,
      -0.6659,
      1
    ]
  ],
  "assetsCorrelationMatrixUpperBounds": [
    [
      1,
      0.5,
      0.5,
      0
    ],
    [
      0.5,
      1,
      0.5,
      0.3
    ],
    [
      0.5,
      0.5,
      1,
      0.8659
    ],
    [
      0,
      0.3,
      0.8659,
      1
    ]
  ]
}
```

<h3 id="correlation-matrix-bounds-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="correlation-matrix-bounds-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrixLowerBounds|[[number]]|true|none|assetsCorrelationMatrixLowerBounds[i][j] is the lower bound of the correlation between the asset i and the asset j|
|assetsCorrelationMatrixUpperBounds|[[number]]|true|none|assetsCorrelationMatrixUpperBounds[i][j] is the upper bound of the correlation between the asset i and the asset j|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Denoised Correlation Matrix

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/denoised \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCorrelationMatrix": [
      [
        1,
        0.5,
        0.9
      ],
      [
        0.5,
        1,
        0.7
      ],
      [
        0.9,
        0.7,
        1
      ]
    ],
    "assetsCorrelationMatrixAspectRatio": 0.5
  }'
```

`POST /assets/correlation/matrix/denoised`

Compute a denoised asset correlation matrix, using one of the following methods:
 * The eigenvalues clipping method, described in the first reference, which is based on random matrix theory
 
 References
 * [Laurent Laloux, Pierre Cizeau, Jean-Philippe Bouchaud, and Marc Potters, Noise Dressing of Financial Correlation Matrices, Phys. Rev. Lett. 83, 1467](https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.83.1467)


> Body parameter

```json
{
  "assets": 3,
  "assetsCorrelationMatrix": [
    [
      1,
      0.5,
      0.9
    ],
    [
      0.5,
      1,
      0.7
    ],
    [
      0.9,
      0.7,
      1
    ]
  ],
  "assetsCorrelationMatrixAspectRatio": 0.5
}
```

<h3 id="denoised-correlation-matrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|none|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» assetsCorrelationMatrixAspectRatio|body|number|true|The aspect ratio of the asset correlation matrix, defined as the number of assets divided by the number of asset returns per asset used to compute the asset correlation matrix|
|» denoisingMethod|body|string|false|The method used to denoise the asset correlation matrix|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» denoisingMethod|eigenvaluesClipping|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrix": [
    [
      1,
      0.6838346015086407,
      0.7246659534718176
    ],
    [
      0.6838346015086407,
      1,
      0.6978824315038066
    ],
    [
      0.7246659534718176,
      0.6978824315038066,
      1
    ]
  ]
}
```

<h3 id="denoised-correlation-matrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="denoised-correlation-matrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrix|[[number]]|true|none|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; assetsCorrelationMatrix is possibly null in case the denoising method did not manage to denoise the provided asset correlation matrix|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Correlation Matrix Distance

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/distance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCorrelationMatrix": [
      [
        1,
        0.5,
        0.9
      ],
      [
        0.5,
        1,
        0.7
      ],
      [
        0.9,
        0.7,
        1
      ]
    ],
    "distanceMetric": "correlationMatrix",
    "referenceCorrelationMatrix": [
      [
        1,
        1,
        1
      ],
      [
        1,
        1,
        1
      ],
      [
        1,
        1,
        1
      ]
    ]
  }'
```

`POST /assets/correlation/matrix/distance`

Compute the distance between an asset correlation matrix and a reference correlation matrix, using one of the following distance metrics:
* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
* Correlation matrix distance, defined in the first reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
* Bures distance, defined in the second reference

 References
 * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
 * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)


> Body parameter

```json
{
  "assets": 3,
  "assetsCorrelationMatrix": [
    [
      1,
      0.5,
      0.9
    ],
    [
      0.5,
      1,
      0.7
    ],
    [
      0.9,
      0.7,
      1
    ]
  ],
  "distanceMetric": "correlationMatrix",
  "referenceCorrelationMatrix": [
    [
      1,
      1,
      1
    ],
    [
      1,
      1,
      1
    ],
    [
      1,
      1,
      1
    ]
  ]
}
```

<h3 id="correlation-matrix-distance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|none|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» distanceMetric|body|string|false|The distance metric to use to compute the distance between the asset correlation matrix and the reference correlation matrix|
|» referenceCorrelationMatrix|body|[[number]]|true|referenceCorrelationMatrix[i][j] is the reference correlation between the asset i and the asset j|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» distanceMetric|euclidean|
|» distanceMetric|correlationMatrix|
|» distanceMetric|bures|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrixDistance": 0.8366600265340757
}
```

<h3 id="correlation-matrix-distance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="correlation-matrix-distance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrixDistance|number|true|none|The computed distance between the two correlation matrices|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Correlation Matrix Effective Rank

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/effective-rank \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCorrelationMatrix": [
      [
        1,
        0
      ],
      [
        0,
        1
      ]
    ]
  }'
```

`POST /assets/correlation/matrix/effective-rank`

Compute the effective rank of an asset correlation matrix.

References
* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)


> Body parameter

```json
{
  "assets": 2,
  "assetsCorrelationMatrix": [
    [
      1,
      0
    ],
    [
      0,
      1
    ]
  ]
}
```

<h3 id="correlation-matrix-effective-rank-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrixEffectiveRank": 2
}
```

<h3 id="correlation-matrix-effective-rank-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="correlation-matrix-effective-rank-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrixEffectiveRank|[[number]]|true|none|The effective rank of the asset correlation matrix|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Correlation Matrix Informativeness

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/informativeness \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCorrelationMatrix": [
      [
        1,
        0.5,
        0.9
      ],
      [
        0.5,
        1,
        0.7
      ],
      [
        0.9,
        0.7,
        1
      ]
    ],
    "distanceMetric": "bures"
  }'
```

`POST /assets/correlation/matrix/informativeness`

Compute the informativeness of an asset correlation matrix, using one of the following distance metrics:
* Euclidean distance (default), which is the distance induced by [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm)
* Correlation matrix distance, defined in the second reference, which corresponds to [the cosine distance](https://en.wikipedia.org/wiki/Cosine_similarity) between the two vectorized asset correlation matrices
* Bures distance, defined in the third reference

 References
 * [Austin J. Brockmeier and Tingting Mu and Sophia Ananiadou and John Y. Goulermas, Quantifying the Informativeness of Similarity Measurements, Journal of Machine Learning Research, 2017](http://jmlr.org/papers/v18/16-296.html)
 * [M. Herdin, N. Czink, H. Ozcelik and E. Bonek, Correlation matrix distance, a meaningful measure for evaluation of non-stationary MIMO channels, 2005 IEEE 61st Vehicular Technology Conference, 2005, pp. 136-140 Vol. 1](https://ieeexplore.ieee.org/document/1543265)
 * [Rajendra Bhatia, Tanvi Jain, Yongdo Lim, On the Bures–Wasserstein distance between positive definite matrices, Expositiones Mathematicae, Volume 37, Issue 2, 2019](https://www.sciencedirect.com/science/article/pii/S0723086918300021)


> Body parameter

```json
{
  "assets": 3,
  "assetsCorrelationMatrix": [
    [
      1,
      0.5,
      0.9
    ],
    [
      0.5,
      1,
      0.7
    ],
    [
      0.9,
      0.7,
      1
    ]
  ],
  "distanceMetric": "bures"
}
```

<h3 id="correlation-matrix-informativeness-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|none|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» distanceMetric|body|string|false|The distance metric to use to compute the informativeness of the asset correlation matrix|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» distanceMetric|euclidean|
|» distanceMetric|correlationMatrix|
|» distanceMetric|bures|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrixInformativeness": 0.020539611658192996
}
```

<h3 id="correlation-matrix-informativeness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="correlation-matrix-informativeness-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrixInformativeness|number|true|none|The informativeness of the asset correlation matrix|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Nearest Correlation Matrix

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/nearest \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsApproximateCorrelationMatrix": [
      [
        1,
        1,
        0
      ],
      [
        1,
        1,
        1
      ],
      [
        0,
        1,
        1
      ]
    ]
  }'
```

`POST /assets/correlation/matrix/nearest`

Compute the _closest_ - in terms of [the Frobenius norm](https://en.wikipedia.org/wiki/Matrix_norm#Frobenius_norm) - asset correlation matrix to an approximate asset correlation matrix, optionally keeping a selected number of correlations fixed.

References
* [Nicholas J. Higham, Computing the Nearest Correlation Matrix—A Problem from Finance, IMA J. Numer. Anal. 22, 329–343, 2002.](http://www.maths.manchester.ac.uk/~higham/narep/narep369.pdf)


> Body parameter

```json
{
  "assets": 3,
  "assetsApproximateCorrelationMatrix": [
    [
      1,
      1,
      0
    ],
    [
      1,
      1,
      1
    ],
    [
      0,
      1,
      1
    ]
  ]
}
```

<h3 id="nearest-correlation-matrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsApproximateCorrelationMatrix|body|[[number]]|true|assetsApproximateCorrelationMatrix[i][i] is the approximate correlation between the asset i and the asset j|
|» assetsFixedCorrelations|body|[[integer]]|false|assetsFixedCorrelations[k] is the couple of indices (i,j) of the assets i and j for which to keep the approximate correlation assetsApproximateCorrelationMatrix[i][j] fixed|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrix": [
    [
      1,
      0.7606306078350177,
      0.15733356650676536
    ],
    [
      0.7606306078350177,
      1,
      0.7606306078350177
    ],
    [
      0.15733356650676536,
      0.7606306078350177,
      1
    ]
  ]
}
```

<h3 id="nearest-correlation-matrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="nearest-correlation-matrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrix|[[number]]|true|none|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Random Correlation Matrix

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/random \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2
  }'
```

`POST /assets/correlation/matrix/random`

Generate an asset correlation matrix uniformly at random over the space of positive definite correlation matrices.

References
* [Joe, H., Generating random correlation matrices based on partial correlations. Journal of Multivariate Analysis, 2006, 97, 2177-2189](https://www.sciencedirect.com/science/article/pii/S0047259X05000886)


> Body parameter

```json
{
  "assets": 2
}
```

<h3 id="random-correlation-matrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrix": [
    [
      1,
      0.7606306078350177,
      0.15733356650676536
    ],
    [
      0.7606306078350177,
      1,
      0.7606306078350177
    ],
    [
      0.15733356650676536,
      0.7606306078350177,
      1
    ]
  ]
}
```

<h3 id="random-correlation-matrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="random-correlation-matrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrix|[[number]]|true|none|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Correlation Matrix Shrinkage

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/shrinkage \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCorrelationMatrix": [
      [
        1,
        0.5,
        0.9
      ],
      [
        0.5,
        1,
        0.7
      ],
      [
        0.9,
        0.7,
        1
      ]
    ],
    "shrinkageFactor": 0.5,
    "targetCorrelationMatrix": [
      [
        1,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        0,
        1
      ]
    ]
  }'
```

`POST /assets/correlation/matrix/shrinkage`

Compute an asset correlation matrix as a convex linear combination of an asset correlation matrix and a target correlation matrix, the target correlation matrix being either:  
 * An equicorrelation matrix made of 1
 * An equicorrelation matrix made of 0
 * An equicorrelation matrix made of -1/(n-1), with n the number of assets
 * A provided correlation matrix
 
 References
 * [Steiner, Andreas, Manipulating Valid Correlation Matrices](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1878165)


> Body parameter

```json
{
  "assets": 3,
  "assetsCorrelationMatrix": [
    [
      1,
      0.5,
      0.9
    ],
    [
      0.5,
      1,
      0.7
    ],
    [
      0.9,
      0.7,
      1
    ]
  ],
  "shrinkageFactor": 0.5,
  "targetCorrelationMatrix": [
    [
      1,
      0,
      0
    ],
    [
      0,
      1,
      0
    ],
    [
      0,
      0,
      1
    ]
  ]
}
```

<h3 id="correlation-matrix-shrinkage-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|none|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» shrinkageFactor|body|number|true|The shrinkage factor|
|» targetEquicorrelationMatrix|body|string|true|The shrinkage target correlation matrix|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|none|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» shrinkageFactor|body|number|true|none|
|» targetCorrelationMatrix|body|[[number]]|true|targetCorrelationMatrix[i][j] is the target correlation between the asset i and the asset j|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» targetEquicorrelationMatrix|minimumEquicorrelationMatrix|
|» targetEquicorrelationMatrix|zeroEquicorrelationMatrix|
|» targetEquicorrelationMatrix|maximumEquicorrelationMatrix|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrix": [
    [
      1,
      0.75,
      0.95
    ],
    [
      0.75,
      1,
      0.85
    ],
    [
      0.95,
      0.85,
      1
    ]
  ]
}
```

<h3 id="correlation-matrix-shrinkage-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="correlation-matrix-shrinkage-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrix|[[number]]|true|none|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Theory-Implied Correlation Matrix

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/theory-implied \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetHierarchicalClassification": [
          35,
          3510,
          351010,
          35101010
        ]
      },
      {
        "assetHierarchicalClassification": [
          20,
          2030,
          203020,
          20302010
        ]
      }
    ],
    "assetsCorrelationMatrix": [
      [
        1,
        -0.00035
      ],
      [
        -0.00035,
        1
      ]
    ]
  }'
```

`POST /assets/correlation/matrix/theory-implied`

Compute the theory-implied asset correlation matrix associated with:
* A hierarchical classification of a universe of assets
* An asset correlation matrix

References
* [Lopez de Prado, Marcos Estimation of Theory-Implied Correlation Matrices (November 9, 2019)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3484152)


> Body parameter

```json
{
  "assets": [
    {
      "assetHierarchicalClassification": [
        35,
        3510,
        351010,
        35101010
      ]
    },
    {
      "assetHierarchicalClassification": [
        20,
        2030,
        203020,
        20302010
      ]
    }
  ],
  "assetsCorrelationMatrix": [
    [
      1,
      -0.00035
    ],
    [
      -0.00035,
      1
    ]
  ]
}
```

<h3 id="theory-implied-correlation-matrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetHierarchicalClassification|body|[string \| integer]|true|assetHierarchicalClassification[i] is the i+1-th level of the hierarchical classification of the asset, from the most generic classification to the most specific classification; all the assetHierarchicalClassification arrays must have the same length|
|» » » *oneOf*|body|string|false|none|
|» » » *oneOf*|body|integer|false|none|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» clusteringMethod|body|string|false|The hierarchical clustering method to use|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» clusteringMethod|singleLinkage|
|» clusteringMethod|averageLinkage|
|» clusteringMethod|completeLinkage|
|» clusteringMethod|wardLinkage|

> Example responses

> 200 Response

```json
{
  "assetsCorrelationMatrix": [
    [
      1,
      -0.00034999999999985043
    ],
    [
      -0.00034999999999985043,
      1
    ]
  ]
}
```

<h3 id="theory-implied-correlation-matrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="theory-implied-correlation-matrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCorrelationMatrix|[[number]]|true|none|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Correlation Matrix Validation

> Code samples

```bash
curl https://example.com/assets/correlation/matrix/validation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCorrelationMatrix": [
      [
        1,
        -0.00035
      ],
      [
        -0.00035,
        1
      ]
    ]
  }'
```

`POST /assets/correlation/matrix/validation`

Validate whether a matrix is an asset correlation matrix.

References
* [Wikipedia, Correlation and Dependence](https://en.wikipedia.org/wiki/Correlation_and_dependence#Correlation_matrices)


> Body parameter

```json
{
  "assets": 2,
  "assetsCorrelationMatrix": [
    [
      1,
      -0.00035
    ],
    [
      -0.00035,
      1
    ]
  ]
}
```

<h3 id="correlation-matrix-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|

> Example responses

> 200 Response

```json
{
  "message": "valid correlation matrix"
}
```

<h3 id="correlation-matrix-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="correlation-matrix-validation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Indicates whether the matrix is a valid correlation matrix|

#### Enumerated Values

|Property|Value|
|---|---|
|message|valid correlation matrix|
|message|invalid correlation matrix - non symmetric matrix|
|message|invalid correlation matrix - non positive diagonal elements|
|message|invalid correlation matrix - non positive semi-definite matrix|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-covariance-matrix">Assets / Covariance Matrix</h1>

## Covariance Matrix

> Code samples

```bash
curl https://example.com/assets/covariance/matrix \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCorrelationMatrix": [
      [
        1,
        -0.5
      ],
      [
        -0.5,
        1
      ]
    ],
    "assetsVolatilities": [
      0.1,
      0.05
    ]
  }'
```

`POST /assets/covariance/matrix`

Compute the covariance matrix of assets from either:  
* The asset correlation matrix and their volatilities (i.e., standard deviations)
* The asset correlation matrix and their variances
* The asset returns

References
* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)


> Body parameter

```json
{
  "assets": 2,
  "assetsCorrelationMatrix": [
    [
      1,
      -0.5
    ],
    [
      -0.5,
      1
    ]
  ],
  "assetsVolatilities": [
    0.1,
    0.05
  ]
}
```

<h3 id="covariance-matrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» assetsVariances|body|[number]|true|assetsVariances[i] is the variance of the asset i|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» assetsVolatilities|body|[number]|true|assetsVolatilities[i] is the volatility of the asset i|

> Example responses

> 200 Response

```json
{
  "assetsCovarianceMatrix": [
    [
      0.010000000000000002,
      -0.0025000000000000005
    ],
    [
      -0.0025000000000000005,
      0.0025000000000000005
    ]
  ]
}
```

<h3 id="covariance-matrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="covariance-matrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCovarianceMatrix|[[number]]|true|none|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Covariance Matrix Effective Rank

> Code samples

```bash
curl https://example.com/assets/covariance/matrix/effective-rank \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.00035,
        -0.00035
      ],
      [
        -0.00035,
        0.00035
      ]
    ]
  }'
```

`POST /assets/covariance/matrix/effective-rank`

Compute the effective rank of an asset covariance matrix.

References
* [Olivier Roy and Martin Vetterli, The effective rank: A measure of effective dimensionality, 15th European Signal Processing Conference, 2007](https://ieeexplore.ieee.org/document/7098875)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.00035,
      -0.00035
    ],
    [
      -0.00035,
      0.00035
    ]
  ]
}
```

<h3 id="covariance-matrix-effective-rank-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|

> Example responses

> 200 Response

```json
{
  "assetsCovarianceMatrixEffectiveRank": 1
}
```

<h3 id="covariance-matrix-effective-rank-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="covariance-matrix-effective-rank-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCovarianceMatrixEffectiveRank|[[number]]|true|none|The effective rank of the asset covariance matrix|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Exponentially Weighted Covariance Matrix

> Code samples

```bash
curl https://example.com/assets/covariance/matrix/exponentially-weighted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetReturns": [
          0.01,
          0.01,
          0.02,
          0.01
        ]
      },
      {
        "assetReturns": [
          -0.02,
          -0.02,
          -0.04,
          -0.02
        ]
      }
    ],
    "decayFactor": 0.5
  }'
```

`POST /assets/covariance/matrix/exponentially-weighted`

Compute an exponentially weighted covariance matrix of assets returns.

References
* [RiskMetrics Group. Longerstaey, J. (1996). RiskMetrics technical document, Technical Report fourth edition](https://www.msci.com/documents/10199/5915b101-4206-4ba0-aee2-3449d5c7e95a)


> Body parameter

```json
{
  "assets": [
    {
      "assetReturns": [
        0.01,
        0.01,
        0.02,
        0.01
      ]
    },
    {
      "assetReturns": [
        -0.02,
        -0.02,
        -0.04,
        -0.02
      ]
    }
  ],
  "decayFactor": 0.5
}
```

<h3 id="exponentially-weighted-covariance-matrix-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length|
|» decayFactor|body|number|false|The exponential decay factor|

> Example responses

> 200 Response

```json
{
  "assetsCovarianceMatrix": [
    [
      0.000019583333333333333,
      -0.000039166666666666665
    ],
    [
      -0.000039166666666666665,
      0.00007833333333333333
    ]
  ]
}
```

<h3 id="exponentially-weighted-covariance-matrix-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="exponentially-weighted-covariance-matrix-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsCovarianceMatrix|[[number]]|true|none|assetsCovarianceMatrix[i][j] is the sample covariance between the asset i returns and the asset j returns|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Covariance Matrix Validation

> Code samples

```bash
curl https://example.com/assets/covariance/matrix/validation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.00035,
        -0.00035
      ],
      [
        -0.00035,
        0.00035
      ]
    ]
  }'
```

`POST /assets/covariance/matrix/validation`

Validate whether a matrix is a covariance matrix.

References
* [Wikipedia, Covariance Matrix](https://en.wikipedia.org/wiki/Covariance_matrix)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.00035,
      -0.00035
    ],
    [
      -0.00035,
      0.00035
    ]
  ]
}
```

<h3 id="covariance-matrix-validation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|

> Example responses

> 200 Response

```json
{
  "message": "valid covariance matrix"
}
```

<h3 id="covariance-matrix-validation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="covariance-matrix-validation-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|message|string|true|none|Indicates whether the matrix is a valid covariance matrix|

#### Enumerated Values

|Property|Value|
|---|---|
|message|valid covariance matrix|
|message|invalid covariance matrix - non symmetric matrix|
|message|invalid covariance matrix - non positive diagonal elements|
|message|invalid covariance matrix - non positive semi-definite matrix|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-kurtosis">Assets / Kurtosis</h1>

## Kurtosis

> Code samples

```bash
curl https://example.com/assets/kurtosis \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetReturns": [
          0.01,
          0,
          0.02,
          -0.03
        ]
      }
    ]
  }'
```

`POST /assets/kurtosis`

Compute the kurtosis of one or several asset(s), from the asset returns.

References
* [Wikipedia, Kurtosis](https://en.wikipedia.org/wiki/Kurtosis)


> Body parameter

```json
{
  "assets": [
    {
      "assetReturns": [
        0.01,
        0,
        0.02,
        -0.03
      ]
    }
  ]
}
```

<h3 id="kurtosis-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetKurtosis": 2
    }
  ]
}
```

<h3 id="kurtosis-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="kurtosis-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetKurtosis|number|true|none|The kurtosis of the asset|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-prices">Assets / Prices</h1>

## Adjusted Prices

> Code samples

```bash
curl https://example.com/assets/prices/adjusted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetPrices": [
          {
            "close": 2213.4,
            "date": "2020-08-28"
          },
          {
            "close": 498.32,
            "date": "2020-08-31"
          },
          {
            "close": 475.05,
            "date": "2020-09-01"
          }
        ],
        "assetSplits": [
          {
            "date": "2020-08-31",
            "factor": 5
          }
        ]
      }
    ]
  }'
```

`POST /assets/prices/adjusted`

Compute the backward-adjusted prices of one or several asset(s) for one or several date(s) from:
* Unadjusted prices
* Capital distributions, like stock dividends
* Splits, like stock splits

The adjustment base date is chosen to be the last date for which unadjusted prices are available, which implies that:
* The price on the last date for which unadjusted prices are available is left unadjusted
* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the last date for which unadjusted prices are available

References
* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)


> Body parameter

```json
{
  "assets": [
    {
      "assetPrices": [
        {
          "close": 2213.4,
          "date": "2020-08-28"
        },
        {
          "close": 498.32,
          "date": "2020-08-31"
        },
        {
          "close": 475.05,
          "date": "2020-09-01"
        }
      ],
      "assetSplits": [
        {
          "date": "2020-08-31",
          "factor": 5
        }
      ]
    }
  ]
}
```

<h3 id="adjusted-prices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetDividends|body|[object]|false|assetDividends[t] contains dividend information for the asset at the date t|
|» » » amount|body|number|true|The dividend amount distributed by the asset at the date t|
|» » » date|body|string|true|The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date|
|» » assetPrices|body|[object]|true|assetPrices[t] contains price information for the asset at the date t|
|» » » close|body|number|true|The unadjusted close price of the asset at the date t|
|» » » date|body|string|true|The date corresponding to the date t in format YYYY-MM-DD|
|» » assetSplits|body|[object]|false|assetSplits[t] contains split information for the asset at the date t|
|» » » date|body|string|true|The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date|
|» » » factor|body|number|true|The split factor of the asset at the date t|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetAdjustedPrices": [
        {
          "date": "2020-09-01",
          "fullyAdjustedClose": 475.05,
          "splitAdjustedClose": 475.05
        },
        {
          "date": "2020-08-31",
          "fullyAdjustedClose": 498.32,
          "splitAdjustedClose": 498.32
        },
        {
          "date": "2020-08-28",
          "fullyAdjustedClose": 442.68,
          "splitAdjustedClose": 442.68
        }
      ]
    }
  ]
}
```

<h3 id="adjusted-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="adjusted-prices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetAdjustedPrices|[object]|true|none|assetAdjustedPrices[t] contains adjusted price information for the asset at the date t|
|» » date|string|true|none|The date corresponding to the date t in format YYYY-MM-DD|
|» » dividendAdjustedClose|number|false|none|The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided|
|» » fullyAdjustedClose|number|true|none|The dividend(s) and split(s) adjusted close price of the asset at the date t|
|» » splitAdjustedClose|number|false|none|The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Forward-Adjusted Prices

> Code samples

```bash
curl https://example.com/assets/prices/adjusted/forward \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetPrices": [
          {
            "close": 2213.4,
            "date": "2020-08-28"
          },
          {
            "close": 498.32,
            "date": "2020-08-31"
          },
          {
            "close": 475.05,
            "date": "2020-09-01"
          }
        ],
        "assetSplits": [
          {
            "date": "2020-08-31",
            "factor": 5
          }
        ]
      }
    ]
  }'
```

`POST /assets/prices/adjusted/forward`

Compute the forward-adjusted prices of one or several asset(s) for one or several date(s) from:
* Unadjusted prices
* Capital distributions, like stock dividends
* Splits, like stock splits

The adjustment base date is chosen to be the first date for which unadjusted prices are available, which implies that:
* The price on the first date for which unadjusted prices are available is left unadjusted
* The price on any other date is adjusted based on the capital distributions and the splits which occurred between this date and the first date for which unadjusted prices are available

References
* [Center for Research in Security Prices](https://www.crsp.org/products/documentation/crsp-calculations)


> Body parameter

```json
{
  "assets": [
    {
      "assetPrices": [
        {
          "close": 2213.4,
          "date": "2020-08-28"
        },
        {
          "close": 498.32,
          "date": "2020-08-31"
        },
        {
          "close": 475.05,
          "date": "2020-09-01"
        }
      ],
      "assetSplits": [
        {
          "date": "2020-08-31",
          "factor": 5
        }
      ]
    }
  ]
}
```

<h3 id="forward-adjusted-prices-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetDividends|body|[object]|false|assetDividends[t] contains dividend information for the asset at the date t|
|» » » amount|body|number|true|The dividend amount distributed by the asset at the date t|
|» » » date|body|string|true|The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date|
|» » assetPrices|body|[object]|true|assetPrices[t] contains price information for the asset at the date t|
|» » » close|body|number|true|The unadjusted close price of the asset at the date t|
|» » » date|body|string|true|The date corresponding to the date t in format YYYY-MM-DD|
|» » assetSplits|body|[object]|false|assetSplits[t] contains split information for the asset at the date t|
|» » » date|body|string|true|The date corresponding to the date t in format YYYY-MM-DD, which is usually the ex-distribution date|
|» » » factor|body|number|true|The split factor of the asset at the date t|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetAdjustedPrices": [
        {
          "date": "2020-08-28",
          "fullyAdjustedClose": 2213.4,
          "splitAdjustedClose": 2213.4
        },
        {
          "date": "2020-08-31",
          "fullyAdjustedClose": 2491.6,
          "splitAdjustedClose": 2491.6
        },
        {
          "date": "2020-09-01",
          "fullyAdjustedClose": 2375.25,
          "splitAdjustedClose": 2375.25
        }
      ]
    }
  ]
}
```

<h3 id="forward-adjusted-prices-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="forward-adjusted-prices-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetAdjustedPrices|[object]|true|none|assetAdjustedPrices[t] contains adjusted price information for the asset at the date t|
|» » date|string|true|none|The date corresponding to the date t in format YYYY-MM-DD|
|» » dividendAdjustedClose|number|false|none|The dividend(s) adjusted close price of the asset at the date t, only present if dividend(s) information are provided|
|» » fullyAdjustedClose|number|true|none|The dividend(s) and split(s) adjusted close price of the asset at the date t|
|» » splitAdjustedClose|number|false|none|The split(s) adjusted close price of the asset at the date t, only present if split(s) information are provided|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-returns">Assets / Returns</h1>

## Arithmetic Returns

> Code samples

```bash
curl https://example.com/assets/returns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetPrices": [
          1,
          2
        ]
      },
      {
        "assetPrices": [
          2,
          3,
          6
        ]
      }
    ]
  }'
```

`POST /assets/returns`

Compute the arithmetic return(s) of one or several asset(s) for one or several time period(s).

References
* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)


> Body parameter

```json
{
  "assets": [
    {
      "assetPrices": [
        1,
        2
      ]
    },
    {
      "assetPrices": [
        2,
        3,
        6
      ]
    }
  ]
}
```

<h3 id="arithmetic-returns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetPrices|body|[number]|true|assetPrices[t] is the price of the asset at the time t|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetReturns": [
        1
      ]
    },
    {
      "assetReturns": [
        0.5,
        1
      ]
    }
  ]
}
```

<h3 id="arithmetic-returns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="arithmetic-returns-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetReturns|[number]|true|none|assetReturns[t] is the arithmetic return of the asset from the time t-1 to the time t, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Arithmetic Average Return

> Code samples

```bash
curl https://example.com/assets/returns/average \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetReturns": [
          0.1,
          -0.05
        ]
      },
      {
        "assetReturns": [
          0,
          -0.01,
          0.01
        ]
      }
    ]
  }'
```

`POST /assets/returns/average`

Compute the arithmetic average of the return(s) of one or several asset(s).

References
* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)


> Body parameter

```json
{
  "assets": [
    {
      "assetReturns": [
        0.1,
        -0.05
      ]
    },
    {
      "assetReturns": [
        0,
        -0.01,
        0.01
      ]
    }
  ]
}
```

<h3 id="arithmetic-average-return-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetAverageReturn": 0.025
    },
    {
      "assetAverageReturn": 0
    }
  ]
}
```

<h3 id="arithmetic-average-return-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="arithmetic-average-return-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetAverageReturn|number|true|none|The arithmetic average return of the asset|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-returns-simulation">Assets / Returns Simulation</h1>

## Bootstrap

> Code samples

```bash
curl https://example.com/assets/returns/simulation/bootstrap \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetReturns": [
          0.1,
          -0.05,
          0.01,
          0.025,
          -0.1
        ]
      },
      {
        "assetReturns": [
          0,
          0.01,
          0.02,
          -0.01,
          0.05
        ]
      }
    ],
    "bootstrapBlockLength": 2,
    "bootstrapMethod": "circularBlock",
    "simulations": 5,
    "simulationsLength": 4
  }'
```

`POST /assets/returns/simulation/bootstrap`

Simulate the return(s) of one or several asset(s) for one or several time period(s) using a bootstrap method.

References
* [Efron, B. (1979), Bootstrap methods: Another look at the jackknife, The Annals of Statistics 7, 1-26](https://projecteuclid.org/journals/annals-of-statistics/volume-7/issue-1/Bootstrap-Methods-Another-Look-at-the-Jackknife/10.1214/aos/1176344552.full)
* [Politis, D. N. and Romano, J. P., A circular block resampling procedure for stationary data, in R. Lepage and L. Billard, eds, Exploring the Limits of Bootstrap, Wiley, New York, pp. 263-270](https://statistics.stanford.edu/technical-reports/circular-block-resampling-procedure-stationary-data)
* [Politis, D. N. and Romano, J. P., The stationary bootstrap, Journal of the American Statistical Association 89, 1303-1313](https://www.jstor.org/stable/2290993)


> Body parameter

```json
{
  "assets": [
    {
      "assetReturns": [
        0.1,
        -0.05,
        0.01,
        0.025,
        -0.1
      ]
    },
    {
      "assetReturns": [
        0,
        0.01,
        0.02,
        -0.01,
        0.05
      ]
    }
  ],
  "bootstrapBlockLength": 2,
  "bootstrapMethod": "circularBlock",
  "simulations": 5,
  "simulationsLength": 4
}
```

<h3 id="bootstrap-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset over the time period t; all the assetReturns arrays must have the same length|
|» bootstrapAverageBlockLength|body|number|false|The average length of the blocks to use in case the bootstrap method is 'stationaryBlock', in time periods; if not provided, defaults to the inverse of 3.15 * the common length of the assetReturns arrays^1/3|
|» bootstrapBlockLength|body|integer|false|The length of the blocks to use in case the bootstrap method is 'circularBlock', in time periods; if not provided, defaults to [3.15 * the common length of the assetReturns arrays^1/3]|
|» bootstrapMethod|body|string|false|The bootstrap method to use|
|» simulations|body|integer|false|The number of simulations to perform|
|» simulationsLength|body|integer|false|The number of time period(s) to simulate per simulation; if not provided, defaults to the common length of the assetReturns arrays|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» bootstrapMethod|iid|
|» bootstrapMethod|circularBlock|
|» bootstrapMethod|stationaryBlock|

> Example responses

> 200 Response

```json
{
  "simulations": [
    {
      "assets": [
        {
          "assetReturns": [
            0.01,
            0.02
          ]
        },
        {
          "assetReturns": [
            0.01,
            -0.02
          ]
        }
      ]
    }
  ]
}
```

<h3 id="bootstrap-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="bootstrap-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|simulations|[object]|true|none|none|
|» assets|[object]|true|none|assets[i] is the data for the i-th asset|
|» » assetReturns|[number]|true|none|assetReturns[t] is the simulated return of the i-th asset for the t-th time period, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-skewness">Assets / Skewness</h1>

## Skewness

> Code samples

```bash
curl https://example.com/assets/skewness \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetReturns": [
          0.01,
          0,
          0.02,
          -0.03
        ]
      }
    ]
  }'
```

`POST /assets/skewness`

Compute the skewness of one or several asset(s), from the asset returns.

References
* [Wikipedia, Skewness](https://en.wikipedia.org/wiki/Skewness)


> Body parameter

```json
{
  "assets": [
    {
      "assetReturns": [
        0.01,
        0,
        0.02,
        -0.03
      ]
    }
  ]
}
```

<h3 id="skewness-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetSkewness": -0.6872431934890911
    }
  ]
}
```

<h3 id="skewness-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="skewness-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetSkewness|number|true|none|The skewness of the asset|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-variance">Assets / Variance</h1>

## Variance

> Code samples

```bash
curl https://example.com/assets/variance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.01,
        -0.0025
      ],
      [
        -0.0025,
        0.0025
      ]
    ]
  }'
```

`POST /assets/variance`

Compute the variance of one or several asset(s) from either:  
* The asset returns
* The asset covariance matrix
* The asset volatility(ies)

References
* [Wikipedia, Variance](https://en.wikipedia.org/wiki/Variance)        


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.01,
      -0.0025
    ],
    [
      -0.0025,
      0.0025
    ]
  ]
}
```

<h3 id="variance-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» *oneOf*|body|object|false|none|
|» assets|body|[object]|true|none|
|» » assetVolatility|body|number|true|The asset volatility|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetVariance": 0.01
    },
    {
      "assetVariance": 0.0025
    }
  ]
}
```

<h3 id="variance-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="variance-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetVariance|number|true|none|The variance of the asset|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-assets-volatility">Assets / Volatility</h1>

## Volatility

> Code samples

```bash
curl https://example.com/assets/volatility \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.01,
        -0.0025
      ],
      [
        -0.0025,
        0.0025
      ]
    ]
  }'
```

`POST /assets/volatility`

Compute the volatility (i.e., standard deviation) of one or several asset(s) from either:  
* The asset returns
* The asset covariance matrix
* The asset variance(s)

References
* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.01,
      -0.0025
    ],
    [
      -0.0025,
      0.0025
    ]
  ]
}
```

<h3 id="volatility-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» *oneOf*|body|object|false|none|
|» assets|body|[object]|true|none|
|» » assetVariance|body|number|true|The asset variance|

> Example responses

> 200 Response

```json
{
  "assets": [
    {
      "assetVolatility": 0.1
    },
    {
      "assetVolatility": 0.05
    }
  ]
}
```

<h3 id="volatility-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="volatility-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assets|[object]|true|none|none|
|» assetVolatility|number|true|none|The volatility of the asset|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-factors">Factors</h1>

## Residualization

> Code samples

```bash
curl https://example.com/factors/residualization \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "factors": [
      {
        "factorReturns": [
          0.01,
          0.02,
          -0.01
        ]
      },
      {
        "factorReturns": [
          0.025,
          0.005,
          -0.02
        ]
      }
    ],
    "residualizedFactor": 1
  }'
```

`POST /factors/residualization`

Compute the residuals of a factor against a set of factors, using a returns-based linear regression analysis.

References
* [Factor Research, Factor Exposure Analysis: Exploring Residualization](https://insights.factorresearch.com/research-factor-exposure-analysis-exploring-residualization/)
* [Catalina B. Garcia, Román Salmeron, Claudia Garcia & Jose Garcia (2019): Residualization: justification, properties and application, Journal of Applied Statistics](https://doi.org/10.1080/02664763.2019.1701638)


> Body parameter

```json
{
  "factors": [
    {
      "factorReturns": [
        0.01,
        0.02,
        -0.01
      ]
    },
    {
      "factorReturns": [
        0.025,
        0.005,
        -0.02
      ]
    }
  ],
  "residualizedFactor": 1
}
```

<h3 id="residualization-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» factors|body|[object]|true|none|
|» » factorReturns|body|[number]|true|factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length|
|» residualizedFactor|body|integer|true|The index of the factor to residualize|

> Example responses

> 200 Response

```json
{
  "residualizedFactorReturns": [
    -0.001885245901639342,
    0.017622950819672134,
    -0.0004918032786885261
  ]
}
```

<h3 id="residualization-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="residualization-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|residualizedFactorReturns|[number]|true|none|residualizedFactorReturns[t] is the return of the residualized factor at the time t|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-portfolio-analysis">Portfolio Analysis</h1>

## Alpha

> Code samples

```bash
curl https://example.com/portfolio/analysis/alpha \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "benchmarkReturns": [
      0.002,
      0.025,
      0.018,
      -0.011,
      0.014
    ],
    "portfolios": [
      {
        "portfolioReturns": [
          0.003,
          0.026,
          0.011,
          -0.01,
          0.015
        ]
      }
    ],
    "riskFreeRate": 0.01
  }'
```

`POST /portfolio/analysis/alpha`

Compute the Jensen’s alpha of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  


> Body parameter

```json
{
  "benchmarkReturns": [
    0.002,
    0.025,
    0.018,
    -0.011,
    0.014
  ],
  "portfolios": [
    {
      "portfolioReturns": [
        0.003,
        0.026,
        0.011,
        -0.01,
        0.015
      ]
    }
  ],
  "riskFreeRate": 0.01
}
```

<h3 id="alpha-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» benchmarkReturns|body|[number]|true|benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays|
|» portfolios|body|[object]|true|none|
|» » portfolioReturns|body|[number]|true|portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array|
|» riskFreeRate|body|number|false|The risk free rate, assumed to be constant for any time t|
|» *oneOf*|body|object|false|none|
|» benchmarkReturns|body|[number]|true|benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays|
|» portfolios|body|[object]|true|none|
|» » portfolioReturns|body|[number]|true|portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array|
|» riskFreeReturns|body|[number]|false|riskFreeReturns[t] is the risk free return at the time t; the riskFreeReturns array must have the same length as all the portfolioReturns arrays|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioAlpha": -0.0006332179930795853
    }
  ]
}
```

<h3 id="alpha-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="alpha-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioAlpha|number|true|none|The portfolio Jensen's alpha, which correponds to the portfolio excess return adjusted for the systematic risk in the Capital Asset Pricing Model (CAPM)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Beta

> Code samples

```bash
curl https://example.com/portfolio/analysis/beta \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "benchmarkReturns": [
      0.002,
      0.025,
      0.018,
      -0.011,
      0.014
    ],
    "portfolios": [
      {
        "portfolioReturns": [
          0.003,
          0.026,
          0.011,
          -0.01,
          0.015
        ]
      }
    ],
    "riskFreeRate": 0.01
  }'
```

`POST /portfolio/analysis/beta`

Compute the beta of one or several portfolio(s) in the Capital Asset Pricing Model (CAPM).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution  


> Body parameter

```json
{
  "benchmarkReturns": [
    0.002,
    0.025,
    0.018,
    -0.011,
    0.014
  ],
  "portfolios": [
    {
      "portfolioReturns": [
        0.003,
        0.026,
        0.011,
        -0.01,
        0.015
      ]
    }
  ],
  "riskFreeRate": 0.01
}
```

<h3 id="beta-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» benchmarkReturns|body|[number]|true|benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays|
|» portfolios|body|[object]|true|none|
|» » portfolioReturns|body|[number]|true|portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array|
|» riskFreeRate|body|number|false|The risk free rate, assumed to be constant for any time t|
|» *oneOf*|body|object|false|none|
|» benchmarkReturns|body|[number]|true|benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays|
|» portfolios|body|[object]|true|none|
|» » portfolioReturns|body|[number]|true|portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the length of the benchmarkReturns array|
|» riskFreeReturns|body|[number]|false|riskFreeReturns[t] is the risk free return at the time t; the riskFreeReturns array must have the same length as all the portfolioReturns arrays|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioBeta": 0.9169550173010382
    }
  ]
}
```

<h3 id="beta-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="beta-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioBeta|number|true|none|The portfolio beta, which correponds to the portfolio systematic risk in the Capital Asset Pricing Model (CAPM)|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Conditional Value At Risk

> Code samples

```bash
curl https://example.com/portfolio/analysis/conditional-value-at-risk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "alpha": 0.05,
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/conditional-value-at-risk`

Compute the conditional value at risk of one or several portfolio(s) from portfolio values.

References
* [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
* [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)


> Body parameter

```json
{
  "alpha": 0.05,
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ]
}
```

<h3 id="conditional-value-at-risk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» alpha|body|number|true|The conditional value at risk level|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioConditionalValueAtRisk": 0.17647058823529413
    }
  ]
}
```

<h3 id="conditional-value-at-risk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="conditional-value-at-risk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioConditionalValueAtRisk|number|true|none|The conditional value at risk of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Return Contributions

> Code samples

```bash
curl https://example.com/portfolio/analysis/contributions/return \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsGroups": [
      [
        1,
        2
      ]
    ],
    "assetsReturns": [
      0.01,
      -0.01,
      0.025
    ],
    "portfolios": [
      {
        "assetsWeights": [
          0.5,
          0.25,
          0.25
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/contributions/return`

Perform a return contribution analysis of one or several portfolio(s), optionally using groups of assets.

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution


> Body parameter

```json
{
  "assets": 3,
  "assetsGroups": [
    [
      1,
      2
    ]
  ],
  "assetsReturns": [
    0.01,
    -0.01,
    0.025
  ],
  "portfolios": [
    {
      "assetsWeights": [
        0.5,
        0.25,
        0.25
      ]
    }
  ]
}
```

<h3 id="return-contributions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsGroups|body|[[integer]]|false|none|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "assetsGroupsReturnContributions": [
        0.0025,
        0.00625
      ],
      "assetsReturnContributions": [
        0.005,
        -0.0025,
        0.00625
      ]
    }
  ]
}
```

<h3 id="return-contributions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="return-contributions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» assetsGroupsReturnContributions|[number]|false|none|assetsGroupsReturnContributions[k] is the return contribution of the group of assets k to the return of the portfolio|
|» assetsReturnContributions|[number]|true|none|assetsReturnContributions[i] is the return contribution of the asset i to the return of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Risk Contributions

> Code samples

```bash
curl https://example.com/portfolio/analysis/contributions/risk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCovarianceMatrix": [
      [
        0.0001,
        0,
        0
      ],
      [
        0,
        0.0001,
        0
      ],
      [
        0,
        0,
        0.04
      ]
    ],
    "portfolios": [
      {
        "assetsWeights": [
          0.5,
          0.25,
          0.25
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/contributions/risk`

Perform a risk contribution analysis of one or several portfolio(s), optionally using groups of assets.

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution


> Body parameter

```json
{
  "assets": 3,
  "assetsCovarianceMatrix": [
    [
      0.0001,
      0,
      0
    ],
    [
      0,
      0.0001,
      0
    ],
    [
      0,
      0,
      0.04
    ]
  ],
  "portfolios": [
    {
      "assetsWeights": [
        0.5,
        0.25,
        0.25
      ]
    }
  ]
}
```

<h3 id="risk-contributions-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsGroups|body|[[integer]]|false|none|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "assetsRiskContributions": [
        0.0004969039949999533,
        0.00012422599874998834,
        0.049690399499995326
      ]
    }
  ]
}
```

<h3 id="risk-contributions-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="risk-contributions-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» assetsGroupsRiskContributions|[number]|false|none|assetsGroupsRiskContributions[k] is the risk contribution of the group of assets k to the risk of the portfolio|
|» assetsRiskContributions|[number]|true|none|assetsRiskContributions[i] is the risk contribution of the asset i to the risk of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Correlation Spectrum

> Code samples

```bash
curl https://example.com/portfolio/analysis/correlation-spectrum \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "portfolios": [
      {
        "assetsWeights": [
          0.5,
          0.5
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/correlation-spectrum`

Compute the correlation spectrum of one or several portfolio(s).

References
* [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "portfolios": [
    {
      "assetsWeights": [
        0.5,
        0.5
      ]
    }
  ]
}
```

<h3 id="correlation-spectrum-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|
|» *oneOf*|body|object|false|none|
|» assets|body|[object]|true|none|
|» » assetPrices|body|[number]|true|assetPrices[t] is the price of the asset at the time t; all the assetPrices arrays must have the same length|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length, equal to the common length of the assetPrices arrays|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioCorrelationSpectrum": [
        0.9543679526112243,
        0.5767242991086425,
        0.9573818866065777
      ]
    }
  ]
}
```

<h3 id="correlation-spectrum-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="correlation-spectrum-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioCorrelationSpectrum|[number]|true|none|The correlation spectrum of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Diversification Ratio

> Code samples

```bash
curl https://example.com/portfolio/analysis/diversification-ratio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "portfolios": [
      {
        "assetsWeights": [
          0.5,
          0.5
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/diversification-ratio`

Compute the diversification ratio of one or several portfolio(s).

References
* [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)
* [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "portfolios": [
    {
      "assetsWeights": [
        0.5,
        0.5
      ]
    }
  ]
}
```

<h3 id="diversification-ratio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|
|» *oneOf*|body|object|false|none|
|» assets|body|[object]|true|none|
|» » assetPrices|body|[number]|true|assetPrices[t] is the price of the asset at the time t; all the assetPrices arrays must have the same length|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length, equal to the common length of the assetPrices arrays|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioDiversificationRatio": 1.2909944487358058
    }
  ]
}
```

<h3 id="diversification-ratio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="diversification-ratio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioDiversificationRatio|number|true|none|The diversification ratio of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Drawdowns

> Code samples

```bash
curl https://example.com/portfolio/analysis/drawdowns \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/drawdowns`

Compute the drawdown function - also called the underwater equity curve -, as well as the worst 10 drawdowns of one or several portfolio(s).

References
* [Wikipedia, Drawdown](https://en.wikipedia.org/wiki/Drawdown_(economics))        


> Body parameter

```json
{
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ]
}
```

<h3 id="drawdowns-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioDrawdowns": [
        0,
        0.05,
        0,
        0.1,
        0.15,
        0.3
      ],
      "portfolioWorstDrawdowns": [
        {
          "drawdownBottom": 6,
          "drawdownDepth": 0.3,
          "drawdownEnd": 0,
          "drawdownStart": 3
        },
        {
          "drawdownBottom": 2,
          "drawdownDepth": 0.05,
          "drawdownEnd": 3,
          "drawdownStart": 1
        }
      ]
    }
  ]
}
```

<h3 id="drawdowns-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="drawdowns-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioDrawdowns|[number]|true|none|portfolioDrawdowns[t] is the value of the drawdown function at the time t|
|» portfolioWorstDrawdowns|[object]|true|none|none|
|» » drawdownBottom|integer|true|none|none|
|» » drawdownDepth|number|true|none|none|
|» » drawdownEnd|integer|true|none|none|
|» » drawdownStart|integer|true|none|none|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Effective Number of Bets

> Code samples

```bash
curl https://example.com/portfolio/analysis/effective-number-of-bets \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCovarianceMatrix": [
      [
        1,
        0,
        0
      ],
      [
        0,
        286.31,
        100.79
      ],
      [
        0,
        100.79,
        601.36
      ]
    ],
    "portfolios": [
      {
        "assetsWeights": [
          10.96,
          1.06,
          0.22
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/effective-number-of-bets`

Compute the effective number of bets of one or several portfolio(s).

References
* [Meucci, Attilio and Santangelo, Alberto and Deguest, Romain, Risk Budgeting and Diversification Based on Optimized Uncorrelated Factors (November 10, 2015)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2276632)


> Body parameter

```json
{
  "assets": 3,
  "assetsCovarianceMatrix": [
    [
      1,
      0,
      0
    ],
    [
      0,
      286.31,
      100.79
    ],
    [
      0,
      100.79,
      601.36
    ]
  ],
  "portfolios": [
    {
      "assetsWeights": [
        10.96,
        1.06,
        0.22
      ]
    }
  ]
}
```

<h3 id="effective-number-of-bets-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» factorsExtractionMethod|body|string|false|The method used to extract the uncorrelated risk factors from the asset covariance matrix|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» factorsExtractionMethod|principalComponentAnalysis|
|» factorsExtractionMethod|exactMinimumLinearTorsion|
|» factorsExtractionMethod|approximateMinimumLinearTorsion|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioEffectiveNumberOfBets": 2.3564325389900276
    }
  ]
}
```

<h3 id="effective-number-of-bets-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="effective-number-of-bets-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioEffectiveNumberOfBets|number|true|none|The effective number of bets of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Factor Exposures

> Code samples

```bash
curl https://example.com/portfolio/analysis/factors/exposures \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "factors": [
      {
        "factorReturns": [
          -0.00414169934,
          0.01201656108,
          0.0087181369
        ]
      },
      {
        "factorReturns": [
          -0.01387258782,
          -0.01097961581,
          0.01742002062
        ]
      }
    ],
    "portfolios": [
      {
        "portfolioReturns": [
          -0.04302,
          0.01310372213,
          0.06482589323
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/factors/exposures`

Compute the exposures of one or several portfolio(s) to a set of factors, using a returns-based linear regression analysis.

References
* [Measuring Factor Exposures: Uses and Abuses, Ronen Israel and Adrienne Ross, The Journal of Alternative Investments Summer 2017, 20 (1) 10-25](https://jai.pm-research.com/content/20/1/10.short) 


> Body parameter

```json
{
  "factors": [
    {
      "factorReturns": [
        -0.00414169934,
        0.01201656108,
        0.0087181369
      ]
    },
    {
      "factorReturns": [
        -0.01387258782,
        -0.01097961581,
        0.01742002062
      ]
    }
  ],
  "portfolios": [
    {
      "portfolioReturns": [
        -0.04302,
        0.01310372213,
        0.06482589323
      ]
    }
  ]
}
```

<h3 id="factor-exposures-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» factors|body|[object]|false|none|
|» » factorReturns|body|[number]|true|factorReturns[t] is the return of the factor at the time t; all the factorReturns arrays must have the same length, equal to the common length of the portfolioReturns arrays|
|» portfolios|body|[object]|true|none|
|» » portfolioReturns|body|[number]|true|portfolioReturns[t] is the return of the portfolio at the time t, all the portfolioReturns arrays must have the same length, equal to the common length of the factorReturns arrays|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioAlpha": -0.000017563172006410804,
      "portfolioBetas": [
        3.083191766752847,
        2.17931822921701
      ],
      "portfolioRSquared": 1
    }
  ]
}
```

<h3 id="factor-exposures-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="factor-exposures-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioAlpha|number|true|none|The portfolio alpha, which correponds to the portion of the portfolio returns that cannot be explained by the portfolio factor exposures|
|» portfolioBetas|[number]|true|none|The portfolio betas, which correspond to the portfolio factor exposures|
|» portfolioRSquared|number|true|none|The portfolio R^2, which indicates how much of the variability in the portfolio returns can be explained by the portfolio factor exposures; generally, the higher the R^2 the better the portfolio factor exposures explain the portfolio returns|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Mean-Variance Efficient Frontier

> Code samples

```bash
curl https://example.com/portfolio/analysis/mean-variance/efficient-frontier \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "assetsReturns": [
      0.01,
      0.05
    ],
    "constraints": {
      "minimumAssetsWeights": [
        0.2,
        0
      ]
    },
    "portfolios": 3
  }'
```

`POST /portfolio/analysis/mean-variance/efficient-frontier`

Compute the discretized mean-variance efficient frontier associated to a list of assets, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraint

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "assetsReturns": [
    0.01,
    0.05
  ],
  "constraints": {
    "minimumAssetsWeights": [
      0.2,
      0
    ]
  },
  "portfolios": 3
}
```

<h3 id="mean-variance-efficient-frontier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» portfolios|body|integer|false|The number of portfolios to compute on the mean-variance efficient frontier|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "assetsWeights": [
        0.8260869565217391,
        0.17391304347826086
      ],
      "portfolioReturn": 0.016956521739130433,
      "portfolioVolatility": 0.0463915284620315
    },
    {
      "assetsWeights": [
        0.5130434782608696,
        0.48695652173913045
      ],
      "portfolioReturn": 0.02947826086956522,
      "portfolioVolatility": 0.05726369211623199
    },
    {
      "assetsWeights": [
        0.2,
        0.8
      ],
      "portfolioReturn": 0.04200000000000001,
      "portfolioVolatility": 0.08160882305241265
    }
  ]
}
```

<h3 id="mean-variance-efficient-frontier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mean-variance-efficient-frontier-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|
|» portfolioReturn|number|true|none|The arithmetic return of the portfolio|
|» portfolioVolatility|number|true|none|The volatility of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Mean-Variance Minimum Variance Frontier

> Code samples

```bash
curl https://example.com/portfolio/analysis/mean-variance/minimum-variance-frontier \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "assetsReturns": [
      0.01,
      0.05
    ],
    "constraints": {
      "minimumAssetsWeights": [
        0.2,
        0
      ]
    },
    "portfolios": 4
  }'
```

`POST /portfolio/analysis/mean-variance/minimum-variance-frontier`

Compute the discretized mean-variance minimum variance frontier associated to a list of assets, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraint

> This endpoint is similar to the endpoint [`/portfolio/analysis/mean-variance/efficient-frontier`](#post-/portfolio/analysis/mean-variance/efficient-frontier), because the mean-variance efficient frontier is the "top" portion of the mean-variance minimum variance frontier.

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "assetsReturns": [
    0.01,
    0.05
  ],
  "constraints": {
    "minimumAssetsWeights": [
      0.2,
      0
    ]
  },
  "portfolios": 4
}
```

<h3 id="mean-variance-minimum-variance-frontier-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» portfolios|body|integer|false|The number of portfolios to compute on the mean-variance minimum variance frontier|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "assetsWeights": [
        1,
        0
      ],
      "portfolioReturn": 0.01,
      "portfolioVolatility": 0.05
    },
    {
      "assetsWeights": [
        0.7333333333333333,
        0.2666666666666667
      ],
      "portfolioReturn": 0.02066666666666667,
      "portfolioVolatility": 0.04744587559642156
    },
    {
      "assetsWeights": [
        0.4666666666666667,
        0.5333333333333333
      ],
      "portfolioReturn": 0.03133333333333334,
      "portfolioVolatility": 0.06031399321697891
    },
    {
      "assetsWeights": [
        0.2,
        0.8
      ],
      "portfolioReturn": 0.04200000000000001,
      "portfolioVolatility": 0.08160882305241265
    }
  ]
}
```

<h3 id="mean-variance-minimum-variance-frontier-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mean-variance-minimum-variance-frontier-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|
|» portfolioReturn|number|true|none|The arithmetic return of the portfolio|
|» portfolioVolatility|number|true|none|The volatility of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Arithmetic Return

> Code samples

```bash
curl https://example.com/portfolio/analysis/return \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsReturns": [
      0.01,
      0.05
    ],
    "portfolios": [
      {
        "assetsWeights": [
          1,
          0
        ]
      },
      {
        "assetsWeights": [
          0,
          1
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/return`

Compute the arithmetic return of one or several portfolio(s) from either:  
* Portfolio assets arithmetic returns
* Portfolio values

References
* [Wikipedia, Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Return)
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsReturns": [
    0.01,
    0.05
  ],
  "portfolios": [
    {
      "assetsWeights": [
        1,
        0
      ]
    },
    {
      "assetsWeights": [
        0,
        1
      ]
    }
  ]
}
```

<h3 id="arithmetic-return-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|
|» *oneOf*|body|object|false|none|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioReturn": 0.01
    },
    {
      "portfolioReturn": 0.05
    }
  ]
}
```

<h3 id="arithmetic-return-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="arithmetic-return-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioReturn|number|true|none|The arithmetic return of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Arithmetic Average Return

> Code samples

```bash
curl https://example.com/portfolio/analysis/returns/average \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/returns/average`

Compute the arithmetic average of the arithmetic return(s) of one or several portfolio(s).

References
* [Wikipedia, Arithmetic Average Rate of Return](https://en.wikipedia.org/wiki/Rate_of_return#Arithmetic_average_rate_of_return)


> Body parameter

```json
{
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ]
}
```

<h3 id="arithmetic-average-return-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioAverageReturn": 0.01
    }
  ]
}
```

<h3 id="arithmetic-average-return-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="arithmetic-average-return-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioAverageReturn|number|true|none|The arithmetic average return of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Tracking Error

> Code samples

```bash
curl https://example.com/portfolio/analysis/tracking-error \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "benchmarkReturns": [
      0.002,
      0.025,
      0.018,
      -0.011,
      0.014,
      0.018,
      0.014,
      0.065,
      -0.015,
      0.042,
      -0.006,
      0.083,
      0.039,
      -0.038,
      -0.062,
      0.015,
      -0.048,
      0.021,
      0.06,
      0.056,
      -0.067,
      0.019,
      -0.003,
      0
    ],
    "portfolios": [
      {
        "portfolioReturns": [
          0.003,
          0.026,
          0.011,
          -0.01,
          0.015,
          0.025,
          0.016,
          0.067,
          -0.014,
          0.04,
          -0.005,
          0.081,
          0.04,
          -0.037,
          -0.061,
          0.017,
          -0.049,
          -0.022,
          0.07,
          0.058,
          -0.065,
          0.024,
          -0.005,
          -0.009
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/tracking-error`

Compute the tracking error between a benchmark and one or several portfolio(s).

References
* [Wikipedia, Tracking error](https://en.wikipedia.org/wiki/Tracking_error) 
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution 


> Body parameter

```json
{
  "benchmarkReturns": [
    0.002,
    0.025,
    0.018,
    -0.011,
    0.014,
    0.018,
    0.014,
    0.065,
    -0.015,
    0.042,
    -0.006,
    0.083,
    0.039,
    -0.038,
    -0.062,
    0.015,
    -0.048,
    0.021,
    0.06,
    0.056,
    -0.067,
    0.019,
    -0.003,
    0
  ],
  "portfolios": [
    {
      "portfolioReturns": [
        0.003,
        0.026,
        0.011,
        -0.01,
        0.015,
        0.025,
        0.016,
        0.067,
        -0.014,
        0.04,
        -0.005,
        0.081,
        0.04,
        -0.037,
        -0.061,
        0.017,
        -0.049,
        -0.022,
        0.07,
        0.058,
        -0.065,
        0.024,
        -0.005,
        -0.009
      ]
    }
  ]
}
```

<h3 id="tracking-error-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» benchmarkReturns|body|[number]|true|benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the portfolioReturns arrays|
|» portfolios|body|[object]|true|none|
|» » portfolioReturns|body|[number]|true|portfolioReturns[t] is the return of the portfolio at the time t, the portfolioReturns must have the same length as the benchmarkReturns array|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioTrackingError": 0.00950648535942116
    }
  ]
}
```

<h3 id="tracking-error-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="tracking-error-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioTrackingError|number|true|none|The tracking error of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Ulcer Index

> Code samples

```bash
curl https://example.com/portfolio/analysis/ulcer-index \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/ulcer-index`

Compute the Ulcer Index of one or several portfolio(s).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)


> Body parameter

```json
{
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ]
}
```

<h3 id="ulcer-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioUlcerIndex": 0.14433756729740643
    }
  ]
}
```

<h3 id="ulcer-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="ulcer-index-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioUlcerIndex|number|true|none|The Ulcer Index of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Ulcer Performance Index

> Code samples

```bash
curl https://example.com/portfolio/analysis/ulcer-performance-index \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/analysis/ulcer-performance-index`

Compute the Ulcer Performance Index of one or several portfolio(s).

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)


> Body parameter

```json
{
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ],
  "riskFreeRate": 0
}
```

<h3 id="ulcer-performance-index-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioUlcerPerformanceIndex": -0.45642249763676057
    }
  ]
}
```

<h3 id="ulcer-performance-index-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="ulcer-performance-index-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioUlcerPerformanceIndex|number|true|none|The Ulcer Performance Index of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Value At Risk

> Code samples

```bash
curl https://example.com/portfolio/analysis/value-at-risk \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "alpha": 0.05,
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/value-at-risk`

Compute the value at risk of one or several portfolio(s) from portfolio values.

References
* [Wikipedia, Value at risk](https://en.wikipedia.org/wiki/Value_at_risk)
* [Acerbi, C. and Tasche, D. (2002), Expected Shortfall: A Natural Coherent Alternative to Value at Risk. Economic Notes, 31: 379-388](https://onlinelibrary.wiley.com/doi/abs/10.1111/1468-0300.00091)


> Body parameter

```json
{
  "alpha": 0.05,
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ]
}
```

<h3 id="value-at-risk-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» alpha|body|number|true|The value at risk level|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioValueAtRisk": 0.17647058823529413
    }
  ]
}
```

<h3 id="value-at-risk-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="value-at-risk-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioValueAtRisk|number|true|none|The value at risk of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Volatility

> Code samples

```bash
curl https://example.com/portfolio/analysis/volatility \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "portfolios": [
      {
        "assetsWeights": [
          1,
          0
        ]
      },
      {
        "assetsWeights": [
          0,
          1
        ]
      }
    ]
  }'
```

`POST /portfolio/analysis/volatility`

Compute the volatility (i.e., standard deviation) of one or several portfolio(s) from either:  
* Portfolio assets covariance matrix
* Portfolio values

References
* [Wikipedia, Standard Deviation](https://en.wikipedia.org/wiki/Standard_deviation#Finance)
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "portfolios": [
    {
      "assetsWeights": [
        1,
        0
      ]
    },
    {
      "assetsWeights": [
        0,
        1
      ]
    }
  ]
}
```

<h3 id="volatility-1-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|
|» *oneOf*|body|object|false|none|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioVolatility": 0.05
    },
    {
      "portfolioVolatility": 0.1
    }
  ]
}
```

<h3 id="volatility-1-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="volatility-1-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioVolatility|number|true|none|The volatility of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-portfolio-analysis-sharpe-ratio">Portfolio Analysis / Sharpe ratio</h1>

## Sharpe Ratio

> Code samples

```bash
curl https://example.com/portfolio/analysis/sharpe-ratio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "assetsReturns": [
      0.01,
      0.05
    ],
    "portfolios": [
      {
        "assetsWeights": [
          1,
          0
        ]
      },
      {
        "assetsWeights": [
          0,
          1
        ]
      }
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/analysis/sharpe-ratio`

Compute the Sharpe ratio of one or several portfolio(s) from either:
* Portfolio assets arithmetic returns and assets covariance matrix
* Portfolio values

References
* Carl R. Bacon, Practical Portfolio Performance Measurement and Attribution
* Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "assetsReturns": [
    0.01,
    0.05
  ],
  "portfolios": [
    {
      "assetsWeights": [
        1,
        0
      ]
    },
    {
      "assetsWeights": [
        0,
        1
      ]
    }
  ],
  "riskFreeRate": 0
}
```

<h3 id="sharpe-ratio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|
|» riskFreeRate|body|number|true|The risk free rate|
|» *oneOf*|body|object|false|none|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioSharpeRatio": -0.8835333925060923
    }
  ]
}
```

<h3 id="sharpe-ratio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="sharpe-ratio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioSharpeRatio|number|true|none|The Sharpe ratio of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Bias-Adjusted Sharpe Ratio

> Code samples

```bash
curl https://example.com/portfolio/analysis/sharpe-ratio/bias-adjusted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/analysis/sharpe-ratio/bias-adjusted`

Compute the Sharpe ratio of one or several portfolio(s), adjusted for small sample bias.

References
* [Opdyke, J., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)


> Body parameter

```json
{
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ],
  "riskFreeRate": 0
}
```

<h3 id="bias-adjusted-sharpe-ratio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioBiasAdjustedSharpeRatio": -0.8314248234836994
    }
  ]
}
```

<h3 id="bias-adjusted-sharpe-ratio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="bias-adjusted-sharpe-ratio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioBiasAdjustedSharpeRatio|number|true|none|The bias-adjusted Sharpe ratio of the portfolio|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Sharpe Ratio Confidence Interval

> Code samples

```bash
curl https://example.com/portfolio/analysis/sharpe-ratio/confidence-interval \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "confidenceIntervalType": "twoSided",
    "confidenceLevel": 0.99,
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/analysis/sharpe-ratio/confidence-interval`

Build a confidence interval for the Sharpe ratio of one or several portfolio(s).

References
* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)


> Body parameter

```json
{
  "confidenceIntervalType": "twoSided",
  "confidenceLevel": 0.99,
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ],
  "riskFreeRate": 0
}
```

<h3 id="sharpe-ratio-confidence-interval-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» confidenceIntervalType|body|string|false|The type of confidence interval to build|
|» confidenceLevel|body|number|false|The confidence level of the confidence interval to build, in percentage|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|
|» riskFreeRate|body|number|true|The risk free rate|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» confidenceIntervalType|twoSided|
|» confidenceIntervalType|lowerOneSided|
|» confidenceIntervalType|upperOneSided|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioSharpeRatioConfidenceInterval": [
        null,
        0.3309901925834179
      ]
    }
  ]
}
```

<h3 id="sharpe-ratio-confidence-interval-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="sharpe-ratio-confidence-interval-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioSharpeRatioConfidenceInterval|[number]|true|none|portfolioSharpeRatioConfidenceInterval[0] (resp. portfolioSharpeRatioConfidenceInterval[1]) is the lower (resp. upper) bound of the built confidence interval, possibly equal to null in case of a negative infinite (resp. positive infinite) bound|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Probabilistic Sharpe Ratio

> Code samples

```bash
curl https://example.com/portfolio/analysis/sharpe-ratio/probabilistic \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "benchmarkValues": [
      100,
      101,
      98,
      102,
      95,
      90
    ],
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/analysis/sharpe-ratio/probabilistic`

Compute the probabilistic Sharpe ratio of one or several portfolio(s).

References
* [Opdyke, J.D., Comparing Sharpe ratios: So where are the p-values?. J Asset Manag 8, 308–336 (2007)](https://link.springer.com/article/10.1057/palgrave.jam.2250084)
* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)


> Body parameter

```json
{
  "benchmarkValues": [
    100,
    101,
    98,
    102,
    95,
    90
  ],
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ],
  "riskFreeRate": 0
}
```

<h3 id="probabilistic-sharpe-ratio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» benchmarkSharpeRatio|body|number|true|The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|
|» riskFreeRate|body|number|true|The risk free rate|
|» *oneOf*|body|object|false|none|
|» benchmarkValues|body|[number]|true|benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t; all the portfolioValues arrays must have the same length as the benchmarkValues array|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioProbabilisticSharpeRatio": 0.0452890775705429
    }
  ]
}
```

<h3 id="probabilistic-sharpe-ratio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="probabilistic-sharpe-ratio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioProbabilisticSharpeRatio|number|true|none|The probabilistic Sharpe ratio of the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Minimum Track Record Length

> Code samples

```bash
curl https://example.com/portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "benchmarkValues": [
      100,
      101,
      98,
      85,
      75,
      65
    ],
    "portfolios": [
      {
        "portfolioValues": [
          100,
          95,
          100,
          90,
          85,
          70
        ]
      }
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/analysis/sharpe-ratio/probabilistic/minimum-track-record-length`

Compute the minimum track record length of one or several portfolio(s).

References
* [Bailey, David H. and Lopez de Prado, Marcos, The Sharpe Ratio Efficient Frontier (April 1, 2012). Journal of Risk, Vol. 15, No. 2, Winter 2012/13](https://ssrn.com/abstract=1821643)


> Body parameter

```json
{
  "benchmarkValues": [
    100,
    101,
    98,
    85,
    75,
    65
  ],
  "portfolios": [
    {
      "portfolioValues": [
        100,
        95,
        100,
        90,
        85,
        70
      ]
    }
  ],
  "riskFreeRate": 0
}
```

<h3 id="minimum-track-record-length-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» *oneOf*|body|object|false|none|
|» benchmarkSharpeRatio|body|number|true|The Sharpe ratio of the benchmark, in the same sampling frequency as the sampling frequency of the portfolio values|
|» confidenceLevel|body|number|false|The confidence level of the minimum track record length, in percentage|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|
|» riskFreeRate|body|number|true|The risk free rate|
|» *oneOf*|body|object|false|none|
|» benchmarkValues|body|[number]|false|benchmarkValues[t] is the value of the benchmark at the time t; the benchmarkValues array must have the same length as all the portfolioValues arrays|
|» confidenceLevel|body|number|false|The confidence level of the minimum track record length, in percentage|
|» portfolios|body|[object]|true|none|
|» » portfolioValues|body|[number]|true|portfolioValues[t] is the value of the portfolio at the time t|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioSharpeRatioMinimumTrackRecordLength": null
    }
  ]
}
```

<h3 id="minimum-track-record-length-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="minimum-track-record-length-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioSharpeRatioMinimumTrackRecordLength|number|true|none|The minimum track record length of the portfolio, in number of required arithmetic returns, possibly equal to null in case the minimum track record length does not exist|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-portfolio-construction">Portfolio Construction</h1>

## Investable Portfolio

> Code samples

```bash
curl https://example.com/portfolio/construction/investable \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 4,
    "assetsGroups": [
      [
        1,
        2
      ],
      [
        3,
        4
      ]
    ],
    "assetsGroupsWeights": [
      0.4,
      0.4
    ],
    "assetsPrices": [
      10,
      25,
      100,
      500
    ],
    "assetsWeights": [
      0.2,
      null,
      null,
      null
    ],
    "portfolioValue": 10000
  }'
```

`POST /portfolio/construction/investable`

Compute an investable portfolio as close as possible, in terms of assets weights, to a desired portfolio, taking into account:
* The desired assets weights
* The desired assets groups weights
* The desired maximum assets groups weights
* The prices of the assets
* The portfolio value
* The requirement to purchase some assets by round lots or by odd lots
* The possibility to purchase some assets by a fractional quantity of shares
* The requirement to purchase a minimum number of shares, or a minimum monetary value, for some assets

References
* [Steiner, Andreas, Accuracy and Rounding in Portfolio Construction](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2261131)


> Body parameter

```json
{
  "assets": 4,
  "assetsGroups": [
    [
      1,
      2
    ],
    [
      3,
      4
    ]
  ],
  "assetsGroupsWeights": [
    0.4,
    0.4
  ],
  "assetsPrices": [
    10,
    25,
    100,
    500
  ],
  "assetsWeights": [
    0.2,
    null,
    null,
    null
  ],
  "portfolioValue": 10000
}
```

<h3 id="investable-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsGroups|body|[[integer]]|false|none|
|» assetsGroupsWeights|body|[number]|false|assetsGroupsWeights[i] is the desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present|
|» assetsMinimumNotionalValues|body|[number]|false|assetsMinimumNotionalValues[i] is the minimum monetary value that the position in the asset i is required to represent when the asset i is included in the portfolio|
|» assetsMinimumPositions|body|[number]|false|assetsMinimumPositions[i] is the minimum number of shares of the asset i that is required to purchase when the asset i is included in the portfolio (usual values are the same as for assetsSizeLots)|
|» assetsPrices|body|[number]|true|assetsPrices[i] is the price of the asset i|
|» assetsSizeLots|body|[number]|false|assetsSizeLots[i] is the number of shares by which it is required to purchase the asset i (usual values are 1 if the asset needs to be purchased share by share, 100 if the asset needs to be purchased by an integer multiple of 100 shares, and 1/1000000 - e.g. for Robinhood broker - if the asset can be purchased by fractional shares)|
|» assetsWeights|body|[number]|false|assetsWeights[i] is the desired weight of the asset i in the portfolio, in percentage (can be null to indicate no specific desire)|
|» maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum desired weight of the assets group k in the portfolio, in percentage (can be null to indicate no specific desire); requires assetsGroups to be present|
|» portfolioValue|body|number|true|The monetary value of the portfolio|

> Example responses

> 200 Response

```json
{
  "assetsPositions": [
    200,
    80,
    20,
    4
  ],
  "assetsWeights": [
    0.2,
    0.2,
    0.2,
    0.2
  ]
}
```

<h3 id="investable-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="investable-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsPositions|[number]|true|none|assetsPositions[i] is the number of shares of the asset i in the portfolio|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Mimicking Portfolio

> Code samples

```bash
curl https://example.com/portfolio/construction/mimicking \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetReturns": [
          0.01,
          0.02,
          0.03
        ]
      },
      {
        "assetReturns": [
          -0.01,
          -0.02,
          -0.03
        ]
      }
    ],
    "benchmarkReturns": [
      0,
      0,
      0
    ]
  }'
```

`POST /portfolio/construction/mimicking`

Construct a portfolio as close as possible, in terms of returns, to a benchmark, optionally subject to:
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References 
* Konstantinos Benidis, Yiyong Feng, Daniel P. Palomar, Optimization Methods for Financial Index Tracking: From Theory to Practice, now publishers Inc (7 juin 2018)


> Body parameter

```json
{
  "assets": [
    {
      "assetReturns": [
        0.01,
        0.02,
        0.03
      ]
    },
    {
      "assetReturns": [
        -0.01,
        -0.02,
        -0.03
      ]
    }
  ],
  "benchmarkReturns": [
    0,
    0,
    0
  ]
}
```

<h3 id="mimicking-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetReturns|body|[number]|true|assetReturns[t] is the return of the asset at the time t; all the assetReturns arrays must have the same length|
|» benchmarkReturns|body|[number]|true|benchmarkReturns[t] is the return of the benchmark at the time t; the benchmarkReturns array must have the same length as all the assetReturns arrays|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.5,
    0.5
  ]
}
```

<h3 id="mimicking-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mimicking-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Random Portfolio

> Code samples

```bash
curl https://example.com/portfolio/construction/random \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "portfolios": 2
  }'
```

`POST /portfolio/construction/random`

Construct one or several random portfolio(s), optionally subject to:       
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

> Because of the nature of the endpoint, subsequent calls with the same input data will result in different output data.

References
* [William Thornton Shaw, Monte Carlo Portfolio Optimization for General Investor Risk-Return Objectives and Arbitrary Return Distributions: A Solution for Long-Only Portfolios](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1680224)


> Body parameter

```json
{
  "assets": 3,
  "portfolios": 2
}
```

<h3 id="random-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» constraints|body|object|false|none|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» portfolios|body|integer|false|The number of portfolios to construct|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "assetsWeights": [
        0.11429744284625785,
        0.0038592674702259393,
        0.8818432896835162
      ]
    },
    {
      "assetsWeights": [
        0.546026607601722,
        0.07707923859010406,
        0.376894153808174
      ]
    }
  ]
}
```

<h3 id="random-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="random-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-portfolio-optimization">Portfolio Optimization</h1>

## Equal Risk Contributions Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/equal-risk-contributions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "constraints": {
      "maximumAssetsWeights": [
        0.4,
        1
      ]
    }
  }'
```

`POST /portfolio/optimization/equal-risk-contributions`

Compute the asset weights of the equal risk contributions portfolio, optionally subject to:  
* Minimum and maximum weights constraints  

References
 * [Richard, Jean-Charles and Roncalli, Thierry, Constrained Risk Budgeting Portfolios: Theory, Algorithms, Applications & Puzzles](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3331184)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "constraints": {
    "maximumAssetsWeights": [
      0.4,
      1
    ]
  }
}
```

<h3 id="equal-risk-contributions-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» constraints|body|object|false|none|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.4,
    0.5999975015091795
  ]
}
```

<h3 id="equal-risk-contributions-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="equal-risk-contributions-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Equal Sharpe Ratio Contributions Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/equal-sharpe-ratio-contributions \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.05,
        0.02
      ],
      [
        0.02,
        0.07
      ]
    ],
    "assetsReturns": [
      0.05,
      0.1
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/optimization/equal-sharpe-ratio-contributions`

Compute the asset weights of the equal Sharpe Ratio contributions portfolio.

References
 * [Andreas Steiner, Sharpe Ratio Contribution and Attribution Analysis](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1839166")


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.05,
      0.02
    ],
    [
      0.02,
      0.07
    ]
  ],
  "assetsReturns": [
    0.05,
    0.1
  ],
  "riskFreeRate": 0
}
```

<h3 id="equal-sharpe-ratio-contributions-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.6666666666666666,
    0.3333333333333333
  ]
}
```

<h3 id="equal-sharpe-ratio-contributions-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="equal-sharpe-ratio-contributions-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Equal Volatility Weighted Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/equal-volatility-weighted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsVolatilities": [
      0.05,
      0.1
    ]
  }'
```

`POST /portfolio/optimization/equal-volatility-weighted`

Compute the asset weights of the equal volatility-weighted portfolio.

References
 * [Tristan Froidure, Khalid Jalalzai and Yves Choueifaty, Portfolio Rho-Representativity, International Journal of Theoretical and Applied FinanceVol. 22, No. 07, 1950034 (2019)](https://www.worldscientific.com/doi/10.1142/S0219024919500341)


> Body parameter

```json
{
  "assets": 2,
  "assetsVolatilities": [
    0.05,
    0.1
  ]
}
```

<h3 id="equal-volatility-weighted-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsVolatilities|body|[number]|true|assetsVolatilities[i] is the volatility of the asset i|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.3333333333333333,
    0.6666666666666666
  ]
}
```

<h3 id="equal-volatility-weighted-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="equal-volatility-weighted-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Equal Weighted Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/equal-weighted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2
  }'
```

`POST /portfolio/optimization/equal-weighted`

Compute the asset weights of the equal-weighted portfolio.

References
 * [Victor DeMiguel and al., Optimal Versus Naive Diversification: How Inefficient is the 1/N Portfolio Strategy?](https://academic.oup.com/rfs/article-abstract/22/5/1915/1592901?redirectedFrom=fulltext)


> Body parameter

```json
{
  "assets": 2
}
```

<h3 id="equal-weighted-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.5,
    0.5
  ]
}
```

<h3 id="equal-weighted-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="equal-weighted-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Hierarchical Risk Parity Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/hierarchical-risk-parity \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "constraints": {
      "maximumAssetsWeights": [
        0.4,
        1
      ],
      "maximumPortfolioExposure": 0.5,
      "minimumPortfolioExposure": 0.5
    }
  }'
```

`POST /portfolio/optimization/hierarchical-risk-parity`

Compute the asset weights of the hierarchical risk parity portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Lopez de Prado, M. (2016). Building diversified portfolios that outperform out-of-sample. Journal of Portfolio Management, 42(4), 59–69](https://jpm.pm-research.com/content/42/4/59)
 * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "constraints": {
    "maximumAssetsWeights": [
      0.4,
      1
    ],
    "maximumPortfolioExposure": 0.5,
    "minimumPortfolioExposure": 0.5
  }
}
```

<h3 id="hierarchical-risk-parity-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» clusteringMethod|body|string|false|The hierarchical clustering method to use|
|» clusteringOrdering|body|string|false|The order to impose on the hierarchical clustering tree leaves|
|» constraints|body|object|false|none|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» clusteringMethod|singleLinkage|
|» clusteringMethod|averageLinkage|
|» clusteringMethod|completeLinkage|
|» clusteringMethod|wardLinkage|
|» clusteringOrdering|r-hclust|
|» clusteringOrdering|optimal|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.4,
    0.09999999999998999
  ]
}
```

<h3 id="hierarchical-risk-parity-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="hierarchical-risk-parity-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Hierarchical Clustering-Based Risk Parity Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/hierarchical-risk-parity/clustering-based \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "constraints": {
      "maximumAssetsWeights": [
        0.4,
        1
      ],
      "maximumPortfolioExposure": 0.5,
      "minimumPortfolioExposure": 0.5
    }
  }'
```

`POST /portfolio/optimization/hierarchical-risk-parity/clustering-based`

Compute the asset weights of the hierarchical clustering-based risk parity portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Machine Learning for Asset Management: New Developments and Financial Applications, Emmanuel Jurczenko, Chapter 9, Harald Lohre,Carsten Rother,Kilian Axel Schäfer, Hierarchical Risk Parity: Accounting for Tail Dependencies in Multi-asset Multi-factor Allocations](https://onlinelibrary.wiley.com/doi/10.1002/9781119751182.ch9)
 * [Thomas Raffinot, Hierarchical Clustering-Based Asset Allocation, The Journal of Portfolio Management Multi-Asset Special Issue 2018, 44 (2) 89-99](https://jpm.pm-research.com/content/44/2/89.abstract)
 * [Raffinot, Thomas, The Hierarchical Equal Risk Contribution Portfolio](https://ssrn.com/abstract=3237540)
 * [Johann Pfitzinger & Nico Katzke, 2019. A constrained hierarchical risk parity algorithm with cluster-based capital allocation. Working Papers 14/2019, Stellenbosch University, Department of Economics](https://ideas.repec.org/p/sza/wpaper/wpapers328.html)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "constraints": {
    "maximumAssetsWeights": [
      0.4,
      1
    ],
    "maximumPortfolioExposure": 0.5,
    "minimumPortfolioExposure": 0.5
  }
}
```

<h3 id="hierarchical-clustering-based-risk-parity-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» acrossClusterAllocationMethod|body|string|false|The allocation method to use across clusters|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» clusteringMethod|body|string|false|The hierarchical clustering method to use|
|» clusteringOrdering|body|string|false|The order to impose on the hierarchical clustering tree leaves|
|» clusters|body|integer|false|The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference|
|» constraints|body|object|false|none|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» withinClusterAllocationMethod|body|string|false|The allocation method to use within clusters|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» acrossClusterAllocationMethod|equalWeighting|
|» acrossClusterAllocationMethod|inverseVolatility|
|» acrossClusterAllocationMethod|inverseVariance|
|» clusteringMethod|singleLinkage|
|» clusteringMethod|averageLinkage|
|» clusteringMethod|completeLinkage|
|» clusteringMethod|wardLinkage|
|» clusteringOrdering|r-hclust|
|» clusteringOrdering|optimal|
|» withinClusterAllocationMethod|equalWeighting|
|» withinClusterAllocationMethod|inverseVolatility|
|» withinClusterAllocationMethod|inverseVariance|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.4,
    0.09999999999998999
  ]
}
```

<h3 id="hierarchical-clustering-based-risk-parity-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="hierarchical-clustering-based-risk-parity-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Inverse Variance Weighted Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/inverse-variance-weighted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsVariances": [
      1,
      0.5
    ]
  }'
```

`POST /portfolio/optimization/inverse-variance-weighted`

Compute the asset weights of the inverse variance-weighted portfolio.

References
 * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)


> Body parameter

```json
{
  "assets": 2,
  "assetsVariances": [
    1,
    0.5
  ]
}
```

<h3 id="inverse-variance-weighted-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsVariances|body|[number]|true|assetsVariances[i] is the variance of the asset i|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.3333333333333333,
    0.6666666666666666
  ]
}
```

<h3 id="inverse-variance-weighted-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="inverse-variance-weighted-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Inverse Volatility Weighted Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/inverse-volatility-weighted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsVolatilities": [
      0.05,
      0.1
    ]
  }'
```

`POST /portfolio/optimization/inverse-volatility-weighted`

Compute the asset weights of the inverse volatility-weighted portfolio.

References
 * [Raul Leote de Carvalho and al., Demystifying Equity Risk-Based Strategies: A Simple Alpha Plus Beta Description](https://doi.org/10.3905/jpm.2012.38.3.056)


> Body parameter

```json
{
  "assets": 2,
  "assetsVolatilities": [
    0.05,
    0.1
  ]
}
```

<h3 id="inverse-volatility-weighted-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsVolatilities|body|[number]|true|assetsVolatilities[i] is the volatility of the asset i|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.6666666666666666,
    0.3333333333333333
  ]
}
```

<h3 id="inverse-volatility-weighted-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="inverse-volatility-weighted-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Market Capitalization Weighted Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/market-capitalization-weighted \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsMarketCapitalizations": [
      1,
      2
    ]
  }'
```

`POST /portfolio/optimization/market-capitalization-weighted`

Compute the asset weights of the market capitalization-weighted portfolio.

References
 * [Wikipedia, Capitalization-weighted Index](https://en.wikipedia.org/wiki/Capitalization-weighted_index)


> Body parameter

```json
{
  "assets": 2,
  "assetsMarketCapitalizations": [
    1,
    2
  ]
}
```

<h3 id="market-capitalization-weighted-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsMarketCapitalizations|body|[number]|true|assetsMarketCapitalizations[i] is the market capitalization of the asset i|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.3333333333333333,
    0.6666666666666666
  ]
}
```

<h3 id="market-capitalization-weighted-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="market-capitalization-weighted-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Maximum Decorrelation Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/maximum-decorrelation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCorrelationMatrix": [
      [
        1,
        0.9,
        0.85
      ],
      [
        0.9,
        1,
        0.7
      ],
      [
        0.85,
        0.7,
        1
      ]
    ]
  }'
```

`POST /portfolio/optimization/maximum-decorrelation`

Compute the asset weights of the maximum decorrelation portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [F. Goltz, S. Sivasubramanian, Scientific Beta Maximum Decorrelation Indices](http://www.scientificbeta.com/download/file/scientific-beta-max-decorrelation-indices)


> Body parameter

```json
{
  "assets": 3,
  "assetsCorrelationMatrix": [
    [
      1,
      0.9,
      0.85
    ],
    [
      0.9,
      1,
      0.7
    ],
    [
      0.85,
      0.7,
      1
    ]
  ]
}
```

<h3 id="maximum-decorrelation-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j|
|» assetsReturns|body|[number]|false|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0,
    0.5,
    0.5
  ]
}
```

<h3 id="maximum-decorrelation-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="maximum-decorrelation-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Maximum Ulcer Performance Index Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/maximum-ulcer-performance-index \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetPrices": [
          100,
          95,
          110
        ]
      },
      {
        "assetPrices": [
          100,
          105,
          100
        ]
      }
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/optimization/maximum-ulcer-performance-index`

Compute the asset weights of the maximum Ulcer Performance Index portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

Notes:  
* This endpoint will return an error if the maximum Ulcer Performance Index portfolio has a negative Ulcer Performance Index

References
 * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)


> Body parameter

```json
{
  "assets": [
    {
      "assetPrices": [
        100,
        95,
        110
      ]
    },
    {
      "assetPrices": [
        100,
        105,
        100
      ]
    }
  ],
  "riskFreeRate": 0
}
```

<h3 id="maximum-ulcer-performance-index-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetPrices|body|[number]|true|assetPrices[t] is the price of the asset at the time t|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.3101913068855954,
    0.6898086931144047
  ]
}
```

<h3 id="maximum-ulcer-performance-index-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="maximum-ulcer-performance-index-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Minimum Correlation Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/minimum-correlation \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCorrelationMatrix": [
      [
        1,
        0.9,
        0.85
      ],
      [
        0.9,
        1,
        0.7
      ],
      [
        0.85,
        0.7,
        1
      ]
    ],
    "assetsVolatilities": [
      0.14,
      0.18,
      0.22
    ]
  }'
```

`POST /portfolio/optimization/minimum-correlation`

Compute the asset weights of the (heuristic) minimum correlation portfolio, which is a portfolio built using the Minimum Correlation Algorithm discovered by [David Varadi](https://cssanalytics.wordpress.com/).

References
 * [CSSA, Minimum Correlation Algorithm Paper Release](https://cssanalytics.wordpress.com/2012/09/21/minimum-correlation-algorithm-paper-release/)


> Body parameter

```json
{
  "assets": 3,
  "assetsCorrelationMatrix": [
    [
      1,
      0.9,
      0.85
    ],
    [
      0.9,
      1,
      0.7
    ],
    [
      0.85,
      0.7,
      1
    ]
  ],
  "assetsVolatilities": [
    0.14,
    0.18,
    0.22
  ]
}
```

<h3 id="minimum-correlation-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|none|
|» assetsCorrelationMatrix|body|[[number]]|true|assetsCorrelationMatrix[i][j] is the correlation between the asset i and the asset j; required if assetsReturns is not provided|
|» assetsVolatilities|body|[number]|true|assetsVariances[i] is the volatility of the asset i; required if assetsCorrelationMatrix is provided and assetsVariances is not provided|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.21059806981924115,
    0.3087866303991204,
    0.48061529978163836
  ]
}
```

<h3 id="minimum-correlation-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="minimum-correlation-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Minimum Ulcer Index Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/minimum-ulcer-index \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetPrices": [
          100,
          95,
          110
        ]
      },
      {
        "assetPrices": [
          100,
          105,
          100
        ]
      }
    ]
  }'
```

`POST /portfolio/optimization/minimum-ulcer-index`

Compute the asset weights of the minimum Ulcer Index portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Peter G. Martin, Ulcer Index, An Alternative Approach to the Measurement of Investment Risk & Risk-Adjusted Performance](http://www.tangotools.com/ui/ui.htm)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Portfolio Optimization with Drawdown Constraints, Supply Chain and Finance, p 209-228](https://doi.org/10.1142/9789812562586_0013)
 * [A. Chekhlov, S. Uryasev, M. Zabarankin, Drawdown Measure in Portfolio Optimization, International Journal of Theoretical and Applied FinanceVol. 08, No. 01, pp. 13-58 (2005)](https://www.worldscientific.com/doi/10.1142/S0219024905002767)


> Body parameter

```json
{
  "assets": [
    {
      "assetPrices": [
        100,
        95,
        110
      ]
    },
    {
      "assetPrices": [
        100,
        105,
        100
      ]
    }
  ]
}
```

<h3 id="minimum-ulcer-index-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetPrices|body|[number]|true|assetPrices[t] is the price of the asset at the time t|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.24615095383708674,
    0.7538490461629133
  ]
}
```

<h3 id="minimum-ulcer-index-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="minimum-ulcer-index-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Most Diversified Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/most-diversified \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.04,
        0.01
      ],
      [
        0.01,
        0.01
      ]
    ]
  }'
```

`POST /portfolio/optimization/most-diversified`

Compute the asset weights of the most diversified portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [Yves Choueifaty and Yves Coignard, Toward Maximum Diversification, The Journal of Portfolio Management Fall 2008, 35 (1) 40-51](https://doi.org/10.3905/JPM.2008.35.1.40)


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.04,
      0.01
    ],
    [
      0.01,
      0.01
    ]
  ]
}
```

<h3 id="most-diversified-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.33333333333333337,
    0.6666666666666666
  ]
}
```

<h3 id="most-diversified-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="most-diversified-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-portfolio-optimization-mean-variance">Portfolio Optimization / Mean-Variance</h1>

## Maximum Return Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/maximum-return \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsReturns": [
      0.02,
      0.01
    ],
    "constraints": {
      "maximumAssetsWeights": [
        0.4,
        1
      ]
    }
  }'
```

`POST /portfolio/optimization/maximum-return`

Compute the asset weights of the maximum return portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsReturns": [
    0.02,
    0.01
  ],
  "constraints": {
    "maximumAssetsWeights": [
      0.4,
      1
    ]
  }
}
```

<h3 id="maximum-return-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|false|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.4,
    0.6
  ]
}
```

<h3 id="maximum-return-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="maximum-return-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Diversified Maximum Return Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/maximum-return/diversified \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsReturns": [
      0.02,
      0.01
    ],
    "constraints": {
      "maximumAssetsWeights": [
        0.4,
        1
      ]
    }
  }'
```

`POST /portfolio/optimization/maximum-return/diversified`

Compute the asset weights of the diversified maximum return portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsReturns": [
    0.02,
    0.01
  ],
  "constraints": {
    "maximumAssetsWeights": [
      0.4,
      1
    ]
  }
}
```

<h3 id="diversified-maximum-return-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|false|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » deltaReturn|body|number|false|The relative tolerance over the maximum return portfolio return|
|» » deltaVolatility|body|number|false|The relative tolerance over the maximum return portfolio volatility, if applicable|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.3999998369710335,
    0.6000001630289665
  ]
}
```

<h3 id="diversified-maximum-return-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="diversified-maximum-return-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Subset Resampling-Based Maximum Return Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/maximum-return/subset-resampling-based \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsReturns": [
      0.01,
      0.02,
      0.03
    ],
    "subsetPortfoliosEnumerationMethod": "complete"
  }'
```

`POST /portfolio/optimization/maximum-return/subset-resampling-based`

Compute the asset weights of the subset resampling-based maximum return portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 3,
  "assetsReturns": [
    0.01,
    0.02,
    0.03
  ],
  "subsetPortfoliosEnumerationMethod": "complete"
}
```

<h3 id="subset-resampling-based-maximum-return-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|false|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» subsetPortfolios|body|integer|false|The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling|
|» subsetPortfoliosAggregationMethod|body|string|false|The method to aggregate the subset portfolios|
|» subsetPortfoliosEnumerationMethod|body|string|false|The method to enumerate the subset portfolios|
|» subsetSize|body|integer|false|The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subsetPortfoliosAggregationMethod|average|
|» subsetPortfoliosAggregationMethod|median|
|» subsetPortfoliosEnumerationMethod|complete|
|» subsetPortfoliosEnumerationMethod|randomSampling|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0,
    0.3333333333333333,
    0.6666666666666666
  ]
}
```

<h3 id="subset-resampling-based-maximum-return-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="subset-resampling-based-maximum-return-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Maximum Sharpe Ratio Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/maximum-sharpe-ratio \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.05,
        0.02
      ],
      [
        0.02,
        0.07
      ]
    ],
    "assetsReturns": [
      0.05,
      0.1
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/optimization/maximum-sharpe-ratio`

Compute the asset weights of the maximum Sharpe ratio portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.05,
      0.02
    ],
    [
      0.02,
      0.07
    ]
  ],
  "assetsReturns": [
    0.05,
    0.1
  ],
  "riskFreeRate": 0
}
```

<h3 id="maximum-sharpe-ratio-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.27272727272727276,
    0.7272727272727273
  ]
}
```

<h3 id="maximum-sharpe-ratio-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="maximum-sharpe-ratio-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Diversified Maximum Sharpe Ratio Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/maximum-sharpe-ratio/diversified \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.05,
        0.02
      ],
      [
        0.02,
        0.07
      ]
    ],
    "assetsReturns": [
      0.05,
      0.1
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/optimization/maximum-sharpe-ratio/diversified`

Compute the asset weights of the diversified maximum Sharpe ratio portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.05,
      0.02
    ],
    [
      0.02,
      0.07
    ]
  ],
  "assetsReturns": [
    0.05,
    0.1
  ],
  "riskFreeRate": 0
}
```

<h3 id="diversified-maximum-sharpe-ratio-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » deltaReturn|body|number|false|The relative tolerance over the maximum Sharpe ratio portfolio return|
|» » deltaVolatility|body|number|false|The relative tolerance over the maximum Sharpe ratio portfolio volatility|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» riskFreeRate|body|number|true|The risk free rate|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.44545623478220464,
    0.5545437652177954
  ]
}
```

<h3 id="diversified-maximum-sharpe-ratio-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="diversified-maximum-sharpe-ratio-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Subset Resampling-Based Maximum Sharpe Ratio Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCovarianceMatrix": [
      [
        0.05,
        0.02,
        0
      ],
      [
        0.02,
        0.07,
        0.5
      ],
      [
        0,
        0.5,
        0.1
      ]
    ],
    "assetsReturns": [
      0.05,
      0.1,
      0.025
    ],
    "riskFreeRate": 0
  }'
```

`POST /portfolio/optimization/maximum-sharpe-ratio/subset-resampling-based`

Compute the asset weights of the susbet resampling-based maximum Sharpe ratio portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 3,
  "assetsCovarianceMatrix": [
    [
      0.05,
      0.02,
      0
    ],
    [
      0.02,
      0.07,
      0.5
    ],
    [
      0,
      0.5,
      0.1
    ]
  ],
  "assetsReturns": [
    0.05,
    0.1,
    0.025
  ],
  "riskFreeRate": 0
}
```

<h3 id="subset-resampling-based-maximum-sharpe-ratio-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» riskFreeRate|body|number|true|The risk free rate|
|» subsetPortfolios|body|integer|false|The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling|
|» subsetPortfoliosAggregationMethod|body|string|false|The method to aggregate the subset portfolios|
|» subsetPortfoliosEnumerationMethod|body|string|false|The method to enumerate the subset portfolios|
|» subsetSize|body|integer|false|The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subsetPortfoliosAggregationMethod|average|
|» subsetPortfoliosAggregationMethod|median|
|» subsetPortfoliosEnumerationMethod|complete|
|» subsetPortfoliosEnumerationMethod|randomSampling|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.35454545454545444,
    0.5845170454545454,
    0.06093750000000007
  ]
}
```

<h3 id="subset-resampling-based-maximum-sharpe-ratio-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="subset-resampling-based-maximum-sharpe-ratio-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Mean-Variance Efficient Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/mean-variance-efficient \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        1,
        0.3
      ],
      [
        0.3,
        1
      ]
    ],
    "assetsReturns": [
      0.1,
      0.2
    ],
    "constraints": {
      "portfolioReturn": 0.15
    }
  }'
```

`POST /portfolio/optimization/mean-variance-efficient`

Compute the asset weights of a mean-variance efficient portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

> A mean-variance efficient portfolio is a portfolio belonging to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier).

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      1,
      0.3
    ],
    [
      0.3,
      1
    ]
  ],
  "assetsReturns": [
    0.1,
    0.2
  ],
  "constraints": {
    "portfolioReturn": 0.15
  }
}
```

<h3 id="mean-variance-efficient-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|true|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» » portfolioReturn|body|number|false|The portfolio return; exclusive with portfolioVolatility and riskTolerance|
|» » portfolioVolatility|body|number|false|The portfolio volatility; exclusive with portfolioReturn and riskTolerance|
|» » riskTolerance|body|number|false|The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.5,
    0.5
  ]
}
```

<h3 id="mean-variance-efficient-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="mean-variance-efficient-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Diversified Mean-Variance Efficient Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/mean-variance-efficient/diversified \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        1,
        0.3
      ],
      [
        0.3,
        1
      ]
    ],
    "assetsReturns": [
      0.1,
      0.2
    ],
    "constraints": {
      "deltaReturn": 0.05,
      "deltaVolatility": 0.05,
      "portfolioReturn": 0.175
    }
  }'
```

`POST /portfolio/optimization/mean-variance-efficient/diversified`

Compute the asset weights of a diversified mean-variance efficient portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

> A diversified mean-variance efficient portfolio does NOT belong to [the mean-variance efficient frontier](#post-/portfolio/analysis/mean-variance/efficient-frontier), but is close to this frontier.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      1,
      0.3
    ],
    [
      0.3,
      1
    ]
  ],
  "assetsReturns": [
    0.1,
    0.2
  ],
  "constraints": {
    "deltaReturn": 0.05,
    "deltaVolatility": 0.05,
    "portfolioReturn": 0.175
  }
}
```

<h3 id="diversified-mean-variance-efficient-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|true|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » deltaReturn|body|number|false|The relative tolerance over the mean-variance efficient portfolio return|
|» » deltaVolatility|body|number|false|The relative tolerance over the mean-variance efficient portfolio volatility|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» » portfolioReturn|body|number|false|The portfolio return; exclusive with portfolioVolatility and riskTolerance|
|» » portfolioVolatility|body|number|false|The portfolio volatility; exclusive with portfolioReturn and riskTolerance|
|» » riskTolerance|body|number|false|The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.3375016499673578,
    0.6624983500326422
  ]
}
```

<h3 id="diversified-mean-variance-efficient-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="diversified-mean-variance-efficient-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Subset Resampling-Based Mean-Variance Efficient Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/mean-variance-efficient/subset-resampling-based \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 3,
    "assetsCovarianceMatrix": [
      [
        1,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        0,
        0,
        1
      ]
    ],
    "assetsReturns": [
      0.1,
      0.2,
      0.3
    ],
    "constraints": {
      "riskTolerance": 2
    }
  }'
```

`POST /portfolio/optimization/mean-variance-efficient/subset-resampling-based`

Compute the asset weights of a subset resampling-based  mean-variance efficient portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 3,
  "assetsCovarianceMatrix": [
    [
      1,
      0,
      0
    ],
    [
      0,
      1,
      0
    ],
    [
      0,
      0,
      1
    ]
  ],
  "assetsReturns": [
    0.1,
    0.2,
    0.3
  ],
  "constraints": {
    "riskTolerance": 2
  }
}
```

<h3 id="subset-resampling-based-mean-variance-efficient-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|true|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|true|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» » portfolioReturn|body|number|false|The portfolio return; exclusive with portfolioVolatility and riskTolerance|
|» » portfolioVolatility|body|number|false|The portfolio volatility; exclusive with portfolioReturn and riskTolerance|
|» » riskTolerance|body|number|false|The portfolio risk tolerance; exclusive with portfolioReturn and portfolioVolatility|
|» subsetPortfolios|body|integer|false|The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling|
|» subsetPortfoliosAggregationMethod|body|string|false|The method to aggregate the subset portfolios|
|» subsetPortfoliosEnumerationMethod|body|string|false|The method to enumerate the subset portfolios|
|» subsetSize|body|integer|false|The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subsetPortfoliosAggregationMethod|average|
|» subsetPortfoliosAggregationMethod|median|
|» subsetPortfoliosEnumerationMethod|complete|
|» subsetPortfoliosEnumerationMethod|randomSampling|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.24609375,
    0.3125,
    0.44140624999999994
  ]
}
```

<h3 id="subset-resampling-based-mean-variance-efficient-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="subset-resampling-based-mean-variance-efficient-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Minimum Variance Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/minimum-variance \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "constraints": {
      "maximumAssetsWeights": [
        0.4,
        1
      ],
      "maximumPortfolioExposure": 0.5,
      "minimumPortfolioExposure": 0.5
    }
  }'
```

`POST /portfolio/optimization/minimum-variance`

Compute the asset weights of the minimum variance portfolio, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "constraints": {
    "maximumAssetsWeights": [
      0.4,
      1
    ],
    "maximumPortfolioExposure": 0.5,
    "minimumPortfolioExposure": 0.5
  }
}
```

<h3 id="minimum-variance-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|false|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.4,
    0.09999999999998999
  ]
}
```

<h3 id="minimum-variance-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="minimum-variance-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Diversified Minimum Variance Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/minimum-variance/diversified \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "constraints": {
      "maximumAssetsWeights": [
        0.4,
        1
      ],
      "maximumPortfolioExposure": 0.5,
      "minimumPortfolioExposure": 0.5
    }
  }'
```

`POST /portfolio/optimization/minimum-variance/diversified`

Compute the asset weights of the diversified minimum variance portfolio, as defined in the first reference, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

The diversification measure used in the optimization procedure is the [Herfindahl-Hirschman Index](https://en.wikipedia.org/wiki/Herfindahl%E2%80%93Hirschman_index) of the assets weights.

References
 * [Alejandro Corvalan, 2005. Well Diversified Efficient Portfolios, Working Papers Central Bank of Chile 336, Central Bank of Chile](https://ideas.repec.org/p/chb/bcchwp/336.html)
 * [Bouchaud, Jean-Philippe and Potters, Marc and Aguilar, Jean-Pierre, Missing Information and Asset Allocation, arXiv, 1997](https://arxiv.org/abs/cond-mat/9707042)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "constraints": {
    "maximumAssetsWeights": [
      0.4,
      1
    ],
    "maximumPortfolioExposure": 0.5,
    "minimumPortfolioExposure": 0.5
  }
}
```

<h3 id="diversified-minimum-variance-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|false|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » deltaReturn|body|number|false|The relative tolerance over the minimum variance portfolio return, if applicable|
|» » deltaVolatility|body|number|false|The relative tolerance over the minimum variance portfolio volatility|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.31288809725799416,
    0.18711190967754268
  ]
}
```

<h3 id="diversified-minimum-variance-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="diversified-minimum-variance-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Subset Resampling-Based Minimum Variance Portfolio

> Code samples

```bash
curl https://example.com/portfolio/optimization/minimum-variance/subset-resampling-based \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": 2,
    "assetsCovarianceMatrix": [
      [
        0.0025,
        0.0005
      ],
      [
        0.0005,
        0.01
      ]
    ],
    "constraints": {
      "maximumAssetsWeights": [
        0.4,
        1
      ],
      "maximumPortfolioExposure": 0.5,
      "minimumPortfolioExposure": 0.5
    },
    "subsetPortfolios": 1
  }'
```

`POST /portfolio/optimization/minimum-variance/subset-resampling-based`

Compute the asset weights of the subset resampling-based minimum variance portfolio, following the methodology described in the first and the second references, optionally subject to:  
* Minimum and maximum weights constraints
* Maximum group weights constraints
* Minimum and maximum portfolio exposure constraints

References
 * [CSSA, Random Subspace Optimization (RSO)](https://cssanalytics.wordpress.com/2013/10/06/random-subspace-optimization-rso/)
 * [Subset Optimization for Asset Allocation,Benjamin J. Gillen](https://www.bengillen.com/uploads/1/2/3/8/123891022/subsets.pdf)
 * Harry M. Markowitz, Portfolio Selection, Efficient Diversification of Investments, Second edition, Blackwell Publishers Inc.


> Body parameter

```json
{
  "assets": 2,
  "assetsCovarianceMatrix": [
    [
      0.0025,
      0.0005
    ],
    [
      0.0005,
      0.01
    ]
  ],
  "constraints": {
    "maximumAssetsWeights": [
      0.4,
      1
    ],
    "maximumPortfolioExposure": 0.5,
    "minimumPortfolioExposure": 0.5
  },
  "subsetPortfolios": 1
}
```

<h3 id="subset-resampling-based-minimum-variance-portfolio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|integer|true|The number of assets|
|» assetsCovarianceMatrix|body|[[number]]|true|assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j|
|» assetsReturns|body|[number]|false|assetsReturns[i] is the arithmetic return of asset i|
|» constraints|body|object|false|none|
|» » assetsGroups|body|[[integer]]|false|none|
|» » assetsGroupsMatrix|body|[[number]]|false|assetsGroupsMatrix[k][i] is the weight of the asset i in the group of assets k; exclusive with assetsGroups|
|» » maximumAssetsGroupsWeights|body|[number]|false|maximumAssetsGroupsWeights[k] is the maximum weight of the assets group k in the portfolio, in percentage between 0 and 1 if assetsGroups is provided|
|» » maximumAssetsWeights|body|[number]|false|maximumAssetsWeights[i] is the maximum weight of the asset i in the portfolio, in percentage|
|» » maximumPortfolioExposure|body|number|false|The maximum portfolio exposure; must be higher than or equal to minimumPortfolioExposure|
|» » minimumAssetsWeights|body|[number]|false|minimumAssetsWeights[i] is the minimum weight of the asset i in the portfolio, in percentage|
|» » minimumPortfolioExposure|body|number|false|The minimum portfolio exposure; must be lower than or equal to maximumPortfolioExposure|
|» subsetPortfolios|body|integer|false|The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling|
|» subsetPortfoliosAggregationMethod|body|string|false|The method to aggregate the subset portfolios|
|» subsetPortfoliosEnumerationMethod|body|string|false|The method to enumerate the subset portfolios|
|» subsetSize|body|integer|false|The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets|

#### Enumerated Values

|Parameter|Value|
|---|---|
|» subsetPortfoliosAggregationMethod|average|
|» subsetPortfoliosAggregationMethod|median|
|» subsetPortfoliosEnumerationMethod|complete|
|» subsetPortfoliosEnumerationMethod|randomSampling|

> Example responses

> 200 Response

```json
{
  "assetsWeights": [
    0.4,
    0.09999999999998999
  ]
}
```

<h3 id="subset-resampling-based-minimum-variance-portfolio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="subset-resampling-based-minimum-variance-portfolio-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|assetsWeights|[number]|true|none|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

<h1 id="portfolio-optimizer-portfolio-simulation">Portfolio Simulation</h1>

## Drift-weight Portfolio Rebalancing

> Code samples

```bash
curl https://example.com/portfolio/simulation/rebalancing/drift-weight \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetPrices": [
          100,
          105,
          110
        ]
      },
      {
        "assetPrices": [
          15,
          12.5,
          11.25
        ]
      },
      {
        "assetPrices": [
          0.5,
          0.51,
          0.49
        ]
      }
    ],
    "portfolios": [
      {
        "assetsWeights": [
          1,
          0,
          0
        ]
      },
      {
        "assetsWeights": [
          0,
          1,
          0
        ]
      },
      {
        "assetsWeights": [
          0,
          0,
          1
        ]
      }
    ]
  }'
```

`POST /portfolio/simulation/rebalancing/drift-weight`

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being never rebalanced (a.k.a. buy and hold).

References
* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)


> Body parameter

```json
{
  "assets": [
    {
      "assetPrices": [
        100,
        105,
        110
      ]
    },
    {
      "assetPrices": [
        15,
        12.5,
        11.25
      ]
    },
    {
      "assetPrices": [
        0.5,
        0.51,
        0.49
      ]
    }
  ],
  "portfolios": [
    {
      "assetsWeights": [
        1,
        0,
        0
      ]
    },
    {
      "assetsWeights": [
        0,
        1,
        0
      ]
    },
    {
      "assetsWeights": [
        0,
        0,
        1
      ]
    }
  ]
}
```

<h3 id="drift-weight-portfolio-rebalancing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetPrices|body|[number]|true|assetPrices[t] is the price of the asset at the time t|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioValues": [
        100,
        105,
        110
      ]
    },
    {
      "portfolioValues": [
        100,
        83.33333333333334,
        75
      ]
    },
    {
      "portfolioValues": [
        100,
        102,
        98
      ]
    }
  ]
}
```

<h3 id="drift-weight-portfolio-rebalancing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="drift-weight-portfolio-rebalancing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioValues|[number]|true|none|portfolioValues[t] is the value of the portfolio at the time t|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Fixed-weight Portfolio Rebalancing

> Code samples

```bash
curl https://example.com/portfolio/simulation/rebalancing/fixed-weight \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetPrices": [
          100,
          105,
          110
        ]
      },
      {
        "assetPrices": [
          15,
          12.5,
          11.25
        ]
      },
      {
        "assetPrices": [
          0.5,
          0.51,
          0.49
        ]
      }
    ],
    "portfolios": [
      {
        "assetsWeights": [
          0.5,
          0.5,
          0
        ]
      },
      {
        "assetsWeights": [
          0,
          0.5,
          0.5
        ]
      },
      {
        "assetsWeights": [
          0.5,
          0,
          0.5
        ]
      }
    ]
  }'
```

`POST /portfolio/simulation/rebalancing/fixed-weight`

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward fixed weights at the beginning of each time period.

References
* [Hillion, Pierre, The Ex-Ante Rebalancing Premium (March 11, 2016). INSEAD Working Paper No. 2016/15/FIN](https://ssrn.com/abstract=2746471)        


> Body parameter

```json
{
  "assets": [
    {
      "assetPrices": [
        100,
        105,
        110
      ]
    },
    {
      "assetPrices": [
        15,
        12.5,
        11.25
      ]
    },
    {
      "assetPrices": [
        0.5,
        0.51,
        0.49
      ]
    }
  ],
  "portfolios": [
    {
      "assetsWeights": [
        0.5,
        0.5,
        0
      ]
    },
    {
      "assetsWeights": [
        0,
        0.5,
        0.5
      ]
    },
    {
      "assetsWeights": [
        0.5,
        0,
        0.5
      ]
    }
  ]
}
```

<h3 id="fixed-weight-portfolio-rebalancing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetPrices|body|[number]|true|assetPrices[t] is the price of the asset at the time t|
|» portfolios|body|[object]|true|none|
|» » assetsWeights|body|[number]|true|assetsWeights[i] is the weight of the asset i in the portfolio, in percentage|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioValues": [
        100,
        94.16666666666667,
        91.70039682539684
      ]
    },
    {
      "portfolioValues": [
        100,
        92.66666666666667,
        86.21633986928106
      ]
    },
    {
      "portfolioValues": [
        100,
        103.5,
        103.93487394957984
      ]
    }
  ]
}
```

<h3 id="fixed-weight-portfolio-rebalancing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="fixed-weight-portfolio-rebalancing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioValues|[number]|true|none|portfolioValues[t] is the value of the portfolio at the time t|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>

## Random-weight Portfolio Rebalancing

> Code samples

```bash
curl https://example.com/portfolio/simulation/rebalancing/random-weight \
  -X POST \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H "X-API-Key: ${API_KEY}" \
  -d '{
    "assets": [
      {
        "assetPrices": [
          100,
          105,
          110
        ]
      },
      {
        "assetPrices": [
          15,
          12.5,
          11.25
        ]
      },
      {
        "assetPrices": [
          0.5,
          0.51,
          0.49
        ]
      }
    ],
    "portfolios": 2
  }'
```

`POST /portfolio/simulation/rebalancing/random-weight`

Simulate the evolution of one or several portfolio(s) over one or several time period(s), the portfolio(s) being rebalanced toward random weights at the beginning of each time period.

References
* [R Stein, Not fooled by randomness: Using random portfolios to analyse investment funds, Investment Analysts Journal, 43:79, 1-15, DOI: 10.1080/10293523.2014.11082564](https://www.tandfonline.com/doi/abs/10.1080/10293523.2014.11082564)


> Body parameter

```json
{
  "assets": [
    {
      "assetPrices": [
        100,
        105,
        110
      ]
    },
    {
      "assetPrices": [
        15,
        12.5,
        11.25
      ]
    },
    {
      "assetPrices": [
        0.5,
        0.51,
        0.49
      ]
    }
  ],
  "portfolios": 2
}
```

<h3 id="random-weight-portfolio-rebalancing-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» assets|body|[object]|true|none|
|» » assetPrices|body|[number]|true|assetPrices[t] is the price of the asset at the time t|
|» portfolios|body|integer|false|The number of portfolios to simulate|

> Example responses

> 200 Response

```json
{
  "portfolios": [
    {
      "portfolioValues": [
        100,
        90.8178403620342,
        84.65407625993741
      ]
    },
    {
      "portfolioValues": [
        100,
        102.43258698946813,
        101.32419718013273
      ]
    }
  ]
}
```

<h3 id="random-weight-portfolio-rebalancing-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|OK|OK|Inline|

<h3 id="random-weight-portfolio-rebalancing-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|portfolios|[object]|true|none|none|
|» portfolioValues|[number]|true|none|portfolioValues[t] is the value of the portfolio at the time t|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
ApiKeyAuth
</aside>
